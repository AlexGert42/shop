(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{111:function(e,t,n){e.exports={price:"Price_price__3FWRm",card:"Price_card__Qmtwy"}},148:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(53),i=n.n(c),s=(n(148),n(128)),o=n(225),u=n(33),d=n(37),l=n(18),b=n(226),j=n(224),p=n(227),m=n(223),h=n(218),f=n(228),O=n(63),_=n.n(O),x=n(32),A=n(21),v=n(0),g=n.n(v),C=n(3),y=n(36),w=n(126),k=n.n(w),N=(n(170),n(100)),S={apiKey:"AIzaSyDfRXJoDjoJKaTLFTwUBPvJwp4c9l8fy8A",authDomain:"price-project-1.firebaseapp.com",projectId:"price-project-1",storageBucket:"price-project-1.appspot.com",messagingSenderId:"966095631146",appId:"1:966095631146:web:146e0fe533845fd89ae453"};N.a.initializeApp(S);N.a.firestore();var B=N.a.auth(),I=k.a.create({baseURL:"https://price-project-1-default-rtdb.europe-west1.firebasedatabase.app",withCredentials:!0,headers:{"API-KEY":S.apiKey}}),P=function(){return I.get("/pricelist.json")},T=function(e){return I.post("/pricelist.json",{item:e})},D=function(e){return I.delete("/pricelist/".concat(e,".json"))},L=function(e){return I.get("/bin/".concat(e,".json"))},J=function(e,t){return I.post("/bin/".concat(e,".json"),{item:t})},R=function(e,t){return I.delete("/bin/".concat(e,"/").concat(t,".json"))},U=Object(y.b)("price/fetchPrice",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return a=e.sent,e.abrupt("return",{items:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),M=Object(y.b)("price/addPrice",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:return a=e.sent,e.abrupt("return",{item:Object(d.a)(Object(d.a)({},t),{},{_id:a.data.name})});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(y.b)("price/removePrice",function(){var e=Object(C.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:return e.sent,e.abrupt("return",{id:t});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),H=Object(y.c)({name:"price",initialState:{items:null},reducers:{},extraReducers:function(e){e.addCase(U.fulfilled,(function(e,t){var n=Object.keys(t.payload.items).map((function(e){return Object(d.a)(Object(d.a)({},t.payload.items[e].item),{},{_id:e})}));e.items=n})),e.addCase(M.fulfilled,(function(e,t){e.items=[].concat(Object(A.a)(e.items),[t.payload.item])})),e.addCase(E.fulfilled,(function(e,t){e.items=e.items.filter((function(e){return e._id!==t.payload.id}))}))}}).reducer,Y=n(8),F=function(){var e=Object(x.c)((function(e){return e.app.auth})),t=Object(x.c)((function(e){return e.price.items})),n=Object(x.b)(),r=Object(a.useState)({name:"",discription:"",cost:""}),c=Object(l.a)(r,2),i=c[0],s=c[1],o=Object(a.useState)(""),O=Object(l.a)(o,2),A=O[0],v=O[1],g=function(e){e.preventDefault(),i.name.trim().length>0&&i.cost.trim().length>0&&i.discription.trim().length>0&&n(M(i))};return e?Object(Y.jsxs)(b.a,{className:_.a.price,children:[Object(Y.jsxs)(j.a,{spacing:10,children:[Object(Y.jsx)(p.a,{variant:"h5",children:"Create Item"}),Object(Y.jsxs)(m.a,{onSubmit:g,children:[Object(Y.jsx)(j.a,{className:_.a.form__item,children:Object(Y.jsx)(h.a,{label:"Name",variant:"outlined",value:i.name,onChange:function(e){return s(Object(d.a)(Object(d.a)({},i),{},{name:e.target.value}))}})}),Object(Y.jsx)(j.a,{className:_.a.form__item,children:Object(Y.jsx)(h.a,{label:"Cost",variant:"outlined",value:i.cost,onChange:function(e){return s(Object(d.a)(Object(d.a)({},i),{},{cost:e.target.value}))}})}),Object(Y.jsx)(j.a,{className:_.a.form__item,children:Object(Y.jsx)(h.a,{label:"Discription",variant:"outlined",value:i.discription,onChange:function(e){return s(Object(d.a)(Object(d.a)({},i),{},{discription:e.target.value}))}})}),Object(Y.jsx)(j.a,{className:_.a.form__item,children:Object(Y.jsx)(f.a,{onClick:g,variant:"outlined",children:"Outlined"})})]})]}),Object(Y.jsxs)(j.a,{spacing:10,className:_.a.price__list,children:[Object(Y.jsx)(h.a,{label:"Search",variant:"outlined",value:A,onChange:function(e){return v(e.target.value)}}),Object(Y.jsx)(f.a,{onClick:function(){n(E(A.trim()))},variant:"outlined",children:"Remove"}),t&&t.map((function(e){return Object(Y.jsxs)("div",{className:_.a.price__list_item,children:[Object(Y.jsxs)("p",{children:["id: ",e._id]}),Object(Y.jsxs)("p",{children:["name: ",e.name]}),Object(Y.jsxs)("p",{children:["cost: ",e.cost]}),Object(Y.jsxs)("p",{children:["discription: ",e.discription]})]})}))]})]}):Object(Y.jsx)(u.a,{to:"login"})},K=n(80),V=n.n(K),G=n(230),X=n(231),q=Object(y.b)("bin/fetchUser",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.signInAnonymously();case 2:return a=e.sent,n.dispatch(W(a.user.multiFactor.user.uid)),e.abrupt("return",{userId:a.user.multiFactor.user.uid});case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),W=Object(y.b)("bin/getBin",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return a=e.sent,e.abrupt("return",{carts:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Q=Object(y.b)("bin/addBinItem",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),r=Object(d.a)(Object(d.a)({},t),{},{_userId:a.bin.user,_idItem:""}),e.next=4,J(a.bin.user,r);case 4:return c=e.sent,r._idItem=c.data.name,n.dispatch(q()),e.abrupt("return",{item:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),z=Object(y.b)("bin/removeBinItem",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.getState(),e.next=3,R(a.bin.user,t);case 3:return r=e.sent,n.dispatch(q()),e.abrupt("return",{id:r.data});case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Z=Object(y.c)({name:"bin",initialState:{user:"",userBin:null,fullCost:0,cartCount:null},reducers:{},extraReducers:function(e){e.addCase(q.fulfilled,(function(e,t){e.user=t.payload.userId})),e.addCase(W.fulfilled,(function(e,t){var n=0;if(t.payload.carts){var a=Object.keys(t.payload.carts).map((function(e){return n+=Math.fround(Number(t.payload.carts[e].item.cost)),Object(d.a)(Object(d.a)({},t.payload.carts[e].item),{},{_idItem:e})}));e.userBin=a,e.cartCount=a.length}else e.userBin=null,e.cartCount=null;e.fullCost=n})),e.addCase(Q.fulfilled,(function(e,t){e.userBin&&(e.userBin=[].concat(Object(A.a)(e.userBin),[t.payload.item]))})),e.addCase(z.fulfilled,(function(e,t){e.userBin&&(e.userBin=e.userBin.filter((function(e){return e._userId!==t.payload.id})))}))}}).reducer,$=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.bin.userBin})),n=Object(x.c)((function(e){return e.bin.fullCost}));return Object(Y.jsxs)("div",{className:V.a.bin,children:[Object(Y.jsx)(j.a,{className:V.a.bin__items,children:t&&t.map((function(t){return Object(Y.jsx)(G.a,{className:V.a.bin__item,children:Object(Y.jsxs)(X.a,{children:[Object(Y.jsx)(p.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:t.name}),Object(Y.jsxs)(p.a,{variant:"h5",component:"div",children:[t.cost," $"]}),Object(Y.jsx)(p.a,{sx:{mb:1.5},color:"text.secondary",children:t.discription}),Object(Y.jsx)(f.a,{onClick:function(){return n=t._idItem,void e(z(n));var n},children:"Remove"})]})},t._idItem)}))}),Object(Y.jsx)(j.a,{className:V.a.bin__cost,children:Object(Y.jsxs)(p.a,{variant:"h2",color:"text.secondary",gutterBottom:!0,children:[n.toFixed(2)," $"]})})]})},ee=n(81),te=n.n(ee),ne=Object(y.b)("app/authMe",function(){var e=Object(C.a)(g.a.mark((function e(t,n){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.signInWithEmailAndPassword(t.email.trim(),t.password.trim());case 2:return a=e.sent,e.abrupt("return",{auth:!0,userData:a.user.multiFactor.user.email});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ae=Object(y.b)("app/signOut",function(){var e=Object(C.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.signOut();case 2:return n.dispatch(q()),e.abrupt("return",{auth:!1,userData:""});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),re=Object(y.c)({name:"app",initialState:{initApp:!1,auth:!1,userData:""},reducers:{},extraReducers:function(e){e.addCase(ne.fulfilled,(function(e,t){e.auth=t.payload.auth,e.userData=t.payload.userData})),e.addCase(ae.fulfilled,(function(e,t){e.auth=t.payload.auth,e.userData=t.payload.userData}))}}).reducer,ce=function(){var e=Object(x.c)((function(e){return e.app.auth})),t=Object(x.b)(),n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(""),o=Object(l.a)(s,2),d=o[0],p=o[1],O=function(){var e=Object(C.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ne({email:c,password:d}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return e?Object(Y.jsx)(u.a,{to:"admin"}):Object(Y.jsx)(b.a,{children:Object(Y.jsxs)(m.a,{className:te.a.login__form,children:[Object(Y.jsx)(j.a,{className:te.a.login__item,children:Object(Y.jsx)(h.a,{label:"Email",variant:"outlined",value:c,onChange:function(e){return i(e.target.value)}})}),Object(Y.jsx)(j.a,{className:te.a.login__item,children:Object(Y.jsx)(h.a,{label:"Password",variant:"outlined",value:d,onChange:function(e){return p(e.target.value)}})}),Object(Y.jsx)(j.a,{className:te.a.login__item,children:Object(Y.jsx)(f.a,{onClick:O,variant:"contained",children:"Go"})})]})})},ie=n(233),se=n(232),oe=n(111),ue=n.n(oe),de=function(){var e=Object(x.c)((function(e){return e.price.items})),t=Object(x.b)(),n=function(e){t(Q(e))};return Object(Y.jsx)("div",{className:ue.a.price,children:e?e.map((function(e){return Object(Y.jsx)(le,{id:e._id,name:e.name,cost:e.cost,discription:e.discription,eventHendler:n},e._id)})):Object(Y.jsx)("p",{children:"Not Items"})})},le=function(e){var t=e.id,n=e.name,a=e.discription,r=e.cost,c=e.eventHendler;return Object(Y.jsx)(G.a,{className:ue.a.card,onClick:function(){return c({_id:t,name:n,discription:a,cost:r})},children:Object(Y.jsxs)(se.a,{children:[Object(Y.jsx)(ie.a,{component:"img",height:"140",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAALVBMVEXz9Pa5vsq2u8j29/jN0dno6u7V2N++ws3w8fTf4efi5OnFydPY2+HJztbR1txPmUB/AAAC0klEQVR4nO3b55aqMBiFYUoioXn/l3ukKSVBJGH4ctb7/JxRVrYbCDVJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArPLQ7g60YnSjwmoqc3eouarOwmsrOT026TXKu4NNyosCioloissSFndn6+VlNgwn6EY4LrKUsCnm7TCaNuiudFqoiIT9Spo9Ak+Hj77GWsKUMSasAi+2lJMwIeE5JPxLtoRGa8+xiU5YqX5urBuf4UlO+Eyn+br2OHaWm9DU2eeoK2tOL1Vuwucs4Is+u1SxCctlwLQ4O0SpCfN6fXpw9thZakK9qjDN1MmlSk24Xkm/jdG9sxWaMG82CXc3ROXe2UpN+PgpYbffbRwtCk3421qqug+7WpSa0Pywp5lmTnuLUhNaZgvHt4yafgx7i1ITbq4sOoeoZm3bWhSbcDHyF8d0YNRiVba0KDdhMj/yTl2Twep3sLQoOOGrnmn4hePEf9mg/acQnDDJK1V013Trh3HMdesGbS1KTpj0FzG0cQ3O0qClReEJd9ka3LYYb0LzdARcRYw3oavB9YoabUJ3g6sWY0241+CyxUgSmtWFqP0GFy3GkVCnhZ7vPdqvAT8txpAw10WazYf4vcFZizEk1P3fPy0eabD7xnC+JT9h12D/j3o8djvWYH83ufu4/IT6PeKhxYMNdqdSUSScGny3eLTBaBLqxaAL/W0ejC3hvMEh4uF8kSTU+xmiT7hp8L9L6NVgBAk9G4wgoWeD4hN6Nyg+oXeD0hPmxw9dYk24vX9IQhLem21AQhKS8H6hE8q+TtPdVvM1hJKaMBwS/iUSnpILSji+FaTCvgk83oer707XmR70uuTdNSXh3bX384hXvH8Yeus+x2ye1gtGxjukSVJdllBGhUn3QKL/wdpWJmQd7em2CLoV9ltiq0XsZia6fITVCCoQAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMU/B0kslFd7c1EAAAAASUVORK5CYII="}),Object(Y.jsxs)(X.a,{children:[Object(Y.jsx)(p.a,{gutterBottom:!0,variant:"h5",component:"div",children:n}),Object(Y.jsxs)(p.a,{gutterBottom:!0,variant:"h4",component:"div",children:["Cost: ",r," $"]}),Object(Y.jsx)(p.a,{variant:"body2",color:"text.secondary",children:a})]})]})})},be={minHeight:"calc(100vh - 100px)",padding:"20px 0",margin:"0 -20px"},je=function(){return Object(Y.jsx)("div",{style:be,children:Object(Y.jsxs)(u.d,{children:[Object(Y.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(Y.jsx)(u.a,{to:"/price"})}}),Object(Y.jsx)(u.b,{path:"/price",component:de}),Object(Y.jsx)(u.b,{path:"/bin",component:$}),Object(Y.jsx)(u.b,{path:"/admin",component:F}),Object(Y.jsx)(u.b,{path:"/login",component:ce})]})})},pe=function(){return Object(Y.jsx)("footer",{})},me=n(234),he=n(129),fe=n(221),Oe=n(51),_e=n(50),xe=n.n(_e),Ae=n.p+"static/media/cart.8b8af2cc.svg",ve=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.app.userData})),n=Object(x.c)((function(e){return e.app.auth})),a=Object(x.c)((function(e){return e.bin.cartCount})),c=r.a.useState(null),i=Object(l.a)(c,2),s=i[0],o=i[1],u=Boolean(s),d=function(){return o(null)};return Object(Y.jsx)(b.a,{className:xe.a.header,children:Object(Y.jsxs)(j.a,{container:!0,className:"".concat(xe.a.header__inner," container"),children:[Object(Y.jsx)(p.a,{className:xe.a.header__title,variant:"h3",children:"Shop"}),Object(Y.jsxs)(me.a,{children:[n?Object(Y.jsx)(f.a,{className:xe.a.header__btn,onClick:function(){e(ae())},children:t}):Object(Y.jsx)(f.a,{className:xe.a.header__btn,children:Object(Y.jsx)(Oe.b,{onClick:d,to:"/login",children:"Login"})}),Object(Y.jsx)(f.a,{className:xe.a.header__btn,id:"basic-button","aria-controls":"basic-menu","aria-haspopup":"true",onClick:function(e){return o(e.currentTarget)},children:"Menu"}),!n&&Object(Y.jsx)(f.a,{className:xe.a.header__btn,children:Object(Y.jsxs)(Oe.b,{onClick:d,to:"/bin",children:[a&&Object(Y.jsx)("span",{className:xe.a.header__count,children:a}),Object(Y.jsx)("img",{src:Ae,alt:" "})]})})]}),Object(Y.jsxs)(he.a,{id:"basic-menu",anchorEl:s,open:u,onClose:d,MenuListProps:{"aria-labelledby":"basic-button"},children:[Object(Y.jsx)(fe.a,{className:xe.a.header__link,children:Object(Y.jsx)(Oe.b,{onClick:d,to:"/price",children:"Price"})}),n?Object(Y.jsx)(fe.a,{className:xe.a.header__link,children:Object(Y.jsx)(Oe.b,{onClick:d,to:"/admin",children:"Admin"})}):Object(Y.jsx)(fe.a,{className:xe.a.header__link,children:Object(Y.jsx)(Oe.b,{onClick:d,to:"/bin",children:"Bin"})})]})]})})},ge=n(220),Ce={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},ye=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(f.a,{onClick:function(){return r(!0)},children:"Open modal"}),Object(Y.jsx)(ge.a,{keepMounted:!0,open:n,onClose:function(){return r(!1)},"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:Object(Y.jsxs)(b.a,{sx:Ce,children:[Object(Y.jsx)(p.a,{id:"keep-mounted-modal-title",variant:"h6",component:"h2",children:"Text in a modal"}),Object(Y.jsx)(p.a,{id:"keep-mounted-modal-description",sx:{mt:2},children:"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."})]})})]})},we=Object(s.a)({palette:{primary:{main:"#00897b"},secondary:{main:"#c62828"}}}),ke=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.app.auth}));return Object(a.useEffect)((function(){t||e(q()),e(U())}),[]),Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ye,{}),Object(Y.jsxs)(o.a,{theme:we,children:[Object(Y.jsx)(ve,{}),Object(Y.jsx)("main",{className:"container",children:Object(Y.jsx)(je,{})}),Object(Y.jsx)(pe,{})]})]})},Ne=n(49),Se=n(77),Be=Object(Ne.b)({app:re,price:H,bin:Z}),Ie=Object(y.a)({reducer:Be,middleware:function(e){return e().prepend(Se.a)}});window.store=Ie,i.a.render(Object(Y.jsx)(Oe.a,{children:Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(x.a,{store:Ie,children:Object(Y.jsx)(ke,{})})})}),document.getElementById("root"))},50:function(e,t,n){e.exports={container:"Header_container__106CP",header:"Header_header__QBE_h",header__inner:"Header_header__inner__1B4TL",header__btn:"Header_header__btn__1GXha",header__count:"Header_header__count__1A1CJ",header__title:"Header_header__title__7oehl"}},63:function(e,t,n){e.exports={price:"Admin_price__1Jwot",form__item:"Admin_form__item__3dM0T",price__list:"Admin_price__list__34I5R",price__list_item:"Admin_price__list_item__3T8rh"}},80:function(e,t,n){e.exports={bin:"Bin_bin__20mv0",bin__items:"Bin_bin__items__3_k3s",bin__item:"Bin_bin__item__oP_zB",bin__cost:"Bin_bin__cost__3SlHz"}},81:function(e,t,n){e.exports={login__form:"Login_login__form__2Z6-a",login__item:"Login_login__item__30anZ"}}},[[175,1,2]]]);
//# sourceMappingURL=main.1f229c3a.chunk.js.map