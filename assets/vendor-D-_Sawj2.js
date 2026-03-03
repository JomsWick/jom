function w2(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}function D2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cm={exports:{}},uu={};var VS;function L2(){if(VS)return uu;VS=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:c,ref:s!==void 0?s:null,props:l}}return uu.Fragment=t,uu.jsx=n,uu.jsxs=n,uu}var HS;function U2(){return HS||(HS=1,cm.exports=L2()),cm.exports}var Qo=U2(),fm={exports:{}},de={};var GS;function P2(){if(GS)return de;GS=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function S(B,X,_t){this.props=B,this.context=X,this.refs=y,this.updater=_t||b}S.prototype.isReactComponent={},S.prototype.setState=function(B,X){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,X,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function T(){}T.prototype=S.prototype;function C(B,X,_t){this.props=B,this.context=X,this.refs=y,this.updater=_t||b}var L=C.prototype=new T;L.constructor=C,M(L,S.prototype),L.isPureReactComponent=!0;var w=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function P(B,X,_t){var Rt=_t.ref;return{$$typeof:e,type:B,key:X,ref:Rt!==void 0?Rt:null,props:_t}}function tt(B,X){return P(B.type,X,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function Z(B){var X={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(_t){return X[_t]})}var Q=/\/+/g;function J(B,X){return typeof B=="object"&&B!==null&&B.key!=null?Z(""+B.key):X.toString(36)}function K(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(X){B.status==="pending"&&(B.status="fulfilled",B.value=X)},function(X){B.status==="pending"&&(B.status="rejected",B.reason=X)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function I(B,X,_t,Rt,Ft){var nt=typeof B;(nt==="undefined"||nt==="boolean")&&(B=null);var yt=!1;if(B===null)yt=!0;else switch(nt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(B.$$typeof){case e:case t:yt=!0;break;case m:return yt=B._init,I(yt(B._payload),X,_t,Rt,Ft)}}if(yt)return Ft=Ft(B),yt=Rt===""?"."+J(B,0):Rt,w(Ft)?(_t="",yt!=null&&(_t=yt.replace(Q,"$&/")+"/"),I(Ft,X,_t,"",function(Dt){return Dt})):Ft!=null&&(H(Ft)&&(Ft=tt(Ft,_t+(Ft.key==null||B&&B.key===Ft.key?"":(""+Ft.key).replace(Q,"$&/")+"/")+yt)),X.push(Ft)),1;yt=0;var pt=Rt===""?".":Rt+":";if(w(B))for(var Ct=0;Ct<B.length;Ct++)Rt=B[Ct],nt=pt+J(Rt,Ct),yt+=I(Rt,X,_t,nt,Ft);else if(Ct=x(B),typeof Ct=="function")for(B=Ct.call(B),Ct=0;!(Rt=B.next()).done;)Rt=Rt.value,nt=pt+J(Rt,Ct++),yt+=I(Rt,X,_t,nt,Ft);else if(nt==="object"){if(typeof B.then=="function")return I(K(B),X,_t,Rt,Ft);throw X=String(B),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return yt}function z(B,X,_t){if(B==null)return B;var Rt=[],Ft=0;return I(B,Rt,"","",function(nt){return X.call(_t,nt,Ft++)}),Rt}function it(B){if(B._status===-1){var X=B._result;X=X(),X.then(function(_t){(B._status===0||B._status===-1)&&(B._status=1,B._result=_t)},function(_t){(B._status===0||B._status===-1)&&(B._status=2,B._result=_t)}),B._status===-1&&(B._status=0,B._result=X)}if(B._status===1)return B._result.default;throw B._result}var ct=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},ht={map:z,forEach:function(B,X,_t){z(B,function(){X.apply(this,arguments)},_t)},count:function(B){var X=0;return z(B,function(){X++}),X},toArray:function(B){return z(B,function(X){return X})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return de.Activity=v,de.Children=ht,de.Component=S,de.Fragment=n,de.Profiler=s,de.PureComponent=C,de.StrictMode=a,de.Suspense=d,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,de.__COMPILER_RUNTIME={__proto__:null,c:function(B){return F.H.useMemoCache(B)}},de.cache=function(B){return function(){return B.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(B,X,_t){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Rt=M({},B.props),Ft=B.key;if(X!=null)for(nt in X.key!==void 0&&(Ft=""+X.key),X)!R.call(X,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&X.ref===void 0||(Rt[nt]=X[nt]);var nt=arguments.length-2;if(nt===1)Rt.children=_t;else if(1<nt){for(var yt=Array(nt),pt=0;pt<nt;pt++)yt[pt]=arguments[pt+2];Rt.children=yt}return P(B.type,Ft,Rt)},de.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},de.createElement=function(B,X,_t){var Rt,Ft={},nt=null;if(X!=null)for(Rt in X.key!==void 0&&(nt=""+X.key),X)R.call(X,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(Ft[Rt]=X[Rt]);var yt=arguments.length-2;if(yt===1)Ft.children=_t;else if(1<yt){for(var pt=Array(yt),Ct=0;Ct<yt;Ct++)pt[Ct]=arguments[Ct+2];Ft.children=pt}if(B&&B.defaultProps)for(Rt in yt=B.defaultProps,yt)Ft[Rt]===void 0&&(Ft[Rt]=yt[Rt]);return P(B,nt,Ft)},de.createRef=function(){return{current:null}},de.forwardRef=function(B){return{$$typeof:f,render:B}},de.isValidElement=H,de.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:it}},de.memo=function(B,X){return{$$typeof:h,type:B,compare:X===void 0?null:X}},de.startTransition=function(B){var X=F.T,_t={};F.T=_t;try{var Rt=B(),Ft=F.S;Ft!==null&&Ft(_t,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(O,ct)}catch(nt){ct(nt)}finally{X!==null&&_t.types!==null&&(X.types=_t.types),F.T=X}},de.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},de.use=function(B){return F.H.use(B)},de.useActionState=function(B,X,_t){return F.H.useActionState(B,X,_t)},de.useCallback=function(B,X){return F.H.useCallback(B,X)},de.useContext=function(B){return F.H.useContext(B)},de.useDebugValue=function(){},de.useDeferredValue=function(B,X){return F.H.useDeferredValue(B,X)},de.useEffect=function(B,X){return F.H.useEffect(B,X)},de.useEffectEvent=function(B){return F.H.useEffectEvent(B)},de.useId=function(){return F.H.useId()},de.useImperativeHandle=function(B,X,_t){return F.H.useImperativeHandle(B,X,_t)},de.useInsertionEffect=function(B,X){return F.H.useInsertionEffect(B,X)},de.useLayoutEffect=function(B,X){return F.H.useLayoutEffect(B,X)},de.useMemo=function(B,X){return F.H.useMemo(B,X)},de.useOptimistic=function(B,X){return F.H.useOptimistic(B,X)},de.useReducer=function(B,X,_t){return F.H.useReducer(B,X,_t)},de.useRef=function(B){return F.H.useRef(B)},de.useState=function(B){return F.H.useState(B)},de.useSyncExternalStore=function(B,X,_t){return F.H.useSyncExternalStore(B,X,_t)},de.useTransition=function(){return F.H.useTransition()},de.version="19.2.4",de}var kS;function iv(){return kS||(kS=1,fm.exports=P2()),fm.exports}var V=iv();const zt=D2(V),XS=w2({__proto__:null,default:zt},[V]);var dm={exports:{}},cu={},hm={exports:{}},pm={};var WS;function N2(){return WS||(WS=1,(function(e){function t(I,z){var it=I.length;I.push(z);t:for(;0<it;){var ct=it-1>>>1,ht=I[ct];if(0<s(ht,z))I[ct]=z,I[it]=ht,it=ct;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var z=I[0],it=I.pop();if(it!==z){I[0]=it;t:for(var ct=0,ht=I.length,B=ht>>>1;ct<B;){var X=2*(ct+1)-1,_t=I[X],Rt=X+1,Ft=I[Rt];if(0>s(_t,it))Rt<ht&&0>s(Ft,_t)?(I[ct]=Ft,I[Rt]=it,ct=Rt):(I[ct]=_t,I[X]=it,ct=X);else if(Rt<ht&&0>s(Ft,it))I[ct]=Ft,I[Rt]=it,ct=Rt;else break t}}return z}function s(I,z){var it=I.sortIndex-z.sortIndex;return it!==0?it:I.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();e.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,v=null,_=3,x=!1,b=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(I){for(var z=n(h);z!==null;){if(z.callback===null)a(h);else if(z.startTime<=I)a(h),z.sortIndex=z.expirationTime,t(d,z);else break;z=n(h)}}function w(I){if(M=!1,L(I),!b)if(n(d)!==null)b=!0,O||(O=!0,Z());else{var z=n(h);z!==null&&K(w,z.startTime-I)}}var O=!1,F=-1,R=5,P=-1;function tt(){return y?!0:!(e.unstable_now()-P<R)}function H(){if(y=!1,O){var I=e.unstable_now();P=I;var z=!0;try{t:{b=!1,M&&(M=!1,T(F),F=-1),x=!0;var it=_;try{e:{for(L(I),v=n(d);v!==null&&!(v.expirationTime>I&&tt());){var ct=v.callback;if(typeof ct=="function"){v.callback=null,_=v.priorityLevel;var ht=ct(v.expirationTime<=I);if(I=e.unstable_now(),typeof ht=="function"){v.callback=ht,L(I),z=!0;break e}v===n(d)&&a(d),L(I)}else a(d);v=n(d)}if(v!==null)z=!0;else{var B=n(h);B!==null&&K(w,B.startTime-I),z=!1}}break t}finally{v=null,_=it,x=!1}z=void 0}}finally{z?Z():O=!1}}}var Z;if(typeof C=="function")Z=function(){C(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,J=Q.port2;Q.port1.onmessage=H,Z=function(){J.postMessage(null)}}else Z=function(){S(H,0)};function K(I,z){F=S(function(){I(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(I){switch(_){case 1:case 2:case 3:var z=3;break;default:z=_}var it=_;_=z;try{return I()}finally{_=it}},e.unstable_requestPaint=function(){y=!0},e.unstable_runWithPriority=function(I,z){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var it=_;_=I;try{return z()}finally{_=it}},e.unstable_scheduleCallback=function(I,z,it){var ct=e.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ct+it:ct):it=ct,I){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=it+ht,I={id:m++,callback:z,priorityLevel:I,startTime:it,expirationTime:ht,sortIndex:-1},it>ct?(I.sortIndex=it,t(h,I),n(d)===null&&I===n(h)&&(M?(T(F),F=-1):M=!0,K(w,it-ct))):(I.sortIndex=ht,t(d,I),b||x||(b=!0,O||(O=!0,Z()))),I},e.unstable_shouldYield=tt,e.unstable_wrapCallback=function(I){var z=_;return function(){var it=_;_=z;try{return I.apply(this,arguments)}finally{_=it}}}})(pm)),pm}var qS;function O2(){return qS||(qS=1,hm.exports=N2()),hm.exports}var mm={exports:{}},Hn={};var YS;function F2(){if(YS)return Hn;YS=1;var e=iv();function t(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:d,containerInfo:h,implementation:m}}var c=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Hn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(d,h,null,m)},Hn.flushSync=function(d){var h=c.T,m=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=h,a.p=m,a.d.f()}},Hn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},Hn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Hn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&a.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Hn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},Hn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Hn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},Hn.requestFormReset=function(d){a.d.r(d)},Hn.unstable_batchedUpdates=function(d,h){return d(h)},Hn.useFormState=function(d,h,m){return c.H.useFormState(d,h,m)},Hn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Hn.version="19.2.4",Hn}var jS;function I2(){if(jS)return mm.exports;jS=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),mm.exports=F2(),mm.exports}var $S;function B2(){if($S)return cu;$S=1;var e=O2(),t=iv(),n=I2();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(a(188))}function h(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var o=i,u=r;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return d(p),i;if(g===u)return d(p),r;g=g.sibling}throw Error(a(188))}if(o.return!==u.return)o=p,u=g;else{for(var E=!1,D=p.child;D;){if(D===o){E=!0,o=p,u=g;break}if(D===u){E=!0,u=p,o=g;break}D=D.sibling}if(!E){for(D=g.child;D;){if(D===o){E=!0,o=g,u=p;break}if(D===u){E=!0,u=g,o=p;break}D=D.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),tt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var Q=Symbol.for("react.client.reference");function J(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===Q?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case M:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case w:return"Suspense";case O:return"SuspenseList";case P:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case b:return"Portal";case C:return i.displayName||"Context";case T:return(i._context.displayName||"Context")+".Consumer";case L:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case F:return r=i.displayName||null,r!==null?r:J(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return J(i(r))}catch{}}return null}var K=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},ct=[],ht=-1;function B(i){return{current:i}}function X(i){0>ht||(i.current=ct[ht],ct[ht]=null,ht--)}function _t(i,r){ht++,ct[ht]=i.current,i.current=r}var Rt=B(null),Ft=B(null),nt=B(null),yt=B(null);function pt(i,r){switch(_t(nt,r),_t(Ft,i),_t(Rt,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?uS(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=uS(r),i=cS(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}X(Rt),_t(Rt,i)}function Ct(){X(Rt),X(Ft),X(nt)}function Dt(i){i.memoizedState!==null&&_t(yt,i);var r=Rt.current,o=cS(r,i.type);r!==o&&(_t(Ft,i),_t(Rt,o))}function kt(i){Ft.current===i&&(X(Rt),X(Ft)),yt.current===i&&(X(yt),ru._currentValue=it)}var he,te;function ie(i){if(he===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);he=r&&r[1]||"",te=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+he+i+te}var xe=!1;function se(i,r){if(!i||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ft){var ot=ft}Reflect.construct(i,[],bt)}else{try{bt.call()}catch(ft){ot=ft}i.call(bt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(bt=i())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],D=g[1];if(E&&D){var G=E.split(`
`),rt=D.split(`
`);for(p=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;p<rt.length&&!rt[p].includes("DetermineComponentFrameRoot");)p++;if(u===G.length||p===rt.length)for(u=G.length-1,p=rt.length-1;1<=u&&0<=p&&G[u]!==rt[p];)p--;for(;1<=u&&0<=p;u--,p--)if(G[u]!==rt[p]){if(u!==1||p!==1)do if(u--,p--,0>p||G[u]!==rt[p]){var vt=`
`+G[u].replace(" at new "," at ");return i.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",i.displayName)),vt}while(1<=u&&0<=p);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?ie(o):""}function Je(i,r){switch(i.tag){case 26:case 27:case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return i.child!==r&&r!==null?ie("Suspense Fallback"):ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return se(i.type,!1);case 11:return se(i.type.render,!1);case 1:return se(i.type,!0);case 31:return ie("Activity");default:return""}}function k(i){try{var r="",o=null;do r+=Je(i,o),o=i,i=i.return;while(i);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ze=Object.prototype.hasOwnProperty,Se=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,At=e.unstable_shouldYield,N=e.unstable_requestPaint,A=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,dt=e.unstable_ImmediatePriority,xt=e.unstable_UserBlockingPriority,gt=e.unstable_NormalPriority,Kt=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,ee=e.log,re=e.unstable_setDisableYieldValue,Tt=null,Mt=null;function Vt(i){if(typeof ee=="function"&&re(i),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Tt,i)}catch{}}var Bt=Math.clz32?Math.clz32:j,Ht=Math.log,me=Math.LN2;function j(i){return i>>>=0,i===0?32:31-(Ht(i)/me|0)|0}var Lt=256,wt=262144,Gt=4194304;function Et(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function mt(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var p=0,g=i.suspendedLanes,E=i.pingedLanes;i=i.warmLanes;var D=u&134217727;return D!==0?(u=D&~g,u!==0?p=Et(u):(E&=D,E!==0?p=Et(E):o||(o=D&~i,o!==0&&(p=Et(o))))):(D=u&~g,D!==0?p=Et(D):E!==0?p=Et(E):o||(o=u&~i,o!==0&&(p=Et(o)))),p===0?0:r!==0&&r!==p&&(r&g)===0&&(g=p&-p,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:p}function Wt(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function le(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var i=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),i}function we(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yn(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function zi(i,r,o,u,p,g){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var D=i.entanglements,G=i.expirationTimes,rt=i.hiddenUpdates;for(o=E&~o;0<o;){var vt=31-Bt(o),bt=1<<vt;D[vt]=0,G[vt]=-1;var ot=rt[vt];if(ot!==null)for(rt[vt]=null,vt=0;vt<ot.length;vt++){var ft=ot[vt];ft!==null&&(ft.lane&=-536870913)}o&=~bt}u!==0&&xl(i,u,0),g!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=g&~(E&~r))}function xl(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Bt(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&261930}function Hs(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Bt(o),p=1<<u;p&r|i[u]&r&&(i[u]|=r),o&=~p}}function oc(i,r){var o=r&-r;return o=(o&42)!==0?1:Gs(o),(o&(i.suspendedLanes|r))!==0?0:o}function Gs(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function ks(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function oa(){var i=z.p;return i!==0?i:(i=window.event,i===void 0?32:PS(i.type))}function Xs(i,r){var o=z.p;try{return z.p=i,r()}finally{z.p=o}}var Vi=Math.random().toString(36).slice(2),mn="__reactFiber$"+Vi,Tn="__reactProps$"+Vi,Pa="__reactContainer$"+Vi,pr="__reactEvents$"+Vi,lc="__reactListeners$"+Vi,uc="__reactHandles$"+Vi,cc="__reactResources$"+Vi,es="__reactMarker$"+Vi;function Sl(i){delete i[mn],delete i[Tn],delete i[pr],delete i[lc],delete i[uc]}function mr(i){var r=i[mn];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Pa]||o[mn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=vS(i);i!==null;){if(o=i[mn])return o;i=vS(i)}return r}i=o,o=i.parentNode}return null}function gr(i){if(i=i[mn]||i[Pa]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function ns(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function U(i){var r=i[cc];return r||(r=i[cc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function q(i){i[es]=!0}var ut=new Set,st={};function et(i,r){Nt(i,r),Nt(i+"Capture",r)}function Nt(i,r){for(st[i]=r,i=0;i<r.length;i++)ut.add(r[i])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ot={},Zt={};function Jt(i){return Ze.call(Zt,i)?!0:Ze.call(Ot,i)?!1:Xt.test(i)?Zt[i]=!0:(Ot[i]=!0,!1)}function oe(i,r,o){if(Jt(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function fe(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function qt(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function ge(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function nn(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function an(i,r,o){var u=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,g.call(this,E)}}),Object.defineProperty(i,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Le(i){if(!i._valueTracker){var r=nn(i)?"checked":"value";i._valueTracker=an(i,r,""+i[r])}}function An(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=nn(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function jt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var jn=/[\n"\\]/g;function ce(i){return i.replace(jn,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function $n(i,r,o,u,p,g,E,D){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+ge(r)):i.value!==""+ge(r)&&(i.value=""+ge(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Hi(i,E,ge(r)):o!=null?Hi(i,E,ge(o)):u!=null&&i.removeAttribute("value"),p==null&&g!=null&&(i.defaultChecked=!!g),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?i.name=""+ge(D):i.removeAttribute("name")}function di(i,r,o,u,p,g,E,D){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null)){Le(i);return}o=o!=null?""+ge(o):"",r=r!=null?""+ge(r):o,D||r===i.value||(i.value=r),i.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=D?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E),Le(i)}function Hi(i,r,o){r==="number"&&jt(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function hi(i,r,o,u){if(i=i.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<i.length;o++)p=r.hasOwnProperty("$"+i[o].value),i[o].selected!==p&&(i[o].selected=p),p&&u&&(i[o].defaultSelected=!0)}else{for(o=""+ge(o),r=null,p=0;p<i.length;p++){if(i[p].value===o){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function Be(i,r,o){if(r!=null&&(r=""+ge(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+ge(o):""}function gn(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(a(92));if(K(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=ge(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u),Le(i)}function Kn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gi(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||vn.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Na(i,r,o){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&Gi(i,p,u)}else for(var g in r)r.hasOwnProperty(g)&&Gi(i,g,r[g])}function Ws(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var T3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fc(i){return A3.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function Oa(){}var oh=null;function lh(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var qs=null,Ys=null;function l_(i){var r=gr(i);if(r&&(i=r.stateNode)){var o=i[Tn]||null;t:switch(i=r.stateNode,r.type){case"input":if($n(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ce(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var p=u[Tn]||null;if(!p)throw Error(a(90));$n(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&An(u)}break t;case"textarea":Be(i,o.value,o.defaultValue);break t;case"select":r=o.value,r!=null&&hi(i,!!o.multiple,r,!1)}}}var uh=!1;function u_(i,r,o){if(uh)return i(r,o);uh=!0;try{var u=i(r);return u}finally{if(uh=!1,(qs!==null||Ys!==null)&&(Qc(),qs&&(r=qs,i=Ys,Ys=qs=null,l_(r),i)))for(r=0;r<i.length;r++)l_(i[r])}}function bl(i,r){var o=i.stateNode;if(o===null)return null;var u=o[Tn]||null;if(u===null)return null;o=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break t;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(a(231,r,typeof o));return o}var Fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ch=!1;if(Fa)try{var Ml={};Object.defineProperty(Ml,"passive",{get:function(){ch=!0}}),window.addEventListener("test",Ml,Ml),window.removeEventListener("test",Ml,Ml)}catch{ch=!1}var vr=null,fh=null,dc=null;function c_(){if(dc)return dc;var i,r=fh,o=r.length,u,p="value"in vr?vr.value:vr.textContent,g=p.length;for(i=0;i<o&&r[i]===p[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===p[g-u];u++);return dc=p.slice(i,1<u?1-u:void 0)}function hc(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function pc(){return!0}function f_(){return!1}function ni(i){function r(o,u,p,g,E){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var D in i)i.hasOwnProperty(D)&&(o=i[D],this[D]=o?o(g):g[D]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?pc:f_,this.isPropagationStopped=f_,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=pc)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=pc)},persist:function(){},isPersistent:pc}),r}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mc=ni(is),El=v({},is,{view:0,detail:0}),R3=ni(El),dh,hh,Tl,gc=v({},El,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Tl&&(Tl&&i.type==="mousemove"?(dh=i.screenX-Tl.screenX,hh=i.screenY-Tl.screenY):hh=dh=0,Tl=i),dh)},movementY:function(i){return"movementY"in i?i.movementY:hh}}),d_=ni(gc),C3=v({},gc,{dataTransfer:0}),w3=ni(C3),D3=v({},El,{relatedTarget:0}),ph=ni(D3),L3=v({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),U3=ni(L3),P3=v({},is,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),N3=ni(P3),O3=v({},is,{data:0}),h_=ni(O3),F3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z3(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=B3[i])?!!r[i]:!1}function mh(){return z3}var V3=v({},El,{key:function(i){if(i.key){var r=F3[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=hc(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?I3[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(i){return i.type==="keypress"?hc(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?hc(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),H3=ni(V3),G3=v({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),p_=ni(G3),k3=v({},El,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),X3=ni(k3),W3=v({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),q3=ni(W3),Y3=v({},gc,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),j3=ni(Y3),$3=v({},is,{newState:0,oldState:0}),K3=ni($3),Z3=[9,13,27,32],gh=Fa&&"CompositionEvent"in window,Al=null;Fa&&"documentMode"in document&&(Al=document.documentMode);var Q3=Fa&&"TextEvent"in window&&!Al,m_=Fa&&(!gh||Al&&8<Al&&11>=Al),g_=" ",v_=!1;function __(i,r){switch(i){case"keyup":return Z3.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y_(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var js=!1;function J3(i,r){switch(i){case"compositionend":return y_(r);case"keypress":return r.which!==32?null:(v_=!0,g_);case"textInput":return i=r.data,i===g_&&v_?null:i;default:return null}}function tR(i,r){if(js)return i==="compositionend"||!gh&&__(i,r)?(i=c_(),dc=fh=vr=null,js=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return m_&&r.locale!=="ko"?null:r.data;default:return null}}var eR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function x_(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!eR[i.type]:r==="textarea"}function S_(i,r,o,u){qs?Ys?Ys.push(u):Ys=[u]:qs=u,r=sf(r,"onChange"),0<r.length&&(o=new mc("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Rl=null,Cl=null;function nR(i){iS(i,0)}function vc(i){var r=ns(i);if(An(r))return i}function b_(i,r){if(i==="change")return r}var M_=!1;if(Fa){var vh;if(Fa){var _h="oninput"in document;if(!_h){var E_=document.createElement("div");E_.setAttribute("oninput","return;"),_h=typeof E_.oninput=="function"}vh=_h}else vh=!1;M_=vh&&(!document.documentMode||9<document.documentMode)}function T_(){Rl&&(Rl.detachEvent("onpropertychange",A_),Cl=Rl=null)}function A_(i){if(i.propertyName==="value"&&vc(Cl)){var r=[];S_(r,Cl,i,lh(i)),u_(nR,r)}}function iR(i,r,o){i==="focusin"?(T_(),Rl=r,Cl=o,Rl.attachEvent("onpropertychange",A_)):i==="focusout"&&T_()}function aR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return vc(Cl)}function rR(i,r){if(i==="click")return vc(r)}function sR(i,r){if(i==="input"||i==="change")return vc(r)}function oR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var pi=typeof Object.is=="function"?Object.is:oR;function wl(i,r){if(pi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Ze.call(r,p)||!pi(i[p],r[p]))return!1}return!0}function R_(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function C_(i,r){var o=R_(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=R_(o)}}function w_(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?w_(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function D_(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=jt(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=jt(i.document)}return r}function yh(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var lR=Fa&&"documentMode"in document&&11>=document.documentMode,$s=null,xh=null,Dl=null,Sh=!1;function L_(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Sh||$s==null||$s!==jt(u)||(u=$s,"selectionStart"in u&&yh(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Dl&&wl(Dl,u)||(Dl=u,u=sf(xh,"onSelect"),0<u.length&&(r=new mc("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=$s)))}function as(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Ks={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},bh={},U_={};Fa&&(U_=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function rs(i){if(bh[i])return bh[i];if(!Ks[i])return i;var r=Ks[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in U_)return bh[i]=r[o];return i}var P_=rs("animationend"),N_=rs("animationiteration"),O_=rs("animationstart"),uR=rs("transitionrun"),cR=rs("transitionstart"),fR=rs("transitioncancel"),F_=rs("transitionend"),I_=new Map,Mh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mh.push("scrollEnd");function ki(i,r){I_.set(i,r),et(r,[i])}var _c=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},Ti=[],Zs=0,Eh=0;function yc(){for(var i=Zs,r=Eh=Zs=0;r<i;){var o=Ti[r];Ti[r++]=null;var u=Ti[r];Ti[r++]=null;var p=Ti[r];Ti[r++]=null;var g=Ti[r];if(Ti[r++]=null,u!==null&&p!==null){var E=u.pending;E===null?p.next=p:(p.next=E.next,E.next=p),u.pending=p}g!==0&&B_(o,p,g)}}function xc(i,r,o,u){Ti[Zs++]=i,Ti[Zs++]=r,Ti[Zs++]=o,Ti[Zs++]=u,Eh|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Th(i,r,o,u){return xc(i,r,o,u),Sc(i)}function ss(i,r){return xc(i,null,null,r),Sc(i)}function B_(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=i.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(p=!0)),i=g,g=g.return;return i.tag===3?(g=i.stateNode,p&&r!==null&&(p=31-Bt(o),i=g.hiddenUpdates,u=i[p],u===null?i[p]=[r]:u.push(r),r.lane=o|536870912),g):null}function Sc(i){if(50<Ql)throw Ql=0,Np=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Qs={};function dR(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(i,r,o,u){return new dR(i,r,o,u)}function Ah(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Ia(i,r){var o=i.alternate;return o===null?(o=mi(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function z_(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function bc(i,r,o,u,p,g){var E=0;if(u=i,typeof i=="function")Ah(i)&&(E=1);else if(typeof i=="string")E=v2(i,o,Rt.current)?26:i==="html"||i==="head"||i==="body"?27:5;else t:switch(i){case P:return i=mi(31,o,r,p),i.elementType=P,i.lanes=g,i;case M:return os(o.children,p,g,r);case y:E=8,p|=24;break;case S:return i=mi(12,o,r,p|2),i.elementType=S,i.lanes=g,i;case w:return i=mi(13,o,r,p),i.elementType=w,i.lanes=g,i;case O:return i=mi(19,o,r,p),i.elementType=O,i.lanes=g,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case C:E=10;break t;case T:E=9;break t;case L:E=11;break t;case F:E=14;break t;case R:E=16,u=null;break t}E=29,o=Error(a(130,i===null?"null":typeof i,"")),u=null}return r=mi(E,o,r,p),r.elementType=i,r.type=u,r.lanes=g,r}function os(i,r,o,u){return i=mi(7,i,u,r),i.lanes=o,i}function Rh(i,r,o){return i=mi(6,i,null,r),i.lanes=o,i}function V_(i){var r=mi(18,null,null,0);return r.stateNode=i,r}function Ch(i,r,o){return r=mi(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var H_=new WeakMap;function Ai(i,r){if(typeof i=="object"&&i!==null){var o=H_.get(i);return o!==void 0?o:(r={value:i,source:r,stack:k(r)},H_.set(i,r),r)}return{value:i,source:r,stack:k(r)}}var Js=[],to=0,Mc=null,Ll=0,Ri=[],Ci=0,_r=null,la=1,ua="";function Ba(i,r){Js[to++]=Ll,Js[to++]=Mc,Mc=i,Ll=r}function G_(i,r,o){Ri[Ci++]=la,Ri[Ci++]=ua,Ri[Ci++]=_r,_r=i;var u=la;i=ua;var p=32-Bt(u)-1;u&=~(1<<p),o+=1;var g=32-Bt(r)+p;if(30<g){var E=p-p%5;g=(u&(1<<E)-1).toString(32),u>>=E,p-=E,la=1<<32-Bt(r)+p|o<<p|u,ua=g+i}else la=1<<g|o<<p|u,ua=i}function wh(i){i.return!==null&&(Ba(i,1),G_(i,1,0))}function Dh(i){for(;i===Mc;)Mc=Js[--to],Js[to]=null,Ll=Js[--to],Js[to]=null;for(;i===_r;)_r=Ri[--Ci],Ri[Ci]=null,ua=Ri[--Ci],Ri[Ci]=null,la=Ri[--Ci],Ri[Ci]=null}function k_(i,r){Ri[Ci++]=la,Ri[Ci++]=ua,Ri[Ci++]=_r,la=r.id,ua=r.overflow,_r=i}var Nn=null,tn=null,Ae=!1,yr=null,wi=!1,Lh=Error(a(519));function xr(i){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ul(Ai(r,i)),Lh}function X_(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[mn]=i,r[Tn]=u,o){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<tu.length;o++)Me(tu[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),di(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),gn(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||oS(r.textContent,o)?(u.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),u.onScroll!=null&&Me("scroll",r),u.onScrollEnd!=null&&Me("scrollend",r),u.onClick!=null&&(r.onclick=Oa),r=!0):r=!1,r||xr(i,!0)}function W_(i){for(Nn=i.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Nn=Nn.return}}function eo(i){if(i!==Nn)return!1;if(!Ae)return W_(i),Ae=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||$p(i.type,i.memoizedProps)),o=!o),o&&tn&&xr(i),W_(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));tn=gS(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));tn=gS(i)}else r===27?(r=tn,Nr(i.type)?(i=tm,tm=null,tn=i):tn=r):tn=Nn?Li(i.stateNode.nextSibling):null;return!0}function ls(){tn=Nn=null,Ae=!1}function Uh(){var i=yr;return i!==null&&(si===null?si=i:si.push.apply(si,i),yr=null),i}function Ul(i){yr===null?yr=[i]:yr.push(i)}var Ph=B(null),us=null,za=null;function Sr(i,r,o){_t(Ph,r._currentValue),r._currentValue=o}function Va(i){i._currentValue=Ph.current,X(Ph)}function Nh(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Oh(i,r,o,u){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;t:for(;g!==null;){var D=g;g=p;for(var G=0;G<r.length;G++)if(D.context===r[G]){g.lanes|=o,D=g.alternate,D!==null&&(D.lanes|=o),Nh(g.return,o,i),u||(E=null);break t}g=D.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(a(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Nh(E,o,i),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function no(i,r,o,u){i=null;for(var p=r,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var D=p.type;pi(p.pendingProps.value,E.value)||(i!==null?i.push(D):i=[D])}}else if(p===yt.current){if(E=p.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(ru):i=[ru])}p=p.return}i!==null&&Oh(r,i,o,u),r.flags|=262144}function Ec(i){for(i=i.firstContext;i!==null;){if(!pi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function cs(i){us=i,za=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function On(i){return q_(us,i)}function Tc(i,r){return us===null&&cs(i),q_(i,r)}function q_(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},za===null){if(i===null)throw Error(a(308));za=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else za=za.next=r;return o}var hR=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},pR=e.unstable_scheduleCallback,mR=e.unstable_NormalPriority,_n={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fh(){return{controller:new hR,data:new Map,refCount:0}}function Pl(i){i.refCount--,i.refCount===0&&pR(mR,function(){i.controller.abort()})}var Nl=null,Ih=0,io=0,ao=null;function gR(i,r){if(Nl===null){var o=Nl=[];Ih=0,io=Vp(),ao={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Ih++,r.then(Y_,Y_),r}function Y_(){if(--Ih===0&&Nl!==null){ao!==null&&(ao.status="fulfilled");var i=Nl;Nl=null,io=0,ao=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function vR(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var j_=I.S;I.S=function(i,r){Lx=A(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&gR(i,r),j_!==null&&j_(i,r)};var fs=B(null);function Bh(){var i=fs.current;return i!==null?i:Qe.pooledCache}function Ac(i,r){r===null?_t(fs,fs.current):_t(fs,r.pool)}function $_(){var i=Bh();return i===null?null:{parent:_n._currentValue,pool:i}}var ro=Error(a(460)),zh=Error(a(474)),Rc=Error(a(542)),Cc={then:function(){}};function K_(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Z_(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Oa,Oa),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,J_(i),i;default:if(typeof r.status=="string")r.then(Oa,Oa);else{if(i=Qe,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,J_(i),i}throw hs=r,ro}}function ds(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(hs=o,ro):o}}var hs=null;function Q_(){if(hs===null)throw Error(a(459));var i=hs;return hs=null,i}function J_(i){if(i===ro||i===Rc)throw Error(a(483))}var so=null,Ol=0;function wc(i){var r=Ol;return Ol+=1,so===null&&(so=[]),Z_(so,i,r)}function Fl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Dc(i,r){throw r.$$typeof===_?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function ty(i){function r($,W){if(i){var at=$.deletions;at===null?($.deletions=[W],$.flags|=16):at.push(W)}}function o($,W){if(!i)return null;for(;W!==null;)r($,W),W=W.sibling;return null}function u($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function p($,W){return $=Ia($,W),$.index=0,$.sibling=null,$}function g($,W,at){return $.index=at,i?(at=$.alternate,at!==null?(at=at.index,at<W?($.flags|=67108866,W):at):($.flags|=67108866,W)):($.flags|=1048576,W)}function E($){return i&&$.alternate===null&&($.flags|=67108866),$}function D($,W,at,St){return W===null||W.tag!==6?(W=Rh(at,$.mode,St),W.return=$,W):(W=p(W,at),W.return=$,W)}function G($,W,at,St){var ne=at.type;return ne===M?vt($,W,at.props.children,St,at.key):W!==null&&(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===R&&ds(ne)===W.type)?(W=p(W,at.props),Fl(W,at),W.return=$,W):(W=bc(at.type,at.key,at.props,null,$.mode,St),Fl(W,at),W.return=$,W)}function rt($,W,at,St){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=Ch(at,$.mode,St),W.return=$,W):(W=p(W,at.children||[]),W.return=$,W)}function vt($,W,at,St,ne){return W===null||W.tag!==7?(W=os(at,$.mode,St,ne),W.return=$,W):(W=p(W,at),W.return=$,W)}function bt($,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Rh(""+W,$.mode,at),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return at=bc(W.type,W.key,W.props,null,$.mode,at),Fl(at,W),at.return=$,at;case b:return W=Ch(W,$.mode,at),W.return=$,W;case R:return W=ds(W),bt($,W,at)}if(K(W)||Z(W))return W=os(W,$.mode,at,null),W.return=$,W;if(typeof W.then=="function")return bt($,wc(W),at);if(W.$$typeof===C)return bt($,Tc($,W),at);Dc($,W)}return null}function ot($,W,at,St){var ne=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return ne!==null?null:D($,W,""+at,St);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case x:return at.key===ne?G($,W,at,St):null;case b:return at.key===ne?rt($,W,at,St):null;case R:return at=ds(at),ot($,W,at,St)}if(K(at)||Z(at))return ne!==null?null:vt($,W,at,St,null);if(typeof at.then=="function")return ot($,W,wc(at),St);if(at.$$typeof===C)return ot($,W,Tc($,at),St);Dc($,at)}return null}function ft($,W,at,St,ne){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(at)||null,D(W,$,""+St,ne);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return $=$.get(St.key===null?at:St.key)||null,G(W,$,St,ne);case b:return $=$.get(St.key===null?at:St.key)||null,rt(W,$,St,ne);case R:return St=ds(St),ft($,W,at,St,ne)}if(K(St)||Z(St))return $=$.get(at)||null,vt(W,$,St,ne,null);if(typeof St.then=="function")return ft($,W,at,wc(St),ne);if(St.$$typeof===C)return ft($,W,at,Tc(W,St),ne);Dc(W,St)}return null}function Yt($,W,at,St){for(var ne=null,Ue=null,Qt=W,ve=W=0,Te=null;Qt!==null&&ve<at.length;ve++){Qt.index>ve?(Te=Qt,Qt=null):Te=Qt.sibling;var Pe=ot($,Qt,at[ve],St);if(Pe===null){Qt===null&&(Qt=Te);break}i&&Qt&&Pe.alternate===null&&r($,Qt),W=g(Pe,W,ve),Ue===null?ne=Pe:Ue.sibling=Pe,Ue=Pe,Qt=Te}if(ve===at.length)return o($,Qt),Ae&&Ba($,ve),ne;if(Qt===null){for(;ve<at.length;ve++)Qt=bt($,at[ve],St),Qt!==null&&(W=g(Qt,W,ve),Ue===null?ne=Qt:Ue.sibling=Qt,Ue=Qt);return Ae&&Ba($,ve),ne}for(Qt=u(Qt);ve<at.length;ve++)Te=ft(Qt,$,ve,at[ve],St),Te!==null&&(i&&Te.alternate!==null&&Qt.delete(Te.key===null?ve:Te.key),W=g(Te,W,ve),Ue===null?ne=Te:Ue.sibling=Te,Ue=Te);return i&&Qt.forEach(function(zr){return r($,zr)}),Ae&&Ba($,ve),ne}function ae($,W,at,St){if(at==null)throw Error(a(151));for(var ne=null,Ue=null,Qt=W,ve=W=0,Te=null,Pe=at.next();Qt!==null&&!Pe.done;ve++,Pe=at.next()){Qt.index>ve?(Te=Qt,Qt=null):Te=Qt.sibling;var zr=ot($,Qt,Pe.value,St);if(zr===null){Qt===null&&(Qt=Te);break}i&&Qt&&zr.alternate===null&&r($,Qt),W=g(zr,W,ve),Ue===null?ne=zr:Ue.sibling=zr,Ue=zr,Qt=Te}if(Pe.done)return o($,Qt),Ae&&Ba($,ve),ne;if(Qt===null){for(;!Pe.done;ve++,Pe=at.next())Pe=bt($,Pe.value,St),Pe!==null&&(W=g(Pe,W,ve),Ue===null?ne=Pe:Ue.sibling=Pe,Ue=Pe);return Ae&&Ba($,ve),ne}for(Qt=u(Qt);!Pe.done;ve++,Pe=at.next())Pe=ft(Qt,$,ve,Pe.value,St),Pe!==null&&(i&&Pe.alternate!==null&&Qt.delete(Pe.key===null?ve:Pe.key),W=g(Pe,W,ve),Ue===null?ne=Pe:Ue.sibling=Pe,Ue=Pe);return i&&Qt.forEach(function(C2){return r($,C2)}),Ae&&Ba($,ve),ne}function je($,W,at,St){if(typeof at=="object"&&at!==null&&at.type===M&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case x:t:{for(var ne=at.key;W!==null;){if(W.key===ne){if(ne=at.type,ne===M){if(W.tag===7){o($,W.sibling),St=p(W,at.props.children),St.return=$,$=St;break t}}else if(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===R&&ds(ne)===W.type){o($,W.sibling),St=p(W,at.props),Fl(St,at),St.return=$,$=St;break t}o($,W);break}else r($,W);W=W.sibling}at.type===M?(St=os(at.props.children,$.mode,St,at.key),St.return=$,$=St):(St=bc(at.type,at.key,at.props,null,$.mode,St),Fl(St,at),St.return=$,$=St)}return E($);case b:t:{for(ne=at.key;W!==null;){if(W.key===ne)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){o($,W.sibling),St=p(W,at.children||[]),St.return=$,$=St;break t}else{o($,W);break}else r($,W);W=W.sibling}St=Ch(at,$.mode,St),St.return=$,$=St}return E($);case R:return at=ds(at),je($,W,at,St)}if(K(at))return Yt($,W,at,St);if(Z(at)){if(ne=Z(at),typeof ne!="function")throw Error(a(150));return at=ne.call(at),ae($,W,at,St)}if(typeof at.then=="function")return je($,W,wc(at),St);if(at.$$typeof===C)return je($,W,Tc($,at),St);Dc($,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(o($,W.sibling),St=p(W,at),St.return=$,$=St):(o($,W),St=Rh(at,$.mode,St),St.return=$,$=St),E($)):o($,W)}return function($,W,at,St){try{Ol=0;var ne=je($,W,at,St);return so=null,ne}catch(Qt){if(Qt===ro||Qt===Rc)throw Qt;var Ue=mi(29,Qt,null,$.mode);return Ue.lanes=St,Ue.return=$,Ue}}}var ps=ty(!0),ey=ty(!1),br=!1;function Vh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hh(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Mr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Er(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Oe&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=Sc(i),B_(i,null,o),r}return xc(i,u,r,o),Sc(i)}function Il(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Hs(i,o)}}function Gh(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=r:g=g.next=r}else p=g=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var kh=!1;function Bl(){if(kh){var i=ao;if(i!==null)throw i}}function zl(i,r,o,u){kh=!1;var p=i.updateQueue;br=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,D=p.shared.pending;if(D!==null){p.shared.pending=null;var G=D,rt=G.next;G.next=null,E===null?g=rt:E.next=rt,E=G;var vt=i.alternate;vt!==null&&(vt=vt.updateQueue,D=vt.lastBaseUpdate,D!==E&&(D===null?vt.firstBaseUpdate=rt:D.next=rt,vt.lastBaseUpdate=G))}if(g!==null){var bt=p.baseState;E=0,vt=rt=G=null,D=g;do{var ot=D.lane&-536870913,ft=ot!==D.lane;if(ft?(Ee&ot)===ot:(u&ot)===ot){ot!==0&&ot===io&&(kh=!0),vt!==null&&(vt=vt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Yt=i,ae=D;ot=r;var je=o;switch(ae.tag){case 1:if(Yt=ae.payload,typeof Yt=="function"){bt=Yt.call(je,bt,ot);break t}bt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ae.payload,ot=typeof Yt=="function"?Yt.call(je,bt,ot):Yt,ot==null)break t;bt=v({},bt,ot);break t;case 2:br=!0}}ot=D.callback,ot!==null&&(i.flags|=64,ft&&(i.flags|=8192),ft=p.callbacks,ft===null?p.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:D.tag,payload:D.payload,callback:D.callback,next:null},vt===null?(rt=vt=ft,G=bt):vt=vt.next=ft,E|=ot;if(D=D.next,D===null){if(D=p.shared.pending,D===null)break;ft=D,D=ft.next,ft.next=null,p.lastBaseUpdate=ft,p.shared.pending=null}}while(!0);vt===null&&(G=bt),p.baseState=G,p.firstBaseUpdate=rt,p.lastBaseUpdate=vt,g===null&&(p.shared.lanes=0),wr|=E,i.lanes=E,i.memoizedState=bt}}function ny(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function iy(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)ny(o[i],r)}var oo=B(null),Lc=B(0);function ay(i,r){i=$a,_t(Lc,i),_t(oo,r),$a=i|r.baseLanes}function Xh(){_t(Lc,$a),_t(oo,oo.current)}function Wh(){$a=Lc.current,X(oo),X(Lc)}var gi=B(null),Di=null;function Tr(i){var r=i.alternate;_t(fn,fn.current&1),_t(gi,i),Di===null&&(r===null||oo.current!==null||r.memoizedState!==null)&&(Di=i)}function qh(i){_t(fn,fn.current),_t(gi,i),Di===null&&(Di=i)}function ry(i){i.tag===22?(_t(fn,fn.current),_t(gi,i),Di===null&&(Di=i)):Ar()}function Ar(){_t(fn,fn.current),_t(gi,gi.current)}function vi(i){X(gi),Di===i&&(Di=null),X(fn)}var fn=B(0);function Uc(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Qp(o)||Jp(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ha=0,pe=null,qe=null,yn=null,Pc=!1,lo=!1,ms=!1,Nc=0,Vl=0,uo=null,_R=0;function ln(){throw Error(a(321))}function Yh(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!pi(i[o],r[o]))return!1;return!0}function jh(i,r,o,u,p,g){return Ha=g,pe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,I.H=i===null||i.memoizedState===null?Gy:up,ms=!1,g=o(u,p),ms=!1,lo&&(g=oy(r,o,u,p)),sy(i),g}function sy(i){I.H=kl;var r=qe!==null&&qe.next!==null;if(Ha=0,yn=qe=pe=null,Pc=!1,Vl=0,uo=null,r)throw Error(a(300));i===null||xn||(i=i.dependencies,i!==null&&Ec(i)&&(xn=!0))}function oy(i,r,o,u){pe=i;var p=0;do{if(lo&&(uo=null),Vl=0,lo=!1,25<=p)throw Error(a(301));if(p+=1,yn=qe=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}I.H=ky,g=r(o,u)}while(lo);return g}function yR(){var i=I.H,r=i.useState()[0];return r=typeof r.then=="function"?Hl(r):r,i=i.useState()[0],(qe!==null?qe.memoizedState:null)!==i&&(pe.flags|=1024),r}function $h(){var i=Nc!==0;return Nc=0,i}function Kh(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Zh(i){if(Pc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pc=!1}Ha=0,yn=qe=pe=null,lo=!1,Vl=Nc=0,uo=null}function Zn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?pe.memoizedState=yn=i:yn=yn.next=i,yn}function dn(){if(qe===null){var i=pe.alternate;i=i!==null?i.memoizedState:null}else i=qe.next;var r=yn===null?pe.memoizedState:yn.next;if(r!==null)yn=r,qe=i;else{if(i===null)throw pe.alternate===null?Error(a(467)):Error(a(310));qe=i,i={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},yn===null?pe.memoizedState=yn=i:yn=yn.next=i}return yn}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(i){var r=Vl;return Vl+=1,uo===null&&(uo=[]),i=Z_(uo,i,r),r=pe,(yn===null?r.memoizedState:yn.next)===null&&(r=r.alternate,I.H=r===null||r.memoizedState===null?Gy:up),i}function Fc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Hl(i);if(i.$$typeof===C)return On(i)}throw Error(a(438,String(i)))}function Qh(i){var r=null,o=pe.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Oc(),pe.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=tt;return r.index++,o}function Ga(i,r){return typeof r=="function"?r(i):r}function Ic(i){var r=dn();return Jh(r,qe,i)}function Jh(i,r,o){var u=i.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var p=i.baseQueue,g=u.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}r.baseQueue=p=g,u.pending=null}if(g=i.baseState,p===null)i.memoizedState=g;else{r=p.next;var D=E=null,G=null,rt=r,vt=!1;do{var bt=rt.lane&-536870913;if(bt!==rt.lane?(Ee&bt)===bt:(Ha&bt)===bt){var ot=rt.revertLane;if(ot===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),bt===io&&(vt=!0);else if((Ha&ot)===ot){rt=rt.next,ot===io&&(vt=!0);continue}else bt={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(D=G=bt,E=g):G=G.next=bt,pe.lanes|=ot,wr|=ot;bt=rt.action,ms&&o(g,bt),g=rt.hasEagerState?rt.eagerState:o(g,bt)}else ot={lane:bt,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(D=G=ot,E=g):G=G.next=ot,pe.lanes|=bt,wr|=bt;rt=rt.next}while(rt!==null&&rt!==r);if(G===null?E=g:G.next=D,!pi(g,i.memoizedState)&&(xn=!0,vt&&(o=ao,o!==null)))throw o;i.memoizedState=g,i.baseState=E,i.baseQueue=G,u.lastRenderedState=g}return p===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function tp(i){var r=dn(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var u=o.dispatch,p=o.pending,g=r.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=i(g,E.action),E=E.next;while(E!==p);pi(g,r.memoizedState)||(xn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function ly(i,r,o){var u=pe,p=dn(),g=Ae;if(g){if(o===void 0)throw Error(a(407));o=o()}else o=r();var E=!pi((qe||p).memoizedState,o);if(E&&(p.memoizedState=o,xn=!0),p=p.queue,ip(fy.bind(null,u,p,i),[i]),p.getSnapshot!==r||E||yn!==null&&yn.memoizedState.tag&1){if(u.flags|=2048,co(9,{destroy:void 0},cy.bind(null,u,p,o,r),null),Qe===null)throw Error(a(349));g||(Ha&127)!==0||uy(u,r,o)}return o}function uy(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=pe.updateQueue,r===null?(r=Oc(),pe.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function cy(i,r,o,u){r.value=o,r.getSnapshot=u,dy(r)&&hy(i)}function fy(i,r,o){return o(function(){dy(r)&&hy(i)})}function dy(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!pi(i,o)}catch{return!0}}function hy(i){var r=ss(i,2);r!==null&&oi(r,i,2)}function ep(i){var r=Zn();if(typeof i=="function"){var o=i;if(i=o(),ms){Vt(!0);try{o()}finally{Vt(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:i},r}function py(i,r,o,u){return i.baseState=o,Jh(i,qe,typeof u=="function"?u:Ga)}function xR(i,r,o,u,p){if(Vc(i))throw Error(a(485));if(i=r.action,i!==null){var g={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};I.T!==null?o(!0):g.isTransition=!1,u(g),o=r.pending,o===null?(g.next=r.pending=g,my(r,g)):(g.next=o.next,r.pending=o.next=g)}}function my(i,r){var o=r.action,u=r.payload,p=i.state;if(r.isTransition){var g=I.T,E={};I.T=E;try{var D=o(p,u),G=I.S;G!==null&&G(E,D),gy(i,r,D)}catch(rt){np(i,r,rt)}finally{g!==null&&E.types!==null&&(g.types=E.types),I.T=g}}else try{g=o(p,u),gy(i,r,g)}catch(rt){np(i,r,rt)}}function gy(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){vy(i,r,u)},function(u){return np(i,r,u)}):vy(i,r,o)}function vy(i,r,o){r.status="fulfilled",r.value=o,_y(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,my(i,o)))}function np(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,_y(r),r=r.next;while(r!==u)}i.action=null}function _y(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function yy(i,r){return r}function xy(i,r){if(Ae){var o=Qe.formState;if(o!==null){t:{var u=pe;if(Ae){if(tn){e:{for(var p=tn,g=wi;p.nodeType!==8;){if(!g){p=null;break e}if(p=Li(p.nextSibling),p===null){p=null;break e}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){tn=Li(p.nextSibling),u=p.data==="F!";break t}}xr(u)}u=!1}u&&(r=o[0])}}return o=Zn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yy,lastRenderedState:r},o.queue=u,o=zy.bind(null,pe,u),u.dispatch=o,u=ep(!1),g=lp.bind(null,pe,!1,u.queue),u=Zn(),p={state:r,dispatch:null,action:i,pending:null},u.queue=p,o=xR.bind(null,pe,p,g,o),p.dispatch=o,u.memoizedState=i,[r,o,!1]}function Sy(i){var r=dn();return by(r,qe,i)}function by(i,r,o){if(r=Jh(i,r,yy)[0],i=Ic(Ga)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Hl(r)}catch(E){throw E===ro?Rc:E}else u=r;r=dn();var p=r.queue,g=p.dispatch;return o!==r.memoizedState&&(pe.flags|=2048,co(9,{destroy:void 0},SR.bind(null,p,o),null)),[u,g,i]}function SR(i,r){i.action=r}function My(i){var r=dn(),o=qe;if(o!==null)return by(r,o,i);dn(),r=r.memoizedState,o=dn();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function co(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=pe.updateQueue,r===null&&(r=Oc(),pe.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Ey(){return dn().memoizedState}function Bc(i,r,o,u){var p=Zn();pe.flags|=i,p.memoizedState=co(1|r,{destroy:void 0},o,u===void 0?null:u)}function zc(i,r,o,u){var p=dn();u=u===void 0?null:u;var g=p.memoizedState.inst;qe!==null&&u!==null&&Yh(u,qe.memoizedState.deps)?p.memoizedState=co(r,g,o,u):(pe.flags|=i,p.memoizedState=co(1|r,g,o,u))}function Ty(i,r){Bc(8390656,8,i,r)}function ip(i,r){zc(2048,8,i,r)}function bR(i){pe.flags|=4;var r=pe.updateQueue;if(r===null)r=Oc(),pe.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function Ay(i){var r=dn().memoizedState;return bR({ref:r,nextImpl:i}),function(){if((Oe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function Ry(i,r){return zc(4,2,i,r)}function Cy(i,r){return zc(4,4,i,r)}function wy(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Dy(i,r,o){o=o!=null?o.concat([i]):null,zc(4,4,wy.bind(null,r,i),o)}function ap(){}function Ly(i,r){var o=dn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Yh(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Uy(i,r){var o=dn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Yh(r,u[1]))return u[0];if(u=i(),ms){Vt(!0);try{i()}finally{Vt(!1)}}return o.memoizedState=[u,r],u}function rp(i,r,o){return o===void 0||(Ha&1073741824)!==0&&(Ee&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=Px(),pe.lanes|=i,wr|=i,o)}function Py(i,r,o,u){return pi(o,r)?o:oo.current!==null?(i=rp(i,o,u),pi(i,r)||(xn=!0),i):(Ha&42)===0||(Ha&1073741824)!==0&&(Ee&261930)===0?(xn=!0,i.memoizedState=o):(i=Px(),pe.lanes|=i,wr|=i,r)}function Ny(i,r,o,u,p){var g=z.p;z.p=g!==0&&8>g?g:8;var E=I.T,D={};I.T=D,lp(i,!1,r,o);try{var G=p(),rt=I.S;if(rt!==null&&rt(D,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=vR(G,u);Gl(i,r,vt,xi(i))}else Gl(i,r,u,xi(i))}catch(bt){Gl(i,r,{then:function(){},status:"rejected",reason:bt},xi())}finally{z.p=g,E!==null&&D.types!==null&&(E.types=D.types),I.T=E}}function MR(){}function sp(i,r,o,u){if(i.tag!==5)throw Error(a(476));var p=Oy(i).queue;Ny(i,p,r,it,o===null?MR:function(){return Fy(i),o(u)})}function Oy(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:it},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Fy(i){var r=Oy(i);r.next===null&&(r=i.alternate.memoizedState),Gl(i,r.next.queue,{},xi())}function op(){return On(ru)}function Iy(){return dn().memoizedState}function By(){return dn().memoizedState}function ER(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=xi();i=Mr(o);var u=Er(r,i,o);u!==null&&(oi(u,r,o),Il(u,r,o)),r={cache:Fh()},i.payload=r;return}r=r.return}}function TR(i,r,o){var u=xi();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vc(i)?Vy(r,o):(o=Th(i,r,o,u),o!==null&&(oi(o,i,u),Hy(o,r,u)))}function zy(i,r,o){var u=xi();Gl(i,r,o,u)}function Gl(i,r,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Vc(i))Vy(r,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,D=g(E,o);if(p.hasEagerState=!0,p.eagerState=D,pi(D,E))return xc(i,r,p,0),Qe===null&&yc(),!1}catch{}if(o=Th(i,r,p,u),o!==null)return oi(o,i,u),Hy(o,r,u),!0}return!1}function lp(i,r,o,u){if(u={lane:2,revertLane:Vp(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Vc(i)){if(r)throw Error(a(479))}else r=Th(i,o,u,2),r!==null&&oi(r,i,2)}function Vc(i){var r=i.alternate;return i===pe||r!==null&&r===pe}function Vy(i,r){lo=Pc=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function Hy(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Hs(i,o)}}var kl={readContext:On,use:Fc,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln};kl.useEffectEvent=ln;var Gy={readContext:On,use:Fc,useCallback:function(i,r){return Zn().memoizedState=[i,r===void 0?null:r],i},useContext:On,useEffect:Ty,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Bc(4194308,4,wy.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Bc(4194308,4,i,r)},useInsertionEffect:function(i,r){Bc(4,2,i,r)},useMemo:function(i,r){var o=Zn();r=r===void 0?null:r;var u=i();if(ms){Vt(!0);try{i()}finally{Vt(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Zn();if(o!==void 0){var p=o(r);if(ms){Vt(!0);try{o(r)}finally{Vt(!1)}}}else p=r;return u.memoizedState=u.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},u.queue=i,i=i.dispatch=TR.bind(null,pe,i),[u.memoizedState,i]},useRef:function(i){var r=Zn();return i={current:i},r.memoizedState=i},useState:function(i){i=ep(i);var r=i.queue,o=zy.bind(null,pe,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:ap,useDeferredValue:function(i,r){var o=Zn();return rp(o,i,r)},useTransition:function(){var i=ep(!1);return i=Ny.bind(null,pe,i.queue,!0,!1),Zn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=pe,p=Zn();if(Ae){if(o===void 0)throw Error(a(407));o=o()}else{if(o=r(),Qe===null)throw Error(a(349));(Ee&127)!==0||uy(u,r,o)}p.memoizedState=o;var g={value:o,getSnapshot:r};return p.queue=g,Ty(fy.bind(null,u,g,i),[i]),u.flags|=2048,co(9,{destroy:void 0},cy.bind(null,u,g,o,r),null),o},useId:function(){var i=Zn(),r=Qe.identifierPrefix;if(Ae){var o=ua,u=la;o=(u&~(1<<32-Bt(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Nc++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=_R++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:op,useFormState:xy,useActionState:xy,useOptimistic:function(i){var r=Zn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=lp.bind(null,pe,!0,o),o.dispatch=r,[i,r]},useMemoCache:Qh,useCacheRefresh:function(){return Zn().memoizedState=ER.bind(null,pe)},useEffectEvent:function(i){var r=Zn(),o={impl:i};return r.memoizedState=o,function(){if((Oe&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},up={readContext:On,use:Fc,useCallback:Ly,useContext:On,useEffect:ip,useImperativeHandle:Dy,useInsertionEffect:Ry,useLayoutEffect:Cy,useMemo:Uy,useReducer:Ic,useRef:Ey,useState:function(){return Ic(Ga)},useDebugValue:ap,useDeferredValue:function(i,r){var o=dn();return Py(o,qe.memoizedState,i,r)},useTransition:function(){var i=Ic(Ga)[0],r=dn().memoizedState;return[typeof i=="boolean"?i:Hl(i),r]},useSyncExternalStore:ly,useId:Iy,useHostTransitionStatus:op,useFormState:Sy,useActionState:Sy,useOptimistic:function(i,r){var o=dn();return py(o,qe,i,r)},useMemoCache:Qh,useCacheRefresh:By};up.useEffectEvent=Ay;var ky={readContext:On,use:Fc,useCallback:Ly,useContext:On,useEffect:ip,useImperativeHandle:Dy,useInsertionEffect:Ry,useLayoutEffect:Cy,useMemo:Uy,useReducer:tp,useRef:Ey,useState:function(){return tp(Ga)},useDebugValue:ap,useDeferredValue:function(i,r){var o=dn();return qe===null?rp(o,i,r):Py(o,qe.memoizedState,i,r)},useTransition:function(){var i=tp(Ga)[0],r=dn().memoizedState;return[typeof i=="boolean"?i:Hl(i),r]},useSyncExternalStore:ly,useId:Iy,useHostTransitionStatus:op,useFormState:My,useActionState:My,useOptimistic:function(i,r){var o=dn();return qe!==null?py(o,qe,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Qh,useCacheRefresh:By};ky.useEffectEvent=Ay;function cp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var fp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=xi(),p=Mr(u);p.payload=r,o!=null&&(p.callback=o),r=Er(i,p,u),r!==null&&(oi(r,i,u),Il(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=xi(),p=Mr(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Er(i,p,u),r!==null&&(oi(r,i,u),Il(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=xi(),u=Mr(o);u.tag=2,r!=null&&(u.callback=r),r=Er(i,u,o),r!==null&&(oi(r,i,o),Il(r,i,o))}};function Xy(i,r,o,u,p,g,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,g,E):r.prototype&&r.prototype.isPureReactComponent?!wl(o,u)||!wl(p,g):!0}function Wy(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&fp.enqueueReplaceState(r,r.state,null)}function gs(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var p in i)o[p]===void 0&&(o[p]=i[p])}return o}function qy(i){_c(i)}function Yy(i){console.error(i)}function jy(i){_c(i)}function Hc(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function $y(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function dp(i,r,o){return o=Mr(o),o.tag=3,o.payload={element:null},o.callback=function(){Hc(i,r)},o}function Ky(i){return i=Mr(i),i.tag=3,i}function Zy(i,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;i.payload=function(){return p(g)},i.callback=function(){$y(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){$y(r,o,u),typeof p!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var D=u.stack;this.componentDidCatch(u.value,{componentStack:D!==null?D:""})})}function AR(i,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&no(r,o,p,!0),o=gi.current,o!==null){switch(o.tag){case 31:case 13:return Di===null?Jc():o.alternate===null&&un===0&&(un=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===Cc?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Ip(i,u,p)),!1;case 22:return o.flags|=65536,u===Cc?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Ip(i,u,p)),!1}throw Error(a(435,o.tag))}return Ip(i,u,p),Jc(),!1}if(Ae)return r=gi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Lh&&(i=Error(a(422),{cause:u}),Ul(Ai(i,o)))):(u!==Lh&&(r=Error(a(423),{cause:u}),Ul(Ai(r,o))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,u=Ai(u,o),p=dp(i.stateNode,u,p),Gh(i,p),un!==4&&(un=2)),!1;var g=Error(a(520),{cause:u});if(g=Ai(g,o),Zl===null?Zl=[g]:Zl.push(g),un!==4&&(un=2),r===null)return!0;u=Ai(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=p&-p,o.lanes|=i,i=dp(o.stateNode,u,i),Gh(o,i),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Dr===null||!Dr.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=Ky(p),Zy(p,i,o,u),Gh(o,p),!1}o=o.return}while(o!==null);return!1}var hp=Error(a(461)),xn=!1;function Fn(i,r,o,u){r.child=i===null?ey(r,null,o,u):ps(r,i.child,o,u)}function Qy(i,r,o,u,p){o=o.render;var g=r.ref;if("ref"in u){var E={};for(var D in u)D!=="ref"&&(E[D]=u[D])}else E=u;return cs(r),u=jh(i,r,o,E,g,p),D=$h(),i!==null&&!xn?(Kh(i,r,p),ka(i,r,p)):(Ae&&D&&wh(r),r.flags|=1,Fn(i,r,u,p),r.child)}function Jy(i,r,o,u,p){if(i===null){var g=o.type;return typeof g=="function"&&!Ah(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,tx(i,r,g,u,p)):(i=bc(o.type,null,u,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(g=i.child,!Sp(i,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:wl,o(E,u)&&i.ref===r.ref)return ka(i,r,p)}return r.flags|=1,i=Ia(g,u),i.ref=r.ref,i.return=r,r.child=i}function tx(i,r,o,u,p){if(i!==null){var g=i.memoizedProps;if(wl(g,u)&&i.ref===r.ref)if(xn=!1,r.pendingProps=u=g,Sp(i,p))(i.flags&131072)!==0&&(xn=!0);else return r.lanes=i.lanes,ka(i,r,p)}return pp(i,r,o,u,p)}function ex(i,r,o,u){var p=u.children,g=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,i!==null){for(u=r.child=i.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~g}else u=0,r.child=null;return nx(i,r,g,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Ac(r,g!==null?g.cachePool:null),g!==null?ay(r,g):Xh(),ry(r);else return u=r.lanes=536870912,nx(i,r,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(Ac(r,g.cachePool),ay(r,g),Ar(),r.memoizedState=null):(i!==null&&Ac(r,null),Xh(),Ar());return Fn(i,r,p,o),r.child}function Xl(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function nx(i,r,o,u,p){var g=Bh();return g=g===null?null:{parent:_n._currentValue,pool:g},r.memoizedState={baseLanes:o,cachePool:g},i!==null&&Ac(r,null),Xh(),ry(r),i!==null&&no(i,r,u,!0),r.childLanes=p,null}function Gc(i,r){return r=Xc({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function ix(i,r,o){return ps(r,i.child,null,o),i=Gc(r,r.pendingProps),i.flags|=2,vi(r),r.memoizedState=null,i}function RR(i,r,o){var u=r.pendingProps,p=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(Ae){if(u.mode==="hidden")return i=Gc(r,u),r.lanes=536870912,Xl(null,i);if(qh(r),(i=tn)?(i=mS(i,wi),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:_r!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=V_(i),o.return=r,r.child=o,Nn=r,tn=null)):i=null,i===null)throw xr(r);return r.lanes=536870912,null}return Gc(r,u)}var g=i.memoizedState;if(g!==null){var E=g.dehydrated;if(qh(r),p)if(r.flags&256)r.flags&=-257,r=ix(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(a(558));else if(xn||no(i,r,o,!1),p=(o&i.childLanes)!==0,xn||p){if(u=Qe,u!==null&&(E=oc(u,o),E!==0&&E!==g.retryLane))throw g.retryLane=E,ss(i,E),oi(u,i,E),hp;Jc(),r=ix(i,r,o)}else i=g.treeContext,tn=Li(E.nextSibling),Nn=r,Ae=!0,yr=null,wi=!1,i!==null&&k_(r,i),r=Gc(r,u),r.flags|=4096;return r}return i=Ia(i.child,{mode:u.mode,children:u.children}),i.ref=r.ref,r.child=i,i.return=r,i}function kc(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function pp(i,r,o,u,p){return cs(r),o=jh(i,r,o,u,void 0,p),u=$h(),i!==null&&!xn?(Kh(i,r,p),ka(i,r,p)):(Ae&&u&&wh(r),r.flags|=1,Fn(i,r,o,p),r.child)}function ax(i,r,o,u,p,g){return cs(r),r.updateQueue=null,o=oy(r,u,o,p),sy(i),u=$h(),i!==null&&!xn?(Kh(i,r,g),ka(i,r,g)):(Ae&&u&&wh(r),r.flags|=1,Fn(i,r,o,g),r.child)}function rx(i,r,o,u,p){if(cs(r),r.stateNode===null){var g=Qs,E=o.contextType;typeof E=="object"&&E!==null&&(g=On(E)),g=new o(u,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=fp,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=u,g.state=r.memoizedState,g.refs={},Vh(r),E=o.contextType,g.context=typeof E=="object"&&E!==null?On(E):Qs,g.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(cp(r,o,E,u),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&fp.enqueueReplaceState(g,g.state,null),zl(r,u,g,p),Bl(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){g=r.stateNode;var D=r.memoizedProps,G=gs(o,D);g.props=G;var rt=g.context,vt=o.contextType;E=Qs,typeof vt=="object"&&vt!==null&&(E=On(vt));var bt=o.getDerivedStateFromProps;vt=typeof bt=="function"||typeof g.getSnapshotBeforeUpdate=="function",D=r.pendingProps!==D,vt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(D||rt!==E)&&Wy(r,g,u,E),br=!1;var ot=r.memoizedState;g.state=ot,zl(r,u,g,p),Bl(),rt=r.memoizedState,D||ot!==rt||br?(typeof bt=="function"&&(cp(r,o,bt,u),rt=r.memoizedState),(G=br||Xy(r,o,G,u,ot,rt,E))?(vt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=rt),g.props=u,g.state=rt,g.context=E,u=G):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,Hh(i,r),E=r.memoizedProps,vt=gs(o,E),g.props=vt,bt=r.pendingProps,ot=g.context,rt=o.contextType,G=Qs,typeof rt=="object"&&rt!==null&&(G=On(rt)),D=o.getDerivedStateFromProps,(rt=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==bt||ot!==G)&&Wy(r,g,u,G),br=!1,ot=r.memoizedState,g.state=ot,zl(r,u,g,p),Bl();var ft=r.memoizedState;E!==bt||ot!==ft||br||i!==null&&i.dependencies!==null&&Ec(i.dependencies)?(typeof D=="function"&&(cp(r,o,D,u),ft=r.memoizedState),(vt=br||Xy(r,o,vt,u,ot,ft,G)||i!==null&&i.dependencies!==null&&Ec(i.dependencies))?(rt||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,ft,G),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,ft,G)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===i.memoizedProps&&ot===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&ot===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ft),g.props=u,g.state=ft,g.context=G,u=vt):(typeof g.componentDidUpdate!="function"||E===i.memoizedProps&&ot===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&ot===i.memoizedState||(r.flags|=1024),u=!1)}return g=u,kc(i,r),u=(r.flags&128)!==0,g||u?(g=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,i!==null&&u?(r.child=ps(r,i.child,null,p),r.child=ps(r,null,o,p)):Fn(i,r,o,p),r.memoizedState=g.state,i=r.child):i=ka(i,r,p),i}function sx(i,r,o,u){return ls(),r.flags|=256,Fn(i,r,o,u),r.child}var mp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gp(i){return{baseLanes:i,cachePool:$_()}}function vp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=yi),i}function ox(i,r,o){var u=r.pendingProps,p=!1,g=(r.flags&128)!==0,E;if((E=g)||(E=i!==null&&i.memoizedState===null?!1:(fn.current&2)!==0),E&&(p=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ae){if(p?Tr(r):Ar(),(i=tn)?(i=mS(i,wi),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:_r!==null?{id:la,overflow:ua}:null,retryLane:536870912,hydrationErrors:null},o=V_(i),o.return=r,r.child=o,Nn=r,tn=null)):i=null,i===null)throw xr(r);return Jp(i)?r.lanes=32:r.lanes=536870912,null}var D=u.children;return u=u.fallback,p?(Ar(),p=r.mode,D=Xc({mode:"hidden",children:D},p),u=os(u,p,o,null),D.return=r,u.return=r,D.sibling=u,r.child=D,u=r.child,u.memoizedState=gp(o),u.childLanes=vp(i,E,o),r.memoizedState=mp,Xl(null,u)):(Tr(r),_p(r,D))}var G=i.memoizedState;if(G!==null&&(D=G.dehydrated,D!==null)){if(g)r.flags&256?(Tr(r),r.flags&=-257,r=yp(i,r,o)):r.memoizedState!==null?(Ar(),r.child=i.child,r.flags|=128,r=null):(Ar(),D=u.fallback,p=r.mode,u=Xc({mode:"visible",children:u.children},p),D=os(D,p,o,null),D.flags|=2,u.return=r,D.return=r,u.sibling=D,r.child=u,ps(r,i.child,null,o),u=r.child,u.memoizedState=gp(o),u.childLanes=vp(i,E,o),r.memoizedState=mp,r=Xl(null,u));else if(Tr(r),Jp(D)){if(E=D.nextSibling&&D.nextSibling.dataset,E)var rt=E.dgst;E=rt,u=Error(a(419)),u.stack="",u.digest=E,Ul({value:u,source:null,stack:null}),r=yp(i,r,o)}else if(xn||no(i,r,o,!1),E=(o&i.childLanes)!==0,xn||E){if(E=Qe,E!==null&&(u=oc(E,o),u!==0&&u!==G.retryLane))throw G.retryLane=u,ss(i,u),oi(E,i,u),hp;Qp(D)||Jc(),r=yp(i,r,o)}else Qp(D)?(r.flags|=192,r.child=i.child,r=null):(i=G.treeContext,tn=Li(D.nextSibling),Nn=r,Ae=!0,yr=null,wi=!1,i!==null&&k_(r,i),r=_p(r,u.children),r.flags|=4096);return r}return p?(Ar(),D=u.fallback,p=r.mode,G=i.child,rt=G.sibling,u=Ia(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,rt!==null?D=Ia(rt,D):(D=os(D,p,o,null),D.flags|=2),D.return=r,u.return=r,u.sibling=D,r.child=u,Xl(null,u),u=r.child,D=i.child.memoizedState,D===null?D=gp(o):(p=D.cachePool,p!==null?(G=_n._currentValue,p=p.parent!==G?{parent:G,pool:G}:p):p=$_(),D={baseLanes:D.baseLanes|o,cachePool:p}),u.memoizedState=D,u.childLanes=vp(i,E,o),r.memoizedState=mp,Xl(i.child,u)):(Tr(r),o=i.child,i=o.sibling,o=Ia(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function _p(i,r){return r=Xc({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Xc(i,r){return i=mi(22,i,null,r),i.lanes=0,i}function yp(i,r,o){return ps(r,i.child,null,o),i=_p(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function lx(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Nh(i.return,r,o)}function xp(i,r,o,u,p,g){var E=i.memoizedState;E===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:g}:(E.isBackwards=r,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=o,E.tailMode=p,E.treeForkCount=g)}function ux(i,r,o){var u=r.pendingProps,p=u.revealOrder,g=u.tail;u=u.children;var E=fn.current,D=(E&2)!==0;if(D?(E=E&1|2,r.flags|=128):E&=1,_t(fn,E),Fn(i,r,u,o),u=Ae?Ll:0,!D&&i!==null&&(i.flags&128)!==0)t:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&lx(i,o,r);else if(i.tag===19)lx(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break t;for(;i.sibling===null;){if(i.return===null||i.return===r)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(p){case"forwards":for(o=r.child,p=null;o!==null;)i=o.alternate,i!==null&&Uc(i)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),xp(r,!1,p,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&Uc(i)===null){r.child=p;break}i=p.sibling,p.sibling=o,o=p,p=i}xp(r,!0,o,null,g,u);break;case"together":xp(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function ka(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),wr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(no(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,o=Ia(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Ia(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function Sp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Ec(i)))}function CR(i,r,o){switch(r.tag){case 3:pt(r,r.stateNode.containerInfo),Sr(r,_n,i.memoizedState.cache),ls();break;case 27:case 5:Dt(r);break;case 4:pt(r,r.stateNode.containerInfo);break;case 10:Sr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,qh(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Tr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?ox(i,r,o):(Tr(r),i=ka(i,r,o),i!==null?i.sibling:null);Tr(r);break;case 19:var p=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(no(i,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return ux(i,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),_t(fn,fn.current),u)break;return null;case 22:return r.lanes=0,ex(i,r,o,r.pendingProps);case 24:Sr(r,_n,i.memoizedState.cache)}return ka(i,r,o)}function cx(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)xn=!0;else{if(!Sp(i,o)&&(r.flags&128)===0)return xn=!1,CR(i,r,o);xn=(i.flags&131072)!==0}else xn=!1,Ae&&(r.flags&1048576)!==0&&G_(r,Ll,r.index);switch(r.lanes=0,r.tag){case 16:t:{var u=r.pendingProps;if(i=ds(r.elementType),r.type=i,typeof i=="function")Ah(i)?(u=gs(i,u),r.tag=1,r=rx(null,r,i,u,o)):(r.tag=0,r=pp(null,r,i,u,o));else{if(i!=null){var p=i.$$typeof;if(p===L){r.tag=11,r=Qy(null,r,i,u,o);break t}else if(p===F){r.tag=14,r=Jy(null,r,i,u,o);break t}}throw r=J(i)||i,Error(a(306,r,""))}}return r;case 0:return pp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=gs(u,r.pendingProps),rx(i,r,u,p,o);case 3:t:{if(pt(r,r.stateNode.containerInfo),i===null)throw Error(a(387));u=r.pendingProps;var g=r.memoizedState;p=g.element,Hh(i,r),zl(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Sr(r,_n,u),u!==g.cache&&Oh(r,[_n],o,!0),Bl(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=sx(i,r,u,o);break t}else if(u!==p){p=Ai(Error(a(424)),r),Ul(p),r=sx(i,r,u,o);break t}else for(i=r.stateNode.containerInfo,i.nodeType===9?i=i.body:i=i.nodeName==="HTML"?i.ownerDocument.body:i,tn=Li(i.firstChild),Nn=r,Ae=!0,yr=null,wi=!0,o=ey(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ls(),u===p){r=ka(i,r,o);break t}Fn(i,r,u,o)}r=r.child}return r;case 26:return kc(i,r),i===null?(o=SS(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ae||(o=r.type,i=r.pendingProps,u=of(nt.current).createElement(o),u[mn]=r,u[Tn]=i,In(u,o,i),q(u),r.stateNode=u):r.memoizedState=SS(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Dt(r),i===null&&Ae&&(u=r.stateNode=_S(r.type,r.pendingProps,nt.current),Nn=r,wi=!0,p=tn,Nr(r.type)?(tm=p,tn=Li(u.firstChild)):tn=p),Fn(i,r,r.pendingProps.children,o),kc(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ae&&((p=u=tn)&&(u=a2(u,r.type,r.pendingProps,wi),u!==null?(r.stateNode=u,Nn=r,tn=Li(u.firstChild),wi=!1,p=!0):p=!1),p||xr(r)),Dt(r),p=r.type,g=r.pendingProps,E=i!==null?i.memoizedProps:null,u=g.children,$p(p,g)?u=null:E!==null&&$p(p,E)&&(r.flags|=32),r.memoizedState!==null&&(p=jh(i,r,yR,null,null,o),ru._currentValue=p),kc(i,r),Fn(i,r,u,o),r.child;case 6:return i===null&&Ae&&((i=o=tn)&&(o=r2(o,r.pendingProps,wi),o!==null?(r.stateNode=o,Nn=r,tn=null,i=!0):i=!1),i||xr(r)),null;case 13:return ox(i,r,o);case 4:return pt(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=ps(r,null,u,o):Fn(i,r,u,o),r.child;case 11:return Qy(i,r,r.type,r.pendingProps,o);case 7:return Fn(i,r,r.pendingProps,o),r.child;case 8:return Fn(i,r,r.pendingProps.children,o),r.child;case 12:return Fn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Sr(r,r.type,u.value),Fn(i,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,cs(r),p=On(p),u=u(p),r.flags|=1,Fn(i,r,u,o),r.child;case 14:return Jy(i,r,r.type,r.pendingProps,o);case 15:return tx(i,r,r.type,r.pendingProps,o);case 19:return ux(i,r,o);case 31:return RR(i,r,o);case 22:return ex(i,r,o,r.pendingProps);case 24:return cs(r),u=On(_n),i===null?(p=Bh(),p===null&&(p=Qe,g=Fh(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),r.memoizedState={parent:u,cache:p},Vh(r),Sr(r,_n,p)):((i.lanes&o)!==0&&(Hh(i,r),zl(r,null,null,o),Bl()),p=i.memoizedState,g=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),Sr(r,_n,u)):(u=g.cache,Sr(r,_n,u),u!==p.cache&&Oh(r,[_n],o,!0))),Fn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function Xa(i){i.flags|=4}function bp(i,r,o,u,p){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(p&335544128)===p)if(i.stateNode.complete)i.flags|=8192;else if(Ix())i.flags|=8192;else throw hs=Cc,zh}else i.flags&=-16777217}function fx(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!AS(r))if(Ix())i.flags|=8192;else throw hs=Cc,zh}function Wc(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?He():536870912,i.lanes|=r,mo|=r)}function Wl(i,r){if(!Ae)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function en(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var p=i.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function wR(i,r,o){var u=r.pendingProps;switch(Dh(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(r),null;case 1:return en(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Va(_n),Ct(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(eo(r)?Xa(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Uh())),en(r),null;case 26:var p=r.type,g=r.memoizedState;return i===null?(Xa(r),g!==null?(en(r),fx(r,g)):(en(r),bp(r,p,null,u,o))):g?g!==i.memoizedState?(Xa(r),en(r),fx(r,g)):(en(r),r.flags&=-16777217):(i=i.memoizedProps,i!==u&&Xa(r),en(r),bp(r,p,i,u,o)),null;case 27:if(kt(r),o=nt.current,p=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Xa(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return en(r),null}i=Rt.current,eo(r)?X_(r):(i=_S(p,u,o),r.stateNode=i,Xa(r))}return en(r),null;case 5:if(kt(r),p=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&Xa(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return en(r),null}if(g=Rt.current,eo(r))X_(r);else{var E=of(nt.current);switch(g){case 1:g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=E.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?E.createElement(p,{is:u.is}):E.createElement(p)}}g[mn]=r,g[Tn]=u;t:for(E=r.child;E!==null;){if(E.tag===5||E.tag===6)g.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break t;for(;E.sibling===null;){if(E.return===null||E.return===r)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}r.stateNode=g;t:switch(In(g,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&Xa(r)}}return en(r),bp(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&Xa(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(a(166));if(i=nt.current,eo(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,p=Nn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}i[mn]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||oS(i.nodeValue,o)),i||xr(r,!0)}else i=of(i).createTextNode(u),i[mn]=r,r.stateNode=i}return en(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(u=eo(r),o!==null){if(i===null){if(!u)throw Error(a(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(557));i[mn]=r}else ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;en(r),i=!1}else o=Uh(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(vi(r),r):(vi(r),null);if((r.flags&128)!==0)throw Error(a(558))}return en(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=eo(r),u!==null&&u.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[mn]=r}else ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;en(r),p=!1}else p=Uh(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(vi(r),r):(vi(r),null)}return vi(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,i=i!==null&&i.memoizedState!==null,o&&(u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),Wc(r,r.updateQueue),en(r),null);case 4:return Ct(),i===null&&Xp(r.stateNode.containerInfo),en(r),null;case 10:return Va(r.type),en(r),null;case 19:if(X(fn),u=r.memoizedState,u===null)return en(r),null;if(p=(r.flags&128)!==0,g=u.rendering,g===null)if(p)Wl(u,!1);else{if(un!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(g=Uc(i),g!==null){for(r.flags|=128,Wl(u,!1),i=g.updateQueue,r.updateQueue=i,Wc(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)z_(o,i),o=o.sibling;return _t(fn,fn.current&1|2),Ae&&Ba(r,u.treeForkCount),r.child}i=i.sibling}u.tail!==null&&A()>Kc&&(r.flags|=128,p=!0,Wl(u,!1),r.lanes=4194304)}else{if(!p)if(i=Uc(g),i!==null){if(r.flags|=128,p=!0,i=i.updateQueue,r.updateQueue=i,Wc(r,i),Wl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Ae)return en(r),null}else 2*A()-u.renderingStartTime>Kc&&o!==536870912&&(r.flags|=128,p=!0,Wl(u,!1),r.lanes=4194304);u.isBackwards?(g.sibling=r.child,r.child=g):(i=u.last,i!==null?i.sibling=g:r.child=g,u.last=g)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=A(),i.sibling=null,o=fn.current,_t(fn,p?o&1|2:o&1),Ae&&Ba(r,u.treeForkCount),i):(en(r),null);case 22:case 23:return vi(r),Wh(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(en(r),r.subtreeFlags&6&&(r.flags|=8192)):en(r),o=r.updateQueue,o!==null&&Wc(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&X(fs),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Va(_n),en(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function DR(i,r){switch(Dh(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return Va(_n),Ct(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return kt(r),null;case 31:if(r.memoizedState!==null){if(vi(r),r.alternate===null)throw Error(a(340));ls()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(vi(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ls()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return X(fn),null;case 4:return Ct(),null;case 10:return Va(r.type),null;case 22:case 23:return vi(r),Wh(),i!==null&&X(fs),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return Va(_n),null;case 25:return null;default:return null}}function dx(i,r){switch(Dh(r),r.tag){case 3:Va(_n),Ct();break;case 26:case 27:case 5:kt(r);break;case 4:Ct();break;case 31:r.memoizedState!==null&&vi(r);break;case 13:vi(r);break;case 19:X(fn);break;case 10:Va(r.type);break;case 22:case 23:vi(r),Wh(),i!==null&&X(fs);break;case 24:Va(_n)}}function ql(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&i)===i){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==p)}}catch(D){ke(r,r.return,D)}}function Rr(i,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&i)===i){var E=u.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,p=r;var G=o,rt=D;try{rt()}catch(vt){ke(p,G,vt)}}}u=u.next}while(u!==g)}}catch(vt){ke(r,r.return,vt)}}function hx(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{iy(r,o)}catch(u){ke(i,i.return,u)}}}function px(i,r,o){o.props=gs(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){ke(i,r,u)}}function Yl(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(p){ke(i,r,p)}}function ca(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){ke(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){ke(i,r,p)}else o.current=null}function mx(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){ke(i,i.return,p)}}function Mp(i,r,o){try{var u=i.stateNode;QR(u,i.type,o,r),u[Tn]=r}catch(p){ke(i,i.return,p)}}function gx(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Nr(i.type)||i.tag===4}function Ep(i){t:for(;;){for(;i.sibling===null;){if(i.return===null||gx(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Nr(i.type)||i.flags&2||i.child===null||i.tag===4)continue t;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Tp(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Oa));else if(u!==4&&(u===27&&Nr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Tp(i,r,o),i=i.sibling;i!==null;)Tp(i,r,o),i=i.sibling}function qc(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Nr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(qc(i,r,o),i=i.sibling;i!==null;)qc(i,r,o),i=i.sibling}function vx(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);In(r,u,o),r[mn]=i,r[Tn]=o}catch(g){ke(i,i.return,g)}}var Wa=!1,Sn=!1,Ap=!1,_x=typeof WeakSet=="function"?WeakSet:Set,Ln=null;function LR(i,r){if(i=i.containerInfo,Yp=pf,i=D_(i),yh(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else t:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break t}var E=0,D=-1,G=-1,rt=0,vt=0,bt=i,ot=null;e:for(;;){for(var ft;bt!==o||p!==0&&bt.nodeType!==3||(D=E+p),bt!==g||u!==0&&bt.nodeType!==3||(G=E+u),bt.nodeType===3&&(E+=bt.nodeValue.length),(ft=bt.firstChild)!==null;)ot=bt,bt=ft;for(;;){if(bt===i)break e;if(ot===o&&++rt===p&&(D=E),ot===g&&++vt===u&&(G=E),(ft=bt.nextSibling)!==null)break;bt=ot,ot=bt.parentNode}bt=ft}o=D===-1||G===-1?null:{start:D,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(jp={focusedElem:i,selectionRange:o},pf=!1,Ln=r;Ln!==null;)if(r=Ln,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Ln=i;else for(;Ln!==null;){switch(r=Ln,g=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)p=i[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,o=r,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var Yt=gs(o.type,p);i=u.getSnapshotBeforeUpdate(Yt,g),u.__reactInternalSnapshotBeforeUpdate=i}catch(ae){ke(o,o.return,ae)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Zp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Zp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,Ln=i;break}Ln=r.return}}function yx(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ya(i,o),u&4&&ql(5,o);break;case 1:if(Ya(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(E){ke(o,o.return,E)}else{var p=gs(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(E){ke(o,o.return,E)}}u&64&&hx(o),u&512&&Yl(o,o.return);break;case 3:if(Ya(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{iy(i,r)}catch(E){ke(o,o.return,E)}}break;case 27:r===null&&u&4&&vx(o);case 26:case 5:Ya(i,o),r===null&&u&4&&mx(o),u&512&&Yl(o,o.return);break;case 12:Ya(i,o);break;case 31:Ya(i,o),u&4&&bx(i,o);break;case 13:Ya(i,o),u&4&&Mx(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=VR.bind(null,o),s2(i,o))));break;case 22:if(u=o.memoizedState!==null||Wa,!u){r=r!==null&&r.memoizedState!==null||Sn,p=Wa;var g=Sn;Wa=u,(Sn=r)&&!g?ja(i,o,(o.subtreeFlags&8772)!==0):Ya(i,o),Wa=p,Sn=g}break;case 30:break;default:Ya(i,o)}}function xx(i){var r=i.alternate;r!==null&&(i.alternate=null,xx(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Sl(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var rn=null,ii=!1;function qa(i,r,o){for(o=o.child;o!==null;)Sx(i,r,o),o=o.sibling}function Sx(i,r,o){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Tt,o)}catch{}switch(o.tag){case 26:Sn||ca(o,r),qa(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Sn||ca(o,r);var u=rn,p=ii;Nr(o.type)&&(rn=o.stateNode,ii=!1),qa(i,r,o),nu(o.stateNode),rn=u,ii=p;break;case 5:Sn||ca(o,r);case 6:if(u=rn,p=ii,rn=null,qa(i,r,o),rn=u,ii=p,rn!==null)if(ii)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(o.stateNode)}catch(g){ke(o,r,g)}else try{rn.removeChild(o.stateNode)}catch(g){ke(o,r,g)}break;case 18:rn!==null&&(ii?(i=rn,hS(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Mo(i)):hS(rn,o.stateNode));break;case 4:u=rn,p=ii,rn=o.stateNode.containerInfo,ii=!0,qa(i,r,o),rn=u,ii=p;break;case 0:case 11:case 14:case 15:Rr(2,o,r),Sn||Rr(4,o,r),qa(i,r,o);break;case 1:Sn||(ca(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&px(o,r,u)),qa(i,r,o);break;case 21:qa(i,r,o);break;case 22:Sn=(u=Sn)||o.memoizedState!==null,qa(i,r,o),Sn=u;break;default:qa(i,r,o)}}function bx(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{Mo(i)}catch(o){ke(r,r.return,o)}}}function Mx(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Mo(i)}catch(o){ke(r,r.return,o)}}function UR(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new _x),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new _x),r;default:throw Error(a(435,i.tag))}}function Yc(i,r){var o=UR(i);r.forEach(function(u){if(!o.has(u)){o.add(u);var p=HR.bind(null,i,u);u.then(p,p)}})}function ai(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=i,E=r,D=E;t:for(;D!==null;){switch(D.tag){case 27:if(Nr(D.type)){rn=D.stateNode,ii=!1;break t}break;case 5:rn=D.stateNode,ii=!1;break t;case 3:case 4:rn=D.stateNode.containerInfo,ii=!0;break t}D=D.return}if(rn===null)throw Error(a(160));Sx(g,E,p),rn=null,ii=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Ex(r,i),r=r.sibling}var Xi=null;function Ex(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:ai(r,i),ri(i),u&4&&(Rr(3,i,i.return),ql(3,i),Rr(5,i,i.return));break;case 1:ai(r,i),ri(i),u&512&&(Sn||o===null||ca(o,o.return)),u&64&&Wa&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Xi;if(ai(r,i),ri(i),u&512&&(Sn||o===null||ca(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){t:{u=i.type,o=i.memoizedProps,p=p.ownerDocument||p;e:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[es]||g[mn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),In(g,u,o),g[mn]=i,q(g),u=g;break t;case"link":var E=ES("link","href",p).get(u+(o.href||""));if(E){for(var D=0;D<E.length;D++)if(g=E[D],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(D,1);break e}}g=p.createElement(u),In(g,u,o),p.head.appendChild(g);break;case"meta":if(E=ES("meta","content",p).get(u+(o.content||""))){for(D=0;D<E.length;D++)if(g=E[D],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(D,1);break e}}g=p.createElement(u),In(g,u,o),p.head.appendChild(g);break;default:throw Error(a(468,u))}g[mn]=i,q(g),u=g}i.stateNode=u}else TS(p,i.type,i.stateNode);else i.stateNode=MS(p,u,i.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?TS(p,i.type,i.stateNode):MS(p,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Mp(i,i.memoizedProps,o.memoizedProps)}break;case 27:ai(r,i),ri(i),u&512&&(Sn||o===null||ca(o,o.return)),o!==null&&u&4&&Mp(i,i.memoizedProps,o.memoizedProps);break;case 5:if(ai(r,i),ri(i),u&512&&(Sn||o===null||ca(o,o.return)),i.flags&32){p=i.stateNode;try{Kn(p,"")}catch(Yt){ke(i,i.return,Yt)}}u&4&&i.stateNode!=null&&(p=i.memoizedProps,Mp(i,p,o!==null?o.memoizedProps:p)),u&1024&&(Ap=!0);break;case 6:if(ai(r,i),ri(i),u&4){if(i.stateNode===null)throw Error(a(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(Yt){ke(i,i.return,Yt)}}break;case 3:if(cf=null,p=Xi,Xi=lf(r.containerInfo),ai(r,i),Xi=p,ri(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Mo(r.containerInfo)}catch(Yt){ke(i,i.return,Yt)}Ap&&(Ap=!1,Tx(i));break;case 4:u=Xi,Xi=lf(i.stateNode.containerInfo),ai(r,i),ri(i),Xi=u;break;case 12:ai(r,i),ri(i);break;case 31:ai(r,i),ri(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Yc(i,u)));break;case 13:ai(r,i),ri(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&($c=A()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Yc(i,u)));break;case 22:p=i.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,rt=Wa,vt=Sn;if(Wa=rt||p,Sn=vt||G,ai(r,i),Sn=vt,Wa=rt,ri(i),u&8192)t:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||G||Wa||Sn||vs(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){G=o=r;try{if(g=G.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{D=G.stateNode;var bt=G.memoizedProps.style,ot=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;D.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Yt){ke(G,G.return,Yt)}}}else if(r.tag===6){if(o===null){G=r;try{G.stateNode.nodeValue=p?"":G.memoizedProps}catch(Yt){ke(G,G.return,Yt)}}}else if(r.tag===18){if(o===null){G=r;try{var ft=G.stateNode;p?pS(ft,!0):pS(G.stateNode,!1)}catch(Yt){ke(G,G.return,Yt)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break t;for(;r.sibling===null;){if(r.return===null||r.return===i)break t;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Yc(i,o))));break;case 19:ai(r,i),ri(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Yc(i,u)));break;case 30:break;case 21:break;default:ai(r,i),ri(i)}}function ri(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(gx(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,g=Ep(i);qc(i,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(Kn(E,""),o.flags&=-33);var D=Ep(i);qc(i,D,E);break;case 3:case 4:var G=o.stateNode.containerInfo,rt=Ep(i);Tp(i,rt,G);break;default:throw Error(a(161))}}catch(vt){ke(i,i.return,vt)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function Tx(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;Tx(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ya(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)yx(i,r.alternate,r),r=r.sibling}function vs(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Rr(4,r,r.return),vs(r);break;case 1:ca(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&px(r,r.return,o),vs(r);break;case 27:nu(r.stateNode);case 26:case 5:ca(r,r.return),vs(r);break;case 22:r.memoizedState===null&&vs(r);break;case 30:vs(r);break;default:vs(r)}i=i.sibling}}function ja(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=i,g=r,E=g.flags;switch(g.tag){case 0:case 11:case 15:ja(p,g,o),ql(4,g);break;case 1:if(ja(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(rt){ke(u,u.return,rt)}if(u=g,p=u.updateQueue,p!==null){var D=u.stateNode;try{var G=p.shared.hiddenCallbacks;if(G!==null)for(p.shared.hiddenCallbacks=null,p=0;p<G.length;p++)ny(G[p],D)}catch(rt){ke(u,u.return,rt)}}o&&E&64&&hx(g),Yl(g,g.return);break;case 27:vx(g);case 26:case 5:ja(p,g,o),o&&u===null&&E&4&&mx(g),Yl(g,g.return);break;case 12:ja(p,g,o);break;case 31:ja(p,g,o),o&&E&4&&bx(p,g);break;case 13:ja(p,g,o),o&&E&4&&Mx(p,g);break;case 22:g.memoizedState===null&&ja(p,g,o),Yl(g,g.return);break;case 30:break;default:ja(p,g,o)}r=r.sibling}}function Rp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Pl(o))}function Cp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Pl(i))}function Wi(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Ax(i,r,o,u),r=r.sibling}function Ax(i,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:Wi(i,r,o,u),p&2048&&ql(9,r);break;case 1:Wi(i,r,o,u);break;case 3:Wi(i,r,o,u),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Pl(i)));break;case 12:if(p&2048){Wi(i,r,o,u),i=r.stateNode;try{var g=r.memoizedProps,E=g.id,D=g.onPostCommit;typeof D=="function"&&D(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(G){ke(r,r.return,G)}}else Wi(i,r,o,u);break;case 31:Wi(i,r,o,u);break;case 13:Wi(i,r,o,u);break;case 23:break;case 22:g=r.stateNode,E=r.alternate,r.memoizedState!==null?g._visibility&2?Wi(i,r,o,u):jl(i,r):g._visibility&2?Wi(i,r,o,u):(g._visibility|=2,fo(i,r,o,u,(r.subtreeFlags&10256)!==0||!1)),p&2048&&Rp(E,r);break;case 24:Wi(i,r,o,u),p&2048&&Cp(r.alternate,r);break;default:Wi(i,r,o,u)}}function fo(i,r,o,u,p){for(p=p&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var g=i,E=r,D=o,G=u,rt=E.flags;switch(E.tag){case 0:case 11:case 15:fo(g,E,D,G,p),ql(8,E);break;case 23:break;case 22:var vt=E.stateNode;E.memoizedState!==null?vt._visibility&2?fo(g,E,D,G,p):jl(g,E):(vt._visibility|=2,fo(g,E,D,G,p)),p&&rt&2048&&Rp(E.alternate,E);break;case 24:fo(g,E,D,G,p),p&&rt&2048&&Cp(E.alternate,E);break;default:fo(g,E,D,G,p)}r=r.sibling}}function jl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,p=u.flags;switch(u.tag){case 22:jl(o,u),p&2048&&Rp(u.alternate,u);break;case 24:jl(o,u),p&2048&&Cp(u.alternate,u);break;default:jl(o,u)}r=r.sibling}}var $l=8192;function ho(i,r,o){if(i.subtreeFlags&$l)for(i=i.child;i!==null;)Rx(i,r,o),i=i.sibling}function Rx(i,r,o){switch(i.tag){case 26:ho(i,r,o),i.flags&$l&&i.memoizedState!==null&&_2(o,Xi,i.memoizedState,i.memoizedProps);break;case 5:ho(i,r,o);break;case 3:case 4:var u=Xi;Xi=lf(i.stateNode.containerInfo),ho(i,r,o),Xi=u;break;case 22:i.memoizedState===null&&(u=i.alternate,u!==null&&u.memoizedState!==null?(u=$l,$l=16777216,ho(i,r,o),$l=u):ho(i,r,o));break;default:ho(i,r,o)}}function Cx(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Kl(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ln=u,Dx(u,i)}Cx(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)wx(i),i=i.sibling}function wx(i){switch(i.tag){case 0:case 11:case 15:Kl(i),i.flags&2048&&Rr(9,i,i.return);break;case 3:Kl(i);break;case 12:Kl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,jc(i)):Kl(i);break;default:Kl(i)}}function jc(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Ln=u,Dx(u,i)}Cx(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Rr(8,r,r.return),jc(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,jc(r));break;default:jc(r)}i=i.sibling}}function Dx(i,r){for(;Ln!==null;){var o=Ln;switch(o.tag){case 0:case 11:case 15:Rr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Pl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Ln=u;else t:for(o=i;Ln!==null;){u=Ln;var p=u.sibling,g=u.return;if(xx(u),u===o){Ln=null;break t}if(p!==null){p.return=g,Ln=p;break t}Ln=g}}}var PR={getCacheForType:function(i){var r=On(_n),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return On(_n).controller.signal}},NR=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Qe=null,be=null,Ee=0,Ge=0,_i=null,Cr=!1,po=!1,wp=!1,$a=0,un=0,wr=0,_s=0,Dp=0,yi=0,mo=0,Zl=null,si=null,Lp=!1,$c=0,Lx=0,Kc=1/0,Zc=null,Dr=null,Rn=0,Lr=null,go=null,Ka=0,Up=0,Pp=null,Ux=null,Ql=0,Np=null;function xi(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:I.T!==null?Vp():oa()}function Px(){if(yi===0)if((Ee&536870912)===0||Ae){var i=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),yi=i}else yi=536870912;return i=gi.current,i!==null&&(i.flags|=32),yi}function oi(i,r,o){(i===Qe&&(Ge===2||Ge===9)||i.cancelPendingCommit!==null)&&(vo(i,0),Ur(i,Ee,yi,!1)),Yn(i,o),((Oe&2)===0||i!==Qe)&&(i===Qe&&((Oe&2)===0&&(_s|=o),un===4&&Ur(i,Ee,yi,!1)),fa(i))}function Nx(i,r,o){if((Oe&6)!==0)throw Error(a(327));var u=!o&&(r&127)===0&&(r&i.expiredLanes)===0||Wt(i,r),p=u?IR(i,r):Fp(i,r,!0),g=u;do{if(p===0){po&&!u&&Ur(i,r,0,!1);break}else{if(o=i.current.alternate,g&&!OR(o)){p=Fp(i,r,!1),g=!1;continue}if(p===2){if(g=r,i.errorRecoveryDisabledLanes&g)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var D=i;p=Zl;var G=D.current.memoizedState.isDehydrated;if(G&&(vo(D,E).flags|=256),E=Fp(D,E,!1),E!==2){if(wp&&!G){D.errorRecoveryDisabledLanes|=g,_s|=g,p=4;break t}g=si,si=p,g!==null&&(si===null?si=g:si.push.apply(si,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){vo(i,0),Ur(i,r,0,!0);break}t:{switch(u=i,g=p,g){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Ur(u,r,yi,!Cr);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=$c+300-A(),10<p)){if(Ur(u,r,yi,!Cr),mt(u,0,!0)!==0)break t;Ka=r,u.timeoutHandle=fS(Ox.bind(null,u,o,si,Zc,Lp,r,yi,_s,mo,Cr,g,"Throttled",-0,0),p);break t}Ox(u,o,si,Zc,Lp,r,yi,_s,mo,Cr,g,null,-0,0)}}break}while(!0);fa(i)}function Ox(i,r,o,u,p,g,E,D,G,rt,vt,bt,ot,ft){if(i.timeoutHandle=-1,bt=r.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Oa},Rx(r,g,bt);var Yt=(g&62914560)===g?$c-A():(g&4194048)===g?Lx-A():0;if(Yt=y2(bt,Yt),Yt!==null){Ka=g,i.cancelPendingCommit=Yt(kx.bind(null,i,r,g,o,u,p,E,D,G,vt,bt,null,ot,ft)),Ur(i,g,E,!rt);return}}kx(i,r,g,o,u,p,E,D,G)}function OR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!pi(g(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ur(i,r,o,u){r&=~Dp,r&=~_s,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var p=r;0<p;){var g=31-Bt(p),E=1<<g;u[g]=-1,p&=~E}o!==0&&xl(i,o,r)}function Qc(){return(Oe&6)===0?(Jl(0),!1):!0}function Op(){if(be!==null){if(Ge===0)var i=be.return;else i=be,za=us=null,Zh(i),so=null,Ol=0,i=be;for(;i!==null;)dx(i.alternate,i),i=i.return;be=null}}function vo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,e2(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Ka=0,Op(),Qe=i,be=o=Ia(i.current,null),Ee=r,Ge=0,_i=null,Cr=!1,po=Wt(i,r),wp=!1,mo=yi=Dp=_s=wr=un=0,si=Zl=null,Lp=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var p=31-Bt(u),g=1<<p;r|=i[p],u&=~g}return $a=r,yc(),o}function Fx(i,r){pe=null,I.H=kl,r===ro||r===Rc?(r=Q_(),Ge=3):r===zh?(r=Q_(),Ge=4):Ge=r===hp?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,_i=r,be===null&&(un=1,Hc(i,Ai(r,i.current)))}function Ix(){var i=gi.current;return i===null?!0:(Ee&4194048)===Ee?Di===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?i===Di:!1}function Bx(){var i=I.H;return I.H=kl,i===null?kl:i}function zx(){var i=I.A;return I.A=PR,i}function Jc(){un=4,Cr||(Ee&4194048)!==Ee&&gi.current!==null||(po=!0),(wr&134217727)===0&&(_s&134217727)===0||Qe===null||Ur(Qe,Ee,yi,!1)}function Fp(i,r,o){var u=Oe;Oe|=2;var p=Bx(),g=zx();(Qe!==i||Ee!==r)&&(Zc=null,vo(i,r)),r=!1;var E=un;t:do try{if(Ge!==0&&be!==null){var D=be,G=_i;switch(Ge){case 8:Op(),E=6;break t;case 3:case 2:case 9:case 6:gi.current===null&&(r=!0);var rt=Ge;if(Ge=0,_i=null,_o(i,D,G,rt),o&&po){E=0;break t}break;default:rt=Ge,Ge=0,_i=null,_o(i,D,G,rt)}}FR(),E=un;break}catch(vt){Fx(i,vt)}while(!0);return r&&i.shellSuspendCounter++,za=us=null,Oe=u,I.H=p,I.A=g,be===null&&(Qe=null,Ee=0,yc()),E}function FR(){for(;be!==null;)Vx(be)}function IR(i,r){var o=Oe;Oe|=2;var u=Bx(),p=zx();Qe!==i||Ee!==r?(Zc=null,Kc=A()+500,vo(i,r)):po=Wt(i,r);t:do try{if(Ge!==0&&be!==null){r=be;var g=_i;e:switch(Ge){case 1:Ge=0,_i=null,_o(i,r,g,1);break;case 2:case 9:if(K_(g)){Ge=0,_i=null,Hx(r);break}r=function(){Ge!==2&&Ge!==9||Qe!==i||(Ge=7),fa(i)},g.then(r,r);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:K_(g)?(Ge=0,_i=null,Hx(r)):(Ge=0,_i=null,_o(i,r,g,7));break;case 5:var E=null;switch(be.tag){case 26:E=be.memoizedState;case 5:case 27:var D=be;if(E?AS(E):D.stateNode.complete){Ge=0,_i=null;var G=D.sibling;if(G!==null)be=G;else{var rt=D.return;rt!==null?(be=rt,tf(rt)):be=null}break e}}Ge=0,_i=null,_o(i,r,g,5);break;case 6:Ge=0,_i=null,_o(i,r,g,6);break;case 8:Op(),un=6;break t;default:throw Error(a(462))}}BR();break}catch(vt){Fx(i,vt)}while(!0);return za=us=null,I.H=u,I.A=p,Oe=o,be!==null?0:(Qe=null,Ee=0,yc(),un)}function BR(){for(;be!==null&&!At();)Vx(be)}function Vx(i){var r=cx(i.alternate,i,$a);i.memoizedProps=i.pendingProps,r===null?tf(i):be=r}function Hx(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=ax(o,r,r.pendingProps,r.type,void 0,Ee);break;case 11:r=ax(o,r,r.pendingProps,r.type.render,r.ref,Ee);break;case 5:Zh(r);default:dx(o,r),r=be=z_(r,$a),r=cx(o,r,$a)}i.memoizedProps=i.pendingProps,r===null?tf(i):be=r}function _o(i,r,o,u){za=us=null,Zh(r),so=null,Ol=0;var p=r.return;try{if(AR(i,p,r,o,Ee)){un=1,Hc(i,Ai(o,i.current)),be=null;return}}catch(g){if(p!==null)throw be=p,g;un=1,Hc(i,Ai(o,i.current)),be=null;return}r.flags&32768?(Ae||u===1?i=!0:po||(Ee&536870912)!==0?i=!1:(Cr=i=!0,(u===2||u===9||u===3||u===6)&&(u=gi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Gx(r,i)):tf(r)}function tf(i){var r=i;do{if((r.flags&32768)!==0){Gx(r,Cr);return}i=r.return;var o=wR(r.alternate,r,$a);if(o!==null){be=o;return}if(r=r.sibling,r!==null){be=r;return}be=r=i}while(r!==null);un===0&&(un=5)}function Gx(i,r){do{var o=DR(i.alternate,i);if(o!==null){o.flags&=32767,be=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){be=i;return}be=i=o}while(i!==null);un=6,be=null}function kx(i,r,o,u,p,g,E,D,G){i.cancelPendingCommit=null;do ef();while(Rn!==0);if((Oe&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(g=r.lanes|r.childLanes,g|=Eh,zi(i,o,g,E,D,G),i===Qe&&(be=Qe=null,Ee=0),go=r,Lr=i,Ka=o,Up=g,Pp=p,Ux=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,GR(gt,function(){return jx(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,p=z.p,z.p=2,E=Oe,Oe|=4;try{LR(i,r,o)}finally{Oe=E,z.p=p,I.T=u}}Rn=1,Xx(),Wx(),qx()}}function Xx(){if(Rn===1){Rn=0;var i=Lr,r=go,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var u=z.p;z.p=2;var p=Oe;Oe|=4;try{Ex(r,i);var g=jp,E=D_(i.containerInfo),D=g.focusedElem,G=g.selectionRange;if(E!==D&&D&&D.ownerDocument&&w_(D.ownerDocument.documentElement,D)){if(G!==null&&yh(D)){var rt=G.start,vt=G.end;if(vt===void 0&&(vt=rt),"selectionStart"in D)D.selectionStart=rt,D.selectionEnd=Math.min(vt,D.value.length);else{var bt=D.ownerDocument||document,ot=bt&&bt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),Yt=D.textContent.length,ae=Math.min(G.start,Yt),je=G.end===void 0?ae:Math.min(G.end,Yt);!ft.extend&&ae>je&&(E=je,je=ae,ae=E);var $=C_(D,ae),W=C_(D,je);if($&&W&&(ft.rangeCount!==1||ft.anchorNode!==$.node||ft.anchorOffset!==$.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var at=bt.createRange();at.setStart($.node,$.offset),ft.removeAllRanges(),ae>je?(ft.addRange(at),ft.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),ft.addRange(at))}}}}for(bt=[],ft=D;ft=ft.parentNode;)ft.nodeType===1&&bt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<bt.length;D++){var St=bt[D];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}pf=!!Yp,jp=Yp=null}finally{Oe=p,z.p=u,I.T=o}}i.current=r,Rn=2}}function Wx(){if(Rn===2){Rn=0;var i=Lr,r=go,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var u=z.p;z.p=2;var p=Oe;Oe|=4;try{yx(i,r.alternate,r)}finally{Oe=p,z.p=u,I.T=o}}Rn=3}}function qx(){if(Rn===4||Rn===3){Rn=0,N();var i=Lr,r=go,o=Ka,u=Ux;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Rn=5:(Rn=0,go=Lr=null,Yx(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(Dr=null),ks(o),r=r.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Tt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=I.T,p=z.p,z.p=2,I.T=null;try{for(var g=i.onRecoverableError,E=0;E<u.length;E++){var D=u[E];g(D.value,{componentStack:D.stack})}}finally{I.T=r,z.p=p}}(Ka&3)!==0&&ef(),fa(i),p=i.pendingLanes,(o&261930)!==0&&(p&42)!==0?i===Np?Ql++:(Ql=0,Np=i):Ql=0,Jl(0)}}function Yx(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Pl(r)))}function ef(){return Xx(),Wx(),qx(),jx()}function jx(){if(Rn!==5)return!1;var i=Lr,r=Up;Up=0;var o=ks(Ka),u=I.T,p=z.p;try{z.p=32>o?32:o,I.T=null,o=Pp,Pp=null;var g=Lr,E=Ka;if(Rn=0,go=Lr=null,Ka=0,(Oe&6)!==0)throw Error(a(331));var D=Oe;if(Oe|=4,wx(g.current),Ax(g,g.current,E,o),Oe=D,Jl(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Tt,g)}catch{}return!0}finally{z.p=p,I.T=u,Yx(i,r)}}function $x(i,r,o){r=Ai(o,r),r=dp(i.stateNode,r,2),i=Er(i,r,2),i!==null&&(Yn(i,2),fa(i))}function ke(i,r,o){if(i.tag===3)$x(i,i,o);else for(;r!==null;){if(r.tag===3){$x(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){i=Ai(o,i),o=Ky(2),u=Er(r,o,2),u!==null&&(Zy(o,u,r,i),Yn(u,2),fa(u));break}}r=r.return}}function Ip(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new NR;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(wp=!0,p.add(o),i=zR.bind(null,i,r,o),r.then(i,i))}function zR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,Qe===i&&(Ee&o)===o&&(un===4||un===3&&(Ee&62914560)===Ee&&300>A()-$c?(Oe&2)===0&&vo(i,0):Dp|=o,mo===Ee&&(mo=0)),fa(i)}function Kx(i,r){r===0&&(r=He()),i=ss(i,r),i!==null&&(Yn(i,r),fa(i))}function VR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),Kx(i,o)}function HR(i,r){var o=0;switch(i.tag){case 31:case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(r),Kx(i,o)}function GR(i,r){return Se(i,r)}var nf=null,yo=null,Bp=!1,af=!1,zp=!1,Pr=0;function fa(i){i!==yo&&i.next===null&&(yo===null?nf=yo=i:yo=yo.next=i),af=!0,Bp||(Bp=!0,XR())}function Jl(i,r){if(!zp&&af){zp=!0;do for(var o=!1,u=nf;u!==null;){if(i!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var E=u.suspendedLanes,D=u.pingedLanes;g=(1<<31-Bt(42|i)+1)-1,g&=p&~(E&~D),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,tS(u,g))}else g=Ee,g=mt(u,u===Qe?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||Wt(u,g)||(o=!0,tS(u,g));u=u.next}while(o);zp=!1}}function kR(){Zx()}function Zx(){af=Bp=!1;var i=0;Pr!==0&&t2()&&(i=Pr);for(var r=A(),o=null,u=nf;u!==null;){var p=u.next,g=Qx(u,r);g===0?(u.next=null,o===null?nf=p:o.next=p,p===null&&(yo=o)):(o=u,(i!==0||(g&3)!==0)&&(af=!0)),u=p}Rn!==0&&Rn!==5||Jl(i),Pr!==0&&(Pr=0)}function Qx(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var E=31-Bt(g),D=1<<E,G=p[E];G===-1?((D&o)===0||(D&u)!==0)&&(p[E]=le(D,r)):G<=r&&(i.expiredLanes|=D),g&=~D}if(r=Qe,o=Ee,o=mt(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(Ge===2||Ge===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Ce(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||Wt(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Ce(u),ks(o)){case 2:case 8:o=xt;break;case 32:o=gt;break;case 268435456:o=Pt;break;default:o=gt}return u=Jx.bind(null,i),o=Se(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Ce(u),i.callbackPriority=2,i.callbackNode=null,2}function Jx(i,r){if(Rn!==0&&Rn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(ef()&&i.callbackNode!==o)return null;var u=Ee;return u=mt(i,i===Qe?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(Nx(i,u,r),Qx(i,A()),i.callbackNode!=null&&i.callbackNode===o?Jx.bind(null,i):null)}function tS(i,r){if(ef())return null;Nx(i,r,!0)}function XR(){n2(function(){(Oe&6)!==0?Se(dt,kR):Zx()})}function Vp(){if(Pr===0){var i=io;i===0&&(i=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Pr=i}return Pr}function eS(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:fc(""+i)}function nS(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function WR(i,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var g=eS((p[Tn]||null).action),E=u.submitter;E&&(r=(r=E[Tn]||null)?eS(r.formAction):E.getAttribute("formAction"),r!==null&&(g=r,E=null));var D=new mc("action","action",null,u,p);i.push({event:D,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Pr!==0){var G=E?nS(p,E):new FormData(p);sp(o,{pending:!0,data:G,method:p.method,action:g},null,G)}}else typeof g=="function"&&(D.preventDefault(),G=E?nS(p,E):new FormData(p),sp(o,{pending:!0,data:G,method:p.method,action:g},g,G))},currentTarget:p}]})}}for(var Hp=0;Hp<Mh.length;Hp++){var Gp=Mh[Hp],qR=Gp.toLowerCase(),YR=Gp[0].toUpperCase()+Gp.slice(1);ki(qR,"on"+YR)}ki(P_,"onAnimationEnd"),ki(N_,"onAnimationIteration"),ki(O_,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(uR,"onTransitionRun"),ki(cR,"onTransitionStart"),ki(fR,"onTransitionCancel"),ki(F_,"onTransitionEnd"),Nt("onMouseEnter",["mouseout","mouseover"]),Nt("onMouseLeave",["mouseout","mouseover"]),Nt("onPointerEnter",["pointerout","pointerover"]),Nt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(tu));function iS(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],p=u.event;u=u.listeners;t:{var g=void 0;if(r)for(var E=u.length-1;0<=E;E--){var D=u[E],G=D.instance,rt=D.currentTarget;if(D=D.listener,G!==g&&p.isPropagationStopped())break t;g=D,p.currentTarget=rt;try{g(p)}catch(vt){_c(vt)}p.currentTarget=null,g=G}else for(E=0;E<u.length;E++){if(D=u[E],G=D.instance,rt=D.currentTarget,D=D.listener,G!==g&&p.isPropagationStopped())break t;g=D,p.currentTarget=rt;try{g(p)}catch(vt){_c(vt)}p.currentTarget=null,g=G}}}}function Me(i,r){var o=r[pr];o===void 0&&(o=r[pr]=new Set);var u=i+"__bubble";o.has(u)||(aS(r,i,2,!1),o.add(u))}function kp(i,r,o){var u=0;r&&(u|=4),aS(o,i,u,r)}var rf="_reactListening"+Math.random().toString(36).slice(2);function Xp(i){if(!i[rf]){i[rf]=!0,ut.forEach(function(o){o!=="selectionchange"&&(jR.has(o)||kp(o,!1,i),kp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[rf]||(r[rf]=!0,kp("selectionchange",!1,r))}}function aS(i,r,o,u){switch(PS(r)){case 2:var p=b2;break;case 8:p=M2;break;default:p=rm}o=p.bind(null,r,o,i),p=void 0,!ch||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(r,o,{capture:!0,passive:p}):i.addEventListener(r,o,!0):p!==void 0?i.addEventListener(r,o,{passive:p}):i.addEventListener(r,o,!1)}function Wp(i,r,o,u,p){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var D=u.stateNode.containerInfo;if(D===p)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;D!==null;){if(E=mr(D),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){u=g=E;continue t}D=D.parentNode}}u=u.return}u_(function(){var rt=g,vt=lh(o),bt=[];t:{var ot=I_.get(i);if(ot!==void 0){var ft=mc,Yt=i;switch(i){case"keypress":if(hc(o)===0)break t;case"keydown":case"keyup":ft=H3;break;case"focusin":Yt="focus",ft=ph;break;case"focusout":Yt="blur",ft=ph;break;case"beforeblur":case"afterblur":ft=ph;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=d_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=w3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=X3;break;case P_:case N_:case O_:ft=U3;break;case F_:ft=q3;break;case"scroll":case"scrollend":ft=R3;break;case"wheel":ft=j3;break;case"copy":case"cut":case"paste":ft=N3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=p_;break;case"toggle":case"beforetoggle":ft=K3}var ae=(r&4)!==0,je=!ae&&(i==="scroll"||i==="scrollend"),$=ae?ot!==null?ot+"Capture":null:ot;ae=[];for(var W=rt,at;W!==null;){var St=W;if(at=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||at===null||$===null||(St=bl(W,$),St!=null&&ae.push(eu(W,St,at))),je)break;W=W.return}0<ae.length&&(ot=new ft(ot,Yt,null,o,vt),bt.push({event:ot,listeners:ae}))}}if((r&7)===0){t:{if(ot=i==="mouseover"||i==="pointerover",ft=i==="mouseout"||i==="pointerout",ot&&o!==oh&&(Yt=o.relatedTarget||o.fromElement)&&(mr(Yt)||Yt[Pa]))break t;if((ft||ot)&&(ot=vt.window===vt?vt:(ot=vt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(Yt=o.relatedTarget||o.toElement,ft=rt,Yt=Yt?mr(Yt):null,Yt!==null&&(je=l(Yt),ae=Yt.tag,Yt!==je||ae!==5&&ae!==27&&ae!==6)&&(Yt=null)):(ft=null,Yt=rt),ft!==Yt)){if(ae=d_,St="onMouseLeave",$="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(ae=p_,St="onPointerLeave",$="onPointerEnter",W="pointer"),je=ft==null?ot:ns(ft),at=Yt==null?ot:ns(Yt),ot=new ae(St,W+"leave",ft,o,vt),ot.target=je,ot.relatedTarget=at,St=null,mr(vt)===rt&&(ae=new ae($,W+"enter",Yt,o,vt),ae.target=at,ae.relatedTarget=je,St=ae),je=St,ft&&Yt)e:{for(ae=$R,$=ft,W=Yt,at=0,St=$;St;St=ae(St))at++;St=0;for(var ne=W;ne;ne=ae(ne))St++;for(;0<at-St;)$=ae($),at--;for(;0<St-at;)W=ae(W),St--;for(;at--;){if($===W||W!==null&&$===W.alternate){ae=$;break e}$=ae($),W=ae(W)}ae=null}else ae=null;ft!==null&&rS(bt,ot,ft,ae,!1),Yt!==null&&je!==null&&rS(bt,je,Yt,ae,!0)}}t:{if(ot=rt?ns(rt):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Ue=b_;else if(x_(ot))if(M_)Ue=sR;else{Ue=aR;var Qt=iR}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?rt&&Ws(rt.elementType)&&(Ue=b_):Ue=rR;if(Ue&&(Ue=Ue(i,rt))){S_(bt,Ue,o,vt);break t}Qt&&Qt(i,ot,rt),i==="focusout"&&rt&&ot.type==="number"&&rt.memoizedProps.value!=null&&Hi(ot,"number",ot.value)}switch(Qt=rt?ns(rt):window,i){case"focusin":(x_(Qt)||Qt.contentEditable==="true")&&($s=Qt,xh=rt,Dl=null);break;case"focusout":Dl=xh=$s=null;break;case"mousedown":Sh=!0;break;case"contextmenu":case"mouseup":case"dragend":Sh=!1,L_(bt,o,vt);break;case"selectionchange":if(lR)break;case"keydown":case"keyup":L_(bt,o,vt)}var ve;if(gh)t:{switch(i){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else js?__(i,o)&&(Te="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Te="onCompositionStart");Te&&(m_&&o.locale!=="ko"&&(js||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&js&&(ve=c_()):(vr=vt,fh="value"in vr?vr.value:vr.textContent,js=!0)),Qt=sf(rt,Te),0<Qt.length&&(Te=new h_(Te,i,null,o,vt),bt.push({event:Te,listeners:Qt}),ve?Te.data=ve:(ve=y_(o),ve!==null&&(Te.data=ve)))),(ve=Q3?J3(i,o):tR(i,o))&&(Te=sf(rt,"onBeforeInput"),0<Te.length&&(Qt=new h_("onBeforeInput","beforeinput",null,o,vt),bt.push({event:Qt,listeners:Te}),Qt.data=ve)),WR(bt,i,rt,o,vt)}iS(bt,r)})}function eu(i,r,o){return{instance:i,listener:r,currentTarget:o}}function sf(i,r){for(var o=r+"Capture",u=[];i!==null;){var p=i,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=bl(i,o),p!=null&&u.unshift(eu(i,p,g)),p=bl(i,r),p!=null&&u.push(eu(i,p,g))),i.tag===3)return u;i=i.return}return[]}function $R(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function rS(i,r,o,u,p){for(var g=r._reactName,E=[];o!==null&&o!==u;){var D=o,G=D.alternate,rt=D.stateNode;if(D=D.tag,G!==null&&G===u)break;D!==5&&D!==26&&D!==27||rt===null||(G=rt,p?(rt=bl(o,g),rt!=null&&E.unshift(eu(o,rt,G))):p||(rt=bl(o,g),rt!=null&&E.push(eu(o,rt,G)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var KR=/\r\n?/g,ZR=/\u0000|\uFFFD/g;function sS(i){return(typeof i=="string"?i:""+i).replace(KR,`
`).replace(ZR,"")}function oS(i,r){return r=sS(r),sS(i)===r}function Ye(i,r,o,u,p,g){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Kn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Kn(i,""+u);break;case"className":fe(i,"class",u);break;case"tabIndex":fe(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(i,o,u);break;case"style":Na(i,u,g);break;case"data":if(r!=="object"){fe(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=fc(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&Ye(i,r,"name",p.name,p,null),Ye(i,r,"formEncType",p.formEncType,p,null),Ye(i,r,"formMethod",p.formMethod,p,null),Ye(i,r,"formTarget",p.formTarget,p,null)):(Ye(i,r,"encType",p.encType,p,null),Ye(i,r,"method",p.method,p,null),Ye(i,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=fc(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Oa);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=fc(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Me("beforetoggle",i),Me("toggle",i),oe(i,"popover",u);break;case"xlinkActuate":qt(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":qt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":qt(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":qt(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":qt(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":qt(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":qt(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":qt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":qt(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":oe(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=T3.get(o)||o,oe(i,o,u))}}function qp(i,r,o,u,p,g){switch(o){case"style":Na(i,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Kn(i,u):(typeof u=="number"||typeof u=="bigint")&&Kn(i,""+u);break;case"onScroll":u!=null&&Me("scroll",i);break;case"onScrollEnd":u!=null&&Me("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),g=i[Tn]||null,g=g!=null?g[o]:null,typeof g=="function"&&i.removeEventListener(r,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,p);break t}o in i?i[o]=u:u===!0?i.setAttribute(o,""):oe(i,o,u)}}}function In(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",i),Me("load",i);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ye(i,r,g,E,o,null)}}p&&Ye(i,r,"srcSet",o.srcSet,o,null),u&&Ye(i,r,"src",o.src,o,null);return;case"input":Me("invalid",i);var D=g=E=p=null,G=null,rt=null;for(u in o)if(o.hasOwnProperty(u)){var vt=o[u];if(vt!=null)switch(u){case"name":p=vt;break;case"type":E=vt;break;case"checked":G=vt;break;case"defaultChecked":rt=vt;break;case"value":g=vt;break;case"defaultValue":D=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(a(137,r));break;default:Ye(i,r,u,vt,o,null)}}di(i,g,D,G,rt,E,p,!1);return;case"select":Me("invalid",i),u=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(D=o[p],D!=null))switch(p){case"value":g=D;break;case"defaultValue":E=D;break;case"multiple":u=D;default:Ye(i,r,p,D,o,null)}r=g,o=E,i.multiple=!!u,r!=null?hi(i,!!u,r,!1):o!=null&&hi(i,!!u,o,!0);return;case"textarea":Me("invalid",i),g=p=u=null;for(E in o)if(o.hasOwnProperty(E)&&(D=o[E],D!=null))switch(E){case"value":u=D;break;case"defaultValue":p=D;break;case"children":g=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Ye(i,r,E,D,o,null)}gn(i,u,p,g);return;case"option":for(G in o)o.hasOwnProperty(G)&&(u=o[G],u!=null)&&(G==="selected"?i.selected=u&&typeof u!="function"&&typeof u!="symbol":Ye(i,r,G,u,o,null));return;case"dialog":Me("beforetoggle",i),Me("toggle",i),Me("cancel",i),Me("close",i);break;case"iframe":case"object":Me("load",i);break;case"video":case"audio":for(u=0;u<tu.length;u++)Me(tu[u],i);break;case"image":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"embed":case"source":case"link":Me("error",i),Me("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in o)if(o.hasOwnProperty(rt)&&(u=o[rt],u!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Ye(i,r,rt,u,o,null)}return;default:if(Ws(r)){for(vt in o)o.hasOwnProperty(vt)&&(u=o[vt],u!==void 0&&qp(i,r,vt,u,o,void 0));return}}for(D in o)o.hasOwnProperty(D)&&(u=o[D],u!=null&&Ye(i,r,D,u,o,null))}function QR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,D=null,G=null,rt=null,vt=null;for(ft in o){var bt=o[ft];if(o.hasOwnProperty(ft)&&bt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":G=bt;default:u.hasOwnProperty(ft)||Ye(i,r,ft,null,u,bt)}}for(var ot in u){var ft=u[ot];if(bt=o[ot],u.hasOwnProperty(ot)&&(ft!=null||bt!=null))switch(ot){case"type":g=ft;break;case"name":p=ft;break;case"checked":rt=ft;break;case"defaultChecked":vt=ft;break;case"value":E=ft;break;case"defaultValue":D=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,r));break;default:ft!==bt&&Ye(i,r,ot,ft,u,bt)}}$n(i,E,D,G,rt,vt,g,p);return;case"select":ft=E=D=ot=null;for(g in o)if(G=o[g],o.hasOwnProperty(g)&&G!=null)switch(g){case"value":break;case"multiple":ft=G;default:u.hasOwnProperty(g)||Ye(i,r,g,null,u,G)}for(p in u)if(g=u[p],G=o[p],u.hasOwnProperty(p)&&(g!=null||G!=null))switch(p){case"value":ot=g;break;case"defaultValue":D=g;break;case"multiple":E=g;default:g!==G&&Ye(i,r,p,g,u,G)}r=D,o=E,u=ft,ot!=null?hi(i,!!o,ot,!1):!!u!=!!o&&(r!=null?hi(i,!!o,r,!0):hi(i,!!o,o?[]:"",!1));return;case"textarea":ft=ot=null;for(D in o)if(p=o[D],o.hasOwnProperty(D)&&p!=null&&!u.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ye(i,r,D,null,u,p)}for(E in u)if(p=u[E],g=o[E],u.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":ot=p;break;case"defaultValue":ft=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==g&&Ye(i,r,E,p,u,g)}Be(i,ot,ft);return;case"option":for(var Yt in o)ot=o[Yt],o.hasOwnProperty(Yt)&&ot!=null&&!u.hasOwnProperty(Yt)&&(Yt==="selected"?i.selected=!1:Ye(i,r,Yt,null,u,ot));for(G in u)ot=u[G],ft=o[G],u.hasOwnProperty(G)&&ot!==ft&&(ot!=null||ft!=null)&&(G==="selected"?i.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Ye(i,r,G,ot,u,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in o)ot=o[ae],o.hasOwnProperty(ae)&&ot!=null&&!u.hasOwnProperty(ae)&&Ye(i,r,ae,null,u,ot);for(rt in u)if(ot=u[rt],ft=o[rt],u.hasOwnProperty(rt)&&ot!==ft&&(ot!=null||ft!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,r));break;default:Ye(i,r,rt,ot,u,ft)}return;default:if(Ws(r)){for(var je in o)ot=o[je],o.hasOwnProperty(je)&&ot!==void 0&&!u.hasOwnProperty(je)&&qp(i,r,je,void 0,u,ot);for(vt in u)ot=u[vt],ft=o[vt],!u.hasOwnProperty(vt)||ot===ft||ot===void 0&&ft===void 0||qp(i,r,vt,ot,u,ft);return}}for(var $ in o)ot=o[$],o.hasOwnProperty($)&&ot!=null&&!u.hasOwnProperty($)&&Ye(i,r,$,null,u,ot);for(bt in u)ot=u[bt],ft=o[bt],!u.hasOwnProperty(bt)||ot===ft||ot==null&&ft==null||Ye(i,r,bt,ot,u,ft)}function lS(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function JR(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],g=p.transferSize,E=p.initiatorType,D=p.duration;if(g&&D&&lS(E)){for(E=0,D=p.responseEnd,u+=1;u<o.length;u++){var G=o[u],rt=G.startTime;if(rt>D)break;var vt=G.transferSize,bt=G.initiatorType;vt&&lS(bt)&&(G=G.responseEnd,E+=vt*(G<D?1:(D-rt)/(G-rt)))}if(--u,r+=8*(g+E)/(p.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Yp=null,jp=null;function of(i){return i.nodeType===9?i:i.ownerDocument}function uS(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cS(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function $p(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kp=null;function t2(){var i=window.event;return i&&i.type==="popstate"?i===Kp?!1:(Kp=i,!0):(Kp=null,!1)}var fS=typeof setTimeout=="function"?setTimeout:void 0,e2=typeof clearTimeout=="function"?clearTimeout:void 0,dS=typeof Promise=="function"?Promise:void 0,n2=typeof queueMicrotask=="function"?queueMicrotask:typeof dS<"u"?function(i){return dS.resolve(null).then(i).catch(i2)}:fS;function i2(i){setTimeout(function(){throw i})}function Nr(i){return i==="head"}function hS(i,r){var o=r,u=0;do{var p=o.nextSibling;if(i.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){i.removeChild(p),Mo(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")nu(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,nu(o);for(var g=o.firstChild;g;){var E=g.nextSibling,D=g.nodeName;g[es]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=E}}else o==="body"&&nu(i.ownerDocument.body);o=p}while(o);Mo(r)}function pS(i,r){var o=i;i=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=u}while(o)}function Zp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zp(o),Sl(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function a2(i,r,o,u){for(;i.nodeType===1;){var p=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[es])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Li(i.nextSibling),i===null)break}return null}function r2(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Li(i.nextSibling),i===null))return null;return i}function mS(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=Li(i.nextSibling),i===null))return null;return i}function Qp(i){return i.data==="$?"||i.data==="$~"}function Jp(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function s2(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Li(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var tm=null;function gS(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return Li(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function vS(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function _S(i,r,o){switch(r=of(o),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function nu(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);Sl(i)}var Ui=new Map,yS=new Set;function lf(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Za=z.d;z.d={f:o2,r:l2,D:u2,C:c2,L:f2,m:d2,X:p2,S:h2,M:m2};function o2(){var i=Za.f(),r=Qc();return i||r}function l2(i){var r=gr(i);r!==null&&r.tag===5&&r.type==="form"?Fy(r):Za.r(i)}var xo=typeof document>"u"?null:document;function xS(i,r,o){var u=xo;if(u&&typeof r=="string"&&r){var p=ce(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),yS.has(p)||(yS.add(p),i={rel:i,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),In(r,"link",i),q(r),u.head.appendChild(r)))}}function u2(i){Za.D(i),xS("dns-prefetch",i,null)}function c2(i,r){Za.C(i,r),xS("preconnect",i,r)}function f2(i,r,o){Za.L(i,r,o);var u=xo;if(u&&i&&r){var p='link[rel="preload"][as="'+ce(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+ce(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+ce(o.imageSizes)+'"]')):p+='[href="'+ce(i)+'"]';var g=p;switch(r){case"style":g=So(i);break;case"script":g=bo(i)}Ui.has(g)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Ui.set(g,i),u.querySelector(p)!==null||r==="style"&&u.querySelector(iu(g))||r==="script"&&u.querySelector(au(g))||(r=u.createElement("link"),In(r,"link",i),q(r),u.head.appendChild(r)))}}function d2(i,r){Za.m(i,r);var o=xo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+ce(u)+'"][href="'+ce(i)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=bo(i)}if(!Ui.has(g)&&(i=v({rel:"modulepreload",href:i},r),Ui.set(g,i),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(au(g)))return}u=o.createElement("link"),In(u,"link",i),q(u),o.head.appendChild(u)}}}function h2(i,r,o){Za.S(i,r,o);var u=xo;if(u&&i){var p=U(u).hoistableStyles,g=So(i);r=r||"default";var E=p.get(g);if(!E){var D={loading:0,preload:null};if(E=u.querySelector(iu(g)))D.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Ui.get(g))&&em(i,o);var G=E=u.createElement("link");q(G),In(G,"link",i),G._p=new Promise(function(rt,vt){G.onload=rt,G.onerror=vt}),G.addEventListener("load",function(){D.loading|=1}),G.addEventListener("error",function(){D.loading|=2}),D.loading|=4,uf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:D},p.set(g,E)}}}function p2(i,r){Za.X(i,r);var o=xo;if(o&&i){var u=U(o).hoistableScripts,p=bo(i),g=u.get(p);g||(g=o.querySelector(au(p)),g||(i=v({src:i,async:!0},r),(r=Ui.get(p))&&nm(i,r),g=o.createElement("script"),q(g),In(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function m2(i,r){Za.M(i,r);var o=xo;if(o&&i){var u=U(o).hoistableScripts,p=bo(i),g=u.get(p);g||(g=o.querySelector(au(p)),g||(i=v({src:i,async:!0,type:"module"},r),(r=Ui.get(p))&&nm(i,r),g=o.createElement("script"),q(g),In(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function SS(i,r,o,u){var p=(p=nt.current)?lf(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=So(o.href),o=U(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=So(o.href);var g=U(p).hoistableStyles,E=g.get(i);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,E),(g=p.querySelector(iu(i)))&&!g._p&&(E.instance=g,E.state.loading=5),Ui.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ui.set(i,o),g||g2(p,i,o,E.state))),r&&u===null)throw Error(a(528,""));return E}if(r&&u!==null)throw Error(a(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=bo(o),o=U(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function So(i){return'href="'+ce(i)+'"'}function iu(i){return'link[rel="stylesheet"]['+i+"]"}function bS(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function g2(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),In(r,"link",o),q(r),i.head.appendChild(r))}function bo(i){return'[src="'+ce(i)+'"]'}function au(i){return"script[async]"+i}function MS(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+ce(o.href)+'"]');if(u)return r.instance=u,q(u),u;var p=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),q(u),In(u,"style",p),uf(u,o.precedence,i),r.instance=u;case"stylesheet":p=So(o.href);var g=i.querySelector(iu(p));if(g)return r.state.loading|=4,r.instance=g,q(g),g;u=bS(o),(p=Ui.get(p))&&em(u,p),g=(i.ownerDocument||i).createElement("link"),q(g);var E=g;return E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),In(g,"link",u),r.state.loading|=4,uf(g,o.precedence,i),r.instance=g;case"script":return g=bo(o.src),(p=i.querySelector(au(g)))?(r.instance=p,q(p),p):(u=o,(p=Ui.get(g))&&(u=v({},o),nm(u,p)),i=i.ownerDocument||i,p=i.createElement("script"),q(p),In(p,"link",u),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,uf(u,o.precedence,i));return r.instance}function uf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,E=0;E<u.length;E++){var D=u[E];if(D.dataset.precedence===r)g=D;else if(g!==p)break}g?g.parentNode.insertBefore(i,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function em(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function nm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var cf=null;function ES(i,r,o){if(cf===null){var u=new Map,p=cf=new Map;p.set(o,u)}else p=cf,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),p=0;p<o.length;p++){var g=o[p];if(!(g[es]||g[mn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(r)||"";E=i+E;var D=u.get(E);D?D.push(g):u.set(E,[g])}}return u}function TS(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function v2(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(i=r.disabled,typeof r.precedence=="string"&&i==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function AS(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function _2(i,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=So(u.href),g=r.querySelector(iu(p));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=ff.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=g,q(g);return}g=r.ownerDocument||r,u=bS(u),(p=Ui.get(p))&&em(u,p),g=g.createElement("link"),q(g);var E=g;E._p=new Promise(function(D,G){E.onload=D,E.onerror=G}),In(g,"link",u),o.instance=g}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=ff.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var im=0;function y2(i,r){return i.stylesheets&&i.count===0&&hf(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var u=setTimeout(function(){if(i.stylesheets&&hf(i,i.stylesheets),i.unsuspend){var g=i.unsuspend;i.unsuspend=null,g()}},6e4+r);0<i.imgBytes&&im===0&&(im=62500*JR());var p=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&hf(i,i.stylesheets),i.unsuspend)){var g=i.unsuspend;i.unsuspend=null,g()}},(i.imgBytes>im?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function ff(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var df=null;function hf(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,df=new Map,r.forEach(x2,i),df=null,ff.call(i))}function x2(i,r){if(!(r.state.loading&4)){var o=df.get(i);if(o)var u=o.get(null);else{o=new Map,df.set(i,o);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}p=r.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,p),o.set(E,p),this.count++,u=ff.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var ru={$$typeof:C,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function S2(i,r,o,u,p,g,E,D,G){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function RS(i,r,o,u,p,g,E,D,G,rt,vt,bt){return i=new S2(i,r,o,E,G,rt,vt,bt,D),r=1,g===!0&&(r|=24),g=mi(3,null,null,r),i.current=g,g.stateNode=i,r=Fh(),r.refCount++,i.pooledCache=r,r.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:r},Vh(g),i}function CS(i){return i?(i=Qs,i):Qs}function wS(i,r,o,u,p,g){p=CS(p),u.context===null?u.context=p:u.pendingContext=p,u=Mr(r),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Er(i,u,r),o!==null&&(oi(o,i,r),Il(o,i,r))}function DS(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function am(i,r){DS(i,r),(i=i.alternate)&&DS(i,r)}function LS(i){if(i.tag===13||i.tag===31){var r=ss(i,67108864);r!==null&&oi(r,i,67108864),am(i,67108864)}}function US(i){if(i.tag===13||i.tag===31){var r=xi();r=Gs(r);var o=ss(i,r);o!==null&&oi(o,i,r),am(i,r)}}var pf=!0;function b2(i,r,o,u){var p=I.T;I.T=null;var g=z.p;try{z.p=2,rm(i,r,o,u)}finally{z.p=g,I.T=p}}function M2(i,r,o,u){var p=I.T;I.T=null;var g=z.p;try{z.p=8,rm(i,r,o,u)}finally{z.p=g,I.T=p}}function rm(i,r,o,u){if(pf){var p=sm(u);if(p===null)Wp(i,r,u,mf,o),NS(i,u);else if(T2(p,i,r,o,u))u.stopPropagation();else if(NS(i,u),r&4&&-1<E2.indexOf(i)){for(;p!==null;){var g=gr(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Et(g.pendingLanes);if(E!==0){var D=g;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var G=1<<31-Bt(E);D.entanglements[1]|=G,E&=~G}fa(g),(Oe&6)===0&&(Kc=A()+500,Jl(0))}}break;case 31:case 13:D=ss(g,2),D!==null&&oi(D,g,2),Qc(),am(g,2)}if(g=sm(u),g===null&&Wp(i,r,u,mf,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else Wp(i,r,u,null,o)}}function sm(i){return i=lh(i),om(i)}var mf=null;function om(i){if(mf=null,i=mr(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return mf=i,null}function PS(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case xt:return 8;case gt:case Kt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}var lm=!1,Or=null,Fr=null,Ir=null,su=new Map,ou=new Map,Br=[],E2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function NS(i,r){switch(i){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":su.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(r.pointerId)}}function lu(i,r,o,u,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},r!==null&&(r=gr(r),r!==null&&LS(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function T2(i,r,o,u,p){switch(r){case"focusin":return Or=lu(Or,i,r,o,u,p),!0;case"dragenter":return Fr=lu(Fr,i,r,o,u,p),!0;case"mouseover":return Ir=lu(Ir,i,r,o,u,p),!0;case"pointerover":var g=p.pointerId;return su.set(g,lu(su.get(g)||null,i,r,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,ou.set(g,lu(ou.get(g)||null,i,r,o,u,p)),!0}return!1}function OS(i){var r=mr(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Xs(i.priority,function(){US(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,Xs(i.priority,function(){US(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function gf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=sm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);oh=u,o.target.dispatchEvent(u),oh=null}else return r=gr(o),r!==null&&LS(r),i.blockedOn=o,!1;r.shift()}return!0}function FS(i,r,o){gf(i)&&o.delete(r)}function A2(){lm=!1,Or!==null&&gf(Or)&&(Or=null),Fr!==null&&gf(Fr)&&(Fr=null),Ir!==null&&gf(Ir)&&(Ir=null),su.forEach(FS),ou.forEach(FS)}function vf(i,r){i.blockedOn===r&&(i.blockedOn=null,lm||(lm=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,A2)))}var _f=null;function IS(i){_f!==i&&(_f=i,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){_f===i&&(_f=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],p=i[r+2];if(typeof u!="function"){if(om(u||o)===null)continue;break}var g=gr(o);g!==null&&(i.splice(r,3),r-=3,sp(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Mo(i){function r(G){return vf(G,i)}Or!==null&&vf(Or,i),Fr!==null&&vf(Fr,i),Ir!==null&&vf(Ir,i),su.forEach(r),ou.forEach(r);for(var o=0;o<Br.length;o++){var u=Br[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Br.length&&(o=Br[0],o.blockedOn===null);)OS(o),o.blockedOn===null&&Br.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],E=p[Tn]||null;if(typeof g=="function")E||IS(o);else if(E){var D=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[Tn]||null)D=E.formAction;else if(om(p)!==null)continue}else D=E.action;typeof D=="function"?o[u+1]=D:(o.splice(u,3),u-=3),IS(o)}}}function BS(){function i(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function r(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),p!==null&&(p(),p=null)}}}function um(i){this._internalRoot=i}yf.prototype.render=um.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var o=r.current,u=xi();wS(o,u,i,r,null,null)},yf.prototype.unmount=um.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;wS(i.current,2,null,i,null,null),Qc(),r[Pa]=null}};function yf(i){this._internalRoot=i}yf.prototype.unstable_scheduleHydration=function(i){if(i){var r=oa();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Br.length&&r!==0&&r<Br[o].priority;o++);Br.splice(o,0,i),o===0&&OS(i)}};var zS=t.version;if(zS!=="19.2.4")throw Error(a(527,zS,"19.2.4"));z.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=h(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var R2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xf.isDisabled&&xf.supportsFiber)try{Tt=xf.inject(R2),Mt=xf}catch{}}return cu.createRoot=function(i,r){if(!s(i))throw Error(a(299));var o=!1,u="",p=qy,g=Yy,E=jy;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError)),r=RS(i,1,!1,null,null,o,u,null,p,g,E,BS),i[Pa]=r.current,Xp(i),new um(r)},cu.hydrateRoot=function(i,r,o){if(!s(i))throw Error(a(299));var u=!1,p="",g=qy,E=Yy,D=jy,G=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(D=o.onRecoverableError),o.formState!==void 0&&(G=o.formState)),r=RS(i,1,!0,r,o??null,u,p,G,g,E,D,BS),r.context=CS(null),o=r.current,u=xi(),u=Gs(u),p=Mr(u),p.callback=null,Er(o,p,u),o=u,r.current.lanes=o,Yn(r,o),fa(r),i[Pa]=r.current,Xp(i),new yf(r)},cu.version="19.2.4",cu}var KS;function z2(){if(KS)return dm.exports;KS=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),dm.exports=B2(),dm.exports}var e8=z2();var ZS="popstate";function QS(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function V2(e={}){function t(a,s){let l=s.state?.masked,{pathname:c,search:f,hash:d}=l||a.location;return A0("",{pathname:c,search:f,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default",l?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,s){return typeof s=="string"?s:Pu(s)}return G2(t,n,null,e)}function sn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function sa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H2(){return Math.random().toString(36).substring(2,10)}function JS(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function A0(e,t,n=null,a,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?ol(t):t,state:n,key:t&&t.key||a||H2(),unstable_mask:s}}function Pu({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ol(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function G2(e,t,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,f="POP",d=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let y=m(),S=y==null?null:y-h;h=y,d&&d({action:f,location:M.location,delta:S})}function _(y,S){f="PUSH";let T=QS(y)?y:A0(M.location,y,S);h=m()+1;let C=JS(T,h),L=M.createHref(T.unstable_mask||T);try{c.pushState(C,"",L)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;s.location.assign(L)}l&&d&&d({action:f,location:M.location,delta:1})}function x(y,S){f="REPLACE";let T=QS(y)?y:A0(M.location,y,S);h=m();let C=JS(T,h),L=M.createHref(T.unstable_mask||T);c.replaceState(C,"",L),l&&d&&d({action:f,location:M.location,delta:0})}function b(y){return k2(y)}let M={get action(){return f},get location(){return e(s,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(ZS,v),d=y,()=>{s.removeEventListener(ZS,v),d=null}},createHref(y){return t(s,y)},createURL:b,encodeLocation(y){let S=b(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:_,replace:x,go(y){return c.go(y)}};return M}function k2(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),sn(n,"No window.location.(origin|href) available to create URL");let a=typeof e=="string"?e:Pu(e);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function HM(e,t,n="/"){return X2(e,t,n,!1)}function X2(e,t,n,a){let s=typeof t=="string"?ol(t):t,l=or(s.pathname||"/",n);if(l==null)return null;let c=GM(e);W2(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let h=nC(l);f=tC(c[d],h,a)}return f}function GM(e,t=[],n=[],a="",s=!1){let l=(c,f,d=s,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&d)return;sn(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let v=Sa([a,m.relativePath]),_=n.concat(m);c.children&&c.children.length>0&&(sn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),GM(c.children,t,_,v,d)),!(c.path==null&&!c.index)&&t.push({path:v,score:Q2(v,c.index),routesMeta:_})};return e.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of kM(c.path))l(c,f,!0,d)}),t}function kM(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=kM(a.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...c),f.map(d=>e.startsWith("/")&&d===""?"/":d)}function W2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:J2(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var q2=/^:[\w-]+$/,Y2=3,j2=2,$2=1,K2=10,Z2=-2,t1=e=>e==="*";function Q2(e,t){let n=e.split("/"),a=n.length;return n.some(t1)&&(a+=Z2),t&&(a+=j2),n.filter(s=>!t1(s)).reduce((s,l)=>s+(q2.test(l)?Y2:l===""?$2:K2),a)}function J2(e,t){return e.length===t.length&&e.slice(0,-1).every((a,s)=>a===t[s])?e[e.length-1]-t[t.length-1]:0}function tC(e,t,n=!1){let{routesMeta:a}=e,s={},l="/",c=[];for(let f=0;f<a.length;++f){let d=a[f],h=f===a.length-1,m=l==="/"?t:t.slice(l.length)||"/",v=Ed({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},m),_=d.route;if(!v&&h&&n&&!a[a.length-1].route.index&&(v=Ed({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!v)return null;Object.assign(s,v.params),c.push({params:s,pathname:Sa([l,v.pathname]),pathnameBase:sC(Sa([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=Sa([l,v.pathnameBase]))}return c}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=eC(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:m,isOptional:v},_)=>{if(m==="*"){let b=f[_]||"";c=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const x=f[_];return v&&!x?h[m]=void 0:h[m]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:e}}function eC(e,t=!1,n=!0){sa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,h,m)=>{if(a.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(h+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),a]}function nC(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return sa(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}var iC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function aC(e,t="/"){let{pathname:n,search:a="",hash:s=""}=typeof e=="string"?ol(e):e,l;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?l=e1(n.substring(1),"/"):l=e1(n,t)):l=t,{pathname:l,search:oC(a),hash:lC(s)}}function e1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function gm(e,t,n,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rC(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function av(e){let t=rC(e);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Xd(e,t,n,a=!1){let s;typeof e=="string"?s=ol(e):(s={...e},sn(!s.pathname||!s.pathname.includes("?"),gm("?","pathname","search",s)),sn(!s.pathname||!s.pathname.includes("#"),gm("#","pathname","hash",s)),sn(!s.search||!s.search.includes("#"),gm("#","search","hash",s)));let l=e===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=n;else{let v=t.length-1;if(!a&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;s.pathname=_.join("/")}f=v>=0?t[v]:"/"}let d=aC(s,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}var Sa=e=>e.join("/").replace(/\/\/+/g,"/"),sC=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),oC=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lC=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,uC=class{constructor(e,t,n,a=!1){this.status=e,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function cC(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function fC(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var XM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function WM(e,t){let n=e;if(typeof n!="string"||!iC.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,s=!1;if(XM)try{let l=new URL(window.location.href),c=n.startsWith("//")?new URL(l.protocol+n):new URL(n),f=or(c.pathname,t);c.origin===l.origin&&f!=null?n=f+c.search+c.hash:s=!0}catch{sa(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qM=["POST","PUT","PATCH","DELETE"];new Set(qM);var dC=["GET",...qM];new Set(dC);var ll=V.createContext(null);ll.displayName="DataRouter";var Wd=V.createContext(null);Wd.displayName="DataRouterState";var hC=V.createContext(!1),YM=V.createContext({isTransitioning:!1});YM.displayName="ViewTransition";var pC=V.createContext(new Map);pC.displayName="Fetchers";var mC=V.createContext(null);mC.displayName="Await";var Ei=V.createContext(null);Ei.displayName="Navigation";var Yu=V.createContext(null);Yu.displayName="Location";var La=V.createContext({outlet:null,matches:[],isDataRoute:!1});La.displayName="Route";var rv=V.createContext(null);rv.displayName="RouteError";var jM="REACT_ROUTER_ERROR",gC="REDIRECT",vC="ROUTE_ERROR_RESPONSE";function _C(e){if(e.startsWith(`${jM}:${gC}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function yC(e){if(e.startsWith(`${jM}:${vC}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new uC(t.status,t.statusText,t.data)}catch{}}function xC(e,{relative:t}={}){sn(ul(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=V.useContext(Ei),{hash:s,pathname:l,search:c}=ju(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:Sa([n,l])),a.createHref({pathname:f,search:c,hash:s})}function ul(){return V.useContext(Yu)!=null}function hr(){return sn(ul(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(Yu).location}var $M="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function KM(e){V.useContext(Ei).static||V.useLayoutEffect(e)}function ZM(){let{isDataRoute:e}=V.useContext(La);return e?PC():SC()}function SC(){sn(ul(),"useNavigate() may be used only in the context of a <Router> component.");let e=V.useContext(ll),{basename:t,navigator:n}=V.useContext(Ei),{matches:a}=V.useContext(La),{pathname:s}=hr(),l=JSON.stringify(av(a)),c=V.useRef(!1);return KM(()=>{c.current=!0}),V.useCallback((d,h={})=>{if(sa(c.current,$M),!c.current)return;if(typeof d=="number"){n.go(d);return}let m=Xd(d,JSON.parse(l),s,h.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Sa([t,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[t,n,l,s,e])}V.createContext(null);function ju(e,{relative:t}={}){let{matches:n}=V.useContext(La),{pathname:a}=hr(),s=JSON.stringify(av(n));return V.useMemo(()=>Xd(e,JSON.parse(s),a,t==="path"),[e,s,a,t])}function bC(e,t){return QM(e,t)}function QM(e,t,n){sn(ul(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=V.useContext(Ei),{matches:s}=V.useContext(La),l=s[s.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",h=l&&l.route;{let y=h&&h.path||"";tE(f,!h||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let m=hr(),v;if(t){let y=typeof t=="string"?ol(t):t;sn(d==="/"||y.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${y.pathname}" was given in the \`location\` prop.`),v=y}else v=m;let _=v.pathname||"/",x=_;if(d!=="/"){let y=d.replace(/^\//,"").split("/");x="/"+_.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=HM(e,{pathname:x});sa(h||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),sa(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=RC(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:Sa([d,a.encodeLocation?a.encodeLocation(y.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?d:Sa([d,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),s,n);return t&&M?V.createElement(Yu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},M):M}function MC(){let e=UC(),t=cC(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",e),c=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:l},"ErrorBoundary")," or"," ",V.createElement("code",{style:l},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},t),n?V.createElement("pre",{style:s},n):null,c)}var EC=V.createElement(MC,null),JM=class extends V.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=yC(e.digest);n&&(e=n)}let t=e!==void 0?V.createElement(La.Provider,{value:this.props.routeContext},V.createElement(rv.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?V.createElement(TC,{error:e},t):t}};JM.contextType=hC;var vm=new WeakMap;function TC({children:e,error:t}){let{basename:n}=V.useContext(Ei);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=_C(t.digest);if(a){let s=vm.get(t);if(s)throw s;let l=WM(a.location,n);if(XM&&!vm.get(t))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw vm.set(t,c),c}return V.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function AC({routeContext:e,match:t,children:n}){let a=V.useContext(ll);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),V.createElement(La.Provider,{value:e},n)}function RC(e,t=[],n){let a=n?.state;if(e==null){if(!a)return null;if(a.errors)e=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let s=e,l=a?.errors;if(l!=null){let m=s.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);sn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,f=-1;if(n&&a){c=a.renderFallback;for(let m=0;m<s.length;m++){let v=s[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:_,errors:x}=a,b=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||b){n.isStatic&&(c=!0),f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}}let d=n?.onError,h=a&&d?(m,v)=>{d(m,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:fC(a.matches),errorInfo:v})}:void 0;return s.reduceRight((m,v,_)=>{let x,b=!1,M=null,y=null;a&&(x=l&&v.route.id?l[v.route.id]:void 0,M=v.route.errorElement||EC,c&&(f<0&&_===0?(tE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,y=null):f===_&&(b=!0,y=v.route.hydrateFallbackElement||null)));let S=t.concat(s.slice(0,_+1)),T=()=>{let C;return x?C=M:b?C=y:v.route.Component?C=V.createElement(v.route.Component,null):v.route.element?C=v.route.element:C=m,V.createElement(AC,{match:v,routeContext:{outlet:m,matches:S,isDataRoute:a!=null},children:C})};return a&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?V.createElement(JM,{location:a.location,revalidation:a.revalidation,component:M,error:x,children:T(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):T()},null)}function sv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function CC(e){let t=V.useContext(ll);return sn(t,sv(e)),t}function wC(e){let t=V.useContext(Wd);return sn(t,sv(e)),t}function DC(e){let t=V.useContext(La);return sn(t,sv(e)),t}function ov(e){let t=DC(e),n=t.matches[t.matches.length-1];return sn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function LC(){return ov("useRouteId")}function UC(){let e=V.useContext(rv),t=wC("useRouteError"),n=ov("useRouteError");return e!==void 0?e:t.errors?.[n]}function PC(){let{router:e}=CC("useNavigate"),t=ov("useNavigate"),n=V.useRef(!1);return KM(()=>{n.current=!0}),V.useCallback(async(s,l={})=>{sa(n.current,$M),n.current&&(typeof s=="number"?await e.navigate(s):await e.navigate(s,{fromRouteId:t,...l}))},[e,t])}var n1={};function tE(e,t,n){!t&&!n1[e]&&(n1[e]=!0,sa(!1,n))}V.memo(NC);function NC({routes:e,future:t,state:n,isStatic:a,onError:s}){return QM(e,void 0,{state:n,isStatic:a,onError:s})}function n8({to:e,replace:t,state:n,relative:a}){sn(ul(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=V.useContext(Ei);sa(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=V.useContext(La),{pathname:c}=hr(),f=ZM(),d=Xd(e,av(l),c,a==="path"),h=JSON.stringify(d);return V.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:a})},[f,h,a,t,n]),null}function OC(e){sn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FC({basename:e="/",children:t=null,location:n,navigationType:a="POP",navigator:s,static:l=!1,unstable_useTransitions:c}){sn(!ul(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=e.replace(/^\/*/,"/"),d=V.useMemo(()=>({basename:f,navigator:s,static:l,unstable_useTransitions:c,future:{}}),[f,s,l,c]);typeof n=="string"&&(n=ol(n));let{pathname:h="/",search:m="",hash:v="",state:_=null,key:x="default",unstable_mask:b}=n,M=V.useMemo(()=>{let y=or(h,f);return y==null?null:{location:{pathname:y,search:m,hash:v,state:_,key:x,unstable_mask:b},navigationType:a}},[f,h,m,v,_,x,a,b]);return sa(M!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:V.createElement(Ei.Provider,{value:d},V.createElement(Yu.Provider,{children:t,value:M}))}function i8({children:e,location:t}){return bC(R0(e),t)}function R0(e,t=[]){let n=[];return V.Children.forEach(e,(a,s)=>{if(!V.isValidElement(a))return;let l=[...t,s];if(a.type===V.Fragment){n.push.apply(n,R0(a.props.children,l));return}sn(a.type===OC,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),sn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=R0(a.props.children,l)),n.push(c)}),n}var rd="get",sd="application/x-www-form-urlencoded";function qd(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function IC(e){return qd(e)&&e.tagName.toLowerCase()==="button"}function BC(e){return qd(e)&&e.tagName.toLowerCase()==="form"}function zC(e){return qd(e)&&e.tagName.toLowerCase()==="input"}function VC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function HC(e,t){return e.button===0&&(!t||t==="_self")&&!VC(e)}var Sf=null;function GC(){if(Sf===null)try{new FormData(document.createElement("form"),0),Sf=!1}catch{Sf=!0}return Sf}var kC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _m(e){return e!=null&&!kC.has(e)?(sa(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sd}"`),null):e}function XC(e,t){let n,a,s,l,c;if(BC(e)){let f=e.getAttribute("action");a=f?or(f,t):null,n=e.getAttribute("method")||rd,s=_m(e.getAttribute("enctype"))||sd,l=new FormData(e)}else if(IC(e)||zC(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=e.getAttribute("formaction")||f.getAttribute("action");if(a=d?or(d,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||rd,s=_m(e.getAttribute("formenctype"))||_m(f.getAttribute("enctype"))||sd,l=new FormData(f,e),!GC()){let{name:h,type:m,value:v}=e;if(m==="image"){let _=h?`${h}.`:"";l.append(`${_}x`,"0"),l.append(`${_}y`,"0")}else h&&l.append(h,v)}}else{if(qd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=rd,a=null,s=sd,c=e}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lv(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function WC(e,t,n,a){let s=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${a}`:s.pathname=`${s.pathname}.${a}`:s.pathname==="/"?s.pathname=`_root.${a}`:t&&or(s.pathname,t)==="/"?s.pathname=`${t.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function qC(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jC(e,t,n){let a=await Promise.all(e.map(async s=>{let l=t.routes[s.route.id];if(l){let c=await qC(l,n);return c.links?c.links():[]}return[]}));return QC(a.flat(1).filter(YC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function i1(e,t,n,a,s,l){let c=(d,h)=>n[h]?d.route.id!==n[h].route.id:!0,f=(d,h)=>n[h].pathname!==d.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==d.params["*"];return l==="assets"?t.filter((d,h)=>c(d,h)||f(d,h)):l==="data"?t.filter((d,h)=>{let m=a.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function $C(e,t,{includeHydrateFallback:n}={}){return KC(e.map(a=>{let s=t.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function KC(e){return[...new Set(e)]}function ZC(e){let t={},n=Object.keys(e).sort();for(let a of n)t[a]=e[a];return t}function QC(e,t){let n=new Set;return new Set(t),e.reduce((a,s)=>{let l=JSON.stringify(ZC(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}function eE(){let e=V.useContext(ll);return lv(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function JC(){let e=V.useContext(Wd);return lv(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var uv=V.createContext(void 0);uv.displayName="FrameworkContext";function nE(){let e=V.useContext(uv);return lv(e,"You must render this element inside a <HydratedRouter> element"),e}function tw(e,t){let n=V.useContext(uv),[a,s]=V.useState(!1),[l,c]=V.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:m,onTouchStart:v}=t,_=V.useRef(null);V.useEffect(()=>{if(e==="render"&&c(!0),e==="viewport"){let M=S=>{S.forEach(T=>{c(T.isIntersecting)})},y=new IntersectionObserver(M,{threshold:.5});return _.current&&y.observe(_.current),()=>{y.disconnect()}}},[e]),V.useEffect(()=>{if(a){let M=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(M)}}},[a]);let x=()=>{s(!0)},b=()=>{s(!1),c(!1)};return n?e!=="intent"?[l,_,{}]:[l,_,{onFocus:fu(f,x),onBlur:fu(d,b),onMouseEnter:fu(h,x),onMouseLeave:fu(m,b),onTouchStart:fu(v,x)}]:[!1,_,{}]}function fu(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function ew({page:e,...t}){let{router:n}=eE(),a=V.useMemo(()=>HM(n.routes,e,n.basename),[n.routes,e,n.basename]);return a?V.createElement(iw,{page:e,matches:a,...t}):null}function nw(e){let{manifest:t,routeModules:n}=nE(),[a,s]=V.useState([]);return V.useEffect(()=>{let l=!1;return jC(e,t,n).then(c=>{l||s(c)}),()=>{l=!0}},[e,t,n]),a}function iw({page:e,matches:t,...n}){let a=hr(),{future:s,manifest:l,routeModules:c}=nE(),{basename:f}=eE(),{loaderData:d,matches:h}=JC(),m=V.useMemo(()=>i1(e,t,h,l,a,"data"),[e,t,h,l,a]),v=V.useMemo(()=>i1(e,t,h,l,a,"assets"),[e,t,h,l,a]),_=V.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let M=new Set,y=!1;if(t.forEach(T=>{let C=l.routes[T.route.id];!C||!C.hasLoader||(!m.some(L=>L.route.id===T.route.id)&&T.route.id in d&&c[T.route.id]?.shouldRevalidate||C.hasClientLoader?y=!0:M.add(T.route.id))}),M.size===0)return[];let S=WC(e,f,s.unstable_trailingSlashAwareDataRequests,"data");return y&&M.size>0&&S.searchParams.set("_routes",t.filter(T=>M.has(T.route.id)).map(T=>T.route.id).join(",")),[S.pathname+S.search]},[f,s.unstable_trailingSlashAwareDataRequests,d,a,l,m,t,e,c]),x=V.useMemo(()=>$C(v,l),[v,l]),b=nw(v);return V.createElement(V.Fragment,null,_.map(M=>V.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...n})),x.map(M=>V.createElement("link",{key:M,rel:"modulepreload",href:M,...n})),b.map(({key:M,link:y})=>V.createElement("link",{key:M,nonce:n.nonce,...y,crossOrigin:y.crossOrigin??n.crossOrigin})))}function aw(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{rw&&(window.__reactRouterVersion="7.13.1")}catch{}function a8({basename:e,children:t,unstable_useTransitions:n,window:a}){let s=V.useRef();s.current==null&&(s.current=V2({window:a,v5Compat:!0}));let l=s.current,[c,f]=V.useState({action:l.action,location:l.location}),d=V.useCallback(h=>{n===!1?f(h):V.startTransition(()=>f(h))},[n]);return V.useLayoutEffect(()=>l.listen(d),[l,d]),V.createElement(FC,{basename:e,children:t,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:n})}var iE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,aE=V.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,unstable_mask:f,state:d,target:h,to:m,preventScrollReset:v,viewTransition:_,unstable_defaultShouldRevalidate:x,...b},M){let{basename:y,navigator:S,unstable_useTransitions:T}=V.useContext(Ei),C=typeof m=="string"&&iE.test(m),L=WM(m,y);m=L.to;let w=xC(m,{relative:s}),O=hr(),F=null;if(f){let K=Xd(f,[],O.unstable_mask?O.unstable_mask.pathname:"/",!0);y!=="/"&&(K.pathname=K.pathname==="/"?y:Sa([y,K.pathname])),F=S.createHref(K)}let[R,P,tt]=tw(a,b),H=uw(m,{replace:c,unstable_mask:f,state:d,target:h,preventScrollReset:v,relative:s,viewTransition:_,unstable_defaultShouldRevalidate:x,unstable_useTransitions:T});function Z(K){t&&t(K),K.defaultPrevented||H(K)}let Q=!(L.isExternal||l),J=V.createElement("a",{...b,...tt,href:(Q?F:void 0)||L.absoluteURL||w,onClick:Q?Z:t,ref:aw(M,P),target:h,"data-discover":!C&&n==="render"?"true":void 0});return R&&!C?V.createElement(V.Fragment,null,J,V.createElement(ew,{page:w})):J});aE.displayName="Link";var sw=V.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:f,children:d,...h},m){let v=ju(c,{relative:h.relative}),_=hr(),x=V.useContext(Wd),{navigator:b,basename:M}=V.useContext(Ei),y=x!=null&&pw(v)&&f===!0,S=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,T=_.pathname,C=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(T=T.toLowerCase(),C=C?C.toLowerCase():null,S=S.toLowerCase()),C&&M&&(C=or(C,M)||C);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let w=T===S||!s&&T.startsWith(S)&&T.charAt(L)==="/",O=C!=null&&(C===S||!s&&C.startsWith(S)&&C.charAt(S.length)==="/"),F={isActive:w,isPending:O,isTransitioning:y},R=w?t:void 0,P;typeof a=="function"?P=a(F):P=[a,w?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let tt=typeof l=="function"?l(F):l;return V.createElement(aE,{...h,"aria-current":R,className:P,ref:m,style:tt,to:c,viewTransition:f},typeof d=="function"?d(F):d)});sw.displayName="NavLink";var ow=V.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:s,state:l,method:c=rd,action:f,onSubmit:d,relative:h,preventScrollReset:m,viewTransition:v,unstable_defaultShouldRevalidate:_,...x},b)=>{let{unstable_useTransitions:M}=V.useContext(Ei),y=dw(),S=hw(f,{relative:h}),T=c.toLowerCase()==="get"?"get":"post",C=typeof f=="string"&&iE.test(f),L=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let O=w.nativeEvent.submitter,F=O?.getAttribute("formmethod")||c,R=()=>y(O||w.currentTarget,{fetcherKey:t,method:F,navigate:n,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:v,unstable_defaultShouldRevalidate:_});M&&n!==!1?V.startTransition(()=>R()):R()};return V.createElement("form",{ref:b,method:T,action:S,onSubmit:a?d:L,...x,"data-discover":!C&&e==="render"?"true":void 0})});ow.displayName="Form";function lw(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rE(e){let t=V.useContext(ll);return sn(t,lw(e)),t}function uw(e,{target:t,replace:n,unstable_mask:a,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let m=ZM(),v=hr(),_=ju(e,{relative:c});return V.useCallback(x=>{if(HC(x,t)){x.preventDefault();let b=n!==void 0?n:Pu(v)===Pu(_),M=()=>m(e,{replace:b,unstable_mask:a,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});h?V.startTransition(()=>M()):M()}},[v,m,_,n,a,s,t,e,l,c,f,d,h])}var cw=0,fw=()=>`__${String(++cw)}__`;function dw(){let{router:e}=rE("useSubmit"),{basename:t}=V.useContext(Ei),n=LC(),a=e.fetch,s=e.navigate;return V.useCallback(async(l,c={})=>{let{action:f,method:d,encType:h,formData:m,body:v}=XC(l,t);if(c.navigate===!1){let _=c.fetcherKey||fw();await a(_,n,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||h,flushSync:c.flushSync})}else await s(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,s,t,n])}function hw(e,{relative:t}={}){let{basename:n}=V.useContext(Ei),a=V.useContext(La);sn(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...ju(e||".",{relative:t})},c=hr();if(e==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!e||e===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Sa([n,l.pathname])),Pu(l)}function pw(e,{relative:t}={}){let n=V.useContext(YM);sn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=rE("useViewTransitionState"),s=ju(e,{relative:t});if(!n.isTransitioning)return!1;let l=or(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=or(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Ed(s.pathname,c)!=null||Ed(s.pathname,l)!=null}const sE=V.createContext({});function cv(e){const t=V.useRef(null);return t.current===null&&(t.current=e()),t.current}const oE=typeof window<"u",lE=oE?V.useLayoutEffect:V.useEffect,fv=V.createContext(null);function dv(e,t){e.indexOf(t)===-1&&e.push(t)}function Td(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Ra=(e,t,n)=>n>t?t:n<e?e:n;let hv=()=>{};const lr={},uE=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function cE(e){return typeof e=="object"&&e!==null}const fE=e=>/^0[^.\s]+$/u.test(e);function dE(e){let t;return()=>(t===void 0&&(t=e()),t)}const Bi=e=>e,mw=(e,t)=>n=>t(e(n)),$u=(...e)=>e.reduce(mw),Nu=(e,t,n)=>{const a=t-e;return a===0?1:(n-e)/a};class pv{constructor(){this.subscriptions=[]}add(t){return dv(this.subscriptions,t),()=>Td(this.subscriptions,t)}notify(t,n,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,a);else for(let l=0;l<s;l++){const c=this.subscriptions[l];c&&c(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ia=e=>e*1e3,Ii=e=>e/1e3;function hE(e,t){return t?e*(1e3/t):0}const pE=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,gw=1e-7,vw=12;function _w(e,t,n,a,s){let l,c,f=0;do c=t+(n-t)/2,l=pE(c,a,s)-e,l>0?n=c:t=c;while(Math.abs(l)>gw&&++f<vw);return c}function Ku(e,t,n,a){if(e===t&&n===a)return Bi;const s=l=>_w(l,0,1,e,n);return l=>l===0||l===1?l:pE(s(l),t,a)}const mE=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,gE=e=>t=>1-e(1-t),vE=Ku(.33,1.53,.69,.99),mv=gE(vE),_E=mE(mv),yE=e=>(e*=2)<1?.5*mv(e):.5*(2-Math.pow(2,-10*(e-1))),gv=e=>1-Math.sin(Math.acos(e)),xE=gE(gv),SE=mE(gv),yw=Ku(.42,0,1,1),xw=Ku(0,0,.58,1),bE=Ku(.42,0,.58,1),Sw=e=>Array.isArray(e)&&typeof e[0]!="number",ME=e=>Array.isArray(e)&&typeof e[0]=="number",bw={linear:Bi,easeIn:yw,easeInOut:bE,easeOut:xw,circIn:gv,circInOut:SE,circOut:xE,backIn:mv,backInOut:_E,backOut:vE,anticipate:yE},Mw=e=>typeof e=="string",a1=e=>{if(ME(e)){hv(e.length===4);const[t,n,a,s]=e;return Ku(t,n,a,s)}else if(Mw(e))return bw[e];return e},bf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Ew(e,t){let n=new Set,a=new Set,s=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){c.has(m)&&(h.schedule(m),e()),m(f)}const h={schedule:(m,v=!1,_=!1)=>{const b=_&&s?n:a;return v&&c.add(m),b.has(m)||b.add(m),m},cancel:m=>{a.delete(m),c.delete(m)},process:m=>{if(f=m,s){l=!0;return}s=!0,[n,a]=[a,n],n.forEach(d),n.clear(),s=!1,l&&(l=!1,h.process(m))}};return h}const Tw=40;function EE(e,t){let n=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,c=bf.reduce((C,L)=>(C[L]=Ew(l),C),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:_,render:x,postRender:b}=c,M=()=>{const C=lr.useManualTiming?s.timestamp:performance.now();n=!1,lr.useManualTiming||(s.delta=a?1e3/60:Math.max(Math.min(C-s.timestamp,Tw),1)),s.timestamp=C,s.isProcessing=!0,f.process(s),d.process(s),h.process(s),m.process(s),v.process(s),_.process(s),x.process(s),b.process(s),s.isProcessing=!1,n&&t&&(a=!1,e(M))},y=()=>{n=!0,a=!0,s.isProcessing||e(M)};return{schedule:bf.reduce((C,L)=>{const w=c[L];return C[L]=(O,F=!1,R=!1)=>(n||y(),w.schedule(O,F,R)),C},{}),cancel:C=>{for(let L=0;L<bf.length;L++)c[bf[L]].cancel(C)},state:s,steps:c}}const{schedule:$e,cancel:Ca,state:Bn,steps:ym}=EE(typeof requestAnimationFrame<"u"?requestAnimationFrame:Bi,!0);let od;function Aw(){od=void 0}const Jn={now:()=>(od===void 0&&Jn.set(Bn.isProcessing||lr.useManualTiming?Bn.timestamp:performance.now()),od),set:e=>{od=e,queueMicrotask(Aw)}},TE=e=>t=>typeof t=="string"&&t.startsWith(e),AE=TE("--"),Rw=TE("var(--"),vv=e=>Rw(e)?Cw.test(e.split("/*")[0].trim()):!1,Cw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function r1(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const cl={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ou={...cl,transform:e=>Ra(0,1,e)},Mf={...cl,default:1},Ru=e=>Math.round(e*1e5)/1e5,_v=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ww(e){return e==null}const Dw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,yv=(e,t)=>n=>!!(typeof n=="string"&&Dw.test(n)&&n.startsWith(e)||t&&!ww(n)&&Object.prototype.hasOwnProperty.call(n,t)),RE=(e,t,n)=>a=>{if(typeof a!="string")return a;const[s,l,c,f]=a.match(_v);return{[e]:parseFloat(s),[t]:parseFloat(l),[n]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},Lw=e=>Ra(0,255,e),xm={...cl,transform:e=>Math.round(Lw(e))},Ds={test:yv("rgb","red"),parse:RE("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:a=1})=>"rgba("+xm.transform(e)+", "+xm.transform(t)+", "+xm.transform(n)+", "+Ru(Ou.transform(a))+")"};function Uw(e){let t="",n="",a="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),a=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),a=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,a+=a,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const C0={test:yv("#"),parse:Uw,transform:Ds.transform},Zu=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qr=Zu("deg"),ba=Zu("%"),$t=Zu("px"),Pw=Zu("vh"),Nw=Zu("vw"),s1={...ba,parse:e=>ba.parse(e)/100,transform:e=>ba.transform(e*100)},Ho={test:yv("hsl","hue"),parse:RE("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(e)+", "+ba.transform(Ru(t))+", "+ba.transform(Ru(n))+", "+Ru(Ou.transform(a))+")"},Mn={test:e=>Ds.test(e)||C0.test(e)||Ho.test(e),parse:e=>Ds.test(e)?Ds.parse(e):Ho.test(e)?Ho.parse(e):C0.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Ds.transform(e):Ho.transform(e),getAnimatableNone:e=>{const t=Mn.parse(e);return t.alpha=0,Mn.transform(t)}},Ow=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Fw(e){return isNaN(e)&&typeof e=="string"&&(e.match(_v)?.length||0)+(e.match(Ow)?.length||0)>0}const CE="number",wE="color",Iw="var",Bw="var(",o1="${}",zw=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Fu(e){const t=e.toString(),n=[],a={color:[],number:[],var:[]},s=[];let l=0;const f=t.replace(zw,d=>(Mn.test(d)?(a.color.push(l),s.push(wE),n.push(Mn.parse(d))):d.startsWith(Bw)?(a.var.push(l),s.push(Iw),n.push(d)):(a.number.push(l),s.push(CE),n.push(parseFloat(d))),++l,o1)).split(o1);return{values:n,split:f,indexes:a,types:s}}function DE(e){return Fu(e).values}function LE(e){const{split:t,types:n}=Fu(e),a=t.length;return s=>{let l="";for(let c=0;c<a;c++)if(l+=t[c],s[c]!==void 0){const f=n[c];f===CE?l+=Ru(s[c]):f===wE?l+=Mn.transform(s[c]):l+=s[c]}return l}}const Vw=e=>typeof e=="number"?0:Mn.test(e)?Mn.getAnimatableNone(e):e;function Hw(e){const t=DE(e);return LE(e)(t.map(Vw))}const aa={test:Fw,parse:DE,createTransformer:LE,getAnimatableNone:Hw};function Sm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Gw({hue:e,saturation:t,lightness:n,alpha:a}){e/=360,t/=100,n/=100;let s=0,l=0,c=0;if(!t)s=l=c=n;else{const f=n<.5?n*(1+t):n+t-n*t,d=2*n-f;s=Sm(d,f,e+1/3),l=Sm(d,f,e),c=Sm(d,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:a}}function Ad(e,t){return n=>n>0?t:e}const on=(e,t,n)=>e+(t-e)*n,bm=(e,t,n)=>{const a=e*e,s=n*(t*t-a)+a;return s<0?0:Math.sqrt(s)},kw=[C0,Ds,Ho],Xw=e=>kw.find(t=>t.test(e));function l1(e){const t=Xw(e);if(!t)return!1;let n=t.parse(e);return t===Ho&&(n=Gw(n)),n}const u1=(e,t)=>{const n=l1(e),a=l1(t);if(!n||!a)return Ad(e,t);const s={...n};return l=>(s.red=bm(n.red,a.red,l),s.green=bm(n.green,a.green,l),s.blue=bm(n.blue,a.blue,l),s.alpha=on(n.alpha,a.alpha,l),Ds.transform(s))},w0=new Set(["none","hidden"]);function Ww(e,t){return w0.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function qw(e,t){return n=>on(e,t,n)}function xv(e){return typeof e=="number"?qw:typeof e=="string"?vv(e)?Ad:Mn.test(e)?u1:$w:Array.isArray(e)?UE:typeof e=="object"?Mn.test(e)?u1:Yw:Ad}function UE(e,t){const n=[...e],a=n.length,s=e.map((l,c)=>xv(l)(l,t[c]));return l=>{for(let c=0;c<a;c++)n[c]=s[c](l);return n}}function Yw(e,t){const n={...e,...t},a={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(a[s]=xv(e[s])(e[s],t[s]));return s=>{for(const l in a)n[l]=a[l](s);return n}}function jw(e,t){const n=[],a={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const l=t.types[s],c=e.indexes[l][a[l]],f=e.values[c]??0;n[s]=f,a[l]++}return n}const $w=(e,t)=>{const n=aa.createTransformer(t),a=Fu(e),s=Fu(t);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?w0.has(e)&&!s.values.length||w0.has(t)&&!a.values.length?Ww(e,t):$u(UE(jw(a,s),s.values),n):Ad(e,t)};function PE(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?on(e,t,n):xv(e)(e,t)}const Kw=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>$e.update(t,n),stop:()=>Ca(t),now:()=>Bn.isProcessing?Bn.timestamp:Jn.now()}},NE=(e,t,n=10)=>{let a="";const s=Math.max(Math.round(t/n),2);for(let l=0;l<s;l++)a+=Math.round(e(l/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Rd=2e4;function Sv(e){let t=0;const n=50;let a=e.next(t);for(;!a.done&&t<Rd;)t+=n,a=e.next(t);return t>=Rd?1/0:t}function Zw(e,t=100,n){const a=n({...e,keyframes:[0,t]}),s=Math.min(Sv(a),Rd);return{type:"keyframes",ease:l=>a.next(s*l).value/t,duration:Ii(s)}}const Qw=5;function OE(e,t,n){const a=Math.max(t-Qw,0);return hE(n-e(a),t-a)}const cn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Mm=.001;function Jw({duration:e=cn.duration,bounce:t=cn.bounce,velocity:n=cn.velocity,mass:a=cn.mass}){let s,l,c=1-t;c=Ra(cn.minDamping,cn.maxDamping,c),e=Ra(cn.minDuration,cn.maxDuration,Ii(e)),c<1?(s=h=>{const m=h*c,v=m*e,_=m-n,x=D0(h,c),b=Math.exp(-v);return Mm-_/x*b},l=h=>{const v=h*c*e,_=v*n+n,x=Math.pow(c,2)*Math.pow(h,2)*e,b=Math.exp(-v),M=D0(Math.pow(h,2),c);return(-s(h)+Mm>0?-1:1)*((_-x)*b)/M}):(s=h=>{const m=Math.exp(-h*e),v=(h-n)*e+1;return-Mm+m*v},l=h=>{const m=Math.exp(-h*e),v=(n-h)*(e*e);return m*v});const f=5/e,d=eD(s,l,f);if(e=ia(e),isNaN(d))return{stiffness:cn.stiffness,damping:cn.damping,duration:e};{const h=Math.pow(d,2)*a;return{stiffness:h,damping:c*2*Math.sqrt(a*h),duration:e}}}const tD=12;function eD(e,t,n){let a=n;for(let s=1;s<tD;s++)a=a-e(a)/t(a);return a}function D0(e,t){return e*Math.sqrt(1-t*t)}const nD=["duration","bounce"],iD=["stiffness","damping","mass"];function c1(e,t){return t.some(n=>e[n]!==void 0)}function aD(e){let t={velocity:cn.velocity,stiffness:cn.stiffness,damping:cn.damping,mass:cn.mass,isResolvedFromDuration:!1,...e};if(!c1(e,iD)&&c1(e,nD))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,a=2*Math.PI/(n*1.2),s=a*a,l=2*Ra(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:cn.mass,stiffness:s,damping:l}}else{const n=Jw({...e,velocity:0});t={...t,...n,mass:cn.mass},t.isResolvedFromDuration=!0}return t}function Cd(e=cn.visualDuration,t=cn.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:a,restDelta:s}=n;const l=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:_,isResolvedFromDuration:x}=aD({...n,velocity:-Ii(n.velocity||0)}),b=_||0,M=h/(2*Math.sqrt(d*m)),y=c-l,S=Ii(Math.sqrt(d/m)),T=Math.abs(y)<5;a||(a=T?cn.restSpeed.granular:cn.restSpeed.default),s||(s=T?cn.restDelta.granular:cn.restDelta.default);let C;if(M<1){const w=D0(S,M);C=O=>{const F=Math.exp(-M*S*O);return c-F*((b+M*S*y)/w*Math.sin(w*O)+y*Math.cos(w*O))}}else if(M===1)C=w=>c-Math.exp(-S*w)*(y+(b+S*y)*w);else{const w=S*Math.sqrt(M*M-1);C=O=>{const F=Math.exp(-M*S*O),R=Math.min(w*O,300);return c-F*((b+M*S*y)*Math.sinh(R)+w*y*Math.cosh(R))/w}}const L={calculatedDuration:x&&v||null,next:w=>{const O=C(w);if(x)f.done=w>=v;else{let F=w===0?b:0;M<1&&(F=w===0?ia(b):OE(C,w,O));const R=Math.abs(F)<=a,P=Math.abs(c-O)<=s;f.done=R&&P}return f.value=f.done?c:O,f},toString:()=>{const w=Math.min(Sv(L),Rd),O=NE(F=>L.next(w*F).value,w,30);return w+"ms "+O},toTransition:()=>{}};return L}Cd.applyToOptions=e=>{const t=Zw(e,100,Cd);return e.ease=t.ease,e.duration=ia(t.duration),e.type="keyframes",e};function L0({keyframes:e,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=e[0],_={done:!1,value:v},x=R=>f!==void 0&&R<f||d!==void 0&&R>d,b=R=>f===void 0?d:d===void 0||Math.abs(f-R)<Math.abs(d-R)?f:d;let M=n*t;const y=v+M,S=c===void 0?y:c(y);S!==y&&(M=S-v);const T=R=>-M*Math.exp(-R/a),C=R=>S+T(R),L=R=>{const P=T(R),tt=C(R);_.done=Math.abs(P)<=h,_.value=_.done?S:tt};let w,O;const F=R=>{x(_.value)&&(w=R,O=Cd({keyframes:[_.value,b(_.value)],velocity:OE(C,R,_.value),damping:s,stiffness:l,restDelta:h,restSpeed:m}))};return F(0),{calculatedDuration:null,next:R=>{let P=!1;return!O&&w===void 0&&(P=!0,L(R),F(R)),w!==void 0&&R>=w?O.next(R-w):(!P&&L(R),_)}}}function rD(e,t,n){const a=[],s=n||lr.mix||PE,l=e.length-1;for(let c=0;c<l;c++){let f=s(e[c],e[c+1]);if(t){const d=Array.isArray(t)?t[c]||Bi:t;f=$u(d,f)}a.push(f)}return a}function FE(e,t,{clamp:n=!0,ease:a,mixer:s}={}){const l=e.length;if(hv(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const c=e[0]===e[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const f=rD(t,a,s),d=f.length,h=m=>{if(c&&m<e[0])return t[0];let v=0;if(d>1)for(;v<e.length-2&&!(m<e[v+1]);v++);const _=Nu(e[v],e[v+1],m);return f[v](_)};return n?m=>h(Ra(e[0],e[l-1],m)):h}function sD(e,t){const n=e[e.length-1];for(let a=1;a<=t;a++){const s=Nu(0,t,a);e.push(on(n,1,s))}}function oD(e){const t=[0];return sD(t,e.length-1),t}function lD(e,t){return e.map(n=>n*t)}function uD(e,t){return e.map(()=>t||bE).splice(0,e.length-1)}function Cu({duration:e=300,keyframes:t,times:n,ease:a="easeInOut"}){const s=Sw(a)?a.map(a1):a1(a),l={done:!1,value:t[0]},c=lD(n&&n.length===t.length?n:oD(t),e),f=FE(c,t,{ease:Array.isArray(s)?s:uD(t,s)});return{calculatedDuration:e,next:d=>(l.value=f(d),l.done=d>=e,l)}}const cD=e=>e!==null;function bv(e,{repeat:t,repeatType:n="loop"},a,s=1){const l=e.filter(cD),f=s<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const fD={decay:L0,inertia:L0,tween:Cu,keyframes:Cu,spring:Cd};function IE(e){typeof e.type=="string"&&(e.type=fD[e.type])}class Mv{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const dD=e=>e/100;class Ev extends Mv{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==Jn.now()&&this.tick(Jn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;IE(t);const{type:n=Cu,repeat:a=0,repeatDelay:s=0,repeatType:l,velocity:c=0}=t;let{keyframes:f}=t;const d=n||Cu;d!==Cu&&typeof f[0]!="number"&&(this.mixKeyframes=$u(dD,PE(f[0],f[1])),f=[0,100]);const h=d({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...t,keyframes:[...f].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Sv(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=h}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:s,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return a.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:_,repeatDelay:x,type:b,onUpdate:M,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),T=this.playbackSpeed>=0?S<0:S>s;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let C=this.currentTime,L=a;if(v){const R=Math.min(this.currentTime,s)/f;let P=Math.floor(R),tt=R%1;!tt&&R>=1&&(tt=1),tt===1&&P--,P=Math.min(P,v+1),P%2&&(_==="reverse"?(tt=1-tt,x&&(tt-=x/f)):_==="mirror"&&(L=c)),C=Ra(0,1,tt)*f}const w=T?{done:!1,value:m[0]}:L.next(C);l&&(w.value=l(w.value));let{done:O}=w;!T&&d!==null&&(O=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&O);return F&&b!==L0&&(w.value=bv(m,this.options,y,this.speed)),M&&M(w.value),F&&this.finish(),w}then(t,n){return this.finished.then(t,n)}get duration(){return Ii(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ii(t)}get time(){return Ii(this.currentTime)}set time(t){t=ia(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(Jn.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Ii(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=Kw,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Jn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function hD(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Ls=e=>e*180/Math.PI,U0=e=>{const t=Ls(Math.atan2(e[1],e[0]));return P0(t)},pD={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:U0,rotateZ:U0,skewX:e=>Ls(Math.atan(e[1])),skewY:e=>Ls(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},P0=e=>(e=e%360,e<0&&(e+=360),e),f1=U0,d1=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),h1=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),mD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:d1,scaleY:h1,scale:e=>(d1(e)+h1(e))/2,rotateX:e=>P0(Ls(Math.atan2(e[6],e[5]))),rotateY:e=>P0(Ls(Math.atan2(-e[2],e[0]))),rotateZ:f1,rotate:f1,skewX:e=>Ls(Math.atan(e[4])),skewY:e=>Ls(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function N0(e){return e.includes("scale")?1:0}function O0(e,t){if(!e||e==="none")return N0(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(n)a=mD,s=n;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=pD,s=f}if(!s)return N0(t);const l=a[t],c=s[1].split(",").map(vD);return typeof l=="function"?l(c):c[l]}const gD=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return O0(n,t)};function vD(e){return parseFloat(e.trim())}const fl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dl=new Set(fl),p1=e=>e===cl||e===$t,_D=new Set(["x","y","z"]),yD=fl.filter(e=>!_D.has(e));function xD(e){const t=[];return yD.forEach(n=>{const a=e.getValue(n);a!==void 0&&(t.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),t}const jr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>O0(t,"x"),y:(e,{transform:t})=>O0(t,"y")};jr.translateX=jr.x;jr.translateY=jr.y;const Fs=new Set;let F0=!1,I0=!1,B0=!1;function BE(){if(I0){const e=Array.from(Fs).filter(a=>a.needsMeasurement),t=new Set(e.map(a=>a.element)),n=new Map;t.forEach(a=>{const s=xD(a);s.length&&(n.set(a,s),a.render())}),e.forEach(a=>a.measureInitialState()),t.forEach(a=>{a.render();const s=n.get(a);s&&s.forEach(([l,c])=>{a.getValue(l)?.set(c)})}),e.forEach(a=>a.measureEndState()),e.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}I0=!1,F0=!1,Fs.forEach(e=>e.complete(B0)),Fs.clear()}function zE(){Fs.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(I0=!0)})}function SD(){B0=!0,zE(),BE(),B0=!1}class Tv{constructor(t,n,a,s,l,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=a,this.motionValue=s,this.element=l,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Fs.add(this),F0||(F0=!0,$e.read(zE),$e.resolveKeyframes(BE))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:a,motionValue:s}=this;if(t[0]===null){const l=s?.get(),c=t[t.length-1];if(l!==void 0)t[0]=l;else if(a&&n){const f=a.readValue(n,c);f!=null&&(t[0]=f)}t[0]===void 0&&(t[0]=c),s&&l===void 0&&s.set(t[0])}hD(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),Fs.delete(this)}cancel(){this.state==="scheduled"&&(Fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const bD=e=>e.startsWith("--");function MD(e,t,n){bD(t)?e.style.setProperty(t,n):e.style[t]=n}const ED={};function VE(e,t){const n=dE(e);return()=>ED[t]??n()}const TD=VE(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),HE=VE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),bu=([e,t,n,a])=>`cubic-bezier(${e}, ${t}, ${n}, ${a})`,m1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:bu([0,.65,.55,1]),circOut:bu([.55,0,1,.45]),backIn:bu([.31,.01,.66,-.59]),backOut:bu([.33,1.53,.69,.99])};function GE(e,t){if(e)return typeof e=="function"?HE()?NE(e,t):"ease-out":ME(e)?bu(e):Array.isArray(e)?e.map(n=>GE(n,t)||m1.easeOut):m1[e]}function AD(e,t,n,{delay:a=0,duration:s=300,repeat:l=0,repeatType:c="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[t]:n};d&&(m.offset=d);const v=GE(f,s);Array.isArray(v)&&(m.easing=v);const _={delay:a,duration:s,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"};return h&&(_.pseudoElement=h),e.animate(m,_)}function kE(e){return typeof e=="function"&&"applyToOptions"in e}function RD({type:e,...t}){return kE(e)&&HE()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class XE extends Mv{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:a,keyframes:s,pseudoElement:l,allowFlatten:c=!1,finalKeyframe:f,onComplete:d}=t;this.isPseudoElement=!!l,this.allowFlatten=c,this.options=t,hv(typeof t.type!="string");const h=RD(t);this.animation=AD(n,a,s,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=bv(s,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(m):MD(n,a,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const t=this.options?.element;!this.isPseudoElement&&t?.isConnected&&this.animation.commitStyles?.()}get duration(){const t=this.animation.effect?.getComputedTiming?.().duration||0;return Ii(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ii(t)}get time(){return Ii(Number(this.animation.currentTime)||0)}set time(t){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ia(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,t&&TD()?(this.animation.timeline=t,Bi):n(this)}}const WE={anticipate:yE,backInOut:_E,circInOut:SE};function CD(e){return e in WE}function wD(e){typeof e.ease=="string"&&CD(e.ease)&&(e.ease=WE[e.ease])}const Em=10;class DD extends XE{constructor(t){wD(t),IE(t),super(t),t.startTime!==void 0&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:a,onComplete:s,element:l,...c}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const f=new Ev({...c,autoplay:!1}),d=Math.max(Em,Jn.now()-this.startTime),h=Ra(0,Em,d-Em);n.setWithVelocity(f.sample(Math.max(0,d-h)).value,f.sample(d).value,h),f.stop()}}const g1=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(aa.test(e)||e==="0")&&!e.startsWith("url("));function LD(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function UD(e,t,n,a){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],c=g1(s,t),f=g1(l,t);return!c||!f?!1:LD(e)||(n==="spring"||kE(n))&&a}function z0(e){e.duration=0,e.type="keyframes"}const PD=new Set(["opacity","clipPath","filter","transform"]),ND=dE(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function OD(e){const{motionValue:t,name:n,repeatDelay:a,repeatType:s,damping:l,type:c}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return ND()&&n&&PD.has(n)&&(n!=="transform"||!h)&&!d&&!a&&s!=="mirror"&&l!==0&&c!=="inertia"}const FD=40;class ID extends Mv{constructor({autoplay:t=!0,delay:n=0,type:a="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:c="loop",keyframes:f,name:d,motionValue:h,element:m,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Jn.now();const _={autoplay:t,delay:n,type:a,repeat:s,repeatDelay:l,repeatType:c,name:d,motionValue:h,element:m,...v},x=m?.KeyframeResolver||Tv;this.keyframeResolver=new x(f,(b,M,y)=>this.onKeyframesResolved(b,M,_,!y),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(t,n,a,s){this.keyframeResolver=void 0;const{name:l,type:c,velocity:f,delay:d,isHandoff:h,onUpdate:m}=a;this.resolvedAt=Jn.now(),UD(t,l,c,f)||((lr.instantAnimations||!d)&&m?.(bv(t,a,n)),t[0]=t[t.length-1],z0(a),a.repeat=0);const _={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>FD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:t},x=!h&&OD(_),b=_.motionValue?.owner?.current,M=x?new DD({..._,element:b}):new Ev(_);M.finished.then(()=>{this.notifyFinished()}).catch(Bi),this.pendingTimeline&&(this.stopTimeline=M.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=M}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),SD()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function qE(e,t,n,a=0,s=1){const l=Array.from(e).sort((h,m)=>h.sortNodePosition(m)).indexOf(t),c=e.size,f=(c-1)*a;return typeof n=="function"?n(l,c):s===1?l*a:f-l*a}const BD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function zD(e){const t=BD.exec(e);if(!t)return[,];const[,n,a,s]=t;return[`--${n??a}`,s]}function YE(e,t,n=1){const[a,s]=zD(e);if(!a)return;const l=window.getComputedStyle(t).getPropertyValue(a);if(l){const c=l.trim();return uE(c)?parseFloat(c):c}return vv(s)?YE(s,t,n+1):s}const VD={type:"spring",stiffness:500,damping:25,restSpeed:10},HD=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),GD={type:"keyframes",duration:.8},kD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XD=(e,{keyframes:t})=>t.length>2?GD:dl.has(e)?e.startsWith("scale")?HD(t[1]):VD:kD,WD=e=>e!==null;function qD(e,{repeat:t,repeatType:n="loop"},a){const s=e.filter(WD),l=t&&n!=="loop"&&t%2===1?0:s.length-1;return s[l]}function jE(e,t){if(e?.inherit&&t){const{inherit:n,...a}=e;return{...t,...a}}return e}function Av(e,t){const n=e?.[t]??e?.default??e;return n!==e?jE(n,e):n}function YD({when:e,delay:t,delayChildren:n,staggerChildren:a,staggerDirection:s,repeat:l,repeatType:c,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Rv=(e,t,n,a={},s,l)=>c=>{const f=Av(a,e)||{},d=f.delay||a.delay||0;let{elapsed:h=0}=a;h=h-ia(d);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-h,onUpdate:_=>{t.set(_),f.onUpdate&&f.onUpdate(_)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:s};YD(f)||Object.assign(m,XD(e,m)),m.duration&&(m.duration=ia(m.duration)),m.repeatDelay&&(m.repeatDelay=ia(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(z0(m),m.delay===0&&(v=!0)),(lr.instantAnimations||lr.skipAnimations||s?.shouldSkipAnimations)&&(v=!0,z0(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!l&&t.get()!==void 0){const _=qD(m.keyframes,f);if(_!==void 0){$e.update(()=>{m.onUpdate(_),m.onComplete()});return}}return f.isSync?new Ev(m):new ID(m)};function v1(e){const t=[{},{}];return e?.values.forEach((n,a)=>{t[0][a]=n.get(),t[1][a]=n.getVelocity()}),t}function Cv(e,t,n,a){if(typeof t=="function"){const[s,l]=v1(a);t=t(n!==void 0?n:e.custom,s,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,l]=v1(a);t=t(n!==void 0?n:e.custom,s,l)}return t}function Yo(e,t,n){const a=e.getProps();return Cv(a,t,n!==void 0?n:a.custom,e)}const $E=new Set(["width","height","top","left","right","bottom",...fl]),_1=30,jD=e=>!isNaN(parseFloat(e)),wu={current:void 0};class $D{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const s=Jn.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Jn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=jD(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new pv);const a=this.events[t].add(n);return t==="change"?()=>{a(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return wu.current&&wu.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=Jn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>_1)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,_1);return hE(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Bs(e,t){return new $D(e,t)}const V0=e=>Array.isArray(e);function KD(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Bs(n))}function ZD(e){return V0(e)?e[e.length-1]||0:e}function QD(e,t){const n=Yo(e,t);let{transitionEnd:a={},transition:s={},...l}=n||{};l={...l,...a};for(const c in l){const f=ZD(l[c]);KD(e,c,f)}}const Wn=e=>!!(e&&e.getVelocity);function JD(e){return!!(Wn(e)&&e.add)}function H0(e,t){const n=e.getValue("willChange");if(JD(n))return n.add(t);if(!n&&lr.WillChange){const a=new lr.WillChange("auto");e.addValue("willChange",a),a.add(t)}}function wv(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const tL="framerAppearId",KE="data-"+wv(tL);function ZE(e){return e.props[KE]}function eL({protectedKeys:e,needsAnimating:t},n){const a=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,a}function QE(e,t,{delay:n=0,transitionOverride:a,type:s}={}){let{transition:l,transitionEnd:c,...f}=t;const d=e.getDefaultTransition();l=l?jE(l,d):d;const h=l?.reduceMotion;a&&(l=a);const m=[],v=s&&e.animationState&&e.animationState.getState()[s];for(const _ in f){const x=e.getValue(_,e.latestValues[_]??null),b=f[_];if(b===void 0||v&&eL(v,_))continue;const M={delay:n,...Av(l||{},_)},y=x.get();if(y!==void 0&&!x.isAnimating&&!Array.isArray(b)&&b===y&&!M.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const L=ZE(e);if(L){const w=window.MotionHandoffAnimation(L,_,$e);w!==null&&(M.startTime=w,S=!0)}}H0(e,_);const T=h??e.shouldReduceMotion;x.start(Rv(_,x,b,T&&$E.has(_)?{type:!1}:M,e,S));const C=x.animation;C&&m.push(C)}if(c){const _=()=>$e.update(()=>{c&&QD(e,c)});m.length?Promise.all(m).then(_):_()}return m}function G0(e,t,n={}){const a=Yo(e,t,n.type==="exit"?e.presenceContext?.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(s=n.transitionOverride);const l=a?()=>Promise.all(QE(e,a,n)):()=>Promise.resolve(),c=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:v}=s;return nL(e,t,d,h,m,v,n)}:()=>Promise.resolve(),{when:f}=s;if(f){const[d,h]=f==="beforeChildren"?[l,c]:[c,l];return d().then(()=>h())}else return Promise.all([l(),c(n.delay)])}function nL(e,t,n=0,a=0,s=0,l=1,c){const f=[];for(const d of e.variantChildren)d.notify("AnimationStart",t),f.push(G0(d,t,{...c,delay:n+(typeof a=="function"?0:a)+qE(e.variantChildren,d,a,s,l)}).then(()=>d.notify("AnimationComplete",t)));return Promise.all(f)}function iL(e,t,n={}){e.notify("AnimationStart",t);let a;if(Array.isArray(t)){const s=t.map(l=>G0(e,l,n));a=Promise.all(s)}else if(typeof t=="string")a=G0(e,t,n);else{const s=typeof t=="function"?Yo(e,t,n.custom):t;a=Promise.all(QE(e,s,n))}return a.then(()=>{e.notify("AnimationComplete",t)})}const aL={test:e=>e==="auto",parse:e=>e},JE=e=>t=>t.test(e),tT=[cl,$t,ba,qr,Nw,Pw,aL],y1=e=>tT.find(JE(e));function rL(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||fE(e):!0}const sL=new Set(["brightness","contrast","saturate","opacity"]);function oL(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[a]=n.match(_v)||[];if(!a)return e;const s=n.replace(a,"");let l=sL.has(t)?1:0;return a!==n&&(l*=100),t+"("+l+s+")"}const lL=/\b([a-z-]*)\(.*?\)/gu,k0={...aa,getAnimatableNone:e=>{const t=e.match(lL);return t?t.map(oL).join(" "):e}},X0={...aa,getAnimatableNone:e=>{const t=aa.parse(e);return aa.createTransformer(e)(t.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},x1={...cl,transform:Math.round},uL={rotate:qr,rotateX:qr,rotateY:qr,rotateZ:qr,scale:Mf,scaleX:Mf,scaleY:Mf,scaleZ:Mf,skew:qr,skewX:qr,skewY:qr,distance:$t,translateX:$t,translateY:$t,translateZ:$t,x:$t,y:$t,z:$t,perspective:$t,transformPerspective:$t,opacity:Ou,originX:s1,originY:s1,originZ:$t},Dv={borderWidth:$t,borderTopWidth:$t,borderRightWidth:$t,borderBottomWidth:$t,borderLeftWidth:$t,borderRadius:$t,borderTopLeftRadius:$t,borderTopRightRadius:$t,borderBottomRightRadius:$t,borderBottomLeftRadius:$t,width:$t,maxWidth:$t,height:$t,maxHeight:$t,top:$t,right:$t,bottom:$t,left:$t,inset:$t,insetBlock:$t,insetBlockStart:$t,insetBlockEnd:$t,insetInline:$t,insetInlineStart:$t,insetInlineEnd:$t,padding:$t,paddingTop:$t,paddingRight:$t,paddingBottom:$t,paddingLeft:$t,paddingBlock:$t,paddingBlockStart:$t,paddingBlockEnd:$t,paddingInline:$t,paddingInlineStart:$t,paddingInlineEnd:$t,margin:$t,marginTop:$t,marginRight:$t,marginBottom:$t,marginLeft:$t,marginBlock:$t,marginBlockStart:$t,marginBlockEnd:$t,marginInline:$t,marginInlineStart:$t,marginInlineEnd:$t,fontSize:$t,backgroundPositionX:$t,backgroundPositionY:$t,...uL,zIndex:x1,fillOpacity:Ou,strokeOpacity:Ou,numOctaves:x1},cL={...Dv,color:Mn,backgroundColor:Mn,outlineColor:Mn,fill:Mn,stroke:Mn,borderColor:Mn,borderTopColor:Mn,borderRightColor:Mn,borderBottomColor:Mn,borderLeftColor:Mn,filter:k0,WebkitFilter:k0,mask:X0,WebkitMask:X0},eT=e=>cL[e],fL=new Set([k0,X0]);function nT(e,t){let n=eT(e);return fL.has(n)||(n=aa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const dL=new Set(["auto","none","0"]);function hL(e,t,n){let a=0,s;for(;a<e.length&&!s;){const l=e[a];typeof l=="string"&&!dL.has(l)&&Fu(l).values.length&&(s=e[a]),a++}if(s&&n)for(const l of t)e[l]=nT(n,s)}class pL extends Tv{constructor(t,n,a,s,l){super(t,n,a,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<t.length;m++){let v=t[m];if(typeof v=="string"&&(v=v.trim(),vv(v))){const _=YE(v,n.current);_!==void 0&&(t[m]=_),m===t.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!$E.has(a)||t.length!==2)return;const[s,l]=t,c=y1(s),f=y1(l),d=r1(s),h=r1(l);if(d!==h&&jr[a]){this.needsMeasurement=!0;return}if(c!==f)if(p1(c)&&p1(f))for(let m=0;m<t.length;m++){const v=t[m];typeof v=="string"&&(t[m]=parseFloat(v))}else jr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,a=[];for(let s=0;s<t.length;s++)(t[s]===null||rL(t[s]))&&a.push(s);a.length&&hL(t,a,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:a}=this;if(!t||!t.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=jr[a](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(a,s).jump(s,!1)}measureEndState(){const{element:t,name:n,unresolvedKeyframes:a}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const l=a.length-1,c=a[l];a[l]=jr[n](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,d])=>{t.getValue(f).set(d)}),this.resolveNoneKeyframes()}}const mL=new Set(["opacity","clipPath","filter","transform"]);function iT(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let a=document;const s=n?.[e]??a.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(a=>a!=null)}const aT=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function gL(e){return cE(e)&&"offsetHeight"in e}const{schedule:Lv}=EE(queueMicrotask,!1),Qi={x:!1,y:!1};function rT(){return Qi.x||Qi.y}function vL(e){return e==="x"||e==="y"?Qi[e]?null:(Qi[e]=!0,()=>{Qi[e]=!1}):Qi.x||Qi.y?null:(Qi.x=Qi.y=!0,()=>{Qi.x=Qi.y=!1})}function sT(e,t){const n=iT(e),a=new AbortController,s={passive:!0,...t,signal:a.signal};return[n,s,()=>a.abort()]}function _L(e){return!(e.pointerType==="touch"||rT())}function yL(e,t,n={}){const[a,s,l]=sT(e,n);return a.forEach(c=>{let f=!1,d=!1,h;const m=()=>{c.removeEventListener("pointerleave",b)},v=y=>{h&&(h(y),h=void 0),m()},_=y=>{f=!1,window.removeEventListener("pointerup",_),window.removeEventListener("pointercancel",_),d&&(d=!1,v(y))},x=()=>{f=!0,window.addEventListener("pointerup",_,s),window.addEventListener("pointercancel",_,s)},b=y=>{if(y.pointerType!=="touch"){if(f){d=!0;return}v(y)}},M=y=>{if(!_L(y))return;d=!1;const S=t(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",b,s))};c.addEventListener("pointerenter",M,s),c.addEventListener("pointerdown",x,s)}),l}const oT=(e,t)=>t?e===t?!0:oT(e,t.parentElement):!1,Uv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,xL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function SL(e){return xL.has(e.tagName)||e.isContentEditable===!0}const bL=new Set(["INPUT","SELECT","TEXTAREA"]);function ML(e){return bL.has(e.tagName)||e.isContentEditable===!0}const ld=new WeakSet;function S1(e){return t=>{t.key==="Enter"&&e(t)}}function Tm(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const EL=(e,t)=>{const n=e.currentTarget;if(!n)return;const a=S1(()=>{if(ld.has(n))return;Tm(n,"down");const s=S1(()=>{Tm(n,"up")}),l=()=>Tm(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",l,t)});n.addEventListener("keydown",a,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),t)};function b1(e){return Uv(e)&&!rT()}const M1=new WeakSet;function TL(e,t,n={}){const[a,s,l]=sT(e,n),c=f=>{const d=f.currentTarget;if(!b1(f)||M1.has(f))return;ld.add(d),n.stopPropagation&&M1.add(f);const h=t(d,f),m=(x,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",_),ld.has(d)&&ld.delete(d),b1(x)&&typeof h=="function"&&h(x,{success:b})},v=x=>{m(x,d===window||d===document||n.useGlobalTarget||oT(d,x.target))},_=x=>{m(x,!1)};window.addEventListener("pointerup",v,s),window.addEventListener("pointercancel",_,s)};return a.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",c,s),gL(f)&&(f.addEventListener("focus",h=>EL(h,s)),!SL(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Pv(e){return cE(e)&&"ownerSVGElement"in e}const ud=new WeakMap;let cd;const lT=(e,t,n)=>(a,s)=>s&&s[0]?s[0][e+"Size"]:Pv(a)&&"getBBox"in a?a.getBBox()[t]:a[n],AL=lT("inline","width","offsetWidth"),RL=lT("block","height","offsetHeight");function CL({target:e,borderBoxSize:t}){ud.get(e)?.forEach(n=>{n(e,{get width(){return AL(e,t)},get height(){return RL(e,t)}})})}function wL(e){e.forEach(CL)}function DL(){typeof ResizeObserver>"u"||(cd=new ResizeObserver(wL))}function LL(e,t){cd||DL();const n=iT(e);return n.forEach(a=>{let s=ud.get(a);s||(s=new Set,ud.set(a,s)),s.add(t),cd?.observe(a)}),()=>{n.forEach(a=>{const s=ud.get(a);s?.delete(t),s?.size||cd?.unobserve(a)})}}const fd=new Set;let Go;function UL(){Go=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};fd.forEach(t=>t(e))},window.addEventListener("resize",Go)}function PL(e){return fd.add(e),Go||UL(),()=>{fd.delete(e),!fd.size&&typeof Go=="function"&&(window.removeEventListener("resize",Go),Go=void 0)}}function E1(e,t){return typeof e=="function"?PL(e):LL(e,t)}function NL(e){return Pv(e)&&e.tagName==="svg"}function OL(...e){const t=!Array.isArray(e[0]),n=t?0:-1,a=e[0+n],s=e[1+n],l=e[2+n],c=e[3+n],f=FE(s,l,c);return t?f(a):f}const FL=[...tT,Mn,aa],IL=e=>FL.find(JE(e)),T1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ko=()=>({x:T1(),y:T1()}),A1=()=>({min:0,max:0}),Cn=()=>({x:A1(),y:A1()}),BL=new WeakMap;function Yd(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Iu(e){return typeof e=="string"||Array.isArray(e)}const Nv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ov=["initial",...Nv];function jd(e){return Yd(e.animate)||Ov.some(t=>Iu(e[t]))}function uT(e){return!!(jd(e)||e.variants)}function zL(e,t,n){for(const a in t){const s=t[a],l=n[a];if(Wn(s))e.addValue(a,s);else if(Wn(l))e.addValue(a,Bs(s,{owner:e}));else if(l!==s)if(e.hasValue(a)){const c=e.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=e.getStaticValue(a);e.addValue(a,Bs(c!==void 0?c:s,{owner:e}))}}for(const a in n)t[a]===void 0&&e.removeValue(a);return t}const W0={current:null},cT={current:!1},VL=typeof window<"u";function HL(){if(cT.current=!0,!!VL)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>W0.current=e.matches;e.addEventListener("change",t),t()}else W0.current=!1}const R1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let wd={};function fT(e){wd=e}function GL(){return wd}class kL{scrapeMotionValuesFromProps(t,n,a){return{}}constructor({parent:t,props:n,presenceContext:a,reducedMotionConfig:s,skipAnimations:l,blockInitialAnimation:c,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Tv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Jn.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,$e.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=m,this.parent=t,this.props=n,this.presenceContext=a,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=l,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=jd(n),this.isVariantNode=uT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:v,..._}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in _){const b=_[x];h[x]!==void 0&&Wn(b)&&b.set(h[x])}}mount(t){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=t,BL.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,a)=>this.bindToMotionValue(a,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(cT.current||HL(),this.shouldReduceMotion=W0.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Ca(this.notifyUpdate),Ca(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&mL.has(t)&&this.current instanceof HTMLElement){const{factory:c,keyframes:f,times:d,ease:h,duration:m}=n.accelerate,v=new XE({element:this.current,name:t,keyframes:f,times:d,ease:h,duration:ia(m)}),_=c(v);this.valueSubscriptions.set(t,()=>{_(),v.cancel()});return}const a=dl.has(t);a&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",c=>{this.latestValues[t]=c,this.props.onUpdate&&$e.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),l&&l(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in wd){const n=wd[t];if(!n)continue;const{isEnabled:a,Feature:s}=n;if(!this.features[t]&&s&&a(this.props)&&(this.features[t]=new s(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Cn()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<R1.length;a++){const s=R1[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,c=t[l];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=zL(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const a=this.values.get(t);n!==a&&(a&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let a=this.values.get(t);return a===void 0&&n!==void 0&&(a=Bs(n===null?void 0:n,{owner:this}),this.addValue(t,a)),a}readValue(t,n){let a=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return a!=null&&(typeof a=="string"&&(uE(a)||fE(a))?a=parseFloat(a):!IL(a)&&aa.test(n)&&(a=nT(t,n)),this.setBaseTarget(t,Wn(a)?a.get():a)),Wn(a)?a.get():a}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const l=Cv(this.props,n,this.presenceContext?.custom);l&&(a=l[t])}if(n&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Wn(s)?s:this.initialValues[t]!==void 0&&a===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new pv),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){Lv.render(this.render)}}class dT extends kL{constructor(){super(...arguments),this.KeyframeResolver=pL}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const a=t.style;return a?a[n]:void 0}removeValueFromRenderState(t,{vars:n,style:a}){delete n[t],delete a[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Wn(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Zr{constructor(t){this.isMounted=!1,this.node=t}update(){}}function hT({top:e,left:t,right:n,bottom:a}){return{x:{min:t,max:n},y:{min:e,max:a}}}function XL({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function WL(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),a=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function Am(e){return e===void 0||e===1}function q0({scale:e,scaleX:t,scaleY:n}){return!Am(e)||!Am(t)||!Am(n)}function As(e){return q0(e)||pT(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function pT(e){return C1(e.x)||C1(e.y)}function C1(e){return e&&e!=="0%"}function Dd(e,t,n){const a=e-n,s=t*a;return n+s}function w1(e,t,n,a,s){return s!==void 0&&(e=Dd(e,s,a)),Dd(e,n,a)+t}function Y0(e,t=0,n=1,a,s){e.min=w1(e.min,t,n,a,s),e.max=w1(e.max,t,n,a,s)}function mT(e,{x:t,y:n}){Y0(e.x,t.translate,t.scale,t.originPoint),Y0(e.y,n.translate,n.scale,n.originPoint)}const D1=.999999999999,L1=1.0000000000001;function qL(e,t,n,a=!1){const s=n.length;if(!s)return;t.x=t.y=1;let l,c;for(let f=0;f<s;f++){l=n[f],c=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Wo(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(t.x*=c.x.scale,t.y*=c.y.scale,mT(e,c)),a&&As(l.latestValues)&&Wo(e,l.latestValues))}t.x<L1&&t.x>D1&&(t.x=1),t.y<L1&&t.y>D1&&(t.y=1)}function Xo(e,t){e.min=e.min+t,e.max=e.max+t}function U1(e,t,n,a,s=.5){const l=on(e.min,e.max,s);Y0(e,t,n,l,a)}function Wo(e,t){U1(e.x,t.x,t.scaleX,t.scale,t.originX),U1(e.y,t.y,t.scaleY,t.scale,t.originY)}function gT(e,t){return hT(WL(e.getBoundingClientRect(),t))}function YL(e,t,n){const a=gT(e,n),{scroll:s}=t;return s&&(Xo(a.x,s.offset.x),Xo(a.y,s.offset.y)),a}const jL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},$L=fl.length;function KL(e,t,n){let a="",s=!0;for(let l=0;l<$L;l++){const c=fl[l],f=e[c];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(c.startsWith("scale")?1:0);else{const h=parseFloat(f);d=c.startsWith("scale")?h===1:h===0}if(!d||n){const h=aT(f,Dv[c]);if(!d){s=!1;const m=jL[c]||c;a+=`${m}(${h}) `}n&&(t[c]=h)}}return a=a.trim(),n?a=n(t,s?"":a):s&&(a="none"),a}function Fv(e,t,n){const{style:a,vars:s,transformOrigin:l}=e;let c=!1,f=!1;for(const d in t){const h=t[d];if(dl.has(d)){c=!0;continue}else if(AE(d)){s[d]=h;continue}else{const m=aT(h,Dv[d]);d.startsWith("origin")?(f=!0,l[d]=m):a[d]=m}}if(t.transform||(c||n?a.transform=KL(t,e.transform,n):a.transform&&(a.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;a.transformOrigin=`${d} ${h} ${m}`}}function vT(e,{style:t,vars:n},a,s){const l=e.style;let c;for(c in t)l[c]=t[c];s?.applyProjectionStyles(l,a);for(c in n)l.setProperty(c,n[c])}function P1(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const du={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if($t.test(e))e=parseFloat(e);else return e;const n=P1(e,t.target.x),a=P1(e,t.target.y);return`${n}% ${a}%`}},ZL={correct:(e,{treeScale:t,projectionDelta:n})=>{const a=e,s=aa.parse(e);if(s.length>5)return a;const l=aa.createTransformer(e),c=typeof s[0]!="number"?1:0,f=n.x.scale*t.x,d=n.y.scale*t.y;s[0+c]/=f,s[1+c]/=d;const h=on(f,d,.5);return typeof s[2+c]=="number"&&(s[2+c]/=h),typeof s[3+c]=="number"&&(s[3+c]/=h),l(s)}},j0={borderRadius:{...du,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:du,borderTopRightRadius:du,borderBottomLeftRadius:du,borderBottomRightRadius:du,boxShadow:ZL};function _T(e,{layout:t,layoutId:n}){return dl.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!j0[e]||e==="opacity")}function Iv(e,t,n){const a=e.style,s=t?.style,l={};if(!a)return l;for(const c in a)(Wn(a[c])||s&&Wn(s[c])||_T(c,e)||n?.getValue(c)?.liveStyle!==void 0)&&(l[c]=a[c]);return l}function QL(e){return window.getComputedStyle(e)}class JL extends dT{constructor(){super(...arguments),this.type="html",this.renderInstance=vT}readValueFromInstance(t,n){if(dl.has(n))return this.projection?.isProjecting?N0(n):gD(t,n);{const a=QL(t),s=(AE(n)?a.getPropertyValue(n):a[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return gT(t,n)}build(t,n,a){Fv(t,n,a.transformTemplate)}scrapeMotionValuesFromProps(t,n,a){return Iv(t,n,a)}}const tU={offset:"stroke-dashoffset",array:"stroke-dasharray"},eU={offset:"strokeDashoffset",array:"strokeDasharray"};function nU(e,t,n=1,a=0,s=!0){e.pathLength=1;const l=s?tU:eU;e[l.offset]=`${-a}`,e[l.array]=`${t} ${n}`}const iU=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function yT(e,{attrX:t,attrY:n,attrScale:a,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...f},d,h,m){if(Fv(e,f,h),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:_}=e;v.transform&&(_.transform=v.transform,delete v.transform),(_.transform||v.transformOrigin)&&(_.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),_.transform&&(_.transformBox=m?.transformBox??"fill-box",delete v.transformBox);for(const x of iU)v[x]!==void 0&&(_[x]=v[x],delete v[x]);t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),s!==void 0&&nU(v,s,l,c,!1)}const xT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),ST=e=>typeof e=="string"&&e.toLowerCase()==="svg";function aU(e,t,n,a){vT(e,t,void 0,a);for(const s in t.attrs)e.setAttribute(xT.has(s)?s:wv(s),t.attrs[s])}function bT(e,t,n){const a=Iv(e,t,n);for(const s in e)if(Wn(e[s])||Wn(t[s])){const l=fl.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[l]=e[s]}return a}class rU extends dT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Cn}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(dl.has(n)){const a=eT(n);return a&&a.default||0}return n=xT.has(n)?n:wv(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,a){return bT(t,n,a)}build(t,n,a){yT(t,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(t,n,a,s){aU(t,n,a,s)}mount(t){this.isSVGTag=ST(t.tagName),super.mount(t)}}const sU=Ov.length;function MT(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?MT(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<sU;n++){const a=Ov[n],s=e.props[a];(Iu(s)||s===!1)&&(t[a]=s)}return t}function ET(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let a=0;a<n;a++)if(t[a]!==e[a])return!1;return!0}const oU=[...Nv].reverse(),lU=Nv.length;function uU(e){return t=>Promise.all(t.map(({animation:n,options:a})=>iL(e,n,a)))}function cU(e){let t=uU(e),n=N1(),a=!0;const s=d=>(h,m)=>{const v=Yo(e,m,d==="exit"?e.presenceContext?.custom:void 0);if(v){const{transition:_,transitionEnd:x,...b}=v;h={...h,...b,...x}}return h};function l(d){t=d(e)}function c(d){const{props:h}=e,m=MT(e.parent)||{},v=[],_=new Set;let x={},b=1/0;for(let y=0;y<lU;y++){const S=oU[y],T=n[S],C=h[S]!==void 0?h[S]:m[S],L=Iu(C),w=S===d?T.isActive:null;w===!1&&(b=y);let O=C===m[S]&&C!==h[S]&&L;if(O&&a&&e.manuallyAnimateOnMount&&(O=!1),T.protectedKeys={...x},!T.isActive&&w===null||!C&&!T.prevProp||Yd(C)||typeof C=="boolean")continue;if(S==="exit"&&T.isActive&&w!==!0){T.prevResolvedValues&&(x={...x,...T.prevResolvedValues});continue}const F=fU(T.prevProp,C);let R=F||S===d&&T.isActive&&!O&&L||y>b&&L,P=!1;const tt=Array.isArray(C)?C:[C];let H=tt.reduce(s(S),{});w===!1&&(H={});const{prevResolvedValues:Z={}}=T,Q={...Z,...H},J=z=>{R=!0,_.has(z)&&(P=!0,_.delete(z)),T.needsAnimating[z]=!0;const it=e.getValue(z);it&&(it.liveStyle=!1)};for(const z in Q){const it=H[z],ct=Z[z];if(x.hasOwnProperty(z))continue;let ht=!1;V0(it)&&V0(ct)?ht=!ET(it,ct):ht=it!==ct,ht?it!=null?J(z):_.add(z):it!==void 0&&_.has(z)?J(z):T.protectedKeys[z]=!0}T.prevProp=C,T.prevResolvedValues=H,T.isActive&&(x={...x,...H}),a&&e.blockInitialAnimation&&(R=!1);const K=O&&F;R&&(!K||P)&&v.push(...tt.map(z=>{const it={type:S};if(typeof z=="string"&&a&&!K&&e.manuallyAnimateOnMount&&e.parent){const{parent:ct}=e,ht=Yo(ct,z);if(ct.enteringChildren&&ht){const{delayChildren:B}=ht.transition||{};it.delay=qE(ct.enteringChildren,e,B)}}return{animation:z,options:it}}))}if(_.size){const y={};if(typeof h.initial!="boolean"){const S=Yo(e,Array.isArray(h.initial)?h.initial[0]:h.initial);S&&S.transition&&(y.transition=S.transition)}_.forEach(S=>{const T=e.getBaseTarget(S),C=e.getValue(S);C&&(C.liveStyle=!0),y[S]=T??null}),v.push({animation:y})}let M=!!v.length;return a&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(M=!1),a=!1,M?t(v):Promise.resolve()}function f(d,h){if(n[d].isActive===h)return Promise.resolve();e.variantChildren?.forEach(v=>v.animationState?.setActive(d,h)),n[d].isActive=h;const m=c(d);for(const v in n)n[v].protectedKeys={};return m}return{animateChanges:c,setActive:f,setAnimateFunction:l,getState:()=>n,reset:()=>{n=N1()}}}function fU(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ET(t,e):!1}function ys(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function N1(){return{animate:ys(!0),whileInView:ys(),whileHover:ys(),whileTap:ys(),whileDrag:ys(),whileFocus:ys(),exit:ys()}}function O1(e,t){e.min=t.min,e.max=t.max}function qi(e,t){O1(e.x,t.x),O1(e.y,t.y)}function F1(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const TT=1e-4,dU=1-TT,hU=1+TT,AT=.01,pU=0-AT,mU=0+AT;function ti(e){return e.max-e.min}function gU(e,t,n){return Math.abs(e-t)<=n}function I1(e,t,n,a=.5){e.origin=a,e.originPoint=on(t.min,t.max,e.origin),e.scale=ti(n)/ti(t),e.translate=on(n.min,n.max,e.origin)-e.originPoint,(e.scale>=dU&&e.scale<=hU||isNaN(e.scale))&&(e.scale=1),(e.translate>=pU&&e.translate<=mU||isNaN(e.translate))&&(e.translate=0)}function Du(e,t,n,a){I1(e.x,t.x,n.x,a?a.originX:void 0),I1(e.y,t.y,n.y,a?a.originY:void 0)}function B1(e,t,n){e.min=n.min+t.min,e.max=e.min+ti(t)}function vU(e,t,n){B1(e.x,t.x,n.x),B1(e.y,t.y,n.y)}function z1(e,t,n){e.min=t.min-n.min,e.max=e.min+ti(t)}function Ld(e,t,n){z1(e.x,t.x,n.x),z1(e.y,t.y,n.y)}function V1(e,t,n,a,s){return e-=t,e=Dd(e,1/n,a),s!==void 0&&(e=Dd(e,1/s,a)),e}function _U(e,t=0,n=1,a=.5,s,l=e,c=e){if(ba.test(t)&&(t=parseFloat(t),t=on(c.min,c.max,t/100)-c.min),typeof t!="number")return;let f=on(l.min,l.max,a);e===l&&(f-=t),e.min=V1(e.min,t,n,f,s),e.max=V1(e.max,t,n,f,s)}function H1(e,t,[n,a,s],l,c){_U(e,t[n],t[a],t[s],t.scale,l,c)}const yU=["x","scaleX","originX"],xU=["y","scaleY","originY"];function G1(e,t,n,a){H1(e.x,t,yU,n?n.x:void 0,a?a.x:void 0),H1(e.y,t,xU,n?n.y:void 0,a?a.y:void 0)}function k1(e){return e.translate===0&&e.scale===1}function RT(e){return k1(e.x)&&k1(e.y)}function X1(e,t){return e.min===t.min&&e.max===t.max}function SU(e,t){return X1(e.x,t.x)&&X1(e.y,t.y)}function W1(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function CT(e,t){return W1(e.x,t.x)&&W1(e.y,t.y)}function q1(e){return ti(e.x)/ti(e.y)}function Y1(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function pa(e){return[e("x"),e("y")]}function bU(e,t,n){let a="";const s=e.x.translate/t.x,l=e.y.translate/t.y,c=n?.z||0;if((s||l||c)&&(a=`translate3d(${s}px, ${l}px, ${c}px) `),(t.x!==1||t.y!==1)&&(a+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:_,skewX:x,skewY:b}=n;h&&(a=`perspective(${h}px) ${a}`),m&&(a+=`rotate(${m}deg) `),v&&(a+=`rotateX(${v}deg) `),_&&(a+=`rotateY(${_}deg) `),x&&(a+=`skewX(${x}deg) `),b&&(a+=`skewY(${b}deg) `)}const f=e.x.scale*t.x,d=e.y.scale*t.y;return(f!==1||d!==1)&&(a+=`scale(${f}, ${d})`),a||"none"}const wT=["TopLeft","TopRight","BottomLeft","BottomRight"],MU=wT.length,j1=e=>typeof e=="string"?parseFloat(e):e,$1=e=>typeof e=="number"||$t.test(e);function EU(e,t,n,a,s,l){s?(e.opacity=on(0,n.opacity??1,TU(a)),e.opacityExit=on(t.opacity??1,0,AU(a))):l&&(e.opacity=on(t.opacity??1,n.opacity??1,a));for(let c=0;c<MU;c++){const f=`border${wT[c]}Radius`;let d=K1(t,f),h=K1(n,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||$1(d)===$1(h)?(e[f]=Math.max(on(j1(d),j1(h),a),0),(ba.test(h)||ba.test(d))&&(e[f]+="%")):e[f]=h}(t.rotate||n.rotate)&&(e.rotate=on(t.rotate||0,n.rotate||0,a))}function K1(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const TU=DT(0,.5,xE),AU=DT(.5,.95,Bi);function DT(e,t,n){return a=>a<e?0:a>t?1:n(Nu(e,t,a))}function RU(e,t,n){const a=Wn(e)?e:Bs(e);return a.start(Rv("",a,t,n)),a.animation}function Bu(e,t,n,a={passive:!0}){return e.addEventListener(t,n,a),()=>e.removeEventListener(t,n)}const CU=(e,t)=>e.depth-t.depth;class wU{constructor(){this.children=[],this.isDirty=!1}add(t){dv(this.children,t),this.isDirty=!0}remove(t){Td(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(CU),this.isDirty=!1,this.children.forEach(t)}}function DU(e,t){const n=Jn.now(),a=({timestamp:s})=>{const l=s-n;l>=t&&(Ca(a),e(l-t))};return $e.setup(a,!0),()=>Ca(a)}function dd(e){return Wn(e)?e.get():e}class LU{constructor(){this.members=[]}add(t){dv(this.members,t);for(let n=this.members.length-1;n>=0;n--){const a=this.members[n];if(a===t||a===this.lead||a===this.prevLead)continue;const s=a.instance;s&&s.isConnected===!1&&a.isPresent!==!1&&!a.snapshot&&Td(this.members,a)}t.scheduleRender()}remove(t){if(Td(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let a;for(let s=n;s>=0;s--){const l=this.members[s],c=l.instance;if(l.isPresent!==!1&&(!c||c.isConnected!==!1)){a=l;break}}return a?(this.promote(a),!0):!1}promote(t,n){const a=this.lead;if(t!==a&&(this.prevLead=a,this.lead=t,t.show(),a)){a.instance&&a.scheduleRender(),t.scheduleRender();const s=a.options.layoutDependency,l=t.options.layoutDependency;if(!(s!==void 0&&l!==void 0&&s===l)){const d=a.instance;d&&d.isConnected===!1&&!a.snapshot||(t.resumeFrom=a,n&&(t.resumeFrom.preserveOpacity=!0),a.snapshot&&(t.snapshot=a.snapshot,t.snapshot.latestValues=a.animationValues||a.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0))}const{crossfade:f}=t.options;f===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:a}=t;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const hd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Rm=["","X","Y","Z"],UU=1e3;let PU=0;function Cm(e,t,n,a){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),a&&(a[e]=0))}function LT(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=ZE(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$e,!(s||l))}const{parent:a}=e;a&&!a.hasCheckedOptimisedAppear&&LT(a)}function UT({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},f=t?.()){this.id=PU++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(FU),this.nodes.forEach(VU),this.nodes.forEach(HU),this.nodes.forEach(IU)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new wU)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new pv),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Pv(c)&&!NL(c),this.instance=c;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),e){let m,v=0;const _=()=>this.root.updateBlockedByResize=!1;$e.read(()=>{v=window.innerWidth}),e(c,()=>{const x=window.innerWidth;x!==v&&(v=x,this.root.updateBlockedByResize=!0,m&&m(),m=DU(_,250),hd.hasAnimatedSinceResize&&(hd.hasAnimatedSinceResize=!1,this.nodes.forEach(J1)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:_,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||qU,{onLayoutAnimationStart:M,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!CT(this.targetLayout,x),T=!v&&_;if(this.options.layoutRoot||this.resumeFrom||T||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...Av(b,"layout"),onPlay:M,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(m,T)}else v||J1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ca(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(GU),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&LT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Z1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Q1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(zU),this.nodes.forEach(NU),this.nodes.forEach(OU)):this.nodes.forEach(Q1),this.clearAllSnapshots();const f=Jn.now();Bn.delta=Ra(0,1e3/60,f-Bn.timestamp),Bn.timestamp=f,Bn.isProcessing=!0,ym.update.process(Bn),ym.preRender.process(Bn),ym.render.process(Bn),Bn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(BU),this.sharedNodes.forEach(kU)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ti(this.snapshot.measuredBox.x)&&!ti(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Cn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const d=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!RT(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&this.instance&&(f||As(this.latestValues)||m)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),YU(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return Cn();const f=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(jU))){const{scroll:h}=this.root;h&&(Xo(f.x,h.offset.x),Xo(f.y,h.offset.y))}return f}removeElementScroll(c){const f=Cn();if(qi(f,c),this.scroll?.wasRoot)return f;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:v}=h;h!==this.root&&m&&v.layoutScroll&&(m.wasRoot&&qi(f,c),Xo(f.x,m.offset.x),Xo(f.y,m.offset.y))}return f}applyTransform(c,f=!1){const d=Cn();qi(d,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Wo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),As(m.latestValues)&&Wo(d,m.latestValues)}return As(this.latestValues)&&Wo(d,this.latestValues),d}removeTransform(c){const f=Cn();qi(f,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!As(h.latestValues))continue;q0(h.latestValues)&&h.updateSnapshot();const m=Cn(),v=h.measurePageBox();qi(m,v),G1(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return As(this.latestValues)&&G1(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Bn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Bn.timestamp;const _=this.getClosestProjectingParent();_&&this.linkedParentVersion!==_.layoutVersion&&!_.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(_&&_.layout?this.createRelativeTarget(_,this.layout.layoutBox,_.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Cn(),this.targetWithTransforms=Cn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),vU(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):qi(this.target,this.layout.layoutBox),mT(this.target,this.targetDelta)):qi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?this.createRelativeTarget(_,this.target,_.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||q0(this.parent.latestValues)||pT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,f,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Cn(),this.relativeTargetOrigin=Cn(),Ld(this.relativeTargetOrigin,f,d),qi(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const c=this.getLead(),f=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Bn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;qi(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,_=this.treeScale.y;qL(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Cn());const{target:x}=c;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(F1(this.prevProjectionDelta.x,this.projectionDelta.x),F1(this.prevProjectionDelta.y,this.projectionDelta.y)),Du(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==_||!Y1(this.projectionDelta.x,this.prevProjectionDelta.x)||!Y1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ko(),this.projectionDelta=ko(),this.projectionDeltaWithTransform=ko()}setAnimationOrigin(c,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=ko();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const _=Cn(),x=d?d.source:void 0,b=this.layout?this.layout.source:void 0,M=x!==b,y=this.getStack(),S=!y||y.members.length<=1,T=!!(M&&!S&&this.options.crossfade===!0&&!this.path.some(WU));this.animationProgress=0;let C;this.mixTargetDelta=L=>{const w=L/1e3;tb(v.x,c.x,w),tb(v.y,c.y,w),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ld(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),XU(this.relativeTarget,this.relativeTargetOrigin,_,w),C&&SU(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Cn()),qi(C,this.relativeTarget)),M&&(this.animationValues=m,EU(m,h,this.latestValues,w,T,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Ca(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{hd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Bs(0)),this.motionValue.jump(0,!1),this.currentAnimation=RU(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(UU),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=c;if(!(!f||!d||!h)){if(this!==c&&this.layout&&h&&PT(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Cn();const v=ti(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const _=ti(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+_}qi(f,d),Wo(f,m),Du(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new LU),this.sharedNodes.get(c).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Cm("z",c,h,this.animationValues);for(let m=0;m<Rm.length;m++)Cm(`rotate${Rm[m]}`,c,h,this.animationValues),Cm(`skew${Rm[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=dd(f?.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=dd(f?.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=bU(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),c.transform=v;const{x:_,y:x}=this.projectionDelta;c.transformOrigin=`${_.origin*100}% ${x.origin*100}% 0`,h.animationValues?c.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in j0){if(m[b]===void 0)continue;const{correct:M,applyTo:y,isCSSVariable:S}=j0[b],T=v==="none"?m[b]:M(m[b],h);if(y){const C=y.length;for(let L=0;L<C;L++)c[y[L]]=T}else S?this.options.visualElement.renderState.vars[b]=T:c[b]=T}this.options.layoutId&&(c.pointerEvents=h===this?dd(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Z1),this.root.sharedNodes.clear()}}}function NU(e){e.updateLayout()}function OU(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:a}=e.layout,{animationType:s}=e.options,l=t.source!==e.layout.source;s==="size"?pa(m=>{const v=l?t.measuredBox[m]:t.layoutBox[m],_=ti(v);v.min=n[m].min,v.max=v.min+_}):PT(s,t.layoutBox,n)&&pa(m=>{const v=l?t.measuredBox[m]:t.layoutBox[m],_=ti(n[m]);v.max=v.min+_,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[m].max=e.relativeTarget[m].min+_)});const c=ko();Du(c,n,t.layoutBox);const f=ko();l?Du(f,e.applyTransform(a,!0),t.measuredBox):Du(f,n,t.layoutBox);const d=!RT(c);let h=!1;if(!e.resumeFrom){const m=e.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:v,layout:_}=m;if(v&&_){const x=Cn();Ld(x,t.layoutBox,v.layoutBox);const b=Cn();Ld(b,n,_.layoutBox),CT(x,b)||(h=!0),m.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=x,e.relativeParent=m)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:f,layoutDelta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(e.isLead()){const{onExitComplete:n}=e.options;n&&n()}e.options.transition=void 0}function FU(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function IU(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function BU(e){e.clearSnapshot()}function Z1(e){e.clearMeasurements()}function Q1(e){e.isLayoutDirty=!1}function zU(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function J1(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function VU(e){e.resolveTargetDelta()}function HU(e){e.calcProjection()}function GU(e){e.resetSkewAndRotation()}function kU(e){e.removeLeadSnapshot()}function tb(e,t,n){e.translate=on(t.translate,0,n),e.scale=on(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function eb(e,t,n,a){e.min=on(t.min,n.min,a),e.max=on(t.max,n.max,a)}function XU(e,t,n,a){eb(e.x,t.x,n.x,a),eb(e.y,t.y,n.y,a)}function WU(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const qU={duration:.45,ease:[.4,0,.1,1]},nb=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ib=nb("applewebkit/")&&!nb("chrome/")?Math.round:Bi;function ab(e){e.min=ib(e.min),e.max=ib(e.max)}function YU(e){ab(e.x),ab(e.y)}function PT(e,t,n){return e==="position"||e==="preserve-aspect"&&!gU(q1(t),q1(n),.2)}function jU(e){return e!==e.root&&e.scroll?.wasRoot}const $U=UT({attachResizeListener:(e,t)=>Bu(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),wm={current:void 0},NT=UT({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wm.current){const e=new $U({});e.mount(window),e.setOptions({layoutScroll:!0}),wm.current=e}return wm.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),$d=V.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function KU(e=!0){const t=V.useContext(fv);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:s}=t,l=V.useId();V.useEffect(()=>{if(e)return s(l)},[e]);const c=V.useCallback(()=>e&&a&&a(l),[l,a,e]);return!n&&a?[!1,c]:[!0]}const OT=V.createContext({strict:!1}),rb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let sb=!1;function ZU(){if(sb)return;const e={};for(const t in rb)e[t]={isEnabled:n=>rb[t].some(a=>!!n[a])};fT(e),sb=!0}function FT(){return ZU(),GL()}function QU(e){const t=FT();for(const n in e)t[n]={...t[n],...e[n]};fT(t)}const JU=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ud(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||JU.has(e)}let IT=e=>!Ud(e);function tP(e){typeof e=="function"&&(IT=t=>t.startsWith("on")?!Ud(t):e(t))}try{tP(require("@emotion/is-prop-valid").default)}catch{}function eP(e,t,n){const a={};for(const s in e)s==="values"&&typeof e.values=="object"||(IT(s)||n===!0&&Ud(s)||!t&&!Ud(s)||e.draggable&&s.startsWith("onDrag"))&&(a[s]=e[s]);return a}const Kd=V.createContext({});function nP(e,t){if(jd(e)){const{initial:n,animate:a}=e;return{initial:n===!1||Iu(n)?n:void 0,animate:Iu(a)?a:void 0}}return e.inherit!==!1?t:{}}function iP(e){const{initial:t,animate:n}=nP(e,V.useContext(Kd));return V.useMemo(()=>({initial:t,animate:n}),[ob(t),ob(n)])}function ob(e){return Array.isArray(e)?e.join(" "):e}const Bv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function BT(e,t,n){for(const a in t)!Wn(t[a])&&!_T(a,n)&&(e[a]=t[a])}function aP({transformTemplate:e},t){return V.useMemo(()=>{const n=Bv();return Fv(n,t,e),Object.assign({},n.vars,n.style)},[t])}function rP(e,t){const n=e.style||{},a={};return BT(a,n,e),Object.assign(a,aP(e,t)),a}function sP(e,t){const n={},a=rP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=a,n}const zT=()=>({...Bv(),attrs:{}});function oP(e,t,n,a){const s=V.useMemo(()=>{const l=zT();return yT(l,t,ST(a),e.transformTemplate,e.style),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};BT(l,e.style,e),s.style={...l,...s.style}}return s}const lP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zv(e){return typeof e!="string"||e.includes("-")?!1:!!(lP.indexOf(e)>-1||/[A-Z]/u.test(e))}function uP(e,t,n,{latestValues:a},s,l=!1,c){const d=(c??zv(e)?oP:sP)(t,a,s,e),h=eP(t,typeof e=="string",l),m=e!==V.Fragment?{...h,...d,ref:n}:{},{children:v}=t,_=V.useMemo(()=>Wn(v)?v.get():v,[v]);return V.createElement(e,{...m,children:_})}function cP({scrapeMotionValuesFromProps:e,createRenderState:t},n,a,s){return{latestValues:fP(n,a,s,e),renderState:t()}}function fP(e,t,n,a){const s={},l=a(e,{});for(const _ in l)s[_]=dd(l[_]);let{initial:c,animate:f}=e;const d=jd(e),h=uT(e);t&&h&&!d&&e.inherit!==!1&&(c===void 0&&(c=t.initial),f===void 0&&(f=t.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const v=m?f:c;if(v&&typeof v!="boolean"&&!Yd(v)){const _=Array.isArray(v)?v:[v];for(let x=0;x<_.length;x++){const b=Cv(e,_[x]);if(b){const{transitionEnd:M,transition:y,...S}=b;for(const T in S){let C=S[T];if(Array.isArray(C)){const L=m?C.length-1:0;C=C[L]}C!==null&&(s[T]=C)}for(const T in M)s[T]=M[T]}}}return s}const VT=e=>(t,n)=>{const a=V.useContext(Kd),s=V.useContext(fv),l=()=>cP(e,t,a,s);return n?l():cv(l)},dP=VT({scrapeMotionValuesFromProps:Iv,createRenderState:Bv}),hP=VT({scrapeMotionValuesFromProps:bT,createRenderState:zT}),pP=Symbol.for("motionComponentSymbol");function mP(e,t,n){const a=V.useRef(n);V.useInsertionEffect(()=>{a.current=n});const s=V.useRef(null);return V.useCallback(l=>{l&&e.onMount?.(l),t&&(l?t.mount(l):t.unmount());const c=a.current;if(typeof c=="function")if(l){const f=c(l);typeof f=="function"&&(s.current=f)}else s.current?(s.current(),s.current=null):c(l);else c&&(c.current=l)},[t])}const HT=V.createContext({});function Vo(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function gP(e,t,n,a,s,l){const{visualElement:c}=V.useContext(Kd),f=V.useContext(OT),d=V.useContext(fv),h=V.useContext($d),m=h.reducedMotion,v=h.skipAnimations,_=V.useRef(null),x=V.useRef(!1);a=a||f.renderer,!_.current&&a&&(_.current=a(e,{visualState:t,parent:c,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:l}),x.current&&_.current&&(_.current.manuallyAnimateOnMount=!0));const b=_.current,M=V.useContext(HT);b&&!b.projection&&s&&(b.type==="html"||b.type==="svg")&&vP(_.current,n,s,M);const y=V.useRef(!1);V.useInsertionEffect(()=>{b&&y.current&&b.update(n,d)});const S=n[KE],T=V.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return lE(()=>{x.current=!0,b&&(y.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),T.current&&b.animationState&&b.animationState.animateChanges())}),V.useEffect(()=>{b&&(!T.current&&b.animationState&&b.animationState.animateChanges(),T.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),T.current=!1),b.enteringChildren=void 0)}),b}function vP(e,t,n,a){const{layoutId:s,layout:l,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:GT(e.parent)),e.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!c||f&&Vo(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:m,layoutScroll:d,layoutRoot:h})}function GT(e){if(e)return e.options.allowProjection!==!1?e.projection:GT(e.parent)}function Dm(e,{forwardMotionProps:t=!1,type:n}={},a,s){a&&QU(a);const l=n?n==="svg":zv(e),c=l?hP:dP;function f(h,m){let v;const _={...V.useContext($d),...h,layoutId:_P(h)},{isStatic:x}=_,b=iP(h),M=c(h,x);if(!x&&oE){yP();const y=xP(_);v=y.MeasureLayout,b.visualElement=gP(e,M,_,s,y.ProjectionNode,l)}return Qo.jsxs(Kd.Provider,{value:b,children:[v&&b.visualElement?Qo.jsx(v,{visualElement:b.visualElement,..._}):null,uP(e,h,mP(M,b.visualElement,m),M,x,t,l)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const d=V.forwardRef(f);return d[pP]=e,d}function _P({layoutId:e}){const t=V.useContext(sE).id;return t&&e!==void 0?t+"-"+e:e}function yP(e,t){V.useContext(OT).strict}function xP(e){const t=FT(),{drag:n,layout:a}=t;if(!n&&!a)return{};const s={...n,...a};return{MeasureLayout:n?.isEnabled(e)||a?.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function SP(e,t){if(typeof Proxy>"u")return Dm;const n=new Map,a=(l,c)=>Dm(l,c,e,t),s=(l,c)=>a(l,c);return new Proxy(s,{get:(l,c)=>c==="create"?a:(n.has(c)||n.set(c,Dm(c,void 0,e,t)),n.get(c))})}const bP=(e,t)=>t.isSVG??zv(e)?new rU(t):new JL(t,{allowProjection:e!==V.Fragment});class MP extends Zr{constructor(t){super(t),t.animationState||(t.animationState=cU(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Yd(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let EP=0;class TP extends Zr{constructor(){super(...arguments),this.id=EP++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===a)return;const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const AP={animation:{Feature:MP},exit:{Feature:TP}};function Qu(e){return{point:{x:e.pageX,y:e.pageY}}}const RP=e=>t=>Uv(t)&&e(t,Qu(t));function Lu(e,t,n,a){return Bu(e,t,RP(n),a)}const kT=({current:e})=>e?e.ownerDocument.defaultView:null,lb=(e,t)=>Math.abs(e-t);function CP(e,t){const n=lb(e.x,t.x),a=lb(e.y,t.y);return Math.sqrt(n**2+a**2)}const ub=new Set(["auto","scroll"]);class XT{constructor(t,n,{transformPagePoint:a,contextWindow:s=window,dragSnapToOrigin:l=!1,distanceThreshold:c=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Um(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,M=CP(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!M)return;const{point:y}=x,{timestamp:S}=Bn;this.history.push({...y,timestamp:S});const{onStart:T,onMove:C}=this.handlers;b||(T&&T(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,x)},this.handlePointerMove=(x,b)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Lm(b,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(x,b)=>{this.end();const{onEnd:M,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const T=Um(x.type==="pointercancel"?this.lastMoveEventInfo:Lm(b,this.transformPagePoint),this.history);this.startEvent&&M&&M(x,T),y&&y(x,T)},!Uv(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=c,this.contextWindow=s||window;const d=Qu(t),h=Lm(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=Bn;this.history=[{...m,timestamp:v}];const{onSessionStart:_}=n;_&&_(t,Um(h,this.history)),this.removeListeners=$u(Lu(this.contextWindow,"pointermove",this.handlePointerMove),Lu(this.contextWindow,"pointerup",this.handlePointerUp),Lu(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(t){let n=t.parentElement;for(;n;){const a=getComputedStyle(n);(ub.has(a.overflowX)||ub.has(a.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const a=t===window,s=a?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},l={x:s.x-n.x,y:s.y-n.y};l.x===0&&l.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(t,s),$e.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ca(this.updatePoint)}}function Lm(e,t){return t?{point:t(e.point)}:e}function cb(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Um({point:e},t){return{point:e,delta:cb(e,WT(t)),offset:cb(e,wP(t)),velocity:DP(t,.1)}}function wP(e){return e[0]}function WT(e){return e[e.length-1]}function DP(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,a=null;const s=WT(e);for(;n>=0&&(a=e[n],!(s.timestamp-a.timestamp>ia(t)));)n--;if(!a)return{x:0,y:0};a===e[0]&&e.length>2&&s.timestamp-a.timestamp>ia(t)*2&&(a=e[1]);const l=Ii(s.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const c={x:(s.x-a.x)/l,y:(s.y-a.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function LP(e,{min:t,max:n},a){return t!==void 0&&e<t?e=a?on(t,e,a.min):Math.max(e,t):n!==void 0&&e>n&&(e=a?on(n,e,a.max):Math.min(e,n)),e}function fb(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function UP(e,{top:t,left:n,bottom:a,right:s}){return{x:fb(e.x,n,s),y:fb(e.y,t,a)}}function db(e,t){let n=t.min-e.min,a=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,a]=[a,n]),{min:n,max:a}}function PP(e,t){return{x:db(e.x,t.x),y:db(e.y,t.y)}}function NP(e,t){let n=.5;const a=ti(e),s=ti(t);return s>a?n=Nu(t.min,t.max-a,e.min):a>s&&(n=Nu(e.min,e.max-s,t.min)),Ra(0,1,n)}function OP(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const $0=.35;function FP(e=$0){return e===!1?e=0:e===!0&&(e=$0),{x:hb(e,"left","right"),y:hb(e,"top","bottom")}}function hb(e,t,n){return{min:pb(e,t),max:pb(e,n)}}function pb(e,t){return typeof e=="number"?e:e[t]||0}const IP=new WeakMap;class BP{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Cn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=v=>{n&&this.snapToCursor(Qu(v).point),this.stopAnimation()},c=(v,_)=>{const{drag:x,dragPropagation:b,onDragStart:M}=this.getProps();if(x&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=vL(x),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=_,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),pa(S=>{let T=this.getAxisMotionValue(S).get()||0;if(ba.test(T)){const{projection:C}=this.visualElement;if(C&&C.layout){const L=C.layout.layoutBox[S];L&&(T=ti(L)*(parseFloat(T)/100))}}this.originPoint[S]=T}),M&&$e.update(()=>M(v,_),!1,!0),H0(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},f=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_;const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:M,onDrag:y}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:S}=_;if(b&&this.currentDirection===null){this.currentDirection=VP(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",_.point,S),this.updateAxis("y",_.point,S),this.visualElement.render(),y&&$e.update(()=>y(v,_),!1,!0)},d=(v,_)=>{this.latestPointerEvent=v,this.latestPanInfo=_,this.stop(v,_),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new XT(t,{onSessionStart:l,onStart:c,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:a,contextWindow:kT(this.visualElement),element:this.visualElement.current})}stop(t,n){const a=t||this.latestPointerEvent,s=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!s||!a)return;const{velocity:c}=s;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&$e.postRender(()=>f(a,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,a){const{drag:s}=this.getProps();if(!a||!Ef(t,s,this.currentDirection))return;const l=this.getAxisMotionValue(t);let c=this.originPoint[t]+a[t];this.constraints&&this.constraints[t]&&(c=LP(c,this.constraints[t],this.elastic[t])),l.set(c)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;t&&Vo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&a?this.constraints=UP(a.layoutBox,t):this.constraints=!1,this.elastic=FP(n),s!==this.constraints&&!Vo(t)&&a&&this.constraints&&!this.hasMutatedConstraints&&pa(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=OP(a.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Vo(t))return!1;const a=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=YL(a,s.root,this.visualElement.getTransformPagePoint());let c=PP(s.layout.layoutBox,l);if(n){const f=n(XL(c));this.hasMutatedConstraints=!!f,f&&(c=hT(f))}return c}startAnimation(t){const{drag:n,dragMomentum:a,dragElastic:s,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=pa(m=>{if(!Ef(m,n,this.currentDirection))return;let v=d&&d[m]||{};c&&(v={min:0,max:0});const _=s?200:1e6,x=s?40:1e7,b={type:"inertia",velocity:a?t[m]:0,bounceStiffness:_,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,b)});return Promise.all(h).then(f)}startAxisValueAnimation(t,n){const a=this.getAxisMotionValue(t);return H0(this.visualElement,t),a.start(Rv(t,a,0,n,this.visualElement,!1))}stopAnimation(){pa(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,a=this.visualElement.getProps(),s=a[n];return s||this.visualElement.getValue(t,(a.initial?a.initial[t]:void 0)||0)}snapToCursor(t){pa(n=>{const{drag:a}=this.getProps();if(!Ef(n,a,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(n);if(s&&s.layout){const{min:c,max:f}=s.layout.layoutBox[n],d=l.get()||0;l.set(t[n]-on(c,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Vo(n)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};pa(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();s[c]=NP({min:d,max:d},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),pa(c=>{if(!Ef(c,t,null))return;const f=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];f.set(on(d,h,s[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;IP.set(this.visualElement,this);const t=this.visualElement.current,n=Lu(t,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),_=h.target,x=_!==t&&ML(_);m&&v&&!x&&this.start(h)});let a;const s=()=>{const{dragConstraints:h}=this.getProps();Vo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),a||(a=zP(t,h.current,()=>this.scalePositionWithinConstraints())))},{projection:l}=this.visualElement,c=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),$e.read(s);const f=Bu(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(pa(v=>{const _=this.getAxisMotionValue(v);_&&(this.originPoint[v]+=h[v].translate,_.set(_.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),n(),c(),d&&d(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:c=$0,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:a,dragPropagation:s,dragConstraints:l,dragElastic:c,dragMomentum:f}}}function mb(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function zP(e,t,n){const a=E1(e,mb(n)),s=E1(t,mb(n));return()=>{a(),s()}}function Ef(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function VP(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class HP extends Zr{constructor(t){super(t),this.removeGroupControls=Bi,this.removeListeners=Bi,this.controls=new BP(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Bi}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Pm=e=>(t,n)=>{e&&$e.update(()=>e(t,n),!1,!0)};class GP extends Zr{constructor(){super(...arguments),this.removePointerDownListener=Bi}onPointerDown(t){this.session=new XT(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:kT(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:Pm(t),onStart:Pm(n),onMove:Pm(a),onEnd:(l,c)=>{delete this.session,s&&$e.postRender(()=>s(l,c))}}}mount(){this.removePointerDownListener=Lu(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Nm=!1;class kP extends V.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a,layoutId:s}=this.props,{projection:l}=t;l&&(n.group&&n.group.add(l),a&&a.register&&s&&a.register(l),Nm&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),hd.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:a,drag:s,isPresent:l}=this.props,{projection:c}=a;return c&&(c.isPresent=l,t.layoutDependency!==n&&c.setOptions({...c.options,layoutDependency:n}),Nm=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==l?c.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?c.promote():c.relegate()||$e.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Lv.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:s}=t;Nm=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function qT(e){const[t,n]=KU(),a=V.useContext(sE);return Qo.jsx(kP,{...e,layoutGroup:a,switchLayoutGroup:V.useContext(HT),isPresent:t,safeToRemove:n})}const XP={pan:{Feature:GP},drag:{Feature:HP,ProjectionNode:NT,MeasureLayout:qT}};function gb(e,t,n){const{props:a}=e;e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,l=a[s];l&&$e.postRender(()=>l(t,Qu(t)))}class WP extends Zr{mount(){const{current:t}=this.node;t&&(this.unmount=yL(t,(n,a)=>(gb(this.node,a,"Start"),s=>gb(this.node,s,"End"))))}unmount(){}}class qP extends Zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$u(Bu(this.node.current,"focus",()=>this.onFocus()),Bu(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function vb(e,t,n){const{props:a}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&a.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),l=a[s];l&&$e.postRender(()=>l(t,Qu(t)))}class YP extends Zr{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:a}=this.node.props;this.unmount=TL(t,(s,l)=>(vb(this.node,l,"Start"),(c,{success:f})=>vb(this.node,c,f?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:a?.tap===!1})}unmount(){}}const K0=new WeakMap,Om=new WeakMap,jP=e=>{const t=K0.get(e.target);t&&t(e)},$P=e=>{e.forEach(jP)};function KP({root:e,...t}){const n=e||document;Om.has(n)||Om.set(n,{});const a=Om.get(n),s=JSON.stringify(t);return a[s]||(a[s]=new IntersectionObserver($P,{root:e,...t})),a[s]}function ZP(e,t,n){const a=KP(t);return K0.set(e,n),a.observe(e),()=>{K0.delete(e),a.unobserve(e)}}const QP={some:0,all:1};class JP extends Zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:a,amount:s="some",once:l}=t,c={root:n?n.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:QP[s]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),_=h?m:v;_&&_(d)};return ZP(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(tN(t,n))&&this.startObserver()}unmount(){}}function tN({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const eN={inView:{Feature:JP},tap:{Feature:YP},focus:{Feature:qP},hover:{Feature:WP}},nN={layout:{ProjectionNode:NT,MeasureLayout:qT}},iN={...AP,...eN,...XP,...nN},s8=SP(iN,bP);function aN(e){const t=cv(()=>Bs(e)),{isStatic:n}=V.useContext($d);if(n){const[,a]=V.useState(e);V.useEffect(()=>t.on("change",a),[])}return t}function YT(e,t){const n=aN(t()),a=()=>n.set(t());return a(),lE(()=>{const s=()=>$e.preRender(a,!1,!0),l=e.map(c=>c.on("change",s));return()=>{l.forEach(c=>c()),Ca(a)}}),n}function rN(e){wu.current=[],e();const t=YT(wu.current,e);return wu.current=void 0,t}function o8(e,t,n,a){if(typeof e=="function")return rN(e);const l=typeof t=="function"?t:OL(t,n,a),c=Array.isArray(e)?_b(e,l):_b([e],([d])=>l(d)),f=Array.isArray(e)?void 0:e.accelerate;return f&&!f.isTransformed&&typeof t!="function"&&Array.isArray(n)&&a?.clamp!==!1&&(c.accelerate={...f,times:t,keyframes:n,isTransformed:!0}),c}function _b(e,t){const n=cv(()=>[]);return YT(e,()=>{n.length=0;const a=e.length;for(let s=0;s<a;s++)n[s]=e[s].get();return t(n)})}function l8(e){const t=V.useRef(0),{isStatic:n}=V.useContext($d);V.useEffect(()=>{if(n)return;const a=({timestamp:s,delta:l})=>{t.current||(t.current=s),e(s-t.current,l)};return $e.update(a,!0),()=>Ca(a)},[e])}const Vv="183",sN=0,yb=1,oN=2,pd=1,lN=2,Mu=3,Kr=0,ui=1,ir=2,rr=0,jo=1,xb=2,Sb=3,bb=4,uN=5,Cs=100,cN=101,fN=102,dN=103,hN=104,pN=200,mN=201,gN=202,vN=203,Z0=204,Q0=205,_N=206,yN=207,xN=208,SN=209,bN=210,MN=211,EN=212,TN=213,AN=214,J0=0,tg=1,eg=2,Jo=3,ng=4,ig=5,ag=6,rg=7,jT=0,RN=1,CN=2,Ma=0,$T=1,KT=2,ZT=3,QT=4,JT=5,tA=6,eA=7,nA=300,zs=301,tl=302,Fm=303,Im=304,Zd=306,sg=1e3,ar=1001,og=1002,Vn=1003,wN=1004,Tf=1005,qn=1006,Bm=1007,Us=1008,Fi=1009,iA=1010,aA=1011,zu=1012,Hv=1013,wa=1014,_a=1015,ur=1016,Gv=1017,kv=1018,Vu=1020,rA=35902,sA=35899,oA=1021,lA=1022,na=1023,cr=1026,Ps=1027,uA=1028,Xv=1029,el=1030,Wv=1031,qv=1033,md=33776,gd=33777,vd=33778,_d=33779,lg=35840,ug=35841,cg=35842,fg=35843,dg=36196,hg=37492,pg=37496,mg=37488,gg=37489,vg=37490,_g=37491,yg=37808,xg=37809,Sg=37810,bg=37811,Mg=37812,Eg=37813,Tg=37814,Ag=37815,Rg=37816,Cg=37817,wg=37818,Dg=37819,Lg=37820,Ug=37821,Pg=36492,Ng=36494,Og=36495,Fg=36283,Ig=36284,Bg=36285,zg=36286,DN=3200,LN=0,UN=1,Yr="",Ni="srgb",nl="srgb-linear",Pd="linear",Xe="srgb",Eo=7680,Mb=519,PN=512,NN=513,ON=514,Yv=515,FN=516,IN=517,jv=518,BN=519,Eb=35044,Tb="300 es",ya=2e3,Nd=2001;function zN(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Od(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function VN(){const e=Od("canvas");return e.style.display="block",e}const Ab={};function Rb(...e){const t="THREE."+e.shift();console.log(t,...e)}function cA(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ue(...e){e=cA(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ne(...e){e=cA(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Fd(...e){const t=e.join(" ");t in Ab||(Ab[t]=!0,ue(...e))}function HN(e,t,n){return new Promise(function(a,s){function l(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const GN={[J0]:tg,[eg]:ag,[ng]:rg,[Jo]:ig,[tg]:J0,[ag]:eg,[rg]:ng,[ig]:Jo};class hl{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zm=Math.PI/180,Vg=180/Math.PI;function Ju(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Gn[e&255]+Gn[e>>8&255]+Gn[e>>16&255]+Gn[e>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[n&63|128]+Gn[n>>8&255]+"-"+Gn[n>>16&255]+Gn[n>>24&255]+Gn[a&255]+Gn[a>>8&255]+Gn[a>>16&255]+Gn[a>>24&255]).toLowerCase()}function Re(e,t,n){return Math.max(t,Math.min(n,e))}function kN(e,t){return(e%t+t)%t}function Vm(e,t,n){return(1-n)*e+n*t}function hu(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function li(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(t=0,n=0){Ke.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*s+t.x,this.y=l*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pl{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,c,f){let d=a[s+0],h=a[s+1],m=a[s+2],v=a[s+3],_=l[c+0],x=l[c+1],b=l[c+2],M=l[c+3];if(v!==M||d!==_||h!==x||m!==b){let y=d*_+h*x+m*b+v*M;y<0&&(_=-_,x=-x,b=-b,M=-M,y=-y);let S=1-f;if(y<.9995){const T=Math.acos(y),C=Math.sin(T);S=Math.sin(S*T)/C,f=Math.sin(f*T)/C,d=d*S+_*f,h=h*S+x*f,m=m*S+b*f,v=v*S+M*f}else{d=d*S+_*f,h=h*S+x*f,m=m*S+b*f,v=v*S+M*f;const T=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=T,h*=T,m*=T,v*=T}}t[n]=d,t[n+1]=h,t[n+2]=m,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,l,c){const f=a[s],d=a[s+1],h=a[s+2],m=a[s+3],v=l[c],_=l[c+1],x=l[c+2],b=l[c+3];return t[n]=f*b+m*v+d*x-h*_,t[n+1]=d*b+m*_+h*v-f*x,t[n+2]=h*b+m*x+f*_-d*v,t[n+3]=m*b-f*v-d*_-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,c=t._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(s/2),v=f(l/2),_=d(a/2),x=d(s/2),b=d(l/2);switch(c){case"XYZ":this._x=_*m*v+h*x*b,this._y=h*x*v-_*m*b,this._z=h*m*b+_*x*v,this._w=h*m*v-_*x*b;break;case"YXZ":this._x=_*m*v+h*x*b,this._y=h*x*v-_*m*b,this._z=h*m*b-_*x*v,this._w=h*m*v+_*x*b;break;case"ZXY":this._x=_*m*v-h*x*b,this._y=h*x*v+_*m*b,this._z=h*m*b+_*x*v,this._w=h*m*v-_*x*b;break;case"ZYX":this._x=_*m*v-h*x*b,this._y=h*x*v+_*m*b,this._z=h*m*b-_*x*v,this._w=h*m*v+_*x*b;break;case"YZX":this._x=_*m*v+h*x*b,this._y=h*x*v+_*m*b,this._z=h*m*b-_*x*v,this._w=h*m*v-_*x*b;break;case"XZY":this._x=_*m*v-h*x*b,this._y=h*x*v-_*m*b,this._z=h*m*b+_*x*v,this._w=h*m*v+_*x*b;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],h=n[2],m=n[6],v=n[10],_=a+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(c-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-h)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-s)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,c=t._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=a*m+c*f+s*h-l*d,this._y=s*m+c*d+l*f-a*h,this._z=l*m+c*h+a*d-s*f,this._w=c*m-a*f-s*d-l*h,this._onChangeCallback(),this}slerp(t,n){let a=t._x,s=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,l=-l,c=-c,f=-f);let d=1-n;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,n=Math.sin(n*h)/m,this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Cb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Cb.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,c=t.y,f=t.z,d=t.w,h=2*(c*s-f*a),m=2*(f*n-l*s),v=2*(l*a-c*n);return this.x=n+d*h+c*v-f*m,this.y=a+d*m+f*h-l*v,this.z=s+d*v+l*m-c*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-a*d,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Hm.copy(this).projectOnVector(t),this.sub(Hm)}reflect(t){return this.sub(Hm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Re(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Hm=new lt,Cb=new pl;class _e{constructor(t,n,a,s,l,c,f,d,h){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,h)}set(t,n,a,s,l,c,f,d,h){const m=this.elements;return m[0]=t,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=a,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],d=a[6],h=a[1],m=a[4],v=a[7],_=a[2],x=a[5],b=a[8],M=s[0],y=s[3],S=s[6],T=s[1],C=s[4],L=s[7],w=s[2],O=s[5],F=s[8];return l[0]=c*M+f*T+d*w,l[3]=c*y+f*C+d*O,l[6]=c*S+f*L+d*F,l[1]=h*M+m*T+v*w,l[4]=h*y+m*C+v*O,l[7]=h*S+m*L+v*F,l[2]=_*M+x*T+b*w,l[5]=_*y+x*C+b*O,l[8]=_*S+x*L+b*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8];return n*c*m-n*f*h-a*l*m+a*f*d+s*l*h-s*c*d}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=m*c-f*h,_=f*d-m*l,x=h*l-c*d,b=n*v+a*_+s*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return t[0]=v*M,t[1]=(s*h-m*a)*M,t[2]=(f*a-s*c)*M,t[3]=_*M,t[4]=(m*n-s*d)*M,t[5]=(s*l-f*n)*M,t[6]=x*M,t[7]=(a*d-h*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*c+h*f)+c+t,-s*h,s*d,-s*(-h*c+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Gm.makeScale(t,n)),this}rotate(t){return this.premultiply(Gm.makeRotation(-t)),this}translate(t,n){return this.premultiply(Gm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gm=new _e,wb=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Db=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XN(){const e={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Xe&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Xe&&(s.r=$o(s.r),s.g=$o(s.g),s.b=$o(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yr?Pd:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Fd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Fd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return e.define({[nl]:{primaries:t,whitePoint:a,transfer:Pd,toXYZ:wb,fromXYZ:Db,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ni},outputColorSpaceConfig:{drawingBufferColorSpace:Ni}},[Ni]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:wb,fromXYZ:Db,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ni}}}),e}const De=XN();function sr(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function $o(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let To;class WN{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{To===void 0&&(To=Od("canvas")),To.width=t.width,To.height=t.height;const s=To.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=To}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Od("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=sr(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(sr(n[a]/255)*255):n[a]=sr(n[a]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qN=0;class $v{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qN++}),this.uuid=Ju(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(km(s[c].image)):l.push(km(s[c]))}else l=km(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function km(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?WN.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let YN=0;const Xm=new lt;class ei extends hl{constructor(t=ei.DEFAULT_IMAGE,n=ei.DEFAULT_MAPPING,a=ar,s=ar,l=qn,c=Us,f=na,d=Fi,h=ei.DEFAULT_ANISOTROPY,m=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YN++}),this.uuid=Ju(),this.name="",this.source=new $v(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xm).x}get height(){return this.source.getSize(Xm).y}get depth(){return this.source.getSize(Xm).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nA)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sg:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case og:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sg:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case og:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=nA;ei.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,n=0,a=0,s=1){hn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const d=t.elements,h=d[0],m=d[4],v=d[8],_=d[1],x=d[5],b=d[9],M=d[2],y=d[6],S=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-M)<.01&&Math.abs(b-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+M)<.1&&Math.abs(b+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const C=(h+1)/2,L=(x+1)/2,w=(S+1)/2,O=(m+_)/4,F=(v+M)/4,R=(b+y)/4;return C>L&&C>w?C<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(C),s=O/a,l=F/a):L>w?L<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(L),a=O/s,l=R/s):w<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(w),a=F/l,s=R/l),this.set(a,s,l,n),this}let T=Math.sqrt((y-b)*(y-b)+(v-M)*(v-M)+(_-m)*(_-m));return Math.abs(T)<.001&&(T=1),this.x=(y-b)/T,this.y=(v-M)/T,this.z=(_-m)/T,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Re(this.x,t.x,n.x),this.y=Re(this.y,t.y,n.y),this.z=Re(this.z,t.z,n.z),this.w=Re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Re(this.x,t,n),this.y=Re(this.y,t,n),this.z=Re(this.z,t,n),this.w=Re(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Re(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jN extends hl{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new hn(0,0,t,n),this.scissorTest=!1,this.viewport=new hn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:a.depth},l=new ei(s),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new $v(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ea extends jN{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class fA extends ei{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $N extends ei{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pn{constructor(t,n,a,s,l,c,f,d,h,m,v,_,x,b,M,y){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,c,f,d,h,m,v,_,x,b,M,y)}set(t,n,a,s,l,c,f,d,h,m,v,_,x,b,M,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=s,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=v,S[14]=_,S[3]=x,S[7]=b,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/Ao.setFromMatrixColumn(t,0).length(),l=1/Ao.setFromMatrixColumn(t,1).length(),c=1/Ao.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=c*m,x=c*v,b=f*m,M=f*v;n[0]=d*m,n[4]=-d*v,n[8]=h,n[1]=x+b*h,n[5]=_-M*h,n[9]=-f*d,n[2]=M-_*h,n[6]=b+x*h,n[10]=c*d}else if(t.order==="YXZ"){const _=d*m,x=d*v,b=h*m,M=h*v;n[0]=_+M*f,n[4]=b*f-x,n[8]=c*h,n[1]=c*v,n[5]=c*m,n[9]=-f,n[2]=x*f-b,n[6]=M+_*f,n[10]=c*d}else if(t.order==="ZXY"){const _=d*m,x=d*v,b=h*m,M=h*v;n[0]=_-M*f,n[4]=-c*v,n[8]=b+x*f,n[1]=x+b*f,n[5]=c*m,n[9]=M-_*f,n[2]=-c*h,n[6]=f,n[10]=c*d}else if(t.order==="ZYX"){const _=c*m,x=c*v,b=f*m,M=f*v;n[0]=d*m,n[4]=b*h-x,n[8]=_*h+M,n[1]=d*v,n[5]=M*h+_,n[9]=x*h-b,n[2]=-h,n[6]=f*d,n[10]=c*d}else if(t.order==="YZX"){const _=c*d,x=c*h,b=f*d,M=f*h;n[0]=d*m,n[4]=M-_*v,n[8]=b*v+x,n[1]=v,n[5]=c*m,n[9]=-f*m,n[2]=-h*m,n[6]=x*v+b,n[10]=_-M*v}else if(t.order==="XZY"){const _=c*d,x=c*h,b=f*d,M=f*h;n[0]=d*m,n[4]=-v,n[8]=h*m,n[1]=_*v+M,n[5]=c*m,n[9]=x*v-b,n[2]=b*v-x,n[6]=f*m,n[10]=M*v+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(KN,t,ZN)}lookAt(t,n,a){const s=this.elements;return Si.subVectors(t,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Vr.crossVectors(a,Si),Vr.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Vr.crossVectors(a,Si)),Vr.normalize(),Af.crossVectors(Si,Vr),s[0]=Vr.x,s[4]=Af.x,s[8]=Si.x,s[1]=Vr.y,s[5]=Af.y,s[9]=Si.y,s[2]=Vr.z,s[6]=Af.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],d=a[8],h=a[12],m=a[1],v=a[5],_=a[9],x=a[13],b=a[2],M=a[6],y=a[10],S=a[14],T=a[3],C=a[7],L=a[11],w=a[15],O=s[0],F=s[4],R=s[8],P=s[12],tt=s[1],H=s[5],Z=s[9],Q=s[13],J=s[2],K=s[6],I=s[10],z=s[14],it=s[3],ct=s[7],ht=s[11],B=s[15];return l[0]=c*O+f*tt+d*J+h*it,l[4]=c*F+f*H+d*K+h*ct,l[8]=c*R+f*Z+d*I+h*ht,l[12]=c*P+f*Q+d*z+h*B,l[1]=m*O+v*tt+_*J+x*it,l[5]=m*F+v*H+_*K+x*ct,l[9]=m*R+v*Z+_*I+x*ht,l[13]=m*P+v*Q+_*z+x*B,l[2]=b*O+M*tt+y*J+S*it,l[6]=b*F+M*H+y*K+S*ct,l[10]=b*R+M*Z+y*I+S*ht,l[14]=b*P+M*Q+y*z+S*B,l[3]=T*O+C*tt+L*J+w*it,l[7]=T*F+C*H+L*K+w*ct,l[11]=T*R+C*Z+L*I+w*ht,l[15]=T*P+C*Q+L*z+w*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],c=t[1],f=t[5],d=t[9],h=t[13],m=t[2],v=t[6],_=t[10],x=t[14],b=t[3],M=t[7],y=t[11],S=t[15],T=d*x-h*_,C=f*x-h*v,L=f*_-d*v,w=c*x-h*m,O=c*_-d*m,F=c*v-f*m;return n*(M*T-y*C+S*L)-a*(b*T-y*w+S*O)+s*(b*C-M*w+S*F)-l*(b*L-M*O+y*F)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],c=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=t[9],_=t[10],x=t[11],b=t[12],M=t[13],y=t[14],S=t[15],T=n*f-a*c,C=n*d-s*c,L=n*h-l*c,w=a*d-s*f,O=a*h-l*f,F=s*h-l*d,R=m*M-v*b,P=m*y-_*b,tt=m*S-x*b,H=v*y-_*M,Z=v*S-x*M,Q=_*S-x*y,J=T*Q-C*Z+L*H+w*tt-O*P+F*R;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/J;return t[0]=(f*Q-d*Z+h*H)*K,t[1]=(s*Z-a*Q-l*H)*K,t[2]=(M*F-y*O+S*w)*K,t[3]=(_*O-v*F-x*w)*K,t[4]=(d*tt-c*Q-h*P)*K,t[5]=(n*Q-s*tt+l*P)*K,t[6]=(y*L-b*F-S*C)*K,t[7]=(m*F-_*L+x*C)*K,t[8]=(c*Z-f*tt+h*R)*K,t[9]=(a*tt-n*Z-l*R)*K,t[10]=(b*O-M*L+S*T)*K,t[11]=(v*L-m*O-x*T)*K,t[12]=(f*P-c*H-d*R)*K,t[13]=(n*H-a*P+s*R)*K,t[14]=(M*C-b*w-y*T)*K,t[15]=(m*w-v*C+_*T)*K,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=t.x,f=t.y,d=t.z,h=l*c,m=l*f;return this.set(h*c+a,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+a,m*d-s*c,0,h*d-s*f,m*d+s*c,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,c){return this.set(1,a,l,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,h=l+l,m=c+c,v=f+f,_=l*h,x=l*m,b=l*v,M=c*m,y=c*v,S=f*v,T=d*h,C=d*m,L=d*v,w=a.x,O=a.y,F=a.z;return s[0]=(1-(M+S))*w,s[1]=(x+L)*w,s[2]=(b-C)*w,s[3]=0,s[4]=(x-L)*O,s[5]=(1-(_+S))*O,s[6]=(y+T)*O,s[7]=0,s[8]=(b+C)*F,s[9]=(y-T)*F,s[10]=(1-(_+M))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let c=Ao.set(s[0],s[1],s[2]).length();const f=Ao.set(s[4],s[5],s[6]).length(),d=Ao.set(s[8],s[9],s[10]).length();l<0&&(c=-c),Yi.copy(this);const h=1/c,m=1/f,v=1/d;return Yi.elements[0]*=h,Yi.elements[1]*=h,Yi.elements[2]*=h,Yi.elements[4]*=m,Yi.elements[5]*=m,Yi.elements[6]*=m,Yi.elements[8]*=v,Yi.elements[9]*=v,Yi.elements[10]*=v,n.setFromRotationMatrix(Yi),a.x=c,a.y=f,a.z=d,this}makePerspective(t,n,a,s,l,c,f=ya,d=!1){const h=this.elements,m=2*l/(n-t),v=2*l/(a-s),_=(n+t)/(n-t),x=(a+s)/(a-s);let b,M;if(d)b=l/(c-l),M=c*l/(c-l);else if(f===ya)b=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Nd)b=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,n,a,s,l,c,f=ya,d=!1){const h=this.elements,m=2/(n-t),v=2/(a-s),_=-(n+t)/(n-t),x=-(a+s)/(a-s);let b,M;if(d)b=1/(c-l),M=c/(c-l);else if(f===ya)b=-2/(c-l),M=-(c+l)/(c-l);else if(f===Nd)b=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Ao=new lt,Yi=new pn,KN=new lt(0,0,0),ZN=new lt(1,1,1),Vr=new lt,Af=new lt,Si=new lt,Lb=new pn,Ub=new pl;class fr{constructor(t=0,n=0,a=0,s=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],c=s[4],f=s[8],d=s[1],h=s[5],m=s[9],v=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Re(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Lb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lb,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ub.setFromEuler(this),this.setFromQuaternion(Ub,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class dA{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let QN=0;const Pb=new lt,Ro=new pl,Qa=new pn,Rf=new lt,pu=new lt,JN=new lt,tO=new pl,Nb=new lt(1,0,0),Ob=new lt(0,1,0),Fb=new lt(0,0,1),Ib={type:"added"},eO={type:"removed"},Co={type:"childadded",child:null},Wm={type:"childremoved",child:null};class ci extends hl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QN++}),this.uuid=Ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ci.DEFAULT_UP.clone();const t=new lt,n=new fr,a=new pl,s=new lt(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pn},normalMatrix:{value:new _e}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ci.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.premultiply(Ro),this}rotateX(t){return this.rotateOnAxis(Nb,t)}rotateY(t){return this.rotateOnAxis(Ob,t)}rotateZ(t){return this.rotateOnAxis(Fb,t)}translateOnAxis(t,n){return Pb.copy(t).applyQuaternion(this.quaternion),this.position.add(Pb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Nb,t)}translateY(t){return this.translateOnAxis(Ob,t)}translateZ(t){return this.translateOnAxis(Fb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Rf.copy(t):Rf.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),pu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qa.lookAt(pu,Rf,this.up):Qa.lookAt(Rf,pu,this.up),this.quaternion.setFromRotationMatrix(Qa),s&&(Qa.extractRotation(s.matrixWorld),Ro.setFromRotationMatrix(Qa),this.quaternion.premultiply(Ro.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ib),Co.child=t,this.dispatchEvent(Co),Co.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eO),Wm.child=t,this.dispatchEvent(Wm),Wm.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ib),Co.child=t,this.dispatchEvent(Co),Co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pu,t,JN),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pu,tO,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,s=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*s,l[13]+=a-l[1]*n-l[5]*a-l[9]*s,l[14]+=s-l[2]*n-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(t.materials,this.material[d]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(t.animations,d))}}if(n){const f=c(t.geometries),d=c(t.materials),h=c(t.textures),m=c(t.images),v=c(t.shapes),_=c(t.skeletons),x=c(t.animations),b=c(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),v.length>0&&(a.shapes=v),_.length>0&&(a.skeletons=_),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=s,a;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}ci.DEFAULT_UP=new lt(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Cf extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nO={type:"move"};class qm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(h&&t.hand){c=!0;for(const M of t.hand.values()){const y=n.getJointPose(M,a),S=this._getHandJoint(h,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,b=.005;h.inputState.pinching&&_>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(nO)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Cf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const hA={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},wf={h:0,s:0,l:0};function Ym(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class We{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=De.workingColorSpace){return this.r=t,this.g=n,this.b=a,De.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=De.workingColorSpace){if(t=kN(t,1),n=Re(n,0,1),a=Re(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Ym(c,l,t+1/3),this.g=Ym(c,l,t),this.b=Ym(c,l,t-1/3)}return De.colorSpaceToWorking(this,s),this}setStyle(t,n=Ni){function a(l){l!==void 0&&parseFloat(l)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ni){const a=hA[t.toLowerCase()];return a!==void 0?this.setHex(a,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=$o(t.r),this.g=$o(t.g),this.b=$o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ni){return De.workingToColorSpace(kn.copy(this),t),Math.round(Re(kn.r*255,0,255))*65536+Math.round(Re(kn.g*255,0,255))*256+Math.round(Re(kn.b*255,0,255))}getHexString(t=Ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(kn.copy(this),n);const a=kn.r,s=kn.g,l=kn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=m<=.5?v/(c+f):v/(2-c-f),c){case a:d=(s-l)/v+(s<l?6:0);break;case s:d=(l-a)/v+2;break;case l:d=(a-s)/v+4;break}d/=6}return t.h=d,t.s=h,t.l=m,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(kn.copy(this),n),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Ni){De.workingToColorSpace(kn.copy(this),t);const n=kn.r,a=kn.g,s=kn.b;return t!==Ni?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Hr),this.setHSL(Hr.h+t,Hr.s+n,Hr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Hr),t.getHSL(wf);const a=Vm(Hr.h,wf.h,n),s=Vm(Hr.s,wf.s,n),l=Vm(Hr.l,wf.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new We;We.NAMES=hA;class u8 extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const ji=new lt,Ja=new lt,jm=new lt,tr=new lt,wo=new lt,Do=new lt,Bb=new lt,$m=new lt,Km=new lt,Zm=new lt,Qm=new hn,Jm=new hn,t0=new hn;class ta{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),ji.subVectors(t,n),s.cross(ji);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){ji.subVectors(s,n),Ja.subVectors(a,n),jm.subVectors(t,n);const c=ji.dot(ji),f=ji.dot(Ja),d=ji.dot(jm),h=Ja.dot(Ja),m=Ja.dot(jm),v=c*h-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(h*d-f*m)*_,b=(c*m-f*d)*_;return l.set(1-x-b,b,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(t,n,a,s,l,c,f,d){return this.getBarycoord(t,n,a,s,tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,tr.x),d.addScaledVector(c,tr.y),d.addScaledVector(f,tr.z),d)}static getInterpolatedAttribute(t,n,a,s,l,c){return Qm.setScalar(0),Jm.setScalar(0),t0.setScalar(0),Qm.fromBufferAttribute(t,n),Jm.fromBufferAttribute(t,a),t0.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(Qm,l.x),c.addScaledVector(Jm,l.y),c.addScaledVector(t0,l.z),c}static isFrontFacing(t,n,a,s){return ji.subVectors(a,n),Ja.subVectors(t,n),ji.cross(Ja).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),Ja.subVectors(this.a,this.b),ji.cross(Ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ta.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ta.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return ta.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return ta.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ta.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let c,f;wo.subVectors(s,a),Do.subVectors(l,a),$m.subVectors(t,a);const d=wo.dot($m),h=Do.dot($m);if(d<=0&&h<=0)return n.copy(a);Km.subVectors(t,s);const m=wo.dot(Km),v=Do.dot(Km);if(m>=0&&v<=m)return n.copy(s);const _=d*v-m*h;if(_<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(a).addScaledVector(wo,c);Zm.subVectors(t,l);const x=wo.dot(Zm),b=Do.dot(Zm);if(b>=0&&x<=b)return n.copy(l);const M=x*h-d*b;if(M<=0&&h>=0&&b<=0)return f=h/(h-b),n.copy(a).addScaledVector(Do,f);const y=m*b-x*v;if(y<=0&&v-m>=0&&x-b>=0)return Bb.subVectors(l,s),f=(v-m)/(v-m+(x-b)),n.copy(s).addScaledVector(Bb,f);const S=1/(y+M+_);return c=M*S,f=_*S,n.copy(a).addScaledVector(wo,c).addScaledVector(Do,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class tc{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint($i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint($i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=$i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,$i):$i.fromBufferAttribute(l,c),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Df.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Df.copy(a.boundingBox)),Df.applyMatrix4(t.matrixWorld),this.union(Df)}const s=t.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mu),Lf.subVectors(this.max,mu),Lo.subVectors(t.a,mu),Uo.subVectors(t.b,mu),Po.subVectors(t.c,mu),Gr.subVectors(Uo,Lo),kr.subVectors(Po,Uo),xs.subVectors(Lo,Po);let n=[0,-Gr.z,Gr.y,0,-kr.z,kr.y,0,-xs.z,xs.y,Gr.z,0,-Gr.x,kr.z,0,-kr.x,xs.z,0,-xs.x,-Gr.y,Gr.x,0,-kr.y,kr.x,0,-xs.y,xs.x,0];return!e0(n,Lo,Uo,Po,Lf)||(n=[1,0,0,0,1,0,0,0,1],!e0(n,Lo,Uo,Po,Lf))?!1:(Uf.crossVectors(Gr,kr),n=[Uf.x,Uf.y,Uf.z],e0(n,Lo,Uo,Po,Lf))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(er),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const er=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],$i=new lt,Df=new tc,Lo=new lt,Uo=new lt,Po=new lt,Gr=new lt,kr=new lt,xs=new lt,mu=new lt,Lf=new lt,Uf=new lt,Ss=new lt;function e0(e,t,n,a,s){for(let l=0,c=e.length-3;l<=c;l+=3){Ss.fromArray(e,l);const f=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),d=t.dot(Ss),h=n.dot(Ss),m=a.dot(Ss);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const bn=new lt,Pf=new Ke;let iO=0;class Ta{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iO++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Eb,this.updateRanges=[],this.gpuType=_a,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Pf.fromBufferAttribute(this,n),Pf.applyMatrix3(t),this.setXY(n,Pf.x,Pf.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix3(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyMatrix4(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.applyNormalMatrix(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)bn.fromBufferAttribute(this,n),bn.transformDirection(t),this.setXYZ(n,bn.x,bn.y,bn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=hu(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=li(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=hu(n,this.array)),n}setX(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=hu(n,this.array)),n}setY(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=hu(n,this.array)),n}setZ(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=hu(n,this.array)),n}setW(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),a=li(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),a=li(a,this.array),s=li(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),a=li(a,this.array),s=li(s,this.array),l=li(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Eb&&(t.usage=this.usage),t}}class pA extends Ta{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class mA extends Ta{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class ra extends Ta{constructor(t,n,a){super(new Float32Array(t),n,a)}}const aO=new tc,gu=new lt,n0=new lt;class Qd{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):aO.setFromPoints(t).getCenter(a);let s=0;for(let l=0,c=t.length;l<c;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gu.subVectors(t,this.center);const n=gu.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(gu,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(n0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gu.copy(t.center).add(n0)),this.expandByPoint(gu.copy(t.center).sub(n0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let rO=0;const Pi=new pn,i0=new ci,No=new lt,bi=new tc,vu=new tc,Un=new lt;class Ua extends hl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rO++}),this.uuid=Ju(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zN(t)?mA:pA)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new _e().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,a){return Pi.makeTranslation(t,n,a),this.applyMatrix4(Pi),this}scale(t,n,a){return Pi.makeScale(t,n,a),this.applyMatrix4(Pi),this}lookAt(t){return i0.lookAt(t),i0.updateMatrix(),this.applyMatrix4(i0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ra(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];bi.setFromBufferAttribute(l),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qd);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];vu.setFromBufferAttribute(f),this.morphTargetsRelative?(Un.addVectors(bi.min,vu.min),bi.expandByPoint(Un),Un.addVectors(bi.max,vu.max),bi.expandByPoint(Un)):(bi.expandByPoint(vu.min),bi.expandByPoint(vu.max))}bi.getCenter(a);let s=0;for(let l=0,c=t.count;l<c;l++)Un.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Un));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Un.fromBufferAttribute(f,h),d&&(No.fromBufferAttribute(t,h),Un.add(No)),s=Math.max(s,a.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ta(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let R=0;R<a.count;R++)f[R]=new lt,d[R]=new lt;const h=new lt,m=new lt,v=new lt,_=new Ke,x=new Ke,b=new Ke,M=new lt,y=new lt;function S(R,P,tt){h.fromBufferAttribute(a,R),m.fromBufferAttribute(a,P),v.fromBufferAttribute(a,tt),_.fromBufferAttribute(l,R),x.fromBufferAttribute(l,P),b.fromBufferAttribute(l,tt),m.sub(h),v.sub(h),x.sub(_),b.sub(_);const H=1/(x.x*b.y-b.x*x.y);isFinite(H)&&(M.copy(m).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(H),y.copy(v).multiplyScalar(x.x).addScaledVector(m,-b.x).multiplyScalar(H),f[R].add(M),f[P].add(M),f[tt].add(M),d[R].add(y),d[P].add(y),d[tt].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let R=0,P=T.length;R<P;++R){const tt=T[R],H=tt.start,Z=tt.count;for(let Q=H,J=H+Z;Q<J;Q+=3)S(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const C=new lt,L=new lt,w=new lt,O=new lt;function F(R){w.fromBufferAttribute(s,R),O.copy(w);const P=f[R];C.copy(P),C.sub(w.multiplyScalar(w.dot(P))).normalize(),L.crossVectors(O,P);const H=L.dot(d[R])<0?-1:1;c.setXYZW(R,C.x,C.y,C.z,H)}for(let R=0,P=T.length;R<P;++R){const tt=T[R],H=tt.start,Z=tt.count;for(let Q=H,J=H+Z;Q<J;Q+=3)F(t.getX(Q+0)),F(t.getX(Q+1)),F(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ta(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let _=0,x=a.count;_<x;_++)a.setXYZ(_,0,0,0);const s=new lt,l=new lt,c=new lt,f=new lt,d=new lt,h=new lt,m=new lt,v=new lt;if(t)for(let _=0,x=t.count;_<x;_+=3){const b=t.getX(_+0),M=t.getX(_+1),y=t.getX(_+2);s.fromBufferAttribute(n,b),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(a,b),d.fromBufferAttribute(a,M),h.fromBufferAttribute(a,y),f.add(m),d.add(m),h.add(m),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),l.fromBufferAttribute(n,_+1),c.fromBufferAttribute(n,_+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),a.setXYZ(_+0,m.x,m.y,m.z),a.setXYZ(_+1,m.x,m.y,m.z),a.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Un.fromBufferAttribute(t,n),Un.normalize(),t.setXYZ(n,Un.x,Un.y,Un.z)}toNonIndexed(){function t(f,d){const h=f.array,m=f.itemSize,v=f.normalized,_=new h.constructor(d.length*m);let x=0,b=0;for(let M=0,y=d.length;M<y;M++){f.isInterleavedBufferAttribute?x=d[M]*f.data.stride+f.offset:x=d[M]*m;for(let S=0;S<m;S++)_[b++]=h[x++]}return new Ta(_,m,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ua,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=t(d,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const _=h[m],x=t(_,a);d.push(x)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const h=a[d];t.data.attributes[d]=h.toJSON(t.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];m.push(x.toJSON(t.data))}m.length>0&&(s[d]=m,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(n))}const l=t.morphAttributes;for(const h in l){const m=[],v=l[h];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sO=0;class ec extends hl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sO++}),this.uuid=Ju(),this.name="",this.type="Material",this.blending=jo,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Z0,this.blendDst=Q0,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jo&&(a.blending=this.blending),this.side!==Kr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Z0&&(a.blendSrc=this.blendSrc),this.blendDst!==Q0&&(a.blendDst=this.blendDst),this.blendEquation!==Cs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mb&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(t.textures),c=s(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const nr=new lt,a0=new lt,Nf=new lt,Xr=new lt,r0=new lt,Of=new lt,s0=new lt;class gA{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nr)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=nr.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(nr.copy(this.origin).addScaledVector(this.direction,n),nr.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){a0.copy(t).add(n).multiplyScalar(.5),Nf.copy(n).sub(t).normalize(),Xr.copy(this.origin).sub(a0);const l=t.distanceTo(n)*.5,c=-this.direction.dot(Nf),f=Xr.dot(this.direction),d=-Xr.dot(Nf),h=Xr.lengthSq(),m=Math.abs(1-c*c);let v,_,x,b;if(m>0)if(v=c*d-f,_=c*f-d,b=l*m,v>=0)if(_>=-b)if(_<=b){const M=1/m;v*=M,_*=M,x=v*(v+c*_+2*f)+_*(c*v+_+2*d)+h}else _=l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*d)+h;else _=-l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*d)+h;else _<=-b?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h):_<=b?(v=0,_=Math.min(Math.max(-l,-d),l),x=_*(_+2*d)+h):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(a0).addScaledVector(Nf,_),x}intersectSphere(t,n){nr.subVectors(t.center,this.origin);const a=nr.dot(this.direction),s=nr.dot(nr)-a*a,l=t.radius*t.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(a=(t.min.x-_.x)*h,s=(t.max.x-_.x)*h):(a=(t.max.x-_.x)*h,s=(t.min.x-_.x)*h),m>=0?(l=(t.min.y-_.y)*m,c=(t.max.y-_.y)*m):(l=(t.max.y-_.y)*m,c=(t.min.y-_.y)*m),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,nr)!==null}intersectTriangle(t,n,a,s,l){r0.subVectors(n,t),Of.subVectors(a,t),s0.crossVectors(r0,Of);let c=this.direction.dot(s0),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Xr.subVectors(this.origin,t);const d=f*this.direction.dot(Of.crossVectors(Xr,Of));if(d<0)return null;const h=f*this.direction.dot(r0.cross(Xr));if(h<0||d+h>c)return null;const m=-f*Xr.dot(s0);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vA extends ec{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=jT,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const zb=new pn,bs=new gA,Ff=new Qd,Vb=new lt,If=new lt,Bf=new lt,zf=new lt,o0=new lt,Vf=new lt,Hb=new lt,Hf=new lt;class dr extends ci{constructor(t=new Ua,n=new vA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Vf.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(o0.fromBufferAttribute(v,t),c?Vf.addScaledVector(o0,m):Vf.addScaledVector(o0.sub(n),m))}n.add(Vf)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ff.copy(a.boundingSphere),Ff.applyMatrix4(l),bs.copy(t.ray).recast(t.near),!(Ff.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Ff,Vb)===null||bs.origin.distanceToSquared(Vb)>(t.far-t.near)**2))&&(zb.copy(l).invert(),bs.copy(t.ray).applyMatrix4(zb),!(a.boundingBox!==null&&bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,bs)))}_computeIntersections(t,n,a){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,M=_.length;b<M;b++){const y=_[b],S=c[y.materialIndex],T=Math.max(y.start,x.start),C=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let L=T,w=C;L<w;L+=3){const O=f.getX(L),F=f.getX(L+1),R=f.getX(L+2);s=Gf(this,S,t,a,h,m,v,O,F,R),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const T=f.getX(y),C=f.getX(y+1),L=f.getX(y+2);s=Gf(this,c,t,a,h,m,v,T,C,L),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,M=_.length;b<M;b++){const y=_[b],S=c[y.materialIndex],T=Math.max(y.start,x.start),C=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let L=T,w=C;L<w;L+=3){const O=L,F=L+1,R=L+2;s=Gf(this,S,t,a,h,m,v,O,F,R),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const b=Math.max(0,x.start),M=Math.min(d.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const T=y,C=y+1,L=y+2;s=Gf(this,c,t,a,h,m,v,T,C,L),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function oO(e,t,n,a,s,l,c,f){let d;if(t.side===ui?d=a.intersectTriangle(c,l,s,!0,f):d=a.intersectTriangle(s,l,c,t.side===Kr,f),d===null)return null;Hf.copy(f),Hf.applyMatrix4(e.matrixWorld);const h=n.ray.origin.distanceTo(Hf);return h<n.near||h>n.far?null:{distance:h,point:Hf.clone(),object:e}}function Gf(e,t,n,a,s,l,c,f,d,h){e.getVertexPosition(f,If),e.getVertexPosition(d,Bf),e.getVertexPosition(h,zf);const m=oO(e,t,n,a,If,Bf,zf,Hb);if(m){const v=new lt;ta.getBarycoord(Hb,If,Bf,zf,v),s&&(m.uv=ta.getInterpolatedAttribute(s,f,d,h,v,new Ke)),l&&(m.uv1=ta.getInterpolatedAttribute(l,f,d,h,v,new Ke)),c&&(m.normal=ta.getInterpolatedAttribute(c,f,d,h,v,new lt),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new lt,materialIndex:0};ta.getNormal(If,Bf,zf,_.normal),m.face=_,m.barycoord=v}return m}class lO extends ei{constructor(t=null,n=1,a=1,s,l,c,f,d,h=Vn,m=Vn,v,_){super(null,c,f,d,h,m,s,l,v,_),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const l0=new lt,uO=new lt,cO=new _e;class Rs{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=l0.subVectors(a,n).cross(uO.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(l0),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||cO.getNormalMatrix(t),s=this.coplanarPoint(l0).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new Qd,fO=new Ke(.5,.5),kf=new lt;class _A{constructor(t=new Rs,n=new Rs,a=new Rs,s=new Rs,l=new Rs,c=new Rs){this.planes=[t,n,a,s,l,c]}set(t,n,a,s,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ya,a=!1){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],_=l[6],x=l[7],b=l[8],M=l[9],y=l[10],S=l[11],T=l[12],C=l[13],L=l[14],w=l[15];if(s[0].setComponents(h-c,x-m,S-b,w-T).normalize(),s[1].setComponents(h+c,x+m,S+b,w+T).normalize(),s[2].setComponents(h+f,x+v,S+M,w+C).normalize(),s[3].setComponents(h-f,x-v,S-M,w-C).normalize(),a)s[4].setComponents(d,_,y,L).normalize(),s[5].setComponents(h-d,x-_,S-y,w-L).normalize();else if(s[4].setComponents(h-d,x-_,S-y,w-L).normalize(),n===ya)s[5].setComponents(h+d,x+_,S+y,w+L).normalize();else if(n===Nd)s[5].setComponents(d,_,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);const n=fO.distanceTo(t.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(kf.x=s.normal.x>0?t.max.x:t.min.x,kf.y=s.normal.y>0?t.max.y:t.min.y,kf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(kf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dO extends ec{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Id=new lt,Bd=new lt,Gb=new pn,_u=new gA,Xf=new Qd,u0=new lt,kb=new lt;class hO extends ci{constructor(t=new Ua,n=new dO){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let s=1,l=n.count;s<l;s++)Id.fromBufferAttribute(n,s-1),Bd.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=Id.distanceTo(Bd);t.setAttribute("lineDistance",new ra(a,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Xf.copy(a.boundingSphere),Xf.applyMatrix4(s),Xf.radius+=l,t.ray.intersectsSphere(Xf)===!1)return;Gb.copy(s).invert(),_u.copy(t.ray).applyMatrix4(Gb);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=a.index,_=a.attributes.position;if(m!==null){const x=Math.max(0,c.start),b=Math.min(m.count,c.start+c.count);for(let M=x,y=b-1;M<y;M+=h){const S=m.getX(M),T=m.getX(M+1),C=Wf(this,t,_u,d,S,T,M);C&&n.push(C)}if(this.isLineLoop){const M=m.getX(b-1),y=m.getX(x),S=Wf(this,t,_u,d,M,y,b-1);S&&n.push(S)}}else{const x=Math.max(0,c.start),b=Math.min(_.count,c.start+c.count);for(let M=x,y=b-1;M<y;M+=h){const S=Wf(this,t,_u,d,M,M+1,M);S&&n.push(S)}if(this.isLineLoop){const M=Wf(this,t,_u,d,b-1,x,b-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wf(e,t,n,a,s,l,c){const f=e.geometry.attributes.position;if(Id.fromBufferAttribute(f,s),Bd.fromBufferAttribute(f,l),n.distanceSqToSegment(Id,Bd,u0,kb)>a)return;u0.applyMatrix4(e.matrixWorld);const h=t.ray.origin.distanceTo(u0);if(!(h<t.near||h>t.far))return{distance:h,point:kb.clone().applyMatrix4(e.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:e}}const Xb=new lt,Wb=new lt;class c8 extends hO{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let s=0,l=n.count;s<l;s+=2)Xb.fromBufferAttribute(n,s),Wb.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+Xb.distanceTo(Wb);t.setAttribute("lineDistance",new ra(a,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yA extends ei{constructor(t=[],n=zs,a,s,l,c,f,d,h,m){super(t,n,a,s,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Hu extends ei{constructor(t,n,a=wa,s,l,c,f=Vn,d=Vn,h,m=cr,v=1){if(m!==cr&&m!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:v};super(_,s,l,c,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $v(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pO extends Hu{constructor(t,n=wa,a=zs,s,l,c=Vn,f=Vn,d,h=cr){const m={width:t,height:t,depth:1},v=[m,m,m,m,m,m];super(t,t,n,a,s,l,c,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xA extends ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nc extends Ua{constructor(t=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,a,n,t,c,l,0),b("z","y","x",1,-1,a,n,-t,c,l,1),b("x","z","y",1,1,t,a,n,s,c,2),b("x","z","y",1,-1,t,a,-n,s,c,3),b("x","y","z",1,-1,t,n,a,s,l,4),b("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new ra(h,3)),this.setAttribute("normal",new ra(m,3)),this.setAttribute("uv",new ra(v,2));function b(M,y,S,T,C,L,w,O,F,R,P){const tt=L/F,H=w/R,Z=L/2,Q=w/2,J=O/2,K=F+1,I=R+1;let z=0,it=0;const ct=new lt;for(let ht=0;ht<I;ht++){const B=ht*H-Q;for(let X=0;X<K;X++){const _t=X*tt-Z;ct[M]=_t*T,ct[y]=B*C,ct[S]=J,h.push(ct.x,ct.y,ct.z),ct[M]=0,ct[y]=0,ct[S]=O>0?1:-1,m.push(ct.x,ct.y,ct.z),v.push(X/F),v.push(1-ht/R),z+=1}}for(let ht=0;ht<R;ht++)for(let B=0;B<F;B++){const X=_+B+K*ht,_t=_+B+K*(ht+1),Rt=_+(B+1)+K*(ht+1),Ft=_+(B+1)+K*ht;d.push(X,_t,Ft),d.push(_t,Rt,Ft),it+=6}f.addGroup(x,it,P),x+=it,_+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jd extends Ua{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,c=n/2,f=Math.floor(a),d=Math.floor(s),h=f+1,m=d+1,v=t/f,_=n/d,x=[],b=[],M=[],y=[];for(let S=0;S<m;S++){const T=S*_-c;for(let C=0;C<h;C++){const L=C*v-l;b.push(L,-T,0),M.push(0,0,1),y.push(C/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let T=0;T<f;T++){const C=T+h*S,L=T+h*(S+1),w=T+1+h*(S+1),O=T+1+h*S;x.push(C,L,O),x.push(L,w,O)}this.setIndex(x),this.setAttribute("position",new ra(b,3)),this.setAttribute("normal",new ra(M,3)),this.setAttribute("uv",new ra(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jd(t.width,t.height,t.widthSegments,t.heightSegments)}}function il(e){const t={};for(const n in e){t[n]={};for(const a in e[n]){const s=e[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Qn(e){const t={};for(let n=0;n<e.length;n++){const a=il(e[n]);for(const s in a)t[s]=a[s]}return t}function mO(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function SA(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const gO={clone:il,merge:Qn};var vO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_O=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Da extends ec{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vO,this.fragmentShader=_O,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=il(t.uniforms),this.uniformsGroups=mO(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class yO extends Da{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xO extends ec{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class SO extends ec{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const qf=new lt,Yf=new pl,da=new lt;class bA extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qf,Yf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qf,Yf,da.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(qf,Yf,da),da.x===1&&da.y===1&&da.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qf,Yf,da.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new lt,qb=new Ke,Yb=new Ke;class Ji extends bA{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Vg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zm*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vg*2*Math.atan(Math.tan(zm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-t/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Wr.x,Wr.y).multiplyScalar(-t/Wr.z)}getViewSize(t,n){return this.getViewBounds(t,qb,Yb),n.subVectors(Yb,qb)}setViewOffset(t,n,a,s,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(zm*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*a/h,s*=c.width/d,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class MA extends bA{constructor(t=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Oo=-90,Fo=1;class bO extends ci{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ji(Oo,Fo,t,n);s.layers=this.layers,this.add(s);const l=new Ji(Oo,Fo,t,n);l.layers=this.layers,this.add(l);const c=new Ji(Oo,Fo,t,n);c.layers=this.layers,this.add(c);const f=new Ji(Oo,Fo,t,n);f.layers=this.layers,this.add(f);const d=new Ji(Oo,Fo,t,n);d.layers=this.layers,this.add(d);const h=new Ji(Oo,Fo,t,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,d]=n;for(const h of n)this.remove(h);if(t===ya)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Nd)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of n)this.add(h),h.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),t.setRenderTarget(a,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),t.setRenderTarget(v,_,x),t.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class MO extends Ji{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class f8{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=EO.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function EO(){this._document.hidden===!1&&this.reset()}function jb(e,t,n,a){const s=TO(a);switch(n){case oA:return e*t;case uA:return e*t/s.components*s.byteLength;case Xv:return e*t/s.components*s.byteLength;case el:return e*t*2/s.components*s.byteLength;case Wv:return e*t*2/s.components*s.byteLength;case lA:return e*t*3/s.components*s.byteLength;case na:return e*t*4/s.components*s.byteLength;case qv:return e*t*4/s.components*s.byteLength;case md:case gd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vd:case _d:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ug:case fg:return Math.max(e,16)*Math.max(t,8)/4;case lg:case cg:return Math.max(e,8)*Math.max(t,8)/2;case dg:case hg:case mg:case gg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case pg:case vg:case _g:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yg:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xg:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sg:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bg:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Mg:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Eg:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Tg:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ag:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Rg:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cg:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case wg:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dg:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Lg:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ug:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pg:case Ng:case Og:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Fg:case Ig:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bg:case zg:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function TO(e){switch(e){case Fi:case iA:return{byteLength:1,components:1};case zu:case aA:case ur:return{byteLength:2,components:1};case Gv:case kv:return{byteLength:2,components:4};case wa:case Hv:case _a:return{byteLength:4,components:1};case rA:case sA:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vv}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vv);function EA(){let e=null,t=!1,n=null,a=null;function s(l,c){n(l,c),a=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){e=l}}}function AO(e){const t=new WeakMap;function n(f,d){const h=f.array,m=f.usage,v=h.byteLength,_=e.createBuffer();e.bindBuffer(d,_),e.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=e.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=e.SHORT;else if(h instanceof Uint32Array)x=e.UNSIGNED_INT;else if(h instanceof Int32Array)x=e.INT;else if(h instanceof Int8Array)x=e.BYTE;else if(h instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,h){const m=d.array,v=d.updateRanges;if(e.bindBuffer(h,f),v.length===0)e.bufferSubData(h,0,m);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],M=v[x];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++_,v[_]=M)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const M=v[x];e.bufferSubData(h,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(e.deleteBuffer(d.buffer),t.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:c}}var RO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CO=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LO=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PO=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OO=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,FO=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zO=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,VO=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HO=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GO=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XO=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WO=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jO=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$O=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,KO=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ZO=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QO=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JO=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i4="gl_FragColor = linearToOutputTexel( gl_FragColor );",a4=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,l4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p4=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,m4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,T4=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R4=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C4=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w4=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D4=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U4=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,P4=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N4=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O4=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F4=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,I4=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B4=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z4=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V4=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H4=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G4=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k4=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X4=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W4=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y4=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j4=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$4=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K4=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Z4=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q4=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,J4=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eF=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lF=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uF=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fF=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mF=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_F=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xF=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SF=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NF=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OF=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,FF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BF=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zF=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VF=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HF=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GF=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kF=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XF=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WF=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qF=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YF=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jF=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$F=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KF=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZF=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QF=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,e5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:RO,alphahash_pars_fragment:CO,alphamap_fragment:wO,alphamap_pars_fragment:DO,alphatest_fragment:LO,alphatest_pars_fragment:UO,aomap_fragment:PO,aomap_pars_fragment:NO,batching_pars_vertex:OO,batching_vertex:FO,begin_vertex:IO,beginnormal_vertex:BO,bsdfs:zO,iridescence_fragment:VO,bumpmap_pars_fragment:HO,clipping_planes_fragment:GO,clipping_planes_pars_fragment:kO,clipping_planes_pars_vertex:XO,clipping_planes_vertex:WO,color_fragment:qO,color_pars_fragment:YO,color_pars_vertex:jO,color_vertex:$O,common:KO,cube_uv_reflection_fragment:ZO,defaultnormal_vertex:QO,displacementmap_pars_vertex:JO,displacementmap_vertex:t4,emissivemap_fragment:e4,emissivemap_pars_fragment:n4,colorspace_fragment:i4,colorspace_pars_fragment:a4,envmap_fragment:r4,envmap_common_pars_fragment:s4,envmap_pars_fragment:o4,envmap_pars_vertex:l4,envmap_physical_pars_fragment:y4,envmap_vertex:u4,fog_vertex:c4,fog_pars_vertex:f4,fog_fragment:d4,fog_pars_fragment:h4,gradientmap_pars_fragment:p4,lightmap_pars_fragment:m4,lights_lambert_fragment:g4,lights_lambert_pars_fragment:v4,lights_pars_begin:_4,lights_toon_fragment:x4,lights_toon_pars_fragment:S4,lights_phong_fragment:b4,lights_phong_pars_fragment:M4,lights_physical_fragment:E4,lights_physical_pars_fragment:T4,lights_fragment_begin:A4,lights_fragment_maps:R4,lights_fragment_end:C4,logdepthbuf_fragment:w4,logdepthbuf_pars_fragment:D4,logdepthbuf_pars_vertex:L4,logdepthbuf_vertex:U4,map_fragment:P4,map_pars_fragment:N4,map_particle_fragment:O4,map_particle_pars_fragment:F4,metalnessmap_fragment:I4,metalnessmap_pars_fragment:B4,morphinstance_vertex:z4,morphcolor_vertex:V4,morphnormal_vertex:H4,morphtarget_pars_vertex:G4,morphtarget_vertex:k4,normal_fragment_begin:X4,normal_fragment_maps:W4,normal_pars_fragment:q4,normal_pars_vertex:Y4,normal_vertex:j4,normalmap_pars_fragment:$4,clearcoat_normal_fragment_begin:K4,clearcoat_normal_fragment_maps:Z4,clearcoat_pars_fragment:Q4,iridescence_pars_fragment:J4,opaque_fragment:tF,packing:eF,premultiplied_alpha_fragment:nF,project_vertex:iF,dithering_fragment:aF,dithering_pars_fragment:rF,roughnessmap_fragment:sF,roughnessmap_pars_fragment:oF,shadowmap_pars_fragment:lF,shadowmap_pars_vertex:uF,shadowmap_vertex:cF,shadowmask_pars_fragment:fF,skinbase_vertex:dF,skinning_pars_vertex:hF,skinning_vertex:pF,skinnormal_vertex:mF,specularmap_fragment:gF,specularmap_pars_fragment:vF,tonemapping_fragment:_F,tonemapping_pars_fragment:yF,transmission_fragment:xF,transmission_pars_fragment:SF,uv_pars_fragment:bF,uv_pars_vertex:MF,uv_vertex:EF,worldpos_vertex:TF,background_vert:AF,background_frag:RF,backgroundCube_vert:CF,backgroundCube_frag:wF,cube_vert:DF,cube_frag:LF,depth_vert:UF,depth_frag:PF,distance_vert:NF,distance_frag:OF,equirect_vert:FF,equirect_frag:IF,linedashed_vert:BF,linedashed_frag:zF,meshbasic_vert:VF,meshbasic_frag:HF,meshlambert_vert:GF,meshlambert_frag:kF,meshmatcap_vert:XF,meshmatcap_frag:WF,meshnormal_vert:qF,meshnormal_frag:YF,meshphong_vert:jF,meshphong_frag:$F,meshphysical_vert:KF,meshphysical_frag:ZF,meshtoon_vert:QF,meshtoon_frag:JF,points_vert:t5,points_frag:e5,shadow_vert:n5,shadow_frag:i5,sprite_vert:a5,sprite_frag:r5},It={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},ma={basic:{uniforms:Qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new We(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([It.points,It.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([It.common,It.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([It.sprite,It.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Qn([It.common,It.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Qn([It.lights,It.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};ma.physical={uniforms:Qn([ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const jf={r:0,b:0,g:0},Es=new fr,s5=new pn;function o5(e,t,n,a,s,l){const c=new We(0);let f=s===!0?0:1,d,h,m=null,v=0,_=null;function x(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){const L=T.backgroundBlurriness>0;C=t.get(C,L)}return C}function b(T){let C=!1;const L=x(T);L===null?y(c,f):L&&L.isColor&&(y(L,1),C=!0);const w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,l):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(e.autoClear||C)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(T,C){const L=x(C);L&&(L.isCubeTexture||L.mapping===Zd)?(h===void 0&&(h=new dr(new nc(1,1,1),new Da({name:"BackgroundCubeMaterial",uniforms:il(ma.backgroundCube.uniforms),vertexShader:ma.backgroundCube.vertexShader,fragmentShader:ma.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Es.copy(C.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(s5.makeRotationFromEuler(Es)),h.material.toneMapped=De.getTransfer(L.colorSpace)!==Xe,(m!==L||v!==L.version||_!==e.toneMapping)&&(h.material.needsUpdate=!0,m=L,v=L.version,_=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(d===void 0&&(d=new dr(new Jd(2,2),new Da({name:"BackgroundMaterial",uniforms:il(ma.background.uniforms),vertexShader:ma.background.vertexShader,fragmentShader:ma.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=L,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=De.getTransfer(L.colorSpace)!==Xe,L.matrixAutoUpdate===!0&&L.updateMatrix(),d.material.uniforms.uvTransform.value.copy(L.matrix),(m!==L||v!==L.version||_!==e.toneMapping)&&(d.material.needsUpdate=!0,m=L,v=L.version,_=e.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function y(T,C){T.getRGB(jf,SA(e)),n.buffers.color.setClear(jf.r,jf.g,jf.b,C,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(T,C=1){c.set(T),f=C,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,y(c,f)},render:b,addToRenderList:M,dispose:S}}function l5(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,c=!1;function f(H,Z,Q,J,K){let I=!1;const z=v(H,J,Q,Z);l!==z&&(l=z,h(l.object)),I=x(H,J,Q,K),I&&b(H,J,Q,K),K!==null&&t.update(K,e.ELEMENT_ARRAY_BUFFER),(I||c)&&(c=!1,L(H,Z,Q,J),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return e.createVertexArray()}function h(H){return e.bindVertexArray(H)}function m(H){return e.deleteVertexArray(H)}function v(H,Z,Q,J){const K=J.wireframe===!0;let I=a[Z.id];I===void 0&&(I={},a[Z.id]=I);const z=H.isInstancedMesh===!0?H.id:0;let it=I[z];it===void 0&&(it={},I[z]=it);let ct=it[Q.id];ct===void 0&&(ct={},it[Q.id]=ct);let ht=ct[K];return ht===void 0&&(ht=_(d()),ct[K]=ht),ht}function _(H){const Z=[],Q=[],J=[];for(let K=0;K<n;K++)Z[K]=0,Q[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:Q,attributeDivisors:J,object:H,attributes:{},index:null}}function x(H,Z,Q,J){const K=l.attributes,I=Z.attributes;let z=0;const it=Q.getAttributes();for(const ct in it)if(it[ct].location>=0){const B=K[ct];let X=I[ct];if(X===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(X=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(X=H.instanceColor)),B===void 0||B.attribute!==X||X&&B.data!==X.data)return!0;z++}return l.attributesNum!==z||l.index!==J}function b(H,Z,Q,J){const K={},I=Z.attributes;let z=0;const it=Q.getAttributes();for(const ct in it)if(it[ct].location>=0){let B=I[ct];B===void 0&&(ct==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),ct==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const X={};X.attribute=B,B&&B.data&&(X.data=B.data),K[ct]=X,z++}l.attributes=K,l.attributesNum=z,l.index=J}function M(){const H=l.newAttributes;for(let Z=0,Q=H.length;Z<Q;Z++)H[Z]=0}function y(H){S(H,0)}function S(H,Z){const Q=l.newAttributes,J=l.enabledAttributes,K=l.attributeDivisors;Q[H]=1,J[H]===0&&(e.enableVertexAttribArray(H),J[H]=1),K[H]!==Z&&(e.vertexAttribDivisor(H,Z),K[H]=Z)}function T(){const H=l.newAttributes,Z=l.enabledAttributes;for(let Q=0,J=Z.length;Q<J;Q++)Z[Q]!==H[Q]&&(e.disableVertexAttribArray(Q),Z[Q]=0)}function C(H,Z,Q,J,K,I,z){z===!0?e.vertexAttribIPointer(H,Z,Q,K,I):e.vertexAttribPointer(H,Z,Q,J,K,I)}function L(H,Z,Q,J){M();const K=J.attributes,I=Q.getAttributes(),z=Z.defaultAttributeValues;for(const it in I){const ct=I[it];if(ct.location>=0){let ht=K[it];if(ht===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(ht=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(ht=H.instanceColor)),ht!==void 0){const B=ht.normalized,X=ht.itemSize,_t=t.get(ht);if(_t===void 0)continue;const Rt=_t.buffer,Ft=_t.type,nt=_t.bytesPerElement,yt=Ft===e.INT||Ft===e.UNSIGNED_INT||ht.gpuType===Hv;if(ht.isInterleavedBufferAttribute){const pt=ht.data,Ct=pt.stride,Dt=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let kt=0;kt<ct.locationSize;kt++)S(ct.location+kt,pt.meshPerAttribute);H.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let kt=0;kt<ct.locationSize;kt++)y(ct.location+kt);e.bindBuffer(e.ARRAY_BUFFER,Rt);for(let kt=0;kt<ct.locationSize;kt++)C(ct.location+kt,X/ct.locationSize,Ft,B,Ct*nt,(Dt+X/ct.locationSize*kt)*nt,yt)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<ct.locationSize;pt++)S(ct.location+pt,ht.meshPerAttribute);H.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<ct.locationSize;pt++)y(ct.location+pt);e.bindBuffer(e.ARRAY_BUFFER,Rt);for(let pt=0;pt<ct.locationSize;pt++)C(ct.location+pt,X/ct.locationSize,Ft,B,X*nt,X/ct.locationSize*pt*nt,yt)}}else if(z!==void 0){const B=z[it];if(B!==void 0)switch(B.length){case 2:e.vertexAttrib2fv(ct.location,B);break;case 3:e.vertexAttrib3fv(ct.location,B);break;case 4:e.vertexAttrib4fv(ct.location,B);break;default:e.vertexAttrib1fv(ct.location,B)}}}}T()}function w(){P();for(const H in a){const Z=a[H];for(const Q in Z){const J=Z[Q];for(const K in J){const I=J[K];for(const z in I)m(I[z].object),delete I[z];delete J[K]}}delete a[H]}}function O(H){if(a[H.id]===void 0)return;const Z=a[H.id];for(const Q in Z){const J=Z[Q];for(const K in J){const I=J[K];for(const z in I)m(I[z].object),delete I[z];delete J[K]}}delete a[H.id]}function F(H){for(const Z in a){const Q=a[Z];for(const J in Q){const K=Q[J];if(K[H.id]===void 0)continue;const I=K[H.id];for(const z in I)m(I[z].object),delete I[z];delete K[H.id]}}}function R(H){for(const Z in a){const Q=a[Z],J=H.isInstancedMesh===!0?H.id:0,K=Q[J];if(K!==void 0){for(const I in K){const z=K[I];for(const it in z)m(z[it].object),delete z[it];delete K[I]}delete Q[J],Object.keys(Q).length===0&&delete a[Z]}}}function P(){tt(),c=!0,l!==s&&(l=s,h(l.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:P,resetDefaultState:tt,dispose:w,releaseStatesOfGeometry:O,releaseStatesOfObject:R,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:y,disableUnusedAttributes:T}}function u5(e,t,n){let a;function s(h){a=h}function l(h,m){e.drawArrays(a,h,m),n.update(m,a,1)}function c(h,m,v){v!==0&&(e.drawArraysInstanced(a,h,m,v),n.update(m,a,v))}function f(h,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,v);let x=0;for(let b=0;b<v;b++)x+=m[b];n.update(x,a,1)}function d(h,m,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<h.length;b++)c(h[b],m[b],_[b]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,m,0,_,0,v);let b=0;for(let M=0;M<v;M++)b+=m[M]*_[M];n.update(b,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function c5(e,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(F){return!(F!==na&&a.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const R=F===ur&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Fi&&a.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==_a&&!R)}function d(F){if(F==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(ue("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),b=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),y=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),S=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),C=e.getParameter(e.MAX_VARYING_VECTORS),L=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),O=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:L,maxSamples:w,samples:O}}function f5(e){const t=this;let n=null,a=0,s=!1,l=!1;const c=new Rs,f=new _e,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||a!==0||s;return s=_,a=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){n=m(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,M=v.clipIntersection,y=v.clipShadows,S=e.get(v);if(!s||b===null||b.length===0||l&&!y)l?m(null):h();else{const T=l?0:a,C=T*4;let L=S.clippingState||null;d.value=L,L=m(b,_,C,x);for(let w=0;w!==C;++w)L[w]=n[w];S.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function m(v,_,x,b){const M=v!==null?v.length:0;let y=null;if(M!==0){if(y=d.value,b!==!0||y===null){const S=x+M*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,L=x;C!==M;++C,L+=4)c.copy(v[C]).applyMatrix4(T,f),c.normal.toArray(y,L),y[L+3]=c.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}const $r=4,$b=[.125,.215,.35,.446,.526,.582],ws=20,d5=256,yu=new MA,Kb=new We;let c0=null,f0=0,d0=0,h0=!1;const h5=new lt;class Zb{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=h5}=l;c0=this._renderer.getRenderTarget(),f0=this._renderer.getActiveCubeFace(),d0=this._renderer.getActiveMipmapLevel(),h0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,a,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(c0,f0,d0),this._renderer.xr.enabled=h0,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zs||t.mapping===tl?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),c0=this._renderer.getRenderTarget(),f0=this._renderer.getActiveCubeFace(),d0=this._renderer.getActiveMipmapLevel(),h0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:ur,format:na,colorSpace:nl,depthBuffer:!1},s=Qb(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qb(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=p5(l)),this._blurMaterial=g5(l,t,n),this._ggxMaterial=m5(l,t,n)}return s}_compileMaterial(t){const n=new dr(new Ua,t);this._renderer.compile(n,yu)}_sceneToCubeUV(t,n,a,s,l){const d=new Ji(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(Kb),v.toneMapping=Ma,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dr(new nc,new vA({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const T=t.background;T?T.isColor&&(y.color.copy(T),t.background=null,S=!0):(y.color.copy(Kb),S=!0);for(let C=0;C<6;C++){const L=C%3;L===0?(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[C],l.y,l.z)):L===1?(d.up.set(0,0,h[C]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[C],l.z)):(d.up.set(0,h[C],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[C]));const w=this._cubeSize;Io(s,L*w,C>2?w:0,w,w),v.setRenderTarget(s),S&&v.render(M,d),v.render(t,d)}v.toneMapping=x,v.autoClear=_,t.background=T}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===zs||t.mapping===tl;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jb());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Io(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,yu)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const d=c.uniforms,h=a/(this._lodMeshes.length-1),m=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),_=0+h*1.25,x=v*_,{_lodMax:b}=this,M=this._sizeLods[a],y=3*M*(a>b-$r?a-b+$r:0),S=4*(this._cubeSize-M);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=b-n,Io(l,y,S,3*M,2*M),s.setRenderTarget(l),s.render(f,yu),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=b-a,Io(t,y,S,3*M,2*M),s.setRenderTarget(t),s.render(f,yu)}_blur(t,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",l),this._halfBlur(c,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[s];v.material=h;const _=h.uniforms,x=this._sizeLods[a]-1,b=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ws-1),M=l/b,y=isFinite(l)?1+Math.floor(m*M):ws;y>ws&&ue(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const S=[];let T=0;for(let F=0;F<ws;++F){const R=F/M,P=Math.exp(-R*R/2);S.push(P),F===0?T+=P:F<y&&(T+=2*P)}for(let F=0;F<S.length;F++)S[F]=S[F]/T;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:C}=this;_.dTheta.value=b,_.mipInt.value=C-a;const L=this._sizeLods[s],w=3*L*(s>C-$r?s-C+$r:0),O=4*(this._cubeSize-L);Io(n,w,O,3*L,2*L),d.setRenderTarget(n),d.render(v,yu)}}function p5(e){const t=[],n=[],a=[];let s=e;const l=e-$r+1+$b.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);t.push(f);let d=1/f;c>e-$r?d=$b[c-e+$r-1]:c===0&&(d=0),n.push(d);const h=1/(f-2),m=-h,v=1+h,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,b=6,M=3,y=2,S=1,T=new Float32Array(M*b*x),C=new Float32Array(y*b*x),L=new Float32Array(S*b*x);for(let O=0;O<x;O++){const F=O%3*2/3-1,R=O>2?0:-1,P=[F,R,0,F+2/3,R,0,F+2/3,R+1,0,F,R,0,F+2/3,R+1,0,F,R+1,0];T.set(P,M*b*O),C.set(_,y*b*O);const tt=[O,O,O,O,O,O];L.set(tt,S*b*O)}const w=new Ua;w.setAttribute("position",new Ta(T,M)),w.setAttribute("uv",new Ta(C,y)),w.setAttribute("faceIndex",new Ta(L,S)),a.push(new dr(w,null)),s>$r&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Qb(e,t,n){const a=new Ea(e,t,n);return a.texture.mapping=Zd,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Io(e,t,n,a,s){e.viewport.set(t,n,a,s),e.scissor.set(t,n,a,s)}function m5(e,t,n){return new Da({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:d5,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function g5(e,t,n){const a=new Float32Array(ws),s=new lt(0,1,0);return new Da({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Jb(){return new Da({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function tM(){return new Da({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class TA extends Ea{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new yA(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nc(5,5,5),l=new Da({name:"CubemapFromEquirect",uniforms:il(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ui,blending:rr});l.uniforms.tEquirect.value=n;const c=new dr(s,l),f=n.minFilter;return n.minFilter===Us&&(n.minFilter=qn),new bO(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(l)}}function v5(e){let t=new WeakMap,n=new WeakMap,a=null;function s(_,x=!1){return _==null?null:x?c(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===Fm||x===Im)if(t.has(_)){const b=t.get(_).texture;return f(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const M=new TA(b.height);return M.fromEquirectangularTexture(e,_),t.set(_,M),_.addEventListener("dispose",h),f(M.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const x=_.mapping,b=x===Fm||x===Im,M=x===zs||x===tl;if(b||M){let y=n.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new Zb(e)),y=b?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),y.texture;if(y!==void 0)return y.texture;{const T=_.image;return b&&T&&T.height>0||M&&T&&d(T)?(a===null&&(a=new Zb(e)),y=b?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,n.set(_,y),_.addEventListener("dispose",m),y.texture):null}}}return _}function f(_,x){return x===Fm?_.mapping=zs:x===Im&&(_.mapping=tl),_}function d(_){let x=0;const b=6;for(let M=0;M<b;M++)_[M]!==void 0&&x++;return x===b}function h(_){const x=_.target;x.removeEventListener("dispose",h);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function m(_){const x=_.target;x.removeEventListener("dispose",m);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:v}}function _5(e){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=e.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Fd("WebGLRenderer: "+a+" extension not supported."),s}}}function y5(e,t,n,a){const s={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",c),delete s[_.id];const x=l.get(_);x&&(t.remove(x),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,n.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],e.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,b=v.attributes.position;let M=0;if(b===void 0)return;if(x!==null){const T=x.array;M=x.version;for(let C=0,L=T.length;C<L;C+=3){const w=T[C+0],O=T[C+1],F=T[C+2];_.push(w,O,O,F,F,w)}}else{const T=b.array;M=b.version;for(let C=0,L=T.length/3-1;C<L;C+=3){const w=C+0,O=C+1,F=C+2;_.push(w,O,O,F,F,w)}}const y=new(b.count>=65535?mA:pA)(_,1);y.version=M;const S=l.get(v);S&&t.remove(S),l.set(v,y)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function x5(e,t,n){let a;function s(_){a=_}let l,c;function f(_){l=_.type,c=_.bytesPerElement}function d(_,x){e.drawElements(a,x,l,_*c),n.update(x,a,1)}function h(_,x,b){b!==0&&(e.drawElementsInstanced(a,x,l,_*c,b),n.update(x,a,b))}function m(_,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,_,0,b);let y=0;for(let S=0;S<b;S++)y+=x[S];n.update(y,a,1)}function v(_,x,b,M){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<_.length;S++)h(_[S]/c,x[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(a,x,0,l,_,0,M,0,b);let S=0;for(let T=0;T<b;T++)S+=x[T]*M[T];n.update(S,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function S5(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case e.TRIANGLES:n.triangles+=f*(l/3);break;case e.LINES:n.lines+=f*(l/2);break;case e.LINE_STRIP:n.lines+=f*(l-1);break;case e.LINE_LOOP:n.lines+=f*l;break;case e.POINTS:n.points+=f*l;break;default:Ne("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function b5(e,t,n){const a=new WeakMap,s=new hn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=a.get(f);if(_===void 0||_.count!==v){let P=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const x=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],T=f.morphAttributes.color||[];let C=0;x===!0&&(C=1),b===!0&&(C=2),M===!0&&(C=3);let L=f.attributes.position.count*C,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const O=new Float32Array(L*w*4*v),F=new fA(O,L,w,v);F.type=_a,F.needsUpdate=!0;const R=C*4;for(let tt=0;tt<v;tt++){const H=y[tt],Z=S[tt],Q=T[tt],J=L*w*4*tt;for(let K=0;K<H.count;K++){const I=K*R;x===!0&&(s.fromBufferAttribute(H,K),O[J+I+0]=s.x,O[J+I+1]=s.y,O[J+I+2]=s.z,O[J+I+3]=0),b===!0&&(s.fromBufferAttribute(Z,K),O[J+I+4]=s.x,O[J+I+5]=s.y,O[J+I+6]=s.z,O[J+I+7]=0),M===!0&&(s.fromBufferAttribute(Q,K),O[J+I+8]=s.x,O[J+I+9]=s.y,O[J+I+10]=s.z,O[J+I+11]=Q.itemSize===4?s.w:1)}}_={count:v,texture:F,size:new Ke(L,w)},a.set(f,_),f.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(e,"morphTexture",c.morphTexture,n);else{let x=0;for(let M=0;M<h.length;M++)x+=h[M];const b=f.morphTargetsRelative?1:1-x;d.getUniforms().setValue(e,"morphTargetBaseInfluence",b),d.getUniforms().setValue(e,"morphTargetInfluences",h)}d.getUniforms().setValue(e,"morphTargetsTexture",_.texture,n),d.getUniforms().setValue(e,"morphTargetsTextureSize",_.size)}return{update:l}}function M5(e,t,n,a,s){let l=new WeakMap;function c(h){const m=s.render.frame,v=h.geometry,_=t.get(h,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(n.update(h.instanceMatrix,e.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,e.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),a.releaseStatesOfObject(m),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const E5={[$T]:"LINEAR_TONE_MAPPING",[KT]:"REINHARD_TONE_MAPPING",[ZT]:"CINEON_TONE_MAPPING",[QT]:"ACES_FILMIC_TONE_MAPPING",[tA]:"AGX_TONE_MAPPING",[eA]:"NEUTRAL_TONE_MAPPING",[JT]:"CUSTOM_TONE_MAPPING"};function T5(e,t,n,a,s){const l=new Ea(t,n,{type:e,depthBuffer:a,stencilBuffer:s}),c=new Ea(t,n,{type:ur,depthBuffer:!1,stencilBuffer:!1}),f=new Ua;f.setAttribute("position",new ra([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ra([0,2,0,0,2,0],2));const d=new yO({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new dr(f,d),m=new MA(-1,1,1,-1,0,1);let v=null,_=null,x=!1,b,M=null,y=[],S=!1;this.setSize=function(T,C){l.setSize(T,C),c.setSize(T,C);for(let L=0;L<y.length;L++){const w=y[L];w.setSize&&w.setSize(T,C)}},this.setEffects=function(T){y=T,S=y.length>0&&y[0].isRenderPass===!0;const C=l.width,L=l.height;for(let w=0;w<y.length;w++){const O=y[w];O.setSize&&O.setSize(C,L)}},this.begin=function(T,C){if(x||T.toneMapping===Ma&&y.length===0)return!1;if(M=C,C!==null){const L=C.width,w=C.height;(l.width!==L||l.height!==w)&&this.setSize(L,w)}return S===!1&&T.setRenderTarget(l),b=T.toneMapping,T.toneMapping=Ma,!0},this.hasRenderPass=function(){return S},this.end=function(T,C){T.toneMapping=b,x=!0;let L=l,w=c;for(let O=0;O<y.length;O++){const F=y[O];if(F.enabled!==!1&&(F.render(T,w,L,C),F.needsSwap!==!1)){const R=L;L=w,w=R}}if(v!==T.outputColorSpace||_!==T.toneMapping){v=T.outputColorSpace,_=T.toneMapping,d.defines={},De.getTransfer(v)===Xe&&(d.defines.SRGB_TRANSFER="");const O=E5[_];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=L.texture,T.setRenderTarget(M),T.render(h,m),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const AA=new ei,Hg=new Hu(1,1),RA=new fA,CA=new $N,wA=new yA,eM=[],nM=[],iM=new Float32Array(16),aM=new Float32Array(9),rM=new Float32Array(4);function ml(e,t,n){const a=e[0];if(a<=0||a>0)return e;const s=t*n;let l=eM[s];if(l===void 0&&(l=new Float32Array(s),eM[s]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,e[c].toArray(l,f)}return l}function wn(e,t){if(e.length!==t.length)return!1;for(let n=0,a=e.length;n<a;n++)if(e[n]!==t[n])return!1;return!0}function Dn(e,t){for(let n=0,a=t.length;n<a;n++)e[n]=t[n]}function eh(e,t){let n=nM[t];n===void 0&&(n=new Int32Array(t),nM[t]=n);for(let a=0;a!==t;++a)n[a]=e.allocateTextureUnit();return n}function A5(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function R5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wn(n,t))return;e.uniform2fv(this.addr,t),Dn(n,t)}}function C5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(wn(n,t))return;e.uniform3fv(this.addr,t),Dn(n,t)}}function w5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wn(n,t))return;e.uniform4fv(this.addr,t),Dn(n,t)}}function D5(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(wn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Dn(n,t)}else{if(wn(n,a))return;rM.set(a),e.uniformMatrix2fv(this.addr,!1,rM),Dn(n,a)}}function L5(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(wn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Dn(n,t)}else{if(wn(n,a))return;aM.set(a),e.uniformMatrix3fv(this.addr,!1,aM),Dn(n,a)}}function U5(e,t){const n=this.cache,a=t.elements;if(a===void 0){if(wn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Dn(n,t)}else{if(wn(n,a))return;iM.set(a),e.uniformMatrix4fv(this.addr,!1,iM),Dn(n,a)}}function P5(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function N5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wn(n,t))return;e.uniform2iv(this.addr,t),Dn(n,t)}}function O5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(wn(n,t))return;e.uniform3iv(this.addr,t),Dn(n,t)}}function F5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wn(n,t))return;e.uniform4iv(this.addr,t),Dn(n,t)}}function I5(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function B5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(wn(n,t))return;e.uniform2uiv(this.addr,t),Dn(n,t)}}function z5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(wn(n,t))return;e.uniform3uiv(this.addr,t),Dn(n,t)}}function V5(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(wn(n,t))return;e.uniform4uiv(this.addr,t),Dn(n,t)}}function H5(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s);let l;this.type===e.SAMPLER_2D_SHADOW?(Hg.compareFunction=n.isReversedDepthBuffer()?jv:Yv,l=Hg):l=AA,n.setTexture2D(t||l,s)}function G5(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||CA,s)}function k5(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||wA,s)}function X5(e,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(e.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||RA,s)}function W5(e){switch(e){case 5126:return A5;case 35664:return R5;case 35665:return C5;case 35666:return w5;case 35674:return D5;case 35675:return L5;case 35676:return U5;case 5124:case 35670:return P5;case 35667:case 35671:return N5;case 35668:case 35672:return O5;case 35669:case 35673:return F5;case 5125:return I5;case 36294:return B5;case 36295:return z5;case 36296:return V5;case 35678:case 36198:case 36298:case 36306:case 35682:return H5;case 35679:case 36299:case 36307:return G5;case 35680:case 36300:case 36308:case 36293:return k5;case 36289:case 36303:case 36311:case 36292:return X5}}function q5(e,t){e.uniform1fv(this.addr,t)}function Y5(e,t){const n=ml(t,this.size,2);e.uniform2fv(this.addr,n)}function j5(e,t){const n=ml(t,this.size,3);e.uniform3fv(this.addr,n)}function $5(e,t){const n=ml(t,this.size,4);e.uniform4fv(this.addr,n)}function K5(e,t){const n=ml(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Z5(e,t){const n=ml(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Q5(e,t){const n=ml(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function J5(e,t){e.uniform1iv(this.addr,t)}function tI(e,t){e.uniform2iv(this.addr,t)}function eI(e,t){e.uniform3iv(this.addr,t)}function nI(e,t){e.uniform4iv(this.addr,t)}function iI(e,t){e.uniform1uiv(this.addr,t)}function aI(e,t){e.uniform2uiv(this.addr,t)}function rI(e,t){e.uniform3uiv(this.addr,t)}function sI(e,t){e.uniform4uiv(this.addr,t)}function oI(e,t,n){const a=this.cache,s=t.length,l=eh(n,s);wn(a,l)||(e.uniform1iv(this.addr,l),Dn(a,l));let c;this.type===e.SAMPLER_2D_SHADOW?c=Hg:c=AA;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||c,l[f])}function lI(e,t,n){const a=this.cache,s=t.length,l=eh(n,s);wn(a,l)||(e.uniform1iv(this.addr,l),Dn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||CA,l[c])}function uI(e,t,n){const a=this.cache,s=t.length,l=eh(n,s);wn(a,l)||(e.uniform1iv(this.addr,l),Dn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||wA,l[c])}function cI(e,t,n){const a=this.cache,s=t.length,l=eh(n,s);wn(a,l)||(e.uniform1iv(this.addr,l),Dn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||RA,l[c])}function fI(e){switch(e){case 5126:return q5;case 35664:return Y5;case 35665:return j5;case 35666:return $5;case 35674:return K5;case 35675:return Z5;case 35676:return Q5;case 5124:case 35670:return J5;case 35667:case 35671:return tI;case 35668:case 35672:return eI;case 35669:case 35673:return nI;case 5125:return iI;case 36294:return aI;case 36295:return rI;case 36296:return sI;case 35678:case 36198:case 36298:case 36306:case 35682:return oI;case 35679:case 36299:case 36307:return lI;case 35680:case 36300:case 36308:case 36293:return uI;case 36289:case 36303:case 36311:case 36292:return cI}}class dI{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=W5(n.type)}}class hI{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fI(n.type)}}class pI{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const p0=/(\w+)(\])?(\[|\.)?/g;function sM(e,t){e.seq.push(t),e.map[t.id]=t}function mI(e,t,n){const a=e.name,s=a.length;for(p0.lastIndex=0;;){const l=p0.exec(a),c=p0.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===s){sM(n,h===void 0?new dI(f,e,t):new hI(f,e,t));break}else{let v=n.map[f];v===void 0&&(v=new pI(f),sM(n,v)),n=v}}}class yd{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),d=t.getUniformLocation(n,f.name);mI(f,d,this)}const s=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function oM(e,t,n){const a=e.createShader(t);return e.shaderSource(a,n),e.compileShader(a),a}const gI=37297;let vI=0;function _I(e,t){const n=e.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const lM=new _e;function yI(e){De._getMatrix(lM,De.workingColorSpace,e);const t=`mat3( ${lM.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(e)){case Pd:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function uM(e,t,n){const a=e.getShaderParameter(t,e.COMPILE_STATUS),l=(e.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+_I(e.getShaderSource(t),f)}else return l}function xI(e,t){const n=yI(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const SI={[$T]:"Linear",[KT]:"Reinhard",[ZT]:"Cineon",[QT]:"ACESFilmic",[tA]:"AgX",[eA]:"Neutral",[JT]:"Custom"};function bI(e,t){const n=SI[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $f=new lt;function MI(){De.getLuminanceCoefficients($f);const e=$f.x.toFixed(4),t=$f.y.toFixed(4),n=$f.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EI(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eu).join(`
`)}function TI(e){const t=[];for(const n in e){const a=e[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function AI(e,t){const n={},a=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=e.getActiveAttrib(t,s),c=l.name;let f=1;l.type===e.FLOAT_MAT2&&(f=2),l.type===e.FLOAT_MAT3&&(f=3),l.type===e.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:e.getAttribLocation(t,c),locationSize:f}}return n}function Eu(e){return e!==""}function cM(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const RI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gg(e){return e.replace(RI,wI)}const CI=new Map;function wI(e,t){let n=ye[t];if(n===void 0){const a=CI.get(t);if(a!==void 0)n=ye[a],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Gg(n)}const DI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dM(e){return e.replace(DI,LI)}function LI(e,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function hM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const UI={[pd]:"SHADOWMAP_TYPE_PCF",[Mu]:"SHADOWMAP_TYPE_VSM"};function PI(e){return UI[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NI={[zs]:"ENVMAP_TYPE_CUBE",[tl]:"ENVMAP_TYPE_CUBE",[Zd]:"ENVMAP_TYPE_CUBE_UV"};function OI(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":NI[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const FI={[tl]:"ENVMAP_MODE_REFRACTION"};function II(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":FI[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const BI={[jT]:"ENVMAP_BLENDING_MULTIPLY",[RN]:"ENVMAP_BLENDING_MIX",[CN]:"ENVMAP_BLENDING_ADD"};function zI(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":BI[e.combine]||"ENVMAP_BLENDING_NONE"}function VI(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function HI(e,t,n,a){const s=e.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=PI(n),h=OI(n),m=II(n),v=zI(n),_=VI(n),x=EI(n),b=TI(l),M=s.createProgram();let y,S,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Eu).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Eu).join(`
`),S.length>0&&(S+=`
`)):(y=[hM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eu).join(`
`),S=[hM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ma?"#define TONE_MAPPING":"",n.toneMapping!==Ma?ye.tonemapping_pars_fragment:"",n.toneMapping!==Ma?bI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,xI("linearToOutputTexel",n.outputColorSpace),MI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Eu).join(`
`)),c=Gg(c),c=cM(c,n),c=fM(c,n),f=Gg(f),f=cM(f,n),f=fM(f,n),c=dM(c),f=dM(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===Tb?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tb?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=T+y+c,L=T+S+f,w=oM(s,s.VERTEX_SHADER,C),O=oM(s,s.FRAGMENT_SHADER,L);s.attachShader(M,w),s.attachShader(M,O),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function F(H){if(e.debug.checkShaderErrors){const Z=s.getProgramInfoLog(M)||"",Q=s.getShaderInfoLog(w)||"",J=s.getShaderInfoLog(O)||"",K=Z.trim(),I=Q.trim(),z=J.trim();let it=!0,ct=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(it=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,w,O);else{const ht=uM(s,w,"vertex"),B=uM(s,O,"fragment");Ne("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+K+`
`+ht+`
`+B)}else K!==""?ue("WebGLProgram: Program Info Log:",K):(I===""||z==="")&&(ct=!1);ct&&(H.diagnostics={runnable:it,programLog:K,vertexShader:{log:I,prefix:y},fragmentShader:{log:z,prefix:S}})}s.deleteShader(w),s.deleteShader(O),R=new yd(s,M),P=AI(s,M)}let R;this.getUniforms=function(){return R===void 0&&F(this),R};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let tt=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return tt===!1&&(tt=s.getProgramParameter(M,gI)),tt},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vI++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=O,this}let GI=0;class kI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new XI(t),n.set(t,a)),a}}class XI{constructor(t){this.id=GI++,this.code=t,this.usedTimes=0}}function WI(e,t,n,a,s,l){const c=new dA,f=new kI,d=new Set,h=[],m=new Map,v=a.logarithmicDepthBuffer;let _=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return d.add(R),R===0?"uv":`uv${R}`}function M(R,P,tt,H,Z){const Q=H.fog,J=Z.geometry,K=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?H.environment:null,I=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,z=t.get(R.envMap||K,I),it=z&&z.mapping===Zd?z.image.height:null,ct=x[R.type];R.precision!==null&&(_=a.getMaxPrecision(R.precision),_!==R.precision&&ue("WebGLProgram.getParameters:",R.precision,"not supported, using",_,"instead."));const ht=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,B=ht!==void 0?ht.length:0;let X=0;J.morphAttributes.position!==void 0&&(X=1),J.morphAttributes.normal!==void 0&&(X=2),J.morphAttributes.color!==void 0&&(X=3);let _t,Rt,Ft,nt;if(ct){const we=ma[ct];_t=we.vertexShader,Rt=we.fragmentShader}else _t=R.vertexShader,Rt=R.fragmentShader,f.update(R),Ft=f.getVertexShaderID(R),nt=f.getFragmentShaderID(R);const yt=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Ct=Z.isInstancedMesh===!0,Dt=Z.isBatchedMesh===!0,kt=!!R.map,he=!!R.matcap,te=!!z,ie=!!R.aoMap,xe=!!R.lightMap,se=!!R.bumpMap,Je=!!R.normalMap,k=!!R.displacementMap,Ze=!!R.emissiveMap,Se=!!R.metalnessMap,Ce=!!R.roughnessMap,At=R.anisotropy>0,N=R.clearcoat>0,A=R.dispersion>0,Y=R.iridescence>0,dt=R.sheen>0,xt=R.transmission>0,gt=At&&!!R.anisotropyMap,Kt=N&&!!R.clearcoatMap,Pt=N&&!!R.clearcoatNormalMap,ee=N&&!!R.clearcoatRoughnessMap,re=Y&&!!R.iridescenceMap,Tt=Y&&!!R.iridescenceThicknessMap,Mt=dt&&!!R.sheenColorMap,Vt=dt&&!!R.sheenRoughnessMap,Bt=!!R.specularMap,Ht=!!R.specularColorMap,me=!!R.specularIntensityMap,j=xt&&!!R.transmissionMap,Lt=xt&&!!R.thicknessMap,wt=!!R.gradientMap,Gt=!!R.alphaMap,Et=R.alphaTest>0,mt=!!R.alphaHash,Wt=!!R.extensions;let le=Ma;R.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(le=e.toneMapping);const He={shaderID:ct,shaderType:R.type,shaderName:R.name,vertexShader:_t,fragmentShader:Rt,defines:R.defines,customVertexShaderID:Ft,customFragmentShaderID:nt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:_,batching:Dt,batchingColor:Dt&&Z._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&Z.instanceColor!==null,instancingMorph:Ct&&Z.morphTexture!==null,outputColorSpace:yt===null?e.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:nl,alphaToCoverage:!!R.alphaToCoverage,map:kt,matcap:he,envMap:te,envMapMode:te&&z.mapping,envMapCubeUVHeight:it,aoMap:ie,lightMap:xe,bumpMap:se,normalMap:Je,displacementMap:k,emissiveMap:Ze,normalMapObjectSpace:Je&&R.normalMapType===UN,normalMapTangentSpace:Je&&R.normalMapType===LN,metalnessMap:Se,roughnessMap:Ce,anisotropy:At,anisotropyMap:gt,clearcoat:N,clearcoatMap:Kt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:ee,dispersion:A,iridescence:Y,iridescenceMap:re,iridescenceThicknessMap:Tt,sheen:dt,sheenColorMap:Mt,sheenRoughnessMap:Vt,specularMap:Bt,specularColorMap:Ht,specularIntensityMap:me,transmission:xt,transmissionMap:j,thicknessMap:Lt,gradientMap:wt,opaque:R.transparent===!1&&R.blending===jo&&R.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Et,alphaHash:mt,combine:R.combine,mapUv:kt&&b(R.map.channel),aoMapUv:ie&&b(R.aoMap.channel),lightMapUv:xe&&b(R.lightMap.channel),bumpMapUv:se&&b(R.bumpMap.channel),normalMapUv:Je&&b(R.normalMap.channel),displacementMapUv:k&&b(R.displacementMap.channel),emissiveMapUv:Ze&&b(R.emissiveMap.channel),metalnessMapUv:Se&&b(R.metalnessMap.channel),roughnessMapUv:Ce&&b(R.roughnessMap.channel),anisotropyMapUv:gt&&b(R.anisotropyMap.channel),clearcoatMapUv:Kt&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(R.sheenRoughnessMap.channel),specularMapUv:Bt&&b(R.specularMap.channel),specularColorMapUv:Ht&&b(R.specularColorMap.channel),specularIntensityMapUv:me&&b(R.specularIntensityMap.channel),transmissionMapUv:j&&b(R.transmissionMap.channel),thicknessMapUv:Lt&&b(R.thicknessMap.channel),alphaMapUv:Gt&&b(R.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Je||At),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(kt||Gt),fog:!!Q,useFog:R.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||J.attributes.normal===void 0&&Je===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:pt,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:X,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:e.shadowMap.enabled&&tt.length>0,shadowMapType:e.shadowMap.type,toneMapping:le,decodeVideoTexture:kt&&R.map.isVideoTexture===!0&&De.getTransfer(R.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ze&&R.emissiveMap.isVideoTexture===!0&&De.getTransfer(R.emissiveMap.colorSpace)===Xe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ir,flipSided:R.side===ui,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Wt&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&R.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return He.vertexUv1s=d.has(1),He.vertexUv2s=d.has(2),He.vertexUv3s=d.has(3),d.clear(),He}function y(R){const P=[];if(R.shaderID?P.push(R.shaderID):(P.push(R.customVertexShaderID),P.push(R.customFragmentShaderID)),R.defines!==void 0)for(const tt in R.defines)P.push(tt),P.push(R.defines[tt]);return R.isRawShaderMaterial===!1&&(S(P,R),T(P,R),P.push(e.outputColorSpace)),P.push(R.customProgramCacheKey),P.join()}function S(R,P){R.push(P.precision),R.push(P.outputColorSpace),R.push(P.envMapMode),R.push(P.envMapCubeUVHeight),R.push(P.mapUv),R.push(P.alphaMapUv),R.push(P.lightMapUv),R.push(P.aoMapUv),R.push(P.bumpMapUv),R.push(P.normalMapUv),R.push(P.displacementMapUv),R.push(P.emissiveMapUv),R.push(P.metalnessMapUv),R.push(P.roughnessMapUv),R.push(P.anisotropyMapUv),R.push(P.clearcoatMapUv),R.push(P.clearcoatNormalMapUv),R.push(P.clearcoatRoughnessMapUv),R.push(P.iridescenceMapUv),R.push(P.iridescenceThicknessMapUv),R.push(P.sheenColorMapUv),R.push(P.sheenRoughnessMapUv),R.push(P.specularMapUv),R.push(P.specularColorMapUv),R.push(P.specularIntensityMapUv),R.push(P.transmissionMapUv),R.push(P.thicknessMapUv),R.push(P.combine),R.push(P.fogExp2),R.push(P.sizeAttenuation),R.push(P.morphTargetsCount),R.push(P.morphAttributeCount),R.push(P.numDirLights),R.push(P.numPointLights),R.push(P.numSpotLights),R.push(P.numSpotLightMaps),R.push(P.numHemiLights),R.push(P.numRectAreaLights),R.push(P.numDirLightShadows),R.push(P.numPointLightShadows),R.push(P.numSpotLightShadows),R.push(P.numSpotLightShadowsWithMaps),R.push(P.numLightProbes),R.push(P.shadowMapType),R.push(P.toneMapping),R.push(P.numClippingPlanes),R.push(P.numClipIntersection),R.push(P.depthPacking)}function T(R,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),R.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),R.push(c.mask)}function C(R){const P=x[R.type];let tt;if(P){const H=ma[P];tt=gO.clone(H.uniforms)}else tt=R.uniforms;return tt}function L(R,P){let tt=m.get(P);return tt!==void 0?++tt.usedTimes:(tt=new HI(e,P,R,s),h.push(tt),m.set(P,tt)),tt}function w(R){if(--R.usedTimes===0){const P=h.indexOf(R);h[P]=h[h.length-1],h.pop(),m.delete(R.cacheKey),R.destroy()}}function O(R){f.remove(R)}function F(){f.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:C,acquireProgram:L,releaseProgram:w,releaseShaderCache:O,programs:h,dispose:F}}function qI(){let e=new WeakMap;function t(c){return e.has(c)}function n(c){let f=e.get(c);return f===void 0&&(f={},e.set(c,f)),f}function a(c){e.delete(c)}function s(c,f,d){e.get(c)[f]=d}function l(){e=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function YI(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function pM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mM(){const e=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function c(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,b,M,y,S){let T=e[t];return T===void 0?(T={id:_.id,object:_,geometry:x,material:b,materialVariant:c(_),groupOrder:M,renderOrder:_.renderOrder,z:y,group:S},e[t]=T):(T.id=_.id,T.object=_,T.geometry=x,T.material=b,T.materialVariant=c(_),T.groupOrder=M,T.renderOrder=_.renderOrder,T.z=y,T.group=S),t++,T}function d(_,x,b,M,y,S){const T=f(_,x,b,M,y,S);b.transmission>0?a.push(T):b.transparent===!0?s.push(T):n.push(T)}function h(_,x,b,M,y,S){const T=f(_,x,b,M,y,S);b.transmission>0?a.unshift(T):b.transparent===!0?s.unshift(T):n.unshift(T)}function m(_,x){n.length>1&&n.sort(_||YI),a.length>1&&a.sort(x||pM),s.length>1&&s.sort(x||pM)}function v(){for(let _=t,x=e.length;_<x;_++){const b=e[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:d,unshift:h,finish:v,sort:m}}function jI(){let e=new WeakMap;function t(a,s){const l=e.get(a);let c;return l===void 0?(c=new mM,e.set(a,[c])):s>=l.length?(c=new mM,l.push(c)):c=l[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}function $I(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new We};break;case"SpotLight":n={position:new lt,direction:new lt,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return e[t.id]=n,n}}}function KI(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let ZI=0;function QI(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function JI(e){const t=new $I,n=KI(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new lt);const s=new lt,l=new pn,c=new pn;function f(h){let m=0,v=0,_=0;for(let P=0;P<9;P++)a.probe[P].set(0,0,0);let x=0,b=0,M=0,y=0,S=0,T=0,C=0,L=0,w=0,O=0,F=0;h.sort(QI);for(let P=0,tt=h.length;P<tt;P++){const H=h[P],Z=H.color,Q=H.intensity,J=H.distance;let K=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===el?K=H.shadow.map.texture:K=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)m+=Z.r*Q,v+=Z.g*Q,_+=Z.b*Q;else if(H.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(H.sh.coefficients[I],Q);F++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,it=n.get(H);it.shadowIntensity=z.intensity,it.shadowBias=z.bias,it.shadowNormalBias=z.normalBias,it.shadowRadius=z.radius,it.shadowMapSize=z.mapSize,a.directionalShadow[x]=it,a.directionalShadowMap[x]=K,a.directionalShadowMatrix[x]=H.shadow.matrix,T++}a.directional[x]=I,x++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Z).multiplyScalar(Q),I.distance=J,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,a.spot[M]=I;const z=H.shadow;if(H.map&&(a.spotLightMap[w]=H.map,w++,z.updateMatrices(H),H.castShadow&&O++),a.spotLightMatrix[M]=z.matrix,H.castShadow){const it=n.get(H);it.shadowIntensity=z.intensity,it.shadowBias=z.bias,it.shadowNormalBias=z.normalBias,it.shadowRadius=z.radius,it.shadowMapSize=z.mapSize,a.spotShadow[M]=it,a.spotShadowMap[M]=K,L++}M++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(Z).multiplyScalar(Q),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),a.rectArea[y]=I,y++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const z=H.shadow,it=n.get(H);it.shadowIntensity=z.intensity,it.shadowBias=z.bias,it.shadowNormalBias=z.normalBias,it.shadowRadius=z.radius,it.shadowMapSize=z.mapSize,it.shadowCameraNear=z.camera.near,it.shadowCameraFar=z.camera.far,a.pointShadow[b]=it,a.pointShadowMap[b]=K,a.pointShadowMatrix[b]=H.shadow.matrix,C++}a.point[b]=I,b++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(Q),I.groundColor.copy(H.groundColor).multiplyScalar(Q),a.hemi[S]=I,S++}}y>0&&(e.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=It.LTC_FLOAT_1,a.rectAreaLTC2=It.LTC_FLOAT_2):(a.rectAreaLTC1=It.LTC_HALF_1,a.rectAreaLTC2=It.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=_;const R=a.hash;(R.directionalLength!==x||R.pointLength!==b||R.spotLength!==M||R.rectAreaLength!==y||R.hemiLength!==S||R.numDirectionalShadows!==T||R.numPointShadows!==C||R.numSpotShadows!==L||R.numSpotMaps!==w||R.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=M,a.rectArea.length=y,a.point.length=b,a.hemi.length=S,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=C,a.pointShadowMap.length=C,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=C,a.spotLightMatrix.length=L+w-O,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,R.directionalLength=x,R.pointLength=b,R.spotLength=M,R.rectAreaLength=y,R.hemiLength=S,R.numDirectionalShadows=T,R.numPointShadows=C,R.numSpotShadows=L,R.numSpotMaps=w,R.numLightProbes=F,a.version=ZI++)}function d(h,m){let v=0,_=0,x=0,b=0,M=0;const y=m.matrixWorldInverse;for(let S=0,T=h.length;S<T;S++){const C=h[S];if(C.isDirectionalLight){const L=a.directional[v];L.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),v++}else if(C.isSpotLight){const L=a.spot[x];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(y),x++}else if(C.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),c.identity(),l.copy(C.matrixWorld),l.premultiply(y),c.extractRotation(l),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(c),L.halfHeight.applyMatrix4(c),b++}else if(C.isPointLight){const L=a.point[_];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(y),_++}else if(C.isHemisphereLight){const L=a.hemi[M];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(y),M++}}}return{setup:f,setupView:d,state:a}}function gM(e){const t=new JI(e),n=[],a=[];function s(m){h.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function c(m){a.push(m)}function f(){t.setup(n)}function d(m){t.setupView(n,m)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function tB(e){let t=new WeakMap;function n(s,l=0){const c=t.get(s);let f;return c===void 0?(f=new gM(e),t.set(s,[f])):l>=c.length?(f=new gM(e),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const eB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nB=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,iB=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],aB=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],vM=new pn,xu=new lt,m0=new lt;function rB(e,t,n){let a=new _A;const s=new Ke,l=new Ke,c=new hn,f=new xO,d=new SO,h={},m=n.maxTextureSize,v={[Kr]:ui,[ui]:Kr,[ir]:ir},_=new Da({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:eB,fragmentShader:nB}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new Ua;b.setAttribute("position",new Ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new dr(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let S=this.type;this.render=function(O,F,R){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===lN&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pd);const P=e.getRenderTarget(),tt=e.getActiveCubeFace(),H=e.getActiveMipmapLevel(),Z=e.state;Z.setBlending(rr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Q=S!==this.type;Q&&F.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(K=>K.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,K=O.length;J<K;J++){const I=O[J],z=I.shadow;if(z===void 0){ue("WebGLShadowMap:",I,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const it=z.getFrameExtents();s.multiply(it),l.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/it.x),s.x=l.x*it.x,z.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/it.y),s.y=l.y*it.y,z.mapSize.y=l.y));const ct=e.state.buffers.depth.getReversed();if(z.camera._reversedDepth=ct,z.map===null||Q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Mu){if(I.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ea(s.x,s.y,{format:el,type:ur,minFilter:qn,magFilter:qn,generateMipmaps:!1}),z.map.texture.name=I.name+".shadowMap",z.map.depthTexture=new Hu(s.x,s.y,_a),z.map.depthTexture.name=I.name+".shadowMapDepth",z.map.depthTexture.format=cr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vn,z.map.depthTexture.magFilter=Vn}else I.isPointLight?(z.map=new TA(s.x),z.map.depthTexture=new pO(s.x,wa)):(z.map=new Ea(s.x,s.y),z.map.depthTexture=new Hu(s.x,s.y,wa)),z.map.depthTexture.name=I.name+".shadowMap",z.map.depthTexture.format=cr,this.type===pd?(z.map.depthTexture.compareFunction=ct?jv:Yv,z.map.depthTexture.minFilter=qn,z.map.depthTexture.magFilter=qn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Vn,z.map.depthTexture.magFilter=Vn);z.camera.updateProjectionMatrix()}const ht=z.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ht;B++){if(z.map.isWebGLCubeRenderTarget)e.setRenderTarget(z.map,B),e.clear();else{B===0&&(e.setRenderTarget(z.map),e.clear());const X=z.getViewport(B);c.set(l.x*X.x,l.y*X.y,l.x*X.z,l.y*X.w),Z.viewport(c)}if(I.isPointLight){const X=z.camera,_t=z.matrix,Rt=I.distance||X.far;Rt!==X.far&&(X.far=Rt,X.updateProjectionMatrix()),xu.setFromMatrixPosition(I.matrixWorld),X.position.copy(xu),m0.copy(X.position),m0.add(iB[B]),X.up.copy(aB[B]),X.lookAt(m0),X.updateMatrixWorld(),_t.makeTranslation(-xu.x,-xu.y,-xu.z),vM.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(vM,X.coordinateSystem,X.reversedDepth)}else z.updateMatrices(I);a=z.getFrustum(),L(F,R,z.camera,I,this.type)}z.isPointLightShadow!==!0&&this.type===Mu&&T(z,R),z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,e.setRenderTarget(P,tt,H)};function T(O,F){const R=t.update(M);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ea(s.x,s.y,{format:el,type:ur})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,e.setRenderTarget(O.mapPass),e.clear(),e.renderBufferDirect(F,null,R,_,M,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,e.setRenderTarget(O.map),e.clear(),e.renderBufferDirect(F,null,R,x,M,null)}function C(O,F,R,P){let tt=null;const H=R.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(H!==void 0)tt=H;else if(tt=R.isPointLight===!0?d:f,e.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=tt.uuid,Q=F.uuid;let J=h[Z];J===void 0&&(J={},h[Z]=J);let K=J[Q];K===void 0&&(K=tt.clone(),J[Q]=K,F.addEventListener("dispose",w)),tt=K}if(tt.visible=F.visible,tt.wireframe=F.wireframe,P===Mu?tt.side=F.shadowSide!==null?F.shadowSide:F.side:tt.side=F.shadowSide!==null?F.shadowSide:v[F.side],tt.alphaMap=F.alphaMap,tt.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,tt.map=F.map,tt.clipShadows=F.clipShadows,tt.clippingPlanes=F.clippingPlanes,tt.clipIntersection=F.clipIntersection,tt.displacementMap=F.displacementMap,tt.displacementScale=F.displacementScale,tt.displacementBias=F.displacementBias,tt.wireframeLinewidth=F.wireframeLinewidth,tt.linewidth=F.linewidth,R.isPointLight===!0&&tt.isMeshDistanceMaterial===!0){const Z=e.properties.get(tt);Z.light=R}return tt}function L(O,F,R,P,tt){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&tt===Mu)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,O.matrixWorld);const Q=t.update(O),J=O.material;if(Array.isArray(J)){const K=Q.groups;for(let I=0,z=K.length;I<z;I++){const it=K[I],ct=J[it.materialIndex];if(ct&&ct.visible){const ht=C(O,ct,P,tt);O.onBeforeShadow(e,O,F,R,Q,ht,it),e.renderBufferDirect(R,null,Q,ht,O,it),O.onAfterShadow(e,O,F,R,Q,ht,it)}}}else if(J.visible){const K=C(O,J,P,tt);O.onBeforeShadow(e,O,F,R,Q,K,null),e.renderBufferDirect(R,null,Q,K,O,null),O.onAfterShadow(e,O,F,R,Q,K,null)}}const Z=O.children;for(let Q=0,J=Z.length;Q<J;Q++)L(Z[Q],F,R,P,tt)}function w(O){O.target.removeEventListener("dispose",w);for(const R in h){const P=h[R],tt=O.target.uuid;tt in P&&(P[tt].dispose(),delete P[tt])}}}function sB(e,t){function n(){let j=!1;const Lt=new hn;let wt=null;const Gt=new hn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!j&&(e.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){j=Et},setClear:function(Et,mt,Wt,le,He){He===!0&&(Et*=le,mt*=le,Wt*=le),Lt.set(Et,mt,Wt,le),Gt.equals(Lt)===!1&&(e.clearColor(Et,mt,Wt,le),Gt.copy(Lt))},reset:function(){j=!1,wt=null,Gt.set(-1,0,0,0)}}}function a(){let j=!1,Lt=!1,wt=null,Gt=null,Et=null;return{setReversed:function(mt){if(Lt!==mt){const Wt=t.get("EXT_clip_control");mt?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Lt=mt;const le=Et;Et=null,this.setClear(le)}},getReversed:function(){return Lt},setTest:function(mt){mt?yt(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(mt){wt!==mt&&!j&&(e.depthMask(mt),wt=mt)},setFunc:function(mt){if(Lt&&(mt=GN[mt]),Gt!==mt){switch(mt){case J0:e.depthFunc(e.NEVER);break;case tg:e.depthFunc(e.ALWAYS);break;case eg:e.depthFunc(e.LESS);break;case Jo:e.depthFunc(e.LEQUAL);break;case ng:e.depthFunc(e.EQUAL);break;case ig:e.depthFunc(e.GEQUAL);break;case ag:e.depthFunc(e.GREATER);break;case rg:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Gt=mt}},setLocked:function(mt){j=mt},setClear:function(mt){Et!==mt&&(Et=mt,Lt&&(mt=1-mt),e.clearDepth(mt))},reset:function(){j=!1,wt=null,Gt=null,Et=null,Lt=!1}}}function s(){let j=!1,Lt=null,wt=null,Gt=null,Et=null,mt=null,Wt=null,le=null,He=null;return{setTest:function(we){j||(we?yt(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(we){Lt!==we&&!j&&(e.stencilMask(we),Lt=we)},setFunc:function(we,Yn,zi){(wt!==we||Gt!==Yn||Et!==zi)&&(e.stencilFunc(we,Yn,zi),wt=we,Gt=Yn,Et=zi)},setOp:function(we,Yn,zi){(mt!==we||Wt!==Yn||le!==zi)&&(e.stencilOp(we,Yn,zi),mt=we,Wt=Yn,le=zi)},setLocked:function(we){j=we},setClear:function(we){He!==we&&(e.clearStencil(we),He=we)},reset:function(){j=!1,Lt=null,wt=null,Gt=null,Et=null,mt=null,Wt=null,le=null,He=null}}}const l=new n,c=new a,f=new s,d=new WeakMap,h=new WeakMap;let m={},v={},_=new WeakMap,x=[],b=null,M=!1,y=null,S=null,T=null,C=null,L=null,w=null,O=null,F=new We(0,0,0),R=0,P=!1,tt=null,H=null,Z=null,Q=null,J=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const it=e.getParameter(e.VERSION);it.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(it)[1]),I=z>=1):it.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),I=z>=2);let ct=null,ht={};const B=e.getParameter(e.SCISSOR_BOX),X=e.getParameter(e.VIEWPORT),_t=new hn().fromArray(B),Rt=new hn().fromArray(X);function Ft(j,Lt,wt,Gt){const Et=new Uint8Array(4),mt=e.createTexture();e.bindTexture(j,mt),e.texParameteri(j,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(j,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Wt=0;Wt<wt;Wt++)j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?e.texImage3D(Lt,0,e.RGBA,1,1,Gt,0,e.RGBA,e.UNSIGNED_BYTE,Et):e.texImage2D(Lt+Wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Et);return mt}const nt={};nt[e.TEXTURE_2D]=Ft(e.TEXTURE_2D,e.TEXTURE_2D,1),nt[e.TEXTURE_CUBE_MAP]=Ft(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[e.TEXTURE_2D_ARRAY]=Ft(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),nt[e.TEXTURE_3D]=Ft(e.TEXTURE_3D,e.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),yt(e.DEPTH_TEST),c.setFunc(Jo),se(!1),Je(yb),yt(e.CULL_FACE),ie(rr);function yt(j){m[j]!==!0&&(e.enable(j),m[j]=!0)}function pt(j){m[j]!==!1&&(e.disable(j),m[j]=!1)}function Ct(j,Lt){return v[j]!==Lt?(e.bindFramebuffer(j,Lt),v[j]=Lt,j===e.DRAW_FRAMEBUFFER&&(v[e.FRAMEBUFFER]=Lt),j===e.FRAMEBUFFER&&(v[e.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Dt(j,Lt){let wt=x,Gt=!1;if(j){wt=_.get(Lt),wt===void 0&&(wt=[],_.set(Lt,wt));const Et=j.textures;if(wt.length!==Et.length||wt[0]!==e.COLOR_ATTACHMENT0){for(let mt=0,Wt=Et.length;mt<Wt;mt++)wt[mt]=e.COLOR_ATTACHMENT0+mt;wt.length=Et.length,Gt=!0}}else wt[0]!==e.BACK&&(wt[0]=e.BACK,Gt=!0);Gt&&e.drawBuffers(wt)}function kt(j){return b!==j?(e.useProgram(j),b=j,!0):!1}const he={[Cs]:e.FUNC_ADD,[cN]:e.FUNC_SUBTRACT,[fN]:e.FUNC_REVERSE_SUBTRACT};he[dN]=e.MIN,he[hN]=e.MAX;const te={[pN]:e.ZERO,[mN]:e.ONE,[gN]:e.SRC_COLOR,[Z0]:e.SRC_ALPHA,[bN]:e.SRC_ALPHA_SATURATE,[xN]:e.DST_COLOR,[_N]:e.DST_ALPHA,[vN]:e.ONE_MINUS_SRC_COLOR,[Q0]:e.ONE_MINUS_SRC_ALPHA,[SN]:e.ONE_MINUS_DST_COLOR,[yN]:e.ONE_MINUS_DST_ALPHA,[MN]:e.CONSTANT_COLOR,[EN]:e.ONE_MINUS_CONSTANT_COLOR,[TN]:e.CONSTANT_ALPHA,[AN]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(j,Lt,wt,Gt,Et,mt,Wt,le,He,we){if(j===rr){M===!0&&(pt(e.BLEND),M=!1);return}if(M===!1&&(yt(e.BLEND),M=!0),j!==uN){if(j!==y||we!==P){if((S!==Cs||L!==Cs)&&(e.blendEquation(e.FUNC_ADD),S=Cs,L=Cs),we)switch(j){case jo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xb:e.blendFunc(e.ONE,e.ONE);break;case Sb:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case bb:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ne("WebGLState: Invalid blending: ",j);break}else switch(j){case jo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xb:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Sb:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bb:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",j);break}T=null,C=null,w=null,O=null,F.set(0,0,0),R=0,y=j,P=we}return}Et=Et||Lt,mt=mt||wt,Wt=Wt||Gt,(Lt!==S||Et!==L)&&(e.blendEquationSeparate(he[Lt],he[Et]),S=Lt,L=Et),(wt!==T||Gt!==C||mt!==w||Wt!==O)&&(e.blendFuncSeparate(te[wt],te[Gt],te[mt],te[Wt]),T=wt,C=Gt,w=mt,O=Wt),(le.equals(F)===!1||He!==R)&&(e.blendColor(le.r,le.g,le.b,He),F.copy(le),R=He),y=j,P=!1}function xe(j,Lt){j.side===ir?pt(e.CULL_FACE):yt(e.CULL_FACE);let wt=j.side===ui;Lt&&(wt=!wt),se(wt),j.blending===jo&&j.transparent===!1?ie(rr):ie(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const Gt=j.stencilWrite;f.setTest(Gt),Gt&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Ze(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?yt(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function se(j){tt!==j&&(j?e.frontFace(e.CW):e.frontFace(e.CCW),tt=j)}function Je(j){j!==sN?(yt(e.CULL_FACE),j!==H&&(j===yb?e.cullFace(e.BACK):j===oN?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),H=j}function k(j){j!==Z&&(I&&e.lineWidth(j),Z=j)}function Ze(j,Lt,wt){j?(yt(e.POLYGON_OFFSET_FILL),(Q!==Lt||J!==wt)&&(Q=Lt,J=wt,c.getReversed()&&(Lt=-Lt),e.polygonOffset(Lt,wt))):pt(e.POLYGON_OFFSET_FILL)}function Se(j){j?yt(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Ce(j){j===void 0&&(j=e.TEXTURE0+K-1),ct!==j&&(e.activeTexture(j),ct=j)}function At(j,Lt,wt){wt===void 0&&(ct===null?wt=e.TEXTURE0+K-1:wt=ct);let Gt=ht[wt];Gt===void 0&&(Gt={type:void 0,texture:void 0},ht[wt]=Gt),(Gt.type!==j||Gt.texture!==Lt)&&(ct!==wt&&(e.activeTexture(wt),ct=wt),e.bindTexture(j,Lt||nt[j]),Gt.type=j,Gt.texture=Lt)}function N(){const j=ht[ct];j!==void 0&&j.type!==void 0&&(e.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function A(){try{e.compressedTexImage2D(...arguments)}catch(j){Ne("WebGLState:",j)}}function Y(){try{e.compressedTexImage3D(...arguments)}catch(j){Ne("WebGLState:",j)}}function dt(){try{e.texSubImage2D(...arguments)}catch(j){Ne("WebGLState:",j)}}function xt(){try{e.texSubImage3D(...arguments)}catch(j){Ne("WebGLState:",j)}}function gt(){try{e.compressedTexSubImage2D(...arguments)}catch(j){Ne("WebGLState:",j)}}function Kt(){try{e.compressedTexSubImage3D(...arguments)}catch(j){Ne("WebGLState:",j)}}function Pt(){try{e.texStorage2D(...arguments)}catch(j){Ne("WebGLState:",j)}}function ee(){try{e.texStorage3D(...arguments)}catch(j){Ne("WebGLState:",j)}}function re(){try{e.texImage2D(...arguments)}catch(j){Ne("WebGLState:",j)}}function Tt(){try{e.texImage3D(...arguments)}catch(j){Ne("WebGLState:",j)}}function Mt(j){_t.equals(j)===!1&&(e.scissor(j.x,j.y,j.z,j.w),_t.copy(j))}function Vt(j){Rt.equals(j)===!1&&(e.viewport(j.x,j.y,j.z,j.w),Rt.copy(j))}function Bt(j,Lt){let wt=h.get(Lt);wt===void 0&&(wt=new WeakMap,h.set(Lt,wt));let Gt=wt.get(j);Gt===void 0&&(Gt=e.getUniformBlockIndex(Lt,j.name),wt.set(j,Gt))}function Ht(j,Lt){const Gt=h.get(Lt).get(j);d.get(Lt)!==Gt&&(e.uniformBlockBinding(Lt,Gt,j.__bindingPointIndex),d.set(Lt,Gt))}function me(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),c.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),m={},ct=null,ht={},v={},_=new WeakMap,x=[],b=null,M=!1,y=null,S=null,T=null,C=null,L=null,w=null,O=null,F=new We(0,0,0),R=0,P=!1,tt=null,H=null,Z=null,Q=null,J=null,_t.set(0,0,e.canvas.width,e.canvas.height),Rt.set(0,0,e.canvas.width,e.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:yt,disable:pt,bindFramebuffer:Ct,drawBuffers:Dt,useProgram:kt,setBlending:ie,setMaterial:xe,setFlipSided:se,setCullFace:Je,setLineWidth:k,setPolygonOffset:Ze,setScissorTest:Se,activeTexture:Ce,bindTexture:At,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:Y,texImage2D:re,texImage3D:Tt,updateUBOMapping:Bt,uniformBlockBinding:Ht,texStorage2D:Pt,texStorage3D:ee,texSubImage2D:dt,texSubImage3D:xt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Kt,scissor:Mt,viewport:Vt,reset:me}}function oB(e,t,n,a,s,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ke,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,A){return x?new OffscreenCanvas(N,A):Od("canvas")}function M(N,A,Y){let dt=1;const xt=At(N);if((xt.width>Y||xt.height>Y)&&(dt=Y/Math.max(xt.width,xt.height)),dt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const gt=Math.floor(dt*xt.width),Kt=Math.floor(dt*xt.height);v===void 0&&(v=b(gt,Kt));const Pt=A?b(gt,Kt):v;return Pt.width=gt,Pt.height=Kt,Pt.getContext("2d").drawImage(N,0,0,gt,Kt),ue("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+gt+"x"+Kt+")."),Pt}else return"data"in N&&ue("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),N;return N}function y(N){return N.generateMipmaps}function S(N){e.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?e.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function C(N,A,Y,dt,xt=!1){if(N!==null){if(e[N]!==void 0)return e[N];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let gt=A;if(A===e.RED&&(Y===e.FLOAT&&(gt=e.R32F),Y===e.HALF_FLOAT&&(gt=e.R16F),Y===e.UNSIGNED_BYTE&&(gt=e.R8)),A===e.RED_INTEGER&&(Y===e.UNSIGNED_BYTE&&(gt=e.R8UI),Y===e.UNSIGNED_SHORT&&(gt=e.R16UI),Y===e.UNSIGNED_INT&&(gt=e.R32UI),Y===e.BYTE&&(gt=e.R8I),Y===e.SHORT&&(gt=e.R16I),Y===e.INT&&(gt=e.R32I)),A===e.RG&&(Y===e.FLOAT&&(gt=e.RG32F),Y===e.HALF_FLOAT&&(gt=e.RG16F),Y===e.UNSIGNED_BYTE&&(gt=e.RG8)),A===e.RG_INTEGER&&(Y===e.UNSIGNED_BYTE&&(gt=e.RG8UI),Y===e.UNSIGNED_SHORT&&(gt=e.RG16UI),Y===e.UNSIGNED_INT&&(gt=e.RG32UI),Y===e.BYTE&&(gt=e.RG8I),Y===e.SHORT&&(gt=e.RG16I),Y===e.INT&&(gt=e.RG32I)),A===e.RGB_INTEGER&&(Y===e.UNSIGNED_BYTE&&(gt=e.RGB8UI),Y===e.UNSIGNED_SHORT&&(gt=e.RGB16UI),Y===e.UNSIGNED_INT&&(gt=e.RGB32UI),Y===e.BYTE&&(gt=e.RGB8I),Y===e.SHORT&&(gt=e.RGB16I),Y===e.INT&&(gt=e.RGB32I)),A===e.RGBA_INTEGER&&(Y===e.UNSIGNED_BYTE&&(gt=e.RGBA8UI),Y===e.UNSIGNED_SHORT&&(gt=e.RGBA16UI),Y===e.UNSIGNED_INT&&(gt=e.RGBA32UI),Y===e.BYTE&&(gt=e.RGBA8I),Y===e.SHORT&&(gt=e.RGBA16I),Y===e.INT&&(gt=e.RGBA32I)),A===e.RGB&&(Y===e.UNSIGNED_INT_5_9_9_9_REV&&(gt=e.RGB9_E5),Y===e.UNSIGNED_INT_10F_11F_11F_REV&&(gt=e.R11F_G11F_B10F)),A===e.RGBA){const Kt=xt?Pd:De.getTransfer(dt);Y===e.FLOAT&&(gt=e.RGBA32F),Y===e.HALF_FLOAT&&(gt=e.RGBA16F),Y===e.UNSIGNED_BYTE&&(gt=Kt===Xe?e.SRGB8_ALPHA8:e.RGBA8),Y===e.UNSIGNED_SHORT_4_4_4_4&&(gt=e.RGBA4),Y===e.UNSIGNED_SHORT_5_5_5_1&&(gt=e.RGB5_A1)}return(gt===e.R16F||gt===e.R32F||gt===e.RG16F||gt===e.RG32F||gt===e.RGBA16F||gt===e.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function L(N,A){let Y;return N?A===null||A===wa||A===Vu?Y=e.DEPTH24_STENCIL8:A===_a?Y=e.DEPTH32F_STENCIL8:A===zu&&(Y=e.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===wa||A===Vu?Y=e.DEPTH_COMPONENT24:A===_a?Y=e.DEPTH_COMPONENT32F:A===zu&&(Y=e.DEPTH_COMPONENT16),Y}function w(N,A){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Vn&&N.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function O(N){const A=N.target;A.removeEventListener("dispose",O),R(A),A.isVideoTexture&&m.delete(A)}function F(N){const A=N.target;A.removeEventListener("dispose",F),tt(A)}function R(N){const A=a.get(N);if(A.__webglInit===void 0)return;const Y=N.source,dt=_.get(Y);if(dt){const xt=dt[A.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&P(N),Object.keys(dt).length===0&&_.delete(Y)}a.remove(N)}function P(N){const A=a.get(N);e.deleteTexture(A.__webglTexture);const Y=N.source,dt=_.get(Y);delete dt[A.__cacheKey],c.memory.textures--}function tt(N){const A=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(A.__webglFramebuffer[dt]))for(let xt=0;xt<A.__webglFramebuffer[dt].length;xt++)e.deleteFramebuffer(A.__webglFramebuffer[dt][xt]);else e.deleteFramebuffer(A.__webglFramebuffer[dt]);A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer[dt])}else{if(Array.isArray(A.__webglFramebuffer))for(let dt=0;dt<A.__webglFramebuffer.length;dt++)e.deleteFramebuffer(A.__webglFramebuffer[dt]);else e.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&e.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&e.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let dt=0;dt<A.__webglColorRenderbuffer.length;dt++)A.__webglColorRenderbuffer[dt]&&e.deleteRenderbuffer(A.__webglColorRenderbuffer[dt]);A.__webglDepthRenderbuffer&&e.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Y=N.textures;for(let dt=0,xt=Y.length;dt<xt;dt++){const gt=a.get(Y[dt]);gt.__webglTexture&&(e.deleteTexture(gt.__webglTexture),c.memory.textures--),a.remove(Y[dt])}a.remove(N)}let H=0;function Z(){H=0}function Q(){const N=H;return N>=s.maxTextures&&ue("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),H+=1,N}function J(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function K(N,A){const Y=a.get(N);if(N.isVideoTexture&&Se(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Y.__version!==N.version){const dt=N.image;if(dt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(Y,N,A);return}}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,Y.__webglTexture,e.TEXTURE0+A)}function I(N,A){const Y=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){nt(Y,N,A);return}else N.isExternalTexture&&(Y.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,Y.__webglTexture,e.TEXTURE0+A)}function z(N,A){const Y=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Y.__version!==N.version){nt(Y,N,A);return}n.bindTexture(e.TEXTURE_3D,Y.__webglTexture,e.TEXTURE0+A)}function it(N,A){const Y=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Y.__version!==N.version){yt(Y,N,A);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture,e.TEXTURE0+A)}const ct={[sg]:e.REPEAT,[ar]:e.CLAMP_TO_EDGE,[og]:e.MIRRORED_REPEAT},ht={[Vn]:e.NEAREST,[wN]:e.NEAREST_MIPMAP_NEAREST,[Tf]:e.NEAREST_MIPMAP_LINEAR,[qn]:e.LINEAR,[Bm]:e.LINEAR_MIPMAP_NEAREST,[Us]:e.LINEAR_MIPMAP_LINEAR},B={[PN]:e.NEVER,[BN]:e.ALWAYS,[NN]:e.LESS,[Yv]:e.LEQUAL,[ON]:e.EQUAL,[jv]:e.GEQUAL,[FN]:e.GREATER,[IN]:e.NOTEQUAL};function X(N,A){if(A.type===_a&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===qn||A.magFilter===Bm||A.magFilter===Tf||A.magFilter===Us||A.minFilter===qn||A.minFilter===Bm||A.minFilter===Tf||A.minFilter===Us)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(N,e.TEXTURE_WRAP_S,ct[A.wrapS]),e.texParameteri(N,e.TEXTURE_WRAP_T,ct[A.wrapT]),(N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY)&&e.texParameteri(N,e.TEXTURE_WRAP_R,ct[A.wrapR]),e.texParameteri(N,e.TEXTURE_MAG_FILTER,ht[A.magFilter]),e.texParameteri(N,e.TEXTURE_MIN_FILTER,ht[A.minFilter]),A.compareFunction&&(e.texParameteri(N,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(N,e.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Vn||A.minFilter!==Tf&&A.minFilter!==Us||A.type===_a&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");e.texParameterf(N,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function _t(N,A){let Y=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",O));const dt=A.source;let xt=_.get(dt);xt===void 0&&(xt={},_.set(dt,xt));const gt=J(A);if(gt!==N.__cacheKey){xt[gt]===void 0&&(xt[gt]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),xt[gt].usedTimes++;const Kt=xt[N.__cacheKey];Kt!==void 0&&(xt[N.__cacheKey].usedTimes--,Kt.usedTimes===0&&P(A)),N.__cacheKey=gt,N.__webglTexture=xt[gt].texture}return Y}function Rt(N,A,Y){return Math.floor(Math.floor(N/Y)/A)}function Ft(N,A,Y,dt){const gt=N.updateRanges;if(gt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,A.width,A.height,Y,dt,A.data);else{gt.sort((Tt,Mt)=>Tt.start-Mt.start);let Kt=0;for(let Tt=1;Tt<gt.length;Tt++){const Mt=gt[Kt],Vt=gt[Tt],Bt=Mt.start+Mt.count,Ht=Rt(Vt.start,A.width,4),me=Rt(Mt.start,A.width,4);Vt.start<=Bt+1&&Ht===me&&Rt(Vt.start+Vt.count-1,A.width,4)===Ht?Mt.count=Math.max(Mt.count,Vt.start+Vt.count-Mt.start):(++Kt,gt[Kt]=Vt)}gt.length=Kt+1;const Pt=e.getParameter(e.UNPACK_ROW_LENGTH),ee=e.getParameter(e.UNPACK_SKIP_PIXELS),re=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,A.width);for(let Tt=0,Mt=gt.length;Tt<Mt;Tt++){const Vt=gt[Tt],Bt=Math.floor(Vt.start/4),Ht=Math.ceil(Vt.count/4),me=Bt%A.width,j=Math.floor(Bt/A.width),Lt=Ht,wt=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,me),e.pixelStorei(e.UNPACK_SKIP_ROWS,j),n.texSubImage2D(e.TEXTURE_2D,0,me,j,Lt,wt,Y,dt,A.data)}N.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,Pt),e.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(e.UNPACK_SKIP_ROWS,re)}}function nt(N,A,Y){let dt=e.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(dt=e.TEXTURE_2D_ARRAY),A.isData3DTexture&&(dt=e.TEXTURE_3D);const xt=_t(N,A),gt=A.source;n.bindTexture(dt,N.__webglTexture,e.TEXTURE0+Y);const Kt=a.get(gt);if(gt.version!==Kt.__version||xt===!0){n.activeTexture(e.TEXTURE0+Y);const Pt=De.getPrimaries(De.workingColorSpace),ee=A.colorSpace===Yr?null:De.getPrimaries(A.colorSpace),re=A.colorSpace===Yr||Pt===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Tt=M(A.image,!1,s.maxTextureSize);Tt=Ce(A,Tt);const Mt=l.convert(A.format,A.colorSpace),Vt=l.convert(A.type);let Bt=C(A.internalFormat,Mt,Vt,A.colorSpace,A.isVideoTexture);X(dt,A);let Ht;const me=A.mipmaps,j=A.isVideoTexture!==!0,Lt=Kt.__version===void 0||xt===!0,wt=gt.dataReady,Gt=w(A,Tt);if(A.isDepthTexture)Bt=L(A.format===Ps,A.type),Lt&&(j?n.texStorage2D(e.TEXTURE_2D,1,Bt,Tt.width,Tt.height):n.texImage2D(e.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Mt,Vt,null));else if(A.isDataTexture)if(me.length>0){j&&Lt&&n.texStorage2D(e.TEXTURE_2D,Gt,Bt,me[0].width,me[0].height);for(let Et=0,mt=me.length;Et<mt;Et++)Ht=me[Et],j?wt&&n.texSubImage2D(e.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Mt,Vt,Ht.data):n.texImage2D(e.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Mt,Vt,Ht.data);A.generateMipmaps=!1}else j?(Lt&&n.texStorage2D(e.TEXTURE_2D,Gt,Bt,Tt.width,Tt.height),wt&&Ft(A,Tt,Mt,Vt)):n.texImage2D(e.TEXTURE_2D,0,Bt,Tt.width,Tt.height,0,Mt,Vt,Tt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){j&&Lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Bt,me[0].width,me[0].height,Tt.depth);for(let Et=0,mt=me.length;Et<mt;Et++)if(Ht=me[Et],A.format!==na)if(Mt!==null)if(j){if(wt)if(A.layerUpdates.size>0){const Wt=jb(Ht.width,Ht.height,A.format,A.type);for(const le of A.layerUpdates){const He=Ht.data.subarray(le*Wt/Ht.data.BYTES_PER_ELEMENT,(le+1)*Wt/Ht.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Et,0,0,le,Ht.width,Ht.height,1,Mt,He)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Et,0,0,0,Ht.width,Ht.height,Tt.depth,Mt,Ht.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Et,Bt,Ht.width,Ht.height,Tt.depth,0,Ht.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?wt&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Et,0,0,0,Ht.width,Ht.height,Tt.depth,Mt,Vt,Ht.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Et,Bt,Ht.width,Ht.height,Tt.depth,0,Mt,Vt,Ht.data)}else{j&&Lt&&n.texStorage2D(e.TEXTURE_2D,Gt,Bt,me[0].width,me[0].height);for(let Et=0,mt=me.length;Et<mt;Et++)Ht=me[Et],A.format!==na?Mt!==null?j?wt&&n.compressedTexSubImage2D(e.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Mt,Ht.data):n.compressedTexImage2D(e.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Ht.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?wt&&n.texSubImage2D(e.TEXTURE_2D,Et,0,0,Ht.width,Ht.height,Mt,Vt,Ht.data):n.texImage2D(e.TEXTURE_2D,Et,Bt,Ht.width,Ht.height,0,Mt,Vt,Ht.data)}else if(A.isDataArrayTexture)if(j){if(Lt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Gt,Bt,Tt.width,Tt.height,Tt.depth),wt)if(A.layerUpdates.size>0){const Et=jb(Tt.width,Tt.height,A.format,A.type);for(const mt of A.layerUpdates){const Wt=Tt.data.subarray(mt*Et/Tt.data.BYTES_PER_ELEMENT,(mt+1)*Et/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,mt,Tt.width,Tt.height,1,Mt,Vt,Wt)}A.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Mt,Vt,Tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Bt,Tt.width,Tt.height,Tt.depth,0,Mt,Vt,Tt.data);else if(A.isData3DTexture)j?(Lt&&n.texStorage3D(e.TEXTURE_3D,Gt,Bt,Tt.width,Tt.height,Tt.depth),wt&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Mt,Vt,Tt.data)):n.texImage3D(e.TEXTURE_3D,0,Bt,Tt.width,Tt.height,Tt.depth,0,Mt,Vt,Tt.data);else if(A.isFramebufferTexture){if(Lt)if(j)n.texStorage2D(e.TEXTURE_2D,Gt,Bt,Tt.width,Tt.height);else{let Et=Tt.width,mt=Tt.height;for(let Wt=0;Wt<Gt;Wt++)n.texImage2D(e.TEXTURE_2D,Wt,Bt,Et,mt,0,Mt,Vt,null),Et>>=1,mt>>=1}}else if(me.length>0){if(j&&Lt){const Et=At(me[0]);n.texStorage2D(e.TEXTURE_2D,Gt,Bt,Et.width,Et.height)}for(let Et=0,mt=me.length;Et<mt;Et++)Ht=me[Et],j?wt&&n.texSubImage2D(e.TEXTURE_2D,Et,0,0,Mt,Vt,Ht):n.texImage2D(e.TEXTURE_2D,Et,Bt,Mt,Vt,Ht);A.generateMipmaps=!1}else if(j){if(Lt){const Et=At(Tt);n.texStorage2D(e.TEXTURE_2D,Gt,Bt,Et.width,Et.height)}wt&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Mt,Vt,Tt)}else n.texImage2D(e.TEXTURE_2D,0,Bt,Mt,Vt,Tt);y(A)&&S(dt),Kt.__version=gt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function yt(N,A,Y){if(A.image.length!==6)return;const dt=_t(N,A),xt=A.source;n.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+Y);const gt=a.get(xt);if(xt.version!==gt.__version||dt===!0){n.activeTexture(e.TEXTURE0+Y);const Kt=De.getPrimaries(De.workingColorSpace),Pt=A.colorSpace===Yr?null:De.getPrimaries(A.colorSpace),ee=A.colorSpace===Yr||Kt===Pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,A.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,A.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const re=A.isCompressedTexture||A.image[0].isCompressedTexture,Tt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let mt=0;mt<6;mt++)!re&&!Tt?Mt[mt]=M(A.image[mt],!0,s.maxCubemapSize):Mt[mt]=Tt?A.image[mt].image:A.image[mt],Mt[mt]=Ce(A,Mt[mt]);const Vt=Mt[0],Bt=l.convert(A.format,A.colorSpace),Ht=l.convert(A.type),me=C(A.internalFormat,Bt,Ht,A.colorSpace),j=A.isVideoTexture!==!0,Lt=gt.__version===void 0||dt===!0,wt=xt.dataReady;let Gt=w(A,Vt);X(e.TEXTURE_CUBE_MAP,A);let Et;if(re){j&&Lt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Gt,me,Vt.width,Vt.height);for(let mt=0;mt<6;mt++){Et=Mt[mt].mipmaps;for(let Wt=0;Wt<Et.length;Wt++){const le=Et[Wt];A.format!==na?Bt!==null?j?wt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,le.width,le.height,Bt,le.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,me,le.width,le.height,0,le.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,0,0,le.width,le.height,Bt,Ht,le.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt,me,le.width,le.height,0,Bt,Ht,le.data)}}}else{if(Et=A.mipmaps,j&&Lt){Et.length>0&&Gt++;const mt=At(Mt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Gt,me,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(Tt){j?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Mt[mt].width,Mt[mt].height,Bt,Ht,Mt[mt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,me,Mt[mt].width,Mt[mt].height,0,Bt,Ht,Mt[mt].data);for(let Wt=0;Wt<Et.length;Wt++){const He=Et[Wt].image[mt].image;j?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,He.width,He.height,Bt,Ht,He.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,me,He.width,He.height,0,Bt,Ht,He.data)}}else{j?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Bt,Ht,Mt[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,me,Bt,Ht,Mt[mt]);for(let Wt=0;Wt<Et.length;Wt++){const le=Et[Wt];j?wt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,0,0,Bt,Ht,le.image[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Wt+1,me,Bt,Ht,le.image[mt])}}}y(A)&&S(e.TEXTURE_CUBE_MAP),gt.__version=xt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function pt(N,A,Y,dt,xt,gt){const Kt=l.convert(Y.format,Y.colorSpace),Pt=l.convert(Y.type),ee=C(Y.internalFormat,Kt,Pt,Y.colorSpace),re=a.get(A),Tt=a.get(Y);if(Tt.__renderTarget=A,!re.__hasExternalTextures){const Mt=Math.max(1,A.width>>gt),Vt=Math.max(1,A.height>>gt);xt===e.TEXTURE_3D||xt===e.TEXTURE_2D_ARRAY?n.texImage3D(xt,gt,ee,Mt,Vt,A.depth,0,Kt,Pt,null):n.texImage2D(xt,gt,ee,Mt,Vt,0,Kt,Pt,null)}n.bindFramebuffer(e.FRAMEBUFFER,N),Ze(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,dt,xt,Tt.__webglTexture,0,k(A)):(xt===e.TEXTURE_2D||xt>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,dt,xt,Tt.__webglTexture,gt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ct(N,A,Y){if(e.bindRenderbuffer(e.RENDERBUFFER,N),A.depthBuffer){const dt=A.depthTexture,xt=dt&&dt.isDepthTexture?dt.type:null,gt=L(A.stencilBuffer,xt),Kt=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ze(A)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,k(A),gt,A.width,A.height):Y?e.renderbufferStorageMultisample(e.RENDERBUFFER,k(A),gt,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,gt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Kt,e.RENDERBUFFER,N)}else{const dt=A.textures;for(let xt=0;xt<dt.length;xt++){const gt=dt[xt],Kt=l.convert(gt.format,gt.colorSpace),Pt=l.convert(gt.type),ee=C(gt.internalFormat,Kt,Pt,gt.colorSpace);Ze(A)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,k(A),ee,A.width,A.height):Y?e.renderbufferStorageMultisample(e.RENDERBUFFER,k(A),ee,A.width,A.height):e.renderbufferStorage(e.RENDERBUFFER,ee,A.width,A.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Dt(N,A,Y){const dt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=a.get(A.depthTexture);if(xt.__renderTarget=A,(!xt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),dt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,A.depthTexture.addEventListener("dispose",O)),xt.__webglTexture===void 0){xt.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,xt.__webglTexture),X(e.TEXTURE_CUBE_MAP,A.depthTexture);const re=l.convert(A.depthTexture.format),Tt=l.convert(A.depthTexture.type);let Mt;A.depthTexture.format===cr?Mt=e.DEPTH_COMPONENT24:A.depthTexture.format===Ps&&(Mt=e.DEPTH24_STENCIL8);for(let Vt=0;Vt<6;Vt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0,Mt,A.width,A.height,0,re,Tt,null)}}else K(A.depthTexture,0);const gt=xt.__webglTexture,Kt=k(A),Pt=dt?e.TEXTURE_CUBE_MAP_POSITIVE_X+Y:e.TEXTURE_2D,ee=A.depthTexture.format===Ps?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(A.depthTexture.format===cr)Ze(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Pt,gt,0,Kt):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Pt,gt,0);else if(A.depthTexture.format===Ps)Ze(A)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Pt,gt,0,Kt):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Pt,gt,0);else throw new Error("Unknown depthTexture format")}function kt(N){const A=a.get(N),Y=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const dt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),dt){const xt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,dt.removeEventListener("dispose",xt)};dt.addEventListener("dispose",xt),A.__depthDisposeCallback=xt}A.__boundDepthTexture=dt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)Dt(A.__webglFramebuffer[dt],N,dt);else{const dt=N.texture.mipmaps;dt&&dt.length>0?Dt(A.__webglFramebuffer[0],N,0):Dt(A.__webglFramebuffer,N,0)}else if(Y){A.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[dt]),A.__webglDepthbuffer[dt]===void 0)A.__webglDepthbuffer[dt]=e.createRenderbuffer(),Ct(A.__webglDepthbuffer[dt],N,!1);else{const xt=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer[dt];e.bindRenderbuffer(e.RENDERBUFFER,gt),e.framebufferRenderbuffer(e.FRAMEBUFFER,xt,e.RENDERBUFFER,gt)}}else{const dt=N.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=e.createRenderbuffer(),Ct(A.__webglDepthbuffer,N,!1);else{const xt=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,gt=A.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,gt),e.framebufferRenderbuffer(e.FRAMEBUFFER,xt,e.RENDERBUFFER,gt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(N,A,Y){const dt=a.get(N);A!==void 0&&pt(dt.__webglFramebuffer,N,N.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Y!==void 0&&kt(N)}function te(N){const A=N.texture,Y=a.get(N),dt=a.get(A);N.addEventListener("dispose",F);const xt=N.textures,gt=N.isWebGLCubeRenderTarget===!0,Kt=xt.length>1;if(Kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=e.createTexture()),dt.__version=A.version,c.memory.textures++),gt){Y.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[Pt]=[];for(let ee=0;ee<A.mipmaps.length;ee++)Y.__webglFramebuffer[Pt][ee]=e.createFramebuffer()}else Y.__webglFramebuffer[Pt]=e.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)Y.__webglFramebuffer[Pt]=e.createFramebuffer()}else Y.__webglFramebuffer=e.createFramebuffer();if(Kt)for(let Pt=0,ee=xt.length;Pt<ee;Pt++){const re=a.get(xt[Pt]);re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture(),c.memory.textures++)}if(N.samples>0&&Ze(N)===!1){Y.__webglMultisampledFramebuffer=e.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Pt=0;Pt<xt.length;Pt++){const ee=xt[Pt];Y.__webglColorRenderbuffer[Pt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Y.__webglColorRenderbuffer[Pt]);const re=l.convert(ee.format,ee.colorSpace),Tt=l.convert(ee.type),Mt=C(ee.internalFormat,re,Tt,ee.colorSpace,N.isXRRenderTarget===!0),Vt=k(N);e.renderbufferStorageMultisample(e.RENDERBUFFER,Vt,Mt,N.width,N.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Pt,e.RENDERBUFFER,Y.__webglColorRenderbuffer[Pt])}e.bindRenderbuffer(e.RENDERBUFFER,null),N.depthBuffer&&(Y.__webglDepthRenderbuffer=e.createRenderbuffer(),Ct(Y.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(gt){n.bindTexture(e.TEXTURE_CUBE_MAP,dt.__webglTexture),X(e.TEXTURE_CUBE_MAP,A);for(let Pt=0;Pt<6;Pt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)pt(Y.__webglFramebuffer[Pt][ee],N,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,ee);else pt(Y.__webglFramebuffer[Pt],N,A,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);y(A)&&S(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Kt){for(let Pt=0,ee=xt.length;Pt<ee;Pt++){const re=xt[Pt],Tt=a.get(re);let Mt=e.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Mt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Mt,Tt.__webglTexture),X(Mt,re),pt(Y.__webglFramebuffer,N,re,e.COLOR_ATTACHMENT0+Pt,Mt,0),y(re)&&S(Mt)}n.unbindTexture()}else{let Pt=e.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Pt=N.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Pt,dt.__webglTexture),X(Pt,A),A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)pt(Y.__webglFramebuffer[ee],N,A,e.COLOR_ATTACHMENT0,Pt,ee);else pt(Y.__webglFramebuffer,N,A,e.COLOR_ATTACHMENT0,Pt,0);y(A)&&S(Pt),n.unbindTexture()}N.depthBuffer&&kt(N)}function ie(N){const A=N.textures;for(let Y=0,dt=A.length;Y<dt;Y++){const xt=A[Y];if(y(xt)){const gt=T(N),Kt=a.get(xt).__webglTexture;n.bindTexture(gt,Kt),S(gt),n.unbindTexture()}}}const xe=[],se=[];function Je(N){if(N.samples>0){if(Ze(N)===!1){const A=N.textures,Y=N.width,dt=N.height;let xt=e.COLOR_BUFFER_BIT;const gt=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Kt=a.get(N),Pt=A.length>1;if(Pt)for(let re=0;re<A.length;re++)n.bindFramebuffer(e.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Kt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const ee=N.texture.mipmaps;ee&&ee.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let re=0;re<A.length;re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(xt|=e.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(xt|=e.STENCIL_BUFFER_BIT)),Pt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Kt.__webglColorRenderbuffer[re]);const Tt=a.get(A[re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Tt,0)}e.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,xt,e.NEAREST),d===!0&&(xe.length=0,se.length=0,xe.push(e.COLOR_ATTACHMENT0+re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(xe.push(gt),se.push(gt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Pt)for(let re=0;re<A.length;re++){n.bindFramebuffer(e.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.RENDERBUFFER,Kt.__webglColorRenderbuffer[re]);const Tt=a.get(A[re]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Kt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+re,e.TEXTURE_2D,Tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const A=N.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[A])}}}function k(N){return Math.min(s.maxSamples,N.samples)}function Ze(N){const A=a.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Se(N){const A=c.render.frame;m.get(N)!==A&&(m.set(N,A),N.update())}function Ce(N,A){const Y=N.colorSpace,dt=N.format,xt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Y!==nl&&Y!==Yr&&(De.getTransfer(Y)===Xe?(dt!==na||xt!==Fi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Y)),A}function At(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=I,this.setTexture3D=z,this.setTextureCube=it,this.rebindTextures=he,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function lB(e,t){function n(a,s=Yr){let l;const c=De.getTransfer(s);if(a===Fi)return e.UNSIGNED_BYTE;if(a===Gv)return e.UNSIGNED_SHORT_4_4_4_4;if(a===kv)return e.UNSIGNED_SHORT_5_5_5_1;if(a===rA)return e.UNSIGNED_INT_5_9_9_9_REV;if(a===sA)return e.UNSIGNED_INT_10F_11F_11F_REV;if(a===iA)return e.BYTE;if(a===aA)return e.SHORT;if(a===zu)return e.UNSIGNED_SHORT;if(a===Hv)return e.INT;if(a===wa)return e.UNSIGNED_INT;if(a===_a)return e.FLOAT;if(a===ur)return e.HALF_FLOAT;if(a===oA)return e.ALPHA;if(a===lA)return e.RGB;if(a===na)return e.RGBA;if(a===cr)return e.DEPTH_COMPONENT;if(a===Ps)return e.DEPTH_STENCIL;if(a===uA)return e.RED;if(a===Xv)return e.RED_INTEGER;if(a===el)return e.RG;if(a===Wv)return e.RG_INTEGER;if(a===qv)return e.RGBA_INTEGER;if(a===md||a===gd||a===vd||a===_d)if(c===Xe)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===md)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===_d)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===md)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gd)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===_d)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===lg||a===ug||a===cg||a===fg)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===lg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ug)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===cg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===fg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===dg||a===hg||a===pg||a===mg||a===gg||a===vg||a===_g)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===dg||a===hg)return c===Xe?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===pg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===mg)return l.COMPRESSED_R11_EAC;if(a===gg)return l.COMPRESSED_SIGNED_R11_EAC;if(a===vg)return l.COMPRESSED_RG11_EAC;if(a===_g)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===yg||a===xg||a===Sg||a===bg||a===Mg||a===Eg||a===Tg||a===Ag||a===Rg||a===Cg||a===wg||a===Dg||a===Lg||a===Ug)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===yg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===bg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Eg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ag)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Rg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===wg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Lg)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ug)return c===Xe?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Pg||a===Ng||a===Og)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Pg)return c===Xe?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ng)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Og)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Fg||a===Ig||a===Bg||a===zg)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Fg)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Ig)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Bg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===zg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vu?e.UNSIGNED_INT_24_8:e[a]!==void 0?e[a]:null}return{convert:n}}const uB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cB=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fB{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new xA(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Da({vertexShader:uB,fragmentShader:cB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dr(new Jd(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dB extends hl{constructor(t,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,v=null,_=null,x=null,b=null;const M=typeof XRWebGLBinding<"u",y=new fB,S={},T=n.getContextAttributes();let C=null,L=null;const w=[],O=[],F=new Ke;let R=null;const P=new Ji;P.viewport=new hn;const tt=new Ji;tt.viewport=new hn;const H=[P,tt],Z=new MO;let Q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let yt=w[nt];return yt===void 0&&(yt=new qm,w[nt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(nt){let yt=w[nt];return yt===void 0&&(yt=new qm,w[nt]=yt),yt.getGripSpace()},this.getHand=function(nt){let yt=w[nt];return yt===void 0&&(yt=new qm,w[nt]=yt),yt.getHandSpace()};function K(nt){const yt=O.indexOf(nt.inputSource);if(yt===-1)return;const pt=w[yt];pt!==void 0&&(pt.update(nt.inputSource,nt.frame,h||c),pt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function I(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",z);for(let nt=0;nt<w.length;nt++){const yt=O[nt];yt!==null&&(O[nt]=null,w[nt].disconnect(yt))}Q=null,J=null,y.reset();for(const nt in S)delete S[nt];t.setRenderTarget(C),x=null,_=null,v=null,s=null,L=null,Ft.stop(),a.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){l=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){f=nt,a.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(s,n)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",I),s.addEventListener("inputsourceschange",z),T.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ct=null,Dt=null;T.depth&&(Dt=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=T.stencil?Ps:cr,Ct=T.stencil?Vu:wa);const kt={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(kt),s.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),L=new Ea(_.textureWidth,_.textureHeight,{format:na,type:Fi,depthTexture:new Hu(_.textureWidth,_.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const pt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,pt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Ea(x.framebufferWidth,x.framebufferHeight,{format:na,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(f),Ft.setContext(s),Ft.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(nt){for(let yt=0;yt<nt.removed.length;yt++){const pt=nt.removed[yt],Ct=O.indexOf(pt);Ct>=0&&(O[Ct]=null,w[Ct].disconnect(pt))}for(let yt=0;yt<nt.added.length;yt++){const pt=nt.added[yt];let Ct=O.indexOf(pt);if(Ct===-1){for(let kt=0;kt<w.length;kt++)if(kt>=O.length){O.push(pt),Ct=kt;break}else if(O[kt]===null){O[kt]=pt,Ct=kt;break}if(Ct===-1)break}const Dt=w[Ct];Dt&&Dt.connect(pt)}}const it=new lt,ct=new lt;function ht(nt,yt,pt){it.setFromMatrixPosition(yt.matrixWorld),ct.setFromMatrixPosition(pt.matrixWorld);const Ct=it.distanceTo(ct),Dt=yt.projectionMatrix.elements,kt=pt.projectionMatrix.elements,he=Dt[14]/(Dt[10]-1),te=Dt[14]/(Dt[10]+1),ie=(Dt[9]+1)/Dt[5],xe=(Dt[9]-1)/Dt[5],se=(Dt[8]-1)/Dt[0],Je=(kt[8]+1)/kt[0],k=he*se,Ze=he*Je,Se=Ct/(-se+Je),Ce=Se*-se;if(yt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ce),nt.translateZ(Se),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Dt[10]===-1)nt.projectionMatrix.copy(yt.projectionMatrix),nt.projectionMatrixInverse.copy(yt.projectionMatrixInverse);else{const At=he+Se,N=te+Se,A=k-Ce,Y=Ze+(Ct-Ce),dt=ie*te/N*At,xt=xe*te/N*At;nt.projectionMatrix.makePerspective(A,Y,dt,xt,At,N),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function B(nt,yt){yt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(yt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let yt=nt.near,pt=nt.far;y.texture!==null&&(y.depthNear>0&&(yt=y.depthNear),y.depthFar>0&&(pt=y.depthFar)),Z.near=tt.near=P.near=yt,Z.far=tt.far=P.far=pt,(Q!==Z.near||J!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),Q=Z.near,J=Z.far),Z.layers.mask=nt.layers.mask|6,P.layers.mask=Z.layers.mask&-5,tt.layers.mask=Z.layers.mask&-3;const Ct=nt.parent,Dt=Z.cameras;B(Z,Ct);for(let kt=0;kt<Dt.length;kt++)B(Dt[kt],Ct);Dt.length===2?ht(Z,P,tt):Z.projectionMatrix.copy(P.projectionMatrix),X(nt,Z,Ct)};function X(nt,yt,pt){pt===null?nt.matrix.copy(yt.matrixWorld):(nt.matrix.copy(pt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(yt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(yt.projectionMatrix),nt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Vg*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(nt){d=nt,_!==null&&(_.fixedFoveation=nt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(nt){return S[nt]};let _t=null;function Rt(nt,yt){if(m=yt.getViewerPose(h||c),b=yt,m!==null){const pt=m.views;x!==null&&(t.setRenderTargetFramebuffer(L,x.framebuffer),t.setRenderTarget(L));let Ct=!1;pt.length!==Z.cameras.length&&(Z.cameras.length=0,Ct=!0);for(let te=0;te<pt.length;te++){const ie=pt[te];let xe=null;if(x!==null)xe=x.getViewport(ie);else{const Je=v.getViewSubImage(_,ie);xe=Je.viewport,te===0&&(t.setRenderTargetTextures(L,Je.colorTexture,Je.depthStencilTexture),t.setRenderTarget(L))}let se=H[te];se===void 0&&(se=new Ji,se.layers.enable(te),se.viewport=new hn,H[te]=se),se.matrix.fromArray(ie.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ie.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(xe.x,xe.y,xe.width,xe.height),te===0&&(Z.matrix.copy(se.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ct===!0&&Z.cameras.push(se)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){v=a.getBinding();const te=v.getDepthInformation(pt[0]);te&&te.isValid&&te.texture&&y.init(te,s.renderState)}if(Dt&&Dt.includes("camera-access")&&M){t.state.unbindTexture(),v=a.getBinding();for(let te=0;te<pt.length;te++){const ie=pt[te].camera;if(ie){let xe=S[ie];xe||(xe=new xA,S[ie]=xe);const se=v.getCameraImage(ie);xe.sourceTexture=se}}}}for(let pt=0;pt<w.length;pt++){const Ct=O[pt],Dt=w[pt];Ct!==null&&Dt!==void 0&&Dt.update(Ct,yt,h||c)}_t&&_t(nt,yt),yt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:yt}),b=null}const Ft=new EA;Ft.setAnimationLoop(Rt),this.setAnimationLoop=function(nt){_t=nt},this.dispose=function(){}}}const Ts=new fr,hB=new pn;function pB(e,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,SA(e)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,T,C,L){S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&x(y,S,L)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,T,C):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ui&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ui&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const T=t.get(S),C=T.envMap,L=T.envMapRotation;C&&(y.envMap.value=C,Ts.copy(L),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),y.envMapRotation.value.setFromMatrix4(hB.makeRotationFromEuler(Ts)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,T,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*T,y.scale.value=C*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,T){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ui&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=T.texture,y.transmissionSamplerSize.value.set(T.width,T.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const T=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(T.matrixWorld),y.nearDistance.value=T.shadow.camera.near,y.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function mB(e,t,n,a){let s={},l={},c=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,C){const L=C.program;a.uniformBlockBinding(T,L)}function h(T,C){let L=s[T.id];L===void 0&&(b(T),L=m(T),s[T.id]=L,T.addEventListener("dispose",y));const w=C.program;a.updateUBOMapping(T,w);const O=t.render.frame;l[T.id]!==O&&(_(T),l[T.id]=O)}function m(T){const C=v();T.__bindingPointIndex=C;const L=e.createBuffer(),w=T.__size,O=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,L),e.bufferData(e.UNIFORM_BUFFER,w,O),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,C,L),L}function v(){for(let T=0;T<f;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(T){const C=s[T.id],L=T.uniforms,w=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,C);for(let O=0,F=L.length;O<F;O++){const R=Array.isArray(L[O])?L[O]:[L[O]];for(let P=0,tt=R.length;P<tt;P++){const H=R[P];if(x(H,O,P,w)===!0){const Z=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let K=0;K<Q.length;K++){const I=Q[K],z=M(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,e.bufferSubData(e.UNIFORM_BUFFER,Z+J,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,Z,H.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(T,C,L,w){const O=T.value,F=C+"_"+L;if(w[F]===void 0)return typeof O=="number"||typeof O=="boolean"?w[F]=O:w[F]=O.clone(),!0;{const R=w[F];if(typeof O=="number"||typeof O=="boolean"){if(R!==O)return w[F]=O,!0}else if(R.equals(O)===!1)return R.copy(O),!0}return!1}function b(T){const C=T.uniforms;let L=0;const w=16;for(let F=0,R=C.length;F<R;F++){const P=Array.isArray(C[F])?C[F]:[C[F]];for(let tt=0,H=P.length;tt<H;tt++){const Z=P[tt],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let J=0,K=Q.length;J<K;J++){const I=Q[J],z=M(I),it=L%w,ct=it%z.boundary,ht=it+ct;L+=ct,ht!==0&&w-ht<z.storage&&(L+=w-ht),Z.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=z.storage}}}const O=L%w;return O>0&&(L+=w-O),T.__size=L,T.__cache={},this}function M(T){const C={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(C.boundary=4,C.storage=4):T.isVector2?(C.boundary=8,C.storage=8):T.isVector3||T.isColor?(C.boundary=16,C.storage=12):T.isVector4?(C.boundary=16,C.storage=16):T.isMatrix3?(C.boundary=48,C.storage=48):T.isMatrix4?(C.boundary=64,C.storage=64):T.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",T),C}function y(T){const C=T.target;C.removeEventListener("dispose",y);const L=c.indexOf(C.__bindingPointIndex);c.splice(L,1),e.deleteBuffer(s[C.id]),delete s[C.id],delete l[C.id]}function S(){for(const T in s)e.deleteBuffer(s[T]);c=[],s={},l={}}return{bind:d,update:h,dispose:S}}const gB=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ha=null;function vB(){return ha===null&&(ha=new lO(gB,16,16,el,ur),ha.name="DFG_LUT",ha.minFilter=qn,ha.magFilter=qn,ha.wrapS=ar,ha.wrapT=ar,ha.generateMipmaps=!1,ha.needsUpdate=!0),ha}class d8{constructor(t={}){const{canvas:n=VN(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Fi}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const M=x,y=new Set([qv,Wv,Xv]),S=new Set([Fi,wa,zu,Vu,Gv,kv]),T=new Uint32Array(4),C=new Int32Array(4);let L=null,w=null;const O=[],F=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let tt=!1;this._outputColorSpace=Ni;let H=0,Z=0,Q=null,J=-1,K=null;const I=new hn,z=new hn;let it=null;const ct=new We(0);let ht=0,B=n.width,X=n.height,_t=1,Rt=null,Ft=null;const nt=new hn(0,0,B,X),yt=new hn(0,0,B,X);let pt=!1;const Ct=new _A;let Dt=!1,kt=!1;const he=new pn,te=new lt,ie=new hn,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function Je(){return Q===null?_t:1}let k=a;function Ze(U,q){return n.getContext(U,q)}try{const U={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vv}`),n.addEventListener("webglcontextlost",Wt,!1),n.addEventListener("webglcontextrestored",le,!1),n.addEventListener("webglcontextcreationerror",He,!1),k===null){const q="webgl2";if(k=Ze(q,U),k===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Ne("WebGLRenderer: "+U.message),U}let Se,Ce,At,N,A,Y,dt,xt,gt,Kt,Pt,ee,re,Tt,Mt,Vt,Bt,Ht,me,j,Lt,wt,Gt;function Et(){Se=new _5(k),Se.init(),Lt=new lB(k,Se),Ce=new c5(k,Se,t,Lt),At=new sB(k,Se),Ce.reversedDepthBuffer&&_&&At.buffers.depth.setReversed(!0),N=new S5(k),A=new qI,Y=new oB(k,Se,At,A,Ce,Lt,N),dt=new v5(P),xt=new AO(k),wt=new l5(k,xt),gt=new y5(k,xt,N,wt),Kt=new M5(k,gt,xt,wt,N),Ht=new b5(k,Ce,Y),Mt=new f5(A),Pt=new WI(P,dt,Se,Ce,wt,Mt),ee=new pB(P,A),re=new jI,Tt=new tB(Se),Bt=new o5(P,dt,At,Kt,b,d),Vt=new rB(P,Kt,Ce),Gt=new mB(k,N,Ce,At),me=new u5(k,Se,N),j=new x5(k,Se,N),N.programs=Pt.programs,P.capabilities=Ce,P.extensions=Se,P.properties=A,P.renderLists=re,P.shadowMap=Vt,P.state=At,P.info=N}Et(),M!==Fi&&(R=new T5(M,n.width,n.height,s,l));const mt=new dB(P,k);this.xr=mt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const U=Se.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Se.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(U){U!==void 0&&(_t=U,this.setSize(B,X,!1))},this.getSize=function(U){return U.set(B,X)},this.setSize=function(U,q,ut=!0){if(mt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,X=q,n.width=Math.floor(U*_t),n.height=Math.floor(q*_t),ut===!0&&(n.style.width=U+"px",n.style.height=q+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,U,q)},this.getDrawingBufferSize=function(U){return U.set(B*_t,X*_t).floor()},this.setDrawingBufferSize=function(U,q,ut){B=U,X=q,_t=ut,n.width=Math.floor(U*ut),n.height=Math.floor(q*ut),this.setViewport(0,0,U,q)},this.setEffects=function(U){if(M===Fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let q=0;q<U.length;q++)if(U[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(I)},this.getViewport=function(U){return U.copy(nt)},this.setViewport=function(U,q,ut,st){U.isVector4?nt.set(U.x,U.y,U.z,U.w):nt.set(U,q,ut,st),At.viewport(I.copy(nt).multiplyScalar(_t).round())},this.getScissor=function(U){return U.copy(yt)},this.setScissor=function(U,q,ut,st){U.isVector4?yt.set(U.x,U.y,U.z,U.w):yt.set(U,q,ut,st),At.scissor(z.copy(yt).multiplyScalar(_t).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(U){At.setScissorTest(pt=U)},this.setOpaqueSort=function(U){Rt=U},this.setTransparentSort=function(U){Ft=U},this.getClearColor=function(U){return U.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(U=!0,q=!0,ut=!0){let st=0;if(U){let et=!1;if(Q!==null){const Nt=Q.texture.format;et=y.has(Nt)}if(et){const Nt=Q.texture.type,Xt=S.has(Nt),Ot=Bt.getClearColor(),Zt=Bt.getClearAlpha(),Jt=Ot.r,oe=Ot.g,fe=Ot.b;Xt?(T[0]=Jt,T[1]=oe,T[2]=fe,T[3]=Zt,k.clearBufferuiv(k.COLOR,0,T)):(C[0]=Jt,C[1]=oe,C[2]=fe,C[3]=Zt,k.clearBufferiv(k.COLOR,0,C))}else st|=k.COLOR_BUFFER_BIT}q&&(st|=k.DEPTH_BUFFER_BIT),ut&&(st|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&k.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Wt,!1),n.removeEventListener("webglcontextrestored",le,!1),n.removeEventListener("webglcontextcreationerror",He,!1),Bt.dispose(),re.dispose(),Tt.dispose(),A.dispose(),dt.dispose(),Kt.dispose(),wt.dispose(),Gt.dispose(),Pt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Gs),mt.removeEventListener("sessionend",ks),oa.stop()};function Wt(U){U.preventDefault(),Rb("WebGLRenderer: Context Lost."),tt=!0}function le(){Rb("WebGLRenderer: Context Restored."),tt=!1;const U=N.autoReset,q=Vt.enabled,ut=Vt.autoUpdate,st=Vt.needsUpdate,et=Vt.type;Et(),N.autoReset=U,Vt.enabled=q,Vt.autoUpdate=ut,Vt.needsUpdate=st,Vt.type=et}function He(U){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function we(U){const q=U.target;q.removeEventListener("dispose",we),Yn(q)}function Yn(U){zi(U),A.remove(U)}function zi(U){const q=A.get(U).programs;q!==void 0&&(q.forEach(function(ut){Pt.releaseProgram(ut)}),U.isShaderMaterial&&Pt.releaseShaderCache(U))}this.renderBufferDirect=function(U,q,ut,st,et,Nt){q===null&&(q=xe);const Xt=et.isMesh&&et.matrixWorld.determinant()<0,Ot=cc(U,q,ut,st,et);At.setMaterial(st,Xt);let Zt=ut.index,Jt=1;if(st.wireframe===!0){if(Zt=gt.getWireframeAttribute(ut),Zt===void 0)return;Jt=2}const oe=ut.drawRange,fe=ut.attributes.position;let qt=oe.start*Jt,ge=(oe.start+oe.count)*Jt;Nt!==null&&(qt=Math.max(qt,Nt.start*Jt),ge=Math.min(ge,(Nt.start+Nt.count)*Jt)),Zt!==null?(qt=Math.max(qt,0),ge=Math.min(ge,Zt.count)):fe!=null&&(qt=Math.max(qt,0),ge=Math.min(ge,fe.count));const nn=ge-qt;if(nn<0||nn===1/0)return;wt.setup(et,st,Ot,ut,Zt);let an,Le=me;if(Zt!==null&&(an=xt.get(Zt),Le=j,Le.setIndex(an)),et.isMesh)st.wireframe===!0?(At.setLineWidth(st.wireframeLinewidth*Je()),Le.setMode(k.LINES)):Le.setMode(k.TRIANGLES);else if(et.isLine){let An=st.linewidth;An===void 0&&(An=1),At.setLineWidth(An*Je()),et.isLineSegments?Le.setMode(k.LINES):et.isLineLoop?Le.setMode(k.LINE_LOOP):Le.setMode(k.LINE_STRIP)}else et.isPoints?Le.setMode(k.POINTS):et.isSprite&&Le.setMode(k.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Fd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Le.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const An=et._multiDrawStarts,jt=et._multiDrawCounts,jn=et._multiDrawCount,ce=Zt?xt.get(Zt).bytesPerElement:1,$n=A.get(st).currentProgram.getUniforms();for(let di=0;di<jn;di++)$n.setValue(k,"_gl_DrawID",di),Le.render(An[di]/ce,jt[di])}else if(et.isInstancedMesh)Le.renderInstances(qt,nn,et.count);else if(ut.isInstancedBufferGeometry){const An=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,jt=Math.min(ut.instanceCount,An);Le.renderInstances(qt,nn,jt)}else Le.render(qt,nn)};function xl(U,q,ut){U.transparent===!0&&U.side===ir&&U.forceSinglePass===!1?(U.side=ui,U.needsUpdate=!0,pr(U,q,ut),U.side=Kr,U.needsUpdate=!0,pr(U,q,ut),U.side=ir):pr(U,q,ut)}this.compile=function(U,q,ut=null){ut===null&&(ut=U),w=Tt.get(ut),w.init(q),F.push(w),ut.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),U!==ut&&U.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(w.pushLight(et),et.castShadow&&w.pushShadow(et))}),w.setupLights();const st=new Set;return U.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Nt=et.material;if(Nt)if(Array.isArray(Nt))for(let Xt=0;Xt<Nt.length;Xt++){const Ot=Nt[Xt];xl(Ot,ut,et),st.add(Ot)}else xl(Nt,ut,et),st.add(Nt)}),w=F.pop(),st},this.compileAsync=function(U,q,ut=null){const st=this.compile(U,q,ut);return new Promise(et=>{function Nt(){if(st.forEach(function(Xt){A.get(Xt).currentProgram.isReady()&&st.delete(Xt)}),st.size===0){et(U);return}setTimeout(Nt,10)}Se.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Hs=null;function oc(U){Hs&&Hs(U)}function Gs(){oa.stop()}function ks(){oa.start()}const oa=new EA;oa.setAnimationLoop(oc),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(U){Hs=U,mt.setAnimationLoop(U),U===null?oa.stop():oa.start()},mt.addEventListener("sessionstart",Gs),mt.addEventListener("sessionend",ks),this.render=function(U,q){if(q!==void 0&&q.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(tt===!0)return;const ut=mt.enabled===!0&&mt.isPresenting===!0,st=R!==null&&(Q===null||ut)&&R.begin(P,Q);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(q),q=mt.getCamera()),U.isScene===!0&&U.onBeforeRender(P,U,q,Q),w=Tt.get(U,F.length),w.init(q),F.push(w),he.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ct.setFromProjectionMatrix(he,ya,q.reversedDepth),kt=this.localClippingEnabled,Dt=Mt.init(this.clippingPlanes,kt),L=re.get(U,O.length),L.init(),O.push(L),mt.enabled===!0&&mt.isPresenting===!0){const Xt=P.xr.getDepthSensingMesh();Xt!==null&&Xs(Xt,q,-1/0,P.sortObjects)}Xs(U,q,0,P.sortObjects),L.finish(),P.sortObjects===!0&&L.sort(Rt,Ft),se=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,se&&Bt.addToRenderList(L,U),this.info.render.frame++,Dt===!0&&Mt.beginShadows();const et=w.state.shadowsArray;if(Vt.render(et,U,q),Dt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&R.hasRenderPass())===!1){const Xt=L.opaque,Ot=L.transmissive;if(w.setupLights(),q.isArrayCamera){const Zt=q.cameras;if(Ot.length>0)for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const fe=Zt[Jt];mn(Xt,Ot,U,fe)}se&&Bt.render(U);for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const fe=Zt[Jt];Vi(L,U,fe,fe.viewport)}}else Ot.length>0&&mn(Xt,Ot,U,q),se&&Bt.render(U),Vi(L,U,q)}Q!==null&&Z===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),st&&R.end(P),U.isScene===!0&&U.onAfterRender(P,U,q),wt.resetDefaultState(),J=-1,K=null,F.pop(),F.length>0?(w=F[F.length-1],Dt===!0&&Mt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,O.pop(),O.length>0?L=O[O.length-1]:L=null};function Xs(U,q,ut,st){if(U.visible===!1)return;if(U.layers.test(q.layers)){if(U.isGroup)ut=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(q);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Ct.intersectsSprite(U)){st&&ie.setFromMatrixPosition(U.matrixWorld).applyMatrix4(he);const Xt=Kt.update(U),Ot=U.material;Ot.visible&&L.push(U,Xt,Ot,ut,ie.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Ct.intersectsObject(U))){const Xt=Kt.update(U),Ot=U.material;if(st&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ie.copy(U.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ie.copy(Xt.boundingSphere.center)),ie.applyMatrix4(U.matrixWorld).applyMatrix4(he)),Array.isArray(Ot)){const Zt=Xt.groups;for(let Jt=0,oe=Zt.length;Jt<oe;Jt++){const fe=Zt[Jt],qt=Ot[fe.materialIndex];qt&&qt.visible&&L.push(U,Xt,qt,ut,ie.z,fe)}}else Ot.visible&&L.push(U,Xt,Ot,ut,ie.z,null)}}const Nt=U.children;for(let Xt=0,Ot=Nt.length;Xt<Ot;Xt++)Xs(Nt[Xt],q,ut,st)}function Vi(U,q,ut,st){const{opaque:et,transmissive:Nt,transparent:Xt}=U;w.setupLightsView(ut),Dt===!0&&Mt.setGlobalState(P.clippingPlanes,ut),st&&At.viewport(I.copy(st)),et.length>0&&Tn(et,q,ut),Nt.length>0&&Tn(Nt,q,ut),Xt.length>0&&Tn(Xt,q,ut),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function mn(U,q,ut,st){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[st.id]===void 0){const qt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[st.id]=new Ea(1,1,{generateMipmaps:!0,type:qt?ur:Fi,minFilter:Us,samples:Math.max(4,Ce.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const Nt=w.state.transmissionRenderTarget[st.id],Xt=st.viewport||I;Nt.setSize(Xt.z*P.transmissionResolutionScale,Xt.w*P.transmissionResolutionScale);const Ot=P.getRenderTarget(),Zt=P.getActiveCubeFace(),Jt=P.getActiveMipmapLevel();P.setRenderTarget(Nt),P.getClearColor(ct),ht=P.getClearAlpha(),ht<1&&P.setClearColor(16777215,.5),P.clear(),se&&Bt.render(ut);const oe=P.toneMapping;P.toneMapping=Ma;const fe=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),w.setupLightsView(st),Dt===!0&&Mt.setGlobalState(P.clippingPlanes,st),Tn(U,ut,st),Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt),Se.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let ge=0,nn=q.length;ge<nn;ge++){const an=q[ge],{object:Le,geometry:An,material:jt,group:jn}=an;if(jt.side===ir&&Le.layers.test(st.layers)){const ce=jt.side;jt.side=ui,jt.needsUpdate=!0,Pa(Le,ut,st,An,jt,jn),jt.side=ce,jt.needsUpdate=!0,qt=!0}}qt===!0&&(Y.updateMultisampleRenderTarget(Nt),Y.updateRenderTargetMipmap(Nt))}P.setRenderTarget(Ot,Zt,Jt),P.setClearColor(ct,ht),fe!==void 0&&(st.viewport=fe),P.toneMapping=oe}function Tn(U,q,ut){const st=q.isScene===!0?q.overrideMaterial:null;for(let et=0,Nt=U.length;et<Nt;et++){const Xt=U[et],{object:Ot,geometry:Zt,group:Jt}=Xt;let oe=Xt.material;oe.allowOverride===!0&&st!==null&&(oe=st),Ot.layers.test(ut.layers)&&Pa(Ot,q,ut,Zt,oe,Jt)}}function Pa(U,q,ut,st,et,Nt){U.onBeforeRender(P,q,ut,st,et,Nt),U.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),et.onBeforeRender(P,q,ut,st,U,Nt),et.transparent===!0&&et.side===ir&&et.forceSinglePass===!1?(et.side=ui,et.needsUpdate=!0,P.renderBufferDirect(ut,q,st,et,U,Nt),et.side=Kr,et.needsUpdate=!0,P.renderBufferDirect(ut,q,st,et,U,Nt),et.side=ir):P.renderBufferDirect(ut,q,st,et,U,Nt),U.onAfterRender(P,q,ut,st,et,Nt)}function pr(U,q,ut){q.isScene!==!0&&(q=xe);const st=A.get(U),et=w.state.lights,Nt=w.state.shadowsArray,Xt=et.state.version,Ot=Pt.getParameters(U,et.state,Nt,q,ut),Zt=Pt.getProgramCacheKey(Ot);let Jt=st.programs;st.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?q.environment:null,st.fog=q.fog;const oe=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;st.envMap=dt.get(U.envMap||st.environment,oe),st.envMapRotation=st.environment!==null&&U.envMap===null?q.environmentRotation:U.envMapRotation,Jt===void 0&&(U.addEventListener("dispose",we),Jt=new Map,st.programs=Jt);let fe=Jt.get(Zt);if(fe!==void 0){if(st.currentProgram===fe&&st.lightsStateVersion===Xt)return uc(U,Ot),fe}else Ot.uniforms=Pt.getUniforms(U),U.onBeforeCompile(Ot,P),fe=Pt.acquireProgram(Ot,Zt),Jt.set(Zt,fe),st.uniforms=Ot.uniforms;const qt=st.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(qt.clippingPlanes=Mt.uniform),uc(U,Ot),st.needsLights=Sl(U),st.lightsStateVersion=Xt,st.needsLights&&(qt.ambientLightColor.value=et.state.ambient,qt.lightProbe.value=et.state.probe,qt.directionalLights.value=et.state.directional,qt.directionalLightShadows.value=et.state.directionalShadow,qt.spotLights.value=et.state.spot,qt.spotLightShadows.value=et.state.spotShadow,qt.rectAreaLights.value=et.state.rectArea,qt.ltc_1.value=et.state.rectAreaLTC1,qt.ltc_2.value=et.state.rectAreaLTC2,qt.pointLights.value=et.state.point,qt.pointLightShadows.value=et.state.pointShadow,qt.hemisphereLights.value=et.state.hemi,qt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,qt.spotLightMatrix.value=et.state.spotLightMatrix,qt.spotLightMap.value=et.state.spotLightMap,qt.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=fe,st.uniformsList=null,fe}function lc(U){if(U.uniformsList===null){const q=U.currentProgram.getUniforms();U.uniformsList=yd.seqWithValue(q.seq,U.uniforms)}return U.uniformsList}function uc(U,q){const ut=A.get(U);ut.outputColorSpace=q.outputColorSpace,ut.batching=q.batching,ut.batchingColor=q.batchingColor,ut.instancing=q.instancing,ut.instancingColor=q.instancingColor,ut.instancingMorph=q.instancingMorph,ut.skinning=q.skinning,ut.morphTargets=q.morphTargets,ut.morphNormals=q.morphNormals,ut.morphColors=q.morphColors,ut.morphTargetsCount=q.morphTargetsCount,ut.numClippingPlanes=q.numClippingPlanes,ut.numIntersection=q.numClipIntersection,ut.vertexAlphas=q.vertexAlphas,ut.vertexTangents=q.vertexTangents,ut.toneMapping=q.toneMapping}function cc(U,q,ut,st,et){q.isScene!==!0&&(q=xe),Y.resetTextureUnits();const Nt=q.fog,Xt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?q.environment:null,Ot=Q===null?P.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:nl,Zt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,Jt=dt.get(st.envMap||Xt,Zt),oe=st.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,fe=!!ut.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),qt=!!ut.morphAttributes.position,ge=!!ut.morphAttributes.normal,nn=!!ut.morphAttributes.color;let an=Ma;st.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(an=P.toneMapping);const Le=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,An=Le!==void 0?Le.length:0,jt=A.get(st),jn=w.state.lights;if(Dt===!0&&(kt===!0||U!==K)){const vn=U===K&&st.id===J;Mt.setState(st,U,vn)}let ce=!1;st.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==jn.state.version||jt.outputColorSpace!==Ot||et.isBatchedMesh&&jt.batching===!1||!et.isBatchedMesh&&jt.batching===!0||et.isBatchedMesh&&jt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&jt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&jt.instancing===!1||!et.isInstancedMesh&&jt.instancing===!0||et.isSkinnedMesh&&jt.skinning===!1||!et.isSkinnedMesh&&jt.skinning===!0||et.isInstancedMesh&&jt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&jt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&jt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&jt.instancingMorph===!1&&et.morphTexture!==null||jt.envMap!==Jt||st.fog===!0&&jt.fog!==Nt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Mt.numPlanes||jt.numIntersection!==Mt.numIntersection)||jt.vertexAlphas!==oe||jt.vertexTangents!==fe||jt.morphTargets!==qt||jt.morphNormals!==ge||jt.morphColors!==nn||jt.toneMapping!==an||jt.morphTargetsCount!==An)&&(ce=!0):(ce=!0,jt.__version=st.version);let $n=jt.currentProgram;ce===!0&&($n=pr(st,q,et));let di=!1,Hi=!1,hi=!1;const Be=$n.getUniforms(),gn=jt.uniforms;if(At.useProgram($n.program)&&(di=!0,Hi=!0,hi=!0),st.id!==J&&(J=st.id,Hi=!0),di||K!==U){At.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Be.setValue(k,"projectionMatrix",U.projectionMatrix),Be.setValue(k,"viewMatrix",U.matrixWorldInverse);const Gi=Be.map.cameraPosition;Gi!==void 0&&Gi.setValue(k,te.setFromMatrixPosition(U.matrixWorld)),Ce.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Be.setValue(k,"isOrthographic",U.isOrthographicCamera===!0),K!==U&&(K=U,Hi=!0,hi=!0)}if(jt.needsLights&&(jn.state.directionalShadowMap.length>0&&Be.setValue(k,"directionalShadowMap",jn.state.directionalShadowMap,Y),jn.state.spotShadowMap.length>0&&Be.setValue(k,"spotShadowMap",jn.state.spotShadowMap,Y),jn.state.pointShadowMap.length>0&&Be.setValue(k,"pointShadowMap",jn.state.pointShadowMap,Y)),et.isSkinnedMesh){Be.setOptional(k,et,"bindMatrix"),Be.setOptional(k,et,"bindMatrixInverse");const vn=et.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Be.setValue(k,"boneTexture",vn.boneTexture,Y))}et.isBatchedMesh&&(Be.setOptional(k,et,"batchingTexture"),Be.setValue(k,"batchingTexture",et._matricesTexture,Y),Be.setOptional(k,et,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",et._indirectTexture,Y),Be.setOptional(k,et,"batchingColorTexture"),et._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",et._colorsTexture,Y));const Kn=ut.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&Ht.update(et,ut,$n),(Hi||jt.receiveShadow!==et.receiveShadow)&&(jt.receiveShadow=et.receiveShadow,Be.setValue(k,"receiveShadow",et.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&q.environment!==null&&(gn.envMapIntensity.value=q.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=vB()),Hi&&(Be.setValue(k,"toneMappingExposure",P.toneMappingExposure),jt.needsLights&&es(gn,hi),Nt&&st.fog===!0&&ee.refreshFogUniforms(gn,Nt),ee.refreshMaterialUniforms(gn,st,_t,X,w.state.transmissionRenderTarget[U.id]),yd.upload(k,lc(jt),gn,Y)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(yd.upload(k,lc(jt),gn,Y),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Be.setValue(k,"center",et.center),Be.setValue(k,"modelViewMatrix",et.modelViewMatrix),Be.setValue(k,"normalMatrix",et.normalMatrix),Be.setValue(k,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const vn=st.uniformsGroups;for(let Gi=0,Na=vn.length;Gi<Na;Gi++){const Ws=vn[Gi];Gt.update(Ws,$n),Gt.bind(Ws,$n)}}return $n}function es(U,q){U.ambientLightColor.needsUpdate=q,U.lightProbe.needsUpdate=q,U.directionalLights.needsUpdate=q,U.directionalLightShadows.needsUpdate=q,U.pointLights.needsUpdate=q,U.pointLightShadows.needsUpdate=q,U.spotLights.needsUpdate=q,U.spotLightShadows.needsUpdate=q,U.rectAreaLights.needsUpdate=q,U.hemisphereLights.needsUpdate=q}function Sl(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(U,q,ut){const st=A.get(U);st.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),A.get(U.texture).__webglTexture=q,A.get(U.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ut,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,q){const ut=A.get(U);ut.__webglFramebuffer=q,ut.__useDefaultFramebuffer=q===void 0};const mr=k.createFramebuffer();this.setRenderTarget=function(U,q=0,ut=0){Q=U,H=q,Z=ut;let st=null,et=!1,Nt=!1;if(U){const Ot=A.get(U);if(Ot.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(k.FRAMEBUFFER,Ot.__webglFramebuffer),I.copy(U.viewport),z.copy(U.scissor),it=U.scissorTest,At.viewport(I),At.scissor(z),At.setScissorTest(it),J=-1;return}else if(Ot.__webglFramebuffer===void 0)Y.setupRenderTarget(U);else if(Ot.__hasExternalTextures)Y.rebindTextures(U,A.get(U.texture).__webglTexture,A.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const oe=U.depthTexture;if(Ot.__boundDepthTexture!==oe){if(oe!==null&&A.has(oe)&&(U.width!==oe.image.width||U.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(U)}}const Zt=U.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Nt=!0);const Jt=A.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Jt[q])?st=Jt[q][ut]:st=Jt[q],et=!0):U.samples>0&&Y.useMultisampledRTT(U)===!1?st=A.get(U).__webglMultisampledFramebuffer:Array.isArray(Jt)?st=Jt[ut]:st=Jt,I.copy(U.viewport),z.copy(U.scissor),it=U.scissorTest}else I.copy(nt).multiplyScalar(_t).floor(),z.copy(yt).multiplyScalar(_t).floor(),it=pt;if(ut!==0&&(st=mr),At.bindFramebuffer(k.FRAMEBUFFER,st)&&At.drawBuffers(U,st),At.viewport(I),At.scissor(z),At.setScissorTest(it),et){const Ot=A.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,ut)}else if(Nt){const Ot=q;for(let Zt=0;Zt<U.textures.length;Zt++){const Jt=A.get(U.textures[Zt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,ut,Ot)}}else if(U!==null&&ut!==0){const Ot=A.get(U.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ot.__webglTexture,ut)}J=-1},this.readRenderTargetPixels=function(U,q,ut,st,et,Nt,Xt,Ot=0){if(!(U&&U.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt){At.bindFramebuffer(k.FRAMEBUFFER,Zt);try{const Jt=U.textures[Ot],oe=Jt.format,fe=Jt.type;if(U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),!Ce.textureFormatReadable(oe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(fe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=U.width-st&&ut>=0&&ut<=U.height-et&&k.readPixels(q,ut,st,et,Lt.convert(oe),Lt.convert(fe),Nt)}finally{const Jt=Q!==null?A.get(Q).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(U,q,ut,st,et,Nt,Xt,Ot=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Xt!==void 0&&(Zt=Zt[Xt]),Zt)if(q>=0&&q<=U.width-st&&ut>=0&&ut<=U.height-et){At.bindFramebuffer(k.FRAMEBUFFER,Zt);const Jt=U.textures[Ot],oe=Jt.format,fe=Jt.type;if(U.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),!Ce.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,qt),k.bufferData(k.PIXEL_PACK_BUFFER,Nt.byteLength,k.STREAM_READ),k.readPixels(q,ut,st,et,Lt.convert(oe),Lt.convert(fe),0);const ge=Q!==null?A.get(Q).__webglFramebuffer:null;At.bindFramebuffer(k.FRAMEBUFFER,ge);const nn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await HN(k,nn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,qt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Nt),k.deleteBuffer(qt),k.deleteSync(nn),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,q=null,ut=0){const st=Math.pow(2,-ut),et=Math.floor(U.image.width*st),Nt=Math.floor(U.image.height*st),Xt=q!==null?q.x:0,Ot=q!==null?q.y:0;Y.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,Xt,Ot,et,Nt),At.unbindTexture()};const gr=k.createFramebuffer(),ns=k.createFramebuffer();this.copyTextureToTexture=function(U,q,ut=null,st=null,et=0,Nt=0){let Xt,Ot,Zt,Jt,oe,fe,qt,ge,nn;const an=U.isCompressedTexture?U.mipmaps[Nt]:U.image;if(ut!==null)Xt=ut.max.x-ut.min.x,Ot=ut.max.y-ut.min.y,Zt=ut.isBox3?ut.max.z-ut.min.z:1,Jt=ut.min.x,oe=ut.min.y,fe=ut.isBox3?ut.min.z:0;else{const gn=Math.pow(2,-et);Xt=Math.floor(an.width*gn),Ot=Math.floor(an.height*gn),U.isDataArrayTexture?Zt=an.depth:U.isData3DTexture?Zt=Math.floor(an.depth*gn):Zt=1,Jt=0,oe=0,fe=0}st!==null?(qt=st.x,ge=st.y,nn=st.z):(qt=0,ge=0,nn=0);const Le=Lt.convert(q.format),An=Lt.convert(q.type);let jt;q.isData3DTexture?(Y.setTexture3D(q,0),jt=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),jt=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),jt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const jn=k.getParameter(k.UNPACK_ROW_LENGTH),ce=k.getParameter(k.UNPACK_IMAGE_HEIGHT),$n=k.getParameter(k.UNPACK_SKIP_PIXELS),di=k.getParameter(k.UNPACK_SKIP_ROWS),Hi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,an.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,an.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);const hi=U.isDataArrayTexture||U.isData3DTexture,Be=q.isDataArrayTexture||q.isData3DTexture;if(U.isDepthTexture){const gn=A.get(U),Kn=A.get(q),vn=A.get(gn.__renderTarget),Gi=A.get(Kn.__renderTarget);At.bindFramebuffer(k.READ_FRAMEBUFFER,vn.__webglFramebuffer),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Na=0;Na<Zt;Na++)hi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(U).__webglTexture,et,fe+Na),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(q).__webglTexture,Nt,nn+Na)),k.blitFramebuffer(Jt,oe,Xt,Ot,qt,ge,Xt,Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(et!==0||U.isRenderTargetTexture||A.has(U)){const gn=A.get(U),Kn=A.get(q);At.bindFramebuffer(k.READ_FRAMEBUFFER,gr),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,ns);for(let vn=0;vn<Zt;vn++)hi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gn.__webglTexture,et,fe+vn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gn.__webglTexture,et),Be?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Kn.__webglTexture,Nt,nn+vn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Kn.__webglTexture,Nt),et!==0?k.blitFramebuffer(Jt,oe,Xt,Ot,qt,ge,Xt,Ot,k.COLOR_BUFFER_BIT,k.NEAREST):Be?k.copyTexSubImage3D(jt,Nt,qt,ge,nn+vn,Jt,oe,Xt,Ot):k.copyTexSubImage2D(jt,Nt,qt,ge,Jt,oe,Xt,Ot);At.bindFramebuffer(k.READ_FRAMEBUFFER,null),At.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Be?U.isDataTexture||U.isData3DTexture?k.texSubImage3D(jt,Nt,qt,ge,nn,Xt,Ot,Zt,Le,An,an.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(jt,Nt,qt,ge,nn,Xt,Ot,Zt,Le,an.data):k.texSubImage3D(jt,Nt,qt,ge,nn,Xt,Ot,Zt,Le,An,an):U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Nt,qt,ge,Xt,Ot,Le,An,an.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Nt,qt,ge,an.width,an.height,Le,an.data):k.texSubImage2D(k.TEXTURE_2D,Nt,qt,ge,Xt,Ot,Le,An,an);k.pixelStorei(k.UNPACK_ROW_LENGTH,jn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ce),k.pixelStorei(k.UNPACK_SKIP_PIXELS,$n),k.pixelStorei(k.UNPACK_SKIP_ROWS,di),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Hi),Nt===0&&q.generateMipmaps&&k.generateMipmap(jt),At.unbindTexture()},this.initRenderTarget=function(U){A.get(U).__webglFramebuffer===void 0&&Y.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?Y.setTextureCube(U,0):U.isData3DTexture?Y.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?Y.setTexture2DArray(U,0):Y.setTexture2D(U,0),At.unbindTexture()},this.resetState=function(){H=0,Z=0,Q=null,At.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}const Qr="react-horizontal-scrolling-menu",_B=`${Qr}--item`,yB=`${Qr}--scroll-container`,xB=`${Qr}--wrapper`,SB=`${Qr}--inner-wrapper`,bB=`${Qr}--header`,MB=`${Qr}--arrow-left`,EB=`${Qr}--arrow-right`,TB=`${Qr}--footer`,AB="itemId",DA="data-key",LA="data-index",ea={first:"first",last:"last",onInit:"onInit",onUpdate:"onUpdate"},Oi="",RB={current:null};let CB=class{constructor(){this.subscribe=(t,n)=>{this.observers.set(t,(this.observers.get(t)||[]).concat(n))},this.unsubscribe=(t,n)=>{const a=(this.observers.get(t)||[]).filter((s=>s!==n));a.length?this.observers.set(t,a):this.observers.delete(t)},this.emitUpdates=(t,n)=>{const a=this.observers.get(t)||[];a?.forEach((s=>s(n)))},this.updateBatch=(t,n=!0)=>{t.length&&(t.forEach((([a,s])=>this.emitUpdates(a,s))),n&&this.emitUpdates(ea.onUpdate))},this.update=(t,n)=>{this.emitUpdates(t,n),this.emitUpdates(ea.onUpdate)},this.observers=new Map}},wB=class extends Map{constructor(){super(),this.subscribe=(t,n)=>this.observer.subscribe(t,n),this.unsubscribe=(t,n)=>this.observer.unsubscribe(t,n),this.isEdgeItem=({key:t,value:n,first:a=this.first(),last:s=this.last()})=>{const l=[];return t===a?.key?l.push([ea.first,n]):t===s?.key&&l.push([ea.last,n]),l},this.edgeItemsCheck=t=>{const n=this.first(),a=this.last(),s=t.find((([f])=>f===n?.key)),l=[];s&&l.push([ea.first,s[1]]);const c=t.find((([f])=>f===a?.key));return c&&l.push([ea.last,c[1]]),l},this.toArr=()=>this.sort([...this]),this.toItems=()=>this.toArr().map((([t])=>t)),this.sort=t=>t.sort((([,n],[,a])=>+n.index-+a.index)),this.set=(t,n)=>{const a=String(t),s=[[a,n]];return super.set(a,n),s.push(...this.isEdgeItem({key:a,value:n,first:this.first(),last:this.last()})),this.observer.updateBatch(s),this},this.setBatch=t=>{this.firstRun&&this.observer.update(ea.onInit);const n=[...t];return this.sort(n).forEach((([a,s])=>{super.set(String(a),s)})),n.push(...this.edgeItemsCheck(n)),this.observer.updateBatch(n,!this.firstRun),this.firstRun=!1,this},this.first=()=>{var t;return(t=this.toArr()[0])===null||t===void 0?void 0:t[1]},this.last=()=>{var t,n;return(n=(t=this.toArr().slice(-1))===null||t===void 0?void 0:t[0])===null||n===void 0?void 0:n[1]},this.filter=t=>this.toArr().filter(t),this.find=t=>this.toArr().find(t),this.findIndex=t=>this.toArr().findIndex(t),this.getCurrentPos=t=>{const n=this.toArr(),a=n.findIndex((([s,l])=>s===t||l===t));return[n,a]},this.prev=t=>{var n;const[a,s]=this.getCurrentPos(t);return s!==-1?(n=a[s-1])===null||n===void 0?void 0:n[1]:void 0},this.next=t=>{var n;const[a,s]=this.getCurrentPos(t);return s!==-1?(n=a[s+1])===null||n===void 0?void 0:n[1]:void 0},this.getVisible=()=>this.filter((t=>t[1].visible)),this.observer=new CB,this.firstRun=!0}};const _M=e=>typeof e=="object"&&e!=null&&e.nodeType===1,yM=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",g0=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return yM(n.overflowY,t)||yM(n.overflowX,t)||(a=>{const s=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(a);return!!s&&(s.clientHeight<a.scrollHeight||s.clientWidth<a.scrollWidth)})(e)}return!1},Kf=(e,t,n,a,s,l,c,f)=>l<e&&c>t||l>e&&c<t?0:l<=e&&f<=n||c>=t&&f>=n?l-e-a:c>t&&f<n||l<e&&f>n?c-t+s:0,DB=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},xM=(e,t)=>{var n,a,s,l;if(typeof document>"u")return[];const{scrollMode:c,block:f,inline:d,boundary:h,skipOverflowHiddenElements:m}=t,v=typeof h=="function"?h:I=>I!==h;if(!_M(e))throw new TypeError("Invalid target");const _=document.scrollingElement||document.documentElement,x=[];let b=e;for(;_M(b)&&v(b);){if(b=DB(b),b===_){x.push(b);break}b!=null&&b===document.body&&g0(b)&&!g0(document.documentElement)||b!=null&&g0(b,m)&&x.push(b)}const M=(a=(n=window.visualViewport)==null?void 0:n.width)!=null?a:innerWidth,y=(l=(s=window.visualViewport)==null?void 0:s.height)!=null?l:innerHeight,{scrollX:S,scrollY:T}=window,{height:C,width:L,top:w,right:O,bottom:F,left:R}=e.getBoundingClientRect(),{top:P,right:tt,bottom:H,left:Z}=(I=>{const z=window.getComputedStyle(I);return{top:parseFloat(z.scrollMarginTop)||0,right:parseFloat(z.scrollMarginRight)||0,bottom:parseFloat(z.scrollMarginBottom)||0,left:parseFloat(z.scrollMarginLeft)||0}})(e);let Q=f==="start"||f==="nearest"?w-P:f==="end"?F+H:w+C/2-P+H,J=d==="center"?R+L/2-Z+tt:d==="end"?O+tt:R-Z;const K=[];for(let I=0;I<x.length;I++){const z=x[I],{height:it,width:ct,top:ht,right:B,bottom:X,left:_t}=z.getBoundingClientRect();if(c==="if-needed"&&w>=0&&R>=0&&F<=y&&O<=M&&w>=ht&&F<=X&&R>=_t&&O<=B)return K;const Rt=getComputedStyle(z),Ft=parseInt(Rt.borderLeftWidth,10),nt=parseInt(Rt.borderTopWidth,10),yt=parseInt(Rt.borderRightWidth,10),pt=parseInt(Rt.borderBottomWidth,10);let Ct=0,Dt=0;const kt="offsetWidth"in z?z.offsetWidth-z.clientWidth-Ft-yt:0,he="offsetHeight"in z?z.offsetHeight-z.clientHeight-nt-pt:0,te="offsetWidth"in z?z.offsetWidth===0?0:ct/z.offsetWidth:0,ie="offsetHeight"in z?z.offsetHeight===0?0:it/z.offsetHeight:0;if(_===z)Ct=f==="start"?Q:f==="end"?Q-y:f==="nearest"?Kf(T,T+y,y,nt,pt,T+Q,T+Q+C,C):Q-y/2,Dt=d==="start"?J:d==="center"?J-M/2:d==="end"?J-M:Kf(S,S+M,M,Ft,yt,S+J,S+J+L,L),Ct=Math.max(0,Ct+T),Dt=Math.max(0,Dt+S);else{Ct=f==="start"?Q-ht-nt:f==="end"?Q-X+pt+he:f==="nearest"?Kf(ht,X,it,nt,pt+he,Q,Q+C,C):Q-(ht+it/2)+he/2,Dt=d==="start"?J-_t-Ft:d==="center"?J-(_t+ct/2)+kt/2:d==="end"?J-B+yt+kt:Kf(_t,B,ct,Ft,yt+kt,J,J+L,L);const{scrollLeft:xe,scrollTop:se}=z;Ct=ie===0?0:Math.max(0,Math.min(se+Ct/ie,z.scrollHeight-it/ie+he)),Dt=te===0?0:Math.max(0,Math.min(xe+Dt/te,z.scrollWidth-ct/te+kt)),Q+=se-Ct,J+=xe-Dt}K.push({el:z,top:Ct,left:Dt})}return K};function SM(e,t){if(!e.isConnected||!(s=>{let l=s;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(e))return;const n=(s=>{const l=window.getComputedStyle(s);return{top:parseFloat(l.scrollMarginTop)||0,right:parseFloat(l.scrollMarginRight)||0,bottom:parseFloat(l.scrollMarginBottom)||0,left:parseFloat(l.scrollMarginLeft)||0}})(e);if((s=>typeof s=="object"&&typeof s.behavior=="function")(t))return t.behavior(xM(e,t));const a=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:s,top:l,left:c}of xM(e,(f=>f===!1?{block:"end",inline:"nearest"}:(d=>d===Object(d)&&Object.keys(d).length!==0)(f)?f:{block:"start",inline:"nearest"})(t))){const f=l-n.top+n.bottom,d=c-n.left+n.right;s.scroll({top:f,left:d,behavior:a})}}let v0;const UA=()=>(v0||(v0="performance"in window?performance.now.bind(performance):Date.now),v0());function PA(e){const t=UA(),n=Math.min((t-e.startTime)/e.duration,1),a=e.ease(n),s=e.startX+(e.x-e.startX)*a,l=e.startY+(e.y-e.startY)*a;e.method(s,l,n,a),s!==e.x||l!==e.y?requestAnimationFrame((()=>PA(e))):e.cb()}function LB(e,t,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:600,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:m=>1+--m*m*m*m*m,l=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;const f=e,d=e.scrollLeft,h=e.scrollTop;PA({scrollable:f,method:(m,v,_,x)=>{const b=Math.ceil(m),M=Math.ceil(v);e.scrollLeft=b,e.scrollTop=M,c?.({target:e,elapsed:_,value:x,left:b,top:M})},startTime:UA(),startX:d,startY:h,x:t,y:n,duration:a,ease:s,cb:l})}const UB=function(e,t){const n=t||{};return(a=>a&&!a.behavior||a.behavior==="smooth")(n)?SM(e,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,skipOverflowHiddenElements:n.skipOverflowHiddenElements,behavior:a=>Promise.all(a.reduce(((s,l)=>{let{el:c,left:f,top:d}=l;const h=c.scrollLeft,m=c.scrollTop;return h===f&&m===d?s:[...s,new Promise((v=>LB(c,f,d,n.duration,n.ease,(()=>v({el:c,left:[h,f],top:[m,d]})),n.onScrollChange)))]}),[]))}):Promise.resolve(SM(e,t))},PB=e=>Object.values(e).map((t=>t.current)).filter(Boolean);function _0(e,t,n,a,s,l){var c;const f=((c=e?.entry)===null||c===void 0?void 0:c.target)||e;if(!f)return;const d={behavior:t||"smooth",inline:n||"end",block:a||"nearest"};return l?f.scrollIntoView(d):UB(f,Object.assign(Object.assign({},s),d))}const NB=e=>document.querySelector(`[${DA}='${e}']`),OB=e=>document.querySelector(`[${LA}='${e}']`);function Zf(e){return zt.isValidElement(e)&&e||typeof e=="function"&&zt.createElement(e,null)||!!e&&typeof e=="object"&&zt.createElement(e,null)||null}const NA=e=>{var t;return String(((t=e?.props)===null||t===void 0?void 0:t[AB])||(e?.key||Oi).replace(/^\.\$/,Oi))};function kg(e){return!!e&&Object.prototype.hasOwnProperty.call(e,"current")}var FB=zt.memo((function({children:e,className:t,id:n,index:a,refs:s}){const l=zt.useRef(null);return s[String(a)]=l,zt.createElement("div",{className:t,[DA]:n,[LA]:a,ref:l},e)}));function IB({children:e,itemClassName:t=Oi,refs:n}){const a=zt.Children.toArray(e).filter(Boolean),s=zt.useMemo((()=>`${_B} ${t}`),[t]);return a.map(((l,c)=>{const f=NA(l);return zt.createElement(FB,{className:s,id:f,key:f,refs:n,index:c},l)}))}function BB({className:e=Oi,children:t,onScroll:n=(()=>{}),scrollRef:a,containerRef:s}){const l=zt.useMemo((()=>`${yB} ${e}`),[e]),c=zt.useCallback((f=>{kg(a)?a.current=f:a(f),kg(s)?s.current=f:s(f)}),[a,s]);return zt.createElement("div",{className:l,onScroll:n,ref:c},t)}const zB=zt.createContext({}),OA=typeof window<"u"?zt.useLayoutEffect:zt.useEffect;function VB({items:e,itemsChanged:t,refs:n,options:a}){const s=zt.useRef(),l=zt.useCallback((c=>{e.setBatch((function(f,d){return[...f].map((h=>{var m,v,_,x;const b=h.target,M=String((v=(m=b?.dataset)===null||m===void 0?void 0:m.key)!==null&&v!==void 0?v:Oi);return[M,{index:String((x=(_=b?.dataset)===null||_===void 0?void 0:_.index)!==null&&x!==void 0?x:Oi),key:M,entry:h,visible:h.intersectionRatio>=d.ratio}]}))})(c,a))}),[e,a]);OA((()=>{const c=PB(n),f=s.current||new IntersectionObserver(l,a);return s.current=f,c.forEach((d=>f.observe(d))),()=>{f.disconnect(),s.current=void 0}}),[l,t,a,n])}const HB=e=>zt.Children.toArray(e).map(NA).filter(Boolean),bM={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95]},GB={current:{}},Qf=()=>{};function m8({LeftArrow:e,RightArrow:t,children:n,Header:a,Footer:s,transitionDuration:l=500,transitionBehavior:c,onInit:f=Qf,onUpdate:d=Qf,onMouseDown:h,onMouseLeave:m,onMouseUp:v,onMouseMove:_,onScroll:x=Qf,onTouchMove:b,onTouchStart:M,onTouchEnd:y,onWheel:S=Qf,options:T=bM,scrollContainerClassName:C=Oi,containerRef:L=RB,itemClassName:w=Oi,wrapperClassName:O=Oi,apiRef:F=GB,RTL:R,noPolyfill:P=!0}){const tt=Zf(e),H=Zf(t),Z=Zf(a),Q=Zf(s),J=zt.useRef(null),[K]=zt.useState({}),I=zt.useMemo((()=>Object.assign(Object.assign(Object.assign({},bM),T),{root:J.current})),[T]),z=zt.useRef(new wB).current,it=(function(pt,Ct){const[Dt,kt]=zt.useState(Oi),he=zt.useMemo((()=>HB(pt)),[pt]);return zt.useEffect((()=>{const te=he.filter(Boolean).join(Oi);Ct.toItems().filter((ie=>!he.includes(ie))).forEach((ie=>{Ct.delete(ie)})),kt(te)}),[he,Ct]),Dt})(n,z),ct=((pt,Ct)=>{const Dt=zt.useRef(!0),kt=zt.useMemo((()=>[Ct-.05,Ct-.01,Ct,Ct+.01,Ct+.05]),[Ct]),he=zt.useCallback((te=>{var ie;Dt.current=((ie=te?.[0])===null||ie===void 0?void 0:ie.intersectionRatio)>=Ct}),[Ct]);return OA((()=>{const te=new IntersectionObserver(he,{threshold:kt,rootMargin:"0px"});return pt.current&&te.observe(pt.current),()=>te.disconnect()}),[Dt,pt,he,kt]),Dt})(J,I.ratio+.05<1?I.ratio+.05:.95);VB(zt.useMemo((()=>({items:z,itemsChanged:it,options:I,refs:K})),[z,it,K,I]));const ht=zt.useMemo((()=>(function(pt,Ct,Dt,kt){var he,te,ie;const xe=(At,N=!1)=>{const[A,Y]=zt.useState(N),dt=zt.useCallback((xt=>{Y(!!xt?.visible)}),[]);return zt.useEffect((()=>(pt.subscribe(At,dt),()=>{pt.unsubscribe(At,dt)})),[At,dt]),A},se=!!(!((he=pt.first())===null||he===void 0)&&he.visible),Je=!!(!((te=pt.last())===null||te===void 0)&&te.visible),k=At=>{var N;return(N=pt.find((A=>A[1].key===String(At))))===null||N===void 0?void 0:N[1]},Ze=()=>{var At,N;const A=(N=(At=pt.getVisible())===null||At===void 0?void 0:At[0])===null||N===void 0?void 0:N[1];return A?pt.prev(A):void 0},Se=()=>{var At;const N=(At=pt.getVisible().findLast((()=>!0)))===null||At===void 0?void 0:At[1];return N?pt.next(N):void 0},Ce=(ie=Dt?.boundary)===null||ie===void 0?void 0:ie.current;return{getItemById:k,getItemElementById:NB,getItemByIndex:At=>{var N;return(N=pt.find((A=>String(A[1].index)===String(At))))===null||N===void 0?void 0:N[1]},getItemElementByIndex:OB,getNextElement:Se,getPrevElement:Ze,isFirstItemVisible:se,isItemVisible:At=>pt.getVisible().map((N=>N[0])).includes(String(At)),isLastItem:At=>pt.last()===k(At),isLastItemVisible:Je,scrollNext:(At,N,A,{duration:Y,boundary:dt=Ce}={})=>{const xt=At??Dt?.behavior;return _0(Se(),xt,N||"start",A||"nearest",{boundary:dt,duration:Y??Dt?.duration},kt)},scrollPrev:(At,N,A,{duration:Y,boundary:dt=Ce}={})=>{const xt=At??Dt?.behavior;return _0(Ze(),xt,N||"end",A||"nearest",{boundary:dt,duration:Y??Dt?.duration},kt)},useIsVisible:xe,useLeftArrowVisible:()=>{const At=xe("first",!0),[N,A]=zt.useState(At);return zt.useEffect((()=>{Ct.current&&A(At)}),[At]),N},useRightArrowVisible:()=>{const At=xe("last",!1),[N,A]=zt.useState(At);return zt.useEffect((()=>{Ct.current&&A(At)}),[At]),N},scrollToItem:(At,N,A,Y,dt)=>{var xt;return _0(At,N??Dt?.behavior,A,Y,Object.assign(Object.assign({boundary:Ce},dt),{duration:(xt=dt?.duration)!==null&&xt!==void 0?xt:Dt?.duration}),kt)}}})(z,ct,{duration:l,behavior:c,boundary:J},P)),[z,l,c,P,ct]),B=zt.useCallback((()=>Object.assign(Object.assign({},ht),{items:z,scrollContainer:J,menuVisible:ct})),[ht,z,J,ct]),[X,_t]=zt.useState((()=>B()));(({context:pt,onInit:Ct,onUpdate:Dt})=>{const kt=zt.useCallback((()=>Ct(pt)),[Ct,pt]),he=zt.useCallback((()=>Dt(pt)),[Dt,pt]),{items:te}=pt;zt.useEffect((()=>(te.subscribe(ea.onInit,kt),te.subscribe(ea.onUpdate,he),()=>{te.unsubscribe(ea.onInit,kt),te.unsubscribe(ea.onUpdate,he)})),[te,kt,he])})({context:X,onInit:f,onUpdate:d}),zt.useEffect((()=>_t(B())),[B]),zt.useEffect((()=>{kg(F)?F.current=X:F(X)}),[X,F]);const Rt=zt.useCallback((pt=>x(X,pt)),[x,X]),Ft=zt.useCallback((pt=>S(X,pt)),[S,X]),nt=zt.useMemo((()=>`${xB} ${O}`),[O]),yt=zt.useMemo((()=>`${C}${R?" rtl":Oi}`),[R,C]);return zt.createElement("div",{className:nt,onWheel:Ft,onMouseDown:h?.(X),onMouseLeave:m?.(X),onMouseUp:v?.(X),onMouseMove:_?.(X),onTouchStart:M?.(X),onTouchMove:b?.(X),onTouchEnd:y?.(X)},zt.createElement(zB.Provider,{value:X},zt.createElement("div",{className:bB},Z),zt.createElement("div",{className:SB},zt.createElement("div",{className:MB},tt),zt.createElement(BB,{className:yt,onScroll:Rt,scrollRef:J,containerRef:L},zt.createElement(IB,{refs:K,itemClassName:w},n)),zt.createElement("div",{className:EB},H)),zt.createElement("div",{className:TB},Q)))}function kB(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function XB(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var WB=(function(){function e(n){var a=this;this._insertTag=function(s){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(s,l),a.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(a){a.forEach(this._insertTag)},t.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(XB(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=kB(s);try{l.insertRule(a,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(a));this.ctr++},t.flush=function(){this.tags.forEach(function(a){var s;return(s=a.parentNode)==null?void 0:s.removeChild(a)}),this.tags=[],this.ctr=0},e})(),Xn="-ms-",zd="-moz-",Fe="-webkit-",FA="comm",Kv="rule",Zv="decl",qB="@import",IA="@keyframes",YB="@layer",jB=Math.abs,nh=String.fromCharCode,$B=Object.assign;function KB(e,t){return zn(e,0)^45?(((t<<2^zn(e,0))<<2^zn(e,1))<<2^zn(e,2))<<2^zn(e,3):0}function BA(e){return e.trim()}function ZB(e,t){return(e=t.exec(e))?e[0]:e}function Ie(e,t,n){return e.replace(t,n)}function Xg(e,t){return e.indexOf(t)}function zn(e,t){return e.charCodeAt(t)|0}function Gu(e,t,n){return e.slice(t,n)}function ga(e){return e.length}function Qv(e){return e.length}function Jf(e,t){return t.push(e),e}function QB(e,t){return e.map(t).join("")}var ih=1,al=1,zA=0,fi=0,En=0,gl="";function ah(e,t,n,a,s,l,c){return{value:e,root:t,parent:n,type:a,props:s,children:l,line:ih,column:al,length:c,return:""}}function Su(e,t){return $B(ah("",null,null,"",null,null,0),e,{length:-e.length},t)}function JB(){return En}function t6(){return En=fi>0?zn(gl,--fi):0,al--,En===10&&(al=1,ih--),En}function Mi(){return En=fi<zA?zn(gl,fi++):0,al++,En===10&&(al=1,ih++),En}function Aa(){return zn(gl,fi)}function xd(){return fi}function ic(e,t){return Gu(gl,e,t)}function ku(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function VA(e){return ih=al=1,zA=ga(gl=e),fi=0,[]}function HA(e){return gl="",e}function Sd(e){return BA(ic(fi-1,Wg(e===91?e+2:e===40?e+1:e)))}function e6(e){for(;(En=Aa())&&En<33;)Mi();return ku(e)>2||ku(En)>3?"":" "}function n6(e,t){for(;--t&&Mi()&&!(En<48||En>102||En>57&&En<65||En>70&&En<97););return ic(e,xd()+(t<6&&Aa()==32&&Mi()==32))}function Wg(e){for(;Mi();)switch(En){case e:return fi;case 34:case 39:e!==34&&e!==39&&Wg(En);break;case 40:e===41&&Wg(e);break;case 92:Mi();break}return fi}function i6(e,t){for(;Mi()&&e+En!==57;)if(e+En===84&&Aa()===47)break;return"/*"+ic(t,fi-1)+"*"+nh(e===47?e:Mi())}function a6(e){for(;!ku(Aa());)Mi();return ic(e,fi)}function r6(e){return HA(bd("",null,null,null,[""],e=VA(e),0,[0],e))}function bd(e,t,n,a,s,l,c,f,d){for(var h=0,m=0,v=c,_=0,x=0,b=0,M=1,y=1,S=1,T=0,C="",L=s,w=l,O=a,F=C;y;)switch(b=T,T=Mi()){case 40:if(b!=108&&zn(F,v-1)==58){Xg(F+=Ie(Sd(T),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:F+=Sd(T);break;case 9:case 10:case 13:case 32:F+=e6(b);break;case 92:F+=n6(xd()-1,7);continue;case 47:switch(Aa()){case 42:case 47:Jf(s6(i6(Mi(),xd()),t,n),d);break;default:F+="/"}break;case 123*M:f[h++]=ga(F)*S;case 125*M:case 59:case 0:switch(T){case 0:case 125:y=0;case 59+m:S==-1&&(F=Ie(F,/\f/g,"")),x>0&&ga(F)-v&&Jf(x>32?EM(F+";",a,n,v-1):EM(Ie(F," ","")+";",a,n,v-2),d);break;case 59:F+=";";default:if(Jf(O=MM(F,t,n,h,m,s,f,C,L=[],w=[],v),l),T===123)if(m===0)bd(F,t,O,O,L,l,v,f,w);else switch(_===99&&zn(F,3)===110?100:_){case 100:case 108:case 109:case 115:bd(e,O,O,a&&Jf(MM(e,O,O,0,0,s,f,C,s,L=[],v),w),s,w,v,f,a?L:w);break;default:bd(F,O,O,O,[""],w,0,f,w)}}h=m=x=0,M=S=1,C=F="",v=c;break;case 58:v=1+ga(F),x=b;default:if(M<1){if(T==123)--M;else if(T==125&&M++==0&&t6()==125)continue}switch(F+=nh(T),T*M){case 38:S=m>0?1:(F+="\f",-1);break;case 44:f[h++]=(ga(F)-1)*S,S=1;break;case 64:Aa()===45&&(F+=Sd(Mi())),_=Aa(),m=v=ga(C=F+=a6(xd())),T++;break;case 45:b===45&&ga(F)==2&&(M=0)}}return l}function MM(e,t,n,a,s,l,c,f,d,h,m){for(var v=s-1,_=s===0?l:[""],x=Qv(_),b=0,M=0,y=0;b<a;++b)for(var S=0,T=Gu(e,v+1,v=jB(M=c[b])),C=e;S<x;++S)(C=BA(M>0?_[S]+" "+T:Ie(T,/&\f/g,_[S])))&&(d[y++]=C);return ah(e,t,n,s===0?Kv:f,d,h,m)}function s6(e,t,n){return ah(e,t,n,FA,nh(JB()),Gu(e,2,-2),0)}function EM(e,t,n,a){return ah(e,t,n,Zv,Gu(e,0,a),Gu(e,a+1,-1),a)}function Ko(e,t){for(var n="",a=Qv(e),s=0;s<a;s++)n+=t(e[s],s,e,t)||"";return n}function o6(e,t,n,a){switch(e.type){case YB:if(e.children.length)break;case qB:case Zv:return e.return=e.return||e.value;case FA:return"";case IA:return e.return=e.value+"{"+Ko(e.children,a)+"}";case Kv:e.value=e.props.join(",")}return ga(n=Ko(e.children,a))?e.return=e.value+"{"+n+"}":""}function l6(e){var t=Qv(e);return function(n,a,s,l){for(var c="",f=0;f<t;f++)c+=e[f](n,a,s,l)||"";return c}}function u6(e){return function(t){t.root||(t=t.return)&&e(t)}}function c6(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var f6=function(t,n,a){for(var s=0,l=0;s=l,l=Aa(),s===38&&l===12&&(n[a]=1),!ku(l);)Mi();return ic(t,fi)},d6=function(t,n){var a=-1,s=44;do switch(ku(s)){case 0:s===38&&Aa()===12&&(n[a]=1),t[a]+=f6(fi-1,n,a);break;case 2:t[a]+=Sd(s);break;case 4:if(s===44){t[++a]=Aa()===58?"&\f":"",n[a]=t[a].length;break}default:t[a]+=nh(s)}while(s=Mi());return t},h6=function(t,n){return HA(d6(VA(t),n))},TM=new WeakMap,p6=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,a=t.parent,s=t.column===a.column&&t.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!TM.get(a))&&!s){TM.set(t,!0);for(var l=[],c=h6(n,l),f=a.props,d=0,h=0;d<c.length;d++)for(var m=0;m<f.length;m++,h++)t.props[h]=l[d]?c[d].replace(/&\f/g,f[m]):f[m]+" "+c[d]}}},m6=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function GA(e,t){switch(KB(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+zd+e+Xn+e+e;case 6828:case 4268:return Fe+e+Xn+e+e;case 6165:return Fe+e+Xn+"flex-"+e+e;case 5187:return Fe+e+Ie(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Xn+"flex-$1$2")+e;case 5443:return Fe+e+Xn+"flex-item-"+Ie(e,/flex-|-self/,"")+e;case 4675:return Fe+e+Xn+"flex-line-pack"+Ie(e,/align-content|flex-|-self/,"")+e;case 5548:return Fe+e+Xn+Ie(e,"shrink","negative")+e;case 5292:return Fe+e+Xn+Ie(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ie(e,"-grow","")+Fe+e+Xn+Ie(e,"grow","positive")+e;case 4554:return Fe+Ie(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Xn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ga(e)-1-t>6)switch(zn(e,t+1)){case 109:if(zn(e,t+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+zd+(zn(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xg(e,"stretch")?GA(Ie(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(zn(e,t+1)!==115)break;case 6444:switch(zn(e,ga(e)-3-(~Xg(e,"!important")&&10))){case 107:return Ie(e,":",":"+Fe)+e;case 101:return Ie(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Fe+(zn(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Xn+"$2box$3")+e}break;case 5936:switch(zn(e,t+11)){case 114:return Fe+e+Xn+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Xn+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Xn+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Fe+e+Xn+e+e}return e}var g6=function(t,n,a,s){if(t.length>-1&&!t.return)switch(t.type){case Zv:t.return=GA(t.value,t.length);break;case IA:return Ko([Su(t,{value:Ie(t.value,"@","@"+Fe)})],s);case Kv:if(t.length)return QB(t.props,function(l){switch(ZB(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Ko([Su(t,{props:[Ie(l,/:(read-\w+)/,":"+zd+"$1")]})],s);case"::placeholder":return Ko([Su(t,{props:[Ie(l,/:(plac\w+)/,":"+Fe+"input-$1")]}),Su(t,{props:[Ie(l,/:(plac\w+)/,":"+zd+"$1")]}),Su(t,{props:[Ie(l,/:(plac\w+)/,Xn+"input-$1")]})],s)}return""})}},v6=[g6],_6=function(t){var n=t.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(M){var y=M.getAttribute("data-emotion");y.indexOf(" ")!==-1&&(document.head.appendChild(M),M.setAttribute("data-s",""))})}var s=t.stylisPlugins||v6,l={},c,f=[];c=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(M){for(var y=M.getAttribute("data-emotion").split(" "),S=1;S<y.length;S++)l[y[S]]=!0;f.push(M)});var d,h=[p6,m6];{var m,v=[o6,u6(function(M){m.insert(M)})],_=l6(h.concat(s,v)),x=function(y){return Ko(r6(y),_)};d=function(y,S,T,C){m=T,x(y?y+"{"+S.styles+"}":S.styles),C&&(b.inserted[S.name]=!0)}}var b={key:n,sheet:new WB({key:n,container:c,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:d};return b.sheet.hydrate(f),b},y0={exports:{}},ze={};var AM;function y6(){if(AM)return ze;AM=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,s=e?Symbol.for("react.strict_mode"):60108,l=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,h=e?Symbol.for("react.concurrent_mode"):60111,m=e?Symbol.for("react.forward_ref"):60112,v=e?Symbol.for("react.suspense"):60113,_=e?Symbol.for("react.suspense_list"):60120,x=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,M=e?Symbol.for("react.block"):60121,y=e?Symbol.for("react.fundamental"):60117,S=e?Symbol.for("react.responder"):60118,T=e?Symbol.for("react.scope"):60119;function C(w){if(typeof w=="object"&&w!==null){var O=w.$$typeof;switch(O){case t:switch(w=w.type,w){case d:case h:case a:case l:case s:case v:return w;default:switch(w=w&&w.$$typeof,w){case f:case m:case b:case x:case c:return w;default:return O}}case n:return O}}}function L(w){return C(w)===h}return ze.AsyncMode=d,ze.ConcurrentMode=h,ze.ContextConsumer=f,ze.ContextProvider=c,ze.Element=t,ze.ForwardRef=m,ze.Fragment=a,ze.Lazy=b,ze.Memo=x,ze.Portal=n,ze.Profiler=l,ze.StrictMode=s,ze.Suspense=v,ze.isAsyncMode=function(w){return L(w)||C(w)===d},ze.isConcurrentMode=L,ze.isContextConsumer=function(w){return C(w)===f},ze.isContextProvider=function(w){return C(w)===c},ze.isElement=function(w){return typeof w=="object"&&w!==null&&w.$$typeof===t},ze.isForwardRef=function(w){return C(w)===m},ze.isFragment=function(w){return C(w)===a},ze.isLazy=function(w){return C(w)===b},ze.isMemo=function(w){return C(w)===x},ze.isPortal=function(w){return C(w)===n},ze.isProfiler=function(w){return C(w)===l},ze.isStrictMode=function(w){return C(w)===s},ze.isSuspense=function(w){return C(w)===v},ze.isValidElementType=function(w){return typeof w=="string"||typeof w=="function"||w===a||w===h||w===l||w===s||w===v||w===_||typeof w=="object"&&w!==null&&(w.$$typeof===b||w.$$typeof===x||w.$$typeof===c||w.$$typeof===f||w.$$typeof===m||w.$$typeof===y||w.$$typeof===S||w.$$typeof===T||w.$$typeof===M)},ze.typeOf=C,ze}var RM;function x6(){return RM||(RM=1,y0.exports=y6()),y0.exports}var x0,CM;function S6(){if(CM)return x0;CM=1;var e=x6(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[e.ForwardRef]=a,l[e.Memo]=s;function c(b){return e.isMemo(b)?s:l[b.$$typeof]||t}var f=Object.defineProperty,d=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,_=Object.prototype;function x(b,M,y){if(typeof M!="string"){if(_){var S=v(M);S&&S!==_&&x(b,S,y)}var T=d(M);h&&(T=T.concat(h(M)));for(var C=c(b),L=c(M),w=0;w<T.length;++w){var O=T[w];if(!n[O]&&!(y&&y[O])&&!(L&&L[O])&&!(C&&C[O])){var F=m(M,O);try{f(b,O,F)}catch{}}}}return b}return x0=x,x0}S6();var b6=!0;function kA(e,t,n){var a="";return n.split(" ").forEach(function(s){e[s]!==void 0?t.push(e[s]+";"):s&&(a+=s+" ")}),a}var Jv=function(t,n,a){var s=t.key+"-"+n.name;(a===!1||b6===!1)&&t.registered[s]===void 0&&(t.registered[s]=n.styles)},XA=function(t,n,a){Jv(t,n,a);var s=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+s:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function M6(e){for(var t=0,n,a=0,s=e.length;s>=4;++a,s-=4)n=e.charCodeAt(a)&255|(e.charCodeAt(++a)&255)<<8|(e.charCodeAt(++a)&255)<<16|(e.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(s){case 3:t^=(e.charCodeAt(a+2)&255)<<16;case 2:t^=(e.charCodeAt(a+1)&255)<<8;case 1:t^=e.charCodeAt(a)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var E6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T6=/[A-Z]|^ms/g,A6=/_EMO_([^_]+?)_([^]*?)_EMO_/g,WA=function(t){return t.charCodeAt(1)===45},wM=function(t){return t!=null&&typeof t!="boolean"},S0=c6(function(e){return WA(e)?e:e.replace(T6,"-$&").toLowerCase()}),DM=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(A6,function(a,s,l){return va={name:s,styles:l,next:va},s})}return E6[t]!==1&&!WA(t)&&typeof n=="number"&&n!==0?n+"px":n};function Xu(e,t,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return va={name:s.name,styles:s.styles,next:va},s.name;var l=n;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)va={name:c.name,styles:c.styles,next:va},c=c.next;var f=l.styles+";";return f}return R6(e,t,n)}case"function":{if(e!==void 0){var d=va,h=n(e);return va=d,Xu(e,t,h)}break}}var m=n;if(t==null)return m;var v=t[m];return v!==void 0?v:m}function R6(e,t,n){var a="";if(Array.isArray(n))for(var s=0;s<n.length;s++)a+=Xu(e,t,n[s])+";";else for(var l in n){var c=n[l];if(typeof c!="object"){var f=c;t!=null&&t[f]!==void 0?a+=l+"{"+t[f]+"}":wM(f)&&(a+=S0(l)+":"+DM(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(t==null||t[c[0]]===void 0))for(var d=0;d<c.length;d++)wM(c[d])&&(a+=S0(l)+":"+DM(l,c[d])+";");else{var h=Xu(e,t,c);switch(l){case"animation":case"animationName":{a+=S0(l)+":"+h+";";break}default:a+=l+"{"+h+"}"}}}return a}var LM=/label:\s*([^\s;{]+)\s*(;|$)/g,va;function t_(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";va=void 0;var l=e[0];if(l==null||l.raw===void 0)a=!1,s+=Xu(n,t,l);else{var c=l;s+=c[0]}for(var f=1;f<e.length;f++)if(s+=Xu(n,t,e[f]),a){var d=l;s+=d[f]}LM.lastIndex=0;for(var h="",m;(m=LM.exec(s))!==null;)h+="-"+m[1];var v=M6(s)+h;return{name:v,styles:s,next:va}}var C6=function(t){return t()},w6=XS.useInsertionEffect?XS.useInsertionEffect:!1,qA=w6||C6,YA=V.createContext(typeof HTMLElement<"u"?_6({key:"css"}):null);YA.Provider;var jA=function(t){return V.forwardRef(function(n,a){var s=V.useContext(YA);return t(n,s,a)})},$A=V.createContext({}),rh={}.hasOwnProperty,qg="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",KA=function(t,n){var a={};for(var s in n)rh.call(n,s)&&(a[s]=n[s]);return a[qg]=t,a},D6=function(t){var n=t.cache,a=t.serialized,s=t.isStringTag;return Jv(n,a,s),qA(function(){return XA(n,a,s)}),null},L6=jA(function(e,t,n){var a=e.css;typeof a=="string"&&t.registered[a]!==void 0&&(a=t.registered[a]);var s=e[qg],l=[a],c="";typeof e.className=="string"?c=kA(t.registered,l,e.className):e.className!=null&&(c=e.className+" ");var f=t_(l,void 0,V.useContext($A));c+=t.key+"-"+f.name;var d={};for(var h in e)rh.call(e,h)&&h!=="css"&&h!==qg&&(d[h]=e[h]);return d.className=c,n&&(d.ref=n),V.createElement(V.Fragment,null,V.createElement(D6,{cache:t,serialized:f,isStringTag:typeof s=="string"}),V.createElement(s,d))}),ZA=L6,U6=Qo.Fragment,Pn=function(t,n,a){return rh.call(n,"css")?Qo.jsx(ZA,KA(t,n),a):Qo.jsx(t,n,a)},UM=function(t,n){var a=arguments;if(n==null||!rh.call(n,"css"))return V.createElement.apply(void 0,a);var s=a.length,l=new Array(s);l[0]=ZA,l[1]=KA(t,n);for(var c=2;c<s;c++)l[c]=a[c];return V.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(UM||(UM={}));function QA(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t_(t)}function Ut(){var e=QA.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var P6=function e(t){for(var n=t.length,a=0,s="";a<n;a++){var l=t[a];if(l!=null){var c=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))c=e(l);else{c="";for(var f in l)l[f]&&f&&(c&&(c+=" "),c+=f)}break}default:c=l}c&&(s&&(s+=" "),s+=c)}}return s};function N6(e,t,n){var a=[],s=kA(e,a,n);return a.length<2?n:s+t(a)}var O6=function(t){var n=t.cache,a=t.serializedArr;return qA(function(){for(var s=0;s<a.length;s++)XA(n,a[s],!1)}),null},b0=jA(function(e,t){var n=[],a=function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];var v=t_(h,t.registered);return n.push(v),Jv(t,v,!1),t.key+"-"+v.name},s=function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];return N6(t.registered,a,P6(h))},l={css:a,cx:s,theme:V.useContext($A)},c=e.children(l);return V.createElement(V.Fragment,null,V.createElement(O6,{cache:t,serializedArr:n}),c)}),F6=Object.defineProperty,I6=(e,t,n)=>t in e?F6(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,td=(e,t,n)=>I6(e,typeof t!="symbol"?t+"":t,n),Yg=new Map,ed=new WeakMap,PM=0,B6=void 0;function z6(e){return e?(ed.has(e)||(PM+=1,ed.set(e,PM.toString())),ed.get(e)):"0"}function V6(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?z6(e.root):e[t]}`).toString()}function H6(e){const t=V6(e);let n=Yg.get(t);if(!n){const a=new Map;let s;const l=new IntersectionObserver(c=>{c.forEach(f=>{var d;const h=f.isIntersecting&&s.some(m=>f.intersectionRatio>=m);e.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=h),(d=a.get(f.target))==null||d.forEach(m=>{m(h,f)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:a},Yg.set(t,n)}return n}function JA(e,t,n={},a=B6){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const d=e.getBoundingClientRect();return t(a,{isIntersecting:a,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:s,observer:l,elements:c}=H6(n),f=c.get(e)||[];return c.has(e)||c.set(e,f),f.push(t),l.observe(e),function(){f.splice(f.indexOf(t),1),f.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),Yg.delete(s))}}function G6(e){return typeof e.children!="function"}var NM=class extends V.Component{constructor(e){super(e),td(this,"node",null),td(this,"_unobserveCb",null),td(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),td(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),G6(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:a,delay:s,fallbackInView:l}=this.props;this._unobserveCb=JA(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:a,delay:s},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:b}=this.state;return e({inView:x,entry:b,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:a,root:s,rootMargin:l,onChange:c,skip:f,trackVisibility:d,delay:h,initialInView:m,fallbackInView:v,..._}=this.props;return V.createElement(t||"div",{ref:this.handleNode,..._},e)}};function t3({threshold:e,delay:t,trackVisibility:n,rootMargin:a,root:s,triggerOnce:l,skip:c,initialInView:f,fallbackInView:d,onChange:h}={}){var m;const[v,_]=V.useState(null),x=V.useRef(h),[b,M]=V.useState({inView:!!f,entry:void 0});x.current=h,V.useEffect(()=>{if(c||!v)return;let C;return C=JA(v,(L,w)=>{M({inView:L,entry:w}),x.current&&x.current(L,w),w.isIntersecting&&l&&C&&(C(),C=void 0)},{root:s,rootMargin:a,threshold:e,trackVisibility:n,delay:t},d),()=>{C&&C()}},[Array.isArray(e)?e.toString():e,v,s,a,l,c,n,d,t]);const y=(m=b.entry)==null?void 0:m.target,S=V.useRef(void 0);!v&&y&&!l&&!c&&S.current!==y&&(S.current=y,M({inView:!!f,entry:void 0}));const T=[_,b.inView,b.entry];return T.ref=T[0],T.inView=T[1],T.entry=T[2],T}var M0={exports:{}},Ve={};var OM;function k6(){if(OM)return Ve;OM=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function M(y){if(typeof y=="object"&&y!==null){var S=y.$$typeof;switch(S){case e:switch(y=y.type,y){case n:case s:case a:case h:case m:return y;default:switch(y=y&&y.$$typeof,y){case f:case c:case d:case _:case v:case l:return y;default:return S}}case t:return S}}}return Ve.ContextConsumer=c,Ve.ContextProvider=l,Ve.Element=e,Ve.ForwardRef=d,Ve.Fragment=n,Ve.Lazy=_,Ve.Memo=v,Ve.Portal=t,Ve.Profiler=s,Ve.StrictMode=a,Ve.Suspense=h,Ve.SuspenseList=m,Ve.isAsyncMode=function(){return!1},Ve.isConcurrentMode=function(){return!1},Ve.isContextConsumer=function(y){return M(y)===c},Ve.isContextProvider=function(y){return M(y)===l},Ve.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===e},Ve.isForwardRef=function(y){return M(y)===d},Ve.isFragment=function(y){return M(y)===n},Ve.isLazy=function(y){return M(y)===_},Ve.isMemo=function(y){return M(y)===v},Ve.isPortal=function(y){return M(y)===t},Ve.isProfiler=function(y){return M(y)===s},Ve.isStrictMode=function(y){return M(y)===a},Ve.isSuspense=function(y){return M(y)===h},Ve.isSuspenseList=function(y){return M(y)===m},Ve.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===n||y===s||y===a||y===h||y===m||y===x||typeof y=="object"&&y!==null&&(y.$$typeof===_||y.$$typeof===v||y.$$typeof===l||y.$$typeof===c||y.$$typeof===d||y.$$typeof===b||y.getModuleId!==void 0)},Ve.typeOf=M,Ve}var FM;function X6(){return FM||(FM=1,M0.exports=k6()),M0.exports}var W6=X6();Ut`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;Ut`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;Ut`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;Ut`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;Ut`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;Ut`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Ut`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Ut`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Ut`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;Ut`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;Ut`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;Ut`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Ut`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const q6=Ut`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Y6=Ut`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,j6=Ut`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,$6=Ut`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,K6=Ut`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,e_=Ut`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Z6=Ut`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Q6=Ut`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,J6=Ut`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tz=Ut`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ez=Ut`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nz=Ut`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,iz=Ut`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function az({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:a=e_,iterationCount:s=1}){return QA`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${s};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function rz(e){return e==null}function sz(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function e3(e,t){return n=>n?e():t()}function Wu(e){return e3(e,()=>null)}function jg(e){return Wu(()=>({opacity:0}))(e)}const n3=e=>{const{cascade:t=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:l=0,keyframes:c=e_,triggerOnce:f=!1,className:d,style:h,childClassName:m,childStyle:v,children:_,onVisibilityChange:x}=e,b=V.useMemo(()=>az({keyframes:c,duration:s}),[s,c]);return rz(_)?null:sz(_)?Pn(lz,{...e,animationStyles:b,children:String(_)}):W6.isFragment(_)?Pn(i3,{...e,animationStyles:b}):Pn(U6,{children:V.Children.map(_,(M,y)=>{if(!V.isValidElement(M))return null;const S=a+(t?y*s*n:0);switch(M.type){case"ol":case"ul":return Pn(b0,{children:({cx:T})=>Pn(M.type,{...M.props,className:T(d,M.props.className),style:Object.assign({},h,M.props.style),children:Pn(n3,{...e,children:M.props.children})})});case"li":return Pn(NM,{threshold:l,triggerOnce:f,onChange:x,children:({inView:T,ref:C})=>Pn(b0,{children:({cx:L})=>Pn(M.type,{...M.props,ref:C,className:L(m,M.props.className),css:Wu(()=>b)(T),style:Object.assign({},v,M.props.style,jg(!T),{animationDelay:S+"ms"})})})});default:return Pn(NM,{threshold:l,triggerOnce:f,onChange:x,children:({inView:T,ref:C})=>Pn("div",{ref:C,className:d,css:Wu(()=>b)(T),style:Object.assign({},h,jg(!T),{animationDelay:S+"ms"}),children:Pn(b0,{children:({cx:L})=>Pn(M.type,{...M.props,className:L(m,M.props.className),style:Object.assign({},v,M.props.style)})})})})}})})},oz={display:"inline-block",whiteSpace:"pre"},lz=e=>{const{animationStyles:t,cascade:n=!1,damping:a=.5,delay:s=0,duration:l=1e3,fraction:c=0,triggerOnce:f=!1,className:d,style:h,children:m,onVisibilityChange:v}=e,{ref:_,inView:x}=t3({triggerOnce:f,threshold:c,onChange:v});return e3(()=>Pn("div",{ref:_,className:d,style:Object.assign({},h,oz),children:m.split("").map((b,M)=>Pn("span",{css:Wu(()=>t)(x),style:{animationDelay:s+M*l*a+"ms"},children:b},M))}),()=>Pn(i3,{...e,children:m}))(n)},i3=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:a=!1,className:s,style:l,children:c,onVisibilityChange:f}=e,{ref:d,inView:h}=t3({triggerOnce:a,threshold:n,onChange:f});return Pn("div",{ref:d,className:s,css:Wu(()=>t)(h),style:Object.assign({},l,jg(!h)),children:c})};Ut`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;Ut`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;Ut`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;Ut`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;Ut`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;Ut`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const uz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,cz=Ut`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,fz=Ut`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,dz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,hz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,pz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,mz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,gz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,vz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,_z=Ut`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,yz=Ut`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,xz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Sz=Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function bz(e,t,n){switch(n){case"bottom-left":return t?cz:Y6;case"bottom-right":return t?fz:j6;case"down":return e?t?hz:K6:t?dz:$6;case"left":return e?t?mz:Z6:t?pz:e_;case"right":return e?t?vz:J6:t?gz:Q6;case"top-left":return t?_z:tz;case"top-right":return t?yz:ez;case"up":return e?t?Sz:iz:t?xz:nz;default:return t?uz:q6}}const g8=e=>{const{big:t=!1,direction:n,reverse:a=!1,...s}=e,l=V.useMemo(()=>bz(t,a,n),[t,n,a]);return Pn(n3,{keyframes:l,...s})};Ut`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;Ut`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Ut`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;Ut`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;Ut`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Ut`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;Ut`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Ut`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Ut`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Ut`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Ut`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Ut`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Ut`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Ut`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;Ut`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;Ut`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Ut`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Ut`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;Ut`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;Ut`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;Ut`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;Ut`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Mz=typeof document<"u"?zt.useLayoutEffect:()=>{},Jr=e=>{var t;return(t=e?.ownerDocument)!==null&&t!==void 0?t:document},Ns=e=>e&&"window"in e&&e.window===e?e:Jr(e).defaultView||window;function Ez(e){return e!==null&&typeof e=="object"&&"nodeType"in e&&typeof e.nodeType=="number"}function Tz(e){return Ez(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in e}let Az=!1;function n_(){return Az}function Os(e,t){if(!n_())return t&&e?e.contains(t):!1;if(!e||!t)return!1;let n=t;for(;n!==null;){if(n===e)return!0;n.tagName==="SLOT"&&n.assignedSlot?n=n.assignedSlot.parentNode:Tz(n)?n=n.host:n=n.parentNode}return!1}const $g=(e=document)=>{var t;if(!n_())return e.activeElement;let n=e.activeElement;for(;n&&"shadowRoot"in n&&(!((t=n.shadowRoot)===null||t===void 0)&&t.activeElement);)n=n.shadowRoot.activeElement;return n};function a3(e){return n_()&&e.target.shadowRoot&&e.composedPath?e.composedPath()[0]:e.target}function Rz(e){if(Cz())e.focus({preventScroll:!0});else{let t=wz(e);e.focus(),Dz(t)}}let nd=null;function Cz(){if(nd==null){nd=!1;try{document.createElement("div").focus({get preventScroll(){return nd=!0,!0}})}catch{}}return nd}function wz(e){let t=e.parentNode,n=[],a=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==a;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return a instanceof HTMLElement&&n.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),n}function Dz(e){for(let{element:t,scrollTop:n,scrollLeft:a}of e)t.scrollTop=n,t.scrollLeft=a}function sh(e){var t;if(typeof window>"u"||window.navigator==null)return!1;let n=(t=window.navigator.userAgentData)===null||t===void 0?void 0:t.brands;return Array.isArray(n)&&n.some(a=>e.test(a.brand))||e.test(window.navigator.userAgent)}function r3(e){var t;return typeof window<"u"&&window.navigator!=null?e.test(((t=window.navigator.userAgentData)===null||t===void 0?void 0:t.platform)||window.navigator.platform):!1}function vl(e){let t=null;return()=>(t==null&&(t=e()),t)}const Vd=vl(function(){return r3(/^Mac/i)}),Lz=vl(function(){return r3(/^iPad/i)||Vd()&&navigator.maxTouchPoints>1}),Uz=vl(function(){return sh(/AppleWebKit/i)&&!Pz()}),Pz=vl(function(){return sh(/Chrome/i)}),Nz=vl(function(){return sh(/Android/i)}),Oz=vl(function(){return sh(/Firefox/i)});function qu(e,t,n=!0){var a,s;let{metaKey:l,ctrlKey:c,altKey:f,shiftKey:d}=t;Oz()&&(!((s=window.event)===null||s===void 0||(a=s.type)===null||a===void 0)&&a.startsWith("key"))&&e.target==="_blank"&&(Vd()?l=!0:c=!0);let h=Uz()&&Vd()&&!Lz()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:c,altKey:f,shiftKey:d}):new MouseEvent("click",{metaKey:l,ctrlKey:c,altKey:f,shiftKey:d,detail:1,bubbles:!0,cancelable:!0});qu.isOpening=n,Rz(e),e.dispatchEvent(h),qu.isOpening=!1}qu.isOpening=!1;function s3(){let e=V.useRef(new Map),t=V.useCallback((s,l,c,f)=>{let d=f?.once?(...h)=>{e.current.delete(c),c(...h)}:c;e.current.set(c,{type:l,eventTarget:s,fn:d,options:f}),s.addEventListener(l,d,f)},[]),n=V.useCallback((s,l,c,f)=>{var d;let h=((d=e.current.get(c))===null||d===void 0?void 0:d.fn)||c;s.removeEventListener(l,h,f),e.current.delete(c)},[]),a=V.useCallback(()=>{e.current.forEach((s,l)=>{n(s.eventTarget,s.type,l,s.options)})},[n]);return V.useEffect(()=>a,[a]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:a}}function Fz(e){return e.pointerType===""&&e.isTrusted?!0:Nz()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function o3(e){let t=e;return t.nativeEvent=e,t.isDefaultPrevented=()=>t.defaultPrevented,t.isPropagationStopped=()=>t.cancelBubble,t.persist=()=>{},t}function Iz(e,t){Object.defineProperty(e,"target",{value:t}),Object.defineProperty(e,"currentTarget",{value:t})}function l3(e){let t=V.useRef({isFocused:!1,observer:null});return Mz(()=>{const n=t.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]),V.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){t.current.isFocused=!0;let a=n.target,s=l=>{if(t.current.isFocused=!1,a.disabled){let c=o3(l);e?.(c)}t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)};a.addEventListener("focusout",s,{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&a.disabled){var l;(l=t.current.observer)===null||l===void 0||l.disconnect();let c=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),t.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[e])}let Bz=!1,ac=null;const Kg=new Set;let Uu=new Map,Vs=!1,Zg=!1;const zz={Tab:!0,Escape:!0};function i_(e,t){for(let n of Kg)n(e,t)}function Vz(e){return!(e.metaKey||!Vd()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function Hd(e){Vs=!0,!qu.isOpening&&Vz(e)&&(ac="keyboard",i_("keyboard",e))}function Zo(e){ac="pointer","pointerType"in e&&e.pointerType,(e.type==="mousedown"||e.type==="pointerdown")&&(Vs=!0,i_("pointer",e))}function u3(e){!qu.isOpening&&Fz(e)&&(Vs=!0,ac="virtual")}function c3(e){e.target===window||e.target===document||Bz||!e.isTrusted||(!Vs&&!Zg&&(ac="virtual",i_("virtual",e)),Vs=!1,Zg=!1)}function f3(){Vs=!1,Zg=!0}function Qg(e){if(typeof window>"u"||typeof document>"u"||Uu.get(Ns(e)))return;const t=Ns(e),n=Jr(e);let a=t.HTMLElement.prototype.focus;t.HTMLElement.prototype.focus=function(){Vs=!0,a.apply(this,arguments)},n.addEventListener("keydown",Hd,!0),n.addEventListener("keyup",Hd,!0),n.addEventListener("click",u3,!0),t.addEventListener("focus",c3,!0),t.addEventListener("blur",f3,!1),typeof PointerEvent<"u"&&(n.addEventListener("pointerdown",Zo,!0),n.addEventListener("pointermove",Zo,!0),n.addEventListener("pointerup",Zo,!0)),t.addEventListener("beforeunload",()=>{d3(e)},{once:!0}),Uu.set(t,{focus:a})}const d3=(e,t)=>{const n=Ns(e),a=Jr(e);t&&a.removeEventListener("DOMContentLoaded",t),Uu.has(n)&&(n.HTMLElement.prototype.focus=Uu.get(n).focus,a.removeEventListener("keydown",Hd,!0),a.removeEventListener("keyup",Hd,!0),a.removeEventListener("click",u3,!0),n.removeEventListener("focus",c3,!0),n.removeEventListener("blur",f3,!1),typeof PointerEvent<"u"&&(a.removeEventListener("pointerdown",Zo,!0),a.removeEventListener("pointermove",Zo,!0),a.removeEventListener("pointerup",Zo,!0)),Uu.delete(n))};function Hz(e){const t=Jr(e);let n;return t.readyState!=="loading"?Qg(e):(n=()=>{Qg(e)},t.addEventListener("DOMContentLoaded",n)),()=>d3(e,n)}typeof document<"u"&&Hz();function Jg(){return ac!=="pointer"}const Gz=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function kz(e,t,n){let a=Jr(n?.target);const s=typeof window<"u"?Ns(n?.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?Ns(n?.target).HTMLTextAreaElement:HTMLTextAreaElement,c=typeof window<"u"?Ns(n?.target).HTMLElement:HTMLElement,f=typeof window<"u"?Ns(n?.target).KeyboardEvent:KeyboardEvent;return e=e||a.activeElement instanceof s&&!Gz.has(a.activeElement.type)||a.activeElement instanceof l||a.activeElement instanceof c&&a.activeElement.isContentEditable,!(e&&t==="keyboard"&&n instanceof f&&!zz[n.key])}function Xz(e,t,n){Qg(),V.useEffect(()=>{if(n?.enabled===!1)return;let a=(s,l)=>{kz(!!n?.isTextInput,s,l)&&e(Jg())};return Kg.add(a),()=>{Kg.delete(a)}},t)}function Wz(e){let{isDisabled:t,onFocus:n,onBlur:a,onFocusChange:s}=e;const l=V.useCallback(d=>{if(d.target===d.currentTarget)return a&&a(d),s&&s(!1),!0},[a,s]),c=l3(l),f=V.useCallback(d=>{const h=Jr(d.target),m=h?$g(h):$g();d.target===d.currentTarget&&m===a3(d.nativeEvent)&&(n&&n(d),s&&s(!0),c(d))},[s,n,c]);return{focusProps:{onFocus:!t&&(n||s||a)?f:void 0,onBlur:!t&&(a||s)?l:void 0}}}function qz(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:a,onFocusWithinChange:s}=e,l=V.useRef({isFocusWithin:!1}),{addGlobalListener:c,removeAllGlobalListeners:f}=s3(),d=V.useCallback(v=>{Os(v.currentTarget,v.target)&&l.current.isFocusWithin&&!Os(v.currentTarget,v.relatedTarget)&&(l.current.isFocusWithin=!1,f(),n&&n(v),s&&s(!1))},[n,s,l,f]),h=l3(d),m=V.useCallback(v=>{if(!Os(v.currentTarget,v.target))return;const _=Jr(v.target),x=$g(_);if(!l.current.isFocusWithin&&x===a3(v.nativeEvent)){a&&a(v),s&&s(!0),l.current.isFocusWithin=!0,h(v);let b=v.currentTarget;c(_,"focus",M=>{if(l.current.isFocusWithin&&!Os(b,M.target)){let y=new _.defaultView.FocusEvent("blur",{relatedTarget:M.target});Iz(y,b);let S=o3(y);d(S)}},{capture:!0})}},[a,s,h,c,d]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:m,onBlur:d}}}let tv=!1,id=0;function Yz(){tv=!0,setTimeout(()=>{tv=!1},50)}function IM(e){e.pointerType==="touch"&&Yz()}function jz(){if(!(typeof document>"u"))return id===0&&typeof PointerEvent<"u"&&document.addEventListener("pointerup",IM),id++,()=>{id--,!(id>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",IM)}}function $z(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:a,isDisabled:s}=e,[l,c]=V.useState(!1),f=V.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;V.useEffect(jz,[]);let{addGlobalListener:d,removeAllGlobalListeners:h}=s3(),{hoverProps:m,triggerHoverEnd:v}=V.useMemo(()=>{let _=(M,y)=>{if(f.pointerType=y,s||y==="touch"||f.isHovered||!Os(M.currentTarget,M.target))return;f.isHovered=!0;let S=M.currentTarget;f.target=S,d(Jr(M.target),"pointerover",T=>{f.isHovered&&f.target&&!Os(f.target,T.target)&&x(T,T.pointerType)},{capture:!0}),t&&t({type:"hoverstart",target:S,pointerType:y}),n&&n(!0),c(!0)},x=(M,y)=>{let S=f.target;f.pointerType="",f.target=null,!(y==="touch"||!f.isHovered||!S)&&(f.isHovered=!1,h(),a&&a({type:"hoverend",target:S,pointerType:y}),n&&n(!1),c(!1))},b={};return typeof PointerEvent<"u"&&(b.onPointerEnter=M=>{tv&&M.pointerType==="mouse"||_(M,M.pointerType)},b.onPointerLeave=M=>{!s&&Os(M.currentTarget,M.target)&&x(M,M.pointerType)}),{hoverProps:b,triggerHoverEnd:x}},[t,n,a,s,f,d,h]);return V.useEffect(()=>{s&&v({currentTarget:f.target},f.pointerType)},[s]),{hoverProps:m,isHovered:l}}function h3(e={}){let{autoFocus:t=!1,isTextInput:n,within:a}=e,s=V.useRef({isFocused:!1,isFocusVisible:t||Jg()}),[l,c]=V.useState(!1),[f,d]=V.useState(()=>s.current.isFocused&&s.current.isFocusVisible),h=V.useCallback(()=>d(s.current.isFocused&&s.current.isFocusVisible),[]),m=V.useCallback(x=>{s.current.isFocused=x,s.current.isFocusVisible=Jg(),c(x),h()},[h]);Xz(x=>{s.current.isFocusVisible=x,h()},[n,l],{enabled:l,isTextInput:n});let{focusProps:v}=Wz({isDisabled:a,onFocusChange:m}),{focusWithinProps:_}=qz({isDisabled:!a,onFocusWithinChange:m});return{isFocused:l,isFocusVisible:f,focusProps:a?_:v}}var Kz=Object.defineProperty,Zz=(e,t,n)=>t in e?Kz(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E0=(e,t,n)=>(Zz(e,typeof t!="symbol"?t+"":t,n),n);let Qz=class{constructor(){E0(this,"current",this.detect()),E0(this,"handoffState","pending"),E0(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},a_=new Qz;function Jz(e){var t;return a_.isServer?null:e==null?document:(t=e?.ownerDocument)!=null?t:document}function ev(e){var t,n;return a_.isServer?null:e==null?document:(n=(t=e?.getRootNode)==null?void 0:t.call(e))!=null?n:document}function p3(e){var t,n;return(n=(t=ev(e))==null?void 0:t.activeElement)!=null?n:null}function m3(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function g3(){let e=[],t={addEventListener(n,a,s,l){return n.addEventListener(a,s,l),t.add(()=>n.removeEventListener(a,s,l))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(a))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let a=setTimeout(...n);return t.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return m3(()=>{a.current&&n[0]()}),t.add(()=>{a.current=!1})},style(n,a,s){let l=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:s}),this.add(()=>{Object.assign(n.style,{[a]:l})})},group(n){let a=g3();return n(a),this.add(()=>a.dispose())},add(n){return e.includes(n)||e.push(n),()=>{let a=e.indexOf(n);if(a>=0)for(let s of e.splice(a,1))s()}},dispose(){for(let n of e.splice(0))n()}};return t}function tV(){let[e]=V.useState(g3);return V.useEffect(()=>()=>e.dispose(),[e]),e}let rl=(e,t)=>{a_.isServer?V.useEffect(e,t):V.useLayoutEffect(e,t)};function Tu(e){let t=V.useRef(e);return rl(()=>{t.current=e},[e]),t}let xa=function(e){let t=Tu(e);return zt.useCallback((...n)=>t.current(...n),[t])};function eV(e){let t=e.width/2,n=e.height/2;return{top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function nV(e,t){return!(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function iV({disabled:e=!1}={}){let t=V.useRef(null),[n,a]=V.useState(!1),s=tV(),l=xa(()=>{t.current=null,a(!1),s.dispose()}),c=xa(f=>{if(s.dispose(),t.current===null){t.current=f.currentTarget,a(!0);{let d=Jz(f.currentTarget);s.addEventListener(d,"pointerup",l,!1),s.addEventListener(d,"pointermove",h=>{if(t.current){let m=eV(h);a(nV(m,t.current.getBoundingClientRect()))}},!1),s.addEventListener(d,"pointercancel",l,!1)}}});return{pressed:n,pressProps:e?{}:{onPointerDown:c,onPointerUp:l,onClick:l}}}function rc(e){return V.useMemo(()=>e,Object.values(e))}function BM(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}function Is(e,t,...n){if(e in t){let s=t[e];return typeof s=="function"?s(...n):s}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Is),a}var nv=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(nv||{}),aV=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(aV||{});function _l(){let e=sV();return V.useCallback(t=>rV({mergeRefs:e,...t}),[e])}function rV({ourProps:e,theirProps:t,slot:n,defaultTag:a,features:s,visible:l=!0,name:c,mergeRefs:f}){f=f??oV;let d=v3(t,e);if(l)return ad(d,n,a,c,f);let h=s??0;if(h&2){let{static:m=!1,...v}=d;if(m)return ad(v,n,a,c,f)}if(h&1){let{unmount:m=!0,...v}=d;return Is(m?0:1,{0(){return null},1(){return ad({...v,hidden:!0,style:{display:"none"}},n,a,c,f)}})}return ad(d,n,a,c,f)}function ad(e,t={},n,a,s){let{as:l=n,children:c,refName:f="ref",...d}=T0(e,["unmount","static"]),h=e.ref!==void 0?{[f]:e.ref}:{},m=typeof c=="function"?c(t):c;"className"in d&&d.className&&typeof d.className=="function"&&(d.className=d.className(t)),d["aria-labelledby"]&&d["aria-labelledby"]===d.id&&(d["aria-labelledby"]=void 0);let v={};if(t){let _=!1,x=[];for(let[b,M]of Object.entries(t))typeof M=="boolean"&&(_=!0),M===!0&&x.push(b.replace(/([A-Z])/g,y=>`-${y.toLowerCase()}`));if(_){v["data-headlessui-state"]=x.join(" ");for(let b of x)v[`data-${b}`]=""}}if(Md(l)&&(Object.keys(Bo(d)).length>0||Object.keys(Bo(v)).length>0))if(!V.isValidElement(m)||Array.isArray(m)&&m.length>1||uV(m)){if(Object.keys(Bo(d)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(Bo(d)).concat(Object.keys(Bo(v))).map(_=>`  - ${_}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(_=>`  - ${_}`).join(`
`)].join(`
`))}else{let _=m.props,x=_?.className,b=typeof x=="function"?(...S)=>BM(x(...S),d.className):BM(x,d.className),M=b?{className:b}:{},y=v3(m.props,Bo(T0(d,["ref"])));for(let S in v)S in y&&delete v[S];return V.cloneElement(m,Object.assign({},y,v,h,{ref:s(lV(m),h.ref)},M))}return V.createElement(l,Object.assign({},T0(d,["ref"]),!Md(l)&&h,!Md(l)&&v),m)}function sV(){let e=V.useRef([]),t=V.useCallback(n=>{for(let a of e.current)a!=null&&(typeof a=="function"?a(n):a.current=n)},[]);return(...n)=>{if(!n.every(a=>a==null))return e.current=n,t}}function oV(...e){return e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}function v3(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(a[s])):t[s]=a[s];if(t.disabled||t["aria-disabled"])for(let a in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(a)&&(n[a]=[s=>{var l;return(l=s?.preventDefault)==null?void 0:l.call(s)}]);for(let a in n)Object.assign(t,{[a](s,...l){let c=n[a];for(let f of c){if((s instanceof Event||s?.nativeEvent instanceof Event)&&s.defaultPrevented)return;f(s,...l)}}});return t}function _3(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let a of e)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(a[s])):t[s]=a[s];for(let a in n)Object.assign(t,{[a](...s){let l=n[a];for(let c of l)c?.(...s)}});return t}function yl(e){var t;return Object.assign(V.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Bo(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function T0(e,t=[]){let n=Object.assign({},e);for(let a of t)a in n&&delete n[a];return n}function lV(e){return zt.version.split(".")[0]>="19"?e.props.ref:e.ref}function Md(e){return e===V.Fragment||e===Symbol.for("react.fragment")}function uV(e){return Md(e.type)}let cV="span";var y3=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(y3||{});function fV(e,t){var n;let{features:a=1,...s}=e,l={ref:t,"aria-hidden":(a&2)===2?!0:(n=s["aria-hidden"])!=null?n:void 0,hidden:(a&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return _l()({ourProps:l,theirProps:s,slot:{},defaultTag:cV,name:"Hidden"})}let x3=yl(fV),dV=Symbol();function sc(...e){let t=V.useRef(e);V.useEffect(()=>{t.current=e},[e]);let n=xa(a=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(a):s.current=a)});return e.every(a=>a==null||a?.[dV])?void 0:n}var Ki=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ki||{});let hV=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),pV=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var Zi=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e[e.AutoFocus=64]="AutoFocus",e))(Zi||{}),Au=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Au||{}),mV=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(mV||{});function gV(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(hV)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function vV(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(pV)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var _V=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(_V||{}),yV=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(yV||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let xV=["textarea","input"].join(",");function SV(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,xV))!=null?n:!1}function qo(e,t=n=>n){return e.slice().sort((n,a)=>{let s=t(n),l=t(a);if(s===null||l===null)return 0;let c=s.compareDocumentPosition(l);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function zo(e,t,{sorted:n=!0,relativeTo:a=null,skipElements:s=[]}={}){let l=Array.isArray(e)?e.length>0?ev(e[0]):document:ev(e),c=Array.isArray(e)?n?qo(e):e:t&64?vV(e):gV(e);s.length>0&&c.length>1&&(c=c.filter(x=>!s.some(b=>b!=null&&"current"in b?b?.current===x:b===x))),a=a??l?.activeElement;let f=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,c.indexOf(a))-1;if(t&4)return Math.max(0,c.indexOf(a))+1;if(t&8)return c.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=t&32?{preventScroll:!0}:{},m=0,v=c.length,_;do{if(m>=v||m+v<=0)return 0;let x=d+m;if(t&16)x=(x+v)%v;else{if(x<0)return 3;if(x>=v)return 1}_=c[x],_?.focus(h),m+=f}while(_!==p3(_));return t&6&&SV(_)&&_.select(),2}function bV(e,t){return V.useMemo(()=>{var n;if(e.type)return e.type;let a=(n=e.as)!=null?n:"button";if(typeof a=="string"&&a.toLowerCase()==="button"||t?.tagName==="BUTTON"&&!t.hasAttribute("type"))return"button"},[e.type,e.as,t])}function MV(){let e=V.useRef(!1);return rl(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function EV({onFocus:e}){let[t,n]=V.useState(!0),a=MV();return t?zt.createElement(x3,{as:"button",type:"button",features:y3.Focusable,onFocus:s=>{s.preventDefault();let l,c=50;function f(){if(c--<=0){l&&cancelAnimationFrame(l);return}if(e()){if(cancelAnimationFrame(l),!a.current)return;n(!1);return}l=requestAnimationFrame(f)}l=requestAnimationFrame(f)}}):null}const S3=V.createContext(null);function TV(){return{groups:new Map,get(e,t){var n;let a=this.groups.get(e);a||(a=new Map,this.groups.set(e,a));let s=(n=a.get(t))!=null?n:0;a.set(t,s+1);let l=Array.from(a.keys()).indexOf(t);function c(){let f=a.get(t);f>1?a.set(t,f-1):a.delete(t)}return[l,c]}}}function AV({children:e}){let t=V.useRef(TV());return V.createElement(S3.Provider,{value:t},e)}function b3(e){let t=V.useContext(S3);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let n=V.useId(),[a,s]=t.current.get(e,n);return V.useEffect(()=>s,[]),a}var RV=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(RV||{}),CV=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(CV||{}),wV=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(wV||{});let DV={0(e,t){var n;let a=qo(e.tabs,m=>m.current),s=qo(e.panels,m=>m.current),l=a.filter(m=>{var v;return!((v=m.current)!=null&&v.hasAttribute("disabled"))}),c={...e,tabs:a,panels:s};if(t.index<0||t.index>a.length-1){let m=Is(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>Is(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return c;let v=Is(m,{0:()=>a.indexOf(l[0]),1:()=>a.indexOf(l[l.length-1])});return{...c,selectedIndex:v===-1?e.selectedIndex:v}}let f=a.slice(0,t.index),d=[...a.slice(t.index),...f].find(m=>l.includes(m));if(!d)return c;let h=(n=a.indexOf(d))!=null?n:e.selectedIndex;return h===-1&&(h=e.selectedIndex),{...c,selectedIndex:h}},1(e,t){if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=qo([...e.tabs,t.tab],l=>l.current),s=e.selectedIndex;return e.info.current.isControlled||(s=a.indexOf(n),s===-1&&(s=e.selectedIndex)),{...e,tabs:a,selectedIndex:s}},2(e,t){return{...e,tabs:e.tabs.filter(n=>n!==t.tab)}},3(e,t){return e.panels.includes(t.panel)?e:{...e,panels:qo([...e.panels,t.panel],n=>n.current)}},4(e,t){return{...e,panels:e.panels.filter(n=>n!==t.panel)}}},r_=V.createContext(null);r_.displayName="TabsDataContext";function sl(e){let t=V.useContext(r_);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,sl),n}return t}let s_=V.createContext(null);s_.displayName="TabsActionsContext";function o_(e){let t=V.useContext(s_);if(t===null){let n=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,o_),n}return t}function LV(e,t){return Is(t.type,DV,e,t)}let UV="div";function PV(e,t){let{defaultIndex:n=0,vertical:a=!1,manual:s=!1,onChange:l,selectedIndex:c=null,...f}=e;const d=a?"vertical":"horizontal",h=s?"manual":"auto";let m=c!==null,v=Tu({isControlled:m}),_=sc(t),[x,b]=V.useReducer(LV,{info:v,selectedIndex:c??n,tabs:[],panels:[]}),M=rc({selectedIndex:x.selectedIndex}),y=Tu(l||(()=>{})),S=Tu(x.tabs),T=V.useMemo(()=>({orientation:d,activation:h,...x}),[d,h,x]),C=xa(tt=>(b({type:1,tab:tt}),()=>b({type:2,tab:tt}))),L=xa(tt=>(b({type:3,panel:tt}),()=>b({type:4,panel:tt}))),w=xa(tt=>{O.current!==tt&&y.current(tt),m||b({type:0,index:tt})}),O=Tu(m?e.selectedIndex:x.selectedIndex),F=V.useMemo(()=>({registerTab:C,registerPanel:L,change:w}),[]);rl(()=>{b({type:0,index:c??n})},[c]),rl(()=>{if(O.current===void 0||x.tabs.length<=0)return;let tt=qo(x.tabs,H=>H.current);tt.some((H,Z)=>x.tabs[Z]!==H)&&w(tt.indexOf(x.tabs[O.current]))});let R={ref:_},P=_l();return zt.createElement(AV,null,zt.createElement(s_.Provider,{value:F},zt.createElement(r_.Provider,{value:T},T.tabs.length<=0&&zt.createElement(EV,{onFocus:()=>{var tt,H;for(let Z of S.current)if(((tt=Z.current)==null?void 0:tt.tabIndex)===0)return(H=Z.current)==null||H.focus(),!0;return!1}}),P({ourProps:R,theirProps:f,slot:M,defaultTag:UV,name:"Tabs"}))))}let NV="div";function OV(e,t){let{orientation:n,selectedIndex:a}=sl("Tab.List"),s=sc(t),l=rc({selectedIndex:a}),c=e,f={ref:s,role:"tablist","aria-orientation":n};return _l()({ourProps:f,theirProps:c,slot:l,defaultTag:NV,name:"Tabs.List"})}let FV="button";function IV(e,t){var n,a;let s=V.useId(),{id:l=`headlessui-tabs-tab-${s}`,disabled:c=!1,autoFocus:f=!1,...d}=e,{orientation:h,activation:m,selectedIndex:v,tabs:_,panels:x}=sl("Tab"),b=o_("Tab"),M=sl("Tab"),[y,S]=V.useState(null),T=V.useRef(null),C=sc(T,t,S);rl(()=>b.registerTab(T),[b,T]);let L=b3("tabs"),w=_.indexOf(T);w===-1&&(w=L);let O=w===v,F=xa(ht=>{let B=ht();if(B===Au.Success&&m==="auto"){let X=p3(T.current),_t=M.tabs.findIndex(Rt=>Rt.current===X);_t!==-1&&b.change(_t)}return B}),R=xa(ht=>{let B=_.map(X=>X.current).filter(Boolean);if(ht.key===Ki.Space||ht.key===Ki.Enter){ht.preventDefault(),ht.stopPropagation(),b.change(w);return}switch(ht.key){case Ki.Home:case Ki.PageUp:return ht.preventDefault(),ht.stopPropagation(),F(()=>zo(B,Zi.First));case Ki.End:case Ki.PageDown:return ht.preventDefault(),ht.stopPropagation(),F(()=>zo(B,Zi.Last))}if(F(()=>Is(h,{vertical(){return ht.key===Ki.ArrowUp?zo(B,Zi.Previous|Zi.WrapAround):ht.key===Ki.ArrowDown?zo(B,Zi.Next|Zi.WrapAround):Au.Error},horizontal(){return ht.key===Ki.ArrowLeft?zo(B,Zi.Previous|Zi.WrapAround):ht.key===Ki.ArrowRight?zo(B,Zi.Next|Zi.WrapAround):Au.Error}}))===Au.Success)return ht.preventDefault()}),P=V.useRef(!1),tt=xa(()=>{var ht;P.current||(P.current=!0,(ht=T.current)==null||ht.focus({preventScroll:!0}),b.change(w),m3(()=>{P.current=!1}))}),H=xa(ht=>{ht.preventDefault()}),{isFocusVisible:Z,focusProps:Q}=h3({autoFocus:f}),{isHovered:J,hoverProps:K}=$z({isDisabled:c}),{pressed:I,pressProps:z}=iV({disabled:c}),it=rc({selected:O,hover:J,active:I,focus:Z,autofocus:f,disabled:c}),ct=_3({ref:C,onKeyDown:R,onMouseDown:H,onClick:tt,id:l,role:"tab",type:bV(e,y),"aria-controls":(a=(n=x[w])==null?void 0:n.current)==null?void 0:a.id,"aria-selected":O,tabIndex:O?0:-1,disabled:c||void 0,autoFocus:f},Q,K,z);return _l()({ourProps:ct,theirProps:d,slot:it,defaultTag:FV,name:"Tabs.Tab"})}let BV="div";function zV(e,t){let{selectedIndex:n}=sl("Tab.Panels"),a=sc(t),s=rc({selectedIndex:n}),l=e,c={ref:a};return _l()({ourProps:c,theirProps:l,slot:s,defaultTag:BV,name:"Tabs.Panels"})}let VV="div",HV=nv.RenderStrategy|nv.Static;function GV(e,t){var n,a,s,l;let c=V.useId(),{id:f=`headlessui-tabs-panel-${c}`,tabIndex:d=0,...h}=e,{selectedIndex:m,tabs:v,panels:_}=sl("Tab.Panel"),x=o_("Tab.Panel"),b=V.useRef(null),M=sc(b,t);rl(()=>x.registerPanel(b),[x,b]);let y=b3("panels"),S=_.indexOf(b);S===-1&&(S=y);let T=S===m,{isFocusVisible:C,focusProps:L}=h3(),w=rc({selected:T,focus:C}),O=_3({ref:M,id:f,role:"tabpanel","aria-labelledby":(a=(n=v[S])==null?void 0:n.current)==null?void 0:a.id,tabIndex:T?d:-1},L),F=_l();return!T&&((s=h.unmount)==null||s)&&!((l=h.static)!=null&&l)?zt.createElement(x3,{"aria-hidden":"true",...O}):F({ourProps:O,theirProps:h,slot:w,defaultTag:VV,features:HV,visible:T,name:"Tabs.Panel"})}let kV=yl(IV),XV=yl(PV),WV=yl(OV),qV=yl(zV),YV=yl(GV),_8=Object.assign(kV,{Group:XV,List:WV,Panels:qV,Panel:YV});var M3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zM=zt.createContext&&zt.createContext(M3),jV=["attr","size","title"];function $V(e,t){if(e==null)return{};var n=KV(e,t),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)a=l[s],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function KV(e,t){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}function Gd(){return Gd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Gd.apply(this,arguments)}function VM(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function kd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?VM(Object(n),!0).forEach(function(a){ZV(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):VM(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ZV(e,t,n){return t=QV(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QV(e){var t=JV(e,"string");return typeof t=="symbol"?t:t+""}function JV(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E3(e){return e&&e.map((t,n)=>zt.createElement(t.tag,kd({key:n},t.attr),E3(t.child)))}function ts(e){return t=>zt.createElement(t8,Gd({attr:kd({},e.attr)},t),E3(e.child))}function t8(e){var t=n=>{var{attr:a,size:s,title:l}=e,c=$V(e,jV),f=s||n.size||"1em",d;return n.className&&(d=n.className),e.className&&(d=(d?d+" ":"")+e.className),zt.createElement("svg",Gd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,c,{className:d,style:kd(kd({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&zt.createElement("title",null,l),e.children)};return zM!==void 0?zt.createElement(zM.Consumer,null,n=>t(n)):t(M3)}function y8(e){return ts({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"},child:[]}]})(e)}function x8(e){return ts({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function S8(e){return ts({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function b8(e){return ts({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function M8(e){return ts({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function E8(e){return ts({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"},child:[]}]})(e)}function T8(e){return ts({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v48H54a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6v-10h48zm42-336H150a6 6 0 0 0-6 6v244a6 6 0 0 0 6 6h372a6 6 0 0 0 6-6V86a6 6 0 0 0-6-6zm6-48c26.51 0 48 21.49 48 48v256c0 26.51-21.49 48-48 48H144c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h384zM264 144c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40zm-72 96l39.515-39.515c4.686-4.686 12.284-4.686 16.971 0L288 240l103.515-103.515c4.686-4.686 12.284-4.686 16.971 0L480 208v80H192v-48z"},child:[]}]})(e)}function A8(e){return ts({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"},child:[]}]})(e)}export{xb as A,Ua as B,We as C,lO as D,i8 as E,_a as F,m8 as G,ur as H,OC as I,e8 as J,a8 as K,aE as L,dr as M,n8 as N,Jd as P,na as R,u8 as S,f8 as T,Ke as V,d8 as W,l8 as a,o8 as b,qn as c,ar as d,bA as e,yO as f,hn as g,Ea as h,Ta as i,Qo as j,c8 as k,_8 as l,s8 as m,zt as n,g8 as o,zB as p,S8 as q,V as r,x8 as s,y8 as t,aN as u,E8 as v,A8 as w,M8 as x,b8 as y,T8 as z};
