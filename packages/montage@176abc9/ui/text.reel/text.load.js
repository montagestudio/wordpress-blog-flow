montageDefine("176abc9","ui/text.reel/text",{dependencies:["../component"],factory:function(e,t,n){var a=e("../component").Component,l=t.Text=a.specialize({hasTemplate:{value:!1},_value:{value:null},value:{get:function(){return this._value},set:function(e){this._value!==e&&(this._value=e,this.needsDraw=!0)}},converter:{value:null},defaultValue:{value:""},_valueNode:{value:null},_RANGE:{value:document.createRange()},enterDocument:{value:function(e){if(e){var t=this._RANGE;t.selectNodeContents(this.element),t.deleteContents(),this._valueNode=document.createTextNode(""),t.insertNode(this._valueNode),this.element.classList.add("montage-Text")}}},draw:{value:function(){var e="undefined"!=typeof this._value&&null!==this._value?this._value:this.defaultValue;this._valueNode.data=this.converter?this.converter.convert(e):e}}});window.MontageElement&&MontageElement.define("montage-text",l,{observedAttributes:["value"]})}});