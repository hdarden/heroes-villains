(this["webpackJsonpheroes-villains"]=this["webpackJsonpheroes-villains"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=(a(20),a(8)),s=a.n(o),i=a(13),u=a(6),m=a(27),h=a(30),p=a(31);var f=function(e){var t=e.setCharacterName,a=e.getCharacter,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],s=l[1];return r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),t(o),a(),s("")}},r.a.createElement(h.a.Group,{controlId:"formBasicEmail"},r.a.createElement(h.a.Label,null,"Search for a hero or villain!"),r.a.createElement(h.a.Control,{value:o,onChange:function(e){s(e.target.value)},placeholder:"e.g. Superman"}),r.a.createElement(h.a.Text,{className:"text-muted"},"This will be an error message.")),r.a.createElement(p.a,{type:"submit"},"Get Character")))},E=a(14),v=a(28);var g=function(e){var t=e.characterInfo;return console.log("characterInfo",t),r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement(E.a,null,r.a.createElement(v.a,{src:t.image.url,alt:"Superhero or villain"})),r.a.createElement(E.a,null,r.a.createElement("p",null,"Name: ",t.name),r.a.createElement("p",null,"Secret Identity: ",t.biography["full-name"]),r.a.createElement("p",null,"Intelligence: ",t.powerstats.intelligence)))},d=a(29);var b=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)("supergirl"),o=Object(u.a)(l,2),h=o[0],p=o[1],E=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a),e.prev=1,e.next=4,fetch("https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/10158552412591215/search/".concat(h));case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,t.ok){e.next=10;break}throw Error(t.statusText);case 10:c(n),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(d.a,null,r.a.createElement(m.a,{className:"justify-content-md-center"},r.a.createElement("h1",null,"Heroes and Villains")),r.a.createElement(f,{setCharacterName:p,getCharacter:E}),a?r.a.createElement(g,{characterInfo:a.results[0]}):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(25);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.b5d9dfe7.chunk.js.map