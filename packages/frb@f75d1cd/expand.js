function expand(e,t){var r=expand.semantics.expand.bind(expand.semantics);return r(e,t,r)}var Set=require("collections/set"),Map=require("collections/map"),Operators=require("./operators");module.exports=expand,expand.semantics={reflexive:new Set(["literal","element","rangeContent","mapContent"]),traverseLeft:new Set(["with","mapBlock","filterBlock","someBlock","everyBlock","sortedBlock","groupBlock","groupMapBlock"]),expanders:new Map([["value",function(e,t){return t.value||{type:"value"}}],["parameters",function(e,t){return t.parameters||{type:"parameters"}}],["record",function(e,t,r){var n={type:"record",args:[]};for(var a in e.args)n.args[a]=r(e.args[a],t,r);return n}],["component",function(e,t,r){return t.components&&e.component?{type:"component",label:t.components.getObjectLabel(e.component)}:e}]]),expand:function(e,t,r){return this.expanders.has(e.type)?this.expanders.get(e.type)(e,t,r):this.traverseLeft.has(e.type)?{type:e.type,args:[r(e.args[0],t,r)].concat(e.args.slice(1))}:this.reflexive.has(e.type)?e:{type:e.type,args:e.args.map(function(e){return r(e,t,r)})}}};