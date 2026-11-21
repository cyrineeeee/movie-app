import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Movie, MovieResponse } from './models/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private http = inject(HttpClient);
  private apiKey = environment.apiKey;
  private base = 'https://api.themoviedb.org/3';
  readonly imgUrl = 'https://image.tmdb.org/t/p/w500';

  getMovieList(): Observable<Movie[]> {
    return this.http
      .get<MovieResponse>(`${this.base}/movie/now_playing?api_key=${this.apiKey}`)
      .pipe(map(r => r.results));
  }

  getMovieById(id: number | string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieByTitle(title: string): Observable<Movie[]> {
    return this.http
      .get<MovieResponse>(`${this.base}/search/movie?query=${encodeURIComponent(title)}&api_key=${this.apiKey}`)
      .pipe(map(r => r.results));
  }

  getWishlistIds(): number[] {
    try {
      return JSON.parse(localStorage.getItem('wishlist') ?? '[]');
    } catch {
      return [];
    }
  }

  toggleWishlist(id: number): boolean {
    let ids = this.getWishlistIds();
    const added = !ids.includes(id);
    ids = added ? [...ids, id] : ids.filter(i => i !== id);
    localStorage.setItem('wishlist', JSON.stringify(ids));
    return added;
  }
}