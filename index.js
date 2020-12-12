var displayArray = []
var displayIndex = 0
$(document).ready(function() {
    function addText() {
        displayArray.push(prompt('請新增顯示訊息'))
        displayIndex = 0
    }

    function deleteText() {
        displayIndex = 0
        var delIndex = Number(prompt('請輸入要刪除的顯示序列'))
        if (!isNaN(delIndex)) {
            displayArray.splice(delIndex, 1)
            displayIndex = 0
        }
    }

    function displayText() {
        if (displayArray == []) {
            addText()
        }
        $('h1').text(displayArray[displayIndex]);
        $('h3').text(displayIndex);
        $('title').text(displayArray[displayIndex]);
        if (displayIndex == displayArray.length - 1) {
            displayIndex = 0
        } else {
            displayIndex++
        }
        changeColor()
    }

    function changeColor() {
        r = randomNumber()
        g = randomNumber()
        b = randomNumber()

        $('body').css('background-color', `rgb(${r},${g},${b})`);
        if (r > 126 && g > 126 && b > 126) {
            $('h1,h3').css('color', 'white');
        } else {
            $('h1,h3').css('color', 'black');
        }
    }

    function randomNumber() {
        return (Math.round(Math.random() * 255))
    }

    $('body').keydown(function(e) {
        keycode = e.keyCode
        if (keycode == 13) {
            addText()
        }
        if (keycode == 8) {
            deleteText()
        }
    });

    addText()

    setInterval(() => {
        displayText()
    }, 1000);
});