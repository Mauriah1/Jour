var AdultFlag;(function(n){function w(){l||(l=!0,t(_w,y,b,!0))}function b(){e=[];l=!1}var y="unload",f="adultFlag",i="undefined",o=typeof VideoRichHoverUtils!=i?VideoRichHoverUtils:null,s=typeof SmartEvent!=i?SmartEvent:null,r=typeof pMMUtils!=i?pMMUtils:null,h=!1,c=null,u=null,a=null,t=null,e=[],l=!1,v;if(!h&&r&&r.gfbc&&r.sepd&&o&&o.showElement&&s&&s.bind&&(c=r.gfbc,u=r.sepd,a=o.showElement,t=s.bind,h=!0),h&&_w&&!_w[f]){_w[f]=n;function p(n,t,i,r,u,f,o,s){n&&n.length>1&&i&&i.length>1&&u&&u.length>1&&r&&r.length>1&&(e[n]&&(e[n]=null),e[n]=new v(t,i,r,u,f,o,s));return}w();n.init=p}v=function(){function n(n,r,e,o,s,h,l){var v=this;(this.playUrl=null,this.mediaUrl=null,this.staticUrl=null,this.hash=null,this.bindEvents=function(){v.adultHandle&&(t(v.adultHandleContainer,"mouseup",u),t(v.adultHandle,"click",v.markAsAdultHandler),t(v.adultHandleContainer,"keydown",v.keyDown),t(v.adultHandleContainer,"focusout",u))},this.keyDown=function(n){n=n||window.event;var t=n?n.which?n.which:n.keyCode:n.keyCode;t==13?v.markAsAdultHandler(n):t!=9&&u(n)},this.markAsAdultHandler=function(n){var r,t,f;u(n);r=typeof EditorialToolTabs!=i?EditorialToolTabs:null;t=typeof FlagFeedback!=i?FlagFeedback:null;v.enableMarkAsAdult&&r&&r.videoClick&&(n==null||n.button!==2)?r.videoClick(v.mediaUrl,v.playUrl,v.staticUrl,v.hash):v.enableFlagFeedback&&t&&t.c&&(f={turl:v.staticUrl,surl:v.mediaUrl,imgurl:v.mediaUrl,src:"videovertical",md5:v.hash},t.metadata=f,t.c(n))},!n||!r||r.length<1||!o||o.length<1||!s||s.length<1||!e||e.length<1)||(this.mediaUrl=e,this.playUrl=r,this.staticUrl=o,this.hash=s,this.enableMarkAsAdult=h,this.enableFlagFeedback=l,this.adultHandle=c(f+" cont",n),this.adultHandleContainer=c(f,n),this.adultHandleContainer&&this.adultHandle)&&(this.bindEvents(),a(this.adultHandleContainer,!0))}return n}()})(AdultFlag||(AdultFlag={}))