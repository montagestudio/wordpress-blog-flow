montageDefine("176abc9","data/service/indexed-d-b-data-service",{dependencies:["data/service/persistent-data-service","data/service/data-stream","data/service/data-operation","core/promise","core/uuid","data/model/data-ordering","frb/evaluate","collections/map"],factory:function(e,a,t){var r=e("data/service/persistent-data-service").PersistentDataService,o=(e("data/service/data-stream").DataStream,e("data/service/data-operation").DataOperation,e("core/promise").Promise),d=(e("core/uuid"),e("data/model/data-ordering").DataOrdering);d.DESCENDING,e("frb/evaluate"),e("collections/map");a.IndexedDBDataService=r.specialize({constructor:{value:function i(){i.call(this)}},deserializeSelf:{value:function(e){this["super"](e)}},_db:{value:void 0},provideDatabaseForModel:{value:function(e){var a,t,r=this,d=new o(function(o,d){a=o,t=d;var i=window.indexedDB.open(e.name,e.version);i?(i.identifier="openDatabase",i.model=e,i.addEventListener("upgradeneeded",r,!1),i.addEventListener("success",r,!1),i.addEventListener("error",r,!1),i.addEventListener("blocked",r,!1)):d(new Error("IndexedDB API not available"))});return d.resolve=a,d.reject=t,d}},_storage:{value:void 0},storage:{get:function(){return this._storage||(global.indexedDB?this._storage=this.storagePromiseForNameVersion(this.model.name,this.model.version):this._storage=o.reject(new Error("Your environment doesn't support IndexedDB."))),this._storage}},provideStorageForObjectDescriptor:{value:function(e){return this.storagePromiseForNameVersion(e.model.name,e.model.version)}},handleOpenDatabaseError:{value:function(e){this.databaseForModel(e.target.model).reject(e)}},handleOpenDatabaseBlocked:{value:function(e){this.databaseForModel(e.target.model).reject(e)}},handleOpenDatabaseSuccess:{value:function(e){this._db=e.target.result,this.databaseForModel(e.target.model).resolve(this._db)}},handleOpenDatabaseUpgradeneeded:{value:function(e){this.databaseForModel(e.target.model).reject(e)}},schema:{value:void 0}})}});