(function () {
    function clickHandler(message) {
        console.log('hi ... ' + message);
    }

    // Get a reference to the myButton
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function () { clickHandler('Bob') });

})();