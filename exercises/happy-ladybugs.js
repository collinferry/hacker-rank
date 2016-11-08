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
    var Q = parseInt(readLine());

        //function to check string for any underscores (_'s)
        function spaceCheck(string) {
                if (string.match("_") == null){
                   return false;
                } else { return true; }
        }

        //function to filter out spaces
        function removeSpace(char) {
              return char != "_";
        }

        //function to check immutable or sorted string for happy sequence
        function happy(string) {
            var happy = true;
            for (var k=0; k<string.length; k++) {
                var char = string.charAt(k);
                var before = string.charAt(k-1);
                var after = string.charAt(k+1);
                if (char != before && char != after) {
                    happy=false;
                }
            }
            return happy;
        }

    for(var a0 = 0; a0 < Q; a0++){
        var n = parseInt(readLine());
        var b = readLine();
        var output = "YES";

        if (spaceCheck(b) == true) {
            b = b.split("");
            b = b.filter(removeSpace);
            b.sort();
            b = b.join("");
        }
        if (happy(b) == false) { output = "NO"; }

        console.log(output);

    }


}
