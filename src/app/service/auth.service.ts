import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public async signUp(username: string, password: string) {
    try {
      const { user } = await Auth.signUp({
        username,
        password
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  public async confirmSignUp(username: string, confirmationCode: string) {
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      console.log('User confirmed');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  public async signIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  public signInWithAmazon(): void {
    Auth.federatedSignIn({ provider: 'Amazon' });
  }

  public async signOut() {
    try {
      await Auth.signOut();
      console.log('User signed out');
    } catch (error) {
      console.log('error signing out', error);
    }
  }
}

function federatedSignIn(arg0: { provider: string; }) {
}