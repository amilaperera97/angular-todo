import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'amila';
  password = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin () {
    this.router.navigate(['welcome',this.username]); 
  }

}
