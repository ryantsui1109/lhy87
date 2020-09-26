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

    var displayText = prompt(`請輸入顯示訊息`)

    $('h1,title').text(displayText);

    setInterval(() => {
        display()
    }, 1000);
});