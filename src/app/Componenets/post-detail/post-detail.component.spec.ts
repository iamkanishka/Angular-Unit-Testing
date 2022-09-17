import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Post } from 'src/app/Models/Posts';
import { PostService } from 'src/app/Services/Posts/posts.service';

import { PostDetailComponent } from './post-detail.component';

describe('PostDetailComponent', () => {
  let fixture: ComponentFixture<PostDetailComponent>;
  let mockPostService: jasmine.SpyObj<PostService>;
  let mockLocation:jasmine.SpyObj<Location>;
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3';
          },
        },
      },
    };

     mockPostService = jasmine.createSpyObj(['getPost', 'updatePost']);
    mockLocation = jasmine.createSpyObj(['back']);

    TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: PostService, useValue: mockPostService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    });

    fixture = TestBed.createComponent(PostDetailComponent);
  });

  it('Should render the post Title in h2 template',()=>{
    mockPostService.getPost.and.returnValue(of({id:3,title:"Title",body:"Body1"}as Post));
    fixture.detectChanges();
   // const element = fixture.debugElement.query(By.css('h2')).nativeElement as HTMLElement;
   const element = fixture.nativeElement.querySelector('h2') as HTMLElement;
   expect(element.textContent).toBe(fixture.componentInstance.post.title);
  })
});