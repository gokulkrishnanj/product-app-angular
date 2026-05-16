import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public onSignUp(email: String, password: String, role: String){
    console.log('role', role);
    const userData = {
      'userMailId': email,
      'password': password,
      'role': role
    }
    console.log("signup called");
    this.userService.signUp(userData).subscribe(
      (response: any)=>{
        console.log(response);
      },
      (error: any)=>{
        console.log(error);
      }
    )
  }

}
