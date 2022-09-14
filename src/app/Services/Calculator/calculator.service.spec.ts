import { TestBed } from "@angular/core/testing";
import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";



function setup(){
  const  mockloggerService=jasmine.createSpyObj('LoggerService',['log']);
  TestBed.configureTestingModule({
    providers:[CalculatorService,{provide:LoggerService,useValue:mockloggerService}]
  })
 const  calculator = TestBed.inject(CalculatorService)
  const  loggerServiceSpy = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService> 
return {calculator, loggerServiceSpy}
}


describe('calculator Service', ()=>{
 

  it('It Should Add two numbers',()=>{
  const {calculator, loggerServiceSpy} = setup();

  console.log('Calling Add');
     let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)
  });
  it('It Should Subtract two numbers',()=>{
  const {calculator, loggerServiceSpy} = setup();

  console.log('Calling Subtract');

     let result = calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1)

  });
  
})