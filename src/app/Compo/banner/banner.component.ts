import { Component } from '@angular/core';
import { Banner2Component } from '../banner2/banner2.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [Banner2Component,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {

}
