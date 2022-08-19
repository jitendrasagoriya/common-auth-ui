import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    {
        path: '/dashboard/analytics', title: 'Dashboard', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [ ]
    },
    {
        path: '', title: 'Helps', icon: 'bx bx-category', class: 'sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/helps/view', title: 'Show', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/helps/add', title: 'Add', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/attendance/view', title: 'Attendance', icon: 'bx bx-right-arrow-alt', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: 'https://themeforest.net/user/codewrrap/portfolio', title: 'Support', icon: 'bx bx-support', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }

    
];