(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}t.d(e,"a",(function(){return r}))},199:function(n,e,t){"use strict";function r(n,e){for(var i=0;i<e.length;i++){var t=e[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}t.d(e,"a",(function(){return o}))},201:function(n,e,t){"use strict";t(33),t(50),t(34);var r=t(198),o=t(199),c=function(){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;Object(r.a)(this,n);var canvas=document.createElement("canvas");canvas.width=t,canvas.height=1,this.ctx=canvas.getContext("2d");var o=this.ctx.createLinearGradient(0,0,t,0);e.forEach((function(n,i){o.addColorStop("string"==typeof n?i/(e.length-1):n.stop,"string"==typeof n?n:n.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,t,1),this.data=this.ctx.getImageData(0,0,t,1).data}return Object(o.a)(n,[{key:"getColor",value:function(n){var e=4*Math.round(n*(this.ctx.canvas.width-1));return this.data.slice(e,e+4)}},{key:"getImage",value:function(){return this.ctx.canvas.toDataURL()}}]),n}();e.a=c},209:function(n,e,t){"use strict";var r=t(2),o=t(35),c=t(210),v=t(152),f=t(5),x=1..toFixed,d=Math.floor,l=function(n,e,t){return 0===e?t:e%2==1?l(n,e-1,t*n):l(n*n,e/2,t)};r({target:"Number",proto:!0,forced:x&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!f((function(){x.call({})}))},{toFixed:function(n){var e,t,r,f,x=c(this),y=o(n),data=[0,0,0,0,0,0],m="",h="0",z=function(n,e){for(var t=-1,r=e;++t<6;)r+=n*data[t],data[t]=r%1e7,r=d(r/1e7)},w=function(n){for(var e=6,t=0;--e>=0;)t+=data[e],data[e]=d(t/n),t=t%n*1e7},j=function(){for(var n=6,s="";--n>=0;)if(""!==s||0===n||0!==data[n]){var e=String(data[n]);s=""===s?e:s+v.call("0",7-e.length)+e}return s};if(y<0||y>20)throw RangeError("Incorrect fraction digits");if(x!=x)return"NaN";if(x<=-1e21||x>=1e21)return String(x);if(x<0&&(m="-",x=-x),x>1e-21)if(t=(e=function(n){for(var e=0,t=n;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}(x*l(2,69,1))-69)<0?x*l(2,-e,1):x/l(2,e,1),t*=4503599627370496,(e=52-e)>0){for(z(0,t),r=y;r>=7;)z(1e7,0),r-=7;for(z(l(10,r,1),0),r=e-1;r>=23;)w(1<<23),r-=23;w(1<<r),z(1,1),w(2),h=j()}else z(0,t),z(1<<-e,0),h=j()+v.call("0",y);return h=y>0?m+((f=h.length)<=y?"0."+v.call("0",y-f)+h:h.slice(0,f-y)+"."+h.slice(f-y)):m+h}})},210:function(n,e,t){var r=t(21);n.exports=function(n){if("number"!=typeof n&&"Number"!=r(n))throw TypeError("Incorrect invocation");return+n}},211:function(n,e,t){"use strict";t.d(e,"a",(function(){return v})),t.d(e,"d",(function(){return f})),t.d(e,"c",(function(){return x})),t.d(e,"e",(function(){return d})),t.d(e,"b",(function(){return l}));t(104),t(151),t(209);var r=t(82);var o=t(111);function c(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(o.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(){return"\nprecision highp float;\n\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 worldViewProjection;\nvarying vec2 vUV;\n\nvoid main(void) {\n  vUV = uv;\n  gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n"},f=function(){return"\n#define ss(a, b, v) smoothstep(a, b, v)\n#define dist(a, b) distance(a, b)\n#define len(a) length(a)\n#define PI  3.1415\n#define PI2 6.2830\n"},x=function(){return"\nfloat r11(float p)\n{\n    p = fract(p * .1031);\n    p *= p + 33.33;\n    p *= p + p;\n    return fract(p);\n}\n\nfloat r12(vec2 p)\n{\n\tvec3 p3  = fract(vec3(p.xyx) * .1031);\n    p3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.x + p3.y) * p3.z);\n}\n\nfloat r13(vec3 p3)\n{\n\tp3  = fract(p3 * .1031);\n    p3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.x + p3.y) * p3.z);\n}\n\nvec2 r21(float p)\n{\n\tvec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n\tp3 += dot(p3, p3.yzx + 33.33);\n    return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec2 r22(vec2 p)\n{\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yzx+33.33);\n    return fract((p3.xx+p3.yz)*p3.zy);\n\n}\n\nvec2 r23(vec3 p3)\n{\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yzx+33.33);\n    return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec3 r31(float p)\n{\n  vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xxy+p3.yzz)*p3.zyx); \n}\n\n\nvec3 r32(vec2 p)\n{\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yxz+33.33);\n    return fract((p3.xxy+p3.yzz)*p3.zyx);\n}\n\nvec3 r33(vec3 p3)\n{\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n    p3 += dot(p3, p3.yxz+33.33);\n    return fract((p3.xxy + p3.yxx)*p3.zyx);\n}\n\nvec4 r41(float p)\n{\n\tvec4 p4 = fract(vec4(p) * vec4(.1031, .1030, .0973, .1099));\n    p4 += dot(p4, p4.wzxy+33.33);\n    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r42(vec2 p)\n{\n\tvec4 p4 = fract(vec4(p.xyxy) * vec4(.1031, .1030, .0973, .1099));\n    p4 += dot(p4, p4.wzxy+33.33);\n    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r43(vec3 p)\n{\n\tvec4 p4 = fract(vec4(p.xyzx)  * vec4(.1031, .1030, .0973, .1099));\n    p4 += dot(p4, p4.wzxy+33.33);\n    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r44(vec4 p4)\n{\n\tp4 = fract(p4  * vec4(.1031, .1030, .0973, .1099));\n    p4 += dot(p4, p4.wzxy+33.33);\n    return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n"},d=function(){return"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat simplex3D(vec3 v){ \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //  x0 = x0 - 0. + 0.0 * C \n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n// Permutations\n  i = mod(i, 289.0 ); \n  vec4 p = permute( permute( permute( \n    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients\n// ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0/7.0; // N=7\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n"},l=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5;return"\nfloat fbm(vec3 p) {\n\tfloat v = 0.0;\n\tfloat a = ".concat(t.toFixed(4),";\n\tfor (int i = 0; i < ").concat(n,"; i++) {\n\t\tv += a * simplex3D(p);\n\t\tp *= ").concat(e.toFixed(4),";\n\t\ta *= ").concat(t.toFixed(4),";\n\t}\n\treturn v / ").concat(c(Array(n)).reduce((function(n,e,i){return n+Math.pow(t,i+1)}),0).toFixed(4),";\n}\n")}},218:function(n,e,t){var content=t(275);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(37).default)("6bfaa712",content,!0,{sourceMap:!1})},274:function(n,e,t){"use strict";var r=t(218);t.n(r).a},275:function(n,e,t){(e=t(36)(!1)).push([n.i,"canvas[data-v-3edf9e76]{outline:none}",""]),n.exports=e},294:function(n,e,t){"use strict";t.r(e);t(104);var r,o=t(204),c=t(201),v=t(211),f=Math.min,x=(Math.max,Math.abs,"\nprecision highp float;\n\nvarying vec2 vUV;\nuniform sampler2D palette;\nuniform float time;\n\n".concat(Object(v.d)(),"\n").concat(Object(v.c)(),"\n\nconst float nExplosions = 3.;\nconst float nSparks = 24.;\nconst float g = 1.5;\n\nvoid main(void) {\n    vec2 uv = vUV * 2. - 1.;\n    vec3 m = vec3(0.);\n    \n    for (float j = 0.; j < nExplosions; j++) {\n      float tOffsetted = 0.5 * time + j / nExplosions;\n      float sec = floor(tOffsetted);\n      float t = mod(tOffsetted, 1.);\n      vec2 pExp = r22(vec2(sec, j) * 1001.) - 0.5;\n      pExp.y += 0.3;\n      float expLum = 0.;\n\n      for (float i = 0.; i < nSparks; i++) {\n          vec2 v = r23(vec3(sec, j, i) * 1001.) * 2. - 1.;\n          v *= 0.8;\n          vec2 p = pExp + v * t;\n          p.y -= 0.5 * g * t * t;\n          expLum += ss((1. - t) * 0.08, 0.0, dist(uv, p));\n      }\n\n      vec3 exps = ss(0.3, 0.7, r32(vec2(sec, j) * 3001.));\n      vec3 col = pow(vec3(expLum), 1. + 7. * exps);\n      m += col;\n      m += 0.08 * (1. - t) * (1. - exps); // background\n\n      vec2 pRocketStart = r22(vec2(sec + 100., j + 100.) * 1001.) * 4. - 2.;\n      pRocketStart.y = -8.;\n      vec2 pRocketEnd = r22(vec2(sec + 1., j) * 1001.) - 0.5;\n      pRocketEnd.y += 0.3;\n      m += ss(0.02, 0.001, dist(uv, mix(pRocketStart, pRocketEnd, 1.002 * sin(1.5 * t)))) * vec3(1., 0.9, 0.7);\n    }\n    \n    gl_FragColor = vec4(m, 1.);\n}\n")),d={data:function(){return{}},methods:{draw:function(){}},mounted:function(){document.body.style.overflowY="hidden";var canvas=this.$refs.canvas;canvas.width=canvas.height=f(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),r=new o.Engine(canvas,!0);var n=new o.Scene(r);n.clearColor=new o.Color3(0,0,0),window.addEventListener("resize",(function(){return r.resize()}));var e=new o.ArcRotateCamera("Camera",-Math.PI/2,Math.PI/2,8,new o.Vector3(0,0,0));e.mode=o.Camera.ORTHOGRAPHIC_CAMERA,e.orthoLeft=-1,e.orthoRight=1,e.orthoBottom=-1,e.orthoTop=1;var t=new c.a(["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 1)"]),d=o.MeshBuilder.CreatePlane("",{size:2},n);o.Effect.ShadersStore.customVertexShader=Object(v.a)(),o.Effect.ShadersStore.customFragmentShader=x,d.material=new o.ShaderMaterial("shader",n,{vertex:"custom",fragment:"custom"},{attributes:["position","uv"],uniforms:["worldViewProjection"],needAlphaBlending:!0,needAlphaTesting:!0});var l=new o.Texture(t.getImage(),n);l.wrapU=o.Texture.CLAMP_ADDRESSMODE,l.wrapV=o.Texture.CLAMP_ADDRESSMODE,d.material.setTexture("palette",l);var y=0;r.runRenderLoop((function(){var dt=r.getDeltaTime();y+=dt,d.material.setFloat("time",y/1e3),n.render()}))},destroyed:function(){document.body.style.overflowY=""}},l=(t(274),t(27)),component=Object(l.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("canvas",{ref:"canvas",on:{click:function(e){return n.draw(e)}}})])}),[],!1,null,"3edf9e76",null);e.default=component.exports}}]);
