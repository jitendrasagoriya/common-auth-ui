export interface HelpsDetailsResponce {
    content?: (ContentEntity)[] | null;
    pageable: Pageable;
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }
  export interface ContentEntity {
    id: number;
    name: string;
    helpType: string;
    salary: number;
    phone: string;
    isActive: boolean;
    homeId: string;
    shifts?: (ShiftsEntity)[] | null;
  }
  export interface ShiftsEntity {
    id: number;
    time: string;
  }
  export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
  }
  export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  }
  