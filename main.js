window.addEventListener("keydown", whichKey);

function whichKey(input) {
    if (input.keyCode === 32)
        alert('key: Space \nASCII Code: ' + input.keyCode);
    else
        alert('key: ' + input.key + '\nASCII Code: ' + input.keyCode);
}
