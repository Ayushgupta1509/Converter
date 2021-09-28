(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function b(e){var t=Object(c.useState)("Enter text here"),a=Object(l.a)(t,2),n=a[0],r=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"8"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();r(t),e.showAlert("Converted to Upper Case!","success")},children:"Convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.toLowerCase();r(t),e.showAlert("Converted to Lower Case!","success")},children:"Convert to Lowercase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(""),e.showAlert("Clear Text!","success")},children:"Clear Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copy to Clipboard!","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert("Remove Extra Spaces!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h2",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:n.split(" ").length}),"Words and ",Object(o.jsx)("b",{children:n.length}),"Characters"]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:.008*n.split(" ").length})," Minutes Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter something in the textbox above to preview it here "})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-").concat(e.alert.msg,"fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})}i.defaultProps={title:"Set title here",aboutText:"About"};var h=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),1e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Textutils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#042743",u("Dark mode has been enabled","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container  my-3",children:Object(o.jsx)(b,{showAlert:u,heading:"Enter the text to analyze below",mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.9b8b6fe1.chunk.js.map