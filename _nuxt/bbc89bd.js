(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(e,t,r){"use strict";var o=r(8),n=r(4),c=r(79),l=r(14),B=r(10),A=r(21),h=r(150),N=r(53),w=r(5),d=r(76),f=r(51).f,L=r(22).f,m=r(12).f,V=r(208).trim,M=n.Number,O=M.prototype,Y="Number"==A(d(O)),x=function(e){var t,r,o,n,c,l,B,code,A=N(e,!1);if("string"==typeof A&&A.length>2)if(43===(t=(A=V(A)).charCodeAt(0))||45===t){if(88===(r=A.charCodeAt(2))||120===r)return NaN}else if(48===t){switch(A.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+A}for(l=(c=A.slice(2)).length,B=0;B<l;B++)if((code=c.charCodeAt(B))<48||code>n)return NaN;return parseInt(c,o)}return+A};if(c("Number",!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var v,E=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof E&&(Y?w((function(){O.valueOf.call(r)})):"Number"!=A(r))?h(new M(x(t)),r,E):x(t)},y=o?f(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;y.length>I;I++)B(M,v=y[I])&&!B(E,v)&&m(E,v,L(M,v));E.prototype=O,O.constructor=E,l(n,"Number",E)}},208:function(e,t,r){var o=r(13),n="["+r(209)+"]",c=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),B=function(e){return function(t){var r=String(o(t));return 1&e&&(r=r.replace(c,"")),2&e&&(r=r.replace(l,"")),r}};e.exports={start:B(1),end:B(2),trim:B(3)}},209:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},212:function(e,t,r){e.exports=r.p+"img/woodtex.ee11f4a.jpg"},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));r(206);function o(e,t,r){var o,n=[],c=[],l=t.width/2||.5,path=t.path,B=t.closed||!1,A=~~t.standardUV,h=[],N=[],w=0,d=path.length,line=BABYLON.Vector3.Zero(),f=BABYLON.Vector3.Zero();if(path[1].subtractToRef(path[0],line),d>2&&B){path[2].subtractToRef(path[1],f);for(var p=0;p<d;p++)w=Math.PI-Math.acos(BABYLON.Vector3.Dot(line,f)/(line.length()*f.length())),direction=BABYLON.Vector3.Cross(line,f).normalize().z,o=new BABYLON.Vector3(line.y,-1*line.x,0).normalize(),line.normalize(),N[(p+1)%d]=path[(p+1)%d].subtract(o.scale(l)).subtract(line.scale(direction*l/Math.tan(w/2))),h[(p+1)%d]=path[(p+1)%d].add(o.scale(l)).add(line.scale(direction*l/Math.tan(w/2))),line=f.clone(),path[(p+3)%d].subtractToRef(path[(p+2)%d],f)}else{o=new BABYLON.Vector3(line.y,-1*line.x,0).normalize(),line.normalize(),N[0]=path[0].subtract(o.scale(l)),h[0]=path[0].add(o.scale(l));for(p=0;p<d-2;p++)path[p+2].subtractToRef(path[p+1],f),w=Math.PI-Math.acos(BABYLON.Vector3.Dot(line,f)/(line.length()*f.length())),direction=BABYLON.Vector3.Cross(line,f).normalize().z,o=new BABYLON.Vector3(line.y,-1*line.x,0).normalize(),line.normalize(),N[p+1]=path[p+1].subtract(o.scale(l)).subtract(line.scale(direction*l/Math.tan(w/2))),h[p+1]=path[p+1].add(o.scale(l)).add(line.scale(direction*l/Math.tan(w/2))),line=f.clone();d>2?(path[d-1].subtractToRef(path[d-2],line),o=new BABYLON.Vector3(line.y,-1*line.x,0).normalize(),line.normalize(),N[d-1]=path[d-1].subtract(o.scale(l)),h[d-1]=path[d-1].add(o.scale(l))):(N[1]=path[1].subtract(o.scale(l)),h[1]=path[1].add(o.scale(l)))}var L=Number.MIN_VALUE,m=Number.MAX_VALUE,V=Number.MIN_VALUE,M=Number.MAX_VALUE;for(p=0;p<d;p++)n.push(N[p].x,N[p].y,N[p].z),L=Math.max(N[p].x,L),m=Math.min(N[p].x,m),V=Math.max(N[p].y,V),M=Math.min(N[p].y,M);for(p=0;p<d;p++)n.push(h[p].x,h[p].y,h[p].z),L=Math.max(N[p].x,L),m=Math.min(N[p].x,m),V=Math.max(N[p].y,V),M=Math.min(N[p].y,M);for(var i=0;i<d-1;i++)c.push(i,i+1,d+i+1),c.push(i,d+i+1,d+i);d>2&&B&&(c.push(d-1,0,d),c.push(d-1,d,2*d-1));var O=[],Y=[];if(A)for(p=0;p<n.length;p+=3)Y.push((n[p]-m)/(L-m),(n[p+1]-M)/(V-M));else{var x=0,v=0,E=0,y=0,I=N[0],T=N[1].subtract(I),C=h[0].subtract(I),R=h[1].subtract(I),z=T.clone();z.normalize(),v=BABYLON.Vector3.Dot(z,T),E=BABYLON.Vector3.Dot(z,C),y=BABYLON.Vector3.Dot(z,R);m=Math.min(0,v,E,y),L=Math.max(0,v,E,y);Y[2*c[0]]=-m/(L-m),Y[2*c[0]+1]=1,Y[2*c[5]]=(E-m)/(L-m),Y[2*c[5]+1]=0,Y[2*c[1]]=(v-m)/(L-m),Y[2*c[1]+1]=1,Y[2*c[4]]=(y-m)/(L-m),Y[2*c[4]+1]=0;for(i=6;i<c.length;i+=6){x=(x+1)%2,I=N[0],T=N[1].subtract(I),C=h[0].subtract(I),R=h[1].subtract(I),(z=T.clone()).normalize(),v=BABYLON.Vector3.Dot(z,T),E=BABYLON.Vector3.Dot(z,C),y=BABYLON.Vector3.Dot(z,R);m=Math.min(0,v,E,y),L=Math.max(0,v,E,y);Y[2*c[i+1]]=x+Math.cos(x*Math.PI)*(v-m)/(L-m),Y[2*c[i+1]+1]=1,Y[2*c[i+4]]=x+Math.cos(x*Math.PI)*(y-m)/(L-m),Y[2*c[i+4]+1]=0}}BABYLON.VertexData.ComputeNormals(n,c,O),BABYLON.VertexData._ComputeSides(BABYLON.Mesh.DOUBLESIDE,n,c,O,Y),console.log(Y);var S=new BABYLON.Mesh(e,r),D=new BABYLON.VertexData;return D.positions=n,D.indices=c,D.normals=O,D.uvs=Y,D.applyToMesh(S),S}function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=function(text,t,r){var o=new BABYLON.DynamicTexture("DynamicTexture",50,e,!0);o.hasAlpha=!0,o.drawText(text,5,40,"bold 36px Arial",t,"transparent",!0);var n=BABYLON.Mesh.CreatePlane("TextPlane",r,e,!0);return n.material=new BABYLON.StandardMaterial("TextPlaneMaterial",e),n.material.backFaceCulling=!1,n.material.specularColor=new BABYLON.Color3(0,0,0),n.material.diffuseTexture=o,n},o=BABYLON.Mesh.CreateLines("axisX",[BABYLON.Vector3.Zero(),new BABYLON.Vector3(t,0,0),new BABYLON.Vector3(.95*t,.05*t,0),new BABYLON.Vector3(t,0,0),new BABYLON.Vector3(.95*t,-.05*t,0)],e);o.color=new BABYLON.Color3(1,0,0);var n=r("X","red",t/10);n.position=new BABYLON.Vector3(.9*t,-.05*t,0);var c=BABYLON.Mesh.CreateLines("axisY",[BABYLON.Vector3.Zero(),new BABYLON.Vector3(0,t,0),new BABYLON.Vector3(-.05*t,.95*t,0),new BABYLON.Vector3(0,t,0),new BABYLON.Vector3(.05*t,.95*t,0)],e);c.color=new BABYLON.Color3(0,1,0);var l=r("Y","green",t/10);l.position=new BABYLON.Vector3(0,.9*t,-.05*t);var B=BABYLON.Mesh.CreateLines("axisZ",[BABYLON.Vector3.Zero(),new BABYLON.Vector3(0,0,t),new BABYLON.Vector3(0,-.05*t,.95*t),new BABYLON.Vector3(0,0,t),new BABYLON.Vector3(0,.05*t,.95*t)],e);B.color=new BABYLON.Color3(0,0,1);var A=r("Z","blue",t/10);A.position=new BABYLON.Vector3(0,.05*t,.9*t)}},216:function(e,t,r){var content=r(267);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(37).default)("6c7073c5",content,!0,{sourceMap:!1})},266:function(e,t,r){"use strict";var o=r(216);r.n(o).a},267:function(e,t,r){(t=r(36)(!1)).push([e.i,"#c1[data-v-471e14b5]{outline:none}",""]),e.exports=t},298:function(e,t,r){"use strict";r.r(t);r(226),r(15),r(230),r(232),r(233),r(234),r(235),r(236),r(237),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254);var o,n=r(202),c=r(215),l={data:function(){return{}},methods:{},mounted:function(){var canvas=document.querySelector("#c1");canvas.width=Math.min(640,window.innerWidth),canvas.height=canvas.width,o=new n.Engine(canvas,!0);var e=new n.Scene(o);e.clearColor=new n.Color3(0,0,0),window.addEventListener("resize",(function(){return o.resize()}));var t=new n.ArcRotateCamera("Camera",-Math.PI/2,Math.PI/2,8,new n.Vector3(0,0,0));t.mode=n.Camera.ORTHOGRAPHIC_CAMERA,t.orthoLeft=-4,t.orthoRight=4,t.orthoBottom=-4,t.orthoTop=4,t.attachControl(canvas,!0);new n.PointLight("Point",new n.Vector3(5,10,-5));console.log(r(212));var l=new n.SpriteManager("playerManager",r(212),16,128,e),B=new n.Sprite("player0",l);B.position.z=-.5,B.width=2.9,B.height=2.9,B.playAnimation(0,16,!0,40);var A=new n.Texture("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAACACAYAAADK+QP0AAABlklEQVQoU12SMUjzYBiETxERkUql/YsFF6FSskhBCnb5KXUoTpmy1MkOdamTXepSl7p1ypSlTpk6ZeqSKUuWLFkyZMkQyBAoBEIoIW0lJ6KY4SDky/u9d88Bv5+9/IWyn8tBLoe5HOVyjHK5fIJisXiKQqFwhkql8g+lUukc1Wr1ArVa7RL1ev0KgiAIaDQa12g2mzdotVq3aLfb/9HpdO7Q7XbvIYqiCEmSJPR6vQf0+/1HDAaDJwyHw2eMRqMXjMfjV0wmkzdMp9N3zGazGWRZlqEoioL5fP4BVVVVLBaLBTRN07BcLpfQdV2HYRgGTNM0YVmWBdu2bTiO48B1XRee53nwfd9HEAQBwjAMsVqtVoiiKEIcxzGSJEmwXq/XSNM0RZZlGTabzQbb7XaL3W63+yv8wCM8zN84gKM4lON5Ea/k5VyDC3E1Lsl1uTgt0Axt0SCt0jTtMwhGwnAYEwNjdAyRcTJYRsywGTsBEAWhEA9BERnhESOBEi0hEzfBswIsA2vBgrAq36VhfVgkVuqnYV+9+wRaofw5InP+nAAAAABJRU5ErkJggg==",e),h=n.RawTexture.CreateRGBTexture(new Uint8Array([255,0,0,255,255,0,255,255,0,255,0,0]),1,4,e),line=Object(c.a)("line",{path:[new n.Vector3(5,5,0),new n.Vector3(-5,-5,0)],width:1},e);line.material=new BABYLON.StandardMaterial("",e),line.material.diffuseTexture=h,line.material.specularColor=new n.Color3(0,0,0),line.material.opacityTexture=A,Object(c.b)(e,2);var N=new n.Sprite("sp",l);N.position.z=-1,N.width=Math.pow(Math.pow(3,2)+Math.pow(2,2),.5),N.angle=Math.atan2(2,3),N.position.x=.5,N.position.y=0,N.playAnimation(8,8,!0,40);var w=new n.Sprite("sp1",l);w.position.z=-1,w.position.x=-1,w.position.y=-1;var d=new n.Sprite("sp1",l);d.position.z=-1,d.position.x=2,d.position.y=1,o.runRenderLoop((function(){o.getDeltaTime();B.angle=Date.now()/100%(2*Math.PI),B.position.x=Math.sin(Date.now()/1e3),e.render()}))},destroyed:function(){o&&o.dispose()}},B=(r(266),r(26)),component=Object(B.a)(l,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{display:"inline-block",position:"relative"}},[t("canvas",{attrs:{id:"c1","touch-action":"none"}})])}],!1,null,"471e14b5",null);t.default=component.exports}}]);