import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Auth } from 'src/app/entity/auth';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from './../../http/message.service';


import { AuthServiceService } from '../auth-service.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  private notifier: NotifierService;
  userName:string='';
  password!:string;
  registerForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private route: ActivatedRoute, private historyService: HistoryService,
    private authService: AuthServiceService,notifier: NotifierService, private formBuilder: FormBuilder,
    private messageService: MessageService) {
      this.registerForm = this.formBuilder.group({
        userName: ['jitendra.sagoriya', [Validators.required]],
        password: ['J1tendra', [Validators.required, Validators.minLength(6)]]
     });
      this.notifier = notifier;
      $.getScript('./assets/js/form-validations.js');
     }

     // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }


  // On Forgotpassword link click
  onForgotpassword() {
    this.router.navigate(['forgot-password'], { relativeTo: this.route.parent });
  }

  // On Signup link click
  onSignup() {
    this.router.navigate(['sign-up'], { relativeTo: this.route.parent });
  }

  onSignIn() {
   
    
       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }   
   this.submitted = true;
   const auth: Auth = {} as Auth;
   auth.name = this.registerForm.controls['userName'].value;
   auth.password = this.registerForm.controls['password'].value;
    
    this.authService.login(auth)
      .subscribe(token => {             
        if (token._token!=undefined) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', token._token)
          localStorage.setItem('userName', token.userName)
          this.router.navigate(['dashboard/analytics']);
          this.submitted = false;
        } else { 
          this.notifier.notify( 'error',this.messageService.getMostResentMessage() );
          this.submitted = false;
          return;
        }
      });
  }

  ngOnInit(): void {
   
  }

}
