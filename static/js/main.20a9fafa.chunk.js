(this.webpackJsonpportfoliov2=this.webpackJsonpportfoliov2||[]).push([[0],{28:function(e,t,a){e.exports=a(38)},35:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=a(3),l=a(27);function s(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),i=a[0],o=a[1];return Object(n.useEffect)((function(){!function(e){var t="",a=0;e.split("").forEach((function(e){a+=-40*Math.random()+90,setTimeout((function(){o(t+=e)}),700+a)}))}(e.text)}),[]),r.a.createElement("div",{className:e.className},i,r.a.createElement("span",null,"\xa0"))}var m=a(51),d=Object(m.a)((function(e){var t;return{"@keyframes caret":{"50%":{background:"transparent"}},heroWrapper:{marginTop:"100px"},title:(t={color:"#747fe0",fontSize:"72px"},Object(c.a)(t,"&::before",{content:"'> '"}),Object(c.a)(t,"& span",{backgroundColor:"rgba(116,127,224,.65)",animation:"$caret 1s steps(1) infinite"}),t),content:{fontSize:"22px",lineHeight:"40px",marginTop:"80px",marginBottom:"80px",fontWeight:300}}}));function u(){var e=d({});return r.a.createElement("div",{className:e.heroWrapper},r.a.createElement(s,{text:"Eric Ellbogen",className:e.title}),r.a.createElement("div",{className:e.content},"Fullstack developer with a passion for building rich and responsive web applications."))}a(35);var p=a(54),f=a(55),g=a(26),b=Object(m.a)((function(e){return{header:{fontSize:"22px",display:"flex",justifyContent:"flex-end",paddingTop:"32px"},item:{paddingRight:"1em",fontWeight:300,position:"relative",textDecoration:"none",color:"black","&:after":{display:"block",position:"absolute",left:0,bottom:"-30px",width:0,height:"8px",backgroundColor:"#747fe0",content:'""',transition:"width .15s"},"&:hover:after":{width:"70%"}}}}));function h(){var e=b({});return r.a.createElement("div",{className:e.header},r.a.createElement("a",{href:"#projects",className:e.item},"Projects"),r.a.createElement("a",{href:"#contact",className:e.item},"Contact"))}var x=Object(m.a)((function(e){var t;return{terminal:{borderRadius:"16px"},header:{background:"#e4e3e5",height:"28px",display:"flex",justifyContent:"flex-start",alignItems:"center"},termButton:{background:" #f96256",width:"14px",height:"14px",borderRadius:"15px",marginLeft:"8px"},exit:{background:"#f96256"},minimize:{background:"#fdbc3d"},maximize:{background:"#33c948"},body:{background:"#5a5d7a",padding:"16px",fontSize:"18px"},aboutInfo:Object(c.a)({marginTop:"24px",marginBottom:"24px"},"& a",{textDecoration:"none",color:"#35feff"}),infoCommand:(t={color:"#f7f7f7"},Object(c.a)(t,"&::before",{content:"'> '"}),Object(c.a)(t,"& span",{backgroundColor:"hsla(0,0%,97%,.65)",animation:"$caret 1s steps(1) infinite"}),t),infoResult:{color:"#e7d184"},"@keyframes caret":{"50%":{background:"transparent"}}}}));function v(){var e=x({});return r.a.createElement("div",{className:e.terminal},r.a.createElement("div",{className:e.header},r.a.createElement("div",{className:e.termButton+" "+e.exit}),r.a.createElement("div",{className:e.termButton+" "+e.minimize}),r.a.createElement("div",{className:e.termButton+" "+e.maximize})),r.a.createElement("div",{className:e.body},[{command:"eric.currentLocation",result:'"Montreal, Quebec"'},{command:"eric.contactInfo",urls:[{name:"ericellb@gmail.com",src:"ericellb@gmail.com"},{name:"LinkedIn",src:"https://linkedin.com"},{name:"github",src:"https://github.com"}]},{command:"eric.resume",urls:[{name:"ericellb.pdf",src:"ericellb@gmail.com"}]},{command:"eric.skills",result:'["TypeScript", "Embedded C", "HTML5", "CSS3", "React", "Redux", "Material Design", "NodeJS", "Express", "REST API", "Redis", "MySQL", "MongoDB", "Linux", "Git", "Jest", "Networking"\n\n  ]'},{command:"eric.languages",result:'["English", "French"]'}].map((function(t){return r.a.createElement("div",{className:e.aboutInfo},r.a.createElement("div",{className:e.infoCommand},t.command),!t.urls&&r.a.createElement("div",{className:e.infoResult},t.result),t.urls&&t.urls.map((function(e,a){var n;return n=1===t.urls.length?e.name:0===a?'["'+e.name+", ":a<t.urls.length-1?'"'+e.name+'", ':'"'+e.name+'"]',r.a.createElement("a",{href:e.src},n)})))})),r.a.createElement("div",{className:e.aboutInfo},r.a.createElement("div",{className:e.infoCommand},r.a.createElement("span",null,"\xa0")))))}function E(){return r.a.createElement("div",null,r.a.createElement(v,null))}var k=a(40),N=a(56),C=a(53),y=Object(m.a)((function(e){return{container:{width:"100%",display:"flex",background:"white",boxShadow:"0 50px 100px rgba(50,50,93,.05), 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.1)",fontFamily:"Roboto",color:"#525f7f",marginBottom:"40px"},cardImageContainer:{width:"40%"},cardImage:{width:"100%",height:"100%"},cardMain:{width:"60%",padding:"48px"},cardTitle:{fontSize:"22px",marginBottom:"24px",fontWeight:500},cardDesc:{marginBottom:"24px",lineHeight:"26px"},cardSkillsContainer:{display:"flex",marginBottom:"24px"},cardSkill:{padding:"6px",border:"2px solid #92eac0",borderRadius:"8px",marginRight:"16px",fontSize:"14px"},cardButtonContainer:{display:"flex"},cardButton:{marginRight:"16px"},cardButtonDemo:Object(c.a)({background:"#747fe0"},"&:hover",{background:"#7795f8"}),cardButtonSource:Object(c.a)({background:"#fff",color:"#7795f8"},"&:hover",{background:"#fff"})}}));function S(e){var t=y({}),a=function(e){window.open(e,"_blank")};return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.cardImageContainer},r.a.createElement("img",{src:"/portfolio2.0"+"/".concat(e.data.imageurl,".png"),className:t.cardImage})),r.a.createElement("div",{className:t.cardMain},r.a.createElement("div",{className:t.cardTitle},e.data.title),r.a.createElement("div",{className:t.cardDesc},e.data.description),r.a.createElement("div",{className:t.cardSkillsContainer},e.data.skills.map((function(e){return r.a.createElement("div",{className:t.cardSkill}," ",e," ")}))),r.a.createElement("div",{className:t.cardButtonContainer},r.a.createElement(N.a,{onClick:function(){return a(e.data.liveurl)},variant:"contained",color:"primary",className:t.cardButton+" "+t.cardButtonDemo,endIcon:r.a.createElement(C.a,{className:"fa fa-external-link-alt"})},"Live Demo"),r.a.createElement(N.a,{onClick:function(){return a(e.data.repourl)},variant:"contained",color:"primary",className:t.cardButton+" "+t.cardButtonSource,endIcon:r.a.createElement(C.a,{className:"fab fa-github"})},"View Source"))))}var R=Object(k.a)((function(e){return{projectsContainer:{marginTop:"80px",background:"#f6f9fc"},title:{textAlign:"center",fontSize:"32px",marginBottom:"80px"}}}));function j(){var e=R({});return r.a.createElement("div",{className:e.projectsContainer},r.a.createElement("div",{className:e.title,id:"projects"},"Projects"),[{title:"React Discord Clone",description:"Discord clone built in Typescript + React + Express. I created this to better understand Websockets and Funtional Components in React. Has full functionality including Server + Channel creations, Private Messaging and even Voice Chat using WebRTC.",liveurl:"https://ericellb.github.io/React-Discord-Clone/",repourl:"https://github.com/ericellb/React-Discord-Clone",imageurl:"discord",skills:["React","Redux","Express","TypeScript"]},{title:"Lightning Link",description:"URL Shortener built in TypeScript + React + Express. I created this to design a system to be highly scalable from the start. Get Lightning Fast URL Redirections when using LTNG Link.",liveurl:"https://ltng.link/#/",repourl:"https://github.com/ericellb/Lightning-Link",imageurl:"ltnglink",skills:["React","Redux","Express","TypeScript"]},{title:"Flightbook",description:"Flight Searching application built in TypeScript + React + Express. Search and build combinations of One Way, Round Trip, and Multi City Flights. Includes an Autosuggestion service to complete Airport names.",liveurl:"https://ericellb.github.io/flightbook/#/",repourl:"https://github.com/ericellb/flightbook",imageurl:"flightbook",skills:["PHP","Laravel","TypeScript","React","Redux"]}].map((function(e){return r.a.createElement(S,{data:e})})))}var w=Object(m.a)((function(e){return{contactContainer:{marginTop:"80px",background:"#f6f9fc"},title:{textAlign:"center",fontSize:"32px",marginBottom:"40px","&:after":{content:'" "',border:"4px solid #747fe0",display:"block",margin:"0 auto",marginTop:"30px",width:"50px"}},contactInfo:{display:"flex",justifyContent:"center",fontSize:"18px",marginBottom:"40px"},contactItem:{margin:"32px",textDecoration:"none",color:"black",position:"relative","&:after":{display:"block",position:"absolute",left:0,bottom:"-30px",width:0,height:"8px",backgroundColor:"#747fe0",content:'""',transition:"width .15s"},"&:hover:after":{width:"80%"}},footer:{textAlign:"center",paddingBottom:"80px"}}}));function B(){var e=w({});return r.a.createElement("div",{className:e.contactContainer},r.a.createElement("div",{className:e.title,id:"contact"}," ","Contact Me"," "),r.a.createElement("div",{className:e.contactInfo},r.a.createElement("a",{href:"mailto:ericellb@gmail.com",className:e.contactItem},"ericellb@gmail.com"),r.a.createElement("a",{href:"https://www.linkedin.com/in/eric-ellbogen-742722b1/",className:e.contactItem},"LinkedIn"),r.a.createElement("a",{href:"https://github.com/ericellb",className:e.contactItem},"Github")),r.a.createElement("div",{className:e.footer}," Created by Eric Ellbogen 2019 "))}var I=Object(m.a)((function(e){return{main:{background:"#f6f9fc"}}}));var T=Object(g.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"14px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#2a5bd7",color:"white",fontFamily:"Consolas"}},MuiAppBar:{colorPrimary:{backgroundColor:"#fff"}}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}});o.a.render(r.a.createElement((function(){var e=I({});return r.a.createElement(p.a,{theme:T},r.a.createElement("div",{className:e.main},r.a.createElement(f.a,null,r.a.createElement(h,null),r.a.createElement(u,null),r.a.createElement(E,null),r.a.createElement(j,null),r.a.createElement(B,null))))}),null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.20a9fafa.chunk.js.map