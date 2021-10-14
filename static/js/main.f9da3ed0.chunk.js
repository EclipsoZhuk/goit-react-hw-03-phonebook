(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports={title:"App_title__1dwWi",contactTitle:"App_contactTitle__1tSzV"}},function(t,e,n){t.exports={text:"Filter_text__2gg0O",value:"Filter_value__1Qq6i"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},function(t,e,n){t.exports={container:"Container_container__RZyG0"}},function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3Nzl_"}},function(t,e,n){t.exports={buttonDelete:"ContactList_buttonDelete__Rqaw6"}},,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(8),s=n(16),u=n(3),l=n(4),b=n(6),m=n(5),d=n(12),h=n(9),j=n.n(h),f=n(13),p=n.n(f),v=n(0),O=function(t){var e=t.children;return Object(v.jsx)("div",{className:p.a.container,children:e})},x=n(2),C=n(14),g=n.n(C),S=n(26),_=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault();var r={id:Object(S.a)(),name:a,number:c};t.props.onSubmitData(r),t.reset()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.handleSubmit,e=this.handleChange,n=this.state,a=n.name,c=n.number;return Object(v.jsx)("div",{className:g.a.contactForm,children:Object(v.jsxs)("form",{type:"submit",onSubmit:t,children:[Object(v.jsxs)("label",{children:["Name",Object(v.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e,value:a})]}),Object(v.jsxs)("label",{children:["Number",Object(v.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:e,value:c})]}),Object(v.jsx)("button",{type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),y=_,D=n(15),N=n.n(D);function w(t){var e=t.contacts,n=t.onDeleteContact;return Object(v.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(v.jsxs)("li",{children:["".concat(a,": ").concat(c),Object(v.jsx)("button",{className:N.a.buttonDelete,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}var A=n(10),k=n.n(A);function F(t){var e=t.value,n=t.onChange;return Object(v.jsxs)("label",{className:k.a.text,children:["Find contacts by name",Object(v.jsx)("input",{placeholder:"Search",className:k.a.value,type:"text",value:e,onChange:n})]})}var z=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:d,filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.some((function(t){return t.name.toLowerCase()===e.name.toLowerCase()})))return alert(" \u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0432\u0436\u0435 \u0454 \u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0456\u0439 \u043a\u043d\u0438\u0437\u0456!!!");t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(s.a)(n))}}))},t.elementDelete=function(t,e){return t.filter((function(t){return t.id!==e}))},t.setFilterToState=function(e){return t.setState(Object(i.a)(Object(i.a)({},t.state),{},{filter:"".concat(e)}))},t.getVisibleContact=function(){var e=t.state,n=e.filter;return e.contacts.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}))},t.changeFilter=function(e){return t.setState({filter:e.currentTarget.value})},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.formSubmitHandler,e=this.changeFilter,n=this.onDeleteContact,a=this.getVisibleContact,c=this.state.filter;return Object(v.jsxs)(O,{children:[Object(v.jsx)("h1",{className:j.a.title,children:"Phonebook"}),Object(v.jsx)(y,{onSubmitData:t}),Object(v.jsx)("h2",{className:j.a.contactTitle,children:"Contacts"}),Object(v.jsx)(F,{value:c,onChange:e}),Object(v.jsx)(w,{contacts:a(),onDeleteContact:n})]})}}]),n}(a.Component),J=z;n(22),n(23);o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(J,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.f9da3ed0.chunk.js.map