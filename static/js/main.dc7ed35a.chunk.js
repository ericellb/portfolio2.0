(this.webpackJsonpportfoliov2=this.webpackJsonpportfoliov2||[]).push([[0],{33:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Terminal}));var _mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(19),_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),mathjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(57),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(55),_content_about__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(35),_FileSystem__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(36),useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a)((function(e){var t;return{terminal:{borderRadius:"16px",boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"},header:{background:"#e4e3e5",height:"28px",display:"flex",justifyContent:"flex-start",alignItems:"center"},termButton:{background:" #f96256",width:"14px",height:"14px",borderRadius:"15px",marginLeft:"8px"},exit:{background:"#f96256"},minimize:{background:"#fdbc3d"},maximize:{background:"#33c948"},body:{background:"#1e1e1e",padding:"16px",fontSize:"18px"},aboutInfo:Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.a)({marginTop:"24px",marginBottom:"24px"},"& a",{textDecoration:"none",color:"#35feff"}),infoCommand:(t={color:"#f7f7f7"},Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.a)(t,"&::before",{content:"'> '"}),Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.a)(t,"& span.caret",{backgroundColor:"hsla(0,0%,97%,.65)",animation:"$caret 1s steps(1) infinite"}),t),infoResult:{color:"#e7d184"},infoFile:{color:"white"},infoFolder:{color:"#0dbc79"},"@keyframes caret":{"50%":{background:"transparent"}},commandInput:{background:"#1e1e1e",outline:"none",border:"none",color:"white",textShadow:"0 0 0 gray",width:"4ch",fontSize:"18px",fontFamily:"Consolas",fontWeight:200,"&:focus":{outline:"0px solid transparent;",border:"none"}}}})),fsCommands=["cd","mkdir","touch","cat"],fs=new _FileSystem__WEBPACK_IMPORTED_MODULE_7__.a;function Terminal(){var classes=useStyles({}),_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("help"),_useState2=Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),command=_useState2[0],setCommand=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(_content_about__WEBPACK_IMPORTED_MODULE_6__.a),_useState4=Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState3,2),aboutInfos=_useState4[0],setAboutInfos=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)("/"),_useState6=Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState5,2),workingDir=_useState6[0],setWorkingDir=_useState6[1],parseCommand=function parseCommand(command){var validCommand=!0;if(command=command.toLocaleLowerCase(),"eric.currentlocation"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[aboutInfos[0]])}));else if("eric.contactinfo"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[aboutInfos[1]])}));else if("eric.resume"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[aboutInfos[2]])}));else if("eric.skills"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[aboutInfos[3]])}));else if("eric.languages"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[aboutInfos[4]])}));else if("help"===command)setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[{command:"help",result:"supported commands are : cd, ls, mkdir, cat, touch"}])}));else if("ls"===command){var result=fs.ls();setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[{command:command,files:result}])}))}else if(fsCommands.indexOf(command.split(" ")[0])>-1){var commandParts=command.split(" "),fsCommand="fs.".concat(commandParts[0],"('").concat(commandParts[1],"')"),_result=eval(fsCommand);setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[{command:command,result:_result}])}));var tempWorkingDir=fs.getWorkingDir();""===tempWorkingDir&&(tempWorkingDir="/"),setWorkingDir(tempWorkingDir)}else try{var _result2=Object(mathjs__WEBPACK_IMPORTED_MODULE_4__.a)(command);if("string"!==typeof _result2)throw new Error("invalid math result");setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[{command:command,result:_result2}])}))}catch(err){validCommand=!1,setAboutInfos((function(e){return[].concat(Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(e),[{command:command,result:"".concat(command," : command not found ")}])}))}return validCommand},focusInput=function(){var e=document.getElementById("commandInput");e&&e.focus()},renderURLS=function(e){if(e.urls)return e.urls.map((function(t,a){var r;return r=e.urls&&1===e.urls.length?t.name:0===a?'["'+t.name+", ":e.urls&&a<e.urls.length-1?'"'+t.name+'", ':'"'+t.name+'"]',react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a",{href:t.src,target:"_blank"},r)}))},renderFileFolder=function(e){if(e.files)return e.files.map((function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"folder"===e.type?classes.infoFolder:classes.infoFile},e.fileName," "))}))},submitCommand=function(e){if("Enter"===e.key){if(e.preventDefault(),parseCommand(command)){var t=document.getElementById("commandInput");setCommand(""),t&&(t.style.width="0ch")}var a=document.getElementById("commandInput");a&&a.scrollIntoView({behavior:"smooth",block:"center"})}},setCommandInput=function(e){setCommand(e.target.value),e.target.style.width=e.target.value.length+"ch"};return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.terminal,onClick:function(){return focusInput()},id:"terminal"},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.header},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.termButton+" "+classes.exit}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.termButton+" "+classes.minimize}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.termButton+" "+classes.maximize})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.body},aboutInfos.map((function(e){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.aboutInfo},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.infoCommand},e.command),e.result&&react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.infoResult},e.result),e.urls&&renderURLS(e),e.files&&renderFileFolder(e))})),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.aboutInfo},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",{className:classes.infoCommand},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{style:{color:"#2d84ea"}},workingDir)," ",react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input",{id:"commandInput",className:classes.commandInput,autoComplete:"off",value:command,onChange:function(e){return setCommandInput(e)},onKeyDown:function(e){return submitCommand(e)}}),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span",{className:"caret"},"\xa0")))))}},35:function(e,t,a){"use strict";t.a=[{command:"eric.currentLocation",result:'"Montreal, QC, Canada"'},{command:"eric.contactInfo",urls:[{name:"ericellb@gmail.com",src:"mailto:ericellb@gmail.com"},{name:"LinkedIn",src:"https://www.linkedin.com/in/eric-ellbogen-742722b1/"},{name:"github",src:"https://github.com/ericellb"}]},{command:"eric.resume",urls:[{name:"ericellb.pdf",src:"/resume.pdf"}]},{command:"eric.skills",result:'["TypeScript", "C", "PHP", "TDD", "HTML5 / CSS3", "React", "Redux", "Material UI", "Node.js", "Express", "Laravel", "REST API", "MySQL", "MongoDB", "Redis", "Linux", "Git", "Networking"]'},{command:"eric.languages",result:'["English", "French"]'}]},36:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return FileSystem}));var _mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17),FileSystem=function(){function FileSystem(){Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,FileSystem),this.paths={experience:{zayo:"I am currently a Network Technician at Zayo. (View Resume for more info)",wowwee:"I was a Embedded Software Developer at WowWee. (View Resume for more info)",allstream:"I was a Network Technican at Allstream. (View Resume for more info)"},projects:{discord:"A fully functional Clone of Discord, check it out below",ltnglink:"A Highly Scalable URL Shortener, check it out below!",visualsort:"A visualizer for various sorting algorithms, check it out below!",weather:"A simple weather app, check it out below!"},animals:{dexter:"Is my miniature schnauzer!",cami:"Is my turkish van cat!"}},this.workingDir=""}return Object(_mnt_c_Users_Eric_Desktop_Projects_portfoliov2_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(FileSystem,[{key:"getWorkingDir",value:function(){return this.workingDir}},{key:"cat",value:function(e){var t=this.getPathContents();if("string"===typeof t[e])return t[e]}},{key:"touch",value:function(e){this.createFileFolder(e,"file")}},{key:"mkdir",value:function(e){this.createFileFolder(e,"folder")}},{key:"ls",value:function(){var e=this.getPathContents(),t=[];for(var a in e)"string"===typeof e[a]?t.push({fileName:a,type:"file"}):"object"===typeof e[a]&&t.push({fileName:a,type:"folder"});return t}},{key:"cd",value:function(e){var t=this.getPathContents(),a=!0;if("/"===e||"../"===e){if("/"===e)this.workingDir="";else if("../"===e){var r=this.workingDir.lastIndexOf("/");this.workingDir=this.workingDir.slice(0,r)}}else{var o=0;for(var n in t){if("object"===typeof t[n]&&Object.keys(t).indexOf(e)===o)return this.workingDir+="/"+e,a;o++}a=!1}return a}},{key:"createFileFolder",value:function createFileFolder(fileName,type){var creationType;if("file"===type?creationType=" = 'Empty File'":"folder"===type&&(creationType=" = {}"),""===this.workingDir){var command="this.paths.".concat(fileName)+creationType;eval(command)}else{for(var dirs=this.workingDir.split("/"),_command="this.paths",i=1;i<dirs.length;i++)_command=_command+"."+dirs[i];_command+=".".concat(fileName)+creationType,eval(_command)}}},{key:"getPathContents",value:function(){if(""===this.workingDir)return this.paths;for(var e=this.workingDir.split("/"),t=this.paths[e[1]],a=2;a<e.length;a++)t=t[e[a]];return t}}]),FileSystem}()},43:function(e,t,a){e.exports=a(54)},50:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(15),_=a.n(n),i=a(3),c=a(19);function s(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),n=a[0],_=a[1];return Object(r.useEffect)((function(){!function(e){var t="",a=0;e.split("").forEach((function(e){a+=-40*Math.random()+90,setTimeout((function(){_(t+=e)}),700+a)}))}(e.text)}),[]),o.a.createElement("div",{className:e.className},n,o.a.createElement("span",null,"\xa0"))}var l=a(55),m=Object(l.a)((function(e){var t;return{"@keyframes caret":{"50%":{background:"transparent"}},heroWrapper:{marginTop:"60px"},title:(t={color:"#747fe0",fontSize:"72px"},Object(i.a)(t,"&::before",{content:"'> '"}),Object(i.a)(t,"& span",{backgroundColor:"rgba(116,127,224,.65)",animation:"$caret 1s steps(1) infinite"}),Object(i.a)(t,e.breakpoints.down("xs"),{fontSize:"32px"}),t),content:{fontSize:"22px",lineHeight:"40px",marginTop:"40px",marginBottom:"40px",fontWeight:300}}}));function u(){var e=m({});return o.a.createElement("div",{className:e.heroWrapper},o.a.createElement(s,{text:"Eric Ellbogen",className:e.title}),o.a.createElement("div",{className:e.content},"Fullstack developer with a passion for building rich and responsive web applications."))}a(50);var d=a(72),p=a(73),f=a(41),b=Object(l.a)((function(e){return{header:{fontSize:"22px",display:"flex",justifyContent:"flex-end",paddingTop:"32px"},item:{paddingRight:"1em",fontWeight:300,position:"relative",textDecoration:"none",color:"black","&:after":{display:"block",position:"absolute",left:0,bottom:"-30px",width:0,height:"8px",backgroundColor:"#747fe0",content:'""',transition:"width .15s"},"&:hover:after":{width:"70%"}}}}));function E(){var e=b({});return o.a.createElement("div",{className:e.header},o.a.createElement("a",{href:"#projects",className:e.item},"Projects"),o.a.createElement("a",{href:"#contact",className:e.item},"Contact"))}var h=a(33);function g(){return o.a.createElement("div",null,o.a.createElement(h.a,null))}var D=a(58),k=a(74),O=a(71),v=Object(l.a)((function(e){return{container:{width:"100%",display:"flex",background:"white",boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",transition:"all 0.3s cubic-bezier(.25,.8,.25,1)",fontFamily:"Roboto",color:"#525f7f",marginBottom:"40px","&:hover":{boxShadow:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"}},cardImageContainer:Object(i.a)({width:"40%"},e.breakpoints.down("sm"),{width:"0%"}),cardImage:{width:"100%",height:"100%"},cardMain:Object(i.a)({width:"60%",padding:"48px"},e.breakpoints.down("sm"),{width:"100%",boxSizing:"border-box"}),cardTitle:{fontSize:"22px",marginBottom:"24px",fontWeight:500},cardDesc:{marginBottom:"24px",lineHeight:"26px"},cardSkillsContainer:{display:"flex",marginBottom:"24px",flexWrap:"wrap"},cardSkill:{padding:"6px",border:"2px solid #92eac0",borderRadius:"8px",margin:"4px",fontSize:"14px"},cardButtonContainer:{display:"flex",flexWrap:"wrap"},cardButton:Object(i.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginBottom:"16px"}),cardButtonDemo:Object(i.a)({background:"#747fe0"},"&:hover",{background:"#7795f8"}),cardButtonSource:Object(i.a)({background:"#fff",color:"#7795f8"},"&:hover",{background:"#fff"})}}));function P(e){var t=v({}),a=function(e){window.open(e,"_blank")};return o.a.createElement("div",{className:t.container},o.a.createElement("div",{className:t.cardImageContainer},o.a.createElement("img",{src:""+"/".concat(e.data.imageurl,".png"),className:t.cardImage})),o.a.createElement("div",{className:t.cardMain},o.a.createElement("div",{className:t.cardTitle},e.data.title),o.a.createElement("div",{className:t.cardDesc},e.data.description),o.a.createElement("div",{className:t.cardSkillsContainer},e.data.skills.map((function(e){return o.a.createElement("div",{className:t.cardSkill}," ",e," ")}))),o.a.createElement("div",{className:t.cardButtonContainer},o.a.createElement(k.a,{onClick:function(){return a(e.data.liveurl)},variant:"contained",color:"primary",className:t.cardButton+" "+t.cardButtonDemo,endIcon:o.a.createElement(O.a,{className:"fa fa-external-link-alt"})},"Live Demo"),o.a.createElement(k.a,{onClick:function(){return a(e.data.repourl)},variant:"contained",color:"primary",className:t.cardButton+" "+t.cardButtonSource,endIcon:o.a.createElement(O.a,{className:"fab fa-github"})},"View Source"))))}var C=[{title:"React Discord Clone",description:"Discord clone built in Typescript + React + Express. I created this to better understand Websockets and to learn Functional Components in React. The application has full functionality including Server + Channel creations, Private Messaging and even Voice Chat using WebRTC.",liveurl:"https://ericellb.github.io/React-Discord-Clone/",repourl:"https://github.com/ericellb/React-Discord-Clone",imageurl:"discordp",skills:["TypeScript","React","Redux","Express","MySQL","Socket.io","Material-UI"]},{title:"Lightning Link",description:"URL Shortener built in TypeScript + React + Express. I created this to design a system to be highly scalable from the start, uses caching to provide Lighting Fast redirection. Also provides analytics and user demographic of your generated LTNG Links.",liveurl:"https://ltng.link/#/",repourl:"https://github.com/ericellb/Lightning-Link",imageurl:"ltnglink",skills:["TypeScript","React","Redux","Express","MySQL","Redis","Material-UI"]},{title:"Flightbook",description:"Flight Searching web service built in Laravel + TypeScript and React Frontend. Search and build combinations of One Way, Round Trip, and Multi City Flights. Includes an Autosuggestion service to complete Airport names.",liveurl:"https://ericellb.github.io/flightbook/#/",repourl:"https://github.com/ericellb/flightbook",imageurl:"flightbook",skills:["PHP / Laravel","TypeScript","React","Redux","Material-UI"]},{title:"My Portfolio",description:"My personal project portfolio, enhanced with a working Mock Filesystem in the Terminal above. If you havn't yet, type some commands in! In the process of a code refactor.",liveurl:"https://ericellb.com/",repourl:"https://github.com/ericellb/portfolio2.0",imageurl:"portfolio",skills:["TypeScript","React","Redux","Material-UI"]},{title:"Visual Sort",description:"Visualized sorting algorithm application built in TypeScript + React + Express. Visualize how various sorting algorithms work, and be able to control speed and pause / play sorting",liveurl:"https://ericellb.github.io/Visual-Sort/",repourl:"https://github.com/ericellb/Visual-Sort",imageurl:"sorter",skills:["TypeScript","React","Redux","Express","MySQL","Redis","Material-UI"]}],M=Object(D.a)((function(e){return{projectsContainer:{marginTop:"40px",background:"#f6f9fc"},title:{textAlign:"center",fontSize:"32px",marginBottom:"40px"}}}));function y(){var e=M({});return o.a.createElement("div",{className:e.projectsContainer},o.a.createElement("div",{className:e.title,id:"projects"},"Projects"),C.map((function(e){return o.a.createElement(P,{data:e})})))}var I=Object(l.a)((function(e){return{contactContainer:{marginTop:"40px",background:"#f6f9fc"},title:{textAlign:"center",fontSize:"32px",marginBottom:"40px","&:after":{content:'" "',border:"4px solid #747fe0",display:"block",margin:"0 auto",marginTop:"30px",width:"50px"}},contactInfo:{display:"flex",flexWrap:"wrap",justifyContent:"center",fontSize:"18px",marginBottom:"40px"},contactItem:Object(i.a)({margin:"32px",marginTop:"0px",textDecoration:"none",color:"black",position:"relative","&:after":{display:"block",position:"absolute",left:0,bottom:"-30px",width:0,height:"8px",backgroundColor:"#747fe0",content:'""',transition:"width .15s"},"&:hover:after":{width:"80%"}},e.breakpoints.down("xs"),{flexBasis:"100%",textAlign:"center"}),footer:{textAlign:"center",paddingBottom:"80px"}}}));function x(){var e=I({});return o.a.createElement("div",{className:e.contactContainer},o.a.createElement("div",{className:e.title,id:"contact"}," ","Contact Me"," "),o.a.createElement("div",{className:e.contactInfo},o.a.createElement("a",{href:"mailto:ericellb@gmail.com",className:e.contactItem,target:"_blank"},"ericellb@gmail.com"),o.a.createElement("a",{href:"https://www.linkedin.com/in/eric-ellbogen-742722b1/",className:e.contactItem,target:"_blank"},"LinkedIn"),o.a.createElement("a",{href:"https://github.com/ericellb",className:e.contactItem,target:"_blank"},"Github")),o.a.createElement("div",{className:e.footer}," Eric Ellbogen 2019 "))}var w=Object(l.a)((function(e){return{main:{background:"#f6f9fc"}}}));var R=Object(f.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"14px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#2a5bd7",color:"white",fontFamily:"Consolas"}},MuiAppBar:{colorPrimary:{backgroundColor:"#fff"}}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:400,fontWeightRegular:500,fontWeightMedium:600}});_.a.render(o.a.createElement((function(){var e=w({});return o.a.createElement(d.a,{theme:R},o.a.createElement("div",{className:e.main},o.a.createElement(p.a,null,o.a.createElement(E,null),o.a.createElement(u,null),o.a.createElement(g,null),o.a.createElement(y,null),o.a.createElement(x,null))))}),null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.dc7ed35a.chunk.js.map