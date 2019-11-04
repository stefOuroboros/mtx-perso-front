import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MoviesService } from 'src/app/services/movie.service';
import { Movie } from '../models';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies: Movie[] = null;

  constructor(private _moviesService: MoviesService, private _appService: AppService) { }

  ngOnInit() {
    this._appService.getMovie().subscribe(data => this.movies = data);
  }

}
