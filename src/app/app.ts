import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}