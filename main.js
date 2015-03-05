var NE = NE || {};

NE.main = (function() {
    // Function-level strict mode syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
    // 'use strict';
    function initialize() {
        //
        console.log('hi');
        $( "#myForm" ).submit(function(e) {
          e.preventDefault();
          // alert( "Handler for .click() called." );
          $("#myForm").hide();
          // $("#received").show();
          $("#pay-your-shit").show();

        });
        $( "#pay-your-shit" ).click(function(e) {
          e.preventDefault();
          // alert( "Handler for .click() called." );
          $("#received").show();
          $("#pay-your-shit").hide();

        });
    }
    $(function() {

    });

    return {
        initialize: initialize
    };
})();

$(document).ready(NE.main.initialize);
