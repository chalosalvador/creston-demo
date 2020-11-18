/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setTimeout, event, appModule */
var eventModule = (function () {
    'use strict';

    console.log('video-source-show');

    let eventSideBar = document.getElementById('eventSideBar');
    var triggerview = document.querySelector('.triggerview');
    let presetTimeout;
    let presetsValues = new Array;

    /**
     * This method is for toggle sidebar in smaller divice
     */
    function eventSideBarToggle() {
        eventSideBar.classList.toggle('open');
        event.stopPropagation();
    }

    /**
     * This method will invoke on body click
     */
    document.body.addEventListener('click', function () {
        if (!!eventSideBar && eventSideBar.classList) {
            eventSideBar.classList.remove('open');
        }
    });

    function onClickPresentCamera(){
        triggerview.gestureable = false;
        console.log('Presenter Camera Button pressed');
    }

    function onClickPreset(element){
        triggerview.gestureable = false;
        let presetIndex = element.id.split('-')[1];
        let cameraZoom = document.getElementById('camera-zoom');
        CrComLib.publishEvent('n', 'Room.Camera.SetLevel', presetsValues[presetIndex] ||  cameraZoom.value);
    }

    function onPressPreset(event) {
        presetTimeout = setTimeout(function() {
            let cameraZoom = document.getElementById('camera-zoom');
            let presetIndex = event.target.id.split('-')[1];
            presetsValues[presetIndex] = cameraZoom.value;
            CrComLib.publishEvent('s', `Room.Camera.Preset[${presetIndex}].SetLevel`, cameraZoom.value);
        }, 3000);
    }

    function cancelPresetTimeout() {
        clearTimeout(presetTimeout);
    }

    function gestureableClick() {
        triggerview.gestureable = false;
    }


    /**
     * All method is concating in one method
     */
    function eventInit() {
        appModule.checkElement('.lighting-button').then(function (isLoaded) {
            if (isLoaded) {
                appModule.addClassOnClick('.lighting-button:not([disabled])', 'pulse-once-lighting');
            }
        });
    }

    function onClickTop() {
        triggerview.gestureable = false;
        console.log("Top button pressed!");
    }

    function onClickLeft() {
        triggerview.gestureable = false;
        console.log("Left button pressed!");
    }

    function onClickRight() {
        triggerview.gestureable = false;
        console.log("Right button pressed!");
    }

    function onClickBottom() {
        triggerview.gestureable = false;
        console.log("Bottom button pressed!");
    }

    /**
     * All public or private methods which need to call on init
     */
    let eventPage = document.querySelector('.event-page');
    eventPage.addEventListener('afterLoad', eventInit);

    /**
     * All public method and properties exporting here
     */
    return {
        eventSideBarToggle: eventSideBarToggle,
        onClickPresentCamera: onClickPresentCamera,
        onClickPreset: onClickPreset,
        onPressPreset: onPressPreset,
        presetsValues: presetsValues,
        cancelPresetTimeout: cancelPresetTimeout,
        onClickTop: onClickTop,
        onClickBottom: onClickBottom,
        onClickLeft: onClickLeft,
        onClickRight: onClickRight,
        gestureableClick: gestureableClick
    };
}());