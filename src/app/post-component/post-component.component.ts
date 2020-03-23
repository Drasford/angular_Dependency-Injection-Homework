import { Component, OnInit } from '@angular/core';
import {JsonServiceService} from './../json-service.service';
import {Post} from './../Post';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.scss']
})
export class PostComponentComponent implements OnInit {

 

  constructor(private jsonService: JsonServiceService) { 
  }

  posts: Post[];


  ngOnInit(): void {
    this.jsonService.getJson().subscribe((data: Post[]) =>this.posts = data as Post[]);
  }

}
