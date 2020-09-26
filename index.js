$(document).ready(function() {
    function getRandom() {
        return (Math.floor(Math.random() * 255))
    }

    function display() {
        var r = getRandom()
        var g = getRandom()
        var b = getRandom()
        $('body').css('background-color', `rgb(${r},${g},${b})`);
    }

    function updateText() {
        $('h1,title').text(prompt(`請輸入顯示訊息`));
    }
    $('body').keydown(function(e) {
        if (e.keyCode == 13) {
            updateText()
        }
    });



    updateText()
    setInterval(() => {
        display()
    }, 1000);
});