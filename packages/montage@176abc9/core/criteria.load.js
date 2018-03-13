montageDefine("176abc9","core/criteria",{dependencies:["./core","frb/parse","frb/stringify","frb/evaluate","frb/language","frb/scope","frb/compile-evaluator"],factory:function(e,t,r){var i=e("./core").Montage,n=e("frb/parse"),s=e("frb/stringify"),a=(e("frb/evaluate"),e("frb/language").precedence),o=e("frb/scope"),p=e("frb/compile-evaluator"),u=t.Criteria=i.specialize({_expression:{value:null},expression:{get:function(){return this._expression}},parameters:{value:null},_syntax:{value:null},syntax:{get:function(){return this._syntax||(this._syntax=n(this._expression))}},_compiledSyntax:{value:null},compiledSyntax:{get:function(){return this._compiledSyntax||(this._compiledSyntax=p(this.syntax))}},initWithSyntax:{value:function(e,t){return this._syntax=e,this.parameters=t,this}},initWithExpression:{value:function(e,t){return this._expression=e,this.parameters=t,this}},initWithPath:{value:function(e){return this.initWithExpression(e)}},criteriaWithParameters:{value:function(e){var t=(new this.constructor).initWithExpression(this.expression);return t.parameters=e,t}},serializeSelf:{value:function(e){e.setProperty("expression",this._expression||(this._expression=s(this.syntax))),e.setProperty("parameters",this.parameters)}},deserializeSelf:{value:function(e){var t;t=e.getProperty("expression")||e.getProperty("path"),void 0!==t&&(this._expression=t),t=e.getProperty("parameters"),void 0!==t&&(this.parameters=t)}},__scope:{value:null},_scope:{get:function(){return this.__scope||(this.__scope=new o)}},evaluate:{value:function(e,t){return this._scope.parameters=t||this.parameters,this._scope.value=e,this.compiledSyntax(this._scope)}}},{forObjectsLike:{value:function(e){var t,r,i,n,s,a,o,p=Object.keys(e),u="";for(t=0;r=p[t];t++)if(i=e[r],Array.isArray(i)){for(a="",n=0;s=i[n];n++)o=r,o+=n,a.length>0&&(a+=" && "),a+=r,a+=".has($",a+=o,a+=")",e[o]=s;u.length>0&&(u+=" && "),u+=a}else u.length>0&&(u+=" && "),u+=r,u+="== $",u+=r;return(new this).initWithExpression(u,e)}},withExpression:{value:function(e,t){return(new this).initWithExpression(e,t)}},withSyntax:{value:function(e,t){return(new this).initWithSyntax(e,t)}}});a.forEach(function(e,t,r){i.defineProperty(u.prototype,t,{value:function(){var e=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?n(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this.constructor).initWithSyntax({type:t,args:[this.syntax].concat(e)})}}),i.defineProperty(u,t,{value:function(){var e=Array.prototype.map.call(arguments,function(e){return"string"==typeof e?n(e):e.syntax?e.syntax:"object"==typeof e?e:void 0});return(new this).initWithSyntax({type:t,args:e})}})})}});