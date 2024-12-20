import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {confirmSignUp, getCurrentUser, signIn, signOut, signUp} from 'aws-amplify/auth'
import {TInitialUser} from "../model/user.model";
import {Router} from "@angular/router";
import {ToastService} from "./toast.service";
import {SUCCESS_MESSAGE} from '../const/success-message';
import {ROUTES} from "../const/routes";
import {Hub} from 'aws-amplify/utils';
import {AuthNextSignInStep} from '@aws-amplify/auth/dist/esm/types/models';
import {Schema} from "../../../../amplify/data/resource";
import {DbService} from "./db.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<null | TInitialUser | Schema['User']['type']>;
  public $currentUser: Observable<null | Schema['User']['type'] | TInitialUser>;

  constructor(
    private router: Router,
    private toast: ToastService,
    private dbService: DbService
  ) {
    this.logAuthEvents();

    getCurrentUser().then((cognitoUser) => {
      if(cognitoUser){
        console.log(cognitoUser);
        this.dbService.dbClient.models.User.get({ uid: cognitoUser.userId }).then((user) => {
          this.currentUserSubject.next(user.data);
        });
      }
    })

    this.currentUserSubject = new BehaviorSubject<null | Schema['User']['type'] | TInitialUser>(null);
    this.$currentUser = this.currentUserSubject.asObservable();
  }

  private handleNextSteps = (nextStep: AuthNextSignInStep['signInStep']) => {
    switch (nextStep) {
/*    case 'CONFIRM_SIGN_UP':
        this.handleConfirmSignUp(username, password);
        break;*/
/*    case 'CONFIRM_SIGN_IN_WITH_EMAIL_CODE':
        this.handleConfirmSignIn(username, confirmationCode);
        break;*/
/*      case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED':
        this.handleUpdatePassword(username, password, newPassword);
        break;*/
/*      default:
        this.handleSignIn(username, password);*/
    }
  }

  public async handleSignUp(username: string, password: string) {
    try {
      const signUpOutput = await signUp({
        username,
        password
      });

      if(signUpOutput?.userId){
        const user:
          null | TInitialUser
          = {
          uid: signUpOutput.userId,
          customerType: 'individual',
          phone: '',
          username,
          email: username,
        };
        this.dbService.dbClient.models.User.create({...user});
        this.currentUserSubject.next(user);
      }

    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  public async handleConfirmSignUp(username: string, confirmationCode: string) {
    try {
      await confirmSignUp({username, confirmationCode});
      console.log('User confirmed');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  public async signIn(username: string, password: string) {
    try {
      const {isSignedIn, nextStep} = await signIn({username, password});

      if (isSignedIn) {
        const cognitoUser = await getCurrentUser();
        const userData: TInitialUser | null | Schema['User']['type'] = await this.dbService.dbClient.models.User.get({uid: cognitoUser.userId}).then((user) => {
          return user.data;
        });
        this.currentUserSubject.next(userData);
        await this.toast.showToast({message: SUCCESS_MESSAGE.signInSuccessful, severity: 'success'});
        await this.router.navigate(ROUTES['de'].start);
        return;
      }

      if (nextStep) {
        {
          this.handleNextSteps(nextStep.signInStep)
        }
      }
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  public async handleSignOut() {
    try {
      await signOut();
      this.currentUserSubject.next(null);
      console.log('User signed out');
    } catch (error) {
      console.log('error signing out', error);
    }
  }

  public get currentUserValue(): TInitialUser | null | Schema['User']['type'] {
    return this.currentUserSubject.value;
  }

  private logAuthEvents() {
    Hub.listen('auth', ({ payload }) => {
      switch (payload.event) {
        case 'signedIn':
          console.log('user have been signedIn successfully.');
          break;
        case 'signedOut':
          console.log('user have been signedOut successfully.');
          break;
        case 'tokenRefresh':
          console.log('auth tokens have been refreshed.');
          break;
        case 'tokenRefresh_failure':
          console.log('failure while refreshing auth tokens.');
          break;
        case 'signInWithRedirect':
          console.log('signInWithRedirect API has successfully been resolved.');
          break;
        case 'signInWithRedirect_failure':
          console.log('failure while trying to resolve signInWithRedirect API.');
          break;
      }
    });
  }
}
