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

    for (var i=0; i<n; i++) {
        var space = n-i-1;
        var hash = n - space;
        var stair = "";
        for (var a=0; a<space; a++) {
            stair += " ";
        }
        for (var b=0; b<hash; b++) {
            stair += "#";
        }
        console.log(stair);
    }

}
