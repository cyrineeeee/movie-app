import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-head-bar',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {
  faHeart = faHeart;
}