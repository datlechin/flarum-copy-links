(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t)};(()=>{"use strict";const t=flarum.core.compat["forum/app"];var n=o.n(t);const e=flarum.core.compat["common/extend"],r=flarum.core.compat["forum/utils/DiscussionControls"];var a=o.n(r);const c=flarum.core.compat["forum/utils/PostControls"];var s=o.n(c);const i=flarum.core.compat["forum/utils/UserControls"];var u=o.n(i);const l=flarum.core.compat["common/components/Button"];var d=o.n(l);n().initializers.add("datlechin/flarum-copy-links",(function(){var o=function(o){var t=window.location.origin+o;return m(d(),{icon:"fas fa-copy",onclick:function(){var o;o=t,navigator.clipboard?navigator.clipboard.writeText(o):function(o){var t=document.createElement("textarea");t.value=o,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}(o),n().alerts.show({type:"success"},n().translator.trans("datlechin-copy-links.forum.link_copied_message"))}},n().translator.trans("datlechin-copy-links.forum.copy_link_button"))};(0,e.extend)(a(),"userControls",(function(t,e){t.add("copyLink",o(n().route.discussion(e)))})),(0,e.extend)(s(),"userControls",(function(t,e){t.add("copyLink",o(n().route.post(e)))})),(0,e.extend)(u(),"userControls",(function(t,e){t.add("copyLink",o(n().route.user(e)))}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map