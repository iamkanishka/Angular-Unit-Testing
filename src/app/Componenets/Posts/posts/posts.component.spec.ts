import { Title } from "@angular/platform-browser";
import { Post } from "src/app/Models/Posts";
import { PostsComponent } from "./posts.component";

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
  it('Should Delete the Selected Post frrom the Post',()=>{
    
  })
})

})