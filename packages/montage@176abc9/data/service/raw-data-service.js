var DataService=require("data/service/data-service").DataService,compile=require("frb/compile-evaluator"),DataMapping=require("data/service/data-mapping").DataMapping,DataIdentifier=require("data/model/data-identifier").DataIdentifier,Deserializer=require("core/serialization/deserializer/montage-deserializer").MontageDeserializer,Map=require("collections/map"),Montage=require("montage").Montage,parse=require("frb/parse"),Scope=require("frb/scope"),WeakMap=require("collections/weak-map"),deprecate=require("core/deprecate"),parse=require("frb/parse"),Scope=require("frb/scope"),compile=require("frb/compile-evaluator"),Promise=require("core/promise").Promise;exports.RawDataService=DataService.specialize({constructor:{value:function(){DataService.call(this),this._typeIdentifierMap=new Map,this._descriptorToRawDataTypeMappings=new Map}},initWithModel:{value:function(e){var a=this;return require.async(e).then(function(e){var a=(new Deserializer).init(JSON.stringify(e),require);return a.deserializeObject()}).then(function(e){return a.model=e,a})}},deserializeSelf:{value:function(e){this["super"](e);var a=e.getProperty("rawDataTypeMappings");this._registerRawDataTypeMappings(a||[])}},connectionDescriptor:{value:void 0},connection:{value:void 0},_propertyDescriptorForObjectAndName:{value:function(e,a){var t=this.objectDescriptorForObject(e);return t&&t.propertyDescriptorForName(a)}},_objectDescriptorForObject:{value:function(e){var a,t,r,i,n,o=this.types,s=Montage.getInfoForObject(e),p=s.moduleId,c=s.objectName;for(i=0,n=o.length;i<n&&!r;i+=1)a=o[i].module,t=a&&o[i].exportName,a&&p===a.id&&c===t&&(r=o[i]);return r}},_mapObjectPropertyValue:{value:function(e,a,t){var r=a.name;if(a.cardinality===1/0?this.spliceWithArray(e[r],t):e[r]=t[0],a.inversePropertyName&&t&&t[0]){var i=this._propertyDescriptorForObjectAndName(t[0],a.inversePropertyName);i&&1===i.cardinality&&t.forEach(function(t){t[a.inversePropertyName]=e})}return t}},_objectDescriptorTypeForValueDescriptor:{value:function(e){return e.then(function(e){return e.module.require.async(e.module.id)})}},_fetchRawData:{value:function(e){var a=this,t=this._childServiceForQuery(e.query),r=e.query;t?t._fetchRawData(e):r.authorization?(e.query=a.mapSelectorToRawDataQuery(r),a.fetchRawData(e),e.query=r):this.authorizationPolicy===DataService.AuthorizationPolicy.NONE?(e.query=a.mapSelectorToRawDataQuery(r),a.fetchRawData(e),e.query=r):DataService.authorizationManager.authorizeService(this).then(function(e){return a.authorization=e,e})["catch"](function(e){console.log(e)}).then(function(t){e.query=a.mapSelectorToRawDataQuery(r),a.fetchRawData(e),e.query=r})}},fetchRawData:{value:function(e){this.rawDataDone(e)}},cancelRawDataStream:{value:function(e,a){}},deleteDataObject:{value:function(e){var a,t=this,r={},i=this._mapObjectToRawData(e,r);return a=i instanceof Promise?i.then(function(){return t.deleteRawData(r,e)}):this.deleteRawData(r,e)}},deleteRawData:{value:function(e,a){return this.nullPromise}},saveRawData:{value:function(e,a){return this.nullPromise}},isOffline:{get:function(){return this===this.rootService?this.superForGet("isOffline")():this.rootService.isOffline}},writeOfflineData:{value:function(e,a,t){return this.nullPromise}},addRawData:{value:function(e,a,t){var r,i,n,o=e.query.type;for(r=a&&!this.isOffline&&this._streamRawData.get(e),r?r.push.apply(r,a):a&&!this.isOffline&&this._streamRawData.set(e,a),i=0,n=a&&a.length;i<n;i++)this.addOneRawData(e,a[i],t,o)}},addOneRawData:{value:function(e,a,t){var r=this._descriptorForParentAndRawData(e.query.type,a),i=this.objectForTypeRawData(r,a,t),n=this._mapRawDataToObject(a,i,t);return n&&n instanceof Promise?n=n.then(function(){return e.addData(i),i}):(e.addData(i),n=Promise.resolve(i)),this._addMapDataPromiseForStream(n,e),i&&this.callDelegateMethod("rawDataServiceDidAddOneRawData",this,e,a,i),n}},_addMapDataPromiseForStream:{value:function(e,a){this._streamMapDataPromises.has(a)?this._streamMapDataPromises.get(a).push(e):this._streamMapDataPromises.set(a,[e])}},_streamMapDataPromises:{get:function(){return this.__streamMapDataPromises||(this.__streamMapDataPromises=new Map),this.__streamMapDataPromises}},objectForTypeRawData:{value:function(e,a,t){var r=this.dataIdentifierForTypeRawData(e,a);return this.recordSnapshot(r,a),this.getDataObject(e,a,t,r)}},_typeIdentifierMap:{value:void 0},dataIdentifierForTypeRawData:{value:function(e,a){var t,r,i,n,o=this.mappingWithType(e),s=o?o.rawDataPrimaryKeyExpressions:null,p=new Scope(a);if(s&&s.length){i=this._typeIdentifierMap.get(e),i||this._typeIdentifierMap.set(e,i=new Map);for(var c,u=0;c=s[u];u++)t=t||[],t[u]=c(p);if(t&&(n=t.join("/"),r=i.get(n)),!r){e.typeName||e.name;r=new DataIdentifier,r.objectDescriptor=e,r.dataService=this,r.typeName=e.name,r._identifier=r.primaryKey=n,i.set(n,r)}return r}}},__snapshot:{value:null},_snapshot:{get:function(){return this.__snapshot||(this.__snapshot=new Map)}},recordSnapshot:{value:function(e,a){this._snapshot.set(e,a)}},removeSnapshot:{value:function(e){this._snapshot["delete"](e)}},snapshotForDataIdentifier:{value:function(e){return this._snapshot.get(e)}},snapshotForObject:{value:function(e){return this.snapshotForDataIdentifier(this.dataIdentifierForObject(e))}},rawDataDone:{value:function(e,a){var t=this,r=this._streamRawData.get(e),i=this._streamMapDataPromises.get(e),n=i?Promise.all(i):this.nullPromise;i&&this._streamMapDataPromises["delete"](e),r&&this._streamRawData["delete"](e),n.then(function(i){return r?t.writeOfflineData(r,e.query,a):null}).then(function(){return e.dataDone(),null})["catch"](function(e){console.error(e)})}},_streamRawData:{get:function(){return this.__streamRawData||(this.__streamRawData=new WeakMap),this.__streamRawData}},__streamRawData:{value:void 0},mapSelectorToRawDataQuery:{value:function(e){return e}},mapSelectorToRawDataSelector:{value:deprecate.deprecateMethod(void 0,function(e){return this.mapSelectorToRawDataQuery(e)},"mapSelectorToRawDataSelector","mapSelectorToRawDataQuery")},mappingForObject:{value:function(e){var a=this.objectDescriptorForObject(e),t=a&&this.mappingWithType(a);return!t&&a&&(t=this._objectDescriptorMappings.get(a),t||(t=DataMapping.withObjectDescriptor(a),this._objectDescriptorMappings.set(a,t))),t}},mapRawDataToObject:{value:function(e,a,t){return this.mapFromRawData(a,e,t)}},_mapRawDataToObject:{value:function(e,a,t){var r,i=this,n=this.mappingForObject(a);return n?(r=n.mapRawDataToObject(e,a,t),r=r?r.then(function(){return i.mapRawDataToObject(e,a,t)}):this.mapRawDataToObject(e,a,t)):r=this.mapRawDataToObject(e,a,t),r}},mapObjectToRawData:{value:function(e,a,t){}},_mapObjectToRawData:{value:function(e,a,t){var r,i=this.mappingForObject(e);if(i&&(r=i.mapObjectToRawData(e,a,t)),a)if(r){var n=this.mapObjectToRawData(e,a,t);r instanceof Promise&&n instanceof Promise?r=Promise.all([r,n]):n instanceof Promise&&(r=n)}else r=this.mapObjectToRawData(e,a,t);return r}},_mappingsPromise:{get:function(){return this.__mappingsPromise||(this.__mappingsPromise=Promise.all(this.mappings.map(function(e){return e.objectDescriptor})).then(function(e){})),this.__mappingsPromise}},_objectDescriptorMappings:{get:function(){return this.__objectDescriptorMappings||(this.__objectDescriptorMappings=new Map),this.__objectDescriptorMappings}},_descriptorToRawDataTypeMappings:{value:void 0},_registerRawDataTypeMappings:{value:function(e){var a,t,r,i;for(r=0,i=e?e.length:0;r<i;r++)a=e[r],t=a.type.parent,this._descriptorToRawDataTypeMappings.has(t)||this._descriptorToRawDataTypeMappings.set(t,[]),this._descriptorToRawDataTypeMappings.get(t).push(a)}},_descriptorForParentAndRawData:{value:function(e,a){var t,r,i,n,o=this._descriptorToRawDataTypeMappings.get(e);if(o&&o.length)for(i=0,n=o.length;i<n&&!r;++i)t=o[i],r=t.criteria.evaluate(a)&&t.type;return r?this._descriptorForParentAndRawData(r,a):e}},mapFromRawData:{value:function(e,a,t){}},mapToRawData:{value:function(e,a){}},offlineService:{value:void 0}});