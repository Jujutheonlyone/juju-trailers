import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(6)]),
    hasTermsChecked: new FormControl<boolean>(false, [Validators.required, Validators.requiredTrue]),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  public async handleRegisterUser(): Promise<boolean> {
    const {email, password} = this.registerForm.value;
    try {
      await this.authService.handleSignUp(email, password)
      return this.router.navigate([''])
    } catch (e) {
      console.log(e)
      throw new Error(e as string);
    }
  }
}
