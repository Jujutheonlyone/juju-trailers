import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public async signUp(username: string, password: string) {

  }

  public async confirmSignUp(username: string, confirmationCode: string) {
  }

  public async signIn(username: string, password: string) {
  }

  public signInWithAmazon(): void {
  }

  public async signOut() {
  }
}

function federatedSignIn(arg0: { provider: string; }) {
}

