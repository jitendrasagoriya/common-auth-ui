export interface PageableResponce {
    content:          Help[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    numberOfElements: number;
    first:            boolean;
    empty:            boolean;
}

export interface Help {
    id:       number;
    name:     string;
    helpType: string;
    salary:   number;
    phone:    string;
    isActive: boolean;
    homeId:   string;
    shifts:   Shift[];
}

export interface Shift {
    id:   number;
    time: string;
}

export interface Pageable {
    sort:       Sort;
    offset:     number;
    pageSize:   number;
    pageNumber: number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}