var SessionTimeout = function () {

    var handlesessionTimeout = function () {
        $.sessionTimeout({
            title: 'Session Timeout Notification',
            message: 'Your session is about to expire.',
            keepAliveUrl: '../demo/timeout-keep-alive.php',
            redirUrl: '../user_lock.php',
            logoutUrl: '../user_login.php',
            warnAfter: 10000, //warn after 5 second
            redirAfter: 20000, //redirect after 10 seconds,
			//warnAfter: 600000, //warn after 600 seconds or 10 minute
            //redirAfter: 630000, //redirect after 10 minute 30 secons,
            countdownMessage: 'Redirecting in {timer} seconds.',
            countdownBar: true
        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handlesessionTimeout();
        }
    };

}();

jQuery(document).ready(function() {    
   SessionTimeout.init();
});