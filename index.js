var displayText = ["806製作"]
var i = 0

$(document).ready(function() {
    var enableOPMode = 0
    var opMode = false

    function getRandom() {
        return (Math.floor(Math.random() * 255))
    }

    function display() {
        var r = getRandom()
        var g = getRandom()
        var b = getRandom()
        $('body').css('background-color', `rgb(${r},${g},${b})`);
        if (r + g + b > 382) {
            $('h1,h3').css('color', 'black')
        } else {
            $('h1,h3').css('color', 'white')
        }
        updateText()
    }

    function addText() {
        displayText.push(prompt(`請新增顯示訊息`))
    }

    function updateText() {
        var display = displayText[i]
        $('h1,title').text(display);
        i++
        if (i == displayText.length) {
            i = 0
        }
    }

    function showCopyrightConfirmation() {
        var displayCopyRight = confirm("是否顯示作者")
        if (displayCopyRight) {
            $('h3').css('display', 'inline');
        } else {
            $('h3').css('display', 'none');
        }
        $('h3').text();
    }

    $('body').keydown(function(key) {
        console.log(`keycode = ${key.keyCode}`)
        var keycode = key.keyCode
        if (keycode == 8) {
            showCopyrightConfirmation()
        }
        if (keycode == 13) {
            addText()
        }
        if (keycode == 46) {
            var deleteAll = confirm('是否刪除全部訊息')
            if (deleteAll) {
                if (enableOPMode) {
                    displayText = []
                } else { displayText = ["806製作"] }
                i = 0
                addText()
            }
        }
        if (keycode == 65) {
            opMode = true
            var OPtimeout = setTimeout(() => {
                opMode = false
            }, 1500);
        }
        if (keycode == 76) {
            if (opMode) {
                enableOPMode = 1
                console.log('OP mode enabled!')
            }
        }
    });

    addText()
    setInterval(() => {
        display()
    }, 1000);
});
