import { TestBed,ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/Models/Posts';
import { PostService } from 'src/app/Services/Posts/posts.service';
import { PostsComponent } from './posts.component';
import {Component, Input} from '@angular/core' 
import { By } from '@angular/platform-browser';
import { PostComponent } from '../../post/post.component';



describe('Posts Component', () => {
  let POSTS: Post[];
  let component: PostsComponent;
  let mockPostService: any;
  let fixture : ComponentFixture<PostsComponent>; 






  beforeEach(() => {
    POSTS = [
      {
        id: 1,
        body: 'body 1',
        title: 'title 1',
      },
      {
        id: 2,
        body: 'body 2',
        title: 'title 2',
      },
      {
        id: 3,
        body: 'body 3',
        title: 'title 3',
      },
    ];

    mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

    TestBed.configureTestingModule({
      declarations:[PostsComponent,PostComponent],
      providers: [
         {
          provide: PostService,
          useValue: mockPostService,
        },
      ],
    });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  
  });




  
    it('Should set Posts from the service Directly', () => {
        mockPostService.getPosts.and.returnValue(of(POSTS));
        //component.ngOnInit();
        fixture.detectChanges();
        expect(component.posts.length).toBe(3)
    });


    it('Should create one Post Child Elememt for Each post', () => {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const debugElement = fixture.debugElement;
      const postElement = debugElement.queryAll(By.css('.posts'))
      expect(postElement.length).toBe(POSTS.length)
      
  });

  it('Should create exact number of Post Componenet with Posts', () => {
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    const PostComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent));
    expect(PostComponentDEs.length).toEqual(POSTS.length);
    
});


it('Should check whether exact post is sending to Componenet', () => {
  mockPostService.getPosts.and.returnValue(of(POSTS));
  fixture.detectChanges();
  const PostComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent));
  for (let index = 0; index < PostComponentDEs.length; index++) {
  const PostComponentDEsinstance = PostComponentDEs[index].componentInstance  
  expect(PostComponentDEsinstance.post.title).toEqual(POSTS[index].title)
  }
});






  describe('delete', () => {
    beforeEach(() => {
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts = POSTS;
    });
    it('should delete the selected Post from the posts', () => {
      component.delete(POSTS[1]);

      expect(component.posts.length).toBe(2);
    });

    it('should delete the actual selected Post in Posts', () => {
      component.delete(POSTS[1]);

      for (let post of component.posts) {
        expect(post).not.toEqual(POSTS[1]);
      }
    });

    it('should call the delete method in Post Service only once', () => {
    
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
    });
  });
});