(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),o=a.n(r),l=a(3),u=a.n(l),s=a(4),i=a(1),m=function(){return c.a.createElement("ul",{className:"navbar"},c.a.createElement("li",null,"Home"),c.a.createElement("li",null,"About"))},p=a(6),f=a.n(p);a(7);var b=a(5),d=a.n(b);function E(e){var t=e.pokemon,a=e.showPokemonDetail,r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],m=o[1],p=Object(n.useState)(!0),b=Object(i.a)(p,2),E=b[0],k=b[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(t.url);case 2:a=e.sent,m(a.data.sprites.front_default),k(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{onClick:function(){return a(t)}},c.a.createElement("img",{src:E?f.a:l,alt:"img unavailable",className:"pokemon-img"}),c.a.createElement("p",{className:"pokemon-name"},E?"loading...":t.name))}function k(e){var t=e.pokemon,a=e.showPokemonDetail;return c.a.createElement("div",{className:"pokemon-grid"},t.map((function(e){return c.a.createElement(E,{key:e.name,pokemon:e,showPokemonDetail:a})})))}function j(e){var t=e.previousPage,a=e.resetPage,n=e.nextPage,r=e.lastPage;return c.a.createElement("div",{className:"pagination"},c.a.createElement("button",{className:"btn-primary",onClick:a},"First page"),c.a.createElement("button",{className:"btn-primary",onClick:t},"Previous"),c.a.createElement("button",{className:"btn-primary",onClick:n},"Next"),c.a.createElement("button",{className:"btn-primary",onClick:r},"Last page"))}function O(e){var t=e.query,a=Object(n.useState)(""),r=Object(i.a)(a,2),o=r[0],l=r[1];return c.a.createElement("form",{className:"form-group"},c.a.createElement("i",{className:"fas fa-search"}),c.a.createElement("input",{type:"text",placeholder:"Input pokemon name",className:"search-text",autoFocus:!0,onChange:function(e){l(e.target.value)}}),c.a.createElement("button",{className:"btn-primary",onClick:function(e){e.preventDefault(),t(o)}},"Search"))}var v=function(e){var t=e.currentPokemon,a=e.showPokemonDetail,r=Object(n.useState)([]),o=Object(i.a)(r,2),l=o[0],m=o[1],p=Object(n.useState)({}),f=Object(i.a)(p,2),b=f[0],E=f[1],k=Object(n.useState)(""),j=Object(i.a)(k,2),O=j[0],v=j[1],g=Object(n.useState)(""),h=Object(i.a)(g,2),y=h[0],N=h[1],S=Object(n.useState)([{slot:1,type:{name:"",url:""}}]),P=Object(i.a)(S,2),x=P[0],w=P[1],C=Object(n.useState)(""),D=Object(i.a)(C,2),F=D[0],q=D[1],H=Object(n.useState)(""),I=Object(i.a)(H,2),J=I[0],_=I[1],A=Object(n.useState)(!0),B=Object(i.a)(A,2),L=(B[0],B[1]);return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(t.url);case 2:a=e.sent,m("https://pokeres.bastionbot.org/images/pokemon/".concat(a.data.id,".png")),v(a.data.id),N(a.data.name),w(a.data.types),q(a.data.weight),_(a.data.height),E(a.data.sprites),L(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"pokemon-detail ",onClick:a},c.a.createElement("img",{className:"pokemon-detail-left",src:O>807?b.front_default:l}),c.a.createElement("div",{className:"pokemon-detail-right"},c.a.createElement("div",{className:"pokemon-detail-right-top"},c.a.createElement("p",null,"#",O," ",y),c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"Types"),x.map((function(e){return c.a.createElement("td",{key:e.slot},e.type.name)}))),c.a.createElement("tr",null,c.a.createElement("td",null,"Height"),c.a.createElement("td",null,J)),c.a.createElement("tr",null,c.a.createElement("td",null,"Weight"),c.a.createElement("td",null,F))))))),Object.values(b).map((function(e,t){return e?c.a.createElement("img",{key:t,src:e}):c.a.createElement(c.a.Fragment,{key:t})})))},g="https://pokeapi.co/api/v2/pokemon";var h=function(){var e=Object(n.useState)(!0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),p=l[0],f=l[1],b=Object(n.useState)(g),E=Object(i.a)(b,2),h=E[0],y=E[1],N=Object(n.useState)({}),S=Object(i.a)(N,2),P=S[0],x=S[1],w=Object(n.useState)(null),C=Object(i.a)(w,2),D=C[0],F=C[1],q=Object(n.useState)(null),H=Object(i.a)(q,2),I=H[0],J=H[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d()(h);case 2:(t=e.sent).data.results&&(f(t.data.results),F(t.data.previous),J(t.data.next)),t.data.forms&&(F(null),J(null),f([{name:t.data.name,url:h}]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),c.a.createElement("div",{className:"container"},c.a.createElement(m,null),a?c.a.createElement("div",null,c.a.createElement(j,{previousPage:function(){D&&y(D)},resetPage:function(){y(g)},nextPage:function(){I&&y(I)},lastPage:function(){y("https://pokeapi.co/api/v2/pokemon?limit=20&offset=877")}}),c.a.createElement(O,{query:function(e){if(e){var t="".concat(g,"/").concat(e);y(t)}}}),c.a.createElement(k,{pokemon:p,showPokemonDetail:function(e){r(!a),x(e)}})):c.a.createElement(v,{currentPokemon:P,showPokemonDetail:function(){return r(!a)}}))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/running.b0e3f776.gif"},7:function(e,t,a){}},[[19,1,2]]]);
//# sourceMappingURL=main.d0372914.chunk.js.map