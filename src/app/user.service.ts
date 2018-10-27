import { Injectable } from '@angular/core';
import { 
    AngularFirestore, 
    AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AppUser } from './models/app-users';

export interface User { name: string, email: string }

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;

    constructor(private afStore: AngularFirestore) {     
    }

    save(user: firebase.User) {
        this.usersCollection = this.afStore.collection<User>('users');
        this.users = this.usersCollection.valueChanges();
    }

    // getBoard(id: string): Observable<User> {
    //     return new Observable((observer) => {
    //         this.ref.doc().get().then((doc) => {
    //             let data = doc.data();
    //             observer.next({
    //                 key: doc.id,
    //                 title: data.title,
    //             });
    //         });
    //     });
    // }

    get(uid: string): Observable<AppUser> {
        // return this.afStore.collection('users' + uid);
        return new Observable((observable) => {
            // observable.next('users' + uid)
            console.log('WIP')
        });
    }
}
