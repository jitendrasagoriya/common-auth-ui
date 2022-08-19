

    export interface Attendance {
        id: number;
        homeHelpId: number;
        shiftId: number;
        date: any;
        present: string;
        name: string;
        inTime: string;
        outTime: string;
        shiftTime: string; 
        status: string;
        helpType: string;
        currentStatus?: any;
    }

    export interface HelpsCurrentStatus {
        first: string;
        second: number;
    }

    export interface StatusCount {
        first: string;
        second: number;
    }

    export interface MonthlyReport {
        name: string;
        time: string;
        statusCount: StatusCount[];
        totalCount: number;
    }

    export interface DashBoardResponce {
        attendances: Attendance[];
        helpsCurrentStatus: HelpsCurrentStatus[];
        jsonMonthlyReport: MonthlyReport[];
    }

    export class MonthlyStatistics {
        name!: string;
        shift!: string;
        statistis!: string;
    }


