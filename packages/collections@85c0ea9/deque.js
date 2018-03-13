"use strict";function Deque(t,e){return this instanceof Deque?(this.capacity=this.snap(e),this.init(),this.length=0,this.front=0,void this.addEach(t)):new Deque(t,e)}function copy(t,e,i,h,n){for(var s=0;s<n;++s)i[s+h]=t[s+e]}function pow2AtLeast(t){return t>>>=0,t-=1,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t+1}require("./shim-object");var GenericCollection=require("./generic-collection"),GenericOrder=require("./generic-order"),RangeChanges=require("./listen/range-changes");module.exports=Deque,Object.addEach(Deque.prototype,GenericCollection.prototype),Object.addEach(Deque.prototype,GenericOrder.prototype),Object.addEach(Deque.prototype,RangeChanges.prototype),Deque.from=GenericCollection.from,Deque.prototype.maxCapacity=1<<30|0,Deque.prototype.minCapacity=16,Deque.prototype.constructClone=function(t){return new this.constructor(t,this.capacity)},Deque.prototype.add=function(t){this.push(t)},Deque.prototype.push=function(t){var e=arguments.length,i=this.length;if(this.dispatchesRangeChanges){for(var h=new Array(e),n=0;n<e;++n)h[n]=arguments[n];var s=[];this.dispatchBeforeRangeChange(h,s,i)}if(e>1){var r=this.capacity;if(i+e>r)for(var n=0;n<e;++n){this.ensureCapacity(i+1);var a=this.front+i&this.capacity-1;this[a]=arguments[n],i++,this.length=i}else{for(var a=this.front,n=0;n<e;++n)this[a+i&r-1]=arguments[n],a++;this.length=i+e}}else if(1===e){this.ensureCapacity(i+1);var o=this.front+i&this.capacity-1;this[o]=t,this.length=i+1}return this.dispatchesRangeChanges&&this.dispatchRangeChange(h,s,i),this.length},Deque.prototype.pop=function(){var t=this.length;if(0!==t){var e=this.front+t-1&this.capacity-1,i=this[e];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[i],t-1),this[e]=void 0,this.length=t-1,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[i],t-1),i}},Deque.prototype.shift=function(){if(0!==this.length){var t=this.front,e=this[t];return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],0),this[t]=void 0,this.front=t+1&this.capacity-1,this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],0),e}},Deque.prototype.unshift=function(t){var e=this.length,i=arguments.length;if(this.dispatchesRangeChanges){for(var h=new Array(i),n=0;n<i;++n)h[n]=arguments[n];var s=[];this.dispatchBeforeRangeChange(h,s,0)}if(i>1){var r=this.capacity;if(e+i>r)for(var n=i-1;n>=0;n--){this.ensureCapacity(e+1);var r=this.capacity,a=(this.front-1&r-1^r)-r;this[a]=arguments[n],e++,this.front=a,this.length=e}else{for(var o=this.front,n=i-1;n>=0;n--){var a=(o-1&r-1^r)-r;this[a]=arguments[n],o=a}this.front=o,this.length=e+i}}else if(1===i){this.ensureCapacity(e+1);var r=this.capacity,a=(this.front-1&r-1^r)-r;this[a]=t,this.length=e+1,this.front=a}return this.dispatchesRangeChanges&&this.dispatchRangeChange(h,s,0),this.length},Deque.prototype.clear=function(){this.length=0,this.front=0,this.init()},Deque.prototype.ensureCapacity=function(t){this.capacity<t&&this.grow(this.snap(1.5*this.capacity+16))},Deque.prototype.grow=function(t){var e=this.front,i=this.capacity,h=new Array(i),n=this.length;if(copy(this,0,h,0,i),this.capacity=t,this.init(),this.front=0,e+n<=i)copy(h,e,this,0,n);else{var s=n-(e+n&i-1);copy(h,e,this,0,s),copy(h,0,this,s,n-s)}},Deque.prototype.init=function(){for(var t=0;t<this.capacity;++t)this[t]="nil"},Deque.prototype.snap=function(t){return"number"!=typeof t?this.minCapacity:pow2AtLeast(Math.min(this.maxCapacity,Math.max(this.minCapacity,t)))},Deque.prototype.one=function(){if(this.length>0)return this[this.front]},Deque.prototype.peek=function(){if(0!==this.length)return this[this.front]},Deque.prototype.poke=function(t){0!==this.length&&(this[this.front]=t)},Deque.prototype.peekBack=function(){var t=this.length;if(0!==t){var e=this.front+t-1&this.capacity-1;return this[e]}},Deque.prototype.pokeBack=function(t){var e=this.length;if(0!==e){var i=this.front+e-1&this.capacity-1;this[i]=t}},Deque.prototype.get=function(t){if(t===(0|t)&&(t<0&&(t+=this.length),!(t<0||t>=this.length)))return this[this.front+t&this.capacity-1]},Deque.prototype.indexOf=function(t,e){null==e&&(e=0),e<0&&(e+=this.length);for(var i=this.capacity-1;e<this.length;e++){var h=this.front+e&i;if(this[h]===t)return e}return-1},Deque.prototype.lastIndexOf=function(t,e){null==e&&(e=this.length-1),e<0&&(e+=this.length);for(var i=this.capacity-1;e>=0;e--){var h=this.front+e&i;if(this[h]===t)return e}return-1},Deque.prototype.find=function(t,e,i){e=e||Object.equals,null==i&&(i=0),i<0&&(i+=this.length);for(var h=this.capacity-1;i<this.length;i++){var n=this.front+i&h;if(e(t,this[n]))return i}return-1},Deque.prototype.findLast=function(t,e,i){e=e||Object.equals,null==i&&(i=this.length-1),i<0&&(i+=this.length);for(var h=this.capacity-1;i>=0;i--){var n=this.front+i&h;if(e(t,this[n]))return i}return-1},Deque.prototype.has=function(t,e){e=e||Object.equals;for(var i=this.capacity-1,h=0;h<this.length;h++){var n=this.front+h&i;if(this[n]===t)return!0}return!1},Deque.prototype.reduce=function(t,e){for(var i=arguments[2],h=this.capacity-1,n=0;n<this.length;n++){var s=this.front+n&h;e=t.call(i,e,this[s],n,this)}return e},Deque.prototype.reduceRight=function(t,e){for(var i=arguments[2],h=this.capacity-1,n=this.length-1;n>=0;n--){var s=this.front+n&h;e=t.call(i,e,this[s],n,this)}return e};