import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/Posts';
import { PostService } from 'src/app/Services/Posts/posts.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
post!:Post

  constructor(private _activatedRoute:ActivatedRoute, 
    private location:Location,
    private PostService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    id&&this.PostService.getPost(+id).subscribe(post=>this.post=post);
  }
  goback(){
    this.location.back();
  }
  save(){
this.PostService.updatePost(this.post)
  }


}
