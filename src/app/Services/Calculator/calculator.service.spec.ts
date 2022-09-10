import { CalculatorService } from "./calculator.service";

describe('calculator Service', ()=>{
  it('It Should Add two numbers',()=>{
    const calculator = new CalculatorService();
    let result = calculator.add(2,2);
    expect(result).toBe(4);
  });
  it('It Should Subtract two numbers',()=>{
    const calculator = new CalculatorService();
    let result = calculator.subtract(2,2);
    expect(result).toBe(0);
  });
  
})