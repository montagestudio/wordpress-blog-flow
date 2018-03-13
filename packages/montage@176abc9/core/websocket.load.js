montageDefine("176abc9","core/websocket",{dependencies:["./target"],factory:function(e,t,n){var s=e("./target").Target,o=global.WebSocket;t.WebSocket=s.specialize({constructor:{value:function(e,t){return this._url=e,this._protocols=t,this._messageQueue=[],this._webSocket=null,this._isReconnecting=!1,this._connect(),this}},_url:{value:void 0},_protocols:{value:void 0},_messageQueue:{value:void 0},_webSocket:{value:void 0},reconnectionInterval:{value:100},_connect:{value:function(){this._webSocket=new o(this._url,this._protocols),this._webSocket.addEventListener("error",this,!1),this._webSocket.addEventListener("open",this,!1)}},send:{value:function(e){this._messageQueue.push(e),this._sendNextMessage()}},_sendNextMessage:{value:function(){if(this._messageQueue.length)switch(this.readyState){case WebSocket.CONNECTING:break;case WebSocket.CLOSING:case WebSocket.CLOSED:this._reconnect();break;case WebSocket.OPEN:try{this._webSocket.send(this._messageQueue[0]),this._messageQueue.shift()}catch(e){this._reconnect()}}}},_reconnect:{value:function(){var e;this._isReconnecting||(e=this,this._webSocket=null,this._isReconnecting=!0,setTimeout(function(){e._connect(),e._isReconnecting=!1},Math.random()*this._reconnectionInterval),this._reconnectionInterval*=2,this._reconnectionInterval>3e4&&(this._reconnectionInterval=3e4))}},handleEvent:{value:function(e){switch(e.type){case"open":this._reconnectionInterval=100,this._webSocket&&(this._webSocket.addEventListener("message",this,!1),this._webSocket.addEventListener("close",this,!1)),this.dispatchEvent(e),this._sendNextMessage();break;case"message":this.dispatchEvent(e),this._sendNextMessage();break;default:this.dispatchEvent(e),this._reconnect()}}},close:{value:function(e,t){return this._webSocket.close(e,t)}},binaryType:{get:function(){return this._webSocket.binaryType},set:function(e){this._webSocket.binaryType=e}},bufferedAmount:{get:function(){return this._webSocket.bufferedAmount}},extensions:{get:function(){return this._webSocket.extensions},set:function(e){this._webSocket.extensions=e}},protocol:{get:function(){return this._webSocket.protocol}},readyState:{get:function(){return this._webSocket?this._webSocket.readyState:WebSocket.CLOSED}},_onclose:{value:void 0},onclose:{get:function(){return this._onclose},set:function(e){e!==this._onclose&&(this.removeEventListener("close",this._onclose,!1),this._onclose=e),this.addEventListener("close",e,!1)}},_onerror:{value:void 0},onerror:{get:function(){return this._onerror},set:function(e){e!==this._onerror&&(this.removeEventListener("error",this._onerror,!1),this._onerror=e),this.addEventListener("error",e,!1)}},_onmessage:{value:void 0},onmessage:{get:function(){return this._onmessage},set:function(e){e!==this._onmessage&&(this.removeEventListener("message",this._onmessage,!1),this._onmessage=e),this.addEventListener("message",e,!1)}},_onopen:{value:void 0},onopen:{get:function(){return this._onopen},set:function(e){e!==this._onopen&&(this.removeEventListener("open",this._onopen,!1),this._onopen=e),this.addEventListener("open",e,!1)}}},{CONNECTING:{value:0},OPEN:{value:1},CLOSING:{value:2},CLOSED:{value:3}})}});