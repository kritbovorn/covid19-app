(this["webpackJsonprobo-friends"]=this["webpackJsonprobo-friends"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(6),s=n.n(a),o=(n(15),n(2)),i=n.n(o),u=n(5),h=n(4),l=n(7),d=n(8),j=n(10),f=n(9),p=(n(17),n(18),n(19),n(0)),b=function(t){var e=t.stats;return Object(p.jsxs)("div",{className:"country",children:[Object(p.jsx)("img",{src:"https://www.countryflags.io/".concat(e.CountryCode,"/flat/64.png"),alt:e.Countr2}),Object(p.jsx)("h2",{children:e.Country}),Object(p.jsxs)("div",{className:"describe",children:[Object(p.jsx)("p",{children:"Active : ".concat(e.Active)}),Object(p.jsx)("p",{children:"Confirmed : ".concat(e.Confirmed)}),Object(p.jsx)("p",{children:"Deaths : ".concat(e.Deaths)}),Object(p.jsx)("p",{children:"Recovered : ".concat(e.Recovered)})]})]})},v=function(t){var e=t.stats;return Object(p.jsx)("div",{className:"countrylist",children:e.map((function(t){return Object(p.jsx)(b,{stats:t},t.CountryCode)}))})},O=(n(21),function(t){var e=t.placeholder,n=t.handleChange;return Object(p.jsx)("input",{type:"search",className:"search",placeholder:e,onChange:n})}),x=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).handleChange=function(e){t.setState({searchField:e.target.value})},t.state={countries:[],stats:[],searchField:""},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(i.a.mark((function t(){var e,n,c=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/countries");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({countries:n}),this.state.countries.forEach(function(){var t=Object(h.a)(i.a.mark((function t(e){var n,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.covid19api.com/total/country/".concat(e.Slug));case 2:return n=t.sent,t.next=5,n.json();case 5:(r=t.sent).length&&c.setState((function(t){return{stats:t.stats.concat(Object(u.a)(Object(u.a)({},r[r.length-1]),{},{CountryCode:e.ISO2}))}}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.stats,n=t.searchField,c=e.filter((function(t){return t.Country.toLowerCase().includes(n.toLowerCase())}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Covid19 Stats Web App"}),Object(p.jsx)(O,{placeholder:"\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",handleChange:this.handleChange}),Object(p.jsx)(v,{stats:c})]})}}]),n}(r.a.Component),C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),a(t),s(t)}))};s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(x,{})}),document.getElementById("root")),C()}],[[22,1,2]]]);
//# sourceMappingURL=main.ab1ae470.chunk.js.map