(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{150:function(e,t,a){},226:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(51),s=a.n(r),o=(a(226),a(227),a(150),a(12)),i=a(440),l=a(3);var u=function(){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:"bg-gray d-flex justify-content-center py-3 font-weight-bold w-100 align-items-center ez-xl",children:[Object(l.jsx)("div",{className:"text-white",children:"EASY FILERS DASHBOARD V2.0 \u9055\u53cd\u5206\u6790"}),Object(l.jsxs)("div",{className:"",children:[Object(l.jsx)(i.a,{className:"mx-2",children:"\u73fe\u5834\u8a18\u9332\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0"}),Object(l.jsx)(i.a,{children:"\u30c8\u30c3\u30d7\u30da\u30fc\u30b8"})]})]})})},d=a(23),j=a(116),b=a(142),h=a.n(b);a(230);var f=function(e){var t=Object(c.useState)("60cd6078061f9c0ee82403aa"),a=Object(o.a)(t,2),r=a[0],s=a[1],u=Object(j.b)({defaultValues:{firstName:"bill",lastName:"luo",email:"bluebill1049@hotmail.com"}}),b=(u.value,u.control),f=u.register,O=u.handleSubmit,m=u.formState.errors,p=function(e){return e.getFullYear()+"-"+("00"+(e.getMonth()+1).toString()).slice(-2)};return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)("form",{onSubmit:O((function(t){t.startDate=p(t.startDate),t.endDate=p(t.endDate),console.log(t),e.handleOnSubmit(t)})),children:Object(l.jsxs)("div",{className:"bg-light p-2 d-flex justify-content-between",children:[Object(l.jsx)("select",{value:r,onChange:function(e){s(r=e.target.value),console.log(r)},name:"region",className:"py-1 me-3 w-100 rounded",children:e.regionData&&e.regionData.map((function(e,t){return Object(l.jsx)("option",{value:e.id,selected:e.id==r,children:e.name},t)}))}),m.region&&m.region.message,Object(l.jsx)("select",Object(d.a)(Object(d.a)({name:"store",className:"py-1 me-3 w-100 rounded"},f("store",{})),{},{children:e.storeData&&void 0!==e.storeData&&Object.values(e.storeData).filter((function(e){return e.regionId===r})).map((function(e,t){return Object(l.jsx)("option",{value:e.id,children:e.name},t)}))})),m.store&&m.store.message,Object(l.jsxs)("select",Object(d.a)(Object(d.a)({name:"dataType",className:"py-1 me-3 w-100 rounded"},f("dataType",{})),{},{children:[Object(l.jsx)("option",{value:"60cdc047db2269136c7c28ac",children:"\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af"}),Object(l.jsx)("option",{value:"60cdc056db2269136c7c28ad",children:"\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332"}),Object(l.jsx)("option",{value:"60cdc065db2269136c7c28ae",children:"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332"}),Object(l.jsx)("option",{value:"60cdc09adb2269136c7c28b0",children:"\u305d\u306e\u4ed6"}),Object(l.jsx)("option",{value:"61349b3499e12e0b857cef82",children:"\u65e5\u5831"})]})),Object(l.jsxs)("select",Object(d.a)(Object(d.a)({name:"charts",className:"py-1 me-3 w-100 rounded"},f("charts",{})),{},{children:[Object(l.jsx)("option",{value:"boardType",children:"BoradType"}),Object(l.jsx)("option",{value:"barType",children:"BarType"}),Object(l.jsx)("option",{value:"stackBarType",children:"StackBarType"}),Object(l.jsx)("option",{value:"pieType",children:"PieType"})]})),m.store&&m.store.message,Object(l.jsx)(j.a,{name:"startDate",control:b,defaultValue:new Date("May 1,2021"),render:function(e){var t=e.field,a=t.onChange,c=t.value;return Object(l.jsx)(h.a,{className:"p-2 rounded border-gray ez-input w-100",onChange:a,selected:c,dateFormat:"MM/yyyy",showMonthYearPicker:!0,showFullMonthYearPicker:!0})}}),Object(l.jsx)("span",{className:"mx-2 align-self-center",children:"~"}),Object(l.jsx)(j.a,{name:"endDate",control:b,defaultValue:new Date("September 1,2021"),render:function(e){var t=e.field,a=t.onChange,c=t.value;return Object(l.jsx)(h.a,{className:"p-2 rounded border-gray ez-input w-100",onChange:a,selected:c,dateFormat:"MM/yyyy",showMonthYearPicker:!0,showFullMonthYearPicker:!0})}}),Object(l.jsx)(i.a,{type:"submit",className:"mx-2 text-nowrap",children:"\u691c\u7d22"}),Object(l.jsx)(i.a,{type:"button",className:"text-nowrap",children:"\u30ea\u30d5\u30ec\u30c3\u30b7\u30e5"})]})})})};var O=function(){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)("div",{className:"bg-gray py-1 mt-5 font-weight-bold w-100 text-center ",children:Object(l.jsx)("div",{className:"text-white",children:"\xa9TOHO Business Service Co.,Ltd All rights reserved."})})})};function m(e){var t=[];if(e.formData){var a=e.formData[0];if(a){e.setFormIdFilter(a.id);for(var c=0;c<a.sections.length;c++)a.sections[c].fields.map((function(e){return t.push(e.text)}))}else e.setFormIdFilter("6144508999e12e0b857cf40f")}return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)("thead",{className:"bg-light",children:Object(l.jsx)("tr",{children:t.map((function(e,t){return Object(l.jsx)("th",{children:e},t)}))})})})}function p(e){var t=Object.entries(e);return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)("tbody",{children:t[0][1].map((function(e,t){return Object(l.jsx)("tr",{children:e.map((function(e,t){return Object(l.jsx)("td",{children:e},t)}))},t)}))})})}var x=function(e){for(var t=e.postsPerPage,a=e.totalPosts,c=e.paginate,n=[],r=1;r<=Math.ceil(a/t);r++)n.push(r);return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{className:"pagination ez-pagination",children:n.map((function(e){return Object(l.jsx)("li",{className:"page-item",children:Object(l.jsx)("span",{onClick:function(){return c(e)},className:"page-link",children:e})},e)}))})})})};function g(e){var t=Object(c.useState)(1),a=Object(o.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(10),u=Object(o.a)(i,2),d=u[0],j=(u[1],r*d),b=j-d,h=e.searchMonth;console.log(h);var f,O=[];if(e.reportData){var m=e.reportData;if(m)for(var g=function(e){var t=Object.values(m[e].answers);y=t[1];var a=[];if(y)if(1===y.length){for(var c=0;c<2;c++)0===c?Object.values(t[0]).map((function(e){return"string"===typeof e?a.push(e):a.push(" ")})):void 0!=t[1][c-1]&&Object.values(t[1][c-1]).map((function(e){return"string"===typeof e?a.push(e):a.push(" ")}));h.filter((function(e){return e==a[0].slice(5,7)})).length>0&&O.push(a),a=[]}else for(var n=0;n<y.length;n++){Object.values(t[0]).map((function(e){return"string"===typeof e?a.push(e):a.push(" ")})),Object.values(t[1][n]).map((function(e){return"string"===typeof e?a.push(e):a.push(" ")})),h.filter((function(e){return e==a[0].slice(5,7)})).length>0&&O.push(a),a=[]}},v=0;v<m.length;v++){var y;g(v)}}return Object(l.jsxs)(n.a.Fragment,{children:[Object(l.jsx)(p,{post:(f=O,f.slice(b,j))}),Object(l.jsx)(x,{postsPerPage:d,totalPosts:O.length,paginate:s})]})}var v=a(16),y=a.n(v),w=a(25),S=a(52),N=a.n(S);function T(e){var t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),l=(i[0],i[1]),u=Object(c.useState)(!1),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){(function(){var t=Object(w.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l(null),r(null),b(!0),t.next=6,N.a.get("http://ec2-13-127-174-162.ap-south-1.compute.amazonaws.com/api/"+e,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}});case 6:a=t.sent,r(a.data),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0),l(t.t0);case 14:b(!1);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),j||n}function k(e,t,a){var n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(null),u=Object(o.a)(l,2),d=(u[0],u[1]),j=Object(c.useState)(!1),b=Object(o.a)(j,2),h=b[0],f=b[1];return Object(c.useEffect)((function(){(function(){var c=Object(w.a)(y.a.mark((function c(){var n;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,d(null),i(null),f(!0),c.next=6,N.a.get("http://ec2-13-127-174-162.ap-south-1.compute.amazonaws.com/api/"+e+"?filter="+encodeURIComponent('{"where":{"'.concat(t,'":"').concat(a,'"}}')),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}});case 6:n=c.sent,i(n.data),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0),d(c.t0);case 14:f(!1);case 15:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}})()()}),[e,t,a]),h||s}var F=a(433),D=a(434),I=a(438),P=a(207),H=a(208),M=a(90),C=a(87),B=a(214);function z(e){var t=e.data.filter((function(e){return"\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af"==e.dataType}))[0],a=e.data.filter((function(e){return"\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332"==e.dataType}))[0],c=e.data.filter((function(e){return"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332"==e.dataType}))[0],n=e.data.filter((function(e){return"\u305d\u306e\u4ed6"==e.dataType}))[0];console.log("testetsetis ####",t);var r=[{name:"1\u6708","\u539f\u6750\u6599":t["01"],"\u6e29\u5ea6":a["01"],"\u30c8\u30a4\u30ec":c["01"],"\u305d\u306e\u4ed6":n["01"]},{name:"2\u6708","\u539f\u6750\u6599":t["02"],"\u6e29\u5ea6":a["02"],"\u30c8\u30a4\u30ec":c["02"],"\u305d\u306e\u4ed6":n["02"]},{name:"3\u6708","\u539f\u6750\u6599":t["03"],"\u6e29\u5ea6":a["03"],"\u30c8\u30a4\u30ec":c["03"],"\u305d\u306e\u4ed6":n["03"]},{name:"4\u6708","\u539f\u6750\u6599":t["04"],"\u6e29\u5ea6":a["04"],"\u30c8\u30a4\u30ec":c["04"],"\u305d\u306e\u4ed6":n["04"]},{name:"5\u6708","\u539f\u6750\u6599":t["05"],"\u6e29\u5ea6":a["05"],"\u30c8\u30a4\u30ec":c["05"],"\u305d\u306e\u4ed6":n["05"]},{name:"6\u6708","\u539f\u6750\u6599":t["06"],"\u6e29\u5ea6":a["06"],"\u30c8\u30a4\u30ec":c["06"],"\u305d\u306e\u4ed6":n["06"]},{name:"7\u6708","\u539f\u6750\u6599":t["07"],"\u6e29\u5ea6":a["07"],"\u30c8\u30a4\u30ec":c["07"],"\u305d\u306e\u4ed6":n["07"]},{name:"8\u6708","\u539f\u6750\u6599":t["08"],"\u6e29\u5ea6":a["08"],"\u30c8\u30a4\u30ec":c["08"],"\u305d\u306e\u4ed6":n["08"]},{name:"9\u6708","\u539f\u6750\u6599":t["09"],"\u6e29\u5ea6":a["09"],"\u30c8\u30a4\u30ec":c["09"],"\u305d\u306e\u4ed6":n["09"]},{name:"10\u6708","\u539f\u6750\u6599":t[10],"\u6e29\u5ea6":a[10],"\u30c8\u30a4\u30ec":c[10],"\u305d\u306e\u4ed6":n[10]},{name:"11\u6708","\u539f\u6750\u6599":t[11],"\u6e29\u5ea6":a[11],"\u30c8\u30a4\u30ec":c[11],"\u305d\u306e\u4ed6":n[11]},{name:"12\u6708","\u539f\u6750\u6599":t[12],"\u6e29\u5ea6":a[12],"\u30c8\u30a4\u30ec":c[12],"\u305d\u306e\u4ed6":n[12]}];return Object(l.jsx)(F.a,{width:"100%",height:"100%",children:Object(l.jsxs)(D.a,{width:500,height:300,data:r,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(I.a,{strokeDasharray:"3 3"}),Object(l.jsx)(P.a,{dataKey:"name"}),Object(l.jsx)(H.a,{}),Object(l.jsx)(M.a,{}),Object(l.jsx)(C.a,{}),Object(l.jsx)(B.a,{dataKey:"\u539f\u6750\u6599",fill:"#33add6"}),Object(l.jsx)(B.a,{dataKey:"\u6e29\u5ea6",fill:"#ff813d"}),Object(l.jsx)(B.a,{dataKey:"\u30c8\u30a4\u30ec",fill:"#b6dd0a"}),Object(l.jsx)(B.a,{dataKey:"\u305d\u306e\u4ed6",fill:"#33d633"})]})})}var K=a(34),R=a(441),A=a(209),E=a(109),L=["#33add6","#ff813d","#b6dd0a","#33d633"],Y=Math.PI/180,G=function(e){var t=e.cx,a=e.cy,c=e.midAngle,n=e.innerRadius,r=e.outerRadius,s=e.percent,o=(e.index,n+.5*(r-n)),i=t+o*Math.cos(-c*Y),u=a+o*Math.sin(-c*Y);return Object(l.jsx)("text",{x:i,y:u,fill:"white",textAnchor:i>t?"start":"end",dominantBaseline:"central",children:"".concat((100*s).toFixed(0),"%")})};function V(e){var t,a=e.data.filter((function(e){return"\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af"==e.dataType}))[0],c=e.data.filter((function(e){return"\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332"==e.dataType}))[0],n=e.data.filter((function(e){return"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332"==e.dataType}))[0],r=e.data.filter((function(e){return"\u305d\u306e\u4ed6"==e.dataType}))[0];console.log("testetsetis ####",a);var s=[{name:"\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af",value:a.sum},{name:"\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332",value:c.sum},{name:"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332",value:n.sum},{name:"\u305d\u306e\u4ed6",value:r.sum}];return Object(l.jsx)(F.a,{width:"100%",height:"100%",children:Object(l.jsxs)(R.a,{width:400,height:400,children:[Object(l.jsx)(A.a,(t={data:s,cx:"50%",cy:"50%",labelLine:!1,label:G,innerRadius:60,outerRadius:130,fill:"#8884d8",dataKey:"value"},Object(K.a)(t,"label",!0),Object(K.a)(t,"children",s.map((function(e,t){return Object(l.jsx)(E.a,{fill:L[t%L.length]},"cell-".concat(t))}))),t)),Object(l.jsx)(M.a,{}),Object(l.jsx)(C.a,{})]})})}function _(e){var t=e.data.filter((function(e){return"\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af"==e.dataType}))[0],a=e.data.filter((function(e){return"\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332"==e.dataType}))[0],c=e.data.filter((function(e){return"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332"==e.dataType}))[0],n=e.data.filter((function(e){return"\u305d\u306e\u4ed6"==e.dataType}))[0];console.log("testetsetis ####",t);var r=[{name:"1\u6708","\u539f\u6750\u6599":t["01"],"\u6e29\u5ea6":a["01"],"\u30c8\u30a4\u30ec":c["01"],"\u305d\u306e\u4ed6":n["01"]},{name:"2\u6708","\u539f\u6750\u6599":t["02"],"\u6e29\u5ea6":a["02"],"\u30c8\u30a4\u30ec":c["02"],"\u305d\u306e\u4ed6":n["02"]},{name:"3\u6708","\u539f\u6750\u6599":t["03"],"\u6e29\u5ea6":a["03"],"\u30c8\u30a4\u30ec":c["03"],"\u305d\u306e\u4ed6":n["03"]},{name:"4\u6708","\u539f\u6750\u6599":t["04"],"\u6e29\u5ea6":a["04"],"\u30c8\u30a4\u30ec":c["04"],"\u305d\u306e\u4ed6":n["04"]},{name:"5\u6708","\u539f\u6750\u6599":t["05"],"\u6e29\u5ea6":a["05"],"\u30c8\u30a4\u30ec":c["05"],"\u305d\u306e\u4ed6":n["05"]},{name:"6\u6708","\u539f\u6750\u6599":t["06"],"\u6e29\u5ea6":a["06"],"\u30c8\u30a4\u30ec":c["06"],"\u305d\u306e\u4ed6":n["06"]},{name:"7\u6708","\u539f\u6750\u6599":t["07"],"\u6e29\u5ea6":a["07"],"\u30c8\u30a4\u30ec":c["07"],"\u305d\u306e\u4ed6":n["07"]},{name:"8\u6708","\u539f\u6750\u6599":t["08"],"\u6e29\u5ea6":a["08"],"\u30c8\u30a4\u30ec":c["08"],"\u305d\u306e\u4ed6":n["08"]},{name:"9\u6708","\u539f\u6750\u6599":t["09"],"\u6e29\u5ea6":a["09"],"\u30c8\u30a4\u30ec":c["09"],"\u305d\u306e\u4ed6":n["09"]},{name:"10\u6708","\u539f\u6750\u6599":t[10],"\u6e29\u5ea6":a[10],"\u30c8\u30a4\u30ec":c[10],"\u305d\u306e\u4ed6":n[10]},{name:"11\u6708","\u539f\u6750\u6599":t[11],"\u6e29\u5ea6":a[11],"\u30c8\u30a4\u30ec":c[11],"\u305d\u306e\u4ed6":n[11]},{name:"12\u6708","\u539f\u6750\u6599":t[12],"\u6e29\u5ea6":a[12],"\u30c8\u30a4\u30ec":c[12],"\u305d\u306e\u4ed6":n[12]}];return Object(l.jsx)(F.a,{width:"100%",height:"100%",children:Object(l.jsxs)(D.a,{width:500,height:300,data:r,margin:{top:5,right:30,left:20,bottom:5},children:[Object(l.jsx)(I.a,{strokeDasharray:"3 3"}),Object(l.jsx)(P.a,{dataKey:"name"}),Object(l.jsx)(H.a,{}),Object(l.jsx)(M.a,{}),Object(l.jsx)(C.a,{}),Object(l.jsx)(B.a,{dataKey:"\u539f\u6750\u6599",stackId:"a",fill:"#33add6"}),Object(l.jsx)(B.a,{dataKey:"\u6e29\u5ea6",stackId:"a",fill:"#ff813d"}),Object(l.jsx)(B.a,{dataKey:"\u30c8\u30a4\u30ec",stackId:"a",fill:"#b6dd0a"}),Object(l.jsx)(B.a,{dataKey:"\u305d\u306e\u4ed6",stackId:"a",fill:"#33d633"})]})})}var J=a(115);var U=function(e){var t=e.columns,a=e.data,c=Object(J.useTable)({columns:t,data:a},J.useGlobalFilter,J.useSortBy),n=c.getTableProps,r=c.getTableBodyProps,s=c.headerGroups,o=c.rows,i=c.prepareRow;return c.setGlobalFilter,Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title text-center my-3",style:{fontWeight:"bold",fontSize:"18px"},children:"\u5e74\u5ea6\u5225\u9805\u76ee\u5225\u9055\u53cd\u4ef6\u6570\u306e\u30b0\u30e9\u30d5\u3067\u3059\u3002\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001\u9805\u76ee\u3092\u9078\u629e\u3057\u305f\u5f8c\u3001\u691c\u7d22\u3092\u3054\u5229\u7528\u4e0b\u3055\u3044\u3002"}),Object(l.jsxs)("table",Object(d.a)(Object(d.a)({},n()),{},{className:"w-100 text-center",children:[Object(l.jsx)("thead",{children:s.map((function(e){return Object(l.jsx)("tr",Object(d.a)(Object(d.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(l.jsx)("th",Object(d.a)(Object(d.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(l.jsx)("tbody",Object(d.a)(Object(d.a)({},r()),{},{children:o.map((function(e,t){return i(e),Object(l.jsx)("tr",Object(d.a)(Object(d.a)({},e.getRowProps()),{},{children:e.cells.map((function(a,c){return 0===c||c===e.cells.length-1?Object(l.jsx)("th",Object(d.a)(Object(d.a)({className:0===t?"bg-blue":1===t?"bg-orange":2===t?"bg-yellow":"bg-green"},a.getCellProps()),{},{children:a.render("Cell")})):Object(l.jsx)("td",Object(d.a)(Object(d.a)({className:0===t?"bg-blue-td":1===t?"bg-orange-td":2===t?"bg-yellow-td":"bg-green-td"},a.getCellProps()),{},{children:a.render("Cell")}))}))}))}))}))]}))]})};var X=function(){return Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{className:" text-center loading h-100 spinner",children:[Object(l.jsx)("div",{className:"spinner-border text-primary",style:{width:"4rem",height:"4rem"},role:"status",children:Object(l.jsx)("span",{className:"sr-only"})}),Object(l.jsx)("div",{className:"text-primary",children:"Loading..."})]})})};function W(e,t){var a;switch(t){case"60cdc056db2269136c7c28ad":a="\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332";break;case"60cdc065db2269136c7c28ae":a="\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332";break;case"60cdc09adb2269136c7c28b0":a="\u305d\u306e\u4ed6";break;default:a="\u539f\u6750\u6599\u4ed5\u5165\u30c1\u30a7\u30c3\u30af"}var c={dataType:a,"01":0,"02":0,"03":0,"04":0,"05":0,"06":0,"07":0,"08":0,"09":0,10:0,11:0,12:0,sum:0};if("\u6e29\u5ea6\u7ba1\u7406\u8a18\u9332"==a&&(c["07"]=5,c["09"]=1,c.sum=6),"\u305d\u306e\u4ed6"==a&&(c["05"]=1,c["06"]=2,c["09"]=3,c.sum=6),"\u30c8\u30a4\u30ec\u6e05\u6383\u8a18\u9332"==a&&(c["05"]=3,c["06"]=4,c["08"]=2,c.sum=9),e)for(var n=function(t){var a=Object.values(e[t].answers);s=a[1];var n=[];if(s)if(1===s.length){for(var r=0;r<2;r++)0===r?Object.values(a[0]).map((function(e){return"string"===typeof e?n.push(e):n.push(" ")})):void 0!=a[1][r-1]&&Object.values(a[1][r-1]).map((function(e){return"string"===typeof e?n.push(e):n.push(" ")}));if(n.filter((function(e){return"\u2715"==e||"\u5426"==e||"X"==e})).length>0){var o=n[0].slice(5,7);c[o]=c[o]+1,c.sum=c.sum+1}n=[]}else for(var i=0;i<s.length;i++){if(Object.values(a[0]).map((function(e){return"string"===typeof e?n.push(e):n.push(" ")})),Object.values(a[1][i]).map((function(e){return"string"===typeof e?n.push(e):n.push(" ")})),n.filter((function(e){return"\u2715"==e||"\u5426"==e||"X"==e})).length>0){var l=n[0].slice(5,7);c[l]=c[l]+1,c.sum=c.sum+1}n=[]}},r=0;r<e.length;r++){var s;n(r)}return c}var q=function(){var e=Object(c.useState)("60cd60df061f9c0ee82403ae"),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)("6144508999e12e0b857cf40f"),i=Object(o.a)(s,2),d=i[0],j=i[1],b=Object(c.useState)("60cdc047db2269136c7c28ac"),h=Object(o.a)(b,2),p=h[0],x=h[1],v=Object(c.useState)("boardType"),S=Object(o.a)(v,2),F=S[0],D=S[1],I=Object(c.useState)("2021-05"),P=Object(o.a)(I,2),H=P[0],M=P[1],C=Object(c.useState)("2021-09"),B=Object(o.a)(C,2),K=B[0],R=B[1],A=T("regions"),E=T("stores"),L=function(e,t,a){var n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1],l=Object(c.useState)(null),u=Object(o.a)(l,2),d=(u[0],u[1]),j=Object(c.useState)(!1),b=Object(o.a)(j,2),h=b[0],f=b[1];return Object(c.useEffect)((function(){!function(){var c=Object(w.a)(y.a.mark((function c(){var n;return y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,d(null),i(null),f(!0),c.next=6,N.a.get("http://ec2-13-127-174-162.ap-south-1.compute.amazonaws.com/api/"+e+"?filter="+encodeURIComponent('{"where":{"storeId":"'.concat(t,'","formTypeId":"').concat(a,'"}}')),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("access_token"))}});case 6:n=c.sent,i(n.data),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(0),console.log(c.t0),d(c.t0);case 14:f(!1);case 15:case"end":return c.stop()}}),c,null,[[0,10]])})));return function(){return c.apply(this,arguments)}}()()}),[e,t,a]),h||s}("forms",a,p),Y=k("reports","formId",d),G=(k("stores","id",a),function(e,t){for(var a=[],c=Number(e.slice(-2)),n=Number(t.slice(-2))-c+1,r=0;r<n;r++){var s=c+r;s>9?(s="0"+s,console.log(s),s=s.slice(-2),a.push(s)):(s="0"+s,a.push(s))}return a}(H,K)),J=[W(Y,"60cdc047db2269136c7c28ac"),W(Y,"60cdc056db2269136c7c28ad"),W(Y,"60cdc065db2269136c7c28ae"),W(Y,"60cdc09adb2269136c7c28b0")],q=Object(c.useMemo)((function(){return[{accessor:"dataType",Header:"\u533a\u5206"},{accessor:"01",Header:"1\u6708"},{accessor:"02",Header:"2\u6708"},{accessor:"03",Header:"3\u6708"},{accessor:"04",Header:"4\u6708"},{accessor:"05",Header:"5\u6708"},{accessor:"06",Header:"6\u6708"},{accessor:"07",Header:"7\u6708"},{accessor:"08",Header:"8\u6708"},{accessor:"09",Header:"9\u6708"},{accessor:"10",Header:"10\u6708"},{accessor:"11",Header:"11\u6708"},{accessor:"12",Header:"12\u6708"},{accessor:"sum",Header:"\u5408\u8a08"}]}),[]),Q=Object(c.useMemo)((function(){return J}),[J]);return!0===A||1==L||!0===Y?Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(X,{})}):Object(l.jsx)(n.a.Fragment,{children:Object(l.jsxs)("div",{style:{margin:"0 150px"},children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{regionData:A,storeData:E,handleOnSubmit:function(e){console.log("hi",e),r(e.store),x(e.dataType),D(e.charts),M(e.startDate),R(e.endDate)}}),"boardType"===F?Object(l.jsx)("div",{className:"mt-5",children:Object(l.jsxs)("table",{className:"w-100 text-center",children:[L&&Object(l.jsx)(m,{formData:L,setFormIdFilter:j}),Y&&Object(l.jsx)(g,{reportData:Y,searchMonth:G})]})}):"barType"===F?Object(l.jsx)("div",{className:"mt-5",style:{height:"350px"},children:Object(l.jsx)(z,{data:J})}):"stackBarType"===F?Object(l.jsx)("div",{className:"mt-5",style:{height:"350px"},children:Object(l.jsx)(_,{data:J})}):Object(l.jsx)("div",{className:"mt-5",style:{height:"350px"},children:Object(l.jsx)(V,{data:J})}),Object(l.jsx)("div",{children:Y&&Object(l.jsx)(U,{columns:q,data:Q})}),Object(l.jsx)(O,{})]})})},Q="http://ec2-13-127-174-162.ap-south-1.compute.amazonaws.com/api/";var Z=function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"utsunomiya@fdes.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Test@123",a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1];Object(c.useEffect)((function(){!function(){var a=Object(w.a)(y.a.mark((function a(){var c;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,N.a.post(Q+"users/login",{email:e,password:t});case 3:c=a.sent,s(c.data.token),c.data.token&&localStorage.setItem("access_token",c.data.token),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()()}),[])}(),Object(l.jsx)(n.a.Fragment,{children:Object(l.jsx)(q,{})})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,442)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(Z,{})}),document.getElementById("root")),$()}},[[426,1,2]]]);
//# sourceMappingURL=main.c6fce204.chunk.js.map