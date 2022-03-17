(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{269:function(t,n,e){var content=e(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("84e7566c",content,!0,{sourceMap:!1})},322:function(t,n,e){"use strict";e(269)},323:function(t,n,e){var r=e(44)(!1);r.push([t.i,"canvas[data-v-e32f74a4]{background:#000;outline:none}.sliders[data-v-e32f74a4]{max-width:500px;padding:0 10px 10px}input[data-v-e32f74a4]{width:90%}button[data-v-e32f74a4]{font-size:20px;padding:10px}",""]),t.exports=r},367:function(t,n,e){"use strict";e.r(n);e(217),e(39),e(46),e(11),e(38),e(47),e(30),e(25),e(32),e(48),e(49),e(31);var r=e(359),o=e(318),c=e.n(o);function d(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw o}}}}function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}var v,f,m=Math.PI,h=Math.min,x=(Math.exp,Math.sin),y=Math.random,w=Math.round,_=(new r.c).addAttribute("aVert",[-.5,-.5,.5,-.5,.5,.5,-.5,.5],2).addAttribute("aUv",[0,0,1,0,1,1,0,1],2).addIndex([0,1,2,0,2,3]),M={data:function(){return{maxDist:0,K:20,txtStart:"Start"}},methods:{start:function(){var t=this;this.txtStart="Reset",f&&f.destroy(),f=new r.a({view:this.$refs.canvas,width:v,height:v,antialias:!0,backgroundColor:0});var n=new c.a({shape:[v,v],minDistance:v/20,maxDistance:v/20*2,tries:10}).fill();n=n.map((function(p){var t=new r.d(_,r.e.from("\nprecision mediump float;\n\nattribute vec2 aVert;\nattribute vec2 aUv;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nvarying vec2 uv;\n\nvoid main() {\n  uv = aUv;\n  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVert, 1.0)).xy, 0.0, 1.0);\n}","\nvarying vec2 uv;\nuniform float time;\n\nvoid main() {\n  float v = exp(2. * (sin(time) - 1.));\n  float circle = 0.05 / length(uv - vec2(.5));\n  circle = smoothstep(0.01, 1., circle);\n  gl_FragColor = vec4(0.4, 1., 0.2, circle * v);\n}"));return t.position.set(p[0],p[1]),t.width=40,t.height=40,t.blendMode=r.b.ADD_NPM,f.stage.addChild(t),{sprite:t,p:p,t:2*y()*m}})),this.maxDist=0===this.maxDist?w(v/5):this.maxDist,f.ticker.add((function(dt){var e,r=d(n);try{for(r.s();!(e=r.n()).done;){var o,c=e.value,l=0,v=0,f=d(n);try{for(f.s();!(o=f.n()).done;){var m=o.value;Math.pow(c.p[0]-m.p[0],2)+Math.pow(c.p[1]-m.p[1],2)>Math.pow(t.maxDist,2)||(l+=x(m.t-c.t),v++)}}catch(t){f.e(t)}finally{f.f()}c.t+=dt*(.1+t.K/2e3*l/v),c.sprite.shader.uniforms.time=c.t}}catch(t){r.e(t)}finally{r.f()}}))}},mounted:function(){v=h(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight,500),this.$refs.canvas.width=this.$refs.canvas.height=v},destroyed:function(){f&&f.destroy(!0)}},D=(e(322),e(35)),component=Object(D.a)(M,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("canvas",{ref:"canvas"}),t._v(" "),e("div",{staticClass:"sliders"},[e("div",[t._v("Max distance of synchronization:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxDist,expression:"maxDist"}],attrs:{type:"range",min:"1",max:"500",step:"1"},domProps:{value:t.maxDist},on:{__r:function(n){t.maxDist=n.target.value}}}),e("span",[t._v(t._s(t.maxDist))]),t._v(" "),e("div",[t._v("Strength of synchronization:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.K,expression:"K"}],attrs:{type:"range",min:"1",max:"100",step:"1"},domProps:{value:t.K},on:{__r:function(n){t.K=n.target.value}}}),e("span",[t._v(t._s(t.K))]),t._v(" "),e("button",{on:{click:function(n){return t.start(n)}}},[t._v(t._s(t.txtStart))])])])}),[],!1,null,"e32f74a4",null);n.default=component.exports}}]);