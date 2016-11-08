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
    var pos = 0;
    var neg = 0;
    var zero = 0;
    arr = readLine().split(' ');
    arr = arr.map(Number);

    for (var i=0; i<n; i++) {

        if (arr[i] > 0) { pos += 1; }
        else if (arr[i] < 0) { neg += 1; }
        else { zero += 1; }

    }

    console.log((pos/n).toFixed(6));
    console.log((neg/n).toFixed(6));
    console.log((zero/n).toFixed(6));

}
