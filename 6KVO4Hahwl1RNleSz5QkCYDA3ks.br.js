var VideoCanvasForEmbedded;(function(n){function p(){pMMUtils&&(t=_ge("mmvc"),t)&&(sj_evt.bind("ajax.unload",e),sj_be(_w,"unload",h),w())}function e(){sj_evt.unbind("ajax.unload",e);sb_ct(o)}function h(){e();sj_ue(_w,"unload",h)}function w(){var n=i.gfbc(s,t),r=i.gfbc("mmvc_emb_template",t),u,f;n&&r&&(i.ac(t,"loading"),n.innerHTML=r.textContent||r.innerText,l(),u=n.getElementsByTagName("iframe"),u.length===1&&(b(),sj_be(u[0],"load",k,!0)),f=i.isTest()?0:v,o=sb_st(d,f))}function b(){c("CI.VideoPlayerInsert");sj_evt.fire(r===null||r===void 0?void 0:r.EmbedPlayer_Insert)}function k(){c("CI.VideoPlayerLoad");sj_evt.fire(r===null||r===void 0?void 0:r.EmbedPlayer_Load)}function c(n){if(typeof performance!="undefined"&&performance&&performance.now){var t={TS:sb_gt(),T:n,AppNS:a,TE:performance.now()};pInstr.icd(t)}}function d(){i.rc(t,"loading");VideoCanvas.init();sj_evt.fire("VideoCanvasForEmbedded.VideoCanvasInitialized")}function l(){var e,o,h=i.gfbc(s,t),n,r,a;if(h){var c=h.getElementsByTagName(f),l=document.getElementsByTagName(f),u=null;for(l&&l.length>0&&(u=l[0]),n=0;n<c.length;n++)r=document.createElement(f),r&&(a=(e=c[n])===null||e===void 0?void 0:e.getAttribute(y),a&&(r.src=a,r.async=!0,u&&((o=u.parentNode)===null||o===void 0?void 0:o.insertBefore(r,u),h.removeChild(c[n]))));sj_evt.fire("VideoCanvasForEmbedded.ReAppendEmbedJS")}}var i=pMMUtils,r=typeof SharedEventString!="undefined"?SharedEventString:null,u=_w.VDConfig,a=u?u.appns:"video",v=u?u.prdelay:2e3,t,o,f="script",y="src",s="mmvc_emb_wrap";n.reAppendEmbedJS=l;p()})(VideoCanvasForEmbedded||(VideoCanvasForEmbedded={}))