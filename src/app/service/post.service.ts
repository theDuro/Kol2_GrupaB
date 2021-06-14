import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private api = 'https://kol2tai.herokuapp.com'

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get(this.api + '/api/forum/posts')
  }

  public getTo(id: number) {
    return this.http.get(this.api + '/api/forum/posts/' + id)
  }

}
