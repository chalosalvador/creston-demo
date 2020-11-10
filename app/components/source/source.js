/*jslint es6 */
/*global document, window, CrComLib, serviceModule, setInterval, event, appModule */
var sourceModule = (function () {
    'use strict';

    console.log('holaaaaaaaaaaaa');

    var modal = document.querySelector('#modal-counter');
    

    modal.addEventListener('afterShow', function(e){
        var counterEl = document.querySelector('#counter');
        counterEl.innerHTML = 7;
        var counterVal = counterEl.innerHTML;
        

        console.log('show');
        setInterval(function(){
            if(counterVal > 1 ) {
                counterVal--;
                counterEl.innerHTML = counterVal; 
                
            } else {
                
            }
        }, 1000)
    })

    /**
     * All public method and properties exporting here
     */
    return {};
}());