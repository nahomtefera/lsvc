(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports=n(78)},41:function(e,t,n){},42:function(e,t,n){},72:function(e,t){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){e.exports=n.p+"static/media/videosvg.3e889147.svg"},78:function(e,t,n){"use strict";n.r(t);var a,s,r=n(0),o=n.n(r),c=n(34),i=n.n(c),l=(n(41),n(1)),u=n(2),m=n(4),d=n(3),f=(n(42),n(35)),g=n.n(f),v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e;console.log("production"),console.log(window.location.hostname),e="https://livestreamm.herokuapp.com/",console.log(e),a=g.a.connect(e,{secure:!0})}},{key:"render",value:function(){return null}}]),n}(r.Component),h=n(12),p=(n(75),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleChange=function(e,t){s.setState(Object(h.a)({},t,e))},s.handleKeyPress=function(e){"Enter"===e.key&&s.login()},s.login=function(){var e=s.state.username;""!=e&&a.emit("new user",e,(function(e){e&&(console.log(e),s.props.isLogged())}))},s.state={username:""},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.state.username,n=this.handleChange;return o.a.createElement("div",{className:"login-container"},o.a.createElement("input",{autoComplete:"off",type:"text",className:"username",onKeyPress:this.handleKeyPress,placeholder:"Enter your name",onChange:function(e){n(e.target.value,"username")},value:t}),o.a.createElement("button",{onClick:function(){e.login()},id:"user-login-btn"},"Login"))}}]),n}(r.Component)),E=n(11),b=(n(76),function(e){Object(m.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={mySocketId:"",users:[]},n}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;a.on("get users",(function(t){var n=[];t.map((function(e){e.id==a.id?n.unshift(e):n.push(e)})),e.setState({users:n,mySocketId:a.id})}))}},{key:"render",value:function(){var e=this.state.users,t=this.state.mySocketId,a=this.props.createOffer;return o.a.createElement("div",{className:"users-container"},o.a.createElement("h3",{className:"online-users-title"},"Online Users"),o.a.createElement("ul",{className:"users-list"},e.map((function(e,s){return o.a.createElement("li",{key:s,className:e.id===t?"username-item my-username-item":"username-item",id:e.id},e.id===t?o.a.createElement("span",null,"Logged in as ",o.a.createElement("strong",null,e.username)):e.username,e.id===t?null:o.a.createElement("div",{className:"camera-icon"},o.a.createElement("img",{onClick:function(){a(e.id)},src:n(77),alt:"video-icon"})))}))))}}]),s}(r.Component)),w=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleChange=function(e,t){s.setState(Object(h.a)({},t,e))},s.sendMessage=function(e){a.emit("send message",e),s.setState({message:""})},s.handleKeyPress=function(e){"Enter"===e.key&&(console.log(s.state.message),s.sendMessage(s.state.message))},s.state={message:"",chatMessages:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.chatMessages;a.on("new message",(function(n){t.push(n),e.setState({chatMessages:t})}))}},{key:"render",value:function(){var e=this.state.message,t=this.state.chatMessages,n=this.handleChange,s=this.sendMessage,c=a.id;return o.a.createElement("div",{className:"chat-container"},o.a.createElement("div",{className:"chat-messages"},0===t.length?null:t.map((function(e,t){return o.a.createElement(r.Fragment,{key:t},o.a.createElement("div",{className:e.id==c?"chat-message my-message":"chat-message"},o.a.createElement("div",{className:"message-inner-container"},e.id==c?null:o.a.createElement(r.Fragment,null,o.a.createElement("span",{className:"message-username"},e.user)," ",o.a.createElement("br",null))," ",e.msg)),o.a.createElement("br",null))}))),o.a.createElement("div",{className:"send-message-container"},o.a.createElement("input",{type:"text",className:"chat-msg",onKeyPress:this.handleKeyPress,onChange:function(e){n(e.target.value,"message")},value:e}),o.a.createElement("button",{className:"chat-btn",onClick:function(){s(e)}},"Send")))}}]),n}(r.Component),O=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={},a}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"video-container",className:"videostream-container"},o.a.createElement("div",{className:"video-inner-container"},o.a.createElement("video",{className:"video-stream",autoPlay:!0,muted:!0})))}}]),n}(r.Component),y={},k=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection||window.msRTCPeerConnection,j=window.RTCSessionDescription||window.mozRTCSessionDescription||window.webkitRTCSessionDescription||window.msRTCSessionDescription;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var C=new k({iceServers:[{url:"stun:stun.services.mozilla.com",username:"somename",credential:"somecredentials"}]}),N=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).error=function(e){console.warn("Error",e)},s.createOffer=function(e){var t=Object(E.a)(s);C.createOffer((function(n){C.setLocalDescription(new j(n),(function(){a.emit("make-offer",{offer:n,to:e})}),t.error)}),t.error),console.log(e)},s.state={videos:[]},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;C.onaddstream=function(e){var t=document.createElement("div"),n=document.createElement("video");t.setAttribute("class","video-inner-container"),n.setAttribute("autoplay","autoplay"),n.srcObject=e.stream,t.appendChild(n),document.getElementById("video-container").appendChild(t)},navigator.getUserMedia({video:!0,audio:!0},(function(e){console.log("videostream started"),document.querySelector("video").srcObject=e,C.addStream(e)}),e.error),a.on("answer-made",(function(t){C.setRemoteDescription(new j(t.answer),(function(){document.getElementById(t.socket).classList.add("active"),y[t.socket]||(e.createOffer(t.socket),y[t.socket]=!0)}),e.error)})),a.on("offer-made",(function(t){s=t.offer,console.log(s),C.setRemoteDescription(new j(t.offer),(function(){C.createAnswer((function(n){C.setLocalDescription(new j(n),(function(){console.log("MAKE ANSWER"),a.emit("make-answer",{answer:n,to:t.socket})}),e.error)}),e.error)}),e.error)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"livestream-container"},o.a.createElement(b,{createOffer:this.createOffer}),o.a.createElement(w,null),o.a.createElement(O,null))}}]),n}(r.Component),M=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).isLogged=function(){a.setState({logged:!0})},a.state={logged:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.logged;return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),e?o.a.createElement(N,null):o.a.createElement(p,{isLogged:this.isLogged}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0c262165.chunk.js.map