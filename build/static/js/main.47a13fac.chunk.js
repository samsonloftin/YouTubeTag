(this.webpackJsonpyoutubetag=this.webpackJsonpyoutubetag||[]).push([[0],{23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(11),n=a.n(i),o=a(4),l=a.n(o),r=a(7),c=a(12),u=a(13),d=a(17),b=a(16),m={youTube:{id:"Post-TimeSkip Sam",hashtag:"#MoreSamsonReactions",followTitle:"Follow"},youTubeSocial:[{id:"Anime Reactions",url:"https://ANIMEREACTIONS.saml.me"},{id:"Main Channel (Gaming/Anime)",url:"https://YOUTUBE.saml.me"},{id:"Twitter",url:"https://TWITTER.saml.me"},{id:"Instagram",url:"https://INSTAGRAM.saml.me"},{id:"Twitch",url:"https://TWITCH.saml.me"}]},p=(a(23),a(0)),j=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).titlesTags=function(e,t,a,s){return e+", "+e+" reaction, "+e+t+a+", "+e+t+a+" reaction, "+e+t+" "+s+" reaction, "+e+t+", "+e+t+" reaction, "},s.reactionTags=function(e,t,a,i,n){var o="",l="";return 0===t||void 0===t||"0"===t?o="":t>=1&&(o=" "+n.toLowerCase()+" "+t),0===a||void 0===a||"0"===a?"":(a>=1&&(l=" "+i.toLowerCase()+" "+a),""===e||void 0===e?"":(l=" "+i.toLowerCase()+" "+a,s.titlesTags(e,o,l,a)))},s.description=function(e,t,a,i,n,o,l,r){var c=e.replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})),u=e.replace(/\s/g,""),d="",b="",m="";return 0===n||void 0===n||"0"===n?d="":n>=1&&(d=" "+r+" "+n),0===a||void 0===a||"0"===a?"":(a>=1&&(b=" "+l+" "+a),m=void 0===i||""===i?"":"<br><br>Timecodes \u2b07\ufe0f<br>",t+" - "+c+d+" "+b+" Reaction<br><br>"+c+d+" Reactions Playlist - "+o+"<br><br>#"+u+"reaction #"+u+d.replace(/\s/g,"")+b.replace(/\s/g,"")+" "+s.state.youTubeHashtag+"<br><br>"+s.state.youTubeFollow+":<br>"+s.state.youTubeSocial[0].id+": "+s.state.youTubeSocial[0].url+"<br>"+s.state.youTubeSocial[1].id+": "+s.state.youTubeSocial[1].url+"<br>"+s.state.youTubeSocial[2].id+": "+s.state.youTubeSocial[2].url+"<br>"+s.state.youTubeSocial[3].id+": "+s.state.youTubeSocial[3].url+"<br>"+s.state.youTubeSocial[4].id+": "+s.state.youTubeSocial[4].url+m+i)},s.youtubeTag=function(){var e=document.getElementById("title").value.toLowerCase(),t=document.getElementById("altTitle").value.toLowerCase(),a=document.getElementById("youtubeTitle").value,i=document.getElementById("episode").value,n=document.getElementById("altEpisode").value,o=document.getElementById("youtubeTimecode").value,c=document.getElementById("season").value,u=document.getElementById("playlist").value,d=document.getElementById("displayTags"),b=document.getElementById("displayDescription"),m=document.getElementById("results");return d.addEventListener("click",function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:return a=t.target.innerText,e.prev=3,e.next=6,navigator.clipboard.writeText(a);case 6:t.target.textContent="Copied to clipboard",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("Failed to copy!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()),b.addEventListener("click",function(){var e=Object(r.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:return a=t.target.innerText,e.prev=3,e.next=6,navigator.clipboard.writeText(a);case 6:t.target.textContent="Copied to clipboard",e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.error("Failed to copy!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(t){return e.apply(this,arguments)}}()),m.style.display="flex",d.innerHTML=s.reactionTags(e,c,i,s.state.episodeLabel,s.state.seasonLabel)+", "+s.reactionTags(e,"",n,s.state.episodeLabel,s.state.seasonLabel)+", "+s.reactionTags(t,c,i,s.state.episodeLabel,s.state.seasonLabel)+", "+s.reactionTags(t,"",n,s.state.episodeLabel,s.state.seasonLabel),b.innerHTML=s.description(e,a,i,o,c,u,s.state.episodeLabel,s.state.seasonLabel)},s.state={isThisAnime:"Yes",mediaTitle:"Anime",episodeLabel:"Episode",seasonLabel:"Season",altTitle:"",episode:"",altepisode:"",season:"",playlist:"",timecode:"",youTubeHashtag:m.youTube.hashtag,youTubeSocial:m.youTubeSocial,youTubeFollow:m.youTube.followTitle},s}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"componentDidUpdate",value:function(){window.scrollTo(0,0)}},{key:"updatePage",value:function(e){"Yes"===e?this.setState((function(t){return{isThisAnime:e,mediaTitle:"Anime",episodeLabel:"Episode",seasonLabel:"Season"}})):"No"===e&&this.setState((function(t){return{isThisAnime:e,mediaTitle:"Manga",episodeLabel:"Chapter",seasonLabel:"Volume"}}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{className:"header-title",children:"YouTube Metadata Creator"}),Object(p.jsxs)("div",{className:"header-subtitle",children:["Created by ",Object(p.jsx)("a",{href:"https://www.samsonloftin.com/",children:"Post-TimeSkip Sam"})]}),Object(p.jsxs)("div",{className:"header-nav",children:[Object(p.jsx)("div",{className:"header-links",onClick:function(){return e.updatePage("Yes")},children:"Anime"}),Object(p.jsx)("div",{className:"header-links",onClick:function(){return e.updatePage("No")},children:"Manga"})]})]}),Object(p.jsxs)("div",{className:"form-container",children:[Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsxs)("label",{htmlFor:"title",children:[this.state.mediaTitle," Title"]}),Object(p.jsx)("input",{type:"text",id:"title",name:"title"})]}),Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsxs)("label",{htmlFor:"altTitle",children:["Alternative ",this.state.mediaTitle," Title"]}),Object(p.jsx)("input",{type:"text",id:"altTitle",name:"altTitle"})]}),Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsx)("label",{htmlFor:"youtubeTitle",children:"YouTube Title"}),Object(p.jsx)("input",{type:"text",id:"youtubeTitle",name:"youtubeTitle"})]}),Object(p.jsxs)("div",{className:"form-three-section",children:[Object(p.jsxs)("div",{className:"form-section-three",children:[Object(p.jsxs)("label",{htmlFor:"episode",children:[this.state.episodeLabel," #"]}),Object(p.jsx)("input",{type:"number",id:"episode",name:"episode",min:"0"})]}),Object(p.jsxs)("div",{className:"form-section-three",children:[Object(p.jsxs)("label",{htmlFor:"altEpisode",children:["Alt ",this.state.episodeLabel," #"]}),Object(p.jsx)("input",{type:"number",id:"altEpisode",name:"altEpisode",min:"0"})]}),Object(p.jsxs)("div",{className:"form-section-three",children:[Object(p.jsxs)("label",{htmlFor:"season",children:[this.state.seasonLabel," #"]}),Object(p.jsx)("input",{type:"number",id:"season",name:"season",min:"0"})]}),Object(p.jsxs)("div",{className:"form-section-three",children:[Object(p.jsx)("label",{htmlFor:"playlist",children:"YouTube Playlist"}),Object(p.jsx)("input",{type:"text",id:"playlist",name:"playlist",min:"0"})]}),Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsx)("label",{htmlFor:"youtubeTimecode",children:"Timecodes"}),Object(p.jsx)("textarea",{cols:"50",rows:"5",id:"youtubeTimecode",name:"youtubeTimecode"})]}),Object(p.jsx)("div",{className:"form-section",id:"form-submit",children:Object(p.jsx)("input",{className:"submit",type:"button",onClick:function(){return e.youtubeTag()},value:"Submit"})})]})]}),Object(p.jsxs)("div",{className:"form-container",id:"results",children:[Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsx)("label",{children:"Description (Click Below to Copy)"}),Object(p.jsx)("div",{className:"display",id:"displayDescription"})]}),Object(p.jsxs)("div",{className:"form-section",children:[Object(p.jsx)("label",{children:"Tags (Click Below to Copy)"}),Object(p.jsx)("div",{className:"display",id:"displayTags"})]})]})]})}}]),a}(s.Component),h=a(15);n.a.render(Object(p.jsx)(h.a,{basename:"/",children:Object(p.jsx)(j,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.47a13fac.chunk.js.map