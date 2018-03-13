var Montage=require("../core").Montage,Exception=require("../exception").Exception,Model=require("./model").Model,deprecate=require("../deprecate"),logger=require("../logger").logger("object-property");exports.ObjectProperty=Montage.specialize({init:{serializable:!1,enumerable:!1,value:function(){return this}},apply:{value:function(e,r){var t;e.hasOwnProperty("objectDescriptor")||(t=Montage.getInfoForObject(e),null!==t&&t.isInstance===!1&&(void 0===r?r=Model.group.objectDescriptorForPrototype(t.objectName,t.moduleId):r.prototypeName===t.objectName&&r.moduleId===t.moduleId||(r=null),this.applyWithObjectDescriptor(e,r)))}},applyWithBlueprint:{value:deprecate.deprecateMethod(void 0,function(e,r){return this.applyWithObjectDescriptor(e,r)},"applyWithBlueprint","applyWithObjectDescriptor")},applyWithObjectDescriptor:{value:function(e,r){null!==r&&(this.addProperties(e,r),null!==r.parent&&this.apply(Object.getPrototypeOf(e),r))}},addProperties:{value:function(e,r){for(var t,o=0;t=r.propertyDescriptors[o++];)t.isDerived?this.addDerivedProperty(e,t):t.isAssociation?this.addAssociation(e,t):this.addProperty(e,t);Montage.defineProperty(e,"blueprint",{enumerable:!1,serializable:!1,get:function(){return this._objectDescriptor}}),Montage.defineProperty(e,"_objectDescriptor",{serializable:!1,enumerable:!1,value:r}),Montage.defineProperty(e,"objectDescriptor",{enumerable:!1,serializable:!1,get:function(){return this._objectDescriptor}}),Montage.defineProperty(e,"blueprintGet",{serializable:!1,enumerable:!1,value:this.objectDescriptorGet}),Montage.defineProperty(e,"blueprintSet",{serializable:!1,enumerable:!1,value:this.objectDescriptorSet}),Montage.defineProperty(e,"objectDescriptorGet",{serializable:!1,enumerable:!1,value:this.objectDescriptorGet}),Montage.defineProperty(e,"objectDescriptorSet",{serializable:!1,enumerable:!1,value:this.objectDescriptorSet})}},addProperty:{value:function(e,r){this.addPropertyStorage(e,r),this.addPropertyDefinition(e,r),this.addPropertyStoredValue(e,r)}},addPropertyStorage:{value:function(e,r){var t="_"+r.name,o="_"+t,i=null;e.hasOwnProperty(t)?logger.isError&&logger.error("We have an issue here. The developer should not override the storage value for "+t+"."):(r.isToMany?(Montage.defineProperty(e,o,{value:null,enumerable:!1,serializable:!1}),i={get:function(){return this[o]||(this[o]=[])},enumerable:!1,serializable:!0}):i={value:null,enumerable:!1,serializable:!0},Montage.defineProperty(e,t,i))}},addPropertyDefinition:{value:function(e,r){var t=r.name,o=null;e.hasOwnProperty(t)?logger.isDebug&&logger.debug("The developer has already created the property "+t+" method do nothing."):(o={get:function(){return this.objectDescriptorGet(t)},enumerable:!0,serializable:!1},r.readOnly||(o.set=function(e){return this.objectDescriptorSet(t,e)}),Montage.defineProperty(e,t,o))}},blueprintGet:{value:deprecate.deprecateMethod(void 0,function(e){return this.objectDescriptorGet(e)},"blueprintGet","objectDescriptorGet"),enumerable:!1,serializable:!1},objectDescriptorGet:{value:function(e){var r=this.objectDescriptor.propertyDescriptorForName(e),t="_"+r.name;return this[t]},enumerable:!1,serializable:!1},blueprintSet:{value:deprecate.deprecateMethod(void 0,function(e,r){return this.objectDescriptorSet(e,r)},"blueprintSet","objectDescriptorSet"),enumerable:!1,serializable:!1},objectDescriptorSet:{value:function(e,r){var t=this.objectDescriptor.propertyDescriptorForName(e),o="_"+t.name;if(null===r&&t.denyDelete)throw(new Exception).initWithMessageTargetAndMethod("Deny Delete",this,t.name);this[o]=r},enumerable:!1,serializable:!1},addPropertyStoredValue:{value:function(e,r){var t=r.name+"$Storage",o="_"+t,i=null;e.hasOwnProperty(t)?logger.isError&&logger.error("We have an issue here. The developer should not override the stored value for "+t+"."):(r.isToMany?(Montage.defineProperty(e,o,{value:null,enumerable:!1,serializable:!1}),i={get:function(){return this[o]||(this[o]=[])},enumerable:!1,serializable:!1}):i={value:null,enumerable:!1,serializable:!1},Montage.defineProperty(e,t,i))}},addAssociation:{value:function(e,r){this.addPropertyStorage(e,r),this.addAssociationDefinition(e,r),this.addPropertyStoredValue(e,r)}},addAssociationDefinition:{value:function(e,r){r.isToMany?this.addToManyAssociationDefinition(e,r):this.addToOneAssociationDefinition(e,r)}},addToOneAssociationDefinition:{value:function(e,r){var t=r.name.toCapitalized(),o="addTo"+t;e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}}),o="removeFrom"+t,e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}}),o="clear"+t,e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}})}},addToManyAssociationDefinition:{value:function(e,r){var t=r.name.toCapitalized(),o="addTo"+t;e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}}),o="removeFrom"+t,e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}}),o="clear"+t,e.hasOwnProperty(o)?logger.isError&&logger.error("We have an issue here. The developer should not override the method "+o+"."):Montage.defineProperty(e,o,{serializable:!1,enumerable:!1,value:function(){return null}})}},addDerivedProperty:{value:function(e,r){}}});