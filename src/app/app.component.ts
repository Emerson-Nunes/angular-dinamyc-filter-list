import { Component } from '@angular/core';
import { DinamycFilterListComponent } from './dinamyc-filter-list/dinamyc-filter-list.component';

@Component({
  selector: 'app-root',
  imports: [DinamycFilterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dinamyc-filter-list';
}
