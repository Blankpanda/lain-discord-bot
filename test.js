//https://www.youtube.com/watch?v=
var x = require('./server.js');
var a = require('./testing');

const testing1 = new a.test1();
const testing2 = new a.test2();


// var test = new x();

// test.getVideo(function(data) {
//     var test = JSON.parse(data);
    
//     console.log(test.items[0].id.videoId);
// })


testing1.printTest();

testing2.printTest();
