import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  userMail: string;
  userPass: string;
  login(mail: string, pass: string) {
    console.log(pass);

    window.alert(mail);
  }
}
