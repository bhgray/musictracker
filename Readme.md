Notes on WRTI

current playlist accessed in an iframe (one of 2:  the first one is the google ad iframe)
the src for the iframe is
 http://composer.nprstations.org/widgets/iframe/searchlist.html?station=53c7dbe1e1c8b9c77b4b9b6e&prog_id=&visible=searchlist&show_comp=true

 .episode == a show (e.g., "Classical Weekdays", "At Your Request", etc...)
 .episode_track == a track in the current show (start_datetime contains a parsable datetime duration contains millis from starttime)

    .episode_track .datetime_episode contains human readable inner classes  
          .track_start_time
          .track_date
          a.track_episode_name.innerHTML contains the show name (as above)
    .episode_track .track_info .track_name .track_field_data innerHTML has name of track_name
    .episode_track .track_info .composer_name .track_field_data innerHTML has composer name
                                .ensembles .track_field_data
                                .soloist .track_field_data
                                .conductor .track_field_data
                                .album .track_field_data
                                .label .track_field_data
                                .catalog_number .track_field_data
    .episode_track .buy_link has link to itunes and arkivmusic

New information has come to light....

https://api.composer.nprstations.org/v1/widget/53c7dbe1e1c8b9c77b4b9b6e/playlist
and check out
https://api.composer.nprstations.org/#!/widget

check out: GET /widget/{ucs}/now   



 var theShows = document.getElementsByClassName('episode')
 var currentShow = theShows[theShows.length - 1]
 var current_tracks = currentShow.getElementsByClassName('episode_track')
 var current_track = Array.prototype.slice.call(current_tracks, -1)[0]

http://www.javascriptkit.com/javatutors/arrayprototypeslice.shtml
note that what is returned via getElementsByClassName is an "array like" object, NOT a real array, so it needs to be converted.  In this case it is converted on the fly by the Array.prototype.slice call....
  e.g., the last 3:  array.slice(-3)

    note that slice always returns an array

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
DATA SaMPLE
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

