import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-movie-list',
  imports: [NgIf, RouterLink, SearchBarComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  service = inject(MovieService);
  movies = signal<Movie[]>([]);

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getMovieList().subscribe({
      next: m => this.movies.set(m),
      error: e => console.error(e)
    });
  }

  onSearch(title: string) {
    if (!title.trim()) {
      this.load();
      return;
    }
    this.service.getMovieByTitle(title).subscribe({
      next: m => this.movies.set(m),
      error: e => console.error(e)
    });
  }
}