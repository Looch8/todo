(()=>{"use strict";const t=function(t,e,o,n){return{title:t,description:e,dueDate:o,priority:n}},e=document.querySelector("#content");console.log(e),e.textContent="hello",t("title1","desc 1","date 1"),t("title2","desc 2","date 2"),t("title3","desc 3","date 3"),t("title4","desc 4","date 4");const o=function(){const t=[];return{projects:t,addProject:function(e){t.push(e)},deleteProject:function(e){t.splice(e,1)}}}(),n=()=>o.addProject(function(){const t=[];return{list:t,addTodo:function(e,o,n,c,d){const i={title:e,description:o,dueDate:n,priority:c,isComplete:!1};t.push(i)},deleteTodo:function(e){t.splice(e,1)}}}()),c=(t,e,n,c,d)=>{o.projects[t].addTodo(e,n,c,d)};n(),n(),n(),n(),n(),console.log(o.projects),c(3,"hello","random","random date","low"),c(3,"bye","random","random date","low"),o.projects[3].list[0].isComplete=!0})();