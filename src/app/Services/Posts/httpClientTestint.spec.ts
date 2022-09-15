import { HttpClient, HttpClientModule } from "@angular/common/http"
import {  HttpClientTestingModule } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"

let testUrl = '/data'
interface Data{
    name:string;
}
describe('Http Client testing Module',()=>{
    let httpClient: HttpClient
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule]
        })
        httpClient = TestBed.inject(HttpClient);
    });
    it('It Should call the testURL with get Request',()=>{
         httpClient.get<Data>(testUrl).subscribe();          
    })
})