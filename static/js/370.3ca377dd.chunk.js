"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[370],{4367:function(e,a,n){function s(e){var a=e.toFixed(2).toString().split("."),n=a[0].split("").reverse().map((function(e,a){return(a+1)%3===0?" ".concat(e):e})).reverse().join("");return"".concat(n,".").concat(a[1])}n.d(a,{Z:function(){return s}})},8076:function(e,a,n){n.d(a,{H:function(){return t},I:function(){return s}});var s=function(e,a){return a[1]-e[1]},t=function(e,a){return new Date(a.date)-new Date(e.date)}},8370:function(e,a,n){n.r(a),n.d(a,{default:function(){return re}});var s=n(885),t=n(2791),r=n(870),i={navWrap:"NavBar_navWrap__wxWii",navList:"NavBar_navList__9xlrX",navListItem:"NavBar_navListItem__MUXIk",link:"NavBar_link__u2LLj",linkActive:"NavBar_linkActive__uiQ10 NavBar_link__u2LLj NavBar_link__u2LLj"},o=n(3329),c=function(e){var a=e.mode,n=e.setMode;return(0,o.jsx)("div",{className:i.container,children:(0,o.jsx)("nav",{className:i.navWrap,children:(0,o.jsxs)("ul",{className:i.navList,children:[(0,o.jsx)("li",{className:i.navListItem,children:(0,o.jsx)("button",{"aria-label":"Expense",type:"button",className:a===r.E.expenseMode?i.linkActive:i.link,onClick:function(){return n(r.E.expenseMode)},children:"expenses"})}),(0,o.jsx)("li",{className:i.navListItem,children:(0,o.jsx)("button",{"aria-label":"Income",type:"button",className:a===r.E.incomeMode?i.linkActive:i.link,onClick:function(){return n(r.E.incomeMode)},children:"income"})})]})})})},l=n(9434),d=n(4942),u=n(7606),m=n(2426),_=n.n(m),h=n(5985),p=n(566),x=n(7609),b=n(1413),j={menu:function(e,a){return(0,b.Z)((0,b.Z)({},e),{},{width:a.selectProps.width,borderBottom:"1px dotted pink",padding:5})},control:function(e,a){a.selectProps.width;return{display:"flex",height:"44px",fontSize:"12px",lineHeight:"14px",paddingLeft:"19px"}},placeholder:function(e){return(0,b.Z)((0,b.Z)({},e),{},{color:"var(--trans-form-input-placeholder-color)",margin:0})},indicatorSeparator:function(e){return{display:"none"}},singleValue:function(e,a){var n=a.isDisabled?.5:1;return(0,b.Z)((0,b.Z)({},e),{},{opacity:n,transition:"opacity 300ms",color:"var(--table-description-text-color)"})}},v="TransactionsForm_wrap__ldMyx",f="TransactionsForm_wrapInput__Fh+hz",T="TransactionsForm_description__PEkHv",N="TransactionsForm_select__BN-3w",g="TransactionsForm_inputCountWrapper__jJJp-",y="TransactionsForm_calculatorIcon__4Ga47",w="TransactionsForm_inputCount__9J1gJ",M="TransactionsForm_dateWrapper__KhZR5",k="TransactionsForm_calendarIcon__lzAsM",Z="TransactionsForm_datePicker__BBUEV",C="TransactionsForm_btnInput__5-4aW",D="TransactionsForm_btnClear__J7qO+",I="TransactionsForm_buttonWrap__hozZS",E=n(8724),L=function(e){var a=e.mode,n=(e.setIsLoading,e.closeModal),i=void 0===n?function(){return 7}:n,c=(0,t.useState)(_()(new Date).format("YYYY-MM-DD")),m=(0,s.Z)(c,2),b=m[0],L=m[1],Y=(0,t.useState)(""),B=(0,s.Z)(Y,2),W=B[0],R=B[1],S=(0,t.useState)(""),A=(0,s.Z)(S,2),F=A[0],P=A[1],J=(0,t.useState)(""),O=(0,s.Z)(J,2),V=O[0],z=O[1],H=(0,t.useState)([]),K=(0,s.Z)(H,2),U=K[0],Q=K[1],X=(0,l.I0)();(0,t.useEffect)((function(){L(_()(new Date).format("YYYY-MM-DD")),R(""),P(""),z(""),a===r.E.expenseMode&&(0,p.gC)().then((function(e){var a=e.data;return Q(a)})).catch((function(e){return h.Am.error(e.message)})),a===r.E.incomeMode&&(0,p.Rp)().then((function(e){var a=e.data;return Q(a)})).catch((function(e){return h.Am.error(e.message)}))}),[a]);var q=["value","label"],G=[];var $=function(e){var a=e.target,n=a.name,s=a.value;switch(n){case"date":L(s);break;case"description":R(s);break;case"amount":z(Number(s))}};return(0,o.jsxs)("form",{className:v,onSubmit:function(e){if(e.preventDefault(),0!==W.trim().length){var n={description:W,date:b,category:F.value,amount:V};if(i(),a===r.E.expenseMode){if(!n.category||!n.description||!n.amount)return h.Am.error("Please fill in all fields");X(E.r.sendExpenseTransaction(n))}if(a===r.E.incomeMode){if(!n.category||!n.description||!n.amount)return h.Am.error("Please fill in all fields");X(E.r.sendIncomeTransaction(n))}L(_()(new Date).format("YYYY-MM-DD")),R(""),P(""),z("")}else h.Am.warning("Please fill in all fields")},autoComplete:"off",children:[(0,o.jsxs)("div",{className:f,children:[(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("input",{"aria-label":"Date",name:"date",onChange:$,type:"date",className:Z,value:b}),(0,o.jsx)("svg",{className:k,width:20,height:17,children:(0,o.jsx)("use",{href:"".concat(x.Z,"#calendar-icon")})})]}),(0,o.jsx)("input",{"aria-label":"Text",onChange:$,className:T,name:"description",type:"text",placeholder:"Product description",value:W}),(0,o.jsx)(u.ZP,{"aria-label":"Select",placeholder:(0,o.jsx)("div",{children:"Product category"}),width:"200px",styles:j,value:F,onChange:P,options:function(){for(var e=0;e<U.length;e++){var a,n=(a={},(0,d.Z)(a,q[0],U[e]),(0,d.Z)(a,q[1],U[e]),a);G.push(n)}return G}(),className:N}),(0,o.jsxs)("div",{className:g,children:[(0,o.jsx)("input",{"aria-label":"Number",onChange:$,type:"number",name:"amount",className:w,placeholder:"00.00",value:V}),(0,o.jsx)("svg",{className:y,width:18,height:20,children:(0,o.jsx)("use",{href:"".concat(x.Z,"#calculator-icon")})})]})]}),(0,o.jsxs)("div",{className:I,children:[(0,o.jsx)("button",{"aria-label":"Input",type:"submit",className:C,children:"input"}),(0,o.jsx)("button",{"aria-label":"Clear",type:"button",className:D,onClick:function(){L(_()(new Date).format("YYYY-MM-DD")),R(""),P(""),z("")},children:"clear"})]})]})},Y=n(4164),B="TransactionsModal_Overlay__Tvp+e",W="TransactionsModal_Modal__pkVXA",R=document.querySelector("#modal-root"),S=function(e){var a=e.onClose,n=e.children;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,Y.createPortal)((0,o.jsx)("div",{className:B,onClick:function(e){e.target===e.currentTarget&&a()},children:(0,o.jsx)("div",{className:W,children:n})}),R)},A="TransactionsSummary_container__xyW2b",F="TransactionsSummary_title__E0h6f",P="TransactionsSummary_list__NwVvZ",J="TransactionsSummary_item__kLjY+",O=n(9869),V=n(4367),z=function(){var e=(0,l.v9)(O.$j);return(0,o.jsxs)("div",{className:A,children:[(0,o.jsx)("h4",{className:F,children:"Summary"}),(0,o.jsx)("ul",{className:P,children:function(){var a=[];for(var n in e)a.push({month:n,amount:e[n]});return a}().map((function(e){return"N/A"!==e.amount?(0,o.jsxs)("li",{className:J,children:[(0,o.jsx)("span",{children:e.month}),(0,o.jsx)("span",{children:(0,V.Z)(e.amount)})]},e.month):""}))})]})},H=n(5861),K=n(2982),U=n(7757),Q=n.n(U),X=n(2881),q={loader:"TransactionsTable_loader__5jykR",table:"TransactionsTable_table__xu6ZB",mobileTable:"TransactionsTable_mobileTable__0sezV",tBody:"TransactionsTable_tBody__j0OZY",description:"TransactionsTable_description__f3e4R",descriptionMobile:"TransactionsTable_descriptionMobile__E+O5B",descriptionExpense:"TransactionsTable_descriptionExpense__uKiIW TransactionsTable_description__f3e4R TransactionsTable_description__f3e4R",descriptionIncome:"TransactionsTable_descriptionIncome__yWF-c TransactionsTable_description__f3e4R TransactionsTable_description__f3e4R",message:"TransactionsTable_message__4J8Nj",column:"TransactionsTable_column__AZCxj TransactionsTable_description__f3e4R",date:"TransactionsTable_date__cCA52",category:"TransactionsTable_category__GT8zv",tableRow:"TransactionsTable_tableRow__AQsRN",lastTD:"TransactionsTable_lastTD__2W0RA TransactionsTable_tableTitle__rgbMc",btnDelete:"TransactionsTable_btnDelete__++FB1",tableRowMobile:"TransactionsTable_tableRowMobile__U83UJ",tableBody:"TransactionsTable_tableBody__7wkye",descriptionLast:"TransactionsTable_descriptionLast__stjj9 TransactionsTable_description__f3e4R",tableTitle:"TransactionsTable_tableTitle__rgbMc"},G=n(8076),$=function(e){var a=e.mode,n=(0,l.v9)(O.RM),s=(0,l.v9)(O.CZ),t=(0,l.v9)(O.th),i=(0,l.v9)(O.Q$),c=(0,l.v9)(O.Kb),d=n||s||t||i||c,u=(0,l.I0)(),m=(0,l.v9)(O.ky),h=(0,l.v9)(O.uu),p=a===r.E.expenseMode?h:m,b=(0,K.Z)(p).sort(G.H),j=function(){var e=(0,H.Z)(Q().mark((function e(a,n){return Q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(E.r.deleteTransaction({transactionId:a,mode:n}));case 1:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{children:[(0,o.jsxs)("table",{className:q.table,children:[(0,o.jsx)("thead",{className:q.tableHead,children:(0,o.jsxs)("tr",{className:q.tableRow,children:[(0,o.jsx)("th",{className:q.tableTitle,children:"Date"}),(0,o.jsx)("th",{className:q.tableTitle,children:"Description"}),(0,o.jsx)("th",{className:q.tableTitle,children:"Category"}),(0,o.jsx)("th",{className:q.tableTitle,children:"Sum"}),(0,o.jsx)("th",{className:q.lastTD})]})}),(0,o.jsx)("tbody",{className:q.tableBody,children:d?(0,o.jsx)("tr",{children:(0,o.jsx)("td",{className:q.loader,children:(0,o.jsx)(X.Z,{})})}):(null===b||void 0===b?void 0:b.length)>0?b.map((function(e){return(0,o.jsxs)("tr",{className:q.tableRow,children:[(0,o.jsx)("td",{className:q.description,children:_()(e.date).format("DD.MM.YYYY")}),(0,o.jsx)("td",{className:q.description,children:e.description}),(0,o.jsx)("td",{className:q.description,children:e.category}),a===r.E.expenseMode?(0,o.jsxs)("td",{className:q.descriptionExpense,children:["-",(0,V.Z)(e.amount)," \u0433\u0440\u043d."]}):(0,o.jsxs)("td",{className:q.descriptionIncome,children:[(0,V.Z)(e.amount)," \u0433\u0440\u043d."]}),(0,o.jsx)("td",{className:q.descriptionLast,children:(0,o.jsx)("button",{"aria-label":"Delete",className:q.btnDelete,onClick:function(){return j(e._id,a)},children:(0,o.jsx)("svg",{className:q.calendarIcon,width:18,height:18,children:(0,o.jsx)("use",{href:"".concat(x.Z,"#delete-icon")})})})})]},e._id)})):(0,o.jsx)("tr",{className:q.tableRowMobile,children:(0,o.jsx)("td",{children:(0,o.jsx)("p",{className:q.message,children:"You can add your transactions"})})})})]}),(0,o.jsx)("div",{className:q.tableMobileWrap,children:(0,o.jsx)("table",{className:q.mobileTable,children:(0,o.jsx)("tbody",{className:q.tBody,children:d?(0,o.jsx)("tr",{children:(0,o.jsx)("td",{className:q.loader,children:(0,o.jsx)(X.Z,{})})}):(null===b||void 0===b?void 0:b.length)>0?b.map((function(e){return(0,o.jsxs)("tr",{className:q.tableRow,children:[(0,o.jsxs)("td",{className:q.column,children:[(0,o.jsx)("span",{className:q.descriptionMobile,children:e.description}),(0,o.jsx)("span",{className:q.date,children:e.date})]}),(0,o.jsx)("td",{className:q.category,children:e.category}),a===r.E.expenseMode?(0,o.jsxs)("td",{className:q.descriptionExpense,children:["- ",(0,V.Z)(e.amount)," \u0433\u0440\u043d."]}):(0,o.jsxs)("td",{className:q.descriptionIncome,children:[(0,V.Z)(e.amount)," \u0433\u0440\u043d."]}),(0,o.jsx)("td",{className:q.lastTD,children:(0,o.jsx)("button",{"aria-label":"Delete",className:q.btnDelete,onClick:function(){return j(e._id,a)},children:(0,o.jsx)("svg",{className:q.calendarIcon,width:18,height:18,children:(0,o.jsx)("use",{href:"".concat(x.Z,"#delete-icon")})})})})]},e._id)})):(0,o.jsx)("tr",{className:q.message,children:(0,o.jsx)("td",{children:(0,o.jsx)("p",{children:"You can add your transactions"})})})})})})]})},ee={relativeContainer:"Transactions_relativeContainer__NAIaJ",formWrap:"Transactions_formWrap__95B3I",summaryWrap:"Transactions_summaryWrap__Ho8KI",buttonModal:"Transactions_buttonModal__OC-hu",buttonClose:"Transactions_buttonClose__8UP1H",container:"Transactions_container__jPzDw",transactionsContainer:"Transactions_transactionsContainer__3OkA8"},ae=function(e){var a=e.mode,n=(0,t.useState)(!1),i=(0,s.Z)(n,2),c=i[0],d=i[1],u=(0,t.useState)(!1),m=(0,s.Z)(u,2),_=m[0],h=m[1],p=(0,l.v9)(O.is),b=(0,l.I0)();(0,t.useEffect)((function(){a===r.E.expenseMode&&b(E.r.getExpenseTransactions()),a===r.E.incomeMode&&b(E.r.getIncomeTransactions())}),[b,a]);var j=function(){h(!1),d(!c)};return(0,o.jsxs)("div",{className:ee.relativeContainer,children:[(0,o.jsxs)("div",{className:ee.container,children:[(0,o.jsx)("div",{className:ee.formWrap,children:(0,o.jsx)(L,{mode:a,setIsLoading:h,modalOpen:c,userData:p})}),(0,o.jsx)("div",{className:ee.transactionsContainer,children:(0,o.jsx)("div",{className:ee.formTableWrap,children:(0,o.jsx)($,{mode:a,setIsLoading:h,isLoading:_,userData:p})})}),!c&&(0,o.jsx)("button",{"aria-label":"Open modal",type:"button",onClick:j,className:ee.buttonModal,children:"+"})]}),c&&(0,o.jsxs)(S,{onClose:j,children:[(0,o.jsx)("button",{"aria-label":"Close",type:"button",onClick:j,className:ee.buttonClose,children:(0,o.jsx)("svg",{width:24,height:24,children:(0,o.jsx)("use",{href:"".concat(x.Z,"#arrow-to-main-icon")})})}),(0,o.jsx)(L,{modalOpen:c,userData:p,mode:a,closeModal:j,setIsLoading:h})]}),(0,o.jsx)("div",{className:ee.summaryWrap,children:(0,o.jsx)(z,{})})]})},ne="TransactionsView_transactionsWrap__bJW0D",se="TransactionsView_fon__KCwBm",te="TransactionsView_img__A9FYm",re=function(){var e=(0,t.useState)(r.E.expenseMode),a=(0,s.Z)(e,2),n=a[0],i=a[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:se}),(0,o.jsx)("div",{className:te}),(0,o.jsxs)("div",{className:ne,children:[(0,o.jsx)(c,{setMode:i,mode:n}),(0,o.jsx)(ae,{mode:n})]})]})}}}]);
//# sourceMappingURL=370.3ca377dd.chunk.js.map