import { Component, output } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  imports: [FaIconComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  faSearch = faMagnifyingGlass;
  titleChange = output<string>();

  searchMovieByTitle(event: Event) {
    this.titleChange.emit((event.target as HTMLInputElement).value);
  }
}