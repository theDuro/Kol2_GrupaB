import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";

@Component({
  selector: 'app-dd-forum',
  templateUrl: './dd-forum.component.html',
  styleUrls: ['./dd-forum.component.css']
})
export class DDForumComponent implements OnInit {


  posts = {}

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAll().subscribe(data => this.posts = data)
  }

}
