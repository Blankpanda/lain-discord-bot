console.log(__filename.toString());
console.log((__filename.toString().split("\\"))[__filename.split("\\").length]);

var splitPath = __filename.toString().split("\\");
console.log(splitPath);
var len  =splitPath.length;
console.log(splitPath[len -1]);
