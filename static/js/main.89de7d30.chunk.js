/*! For license information please see main.89de7d30.chunk.js.LICENSE.txt */
(this.webpackJsonpsd=this.webpackJsonpsd||[]).push([[0],{37:function(e,t,n){e.exports=n(75)},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);n(38);var r,a,o,l,c,i,u,s,d,p,m,f,v=n(0),g=n.n(v),h=n(14),y=n.n(h),b=n(19),E=n.n(b),x=n(6),C=n(8),O=(n(59),n(15)),j=n(4),w=n(10),k=n(20),N=n(21),S=n(5),A=(n(35),n(2)),D=n(16),G=n(23),z=(r=Object(C.persist)("object"),a=Object(C.persist)("list"),o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(k.a)(this,e),Object(w.a)(this,"name",l,this),Object(w.a)(this,"defaults",c,this),Object(w.a)(this,"_cards",i,this),this.name=t,this._cards=r,this.defaults=n}return Object(N.a)(e,[{key:"addCard",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return void 0===e.name&&(e.name="Unnamed"),this._cards.push(e)-1}},{key:"moveCard",value:function(e,t){var n=this._cards.splice(e,1),r=Object(x.a)(n,1)[0];return this._cards.splice(t,0,r),this}},{key:"removeCard",value:function(e){return this._cards.splice(e,1)[0]}},{key:"editCard",value:function(e,t,n){this._cards[e]=Object(G.a)({},this._cards[e],Object(D.a)({},t,n))}},{key:"editDefaults",value:function(e,t){this.defaults=Object(G.a)({},this.defaults,Object(D.a)({},e,t))}},{key:"editName",value:function(e){this.name=e}},{key:"data",get:function(){return{cards:this._cards,defaults:this.defaults,name:this.name}}},{key:"cards",get:function(){var e=this;return this._cards.map((function(t){return Object(G.a)({},e.defaults,{},t)}))}},{key:"rawCards",get:function(){return this._cards}}],[{key:"fromData",value:function(t){return new e(t.name,t.defaults,t.cards)}}]),e}(),l=Object(S.a)(o.prototype,"name",[A.observable,C.persist],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),c=Object(S.a)(o.prototype,"defaults",[A.observable,r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),i=Object(S.a)(o.prototype,"_cards",[A.observable,a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(S.a)(o.prototype,"addCard",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"addCard"),o.prototype),Object(S.a)(o.prototype,"moveCard",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"moveCard"),o.prototype),Object(S.a)(o.prototype,"removeCard",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"removeCard"),o.prototype),Object(S.a)(o.prototype,"editCard",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"editCard"),o.prototype),Object(S.a)(o.prototype,"editDefaults",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"editDefaults"),o.prototype),Object(S.a)(o.prototype,"editName",[A.action],Object.getOwnPropertyDescriptor(o.prototype,"editName"),o.prototype),o);!function(e){e.None="none",e.Group="group",e.Card="card"}(f||(f={}));var T=(u=Object(C.persist)("object"),s=Object(C.persist)("list",z),d=function(){function e(){Object(k.a)(this,e),Object(w.a)(this,"_selection",p,this),Object(w.a)(this,"_groups",m,this)}return Object(N.a)(e,[{key:"select",value:function(e,t){this._selection=void 0===e?{type:f.None}:void 0===t?{group:e,type:f.Group}:{card:t,group:e,type:f.Card}}},{key:"addGroup",value:function(e){return this._groups.push(e)-1}},{key:"removeGroup",value:function(e){return this._groups.splice(e,1)[0]}},{key:"moveGroup",value:function(e,t){var n=this._groups.splice(e,1),r=Object(x.a)(n,1)[0];this._groups.splice(t,0,r)}},{key:"selection",get:function(){return this._selection}},{key:"groups",get:function(){return this._groups}},{key:"groupsData",get:function(){return this._groups.map((function(e){return e.data}))}}]),e}(),p=Object(S.a)(d.prototype,"_selection",[A.observable,u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{type:f.None}}}),m=Object(S.a)(d.prototype,"_groups",[A.observable,s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(S.a)(d.prototype,"select",[A.action],Object.getOwnPropertyDescriptor(d.prototype,"select"),d.prototype),Object(S.a)(d.prototype,"addGroup",[A.action],Object.getOwnPropertyDescriptor(d.prototype,"addGroup"),d.prototype),Object(S.a)(d.prototype,"removeGroup",[A.action],Object.getOwnPropertyDescriptor(d.prototype,"removeGroup"),d.prototype),Object(S.a)(d.prototype,"moveGroup",[A.action],Object.getOwnPropertyDescriptor(d.prototype,"moveGroup"),d.prototype),d),I=Object(v.createContext)(new T);function M(e){return e.replace(/^(\*|-)(?= )/gim,"\u2022")}function W(e){for(var t=0,n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function _(e,t,n){return e.replace("\r","").split("\n").map((function(e,r){return function(e,t,n){var r,a,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],l=e.split(" "),c=0,i=document.createElementNS("http://www.w3.org/2000/svg","tspan"),u=document.createTextNode(l[0]);if(o){var s,d;i.setAttribute("x",n.x.baseVal[0].valueAsString),i.setAttribute("dy",null!==(s=null===(d=n.attributes.getNamedItem("font-size"))||void 0===d?void 0:d.value)&&void 0!==s?s:""),c++}if(i.appendChild(u),n.appendChild(i),!l.some((function(e){return e.length>0}))){var p,m;return i.textContent=" ",parseFloat(null!==(p=null===(m=n.attributes.getNamedItem("font-size"))||void 0===m?void 0:m.value)&&void 0!==p?p:"0")}for(var f=1;f<l.length;f++){var v,g,h,y;if(null===i.firstChild||null===i.firstChild.textContent)return console.error("TSPAN element has no first child",i),c*parseFloat(null!==(h=null===(y=n.attributes.getNamedItem("font-size"))||void 0===y?void 0:y.value)&&void 0!==h?h:"0");var b,E,x=null===(v=i.firstChild)||void 0===v||null===(g=v.textContent)||void 0===g?void 0:g.length;if(i.firstChild.textContent+=" ".concat(l[f]),i.getComputedTextLength()>t)i.firstChild.textContent=i.firstChild.textContent.slice(0,x),(i=document.createElementNS("http://www.w3.org/2000/svg","tspan")).setAttribute("x",n.x.baseVal[0].valueAsString),i.setAttribute("dy",null!==(b=null===(E=n.attributes.getNamedItem("font-size"))||void 0===E?void 0:E.value)&&void 0!==b?b:""),u=document.createTextNode(l[f]),i.appendChild(u),n.appendChild(i),c++}return c*parseFloat(null!==(r=null===(a=n.attributes.getNamedItem("font-size"))||void 0===a?void 0:a.value)&&void 0!==r?r:"0")}(e,t,n,0!==r)})).reduce((function(e,t){return e+t}))}function R(){var e=Object(v.useContext)(I),t=Object(v.createRef)(),n=Object(v.createRef)(),r=Object(v.createRef)(),a=Object(v.createRef)(),o=Object(v.createRef)(),l=Object(j.b)((function(){return e.selection.type===f.Card?e.groups[e.selection.group].cards[e.selection.card]:e.selection.type===f.Group?e.groups[e.selection.group].defaults:{}}));return Object(v.useEffect)((function(){var e=0,c=t.current,i=n.current,u=r.current,s=a.current,d=o.current;if(null!==i)if(void 0!==l.physicalComponents&&null!==c){var p=_(M(l.physicalComponents),44,c);i.setAttribute("height",(p+4).toString()),i.removeAttribute("display"),e+=p+3.5}else i.setAttribute("display","none");void 0!==l.description&&null!==u&&(u.setAttribute("dy",e.toString()),e+=_(M(l.description),44,u));if(null!==d)if(void 0!==l.extDescription&&null!==s){var m=_(M(l.extDescription),44,s);s.setAttribute("y",(65-m).toString()),d.setAttribute("transform","translate(0, ".concat(62-m,")")),d.removeAttribute("display")}else d.setAttribute("display","none");return function(){null!==c&&(c.innerHTML=""),null!==u&&(u.innerHTML=""),null!==s&&(s.innerHTML="")}}),[l,r,a,o,n,t]),Object(j.b)((function(){var e,c,i,u,s=null!==(null===(e=l.duration)||void 0===e?void 0:e.toLowerCase().match(/^concentration(,)? /)),d=s?null===(c=l.duration)||void 0===c?void 0:c.replace(/^concentration(,)? /i,""):l.duration,p="".concat(null!==(i=null===d||void 0===d?void 0:d.charAt(0).toUpperCase())&&void 0!==i?i:"").concat(null!==(u=null===d||void 0===d?void 0:d.slice(1))&&void 0!==u?u:""),m=parseInt(void 0!==l.level?l.level:"0",10),f=isNaN(m)?void 0:0===m?"".concat(l.type," cantrip"):"".concat(function(e){var t=e%10,n=e%100;return"".concat(e,1===t&&11!==n?"st":2===t&&12!==n?"nd":3===t&&13!==n?"rd":"th")}(m)," level ").concat(l.type);return g.a.createElement("svg",{className:"frontview view",width:"50",height:"70",viewBox:"0 0 50 70",fontFamily:"Modesto"},g.a.createElement("rect",{width:"50",height:"70",fill:l.color}),g.a.createElement("rect",{width:"46",height:"64",x:"2",y:"2",rx:"2",ry:"2",fill:"white"}),g.a.createElement("line",{x1:"0",y1:"9",x2:"50",y2:"9",stroke:l.color,strokeWidth:".3"}),g.a.createElement("line",{x1:"0",y1:"16",x2:"50",y2:"16",stroke:l.color,strokeWidth:".3"}),g.a.createElement("line",{x1:"0",y1:"23",x2:"50",y2:"23",stroke:l.color,strokeWidth:".3"}),g.a.createElement("line",{x1:"25",y1:"9",x2:"25",y2:"23",stroke:l.color,strokeWidth:".3"}),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",textAnchor:"middle",fontSize:"4",x:"25",y:"6.75"},l.name),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",fill:l.color,x:"13.5",y:"12",textAnchor:"middle"},"CASTING TIME"),g.a.createElement("text",{fontSize:"2",x:"13.5",y:"14.6",textAnchor:"middle"},l.castingTime),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",fill:l.color,x:"36.5",y:"12",textAnchor:"middle"},"RANGE"),g.a.createElement("text",{fontSize:"2",x:"36.5",y:"14.6",textAnchor:"middle"},l.range),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",fill:l.color,x:"13.5",y:"19",textAnchor:"middle"},"COMPONENTS"),g.a.createElement("text",{fontSize:"2",x:"13.5",y:"21.6",textAnchor:"middle"},l.components),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",fill:l.color,x:"36.5",y:"19",textAnchor:"middle"},"DURATION"),g.a.createElement("text",{fontSize:"2",x:"36.5",y:"21.6",textAnchor:"middle"},p),g.a.createElement("g",{display:s?void 0:"none"},g.a.createElement("polygon",{points:"46,17 44,19.5 46,22 48,19.5 46,17",fill:l.color}),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",x:"46",y:"19.5",dominantBaseline:"middle",textAnchor:"middle",fill:"#ffffff"},"C")),g.a.createElement("rect",{width:"50",height:"3.5",y:"23",fill:l.color,ref:n}),g.a.createElement("text",{fontSize:"2",x:"3",y:"25.6",ref:t,fill:"#ffffff"}),g.a.createElement("text",{fontSize:"2",x:"3",y:"25.5",ref:r}),g.a.createElement("g",{ref:o},g.a.createElement("rect",{width:"50",height:"3.5",y:"-3",fill:l.color}),g.a.createElement("text",{fontWeight:"bold",letterSpacing:".1",y:"-.4",fontSize:"2",x:"25",textAnchor:"middle",fill:"#ffffff"},"At Higher Levels")),g.a.createElement("text",{fontSize:"2",x:"3",ref:a}),g.a.createElement("text",{fontFamily:"ModestoW01-Expd",fontSize:"2",fill:"white",x:"2.5",y:"68.5"},l.clazz),g.a.createElement("text",{fontSize:"2",fill:"white",x:"48",y:"68.5",textAnchor:"end"},f))}))}function F(){var e=Object(v.useContext)(I),t=Object(j.b)((function(){return e.selection.type===f.Card?e.groups[e.selection.group].cards[e.selection.card]:e.selection.type===f.Group?e.groups[e.selection.group].defaults:{}})),n=Object(v.useMemo)((function(){var e;return W(null!==(e=t.image)&&void 0!==e?e:"")}),[t.image]);return Object(j.b)((function(){return g.a.createElement(g.a.Fragment,null,g.a.createElement("rect",{width:"50",height:"70",fill:t.color}),g.a.createElement("rect",{width:"46",height:"66",x:"2",y:"2",rx:"2",ry:"2",fill:"white"}),g.a.createElement("rect",{width:"40",height:"60",x:"5",y:"5",rx:"2",ry:"2",stroke:t.color,strokeWidth:"0.5",fill:"transparent"}),g.a.createElement("polyline",{points:"5.25,35 25,5.25 45,34.75 25,64.75 5.25,35",fill:"transparent",stroke:t.color,strokeWidth:".5"}),g.a.createElement("text",{fontSize:"10",fontWeight:"bold",fill:t.color,x:"38",y:"15",textAnchor:"middle"},t.level),g.a.createElement("text",{fontSize:"10",fontWeight:"bold",fill:t.color,x:"12",y:"62",textAnchor:"middle"},t.level),g.a.createElement("use",{href:"#".concat(n)}))}))}function L(){var e=Object(v.useContext)(I);return Object(j.b)((function(){console.log("compute");var t,n={},r=Object(O.a)(e.groups);try{for(r.s();!(t=r.n()).done;){var a,o=t.value,l=Object(O.a)(o.cards);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(void 0!==c.image){var i=W(c.image);void 0===n[i]&&(n[i]=c.image)}}}catch(u){l.e(u)}finally{l.f()}}}catch(u){r.e(u)}finally{r.f()}return g.a.createElement("svg",{className:"backview view",width:"50",height:"70",viewBox:"0 0 50 70",fontFamily:"Modesto"},g.a.createElement("defs",null,Object.entries(n).map((function(e){var t=Object(x.a)(e,2),n=t[0],r=t[1];return g.a.createElement("image",{key:n,id:n,href:r,width:"25",height:"25",x:"12.5",y:"22.5"})}))),g.a.createElement(F,null))}))}n(60);var P=n(7),U=n.n(P),B=n(9);function H(e){return J.apply(this,arguments)}function J(){return(J=Object(B.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.readAsText(t),r.onload=function(t){null!==r.result?e(r.result.toString()):n(new Error("No result"))},r.onerror=n})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e){return V.apply(this,arguments)}function V(){return(V=Object(B.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(t){null!==r.result?e(r.result.toString()):n(new Error("No result"))},r.onerror=n})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t){var n=document.createElement("a"),r=URL.createObjectURL(new Blob([JSON.stringify(e)],{type:"application/json"}));n.href=r,n.download=t,document.body.appendChild(n),n.click(),setTimeout((function(){document.body.removeChild(n),URL.revokeObjectURL(r)}),0)}function Q(e,t){if(e.type===f.None){var n,r=Object(O.a)(e.data);try{for(r.s();!(n=r.n()).done;){var a=n.value;t.addGroup(z.fromData(a))}}catch(c){r.e(c)}finally{r.f()}}else if(e.type===f.Group){var o=t.addGroup(z.fromData(e.data));t.select(o)}else if(t.selection.type===f.Card||t.selection.type===f.Group){var l=t.groups[t.selection.group].addCard(e.data);t.select(l)}else alert("Attempted to add a card when no group is selected")}n(62);function q(){var e=Object(v.useContext)(I);return Object(j.b)((function(){return e.selection.type!==f.None?g.a.createElement(X,null):g.a.createElement("div",{className:"empty"},"You have nothing selected")}))}function K(){var e=Object(v.useContext)(I);return Object(j.b)((function(){var t;if(e.selection.type!==f.Group)return null;var n=e.selection.group;return g.a.createElement("div",{className:"groupsettings"},g.a.createElement("div",{className:"title"},"Group settings"),g.a.createElement("label",null,"Name:",g.a.createElement("input",{type:"text",value:null!==(t=e.groups[e.selection.group].name)&&void 0!==t?t:"",onChange:function(t){e.groups[n].editName(t.currentTarget.value)}})))}))}function X(){var e=Object(v.useContext)(I),t=Object(v.createRef)();return Object(j.b)((function(){var n,r,a,o,l,c,i,u,s,d,p,m,v,h,y=e.selection.type===f.Card?e.groups[e.selection.group].rawCards[e.selection.card]:e.selection.type===f.Group?e.groups[e.selection.group].defaults:{},b=e.selection.type===f.Card?e.groups[e.selection.group].defaults:void 0,E=function(t){return function(n){n.persist(),e.selection.type===f.Card?e.groups[e.selection.group].editCard(e.selection.card,t,""===n.currentTarget.value?void 0:n.currentTarget.value):e.selection.type===f.Group&&e.groups[e.selection.group].editDefaults(t,""===n.currentTarget.value?void 0:n.currentTarget.value)}},x=function(){var n=Object(B.a)(U.a.mark((function n(r){var a;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.persist(),e.selection.type!==f.Card){n.next=8;break}if(null===t.current){n.next=8;break}if(null===t.current.files){n.next=7;break}return n.next=6,$(t.current.files[0]);case 6:a=n.sent;case 7:e.groups[e.selection.group].editCard(e.selection.card,"image",a);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return g.a.createElement("div",{className:"editor"},g.a.createElement("div",{className:"values"},g.a.createElement(K,null),g.a.createElement("div",{className:"title"},"Card Settings"),g.a.createElement("label",null,"Name:",g.a.createElement("input",{type:"text",value:null!==(n=y.name)&&void 0!==n?n:"",onChange:E("name"),placeholder:null===b||void 0===b?void 0:b.name})),g.a.createElement("label",null,"Casting Time:",g.a.createElement("input",{type:"text",value:null!==(r=y.castingTime)&&void 0!==r?r:"",onChange:E("castingTime"),placeholder:null===b||void 0===b?void 0:b.castingTime})),g.a.createElement("label",null,"Range:",g.a.createElement("input",{type:"text",value:null!==(a=y.range)&&void 0!==a?a:"",onChange:E("range"),placeholder:null===b||void 0===b?void 0:b.range})),g.a.createElement("label",null,"Components:",g.a.createElement("input",{type:"text",value:null!==(o=y.components)&&void 0!==o?o:"",onChange:E("components"),placeholder:null!==(l=null===b||void 0===b?void 0:b.components)&&void 0!==l?l:""})),g.a.createElement("label",null,"Duration:",g.a.createElement("input",{type:"text",value:null!==(c=y.duration)&&void 0!==c?c:"",onChange:E("duration"),placeholder:null===b||void 0===b?void 0:b.duration})),g.a.createElement("label",null,"Physical Components:",g.a.createElement("textarea",{value:null!==(i=y.physicalComponents)&&void 0!==i?i:"",onChange:E("physicalComponents"),placeholder:null===b||void 0===b?void 0:b.physicalComponents})),g.a.createElement("label",null,"Description:",g.a.createElement("textarea",{value:null!==(u=y.description)&&void 0!==u?u:"",onChange:E("description"),placeholder:null===b||void 0===b?void 0:b.description})),g.a.createElement("label",null,"Extended Description:",g.a.createElement("textarea",{value:null!==(s=y.extDescription)&&void 0!==s?s:"",onChange:E("extDescription"),placeholder:null===b||void 0===b?void 0:b.extDescription})),g.a.createElement("label",null,"Class:",g.a.createElement("input",{type:"text",value:null!==(d=y.clazz)&&void 0!==d?d:"",onChange:E("clazz"),placeholder:null===b||void 0===b?void 0:b.clazz})),g.a.createElement("label",null,"Type:",g.a.createElement("input",{type:"text",value:null!==(p=y.type)&&void 0!==p?p:"",onChange:E("type"),placeholder:null===b||void 0===b?void 0:b.type})),g.a.createElement("label",null,"Level:",g.a.createElement("input",{type:"number",min:0,max:99,value:null!==(m=y.level)&&void 0!==m?m:"",onChange:E("level"),placeholder:void 0===(null===b||void 0===b?void 0:b.level)||null===b||void 0===b||null===(v=b.level)||void 0===v?void 0:v.toString()})),g.a.createElement("label",null,"Color:",g.a.createElement("input",{type:"color",value:null!==(h=y.color)&&void 0!==h?h:"",onChange:E("color"),placeholder:null===b||void 0===b?void 0:b.color})),g.a.createElement("label",null,"Image:",g.a.createElement("img",{src:y.image,alt:"Card Back"}),g.a.createElement("input",{type:"file",accept:"image/*",onChange:x,ref:t}))))}))}var Z=n(3);function ee(e){var t=e.id,n=e.children,r=e.selection;return g.a.createElement("div",{onContextMenu:function(e){e.preventDefault(),e.stopPropagation(),e.persist(),Z.contextMenu.hideAll(),setTimeout((function(){return Z.contextMenu.show({event:e,id:t,props:r})}),1)},onClick:function(e){Z.contextMenu.hideAll()}},n)}function te(e){var t=e.setDeleteSelection,n=Object(v.useContext)(I);return Object(j.b)((function(){var e=function(e){var t=e.props;if(t.type===f.Group){var r=n.groups[t.group];Y({type:f.Group,data:r.data},"".concat(r.name,".group.json"))}else if(t.type===f.Card){var a=n.groups[t.group].cards[t.card];Y({type:f.Card,data:a},"".concat(a.name,".card.json"))}else Y({type:f.None,data:Object(A.toJS)(n.groupsData)},"workspace.json")},r=function(e){var t=e.props;if(t.type===f.Group){var r=n.groups[t.group].addCard();n.select(t.group,r)}else if(t.type===f.None){var a=n.addGroup(new z("New Group ".concat(n.groups.length)));n.select(a)}},a=function(e){var n=e.props;return t(n)},o=function(e){var t=e.props;if(t.type===f.Group){var r=n.addGroup(n.groups[t.group]);n.select(r)}else if(t.type===f.Card){var a=n.groups[t.group],o=a.addCard(a.rawCards[t.card]);n.select(t.group,o)}},l=function(e){var t=e.props;t.type===f.Group?(n.moveGroup(t.group,t.group-1),n.select(t.group-1)):t.type===f.Card&&(n.groups[t.group].moveCard(t.card,t.card-1),n.select(t.group,t.card-1))},c=function(e){var t=e.props;t.type===f.Group?(n.moveGroup(t.group,t.group+1),n.select(t.group+1)):t.type===f.Card&&(n.groups[t.group].moveCard(t.card,t.card+1),n.select(t.group,t.card+1))},i=function(e){var t=e.props;return t.type===f.Group?0===t.group:t.type!==f.Card||0===t.card},u=function(e){var t=e.props;return t.type===f.Group?t.group===n.groups.length-1:t.type!==f.Card||t.card===n.groups[t.group].cards.length-1};return g.a.createElement(g.a.Fragment,null,g.a.createElement(Z.Menu,{id:"none-contextmenu"},g.a.createElement(Z.Item,{onClick:r},"Add Group"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{onClick:e},"Download All"),g.a.createElement(Z.Item,{disabled:!0},"Render All"),g.a.createElement(Z.Item,{disabled:!0},"Print All")),g.a.createElement(Z.Menu,{id:"group-contextmenu"},g.a.createElement(Z.Item,{onClick:function(e){var t=e.props;t.type===f.Group&&n.select(t.group)},disabled:function(e){var t=e.props;return t.type===f.Group&&n.selection.type===f.Group&&n.selection.group===t.group}},"Edit"),g.a.createElement(Z.Item,{onClick:r},"Add Card"),g.a.createElement(Z.Item,{onClick:o},"Duplicate"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{onClick:l,disabled:i},"Move Up"),g.a.createElement(Z.Item,{onClick:c,disabled:u},"Move Down"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{onClick:e},"Download Group"),g.a.createElement(Z.Item,{disabled:!0},"Render Group"),g.a.createElement(Z.Item,{disabled:!0},"Print Group"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{className:"delete",onClick:a},"Delete")),g.a.createElement(Z.Menu,{id:"card-contextmenu"},g.a.createElement(Z.Item,{onClick:o},"Duplicate"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{onClick:l,disabled:i},"Move Up"),g.a.createElement(Z.Item,{onClick:c,disabled:u},"Move Down"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{onClick:e},"Download Card"),g.a.createElement(Z.Item,{disabled:!0},"Render Card"),g.a.createElement(Z.Item,{disabled:!0},"Print Card"),g.a.createElement(Z.Separator,null),g.a.createElement(Z.Item,{className:"delete",onClick:a},"Delete")))}))}var ne=n(13),re=n(17);function ae(e){return function(t){return void 0!==t.name&&t.name.toLowerCase().includes(e.toLowerCase())}}function oe(e){var t=e.groupid,n=e.id,r=e.search,a=Object(v.useContext)(I),o=function(){return a.select(t,n)};return Object(j.b)((function(){var e=a.groups[t].cards[n],l=""!==r&&(a.selection.type!==f.Card||a.selection.card!==n||a.selection.group!==t)&&ae(r)(e);return g.a.createElement(ee,{id:"card-contextmenu",selection:{type:f.Card,card:n,group:t}},g.a.createElement("div",{className:"card ".concat(a.selection.type===f.Card&&a.selection.card===n&&a.selection.group===t?"selected":"notselected"),onClick:o,hidden:l},ce(e.name,r)))}))}function le(e){var t=e.id,n=e.search,r=Object(v.useState)(!1),a=Object(x.a)(r,2),o=a[0],l=a[1],c=Object(v.useContext)(I),i=Object(j.b)((function(){return""!==n&&0===c.groups[t].cards.filter(ae(n)).length&&!c.groups[t].name.toLowerCase().includes(n.toLowerCase())})),u=function(){return l(!o)};return Object(j.b)((function(){return g.a.createElement(ee,{id:"group-contextmenu",selection:{type:f.Group,group:t}},g.a.createElement("div",{className:"group ".concat(c.selection.type===f.Group&&c.selection.group===t?"selected":"notselected"),hidden:i},g.a.createElement("div",{className:"title",onClick:u},g.a.createElement("div",{className:"caret"},g.a.createElement(re.a,{icon:o?ne.b:ne.a})),g.a.createElement("div",{className:"name"},g.a.createElement(j.a,null,(function(){return g.a.createElement(g.a.Fragment,null,ce(c.groups[t].name,n))})))),g.a.createElement("div",{className:"cards",hidden:o},g.a.createElement(j.a,null,(function(){return g.a.createElement(g.a.Fragment,null,c.groups[t].cards.map((function(e,r){return g.a.createElement(oe,{key:r,id:r,groupid:t,search:n})})))})))))}))}n(73);function ce(e,t){return void 0!==t&&""!==t?void 0!==e&&""!==e?e.split(new RegExp("(".concat(t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),")"),"gi")).map((function(e,n){return g.a.createElement("span",{className:e.toLowerCase()===t.toLowerCase()?"highlight":"",key:n},e)})):void 0:e}function ie(){var e=Object(v.useState)(""),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(v.useState)(!1),o=Object(x.a)(a,2),l=o[0],c=o[1],i=Object(v.useState)(!0),u=Object(x.a)(i,2),s=u[0],d=u[1],p=Object(v.useContext)(I),m=function(){var e=Object(B.a)(U.a.mark((function e(t){var n,r,a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.persist(),c(!1),n=0;case 4:if(!(n<t.dataTransfer.items.length)){e.next=17;break}if("application/json"!==(r=t.dataTransfer.files[n]).type&&!r.name.endsWith(".json")){e.next=13;break}return e.next=9,H(r);case 9:a=e.sent,Q(JSON.parse(a),p),e.next=14;break;case 13:console.error('Format "'.concat(r.type,'" unrecognised'));case 14:n++,e.next=4;break;case 17:t.dataTransfer.items.clear();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return g.a.createElement("div",{className:"explorer"},g.a.createElement(ee,{id:"none-contextmenu",selection:{type:f.None}},g.a.createElement("div",{className:"children ".concat(l?"dragover":"nodragover"),onScroll:function(e){s!==(0===e.currentTarget.scrollTop)&&d(0===e.currentTarget.scrollTop)},onDrop:m,onDragEnter:function(){return c(!0)},onDragExit:function(){return c(!1)},onDragOver:function(e){e.preventDefault()}},g.a.createElement(j.a,null,(function(){return g.a.createElement(g.a.Fragment,null,p.groups.map((function(e,t){return g.a.createElement(le,{key:t,id:t,search:n})})))})))),g.a.createElement("div",{className:"head ".concat(s?"top":"scrolled")},g.a.createElement("div",{className:"search"},g.a.createElement("input",{type:"text",onChange:function(e){return r(e.target.value)},className:""!==n?"short":void 0,value:n}),g.a.createElement("div",{className:"x",style:{display:""!==n?void 0:"none"},onClick:function(){return r("")}},g.a.createElement(re.a,{icon:ne.d}))),g.a.createElement("div",{className:"add",onClick:function(){var e=p.addGroup(new z("New Group ".concat(p.groups.length)));p.select(e)}},g.a.createElement(re.a,{icon:ne.c}))))}var ue={content:{background:"#1a1a1a",border:"solid 1px #666666",color:"#b8b8b8",height:"150px",left:"50%",maxHeight:"calc(100% - 40px)",maxWidth:"calc(100% - 40px)",minHeight:"100px",minWidth:"100px",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:"500px"},overlay:{background:"#000000AA"}};function se(e){var t=e.deleteSelection,n=e.setDeleteSelection,r=Object(v.useContext)(I),a=function(){if(t.type===f.Group){var e=r.groups[t.group];return g.a.createElement("span",{className:"info"},"Are you sure you want to delete the group ",g.a.createElement("span",{className:"name"},e.name)," and all of its cards")}if(t.type===f.Card){var n=r.groups[t.group].cards[t.card];return g.a.createElement("span",{className:"info"},"Are you sure you want to delete the card ",g.a.createElement("span",{className:"name"},n.name))}return g.a.createElement("div",{className:"error"},"You have reached an invalid state, please press cancel")};return g.a.createElement(E.a,{isOpen:t.type!==f.None,style:ue},g.a.createElement("div",{className:"modal"},g.a.createElement("div",{className:"dialog"},g.a.createElement(j.a,null,a),g.a.createElement("div",{className:"warn"},"This action is ",g.a.createElement("span",{className:"irreversible"},"irreversible")),g.a.createElement("div",{className:"buttons"},g.a.createElement("button",{onClick:function(){return n({type:f.None})}},"Cancel"),g.a.createElement("button",{className:"delete",onClick:function(){t.type===f.Group?(r.select(),r.removeGroup(t.group)):t.type===f.Card?(r.select(t.group),r.groups[t.group].removeCard(t.card)):console.warn("Attempted to delete card when no card selected for deletion"),n({type:f.None})}},"Delete")))))}function de(){var e=Object(v.useContext)(I);Object(v.useEffect)((function(){Object(C.create)({jsonify:!0,storage:localStorage})("state",e)}),[]);var t=Object(v.useState)({type:f.None}),n=Object(x.a)(t,2),r=n[0],a=n[1];return g.a.createElement("div",{className:"app"},g.a.createElement("div",{className:"workspace"},g.a.createElement(ie,null),g.a.createElement(te,{setDeleteSelection:a}),g.a.createElement(se,{setDeleteSelection:a,deleteSelection:r})),g.a.createElement("div",{className:"settings"},g.a.createElement(q,null)),g.a.createElement("div",{className:"renders"},g.a.createElement(R,null),g.a.createElement(L,null)))}n(74);var pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||null!==window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!==t&&(t.onstatechange=function(){"installed"===t.state&&(null!==navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}E.a.setAppElement("#root"),y.a.render(g.a.createElement(de,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");pe?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):me(e)}))}}(),document.oncontextmenu=function(e){e.preventDefault()}}},[[37,1,2]]]);
//# sourceMappingURL=main.89de7d30.chunk.js.map