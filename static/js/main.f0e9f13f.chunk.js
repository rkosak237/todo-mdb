(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(7),i=a.n(o),r=(a(16),a(9)),c=a(1),l=a(2),d=a(4),m=a(3),u=a(5),h=(a(17),a(8)),p=a.n(h),v="There are no tasks! Add something",k=function(e){var t=e.message;return s.a.createElement("p",{className:"todo-app__text"}," ",t.length?"You have ".concat(t.length," tasks to complete"):v)},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){var t=a.state.content;e.preventDefault(),t?(a.props.addTask(a.state.content),a.setState({content:""})):a.props.addTask("Task number ")},a.handleChange=function(e){a.setState({content:e.target.value})},a.state={content:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{id:"todo__form",className:"add-task__form",onSubmit:this.handleSubmit},s.a.createElement("input",{className:"add-task__input",type:"text",name:"task",placeholder:"whats your next task?",onChange:this.handleChange,value:this.state.content,minLength:3}))}}]),t}(n.Component),b="btn",g="Pass text to props",E="button",x=!1,_=function(e){var t=e.styling,a=void 0===t?b:t,s=e.text,o=void 0===s?g:s,i=e.type,r=void 0===i?E:i,c=e.event,l=e.form,d=e.disabled,m=void 0===d?x:d;return n.createElement("button",{type:r,onClick:c,className:a,form:l,disabled:m},o)},y=function(e){var t=e.removeLastTask,a=e.clearList,s=e.disableBtns;return n.createElement("section",{className:"btn-container"},n.createElement(_,{text:"- Remove last task",event:t,disabled:s}),n.createElement(_,{text:"Clear all",event:a,disabled:s}))},w=function(e){var t=e.item,a=e.index,n=e.removeItem;return s.a.createElement("li",{className:"todo-app__list-element",key:t.id},s.a.createElement("p",null," ",t.text," ","".concat(a+1,"#")),s.a.createElement("span",{onClick:function(e){n(t)},className:"list__element-close",role:"img","aria-label":"close"},"\u274c"))},j=function(e){var t=e.tasks,a=e.event;return s.a.createElement("ul",{className:"todo-app__list"},t.map(function(e,t){return s.a.createElement(w,{index:t,key:e.id,item:e,removeItem:a})}))},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).addTask=function(e){a.setState({tasks:[].concat(Object(r.a)(a.state.tasks),[{id:p()(),text:e}])})},a.removeLast=function(){var e=a.state.tasks;a.setState({tasks:e.slice(0,-1)})},a.clearList=function(){a.setState({tasks:[]})},a.removeTask=function(e){a.setState(function(t){return{tasks:t.tasks.filter(function(t){return e!==t})}})},a.handleChange=function(e){a.setState({content:e.target.value})},a.state={tasks:[{id:1,text:"Barnabus Stinson!"},{id:2,text:"Buy travel & tour guide book"},{id:3,text:"Be awesome"},{id:4,text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{id:5,text:"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes,"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.tasks;return s.a.createElement("div",{className:"todo-app"},s.a.createElement("article",{className:"todo-app__container"},s.a.createElement("h1",{className:"todo-app__title"},"Hey, Good Evening!"),s.a.createElement(k,{message:e}),s.a.createElement("section",null,s.a.createElement(f,{addTask:this.addTask,listOfTasks:e.length}),s.a.createElement(y,{removeLastTask:this.removeLast,clearList:this.clearList,disableBtns:0===e.length})),s.a.createElement(j,{tasks:e,event:this.removeTask}),s.a.createElement(_,{styling:"btn btn--add",form:"todo__form",text:"+ Add task",type:"submit"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.f0e9f13f.chunk.js.map