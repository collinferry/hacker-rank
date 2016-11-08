function processData(input) {
    var end = parseInt(input[0]);
    var firstArray = input[1].split(" ");
    var e = firstArray[end-1];

    for (var i=2; i<=firstArray.length+1; i++) {
     //if input[end-i] > e --> shift one cell to the right
        if ((firstArray[end-i]) > e) {
            firstArray[end-i+1] = firstArray[end-i];
        }
     //else, insert e into [end-i]
        else {
            firstArray[end-i+1] = e;
            console.log(firstArray.join(" "));
            break;
        }
    console.log(firstArray.join(" "));

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
