(this["webpackJsonpreact-router-3"]=this["webpackJsonpreact-router-3"]||[]).push([[0],{22:function(t,e,c){},23:function(t,e,c){},30:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),s=c(16),i=c.n(s),o=(c(22),c(23),c(9)),a=c(2),j=c(10),l=c(1),u=function(){var t=Object(n.useState)(),e=Object(j.a)(t,2),c=e[0],r=e[1],s=Object(a.f)();return Object(n.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/albums").then((function(t){return t.json()})).then((function(t){return r(t)}))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h2",{children:"ALBUMS"}),null===c||void 0===c?void 0:c.map((function(t,e){return Object(l.jsx)("div",{style:{border:"1px solid",marginTop:"1rem",width:"50%",cursor:"pointer"},children:Object(l.jsxs)("p",{onClick:function(){return e=t.id,s.push("details/".concat(e)),void console.log(e);var e},children:["Title: ",t.title.toUpperCase()]})},e)}))]})},d=function(t){var e=Object(n.useState)(),c=Object(j.a)(e,2),r=c[0],s=c[1],i=Object(a.f)(),o=Object(a.g)().id,u="https://jsonplaceholder.typicode.com/albums/".concat(o);return Object(n.useEffect)((function(){fetch(u).then((function(t){return t.json()})).then((function(t){return s(t)}))}),[o]),Object(l.jsx)("div",{children:Object(l.jsxs)("h2",{children:["Details of The Album",Object(l.jsxs)("div",{className:"box",children:["Album",o,Object(l.jsx)("p",{children:"TITLE"}),Object(l.jsxs)("p",{children:[" ",null===r||void 0===r?void 0:r.title.toUpperCase()]}),Object(l.jsxs)("p",{children:["Country:"," ",Object(l.jsx)("img",{alt:"pic",src:"https://api.first.org/data/v1/".concat(o)})]}),Object(l.jsxs)("p",{children:["Singer:"," ",Object(l.jsx)("img",{alt:"pic",src:"https://avatars.dicebear.com/v2/avataaars/".concat(o,".svg")}),Object(l.jsx)("button",{onClick:function(){return i.push("/")},children:"HOME"})]})]})]})})};var b=function(){return Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(a.a,{path:"/details/:id",component:d})]})})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.7a6a6430.chunk.js.map