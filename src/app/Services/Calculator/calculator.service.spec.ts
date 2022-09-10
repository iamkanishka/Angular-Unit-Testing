import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('calculator Service', ()=>{
  it('It Should Add two numbers',()=>{
    const mockloggerService=jasmine.createSpyObj('LoggerService',['log'])
   
    const calculator = new CalculatorService(mockloggerService);
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)
  });
  it('It Should Subtract two numbers',()=>{
    const mockloggerService=jasmine.createSpyObj('LoggerService',['log'])
 
    const calculator = new CalculatorService(mockloggerService);
    let result = calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)

  });
  
})