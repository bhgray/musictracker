Ext.define('MusicTracker.view.TracksView', {
    extend: 'Ext.view.View',
    xtype: 'tracksview',
    scrollable: true,
    html:  'hellow world',
    itemTpl: [
        '<h1>{trackname}</h1>',
        '<h3>{composer}</h3>',
        '<hr>'
    ],
    afterRender: function() {
        // debugger
    }
});
