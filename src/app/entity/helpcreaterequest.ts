export class HelpCreateRequest {
    name!: string;
    helpType!: string;
    salary!: number;
    phone!: string;
    shifts?: (ShiftsEntity)[] | null;
    homeId?: string;
    id?: number;
    isActive?: boolean;
  }
  export class ShiftsEntity {
    time!: string;
  }
  