(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{16:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a}));var c="ADD_BOOK",o="DEL_BOOK",a="UPT_BOOL"},37:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);for(var c,o=n(0),a=n.n(o),r=n(15),s=n.n(r),b=(n(37),n(2)),u=n(18),i=n(7),j=Object(u.a)((function(){return Promise.all([n.e(6),n.e(7)]).then(n.bind(null,95))})),O=Object(u.a)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,94))})),p=Object(u.a)((function(){return n.e(4).then(n.bind(null,93))})),d=function(){return Object(i.jsxs)(b.d,{children:[Object(i.jsx)(b.a,{exact:!0,path:"/",to:"/books/1"}),Object(i.jsx)(b.b,{path:"/books/:page",component:O}),Object(i.jsx)(b.b,{path:"/book/:post/:isbn",component:p}),Object(i.jsx)(b.b,{component:j})]})},l=n(19),m=n(28),h=n(14),f=n(32),x=n.n(f),y=n(5),k=n(11),g=n(27),_=n(23),v=n(12),w=n(16),B={authors:["\uc678\uad6d\uc791\uac00"],contents:"\uc774\ub7f0\ub4e4 \uc5b4\ub5a8\ud558\ub9ac \uc800\ub7f0\ub4e4 \uc5b4\ub5a0\ud558\ub9ac \ub354\ubbf8\ud558\uac8c \uc0b4\ub2e4 \ub354\ubbf8\ud558\uac8c \uac00\ub294\uac83\uc774 \uc778\uc0dd\uc774\uac70\ub298 \uc5b4\ucc0c \uadf8\ub9ac \uace0\ubbfc\ud558\uba70 \uac10\uc815\uc744 \uc18c\ube44\ud558\uba74\uc11c \uc778\uc0dd\uc744 \uc0b4\uc544\uac00\ub294 \uac74\uc778\uac00",datetime:new Date("2021-04-11T00:00:00.000+09:00"),isbn:"1234567891234",price:12900,publisher:"\ud14c\uc2a4\ud2b8\uc758 \uacc4\ub2e8",sale_price:11250,status:"\uc815\uc0c1\ud310\ub9e4",thumbnail:"https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png",title:"\uc774\ub7f0\ub4e4\uc800\ub7f0\ub4e4",translators:["\uad6d\ub0b4\uc791\uac00"],url:"https://google.com",amount:2},D=[],J=0;J<80;++J)B.isbn="".concat(parseInt(B.isbn)+1),J%15===0&&(B.title="\uc774\ub7f0\ub4e4\uc800\ub7f0\ub4e4 ".concat(J/15+1)),D.push((c=B,JSON.parse(JSON.stringify(c))));var P,S={documents:D||[B]},E=Object(h.c)(S,(P={},Object(k.a)(P,w.a,(function(t,e){return Object(v.a)(Object(v.a)({},t),{},{documents:[].concat(Object(_.a)(e.payload),Object(_.a)(t.documents))})})),Object(k.a)(P,w.b,(function(t,e){return Object(v.a)(Object(v.a)({},t),{},{documents:t.documents.filter((function(t){return t.isbn!==e.payload}))})})),Object(k.a)(P,w.c,(function(t,e){var n=Object(g.a)(e.payload,2),c=n[0],o=n[1];t.documents[c].amount=o})),P)),I=Object(y.c)({book:E}),K=Object(h.a)({reducer:I,middleware:[x.a]});s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m.a,{store:K,children:Object(i.jsx)(l.a,{children:Object(i.jsx)(d,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.509df942.chunk.js.map