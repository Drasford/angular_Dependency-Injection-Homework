import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './Post';
import { Observable } from 'rxjs';

@Injectable()
export class JsonServiceService {
  constructor(private http: HttpClient) { }

  jsonUrl = 'https://my-json-server.typicode.com/typicode/demo/posts';

  getJson(){
    return this.http.get<Post[]>(this.jsonUrl)
  }
}
