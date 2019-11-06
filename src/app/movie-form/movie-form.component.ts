import { Component, OnInit } from '@angular/core';
import { Movie } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent {

    movie: Movie;

  constructor(
    private movieService: MovieService) {
    this.movie = new Movie();
  }

  onSubmit() {
    this.movieService.save(this.movie);
  }

}
