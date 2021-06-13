import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(username: string, pass: string) {
    username.trim();
    pass.trim();
    if (username === "" || pass === "")
      window.alert("Fill in all fields");
    else {      
      this.userService.logIn(username, pass)//.subscribe(result => {})
      //this.router.navigate(['/register']);
    }
  }
}