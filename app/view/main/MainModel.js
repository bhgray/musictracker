/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MusicTracker.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'MusicTracker.model.EpisodeTrack'
    ],
    stores: {
        tracks: {
            model: 'MusicTracker.model.EpisodeTrack',
            autoLoad: true
            // ,
            // data: [{
            //     trackname: 'track 1',
            //     composer: 'composer 1'
            // },{
            //     trackname: 'track 2',
            //     composer: 'composer 2'
            // }]
        }
    },
    data: {
        name: 'MusicTracker'
    }

});
