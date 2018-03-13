montageDefine("6330253","js/release/promise_array",{dependencies:["./util"],factory:function(e,t,i){"use strict";i.exports=function(t,i,s,r,n){function o(e){switch(e){case-2:return[];case-3:return{};case-6:return new Map}}function l(e){var s=this._promise=new t(i);e instanceof t&&s._propagateFrom(e,3),s._setOnCancel(this),this._values=e,this._length=0,this._totalResolved=0,this._init(void 0,-2)}var a=e("./util");a.isArray;return a.inherits(l,n),l.prototype.length=function(){return this._length},l.prototype.promise=function(){return this._promise},l.prototype._init=function _(e,i){var n=s(this._values,this._promise);if(n instanceof t){n=n._target();var l=n._bitField;if(this._values=n,0===(50397184&l))return this._promise._setAsyncGuaranteed(),n._then(_,this._reject,void 0,this,i);if(0===(33554432&l))return 0!==(16777216&l)?this._reject(n._reason()):this._cancel();n=n._value()}if(n=a.asArray(n),null===n){var u=r("expecting an array or an iterable object but got "+a.classString(n)).reason();return void this._promise._rejectCallback(u,!1)}return 0===n.length?void(i===-5?this._resolveEmptyArray():this._resolve(o(i))):void this._iterate(n)},l.prototype._iterate=function(e){var i=this.getActualLength(e.length);this._length=i,this._values=this.shouldCopyValues()?new Array(i):this._values;for(var r=this._promise,n=!1,o=null,l=0;l<i;++l){var a=s(e[l],r);a instanceof t?(a=a._target(),o=a._bitField):o=null,n?null!==o&&a.suppressUnhandledRejections():null!==o?0===(50397184&o)?(a._proxy(this,l),this._values[l]=a):n=0!==(33554432&o)?this._promiseFulfilled(a._value(),l):0!==(16777216&o)?this._promiseRejected(a._reason(),l):this._promiseCancelled(l):n=this._promiseFulfilled(a,l)}n||r._setAsyncGuaranteed()},l.prototype._isResolved=function(){return null===this._values},l.prototype._resolve=function(e){this._values=null,this._promise._fulfill(e)},l.prototype._cancel=function(){!this._isResolved()&&this._promise._isCancellable()&&(this._values=null,this._promise._cancel())},l.prototype._reject=function(e){this._values=null,this._promise._rejectCallback(e,!1)},l.prototype._promiseFulfilled=function(e,t){this._values[t]=e;var i=++this._totalResolved;return i>=this._length&&(this._resolve(this._values),!0)},l.prototype._promiseCancelled=function(){return this._cancel(),!0},l.prototype._promiseRejected=function(e){return this._totalResolved++,this._reject(e),!0},l.prototype._resultCancelled=function(){if(!this._isResolved()){var e=this._values;if(this._cancel(),e instanceof t)e.cancel();else for(var i=0;i<e.length;++i)e[i]instanceof t&&e[i].cancel()}},l.prototype.shouldCopyValues=function(){return!0},l.prototype.getActualLength=function(e){return e},l}}});