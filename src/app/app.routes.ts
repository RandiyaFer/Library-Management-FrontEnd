import { Routes } from '@angular/router';
import { BannerComponent } from './Compo/banner/banner.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ViewAllBorrowersComponent } from './pages/view-all-borrowers/view-all-borrowers.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';

export const routes: Routes = [
    {
    path:"",
    component:LoginComponent},
    {path:"view-all-books",
    component:ViewAllBooksComponent},
    {path:"fff",
    component:LoginComponent},
    {path:"kkk",
    component:RegisterComponent},
    {path:"bbb",
    component:ViewAllBorrowersComponent},
    {path:"hhh",
    component:BannerComponent},
];
