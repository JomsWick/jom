function OC(t,e){for(var n=0;n<e.length;n++){const a=e[n];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in t)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(t,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function FC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fm={exports:{}},lc={};var jS;function IC(){if(jS)return lc;jS=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:t,type:a,key:c,ref:s!==void 0?s:null,props:l}}return lc.Fragment=e,lc.jsx=n,lc.jsxs=n,lc}var qS;function BC(){return qS||(qS=1,fm.exports=IC()),fm.exports}var ie=BC(),dm={exports:{}},pt={};var YS;function zC(){if(YS)return pt;YS=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function x(V){return V===null||typeof V!="object"?null:(V=y&&V[y]||V["@@iterator"],typeof V=="function"?V:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,_={};function S(V,X,xe){this.props=V,this.context=X,this.refs=_,this.updater=xe||b}S.prototype.isReactComponent={},S.prototype.setState=function(V,X){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,X,"setState")},S.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function A(){}A.prototype=S.prototype;function w(V,X,xe){this.props=V,this.context=X,this.refs=_,this.updater=xe||b}var D=w.prototype=new A;D.constructor=w,E(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},R=Object.prototype.hasOwnProperty;function O(V,X,xe){var we=xe.ref;return{$$typeof:t,type:V,key:X,ref:we!==void 0?we:null,props:xe}}function J(V,X){return O(V.type,X,V.props)}function G(V){return typeof V=="object"&&V!==null&&V.$$typeof===t}function Q(V){var X={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(xe){return X[xe]})}var te=/\/+/g;function ee(V,X){return typeof V=="object"&&V!==null&&V.key!=null?Q(""+V.key):X.toString(36)}function K(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(F,F):(V.status="pending",V.then(function(X){V.status==="pending"&&(V.status="fulfilled",V.value=X)},function(X){V.status==="pending"&&(V.status="rejected",V.reason=X)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function B(V,X,xe,we,Fe){var ae=typeof V;(ae==="undefined"||ae==="boolean")&&(V=null);var Se=!1;if(V===null)Se=!0;else switch(ae){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(V.$$typeof){case t:case e:Se=!0;break;case m:return Se=V._init,B(Se(V._payload),X,xe,we,Fe)}}if(Se)return Fe=Fe(V),Se=we===""?"."+ee(V,0):we,C(Fe)?(xe="",Se!=null&&(xe=Se.replace(te,"$&/")+"/"),B(Fe,X,xe,"",function(De){return De})):Fe!=null&&(G(Fe)&&(Fe=J(Fe,xe+(Fe.key==null||V&&V.key===Fe.key?"":(""+Fe.key).replace(te,"$&/")+"/")+Se)),X.push(Fe)),1;Se=0;var ge=we===""?".":we+":";if(C(V))for(var Ce=0;Ce<V.length;Ce++)we=V[Ce],ae=ge+ee(we,Ce),Se+=B(we,X,xe,ae,Fe);else if(Ce=x(V),typeof Ce=="function")for(V=Ce.call(V),Ce=0;!(we=V.next()).done;)we=we.value,ae=ge+ee(we,Ce++),Se+=B(we,X,xe,ae,Fe);else if(ae==="object"){if(typeof V.then=="function")return B(K(V),X,xe,we,Fe);throw X=String(V),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Se}function z(V,X,xe){if(V==null)return V;var we=[],Fe=0;return B(V,we,"","",function(ae){return X.call(xe,ae,Fe++)}),we}function ne(V){if(V._status===-1){var X=V._result;X=X(),X.then(function(xe){(V._status===0||V._status===-1)&&(V._status=1,V._result=xe)},function(xe){(V._status===0||V._status===-1)&&(V._status=2,V._result=xe)}),V._status===-1&&(V._status=0,V._result=X)}if(V._status===1)return V._result.default;throw V._result}var he=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},ve={map:z,forEach:function(V,X,xe){z(V,function(){X.apply(this,arguments)},xe)},count:function(V){var X=0;return z(V,function(){X++}),X},toArray:function(V){return z(V,function(X){return X})||[]},only:function(V){if(!G(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return pt.Activity=v,pt.Children=ve,pt.Component=S,pt.Fragment=n,pt.Profiler=s,pt.PureComponent=w,pt.StrictMode=a,pt.Suspense=d,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,pt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return P.H.useMemoCache(V)}},pt.cache=function(V){return function(){return V.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(V,X,xe){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var we=E({},V.props),Fe=V.key;if(X!=null)for(ae in X.key!==void 0&&(Fe=""+X.key),X)!R.call(X,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&X.ref===void 0||(we[ae]=X[ae]);var ae=arguments.length-2;if(ae===1)we.children=xe;else if(1<ae){for(var Se=Array(ae),ge=0;ge<ae;ge++)Se[ge]=arguments[ge+2];we.children=Se}return O(V.type,Fe,we)},pt.createContext=function(V){return V={$$typeof:c,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:l,_context:V},V},pt.createElement=function(V,X,xe){var we,Fe={},ae=null;if(X!=null)for(we in X.key!==void 0&&(ae=""+X.key),X)R.call(X,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Fe[we]=X[we]);var Se=arguments.length-2;if(Se===1)Fe.children=xe;else if(1<Se){for(var ge=Array(Se),Ce=0;Ce<Se;Ce++)ge[Ce]=arguments[Ce+2];Fe.children=ge}if(V&&V.defaultProps)for(we in Se=V.defaultProps,Se)Fe[we]===void 0&&(Fe[we]=Se[we]);return O(V,ae,Fe)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(V){return{$$typeof:f,render:V}},pt.isValidElement=G,pt.lazy=function(V){return{$$typeof:m,_payload:{_status:-1,_result:V},_init:ne}},pt.memo=function(V,X){return{$$typeof:h,type:V,compare:X===void 0?null:X}},pt.startTransition=function(V){var X=P.T,xe={};P.T=xe;try{var we=V(),Fe=P.S;Fe!==null&&Fe(xe,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(F,he)}catch(ae){he(ae)}finally{X!==null&&xe.types!==null&&(X.types=xe.types),P.T=X}},pt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},pt.use=function(V){return P.H.use(V)},pt.useActionState=function(V,X,xe){return P.H.useActionState(V,X,xe)},pt.useCallback=function(V,X){return P.H.useCallback(V,X)},pt.useContext=function(V){return P.H.useContext(V)},pt.useDebugValue=function(){},pt.useDeferredValue=function(V,X){return P.H.useDeferredValue(V,X)},pt.useEffect=function(V,X){return P.H.useEffect(V,X)},pt.useEffectEvent=function(V){return P.H.useEffectEvent(V)},pt.useId=function(){return P.H.useId()},pt.useImperativeHandle=function(V,X,xe){return P.H.useImperativeHandle(V,X,xe)},pt.useInsertionEffect=function(V,X){return P.H.useInsertionEffect(V,X)},pt.useLayoutEffect=function(V,X){return P.H.useLayoutEffect(V,X)},pt.useMemo=function(V,X){return P.H.useMemo(V,X)},pt.useOptimistic=function(V,X){return P.H.useOptimistic(V,X)},pt.useReducer=function(V,X,xe){return P.H.useReducer(V,X,xe)},pt.useRef=function(V){return P.H.useRef(V)},pt.useState=function(V){return P.H.useState(V)},pt.useSyncExternalStore=function(V,X,xe){return P.H.useSyncExternalStore(V,X,xe)},pt.useTransition=function(){return P.H.useTransition()},pt.version="19.2.4",pt}var $S;function sv(){return $S||($S=1,dm.exports=zC()),dm.exports}var I=sv();const Xe=FC(I),KS=OC({__proto__:null,default:Xe},[I]);var hm={exports:{}},cc={},pm={exports:{}},mm={};var ZS;function VC(){return ZS||(ZS=1,(function(t){function e(B,z){var ne=B.length;B.push(z);e:for(;0<ne;){var he=ne-1>>>1,ve=B[he];if(0<s(ve,z))B[he]=z,B[ne]=ve,ne=he;else break e}}function n(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var z=B[0],ne=B.pop();if(ne!==z){B[0]=ne;e:for(var he=0,ve=B.length,V=ve>>>1;he<V;){var X=2*(he+1)-1,xe=B[X],we=X+1,Fe=B[we];if(0>s(xe,ne))we<ve&&0>s(Fe,xe)?(B[he]=Fe,B[we]=ne,he=we):(B[he]=xe,B[X]=ne,he=X);else if(we<ve&&0>s(Fe,ne))B[he]=Fe,B[we]=ne,he=we;else break e}}return z}function s(B,z){var ne=B.sortIndex-z.sortIndex;return ne!==0?ne:B.id-z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,v=null,y=3,x=!1,b=!1,E=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(B){for(var z=n(h);z!==null;){if(z.callback===null)a(h);else if(z.startTime<=B)a(h),z.sortIndex=z.expirationTime,e(d,z);else break;z=n(h)}}function C(B){if(E=!1,D(B),!b)if(n(d)!==null)b=!0,F||(F=!0,Q());else{var z=n(h);z!==null&&K(C,z.startTime-B)}}var F=!1,P=-1,R=5,O=-1;function J(){return _?!0:!(t.unstable_now()-O<R)}function G(){if(_=!1,F){var B=t.unstable_now();O=B;var z=!0;try{e:{b=!1,E&&(E=!1,A(P),P=-1),x=!0;var ne=y;try{t:{for(D(B),v=n(d);v!==null&&!(v.expirationTime>B&&J());){var he=v.callback;if(typeof he=="function"){v.callback=null,y=v.priorityLevel;var ve=he(v.expirationTime<=B);if(B=t.unstable_now(),typeof ve=="function"){v.callback=ve,D(B),z=!0;break t}v===n(d)&&a(d),D(B)}else a(d);v=n(d)}if(v!==null)z=!0;else{var V=n(h);V!==null&&K(C,V.startTime-B),z=!1}}break e}finally{v=null,y=ne,x=!1}z=void 0}}finally{z?Q():F=!1}}}var Q;if(typeof w=="function")Q=function(){w(G)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ee=te.port2;te.port1.onmessage=G,Q=function(){ee.postMessage(null)}}else Q=function(){S(G,0)};function K(B,z){P=S(function(){B(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var z=3;break;default:z=y}var ne=y;y=z;try{return B()}finally{y=ne}},t.unstable_requestPaint=function(){_=!0},t.unstable_runWithPriority=function(B,z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=y;y=B;try{return z()}finally{y=ne}},t.unstable_scheduleCallback=function(B,z,ne){var he=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?he+ne:he):ne=he,B){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=ne+ve,B={id:m++,callback:z,priorityLevel:B,startTime:ne,expirationTime:ve,sortIndex:-1},ne>he?(B.sortIndex=ne,e(h,B),n(d)===null&&B===n(h)&&(E?(A(P),P=-1):E=!0,K(C,ne-he))):(B.sortIndex=ve,e(d,B),b||x||(b=!0,F||(F=!0,Q()))),B},t.unstable_shouldYield=J,t.unstable_wrapCallback=function(B){var z=y;return function(){var ne=y;y=z;try{return B.apply(this,arguments)}finally{y=ne}}}})(mm)),mm}var QS;function HC(){return QS||(QS=1,pm.exports=VC()),pm.exports}var gm={exports:{}},kn={};var JS;function GC(){if(JS)return kn;JS=1;var t=sv();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:d,containerInfo:h,implementation:m}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},kn.flushSync=function(d){var h=c.T,m=a.p;try{if(c.T=null,a.p=2,d)return d()}finally{c.T=h,a.p=m,a.d.f()}},kn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},kn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},kn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),y=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:x}):m==="script"&&a.d.X(d,{crossOrigin:v,integrity:y,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},kn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},kn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},kn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},kn.requestFormReset=function(d){a.d.r(d)},kn.unstable_batchedUpdates=function(d,h){return d(h)},kn.useFormState=function(d,h,m){return c.H.useFormState(d,h,m)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.2.4",kn}var eb;function kC(){if(eb)return gm.exports;eb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),gm.exports=GC(),gm.exports}var tb;function WC(){if(tb)return cc;tb=1;var t=HC(),e=sv(),n=kC();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function l(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,(r.flags&4098)!==0&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function c(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function f(i){if(i.tag===31){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function d(i){if(l(i)!==i)throw Error(a(188))}function h(i){var r=i.alternate;if(!r){if(r=l(i),r===null)throw Error(a(188));return r!==i?null:i}for(var o=i,u=r;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return d(p),i;if(g===u)return d(p),r;g=g.sibling}throw Error(a(188))}if(o.return!==u.return)o=p,u=g;else{for(var T=!1,L=p.child;L;){if(L===o){T=!0,o=p,u=g;break}if(L===u){T=!0,u=p,o=g;break}L=L.sibling}if(!T){for(L=g.child;L;){if(L===o){T=!0,o=g,u=p;break}if(L===u){T=!0,u=g,o=p;break}L=L.sibling}if(!T)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?i:r}function m(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=m(i),r!==null)return r;i=i.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var te=Symbol.for("react.client.reference");function ee(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===te?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case E:return"Fragment";case S:return"Profiler";case _:return"StrictMode";case C:return"Suspense";case F:return"SuspenseList";case O:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case b:return"Portal";case w:return i.displayName||"Context";case A:return(i._context.displayName||"Context")+".Consumer";case D:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case P:return r=i.displayName||null,r!==null?r:ee(i.type)||"Memo";case R:r=i._payload,i=i._init;try{return ee(i(r))}catch{}}return null}var K=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},he=[],ve=-1;function V(i){return{current:i}}function X(i){0>ve||(i.current=he[ve],he[ve]=null,ve--)}function xe(i,r){ve++,he[ve]=i.current,i.current=r}var we=V(null),Fe=V(null),ae=V(null),Se=V(null);function ge(i,r){switch(xe(ae,r),xe(Fe,i),xe(we,null),r.nodeType){case 9:case 11:i=(i=r.documentElement)&&(i=i.namespaceURI)?mS(i):0;break;default:if(i=r.tagName,r=r.namespaceURI)r=mS(r),i=gS(r,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}X(we),xe(we,i)}function Ce(){X(we),X(Fe),X(ae)}function De(i){i.memoizedState!==null&&xe(Se,i);var r=we.current,o=gS(r,i.type);r!==o&&(xe(Fe,i),xe(we,o))}function He(i){Fe.current===i&&(X(we),X(Fe)),Se.current===i&&(X(Se),ac._currentValue=ne)}var dt,tt;function it(i){if(dt===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);dt=r&&r[1]||"",tt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dt+i+tt}var St=!1;function ot(i,r){if(!i||St)return"";St=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(me){var ce=me}Reflect.construct(i,[],Me)}else{try{Me.call()}catch(me){ce=me}i.call(Me.prototype)}}else{try{throw Error()}catch(me){ce=me}(Me=i())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(me){if(me&&ce&&typeof me.stack=="string")return[me.stack,ce.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),T=g[0],L=g[1];if(T&&L){var k=T.split(`
`),oe=L.split(`
`);for(p=u=0;u<k.length&&!k[u].includes("DetermineComponentFrameRoot");)u++;for(;p<oe.length&&!oe[p].includes("DetermineComponentFrameRoot");)p++;if(u===k.length||p===oe.length)for(u=k.length-1,p=oe.length-1;1<=u&&0<=p&&k[u]!==oe[p];)p--;for(;1<=u&&0<=p;u--,p--)if(k[u]!==oe[p]){if(u!==1||p!==1)do if(u--,p--,0>p||k[u]!==oe[p]){var _e=`
`+k[u].replace(" at new "," at ");return i.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",i.displayName)),_e}while(1<=u&&0<=p);break}}}finally{St=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?it(o):""}function Jt(i,r){switch(i.tag){case 26:case 27:case 5:return it(i.type);case 16:return it("Lazy");case 13:return i.child!==r&&r!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(i.type,!1);case 11:return ot(i.type.render,!1);case 1:return ot(i.type,!0);case 31:return it("Activity");default:return""}}function W(i){try{var r="",o=null;do r+=Jt(i,o),o=i,i=i.return;while(i);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Ht=Object.prototype.hasOwnProperty,Mt=t.unstable_scheduleCallback,Et=t.unstable_cancelCallback,Ee=t.unstable_shouldYield,U=t.unstable_requestPaint,M=t.unstable_now,H=t.unstable_getCurrentPriorityLevel,$=t.unstable_ImmediatePriority,de=t.unstable_UserBlockingPriority,fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Je=t.log,rt=t.unstable_setDisableYieldValue,Re=null,Te=null;function Ge(i){if(typeof Je=="function"&&rt(i),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Re,i)}catch{}}var Ve=Math.clz32?Math.clz32:Y,ke=Math.log,vt=Math.LN2;function Y(i){return i>>>=0,i===0?32:31-(ke(i)/vt|0)|0}var Ue=256,Le=262144,We=4194304;function Ae(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function ye(i,r,o){var u=i.pendingLanes;if(u===0)return 0;var p=0,g=i.suspendedLanes,T=i.pingedLanes;i=i.warmLanes;var L=u&134217727;return L!==0?(u=L&~g,u!==0?p=Ae(u):(T&=L,T!==0?p=Ae(T):o||(o=L&~i,o!==0&&(p=Ae(o))))):(L=u&~g,L!==0?p=Ae(L):T!==0?p=Ae(T):o||(o=u&~i,o!==0&&(p=Ae(o)))),p===0?0:r!==0&&r!==p&&(r&g)===0&&(g=p&-p,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:p}function qe(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function ct(i,r){switch(i){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xt(){var i=We;return We<<=1,(We&62914560)===0&&(We=4194304),i}function Lt(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function Yn(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function ki(i,r,o,u,p,g){var T=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var L=i.entanglements,k=i.expirationTimes,oe=i.hiddenUpdates;for(o=T&~o;0<o;){var _e=31-Ve(o),Me=1<<_e;L[_e]=0,k[_e]=-1;var ce=oe[_e];if(ce!==null)for(oe[_e]=null,_e=0;_e<ce.length;_e++){var me=ce[_e];me!==null&&(me.lane&=-536870913)}o&=~Me}u!==0&&xl(i,u,0),g!==0&&p===0&&i.tag!==0&&(i.suspendedLanes|=g&~(T&~r))}function xl(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-Ve(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&261930}function Gs(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-Ve(o),p=1<<u;p&r|i[u]&r&&(i[u]|=r),o&=~p}}function fu(i,r){var o=r&-r;return o=(o&42)!==0?1:ks(o),(o&(i.suspendedLanes|r))!==0?0:o}function ks(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function Ws(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function ha(){var i=z.p;return i!==0?i:(i=window.event,i===void 0?32:zS(i.type))}function Xs(i,r){var o=z.p;try{return z.p=i,r()}finally{z.p=o}}var Wi=Math.random().toString(36).slice(2),gn="__reactFiber$"+Wi,wn="__reactProps$"+Wi,Fa="__reactContainer$"+Wi,pr="__reactEvents$"+Wi,du="__reactListeners$"+Wi,hu="__reactHandles$"+Wi,pu="__reactResources$"+Wi,ts="__reactMarker$"+Wi;function _l(i){delete i[gn],delete i[wn],delete i[pr],delete i[du],delete i[hu]}function mr(i){var r=i[gn];if(r)return r;for(var o=i.parentNode;o;){if(r=o[Fa]||o[gn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=MS(i);i!==null;){if(o=i[gn])return o;i=MS(i)}return r}i=o,o=i.parentNode}return null}function gr(i){if(i=i[gn]||i[Fa]){var r=i.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return i}return null}function ns(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function N(i){var r=i[pu];return r||(r=i[pu]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function q(i){i[ts]=!0}var pe=new Set,le={};function re(i,r){Oe(i,r),Oe(i+"Capture",r)}function Oe(i,r){for(le[i]=r,i=0;i<r.length;i++)pe.add(r[i])}var je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},Qe={};function nt(i){return Ht.call(Qe,i)?!0:Ht.call(Be,i)?!1:je.test(i)?Qe[i]=!0:(Be[i]=!0,!1)}function lt(i,r,o){if(nt(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function ht(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function Ye(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function yt(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function an(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rn(i,r,o){var u=Object.getOwnPropertyDescriptor(i.constructor.prototype,r);if(!i.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,g=u.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){o=""+T,g.call(this,T)}}),Object.defineProperty(i,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(T){o=""+T},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function Ut(i){if(!i._valueTracker){var r=an(i)?"checked":"value";i._valueTracker=rn(i,r,""+i[r])}}function Rn(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=an(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Ke(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var $n=/[\n"\\]/g;function ft(i){return i.replace($n,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Kn(i,r,o,u,p,g,T,L){i.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?i.type=T:i.removeAttribute("type"),r!=null?T==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+yt(r)):i.value!==""+yt(r)&&(i.value=""+yt(r)):T!=="submit"&&T!=="reset"||i.removeAttribute("value"),r!=null?Xi(i,T,yt(r)):o!=null?Xi(i,T,yt(o)):u!=null&&i.removeAttribute("value"),p==null&&g!=null&&(i.defaultChecked=!!g),p!=null&&(i.checked=p&&typeof p!="function"&&typeof p!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?i.name=""+yt(L):i.removeAttribute("name")}function hi(i,r,o,u,p,g,T,L){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(i.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null)){Ut(i);return}o=o!=null?""+yt(o):"",r=r!=null?""+yt(r):o,L||r===i.value||(i.value=r),i.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=L?i.checked:!!u,i.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(i.name=T),Ut(i)}function Xi(i,r,o){r==="number"&&Ke(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function pi(i,r,o,u){if(i=i.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<i.length;o++)p=r.hasOwnProperty("$"+i[o].value),i[o].selected!==p&&(i[o].selected=p),p&&u&&(i[o].defaultSelected=!0)}else{for(o=""+yt(o),r=null,p=0;p<i.length;p++){if(i[p].value===o){i[p].selected=!0,u&&(i[p].defaultSelected=!0);return}r!==null||i[p].disabled||(r=i[p])}r!==null&&(r.selected=!0)}}function Gt(i,r,o){if(r!=null&&(r=""+yt(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+yt(o):""}function vn(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(a(92));if(K(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=yt(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u),Ut(i)}function Zn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var yn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ji(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||yn.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function Ia(i,r,o){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&ji(i,p,u)}else for(var g in r)r.hasOwnProperty(g)&&ji(i,g,r[g])}function js(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mu(i){return Nw.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function Ba(){}var lh=null;function ch(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var qs=null,Ys=null;function py(i){var r=gr(i);if(r&&(i=r.stateNode)){var o=i[wn]||null;e:switch(i=r.stateNode,r.type){case"input":if(Kn(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ft(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var p=u[wn]||null;if(!p)throw Error(a(90));Kn(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&Rn(u)}break e;case"textarea":Gt(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&pi(i,!!o.multiple,r,!1)}}}var uh=!1;function my(i,r,o){if(uh)return i(r,o);uh=!0;try{var u=i(r);return u}finally{if(uh=!1,(qs!==null||Ys!==null)&&(nf(),qs&&(r=qs,i=Ys,Ys=qs=null,py(r),i)))for(r=0;r<i.length;r++)py(i[r])}}function Sl(i,r){var o=i.stateNode;if(o===null)return null;var u=o[wn]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(a(231,r,typeof o));return o}var za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fh=!1;if(za)try{var bl={};Object.defineProperty(bl,"passive",{get:function(){fh=!0}}),window.addEventListener("test",bl,bl),window.removeEventListener("test",bl,bl)}catch{fh=!1}var vr=null,dh=null,gu=null;function gy(){if(gu)return gu;var i,r=dh,o=r.length,u,p="value"in vr?vr.value:vr.textContent,g=p.length;for(i=0;i<o&&r[i]===p[i];i++);var T=o-i;for(u=1;u<=T&&r[o-u]===p[g-u];u++);return gu=p.slice(i,1<u?1-u:void 0)}function vu(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function yu(){return!0}function vy(){return!1}function ii(i){function r(o,u,p,g,T){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var L in i)i.hasOwnProperty(L)&&(o=i[L],this[L]=o?o(g):g[L]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?yu:vy,this.isPropagationStopped=vy,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),r}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=ii(is),Ml=v({},is,{view:0,detail:0}),Uw=ii(Ml),hh,ph,El,_u=v({},Ml,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==El&&(El&&i.type==="mousemove"?(hh=i.screenX-El.screenX,ph=i.screenY-El.screenY):ph=hh=0,El=i),hh)},movementY:function(i){return"movementY"in i?i.movementY:ph}}),yy=ii(_u),Pw=v({},_u,{dataTransfer:0}),Ow=ii(Pw),Fw=v({},Ml,{relatedTarget:0}),mh=ii(Fw),Iw=v({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=ii(Iw),zw=v({},is,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Vw=ii(zw),Hw=v({},is,{data:0}),xy=ii(Hw),Gw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ww={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xw(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=Ww[i])?!!r[i]:!1}function gh(){return Xw}var jw=v({},Ml,{key:function(i){if(i.key){var r=Gw[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=vu(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?kw[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(i){return i.type==="keypress"?vu(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?vu(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),qw=ii(jw),Yw=v({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_y=ii(Yw),$w=v({},Ml,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),Kw=ii($w),Zw=v({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qw=ii(Zw),Jw=v({},_u,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),eR=ii(Jw),tR=v({},is,{newState:0,oldState:0}),nR=ii(tR),iR=[9,13,27,32],vh=za&&"CompositionEvent"in window,Tl=null;za&&"documentMode"in document&&(Tl=document.documentMode);var aR=za&&"TextEvent"in window&&!Tl,Sy=za&&(!vh||Tl&&8<Tl&&11>=Tl),by=" ",My=!1;function Ey(i,r){switch(i){case"keyup":return iR.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $s=!1;function rR(i,r){switch(i){case"compositionend":return Ty(r);case"keypress":return r.which!==32?null:(My=!0,by);case"textInput":return i=r.data,i===by&&My?null:i;default:return null}}function sR(i,r){if($s)return i==="compositionend"||!vh&&Ey(i,r)?(i=gy(),gu=dh=vr=null,$s=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Sy&&r.locale!=="ko"?null:r.data;default:return null}}var oR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ay(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!oR[i.type]:r==="textarea"}function wy(i,r,o,u){qs?Ys?Ys.push(u):Ys=[u]:qs=u,r=uf(r,"onChange"),0<r.length&&(o=new xu("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Al=null,wl=null;function lR(i){cS(i,0)}function Su(i){var r=ns(i);if(Rn(r))return i}function Ry(i,r){if(i==="change")return r}var Cy=!1;if(za){var yh;if(za){var xh="oninput"in document;if(!xh){var Dy=document.createElement("div");Dy.setAttribute("oninput","return;"),xh=typeof Dy.oninput=="function"}yh=xh}else yh=!1;Cy=yh&&(!document.documentMode||9<document.documentMode)}function Ly(){Al&&(Al.detachEvent("onpropertychange",Ny),wl=Al=null)}function Ny(i){if(i.propertyName==="value"&&Su(wl)){var r=[];wy(r,wl,i,ch(i)),my(lR,r)}}function cR(i,r,o){i==="focusin"?(Ly(),Al=r,wl=o,Al.attachEvent("onpropertychange",Ny)):i==="focusout"&&Ly()}function uR(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Su(wl)}function fR(i,r){if(i==="click")return Su(r)}function dR(i,r){if(i==="input"||i==="change")return Su(r)}function hR(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var mi=typeof Object.is=="function"?Object.is:hR;function Rl(i,r){if(mi(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Ht.call(r,p)||!mi(i[p],r[p]))return!1}return!0}function Uy(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Py(i,r){var o=Uy(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Uy(o)}}function Oy(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?Oy(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function Fy(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Ke(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Ke(i.document)}return r}function _h(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}var pR=za&&"documentMode"in document&&11>=document.documentMode,Ks=null,Sh=null,Cl=null,bh=!1;function Iy(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bh||Ks==null||Ks!==Ke(u)||(u=Ks,"selectionStart"in u&&_h(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Cl&&Rl(Cl,u)||(Cl=u,u=uf(Sh,"onSelect"),0<u.length&&(r=new xu("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Ks)))}function as(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Zs={animationend:as("Animation","AnimationEnd"),animationiteration:as("Animation","AnimationIteration"),animationstart:as("Animation","AnimationStart"),transitionrun:as("Transition","TransitionRun"),transitionstart:as("Transition","TransitionStart"),transitioncancel:as("Transition","TransitionCancel"),transitionend:as("Transition","TransitionEnd")},Mh={},By={};za&&(By=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function rs(i){if(Mh[i])return Mh[i];if(!Zs[i])return i;var r=Zs[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in By)return Mh[i]=r[o];return i}var zy=rs("animationend"),Vy=rs("animationiteration"),Hy=rs("animationstart"),mR=rs("transitionrun"),gR=rs("transitionstart"),vR=rs("transitioncancel"),Gy=rs("transitionend"),ky=new Map,Eh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eh.push("scrollEnd");function qi(i,r){ky.set(i,r),re(r,[i])}var bu=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},Ai=[],Qs=0,Th=0;function Mu(){for(var i=Qs,r=Th=Qs=0;r<i;){var o=Ai[r];Ai[r++]=null;var u=Ai[r];Ai[r++]=null;var p=Ai[r];Ai[r++]=null;var g=Ai[r];if(Ai[r++]=null,u!==null&&p!==null){var T=u.pending;T===null?p.next=p:(p.next=T.next,T.next=p),u.pending=p}g!==0&&Wy(o,p,g)}}function Eu(i,r,o,u){Ai[Qs++]=i,Ai[Qs++]=r,Ai[Qs++]=o,Ai[Qs++]=u,Th|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Ah(i,r,o,u){return Eu(i,r,o,u),Tu(i)}function ss(i,r){return Eu(i,null,null,r),Tu(i)}function Wy(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var p=!1,g=i.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(i=g.stateNode,i===null||i._visibility&1||(p=!0)),i=g,g=g.return;return i.tag===3?(g=i.stateNode,p&&r!==null&&(p=31-Ve(o),i=g.hiddenUpdates,u=i[p],u===null?i[p]=[r]:u.push(r),r.lane=o|536870912),g):null}function Tu(i){if(50<Zl)throw Zl=0,Op=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Js={};function yR(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(i,r,o,u){return new yR(i,r,o,u)}function wh(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Va(i,r){var o=i.alternate;return o===null?(o=gi(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&65011712,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function Xy(i,r){i.flags&=65011714;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Au(i,r,o,u,p,g){var T=0;if(u=i,typeof i=="function")wh(i)&&(T=1);else if(typeof i=="string")T=MC(i,o,we.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case O:return i=gi(31,o,r,p),i.elementType=O,i.lanes=g,i;case E:return os(o.children,p,g,r);case _:T=8,p|=24;break;case S:return i=gi(12,o,r,p|2),i.elementType=S,i.lanes=g,i;case C:return i=gi(13,o,r,p),i.elementType=C,i.lanes=g,i;case F:return i=gi(19,o,r,p),i.elementType=F,i.lanes=g,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case w:T=10;break e;case A:T=9;break e;case D:T=11;break e;case P:T=14;break e;case R:T=16,u=null;break e}T=29,o=Error(a(130,i===null?"null":typeof i,"")),u=null}return r=gi(T,o,r,p),r.elementType=i,r.type=u,r.lanes=g,r}function os(i,r,o,u){return i=gi(7,i,u,r),i.lanes=o,i}function Rh(i,r,o){return i=gi(6,i,null,r),i.lanes=o,i}function jy(i){var r=gi(18,null,null,0);return r.stateNode=i,r}function Ch(i,r,o){return r=gi(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}var qy=new WeakMap;function wi(i,r){if(typeof i=="object"&&i!==null){var o=qy.get(i);return o!==void 0?o:(r={value:i,source:r,stack:W(r)},qy.set(i,r),r)}return{value:i,source:r,stack:W(r)}}var eo=[],to=0,wu=null,Dl=0,Ri=[],Ci=0,yr=null,pa=1,ma="";function Ha(i,r){eo[to++]=Dl,eo[to++]=wu,wu=i,Dl=r}function Yy(i,r,o){Ri[Ci++]=pa,Ri[Ci++]=ma,Ri[Ci++]=yr,yr=i;var u=pa;i=ma;var p=32-Ve(u)-1;u&=~(1<<p),o+=1;var g=32-Ve(r)+p;if(30<g){var T=p-p%5;g=(u&(1<<T)-1).toString(32),u>>=T,p-=T,pa=1<<32-Ve(r)+p|o<<p|u,ma=g+i}else pa=1<<g|o<<p|u,ma=i}function Dh(i){i.return!==null&&(Ha(i,1),Yy(i,1,0))}function Lh(i){for(;i===wu;)wu=eo[--to],eo[to]=null,Dl=eo[--to],eo[to]=null;for(;i===yr;)yr=Ri[--Ci],Ri[Ci]=null,ma=Ri[--Ci],Ri[Ci]=null,pa=Ri[--Ci],Ri[Ci]=null}function $y(i,r){Ri[Ci++]=pa,Ri[Ci++]=ma,Ri[Ci++]=yr,pa=r.id,ma=r.overflow,yr=i}var Fn=null,tn=null,Ct=!1,xr=null,Di=!1,Nh=Error(a(519));function _r(i){var r=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ll(wi(r,i)),Nh}function Ky(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[gn]=i,r[wn]=u,o){case"dialog":At("cancel",r),At("close",r);break;case"iframe":case"object":case"embed":At("load",r);break;case"video":case"audio":for(o=0;o<Jl.length;o++)At(Jl[o],r);break;case"source":At("error",r);break;case"img":case"image":case"link":At("error",r),At("load",r);break;case"details":At("toggle",r);break;case"input":At("invalid",r),hi(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":At("invalid",r);break;case"textarea":At("invalid",r),vn(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||hS(r.textContent,o)?(u.popover!=null&&(At("beforetoggle",r),At("toggle",r)),u.onScroll!=null&&At("scroll",r),u.onScrollEnd!=null&&At("scrollend",r),u.onClick!=null&&(r.onclick=Ba),r=!0):r=!1,r||_r(i,!0)}function Zy(i){for(Fn=i.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Fn=Fn.return}}function no(i){if(i!==Fn)return!1;if(!Ct)return Zy(i),Ct=!0,!1;var r=i.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||Kp(i.type,i.memoizedProps)),o=!o),o&&tn&&_r(i),Zy(i),r===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));tn=bS(i)}else if(r===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));tn=bS(i)}else r===27?(r=tn,Pr(i.type)?(i=tm,tm=null,tn=i):tn=r):tn=Fn?Ni(i.stateNode.nextSibling):null;return!0}function ls(){tn=Fn=null,Ct=!1}function Uh(){var i=xr;return i!==null&&(oi===null?oi=i:oi.push.apply(oi,i),xr=null),i}function Ll(i){xr===null?xr=[i]:xr.push(i)}var Ph=V(null),cs=null,Ga=null;function Sr(i,r,o){xe(Ph,r._currentValue),r._currentValue=o}function ka(i){i._currentValue=Ph.current,X(Ph)}function Oh(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function Fh(i,r,o,u){var p=i.child;for(p!==null&&(p.return=i);p!==null;){var g=p.dependencies;if(g!==null){var T=p.child;g=g.firstContext;e:for(;g!==null;){var L=g;g=p;for(var k=0;k<r.length;k++)if(L.context===r[k]){g.lanes|=o,L=g.alternate,L!==null&&(L.lanes|=o),Oh(g.return,o,i),u||(T=null);break e}g=L.next}}else if(p.tag===18){if(T=p.return,T===null)throw Error(a(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),Oh(T,o,i),T=null}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}}function io(i,r,o,u){i=null;for(var p=r,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var T=p.alternate;if(T===null)throw Error(a(387));if(T=T.memoizedProps,T!==null){var L=p.type;mi(p.pendingProps.value,T.value)||(i!==null?i.push(L):i=[L])}}else if(p===Se.current){if(T=p.alternate,T===null)throw Error(a(387));T.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(i!==null?i.push(ac):i=[ac])}p=p.return}i!==null&&Fh(r,i,o,u),r.flags|=262144}function Ru(i){for(i=i.firstContext;i!==null;){if(!mi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function us(i){cs=i,Ga=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function In(i){return Qy(cs,i)}function Cu(i,r){return cs===null&&us(i),Qy(i,r)}function Qy(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ga===null){if(i===null)throw Error(a(308));Ga=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else Ga=Ga.next=r;return o}var xR=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},_R=t.unstable_scheduleCallback,SR=t.unstable_NormalPriority,xn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ih(){return{controller:new xR,data:new Map,refCount:0}}function Nl(i){i.refCount--,i.refCount===0&&_R(SR,function(){i.controller.abort()})}var Ul=null,Bh=0,ao=0,ro=null;function bR(i,r){if(Ul===null){var o=Ul=[];Bh=0,ao=Hp(),ro={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Bh++,r.then(Jy,Jy),r}function Jy(){if(--Bh===0&&Ul!==null){ro!==null&&(ro.status="fulfilled");var i=Ul;Ul=null,ao=0,ro=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function MR(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var ex=B.S;B.S=function(i,r){I_=M(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&bR(i,r),ex!==null&&ex(i,r)};var fs=V(null);function zh(){var i=fs.current;return i!==null?i:en.pooledCache}function Du(i,r){r===null?xe(fs,fs.current):xe(fs,r.pool)}function tx(){var i=zh();return i===null?null:{parent:xn._currentValue,pool:i}}var so=Error(a(460)),Vh=Error(a(474)),Lu=Error(a(542)),Nu={then:function(){}};function nx(i){return i=i.status,i==="fulfilled"||i==="rejected"}function ix(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Ba,Ba),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,rx(i),i;default:if(typeof r.status=="string")r.then(Ba,Ba);else{if(i=en,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,rx(i),i}throw hs=r,so}}function ds(i){try{var r=i._init;return r(i._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(hs=o,so):o}}var hs=null;function ax(){if(hs===null)throw Error(a(459));var i=hs;return hs=null,i}function rx(i){if(i===so||i===Lu)throw Error(a(483))}var oo=null,Pl=0;function Uu(i){var r=Pl;return Pl+=1,oo===null&&(oo=[]),ix(oo,i,r)}function Ol(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function Pu(i,r){throw r.$$typeof===y?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function sx(i){function r(Z,j){if(i){var se=Z.deletions;se===null?(Z.deletions=[j],Z.flags|=16):se.push(j)}}function o(Z,j){if(!i)return null;for(;j!==null;)r(Z,j),j=j.sibling;return null}function u(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function p(Z,j){return Z=Va(Z,j),Z.index=0,Z.sibling=null,Z}function g(Z,j,se){return Z.index=se,i?(se=Z.alternate,se!==null?(se=se.index,se<j?(Z.flags|=67108866,j):se):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function T(Z){return i&&Z.alternate===null&&(Z.flags|=67108866),Z}function L(Z,j,se,be){return j===null||j.tag!==6?(j=Rh(se,Z.mode,be),j.return=Z,j):(j=p(j,se),j.return=Z,j)}function k(Z,j,se,be){var at=se.type;return at===E?_e(Z,j,se.props.children,be,se.key):j!==null&&(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===R&&ds(at)===j.type)?(j=p(j,se.props),Ol(j,se),j.return=Z,j):(j=Au(se.type,se.key,se.props,null,Z.mode,be),Ol(j,se),j.return=Z,j)}function oe(Z,j,se,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=Ch(se,Z.mode,be),j.return=Z,j):(j=p(j,se.children||[]),j.return=Z,j)}function _e(Z,j,se,be,at){return j===null||j.tag!==7?(j=os(se,Z.mode,be,at),j.return=Z,j):(j=p(j,se),j.return=Z,j)}function Me(Z,j,se){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Rh(""+j,Z.mode,se),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return se=Au(j.type,j.key,j.props,null,Z.mode,se),Ol(se,j),se.return=Z,se;case b:return j=Ch(j,Z.mode,se),j.return=Z,j;case R:return j=ds(j),Me(Z,j,se)}if(K(j)||Q(j))return j=os(j,Z.mode,se,null),j.return=Z,j;if(typeof j.then=="function")return Me(Z,Uu(j),se);if(j.$$typeof===w)return Me(Z,Cu(Z,j),se);Pu(Z,j)}return null}function ce(Z,j,se,be){var at=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return at!==null?null:L(Z,j,""+se,be);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case x:return se.key===at?k(Z,j,se,be):null;case b:return se.key===at?oe(Z,j,se,be):null;case R:return se=ds(se),ce(Z,j,se,be)}if(K(se)||Q(se))return at!==null?null:_e(Z,j,se,be,null);if(typeof se.then=="function")return ce(Z,j,Uu(se),be);if(se.$$typeof===w)return ce(Z,j,Cu(Z,se),be);Pu(Z,se)}return null}function me(Z,j,se,be,at){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return Z=Z.get(se)||null,L(j,Z,""+be,at);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case x:return Z=Z.get(be.key===null?se:be.key)||null,k(j,Z,be,at);case b:return Z=Z.get(be.key===null?se:be.key)||null,oe(j,Z,be,at);case R:return be=ds(be),me(Z,j,se,be,at)}if(K(be)||Q(be))return Z=Z.get(se)||null,_e(j,Z,be,at,null);if(typeof be.then=="function")return me(Z,j,se,Uu(be),at);if(be.$$typeof===w)return me(Z,j,se,Cu(j,be),at);Pu(j,be)}return null}function $e(Z,j,se,be){for(var at=null,Pt=null,et=j,xt=j=0,Rt=null;et!==null&&xt<se.length;xt++){et.index>xt?(Rt=et,et=null):Rt=et.sibling;var Ot=ce(Z,et,se[xt],be);if(Ot===null){et===null&&(et=Rt);break}i&&et&&Ot.alternate===null&&r(Z,et),j=g(Ot,j,xt),Pt===null?at=Ot:Pt.sibling=Ot,Pt=Ot,et=Rt}if(xt===se.length)return o(Z,et),Ct&&Ha(Z,xt),at;if(et===null){for(;xt<se.length;xt++)et=Me(Z,se[xt],be),et!==null&&(j=g(et,j,xt),Pt===null?at=et:Pt.sibling=et,Pt=et);return Ct&&Ha(Z,xt),at}for(et=u(et);xt<se.length;xt++)Rt=me(et,Z,xt,se[xt],be),Rt!==null&&(i&&Rt.alternate!==null&&et.delete(Rt.key===null?xt:Rt.key),j=g(Rt,j,xt),Pt===null?at=Rt:Pt.sibling=Rt,Pt=Rt);return i&&et.forEach(function(zr){return r(Z,zr)}),Ct&&Ha(Z,xt),at}function st(Z,j,se,be){if(se==null)throw Error(a(151));for(var at=null,Pt=null,et=j,xt=j=0,Rt=null,Ot=se.next();et!==null&&!Ot.done;xt++,Ot=se.next()){et.index>xt?(Rt=et,et=null):Rt=et.sibling;var zr=ce(Z,et,Ot.value,be);if(zr===null){et===null&&(et=Rt);break}i&&et&&zr.alternate===null&&r(Z,et),j=g(zr,j,xt),Pt===null?at=zr:Pt.sibling=zr,Pt=zr,et=Rt}if(Ot.done)return o(Z,et),Ct&&Ha(Z,xt),at;if(et===null){for(;!Ot.done;xt++,Ot=se.next())Ot=Me(Z,Ot.value,be),Ot!==null&&(j=g(Ot,j,xt),Pt===null?at=Ot:Pt.sibling=Ot,Pt=Ot);return Ct&&Ha(Z,xt),at}for(et=u(et);!Ot.done;xt++,Ot=se.next())Ot=me(et,Z,xt,Ot.value,be),Ot!==null&&(i&&Ot.alternate!==null&&et.delete(Ot.key===null?xt:Ot.key),j=g(Ot,j,xt),Pt===null?at=Ot:Pt.sibling=Ot,Pt=Ot);return i&&et.forEach(function(PC){return r(Z,PC)}),Ct&&Ha(Z,xt),at}function Zt(Z,j,se,be){if(typeof se=="object"&&se!==null&&se.type===E&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case x:e:{for(var at=se.key;j!==null;){if(j.key===at){if(at=se.type,at===E){if(j.tag===7){o(Z,j.sibling),be=p(j,se.props.children),be.return=Z,Z=be;break e}}else if(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===R&&ds(at)===j.type){o(Z,j.sibling),be=p(j,se.props),Ol(be,se),be.return=Z,Z=be;break e}o(Z,j);break}else r(Z,j);j=j.sibling}se.type===E?(be=os(se.props.children,Z.mode,be,se.key),be.return=Z,Z=be):(be=Au(se.type,se.key,se.props,null,Z.mode,be),Ol(be,se),be.return=Z,Z=be)}return T(Z);case b:e:{for(at=se.key;j!==null;){if(j.key===at)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){o(Z,j.sibling),be=p(j,se.children||[]),be.return=Z,Z=be;break e}else{o(Z,j);break}else r(Z,j);j=j.sibling}be=Ch(se,Z.mode,be),be.return=Z,Z=be}return T(Z);case R:return se=ds(se),Zt(Z,j,se,be)}if(K(se))return $e(Z,j,se,be);if(Q(se)){if(at=Q(se),typeof at!="function")throw Error(a(150));return se=at.call(se),st(Z,j,se,be)}if(typeof se.then=="function")return Zt(Z,j,Uu(se),be);if(se.$$typeof===w)return Zt(Z,j,Cu(Z,se),be);Pu(Z,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,j!==null&&j.tag===6?(o(Z,j.sibling),be=p(j,se),be.return=Z,Z=be):(o(Z,j),be=Rh(se,Z.mode,be),be.return=Z,Z=be),T(Z)):o(Z,j)}return function(Z,j,se,be){try{Pl=0;var at=Zt(Z,j,se,be);return oo=null,at}catch(et){if(et===so||et===Lu)throw et;var Pt=gi(29,et,null,Z.mode);return Pt.lanes=be,Pt.return=Z,Pt}}}var ps=sx(!0),ox=sx(!1),br=!1;function Hh(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gh(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Mr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function Er(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=Tu(i),Wy(i,null,o),r}return Eu(i,u,r,o),Tu(i)}function Fl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Gs(i,o)}}function kh(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?p=g=r:g=g.next=r}else p=g=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var Wh=!1;function Il(){if(Wh){var i=ro;if(i!==null)throw i}}function Bl(i,r,o,u){Wh=!1;var p=i.updateQueue;br=!1;var g=p.firstBaseUpdate,T=p.lastBaseUpdate,L=p.shared.pending;if(L!==null){p.shared.pending=null;var k=L,oe=k.next;k.next=null,T===null?g=oe:T.next=oe,T=k;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==T&&(L===null?_e.firstBaseUpdate=oe:L.next=oe,_e.lastBaseUpdate=k))}if(g!==null){var Me=p.baseState;T=0,_e=oe=k=null,L=g;do{var ce=L.lane&-536870913,me=ce!==L.lane;if(me?(wt&ce)===ce:(u&ce)===ce){ce!==0&&ce===ao&&(Wh=!0),_e!==null&&(_e=_e.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});e:{var $e=i,st=L;ce=r;var Zt=o;switch(st.tag){case 1:if($e=st.payload,typeof $e=="function"){Me=$e.call(Zt,Me,ce);break e}Me=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=st.payload,ce=typeof $e=="function"?$e.call(Zt,Me,ce):$e,ce==null)break e;Me=v({},Me,ce);break e;case 2:br=!0}}ce=L.callback,ce!==null&&(i.flags|=64,me&&(i.flags|=8192),me=p.callbacks,me===null?p.callbacks=[ce]:me.push(ce))}else me={lane:ce,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(oe=_e=me,k=Me):_e=_e.next=me,T|=ce;if(L=L.next,L===null){if(L=p.shared.pending,L===null)break;me=L,L=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);_e===null&&(k=Me),p.baseState=k,p.firstBaseUpdate=oe,p.lastBaseUpdate=_e,g===null&&(p.shared.lanes=0),Cr|=T,i.lanes=T,i.memoizedState=Me}}function lx(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function cx(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)lx(o[i],r)}var lo=V(null),Ou=V(0);function ux(i,r){i=Qa,xe(Ou,i),xe(lo,r),Qa=i|r.baseLanes}function Xh(){xe(Ou,Qa),xe(lo,lo.current)}function jh(){Qa=Ou.current,X(lo),X(Ou)}var vi=V(null),Li=null;function Tr(i){var r=i.alternate;xe(hn,hn.current&1),xe(vi,i),Li===null&&(r===null||lo.current!==null||r.memoizedState!==null)&&(Li=i)}function qh(i){xe(hn,hn.current),xe(vi,i),Li===null&&(Li=i)}function fx(i){i.tag===22?(xe(hn,hn.current),xe(vi,i),Li===null&&(Li=i)):Ar()}function Ar(){xe(hn,hn.current),xe(vi,vi.current)}function yi(i){X(vi),Li===i&&(Li=null),X(hn)}var hn=V(0);function Fu(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Jp(o)||em(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Wa=0,gt=null,$t=null,_n=null,Iu=!1,co=!1,ms=!1,Bu=0,zl=0,uo=null,ER=0;function cn(){throw Error(a(321))}function Yh(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!mi(i[o],r[o]))return!1;return!0}function $h(i,r,o,u,p,g){return Wa=g,gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,B.H=i===null||i.memoizedState===null?Yx:up,ms=!1,g=o(u,p),ms=!1,co&&(g=hx(r,o,u,p)),dx(i),g}function dx(i){B.H=Gl;var r=$t!==null&&$t.next!==null;if(Wa=0,_n=$t=gt=null,Iu=!1,zl=0,uo=null,r)throw Error(a(300));i===null||Sn||(i=i.dependencies,i!==null&&Ru(i)&&(Sn=!0))}function hx(i,r,o,u){gt=i;var p=0;do{if(co&&(uo=null),zl=0,co=!1,25<=p)throw Error(a(301));if(p+=1,_n=$t=null,i.updateQueue!=null){var g=i.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}B.H=$x,g=r(o,u)}while(co);return g}function TR(){var i=B.H,r=i.useState()[0];return r=typeof r.then=="function"?Vl(r):r,i=i.useState()[0],($t!==null?$t.memoizedState:null)!==i&&(gt.flags|=1024),r}function Kh(){var i=Bu!==0;return Bu=0,i}function Zh(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Qh(i){if(Iu){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Iu=!1}Wa=0,_n=$t=gt=null,co=!1,zl=Bu=0,uo=null}function Qn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?gt.memoizedState=_n=i:_n=_n.next=i,_n}function pn(){if($t===null){var i=gt.alternate;i=i!==null?i.memoizedState:null}else i=$t.next;var r=_n===null?gt.memoizedState:_n.next;if(r!==null)_n=r,$t=i;else{if(i===null)throw gt.alternate===null?Error(a(467)):Error(a(310));$t=i,i={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},_n===null?gt.memoizedState=_n=i:_n=_n.next=i}return _n}function zu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(i){var r=zl;return zl+=1,uo===null&&(uo=[]),i=ix(uo,i,r),r=gt,(_n===null?r.memoizedState:_n.next)===null&&(r=r.alternate,B.H=r===null||r.memoizedState===null?Yx:up),i}function Vu(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Vl(i);if(i.$$typeof===w)return In(i)}throw Error(a(438,String(i)))}function Jh(i){var r=null,o=gt.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=gt.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=zu(),gt.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=J;return r.index++,o}function Xa(i,r){return typeof r=="function"?r(i):r}function Hu(i){var r=pn();return ep(r,$t,i)}function ep(i,r,o){var u=i.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var p=i.baseQueue,g=u.pending;if(g!==null){if(p!==null){var T=p.next;p.next=g.next,g.next=T}r.baseQueue=p=g,u.pending=null}if(g=i.baseState,p===null)i.memoizedState=g;else{r=p.next;var L=T=null,k=null,oe=r,_e=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(wt&Me)===Me:(Wa&Me)===Me){var ce=oe.revertLane;if(ce===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===ao&&(_e=!0);else if((Wa&ce)===ce){oe=oe.next,ce===ao&&(_e=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},k===null?(L=k=Me,T=g):k=k.next=Me,gt.lanes|=ce,Cr|=ce;Me=oe.action,ms&&o(g,Me),g=oe.hasEagerState?oe.eagerState:o(g,Me)}else ce={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},k===null?(L=k=ce,T=g):k=k.next=ce,gt.lanes|=Me,Cr|=Me;oe=oe.next}while(oe!==null&&oe!==r);if(k===null?T=g:k.next=L,!mi(g,i.memoizedState)&&(Sn=!0,_e&&(o=ro,o!==null)))throw o;i.memoizedState=g,i.baseState=T,i.baseQueue=k,u.lastRenderedState=g}return p===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function tp(i){var r=pn(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var u=o.dispatch,p=o.pending,g=r.memoizedState;if(p!==null){o.pending=null;var T=p=p.next;do g=i(g,T.action),T=T.next;while(T!==p);mi(g,r.memoizedState)||(Sn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,u]}function px(i,r,o){var u=gt,p=pn(),g=Ct;if(g){if(o===void 0)throw Error(a(407));o=o()}else o=r();var T=!mi(($t||p).memoizedState,o);if(T&&(p.memoizedState=o,Sn=!0),p=p.queue,ap(vx.bind(null,u,p,i),[i]),p.getSnapshot!==r||T||_n!==null&&_n.memoizedState.tag&1){if(u.flags|=2048,fo(9,{destroy:void 0},gx.bind(null,u,p,o,r),null),en===null)throw Error(a(349));g||(Wa&127)!==0||mx(u,r,o)}return o}function mx(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=gt.updateQueue,r===null?(r=zu(),gt.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function gx(i,r,o,u){r.value=o,r.getSnapshot=u,yx(r)&&xx(i)}function vx(i,r,o){return o(function(){yx(r)&&xx(i)})}function yx(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!mi(i,o)}catch{return!0}}function xx(i){var r=ss(i,2);r!==null&&li(r,i,2)}function np(i){var r=Qn();if(typeof i=="function"){var o=i;if(i=o(),ms){Ge(!0);try{o()}finally{Ge(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:i},r}function _x(i,r,o,u){return i.baseState=o,ep(i,$t,typeof u=="function"?u:Xa)}function AR(i,r,o,u,p){if(Wu(i))throw Error(a(485));if(i=r.action,i!==null){var g={payload:p,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};B.T!==null?o(!0):g.isTransition=!1,u(g),o=r.pending,o===null?(g.next=r.pending=g,Sx(r,g)):(g.next=o.next,r.pending=o.next=g)}}function Sx(i,r){var o=r.action,u=r.payload,p=i.state;if(r.isTransition){var g=B.T,T={};B.T=T;try{var L=o(p,u),k=B.S;k!==null&&k(T,L),bx(i,r,L)}catch(oe){ip(i,r,oe)}finally{g!==null&&T.types!==null&&(g.types=T.types),B.T=g}}else try{g=o(p,u),bx(i,r,g)}catch(oe){ip(i,r,oe)}}function bx(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Mx(i,r,u)},function(u){return ip(i,r,u)}):Mx(i,r,o)}function Mx(i,r,o){r.status="fulfilled",r.value=o,Ex(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,Sx(i,o)))}function ip(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Ex(r),r=r.next;while(r!==u)}i.action=null}function Ex(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function Tx(i,r){return r}function Ax(i,r){if(Ct){var o=en.formState;if(o!==null){e:{var u=gt;if(Ct){if(tn){t:{for(var p=tn,g=Di;p.nodeType!==8;){if(!g){p=null;break t}if(p=Ni(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){tn=Ni(p.nextSibling),u=p.data==="F!";break e}}_r(u)}u=!1}u&&(r=o[0])}}return o=Qn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tx,lastRenderedState:r},o.queue=u,o=Xx.bind(null,gt,u),u.dispatch=o,u=np(!1),g=cp.bind(null,gt,!1,u.queue),u=Qn(),p={state:r,dispatch:null,action:i,pending:null},u.queue=p,o=AR.bind(null,gt,p,g,o),p.dispatch=o,u.memoizedState=i,[r,o,!1]}function wx(i){var r=pn();return Rx(r,$t,i)}function Rx(i,r,o){if(r=ep(i,r,Tx)[0],i=Hu(Xa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Vl(r)}catch(T){throw T===so?Lu:T}else u=r;r=pn();var p=r.queue,g=p.dispatch;return o!==r.memoizedState&&(gt.flags|=2048,fo(9,{destroy:void 0},wR.bind(null,p,o),null)),[u,g,i]}function wR(i,r){i.action=r}function Cx(i){var r=pn(),o=$t;if(o!==null)return Rx(r,o,i);pn(),r=r.memoizedState,o=pn();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function fo(i,r,o,u){return i={tag:i,create:o,deps:u,inst:r,next:null},r=gt.updateQueue,r===null&&(r=zu(),gt.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Dx(){return pn().memoizedState}function Gu(i,r,o,u){var p=Qn();gt.flags|=i,p.memoizedState=fo(1|r,{destroy:void 0},o,u===void 0?null:u)}function ku(i,r,o,u){var p=pn();u=u===void 0?null:u;var g=p.memoizedState.inst;$t!==null&&u!==null&&Yh(u,$t.memoizedState.deps)?p.memoizedState=fo(r,g,o,u):(gt.flags|=i,p.memoizedState=fo(1|r,g,o,u))}function Lx(i,r){Gu(8390656,8,i,r)}function ap(i,r){ku(2048,8,i,r)}function RR(i){gt.flags|=4;var r=gt.updateQueue;if(r===null)r=zu(),gt.updateQueue=r,r.events=[i];else{var o=r.events;o===null?r.events=[i]:o.push(i)}}function Nx(i){var r=pn().memoizedState;return RR({ref:r,nextImpl:i}),function(){if((It&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}function Ux(i,r){return ku(4,2,i,r)}function Px(i,r){return ku(4,4,i,r)}function Ox(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Fx(i,r,o){o=o!=null?o.concat([i]):null,ku(4,4,Ox.bind(null,r,i),o)}function rp(){}function Ix(i,r){var o=pn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Yh(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function Bx(i,r){var o=pn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Yh(r,u[1]))return u[0];if(u=i(),ms){Ge(!0);try{i()}finally{Ge(!1)}}return o.memoizedState=[u,r],u}function sp(i,r,o){return o===void 0||(Wa&1073741824)!==0&&(wt&261930)===0?i.memoizedState=r:(i.memoizedState=o,i=z_(),gt.lanes|=i,Cr|=i,o)}function zx(i,r,o,u){return mi(o,r)?o:lo.current!==null?(i=sp(i,o,u),mi(i,r)||(Sn=!0),i):(Wa&42)===0||(Wa&1073741824)!==0&&(wt&261930)===0?(Sn=!0,i.memoizedState=o):(i=z_(),gt.lanes|=i,Cr|=i,r)}function Vx(i,r,o,u,p){var g=z.p;z.p=g!==0&&8>g?g:8;var T=B.T,L={};B.T=L,cp(i,!1,r,o);try{var k=p(),oe=B.S;if(oe!==null&&oe(L,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var _e=MR(k,u);Hl(i,r,_e,Si(i))}else Hl(i,r,u,Si(i))}catch(Me){Hl(i,r,{then:function(){},status:"rejected",reason:Me},Si())}finally{z.p=g,T!==null&&L.types!==null&&(T.types=L.types),B.T=T}}function CR(){}function op(i,r,o,u){if(i.tag!==5)throw Error(a(476));var p=Hx(i).queue;Vx(i,p,r,ne,o===null?CR:function(){return Gx(i),o(u)})}function Hx(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:ne},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function Gx(i){var r=Hx(i);r.next===null&&(r=i.alternate.memoizedState),Hl(i,r.next.queue,{},Si())}function lp(){return In(ac)}function kx(){return pn().memoizedState}function Wx(){return pn().memoizedState}function DR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Si();i=Mr(o);var u=Er(r,i,o);u!==null&&(li(u,r,o),Fl(u,r,o)),r={cache:Ih()},i.payload=r;return}r=r.return}}function LR(i,r,o){var u=Si();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wu(i)?jx(r,o):(o=Ah(i,r,o,u),o!==null&&(li(o,i,u),qx(o,r,u)))}function Xx(i,r,o){var u=Si();Hl(i,r,o,u)}function Hl(i,r,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Wu(i))jx(r,p);else{var g=i.alternate;if(i.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var T=r.lastRenderedState,L=g(T,o);if(p.hasEagerState=!0,p.eagerState=L,mi(L,T))return Eu(i,r,p,0),en===null&&Mu(),!1}catch{}if(o=Ah(i,r,p,u),o!==null)return li(o,i,u),qx(o,r,u),!0}return!1}function cp(i,r,o,u){if(u={lane:2,revertLane:Hp(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Wu(i)){if(r)throw Error(a(479))}else r=Ah(i,o,u,2),r!==null&&li(r,i,2)}function Wu(i){var r=i.alternate;return i===gt||r!==null&&r===gt}function jx(i,r){co=Iu=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function qx(i,r,o){if((o&4194048)!==0){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,Gs(i,o)}}var Gl={readContext:In,use:Vu,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Gl.useEffectEvent=cn;var Yx={readContext:In,use:Vu,useCallback:function(i,r){return Qn().memoizedState=[i,r===void 0?null:r],i},useContext:In,useEffect:Lx,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Gu(4194308,4,Ox.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Gu(4194308,4,i,r)},useInsertionEffect:function(i,r){Gu(4,2,i,r)},useMemo:function(i,r){var o=Qn();r=r===void 0?null:r;var u=i();if(ms){Ge(!0);try{i()}finally{Ge(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=Qn();if(o!==void 0){var p=o(r);if(ms){Ge(!0);try{o(r)}finally{Ge(!1)}}}else p=r;return u.memoizedState=u.baseState=p,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:p},u.queue=i,i=i.dispatch=LR.bind(null,gt,i),[u.memoizedState,i]},useRef:function(i){var r=Qn();return i={current:i},r.memoizedState=i},useState:function(i){i=np(i);var r=i.queue,o=Xx.bind(null,gt,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:rp,useDeferredValue:function(i,r){var o=Qn();return sp(o,i,r)},useTransition:function(){var i=np(!1);return i=Vx.bind(null,gt,i.queue,!0,!1),Qn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=gt,p=Qn();if(Ct){if(o===void 0)throw Error(a(407));o=o()}else{if(o=r(),en===null)throw Error(a(349));(wt&127)!==0||mx(u,r,o)}p.memoizedState=o;var g={value:o,getSnapshot:r};return p.queue=g,Lx(vx.bind(null,u,g,i),[i]),u.flags|=2048,fo(9,{destroy:void 0},gx.bind(null,u,g,o,r),null),o},useId:function(){var i=Qn(),r=en.identifierPrefix;if(Ct){var o=ma,u=pa;o=(u&~(1<<32-Ve(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Bu++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=ER++,r="_"+r+"r_"+o.toString(32)+"_";return i.memoizedState=r},useHostTransitionStatus:lp,useFormState:Ax,useActionState:Ax,useOptimistic:function(i){var r=Qn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=cp.bind(null,gt,!0,o),o.dispatch=r,[i,r]},useMemoCache:Jh,useCacheRefresh:function(){return Qn().memoizedState=DR.bind(null,gt)},useEffectEvent:function(i){var r=Qn(),o={impl:i};return r.memoizedState=o,function(){if((It&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},up={readContext:In,use:Vu,useCallback:Ix,useContext:In,useEffect:ap,useImperativeHandle:Fx,useInsertionEffect:Ux,useLayoutEffect:Px,useMemo:Bx,useReducer:Hu,useRef:Dx,useState:function(){return Hu(Xa)},useDebugValue:rp,useDeferredValue:function(i,r){var o=pn();return zx(o,$t.memoizedState,i,r)},useTransition:function(){var i=Hu(Xa)[0],r=pn().memoizedState;return[typeof i=="boolean"?i:Vl(i),r]},useSyncExternalStore:px,useId:kx,useHostTransitionStatus:lp,useFormState:wx,useActionState:wx,useOptimistic:function(i,r){var o=pn();return _x(o,$t,i,r)},useMemoCache:Jh,useCacheRefresh:Wx};up.useEffectEvent=Nx;var $x={readContext:In,use:Vu,useCallback:Ix,useContext:In,useEffect:ap,useImperativeHandle:Fx,useInsertionEffect:Ux,useLayoutEffect:Px,useMemo:Bx,useReducer:tp,useRef:Dx,useState:function(){return tp(Xa)},useDebugValue:rp,useDeferredValue:function(i,r){var o=pn();return $t===null?sp(o,i,r):zx(o,$t.memoizedState,i,r)},useTransition:function(){var i=tp(Xa)[0],r=pn().memoizedState;return[typeof i=="boolean"?i:Vl(i),r]},useSyncExternalStore:px,useId:kx,useHostTransitionStatus:lp,useFormState:Cx,useActionState:Cx,useOptimistic:function(i,r){var o=pn();return $t!==null?_x(o,$t,i,r):(o.baseState=i,[i,o.queue.dispatch])},useMemoCache:Jh,useCacheRefresh:Wx};$x.useEffectEvent=Nx;function fp(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var dp={enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Si(),p=Mr(u);p.payload=r,o!=null&&(p.callback=o),r=Er(i,p,u),r!==null&&(li(r,i,u),Fl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Si(),p=Mr(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=Er(i,p,u),r!==null&&(li(r,i,u),Fl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Si(),u=Mr(o);u.tag=2,r!=null&&(u.callback=r),r=Er(i,u,o),r!==null&&(li(r,i,o),Fl(r,i,o))}};function Kx(i,r,o,u,p,g,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,g,T):r.prototype&&r.prototype.isPureReactComponent?!Rl(o,u)||!Rl(p,g):!0}function Zx(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&dp.enqueueReplaceState(r,r.state,null)}function gs(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=v({},o));for(var p in i)o[p]===void 0&&(o[p]=i[p])}return o}function Qx(i){bu(i)}function Jx(i){console.error(i)}function e_(i){bu(i)}function Xu(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function t_(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function hp(i,r,o){return o=Mr(o),o.tag=3,o.payload={element:null},o.callback=function(){Xu(i,r)},o}function n_(i){return i=Mr(i),i.tag=3,i}function i_(i,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=u.value;i.payload=function(){return p(g)},i.callback=function(){t_(r,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(i.callback=function(){t_(r,o,u),typeof p!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var L=u.stack;this.componentDidCatch(u.value,{componentStack:L!==null?L:""})})}function NR(i,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&io(r,o,p,!0),o=vi.current,o!==null){switch(o.tag){case 31:case 13:return Li===null?af():o.alternate===null&&un===0&&(un=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===Nu?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Bp(i,u,p)),!1;case 22:return o.flags|=65536,u===Nu?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Bp(i,u,p)),!1}throw Error(a(435,o.tag))}return Bp(i,u,p),af(),!1}if(Ct)return r=vi.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==Nh&&(i=Error(a(422),{cause:u}),Ll(wi(i,o)))):(u!==Nh&&(r=Error(a(423),{cause:u}),Ll(wi(r,o))),i=i.current.alternate,i.flags|=65536,p&=-p,i.lanes|=p,u=wi(u,o),p=hp(i.stateNode,u,p),kh(i,p),un!==4&&(un=2)),!1;var g=Error(a(520),{cause:u});if(g=wi(g,o),Kl===null?Kl=[g]:Kl.push(g),un!==4&&(un=2),r===null)return!0;u=wi(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=p&-p,o.lanes|=i,i=hp(o.stateNode,u,i),kh(o,i),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Dr===null||!Dr.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=n_(p),i_(p,i,o,u),kh(o,p),!1}o=o.return}while(o!==null);return!1}var pp=Error(a(461)),Sn=!1;function Bn(i,r,o,u){r.child=i===null?ox(r,null,o,u):ps(r,i.child,o,u)}function a_(i,r,o,u,p){o=o.render;var g=r.ref;if("ref"in u){var T={};for(var L in u)L!=="ref"&&(T[L]=u[L])}else T=u;return us(r),u=$h(i,r,o,T,g,p),L=Kh(),i!==null&&!Sn?(Zh(i,r,p),ja(i,r,p)):(Ct&&L&&Dh(r),r.flags|=1,Bn(i,r,u,p),r.child)}function r_(i,r,o,u,p){if(i===null){var g=o.type;return typeof g=="function"&&!wh(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,s_(i,r,g,u,p)):(i=Au(o.type,null,u,r,r.mode,p),i.ref=r.ref,i.return=r,r.child=i)}if(g=i.child,!bp(i,p)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:Rl,o(T,u)&&i.ref===r.ref)return ja(i,r,p)}return r.flags|=1,i=Va(g,u),i.ref=r.ref,i.return=r,r.child=i}function s_(i,r,o,u,p){if(i!==null){var g=i.memoizedProps;if(Rl(g,u)&&i.ref===r.ref)if(Sn=!1,r.pendingProps=u=g,bp(i,p))(i.flags&131072)!==0&&(Sn=!0);else return r.lanes=i.lanes,ja(i,r,p)}return mp(i,r,o,u,p)}function o_(i,r,o,u){var p=u.children,g=i!==null?i.memoizedState:null;if(i===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,i!==null){for(u=r.child=i.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~g}else u=0,r.child=null;return l_(i,r,g,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Du(r,g!==null?g.cachePool:null),g!==null?ux(r,g):Xh(),fx(r);else return u=r.lanes=536870912,l_(i,r,g!==null?g.baseLanes|o:o,o,u)}else g!==null?(Du(r,g.cachePool),ux(r,g),Ar(),r.memoizedState=null):(i!==null&&Du(r,null),Xh(),Ar());return Bn(i,r,p,o),r.child}function kl(i,r){return i!==null&&i.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function l_(i,r,o,u,p){var g=zh();return g=g===null?null:{parent:xn._currentValue,pool:g},r.memoizedState={baseLanes:o,cachePool:g},i!==null&&Du(r,null),Xh(),fx(r),i!==null&&io(i,r,u,!0),r.childLanes=p,null}function ju(i,r){return r=Yu({mode:r.mode,children:r.children},i.mode),r.ref=i.ref,i.child=r,r.return=i,r}function c_(i,r,o){return ps(r,i.child,null,o),i=ju(r,r.pendingProps),i.flags|=2,yi(r),r.memoizedState=null,i}function UR(i,r,o){var u=r.pendingProps,p=(r.flags&128)!==0;if(r.flags&=-129,i===null){if(Ct){if(u.mode==="hidden")return i=ju(r,u),r.lanes=536870912,kl(null,i);if(qh(r),(i=tn)?(i=SS(i,Di),i=i!==null&&i.data==="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:yr!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},o=jy(i),o.return=r,r.child=o,Fn=r,tn=null)):i=null,i===null)throw _r(r);return r.lanes=536870912,null}return ju(r,u)}var g=i.memoizedState;if(g!==null){var T=g.dehydrated;if(qh(r),p)if(r.flags&256)r.flags&=-257,r=c_(i,r,o);else if(r.memoizedState!==null)r.child=i.child,r.flags|=128,r=null;else throw Error(a(558));else if(Sn||io(i,r,o,!1),p=(o&i.childLanes)!==0,Sn||p){if(u=en,u!==null&&(T=fu(u,o),T!==0&&T!==g.retryLane))throw g.retryLane=T,ss(i,T),li(u,i,T),pp;af(),r=c_(i,r,o)}else i=g.treeContext,tn=Ni(T.nextSibling),Fn=r,Ct=!0,xr=null,Di=!1,i!==null&&$y(r,i),r=ju(r,u),r.flags|=4096;return r}return i=Va(i.child,{mode:u.mode,children:u.children}),i.ref=r.ref,r.child=i,i.return=r,i}function qu(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(i===null||i.ref!==o)&&(r.flags|=4194816)}}function mp(i,r,o,u,p){return us(r),o=$h(i,r,o,u,void 0,p),u=Kh(),i!==null&&!Sn?(Zh(i,r,p),ja(i,r,p)):(Ct&&u&&Dh(r),r.flags|=1,Bn(i,r,o,p),r.child)}function u_(i,r,o,u,p,g){return us(r),r.updateQueue=null,o=hx(r,u,o,p),dx(i),u=Kh(),i!==null&&!Sn?(Zh(i,r,g),ja(i,r,g)):(Ct&&u&&Dh(r),r.flags|=1,Bn(i,r,o,g),r.child)}function f_(i,r,o,u,p){if(us(r),r.stateNode===null){var g=Js,T=o.contextType;typeof T=="object"&&T!==null&&(g=In(T)),g=new o(u,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=dp,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=u,g.state=r.memoizedState,g.refs={},Hh(r),T=o.contextType,g.context=typeof T=="object"&&T!==null?In(T):Js,g.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(fp(r,o,T,u),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&dp.enqueueReplaceState(g,g.state,null),Bl(r,u,g,p),Il(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){g=r.stateNode;var L=r.memoizedProps,k=gs(o,L);g.props=k;var oe=g.context,_e=o.contextType;T=Js,typeof _e=="object"&&_e!==null&&(T=In(_e));var Me=o.getDerivedStateFromProps;_e=typeof Me=="function"||typeof g.getSnapshotBeforeUpdate=="function",L=r.pendingProps!==L,_e||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(L||oe!==T)&&Zx(r,g,u,T),br=!1;var ce=r.memoizedState;g.state=ce,Bl(r,u,g,p),Il(),oe=r.memoizedState,L||ce!==oe||br?(typeof Me=="function"&&(fp(r,o,Me,u),oe=r.memoizedState),(k=br||Kx(r,o,k,u,ce,oe,T))?(_e||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=oe),g.props=u,g.state=oe,g.context=T,u=k):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{g=r.stateNode,Gh(i,r),T=r.memoizedProps,_e=gs(o,T),g.props=_e,Me=r.pendingProps,ce=g.context,oe=o.contextType,k=Js,typeof oe=="object"&&oe!==null&&(k=In(oe)),L=o.getDerivedStateFromProps,(oe=typeof L=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==Me||ce!==k)&&Zx(r,g,u,k),br=!1,ce=r.memoizedState,g.state=ce,Bl(r,u,g,p),Il();var me=r.memoizedState;T!==Me||ce!==me||br||i!==null&&i.dependencies!==null&&Ru(i.dependencies)?(typeof L=="function"&&(fp(r,o,L,u),me=r.memoizedState),(_e=br||Kx(r,o,_e,u,ce,me,k)||i!==null&&i.dependencies!==null&&Ru(i.dependencies))?(oe||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,me,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,me,k)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&ce===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&ce===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=me),g.props=u,g.state=me,g.context=k,u=_e):(typeof g.componentDidUpdate!="function"||T===i.memoizedProps&&ce===i.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===i.memoizedProps&&ce===i.memoizedState||(r.flags|=1024),u=!1)}return g=u,qu(i,r),u=(r.flags&128)!==0,g||u?(g=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,i!==null&&u?(r.child=ps(r,i.child,null,p),r.child=ps(r,null,o,p)):Bn(i,r,o,p),r.memoizedState=g.state,i=r.child):i=ja(i,r,p),i}function d_(i,r,o,u){return ls(),r.flags|=256,Bn(i,r,o,u),r.child}var gp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vp(i){return{baseLanes:i,cachePool:tx()}}function yp(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=_i),i}function h_(i,r,o){var u=r.pendingProps,p=!1,g=(r.flags&128)!==0,T;if((T=g)||(T=i!==null&&i.memoizedState===null?!1:(hn.current&2)!==0),T&&(p=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,i===null){if(Ct){if(p?Tr(r):Ar(),(i=tn)?(i=SS(i,Di),i=i!==null&&i.data!=="&"?i:null,i!==null&&(r.memoizedState={dehydrated:i,treeContext:yr!==null?{id:pa,overflow:ma}:null,retryLane:536870912,hydrationErrors:null},o=jy(i),o.return=r,r.child=o,Fn=r,tn=null)):i=null,i===null)throw _r(r);return em(i)?r.lanes=32:r.lanes=536870912,null}var L=u.children;return u=u.fallback,p?(Ar(),p=r.mode,L=Yu({mode:"hidden",children:L},p),u=os(u,p,o,null),L.return=r,u.return=r,L.sibling=u,r.child=L,u=r.child,u.memoizedState=vp(o),u.childLanes=yp(i,T,o),r.memoizedState=gp,kl(null,u)):(Tr(r),xp(r,L))}var k=i.memoizedState;if(k!==null&&(L=k.dehydrated,L!==null)){if(g)r.flags&256?(Tr(r),r.flags&=-257,r=_p(i,r,o)):r.memoizedState!==null?(Ar(),r.child=i.child,r.flags|=128,r=null):(Ar(),L=u.fallback,p=r.mode,u=Yu({mode:"visible",children:u.children},p),L=os(L,p,o,null),L.flags|=2,u.return=r,L.return=r,u.sibling=L,r.child=u,ps(r,i.child,null,o),u=r.child,u.memoizedState=vp(o),u.childLanes=yp(i,T,o),r.memoizedState=gp,r=kl(null,u));else if(Tr(r),em(L)){if(T=L.nextSibling&&L.nextSibling.dataset,T)var oe=T.dgst;T=oe,u=Error(a(419)),u.stack="",u.digest=T,Ll({value:u,source:null,stack:null}),r=_p(i,r,o)}else if(Sn||io(i,r,o,!1),T=(o&i.childLanes)!==0,Sn||T){if(T=en,T!==null&&(u=fu(T,o),u!==0&&u!==k.retryLane))throw k.retryLane=u,ss(i,u),li(T,i,u),pp;Jp(L)||af(),r=_p(i,r,o)}else Jp(L)?(r.flags|=192,r.child=i.child,r=null):(i=k.treeContext,tn=Ni(L.nextSibling),Fn=r,Ct=!0,xr=null,Di=!1,i!==null&&$y(r,i),r=xp(r,u.children),r.flags|=4096);return r}return p?(Ar(),L=u.fallback,p=r.mode,k=i.child,oe=k.sibling,u=Va(k,{mode:"hidden",children:u.children}),u.subtreeFlags=k.subtreeFlags&65011712,oe!==null?L=Va(oe,L):(L=os(L,p,o,null),L.flags|=2),L.return=r,u.return=r,u.sibling=L,r.child=u,kl(null,u),u=r.child,L=i.child.memoizedState,L===null?L=vp(o):(p=L.cachePool,p!==null?(k=xn._currentValue,p=p.parent!==k?{parent:k,pool:k}:p):p=tx(),L={baseLanes:L.baseLanes|o,cachePool:p}),u.memoizedState=L,u.childLanes=yp(i,T,o),r.memoizedState=gp,kl(i.child,u)):(Tr(r),o=i.child,i=o.sibling,o=Va(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(T=r.deletions,T===null?(r.deletions=[i],r.flags|=16):T.push(i)),r.child=o,r.memoizedState=null,o)}function xp(i,r){return r=Yu({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function Yu(i,r){return i=gi(22,i,null,r),i.lanes=0,i}function _p(i,r,o){return ps(r,i.child,null,o),i=xp(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function p_(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),Oh(i.return,r,o)}function Sp(i,r,o,u,p,g){var T=i.memoizedState;T===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:g}:(T.isBackwards=r,T.rendering=null,T.renderingStartTime=0,T.last=u,T.tail=o,T.tailMode=p,T.treeForkCount=g)}function m_(i,r,o){var u=r.pendingProps,p=u.revealOrder,g=u.tail;u=u.children;var T=hn.current,L=(T&2)!==0;if(L?(T=T&1|2,r.flags|=128):T&=1,xe(hn,T),Bn(i,r,u,o),u=Ct?Dl:0,!L&&i!==null&&(i.flags&128)!==0)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&p_(i,o,r);else if(i.tag===19)p_(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(p){case"forwards":for(o=r.child,p=null;o!==null;)i=o.alternate,i!==null&&Fu(i)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),Sp(r,!1,p,o,g,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(i=p.alternate,i!==null&&Fu(i)===null){r.child=p;break}i=p.sibling,p.sibling=o,o=p,p=i}Sp(r,!0,o,null,g,u);break;case"together":Sp(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function ja(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Cr|=r.lanes,(o&r.childLanes)===0)if(i!==null){if(io(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,o=Va(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Va(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function bp(i,r){return(i.lanes&r)!==0?!0:(i=i.dependencies,!!(i!==null&&Ru(i)))}function PR(i,r,o){switch(r.tag){case 3:ge(r,r.stateNode.containerInfo),Sr(r,xn,i.memoizedState.cache),ls();break;case 27:case 5:De(r);break;case 4:ge(r,r.stateNode.containerInfo);break;case 10:Sr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,qh(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Tr(r),r.flags|=128,null):(o&r.child.childLanes)!==0?h_(i,r,o):(Tr(r),i=ja(i,r,o),i!==null?i.sibling:null);Tr(r);break;case 19:var p=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(io(i,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return m_(i,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),xe(hn,hn.current),u)break;return null;case 22:return r.lanes=0,o_(i,r,o,r.pendingProps);case 24:Sr(r,xn,i.memoizedState.cache)}return ja(i,r,o)}function g_(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Sn=!0;else{if(!bp(i,o)&&(r.flags&128)===0)return Sn=!1,PR(i,r,o);Sn=(i.flags&131072)!==0}else Sn=!1,Ct&&(r.flags&1048576)!==0&&Yy(r,Dl,r.index);switch(r.lanes=0,r.tag){case 16:e:{var u=r.pendingProps;if(i=ds(r.elementType),r.type=i,typeof i=="function")wh(i)?(u=gs(i,u),r.tag=1,r=f_(null,r,i,u,o)):(r.tag=0,r=mp(null,r,i,u,o));else{if(i!=null){var p=i.$$typeof;if(p===D){r.tag=11,r=a_(null,r,i,u,o);break e}else if(p===P){r.tag=14,r=r_(null,r,i,u,o);break e}}throw r=ee(i)||i,Error(a(306,r,""))}}return r;case 0:return mp(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=gs(u,r.pendingProps),f_(i,r,u,p,o);case 3:e:{if(ge(r,r.stateNode.containerInfo),i===null)throw Error(a(387));u=r.pendingProps;var g=r.memoizedState;p=g.element,Gh(i,r),Bl(r,u,null,o);var T=r.memoizedState;if(u=T.cache,Sr(r,xn,u),u!==g.cache&&Fh(r,[xn],o,!0),Il(),u=T.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=d_(i,r,u,o);break e}else if(u!==p){p=wi(Error(a(424)),r),Ll(p),r=d_(i,r,u,o);break e}else for(i=r.stateNode.containerInfo,i.nodeType===9?i=i.body:i=i.nodeName==="HTML"?i.ownerDocument.body:i,tn=Ni(i.firstChild),Fn=r,Ct=!0,xr=null,Di=!0,o=ox(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ls(),u===p){r=ja(i,r,o);break e}Bn(i,r,u,o)}r=r.child}return r;case 26:return qu(i,r),i===null?(o=wS(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ct||(o=r.type,i=r.pendingProps,u=ff(ae.current).createElement(o),u[gn]=r,u[wn]=i,zn(u,o,i),q(u),r.stateNode=u):r.memoizedState=wS(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return De(r),i===null&&Ct&&(u=r.stateNode=ES(r.type,r.pendingProps,ae.current),Fn=r,Di=!0,p=tn,Pr(r.type)?(tm=p,tn=Ni(u.firstChild)):tn=p),Bn(i,r,r.pendingProps.children,o),qu(i,r),i===null&&(r.flags|=4194304),r.child;case 5:return i===null&&Ct&&((p=u=tn)&&(u=uC(u,r.type,r.pendingProps,Di),u!==null?(r.stateNode=u,Fn=r,tn=Ni(u.firstChild),Di=!1,p=!0):p=!1),p||_r(r)),De(r),p=r.type,g=r.pendingProps,T=i!==null?i.memoizedProps:null,u=g.children,Kp(p,g)?u=null:T!==null&&Kp(p,T)&&(r.flags|=32),r.memoizedState!==null&&(p=$h(i,r,TR,null,null,o),ac._currentValue=p),qu(i,r),Bn(i,r,u,o),r.child;case 6:return i===null&&Ct&&((i=o=tn)&&(o=fC(o,r.pendingProps,Di),o!==null?(r.stateNode=o,Fn=r,tn=null,i=!0):i=!1),i||_r(r)),null;case 13:return h_(i,r,o);case 4:return ge(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=ps(r,null,u,o):Bn(i,r,u,o),r.child;case 11:return a_(i,r,r.type,r.pendingProps,o);case 7:return Bn(i,r,r.pendingProps,o),r.child;case 8:return Bn(i,r,r.pendingProps.children,o),r.child;case 12:return Bn(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Sr(r,r.type,u.value),Bn(i,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,us(r),p=In(p),u=u(p),r.flags|=1,Bn(i,r,u,o),r.child;case 14:return r_(i,r,r.type,r.pendingProps,o);case 15:return s_(i,r,r.type,r.pendingProps,o);case 19:return m_(i,r,o);case 31:return UR(i,r,o);case 22:return o_(i,r,o,r.pendingProps);case 24:return us(r),u=In(xn),i===null?(p=zh(),p===null&&(p=en,g=Ih(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),r.memoizedState={parent:u,cache:p},Hh(r),Sr(r,xn,p)):((i.lanes&o)!==0&&(Gh(i,r),Bl(r,null,null,o),Il()),p=i.memoizedState,g=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),Sr(r,xn,u)):(u=g.cache,Sr(r,xn,u),u!==p.cache&&Fh(r,[xn],o,!0))),Bn(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}function qa(i){i.flags|=4}function Mp(i,r,o,u,p){if((r=(i.mode&32)!==0)&&(r=!1),r){if(i.flags|=16777216,(p&335544128)===p)if(i.stateNode.complete)i.flags|=8192;else if(k_())i.flags|=8192;else throw hs=Nu,Vh}else i.flags&=-16777217}function v_(i,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!NS(r))if(k_())i.flags|=8192;else throw hs=Nu,Vh}function $u(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Xt():536870912,i.lanes|=r,go|=r)}function Wl(i,r){if(!Ct)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function nn(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var p=i.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function OR(i,r,o){var u=r.pendingProps;switch(Lh(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(r),null;case 1:return nn(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),ka(xn),Ce(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(no(r)?qa(r):i===null||i.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Uh())),nn(r),null;case 26:var p=r.type,g=r.memoizedState;return i===null?(qa(r),g!==null?(nn(r),v_(r,g)):(nn(r),Mp(r,p,null,u,o))):g?g!==i.memoizedState?(qa(r),nn(r),v_(r,g)):(nn(r),r.flags&=-16777217):(i=i.memoizedProps,i!==u&&qa(r),nn(r),Mp(r,p,i,u,o)),null;case 27:if(He(r),o=ae.current,p=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&qa(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return nn(r),null}i=we.current,no(r)?Ky(r):(i=ES(p,u,o),r.stateNode=i,qa(r))}return nn(r),null;case 5:if(He(r),p=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&qa(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return nn(r),null}if(g=we.current,no(r))Ky(r);else{var T=ff(ae.current);switch(g){case 1:g=T.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=T.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=T.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=T.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=T.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof u.is=="string"?T.createElement("select",{is:u.is}):T.createElement("select"),u.multiple?g.multiple=!0:u.size&&(g.size=u.size);break;default:g=typeof u.is=="string"?T.createElement(p,{is:u.is}):T.createElement(p)}}g[gn]=r,g[wn]=u;e:for(T=r.child;T!==null;){if(T.tag===5||T.tag===6)g.appendChild(T.stateNode);else if(T.tag!==4&&T.tag!==27&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===r)break e;for(;T.sibling===null;){if(T.return===null||T.return===r)break e;T=T.return}T.sibling.return=T.return,T=T.sibling}r.stateNode=g;e:switch(zn(g,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&qa(r)}}return nn(r),Mp(r,r.type,i===null?null:i.memoizedProps,r.pendingProps,o),null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&qa(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(a(166));if(i=ae.current,no(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,p=Fn,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}i[gn]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||hS(i.nodeValue,o)),i||_r(r,!0)}else i=ff(i).createTextNode(u),i[gn]=r,r.stateNode=i}return nn(r),null;case 31:if(o=r.memoizedState,i===null||i.memoizedState!==null){if(u=no(r),o!==null){if(i===null){if(!u)throw Error(a(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(557));i[gn]=r}else ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nn(r),i=!1}else o=Uh(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=o),i=!0;if(!i)return r.flags&256?(yi(r),r):(yi(r),null);if((r.flags&128)!==0)throw Error(a(558))}return nn(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(p=no(r),u!==null&&u.dehydrated!==null){if(i===null){if(!p)throw Error(a(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[gn]=r}else ls(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;nn(r),p=!1}else p=Uh(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(yi(r),r):(yi(r),null)}return yi(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,i=i!==null&&i.memoizedState!==null,o&&(u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),g=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==p&&(u.flags|=2048)),o!==i&&o&&(r.child.flags|=8192),$u(r,r.updateQueue),nn(r),null);case 4:return Ce(),i===null&&Xp(r.stateNode.containerInfo),nn(r),null;case 10:return ka(r.type),nn(r),null;case 19:if(X(hn),u=r.memoizedState,u===null)return nn(r),null;if(p=(r.flags&128)!==0,g=u.rendering,g===null)if(p)Wl(u,!1);else{if(un!==0||i!==null&&(i.flags&128)!==0)for(i=r.child;i!==null;){if(g=Fu(i),g!==null){for(r.flags|=128,Wl(u,!1),i=g.updateQueue,r.updateQueue=i,$u(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)Xy(o,i),o=o.sibling;return xe(hn,hn.current&1|2),Ct&&Ha(r,u.treeForkCount),r.child}i=i.sibling}u.tail!==null&&M()>ef&&(r.flags|=128,p=!0,Wl(u,!1),r.lanes=4194304)}else{if(!p)if(i=Fu(g),i!==null){if(r.flags|=128,p=!0,i=i.updateQueue,r.updateQueue=i,$u(r,i),Wl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!g.alternate&&!Ct)return nn(r),null}else 2*M()-u.renderingStartTime>ef&&o!==536870912&&(r.flags|=128,p=!0,Wl(u,!1),r.lanes=4194304);u.isBackwards?(g.sibling=r.child,r.child=g):(i=u.last,i!==null?i.sibling=g:r.child=g,u.last=g)}return u.tail!==null?(i=u.tail,u.rendering=i,u.tail=i.sibling,u.renderingStartTime=M(),i.sibling=null,o=hn.current,xe(hn,p?o&1|2:o&1),Ct&&Ha(r,u.treeForkCount),i):(nn(r),null);case 22:case 23:return yi(r),jh(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(nn(r),r.subtreeFlags&6&&(r.flags|=8192)):nn(r),o=r.updateQueue,o!==null&&$u(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&X(fs),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),ka(xn),nn(r),null;case 25:return null;case 30:return null}throw Error(a(156,r.tag))}function FR(i,r){switch(Lh(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return ka(xn),Ce(),i=r.flags,(i&65536)!==0&&(i&128)===0?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return He(r),null;case 31:if(r.memoizedState!==null){if(yi(r),r.alternate===null)throw Error(a(340));ls()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 13:if(yi(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));ls()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return X(hn),null;case 4:return Ce(),null;case 10:return ka(r.type),null;case 22:case 23:return yi(r),jh(),i!==null&&X(fs),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return ka(xn),null;case 25:return null;default:return null}}function y_(i,r){switch(Lh(r),r.tag){case 3:ka(xn),Ce();break;case 26:case 27:case 5:He(r);break;case 4:Ce();break;case 31:r.memoizedState!==null&&yi(r);break;case 13:yi(r);break;case 19:X(hn);break;case 10:ka(r.type);break;case 22:case 23:yi(r),jh(),i!==null&&X(fs);break;case 24:ka(xn)}}function Xl(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&i)===i){u=void 0;var g=o.create,T=o.inst;u=g(),T.destroy=u}o=o.next}while(o!==p)}}catch(L){qt(r,r.return,L)}}function wr(i,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var g=p.next;u=g;do{if((u.tag&i)===i){var T=u.inst,L=T.destroy;if(L!==void 0){T.destroy=void 0,p=r;var k=o,oe=L;try{oe()}catch(_e){qt(p,k,_e)}}}u=u.next}while(u!==g)}}catch(_e){qt(r,r.return,_e)}}function x_(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{cx(r,o)}catch(u){qt(i,i.return,u)}}}function __(i,r,o){o.props=gs(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){qt(i,r,u)}}function jl(i,r){try{var o=i.ref;if(o!==null){switch(i.tag){case 26:case 27:case 5:var u=i.stateNode;break;case 30:u=i.stateNode;break;default:u=i.stateNode}typeof o=="function"?i.refCleanup=o(u):o.current=u}}catch(p){qt(i,r,p)}}function ga(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){qt(i,r,p)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){qt(i,r,p)}else o.current=null}function S_(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){qt(i,i.return,p)}}function Ep(i,r,o){try{var u=i.stateNode;aC(u,i.type,o,r),u[wn]=r}catch(p){qt(i,i.return,p)}}function b_(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&Pr(i.type)||i.tag===4}function Tp(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||b_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&Pr(i.type)||i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ap(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(i,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(i),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ba));else if(u!==4&&(u===27&&Pr(i.type)&&(o=i.stateNode,r=null),i=i.child,i!==null))for(Ap(i,r,o),i=i.sibling;i!==null;)Ap(i,r,o),i=i.sibling}function Ku(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&(u===27&&Pr(i.type)&&(o=i.stateNode),i=i.child,i!==null))for(Ku(i,r,o),i=i.sibling;i!==null;)Ku(i,r,o),i=i.sibling}function M_(i){var r=i.stateNode,o=i.memoizedProps;try{for(var u=i.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);zn(r,u,o),r[gn]=i,r[wn]=o}catch(g){qt(i,i.return,g)}}var Ya=!1,bn=!1,wp=!1,E_=typeof WeakSet=="function"?WeakSet:Set,Un=null;function IR(i,r){if(i=i.containerInfo,Yp=yf,i=Fy(i),_h(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,L=-1,k=-1,oe=0,_e=0,Me=i,ce=null;t:for(;;){for(var me;Me!==o||p!==0&&Me.nodeType!==3||(L=T+p),Me!==g||u!==0&&Me.nodeType!==3||(k=T+u),Me.nodeType===3&&(T+=Me.nodeValue.length),(me=Me.firstChild)!==null;)ce=Me,Me=me;for(;;){if(Me===i)break t;if(ce===o&&++oe===p&&(L=T),ce===g&&++_e===u&&(k=T),(me=Me.nextSibling)!==null)break;Me=ce,ce=Me.parentNode}Me=me}o=L===-1||k===-1?null:{start:L,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for($p={focusedElem:i,selectionRange:o},yf=!1,Un=r;Un!==null;)if(r=Un,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,Un=i;else for(;Un!==null;){switch(r=Un,g=r.alternate,i=r.flags,r.tag){case 0:if((i&4)!==0&&(i=r.updateQueue,i=i!==null?i.events:null,i!==null))for(o=0;o<i.length;o++)p=i[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&g!==null){i=void 0,o=r,p=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var $e=gs(o.type,p);i=u.getSnapshotBeforeUpdate($e,g),u.__reactInternalSnapshotBeforeUpdate=i}catch(st){qt(o,o.return,st)}}break;case 3:if((i&1024)!==0){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Qp(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Qp(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,Un=i;break}Un=r.return}}function T_(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ka(i,o),u&4&&Xl(5,o);break;case 1:if(Ka(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(T){qt(o,o.return,T)}else{var p=gs(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(p,r,i.__reactInternalSnapshotBeforeUpdate)}catch(T){qt(o,o.return,T)}}u&64&&x_(o),u&512&&jl(o,o.return);break;case 3:if(Ka(i,o),u&64&&(i=o.updateQueue,i!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{cx(i,r)}catch(T){qt(o,o.return,T)}}break;case 27:r===null&&u&4&&M_(o);case 26:case 5:Ka(i,o),r===null&&u&4&&S_(o),u&512&&jl(o,o.return);break;case 12:Ka(i,o);break;case 31:Ka(i,o),u&4&&R_(i,o);break;case 13:Ka(i,o),u&4&&C_(i,o),u&64&&(i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(o=jR.bind(null,o),dC(i,o))));break;case 22:if(u=o.memoizedState!==null||Ya,!u){r=r!==null&&r.memoizedState!==null||bn,p=Ya;var g=bn;Ya=u,(bn=r)&&!g?Za(i,o,(o.subtreeFlags&8772)!==0):Ka(i,o),Ya=p,bn=g}break;case 30:break;default:Ka(i,o)}}function A_(i){var r=i.alternate;r!==null&&(i.alternate=null,A_(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&_l(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var sn=null,ai=!1;function $a(i,r,o){for(o=o.child;o!==null;)w_(i,r,o),o=o.sibling}function w_(i,r,o){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Re,o)}catch{}switch(o.tag){case 26:bn||ga(o,r),$a(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:bn||ga(o,r);var u=sn,p=ai;Pr(o.type)&&(sn=o.stateNode,ai=!1),$a(i,r,o),tc(o.stateNode),sn=u,ai=p;break;case 5:bn||ga(o,r);case 6:if(u=sn,p=ai,sn=null,$a(i,r,o),sn=u,ai=p,sn!==null)if(ai)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(o.stateNode)}catch(g){qt(o,r,g)}else try{sn.removeChild(o.stateNode)}catch(g){qt(o,r,g)}break;case 18:sn!==null&&(ai?(i=sn,xS(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,o.stateNode),Eo(i)):xS(sn,o.stateNode));break;case 4:u=sn,p=ai,sn=o.stateNode.containerInfo,ai=!0,$a(i,r,o),sn=u,ai=p;break;case 0:case 11:case 14:case 15:wr(2,o,r),bn||wr(4,o,r),$a(i,r,o);break;case 1:bn||(ga(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&__(o,r,u)),$a(i,r,o);break;case 21:$a(i,r,o);break;case 22:bn=(u=bn)||o.memoizedState!==null,$a(i,r,o),bn=u;break;default:$a(i,r,o)}}function R_(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{Eo(i)}catch(o){qt(r,r.return,o)}}}function C_(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{Eo(i)}catch(o){qt(r,r.return,o)}}function BR(i){switch(i.tag){case 31:case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new E_),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new E_),r;default:throw Error(a(435,i.tag))}}function Zu(i,r){var o=BR(i);r.forEach(function(u){if(!o.has(u)){o.add(u);var p=qR.bind(null,i,u);u.then(p,p)}})}function ri(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],g=i,T=r,L=T;e:for(;L!==null;){switch(L.tag){case 27:if(Pr(L.type)){sn=L.stateNode,ai=!1;break e}break;case 5:sn=L.stateNode,ai=!1;break e;case 3:case 4:sn=L.stateNode.containerInfo,ai=!0;break e}L=L.return}if(sn===null)throw Error(a(160));w_(g,T,p),sn=null,ai=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)D_(r,i),r=r.sibling}var Yi=null;function D_(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:ri(r,i),si(i),u&4&&(wr(3,i,i.return),Xl(3,i),wr(5,i,i.return));break;case 1:ri(r,i),si(i),u&512&&(bn||o===null||ga(o,o.return)),u&64&&Ya&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=Yi;if(ri(r,i),si(i),u&512&&(bn||o===null||ga(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":g=p.getElementsByTagName("title")[0],(!g||g[ts]||g[gn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(u),p.head.insertBefore(g,p.querySelector("head > title"))),zn(g,u,o),g[gn]=i,q(g),u=g;break e;case"link":var T=DS("link","href",p).get(u+(o.href||""));if(T){for(var L=0;L<T.length;L++)if(g=T[L],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(L,1);break t}}g=p.createElement(u),zn(g,u,o),p.head.appendChild(g);break;case"meta":if(T=DS("meta","content",p).get(u+(o.content||""))){for(L=0;L<T.length;L++)if(g=T[L],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(L,1);break t}}g=p.createElement(u),zn(g,u,o),p.head.appendChild(g);break;default:throw Error(a(468,u))}g[gn]=i,q(g),u=g}i.stateNode=u}else LS(p,i.type,i.stateNode);else i.stateNode=CS(p,u,i.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?LS(p,i.type,i.stateNode):CS(p,u,i.memoizedProps)):u===null&&i.stateNode!==null&&Ep(i,i.memoizedProps,o.memoizedProps)}break;case 27:ri(r,i),si(i),u&512&&(bn||o===null||ga(o,o.return)),o!==null&&u&4&&Ep(i,i.memoizedProps,o.memoizedProps);break;case 5:if(ri(r,i),si(i),u&512&&(bn||o===null||ga(o,o.return)),i.flags&32){p=i.stateNode;try{Zn(p,"")}catch($e){qt(i,i.return,$e)}}u&4&&i.stateNode!=null&&(p=i.memoizedProps,Ep(i,p,o!==null?o.memoizedProps:p)),u&1024&&(wp=!0);break;case 6:if(ri(r,i),si(i),u&4){if(i.stateNode===null)throw Error(a(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch($e){qt(i,i.return,$e)}}break;case 3:if(pf=null,p=Yi,Yi=df(r.containerInfo),ri(r,i),Yi=p,si(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Eo(r.containerInfo)}catch($e){qt(i,i.return,$e)}wp&&(wp=!1,L_(i));break;case 4:u=Yi,Yi=df(i.stateNode.containerInfo),ri(r,i),si(i),Yi=u;break;case 12:ri(r,i),si(i);break;case 31:ri(r,i),si(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Zu(i,u)));break;case 13:ri(r,i),si(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ju=M()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Zu(i,u)));break;case 22:p=i.memoizedState!==null;var k=o!==null&&o.memoizedState!==null,oe=Ya,_e=bn;if(Ya=oe||p,bn=_e||k,ri(r,i),bn=_e,Ya=oe,si(i),u&8192)e:for(r=i.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||k||Ya||bn||vs(i)),o=null,r=i;;){if(r.tag===5||r.tag===26){if(o===null){k=o=r;try{if(g=k.stateNode,p)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{L=k.stateNode;var Me=k.memoizedProps.style,ce=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;L.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch($e){qt(k,k.return,$e)}}}else if(r.tag===6){if(o===null){k=r;try{k.stateNode.nodeValue=p?"":k.memoizedProps}catch($e){qt(k,k.return,$e)}}}else if(r.tag===18){if(o===null){k=r;try{var me=k.stateNode;p?_S(me,!0):_S(k.stateNode,!1)}catch($e){qt(k,k.return,$e)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Zu(i,o))));break;case 19:ri(r,i),si(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,Zu(i,u)));break;case 30:break;case 21:break;default:ri(r,i),si(i)}}function si(i){var r=i.flags;if(r&2){try{for(var o,u=i.return;u!==null;){if(b_(u)){o=u;break}u=u.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,g=Tp(i);Ku(i,g,p);break;case 5:var T=o.stateNode;o.flags&32&&(Zn(T,""),o.flags&=-33);var L=Tp(i);Ku(i,L,T);break;case 3:case 4:var k=o.stateNode.containerInfo,oe=Tp(i);Ap(i,oe,k);break;default:throw Error(a(161))}}catch(_e){qt(i,i.return,_e)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function L_(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;L_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function Ka(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)T_(i,r.alternate,r),r=r.sibling}function vs(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:wr(4,r,r.return),vs(r);break;case 1:ga(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&__(r,r.return,o),vs(r);break;case 27:tc(r.stateNode);case 26:case 5:ga(r,r.return),vs(r);break;case 22:r.memoizedState===null&&vs(r);break;case 30:vs(r);break;default:vs(r)}i=i.sibling}}function Za(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=i,g=r,T=g.flags;switch(g.tag){case 0:case 11:case 15:Za(p,g,o),Xl(4,g);break;case 1:if(Za(p,g,o),u=g,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(oe){qt(u,u.return,oe)}if(u=g,p=u.updateQueue,p!==null){var L=u.stateNode;try{var k=p.shared.hiddenCallbacks;if(k!==null)for(p.shared.hiddenCallbacks=null,p=0;p<k.length;p++)lx(k[p],L)}catch(oe){qt(u,u.return,oe)}}o&&T&64&&x_(g),jl(g,g.return);break;case 27:M_(g);case 26:case 5:Za(p,g,o),o&&u===null&&T&4&&S_(g),jl(g,g.return);break;case 12:Za(p,g,o);break;case 31:Za(p,g,o),o&&T&4&&R_(p,g);break;case 13:Za(p,g,o),o&&T&4&&C_(p,g);break;case 22:g.memoizedState===null&&Za(p,g,o),jl(g,g.return);break;case 30:break;default:Za(p,g,o)}r=r.sibling}}function Rp(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&Nl(o))}function Cp(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Nl(i))}function $i(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)N_(i,r,o,u),r=r.sibling}function N_(i,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:$i(i,r,o,u),p&2048&&Xl(9,r);break;case 1:$i(i,r,o,u);break;case 3:$i(i,r,o,u),p&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&Nl(i)));break;case 12:if(p&2048){$i(i,r,o,u),i=r.stateNode;try{var g=r.memoizedProps,T=g.id,L=g.onPostCommit;typeof L=="function"&&L(T,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(k){qt(r,r.return,k)}}else $i(i,r,o,u);break;case 31:$i(i,r,o,u);break;case 13:$i(i,r,o,u);break;case 23:break;case 22:g=r.stateNode,T=r.alternate,r.memoizedState!==null?g._visibility&2?$i(i,r,o,u):ql(i,r):g._visibility&2?$i(i,r,o,u):(g._visibility|=2,ho(i,r,o,u,(r.subtreeFlags&10256)!==0||!1)),p&2048&&Rp(T,r);break;case 24:$i(i,r,o,u),p&2048&&Cp(r.alternate,r);break;default:$i(i,r,o,u)}}function ho(i,r,o,u,p){for(p=p&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var g=i,T=r,L=o,k=u,oe=T.flags;switch(T.tag){case 0:case 11:case 15:ho(g,T,L,k,p),Xl(8,T);break;case 23:break;case 22:var _e=T.stateNode;T.memoizedState!==null?_e._visibility&2?ho(g,T,L,k,p):ql(g,T):(_e._visibility|=2,ho(g,T,L,k,p)),p&&oe&2048&&Rp(T.alternate,T);break;case 24:ho(g,T,L,k,p),p&&oe&2048&&Cp(T.alternate,T);break;default:ho(g,T,L,k,p)}r=r.sibling}}function ql(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,p=u.flags;switch(u.tag){case 22:ql(o,u),p&2048&&Rp(u.alternate,u);break;case 24:ql(o,u),p&2048&&Cp(u.alternate,u);break;default:ql(o,u)}r=r.sibling}}var Yl=8192;function po(i,r,o){if(i.subtreeFlags&Yl)for(i=i.child;i!==null;)U_(i,r,o),i=i.sibling}function U_(i,r,o){switch(i.tag){case 26:po(i,r,o),i.flags&Yl&&i.memoizedState!==null&&EC(o,Yi,i.memoizedState,i.memoizedProps);break;case 5:po(i,r,o);break;case 3:case 4:var u=Yi;Yi=df(i.stateNode.containerInfo),po(i,r,o),Yi=u;break;case 22:i.memoizedState===null&&(u=i.alternate,u!==null&&u.memoizedState!==null?(u=Yl,Yl=16777216,po(i,r,o),Yl=u):po(i,r,o));break;default:po(i,r,o)}}function P_(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function $l(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Un=u,F_(u,i)}P_(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)O_(i),i=i.sibling}function O_(i){switch(i.tag){case 0:case 11:case 15:$l(i),i.flags&2048&&wr(9,i,i.return);break;case 3:$l(i);break;case 12:$l(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&2&&(i.return===null||i.return.tag!==13)?(r._visibility&=-3,Qu(i)):$l(i);break;default:$l(i)}}function Qu(i){var r=i.deletions;if((i.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];Un=u,F_(u,i)}P_(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:wr(8,r,r.return),Qu(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,Qu(r));break;default:Qu(r)}i=i.sibling}}function F_(i,r){for(;Un!==null;){var o=Un;switch(o.tag){case 0:case 11:case 15:wr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Nl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Un=u;else e:for(o=i;Un!==null;){u=Un;var p=u.sibling,g=u.return;if(A_(u),u===o){Un=null;break e}if(p!==null){p.return=g,Un=p;break e}Un=g}}}var zR={getCacheForType:function(i){var r=In(xn),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o},cacheSignal:function(){return In(xn).controller.signal}},VR=typeof WeakMap=="function"?WeakMap:Map,It=0,en=null,Tt=null,wt=0,jt=0,xi=null,Rr=!1,mo=!1,Dp=!1,Qa=0,un=0,Cr=0,ys=0,Lp=0,_i=0,go=0,Kl=null,oi=null,Np=!1,Ju=0,I_=0,ef=1/0,tf=null,Dr=null,Cn=0,Lr=null,vo=null,Ja=0,Up=0,Pp=null,B_=null,Zl=0,Op=null;function Si(){return(It&2)!==0&&wt!==0?wt&-wt:B.T!==null?Hp():ha()}function z_(){if(_i===0)if((wt&536870912)===0||Ct){var i=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),_i=i}else _i=536870912;return i=vi.current,i!==null&&(i.flags|=32),_i}function li(i,r,o){(i===en&&(jt===2||jt===9)||i.cancelPendingCommit!==null)&&(yo(i,0),Nr(i,wt,_i,!1)),Yn(i,o),((It&2)===0||i!==en)&&(i===en&&((It&2)===0&&(ys|=o),un===4&&Nr(i,wt,_i,!1)),va(i))}function V_(i,r,o){if((It&6)!==0)throw Error(a(327));var u=!o&&(r&127)===0&&(r&i.expiredLanes)===0||qe(i,r),p=u?kR(i,r):Ip(i,r,!0),g=u;do{if(p===0){mo&&!u&&Nr(i,r,0,!1);break}else{if(o=i.current.alternate,g&&!HR(o)){p=Ip(i,r,!1),g=!1;continue}if(p===2){if(g=r,i.errorRecoveryDisabledLanes&g)var T=0;else T=i.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;e:{var L=i;p=Kl;var k=L.current.memoizedState.isDehydrated;if(k&&(yo(L,T).flags|=256),T=Ip(L,T,!1),T!==2){if(Dp&&!k){L.errorRecoveryDisabledLanes|=g,ys|=g,p=4;break e}g=oi,oi=p,g!==null&&(oi===null?oi=g:oi.push.apply(oi,g))}p=T}if(g=!1,p!==2)continue}}if(p===1){yo(i,0),Nr(i,r,0,!0);break}e:{switch(u=i,g=p,g){case 0:case 1:throw Error(a(345));case 4:if((r&4194048)!==r)break;case 6:Nr(u,r,_i,!Rr);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((r&62914560)===r&&(p=Ju+300-M(),10<p)){if(Nr(u,r,_i,!Rr),ye(u,0,!0)!==0)break e;Ja=r,u.timeoutHandle=vS(H_.bind(null,u,o,oi,tf,Np,r,_i,ys,go,Rr,g,"Throttled",-0,0),p);break e}H_(u,o,oi,tf,Np,r,_i,ys,go,Rr,g,null,-0,0)}}break}while(!0);va(i)}function H_(i,r,o,u,p,g,T,L,k,oe,_e,Me,ce,me){if(i.timeoutHandle=-1,Me=r.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ba},U_(r,g,Me);var $e=(g&62914560)===g?Ju-M():(g&4194048)===g?I_-M():0;if($e=TC(Me,$e),$e!==null){Ja=g,i.cancelPendingCommit=$e($_.bind(null,i,r,g,o,u,p,T,L,k,_e,Me,null,ce,me)),Nr(i,g,T,!oe);return}}$_(i,r,g,o,u,p,T,L,k)}function HR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],g=p.getSnapshot;p=p.value;try{if(!mi(g(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Nr(i,r,o,u){r&=~Lp,r&=~ys,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var p=r;0<p;){var g=31-Ve(p),T=1<<g;u[g]=-1,p&=~T}o!==0&&xl(i,o,r)}function nf(){return(It&6)===0?(Ql(0),!1):!0}function Fp(){if(Tt!==null){if(jt===0)var i=Tt.return;else i=Tt,Ga=cs=null,Qh(i),oo=null,Pl=0,i=Tt;for(;i!==null;)y_(i.alternate,i),i=i.return;Tt=null}}function yo(i,r){var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,oC(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Ja=0,Fp(),en=i,Tt=o=Va(i.current,null),wt=r,jt=0,xi=null,Rr=!1,mo=qe(i,r),Dp=!1,go=_i=Lp=ys=Cr=un=0,oi=Kl=null,Np=!1,(r&8)!==0&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var p=31-Ve(u),g=1<<p;r|=i[p],u&=~g}return Qa=r,Mu(),o}function G_(i,r){gt=null,B.H=Gl,r===so||r===Lu?(r=ax(),jt=3):r===Vh?(r=ax(),jt=4):jt=r===pp?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,xi=r,Tt===null&&(un=1,Xu(i,wi(r,i.current)))}function k_(){var i=vi.current;return i===null?!0:(wt&4194048)===wt?Li===null:(wt&62914560)===wt||(wt&536870912)!==0?i===Li:!1}function W_(){var i=B.H;return B.H=Gl,i===null?Gl:i}function X_(){var i=B.A;return B.A=zR,i}function af(){un=4,Rr||(wt&4194048)!==wt&&vi.current!==null||(mo=!0),(Cr&134217727)===0&&(ys&134217727)===0||en===null||Nr(en,wt,_i,!1)}function Ip(i,r,o){var u=It;It|=2;var p=W_(),g=X_();(en!==i||wt!==r)&&(tf=null,yo(i,r)),r=!1;var T=un;e:do try{if(jt!==0&&Tt!==null){var L=Tt,k=xi;switch(jt){case 8:Fp(),T=6;break e;case 3:case 2:case 9:case 6:vi.current===null&&(r=!0);var oe=jt;if(jt=0,xi=null,xo(i,L,k,oe),o&&mo){T=0;break e}break;default:oe=jt,jt=0,xi=null,xo(i,L,k,oe)}}GR(),T=un;break}catch(_e){G_(i,_e)}while(!0);return r&&i.shellSuspendCounter++,Ga=cs=null,It=u,B.H=p,B.A=g,Tt===null&&(en=null,wt=0,Mu()),T}function GR(){for(;Tt!==null;)j_(Tt)}function kR(i,r){var o=It;It|=2;var u=W_(),p=X_();en!==i||wt!==r?(tf=null,ef=M()+500,yo(i,r)):mo=qe(i,r);e:do try{if(jt!==0&&Tt!==null){r=Tt;var g=xi;t:switch(jt){case 1:jt=0,xi=null,xo(i,r,g,1);break;case 2:case 9:if(nx(g)){jt=0,xi=null,q_(r);break}r=function(){jt!==2&&jt!==9||en!==i||(jt=7),va(i)},g.then(r,r);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:nx(g)?(jt=0,xi=null,q_(r)):(jt=0,xi=null,xo(i,r,g,7));break;case 5:var T=null;switch(Tt.tag){case 26:T=Tt.memoizedState;case 5:case 27:var L=Tt;if(T?NS(T):L.stateNode.complete){jt=0,xi=null;var k=L.sibling;if(k!==null)Tt=k;else{var oe=L.return;oe!==null?(Tt=oe,rf(oe)):Tt=null}break t}}jt=0,xi=null,xo(i,r,g,5);break;case 6:jt=0,xi=null,xo(i,r,g,6);break;case 8:Fp(),un=6;break e;default:throw Error(a(462))}}WR();break}catch(_e){G_(i,_e)}while(!0);return Ga=cs=null,B.H=u,B.A=p,It=o,Tt!==null?0:(en=null,wt=0,Mu(),un)}function WR(){for(;Tt!==null&&!Ee();)j_(Tt)}function j_(i){var r=g_(i.alternate,i,Qa);i.memoizedProps=i.pendingProps,r===null?rf(i):Tt=r}function q_(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=u_(o,r,r.pendingProps,r.type,void 0,wt);break;case 11:r=u_(o,r,r.pendingProps,r.type.render,r.ref,wt);break;case 5:Qh(r);default:y_(o,r),r=Tt=Xy(r,Qa),r=g_(o,r,Qa)}i.memoizedProps=i.pendingProps,r===null?rf(i):Tt=r}function xo(i,r,o,u){Ga=cs=null,Qh(r),oo=null,Pl=0;var p=r.return;try{if(NR(i,p,r,o,wt)){un=1,Xu(i,wi(o,i.current)),Tt=null;return}}catch(g){if(p!==null)throw Tt=p,g;un=1,Xu(i,wi(o,i.current)),Tt=null;return}r.flags&32768?(Ct||u===1?i=!0:mo||(wt&536870912)!==0?i=!1:(Rr=i=!0,(u===2||u===9||u===3||u===6)&&(u=vi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Y_(r,i)):rf(r)}function rf(i){var r=i;do{if((r.flags&32768)!==0){Y_(r,Rr);return}i=r.return;var o=OR(r.alternate,r,Qa);if(o!==null){Tt=o;return}if(r=r.sibling,r!==null){Tt=r;return}Tt=r=i}while(r!==null);un===0&&(un=5)}function Y_(i,r){do{var o=FR(i.alternate,i);if(o!==null){o.flags&=32767,Tt=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){Tt=i;return}Tt=i=o}while(i!==null);un=6,Tt=null}function $_(i,r,o,u,p,g,T,L,k){i.cancelPendingCommit=null;do sf();while(Cn!==0);if((It&6)!==0)throw Error(a(327));if(r!==null){if(r===i.current)throw Error(a(177));if(g=r.lanes|r.childLanes,g|=Th,ki(i,o,g,T,L,k),i===en&&(Tt=en=null,wt=0),vo=r,Lr=i,Ja=o,Up=g,Pp=p,B_=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,YR(fe,function(){return eS(),null})):(i.callbackNode=null,i.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=B.T,B.T=null,p=z.p,z.p=2,T=It,It|=4;try{IR(i,r,o)}finally{It=T,z.p=p,B.T=u}}Cn=1,K_(),Z_(),Q_()}}function K_(){if(Cn===1){Cn=0;var i=Lr,r=vo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=B.T,B.T=null;var u=z.p;z.p=2;var p=It;It|=4;try{D_(r,i);var g=$p,T=Fy(i.containerInfo),L=g.focusedElem,k=g.selectionRange;if(T!==L&&L&&L.ownerDocument&&Oy(L.ownerDocument.documentElement,L)){if(k!==null&&_h(L)){var oe=k.start,_e=k.end;if(_e===void 0&&(_e=oe),"selectionStart"in L)L.selectionStart=oe,L.selectionEnd=Math.min(_e,L.value.length);else{var Me=L.ownerDocument||document,ce=Me&&Me.defaultView||window;if(ce.getSelection){var me=ce.getSelection(),$e=L.textContent.length,st=Math.min(k.start,$e),Zt=k.end===void 0?st:Math.min(k.end,$e);!me.extend&&st>Zt&&(T=Zt,Zt=st,st=T);var Z=Py(L,st),j=Py(L,Zt);if(Z&&j&&(me.rangeCount!==1||me.anchorNode!==Z.node||me.anchorOffset!==Z.offset||me.focusNode!==j.node||me.focusOffset!==j.offset)){var se=Me.createRange();se.setStart(Z.node,Z.offset),me.removeAllRanges(),st>Zt?(me.addRange(se),me.extend(j.node,j.offset)):(se.setEnd(j.node,j.offset),me.addRange(se))}}}}for(Me=[],me=L;me=me.parentNode;)me.nodeType===1&&Me.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Me.length;L++){var be=Me[L];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}yf=!!Yp,$p=Yp=null}finally{It=p,z.p=u,B.T=o}}i.current=r,Cn=2}}function Z_(){if(Cn===2){Cn=0;var i=Lr,r=vo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=B.T,B.T=null;var u=z.p;z.p=2;var p=It;It|=4;try{T_(i,r.alternate,r)}finally{It=p,z.p=u,B.T=o}}Cn=3}}function Q_(){if(Cn===4||Cn===3){Cn=0,U();var i=Lr,r=vo,o=Ja,u=B_;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Cn=5:(Cn=0,vo=Lr=null,J_(i,i.pendingLanes));var p=i.pendingLanes;if(p===0&&(Dr=null),Ws(o),r=r.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Re,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=B.T,p=z.p,z.p=2,B.T=null;try{for(var g=i.onRecoverableError,T=0;T<u.length;T++){var L=u[T];g(L.value,{componentStack:L.stack})}}finally{B.T=r,z.p=p}}(Ja&3)!==0&&sf(),va(i),p=i.pendingLanes,(o&261930)!==0&&(p&42)!==0?i===Op?Zl++:(Zl=0,Op=i):Zl=0,Ql(0)}}function J_(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,Nl(r)))}function sf(){return K_(),Z_(),Q_(),eS()}function eS(){if(Cn!==5)return!1;var i=Lr,r=Up;Up=0;var o=Ws(Ja),u=B.T,p=z.p;try{z.p=32>o?32:o,B.T=null,o=Pp,Pp=null;var g=Lr,T=Ja;if(Cn=0,vo=Lr=null,Ja=0,(It&6)!==0)throw Error(a(331));var L=It;if(It|=4,O_(g.current),N_(g,g.current,T,o),It=L,Ql(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Re,g)}catch{}return!0}finally{z.p=p,B.T=u,J_(i,r)}}function tS(i,r,o){r=wi(o,r),r=hp(i.stateNode,r,2),i=Er(i,r,2),i!==null&&(Yn(i,2),va(i))}function qt(i,r,o){if(i.tag===3)tS(i,i,o);else for(;r!==null;){if(r.tag===3){tS(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){i=wi(o,i),o=n_(2),u=Er(r,o,2),u!==null&&(i_(o,u,r,i),Yn(u,2),va(u));break}}r=r.return}}function Bp(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new VR;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(Dp=!0,p.add(o),i=XR.bind(null,i,r,o),r.then(i,i))}function XR(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,en===i&&(wt&o)===o&&(un===4||un===3&&(wt&62914560)===wt&&300>M()-Ju?(It&2)===0&&yo(i,0):Lp|=o,go===wt&&(go=0)),va(i)}function nS(i,r){r===0&&(r=Xt()),i=ss(i,r),i!==null&&(Yn(i,r),va(i))}function jR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),nS(i,o)}function qR(i,r){var o=0;switch(i.tag){case 31:case 13:var u=i.stateNode,p=i.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(r),nS(i,o)}function YR(i,r){return Mt(i,r)}var of=null,_o=null,zp=!1,lf=!1,Vp=!1,Ur=0;function va(i){i!==_o&&i.next===null&&(_o===null?of=_o=i:_o=_o.next=i),lf=!0,zp||(zp=!0,KR())}function Ql(i,r){if(!Vp&&lf){Vp=!0;do for(var o=!1,u=of;u!==null;){if(i!==0){var p=u.pendingLanes;if(p===0)var g=0;else{var T=u.suspendedLanes,L=u.pingedLanes;g=(1<<31-Ve(42|i)+1)-1,g&=p&~(T&~L),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,sS(u,g))}else g=wt,g=ye(u,u===en?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||qe(u,g)||(o=!0,sS(u,g));u=u.next}while(o);Vp=!1}}function $R(){iS()}function iS(){lf=zp=!1;var i=0;Ur!==0&&sC()&&(i=Ur);for(var r=M(),o=null,u=of;u!==null;){var p=u.next,g=aS(u,r);g===0?(u.next=null,o===null?of=p:o.next=p,p===null&&(_o=o)):(o=u,(i!==0||(g&3)!==0)&&(lf=!0)),u=p}Cn!==0&&Cn!==5||Ql(i),Ur!==0&&(Ur=0)}function aS(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,p=i.expirationTimes,g=i.pendingLanes&-62914561;0<g;){var T=31-Ve(g),L=1<<T,k=p[T];k===-1?((L&o)===0||(L&u)!==0)&&(p[T]=ct(L,r)):k<=r&&(i.expiredLanes|=L),g&=~L}if(r=en,o=wt,o=ye(i,i===r?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u=i.callbackNode,o===0||i===r&&(jt===2||jt===9)||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Et(u),i.callbackNode=null,i.callbackPriority=0;if((o&3)===0||qe(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Et(u),Ws(o)){case 2:case 8:o=de;break;case 32:o=fe;break;case 268435456:o=Ne;break;default:o=fe}return u=rS.bind(null,i),o=Mt(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Et(u),i.callbackPriority=2,i.callbackNode=null,2}function rS(i,r){if(Cn!==0&&Cn!==5)return i.callbackNode=null,i.callbackPriority=0,null;var o=i.callbackNode;if(sf()&&i.callbackNode!==o)return null;var u=wt;return u=ye(i,i===en?u:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),u===0?null:(V_(i,u,r),aS(i,M()),i.callbackNode!=null&&i.callbackNode===o?rS.bind(null,i):null)}function sS(i,r){if(sf())return null;V_(i,r,!0)}function KR(){lC(function(){(It&6)!==0?Mt($,$R):iS()})}function Hp(){if(Ur===0){var i=ao;i===0&&(i=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),Ur=i}return Ur}function oS(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:mu(""+i)}function lS(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function ZR(i,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var g=oS((p[wn]||null).action),T=u.submitter;T&&(r=(r=T[wn]||null)?oS(r.formAction):T.getAttribute("formAction"),r!==null&&(g=r,T=null));var L=new xu("action","action",null,u,p);i.push({event:L,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Ur!==0){var k=T?lS(p,T):new FormData(p);op(o,{pending:!0,data:k,method:p.method,action:g},null,k)}}else typeof g=="function"&&(L.preventDefault(),k=T?lS(p,T):new FormData(p),op(o,{pending:!0,data:k,method:p.method,action:g},g,k))},currentTarget:p}]})}}for(var Gp=0;Gp<Eh.length;Gp++){var kp=Eh[Gp],QR=kp.toLowerCase(),JR=kp[0].toUpperCase()+kp.slice(1);qi(QR,"on"+JR)}qi(zy,"onAnimationEnd"),qi(Vy,"onAnimationIteration"),qi(Hy,"onAnimationStart"),qi("dblclick","onDoubleClick"),qi("focusin","onFocus"),qi("focusout","onBlur"),qi(mR,"onTransitionRun"),qi(gR,"onTransitionStart"),qi(vR,"onTransitionCancel"),qi(Gy,"onTransitionEnd"),Oe("onMouseEnter",["mouseout","mouseover"]),Oe("onMouseLeave",["mouseout","mouseover"]),Oe("onPointerEnter",["pointerout","pointerover"]),Oe("onPointerLeave",["pointerout","pointerover"]),re("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),re("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),re("onBeforeInput",["compositionend","keypress","textInput","paste"]),re("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),re("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function cS(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],p=u.event;u=u.listeners;e:{var g=void 0;if(r)for(var T=u.length-1;0<=T;T--){var L=u[T],k=L.instance,oe=L.currentTarget;if(L=L.listener,k!==g&&p.isPropagationStopped())break e;g=L,p.currentTarget=oe;try{g(p)}catch(_e){bu(_e)}p.currentTarget=null,g=k}else for(T=0;T<u.length;T++){if(L=u[T],k=L.instance,oe=L.currentTarget,L=L.listener,k!==g&&p.isPropagationStopped())break e;g=L,p.currentTarget=oe;try{g(p)}catch(_e){bu(_e)}p.currentTarget=null,g=k}}}}function At(i,r){var o=r[pr];o===void 0&&(o=r[pr]=new Set);var u=i+"__bubble";o.has(u)||(uS(r,i,2,!1),o.add(u))}function Wp(i,r,o){var u=0;r&&(u|=4),uS(o,i,u,r)}var cf="_reactListening"+Math.random().toString(36).slice(2);function Xp(i){if(!i[cf]){i[cf]=!0,pe.forEach(function(o){o!=="selectionchange"&&(eC.has(o)||Wp(o,!1,i),Wp(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[cf]||(r[cf]=!0,Wp("selectionchange",!1,r))}}function uS(i,r,o,u){switch(zS(r)){case 2:var p=RC;break;case 8:p=CC;break;default:p=sm}o=p.bind(null,r,o,i),p=void 0,!fh||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?i.addEventListener(r,o,{capture:!0,passive:p}):i.addEventListener(r,o,!0):p!==void 0?i.addEventListener(r,o,{passive:p}):i.addEventListener(r,o,!1)}function jp(i,r,o,u,p){var g=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var L=u.stateNode.containerInfo;if(L===p)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&T.stateNode.containerInfo===p)return;T=T.return}for(;L!==null;){if(T=mr(L),T===null)return;if(k=T.tag,k===5||k===6||k===26||k===27){u=g=T;continue e}L=L.parentNode}}u=u.return}my(function(){var oe=g,_e=ch(o),Me=[];e:{var ce=ky.get(i);if(ce!==void 0){var me=xu,$e=i;switch(i){case"keypress":if(vu(o)===0)break e;case"keydown":case"keyup":me=qw;break;case"focusin":$e="focus",me=mh;break;case"focusout":$e="blur",me=mh;break;case"beforeblur":case"afterblur":me=mh;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=Ow;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=Kw;break;case zy:case Vy:case Hy:me=Bw;break;case Gy:me=Qw;break;case"scroll":case"scrollend":me=Uw;break;case"wheel":me=eR;break;case"copy":case"cut":case"paste":me=Vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=_y;break;case"toggle":case"beforetoggle":me=nR}var st=(r&4)!==0,Zt=!st&&(i==="scroll"||i==="scrollend"),Z=st?ce!==null?ce+"Capture":null:ce;st=[];for(var j=oe,se;j!==null;){var be=j;if(se=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||se===null||Z===null||(be=Sl(j,Z),be!=null&&st.push(ec(j,be,se))),Zt)break;j=j.return}0<st.length&&(ce=new me(ce,$e,null,o,_e),Me.push({event:ce,listeners:st}))}}if((r&7)===0){e:{if(ce=i==="mouseover"||i==="pointerover",me=i==="mouseout"||i==="pointerout",ce&&o!==lh&&($e=o.relatedTarget||o.fromElement)&&(mr($e)||$e[Fa]))break e;if((me||ce)&&(ce=_e.window===_e?_e:(ce=_e.ownerDocument)?ce.defaultView||ce.parentWindow:window,me?($e=o.relatedTarget||o.toElement,me=oe,$e=$e?mr($e):null,$e!==null&&(Zt=l($e),st=$e.tag,$e!==Zt||st!==5&&st!==27&&st!==6)&&($e=null)):(me=null,$e=oe),me!==$e)){if(st=yy,be="onMouseLeave",Z="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(st=_y,be="onPointerLeave",Z="onPointerEnter",j="pointer"),Zt=me==null?ce:ns(me),se=$e==null?ce:ns($e),ce=new st(be,j+"leave",me,o,_e),ce.target=Zt,ce.relatedTarget=se,be=null,mr(_e)===oe&&(st=new st(Z,j+"enter",$e,o,_e),st.target=se,st.relatedTarget=Zt,be=st),Zt=be,me&&$e)t:{for(st=tC,Z=me,j=$e,se=0,be=Z;be;be=st(be))se++;be=0;for(var at=j;at;at=st(at))be++;for(;0<se-be;)Z=st(Z),se--;for(;0<be-se;)j=st(j),be--;for(;se--;){if(Z===j||j!==null&&Z===j.alternate){st=Z;break t}Z=st(Z),j=st(j)}st=null}else st=null;me!==null&&fS(Me,ce,me,st,!1),$e!==null&&Zt!==null&&fS(Me,Zt,$e,st,!0)}}e:{if(ce=oe?ns(oe):window,me=ce.nodeName&&ce.nodeName.toLowerCase(),me==="select"||me==="input"&&ce.type==="file")var Pt=Ry;else if(Ay(ce))if(Cy)Pt=dR;else{Pt=uR;var et=cR}else me=ce.nodeName,!me||me.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&js(oe.elementType)&&(Pt=Ry):Pt=fR;if(Pt&&(Pt=Pt(i,oe))){wy(Me,Pt,o,_e);break e}et&&et(i,ce,oe),i==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&Xi(ce,"number",ce.value)}switch(et=oe?ns(oe):window,i){case"focusin":(Ay(et)||et.contentEditable==="true")&&(Ks=et,Sh=oe,Cl=null);break;case"focusout":Cl=Sh=Ks=null;break;case"mousedown":bh=!0;break;case"contextmenu":case"mouseup":case"dragend":bh=!1,Iy(Me,o,_e);break;case"selectionchange":if(pR)break;case"keydown":case"keyup":Iy(Me,o,_e)}var xt;if(vh)e:{switch(i){case"compositionstart":var Rt="onCompositionStart";break e;case"compositionend":Rt="onCompositionEnd";break e;case"compositionupdate":Rt="onCompositionUpdate";break e}Rt=void 0}else $s?Ey(i,o)&&(Rt="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(Rt="onCompositionStart");Rt&&(Sy&&o.locale!=="ko"&&($s||Rt!=="onCompositionStart"?Rt==="onCompositionEnd"&&$s&&(xt=gy()):(vr=_e,dh="value"in vr?vr.value:vr.textContent,$s=!0)),et=uf(oe,Rt),0<et.length&&(Rt=new xy(Rt,i,null,o,_e),Me.push({event:Rt,listeners:et}),xt?Rt.data=xt:(xt=Ty(o),xt!==null&&(Rt.data=xt)))),(xt=aR?rR(i,o):sR(i,o))&&(Rt=uf(oe,"onBeforeInput"),0<Rt.length&&(et=new xy("onBeforeInput","beforeinput",null,o,_e),Me.push({event:et,listeners:Rt}),et.data=xt)),ZR(Me,i,oe,o,_e)}cS(Me,r)})}function ec(i,r,o){return{instance:i,listener:r,currentTarget:o}}function uf(i,r){for(var o=r+"Capture",u=[];i!==null;){var p=i,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Sl(i,o),p!=null&&u.unshift(ec(i,p,g)),p=Sl(i,r),p!=null&&u.push(ec(i,p,g))),i.tag===3)return u;i=i.return}return[]}function tC(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function fS(i,r,o,u,p){for(var g=r._reactName,T=[];o!==null&&o!==u;){var L=o,k=L.alternate,oe=L.stateNode;if(L=L.tag,k!==null&&k===u)break;L!==5&&L!==26&&L!==27||oe===null||(k=oe,p?(oe=Sl(o,g),oe!=null&&T.unshift(ec(o,oe,k))):p||(oe=Sl(o,g),oe!=null&&T.push(ec(o,oe,k)))),o=o.return}T.length!==0&&i.push({event:r,listeners:T})}var nC=/\r\n?/g,iC=/\u0000|\uFFFD/g;function dS(i){return(typeof i=="string"?i:""+i).replace(nC,`
`).replace(iC,"")}function hS(i,r){return r=dS(r),dS(i)===r}function Kt(i,r,o,u,p,g){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Zn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Zn(i,""+u);break;case"className":ht(i,"class",u);break;case"tabIndex":ht(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":ht(i,o,u);break;case"style":Ia(i,u,g);break;case"data":if(r!=="object"){ht(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=mu(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&Kt(i,r,"name",p.name,p,null),Kt(i,r,"formEncType",p.formEncType,p,null),Kt(i,r,"formMethod",p.formMethod,p,null),Kt(i,r,"formTarget",p.formTarget,p,null)):(Kt(i,r,"encType",p.encType,p,null),Kt(i,r,"method",p.method,p,null),Kt(i,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=mu(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=Ba);break;case"onScroll":u!=null&&At("scroll",i);break;case"onScrollEnd":u!=null&&At("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=mu(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":At("beforetoggle",i),At("toggle",i),lt(i,"popover",u);break;case"xlinkActuate":Ye(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Ye(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Ye(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Ye(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Ye(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Ye(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Ye(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Ye(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Ye(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":lt(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Lw.get(o)||o,lt(i,o,u))}}function qp(i,r,o,u,p,g){switch(o){case"style":Ia(i,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Zn(i,u):(typeof u=="number"||typeof u=="bigint")&&Zn(i,""+u);break;case"onScroll":u!=null&&At("scroll",i);break;case"onScrollEnd":u!=null&&At("scrollend",i);break;case"onClick":u!=null&&(i.onclick=Ba);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),g=i[wn]||null,g=g!=null?g[o]:null,typeof g=="function"&&i.removeEventListener(r,g,p),typeof u=="function")){typeof g!="function"&&g!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,p);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):lt(i,o,u)}}}function zn(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",i),At("load",i);var u=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Kt(i,r,g,T,o,null)}}p&&Kt(i,r,"srcSet",o.srcSet,o,null),u&&Kt(i,r,"src",o.src,o,null);return;case"input":At("invalid",i);var L=g=T=p=null,k=null,oe=null;for(u in o)if(o.hasOwnProperty(u)){var _e=o[u];if(_e!=null)switch(u){case"name":p=_e;break;case"type":T=_e;break;case"checked":k=_e;break;case"defaultChecked":oe=_e;break;case"value":g=_e;break;case"defaultValue":L=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,r));break;default:Kt(i,r,u,_e,o,null)}}hi(i,g,L,k,oe,T,p,!1);return;case"select":At("invalid",i),u=T=g=null;for(p in o)if(o.hasOwnProperty(p)&&(L=o[p],L!=null))switch(p){case"value":g=L;break;case"defaultValue":T=L;break;case"multiple":u=L;default:Kt(i,r,p,L,o,null)}r=g,o=T,i.multiple=!!u,r!=null?pi(i,!!u,r,!1):o!=null&&pi(i,!!u,o,!0);return;case"textarea":At("invalid",i),g=p=u=null;for(T in o)if(o.hasOwnProperty(T)&&(L=o[T],L!=null))switch(T){case"value":u=L;break;case"defaultValue":p=L;break;case"children":g=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:Kt(i,r,T,L,o,null)}vn(i,u,p,g);return;case"option":for(k in o)o.hasOwnProperty(k)&&(u=o[k],u!=null)&&(k==="selected"?i.selected=u&&typeof u!="function"&&typeof u!="symbol":Kt(i,r,k,u,o,null));return;case"dialog":At("beforetoggle",i),At("toggle",i),At("cancel",i),At("close",i);break;case"iframe":case"object":At("load",i);break;case"video":case"audio":for(u=0;u<Jl.length;u++)At(Jl[u],i);break;case"image":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"embed":case"source":case"link":At("error",i),At("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in o)if(o.hasOwnProperty(oe)&&(u=o[oe],u!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:Kt(i,r,oe,u,o,null)}return;default:if(js(r)){for(_e in o)o.hasOwnProperty(_e)&&(u=o[_e],u!==void 0&&qp(i,r,_e,u,o,void 0));return}}for(L in o)o.hasOwnProperty(L)&&(u=o[L],u!=null&&Kt(i,r,L,u,o,null))}function aC(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,T=null,L=null,k=null,oe=null,_e=null;for(me in o){var Me=o[me];if(o.hasOwnProperty(me)&&Me!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":k=Me;default:u.hasOwnProperty(me)||Kt(i,r,me,null,u,Me)}}for(var ce in u){var me=u[ce];if(Me=o[ce],u.hasOwnProperty(ce)&&(me!=null||Me!=null))switch(ce){case"type":g=me;break;case"name":p=me;break;case"checked":oe=me;break;case"defaultChecked":_e=me;break;case"value":T=me;break;case"defaultValue":L=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,r));break;default:me!==Me&&Kt(i,r,ce,me,u,Me)}}Kn(i,T,L,k,oe,_e,g,p);return;case"select":me=T=L=ce=null;for(g in o)if(k=o[g],o.hasOwnProperty(g)&&k!=null)switch(g){case"value":break;case"multiple":me=k;default:u.hasOwnProperty(g)||Kt(i,r,g,null,u,k)}for(p in u)if(g=u[p],k=o[p],u.hasOwnProperty(p)&&(g!=null||k!=null))switch(p){case"value":ce=g;break;case"defaultValue":L=g;break;case"multiple":T=g;default:g!==k&&Kt(i,r,p,g,u,k)}r=L,o=T,u=me,ce!=null?pi(i,!!o,ce,!1):!!u!=!!o&&(r!=null?pi(i,!!o,r,!0):pi(i,!!o,o?[]:"",!1));return;case"textarea":me=ce=null;for(L in o)if(p=o[L],o.hasOwnProperty(L)&&p!=null&&!u.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Kt(i,r,L,null,u,p)}for(T in u)if(p=u[T],g=o[T],u.hasOwnProperty(T)&&(p!=null||g!=null))switch(T){case"value":ce=p;break;case"defaultValue":me=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==g&&Kt(i,r,T,p,u,g)}Gt(i,ce,me);return;case"option":for(var $e in o)ce=o[$e],o.hasOwnProperty($e)&&ce!=null&&!u.hasOwnProperty($e)&&($e==="selected"?i.selected=!1:Kt(i,r,$e,null,u,ce));for(k in u)ce=u[k],me=o[k],u.hasOwnProperty(k)&&ce!==me&&(ce!=null||me!=null)&&(k==="selected"?i.selected=ce&&typeof ce!="function"&&typeof ce!="symbol":Kt(i,r,k,ce,u,me));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in o)ce=o[st],o.hasOwnProperty(st)&&ce!=null&&!u.hasOwnProperty(st)&&Kt(i,r,st,null,u,ce);for(oe in u)if(ce=u[oe],me=o[oe],u.hasOwnProperty(oe)&&ce!==me&&(ce!=null||me!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,r));break;default:Kt(i,r,oe,ce,u,me)}return;default:if(js(r)){for(var Zt in o)ce=o[Zt],o.hasOwnProperty(Zt)&&ce!==void 0&&!u.hasOwnProperty(Zt)&&qp(i,r,Zt,void 0,u,ce);for(_e in u)ce=u[_e],me=o[_e],!u.hasOwnProperty(_e)||ce===me||ce===void 0&&me===void 0||qp(i,r,_e,ce,u,me);return}}for(var Z in o)ce=o[Z],o.hasOwnProperty(Z)&&ce!=null&&!u.hasOwnProperty(Z)&&Kt(i,r,Z,null,u,ce);for(Me in u)ce=u[Me],me=o[Me],!u.hasOwnProperty(Me)||ce===me||ce==null&&me==null||Kt(i,r,Me,ce,u,me)}function pS(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rC(){if(typeof performance.getEntriesByType=="function"){for(var i=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],g=p.transferSize,T=p.initiatorType,L=p.duration;if(g&&L&&pS(T)){for(T=0,L=p.responseEnd,u+=1;u<o.length;u++){var k=o[u],oe=k.startTime;if(oe>L)break;var _e=k.transferSize,Me=k.initiatorType;_e&&pS(Me)&&(k=k.responseEnd,T+=_e*(k<L?1:(L-oe)/(k-oe)))}if(--u,r+=8*(g+T)/(p.duration/1e3),i++,10<i)break}}if(0<i)return r/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Yp=null,$p=null;function ff(i){return i.nodeType===9?i:i.ownerDocument}function mS(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gS(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function Kp(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zp=null;function sC(){var i=window.event;return i&&i.type==="popstate"?i===Zp?!1:(Zp=i,!0):(Zp=null,!1)}var vS=typeof setTimeout=="function"?setTimeout:void 0,oC=typeof clearTimeout=="function"?clearTimeout:void 0,yS=typeof Promise=="function"?Promise:void 0,lC=typeof queueMicrotask=="function"?queueMicrotask:typeof yS<"u"?function(i){return yS.resolve(null).then(i).catch(cC)}:vS;function cC(i){setTimeout(function(){throw i})}function Pr(i){return i==="head"}function xS(i,r){var o=r,u=0;do{var p=o.nextSibling;if(i.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){i.removeChild(p),Eo(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")tc(i.ownerDocument.documentElement);else if(o==="head"){o=i.ownerDocument.head,tc(o);for(var g=o.firstChild;g;){var T=g.nextSibling,L=g.nodeName;g[ts]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=T}}else o==="body"&&tc(i.ownerDocument.body);o=p}while(o);Eo(r)}function _S(i,r){var o=i;i=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(i===0)break;i--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||i++;o=u}while(o)}function Qp(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Qp(o),_l(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function uC(i,r,o,u){for(;i.nodeType===1;){var p=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[ts])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(g=i.getAttribute("rel"),g==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(g!==p.rel||i.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||i.getAttribute("title")!==(p.title==null?null:p.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(g=i.getAttribute("src"),(g!==(p.src==null?null:p.src)||i.getAttribute("type")!==(p.type==null?null:p.type)||i.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&i.getAttribute("name")===g)return i}else return i;if(i=Ni(i.nextSibling),i===null)break}return null}function fC(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=Ni(i.nextSibling),i===null))return null;return i}function SS(i,r){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!r||(i=Ni(i.nextSibling),i===null))return null;return i}function Jp(i){return i.data==="$?"||i.data==="$~"}function em(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function dC(i,r){var o=i.ownerDocument;if(i.data==="$~")i._reactRetry=r;else if(i.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),i._reactRetry=u}}function Ni(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return i}var tm=null;function bS(i){i=i.nextSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="/$"||o==="/&"){if(r===0)return Ni(i.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}i=i.nextSibling}return null}function MS(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return i;r--}else o!=="/$"&&o!=="/&"||r++}i=i.previousSibling}return null}function ES(i,r,o){switch(r=ff(o),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}function tc(i){for(var r=i.attributes;r.length;)i.removeAttributeNode(r[0]);_l(i)}var Ui=new Map,TS=new Set;function df(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var er=z.d;z.d={f:hC,r:pC,D:mC,C:gC,L:vC,m:yC,X:_C,S:xC,M:SC};function hC(){var i=er.f(),r=nf();return i||r}function pC(i){var r=gr(i);r!==null&&r.tag===5&&r.type==="form"?Gx(r):er.r(i)}var So=typeof document>"u"?null:document;function AS(i,r,o){var u=So;if(u&&typeof r=="string"&&r){var p=ft(r);p='link[rel="'+i+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),TS.has(p)||(TS.add(p),i={rel:i,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),zn(r,"link",i),q(r),u.head.appendChild(r)))}}function mC(i){er.D(i),AS("dns-prefetch",i,null)}function gC(i,r){er.C(i,r),AS("preconnect",i,r)}function vC(i,r,o){er.L(i,r,o);var u=So;if(u&&i&&r){var p='link[rel="preload"][as="'+ft(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+ft(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+ft(o.imageSizes)+'"]')):p+='[href="'+ft(i)+'"]';var g=p;switch(r){case"style":g=bo(i);break;case"script":g=Mo(i)}Ui.has(g)||(i=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Ui.set(g,i),u.querySelector(p)!==null||r==="style"&&u.querySelector(nc(g))||r==="script"&&u.querySelector(ic(g))||(r=u.createElement("link"),zn(r,"link",i),q(r),u.head.appendChild(r)))}}function yC(i,r){er.m(i,r);var o=So;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+ft(u)+'"][href="'+ft(i)+'"]',g=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Mo(i)}if(!Ui.has(g)&&(i=v({rel:"modulepreload",href:i},r),Ui.set(g,i),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(ic(g)))return}u=o.createElement("link"),zn(u,"link",i),q(u),o.head.appendChild(u)}}}function xC(i,r,o){er.S(i,r,o);var u=So;if(u&&i){var p=N(u).hoistableStyles,g=bo(i);r=r||"default";var T=p.get(g);if(!T){var L={loading:0,preload:null};if(T=u.querySelector(nc(g)))L.loading=5;else{i=v({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Ui.get(g))&&nm(i,o);var k=T=u.createElement("link");q(k),zn(k,"link",i),k._p=new Promise(function(oe,_e){k.onload=oe,k.onerror=_e}),k.addEventListener("load",function(){L.loading|=1}),k.addEventListener("error",function(){L.loading|=2}),L.loading|=4,hf(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:L},p.set(g,T)}}}function _C(i,r){er.X(i,r);var o=So;if(o&&i){var u=N(o).hoistableScripts,p=Mo(i),g=u.get(p);g||(g=o.querySelector(ic(p)),g||(i=v({src:i,async:!0},r),(r=Ui.get(p))&&im(i,r),g=o.createElement("script"),q(g),zn(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function SC(i,r){er.M(i,r);var o=So;if(o&&i){var u=N(o).hoistableScripts,p=Mo(i),g=u.get(p);g||(g=o.querySelector(ic(p)),g||(i=v({src:i,async:!0,type:"module"},r),(r=Ui.get(p))&&im(i,r),g=o.createElement("script"),q(g),zn(g,"link",i),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(p,g))}}function wS(i,r,o,u){var p=(p=ae.current)?df(p):null;if(!p)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=bo(o.href),o=N(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=bo(o.href);var g=N(p).hoistableStyles,T=g.get(i);if(T||(p=p.ownerDocument||p,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(i,T),(g=p.querySelector(nc(i)))&&!g._p&&(T.instance=g,T.state.loading=5),Ui.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Ui.set(i,o),g||bC(p,i,o,T.state))),r&&u===null)throw Error(a(528,""));return T}if(r&&u!==null)throw Error(a(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Mo(o),o=N(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function bo(i){return'href="'+ft(i)+'"'}function nc(i){return'link[rel="stylesheet"]['+i+"]"}function RS(i){return v({},i,{"data-precedence":i.precedence,precedence:null})}function bC(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),zn(r,"link",o),q(r),i.head.appendChild(r))}function Mo(i){return'[src="'+ft(i)+'"]'}function ic(i){return"script[async]"+i}function CS(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+ft(o.href)+'"]');if(u)return r.instance=u,q(u),u;var p=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),q(u),zn(u,"style",p),hf(u,o.precedence,i),r.instance=u;case"stylesheet":p=bo(o.href);var g=i.querySelector(nc(p));if(g)return r.state.loading|=4,r.instance=g,q(g),g;u=RS(o),(p=Ui.get(p))&&nm(u,p),g=(i.ownerDocument||i).createElement("link"),q(g);var T=g;return T._p=new Promise(function(L,k){T.onload=L,T.onerror=k}),zn(g,"link",u),r.state.loading|=4,hf(g,o.precedence,i),r.instance=g;case"script":return g=Mo(o.src),(p=i.querySelector(ic(g)))?(r.instance=p,q(p),p):(u=o,(p=Ui.get(g))&&(u=v({},o),im(u,p)),i=i.ownerDocument||i,p=i.createElement("script"),q(p),zn(p,"link",u),i.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,hf(u,o.precedence,i));return r.instance}function hf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,g=p,T=0;T<u.length;T++){var L=u[T];if(L.dataset.precedence===r)g=L;else if(g!==p)break}g?g.parentNode.insertBefore(i,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function nm(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function im(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var pf=null;function DS(i,r,o){if(pf===null){var u=new Map,p=pf=new Map;p.set(o,u)}else p=pf,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),p=0;p<o.length;p++){var g=o[p];if(!(g[ts]||g[gn]||i==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(r)||"";T=i+T;var L=u.get(T);L?L.push(g):u.set(T,[g])}}return u}function LS(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function MC(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(i=r.disabled,typeof r.precedence=="string"&&i==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function NS(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function EC(i,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=bo(u.href),g=r.querySelector(nc(p));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(i.count++,i=mf.bind(i),r.then(i,i)),o.state.loading|=4,o.instance=g,q(g);return}g=r.ownerDocument||r,u=RS(u),(p=Ui.get(p))&&nm(u,p),g=g.createElement("link"),q(g);var T=g;T._p=new Promise(function(L,k){T.onload=L,T.onerror=k}),zn(g,"link",u),o.instance=g}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(i.count++,o=mf.bind(i),r.addEventListener("load",o),r.addEventListener("error",o))}}var am=0;function TC(i,r){return i.stylesheets&&i.count===0&&vf(i,i.stylesheets),0<i.count||0<i.imgCount?function(o){var u=setTimeout(function(){if(i.stylesheets&&vf(i,i.stylesheets),i.unsuspend){var g=i.unsuspend;i.unsuspend=null,g()}},6e4+r);0<i.imgBytes&&am===0&&(am=62500*rC());var p=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&vf(i,i.stylesheets),i.unsuspend)){var g=i.unsuspend;i.unsuspend=null,g()}},(i.imgBytes>am?50:800)+r);return i.unsuspend=o,function(){i.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function mf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vf(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var gf=null;function vf(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,gf=new Map,r.forEach(AC,i),gf=null,mf.call(i))}function AC(i,r){if(!(r.state.loading&4)){var o=gf.get(i);if(o)var u=o.get(null);else{o=new Map,gf.set(i,o);for(var p=i.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var T=p[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}p=r.instance,T=p.getAttribute("data-precedence"),g=o.get(T)||u,g===u&&o.set(null,p),o.set(T,p),this.count++,u=mf.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),g?g.parentNode.insertBefore(p,g.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(p,i.firstChild)),r.state.loading|=4}}var ac={$$typeof:w,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function wC(i,r,o,u,p,g,T,L,k){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lt(0),this.hiddenUpdates=Lt(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function US(i,r,o,u,p,g,T,L,k,oe,_e,Me){return i=new wC(i,r,o,T,k,oe,_e,Me,L),r=1,g===!0&&(r|=24),g=gi(3,null,null,r),i.current=g,g.stateNode=i,r=Ih(),r.refCount++,i.pooledCache=r,r.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:r},Hh(g),i}function PS(i){return i?(i=Js,i):Js}function OS(i,r,o,u,p,g){p=PS(p),u.context===null?u.context=p:u.pendingContext=p,u=Mr(r),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Er(i,u,r),o!==null&&(li(o,i,r),Fl(o,i,r))}function FS(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function rm(i,r){FS(i,r),(i=i.alternate)&&FS(i,r)}function IS(i){if(i.tag===13||i.tag===31){var r=ss(i,67108864);r!==null&&li(r,i,67108864),rm(i,67108864)}}function BS(i){if(i.tag===13||i.tag===31){var r=Si();r=ks(r);var o=ss(i,r);o!==null&&li(o,i,r),rm(i,r)}}var yf=!0;function RC(i,r,o,u){var p=B.T;B.T=null;var g=z.p;try{z.p=2,sm(i,r,o,u)}finally{z.p=g,B.T=p}}function CC(i,r,o,u){var p=B.T;B.T=null;var g=z.p;try{z.p=8,sm(i,r,o,u)}finally{z.p=g,B.T=p}}function sm(i,r,o,u){if(yf){var p=om(u);if(p===null)jp(i,r,u,xf,o),VS(i,u);else if(LC(p,i,r,o,u))u.stopPropagation();else if(VS(i,u),r&4&&-1<DC.indexOf(i)){for(;p!==null;){var g=gr(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=Ae(g.pendingLanes);if(T!==0){var L=g;for(L.pendingLanes|=2,L.entangledLanes|=2;T;){var k=1<<31-Ve(T);L.entanglements[1]|=k,T&=~k}va(g),(It&6)===0&&(ef=M()+500,Ql(0))}}break;case 31:case 13:L=ss(g,2),L!==null&&li(L,g,2),nf(),rm(g,2)}if(g=om(u),g===null&&jp(i,r,u,xf,o),g===p)break;p=g}p!==null&&u.stopPropagation()}else jp(i,r,u,null,o)}}function om(i){return i=ch(i),lm(i)}var xf=null;function lm(i){if(xf=null,i=mr(i),i!==null){var r=l(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=c(r),i!==null)return i;i=null}else if(o===31){if(i=f(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return xf=i,null}function zS(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H()){case $:return 2;case de:return 8;case fe:case Ie:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var cm=!1,Or=null,Fr=null,Ir=null,rc=new Map,sc=new Map,Br=[],DC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function VS(i,r){switch(i){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":rc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":sc.delete(r.pointerId)}}function oc(i,r,o,u,p,g){return i===null||i.nativeEvent!==g?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[p]},r!==null&&(r=gr(r),r!==null&&IS(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),i)}function LC(i,r,o,u,p){switch(r){case"focusin":return Or=oc(Or,i,r,o,u,p),!0;case"dragenter":return Fr=oc(Fr,i,r,o,u,p),!0;case"mouseover":return Ir=oc(Ir,i,r,o,u,p),!0;case"pointerover":var g=p.pointerId;return rc.set(g,oc(rc.get(g)||null,i,r,o,u,p)),!0;case"gotpointercapture":return g=p.pointerId,sc.set(g,oc(sc.get(g)||null,i,r,o,u,p)),!0}return!1}function HS(i){var r=mr(i.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){i.blockedOn=r,Xs(i.priority,function(){BS(o)});return}}else if(r===31){if(r=f(o),r!==null){i.blockedOn=r,Xs(i.priority,function(){BS(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function _f(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=om(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);lh=u,o.target.dispatchEvent(u),lh=null}else return r=gr(o),r!==null&&IS(r),i.blockedOn=o,!1;r.shift()}return!0}function GS(i,r,o){_f(i)&&o.delete(r)}function NC(){cm=!1,Or!==null&&_f(Or)&&(Or=null),Fr!==null&&_f(Fr)&&(Fr=null),Ir!==null&&_f(Ir)&&(Ir=null),rc.forEach(GS),sc.forEach(GS)}function Sf(i,r){i.blockedOn===r&&(i.blockedOn=null,cm||(cm=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,NC)))}var bf=null;function kS(i){bf!==i&&(bf=i,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){bf===i&&(bf=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],p=i[r+2];if(typeof u!="function"){if(lm(u||o)===null)continue;break}var g=gr(o);g!==null&&(i.splice(r,3),r-=3,op(g,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Eo(i){function r(k){return Sf(k,i)}Or!==null&&Sf(Or,i),Fr!==null&&Sf(Fr,i),Ir!==null&&Sf(Ir,i),rc.forEach(r),sc.forEach(r);for(var o=0;o<Br.length;o++){var u=Br[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<Br.length&&(o=Br[0],o.blockedOn===null);)HS(o),o.blockedOn===null&&Br.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],g=o[u+1],T=p[wn]||null;if(typeof g=="function")T||kS(o);else if(T){var L=null;if(g&&g.hasAttribute("formAction")){if(p=g,T=g[wn]||null)L=T.formAction;else if(lm(p)!==null)continue}else L=T.action;typeof L=="function"?o[u+1]=L:(o.splice(u,3),u-=3),kS(o)}}}function WS(){function i(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(T){return p=T})},focusReset:"manual",scroll:"manual"})}function r(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),p!==null&&(p(),p=null)}}}function um(i){this._internalRoot=i}Mf.prototype.render=um.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var o=r.current,u=Si();OS(o,u,i,r,null,null)},Mf.prototype.unmount=um.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;OS(i.current,2,null,i,null,null),nf(),r[Fa]=null}};function Mf(i){this._internalRoot=i}Mf.prototype.unstable_scheduleHydration=function(i){if(i){var r=ha();i={blockedOn:null,target:i,priority:r};for(var o=0;o<Br.length&&r!==0&&r<Br[o].priority;o++);Br.splice(o,0,i),o===0&&HS(i)}};var XS=e.version;if(XS!=="19.2.4")throw Error(a(527,XS,"19.2.4"));z.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=h(r),i=i!==null?m(i):null,i=i===null?null:i.stateNode,i};var UC={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ef=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ef.isDisabled&&Ef.supportsFiber)try{Re=Ef.inject(UC),Te=Ef}catch{}}return cc.createRoot=function(i,r){if(!s(i))throw Error(a(299));var o=!1,u="",p=Qx,g=Jx,T=e_;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError)),r=US(i,1,!1,null,null,o,u,null,p,g,T,WS),i[Fa]=r.current,Xp(i),new um(r)},cc.hydrateRoot=function(i,r,o){if(!s(i))throw Error(a(299));var u=!1,p="",g=Qx,T=Jx,L=e_,k=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(L=o.onRecoverableError),o.formState!==void 0&&(k=o.formState)),r=US(i,1,!0,r,o??null,u,p,k,g,T,L,WS),r.context=PS(null),o=r.current,u=Si(),u=ks(u),p=Mr(u),p.callback=null,Er(o,p,u),o=u,r.current.lanes=o,Yn(r,o),va(r),i[Fa]=r.current,Xp(i),new Mf(r)},cc.version="19.2.4",cc}var nb;function XC(){if(nb)return hm.exports;nb=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),hm.exports=WC(),hm.exports}var jC=XC();var ib="popstate";function ab(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function qC(t={}){function e(a,s){let l=s.state?.masked,{pathname:c,search:f,hash:d}=l||a.location;return R0("",{pathname:c,search:f,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default",l?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,s){return typeof s=="string"?s:Oc(s)}return $C(e,n,null,t)}function ln(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Da(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YC(){return Math.random().toString(36).substring(2,10)}function rb(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function R0(t,e,n=null,a,s){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ol(e):e,state:n,key:e&&e.key||a||YC(),unstable_mask:s}}function Oc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function ol(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let a=t.indexOf("?");a>=0&&(e.search=t.substring(a),t=t.substring(0,a)),t&&(e.pathname=t)}return e}function $C(t,e,n,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,f="POP",d=null,h=m();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function m(){return(c.state||{idx:null}).idx}function v(){f="POP";let _=m(),S=_==null?null:_-h;h=_,d&&d({action:f,location:E.location,delta:S})}function y(_,S){f="PUSH";let A=ab(_)?_:R0(E.location,_,S);h=m()+1;let w=rb(A,h),D=E.createHref(A.unstable_mask||A);try{c.pushState(w,"",D)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(D)}l&&d&&d({action:f,location:E.location,delta:1})}function x(_,S){f="REPLACE";let A=ab(_)?_:R0(E.location,_,S);h=m();let w=rb(A,h),D=E.createHref(A.unstable_mask||A);c.replaceState(w,"",D),l&&d&&d({action:f,location:E.location,delta:0})}function b(_){return KC(_)}let E={get action(){return f},get location(){return t(s,c)},listen(_){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(ib,v),d=_,()=>{s.removeEventListener(ib,v),d=null}},createHref(_){return e(s,_)},createURL:b,encodeLocation(_){let S=b(_);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:y,replace:x,go(_){return c.go(_)}};return E}function KC(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ln(n,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:Oc(t);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function jM(t,e,n="/"){return ZC(t,e,n,!1)}function ZC(t,e,n,a){let s=typeof e=="string"?ol(e):e,l=cr(s.pathname||"/",n);if(l==null)return null;let c=qM(t);QC(c);let f=null;for(let d=0;f==null&&d<c.length;++d){let h=c2(l);f=o2(c[d],h,a)}return f}function qM(t,e=[],n=[],a="",s=!1){let l=(c,f,d=s,h)=>{let m={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&d)return;ln(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let v=Aa([a,m.relativePath]),y=n.concat(m);c.children&&c.children.length>0&&(ln(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),qM(c.children,e,y,v,d)),!(c.path==null&&!c.index)&&e.push({path:v,score:r2(v,c.index),routesMeta:y})};return t.forEach((c,f)=>{if(c.path===""||!c.path?.includes("?"))l(c,f);else for(let d of YM(c.path))l(c,f,!0,d)}),e}function YM(t){let e=t.split("/");if(e.length===0)return[];let[n,...a]=e,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=YM(a.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...c),f.map(d=>t.startsWith("/")&&d===""?"/":d)}function QC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:s2(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var JC=/^:[\w-]+$/,e2=3,t2=2,n2=1,i2=10,a2=-2,sb=t=>t==="*";function r2(t,e){let n=t.split("/"),a=n.length;return n.some(sb)&&(a+=a2),e&&(a+=t2),n.filter(s=>!sb(s)).reduce((s,l)=>s+(JC.test(l)?e2:l===""?n2:i2),a)}function s2(t,e){return t.length===e.length&&t.slice(0,-1).every((a,s)=>a===e[s])?t[t.length-1]-e[e.length-1]:0}function o2(t,e,n=!1){let{routesMeta:a}=t,s={},l="/",c=[];for(let f=0;f<a.length;++f){let d=a[f],h=f===a.length-1,m=l==="/"?e:e.slice(l.length)||"/",v=Rd({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},m),y=d.route;if(!v&&h&&n&&!a[a.length-1].route.index&&(v=Rd({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!v)return null;Object.assign(s,v.params),c.push({params:s,pathname:Aa([l,v.pathname]),pathnameBase:h2(Aa([l,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(l=Aa([l,v.pathnameBase]))}return c}function Rd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,a]=l2(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:m,isOptional:v},y)=>{if(m==="*"){let b=f[y]||"";c=l.slice(0,l.length-b.length).replace(/(.)\/+$/,"$1")}const x=f[y];return v&&!x?h[m]=void 0:h[m]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:t}}function l2(t,e=!1,n=!0){Da(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let a=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,d,h,m)=>{if(a.push({paramName:f,isOptional:d!=null}),d){let v=m.charAt(h+c.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(a.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function c2(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Da(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function cr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=t.charAt(n);return a&&a!=="/"?null:t.slice(n)||"/"}var u2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function f2(t,e="/"){let{pathname:n,search:a="",hash:s=""}=typeof t=="string"?ol(t):t,l;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?l=ob(n.substring(1),"/"):l=ob(n,e)):l=e,{pathname:l,search:p2(a),hash:m2(s)}}function ob(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function vm(t,e,n,a){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function d2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $M(t){let e=d2(t);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function ov(t,e,n,a=!1){let s;typeof t=="string"?s=ol(t):(s={...t},ln(!s.pathname||!s.pathname.includes("?"),vm("?","pathname","search",s)),ln(!s.pathname||!s.pathname.includes("#"),vm("#","pathname","hash",s)),ln(!s.search||!s.search.includes("#"),vm("#","search","hash",s)));let l=t===""||s.pathname==="",c=l?"/":s.pathname,f;if(c==null)f=n;else{let v=e.length-1;if(!a&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),v-=1;s.pathname=y.join("/")}f=v>=0?e[v]:"/"}let d=f2(s,f),h=c&&c!=="/"&&c.endsWith("/"),m=(l||c===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}var Aa=t=>t.join("/").replace(/\/\/+/g,"/"),h2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),p2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,m2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,g2=class{constructor(t,e,n,a=!1){this.status=t,this.statusText=e||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function v2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function y2(t){return t.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var KM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ZM(t,e){let n=t;if(typeof n!="string"||!u2.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,s=!1;if(KM)try{let l=new URL(window.location.href),c=n.startsWith("//")?new URL(l.protocol+n):new URL(n),f=cr(c.pathname,e);c.origin===l.origin&&f!=null?n=f+c.search+c.hash:s=!0}catch{Da(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:s,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var QM=["POST","PUT","PATCH","DELETE"];new Set(QM);var x2=["GET",...QM];new Set(x2);var ll=I.createContext(null);ll.displayName="DataRouter";var qd=I.createContext(null);qd.displayName="DataRouterState";var _2=I.createContext(!1),JM=I.createContext({isTransitioning:!1});JM.displayName="ViewTransition";var S2=I.createContext(new Map);S2.displayName="Fetchers";var b2=I.createContext(null);b2.displayName="Await";var Gi=I.createContext(null);Gi.displayName="Navigation";var Kc=I.createContext(null);Kc.displayName="Location";var hr=I.createContext({outlet:null,matches:[],isDataRoute:!1});hr.displayName="Route";var lv=I.createContext(null);lv.displayName="RouteError";var eE="REACT_ROUTER_ERROR",M2="REDIRECT",E2="ROUTE_ERROR_RESPONSE";function T2(t){if(t.startsWith(`${eE}:${M2}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function A2(t){if(t.startsWith(`${eE}:${E2}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new g2(e.status,e.statusText,e.data)}catch{}}function w2(t,{relative:e}={}){ln(Zc(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=I.useContext(Gi),{hash:s,pathname:l,search:c}=Qc(t,{relative:e}),f=l;return n!=="/"&&(f=l==="/"?n:Aa([n,l])),a.createHref({pathname:f,search:c,hash:s})}function Zc(){return I.useContext(Kc)!=null}function Zr(){return ln(Zc(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(Kc).location}var tE="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nE(t){I.useContext(Gi).static||I.useLayoutEffect(t)}function R2(){let{isDataRoute:t}=I.useContext(hr);return t?H2():C2()}function C2(){ln(Zc(),"useNavigate() may be used only in the context of a <Router> component.");let t=I.useContext(ll),{basename:e,navigator:n}=I.useContext(Gi),{matches:a}=I.useContext(hr),{pathname:s}=Zr(),l=JSON.stringify($M(a)),c=I.useRef(!1);return nE(()=>{c.current=!0}),I.useCallback((d,h={})=>{if(Da(c.current,tE),!c.current)return;if(typeof d=="number"){n.go(d);return}let m=ov(d,JSON.parse(l),s,h.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Aa([e,m.pathname])),(h.replace?n.replace:n.push)(m,h.state,h)},[e,n,l,s,t])}I.createContext(null);function Qc(t,{relative:e}={}){let{matches:n}=I.useContext(hr),{pathname:a}=Zr(),s=JSON.stringify($M(n));return I.useMemo(()=>ov(t,JSON.parse(s),a,e==="path"),[t,s,a,e])}function D2(t,e){return iE(t,e)}function iE(t,e,n){ln(Zc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=I.useContext(Gi),{matches:s}=I.useContext(hr),l=s[s.length-1],c=l?l.params:{},f=l?l.pathname:"/",d=l?l.pathnameBase:"/",h=l&&l.route;{let _=h&&h.path||"";rE(f,!h||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let m=Zr(),v;if(e){let _=typeof e=="string"?ol(e):e;ln(d==="/"||_.pathname?.startsWith(d),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=m;let y=v.pathname||"/",x=y;if(d!=="/"){let _=d.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(_.length).join("/")}let b=jM(t,{pathname:x});Da(h||b!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Da(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=O2(b&&b.map(_=>Object.assign({},_,{params:Object.assign({},c,_.params),pathname:Aa([d,a.encodeLocation?a.encodeLocation(_.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?d:Aa([d,a.encodeLocation?a.encodeLocation(_.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),s,n);return e&&E?I.createElement(Kc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...v},navigationType:"POP"}},E):E}function L2(){let t=V2(),e=v2(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:l},"ErrorBoundary")," or"," ",I.createElement("code",{style:l},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:s},n):null,c)}var N2=I.createElement(L2,null),aE=class extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=A2(t.digest);n&&(t=n)}let e=t!==void 0?I.createElement(hr.Provider,{value:this.props.routeContext},I.createElement(lv.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?I.createElement(U2,{error:t},e):e}};aE.contextType=_2;var ym=new WeakMap;function U2({children:t,error:e}){let{basename:n}=I.useContext(Gi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let a=T2(e.digest);if(a){let s=ym.get(e);if(s)throw s;let l=ZM(a.location,n);if(KM&&!ym.get(e))if(l.isExternal||a.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw ym.set(e,c),c}return I.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return t}function P2({routeContext:t,match:e,children:n}){let a=I.useContext(ll);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),I.createElement(hr.Provider,{value:t},n)}function O2(t,e=[],n){let a=n?.state;if(t==null){if(!a)return null;if(a.errors)t=a.matches;else if(e.length===0&&!a.initialized&&a.matches.length>0)t=a.matches;else return null}let s=t,l=a?.errors;if(l!=null){let m=s.findIndex(v=>v.route.id&&l?.[v.route.id]!==void 0);ln(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,f=-1;if(n&&a){c=a.renderFallback;for(let m=0;m<s.length;m++){let v=s[m];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=m),v.route.id){let{loaderData:y,errors:x}=a,b=v.route.loader&&!y.hasOwnProperty(v.route.id)&&(!x||x[v.route.id]===void 0);if(v.route.lazy||b){n.isStatic&&(c=!0),f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}}let d=n?.onError,h=a&&d?(m,v)=>{d(m,{location:a.location,params:a.matches?.[0]?.params??{},unstable_pattern:y2(a.matches),errorInfo:v})}:void 0;return s.reduceRight((m,v,y)=>{let x,b=!1,E=null,_=null;a&&(x=l&&v.route.id?l[v.route.id]:void 0,E=v.route.errorElement||N2,c&&(f<0&&y===0?(rE("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,_=null):f===y&&(b=!0,_=v.route.hydrateFallbackElement||null)));let S=e.concat(s.slice(0,y+1)),A=()=>{let w;return x?w=E:b?w=_:v.route.Component?w=I.createElement(v.route.Component,null):v.route.element?w=v.route.element:w=m,I.createElement(P2,{match:v,routeContext:{outlet:m,matches:S,isDataRoute:a!=null},children:w})};return a&&(v.route.ErrorBoundary||v.route.errorElement||y===0)?I.createElement(aE,{location:a.location,revalidation:a.revalidation,component:E,error:x,children:A(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):A()},null)}function cv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function F2(t){let e=I.useContext(ll);return ln(e,cv(t)),e}function I2(t){let e=I.useContext(qd);return ln(e,cv(t)),e}function B2(t){let e=I.useContext(hr);return ln(e,cv(t)),e}function uv(t){let e=B2(t),n=e.matches[e.matches.length-1];return ln(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function z2(){return uv("useRouteId")}function V2(){let t=I.useContext(lv),e=I2("useRouteError"),n=uv("useRouteError");return t!==void 0?t:e.errors?.[n]}function H2(){let{router:t}=F2("useNavigate"),e=uv("useNavigate"),n=I.useRef(!1);return nE(()=>{n.current=!0}),I.useCallback(async(s,l={})=>{Da(n.current,tE),n.current&&(typeof s=="number"?await t.navigate(s):await t.navigate(s,{fromRouteId:e,...l}))},[t,e])}var lb={};function rE(t,e,n){!e&&!lb[t]&&(lb[t]=!0,Da(!1,n))}I.memo(G2);function G2({routes:t,future:e,state:n,isStatic:a,onError:s}){return iE(t,void 0,{state:n,isStatic:a,onError:s})}function sE(t){ln(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function k2({basename:t="/",children:e=null,location:n,navigationType:a="POP",navigator:s,static:l=!1,unstable_useTransitions:c}){ln(!Zc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),d=I.useMemo(()=>({basename:f,navigator:s,static:l,unstable_useTransitions:c,future:{}}),[f,s,l,c]);typeof n=="string"&&(n=ol(n));let{pathname:h="/",search:m="",hash:v="",state:y=null,key:x="default",unstable_mask:b}=n,E=I.useMemo(()=>{let _=cr(h,f);return _==null?null:{location:{pathname:_,search:m,hash:v,state:y,key:x,unstable_mask:b},navigationType:a}},[f,h,m,v,y,x,a,b]);return Da(E!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:I.createElement(Gi.Provider,{value:d},I.createElement(Kc.Provider,{children:e,value:E}))}function W2({children:t,location:e}){return D2(C0(t),e)}function C0(t,e=[]){let n=[];return I.Children.forEach(t,(a,s)=>{if(!I.isValidElement(a))return;let l=[...e,s];if(a.type===I.Fragment){n.push.apply(n,C0(a.props.children,l));return}ln(a.type===sE,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ln(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=C0(a.props.children,l)),n.push(c)}),n}var cd="get",ud="application/x-www-form-urlencoded";function Yd(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function X2(t){return Yd(t)&&t.tagName.toLowerCase()==="button"}function j2(t){return Yd(t)&&t.tagName.toLowerCase()==="form"}function q2(t){return Yd(t)&&t.tagName.toLowerCase()==="input"}function Y2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $2(t,e){return t.button===0&&(!e||e==="_self")&&!Y2(t)}var Tf=null;function K2(){if(Tf===null)try{new FormData(document.createElement("form"),0),Tf=!1}catch{Tf=!0}return Tf}var Z2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xm(t){return t!=null&&!Z2.has(t)?(Da(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ud}"`),null):t}function Q2(t,e){let n,a,s,l,c;if(j2(t)){let f=t.getAttribute("action");a=f?cr(f,e):null,n=t.getAttribute("method")||cd,s=xm(t.getAttribute("enctype"))||ud,l=new FormData(t)}else if(X2(t)||q2(t)&&(t.type==="submit"||t.type==="image")){let f=t.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=t.getAttribute("formaction")||f.getAttribute("action");if(a=d?cr(d,e):null,n=t.getAttribute("formmethod")||f.getAttribute("method")||cd,s=xm(t.getAttribute("formenctype"))||xm(f.getAttribute("enctype"))||ud,l=new FormData(f,t),!K2()){let{name:h,type:m,value:v}=t;if(m==="image"){let y=h?`${h}.`:"";l.append(`${y}x`,"0"),l.append(`${y}y`,"0")}else h&&l.append(h,v)}}else{if(Yd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=cd,a=null,s=ud,c=t}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:n.toLowerCase(),encType:s,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function fv(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function J2(t,e,n,a){let s=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${a}`:s.pathname=`${s.pathname}.${a}`:s.pathname==="/"?s.pathname=`_root.${a}`:e&&cr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${a}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${a}`,s}async function e3(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function t3(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function n3(t,e,n){let a=await Promise.all(t.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await e3(l,n);return c.links?c.links():[]}return[]}));return s3(a.flat(1).filter(t3).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function cb(t,e,n,a,s,l){let c=(d,h)=>n[h]?d.route.id!==n[h].route.id:!0,f=(d,h)=>n[h].pathname!==d.pathname||n[h].route.path?.endsWith("*")&&n[h].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,h)=>c(d,h)||f(d,h)):l==="data"?e.filter((d,h)=>{let m=a.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(c(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let v=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function i3(t,e,{includeHydrateFallback:n}={}){return a3(t.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),n&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function a3(t){return[...new Set(t)]}function r3(t){let e={},n=Object.keys(t).sort();for(let a of n)e[a]=t[a];return e}function s3(t,e){let n=new Set;return new Set(e),t.reduce((a,s)=>{let l=JSON.stringify(r3(s));return n.has(l)||(n.add(l),a.push({key:l,link:s})),a},[])}function oE(){let t=I.useContext(ll);return fv(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function o3(){let t=I.useContext(qd);return fv(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var dv=I.createContext(void 0);dv.displayName="FrameworkContext";function lE(){let t=I.useContext(dv);return fv(t,"You must render this element inside a <HydratedRouter> element"),t}function l3(t,e){let n=I.useContext(dv),[a,s]=I.useState(!1),[l,c]=I.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:m,onTouchStart:v}=e,y=I.useRef(null);I.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let E=S=>{S.forEach(A=>{c(A.isIntersecting)})},_=new IntersectionObserver(E,{threshold:.5});return y.current&&_.observe(y.current),()=>{_.disconnect()}}},[t]),I.useEffect(()=>{if(a){let E=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(E)}}},[a]);let x=()=>{s(!0)},b=()=>{s(!1),c(!1)};return n?t!=="intent"?[l,y,{}]:[l,y,{onFocus:uc(f,x),onBlur:uc(d,b),onMouseEnter:uc(h,x),onMouseLeave:uc(m,b),onTouchStart:uc(v,x)}]:[!1,y,{}]}function uc(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function c3({page:t,...e}){let{router:n}=oE(),a=I.useMemo(()=>jM(n.routes,t,n.basename),[n.routes,t,n.basename]);return a?I.createElement(f3,{page:t,matches:a,...e}):null}function u3(t){let{manifest:e,routeModules:n}=lE(),[a,s]=I.useState([]);return I.useEffect(()=>{let l=!1;return n3(t,e,n).then(c=>{l||s(c)}),()=>{l=!0}},[t,e,n]),a}function f3({page:t,matches:e,...n}){let a=Zr(),{future:s,manifest:l,routeModules:c}=lE(),{basename:f}=oE(),{loaderData:d,matches:h}=o3(),m=I.useMemo(()=>cb(t,e,h,l,a,"data"),[t,e,h,l,a]),v=I.useMemo(()=>cb(t,e,h,l,a,"assets"),[t,e,h,l,a]),y=I.useMemo(()=>{if(t===a.pathname+a.search+a.hash)return[];let E=new Set,_=!1;if(e.forEach(A=>{let w=l.routes[A.route.id];!w||!w.hasLoader||(!m.some(D=>D.route.id===A.route.id)&&A.route.id in d&&c[A.route.id]?.shouldRevalidate||w.hasClientLoader?_=!0:E.add(A.route.id))}),E.size===0)return[];let S=J2(t,f,s.unstable_trailingSlashAwareDataRequests,"data");return _&&E.size>0&&S.searchParams.set("_routes",e.filter(A=>E.has(A.route.id)).map(A=>A.route.id).join(",")),[S.pathname+S.search]},[f,s.unstable_trailingSlashAwareDataRequests,d,a,l,m,e,t,c]),x=I.useMemo(()=>i3(v,l),[v,l]),b=u3(v);return I.createElement(I.Fragment,null,y.map(E=>I.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),x.map(E=>I.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),b.map(({key:E,link:_})=>I.createElement("link",{key:E,nonce:n.nonce,..._,crossOrigin:_.crossOrigin??n.crossOrigin})))}function d3(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var h3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{h3&&(window.__reactRouterVersion="7.13.1")}catch{}function p3({basename:t,children:e,unstable_useTransitions:n,window:a}){let s=I.useRef();s.current==null&&(s.current=qC({window:a,v5Compat:!0}));let l=s.current,[c,f]=I.useState({action:l.action,location:l.location}),d=I.useCallback(h=>{n===!1?f(h):I.startTransition(()=>f(h))},[n]);return I.useLayoutEffect(()=>l.listen(d),[l,d]),I.createElement(k2,{basename:t,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:n})}var cE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hv=I.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,unstable_mask:f,state:d,target:h,to:m,preventScrollReset:v,viewTransition:y,unstable_defaultShouldRevalidate:x,...b},E){let{basename:_,navigator:S,unstable_useTransitions:A}=I.useContext(Gi),w=typeof m=="string"&&cE.test(m),D=ZM(m,_);m=D.to;let C=w2(m,{relative:s}),F=Zr(),P=null;if(f){let K=ov(f,[],F.unstable_mask?F.unstable_mask.pathname:"/",!0);_!=="/"&&(K.pathname=K.pathname==="/"?_:Aa([_,K.pathname])),P=S.createHref(K)}let[R,O,J]=l3(a,b),G=y3(m,{replace:c,unstable_mask:f,state:d,target:h,preventScrollReset:v,relative:s,viewTransition:y,unstable_defaultShouldRevalidate:x,unstable_useTransitions:A});function Q(K){e&&e(K),K.defaultPrevented||G(K)}let te=!(D.isExternal||l),ee=I.createElement("a",{...b,...J,href:(te?P:void 0)||D.absoluteURL||C,onClick:te?Q:e,ref:d3(E,O),target:h,"data-discover":!w&&n==="render"?"true":void 0});return R&&!w?I.createElement(I.Fragment,null,ee,I.createElement(c3,{page:C})):ee});hv.displayName="Link";var m3=I.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:f,children:d,...h},m){let v=Qc(c,{relative:h.relative}),y=Zr(),x=I.useContext(qd),{navigator:b,basename:E}=I.useContext(Gi),_=x!=null&&M3(v)&&f===!0,S=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,A=y.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(A=A.toLowerCase(),w=w?w.toLowerCase():null,S=S.toLowerCase()),w&&E&&(w=cr(w,E)||w);const D=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let C=A===S||!s&&A.startsWith(S)&&A.charAt(D)==="/",F=w!=null&&(w===S||!s&&w.startsWith(S)&&w.charAt(S.length)==="/"),P={isActive:C,isPending:F,isTransitioning:_},R=C?e:void 0,O;typeof a=="function"?O=a(P):O=[a,C?"active":null,F?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let J=typeof l=="function"?l(P):l;return I.createElement(hv,{...h,"aria-current":R,className:O,ref:m,style:J,to:c,viewTransition:f},typeof d=="function"?d(P):d)});m3.displayName="NavLink";var g3=I.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:s,state:l,method:c=cd,action:f,onSubmit:d,relative:h,preventScrollReset:m,viewTransition:v,unstable_defaultShouldRevalidate:y,...x},b)=>{let{unstable_useTransitions:E}=I.useContext(Gi),_=S3(),S=b3(f,{relative:h}),A=c.toLowerCase()==="get"?"get":"post",w=typeof f=="string"&&cE.test(f),D=C=>{if(d&&d(C),C.defaultPrevented)return;C.preventDefault();let F=C.nativeEvent.submitter,P=F?.getAttribute("formmethod")||c,R=()=>_(F||C.currentTarget,{fetcherKey:e,method:P,navigate:n,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:v,unstable_defaultShouldRevalidate:y});E&&n!==!1?I.startTransition(()=>R()):R()};return I.createElement("form",{ref:b,method:A,action:S,onSubmit:a?d:D,...x,"data-discover":!w&&t==="render"?"true":void 0})});g3.displayName="Form";function v3(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uE(t){let e=I.useContext(ll);return ln(e,v3(t)),e}function y3(t,{target:e,replace:n,unstable_mask:a,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let m=R2(),v=Zr(),y=Qc(t,{relative:c});return I.useCallback(x=>{if($2(x,e)){x.preventDefault();let b=n!==void 0?n:Oc(v)===Oc(y),E=()=>m(t,{replace:b,unstable_mask:a,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});h?I.startTransition(()=>E()):E()}},[v,m,y,n,a,s,e,t,l,c,f,d,h])}var x3=0,_3=()=>`__${String(++x3)}__`;function S3(){let{router:t}=uE("useSubmit"),{basename:e}=I.useContext(Gi),n=z2(),a=t.fetch,s=t.navigate;return I.useCallback(async(l,c={})=>{let{action:f,method:d,encType:h,formData:m,body:v}=Q2(l,e);if(c.navigate===!1){let y=c.fetcherKey||_3();await a(y,n,c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||h,flushSync:c.flushSync})}else await s(c.action||f,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:m,body:v,formMethod:c.method||d,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,s,e,n])}function b3(t,{relative:e}={}){let{basename:n}=I.useContext(Gi),a=I.useContext(hr);ln(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...Qc(t||".",{relative:e})},c=Zr();if(t==null){l.search=c.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(v=>v).forEach(v=>f.append("index",v));let m=f.toString();l.search=m?`?${m}`:""}}return(!t||t===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Aa([n,l.pathname])),Oc(l)}function M3(t,{relative:e}={}){let n=I.useContext(JM);ln(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=uE("useViewTransitionState"),s=Qc(t,{relative:e});if(!n.isTransitioning)return!1;let l=cr(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=cr(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Rd(s.pathname,c)!=null||Rd(s.pathname,l)!=null}const Fc=t=>{const{icon:e,className:n=""}=t;return ie.jsx("i",{className:`fi fi-${e} ${n}`,style:{marginBottom:-4}})},E3=t=>{const{behavior:e,type:n="primary",children:a,size:s="md",disabled:l=!1,loading:c=!1,className:f="",dark:d,...h}=t,m=()=>{switch(s){case"xs":return"py-[2px] text-[10px] px-2";case"sm":return"py-1 text-xs px-2";case"md":return"py-2 text-sm px-4";case"lg":return"py-3 text-sm px-6";case"xl":return"py-4 text-sm px-8";case"2xl":return"py-5 text-lg px-10";case"3xl":return"py-6 text-lg px-12";default:return"py-3 px-2"}},v=()=>{const x=l?" focus:bg-slate-500 opacity-50 pointer-events-none":"";if(d)switch(n){case"primary":return`bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 focus:bg-blue-600/20 ${x}`;case"secondary":return`bg-transparent border-2 border-indigo-700 text-indigo-700 hover:bg-indigo-700/10 focus:bg-indigo-700/20 ${x}`;case"teal":return`bg-transparent border-2 border-teal-900 text-teal-600 hover:bg-teal-600/10 focus:bg-teal-600/20 ${x}`;case"indigo":return`bg-indigo-800 border-2 border-indigo-800  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${x}`;case"primary-dark":return`bg-primary-darker border-2 border-blue-700  hover:bg-blue-700 focus:bg-blue-700 text-white ${x}`;case"deep-purple":return`bg-transparent border-2 border-purple-700 text-purple-700 hover:bg-purple-700/10 focus:bg-purple-700/20 ${x}`;case"transparent":return`bg-transparent hover:bg-gray-200 focus:bg-gray-300 text-slate-700 dark:text-white ${x}`;case"disabled":return`bg-slate-500 border-2 border-slate-500 hover:bg-slate-700 focus:bg-slate-500 text-black pointer-events-none ${x}`;case"foreground":return`bg-slate-100 border-2 border-slate-100 hover:bg-slate-300 focus:bg-slate-300 text-slate-500 ${x}`;case"foreground-dark":return`bg-slate-200 hover:bg-slate-400 focus:bg-slate-400 text-slate-600 ${x}`;case"success":return`bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600/10 focus:bg-green-600/20 ${x}`;case"danger":return`bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600/10 focus:bg-red-600/20 ${x}`;default:return`bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600/10 focus:bg-blue-600/20 ${x}`}else switch(n){case"primary":return`bg-primary-dark border-2 border-blue-600 hover:bg-primary-darker focus:bg-primary-dark text-white ${x}`;case"secondary":return`bg-indigo-700 border-2 border-indigo-700  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${x}`;case"teal":return`bg-teal-900 border-2 border-teal-900 hover:bg-teal-700 focus:bg-teal-700 text-white ${x}`;case"blue-green":return`bg-[#009688] border-2 border-teal-900 hover:bg-[#00796b] focus:bg-[#00796b] text-white ${x}`;case"indigo":return`bg-indigo-800 border-2 border-indigo-800  hover:bg-indigo-900 focus:bg-indigo-900 text-white ${x}`;case"primary-dark":return`bg-primary-darker hover:bg-blue-700 focus:bg-blue-700 text-white ${x}`;case"deep-purple":return`bg-purple-700 border-2 border-purple-700 hover:bg-purple-800 focus:bg-purple-800 text-white ${x}`;case"transparent":return`bg-transparent border-2 border-gray-200 hover:bg-gray-200 focus:bg-gray-300 text-slate-700 dark:text-white ${x}`;case"disabled":return`bg-slate-500 border-2 border-slate-500 hover:bg-slate-700 focus:bg-slate-500 text-black pointer-events-none ${x}`;case"foreground":return`bg-slate-100 border-2 border-slate-100 hover:bg-slate-300 focus:bg-slate-300 text-slate-500 ${x}`;case"foreground-dark":return`bg-slate-200 border-2 border-slate-200 hover:bg-slate-400 focus:bg-slate-400 text-slate-600 ${x}`;case"success":return`bg-green-600 border-2 border-green-600 hover:bg-green-700 focus:bg-green-700 text-white ${x}`;case"danger":return`bg-red-600 border-2 border-red-600 hover:bg-red-700 focus:bg-red-700 text-white ${x}`;default:return`bg-primary border-2 border-blue-600 hover:bg-primary-darker focus:bg-primary-dark text-white ${x}`}},y=()=>`duration-200 flex items-center justify-center rounded-lg cursor-pointer ${m()} ${v()}`;return e==="link"?ie.jsx(hv,{className:`duration-200 shadow-sm ${y()} ${f} ${c?"pointer-events-none opacity-50":""}`,...h,children:c?"Loading...":a}):ie.jsx("button",{className:`gap-1 duration-200 shadow-sm ${y()} ${f} ${c?"pointer-events-none opacity-50":""}`,...h,children:c?"Loading...":a})},fE=I.createContext({});function pv(t){const e=I.useRef(null);return e.current===null&&(e.current=t()),e.current}const dE=typeof window<"u",hE=dE?I.useLayoutEffect:I.useEffect,mv=I.createContext(null);function gv(t,e){t.indexOf(e)===-1&&t.push(e)}function Cd(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const La=(t,e,n)=>n>e?e:n<t?t:n;let vv=()=>{};const ur={},pE=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function mE(t){return typeof t=="object"&&t!==null}const gE=t=>/^0[^.\s]+$/u.test(t);function vE(t){let e;return()=>(e===void 0&&(e=t()),e)}const Vi=t=>t,T3=(t,e)=>n=>e(t(n)),Jc=(...t)=>t.reduce(T3),Ic=(t,e,n)=>{const a=e-t;return a===0?1:(n-t)/a};class yv{constructor(){this.subscriptions=[]}add(e){return gv(this.subscriptions,e),()=>Cd(this.subscriptions,e)}notify(e,n,a){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,n,a);else for(let l=0;l<s;l++){const c=this.subscriptions[l];c&&c(e,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const oa=t=>t*1e3,Bi=t=>t/1e3;function yE(t,e){return e?t*(1e3/e):0}const xE=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,A3=1e-7,w3=12;function R3(t,e,n,a,s){let l,c,f=0;do c=e+(n-e)/2,l=xE(c,a,s)-t,l>0?n=c:e=c;while(Math.abs(l)>A3&&++f<w3);return c}function eu(t,e,n,a){if(t===e&&n===a)return Vi;const s=l=>R3(l,0,1,t,n);return l=>l===0||l===1?l:xE(s(l),e,a)}const _E=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,SE=t=>e=>1-t(1-e),bE=eu(.33,1.53,.69,.99),xv=SE(bE),ME=_E(xv),EE=t=>(t*=2)<1?.5*xv(t):.5*(2-Math.pow(2,-10*(t-1))),_v=t=>1-Math.sin(Math.acos(t)),TE=SE(_v),AE=_E(_v),C3=eu(.42,0,1,1),D3=eu(0,0,.58,1),wE=eu(.42,0,.58,1),L3=t=>Array.isArray(t)&&typeof t[0]!="number",RE=t=>Array.isArray(t)&&typeof t[0]=="number",N3={linear:Vi,easeIn:C3,easeInOut:wE,easeOut:D3,circIn:_v,circInOut:AE,circOut:TE,backIn:xv,backInOut:ME,backOut:bE,anticipate:EE},U3=t=>typeof t=="string",ub=t=>{if(RE(t)){vv(t.length===4);const[e,n,a,s]=t;return eu(e,n,a,s)}else if(U3(t))return N3[t];return t},Af=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function P3(t,e){let n=new Set,a=new Set,s=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){c.has(m)&&(h.schedule(m),t()),m(f)}const h={schedule:(m,v=!1,y=!1)=>{const b=y&&s?n:a;return v&&c.add(m),b.has(m)||b.add(m),m},cancel:m=>{a.delete(m),c.delete(m)},process:m=>{if(f=m,s){l=!0;return}s=!0,[n,a]=[a,n],n.forEach(d),n.clear(),s=!1,l&&(l=!1,h.process(m))}};return h}const O3=40;function CE(t,e){let n=!1,a=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,c=Af.reduce((w,D)=>(w[D]=P3(l),w),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:v,preRender:y,render:x,postRender:b}=c,E=()=>{const w=ur.useManualTiming?s.timestamp:performance.now();n=!1,ur.useManualTiming||(s.delta=a?1e3/60:Math.max(Math.min(w-s.timestamp,O3),1)),s.timestamp=w,s.isProcessing=!0,f.process(s),d.process(s),h.process(s),m.process(s),v.process(s),y.process(s),x.process(s),b.process(s),s.isProcessing=!1,n&&e&&(a=!1,t(E))},_=()=>{n=!0,a=!0,s.isProcessing||t(E)};return{schedule:Af.reduce((w,D)=>{const C=c[D];return w[D]=(F,P=!1,R=!1)=>(n||_(),C.schedule(F,P,R)),w},{}),cancel:w=>{for(let D=0;D<Af.length;D++)c[Af[D]].cancel(w)},state:s,steps:c}}const{schedule:Qt,cancel:Na,state:Vn,steps:_m}=CE(typeof requestAnimationFrame<"u"?requestAnimationFrame:Vi,!0);let fd;function F3(){fd=void 0}const ei={now:()=>(fd===void 0&&ei.set(Vn.isProcessing||ur.useManualTiming?Vn.timestamp:performance.now()),fd),set:t=>{fd=t,queueMicrotask(F3)}},DE=t=>e=>typeof e=="string"&&e.startsWith(t),LE=DE("--"),I3=DE("var(--"),Sv=t=>I3(t)?B3.test(t.split("/*")[0].trim()):!1,B3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function fb(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const cl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Bc={...cl,transform:t=>La(0,1,t)},wf={...cl,default:1},Cc=t=>Math.round(t*1e5)/1e5,bv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function z3(t){return t==null}const V3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mv=(t,e)=>n=>!!(typeof n=="string"&&V3.test(n)&&n.startsWith(t)||e&&!z3(n)&&Object.prototype.hasOwnProperty.call(n,e)),NE=(t,e,n)=>a=>{if(typeof a!="string")return a;const[s,l,c,f]=a.match(bv);return{[t]:parseFloat(s),[e]:parseFloat(l),[n]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},H3=t=>La(0,255,t),Sm={...cl,transform:t=>Math.round(H3(t))},Ds={test:Mv("rgb","red"),parse:NE("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:a=1})=>"rgba("+Sm.transform(t)+", "+Sm.transform(e)+", "+Sm.transform(n)+", "+Cc(Bc.transform(a))+")"};function G3(t){let e="",n="",a="",s="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),a=t.substring(5,7),s=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),a=t.substring(3,4),s=t.substring(4,5),e+=e,n+=n,a+=a,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:s?parseInt(s,16)/255:1}}const D0={test:Mv("#"),parse:G3,transform:Ds.transform},tu=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),jr=tu("deg"),wa=tu("%"),Ze=tu("px"),k3=tu("vh"),W3=tu("vw"),db={...wa,parse:t=>wa.parse(t)/100,transform:t=>wa.transform(t*100)},Go={test:Mv("hsl","hue"),parse:NE("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:a=1})=>"hsla("+Math.round(t)+", "+wa.transform(Cc(e))+", "+wa.transform(Cc(n))+", "+Cc(Bc.transform(a))+")"},En={test:t=>Ds.test(t)||D0.test(t)||Go.test(t),parse:t=>Ds.test(t)?Ds.parse(t):Go.test(t)?Go.parse(t):D0.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Ds.transform(t):Go.transform(t),getAnimatableNone:t=>{const e=En.parse(t);return e.alpha=0,En.transform(e)}},X3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function j3(t){return isNaN(t)&&typeof t=="string"&&(t.match(bv)?.length||0)+(t.match(X3)?.length||0)>0}const UE="number",PE="color",q3="var",Y3="var(",hb="${}",$3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function zc(t){const e=t.toString(),n=[],a={color:[],number:[],var:[]},s=[];let l=0;const f=e.replace($3,d=>(En.test(d)?(a.color.push(l),s.push(PE),n.push(En.parse(d))):d.startsWith(Y3)?(a.var.push(l),s.push(q3),n.push(d)):(a.number.push(l),s.push(UE),n.push(parseFloat(d))),++l,hb)).split(hb);return{values:n,split:f,indexes:a,types:s}}function OE(t){return zc(t).values}function FE(t){const{split:e,types:n}=zc(t),a=e.length;return s=>{let l="";for(let c=0;c<a;c++)if(l+=e[c],s[c]!==void 0){const f=n[c];f===UE?l+=Cc(s[c]):f===PE?l+=En.transform(s[c]):l+=s[c]}return l}}const K3=t=>typeof t=="number"?0:En.test(t)?En.getAnimatableNone(t):t;function Z3(t){const e=OE(t);return FE(t)(e.map(K3))}const la={test:j3,parse:OE,createTransformer:FE,getAnimatableNone:Z3};function bm(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Q3({hue:t,saturation:e,lightness:n,alpha:a}){t/=360,e/=100,n/=100;let s=0,l=0,c=0;if(!e)s=l=c=n;else{const f=n<.5?n*(1+e):n+e-n*e,d=2*n-f;s=bm(d,f,t+1/3),l=bm(d,f,t),c=bm(d,f,t-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:a}}function Dd(t,e){return n=>n>0?e:t}const on=(t,e,n)=>t+(e-t)*n,Mm=(t,e,n)=>{const a=t*t,s=n*(e*e-a)+a;return s<0?0:Math.sqrt(s)},J3=[D0,Ds,Go],eD=t=>J3.find(e=>e.test(t));function pb(t){const e=eD(t);if(!e)return!1;let n=e.parse(t);return e===Go&&(n=Q3(n)),n}const mb=(t,e)=>{const n=pb(t),a=pb(e);if(!n||!a)return Dd(t,e);const s={...n};return l=>(s.red=Mm(n.red,a.red,l),s.green=Mm(n.green,a.green,l),s.blue=Mm(n.blue,a.blue,l),s.alpha=on(n.alpha,a.alpha,l),Ds.transform(s))},L0=new Set(["none","hidden"]);function tD(t,e){return L0.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function nD(t,e){return n=>on(t,e,n)}function Ev(t){return typeof t=="number"?nD:typeof t=="string"?Sv(t)?Dd:En.test(t)?mb:rD:Array.isArray(t)?IE:typeof t=="object"?En.test(t)?mb:iD:Dd}function IE(t,e){const n=[...t],a=n.length,s=t.map((l,c)=>Ev(l)(l,e[c]));return l=>{for(let c=0;c<a;c++)n[c]=s[c](l);return n}}function iD(t,e){const n={...t,...e},a={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(a[s]=Ev(t[s])(t[s],e[s]));return s=>{for(const l in a)n[l]=a[l](s);return n}}function aD(t,e){const n=[],a={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const l=e.types[s],c=t.indexes[l][a[l]],f=t.values[c]??0;n[s]=f,a[l]++}return n}const rD=(t,e)=>{const n=la.createTransformer(e),a=zc(t),s=zc(e);return a.indexes.var.length===s.indexes.var.length&&a.indexes.color.length===s.indexes.color.length&&a.indexes.number.length>=s.indexes.number.length?L0.has(t)&&!s.values.length||L0.has(e)&&!a.values.length?tD(t,e):Jc(IE(aD(a,s),s.values),n):Dd(t,e)};function BE(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?on(t,e,n):Ev(t)(t,e)}const sD=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>Qt.update(e,n),stop:()=>Na(e),now:()=>Vn.isProcessing?Vn.timestamp:ei.now()}},zE=(t,e,n=10)=>{let a="";const s=Math.max(Math.round(e/n),2);for(let l=0;l<s;l++)a+=Math.round(t(l/(s-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Ld=2e4;function Tv(t){let e=0;const n=50;let a=t.next(e);for(;!a.done&&e<Ld;)e+=n,a=t.next(e);return e>=Ld?1/0:e}function oD(t,e=100,n){const a=n({...t,keyframes:[0,e]}),s=Math.min(Tv(a),Ld);return{type:"keyframes",ease:l=>a.next(s*l).value/e,duration:Bi(s)}}const lD=5;function VE(t,e,n){const a=Math.max(e-lD,0);return yE(n-t(a),e-a)}const fn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Em=.001;function cD({duration:t=fn.duration,bounce:e=fn.bounce,velocity:n=fn.velocity,mass:a=fn.mass}){let s,l,c=1-e;c=La(fn.minDamping,fn.maxDamping,c),t=La(fn.minDuration,fn.maxDuration,Bi(t)),c<1?(s=h=>{const m=h*c,v=m*t,y=m-n,x=N0(h,c),b=Math.exp(-v);return Em-y/x*b},l=h=>{const v=h*c*t,y=v*n+n,x=Math.pow(c,2)*Math.pow(h,2)*t,b=Math.exp(-v),E=N0(Math.pow(h,2),c);return(-s(h)+Em>0?-1:1)*((y-x)*b)/E}):(s=h=>{const m=Math.exp(-h*t),v=(h-n)*t+1;return-Em+m*v},l=h=>{const m=Math.exp(-h*t),v=(n-h)*(t*t);return m*v});const f=5/t,d=fD(s,l,f);if(t=oa(t),isNaN(d))return{stiffness:fn.stiffness,damping:fn.damping,duration:t};{const h=Math.pow(d,2)*a;return{stiffness:h,damping:c*2*Math.sqrt(a*h),duration:t}}}const uD=12;function fD(t,e,n){let a=n;for(let s=1;s<uD;s++)a=a-t(a)/e(a);return a}function N0(t,e){return t*Math.sqrt(1-e*e)}const dD=["duration","bounce"],hD=["stiffness","damping","mass"];function gb(t,e){return e.some(n=>t[n]!==void 0)}function pD(t){let e={velocity:fn.velocity,stiffness:fn.stiffness,damping:fn.damping,mass:fn.mass,isResolvedFromDuration:!1,...t};if(!gb(t,hD)&&gb(t,dD))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,a=2*Math.PI/(n*1.2),s=a*a,l=2*La(.05,1,1-(t.bounce||0))*Math.sqrt(s);e={...e,mass:fn.mass,stiffness:s,damping:l}}else{const n=cD({...t,velocity:0});e={...e,...n,mass:fn.mass},e.isResolvedFromDuration=!0}return e}function Nd(t=fn.visualDuration,e=fn.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:a,restDelta:s}=n;const l=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:v,velocity:y,isResolvedFromDuration:x}=pD({...n,velocity:-Bi(n.velocity||0)}),b=y||0,E=h/(2*Math.sqrt(d*m)),_=c-l,S=Bi(Math.sqrt(d/m)),A=Math.abs(_)<5;a||(a=A?fn.restSpeed.granular:fn.restSpeed.default),s||(s=A?fn.restDelta.granular:fn.restDelta.default);let w;if(E<1){const C=N0(S,E);w=F=>{const P=Math.exp(-E*S*F);return c-P*((b+E*S*_)/C*Math.sin(C*F)+_*Math.cos(C*F))}}else if(E===1)w=C=>c-Math.exp(-S*C)*(_+(b+S*_)*C);else{const C=S*Math.sqrt(E*E-1);w=F=>{const P=Math.exp(-E*S*F),R=Math.min(C*F,300);return c-P*((b+E*S*_)*Math.sinh(R)+C*_*Math.cosh(R))/C}}const D={calculatedDuration:x&&v||null,next:C=>{const F=w(C);if(x)f.done=C>=v;else{let P=C===0?b:0;E<1&&(P=C===0?oa(b):VE(w,C,F));const R=Math.abs(P)<=a,O=Math.abs(c-F)<=s;f.done=R&&O}return f.value=f.done?c:F,f},toString:()=>{const C=Math.min(Tv(D),Ld),F=zE(P=>D.next(C*P).value,C,30);return C+"ms "+F},toTransition:()=>{}};return D}Nd.applyToOptions=t=>{const e=oD(t,100,Nd);return t.ease=e.ease,t.duration=oa(e.duration),t.type="keyframes",t};function U0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:a=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:d,restDelta:h=.5,restSpeed:m}){const v=t[0],y={done:!1,value:v},x=R=>f!==void 0&&R<f||d!==void 0&&R>d,b=R=>f===void 0?d:d===void 0||Math.abs(f-R)<Math.abs(d-R)?f:d;let E=n*e;const _=v+E,S=c===void 0?_:c(_);S!==_&&(E=S-v);const A=R=>-E*Math.exp(-R/a),w=R=>S+A(R),D=R=>{const O=A(R),J=w(R);y.done=Math.abs(O)<=h,y.value=y.done?S:J};let C,F;const P=R=>{x(y.value)&&(C=R,F=Nd({keyframes:[y.value,b(y.value)],velocity:VE(w,R,y.value),damping:s,stiffness:l,restDelta:h,restSpeed:m}))};return P(0),{calculatedDuration:null,next:R=>{let O=!1;return!F&&C===void 0&&(O=!0,D(R),P(R)),C!==void 0&&R>=C?F.next(R-C):(!O&&D(R),y)}}}function mD(t,e,n){const a=[],s=n||ur.mix||BE,l=t.length-1;for(let c=0;c<l;c++){let f=s(t[c],t[c+1]);if(e){const d=Array.isArray(e)?e[c]||Vi:e;f=Jc(d,f)}a.push(f)}return a}function HE(t,e,{clamp:n=!0,ease:a,mixer:s}={}){const l=t.length;if(vv(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=t[0]===t[1];t[0]>t[l-1]&&(t=[...t].reverse(),e=[...e].reverse());const f=mD(e,a,s),d=f.length,h=m=>{if(c&&m<t[0])return e[0];let v=0;if(d>1)for(;v<t.length-2&&!(m<t[v+1]);v++);const y=Ic(t[v],t[v+1],m);return f[v](y)};return n?m=>h(La(t[0],t[l-1],m)):h}function gD(t,e){const n=t[t.length-1];for(let a=1;a<=e;a++){const s=Ic(0,e,a);t.push(on(n,1,s))}}function vD(t){const e=[0];return gD(e,t.length-1),e}function yD(t,e){return t.map(n=>n*e)}function xD(t,e){return t.map(()=>e||wE).splice(0,t.length-1)}function Dc({duration:t=300,keyframes:e,times:n,ease:a="easeInOut"}){const s=L3(a)?a.map(ub):ub(a),l={done:!1,value:e[0]},c=yD(n&&n.length===e.length?n:vD(e),t),f=HE(c,e,{ease:Array.isArray(s)?s:xD(e,s)});return{calculatedDuration:t,next:d=>(l.value=f(d),l.done=d>=t,l)}}const _D=t=>t!==null;function Av(t,{repeat:e,repeatType:n="loop"},a,s=1){const l=t.filter(_D),f=s<0||e&&n!=="loop"&&e%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const SD={decay:U0,inertia:U0,tween:Dc,keyframes:Dc,spring:Nd};function GE(t){typeof t.type=="string"&&(t.type=SD[t.type])}class wv{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const bD=t=>t/100;class Rv extends wv{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==ei.now()&&this.tick(ei.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;GE(e);const{type:n=Dc,repeat:a=0,repeatDelay:s=0,repeatType:l,velocity:c=0}=e;let{keyframes:f}=e;const d=n||Dc;d!==Dc&&typeof f[0]!="number"&&(this.mixKeyframes=Jc(bD,BE(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Tv(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+s,this.totalDuration=this.resolvedDuration*(a+1)-s,this.generator=h}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:a,totalDuration:s,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return a.next(0);const{delay:h=0,keyframes:m,repeat:v,repeatType:y,repeatDelay:x,type:b,onUpdate:E,finalKeyframe:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),A=this.playbackSpeed>=0?S<0:S>s;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let w=this.currentTime,D=a;if(v){const R=Math.min(this.currentTime,s)/f;let O=Math.floor(R),J=R%1;!J&&R>=1&&(J=1),J===1&&O--,O=Math.min(O,v+1),O%2&&(y==="reverse"?(J=1-J,x&&(J-=x/f)):y==="mirror"&&(D=c)),w=La(0,1,J)*f}const C=A?{done:!1,value:m[0]}:D.next(w);l&&(C.value=l(C.value));let{done:F}=C;!A&&d!==null&&(F=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return P&&b!==U0&&(C.value=Av(m,this.options,_,this.speed)),E&&E(C.value),P&&this.finish(),C}then(e,n){return this.finished.then(e,n)}get duration(){return Bi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Bi(e)}get time(){return Bi(this.currentTime)}set time(e){e=oa(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(ei.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Bi(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=sD,startTime:n}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ei.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function MD(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Ls=t=>t*180/Math.PI,P0=t=>{const e=Ls(Math.atan2(t[1],t[0]));return O0(e)},ED={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:P0,rotateZ:P0,skewX:t=>Ls(Math.atan(t[1])),skewY:t=>Ls(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},O0=t=>(t=t%360,t<0&&(t+=360),t),vb=P0,yb=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),xb=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),TD={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:yb,scaleY:xb,scale:t=>(yb(t)+xb(t))/2,rotateX:t=>O0(Ls(Math.atan2(t[6],t[5]))),rotateY:t=>O0(Ls(Math.atan2(-t[2],t[0]))),rotateZ:vb,rotate:vb,skewX:t=>Ls(Math.atan(t[4])),skewY:t=>Ls(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function F0(t){return t.includes("scale")?1:0}function I0(t,e){if(!t||t==="none")return F0(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,s;if(n)a=TD,s=n;else{const f=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=ED,s=f}if(!s)return F0(e);const l=a[e],c=s[1].split(",").map(wD);return typeof l=="function"?l(c):c[l]}const AD=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return I0(n,e)};function wD(t){return parseFloat(t.trim())}const ul=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fl=new Set(ul),_b=t=>t===cl||t===Ze,RD=new Set(["x","y","z"]),CD=ul.filter(t=>!RD.has(t));function DD(t){const e=[];return CD.forEach(n=>{const a=t.getValue(n);a!==void 0&&(e.push([n,a.get()]),a.set(n.startsWith("scale")?1:0))}),e}const Yr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>I0(e,"x"),y:(t,{transform:e})=>I0(e,"y")};Yr.translateX=Yr.x;Yr.translateY=Yr.y;const Fs=new Set;let B0=!1,z0=!1,V0=!1;function kE(){if(z0){const t=Array.from(Fs).filter(a=>a.needsMeasurement),e=new Set(t.map(a=>a.element)),n=new Map;e.forEach(a=>{const s=DD(a);s.length&&(n.set(a,s),a.render())}),t.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const s=n.get(a);s&&s.forEach(([l,c])=>{a.getValue(l)?.set(c)})}),t.forEach(a=>a.measureEndState()),t.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}z0=!1,B0=!1,Fs.forEach(t=>t.complete(V0)),Fs.clear()}function WE(){Fs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(z0=!0)})}function LD(){V0=!0,WE(),kE(),V0=!1}class Cv{constructor(e,n,a,s,l,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=a,this.motionValue=s,this.element=l,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Fs.add(this),B0||(B0=!0,Qt.read(WE),Qt.resolveKeyframes(kE))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:a,motionValue:s}=this;if(e[0]===null){const l=s?.get(),c=e[e.length-1];if(l!==void 0)e[0]=l;else if(a&&n){const f=a.readValue(n,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),s&&l===void 0&&s.set(e[0])}MD(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Fs.delete(this)}cancel(){this.state==="scheduled"&&(Fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const ND=t=>t.startsWith("--");function UD(t,e,n){ND(e)?t.style.setProperty(e,n):t.style[e]=n}const PD={};function XE(t,e){const n=vE(t);return()=>PD[e]??n()}const OD=XE(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),jE=XE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Mc=([t,e,n,a])=>`cubic-bezier(${t}, ${e}, ${n}, ${a})`,Sb={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Mc([0,.65,.55,1]),circOut:Mc([.55,0,1,.45]),backIn:Mc([.31,.01,.66,-.59]),backOut:Mc([.33,1.53,.69,.99])};function qE(t,e){if(t)return typeof t=="function"?jE()?zE(t,e):"ease-out":RE(t)?Mc(t):Array.isArray(t)?t.map(n=>qE(n,e)||Sb.easeOut):Sb[t]}function FD(t,e,n,{delay:a=0,duration:s=300,repeat:l=0,repeatType:c="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[e]:n};d&&(m.offset=d);const v=qE(f,s);Array.isArray(v)&&(m.easing=v);const y={delay:a,duration:s,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:l+1,direction:c==="reverse"?"alternate":"normal"};return h&&(y.pseudoElement=h),t.animate(m,y)}function YE(t){return typeof t=="function"&&"applyToOptions"in t}function ID({type:t,...e}){return YE(t)&&jE()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class $E extends wv{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:a,keyframes:s,pseudoElement:l,allowFlatten:c=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=c,this.options=e,vv(typeof e.type!="string");const h=ID(e);this.animation=FD(n,a,s,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=Av(s,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(m):UD(n,a,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return Bi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Bi(e)}get time(){return Bi(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=oa(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&OD()?(this.animation.timeline=e,Vi):n(this)}}const KE={anticipate:EE,backInOut:ME,circInOut:AE};function BD(t){return t in KE}function zD(t){typeof t.ease=="string"&&BD(t.ease)&&(t.ease=KE[t.ease])}const Tm=10;class VD extends $E{constructor(e){zD(e),GE(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:a,onComplete:s,element:l,...c}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const f=new Rv({...c,autoplay:!1}),d=Math.max(Tm,ei.now()-this.startTime),h=La(0,Tm,d-Tm);n.setWithVelocity(f.sample(Math.max(0,d-h)).value,f.sample(d).value,h),f.stop()}}const bb=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(la.test(t)||t==="0")&&!t.startsWith("url("));function HD(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function GD(t,e,n,a){const s=t[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const l=t[t.length-1],c=bb(s,e),f=bb(l,e);return!c||!f?!1:HD(t)||(n==="spring"||YE(n))&&a}function H0(t){t.duration=0,t.type="keyframes"}const kD=new Set(["opacity","clipPath","filter","transform"]),WD=vE(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function XD(t){const{motionValue:e,name:n,repeatDelay:a,repeatType:s,damping:l,type:c}=t;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return WD()&&n&&kD.has(n)&&(n!=="transform"||!h)&&!d&&!a&&s!=="mirror"&&l!==0&&c!=="inertia"}const jD=40;class qD extends wv{constructor({autoplay:e=!0,delay:n=0,type:a="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:c="loop",keyframes:f,name:d,motionValue:h,element:m,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=ei.now();const y={autoplay:e,delay:n,type:a,repeat:s,repeatDelay:l,repeatType:c,name:d,motionValue:h,element:m,...v},x=m?.KeyframeResolver||Cv;this.keyframeResolver=new x(f,(b,E,_)=>this.onKeyframesResolved(b,E,y,!_),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,n,a,s){this.keyframeResolver=void 0;const{name:l,type:c,velocity:f,delay:d,isHandoff:h,onUpdate:m}=a;this.resolvedAt=ei.now(),GD(e,l,c,f)||((ur.instantAnimations||!d)&&m?.(Av(e,a,n)),e[0]=e[e.length-1],H0(a),a.repeat=0);const y={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>jD?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...a,keyframes:e},x=!h&&XD(y),b=y.motionValue?.owner?.current,E=x?new VD({...y,element:b}):new Rv(y);E.finished.then(()=>{this.notifyFinished()}).catch(Vi),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),LD()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function ZE(t,e,n,a=0,s=1){const l=Array.from(t).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),c=t.size,f=(c-1)*a;return typeof n=="function"?n(l,c):s===1?l*a:f-l*a}const YD=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $D(t){const e=YD.exec(t);if(!e)return[,];const[,n,a,s]=e;return[`--${n??a}`,s]}function QE(t,e,n=1){const[a,s]=$D(t);if(!a)return;const l=window.getComputedStyle(e).getPropertyValue(a);if(l){const c=l.trim();return pE(c)?parseFloat(c):c}return Sv(s)?QE(s,e,n+1):s}const KD={type:"spring",stiffness:500,damping:25,restSpeed:10},ZD=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),QD={type:"keyframes",duration:.8},JD={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},eL=(t,{keyframes:e})=>e.length>2?QD:fl.has(t)?t.startsWith("scale")?ZD(e[1]):KD:JD,tL=t=>t!==null;function nL(t,{repeat:e,repeatType:n="loop"},a){const s=t.filter(tL),l=e&&n!=="loop"&&e%2===1?0:s.length-1;return s[l]}function JE(t,e){if(t?.inherit&&e){const{inherit:n,...a}=t;return{...e,...a}}return t}function Dv(t,e){const n=t?.[e]??t?.default??t;return n!==t?JE(n,t):n}function iL({when:t,delay:e,delayChildren:n,staggerChildren:a,staggerDirection:s,repeat:l,repeatType:c,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Lv=(t,e,n,a={},s,l)=>c=>{const f=Dv(a,t)||{},d=f.delay||a.delay||0;let{elapsed:h=0}=a;h=h-oa(d);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:y=>{e.set(y),f.onUpdate&&f.onUpdate(y)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:t,motionValue:e,element:l?void 0:s};iL(f)||Object.assign(m,eL(t,m)),m.duration&&(m.duration=oa(m.duration)),m.repeatDelay&&(m.repeatDelay=oa(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let v=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(H0(m),m.delay===0&&(v=!0)),(ur.instantAnimations||ur.skipAnimations||s?.shouldSkipAnimations)&&(v=!0,H0(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,v&&!l&&e.get()!==void 0){const y=nL(m.keyframes,f);if(y!==void 0){Qt.update(()=>{m.onUpdate(y),m.onComplete()});return}}return f.isSync?new Rv(m):new qD(m)};function Mb(t){const e=[{},{}];return t?.values.forEach((n,a)=>{e[0][a]=n.get(),e[1][a]=n.getVelocity()}),e}function Nv(t,e,n,a){if(typeof e=="function"){const[s,l]=Mb(a);e=e(n!==void 0?n:t.custom,s,l)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[s,l]=Mb(a);e=e(n!==void 0?n:t.custom,s,l)}return e}function Yo(t,e,n){const a=t.getProps();return Nv(a,e,n!==void 0?n:a.custom,t)}const eT=new Set(["width","height","top","left","right","bottom",...ul]),Eb=30,aL=t=>!isNaN(parseFloat(t)),Lc={current:void 0};class rL{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const s=ei.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ei.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=aL(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new yv);const a=this.events[e].add(n);return e==="change"?()=>{a(),Qt.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Lc.current&&Lc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ei.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Eb)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Eb);return yE(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zs(t,e){return new rL(t,e)}const G0=t=>Array.isArray(t);function sL(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,zs(n))}function oL(t){return G0(t)?t[t.length-1]||0:t}function lL(t,e){const n=Yo(t,e);let{transitionEnd:a={},transition:s={},...l}=n||{};l={...l,...a};for(const c in l){const f=oL(l[c]);sL(t,c,f)}}const qn=t=>!!(t&&t.getVelocity);function cL(t){return!!(qn(t)&&t.add)}function k0(t,e){const n=t.getValue("willChange");if(cL(n))return n.add(e);if(!n&&ur.WillChange){const a=new ur.WillChange("auto");t.addValue("willChange",a),a.add(e)}}function Uv(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const uL="framerAppearId",tT="data-"+Uv(uL);function nT(t){return t.props[tT]}function fL({protectedKeys:t,needsAnimating:e},n){const a=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,a}function iT(t,e,{delay:n=0,transitionOverride:a,type:s}={}){let{transition:l,transitionEnd:c,...f}=e;const d=t.getDefaultTransition();l=l?JE(l,d):d;const h=l?.reduceMotion;a&&(l=a);const m=[],v=s&&t.animationState&&t.animationState.getState()[s];for(const y in f){const x=t.getValue(y,t.latestValues[y]??null),b=f[y];if(b===void 0||v&&fL(v,y))continue;const E={delay:n,...Dv(l||{},y)},_=x.get();if(_!==void 0&&!x.isAnimating&&!Array.isArray(b)&&b===_&&!E.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const D=nT(t);if(D){const C=window.MotionHandoffAnimation(D,y,Qt);C!==null&&(E.startTime=C,S=!0)}}k0(t,y);const A=h??t.shouldReduceMotion;x.start(Lv(y,x,b,A&&eT.has(y)?{type:!1}:E,t,S));const w=x.animation;w&&m.push(w)}if(c){const y=()=>Qt.update(()=>{c&&lL(t,c)});m.length?Promise.all(m).then(y):y()}return m}function W0(t,e,n={}){const a=Yo(t,e,n.type==="exit"?t.presenceContext?.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=a||{};n.transitionOverride&&(s=n.transitionOverride);const l=a?()=>Promise.all(iT(t,a,n)):()=>Promise.resolve(),c=t.variantChildren&&t.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:v}=s;return dL(t,e,d,h,m,v,n)}:()=>Promise.resolve(),{when:f}=s;if(f){const[d,h]=f==="beforeChildren"?[l,c]:[c,l];return d().then(()=>h())}else return Promise.all([l(),c(n.delay)])}function dL(t,e,n=0,a=0,s=0,l=1,c){const f=[];for(const d of t.variantChildren)d.notify("AnimationStart",e),f.push(W0(d,e,{...c,delay:n+(typeof a=="function"?0:a)+ZE(t.variantChildren,d,a,s,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function hL(t,e,n={}){t.notify("AnimationStart",e);let a;if(Array.isArray(e)){const s=e.map(l=>W0(t,l,n));a=Promise.all(s)}else if(typeof e=="string")a=W0(t,e,n);else{const s=typeof e=="function"?Yo(t,e,n.custom):e;a=Promise.all(iT(t,s,n))}return a.then(()=>{t.notify("AnimationComplete",e)})}const pL={test:t=>t==="auto",parse:t=>t},aT=t=>e=>e.test(t),rT=[cl,Ze,wa,jr,W3,k3,pL],Tb=t=>rT.find(aT(t));function mL(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||gE(t):!0}const gL=new Set(["brightness","contrast","saturate","opacity"]);function vL(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[a]=n.match(bv)||[];if(!a)return t;const s=n.replace(a,"");let l=gL.has(e)?1:0;return a!==n&&(l*=100),e+"("+l+s+")"}const yL=/\b([a-z-]*)\(.*?\)/gu,X0={...la,getAnimatableNone:t=>{const e=t.match(yL);return e?e.map(vL).join(" "):t}},j0={...la,getAnimatableNone:t=>{const e=la.parse(t);return la.createTransformer(t)(e.map(a=>typeof a=="number"?0:typeof a=="object"?{...a,alpha:1}:a))}},Ab={...cl,transform:Math.round},xL={rotate:jr,rotateX:jr,rotateY:jr,rotateZ:jr,scale:wf,scaleX:wf,scaleY:wf,scaleZ:wf,skew:jr,skewX:jr,skewY:jr,distance:Ze,translateX:Ze,translateY:Ze,translateZ:Ze,x:Ze,y:Ze,z:Ze,perspective:Ze,transformPerspective:Ze,opacity:Bc,originX:db,originY:db,originZ:Ze},Pv={borderWidth:Ze,borderTopWidth:Ze,borderRightWidth:Ze,borderBottomWidth:Ze,borderLeftWidth:Ze,borderRadius:Ze,borderTopLeftRadius:Ze,borderTopRightRadius:Ze,borderBottomRightRadius:Ze,borderBottomLeftRadius:Ze,width:Ze,maxWidth:Ze,height:Ze,maxHeight:Ze,top:Ze,right:Ze,bottom:Ze,left:Ze,inset:Ze,insetBlock:Ze,insetBlockStart:Ze,insetBlockEnd:Ze,insetInline:Ze,insetInlineStart:Ze,insetInlineEnd:Ze,padding:Ze,paddingTop:Ze,paddingRight:Ze,paddingBottom:Ze,paddingLeft:Ze,paddingBlock:Ze,paddingBlockStart:Ze,paddingBlockEnd:Ze,paddingInline:Ze,paddingInlineStart:Ze,paddingInlineEnd:Ze,margin:Ze,marginTop:Ze,marginRight:Ze,marginBottom:Ze,marginLeft:Ze,marginBlock:Ze,marginBlockStart:Ze,marginBlockEnd:Ze,marginInline:Ze,marginInlineStart:Ze,marginInlineEnd:Ze,fontSize:Ze,backgroundPositionX:Ze,backgroundPositionY:Ze,...xL,zIndex:Ab,fillOpacity:Bc,strokeOpacity:Bc,numOctaves:Ab},_L={...Pv,color:En,backgroundColor:En,outlineColor:En,fill:En,stroke:En,borderColor:En,borderTopColor:En,borderRightColor:En,borderBottomColor:En,borderLeftColor:En,filter:X0,WebkitFilter:X0,mask:j0,WebkitMask:j0},sT=t=>_L[t],SL=new Set([X0,j0]);function oT(t,e){let n=sT(t);return SL.has(n)||(n=la),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const bL=new Set(["auto","none","0"]);function ML(t,e,n){let a=0,s;for(;a<t.length&&!s;){const l=t[a];typeof l=="string"&&!bL.has(l)&&zc(l).values.length&&(s=t[a]),a++}if(s&&n)for(const l of e)t[l]=oT(n,s)}class EL extends Cv{constructor(e,n,a,s,l){super(e,n,a,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:a}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let v=e[m];if(typeof v=="string"&&(v=v.trim(),Sv(v))){const y=QE(v,n.current);y!==void 0&&(e[m]=y),m===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!eT.has(a)||e.length!==2)return;const[s,l]=e,c=Tb(s),f=Tb(l),d=fb(s),h=fb(l);if(d!==h&&Yr[a]){this.needsMeasurement=!0;return}if(c!==f)if(_b(c)&&_b(f))for(let m=0;m<e.length;m++){const v=e[m];typeof v=="string"&&(e[m]=parseFloat(v))}else Yr[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,a=[];for(let s=0;s<e.length;s++)(e[s]===null||mL(e[s]))&&a.push(s);a.length&&ML(e,a,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Yr[a](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&e.getValue(a,s).jump(s,!1)}measureEndState(){const{element:e,name:n,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const s=e.getValue(n);s&&s.jump(this.measuredOrigin,!1);const l=a.length-1,c=a[l];a[l]=Yr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,d])=>{e.getValue(f).set(d)}),this.resolveNoneKeyframes()}}const TL=new Set(["opacity","clipPath","filter","transform"]);function lT(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let a=document;const s=n?.[t]??a.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t).filter(a=>a!=null)}const cT=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function AL(t){return mE(t)&&"offsetHeight"in t}const{schedule:Ov}=CE(queueMicrotask,!1),na={x:!1,y:!1};function uT(){return na.x||na.y}function wL(t){return t==="x"||t==="y"?na[t]?null:(na[t]=!0,()=>{na[t]=!1}):na.x||na.y?null:(na.x=na.y=!0,()=>{na.x=na.y=!1})}function fT(t,e){const n=lT(t),a=new AbortController,s={passive:!0,...e,signal:a.signal};return[n,s,()=>a.abort()]}function RL(t){return!(t.pointerType==="touch"||uT())}function CL(t,e,n={}){const[a,s,l]=fT(t,n);return a.forEach(c=>{let f=!1,d=!1,h;const m=()=>{c.removeEventListener("pointerleave",b)},v=_=>{h&&(h(_),h=void 0),m()},y=_=>{f=!1,window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y),d&&(d=!1,v(_))},x=()=>{f=!0,window.addEventListener("pointerup",y,s),window.addEventListener("pointercancel",y,s)},b=_=>{if(_.pointerType!=="touch"){if(f){d=!0;return}v(_)}},E=_=>{if(!RL(_))return;d=!1;const S=e(c,_);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",b,s))};c.addEventListener("pointerenter",E,s),c.addEventListener("pointerdown",x,s)}),l}const dT=(t,e)=>e?t===e?!0:dT(t,e.parentElement):!1,Fv=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,DL=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LL(t){return DL.has(t.tagName)||t.isContentEditable===!0}const NL=new Set(["INPUT","SELECT","TEXTAREA"]);function UL(t){return NL.has(t.tagName)||t.isContentEditable===!0}const dd=new WeakSet;function wb(t){return e=>{e.key==="Enter"&&t(e)}}function Am(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const PL=(t,e)=>{const n=t.currentTarget;if(!n)return;const a=wb(()=>{if(dd.has(n))return;Am(n,"down");const s=wb(()=>{Am(n,"up")}),l=()=>Am(n,"cancel");n.addEventListener("keyup",s,e),n.addEventListener("blur",l,e)});n.addEventListener("keydown",a,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",a),e)};function Rb(t){return Fv(t)&&!uT()}const Cb=new WeakSet;function OL(t,e,n={}){const[a,s,l]=fT(t,n),c=f=>{const d=f.currentTarget;if(!Rb(f)||Cb.has(f))return;dd.add(d),n.stopPropagation&&Cb.add(f);const h=e(d,f),m=(x,b)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",y),dd.has(d)&&dd.delete(d),Rb(x)&&typeof h=="function"&&h(x,{success:b})},v=x=>{m(x,d===window||d===document||n.useGlobalTarget||dT(d,x.target))},y=x=>{m(x,!1)};window.addEventListener("pointerup",v,s),window.addEventListener("pointercancel",y,s)};return a.forEach(f=>{(n.useGlobalTarget?window:f).addEventListener("pointerdown",c,s),AL(f)&&(f.addEventListener("focus",h=>PL(h,s)),!LL(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function Iv(t){return mE(t)&&"ownerSVGElement"in t}const hd=new WeakMap;let pd;const hT=(t,e,n)=>(a,s)=>s&&s[0]?s[0][t+"Size"]:Iv(a)&&"getBBox"in a?a.getBBox()[e]:a[n],FL=hT("inline","width","offsetWidth"),IL=hT("block","height","offsetHeight");function BL({target:t,borderBoxSize:e}){hd.get(t)?.forEach(n=>{n(t,{get width(){return FL(t,e)},get height(){return IL(t,e)}})})}function zL(t){t.forEach(BL)}function VL(){typeof ResizeObserver>"u"||(pd=new ResizeObserver(zL))}function HL(t,e){pd||VL();const n=lT(t);return n.forEach(a=>{let s=hd.get(a);s||(s=new Set,hd.set(a,s)),s.add(e),pd?.observe(a)}),()=>{n.forEach(a=>{const s=hd.get(a);s?.delete(e),s?.size||pd?.unobserve(a)})}}const md=new Set;let ko;function GL(){ko=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};md.forEach(e=>e(t))},window.addEventListener("resize",ko)}function kL(t){return md.add(t),ko||GL(),()=>{md.delete(t),!md.size&&typeof ko=="function"&&(window.removeEventListener("resize",ko),ko=void 0)}}function Db(t,e){return typeof t=="function"?kL(t):HL(t,e)}function WL(t){return Iv(t)&&t.tagName==="svg"}function XL(...t){const e=!Array.isArray(t[0]),n=e?0:-1,a=t[0+n],s=t[1+n],l=t[2+n],c=t[3+n],f=HE(s,l,c);return e?f(a):f}const jL=[...rT,En,la],qL=t=>jL.find(aT(t)),Lb=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wo=()=>({x:Lb(),y:Lb()}),Nb=()=>({min:0,max:0}),Dn=()=>({x:Nb(),y:Nb()}),YL=new WeakMap;function $d(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Vc(t){return typeof t=="string"||Array.isArray(t)}const Bv=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],zv=["initial",...Bv];function Kd(t){return $d(t.animate)||zv.some(e=>Vc(t[e]))}function pT(t){return!!(Kd(t)||t.variants)}function $L(t,e,n){for(const a in e){const s=e[a],l=n[a];if(qn(s))t.addValue(a,s);else if(qn(l))t.addValue(a,zs(s,{owner:t}));else if(l!==s)if(t.hasValue(a)){const c=t.getValue(a);c.liveStyle===!0?c.jump(s):c.hasAnimated||c.set(s)}else{const c=t.getStaticValue(a);t.addValue(a,zs(c!==void 0?c:s,{owner:t}))}}for(const a in n)e[a]===void 0&&t.removeValue(a);return e}const q0={current:null},mT={current:!1},KL=typeof window<"u";function ZL(){if(mT.current=!0,!!KL)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>q0.current=t.matches;t.addEventListener("change",e),e()}else q0.current=!1}const Ub=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ud={};function gT(t){Ud=t}function QL(){return Ud}class JL{scrapeMotionValuesFromProps(e,n,a){return{}}constructor({parent:e,props:n,presenceContext:a,reducedMotionConfig:s,skipAnimations:l,blockInitialAnimation:c,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Cv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=ei.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,Qt.render(this.render,!1,!0))};const{latestValues:h,renderState:m}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=n.initial?{...h}:{},this.renderState=m,this.parent=e,this.props=n,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=l,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Kd(n),this.isVariantNode=pT(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...y}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in y){const b=y[x];h[x]!==void 0&&qn(b)&&b.set(h[x])}}mount(e){if(this.hasBeenMounted)for(const n in this.initialValues)this.values.get(n)?.jump(this.initialValues[n]),this.latestValues[n]=this.initialValues[n];this.current=e,YL.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,a)=>this.bindToMotionValue(a,n)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(mT.current||ZL(),this.shouldReduceMotion=q0.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Na(this.notifyUpdate),Na(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&TL.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:f,times:d,ease:h,duration:m}=n.accelerate,v=new $E({element:this.current,name:e,keyframes:f,times:d,ease:h,duration:oa(m)}),y=c(v);this.valueSubscriptions.set(e,()=>{y(),v.cancel()});return}const a=fl.has(e);a&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Qt.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;typeof window<"u"&&window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{s(),l&&l(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ud){const n=Ud[e];if(!n)continue;const{isEnabled:a,Feature:s}=n;if(!this.features[e]&&s&&a(this.props)&&(this.features[e]=new s(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let a=0;a<Ub.length;a++){const s=Ub[a];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,c=e[l];c&&(this.propEventSubscriptions[s]=this.on(s,c))}this.prevMotionValues=$L(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const a=this.values.get(e);n!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&n!==void 0&&(a=zs(n===null?void 0:n,{owner:this}),this.addValue(e,a)),a}readValue(e,n){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(pE(a)||gE(a))?a=parseFloat(a):!qL(a)&&la.test(n)&&(a=oT(e,n)),this.setBaseTarget(e,qn(a)?a.get():a)),qn(a)?a.get():a}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){const{initial:n}=this.props;let a;if(typeof n=="string"||typeof n=="object"){const l=Nv(this.props,n,this.presenceContext?.custom);l&&(a=l[e])}if(n&&a!==void 0)return a;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!qn(s)?s:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new yv),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Ov.render(this.render)}}class vT extends JL{constructor(){super(...arguments),this.KeyframeResolver=EL}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const a=e.style;return a?a[n]:void 0}removeValueFromRenderState(e,{vars:n,style:a}){delete n[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;qn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Qr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function yT({top:t,left:e,right:n,bottom:a}){return{x:{min:e,max:n},y:{min:t,max:a}}}function eN({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function tN(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),a=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:a.y,right:a.x}}function wm(t){return t===void 0||t===1}function Y0({scale:t,scaleX:e,scaleY:n}){return!wm(t)||!wm(e)||!wm(n)}function As(t){return Y0(t)||xT(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function xT(t){return Pb(t.x)||Pb(t.y)}function Pb(t){return t&&t!=="0%"}function Pd(t,e,n){const a=t-n,s=e*a;return n+s}function Ob(t,e,n,a,s){return s!==void 0&&(t=Pd(t,s,a)),Pd(t,n,a)+e}function $0(t,e=0,n=1,a,s){t.min=Ob(t.min,e,n,a,s),t.max=Ob(t.max,e,n,a,s)}function _T(t,{x:e,y:n}){$0(t.x,e.translate,e.scale,e.originPoint),$0(t.y,n.translate,n.scale,n.originPoint)}const Fb=.999999999999,Ib=1.0000000000001;function nN(t,e,n,a=!1){const s=n.length;if(!s)return;e.x=e.y=1;let l,c;for(let f=0;f<s;f++){l=n[f],c=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(a&&l.options.layoutScroll&&l.scroll&&l!==l.root&&jo(t,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,_T(t,c)),a&&As(l.latestValues)&&jo(t,l.latestValues))}e.x<Ib&&e.x>Fb&&(e.x=1),e.y<Ib&&e.y>Fb&&(e.y=1)}function Xo(t,e){t.min=t.min+e,t.max=t.max+e}function Bb(t,e,n,a,s=.5){const l=on(t.min,t.max,s);$0(t,e,n,l,a)}function jo(t,e){Bb(t.x,e.x,e.scaleX,e.scale,e.originX),Bb(t.y,e.y,e.scaleY,e.scale,e.originY)}function ST(t,e){return yT(tN(t.getBoundingClientRect(),e))}function iN(t,e,n){const a=ST(t,n),{scroll:s}=e;return s&&(Xo(a.x,s.offset.x),Xo(a.y,s.offset.y)),a}const aN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},rN=ul.length;function sN(t,e,n){let a="",s=!0;for(let l=0;l<rN;l++){const c=ul[l],f=t[c];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(c.startsWith("scale")?1:0);else{const h=parseFloat(f);d=c.startsWith("scale")?h===1:h===0}if(!d||n){const h=cT(f,Pv[c]);if(!d){s=!1;const m=aN[c]||c;a+=`${m}(${h}) `}n&&(e[c]=h)}}return a=a.trim(),n?a=n(e,s?"":a):s&&(a="none"),a}function Vv(t,e,n){const{style:a,vars:s,transformOrigin:l}=t;let c=!1,f=!1;for(const d in e){const h=e[d];if(fl.has(d)){c=!0;continue}else if(LE(d)){s[d]=h;continue}else{const m=cT(h,Pv[d]);d.startsWith("origin")?(f=!0,l[d]=m):a[d]=m}}if(e.transform||(c||n?a.transform=sN(e,t.transform,n):a.transform&&(a.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;a.transformOrigin=`${d} ${h} ${m}`}}function bT(t,{style:e,vars:n},a,s){const l=t.style;let c;for(c in e)l[c]=e[c];s?.applyProjectionStyles(l,a);for(c in n)l.setProperty(c,n[c])}function zb(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const fc={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Ze.test(t))t=parseFloat(t);else return t;const n=zb(t,e.target.x),a=zb(t,e.target.y);return`${n}% ${a}%`}},oN={correct:(t,{treeScale:e,projectionDelta:n})=>{const a=t,s=la.parse(t);if(s.length>5)return a;const l=la.createTransformer(t),c=typeof s[0]!="number"?1:0,f=n.x.scale*e.x,d=n.y.scale*e.y;s[0+c]/=f,s[1+c]/=d;const h=on(f,d,.5);return typeof s[2+c]=="number"&&(s[2+c]/=h),typeof s[3+c]=="number"&&(s[3+c]/=h),l(s)}},K0={borderRadius:{...fc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:fc,borderTopRightRadius:fc,borderBottomLeftRadius:fc,borderBottomRightRadius:fc,boxShadow:oN};function MT(t,{layout:e,layoutId:n}){return fl.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!K0[t]||t==="opacity")}function Hv(t,e,n){const a=t.style,s=e?.style,l={};if(!a)return l;for(const c in a)(qn(a[c])||s&&qn(s[c])||MT(c,t)||n?.getValue(c)?.liveStyle!==void 0)&&(l[c]=a[c]);return l}function lN(t){return window.getComputedStyle(t)}class cN extends vT{constructor(){super(...arguments),this.type="html",this.renderInstance=bT}readValueFromInstance(e,n){if(fl.has(n))return this.projection?.isProjecting?F0(n):AD(e,n);{const a=lN(e),s=(LE(n)?a.getPropertyValue(n):a[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return ST(e,n)}build(e,n,a){Vv(e,n,a.transformTemplate)}scrapeMotionValuesFromProps(e,n,a){return Hv(e,n,a)}}const uN={offset:"stroke-dashoffset",array:"stroke-dasharray"},fN={offset:"strokeDashoffset",array:"strokeDasharray"};function dN(t,e,n=1,a=0,s=!0){t.pathLength=1;const l=s?uN:fN;t[l.offset]=`${-a}`,t[l.array]=`${e} ${n}`}const hN=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ET(t,{attrX:e,attrY:n,attrScale:a,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...f},d,h,m){if(Vv(t,f,h),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:y}=t;v.transform&&(y.transform=v.transform,delete v.transform),(y.transform||v.transformOrigin)&&(y.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),y.transform&&(y.transformBox=m?.transformBox??"fill-box",delete v.transformBox);for(const x of hN)v[x]!==void 0&&(y[x]=v[x],delete v[x]);e!==void 0&&(v.x=e),n!==void 0&&(v.y=n),a!==void 0&&(v.scale=a),s!==void 0&&dN(v,s,l,c,!1)}const TT=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),AT=t=>typeof t=="string"&&t.toLowerCase()==="svg";function pN(t,e,n,a){bT(t,e,void 0,a);for(const s in e.attrs)t.setAttribute(TT.has(s)?s:Uv(s),e.attrs[s])}function wT(t,e,n){const a=Hv(t,e,n);for(const s in t)if(qn(t[s])||qn(e[s])){const l=ul.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;a[l]=t[s]}return a}class mN extends vT{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Dn}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(fl.has(n)){const a=sT(n);return a&&a.default||0}return n=TT.has(n)?n:Uv(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,a){return wT(e,n,a)}build(e,n,a){ET(e,n,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(e,n,a,s){pN(e,n,a,s)}mount(e){this.isSVGTag=AT(e.tagName),super.mount(e)}}const gN=zv.length;function RT(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?RT(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<gN;n++){const a=zv[n],s=t.props[a];(Vc(s)||s===!1)&&(e[a]=s)}return e}function CT(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let a=0;a<n;a++)if(e[a]!==t[a])return!1;return!0}const vN=[...Bv].reverse(),yN=Bv.length;function xN(t){return e=>Promise.all(e.map(({animation:n,options:a})=>hL(t,n,a)))}function _N(t){let e=xN(t),n=Vb(),a=!0;const s=d=>(h,m)=>{const v=Yo(t,m,d==="exit"?t.presenceContext?.custom:void 0);if(v){const{transition:y,transitionEnd:x,...b}=v;h={...h,...b,...x}}return h};function l(d){e=d(t)}function c(d){const{props:h}=t,m=RT(t.parent)||{},v=[],y=new Set;let x={},b=1/0;for(let _=0;_<yN;_++){const S=vN[_],A=n[S],w=h[S]!==void 0?h[S]:m[S],D=Vc(w),C=S===d?A.isActive:null;C===!1&&(b=_);let F=w===m[S]&&w!==h[S]&&D;if(F&&a&&t.manuallyAnimateOnMount&&(F=!1),A.protectedKeys={...x},!A.isActive&&C===null||!w&&!A.prevProp||$d(w)||typeof w=="boolean")continue;if(S==="exit"&&A.isActive&&C!==!0){A.prevResolvedValues&&(x={...x,...A.prevResolvedValues});continue}const P=SN(A.prevProp,w);let R=P||S===d&&A.isActive&&!F&&D||_>b&&D,O=!1;const J=Array.isArray(w)?w:[w];let G=J.reduce(s(S),{});C===!1&&(G={});const{prevResolvedValues:Q={}}=A,te={...Q,...G},ee=z=>{R=!0,y.has(z)&&(O=!0,y.delete(z)),A.needsAnimating[z]=!0;const ne=t.getValue(z);ne&&(ne.liveStyle=!1)};for(const z in te){const ne=G[z],he=Q[z];if(x.hasOwnProperty(z))continue;let ve=!1;G0(ne)&&G0(he)?ve=!CT(ne,he):ve=ne!==he,ve?ne!=null?ee(z):y.add(z):ne!==void 0&&y.has(z)?ee(z):A.protectedKeys[z]=!0}A.prevProp=w,A.prevResolvedValues=G,A.isActive&&(x={...x,...G}),a&&t.blockInitialAnimation&&(R=!1);const K=F&&P;R&&(!K||O)&&v.push(...J.map(z=>{const ne={type:S};if(typeof z=="string"&&a&&!K&&t.manuallyAnimateOnMount&&t.parent){const{parent:he}=t,ve=Yo(he,z);if(he.enteringChildren&&ve){const{delayChildren:V}=ve.transition||{};ne.delay=ZE(he.enteringChildren,t,V)}}return{animation:z,options:ne}}))}if(y.size){const _={};if(typeof h.initial!="boolean"){const S=Yo(t,Array.isArray(h.initial)?h.initial[0]:h.initial);S&&S.transition&&(_.transition=S.transition)}y.forEach(S=>{const A=t.getBaseTarget(S),w=t.getValue(S);w&&(w.liveStyle=!0),_[S]=A??null}),v.push({animation:_})}let E=!!v.length;return a&&(h.initial===!1||h.initial===h.animate)&&!t.manuallyAnimateOnMount&&(E=!1),a=!1,E?e(v):Promise.resolve()}function f(d,h){if(n[d].isActive===h)return Promise.resolve();t.variantChildren?.forEach(v=>v.animationState?.setActive(d,h)),n[d].isActive=h;const m=c(d);for(const v in n)n[v].protectedKeys={};return m}return{animateChanges:c,setActive:f,setAnimateFunction:l,getState:()=>n,reset:()=>{n=Vb()}}}function SN(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!CT(e,t):!1}function xs(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Vb(){return{animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()}}function Hb(t,e){t.min=e.min,t.max=e.max}function Ki(t,e){Hb(t.x,e.x),Hb(t.y,e.y)}function Gb(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const DT=1e-4,bN=1-DT,MN=1+DT,LT=.01,EN=0-LT,TN=0+LT;function ti(t){return t.max-t.min}function AN(t,e,n){return Math.abs(t-e)<=n}function kb(t,e,n,a=.5){t.origin=a,t.originPoint=on(e.min,e.max,t.origin),t.scale=ti(n)/ti(e),t.translate=on(n.min,n.max,t.origin)-t.originPoint,(t.scale>=bN&&t.scale<=MN||isNaN(t.scale))&&(t.scale=1),(t.translate>=EN&&t.translate<=TN||isNaN(t.translate))&&(t.translate=0)}function Nc(t,e,n,a){kb(t.x,e.x,n.x,a?a.originX:void 0),kb(t.y,e.y,n.y,a?a.originY:void 0)}function Wb(t,e,n){t.min=n.min+e.min,t.max=t.min+ti(e)}function wN(t,e,n){Wb(t.x,e.x,n.x),Wb(t.y,e.y,n.y)}function Xb(t,e,n){t.min=e.min-n.min,t.max=t.min+ti(e)}function Od(t,e,n){Xb(t.x,e.x,n.x),Xb(t.y,e.y,n.y)}function jb(t,e,n,a,s){return t-=e,t=Pd(t,1/n,a),s!==void 0&&(t=Pd(t,1/s,a)),t}function RN(t,e=0,n=1,a=.5,s,l=t,c=t){if(wa.test(e)&&(e=parseFloat(e),e=on(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=on(l.min,l.max,a);t===l&&(f-=e),t.min=jb(t.min,e,n,f,s),t.max=jb(t.max,e,n,f,s)}function qb(t,e,[n,a,s],l,c){RN(t,e[n],e[a],e[s],e.scale,l,c)}const CN=["x","scaleX","originX"],DN=["y","scaleY","originY"];function Yb(t,e,n,a){qb(t.x,e,CN,n?n.x:void 0,a?a.x:void 0),qb(t.y,e,DN,n?n.y:void 0,a?a.y:void 0)}function $b(t){return t.translate===0&&t.scale===1}function NT(t){return $b(t.x)&&$b(t.y)}function Kb(t,e){return t.min===e.min&&t.max===e.max}function LN(t,e){return Kb(t.x,e.x)&&Kb(t.y,e.y)}function Zb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function UT(t,e){return Zb(t.x,e.x)&&Zb(t.y,e.y)}function Qb(t){return ti(t.x)/ti(t.y)}function Jb(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function _a(t){return[t("x"),t("y")]}function NN(t,e,n){let a="";const s=t.x.translate/e.x,l=t.y.translate/e.y,c=n?.z||0;if((s||l||c)&&(a=`translate3d(${s}px, ${l}px, ${c}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:h,rotate:m,rotateX:v,rotateY:y,skewX:x,skewY:b}=n;h&&(a=`perspective(${h}px) ${a}`),m&&(a+=`rotate(${m}deg) `),v&&(a+=`rotateX(${v}deg) `),y&&(a+=`rotateY(${y}deg) `),x&&(a+=`skewX(${x}deg) `),b&&(a+=`skewY(${b}deg) `)}const f=t.x.scale*e.x,d=t.y.scale*e.y;return(f!==1||d!==1)&&(a+=`scale(${f}, ${d})`),a||"none"}const PT=["TopLeft","TopRight","BottomLeft","BottomRight"],UN=PT.length,e1=t=>typeof t=="string"?parseFloat(t):t,t1=t=>typeof t=="number"||Ze.test(t);function PN(t,e,n,a,s,l){s?(t.opacity=on(0,n.opacity??1,ON(a)),t.opacityExit=on(e.opacity??1,0,FN(a))):l&&(t.opacity=on(e.opacity??1,n.opacity??1,a));for(let c=0;c<UN;c++){const f=`border${PT[c]}Radius`;let d=n1(e,f),h=n1(n,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||t1(d)===t1(h)?(t[f]=Math.max(on(e1(d),e1(h),a),0),(wa.test(h)||wa.test(d))&&(t[f]+="%")):t[f]=h}(e.rotate||n.rotate)&&(t.rotate=on(e.rotate||0,n.rotate||0,a))}function n1(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ON=OT(0,.5,TE),FN=OT(.5,.95,Vi);function OT(t,e,n){return a=>a<t?0:a>e?1:n(Ic(t,e,a))}function IN(t,e,n){const a=qn(t)?t:zs(t);return a.start(Lv("",a,e,n)),a.animation}function Hc(t,e,n,a={passive:!0}){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n)}const BN=(t,e)=>t.depth-e.depth;class zN{constructor(){this.children=[],this.isDirty=!1}add(e){gv(this.children,e),this.isDirty=!0}remove(e){Cd(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(BN),this.isDirty=!1,this.children.forEach(e)}}function VN(t,e){const n=ei.now(),a=({timestamp:s})=>{const l=s-n;l>=e&&(Na(a),t(l-e))};return Qt.setup(a,!0),()=>Na(a)}function gd(t){return qn(t)?t.get():t}class HN{constructor(){this.members=[]}add(e){gv(this.members,e);for(let n=this.members.length-1;n>=0;n--){const a=this.members[n];if(a===e||a===this.lead||a===this.prevLead)continue;const s=a.instance;s&&s.isConnected===!1&&a.isPresent!==!1&&!a.snapshot&&Cd(this.members,a)}e.scheduleRender()}remove(e){if(Cd(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(s=>e===s);if(n===0)return!1;let a;for(let s=n;s>=0;s--){const l=this.members[s],c=l.instance;if(l.isPresent!==!1&&(!c||c.isConnected!==!1)){a=l;break}}return a?(this.promote(a),!0):!1}promote(e,n){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender();const s=a.options.layoutDependency,l=e.options.layoutDependency;if(!(s!==void 0&&l!==void 0&&s===l)){const d=a.instance;d&&d.isConnected===!1&&!a.snapshot||(e.resumeFrom=a,n&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:f}=e.options;f===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:a}=e;n.onExitComplete&&n.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const vd={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Rm=["","X","Y","Z"],GN=1e3;let kN=0;function Cm(t,e,n,a){const{latestValues:s}=e;s[t]&&(n[t]=s[t],e.setStaticValue(t,0),a&&(a[t]=0))}function FT(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=nT(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:l}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",Qt,!(s||l))}const{parent:a}=t;a&&!a.hasCheckedOptimisedAppear&&FT(a)}function IT({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:a,resetTransform:s}){return class{constructor(c={},f=e?.()){this.id=kN++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(jN),this.nodes.forEach(KN),this.nodes.forEach(ZN),this.nodes.forEach(qN)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new zN)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new yv),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=Iv(c)&&!WL(c),this.instance=c;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),t){let m,v=0;const y=()=>this.root.updateBlockedByResize=!1;Qt.read(()=>{v=window.innerWidth}),t(c,()=>{const x=window.innerWidth;x!==v&&(v=x,this.root.updateBlockedByResize=!0,m&&m(),m=VN(y,250),vd.hasAnimatedSinceResize&&(vd.hasAnimatedSinceResize=!1,this.nodes.forEach(r1)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:y,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||nU,{onLayoutAnimationStart:E,onLayoutAnimationComplete:_}=h.getProps(),S=!this.targetLayout||!UT(this.targetLayout,x),A=!v&&y;if(this.options.layoutRoot||this.resumeFrom||A||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...Dv(b,"layout"),onPlay:E,onComplete:_};(h.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(m,A)}else v||r1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Na(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(QN),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&FT(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const v=this.path[m];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(i1);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(a1);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($N),this.nodes.forEach(WN),this.nodes.forEach(XN)):this.nodes.forEach(a1),this.clearAllSnapshots();const f=ei.now();Vn.delta=La(0,1e3/60,f-Vn.timestamp),Vn.timestamp=f,Vn.isProcessing=!0,_m.update.process(Vn),_m.preRender.process(Vn),_m.render.process(Vn),Vn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ov.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(YN),this.sharedNodes.forEach(JN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Qt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Qt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ti(this.snapshot.measuredBox.x)&&!ti(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=Dn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const d=a(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!s)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!NT(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;c&&this.instance&&(f||As(this.latestValues)||m)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),iU(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return Dn();const f=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(aU))){const{scroll:h}=this.root;h&&(Xo(f.x,h.offset.x),Xo(f.y,h.offset.y))}return f}removeElementScroll(c){const f=Dn();if(Ki(f,c),this.scroll?.wasRoot)return f;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:v}=h;h!==this.root&&m&&v.layoutScroll&&(m.wasRoot&&Ki(f,c),Xo(f.x,m.offset.x),Xo(f.y,m.offset.y))}return f}applyTransform(c,f=!1){const d=Dn();Ki(d,c);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&jo(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),As(m.latestValues)&&jo(d,m.latestValues)}return As(this.latestValues)&&jo(d,this.latestValues),d}removeTransform(c){const f=Dn();Ki(f,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!As(h.latestValues))continue;Y0(h.latestValues)&&h.updateSnapshot();const m=Dn(),v=h.measurePageBox();Ki(m,v),Yb(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return As(this.latestValues)&&Yb(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Vn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:v}=this.options;if(!this.layout||!(m||v))return;this.resolvedRelativeTargetAt=Vn.timestamp;const y=this.getClosestProjectingParent();y&&this.linkedParentVersion!==y.layoutVersion&&!y.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(y&&y.layout?this.createRelativeTarget(y,this.layout.layoutBox,y.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Dn(),this.targetWithTransforms=Dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wN(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ki(this.target,this.layout.layoutBox),_T(this.target,this.targetDelta)):Ki(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?this.createRelativeTarget(y,this.target,y.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Y0(this.parent.latestValues)||xT(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,f,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Dn(),this.relativeTargetOrigin=Dn(),Od(this.relativeTargetOrigin,f,d),Ki(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const c=this.getLead(),f=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Vn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;Ki(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,y=this.treeScale.y;nN(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Dn());const{target:x}=c;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Gb(this.prevProjectionDelta.x,this.projectionDelta.x),Gb(this.prevProjectionDelta.y,this.projectionDelta.y)),Nc(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==y||!Jb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Jb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Wo(),this.projectionDelta=Wo(),this.projectionDeltaWithTransform=Wo()}setAnimationOrigin(c,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},v=Wo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const y=Dn(),x=d?d.source:void 0,b=this.layout?this.layout.source:void 0,E=x!==b,_=this.getStack(),S=!_||_.members.length<=1,A=!!(E&&!S&&this.options.crossfade===!0&&!this.path.some(tU));this.animationProgress=0;let w;this.mixTargetDelta=D=>{const C=D/1e3;s1(v.x,c.x,C),s1(v.y,c.y,C),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Od(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),eU(this.relativeTarget,this.relativeTargetOrigin,y,C),w&&LN(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=Dn()),Ki(w,this.relativeTarget)),E&&(this.animationValues=m,PN(m,h,this.latestValues,C,A,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(Na(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Qt.update(()=>{vd.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=zs(0)),this.motionValue.jump(0,!1),this.currentAnimation=IN(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),c.onUpdate&&c.onUpdate(f)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(GN),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=c;if(!(!f||!d||!h)){if(this!==c&&this.layout&&h&&BT(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Dn();const v=ti(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const y=ti(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+y}Ki(f,d),jo(f,m),Nc(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new HN),this.sharedNodes.get(c).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Cm("z",c,h,this.animationValues);for(let m=0;m<Rm.length;m++)Cm(`rotate${Rm[m]}`,c,h,this.animationValues),Cm(`skew${Rm[m]}`,c,h,this.animationValues);c.render();for(const m in h)c.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=gd(f?.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=gd(f?.pointerEvents)||""),this.hasProjected&&!As(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=NN(this.projectionDeltaWithTransform,this.treeScale,m);d&&(v=d(m,v)),c.transform=v;const{x:y,y:x}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${x.origin*100}% 0`,h.animationValues?c.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:c.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const b in K0){if(m[b]===void 0)continue;const{correct:E,applyTo:_,isCSSVariable:S}=K0[b],A=v==="none"?m[b]:E(m[b],h);if(_){const w=_.length;for(let D=0;D<w;D++)c[_[D]]=A}else S?this.options.visualElement.renderState.vars[b]=A:c[b]=A}this.options.layoutId&&(c.pointerEvents=h===this?gd(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(i1),this.root.sharedNodes.clear()}}}function WN(t){t.updateLayout()}function XN(t){const e=t.resumeFrom?.snapshot||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:a}=t.layout,{animationType:s}=t.options,l=e.source!==t.layout.source;s==="size"?_a(m=>{const v=l?e.measuredBox[m]:e.layoutBox[m],y=ti(v);v.min=n[m].min,v.max=v.min+y}):BT(s,e.layoutBox,n)&&_a(m=>{const v=l?e.measuredBox[m]:e.layoutBox[m],y=ti(n[m]);v.max=v.min+y,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[m].max=t.relativeTarget[m].min+y)});const c=Wo();Nc(c,n,e.layoutBox);const f=Wo();l?Nc(f,t.applyTransform(a,!0),e.measuredBox):Nc(f,n,e.layoutBox);const d=!NT(c);let h=!1;if(!t.resumeFrom){const m=t.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:v,layout:y}=m;if(v&&y){const x=Dn();Od(x,e.layoutBox,v.layoutBox);const b=Dn();Od(b,n,y.layoutBox),UT(x,b)||(h=!0),m.options.layoutRoot&&(t.relativeTarget=b,t.relativeTargetOrigin=x,t.relativeParent=m)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:e,delta:f,layoutDelta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function jN(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function qN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function YN(t){t.clearSnapshot()}function i1(t){t.clearMeasurements()}function a1(t){t.isLayoutDirty=!1}function $N(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function r1(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function KN(t){t.resolveTargetDelta()}function ZN(t){t.calcProjection()}function QN(t){t.resetSkewAndRotation()}function JN(t){t.removeLeadSnapshot()}function s1(t,e,n){t.translate=on(e.translate,0,n),t.scale=on(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function o1(t,e,n,a){t.min=on(e.min,n.min,a),t.max=on(e.max,n.max,a)}function eU(t,e,n,a){o1(t.x,e.x,n.x,a),o1(t.y,e.y,n.y,a)}function tU(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const nU={duration:.45,ease:[.4,0,.1,1]},l1=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),c1=l1("applewebkit/")&&!l1("chrome/")?Math.round:Vi;function u1(t){t.min=c1(t.min),t.max=c1(t.max)}function iU(t){u1(t.x),u1(t.y)}function BT(t,e,n){return t==="position"||t==="preserve-aspect"&&!AN(Qb(e),Qb(n),.2)}function aU(t){return t!==t.root&&t.scroll?.wasRoot}const rU=IT({attachResizeListener:(t,e)=>Hc(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Dm={current:void 0},zT=IT({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Dm.current){const t=new rU({});t.mount(window),t.setOptions({layoutScroll:!0}),Dm.current=t}return Dm.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Zd=I.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function sU(t=!0){const e=I.useContext(mv);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:a,register:s}=e,l=I.useId();I.useEffect(()=>{if(t)return s(l)},[t]);const c=I.useCallback(()=>t&&a&&a(l),[l,a,t]);return!n&&a?[!1,c]:[!0]}const VT=I.createContext({strict:!1}),f1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let d1=!1;function oU(){if(d1)return;const t={};for(const e in f1)t[e]={isEnabled:n=>f1[e].some(a=>!!n[a])};gT(t),d1=!0}function HT(){return oU(),QL()}function lU(t){const e=HT();for(const n in t)e[n]={...e[n],...t[n]};gT(e)}const cU=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cU.has(t)}let GT=t=>!Fd(t);function uU(t){typeof t=="function"&&(GT=e=>e.startsWith("on")?!Fd(e):t(e))}try{uU(require("@emotion/is-prop-valid").default)}catch{}function fU(t,e,n){const a={};for(const s in t)s==="values"&&typeof t.values=="object"||(GT(s)||n===!0&&Fd(s)||!e&&!Fd(s)||t.draggable&&s.startsWith("onDrag"))&&(a[s]=t[s]);return a}const Qd=I.createContext({});function dU(t,e){if(Kd(t)){const{initial:n,animate:a}=t;return{initial:n===!1||Vc(n)?n:void 0,animate:Vc(a)?a:void 0}}return t.inherit!==!1?e:{}}function hU(t){const{initial:e,animate:n}=dU(t,I.useContext(Qd));return I.useMemo(()=>({initial:e,animate:n}),[h1(e),h1(n)])}function h1(t){return Array.isArray(t)?t.join(" "):t}const Gv=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function kT(t,e,n){for(const a in e)!qn(e[a])&&!MT(a,n)&&(t[a]=e[a])}function pU({transformTemplate:t},e){return I.useMemo(()=>{const n=Gv();return Vv(n,e,t),Object.assign({},n.vars,n.style)},[e])}function mU(t,e){const n=t.style||{},a={};return kT(a,n,t),Object.assign(a,pU(t,e)),a}function gU(t,e){const n={},a=mU(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=a,n}const WT=()=>({...Gv(),attrs:{}});function vU(t,e,n,a){const s=I.useMemo(()=>{const l=WT();return ET(l,e,AT(a),t.transformTemplate,t.style),{...l.attrs,style:{...l.style}}},[e]);if(t.style){const l={};kT(l,t.style,t),s.style={...l,...s.style}}return s}const yU=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kv(t){return typeof t!="string"||t.includes("-")?!1:!!(yU.indexOf(t)>-1||/[A-Z]/u.test(t))}function xU(t,e,n,{latestValues:a},s,l=!1,c){const d=(c??kv(t)?vU:gU)(e,a,s,t),h=fU(e,typeof t=="string",l),m=t!==I.Fragment?{...h,...d,ref:n}:{},{children:v}=e,y=I.useMemo(()=>qn(v)?v.get():v,[v]);return I.createElement(t,{...m,children:y})}function _U({scrapeMotionValuesFromProps:t,createRenderState:e},n,a,s){return{latestValues:SU(n,a,s,t),renderState:e()}}function SU(t,e,n,a){const s={},l=a(t,{});for(const y in l)s[y]=gd(l[y]);let{initial:c,animate:f}=t;const d=Kd(t),h=pT(t);e&&h&&!d&&t.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let m=n?n.initial===!1:!1;m=m||c===!1;const v=m?f:c;if(v&&typeof v!="boolean"&&!$d(v)){const y=Array.isArray(v)?v:[v];for(let x=0;x<y.length;x++){const b=Nv(t,y[x]);if(b){const{transitionEnd:E,transition:_,...S}=b;for(const A in S){let w=S[A];if(Array.isArray(w)){const D=m?w.length-1:0;w=w[D]}w!==null&&(s[A]=w)}for(const A in E)s[A]=E[A]}}}return s}const XT=t=>(e,n)=>{const a=I.useContext(Qd),s=I.useContext(mv),l=()=>_U(t,e,a,s);return n?l():pv(l)},bU=XT({scrapeMotionValuesFromProps:Hv,createRenderState:Gv}),MU=XT({scrapeMotionValuesFromProps:wT,createRenderState:WT}),EU=Symbol.for("motionComponentSymbol");function TU(t,e,n){const a=I.useRef(n);I.useInsertionEffect(()=>{a.current=n});const s=I.useRef(null);return I.useCallback(l=>{l&&t.onMount?.(l),e&&(l?e.mount(l):e.unmount());const c=a.current;if(typeof c=="function")if(l){const f=c(l);typeof f=="function"&&(s.current=f)}else s.current?(s.current(),s.current=null):c(l);else c&&(c.current=l)},[e])}const jT=I.createContext({});function Ho(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function AU(t,e,n,a,s,l){const{visualElement:c}=I.useContext(Qd),f=I.useContext(VT),d=I.useContext(mv),h=I.useContext(Zd),m=h.reducedMotion,v=h.skipAnimations,y=I.useRef(null),x=I.useRef(!1);a=a||f.renderer,!y.current&&a&&(y.current=a(t,{visualState:e,parent:c,props:n,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:m,skipAnimations:v,isSVG:l}),x.current&&y.current&&(y.current.manuallyAnimateOnMount=!0));const b=y.current,E=I.useContext(jT);b&&!b.projection&&s&&(b.type==="html"||b.type==="svg")&&wU(y.current,n,s,E);const _=I.useRef(!1);I.useInsertionEffect(()=>{b&&_.current&&b.update(n,d)});const S=n[tT],A=I.useRef(!!S&&!window.MotionHandoffIsComplete?.(S)&&window.MotionHasOptimisedAnimation?.(S));return hE(()=>{x.current=!0,b&&(_.current=!0,window.MotionIsMounted=!0,b.updateFeatures(),b.scheduleRenderMicrotask(),A.current&&b.animationState&&b.animationState.animateChanges())}),I.useEffect(()=>{b&&(!A.current&&b.animationState&&b.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(S)}),A.current=!1),b.enteringChildren=void 0)}),b}function wU(t,e,n,a){const{layoutId:s,layout:l,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:qT(t.parent)),t.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!c||f&&Ho(f),visualElement:t,animationType:typeof l=="string"?l:"both",initialPromotionConfig:a,crossfade:m,layoutScroll:d,layoutRoot:h})}function qT(t){if(t)return t.options.allowProjection!==!1?t.projection:qT(t.parent)}function Lm(t,{forwardMotionProps:e=!1,type:n}={},a,s){a&&lU(a);const l=n?n==="svg":kv(t),c=l?MU:bU;function f(h,m){let v;const y={...I.useContext(Zd),...h,layoutId:RU(h)},{isStatic:x}=y,b=hU(h),E=c(h,x);if(!x&&dE){CU();const _=DU(y);v=_.MeasureLayout,b.visualElement=AU(t,E,y,s,_.ProjectionNode,l)}return ie.jsxs(Qd.Provider,{value:b,children:[v&&b.visualElement?ie.jsx(v,{visualElement:b.visualElement,...y}):null,xU(t,h,TU(E,b.visualElement,m),E,x,e,l)]})}f.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const d=I.forwardRef(f);return d[EU]=t,d}function RU({layoutId:t}){const e=I.useContext(fE).id;return e&&t!==void 0?e+"-"+t:t}function CU(t,e){I.useContext(VT).strict}function DU(t){const e=HT(),{drag:n,layout:a}=e;if(!n&&!a)return{};const s={...n,...a};return{MeasureLayout:n?.isEnabled(t)||a?.isEnabled(t)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function LU(t,e){if(typeof Proxy>"u")return Lm;const n=new Map,a=(l,c)=>Lm(l,c,t,e),s=(l,c)=>a(l,c);return new Proxy(s,{get:(l,c)=>c==="create"?a:(n.has(c)||n.set(c,Lm(c,void 0,t,e)),n.get(c))})}const NU=(t,e)=>e.isSVG??kv(t)?new mN(e):new cN(e,{allowProjection:t!==I.Fragment});class UU extends Qr{constructor(e){super(e),e.animationState||(e.animationState=_N(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();$d(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let PU=0;class OU extends Qr{constructor(){super(...arguments),this.id=PU++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const s=this.node.animationState.setActive("exit",!e);n&&!e&&s.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const FU={animation:{Feature:UU},exit:{Feature:OU}};function nu(t){return{point:{x:t.pageX,y:t.pageY}}}const IU=t=>e=>Fv(e)&&t(e,nu(e));function Uc(t,e,n,a){return Hc(t,e,IU(n),a)}const YT=({current:t})=>t?t.ownerDocument.defaultView:null,p1=(t,e)=>Math.abs(t-e);function BU(t,e){const n=p1(t.x,e.x),a=p1(t.y,e.y);return Math.sqrt(n**2+a**2)}const m1=new Set(["auto","scroll"]);class $T{constructor(e,n,{transformPagePoint:a,contextWindow:s=window,dragSnapToOrigin:l=!1,distanceThreshold:c=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=Um(this.lastMoveEventInfo,this.history),b=this.startEvent!==null,E=BU(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!b&&!E)return;const{point:_}=x,{timestamp:S}=Vn;this.history.push({..._,timestamp:S});const{onStart:A,onMove:w}=this.handlers;b||(A&&A(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,x)},this.handlePointerMove=(x,b)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=Nm(b,this.transformPagePoint),Qt.update(this.updatePoint,!0)},this.handlePointerUp=(x,b)=>{this.end();const{onEnd:E,onSessionEnd:_,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const A=Um(x.type==="pointercancel"?this.lastMoveEventInfo:Nm(b,this.transformPagePoint),this.history);this.startEvent&&E&&E(x,A),_&&_(x,A)},!Fv(e))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=a,this.distanceThreshold=c,this.contextWindow=s||window;const d=nu(e),h=Nm(d,this.transformPagePoint),{point:m}=h,{timestamp:v}=Vn;this.history=[{...m,timestamp:v}];const{onSessionStart:y}=n;y&&y(e,Um(h,this.history)),this.removeListeners=Jc(Uc(this.contextWindow,"pointermove",this.handlePointerMove),Uc(this.contextWindow,"pointerup",this.handlePointerUp),Uc(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let n=e.parentElement;for(;n;){const a=getComputedStyle(n);(m1.has(a.overflowX)||m1.has(a.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const a=e===window,s=a?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},l={x:s.x-n.x,y:s.y-n.y};l.x===0&&l.y===0||(a?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=l.x,this.lastMoveEventInfo.point.y+=l.y):this.history.length>0&&(this.history[0].x-=l.x,this.history[0].y-=l.y),this.scrollPositions.set(e,s),Qt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Na(this.updatePoint)}}function Nm(t,e){return e?{point:e(t.point)}:t}function g1(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Um({point:t},e){return{point:t,delta:g1(t,KT(e)),offset:g1(t,zU(e)),velocity:VU(e,.1)}}function zU(t){return t[0]}function KT(t){return t[t.length-1]}function VU(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,a=null;const s=KT(t);for(;n>=0&&(a=t[n],!(s.timestamp-a.timestamp>oa(e)));)n--;if(!a)return{x:0,y:0};a===t[0]&&t.length>2&&s.timestamp-a.timestamp>oa(e)*2&&(a=t[1]);const l=Bi(s.timestamp-a.timestamp);if(l===0)return{x:0,y:0};const c={x:(s.x-a.x)/l,y:(s.y-a.y)/l};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function HU(t,{min:e,max:n},a){return e!==void 0&&t<e?t=a?on(e,t,a.min):Math.max(t,e):n!==void 0&&t>n&&(t=a?on(n,t,a.max):Math.min(t,n)),t}function v1(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function GU(t,{top:e,left:n,bottom:a,right:s}){return{x:v1(t.x,n,s),y:v1(t.y,e,a)}}function y1(t,e){let n=e.min-t.min,a=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,a]=[a,n]),{min:n,max:a}}function kU(t,e){return{x:y1(t.x,e.x),y:y1(t.y,e.y)}}function WU(t,e){let n=.5;const a=ti(t),s=ti(e);return s>a?n=Ic(e.min,e.max-a,t.min):a>s&&(n=Ic(t.min,t.max-s,e.min)),La(0,1,n)}function XU(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Z0=.35;function jU(t=Z0){return t===!1?t=0:t===!0&&(t=Z0),{x:x1(t,"left","right"),y:x1(t,"top","bottom")}}function x1(t,e,n){return{min:_1(t,e),max:_1(t,n)}}function _1(t,e){return typeof t=="number"?t:t[e]||0}const qU=new WeakMap;class YU{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:a}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=v=>{n&&this.snapToCursor(nu(v).point),this.stopAnimation()},c=(v,y)=>{const{drag:x,dragPropagation:b,onDragStart:E}=this.getProps();if(x&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=wL(x),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=y,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_a(S=>{let A=this.getAxisMotionValue(S).get()||0;if(wa.test(A)){const{projection:w}=this.visualElement;if(w&&w.layout){const D=w.layout.layoutBox[S];D&&(A=ti(D)*(parseFloat(A)/100))}}this.originPoint[S]=A}),E&&Qt.update(()=>E(v,y),!1,!0),k0(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},f=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y;const{dragPropagation:x,dragDirectionLock:b,onDirectionLock:E,onDrag:_}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:S}=y;if(b&&this.currentDirection===null){this.currentDirection=KU(S),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",y.point,S),this.updateAxis("y",y.point,S),this.visualElement.render(),_&&Qt.update(()=>_(v,y),!1,!0)},d=(v,y)=>{this.latestPointerEvent=v,this.latestPanInfo=y,this.stop(v,y),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new $T(e,{onSessionStart:l,onStart:c,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:a,contextWindow:YT(this.visualElement),element:this.visualElement.current})}stop(e,n){const a=e||this.latestPointerEvent,s=n||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!s||!a)return;const{velocity:c}=s;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&Qt.postRender(()=>f(a,s))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,a){const{drag:s}=this.getProps();if(!a||!Rf(e,s,this.currentDirection))return;const l=this.getAxisMotionValue(e);let c=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(c=HU(c,this.constraints[e],this.elastic[e])),l.set(c)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,s=this.constraints;e&&Ho(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=GU(a.layoutBox,e):this.constraints=!1,this.elastic=jU(n),s!==this.constraints&&!Ho(e)&&a&&this.constraints&&!this.hasMutatedConstraints&&_a(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=XU(a.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ho(e))return!1;const a=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=iN(a,s.root,this.visualElement.getTransformPagePoint());let c=kU(s.layout.layoutBox,l);if(n){const f=n(eN(c));this.hasMutatedConstraints=!!f,f&&(c=yT(f))}return c}startAnimation(e){const{drag:n,dragMomentum:a,dragElastic:s,dragTransition:l,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=_a(m=>{if(!Rf(m,n,this.currentDirection))return;let v=d&&d[m]||{};c&&(v={min:0,max:0});const y=s?200:1e6,x=s?40:1e7,b={type:"inertia",velocity:a?e[m]:0,bounceStiffness:y,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...v};return this.startAxisValueAnimation(m,b)});return Promise.all(h).then(f)}startAxisValueAnimation(e,n){const a=this.getAxisMotionValue(e);return k0(this.visualElement,e),a.start(Lv(e,a,0,n,this.visualElement,!1))}stopAnimation(){_a(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),s=a[n];return s||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){_a(n=>{const{drag:a}=this.getProps();if(!Rf(n,a,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(n);if(s&&s.layout){const{min:c,max:f}=s.layout.layoutBox[n],d=l.get()||0;l.set(e[n]-on(c,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:a}=this.visualElement;if(!Ho(n)||!a||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};_a(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();s[c]=WU({min:d,max:d},this.constraints[c])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.constraints=!1,this.resolveConstraints(),_a(c=>{if(!Rf(c,e,null))return;const f=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];f.set(on(d,h,s[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;qU.set(this.visualElement,this);const e=this.visualElement.current,n=Uc(e,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps(),y=h.target,x=y!==e&&UL(y);m&&v&&!x&&this.start(h)});let a;const s=()=>{const{dragConstraints:h}=this.getProps();Ho(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),a||(a=$U(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:l}=this.visualElement,c=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Qt.read(s);const f=Hc(window,"resize",()=>this.scalePositionWithinConstraints()),d=l.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&(_a(v=>{const y=this.getAxisMotionValue(v);y&&(this.originPoint[v]+=h[v].translate,y.set(y.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),n(),c(),d&&d(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:a=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:c=Z0,dragMomentum:f=!0}=e;return{...e,drag:n,dragDirectionLock:a,dragPropagation:s,dragConstraints:l,dragElastic:c,dragMomentum:f}}}function S1(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function $U(t,e,n){const a=Db(t,S1(n)),s=Db(e,S1(n));return()=>{a(),s()}}function Rf(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function KU(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class ZU extends Qr{constructor(e){super(e),this.removeGroupControls=Vi,this.removeListeners=Vi,this.controls=new YU(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Vi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Pm=t=>(e,n)=>{t&&Qt.update(()=>t(e,n),!1,!0)};class QU extends Qr{constructor(){super(...arguments),this.removePointerDownListener=Vi}onPointerDown(e){this.session=new $T(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:YT(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:a,onPanEnd:s}=this.node.getProps();return{onSessionStart:Pm(e),onStart:Pm(n),onMove:Pm(a),onEnd:(l,c)=>{delete this.session,s&&Qt.postRender(()=>s(l,c))}}}mount(){this.removePointerDownListener=Uc(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Om=!1;class JU extends I.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:a,layoutId:s}=this.props,{projection:l}=e;l&&(n.group&&n.group.add(l),a&&a.register&&s&&a.register(l),Om&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vd.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:a,drag:s,isPresent:l}=this.props,{projection:c}=a;return c&&(c.isPresent=l,e.layoutDependency!==n&&c.setOptions({...c.options,layoutDependency:n}),Om=!0,s||e.layoutDependency!==n||n===void 0||e.isPresent!==l?c.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?c.promote():c.relegate()||Qt.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ov.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:a}=this.props,{projection:s}=e;Om=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),a&&a.deregister&&a.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function ZT(t){const[e,n]=sU(),a=I.useContext(fE);return ie.jsx(JU,{...t,layoutGroup:a,switchLayoutGroup:I.useContext(jT),isPresent:e,safeToRemove:n})}const eP={pan:{Feature:QU},drag:{Feature:ZU,ProjectionNode:zT,MeasureLayout:ZT}};function b1(t,e,n){const{props:a}=t;t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,l=a[s];l&&Qt.postRender(()=>l(e,nu(e)))}class tP extends Qr{mount(){const{current:e}=this.node;e&&(this.unmount=CL(e,(n,a)=>(b1(this.node,a,"Start"),s=>b1(this.node,s,"End"))))}unmount(){}}class nP extends Qr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Jc(Hc(this.node.current,"focus",()=>this.onFocus()),Hc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function M1(t,e,n){const{props:a}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&a.whileTap&&t.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),l=a[s];l&&Qt.postRender(()=>l(e,nu(e)))}class iP extends Qr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:a}=this.node.props;this.unmount=OL(e,(s,l)=>(M1(this.node,l,"Start"),(c,{success:f})=>M1(this.node,c,f?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:a?.tap===!1})}unmount(){}}const Q0=new WeakMap,Fm=new WeakMap,aP=t=>{const e=Q0.get(t.target);e&&e(t)},rP=t=>{t.forEach(aP)};function sP({root:t,...e}){const n=t||document;Fm.has(n)||Fm.set(n,{});const a=Fm.get(n),s=JSON.stringify(e);return a[s]||(a[s]=new IntersectionObserver(rP,{root:t,...e})),a[s]}function oP(t,e,n){const a=sP(e);return Q0.set(t,n),a.observe(t),()=>{Q0.delete(t),a.unobserve(t)}}const lP={some:0,all:1};class cP extends Qr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:a,amount:s="some",once:l}=e,c={root:n?n.current:void 0,rootMargin:a,threshold:typeof s=="number"?s:lP[s]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:v}=this.node.getProps(),y=h?m:v;y&&y(d)};return oP(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(uP(e,n))&&this.startObserver()}unmount(){}}function uP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const fP={inView:{Feature:cP},tap:{Feature:iP},focus:{Feature:nP},hover:{Feature:tP}},dP={layout:{ProjectionNode:zT,MeasureLayout:ZT}},hP={...FU,...fP,...eP,...dP},Im=LU(hP,NU);function QT(t){const e=pv(()=>zs(t)),{isStatic:n}=I.useContext(Zd);if(n){const[,a]=I.useState(t);I.useEffect(()=>e.on("change",a),[])}return e}function JT(t,e){const n=QT(e()),a=()=>n.set(e());return a(),hE(()=>{const s=()=>Qt.preRender(a,!1,!0),l=t.map(c=>c.on("change",s));return()=>{l.forEach(c=>c()),Na(a)}}),n}function pP(t){Lc.current=[],t();const e=JT(Lc.current,t);return Lc.current=void 0,e}function mP(t,e,n,a){if(typeof t=="function")return pP(t);const l=typeof e=="function"?e:XL(e,n,a),c=Array.isArray(t)?E1(t,l):E1([t],([d])=>l(d)),f=Array.isArray(t)?void 0:t.accelerate;return f&&!f.isTransformed&&typeof e!="function"&&Array.isArray(n)&&a?.clamp!==!1&&(c.accelerate={...f,times:e,keyframes:n,isTransformed:!0}),c}function E1(t,e){const n=pv(()=>[]);return JT(t,()=>{n.length=0;const a=t.length;for(let s=0;s<a;s++)n[s]=t[s].get();return e(n)})}function gP(t){const e=I.useRef(0),{isStatic:n}=I.useContext(Zd);I.useEffect(()=>{if(n)return;const a=({timestamp:s,delta:l})=>{e.current||(e.current=s),t(s-e.current,l)};return Qt.update(a,!0),()=>Na(a)},[t])}function eA({children:t,className:e="",colors:n=["#5227FF","#FF9FFC","#B19EEF"],animationSpeed:a=8,showBorder:s=!1,direction:l="horizontal",pauseOnHover:c=!1,yoyo:f=!0}){const[d,h]=I.useState(!1),m=QT(0),v=I.useRef(0),y=I.useRef(null),x=a*1e3;gP(D=>{if(d){y.current=null;return}if(y.current===null){y.current=D;return}const C=D-y.current;if(y.current=D,v.current+=C,f){const F=x*2,P=v.current%F;P<x?m.set(P/x*100):m.set(100-(P-x)/x*100)}else m.set(v.current/x*100)}),I.useEffect(()=>{v.current=0,m.set(0)},[a,m,f]);const b=mP(m,D=>l==="horizontal"?`${D}% 50%`:l==="vertical"?`50% ${D}%`:`${D}% 50%`),E=I.useCallback(()=>{c&&h(!0)},[c]),_=I.useCallback(()=>{c&&h(!1)},[c]),S=l==="horizontal"?"to right":l==="vertical"?"to bottom":"to bottom right",A=[...n,n[0]].join(", "),w={backgroundImage:`linear-gradient(${S}, ${A})`,backgroundSize:l==="horizontal"?"300% 100%":l==="vertical"?"100% 300%":"300% 300%",backgroundRepeat:"repeat"};return ie.jsxs(Im.div,{className:`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${s?"py-1 px-2":""} ${e}`,onMouseEnter:E,onMouseLeave:_,children:[s&&ie.jsx(Im.div,{className:"absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]",style:{...w,backgroundPosition:b},children:ie.jsx("div",{className:"absolute bg-black rounded-[1.25rem] z-[-1]",style:{width:"calc(100% - 2px)",height:"calc(100% - 2px)",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}})}),ie.jsx(Im.div,{className:"inline-block relative z-2 text-transparent bg-clip-text",style:{...w,backgroundPosition:b,WebkitBackgroundClip:"text"},children:t})]})}const vP=({children:t,title:e,icon:n,logo:a,subtitle:s,dark:l=!1,bgColor:c,textColor:f,className:d})=>{I.useRef(null);const h=c??(l?"bg-transparent border-b shadow-white/20":"bg-gray-50 shadow-xs"),m=f??(l?"text-white":"text-slate-500");return ie.jsxs("div",{className:`fixed top-0 left-0 w-full px-5 py-4 z-50 ${h} ${d??""}`,children:[ie.jsxs("div",{className:"flex items-center justify-between",children:[ie.jsxs("div",{className:"flex items-center gap-2",children:[(n||a)&&ie.jsx("span",{className:"p-1 flex items-center justify-center",children:n?ie.jsx(Fc,{icon:n,className:`text-3xl ${m}`}):typeof a=="string"?ie.jsx("img",{src:a,alt:"Logo",className:"w-10 h-10 object-contain"}):a}),ie.jsxs("div",{className:"flex flex-col",children:[l?ie.jsx(eA,{colors:["#3AB0A1","#4DB6AC","#2C8C84"],animationSpeed:8,showBorder:!1,className:"text-xl font-bold custom-class",children:e}):ie.jsx("h1",{className:"text-xl font-bold text-slate-800",children:e}),s&&ie.jsx("span",{className:`text-sm font-light ${l?"text-gray-300":"text-slate-600"}`,children:s})]})]}),ie.jsx("div",{className:"flex items-center gap-4",children:ie.jsx(E3,{type:"teal",className:"mr-16",dark:l,children:"Hire Me"})})]}),t]})},yP=({duration:t=3e3,onComplete:e})=>{const n=I.useRef(null),a=I.useRef(null),s=I.useRef(null);let l=0,c=0;const f=12,d=6;return I.useEffect(()=>{let h=null;const m=v=>{h||(h=v);const y=v-h,x=Math.min(y/t*100,100),E=(x-l)*f-c*d,_=.016;c+=E*_,l+=c*_,n.current&&(n.current.style.width=`${l}%`),a.current&&(a.current.style.left=`${l}%`),x<100?s.current=requestAnimationFrame(m):e&&e()};return s.current=requestAnimationFrame(m),()=>cancelAnimationFrame(s.current)},[t,e]),ie.jsxs("div",{className:"fixed inset-0 flex flex-col items-center justify-center bg-black z-50",children:[ie.jsxs("div",{className:"relative w-96 h-6 bg-gray-900 rounded-full overflow-hidden shadow-lg",children:[ie.jsx("div",{ref:n,className:"absolute h-full rounded-full bg-gradient-to-r from-[#3AB0A1] via-[#4DB6AC] to-[#2C8C84] shadow-xl transition-[width] duration-75",style:{width:"0%"}}),ie.jsx("div",{ref:a,className:"absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#3AB0A1] blur-md shadow-2xl",style:{left:"0%"}})]}),ie.jsx("div",{className:"mt-6 font-semibold tracking-wide",children:ie.jsx(eA,{colors:["#3AB0A1","#4DB6AC","#2C8C84"],animationSpeed:8,showBorder:!1,className:"text-xl font-bold custom-class",children:"Please wait..."})})]})};const Wv="183",xP=0,T1=1,_P=2,yd=1,SP=2,Ec=3,Kr=0,ui=1,sr=2,or=0,$o=1,J0=2,A1=3,w1=4,bP=5,Rs=100,MP=101,EP=102,TP=103,AP=104,wP=200,RP=201,CP=202,DP=203,eg=204,tg=205,LP=206,NP=207,UP=208,PP=209,OP=210,FP=211,IP=212,BP=213,zP=214,ng=0,ig=1,ag=2,Jo=3,rg=4,sg=5,og=6,lg=7,tA=0,VP=1,HP=2,Ra=0,nA=1,iA=2,aA=3,rA=4,sA=5,oA=6,lA=7,cA=300,Vs=301,el=302,Bm=303,zm=304,Jd=306,cg=1e3,Ei=1001,ug=1002,Gn=1003,GP=1004,Cf=1005,An=1006,Vm=1007,Ns=1008,Ii=1009,uA=1010,fA=1011,Gc=1012,Xv=1013,Ua=1014,sa=1015,Pa=1016,jv=1017,qv=1018,kc=1020,dA=35902,hA=35899,pA=1021,mA=1022,zi=1023,fr=1026,Us=1027,gA=1028,Yv=1029,tl=1030,$v=1031,Kv=1033,xd=33776,_d=33777,Sd=33778,bd=33779,fg=35840,dg=35841,hg=35842,pg=35843,mg=36196,gg=37492,vg=37496,yg=37488,xg=37489,_g=37490,Sg=37491,bg=37808,Mg=37809,Eg=37810,Tg=37811,Ag=37812,wg=37813,Rg=37814,Cg=37815,Dg=37816,Lg=37817,Ng=37818,Ug=37819,Pg=37820,Og=37821,Fg=36492,Ig=36494,Bg=36495,zg=36283,Vg=36284,Hg=36285,Gg=36286,kP=3200,WP=0,XP=1,qr="",Oi="srgb",nl="srgb-linear",Id="linear",Yt="srgb",To=7680,R1=519,jP=512,qP=513,YP=514,Zv=515,$P=516,KP=517,Qv=518,ZP=519,C1=35044,D1="300 es",Ea=2e3,Bd=2001;function QP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zd(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function JP(){const t=zd("canvas");return t.style.display="block",t}const L1={};function N1(...t){const e="THREE."+t.shift();console.log(e,...t)}function vA(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ut(...t){t=vA(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ft(...t){t=vA(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vd(...t){const e=t.join(" ");e in L1||(L1[e]=!0,ut(...t))}function eO(t,e,n){return new Promise(function(a,s){function l(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const tO={[ng]:ig,[ag]:og,[rg]:lg,[Jo]:sg,[ig]:ng,[og]:ag,[lg]:rg,[sg]:Jo};class dl{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hm=Math.PI/180,kg=180/Math.PI;function iu(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Wn[t&255]+Wn[t>>8&255]+Wn[t>>16&255]+Wn[t>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[n&63|128]+Wn[n>>8&255]+"-"+Wn[n>>16&255]+Wn[n>>24&255]+Wn[a&255]+Wn[a>>8&255]+Wn[a>>16&255]+Wn[a>>24&255]).toLowerCase()}function Dt(t,e,n){return Math.max(e,Math.min(n,t))}function nO(t,e){return(t%e+e)%e}function Gm(t,e,n){return(1-n)*t+n*e}function dc(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ci(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class mt{constructor(e=0,n=0){mt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,s=e.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*a-c*s+e.x,this.y=l*s+c*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(e=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=s}static slerpFlat(e,n,a,s,l,c,f){let d=a[s+0],h=a[s+1],m=a[s+2],v=a[s+3],y=l[c+0],x=l[c+1],b=l[c+2],E=l[c+3];if(v!==E||d!==y||h!==x||m!==b){let _=d*y+h*x+m*b+v*E;_<0&&(y=-y,x=-x,b=-b,E=-E,_=-_);let S=1-f;if(_<.9995){const A=Math.acos(_),w=Math.sin(A);S=Math.sin(S*A)/w,f=Math.sin(f*A)/w,d=d*S+y*f,h=h*S+x*f,m=m*S+b*f,v=v*S+E*f}else{d=d*S+y*f,h=h*S+x*f,m=m*S+b*f,v=v*S+E*f;const A=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=A,h*=A,m*=A,v*=A}}e[n]=d,e[n+1]=h,e[n+2]=m,e[n+3]=v}static multiplyQuaternionsFlat(e,n,a,s,l,c){const f=a[s],d=a[s+1],h=a[s+2],m=a[s+3],v=l[c],y=l[c+1],x=l[c+2],b=l[c+3];return e[n]=f*b+m*v+d*x-h*y,e[n+1]=d*b+m*y+h*v-f*x,e[n+2]=h*b+m*x+f*y-d*v,e[n+3]=m*b-f*v-d*y-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,s){return this._x=e,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(s/2),v=f(l/2),y=d(a/2),x=d(s/2),b=d(l/2);switch(c){case"XYZ":this._x=y*m*v+h*x*b,this._y=h*x*v-y*m*b,this._z=h*m*b+y*x*v,this._w=h*m*v-y*x*b;break;case"YXZ":this._x=y*m*v+h*x*b,this._y=h*x*v-y*m*b,this._z=h*m*b-y*x*v,this._w=h*m*v+y*x*b;break;case"ZXY":this._x=y*m*v-h*x*b,this._y=h*x*v+y*m*b,this._z=h*m*b+y*x*v,this._w=h*m*v-y*x*b;break;case"ZYX":this._x=y*m*v-h*x*b,this._y=h*x*v+y*m*b,this._z=h*m*b-y*x*v,this._w=h*m*v+y*x*b;break;case"YZX":this._x=y*m*v+h*x*b,this._y=h*x*v+y*m*b,this._z=h*m*b-y*x*v,this._w=h*m*v-y*x*b;break;case"XZY":this._x=y*m*v-h*x*b,this._y=h*x*v-y*m*b,this._z=h*m*b+y*x*v,this._w=h*m*v+y*x*b;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],s=n[4],l=n[8],c=n[1],f=n[5],d=n[9],h=n[2],m=n[6],v=n[10],y=a+f+v;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(c-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-h)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(c-s)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,s=e._y,l=e._z,c=e._w,f=n._x,d=n._y,h=n._z,m=n._w;return this._x=a*m+c*f+s*h-l*d,this._y=s*m+c*d+l*f-a*h,this._z=l*m+c*h+a*d-s*f,this._w=c*m-a*f-s*d-l*h,this._onChangeCallback(),this}slerp(e,n){let a=e._x,s=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(a=-a,s=-s,l=-l,c=-c,f=-f);let d=1-n;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,n=Math.sin(n*h)/m,this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this._onChangeCallback()}else this._x=this._x*d+a*n,this._y=this._y*d+s*n,this._z=this._z*d+l*n,this._w=this._w*d+c*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,n=0,a=0){ue.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(U1.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(U1.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,l=e.elements,c=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*c,this}applyQuaternion(e){const n=this.x,a=this.y,s=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*s-f*a),m=2*(f*n-l*s),v=2*(l*a-c*n);return this.x=n+d*h+c*v-f*m,this.y=a+d*m+f*h-l*v,this.z=s+d*v+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,s=e.y,l=e.z,c=n.x,f=n.y,d=n.z;return this.x=s*d-l*f,this.y=l*c-a*d,this.z=a*f-s*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return km.copy(this).projectOnVector(e),this.sub(km)}reflect(e){return this.sub(km.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return n*n+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const s=Math.sin(n)*e;return this.x=s*Math.sin(a),this.y=Math.cos(n)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const km=new ue,U1=new hl;class _t{constructor(e,n,a,s,l,c,f,d,h){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,s,l,c,f,d,h)}set(e,n,a,s,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=n,m[4]=l,m[5]=d,m[6]=a,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,l=this.elements,c=a[0],f=a[3],d=a[6],h=a[1],m=a[4],v=a[7],y=a[2],x=a[5],b=a[8],E=s[0],_=s[3],S=s[6],A=s[1],w=s[4],D=s[7],C=s[2],F=s[5],P=s[8];return l[0]=c*E+f*A+d*C,l[3]=c*_+f*w+d*F,l[6]=c*S+f*D+d*P,l[1]=h*E+m*A+v*C,l[4]=h*_+m*w+v*F,l[7]=h*S+m*D+v*P,l[2]=y*E+x*A+b*C,l[5]=y*_+x*w+b*F,l[8]=y*S+x*D+b*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return n*c*m-n*f*h-a*l*m+a*f*d+s*l*h-s*c*d}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=m*c-f*h,y=f*d-m*l,x=h*l-c*d,b=n*v+a*y+s*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(s*h-m*a)*E,e[2]=(f*a-s*c)*E,e[3]=y*E,e[4]=(m*n-s*d)*E,e[5]=(s*l-f*n)*E,e[6]=x*E,e[7]=(a*d-h*n)*E,e[8]=(c*n-a*l)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,s,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*c+h*f)+c+e,-s*h,s*d,-s*(-h*c+d*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(Wm.makeScale(e,n)),this}rotate(e){return this.premultiply(Wm.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wm.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wm=new _t,P1=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),O1=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iO(){const t={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Yt&&(s.r=lr(s.r),s.g=lr(s.g),s.b=lr(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Yt&&(s.r=Ko(s.r),s.g=Ko(s.g),s.b=Ko(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qr?Id:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Vd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Vd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return t.define({[nl]:{primaries:e,whitePoint:a,transfer:Id,toXYZ:P1,fromXYZ:O1,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Oi},outputColorSpaceConfig:{drawingBufferColorSpace:Oi}},[Oi]:{primaries:e,whitePoint:a,transfer:Yt,toXYZ:P1,fromXYZ:O1,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Oi}}}),t}const Nt=iO();function lr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ao;class aO{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ao===void 0&&(Ao=zd("canvas")),Ao.width=e.width,Ao.height=e.height;const s=Ao.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Ao}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zd("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=lr(l[c]/255)*255;return a.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(lr(n[a]/255)*255):n[a]=lr(n[a]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rO=0;class Jv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rO++}),this.uuid=iu(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(Xm(s[c].image)):l.push(Xm(s[c]))}else l=Xm(s);a.url=l}return n||(e.images[this.uuid]=a),a}}function Xm(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?aO.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let sO=0;const jm=new ue;class ni extends dl{constructor(e=ni.DEFAULT_IMAGE,n=ni.DEFAULT_MAPPING,a=Ei,s=Ei,l=An,c=Ns,f=zi,d=Ii,h=ni.DEFAULT_ANISOTROPY,m=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sO++}),this.uuid=iu(),this.name="",this.source=new Jv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jm).x}get height(){return this.source.getSize(jm).y}get depth(){return this.source.getSize(jm).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cA)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cg:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case ug:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cg:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case ug:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ni.DEFAULT_IMAGE=null;ni.DEFAULT_MAPPING=cA;ni.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,n=0,a=0,s=1){dn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,s){return this.x=e,this.y=n,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,s,l;const d=e.elements,h=d[0],m=d[4],v=d[8],y=d[1],x=d[5],b=d[9],E=d[2],_=d[6],S=d[10];if(Math.abs(m-y)<.01&&Math.abs(v-E)<.01&&Math.abs(b-_)<.01){if(Math.abs(m+y)<.1&&Math.abs(v+E)<.1&&Math.abs(b+_)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(h+1)/2,D=(x+1)/2,C=(S+1)/2,F=(m+y)/4,P=(v+E)/4,R=(b+_)/4;return w>D&&w>C?w<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(w),s=F/a,l=P/a):D>C?D<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(D),a=F/s,l=R/s):C<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(C),a=P/l,s=R/l),this.set(a,s,l,n),this}let A=Math.sqrt((_-b)*(_-b)+(v-E)*(v-E)+(y-m)*(y-m));return Math.abs(A)<.001&&(A=1),this.x=(_-b)/A,this.y=(v-E)/A,this.z=(y-m)/A,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Dt(this.x,e.x,n.x),this.y=Dt(this.y,e.y,n.y),this.z=Dt(this.z,e.z,n.z),this.w=Dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Dt(this.x,e,n),this.y=Dt(this.y,e,n),this.z=Dt(this.z,e,n),this.w=Dt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oO extends dl{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new dn(0,0,e,n),this.scissorTest=!1,this.viewport=new dn(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:a.depth},l=new ni(s),c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new Jv(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ca extends oO{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class yA extends ni{constructor(e=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lO extends ni{constructor(e=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mn{constructor(e,n,a,s,l,c,f,d,h,m,v,y,x,b,E,_){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,s,l,c,f,d,h,m,v,y,x,b,E,_)}set(e,n,a,s,l,c,f,d,h,m,v,y,x,b,E,_){const S=this.elements;return S[0]=e,S[4]=n,S[8]=a,S[12]=s,S[1]=l,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=v,S[14]=y,S[3]=x,S[7]=b,S[11]=E,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,a=e.elements,s=1/wo.setFromMatrixColumn(e,0).length(),l=1/wo.setFromMatrixColumn(e,1).length(),c=1/wo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,s=e.y,l=e.z,c=Math.cos(a),f=Math.sin(a),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=c*m,x=c*v,b=f*m,E=f*v;n[0]=d*m,n[4]=-d*v,n[8]=h,n[1]=x+b*h,n[5]=y-E*h,n[9]=-f*d,n[2]=E-y*h,n[6]=b+x*h,n[10]=c*d}else if(e.order==="YXZ"){const y=d*m,x=d*v,b=h*m,E=h*v;n[0]=y+E*f,n[4]=b*f-x,n[8]=c*h,n[1]=c*v,n[5]=c*m,n[9]=-f,n[2]=x*f-b,n[6]=E+y*f,n[10]=c*d}else if(e.order==="ZXY"){const y=d*m,x=d*v,b=h*m,E=h*v;n[0]=y-E*f,n[4]=-c*v,n[8]=b+x*f,n[1]=x+b*f,n[5]=c*m,n[9]=E-y*f,n[2]=-c*h,n[6]=f,n[10]=c*d}else if(e.order==="ZYX"){const y=c*m,x=c*v,b=f*m,E=f*v;n[0]=d*m,n[4]=b*h-x,n[8]=y*h+E,n[1]=d*v,n[5]=E*h+y,n[9]=x*h-b,n[2]=-h,n[6]=f*d,n[10]=c*d}else if(e.order==="YZX"){const y=c*d,x=c*h,b=f*d,E=f*h;n[0]=d*m,n[4]=E-y*v,n[8]=b*v+x,n[1]=v,n[5]=c*m,n[9]=-f*m,n[2]=-h*m,n[6]=x*v+b,n[10]=y-E*v}else if(e.order==="XZY"){const y=c*d,x=c*h,b=f*d,E=f*h;n[0]=d*m,n[4]=-v,n[8]=h*m,n[1]=y*v+E,n[5]=c*m,n[9]=x*v-b,n[2]=b*v-x,n[6]=f*m,n[10]=E*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cO,e,uO)}lookAt(e,n,a){const s=this.elements;return bi.subVectors(e,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Vr.crossVectors(a,bi),Vr.lengthSq()===0&&(Math.abs(a.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Vr.crossVectors(a,bi)),Vr.normalize(),Df.crossVectors(bi,Vr),s[0]=Vr.x,s[4]=Df.x,s[8]=bi.x,s[1]=Vr.y,s[5]=Df.y,s[9]=bi.y,s[2]=Vr.z,s[6]=Df.z,s[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,s=n.elements,l=this.elements,c=a[0],f=a[4],d=a[8],h=a[12],m=a[1],v=a[5],y=a[9],x=a[13],b=a[2],E=a[6],_=a[10],S=a[14],A=a[3],w=a[7],D=a[11],C=a[15],F=s[0],P=s[4],R=s[8],O=s[12],J=s[1],G=s[5],Q=s[9],te=s[13],ee=s[2],K=s[6],B=s[10],z=s[14],ne=s[3],he=s[7],ve=s[11],V=s[15];return l[0]=c*F+f*J+d*ee+h*ne,l[4]=c*P+f*G+d*K+h*he,l[8]=c*R+f*Q+d*B+h*ve,l[12]=c*O+f*te+d*z+h*V,l[1]=m*F+v*J+y*ee+x*ne,l[5]=m*P+v*G+y*K+x*he,l[9]=m*R+v*Q+y*B+x*ve,l[13]=m*O+v*te+y*z+x*V,l[2]=b*F+E*J+_*ee+S*ne,l[6]=b*P+E*G+_*K+S*he,l[10]=b*R+E*Q+_*B+S*ve,l[14]=b*O+E*te+_*z+S*V,l[3]=A*F+w*J+D*ee+C*ne,l[7]=A*P+w*G+D*K+C*he,l[11]=A*R+w*Q+D*B+C*ve,l[15]=A*O+w*te+D*z+C*V,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],s=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],v=e[6],y=e[10],x=e[14],b=e[3],E=e[7],_=e[11],S=e[15],A=d*x-h*y,w=f*x-h*v,D=f*y-d*v,C=c*x-h*m,F=c*y-d*m,P=c*v-f*m;return n*(E*A-_*w+S*D)-a*(b*A-_*C+S*F)+s*(b*w-E*C+S*P)-l*(b*D-E*F+_*P)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],s=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],v=e[9],y=e[10],x=e[11],b=e[12],E=e[13],_=e[14],S=e[15],A=n*f-a*c,w=n*d-s*c,D=n*h-l*c,C=a*d-s*f,F=a*h-l*f,P=s*h-l*d,R=m*E-v*b,O=m*_-y*b,J=m*S-x*b,G=v*_-y*E,Q=v*S-x*E,te=y*S-x*_,ee=A*te-w*Q+D*G+C*J-F*O+P*R;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/ee;return e[0]=(f*te-d*Q+h*G)*K,e[1]=(s*Q-a*te-l*G)*K,e[2]=(E*P-_*F+S*C)*K,e[3]=(y*F-v*P-x*C)*K,e[4]=(d*J-c*te-h*O)*K,e[5]=(n*te-s*J+l*O)*K,e[6]=(_*D-b*P-S*w)*K,e[7]=(m*P-y*D+x*w)*K,e[8]=(c*Q-f*J+h*R)*K,e[9]=(a*J-n*Q-l*R)*K,e[10]=(b*F-E*D+S*A)*K,e[11]=(v*D-m*F-x*A)*K,e[12]=(f*O-c*G-d*R)*K,e[13]=(n*G-a*O+s*R)*K,e[14]=(E*w-b*C-_*A)*K,e[15]=(m*C-v*w+y*A)*K,this}scale(e){const n=this.elements,a=e.x,s=e.y,l=e.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+a,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+a,m*d-s*c,0,h*d-s*f,m*d+s*c,l*d*d+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,s,l,c){return this.set(1,a,l,0,e,1,c,0,n,s,1,0,0,0,0,1),this}compose(e,n,a){const s=this.elements,l=n._x,c=n._y,f=n._z,d=n._w,h=l+l,m=c+c,v=f+f,y=l*h,x=l*m,b=l*v,E=c*m,_=c*v,S=f*v,A=d*h,w=d*m,D=d*v,C=a.x,F=a.y,P=a.z;return s[0]=(1-(E+S))*C,s[1]=(x+D)*C,s[2]=(b-w)*C,s[3]=0,s[4]=(x-D)*F,s[5]=(1-(y+S))*F,s[6]=(_+A)*F,s[7]=0,s[8]=(b+w)*P,s[9]=(_-A)*P,s[10]=(1-(y+E))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let c=wo.set(s[0],s[1],s[2]).length();const f=wo.set(s[4],s[5],s[6]).length(),d=wo.set(s[8],s[9],s[10]).length();l<0&&(c=-c),Zi.copy(this);const h=1/c,m=1/f,v=1/d;return Zi.elements[0]*=h,Zi.elements[1]*=h,Zi.elements[2]*=h,Zi.elements[4]*=m,Zi.elements[5]*=m,Zi.elements[6]*=m,Zi.elements[8]*=v,Zi.elements[9]*=v,Zi.elements[10]*=v,n.setFromRotationMatrix(Zi),a.x=c,a.y=f,a.z=d,this}makePerspective(e,n,a,s,l,c,f=Ea,d=!1){const h=this.elements,m=2*l/(n-e),v=2*l/(a-s),y=(n+e)/(n-e),x=(a+s)/(a-s);let b,E;if(d)b=l/(c-l),E=c*l/(c-l);else if(f===Ea)b=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===Bd)b=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,a,s,l,c,f=Ea,d=!1){const h=this.elements,m=2/(n-e),v=2/(a-s),y=-(n+e)/(n-e),x=-(a+s)/(a-s);let b,E;if(d)b=1/(c-l),E=c/(c-l);else if(f===Ea)b=-2/(c-l),E=-(c+l)/(c-l);else if(f===Bd)b=-1/(c-l),E=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=y,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=b,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const wo=new ue,Zi=new mn,cO=new ue(0,0,0),uO=new ue(1,1,1),Vr=new ue,Df=new ue,bi=new ue,F1=new mn,I1=new hl;class dr{constructor(e=0,n=0,a=0,s=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,s=this._order){return this._x=e,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],d=s[1],h=s[5],m=s[9],v=s[2],y=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return F1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F1,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return I1.setFromEuler(this),this.setFromQuaternion(I1,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class xA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fO=0;const B1=new ue,Ro=new hl,tr=new mn,Lf=new ue,hc=new ue,dO=new ue,hO=new hl,z1=new ue(1,0,0),V1=new ue(0,1,0),H1=new ue(0,0,1),G1={type:"added"},pO={type:"removed"},Co={type:"childadded",child:null},qm={type:"childremoved",child:null};class fi extends dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fO++}),this.uuid=iu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fi.DEFAULT_UP.clone();const e=new ue,n=new dr,a=new hl,s=new ue(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mn},normalMatrix:{value:new _t}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=fi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(e,n){return Ro.setFromAxisAngle(e,n),this.quaternion.premultiply(Ro),this}rotateX(e){return this.rotateOnAxis(z1,e)}rotateY(e){return this.rotateOnAxis(V1,e)}rotateZ(e){return this.rotateOnAxis(H1,e)}translateOnAxis(e,n){return B1.copy(e).applyQuaternion(this.quaternion),this.position.add(B1.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(z1,e)}translateY(e){return this.translateOnAxis(V1,e)}translateZ(e){return this.translateOnAxis(H1,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Lf.copy(e):Lf.set(e,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),hc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(hc,Lf,this.up):tr.lookAt(Lf,hc,this.up),this.quaternion.setFromRotationMatrix(tr),s&&(tr.extractRotation(s.matrixWorld),Ro.setFromRotationMatrix(tr),this.quaternion.premultiply(Ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G1),Co.child=e,this.dispatchEvent(Co),Co.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pO),qm.child=e,this.dispatchEvent(qm),qm.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G1),Co.child=e,this.dispatchEvent(Co),Co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hc,e,dO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hc,hO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,a=e.y,s=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*s,l[13]+=a-l[1]*n-l[5]*a-l[9]*s,l[14]+=s-l[2]*n-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(e.shapes,v)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(n){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),v=c(e.shapes),y=c(e.skeletons),x=c(e.animations),b=c(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),v.length>0&&(a.shapes=v),y.length>0&&(a.skeletons=y),x.length>0&&(a.animations=x),b.length>0&&(a.nodes=b)}return a.object=s,a;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}fi.DEFAULT_UP=new ue(0,1,0);fi.DEFAULT_MATRIX_AUTO_UPDATE=!0;fi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nf extends fi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mO={type:"move"};class Ym{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let s=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const _=n.getJointPose(E,a),S=this._getHandJoint(h,E);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],y=m.position.distanceTo(v.position),x=.02,b=.005;h.inputState.pinching&&y>x+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&y<=x-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=n.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(mO)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Nf;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}const _A={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Uf={h:0,s:0,l:0};function $m(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Vt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,s=Nt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Nt.colorSpaceToWorking(this,s),this}setHSL(e,n,a,s=Nt.workingColorSpace){if(e=nO(e,1),n=Dt(n,0,1),a=Dt(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=$m(c,l,e+1/3),this.g=$m(c,l,e),this.b=$m(c,l,e-1/3)}return Nt.colorSpaceToWorking(this,s),this}setStyle(e,n=Oi){function a(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Oi){const a=_A[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Oi){return Nt.workingToColorSpace(Xn.copy(this),e),Math.round(Dt(Xn.r*255,0,255))*65536+Math.round(Dt(Xn.g*255,0,255))*256+Math.round(Dt(Xn.b*255,0,255))}getHexString(e=Oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Nt.workingColorSpace){Nt.workingToColorSpace(Xn.copy(this),n);const a=Xn.r,s=Xn.g,l=Xn.b,c=Math.max(a,s,l),f=Math.min(a,s,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=m<=.5?v/(c+f):v/(2-c-f),c){case a:d=(s-l)/v+(s<l?6:0);break;case s:d=(l-a)/v+2;break;case l:d=(a-s)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,n=Nt.workingColorSpace){return Nt.workingToColorSpace(Xn.copy(this),n),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=Oi){Nt.workingToColorSpace(Xn.copy(this),e);const n=Xn.r,a=Xn.g,s=Xn.b;return e!==Oi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,n,a){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+n,Hr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Hr),e.getHSL(Uf);const a=Gm(Hr.h,Uf.h,n),s=Gm(Hr.s,Uf.s,n),l=Gm(Hr.l,Uf.l,n);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new Vt;Vt.NAMES=_A;class k1 extends fi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Qi=new ue,nr=new ue,Km=new ue,ir=new ue,Do=new ue,Lo=new ue,W1=new ue,Zm=new ue,Qm=new ue,Jm=new ue,e0=new dn,t0=new dn,n0=new dn;class aa{constructor(e=new ue,n=new ue,a=new ue){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,s){s.subVectors(a,n),Qi.subVectors(e,n),s.cross(Qi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,n,a,s,l){Qi.subVectors(s,n),nr.subVectors(a,n),Km.subVectors(e,n);const c=Qi.dot(Qi),f=Qi.dot(nr),d=Qi.dot(Km),h=nr.dot(nr),m=nr.dot(Km),v=c*h-f*f;if(v===0)return l.set(0,0,0),null;const y=1/v,x=(h*d-f*m)*y,b=(c*m-f*d)*y;return l.set(1-x-b,b,x)}static containsPoint(e,n,a,s){return this.getBarycoord(e,n,a,s,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,n,a,s,l,c,f,d){return this.getBarycoord(e,n,a,s,ir)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,ir.x),d.addScaledVector(c,ir.y),d.addScaledVector(f,ir.z),d)}static getInterpolatedAttribute(e,n,a,s,l,c){return e0.setScalar(0),t0.setScalar(0),n0.setScalar(0),e0.fromBufferAttribute(e,n),t0.fromBufferAttribute(e,a),n0.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(e0,l.x),c.addScaledVector(t0,l.y),c.addScaledVector(n0,l.z),c}static isFrontFacing(e,n,a,s){return Qi.subVectors(a,n),nr.subVectors(e,n),Qi.cross(nr).dot(s)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,s){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,a,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qi.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Qi.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return aa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return aa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,s,l){return aa.getInterpolation(e,this.a,this.b,this.c,n,a,s,l)}containsPoint(e){return aa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return aa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,s=this.b,l=this.c;let c,f;Do.subVectors(s,a),Lo.subVectors(l,a),Zm.subVectors(e,a);const d=Do.dot(Zm),h=Lo.dot(Zm);if(d<=0&&h<=0)return n.copy(a);Qm.subVectors(e,s);const m=Do.dot(Qm),v=Lo.dot(Qm);if(m>=0&&v<=m)return n.copy(s);const y=d*v-m*h;if(y<=0&&d>=0&&m<=0)return c=d/(d-m),n.copy(a).addScaledVector(Do,c);Jm.subVectors(e,l);const x=Do.dot(Jm),b=Lo.dot(Jm);if(b>=0&&x<=b)return n.copy(l);const E=x*h-d*b;if(E<=0&&h>=0&&b<=0)return f=h/(h-b),n.copy(a).addScaledVector(Lo,f);const _=m*b-x*v;if(_<=0&&v-m>=0&&x-b>=0)return W1.subVectors(l,s),f=(v-m)/(v-m+(x-b)),n.copy(s).addScaledVector(W1,f);const S=1/(_+E+y);return c=E*S,f=y*S,n.copy(a).addScaledVector(Do,c).addScaledVector(Lo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class au{constructor(e=new ue(1/0,1/0,1/0),n=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ji):Ji.fromBufferAttribute(l,c),Ji.applyMatrix4(e.matrixWorld),this.expandByPoint(Ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pf.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Pf.copy(a.boundingBox)),Pf.applyMatrix4(e.matrixWorld),this.union(Pf)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ji),Ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pc),Of.subVectors(this.max,pc),No.subVectors(e.a,pc),Uo.subVectors(e.b,pc),Po.subVectors(e.c,pc),Gr.subVectors(Uo,No),kr.subVectors(Po,Uo),_s.subVectors(No,Po);let n=[0,-Gr.z,Gr.y,0,-kr.z,kr.y,0,-_s.z,_s.y,Gr.z,0,-Gr.x,kr.z,0,-kr.x,_s.z,0,-_s.x,-Gr.y,Gr.x,0,-kr.y,kr.x,0,-_s.y,_s.x,0];return!i0(n,No,Uo,Po,Of)||(n=[1,0,0,0,1,0,0,0,1],!i0(n,No,Uo,Po,Of))?!1:(Ff.crossVectors(Gr,kr),n=[Ff.x,Ff.y,Ff.z],i0(n,No,Uo,Po,Of))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Ji=new ue,Pf=new au,No=new ue,Uo=new ue,Po=new ue,Gr=new ue,kr=new ue,_s=new ue,pc=new ue,Of=new ue,Ff=new ue,Ss=new ue;function i0(t,e,n,a,s){for(let l=0,c=t.length-3;l<=c;l+=3){Ss.fromArray(t,l);const f=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),d=e.dot(Ss),h=n.dot(Ss),m=a.dot(Ss);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const Mn=new ue,If=new mt;let gO=0;class ua{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gO++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=C1,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=n.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)If.fromBufferAttribute(this,n),If.applyMatrix3(e),this.setXY(n,If.x,If.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(e),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=dc(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=ci(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=dc(n,this.array)),n}setX(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=dc(n,this.array)),n}setY(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=dc(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=dc(n,this.array)),n}setW(e,n){return this.normalized&&(n=ci(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,s){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array),s=ci(s,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,n,a,s,l){return e*=this.itemSize,this.normalized&&(n=ci(n,this.array),a=ci(a,this.array),s=ci(s,this.array),l=ci(l,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==C1&&(e.usage=this.usage),e}}class SA extends ua{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class bA extends ua{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class fa extends ua{constructor(e,n,a){super(new Float32Array(e),n,a)}}const vO=new au,mc=new ue,a0=new ue;class eh{constructor(e=new ue,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):vO.setFromPoints(e).getCenter(a);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mc.subVectors(e,this.center);const n=mc.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(mc,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(a0.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mc.copy(e.center).add(a0)),this.expandByPoint(mc.copy(e.center).sub(a0))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yO=0;const Pi=new mn,r0=new fi,Oo=new ue,Mi=new au,gc=new au,Pn=new ue;class da extends dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yO++}),this.uuid=iu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QP(e)?bA:SA)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new _t().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,n,a){return Pi.makeTranslation(e,n,a),this.applyMatrix4(Pi),this}scale(e,n,a){return Pi.makeScale(e,n,a),this.applyMatrix4(Pi),this}lookAt(e){return r0.lookAt(e),r0.updateMatrix(),this.applyMatrix4(r0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oo).negate(),this.translate(Oo.x,Oo.y,Oo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new fa(a,3))}else{const a=Math.min(e.length,n.count);for(let s=0;s<a;s++){const l=e[s];n.setXYZ(s,l.x,l.y,l.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];Mi.setFromBufferAttribute(l),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const a=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];gc.setFromBufferAttribute(f),this.morphTargetsRelative?(Pn.addVectors(Mi.min,gc.min),Mi.expandByPoint(Pn),Pn.addVectors(Mi.max,gc.max),Mi.expandByPoint(Pn)):(Mi.expandByPoint(gc.min),Mi.expandByPoint(gc.max))}Mi.getCenter(a);let s=0;for(let l=0,c=e.count;l<c;l++)Pn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Pn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Pn.fromBufferAttribute(f,h),d&&(Oo.fromBufferAttribute(e,h),Pn.add(Oo)),s=Math.max(s,a.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let R=0;R<a.count;R++)f[R]=new ue,d[R]=new ue;const h=new ue,m=new ue,v=new ue,y=new mt,x=new mt,b=new mt,E=new ue,_=new ue;function S(R,O,J){h.fromBufferAttribute(a,R),m.fromBufferAttribute(a,O),v.fromBufferAttribute(a,J),y.fromBufferAttribute(l,R),x.fromBufferAttribute(l,O),b.fromBufferAttribute(l,J),m.sub(h),v.sub(h),x.sub(y),b.sub(y);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(E.copy(m).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(G),_.copy(v).multiplyScalar(x.x).addScaledVector(m,-b.x).multiplyScalar(G),f[R].add(E),f[O].add(E),f[J].add(E),d[R].add(_),d[O].add(_),d[J].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let R=0,O=A.length;R<O;++R){const J=A[R],G=J.start,Q=J.count;for(let te=G,ee=G+Q;te<ee;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const w=new ue,D=new ue,C=new ue,F=new ue;function P(R){C.fromBufferAttribute(s,R),F.copy(C);const O=f[R];w.copy(O),w.sub(C.multiplyScalar(C.dot(O))).normalize(),D.crossVectors(F,O);const G=D.dot(d[R])<0?-1:1;c.setXYZW(R,w.x,w.y,w.z,G)}for(let R=0,O=A.length;R<O;++R){const J=A[R],G=J.start,Q=J.count;for(let te=G,ee=G+Q;te<ee;te+=3)P(e.getX(te+0)),P(e.getX(te+1)),P(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ua(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let y=0,x=a.count;y<x;y++)a.setXYZ(y,0,0,0);const s=new ue,l=new ue,c=new ue,f=new ue,d=new ue,h=new ue,m=new ue,v=new ue;if(e)for(let y=0,x=e.count;y<x;y+=3){const b=e.getX(y+0),E=e.getX(y+1),_=e.getX(y+2);s.fromBufferAttribute(n,b),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,_),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),f.fromBufferAttribute(a,b),d.fromBufferAttribute(a,E),h.fromBufferAttribute(a,_),f.add(m),d.add(m),h.add(m),a.setXYZ(b,f.x,f.y,f.z),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(_,h.x,h.y,h.z)}else for(let y=0,x=n.count;y<x;y+=3)s.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),c.fromBufferAttribute(n,y+2),m.subVectors(c,l),v.subVectors(s,l),m.cross(v),a.setXYZ(y+0,m.x,m.y,m.z),a.setXYZ(y+1,m.x,m.y,m.z),a.setXYZ(y+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Pn.fromBufferAttribute(e,n),Pn.normalize(),e.setXYZ(n,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,v=f.normalized,y=new h.constructor(d.length*m);let x=0,b=0;for(let E=0,_=d.length;E<_;E++){f.isInterleavedBufferAttribute?x=d[E]*f.data.stride+f.offset:x=d[E]*m;for(let S=0;S<m;S++)y[b++]=h[x++]}return new ua(y,m,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new da,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,a);n.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const y=h[m],x=e(y,a);d.push(x)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,y=h.length;v<y;v++){const x=h[v];m.push(x.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(n))}const l=e.morphAttributes;for(const h in l){const m=[],v=l[h];for(let y=0,x=v.length;y<x;y++)m.push(v[y].clone(n));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xO=0;class ru extends dl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xO++}),this.uuid=iu(),this.name="",this.type="Material",this.blending=$o,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eg,this.blendDst=tg,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==$o&&(a.blending=this.blending),this.side!==Kr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==eg&&(a.blendSrc=this.blendSrc),this.blendDst!==tg&&(a.blendDst=this.blendDst),this.blendEquation!==Rs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R1&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(a.stencilFail=this.stencilFail),this.stencilZFail!==To&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(n){const l=s(e.textures),c=s(e.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rr=new ue,s0=new ue,Bf=new ue,Wr=new ue,o0=new ue,zf=new ue,l0=new ue;class MA{constructor(e=new ue,n=new ue(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,n),rr.distanceToSquared(e))}distanceSqToSegment(e,n,a,s){s0.copy(e).add(n).multiplyScalar(.5),Bf.copy(n).sub(e).normalize(),Wr.copy(this.origin).sub(s0);const l=e.distanceTo(n)*.5,c=-this.direction.dot(Bf),f=Wr.dot(this.direction),d=-Wr.dot(Bf),h=Wr.lengthSq(),m=Math.abs(1-c*c);let v,y,x,b;if(m>0)if(v=c*d-f,y=c*f-d,b=l*m,v>=0)if(y>=-b)if(y<=b){const E=1/m;v*=E,y*=E,x=v*(v+c*y+2*f)+y*(c*v+y+2*d)+h}else y=l,v=Math.max(0,-(c*y+f)),x=-v*v+y*(y+2*d)+h;else y=-l,v=Math.max(0,-(c*y+f)),x=-v*v+y*(y+2*d)+h;else y<=-b?(v=Math.max(0,-(-c*l+f)),y=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+y*(y+2*d)+h):y<=b?(v=0,y=Math.min(Math.max(-l,-d),l),x=y*(y+2*d)+h):(v=Math.max(0,-(c*l+f)),y=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+y*(y+2*d)+h);else y=c>0?-l:l,v=Math.max(0,-(c*y+f)),x=-v*v+y*(y+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(s0).addScaledVector(Bf,y),x}intersectSphere(e,n){rr.subVectors(e.center,this.origin);const a=rr.dot(this.direction),s=rr.dot(rr)-a*a,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=a-c,d=a+c;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,s,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,y=this.origin;return h>=0?(a=(e.min.x-y.x)*h,s=(e.max.x-y.x)*h):(a=(e.max.x-y.x)*h,s=(e.min.x-y.x)*h),m>=0?(l=(e.min.y-y.y)*m,c=(e.max.y-y.y)*m):(l=(e.max.y-y.y)*m,c=(e.min.y-y.y)*m),a>c||l>s||((l>a||isNaN(a))&&(a=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(e.min.z-y.z)*v,d=(e.max.z-y.z)*v):(f=(e.max.z-y.z)*v,d=(e.min.z-y.z)*v),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,n,a,s,l){o0.subVectors(n,e),zf.subVectors(a,e),l0.crossVectors(o0,zf);let c=this.direction.dot(l0),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Wr.subVectors(this.origin,e);const d=f*this.direction.dot(zf.crossVectors(Wr,zf));if(d<0)return null;const h=f*this.direction.dot(o0.cross(Wr));if(h<0||d+h>c)return null;const m=-f*Wr.dot(l0);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class EA extends ru{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=tA,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const X1=new mn,bs=new MA,Vf=new eh,j1=new ue,Hf=new ue,Gf=new ue,kf=new ue,c0=new ue,Wf=new ue,q1=new ue,Xf=new ue;class Hi extends fi{constructor(e=new da,n=new EA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Wf.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(c0.fromBufferAttribute(v,e),c?Wf.addScaledVector(c0,m):Wf.addScaledVector(c0.sub(n),m))}n.add(Wf)}return n}raycast(e,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vf.copy(a.boundingSphere),Vf.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(Vf.containsPoint(bs.origin)===!1&&(bs.intersectSphere(Vf,j1)===null||bs.origin.distanceToSquared(j1)>(e.far-e.near)**2))&&(X1.copy(l).invert(),bs.copy(e.ray).applyMatrix4(X1),!(a.boundingBox!==null&&bs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,bs)))}_computeIntersections(e,n,a){let s;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,y=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,E=y.length;b<E;b++){const _=y[b],S=c[_.materialIndex],A=Math.max(_.start,x.start),w=Math.min(f.count,Math.min(_.start+_.count,x.start+x.count));for(let D=A,C=w;D<C;D+=3){const F=f.getX(D),P=f.getX(D+1),R=f.getX(D+2);s=jf(this,S,e,a,h,m,v,F,P,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const b=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let _=b,S=E;_<S;_+=3){const A=f.getX(_),w=f.getX(_+1),D=f.getX(_+2);s=jf(this,c,e,a,h,m,v,A,w,D),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let b=0,E=y.length;b<E;b++){const _=y[b],S=c[_.materialIndex],A=Math.max(_.start,x.start),w=Math.min(d.count,Math.min(_.start+_.count,x.start+x.count));for(let D=A,C=w;D<C;D+=3){const F=D,P=D+1,R=D+2;s=jf(this,S,e,a,h,m,v,F,P,R),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const b=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let _=b,S=E;_<S;_+=3){const A=_,w=_+1,D=_+2;s=jf(this,c,e,a,h,m,v,A,w,D),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function _O(t,e,n,a,s,l,c,f){let d;if(e.side===ui?d=a.intersectTriangle(c,l,s,!0,f):d=a.intersectTriangle(s,l,c,e.side===Kr,f),d===null)return null;Xf.copy(f),Xf.applyMatrix4(t.matrixWorld);const h=n.ray.origin.distanceTo(Xf);return h<n.near||h>n.far?null:{distance:h,point:Xf.clone(),object:t}}function jf(t,e,n,a,s,l,c,f,d,h){t.getVertexPosition(f,Hf),t.getVertexPosition(d,Gf),t.getVertexPosition(h,kf);const m=_O(t,e,n,a,Hf,Gf,kf,q1);if(m){const v=new ue;aa.getBarycoord(q1,Hf,Gf,kf,v),s&&(m.uv=aa.getInterpolatedAttribute(s,f,d,h,v,new mt)),l&&(m.uv1=aa.getInterpolatedAttribute(l,f,d,h,v,new mt)),c&&(m.normal=aa.getInterpolatedAttribute(c,f,d,h,v,new ue),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const y={a:f,b:d,c:h,normal:new ue,materialIndex:0};aa.getNormal(Hf,Gf,kf,y.normal),m.face=y,m.barycoord=v}return m}class TA extends ni{constructor(e=null,n=1,a=1,s,l,c,f,d,h=Gn,m=Gn,v,y){super(null,c,f,d,h,m,s,l,v,y),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const u0=new ue,SO=new ue,bO=new _t;class ws{constructor(e=new ue(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,s){return this.normal.set(e,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const s=u0.subVectors(a,n).cross(SO.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(u0),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:n.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||bO.getNormalMatrix(e),s=this.coplanarPoint(u0).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ms=new eh,MO=new mt(.5,.5),qf=new ue;class AA{constructor(e=new ws,n=new ws,a=new ws,s=new ws,l=new ws,c=new ws){this.planes=[e,n,a,s,l,c]}set(e,n,a,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=Ea,a=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],y=l[6],x=l[7],b=l[8],E=l[9],_=l[10],S=l[11],A=l[12],w=l[13],D=l[14],C=l[15];if(s[0].setComponents(h-c,x-m,S-b,C-A).normalize(),s[1].setComponents(h+c,x+m,S+b,C+A).normalize(),s[2].setComponents(h+f,x+v,S+E,C+w).normalize(),s[3].setComponents(h-f,x-v,S-E,C-w).normalize(),a)s[4].setComponents(d,y,_,D).normalize(),s[5].setComponents(h-d,x-y,S-_,C-D).normalize();else if(s[4].setComponents(h-d,x-y,S-_,C-D).normalize(),n===Ea)s[5].setComponents(h+d,x+y,S+_,C+D).normalize();else if(n===Bd)s[5].setComponents(d,y,_,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);const n=MO.distanceTo(e.center);return Ms.radius=.7071067811865476+n,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){const n=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if(qf.x=s.normal.x>0?e.max.x:e.min.x,qf.y=s.normal.y>0?e.max.y:e.min.y,qf.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(qf)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class EO extends ru{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hd=new ue,Gd=new ue,Y1=new mn,vc=new MA,Yf=new eh,f0=new ue,$1=new ue;class TO extends fi{constructor(e=new da,n=new EO){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let s=1,l=n.count;s<l;s++)Hd.fromBufferAttribute(n,s-1),Gd.fromBufferAttribute(n,s),a[s]=a[s-1],a[s]+=Hd.distanceTo(Gd);e.setAttribute("lineDistance",new fa(a,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Yf.copy(a.boundingSphere),Yf.applyMatrix4(s),Yf.radius+=l,e.ray.intersectsSphere(Yf)===!1)return;Y1.copy(s).invert(),vc.copy(e.ray).applyMatrix4(Y1);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=a.index,y=a.attributes.position;if(m!==null){const x=Math.max(0,c.start),b=Math.min(m.count,c.start+c.count);for(let E=x,_=b-1;E<_;E+=h){const S=m.getX(E),A=m.getX(E+1),w=$f(this,e,vc,d,S,A,E);w&&n.push(w)}if(this.isLineLoop){const E=m.getX(b-1),_=m.getX(x),S=$f(this,e,vc,d,E,_,b-1);S&&n.push(S)}}else{const x=Math.max(0,c.start),b=Math.min(y.count,c.start+c.count);for(let E=x,_=b-1;E<_;E+=h){const S=$f(this,e,vc,d,E,E+1,E);S&&n.push(S)}if(this.isLineLoop){const E=$f(this,e,vc,d,b-1,x,b-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function $f(t,e,n,a,s,l,c){const f=t.geometry.attributes.position;if(Hd.fromBufferAttribute(f,s),Gd.fromBufferAttribute(f,l),n.distanceSqToSegment(Hd,Gd,f0,$1)>a)return;f0.applyMatrix4(t.matrixWorld);const h=e.ray.origin.distanceTo(f0);if(!(h<e.near||h>e.far))return{distance:h,point:$1.clone().applyMatrix4(t.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:t}}const K1=new ue,Z1=new ue;class AO extends TO{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let s=0,l=n.count;s<l;s+=2)K1.fromBufferAttribute(n,s),Z1.fromBufferAttribute(n,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+K1.distanceTo(Z1);e.setAttribute("lineDistance",new fa(a,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wA extends ni{constructor(e=[],n=Vs,a,s,l,c,f,d,h,m){super(e,n,a,s,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wc extends ni{constructor(e,n,a=Ua,s,l,c,f=Gn,d=Gn,h,m=fr,v=1){if(m!==fr&&m!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:v};super(y,s,l,c,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jv(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class wO extends Wc{constructor(e,n=Ua,a=Vs,s,l,c=Gn,f=Gn,d,h=fr){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,n,a,s,l,c,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class RA extends ni{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class su extends da{constructor(e=1,n=1,a=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],v=[];let y=0,x=0;b("z","y","x",-1,-1,a,n,e,c,l,0),b("z","y","x",1,-1,a,n,-e,c,l,1),b("x","z","y",1,1,e,a,n,s,c,2),b("x","z","y",1,-1,e,a,-n,s,c,3),b("x","y","z",1,-1,e,n,a,s,l,4),b("x","y","z",-1,-1,e,n,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new fa(h,3)),this.setAttribute("normal",new fa(m,3)),this.setAttribute("uv",new fa(v,2));function b(E,_,S,A,w,D,C,F,P,R,O){const J=D/P,G=C/R,Q=D/2,te=C/2,ee=F/2,K=P+1,B=R+1;let z=0,ne=0;const he=new ue;for(let ve=0;ve<B;ve++){const V=ve*G-te;for(let X=0;X<K;X++){const xe=X*J-Q;he[E]=xe*A,he[_]=V*w,he[S]=ee,h.push(he.x,he.y,he.z),he[E]=0,he[_]=0,he[S]=F>0?1:-1,m.push(he.x,he.y,he.z),v.push(X/P),v.push(1-ve/R),z+=1}}for(let ve=0;ve<R;ve++)for(let V=0;V<P;V++){const X=y+V+K*ve,xe=y+V+K*(ve+1),we=y+(V+1)+K*(ve+1),Fe=y+(V+1)+K*ve;d.push(X,xe,Fe),d.push(xe,we,Fe),ne+=6}f.addGroup(x,ne,O),x+=ne,y+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Is extends da{constructor(e=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:s};const l=e/2,c=n/2,f=Math.floor(a),d=Math.floor(s),h=f+1,m=d+1,v=e/f,y=n/d,x=[],b=[],E=[],_=[];for(let S=0;S<m;S++){const A=S*y-c;for(let w=0;w<h;w++){const D=w*v-l;b.push(D,-A,0),E.push(0,0,1),_.push(w/f),_.push(1-S/d)}}for(let S=0;S<d;S++)for(let A=0;A<f;A++){const w=A+h*S,D=A+h*(S+1),C=A+1+h*(S+1),F=A+1+h*S;x.push(w,D,F),x.push(D,C,F)}this.setIndex(x),this.setAttribute("position",new fa(b,3)),this.setAttribute("normal",new fa(E,3)),this.setAttribute("uv",new fa(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}function il(t){const e={};for(const n in t){e[n]={};for(const a in t[n]){const s=t[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=s.clone():Array.isArray(s)?e[n][a]=s.slice():e[n][a]=s}}return e}function Jn(t){const e={};for(let n=0;n<t.length;n++){const a=il(t[n]);for(const s in a)e[s]=a[s]}return e}function RO(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function CA(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const CO={clone:il,merge:Jn};var DO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oa extends ru{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=DO,this.fragmentShader=LO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=il(e.uniforms),this.uniformsGroups=RO(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Tc extends Oa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NO extends ru{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UO extends ru{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kf=new ue,Zf=new hl,ya=new ue;class kd extends fi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Ea,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kf,Zf,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kf,Zf,ya.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Kf,Zf,ya),ya.x===1&&ya.y===1&&ya.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kf,Zf,ya.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new ue,Q1=new mt,J1=new mt;class ia extends kd{constructor(e=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kg*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kg*2*Math.atan(Math.tan(Hm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,n){return this.getViewBounds(e,Q1,J1),n.subVectors(J1,Q1)}setViewOffset(e,n,a,s,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hm*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*s/d,n-=c.offsetY*a/h,s*=c.width/d,a*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class DA extends kd{constructor(e=-1,n=1,a=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,c=a+e,f=s+n,d=s-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=-90,Io=1;class PO extends fi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ia(Fo,Io,e,n);s.layers=this.layers,this.add(s);const l=new ia(Fo,Io,e,n);l.layers=this.layers,this.add(l);const c=new ia(Fo,Io,e,n);c.layers=this.layers,this.add(c);const f=new ia(Fo,Io,e,n);f.layers=this.layers,this.add(f);const d=new ia(Fo,Io,e,n);d.layers=this.layers,this.add(d);const h=new ia(Fo,Io,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,s,l,c,f,d]=n;for(const h of n)this.remove(h);if(e===Ea)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Bd)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(a,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(a,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(a,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(a,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),e.setRenderTarget(v,y,x),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class OO extends ia{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class FO{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=IO.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function IO(){this._document.hidden===!1&&this.reset()}function eM(t,e,n,a){const s=BO(a);switch(n){case pA:return t*e;case gA:return t*e/s.components*s.byteLength;case Yv:return t*e/s.components*s.byteLength;case tl:return t*e*2/s.components*s.byteLength;case $v:return t*e*2/s.components*s.byteLength;case mA:return t*e*3/s.components*s.byteLength;case zi:return t*e*4/s.components*s.byteLength;case Kv:return t*e*4/s.components*s.byteLength;case xd:case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sd:case bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dg:case pg:return Math.max(t,16)*Math.max(e,8)/4;case fg:case hg:return Math.max(t,8)*Math.max(e,8)/2;case mg:case gg:case yg:case xg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vg:case _g:case Sg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Eg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Tg:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ag:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case wg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rg:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Cg:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Dg:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ng:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ug:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Og:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fg:case Ig:case Bg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zg:case Vg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hg:case Gg:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BO(t){switch(t){case Ii:case uA:return{byteLength:1,components:1};case Gc:case fA:case Pa:return{byteLength:2,components:1};case jv:case qv:return{byteLength:2,components:4};case Ua:case Xv:case sa:return{byteLength:4,components:1};case dA:case hA:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wv}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wv);function LA(){let t=null,e=!1,n=null,a=null;function s(l,c){n(l,c),a=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(a=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){t=l}}}function zO(t){const e=new WeakMap;function n(f,d){const h=f.array,m=f.usage,v=h.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=t.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,d,h){const m=d.array,v=d.updateRanges;if(t.bindBuffer(h,f),v.length===0)t.bufferSubData(h,0,m);else{v.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<v.length;x++){const b=v[y],E=v[x];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,v[y]=E)}v.length=y+1;for(let x=0,b=v.length;x<b;x++){const E=v[x];t.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(t.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,n(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:c}}var VO=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HO=`#ifdef USE_ALPHAHASH
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
#endif`,GO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WO=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XO=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jO=`#ifdef USE_AOMAP
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
#endif`,qO=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YO=`#ifdef USE_BATCHING
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
#endif`,$O=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KO=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZO=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QO=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JO=`#ifdef USE_IRIDESCENCE
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
#endif`,eF=`#ifdef USE_BUMPMAP
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
#endif`,tF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cF=`#define PI 3.141592653589793
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
} // validated`,uF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fF=`vec3 transformedNormal = objectNormal;
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
#endif`,dF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gF="gl_FragColor = linearToOutputTexel( gl_FragColor );",vF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yF=`#ifdef USE_ENVMAP
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
#endif`,xF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_F=`#ifdef USE_ENVMAP
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
#endif`,SF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bF=`#ifdef USE_ENVMAP
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
#endif`,MF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wF=`#ifdef USE_GRADIENTMAP
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
}`,RF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LF=`uniform bool receiveShadow;
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
#endif`,NF=`#ifdef USE_ENVMAP
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
#endif`,UF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IF=`PhysicalMaterial material;
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
#endif`,BF=`uniform sampler2D dfgLUT;
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
}`,zF=`
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
#endif`,VF=`#if defined( RE_IndirectDiffuse )
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
#endif`,HF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$F=`#if defined( USE_POINTS_UV )
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
#endif`,KF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tI=`#ifdef USE_MORPHTARGETS
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
#endif`,nI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lI=`#ifdef USE_NORMALMAP
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
#endif`,cI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_I=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EI=`float getShadowMask() {
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
}`,TI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AI=`#ifdef USE_SKINNING
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
#endif`,wI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RI=`#ifdef USE_SKINNING
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
#endif`,CI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NI=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UI=`#ifdef USE_TRANSMISSION
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
#endif`,PI=`#ifdef USE_TRANSMISSION
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
#endif`,OI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,II=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VI=`uniform sampler2D t2D;
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
}`,HI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GI=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XI=`#include <common>
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
}`,jI=`#if DEPTH_PACKING == 3200
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
}`,qI=`#define DISTANCE
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
}`,YI=`#define DISTANCE
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
}`,$I=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZI=`uniform float scale;
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
}`,QI=`uniform vec3 diffuse;
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
}`,JI=`#include <common>
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
}`,eB=`uniform vec3 diffuse;
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
}`,tB=`#define LAMBERT
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
}`,nB=`#define LAMBERT
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
}`,iB=`#define MATCAP
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
}`,aB=`#define MATCAP
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
}`,rB=`#define NORMAL
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
}`,sB=`#define NORMAL
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
}`,oB=`#define PHONG
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
}`,lB=`#define PHONG
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
}`,cB=`#define STANDARD
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
}`,uB=`#define STANDARD
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
}`,fB=`#define TOON
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
}`,dB=`#define TOON
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
}`,hB=`uniform float size;
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
}`,pB=`uniform vec3 diffuse;
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
}`,mB=`#include <common>
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
}`,gB=`uniform vec3 color;
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
}`,vB=`uniform float rotation;
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
}`,yB=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:VO,alphahash_pars_fragment:HO,alphamap_fragment:GO,alphamap_pars_fragment:kO,alphatest_fragment:WO,alphatest_pars_fragment:XO,aomap_fragment:jO,aomap_pars_fragment:qO,batching_pars_vertex:YO,batching_vertex:$O,begin_vertex:KO,beginnormal_vertex:ZO,bsdfs:QO,iridescence_fragment:JO,bumpmap_pars_fragment:eF,clipping_planes_fragment:tF,clipping_planes_pars_fragment:nF,clipping_planes_pars_vertex:iF,clipping_planes_vertex:aF,color_fragment:rF,color_pars_fragment:sF,color_pars_vertex:oF,color_vertex:lF,common:cF,cube_uv_reflection_fragment:uF,defaultnormal_vertex:fF,displacementmap_pars_vertex:dF,displacementmap_vertex:hF,emissivemap_fragment:pF,emissivemap_pars_fragment:mF,colorspace_fragment:gF,colorspace_pars_fragment:vF,envmap_fragment:yF,envmap_common_pars_fragment:xF,envmap_pars_fragment:_F,envmap_pars_vertex:SF,envmap_physical_pars_fragment:NF,envmap_vertex:bF,fog_vertex:MF,fog_pars_vertex:EF,fog_fragment:TF,fog_pars_fragment:AF,gradientmap_pars_fragment:wF,lightmap_pars_fragment:RF,lights_lambert_fragment:CF,lights_lambert_pars_fragment:DF,lights_pars_begin:LF,lights_toon_fragment:UF,lights_toon_pars_fragment:PF,lights_phong_fragment:OF,lights_phong_pars_fragment:FF,lights_physical_fragment:IF,lights_physical_pars_fragment:BF,lights_fragment_begin:zF,lights_fragment_maps:VF,lights_fragment_end:HF,logdepthbuf_fragment:GF,logdepthbuf_pars_fragment:kF,logdepthbuf_pars_vertex:WF,logdepthbuf_vertex:XF,map_fragment:jF,map_pars_fragment:qF,map_particle_fragment:YF,map_particle_pars_fragment:$F,metalnessmap_fragment:KF,metalnessmap_pars_fragment:ZF,morphinstance_vertex:QF,morphcolor_vertex:JF,morphnormal_vertex:eI,morphtarget_pars_vertex:tI,morphtarget_vertex:nI,normal_fragment_begin:iI,normal_fragment_maps:aI,normal_pars_fragment:rI,normal_pars_vertex:sI,normal_vertex:oI,normalmap_pars_fragment:lI,clearcoat_normal_fragment_begin:cI,clearcoat_normal_fragment_maps:uI,clearcoat_pars_fragment:fI,iridescence_pars_fragment:dI,opaque_fragment:hI,packing:pI,premultiplied_alpha_fragment:mI,project_vertex:gI,dithering_fragment:vI,dithering_pars_fragment:yI,roughnessmap_fragment:xI,roughnessmap_pars_fragment:_I,shadowmap_pars_fragment:SI,shadowmap_pars_vertex:bI,shadowmap_vertex:MI,shadowmask_pars_fragment:EI,skinbase_vertex:TI,skinning_pars_vertex:AI,skinning_vertex:wI,skinnormal_vertex:RI,specularmap_fragment:CI,specularmap_pars_fragment:DI,tonemapping_fragment:LI,tonemapping_pars_fragment:NI,transmission_fragment:UI,transmission_pars_fragment:PI,uv_pars_fragment:OI,uv_pars_vertex:FI,uv_vertex:II,worldpos_vertex:BI,background_vert:zI,background_frag:VI,backgroundCube_vert:HI,backgroundCube_frag:GI,cube_vert:kI,cube_frag:WI,depth_vert:XI,depth_frag:jI,distance_vert:qI,distance_frag:YI,equirect_vert:$I,equirect_frag:KI,linedashed_vert:ZI,linedashed_frag:QI,meshbasic_vert:JI,meshbasic_frag:eB,meshlambert_vert:tB,meshlambert_frag:nB,meshmatcap_vert:iB,meshmatcap_frag:aB,meshnormal_vert:rB,meshnormal_frag:sB,meshphong_vert:oB,meshphong_frag:lB,meshphysical_vert:cB,meshphysical_frag:uB,meshtoon_vert:fB,meshtoon_frag:dB,points_vert:hB,points_frag:pB,shadow_vert:mB,shadow_frag:gB,sprite_vert:vB,sprite_frag:yB},ze={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Sa={basic:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Vt(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Jn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Jn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Jn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Vt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Jn([ze.points,ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Jn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Jn([ze.common,ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Jn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Jn([ze.sprite,ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Jn([ze.common,ze.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Jn([ze.lights,ze.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Sa.physical={uniforms:Jn([Sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Qf={r:0,b:0,g:0},Es=new dr,xB=new mn;function _B(t,e,n,a,s,l){const c=new Vt(0);let f=s===!0?0:1,d,h,m=null,v=0,y=null;function x(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){const D=A.backgroundBlurriness>0;w=e.get(w,D)}return w}function b(A){let w=!1;const D=x(A);D===null?_(c,f):D&&D.isColor&&(_(D,1),w=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,l):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(A,w){const D=x(w);D&&(D.isCubeTexture||D.mapping===Jd)?(h===void 0&&(h=new Hi(new su(1,1,1),new Oa({name:"BackgroundCubeMaterial",uniforms:il(Sa.backgroundCube.uniforms),vertexShader:Sa.backgroundCube.vertexShader,fragmentShader:Sa.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),Es.copy(w.backgroundRotation),Es.x*=-1,Es.y*=-1,Es.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Es.y*=-1,Es.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xB.makeRotationFromEuler(Es)),h.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Yt,(m!==D||v!==D.version||y!==t.toneMapping)&&(h.material.needsUpdate=!0,m=D,v=D.version,y=t.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(d===void 0&&(d=new Hi(new Is(2,2),new Oa({name:"BackgroundMaterial",uniforms:il(Sa.background.uniforms),vertexShader:Sa.background.vertexShader,fragmentShader:Sa.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(d)),d.material.uniforms.t2D.value=D,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(D.colorSpace)!==Yt,D.matrixAutoUpdate===!0&&D.updateMatrix(),d.material.uniforms.uvTransform.value.copy(D.matrix),(m!==D||v!==D.version||y!==t.toneMapping)&&(d.material.needsUpdate=!0,m=D,v=D.version,y=t.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function _(A,w){A.getRGB(Qf,CA(t)),n.buffers.color.setClear(Qf.r,Qf.g,Qf.b,w,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(A,w=1){c.set(A),f=w,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,_(c,f)},render:b,addToRenderList:E,dispose:S}}function SB(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),a={},s=y(null);let l=s,c=!1;function f(G,Q,te,ee,K){let B=!1;const z=v(G,ee,te,Q);l!==z&&(l=z,h(l.object)),B=x(G,ee,te,K),B&&b(G,ee,te,K),K!==null&&e.update(K,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,D(G,Q,te,ee),K!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return t.createVertexArray()}function h(G){return t.bindVertexArray(G)}function m(G){return t.deleteVertexArray(G)}function v(G,Q,te,ee){const K=ee.wireframe===!0;let B=a[Q.id];B===void 0&&(B={},a[Q.id]=B);const z=G.isInstancedMesh===!0?G.id:0;let ne=B[z];ne===void 0&&(ne={},B[z]=ne);let he=ne[te.id];he===void 0&&(he={},ne[te.id]=he);let ve=he[K];return ve===void 0&&(ve=y(d()),he[K]=ve),ve}function y(G){const Q=[],te=[],ee=[];for(let K=0;K<n;K++)Q[K]=0,te[K]=0,ee[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:te,attributeDivisors:ee,object:G,attributes:{},index:null}}function x(G,Q,te,ee){const K=l.attributes,B=Q.attributes;let z=0;const ne=te.getAttributes();for(const he in ne)if(ne[he].location>=0){const V=K[he];let X=B[he];if(X===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(X=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(X=G.instanceColor)),V===void 0||V.attribute!==X||X&&V.data!==X.data)return!0;z++}return l.attributesNum!==z||l.index!==ee}function b(G,Q,te,ee){const K={},B=Q.attributes;let z=0;const ne=te.getAttributes();for(const he in ne)if(ne[he].location>=0){let V=B[he];V===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(V=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(V=G.instanceColor));const X={};X.attribute=V,V&&V.data&&(X.data=V.data),K[he]=X,z++}l.attributes=K,l.attributesNum=z,l.index=ee}function E(){const G=l.newAttributes;for(let Q=0,te=G.length;Q<te;Q++)G[Q]=0}function _(G){S(G,0)}function S(G,Q){const te=l.newAttributes,ee=l.enabledAttributes,K=l.attributeDivisors;te[G]=1,ee[G]===0&&(t.enableVertexAttribArray(G),ee[G]=1),K[G]!==Q&&(t.vertexAttribDivisor(G,Q),K[G]=Q)}function A(){const G=l.newAttributes,Q=l.enabledAttributes;for(let te=0,ee=Q.length;te<ee;te++)Q[te]!==G[te]&&(t.disableVertexAttribArray(te),Q[te]=0)}function w(G,Q,te,ee,K,B,z){z===!0?t.vertexAttribIPointer(G,Q,te,K,B):t.vertexAttribPointer(G,Q,te,ee,K,B)}function D(G,Q,te,ee){E();const K=ee.attributes,B=te.getAttributes(),z=Q.defaultAttributeValues;for(const ne in B){const he=B[ne];if(he.location>=0){let ve=K[ne];if(ve===void 0&&(ne==="instanceMatrix"&&G.instanceMatrix&&(ve=G.instanceMatrix),ne==="instanceColor"&&G.instanceColor&&(ve=G.instanceColor)),ve!==void 0){const V=ve.normalized,X=ve.itemSize,xe=e.get(ve);if(xe===void 0)continue;const we=xe.buffer,Fe=xe.type,ae=xe.bytesPerElement,Se=Fe===t.INT||Fe===t.UNSIGNED_INT||ve.gpuType===Xv;if(ve.isInterleavedBufferAttribute){const ge=ve.data,Ce=ge.stride,De=ve.offset;if(ge.isInstancedInterleavedBuffer){for(let He=0;He<he.locationSize;He++)S(he.location+He,ge.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let He=0;He<he.locationSize;He++)_(he.location+He);t.bindBuffer(t.ARRAY_BUFFER,we);for(let He=0;He<he.locationSize;He++)w(he.location+He,X/he.locationSize,Fe,V,Ce*ae,(De+X/he.locationSize*He)*ae,Se)}else{if(ve.isInstancedBufferAttribute){for(let ge=0;ge<he.locationSize;ge++)S(he.location+ge,ve.meshPerAttribute);G.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ge=0;ge<he.locationSize;ge++)_(he.location+ge);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ge=0;ge<he.locationSize;ge++)w(he.location+ge,X/he.locationSize,Fe,V,X*ae,X/he.locationSize*ge*ae,Se)}}else if(z!==void 0){const V=z[ne];if(V!==void 0)switch(V.length){case 2:t.vertexAttrib2fv(he.location,V);break;case 3:t.vertexAttrib3fv(he.location,V);break;case 4:t.vertexAttrib4fv(he.location,V);break;default:t.vertexAttrib1fv(he.location,V)}}}}A()}function C(){O();for(const G in a){const Q=a[G];for(const te in Q){const ee=Q[te];for(const K in ee){const B=ee[K];for(const z in B)m(B[z].object),delete B[z];delete ee[K]}}delete a[G]}}function F(G){if(a[G.id]===void 0)return;const Q=a[G.id];for(const te in Q){const ee=Q[te];for(const K in ee){const B=ee[K];for(const z in B)m(B[z].object),delete B[z];delete ee[K]}}delete a[G.id]}function P(G){for(const Q in a){const te=a[Q];for(const ee in te){const K=te[ee];if(K[G.id]===void 0)continue;const B=K[G.id];for(const z in B)m(B[z].object),delete B[z];delete K[G.id]}}}function R(G){for(const Q in a){const te=a[Q],ee=G.isInstancedMesh===!0?G.id:0,K=te[ee];if(K!==void 0){for(const B in K){const z=K[B];for(const ne in z)m(z[ne].object),delete z[ne];delete K[B]}delete te[ee],Object.keys(te).length===0&&delete a[Q]}}}function O(){J(),c=!0,l!==s&&(l=s,h(l.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:O,resetDefaultState:J,dispose:C,releaseStatesOfGeometry:F,releaseStatesOfObject:R,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:_,disableUnusedAttributes:A}}function bB(t,e,n){let a;function s(h){a=h}function l(h,m){t.drawArrays(a,h,m),n.update(m,a,1)}function c(h,m,v){v!==0&&(t.drawArraysInstanced(a,h,m,v),n.update(m,a,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,v);let x=0;for(let b=0;b<v;b++)x+=m[b];n.update(x,a,1)}function d(h,m,v,y){if(v===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<h.length;b++)c(h[b],m[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,m,0,y,0,v);let b=0;for(let E=0;E<v;E++)b+=m[E]*y[E];n.update(b,a,1)}}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function MB(t,e,n,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(P){return!(P!==zi&&a.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(P){const R=P===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Ii&&a.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!R)}function d(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const m=d(h);m!==h&&(ut("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),S=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),D=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),F=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:D,maxSamples:C,samples:F}}function EB(t){const e=this;let n=null,a=0,s=!1,l=!1;const c=new ws,f=new _t,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const x=v.length!==0||y||a!==0||s;return s=y,a=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=m(v,y,0)},this.setState=function(v,y,x){const b=v.clippingPlanes,E=v.clipIntersection,_=v.clipShadows,S=t.get(v);if(!s||b===null||b.length===0||l&&!_)l?m(null):h();else{const A=l?0:a,w=A*4;let D=S.clippingState||null;d.value=D,D=m(b,y,w,x);for(let C=0;C!==w;++C)D[C]=n[C];S.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(v,y,x,b){const E=v!==null?v.length:0;let _=null;if(E!==0){if(_=d.value,b!==!0||_===null){const S=x+E*4,A=y.matrixWorldInverse;f.getNormalMatrix(A),(_===null||_.length<S)&&(_=new Float32Array(S));for(let w=0,D=x;w!==E;++w,D+=4)c.copy(v[w]).applyMatrix4(A,f),c.normal.toArray(_,D),_[D+3]=c.constant}d.value=_,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}const $r=4,tM=[.125,.215,.35,.446,.526,.582],Cs=20,TB=256,yc=new DA,nM=new Vt;let d0=null,h0=0,p0=0,m0=!1;const AB=new ue;class iM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,s=100,l={}){const{size:c=256,position:f=AB}=l;d0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,s,d,f),n>0&&this._blur(d,0,0,n),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(d0,h0,p0),this._renderer.xr.enabled=m0,e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===el?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),d0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:An,minFilter:An,generateMipmaps:!1,type:Pa,format:zi,colorSpace:nl,depthBuffer:!1},s=aM(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=aM(e,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=wB(l)),this._blurMaterial=CB(l,e,n),this._ggxMaterial=RB(l,e,n)}return s}_compileMaterial(e){const n=new Hi(new da,e);this._renderer.compile(n,yc)}_sceneToCubeUV(e,n,a,s,l){const d=new ia(90,1,n,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,x=v.toneMapping;v.getClearColor(nM),v.toneMapping=Ra,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new su,new EA({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let S=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,S=!0):(_.color.copy(nM),S=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(d.up.set(0,h[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[w],l.y,l.z)):D===1?(d.up.set(0,0,h[w]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[w],l.z)):(d.up.set(0,h[w],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[w]));const C=this._cubeSize;Bo(s,D*C,w>2?C:0,C,C),v.setRenderTarget(s),S&&v.render(E,d),v.render(e,d)}v.toneMapping=x,v.autoClear=y,e.background=A}_textureToCubeUV(e,n){const a=this._renderer,s=e.mapping===Vs||e.mapping===el;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rM());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Bo(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(c,yc)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=a}_applyGGXFilter(e,n,a){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const d=c.uniforms,h=a/(this._lodMeshes.length-1),m=n/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),y=0+h*1.25,x=v*y,{_lodMax:b}=this,E=this._sizeLods[a],_=3*E*(a>b-$r?a-b+$r:0),S=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=b-n,Bo(l,_,S,3*E,2*E),s.setRenderTarget(l),s.render(f,yc),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=b-a,Bo(e,_,S,3*E,2*E),s.setRenderTarget(e),s.render(f,yc)}_blur(e,n,a,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,a,s,"latitudinal",l),this._halfBlur(c,e,a,a,s,"longitudinal",l)}_halfBlur(e,n,a,s,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[s];v.material=h;const y=h.uniforms,x=this._sizeLods[a]-1,b=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Cs-1),E=l/b,_=isFinite(l)?1+Math.floor(m*E):Cs;_>Cs&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Cs}`);const S=[];let A=0;for(let P=0;P<Cs;++P){const R=P/E,O=Math.exp(-R*R/2);S.push(O),P===0?A+=O:P<_&&(A+=2*O)}for(let P=0;P<S.length;P++)S[P]=S[P]/A;y.envMap.value=e.texture,y.samples.value=_,y.weights.value=S,y.latitudinal.value=c==="latitudinal",f&&(y.poleAxis.value=f);const{_lodMax:w}=this;y.dTheta.value=b,y.mipInt.value=w-a;const D=this._sizeLods[s],C=3*D*(s>w-$r?s-w+$r:0),F=4*(this._cubeSize-D);Bo(n,C,F,3*D,2*D),d.setRenderTarget(n),d.render(v,yc)}}function wB(t){const e=[],n=[],a=[];let s=t;const l=t-$r+1+tM.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);let d=1/f;c>t-$r?d=tM[c-t+$r-1]:c===0&&(d=0),n.push(d);const h=1/(f-2),m=-h,v=1+h,y=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,b=6,E=3,_=2,S=1,A=new Float32Array(E*b*x),w=new Float32Array(_*b*x),D=new Float32Array(S*b*x);for(let F=0;F<x;F++){const P=F%3*2/3-1,R=F>2?0:-1,O=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];A.set(O,E*b*F),w.set(y,_*b*F);const J=[F,F,F,F,F,F];D.set(J,S*b*F)}const C=new da;C.setAttribute("position",new ua(A,E)),C.setAttribute("uv",new ua(w,_)),C.setAttribute("faceIndex",new ua(D,S)),a.push(new Hi(C,null)),s>$r&&s--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function aM(t,e,n){const a=new ca(t,e,n);return a.texture.mapping=Jd,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Bo(t,e,n,a,s){t.viewport.set(e,n,a,s),t.scissor.set(e,n,a,s)}function RB(t,e,n){return new Oa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TB,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:th(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function CB(t,e,n){const a=new Float32Array(Cs),s=new ue(0,1,0);return new Oa({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function rM(){return new Oa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function sM(){return new Oa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function th(){return`

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
	`}class NA extends ca{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new wA(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new su(5,5,5),l=new Oa({name:"CubemapFromEquirect",uniforms:il(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ui,blending:or});l.uniforms.tEquirect.value=n;const c=new Hi(s,l),f=n.minFilter;return n.minFilter===Ns&&(n.minFilter=An),new PO(1,10,this).update(e,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,a,s);e.setRenderTarget(l)}}function DB(t){let e=new WeakMap,n=new WeakMap,a=null;function s(y,x=!1){return y==null?null:x?c(y):l(y)}function l(y){if(y&&y.isTexture){const x=y.mapping;if(x===Bm||x===zm)if(e.has(y)){const b=e.get(y).texture;return f(b,y.mapping)}else{const b=y.image;if(b&&b.height>0){const E=new NA(b.height);return E.fromEquirectangularTexture(t,y),e.set(y,E),y.addEventListener("dispose",h),f(E.texture,y.mapping)}else return null}}return y}function c(y){if(y&&y.isTexture){const x=y.mapping,b=x===Bm||x===zm,E=x===Vs||x===el;if(b||E){let _=n.get(y);const S=_!==void 0?_.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==S)return a===null&&(a=new iM(t)),_=b?a.fromEquirectangular(y,_):a.fromCubemap(y,_),_.texture.pmremVersion=y.pmremVersion,n.set(y,_),_.texture;if(_!==void 0)return _.texture;{const A=y.image;return b&&A&&A.height>0||E&&A&&d(A)?(a===null&&(a=new iM(t)),_=b?a.fromEquirectangular(y):a.fromCubemap(y),_.texture.pmremVersion=y.pmremVersion,n.set(y,_),y.addEventListener("dispose",m),_.texture):null}}}return y}function f(y,x){return x===Bm?y.mapping=Vs:x===zm&&(y.mapping=el),y}function d(y){let x=0;const b=6;for(let E=0;E<b;E++)y[E]!==void 0&&x++;return x===b}function h(y){const x=y.target;x.removeEventListener("dispose",h);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=n.get(x);b!==void 0&&(n.delete(x),b.dispose())}function v(){e=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:v}}function LB(t){const e={};function n(a){if(e[a]!==void 0)return e[a];const s=t.getExtension(a);return e[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Vd("WebGLRenderer: "+a+" extension not supported."),s}}}function NB(t,e,n,a){const s={},l=new WeakMap;function c(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",c),delete s[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function f(v,y){return s[y.id]===!0||(y.addEventListener("dispose",c),s[y.id]=!0,n.memory.geometries++),y}function d(v){const y=v.attributes;for(const x in y)e.update(y[x],t.ARRAY_BUFFER)}function h(v){const y=[],x=v.index,b=v.attributes.position;let E=0;if(b===void 0)return;if(x!==null){const A=x.array;E=x.version;for(let w=0,D=A.length;w<D;w+=3){const C=A[w+0],F=A[w+1],P=A[w+2];y.push(C,F,F,P,P,C)}}else{const A=b.array;E=b.version;for(let w=0,D=A.length/3-1;w<D;w+=3){const C=w+0,F=w+1,P=w+2;y.push(C,F,F,P,P,C)}}const _=new(b.count>=65535?bA:SA)(y,1);_.version=E;const S=l.get(v);S&&e.remove(S),l.set(v,_)}function m(v){const y=l.get(v);if(y){const x=v.index;x!==null&&y.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function UB(t,e,n){let a;function s(y){a=y}let l,c;function f(y){l=y.type,c=y.bytesPerElement}function d(y,x){t.drawElements(a,x,l,y*c),n.update(x,a,1)}function h(y,x,b){b!==0&&(t.drawElementsInstanced(a,x,l,y*c,b),n.update(x,a,b))}function m(y,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,y,0,b);let _=0;for(let S=0;S<b;S++)_+=x[S];n.update(_,a,1)}function v(y,x,b,E){if(b===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<y.length;S++)h(y[S]/c,x[S],E[S]);else{_.multiDrawElementsInstancedWEBGL(a,x,0,l,y,0,E,0,b);let S=0;for(let A=0;A<b;A++)S+=x[A]*E[A];n.update(S,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function PB(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case t.TRIANGLES:n.triangles+=f*(l/3);break;case t.LINES:n.lines+=f*(l/2);break;case t.LINE_STRIP:n.lines+=f*(l-1);break;case t.LINE_LOOP:n.lines+=f*l;break;case t.POINTS:n.points+=f*l;break;default:Ft("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:a}}function OB(t,e,n){const a=new WeakMap,s=new dn;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let y=a.get(f);if(y===void 0||y.count!==v){let J=function(){R.dispose(),a.delete(f),f.removeEventListener("dispose",J)};var x=J;y!==void 0&&y.texture.dispose();const b=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let D=0;b===!0&&(D=1),E===!0&&(D=2),_===!0&&(D=3);let C=f.attributes.position.count*D,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*F*4*v),R=new yA(P,C,F,v);R.type=sa,R.needsUpdate=!0;const O=D*4;for(let G=0;G<v;G++){const Q=S[G],te=A[G],ee=w[G],K=C*F*4*G;for(let B=0;B<Q.count;B++){const z=B*O;b===!0&&(s.fromBufferAttribute(Q,B),P[K+z+0]=s.x,P[K+z+1]=s.y,P[K+z+2]=s.z,P[K+z+3]=0),E===!0&&(s.fromBufferAttribute(te,B),P[K+z+4]=s.x,P[K+z+5]=s.y,P[K+z+6]=s.z,P[K+z+7]=0),_===!0&&(s.fromBufferAttribute(ee,B),P[K+z+8]=s.x,P[K+z+9]=s.y,P[K+z+10]=s.z,P[K+z+11]=ee.itemSize===4?s.w:1)}}y={count:v,texture:R,size:new mt(C,F)},a.set(f,y),f.addEventListener("dispose",J)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let b=0;for(let _=0;_<h.length;_++)b+=h[_];const E=f.morphTargetsRelative?1:1-b;d.getUniforms().setValue(t,"morphTargetBaseInfluence",E),d.getUniforms().setValue(t,"morphTargetInfluences",h)}d.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}return{update:l}}function FB(t,e,n,a,s){let l=new WeakMap;function c(h){const m=s.render.frame,v=h.geometry,y=e.get(h,v);if(l.get(y)!==m&&(e.update(y),l.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(n.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,t.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return y}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),a.releaseStatesOfObject(m),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}const IB={[nA]:"LINEAR_TONE_MAPPING",[iA]:"REINHARD_TONE_MAPPING",[aA]:"CINEON_TONE_MAPPING",[rA]:"ACES_FILMIC_TONE_MAPPING",[oA]:"AGX_TONE_MAPPING",[lA]:"NEUTRAL_TONE_MAPPING",[sA]:"CUSTOM_TONE_MAPPING"};function BB(t,e,n,a,s){const l=new ca(e,n,{type:t,depthBuffer:a,stencilBuffer:s}),c=new ca(e,n,{type:Pa,depthBuffer:!1,stencilBuffer:!1}),f=new da;f.setAttribute("position",new fa([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new fa([0,2,0,0,2,0],2));const d=new Tc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Hi(f,d),m=new DA(-1,1,1,-1,0,1);let v=null,y=null,x=!1,b,E=null,_=[],S=!1;this.setSize=function(A,w){l.setSize(A,w),c.setSize(A,w);for(let D=0;D<_.length;D++){const C=_[D];C.setSize&&C.setSize(A,w)}},this.setEffects=function(A){_=A,S=_.length>0&&_[0].isRenderPass===!0;const w=l.width,D=l.height;for(let C=0;C<_.length;C++){const F=_[C];F.setSize&&F.setSize(w,D)}},this.begin=function(A,w){if(x||A.toneMapping===Ra&&_.length===0)return!1;if(E=w,w!==null){const D=w.width,C=w.height;(l.width!==D||l.height!==C)&&this.setSize(D,C)}return S===!1&&A.setRenderTarget(l),b=A.toneMapping,A.toneMapping=Ra,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=b,x=!0;let D=l,C=c;for(let F=0;F<_.length;F++){const P=_[F];if(P.enabled!==!1&&(P.render(A,C,D,w),P.needsSwap!==!1)){const R=D;D=C,C=R}}if(v!==A.outputColorSpace||y!==A.toneMapping){v=A.outputColorSpace,y=A.toneMapping,d.defines={},Nt.getTransfer(v)===Yt&&(d.defines.SRGB_TRANSFER="");const F=IB[y];F&&(d.defines[F]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(E),A.render(h,m),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const UA=new ni,Wg=new Wc(1,1),PA=new yA,OA=new lO,FA=new wA,oM=[],lM=[],cM=new Float32Array(16),uM=new Float32Array(9),fM=new Float32Array(4);function pl(t,e,n){const a=t[0];if(a<=0||a>0)return t;const s=e*n;let l=oM[s];if(l===void 0&&(l=new Float32Array(s),oM[s]=l),e!==0){a.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=n,t[c].toArray(l,f)}return l}function Ln(t,e){if(t.length!==e.length)return!1;for(let n=0,a=t.length;n<a;n++)if(t[n]!==e[n])return!1;return!0}function Nn(t,e){for(let n=0,a=e.length;n<a;n++)t[n]=e[n]}function nh(t,e){let n=lM[e];n===void 0&&(n=new Int32Array(e),lM[e]=n);for(let a=0;a!==e;++a)n[a]=t.allocateTextureUnit();return n}function zB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;t.uniform2fv(this.addr,e),Nn(n,e)}}function HB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ln(n,e))return;t.uniform3fv(this.addr,e),Nn(n,e)}}function GB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;t.uniform4fv(this.addr,e),Nn(n,e)}}function kB(t,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;fM.set(a),t.uniformMatrix2fv(this.addr,!1,fM),Nn(n,a)}}function WB(t,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;uM.set(a),t.uniformMatrix3fv(this.addr,!1,uM),Nn(n,a)}}function XB(t,e){const n=this.cache,a=e.elements;if(a===void 0){if(Ln(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nn(n,e)}else{if(Ln(n,a))return;cM.set(a),t.uniformMatrix4fv(this.addr,!1,cM),Nn(n,a)}}function jB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;t.uniform2iv(this.addr,e),Nn(n,e)}}function YB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ln(n,e))return;t.uniform3iv(this.addr,e),Nn(n,e)}}function $B(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;t.uniform4iv(this.addr,e),Nn(n,e)}}function KB(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ln(n,e))return;t.uniform2uiv(this.addr,e),Nn(n,e)}}function QB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ln(n,e))return;t.uniform3uiv(this.addr,e),Nn(n,e)}}function JB(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ln(n,e))return;t.uniform4uiv(this.addr,e),Nn(n,e)}}function e5(t,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(t.uniform1i(this.addr,s),a[0]=s);let l;this.type===t.SAMPLER_2D_SHADOW?(Wg.compareFunction=n.isReversedDepthBuffer()?Qv:Zv,l=Wg):l=UA,n.setTexture2D(e||l,s)}function t5(t,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(t.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(e||OA,s)}function n5(t,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(t.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(e||FA,s)}function i5(t,e,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(t.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(e||PA,s)}function a5(t){switch(t){case 5126:return zB;case 35664:return VB;case 35665:return HB;case 35666:return GB;case 35674:return kB;case 35675:return WB;case 35676:return XB;case 5124:case 35670:return jB;case 35667:case 35671:return qB;case 35668:case 35672:return YB;case 35669:case 35673:return $B;case 5125:return KB;case 36294:return ZB;case 36295:return QB;case 36296:return JB;case 35678:case 36198:case 36298:case 36306:case 35682:return e5;case 35679:case 36299:case 36307:return t5;case 35680:case 36300:case 36308:case 36293:return n5;case 36289:case 36303:case 36311:case 36292:return i5}}function r5(t,e){t.uniform1fv(this.addr,e)}function s5(t,e){const n=pl(e,this.size,2);t.uniform2fv(this.addr,n)}function o5(t,e){const n=pl(e,this.size,3);t.uniform3fv(this.addr,n)}function l5(t,e){const n=pl(e,this.size,4);t.uniform4fv(this.addr,n)}function c5(t,e){const n=pl(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function u5(t,e){const n=pl(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f5(t,e){const n=pl(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function d5(t,e){t.uniform1iv(this.addr,e)}function h5(t,e){t.uniform2iv(this.addr,e)}function p5(t,e){t.uniform3iv(this.addr,e)}function m5(t,e){t.uniform4iv(this.addr,e)}function g5(t,e){t.uniform1uiv(this.addr,e)}function v5(t,e){t.uniform2uiv(this.addr,e)}function y5(t,e){t.uniform3uiv(this.addr,e)}function x5(t,e){t.uniform4uiv(this.addr,e)}function _5(t,e,n){const a=this.cache,s=e.length,l=nh(n,s);Ln(a,l)||(t.uniform1iv(this.addr,l),Nn(a,l));let c;this.type===t.SAMPLER_2D_SHADOW?c=Wg:c=UA;for(let f=0;f!==s;++f)n.setTexture2D(e[f]||c,l[f])}function S5(t,e,n){const a=this.cache,s=e.length,l=nh(n,s);Ln(a,l)||(t.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)n.setTexture3D(e[c]||OA,l[c])}function b5(t,e,n){const a=this.cache,s=e.length,l=nh(n,s);Ln(a,l)||(t.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)n.setTextureCube(e[c]||FA,l[c])}function M5(t,e,n){const a=this.cache,s=e.length,l=nh(n,s);Ln(a,l)||(t.uniform1iv(this.addr,l),Nn(a,l));for(let c=0;c!==s;++c)n.setTexture2DArray(e[c]||PA,l[c])}function E5(t){switch(t){case 5126:return r5;case 35664:return s5;case 35665:return o5;case 35666:return l5;case 35674:return c5;case 35675:return u5;case 35676:return f5;case 5124:case 35670:return d5;case 35667:case 35671:return h5;case 35668:case 35672:return p5;case 35669:case 35673:return m5;case 5125:return g5;case 36294:return v5;case 36295:return y5;case 36296:return x5;case 35678:case 36198:case 36298:case 36306:case 35682:return _5;case 35679:case 36299:case 36307:return S5;case 35680:case 36300:case 36308:case 36293:return b5;case 36289:case 36303:case 36311:case 36292:return M5}}class T5{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=a5(n.type)}}class A5{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=E5(n.type)}}class w5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,n[f.id],a)}}}const g0=/(\w+)(\])?(\[|\.)?/g;function dM(t,e){t.seq.push(e),t.map[e.id]=e}function R5(t,e,n){const a=t.name,s=a.length;for(g0.lastIndex=0;;){const l=g0.exec(a),c=g0.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===s){dM(n,h===void 0?new T5(f,t,e):new A5(f,t,e));break}else{let v=n.map[f];v===void 0&&(v=new w5(f),dM(n,v)),n=v}}}class Md{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=e.getActiveUniform(n,c),d=e.getUniformLocation(n,f.name);R5(f,d,this)}const s=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(e,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(e,a,s)}setOptional(e,n,a){const s=n[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,n,a,s){for(let l=0,c=n.length;l!==c;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,n){const a=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in n&&a.push(c)}return a}}function hM(t,e,n){const a=t.createShader(e);return t.shaderSource(a,n),t.compileShader(a),a}const C5=37297;let D5=0;function L5(t,e){const n=t.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=s;c<l;c++){const f=c+1;a.push(`${f===e?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const pM=new _t;function N5(t){Nt._getMatrix(pM,Nt.workingColorSpace,t);const e=`mat3( ${pM.elements.map(n=>n.toFixed(4))} )`;switch(Nt.getTransfer(t)){case Id:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mM(t,e,n){const a=t.getShaderParameter(e,t.COMPILE_STATUS),l=(t.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+L5(t.getShaderSource(e),f)}else return l}function U5(t,e){const n=N5(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const P5={[nA]:"Linear",[iA]:"Reinhard",[aA]:"Cineon",[rA]:"ACESFilmic",[oA]:"AgX",[lA]:"Neutral",[sA]:"Custom"};function O5(t,e){const n=P5[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jf=new ue;function F5(){Nt.getLuminanceCoefficients(Jf);const t=Jf.x.toFixed(4),e=Jf.y.toFixed(4),n=Jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I5(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ac).join(`
`)}function B5(t){const e=[];for(const n in t){const a=t[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function z5(t,e){const n={},a=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=t.getActiveAttrib(e,s),c=l.name;let f=1;l.type===t.FLOAT_MAT2&&(f=2),l.type===t.FLOAT_MAT3&&(f=3),l.type===t.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:t.getAttribLocation(e,c),locationSize:f}}return n}function Ac(t){return t!==""}function gM(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vM(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xg(t){return t.replace(V5,G5)}const H5=new Map;function G5(t,e){let n=bt[e];if(n===void 0){const a=H5.get(e);if(a!==void 0)n=bt[a],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Xg(n)}const k5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yM(t){return t.replace(k5,W5)}function W5(t,e,n,a){let s="";for(let l=parseInt(e);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function xM(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const X5={[yd]:"SHADOWMAP_TYPE_PCF",[Ec]:"SHADOWMAP_TYPE_VSM"};function j5(t){return X5[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const q5={[Vs]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE",[Jd]:"ENVMAP_TYPE_CUBE_UV"};function Y5(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":q5[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const $5={[el]:"ENVMAP_MODE_REFRACTION"};function K5(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$5[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z5={[tA]:"ENVMAP_BLENDING_MULTIPLY",[VP]:"ENVMAP_BLENDING_MIX",[HP]:"ENVMAP_BLENDING_ADD"};function Q5(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Z5[t.combine]||"ENVMAP_BLENDING_NONE"}function J5(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function e4(t,e,n,a){const s=t.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const d=j5(n),h=Y5(n),m=K5(n),v=Q5(n),y=J5(n),x=I5(n),b=B5(l),E=s.createProgram();let _,S,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ac).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b].filter(Ac).join(`
`),S.length>0&&(S+=`
`)):(_=[xM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ac).join(`
`),S=[xM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,b,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ra?"#define TONE_MAPPING":"",n.toneMapping!==Ra?bt.tonemapping_pars_fragment:"",n.toneMapping!==Ra?O5("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,U5("linearToOutputTexel",n.outputColorSpace),F5(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ac).join(`
`)),c=Xg(c),c=gM(c,n),c=vM(c,n),f=Xg(f),f=gM(f,n),f=vM(f,n),c=yM(c),f=yM(f),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",n.glslVersion===D1?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===D1?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=A+_+c,D=A+S+f,C=hM(s,s.VERTEX_SHADER,w),F=hM(s,s.FRAGMENT_SHADER,D);s.attachShader(E,C),s.attachShader(E,F),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function P(G){if(t.debug.checkShaderErrors){const Q=s.getProgramInfoLog(E)||"",te=s.getShaderInfoLog(C)||"",ee=s.getShaderInfoLog(F)||"",K=Q.trim(),B=te.trim(),z=ee.trim();let ne=!0,he=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,E,C,F);else{const ve=mM(s,C,"vertex"),V=mM(s,F,"fragment");Ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+ve+`
`+V)}else K!==""?ut("WebGLProgram: Program Info Log:",K):(B===""||z==="")&&(he=!1);he&&(G.diagnostics={runnable:ne,programLog:K,vertexShader:{log:B,prefix:_},fragmentShader:{log:z,prefix:S}})}s.deleteShader(C),s.deleteShader(F),R=new Md(s,E),O=z5(s,E)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let O;this.getAttributes=function(){return O===void 0&&P(this),O};let J=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(E,C5)),J},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=D5++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=F,this}let t4=0;class n4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new i4(e),n.set(e,a)),a}}class i4{constructor(e){this.id=t4++,this.code=e,this.usedTimes=0}}function a4(t,e,n,a,s,l){const c=new xA,f=new n4,d=new Set,h=[],m=new Map,v=a.logarithmicDepthBuffer;let y=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return d.add(R),R===0?"uv":`uv${R}`}function E(R,O,J,G,Q){const te=G.fog,ee=Q.geometry,K=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,B=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap,z=e.get(R.envMap||K,B),ne=z&&z.mapping===Jd?z.image.height:null,he=x[R.type];R.precision!==null&&(y=a.getMaxPrecision(R.precision),y!==R.precision&&ut("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ve=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,V=ve!==void 0?ve.length:0;let X=0;ee.morphAttributes.position!==void 0&&(X=1),ee.morphAttributes.normal!==void 0&&(X=2),ee.morphAttributes.color!==void 0&&(X=3);let xe,we,Fe,ae;if(he){const Lt=Sa[he];xe=Lt.vertexShader,we=Lt.fragmentShader}else xe=R.vertexShader,we=R.fragmentShader,f.update(R),Fe=f.getVertexShaderID(R),ae=f.getFragmentShaderID(R);const Se=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),Ce=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,He=!!R.map,dt=!!R.matcap,tt=!!z,it=!!R.aoMap,St=!!R.lightMap,ot=!!R.bumpMap,Jt=!!R.normalMap,W=!!R.displacementMap,Ht=!!R.emissiveMap,Mt=!!R.metalnessMap,Et=!!R.roughnessMap,Ee=R.anisotropy>0,U=R.clearcoat>0,M=R.dispersion>0,H=R.iridescence>0,$=R.sheen>0,de=R.transmission>0,fe=Ee&&!!R.anisotropyMap,Ie=U&&!!R.clearcoatMap,Ne=U&&!!R.clearcoatNormalMap,Je=U&&!!R.clearcoatRoughnessMap,rt=H&&!!R.iridescenceMap,Re=H&&!!R.iridescenceThicknessMap,Te=$&&!!R.sheenColorMap,Ge=$&&!!R.sheenRoughnessMap,Ve=!!R.specularMap,ke=!!R.specularColorMap,vt=!!R.specularIntensityMap,Y=de&&!!R.transmissionMap,Ue=de&&!!R.thicknessMap,Le=!!R.gradientMap,We=!!R.alphaMap,Ae=R.alphaTest>0,ye=!!R.alphaHash,qe=!!R.extensions;let ct=Ra;R.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(ct=t.toneMapping);const Xt={shaderID:he,shaderType:R.type,shaderName:R.name,vertexShader:xe,fragmentShader:we,defines:R.defines,customVertexShaderID:Fe,customFragmentShaderID:ae,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:De,batchingColor:De&&Q._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Q.instanceColor!==null,instancingMorph:Ce&&Q.morphTexture!==null,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:nl,alphaToCoverage:!!R.alphaToCoverage,map:He,matcap:dt,envMap:tt,envMapMode:tt&&z.mapping,envMapCubeUVHeight:ne,aoMap:it,lightMap:St,bumpMap:ot,normalMap:Jt,displacementMap:W,emissiveMap:Ht,normalMapObjectSpace:Jt&&R.normalMapType===XP,normalMapTangentSpace:Jt&&R.normalMapType===WP,metalnessMap:Mt,roughnessMap:Et,anisotropy:Ee,anisotropyMap:fe,clearcoat:U,clearcoatMap:Ie,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Je,dispersion:M,iridescence:H,iridescenceMap:rt,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:Te,sheenRoughnessMap:Ge,specularMap:Ve,specularColorMap:ke,specularIntensityMap:vt,transmission:de,transmissionMap:Y,thicknessMap:Ue,gradientMap:Le,opaque:R.transparent===!1&&R.blending===$o&&R.alphaToCoverage===!1,alphaMap:We,alphaTest:Ae,alphaHash:ye,combine:R.combine,mapUv:He&&b(R.map.channel),aoMapUv:it&&b(R.aoMap.channel),lightMapUv:St&&b(R.lightMap.channel),bumpMapUv:ot&&b(R.bumpMap.channel),normalMapUv:Jt&&b(R.normalMap.channel),displacementMapUv:W&&b(R.displacementMap.channel),emissiveMapUv:Ht&&b(R.emissiveMap.channel),metalnessMapUv:Mt&&b(R.metalnessMap.channel),roughnessMapUv:Et&&b(R.roughnessMap.channel),anisotropyMapUv:fe&&b(R.anisotropyMap.channel),clearcoatMapUv:Ie&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(R.sheenRoughnessMap.channel),specularMapUv:Ve&&b(R.specularMap.channel),specularColorMapUv:ke&&b(R.specularColorMap.channel),specularIntensityMapUv:vt&&b(R.specularIntensityMap.channel),transmissionMapUv:Y&&b(R.transmissionMap.channel),thicknessMapUv:Ue&&b(R.thicknessMap.channel),alphaMapUv:We&&b(R.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Jt||Ee),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ee.attributes.uv&&(He||We),fog:!!te,useFog:R.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:R.wireframe===!1&&(R.flatShading===!0||ee.attributes.normal===void 0&&Jt===!1&&(R.isMeshLambertMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isMeshPhysicalMaterial)),sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ge,skinning:Q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:X,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:t.shadowMap.enabled&&J.length>0,shadowMapType:t.shadowMap.type,toneMapping:ct,decodeVideoTexture:He&&R.map.isVideoTexture===!0&&Nt.getTransfer(R.map.colorSpace)===Yt,decodeVideoTextureEmissive:Ht&&R.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(R.emissiveMap.colorSpace)===Yt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===sr,flipSided:R.side===ui,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:qe&&R.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&R.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Xt.vertexUv1s=d.has(1),Xt.vertexUv2s=d.has(2),Xt.vertexUv3s=d.has(3),d.clear(),Xt}function _(R){const O=[];if(R.shaderID?O.push(R.shaderID):(O.push(R.customVertexShaderID),O.push(R.customFragmentShaderID)),R.defines!==void 0)for(const J in R.defines)O.push(J),O.push(R.defines[J]);return R.isRawShaderMaterial===!1&&(S(O,R),A(O,R),O.push(t.outputColorSpace)),O.push(R.customProgramCacheKey),O.join()}function S(R,O){R.push(O.precision),R.push(O.outputColorSpace),R.push(O.envMapMode),R.push(O.envMapCubeUVHeight),R.push(O.mapUv),R.push(O.alphaMapUv),R.push(O.lightMapUv),R.push(O.aoMapUv),R.push(O.bumpMapUv),R.push(O.normalMapUv),R.push(O.displacementMapUv),R.push(O.emissiveMapUv),R.push(O.metalnessMapUv),R.push(O.roughnessMapUv),R.push(O.anisotropyMapUv),R.push(O.clearcoatMapUv),R.push(O.clearcoatNormalMapUv),R.push(O.clearcoatRoughnessMapUv),R.push(O.iridescenceMapUv),R.push(O.iridescenceThicknessMapUv),R.push(O.sheenColorMapUv),R.push(O.sheenRoughnessMapUv),R.push(O.specularMapUv),R.push(O.specularColorMapUv),R.push(O.specularIntensityMapUv),R.push(O.transmissionMapUv),R.push(O.thicknessMapUv),R.push(O.combine),R.push(O.fogExp2),R.push(O.sizeAttenuation),R.push(O.morphTargetsCount),R.push(O.morphAttributeCount),R.push(O.numDirLights),R.push(O.numPointLights),R.push(O.numSpotLights),R.push(O.numSpotLightMaps),R.push(O.numHemiLights),R.push(O.numRectAreaLights),R.push(O.numDirLightShadows),R.push(O.numPointLightShadows),R.push(O.numSpotLightShadows),R.push(O.numSpotLightShadowsWithMaps),R.push(O.numLightProbes),R.push(O.shadowMapType),R.push(O.toneMapping),R.push(O.numClippingPlanes),R.push(O.numClipIntersection),R.push(O.depthPacking)}function A(R,O){c.disableAll(),O.instancing&&c.enable(0),O.instancingColor&&c.enable(1),O.instancingMorph&&c.enable(2),O.matcap&&c.enable(3),O.envMap&&c.enable(4),O.normalMapObjectSpace&&c.enable(5),O.normalMapTangentSpace&&c.enable(6),O.clearcoat&&c.enable(7),O.iridescence&&c.enable(8),O.alphaTest&&c.enable(9),O.vertexColors&&c.enable(10),O.vertexAlphas&&c.enable(11),O.vertexUv1s&&c.enable(12),O.vertexUv2s&&c.enable(13),O.vertexUv3s&&c.enable(14),O.vertexTangents&&c.enable(15),O.anisotropy&&c.enable(16),O.alphaHash&&c.enable(17),O.batching&&c.enable(18),O.dispersion&&c.enable(19),O.batchingColor&&c.enable(20),O.gradientMap&&c.enable(21),R.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.reversedDepthBuffer&&c.enable(4),O.skinning&&c.enable(5),O.morphTargets&&c.enable(6),O.morphNormals&&c.enable(7),O.morphColors&&c.enable(8),O.premultipliedAlpha&&c.enable(9),O.shadowMapEnabled&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.decodeVideoTextureEmissive&&c.enable(20),O.alphaToCoverage&&c.enable(21),R.push(c.mask)}function w(R){const O=x[R.type];let J;if(O){const G=Sa[O];J=CO.clone(G.uniforms)}else J=R.uniforms;return J}function D(R,O){let J=m.get(O);return J!==void 0?++J.usedTimes:(J=new e4(t,O,R,s),h.push(J),m.set(O,J)),J}function C(R){if(--R.usedTimes===0){const O=h.indexOf(R);h[O]=h[h.length-1],h.pop(),m.delete(R.cacheKey),R.destroy()}}function F(R){f.remove(R)}function P(){f.dispose()}return{getParameters:E,getProgramCacheKey:_,getUniforms:w,acquireProgram:D,releaseProgram:C,releaseShaderCache:F,programs:h,dispose:P}}function r4(){let t=new WeakMap;function e(c){return t.has(c)}function n(c){let f=t.get(c);return f===void 0&&(f={},t.set(c,f)),f}function a(c){t.delete(c)}function s(c,f,d){t.get(c)[f]=d}function l(){t=new WeakMap}return{has:e,get:n,remove:a,update:s,dispose:l}}function s4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _M(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function SM(){const t=[];let e=0;const n=[],a=[],s=[];function l(){e=0,n.length=0,a.length=0,s.length=0}function c(y){let x=0;return y.isInstancedMesh&&(x+=2),y.isSkinnedMesh&&(x+=1),x}function f(y,x,b,E,_,S){let A=t[e];return A===void 0?(A={id:y.id,object:y,geometry:x,material:b,materialVariant:c(y),groupOrder:E,renderOrder:y.renderOrder,z:_,group:S},t[e]=A):(A.id=y.id,A.object=y,A.geometry=x,A.material=b,A.materialVariant=c(y),A.groupOrder=E,A.renderOrder=y.renderOrder,A.z=_,A.group=S),e++,A}function d(y,x,b,E,_,S){const A=f(y,x,b,E,_,S);b.transmission>0?a.push(A):b.transparent===!0?s.push(A):n.push(A)}function h(y,x,b,E,_,S){const A=f(y,x,b,E,_,S);b.transmission>0?a.unshift(A):b.transparent===!0?s.unshift(A):n.unshift(A)}function m(y,x){n.length>1&&n.sort(y||s4),a.length>1&&a.sort(x||_M),s.length>1&&s.sort(x||_M)}function v(){for(let y=e,x=t.length;y<x;y++){const b=t[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:d,unshift:h,finish:v,sort:m}}function o4(){let t=new WeakMap;function e(a,s){const l=t.get(a);let c;return l===void 0?(c=new SM,t.set(a,[c])):s>=l.length?(c=new SM,l.push(c)):c=l[s],c}function n(){t=new WeakMap}return{get:e,dispose:n}}function l4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ue,color:new Vt};break;case"SpotLight":n={position:new ue,direction:new ue,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ue,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ue,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return t[e.id]=n,n}}}function c4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let u4=0;function f4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function d4(t){const e=new l4,n=c4(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new ue);const s=new ue,l=new mn,c=new mn;function f(h){let m=0,v=0,y=0;for(let O=0;O<9;O++)a.probe[O].set(0,0,0);let x=0,b=0,E=0,_=0,S=0,A=0,w=0,D=0,C=0,F=0,P=0;h.sort(f4);for(let O=0,J=h.length;O<J;O++){const G=h[O],Q=G.color,te=G.intensity,ee=G.distance;let K=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===tl?K=G.shadow.map.texture:K=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)m+=Q.r*te,v+=Q.g*te,y+=Q.b*te;else if(G.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(G.sh.coefficients[B],te);P++}else if(G.isDirectionalLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,ne=n.get(G);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,a.directionalShadow[x]=ne,a.directionalShadowMap[x]=K,a.directionalShadowMatrix[x]=G.shadow.matrix,A++}a.directional[x]=B,x++}else if(G.isSpotLight){const B=e.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(Q).multiplyScalar(te),B.distance=ee,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,a.spot[E]=B;const z=G.shadow;if(G.map&&(a.spotLightMap[C]=G.map,C++,z.updateMatrices(G),G.castShadow&&F++),a.spotLightMatrix[E]=z.matrix,G.castShadow){const ne=n.get(G);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,a.spotShadow[E]=ne,a.spotShadowMap[E]=K,D++}E++}else if(G.isRectAreaLight){const B=e.get(G);B.color.copy(Q).multiplyScalar(te),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),a.rectArea[_]=B,_++}else if(G.isPointLight){const B=e.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const z=G.shadow,ne=n.get(G);ne.shadowIntensity=z.intensity,ne.shadowBias=z.bias,ne.shadowNormalBias=z.normalBias,ne.shadowRadius=z.radius,ne.shadowMapSize=z.mapSize,ne.shadowCameraNear=z.camera.near,ne.shadowCameraFar=z.camera.far,a.pointShadow[b]=ne,a.pointShadowMap[b]=K,a.pointShadowMatrix[b]=G.shadow.matrix,w++}a.point[b]=B,b++}else if(G.isHemisphereLight){const B=e.get(G);B.skyColor.copy(G.color).multiplyScalar(te),B.groundColor.copy(G.groundColor).multiplyScalar(te),a.hemi[S]=B,S++}}_>0&&(t.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=v,a.ambient[2]=y;const R=a.hash;(R.directionalLength!==x||R.pointLength!==b||R.spotLength!==E||R.rectAreaLength!==_||R.hemiLength!==S||R.numDirectionalShadows!==A||R.numPointShadows!==w||R.numSpotShadows!==D||R.numSpotMaps!==C||R.numLightProbes!==P)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=_,a.point.length=b,a.hemi.length=S,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=D+C-F,a.spotLightMap.length=C,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=P,R.directionalLength=x,R.pointLength=b,R.spotLength=E,R.rectAreaLength=_,R.hemiLength=S,R.numDirectionalShadows=A,R.numPointShadows=w,R.numSpotShadows=D,R.numSpotMaps=C,R.numLightProbes=P,a.version=u4++)}function d(h,m){let v=0,y=0,x=0,b=0,E=0;const _=m.matrixWorldInverse;for(let S=0,A=h.length;S<A;S++){const w=h[S];if(w.isDirectionalLight){const D=a.directional[v];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(_),v++}else if(w.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(_),x++}else if(w.isRectAreaLight){const D=a.rectArea[b];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),c.identity(),l.copy(w.matrixWorld),l.premultiply(_),c.extractRotation(l),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),b++}else if(w.isPointLight){const D=a.point[y];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(_),y++}else if(w.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(_),E++}}}return{setup:f,setupView:d,state:a}}function bM(t){const e=new d4(t),n=[],a=[];function s(m){h.camera=m,n.length=0,a.length=0}function l(m){n.push(m)}function c(m){a.push(m)}function f(){e.setup(n)}function d(m){e.setupView(n,m)}const h={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function h4(t){let e=new WeakMap;function n(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new bM(t),e.set(s,[f])):l>=c.length?(f=new bM(t),c.push(f)):f=c[l],f}function a(){e=new WeakMap}return{get:n,dispose:a}}const p4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m4=`uniform sampler2D shadow_pass;
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
}`,g4=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],v4=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],MM=new mn,xc=new ue,v0=new ue;function y4(t,e,n){let a=new AA;const s=new mt,l=new mt,c=new dn,f=new NO,d=new UO,h={},m=n.maxTextureSize,v={[Kr]:ui,[ui]:Kr,[sr]:sr},y=new Oa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:p4,fragmentShader:m4}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new da;b.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Hi(b,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yd;let S=this.type;this.render=function(F,P,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;this.type===SP&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yd);const O=t.getRenderTarget(),J=t.getActiveCubeFace(),G=t.getActiveMipmapLevel(),Q=t.state;Q.setBlending(or),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const te=S!==this.type;te&&P.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(K=>K.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,K=F.length;ee<K;ee++){const B=F[ee],z=B.shadow;if(z===void 0){ut("WebGLShadowMap:",B,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const ne=z.getFrameExtents();s.multiply(ne),l.copy(z.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/ne.x),s.x=l.x*ne.x,z.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/ne.y),s.y=l.y*ne.y,z.mapSize.y=l.y));const he=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=he,z.map===null||te===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ec){if(B.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ca(s.x,s.y,{format:tl,type:Pa,minFilter:An,magFilter:An,generateMipmaps:!1}),z.map.texture.name=B.name+".shadowMap",z.map.depthTexture=new Wc(s.x,s.y,sa),z.map.depthTexture.name=B.name+".shadowMapDepth",z.map.depthTexture.format=fr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Gn,z.map.depthTexture.magFilter=Gn}else B.isPointLight?(z.map=new NA(s.x),z.map.depthTexture=new wO(s.x,Ua)):(z.map=new ca(s.x,s.y),z.map.depthTexture=new Wc(s.x,s.y,Ua)),z.map.depthTexture.name=B.name+".shadowMap",z.map.depthTexture.format=fr,this.type===yd?(z.map.depthTexture.compareFunction=he?Qv:Zv,z.map.depthTexture.minFilter=An,z.map.depthTexture.magFilter=An):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Gn,z.map.depthTexture.magFilter=Gn);z.camera.updateProjectionMatrix()}const ve=z.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<ve;V++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,V),t.clear();else{V===0&&(t.setRenderTarget(z.map),t.clear());const X=z.getViewport(V);c.set(l.x*X.x,l.y*X.y,l.x*X.z,l.y*X.w),Q.viewport(c)}if(B.isPointLight){const X=z.camera,xe=z.matrix,we=B.distance||X.far;we!==X.far&&(X.far=we,X.updateProjectionMatrix()),xc.setFromMatrixPosition(B.matrixWorld),X.position.copy(xc),v0.copy(X.position),v0.add(g4[V]),X.up.copy(v4[V]),X.lookAt(v0),X.updateMatrixWorld(),xe.makeTranslation(-xc.x,-xc.y,-xc.z),MM.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),z._frustum.setFromProjectionMatrix(MM,X.coordinateSystem,X.reversedDepth)}else z.updateMatrices(B);a=z.getFrustum(),D(P,R,z.camera,B,this.type)}z.isPointLightShadow!==!0&&this.type===Ec&&A(z,R),z.needsUpdate=!1}S=this.type,_.needsUpdate=!1,t.setRenderTarget(O,J,G)};function A(F,P){const R=e.update(E);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ca(s.x,s.y,{format:tl,type:Pa})),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,t.setRenderTarget(F.mapPass),t.clear(),t.renderBufferDirect(P,null,R,y,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,t.setRenderTarget(F.map),t.clear(),t.renderBufferDirect(P,null,R,x,E,null)}function w(F,P,R,O){let J=null;const G=R.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)J=G;else if(J=R.isPointLight===!0?d:f,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=J.uuid,te=P.uuid;let ee=h[Q];ee===void 0&&(ee={},h[Q]=ee);let K=ee[te];K===void 0&&(K=J.clone(),ee[te]=K,P.addEventListener("dispose",C)),J=K}if(J.visible=P.visible,J.wireframe=P.wireframe,O===Ec?J.side=P.shadowSide!==null?P.shadowSide:P.side:J.side=P.shadowSide!==null?P.shadowSide:v[P.side],J.alphaMap=P.alphaMap,J.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,J.map=P.map,J.clipShadows=P.clipShadows,J.clippingPlanes=P.clippingPlanes,J.clipIntersection=P.clipIntersection,J.displacementMap=P.displacementMap,J.displacementScale=P.displacementScale,J.displacementBias=P.displacementBias,J.wireframeLinewidth=P.wireframeLinewidth,J.linewidth=P.linewidth,R.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const Q=t.properties.get(J);Q.light=R}return J}function D(F,P,R,O,J){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&J===Ec)&&(!F.frustumCulled||a.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ee=F.material;if(Array.isArray(ee)){const K=te.groups;for(let B=0,z=K.length;B<z;B++){const ne=K[B],he=ee[ne.materialIndex];if(he&&he.visible){const ve=w(F,he,O,J);F.onBeforeShadow(t,F,P,R,te,ve,ne),t.renderBufferDirect(R,null,te,ve,F,ne),F.onAfterShadow(t,F,P,R,te,ve,ne)}}}else if(ee.visible){const K=w(F,ee,O,J);F.onBeforeShadow(t,F,P,R,te,K,null),t.renderBufferDirect(R,null,te,K,F,null),F.onAfterShadow(t,F,P,R,te,K,null)}}const Q=F.children;for(let te=0,ee=Q.length;te<ee;te++)D(Q[te],P,R,O,J)}function C(F){F.target.removeEventListener("dispose",C);for(const R in h){const O=h[R],J=F.target.uuid;J in O&&(O[J].dispose(),delete O[J])}}}function x4(t,e){function n(){let Y=!1;const Ue=new dn;let Le=null;const We=new dn(0,0,0,0);return{setMask:function(Ae){Le!==Ae&&!Y&&(t.colorMask(Ae,Ae,Ae,Ae),Le=Ae)},setLocked:function(Ae){Y=Ae},setClear:function(Ae,ye,qe,ct,Xt){Xt===!0&&(Ae*=ct,ye*=ct,qe*=ct),Ue.set(Ae,ye,qe,ct),We.equals(Ue)===!1&&(t.clearColor(Ae,ye,qe,ct),We.copy(Ue))},reset:function(){Y=!1,Le=null,We.set(-1,0,0,0)}}}function a(){let Y=!1,Ue=!1,Le=null,We=null,Ae=null;return{setReversed:function(ye){if(Ue!==ye){const qe=e.get("EXT_clip_control");ye?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Ue=ye;const ct=Ae;Ae=null,this.setClear(ct)}},getReversed:function(){return Ue},setTest:function(ye){ye?Se(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(ye){Le!==ye&&!Y&&(t.depthMask(ye),Le=ye)},setFunc:function(ye){if(Ue&&(ye=tO[ye]),We!==ye){switch(ye){case ng:t.depthFunc(t.NEVER);break;case ig:t.depthFunc(t.ALWAYS);break;case ag:t.depthFunc(t.LESS);break;case Jo:t.depthFunc(t.LEQUAL);break;case rg:t.depthFunc(t.EQUAL);break;case sg:t.depthFunc(t.GEQUAL);break;case og:t.depthFunc(t.GREATER);break;case lg:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}We=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){Ae!==ye&&(Ae=ye,Ue&&(ye=1-ye),t.clearDepth(ye))},reset:function(){Y=!1,Le=null,We=null,Ae=null,Ue=!1}}}function s(){let Y=!1,Ue=null,Le=null,We=null,Ae=null,ye=null,qe=null,ct=null,Xt=null;return{setTest:function(Lt){Y||(Lt?Se(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(Lt){Ue!==Lt&&!Y&&(t.stencilMask(Lt),Ue=Lt)},setFunc:function(Lt,Yn,ki){(Le!==Lt||We!==Yn||Ae!==ki)&&(t.stencilFunc(Lt,Yn,ki),Le=Lt,We=Yn,Ae=ki)},setOp:function(Lt,Yn,ki){(ye!==Lt||qe!==Yn||ct!==ki)&&(t.stencilOp(Lt,Yn,ki),ye=Lt,qe=Yn,ct=ki)},setLocked:function(Lt){Y=Lt},setClear:function(Lt){Xt!==Lt&&(t.clearStencil(Lt),Xt=Lt)},reset:function(){Y=!1,Ue=null,Le=null,We=null,Ae=null,ye=null,qe=null,ct=null,Xt=null}}}const l=new n,c=new a,f=new s,d=new WeakMap,h=new WeakMap;let m={},v={},y=new WeakMap,x=[],b=null,E=!1,_=null,S=null,A=null,w=null,D=null,C=null,F=null,P=new Vt(0,0,0),R=0,O=!1,J=null,G=null,Q=null,te=null,ee=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,z=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(ne)[1]),B=z>=1):ne.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),B=z>=2);let he=null,ve={};const V=t.getParameter(t.SCISSOR_BOX),X=t.getParameter(t.VIEWPORT),xe=new dn().fromArray(V),we=new dn().fromArray(X);function Fe(Y,Ue,Le,We){const Ae=new Uint8Array(4),ye=t.createTexture();t.bindTexture(Y,ye),t.texParameteri(Y,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(Y,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Le;qe++)Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?t.texImage3D(Ue,0,t.RGBA,1,1,We,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Ue+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return ye}const ae={};ae[t.TEXTURE_2D]=Fe(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Fe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Fe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Fe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Se(t.DEPTH_TEST),c.setFunc(Jo),ot(!1),Jt(T1),Se(t.CULL_FACE),it(or);function Se(Y){m[Y]!==!0&&(t.enable(Y),m[Y]=!0)}function ge(Y){m[Y]!==!1&&(t.disable(Y),m[Y]=!1)}function Ce(Y,Ue){return v[Y]!==Ue?(t.bindFramebuffer(Y,Ue),v[Y]=Ue,Y===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=Ue),Y===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=Ue),!0):!1}function De(Y,Ue){let Le=x,We=!1;if(Y){Le=y.get(Ue),Le===void 0&&(Le=[],y.set(Ue,Le));const Ae=Y.textures;if(Le.length!==Ae.length||Le[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,qe=Ae.length;ye<qe;ye++)Le[ye]=t.COLOR_ATTACHMENT0+ye;Le.length=Ae.length,We=!0}}else Le[0]!==t.BACK&&(Le[0]=t.BACK,We=!0);We&&t.drawBuffers(Le)}function He(Y){return b!==Y?(t.useProgram(Y),b=Y,!0):!1}const dt={[Rs]:t.FUNC_ADD,[MP]:t.FUNC_SUBTRACT,[EP]:t.FUNC_REVERSE_SUBTRACT};dt[TP]=t.MIN,dt[AP]=t.MAX;const tt={[wP]:t.ZERO,[RP]:t.ONE,[CP]:t.SRC_COLOR,[eg]:t.SRC_ALPHA,[OP]:t.SRC_ALPHA_SATURATE,[UP]:t.DST_COLOR,[LP]:t.DST_ALPHA,[DP]:t.ONE_MINUS_SRC_COLOR,[tg]:t.ONE_MINUS_SRC_ALPHA,[PP]:t.ONE_MINUS_DST_COLOR,[NP]:t.ONE_MINUS_DST_ALPHA,[FP]:t.CONSTANT_COLOR,[IP]:t.ONE_MINUS_CONSTANT_COLOR,[BP]:t.CONSTANT_ALPHA,[zP]:t.ONE_MINUS_CONSTANT_ALPHA};function it(Y,Ue,Le,We,Ae,ye,qe,ct,Xt,Lt){if(Y===or){E===!0&&(ge(t.BLEND),E=!1);return}if(E===!1&&(Se(t.BLEND),E=!0),Y!==bP){if(Y!==_||Lt!==O){if((S!==Rs||D!==Rs)&&(t.blendEquation(t.FUNC_ADD),S=Rs,D=Rs),Lt)switch(Y){case $o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case J0:t.blendFunc(t.ONE,t.ONE);break;case A1:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case w1:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case $o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case J0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case A1:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w1:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",Y);break}A=null,w=null,C=null,F=null,P.set(0,0,0),R=0,_=Y,O=Lt}return}Ae=Ae||Ue,ye=ye||Le,qe=qe||We,(Ue!==S||Ae!==D)&&(t.blendEquationSeparate(dt[Ue],dt[Ae]),S=Ue,D=Ae),(Le!==A||We!==w||ye!==C||qe!==F)&&(t.blendFuncSeparate(tt[Le],tt[We],tt[ye],tt[qe]),A=Le,w=We,C=ye,F=qe),(ct.equals(P)===!1||Xt!==R)&&(t.blendColor(ct.r,ct.g,ct.b,Xt),P.copy(ct),R=Xt),_=Y,O=!1}function St(Y,Ue){Y.side===sr?ge(t.CULL_FACE):Se(t.CULL_FACE);let Le=Y.side===ui;Ue&&(Le=!Le),ot(Le),Y.blending===$o&&Y.transparent===!1?it(or):it(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const We=Y.stencilWrite;f.setTest(We),We&&(f.setMask(Y.stencilWriteMask),f.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),f.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Ht(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function ot(Y){J!==Y&&(Y?t.frontFace(t.CW):t.frontFace(t.CCW),J=Y)}function Jt(Y){Y!==xP?(Se(t.CULL_FACE),Y!==G&&(Y===T1?t.cullFace(t.BACK):Y===_P?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),G=Y}function W(Y){Y!==Q&&(B&&t.lineWidth(Y),Q=Y)}function Ht(Y,Ue,Le){Y?(Se(t.POLYGON_OFFSET_FILL),(te!==Ue||ee!==Le)&&(te=Ue,ee=Le,c.getReversed()&&(Ue=-Ue),t.polygonOffset(Ue,Le))):ge(t.POLYGON_OFFSET_FILL)}function Mt(Y){Y?Se(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function Et(Y){Y===void 0&&(Y=t.TEXTURE0+K-1),he!==Y&&(t.activeTexture(Y),he=Y)}function Ee(Y,Ue,Le){Le===void 0&&(he===null?Le=t.TEXTURE0+K-1:Le=he);let We=ve[Le];We===void 0&&(We={type:void 0,texture:void 0},ve[Le]=We),(We.type!==Y||We.texture!==Ue)&&(he!==Le&&(t.activeTexture(Le),he=Le),t.bindTexture(Y,Ue||ae[Y]),We.type=Y,We.texture=Ue)}function U(){const Y=ve[he];Y!==void 0&&Y.type!==void 0&&(t.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function H(){try{t.compressedTexImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function $(){try{t.texSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function de(){try{t.texSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function fe(){try{t.compressedTexSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Ne(){try{t.texStorage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Je(){try{t.texStorage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function rt(){try{t.texImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Re(){try{t.texImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Te(Y){xe.equals(Y)===!1&&(t.scissor(Y.x,Y.y,Y.z,Y.w),xe.copy(Y))}function Ge(Y){we.equals(Y)===!1&&(t.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Ve(Y,Ue){let Le=h.get(Ue);Le===void 0&&(Le=new WeakMap,h.set(Ue,Le));let We=Le.get(Y);We===void 0&&(We=t.getUniformBlockIndex(Ue,Y.name),Le.set(Y,We))}function ke(Y,Ue){const We=h.get(Ue).get(Y);d.get(Ue)!==We&&(t.uniformBlockBinding(Ue,We,Y.__bindingPointIndex),d.set(Ue,We))}function vt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),c.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),m={},he=null,ve={},v={},y=new WeakMap,x=[],b=null,E=!1,_=null,S=null,A=null,w=null,D=null,C=null,F=null,P=new Vt(0,0,0),R=0,O=!1,J=null,G=null,Q=null,te=null,ee=null,xe.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Se,disable:ge,bindFramebuffer:Ce,drawBuffers:De,useProgram:He,setBlending:it,setMaterial:St,setFlipSided:ot,setCullFace:Jt,setLineWidth:W,setPolygonOffset:Ht,setScissorTest:Mt,activeTexture:Et,bindTexture:Ee,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:rt,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:ke,texStorage2D:Ne,texStorage3D:Je,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ie,scissor:Te,viewport:Ge,reset:vt}}function _4(t,e,n,a,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new mt,m=new WeakMap;let v;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,M){return x?new OffscreenCanvas(U,M):zd("canvas")}function E(U,M,H){let $=1;const de=Ee(U);if((de.width>H||de.height>H)&&($=H/Math.max(de.width,de.height)),$<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor($*de.width),Ie=Math.floor($*de.height);v===void 0&&(v=b(fe,Ie));const Ne=M?b(fe,Ie):v;return Ne.width=fe,Ne.height=Ie,Ne.getContext("2d").drawImage(U,0,0,fe,Ie),ut("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+fe+"x"+Ie+")."),Ne}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function _(U){return U.generateMipmaps}function S(U){t.generateMipmap(U)}function A(U){return U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?t.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function w(U,M,H,$,de=!1){if(U!==null){if(t[U]!==void 0)return t[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=M;if(M===t.RED&&(H===t.FLOAT&&(fe=t.R32F),H===t.HALF_FLOAT&&(fe=t.R16F),H===t.UNSIGNED_BYTE&&(fe=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(fe=t.R8UI),H===t.UNSIGNED_SHORT&&(fe=t.R16UI),H===t.UNSIGNED_INT&&(fe=t.R32UI),H===t.BYTE&&(fe=t.R8I),H===t.SHORT&&(fe=t.R16I),H===t.INT&&(fe=t.R32I)),M===t.RG&&(H===t.FLOAT&&(fe=t.RG32F),H===t.HALF_FLOAT&&(fe=t.RG16F),H===t.UNSIGNED_BYTE&&(fe=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(fe=t.RG8UI),H===t.UNSIGNED_SHORT&&(fe=t.RG16UI),H===t.UNSIGNED_INT&&(fe=t.RG32UI),H===t.BYTE&&(fe=t.RG8I),H===t.SHORT&&(fe=t.RG16I),H===t.INT&&(fe=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(fe=t.RGB8UI),H===t.UNSIGNED_SHORT&&(fe=t.RGB16UI),H===t.UNSIGNED_INT&&(fe=t.RGB32UI),H===t.BYTE&&(fe=t.RGB8I),H===t.SHORT&&(fe=t.RGB16I),H===t.INT&&(fe=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(fe=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(fe=t.RGBA16UI),H===t.UNSIGNED_INT&&(fe=t.RGBA32UI),H===t.BYTE&&(fe=t.RGBA8I),H===t.SHORT&&(fe=t.RGBA16I),H===t.INT&&(fe=t.RGBA32I)),M===t.RGB&&(H===t.UNSIGNED_INT_5_9_9_9_REV&&(fe=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(fe=t.R11F_G11F_B10F)),M===t.RGBA){const Ie=de?Id:Nt.getTransfer($);H===t.FLOAT&&(fe=t.RGBA32F),H===t.HALF_FLOAT&&(fe=t.RGBA16F),H===t.UNSIGNED_BYTE&&(fe=Ie===Yt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(U,M){let H;return U?M===null||M===Ua||M===kc?H=t.DEPTH24_STENCIL8:M===sa?H=t.DEPTH32F_STENCIL8:M===Gc&&(H=t.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ua||M===kc?H=t.DEPTH_COMPONENT24:M===sa?H=t.DEPTH_COMPONENT32F:M===Gc&&(H=t.DEPTH_COMPONENT16),H}function C(U,M){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Gn&&U.minFilter!==An?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function F(U){const M=U.target;M.removeEventListener("dispose",F),R(M),M.isVideoTexture&&m.delete(M)}function P(U){const M=U.target;M.removeEventListener("dispose",P),J(M)}function R(U){const M=a.get(U);if(M.__webglInit===void 0)return;const H=U.source,$=y.get(H);if($){const de=$[M.__cacheKey];de.usedTimes--,de.usedTimes===0&&O(U),Object.keys($).length===0&&y.delete(H)}a.remove(U)}function O(U){const M=a.get(U);t.deleteTexture(M.__webglTexture);const H=U.source,$=y.get(H);delete $[M.__cacheKey],c.memory.textures--}function J(U){const M=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let de=0;de<M.__webglFramebuffer[$].length;de++)t.deleteFramebuffer(M.__webglFramebuffer[$][de]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=U.textures;for(let $=0,de=H.length;$<de;$++){const fe=a.get(H[$]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),c.memory.textures--),a.remove(H[$])}a.remove(U)}let G=0;function Q(){G=0}function te(){const U=G;return U>=s.maxTextures&&ut("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),G+=1,U}function ee(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function K(U,M){const H=a.get(U);if(U.isVideoTexture&&Mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const $=U.image;if($===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(H,U,M);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function B(U,M){const H=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){ae(H,U,M);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function z(U,M){const H=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){ae(H,U,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function ne(U,M){const H=a.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){Se(H,U,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const he={[cg]:t.REPEAT,[Ei]:t.CLAMP_TO_EDGE,[ug]:t.MIRRORED_REPEAT},ve={[Gn]:t.NEAREST,[GP]:t.NEAREST_MIPMAP_NEAREST,[Cf]:t.NEAREST_MIPMAP_LINEAR,[An]:t.LINEAR,[Vm]:t.LINEAR_MIPMAP_NEAREST,[Ns]:t.LINEAR_MIPMAP_LINEAR},V={[jP]:t.NEVER,[ZP]:t.ALWAYS,[qP]:t.LESS,[Zv]:t.LEQUAL,[YP]:t.EQUAL,[Qv]:t.GEQUAL,[$P]:t.GREATER,[KP]:t.NOTEQUAL};function X(U,M){if(M.type===sa&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===An||M.magFilter===Vm||M.magFilter===Cf||M.magFilter===Ns||M.minFilter===An||M.minFilter===Vm||M.minFilter===Cf||M.minFilter===Ns)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,he[M.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,he[M.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,he[M.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,ve[M.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,V[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==Cf&&M.minFilter!==Ns||M.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function xe(U,M){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",F));const $=M.source;let de=y.get($);de===void 0&&(de={},y.set($,de));const fe=ee(M);if(fe!==U.__cacheKey){de[fe]===void 0&&(de[fe]={texture:t.createTexture(),usedTimes:0},c.memory.textures++,H=!0),de[fe].usedTimes++;const Ie=de[U.__cacheKey];Ie!==void 0&&(de[U.__cacheKey].usedTimes--,Ie.usedTimes===0&&O(M)),U.__cacheKey=fe,U.__webglTexture=de[fe].texture}return H}function we(U,M,H){return Math.floor(Math.floor(U/H)/M)}function Fe(U,M,H,$){const fe=U.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,H,$,M.data);else{fe.sort((Re,Te)=>Re.start-Te.start);let Ie=0;for(let Re=1;Re<fe.length;Re++){const Te=fe[Ie],Ge=fe[Re],Ve=Te.start+Te.count,ke=we(Ge.start,M.width,4),vt=we(Te.start,M.width,4);Ge.start<=Ve+1&&ke===vt&&we(Ge.start+Ge.count-1,M.width,4)===ke?Te.count=Math.max(Te.count,Ge.start+Ge.count-Te.start):(++Ie,fe[Ie]=Ge)}fe.length=Ie+1;const Ne=t.getParameter(t.UNPACK_ROW_LENGTH),Je=t.getParameter(t.UNPACK_SKIP_PIXELS),rt=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Re=0,Te=fe.length;Re<Te;Re++){const Ge=fe[Re],Ve=Math.floor(Ge.start/4),ke=Math.ceil(Ge.count/4),vt=Ve%M.width,Y=Math.floor(Ve/M.width),Ue=ke,Le=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,vt),t.pixelStorei(t.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(t.TEXTURE_2D,0,vt,Y,Ue,Le,H,$,M.data)}U.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(t.UNPACK_SKIP_ROWS,rt)}}function ae(U,M,H){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const de=xe(U,M),fe=M.source;n.bindTexture($,U.__webglTexture,t.TEXTURE0+H);const Ie=a.get(fe);if(fe.version!==Ie.__version||de===!0){n.activeTexture(t.TEXTURE0+H);const Ne=Nt.getPrimaries(Nt.workingColorSpace),Je=M.colorSpace===qr?null:Nt.getPrimaries(M.colorSpace),rt=M.colorSpace===qr||Ne===Je?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Re=E(M.image,!1,s.maxTextureSize);Re=Et(M,Re);const Te=l.convert(M.format,M.colorSpace),Ge=l.convert(M.type);let Ve=w(M.internalFormat,Te,Ge,M.colorSpace,M.isVideoTexture);X($,M);let ke;const vt=M.mipmaps,Y=M.isVideoTexture!==!0,Ue=Ie.__version===void 0||de===!0,Le=fe.dataReady,We=C(M,Re);if(M.isDepthTexture)Ve=D(M.format===Us,M.type),Ue&&(Y?n.texStorage2D(t.TEXTURE_2D,1,Ve,Re.width,Re.height):n.texImage2D(t.TEXTURE_2D,0,Ve,Re.width,Re.height,0,Te,Ge,null));else if(M.isDataTexture)if(vt.length>0){Y&&Ue&&n.texStorage2D(t.TEXTURE_2D,We,Ve,vt[0].width,vt[0].height);for(let Ae=0,ye=vt.length;Ae<ye;Ae++)ke=vt[Ae],Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Ae,0,0,ke.width,ke.height,Te,Ge,ke.data):n.texImage2D(t.TEXTURE_2D,Ae,Ve,ke.width,ke.height,0,Te,Ge,ke.data);M.generateMipmaps=!1}else Y?(Ue&&n.texStorage2D(t.TEXTURE_2D,We,Ve,Re.width,Re.height),Le&&Fe(M,Re,Te,Ge)):n.texImage2D(t.TEXTURE_2D,0,Ve,Re.width,Re.height,0,Te,Ge,Re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Y&&Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Ve,vt[0].width,vt[0].height,Re.depth);for(let Ae=0,ye=vt.length;Ae<ye;Ae++)if(ke=vt[Ae],M.format!==zi)if(Te!==null)if(Y){if(Le)if(M.layerUpdates.size>0){const qe=eM(ke.width,ke.height,M.format,M.type);for(const ct of M.layerUpdates){const Xt=ke.data.subarray(ct*qe/ke.data.BYTES_PER_ELEMENT,(ct+1)*qe/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ae,0,0,ct,ke.width,ke.height,1,Te,Xt)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ae,0,0,0,ke.width,ke.height,Re.depth,Te,ke.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ae,Ve,ke.width,ke.height,Re.depth,0,ke.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Le&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ae,0,0,0,ke.width,ke.height,Re.depth,Te,Ge,ke.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ae,Ve,ke.width,ke.height,Re.depth,0,Te,Ge,ke.data)}else{Y&&Ue&&n.texStorage2D(t.TEXTURE_2D,We,Ve,vt[0].width,vt[0].height);for(let Ae=0,ye=vt.length;Ae<ye;Ae++)ke=vt[Ae],M.format!==zi?Te!==null?Y?Le&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ae,0,0,ke.width,ke.height,Te,ke.data):n.compressedTexImage2D(t.TEXTURE_2D,Ae,Ve,ke.width,ke.height,0,ke.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Ae,0,0,ke.width,ke.height,Te,Ge,ke.data):n.texImage2D(t.TEXTURE_2D,Ae,Ve,ke.width,ke.height,0,Te,Ge,ke.data)}else if(M.isDataArrayTexture)if(Y){if(Ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Ve,Re.width,Re.height,Re.depth),Le)if(M.layerUpdates.size>0){const Ae=eM(Re.width,Re.height,M.format,M.type);for(const ye of M.layerUpdates){const qe=Re.data.subarray(ye*Ae/Re.data.BYTES_PER_ELEMENT,(ye+1)*Ae/Re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ye,Re.width,Re.height,1,Te,Ge,qe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Re.width,Re.height,Re.depth,Te,Ge,Re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,Re.width,Re.height,Re.depth,0,Te,Ge,Re.data);else if(M.isData3DTexture)Y?(Ue&&n.texStorage3D(t.TEXTURE_3D,We,Ve,Re.width,Re.height,Re.depth),Le&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Re.width,Re.height,Re.depth,Te,Ge,Re.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,Re.width,Re.height,Re.depth,0,Te,Ge,Re.data);else if(M.isFramebufferTexture){if(Ue)if(Y)n.texStorage2D(t.TEXTURE_2D,We,Ve,Re.width,Re.height);else{let Ae=Re.width,ye=Re.height;for(let qe=0;qe<We;qe++)n.texImage2D(t.TEXTURE_2D,qe,Ve,Ae,ye,0,Te,Ge,null),Ae>>=1,ye>>=1}}else if(vt.length>0){if(Y&&Ue){const Ae=Ee(vt[0]);n.texStorage2D(t.TEXTURE_2D,We,Ve,Ae.width,Ae.height)}for(let Ae=0,ye=vt.length;Ae<ye;Ae++)ke=vt[Ae],Y?Le&&n.texSubImage2D(t.TEXTURE_2D,Ae,0,0,Te,Ge,ke):n.texImage2D(t.TEXTURE_2D,Ae,Ve,Te,Ge,ke);M.generateMipmaps=!1}else if(Y){if(Ue){const Ae=Ee(Re);n.texStorage2D(t.TEXTURE_2D,We,Ve,Ae.width,Ae.height)}Le&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ge,Re)}else n.texImage2D(t.TEXTURE_2D,0,Ve,Te,Ge,Re);_(M)&&S($),Ie.__version=fe.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Se(U,M,H){if(M.image.length!==6)return;const $=xe(U,M),de=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+H);const fe=a.get(de);if(de.version!==fe.__version||$===!0){n.activeTexture(t.TEXTURE0+H);const Ie=Nt.getPrimaries(Nt.workingColorSpace),Ne=M.colorSpace===qr?null:Nt.getPrimaries(M.colorSpace),Je=M.colorSpace===qr||Ie===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const rt=M.isCompressedTexture||M.image[0].isCompressedTexture,Re=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let ye=0;ye<6;ye++)!rt&&!Re?Te[ye]=E(M.image[ye],!0,s.maxCubemapSize):Te[ye]=Re?M.image[ye].image:M.image[ye],Te[ye]=Et(M,Te[ye]);const Ge=Te[0],Ve=l.convert(M.format,M.colorSpace),ke=l.convert(M.type),vt=w(M.internalFormat,Ve,ke,M.colorSpace),Y=M.isVideoTexture!==!0,Ue=fe.__version===void 0||$===!0,Le=de.dataReady;let We=C(M,Ge);X(t.TEXTURE_CUBE_MAP,M);let Ae;if(rt){Y&&Ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,We,vt,Ge.width,Ge.height);for(let ye=0;ye<6;ye++){Ae=Te[ye].mipmaps;for(let qe=0;qe<Ae.length;qe++){const ct=Ae[qe];M.format!==zi?Ve!==null?Y?Le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,ct.width,ct.height,Ve,ct.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,vt,ct.width,ct.height,0,ct.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,0,0,ct.width,ct.height,Ve,ke,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe,vt,ct.width,ct.height,0,Ve,ke,ct.data)}}}else{if(Ae=M.mipmaps,Y&&Ue){Ae.length>0&&We++;const ye=Ee(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,We,vt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Re){Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Te[ye].width,Te[ye].height,Ve,ke,Te[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,Te[ye].width,Te[ye].height,0,Ve,ke,Te[ye].data);for(let qe=0;qe<Ae.length;qe++){const Xt=Ae[qe].image[ye].image;Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,Xt.width,Xt.height,Ve,ke,Xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,vt,Xt.width,Xt.height,0,Ve,ke,Xt.data)}}else{Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ve,ke,Te[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,vt,Ve,ke,Te[ye]);for(let qe=0;qe<Ae.length;qe++){const ct=Ae[qe];Y?Le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,0,0,Ve,ke,ct.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,qe+1,vt,Ve,ke,ct.image[ye])}}}_(M)&&S(t.TEXTURE_CUBE_MAP),fe.__version=de.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ge(U,M,H,$,de,fe){const Ie=l.convert(H.format,H.colorSpace),Ne=l.convert(H.type),Je=w(H.internalFormat,Ie,Ne,H.colorSpace),rt=a.get(M),Re=a.get(H);if(Re.__renderTarget=M,!rt.__hasExternalTextures){const Te=Math.max(1,M.width>>fe),Ge=Math.max(1,M.height>>fe);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,fe,Je,Te,Ge,M.depth,0,Ie,Ne,null):n.texImage2D(de,fe,Je,Te,Ge,0,Ie,Ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),Ht(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,de,Re.__webglTexture,0,W(M)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,de,Re.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(U,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,U),M.depthBuffer){const $=M.depthTexture,de=$&&$.isDepthTexture?$.type:null,fe=D(M.stencilBuffer,de),Ie=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Ht(M)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W(M),fe,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,W(M),fe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,fe,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,U)}else{const $=M.textures;for(let de=0;de<$.length;de++){const fe=$[de],Ie=l.convert(fe.format,fe.colorSpace),Ne=l.convert(fe.type),Je=w(fe.internalFormat,Ie,Ne,fe.colorSpace);Ht(M)?f.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,W(M),Je,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,W(M),Je,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Je,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(U,M,H){const $=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=a.get(M.depthTexture);if(de.__renderTarget=M,(!de.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$){if(de.__webglInit===void 0&&(de.__webglInit=!0,M.depthTexture.addEventListener("dispose",F)),de.__webglTexture===void 0){de.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),X(t.TEXTURE_CUBE_MAP,M.depthTexture);const rt=l.convert(M.depthTexture.format),Re=l.convert(M.depthTexture.type);let Te;M.depthTexture.format===fr?Te=t.DEPTH_COMPONENT24:M.depthTexture.format===Us&&(Te=t.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Te,M.width,M.height,0,rt,Re,null)}}else K(M.depthTexture,0);const fe=de.__webglTexture,Ie=W(M),Ne=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,Je=M.depthTexture.format===Us?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===fr)Ht(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Je,Ne,fe,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,Je,Ne,fe,0);else if(M.depthTexture.format===Us)Ht(M)?f.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Je,Ne,fe,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,Je,Ne,fe,0);else throw new Error("Unknown depthTexture format")}function He(U){const M=a.get(U),H=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const $=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const de=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",de)};$.addEventListener("dispose",de),M.__depthDisposeCallback=de}M.__boundDepthTexture=$}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let $=0;$<6;$++)De(M.__webglFramebuffer[$],U,$);else{const $=U.texture.mipmaps;$&&$.length>0?De(M.__webglFramebuffer[0],U,0):De(M.__webglFramebuffer,U,0)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),Ce(M.__webglDepthbuffer[$],U,!1);else{const de=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,fe)}}else{const $=U.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ce(M.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dt(U,M,H){const $=a.get(U);M!==void 0&&ge($.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&He(U)}function tt(U){const M=U.texture,H=a.get(U),$=a.get(M);U.addEventListener("dispose",P);const de=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Ie=de.length>1;if(Ie||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,c.memory.textures++),fe){H.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[Ne]=[];for(let Je=0;Je<M.mipmaps.length;Je++)H.__webglFramebuffer[Ne][Je]=t.createFramebuffer()}else H.__webglFramebuffer[Ne]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)H.__webglFramebuffer[Ne]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Ne=0,Je=de.length;Ne<Je;Ne++){const rt=a.get(de[Ne]);rt.__webglTexture===void 0&&(rt.__webglTexture=t.createTexture(),c.memory.textures++)}if(U.samples>0&&Ht(U)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ne=0;Ne<de.length;Ne++){const Je=de[Ne];H.__webglColorRenderbuffer[Ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[Ne]);const rt=l.convert(Je.format,Je.colorSpace),Re=l.convert(Je.type),Te=w(Je.internalFormat,rt,Re,Je.colorSpace,U.isXRRenderTarget===!0),Ge=W(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,Te,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,H.__webglColorRenderbuffer[Ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Ce(H.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),X(t.TEXTURE_CUBE_MAP,M);for(let Ne=0;Ne<6;Ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let Je=0;Je<M.mipmaps.length;Je++)ge(H.__webglFramebuffer[Ne][Je],U,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Je);else ge(H.__webglFramebuffer[Ne],U,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);_(M)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Ne=0,Je=de.length;Ne<Je;Ne++){const rt=de[Ne],Re=a.get(rt);let Te=t.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,Re.__webglTexture),X(Te,rt),ge(H.__webglFramebuffer,U,rt,t.COLOR_ATTACHMENT0+Ne,Te,0),_(rt)&&S(Te)}n.unbindTexture()}else{let Ne=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ne,$.__webglTexture),X(Ne,M),M.mipmaps&&M.mipmaps.length>0)for(let Je=0;Je<M.mipmaps.length;Je++)ge(H.__webglFramebuffer[Je],U,M,t.COLOR_ATTACHMENT0,Ne,Je);else ge(H.__webglFramebuffer,U,M,t.COLOR_ATTACHMENT0,Ne,0);_(M)&&S(Ne),n.unbindTexture()}U.depthBuffer&&He(U)}function it(U){const M=U.textures;for(let H=0,$=M.length;H<$;H++){const de=M[H];if(_(de)){const fe=A(U),Ie=a.get(de).__webglTexture;n.bindTexture(fe,Ie),S(fe),n.unbindTexture()}}}const St=[],ot=[];function Jt(U){if(U.samples>0){if(Ht(U)===!1){const M=U.textures,H=U.width,$=U.height;let de=t.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=a.get(U),Ne=M.length>1;if(Ne)for(let rt=0;rt<M.length;rt++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Je=U.texture.mipmaps;Je&&Je.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[rt]);const Re=a.get(M[rt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,H,$,0,0,H,$,de,t.NEAREST),d===!0&&(St.length=0,ot.length=0,St.push(t.COLOR_ATTACHMENT0+rt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(St.push(fe),ot.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ne)for(let rt=0;rt<M.length;rt++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[rt]);const Re=a.get(M[rt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+rt,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const M=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function W(U){return Math.min(s.maxSamples,U.samples)}function Ht(U){const M=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Mt(U){const M=c.render.frame;m.get(U)!==M&&(m.set(U,M),U.update())}function Et(U,M){const H=U.colorSpace,$=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==nl&&H!==qr&&(Nt.getTransfer(H)===Yt?($!==zi||de!==Ii)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",H)),M}function Ee(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=Q,this.setTexture2D=K,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=ne,this.rebindTextures=dt,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function S4(t,e){function n(a,s=qr){let l;const c=Nt.getTransfer(s);if(a===Ii)return t.UNSIGNED_BYTE;if(a===jv)return t.UNSIGNED_SHORT_4_4_4_4;if(a===qv)return t.UNSIGNED_SHORT_5_5_5_1;if(a===dA)return t.UNSIGNED_INT_5_9_9_9_REV;if(a===hA)return t.UNSIGNED_INT_10F_11F_11F_REV;if(a===uA)return t.BYTE;if(a===fA)return t.SHORT;if(a===Gc)return t.UNSIGNED_SHORT;if(a===Xv)return t.INT;if(a===Ua)return t.UNSIGNED_INT;if(a===sa)return t.FLOAT;if(a===Pa)return t.HALF_FLOAT;if(a===pA)return t.ALPHA;if(a===mA)return t.RGB;if(a===zi)return t.RGBA;if(a===fr)return t.DEPTH_COMPONENT;if(a===Us)return t.DEPTH_STENCIL;if(a===gA)return t.RED;if(a===Yv)return t.RED_INTEGER;if(a===tl)return t.RG;if(a===$v)return t.RG_INTEGER;if(a===Kv)return t.RGBA_INTEGER;if(a===xd||a===_d||a===Sd||a===bd)if(c===Yt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===xd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===_d)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Sd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===bd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===xd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===_d)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Sd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===bd)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===fg||a===dg||a===hg||a===pg)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===fg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===dg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===hg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===pg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===mg||a===gg||a===vg||a===yg||a===xg||a===_g||a===Sg)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===mg||a===gg)return c===Yt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===vg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===yg)return l.COMPRESSED_R11_EAC;if(a===xg)return l.COMPRESSED_SIGNED_R11_EAC;if(a===_g)return l.COMPRESSED_RG11_EAC;if(a===Sg)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===bg||a===Mg||a===Eg||a===Tg||a===Ag||a===wg||a===Rg||a===Cg||a===Dg||a===Lg||a===Ng||a===Ug||a===Pg||a===Og)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===bg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Mg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Eg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Tg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ag)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===wg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Rg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Dg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Lg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Ng)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ug)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pg)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Og)return c===Yt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Fg||a===Ig||a===Bg)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Fg)return c===Yt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Ig)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Bg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===zg||a===Vg||a===Hg||a===Gg)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===zg)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Vg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Gg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===kc?t.UNSIGNED_INT_24_8:t[a]!==void 0?t[a]:null}return{convert:n}}const b4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M4=`
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

}`;class E4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new RA(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Oa({vertexShader:b4,fragmentShader:M4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hi(new Is(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T4 extends dl{constructor(e,n){super();const a=this;let s=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,v=null,y=null,x=null,b=null;const E=typeof XRWebGLBinding<"u",_=new E4,S={},A=n.getContextAttributes();let w=null,D=null;const C=[],F=[],P=new mt;let R=null;const O=new ia;O.viewport=new dn;const J=new ia;J.viewport=new dn;const G=[O,J],Q=new OO;let te=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Se=C[ae];return Se===void 0&&(Se=new Ym,C[ae]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ae){let Se=C[ae];return Se===void 0&&(Se=new Ym,C[ae]=Se),Se.getGripSpace()},this.getHand=function(ae){let Se=C[ae];return Se===void 0&&(Se=new Ym,C[ae]=Se),Se.getHandSpace()};function K(ae){const Se=F.indexOf(ae.inputSource);if(Se===-1)return;const ge=C[Se];ge!==void 0&&(ge.update(ae.inputSource,ae.frame,h||c),ge.dispatchEvent({type:ae.type,data:ae.inputSource}))}function B(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",z);for(let ae=0;ae<C.length;ae++){const Se=F[ae];Se!==null&&(F[ae]=null,C[ae].disconnect(Se))}te=null,ee=null,_.reset();for(const ae in S)delete S[ae];e.setRenderTarget(w),x=null,y=null,v=null,s=null,D=null,Fe.stop(),a.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,a.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,a.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(s,n)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",B),s.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ce=null,De=null;A.depth&&(De=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ge=A.stencil?Us:fr,Ce=A.stencil?kc:Ua);const He={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(He),s.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),D=new ca(y.textureWidth,y.textureHeight,{format:zi,type:Ii,depthTexture:new Wc(y.textureWidth,y.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ge={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,ge),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ca(x.framebufferWidth,x.framebufferHeight,{format:zi,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(f),Fe.setContext(s),Fe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(ae){for(let Se=0;Se<ae.removed.length;Se++){const ge=ae.removed[Se],Ce=F.indexOf(ge);Ce>=0&&(F[Ce]=null,C[Ce].disconnect(ge))}for(let Se=0;Se<ae.added.length;Se++){const ge=ae.added[Se];let Ce=F.indexOf(ge);if(Ce===-1){for(let He=0;He<C.length;He++)if(He>=F.length){F.push(ge),Ce=He;break}else if(F[He]===null){F[He]=ge,Ce=He;break}if(Ce===-1)break}const De=C[Ce];De&&De.connect(ge)}}const ne=new ue,he=new ue;function ve(ae,Se,ge){ne.setFromMatrixPosition(Se.matrixWorld),he.setFromMatrixPosition(ge.matrixWorld);const Ce=ne.distanceTo(he),De=Se.projectionMatrix.elements,He=ge.projectionMatrix.elements,dt=De[14]/(De[10]-1),tt=De[14]/(De[10]+1),it=(De[9]+1)/De[5],St=(De[9]-1)/De[5],ot=(De[8]-1)/De[0],Jt=(He[8]+1)/He[0],W=dt*ot,Ht=dt*Jt,Mt=Ce/(-ot+Jt),Et=Mt*-ot;if(Se.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Et),ae.translateZ(Mt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),De[10]===-1)ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ee=dt+Mt,U=tt+Mt,M=W-Et,H=Ht+(Ce-Et),$=it*tt/U*Ee,de=St*tt/U*Ee;ae.projectionMatrix.makePerspective(M,H,$,de,Ee,U),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function V(ae,Se){Se===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Se.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let Se=ae.near,ge=ae.far;_.texture!==null&&(_.depthNear>0&&(Se=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),Q.near=J.near=O.near=Se,Q.far=J.far=O.far=ge,(te!==Q.near||ee!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),te=Q.near,ee=Q.far),Q.layers.mask=ae.layers.mask|6,O.layers.mask=Q.layers.mask&-5,J.layers.mask=Q.layers.mask&-3;const Ce=ae.parent,De=Q.cameras;V(Q,Ce);for(let He=0;He<De.length;He++)V(De[He],Ce);De.length===2?ve(Q,O,J):Q.projectionMatrix.copy(O.projectionMatrix),X(ae,Q,Ce)};function X(ae,Se,ge){ge===null?ae.matrix.copy(Se.matrixWorld):(ae.matrix.copy(ge.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Se.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Se.projectionMatrix),ae.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=kg*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&x===null))return d},this.setFoveation=function(ae){d=ae,y!==null&&(y.fixedFoveation=ae),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ae)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Q)},this.getCameraTexture=function(ae){return S[ae]};let xe=null;function we(ae,Se){if(m=Se.getViewerPose(h||c),b=Se,m!==null){const ge=m.views;x!==null&&(e.setRenderTargetFramebuffer(D,x.framebuffer),e.setRenderTarget(D));let Ce=!1;ge.length!==Q.cameras.length&&(Q.cameras.length=0,Ce=!0);for(let tt=0;tt<ge.length;tt++){const it=ge[tt];let St=null;if(x!==null)St=x.getViewport(it);else{const Jt=v.getViewSubImage(y,it);St=Jt.viewport,tt===0&&(e.setRenderTargetTextures(D,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(D))}let ot=G[tt];ot===void 0&&(ot=new ia,ot.layers.enable(tt),ot.viewport=new dn,G[tt]=ot),ot.matrix.fromArray(it.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(it.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(St.x,St.y,St.width,St.height),tt===0&&(Q.matrix.copy(ot.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ce===!0&&Q.cameras.push(ot)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const tt=v.getDepthInformation(ge[0]);tt&&tt.isValid&&tt.texture&&_.init(tt,s.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),v=a.getBinding();for(let tt=0;tt<ge.length;tt++){const it=ge[tt].camera;if(it){let St=S[it];St||(St=new RA,S[it]=St);const ot=v.getCameraImage(it);St.sourceTexture=ot}}}}for(let ge=0;ge<C.length;ge++){const Ce=F[ge],De=C[ge];Ce!==null&&De!==void 0&&De.update(Ce,Se,h||c)}xe&&xe(ae,Se),Se.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Se}),b=null}const Fe=new LA;Fe.setAnimationLoop(we),this.setAnimationLoop=function(ae){xe=ae},this.dispose=function(){}}}const Ts=new dr,A4=new mn;function w4(t,e){function n(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function a(_,S){S.color.getRGB(_.fogColor.value,CA(t)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,A,w,D){S.isMeshBasicMaterial?l(_,S):S.isMeshLambertMaterial?(l(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(_,S),v(_,S)):S.isMeshPhongMaterial?(l(_,S),m(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(_,S),y(_,S),S.isMeshPhysicalMaterial&&x(_,S,D)):S.isMeshMatcapMaterial?(l(_,S),b(_,S)):S.isMeshDepthMaterial?l(_,S):S.isMeshDistanceMaterial?(l(_,S),E(_,S)):S.isMeshNormalMaterial?l(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&f(_,S)):S.isPointsMaterial?d(_,S,A,w):S.isSpriteMaterial?h(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,n(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,n(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,n(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ui&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,n(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ui&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,n(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,n(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const A=e.get(S),w=A.envMap,D=A.envMapRotation;w&&(_.envMap.value=w,Ts.copy(D),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),_.envMapRotation.value.setFromMatrix4(A4.makeRotationFromEuler(Ts)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,n(S.map,_.mapTransform))}function f(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function d(_,S,A,w){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*A,_.scale.value=w*.5,S.map&&(_.map.value=S.map,n(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,n(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function h(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,n(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,n(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function m(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function v(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function y(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function x(_,S,A){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ui&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,S){S.matcap&&(_.matcap.value=S.matcap)}function E(_,S){const A=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function R4(t,e,n,a){let s={},l={},c=[];const f=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,w){const D=w.program;a.uniformBlockBinding(A,D)}function h(A,w){let D=s[A.id];D===void 0&&(b(A),D=m(A),s[A.id]=D,A.addEventListener("dispose",_));const C=w.program;a.updateUBOMapping(A,C);const F=e.render.frame;l[A.id]!==F&&(y(A),l[A.id]=F)}function m(A){const w=v();A.__bindingPointIndex=w;const D=t.createBuffer(),C=A.__size,F=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,D),t.bufferData(t.UNIFORM_BUFFER,C,F),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,D),D}function v(){for(let A=0;A<f;A++)if(c.indexOf(A)===-1)return c.push(A),A;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const w=s[A.id],D=A.uniforms,C=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let F=0,P=D.length;F<P;F++){const R=Array.isArray(D[F])?D[F]:[D[F]];for(let O=0,J=R.length;O<J;O++){const G=R[O];if(x(G,F,O,C)===!0){const Q=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let ee=0;for(let K=0;K<te.length;K++){const B=te[K],z=E(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,Q+ee,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ee),ee+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Q,G.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(A,w,D,C){const F=A.value,P=w+"_"+D;if(C[P]===void 0)return typeof F=="number"||typeof F=="boolean"?C[P]=F:C[P]=F.clone(),!0;{const R=C[P];if(typeof F=="number"||typeof F=="boolean"){if(R!==F)return C[P]=F,!0}else if(R.equals(F)===!1)return R.copy(F),!0}return!1}function b(A){const w=A.uniforms;let D=0;const C=16;for(let P=0,R=w.length;P<R;P++){const O=Array.isArray(w[P])?w[P]:[w[P]];for(let J=0,G=O.length;J<G;J++){const Q=O[J],te=Array.isArray(Q.value)?Q.value:[Q.value];for(let ee=0,K=te.length;ee<K;ee++){const B=te[ee],z=E(B),ne=D%C,he=ne%z.boundary,ve=ne+he;D+=he,ve!==0&&C-ve<z.storage&&(D+=C-ve),Q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=z.storage}}}const F=D%C;return F>0&&(D+=C-F),A.__size=D,A.__cache={},this}function E(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",A),w}function _(A){const w=A.target;w.removeEventListener("dispose",_);const D=c.indexOf(w.__bindingPointIndex);c.splice(D,1),t.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function S(){for(const A in s)t.deleteBuffer(s[A]);c=[],s={},l={}}return{bind:d,update:h,dispose:S}}const C4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xa=null;function D4(){return xa===null&&(xa=new TA(C4,16,16,tl,Pa),xa.name="DFG_LUT",xa.minFilter=An,xa.magFilter=An,xa.wrapS=Ei,xa.wrapT=Ei,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class L4{constructor(e={}){const{canvas:n=JP(),context:a=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:x=Ii}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=c;const E=x,_=new Set([Kv,$v,Yv]),S=new Set([Ii,Ua,Gc,kc,jv,qv]),A=new Uint32Array(4),w=new Int32Array(4);let D=null,C=null;const F=[],P=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ra,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let J=!1;this._outputColorSpace=Oi;let G=0,Q=0,te=null,ee=-1,K=null;const B=new dn,z=new dn;let ne=null;const he=new Vt(0);let ve=0,V=n.width,X=n.height,xe=1,we=null,Fe=null;const ae=new dn(0,0,V,X),Se=new dn(0,0,V,X);let ge=!1;const Ce=new AA;let De=!1,He=!1;const dt=new mn,tt=new ue,it=new dn,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Jt(){return te===null?xe:1}let W=a;function Ht(N,q){return n.getContext(N,q)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Wv}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",Xt,!1),W===null){const q="webgl2";if(W=Ht(q,N),W===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ft("WebGLRenderer: "+N.message),N}let Mt,Et,Ee,U,M,H,$,de,fe,Ie,Ne,Je,rt,Re,Te,Ge,Ve,ke,vt,Y,Ue,Le,We;function Ae(){Mt=new LB(W),Mt.init(),Ue=new S4(W,Mt),Et=new MB(W,Mt,e,Ue),Ee=new x4(W,Mt),Et.reversedDepthBuffer&&y&&Ee.buffers.depth.setReversed(!0),U=new PB(W),M=new r4,H=new _4(W,Mt,Ee,M,Et,Ue,U),$=new DB(O),de=new zO(W),Le=new SB(W,de),fe=new NB(W,de,U,Le),Ie=new FB(W,fe,de,Le,U),ke=new OB(W,Et,H),Te=new EB(M),Ne=new a4(O,$,Mt,Et,Le,Te),Je=new w4(O,M),rt=new o4,Re=new h4(Mt),Ve=new _B(O,$,Ee,Ie,b,d),Ge=new y4(O,Ie,Et),We=new R4(W,U,Et,Ee),vt=new bB(W,Mt,U),Y=new UB(W,Mt,U),U.programs=Ne.programs,O.capabilities=Et,O.extensions=Mt,O.properties=M,O.renderLists=rt,O.shadowMap=Ge,O.state=Ee,O.info=U}Ae(),E!==Ii&&(R=new BB(E,n.width,n.height,s,l));const ye=new T4(O,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const N=Mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(N){N!==void 0&&(xe=N,this.setSize(V,X,!1))},this.getSize=function(N){return N.set(V,X)},this.setSize=function(N,q,pe=!0){if(ye.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}V=N,X=q,n.width=Math.floor(N*xe),n.height=Math.floor(q*xe),pe===!0&&(n.style.width=N+"px",n.style.height=q+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(V*xe,X*xe).floor()},this.setDrawingBufferSize=function(N,q,pe){V=N,X=q,xe=pe,n.width=Math.floor(N*pe),n.height=Math.floor(q*pe),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(E===Ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(B)},this.getViewport=function(N){return N.copy(ae)},this.setViewport=function(N,q,pe,le){N.isVector4?ae.set(N.x,N.y,N.z,N.w):ae.set(N,q,pe,le),Ee.viewport(B.copy(ae).multiplyScalar(xe).round())},this.getScissor=function(N){return N.copy(Se)},this.setScissor=function(N,q,pe,le){N.isVector4?Se.set(N.x,N.y,N.z,N.w):Se.set(N,q,pe,le),Ee.scissor(z.copy(Se).multiplyScalar(xe).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(N){Ee.setScissorTest(ge=N)},this.setOpaqueSort=function(N){we=N},this.setTransparentSort=function(N){Fe=N},this.getClearColor=function(N){return N.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,pe=!0){let le=0;if(N){let re=!1;if(te!==null){const Oe=te.texture.format;re=_.has(Oe)}if(re){const Oe=te.texture.type,je=S.has(Oe),Be=Ve.getClearColor(),Qe=Ve.getClearAlpha(),nt=Be.r,lt=Be.g,ht=Be.b;je?(A[0]=nt,A[1]=lt,A[2]=ht,A[3]=Qe,W.clearBufferuiv(W.COLOR,0,A)):(w[0]=nt,w[1]=lt,w[2]=ht,w[3]=Qe,W.clearBufferiv(W.COLOR,0,w))}else le|=W.COLOR_BUFFER_BIT}q&&(le|=W.DEPTH_BUFFER_BIT),pe&&(le|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",Xt,!1),Ve.dispose(),rt.dispose(),Re.dispose(),M.dispose(),$.dispose(),Ie.dispose(),Le.dispose(),We.dispose(),Ne.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",ks),ye.removeEventListener("sessionend",Ws),ha.stop()};function qe(N){N.preventDefault(),N1("WebGLRenderer: Context Lost."),J=!0}function ct(){N1("WebGLRenderer: Context Restored."),J=!1;const N=U.autoReset,q=Ge.enabled,pe=Ge.autoUpdate,le=Ge.needsUpdate,re=Ge.type;Ae(),U.autoReset=N,Ge.enabled=q,Ge.autoUpdate=pe,Ge.needsUpdate=le,Ge.type=re}function Xt(N){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Lt(N){const q=N.target;q.removeEventListener("dispose",Lt),Yn(q)}function Yn(N){ki(N),M.remove(N)}function ki(N){const q=M.get(N).programs;q!==void 0&&(q.forEach(function(pe){Ne.releaseProgram(pe)}),N.isShaderMaterial&&Ne.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,pe,le,re,Oe){q===null&&(q=St);const je=re.isMesh&&re.matrixWorld.determinant()<0,Be=pu(N,q,pe,le,re);Ee.setMaterial(le,je);let Qe=pe.index,nt=1;if(le.wireframe===!0){if(Qe=fe.getWireframeAttribute(pe),Qe===void 0)return;nt=2}const lt=pe.drawRange,ht=pe.attributes.position;let Ye=lt.start*nt,yt=(lt.start+lt.count)*nt;Oe!==null&&(Ye=Math.max(Ye,Oe.start*nt),yt=Math.min(yt,(Oe.start+Oe.count)*nt)),Qe!==null?(Ye=Math.max(Ye,0),yt=Math.min(yt,Qe.count)):ht!=null&&(Ye=Math.max(Ye,0),yt=Math.min(yt,ht.count));const an=yt-Ye;if(an<0||an===1/0)return;Le.setup(re,le,Be,pe,Qe);let rn,Ut=vt;if(Qe!==null&&(rn=de.get(Qe),Ut=Y,Ut.setIndex(rn)),re.isMesh)le.wireframe===!0?(Ee.setLineWidth(le.wireframeLinewidth*Jt()),Ut.setMode(W.LINES)):Ut.setMode(W.TRIANGLES);else if(re.isLine){let Rn=le.linewidth;Rn===void 0&&(Rn=1),Ee.setLineWidth(Rn*Jt()),re.isLineSegments?Ut.setMode(W.LINES):re.isLineLoop?Ut.setMode(W.LINE_LOOP):Ut.setMode(W.LINE_STRIP)}else re.isPoints?Ut.setMode(W.POINTS):re.isSprite&&Ut.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Vd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Rn=re._multiDrawStarts,Ke=re._multiDrawCounts,$n=re._multiDrawCount,ft=Qe?de.get(Qe).bytesPerElement:1,Kn=M.get(le).currentProgram.getUniforms();for(let hi=0;hi<$n;hi++)Kn.setValue(W,"_gl_DrawID",hi),Ut.render(Rn[hi]/ft,Ke[hi])}else if(re.isInstancedMesh)Ut.renderInstances(Ye,an,re.count);else if(pe.isInstancedBufferGeometry){const Rn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ke=Math.min(pe.instanceCount,Rn);Ut.renderInstances(Ye,an,Ke)}else Ut.render(Ye,an)};function xl(N,q,pe){N.transparent===!0&&N.side===sr&&N.forceSinglePass===!1?(N.side=ui,N.needsUpdate=!0,pr(N,q,pe),N.side=Kr,N.needsUpdate=!0,pr(N,q,pe),N.side=sr):pr(N,q,pe)}this.compile=function(N,q,pe=null){pe===null&&(pe=N),C=Re.get(pe),C.init(q),P.push(C),pe.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),N!==pe&&N.traverseVisible(function(re){re.isLight&&re.layers.test(q.layers)&&(C.pushLight(re),re.castShadow&&C.pushShadow(re))}),C.setupLights();const le=new Set;return N.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Oe=re.material;if(Oe)if(Array.isArray(Oe))for(let je=0;je<Oe.length;je++){const Be=Oe[je];xl(Be,pe,re),le.add(Be)}else xl(Oe,pe,re),le.add(Oe)}),C=P.pop(),le},this.compileAsync=function(N,q,pe=null){const le=this.compile(N,q,pe);return new Promise(re=>{function Oe(){if(le.forEach(function(je){M.get(je).currentProgram.isReady()&&le.delete(je)}),le.size===0){re(N);return}setTimeout(Oe,10)}Mt.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Gs=null;function fu(N){Gs&&Gs(N)}function ks(){ha.stop()}function Ws(){ha.start()}const ha=new LA;ha.setAnimationLoop(fu),typeof self<"u"&&ha.setContext(self),this.setAnimationLoop=function(N){Gs=N,ye.setAnimationLoop(N),N===null?ha.stop():ha.start()},ye.addEventListener("sessionstart",ks),ye.addEventListener("sessionend",Ws),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const pe=ye.enabled===!0&&ye.isPresenting===!0,le=R!==null&&(te===null||pe)&&R.begin(O,te);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(q),q=ye.getCamera()),N.isScene===!0&&N.onBeforeRender(O,N,q,te),C=Re.get(N,P.length),C.init(q),P.push(C),dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ce.setFromProjectionMatrix(dt,Ea,q.reversedDepth),He=this.localClippingEnabled,De=Te.init(this.clippingPlanes,He),D=rt.get(N,F.length),D.init(),F.push(D),ye.enabled===!0&&ye.isPresenting===!0){const je=O.xr.getDepthSensingMesh();je!==null&&Xs(je,q,-1/0,O.sortObjects)}Xs(N,q,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(we,Fe),ot=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,ot&&Ve.addToRenderList(D,N),this.info.render.frame++,De===!0&&Te.beginShadows();const re=C.state.shadowsArray;if(Ge.render(re,N,q),De===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&R.hasRenderPass())===!1){const je=D.opaque,Be=D.transmissive;if(C.setupLights(),q.isArrayCamera){const Qe=q.cameras;if(Be.length>0)for(let nt=0,lt=Qe.length;nt<lt;nt++){const ht=Qe[nt];gn(je,Be,N,ht)}ot&&Ve.render(N);for(let nt=0,lt=Qe.length;nt<lt;nt++){const ht=Qe[nt];Wi(D,N,ht,ht.viewport)}}else Be.length>0&&gn(je,Be,N,q),ot&&Ve.render(N),Wi(D,N,q)}te!==null&&Q===0&&(H.updateMultisampleRenderTarget(te),H.updateRenderTargetMipmap(te)),le&&R.end(O),N.isScene===!0&&N.onAfterRender(O,N,q),Le.resetDefaultState(),ee=-1,K=null,P.pop(),P.length>0?(C=P[P.length-1],De===!0&&Te.setGlobalState(O.clippingPlanes,C.state.camera)):C=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Xs(N,q,pe,le){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)pe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLight)C.pushLight(N),N.castShadow&&C.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ce.intersectsSprite(N)){le&&it.setFromMatrixPosition(N.matrixWorld).applyMatrix4(dt);const je=Ie.update(N),Be=N.material;Be.visible&&D.push(N,je,Be,pe,it.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ce.intersectsObject(N))){const je=Ie.update(N),Be=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),it.copy(N.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),it.copy(je.boundingSphere.center)),it.applyMatrix4(N.matrixWorld).applyMatrix4(dt)),Array.isArray(Be)){const Qe=je.groups;for(let nt=0,lt=Qe.length;nt<lt;nt++){const ht=Qe[nt],Ye=Be[ht.materialIndex];Ye&&Ye.visible&&D.push(N,je,Ye,pe,it.z,ht)}}else Be.visible&&D.push(N,je,Be,pe,it.z,null)}}const Oe=N.children;for(let je=0,Be=Oe.length;je<Be;je++)Xs(Oe[je],q,pe,le)}function Wi(N,q,pe,le){const{opaque:re,transmissive:Oe,transparent:je}=N;C.setupLightsView(pe),De===!0&&Te.setGlobalState(O.clippingPlanes,pe),le&&Ee.viewport(B.copy(le)),re.length>0&&wn(re,q,pe),Oe.length>0&&wn(Oe,q,pe),je.length>0&&wn(je,q,pe),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function gn(N,q,pe,le){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[le.id]===void 0){const Ye=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[le.id]=new ca(1,1,{generateMipmaps:!0,type:Ye?Pa:Ii,minFilter:Ns,samples:Math.max(4,Et.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const Oe=C.state.transmissionRenderTarget[le.id],je=le.viewport||B;Oe.setSize(je.z*O.transmissionResolutionScale,je.w*O.transmissionResolutionScale);const Be=O.getRenderTarget(),Qe=O.getActiveCubeFace(),nt=O.getActiveMipmapLevel();O.setRenderTarget(Oe),O.getClearColor(he),ve=O.getClearAlpha(),ve<1&&O.setClearColor(16777215,.5),O.clear(),ot&&Ve.render(pe);const lt=O.toneMapping;O.toneMapping=Ra;const ht=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),C.setupLightsView(le),De===!0&&Te.setGlobalState(O.clippingPlanes,le),wn(N,pe,le),H.updateMultisampleRenderTarget(Oe),H.updateRenderTargetMipmap(Oe),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let yt=0,an=q.length;yt<an;yt++){const rn=q[yt],{object:Ut,geometry:Rn,material:Ke,group:$n}=rn;if(Ke.side===sr&&Ut.layers.test(le.layers)){const ft=Ke.side;Ke.side=ui,Ke.needsUpdate=!0,Fa(Ut,pe,le,Rn,Ke,$n),Ke.side=ft,Ke.needsUpdate=!0,Ye=!0}}Ye===!0&&(H.updateMultisampleRenderTarget(Oe),H.updateRenderTargetMipmap(Oe))}O.setRenderTarget(Be,Qe,nt),O.setClearColor(he,ve),ht!==void 0&&(le.viewport=ht),O.toneMapping=lt}function wn(N,q,pe){const le=q.isScene===!0?q.overrideMaterial:null;for(let re=0,Oe=N.length;re<Oe;re++){const je=N[re],{object:Be,geometry:Qe,group:nt}=je;let lt=je.material;lt.allowOverride===!0&&le!==null&&(lt=le),Be.layers.test(pe.layers)&&Fa(Be,q,pe,Qe,lt,nt)}}function Fa(N,q,pe,le,re,Oe){N.onBeforeRender(O,q,pe,le,re,Oe),N.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),re.onBeforeRender(O,q,pe,le,N,Oe),re.transparent===!0&&re.side===sr&&re.forceSinglePass===!1?(re.side=ui,re.needsUpdate=!0,O.renderBufferDirect(pe,q,le,re,N,Oe),re.side=Kr,re.needsUpdate=!0,O.renderBufferDirect(pe,q,le,re,N,Oe),re.side=sr):O.renderBufferDirect(pe,q,le,re,N,Oe),N.onAfterRender(O,q,pe,le,re,Oe)}function pr(N,q,pe){q.isScene!==!0&&(q=St);const le=M.get(N),re=C.state.lights,Oe=C.state.shadowsArray,je=re.state.version,Be=Ne.getParameters(N,re.state,Oe,q,pe),Qe=Ne.getProgramCacheKey(Be);let nt=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;const lt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=$.get(N.envMap||le.environment,lt),le.envMapRotation=le.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,nt===void 0&&(N.addEventListener("dispose",Lt),nt=new Map,le.programs=nt);let ht=nt.get(Qe);if(ht!==void 0){if(le.currentProgram===ht&&le.lightsStateVersion===je)return hu(N,Be),ht}else Be.uniforms=Ne.getUniforms(N),N.onBeforeCompile(Be,O),ht=Ne.acquireProgram(Be,Qe),nt.set(Qe,ht),le.uniforms=Be.uniforms;const Ye=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ye.clippingPlanes=Te.uniform),hu(N,Be),le.needsLights=_l(N),le.lightsStateVersion=je,le.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),le.currentProgram=ht,le.uniformsList=null,ht}function du(N){if(N.uniformsList===null){const q=N.currentProgram.getUniforms();N.uniformsList=Md.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function hu(N,q){const pe=M.get(N);pe.outputColorSpace=q.outputColorSpace,pe.batching=q.batching,pe.batchingColor=q.batchingColor,pe.instancing=q.instancing,pe.instancingColor=q.instancingColor,pe.instancingMorph=q.instancingMorph,pe.skinning=q.skinning,pe.morphTargets=q.morphTargets,pe.morphNormals=q.morphNormals,pe.morphColors=q.morphColors,pe.morphTargetsCount=q.morphTargetsCount,pe.numClippingPlanes=q.numClippingPlanes,pe.numIntersection=q.numClipIntersection,pe.vertexAlphas=q.vertexAlphas,pe.vertexTangents=q.vertexTangents,pe.toneMapping=q.toneMapping}function pu(N,q,pe,le,re){q.isScene!==!0&&(q=St),H.resetTextureUnits();const Oe=q.fog,je=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,Be=te===null?O.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nl,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,nt=$.get(le.envMap||je,Qe),lt=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,ht=!!pe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ye=!!pe.morphAttributes.position,yt=!!pe.morphAttributes.normal,an=!!pe.morphAttributes.color;let rn=Ra;le.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(rn=O.toneMapping);const Ut=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Rn=Ut!==void 0?Ut.length:0,Ke=M.get(le),$n=C.state.lights;if(De===!0&&(He===!0||N!==K)){const yn=N===K&&le.id===ee;Te.setState(le,N,yn)}let ft=!1;le.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==$n.state.version||Ke.outputColorSpace!==Be||re.isBatchedMesh&&Ke.batching===!1||!re.isBatchedMesh&&Ke.batching===!0||re.isBatchedMesh&&Ke.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Ke.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Ke.instancing===!1||!re.isInstancedMesh&&Ke.instancing===!0||re.isSkinnedMesh&&Ke.skinning===!1||!re.isSkinnedMesh&&Ke.skinning===!0||re.isInstancedMesh&&Ke.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ke.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Ke.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Ke.instancingMorph===!1&&re.morphTexture!==null||Ke.envMap!==nt||le.fog===!0&&Ke.fog!==Oe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Te.numPlanes||Ke.numIntersection!==Te.numIntersection)||Ke.vertexAlphas!==lt||Ke.vertexTangents!==ht||Ke.morphTargets!==Ye||Ke.morphNormals!==yt||Ke.morphColors!==an||Ke.toneMapping!==rn||Ke.morphTargetsCount!==Rn)&&(ft=!0):(ft=!0,Ke.__version=le.version);let Kn=Ke.currentProgram;ft===!0&&(Kn=pr(le,q,re));let hi=!1,Xi=!1,pi=!1;const Gt=Kn.getUniforms(),vn=Ke.uniforms;if(Ee.useProgram(Kn.program)&&(hi=!0,Xi=!0,pi=!0),le.id!==ee&&(ee=le.id,Xi=!0),hi||K!==N){Ee.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Gt.setValue(W,"projectionMatrix",N.projectionMatrix),Gt.setValue(W,"viewMatrix",N.matrixWorldInverse);const ji=Gt.map.cameraPosition;ji!==void 0&&ji.setValue(W,tt.setFromMatrixPosition(N.matrixWorld)),Et.logarithmicDepthBuffer&&Gt.setValue(W,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Gt.setValue(W,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,Xi=!0,pi=!0)}if(Ke.needsLights&&($n.state.directionalShadowMap.length>0&&Gt.setValue(W,"directionalShadowMap",$n.state.directionalShadowMap,H),$n.state.spotShadowMap.length>0&&Gt.setValue(W,"spotShadowMap",$n.state.spotShadowMap,H),$n.state.pointShadowMap.length>0&&Gt.setValue(W,"pointShadowMap",$n.state.pointShadowMap,H)),re.isSkinnedMesh){Gt.setOptional(W,re,"bindMatrix"),Gt.setOptional(W,re,"bindMatrixInverse");const yn=re.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Gt.setValue(W,"boneTexture",yn.boneTexture,H))}re.isBatchedMesh&&(Gt.setOptional(W,re,"batchingTexture"),Gt.setValue(W,"batchingTexture",re._matricesTexture,H),Gt.setOptional(W,re,"batchingIdTexture"),Gt.setValue(W,"batchingIdTexture",re._indirectTexture,H),Gt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Gt.setValue(W,"batchingColorTexture",re._colorsTexture,H));const Zn=pe.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ke.update(re,pe,Kn),(Xi||Ke.receiveShadow!==re.receiveShadow)&&(Ke.receiveShadow=re.receiveShadow,Gt.setValue(W,"receiveShadow",re.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&(vn.envMapIntensity.value=q.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=D4()),Xi&&(Gt.setValue(W,"toneMappingExposure",O.toneMappingExposure),Ke.needsLights&&ts(vn,pi),Oe&&le.fog===!0&&Je.refreshFogUniforms(vn,Oe),Je.refreshMaterialUniforms(vn,le,xe,X,C.state.transmissionRenderTarget[N.id]),Md.upload(W,du(Ke),vn,H)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Md.upload(W,du(Ke),vn,H),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Gt.setValue(W,"center",re.center),Gt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Gt.setValue(W,"normalMatrix",re.normalMatrix),Gt.setValue(W,"modelMatrix",re.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const yn=le.uniformsGroups;for(let ji=0,Ia=yn.length;ji<Ia;ji++){const js=yn[ji];We.update(js,Kn),We.bind(js,Kn)}}return Kn}function ts(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function _l(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(N,q,pe){const le=M.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),M.get(N.texture).__webglTexture=q,M.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:pe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){const pe=M.get(N);pe.__webglFramebuffer=q,pe.__useDefaultFramebuffer=q===void 0};const mr=W.createFramebuffer();this.setRenderTarget=function(N,q=0,pe=0){te=N,G=q,Q=pe;let le=null,re=!1,Oe=!1;if(N){const Be=M.get(N);if(Be.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(W.FRAMEBUFFER,Be.__webglFramebuffer),B.copy(N.viewport),z.copy(N.scissor),ne=N.scissorTest,Ee.viewport(B),Ee.scissor(z),Ee.setScissorTest(ne),ee=-1;return}else if(Be.__webglFramebuffer===void 0)H.setupRenderTarget(N);else if(Be.__hasExternalTextures)H.rebindTextures(N,M.get(N.texture).__webglTexture,M.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const lt=N.depthTexture;if(Be.__boundDepthTexture!==lt){if(lt!==null&&M.has(lt)&&(N.width!==lt.image.width||N.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(N)}}const Qe=N.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Oe=!0);const nt=M.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?le=nt[q][pe]:le=nt[q],re=!0):N.samples>0&&H.useMultisampledRTT(N)===!1?le=M.get(N).__webglMultisampledFramebuffer:Array.isArray(nt)?le=nt[pe]:le=nt,B.copy(N.viewport),z.copy(N.scissor),ne=N.scissorTest}else B.copy(ae).multiplyScalar(xe).floor(),z.copy(Se).multiplyScalar(xe).floor(),ne=ge;if(pe!==0&&(le=mr),Ee.bindFramebuffer(W.FRAMEBUFFER,le)&&Ee.drawBuffers(N,le),Ee.viewport(B),Ee.scissor(z),Ee.setScissorTest(ne),re){const Be=M.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,pe)}else if(Oe){const Be=q;for(let Qe=0;Qe<N.textures.length;Qe++){const nt=M.get(N.textures[Qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,pe,Be)}}else if(N!==null&&pe!==0){const Be=M.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Be.__webglTexture,pe)}ee=-1},this.readRenderTargetPixels=function(N,q,pe,le,re,Oe,je,Be=0){if(!(N&&N.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=M.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe){Ee.bindFramebuffer(W.FRAMEBUFFER,Qe);try{const nt=N.textures[Be],lt=nt.format,ht=nt.type;if(N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!Et.textureFormatReadable(lt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(ht)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-le&&pe>=0&&pe<=N.height-re&&W.readPixels(q,pe,le,re,Ue.convert(lt),Ue.convert(ht),Oe)}finally{const nt=te!==null?M.get(te).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(N,q,pe,le,re,Oe,je,Be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=M.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe)if(q>=0&&q<=N.width-le&&pe>=0&&pe<=N.height-re){Ee.bindFramebuffer(W.FRAMEBUFFER,Qe);const nt=N.textures[Be],lt=nt.format,ht=nt.type;if(N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Be),!Et.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels(q,pe,le,re,Ue.convert(lt),Ue.convert(ht),0);const yt=te!==null?M.get(te).__webglFramebuffer:null;Ee.bindFramebuffer(W.FRAMEBUFFER,yt);const an=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await eO(W,an,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ye),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.deleteBuffer(Ye),W.deleteSync(an),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,pe=0){const le=Math.pow(2,-pe),re=Math.floor(N.image.width*le),Oe=Math.floor(N.image.height*le),je=q!==null?q.x:0,Be=q!==null?q.y:0;H.setTexture2D(N,0),W.copyTexSubImage2D(W.TEXTURE_2D,pe,0,0,je,Be,re,Oe),Ee.unbindTexture()};const gr=W.createFramebuffer(),ns=W.createFramebuffer();this.copyTextureToTexture=function(N,q,pe=null,le=null,re=0,Oe=0){let je,Be,Qe,nt,lt,ht,Ye,yt,an;const rn=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(pe!==null)je=pe.max.x-pe.min.x,Be=pe.max.y-pe.min.y,Qe=pe.isBox3?pe.max.z-pe.min.z:1,nt=pe.min.x,lt=pe.min.y,ht=pe.isBox3?pe.min.z:0;else{const vn=Math.pow(2,-re);je=Math.floor(rn.width*vn),Be=Math.floor(rn.height*vn),N.isDataArrayTexture?Qe=rn.depth:N.isData3DTexture?Qe=Math.floor(rn.depth*vn):Qe=1,nt=0,lt=0,ht=0}le!==null?(Ye=le.x,yt=le.y,an=le.z):(Ye=0,yt=0,an=0);const Ut=Ue.convert(q.format),Rn=Ue.convert(q.type);let Ke;q.isData3DTexture?(H.setTexture3D(q,0),Ke=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),Ke=W.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),Ke=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const $n=W.getParameter(W.UNPACK_ROW_LENGTH),ft=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Kn=W.getParameter(W.UNPACK_SKIP_PIXELS),hi=W.getParameter(W.UNPACK_SKIP_ROWS),Xi=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,rn.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,rn.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,nt),W.pixelStorei(W.UNPACK_SKIP_ROWS,lt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ht);const pi=N.isDataArrayTexture||N.isData3DTexture,Gt=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){const vn=M.get(N),Zn=M.get(q),yn=M.get(vn.__renderTarget),ji=M.get(Zn.__renderTarget);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,yn.__webglFramebuffer),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let Ia=0;Ia<Qe;Ia++)pi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,M.get(N).__webglTexture,re,ht+Ia),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,M.get(q).__webglTexture,Oe,an+Ia)),W.blitFramebuffer(nt,lt,je,Be,Ye,yt,je,Be,W.DEPTH_BUFFER_BIT,W.NEAREST);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||N.isRenderTargetTexture||M.has(N)){const vn=M.get(N),Zn=M.get(q);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,gr),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,ns);for(let yn=0;yn<Qe;yn++)pi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,vn.__webglTexture,re,ht+yn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,vn.__webglTexture,re),Gt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Zn.__webglTexture,Oe,an+yn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Zn.__webglTexture,Oe),re!==0?W.blitFramebuffer(nt,lt,je,Be,Ye,yt,je,Be,W.COLOR_BUFFER_BIT,W.NEAREST):Gt?W.copyTexSubImage3D(Ke,Oe,Ye,yt,an+yn,nt,lt,je,Be):W.copyTexSubImage2D(Ke,Oe,Ye,yt,nt,lt,je,Be);Ee.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Gt?N.isDataTexture||N.isData3DTexture?W.texSubImage3D(Ke,Oe,Ye,yt,an,je,Be,Qe,Ut,Rn,rn.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(Ke,Oe,Ye,yt,an,je,Be,Qe,Ut,rn.data):W.texSubImage3D(Ke,Oe,Ye,yt,an,je,Be,Qe,Ut,Rn,rn):N.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,Ye,yt,je,Be,Ut,Rn,rn.data):N.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,Ye,yt,rn.width,rn.height,Ut,rn.data):W.texSubImage2D(W.TEXTURE_2D,Oe,Ye,yt,je,Be,Ut,Rn,rn);W.pixelStorei(W.UNPACK_ROW_LENGTH,$n),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ft),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Kn),W.pixelStorei(W.UNPACK_SKIP_ROWS,hi),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Xi),Oe===0&&q.generateMipmaps&&W.generateMipmap(Ke),Ee.unbindTexture()},this.initRenderTarget=function(N){M.get(N).__webglFramebuffer===void 0&&H.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?H.setTextureCube(N,0):N.isData3DTexture?H.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?H.setTexture2DArray(N,0):H.setTexture2D(N,0),Ee.unbindTexture()},this.resetState=function(){G=0,Q=0,te=null,Ee.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Nt._getUnpackColorSpace()}}function N4({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:a=30,iterationsViscous:s=32,iterationsPoisson:l=32,dt:c=.014,BFECC:f=!0,resolution:d=.5,isBounce:h=!1,colors:m=["#5227FF","#FF9FFC","#B19EEF"],style:v={},className:y="",autoDemo:x=!0,autoSpeed:b=.5,autoIntensity:E=2.2,takeoverDuration:_=.25,autoResumeDelay:S=1e3,autoRampDuration:A=.6}){const w=I.useRef(null),D=I.useRef(null),C=I.useRef(null),F=I.useRef(null),P=I.useRef(null),R=I.useRef(!0),O=I.useRef(null);return I.useEffect(()=>{if(!w.current)return;function J(U){let M;Array.isArray(U)&&U.length>0?U.length===1?M=[U[0],U[0]]:M=U:M=["#ffffff","#ffffff"];const H=M.length,$=new Uint8Array(H*4);for(let fe=0;fe<H;fe++){const Ie=new Vt(M[fe]);$[fe*4+0]=Math.round(Ie.r*255),$[fe*4+1]=Math.round(Ie.g*255),$[fe*4+2]=Math.round(Ie.b*255),$[fe*4+3]=255}const de=new TA($,H,1,zi);return de.magFilter=An,de.minFilter=An,de.wrapS=Ei,de.wrapT=Ei,de.generateMipmaps=!1,de.needsUpdate=!0,de}const G=J(m),Q=new dn(0,0,0,0);class te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(M){this.container=M,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new L4({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Vt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new FO}resize(){if(!this.container)return;const M=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(M.width)),this.height=Math.max(1,Math.floor(M.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const ee=new te;class K{constructor(){this.mouseMoved=!1,this.coords=new mt,this.coords_old=new mt,this.diff=new mt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new mt,this.takeoverTo=new mt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(M){this.container=M,this.docTarget=M.ownerDocument||null;const H=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);H&&(this.listenerTarget=H,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(M,H){if(!this.container)return!1;const $=this.container.getBoundingClientRect();return $.width===0||$.height===0?!1:M>=$.left&&M<=$.right&&H>=$.top&&H<=$.bottom}updateHoverState(M,H){return this.isHoverInside=this.isPointInside(M,H),this.isHoverInside}setCoords(M,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const $=this.container.getBoundingClientRect();if($.width===0||$.height===0)return;const de=(M-$.left)/$.width,fe=(H-$.top)/$.height;this.coords.set(de*2-1,-(fe*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(M,H){this.coords.set(M,H),this.mouseMoved=!0}onDocumentMouseMove(M){if(this.updateHoverState(M.clientX,M.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect();if(H.width===0||H.height===0)return;const $=(M.clientX-H.left)/H.width,de=(M.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(de*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(M.clientX,M.clientY),this.hasUserControl=!0}}onDocumentTouchStart(M){if(M.touches.length!==1)return;const H=M.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY),this.hasUserControl=!0)}onDocumentTouchMove(M){if(M.touches.length!==1)return;const H=M.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const M=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(M>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=M*M*(3-2*M);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const B=new K;class z{constructor(M,H,$){this.mouse=M,this.manager=H,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new mt(0,0),this.target=new mt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new mt,this.pickNewTarget()}pickNewTarget(){const M=Math.random;this.target.set((M()*2-1)*(1-this.margin),(M()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const M=performance.now();if(M-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=M,this.activationTime=M),!this.active)return;this.mouse.isAutoActive=!0;let $=(M-this.lastTime)/1e3;this.lastTime=M,$>.2&&($=.016);const de=this._tmpDir.subVectors(this.target,this.current),fe=de.length();if(fe<.01){this.pickNewTarget();return}de.normalize();let Ie=1;if(this.rampDurationMs>0){const rt=Math.min(1,(M-this.activationTime)/this.rampDurationMs);Ie=rt*rt*(3-2*rt)}const Ne=this.speed*$*Ie,Je=Math.min(Ne,fe);this.current.addScaledVector(de,Je),this.mouse.setNormalized(this.current.x,this.current.y)}}const ne=`
            attribute vec3 position;
            uniform vec2 px;
            uniform vec2 boundarySpace;
            varying vec2 uv;
            precision highp float;
            void main(){
            vec3 pos = position;
            vec2 scale = 1.0 - boundarySpace * 2.0;
            pos.xy = pos.xy * scale;
            uv = vec2(0.5)+(pos.xy)*0.5;
            gl_Position = vec4(pos, 1.0);
            }
        `,he=`
        attribute vec3 position;
        uniform vec2 px;
        precision highp float;
        varying vec2 uv;
        void main(){
        vec3 pos = position;
        uv = 0.5 + pos.xy * 0.5;
        vec2 n = sign(pos.xy);
        pos.xy = abs(pos.xy) - px * 1.0;
        pos.xy *= n;
        gl_Position = vec4(pos, 1.0);
        }
        `,ve=`
            precision highp float;
            attribute vec3 position;
            attribute vec2 uv;
            uniform vec2 center;
            uniform vec2 scale;
            uniform vec2 px;
            varying vec2 vUv;
            void main(){
            vec2 pos = position.xy * scale * 2.0 * px + center;
            vUv = uv;
            gl_Position = vec4(pos, 0.0, 1.0);
        }
        `,V=`
            precision highp float;
            uniform sampler2D velocity;
            uniform float dt;
            uniform bool isBFECC;
            uniform vec2 fboSize;
            uniform vec2 px;
            varying vec2 uv;
            void main(){
            vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
            if(isBFECC == false){
                vec2 vel = texture2D(velocity, uv).xy;
                vec2 uv2 = uv - vel * dt * ratio;
                vec2 newVel = texture2D(velocity, uv2).xy;
                gl_FragColor = vec4(newVel, 0.0, 0.0);
            } else {
                vec2 spot_new = uv;
                vec2 vel_old = texture2D(velocity, uv).xy;
                vec2 spot_old = spot_new - vel_old * dt * ratio;
                vec2 vel_new1 = texture2D(velocity, spot_old).xy;
                vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
                vec2 error = spot_new2 - spot_new;
                vec2 spot_new3 = spot_new - error / 2.0;
                vec2 vel_2 = texture2D(velocity, spot_new3).xy;
                vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
                vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
                gl_FragColor = vec4(newVel2, 0.0, 0.0);
            }
        }
        `,X=`
            precision highp float;
            uniform sampler2D velocity;
            uniform sampler2D palette;
            uniform vec4 bgColor;
            varying vec2 uv;
            void main(){
            vec2 vel = texture2D(velocity, uv).xy;
            float lenv = clamp(length(vel), 0.0, 1.0);
            vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
            vec3 outRGB = mix(bgColor.rgb, c, lenv);
            float outA = mix(bgColor.a, 1.0, lenv);
            gl_FragColor = vec4(outRGB, outA);
        }
        `,xe=`
            precision highp float;
            uniform sampler2D velocity;
            uniform float dt;
            uniform vec2 px;
            varying vec2 uv;
            void main(){
            float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
            float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
            float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
            float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
            float divergence = (x1 - x0 + y1 - y0) / 2.0;
            gl_FragColor = vec4(divergence / dt);
        }
        `,we=`
            precision highp float;
            uniform vec2 force;
            uniform vec2 center;
            uniform vec2 scale;
            uniform vec2 px;
            varying vec2 vUv;
            void main(){
            vec2 circle = (vUv - 0.5) * 2.0;
            float d = 1.0 - min(length(circle), 1.0);
            d *= d;
            gl_FragColor = vec4(force * d, 0.0, 1.0);
        }
        `,Fe=`
            precision highp float;
            uniform sampler2D pressure;
            uniform sampler2D divergence;
            uniform vec2 px;
            varying vec2 uv;
            void main(){
            float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
            float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
            float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
            float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
            float div = texture2D(divergence, uv).r;
            float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
            gl_FragColor = vec4(newP);
        }
        `,ae=`
            precision highp float;
            uniform sampler2D pressure;
            uniform sampler2D velocity;
            uniform vec2 px;
            uniform float dt;
            varying vec2 uv;
            void main(){
            float step = 1.0;
            float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
            float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
            float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
            float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
            vec2 v = texture2D(velocity, uv).xy;
            vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
            v = v - gradP * dt;
            gl_FragColor = vec4(v, 0.0, 1.0);
        }
        `,Se=`
            precision highp float;
            uniform sampler2D velocity;
            uniform sampler2D velocity_new;
            uniform float v;
            uniform vec2 px;
            uniform float dt;
            varying vec2 uv;
            void main(){
            vec2 old = texture2D(velocity, uv).xy;
            vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
            vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
            vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
            vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
            vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
            newv /= 4.0 * (1.0 + v * dt);
            gl_FragColor = vec4(newv, 0.0, 0.0);
        }
    `;class ge{constructor(M){this.props=M||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new k1,this.camera=new kd,this.uniforms&&(this.material=new Tc(this.props.material),this.geometry=new Is(2,2),this.plane=new Hi(this.geometry,this.material),this.scene.add(this.plane))}update(){ee.renderer.setRenderTarget(this.props.output||null),ee.renderer.render(this.scene,this.camera),ee.renderer.setRenderTarget(null)}}class Ce extends ge{constructor(M){super({material:{vertexShader:ne,fragmentShader:V,uniforms:{boundarySpace:{value:M.cellScale},px:{value:M.cellScale},fboSize:{value:M.fboSize},velocity:{value:M.src.texture},dt:{value:M.dt},isBFECC:{value:!0}}},output:M.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const M=new da,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);M.setAttribute("position",new ua(H,3));const $=new Tc({vertexShader:he,fragmentShader:V,uniforms:this.uniforms});this.line=new AO(M,$),this.scene.add(this.line)}update({dt:M,isBounce:H,BFECC:$}){this.uniforms.dt.value=M,this.line.visible=H,this.uniforms.isBFECC.value=$,super.update()}}class De extends ge{constructor(M){super({output:M.dst}),this.init(M)}init(M){super.init();const H=new Is(1,1),$=new Tc({vertexShader:ve,fragmentShader:we,blending:J0,depthWrite:!1,uniforms:{px:{value:M.cellScale},force:{value:new mt(0,0)},center:{value:new mt(0,0)},scale:{value:new mt(M.cursor_size,M.cursor_size)}}});this.mouse=new Hi(H,$),this.scene.add(this.mouse)}update(M){const H=B.diff.x/2*M.mouse_force,$=B.diff.y/2*M.mouse_force,de=M.cursor_size*M.cellScale.x,fe=M.cursor_size*M.cellScale.y,Ie=Math.min(Math.max(B.coords.x,-1+de+M.cellScale.x*2),1-de-M.cellScale.x*2),Ne=Math.min(Math.max(B.coords.y,-1+fe+M.cellScale.y*2),1-fe-M.cellScale.y*2),Je=this.mouse.material.uniforms;Je.force.value.set(H,$),Je.center.value.set(Ie,Ne),Je.scale.value.set(M.cursor_size,M.cursor_size),super.update()}}class He extends ge{constructor(M){super({material:{vertexShader:ne,fragmentShader:Se,uniforms:{boundarySpace:{value:M.boundarySpace},velocity:{value:M.src.texture},velocity_new:{value:M.dst_.texture},v:{value:M.viscous},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst,output0:M.dst_,output1:M.dst}),this.init()}update({viscous:M,iterations:H,dt:$}){let de,fe;this.uniforms.v.value=M;for(let Ie=0;Ie<H;Ie++)Ie%2===0?(de=this.props.output0,fe=this.props.output1):(de=this.props.output1,fe=this.props.output0),this.uniforms.velocity_new.value=de.texture,this.props.output=fe,this.uniforms.dt.value=$,super.update();return fe}}class dt extends ge{constructor(M){super({material:{vertexShader:ne,fragmentShader:xe,uniforms:{boundarySpace:{value:M.boundarySpace},velocity:{value:M.src.texture},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst}),this.init()}update({vel:M}){this.uniforms.velocity.value=M.texture,super.update()}}class tt extends ge{constructor(M){super({material:{vertexShader:ne,fragmentShader:Fe,uniforms:{boundarySpace:{value:M.boundarySpace},pressure:{value:M.dst_.texture},divergence:{value:M.src.texture},px:{value:M.cellScale}}},output:M.dst,output0:M.dst_,output1:M.dst}),this.init()}update({iterations:M}){let H,$;for(let de=0;de<M;de++)de%2===0?(H=this.props.output0,$=this.props.output1):(H=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=$,super.update();return $}}class it extends ge{constructor(M){super({material:{vertexShader:ne,fragmentShader:ae,uniforms:{boundarySpace:{value:M.boundarySpace},pressure:{value:M.src_p.texture},velocity:{value:M.src_v.texture},px:{value:M.cellScale},dt:{value:M.dt}}},output:M.dst}),this.init()}update({vel:M,pressure:H}){this.uniforms.velocity.value=M.texture,this.uniforms.pressure.value=H.texture,super.update()}}class St{constructor(M){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...M},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new mt,this.cellScale=new mt,this.boundarySpace=new mt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Pa:sa}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:An,magFilter:An,wrapS:Ei,wrapT:Ei};for(let $ in this.fbos)this.fbos[$]=new ca(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Ce({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new De({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new He({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new tt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new it({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const M=Math.max(1,Math.round(this.options.resolution*ee.width)),H=Math.max(1,Math.round(this.options.resolution*ee.height)),$=1/M,de=1/H;this.cellScale.set($,de),this.fboSize.set(M,H)}resize(){this.calcSize();for(let M in this.fbos)this.fbos[M].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let M=this.fbos.vel_1;this.options.isViscous&&(M=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:M});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:M,pressure:H})}}class ot{constructor(){this.init()}init(){this.simulation=new St,this.scene=new k1,this.camera=new kd,this.output=new Hi(new Is(2,2),new Tc({vertexShader:ne,fragmentShader:X,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new mt},palette:{value:G},bgColor:{value:Q}}})),this.scene.add(this.output)}addScene(M){this.scene.add(M)}resize(){this.simulation.resize()}render(){ee.renderer.setRenderTarget(null),ee.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Jt{constructor(M){this.props=M,ee.init(M.$wrapper),B.init(M.$wrapper),B.autoIntensity=M.autoIntensity,B.takeoverDuration=M.takeoverDuration,this.lastUserInteraction=performance.now(),B.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new z(B,this,{enabled:M.autoDemo,speed:M.autoSpeed,resumeDelay:M.autoResumeDelay,rampDuration:M.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():R.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(ee.renderer.domElement),this.output=new ot}resize(){ee.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),B.update(),ee.update(),this.output.update()}loop(){this.running&&(this.render(),F.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,F.current&&(cancelAnimationFrame(F.current),F.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),B.dispose(),ee.renderer){const M=ee.renderer.domElement;M&&M.parentNode&&M.parentNode.removeChild(M),ee.renderer.dispose()}}catch{}}}const W=w.current;W.style.position=W.style.position||"relative",W.style.overflow=W.style.overflow||"hidden";const Ht=new Jt({$wrapper:W,autoDemo:x,autoSpeed:b,autoIntensity:E,takeoverDuration:_,autoResumeDelay:S,autoRampDuration:A});D.current=Ht,(()=>{if(!D.current)return;const U=D.current.output?.simulation;if(!U)return;const M=U.options.resolution;Object.assign(U.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:l,dt:c,BFECC:f,resolution:d,isBounce:h}),d!==M&&U.resize()})(),Ht.start();const Et=new IntersectionObserver(U=>{const M=U[0],H=M.isIntersecting&&M.intersectionRatio>0;R.current=H,D.current&&(H&&!document.hidden?D.current.start():D.current.pause())},{threshold:[0,.01,.1]});Et.observe(W),P.current=Et;const Ee=new ResizeObserver(()=>{D.current&&(O.current&&cancelAnimationFrame(O.current),O.current=requestAnimationFrame(()=>{D.current&&D.current.resize()}))});return Ee.observe(W),C.current=Ee,()=>{if(F.current&&cancelAnimationFrame(F.current),C.current)try{C.current.disconnect()}catch{}if(P.current)try{P.current.disconnect()}catch{}D.current&&D.current.dispose(),D.current=null}},[f,e,c,h,n,l,s,t,d,a,m,x,b,E,_,S,A]),I.useEffect(()=>{const J=D.current;if(!J)return;const G=J.output?.simulation;if(!G)return;const Q=G.options.resolution;Object.assign(G.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:a,iterations_viscous:s,iterations_poisson:l,dt:c,BFECC:f,resolution:d,isBounce:h}),J.autoDriver&&(J.autoDriver.enabled=x,J.autoDriver.speed=b,J.autoDriver.resumeDelay=S,J.autoDriver.rampDurationMs=A*1e3,J.autoDriver.mouse&&(J.autoDriver.mouse.autoIntensity=E,J.autoDriver.mouse.takeoverDuration=_)),d!==Q&&G.resize()},[t,e,n,a,s,l,c,f,d,h,x,b,E,_,S,A]),ie.jsx("div",{ref:w,className:`w-full h-full relative overflow-hidden pointer-events-none touch-none ${y||""}`,style:v})}const U4=({dark:t})=>t?ie.jsx("div",{className:"absolute inset-0 w-full h-full z-0 pointer-events-none",children:ie.jsx(N4,{colors:["#3AB0A1","#4DB6AC","#2C8C84"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#3AB0A1",color1:"#4DB6AC",color2:"#2C8C84"})}):null,P4=({sparkColor:t="#fff",sparkSize:e=10,sparkRadius:n=15,sparkCount:a=8,duration:s=400,easing:l="ease-out",extraScale:c=1,children:f})=>{const d=I.useRef(null),h=I.useRef([]),m=I.useRef(null);I.useEffect(()=>{const x=d.current;if(!x)return;const b=x.parentElement;if(!b)return;let E;const _=()=>{const{width:w,height:D}=b.getBoundingClientRect();(x.width!==w||x.height!==D)&&(x.width=w,x.height=D)},S=()=>{clearTimeout(E),E=setTimeout(_,100)},A=new ResizeObserver(S);return A.observe(b),_(),()=>{A.disconnect(),clearTimeout(E)}},[]);const v=I.useCallback(x=>{switch(l){case"linear":return x;case"ease-in":return x*x;case"ease-in-out":return x<.5?2*x*x:-1+(4-2*x)*x;default:return x*(2-x)}},[l]);I.useEffect(()=>{const x=d.current;if(!x)return;const b=x.getContext("2d");let E;const _=S=>{m.current||(m.current=S),b.clearRect(0,0,x.width,x.height),h.current=h.current.filter(A=>{const w=S-A.startTime;if(w>=s)return!1;const D=w/s,C=v(D),F=C*n*c,P=e*(1-C),R=A.x+F*Math.cos(A.angle),O=A.y+F*Math.sin(A.angle),J=A.x+(F+P)*Math.cos(A.angle),G=A.y+(F+P)*Math.sin(A.angle);return b.strokeStyle=t,b.lineWidth=2,b.beginPath(),b.moveTo(R,O),b.lineTo(J,G),b.stroke(),!0}),E=requestAnimationFrame(_)};return E=requestAnimationFrame(_),()=>{cancelAnimationFrame(E)}},[t,e,n,a,s,v,c]);const y=x=>{const b=d.current;if(!b)return;const E=b.getBoundingClientRect(),_=x.clientX-E.left,S=x.clientY-E.top,A=performance.now(),w=Array.from({length:a},(D,C)=>({x:_,y:S,angle:2*Math.PI*C/a,startTime:A}));h.current.push(...w)};return ie.jsxs("div",{className:"relative w-full h-full",onClick:y,children:[ie.jsx("canvas",{ref:d,className:"w-full h-full block absolute top-0 left-0 select-none pointer-events-none"}),f]})},O4="/jom/assets/ja-dark-logo-ZxTjwZnx.png",F4="/jom/assets/ja-light-logo-Ci6wKJV0.jpg";function I4({background:t,minHeight:e="min-h-[60vh]",overlay:n=!0,overlayColor:a="bg-black/60",className:s="",children:l,dark:c=!1}){return ie.jsxs("div",{className:`relative w-full ${e} overflow-hidden ${s}`,children:[ie.jsx("img",{src:t,alt:"Background",className:"absolute inset-0 w-full h-full object-cover"}),n&&ie.jsx("div",{className:`absolute inset-0 ${a}`}),ie.jsx("div",{className:"relative z-10 w-full h-full flex items-center justify-center px-6 py-12",children:l})]})}const B4="/jom/assets/cover-CK56cgiR.jpg",z4="/jom/assets/cover-DHEsJxBq.png",Jr="react-horizontal-scrolling-menu",V4=`${Jr}--item`,H4=`${Jr}--scroll-container`,G4=`${Jr}--wrapper`,k4=`${Jr}--inner-wrapper`,W4=`${Jr}--header`,X4=`${Jr}--arrow-left`,j4=`${Jr}--arrow-right`,q4=`${Jr}--footer`,Y4="itemId",IA="data-key",BA="data-index",ra={first:"first",last:"last",onInit:"onInit",onUpdate:"onUpdate"},Fi="",$4={current:null};let K4=class{constructor(){this.subscribe=(e,n)=>{this.observers.set(e,(this.observers.get(e)||[]).concat(n))},this.unsubscribe=(e,n)=>{const a=(this.observers.get(e)||[]).filter((s=>s!==n));a.length?this.observers.set(e,a):this.observers.delete(e)},this.emitUpdates=(e,n)=>{const a=this.observers.get(e)||[];a?.forEach((s=>s(n)))},this.updateBatch=(e,n=!0)=>{e.length&&(e.forEach((([a,s])=>this.emitUpdates(a,s))),n&&this.emitUpdates(ra.onUpdate))},this.update=(e,n)=>{this.emitUpdates(e,n),this.emitUpdates(ra.onUpdate)},this.observers=new Map}},Z4=class extends Map{constructor(){super(),this.subscribe=(e,n)=>this.observer.subscribe(e,n),this.unsubscribe=(e,n)=>this.observer.unsubscribe(e,n),this.isEdgeItem=({key:e,value:n,first:a=this.first(),last:s=this.last()})=>{const l=[];return e===a?.key?l.push([ra.first,n]):e===s?.key&&l.push([ra.last,n]),l},this.edgeItemsCheck=e=>{const n=this.first(),a=this.last(),s=e.find((([f])=>f===n?.key)),l=[];s&&l.push([ra.first,s[1]]);const c=e.find((([f])=>f===a?.key));return c&&l.push([ra.last,c[1]]),l},this.toArr=()=>this.sort([...this]),this.toItems=()=>this.toArr().map((([e])=>e)),this.sort=e=>e.sort((([,n],[,a])=>+n.index-+a.index)),this.set=(e,n)=>{const a=String(e),s=[[a,n]];return super.set(a,n),s.push(...this.isEdgeItem({key:a,value:n,first:this.first(),last:this.last()})),this.observer.updateBatch(s),this},this.setBatch=e=>{this.firstRun&&this.observer.update(ra.onInit);const n=[...e];return this.sort(n).forEach((([a,s])=>{super.set(String(a),s)})),n.push(...this.edgeItemsCheck(n)),this.observer.updateBatch(n,!this.firstRun),this.firstRun=!1,this},this.first=()=>{var e;return(e=this.toArr()[0])===null||e===void 0?void 0:e[1]},this.last=()=>{var e,n;return(n=(e=this.toArr().slice(-1))===null||e===void 0?void 0:e[0])===null||n===void 0?void 0:n[1]},this.filter=e=>this.toArr().filter(e),this.find=e=>this.toArr().find(e),this.findIndex=e=>this.toArr().findIndex(e),this.getCurrentPos=e=>{const n=this.toArr(),a=n.findIndex((([s,l])=>s===e||l===e));return[n,a]},this.prev=e=>{var n;const[a,s]=this.getCurrentPos(e);return s!==-1?(n=a[s-1])===null||n===void 0?void 0:n[1]:void 0},this.next=e=>{var n;const[a,s]=this.getCurrentPos(e);return s!==-1?(n=a[s+1])===null||n===void 0?void 0:n[1]:void 0},this.getVisible=()=>this.filter((e=>e[1].visible)),this.observer=new K4,this.firstRun=!0}};const EM=t=>typeof t=="object"&&t!=null&&t.nodeType===1,TM=(t,e)=>(!e||t!=="hidden")&&t!=="visible"&&t!=="clip",y0=(t,e)=>{if(t.clientHeight<t.scrollHeight||t.clientWidth<t.scrollWidth){const n=getComputedStyle(t,null);return TM(n.overflowY,e)||TM(n.overflowX,e)||(a=>{const s=(l=>{if(!l.ownerDocument||!l.ownerDocument.defaultView)return null;try{return l.ownerDocument.defaultView.frameElement}catch{return null}})(a);return!!s&&(s.clientHeight<a.scrollHeight||s.clientWidth<a.scrollWidth)})(t)}return!1},ed=(t,e,n,a,s,l,c,f)=>l<t&&c>e||l>t&&c<e?0:l<=t&&f<=n||c>=e&&f>=n?l-t-a:c>e&&f<n||l<t&&f>n?c-e+s:0,Q4=t=>{const e=t.parentElement;return e??(t.getRootNode().host||null)},AM=(t,e)=>{var n,a,s,l;if(typeof document>"u")return[];const{scrollMode:c,block:f,inline:d,boundary:h,skipOverflowHiddenElements:m}=e,v=typeof h=="function"?h:B=>B!==h;if(!EM(t))throw new TypeError("Invalid target");const y=document.scrollingElement||document.documentElement,x=[];let b=t;for(;EM(b)&&v(b);){if(b=Q4(b),b===y){x.push(b);break}b!=null&&b===document.body&&y0(b)&&!y0(document.documentElement)||b!=null&&y0(b,m)&&x.push(b)}const E=(a=(n=window.visualViewport)==null?void 0:n.width)!=null?a:innerWidth,_=(l=(s=window.visualViewport)==null?void 0:s.height)!=null?l:innerHeight,{scrollX:S,scrollY:A}=window,{height:w,width:D,top:C,right:F,bottom:P,left:R}=t.getBoundingClientRect(),{top:O,right:J,bottom:G,left:Q}=(B=>{const z=window.getComputedStyle(B);return{top:parseFloat(z.scrollMarginTop)||0,right:parseFloat(z.scrollMarginRight)||0,bottom:parseFloat(z.scrollMarginBottom)||0,left:parseFloat(z.scrollMarginLeft)||0}})(t);let te=f==="start"||f==="nearest"?C-O:f==="end"?P+G:C+w/2-O+G,ee=d==="center"?R+D/2-Q+J:d==="end"?F+J:R-Q;const K=[];for(let B=0;B<x.length;B++){const z=x[B],{height:ne,width:he,top:ve,right:V,bottom:X,left:xe}=z.getBoundingClientRect();if(c==="if-needed"&&C>=0&&R>=0&&P<=_&&F<=E&&C>=ve&&P<=X&&R>=xe&&F<=V)return K;const we=getComputedStyle(z),Fe=parseInt(we.borderLeftWidth,10),ae=parseInt(we.borderTopWidth,10),Se=parseInt(we.borderRightWidth,10),ge=parseInt(we.borderBottomWidth,10);let Ce=0,De=0;const He="offsetWidth"in z?z.offsetWidth-z.clientWidth-Fe-Se:0,dt="offsetHeight"in z?z.offsetHeight-z.clientHeight-ae-ge:0,tt="offsetWidth"in z?z.offsetWidth===0?0:he/z.offsetWidth:0,it="offsetHeight"in z?z.offsetHeight===0?0:ne/z.offsetHeight:0;if(y===z)Ce=f==="start"?te:f==="end"?te-_:f==="nearest"?ed(A,A+_,_,ae,ge,A+te,A+te+w,w):te-_/2,De=d==="start"?ee:d==="center"?ee-E/2:d==="end"?ee-E:ed(S,S+E,E,Fe,Se,S+ee,S+ee+D,D),Ce=Math.max(0,Ce+A),De=Math.max(0,De+S);else{Ce=f==="start"?te-ve-ae:f==="end"?te-X+ge+dt:f==="nearest"?ed(ve,X,ne,ae,ge+dt,te,te+w,w):te-(ve+ne/2)+dt/2,De=d==="start"?ee-xe-Fe:d==="center"?ee-(xe+he/2)+He/2:d==="end"?ee-V+Se+He:ed(xe,V,he,Fe,Se+He,ee,ee+D,D);const{scrollLeft:St,scrollTop:ot}=z;Ce=it===0?0:Math.max(0,Math.min(ot+Ce/it,z.scrollHeight-ne/it+dt)),De=tt===0?0:Math.max(0,Math.min(St+De/tt,z.scrollWidth-he/tt+He)),te+=ot-Ce,ee+=St-De}K.push({el:z,top:Ce,left:De})}return K};function wM(t,e){if(!t.isConnected||!(s=>{let l=s;for(;l&&l.parentNode;){if(l.parentNode===document)return!0;l=l.parentNode instanceof ShadowRoot?l.parentNode.host:l.parentNode}return!1})(t))return;const n=(s=>{const l=window.getComputedStyle(s);return{top:parseFloat(l.scrollMarginTop)||0,right:parseFloat(l.scrollMarginRight)||0,bottom:parseFloat(l.scrollMarginBottom)||0,left:parseFloat(l.scrollMarginLeft)||0}})(t);if((s=>typeof s=="object"&&typeof s.behavior=="function")(e))return e.behavior(AM(t,e));const a=typeof e=="boolean"||e==null?void 0:e.behavior;for(const{el:s,top:l,left:c}of AM(t,(f=>f===!1?{block:"end",inline:"nearest"}:(d=>d===Object(d)&&Object.keys(d).length!==0)(f)?f:{block:"start",inline:"nearest"})(e))){const f=l-n.top+n.bottom,d=c-n.left+n.right;s.scroll({top:f,left:d,behavior:a})}}let x0;const zA=()=>(x0||(x0="performance"in window?performance.now.bind(performance):Date.now),x0());function VA(t){const e=zA(),n=Math.min((e-t.startTime)/t.duration,1),a=t.ease(n),s=t.startX+(t.x-t.startX)*a,l=t.startY+(t.y-t.startY)*a;t.method(s,l,n,a),s!==t.x||l!==t.y?requestAnimationFrame((()=>VA(t))):t.cb()}function J4(t,e,n){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:600,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:m=>1+--m*m*m*m*m,l=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;const f=t,d=t.scrollLeft,h=t.scrollTop;VA({scrollable:f,method:(m,v,y,x)=>{const b=Math.ceil(m),E=Math.ceil(v);t.scrollLeft=b,t.scrollTop=E,c?.({target:t,elapsed:y,value:x,left:b,top:E})},startTime:zA(),startX:d,startY:h,x:e,y:n,duration:a,ease:s,cb:l})}const ez=function(t,e){const n=e||{};return(a=>a&&!a.behavior||a.behavior==="smooth")(n)?wM(t,{block:n.block,inline:n.inline,scrollMode:n.scrollMode,boundary:n.boundary,skipOverflowHiddenElements:n.skipOverflowHiddenElements,behavior:a=>Promise.all(a.reduce(((s,l)=>{let{el:c,left:f,top:d}=l;const h=c.scrollLeft,m=c.scrollTop;return h===f&&m===d?s:[...s,new Promise((v=>J4(c,f,d,n.duration,n.ease,(()=>v({el:c,left:[h,f],top:[m,d]})),n.onScrollChange)))]}),[]))}):Promise.resolve(wM(t,e))},tz=t=>Object.values(t).map((e=>e.current)).filter(Boolean);function _0(t,e,n,a,s,l){var c;const f=((c=t?.entry)===null||c===void 0?void 0:c.target)||t;if(!f)return;const d={behavior:e||"smooth",inline:n||"end",block:a||"nearest"};return l?f.scrollIntoView(d):ez(f,Object.assign(Object.assign({},s),d))}const nz=t=>document.querySelector(`[${IA}='${t}']`),iz=t=>document.querySelector(`[${BA}='${t}']`);function td(t){return Xe.isValidElement(t)&&t||typeof t=="function"&&Xe.createElement(t,null)||!!t&&typeof t=="object"&&Xe.createElement(t,null)||null}const HA=t=>{var e;return String(((e=t?.props)===null||e===void 0?void 0:e[Y4])||(t?.key||Fi).replace(/^\.\$/,Fi))};function jg(t){return!!t&&Object.prototype.hasOwnProperty.call(t,"current")}var az=Xe.memo((function({children:t,className:e,id:n,index:a,refs:s}){const l=Xe.useRef(null);return s[String(a)]=l,Xe.createElement("div",{className:e,[IA]:n,[BA]:a,ref:l},t)}));function rz({children:t,itemClassName:e=Fi,refs:n}){const a=Xe.Children.toArray(t).filter(Boolean),s=Xe.useMemo((()=>`${V4} ${e}`),[e]);return a.map(((l,c)=>{const f=HA(l);return Xe.createElement(az,{className:s,id:f,key:f,refs:n,index:c},l)}))}function sz({className:t=Fi,children:e,onScroll:n=(()=>{}),scrollRef:a,containerRef:s}){const l=Xe.useMemo((()=>`${H4} ${t}`),[t]),c=Xe.useCallback((f=>{jg(a)?a.current=f:a(f),jg(s)?s.current=f:s(f)}),[a,s]);return Xe.createElement("div",{className:l,onScroll:n,ref:c},e)}const ey=Xe.createContext({}),GA=typeof window<"u"?Xe.useLayoutEffect:Xe.useEffect;function oz({items:t,itemsChanged:e,refs:n,options:a}){const s=Xe.useRef(),l=Xe.useCallback((c=>{t.setBatch((function(f,d){return[...f].map((h=>{var m,v,y,x;const b=h.target,E=String((v=(m=b?.dataset)===null||m===void 0?void 0:m.key)!==null&&v!==void 0?v:Fi);return[E,{index:String((x=(y=b?.dataset)===null||y===void 0?void 0:y.index)!==null&&x!==void 0?x:Fi),key:E,entry:h,visible:h.intersectionRatio>=d.ratio}]}))})(c,a))}),[t,a]);GA((()=>{const c=tz(n),f=s.current||new IntersectionObserver(l,a);return s.current=f,c.forEach((d=>f.observe(d))),()=>{f.disconnect(),s.current=void 0}}),[l,e,a,n])}const lz=t=>Xe.Children.toArray(t).map(HA).filter(Boolean),RM={ratio:.9,rootMargin:"5px",threshold:[.05,.5,.75,.95]},cz={current:{}},nd=()=>{};function uz({LeftArrow:t,RightArrow:e,children:n,Header:a,Footer:s,transitionDuration:l=500,transitionBehavior:c,onInit:f=nd,onUpdate:d=nd,onMouseDown:h,onMouseLeave:m,onMouseUp:v,onMouseMove:y,onScroll:x=nd,onTouchMove:b,onTouchStart:E,onTouchEnd:_,onWheel:S=nd,options:A=RM,scrollContainerClassName:w=Fi,containerRef:D=$4,itemClassName:C=Fi,wrapperClassName:F=Fi,apiRef:P=cz,RTL:R,noPolyfill:O=!0}){const J=td(t),G=td(e),Q=td(a),te=td(s),ee=Xe.useRef(null),[K]=Xe.useState({}),B=Xe.useMemo((()=>Object.assign(Object.assign(Object.assign({},RM),A),{root:ee.current})),[A]),z=Xe.useRef(new Z4).current,ne=(function(ge,Ce){const[De,He]=Xe.useState(Fi),dt=Xe.useMemo((()=>lz(ge)),[ge]);return Xe.useEffect((()=>{const tt=dt.filter(Boolean).join(Fi);Ce.toItems().filter((it=>!dt.includes(it))).forEach((it=>{Ce.delete(it)})),He(tt)}),[dt,Ce]),De})(n,z),he=((ge,Ce)=>{const De=Xe.useRef(!0),He=Xe.useMemo((()=>[Ce-.05,Ce-.01,Ce,Ce+.01,Ce+.05]),[Ce]),dt=Xe.useCallback((tt=>{var it;De.current=((it=tt?.[0])===null||it===void 0?void 0:it.intersectionRatio)>=Ce}),[Ce]);return GA((()=>{const tt=new IntersectionObserver(dt,{threshold:He,rootMargin:"0px"});return ge.current&&tt.observe(ge.current),()=>tt.disconnect()}),[De,ge,dt,He]),De})(ee,B.ratio+.05<1?B.ratio+.05:.95);oz(Xe.useMemo((()=>({items:z,itemsChanged:ne,options:B,refs:K})),[z,ne,K,B]));const ve=Xe.useMemo((()=>(function(ge,Ce,De,He){var dt,tt,it;const St=(Ee,U=!1)=>{const[M,H]=Xe.useState(U),$=Xe.useCallback((de=>{H(!!de?.visible)}),[]);return Xe.useEffect((()=>(ge.subscribe(Ee,$),()=>{ge.unsubscribe(Ee,$)})),[Ee,$]),M},ot=!!(!((dt=ge.first())===null||dt===void 0)&&dt.visible),Jt=!!(!((tt=ge.last())===null||tt===void 0)&&tt.visible),W=Ee=>{var U;return(U=ge.find((M=>M[1].key===String(Ee))))===null||U===void 0?void 0:U[1]},Ht=()=>{var Ee,U;const M=(U=(Ee=ge.getVisible())===null||Ee===void 0?void 0:Ee[0])===null||U===void 0?void 0:U[1];return M?ge.prev(M):void 0},Mt=()=>{var Ee;const U=(Ee=ge.getVisible().findLast((()=>!0)))===null||Ee===void 0?void 0:Ee[1];return U?ge.next(U):void 0},Et=(it=De?.boundary)===null||it===void 0?void 0:it.current;return{getItemById:W,getItemElementById:nz,getItemByIndex:Ee=>{var U;return(U=ge.find((M=>String(M[1].index)===String(Ee))))===null||U===void 0?void 0:U[1]},getItemElementByIndex:iz,getNextElement:Mt,getPrevElement:Ht,isFirstItemVisible:ot,isItemVisible:Ee=>ge.getVisible().map((U=>U[0])).includes(String(Ee)),isLastItem:Ee=>ge.last()===W(Ee),isLastItemVisible:Jt,scrollNext:(Ee,U,M,{duration:H,boundary:$=Et}={})=>{const de=Ee??De?.behavior;return _0(Mt(),de,U||"start",M||"nearest",{boundary:$,duration:H??De?.duration},He)},scrollPrev:(Ee,U,M,{duration:H,boundary:$=Et}={})=>{const de=Ee??De?.behavior;return _0(Ht(),de,U||"end",M||"nearest",{boundary:$,duration:H??De?.duration},He)},useIsVisible:St,useLeftArrowVisible:()=>{const Ee=St("first",!0),[U,M]=Xe.useState(Ee);return Xe.useEffect((()=>{Ce.current&&M(Ee)}),[Ee]),U},useRightArrowVisible:()=>{const Ee=St("last",!1),[U,M]=Xe.useState(Ee);return Xe.useEffect((()=>{Ce.current&&M(Ee)}),[Ee]),U},scrollToItem:(Ee,U,M,H,$)=>{var de;return _0(Ee,U??De?.behavior,M,H,Object.assign(Object.assign({boundary:Et},$),{duration:(de=$?.duration)!==null&&de!==void 0?de:De?.duration}),He)}}})(z,he,{duration:l,behavior:c,boundary:ee},O)),[z,l,c,O,he]),V=Xe.useCallback((()=>Object.assign(Object.assign({},ve),{items:z,scrollContainer:ee,menuVisible:he})),[ve,z,ee,he]),[X,xe]=Xe.useState((()=>V()));(({context:ge,onInit:Ce,onUpdate:De})=>{const He=Xe.useCallback((()=>Ce(ge)),[Ce,ge]),dt=Xe.useCallback((()=>De(ge)),[De,ge]),{items:tt}=ge;Xe.useEffect((()=>(tt.subscribe(ra.onInit,He),tt.subscribe(ra.onUpdate,dt),()=>{tt.unsubscribe(ra.onInit,He),tt.unsubscribe(ra.onUpdate,dt)})),[tt,He,dt])})({context:X,onInit:f,onUpdate:d}),Xe.useEffect((()=>xe(V())),[V]),Xe.useEffect((()=>{jg(P)?P.current=X:P(X)}),[X,P]);const we=Xe.useCallback((ge=>x(X,ge)),[x,X]),Fe=Xe.useCallback((ge=>S(X,ge)),[S,X]),ae=Xe.useMemo((()=>`${G4} ${F}`),[F]),Se=Xe.useMemo((()=>`${w}${R?" rtl":Fi}`),[R,w]);return Xe.createElement("div",{className:ae,onWheel:Fe,onMouseDown:h?.(X),onMouseLeave:m?.(X),onMouseUp:v?.(X),onMouseMove:y?.(X),onTouchStart:E?.(X),onTouchMove:b?.(X),onTouchEnd:_?.(X)},Xe.createElement(ey.Provider,{value:X},Xe.createElement("div",{className:W4},Q),Xe.createElement("div",{className:k4},Xe.createElement("div",{className:X4},J),Xe.createElement(sz,{className:Se,onScroll:we,scrollRef:ee,containerRef:D},Xe.createElement(rz,{refs:K,itemClassName:C},n)),Xe.createElement("div",{className:j4},G)),Xe.createElement("div",{className:q4},te)))}function fz(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function dz(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var hz=(function(){function t(n){var a=this;this._insertTag=function(s){var l;a.tags.length===0?a.insertionPoint?l=a.insertionPoint.nextSibling:a.prepend?l=a.container.firstChild:l=a.before:l=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(s,l),a.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(a){a.forEach(this._insertTag)},e.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(dz(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=fz(s);try{l.insertRule(a,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(a));this.ctr++},e.flush=function(){this.tags.forEach(function(a){var s;return(s=a.parentNode)==null?void 0:s.removeChild(a)}),this.tags=[],this.ctr=0},t})(),jn="-ms-",Wd="-moz-",Bt="-webkit-",kA="comm",ty="rule",ny="decl",pz="@import",WA="@keyframes",mz="@layer",gz=Math.abs,ih=String.fromCharCode,vz=Object.assign;function yz(t,e){return Hn(t,0)^45?(((e<<2^Hn(t,0))<<2^Hn(t,1))<<2^Hn(t,2))<<2^Hn(t,3):0}function XA(t){return t.trim()}function xz(t,e){return(t=e.exec(t))?t[0]:t}function zt(t,e,n){return t.replace(e,n)}function qg(t,e){return t.indexOf(e)}function Hn(t,e){return t.charCodeAt(e)|0}function Xc(t,e,n){return t.slice(e,n)}function ba(t){return t.length}function iy(t){return t.length}function id(t,e){return e.push(t),t}function _z(t,e){return t.map(e).join("")}var ah=1,al=1,jA=0,di=0,Tn=0,ml="";function rh(t,e,n,a,s,l,c){return{value:t,root:e,parent:n,type:a,props:s,children:l,line:ah,column:al,length:c,return:""}}function _c(t,e){return vz(rh("",null,null,"",null,null,0),t,{length:-t.length},e)}function Sz(){return Tn}function bz(){return Tn=di>0?Hn(ml,--di):0,al--,Tn===10&&(al=1,ah--),Tn}function Ti(){return Tn=di<jA?Hn(ml,di++):0,al++,Tn===10&&(al=1,ah++),Tn}function Ca(){return Hn(ml,di)}function Ed(){return di}function ou(t,e){return Xc(ml,t,e)}function jc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qA(t){return ah=al=1,jA=ba(ml=t),di=0,[]}function YA(t){return ml="",t}function Td(t){return XA(ou(di-1,Yg(t===91?t+2:t===40?t+1:t)))}function Mz(t){for(;(Tn=Ca())&&Tn<33;)Ti();return jc(t)>2||jc(Tn)>3?"":" "}function Ez(t,e){for(;--e&&Ti()&&!(Tn<48||Tn>102||Tn>57&&Tn<65||Tn>70&&Tn<97););return ou(t,Ed()+(e<6&&Ca()==32&&Ti()==32))}function Yg(t){for(;Ti();)switch(Tn){case t:return di;case 34:case 39:t!==34&&t!==39&&Yg(Tn);break;case 40:t===41&&Yg(t);break;case 92:Ti();break}return di}function Tz(t,e){for(;Ti()&&t+Tn!==57;)if(t+Tn===84&&Ca()===47)break;return"/*"+ou(e,di-1)+"*"+ih(t===47?t:Ti())}function Az(t){for(;!jc(Ca());)Ti();return ou(t,di)}function wz(t){return YA(Ad("",null,null,null,[""],t=qA(t),0,[0],t))}function Ad(t,e,n,a,s,l,c,f,d){for(var h=0,m=0,v=c,y=0,x=0,b=0,E=1,_=1,S=1,A=0,w="",D=s,C=l,F=a,P=w;_;)switch(b=A,A=Ti()){case 40:if(b!=108&&Hn(P,v-1)==58){qg(P+=zt(Td(A),"&","&\f"),"&\f")!=-1&&(S=-1);break}case 34:case 39:case 91:P+=Td(A);break;case 9:case 10:case 13:case 32:P+=Mz(b);break;case 92:P+=Ez(Ed()-1,7);continue;case 47:switch(Ca()){case 42:case 47:id(Rz(Tz(Ti(),Ed()),e,n),d);break;default:P+="/"}break;case 123*E:f[h++]=ba(P)*S;case 125*E:case 59:case 0:switch(A){case 0:case 125:_=0;case 59+m:S==-1&&(P=zt(P,/\f/g,"")),x>0&&ba(P)-v&&id(x>32?DM(P+";",a,n,v-1):DM(zt(P," ","")+";",a,n,v-2),d);break;case 59:P+=";";default:if(id(F=CM(P,e,n,h,m,s,f,w,D=[],C=[],v),l),A===123)if(m===0)Ad(P,e,F,F,D,l,v,f,C);else switch(y===99&&Hn(P,3)===110?100:y){case 100:case 108:case 109:case 115:Ad(t,F,F,a&&id(CM(t,F,F,0,0,s,f,w,s,D=[],v),C),s,C,v,f,a?D:C);break;default:Ad(P,F,F,F,[""],C,0,f,C)}}h=m=x=0,E=S=1,w=P="",v=c;break;case 58:v=1+ba(P),x=b;default:if(E<1){if(A==123)--E;else if(A==125&&E++==0&&bz()==125)continue}switch(P+=ih(A),A*E){case 38:S=m>0?1:(P+="\f",-1);break;case 44:f[h++]=(ba(P)-1)*S,S=1;break;case 64:Ca()===45&&(P+=Td(Ti())),y=Ca(),m=v=ba(w=P+=Az(Ed())),A++;break;case 45:b===45&&ba(P)==2&&(E=0)}}return l}function CM(t,e,n,a,s,l,c,f,d,h,m){for(var v=s-1,y=s===0?l:[""],x=iy(y),b=0,E=0,_=0;b<a;++b)for(var S=0,A=Xc(t,v+1,v=gz(E=c[b])),w=t;S<x;++S)(w=XA(E>0?y[S]+" "+A:zt(A,/&\f/g,y[S])))&&(d[_++]=w);return rh(t,e,n,s===0?ty:f,d,h,m)}function Rz(t,e,n){return rh(t,e,n,kA,ih(Sz()),Xc(t,2,-2),0)}function DM(t,e,n,a){return rh(t,e,n,ny,Xc(t,0,a),Xc(t,a+1,-1),a)}function Zo(t,e){for(var n="",a=iy(t),s=0;s<a;s++)n+=e(t[s],s,t,e)||"";return n}function Cz(t,e,n,a){switch(t.type){case mz:if(t.children.length)break;case pz:case ny:return t.return=t.return||t.value;case kA:return"";case WA:return t.return=t.value+"{"+Zo(t.children,a)+"}";case ty:t.value=t.props.join(",")}return ba(n=Zo(t.children,a))?t.return=t.value+"{"+n+"}":""}function Dz(t){var e=iy(t);return function(n,a,s,l){for(var c="",f=0;f<e;f++)c+=t[f](n,a,s,l)||"";return c}}function Lz(t){return function(e){e.root||(e=e.return)&&t(e)}}function Nz(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Uz=function(e,n,a){for(var s=0,l=0;s=l,l=Ca(),s===38&&l===12&&(n[a]=1),!jc(l);)Ti();return ou(e,di)},Pz=function(e,n){var a=-1,s=44;do switch(jc(s)){case 0:s===38&&Ca()===12&&(n[a]=1),e[a]+=Uz(di-1,n,a);break;case 2:e[a]+=Td(s);break;case 4:if(s===44){e[++a]=Ca()===58?"&\f":"",n[a]=e[a].length;break}default:e[a]+=ih(s)}while(s=Ti());return e},Oz=function(e,n){return YA(Pz(qA(e),n))},LM=new WeakMap,Fz=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,a=e.parent,s=e.column===a.column&&e.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!LM.get(a))&&!s){LM.set(e,!0);for(var l=[],c=Oz(n,l),f=a.props,d=0,h=0;d<c.length;d++)for(var m=0;m<f.length;m++,h++)e.props[h]=l[d]?c[d].replace(/&\f/g,f[m]):f[m]+" "+c[d]}}},Iz=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function $A(t,e){switch(yz(t,e)){case 5103:return Bt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Bt+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Bt+t+Wd+t+jn+t+t;case 6828:case 4268:return Bt+t+jn+t+t;case 6165:return Bt+t+jn+"flex-"+t+t;case 5187:return Bt+t+zt(t,/(\w+).+(:[^]+)/,Bt+"box-$1$2"+jn+"flex-$1$2")+t;case 5443:return Bt+t+jn+"flex-item-"+zt(t,/flex-|-self/,"")+t;case 4675:return Bt+t+jn+"flex-line-pack"+zt(t,/align-content|flex-|-self/,"")+t;case 5548:return Bt+t+jn+zt(t,"shrink","negative")+t;case 5292:return Bt+t+jn+zt(t,"basis","preferred-size")+t;case 6060:return Bt+"box-"+zt(t,"-grow","")+Bt+t+jn+zt(t,"grow","positive")+t;case 4554:return Bt+zt(t,/([^-])(transform)/g,"$1"+Bt+"$2")+t;case 6187:return zt(zt(zt(t,/(zoom-|grab)/,Bt+"$1"),/(image-set)/,Bt+"$1"),t,"")+t;case 5495:case 3959:return zt(t,/(image-set\([^]*)/,Bt+"$1$`$1");case 4968:return zt(zt(t,/(.+:)(flex-)?(.*)/,Bt+"box-pack:$3"+jn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Bt+t+t;case 4095:case 3583:case 4068:case 2532:return zt(t,/(.+)-inline(.+)/,Bt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ba(t)-1-e>6)switch(Hn(t,e+1)){case 109:if(Hn(t,e+4)!==45)break;case 102:return zt(t,/(.+:)(.+)-([^]+)/,"$1"+Bt+"$2-$3$1"+Wd+(Hn(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~qg(t,"stretch")?$A(zt(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Hn(t,e+1)!==115)break;case 6444:switch(Hn(t,ba(t)-3-(~qg(t,"!important")&&10))){case 107:return zt(t,":",":"+Bt)+t;case 101:return zt(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Bt+(Hn(t,14)===45?"inline-":"")+"box$3$1"+Bt+"$2$3$1"+jn+"$2box$3")+t}break;case 5936:switch(Hn(t,e+11)){case 114:return Bt+t+jn+zt(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Bt+t+jn+zt(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Bt+t+jn+zt(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Bt+t+jn+t+t}return t}var Bz=function(e,n,a,s){if(e.length>-1&&!e.return)switch(e.type){case ny:e.return=$A(e.value,e.length);break;case WA:return Zo([_c(e,{value:zt(e.value,"@","@"+Bt)})],s);case ty:if(e.length)return _z(e.props,function(l){switch(xz(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Zo([_c(e,{props:[zt(l,/:(read-\w+)/,":"+Wd+"$1")]})],s);case"::placeholder":return Zo([_c(e,{props:[zt(l,/:(plac\w+)/,":"+Bt+"input-$1")]}),_c(e,{props:[zt(l,/:(plac\w+)/,":"+Wd+"$1")]}),_c(e,{props:[zt(l,/:(plac\w+)/,jn+"input-$1")]})],s)}return""})}},zz=[Bz],Vz=function(e){var n=e.key;if(n==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(E){var _=E.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(E),E.setAttribute("data-s",""))})}var s=e.stylisPlugins||zz,l={},c,f=[];c=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(E){for(var _=E.getAttribute("data-emotion").split(" "),S=1;S<_.length;S++)l[_[S]]=!0;f.push(E)});var d,h=[Fz,Iz];{var m,v=[Cz,Lz(function(E){m.insert(E)})],y=Dz(h.concat(s,v)),x=function(_){return Zo(wz(_),y)};d=function(_,S,A,w){m=A,x(_?_+"{"+S.styles+"}":S.styles),w&&(b.inserted[S.name]=!0)}}var b={key:n,sheet:new hz({key:n,container:c,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:d};return b.sheet.hydrate(f),b},S0={exports:{}},kt={};var NM;function Hz(){if(NM)return kt;NM=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,l=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,h=t?Symbol.for("react.concurrent_mode"):60111,m=t?Symbol.for("react.forward_ref"):60112,v=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,x=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,E=t?Symbol.for("react.block"):60121,_=t?Symbol.for("react.fundamental"):60117,S=t?Symbol.for("react.responder"):60118,A=t?Symbol.for("react.scope"):60119;function w(C){if(typeof C=="object"&&C!==null){var F=C.$$typeof;switch(F){case e:switch(C=C.type,C){case d:case h:case a:case l:case s:case v:return C;default:switch(C=C&&C.$$typeof,C){case f:case m:case b:case x:case c:return C;default:return F}}case n:return F}}}function D(C){return w(C)===h}return kt.AsyncMode=d,kt.ConcurrentMode=h,kt.ContextConsumer=f,kt.ContextProvider=c,kt.Element=e,kt.ForwardRef=m,kt.Fragment=a,kt.Lazy=b,kt.Memo=x,kt.Portal=n,kt.Profiler=l,kt.StrictMode=s,kt.Suspense=v,kt.isAsyncMode=function(C){return D(C)||w(C)===d},kt.isConcurrentMode=D,kt.isContextConsumer=function(C){return w(C)===f},kt.isContextProvider=function(C){return w(C)===c},kt.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===e},kt.isForwardRef=function(C){return w(C)===m},kt.isFragment=function(C){return w(C)===a},kt.isLazy=function(C){return w(C)===b},kt.isMemo=function(C){return w(C)===x},kt.isPortal=function(C){return w(C)===n},kt.isProfiler=function(C){return w(C)===l},kt.isStrictMode=function(C){return w(C)===s},kt.isSuspense=function(C){return w(C)===v},kt.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===a||C===h||C===l||C===s||C===v||C===y||typeof C=="object"&&C!==null&&(C.$$typeof===b||C.$$typeof===x||C.$$typeof===c||C.$$typeof===f||C.$$typeof===m||C.$$typeof===_||C.$$typeof===S||C.$$typeof===A||C.$$typeof===E)},kt.typeOf=w,kt}var UM;function Gz(){return UM||(UM=1,S0.exports=Hz()),S0.exports}var b0,PM;function kz(){if(PM)return b0;PM=1;var t=Gz(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};l[t.ForwardRef]=a,l[t.Memo]=s;function c(b){return t.isMemo(b)?s:l[b.$$typeof]||e}var f=Object.defineProperty,d=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,m=Object.getOwnPropertyDescriptor,v=Object.getPrototypeOf,y=Object.prototype;function x(b,E,_){if(typeof E!="string"){if(y){var S=v(E);S&&S!==y&&x(b,S,_)}var A=d(E);h&&(A=A.concat(h(E)));for(var w=c(b),D=c(E),C=0;C<A.length;++C){var F=A[C];if(!n[F]&&!(_&&_[F])&&!(D&&D[F])&&!(w&&w[F])){var P=m(E,F);try{f(b,F,P)}catch{}}}}return b}return b0=x,b0}kz();var Wz=!0;function KA(t,e,n){var a="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):s&&(a+=s+" ")}),a}var ay=function(e,n,a){var s=e.key+"-"+n.name;(a===!1||Wz===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},ZA=function(e,n,a){ay(e,n,a);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var l=n;do e.insert(n===l?"."+s:"",l,e.sheet,!0),l=l.next;while(l!==void 0)}};function Xz(t){for(var e=0,n,a=0,s=t.length;s>=4;++a,s-=4)n=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(a+2)&255)<<16;case 2:e^=(t.charCodeAt(a+1)&255)<<8;case 1:e^=t.charCodeAt(a)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var jz={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},qz=/[A-Z]|^ms/g,Yz=/_EMO_([^_]+?)_([^]*?)_EMO_/g,QA=function(e){return e.charCodeAt(1)===45},OM=function(e){return e!=null&&typeof e!="boolean"},M0=Nz(function(t){return QA(t)?t:t.replace(qz,"-$&").toLowerCase()}),FM=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Yz,function(a,s,l){return Ma={name:s,styles:l,next:Ma},s})}return jz[e]!==1&&!QA(e)&&typeof n=="number"&&n!==0?n+"px":n};function qc(t,e,n){if(n==null)return"";var a=n;if(a.__emotion_styles!==void 0)return a;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return Ma={name:s.name,styles:s.styles,next:Ma},s.name;var l=n;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Ma={name:c.name,styles:c.styles,next:Ma},c=c.next;var f=l.styles+";";return f}return $z(t,e,n)}case"function":{if(t!==void 0){var d=Ma,h=n(t);return Ma=d,qc(t,e,h)}break}}var m=n;if(e==null)return m;var v=e[m];return v!==void 0?v:m}function $z(t,e,n){var a="";if(Array.isArray(n))for(var s=0;s<n.length;s++)a+=qc(t,e,n[s])+";";else for(var l in n){var c=n[l];if(typeof c!="object"){var f=c;e!=null&&e[f]!==void 0?a+=l+"{"+e[f]+"}":OM(f)&&(a+=M0(l)+":"+FM(l,f)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(e==null||e[c[0]]===void 0))for(var d=0;d<c.length;d++)OM(c[d])&&(a+=M0(l)+":"+FM(l,c[d])+";");else{var h=qc(t,e,c);switch(l){case"animation":case"animationName":{a+=M0(l)+":"+h+";";break}default:a+=l+"{"+h+"}"}}}return a}var IM=/label:\s*([^\s;{]+)\s*(;|$)/g,Ma;function ry(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,s="";Ma=void 0;var l=t[0];if(l==null||l.raw===void 0)a=!1,s+=qc(n,e,l);else{var c=l;s+=c[0]}for(var f=1;f<t.length;f++)if(s+=qc(n,e,t[f]),a){var d=l;s+=d[f]}IM.lastIndex=0;for(var h="",m;(m=IM.exec(s))!==null;)h+="-"+m[1];var v=Xz(s)+h;return{name:v,styles:s,next:Ma}}var Kz=function(e){return e()},Zz=KS.useInsertionEffect?KS.useInsertionEffect:!1,JA=Zz||Kz,ew=I.createContext(typeof HTMLElement<"u"?Vz({key:"css"}):null);ew.Provider;var tw=function(e){return I.forwardRef(function(n,a){var s=I.useContext(ew);return e(n,s,a)})},nw=I.createContext({}),sh={}.hasOwnProperty,$g="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",iw=function(e,n){var a={};for(var s in n)sh.call(n,s)&&(a[s]=n[s]);return a[$g]=e,a},Qz=function(e){var n=e.cache,a=e.serialized,s=e.isStringTag;return ay(n,a,s),JA(function(){return ZA(n,a,s)}),null},Jz=tw(function(t,e,n){var a=t.css;typeof a=="string"&&e.registered[a]!==void 0&&(a=e.registered[a]);var s=t[$g],l=[a],c="";typeof t.className=="string"?c=KA(e.registered,l,t.className):t.className!=null&&(c=t.className+" ");var f=ry(l,void 0,I.useContext(nw));c+=e.key+"-"+f.name;var d={};for(var h in t)sh.call(t,h)&&h!=="css"&&h!==$g&&(d[h]=t[h]);return d.className=c,n&&(d.ref=n),I.createElement(I.Fragment,null,I.createElement(Qz,{cache:e,serialized:f,isStringTag:typeof s=="string"}),I.createElement(s,d))}),aw=Jz,eV=ie.Fragment,On=function(e,n,a){return sh.call(n,"css")?ie.jsx(aw,iw(e,n),a):ie.jsx(e,n,a)},BM=function(e,n){var a=arguments;if(n==null||!sh.call(n,"css"))return I.createElement.apply(void 0,a);var s=a.length,l=new Array(s);l[0]=aw,l[1]=iw(e,n);for(var c=2;c<s;c++)l[c]=a[c];return I.createElement.apply(null,l)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(BM||(BM={}));function rw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ry(e)}function Pe(){var t=rw.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var tV=function t(e){for(var n=e.length,a=0,s="";a<n;a++){var l=e[a];if(l!=null){var c=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))c=t(l);else{c="";for(var f in l)l[f]&&f&&(c&&(c+=" "),c+=f)}break}default:c=l}c&&(s&&(s+=" "),s+=c)}}return s};function nV(t,e,n){var a=[],s=KA(t,a,n);return a.length<2?n:s+e(a)}var iV=function(e){var n=e.cache,a=e.serializedArr;return JA(function(){for(var s=0;s<a.length;s++)ZA(n,a[s],!1)}),null},E0=tw(function(t,e){var n=[],a=function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];var v=ry(h,e.registered);return n.push(v),ay(e,v,!1),e.key+"-"+v.name},s=function(){for(var d=arguments.length,h=new Array(d),m=0;m<d;m++)h[m]=arguments[m];return nV(e.registered,a,tV(h))},l={css:a,cx:s,theme:I.useContext(nw)},c=t.children(l);return I.createElement(I.Fragment,null,I.createElement(iV,{cache:e,serializedArr:n}),c)}),aV=Object.defineProperty,rV=(t,e,n)=>e in t?aV(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,ad=(t,e,n)=>rV(t,typeof e!="symbol"?e+"":e,n),Kg=new Map,rd=new WeakMap,zM=0,sV=void 0;function oV(t){return t?(rd.has(t)||(zM+=1,rd.set(t,zM.toString())),rd.get(t)):"0"}function lV(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?oV(t.root):t[e]}`).toString()}function cV(t){const e=lV(t);let n=Kg.get(e);if(!n){const a=new Map;let s;const l=new IntersectionObserver(c=>{c.forEach(f=>{var d;const h=f.isIntersecting&&s.some(m=>f.intersectionRatio>=m);t.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=h),(d=a.get(f.target))==null||d.forEach(m=>{m(h,f)})})},t);s=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:l,elements:a},Kg.set(e,n)}return n}function sw(t,e,n={},a=sV){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const d=t.getBoundingClientRect();return e(a,{isIntersecting:a,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:s,observer:l,elements:c}=cV(n),f=c.get(t)||[];return c.has(t)||c.set(t,f),f.push(e),l.observe(t),function(){f.splice(f.indexOf(e),1),f.length===0&&(c.delete(t),l.unobserve(t)),c.size===0&&(l.disconnect(),Kg.delete(s))}}function uV(t){return typeof t.children!="function"}var VM=class extends I.Component{constructor(t){super(t),ad(this,"node",null),ad(this,"_unobserveCb",null),ad(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),ad(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),uV(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:a,delay:s,fallbackInView:l}=this.props;this._unobserveCb=sw(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:a,delay:s},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:x,entry:b}=this.state;return t({inView:x,entry:b,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:a,root:s,rootMargin:l,onChange:c,skip:f,trackVisibility:d,delay:h,initialInView:m,fallbackInView:v,...y}=this.props;return I.createElement(e||"div",{ref:this.handleNode,...y},t)}};function ow({threshold:t,delay:e,trackVisibility:n,rootMargin:a,root:s,triggerOnce:l,skip:c,initialInView:f,fallbackInView:d,onChange:h}={}){var m;const[v,y]=I.useState(null),x=I.useRef(h),[b,E]=I.useState({inView:!!f,entry:void 0});x.current=h,I.useEffect(()=>{if(c||!v)return;let w;return w=sw(v,(D,C)=>{E({inView:D,entry:C}),x.current&&x.current(D,C),C.isIntersecting&&l&&w&&(w(),w=void 0)},{root:s,rootMargin:a,threshold:t,trackVisibility:n,delay:e},d),()=>{w&&w()}},[Array.isArray(t)?t.toString():t,v,s,a,l,c,n,d,e]);const _=(m=b.entry)==null?void 0:m.target,S=I.useRef(void 0);!v&&_&&!l&&!c&&S.current!==_&&(S.current=_,E({inView:!!f,entry:void 0}));const A=[y,b.inView,b.entry];return A.ref=A[0],A.inView=A[1],A.entry=A[2],A}var T0={exports:{}},Wt={};var HM;function fV(){if(HM)return Wt;HM=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.for("react.offscreen"),b;b=Symbol.for("react.module.reference");function E(_){if(typeof _=="object"&&_!==null){var S=_.$$typeof;switch(S){case t:switch(_=_.type,_){case n:case s:case a:case h:case m:return _;default:switch(_=_&&_.$$typeof,_){case f:case c:case d:case y:case v:case l:return _;default:return S}}case e:return S}}}return Wt.ContextConsumer=c,Wt.ContextProvider=l,Wt.Element=t,Wt.ForwardRef=d,Wt.Fragment=n,Wt.Lazy=y,Wt.Memo=v,Wt.Portal=e,Wt.Profiler=s,Wt.StrictMode=a,Wt.Suspense=h,Wt.SuspenseList=m,Wt.isAsyncMode=function(){return!1},Wt.isConcurrentMode=function(){return!1},Wt.isContextConsumer=function(_){return E(_)===c},Wt.isContextProvider=function(_){return E(_)===l},Wt.isElement=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===t},Wt.isForwardRef=function(_){return E(_)===d},Wt.isFragment=function(_){return E(_)===n},Wt.isLazy=function(_){return E(_)===y},Wt.isMemo=function(_){return E(_)===v},Wt.isPortal=function(_){return E(_)===e},Wt.isProfiler=function(_){return E(_)===s},Wt.isStrictMode=function(_){return E(_)===a},Wt.isSuspense=function(_){return E(_)===h},Wt.isSuspenseList=function(_){return E(_)===m},Wt.isValidElementType=function(_){return typeof _=="string"||typeof _=="function"||_===n||_===s||_===a||_===h||_===m||_===x||typeof _=="object"&&_!==null&&(_.$$typeof===y||_.$$typeof===v||_.$$typeof===l||_.$$typeof===c||_.$$typeof===d||_.$$typeof===b||_.getModuleId!==void 0)},Wt.typeOf=E,Wt}var GM;function dV(){return GM||(GM=1,T0.exports=fV()),T0.exports}var hV=dV();Pe`
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
`;Pe`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;const pV=Pe`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,mV=Pe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,gV=Pe`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vV=Pe`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,yV=Pe`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sy=Pe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,xV=Pe`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_V=Pe`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,SV=Pe`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,bV=Pe`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,MV=Pe`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,EV=Pe`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,TV=Pe`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function AV({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:a=sy,iterationCount:s=1}){return rw`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${s};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function wV(t){return t==null}function RV(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function lw(t,e){return n=>n?t():e()}function Yc(t){return lw(t,()=>null)}function Zg(t){return Yc(()=>({opacity:0}))(t)}const cw=t=>{const{cascade:e=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:l=0,keyframes:c=sy,triggerOnce:f=!1,className:d,style:h,childClassName:m,childStyle:v,children:y,onVisibilityChange:x}=t,b=I.useMemo(()=>AV({keyframes:c,duration:s}),[s,c]);return wV(y)?null:RV(y)?On(DV,{...t,animationStyles:b,children:String(y)}):hV.isFragment(y)?On(uw,{...t,animationStyles:b}):On(eV,{children:I.Children.map(y,(E,_)=>{if(!I.isValidElement(E))return null;const S=a+(e?_*s*n:0);switch(E.type){case"ol":case"ul":return On(E0,{children:({cx:A})=>On(E.type,{...E.props,className:A(d,E.props.className),style:Object.assign({},h,E.props.style),children:On(cw,{...t,children:E.props.children})})});case"li":return On(VM,{threshold:l,triggerOnce:f,onChange:x,children:({inView:A,ref:w})=>On(E0,{children:({cx:D})=>On(E.type,{...E.props,ref:w,className:D(m,E.props.className),css:Yc(()=>b)(A),style:Object.assign({},v,E.props.style,Zg(!A),{animationDelay:S+"ms"})})})});default:return On(VM,{threshold:l,triggerOnce:f,onChange:x,children:({inView:A,ref:w})=>On("div",{ref:w,className:d,css:Yc(()=>b)(A),style:Object.assign({},h,Zg(!A),{animationDelay:S+"ms"}),children:On(E0,{children:({cx:D})=>On(E.type,{...E.props,className:D(m,E.props.className),style:Object.assign({},v,E.props.style)})})})})}})})},CV={display:"inline-block",whiteSpace:"pre"},DV=t=>{const{animationStyles:e,cascade:n=!1,damping:a=.5,delay:s=0,duration:l=1e3,fraction:c=0,triggerOnce:f=!1,className:d,style:h,children:m,onVisibilityChange:v}=t,{ref:y,inView:x}=ow({triggerOnce:f,threshold:c,onChange:v});return lw(()=>On("div",{ref:y,className:d,style:Object.assign({},h,CV),children:m.split("").map((b,E)=>On("span",{css:Yc(()=>e)(x),style:{animationDelay:s+E*l*a+"ms"},children:b},E))}),()=>On(uw,{...t,children:m}))(n)},uw=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:a=!1,className:s,style:l,children:c,onVisibilityChange:f}=t,{ref:d,inView:h}=ow({triggerOnce:a,threshold:n,onChange:f});return On("div",{ref:d,className:s,css:Yc(()=>e)(h),style:Object.assign({},l,Zg(!h)),children:c})};Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;Pe`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;Pe`
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
`;const LV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,NV=Pe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,UV=Pe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,PV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,OV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,FV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,IV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,BV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,zV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,VV=Pe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,HV=Pe`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,GV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,kV=Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function WV(t,e,n){switch(n){case"bottom-left":return e?NV:mV;case"bottom-right":return e?UV:gV;case"down":return t?e?OV:yV:e?PV:vV;case"left":return t?e?IV:xV:e?FV:sy;case"right":return t?e?zV:SV:e?BV:_V;case"top-left":return e?VV:bV;case"top-right":return e?HV:MV;case"up":return t?e?kV:TV:e?GV:EV;default:return e?LV:pV}}const XV=t=>{const{big:e=!1,direction:n,reverse:a=!1,...s}=t,l=I.useMemo(()=>WV(e,a,n),[e,n,a]);return On(cw,{keyframes:l,...s})};Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Pe`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Pe`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Pe`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Pe`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Pe`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;Pe`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;Pe`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;Pe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;Pe`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;Pe`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
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
`;Pe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;Pe`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;Pe`
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
`;const jV=typeof document<"u"?Xe.useLayoutEffect:()=>{},es=t=>{var e;return(e=t?.ownerDocument)!==null&&e!==void 0?e:document},Ps=t=>t&&"window"in t&&t.window===t?t:es(t).defaultView||window;function qV(t){return t!==null&&typeof t=="object"&&"nodeType"in t&&typeof t.nodeType=="number"}function YV(t){return qV(t)&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in t}let $V=!1;function oy(){return $V}function Os(t,e){if(!oy())return e&&t?t.contains(e):!1;if(!t||!e)return!1;let n=e;for(;n!==null;){if(n===t)return!0;n.tagName==="SLOT"&&n.assignedSlot?n=n.assignedSlot.parentNode:YV(n)?n=n.host:n=n.parentNode}return!1}const Qg=(t=document)=>{var e;if(!oy())return t.activeElement;let n=t.activeElement;for(;n&&"shadowRoot"in n&&(!((e=n.shadowRoot)===null||e===void 0)&&e.activeElement);)n=n.shadowRoot.activeElement;return n};function fw(t){return oy()&&t.target.shadowRoot&&t.composedPath?t.composedPath()[0]:t.target}function KV(t){if(ZV())t.focus({preventScroll:!0});else{let e=QV(t);t.focus(),JV(e)}}let sd=null;function ZV(){if(sd==null){sd=!1;try{document.createElement("div").focus({get preventScroll(){return sd=!0,!0}})}catch{}}return sd}function QV(t){let e=t.parentNode,n=[],a=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==a;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&n.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return a instanceof HTMLElement&&n.push({element:a,scrollTop:a.scrollTop,scrollLeft:a.scrollLeft}),n}function JV(t){for(let{element:e,scrollTop:n,scrollLeft:a}of t)e.scrollTop=n,e.scrollLeft=a}function oh(t){var e;if(typeof window>"u"||window.navigator==null)return!1;let n=(e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands;return Array.isArray(n)&&n.some(a=>t.test(a.brand))||t.test(window.navigator.userAgent)}function dw(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function gl(t){let e=null;return()=>(e==null&&(e=t()),e)}const Xd=gl(function(){return dw(/^Mac/i)}),e6=gl(function(){return dw(/^iPad/i)||Xd()&&navigator.maxTouchPoints>1}),t6=gl(function(){return oh(/AppleWebKit/i)&&!n6()}),n6=gl(function(){return oh(/Chrome/i)}),i6=gl(function(){return oh(/Android/i)}),a6=gl(function(){return oh(/Firefox/i)});function $c(t,e,n=!0){var a,s;let{metaKey:l,ctrlKey:c,altKey:f,shiftKey:d}=e;a6()&&(!((s=window.event)===null||s===void 0||(a=s.type)===null||a===void 0)&&a.startsWith("key"))&&t.target==="_blank"&&(Xd()?l=!0:c=!0);let h=t6()&&Xd()&&!e6()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:l,ctrlKey:c,altKey:f,shiftKey:d}):new MouseEvent("click",{metaKey:l,ctrlKey:c,altKey:f,shiftKey:d,detail:1,bubbles:!0,cancelable:!0});$c.isOpening=n,KV(t),t.dispatchEvent(h),$c.isOpening=!1}$c.isOpening=!1;function hw(){let t=I.useRef(new Map),e=I.useCallback((s,l,c,f)=>{let d=f?.once?(...h)=>{t.current.delete(c),c(...h)}:c;t.current.set(c,{type:l,eventTarget:s,fn:d,options:f}),s.addEventListener(l,d,f)},[]),n=I.useCallback((s,l,c,f)=>{var d;let h=((d=t.current.get(c))===null||d===void 0?void 0:d.fn)||c;s.removeEventListener(l,h,f),t.current.delete(c)},[]),a=I.useCallback(()=>{t.current.forEach((s,l)=>{n(s.eventTarget,s.type,l,s.options)})},[n]);return I.useEffect(()=>a,[a]),{addGlobalListener:e,removeGlobalListener:n,removeAllGlobalListeners:a}}function r6(t){return t.pointerType===""&&t.isTrusted?!0:i6()&&t.pointerType?t.type==="click"&&t.buttons===1:t.detail===0&&!t.pointerType}function pw(t){let e=t;return e.nativeEvent=t,e.isDefaultPrevented=()=>e.defaultPrevented,e.isPropagationStopped=()=>e.cancelBubble,e.persist=()=>{},e}function s6(t,e){Object.defineProperty(t,"target",{value:e}),Object.defineProperty(t,"currentTarget",{value:e})}function mw(t){let e=I.useRef({isFocused:!1,observer:null});return jV(()=>{const n=e.current;return()=>{n.observer&&(n.observer.disconnect(),n.observer=null)}},[]),I.useCallback(n=>{if(n.target instanceof HTMLButtonElement||n.target instanceof HTMLInputElement||n.target instanceof HTMLTextAreaElement||n.target instanceof HTMLSelectElement){e.current.isFocused=!0;let a=n.target,s=l=>{if(e.current.isFocused=!1,a.disabled){let c=pw(l);t?.(c)}e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};a.addEventListener("focusout",s,{once:!0}),e.current.observer=new MutationObserver(()=>{if(e.current.isFocused&&a.disabled){var l;(l=e.current.observer)===null||l===void 0||l.disconnect();let c=a===document.activeElement?null:document.activeElement;a.dispatchEvent(new FocusEvent("blur",{relatedTarget:c})),a.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:c}))}}),e.current.observer.observe(a,{attributes:!0,attributeFilter:["disabled"]})}},[t])}let o6=!1,lu=null;const Jg=new Set;let Pc=new Map,Hs=!1,ev=!1;const l6={Tab:!0,Escape:!0};function ly(t,e){for(let n of Jg)n(t,e)}function c6(t){return!(t.metaKey||!Xd()&&t.altKey||t.ctrlKey||t.key==="Control"||t.key==="Shift"||t.key==="Meta")}function jd(t){Hs=!0,!$c.isOpening&&c6(t)&&(lu="keyboard",ly("keyboard",t))}function Qo(t){lu="pointer","pointerType"in t&&t.pointerType,(t.type==="mousedown"||t.type==="pointerdown")&&(Hs=!0,ly("pointer",t))}function gw(t){!$c.isOpening&&r6(t)&&(Hs=!0,lu="virtual")}function vw(t){t.target===window||t.target===document||o6||!t.isTrusted||(!Hs&&!ev&&(lu="virtual",ly("virtual",t)),Hs=!1,ev=!1)}function yw(){Hs=!1,ev=!0}function tv(t){if(typeof window>"u"||typeof document>"u"||Pc.get(Ps(t)))return;const e=Ps(t),n=es(t);let a=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){Hs=!0,a.apply(this,arguments)},n.addEventListener("keydown",jd,!0),n.addEventListener("keyup",jd,!0),n.addEventListener("click",gw,!0),e.addEventListener("focus",vw,!0),e.addEventListener("blur",yw,!1),typeof PointerEvent<"u"&&(n.addEventListener("pointerdown",Qo,!0),n.addEventListener("pointermove",Qo,!0),n.addEventListener("pointerup",Qo,!0)),e.addEventListener("beforeunload",()=>{xw(t)},{once:!0}),Pc.set(e,{focus:a})}const xw=(t,e)=>{const n=Ps(t),a=es(t);e&&a.removeEventListener("DOMContentLoaded",e),Pc.has(n)&&(n.HTMLElement.prototype.focus=Pc.get(n).focus,a.removeEventListener("keydown",jd,!0),a.removeEventListener("keyup",jd,!0),a.removeEventListener("click",gw,!0),n.removeEventListener("focus",vw,!0),n.removeEventListener("blur",yw,!1),typeof PointerEvent<"u"&&(a.removeEventListener("pointerdown",Qo,!0),a.removeEventListener("pointermove",Qo,!0),a.removeEventListener("pointerup",Qo,!0)),Pc.delete(n))};function u6(t){const e=es(t);let n;return e.readyState!=="loading"?tv(t):(n=()=>{tv(t)},e.addEventListener("DOMContentLoaded",n)),()=>xw(t,n)}typeof document<"u"&&u6();function nv(){return lu!=="pointer"}const f6=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function d6(t,e,n){let a=es(n?.target);const s=typeof window<"u"?Ps(n?.target).HTMLInputElement:HTMLInputElement,l=typeof window<"u"?Ps(n?.target).HTMLTextAreaElement:HTMLTextAreaElement,c=typeof window<"u"?Ps(n?.target).HTMLElement:HTMLElement,f=typeof window<"u"?Ps(n?.target).KeyboardEvent:KeyboardEvent;return t=t||a.activeElement instanceof s&&!f6.has(a.activeElement.type)||a.activeElement instanceof l||a.activeElement instanceof c&&a.activeElement.isContentEditable,!(t&&e==="keyboard"&&n instanceof f&&!l6[n.key])}function h6(t,e,n){tv(),I.useEffect(()=>{if(n?.enabled===!1)return;let a=(s,l)=>{d6(!!n?.isTextInput,s,l)&&t(nv())};return Jg.add(a),()=>{Jg.delete(a)}},e)}function p6(t){let{isDisabled:e,onFocus:n,onBlur:a,onFocusChange:s}=t;const l=I.useCallback(d=>{if(d.target===d.currentTarget)return a&&a(d),s&&s(!1),!0},[a,s]),c=mw(l),f=I.useCallback(d=>{const h=es(d.target),m=h?Qg(h):Qg();d.target===d.currentTarget&&m===fw(d.nativeEvent)&&(n&&n(d),s&&s(!0),c(d))},[s,n,c]);return{focusProps:{onFocus:!e&&(n||s||a)?f:void 0,onBlur:!e&&(a||s)?l:void 0}}}function m6(t){let{isDisabled:e,onBlurWithin:n,onFocusWithin:a,onFocusWithinChange:s}=t,l=I.useRef({isFocusWithin:!1}),{addGlobalListener:c,removeAllGlobalListeners:f}=hw(),d=I.useCallback(v=>{Os(v.currentTarget,v.target)&&l.current.isFocusWithin&&!Os(v.currentTarget,v.relatedTarget)&&(l.current.isFocusWithin=!1,f(),n&&n(v),s&&s(!1))},[n,s,l,f]),h=mw(d),m=I.useCallback(v=>{if(!Os(v.currentTarget,v.target))return;const y=es(v.target),x=Qg(y);if(!l.current.isFocusWithin&&x===fw(v.nativeEvent)){a&&a(v),s&&s(!0),l.current.isFocusWithin=!0,h(v);let b=v.currentTarget;c(y,"focus",E=>{if(l.current.isFocusWithin&&!Os(b,E.target)){let _=new y.defaultView.FocusEvent("blur",{relatedTarget:E.target});s6(_,b);let S=pw(_);d(S)}},{capture:!0})}},[a,s,h,c,d]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:m,onBlur:d}}}let iv=!1,od=0;function g6(){iv=!0,setTimeout(()=>{iv=!1},50)}function kM(t){t.pointerType==="touch"&&g6()}function v6(){if(!(typeof document>"u"))return od===0&&typeof PointerEvent<"u"&&document.addEventListener("pointerup",kM),od++,()=>{od--,!(od>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",kM)}}function y6(t){let{onHoverStart:e,onHoverChange:n,onHoverEnd:a,isDisabled:s}=t,[l,c]=I.useState(!1),f=I.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;I.useEffect(v6,[]);let{addGlobalListener:d,removeAllGlobalListeners:h}=hw(),{hoverProps:m,triggerHoverEnd:v}=I.useMemo(()=>{let y=(E,_)=>{if(f.pointerType=_,s||_==="touch"||f.isHovered||!Os(E.currentTarget,E.target))return;f.isHovered=!0;let S=E.currentTarget;f.target=S,d(es(E.target),"pointerover",A=>{f.isHovered&&f.target&&!Os(f.target,A.target)&&x(A,A.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:S,pointerType:_}),n&&n(!0),c(!0)},x=(E,_)=>{let S=f.target;f.pointerType="",f.target=null,!(_==="touch"||!f.isHovered||!S)&&(f.isHovered=!1,h(),a&&a({type:"hoverend",target:S,pointerType:_}),n&&n(!1),c(!1))},b={};return typeof PointerEvent<"u"&&(b.onPointerEnter=E=>{iv&&E.pointerType==="mouse"||y(E,E.pointerType)},b.onPointerLeave=E=>{!s&&Os(E.currentTarget,E.target)&&x(E,E.pointerType)}),{hoverProps:b,triggerHoverEnd:x}},[e,n,a,s,f,d,h]);return I.useEffect(()=>{s&&v({currentTarget:f.target},f.pointerType)},[s]),{hoverProps:m,isHovered:l}}function _w(t={}){let{autoFocus:e=!1,isTextInput:n,within:a}=t,s=I.useRef({isFocused:!1,isFocusVisible:e||nv()}),[l,c]=I.useState(!1),[f,d]=I.useState(()=>s.current.isFocused&&s.current.isFocusVisible),h=I.useCallback(()=>d(s.current.isFocused&&s.current.isFocusVisible),[]),m=I.useCallback(x=>{s.current.isFocused=x,s.current.isFocusVisible=nv(),c(x),h()},[h]);h6(x=>{s.current.isFocusVisible=x,h()},[n,l],{enabled:l,isTextInput:n});let{focusProps:v}=p6({isDisabled:a,onFocusChange:m}),{focusWithinProps:y}=m6({isDisabled:!a,onFocusWithinChange:m});return{isFocused:l,isFocusVisible:f,focusProps:a?y:v}}var x6=Object.defineProperty,_6=(t,e,n)=>e in t?x6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,A0=(t,e,n)=>(_6(t,typeof e!="symbol"?e+"":e,n),n);let S6=class{constructor(){A0(this,"current",this.detect()),A0(this,"handoffState","pending"),A0(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},cy=new S6;function b6(t){var e;return cy.isServer?null:t==null?document:(e=t?.ownerDocument)!=null?e:document}function av(t){var e,n;return cy.isServer?null:t==null?document:(n=(e=t?.getRootNode)==null?void 0:e.call(t))!=null?n:document}function Sw(t){var e,n;return(n=(e=av(t))==null?void 0:e.activeElement)!=null?n:null}function bw(t){typeof queueMicrotask=="function"?queueMicrotask(t):Promise.resolve().then(t).catch(e=>setTimeout(()=>{throw e}))}function Mw(){let t=[],e={addEventListener(n,a,s,l){return n.addEventListener(a,s,l),e.add(()=>n.removeEventListener(a,s,l))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);return e.add(()=>cancelAnimationFrame(a))},nextFrame(...n){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...n))},setTimeout(...n){let a=setTimeout(...n);return e.add(()=>clearTimeout(a))},microTask(...n){let a={current:!0};return bw(()=>{a.current&&n[0]()}),e.add(()=>{a.current=!1})},style(n,a,s){let l=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:s}),this.add(()=>{Object.assign(n.style,{[a]:l})})},group(n){let a=Mw();return n(a),this.add(()=>a.dispose())},add(n){return t.includes(n)||t.push(n),()=>{let a=t.indexOf(n);if(a>=0)for(let s of t.splice(a,1))s()}},dispose(){for(let n of t.splice(0))n()}};return e}function M6(){let[t]=I.useState(Mw);return I.useEffect(()=>()=>t.dispose(),[t]),t}let rl=(t,e)=>{cy.isServer?I.useEffect(t,e):I.useLayoutEffect(t,e)};function wc(t){let e=I.useRef(t);return rl(()=>{e.current=t},[t]),e}let Ta=function(t){let e=wc(t);return Xe.useCallback((...n)=>e.current(...n),[e])};function E6(t){let e=t.width/2,n=t.height/2;return{top:t.clientY-n,right:t.clientX+e,bottom:t.clientY+n,left:t.clientX-e}}function T6(t,e){return!(!t||!e||t.right<e.left||t.left>e.right||t.bottom<e.top||t.top>e.bottom)}function A6({disabled:t=!1}={}){let e=I.useRef(null),[n,a]=I.useState(!1),s=M6(),l=Ta(()=>{e.current=null,a(!1),s.dispose()}),c=Ta(f=>{if(s.dispose(),e.current===null){e.current=f.currentTarget,a(!0);{let d=b6(f.currentTarget);s.addEventListener(d,"pointerup",l,!1),s.addEventListener(d,"pointermove",h=>{if(e.current){let m=E6(h);a(T6(m,e.current.getBoundingClientRect()))}},!1),s.addEventListener(d,"pointercancel",l,!1)}}});return{pressed:n,pressProps:t?{}:{onPointerDown:c,onPointerUp:l,onClick:l}}}function cu(t){return I.useMemo(()=>t,Object.values(t))}function WM(...t){return Array.from(new Set(t.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}function Bs(t,e,...n){if(t in e){let s=e[t];return typeof s=="function"?s(...n):s}let a=new Error(`Tried to handle "${t}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Bs),a}var rv=(t=>(t[t.None=0]="None",t[t.RenderStrategy=1]="RenderStrategy",t[t.Static=2]="Static",t))(rv||{}),w6=(t=>(t[t.Unmount=0]="Unmount",t[t.Hidden=1]="Hidden",t))(w6||{});function vl(){let t=C6();return I.useCallback(e=>R6({mergeRefs:t,...e}),[t])}function R6({ourProps:t,theirProps:e,slot:n,defaultTag:a,features:s,visible:l=!0,name:c,mergeRefs:f}){f=f??D6;let d=Ew(e,t);if(l)return ld(d,n,a,c,f);let h=s??0;if(h&2){let{static:m=!1,...v}=d;if(m)return ld(v,n,a,c,f)}if(h&1){let{unmount:m=!0,...v}=d;return Bs(m?0:1,{0(){return null},1(){return ld({...v,hidden:!0,style:{display:"none"}},n,a,c,f)}})}return ld(d,n,a,c,f)}function ld(t,e={},n,a,s){let{as:l=n,children:c,refName:f="ref",...d}=w0(t,["unmount","static"]),h=t.ref!==void 0?{[f]:t.ref}:{},m=typeof c=="function"?c(e):c;"className"in d&&d.className&&typeof d.className=="function"&&(d.className=d.className(e)),d["aria-labelledby"]&&d["aria-labelledby"]===d.id&&(d["aria-labelledby"]=void 0);let v={};if(e){let y=!1,x=[];for(let[b,E]of Object.entries(e))typeof E=="boolean"&&(y=!0),E===!0&&x.push(b.replace(/([A-Z])/g,_=>`-${_.toLowerCase()}`));if(y){v["data-headlessui-state"]=x.join(" ");for(let b of x)v[`data-${b}`]=""}}if(wd(l)&&(Object.keys(zo(d)).length>0||Object.keys(zo(v)).length>0))if(!I.isValidElement(m)||Array.isArray(m)&&m.length>1||N6(m)){if(Object.keys(zo(d)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(zo(d)).concat(Object.keys(zo(v))).map(y=>`  - ${y}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(y=>`  - ${y}`).join(`
`)].join(`
`))}else{let y=m.props,x=y?.className,b=typeof x=="function"?(...S)=>WM(x(...S),d.className):WM(x,d.className),E=b?{className:b}:{},_=Ew(m.props,zo(w0(d,["ref"])));for(let S in v)S in _&&delete v[S];return I.cloneElement(m,Object.assign({},_,v,h,{ref:s(L6(m),h.ref)},E))}return I.createElement(l,Object.assign({},w0(d,["ref"]),!wd(l)&&h,!wd(l)&&v),m)}function C6(){let t=I.useRef([]),e=I.useCallback(n=>{for(let a of t.current)a!=null&&(typeof a=="function"?a(n):a.current=n)},[]);return(...n)=>{if(!n.every(a=>a==null))return t.current=n,e}}function D6(...t){return t.every(e=>e==null)?void 0:e=>{for(let n of t)n!=null&&(typeof n=="function"?n(e):n.current=e)}}function Ew(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let a of t)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(a[s])):e[s]=a[s];if(e.disabled||e["aria-disabled"])for(let a in n)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(a)&&(n[a]=[s=>{var l;return(l=s?.preventDefault)==null?void 0:l.call(s)}]);for(let a in n)Object.assign(e,{[a](s,...l){let c=n[a];for(let f of c){if((s instanceof Event||s?.nativeEvent instanceof Event)&&s.defaultPrevented)return;f(s,...l)}}});return e}function Tw(...t){if(t.length===0)return{};if(t.length===1)return t[0];let e={},n={};for(let a of t)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(n[s]!=null||(n[s]=[]),n[s].push(a[s])):e[s]=a[s];for(let a in n)Object.assign(e,{[a](...s){let l=n[a];for(let c of l)c?.(...s)}});return e}function yl(t){var e;return Object.assign(I.forwardRef(t),{displayName:(e=t.displayName)!=null?e:t.name})}function zo(t){let e=Object.assign({},t);for(let n in e)e[n]===void 0&&delete e[n];return e}function w0(t,e=[]){let n=Object.assign({},t);for(let a of e)a in n&&delete n[a];return n}function L6(t){return Xe.version.split(".")[0]>="19"?t.props.ref:t.ref}function wd(t){return t===I.Fragment||t===Symbol.for("react.fragment")}function N6(t){return wd(t.type)}let U6="span";var Aw=(t=>(t[t.None=1]="None",t[t.Focusable=2]="Focusable",t[t.Hidden=4]="Hidden",t))(Aw||{});function P6(t,e){var n;let{features:a=1,...s}=t,l={ref:e,"aria-hidden":(a&2)===2?!0:(n=s["aria-hidden"])!=null?n:void 0,hidden:(a&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return vl()({ourProps:l,theirProps:s,slot:{},defaultTag:U6,name:"Hidden"})}let ww=yl(P6),O6=Symbol();function uu(...t){let e=I.useRef(t);I.useEffect(()=>{e.current=t},[t]);let n=Ta(a=>{for(let s of e.current)s!=null&&(typeof s=="function"?s(a):s.current=a)});return t.every(a=>a==null||a?.[O6])?void 0:n}var ea=(t=>(t.Space=" ",t.Enter="Enter",t.Escape="Escape",t.Backspace="Backspace",t.Delete="Delete",t.ArrowLeft="ArrowLeft",t.ArrowUp="ArrowUp",t.ArrowRight="ArrowRight",t.ArrowDown="ArrowDown",t.Home="Home",t.End="End",t.PageUp="PageUp",t.PageDown="PageDown",t.Tab="Tab",t))(ea||{});let F6=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","details>summary","textarea:not([disabled])"].map(t=>`${t}:not([tabindex='-1'])`).join(","),I6=["[data-autofocus]"].map(t=>`${t}:not([tabindex='-1'])`).join(",");var ta=(t=>(t[t.First=1]="First",t[t.Previous=2]="Previous",t[t.Next=4]="Next",t[t.Last=8]="Last",t[t.WrapAround=16]="WrapAround",t[t.NoScroll=32]="NoScroll",t[t.AutoFocus=64]="AutoFocus",t))(ta||{}),Rc=(t=>(t[t.Error=0]="Error",t[t.Overflow=1]="Overflow",t[t.Success=2]="Success",t[t.Underflow=3]="Underflow",t))(Rc||{}),B6=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(B6||{});function z6(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(F6)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}function V6(t=document.body){return t==null?[]:Array.from(t.querySelectorAll(I6)).sort((e,n)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var H6=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(H6||{}),G6=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(G6||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",t=>{t.metaKey||t.altKey||t.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",t=>{t.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:t.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let k6=["textarea","input"].join(",");function W6(t){var e,n;return(n=(e=t?.matches)==null?void 0:e.call(t,k6))!=null?n:!1}function qo(t,e=n=>n){return t.slice().sort((n,a)=>{let s=e(n),l=e(a);if(s===null||l===null)return 0;let c=s.compareDocumentPosition(l);return c&Node.DOCUMENT_POSITION_FOLLOWING?-1:c&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function Vo(t,e,{sorted:n=!0,relativeTo:a=null,skipElements:s=[]}={}){let l=Array.isArray(t)?t.length>0?av(t[0]):document:av(t),c=Array.isArray(t)?n?qo(t):t:e&64?V6(t):z6(t);s.length>0&&c.length>1&&(c=c.filter(x=>!s.some(b=>b!=null&&"current"in b?b?.current===x:b===x))),a=a??l?.activeElement;let f=(()=>{if(e&5)return 1;if(e&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(e&1)return 0;if(e&2)return Math.max(0,c.indexOf(a))-1;if(e&4)return Math.max(0,c.indexOf(a))+1;if(e&8)return c.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),h=e&32?{preventScroll:!0}:{},m=0,v=c.length,y;do{if(m>=v||m+v<=0)return 0;let x=d+m;if(e&16)x=(x+v)%v;else{if(x<0)return 3;if(x>=v)return 1}y=c[x],y?.focus(h),m+=f}while(y!==Sw(y));return e&6&&W6(y)&&y.select(),2}function X6(t,e){return I.useMemo(()=>{var n;if(t.type)return t.type;let a=(n=t.as)!=null?n:"button";if(typeof a=="string"&&a.toLowerCase()==="button"||e?.tagName==="BUTTON"&&!e.hasAttribute("type"))return"button"},[t.type,t.as,e])}function j6(){let t=I.useRef(!1);return rl(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function q6({onFocus:t}){let[e,n]=I.useState(!0),a=j6();return e?Xe.createElement(ww,{as:"button",type:"button",features:Aw.Focusable,onFocus:s=>{s.preventDefault();let l,c=50;function f(){if(c--<=0){l&&cancelAnimationFrame(l);return}if(t()){if(cancelAnimationFrame(l),!a.current)return;n(!1);return}l=requestAnimationFrame(f)}l=requestAnimationFrame(f)}}):null}const Rw=I.createContext(null);function Y6(){return{groups:new Map,get(t,e){var n;let a=this.groups.get(t);a||(a=new Map,this.groups.set(t,a));let s=(n=a.get(e))!=null?n:0;a.set(e,s+1);let l=Array.from(a.keys()).indexOf(e);function c(){let f=a.get(e);f>1?a.set(e,f-1):a.delete(e)}return[l,c]}}}function $6({children:t}){let e=I.useRef(Y6());return I.createElement(Rw.Provider,{value:e},t)}function Cw(t){let e=I.useContext(Rw);if(!e)throw new Error("You must wrap your component in a <StableCollection>");let n=I.useId(),[a,s]=e.current.get(t,n);return I.useEffect(()=>s,[]),a}var K6=(t=>(t[t.Forwards=0]="Forwards",t[t.Backwards=1]="Backwards",t))(K6||{}),Z6=(t=>(t[t.Less=-1]="Less",t[t.Equal=0]="Equal",t[t.Greater=1]="Greater",t))(Z6||{}),Q6=(t=>(t[t.SetSelectedIndex=0]="SetSelectedIndex",t[t.RegisterTab=1]="RegisterTab",t[t.UnregisterTab=2]="UnregisterTab",t[t.RegisterPanel=3]="RegisterPanel",t[t.UnregisterPanel=4]="UnregisterPanel",t))(Q6||{});let J6={0(t,e){var n;let a=qo(t.tabs,m=>m.current),s=qo(t.panels,m=>m.current),l=a.filter(m=>{var v;return!((v=m.current)!=null&&v.hasAttribute("disabled"))}),c={...t,tabs:a,panels:s};if(e.index<0||e.index>a.length-1){let m=Bs(Math.sign(e.index-t.selectedIndex),{[-1]:()=>1,0:()=>Bs(Math.sign(e.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return c;let v=Bs(m,{0:()=>a.indexOf(l[0]),1:()=>a.indexOf(l[l.length-1])});return{...c,selectedIndex:v===-1?t.selectedIndex:v}}let f=a.slice(0,e.index),d=[...a.slice(e.index),...f].find(m=>l.includes(m));if(!d)return c;let h=(n=a.indexOf(d))!=null?n:t.selectedIndex;return h===-1&&(h=t.selectedIndex),{...c,selectedIndex:h}},1(t,e){if(t.tabs.includes(e.tab))return t;let n=t.tabs[t.selectedIndex],a=qo([...t.tabs,e.tab],l=>l.current),s=t.selectedIndex;return t.info.current.isControlled||(s=a.indexOf(n),s===-1&&(s=t.selectedIndex)),{...t,tabs:a,selectedIndex:s}},2(t,e){return{...t,tabs:t.tabs.filter(n=>n!==e.tab)}},3(t,e){return t.panels.includes(e.panel)?t:{...t,panels:qo([...t.panels,e.panel],n=>n.current)}},4(t,e){return{...t,panels:t.panels.filter(n=>n!==e.panel)}}},uy=I.createContext(null);uy.displayName="TabsDataContext";function sl(t){let e=I.useContext(uy);if(e===null){let n=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,sl),n}return e}let fy=I.createContext(null);fy.displayName="TabsActionsContext";function dy(t){let e=I.useContext(fy);if(e===null){let n=new Error(`<${t} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,dy),n}return e}function eH(t,e){return Bs(e.type,J6,t,e)}let tH="div";function nH(t,e){let{defaultIndex:n=0,vertical:a=!1,manual:s=!1,onChange:l,selectedIndex:c=null,...f}=t;const d=a?"vertical":"horizontal",h=s?"manual":"auto";let m=c!==null,v=wc({isControlled:m}),y=uu(e),[x,b]=I.useReducer(eH,{info:v,selectedIndex:c??n,tabs:[],panels:[]}),E=cu({selectedIndex:x.selectedIndex}),_=wc(l||(()=>{})),S=wc(x.tabs),A=I.useMemo(()=>({orientation:d,activation:h,...x}),[d,h,x]),w=Ta(J=>(b({type:1,tab:J}),()=>b({type:2,tab:J}))),D=Ta(J=>(b({type:3,panel:J}),()=>b({type:4,panel:J}))),C=Ta(J=>{F.current!==J&&_.current(J),m||b({type:0,index:J})}),F=wc(m?t.selectedIndex:x.selectedIndex),P=I.useMemo(()=>({registerTab:w,registerPanel:D,change:C}),[]);rl(()=>{b({type:0,index:c??n})},[c]),rl(()=>{if(F.current===void 0||x.tabs.length<=0)return;let J=qo(x.tabs,G=>G.current);J.some((G,Q)=>x.tabs[Q]!==G)&&C(J.indexOf(x.tabs[F.current]))});let R={ref:y},O=vl();return Xe.createElement($6,null,Xe.createElement(fy.Provider,{value:P},Xe.createElement(uy.Provider,{value:A},A.tabs.length<=0&&Xe.createElement(q6,{onFocus:()=>{var J,G;for(let Q of S.current)if(((J=Q.current)==null?void 0:J.tabIndex)===0)return(G=Q.current)==null||G.focus(),!0;return!1}}),O({ourProps:R,theirProps:f,slot:E,defaultTag:tH,name:"Tabs"}))))}let iH="div";function aH(t,e){let{orientation:n,selectedIndex:a}=sl("Tab.List"),s=uu(e),l=cu({selectedIndex:a}),c=t,f={ref:s,role:"tablist","aria-orientation":n};return vl()({ourProps:f,theirProps:c,slot:l,defaultTag:iH,name:"Tabs.List"})}let rH="button";function sH(t,e){var n,a;let s=I.useId(),{id:l=`headlessui-tabs-tab-${s}`,disabled:c=!1,autoFocus:f=!1,...d}=t,{orientation:h,activation:m,selectedIndex:v,tabs:y,panels:x}=sl("Tab"),b=dy("Tab"),E=sl("Tab"),[_,S]=I.useState(null),A=I.useRef(null),w=uu(A,e,S);rl(()=>b.registerTab(A),[b,A]);let D=Cw("tabs"),C=y.indexOf(A);C===-1&&(C=D);let F=C===v,P=Ta(ve=>{let V=ve();if(V===Rc.Success&&m==="auto"){let X=Sw(A.current),xe=E.tabs.findIndex(we=>we.current===X);xe!==-1&&b.change(xe)}return V}),R=Ta(ve=>{let V=y.map(X=>X.current).filter(Boolean);if(ve.key===ea.Space||ve.key===ea.Enter){ve.preventDefault(),ve.stopPropagation(),b.change(C);return}switch(ve.key){case ea.Home:case ea.PageUp:return ve.preventDefault(),ve.stopPropagation(),P(()=>Vo(V,ta.First));case ea.End:case ea.PageDown:return ve.preventDefault(),ve.stopPropagation(),P(()=>Vo(V,ta.Last))}if(P(()=>Bs(h,{vertical(){return ve.key===ea.ArrowUp?Vo(V,ta.Previous|ta.WrapAround):ve.key===ea.ArrowDown?Vo(V,ta.Next|ta.WrapAround):Rc.Error},horizontal(){return ve.key===ea.ArrowLeft?Vo(V,ta.Previous|ta.WrapAround):ve.key===ea.ArrowRight?Vo(V,ta.Next|ta.WrapAround):Rc.Error}}))===Rc.Success)return ve.preventDefault()}),O=I.useRef(!1),J=Ta(()=>{var ve;O.current||(O.current=!0,(ve=A.current)==null||ve.focus({preventScroll:!0}),b.change(C),bw(()=>{O.current=!1}))}),G=Ta(ve=>{ve.preventDefault()}),{isFocusVisible:Q,focusProps:te}=_w({autoFocus:f}),{isHovered:ee,hoverProps:K}=y6({isDisabled:c}),{pressed:B,pressProps:z}=A6({disabled:c}),ne=cu({selected:F,hover:ee,active:B,focus:Q,autofocus:f,disabled:c}),he=Tw({ref:w,onKeyDown:R,onMouseDown:G,onClick:J,id:l,role:"tab",type:X6(t,_),"aria-controls":(a=(n=x[C])==null?void 0:n.current)==null?void 0:a.id,"aria-selected":F,tabIndex:F?0:-1,disabled:c||void 0,autoFocus:f},te,K,z);return vl()({ourProps:he,theirProps:d,slot:ne,defaultTag:rH,name:"Tabs.Tab"})}let oH="div";function lH(t,e){let{selectedIndex:n}=sl("Tab.Panels"),a=uu(e),s=cu({selectedIndex:n}),l=t,c={ref:a};return vl()({ourProps:c,theirProps:l,slot:s,defaultTag:oH,name:"Tabs.Panels"})}let cH="div",uH=rv.RenderStrategy|rv.Static;function fH(t,e){var n,a,s,l;let c=I.useId(),{id:f=`headlessui-tabs-panel-${c}`,tabIndex:d=0,...h}=t,{selectedIndex:m,tabs:v,panels:y}=sl("Tab.Panel"),x=dy("Tab.Panel"),b=I.useRef(null),E=uu(b,e);rl(()=>x.registerPanel(b),[x,b]);let _=Cw("panels"),S=y.indexOf(b);S===-1&&(S=_);let A=S===m,{isFocusVisible:w,focusProps:D}=_w(),C=cu({selected:A,focus:w}),F=Tw({ref:E,id:f,role:"tabpanel","aria-labelledby":(a=(n=v[S])==null?void 0:n.current)==null?void 0:a.id,tabIndex:A?d:-1},D),P=vl();return!A&&((s=h.unmount)==null||s)&&!((l=h.static)!=null&&l)?Xe.createElement(ww,{"aria-hidden":"true",...F}):P({ourProps:F,theirProps:h,slot:C,defaultTag:cH,features:uH,visible:A,name:"Tabs.Panel"})}let dH=yl(sH),hH=yl(nH),pH=yl(aH),mH=yl(lH),gH=yl(fH),Sc=Object.assign(dH,{Group:hH,List:pH,Panels:mH,Panel:gH});const vH=({className:t,dark:e})=>{const{isFirstItemVisible:n,scrollPrev:a}=Xe.useContext(ey);return ie.jsx("div",{className:`${t||"h-full flex items-center px-3 duration-200 border-r cursor-pointer absolute top-0 z-10"} bg-transparent border border-transparent`,disabled:n,onClick:()=>a(),children:ie.jsx(Fc,{icon:"rr-angle-circle-left",className:`text-lg ${n?" opacity-10":" opacity-100 "}`})})},yH=({className:t,dark:e})=>{const{isLastItemVisible:n,scrollNext:a}=Xe.useContext(ey);return ie.jsx("div",{className:`${t||"h-full flex items-center px-3 duration-200 border-l cursor-pointer absolute top-0 right-0 z-10"} bg-transparent border border-transparent`,onClick:()=>a(),children:ie.jsx(Fc,{icon:"rr-angle-circle-right",className:`text-lg ${n?" opacity-10":" opacity-100"}`})})},xH=({tabClassName:t="",arrowClassName:e="",contentClassName:n="",scrollContainerClassName:a="",contents:s,titleChildren:l,dark:c=!1})=>{const[f,d]=I.useState(0);return ie.jsxs(Sc.Group,{selectedIndex:f,onChange:d,children:[ie.jsx(Sc.List,{as:"div",className:`relative ${t}`,children:ie.jsxs(uz,{LeftArrow:h=>ie.jsx(vH,{...h,dark:c}),RightArrow:h=>ie.jsx(yH,{...h,dark:c}),scrollContainerClassName:`px-[60px] gap-2 overflow-x-hidden ${a}`,children:[s.map(({title:h,i:m},v)=>ie.jsx(Sc,{as:"div",className:"outline-0",children:({selected:y})=>ie.jsxs("div",{className:`outline-0 relative px-3 py-2 mx-0 flex gap-2 items-center justify-center rounded-lg cursor-pointer duration-200
										${c?y?"bg-teal-600 text-white border border-teal-500":"bg-transparent text-teal-300 border border-teal-500 hover:bg-teal-700/20":y?"bg-transparent text-primary":"bg-white text-gray-700 hover:bg-transparent"}
									`,children:[typeof h=="function"?h({selectedIndex:f,setSelectedIndex:d}):Xe.cloneElement(h,{selected:y,dark:c}),!c&&y&&ie.jsx("div",{className:"absolute bottom-0 left-0 w-full h-0.5 transition-all duration-500",style:{backgroundImage:"linear-gradient(to right, #14b8a6, #14b8a6)",animation:"underlineGrow 0.3s forwards",transition:"animation 0.3s ease"}})]})},`tab-g-${v}`)),l]})}),ie.jsx(Sc.Panels,{children:s.map(({content:h,i:m},v)=>ie.jsx(Sc.Panel,{"data-headlessui-state":f==m?"selected":"",as:"div",className:`p-3 duration-200 text-base rounded-xl flex flex-col  overflow-auto ${n} ${n.includes("max-h")?"":"max-h-[calc(100vh-300px)] min-h-72"} transition-all opacity-100 transform duration-300 ease-in-out`,style:{opacity:f===m?0:100,transform:f===m?"translateY(0)":"translateY(10px)"},children:ie.jsx(XV,{triggerOnce:!0,children:typeof h=="function"?h({selectedIndex:f,setSelectedIndex:d}):h})},`tab-p-${v}`))})]})},bc=({src:t,children:e,className:n,dark:a=!1,selected:s=!1})=>ie.jsxs("div",{className:`flex flex-row items-center overflow-visible justify-center gap-2 py-0 min-w-32 ${n||""}`,children:[ie.jsx("img",{src:t,className:`
					h-5 object-contain
					${s?"opacity-100":"opacity-80"} 
					${a&&!s?"filter invert":""}
					${n}
				`,alt:""}),ie.jsx("span",{className:"text-xs font-semibold ",children:e})]}),_H=()=>ie.jsx("div",{className:"min-h-screen bg-gray-100/70 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center p-8 bg-white shadow-xl rounded-lg -mt-120",children:[ie.jsx("h1",{className:"text-4xl font-semibold text-red-600",children:"We'll Be Back Soon!"}),ie.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!"}),ie.jsx("div",{className:"mt-6",children:ie.jsx("span",{className:"text-sm text-gray-500",children:"Expected downtime: 1-2 hours"})})]})}),SH=()=>ie.jsx("div",{className:"min-h-screen bg-gray-100/70 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center p-8 bg-white shadow-xl rounded-lg -mt-120",children:[ie.jsx("h1",{className:"text-4xl font-semibold text-red-600",children:"We'll Be Back Soon!"}),ie.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!"}),ie.jsx("div",{className:"mt-6",children:ie.jsx("span",{className:"text-sm text-gray-500",children:"Expected downtime: 1-2 hours"})})]})}),bH=()=>ie.jsx("div",{className:"min-h-screen bg-gray-100/70 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center p-8 bg-white shadow-xl rounded-lg -mt-120",children:[ie.jsx("h1",{className:"text-4xl font-semibold text-red-600",children:"We'll Be Back Soon!"}),ie.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!"}),ie.jsx("div",{className:"mt-6",children:ie.jsx("span",{className:"text-sm text-gray-500",children:"Expected downtime: 1-2 hours"})})]})}),MH=()=>ie.jsx("div",{className:"min-h-screen bg-gray-100/70 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center p-8 bg-white shadow-xl rounded-lg -mt-120",children:[ie.jsx("h1",{className:"text-4xl font-semibold text-red-600",children:"We'll Be Back Soon!"}),ie.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!"}),ie.jsx("div",{className:"mt-6",children:ie.jsx("span",{className:"text-sm text-gray-500",children:"Expected downtime: 1-2 hours"})})]})}),EH=()=>ie.jsx("div",{className:"min-h-screen bg-gray-100/70 flex items-center justify-center",children:ie.jsxs("div",{className:"text-center p-8 bg-white shadow-xl rounded-lg -mt-120",children:[ie.jsx("h1",{className:"text-4xl font-semibold text-red-600",children:"We'll Be Back Soon!"}),ie.jsx("p",{className:"text-lg text-gray-600 mt-4",children:"Our servers are currently undergoing maintenance. We'll be back online shortly. Thank you for your patience!"}),ie.jsx("div",{className:"mt-6",children:ie.jsx("span",{className:"text-sm text-gray-500",children:"Expected downtime: 1-2 hours"})})]})}),TH="/jom/assets/file-CyX9-VCw.png",AH="/jom/assets/user-D6714Zf0.png",wH="/jom/assets/mortarboard-0CcbRtzc.png",RH="/jom/assets/user-experience-CwlcgRgL.png",CH="/jom/assets/portfolio-BnJZzfNz.png";const DH=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),LH=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),XM=t=>{const e=LH(t);return e.charAt(0).toUpperCase()+e.slice(1)},Dw=(...t)=>t.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),NH=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var UH={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const PH=I.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:s="",children:l,iconNode:c,...f},d)=>I.createElement("svg",{ref:d,...UH,width:e,height:e,stroke:t,strokeWidth:a?Number(n)*24/Number(e):n,className:Dw("lucide",s),...!l&&!NH(f)&&{"aria-hidden":"true"},...f},[...c.map(([h,m])=>I.createElement(h,m)),...Array.isArray(l)?l:[l]]));const hy=(t,e)=>{const n=I.forwardRef(({className:a,...s},l)=>I.createElement(PH,{ref:l,iconNode:e,className:Dw(`lucide-${DH(XM(t))}`,`lucide-${t}`,a),...s}));return n.displayName=XM(t),n};const OH=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],FH=hy("activity",OH);const IH=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],BH=hy("fingerprint",IH);const zH=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],VH=hy("lock",zH),HH=({blurStrength:t=12,color:e="white",metalness:n=1,roughness:a=.4,overlayColor:s="rgba(255, 255, 255, 0.1)",displacementStrength:l=20,noiseScale:c=1,specularConstant:f=1.2,grayscale:d=1,glassDistortion:h=0,className:m="",style:v={},profilePicture:y,disableCamera:x=!1})=>{const b=I.useRef(null),E=I.useRef(null);I.useEffect(()=>((async()=>{try{if(x)return;const D=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:640},height:{ideal:480},facingMode:"user"}});E.current=D,b.current&&(b.current.srcObject=D)}catch(D){console.error("Error accessing webcam:",D)}})(),()=>{E.current&&E.current.getTracks().forEach(D=>D.stop())}),[x]);const _=.03/Math.max(.1,c),S=1-Math.max(0,Math.min(1,d)),A={"--blur-strength":`${t}px`,"--metalness":n,"--roughness":a,"--overlay-color":s,"--text-color":e,"--saturation":S};return ie.jsxs("div",{className:`relative w-[320px] h-[500px] rounded-[20px] overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.1)_inset] isolate font-sans ${m}`,style:{...v,...A},children:[ie.jsx("svg",{className:"absolute w-0 h-0 pointer-events-none opacity-0","aria-hidden":"true",children:ie.jsx("defs",{children:ie.jsxs("filter",{id:"metallic-displacement",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[ie.jsx("feTurbulence",{type:"turbulence",baseFrequency:_,numOctaves:"2",result:"noise"}),ie.jsx("feColorMatrix",{in:"noise",type:"luminanceToAlpha",result:"noiseAlpha"}),ie.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:l,xChannelSelector:"R",yChannelSelector:"G",result:"rippled"}),ie.jsx("feSpecularLighting",{in:"noiseAlpha",surfaceScale:l,specularConstant:f,specularExponent:"20",lightingColor:"#ffffff",result:"light",children:ie.jsx("fePointLight",{x:"0",y:"0",z:"300"})}),ie.jsx("feComposite",{in:"light",in2:"rippled",operator:"in",result:"light-effect"}),ie.jsx("feBlend",{in:"light-effect",in2:"rippled",mode:"screen",result:"metallic-result"}),ie.jsx("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",result:"solidAlpha"}),ie.jsx("feMorphology",{in:"solidAlpha",operator:"erode",radius:"45",result:"erodedAlpha"}),ie.jsx("feGaussianBlur",{in:"erodedAlpha",stdDeviation:"10",result:"blurredMap"}),ie.jsx("feComponentTransfer",{in:"blurredMap",result:"glassMap",children:ie.jsx("feFuncA",{type:"linear",slope:"0.5",intercept:"0"})}),ie.jsx("feDisplacementMap",{in:"metallic-result",in2:"glassMap",scale:h,xChannelSelector:"A",yChannelSelector:"A",result:"final"})]})})}),ie.jsx("video",{ref:b,autoPlay:!0,playsInline:!0,muted:!0,className:"absolute top-0 left-0 w-full h-full object-cover scale-[1.2] -scale-x-100 z-0 opacity-90 transition-[filter] duration-300",style:{filter:"saturate(var(--saturation, 0)) contrast(120%) brightness(110%) blur(var(--blur-strength, 12px)) url(#metallic-displacement)"}}),ie.jsx("div",{className:"absolute inset-0 z-10 opacity-[var(--roughness,0.4)] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20200%20200%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.8%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27%2F%3E%3C%2Fsvg%3E')] mix-blend-overlay"}),ie.jsx("div",{className:"absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_60%,rgba(255,255,255,0.3)_100%)] pointer-events-none mix-blend-overlay opacity-[var(--metalness,1)]"}),ie.jsx("div",{className:"absolute inset-0 rounded-[20px] p-[1px] bg-[linear-gradient(135deg,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.6)_100%)] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] z-20 pointer-events-none"}),ie.jsxs("div",{className:"relative z-10 h-full flex flex-col justify-between p-8 text-[var(--text-color,white)] bg-[var(--overlay-color,rgba(255,255,255,0.05))]",children:[ie.jsxs("div",{className:"flex justify-between items-center border-b border-white/20 pb-4",children:[ie.jsxs("div",{className:"flex items-center gap-1.5 text-[10px] font-bold tracking-[0.1em] px-2 py-1 bg-white/10 rounded border border-white/20",children:[ie.jsx(VH,{size:14,className:"opacity-80"}),ie.jsx("span",{children:"SECURE ACCESS"})]}),ie.jsx(FH,{className:"opacity-80",size:20})]}),ie.jsx("div",{className:"absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10",children:ie.jsx("img",{src:y,alt:"Profile",className:"rounded-full w-32 h-32 border-4 border-white/20 object-cover"})}),ie.jsx("div",{className:"flex-1 flex flex-col justify-end items-center text-center gap-6 mb-8",children:ie.jsxs("div",{className:"text-center",children:[ie.jsx("h2",{className:"text-2xl font-bold tracking-[0.05em] m-0 mb-2 drop-shadow-md",children:"JOMEL A. ANG"}),ie.jsx("p",{className:"text-xs tracking-[0.2em] opacity-70 m-0 uppercase",children:"SOFTWARE ENGINEER"})]})}),ie.jsxs("div",{className:"flex justify-between items-end border-t border-white/20 pt-6",children:[ie.jsxs("div",{className:"flex flex-col gap-1",children:[ie.jsx("span",{className:"text-[9px] tracking-[0.1em] opacity-60",children:"ID NUMBER"}),ie.jsx("span",{className:"font-mono text-sm tracking-[0.05em]",children:"2026-0302-0310"})]}),ie.jsx("div",{className:"opacity-40",children:ie.jsx(BH,{size:32})})]})]})]})},GH="/jom/assets/profile-img-Mw8LLWy1.png",kH=({dark:t})=>{const[e,n]=I.useState(!0),[a,s]=I.useState([]),[l,c]=I.useState(!1);if(I.useEffect(()=>{setTimeout(()=>n(!1),3e3)},[]),e)return ie.jsx(yP,{});const f=t?z4:B4;return ie.jsxs("div",{className:`relative w-full h-screen overflow-hidden ${t?"bg-black":"bg-white"}`,children:[ie.jsx(U4,{dark:t}),ie.jsx(I4,{background:f,minHeight:"min-h-[20vh]",overlayColor:"bg-transparent",className:`${t?"opacity-45":"opacity-100"} top-20`}),ie.jsx("div",{className:"relative z-10 text-black dark:text-white overflow-visible",children:ie.jsx(P4,{sparkColor:"#fff",sparkSize:10,sparkRadius:15,sparkCount:8,duration:400,children:ie.jsxs("div",{className:"w-full dark:bg-transparent rounded-lg",children:[ie.jsx(vP,{logo:t?O4:F4,title:"My Profile",dark:t,className:"w-full",textColor:"text-teal-600"}),ie.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 mx-8 gap-4 p-5 range-lg:grid-cols-10",children:[ie.jsx("div",{className:"sm:col-span-1 md:col-span-2 lg:col-span-3",children:ie.jsx("div",{className:"ml-0 sm:ml-4 md:ml-8 lg:ml-32",style:{height:"600px",position:"relative",top:"-20px"},children:ie.jsx(HH,{overlayColor:"rgba(0, 128, 128, 0.5)",blurStrength:12,glassDistortion:30,metalness:1,roughness:.75,displacementStrength:20,noiseScale:1,specularConstant:5,grayscale:.15,color:"#ffffff",profilePicture:GH,disableCamera:!0})})}),ie.jsx("div",{className:"sm:col-span-2 md:col-span-6 lg:col-span-9 mt-14",children:ie.jsx(xH,{tabClassName:"py-3 border-b shadow-xs text-sm sm:text-base lg:text-lg sm:ml-0 lg:ml-6",contentClassName:"max-h-[unset] sm:ml-0 lg:ml-6",contents:[{title:ie.jsx(bc,{src:TH,children:"Overview"}),content:ie.jsx(_H,{data:a,loading:!a})},{title:ie.jsx(bc,{src:AH,children:"Profile"}),content:ie.jsx(SH,{data:a,loading:!a})},{title:ie.jsx(bc,{src:wH,children:"Education"}),content:ie.jsx(bH,{data:a,loading:!a})},{title:ie.jsx(bc,{src:RH,children:"Experience"}),content:ie.jsx(MH,{data:a,loading:!a})},{title:ie.jsx(bc,{src:CH,children:"Portfolio"}),content:ie.jsx(EH,{data:a,loading:!a})}],dark:t})})]})]})})})]})};function WH(){const[t,e]=I.useState(!1);return I.useEffect(()=>{document.documentElement.classList.toggle("dark",t)},[t]),ie.jsxs(ie.Fragment,{children:[ie.jsx("div",{className:"fixed top-4 right-4 z-50",children:ie.jsx("button",{onClick:()=>e(!t),className:`relative w-14 h-8 top-2 flex items-center rounded-full p-1 transition-colors duration-300
            ${t?"bg-gray-800":"bg-gray-300"}`,children:ie.jsx("div",{className:`w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-300
              ${t?"translate-x-6":"translate-x-0 bg-yellow-100"}`,children:t?ie.jsx(Fc,{icon:"rr-moon",className:"text-sm text-gray-500"}):ie.jsx(Fc,{icon:"rr-sun",className:"text-sm text-yellow-500"})})})}),ie.jsx(W2,{children:ie.jsx(sE,{path:"/",element:ie.jsx(kH,{dark:t})})})]})}jC.createRoot(document.getElementById("root")).render(ie.jsx(I.StrictMode,{children:ie.jsx(p3,{basename:"/jom",children:ie.jsx(WH,{})})}));
