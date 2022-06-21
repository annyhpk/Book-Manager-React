"use strict";(self.webpackChunkmyapp=self.webpackChunkmyapp||[]).push([[515],{9565:function(e,t,r){r.d(t,{C:function(){return n}});var n=r(9434).v9},515:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(5861),a=r(2982),o=r(885),s=r(7757),c=r.n(s),l=r(2791),u=r(6871),i=r(9565),d=r(4569),f=r.n(d),h=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI("https://dapi.kakao.com/v3/search/book?target=title&sort=accuracy&page=".concat(t,"&size=10&query=").concat(r)),e.next=3,f().get(n,{headers:{Authorization:"KakaoAK ".concat({NODE_ENV:"production",PUBLIC_URL:"/Book-Manager-React/build",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_KAKAO_API:"0e1bda99be303bf119d94615cd4581e2"}.KAKAO_API_KEY)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),m=h,x=r(184),p=l.lazy((function(){return r.e(218).then(r.bind(r,6218))})),b=l.lazy((function(){return r.e(505).then(r.bind(r,1505))})),g=l.lazy((function(){return r.e(644).then(r.bind(r,7644))})),k=l.lazy((function(){return r.e(40).then(r.bind(r,4040))})),v=function(){var e=(0,u.s0)(),t=(0,u.UO)().page,r=(0,l.useMemo)((function(){return parseInt(t||"1")}),[t]),s=(0,l.useState)(""),d=(0,o.Z)(s,2),f=d[0],h=d[1],v=(0,l.useState)([]),w=(0,o.Z)(v,2),j=w[0],y=w[1],C=(0,l.useRef)(null),N=(0,l.useState)(!1),M=(0,o.Z)(N,2),A=M[0],S=M[1],_=(0,l.useMemo)((function(){return[15*(r-1),15*r]}),[r]),E=(0,o.Z)(_,2),L=E[0],O=E[1],K=(0,i.C)((function(e){return{booksInfo:Object.values(e.book.documents).slice(L,O),length:Object.keys(e.book.documents).length}})),I=(0,l.useMemo)((function(){return K.booksInfo}),[K]),P=(0,l.useMemo)((function(){return 15}),[]),R=(0,l.useMemo)((function(){return Math.ceil(K.length/P)}),[K.length,P]),T=(0,l.useCallback)((function(){var e;null===(e=C.current)||void 0===e||e.removeAttribute("open")}),[]),z=(0,l.useCallback)((function(){document.body.classList.toggle("dark"),S((function(e){return!e}))}),[]),B=(0,l.useCallback)((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f;return m(e,t).then((function(e){return y((function(t){return[].concat((0,a.Z)(t),(0,a.Z)(e.data.documents))})),e.data.meta.is_end})).catch((function(e){throw new Error("BookDataLoad job result failed",{cause:e})}))}),[f,y]),D=(0,l.useCallback)(function(){var e=(0,n.Z)(c().mark((function e(t){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=new FormData(t.currentTarget),""!==(a=n.get("searchValue")).trim()||a.trim().length){e.next=5;break}return e.abrupt("return",null);case 5:return y([]),h(a),e.prev=7,e.next=10,B(r,a);case 10:null===(o=C.current)||void 0===o||o.setAttribute("open","true"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),e.t0 instanceof Error&&console.log("Caused by ".concat(null===e.t0||void 0===e.t0?void 0:e.t0.cause));case 16:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(t){return e.apply(this,arguments)}}(),[B,r,h]);return(isNaN(r)||!r||r>R)&&e("/notFound"),(0,l.useEffect)((function(){var e;window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(document.body.classList.add("dark"),null===(e=document.querySelector("#default-toggle"))||void 0===e||e.setAttribute("checked","checked"),S((function(e){return!e})))}),[]),(0,x.jsxs)("div",{className:"h-screen pt-8 mx-0 md:pt-16 bg-ivory dark:bg-darkBlue dark:text-gray-100",children:[(0,x.jsxs)("div",{className:"flex flex-row-reverse",children:[(0,x.jsxs)("label",{htmlFor:"default-toggle",className:"inline-flex relative items-center cursor-pointer",children:[(0,x.jsx)("input",{type:"checkbox",value:"",id:"default-toggle",className:"sr-only peer",onClick:z}),(0,x.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"})]}),(0,x.jsx)("span",{id:"dark-mode-text",className:"ml-3 text-sm pr-2 font-medium text-gray-900 dark:text-gray-300",children:A?(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})}):(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})})]}),(0,x.jsxs)("header",{className:"flex w-full h-10 justify-around flex-wrap flex-row",children:[(0,x.jsxs)("div",{className:"inline-flex flex-nowrap",children:[(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:(0,x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})}),(0,x.jsx)("b",{className:"sm:text-base md:text-3xl",children:"\ub3c4\uc11c \uad00\ub9ac \uc2dc\uc2a4\ud15c"})]}),(0,x.jsxs)("form",{className:"pt-1 h-10",onSubmit:D,children:[(0,x.jsx)(k,{}),(0,x.jsx)("button",{className:"g-white dark:text-gray-100 hover:bg-gray-100 font-semibold py-0.7 px-3 border border-gray-400 rounded shadow",type:"submit",children:"\uac80\uc0c9"})]})]}),(0,x.jsx)("main",{className:"Container flex flex-col mt-8 mx-3 sm:mt-4 md:mx-8 lg:mx-24 justify-center",children:(0,x.jsxs)("table",{className:"table-auto border-separate text-center",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{className:"whitespace-nowrap",children:[(0,x.jsx)("th",{children:"(\uc0c1\ud0dc) \ub3c4\uc11c\uba85"}),(0,x.jsx)("th",{children:"\uae00\uc4f4\uc774"}),(0,x.jsx)("th",{children:"\ubcf4\uc720"}),(0,x.jsx)("th",{children:"\ucd9c\ud310\uc77c"})]})}),(0,x.jsx)("tbody",{children:(0,x.jsx)(g,{pageOfBooksInfo:I,pageNum:r})})]})}),(0,x.jsx)(b,{currentPage:r,totalPage:R}),(0,x.jsx)("dialog",{id:"dialog",ref:C,children:(0,x.jsx)(p,{onCloseModal:T,searchResultInfo:j,bookDataLoad:B})})]})}}}]);
//# sourceMappingURL=515.a4202600.chunk.js.map