import { LoggerService } from "./logger.service";

describe('LoggerService', () => {
  let service : LoggerService
   
  beforeEach(()=>{
  service = new  LoggerService()
  })

 it('should  not have any Messages', () => {
    //arrrange
    //const servive = new LoggerService();

    //act
    let count = service.messages.length;
    
    //assert
    expect(count).toBe(0);
  });

  it('Should add the message when log is Called',()=>{
    //arrange 
    //const service = new LoggerService();
    
    //act
    service.log('message')
       
    //assert
    expect(service.messages.length).toBe(1);
  });
   
  it('Should Clear all the messages, when clear is called',()=>{
    //arrange 
   // const service = new LoggerService();
    service.log('message')
    
    //act
    service.clear();
       
    //assert
    expect(service.messages.length).toBe(0);
  })


});
