(()=>{"use strict";const d=function(d,t,o){return{title:d,description:t,dueDate:o}},t=function(){const d=[];return{project:d,addProject:function(){d.push([])},addTodo:function(t,o){d[t].push(o)}}},o=d("title1","desc 1","date 1"),e=d("title2","desc 2","date 2"),c=d("title3","desc 3","date 3"),n=d("title4","desc 4","date 4"),a=t(),s=t();a.addProject(),s.addProject(),a.addTodo(0,o),s.addTodo(0,e),s.addTodo(0,c),a.addTodo(1,n),console.log(a),console.log(s)})();