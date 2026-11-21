import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-detail',
  imports: [NgIf, DatePipe, FaIconComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  service = inject(MovieService);
  movie = signal<Movie | null>(null);
  liked = signal(false);
  faHeart = faHeart;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.liked.set(this.service.getWishlistIds().includes(id));
    this.service.getMovieById(id).subscribe({
      next: m => this.movie.set(m),
      error: e => console.error(e)
    });
  }

  toggle(id: number) {
    this.liked.set(this.service.toggleWishlist(id));
  }
}