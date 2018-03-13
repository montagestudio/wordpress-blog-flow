"use strict";function SortedArraySet(r,t,e,o){return this instanceof SortedArraySet?void SortedArray.call(this,r,t,e,o):new SortedArraySet(r,t,e,o)}module.exports=SortedArraySet;var Shim=require("./shim"),SortedArray=require("./sorted-array"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes");SortedArraySet.SortedArraySet=SortedArraySet,SortedArraySet.prototype=Object.create(SortedArray.prototype),SortedArraySet.prototype.constructor=SortedArraySet,Object.addEach(SortedArraySet.prototype,GenericSet.prototype),Object.addEach(SortedArraySet.prototype,PropertyChanges.prototype),SortedArraySet.from=SortedArray.from,SortedArraySet.prototype.isSorted=!0,SortedArraySet.prototype.add=function(r){return!this.has(r)&&(SortedArray.prototype.add.call(this,r),!0)},SortedArraySet.prototype.reduce=function(r,t){var e=this,o=arguments[2];return this.array.reduce(function(t,a,S){return r.call(o,t,a,S,e)},t)},SortedArraySet.prototype.reduceRight=function(r,t){var e=this,o=arguments[2];return this.array.reduceRight(function(t,a,S){return r.call(o,t,a,S,e)},t)};