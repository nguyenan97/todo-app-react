(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(3),r=a.n(s),c=(a(14),a(1)),l=a(4),i=a(5),u=a(7),m=a(6),d=a(8),p=(a(15),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todoList:[]},a.handleSubmit=function(e){var t=e.target.elements.todoTask.value;t.length>0&&(a.setState({todoList:[].concat(Object(c.a)(a.state.todoList),[t])}),e.target.reset()),e.preventDefault()},a.deleteTodoTask=function(e,t){var n=Object(c.a)(a.state.todoList);n.splice(t,1),a.setState({todoList:n})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid py-2"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"display-2"},"Todos App"))),o.a.createElement("form",{className:"mb-3",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"input-group"},o.a.createElement("input",{type:"text",name:"todoTask",className:"form-control",placeholder:"Please enter your task",autoComplete:"off"}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add")))),o.a.createElement("ul",{className:"list-group"},this.state.todoList.map((function(t,a){return o.a.createElement("li",{className:"list-group-item",key:a},t,o.a.createElement("button",{className:"btn btn-sm btn-outline-danger float-right",onClick:function(t){e.deleteTodoTask(t,a)}},"Delete"))}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.1339be7b.chunk.js.map