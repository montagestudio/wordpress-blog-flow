montageDefine("176abc9","composer/rotation-composer",{dependencies:["./composer","./translate-composer"],factory:function(t,a,e){var n=t("./composer").Composer,s=t("./translate-composer").TranslateComposer;a.RotationComposer=n.specialize({_unit:{value:"radians"},unit:{get:function(){return this._unit},set:function(t){"degrees"===t?this._unit="degrees":this._unit="radians"}},constructor:{value:function(){this["super"](),this._translateComposer=new s,this._translateComposer.hasMomentum=!1,this._translateComposer.hasBouncing=!1}},load:{value:function(){this.component.addComposerForElement(this._translateComposer,this.element),this._translateComposer.load(),this._translateComposer.addEventListener("translateStart",this,!1),this._translateComposer.addEventListener("translateEnd",this,!1),this._translateComposer.addEventListener("translate",this,!1)}},unload:{value:function(){}},handleTranslateStart:{value:function(){var t=this._translateComposer.pointerStartEventPosition,a=t.pageX-this.center.pageX,e=t.pageY-this.center.pageY;this._translateComposer.translateX=t.pageX,this._translateComposer.translateY=t.pageY,this._previousAngle=Math.atan2(e,a),this._deltaAngle=0,this._dispatchRotateStart()}},handleTranslateEnd:{value:function(){this._dispatchRotateEnd()}},handleTranslate:{value:function(t){var a=t.translateX-this.center.pageX,e=t.translateY-this.center.pageY,n=Math.atan2(e,a),s=n-this._previousAngle;s>Math.PI?s-=2*Math.PI:s<-Math.PI&&(s+=2*Math.PI),this.angleInRadians+=s,this._deltaAngle=s,this._previousAngle=n,this._dispatchRotate()}},angleInRadians:{value:0},_deltaAngle:{value:0},_dispatchRotateStart:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("rotateStart",!0,!0,null),t.unit=this._unit,"radians"===this._unit?(t.rotation=this.angleInRadians,t.deltaRotation=this._deltaAngle):(t.rotation=180*this.angleInRadians/Math.PI,t.deltaRotation=180*this._deltaAngle/Math.PI),this.dispatchEvent(t)}},_dispatchRotate:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("rotate",!0,!0,null),t.unit=this._unit,"radians"===this._unit?(t.rotation=this.angleInRadians,t.deltaRotation=this._deltaAngle):(t.rotation=180*this.angleInRadians/Math.PI,t.deltaRotation=180*this._deltaAngle/Math.PI),this.dispatchEvent(t)}},_dispatchRotateEnd:{value:function(){var t=document.createEvent("CustomEvent");t.initCustomEvent("rotateEnd",!0,!0,null),t.unit=this._unit,t.deltaRotation=0,"radians"===this._unit?t.rotation=this.angleInRadians:t.rotation=180*this.angleInRadians/Math.PI,this.dispatchEvent(t)}},center:{value:null},_start:{value:null},_translateComposer:{value:null},animateMomentum:{get:function(){return this._translateComposer.animateMomentum},set:function(t){this._translateComposer.animateMomentum=!!t}},hasMomentum:{get:function(){return this._translateComposer.hasMomentum},set:function(t){this._translateComposer.hasMomentum=!!t}}})}});