window.hjSiteSettings = window.hjSiteSettings || {"site_id":278306,"r":0.05742585565476191,"rec_value":0.0,"state_change_listen_mode":"automatic","record":false,"continuous_capture_enabled":false,"recording_capture_keystrokes":false,"anonymize_digits":false,"anonymize_emails":false,"suppress_all":false,"suppress_text":null,"suppress_location":false,"user_attributes_enabled":false,"legal_name":"SendGrid","privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[{"component":"url","match_operation":"simple","pattern":"https://sendgrid.com/marketing/get-a-quote-1/","negate":false}],"feedback_widgets":[],"heatmaps":[{"id":5797478,"created_epoch_time":1587143542,"targeting":[{"component":"url","match_operation":"simple","pattern":"https://sendgrid.com/marketing/get-a-quote-1/","negate":false}],"selector_version":2,"capture_type":"SNAPSHOT_10000"}],"polls":[{"id":505711,"created_epoch_time":1589860172,"skin":"dark","background":"#3468f9","effective_show_branding":true,"position":"right","content":{"version":2,"questions":[{"uuid":"de8aefd3-df0c-4354-b5e8-210b385ee7ea","type":"single-close-ended","text":"Are you interested in adding SMS to complement Email?","required":true,"randomize_answer_order":false,"pin_last_to_bottom":false,"answers":[{"text":"Yes","comments":false},{"text":"No","comments":false}],"nextByAnswer":["question:19f61451-0631-4b4b-a943-6170a3eb14eb","thankYou"],"next":"byAnswer"},{"uuid":"19f61451-0631-4b4b-a943-6170a3eb14eb","type":"single-close-ended","text":"Did you know that SendGrid offers SMS, Video, Voice as part of Twilio?","required":true,"randomize_answer_order":false,"pin_last_to_bottom":false,"answers":[{"text":"Yes","comments":false},{"text":"No","comments":false}],"next":"byOrder"},{"uuid":"0465e0cf-dabe-47a3-a547-c2850e00fbdb","type":"single-open-ended-multiple-line","text":"What use case would you use SMS for?","required":true,"next":"thankYou"}],"thankyou":"Thank you for answering! Check out Twilio SMS: https://www.twilio.com/sms"},"ask_for_consent":false,"language":"en","display_condition":"immediate","display_delay":0,"persist_condition":"response","targeting_percentage":100,"targeting":[{"component":"device","match_operation":"exact","name":null,"negate":false,"pattern":"desktop","rule_type":null},{"component":"url","match_operation":"simple","name":null,"negate":false,"pattern":"https://sendgrid.com/solutions/email-api/","rule_type":null}],"show_legal":false,"uuid":"eb58b806-a994-4fb3-a79d-e8551c848c3b","logo_url":null,"invite":{"title":"Your feedback is important to us!","description":"Tell us what you think about this page by taking our quick Survey.","button":"Yes, I will give feedback","close":"No thanks"},"invite_enabled":false,"button_color":null,"display_type":"popover","enabled_offsite":false}],"integrations":{"optimizely":{"tag_recordings":true}},"features":["feedback.widget_telemetry","feedback.widgetV2","settings.billing_v2","heatmap.continuous_capture","feedback.full_screen_survey","funnels.disable_traffic_log_capture","recordings.page_content_ws","survey.impressions","recordings.filter_new_user"]};

!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=309)}({309:function(e,t){window.hjBootstrap=window.hjBootstrap||function(e,t,n){var o=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),r=new RegExp(o,"i"),a=window.navigator||{userAgent:"unknown"},i=a.userAgent?a.userAgent:"unknown";if(r.test(i))console.warn("Hotjar not launching due to suspicious userAgent:",i);else{var d=function(e,t,n){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(n),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};d(0,0,n);var s,u,l,c,p=window.document,f=p.head||p.getElementsByTagName("head")[0];p.addEventListener&&(hj.scriptDomain=e,(s=p.createElement("script")).async=1,s.src=hj.scriptDomain+t,s.charset="utf-8",f.appendChild(s),c=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],(u=p.createElement("style")).type="text/css",u.styleSheet?u.styleSheet.cssText=c.join(""):u.appendChild(p.createTextNode(c.join(""))),f.appendChild(u),(l=p.createElement("iframe")).style.cssText=c[1],l.name="_hjRemoteVarsFrame",l.title="_hjRemoteVarsFrame",l.id="_hjRemoteVarsFrame",l.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-5e3cec51ed8e99df6977c199d27812d7.html",l.onload=function(){d.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal("varsLoaded")},d.varsJar=l,"interactive"===p.readyState||"complete"===p.readyState||"loaded"===p.readyState?h():p.addEventListener("DOMContentLoaded",h),d.revision="53220b172fde",window.hjBootstrap=d)}function h(){setTimeout(function(){p.body.appendChild(l)},50)}},window.hjBootstrap("https://script.hotjar.com/","modules.d34b9b5fcf97212d2a3d.js","278306")}});
