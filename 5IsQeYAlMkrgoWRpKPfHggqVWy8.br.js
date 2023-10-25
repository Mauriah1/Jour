var ModernRewards;(function(n){var t="redDotDisplay",e="redDotDisplayFill",f="rewards_header_icon serp",o="rewards_header_icon hp",r="/red-dot-24.png",s="AutoOpenFlyoutFired",h="bfbNotificationShown",c="BNPNotificationShown",l="ChatVerticalShown",a="CookieDisabled",v="IsAADUser",y="MissingModel",i=!0,u="",p=function(){function n(n){this.reportActivityModel=n;this.rewardsReadyEventArgs={isAuthenticated:n&&n.IsAuthenticated,isRebatesUser:n&&n.RewardsSessionData&&n.RewardsSessionData.IsRebatesUser,isRewardsUser:n&&n.RewardsSessionData&&n.RewardsSessionData.IsRewardUser,isTrialUser:n&&n.RewardsSessionData&&!n.RewardsSessionData.IsRewardUser&&n.RewardsSessionData.IsTrialUser,waitlist:n&&n.RewardsSessionData&&n.RewardsSessionData.Waitlist}}return n.prototype.initialize=function(){var r=this,e,o,p,w,n;if(this.reportActivityModel){if(this.sendReportActivityModelToWidget(),this.updateDashboardHeader(),this.updateMobileHeader(),this.updateRebatesHeader(),this.updateBalanceMessage(),(((e=this.reportActivityModel.RewardsSessionData)===null||e===void 0?void 0:e.IsGiveModeOn)||this.reportActivityModel.IsGiveSerpHeaderTealHeartEnabled||this.reportActivityModel.IsDailyCheckInMedallionAnimationEnabled||this.reportActivityModel.IsRewardsEntryPointEnabled||this.reportActivityModel.IsRewardsEntryPointToggleEnabled)&&!this.reportActivityModel.IsGiveHeaderTextEnabled&&this.updateIdentityHeader(!1),this.reportActivityModel.IsGiveHeaderTextEnabled)this.updatePointsCounter();else if(_ge("givemuid_heart")||_ge("rh_meter_leaf_homepage")){o=_ge("id_r");o&&(o.style.display="block");var t=this.reportActivityModel.RewardsSessionData,b=t.Balance>0||t.IsRewardUser,f=b?t.Balance.toString():this.reportActivityModel.RewardsHeader,k=_ge("id_rc");k&&f&&(k.innerHTML=f,this.reportActivityModel.AnimateHeader&&b&&(this.reportActivityModel.IsMobileClient?RewardsCreditRefresh.RewardsHeaderAnim(t.PreviousBalance,t.Balance,t.GoalTrackBalance,this.reportActivityModel.RewardsIncrement):sj_evt.bind("identityHeaderShown",function(){return RewardsCreditRefresh.RewardsHeaderAnim(t.PreviousBalance,t.Balance,t.GoalTrackBalance,r.reportActivityModel.RewardsIncrement)},1)));p=_ge("ic_rcep");p&&f&&(p.innerHTML=f)}this.reportActivityModel.LogWaitlistAutoJoin&&LightLogger&&LightLogger.logInstrumentationV2(null,LightLogger.InstrumentationEventType.Init,"WaitlistAutoJoin",!0,{})}w=this.reportActivityModel&&this.reportActivityModel.RewardsSessionData?this.reportActivityModel.RewardsSessionData.IsRewardUser:!1;n=!1;this.reportActivityModel?navigator.cookieEnabled?(n=this.reportActivityModel.AutoOpenFlyout,n||(u="NoTrigger:"+this.reportActivityModel.AutoOpenFlyoutSuppressionReason)):(n=w?this.reportActivityModel.AutoOpenFlyout:!1,n||(u=a)):u=y;sj_evt.bind("bnp.notif.shown",function(){n&&(u=c);n=!1;sj_evt.fire("AutoOpenFlyoutHide")},!0);sj_evt.bind("showSydFSC",function(){n&&(u=l);n=!1;sj_evt.fire("AutoOpenFlyoutHide")},!0);sj_evt.bind("bfbNotificationShown",function(){n&&(u=h);n=!1;sj_evt.fire("AutoOpenFlyoutHide")},!0);sj_evt.bind("aad:signedin",function(){n&&(u=v);n=!1;sj_evt.fire("AutoOpenFlyoutHide")},!0);sj_evt.bind("onP1",function(){n&&sj_evt.fire("AutoOpenFlyout");LightLogger&&LightLogger.logInstrumentationV2(null,LightLogger.InstrumentationEventType.Init,s,!0,{IsRewardUser:w,IsAutoOpenFlyout:n,SuppressionReason:u})},1);sj_evt.fire("RewardsCookieUpdated");sj_evt.fire("rewready",this.rewardsReadyEventArgs);sj_evt.bind("redDotControl",function(){r.hideRedDot()});sj_evt.bind("rewardsRedDot",function(){return i=!1,r.updateIdentityHeader(!0),i},1);sj_evt.bind("redDotAnimation",function(){return i=!0,r.updateIdentityHeader(!0),i},1)},n.prototype.updatePointsCounter=function(){var u=this,n=this.reportActivityModel.RewardsSessionData,t=n.Balance>0||n.IsRewardUser,i=t?n.Balance.toString():this.reportActivityModel.RewardsHeader,r=_ge("id_rc");r&&i&&(r.innerHTML=i,this.reportActivityModel.AnimateHeader&&t&&(this.reportActivityModel.IsMobileClient?RewardsCreditRefresh.RewardsHeaderAnim(n.PreviousBalance,n.Balance,n.GoalTrackBalance,this.reportActivityModel.RewardsIncrement):sj_evt.bind("identityHeaderShown",function(){return RewardsCreditRefresh.RewardsHeaderAnim(n.PreviousBalance,n.Balance,n.GoalTrackBalance,u.reportActivityModel.RewardsIncrement)},1)))},n.prototype.updateIdentityHeader=function(n){var g=this,a,v,y,p,c,s,w;if(this.reportActivityModel){if(!this.reportActivityModel.RewardsSessionData||this.reportActivityModel.IsGiveHeaderTextEnabled)return;var u=this.reportActivityModel.RewardsSessionData,h=this.reportActivityModel.AnimationAltText,b=_ge("id_r");if(b&&(b.style.display="block"),this.reportActivityModel.RewardsSessionData.IsGiveModeOn)s=_ge(o),s&&(s.innerHTML="".concat(u.ShowAnimation?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" class = "" width = "8px" height = "8px" style="float:right;margin-right:-1px;margin-top:-1px" />'):"")+'<svg width="30" height="30" style="'.concat(u.ShowAnimation?"margin-left: 1px":"",'" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">')+'<rect width="30" height="30" fill="none"><\/rect><circle cx="15" cy="15" r="14" stroke="white" stroke-opacity="0.8" stroke-width="2"><\/circle><path d="M15 11.412L15.9463 11.7354C15.808 12.1401 15.4276 12.412 15 12.412C14.5723 12.412 14.192 12.1401 14.0537 11.7354L15 11.412ZM21.9309 12.3022L21.8452 13.2985C21.3557 13.2564 20.9693 12.865 20.9335 12.375L21.9309 12.3022ZM21.9411 12.303L22.0268 11.3067C22.4831 11.346 22.8545 11.6903 22.9281 12.1424L21.9411 12.303ZM17.6248 19.5469L17.0304 18.7427L17.0304 18.7427L17.6248 19.5469ZM15 20.6418L14.8739 19.6498C14.9576 19.6391 15.0423 19.6391 15.1261 19.6498L15 20.6418ZM12.3752 19.5469L12.9696 18.7427L12.9696 18.7427L12.3752 19.5469ZM8.05891 12.303L7.0719 12.1424C7.1455 11.6903 7.51684 11.346 7.9732 11.3067L8.05891 12.303ZM8.06909 12.3022L9.06643 12.375C9.03065 12.865 8.64426 13.2564 8.1548 13.2985L8.06909 12.3022ZM14.0537 11.0886C14.6673 9.29326 16.3687 8 18.3749 8V10C17.25 10 16.2917 10.7246 15.9463 11.7354L14.0537 11.0886ZM18.3749 8C20.7834 8 22.7555 9.86433 22.9282 12.2293L20.9335 12.375C20.8366 11.0476 19.7276 10 18.3749 10V8ZM22.0166 11.3058L22.0268 11.3067L21.8554 13.2994L21.8452 13.2985L22.0166 11.3058ZM22.9281 12.1424C23.252 14.132 22.44 15.8965 21.4296 17.2539C20.4155 18.6163 19.1155 19.6885 18.2192 20.3511L17.0304 18.7427C17.8606 18.1291 18.9815 17.1933 19.8253 16.0597C20.6727 14.9212 21.1556 13.7019 20.9541 12.4637L22.9281 12.1424ZM18.2192 20.3511C16.7902 21.4072 15.5844 21.7241 14.8739 21.6338L15.1261 19.6498C15.1153 19.6484 15.8058 19.6478 17.0304 18.7427L18.2192 20.3511ZM12.9696 18.7427C14.1942 19.6478 14.8846 19.6484 14.8739 19.6498L15.1261 21.6338C14.4156 21.7241 13.2098 21.4072 11.7808 20.3511L12.9696 18.7427ZM9.04591 12.4637C8.84434 13.7019 9.32726 14.9212 10.1747 16.0597C11.0185 17.1933 12.1394 18.1291 12.9696 18.7427L11.7808 20.3511C10.8844 19.6885 9.58447 18.6163 8.57039 17.2539C7.55998 15.8965 6.74801 14.132 7.0719 12.1424L9.04591 12.4637ZM8.1548 13.2985L8.14462 13.2994L7.9732 11.3067L7.98338 11.3058L8.1548 13.2985ZM11.6251 10C10.2724 10 9.16338 11.0476 9.06643 12.375L7.07175 12.2293C7.24447 9.86433 9.21662 8 11.6251 8V10ZM14.0537 11.7354C13.7083 10.7246 12.75 10 11.6251 10V8C13.6312 8 15.3327 9.29326 15.9463 11.0886L14.0537 11.7354Z" fill="white"><\/path> <\/svg>'),c=_ge(f),c&&(c.innerHTML="".concat(u.ShowAnimation?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" class = "" width = "8px" height = "8px" style="float: right;margin-right:-1px;margin-top:-1px;" />'):"")+'<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" '+'style="'.concat(u.ShowAnimation?"margin-bottom: -2px; margin-left: 4px;":"margin-bottom: -2px; margin-left: 4px;",'">')+'<rect width = "30" height = "30" fill = "none" /><\/rect><circle cx="15" cy="15" r="14" stroke="#00809d" stroke-opacity="0.8" stroke-width="2" /><path id="rh_animpath" class="serp anim" d="M15 11.412L15.9463 11.7354C15.808 12.1401 15.4276 12.412 15 12.412C14.5723 12.412 14.192 12.1401 14.0537 11.7354L15 11.412ZM21.9309 12.3022L21.8452 13.2985C21.3557 13.2564 20.9693 12.865 20.9335 12.375L21.9309 12.3022ZM21.9411 12.303L22.0268 11.3067C22.4831 11.346 22.8545 11.6903 22.9281 12.1424L21.9411 12.303ZM17.6248 19.5469L17.0304 18.7427L17.0304 18.7427L17.6248 19.5469ZM15 20.6418L14.8739 19.6498C14.9576 19.6391 15.0423 19.6391 15.1261 19.6498L15 20.6418ZM12.3752 19.5469L12.9696 18.7427L12.9696 18.7427L12.3752 19.5469ZM8.05891 12.303L7.0719 12.1424C7.1455 11.6903 7.51684 11.346 7.9732 11.3067L8.05891 12.303ZM8.06909 12.3022L9.06643 12.375C9.03065 12.865 8.64426 13.2564 8.1548 13.2985L8.06909 12.3022ZM14.0537 11.0886C14.6673 9.29326 16.3687 8 18.3749 8V10C17.25 10 16.2917 10.7246 15.9463 11.7354L14.0537 11.0886ZM18.3749 8C20.7834 8 22.7555 9.86433 22.9282 12.2293L20.9335 12.375C20.8366 11.0476 19.7276 10 18.3749 10V8ZM22.0166 11.3058L22.0268 11.3067L21.8554 13.2994L21.8452 13.2985L22.0166 11.3058ZM22.9281 12.1424C23.252 14.132 22.44 15.8965 21.4296 17.2539C20.4155 18.6163 19.1155 19.6885 18.2192 20.3511L17.0304 18.7427C17.8606 18.1291 18.9815 17.1933 19.8253 16.0597C20.6727 14.9212 21.1556 13.7019 20.9541 12.4637L22.9281 12.1424ZM18.2192 20.3511C16.7902 21.4072 15.5844 21.7241 14.8739 21.6338L15.1261 19.6498C15.1153 19.6484 15.8058 19.6478 17.0304 18.7427L18.2192 20.3511ZM12.9696 18.7427C14.1942 19.6478 14.8846 19.6484 14.8739 19.6498L15.1261 21.6338C14.4156 21.7241 13.2098 21.4072 11.7808 20.3511L12.9696 18.7427ZM9.04591 12.4637C8.84434 13.7019 9.32726 14.9212 10.1747 16.0597C11.0185 17.1933 12.1394 18.1291 12.9696 18.7427L11.7808 20.3511C10.8844 19.6885 9.58447 18.6163 8.57039 17.2539C7.55998 15.8965 6.74801 14.132 7.0719 12.1424L9.04591 12.4637ZM8.1548 13.2985L8.14462 13.2994L7.9732 11.3067L7.98338 11.3058L8.1548 13.2985ZM11.6251 10C10.2724 10 9.16338 11.0476 9.06643 12.375L7.07175 12.2293C7.24447 9.86433 9.21662 8 11.6251 8V10ZM14.0537 11.7354C13.7083 10.7246 12.75 10 11.6251 10V8C13.6312 8 15.3327 9.29326 15.9463 11.0886L14.0537 11.7354Z" /><\/svg>');else if(this.reportActivityModel.IsGiveSerpHeaderTealHeartEnabled&&(u.IsGiveModeOn||!u.IsRewardUser))s=_ge(o),s&&(s.innerHTML="".concat(u.ShowAnimation?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" class = "" width = "8px" height = "8px" style="float:right;margin-right:-1px;margin-top:-1px" />'):"")+' <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"> <circle cx="16" cy="16" r="15" stroke="white" stroke-width="2" /> <path fill="white" fill-rule="evenodd" d="M16.002 12.7c-.545-1.57-2.066-2.7-3.858-2.7-2.148 0-3.907 1.625-4.062 3.685l-.015.001c-.6 3.602 2.958 6.66 4.93 8.084 1.52 1.097 2.604 1.273 3.002 1.222.394.052 1.48-.121 3.004-1.221 1.972-1.425 5.53-4.482 4.93-8.085h-.011C23.768 11.625 22.008 10 19.86 10c-1.792 0-3.313 1.13-3.858 2.7z" clip-rule="evenodd" /><\/svg>'),c=_ge(f),c&&(c.innerHTML="".concat(u.ShowAnimation?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" class = "" width = "8px" height = "8px" style="float: right;margin-right:-1px;margin-top:-1px;" />'):"")+'<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32">  <circle cx="16" cy="16" r="15" stroke="#00809D" stroke-width="2" /><path fill="#00809D" fill-rule="evenodd" d="M16.002 12.7c-.545-1.57-2.066-2.7-3.858-2.7-2.148 0-3.907 1.625-4.062 3.685l-.015.001c-.6 3.602 2.958 6.66 4.93 8.084 1.52 1.097 2.604 1.273 3.002 1.222.394.052 1.48-.121 3.004-1.221 1.972-1.425 5.53-4.482 4.93-8.085h-.011C23.768 11.625 22.008 10 19.86 10c-1.792 0-3.313 1.13-3.858 2.7z" clip-rule="evenodd" /><\/svg>');else if(this.reportActivityModel.IsDailyCheckInMedallionAnimationEnabled&&this.reportActivityModel.RewardsSessionData.DailyCheckInProgress){var c=_ge(f),nt=(v=(a=this.reportActivityModel)===null||a===void 0?void 0:a.RewardsSessionData)===null||v===void 0?void 0:v.DailyCheckInProgress,tt=((p=(y=this.reportActivityModel)===null||y===void 0?void 0:y.RewardsSessionData)===null||p===void 0?void 0:p.DailyCheckInAnimate)||0;c&&(c.innerHTML=this.getDailyCheckInAnimation(tt,nt,n,h,u))}else s=_ge(o),s&&(s.innerHTML='<span class="rhlined hp">'.concat(u.ShowAnimation?i?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" width = "8px" height = "8px" style="margin-top:6px" />'):'<svg id = "'.concat(t,'" class = "" width = "6px" height = "6px" style="float:right;margin-right:-3px;margin-top:-1px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" enable-background="new 0 0 6 6">')+'<circle cx="3" cy="3" r="3" fill="#C80000"><\/circle><\/svg>':"")+'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path class="medal" d="M23 9h-14c-.552 0-1 .448-1 1v3.71c0 .538.288 1.034.756 1.303l4.877 2.778c-1.206.891-1.905 2.43-1.532 4.115.323 1.461 1.501 2.655 2.96 2.987 2.617.596 4.939-1.378 4.939-3.893 0-1.32-.647-2.481-1.633-3.209l4.877-2.779-.002.001c.471-.268.758-.767.758-1.303v-3.71c0-.552-.448-1-1-1zm-12 4.991l-1-.571v-2.42h1v2.991zm5 9.009c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm3-7.866l-2.472 1.537c-.323.201-.733.201-1.056 0l-2.472-1.537v-4.134h6v4.134zm3-1.714l-1 .571v-2.991h1v2.42z"><\/path><path d="M.018 0h32v32h-32v-32z" fill="none"><\/path><circle class="meter" stroke="#000" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle><\/svg><\/span>'+'<span class="rhfill hp">'.concat(u.ShowAnimation?i?'<img id = "'.concat(e,'" src="').concat(r,'" alt="').concat(h,'" width = "8px" height = "8px" style="float:right;margin-right:-3px;margin-top:-5px" />'):'<svg id = "'.concat(e,'" class = "" width = "6px" height = "6px" style="float:right;margin-right:-3px;margin-top:-3px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" enable-background="new 0 0 6 6">')+'<circle cx="3" cy="3" r="3" fill="#C80000"><\/circle><\/svg>':"")+'<svg style="'.concat(u.ShowAnimation?"margin-top:-3px;":"",'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">')+'<path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z"><\/path><path d="M.018 0h32v32h-32v-32z" fill="none"><\/path><circle class="meter" stroke="#000" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle><\/svg><\/span><svg xmlns="http://www.w3.org/2000/svg" id="rh_meter"><circle cx="20" cy="20" r="14" id="rh_animcrcl" class="hp" stroke-dasharray="88, 88" transform="rotate(-90,20,20)"><\/circle><\/svg>'),s=_ge(f),s&&(s.innerHTML="".concat(u.ShowAnimation?i?'<span style="float:right;display:inline-block;vertical-align:top;margin:-25px 0 0 -5px;">'+'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(h,'" width = "8px" height = "8px"/>')+"<\/span>":'<svg id = "'.concat(t,'" class = "" width = "6px" height = "6px" style="float:right;margin-right:-3px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" enable-background="new 0 0 6 6">')+'<circle cx="3" cy="3" r="3" fill="#C80000"><\/circle><\/svg>':"")+'<span class="rhlined serp"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path class="medal" d="M23 9h-14c-.552 0-1 .448-1 1v3.71c0 .538.288 1.034.756 1.303l4.877 2.778c-1.206.891-1.905 2.43-1.532 4.115.323 1.461 1.501 2.655 2.96 2.987 2.617.596 4.939-1.378 4.939-3.893 0-1.32-.647-2.481-1.633-3.209l4.877-2.779-.002.001c.471-.268.758-.767.758-1.303v-3.71c0-.552-.448-1-1-1zm-12 4.991l-1-.571v-2.42h1v2.991zm5 9.009c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm3-7.866l-2.472 1.537c-.323.201-.733.201-1.056 0l-2.472-1.537v-4.134h6v4.134zm3-1.714l-1 .571v-2.991h1v2.42z"><\/path><path d="M.018 0h32v32h-32v-32z" fill="none"><\/path><circle class="meter" stroke="#000" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle><\/svg><\/span><span class="rhfill serp"><svg id = "serp_medal_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z"><\/path><path d="M.018 0h32v32h-32v-32z" fill="none"><\/path><circle class="meter" stroke="#000" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle><\/svg><\/span><svg xmlns="http://www.w3.org/2000/svg" id = "rh_meter">'+'<circle cx="20" cy="20" r="14" id="rh_animcrcl" class="serp anim" stroke-dasharray="'.concat(this.reportActivityModel.IsMobileClient?"88,88":"0,88",'" transform="rotate(-90,20,20)"><\/circle>')+"<\/svg>");LightLogger&&LightLogger.logInstrumentationV2(null,LightLogger.InstrumentationEventType.Load,"AnimationLoad",!0,{ShowAnimation:u.ShowAnimation,RedDotAnimation:i});var k=u.Balance>0||u.IsRewardUser,l=k?u.Balance.toString():this.reportActivityModel.RewardsHeader,d=_ge("id_rc");d&&l&&(d.innerHTML=l,this.reportActivityModel.AnimateHeader&&k&&(this.reportActivityModel.IsMobileClient?RewardsCreditRefresh.RewardsHeaderAnim(u.PreviousBalance,u.Balance,u.GoalTrackBalance,this.reportActivityModel.RewardsIncrement):sj_evt.bind("identityHeaderShown",function(){return RewardsCreditRefresh.RewardsHeaderAnim(u.PreviousBalance,u.Balance,u.GoalTrackBalance,g.reportActivityModel.RewardsIncrement)},1)));w=_ge("ic_rcep");w&&l&&(w.innerHTML=l)}},n.prototype.updateMobileHeader=function(){var t,n;!this.reportActivityModel.IsMobileClient||this.reportActivityModel.RewardsSessionData.Balance<0||(t=_ge("id_rwds_r"),t&&(t.style.display="inline"),n=_ge("id_rwds_b"),n||(n=_ge("fly_id_rwds_b")),n&&(n.href=this.reportActivityModel.DashboardUrl))},n.prototype.sendReportActivityModelToWidget=function(){var n=this;sj_evt.bind("RewardsWidgetReportActivityReady",function(){return _w.postMessage({action:"rewardsWidgetReportActivityReady",reportActivityModel:n.reportActivityModel},"*")});sj_evt.fire("RewardsWidgetReportActivityReady")},n.prototype.updateDashboardHeader=function(){if(this.reportActivityModel.NeedUpdateRewardsHeaderLink){var n=_ge("id_rh");n&&(n.href=this.reportActivityModel.DashboardUrl,typeof bepns!="undefined"&&bepns.ubc())}},n.prototype.updateRebatesHeader=function(){var n=_ge("id_rbh"),t=_ge("id_rbc"),i;n&&t&&this.reportActivityModel.RewardsSessionData&&this.reportActivityModel.RewardsSessionData.RebatesBalance>0&&(i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),t.innerHTML=i.format(this.reportActivityModel.RewardsSessionData.RebatesBalance),n.style.display=null)},n.prototype.hideRedDot=function(){var n=_ge(t),i=_ge(e);n&&Lib.CssClass.add(n,"rd_hide");i&&Lib.CssClass.add(i,"rd_hide")},n.prototype.updateBalanceMessage=function(){var i,r,u,f,e,o,h=((i=this.reportActivityModel)===null||i===void 0?void 0:i.BalanceMessage)||"",c=((r=this.reportActivityModel)===null||r===void 0?void 0:r.ShowNonMemberUpsellMessage)||!1,t=_ge&&_ge("messageContainer"),s=_ge&&_ge("messageContainerNonMember"),n=_ge&&_ge("pointsContainer");c&&(t||s)&&(((f=(u=this.reportActivityModel)===null||u===void 0?void 0:u.RewardsSessionData)===null||f===void 0?void 0:f.IsRewardUser)||((o=(e=this.reportActivityModel)===null||e===void 0?void 0:e.RewardsSessionData)===null||o===void 0?void 0:o.IsTrialUser)?(h?(t.innerHTML=h,t.style.display="block",n===null||n===void 0?void 0:n.classList.add("hasMessage")):(t.style.display="none",n===null||n===void 0?void 0:n.classList.remove("hasMessage")),s.style.display="none"):(s.style.display="block",n.classList.add("hasMessage"),t.style.display="none"))},n.prototype.getDailyCheckInAnimation=function(n,u,f,e,o){var s='<span class="serp">'.concat(o.ShowAnimation?i?'<img id = "'.concat(t,'" src="').concat(r,'" alt="').concat(e,'" width = "8px" height = "8px" style="float:right;margin-right:-3px;margin-top:-4px" />'):'<svg id = "'.concat(t,'" class = "" width = "6px" height = "6px" style="float:right;margin-right:-3px;margin-top:-1px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 6" enable-background="new 0 0 6 6"><circle cx="3" cy="3" r="3" fill="#C80000"><\/circle><\/svg>'):"");if(n==1&&f){if(u==1||u==2)return s+'<div class="medallionAnimationContainer">\n                    <svg id="serp_medal_svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">\n                    <circle class="dmeter" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle>\n                    <circle class="progress" stroke="#00b7ab" stroke-width="2" stroke-dasharray="'.concat(u==1?"0 88":u==2?"29.32 58.64":"0 88",'" stroke-dashoffset="109" stroke-linecap="round" cx="16" cy="16" r="14" fill="none">\n                    <animate attributeName="stroke-dasharray" from="').concat(u==1?"0 88":u==2?"29.32 58.64":"0 88",'" to="').concat(u==1?"29.32 58.64":u==2?"58.64 29.32":"",'" dur=".5s" fill="freeze" begin=".4s" calcMode="spline" keyTimes="0; 1" keySplines=".5 0 1 .5"/>\n                    <\/circle>\n                    <\/svg>\n                    <svg id="serp_medal_svg12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32" class="overlapWithAbove">\n                    <path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z">\n                    <animate attributeName="fill" from="#174AE4" to="#00b7ab" dur=".2s" begin="0s" fill="freeze"/>\n                    <animate attributeName="fill" from="#00b7ab" to="#174AE4" dur=".2s" begin=".2s" fill="freeze"/>    \n                    <\/path>\n                    <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1; 1.2; 1" dur=".5s" repeatCount="1" />\n                    <\/svg>\n                    <\/div>\n                    <\/span>');if(u==3)return s+'<div class="parentcontainer" >\n                    <div class="firework"><\/div>\n                    <div class="medallionAnimationContainer">\n                    <svg id="serp_medal_svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">\n                    <circle class="dmeter" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle>\n                    <circle class="progress" stroke="#00b7ab" stroke-width="2" stroke-dasharray="58.64 29.32" stroke-dashoffset="109" stroke-linecap="round" cx="16" cy="16" r="14" fill="none">\n                    <animate attributeName="stroke-dasharray" from="58.64 29.32" to="88 0" dur=".5s" fill="freeze" begin=".4s" calcMode="spline" keyTimes="0; 1" keySplines=".5 0 1 .5"/>\n                    <\/circle>\n                    <circle class="meter" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none">\n                    <animate dur="2.5s" attributeName="opacity" from="0" to="0" begin="0s" repeatCount="1" fill="freeze"/>\n                    <animate dur="0.5s" attributeName="opacity" from="0" to="1" begin="2.5s" repeatCount="1" fill="freeze"/> \n                    <\/circle>\n                    <\/svg>\n                    <svg id="serp_medal_svg32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32" class="overlapWithAbove">\n                    <path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z">\n                    <animate attributeName="fill" from="#174AE4" to="#00b7ab" dur=".2s" begin="0s" fill="freeze"/>\n                    <animate attributeName="fill" from="#00b7ab" to="#174AE4" dur=".2s" begin=".2s" fill="freeze"/>    \n                    <animate dur="0.4s" attributeName="opacity" from="1" to="0" begin="0.4s" repeatCount="0" fill="freeze"/>\n                    <animate dur="0.5s" attributeName="opacity" from="0" to="1" begin="2.5s" repeatCount="0" fill="freeze"/>\n                    <\/path>\n                    <animateTransform attributeName="transform" attributeType="XML" type="scale" values="1; 1.2; 1" dur="0.4s" repeatCount="1" />\n                    <\/svg>\n                    <svg width="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="overlapWithAbove2"> \n                    <path d="M37.7778 2.22222C38.3111 2.83951 38.3037 4.1679 37.6296 4.44444L14.1975 27.5309C13.5185 27.9012 12.5691 27.9012 11.9012 27.5309L2.23457 18.1481C1.55556 17.7778 1.54321 16.4198 2.22222 15.7407C2.90123 15.0617 4.23457 15.0617 4.91358 15.4321L13.037 23.7531L35.4321 2.22222C36.1111 1.85185 37.4444 1.85185 37.7778 2.22222Z" stroke="#00b7ab" stroke-width="4" visibility="hidden">\n                    <animate attributeName="visibility" attributeType="XML" from="hidden" to="visible" begin=".4s" dur="0.5s" fill="freeze"/>\n                    <animate dur="0.5s" attributeName="opacity" from="1" to="0" begin="2.5s" repeatCount="0" fill="freeze"/>\n                    <\/path>\n                    <animateTransform attributeName="transform" attributeType="XML" type="skewX" begin="0.4s" from="90" to="0" dur="0.5s" fill="freeze" />\n                    <\/svg>\n                    <\/div>\n                    <\/div>\n                    <\/span>'}else return n!=1||f||(u=u-1),u==3?s+'<div class="medallionAnimationContainer">\n                    <svg id="serp_medal_svg2" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">\n                    <circle stroke="#174AE4" stroke-width="2" cx="16" cy="16" r="14" fill="none"><\/circle>\n                    <\/svg>\n                    <svg id="serp_medal_svg22" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32" class="overlapWithAbove">\n                    <path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z"><\/path>\n                    <\/svg>\n                    <\/div>\n                    <\/span>':s+'<div class="medallionAnimationContainer">\n                    <svg id="serp_medal_svg2" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32">\n                    <circle class="dmeter" stroke-width="2" stroke-miterlimit="10" cx="16" cy="16" r="14" fill="none"><\/circle>\n                    <circle class="progress" stroke="#00b7ab" stroke-width="2" stroke-dasharray="'.concat(u==1?"29.32 58.64":u==2?"58.64 29.32":"0 88",'" stroke-dashoffset="109" stroke-linecap="round" cx="16" cy="16" r="14" fill="none"><\/circle>\n                    <\/svg>\n                    <svg id="serp_medal_svg22" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32" class="overlapWithAbove">\n                    <path class="medal" d="M12 16.006l2.554 1.28c-1.492.581-2.554 2.023-2.554 3.72 0 2.209 1.791 4 4 4s4-1.791 4-4c0-1.696-1.06-3.138-2.551-3.719l2.551-1.281v-7h-8v7zm-4-6.5v4.183c0 .189.106.362.275.447l1.725.87v-6h-1.5c-.276 0-.5.224-.5.5zm15.5-.5h-1.5v6l1.725-.87c.169-.085.275-.258.275-.447v-4.183c0-.276-.224-.5-.5-.5z"><\/path>\n                    <\/svg>\n                    <\/div>\n                    <\/span>')},n}();n.ReportActivity=p})(ModernRewards||(ModernRewards={})),function(){sj_evt&&sj_evt.fire("onRALoad")}()