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
    var time = readLine();
    function militize(input) { //removes AM or PM from the string and outputs time
        input = input.substring(0, input.length-2);
        console.log(input);
    }

    if (time.indexOf("A") > 0) {
        //if AM code
        if (time.substring(0, 2) == "12") {
            time = time.replace("12","00");
        }
        militize(time);

    } else {
        //if PM code
        if (time.substring(0, 2) !== "12") {
            time = (parseInt(time.substring(0, 2))+12) + time.substring(2);
        }
        militize(time);
    }

}
