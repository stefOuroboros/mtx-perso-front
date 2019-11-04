import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieFromJson, Movie } from '../models';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  listAllMovies(): Observable<Movie[]> {
    const URL_BACKEND = environment.baseUrl + 'movies';
    return this._http.get<Movie[]>(URL_BACKEND);
  }

  findMovieByName(nom: string): Observable<Movie> {
    const URL_BACKEND = environment.baseUrl;
    return this._http.get<Movie>(URL_BACKEND + 'movies/' + nom);
  }

  AddMovie(name: string, director: string, poster: string): void {
    const URL_BACKEND = environment.baseUrl + 'movies';
    this._http.post(URL_BACKEND.concat('/new'),{ 'name':name, 'director': director, 'poster': poster},
    {headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).toPromise().then(response => console.log(response),
    error => console.log('Erreur', error));
  } // ajout d'un Movie avec tous les paramètres pris en compte

}
