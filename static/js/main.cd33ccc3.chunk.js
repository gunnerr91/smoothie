(this.webpackJsonpgithubpagedemo=this.webpackJsonpgithubpagedemo||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(6),i=n.n(o),a=(n(11),n(2)),r=n(5),j=n(3),u=n.p+"static/media/logo.6ce24c58.svg",d=(n(12),n(0));var b=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!1),i=Object(j.a)(o,2),b=i[0],h=i[1],l=Object(c.useState)({Fajr:"",Dhuhr:"",Asr:"",Maghrib:"",Isha:""}),p=Object(j.a)(l,2),f=p[0],O=p[1];return Object(c.useEffect)((function(){fetch("https://api.pray.zone/v2/times/today.json?city=london&school=1").then((function(e){return e.json()})).then((function(e){h(!0);var t=function(t){void 0!==f[t]&&O((function(n){return Object(r.a)(Object(r.a)({},n),{},Object(a.a)({},t,e.results.datetime[0].times[t]))}))};for(var n in e.results.datetime[0].times)t(n)}),(function(e){h(!0),s(e)}))}),[]),n?Object(d.jsxs)("div",{children:["Error: ",n.message]}):b?(console.log(f.for),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(d.jsx)("p",{children:"London prayer time for today"}),Object.keys(f).map((function(e,t){return Object(d.jsxs)("p",{children:[e," prayer time: ",f[e]]},t)}))]})})):Object(d.jsx)("div",{children:"Loading..."})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.cd33ccc3.chunk.js.map