import { HttpClient,  } from "@angular/common/http"
import {  HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { TestBed } from "@angular/core/testing"

let testUrl = '/data'
interface Data{
    name:string;
}
describe('Http Client testing Module',()=>{
    let httpClient: HttpClient;
    let httpClienttestingContoller : HttpTestingController;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule]
        })
        httpClient = TestBed.inject(HttpClient);
        httpClienttestingContoller = TestBed.inject(HttpTestingController);
    });
    it('It Should call the testURL with get Request',()=>{
        const testData :Data = {name:'Kanishka naik'} 
        httpClient.get<Data>(testUrl).subscribe((data)=>{
           // expect(data).toEqual(testData)
        });         
         const request = httpClienttestingContoller.expectOne(testUrl);
         request.flush(testData);
         expect(request.request.method).toBe('GET');
    })

    it('should test multiple requests', () => {
        const testData: Data[] = [{ name: 'Leela' }, { name: 'Leela Web Dev' }];
    
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
          expect(data.length).toEqual(0);
        });
    
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
          expect(data).toEqual([testData[0]]);
        });
    
        httpClient.get<Data[]>(testUrl).subscribe((data) => {
          expect(data).toEqual(testData);
        });
    
        const requests = httpClienttestingContoller.match(testUrl);
        expect(requests.length).toEqual(3);
    
        requests[0].flush([]);
        requests[1].flush([testData[0]]);
        requests[2].flush(testData);
      });



})