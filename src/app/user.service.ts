import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { FirebaseDatabase } from '@angular/fire';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firebase: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.firebase.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email,
      foto:user.photoURL
    });
  }
}
