process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

    //function to remove sticks
    function noStick(value) {
      return value > 0;
    }

    //loop
    for (var i=0; i<=arr.length; i++) {
        //determine shortest stick
        var short = Math.min(...arr);

        // output the number of sticks
        console.log(arr.length);

        // cut the sticks
        for (var h=0; h<arr.length; h++) {
            arr[h] -= short;
        }
        // remove zeros and negative from array
        arr = arr.filter(noStick);
        i=0;
    }
}
