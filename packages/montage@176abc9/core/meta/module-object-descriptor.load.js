montageDefine("176abc9","core/meta/module-object-descriptor",{dependencies:["../core","../promise","./object-descriptor","../serialization/deserializer/montage-deserializer","../module-reference","../deprecate"],factory:function(e,t,r){var o=e("../core").Montage,i=e("../promise").Promise,n=e("./object-descriptor").ObjectDescriptor,a=e("../serialization/deserializer/montage-deserializer").MontageDeserializer,c=e("../module-reference").ModuleReference,u=e("../deprecate"),l=Object.create(null),d=t.ModuleObjectDescriptor=n.specialize({initWithModuleAndExportName:{value:function(e,t){var r=n.prototype.initWithName.call(this,t);return r.module=e,r.exportName=t,r}},serializeSelf:{value:function(e){if(!this.module)throw new Error("Cannot serialize object descriptor without a module reference");if(!this.exportName)throw new Error("Cannot serialize object descriptor without an exportName");this["super"](e),this._setPropertyWithDefaults(e,"module",this.module),this._setPropertyWithDefaults(e,"exportName",this.exportName)}},deserializeSelf:{value:function(e){this["super"](e);var t;if(t=e.getProperty("module"),void 0!==t&&(this.module=t),t=e.getProperty("exportName")||this.exportName,void 0!==t&&(this.exportName=t),!this.module)throw new Error("Cannot deserialize object descriptor without a module reference");if(!this.exportName)throw new Error("Cannot deserialize object descriptor without an exportName")}},module:{value:null},exportName:{value:null},objectDescriptorInstanceModule:{serializable:!1,value:null}},{getObjectDescriptorWithModuleId:{value:function(e,t){if(e.search(/\.meta$/)===-1&&e.search(/\.mjson$/)===-1)throw new Error(e+" object descriptor module id does not end in '.meta' or '.mjson'");if(!t)throw new Error("Require needed to get object descriptor "+e);var r=t.location+"#"+e;return r in l?l[r]:l[r]=t.async(e).then(function(r){var o=r.montageObject,i=a.getModuleRequire(t,e);if(!d.prototype.isPrototypeOf(o))throw new Error("Object in "+e+" is not a module-object-descriptor");return o.objectDescriptorInstanceModule=(new c).initWithIdAndRequire(e,t),o._parentReference?o._parentReference.promise(i).then(function(e){return o._parent=e,o}):o})}},createDefaultObjectDescriptorForObject:{value:function(e){var t=o.getInfoForObject(e).isInstance?Object.getPrototypeOf(e):e,r=o.getInfoForObject(t);return r.objectName&&r.moduleId?this["super"](e).then(function(e){return e.module=(new c).initWithIdAndRequire(r.moduleId,r.require),e.exportName=r.objectName,e}):i.reject("Cannot create module-object-descriptor for an object that has no been loaded from a module")}},getBlueprintWithModuleId:{value:u.deprecateMethod(void 0,function(e,t){return d.getObjectDescriptorWithModuleId(e,t)},"ModuleBlueprint.getBlueprintWithModuleId","ModuleObjectDescriptor.getObjectDescriptorWithModuleId")},createDefaultBlueprintForObject:{value:u.deprecateMethod(void 0,function(e){return d.createDefaultObjectDescriptorForObject(e)},"ModuleBlueprint.createDefaultBlueprintForObject","ModuleObjectDescriptor.createDefaultObjectDescriptorForObject")}})}});