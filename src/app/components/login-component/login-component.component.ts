import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  public message: string = '';

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit(): void {
    console.log("Login component loaded");
  }

  

  public onLogIn(email: string, password: string){
    const userData = {
      'userMailId': email,
      'password': password,
    }
    console.log("login called");
    this.userService.logIn(userData).subscribe({
      next: (response: any) => {
        this.message = response.message;
        setTimeout(() => {
          this.message = '';
        }, 3000);
        this.router.navigate(['/products']);
      },
      error: (err: any) => {
        this.message = err.error.message;
        setTimeout(() => {
          this.message = '';
        }, 3000);
      }});
  }

  public onReset(form: NgForm){
    form.resetForm();
  }

}
