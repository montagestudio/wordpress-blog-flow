montageDefine("176abc9","data/service/data-trigger",{dependencies:["core/core","data/model/data-object-descriptor","data/model/object-descriptor","collections/weak-map"],factory:function(e,t,r){var i,o=e("core/core").Montage,a=e("data/model/data-object-descriptor").DataObjectDescriptor,s=e("data/model/object-descriptor").ObjectDescriptor,n=e("collections/weak-map");i=t.DataTrigger=function(){},t.DataTrigger.prototype=Object.create({},{constructor:{configurable:!0,writable:!0,value:t.DataTrigger},_service:{configurable:!0,writable:!0,value:void 0},_objectPrototype:{configurable:!0,writable:!0,value:void 0},_propertyName:{configurable:!0,writable:!0,value:void 0},_privatePropertyName:{configurable:!0,get:function(){return!this.__privatePropertyName&&this._propertyName&&(this.__privatePropertyName="_"+this._propertyName),this.__privatePropertyName}},_isGlobal:{configurable:!0,get:function(){return!(this._valueStatus instanceof n)},set:function(e){e=!!e,e!==this._isGlobal&&(this._valueStatus=e?void 0:new n)}},_valueStatus:{configurable:!0,writable:!0,value:void 0},_getValueStatus:{configurable:!0,value:function(e){return this._isGlobal?this._valueStatus:this._valueStatus.get(e)}},_setValueStatus:{configurable:!0,value:function(e,t){this._isGlobal?this._valueStatus=t:void 0!==t?this._valueStatus.set(e,t):this._valueStatus["delete"](e)}},_getValue:{configurable:!0,writable:!0,value:function(e){var t,r,i;for(this.getObjectProperty(e),t=Object.getPrototypeOf(this._objectPrototype);t;)r=Object.getOwnPropertyDescriptor(t,this._propertyName),i=r&&r.get,t=!i&&Object.getPrototypeOf(t);return i?i.call(e):e[this._privatePropertyName]}},_setValue:{configurable:!0,writable:!0,value:function(e,t){var r,i,o,a,s,n;for(r=this._getValueStatus(e),this._setValueStatus(e,null),i=Object.getPrototypeOf(this._objectPrototype);i;)o=Object.getOwnPropertyDescriptor(i,this._propertyName),a=o&&o.get,s=a&&o.set,n=!o||s||o.writable,i=n&&!s&&Object.getPrototypeOf(i);s?s.call(e,t):n&&(e[this._privatePropertyName]=t),r&&r.resolve(null)}},decacheObjectProperty:{value:function(e){this._setValueStatus(e,void 0)}},getObjectProperty:{value:function(e){var t=this._getValueStatus(e);return t?t.promise:null===t?this._service.nullPromise:this.updateObjectProperty(e)}},updateObjectProperty:{value:function(e){var t=this,r=this._getValueStatus(e)||{};return r.promise||(this._setValueStatus(e,r),r.promise=new Promise(function(i,o){r.resolve=i,r.reject=o,t._fetchObjectProperty(e)})),r.promise}},_fetchObjectProperty:{value:function(e){var t=this;this._service.fetchObjectProperty(e,this._propertyName).then(function(){return t._fulfillObjectPropertyFetch(e)})["catch"](function(r){return console.error(r),t._fulfillObjectPropertyFetch(e,r)})}},_fulfillObjectPropertyFetch:{value:function(e,t){var r=this._getValueStatus(e);return this._setValueStatus(e,null),r&&!t?r.resolve(null):r&&t&&(console.error(t),r.reject(t)),null}}}),Object.defineProperties(t.DataTrigger,{addTriggers:{value:function(e,t,r,i){var o=t instanceof a||t instanceof s;return o?this._addTriggersForMontageDataType(e,t,r,name):this._addTriggers(e,t,r,i)}},_addTriggersForMontageDataType:{value:function(e,t,r){var i,o,a,s={},n=Object.keys(t.propertyDescriptors);for(a=0;o=n[a];++a)i=this.addTrigger(e,t,r,o),i&&(s[o]=i);return s}},_addTriggers:{value:function(e,t,r,i){var o,a,s,n,u={},c=t.propertyDescriptors;for(n=0;o=c[n];n+=1)i.has(o.name)||(s=o.name,a=this.addTrigger(e,t,r,s),a&&(u[s]=a));return u}},addTrigger:{value:function(e,t,r,i){var o=t instanceof a||t instanceof s;return o?this._addTriggerForMontageDataType(e,t,r,i):this._addTrigger(e,t,r,i)}},_addTriggerForMontageDataType:{value:function(e,t,r,i){var a,s=t.propertyDescriptors[i];return s&&s.isRelationship&&(a=Object.create(this._getTriggerPrototype(e)),a._objectPrototype=r,a._propertyName=i,a._isGlobal=s.isGlobal,o.defineProperty(r,i,{get:function(){return a._getValue(this)},set:function(e){a._setValue(this,e)}})),a}},_createTrigger:{value:function(e,t,r,i,o){var a=Object.create(this._getTriggerPrototype(e)),s=e._dataObjectTriggers.get(t);return a._objectPrototype=r,a._propertyName=i,a._isGlobal=o.isGlobal,s||(s={},e._dataObjectTriggers.set(t,s)),s[i]=a,a}},_addTrigger:{value:function(e,t,r,i){var a,s=t.propertyDescriptorForName(i);return s&&(a=Object.create(this._getTriggerPrototype(e)),a._objectPrototype=r,a._propertyName=i,a._isGlobal=s.isGlobal,s.definition?o.defineProperty(r,i,{get:function(){return this.getBinding(i)||this.defineBinding(i,{"<-":s.definition}),a._getValue(this)},set:function(e){a._setValue(this,e)}}):o.defineProperty(r,i,{get:function(){return a._getValue(this)},set:function(e){a._setValue(this,e)}}),a=Object.create(this._getTriggerPrototype(e)),a._objectPrototype=r,a._propertyName=i,a._isGlobal=s.isGlobal),a}},_getTriggerPrototype:{value:function(e){var t=this._triggerPrototypes&&this._triggerPrototypes.get(e);return t||(t=new this,t._service=e,this._triggerPrototypes=this._triggerPrototypes||new n,this._triggerPrototypes.set(e,t)),t}},removeTriggers:{value:function(e,t){var r,i,o=Object.keys(e);for(i=0;r=o[i];++i)this.removeTrigger(e[r],t,r)}},removeTrigger:{value:function(e,t){e&&delete t[e.name]}}})}});