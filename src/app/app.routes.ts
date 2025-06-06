import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { DisplayWalletsComponent } from './components/display-wallets/display-wallets.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'wallets',component:DisplayWalletsComponent},
    {path:'wallet/add',component:RegistrationComponent},
    {path:'**',component:NotfoundComponent}
];
