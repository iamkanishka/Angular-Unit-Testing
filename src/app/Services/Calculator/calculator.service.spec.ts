import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('calculator Service', ()=>{
  let mockloggerService:any;
  let calculator:any;
beforeEach(()=>{
  console.log('Calling Before Each');
    mockloggerService=jasmine.createSpyObj('LoggerService',['log']);
    calculator = new CalculatorService(mockloggerService);
})

  it('It Should Add two numbers',()=>{
  console.log('Calling Add');
     let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)
  });
  it('It Should Subtract two numbers',()=>{
  console.log('Calling Subtract');

     let result = calculator.subtract(2,2);
    expect(result).toBe(0);
    expect(mockloggerService.log).toHaveBeenCalledTimes(1)

  });
  
})