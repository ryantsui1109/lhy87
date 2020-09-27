$(document).ready(function() {
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
    }

    function updateText() {
        $('h1,title').text(prompt(`請輸入顯示訊息`));
    }

    $('body').keydown(function(key) {
        if (key.keyCode == 13) {
            updateText()
        }
    });

    updateText()
    setInterval(() => {
        display()
    }, 1000);
});