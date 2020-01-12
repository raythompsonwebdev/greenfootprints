import {expect} from 'chai'; //use expect style instead of assert
//import { JSDOM } from 'jsdom';
//import jsdom from 'jsdom';
//import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// describe('index.html', () =>{

//   it('Greenfootprints', ()=>{
//     const index = fs.readFileSync('./src/index.html', "utf-8");
//     jsdom.env(index, function(err,window){
//       const h1 = window.document.getElementsByTagName('h1')[0];
//       expect(h1.innerHTML).to.equal("Greenfootprints");
      
//       window.close();

//     });
//   })
// })


