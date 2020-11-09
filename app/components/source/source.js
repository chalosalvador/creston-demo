/*jslint es6 */
/*global document, window, CrComLib, includeHtmlTpl */
var sourceModule = (function () {
    'use strict';

    console.log('holaaaaaaaaaaaa')

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
    
            }
        }, 1000)
    })

    

    /**
     * All public method and properties exporting here
     */
    return {};
}());