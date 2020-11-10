/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setTimeout, event, appModule */
var eventModule = (function () {
    'use strict';
    console.log('event')

    let lightingSidebar = document.getElementById('lightingSidebar');

    /**
     * This method is for toggle sidebar in smaller divice
     */
    function lightingSidebarToggle() {
        lightingSidebar.classList.toggle('open');
        event.stopPropagation();
    }

    // /**
    //  * This method will invoke on body click
    //  */
    // document.body.addEventListener('click', function () {
    //     if (!!lightingSidebar && lightingSidebar.classList) {
    //         lightingSidebar.classList.remove('open');
    //     }
    // });

    /**
     * All method is concating in one method
     */
    function eventInit() {
        appModule.checkElement('.lighting-button').then(function (isLoaded) {
            // if (isLoaded) {
            //     appModule.addClassOnClick('.lighting-button:not([disabled])', 'pulse-once-lighting');
            // }
        });
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
        lightingSidebarToggle: lightingSidebarToggle
    };
}());