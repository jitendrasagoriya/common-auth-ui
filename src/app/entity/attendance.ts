import { Time } from "@angular/common";

export interface Attendance {
        id:number,
        homeHelpId:number;
        shiftId:number;
        date: Date,
        present: boolean,
        name: string,
        inTime: Time,
        outTime: Time,
        shiftTime: Time
        status: string,
        helpType: string
        currentStatus:string;
        bgClass:string;
        
      
}