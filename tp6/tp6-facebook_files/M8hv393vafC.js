if (self.CavalryLogger) { CavalryLogger.start_js(["pjFs3"]); }

__d('BlueBarFocusListener',['CSS','Deferred','Event'],(function a(b,c,d,e,f,g){var h='f_key',i='f_click',j=null,k=function r(){j=null;};function l(r){c('CSS').removeClass(r,h);c('CSS').removeClass(r,i);}function m(r){if(j)j.reject();j=new (c('Deferred'))();j.then(function(s){l(r);c('CSS').addClass(r,s);}).done(k,k);}function n(){if(j)j.resolve(h);}function o(r){if(j)j.reject();c('CSS').removeClass(r,h);c('CSS').addClass(r,i);}function p(r){return function(event){r(event.getTarget());};}var q={listen:function r(s){if(!s)return;c('Event').listen(s,'focusout',p(l));c('Event').listen(s,'focusin',p(m));c('Event').listen(s,'click',p(o));c('Event').listen(s,'keyup',n);}};f.exports=q;}),null);
__d('RoyalBluebar',['cx','Arbiter','CSS','Event','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){var i={_subscriptionHandler:null,_getSubscriptionHandler:function j(){if(!this._subscriptionHandler){this._subscriptionHandler=new (c('SubscriptionsHandler'))();c('Run').onUnload(function(){this._subscriptionHandler.release();this._subscriptionHandler=null;}.bind(this));}return this._subscriptionHandler;},fixOnScroll:function j(k){this._getSubscriptionHandler().addSubscriptions(c('Arbiter').subscribe('bluebarFixedBehaviorController/isfixed',function(l,m){var n="_50ti",o="_33rf";if(k.firstChild instanceof Element)c('CSS').conditionClass(k.firstChild,n,m);if(k.firstChild instanceof Element)c('CSS').conditionClass(k.firstChild,o,!m);}));},informOnClick:function j(k){this._getSubscriptionHandler().addSubscriptions(c('Event').listen(k,'click',function(event){if(c('Arbiter').inform('BlueBar/homeClick',event)===false)event.preventDefault();}));}};f.exports=i;}),null);
__d('NotificationSeenState',['NotificationConstants','NotificationUpdates','createObjectFrom'],(function a(b,c,d,e,f,g){var h=1,i=2,j=0,k=h,l=3,m=c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,n={UNSEEN_AND_UNREAD:j,SEEN_BUT_UNREAD:k,SEEN_AND_READ:l},o={};function p(s){var t=[],u=[];Object.keys(s).forEach(function(v){var w=s[v],x=o[v];o[v]=w;if(x===undefined){t.push(v);u.push(v);return;}var y=x^w;if(y&h)t.push(v);if(y&i)u.push(v);});t.length&&c('NotificationUpdates').didUpdateSeenState(t);u.length&&c('NotificationUpdates').didUpdateReadState(u);}c('NotificationUpdates').subscribe('update-notifications',function(s,t){var u=t.nodes;if(!u||!u.length)return;var v=t.payloadsource,w=c('NotificationConstants').PayloadSourceType,x=v==w.ENDPOINT,y={};u.forEach(function(z){var aa=z.alert_id;if(!x||o[aa]===undefined)if(z.seen_state)y[aa]=n[z.seen_state];});p(y);});c('NotificationUpdates').subscribe('update-seen',function(s,t){if(!t.seenState)return;var u=[],v={};Object.keys(t.seenState).forEach(function(x){if(!t.seenState||!t.seenState[x]){u.push(x);return;}var y=o[x];if(y!==undefined)v[x]=y|h;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,j),v);p(w);});c('NotificationUpdates').subscribe('update-read',function(s,t){if(!t.readState)return;var u=[],v={};Object.keys(t.readState).forEach(function(x){if(!t.readState)return;var y=t.readState[x];if(y){u.push(x);return;}var z=o[x];if(z!==undefined){v[x]=z&~i;}else if(t.payloadsource==m)v[x]=k;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,l),v);p(w);});function q(s){var t=o[s];return t;}var r={isRead:function s(t){return q(t)===l;},isSeen:function s(t){return q(t)!==j;},getUnseenCount:function s(){return r.getUnseenIDs().length;},getUnseenIDs:function s(){return Object.keys(o).filter(function(t){return o[t]===j;});},getUnreadCount:function s(){return r.getUnreadIDs().length;},getUnreadIDs:function s(){return Object.keys(o).filter(function(t){return o[t]!==l;});}};f.exports=r;}),6);
__d('NotificationJewelControllerModuleLoader',['JSResource','NotificationSeenState','NotificationStore','NotificationUpdates'],(function a(b,c,d,e,f,g){c('NotificationSeenState');c('NotificationStore');c('NotificationUpdates');f.exports=c('JSResource')('NotificationJewelController').__setRef('NotificationJewelControllerModuleLoader');}),null);
__d('NotificationJewelHeaderController',['DOM','Event','NotificationSeenState','NotificationUserActions','NotificationUpdates'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';c('Event').listen(i,'click',function(){c('NotificationUserActions').markAllNotificationsAsRead();});c('NotificationUpdates').subscribe('read-state-updated',function(){if(j)c('DOM').setContent(j,c('NotificationSeenState').getUnreadCount());});}f.exports=h;}),null);
__d('NotificationJewelListController',['Bootloader','React','ReactDOM'],(function a(b,c,d,e,f,g){var h=null,i=null;function j(k,l){'use strict';this.$NotificationJewelListController1=false;this.$NotificationJewelListController2=false;this.$NotificationJewelListController3=k;this.$NotificationJewelListController4=l;}j.prototype.open=function(){'use strict';this.$NotificationJewelListController1=true;this.$NotificationJewelListController5();};j.prototype.pause=function(){'use strict';this.$NotificationJewelListController2=true;this.$NotificationJewelListController5();};j.prototype.unpause=function(){'use strict';this.$NotificationJewelListController2=false;this.$NotificationJewelListController5();};j.prototype.$NotificationJewelListController5=function(){'use strict';if(!h||!i){c('Bootloader').loadModules(["NotificationList.react","NotificationJewelList.react"],function(k,l){h=k;i=l;this.$NotificationJewelListController6();}.bind(this),'NotificationJewelListController');}else this.$NotificationJewelListController6();};j.prototype.$NotificationJewelListController6=function(){'use strict';if(!h)return;c('ReactDOM').render(c('React').createElement(h,{hasEverBeenOpened:this.$NotificationJewelListController1,paused:this.$NotificationJewelListController2,tracking:this.$NotificationJewelListController4.tracking,negativeTracking:this.$NotificationJewelListController4.negativeTracking,shortenTimestamp:this.$NotificationJewelListController4.shortenTimestamp,businessID:this.$NotificationJewelListController4.businessID,maxHeight:this.$NotificationJewelListController4.maxHeight,useChevron:this.$NotificationJewelListController4.useChevron,chevronType:this.$NotificationJewelListController4.chevronType,numPerPage:5,listRenderer:i,upsell:this.$NotificationJewelListController4.upsell||null,endpoint:this.$NotificationJewelListController4.endpoint}),this.$NotificationJewelListController3);};f.exports=j;}),null);
__d('FriendingSurfaceVisitationTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:FriendingSurfaceVisitationLoggerConfig',this.$FriendingSurfaceVisitationTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:FriendingSurfaceVisitationLoggerConfig',this.$FriendingSurfaceVisitationTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$FriendingSurfaceVisitationTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$FriendingSurfaceVisitationTypedLogger1=babelHelpers['extends']({},this.$FriendingSurfaceVisitationTypedLogger1,j);return this;};h.prototype.setAppVersion=function(j){this.$FriendingSurfaceVisitationTypedLogger1.app_version=j;return this;};h.prototype.setBadgeCount=function(j){this.$FriendingSurfaceVisitationTypedLogger1.badge_count=j;return this;};h.prototype.setClientTimestamp=function(j){this.$FriendingSurfaceVisitationTypedLogger1.client_timestamp=j;return this;};h.prototype.setRawRefTab=function(j){this.$FriendingSurfaceVisitationTypedLogger1.raw_ref_tab=j;return this;};h.prototype.setRawTab=function(j){this.$FriendingSurfaceVisitationTypedLogger1.raw_tab=j;return this;};h.prototype.setRefPage=function(j){this.$FriendingSurfaceVisitationTypedLogger1.ref_page=j;return this;};h.prototype.setSurface=function(j){this.$FriendingSurfaceVisitationTypedLogger1.surface=j;return this;};h.prototype.setTargetProfileID=function(j){this.$FriendingSurfaceVisitationTypedLogger1.target_profile_id=j;return this;};h.prototype.setVC=function(j){this.$FriendingSurfaceVisitationTypedLogger1.vc=j;return this;};var i={app_version:true,badge_count:true,client_timestamp:true,raw_ref_tab:true,raw_tab:true,ref_page:true,surface:true,target_profile_id:true,vc:true};f.exports=h;}),null);
__d('JewelCountSideLoader',['invariant','CSS'],(function a(b,c,d,e,f,g,h){var i={},j={},k={},l={queueInstances:function m(n,o,p){i[n]={badge:o,root:p};},updateCountAndQueueArgs:function m(n,o,p){var q=j[n];if(q){q.updateCountAndArgs(p,o);return;}var r=i[n];r||h(0);k[n]={count:o,args:p};c('CSS').conditionClass(r.root,'hasNew',!!o);r.badge.setLegacyContent(o);return;},getOverwritesForJewel:function m(n){if(k[n.name])return k[n.name];j[n.name]=n;return null;}};f.exports=l;}),null);
__d('NotificationJewelFunnelLoggingConstants',[],(function a(b,c,d,e,f,g){'use strict';f.exports={FUNNEL_LOGGING_NAME:'WWW_NOTIFICATION_FUNNEL',FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:'fetch_notifications',OPEN_JEWEL:'open_jewel',CLOSE_JEWEL:'close_jewel',MOUSE_OVER_ON_JEWEL:'mouse_over_on_jewel',SCROLL_TO_FETCH:'scroll_to_fetch',FETCH_NEXT_SET:'fetch_next_set',CLEAR_BADGE_COUNT:'clear_badge_count'}};}),null);
__d('JewelBase',['csx','Promise','Arbiter','ArbiterMixin','CSS','DOM','Event','HTML','JewelCountSideLoader','Keys','Run','TabIsolation','Toggler','TooltipData','FunnelLogger','NotificationJewelFunnelLoggingConstants','mixin','reportData','FriendingSurfaceVisitationTypedLogger'],(function a(b,c,d,e,f,g,h){var i,j,k=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,l=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,m={};i=babelHelpers.inherits(n,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function n(o,p){'use strict';j.constructor.call(this);this.name=p.name;this.label=p.label;this.root=o;this.badge=p.badge;this.countNew=0;this.initialCount=0;this.escHandler=null;this.bootload_module=p.bootload_module;this.bootload_args=p.bootload_args;this.bootloading=null;this.togglerInstance=c('Toggler').getInstance(o).setSticky(false);c('Run').onAfterLoad(function(){return this.$JewelBase1();}.bind(this));if(p.keepOpenForSnowlift)this.togglerInstance.setPrePageTransitionCallback(this.$JewelBase2.bind(this));m[this.name]=this;this.$JewelBase3();var q=this.getFlyout(),r=new (c('TabIsolation'))(q);c('Toggler').createInstance(q).setSticky(false);this.$JewelBase4();c('Toggler').listen('show',this.root,function(s){c('FunnelLogger').appendAction(k,l.OPEN_JEWEL);this.$JewelBase5();this.hasNew()&&this.markSeen();this.reset();c('Arbiter').inform('layer_shown',{type:'Jewel'});r.enable();this.setupEvents();this.$JewelBase6();return this.$JewelBase1().then(function(){this.inform('opened');}.bind(this));}.bind(this));c('Toggler').listen('hide',this.root,function(s,t){c('FunnelLogger').appendAction(k,l.CLOSE_JEWEL);c('FunnelLogger').endFunnel(k);this.hasNew()&&this.markSeen();this.reset();this.inform('closed');c('Arbiter').inform('layer_hidden',{type:'Jewel'});r.disable();this.removeEvents();this.$JewelBase4();}.bind(this));c('Arbiter').subscribe('jewel/count-updated',function(s,t){t.jewel==this.name&&this.update(t);}.bind(this));c('Arbiter').subscribe('jewel/hide',function(s,t){this.hide();}.bind(this));}n.prototype.getRoot=function(){'use strict';return this.root;};n.prototype.hide=function(){'use strict';if(this.isOpen())c('Toggler').hide(this.root);};n.prototype.getFlyout=function(){'use strict';if(this.$JewelBase7===undefined)this.$JewelBase7=c('DOM').find(this.root,".__tw");return this.$JewelBase7;};n.prototype.hasNew=function(){'use strict';return c('CSS').hasClass(this.root,'hasNew');};n.prototype.isOpen=function(){'use strict';return c('CSS').hasClass(this.root,'openToggler');};n.prototype.reset=function(){'use strict';c('FunnelLogger').appendAction(k,l.CLEAR_BADGE_COUNT);c('CSS').removeClass(this.root,'hasNew');};n.prototype.setContent=function(o){'use strict';var p=c('DOM').find(this.root,'ul.jewelItemList');c('DOM').setContent(p,c('HTML')(o));};n.prototype.update=function(o){'use strict';if(o.animation&&this.badge.setAnimation)this.badge.setAnimation(o.animation);this.countNew=o.count;if(typeof this.countNew==='number'&&this.countNew<0)this.countNew=0;this.badge.setLegacyContent(this.countNew);var p=isNaN(this.countNew)||this.countNew>0;c('CSS').conditionClass(this.root,'hasNew',p);this.inform('updated',o);};n.prototype.setupEvents=function(){'use strict';this.escHandler=c('Event').listen(document.documentElement,'keydown',function(o){if(o.keyCode===c('Keys').ESC)this.hide();}.bind(this));};n.prototype.removeEvents=function(){'use strict';if(this.escHandler){this.escHandler.remove();this.escHandler=null;}};n.prototype.markSeen=function(){'use strict';c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:0},c('Arbiter').BEHAVIOR_STATE);this.inform('marked-seen');};n.prototype.$JewelBase8=function(){'use strict';if(typeof this.$JewelBase9==='undefined')this.$JewelBase9=c('DOM').find(this.root,"a.jewelButton");return this.$JewelBase9;};n.prototype.$JewelBase4=function(){'use strict';var o=this.$JewelBase8();c('TooltipData').set(o,this.label);o.setAttribute('data-tooltip-delay','500');};n.prototype.$JewelBase6=function(){'use strict';c('TooltipData').remove(this.$JewelBase8());};n.prototype.$JewelBase2=function(o,p){'use strict';if(!this.$JewelBase10(p.from)&&!this.$JewelBase10(p.to))this.togglerInstance&&this.togglerInstance.hide();};n.prototype.$JewelBase10=function(o){'use strict';return o&&Object.prototype.hasOwnProperty.call(o.getQueryData(),'theater');};n.prototype.$JewelBase5=function(){'use strict';c('reportData')('jewel_click',{gt:{count:this.countNew,initial:this.initialCount,jewel:this.name}});if(this.name==='requests')new (c('FriendingSurfaceVisitationTypedLogger'))().setSurface('jewel').setBadgeCount(this.countNew).log();};n.prototype.$JewelBase1=function(){'use strict';if(!this.bootload_module)return c('Promise').resolve();if(!this.bootloading)this.bootloading=new (c('Promise'))(function(o,p){this.bootload_module.load().then(function(q){new q(this,this.bootload_args);o();}.bind(this))['catch'](p);}.bind(this));return this.bootloading;};n.prototype.$JewelBase3=function(){'use strict';if(this.bootloading)return;var o=c('JewelCountSideLoader').getOverwritesForJewel(this);if(!o)return;this.updateCountAndArgs(o.args,o.count);};n.prototype.updateCountAndArgs=function(o,p){'use strict';for(var q in o)if(o[q])this.bootload_args[q]=o[q];if(p)c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:p},c('Arbiter').BEHAVIOR_STATE);};f.exports=n;}),null);
__d('ModalMask',['DOM'],(function a(b,c,d,e,f,g){var h=null,i=0,j={show:function k(){i++;if(!h){h=c('DOM').create('div',{id:'modalMaskOverlay'});c('DOM').appendContent(document.body,h);}},hide:function k(){if(i){i--;if(!i&&h){c('DOM').remove(h);h=null;}}},getNode:function k(){return h;}};f.exports=j;}),null);
__d('LitestandChromeHomeBadge',['cx','Arbiter','AsyncRequest','CSS','DOM','Event','formatNumber','LitestandMessages','UserAgent'],(function a(b,c,d,e,f,g,h){var i=300000,j={},k,l;function m(){l&&clearTimeout(l);if(k)return;l=setTimeout(n,i);}function n(){if(k)return;new (c('AsyncRequest'))().setURI('/ajax/litestand/newsfeed_count').setHandler(function(q){if(k)return;p.setCount(q.getPayload());m();}).setAllowCrossPageTransition(true).send();}function o(q){if(j.badgeNode){c('CSS').conditionClass(j.badgeNode,"_2527",q>0);}else{if(j.badgeNode)c('CSS').conditionClass(j.badgeNode,"_461d",q>0);if(q>0){var r=c('formatNumber').withMaxLimit(q,j.maxCount);c('DOM').setContent(j.countNode,r);}}}var p={init:function q(r){j=r;c('Event').listen(j.homeNode,'click',function(event){var s=event.getModifiers(),t=s.shift,u=s.meta,v=s.control;if(t||c('UserAgent').isPlatform('Mac OS X')&&u||c('UserAgent').isPlatform('Windows')&&v)o(0);});c('Arbiter').subscribe(c('LitestandMessages').NEWSFEED_LOAD,function(){k=true;this.setCount(0);}.bind(this));c('Arbiter').subscribe(c('LitestandMessages').LEAVE_HOME,function(){k=false;m();});m();},setCount:function q(r){o(k?0:r);}};f.exports=p;}),null);
__d('AccessibilityShortcut',['AccessibilityLogger','Event','Focus','ge','onEnclosingPageletDestroy','warning'],(function a(b,c,d,e,f,g){var h={init:function i(j,k){var l=c('Event').listen(j,'click',function(m){m.preventDefault();var n=c('ge')(k);if(n){c('Focus').set(n);c('AccessibilityLogger').logSRKey();}else c('warning')(n,'Failed to set focus on element with ID: %s',k);});c('onEnclosingPageletDestroy')(j,function(){return l.remove();});}};f.exports=h;}),null);
__d("CSSClassTransition",[],(function a(b,c,d,e,f,g){var h=[];function i(){}Object.assign(i,{go:function j(k,l,m,n){var o;for(var p=0;p<h.length;p++)if(h[p](k,l,m,n)===true)o=true;if(!o)k.className=l;},registerHandler:function j(k){h.push(k);return {remove:function l(){var m=h.indexOf(k);if(m>=0)h.splice(m,1);}};}});f.exports=i;}),null);
__d('QuicklingAugmenter',['URI'],(function a(b,c,d,e,f,g){var h=[],i={addHandler:function j(k){h.push(k);},augmentURI:function j(k){var l=[],m=new (c('URI'))(k);h.forEach(function(n){var o=n(m);if(!o)return m;l.push(n);m=m.addQueryData(o);});h=l;return m;}};f.exports=i;}),null);
__d('cancelIdleCallback',['IdleCallbackImplementation','TimerStorage'],(function a(b,c,d,e,f,g){f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK,i[0]);return Function.prototype.apply.call(c('IdleCallbackImplementation').cancelIdleCallback,b,i);};}),null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','cancelIdleCallback','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','requireWeak'],(function a(b,c,d,e,f,g){var h,i,j;c('requireWeak')('PageTransitions',function(v){j=v;});var k=c('QuicklingConfig').version,l=c('QuicklingConfig').sessionLength,m=new RegExp(c('QuicklingConfig').inactivePageRegex),n=0,o,p='',q={isActive:function v(){return true;},isPageActive:function v(w){if(w=='#')return false;w=new (c('URI'))(w);if(w.getDomain()&&w.getDomain()!=new (c('URI'))(window.location.href).getDomain())return false;if(w.getPath()=='/l.php'){var x=w.getQueryData().u;if(x){x=new (c('URI'))(unescape(x)).getDomain();if(x&&x!=new (c('URI'))(window.location.href).getDomain())return false;}}var y=w.getPath(),z=w.getQueryData();if(!c('isEmpty')(z))y+='?'+c('PHPQuerySerializer').serialize(z);return !m.test(y);},getLoadCount:function v(){return n;}};function r(v){v=v||'Facebook';c('DocumentTitle').set(v);if(c('UserAgent_DEPRECATED').ie()){p=v;if(!o)o=window.setInterval(function(){var w=p,x=c('DocumentTitle').get();if(w!=x)c('DocumentTitle').set(w);},5000,false);}}h=babelHelpers.inherits(s,c('AjaxPipeRequest'));i=h&&h.prototype;function s(v){'use strict';var w={version:k};i.constructor.call(this,v,{quickling:w});this._isQuickling=true;}s.prototype._preBootloadFirstResponse=function(v){'use strict';return true;};s.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(j)j.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);i._fireDomContentCallback.call(this);};s.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}i._fireOnloadCallback.call(this);};s.prototype.isPageActive=function(v){'use strict';return q.isPageActive(v);};s.prototype._versionCheck=function(v){'use strict';if(v.version==k)return true;var w=['quickling','ajaxpipe','ajaxpipe_token'];c('goOrReplace')(window.location,new (c('URI'))(v.uri).removeQueryData(w),true);return false;};s.prototype._processFirstResponse=function(v){'use strict';var w=v.getPayload();r(w.title);window.scrollTo(0,0);c('CSSClassTransition').go(document.body,w.body_class||'',j.getMostRecentURI(),v.getRequest().getURI());c('Arbiter').inform('quickling/response');};s.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};s.prototype.getAsyncRequestType=function(){'use strict';return 'useIframeTransport';};function t(){n++;return n>=l;}function u(v){c('AjaxPipeRequest').setCurrentRequest(null);if(t())return false;v=c('QuicklingAugmenter').augmentURI(v);if(!q.isPageActive(v))return false;c('TimerStorage').clearAll(c('TimerStorage').ANIMATION_FRAME,c('cancelAnimationFrame'));c('TimerStorage').clearAll(c('TimerStorage').IDLE_CALLBACK,c('cancelIdleCallback'));c('TimerStorage').clearAll(c('TimerStorage').IMMEDIATE,c('clearImmediate'));c('TimerStorage').clearAll(c('TimerStorage').INTERVAL,c('clearInterval'));c('TimerStorage').clearAll(c('TimerStorage').TIMEOUT,c('clearTimeout'));window.ExitTime=Date.now();c('Run').__removeHook(c('PageHooks').ONLOAD_HOOK);c('Run').__removeHook(c('PageHooks').DOMREADY_HOOK);c('PageHooks').runHooks('onleavehooks');c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD,{transition_type:'quickling'});new s(v).setCanvasId('content').send();var w=window.__bodyWrapper;if(w.getCodeUsage)w.clearCodeUsage();return c('PageTransitionsRegistrar').DELAY_HISTORY;}c('Run').onAfterLoad(function v(){c('PageTransitionsRegistrar').registerHandler(u,1);});f.exports=b.Quickling=q;}),null);
__d('BrowserPushNotificationJewelUpsellLogger',['Arbiter','QE2Logger'],(function a(b,c,d,e,f,g){'use strict';var h='www_browser_notifications_upsell',i={exposeOnVisible:function j(){c('Arbiter').subscribeOnce('notificationJewel/opened',function(){return c('QE2Logger').logExposureForUser(h);});}};f.exports=i;}),null);
__d('ViewasChromeBar',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','Focus','ModalMask','PageTransitionsRegistrar','Parent'],(function a(b,c,d,e,f,g,h,i){var j='ViewasChromeBar/initialized',k=null,l=false;function m(p){c('Arbiter').subscribe(j,p);}function n(p){c('CSS').addClass(p,"_7g7");var q=c('DOM').find(p,"._7g0");c('Focus').set(c('DOM').find(q,'.textInput'));}var o={initChromeBar:function p(q){if(l)return;k=q;l=true;c('Arbiter').inform(j,null,c('Arbiter').BEHAVIOR_STATE);},update:function p(q,r){m(function(){c('DOM').setContent(k,q);if(r)new (c('AsyncRequest'))('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function p(q){c('Event').listen(q,'click',function(){var r=c('Parent').bySelector(q,"._7f-");if(r)n(r);});},registerFlyoutModalMask:function p(){c('ModalMask').show();c('PageTransitionsRegistrar').registerHandler(c('ModalMask').hide,10);}};f.exports=o;}),null);
__d("isEmail",[],(function a(b,c,d,e,f,g){var h=/^[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function i(j){return h.test(j);}f.exports=i;}),null);
__d('ServiceWorkerRegistration',['Promise','ClientServiceWorkerMessage'],(function a(b,c,d,e,f,g){var h='serviceWorker' in navigator;function i(){var k=navigator.serviceWorker;if(!h||!k)throw new Error('serviceWorker is not supported in this browser');return k;}var j={isSupported:function k(){return h;},registerWorkerIfUnregistered:function k(l){var m=i();return new (c('Promise'))(function(n,o){this.getWorkerRegistration(l).done(function(p){if(!p){c('Promise').resolve(m.register(l,{useCache:true})).done(function(){c('Promise').resolve(m.ready).done(n);});}else n(p);});}.bind(this));},unregisterControllingWorker:function k(){return new (c('Promise'))(function(l,m){var n=new (c('ClientServiceWorkerMessage'))('unregister',{},function(){l(true);});n.sendViaController();});},getWorkerRegistration:function k(l){var m=i();return c('Promise').resolve(m.getRegistration(l));},isAWorkerActivated:function k(){if(!navigator.serviceWorker||!navigator.serviceWorker.getRegistration)return c('Promise').resolve(false);return navigator.serviceWorker.getRegistration().then(function(l){return !!(l&&l.active);});}};f.exports=j;}),null);