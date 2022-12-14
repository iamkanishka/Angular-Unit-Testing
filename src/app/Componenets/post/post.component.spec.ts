import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';
import { Post } from 'src/app/Models/Posts';
import { PostComponent } from './post.component';

describe('Post Component', () => {
  let fixture: ComponentFixture<PostComponent>;
  let comp: PostComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
      schemas:[NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(PostComponent);
    comp = fixture.componentInstance;
  });

  it('should create post component using TestBed', () => {
    expect(comp).toBeDefined();
  });

  //Only use when you are tetsing in the browser, not in server
  it('should render the Post title in the anchor Element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'Title 1' };
    comp.post=post;
    fixture.detectChanges();
    const postElement:HTMLElement = fixture.nativeElement;
    const a = postElement.querySelector('a');
    expect(a?.textContent).toContain(post.title)  
  });

  //Only use when you are tetsing only server

  it('should render the Post title in the anchor Element using Debug  Element', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'Title 1' };
    comp.post=post;
    fixture.detectChanges();
    const postDebugElement = fixture.debugElement;
    const aElement = postDebugElement.query(By.css('a')).nativeElement
    expect(aElement?.textContent).toContain(post.title)  
  });



  it('should raise an event when the delete post is clicked', () => {
    const post: Post = { id: 1, body: 'body 1', title: 'dsdsd' };
    comp.post = post;
    comp.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    comp.onDeletePost(new MouseEvent('click'));
  });
});