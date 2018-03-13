"use strict";function SortedSet(t,e,o,r){return this instanceof SortedSet?(this.contentEquals=e||Object.equals,this.contentCompare=o||Object.compare,this.getDefault=r||Function.noop,this.root=null,this.length=0,void this.addEach(t)):new SortedSet(t,e,o,r)}function Node(t){this.value=t,this.left=null,this.right=null,this.length=1}function Iterator(t,e,o){if(this.set=t,this.prev=null,this.end=o,e){var r=this.set.findLeastGreaterThanOrEqual(e);r&&(this.set.splay(r.value),this.prev=r.getPrevious())}}module.exports=SortedSet;var Shim=require("./shim"),GenericCollection=require("./generic-collection"),GenericSet=require("./generic-set"),PropertyChanges=require("./listen/property-changes"),RangeChanges=require("./listen/range-changes"),TreeLog=require("./tree-log");SortedSet.SortedSet=SortedSet,Object.addEach(SortedSet.prototype,GenericCollection.prototype),Object.addEach(SortedSet.prototype,GenericSet.prototype),Object.addEach(SortedSet.prototype,PropertyChanges.prototype),Object.addEach(SortedSet.prototype,RangeChanges.prototype),Object.defineProperty(SortedSet.prototype,"size",GenericCollection._sizePropertyDescriptor),SortedSet.from=GenericCollection.from,SortedSet.prototype.isSorted=!0,SortedSet.prototype.constructClone=function(t){return new this.constructor(t,this.contentEquals,this.contentCompare,this.getDefault)},SortedSet.prototype.has=function(t,e){if(e)throw new Error("SortedSet#has does not support second argument: equals");return!!this.root&&(this.splay(t),this.contentEquals(t,this.root.value))},SortedSet.prototype.get=function(t,e){if(e)throw new Error("SortedSet#get does not support second argument: equals");return this.root&&(this.splay(t),this.contentEquals(t,this.root.value))?this.root.value:this.getDefault(t)},SortedSet.prototype.add=function(t){var e=new this.Node(t);if(!this.root)return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([t],[],0),this.root=e,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([t],[],0),!0;if(this.splay(t),!this.contentEquals(t,this.root.value)){var o=this.contentCompare(t,this.root.value);if(0===o)throw new Error("SortedSet cannot contain incomparable but inequal values: "+t+" and "+this.root.value);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([t],[],this.root.index),o<0?(e.right=this.root,e.left=this.root.left,this.root.left=null,this.root.touch()):(e.left=this.root,e.right=this.root.right,this.root.right=null,this.root.touch()),e.touch(),this.root=e,this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([t],[],this.root.index),!0}return!1},SortedSet.prototype["delete"]=function(t,e){if(e)throw new Error("SortedSet#delete does not support second argument: equals");if(this.root&&(this.splay(t),this.contentEquals(t,this.root.value))){var o=this.root.index;if(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[t],o),this.root.left){var r=this.root.right;this.root=this.root.left,this.splay(t),this.root.right=r}else this.root=this.root.right;return this.length--,this.root&&this.root.touch(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],[t],o),!0}return!1},SortedSet.prototype.indexOf=function(t,e){if(e)throw new Error("SortedSet#indexOf does not support second argument: startIndex");return this.root&&(this.splay(t),this.contentEquals(t,this.root.value))?this.root.index:-1},SortedSet.prototype.find=function(t,e,o){if(e)throw new Error("SortedSet#find does not support second argument: equals");if(o)throw new Error("SortedSet#find does not support third argument: index");if(this.root&&(this.splay(t),this.contentEquals(t,this.root.value)))return this.root},SortedSet.prototype.findGreatest=function(t){if(this.root){for(t=t||this.root;t.right;)t=t.right;return t}},SortedSet.prototype.findLeast=function(t){if(this.root){for(t=t||this.root;t.left;)t=t.left;return t}},SortedSet.prototype.findGreatestLessThanOrEqual=function(t){if(this.root)return this.splay(t),this.contentCompare(this.root.value,t)>0?this.root.getPrevious():this.root},SortedSet.prototype.findGreatestLessThan=function(t){if(this.root)return this.splay(t),this.contentCompare(this.root.value,t)>=0?this.root.getPrevious():this.root},SortedSet.prototype.findLeastGreaterThanOrEqual=function(t){if(this.root)return this.splay(t),this.contentCompare(this.root.value,t)>=0?this.root:this.root.getNext()},SortedSet.prototype.findLeastGreaterThan=function(t){if(this.root)return this.splay(t),this.contentCompare(this.root.value,t)<=0?this.root.getNext():this.root},SortedSet.prototype.pop=function(){if(this.root){var t=this.findGreatest();return this["delete"](t.value),t.value}},SortedSet.prototype.shift=function(){if(this.root){var t=this.findLeast();return this["delete"](t.value),t.value}},SortedSet.prototype.push=function(){this.addEach(arguments)},SortedSet.prototype.unshift=function(){this.addEach(arguments)},SortedSet.prototype.slice=function(t,e){t=t||0,e=e||this.length,t<0&&(t+=this.length),e<0&&(e+=this.length);var o=[];if(this.root)for(this.splayIndex(t);this.root.index<e&&(o.push(this.root.value),this.root.right);)this.splay(this.root.getNext().value);return o},SortedSet.prototype.splice=function(t,e){return this.swap(t,e,Array.prototype.slice.call(arguments,2))},SortedSet.prototype.swap=function(t,e,o){if(void 0===t&&void 0===e)return[];t=t||0,t<0&&(t+=this.length),void 0===e&&(e=1/0);var r=[];if(this.root){this.splayIndex(t);for(var i=0;i<e;i++){r.push(this.root.value);var h=this.root.getNext();if(this["delete"](this.root.value),!h)break;this.splay(h.value)}}return this.addEach(o),r},SortedSet.prototype.splay=function(t){var e,o,r,i,h,s;if(this.root){for(e=o=r=new this.Node,s=new this.Node,h=this.root;;){var n=this.contentCompare(t,h.value);if(n<0){if(!h.left)break;if(this.contentCompare(t,h.left.value)<0&&(i=h.left,h.left=i.right,h.touch(),i.right=h,i.touch(),h=i,!h.left))break;i=new Node,i.right=h,i.left=s.left,s.left=i,r.left=h,r.touch(),r=h,h=h.left}else{if(!(n>0))break;if(!h.right)break;if(this.contentCompare(t,h.right.value)>0&&(i=h.right,h.right=i.left,h.touch(),i.left=h,i.touch(),h=i,!h.right))break;i=new Node,i.left=h,i.right=s.right,s.right=i,o.right=h,o.touch(),o=h,h=h.right}}for(o.right=h.left,o.touch(),r.left=h.right,r.touch(),h.left=e.right,h.right=e.left;s.left;)s.left.right.touch(),s.left=s.left.left;for(;s.right;)s.right.left.touch(),s.right=s.right.right;h.touch(),this.root=h}},SortedSet.prototype.splayIndex=function(t){if(this.root){for(var e=this.root,o=this.root.index;o!==t;)if(o>t&&e.left)e=e.left,o-=1+(e.right?e.right.length:0);else{if(!(o<t&&e.right))break;e=e.right,o+=1+(e.left?e.left.length:0)}return this.splay(e.value),this.root.index===t}return!1},SortedSet.prototype.reduce=function(t,e,o){return this.root&&(e=this.root.reduce(t,e,0,o,this)),e},SortedSet.prototype.reduceRight=function(t,e,o){return this.root&&(e=this.root.reduceRight(t,e,this.length-1,o,this)),e},SortedSet.prototype.min=function(t){var e=this.findLeast(t);if(e)return e.value},SortedSet.prototype.max=function(t){var e=this.findGreatest(t);if(e)return e.value},SortedSet.prototype.one=function(){return this.min()},SortedSet.prototype.clear=function(){var t;this.dispatchesRangeChanges&&(t=this.toArray(),this.dispatchBeforeRangeChange([],t,0)),this.root=null,this.length=0,this.dispatchesRangeChanges&&this.dispatchRangeChange([],t,0)},SortedSet.prototype.iterate=function(t,e){return new this.Iterator(this,t,e)},SortedSet.prototype.Iterator=Iterator,SortedSet.prototype.summary=function(){return this.root?this.root.summary():"()"},SortedSet.prototype.log=function(t,e,o,r){t=t||TreeLog.unicodeRound,e=e||this.logNode,o||(o=console.log,r=console),o=o.bind(r),this.root&&this.root.log(t,e,o,o)},SortedSet.prototype.logNode=function(t,e,o){e(" "+t.value)},SortedSet.logCharsets=TreeLog,SortedSet.prototype.Node=Node,Node.prototype.reduce=function(t,e,o,r,i,h){if(h=h||0,this.left){var s=this.left.length;e=this.left.reduce(t,e,o,r,i,h+1),o+=s}return e=t.call(r,e,this.value,o,i,this,h),o+=1,this.right&&(e=this.right.reduce(t,e,o,r,i,h+1)),e},Node.prototype.reduceRight=function(t,e,o,r,i,h){return h=h||0,this.right&&(e=this.right.reduce(t,e,o,r,i,h+1),o-=this.right.length),e=t.call(r,e,this.value,this.value,i,this,h),o-=1,this.left&&(e=this.left.reduce(t,e,o,r,i,h+1)),e},Node.prototype.touch=function(){this.length=1+(this.left?this.left.length:0)+(this.right?this.right.length:0),this.index=this.left?this.left.length:0},Node.prototype.checkIntegrity=function(){var t=1;if(t+=this.left?this.left.checkIntegrity():0,t+=this.right?this.right.checkIntegrity():0,this.length!==t)throw new Error("Integrity check failed: "+this.summary());return t},Node.prototype.getNext=function(){var t=this;if(t.right){for(t=t.right;t.left;)t=t.left;return t}},Node.prototype.getPrevious=function(){var t=this;if(t.left){for(t=t.left;t.right;)t=t.right;return t}},Node.prototype.summary=function(){var t=this.value||"-";return t+=" <"+this.length,this.left||this.right?"("+t+" "+(this.left?this.left.summary():"()")+", "+(this.right?this.right.summary():"()")+")":"("+t+")"},Node.prototype.log=function(t,e,o,r){var i,h=this;i=this.left&&this.right?t.intersection:this.left?t.branchUp:this.right?t.branchDown:t.through;var s;this.left&&this.left.log(t,e,function(e){s?r(t.strafe+" "+e):(s=!0,r(t.fromBelow+t.through+e))},function(t){r("  "+t)});var n;e(this,function(e){n?o((h.right?t.strafe:" ")+e):(n=!0,o(i+e))},function(e){r((h.left?t.strafe:" ")+e)});var a;this.right&&this.right.log(t,e,function(e){a?o("  "+e):(a=!0,o(t.fromAbove+t.through+e))},function(e){o(t.strafe+" "+e)})},Iterator.prototype.__iterationObject=null,Object.defineProperty(Iterator.prototype,"_iterationObject",{get:function(){return this.__iterationObject||(this.__iterationObject={done:!1,value:null})}}),Iterator.prototype.next=function(){var t;return t=this.prev?this.set.findLeastGreaterThan(this.prev.value):this.set.findLeast(),t?void 0!==this.end&&this.set.contentCompare(t.value,this.end)>=0?(this._iterationObject.done=!0,this._iterationObject.value=void 0):(this.prev=t,this._iterationObject.value=t.value):(this._iterationObject.done=!0,this._iterationObject.value=void 0),this._iterationObject};