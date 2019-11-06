import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.findAll().subscribe(data => {
      this.movies = data;
    });
  }
}
