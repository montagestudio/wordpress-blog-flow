var Montage=require("montage").Montage;exports.DataQuery=Montage.specialize({type:{value:void 0},criteria:{get:function(){return this._criteria||(this._criteria={}),this._criteria},set:function(e){this._criteria=e}},_criteria:{value:void 0},orderings:{get:function(){return this._orderings||(this._orderings=[]),this._orderings},set:function(e){this._orderings=e}},_orderings:{value:void 0},selectBindings:{value:void 0},selectExpression:{value:void 0},prefetchExpressions:{value:null}},{withTypeAndCriteria:{value:function(e,i){var r;return r=new this,r.type=e,r.criteria=i,r}}});