(()=>{"use strict";const t=function(t,d,e){return{title:t,description:d,dueDate:e}},d=function(){const t=[];return{list:t,addTodo:function(d){t.push(d)},deleteTodo:function(d){t.delete(d)}}},e=t("title1","desc 1","date 1"),o=t("title2","desc 2","date 2"),n=t("title3","desc 3","date 3"),c=t("title4","desc 4","date 4"),i=d(),s=d();i.addTodo(e),s.addTodo(o),s.addTodo(n),i.addTodo(c),console.log(i),console.log(s)})();