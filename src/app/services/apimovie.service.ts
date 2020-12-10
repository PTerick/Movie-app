import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { interfacemovie } from "../common/interfacemovie";

@Injectable({
  providedIn: "root",
})
export class ApimovieService {
  Url = "http://www.omdbapi.com/";
  apikey = "c8df172f";

  constructor(private _http: HttpClient) {}

  getMovies(title: string, type: string) {
    return this._http
      .get<interfacemovie>(
        `${this.Url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apikey}`
      )
      .pipe(
        map((item) => {
          console.log("RAW", item);
          return item["Search"];
        })
      );
  }

  getdetails(id: string) {
    return this._http.get<interfacemovie>(
      `${this.Url}?i=${id}&plot=full&apikey=${this.apikey}`
    );
  }
}
