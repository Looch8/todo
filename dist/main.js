(()=>{"use strict";const t=function(t,e,o,d){return{title:t,description:e,dueDate:o,priority:d}},e=(t("title1","desc 1","date 1"),t("title2","desc 2","date 2"),t("title3","desc 3","date 3"),t("title4","desc 4","date 4"),function(){const t=[];return{projects:t,addProject:function(e){t.push(e)},deleteProject:function(e){t.splice(e,1)}}}()),o=()=>e.addProject(function(){const t=[];return{list:t,addTodo:function(e,o,d,c){const n={title:e,description:o,dueDate:d,priority:c};t.push(n)},deleteTodo:function(e){t.splice(e,1)}}}());o(),o(),o(),o(),o(),e.projects[3].addTodo("hello","random","random date","low"),console.log(e)})();