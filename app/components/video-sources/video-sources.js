/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setTimeout, event, appModule */
var videoSourceModule = (function () {
    'use strict';

    console.log('video-source-show');

    let videoSourceSideBar = document.getElementById('videoSourceSideBar');

    /**
     * This method is for toggle sidebar in smaller divice
     */
    function videoSourceSideBarToggle() {
        videoSourceSideBar.classList.toggle('open');
        event.stopPropagation();
    }

    /**
     * This method will invoke on body click
     */
    document.body.addEventListener('click', function () {
        if (!!videoSourceSideBar && videoSourceSideBar.classList) {
            videoSourceSideBar.classList.remove('open');
        }
    });

    /**
     * All method is concating in one method
     */
    function videoSourceInit() {
        appModule.checkElement('.lighting-button').then(function (isLoaded) {
            if (isLoaded) {
                appModule.addClassOnClick('.lighting-button:not([disabled])', 'pulse-once-lighting');
            }
        });
    }

    /**
     * All public or private methods which need to call on init
     */
    let videoSourcePage = document.querySelector('.video-sources-page');
    videoSourcePage.addEventListener('afterLoad', videoSourceInit);

    /**
     * All public method and properties exporting here
     */
    return {
        videoSourceSideBarToggle: videoSourceSideBarToggle
    };
}());