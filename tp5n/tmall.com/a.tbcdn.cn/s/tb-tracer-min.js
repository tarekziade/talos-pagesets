(function(b){if(b._tb_tracer){return}var h=document,e="httpdisabled://110.75.1.110/monitor.htm",m=(new Date()).getTime(),l=m,g=0,c=0,i={},k=function(n){return typeof n=="number"},a=function(s,x){var o,p,t,q,n,v,r,w=false,u={};while(s){r=s.tagName;if(r&&r!="HTML"){w=true}if(r=="A"){o=s.getAttribute("href",2)||"";n=n||s;v=v||r;if(c==0){break}}else{if(r=="IMG"){n=n||s;v=v||r}}if((s.id&&(p=i[s.id]))||!(t=s.parentNode)){break}s=t}if(!w||(!p&&c>0)){return}if(o){u.href=o}if(v){u.et=v}u.pos=j(n,x).join(",");g++;u.cc=g;q=(new Date()).getTime();u.t=q-m;u.t2=q-l;l=q;f.send(u)},j=function(o,u){var w=h.compatMode=="BackCompat"?h.body:h.documentElement,q=Math.max(w.scrollWidth,w.clientWidth),z=w.scrollTop,s=w.scrollLeft;var B=u.pageX,A=u.pageY;if(!k(B)){B=u.clientX+s;A=u.clientY+z}var v=-1,t,n;if(o){if(o.getBoundingClientRect){n=o.getBoundingClientRect();v=n.left+s;t=n.top+z}else{}}if(f.layout==0){var p=q>>1;B-=p;v-=p}return k(t)?[B,A,v,t,o.offsetWidth,o.offsetHeight]:[B,A]},d=function(p){var n=[],o;for(o in p){n.push(o+"="+encodeURIComponent(p[o]))}return n.join("&")};var f={init:function(q,n,s){f.tid=q;f.eid=(n||0).toString();f.cfg=k(s)?{layout:s}:(s||{});f.layout=f.cfg.layout||0;var r=h.cookie.match(new RegExp("\\b"+(f.cfg.cookie_id||"t")+"=(\\w+);")),p={type:"pv",sw:b.screen.width,sh:b.screen.height};f.cid=r?r[1]:"";f.send(p);var o=!!h.attachEvent;h[o?"attachEvent":"addEventListener"]((o?"on":"")+"mousedown",function(u){u=u||b.event;var t=u.target||u.srcElement;if(t){a(t,u)}},false)},watch:function(p){for(var o=0,n=p.length;o<n;o++){i[p[o]]=1}c+=n},send:function(p){var o=Math.random,q="rnd_id_"+o(),n=new Image();b[q]=n;n.onloaddisabled=n.onerror=function(){b[q]=null};p.f="tb-tracer";p.tid=f.tid;p.eid=f.eid;p.r=o();if(f.layout){p.layout=f.layout}if(f.cid){p.cid=f.cid}n.src=e+"?"+d(p);n=null}};b._tb_tracer={version:"0.1.1",init:function(o,n,p){if(!o){return}f.init(o,n,p);return this},watch:function(n){f.watch([].slice.call(arguments,0));return this}}})(window);