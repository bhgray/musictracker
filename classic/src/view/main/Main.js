/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('MusicTracker.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'MusicTracker.view.main.MainController',
        'MusicTracker.view.main.MainModel',
        'MusicTracker.model.EpisodeTrack',
        'MusicTracker.view.TracksView'
    ],

    controller: 'main',
    viewModel: 'main',

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },
    items: [{
        xtype: 'tracksview',
        bind: {
            store: '{tracks}'
        }
    }, {
        xtype: 'button',
        text: 'Refresh',
        listeners: {
            click: 'handleClick'
        }
    }]
});
