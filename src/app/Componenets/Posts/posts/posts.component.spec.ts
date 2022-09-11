import { Title } from "@angular/platform-browser";
import { Post } from "src/app/Models/Posts";
import { PostsComponent } from "./posts.component";
import {of} from 'rxjs';

describe('Posts Component',()=>{
  let component: PostsComponent
  let POSTS:Post[];
  let mockPostService:any;
  beforeEach(()=>{
    POSTS=[{
    id:1,
    title:'Title 1',
    body:'Body 1'
   },
   {
    id:2,
    title:'Title 2',
    body:'Body 2'
   },
   {
    id:3,
    title:'Title 3',
    body:'Body 3'
   }]

   mockPostService = jasmine.createSpyObj(['getPosts','deletePost'])
   component  = new  PostsComponent(mockPostService);
  });
describe('delete Posts',()=>{
  beforeEach(()=>{
    mockPostService.deletePost.and.returnValue(of(true))
    component.posts=POSTS;
  })


  it('Should Delete the Selected Post frrom the Post',()=>{
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2)
  });

 it('should delete actual selected Post in Post',()=>{
    component.delete(POSTS[1]);
    for(let post of component.posts){
      expect(post).not.toEqual(POSTS[1])
    }
 })

  it('Should Call the Delet method in Post Service once',()=>{
     component.delete(POSTS[1]);
    expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
  })

})

})