(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(35)},22:function(e,t,a){},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),i=(a(22),a(15)),l=a(3),c=a(4),m=a(6),d=a(5),u=a(7),p=(a(23),a(14)),k=a.n(p),v="There are no tasks! Add something",h=function(e){var t=e.message;return s.a.createElement("p",{className:"todo-app__text"}," ",t.length?"You have ".concat(t.length," tasks to complete"):v)},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(e){var t=a.state.content;e.preventDefault(),t?(a.props.addTask(a.state.content),a.setState({content:""})):a.props.addTask("Task number ")},a.handleChange=function(e){a.setState({content:e.target.value})},a.state={content:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{id:"todo__form",className:"add-task__form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"add-task__input",type:"text",name:"task",placeholder:"whats your next task?",onChange:this.handleChange,value:this.state.content,"aria-label":"Input for adding task",minLength:3}))}}]),t}(n.Component),b="btn",g="Pass text to props",E="button",_=!1,y=function(e){var t=e.styling,a=void 0===t?b:t,s=e.text,o=void 0===s?g:s,r=e.type,i=void 0===r?E:r,l=e.event,c=e.form,m=e.aria,d=e.disabled,u=void 0===d?_:d;return n.createElement("button",{type:i,onClick:l,className:a,form:c,disabled:u,"aria-label":m},o)},T=function(e){var t=e.removeLastTask,a=e.clearList,s=e.disableBtns;return n.createElement("div",{className:"btn-container"},n.createElement(y,{text:"- Remove last task",event:t,disabled:s,aria:"Remove tasks"}),n.createElement(y,{text:"Clear all",event:a,disabled:s,aria:"Clear all tasks"}))},w=function(e){var t=e.item,a=e.index,n=e.removeItem;return s.a.createElement("li",{className:"todo-app__list-element",key:t.id,"aria-label":"single task"},s.a.createElement("p",null," ",t.text," ","".concat(a+1,"#")),s.a.createElement("span",{onClick:function(e){n(t)},className:"list__element-close",role:"img","aria-label":"close"},"\u274c"))},x=a(8),N=function(e){var t=e.tasks,a=e.event;return s.a.createElement("ul",{className:"todo-app__list",group:"role","aria-labelledby":"groupLabel"},s.a.createElement(x.TransitionGroup,{className:"todo-app__list-container"},t.map(function(e,t){return s.a.createElement(x.CSSTransition,{key:e.id,timeout:500,classNames:"fade"},s.a.createElement(w,{index:t,key:e.id,item:e,removeItem:a}))})))},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addTask=function(e){a.setState({tasks:[].concat(Object(i.a)(a.state.tasks),[{id:k()(),text:e}])})},a.removeLast=function(){var e=a.state.tasks;a.setState({tasks:e.slice(0,-1)})},a.clearList=function(){a.setState({tasks:[]})},a.removeTask=function(e){a.setState(function(t){return{tasks:t.tasks.filter(function(t){return e!==t})}})},a.handleChange=function(e){a.setState({content:e.target.value})},a.state={tasks:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.tasks;return s.a.createElement("div",{className:"todo-app"},s.a.createElement("article",{className:"todo-app__container"},s.a.createElement("h1",{className:"todo-app__title","aria-label":"App title"},"Hey, Good Evening!"),s.a.createElement(h,{message:e}),s.a.createElement(f,{addTask:this.addTask,listOfTasks:e.length}),s.a.createElement(T,{removeLastTask:this.removeLast,clearList:this.clearList,disableBtns:0===e.length}),s.a.createElement(N,{tasks:e,event:this.removeTask}),s.a.createElement(y,{styling:"btn btn--add",form:"todo__form",text:"+ Add task",type:"submit",aria:"Add task"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.ef30c905.chunk.js.map