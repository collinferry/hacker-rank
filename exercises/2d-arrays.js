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
    var arr = [];
    var maxSum = 0;
    var firstRun = true;
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    //Loop through each of the first four lines
    for (var k=0; k<4; k++) {

    //Within each line, loop through first 4 chars

        for (var h=0; h<4; h++) {

    //determine value of each ourglass

            var thisHourglass = 0;
            var lineOne = 0;
            var lineTwo = 0;
            var lineThree = 0;

            var lineOne = arr[k][h] + arr[k][h+1] + arr[k][h+2];
            var lineTwo = arr[k+1][h+1];
            var lineThree = arr[k+2][h] + arr[k+2][h+1] + arr[k+2][h+2];
            thisHourglass = lineOne + lineTwo + lineThree;

            if ((thisHourglass > maxSum) || (firstRun == true)) {
                maxSum = thisHourglass;
                firstRun = false;
            }

        }

    }

    console.log(maxSum);

}
