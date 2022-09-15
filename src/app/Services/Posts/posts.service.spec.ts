import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { PostService } from "./posts.service";

describe('PostsService', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let POSTS = [
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


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
        providers:[PostService,{
            provide:HttpClient,useValue:httpClientSpy
        }]
    })

    postService = TestBed.inject(PostService)
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient> 
});



describe('getPosts()', () => {  
    it('Should Return expectd posts when getposts is Called',(done:DoneFn)=>{
         httpClientSpy.get.and.returnValue(of(POSTS));
         postService.getPosts().subscribe({
            next:(posts)=>{
                expect(posts).toEqual(POSTS);
                done();
            },
            error:(error)=>{done.fail()}
         }) 
         expect(httpClientSpy.get).toHaveBeenCalledTimes(1);   
    })
     
 });


});


  