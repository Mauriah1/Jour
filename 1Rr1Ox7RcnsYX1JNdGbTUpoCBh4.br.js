var VideoDetailPage_SkipIntroBanner;(function(){function y(){typeof pMMUtils!="undefined"&&typeof t!="undefined"&&(n=_ge("vdp_sib_int"),n)&&((i=pMMUtils.ga(n,"data-sp")*1,isNaN(i)||i<=0)||(sj_be(_w,"unload",l),sj_evt.bind("VideoCanvas.VideoPlayerError",k,!0),r&&sj_evt.bind(r.VideoCanvas_VideoPlayerWidthUpdated,w,!0),sj_evt.bind("VideoCanvas.VideoPlayerReady",b,!0),sj_be(n,"click",u),sj_be(n,"keyup",p)))}function l(){sj_ue(_w,"unload",l)}function p(n){var t=n===null||n===void 0?void 0:n.keyCode;switch(t){case 13:u(n)}}function w(t){if(t&&!(t.length<=1)){var i=t[1];!n||i<=0||(n.clientWidth!=i&&pMMUtils.sw(n,i),s=!0,a())}}function b(){h=!0;a()}function k(){c=!0;f()}function u(r){if(n){pMMUtils.sepd(r);var e=typeof(t===null||t===void 0?void 0:t.seekVideo)=="function"?t.seekVideo(i,!0,!1):null;e&&(sj_ue(n,"click",u),f(),typeof VideoDetailPage_SkipIntroBannerEvents!="undefined"&&VideoDetailPage_SkipIntroBannerEvents.sendClickEvent(v(),i))}}function a(){n&&!pMMUtils.hc(n,"vdp_sib_show")&&s&&(pMMUtils.isTest()||h)&&!c&&(pMMUtils.ac(n,"vdp_sib_show"),d())}function f(){n&&(pMMUtils.ac(n,"vdp_sib_int_skd"),g())}function d(){var n=-1;e=setInterval(function(){var t=v(),r;t>=0&&t!=n&&(r=Math.ceil(o/1e3),(t>=i||i-t<=r)&&f(),n=t)},o)}function g(){clearInterval(e)}function v(){return typeof(t===null||t===void 0?void 0:t.getVideoCurrentTime)=="function"?t.getVideoCurrentTime():-1}var n,i,e,o=1e3,s=!1,h=!1,c=!1,r=typeof SharedEventString!="undefined"?SharedEventString:null,t=typeof VideoCanvasForEmbeddedYT=="undefined"?typeof VideoCanvasForEmbeddedYTPlayer=="undefined"?null:VideoCanvasForEmbeddedYTPlayer:VideoCanvasForEmbeddedYT;r&&sj_evt.bind(r.SkipIntroBanner_Rendered,y,!0)})(VideoDetailPage_SkipIntroBanner||(VideoDetailPage_SkipIntroBanner={}))