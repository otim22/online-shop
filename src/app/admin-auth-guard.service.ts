import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard {
    user$: Observable<firebase.User>;

    constructor(private auth: AuthService, private userService: UserService) { }

  //   canActivate() {
  //       return this.auth.user$
  //           .pipe(switchMap(user => this.userService.get(user.uid)));
  // }
}
