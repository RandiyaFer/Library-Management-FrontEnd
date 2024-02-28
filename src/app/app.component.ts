import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './Compo/banner/banner.component';
import { ViewAllBooksComponent } from './pages/view-all-books/view-all-books.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BannerComponent,ViewAllBooksComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-02';
}
