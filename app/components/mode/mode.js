/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setInterval, event, appModule */
var modeModule = (function () {
    'use strict';

    console.log('mode-page');

    var counterEl = document.querySelector('#counter');
    var counterVal = counterEl.innerHTML;
    var timer = '';

    var modal = document.querySelector('#modal-counter');

    modal.addEventListener('afterShow', function(e){
        console.log('show');
        timer = setInterval(function(){
            if(counterVal > 0 ) {
                counterVal--;
                counterEl.innerHTML = counterVal; 
                
            } else {
                var triggerview = document.querySelector('.triggerview');
                var eventView = document.querySelector('#event-view');

                triggerview.setActiveViewChild(eventView);
            }
        }, 1000)
    })

    function onClick( idx ){

        if ( idx === "SourceList.Sources[1].SetSourceSelected" ) {
            console.log( "Television button pressed!" );
        } 
        if ( idx === "SourceList.Sources[2].SetSourceSelected" ) {
            console.log( "Receive Stream button pressed!" );
        }
    }

    function cancelInterval(){
        clearInterval(timer);
        counterVal = 7;
        counterEl.innerHTML = 7;
    }

    /**
     * All public method and properties exporting here
     */
    return {
        cancelInterval: cancelInterval,
        onClick: onClick
    };
}());