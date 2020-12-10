import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interfacemovie } from 'src/app/common/interfacemovie';
import { ApimovieService } from 'src/app/services/apimovie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
 data: Observable<interfacemovie>
 type = ''
 title = ''

  constructor(
    private api: ApimovieService
  ) { }

  ngOnInit() {
  }
  moviesearch():void{
  this.data = this.api.getMovies(this.title, this.type)

}
}
