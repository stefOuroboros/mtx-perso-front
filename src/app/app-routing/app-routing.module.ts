import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from 'src/app/list-movies/list-movies.component';
import { MovieFormComponent } from 'src/app/movie-form/movie-form.component';

const routes: Routes = [
  { path: 'movies', component: ListMoviesComponent },
  { path: 'addmovies', component: MovieFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
