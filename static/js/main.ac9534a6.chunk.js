(this["webpackJsonpheroes-villains"]=this["webpackJsonpheroes-villains"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(20),a(8)),s=a.n(o),u=a(13),i=a(5),m=a(27),h=a(29),p=a(30);var f=function(e){var t=e.getCharacter,a=Object(n.useState)(""),c=Object(i.a)(a,2),l=c[0];return c[1],r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Label,null,"Search for a hero or villain!"),r.a.createElement(h.a.Control,{value:l,onChange:function(){},placeholder:"e.g. Superman"}),r.a.createElement(h.a.Text,{className:"text-muted"},"This will be an error message.")),r.a.createElement(p.a,{type:"sumbit",onClick:function(){return t()}},"Get Character")))},E=a(14);var v=function(e){var t=e.characterInfo;return console.log("characterInfo",t),r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(E.a,null,r.a.createElement("h1",null,"Character Card")),r.a.createElement(E.a,null,r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("p",null,"Secret Identity: ",t.biography["full-name"]),r.a.createElement("p",null,"Intelligence: ",t.powerstats.intelligence)))},d=a(28);var g=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("supergirl"),o=Object(i.a)(l,2),h=o[0],p=(o[1],function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10158552412591215/search/".concat(h));case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,t.ok){e.next=9;break}throw Error(t.statusText);case 9:c(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}());return r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement("h1",null,"Heroes and Villains")),r.a.createElement(f,{getCharacter:p}),a?r.a.createElement(v,{characterInfo:a.results[0]}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ac9534a6.chunk.js.map