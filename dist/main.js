(()=>{"use strict";const t=function(t,e,d){return{title:t,description:e,dueDate:d}},e=function(){const t=[];return{list:t,addTodo:function(e){t.push(e)},deleteTodo:function(e){t.splice(e,1)}}},d=t("title1","desc 1","date 1"),o=t("title2","desc 2","date 2"),c=t("title3","desc 3","date 3"),n=t("title4","desc 4","date 4"),i=e(),s=e(),r=e(),a=function(){const t=[];return{projects:t,addProject:function(e){t.push({project:e})},deleteProject:function(e){t.splice(e,1)}}}();a.addProject(i),a.addProject(s),a.deleteProject(0),console.log(a),i.addTodo(d),s.addTodo(o),s.addTodo(c),i.addTodo(n),r.addTodo(c)})();