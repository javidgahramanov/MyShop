import { UserService } from './../user.service';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, public auth: AuthService, private router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
       
        if (returnUrl=='null') {
          router.navigate(['/products']);
        } else {
          router.navigateByUrl(returnUrl);
          console.log('a2');
        }
        userService.save(user);
      }
    });
  }

  login() {
    this.auth.login();
  }
}
