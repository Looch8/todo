(()=>{"use strict";const e=function(e,t,d){return{title:e,description:t,dueDate:d}},t=(e("title1","desc 1","date 1"),e("title2","desc 2","date 2"),e("title3","desc 3","date 3"),e("title4","desc 4","date 4"),function(){const e=[];return{projects:e,addProject:function(t){e.push(t)},deleteProject:function(t){e.splice(t,1)}}}());t.addProject(function(){const e=[];return{list:e,addTodo:function(t,d,o){const n={title:t,description:d,dueDate:o};e.push(n)},deleteTodo:function(t){e.splice(t,1)}}}()),t.projects[3].addTodo("hello","random","random date"),t.projects[0].addTodo("newer title","newer desc","newer date"),t.projects[0].addTodo("title 2","desc 2","date 2"),t.projects[2].addTodo("another title","another desc","another date"),console.log(t),t.projects[1].addTodo({title:"new title",descrption:"new desc",dueDate:"new Date"})})();