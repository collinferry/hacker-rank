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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    count = 0;

    for(var i = 0; i < a.length; i++) {
        for(var c = 0; c < a.length; c++) {

            if (i !== c) {
                if (((a[i] + a[c]) % k) == 0 && i<c) {
                    count += 1;
                }
            }
        }
    }
    console.log(count);

}
