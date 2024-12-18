import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {confirmSignUp, signIn, signOut, signUp, getCurrentUser} from 'aws-amplify/auth'
import {Schema} from "../../../amplify/data/resource";
import {generateClient} from "aws-amplify/data";
import {V6Client} from "@aws-amplify/api-graphql";
import {TInitialUser} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<null | TInitialUser | Schema['User']['type']>;
  public $currentUser: Observable<null | Schema['User']['type'] | TInitialUser>;
  private client: V6Client<Schema> = generateClient<Schema>();

  constructor() {
    getCurrentUser().then((cognitoUser) => {
      if(cognitoUser){
        this.client.models.User.get({ uid: cognitoUser.userId }).then((user) => {
          this.currentUserSubject.next(user.data);
        });
      }
    })

    this.currentUserSubject = new BehaviorSubject<null | Schema['User']['type'] | TInitialUser>(null);
    this.$currentUser = this.currentUserSubject.asObservable();
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
          email: '',
        };
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
      await signIn({ username, password });
      const cognitoUser = await getCurrentUser();
      const userData: TInitialUser | null | Schema['User']['type'] = await this.client.models.User.get({ uid: cognitoUser.userId }).then((user) => {
        return user.data;
      });

      this.currentUserSubject.next(userData);
      console.log(userData);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  public handleSignInWithAmazon(): void {
    federatedSignIn({ provider: 'Amazon' });
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
}

function federatedSignIn(arg0: { provider: string; }) {
}
