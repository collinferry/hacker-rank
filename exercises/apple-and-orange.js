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
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    var apples = 0;
    var oranges = 0;

    //check for apples
    for (var i=0; i<apple.length; i++) {
        if (apple[i]+a >= s && apple[i]+a <= t) {
            apples += 1;
        }
    }

    //check for oranges
    for (var k=0; k<orange.length; k++) {
        if (orange[k]+b >= s && orange[k]+b <= t) {
            oranges += 1;
        }
    }

    //output the answers
    console.log(apples);
    console.log(oranges);

}
