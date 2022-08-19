import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { HelpCreateRequest, ShiftsEntity } from 'src/app/entity/helpcreaterequest';
import { AddHelpsService } from './add-helps.service';

@Component({
  selector: 'app-add-helps',
  templateUrl: './add-helps.component.html',
  styleUrls: ['./add-helps.component.scss']
})
export class AddHelpsComponent implements OnInit {
  [x: string]: any;

  registerForm: FormGroup;
  submitted = false;
  private notifier: NotifierService;
  helpCreateRequest:HelpCreateRequest = new HelpCreateRequest();

  constructor(private formBuilder: FormBuilder, notifier: NotifierService, private addHelpsService:AddHelpsService) {
     

    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      helpType:['', [Validators.required]],
      salary:['', [Validators.required]],
      address:[''],
      mShift:[''],
      aShift:[''],
      eShift:[''],
      nShift:[''],
   });

   this.notifier = notifier;
   $.getScript('./assets/js/form-validations.js');
  }

  get f() { return this.registerForm.controls; }

  ngOnInit(): void {  
  }

  onSubmit(){
    
    // stop here if form is invalid 
    if (this.registerForm.invalid) {
      return;
    }  
    this.submitted = true;
    this.helpCreateRequest.name = this.registerForm.get('firstname')?.value +" " + this.registerForm.get('lastname')?.value;
    this.helpCreateRequest.phone = this.registerForm.get('mobile')?.value;
    this.helpCreateRequest.helpType = this.registerForm.get('helpType')?.value;
    this.helpCreateRequest.salary = this.registerForm.get('salary')?.value;
    this.helpCreateRequest.shifts = this.loadShift();    

    console.log( JSON.stringify( this.helpCreateRequest));

    this.addHelpsService.createNewHelp(this.helpCreateRequest)
      .subscribe(res=> {
        if(res.errorCode!=undefined && res.errorCode!=200) {
          this.notifier.notify( 'error',res.errorMessage);
          this.submitted = false;
        } else{
          this.notifier.notify( 'success',"Your Help has been successfully added.");
          this.submitted = false;
          this.registerForm.reset();
        }
      });

  }


  public  loadShift() : ShiftsEntity[] {

    let shifts:ShiftsEntity[] = [];
    let shift: ShiftsEntity = new ShiftsEntity();
    shift.time = this.registerForm.get('mShift')?.value;
    if(shift.time != '') {
      if(shift.time.split(":").length <3)
         shift.time = shift.time+":00";
      shifts.push(shift);
    } 

    shift = new ShiftsEntity();
    shift.time = this.registerForm.get('aShift')?.value;
    if(shift.time != ''){
      if(shift.time.split(":").length <3)
        shift.time = shift.time+":00";
      shifts.push(shift);
    }

    shift = new ShiftsEntity();
    shift.time = this.registerForm.get('eShift')?.value;
    if(shift.time != ''){
      if(shift.time.split(":").length <3)
        shift.time = shift.time+":00";
      shifts.push(shift);
    }

    shift = new ShiftsEntity();
    shift.time = this.registerForm.get('nShift')?.value;
    if(shift.time != ''){
      if(shift.time.split(":").length <3)
        shift.time = shift.time+":00";

      shifts.push(shift);
    }

    return shifts;
  }

}
