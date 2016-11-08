function processData(input) {
    //Enter your code here
    var pairs = parseInt(input[0]);
    var queries = input.length - pairs + 1;
    var dictionary = {};
    //loop to add pairs to object
    for (var i=1; i<=pairs; i++) {
        //split the string
        var content = input[i].split(" ");
        var name = content[0];
        var number = content[1];
        //assign values
        dictionary[name] = number;
    }
    //loop to search object for queries
    for (var k=pairs+1; k<input.length; k++) {
        if (dictionary[input[k]]){
        console.log(input[k]+"="+dictionary[input[k]]);
        } else { console.log("Not found"); }
    }

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   _input = _input.split("\n");
   processData(_input);
});
