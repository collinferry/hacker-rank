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
    var binary = n.toString([2]);
    var count = 0;
    var streak = 0;
    for (var i=0; i<binary.length; i++) {
        //if charAt is 1, add to count, and if count > streak, streak=count
        if (binary.charAt(i) == 1) {
            count += 1;
            if (count > streak) {
                streak = count;
            }
        } else {
            count = 0;
        }
    }
    console.log(streak);
}
