import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AllComponent } from '../../pages/all/all.component';

@Component({
  selector: 'app-banner2',
  standalone: true,
  imports: [RouterModule,AllComponent],
  templateUrl: './banner2.component.html',
  styleUrl: './banner2.component.css'
})
export class Banner2Component {

}
