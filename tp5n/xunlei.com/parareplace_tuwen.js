(function(){com_alimama=window.com_alimama||{};com_alimama.util=window.com_alimama.util||{};if("function"!==typeof com_alimama.util.domReady){com_alimama.util.domReady=function(b){var c=com_alimama.util.domReady;if("function"===typeof b){if(c.ready)return b();if(c.timer)c.fns.push(b);else{window.attachEvent?attachEvent("onload",c.isDomReady):addEventListener("load",c.isDomReady,false);c.fns=[b];c.isDomReady()}}};com_alimama.util.domReady.isDomReady=function(){var b=com_alimama.util.domReady;if(b.ready)return false;
if(document&&document.getElementsByTagName&&document.getElementById&&document.body){"undefined"!==typeof b.timer&&clearTimeout(b.timer);b.timer=null;for(var c=0;c<b.fns.length;c++)b.fns[c]();b.fns=null;b.ready=true}else b.timer=setTimeout(b.isDomReady,50)}}var i=false,j=function(){function b(k,l,m){return k.replace(/(%26)?(&)?refpos[=(%3D)]\w*/ig,"").replace(l,m)}if(!i){var c=window.location.href,e=c.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i);if(e){e=e[0];var d=c.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);
e+=d&&d[1]&&d[3]?"%26"+d[1]+",a":d&&d[1]?"%26"+d[1]+",null,a":"%26refpos=,null,a";if(d=c.match(/pd=pd\d{0,5}/i))e+="%26"+d[0];var g=RegExp("mm_0_0_0","ig");d=document.getElementsByTagName("A");for(var a=0;a<d.length;a++)d[a].href=b(d[a].href,g,e);var f=document.getElementsByTagName("iframe");for(a=0;a<f.length;a++)f[a].src=b(f[a].src,g,e);var h=document.getElementsByTagName("area");for(a=0;a<h.length;a++)h[a].href=b(h[a].href,g,e);if(c=c.match(/w=mmp4ptest[^&]{0,}/i)){e=RegExp("w=mmp4ptest[^&]{0,}",
"gmi");for(a=0;a<d.length;a++)d[a].href=d[a].href.replace(e,c[0]);for(a=0;a<f.length;a++)f[a].src=f[a].src.replace(e,c[0])}}i=true}};com_alimama.util.domReady(j);setTimeout(j,3E3)})();