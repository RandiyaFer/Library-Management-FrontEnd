import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './Compo/banner/banner.component';
import { AllComponent } from './pages/all/all.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent,AllComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-02';
}
