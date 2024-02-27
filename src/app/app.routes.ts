import { Routes } from '@angular/router';
import { AllComponent } from './pages/all/all.component';
import { Banner2Component } from './Compo/banner2/banner2.component';
import { BannerComponent } from './Compo/banner/banner.component';

export const routes: Routes = [
    {path:"",
    component:AllComponent},
    {path:"ggg",
    component:Banner2Component},
    {path:"hhh",
    component:BannerComponent}
];
