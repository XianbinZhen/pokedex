(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{27:function(e,t,a){},29:function(e,t,a){e.exports=a.p+"static/media/pokemon.3cfd5e85.svg"},31:function(e,t,a){e.exports=a.p+"static/media/running.b0e3f776.gif"},32:function(e,t,a){e.exports=a(60)},60:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),l=a.n(c),o=a(8),i=a.n(o),s=a(10),m=a(2),u=a(1),p=a(11),f=a.n(p),b=a(12),E=a(29),d=a.n(E),k=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav-logo"},r.a.createElement("img",{className:"nav-logo-img",src:d.a,alt:"pokemon"}),r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",null,r.a.createElement(b.b,{to:"/",className:"link-style"},"Home")),r.a.createElement("li",null,r.a.createElement(b.b,{to:"/about",className:"link-style"},"About")))))},h=a(31),g=a.n(h);function v(e){var t=e.pokemon,a=e.showPokemonDetail,c=Object(n.useState)([]),l=Object(m.a)(c,2),o=l[0],u=l[1],p=Object(n.useState)(!0),b=Object(m.a)(p,2),E=b[0],d=b[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(t.url);case 2:a=e.sent,u(a.data.sprites.front_default),d(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.url]),r.a.createElement("div",{onClick:function(){return a(t)}},r.a.createElement("img",{src:E?g.a:o,alt:"img unavailable",className:"pokemon-img"}),r.a.createElement("p",{className:"pokemon-name"},E?"loading...":t.name))}a(27);function j(e){var t=e.pokemon,a=e.showPokemonDetail;return r.a.createElement("div",{className:"pokemon-grid"},t.map((function(e){return r.a.createElement(v,{key:e.name,pokemon:e,showPokemonDetail:a})})))}function O(e){var t=e.previousPage,a=e.resetPage,n=e.nextPage,c=e.lastPage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{className:"btn-primary",onClick:a},"First page"),r.a.createElement("button",{className:"btn-primary",onClick:t},"Previous"),r.a.createElement("button",{className:"btn-primary",onClick:n},"Next"),r.a.createElement("button",{className:"btn-primary",onClick:c},"Last page"))}function y(e){var t=e.query,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{className:"form-group"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{type:"text",placeholder:"Input pokemon name",className:"search-text",autoFocus:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("button",{className:"btn-primary",onClick:function(e){e.preventDefault(),t(l)}},"Search"))}var x=function(e){var t=e.currentPokemon,a=e.showPokemonDetail,c=Object(n.useState)([]),l=Object(m.a)(c,2),o=l[0],u=l[1],p=Object(n.useState)({}),b=Object(m.a)(p,2),E=b[0],d=b[1],k=Object(n.useState)(""),h=Object(m.a)(k,2),g=h[0],v=h[1],j=Object(n.useState)(""),O=Object(m.a)(j,2),y=O[0],x=O[1],N=Object(n.useState)([{slot:1,type:{name:"",url:""}}]),w=Object(m.a)(N,2),P=w[0],S=w[1],C=Object(n.useState)(""),D=Object(m.a)(C,2),_=D[0],A=D[1],I=Object(n.useState)(""),z=Object(m.a)(I,2),H=z[0],T=z[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(t.url);case 2:a=e.sent,u("https://pokeres.bastionbot.org/images/pokemon/".concat(a.data.id,".png")),v(a.data.id),x(a.data.name),S(a.data.types),A(a.data.weight),T(a.data.height),d(a.data.sprites);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.url]),r.a.createElement("div",null,r.a.createElement("div",{className:"pokemon-detail "},r.a.createElement("img",{className:"pokemon-detail-left",src:g>807?E.front_default:o,alt:"pokemon-sprites"}),r.a.createElement("div",{className:"pokemon-detail-right"},r.a.createElement("div",{className:"pokemon-detail-right-top"},r.a.createElement("p",null,"#",g," ",r.a.createElement("br",null),y)),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Types"),P.map((function(e){return r.a.createElement("td",{key:e.slot},e.type.name)}))),r.a.createElement("tr",null,r.a.createElement("td",null,"Height"),r.a.createElement("td",null,H)),r.a.createElement("tr",null,r.a.createElement("td",null,"Weight"),r.a.createElement("td",null,_)))))),r.a.createElement("div",{className:"pokemon-detail-sprites"},Object.values(E).map((function(e,t){return e&&r.a.createElement("img",{key:t,src:e,alt:"sprites"})}))),r.a.createElement("button",{className:"back-btn",onClick:a},"Back"))},N=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"This is a project create with ",r.a.createElement("i",{className:"fab fa-react fa-2x"})," React. Using"," ",r.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank"},"PokeAPI")," ","as input. Search option you can only input the full name of a pokemon."))},w={display:"flex",justifyContent:"space-between",alignItems:"center",textAlign:"center",padding:"0.4rem 2rem",backgroundColor:"#333",color:"#eee",marginTop:"10px"},P={border:"none",minHeight:"10px",padding:"5px",marginRight:"10px",color:"#eee"},S=function(){return r.a.createElement("footer",{style:w},r.a.createElement("p",null,"\xa9 Xianbin Zhen 2020"),r.a.createElement("div",null,r.a.createElement("a",{style:P,rel:"noopener noreferrer",href:"https://xianbinzhen.github.io/mypage/index.html",target:"_blank"},r.a.createElement("i",{className:"fas fa-home "})),r.a.createElement("a",{href:"mailto:xianbin.zhen001@umb.edu",style:P},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("a",{style:P,rel:"noopener noreferrer",href:"https://www.linkedin.com/in/xianbin-zhen-93ba311a1/",target:"_blank"},r.a.createElement("i",{className:"fab fa-linkedin "})),r.a.createElement("a",{style:P,rel:"noopener noreferrer",href:"https://github.com/XianbinZhen",target:"_blank"},r.a.createElement("i",{className:"fab fa-github"}))))},C="https://pokeapi.co/api/v2/pokemon";var D=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(m.a)(l,2),p=o[0],b=o[1],E=Object(n.useState)(C),d=Object(m.a)(E,2),h=d[0],g=d[1],v=Object(n.useState)({}),w=Object(m.a)(v,2),P=w[0],D=w[1],_=Object(n.useState)(null),A=Object(m.a)(_,2),I=A[0],z=A[1],H=Object(n.useState)(null),T=Object(m.a)(H,2),q=T[0],B=T[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()(h);case 2:(t=e.sent).data.results&&(b(t.data.results),z(t.data.previous),B(t.data.next)),t.data.forms&&(z(null),B(null),b([{name:t.data.name,url:h}]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),r.a.createElement("div",{className:"container"},r.a.createElement(k,null),r.a.createElement(u.a,{exact:!0,path:"/"},a?r.a.createElement("div",null,r.a.createElement(O,{previousPage:function(){I&&g(I)},resetPage:function(){g(C)},nextPage:function(){q&&g(q)},lastPage:function(){g("https://pokeapi.co/api/v2/pokemon?limit=20&offset=877")}}),r.a.createElement(y,{query:function(e){if(e){var t="".concat(C,"/").concat(e);g(t)}}}),r.a.createElement(j,{pokemon:p,showPokemonDetail:function(e){c(!a),D(e)}})):r.a.createElement(x,{currentPokemon:P,showPokemonDetail:function(){return c(!a)}})),r.a.createElement(u.a,{exact:!0,path:"/about"},r.a.createElement(N,null)),r.a.createElement(S,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(D,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c6a00885.chunk.js.map