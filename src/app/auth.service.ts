import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User>;

    constructor(
            private userService: UserService,
            private afAuth: AngularFireAuth, 
            private route: ActivatedRoute, 
            private router: Router) { 
        this.user$ = afAuth.authState;
    }

    login() {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);

        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        this.afAuth.auth.signOut();
    }

    get() {
        return this.user$
            .pipe(switchMap(user => this.userService.get(user.uid)))
    }
}
