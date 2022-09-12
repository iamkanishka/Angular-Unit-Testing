import { first } from "rxjs";
import { Post } from "src/app/Models/Posts";
import { PostComponent } from "./post.component"

describe('Post Componenet',()=>{
    it('should raise an event when the delete post is clicked',()=>{
        const comp= new PostComponent();
        const post:Post = {id:1,body:'body 1', title:'Title 1'};
        comp.post=post
        comp.delete.pipe(first()).subscribe((selectedPost)=>{
            expect(selectedPost).toEqual(post)
        });
        comp.onDeletePost(new MouseEvent('click'));

    })
})