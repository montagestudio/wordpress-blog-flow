montageDefine("bcbb538","index",{dependencies:["domelementtype"],factory:function(t,e,n){function o(t,e,n){"object"==typeof t?(n=e,e=t,t=null):"function"==typeof e&&(n=e,e=a),this._callback=t,this._options=e||a,this._elementCB=n,this.dom=[],this._done=!1,this._tagStack=[]}var i=t("domelementtype"),a={ignoreWhitespace:!1};o.prototype.onreset=function(){o.call(this,this._callback,this._options,this._elementCB)},o.prototype.onend=function(){this._done||(this._done=!0,this._handleCallback(null))},o.prototype._handleCallback=o.prototype.onerror=function(t){if("function"==typeof this._callback)this._callback(t,this.dom);else if(t)throw t},o.prototype.onclosetag=function(t){var e=this._tagStack.pop();this._elementCB&&this._elementCB(e)},o.prototype._addDomElement=function(t){var e=this._tagStack[this._tagStack.length-1];e?e.children.push(t):this.dom.push(t)},o.prototype.onopentag=function(t,e){var n=this._tagStack[this._tagStack.length-1],o={type:"script"===t?i.Script:"style"===t?i.Style:i.Tag,name:t,attribs:e,children:[],prev:null,next:null,parent:n||null};if(n){for(var a=n.children.length;a>0;)if(i.isTag(n.children[--a])){o.prev=n.children[a],n.children[a].next=o;break}n.children.push(o)}else this.dom.push(o);this._tagStack.push(o)},o.prototype.ontext=function(t){if(!this._options.ignoreWhitespace||""!==t.trim()){if(this._tagStack.length){var e;if((e=this._tagStack[this._tagStack.length-1])&&(e=e.children[e.children.length-1])&&e.type===i.Text)return void(e.data+=t)}else if(this.dom.length&&this.dom[this.dom.length-1].type===i.Text)return void(this.dom[this.dom.length-1].data+=t);this._addDomElement({data:t,type:i.Text})}},o.prototype.oncomment=function(t){var e=this._tagStack[this._tagStack.length-1];if(e&&e.type===i.Comment)return void(e.data+=t);var n={data:t,type:i.Comment};this._addDomElement(n),this._tagStack.push(n)},o.prototype.oncdatastart=function(){var t={children:[{data:"",type:i.Text}],type:i.CDATA};this._addDomElement(t),this._tagStack.push(t)},o.prototype.oncommentend=o.prototype.oncdataend=function(){this._tagStack.pop()},o.prototype.onprocessinginstruction=function(t,e){this._addDomElement({name:t,data:e,type:i.Directive})},n.exports=o}});