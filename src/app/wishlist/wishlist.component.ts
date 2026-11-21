import { Component, inject, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-wishlist',
  imports: [NgIf, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent implements OnInit {
  service = inject(MovieService);
  movies = signal<Movie[]>([]);

  ngOnInit() {
    const ids = this.service.getWishlistIds();
    if (ids.length === 0) return;
    forkJoin(ids.map(id => this.service.getMovieById(id))).subscribe({
      next: m => this.movies.set(m),
      error: e => console.error(e)
    });
  }
}