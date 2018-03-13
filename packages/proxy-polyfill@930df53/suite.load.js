montageDefine("930df53","suite",{dependencies:[],factory:function(e,t,s){void function(){"use strict";function e(){return{name:"I'm a test",value:123,sub:{name:"sub"}}}function t(t,s){suite(s,function(){test("get",function(){var s=e(),n=[],r=new t(s,{get:function(e,t){return n.push(t),e[t]}});r.name,r.sub,r.sub.name;var a=r.sub;a.name,assert.deepEqual(n,"name sub sub sub".split(/\s+/))}),test("set",function(){var s=e(),n=[],r=new t(s,{set:function(e,t){return n.push(t),!0}});r.value+=1,r.sub=45,assert.isNotNumber(r.sub,"setter should not actually set"),assert.deepEqual(n,"value sub".split(/\s+/))}),test("proxy chain",function(){var e={value:123},s=new t(e,{}),n=new t(s,{get:function(e,t){return e[t]}}),r=new t(n,{});assert.equal(r.value,123)}),test("callable",function(){var e=0,s=function(){return++e},n=new t(s,{});assert.equal(1,n()),assert.equal(2,s()),assert.equal(3,n())}),test("wrap constructor",function(){var e=function(e){this.x=1};e.prototype.sentinel=!0;var s=new t(e,{}),n=new s;assert(n.sentinel,"prototype not configured correctly")}),test("construct/apply assertions",function(){var e=new t({},{construct:function(e,t){assert(!1,"should not get here")}});assert["throws"](function(){e()},TypeError);var s=new t({},{apply:function(e,t){assert(!1,"should not get here")}});assert["throws"](function(){new s},TypeError)}),test("construct",function(){var e=function(e){var t=this||{};return t.x=e||0,t};e.prototype.sentinel=!0;var s=new t(e,{construct:function(e,t){return new e((t[0]||0)+10)}}),n=new s(5);assert.equal(n.x,15),assert(n.sentinel);var r=s(5);assert.equal(r.x,5),assert(!r.sentinel,"apply use should not contain sentinel")}),test("proxy without construct handler passes arguments",function(){var e=function(t,s){assert(this instanceof e,"cls prototype is not set correctly"),this.x=t,this.y=s},s=new t(e,{}),n=new s(1,2);assert.equal(n.x,1),assert.equal(n.y,2)}),test("apply on non-function",function(){var e={},s=new t(e,{});assert.isNotFunction(s,"stock proxy is not function"),assert["throws"](function(){s()},TypeError);var n=new t(e,{apply:function(){}});assert.doesNotThrow(function(){n()})}),test("traps function",function(){var e=function(e,t){return 1},s=new t(e,function(t,s){return assert.equal(this,e),assert.equal(this(),1),assert.equal(t,void 0),assert.equal(s,void 0),2});assert.equal(s(3,4),2)}),test("revocable proxy",function(){var e=t.revocable({a:1},{});e.proxy.a=2,e.revoke(),assert["throws"](function(){e.proxy.a=3},TypeError);var s=0;e=t.revocable({b:2},{get:function(e,t){return++s,e[t]}}),e.proxy.b,e.proxy.b,e.revoke(),assert["throws"](function(){e.proxy.b},TypeError),assert.equal(s,2);var n=function(){assert(!1,"should never get here")};e=t.revocable(n,{apply:function(){}}),e.revoke(),assert["throws"](function(){e.proxy()},TypeError)}),test("proxy instance of class",function(){var e=function(){this.y=1};e.prototype.x=function(){++this.y};var s=new e,n=new t(s,{});assert("x"in s,"inst should have function"),assert("x"in n,"proxy should have function"),n.x(),assert.equal(n.y,2)}),test("trap instance methods",function(){var e=function(){this.y=1};e.prototype.x=function(){};var s,n=new e,r=new t(n,{get:function(e,t){return assert.equal(e,n),s=t,e[t]}});r.x(),assert.equal(s,"x","expected get of function");var a=function(){this.y=2},o=!0;try{n.x=a}catch(u){o=!1}r.x(),o?(assert.equal(n.x,a),assert.equal(r.y,2)):assert.equal(r.y,1)})})}t(window.Proxy,"polyfill"),window.NativeProxy&&t(window.NativeProxy,"native"),suite("general polyfill",function(){test("seals object",function(){var t=e();assert.isNotSealed(t);var s=new Proxy(t,{});assert.isSealed(t),assert.isSealed(s,"proxy should also be sealed"),new Proxy(t,{}),assert.isSealed(t);var n=new Proxy(s,{});assert.isSealed(s),assert["throws"](function(){n.newProperty=!0},TypeError)}),test("seals array",function(){var e=[7,8,9];assert.isNotSealed(e);var t=new Proxy(e,{});assert.isSealed(e),assert.isSealed(t,"proxy should also be sealed"),assert["throws"](function(){t.push(1)},TypeError);var s=e.slice(0,1);s.push(2),assert.equal(s.length,2)}),test("array as property",function(){var e={arr:[1,2,3]},t=new Proxy(e,{get:function(e,t){return e[t]}});assert.equal(t.arr.length,3),t.arr.push(4),assert.equal(t.arr.length,4),t.arr.splice(0,2),assert.equal(t.arr.length,2)})})}()}});