/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 */
Ext.define('MusicTracker.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    handleClick: function() {
        console.log('click!');
    }


});
