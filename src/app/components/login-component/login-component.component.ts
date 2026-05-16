import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log("Login component loaded");
  }

  

  public onLogIn(email: string, password: string){
    const userData = {
      'userMailId': email,
      'password': password,
    }
    console.log("login called");
    this.userService.logIn(userData).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
