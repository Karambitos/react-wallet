"use strict";(self.webpackChunkreact_wallet=self.webpackChunkreact_wallet||[]).push([[996],{2996:function(e,t,n){n.r(t),n.d(t,{default:function(){return Le}});var a,r,s=n(9434),c=n(9439),i=n(5861),o=n(7757),l=n.n(o),d=n(2791),u=n(4805),m=n(6378),h=n(9167),f=n(8418),p=["title","titleId"];function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x(e,t){var n=e.title,s=e.titleId,c=b(e,p);return d.createElement("svg",_({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},c),n?d.createElement("title",{id:s},n):null,a||(a=d.createElement("g",{clipPath:"url(#clip0_37400_43)"},d.createElement("path",{d:"M10.5 5.83343L8.16666 3.5001M1.45831 12.5418L3.43253 12.3224C3.67373 12.2956 3.79433 12.2822 3.90706 12.2457C4.00707 12.2133 4.10224 12.1676 4.19 12.1097C4.28891 12.0445 4.37471 11.9587 4.54632 11.7871L12.25 4.08343C12.8943 3.4391 12.8943 2.39443 12.25 1.75009C11.6057 1.10576 10.561 1.10576 9.91666 1.75009L2.21299 9.45375C2.04138 9.62536 1.95558 9.71116 1.89035 9.81008C1.83248 9.89783 1.78674 9.99301 1.75436 10.093C1.71787 10.2057 1.70447 10.3263 1.67767 10.5675L1.45831 12.5418Z",stroke:"black",strokeOpacity:.8,strokeWidth:1.2,strokeLinecap:"round",strokeLinejoin:"round"}))),r||(r=d.createElement("defs",null,d.createElement("clipPath",{id:"clip0_37400_43"},d.createElement("rect",{width:14,height:14,fill:"white"})))))}var j,y,N=d.forwardRef(x),E=(n.p,n(1413)),v=n(5987),g="IconButton_iconButton__tzuy9",C="IconButton_iconButtonContainer__5Jo04",T=n(3329),M=["children","onClick"],w=function(e){var t=e.children,n=e.onClick,a=(0,v.Z)(e,M);return(0,T.jsx)("button",(0,E.Z)((0,E.Z)({className:g,onClick:n},a),{},{children:(0,T.jsx)("div",{className:C,children:t})}))},k="TransactionsList_transactionsTableWrapper__mxyjk",L="TransactionsList_transactionsTable__j23tw",O="TransactionsList_thead__QSqri",I="TransactionsList_tr__9mNa4",D="TransactionsList_th__0-ZBr",P="TransactionsList_td__YUqB+",S="TransactionsList_tbody__whe48",Y="TransactionsList_tableButton__zEJeH",Z="TransactionsList_mobileTransactionsList__Q2dgA",B="TransactionsList_mobileTransactionsItem__dP0LE",F="TransactionsList_mobileTransaction__YYnNX",A="TransactionsList_income__yw5V+",W="TransactionsList_expense__m40VH",q="TransactionsList_mobileTransList__title__GMrxG",H="TransactionsList_editButtonTitle__Gk3r3",U="Plug_container_btn__i2o1k",X="Plug_text__OUzuz",R="Plug_btn__uTXcB",G=function(e){var t=e.handleOpenModal;return(0,T.jsxs)("div",{className:U,children:[(0,T.jsx)("p",{className:X,children:"You don't have any transactions yet."}),(0,T.jsx)("button",{type:"button",className:R,onClick:t,children:"My First Transaction"})]})},Q=n(4942),z=n(4164),J=n(2426),K=n.n(J),V=n(5985),$=n(5313),ee="ModalTransactionEdit_overlay__B2o4N",te="ModalTransactionEdit_modalAddTrans__kKFqR",ne="ModalTransactionEdit_closeButton__o8t0U",ae="ModalTransactionEdit_closeButtonIcon__53TOQ",re="ModalTransactionEdit_title__s+h+g",se="ModalTransactionEdit_form__ED67i",ce="ModalTransactionEdit_inputsWrapper__KYY-s",ie="ModalTransactionEdit_toggleContainer__yECoO",oe="ModalTransactionEdit_toggleText__hH76G",le="ModalTransactionEdit_activeExpense__Nvmw0",de="ModalTransactionEdit_activeIncome__eKee2",ue="ModalTransactionEdit_selectorWrapper__T6FAr",me="ModalTransactionEdit_categoryInput__4fmJO",he="ModalTransactionEdit_numberAndCalendarWrapper__FNPnv",fe="ModalTransactionEdit_inputNumber__afvPL",pe="ModalTransactionEdit_datePickerContainer__rtywG",_e="ModalTransactionEdit_inputCalendar__nI-jk",be="ModalTransactionEdit_inputComment__CAUuH",xe="ModalTransactionEdit_buttonsContainer__6EjR6",je=(n(5462),function(e){var t=e.onClose,n=e.transaction,a=(0,d.useState)(K()(n.transactionDate,"YYYY-MM-DD").format("YYYY-MM-DD")),r=(0,c.Z)(a,2),o=r[0],u=r[1],f=(0,d.useState)("EXPENSE"===n.type),p=(0,c.Z)(f,2),_=p[0],b=p[1],x=function(e){switch(e){case"c9d9e447-1b83-4238-8712-edc77b18b739":return"Main Expenses";case"27eb4b75-9a42-4991-a802-4aefe21ac3ce":return"Products";case"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4":return"Self care";case"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386":return"Car";case"76cc875a-3b43-4eae-8fdb-f76633821a34":return"Child care";case"128673b5-2f9a-46ae-a428-ec48cf1effa1":return"Household products";case"1272fcc4-d59f-462d-ad33-a85a075e5581":return"Education";case"c143130f-7d1e-4011-90a4-54766d4e308e":return"Leisure";case"719626f1-9d23-4e99-84f5-289024e437a8":return"Other expenses";case"3acd0ecd-5295-4d54-8e7c-d3908f4d0402":return"Entertainment";case"063f1132-ba5d-42b4-951d-44011ca46262":return"Income";default:return}}(n.categoryId),j=parseInt(n.amount),y=j>=0?j:Math.abs(j),N=(0,d.useState)({type:n.type||"",amount:y,transactionDate:n.transactionDate||"",comment:n.comment||""}),v=(0,c.Z)(N,2),g=v[0],C=v[1],M=(0,s.I0)(),w=function(e){var t=e.target,n=t.name,a=t.value;C((function(e){return(0,E.Z)((0,E.Z)({},e),{},(0,Q.Z)({},n,a))}))},k=function(){b(!_),C((function(e){return(0,E.Z)((0,E.Z)({},e),{},{type:"INCOME"===e.type?"EXPENSE":"INCOME"})}))};(0,d.useEffect)((function(){var e=function(e){"Escape"===e.key&&t()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var L,O=_?"EXPENSE":"INCOME",I=parseInt(g.amount),D=function(){var e=(0,i.Z)(l().mark((function e(a){var r,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!(I<=0)){e.next=4;break}return V.Am.error("Amount must be positive number",{className:"custom-toast-negative"}),e.abrupt("return");case 4:if(!(I>1e7)){e.next=7;break}return V.Am.error("Amount must be less than or equal to 10,000,000",{className:"custom-toast-negative"}),e.abrupt("return");case 7:r=_?Number("-".concat(I)):I,s={transactionDate:g.transactionDate,type:O,categoryId:n.categoryId,comment:g.comment,amount:r},M((0,m.ii)({transactionId:n.id,credentials:s})),M((0,h.n3)()),t();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return z.createPortal((0,T.jsx)("div",{className:ee,onClick:function(e){e.target===e.currentTarget&&t()},children:(0,T.jsxs)("div",{className:te,children:[(0,T.jsx)("button",{className:ne,type:"button",onClick:t,children:(0,T.jsx)($.r,{className:ae})}),(0,T.jsx)("h1",{className:re,children:"Edit transaction"}),(0,T.jsxs)("div",{className:ie,children:[(0,T.jsx)("span",{onClick:k,className:"".concat(oe," ").concat(_?"":de),children:"Income"}),(0,T.jsx)("span",{className:oe,children:"/"}),(0,T.jsx)("span",{onClick:k,className:"".concat(oe," ").concat(_?le:""),children:"Expense"})]}),(0,T.jsxs)("form",{className:se,onSubmit:D,children:[(0,T.jsxs)("div",{className:ce,children:[_&&(0,T.jsx)("div",{className:ue,children:(0,T.jsx)("input",{type:"text",className:me,value:x,readOnly:!0})}),(0,T.jsxs)("div",{className:he,children:[(0,T.jsx)("input",{className:fe,type:"number",placeholder:"0.00",required:!0,value:g.amount,name:"amount",onChange:w}),(0,T.jsx)("div",{className:pe,children:(0,T.jsx)("input",{className:_e,value:(L=o,K()(L,"YYYY-MM-DD").format("DD.MM.YYYY")),onChange:u})})]}),(0,T.jsx)("input",{type:"text",className:be,placeholder:"Comment",value:g.comment,required:!0,name:"comment",onChange:w})]}),(0,T.jsxs)("div",{className:xe,children:[(0,T.jsx)("button",{type:"submit",className:"button",children:"Save"}),(0,T.jsx)("button",{type:"button",className:"button button--secondary",onClick:t,children:"Cancel"})]})]})]})}),document.getElementById("modalEditTransaction"))}),ye=function(e){var t=e.openModal,n=(0,s.I0)(),a=(0,s.v9)(f.xU),r=(0,s.v9)(f.Lr);(0,d.useEffect)((function(){n((0,m.mI)())}),[]);var o=function(e){return"EXPENSE"===e?"-":"+"},p=function(e){return{className:"EXPENSE"===e?W:A,color:"EXPENSE"===e?"#FF6596":"#24CCA7"}},_=function(e){switch(e){case"c9d9e447-1b83-4238-8712-edc77b18b739":return"Main Expenses";case"27eb4b75-9a42-4991-a802-4aefe21ac3ce":return"Products";case"bbdd58b8-e804-4ab9-bf4f-695da5ef64f4":return"Self care";case"3caa7ba0-79c0-40b9-ae1f-de1af1f6e386":return"Car";case"76cc875a-3b43-4eae-8fdb-f76633821a34":return"Child care";case"128673b5-2f9a-46ae-a428-ec48cf1effa1":return"Household products";case"1272fcc4-d59f-462d-ad33-a85a075e5581":return"Education";case"c143130f-7d1e-4011-90a4-54766d4e308e":return"Leisure";case"719626f1-9d23-4e99-84f5-289024e437a8":return"Other expenses";case"3acd0ecd-5295-4d54-8e7c-d3908f4d0402":return"Entertainment";case"063f1132-ba5d-42b4-951d-44011ca46262":return"Income";default:return}},b=function(e){var t=Math.abs(e).toFixed(2),n=new Intl.NumberFormat("en-US").format(t).replaceAll(","," "),a=t.split(".")[1]||"00";return"".concat(n,".").concat(a)},x=function(){var e=(0,i.Z)(l().mark((function e(t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,m.v8)(t));case 2:n((0,h.n3)());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=(0,u.useMediaQuery)({query:"(max-width: 767.98px)"}),y=(0,u.useMediaQuery)({query:"(min-width: 768px)"}),E=(0,d.useState)(null),v=(0,c.Z)(E,2),g=v[0],C=v[1],M=(0,d.useState)(!1),U=(0,c.Z)(M,2),X=U[0],R=U[1],Q=function(e){C(e),R(!0)};return(0,T.jsxs)(T.Fragment,{children:[y&&(0,T.jsx)(T.Fragment,{children:r.length>0?(0,T.jsx)("div",{className:k,children:(0,T.jsxs)("table",{className:L,children:[(0,T.jsx)("thead",{className:O,children:(0,T.jsxs)("tr",{className:I,children:[(0,T.jsx)("th",{className:D,children:"Date"}),(0,T.jsx)("th",{className:D,children:"Type"}),(0,T.jsx)("th",{className:D,children:"Category"}),(0,T.jsx)("th",{className:D,children:"Comment"}),(0,T.jsx)("th",{className:"".concat(D," textAlignL"),children:"Sum"}),(0,T.jsx)("th",{className:D})]})}),(0,T.jsx)("tbody",{className:S,children:r.map((function(e){return(0,T.jsxs)("tr",{className:I,children:[(0,T.jsx)("td",{className:P,children:new Date(e.transactionDate).toLocaleDateString("ru-RU",{year:"2-digit",month:"2-digit",day:"2-digit"})}),(0,T.jsx)("td",{className:P,children:o(e.type)}),(0,T.jsx)("td",{className:P,children:_(e.categoryId)}),(0,T.jsx)("td",{className:P,children:e.comment}),(0,T.jsx)("td",{className:P,style:{color:p(e.type).color,fontWeight:"700"},children:b(e.amount)}),(0,T.jsxs)("td",{className:"".concat(D," cell textAlignL"),children:[(0,T.jsx)(w,{type:"button","aria-label":"edit",onClick:function(){return Q(e)},children:(0,T.jsx)(N,{})}),(0,T.jsx)("button",{disabled:a,onClick:function(){return x(e.id)},className:"".concat(Y," button button button--small"),children:"Delete"})]})]},e.id)}))})]})}):(0,T.jsx)(T.Fragment,{children:!a&&(0,T.jsx)(G,{handleOpenModal:t})})}),j&&(0,T.jsx)(T.Fragment,{children:r.length>0?(0,T.jsx)("ul",{className:Z,children:r.map((function(e){return(0,T.jsx)("li",{className:B,children:(0,T.jsxs)("ul",{className:"".concat(F,"  ").concat(p(e.type).className),children:[(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:q,children:"Date"})," ",(0,T.jsx)("span",{children:new Date(e.transactionDate).toLocaleDateString("ru-RU",{year:"2-digit",month:"2-digit",day:"2-digit"})})]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:q,children:"Type"})," ",(0,T.jsx)("span",{children:o(e.type)})]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:q,children:"Category"})," ",(0,T.jsx)("span",{children:_(e.categoryId)})]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:q,children:"Comment"})," ",(0,T.jsx)("span",{children:e.comment})]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("span",{className:q,children:"Sum"})," ",(0,T.jsx)("span",{style:{color:p(e.type).color,fontWeight:"700"},children:b(e.amount)})]}),(0,T.jsxs)("li",{children:[(0,T.jsx)("button",{type:"button",className:"".concat(Y," button button button--small"),onClick:function(){return x(e.id)},children:"Delete"}),(0,T.jsx)("div",{children:(0,T.jsxs)(w,{type:"button","aria-label":"edit",onClick:function(){return Q(e)},children:[(0,T.jsx)(N,{}),(0,T.jsx)("span",{className:H,children:"Edit"})]})})]})]})},e.id)}))}):(0,T.jsx)(G,{handleOpenModal:t})}),g&&(0,T.jsx)(je,{isOpen:X,onClose:function(){R(!1),C(null)},transaction:g})]})},Ne=n(3541),Ee=["title","titleId"];function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ve.apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ce(e,t){var n=e.title,a=e.titleId,r=ge(e,Ee);return d.createElement("svg",ve({width:20,height:20,viewBox:"0 0 20 20",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},r),n?d.createElement("title",{id:a},n):null,j||(j=d.createElement("path",{d:"M10 0V20",stroke:"white",strokeWidth:2})),y||(y=d.createElement("path",{d:"M0 10L20 10",stroke:"white",strokeWidth:2})))}var Te=d.forwardRef(Ce),Me=(n.p,"HomeTab_containerBtn__5TiLn"),we="HomeTab_btnPlus__7CsZD",ke=function(){var e=(0,s.I0)(),t=function(){e((0,Ne.uf)(!0))};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(ye,{openModal:t}),(0,T.jsx)("div",{className:Me,children:(0,T.jsx)("button",{type:"button",className:we,onClick:t,children:(0,T.jsx)(Te,{})})})]})},Le=function(){return(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(ke,{})})}}}]);
//# sourceMappingURL=996.ae4186e6.chunk.js.map