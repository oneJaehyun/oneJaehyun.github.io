!function(p){"use strict";var e=p.fancybox,u=function e(t,a,o){return o=o||"","object"===p.type(o)&&(o=p.param(o,!0)),p.each(a,function(e,a){t=t.replace("$"+e,a||"")}),o.length&&(t+=(0<t.indexOf("?")?"&":"?")+o),t};e.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function e(a,t,o){return o.swf.flashVars="playerVars="+p.param(t,!0),"//www.metacafe.com/fplayer/"+a[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function e(a){return"//maps.google."+a[1]+"/"+a[3]+a[4]+"&output="+(0<a[4].indexOf("layer=c")?"svembed":"embed")}}},beforeLoad:function e(a,t){var o=t.href||"",i=!1,r,m,l,c;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],l=o.match(m.matcher))){i=m.type,c=p.extend(!0,{},m.params,t[r]||(p.isPlainObject(a[r])?a[r].params:null)),o="function"===p.type(m.url)?m.url.call(this,l,c,t):u(m.url,l,c);break}i&&(t.href=o,t.type=i,t.autoHeight=!1)}}}(jQuery);