{  
   "showNow":true,
   "onNow":{  
      "_id":"57a24a0f71ef1e955f7424cf",
      "event_id":"57a24a0f71ef1e955f74246b",
      "program_id":"53c7dc11e1c8b9c77b4b9b6f",
      "date":"2017-01-27",
      "start_utc":"2017-01-27T11:00:00.000Z",
      "end_utc":"2017-01-27T23:00:00.000Z",
      "start_time":"06:00",
      "end_time":"18:00",
      "day":"Fri",
      "program":{  
         "program_id":"53c7dc11e1c8b9c77b4b9b6f",
         "parentID":null,
         "national_program_id":"0",
         "isParent":false,
         "name":"Classical Weekdays",
         "program_desc":"WRTI brings you the best recordings of works from the vast world of classical music every weekday from 6 am to 6 pm.",
         "program_format":"Classical",
         "program_link":"http://wrti.org/programs/classical-weekdays",
         "twitter":null,
         "facebook":null,
         "station_id":"station_wrti_208",
         "ucs":"53c7dbe1e1c8b9c77b4b9b6e",
         "hosts":[  
            {  
               "name":"Gregg Whiteside"
            },
            {  
               "name":"Jack Moore"
            },
            {  
               "name":"Jill Pasternak"
            },
            {  
               "name":"heard on FM/HD1 and the Classical Stream"
            }
         ],
         "_date_modified":"08-03-2016 15:03:42.411"
      },
      "conflict_edited":1470253583724,
      "widget_config":{  
         "custom_fields":false,
         "episode_notes":false,
         "host_display":false,
         "host_allow":false,
         "catalog_number":true,
         "label":true,
         "album_art":true,
         "customized":false
      },
      "episode_notes":"",
      "playlist":"REMOVED",
      "has_playlist":true
   },
   "tracklist":{  
      "status":false,
      "results":[  
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"10:00:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":1066000,
               "program":"",
               "trackName":"Eine Kleine Nachtmusik in G major",
               "imageURL":"",
               "catalogNumber":"4758056",
               "copyright":"London/Dec",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Eine Kleine Nachtmusik",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Neville Marriner",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 10:00:00",
               "_end_time":"01/27/2017 10:17:46",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Eine Kleine Nachtmusik in G major&collectionName=Eine Kleine Nachtmusik&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|4758056|Eine,Kleine,Nachtmusik|Eine,Kleine,Nachtmusik,in,G,major|London,Dec"
               }
            },
            "song_start_time":"01-27-2017 10:00:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"3ef469efd30d3e047d24ccdf29f39b37",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"09:48:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":441000,
               "program":"",
               "trackName":"Andante and Five Variations in G major",
               "imageURL":"",
               "catalogNumber":"4784614",
               "copyright":"Philips",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Andante and Five Variations",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Martha Argerich, piano; Stephen Kovacevich, piano",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 09:48:00",
               "_end_time":"01/27/2017 09:55:21",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Andante and Five Variations in G major&collectionName=Andante and Five Variations&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|4784614|Andante,and,Five,Variations|Andante,and,Five,Variations,in,G,major|Philips"
               }
            },
            "song_start_time":"01-27-2017 09:48:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"5255b8af44226e154a1d6fedc2f119b6",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"09:17:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":1754000,
               "program":"",
               "trackName":"Piano Concerto No. 21 in C major",
               "imageURL":"",
               "catalogNumber":"4758054",
               "copyright":"London/Dec",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Piano Concerto No. 21",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Vladimir Ashkenazy",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Vladimir Ashkenazy, piano",
               "ensembles":"Philharmonia Orchestra",
               "episode_notes":"",
               "_start_time":"01/27/2017 09:17:00",
               "_end_time":"01/27/2017 09:46:14",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Piano Concerto No. 21 in C major&collectionName=Piano Concerto No. 21&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|4758054|Piano,Concerto,No,21|Piano,Concerto,No,21,in,C,major|London,Dec"
               }
            },
            "song_start_time":"01-27-2017 09:17:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"2346af4bfce2c3db28713be41446272",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"09:06:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":513000,
               "program":"",
               "trackName":"Symphony No. 10 in G major",
               "imageURL":"",
               "catalogNumber":"454085",
               "copyright":"Philips",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Symphony No. 10",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Neville Marriner",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 09:06:00",
               "_end_time":"01/27/2017 09:14:33",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Symphony No. 10 in G major&collectionName=Symphony No. 10&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|454085|Symphony,No,10|Symphony,No,10,in,G,major|Philips"
               }
            },
            "song_start_time":"01-27-2017 09:06:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"2d9e601ea98350562b543a1e02912",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:58:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":120000,
               "program":"",
               "trackName":"COSI FAN TUTTE: Tradito, schernito",
               "imageURL":"",
               "catalogNumber":"444174",
               "copyright":"London/Dec",
               "upc":"",
               "releaseDate":"",
               "collectionName":"COSI FAN TUTTE: Tradito, schernito",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Georg Solti",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Frank Lopardo, tenor",
               "ensembles":"Chamber Orchestra of Europe",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:58:00",
               "_end_time":"01/27/2017 09:00:00",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=COSI FAN TUTTE: Tradito, schernito&collectionName=COSI FAN TUTTE: Tradito, schernito&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|444174|COSI,FAN,TUTTE,Tradito,schernito|COSI,FAN,TUTTE,Tradito,schernito|London,Dec"
               }
            },
            "song_start_time":"01-27-2017 08:58:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"b93349f1879394a3449735d1287a0f4",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:50:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":315000,
               "program":"",
               "trackName":"Requiem: Introitus",
               "imageURL":"",
               "catalogNumber":"4758057",
               "copyright":"London/Dec",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Requiem: Introitus",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Peter Schreier",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Margaret Price, soprano; Trudeliese Schmidt, mezzo sop.; Francisco Araiza, tenor; Theo Adam, bass; Leipzig Radio Chorus",
               "ensembles":"Dresden State Orchestra",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:50:00",
               "_end_time":"01/27/2017 08:55:15",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Requiem: Introitus&collectionName=Requiem: Introitus&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|4758057|Requiem,Introitus|Requiem,Introitus|London,Dec"
               }
            },
            "song_start_time":"01-27-2017 08:50:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"f6ab2f88292fc917f637aab08ee6da75",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:41:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":430000,
               "program":"",
               "trackName":"Rondo for Violin & Orchestra in B flat major",
               "imageURL":"",
               "catalogNumber":"60110",
               "copyright":"CBS/Sony",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Rondo for Violin & Orchestra",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Frans Bruggen",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Jaap Schroder, violin",
               "ensembles":"Mozart Ensemble of Amsterdam",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:41:00",
               "_end_time":"01/27/2017 08:48:10",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Rondo for Violin & Orchestra in B flat major&collectionName=Rondo for Violin & Orchestra&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|60110|Rondo,for,Violin,Orchestra|Rondo,for,Violin,Orchestra,in,B,flat,major|CBS,Sony"
               }
            },
            "song_start_time":"01-27-2017 08:41:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"65f510cdd2edb5bb4775af65c292a12",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:27:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":689000,
               "program":"",
               "trackName":"Piano Sonata for 4 hands in C major",
               "imageURL":"",
               "catalogNumber":"6034",
               "copyright":"Profil",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Piano Sonata for 4 hands",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Wolfgang Brunner, fortepiano; Leonore von Stauss, fortepiano",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:27:00",
               "_end_time":"01/27/2017 08:38:29",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Piano Sonata for 4 hands in C major&collectionName=Piano Sonata for 4 hands&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|6034|Piano,Sonata,for,4,hands|Piano,Sonata,for,4,hands,in,C,major|Profil"
               }
            },
            "song_start_time":"01-27-2017 08:27:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"817a8c54c2b5e3ce15d23b020892756",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:20:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":245000,
               "program":"",
               "trackName":"March No. 1 in D",
               "imageURL":"",
               "catalogNumber":"416484",
               "copyright":"Philips",
               "upc":"",
               "releaseDate":"",
               "collectionName":"March No. 1",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Neville Marriner",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:20:00",
               "_end_time":"01/27/2017 08:24:05",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=March No. 1 in D&collectionName=March No. 1&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|416484|March,No,1|March,No,1,in,D|Philips"
               }
            },
            "song_start_time":"01-27-2017 08:20:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"1f2bb202779de723bc7630b5edfc7619",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"08:06:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":733000,
               "program":"",
               "trackName":"Six German Dances",
               "imageURL":"",
               "catalogNumber":"416484",
               "copyright":"Philips",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Six German Dances",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Neville Marriner",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 08:06:00",
               "_end_time":"01/27/2017 08:18:13",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Six German Dances&collectionName=Six German Dances&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|416484|Six,German,Dances|Six,German,Dances|Philips"
               }
            },
            "song_start_time":"01-27-2017 08:06:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"c52f6ff7dbd0f4c16e1798d529b1e",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:48:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":570000,
               "program":"",
               "trackName":"String Quartet No.  2 in D major",
               "imageURL":"",
               "catalogNumber":"550541",
               "copyright":"Naxos",
               "upc":"",
               "releaseDate":"",
               "collectionName":"String Quartet No.  2",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Eder Quartet",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:48:00",
               "_end_time":"01/27/2017 07:57:30",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=String Quartet No.  2 in D major&collectionName=String Quartet No.  2&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|550541|String,Quartet,No,2|String,Quartet,No,2,in,D,major|Naxos"
               }
            },
            "song_start_time":"01-27-2017 07:48:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"bb847304e082261c9d14fa9bbcec99c5",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:43:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":183000,
               "program":"",
               "trackName":"Ave Verum Corpus",
               "imageURL":"",
               "catalogNumber":"4758057",
               "copyright":"London/Dec",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Ave Verum Corpus",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Peter Schreier",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Leipzig Radio Chorus",
               "ensembles":"Dresden State Orchestra",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:43:00",
               "_end_time":"01/27/2017 07:46:03",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Ave Verum Corpus&collectionName=Ave Verum Corpus&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|4758057|Ave,Verum,Corpus|Ave,Verum,Corpus|London,Dec"
               }
            },
            "song_start_time":"01-27-2017 07:43:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"d237b1409832ab9d897c55b39916b33d",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:29:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":675000,
               "program":"",
               "trackName":"Symphony in D",
               "imageURL":"",
               "catalogNumber":"5186113",
               "copyright":"Pentatone",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Symphony",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Sir Neville Marriner",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:29:00",
               "_end_time":"01/27/2017 07:40:15",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Symphony in D&collectionName=Symphony&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|5186113|Symphony|Symphony,in,D|Pentatone"
               }
            },
            "song_start_time":"01-27-2017 07:29:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"410581f5c2f747edc2cddb09e1e256a3",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:20:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":403000,
               "program":"",
               "trackName":"Adagio for violin & orchestra in E major",
               "imageURL":"",
               "catalogNumber":"7682",
               "copyright":"D. Gramphn",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Adagio for violin & orchestra",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"James MacMillan",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Nicola Benedetti, violin",
               "ensembles":"Academy of St Martin in Fields",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:20:00",
               "_end_time":"01/27/2017 07:26:43",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Adagio for violin & orchestra in E major&collectionName=Adagio for violin & orchestra&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|7682|Adagio,for,violin,orchestra|Adagio,for,violin,orchestra,in,E,major|D,Gramphn"
               }
            },
            "song_start_time":"01-27-2017 07:20:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"f71ec0c8fd04e185ad956c469ca38c5a",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:14:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":164000,
               "program":"",
               "trackName":"MAGIC FLUTE: March of the Priests",
               "imageURL":"",
               "catalogNumber":"3402",
               "copyright":"CRD",
               "upc":"",
               "releaseDate":"",
               "collectionName":"MAGIC FLUTE: March of the Priests",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"James Stobart",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Locke Brass Consort",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:14:00",
               "_end_time":"01/27/2017 07:16:44",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=MAGIC FLUTE: March of the Priests&collectionName=MAGIC FLUTE: March of the Priests&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|3402|MAGIC,FLUTE,March,of,the,Priests|MAGIC,FLUTE,March,of,the,Priests|CRD"
               }
            },
            "song_start_time":"01-27-2017 07:14:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"16b596fef8d7414908dbc7f29bde16c",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:06:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":383000,
               "program":"",
               "trackName":"MITRIDATE, RE DI PONTO Overture",
               "imageURL":"",
               "catalogNumber":"5149",
               "copyright":"CBC(RCI)",
               "upc":"",
               "releaseDate":"",
               "collectionName":"MITRIDATE, RE DI PONTO Overture",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"Mario Bernardi",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"",
               "ensembles":"Calgary Philharmonic Orchestra",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:06:00",
               "_end_time":"01/27/2017 07:12:23",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=MITRIDATE, RE DI PONTO Overture&collectionName=MITRIDATE, RE DI PONTO Overture&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|5149|MITRIDATE,RE,DI,PONTO,Overture|MITRIDATE,RE,DI,PONTO,Overture|CBC,RCI"
               }
            },
            "song_start_time":"01-27-2017 07:06:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"4bfcf75a875f454659bde5b64e3b3d1f",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"07:00:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":124000,
               "program":"",
               "trackName":"Minuet in G major",
               "imageURL":"",
               "catalogNumber":"47384",
               "copyright":"Angel/EMI",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Minuet",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Daniel Barenboim, piano",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 07:00:00",
               "_end_time":"01/27/2017 07:02:04",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Minuet in G major&collectionName=Minuet&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|47384|Minuet|Minuet,in,G,major|Angel,EMI"
               }
            },
            "song_start_time":"01-27-2017 07:00:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"81f61130c1e4e65984cec93866f794b6",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"06:44:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":855000,
               "program":"",
               "trackName":"Serenade No.  6 in D major",
               "imageURL":"",
               "catalogNumber":"2014",
               "copyright":"MusicMenlo",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Serenade No.  6",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Jorja Fleezanis, violin; Pierre Lapointe, viola; Fredrik Schoyen Sjolin, cello; Scott Pingel, doublebass; ...and various soloists",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 06:44:00",
               "_end_time":"01/27/2017 06:58:15",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Serenade No.  6 in D major&collectionName=Serenade No.  6&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|2014|Serenade,No,6|Serenade,No,6,in,D,major|MusicMenlo"
               }
            },
            "song_start_time":"01-27-2017 06:44:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"ade1af098812aedeeffc23febfc5995",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"06:31:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":599000,
               "program":"",
               "trackName":"Violin (or Flute) Sonata in B flat major",
               "imageURL":"",
               "catalogNumber":"570263",
               "copyright":"Naxos",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Violin (or Flute) Sonata",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Carol Wincenc, flute; Gena Raps, piano",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 06:31:00",
               "_end_time":"01/27/2017 06:40:59",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Violin (or Flute) Sonata in B flat major&collectionName=Violin (or Flute) Sonata&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|570263|Violin,or,Flute,Sonata|Violin,or,Flute,Sonata,in,B,flat,major|Naxos"
               }
            },
            "song_start_time":"01-27-2017 06:31:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"7504554f10e7967fdbdad456965b61ef",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         },
         {  
            "song":{  
               "_episode_id":"57a24a0f71ef1e955f7424cf",
               "_program_id":"53c7dc11e1c8b9c77b4b9b6f",
               "_ucs_id":"53c7dbe1e1c8b9c77b4b9b6e",
               "_start":"06:18:00",
               "_date":"01-27-2017",
               "_end":"",
               "_duration":633000,
               "program":"",
               "trackName":"Piano Sonata No. 16 in C major",
               "imageURL":"",
               "catalogNumber":"2105",
               "copyright":"Avie",
               "upc":"",
               "releaseDate":"",
               "collectionName":"Piano Sonata No. 16",
               "composerName":"Wolfgang Amadeus Mozart",
               "conductor":"",
               "artistName":"",
               "trackNumber":"",
               "instruments":"",
               "soloists":"Leon McCawley, piano",
               "ensembles":"",
               "episode_notes":"",
               "_start_time":"01/27/2017 06:18:00",
               "_end_time":"01/27/2017 06:28:33",
               "buy":{  
                  "itunes":"https://api.composer.nprstations.org/v1/widget/itunes?artistName=Wolfgang Amadeus Mozart&trackName=Piano Sonata No. 16 in C major&collectionName=Piano Sonata No. 16&at=ovXBg/wsLrU",
                  "arkiv":"https://api.composer.nprstations.org/v1/widget/arkiv?source=WRTI&trackInfo=Wolfgang,Amadeus,Mozart|2105|Piano,Sonata,No,16|Piano,Sonata,No,16,in,C,major|Avie"
               }
            },
            "song_start_time":"01-27-2017 06:18:00",
            "episode_id":"57a24a0f71ef1e955f7424cf",
            "song_id":"1c3220b2db29ee5f1c6f42c316fa7cbf",
            "program_id":"53c7dc11e1c8b9c77b4b9b6f",
            "program_name":"",
            "ucs":"53c7dbe1e1c8b9c77b4b9b6e"
         }
      ]
   },
   "params":{  
      "format":"json",
      "limit":"20",
      "hide_amazon":"false",
      "hide_itunes":"false",
      "hide_arkiv":"false",
      "share_format":"false"
   },
   "affiliate":{  
      "amazon":null,
      "itunes":"ovXBg/wsLrU",
      "arkiv":"WRTI"
   },
   "ESTrelativeOffset":0,
   "status":true,
   "display_buy":true,
   "renderShareFormat":false,
   "episodeHeader":{  
      "ucs_name":"WRTI"
   }
}
