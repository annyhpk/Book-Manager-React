"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[515],{9565:function(e,n,t){t.d(n,{C:function(){return r}});var r=t(9434).v9},515:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(5861),a=t(2982),o=t(885),s=t(7757),u=t.n(s),c=t(2791),l=t(6871),i=t(9565),d=t(4569),h=t.n(d),f=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=encodeURI("https://annyhpk.run.goorm.io/searchBookInfo?page=".concat(n,"&value=").concat(t)),e.next=3,h().get(r).then((function(e){return console.dir(e),e}));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),m=f,x=t(184),p=c.lazy((function(){return t.e(218).then(t.bind(t,6218))})),b=c.lazy((function(){return t.e(505).then(t.bind(t,1505))})),v=c.lazy((function(){return t.e(644).then(t.bind(t,7644))})),g=c.lazy((function(){return t.e(40).then(t.bind(t,4040))})),j=function(){var e=(0,l.s0)(),n=(0,l.UO)().page,t=(0,c.useMemo)((function(){return parseInt(n||"1")}),[n]),s=(0,c.useState)(""),d=(0,o.Z)(s,2),h=d[0],f=d[1],j=(0,c.useState)([]),k=(0,o.Z)(j,2),w=k[0],y=k[1],C=(0,c.useRef)(null),N=(0,c.useMemo)((function(){return[15*(t-1),15*t]}),[t]),M=(0,o.Z)(N,2),I=M[0],Z=M[1],z=(0,i.C)((function(e){return{booksInfo:Object.values(e.book.documents).slice(I,Z),length:Object.keys(e.book.documents).length}})),B=(0,c.useMemo)((function(){return z.booksInfo}),[z]),D=(0,c.useMemo)((function(){return 15}),[]),L=(0,c.useMemo)((function(){return Math.ceil(z.length/D)}),[z.length,D]),O=(0,c.useCallback)((function(){var e;null===(e=C.current)||void 0===e||e.removeAttribute("open")}),[]),S=(0,c.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return m(e,n).then((function(e){return y((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(e.data.documents))})),e.data.meta.is_end})).catch((function(e){throw new Error("BookDataLoad job result failed",{cause:e})}))}),[h,y]),R=(0,c.useCallback)(function(){var e=(0,r.Z)(u().mark((function e(n){var r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=new FormData(n.currentTarget),""!==(a=r.get("searchValue")).trim()||a.trim().length){e.next=5;break}return e.abrupt("return",null);case 5:return y([]),f(a),e.prev=7,e.next=10,S(t,a);case 10:null===(o=C.current)||void 0===o||o.setAttribute("open","true"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),e.t0 instanceof Error&&console.log("Caused by ".concat(null===e.t0||void 0===e.t0?void 0:e.t0.cause));case 16:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(n){return e.apply(this,arguments)}}(),[S,t,f]);return(isNaN(t)||!t||t>L)&&e("/notFound"),(0,x.jsxs)("div",{className:"h-screen pt-8 mx-0 md:pt-16",children:[(0,x.jsxs)("header",{className:"flex w-full h-10 justify-around flex-wrap flex-row",children:[(0,x.jsxs)("div",{className:"inline-flex flex-nowrap",children:[(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),(0,x.jsx)("b",{className:"sm:text-base md:text-3xl",children:"\ub3c4\uc11c \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,x.jsxs)("form",{className:"pt-1 h-10",onSubmit:R,children:[(0,x.jsx)(g,{}),(0,x.jsx)("button",{className:"g-white dark:text-gray-100 hover:bg-gray-500 font-semibold py-0.7 px-3 border border-gray-400 rounded shadow",type:"submit",children:"\uac80\uc0c9"})]})]}),(0,x.jsx)("main",{className:"Container flex flex-col mt-8 mx-3 sm:mt-4 md:mx-8 lg:mx-24 justify-center",children:(0,x.jsxs)("table",{className:"table-auto border-separate text-center",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"whitespace-nowrap",children:[(0,x.jsx)("th",{children:"(\uc0c1\ud0dc) \ub3c4\uc11c\uba85"}),(0,x.jsx)("th",{children:"\uae00\uc4f4\uc774"}),(0,x.jsx)("th",{children:"\ubcf4\uc720"}),(0,x.jsx)("th",{children:"\ucd9c\ud310\uc77c"})]})}),(0,x.jsx)("tbody",{children:(0,x.jsx)(v,{pageOfBooksInfo:B,pageNum:t})})]})}),(0,x.jsx)(b,{currentPage:t,totalPage:L}),(0,x.jsx)("dialog",{id:"dialog",ref:C,children:(0,x.jsx)(p,{onCloseModal:O,searchResultInfo:w,bookDataLoad:S})})]})}}}]);
//# sourceMappingURL=515.4eb9de84.chunk.js.map