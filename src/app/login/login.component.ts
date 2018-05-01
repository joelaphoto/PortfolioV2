import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  signIn(userEmail: string, userPassword: string) {
    let newUser = new User(userEmail, userPassword);
    this.authService.login(newUser)
    .then(resolve => this.router.navigate(['Admin']))
    .catch(error => this.error = error.message);
  }

}
