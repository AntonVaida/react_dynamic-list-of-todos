(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),o=c(1),i=(c(10),c(11),c(3)),d=c.n(i),r=c(0),j=function(e){var t=e.getVisibleTodos,c=e.onSelectTodo,s=e.selectTodo,a=t();return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:a.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:d()("far",{"fa-eye-slash":(null===s||void 0===s?void 0:s.id)===e.id,"fa-eye":(null===s||void 0===s?void 0:s.id)!==e.id})})})})})]})}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.onQuery,c=e.query,a=e.sortBy,n=e.onSortType;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:a,onChange:function(e){return n(e)},children:[Object(r.jsx)("option",{value:s.All,children:"All"}),Object(r.jsx)("option",{value:s.Active,children:"Active"}),Object(r.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return t(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),c&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete","aria-label":"delete-button",onClick:function(){return t("")}})})]})]})},b=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api").concat(e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.onSelectTodo,c=e.selectTodo,s=Object(o.useState)(),a=Object(l.a)(s,2),n=a[0],i=a[1];return Object(o.useEffect)((function(){var e;(e=c.userId,h("/users/".concat(e))).then((function(e){return i(e)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return t(null)},"aria-label":"close_button"})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:d()({"has-text-success":c.completed,"has-text-danger":!c.completed}),children:c.completed?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(b,{})]})},O=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(""),i=Object(l.a)(n,2),d=i[0],O=i[1],x=Object(o.useState)(s.All),f=Object(l.a)(x,2),p=f[0],v=f[1],N=Object(o.useState)(null),y=Object(l.a)(N,2),g=y[0],T=y[1];Object(o.useEffect)((function(){h("/todos").then((function(e){return a(e)}))}),[]);var S=function(e){T(e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(u,{onQuery:function(e){O(e)},query:d,sortBy:p,onSortType:function(e){v(e.target.value)}})}),Object(r.jsx)("div",{className:"block",children:0===c.length?Object(r.jsx)(b,{}):Object(r.jsx)(j,{getVisibleTodos:function(){var e=c.filter((function(e){return e.title.toLowerCase().includes(d.toLowerCase())}));switch(p){case s.Active:return e.filter((function(e){return!e.completed}));case s.Completed:return e.filter((function(e){return e.completed}));default:return e}},onSelectTodo:S,selectTodo:g})})]})})}),g&&Object(r.jsx)(m,{onSelectTodo:S,selectTodo:g})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b9fadd3e.chunk.js.map