var a=window,f="jstiming",j="start",k="addEventListener";if(a[f]){a[f].a={};a[f].c=1;var o=function(b,c,e){var d=b.t[c],h=b.t[j];if(d&&(h||e)){d=b.t[c][0];h=e!=undefined?e:h[0];return d-h}},p=function(b,c,e){var d="";if(a[f].pt){d+="&srt="+a[f].pt;delete a[f].pt}try{if(a.external&&a.external.tran)d+="&tran="+a.external.tran;else if(a.gtbExternal&&a.gtbExternal.tran)d+="&tran="+a.gtbExternal.tran();else if(a.chrome&&a.chrome.csi)d+="&tran="+a.chrome.csi().tran}catch(h){}var g=a.chrome;if(g)if(g=g.loadTimes){if(g().wasFetchedViaSpdy)d+="&p=s";if(g().wasNpnNegotiated)d+=
"&npn=1";if(g().wasAlternateProtocolAvailable)d+="&apa=1"}if(b.b)d+="&"+b.b;g=b.t;var l=g[j],q=[],m=[],i;for(i in g)if(i!="start")if(i.indexOf("_")!=0){var n=g[i][1];if(n)g[n]&&m.push(i+"."+o(b,i,g[n][0]));else l&&q.push(i+"."+o(b,i))}delete g[j];if(c)for(var r in c)d+="&"+r+"="+c[r];return b="csi.html";};a[f].report=function(b,c,e){b=p(b,c,e);if(!b)return"";c=
new Image;var d=a[f].c++;a[f].a[d]=c;c.onload=c.onerror=function(){delete a[f].a[d]};c.src=b;c=null;return b}};var s,t=function(b,c){return function(){return b.call("",c)}};var v=function(b){if(a[f]){a[f].load.tick(b);b=="ol"&&u()}};v("bundleJsStart");var w=function(b,c){a[f].load.name=b;s=c;var e=a,d="load",h=t(v,"ol");e[k]?e[k](d,h,false):e.attachEvent("on"+d,h);e=a;d="beforeunload";h=u;e[k]?e[k](d,h,false):e.attachEvent("on"+d,h);v("prt")};a.BLOG_initCsi=w;
var u=function(){var b=a[f].load,c;if(c=b.t[j]){var e;c=0;for(e in b.t)c++;e=c;c=e>1}if(c){e={};c=["blogger_csi_e","blogger_web_fonts_inconsolata_exp_enabled","blogger_web_fonts_droid_exp_enabled","blogger_web_fonts_exp_"];for(var d=c.length,h=0;h<d;h++){var g=c[h];if(g in a){e.e=a[g];break}}a[f].report(b,e,s);for(var l in b.t)l!="start"&&delete b.t[l]}};