/*jslint es6 */
/*global document, window, CrComLib, includeHtmlTpl */
var modeModule = (function () {
    'use strict';

    console.log('mode')

    var counterEl = document.querySelector('#counter');
    var counterVal = counterEl.innerHTML;

    var modal = document.querySelector('#modal-counter');

    modal.addEventListener('afterShow', function(e){
        console.log('show');
        setInterval(function(){
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

    

    /**
     * All public method and properties exporting here
     */
    return {};
}());