(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/logo.cc0ed34d.gif"},113:function(e,t,a){},114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),i=a(6),s=(a(60),a(7)),o=a.n(s),m=a(12),u=a(18),d=a.n(u),p=function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={headers:{"Access-Control-Allow-Origin":"*"}},t.next=4,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/".concat(e),n);case 4:r=t.sent,a({type:"SET_ACTIVE_TRACK",payload:r.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a({type:"GET_DATA_FAILURE",payload:{error:t.t0}});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"START_SEARCH"}),t.prev=1,n={headers:{"Access-Control-Allow-Origin":"*"}},t.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=".concat(e),n);case 5:r=t.sent,a({type:"SEARCH_SUCCESS",payload:r.data}),a({type:"GET_PAGE_TITLE",payload:"Search : ".concat(e)}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"SEARCH_FAILURE",payload:{error:t.t0}});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{({headers:{"Access-Control-Allow-Origin":"*"}}),a({type:"GET_PAGE_TITLE",payload:e})}catch(n){a({type:"GET_DATA_FAILURE",payload:{error:n}})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=a(4),v=a(43),g=a(5),b=function(e){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"top-nav"},r.a.createElement("div",{style:{fontColor:"white",fontWeight:700,fontSize:24},className:"nav-top br4 "},r.a.createElement("img",{className:"mw-100",src:a(106)})),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fontWeight:700},to:"/player/artists",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_person}),"Artists")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fontWeight:700},to:"/player/albums",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_album}),"Albums")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fontWeight:700},to:"/player/tracks",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_music_note}),"Tracks")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fontWeight:700},to:"/player/search",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_search}),"Search")))),r.a.createElement("div",{className:"mobile-menu"},r.a.createElement(v.slide,{width:229},r.a.createElement("div",{className:"nav-item"},r.a.createElement("span",{className:"nav-title"},"LIBRARY")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fonrWeight:500},to:"/player/artists",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_person}),"Artists")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fonrWeight:500},to:"/player/albums",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_album}),"Albums")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fonrWeight:500},to:"/player/tracks",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_music_note}),"Tracks")),r.a.createElement("div",{className:"nav-item"},r.a.createElement(i.c,{style:{fontColor:"white",fontSize:24,fonrWeight:500},to:"/player/search",activeClassName:"active"},r.a.createElement(h.Icon,{className:"nav-icon",icon:g.ic_search}),"Search")))))},y=a(21),T=function(e){var t=e.id,a=e.image,n=e.title,c=e.artist,l=e.match;return r.a.createElement("div",{className:"db center mw5 grow dim  br5",style:{margin:"8px"}},r.a.createElement(i.b,{to:"".concat(l.url,"/").concat(t)},r.a.createElement("img",{src:a,alt:"album cover"})),r.a.createElement("dl",{className:"mt2 f6 lh-copy"},r.a.createElement("dt",{className:"clip"},"Title"),r.a.createElement("dd",{className:"ml0 fw9 white"},r.a.createElement(i.b,{className:"ml0 fw9 white",to:"".concat(l.url,"/").concat(t)},n)," ",r.a.createElement("br",null),r.a.createElement("dd",{className:"gray"},c))))},k=a(8),N=a(46),A=a.n(N),_=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("img",{src:A.a,style:{width:"50px",margin:"auto",display:"block",paddingTop:"250px"},alt:"Loading..."}))},w=Object(k.b)((function(e){return{albums:e.home.albums,loading:e.home.loading,error:e.home.error}}),{getAlbums:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_DATA"}),e.prev=1,a={headers:{"Access-Control-Allow-Origin":"*"}},e.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132",a);case 5:n=e.sent,t({type:"GET_ALBUMS",payload:n.data.albums.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_DATA_FAILURE",payload:{error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getPageTitle:f})((function(e){var t=e.getAlbums,a=e.getPageTitle,c=e.albums,l=e.loading,i=(e.error,e.match);return Object(n.useEffect)((function(){a("Trending Albums"),null===c&&t()}),[t,a]),console.log(i),l?r.a.createElement(_,null):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"main-container-content"},r.a.createElement("div",{className:"main-container-items"},c&&c.slice(0).map((function(e){return r.a.createElement("div",null,r.a.createElement(T,{key:e.id,id:e.id,image:e.cover_medium,title:e.title,artist:e.artist.name,match:i}))})))))})),I=a(22),O=a.n(I);function S(e){var t=e.id,a=e.number,n=e.title,c=e.duration,l=e.artist,i=e.getTrackInfo,s=O()(c);return r.a.createElement("div",{className:"track-item-container"},r.a.createElement("table",{className:"track-item"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",{className:"b"},n),r.a.createElement("td",{className:"b white-80"},l),r.a.createElement("td",null,s.minutes<10?"0".concat(s.minutes):s.minutes,":",s.seconds<10?"0".concat(s.seconds):s.seconds),r.a.createElement("td",null,r.a.createElement(h.Icon,{size:20,icon:g.ic_play_circle_filled,onClick:function(){i(t)}}))))))}var j=Object(k.b)(null,(function(e){return{getTrackInfo:function(t){return e(p(t))}}}))((function(e){var t=e.album,a=e.getTrackInfo;if(!t)return r.a.createElement(_,null);var n=t.duration&&O()(t.duration),c=1;return r.a.createElement("div",{className:"details-container white fl w-100"},r.a.createElement("div",{className:"details-info"},r.a.createElement("div",{className:"details-info-left grow",style:{paddingTop:"10px"}},r.a.createElement("img",{className:"br4",src:t.cover_medium,alt:"cover"})),r.a.createElement("div",{className:"details-info-right"},r.a.createElement("div",{className:"details-title white b u",style:{fontSize:48,fontWeight:600}},t.title,r.a.createElement("div",{className:"details-contributor white f3"},t.artist&&t.artist.name)),r.a.createElement("div",{className:"b white-70"},t.nb_tracks," songs"),r.a.createElement("div",{className:"b white-70"},"Released: ",t.release_date),r.a.createElement("div",{className:"b white-70"},n?r.a.createElement("p",{className:"b white-70"},"  Duration:  ",n.minutes," min "):r.a.createElement("p",null)))),r.a.createElement("div",{className:"details-bottom"},r.a.createElement("br",null),t.tracks&&t.tracks.data.map((function(e){return r.a.createElement(S,{key:e.id,id:e.id,number:c++,title:e.title_short,duration:e.duration,artist:e.artist.name,trackSrc:e.preview,getTrackInfo:a})}))))})),C=Object(k.b)((function(e){return{album:e.home.album,loading:e.home.loading,error:e.home.error}}),{getPageTitle:f,getAlbumTracks:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_DATA"}),t.prev=1,n={headers:{"Access-Control-Allow-Origin":"*"}},t.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/".concat(e),n);case 5:r=t.sent,a({type:"GET_ALBUM_TRACKS",payload:r.data}),a({type:"GET_PAGE_TITLE",payload:r.data.artist.name}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"GET_DATA_FAILURE",payload:{error:t.t0}});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getAlbumTracks,a=e.getPageTitle,c=e.album,l=e.loading,i=(e.error,e.match);return Object(n.useEffect)((function(){a("Trending Albums"),c.id===i.params.albumId||t(i.params.albumId)}),[t,a]),l?r.a.createElement(_,null):r.a.createElement("div",null,r.a.createElement(j,{album:c}),";")})),R=function(e){var t=e.id,a=e.image,n=e.artist,c=e.match;return r.a.createElement("div",{className:"db center mw5 grow dim br5 pa2"},r.a.createElement(i.b,{to:"".concat(c.url,"/").concat(t)},r.a.createElement("img",{src:a,alt:"album cover"})),r.a.createElement("dl",{className:"mt2 f6 lh-copy"},r.a.createElement("dt",{className:"clip"},"Title"),r.a.createElement("dd",{className:"ml0 fw9 white"}," ",n," ")))},x=Object(k.b)((function(e){return{artists:e.home.artists,loading:e.home.loading,error:e.home.error}}),{getArtists:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_DATA"}),e.prev=1,a={headers:{"Access-Control-Allow-Origin":"*"}},e.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132",a);case 5:n=e.sent,t({type:"GET_ARTISTS",payload:n.data.artists.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_DATA_FAILURE",payload:{error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getPageTitle:f})((function(e){var t=e.getArtists,a=e.getPageTitle,c=e.artists,l=e.loading,i=(e.error,e.match);return Object(n.useEffect)((function(){a("Trending Artists"),null===c&&t()}),[t,a]),console.log(i),l?r.a.createElement(_,null):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"main-container-content"},r.a.createElement("div",{className:"main-container-items"},c&&c.slice(0).map((function(e){return r.a.createElement(R,{key:e.id,id:e.id,image:e.picture_xl,artist:e.name,match:i})})))))}));function G(e){var t=e.id,a=e.number,n=e.title,c=(e.duration,e.artist),l=e.getTrackInfo;return r.a.createElement("div",{className:"track-item-container"},r.a.createElement("table",{className:"track-item"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:t},r.a.createElement("td",null,a),r.a.createElement("td",{className:"b"},n),r.a.createElement("td",{className:"b white-70"},c),r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement(h.Icon,{size:20,icon:g.ic_play_circle_filled,onClick:function(){l(t)}}))))))}var P=Object(k.b)(null,(function(e){return{getTrackInfo:function(t){return e(p(t))}}}))((function(e){var t=e.artist,a=e.getTrackInfo,n=e.artistTracks;if(!t)return r.a.createElement(_,null);console.log(t);var c=1;f(t.name);var l=(t.nb_fan/1e6).toPrecision(2);return n.length>0?r.a.createElement("div",{className:"details-container white"},r.a.createElement("div",{className:"details-info"},r.a.createElement("div",{className:"details-info-left grow",style:{paddingTop:"10px"}},r.a.createElement("img",{src:t.picture_medium,alt:"cover"})),r.a.createElement("div",{className:"details-info-right"},r.a.createElement("div",{className:"details-contributor",style:{fontSize:58}},t.name),r.a.createElement("div",{className:"b white-70"},"Number of albums released: ",t.nb_album,r.a.createElement("br",null),"Followed by: ",l," million"))),r.a.createElement("br",null),r.a.createElement("div",{className:"details-bottom"},r.a.createElement("div",{className:"details-bottom-title"},"Tracks"),n[0].data.map((function(e){return r.a.createElement(G,{key:e.id,id:e.id,number:c++,title:e.title_short,duration:e.duration,artist:e.artist.name,trackSrc:e.preview,getTrackInfo:a})})))):r.a.createElement(_,null)})),z=Object(k.b)((function(e){return{artist:e.home.artist,loading:e.home.loading,error:e.home.error,artistTracks:e.home.artistTracks}}),{getPageTitle:f,getArtistTracks:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_DATA"}),t.prev=1,n={headers:{"Access-Control-Allow-Origin":"*"}},t.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/".concat(e,"/top?limit=50"),n);case 5:r=t.sent,a({type:"GET_ARTIST_TRACKS",payload:r.data}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:"GET_DATA_FAILURE",payload:{error:t.t0}});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},getArtistDetails:function(e){return function(){var t=Object(m.a)(o.a.mark((function t(a){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"GET_DATA"}),t.prev=1,n={headers:{"Access-Control-Allow-Origin":"*"}},t.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/".concat(e),n);case 5:r=t.sent,a({type:"GET_ARTIST_DETAILS",payload:r.data}),a({type:"GET_PAGE_TITLE",payload:r.data.artist.name}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a({type:"GET_DATA_FAILURE",payload:{error:t.t0}});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getArtistTracks,a=e.getArtistDetails,c=e.getPageTitle,l=e.artist,i=e.loading,s=e.artistTracks,o=(e.error,e.match);return c("Trending Artist"),Object(n.useEffect)((function(){l&&l.id===o.params.artistId?c(l.name):(t(o.params.artistId),a(o.params.artistId))}),[t,a,c]),console.log(s),i?r.a.createElement(_,null):r.a.createElement("div",null,r.a.createElement(P,{artist:l,artistTracks:s}),";")}));function L(e){var t=e.getTrackInfo,a=e.id,n=e.image,c=e.title,l=e.artist;return r.a.createElement("div",{className:"db center mw5 grow dim br5"},r.a.createElement("img",{src:n,alt:"album cover",onClick:function(){t(a)}}),r.a.createElement("dl",{className:"mt2 f6 lh-copy"},r.a.createElement("dt",{className:"clip"},"Title"),r.a.createElement("dd",{className:"ml0 fw9 white"},c," ",r.a.createElement("br",null),r.a.createElement("dd",{className:"gray"},l))))}var D=Object(k.b)((function(e){return{tracks:e.home.tracks,loading:e.home.loading,error:e.home.error}}),{getPageTitle:f,getTrackInfo:p,getTracks:function(){return function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_DATA"}),e.prev=1,a={headers:{"Access-Control-Allow-Origin":"*"}},e.next=5,d.a.get("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/top?limit=132",a);case 5:n=e.sent,t({type:"GET_TRACKS",payload:n.data.tracks.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"GET_DATA_FAILURE",payload:{error:e.t0}});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getTracks,a=e.getTrackInfo,c=e.getPageTitle,l=e.tracks,i=e.loading;e.error;return Object(n.useEffect)((function(){c("Recommended Releases"),null===l&&t()}),[t,c]),i?r.a.createElement(_,null):r.a.createElement("div",{className:"main-container-content"},r.a.createElement("div",{className:"main-container-items"},l&&l.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,image:e.album.cover_medium,title:e.title,artist:e.artist.name,getTrackInfo:a})}))))})),U=a(26),F=a(118),W=a(119),M=a(120),K=a(121),B=Object(y.g)(Object(k.b)((function(e){return{title:e.home.title}}),{getSearchResult:E})((function(e){e.props;var t=e.getSearchResult,a=(e.title,e.history),c=Object(n.useState)({value:""}),l=Object(U.a)(c,2),i=l[0],s=l[1],u=i.value,d=function(){var e=Object(m.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t(u),a.push("/player/search");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"page-title-large"},r.a.createElement("div",{className:"page-title-content f2 white"},"Redux Music Player"),r.a.createElement("div",{className:"wrap"},r.a.createElement(F.a,{className:"form-inline ml-auto",onSubmit:function(e){return d(e)}},r.a.createElement(W.a,{className:"no-border"},r.a.createElement(M.a,{type:"text",name:"value",className:"search-term",placeholder:"Artists, tracks...",value:u,onChange:function(e){return function(e){return s({[e.target.name]:e.target.value})}(e)}}),r.a.createElement("div",{className:"pl2"},r.a.createElement(K.a,{onSubmit:function(e){return d(e)}},"Search"))))))}))),H=function(e){e.id;var t=e.image,a=e.title,n=e.artist,c=(e.getTrackInfo,e.albumId);e.artistId;return r.a.createElement("div",{className:"db center mw5 grow dim br5"},r.a.createElement(i.b,{to:"/player/albums/".concat(c)},r.a.createElement("img",{src:t,alt:"album cover"})),r.a.createElement("dl",{className:"mt2 f6 lh-copy"},r.a.createElement("dt",{className:"clip"},"Title"),r.a.createElement("dd",{className:"ml0 fw9 white"},r.a.createElement(i.b,{className:"ml0 fw9 white",to:"/player/albums/".concat(c)},a)," ",r.a.createElement("br",null),r.a.createElement("dd",{className:"gray b"},n))))},J=Object(k.b)((function(e){return{result:e.search.searchResult,loading:e.search.loading,error:e.search.error}}),{getPageTitle:f,getSearchResult:E,getTrackInfo:p})((function(e){var t=e.result,a=e.loading,c=(e.error,e.getTrackInfo),l=e.getSearchResult,i=e.getPageTitle,s=Object(n.useState)({value:""}),u=Object(U.a)(s,2),d=u[0],p=u[1],E=d.value,f=function(){var e=Object(m.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l(E);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i("Search")}),[]),a?r.a.createElement(_,null):r.a.createElement("div",{className:"main-container-content"},r.a.createElement("div",{className:"mobile-search"},r.a.createElement("div",{className:"wrap"},r.a.createElement("form",{className:"search",onSubmit:function(e){return f(e)}},r.a.createElement("input",{type:"text",name:"value",className:"search-term",placeholder:"Artists, tracks...",value:E,onChange:function(e){return function(e){return p({[e.target.name]:e.target.value})}(e)}}),r.a.createElement("button",{type:"submit",className:"search-button"},r.a.createElement(h.Icon,{className:"search-icon",icon:g.ic_search}))))),r.a.createElement("div",{className:"main-container-items"},t&&t.data.map((function(e){return r.a.createElement(H,{key:e.id,id:e.id,image:e.album.cover_medium,title:e.title,artist:e.artist.name,getTrackInfo:c,albumId:e.album.id,artistId:e.artist.id})}))))})),V=function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(B,null),r.a.createElement("br",null),r.a.createElement(y.a,{to:"/player/tracks"}),r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/player/albums",component:w}),r.a.createElement(y.b,{exact:!0,path:"/player/albums/:albumId",component:C}),r.a.createElement(y.b,{exact:!0,path:"/player/artists",component:x}),r.a.createElement(y.b,{exact:!0,path:"/player/artists/:artistId",component:z}),r.a.createElement(y.b,{exact:!0,path:"/player/tracks",component:D}),r.a.createElement(y.b,{exact:!0,path:"/player/search",component:J})))},q=a(47),Q=a(48),Y=a(54),X=a(53),Z=function(e){var t=e.trackName,a=e.trackArtist,n=e.trackImage;return r.a.createElement("div",{className:"footer-left white"},r.a.createElement("div",{className:"artist-image-small"},r.a.createElement("img",{className:"db",style:{width:"55px",height:"55px"},src:n||"https://api.deezer.com/album/81763/image",alt:"artistimage"})),r.a.createElement("div",{className:"track-info"},r.a.createElement("div",{className:"footer-button-mobile"},r.a.createElement(h.Icon,{icon:g.ic_keyboard_arrow_up})),r.a.createElement("div",{className:"artist-name f6 b"},a||"Linkin Park"),r.a.createElement("div",{className:"track-name f5 b"},t||"In The End")))},$=function(e){var t=e.currentTime,a=e.duration,n=e.changeSeek,c=e.progress,l=t&&O()(t),i=a&&O()(a);return r.a.createElement("div",{className:"progress",style:{backgroundColor:"#1a092e"}},r.a.createElement("span",{className:"elapsed b "},l?l.minutes<10?"0".concat(l.minutes):l.minutes:"0",":",l?l.seconds<10?"0".concat(l.seconds):l.seconds:"00"),r.a.createElement("progress",{onClick:n,value:t||0,max:a||0,ref:c}),r.a.createElement("span",{className:"duration b"},i?i.minutes<10?"0".concat(i.minutes):i.minutes:"0",":",i?i.seconds<10?"0".concat(i.seconds):i.seconds:"00"))},ee=function(e){var t=e.isPlaying,a=e.changeIsPlaying,n=e.duration,c=e.currentTime;return r.a.createElement("div",{className:"footer-left"},r.a.createElement("div",{className:"control-buttons white"},r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_skip_previous,onClick:function(){}}),t?r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_pause,onClick:function(){a()}}):r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_play_arrow,onClick:function(){a()}}),r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_skip_next,onClick:function(){}})),r.a.createElement("div",{className:"progress-bar white"},r.a.createElement($,{currentTime:c,duration:n})))},te=function(e){var t=e.muteSound,a=e.changeMute,n=e.repeatTracks,c=e.changeRepeat;return r.a.createElement("div",{className:"footer-right white"},t?r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_volume_mute,onClick:function(){a()}}):r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_volume_up,onClick:function(){a()}}),n?r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_repeat,onClick:function(){c()}}):r.a.createElement(h.Icon,{className:"control-button",size:30,icon:g.ic_repeat_one,onClick:function(){c()}}))},ae=function(e){Object(Y.a)(a,e);var t=Object(X.a)(a);function a(){var e;return Object(q.a)(this,a),(e=t.call(this)).changeIsPlaying=function(){e.state.isPlaying?e.player.pause():e.player.play(),e.setState({isPlaying:!e.state.isPlaying})},e.changeRepeat=function(){e.setState({repeatTracks:!e.state.repeatTracks})},e.changeMute=function(){e.player.muted=!e.player.muted,e.setState({muteSound:!e.state.muteSound})},e.state={repeatTracks:!0,muteSound:!1,isPlaying:!1,currentTime:null,duration:null},e}return Object(Q.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.player.addEventListener("timeupdate",(function(t){e.setState({currentTime:t.target.currentTime,duration:t.target.duration})}))}},{key:"componentWillUnmount",value:function(){this.player.removeEventListener("timeupdate",(function(){}))}},{key:"componentDidUpdate",value:function(e){if(this.props.activeTrack!==e.activeTrack){var t=this.props.activeTrack.preview;t&&(this.player.src=t,this.player.play(),this.setState({isPlaying:!0,duration:this.player.duration,currentTime:this.player.currentTime}))}}},{key:"render",value:function(){var e=this,t=this.props.activeTrack,a=this.state,n=a.currentTime,c=a.duration;return r.a.createElement("div",{className:"footer-container"},r.a.createElement(Z,{trackImage:t&&t.album.cover_small,trackName:t&&t.title_short,trackArtist:t&&t.artist.name}),r.a.createElement(ee,{isPlaying:this.state.isPlaying,changeIsPlaying:this.changeIsPlaying,currentTime:n,duration:c}),r.a.createElement(te,{repeatTracks:this.state.repeatTracks,changeRepeat:this.changeRepeat,muteSound:this.state.muteSound,changeMute:this.changeMute}),r.a.createElement("audio",{ref:function(t){return e.player=t}}))}}]),a}(n.Component),ne=Object(k.b)((function(e){return{activeTrack:e.track.activeTrack}}))(ae);function re(){return r.a.createElement("div",{className:"main-app-container"},r.a.createElement(b,null),r.a.createElement(V,null),r.a.createElement(ne,null))}var ce=a(15),le=a(49),ie=a(50),se=a(29),oe=a(51),me=a.n(oe),ue=a(3),de={title:"",loading:!1,albums:null,tracks:null,playlists:null,artists:null,album:[],artist:null,playlist:[],error:null,artistTracks:[]},pe={activeTrack:null,playingQueue:[],trackImage:null,trackName:"Christmas",trackArtist:"Ne-yo"},Ee={loading:!1,error:null,searchResult:null},fe=(me.a,Object(ce.combineReducers)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_PAGE_TITLE":return Object(ue.a)(Object(ue.a)({},e),{},{title:n});case"GET_DATA":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0,error:null});case"GET_DATA_FAILURE":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,error:n});case"GET_ALBUMS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,albums:n});case"GET_ARTISTS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,artists:n});case"GET_TRACKS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,tracks:n});case"GET_ALBUM_TRACKS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,album:n});case"GET_ARTIST_TRACKS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,artistTracks:[n]});case"GET_ARTIST_DETAILS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,artist:n});default:return e}},track:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ACTIVE_TRACK":return Object(ue.a)(Object(ue.a)({},e),{},{activeTrack:n});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0,a=t.type;t.payload;switch(a){case"START_SEARCH":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!0,error:null});case"SEARCH_FAILURE":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,error:t.payload});case"SEARCH_SUCCESS":return Object(ue.a)(Object(ue.a)({},e),{},{loading:!1,searchResult:t.payload});default:return e}}})),he=a(52),ve=[a.n(he).a,ie.a],ge=Object(ce.createStore)(fe,Object(le.composeWithDevTools)(ce.applyMiddleware.apply(void 0,ve))),be=(Object(se.a)(ge),a(112),function(){return r.a.createElement(k.a,{store:ge},r.a.createElement(i.a,null,r.a.createElement(re,null)))});a(113),a(114),a(115);l.a.render(r.a.createElement(be,null),document.getElementById("root"))},46:function(e,t,a){e.exports=a.p+"static/media/spinner.0c194e03.gif"},55:function(e,t,a){e.exports=a(116)},60:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.edf38004.chunk.js.map