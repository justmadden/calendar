(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{172:function(e,t,n){e.exports={CalendarBlock:"CalendarPage_CalendarBlock__x0iED"}},174:function(e,t,n){e.exports=n(339)},179:function(e,t,n){},282:function(e,t,n){},339:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),c=n.n(l),o=(n(179),n(86)),i=n(52),s=n(88),u=n(33),m=n(59),d=n(60),v=n(72),f=n(61),E=n(76),p=n(139),h=n(169),b=n.n(h),O=n(170),g=n.n(O),y=(n(280),n(281),n(282),g()(p.a)),_=Object(p.b)(b.a),j=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).resizeEvent=function(e){var t=e.event,a=e.start,r=e.end,l=n.props.events.map((function(e){return e.id===t.id?Object(u.a)({},e,{start:a,end:r}):e}));n.props.onChangeEvents(l)},n.moveEvent=function(e){var t=e.event,a=e.start,r=e.end,l=e.isAllDay,c=n.props.events,o=c.indexOf(t),i=t.allDay;!t.allDay&&l?i=!0:t.allDay&&!l&&(i=!1);var m=Object(u.a)({},t,{start:a,end:r,allDay:i}),d=Object(s.a)(c);d.splice(o,1,m),n.props.onChangeEvents(d)},n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.events,n=e.onSelectEvent,a=e.handleSelect;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{selectable:!0,localizer:_,events:t,startAccessor:"start",endAccessor:"end",onEventDrop:this.moveEvent,onEventResize:this.resizeEvent,onSelectSlot:a,onSelectEvent:n}))}}]),t}(a.Component),C=n(100),S=n(117),w=n(42),N=n.n(w),x=n(127),k=n.n(x),R=n(136),H=n.n(R);n(283);function L(e){var t=e.x,n=e.y,l=e.id,c=e.title,o=e.start,i=e.note,s=e.isEdit,u=e.onClose,m=e.onCreate,d=e.onChange,v=e.onRemove,f=Object(a.useState)(c),E=Object(S.a)(f,2),p=E[0],h=E[1],b=Object(a.useState)(o),O=Object(S.a)(b,2),g=O[0],y=O[1],_=Object(a.useState)(i),j=Object(S.a)(_,2),w=j[0],x=j[1];return r.a.createElement("div",{className:N.a.Card,style:{top:"".concat(n,"px"),left:"".concat(t,"px")}},r.a.createElement("div",{className:N.a.Close,onClick:u},"X"),r.a.createElement("div",{className:N.a.EventName},r.a.createElement("label",null,"Event name"),r.a.createElement("input",{value:p,maxLength:30,onChange:function(e){h(e.target.value)}})),r.a.createElement("div",{className:N.a.EventDate},r.a.createElement("label",null,"Event date"),r.a.createElement(H.a,{selected:g,onChange:function(e){console.log(e),y(e)}})),r.a.createElement("div",{className:N.a.EventTime},r.a.createElement("label",null,"Event time"),r.a.createElement(H.a,{selected:g,onChange:function(e){return y(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"h:mm aa"})),r.a.createElement("div",{className:N.a.EventName},r.a.createElement("label",null,"Note"),r.a.createElement("input",{value:w,onChange:function(e){x(e.target.value)}})),r.a.createElement("div",{className:k()(N.a.Controls,Object(C.a)({},N.a.Edit,s))},s?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return v(l)}},"Discard"),r.a.createElement("button",{onClick:function(){d({title:p,start:g,end:g,note:w,id:l})}},"Edit")):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:u},"Cancel"),r.a.createElement("button",{onClick:function(){m({title:p,start:g,note:w})}},"Save"))))}L.defaultProps={x:0,y:0,onClose:function(){},onCreate:function(){},onRemove:function(){},title:"",time:Date.now(),start:Date.now(),note:""};var V=L,A=n(172),D=n.n(A),P=n(343),M=function(){return Object(P.a)("f".concat((+new Date).toString(16),"_"))},B=document.getElementById("modal-portal"),Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(f.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){B.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){B.removeChild(this.el)}},{key:"render",value:function(){return c.a.createPortal(this.props.children,this.el)}}]),t}(a.Component);var I=[{title:"Home",to:"/",path:"/",component:function(){return r.a.createElement("div",null,"Home")},icon:"home",exact:!0},{title:"Calendar",to:"/calendar",path:"/calendar",component:function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(f.a)(t).call(this,e))).handleSelect=function(e){var t=e.start;n.state.card.isVisible||n.setState({card:{isVisible:!0,date:t}})},n.onClose=function(){n.setState({card:{isVisible:!1}})},n.onCreate=function(e){var t=e.title,a=e.start,r={title:t,start:a,end:a,note:e.note,id:M()};n.setState((function(e){return Object(u.a)({},e,{events:[].concat(Object(s.a)(e.events),[r]),card:{isVisible:!1,isEdit:!1,selected:null}})}))},n.onChangeEvents=function(e){n.setState({events:e})},n.onRemove=function(e){n.setState((function(t){var n=t.events.findIndex((function(t){return t.id===e}));if(-1!==n){var a=t.events;return a.splice(n,1),Object(u.a)({},t,{events:a,card:Object(u.a)({},t.card,{isVisible:!1,isEdit:!1,selected:null})})}}))},n.onChange=function(e){n.setState((function(t){var n=Object(s.a)(t.events),a=n.findIndex((function(t){return t.id===e.id}));if(-1!==a)return n.splice(a,1,e),Object(u.a)({},t,{events:n,card:{isVisible:!1,isEdit:!1,selected:null}})}))},n.onMouseUpdate=function(e){var t=e.pageX,a=e.pageY;n.state.card.isVisible||n.setState({mousePosition:{x:t,y:a+20}})},n.onSelectEvent=function(e,t){n.setState((function(n){return Object(u.a)({},n,{card:Object(u.a)({},n.card,{isVisible:!0,isEdit:!0,selected:e,x:t.clientX+1050,y:t.clientY})})}))},n.state={card:{isVisible:!1,isEdit:!1,selected:null},events:[{id:M(),title:"Go shop",start:new Date,end:new Date},{id:M(),title:"Get order",start:new Date,end:new Date}],mousePosition:{x:0,y:0}},n.refCalendarBlock=r.a.createRef(),n.el=document.createElement("div"),n}return Object(E.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.refCalendarBlock.current.addEventListener("mousemove",this.onMouseUpdate,!1),this.refCalendarBlock.current.addEventListener("mouseenter",this.onMouseUpdate,!1)}},{key:"componentWillUnmount",value:function(){this.refCalendarBlock.current.removeEventListener("mousemove",this.onMouseUpdate),this.refCalendarBlock.current.removeEventListener("mouseenter",this.onMouseUpdate)}},{key:"render",value:function(){var e=this.state,t=e.card,n=t.isVisible,a=t.date,l=t.selected,c=t.isEdit,o=e.events,i=e.mousePosition,s=i.x,u=i.y;return r.a.createElement("div",null,r.a.createElement("div",{ref:this.refCalendarBlock,className:D.a.CalendarBlock},r.a.createElement(j,{handleSelect:this.handleSelect,events:o,onChangeEvents:this.onChangeEvents,onSelectEvent:this.onSelectEvent}),n&&r.a.createElement(Z,null,r.a.createElement(V,Object.assign({x:s,y:u,onClose:this.onClose,start:a,isEdit:c},l,{onCreate:this.onCreate,onChange:this.onChange,onRemove:this.onRemove})))))}}]),t}(a.Component),icon:"calendar",exact:!0}],F=n(344),U=n(89),T=n.n(U),z=n(90),W=n.n(z);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#a3a0fb;fill-rule:evenodd;}")),q=r.a.createElement("path",{className:"a",d:"M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z"}),G=function(e){var t=e.svgRef,n=e.title,a=X(e,["svgRef","title"]);return r.a.createElement("svg",J({width:16,height:16,viewBox:"0 0 16 16",ref:t},a),n?r.a.createElement("title",null,n):null,Y,q)},K=r.a.forwardRef((function(e,t){return r.a.createElement(G,J({svgRef:t},e))}));n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ee=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#a5a4bf;}")),te=r.a.createElement("path",{className:"a",d:"M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z",transform:"translate(0)"}),ne=function(e){var t=e.svgRef,n=e.title,a=Q(e,["svgRef","title"]);return r.a.createElement("svg",$({width:16,height:16,viewBox:"0 0 16 16",ref:t},a),n?r.a.createElement("title",null,n):null,ee,te)},ae=r.a.forwardRef((function(e,t){return r.a.createElement(ne,$({svgRef:t},e))}));n.p;function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ce=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#a4afb7;}")),oe=r.a.createElement("path",{className:"a",d:"M8.1,11.6,2.6,6.041,4.026,4.6,8.1,8.718,12.174,4.6,13.6,6.041Z",transform:"translate(-2.6 -4.6)"}),ie=function(e){var t=e.svgRef,n=e.title,a=le(e,["svgRef","title"]);return r.a.createElement("svg",re({width:11,height:7,viewBox:"0 0 11 7",ref:t},a),n?r.a.createElement("title",null,n):null,ce,oe)},se=r.a.forwardRef((function(e,t){return r.a.createElement(ie,re({svgRef:t},e))}));n.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var de=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#bcbccb;}")),ve=r.a.createElement("path",{className:"a",d:"M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z"}),fe=function(e){var t=e.svgRef,n=e.title,a=me(e,["svgRef","title"]);return r.a.createElement("svg",ue({width:16,height:16,viewBox:"0 0 16 16",ref:t},a),n?r.a.createElement("title",null,n):null,de,ve)},Ee=r.a.forwardRef((function(e,t){return r.a.createElement(fe,ue({svgRef:t},e))}));n.p;function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function he(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var be=r.a.createElement("defs",null,r.a.createElement("style",null,".a{fill:#bcbccb;}")),Oe=r.a.createElement("path",{className:"a",d:"M12.7,11.23a6.777,6.777,0,0,0,1.4-4.174A7.02,7.02,0,0,0,7.1,0,7.105,7.105,0,0,0,0,7.056a7.105,7.105,0,0,0,7.1,7.056,6.667,6.667,0,0,0,4.2-1.391l3,2.981a.971.971,0,0,0,1.4,0,.957.957,0,0,0,0-1.391Zm-5.6.8A5.022,5.022,0,0,1,2,7.056a5.1,5.1,0,0,1,10.2,0A5.022,5.022,0,0,1,7.1,12.025Z"}),ge=function(e){var t=e.svgRef,n=e.title,a=he(e,["svgRef","title"]);return r.a.createElement("svg",pe({width:16,height:16,viewBox:"0 0 16 16",ref:t},a),n?r.a.createElement("title",null,n):null,be,Oe)},ye=r.a.forwardRef((function(e,t){return r.a.createElement(ge,pe({svgRef:t},e))}));n.p;function _e(e){switch(e.name){case"calendar":return r.a.createElement(K,null);case"home":return r.a.createElement(ae,null);case"arrow":return r.a.createElement(se,null);case"support":return r.a.createElement(Ee,null);case"search":return r.a.createElement(ye,null);default:return null}}function je(){return r.a.createElement("div",{className:W.a.Sidebar},r.a.createElement("div",{className:W.a.Logo},"IMPEKABLE"),r.a.createElement("nav",null,Object(F.a)(I,(function(e){return r.a.createElement(o.b,{key:e.to,exact:e.exact,to:e.to,activeClassName:W.a.Active},r.a.createElement("div",{className:W.a.NavItem},r.a.createElement(_e,{name:e.icon}),e.title))}))))}var Ce=n(53),Se=n.n(Ce);function we(){return r.a.createElement("div",{className:Se.a.Header},r.a.createElement("div",{className:Se.a.LeftSide},r.a.createElement(_e,{name:"search"}),r.a.createElement("input",{placeholder:"Search transactions, invoices or help"})),r.a.createElement("div",{className:Se.a.RightSide},r.a.createElement("div",{className:Se.a.Icons},r.a.createElement(_e,{name:"support"}),r.a.createElement(_e,{name:"support"}),r.a.createElement(_e,{name:"support"})),r.a.createElement("div",{className:Se.a.Divider}),r.a.createElement("div",{className:Se.a.Name},"John Doe"),r.a.createElement(_e,{name:"arrow"}),r.a.createElement("div",{className:Se.a.Avatar})))}function Ne(e){var t=e.children;return r.a.createElement("div",{className:T.a.Layout},r.a.createElement("div",{className:T.a.Sidebar},r.a.createElement(je,null)),r.a.createElement("div",{className:T.a.Header},r.a.createElement(we,null)),r.a.createElement("div",{className:T.a.Content},t))}var xe=function(){return r.a.createElement(Ne,null,Object(F.a)(I,(function(e){return r.a.createElement(i.a,{exact:e.exact,key:e.path,path:e.path,component:e.component})})))};var ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(xe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},42:function(e,t,n){e.exports={Card:"EventCard_Card__32Aqx",Fade:"EventCard_Fade__3JuFr",Close:"EventCard_Close__2H88R",Edit:"EventCard_Edit__2lFJ1",Controls:"EventCard_Controls__3coVs",EventName:"EventCard_EventName__21plS",EventDate:"EventCard_EventDate__2-3JR",EventTime:"EventCard_EventTime__9AzqY",Notes:"EventCard_Notes__24vU2"}},53:function(e,t,n){e.exports={Header:"Header_Header__2C_Ub",LeftSide:"Header_LeftSide__2p5WV",RightSide:"Header_RightSide__noONR",Icons:"Header_Icons__2Xuuy",Avatar:"Header_Avatar__3l82_",Name:"Header_Name__PT7PR",Divider:"Header_Divider__12rzY"}},89:function(e,t,n){e.exports={Layout:"Layout_Layout__3SBgk",Content:"Layout_Content__2WLOk",Sidebar:"Layout_Sidebar__3rlLn",Header:"Layout_Header__1E0Ih"}},90:function(e,t,n){e.exports={Sidebar:"Sidebar_Sidebar__2ajNT",Logo:"Sidebar_Logo__1ZciM",NavItem:"Sidebar_NavItem__qatE-",Active:"Sidebar_Active__1zSkW"}}},[[174,1,2]]]);
//# sourceMappingURL=main.d4bd1594.chunk.js.map