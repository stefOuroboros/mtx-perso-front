import { Injectable } from '@angular/core';
import { Movie } from 'src/app/models';
import { MoviesService } from 'src/app/services/movie.service';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private dataSource: BehaviorSubject<Movie[]> = new BehaviorSubject([]);
  data = this.dataSource.asObservable();

  constructor(private _movieService: MoviesService) {
    this._movieService.listAllMovies().subscribe(data => this.dataSource.next(data));
  }

  getMovie() {
    return this.data;
  }
  rafraichir(movie: Movie[])
  {
    this.dataSource.next(movie);
  }
}
