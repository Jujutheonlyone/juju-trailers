import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../core/service/auth.service";
import {ToastService} from "../../core/service/toast.service";
import {ERROR_MESSAGE} from "../../core/const/error-message";
import {SUCCESS_MESSAGE} from "../../core/const/success-message";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(
    public authService: AuthService,
    private toastService: ToastService,
    private router: Router,
  ) {
  }

  public async signIn() {
    const { email, password } = this.loginForm.value;
    try {
      await this.authService.signIn(email, password);
      await this.toastService.showToast({ message: ERROR_MESSAGE.default, severity: 'error' });
    } catch (e) {
      console.error('Error LoginPage.signIn', e);
      await this.toastService.showToast({ message: SUCCESS_MESSAGE.signInSuccessful, severity: 'success' });
    }
  }

  public async loginWithAmazon() {

  }

  public isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }
}
