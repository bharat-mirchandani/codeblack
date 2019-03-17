import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'sign-in',
    component: SignInComponent,
  }, {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'about',
    component: AboutmeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
