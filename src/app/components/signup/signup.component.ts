import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  public message: String = '';

  public onSignUp(email: String, password: String, role: String){
    console.log('role', role);
    const userData = {
      'userMailId': email,
      'password': password,
      'role': role
    }
    console.log("signup called");
    this.userService.signUp(userData).subscribe({
      next: (response: any) => {
        this.message = response.message;
        console.log('my signup response', response);
        setTimeout(() => {
          this.message = '';
        }, 3000);
      },
      error: (err: any) => {
        this.message = err.error.message;
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }
    }
    )
  }

  public onReset(form: NgForm){
    form.resetForm();
  }

}
