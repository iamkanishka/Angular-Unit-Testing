import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"
import { PostService } from "./posts.service"

describe('Post Service', () => {
    let postService: PostService;
    let httpTestingController: HttpTestingController;
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
        TestBed.configureTestingModule({
            providers: [PostService],
            imports: [HttpClientTestingModule],
        })
        postService = TestBed.inject(PostService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })
    describe('getPosts()', () => {
        it('Should return  posts when getPosts() is Called', (done:DoneFn) => {
            postService.getPosts().subscribe((data)=>{expect(data).toEqual(POSTS);done();});
            const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts');
            request.flush(POSTS);
            expect(request.request.method).toBe('GET');
        })
    });

    describe('getPost()', () => {
        it('Should return  Single posts when getPost() is Called with PostId', () => {
            postService.getPost(1).subscribe(
                //(data)=>{expect(data).toEqual(POSTS);done();}
                );
                // postService.getPost(2).subscribe(
                //     //(data)=>{expect(data).toEqual(POSTS);done();}
                //     );
            const request = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/posts/1');
           // request.flush(POSTS);
            expect(request.request.method).toBe('GET');
        })
    })
    afterEach(()=>{
        httpTestingController.verify()

    })
})