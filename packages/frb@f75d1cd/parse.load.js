montageDefine("f75d1cd","parse",{dependencies:["collections/shim","./grammar","collections/map"],factory:function(e,r,n){function t(e,r){var n;if(Array.isArray(e))return{type:"tuple",args:e.map(function(e){return t(e,r)})};if(!r&&(n=o.get(e)))return n;try{var c=a.parse(e,r||Object.empty);return r||o.set(e,c),c}catch(s){throw s.message=s.message.replace(/[\s\.]+$/,"")+"  on line "+s.line+" column "+s.column,s}}e("collections/shim");var a=e("./grammar"),c=e("collections/map"),o=new c;n.exports=t}});