(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11,12],{196:function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return o}))},197:function(t,n,e){"use strict";function o(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",(function(){return r}))},200:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var o=e(76);var r=e(104);function c(t){return function(t){if(Array.isArray(t))return Object(o.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(r.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},202:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c}));e(50),e(147),e(207),e(49);var o=Math.random;function r(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o()*(b-a)+a}function c(){for(var u=0,t=0;0===u;)u=o();for(;0===t;)t=o();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*t)}},207:function(t,n,e){var o=e(2),r=e(5),c=Math.imul;o({target:"Math",stat:!0,forced:r((function(){return-5!=c(4294967295,5)||2!=c.length}))},{imul:function(t,n){var e=+t,o=+n,r=65535&e,c=65535&o;return 0|r*c+((65535&e>>>16)*c+r*(65535&o>>>16)<<16>>>0)}})},247:function(t,n,e){var o=e(2),r=e(211),c=e(109);o({target:"Array",proto:!0},{fill:r}),c("fill")},248:function(t,n,e){e(212)("Float32",(function(t){return function(data,n,e){return t(this,data,n,e)}}))},249:function(t,n,e){var content=e(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(35).default)("87ba198e",content,!0,{sourceMap:!1})},266:function(t,n,e){"use strict";function o(){return new Worker(e.p+"d142de0.worker.js")}e.r(n),e.d(n,"default",(function(){return o}))},267:function(t,n,e){"use strict";e.r(n);e(103);var o,r=e(200),c=e(196),l=e(197),f=e(239),d=e.n(f),h=e(202),v=function(){function t(n,e,o,r){Object(c.a)(this,t);var l=d.a.Bodies.circle(n-o/2.5,e,2*r),f=d.a.Bodies.circle(n+o/2.5,e,2*r),v=d.a.Bodies.rectangle(n,e,o,r,{collisionFilter:{category:2,mask:2}}),y=d.a.Bodies.rectangle(n,e-o/2,r/2,o),w=d.a.Constraint.create({bodyA:l,bodyB:v,pointB:{x:-o/2.5,y:0}}),m=d.a.Constraint.create({bodyA:f,bodyB:v,pointB:{x:o/2.5,y:0}}),k=d.a.Constraint.create({bodyA:v,bodyB:y,pointB:{x:0,y:o/2}});this.bodies=[l,f,v,y],this.constraints=[w,m,k],d.a.Body.applyForce(y,y.position,{x:.001*Object(h.b)(),y:0})}return Object(l.a)(t,[{key:"accelerate",value:function(t){this.bodies[0].torque=t,this.bodies[1].torque=t}},{key:"angle",get:function(){return this.bodies[3].angle}},{key:"position",get:function(){return this.bodies[0].position.x}},{key:"velocity",get:function(){return this.bodies[0].velocity.x}}]),t}();n.default=function(t,n){o||(o=[d.a.Bodies.rectangle(.5*t,.7*t,t,.05*t,{isStatic:!0}),d.a.Bodies.rectangle(0,.7*t,1,.2*t,{isStatic:!0}),d.a.Bodies.rectangle(t,.7*t,1,.2*t,{isStatic:!0})],d.a.Composite.add(n.world,Object(r.a)(o)));var e=new v(.5*t,.6*t,.25*t,.026*t);return d.a.Composite.clear(n.world,!0),d.a.Composite.add(n.world,[].concat(Object(r.a)(e.bodies),Object(r.a)(e.constraints))),e}},283:function(t,n,e){"use strict";var o=e(2),r=e(284);o({target:"String",proto:!0,forced:e(285)("sub")},{sub:function(){return r(this,"sub","","")}})},284:function(t,n,e){var o=e(13),r=/"/g;t.exports=function(t,n,e,c){var l=String(o(t)),f="<"+n;return""!==e&&(f+=" "+e+'="'+String(c).replace(r,"&quot;")+'"'),f+">"+l+"</"+n+">"}},285:function(t,n,e){var o=e(5);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},286:function(t,n,e){e(212)("Float64",(function(t){return function(data,n,e){return t(this,data,n,e)}}))},287:function(t,n,e){"use strict";var o=e(249);e.n(o).a},288:function(t,n,e){(n=e(34)(!1)).push([t.i,"canvas[data-v-7fc866a8]{width:100%;height:100%;background:#000;outline:none}.buttons[data-v-7fc866a8]{display:flex;justify-content:space-evenly;position:relative;transform:translateY(-4rem);text-align:center}.buttons button[data-v-7fc866a8]{width:30%;font-size:2rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;background:#14151f;color:#fff;border:1px solid #fff}.buttons button.btn-toggle[data-v-7fc866a8]{font-size:1.25rem}.buttons button.disabled[data-v-7fc866a8]{opacity:.5}.buttons button.btn-toggle.blink[data-v-7fc866a8]{-webkit-animation-name:blink-data-v-7fc866a8;animation-name:blink-data-v-7fc866a8;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes blink-data-v-7fc866a8{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}@keyframes blink-data-v-7fc866a8{0%{opacity:.5}50%{opacity:1}to{opacity:.5}}",""]),t.exports=n},329:function(t,n,e){"use strict";e.r(n);e(17),e(54);var o,r,c=e(239),l=e.n(c),f=e(266),d=(e(103),e(247),e(158),e(48),e(215),e(283),e(248),e(286),e(216),e(217),e(218),e(219),e(220),e(221),e(222),e(223),e(224),e(225),e(226),e(227),e(228),e(229),e(230),e(231),e(232),e(233),e(234),e(235),e(236),e(237),e(238),e(196)),h=e(197),v=e(202),y=function(){function t(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Float32Array;if(Object(d.a)(this,t),this.T=r,this.rows=n,this.cols=e,"number"==typeof o)this.data=new r(n*e),0!==o&&this.data.fill(o);else if("function"==typeof o){this.data=new r(n*e);for(var i=0;i<this.data.length;i++)this.data[i]=o(i)}else{if(!(o instanceof Array||o instanceof Float32Array||o instanceof Float64Array))throw"Invalid constructor";if(o.length!==n*e)throw"val.length !== rows * cols";this.data=new r(o)}}return Object(h.a)(t,[{key:"get",value:function(t,col){return this.data[t*this.cols+col]}},{key:"set",value:function(t,col,n){this.data[t*this.cols+col]=n}},{key:"slice",value:function(n,e){n=null===n?[0,this.rows]:n,e=null===e?[0,this.cols]:e;for(var o=new t(n[1]-n[0],e[1]-e[0],0,this.T),r=0,i=n[0];i<n[1];i++)for(var c=e[0];c<e[1];c++,r++)o.data[r]=this.get(i,c);return o}},{key:"t",value:function(){for(var n=new t(this.cols,this.rows,0,this.T),i=0;i<n.rows;i++)for(var e=0;e<n.cols;e++)n.set(i,e,this.get(e,i));return n}},{key:"dot",value:function(n){if(this.cols!==n.rows)throw"Dimension mismatch";for(var e=new t(this.rows,n.cols,0,this.T),i=0;i<e.rows;i++)for(var o=0;o<e.cols;o++){for(var r=0,c=0;c<this.cols;c++)r+=this.get(i,c)*n.get(c,o);e.set(i,o,r)}return e}},{key:"unary",value:function(n){for(var e=new t(this.rows,this.cols,0,this.T),i=0;i<e.data.length;i++)e.data[i]=n(this.data[i]);return e}},{key:"abs",value:function(){return this.unary(Math.abs)}},{key:"binary",value:function(n,e){var o=new t(this.rows,this.cols,0,this.T);if(n instanceof t){if(this.rows===n.rows&&this.cols===n.cols){for(var i=0;i<o.data.length;i++)o.data[i]=e(this.data[i],n.data[i]);return o}if(this.rows===n.rows&&1===n.cols){for(var r=0;r<o.data.length;r++)o.data[r]=e(this.data[r],n.data[~~(r/this.cols)]);return o}if(this.cols===n.cols&&1===n.rows){for(var c=0;c<o.data.length;c++)o.data[c]=e(this.data[c],n.data[c%this.cols]);return o}throw"Dimension mismatch"}if("number"==typeof n){for(var l=0;l<o.data.length;l++)o.data[l]=e(this.data[l],n);return o}throw"Type mismatch"}},{key:"add",value:function(t){return this.binary(t,(function(a,b){return a+b}))}},{key:"sub",value:function(t){return this.binary(t,(function(a,b){return a-b}))}},{key:"mul",value:function(t){return this.binary(t,(function(a,b){return a*b}))}},{key:"div",value:function(t){return this.binary(t,(function(a,b){return a/b}))}},{key:"pow",value:function(t){return this.binary(t,(function(a,b){return Math.pow(a,b)}))}},{key:"sum",value:function(t){for(var n=0,i=0;i<this.data.length;i++)n+=this.data[i];return n}},{key:"mean",value:function(t){return this.sum(t)/this.data.length}},{key:"std",value:function(t){return Math.pow(this.sub(this.mean(t)).pow(2).mean(),.5)}},{key:"norm",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,n=0,i=0;i<this.data.length;i++)n+=Math.pow(Math.abs(this.data[i]),t);return Math.pow(n,1/t)}},{key:"repr",value:function(){for(var t=[],i=0;i<this.rows;i++)t.push(this.data.slice(i*this.cols,(i+1)*this.cols).join(" "));return"".concat(t.join("\n"),"\nshape: ").concat(this.rows," x ").concat(this.cols)}},{key:"print",value:function(){console.log(this.repr())}},{key:"x",get:function(){return this.data[0]},set:function(t){this.data[0]=t}},{key:"y",get:function(){return this.data[1]},set:function(t){this.data[1]=t}},{key:"z",get:function(){return this.data[2]},set:function(t){this.data[2]=t}}],[{key:"rand",value:function(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Float32Array;return new t(n,e,(function(){return Object(v.a)()}),o)}},{key:"randn",value:function(n,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Float32Array;return new t(n,e,(function(){return Object(v.b)()}),o)}},{key:"id2d",value:function(){return new t(2,2,[1,0,0,1])}},{key:"rot2d",value:function(n){var e=Math.cos(n),s=Math.sin(n);return new t(2,2,[e,-s,s,e])}},{key:"scale2d",value:function(n,e){return new t(2,2,[n,0,0,e])}},{key:"vec",value:function(data){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new t(0===n?data.length:1,0===n?1:data.length,data)}}]),t}(),w=e(267),m=[.1716,3.8263,.8057,-.0373],k={data:function(){return{keys:{ArrowLeft:0,ArrowRight:0},toggleBtnText:"Training..."}},methods:{dirAction:function(t,n){this.keys[t]=n},toggleBtnClicked:function(){"Training..."!==this.toggleBtnText&&(this.toggleBtnText="Autopilot"===this.toggleBtnText?"Manual":"Autopilot")}},mounted:function(){var t=this;document.body.style.overflowY="hidden",document.querySelector(".buttons").addEventListener("contextmenu",(function(t){return t.preventDefault()})),window.addEventListener("keydown",(function(n){return t.dirAction(n.key,1)})),window.addEventListener("keyup",(function(n){return t.dirAction(n.key,0)}));var n=this.$refs,canvas=n.canvas,e=n.wrapper;canvas.width=canvas.height=750,e.style.width=e.style.height="".concat(Math.min(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),"px");var c=new f.default;c.postMessage({sz:750}),c.addEventListener("message",(function(n){console.log(n.data),r=new y(1,n.data.w.length,n.data.w),r=new y(1,m.length,m),t.toggleBtnText="Autopilot"}));var d=l.a.Engine.create(),h=l.a.Render.create({canvas:canvas,engine:d,options:{width:canvas.width,height:canvas.height,showAngleIndicator:!0}}),v=Object(w.default)(750,d);!function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=0;e*=1e3}((function(){var t;return(t=console).log.apply(t,arguments)}),.5);o=requestAnimationFrame((function n(e){o=requestAnimationFrame(n),l.a.Engine.update(d,1e3/60),l.a.Render.world(h);var c=.5*(t.keys.ArrowRight-t.keys.ArrowLeft);if("Autopilot"===t.toggleBtnText){var f=new y(4,1,[1,v.angle,v.position/750-.5,v.velocity]);c=function(t,n,e){return Math.max(n,Math.min(t,e))}(r.dot(f).data[0],-.5,.5)}v.accelerate(c),Math.abs(v.angle)>.9&&(v=Object(w.default)(750,d))}))},destroyed:function(){o&&cancelAnimationFrame(o),document.body.style.overflowY=""}},A=(e(287),e(26)),component=Object(A.a)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"wrapper"},[e("canvas",{ref:"canvas"}),t._v(" "),e("div",{staticClass:"buttons"},[e("button",{class:{disabled:"Autopilot"===t.toggleBtnText},on:{mousedown:function(n){return t.dirAction("ArrowLeft",1)},mouseup:function(n){return t.dirAction("ArrowLeft",0)},touchstart:function(n){return t.dirAction("ArrowLeft",1)},touchend:function(n){return t.dirAction("ArrowLeft",0)}}},[t._v("\n      ←\n    ")]),t._v(" "),e("button",{staticClass:"btn-toggle",class:{blink:"Training..."===t.toggleBtnText},on:{click:function(n){return t.toggleBtnClicked()}}},[t._v("\n      "+t._s(t.toggleBtnText)+"\n    ")]),t._v(" "),e("button",{class:{disabled:"Autopilot"===t.toggleBtnText},on:{mousedown:function(n){return t.dirAction("ArrowRight",1)},mouseup:function(n){return t.dirAction("ArrowRight",0)},touchstart:function(n){return t.dirAction("ArrowRight",1)},touchend:function(n){return t.dirAction("ArrowRight",0)}}},[t._v("\n      →\n    ")])])])}),[],!1,null,"7fc866a8",null);n.default=component.exports}}]);