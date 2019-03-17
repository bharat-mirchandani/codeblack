import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public email = "" as string;
  public password = "" as string;
  constructor() { }

  ngOnInit() {
  }
  public submit() {
    console.log("email:", this.email);
    console.log("password:", this.password);
  }
}
