var Multimedia;(function(n){var t;(function(t){var i;(function(t){function rt(){r=_ge(lt);r&&pMMUtils&&pMMUtils.gebc&&(i=pMMUtils,e(r,c,w),e(r,l,w),e(r,tt,ct),sj_be(_w,"unload",si),s=i.gfbc(at,r),s&&sj_be(s,"keydown",ot),u=_ge(bt),f=_ge(kt),u&&(sj_be(u,"click",g),sj_be(u,"keydown",ft)),f&&(sj_be(f,"click",et),sj_be(f,"keydown",ui)))}function ut(n){var t=v,i=y,r=p;return n!=undefined&&(t=n?v:v+" "+h,i=n?y+" "+h:y,r=n?p+ni:p+ti),{ctcn:t,cstcn:i,ccn:r}}function e(n,t,r,u){var f,e,o;if(u===void 0&&(u=!1),!n||!(i.hc&&i.rc)||!r)return!1;if(f=i.gebc(t,n),f){for(e=0;e<f.length;e++)o=f[e],o&&(u?sj_ue(o,"click",r):sj_be(o,"click",r));return!0}return!1}function ft(n){n&&n.keyCode===13&&g()}function g(){i.hc&&i.ac&&u&&!i.hc(u,a)&&(i.ac(u,a),ht("VDPChapterFeedbackThumbup"),u.setAttribute("aria-pressed","true"))}function ui(n){n&&n.keyCode===13&&et()}function et(){i.hc&&i.ac&&f&&!i.hc(f,a)&&(i.ac(f,a),ht("VDPChapterFeedbackThumbdown"),f.setAttribute("aria-pressed","true"))}function ot(n){var t,r;n&&n.keyCode===13&&i.gih&&i.gaebc&&i.gfbc&&(t=sj_et(n),t&&(r=i.gfbc(c,t),r||(r=i.gfbc(l,t)),st(r)))}function w(n){if(n&&i.gih&&i.gaebc&&i.gfbc){var t=sj_et(n);st(t);Log.Log("Click","VideoChapter","Outline",!1)}}function st(n){var t,r,u;if(n){if(t=i.gaebc(c,n),r=dt,t||(t=i.gaebc(l,n),r=gt),!t)return;if(u=i.gfbc(wt,t),u){var f=u.getElementsByTagName("span"),e=f!=null?f.length:-1,o=e<0?null:f[e-1];o&&fi(o,r)}}}function fi(n,t){var u,r,f;n&&(u=i.gih(n),r=nt(u),r>=0&&typeof it=="function"&&(ri.useSeekVideoEvent?(f={seekTime:r,enableSeekAhead:!0,enableSeekBack:!0},typeof sj_evt=="object"&&typeof sj_evt.fire=="function"&&sj_evt.fire(o===null||o===void 0?void 0:o.EmbedPlayer_SeekTime,f)):it(r,!0,!0)),oi(r,t))}function nt(n){var t;if(n){for(var i=n.split(":"),r=0,u=1;i.length>0;){if(t=parseInt(i.pop(),10),isNaN(t)||t<0||t>60)return-1;r+=u*t;u*=60}return r}return-1}function ei(n,t){for(var u=-1,r=n.map(function(n){return nt(n.timeStamp)}),i=0;i<r.length;i++){if(r[i]>t)break;r[i]<=t&&(u=i)}return u}function oi(n,t){if(pInstr){var i={TS:(new Date).getTime(),T:"VDPChapterTimeStampClick",AppNS:"VideoDetail",CTS:n,IT:t};pInstr.icd(i)}}function ht(n){if(pInstr){var t={TS:(new Date).getTime(),T:n,AppNS:"VideoDetail"};pInstr.icd(t)}}function ct(n){var s,u,f,e,o;if(n&&i.hc&&i.gfbc&&i.sh&&(s=sj_et(n),s&&r)){var t=i.gfbc(k,r),c=i.gfbc(v,r),l=i.gfbc(y,r),a=i.gfbc(p,r);t&&(u=i.hc(t,h),u?i.sc(t,k):i.sc(t,k+" "+h),f=ut(!u),i.sc(c,f.ctcn),i.sc(l,f.cstcn),i.sc(a,f.ccn),e=u?yt:pt,i.sh(r,e),o=_ge(vt),o&&i.sa&&i.sa(o,"style","padding-bottom:"+e+"px"))}}function si(){r&&(e(r,c,w,!0),e(r,l,w,!0),e(r,tt,ct,!0),s&&sj_ue(s,"keydown",ot),u&&(sj_ue(u,"click",g),sj_ue(u,"keydown",ft)))}var b,lt="mm_vdmc_sb",at="mm_vdp_ch_content",tt="mm_vdp_ch_hd",k="carousel-controls",vt="mmvdp_viewarea",yt=136,pt=46,h="b_hide",wt="mm_vdp_ch_tm",c="mm_vdp_ch_ol",l="mm_vdp_ch_sl",a="mm_vdp_ch_fbtbcl",bt="fbtoptuibtn",kt="fbtoptdibtn",dt="OLINT",gt="OLSLD",v="mm_vdp_ch_t",y="mm_vdp_ch_st",p="b_expansion_chevron",ni=" b_chevron_down",ti=" b_chevron_up",d=typeof VideoCanvasForEmbeddedYT!="undefined"?VideoCanvasForEmbeddedYT:typeof VideoCanvasForEmbeddedYTPlayer!="undefined"?VideoCanvasForEmbeddedYTPlayer:null,it=d===null||d===void 0?void 0:d.seekVideo,o=typeof SharedEventString!="undefined"?SharedEventString:null,i=typeof pMMUtils!="undefined"?pMMUtils:null,r=null,s=null,u=null,f=null,ii=typeof((b=n.Video)===null||b===void 0?void 0:b.swte)=="function"?n.Video.swte:function(){return!1},ri={useSeekVideoEvent:ii("usve")};rt();o&&sj_evt.bind(o.Chapter_BindClickEvent,rt);t.fcibt=ei;t.gchcn=ut;t.pts=nt})(i=t.ChapterUtils||(t.ChapterUtils={}))})(t=n.VideoDetail||(n.VideoDetail={}))})(Multimedia||(Multimedia={}))