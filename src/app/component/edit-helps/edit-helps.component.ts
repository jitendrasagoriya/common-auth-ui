import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes, RoutesRecognized } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Help } from 'src/app/entity/help';
import { HelpCreateRequest, ShiftsEntity } from 'src/app/entity/helpcreaterequest';
import { AddHelpsService } from '../add-helps/add-helps.service';
import { EditHelpsService } from './edit-helps.service';

@Component({
  selector: 'app-edit-helps',
  templateUrl: './edit-helps.component.html',
  styleUrls: ['./edit-helps.component.scss']
})
export class EditHelpsComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  private notifier: NotifierService;
  helpCreateRequest:HelpCreateRequest = new HelpCreateRequest();
  help:Help | undefined;
  id:number | undefined = 0;
  nameArray:string[]|undefined = [];

  constructor(private formBuilder: FormBuilder, notifier: NotifierService, private service:EditHelpsService,private routes:ActivatedRoute) { 

    this.id = Number(this.routes.snapshot.paramMap.get('id'))
    this.loadHelps(this.id);
    
    this.notifier = notifier;
    $.getScript('./assets/js/form-validations.js');


     

    this.editForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: [ '', [Validators.required]],
      mobile: ['', [Validators.required]],
      helpType:['', [Validators.required]],
      salary:[ '', [Validators.required]],
      address:['' ],
      mShift:[''],
      aShift:[''],
      eShift:[''],
      nShift:[''],
    });

  }

  get f() { return this.editForm.controls; }

  ngOnInit(): void {
     
    
  }

   loadHelps(id:number) {
     this.service.loadHelpsById(id)
      .subscribe(h=>{
        this.help = h; 
        this.id = this.help?.id;
        this.nameArray = this.help?.name.split(' ') ;
        if(this.nameArray!=undefined && this.nameArray[0]!=undefined) {
          this.editForm.controls["firstname"].setValue(this.nameArray[0]!=undefined?this.nameArray[0]:'')
          this.editForm.controls["lastname"].setValue(this.nameArray[1]!=undefined?this.nameArray[1]:'')
        }else {
          this.editForm.controls["firstname"].setValue(this.help?.name );
        }
        this.editForm.controls["mobile"].setValue(this.help?.phone);
        this.editForm.controls["helpType"].setValue(this.help?.helpType);
        this.editForm.controls["salary"].setValue(this.help?.salary);

        this.editForm.controls["mShift"].setValue(this.help?.shifts[0]!=undefined?this.help.shifts[1].time:'');
        this.editForm.controls["aShift"].setValue(this.help?.shifts[1]!=undefined?this.help.shifts[1].time:'');
        this.editForm.controls["eShift"].setValue(this.help?.shifts[2]!=undefined?this.help.shifts[1].time:'');
        this.editForm.controls["nShift"].setValue(this.help?.shifts[3]!=undefined?this.help.shifts[1].time:'');

        
      })
   }

   onSubmit(){
    
    // stop here if form is invalid 
    if (this.editForm.invalid) {
      return;
    }  
    this.submitted = true;
    this.helpCreateRequest.name = this.editForm.get('firstname')?.value +" " + this.editForm.get('lastname')?.value;
    this.helpCreateRequest.phone = this.editForm.get('mobile')?.value;
    this.helpCreateRequest.helpType = this.editForm.get('helpType')?.value;
    this.helpCreateRequest.salary = this.editForm.get('salary')?.value;
    this.helpCreateRequest.shifts = this.loadShift();    

    console.log( JSON.stringify( this.helpCreateRequest));

    this.service.updateHelp(this.helpCreateRequest)
      .subscribe(res=> {
        if(res.errorCode!=undefined && res.errorCode!=200) {
          this.notifier.notify( 'error',res.errorMessage);
          this.submitted = false;
        } else{
          this.notifier.notify( 'success',"Your Help has been successfully added.");
          this.submitted = false;
          this.editForm.reset();
        }
      });

  }


  public  loadShift() : ShiftsEntity[] {

    let shifts:ShiftsEntity[] = [];
    let shift: ShiftsEntity = new ShiftsEntity();
    shift.time = this.editForm.get('mShift')?.value;
    if(shift.time != '') {
      shift.time = shift.time+":00";
      shifts.push(shift);
    } 

    shift = new ShiftsEntity();
    shift.time = this.editForm.get('aShift')?.value;
    if(shift.time != ''){
      shift.time = shift.time+":00";
      shifts.push(shift);
    }

    shift = new ShiftsEntity();
    shift.time = this.editForm.get('eShift')?.value;
    if(shift.time != ''){
      shift.time = shift.time+":00";
      shifts.push(shift);
    }

    shift = new ShiftsEntity();
    shift.time = this.editForm.get('nShift')?.value;
    if(shift.time != ''){
      shift.time = shift.time+":00";
      shifts.push(shift);
    }

    return shifts;
  }


}
