(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1215:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1217:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},1232:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));n(31),n(32),n(33),n(17),n(27),n(22),n(14),n(15),n(13),n(26);var a=n(8),r=n.n(a),c=n(44),o=n.n(c);n(247),n(188),n(288),n(289);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l=function(e){return e.includes("?")?e.split("?")[1].split("&").reduce((function(e,t){var n=t.split("="),a=o()(n,2),c=a[0],l=a[1];return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,r()({},c,l))}),{}):{}},s=function(e,t){return l(e)[t]}},1239:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n(335),r=n(10),c=function(e,t){return e.loading[t]},o=function(e,t){return e.error[t]},i=function(e,t){return!0===c(e,t)},l=function(e,t){return void 0===c(e,t)},s=function(e){return Object(a.createSelector)(c,o,(function(e,t){return!0===e?r.v.InFlight:!1===e?!1===t?r.v.Complete:r.v.Error:r.v.Ready}))};t.b=s},1250:function(e,t,n){var a=n(2479);e.exports=function(e,t){if(null==e)return{};var n,r,c=a(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},1253:function(e,t,n){"use strict";var a=n(148),r=n(16),c={publishAlert:r.a.addAlert,dismissAlert:r.a.dismissAlert};t.a=function(e){return Object(a.connect)(null,c)(e)}},1254:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(89),r=n.n(a),c=n(147),o=n.n(c),i=n(245),l=n.n(i),s=n(244),u=n.n(s),d=n(246),f=n.n(d),b=n(8),m=n.n(b),p=n(0),h=n.n(p),E=n(41),g=n.n(E),v=n(2384),y=n(2480),O=n.n(y),j=Object(v.b)((function(e){var t=e.children;return h.a.createElement("div",{className:O.a["beta-note"]},t)}),"show_legacy_banner_in_tne"),_=Object(v.a)((function(e){var t=e.children,n=e.beta;return h.a.createElement("div",{className:g()("row",O.a["page-header"],m()({},O.a.beta,n))},t)}),(function(e){var t=e.children;return h.a.createElement("div",{className:g()("row",O.a["page-header"])},t)}),"show_legacy_banner_in_tne"),k=function(e){function t(){return r()(this,t),l()(this,u()(t).apply(this,arguments))}return f()(t,e),o()(t,[{key:"render",value:function(){var e=this.props,t=e.betaNote,n=e.breadcrumb,a=e.children,r=e.icon,c=e.label;return h.a.createElement(p.Fragment,null,h.a.createElement(_,{beta:!!t},h.a.createElement("header",{className:"content-header col-12"},n,h.a.createElement("h1",null,c,r),a)),!!t&&h.a.createElement(j,null,t))}}]),t}(p.Component);t.b=k},1279:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));n(31),n(32),n(33),n(17),n(27),n(22),n(14),n(15),n(13),n(26),n(187);var a=n(8),r=n.n(a),c=(n(334),n(1083),n(96)),o=n(1232),i=n(1645),l=n(167);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.params,r=void 0===a?{}:a,c=n.search,s=void 0===c?{}:c,d=n.state,f=e.match,b=e.location;return{pathname:Object(l.a)(t,u({},f.params,{},r)),search:Object(i.a)(u({},Object(o.b)(b.search),{},s)),state:d}},f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.params,r=void 0===a?{}:a,c=n.search,o=void 0===c?{}:c,i=n.state;e.history.push(d(e,t,{params:r,search:o,state:i}))},b=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.params,r=void 0===a?{}:a,c=n.search,o=void 0===c?{}:c,i=n.state;e.history.replace(d(e,t,{params:r,search:o,state:i}))},m=function(e){var t=e.hasMarketingScope,n=e.hasMarketingAutomationScope;return Object(c.h)(e.location.pathname,Object(l.a)("automations"))?t&&n:t},p=function(e){return e.hasDesignsScope}},1385:function(e,t,n){"use strict";n(64);var a=n(8),r=n.n(a),c=n(0),o=n.n(c),i=n(1095),l=n(1446),s=n(41),u=n.n(s),d=n(68),f=n(78),b=n(420),m=n(2478),p=n.n(m),h=n(523),E=Object(d.c)("common")((function(e){var t=e.t;return o.a.createElement(i.b,{type:"warning","data-role":"alert-exceeded-send-credits",dismissable:!1},o.a.createElement(d.a,{i18nKey:"accountAlerts.exceededSendCredits"},"It's time to upgrade. Your Automations are not sending as you've reached the Free limit of 6,000 emails/mo."," ",o.a.createElement("a",{href:b.a.ACCOUNT_UPGRADE,target:"_blank"},"Learn more")),o.a.createElement(f.b,{type:"primary",small:!0,className:p.a["warning-button-link"]},o.a.createElement(h.a,{href:b.a.MULTI_PRODUCT_BILLING},t("accountAlerts.buttons.upgradeNow"))))})),g=Object(d.c)("common")((function(e){var t=e.accountType,n=e.t,a="free"===t?"danger":"warning";return o.a.createElement(i.b,{type:a,"data-role":"alert-contact-limit",dismissable:!1},"free"===t?o.a.createElement(d.a,{i18nKey:"contactAlerts.freeCustomerContactLimit"},o.a.createElement("strong",null,"You've reached your Contact Limit.")," Upgrade your account to add additional contacts"):o.a.createElement(d.a,{i18nKey:"contactAlerts.paidCustomerContactLimit"},o.a.createElement("strong",null,"You have reached your allocated contact limit and will begin to incur overages.")," ","To view or make changes to your account"),o.a.createElement(f.b,{type:"secondary",small:!0,className:p.a["contact-limit-button-link"]},o.a.createElement(h.a,{href:b.a.MULTI_PRODUCT_BILLING},n("contactAlerts.buttons.viewPlansAndPricing"))))})),v=Object(d.c)("common")((function(e){var t=e.accountType,n=e.t,a="free"===t?"danger":"warning";return o.a.createElement(i.b,{type:a,"data-role":"alert-approaching-contact-limit",dismissable:!1},"free"===t?o.a.createElement(d.a,{i18nKey:"contactAlerts.freeCustomerApproachingContactLimit"},o.a.createElement("strong",null,"You’ve reached 90% of your Contact Limit")," and will incur overages once you have reached your limit."):o.a.createElement(d.a,{i18nKey:"contactAlerts.paidCustomerApproachingContactLimit"},o.a.createElement("strong",null,"You have reached your allocated contact limit and will begin to incur overages.")," ","To view or make changes to your account"),o.a.createElement(f.b,{type:"secondary",small:!0,className:p.a["contact-limit-button-link"]},o.a.createElement(h.a,{href:b.a.MULTI_PRODUCT_BILLING},n("contactAlerts.buttons.viewPlansAndPricing"))))})),y=Object(d.c)("common")((function(e){var t=e.accountType,n=e.t,a="free"===t?"danger":"warning",r="free"===t?b.a.ACCOUNT_UPGRADE:b.a.MULTI_PRODUCT_BILLING;return o.a.createElement(i.b,{type:a,"data-role":"alert-contact-and-credit-limit",dismissable:!1},"free"===t?o.a.createElement(d.a,{i18nKey:"accountAlerts.freeCustomerExceededContactAndSendcreditsLimit"},o.a.createElement("strong",null,"You have reached your send credit limit and contact limit. To upgrade your plan"," ")):o.a.createElement(d.a,{i18nKey:"accountAlerts.paidCustomerExceededContactAndSendcreditsLimit"},o.a.createElement("strong",null,"You have reached your send credit limit and contact limit for the month. To view your plan"," ")),o.a.createElement(f.b,{type:"secondary",small:!0,className:p.a["contact-limit-button-link"]},o.a.createElement(h.a,{href:r},n("contactAlerts.buttons.viewPlansAndPricing"))))})),O=n(1472),j=n(148),_=n(1430),k=function(e){return{accountInfoBanner:Object(_.b)(e)}},w=function(e){return Object(j.connect)(k)(e)},x=n(1643),A=w(Object(x.b)((function(e){var t=e.accountInfoBanner;if(!Object(c.useContext)(O.c).showNav)return null;switch(t){case"exceeded_marketing_send_credits":return o.a.createElement(E,null);case"free_customer_approaching_contact_limit_upgrade":return o.a.createElement(v,{accountType:"free"});case"free_customer_contact_limit_upgrade":return o.a.createElement(g,{accountType:"free"});case"paid_customer_approaching_contact_limit_upgrade":return o.a.createElement(v,{accountType:"paid"});case"paid_customer_contact_limit_upgrade":return o.a.createElement(g,{accountType:"paid"});case"free_customer_exceeded_contact_and_send_credits_limit":return o.a.createElement(y,{accountType:"free"});case"paid_customer_exceeded_contact_and_send_credits_limit":return o.a.createElement(y,{accountType:"paid"});case"none":default:return null}}))),C=Object(c.createContext)({dismissAlert:function(){}}),S=(C.Consumer,C.Provider),N=(n(27),n(14),n(15),n(13),n(124),n(1133),n(335)),T=Object(N.createSelector)([function(e){return e.alerts}],(function(e){return Array.from(e.values())})),P=function(e,t){return{alerts:T(e).filter((function(e){return e.alertContainerId===t.id}))}},I=function(e){return Object(j.connect)(P)(e)},L=n(1253),z=n(207),B=n.n(z),D=function(e){var t=function(t){var n=e.onCloseAlert,a=t.message,r=function(){n&&n(),e.dismissAlert(a)};return o.a.createElement(l.CSSTransition,{key:t.type,timeout:500,classNames:"slide"},o.a.createElement(i.b,{"data-role":"alert-".concat(t.type),type:t.type,onClick:r},o.a.createElement(S,{value:{dismissAlert:r}},t.message)))},n=e.id,a=e.persistent,c=e.showAccountBanners,s=e.showNav,d=e.notificationClassName;return o.a.createElement("section",{className:u()(B.a.alerts,r()({},B.a["nav-hidden"],!s)),id:n},o.a.createElement("div",{className:B.a["persistent-alerts"]},c&&o.a.createElement("div",{className:B.a.notification},o.a.createElement(A,null)),a&&o.a.createElement(l.TransitionGroup,null,e.alerts.map((function(e){return o.a.createElement("div",{className:B.a.notification},t(e))})))),o.a.createElement("div",{className:B.a["non-persistent-alerts"]},o.a.createElement("div",{className:u()(B.a.notification,d)},!a&&o.a.createElement(l.TransitionGroup,null,e.alerts.map(t)))))};D.defaultProps={showAccountBanners:!1};t.a=I(Object(L.a)(D))},1418:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=Object(a.createContext)({scrollContainer:null}),c=r.Provider;r.Consumer;t.b=r},1430:function(e,t,n){"use strict";n(731);var a=n(335),r=n(527),c=n.n(r),o=n(10);n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"a",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"j",(function(){return E})),n.d(t,"i",(function(){return g})),n.d(t,"f",(function(){return v})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return O})),n.d(t,"k",(function(){return j})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return k}));var i=function(e){return e.scopes},l=function(e){return e.loading["user.scopes.fetch"]},s=function(e){return e.entitlements},u=function(e){return e.pricing},d=function(e){return e.counts},f=function(e){return e.user&&e.user.email},b=function(e){return e.userTimezone},m=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"billing.create")})),p=Object(a.createSelector)([s],(function(e){return e.mc_tier})),h=Object(a.createSelector)([s],(function(e){return e.ei_tier})),E=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"marketing.read")})),g=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"marketing.automation.read")})),v=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"design_library.read")})),y=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"email_testing.read")})),O=Object(a.createSelector)([i,l],(function(e,t){return!0===t||void 0===t||c()(e,"email_testing.write")})),j=Object(a.createSelector)([function(e){return e.featureToggles}],(function(e){return e.some((function(e){return"mc"===e.appName&&"sms"===e.featureName}))})),_=Object(a.createSelector)([s,u,d],(function(e,t,n){var a=e.mc_tier,r=e.mc_contacts_cap_monthly,c=n.contacts.billable_count,i=t.tiers,l=a===o.W.free?r:i[0].size;return{contactLimit:l,remainingContactCount:l-c,isOverContactLimit:c>=l,billable_count:c,mc_tier:a}})),k=Object(a.createSelector)([function(e){return e.user},function(e){return e.sendCredits},s,u,d],(function(e,t,n,a,r){var c=t.isHardLimit,o=t.remain;if(!e)return"none";var i=e.userPackage,l=n.mc_tier,s=n.mc_contacts_cap_monthly,u=a.tiers,d=r.contacts.billable_count,f=function(e,t,n,a,r,c){var o;return a&&"free"===a?n>=r&&e&&t<=0&&(o="free_customer_exceeded_contact_and_send_credits_limit"):!a||"basic"!==a&&"advanced"!==a||c[0].size&&n>=c[0].size&&e&&t<=0&&(o="paid_customer_exceeded_contact_and_send_credits_limit"),o}(c,o,d,l,s,u);if(f)return f;if(c&&o<=0)return"exceeded_marketing_send_credits";if(l&&"free"===l){if(d>=s)return"free_customer_contact_limit_upgrade";if(d>=.9*s)return"free_customer_approaching_contact_limit_upgrade"}if(l&&("basic"===l||"advanced"===l)){if(u[0].size&&d>=u[0].size)return"paid_customer_contact_limit_upgrade";if(u[0].size&&d>=.9*u[0].size)return"paid_customer_approaching_contact_limit_upgrade"}return i&&i.isSignupToSend,"none"}))},1472:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return y}));var a=n(1217),r=n.n(a),c=n(89),o=n.n(c),i=n(147),l=n.n(i),s=n(245),u=n.n(s),d=n(244),f=n.n(d),b=n(246),m=n.n(b),p=n(0),h=n.n(p),E=Object(p.createContext)({showNav:!0,setShowNav:function(e){}}),g=E.Provider,v=E.Consumer,y=function(e){return function(t){function n(){return o()(this,n),u()(this,f()(n).apply(this,arguments))}return m()(n,t),l()(n,[{key:"render",value:function(){var t=this;return h.a.createElement(v,null,(function(n){var a=n.showNav,c=n.setShowNav;return h.a.createElement(e,r()({},t.props,{showNav:a,setShowNav:c}))}))}}]),n}(p.Component)};t.c=E},1643:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var a=n(89),r=n.n(a),c=n(147),o=n.n(c),i=n(245),l=n.n(i),s=n(244),u=n.n(s),d=n(246),f=n.n(d),b=n(0),m=n.n(b),p=n(148),h=n(136),E=n(10),g=n(1239),v=n(524),y=Object(g.b)("all.user.fetch"),O=function(e){return{userLoading:y(e,"all.user.fetch")}},j={fetchAllUserInfo:h.b.fetchAllUserInfoMetered},_=function(e){return function(t){function n(){return r()(this,n),l()(this,u()(n).apply(this,arguments))}return f()(n,t),o()(n,[{key:"componentDidMount",value:function(){this.props.userLoading===E.v.Ready&&this.props.fetchAllUserInfo()}},{key:"render",value:function(){return m.a.createElement(e,this.props)}}]),n}(m.a.Component)},k=function(e){return Object(p.connect)(O,j)(_((t=e,function(e){function n(){return r()(this,n),l()(this,u()(n).apply(this,arguments))}return f()(n,e),o()(n,[{key:"render",value:function(){var e=this.props.userLoading;return e===E.v.InFlight||e===E.v.Ready?m.a.createElement(v.a,null):m.a.createElement(t,this.props)}}]),n}(m.a.Component))));var t};t.b=function(e){return Object(p.connect)(O,j)(_(e))}},1644:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(89),r=n.n(a),c=n(147),o=n.n(c),i=n(245),l=n.n(i),s=n(244),u=n.n(s),d=n(246),f=n.n(d),b=n(0),m=n.n(b),p=n(148),h=n(1239),E=n(10),g=n(136),v=n(1430),y=n(524),O=Object(h.b)("user.scopes.fetch"),j=Object(h.b)("user.featureToggles.fetch"),_=function(e){return{requestMarketingAccess:function(){e(g.b.requestAccess("Marketing"))}}},k=function(e,t){return{featureTogglesLoading:j(e,"user.featureToggles.fetch"),scopesLoading:O(e,"user.scopes.fetch"),user:e.user,hasMarketingScope:Object(v.j)(e),hasMarketingAutomationScope:Object(v.i)(e),canUpgrade:Object(v.a)(e),hasDesignsScope:Object(v.f)(e),hasEmailTestingReadScope:Object(v.g)(e),hasEmailTestingWriteScope:Object(v.h)(e)}},w=function(e){return Object(p.connect)(k,_)((t=e,function(e){function n(){return r()(this,n),l()(this,u()(n).apply(this,arguments))}return f()(n,e),o()(n,[{key:"render",value:function(){var e=this.props.scopesLoading;return e===E.v.InFlight||e===E.v.Ready?m.a.createElement(y.a,null):m.a.createElement(t,this.props)}}]),n}(m.a.Component)));var t};t.b=function(e){return Object(p.connect)(k,_)(e)}},1645:function(e,t,n){"use strict";n(14),n(15),n(13),n(26),n(247);t.a=function(e){return Object.keys(e).reduce((function(t,n){if(!e[n])return t;var a=t.length?"&":"?";return"".concat(t).concat(a).concat(n,"=").concat(encodeURIComponent(e[n]))}),"")}},2252:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(148),r=n(1430),c=function(e){return{hasDesignsScope:Object(r.f)(e),hasMarketingScope:Object(r.j)(e),hasMarketingAutomationScope:Object(r.i)(e),hasSMSFeatureToggle:Object(r.k)(e)}},o=function(e){return Object(a.connect)(c)(e)};t.b=o},2253:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return _}));var a=n(89),r=n.n(a),c=n(147),o=n.n(c),i=n(245),l=n.n(i),s=n(244),u=n.n(s),d=n(246),f=n.n(d),b=n(0),m=n.n(b),p=n(148),h=n(1239),E=n(1430),g=n(10),v=n(524),y=Object(h.b)("all.user.fetch"),O=function(e){return{packageEntitlements:{mc:Object(E.e)(e),ei:Object(E.d)(e)},loading:y(e,"all.user.fetch")}},j=function(e){return Object(p.connect)(O)(e)},_=function(e){return Object(p.connect)(O)((t=e,function(e){function n(){return r()(this,n),l()(this,u()(n).apply(this,arguments))}return f()(n,e),o()(n,[{key:"render",value:function(){var e=this.props.loading;return e===g.v.InFlight||e===g.v.Ready?m.a.createElement(v.a,null):m.a.createElement(t,this.props)}}]),n}(m.a.Component)));var t}},2384:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return g}));n(724);var a=n(89),r=n.n(a),c=n(147),o=n.n(c),i=n(245),l=n.n(i),s=n(244),u=n.n(s),d=n(246),f=n.n(d),b=n(0),m=n.n(b),p=n(148),h=function(e){return{featureToggles:e.featureToggles}},E=function(e,t,n){var a=function(a){function c(){return r()(this,c),l()(this,u()(c).apply(this,arguments))}return f()(c,a),o()(c,[{key:"render",value:function(){return this.props.featureToggles.find((function(e){return e.featureName===n}))?m.a.createElement(e,this.props):m.a.createElement(t,this.props)}}]),c}(b.Component);return v(a)},g=function(e,t){return E(e,(function(){return null}),t)},v=function(e){return Object(p.connect)(h)(e)}},2385:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(68),o=n(1134),i=n(523),l=n(420);t.a=Object(c.c)("automations")((function(e){var t=e.t,n=e.isBasic;return void 0!==n&&n?r.a.createElement(o.b,{icon:"help",header:t("indexNeedHelp")},r.a.createElement(c.a,{i18nKey:"indexEmptyHelpBasic"},r.a.createElement(i.a,{href:l.a.AUTOMATIONS_GETTING_STARTED},"Learn More "),"about Automation.")):r.a.createElement(o.b,{icon:"help",header:t("indexNeedHelp")},r.a.createElement(c.a,{i18nKey:"indexEmptyHelp"},"Learn more about"," ",r.a.createElement(i.a,{href:l.a.AUTOMATIONS_GETTING_STARTED},"creating an automation"),"."))}))},2437:function(e,t,n){"use strict";var a=n(1250),r=n.n(a),c=n(0),o=n.n(c),i=n(96),l=n(68),s=n(340),u=n(78),d=(n(1107),n(1644)),f=Object(d.a)(Object(l.c)("errorPages")((function(e){var t=e.t,n=e.requestMarketingAccess,a=e.canUpgrade;return o.a.createElement("div",{"data-role":"unauthorized"},a?o.a.createElement(s.a,{centered:!0,icon:"locked",iconSize:40},o.a.createElement("h1",null,t("noAccessHeader"))):o.a.createElement(s.a,{centered:!0,icon:"locked",iconSize:40},o.a.createElement("h1",null,t("noAccessHeader")),o.a.createElement("p",null,t("noAccessDescription")),o.a.createElement(u.a,{onClick:n,type:"secondary"},t("noAccessLink"))))}))),b=n(2252);t.a=Object(b.b)((function(e){var t=e.component,n=r()(e,["component"]),a=n.accessCheck,c=n.fallbackComponent,l=n.path;return o.a.createElement(i.d,{path:l,render:function(e){return a(n)?o.a.createElement(t,e):c?o.a.createElement(c,e):o.a.createElement(f,null)}})}))},2473:function(e,t,n){"use strict";var a=n(1215);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=a(n(2474));e.exports=t.default},2474:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},2475:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}},2478:function(e,t,n){e.exports={"font-path":'"../fonts"',"border-radius":"2px","scale-base":"12px","scale-base-up-01":"13px","scale-base-up-02":"15px","scale-base-up-03":"18px","scale-base-up-04":"20px","scale-base-up-05":"27px","scale-base-up-06":"30px","scale-base-up-07":"40px","scale-base-up-08":"45px","scale-base-up-09":"60px","scale-base-up-10":"90px","scale-base-down-01":"9px","scale-base-down-02":"6px","scale-base-down-03":"3px","sg-blue":"#1a82e2",slate:"#294661","sg-blue-80":"#489be8","sg-blue-60":"#76b4ee","sg-blue-40":"#a3cdf3","sg-blue-20":"#d1e6f9","sg-blue-10":"#e8f2fc","sg-blue-05":"#f3f9fd","sg-blue-02":"#fbfdff","slate-80":"#546b81","slate-60":"#7f90a0","slate-40":"#a9b5c0","slate-20":"#d4dadf","slate-10":"#e9ecef","slate-05":"#f4f6f7","slate-02":"#fbfbfc","logo-accent-light":"#99e1f4","logo-accent-medium":"#00b3e3","logo-accent-dark":"#009dd9","ron-burgundy":"#b71c1c","burnt-orange":"#ff5722",carrot:"#f90",mango:"#fdd835",mantis:"#18c96e",spruce:"#4cb04f","grass-stain":"#8ac24a",lime:"#cbdb39",cobalt:"#303f9f",bluebird:"#2196f3",seafoam:"#00bcd4",caribbean:"#00e5ff",crown:"#7b1fa2",screample:"#7c4dff",sangria:"#880e4f",lavender:"#dea7e8","wild-strawberry":"#ff4081",steel:"#9e9e9e",white:"#fff",black:"#000","color-highlighter":"rgba(253, 216, 53, 0.6)","sg-blue-dark":"#71ade4","slate-40-dark":"#9aa6b1","ron-burgundy-dark":"#ff5c5c","burnt-orange-dark":"#e87a5a","carrot-dark":"#e8a644","mango-dark":"#e3cc64","light-gray-dark":"#7c8b98","steel-dark":"#b9b9b9","caribbean-dark":"#00cee6","color-highlighter-dark":"#3b4958","active-line-dark":"#1f2b39","copy-button-dark":"#284462","alert-success":"#f1f7e9","alert-success-text":"#2e6b30","alert-warning":"#fefae6","alert-warning-text":"#8c6c15","alert-danger":"#f4dddd","alert-danger-text":"#b71c1c","alert-verification":"#18c96e","alert-trial":"#294661","btn-primary-bg":"#489be8","btn-primary-bg-hover":"#1a82e2","btn-primary-border":"#1a82e2","btn-primary-color":"#fff","btn-primary-badge-bg":"#fff","btn-primary-badge-color":"#1a82e2","btn-secondary-bg":"#fff","btn-secondary-bg-hover":"#e8f2fc","btn-secondary-border":"#489be8","btn-secondary-color":"#1a82e2","btn-secondary-badge-bg":"#1a82e2","btn-secondary-badge-color":"#fff","btn-danger-bg":"rgba(183, 28, 28, 0.8)","btn-danger-bg-hover":"#b71c1c","btn-danger-border":"#b71c1c","btn-danger-color":"#fff","btn-danger-badge-bg":"#fff","btn-danger-badge-color":"#b71c1c","btn-dark-bg":"transparent","btn-dark-bg-hover":"rgba(255, 255, 255, 0.1)","btn-dark-border":"rgba(255, 255, 255, 0.6)","btn-dark-color":"#fff","btn-dark-badge-bg":"#fff","btn-dark-badge-color":"#294661","btn-disabled-bg":"#9e9e9e","btn-disabled-border":"#9e9e9e","btn-disabled-color":"#fff","btn-disabled-secondary-bg":"#fff","btn-disabled-secondary-border":"#9e9e9e","btn-disabled-secondary-color":"#9e9e9e","btn-gear-color":"#7f90a0","btn-gear-primary-color":"#fff","btn-group-bg":"#fff","btn-group-bg-hover":"rgba(26, 130, 226, 0.1)","btn-group-bg-active":"#489be8","btn-group-border":"rgba(26, 130, 226, 0.8)","btn-group-border-active":"#1a82e2","btn-group-color":"#1a82e2","btn-group-color-active":"#fff","btn-selectable-border":"#d4dadf","btn-selectable-border-hover":"#a3cdf3","btn-selectable-border-active":"#1a82e2","btn-selectable-color":"#546b81","center-modal-bg":"#fff","center-modal-width":"600px","center-modal-position":"-300px","dropzone-bg":"#fbfbfc","dropzone-border":"#d4dadf","dropzone-bg-active":"#f4f6f7","dropzone-border-active":"#7f90a0","dropzone-hovered-bg":"#e7f9f0","dropzone-hovered-border":"#18c96e","segment-term-max-width":"768px","icon-ab-testing":'"\\E963"',"icon-ad-campaign":'"\\E962"',"icon-airplane-fill":'"\\E912"',"icon-airplane":'"\\E90B"',"icon-align-center":'"\\E927"',"icon-align-left":'"\\E928"',"icon-align-right":'"\\E929"',"icon-analytics":'"\\E915"',"icon-automation":'"\\E939"',"icon-briefcase":'"\\E95D"',"icon-builder":'"\\E914"',"icon-button":'"\\E920"',"icon-calendar":'"\\E917"',"icon-caret":'"\\E900"',"icon-chat":'"\\E95B"',"icon-check-circle":'"\\E907"',"icon-check-shield":'"\\E93F"',"icon-check-thin":'"\\E938"',"icon-check":'"\\E905"',"icon-clean-ui":'"\\E916"',"icon-clear-formatting":'"\\E956"',"icon-click":'"\\E93B"',"icon-clock":'"\\E90D"',"icon-code":'"\\E919"',"icon-columns":'"\\E923"',"icon-connection":'"\\E961"',"icon-contacts-alt":'"\\E92C"',"icon-contacts":'"\\E913"',"icon-copy":'"\\E902"',"icon-create":'"\\E901"',"icon-csv":'"\\E92A"',"icon-desktop-view":'"\\E627"',"icon-divider":'"\\E91A"',"icon-download":'"\\E93E"',"icon-drag":'"\\E91B"',"icon-dual-flags":'"\\E95C"',"icon-editor-code":'"\\E934"',"icon-editor-design":'"\\E935"',"icon-editor-old":'"\\E933"',"icon-ellipsis-vertical":'"\\E93A"',"icon-ellipsis":'"\\E90E"',"icon-export":'"\\E931"',"icon-filter":'"\\E955"',"icon-forms":'"\\E94F"',"icon-frequency-optimization":'"\\E959"',"icon-gear":'"\\E608"',"icon-hash":'"\\E957"',"icon-help":'"\\E932"',"icon-image-text":'"\\E922"',"icon-image":'"\\E91E"',"icon-images":'"\\E924"',"icon-info-circle":'"\\E903"',"icon-key":'"\\E918"',"icon-list":'"\\E92B"',"icon-locked":'"\\E91D"',"icon-mail-multi":'"\\E954"',"icon-mail-search":'"\\E92D"',"icon-mail":'"\\E61D"',"icon-mobile-view":'"\\E61C"',"icon-pencil":'"\\E624"',"icon-people":'"\\E601"',"icon-pie-chart":'"\\E606"',"icon-plus":'"\\E617"',"icon-push-notifications":'"\\E958"',"icon-recipient-cpm":'"\\E95F"',"icon-reload":'"\\E926"',"icon-save-draft":'"\\E911"',"icon-search":'"\\E906"',"icon-segment":'"\\E609"',"icon-send-optimization":'"\\E960"',"icon-sequence-optimization":'"\\E95E"',"icon-settings":'"\\E95A"',"icon-social":'"\\E925"',"icon-sort-asc":'"\\E910"',"icon-sort-desc":'"\\E90F"',"icon-spacer":'"\\E91F"',"icon-status-caution":'"\\E92F"',"icon-status-negative":'"\\E930"',"icon-status-positive":'"\\E92E"',"icon-teammate":'"\\E90C"',"icon-test-data":'"\\E937"',"icon-text-only":'"\\E603"',"icon-text":'"\\E921"',"icon-trash":'"\\E62B"',"icon-unlocked":'"\\E91C"',"icon-unsubscribe":'"\\E936"',"icon-user-security":'"\\E90A"',"icon-view":'"\\E600"',"icon-warning-triangle":'"\\E904"',"icon-warning":'"\\E909"',"icon-x-legacy":'"\\E62E"',"icon-x":'"\\E908"',"loader-dark-light":"rgba(255, 255, 255, 0.35)","loader-dark-medium":"rgba(255, 255, 255, 0.75)","loader-dark-medium-solid":"rgba(255, 255, 255, 0.9)","loader-dark-solid":"#fff","modal-bg":"rgba(0, 0, 0, 0.5)","modal-width":"525px","modal-height":"665px","modal-footer-height":"71px","modal-body-height":"594px","modal-z-index":"20000","side-modal-shadow":"-2px 0 6px rgba(41, 70, 97, 0.1)","select-disabled-color":"rgba(158, 158, 158, 0.4)","select2-disabled-border":"rgba(158, 158, 158, 0.4)","select2-disabled-placeholder":"rgba(158, 158, 158, 0.4)","select2-disabled-arrow":"rgba(158, 158, 158, 0.4)","switch-background-z-index":"10","switch-selector-z-index":"11","switch-option-z-index":"12","stats-delivered":"#8ac24a","stats-opens":"#303f9f","stats-unique-opens":"#2196f3","stats-clicks":"#7b1fa2","stats-unique-clicks":"#7c4dff","stats-unsubscribes":"#880e4f","stats-spam-reports":"#b71c1c","compare-border-color":"#e9ecef","text-input-disabled-border":"rgba(158, 158, 158, 0.4)","text-input-disabled-color":"rgba(158, 158, 158, 0.4)","text-input-search-title-bg":"rgba(26, 130, 226, 0.1)","text-area-disabled-border":"rgba(158, 158, 158, 0.4)","text-area-disabled-color":"rgba(158, 158, 158, 0.4)","tooltip-bg":"#294661","tooltip-font-size":"12px","tooltip-line-height":"18px","tooltip-arrow-height":"6px","dropdown-menu-z-index":"1000","spotlight-circle-z-index":"10000","spotlight-tooltip-z-index":"10010","info-popup-z-index":"19000","secondary-button-link":"secondary-button-link_5aOTQ","passive-button-link":"passive-button-link_3UVeC","warning-button-link":"warning-button-link_h40wd","contact-limit-button-link":"contact-limit-button-link_3MmNC",verified:"verified__GzPm","expired-passive":"expired-passive_3lqXa"}},2479:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},2480:function(e,t,n){e.exports={beta:"beta_2HE9G","page-header":"page-header_2Knn8","beta-note":"beta-note_3J9gT"}},2481:function(e,t,n){e.exports={"mc-hide-nav":"mc-hide-nav_1Mnp6",container:"container_2BeCp","nav-hidden":"nav-hidden_2Vh-L",main:"main_1Wl2P","pushdown-alerts":"pushdown-alerts_pk7W_"}},2749:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),c=(n(17),n(89)),o=n.n(c),i=n(147),l=n.n(i),s=n(245),u=n.n(s),d=n(244),f=n.n(d),b=n(246),m=n.n(b),p=n(0),h=n.n(p),E=n(96),g=n(383),v=n(41),y=n.n(v),O=n(138),j=n(1385),_=Object(p.createContext)({showAccountBanners:!1,setShowAccountBanners:function(e){}}),k=function(e){return function(t){var n=Object(p.useContext)(_).setShowAccountBanners;return Object(p.useEffect)((function(){n(!0)}),[]),h.a.createElement(e,t)}},w=function(e){return function(t){var n=Object(p.useContext)(_).setShowAccountBanners;return Object(p.useEffect)((function(){n(!1)}),[]),h.a.createElement(e,t)}},x=(_.Consumer,_.Provider),A=n(529),C=n(2437),S=n(525),N=n(524),T=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(28)]).then(n.bind(null,2742))})),P=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(T,null))},I=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(34)]).then(n.bind(null,2747))})),L=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(I,null))},z=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(7),n.e(47)]).then(n.bind(null,2762))})),B=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(z,null))},D=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(31)]).then(n.bind(null,2752))})),M=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(D,null))},U=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(24),n.e(45)]).then(n.bind(null,2761))})),G=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(U,null))},R=Object(S.a)((function(){return n.e(55).then(n.bind(null,2722))})),F=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(R,null))},K=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(36)]).then(n.bind(null,2760))})),q=Object(S.a)((function(){return n.e(53).then(n.bind(null,2765))})),H=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(K,null))},Y=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(33)]).then(n.bind(null,2744))})),V=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(Y,null))},W=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(32)]).then(n.bind(null,2745))})),J=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(W,null))},$=Object(S.a)((function(){return n.e(56).then(n.bind(null,2723))})),Q=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement($,null))},X=Object(S.a)((function(){return n.e(57).then(n.bind(null,2724))})),Z=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(X,null))},ee=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(39)]).then(n.bind(null,2725))})),te=function(e){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(ee,e))},ne=Object(S.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(26)]).then(n.bind(null,2746))})),ae=function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(ne,null))},re=n(1279),ce=n(2253),oe=n(68),ie=n(78),le=n(248),se=n(1093),ue=n(1254),de=n(420),fe=n(523),be=n(2385),me=Object(oe.c)("automations")((function(e){var t=e.t,n=e.packageEntitlements,a=n?n.mc:"";return h.a.createElement("div",{"data-role":"automations-upsell"},h.a.createElement(ue.b,{label:t("indexHeader")}),h.a.createElement(se.a,{icon:"locked",header:t("featureGate.title")},h.a.createElement("p",null,t("featureGate.body")),"basic"===a?h.a.createElement("iframe",{style:{marginTop:20},src:de.a.AUTOMATION_VIDEO,width:"640",height:"360",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0}):null,h.a.createElement(le.b,null,"basic"===a?null:h.a.createElement(ie.b,{type:"secondary"},h.a.createElement(fe.a,{href:de.a.AUTOMATION},t("featureGate.learnMore"))),h.a.createElement(ie.b,{type:"primary"},h.a.createElement(fe.a,{href:de.a.MULTI_PRODUCT_BILLING},t("featureGate.upgrade"))))),h.a.createElement(be.a,{isBasic:"basic"===a}))})),pe=n(1643),he=Object(ce.a)(Object(pe.a)(me)),Ee=k(Object(pe.a)(P)),ge=k(Object(pe.a)(V)),ve=k(Object(pe.a)(L)),ye=k(Object(pe.a)(ae)),Oe=k(Object(pe.a)(B)),je=k(Object(pe.a)(G)),_e=k(Object(pe.a)(H)),ke=k(Object(pe.a)(te)),we=w(Object(pe.a)(M)),xe=w(Object(pe.a)(J)),Ae=h.a.createElement(p.Fragment,null,h.a.createElement(C.a,{accessCheck:re.b,routeId:"automations",path:"/automations",component:Ee,fallbackComponent:he}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"single-sends",path:"/single-sends",component:ge}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"contacts",path:"/contacts",component:ve}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"forms",path:"/forms/signup",component:ye}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"custom-fields",path:"/custom-fields",component:Oe}),h.a.createElement(C.a,{accessCheck:re.a,routeId:"design-library",path:"/design-library",component:we}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"notifications",path:"/notifications",component:je}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"senders",path:"/senders",component:_e}),h.a.createElement(E.d,{routeId:"dynamicTemplates",path:"/dynamic-templates",component:xe}),h.a.createElement(C.a,{accessCheck:re.b,routeId:"unsubscribeGroups",path:"/unsubscribe-groups",component:ke}),h.a.createElement(E.d,{routeId:"overview",path:"/overview",component:F}),h.a.createElement(E.d,{routeId:"tour",path:"/tour",component:Q}),h.a.createElement(E.d,{routeId:"welcome",path:"/welcome",component:Z}),h.a.createElement(E.d,{routeId:"sender-verified",path:"/sender-verified",component:function(){return h.a.createElement(p.Suspense,{fallback:h.a.createElement(N.a,null)},h.a.createElement(q,null))}}));Ae.props.children.forEach((function(e){var t=e.props,n=t.routeId,a=t.path;return A.a.add(n,a)}));var Ce=n(167),Se=n(340),Ne=n(320),Te=function(e){function t(e){var n;return o()(this,t),(n=u()(this,f()(t).call(this,e))).state={hasError:!1},Ne.a.init(),n.state={hasError:!1},e.history.listen((function(){n.state.hasError&&n.setState({hasError:!1})})),n}return m()(t,e),l()(t,[{key:"componentDidCatch",value:function(e,t){Ne.a.logError(e,t,{severity:"fatal"}),this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.props.t;return this.state.hasError?h.a.createElement(Se.a,{centered:!0,icon:"warning",iconSize:40},h.a.createElement("h1",null,e("headerException")),h.a.createElement("p",null,e("bodyException"))):this.props.children}}]),t}(p.Component),Pe=Object(oe.c)("errorPages")(Object(E.j)(Te)),Ie=n(186),Le=function(e){function t(){return o()(this,t),u()(this,f()(t).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props.t;return h.a.createElement(Se.a,{centered:!0,icon:"warning",iconSize:40},h.a.createElement("h1",null,e("header404")),h.a.createElement("p",null,e("body404")),h.a.createElement(ie.b,{type:"secondary"},h.a.createElement(Ie.a,{to:Object(Ce.a)("automations")},e("backToAutomations"))))}}]),t}(p.Component),ze=Object(oe.c)("errorPages")(Le),Be=n(1472),De=n(1418),Me=n(2481),Ue=n.n(Me),Ge=function(e){function t(){var e,n;o()(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=u()(this,(e=f()(t)).call.apply(e,[this].concat(r)))).state={scrollContainer:window,showNav:!0,setShowNav:function(e){n.setState({showNav:e}),Object(O.a)().then((function(){Array.prototype.slice.call(document.querySelectorAll("[data-tiara-generated]")).forEach((function(e){n.state.showNav?(e.classList.remove(Ue.a["mc-hide-nav"]),e.style.setProperty("display","")):e.classList.add(Ue.a["mc-hide-nav"])}))}))},setShowAccountBanners:function(e){return n.setState({showAccountBanners:e})},showAccountBanners:!1},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this;Object(O.b)(),Object(O.a)().then((function(){Object(O.d)(e.props.history),g.a.page()}))}},{key:"render",value:function(){var e=this.state,t=e.showNav,n=e.setShowNav,a=e.showAccountBanners,c=e.setShowAccountBanners;return h.a.createElement(h.a.Fragment,null,h.a.createElement(Be.a,{value:{showNav:t,setShowNav:n}},h.a.createElement("div",null,h.a.createElement("div",{className:Ue.a.main},h.a.createElement(j.a,{id:"root-alerts-container",showAccountBanners:a,showNav:t}),h.a.createElement("div",{id:"pushdown-alerts",className:Ue.a["pushdown-alerts"]}),h.a.createElement("div",{className:y()("container",Ue.a.container,r()({},Ue.a["nav-hidden"],!t))},h.a.createElement(Pe,null,h.a.createElement(De.a,{value:{scrollContainer:this.state.scrollContainer}},h.a.createElement(x,{value:{showAccountBanners:a,setShowAccountBanners:c}},h.a.createElement(E.f,null,h.a.createElement(E.c,{exact:!0,from:"/",to:Object(Ce.a)("automations")}),Ae.props.children,h.a.createElement(E.d,{component:ze}))))))))))}}]),t}(p.Component);t.default=Object(E.j)(Ge)},41:function(e,t,n){var a;
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var c=typeof a;if("string"===c||"number"===c)e.push(a);else if(Array.isArray(a))e.push(r.apply(null,a));else if("object"===c)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?e.exports=r:void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()}}]);