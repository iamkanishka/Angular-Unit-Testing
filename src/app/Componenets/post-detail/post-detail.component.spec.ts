import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute } from "@angular/router";
import { PostService } from "src/app/Services/Posts/posts.service";
import { PostDetailComponent } from "./post-detail.component";

describe('PostDetailComponenet', () => {
  beforeEach(() => {
    let mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => {
            return '3'
          }
        }
      }
    }
    let mockpostService = jasmine.createSpyObj(['getPosts', 'updatePost']);
    let mockLocation = jasmine.createSpyObj(['back']);
    let fixture: ComponentFixture<PostDetailComponent>;

    TestBed.configureTestingModule({
      declarations: [PostDetailComponent],
      providers: [{
        provide: Location, useValue: mockLocation,
      }, {
        provide: PostService, useValue: mockpostService,
      },
      {
        provide: ActivatedRoute, useValue: mockActivatedRoute,
      }
      ]
    })

    fixture = TestBed.createComponent(PostDetailComponent);
  })
})