// uses expect style instead of assert
import { expect } from "chai";
// import jsdom from 'jsdom';
// import fs from 'fs';

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

// describe('index.html', () =>{

//   it('GreenFootPrints', ()=>{
//     //reference to index.html file held in memory
//     const index = fs.readFileSync('./src/views/layouts/index.html', "utf-8");

//     //can provide array of javascript files as second parameter
//     jsdom.env(index, function(err,window){
//       const h1 = window.document.getElementsByTagName('h1')[0];
//       expect(h1.innerHTML).to.equal("GreenFootPrints");

//       window.close();

//     });
//   })
// })
