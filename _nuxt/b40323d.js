(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{203:function(n,e,t){"use strict";var r=t(109),o=t(110),c=(t(11),t(29),t(46),function(){function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024;Object(r.a)(this,n);var canvas=document.createElement("canvas");canvas.width=t,canvas.height=1,this.ctx=canvas.getContext("2d");var o=this.ctx.createLinearGradient(0,0,t,0);e.forEach((function(n,i){o.addColorStop("string"==typeof n?i/(e.length-1):n.stop,"string"==typeof n?n:n.color)})),this.ctx.fillStyle=o,this.ctx.fillRect(0,0,t,1),this.data=this.ctx.getImageData(0,0,t,1).data}return Object(o.a)(n,[{key:"getColor",value:function(n){var e=4*Math.round(n*(this.ctx.canvas.width-1));return this.data.slice(e,e+4)}},{key:"getImage",value:function(){return this.ctx.canvas.toDataURL()}}]),n}());e.a=c},204:function(n,e,t){"use strict";t.d(e,"a",(function(){return v}));var r=t(82);var o=t(111),c=t(59);function v(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||Object(o.a)(n)||Object(c.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},205:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"d",(function(){return c})),t.d(e,"c",(function(){return v})),t.d(e,"g",(function(){return x})),t.d(e,"f",(function(){return f})),t.d(e,"b",(function(){return d})),t.d(e,"e",(function(){return l}));var r=t(204),o=(t(81),t(206),t(11),function(){return"\nprecision highp float;\n\nattribute vec3 position;\nattribute vec2 uv;\nuniform mat4 worldViewProjection;\nvarying vec2 vUV;\n\nvoid main(void) {\n  vUV = uv;\n  gl_Position = worldViewProjection * vec4(position, 1.0);\n}\n"}),c=function(){return"\n#define ss(a, b, v) smoothstep(a, b, v)\n#define sat(v) clamp(v, 0., 1.)\n#define imix(a, b, v) ((v - a) / (b - a))\n#define remap(iMin, iMax, oMin, oMax, v) mix(oMin, oMax, imix(iMin, iMax, v))\n\n#define psin(x) (sin(x)*0.5+0.5)\n#define pcos(x) (cos(x)*0.5+0.5)\n#define PI  3.1416\n#define PI2 6.2832\n\nfloat dot2(vec2 v) { return dot(v, v); }\nfloat dot2(vec3 v) { return dot(v, v); }\nfloat ndot(vec2 a, vec2 b) { return a.x * b.x - a.y * b.y; }\n\n// Polynomial smooth min (cubic)\nfloat smin( float a, float b, float k ) {\n  float h = max( k-abs(a-b), 0.0 )/k;\n  return min( a, b ) - h*h*h*k*(1.0/6.0);\n}\n"},v=function(){return"\nfloat r11(float p)\n{\n  p *= 997.;\n  p = fract(p * .1031);\n  p *= p + 33.33;\n  p *= p + p;\n  return fract(p);\n}\n\nfloat r12(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3  = fract(vec3(p.xyx) * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nfloat r13(vec3 p3)\n{\n  p3 *= 997.;\n\tp3  = fract(p3 * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nvec2 r21(float p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec2 r22(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n\n}\n\nvec2 r23(vec3 p3)\n{\n  p3 *= 997.;\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvec3 r31(float p)\n{\n  p *= 997.;\n  vec3 p3 = fract(vec3(p) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yzx+33.33);\n  return fract((p3.xxy+p3.yzz)*p3.zyx); \n}\n\nvec3 r32(vec2 p)\n{\n  p *= 997.;\n\tvec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yxz+33.33);\n  return fract((p3.xxy+p3.yzz)*p3.zyx);\n}\n\nvec3 r33(vec3 p3)\n{\n  p3 *= 997.;\n\tp3 = fract(p3 * vec3(.1031, .1030, .0973));\n  p3 += dot(p3, p3.yxz+33.33);\n  return fract((p3.xxy + p3.yxx)*p3.zyx);\n}\n\nvec4 r41(float p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p) * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r42(vec2 p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p.xyxy) * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r43(vec3 p)\n{\n  p *= 997.;\n\tvec4 p4 = fract(vec4(p.xyzx)  * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n\nvec4 r44(vec4 p4)\n{\n  p4 *= 997.;\n\tp4 = fract(p4  * vec4(.1031, .1030, .0973, .1099));\n  p4 += dot(p4, p4.wzxy+33.33);\n  return fract((p4.xxyz+p4.yzzw)*p4.zywx);\n}\n"},x=function(n){return"\nfloat voronoi3D(vec3 p) {\n  vec3 cellId = floor(p);\n  float minDist = 1e3;\n\n  for (float i = -1.; i <= 1.; i++) {\n    for (float j = -1.; j <= 1.; j++) {\n      for (float k = -1.; k <= 1.; k++) {\n        vec3 nbrCellId = vec3(cellId.x + i, cellId.y + j, cellId.z + k);\n        vec3 cellPoint = r33(nbrCellId);\n        float d = dot2(p - (nbrCellId + cellPoint));\n        minDist = min(minDist, d);\n      }\n    }\n  }\n\n  return ".concat(n?"minDist":"sqrt(minDist)",";\n}\n")},f=function(){return"\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\nfloat simplex3D(vec3 v){ \n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //  x0 = x0 - 0. + 0.0 * C \n  vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n  vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n  vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n// Permutations\n  i = mod(i, 289.0 ); \n  vec4 p = permute( permute( permute( \n    i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n    + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n    + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients\n// ( N*N points uniformly over a square, mapped onto an octahedron.)\n  float n_ = 1.0/7.0; // N=7\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                dot(p2,x2), dot(p3,x3) ) );\n}\n"},d=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"simplex3D";return"\nfloat fbm(vec3 p) {\n\tfloat v = 0.0;\n\tfloat a = ".concat(t.toFixed(4),";\n\tfor (int i = 0; i < ").concat(n,"; i++) {\n\t\tv += a * ").concat(o,"(p);\n\t\tp *= ").concat(e.toFixed(4),";\n\t\ta *= ").concat(t.toFixed(4),";\n\t}\n\treturn v / ").concat(Object(r.a)(Array(n)).reduce((function(n,e,i){return n+Math.pow(t,i+1)}),0).toFixed(4),";\n}\n")},l=function(){return"\nfloat sdCircle( vec2 p, float r ) {\n  return length(p) - r;\n}\n\nfloat sdBox( in vec2 p, in vec2 b ) {\n  vec2 d = abs(p)-b;\n  return length(max(d,0.0)) + min(max(d.x,d.y),0.0);\n}\n\nfloat sdSegment( in vec2 p, in vec2 a, in vec2 b ) {\n  vec2 pa = p-a, ba = b-a;\n  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n  return length( pa - ba*h );\n}\n\nfloat sdRhombus( in vec2 p, in vec2 b ) {\n  vec2 q = abs(p);\n  float h = clamp((-2.0*ndot(q,b)+ndot(b,b))/dot(b,b),-1.0,1.0);\n  float d = length( q - 0.5*b*vec2(1.0-h,1.0+h) );\n  return d * sign( q.x*b.y + q.y*b.x - b.x*b.y );\n}\n\nfloat sdTriangle( in vec2 p, in vec2 p0, in vec2 p1, in vec2 p2 ) {\n  vec2 e0 = p1-p0, e1 = p2-p1, e2 = p0-p2;\n  vec2 v0 = p -p0, v1 = p -p1, v2 = p -p2;\n  vec2 pq0 = v0 - e0*clamp( dot(v0,e0)/dot(e0,e0), 0.0, 1.0 );\n  vec2 pq1 = v1 - e1*clamp( dot(v1,e1)/dot(e1,e1), 0.0, 1.0 );\n  vec2 pq2 = v2 - e2*clamp( dot(v2,e2)/dot(e2,e2), 0.0, 1.0 );\n  float s = sign( e0.x*e2.y - e0.y*e2.x );\n  vec2 d = min(min(vec2(dot(pq0,pq0), s*(v0.x*e0.y-v0.y*e0.x)),\n                  vec2(dot(pq1,pq1), s*(v1.x*e1.y-v1.y*e1.x))),\n                  vec2(dot(pq2,pq2), s*(v2.x*e2.y-v2.y*e2.x)));\n  return -sqrt(d.x)*sign(d.y);\n}\n"}},206:function(n,e,t){"use strict";var r=t(2),o=t(36),c=t(207),v=t(156),x=t(4),f=1..toFixed,d=Math.floor,l=function(n,e,t){return 0===e?t:e%2==1?l(n,e-1,t*n):l(n*n,e/2,t)};r({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!x((function(){f.call({})}))},{toFixed:function(n){var e,t,r,x,f=c(this),y=o(n),data=[0,0,0,0,0,0],m="",h="0",z=function(n,e){for(var t=-1,r=e;++t<6;)r+=n*data[t],data[t]=r%1e7,r=d(r/1e7)},w=function(n){for(var e=6,t=0;--e>=0;)t+=data[e],data[e]=d(t/n),t=t%n*1e7},M=function(){for(var n=6,s="";--n>=0;)if(""!==s||0===n||0!==data[n]){var e=String(data[n]);s=""===s?e:s+v.call("0",7-e.length)+e}return s};if(y<0||y>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(m="-",f=-f),f>1e-21)if(t=(e=function(n){for(var e=0,t=n;t>=4096;)e+=12,t/=4096;for(;t>=2;)e+=1,t/=2;return e}(f*l(2,69,1))-69)<0?f*l(2,-e,1):f/l(2,e,1),t*=4503599627370496,(e=52-e)>0){for(z(0,t),r=y;r>=7;)z(1e7,0),r-=7;for(z(l(10,r,1),0),r=e-1;r>=23;)w(1<<23),r-=23;w(1<<r),z(1,1),w(2),h=M()}else z(0,t),z(1<<-e,0),h=M()+v.call("0",y);return h=y>0?m+((x=h.length)<=y?"0."+v.call("0",y-x)+h:h.slice(0,x-y)+"."+h.slice(x-y)):m+h}})},207:function(n,e,t){var r=t(23);n.exports=function(n){if("number"!=typeof n&&"Number"!=r(n))throw TypeError("Incorrect invocation");return+n}},279:function(n,e,t){var content=t(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(45).default)("779a0328",content,!0,{sourceMap:!1})},348:function(n,e,t){"use strict";t(279)},349:function(n,e,t){var r=t(44)(!1);r.push([n.i,"canvas[data-v-5a06de01]{outline:none}",""]),n.exports=r},378:function(n,e,t){"use strict";t.r(e);t(81);var r,o=t(210),c=t(203),v=t(205),x=Math.min,f=(Math.max,Math.abs,"\nprecision highp float;\n\nvarying vec2 vUV;\nuniform sampler2D palette;\nuniform float time;\n\n".concat(Object(v.d)(),"\n").concat(Object(v.c)(),"\n").concat(Object(v.f)(),"\n").concat(Object(v.b)(4),"\n\nvoid main(void) {\n  float v = fbm(vec3(vUV, time / 2.)) / 1.72 + 0.5;\n  v = ss(0.4, 0.6, v);\n  gl_FragColor = vec4(v, v, v, 1.);\n}\n")),d={data:function(){return{}},methods:{start:function(){}},mounted:function(){document.body.style.overflowY="hidden";var canvas=this.$refs.canvas;canvas.width=canvas.height=x(window.innerWidth,window.innerHeight-document.querySelector("nav").offsetHeight),r=new o.Engine(canvas,!0);var n=new o.Scene(r);n.clearColor=new o.Color3(0,0,0),window.addEventListener("resize",(function(){return r.resize()}));var e=new o.ArcRotateCamera("Camera",-Math.PI/2,Math.PI/2,8,new o.Vector3(0,0,0));e.mode=o.Camera.ORTHOGRAPHIC_CAMERA,e.orthoLeft=-1,e.orthoRight=1,e.orthoBottom=-1,e.orthoTop=1;var t=new c.a(["rgba(255, 0, 0, 0)","rgba(255, 0, 0, 1)"]),d=o.MeshBuilder.CreatePlane("",{size:2},n);o.Effect.ShadersStore.customVertexShader=Object(v.a)(),o.Effect.ShadersStore.customFragmentShader=f,d.material=new o.ShaderMaterial("shader",n,{vertex:"custom",fragment:"custom"},{attributes:["position","uv"],uniforms:["worldViewProjection"],needAlphaBlending:!0,needAlphaTesting:!0});var l=new o.Texture(t.getImage(),n);l.wrapU=o.Texture.CLAMP_ADDRESSMODE,l.wrapV=o.Texture.CLAMP_ADDRESSMODE,d.material.setTexture("palette",l);var y=0;r.runRenderLoop((function(){var dt=r.getDeltaTime();y+=dt,d.material.setFloat("time",y/1e3),n.render()}))},destroyed:function(){r&&r.dispose(),document.body.style.overflowY=""}},l=(t(348),t(35)),component=Object(l.a)(d,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("canvas",{ref:"canvas",on:{click:function(e){return n.start(e)}}})])}),[],!1,null,"5a06de01",null);e.default=component.exports}}]);