import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });
 
  it('Should Display weak 5 value is Passed',()=>{
   const pipe = new StrengthPipe();
   expect(pipe.transform(5)).toEqual('5(weak)');
  })

  it('Should Display Strong 10 value is Passed',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10(Strong)');
   })

   
  it('Should Display Strongest 20 value is Passed',()=>{
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20(Strong)');
   })
 
 

});
