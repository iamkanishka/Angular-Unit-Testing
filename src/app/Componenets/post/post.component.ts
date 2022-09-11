import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/Models/Posts';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent  {

  @Input() post: Post | null = null;
  @Output() delete = new EventEmitter<void>();

  onDeletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }
}
