var ClientSidePerfPing;(function(){function n(){typeof(_w===null||_w===void 0?void 0:_w.addEventListener)=="function"&&_w.addEventListener(SharedEventString.ClientPerf_ModuleInit,t)}function t(n){if(n===null||n===void 0?void 0:n.detail){var r=n.detail,t=r.eventNameTriggerPerfPing;t&&typeof(_w===null||_w===void 0?void 0:_w.addEventListener)=="function"&&_w.addEventListener(t,i)}}function i(){si_PP(new Date)}n()})(ClientSidePerfPing||(ClientSidePerfPing={}))