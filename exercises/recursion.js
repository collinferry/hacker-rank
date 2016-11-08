function processData(input) {
    var output = 1;
    function factorial(n) {
        if (n > 1) {
            output = (output*n);
            n -= 1;
            factorial(n)
        }
    }
    factorial(input);
    console.log(output);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
