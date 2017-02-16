// //https://www.youtube.com/watch?v=
// var x = require('./server.js');
// var a = require('./testing');

// const testing1 = new a.test1();
// const testing2 = new a.test2();


// // var test = new x();

// // test.getVideo(function(data) {
// //     var test = JSON.parse(data);
    
// //     console.log(test.items[0].id.videoId);
// // })


// testing1.printTest();

// testing2.printTest();
// The path to your python script
var uint8arrayToString = function(data) {
    return String.fromCharCode.apply(null,data);
}
var spawn = require("child_process").spawn;
var process = spawn('py',['../../haiku-master/haiku/main.py']);

process.stdout.on('data',function(data) {
    console.log(uint8arrayToString(data));
});

process.stderr.on('data', (data) => {
    console.log(uint8arrayToString(data));
});
