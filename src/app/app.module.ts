import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from 'src/app/services/app.service';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
