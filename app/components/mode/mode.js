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
                modal.show = false;
                clearInterval(timer);
                counterVal = 7;
                counterEl.innerHTML = 7;
                var triggerview = document.querySelector('.triggerview');
                var eventView = document.querySelector('#event-view');
                var backPage = document.getElementById('back-page');
                var button = document.querySelector('#source-btn');

                backPage.hidden = false;
                triggerview.setActiveViewChild(eventView);
                eventView.sendeventonshow = "SourceList.Sources[0].SourceNoSelected";
                button.selected = false;
                triggerview.gestureable = false;
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