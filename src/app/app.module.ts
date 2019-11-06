import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MovieService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
