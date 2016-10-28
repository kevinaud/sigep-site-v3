import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ExecBoardComponent } from './exec-board/exec-board.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { AlumniComponent } from './alumni/alumni.component';
import { DonateComponent } from './donate/donate.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'exec-board',
    component: ExecBoardComponent
  },
  {
    path: 'recruitment',
    component: RecruitmentComponent
  },
  {
    path: 'alumni',
    component: AlumniComponent
  },
  {
    path: 'donate',
    component: DonateComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

export const appNavLocations = [
    {
      title: 'Home',
      route: '/home'
    },
    {
      title: 'Exec Board',
      route: '/exec-board'
    },
    {
      title: 'Recruitment',
      route: '/recruitment'
    },
    {
      title: 'Alumni',
      route: '/alumni'
    },
    {
      title: 'Contact',
      route: '/contact'
    },
    {
      title: 'Donate',
      route: '/donate'
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
