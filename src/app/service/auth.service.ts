import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {confirmSignUp, signIn, signOut, signUp} from 'aws-amplify/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public async handleSignUp(username: string, password: string) {
    try {
      const signUpOutput = await signUp({
        username,
        password
      });
      signUpOutput.userId
      this.currentUserSubject.next(user);
      console.log(user);
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

  public async handleSignIn(username: string, password: string) {
    try {
      const user = await signIn({username, password});
      this.currentUserSubject.next(user);
      console.log(user);
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

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }
}

function federatedSignIn(arg0: { provider: string; }) {
}
