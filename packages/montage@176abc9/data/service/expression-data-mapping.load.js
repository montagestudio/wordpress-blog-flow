montageDefine("176abc9","data/service/expression-data-mapping",{dependencies:["./data-mapping","frb/assign","frb/compile-evaluator","core/meta/object-descriptor-reference","frb/parse","collections/map","data/service/mapping-rule","core/promise","frb/scope","collections/set","core/deprecate","montage"],factory:function(e,t,r){var a=e("./data-mapping").DataMapping,i=(e("frb/assign"),e("frb/compile-evaluator")),s=e("core/meta/object-descriptor-reference").ObjectDescriptorReference,n=e("frb/parse"),o=e("collections/map"),p=e("data/service/mapping-rule").MappingRule,c=e("core/promise").Promise,u=e("frb/scope"),l=e("collections/set"),h=e("core/deprecate"),v=(e("montage").Montage,"<-"),f="<->";t.ExpressionDataMapping=a.specialize({initWithServiceObjectDescriptorAndSchema:{value:function(e,t,r){return this.service=e,this.objectDescriptor=t,this.schemaDescriptor=r,this}},serializeSelf:{value:function(e){}},deserializeSelf:{value:function(e){var t=e.getProperty("objectDescriptor"),r=this,a=!1,i=null;return t instanceof s?(this.objectDescriptorReference=t,a=!0):this.objectDescriptor=t,this.schemaReference=e.getProperty("schema"),this.schemaReference&&(a=!0),t=e.getProperty("requisitePropertyNames"),t&&this.addRequisitePropertyName.apply(this,t),t=e.getProperty("rawDataPrimaryKeys"),t&&(this.rawDataPrimaryKeys=t),a?i=this.resolveReferences().then(function(){return t=e.getProperty("objectMapping"),t&&r._mapObjectMappingRules(t.rules),t=e.getProperty("rawDataMapping"),t&&r._mapRawDataMappingRules(t.rules),r}):(t=e.getProperty("objectMapping"),t&&r._mapObjectMappingRules(t.rules),t=e.getProperty("rawDataMapping"),t&&r._mapRawDataMappingRules(t.rules)),this}},resolveReferences:{value:function(){var e=this;return this._resolveObjectDescriptorReferenceIfNecessary().then(function(){return e._resolveSchemaReferenceIfNecessary()})}},_resolveObjectDescriptorReferenceIfNecessary:{value:function(){var e=this,t=!this.objectDescriptor&&this.objectDescriptorReference,r=t?this.objectDescriptorReference:c.resolve(null);return r.then(function(t){return t&&(e.objectDescriptor=t),null})}},_resolveSchemaReferenceIfNecessary:{value:function(){var e=this,t=!this.schemaDescriptor&&this.schemaDescriptorReference,r=t?this.schemaDescriptorReference:c.resolve(null);return r.then(function(t){return t&&(e.schemaDescriptor=t),null})}},__scope:{value:null},_scope:{get:function(){return this.__scope||new u}},objectDescriptor:{get:function(){return this._objectDescriptor},set:function(e){this._objectDescriptor=e,this._objectDescriptorReference=(new s).initWithValue(e)}},objectDescriptorReference:{get:h.deprecateMethod(void 0,function(){return this._objectDescriptorReference?this._objectDescriptorReference.promise(e):c.resolve(null)},"objectDescriptorReference","objectDescriptor",!0),set:h.deprecateMethod(void 0,function(e){this._objectDescriptorReference=e},"objectDescriptorReference","objectDescriptor",!0)},parent:{get:function(){return!this._parent&&this.objectDescriptor&&this.objectDescriptor.parent&&this.service&&(this._parent=this.service.mappingWithType(this.objectDescriptor.parent)),this._parent}},rawDataPrimaryKeys:{get:function(){return this._rawDataPrimaryKeys||this.parent&&this.parent.rawDataPrimaryKeys},set:function(e){this._rawDataPrimaryKeys=e}},rawDataPrimaryKeyExpressions:{get:function(){return!this._rawDataPrimaryKeyExpressions&&this.rawDataPrimaryKeys&&(this._rawDataPrimaryKeyExpressions=this.rawDataPrimaryKeys.map(function(e){return i(n(e))})),this._rawDataPrimaryKeyExpressions}},addRawDataPrimaryKey:{value:function(){var e,t,r;for(e=0,t=arguments.length;e<t;e+=1)r=arguments[e],this._ownRequisitePropertyNames.has(r)||(this._ownRequisitePropertyNames.add(r),this._requisitePropertyNames=null)}},_ownRequisitePropertyNames:{get:function(){return this.__ownRequisitePropertyNames||(this.__ownRequisitePropertyNames=new l),this.__ownRequisitePropertyNames}},requisitePropertyNames:{get:function(){var e,t;if(!this._requisitePropertyNames&&(this._requisitePropertyNames=new l(this._ownRequisitePropertyNames),this.parent))for(t=this.parent.requisitePropertyNames.values();e=t.next().value;)this._requisitePropertyNames.has(e)||this._requisitePropertyNames.add(e);return this._requisitePropertyNames}},addRequisitePropertyName:{value:function(){var e,t,r;for(e=0,t=arguments.length;e<t;e+=1)r=arguments[e],this._ownRequisitePropertyNames.has(r)||(this._ownRequisitePropertyNames.add(r),this._requisitePropertyNames=null)}},schemaDescriptor:{get:function(){return this._schemaDescriptor},set:function(e){this._schemaDescriptor=e,this._schemaDescriptorReference=(new s).initWithValue(e)}},schemaDescriptorReference:{get:h.deprecateMethod(void 0,function(){return this._schemaDescriptorReference?this._schemaDescriptorReference.promise(e):c.resolve(null)},"schemaDescriptorReference","schemaDescriptor",!0),set:h.deprecateMethod(void 0,function(e){this._schemaDescriptorReference=e},"schemaDescriptorReference","schemaDescriptor",!0)},service:{value:void 0},mapRawDataToObject:{value:function(e,t){var r,a,i,s=this.requisitePropertyNames.values();if(this.requisitePropertyNames.size)for(;a=s.next().value;)i=this.mapRawDataToObjectProperty(e,t,a),this._isAsync(i)&&(r=r||[],r.push(i));return r&&r.length&&c.all(r)}},mapRawDataToObjectProperty:{value:function(e,t,r){var a=this.objectMappingRules.get(r),i=a&&this.objectDescriptor.propertyDescriptorForName(r),s=i&&!i.definition&&i.valueDescriptor,n=i&&!!i.definition,o=this._scope;return o.value=e,this._prepareRawDataToObjectRule(a,i),s&&a.inversePropertyName?this._resolveBothSidesOfRelationship(t,i,a,o):s?this._resolveRelationship(t,i,a,o):i&&!n?this._resolveProperty(t,i,a,o):null}},_resolveBothSidesOfRelationship:{value:function(e,t,r,a){var i=this;return this._resolveRelationship(e,t,r,a).then(function(){return t.valueDescriptor}).then(function(a){var s=a.propertyDescriptorForName(r.inversePropertyName),n=e[t.name];return Array.isArray(n)&&t&&i._setObjectsValueForPropertyDescriptor(n,e,s),null})}},_resolveRelationship:{value:function(e,t,r,a){var i=this;return r.evaluate(a).then(function(r){return i._setObjectValueForPropertyDescriptor(e,r,t),null})}},_revertRelationshipToRawData:{value:function(e,t,r,a){return r.converter.revert||console.log("Converter does not have a revert function for property ("+t.name+")"),r.evaluate(a).then(function(r){return e[t.name]=r,null})}},_revertPropertyToRawData:{value:function(e,t,r,a){var i,s=r.evaluate(a);return this._isAsync(s)?(i=this,s.then(function(r){return e[t]=s,null})):e[t]=s,s}},_resolveProperty:{value:function(e,t,r,a){var i=r.evaluate(a),s="object"==typeof t?t.name:t,n=this;return this._isAsync(i)?i.then(function(r){return n._setObjectValueForPropertyDescriptor(e,r,t),null}):e[s]=i,i}},mapObjectToRawData:{value:function(e,t){for(var r,a,i=this.rawDataMappingRules.keys(),s=[];r=i.next().value;)a=this.mapObjectToRawDataProperty(e,t,r),this._isAsync(a)&&(s=s||[],s.push(a));return s&&s.length&&c.all(s)||c.resolve(null)}},mapObjectToRawDataProperty:{value:function(e,t,r){var a,i=this.rawDataMappingRules.get(r),s=new u(e),n=i&&i.propertyDescriptor,o=n&&n.valueDescriptor;return o&&i.converter?(this._prepareObjectToRawDataRule(i),a=this._revertRelationshipToRawData(t,n,i,s)):i.converter?a=this._revertPropertyToRawData(t,r,i,s):t[r]=i.expression(s),a}},mapObjectToCriteriaSourceForProperty:{value:function(e,t,r){for(var a,i,s,n=this.rawDataMappingRules.keys(),o=this.objectMappingRules.get(r),p=o?o.requirements:[],u=new l(p);i=n.next().value;)u.has(i)&&(s=this._getAndMapObjectProperty(e,t,i,r),this._isAsync(s)&&(a=a||[],a.push(s)));return a&&a.length&&c.all(a)||c.resolve(null)}},_getAndMapObjectProperty:{value:function(e,t,r){var a,i,s=this.rawDataMappingRules.get(r),n=s?s.requirements:[];return a=this.service.rootService.getObjectPropertyExpressions(e,n),this._isAsync(a)?(i=this,a=a.then(function(){return i.mapObjectToRawDataProperty(e,t,r)})):a=this.mapObjectToRawDataProperty(e,t,r),a}},_prepareObjectToRawDataRule:{value:function(e){var t=e.converter,r=e.propertyDescriptor;t&&(t.expression=t.expression||e.expression,t.foreignDescriptor=t.foreignDescriptor||r.valueDescriptor)}},serviceIdentifierForProperty:{value:function(e){var t=this.objectMappingRules.get(e);return t&&t.serviceIdentifier}},_rawDataMappingRules:{value:void 0},_setObjectsValueForPropertyDescriptor:{value:function(e,t,r){var a,i;for(a=0,i=e.length;a<i;a+=1)this._setObjectValueForPropertyDescriptor(e[a],t,r)}},_setObjectValueForPropertyDescriptor:{value:function(e,t,r){var a,i=r.name;if(Array.isArray(t)){if(a=1!==r.cardinality,a&&Array.isArray(e[i]))e[i].splice.apply(e[i],[0,1/0].concat(t));else if(a)e[i]=t;else if(t.length){if(t.length>1)throw new Error('ExpressionDataMapping for property "'+this.objectDescriptor.name+"."+i+"\" expects a cardinality of 1 but data to map doesn't match: "+t);e[i]=t[0]}}else e[i]=t}},_prepareRawDataToObjectRule:{value:function(e,t){var r=e&&e.converter;r&&(r.expression=r.expression||e.expression,r.foreignDescriptor=r.foreignDescriptor||t.valueDescriptor,r.objectDescriptor=this.objectDescriptor,r.serviceIdentifier=e.serviceIdentifier)}},resolvePrerequisitesForProperty:{value:function(e,t){var r=this.objectMappingRules.get(t),a=r&&r.prerequisitePropertyNames||null;return r||console.log("No Rule For:",t),a?this.service.rootService.getObjectProperties(e,a):c.resolve(null)}},_isAsync:{value:function(e){return e&&e.then&&"function"==typeof e.then}},_assignDataToObjectProperty:{value:function(e,t,r){var a=r&&r.length,i=1!==t.cardinality,s=t.name;if(Array.isArray(r)){if(i&&Array.isArray(e[s]))e[s].splice.apply(e[s],[0,1/0].concat(r));else if(i)e[s]=r;else if(a){if(r.length&&r.length>1)throw new Error('ExpressionDataMapping for property "'+this.objectDescriptor.name+"."+s+"\" expects a cardinality of 1 but data to map doesn't match: "+r);e[s]=r[0]}}else e[s]=r}},_assignObjectAsInverseProperty:{value:function(e,t,r,a){var i,s,n=t.propertyDescriptorForName(a);if(1===n.cardinality)for(i=0,s=r?r.length:0;i<s;++i)r[i][a]=e}},addObjectMappingRule:{value:function(e,t){var r={};r[e]=t,this._mapObjectMappingRules(r),this._objectMappingRules=null,this._rawDataMappingRules=null}},addRawDataMappingRule:{value:function(e,t){var r={};r[e]=t,this._mapRawDataMappingRules(r),this._objectMappingRules=null,this._rawDataMappingRules=null}},_assignAllEntriesTo:{value:function(e,t){e.forEach(function(e,r){t.set(r,e)})}},_ownObjectMappingRules:{get:function(){return this.__ownObjectMappingRules||(this.__ownObjectMappingRules=new o),this.__ownObjectMappingRules}},objectMappingRules:{get:function(){return this._objectMappingRules||(this._objectMappingRules=new o,this.parent&&this._assignAllEntriesTo(this.parent.objectMappingRules,this._objectMappingRules),this._assignAllEntriesTo(this._ownObjectMappingRules,this._objectMappingRules)),this._objectMappingRules}},_ownRawDataMappingRules:{get:function(){return this.__ownRawDataMappingRules||(this.__ownRawDataMappingRules=new o),this.__ownRawDataMappingRules}},rawDataMappingRules:{get:function(){return this._rawDataMappingRules||(this._rawDataMappingRules=new o,this.parent&&this._assignAllEntriesTo(this.parent.rawDataMappingRules,this._rawDataMappingRules),this._assignAllEntriesTo(this._ownRawDataMappingRules,this._rawDataMappingRules)),this._rawDataMappingRules}},_mapObjectMappingRules:{value:function(e){var t,r,a,i,s=e?Object.keys(e):[];if(this.objectDescriptor)for(i=0;t=s[i];++i)r=e[t],this._shouldMapRule(r,!0)&&(a=this._makeRuleFromRawRule(r,t,!0,!0),this._ownObjectMappingRules.set(a.targetPath,a)),this._shouldMapRule(r,!1)&&(a=this._makeRuleFromRawRule(r,t,!1,!0),this._ownRawDataMappingRules.set(a.targetPath,a))}},_mapRawDataMappingRules:{value:function(e){var t,r,a,i,s=e?Object.keys(e):[];if(this.objectDescriptor)for(i=0;t=s[i];++i)r=e[t],this._shouldMapRule(r,!1)&&(a=this._makeRuleFromRawRule(r,t,!1,!1),this._ownObjectMappingRules.set(a.targetPath,a)),this._shouldMapRule(r,!0)&&(a=this._makeRuleFromRawRule(r,t,!0,!1),this._ownRawDataMappingRules.set(a.targetPath,a))}},_makeRuleFromRawRule:{value:function(e,t,r,a){var i=!a&&r?e[v]||e[f]:t,s=this.objectDescriptor.propertyDescriptorForName(i),n=p.withRawRuleAndPropertyName(e,t,r);return n.propertyDescriptor=s,n.converter=e.converter||this._defaultConverter(n.sourcePath,n.targetPath,a),n.isReverter=!r,n}},_shouldMapRule:{value:function(e,t){var r=e.hasOwnProperty(v),a=!r&&e.hasOwnProperty(f);return r&&t||a}},_defaultConverter:{value:function(e,t,r){var a=r?this.schemaDescriptor:this.objectDescriptor,i=r?this.objectDescriptor:this.schemaDescriptor,s=a&&a.propertyDescriptorForName(e),n=i&&i.propertyDescriptorForName(t),o=s&&s.valueType,p=n&&n.valueType,c=s&&n&&o!==p;return c?this._converterForValueTypes(p,o):null}},_converterForValueTypes:{value:function(e,r){var a=t.ExpressionDataMapping.defaultConverters;return a[e]&&a[e][r]||null}},mapFromRawData:{value:function(e,t,r){return this.mapRawDataToObject(t,e,r)}},mapToRawData:{value:function(e,t){this.mapObjectToRawData(e,t)}}},{defaultConverters:{get:function(){if(!t.ExpressionDataMapping._defaultConverters){var e={};t.ExpressionDataMapping._addDefaultConvertersToMap(e),t.ExpressionDataMapping._defaultConverters=e}return t.ExpressionDataMapping._defaultConverters}},_addDefaultConvertersToMap:{value:function(e){t.ExpressionDataMapping._addDefaultBooleanConvertersToConverters(e),t.ExpressionDataMapping._addDefaultNumberConvertersToConverters(e),t.ExpressionDataMapping._addDefaultStringConvertersToConverters(e)}},_addDefaultBooleanConvertersToConverters:{value:function(e){var t={};t.string=Object.create({},{convert:{value:function(e){return Boolean(e)}},revert:{value:function(e){return String(e)}}}),t.number=Object.create({},{convert:{value:function(e){return Boolean(e)}},revert:{value:function(e){return Number(e)}}}),e["boolean"]=t}},_addDefaultNumberConvertersToConverters:{value:function(e){var t={};t.string=Object.create({},{convert:{value:function(e){return Number(e)}},revert:{value:function(e){return String(e)}},identifier:{value:"String -> Number"}}),t["boolean"]=Object.create({},{convert:{value:function(e){return Number(e)}},revert:{value:function(e){return Boolean(e)}}}),e.number=t}},_addDefaultStringConvertersToConverters:{value:function(e){var t={};t.number=Object.create({},{convert:{value:function(e){return String(e)}},revert:{value:function(e){return Number(e)}},identifier:{value:"Number -> String"}}),t["boolean"]=Object.create({},{convert:{value:function(e){return String(e)}},revert:{value:function(e){return Boolean(e)}}}),e.string=t}}})}});