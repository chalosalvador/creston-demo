/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setTimeout, event, appModule */
var eventModule = (function () {
    'use strict';

    console.log('video-source-show');

    let eventSideBar = document.getElementById('eventSideBar');

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
        console.log('Present Camera Button pressed');
    }

    function onClickPreset1(){
        console.log('Preset1 Button pressed');
    }

    function onClickPreset2(){
        console.log('Preset2 Button pressed');
    }

    function onClickPreset3(){
        console.log('Preset3 Button pressed');
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
        console.log("Top button pressed!");
    }

    function onClickLeft() {
        console.log("Left button pressed!");
    }

    function onClickRight() {
        console.log("Right button pressed!");
    }

    function onClickBottom() {
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
        onClickPreset1: onClickPreset1,
        onClickPreset2: onClickPreset2,
        onClickPreset3: onClickPreset3,
        onClickTop: onClickTop,
        onClickBottom: onClickBottom,
        onClickLeft: onClickLeft,
        onClickRight: onClickRight
    };
}());