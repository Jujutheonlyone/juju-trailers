import {Directive, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";
import {AuthService} from "../../service/auth.service";
import {USER_TYPE} from "../../model/user.model";
import {Schema, User} from "../../../../amplify/data/resource";

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective implements OnInit {
  private originalStyle!: string;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private elemRef: ElementRef,
  ) {}

  public ngOnInit(): void {
    this.originalStyle = this.elemRef.nativeElement.style.display;
    this.elemRef.nativeElement.style.display = 'none';
    this.checkAccess();
  }

  public checkAccess() {
    let hasPermission: boolean = false;

    return this.authService.$currentUser.pipe(
      tap((u) => {
        u
        const isLoggedIn: boolean = !!u;
        const userTypes: USER_TYPE[] = this.activatedRoute.snapshot.data['userTypes'];

        if(userTypes.length) {
          hasPermission = userTypes.some((uT) => u?.userType === uT);
        } else {
          hasPermission = true;
        }

        if(isLoggedIn && hasPermission){
          this.elemRef.nativeElement.style = this.originalStyle;
        }
      }),
    )
  }


}
