montageDefine("176abc9","data/model/data-identifier",{dependencies:["core/core"],factory:function(e,t,i){var r=e("core/core").Montage;t.DataIdentifier=r.specialize({dataService:{value:void 0},objectDescriptor:{value:void 0},primaryKey:{value:void 0},_typeName:{value:void 0},typeName:{get:function(){return this._typeName||(this._typeName=this.objectDescriptor?this.objectDescriptor.name:"MISSING_TYPE_NAME")},set:function(e){this._typeName=e}},isPersistent:{value:!1},_identifier:{value:!1},_url:{value:void 0},url:{get:function(){if(!this._url){var e="montage-data://";e+=this.dataService.identifier,e+="/",e+=this.dataService.connectionDescriptor?this.dataService.connectionDescriptor.name:"default",e+="/",e+=this.objectDescriptor.name,e+="/",e+=this.primaryKey,this._url=e}return this._url},set:function(e){return this._url=e}}})}});