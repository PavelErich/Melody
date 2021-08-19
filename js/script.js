$(document).ready(function () {
    let floors = $(".home-image path");
    let currentFloor = $("[data-floor=02]");
    let currentFloorIndex = 0;
    
    let counterUp = $(".counter-up");
    let counterDown = $(".counter-down");

    function changeCurrentFloor(floorIndex) {
        currentFloor.removeClass('selected-floor');
        currentFloor = $(floors[floorIndex]);
        currentFloorIndex = floorIndex;
        $(".counter").text(currentFloor.attr('data-floor'));
        currentFloor.addClass('selected-floor');
    }

    function tryChangeCurrentFloor(floorIndex) {
        if(floorIndex >= 0 && floorIndex <= 16)
            changeCurrentFloor(floorIndex);
    }

    floors.on('mouseover', function() {
        changeCurrentFloor(parseInt($(this).attr('data-floor')) - 2);
    });

    counterUp.on('click', function() {
       tryChangeCurrentFloor(currentFloorIndex + 1);
    });

    counterDown.on('click', function() {
        tryChangeCurrentFloor(currentFloorIndex - 1);
    });
});