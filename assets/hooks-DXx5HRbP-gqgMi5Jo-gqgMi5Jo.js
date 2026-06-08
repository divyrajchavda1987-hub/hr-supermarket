(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var DE={exports:{}},Sc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=Symbol.for("react.transitional.element"),s1=Symbol.for("react.fragment");function OE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var r in t)r!=="key"&&(n[r]=t[r])}else n=t;return t=n.ref,{$$typeof:r1,type:e,key:i,ref:t!==void 0?t:null,props:n}}Sc.Fragment=s1;Sc.jsx=OE;Sc.jsxs=OE;DE.exports=Sc;var Q=DE.exports,NE={exports:{}},J={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm=Symbol.for("react.transitional.element"),a1=Symbol.for("react.portal"),o1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),u1=Symbol.for("react.profiler"),c1=Symbol.for("react.consumer"),h1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),d1=Symbol.for("react.suspense"),m1=Symbol.for("react.memo"),ME=Symbol.for("react.lazy"),g1=Symbol.for("react.activity"),dy=Symbol.iterator;function p1(e){return e===null||typeof e!="object"?null:(e=dy&&e[dy]||e["@@iterator"],typeof e=="function"?e:null)}var VE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},PE=Object.assign,kE={};function oa(e,t,n){this.props=e,this.context=t,this.refs=kE,this.updater=n||VE}oa.prototype.isReactComponent={};oa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};oa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function LE(){}LE.prototype=oa.prototype;function um(e,t,n){this.props=e,this.context=t,this.refs=kE,this.updater=n||VE}var cm=um.prototype=new LE;cm.constructor=um;PE(cm,oa.prototype);cm.isPureReactComponent=!0;var my=Array.isArray;function xf(){}var It={H:null,A:null,T:null,S:null},UE=Object.prototype.hasOwnProperty;function hm(e,t,n){var i=n.ref;return{$$typeof:lm,type:e,key:t,ref:i!==void 0?i:null,props:n}}function y1(e,t){return hm(e.type,t,e.props)}function fm(e){return typeof e=="object"&&e!==null&&e.$$typeof===lm}function _1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gy=/\/+/g;function Lh(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_1(""+e.key):t.toString(36)}function v1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(xf,xf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function fs(e,t,n,i,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case lm:case a1:a=!0;break;case ME:return a=e._init,fs(a(e._payload),t,n,i,r)}}if(a)return r=r(e),a=i===""?"."+Lh(e,0):i,my(r)?(n="",a!=null&&(n=a.replace(gy,"$&/")+"/"),fs(r,t,n,"",function(c){return c})):r!=null&&(fm(r)&&(r=y1(r,n+(r.key==null||e&&e.key===r.key?"":(""+r.key).replace(gy,"$&/")+"/")+a)),t.push(r)),1;a=0;var l=i===""?".":i+":";if(my(e))for(var u=0;u<e.length;u++)i=e[u],s=l+Lh(i,u),a+=fs(i,t,n,s,r);else if(u=p1(e),typeof u=="function")for(e=u.call(e),u=0;!(i=e.next()).done;)i=i.value,s=l+Lh(i,u++),a+=fs(i,t,n,s,r);else if(s==="object"){if(typeof e.then=="function")return fs(v1(e),t,n,i,r);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function Ml(e,t,n){if(e==null)return e;var i=[],r=0;return fs(e,i,"","",function(s){return t.call(n,s,r++)}),i}function E1(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var py=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},T1={map:Ml,forEach:function(e,t,n){Ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ml(e,function(){t++}),t},toArray:function(e){return Ml(e,function(t){return t})||[]},only:function(e){if(!fm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Activity=g1;J.Children=T1;J.Component=oa;J.Fragment=o1;J.Profiler=u1;J.PureComponent=um;J.StrictMode=l1;J.Suspense=d1;J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=It;J.__COMPILER_RUNTIME={__proto__:null,c:function(e){return It.H.useMemoCache(e)}};J.cache=function(e){return function(){return e.apply(null,arguments)}};J.cacheSignal=function(){return null};J.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=PE({},e.props),r=e.key;if(t!=null)for(s in t.key!==void 0&&(r=""+t.key),t)!UE.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(i[s]=t[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];i.children=a}return hm(e.type,r,i)};J.createContext=function(e){return e={$$typeof:h1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:c1,_context:e},e};J.createElement=function(e,t,n){var i,r={},s=null;if(t!=null)for(i in t.key!==void 0&&(s=""+t.key),t)UE.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=t[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return hm(e,s,r)};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:f1,render:e}};J.isValidElement=fm;J.lazy=function(e){return{$$typeof:ME,_payload:{_status:-1,_result:e},_init:E1}};J.memo=function(e,t){return{$$typeof:m1,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=It.T,n={};It.T=n;try{var i=e(),r=It.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(xf,py)}catch(s){py(s)}finally{t!==null&&n.types!==null&&(t.types=n.types),It.T=t}};J.unstable_useCacheRefresh=function(){return It.H.useCacheRefresh()};J.use=function(e){return It.H.use(e)};J.useActionState=function(e,t,n){return It.H.useActionState(e,t,n)};J.useCallback=function(e,t){return It.H.useCallback(e,t)};J.useContext=function(e){return It.H.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e,t){return It.H.useDeferredValue(e,t)};J.useEffect=function(e,t){return It.H.useEffect(e,t)};J.useEffectEvent=function(e){return It.H.useEffectEvent(e)};J.useId=function(){return It.H.useId()};J.useImperativeHandle=function(e,t,n){return It.H.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return It.H.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return It.H.useLayoutEffect(e,t)};J.useMemo=function(e,t){return It.H.useMemo(e,t)};J.useOptimistic=function(e,t){return It.H.useOptimistic(e,t)};J.useReducer=function(e,t,n){return It.H.useReducer(e,t,n)};J.useRef=function(e){return It.H.useRef(e)};J.useState=function(e){return It.H.useState(e)};J.useSyncExternalStore=function(e,t,n){return It.H.useSyncExternalStore(e,t,n)};J.useTransition=function(){return It.H.useTransition()};J.version="19.2.6";NE.exports=J;var ei=NE.exports,xE={exports:{}},bc={},zE={exports:{}},BE={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(q,tt){var X=q.length;q.push(tt);t:for(;0<X;){var vt=X-1>>>1,xt=q[vt];if(0<r(xt,tt))q[vt]=tt,q[X]=xt,X=vt;else break t}}function n(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var tt=q[0],X=q.pop();if(X!==tt){q[0]=X;t:for(var vt=0,xt=q.length,gr=xt>>>1;vt<gr;){var pr=2*(vt+1)-1,as=q[pr],Qe=pr+1,mi=q[Qe];if(0>r(as,X))Qe<xt&&0>r(mi,as)?(q[vt]=mi,q[Qe]=X,vt=Qe):(q[vt]=as,q[pr]=X,vt=pr);else if(Qe<xt&&0>r(mi,X))q[vt]=mi,q[Qe]=X,vt=Qe;else break t}}return tt}function r(q,tt){var X=q.sortIndex-tt.sortIndex;return X!==0?X:q.id-tt.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var u=[],c=[],d=1,m=null,g=3,_=!1,D=!1,M=!1,L=!1,S=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function N(q){for(var tt=n(c);tt!==null;){if(tt.callback===null)i(c);else if(tt.startTime<=q)i(c),tt.sortIndex=tt.expirationTime,t(u,tt);else break;tt=n(c)}}function x(q){if(M=!1,N(q),!D)if(n(u)!==null)D=!0,j||(j=!0,R());else{var tt=n(c);tt!==null&&cn(x,tt.startTime-q)}}var j=!1,v=-1,y=5,E=-1;function b(){return L?!0:!(e.unstable_now()-E<y)}function w(){if(L=!1,j){var q=e.unstable_now();E=q;var tt=!0;try{t:{D=!1,M&&(M=!1,T(v),v=-1),_=!0;var X=g;try{e:{for(N(q),m=n(u);m!==null&&!(m.expirationTime>q&&b());){var vt=m.callback;if(typeof vt=="function"){m.callback=null,g=m.priorityLevel;var xt=vt(m.expirationTime<=q);if(q=e.unstable_now(),typeof xt=="function"){m.callback=xt,N(q),tt=!0;break e}m===n(u)&&i(u),N(q)}else i(u);m=n(u)}if(m!==null)tt=!0;else{var gr=n(c);gr!==null&&cn(x,gr.startTime-q),tt=!1}}break t}finally{m=null,g=X,_=!1}tt=void 0}}finally{tt?R():j=!1}}}var R;if(typeof I=="function")R=function(){I(w)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,ce=A.port2;A.port1.onmessage=w,R=function(){ce.postMessage(null)}}else R=function(){S(w,0)};function cn(q,tt){v=S(function(){q(e.unstable_now())},tt)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(q){switch(g){case 1:case 2:case 3:var tt=3;break;default:tt=g}var X=g;g=tt;try{return q()}finally{g=X}},e.unstable_requestPaint=function(){L=!0},e.unstable_runWithPriority=function(q,tt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var X=g;g=q;try{return tt()}finally{g=X}},e.unstable_scheduleCallback=function(q,tt,X){var vt=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?vt+X:vt):X=vt,q){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=X+xt,q={id:d++,callback:tt,priorityLevel:q,startTime:X,expirationTime:xt,sortIndex:-1},X>vt?(q.sortIndex=X,t(c,q),n(u)===null&&q===n(c)&&(M?(T(v),v=-1):M=!0,cn(x,X-vt))):(q.sortIndex=xt,t(u,q),D||_||(D=!0,j||(j=!0,R()))),q},e.unstable_shouldYield=b,e.unstable_wrapCallback=function(q){var tt=g;return function(){var X=g;g=tt;try{return q.apply(this,arguments)}finally{g=X}}}})(BE);zE.exports=BE;var A1=zE.exports,qE={exports:{}},Te={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S1=ei;function jE(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ti(){}var ve={d:{f:Ti,r:function(){throw Error(jE(522))},D:Ti,C:Ti,L:Ti,m:Ti,X:Ti,S:Ti,M:Ti},p:0,findDOMNode:null},b1=Symbol.for("react.portal");function w1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b1,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var io=S1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function wc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ve;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(jE(299));return w1(e,t,null,n)};Te.flushSync=function(e){var t=io.T,n=ve.p;try{if(io.T=null,ve.p=2,e)return e()}finally{io.T=t,ve.p=n,ve.d.f()}};Te.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,ve.d.C(e,t))};Te.prefetchDNS=function(e){typeof e=="string"&&ve.d.D(e)};Te.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=wc(n,t.crossOrigin),r=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?ve.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:s}):n==="script"&&ve.d.X(e,{crossOrigin:i,integrity:r,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Te.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=wc(t.as,t.crossOrigin);ve.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&ve.d.M(e)};Te.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=wc(n,t.crossOrigin);ve.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Te.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=wc(t.as,t.crossOrigin);ve.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else ve.d.m(e)};Te.requestFormReset=function(e){ve.d.r(e)};Te.unstable_batchedUpdates=function(e,t){return e(t)};Te.useFormState=function(e,t,n){return io.H.useFormState(e,t,n)};Te.useFormStatus=function(){return io.H.useHostTransitionStatus()};Te.version="19.2.6";function FE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(FE)}catch(e){console.error(e)}}FE(),qE.exports=Te;var I1=qE.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=A1,HE=ei,R1=I1;function P(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function GE(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yo(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function KE(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function QE(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yy(e){if(Yo(e)!==e)throw Error(P(188))}function C1(e){var t=e.alternate;if(!t){if(t=Yo(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,i=t;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return yy(r),e;if(s===i)return yy(r),t;s=s.sibling}throw Error(P(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==i)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function YE(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=YE(e),t!==null)return t;e=e.sibling}return null}var Rt=Object.assign,D1=Symbol.for("react.element"),Vl=Symbol.for("react.transitional.element"),Ka=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),$E=Symbol.for("react.strict_mode"),zf=Symbol.for("react.profiler"),XE=Symbol.for("react.consumer"),Hn=Symbol.for("react.context"),dm=Symbol.for("react.forward_ref"),Bf=Symbol.for("react.suspense"),qf=Symbol.for("react.suspense_list"),mm=Symbol.for("react.memo"),Si=Symbol.for("react.lazy"),jf=Symbol.for("react.activity"),O1=Symbol.for("react.memo_cache_sentinel"),_y=Symbol.iterator;function xa(e){return e===null||typeof e!="object"?null:(e=_y&&e[_y]||e["@@iterator"],typeof e=="function"?e:null)}var N1=Symbol.for("react.client.reference");function Ff(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===N1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Es:return"Fragment";case zf:return"Profiler";case $E:return"StrictMode";case Bf:return"Suspense";case qf:return"SuspenseList";case jf:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ka:return"Portal";case Hn:return e.displayName||"Context";case XE:return(e._context.displayName||"Context")+".Consumer";case dm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mm:return t=e.displayName||null,t!==null?t:Ff(e.type)||"Memo";case Si:t=e._payload,e=e._init;try{return Ff(e(t))}catch{}}return null}var Qa=Array.isArray,K=HE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht=R1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Mr={pending:!1,data:null,method:null,action:null},Hf=[],Ts=-1;function Pn(e){return{current:e}}function ee(e){0>Ts||(e.current=Hf[Ts],Hf[Ts]=null,Ts--)}function Tt(e,t){Ts++,Hf[Ts]=e.current,e.current=t}var In=Pn(null),So=Pn(null),Ui=Pn(null),Cu=Pn(null);function Du(e,t){switch(Tt(Ui,t),Tt(So,e),Tt(In,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?b_(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=b_(t),e=pA(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(In),Tt(In,e)}function Gs(){ee(In),ee(So),ee(Ui)}function Gf(e){e.memoizedState!==null&&Tt(Cu,e);var t=In.current,n=pA(t,e.type);t!==n&&(Tt(So,e),Tt(In,n))}function Ou(e){So.current===e&&(ee(In),ee(So)),Cu.current===e&&(ee(Cu),Po._currentValue=Mr)}var Uh,vy;function br(e){if(Uh===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uh=t&&t[1]||"",vy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Uh+e+vy}var xh=!1;function zh(e,t){if(!e||xh)return"";xh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(_){var g=_}Reflect.construct(e,[],m)}else{try{m.call()}catch(_){g=_}e.call(m.prototype)}}else{try{throw Error()}catch(_){g=_}(m=e())&&typeof m.catch=="function"&&m.catch(function(){})}}catch(_){if(_&&g&&typeof _.stack=="string")return[_.stack,g.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),a=s[0],l=s[1];if(a&&l){var u=a.split(`
`),c=l.split(`
`);for(r=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(i===u.length||r===c.length)for(i=u.length-1,r=c.length-1;1<=i&&0<=r&&u[i]!==c[r];)r--;for(;1<=i&&0<=r;i--,r--)if(u[i]!==c[r]){if(i!==1||r!==1)do if(i--,r--,0>r||u[i]!==c[r]){var d=`
`+u[i].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=i&&0<=r);break}}}finally{xh=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?br(n):""}function M1(e,t){switch(e.tag){case 26:case 27:case 5:return br(e.type);case 16:return br("Lazy");case 13:return e.child!==t&&t!==null?br("Suspense Fallback"):br("Suspense");case 19:return br("SuspenseList");case 0:case 15:return zh(e.type,!1);case 11:return zh(e.type.render,!1);case 1:return zh(e.type,!0);case 31:return br("Activity");default:return""}}function Ey(e){try{var t="",n=null;do t+=M1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Kf=Object.prototype.hasOwnProperty,gm=$t.unstable_scheduleCallback,Bh=$t.unstable_cancelCallback,V1=$t.unstable_shouldYield,P1=$t.unstable_requestPaint,Be=$t.unstable_now,k1=$t.unstable_getCurrentPriorityLevel,JE=$t.unstable_ImmediatePriority,WE=$t.unstable_UserBlockingPriority,Nu=$t.unstable_NormalPriority,L1=$t.unstable_LowPriority,ZE=$t.unstable_IdlePriority,U1=$t.log,x1=$t.unstable_setDisableYieldValue,$o=null,qe=null;function Mi(e){if(typeof U1=="function"&&x1(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode($o,e)}catch{}}var je=Math.clz32?Math.clz32:q1,z1=Math.log,B1=Math.LN2;function q1(e){return e>>>=0,e===0?32:31-(z1(e)/B1|0)|0}var Pl=256,kl=262144,Ll=4194304;function wr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ic(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=i&134217727;return l!==0?(i=l&~s,i!==0?r=wr(i):(a&=l,a!==0?r=wr(a):n||(n=l&~e,n!==0&&(r=wr(n))))):(l=i&~s,l!==0?r=wr(l):a!==0?r=wr(a):n||(n=i&~e,n!==0&&(r=wr(n)))),r===0?0:t!==0&&t!==r&&!(t&s)&&(s=r&-r,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:r}function Xo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function j1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tT(){var e=Ll;return Ll<<=1,!(Ll&62914560)&&(Ll=4194304),e}function qh(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function F1(e,t,n,i,r,s){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,u=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var d=31-je(n),m=1<<d;l[d]=0,u[d]=-1;var g=c[d];if(g!==null)for(c[d]=null,d=0;d<g.length;d++){var _=g[d];_!==null&&(_.lane&=-536870913)}n&=~m}i!==0&&eT(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(a&~t))}function eT(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-je(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function nT(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-je(n),r=1<<i;r&t|e[i]&t&&(e[i]|=t),n&=~r}}function iT(e,t){var n=t&-t;return n=n&42?1:pm(n),n&(e.suspendedLanes|t)?0:n}function pm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ym(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function rT(){var e=ht.p;return e!==0?e:(e=window.event,e===void 0?32:RA(e.type))}function Ty(e,t){var n=ht.p;try{return ht.p=e,t()}finally{ht.p=n}}var lr=Math.random().toString(36).slice(2),re="__reactFiber$"+lr,Oe="__reactProps$"+lr,la="__reactContainer$"+lr,Qf="__reactEvents$"+lr,H1="__reactListeners$"+lr,G1="__reactHandles$"+lr,Ay="__reactResources$"+lr,Wo="__reactMarker$"+lr;function _m(e){delete e[re],delete e[Oe],delete e[Qf],delete e[H1],delete e[G1]}function As(e){var t=e[re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[la]||n[re]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=D_(e);e!==null;){if(n=e[re])return n;e=D_(e)}return t}e=n,n=e.parentNode}return null}function ua(e){if(e=e[re]||e[la]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ya(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(P(33))}function Ms(e){var t=e[Ay];return t||(t=e[Ay]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function te(e){e[Wo]=!0}var sT=new Set,aT={};function Jr(e,t){Ks(e,t),Ks(e+"Capture",t)}function Ks(e,t){for(aT[e]=t,e=0;e<t.length;e++)sT.add(t[e])}var K1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sy={},by={};function Q1(e){return Kf.call(by,e)?!0:Kf.call(Sy,e)?!1:K1.test(e)?by[e]=!0:(Sy[e]=!0,!1)}function iu(e,t,n){if(Q1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ul(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ln(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function Xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oT(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Y1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yf(e){if(!e._valueTracker){var t=oT(e)?"checked":"value";e._valueTracker=Y1(e,t,""+e[t])}}function lT(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=oT(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Mu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $1=/[\n"\\]/g;function Ze(e){return e.replace($1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function $f(e,t,n,i,r,s,a,l){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Xe(t)):e.value!==""+Xe(t)&&(e.value=""+Xe(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?Xf(e,a,Xe(t)):n!=null?Xf(e,a,Xe(n)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?e.name=""+Xe(l):e.removeAttribute("name")}function uT(e,t,n,i,r,s,a,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Yf(e);return}n=n!=null?""+Xe(n):"",t=t!=null?""+Xe(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=l?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),Yf(e)}function Xf(e,t,n){t==="number"&&Mu(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Vs(e,t,n,i){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Xe(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function cT(e,t,n){if(t!=null&&(t=""+Xe(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Xe(n):""}function hT(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(P(92));if(Qa(i)){if(1<i.length)throw Error(P(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Xe(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Yf(e)}function Qs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var X1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||X1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function fT(e,t,n){if(t!=null&&typeof t!="object")throw Error(P(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&n[r]!==i&&wy(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&wy(e,s,t[s])}function vm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ru(e){return W1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gn(){}var Jf=null;function Em(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,Ps=null;function Iy(e){var t=ua(e);if(t&&(e=t.stateNode)){var n=e[Oe]||null;t:switch(e=t.stateNode,t.type){case"input":if($f(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ze(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var r=i[Oe]||null;if(!r)throw Error(P(90));$f(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&lT(i)}break t;case"textarea":cT(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Vs(e,!!n.multiple,t,!1)}}}var jh=!1;function dT(e,t,n){if(jh)return e(t,n);jh=!0;try{var i=e(t);return i}finally{if(jh=!1,(Ss!==null||Ps!==null)&&(xc(),Ss&&(t=Ss,e=Ps,Ps=Ss=null,Iy(t),e)))for(t=0;t<e.length;t++)Iy(e[t])}}function bo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Oe]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wf=!1;if(ni)try{var za={};Object.defineProperty(za,"passive",{get:function(){Wf=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Wf=!1}var Vi=null,Tm=null,su=null;function mT(){if(su)return su;var e,t=Tm,n=t.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===r[s-i];i++);return su=r.slice(e,1<i?1-i:void 0)}function au(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xl(){return!0}function Ry(){return!1}function Ne(e){function t(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xl:Ry,this.isPropagationStopped=Ry,this}return Rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=Ne(Wr),Zo=Rt({},Wr,{view:0,detail:0}),Z1=Ne(Zo),Fh,Hh,Ba,Cc=Rt({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Am,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ba&&(Ba&&e.type==="mousemove"?(Fh=e.screenX-Ba.screenX,Hh=e.screenY-Ba.screenY):Hh=Fh=0,Ba=e),Fh)},movementY:function(e){return"movementY"in e?e.movementY:Hh}}),Cy=Ne(Cc),tI=Rt({},Cc,{dataTransfer:0}),eI=Ne(tI),nI=Rt({},Zo,{relatedTarget:0}),Gh=Ne(nI),iI=Rt({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),rI=Ne(iI),sI=Rt({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),aI=Ne(sI),oI=Rt({},Wr,{data:0}),Dy=Ne(oI),lI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hI(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cI[e])?!!t[e]:!1}function Am(){return hI}var fI=Rt({},Zo,{key:function(e){if(e.key){var t=lI[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=au(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uI[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Am,charCode:function(e){return e.type==="keypress"?au(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?au(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dI=Ne(fI),mI=Rt({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oy=Ne(mI),gI=Rt({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Am}),pI=Ne(gI),yI=Rt({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_I=Ne(yI),vI=Rt({},Cc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=Ne(vI),TI=Rt({},Wr,{newState:0,oldState:0}),AI=Ne(TI),SI=[9,13,27,32],Sm=ni&&"CompositionEvent"in window,ro=null;ni&&"documentMode"in document&&(ro=document.documentMode);var bI=ni&&"TextEvent"in window&&!ro,gT=ni&&(!Sm||ro&&8<ro&&11>=ro),Ny=" ",My=!1;function pT(e,t){switch(e){case"keyup":return SI.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yT(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bs=!1;function wI(e,t){switch(e){case"compositionend":return yT(t);case"keypress":return t.which!==32?null:(My=!0,Ny);case"textInput":return e=t.data,e===Ny&&My?null:e;default:return null}}function II(e,t){if(bs)return e==="compositionend"||!Sm&&pT(e,t)?(e=mT(),su=Tm=Vi=null,bs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gT&&t.locale!=="ko"?null:t.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!RI[e.type]:t==="textarea"}function _T(e,t,n,i){Ss?Ps?Ps.push(i):Ps=[i]:Ss=i,t=Xu(t,"onChange"),0<t.length&&(n=new Rc("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var so=null,wo=null;function CI(e){dA(e,0)}function Dc(e){var t=Ya(e);if(lT(t))return e}function Py(e,t){if(e==="change")return t}var vT=!1;if(ni){var Kh;if(ni){var Qh="oninput"in document;if(!Qh){var ky=document.createElement("div");ky.setAttribute("oninput","return;"),Qh=typeof ky.oninput=="function"}Kh=Qh}else Kh=!1;vT=Kh&&(!document.documentMode||9<document.documentMode)}function Ly(){so&&(so.detachEvent("onpropertychange",ET),wo=so=null)}function ET(e){if(e.propertyName==="value"&&Dc(wo)){var t=[];_T(t,wo,e,Em(e)),dT(CI,t)}}function DI(e,t,n){e==="focusin"?(Ly(),so=t,wo=n,so.attachEvent("onpropertychange",ET)):e==="focusout"&&Ly()}function OI(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dc(wo)}function NI(e,t){if(e==="click")return Dc(t)}function MI(e,t){if(e==="input"||e==="change")return Dc(t)}function VI(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:VI;function Io(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Kf.call(t,r)||!Ge(e[r],t[r]))return!1}return!0}function Uy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xy(e,t){var n=Uy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=Uy(n)}}function TT(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?TT(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function AT(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mu(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mu(e.document)}return t}function bm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var PI=ni&&"documentMode"in document&&11>=document.documentMode,ws=null,Zf=null,ao=null,td=!1;function zy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;td||ws==null||ws!==Mu(i)||(i=ws,"selectionStart"in i&&bm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ao&&Io(ao,i)||(ao=i,i=Xu(Zf,"onSelect"),0<i.length&&(t=new Rc("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=ws)))}function Ar(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Is={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionrun:Ar("Transition","TransitionRun"),transitionstart:Ar("Transition","TransitionStart"),transitioncancel:Ar("Transition","TransitionCancel"),transitionend:Ar("Transition","TransitionEnd")},Yh={},ST={};ni&&(ST=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Zr(e){if(Yh[e])return Yh[e];if(!Is[e])return e;var t=Is[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ST)return Yh[e]=t[n];return e}var bT=Zr("animationend"),wT=Zr("animationiteration"),IT=Zr("animationstart"),kI=Zr("transitionrun"),LI=Zr("transitionstart"),UI=Zr("transitioncancel"),RT=Zr("transitionend"),CT=new Map,ed="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ed.push("scrollEnd");function _n(e,t){CT.set(e,t),Jr(t,[e])}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$e=[],Rs=0,wm=0;function Oc(){for(var e=Rs,t=wm=Rs=0;t<e;){var n=$e[t];$e[t++]=null;var i=$e[t];$e[t++]=null;var r=$e[t];$e[t++]=null;var s=$e[t];if($e[t++]=null,i!==null&&r!==null){var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}s!==0&&DT(n,r,s)}}function Nc(e,t,n,i){$e[Rs++]=e,$e[Rs++]=t,$e[Rs++]=n,$e[Rs++]=i,wm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Im(e,t,n,i){return Nc(e,t,n,i),Pu(e)}function ts(e,t){return Nc(e,null,null,t),Pu(e)}function DT(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=e.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-je(n),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=n|536870912),s):null}function Pu(e){if(50<po)throw po=0,Ad=null,Error(P(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Cs={};function xI(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,i){return new xI(e,t,n,i)}function Rm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xn(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function OT(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ou(e,t,n,i,r,s){var a=0;if(i=e,typeof e=="function")Rm(e)&&(a=1);else if(typeof e=="string")a=FR(e,n,In.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case jf:return e=Le(31,n,t,r),e.elementType=jf,e.lanes=s,e;case Es:return Vr(n.children,r,s,t);case $E:a=8,r|=24;break;case zf:return e=Le(12,n,t,r|2),e.elementType=zf,e.lanes=s,e;case Bf:return e=Le(13,n,t,r),e.elementType=Bf,e.lanes=s,e;case qf:return e=Le(19,n,t,r),e.elementType=qf,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hn:a=10;break t;case XE:a=9;break t;case dm:a=11;break t;case mm:a=14;break t;case Si:a=16,i=null;break t}a=29,n=Error(P(130,e===null?"null":typeof e,"")),i=null}return t=Le(a,n,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function Vr(e,t,n,i){return e=Le(7,e,i,t),e.lanes=n,e}function $h(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function NT(e){var t=Le(18,null,null,0);return t.stateNode=e,t}function Xh(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var By=new WeakMap;function tn(e,t){if(typeof e=="object"&&e!==null){var n=By.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ey(t)},By.set(e,t),t)}return{value:e,source:t,stack:Ey(t)}}var Ds=[],Os=0,ku=null,Ro=0,Je=[],We=0,Xi=null,Sn=1,bn="";function qn(e,t){Ds[Os++]=Ro,Ds[Os++]=ku,ku=e,Ro=t}function MT(e,t,n){Je[We++]=Sn,Je[We++]=bn,Je[We++]=Xi,Xi=e;var i=Sn;e=bn;var r=32-je(i)-1;i&=~(1<<r),n+=1;var s=32-je(t)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Sn=1<<32-je(t)+r|n<<r|i,bn=s+e}else Sn=1<<s|n<<r|i,bn=e}function Cm(e){e.return!==null&&(qn(e,1),MT(e,1,0))}function Dm(e){for(;e===ku;)ku=Ds[--Os],Ds[Os]=null,Ro=Ds[--Os],Ds[Os]=null;for(;e===Xi;)Xi=Je[--We],Je[We]=null,bn=Je[--We],Je[We]=null,Sn=Je[--We],Je[We]=null}function VT(e,t){Je[We++]=Sn,Je[We++]=bn,Je[We++]=Xi,Sn=t.id,bn=t.overflow,Xi=e}var se=null,bt=null,ot=!1,xi=null,en=!1,nd=Error(P(519));function Ji(e){var t=Error(P(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(tn(t,e)),nd}function qy(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[re]=e,t[Oe]=i,n){case"dialog":et("cancel",t),et("close",t);break;case"iframe":case"object":case"embed":et("load",t);break;case"video":case"audio":for(n=0;n<Mo.length;n++)et(Mo[n],t);break;case"source":et("error",t);break;case"img":case"image":case"link":et("error",t),et("load",t);break;case"details":et("toggle",t);break;case"input":et("invalid",t),uT(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":et("invalid",t);break;case"textarea":et("invalid",t),hT(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||gA(t.textContent,n)?(i.popover!=null&&(et("beforetoggle",t),et("toggle",t)),i.onScroll!=null&&et("scroll",t),i.onScrollEnd!=null&&et("scrollend",t),i.onClick!=null&&(t.onclick=Gn),t=!0):t=!1,t||Ji(e,!0)}function jy(e){for(se=e.return;se;)switch(se.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:se=se.return}}function cs(e){if(e!==se)return!1;if(!ot)return jy(e),ot=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rd(e.type,e.memoizedProps)),n=!n),n&&bt&&Ji(e),jy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));bt=C_(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));bt=C_(e)}else t===27?(t=bt,ur(e.type)?(e=Nd,Nd=null,bt=e):bt=t):bt=se?sn(e.stateNode.nextSibling):null;return!0}function zr(){bt=se=null,ot=!1}function Jh(){var e=xi;return e!==null&&(we===null?we=e:we.push.apply(we,e),xi=null),e}function Co(e){xi===null?xi=[e]:xi.push(e)}var id=Pn(null),es=null,Kn=null;function wi(e,t,n){Tt(id,t._currentValue),t._currentValue=n}function Jn(e){e._currentValue=id.current,ee(id)}function rd(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function sd(e,t,n,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var a=r.child;s=s.firstContext;t:for(;s!==null;){var l=s;s=r;for(var u=0;u<t.length;u++)if(l.context===t[u]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rd(s.return,n,e),i||(a=null);break t}s=l.next}}else if(r.tag===18){if(a=r.return,a===null)throw Error(P(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),rd(a,n,e),a=null}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}}function ca(e,t,n,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if(r.flags&524288)s=!0;else if(r.flags&262144)break}if(r.tag===10){var a=r.alternate;if(a===null)throw Error(P(387));if(a=a.memoizedProps,a!==null){var l=r.type;Ge(r.pendingProps.value,a.value)||(e!==null?e.push(l):e=[l])}}else if(r===Cu.current){if(a=r.alternate,a===null)throw Error(P(387));a.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}r=r.return}e!==null&&sd(t,e,n,i),t.flags|=262144}function Lu(e){for(e=e.firstContext;e!==null;){if(!Ge(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Br(e){es=e,Kn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function oe(e){return PT(es,e)}function zl(e,t){return es===null&&Br(e),PT(e,t)}function PT(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Kn===null){if(e===null)throw Error(P(308));Kn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kn=Kn.next=t;return n}var zI=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},BI=$t.unstable_scheduleCallback,qI=$t.unstable_NormalPriority,jt={$$typeof:Hn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Om(){return{controller:new zI,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&BI(qI,function(){e.controller.abort()})}var oo=null,ad=0,Ys=0,ks=null;function jI(e,t){if(oo===null){var n=oo=[];ad=0,Ys=eg(),ks={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ad++,t.then(Fy,Fy),t}function Fy(){if(--ad===0&&oo!==null){ks!==null&&(ks.status="fulfilled");var e=oo;oo=null,Ys=0,ks=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function FI(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var Hy=K.S;K.S=function(e,t){Y0=Be(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&jI(e,t),Hy!==null&&Hy(e,t)};var Pr=Pn(null);function Nm(){var e=Pr.current;return e!==null?e:_t.pooledCache}function lu(e,t){t===null?Tt(Pr,Pr.current):Tt(Pr,t.pool)}function kT(){var e=Nm();return e===null?null:{parent:jt._currentValue,pool:e}}var ha=Error(P(460)),Mm=Error(P(474)),Mc=Error(P(542)),Uu={then:function(){}};function Gy(e){return e=e.status,e==="fulfilled"||e==="rejected"}function LT(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Gn,Gn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qy(e),e;default:if(typeof t.status=="string")t.then(Gn,Gn);else{if(e=_t,e!==null&&100<e.shellSuspendCounter)throw Error(P(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qy(e),e}throw kr=t,ha}}function Ir(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(kr=n,ha):n}}var kr=null;function Ky(){if(kr===null)throw Error(P(459));var e=kr;return kr=null,e}function Qy(e){if(e===ha||e===Mc)throw Error(P(483))}var Ls=null,Do=0;function Bl(e){var t=Do;return Do+=1,Ls===null&&(Ls=[]),LT(Ls,e,t)}function qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ql(e,t){throw t.$$typeof===D1?Error(P(525)):(e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function UT(e){function t(S,T){if(e){var I=S.deletions;I===null?(S.deletions=[T],S.flags|=16):I.push(T)}}function n(S,T){if(!e)return null;for(;T!==null;)t(S,T),T=T.sibling;return null}function i(S){for(var T=new Map;S!==null;)S.key!==null?T.set(S.key,S):T.set(S.index,S),S=S.sibling;return T}function r(S,T){return S=Xn(S,T),S.index=0,S.sibling=null,S}function s(S,T,I){return S.index=I,e?(I=S.alternate,I!==null?(I=I.index,I<T?(S.flags|=67108866,T):I):(S.flags|=67108866,T)):(S.flags|=1048576,T)}function a(S){return e&&S.alternate===null&&(S.flags|=67108866),S}function l(S,T,I,N){return T===null||T.tag!==6?(T=$h(I,S.mode,N),T.return=S,T):(T=r(T,I),T.return=S,T)}function u(S,T,I,N){var x=I.type;return x===Es?d(S,T,I.props.children,N,I.key):T!==null&&(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Si&&Ir(x)===T.type)?(T=r(T,I.props),qa(T,I),T.return=S,T):(T=ou(I.type,I.key,I.props,null,S.mode,N),qa(T,I),T.return=S,T)}function c(S,T,I,N){return T===null||T.tag!==4||T.stateNode.containerInfo!==I.containerInfo||T.stateNode.implementation!==I.implementation?(T=Xh(I,S.mode,N),T.return=S,T):(T=r(T,I.children||[]),T.return=S,T)}function d(S,T,I,N,x){return T===null||T.tag!==7?(T=Vr(I,S.mode,N,x),T.return=S,T):(T=r(T,I),T.return=S,T)}function m(S,T,I){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=$h(""+T,S.mode,I),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Vl:return I=ou(T.type,T.key,T.props,null,S.mode,I),qa(I,T),I.return=S,I;case Ka:return T=Xh(T,S.mode,I),T.return=S,T;case Si:return T=Ir(T),m(S,T,I)}if(Qa(T)||xa(T))return T=Vr(T,S.mode,I,null),T.return=S,T;if(typeof T.then=="function")return m(S,Bl(T),I);if(T.$$typeof===Hn)return m(S,zl(S,T),I);ql(S,T)}return null}function g(S,T,I,N){var x=T!==null?T.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return x!==null?null:l(S,T,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Vl:return I.key===x?u(S,T,I,N):null;case Ka:return I.key===x?c(S,T,I,N):null;case Si:return I=Ir(I),g(S,T,I,N)}if(Qa(I)||xa(I))return x!==null?null:d(S,T,I,N,null);if(typeof I.then=="function")return g(S,T,Bl(I),N);if(I.$$typeof===Hn)return g(S,T,zl(S,I),N);ql(S,I)}return null}function _(S,T,I,N,x){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return S=S.get(I)||null,l(T,S,""+N,x);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Vl:return S=S.get(N.key===null?I:N.key)||null,u(T,S,N,x);case Ka:return S=S.get(N.key===null?I:N.key)||null,c(T,S,N,x);case Si:return N=Ir(N),_(S,T,I,N,x)}if(Qa(N)||xa(N))return S=S.get(I)||null,d(T,S,N,x,null);if(typeof N.then=="function")return _(S,T,I,Bl(N),x);if(N.$$typeof===Hn)return _(S,T,I,zl(T,N),x);ql(T,N)}return null}function D(S,T,I,N){for(var x=null,j=null,v=T,y=T=0,E=null;v!==null&&y<I.length;y++){v.index>y?(E=v,v=null):E=v.sibling;var b=g(S,v,I[y],N);if(b===null){v===null&&(v=E);break}e&&v&&b.alternate===null&&t(S,v),T=s(b,T,y),j===null?x=b:j.sibling=b,j=b,v=E}if(y===I.length)return n(S,v),ot&&qn(S,y),x;if(v===null){for(;y<I.length;y++)v=m(S,I[y],N),v!==null&&(T=s(v,T,y),j===null?x=v:j.sibling=v,j=v);return ot&&qn(S,y),x}for(v=i(v);y<I.length;y++)E=_(v,S,y,I[y],N),E!==null&&(e&&E.alternate!==null&&v.delete(E.key===null?y:E.key),T=s(E,T,y),j===null?x=E:j.sibling=E,j=E);return e&&v.forEach(function(w){return t(S,w)}),ot&&qn(S,y),x}function M(S,T,I,N){if(I==null)throw Error(P(151));for(var x=null,j=null,v=T,y=T=0,E=null,b=I.next();v!==null&&!b.done;y++,b=I.next()){v.index>y?(E=v,v=null):E=v.sibling;var w=g(S,v,b.value,N);if(w===null){v===null&&(v=E);break}e&&v&&w.alternate===null&&t(S,v),T=s(w,T,y),j===null?x=w:j.sibling=w,j=w,v=E}if(b.done)return n(S,v),ot&&qn(S,y),x;if(v===null){for(;!b.done;y++,b=I.next())b=m(S,b.value,N),b!==null&&(T=s(b,T,y),j===null?x=b:j.sibling=b,j=b);return ot&&qn(S,y),x}for(v=i(v);!b.done;y++,b=I.next())b=_(v,S,y,b.value,N),b!==null&&(e&&b.alternate!==null&&v.delete(b.key===null?y:b.key),T=s(b,T,y),j===null?x=b:j.sibling=b,j=b);return e&&v.forEach(function(R){return t(S,R)}),ot&&qn(S,y),x}function L(S,T,I,N){if(typeof I=="object"&&I!==null&&I.type===Es&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Vl:t:{for(var x=I.key;T!==null;){if(T.key===x){if(x=I.type,x===Es){if(T.tag===7){n(S,T.sibling),N=r(T,I.props.children),N.return=S,S=N;break t}}else if(T.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Si&&Ir(x)===T.type){n(S,T.sibling),N=r(T,I.props),qa(N,I),N.return=S,S=N;break t}n(S,T);break}else t(S,T);T=T.sibling}I.type===Es?(N=Vr(I.props.children,S.mode,N,I.key),N.return=S,S=N):(N=ou(I.type,I.key,I.props,null,S.mode,N),qa(N,I),N.return=S,S=N)}return a(S);case Ka:t:{for(x=I.key;T!==null;){if(T.key===x)if(T.tag===4&&T.stateNode.containerInfo===I.containerInfo&&T.stateNode.implementation===I.implementation){n(S,T.sibling),N=r(T,I.children||[]),N.return=S,S=N;break t}else{n(S,T);break}else t(S,T);T=T.sibling}N=Xh(I,S.mode,N),N.return=S,S=N}return a(S);case Si:return I=Ir(I),L(S,T,I,N)}if(Qa(I))return D(S,T,I,N);if(xa(I)){if(x=xa(I),typeof x!="function")throw Error(P(150));return I=x.call(I),M(S,T,I,N)}if(typeof I.then=="function")return L(S,T,Bl(I),N);if(I.$$typeof===Hn)return L(S,T,zl(S,I),N);ql(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,T!==null&&T.tag===6?(n(S,T.sibling),N=r(T,I),N.return=S,S=N):(n(S,T),N=$h(I,S.mode,N),N.return=S,S=N),a(S)):n(S,T)}return function(S,T,I,N){try{Do=0;var x=L(S,T,I,N);return Ls=null,x}catch(v){if(v===ha||v===Mc)throw v;var j=Le(29,v,null,S.mode);return j.lanes=N,j.return=S,j}finally{}}}var qr=UT(!0),xT=UT(!1),bi=!1;function Vm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function zi(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Bi(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Pu(e),DT(e,null,n),t}return Nc(e,i,t,n),Pu(e)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nT(e,n)}}function Wh(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=t:s=s.next=t}else r=s=t;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ld=!1;function uo(){if(ld){var e=ks;if(e!==null)throw e}}function co(e,t,n,i){ld=!1;var r=e.updateQueue;bi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var u=l,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var m=r.baseState;a=0,d=c=u=null,l=s;do{var g=l.lane&-536870913,_=g!==l.lane;if(_?(at&g)===g:(i&g)===g){g!==0&&g===Ys&&(ld=!0),d!==null&&(d=d.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});t:{var D=e,M=l;g=t;var L=n;switch(M.tag){case 1:if(D=M.payload,typeof D=="function"){m=D.call(L,m,g);break t}m=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=M.payload,g=typeof D=="function"?D.call(L,m,g):D,g==null)break t;m=Rt({},m,g);break t;case 2:bi=!0}}g=l.callback,g!==null&&(e.flags|=64,_&&(e.flags|=8192),_=r.callbacks,_===null?r.callbacks=[g]:_.push(g))}else _={lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=m):d=d.next=_,a|=g;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;_=l,l=_.next,_.next=null,r.lastBaseUpdate=_,r.shared.pending=null}}while(!0);d===null&&(u=m),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=d,s===null&&(r.shared.lanes=0),Zi|=a,e.lanes=a,e.memoizedState=m}}function zT(e,t){if(typeof e!="function")throw Error(P(191,e));e.call(t)}function BT(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)zT(n[e],t)}var $s=Pn(null),xu=Pn(0);function Yy(e,t){e=ai,Tt(xu,e),Tt($s,t),ai=e|t.baseLanes}function ud(){Tt(xu,ai),Tt($s,$s.current)}function Pm(){ai=xu.current,ee($s),ee(xu)}var Ke=Pn(null),rn=null;function Ii(e){var t=e.alternate;Tt(Lt,Lt.current&1),Tt(Ke,e),rn===null&&(t===null||$s.current!==null||t.memoizedState!==null)&&(rn=e)}function cd(e){Tt(Lt,Lt.current),Tt(Ke,e),rn===null&&(rn=e)}function qT(e){e.tag===22?(Tt(Lt,Lt.current),Tt(Ke,e),rn===null&&(rn=e)):Ri()}function Ri(){Tt(Lt,Lt.current),Tt(Ke,Ke.current)}function ke(e){ee(Ke),rn===e&&(rn=null),ee(Lt)}var Lt=Pn(0);function zu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Dd(n)||Od(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=0,W=null,pt=null,Bt=null,Bu=!1,Us=!1,jr=!1,qu=0,Oo=0,xs=null,HI=0;function Mt(){throw Error(P(321))}function km(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Lm(e,t,n,i,r,s){return ii=s,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,K.H=e===null||e.memoizedState===null?_0:Qm,jr=!1,s=n(i,r),jr=!1,Us&&(s=FT(t,n,i,r)),jT(e),s}function jT(e){K.H=No;var t=pt!==null&&pt.next!==null;if(ii=0,Bt=pt=W=null,Bu=!1,Oo=0,xs=null,t)throw Error(P(300));e===null||Ht||(e=e.dependencies,e!==null&&Lu(e)&&(Ht=!0))}function FT(e,t,n,i){W=e;var r=0;do{if(Us&&(xs=null),Oo=0,Us=!1,25<=r)throw Error(P(301));if(r+=1,Bt=pt=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}K.H=v0,s=t(n,i)}while(Us);return s}function GI(){var e=K.H,t=e.useState()[0];return t=typeof t.then=="function"?el(t):t,e=e.useState()[0],(pt!==null?pt.memoizedState:null)!==e&&(W.flags|=1024),t}function Um(){var e=qu!==0;return qu=0,e}function xm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zm(e){if(Bu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bu=!1}ii=0,Bt=pt=W=null,Us=!1,Oo=qu=0,xs=null}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?W.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function Ut(){if(pt===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=Bt===null?W.memoizedState:Bt.next;if(t!==null)Bt=t,pt=e;else{if(e===null)throw W.alternate===null?Error(P(467)):Error(P(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Bt===null?W.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function el(e){var t=Oo;return Oo+=1,xs===null&&(xs=[]),e=LT(xs,e,t),t=W,(Bt===null?t.memoizedState:Bt.next)===null&&(t=t.alternate,K.H=t===null||t.memoizedState===null?_0:Qm),e}function Pc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return el(e);if(e.$$typeof===Hn)return oe(e)}throw Error(P(438,String(e)))}function Bm(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=W.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Vc(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=O1;return t.index++,n}function ri(e,t){return typeof t=="function"?t(e):t}function uu(e){var t=Ut();return qm(t,pt,e)}function qm(e,t,n){var i=e.queue;if(i===null)throw Error(P(311));i.lastRenderedReducer=n;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var l=a=null,u=null,c=t,d=!1;do{var m=c.lane&-536870913;if(m!==c.lane?(at&m)===m:(ii&m)===m){var g=c.revertLane;if(g===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),m===Ys&&(d=!0);else if((ii&g)===g){c=c.next,g===Ys&&(d=!0);continue}else m={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(l=u=m,a=s):u=u.next=m,W.lanes|=g,Zi|=g;m=c.action,jr&&n(s,m),s=c.hasEagerState?c.eagerState:n(s,m)}else g={lane:m,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(l=u=g,a=s):u=u.next=g,W.lanes|=m,Zi|=m;c=c.next}while(c!==null&&c!==t);if(u===null?a=s:u.next=l,!Ge(s,e.memoizedState)&&(Ht=!0,d&&(n=ks,n!==null)))throw n;e.memoizedState=s,e.baseState=a,e.baseQueue=u,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zh(e){var t=Ut(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var i=n.dispatch,r=n.pending,s=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=e(s,a.action),a=a.next;while(a!==r);Ge(s,t.memoizedState)||(Ht=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,i]}function HT(e,t,n){var i=W,r=Ut(),s=ot;if(s){if(n===void 0)throw Error(P(407));n=n()}else n=t();var a=!Ge((pt||r).memoizedState,n);if(a&&(r.memoizedState=n,Ht=!0),r=r.queue,jm(QT.bind(null,i,r,e),[e]),r.getSnapshot!==t||a||Bt!==null&&Bt.memoizedState.tag&1){if(i.flags|=2048,Xs(9,{destroy:void 0},KT.bind(null,i,r,n,t),null),_t===null)throw Error(P(349));s||ii&127||GT(i,t,n)}return n}function GT(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=Vc(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function KT(e,t,n,i){t.value=n,t.getSnapshot=i,YT(t)&&$T(e)}function QT(e,t,n){return n(function(){YT(t)&&$T(e)})}function YT(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function $T(e){var t=ts(e,2);t!==null&&Ce(t,e,2)}function hd(e){var t=_e();if(typeof e=="function"){var n=e;if(e=n(),jr){Mi(!0);try{n()}finally{Mi(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t}function XT(e,t,n,i){return e.baseState=n,qm(e,pt,typeof i=="function"?i:ri)}function KI(e,t,n,i,r){if(Lc(e))throw Error(P(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};K.T!==null?n(!0):s.isTransition=!1,i(s),n=t.pending,n===null?(s.next=t.pending=s,JT(t,s)):(s.next=n.next,t.pending=n.next=s)}}function JT(e,t){var n=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=K.T,a={};K.T=a;try{var l=n(r,i),u=K.S;u!==null&&u(a,l),$y(e,t,l)}catch(c){fd(e,t,c)}finally{s!==null&&a.types!==null&&(s.types=a.types),K.T=s}}else try{s=n(r,i),$y(e,t,s)}catch(c){fd(e,t,c)}}function $y(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Xy(e,t,i)},function(i){return fd(e,t,i)}):Xy(e,t,n)}function Xy(e,t,n){t.status="fulfilled",t.value=n,WT(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,JT(e,n)))}function fd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,WT(t),t=t.next;while(t!==i)}e.action=null}function WT(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ZT(e,t){return t}function Jy(e,t){if(ot){var n=_t.formState;if(n!==null){t:{var i=W;if(ot){if(bt){e:{for(var r=bt,s=en;r.nodeType!==8;){if(!s){r=null;break e}if(r=sn(r.nextSibling),r===null){r=null;break e}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){bt=sn(r.nextSibling),i=r.data==="F!";break t}}Ji(i)}i=!1}i&&(t=n[0])}}return n=_e(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ZT,lastRenderedState:t},n.queue=i,n=g0.bind(null,W,i),i.dispatch=n,i=hd(!1),s=Km.bind(null,W,!1,i.queue),i=_e(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,n=KI.bind(null,W,r,s,n),r.dispatch=n,i.memoizedState=e,[t,n,!1]}function Wy(e){var t=Ut();return t0(t,pt,e)}function t0(e,t,n){if(t=qm(e,t,ZT)[0],e=uu(ri)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=el(t)}catch(a){throw a===ha?Mc:a}else i=t;t=Ut();var r=t.queue,s=r.dispatch;return n!==t.memoizedState&&(W.flags|=2048,Xs(9,{destroy:void 0},QI.bind(null,r,n),null)),[i,s,e]}function QI(e,t){e.action=t}function Zy(e){var t=Ut(),n=pt;if(n!==null)return t0(t,n,e);Ut(),t=t.memoizedState,n=Ut();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Xs(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=W.updateQueue,t===null&&(t=Vc(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function e0(){return Ut().memoizedState}function cu(e,t,n,i){var r=_e();W.flags|=e,r.memoizedState=Xs(1|t,{destroy:void 0},n,i===void 0?null:i)}function kc(e,t,n,i){var r=Ut();i=i===void 0?null:i;var s=r.memoizedState.inst;pt!==null&&i!==null&&km(i,pt.memoizedState.deps)?r.memoizedState=Xs(t,s,n,i):(W.flags|=e,r.memoizedState=Xs(1|t,s,n,i))}function t_(e,t){cu(8390656,8,e,t)}function jm(e,t){kc(2048,8,e,t)}function YI(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Vc(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function n0(e){var t=Ut().memoizedState;return YI({ref:t,nextImpl:e}),function(){if(ct&2)throw Error(P(440));return t.impl.apply(void 0,arguments)}}function i0(e,t){return kc(4,2,e,t)}function r0(e,t){return kc(4,4,e,t)}function s0(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function a0(e,t,n){n=n!=null?n.concat([e]):null,kc(4,4,s0.bind(null,t,e),n)}function Fm(){}function o0(e,t){var n=Ut();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&km(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function l0(e,t){var n=Ut();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&km(t,i[1]))return i[0];if(i=e(),jr){Mi(!0);try{e()}finally{Mi(!1)}}return n.memoizedState=[i,t],i}function Hm(e,t,n){return n===void 0||ii&1073741824&&!(at&261930)?e.memoizedState=t:(e.memoizedState=n,e=X0(),W.lanes|=e,Zi|=e,n)}function u0(e,t,n,i){return Ge(n,t)?n:$s.current!==null?(e=Hm(e,n,i),Ge(e,t)||(Ht=!0),e):!(ii&42)||ii&1073741824&&!(at&261930)?(Ht=!0,e.memoizedState=n):(e=X0(),W.lanes|=e,Zi|=e,t)}function c0(e,t,n,i,r){var s=ht.p;ht.p=s!==0&&8>s?s:8;var a=K.T,l={};K.T=l,Km(e,!1,t,n);try{var u=r(),c=K.S;if(c!==null&&c(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=FI(u,i);ho(e,t,d,Fe(e))}else ho(e,t,i,Fe(e))}catch(m){ho(e,t,{then:function(){},status:"rejected",reason:m},Fe())}finally{ht.p=s,a!==null&&l.types!==null&&(a.types=l.types),K.T=a}}function $I(){}function dd(e,t,n,i){if(e.tag!==5)throw Error(P(476));var r=h0(e).queue;c0(e,r,t,Mr,n===null?$I:function(){return f0(e),n(i)})}function h0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Mr,baseState:Mr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:Mr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function f0(e){var t=h0(e);t.next===null&&(t=e.alternate.memoizedState),ho(e,t.next.queue,{},Fe())}function Gm(){return oe(Po)}function d0(){return Ut().memoizedState}function m0(){return Ut().memoizedState}function XI(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fe();e=zi(n);var i=Bi(t,e,n);i!==null&&(Ce(i,t,n),lo(i,t,n)),t={cache:Om()},e.payload=t;return}t=t.return}}function JI(e,t,n){var i=Fe();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Lc(e)?p0(t,n):(n=Im(e,t,n,i),n!==null&&(Ce(n,e,i),y0(n,t,i)))}function g0(e,t,n){var i=Fe();ho(e,t,n,i)}function ho(e,t,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))p0(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,Ge(l,a))return Nc(e,t,r,0),_t===null&&Oc(),!1}catch{}finally{}if(n=Im(e,t,r,i),n!==null)return Ce(n,e,i),y0(n,t,i),!0}return!1}function Km(e,t,n,i){if(i={lane:2,revertLane:eg(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Lc(e)){if(t)throw Error(P(479))}else t=Im(e,n,i,2),t!==null&&Ce(t,e,2)}function Lc(e){var t=e.alternate;return e===W||t!==null&&t===W}function p0(e,t){Us=Bu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function y0(e,t,n){if(n&4194048){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,nT(e,n)}}var No={readContext:oe,use:Pc,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};No.useEffectEvent=Mt;var _0={readContext:oe,use:Pc,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:oe,useEffect:t_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,cu(4194308,4,s0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return cu(4194308,4,e,t)},useInsertionEffect:function(e,t){cu(4,2,e,t)},useMemo:function(e,t){var n=_e();t=t===void 0?null:t;var i=e();if(jr){Mi(!0);try{e()}finally{Mi(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=_e();if(n!==void 0){var r=n(t);if(jr){Mi(!0);try{n(t)}finally{Mi(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=JI.bind(null,W,e),[i.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:function(e){e=hd(e);var t=e.queue,n=g0.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fm,useDeferredValue:function(e,t){var n=_e();return Hm(n,e,t)},useTransition:function(){var e=hd(!1);return e=c0.bind(null,W,e.queue,!0,!1),_e().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=W,r=_e();if(ot){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),_t===null)throw Error(P(349));at&127||GT(i,t,n)}r.memoizedState=n;var s={value:n,getSnapshot:t};return r.queue=s,t_(QT.bind(null,i,s,e),[e]),i.flags|=2048,Xs(9,{destroy:void 0},KT.bind(null,i,s,n,t),null),n},useId:function(){var e=_e(),t=_t.identifierPrefix;if(ot){var n=bn,i=Sn;n=(i&~(1<<32-je(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=qu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=HI++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gm,useFormState:Jy,useActionState:Jy,useOptimistic:function(e){var t=_e();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Km.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:Bm,useCacheRefresh:function(){return _e().memoizedState=XI.bind(null,W)},useEffectEvent:function(e){var t=_e(),n={impl:e};return t.memoizedState=n,function(){if(ct&2)throw Error(P(440));return n.impl.apply(void 0,arguments)}}},Qm={readContext:oe,use:Pc,useCallback:o0,useContext:oe,useEffect:jm,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:uu,useRef:e0,useState:function(){return uu(ri)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Ut();return u0(n,pt.memoizedState,e,t)},useTransition:function(){var e=uu(ri)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:HT,useId:d0,useHostTransitionStatus:Gm,useFormState:Wy,useActionState:Wy,useOptimistic:function(e,t){var n=Ut();return XT(n,pt,e,t)},useMemoCache:Bm,useCacheRefresh:m0};Qm.useEffectEvent=n0;var v0={readContext:oe,use:Pc,useCallback:o0,useContext:oe,useEffect:jm,useImperativeHandle:a0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Zh,useRef:e0,useState:function(){return Zh(ri)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Ut();return pt===null?Hm(n,e,t):u0(n,pt.memoizedState,e,t)},useTransition:function(){var e=Zh(ri)[0],t=Ut().memoizedState;return[typeof e=="boolean"?e:el(e),t]},useSyncExternalStore:HT,useId:d0,useHostTransitionStatus:Gm,useFormState:Zy,useActionState:Zy,useOptimistic:function(e,t){var n=Ut();return pt!==null?XT(n,pt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Bm,useCacheRefresh:m0};v0.useEffectEvent=n0;function tf(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var md={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Fe(),r=zi(i);r.payload=t,n!=null&&(r.callback=n),t=Bi(e,r,i),t!==null&&(Ce(t,e,i),lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Fe(),r=zi(i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Bi(e,r,i),t!==null&&(Ce(t,e,i),lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),i=zi(n);i.tag=2,t!=null&&(i.callback=t),t=Bi(e,i,n),t!==null&&(Ce(t,e,n),lo(t,e,n))}};function e_(e,t,n,i,r,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,a):t.prototype&&t.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function n_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&md.enqueueReplaceState(t,t.state,null)}function Fr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Rt({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function E0(e){Vu(e)}function T0(e){console.error(e)}function A0(e){Vu(e)}function ju(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function i_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function gd(e,t,n){return n=zi(n),n.tag=3,n.payload={element:null},n.callback=function(){ju(e,t)},n}function S0(e){return e=zi(e),e.tag=3,e}function b0(e,t,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){i_(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){i_(t,n,i),typeof r!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var l=i.stack;this.componentDidCatch(i.value,{componentStack:l!==null?l:""})})}function WI(e,t,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ca(t,n,r,!0),n=Ke.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?Qu():n.alternate===null&&Vt===0&&(Vt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Uu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),ff(e,i,r)),!1;case 22:return n.flags|=65536,i===Uu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),ff(e,i,r)),!1}throw Error(P(435,n.tag))}return ff(e,i,r),Qu(),!1}if(ot)return t=Ke.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==nd&&(e=Error(P(422),{cause:i}),Co(tn(e,n)))):(i!==nd&&(t=Error(P(423),{cause:i}),Co(tn(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=tn(i,n),r=gd(e.stateNode,i,r),Wh(e,r),Vt!==4&&(Vt=2)),!1;var s=Error(P(520),{cause:i});if(s=tn(s,n),go===null?go=[s]:go.push(s),Vt!==4&&(Vt=2),t===null)return!0;i=tn(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=gd(n.stateNode,i,e),Wh(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(qi===null||!qi.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=S0(r),b0(r,e,n,i),Wh(n,r),!1}n=n.return}while(n!==null);return!1}var Ym=Error(P(461)),Ht=!1;function ne(e,t,n,i){t.child=e===null?xT(t,null,n,i):qr(t,e.child,n,i)}function r_(e,t,n,i,r){n=n.render;var s=t.ref;if("ref"in i){var a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}else a=i;return Br(t),i=Lm(e,t,n,a,s,r),l=Um(),e!==null&&!Ht?(xm(e,t,r),si(e,t,r)):(ot&&l&&Cm(t),t.flags|=1,ne(e,t,i,r),t.child)}function s_(e,t,n,i,r){if(e===null){var s=n.type;return typeof s=="function"&&!Rm(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,w0(e,t,s,i,r)):(e=ou(n.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!$m(e,r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(a,i)&&e.ref===t.ref)return si(e,t,r)}return t.flags|=1,e=Xn(s,i),e.ref=t.ref,e.return=t,t.child=e}function w0(e,t,n,i,r){if(e!==null){var s=e.memoizedProps;if(Io(s,i)&&e.ref===t.ref)if(Ht=!1,t.pendingProps=i=s,$m(e,r))e.flags&131072&&(Ht=!0);else return t.lanes=e.lanes,si(e,t,r)}return pd(e,t,n,i,r)}function I0(e,t,n,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return a_(e,t,s,n,i)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&lu(t,s!==null?s.cachePool:null),s!==null?Yy(t,s):ud(),qT(t);else return i=t.lanes=536870912,a_(e,t,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(lu(t,s.cachePool),Yy(t,s),Ri(),t.memoizedState=null):(e!==null&&lu(t,null),ud(),Ri());return ne(e,t,r,n),t.child}function $a(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function a_(e,t,n,i,r){var s=Nm();return s=s===null?null:{parent:jt._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&lu(t,null),ud(),qT(t),e!==null&&ca(e,t,i,!0),t.childLanes=r,null}function hu(e,t){return t=Fu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function o_(e,t,n){return qr(t,e.child,null,n),e=hu(t,t.pendingProps),e.flags|=2,ke(t),t.memoizedState=null,e}function ZI(e,t,n){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ot){if(i.mode==="hidden")return e=hu(t,i),t.lanes=536870912,$a(null,e);if(cd(t),(e=bt)?(e=_A(e,en),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi!==null?{id:Sn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=NT(e),n.return=t,t.child=n,se=t,bt=null)):e=null,e===null)throw Ji(t);return t.lanes=536870912,null}return hu(t,i)}var s=e.memoizedState;if(s!==null){var a=s.dehydrated;if(cd(t),r)if(t.flags&256)t.flags&=-257,t=o_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(P(558));else if(Ht||ca(e,t,n,!1),r=(n&e.childLanes)!==0,Ht||r){if(i=_t,i!==null&&(a=iT(i,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,ts(e,a),Ce(i,e,a),Ym;Qu(),t=o_(e,t,n)}else e=s.treeContext,bt=sn(a.nextSibling),se=t,ot=!0,xi=null,en=!1,e!==null&&VT(t,e),t=hu(t,i),t.flags|=4096;return t}return e=Xn(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fu(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(P(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pd(e,t,n,i,r){return Br(t),n=Lm(e,t,n,i,void 0,r),i=Um(),e!==null&&!Ht?(xm(e,t,r),si(e,t,r)):(ot&&i&&Cm(t),t.flags|=1,ne(e,t,n,r),t.child)}function l_(e,t,n,i,r,s){return Br(t),t.updateQueue=null,n=FT(t,i,n,r),jT(e),i=Um(),e!==null&&!Ht?(xm(e,t,s),si(e,t,s)):(ot&&i&&Cm(t),t.flags|=1,ne(e,t,n,s),t.child)}function u_(e,t,n,i,r){if(Br(t),t.stateNode===null){var s=Cs,a=n.contextType;typeof a=="object"&&a!==null&&(s=oe(a)),s=new n(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=md,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},Vm(t),a=n.contextType,s.context=typeof a=="object"&&a!==null?oe(a):Cs,s.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(tf(t,n,a,i),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&md.enqueueReplaceState(s,s.state,null),co(t,i,s,r),uo(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var l=t.memoizedProps,u=Fr(n,l);s.props=u;var c=s.context,d=n.contextType;a=Cs,typeof d=="object"&&d!==null&&(a=oe(d));var m=n.getDerivedStateFromProps;d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=t.pendingProps!==l,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||c!==a)&&n_(t,s,i,a),bi=!1;var g=t.memoizedState;s.state=g,co(t,i,s,r),uo(),c=t.memoizedState,l||g!==c||bi?(typeof m=="function"&&(tf(t,n,m,i),c=t.memoizedState),(u=bi||e_(t,n,u,i,g,c,a))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),s.props=i,s.state=c,s.context=a,i=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,od(e,t),a=t.memoizedProps,d=Fr(n,a),s.props=d,m=t.pendingProps,g=s.context,c=n.contextType,u=Cs,typeof c=="object"&&c!==null&&(u=oe(c)),l=n.getDerivedStateFromProps,(c=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==m||g!==u)&&n_(t,s,i,u),bi=!1,g=t.memoizedState,s.state=g,co(t,i,s,r),uo();var _=t.memoizedState;a!==m||g!==_||bi||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof l=="function"&&(tf(t,n,l,i),_=t.memoizedState),(d=bi||e_(t,n,d,i,g,_,u)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_),s.props=i,s.state=_,s.context=u,i=d):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,fu(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=qr(t,e.child,null,r),t.child=qr(t,null,n,r)):ne(e,t,n,r),t.memoizedState=s.state,e=t.child):e=si(e,t,r),e}function c_(e,t,n,i){return zr(),t.flags|=256,ne(e,t,n,i),t.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nf(e){return{baseLanes:e,cachePool:kT()}}function rf(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xe),e}function R0(e,t,n){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(Lt.current&2)!==0),a&&(r=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(ot){if(r?Ii(t):Ri(),(e=bt)?(e=_A(e,en),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Xi!==null?{id:Sn,overflow:bn}:null,retryLane:536870912,hydrationErrors:null},n=NT(e),n.return=t,t.child=n,se=t,bt=null)):e=null,e===null)throw Ji(t);return Od(e)?t.lanes=32:t.lanes=536870912,null}var l=i.children;return i=i.fallback,r?(Ri(),r=t.mode,l=Fu({mode:"hidden",children:l},r),i=Vr(i,r,n,null),l.return=t,i.return=t,l.sibling=i,t.child=l,i=t.child,i.memoizedState=nf(n),i.childLanes=rf(e,a,n),t.memoizedState=ef,$a(null,i)):(Ii(t),yd(t,l))}var u=e.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(s)t.flags&256?(Ii(t),t.flags&=-257,t=sf(e,t,n)):t.memoizedState!==null?(Ri(),t.child=e.child,t.flags|=128,t=null):(Ri(),l=i.fallback,r=t.mode,i=Fu({mode:"visible",children:i.children},r),l=Vr(l,r,n,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,qr(t,e.child,null,n),i=t.child,i.memoizedState=nf(n),i.childLanes=rf(e,a,n),t.memoizedState=ef,t=$a(null,i));else if(Ii(t),Od(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(P(419)),i.stack="",i.digest=a,Co({value:i,source:null,stack:null}),t=sf(e,t,n)}else if(Ht||ca(e,t,n,!1),a=(n&e.childLanes)!==0,Ht||a){if(a=_t,a!==null&&(i=iT(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,ts(e,i),Ce(a,e,i),Ym;Dd(l)||Qu(),t=sf(e,t,n)}else Dd(l)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,bt=sn(l.nextSibling),se=t,ot=!0,xi=null,en=!1,e!==null&&VT(t,e),t=yd(t,i.children),t.flags|=4096);return t}return r?(Ri(),l=i.fallback,r=t.mode,u=e.child,c=u.sibling,i=Xn(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,c!==null?l=Xn(c,l):(l=Vr(l,r,n,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,$a(null,i),i=t.child,l=e.child.memoizedState,l===null?l=nf(n):(r=l.cachePool,r!==null?(u=jt._currentValue,r=r.parent!==u?{parent:u,pool:u}:r):r=kT(),l={baseLanes:l.baseLanes|n,cachePool:r}),i.memoizedState=l,i.childLanes=rf(e,a,n),t.memoizedState=ef,$a(e.child,i)):(Ii(t),n=e.child,e=n.sibling,n=Xn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function yd(e,t){return t=Fu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Fu(e,t){return e=Le(22,e,null,t),e.lanes=0,e}function sf(e,t,n){return qr(t,e.child,null,n),e=yd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function h_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),rd(e.return,t,n)}function af(e,t,n,i,r,s){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r,a.treeForkCount=s)}function C0(e,t,n){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var a=Lt.current,l=(a&2)!==0;if(l?(a=a&1|2,t.flags|=128):a&=1,Tt(Lt,a),ne(e,t,i,n),i=ot?Ro:0,!l&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&h_(e,n,t);else if(e.tag===19)h_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&zu(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),af(t,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&zu(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}af(t,!0,n,null,s,i);break;case"together":af(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function si(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Zi|=t.lanes,!(n&t.childLanes))if(e!==null){if(ca(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $m(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function tR(e,t,n){switch(t.tag){case 3:Du(t,t.stateNode.containerInfo),wi(t,jt,e.memoizedState.cache),zr();break;case 27:case 5:Gf(t);break;case 4:Du(t,t.stateNode.containerInfo);break;case 10:wi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,cd(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ii(t),t.flags|=128,null):n&t.child.childLanes?R0(e,t,n):(Ii(t),e=si(e,t,n),e!==null?e.sibling:null);Ii(t);break;case 19:var r=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ca(e,t,n,!1),i=(n&t.childLanes)!==0),r){if(i)return C0(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Lt,Lt.current),i)break;return null;case 22:return t.lanes=0,I0(e,t,n,t.pendingProps);case 24:wi(t,jt,e.memoizedState.cache)}return si(e,t,n)}function D0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ht=!0;else{if(!$m(e,n)&&!(t.flags&128))return Ht=!1,tR(e,t,n);Ht=!!(e.flags&131072)}else Ht=!1,ot&&t.flags&1048576&&MT(t,Ro,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ir(t.elementType),t.type=e,typeof e=="function")Rm(e)?(i=Fr(e,i),t.tag=1,t=u_(null,t,e,i,n)):(t.tag=0,t=pd(null,t,e,i,n));else{if(e!=null){var r=e.$$typeof;if(r===dm){t.tag=11,t=r_(null,t,e,i,n);break t}else if(r===mm){t.tag=14,t=s_(null,t,e,i,n);break t}}throw t=Ff(e)||e,Error(P(306,t,""))}}return t;case 0:return pd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,r=Fr(i,t.pendingProps),u_(e,t,i,r,n);case 3:t:{if(Du(t,t.stateNode.containerInfo),e===null)throw Error(P(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,od(e,t),co(t,i,null,n);var a=t.memoizedState;if(i=a.cache,wi(t,jt,i),i!==s.cache&&sd(t,[jt],n,!0),uo(),i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=c_(e,t,i,n);break t}else if(i!==r){r=tn(Error(P(424)),t),Co(r),t=c_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=sn(e.firstChild),se=t,ot=!0,xi=null,en=!0,n=xT(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zr(),i===r){t=si(e,t,n);break t}ne(e,t,i,n)}t=t.child}return t;case 26:return fu(e,t),e===null?(n=N_(t.type,null,t.pendingProps,null))?t.memoizedState=n:ot||(n=t.type,e=t.pendingProps,i=Ju(Ui.current).createElement(n),i[re]=t,i[Oe]=e,le(i,n,e),te(i),t.stateNode=i):t.memoizedState=N_(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Gf(t),e===null&&ot&&(i=t.stateNode=vA(t.type,t.pendingProps,Ui.current),se=t,en=!0,r=bt,ur(t.type)?(Nd=r,bt=sn(i.firstChild)):bt=r),ne(e,t,t.pendingProps.children,n),fu(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ot&&((r=i=bt)&&(i=OR(i,t.type,t.pendingProps,en),i!==null?(t.stateNode=i,se=t,bt=sn(i.firstChild),en=!1,r=!0):r=!1),r||Ji(t)),Gf(t),r=t.type,s=t.pendingProps,a=e!==null?e.memoizedProps:null,i=s.children,Rd(r,s)?i=null:a!==null&&Rd(r,a)&&(t.flags|=32),t.memoizedState!==null&&(r=Lm(e,t,GI,null,null,n),Po._currentValue=r),fu(e,t),ne(e,t,i,n),t.child;case 6:return e===null&&ot&&((e=n=bt)&&(n=NR(n,t.pendingProps,en),n!==null?(t.stateNode=n,se=t,bt=null,e=!0):e=!1),e||Ji(t)),null;case 13:return R0(e,t,n);case 4:return Du(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=qr(t,null,i,n):ne(e,t,i,n),t.child;case 11:return r_(e,t,t.type,t.pendingProps,n);case 7:return ne(e,t,t.pendingProps,n),t.child;case 8:return ne(e,t,t.pendingProps.children,n),t.child;case 12:return ne(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,wi(t,t.type,i.value),ne(e,t,i.children,n),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,Br(t),r=oe(r),i=i(r),t.flags|=1,ne(e,t,i,n),t.child;case 14:return s_(e,t,t.type,t.pendingProps,n);case 15:return w0(e,t,t.type,t.pendingProps,n);case 19:return C0(e,t,n);case 31:return ZI(e,t,n);case 22:return I0(e,t,n,t.pendingProps);case 24:return Br(t),i=oe(jt),e===null?(r=Nm(),r===null&&(r=_t,s=Om(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),t.memoizedState={parent:i,cache:r},Vm(t),wi(t,jt,r)):(e.lanes&n&&(od(e,t),co(t,null,null,n),uo()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),wi(t,jt,i)):(i=s.cache,wi(t,jt,i),i!==r.cache&&sd(t,[jt],n,!0))),ne(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(P(156,t.tag))}function Un(e){e.flags|=4}function of(e,t,n,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Z0())e.flags|=8192;else throw kr=Uu,Mm}else e.flags&=-16777217}function f_(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!AA(t))if(Z0())e.flags|=8192;else throw kr=Uu,Mm}function jl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?tT():536870912,e.lanes|=t,Js|=t)}function ja(e,t){if(!ot)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function eR(e,t,n){var i=t.pendingProps;switch(Dm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return St(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Jn(jt),Gs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(cs(t)?Un(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Jh())),St(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(Un(t),s!==null?(St(t),f_(t,s)):(St(t),of(t,r,null,i,n))):s?s!==e.memoizedState?(Un(t),St(t),f_(t,s)):(St(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Un(t),St(t),of(t,r,e,i,n)),null;case 27:if(Ou(t),n=Ui.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(P(166));return St(t),null}e=In.current,cs(t)?qy(t):(e=vA(r,i,n),t.stateNode=e,Un(t))}return St(t),null;case 5:if(Ou(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(P(166));return St(t),null}if(s=In.current,cs(t))qy(t);else{var a=Ju(Ui.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?a.createElement(r,{is:i.is}):a.createElement(r)}}s[re]=t,s[Oe]=i;t:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=s;t:switch(le(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Un(t)}}return St(t),of(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(P(166));if(e=Ui.current,cs(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,r=se,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[re]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||gA(e.nodeValue,n)),e||Ji(t,!0)}else e=Ju(e).createTextNode(i),e[re]=t,t.stateNode=e}return St(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=cs(t),n!==null){if(e===null){if(!i)throw Error(P(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(557));e[re]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),e=!1}else n=Jh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ke(t),t):(ke(t),null);if(t.flags&128)throw Error(P(558))}return St(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=cs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(P(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[re]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),r=!1}else r=Jh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(ke(t),t):(ke(t),null)}return ke(t),t.flags&128?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),jl(t,t.updateQueue),St(t),null);case 4:return Gs(),e===null&&ng(t.stateNode.containerInfo),St(t),null;case 10:return Jn(t.type),St(t),null;case 19:if(ee(Lt),i=t.memoizedState,i===null)return St(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)ja(i,!1);else{if(Vt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=zu(e),s!==null){for(t.flags|=128,ja(i,!1),e=s.updateQueue,t.updateQueue=e,jl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)OT(n,e),n=n.sibling;return Tt(Lt,Lt.current&1|2),ot&&qn(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Be()>Gu&&(t.flags|=128,r=!0,ja(i,!1),t.lanes=4194304)}else{if(!r)if(e=zu(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,jl(t,e),ja(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ot)return St(t),null}else 2*Be()-i.renderingStartTime>Gu&&n!==536870912&&(t.flags|=128,r=!0,ja(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Be(),e.sibling=null,n=Lt.current,Tt(Lt,r?n&1|2:n&1),ot&&qn(t,i.treeForkCount),e):(St(t),null);case 22:case 23:return ke(t),Pm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?n&536870912&&!(t.flags&128)&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),n=t.updateQueue,n!==null&&jl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&ee(Pr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Jn(jt),St(t),null;case 25:return null;case 30:return null}throw Error(P(156,t.tag))}function nR(e,t){switch(Dm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Jn(jt),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ou(t),null;case 31:if(t.memoizedState!==null){if(ke(t),t.alternate===null)throw Error(P(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ke(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(Lt),null;case 4:return Gs(),null;case 10:return Jn(t.type),null;case 22:case 23:return ke(t),Pm(),e!==null&&ee(Pr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Jn(jt),null;case 25:return null;default:return null}}function O0(e,t){switch(Dm(t),t.tag){case 3:Jn(jt),Gs();break;case 26:case 27:case 5:Ou(t);break;case 4:Gs();break;case 31:t.memoizedState!==null&&ke(t);break;case 13:ke(t);break;case 19:ee(Lt);break;case 10:Jn(t.type);break;case 22:case 23:ke(t),Pm(),e!==null&&ee(Pr);break;case 24:Jn(jt)}}function nl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){i=void 0;var s=n.create,a=n.inst;i=s(),a.destroy=i}n=n.next}while(n!==r)}}catch(l){mt(t,t.return,l)}}function Wi(e,t,n){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var a=i.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,r=t;var u=n,c=l;try{c()}catch(d){mt(r,u,d)}}}i=i.next}while(i!==s)}}catch(d){mt(t,t.return,d)}}function N0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{BT(t,n)}catch(i){mt(e,e.return,i)}}}function M0(e,t,n){n.props=Fr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){mt(e,t,i)}}function fo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(r){mt(e,t,r)}}function wn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){mt(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){mt(e,t,r)}else n.current=null}function V0(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){mt(e,e.return,r)}}function lf(e,t,n){try{var i=e.stateNode;bR(i,e.type,n,t),i[Oe]=t}catch(r){mt(e,e.return,r)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gn));else if(i!==4&&(i===27&&ur(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(_d(e,t,n),e=e.sibling;e!==null;)_d(e,t,n),e=e.sibling}function Hu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ur(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Hu(e,t,n),e=e.sibling;e!==null;)Hu(e,t,n),e=e.sibling}function k0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);le(t,i,n),t[re]=e,t[Oe]=n}catch(s){mt(e,e.return,s)}}var jn=!1,qt=!1,cf=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function iR(e,t){if(e=e.containerInfo,wd=ec,e=AT(e),bm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break t}var a=0,l=-1,u=-1,c=0,d=0,m=e,g=null;e:for(;;){for(var _;m!==n||r!==0&&m.nodeType!==3||(l=a+r),m!==s||i!==0&&m.nodeType!==3||(u=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===e)break e;if(g===n&&++c===r&&(l=a),g===s&&++d===i&&(u=a),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Id={focusedElem:e,selectionRange:n},ec=!1,Zt=t;Zt!==null;)if(t=Zt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Zt=e;else for(;Zt!==null;){switch(t=Zt,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,n=t,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var D=Fr(n.type,r);e=i.getSnapshotBeforeUpdate(D,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){mt(n,n.return,M)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Cd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Cd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(P(163))}if(e=t.sibling,e!==null){e.return=t.return,Zt=e;break}Zt=t.return}}function L0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zn(e,n),i&4&&nl(5,n);break;case 1:if(zn(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){mt(n,n.return,a)}else{var r=Fr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){mt(n,n.return,a)}}i&64&&N0(n),i&512&&fo(n,n.return);break;case 3:if(zn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{BT(e,t)}catch(a){mt(n,n.return,a)}}break;case 27:t===null&&i&4&&k0(n);case 26:case 5:zn(e,n),t===null&&i&4&&V0(n),i&512&&fo(n,n.return);break;case 12:zn(e,n);break;case 31:zn(e,n),i&4&&z0(e,n);break;case 13:zn(e,n),i&4&&B0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=fR.bind(null,n),MR(e,n))));break;case 22:if(i=n.memoizedState!==null||jn,!i){t=t!==null&&t.memoizedState!==null||qt,r=jn;var s=qt;jn=i,(qt=t)&&!s?Bn(e,n,(n.subtreeFlags&8772)!==0):zn(e,n),jn=r,qt=s}break;case 30:break;default:zn(e,n)}}function U0(e){var t=e.alternate;t!==null&&(e.alternate=null,U0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_m(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ct=null,be=!1;function xn(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount($o,n)}catch{}switch(n.tag){case 26:qt||wn(n,t),xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:qt||wn(n,t);var i=Ct,r=be;ur(n.type)&&(Ct=n.stateNode,be=!1),xn(e,t,n),yo(n.stateNode),Ct=i,be=r;break;case 5:qt||wn(n,t);case 6:if(i=Ct,r=be,Ct=null,xn(e,t,n),Ct=i,be=r,Ct!==null)if(be)try{(Ct.nodeType===9?Ct.body:Ct.nodeName==="HTML"?Ct.ownerDocument.body:Ct).removeChild(n.stateNode)}catch(s){mt(n,t,s)}else try{Ct.removeChild(n.stateNode)}catch(s){mt(n,t,s)}break;case 18:Ct!==null&&(be?(e=Ct,I_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ea(e)):I_(Ct,n.stateNode));break;case 4:i=Ct,r=be,Ct=n.stateNode.containerInfo,be=!0,xn(e,t,n),Ct=i,be=r;break;case 0:case 11:case 14:case 15:Wi(2,n,t),qt||Wi(4,n,t),xn(e,t,n);break;case 1:qt||(wn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&M0(n,t,i)),xn(e,t,n);break;case 21:xn(e,t,n);break;case 22:qt=(i=qt)||n.memoizedState!==null,xn(e,t,n),qt=i;break;default:xn(e,t,n)}}function z0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ea(e)}catch(n){mt(t,t.return,n)}}}function B0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ea(e)}catch(n){mt(t,t.return,n)}}function rR(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new d_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new d_),t;default:throw Error(P(435,e.tag))}}function Fl(e,t){var n=rR(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var r=dR.bind(null,e,i);i.then(r,r)}})}function Ae(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=e,a=t,l=a;t:for(;l!==null;){switch(l.tag){case 27:if(ur(l.type)){Ct=l.stateNode,be=!1;break t}break;case 5:Ct=l.stateNode,be=!1;break t;case 3:case 4:Ct=l.stateNode.containerInfo,be=!0;break t}l=l.return}if(Ct===null)throw Error(P(160));x0(s,a,r),Ct=null,be=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)q0(t,e),t=t.sibling}var fn=null;function q0(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ae(t,e),Se(e),i&4&&(Wi(3,e,e.return),nl(3,e),Wi(5,e,e.return));break;case 1:Ae(t,e),Se(e),i&512&&(qt||n===null||wn(n,n.return)),i&64&&jn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=fn;if(Ae(t,e),Se(e),i&512&&(qt||n===null||wn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,r=r.ownerDocument||r;e:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Wo]||s[re]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),le(s,i,n),s[re]=e,te(s),i=s;break t;case"link":var a=V_("link","href",r).get(i+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(s=a[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break e}}s=r.createElement(i),le(s,i,n),r.head.appendChild(s);break;case"meta":if(a=V_("meta","content",r).get(i+(n.content||""))){for(l=0;l<a.length;l++)if(s=a[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break e}}s=r.createElement(i),le(s,i,n),r.head.appendChild(s);break;default:throw Error(P(468,i))}s[re]=e,te(s),i=s}e.stateNode=i}else P_(r,e.type,e.stateNode);else e.stateNode=M_(r,i,e.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?P_(r,e.type,e.stateNode):M_(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&lf(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ae(t,e),Se(e),i&512&&(qt||n===null||wn(n,n.return)),n!==null&&i&4&&lf(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ae(t,e),Se(e),i&512&&(qt||n===null||wn(n,n.return)),e.flags&32){r=e.stateNode;try{Qs(r,"")}catch(D){mt(e,e.return,D)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,lf(e,r,n!==null?n.memoizedProps:r)),i&1024&&(cf=!0);break;case 6:if(Ae(t,e),Se(e),i&4){if(e.stateNode===null)throw Error(P(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(D){mt(e,e.return,D)}}break;case 3:if(gu=null,r=fn,fn=Wu(t.containerInfo),Ae(t,e),fn=r,Se(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ea(t.containerInfo)}catch(D){mt(e,e.return,D)}cf&&(cf=!1,j0(e));break;case 4:i=fn,fn=Wu(e.stateNode.containerInfo),Ae(t,e),Se(e),fn=i;break;case 12:Ae(t,e),Se(e);break;case 31:Ae(t,e),Se(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fl(e,i)));break;case 13:Ae(t,e),Se(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Uc=Be()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fl(e,i)));break;case 22:r=e.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,c=jn,d=qt;if(jn=c||r,qt=d||u,Ae(t,e),qt=d,jn=c,Se(e),i&8192)t:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||u||jn||qt||Rr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){u=n=t;try{if(s=u.stateNode,r)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var m=u.memoizedProps.style,g=m!=null&&m.hasOwnProperty("display")?m.display:null;l.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){mt(u,u.return,D)}}}else if(t.tag===6){if(n===null){u=t;try{u.stateNode.nodeValue=r?"":u.memoizedProps}catch(D){mt(u,u.return,D)}}}else if(t.tag===18){if(n===null){u=t;try{var _=u.stateNode;r?R_(_,!0):R_(u.stateNode,!1)}catch(D){mt(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Fl(e,n))));break;case 19:Ae(t,e),Se(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Fl(e,i)));break;case 30:break;case 21:break;default:Ae(t,e),Se(e)}}function Se(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(P0(i)){n=i;break}i=i.return}if(n==null)throw Error(P(160));switch(n.tag){case 27:var r=n.stateNode,s=uf(e);Hu(e,s,r);break;case 5:var a=n.stateNode;n.flags&32&&(Qs(a,""),n.flags&=-33);var l=uf(e);Hu(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,c=uf(e);_d(e,c,u);break;default:throw Error(P(161))}}catch(d){mt(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;j0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)L0(e,t.alternate,t),t=t.sibling}function Rr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wi(4,t,t.return),Rr(t);break;case 1:wn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&M0(t,t.return,n),Rr(t);break;case 27:yo(t.stateNode);case 26:case 5:wn(t,t.return),Rr(t);break;case 22:t.memoizedState===null&&Rr(t);break;case 30:Rr(t);break;default:Rr(t)}e=e.sibling}}function Bn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,a=s.flags;switch(s.tag){case 0:case 11:case 15:Bn(r,s,n),nl(4,s);break;case 1:if(Bn(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(c){mt(i,i.return,c)}if(i=s,r=i.updateQueue,r!==null){var l=i.stateNode;try{var u=r.shared.hiddenCallbacks;if(u!==null)for(r.shared.hiddenCallbacks=null,r=0;r<u.length;r++)zT(u[r],l)}catch(c){mt(i,i.return,c)}}n&&a&64&&N0(s),fo(s,s.return);break;case 27:k0(s);case 26:case 5:Bn(r,s,n),n&&i===null&&a&4&&V0(s),fo(s,s.return);break;case 12:Bn(r,s,n);break;case 31:Bn(r,s,n),n&&a&4&&z0(r,s);break;case 13:Bn(r,s,n),n&&a&4&&B0(r,s);break;case 22:s.memoizedState===null&&Bn(r,s,n),fo(s,s.return);break;case 30:break;default:Bn(r,s,n)}t=t.sibling}}function Xm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&tl(n))}function Jm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function hn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)F0(e,t,n,i),t=t.sibling}function F0(e,t,n,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:hn(e,t,n,i),r&2048&&nl(9,t);break;case 1:hn(e,t,n,i);break;case 3:hn(e,t,n,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e)));break;case 12:if(r&2048){hn(e,t,n,i),e=t.stateNode;try{var s=t.memoizedProps,a=s.id,l=s.onPostCommit;typeof l=="function"&&l(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){mt(t,t.return,u)}}else hn(e,t,n,i);break;case 31:hn(e,t,n,i);break;case 13:hn(e,t,n,i);break;case 23:break;case 22:s=t.stateNode,a=t.alternate,t.memoizedState!==null?s._visibility&2?hn(e,t,n,i):mo(e,t):s._visibility&2?hn(e,t,n,i):(s._visibility|=2,ds(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Xm(a,t);break;case 24:hn(e,t,n,i),r&2048&&Jm(t.alternate,t);break;default:hn(e,t,n,i)}}function ds(e,t,n,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,a=t,l=n,u=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:ds(s,a,l,u,r),nl(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?ds(s,a,l,u,r):mo(s,a):(d._visibility|=2,ds(s,a,l,u,r)),r&&c&2048&&Xm(a.alternate,a);break;case 24:ds(s,a,l,u,r),r&&c&2048&&Jm(a.alternate,a);break;default:ds(s,a,l,u,r)}t=t.sibling}}function mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,r=i.flags;switch(i.tag){case 22:mo(n,i),r&2048&&Xm(i.alternate,i);break;case 24:mo(n,i),r&2048&&Jm(i.alternate,i);break;default:mo(n,i)}t=t.sibling}}var Xa=8192;function hs(e,t,n){if(e.subtreeFlags&Xa)for(e=e.child;e!==null;)H0(e,t,n),e=e.sibling}function H0(e,t,n){switch(e.tag){case 26:hs(e,t,n),e.flags&Xa&&e.memoizedState!==null&&HR(n,fn,e.memoizedState,e.memoizedProps);break;case 5:hs(e,t,n);break;case 3:case 4:var i=fn;fn=Wu(e.stateNode.containerInfo),hs(e,t,n),fn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xa,Xa=16777216,hs(e,t,n),Xa=i):hs(e,t,n));break;default:hs(e,t,n)}}function G0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fa(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Zt=i,Q0(i,e)}G0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)K0(e),e=e.sibling}function K0(e){switch(e.tag){case 0:case 11:case 15:Fa(e),e.flags&2048&&Wi(9,e,e.return);break;case 3:Fa(e);break;case 12:Fa(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,du(e)):Fa(e);break;default:Fa(e)}}function du(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Zt=i,Q0(i,e)}G0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wi(8,t,t.return),du(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,du(t));break;default:du(t)}e=e.sibling}}function Q0(e,t){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:Wi(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:tl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Zt=i;else t:for(n=e;Zt!==null;){i=Zt;var r=i.sibling,s=i.return;if(U0(i),i===n){Zt=null;break t}if(r!==null){r.return=s,Zt=r;break t}Zt=s}}}var sR={getCacheForType:function(e){var t=oe(jt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return oe(jt).controller.signal}},aR=typeof WeakMap=="function"?WeakMap:Map,ct=0,_t=null,nt=null,at=0,dt=0,Pe=null,Pi=!1,fa=!1,Wm=!1,ai=0,Vt=0,Zi=0,Lr=0,Zm=0,xe=0,Js=0,go=null,we=null,vd=!1,Uc=0,Y0=0,Gu=1/0,Ku=null,qi=null,Qt=0,ji=null,Ws=null,Wn=0,Ed=0,Td=null,$0=null,po=0,Ad=null;function Fe(){return ct&2&&at!==0?at&-at:K.T!==null?eg():rT()}function X0(){if(xe===0)if(!(at&536870912)||ot){var e=kl;kl<<=1,!(kl&3932160)&&(kl=262144),xe=e}else xe=536870912;return e=Ke.current,e!==null&&(e.flags|=32),xe}function Ce(e,t,n){(e===_t&&(dt===2||dt===9)||e.cancelPendingCommit!==null)&&(Zs(e,0),ki(e,at,xe,!1)),Jo(e,n),(!(ct&2)||e!==_t)&&(e===_t&&(!(ct&2)&&(Lr|=n),Vt===4&&ki(e,at,xe,!1)),kn(e))}function J0(e,t,n){if(ct&6)throw Error(P(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xo(e,t),r=i?uR(e,t):hf(e,t,!0),s=i;do{if(r===0){fa&&!i&&ki(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!oR(n)){r=hf(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var l=e;r=go;var u=l.current.memoizedState.isDehydrated;if(u&&(Zs(l,a).flags|=256),a=hf(l,a,!1),a!==2){if(Wm&&!u){l.errorRecoveryDisabledLanes|=s,Lr|=s,r=4;break t}s=we,we=r,s!==null&&(we===null?we=s:we.push.apply(we,s))}r=a}if(s=!1,r!==2)continue}}if(r===1){Zs(e,0),ki(e,t,0,!0);break}t:{switch(i=e,s=r,s){case 0:case 1:throw Error(P(345));case 4:if((t&4194048)!==t)break;case 6:ki(i,t,xe,!Pi);break t;case 2:we=null;break;case 3:case 5:break;default:throw Error(P(329))}if((t&62914560)===t&&(r=Uc+300-Be(),10<r)){if(ki(i,t,xe,!Pi),Ic(i,0,!0)!==0)break t;Wn=t,i.timeoutHandle=yA(m_.bind(null,i,n,we,Ku,vd,t,xe,Lr,Js,Pi,s,"Throttled",-0,0),r);break t}m_(i,n,we,Ku,vd,t,xe,Lr,Js,Pi,s,null,-0,0)}}break}while(!0);kn(e)}function m_(e,t,n,i,r,s,a,l,u,c,d,m,g,_){if(e.timeoutHandle=-1,m=t.subtreeFlags,m&8192||(m&16785408)===16785408){m={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},H0(t,s,m);var D=(s&62914560)===s?Uc-Be():(s&4194048)===s?Y0-Be():0;if(D=GR(m,D),D!==null){Wn=s,e.cancelPendingCommit=D(p_.bind(null,e,t,s,n,i,r,a,l,u,d,m,null,g,_)),ki(e,s,a,!c);return}}p_(e,t,s,n,i,r,a,l,u)}function oR(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ge(s(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ki(e,t,n,i){t&=~Zm,t&=~Lr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-je(r),a=1<<s;i[s]=-1,r&=~a}n!==0&&eT(e,n,t)}function xc(){return ct&6?!0:(il(0),!1)}function tg(){if(nt!==null){if(dt===0)var e=nt.return;else e=nt,Kn=es=null,zm(e),Ls=null,Do=0,e=nt;for(;e!==null;)O0(e.alternate,e),e=e.return;nt=null}}function Zs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,RR(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wn=0,tg(),_t=e,nt=n=Xn(e.current,null),at=t,dt=0,Pe=null,Pi=!1,fa=Xo(e,t),Wm=!1,Js=xe=Zm=Lr=Zi=Vt=0,we=go=null,vd=!1,t&8&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-je(i),s=1<<r;t|=e[r],i&=~s}return ai=t,Oc(),n}function W0(e,t){W=null,K.H=No,t===ha||t===Mc?(t=Ky(),dt=3):t===Mm?(t=Ky(),dt=4):dt=t===Ym?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pe=t,nt===null&&(Vt=1,ju(e,tn(t,e.current)))}function Z0(){var e=Ke.current;return e===null?!0:(at&4194048)===at?rn===null:(at&62914560)===at||at&536870912?e===rn:!1}function tA(){var e=K.H;return K.H=No,e===null?No:e}function eA(){var e=K.A;return K.A=sR,e}function Qu(){Vt=4,Pi||(at&4194048)!==at&&Ke.current!==null||(fa=!0),!(Zi&134217727)&&!(Lr&134217727)||_t===null||ki(_t,at,xe,!1)}function hf(e,t,n){var i=ct;ct|=2;var r=tA(),s=eA();(_t!==e||at!==t)&&(Ku=null,Zs(e,t)),t=!1;var a=Vt;t:do try{if(dt!==0&&nt!==null){var l=nt,u=Pe;switch(dt){case 8:tg(),a=6;break t;case 3:case 2:case 9:case 6:Ke.current===null&&(t=!0);var c=dt;if(dt=0,Pe=null,Ns(e,l,u,c),n&&fa){a=0;break t}break;default:c=dt,dt=0,Pe=null,Ns(e,l,u,c)}}lR(),a=Vt;break}catch(d){W0(e,d)}while(!0);return t&&e.shellSuspendCounter++,Kn=es=null,ct=i,K.H=r,K.A=s,nt===null&&(_t=null,at=0,Oc()),a}function lR(){for(;nt!==null;)nA(nt)}function uR(e,t){var n=ct;ct|=2;var i=tA(),r=eA();_t!==e||at!==t?(Ku=null,Gu=Be()+500,Zs(e,t)):fa=Xo(e,t);t:do try{if(dt!==0&&nt!==null){t=nt;var s=Pe;e:switch(dt){case 1:dt=0,Pe=null,Ns(e,t,s,1);break;case 2:case 9:if(Gy(s)){dt=0,Pe=null,g_(t);break}t=function(){dt!==2&&dt!==9||_t!==e||(dt=7),kn(e)},s.then(t,t);break t;case 3:dt=7;break t;case 4:dt=5;break t;case 7:Gy(s)?(dt=0,Pe=null,g_(t)):(dt=0,Pe=null,Ns(e,t,s,7));break;case 5:var a=null;switch(nt.tag){case 26:a=nt.memoizedState;case 5:case 27:var l=nt;if(a?AA(a):l.stateNode.complete){dt=0,Pe=null;var u=l.sibling;if(u!==null)nt=u;else{var c=l.return;c!==null?(nt=c,zc(c)):nt=null}break e}}dt=0,Pe=null,Ns(e,t,s,5);break;case 6:dt=0,Pe=null,Ns(e,t,s,6);break;case 8:tg(),Vt=6;break t;default:throw Error(P(462))}}cR();break}catch(d){W0(e,d)}while(!0);return Kn=es=null,K.H=i,K.A=r,ct=n,nt!==null?0:(_t=null,at=0,Oc(),Vt)}function cR(){for(;nt!==null&&!V1();)nA(nt)}function nA(e){var t=D0(e.alternate,e,ai);e.memoizedProps=e.pendingProps,t===null?zc(e):nt=t}function g_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=l_(n,t,t.pendingProps,t.type,void 0,at);break;case 11:t=l_(n,t,t.pendingProps,t.type.render,t.ref,at);break;case 5:zm(t);default:O0(n,t),t=nt=OT(t,ai),t=D0(n,t,ai)}e.memoizedProps=e.pendingProps,t===null?zc(e):nt=t}function Ns(e,t,n,i){Kn=es=null,zm(t),Ls=null,Do=0;var r=t.return;try{if(WI(e,r,t,n,at)){Vt=1,ju(e,tn(n,e.current)),nt=null;return}}catch(s){if(r!==null)throw nt=r,s;Vt=1,ju(e,tn(n,e.current)),nt=null;return}t.flags&32768?(ot||i===1?e=!0:fa||at&536870912?e=!1:(Pi=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ke.current,i!==null&&i.tag===13&&(i.flags|=16384))),iA(t,e)):zc(t)}function zc(e){var t=e;do{if(t.flags&32768){iA(t,Pi);return}e=t.return;var n=eR(t.alternate,t,ai);if(n!==null){nt=n;return}if(t=t.sibling,t!==null){nt=t;return}nt=t=e}while(t!==null);Vt===0&&(Vt=5)}function iA(e,t){do{var n=nR(e.alternate,e);if(n!==null){n.flags&=32767,nt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){nt=e;return}nt=e=n}while(e!==null);Vt=6,nt=null}function p_(e,t,n,i,r,s,a,l,u){e.cancelPendingCommit=null;do Bc();while(Qt!==0);if(ct&6)throw Error(P(327));if(t!==null){if(t===e.current)throw Error(P(177));if(s=t.lanes|t.childLanes,s|=wm,F1(e,n,s,a,l,u),e===_t&&(nt=_t=null,at=0),Ws=t,ji=e,Wn=n,Ed=s,Td=r,$0=i,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,mR(Nu,function(){return lA(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,t.subtreeFlags&13878||i){i=K.T,K.T=null,r=ht.p,ht.p=2,a=ct,ct|=4;try{iR(e,t,n)}finally{ct=a,ht.p=r,K.T=i}}Qt=1,rA(),sA(),aA()}}function rA(){if(Qt===1){Qt=0;var e=ji,t=Ws,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=K.T,K.T=null;var i=ht.p;ht.p=2;var r=ct;ct|=4;try{q0(t,e);var s=Id,a=AT(e.containerInfo),l=s.focusedElem,u=s.selectionRange;if(a!==l&&l&&l.ownerDocument&&TT(l.ownerDocument.documentElement,l)){if(u!==null&&bm(l)){var c=u.start,d=u.end;if(d===void 0&&(d=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(d,l.value.length);else{var m=l.ownerDocument||document,g=m&&m.defaultView||window;if(g.getSelection){var _=g.getSelection(),D=l.textContent.length,M=Math.min(u.start,D),L=u.end===void 0?M:Math.min(u.end,D);!_.extend&&M>L&&(a=L,L=M,M=a);var S=xy(l,M),T=xy(l,L);if(S&&T&&(_.rangeCount!==1||_.anchorNode!==S.node||_.anchorOffset!==S.offset||_.focusNode!==T.node||_.focusOffset!==T.offset)){var I=m.createRange();I.setStart(S.node,S.offset),_.removeAllRanges(),M>L?(_.addRange(I),_.extend(T.node,T.offset)):(I.setEnd(T.node,T.offset),_.addRange(I))}}}}for(m=[],_=l;_=_.parentNode;)_.nodeType===1&&m.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<m.length;l++){var N=m[l];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}ec=!!wd,Id=wd=null}finally{ct=r,ht.p=i,K.T=n}}e.current=t,Qt=2}}function sA(){if(Qt===2){Qt=0;var e=ji,t=Ws,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=K.T,K.T=null;var i=ht.p;ht.p=2;var r=ct;ct|=4;try{L0(e,t.alternate,t)}finally{ct=r,ht.p=i,K.T=n}}Qt=3}}function aA(){if(Qt===4||Qt===3){Qt=0,P1();var e=ji,t=Ws,n=Wn,i=$0;t.subtreeFlags&10256||t.flags&10256?Qt=5:(Qt=0,Ws=ji=null,oA(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(qi=null),ym(n),t=t.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot($o,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=K.T,r=ht.p,ht.p=2,K.T=null;try{for(var s=e.onRecoverableError,a=0;a<i.length;a++){var l=i[a];s(l.value,{componentStack:l.stack})}}finally{K.T=t,ht.p=r}}Wn&3&&Bc(),kn(e),r=e.pendingLanes,n&261930&&r&42?e===Ad?po++:(po=0,Ad=e):po=0,il(0)}}function oA(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function Bc(){return rA(),sA(),aA(),lA()}function lA(){if(Qt!==5)return!1;var e=ji,t=Ed;Ed=0;var n=ym(Wn),i=K.T,r=ht.p;try{ht.p=32>n?32:n,K.T=null,n=Td,Td=null;var s=ji,a=Wn;if(Qt=0,Ws=ji=null,Wn=0,ct&6)throw Error(P(331));var l=ct;if(ct|=4,K0(s.current),F0(s,s.current,a,n),ct=l,il(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot($o,s)}catch{}return!0}finally{ht.p=r,K.T=i,oA(e,t)}}function y_(e,t,n){t=tn(n,t),t=gd(e.stateNode,t,2),e=Bi(e,t,2),e!==null&&(Jo(e,2),kn(e))}function mt(e,t,n){if(e.tag===3)y_(e,e,n);else for(;t!==null;){if(t.tag===3){y_(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){e=tn(n,e),n=S0(2),i=Bi(t,n,2),i!==null&&(b0(n,i,t,e),Jo(i,2),kn(i));break}}t=t.return}}function ff(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new aR;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(n)||(Wm=!0,r.add(n),e=hR.bind(null,e,t,n),t.then(e,e))}function hR(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_t===e&&(at&n)===n&&(Vt===4||Vt===3&&(at&62914560)===at&&300>Be()-Uc?!(ct&2)&&Zs(e,0):Zm|=n,Js===at&&(Js=0)),kn(e)}function uA(e,t){t===0&&(t=tT()),e=ts(e,t),e!==null&&(Jo(e,t),kn(e))}function fR(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uA(e,n)}function dR(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(P(314))}i!==null&&i.delete(t),uA(e,n)}function mR(e,t){return gm(e,t)}var Yu=null,ms=null,Sd=!1,$u=!1,df=!1,Li=0;function kn(e){e!==ms&&e.next===null&&(ms===null?Yu=ms=e:ms=ms.next=e),$u=!0,Sd||(Sd=!0,pR())}function il(e,t){if(!df&&$u){df=!0;do for(var n=!1,i=Yu;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var a=i.suspendedLanes,l=i.pingedLanes;s=(1<<31-je(42|e)+1)-1,s&=r&~(a&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,__(i,s))}else s=at,s=Ic(i,i===_t?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Xo(i,s)||(n=!0,__(i,s));i=i.next}while(n);df=!1}}function gR(){cA()}function cA(){$u=Sd=!1;var e=0;Li!==0&&IR()&&(e=Li);for(var t=Be(),n=null,i=Yu;i!==null;){var r=i.next,s=hA(i,t);s===0?(i.next=null,n===null?Yu=r:n.next=r,r===null&&(ms=n)):(n=i,(e!==0||s&3)&&($u=!0)),i=r}Qt!==0&&Qt!==5||il(e),Li!==0&&(Li=0)}function hA(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var a=31-je(s),l=1<<a,u=r[a];u===-1?(!(l&n)||l&i)&&(r[a]=j1(l,t)):u<=t&&(e.expiredLanes|=l),s&=~l}if(t=_t,n=at,n=Ic(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(dt===2||dt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Bh(i),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Bh(i),ym(n)){case 2:case 8:n=WE;break;case 32:n=Nu;break;case 268435456:n=ZE;break;default:n=Nu}return i=fA.bind(null,e),n=gm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Bh(i),e.callbackPriority=2,e.callbackNode=null,2}function fA(e,t){if(Qt!==0&&Qt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bc()&&e.callbackNode!==n)return null;var i=at;return i=Ic(e,e===_t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(J0(e,i,t),hA(e,Be()),e.callbackNode!=null&&e.callbackNode===n?fA.bind(null,e):null)}function __(e,t){if(Bc())return null;J0(e,t,!0)}function pR(){CR(function(){ct&6?gm(JE,gR):cA()})}function eg(){if(Li===0){var e=Ys;e===0&&(e=Pl,Pl<<=1,!(Pl&261888)&&(Pl=256)),Li=e}return Li}function v_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ru(""+e)}function E_(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yR(e,t,n,i,r){if(t==="submit"&&n&&n.stateNode===r){var s=v_((r[Oe]||null).action),a=i.submitter;a&&(t=(t=a[Oe]||null)?v_(t.formAction):a.getAttribute("formAction"),t!==null&&(s=t,a=null));var l=new Rc("action","action",null,i,r);e.push({event:l,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Li!==0){var u=a?E_(r,a):new FormData(r);dd(n,{pending:!0,data:u,method:r.method,action:s},null,u)}}else typeof s=="function"&&(l.preventDefault(),u=a?E_(r,a):new FormData(r),dd(n,{pending:!0,data:u,method:r.method,action:s},s,u))},currentTarget:r}]})}}for(var mf=0;mf<ed.length;mf++){var gf=ed[mf],_R=gf.toLowerCase(),vR=gf[0].toUpperCase()+gf.slice(1);_n(_R,"on"+vR)}_n(bT,"onAnimationEnd");_n(wT,"onAnimationIteration");_n(IT,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(kI,"onTransitionRun");_n(LI,"onTransitionStart");_n(UI,"onTransitionCancel");_n(RT,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ER=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function dA(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],r=i.event;i=i.listeners;t:{var s=void 0;if(t)for(var a=i.length-1;0<=a;a--){var l=i[a],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&r.isPropagationStopped())break t;s=l,r.currentTarget=c;try{s(r)}catch(d){Vu(d)}r.currentTarget=null,s=u}else for(a=0;a<i.length;a++){if(l=i[a],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&r.isPropagationStopped())break t;s=l,r.currentTarget=c;try{s(r)}catch(d){Vu(d)}r.currentTarget=null,s=u}}}}function et(e,t){var n=t[Qf];n===void 0&&(n=t[Qf]=new Set);var i=e+"__bubble";n.has(i)||(mA(t,e,2,!1),n.add(i))}function pf(e,t,n){var i=0;t&&(i|=4),mA(n,e,i,t)}var Hl="_reactListening"+Math.random().toString(36).slice(2);function ng(e){if(!e[Hl]){e[Hl]=!0,sT.forEach(function(n){n!=="selectionchange"&&(ER.has(n)||pf(n,!1,e),pf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hl]||(t[Hl]=!0,pf("selectionchange",!1,t))}}function mA(e,t,n,i){switch(RA(t)){case 2:var r=YR;break;case 8:r=$R;break;default:r=ag}n=r.bind(null,t,n,e),r=void 0,!Wf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function yf(e,t,n,i,r){var s=i;if(!(t&1)&&!(t&2)&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===r)return;a=a.return}for(;l!==null;){if(a=As(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=s=a;continue t}l=l.parentNode}}i=i.return}dT(function(){var c=s,d=Em(n),m=[];t:{var g=CT.get(e);if(g!==void 0){var _=Rc,D=e;switch(e){case"keypress":if(au(n)===0)break t;case"keydown":case"keyup":_=dI;break;case"focusin":D="focus",_=Gh;break;case"focusout":D="blur",_=Gh;break;case"beforeblur":case"afterblur":_=Gh;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=eI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=pI;break;case bT:case wT:case IT:_=rI;break;case RT:_=_I;break;case"scroll":case"scrollend":_=Z1;break;case"wheel":_=EI;break;case"copy":case"cut":case"paste":_=aI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Oy;break;case"toggle":case"beforetoggle":_=AI}var M=(t&4)!==0,L=!M&&(e==="scroll"||e==="scrollend"),S=M?g!==null?g+"Capture":null:g;M=[];for(var T=c,I;T!==null;){var N=T;if(I=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||I===null||S===null||(N=bo(T,S),N!=null&&M.push(Vo(T,N,I))),L)break;T=T.return}0<M.length&&(g=new _(g,D,null,n,d),m.push({event:g,listeners:M}))}}if(!(t&7)){t:{if(g=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",g&&n!==Jf&&(D=n.relatedTarget||n.fromElement)&&(As(D)||D[la]))break t;if((_||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,_?(D=n.relatedTarget||n.toElement,_=c,D=D?As(D):null,D!==null&&(L=Yo(D),M=D.tag,D!==L||M!==5&&M!==27&&M!==6)&&(D=null)):(_=null,D=c),_!==D)){if(M=Cy,N="onMouseLeave",S="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(M=Oy,N="onPointerLeave",S="onPointerEnter",T="pointer"),L=_==null?g:Ya(_),I=D==null?g:Ya(D),g=new M(N,T+"leave",_,n,d),g.target=L,g.relatedTarget=I,N=null,As(d)===c&&(M=new M(S,T+"enter",D,n,d),M.target=I,M.relatedTarget=L,N=M),L=N,_&&D)e:{for(M=TR,S=_,T=D,I=0,N=S;N;N=M(N))I++;N=0;for(var x=T;x;x=M(x))N++;for(;0<I-N;)S=M(S),I--;for(;0<N-I;)T=M(T),N--;for(;I--;){if(S===T||T!==null&&S===T.alternate){M=S;break e}S=M(S),T=M(T)}M=null}else M=null;_!==null&&T_(m,g,_,M,!1),D!==null&&L!==null&&T_(m,L,D,M,!0)}}t:{if(g=c?Ya(c):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var j=Py;else if(Vy(g))if(vT)j=MI;else{j=OI;var v=DI}else _=g.nodeName,!_||_.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?c&&vm(c.elementType)&&(j=Py):j=NI;if(j&&(j=j(e,c))){_T(m,j,n,d);break t}v&&v(e,g,c),e==="focusout"&&c&&g.type==="number"&&c.memoizedProps.value!=null&&Xf(g,"number",g.value)}switch(v=c?Ya(c):window,e){case"focusin":(Vy(v)||v.contentEditable==="true")&&(ws=v,Zf=c,ao=null);break;case"focusout":ao=Zf=ws=null;break;case"mousedown":td=!0;break;case"contextmenu":case"mouseup":case"dragend":td=!1,zy(m,n,d);break;case"selectionchange":if(PI)break;case"keydown":case"keyup":zy(m,n,d)}var y;if(Sm)t:{switch(e){case"compositionstart":var E="onCompositionStart";break t;case"compositionend":E="onCompositionEnd";break t;case"compositionupdate":E="onCompositionUpdate";break t}E=void 0}else bs?pT(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(gT&&n.locale!=="ko"&&(bs||E!=="onCompositionStart"?E==="onCompositionEnd"&&bs&&(y=mT()):(Vi=d,Tm="value"in Vi?Vi.value:Vi.textContent,bs=!0)),v=Xu(c,E),0<v.length&&(E=new Dy(E,e,null,n,d),m.push({event:E,listeners:v}),y?E.data=y:(y=yT(n),y!==null&&(E.data=y)))),(y=bI?wI(e,n):II(e,n))&&(E=Xu(c,"onBeforeInput"),0<E.length&&(v=new Dy("onBeforeInput","beforeinput",null,n,d),m.push({event:v,listeners:E}),v.data=y)),yR(m,e,c,n,d)}dA(m,t)})}function Vo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xu(e,t){for(var n=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=bo(e,n),r!=null&&i.unshift(Vo(e,r,s)),r=bo(e,t),r!=null&&i.push(Vo(e,r,s))),e.tag===3)return i;e=e.return}return[]}function TR(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function T_(e,t,n,i,r){for(var s=t._reactName,a=[];n!==null&&n!==i;){var l=n,u=l.alternate,c=l.stateNode;if(l=l.tag,u!==null&&u===i)break;l!==5&&l!==26&&l!==27||c===null||(u=c,r?(c=bo(n,s),c!=null&&a.unshift(Vo(n,c,u))):r||(c=bo(n,s),c!=null&&a.push(Vo(n,c,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var AR=/\r\n?/g,SR=/\u0000|\uFFFD/g;function A_(e){return(typeof e=="string"?e:""+e).replace(AR,`
`).replace(SR,"")}function gA(e,t){return t=A_(t),A_(e)===t}function gt(e,t,n,i,r,s){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Qs(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Qs(e,""+i);break;case"className":Ul(e,"class",i);break;case"tabIndex":Ul(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Ul(e,n,i);break;case"style":fT(e,i,s);break;case"data":if(t!=="object"){Ul(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ru(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&gt(e,t,"name",r.name,r,null),gt(e,t,"formEncType",r.formEncType,r,null),gt(e,t,"formMethod",r.formMethod,r,null),gt(e,t,"formTarget",r.formTarget,r,null)):(gt(e,t,"encType",r.encType,r,null),gt(e,t,"method",r.method,r,null),gt(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ru(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Gn);break;case"onScroll":i!=null&&et("scroll",e);break;case"onScrollEnd":i!=null&&et("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(P(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(P(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ru(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":et("beforetoggle",e),et("toggle",e),iu(e,"popover",i);break;case"xlinkActuate":Ln(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ln(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ln(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ln(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ln(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ln(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ln(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":iu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=J1.get(n)||n,iu(e,n,i))}}function bd(e,t,n,i,r,s){switch(n){case"style":fT(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(P(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(P(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Qs(e,i):(typeof i=="number"||typeof i=="bigint")&&Qs(e,""+i);break;case"onScroll":i!=null&&et("scroll",e);break;case"onScrollEnd":i!=null&&et("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!aT.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),s=e[Oe]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,r);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):iu(e,n,i)}}}function le(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":et("error",e),et("load",e);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(P(137,t));default:gt(e,t,s,a,n,null)}}r&&gt(e,t,"srcSet",n.srcSet,n,null),i&&gt(e,t,"src",n.src,n,null);return;case"input":et("invalid",e);var l=s=a=r=null,u=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":r=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(P(137,t));break;default:gt(e,t,i,d,n,null)}}uT(e,s,l,u,c,a,r,!1);return;case"select":et("invalid",e),i=a=s=null;for(r in n)if(n.hasOwnProperty(r)&&(l=n[r],l!=null))switch(r){case"value":s=l;break;case"defaultValue":a=l;break;case"multiple":i=l;default:gt(e,t,r,l,n,null)}t=s,n=a,e.multiple=!!i,t!=null?Vs(e,!!i,t,!1):n!=null&&Vs(e,!!i,n,!0);return;case"textarea":et("invalid",e),s=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":i=l;break;case"defaultValue":r=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(P(91));break;default:gt(e,t,a,l,n,null)}hT(e,i,r,s);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:gt(e,t,u,i,n,null)}return;case"dialog":et("beforetoggle",e),et("toggle",e),et("cancel",e),et("close",e);break;case"iframe":case"object":et("load",e);break;case"video":case"audio":for(i=0;i<Mo.length;i++)et(Mo[i],e);break;case"image":et("error",e),et("load",e);break;case"details":et("toggle",e);break;case"embed":case"source":case"link":et("error",e),et("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(P(137,t));default:gt(e,t,c,i,n,null)}return;default:if(vm(t)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&bd(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(i=n[l],i!=null&&gt(e,t,l,i,n,null))}function bR(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,a=null,l=null,u=null,c=null,d=null;for(_ in n){var m=n[_];if(n.hasOwnProperty(_)&&m!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":u=m;default:i.hasOwnProperty(_)||gt(e,t,_,null,i,m)}}for(var g in i){var _=i[g];if(m=n[g],i.hasOwnProperty(g)&&(_!=null||m!=null))switch(g){case"type":s=_;break;case"name":r=_;break;case"checked":c=_;break;case"defaultChecked":d=_;break;case"value":a=_;break;case"defaultValue":l=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(P(137,t));break;default:_!==m&&gt(e,t,g,_,i,m)}}$f(e,a,l,u,c,d,s,r);return;case"select":_=a=l=g=null;for(s in n)if(u=n[s],n.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":_=u;default:i.hasOwnProperty(s)||gt(e,t,s,null,i,u)}for(r in i)if(s=i[r],u=n[r],i.hasOwnProperty(r)&&(s!=null||u!=null))switch(r){case"value":g=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:s!==u&&gt(e,t,r,s,i,u)}t=l,n=a,i=_,g!=null?Vs(e,!!n,g,!1):!!i!=!!n&&(t!=null?Vs(e,!!n,t,!0):Vs(e,!!n,n?[]:"",!1));return;case"textarea":_=g=null;for(l in n)if(r=n[l],n.hasOwnProperty(l)&&r!=null&&!i.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:gt(e,t,l,null,i,r)}for(a in i)if(r=i[a],s=n[a],i.hasOwnProperty(a)&&(r!=null||s!=null))switch(a){case"value":g=r;break;case"defaultValue":_=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(P(91));break;default:r!==s&&gt(e,t,a,r,i,s)}cT(e,g,_);return;case"option":for(var D in n)if(g=n[D],n.hasOwnProperty(D)&&g!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:gt(e,t,D,null,i,g)}for(u in i)if(g=i[u],_=n[u],i.hasOwnProperty(u)&&g!==_&&(g!=null||_!=null))switch(u){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:gt(e,t,u,g,i,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)g=n[M],n.hasOwnProperty(M)&&g!=null&&!i.hasOwnProperty(M)&&gt(e,t,M,null,i,g);for(c in i)if(g=i[c],_=n[c],i.hasOwnProperty(c)&&g!==_&&(g!=null||_!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(P(137,t));break;default:gt(e,t,c,g,i,_)}return;default:if(vm(t)){for(var L in n)g=n[L],n.hasOwnProperty(L)&&g!==void 0&&!i.hasOwnProperty(L)&&bd(e,t,L,void 0,i,g);for(d in i)g=i[d],_=n[d],!i.hasOwnProperty(d)||g===_||g===void 0&&_===void 0||bd(e,t,d,g,i,_);return}}for(var S in n)g=n[S],n.hasOwnProperty(S)&&g!=null&&!i.hasOwnProperty(S)&&gt(e,t,S,null,i,g);for(m in i)g=i[m],_=n[m],!i.hasOwnProperty(m)||g===_||g==null&&_==null||gt(e,t,m,g,i,_)}function S_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wR(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,a=r.initiatorType,l=r.duration;if(s&&l&&S_(a)){for(a=0,l=r.responseEnd,i+=1;i<n.length;i++){var u=n[i],c=u.startTime;if(c>l)break;var d=u.transferSize,m=u.initiatorType;d&&S_(m)&&(u=u.responseEnd,a+=d*(u<l?1:(l-c)/(u-c)))}if(--i,t+=8*(s+a)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wd=null,Id=null;function Ju(e){return e.nodeType===9?e:e.ownerDocument}function b_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pA(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _f=null;function IR(){var e=window.event;return e&&e.type==="popstate"?e===_f?!1:(_f=e,!0):(_f=null,!1)}var yA=typeof setTimeout=="function"?setTimeout:void 0,RR=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,CR=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(DR)}:yA;function DR(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function I_(e,t){var n=t,i=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(r),ea(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")yo(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yo(n);for(var s=n.firstChild;s;){var a=s.nextSibling,l=s.nodeName;s[Wo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&yo(e.ownerDocument.body);n=r}while(n);ea(t)}function R_(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Cd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Cd(n),_m(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function OR(e,t,n,i){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Wo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=sn(e.nextSibling),e===null)break}return null}function NR(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=sn(e.nextSibling),e===null))return null;return e}function _A(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=sn(e.nextSibling),e===null))return null;return e}function Dd(e){return e.data==="$?"||e.data==="$~"}function Od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function MR(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Nd=null;function C_(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return sn(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function D_(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vA(e,t,n){switch(t=Ju(n),e){case"html":if(e=t.documentElement,!e)throw Error(P(452));return e;case"head":if(e=t.head,!e)throw Error(P(453));return e;case"body":if(e=t.body,!e)throw Error(P(454));return e;default:throw Error(P(451))}}function yo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_m(e)}var ln=new Map,O_=new Set;function Wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fi=ht.d;ht.d={f:VR,r:PR,D:kR,C:LR,L:UR,m:xR,X:BR,S:zR,M:qR};function VR(){var e=fi.f(),t=xc();return e||t}function PR(e){var t=ua(e);t!==null&&t.tag===5&&t.type==="form"?f0(t):fi.r(e)}var da=typeof document>"u"?null:document;function EA(e,t,n){var i=da;if(i&&typeof t=="string"&&t){var r=Ze(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),O_.has(r)||(O_.add(r),e={rel:e,crossOrigin:n,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),le(t,"link",e),te(t),i.head.appendChild(t)))}}function kR(e){fi.D(e),EA("dns-prefetch",e,null)}function LR(e,t){fi.C(e,t),EA("preconnect",e,t)}function UR(e,t,n){fi.L(e,t,n);var i=da;if(i&&e&&t){var r='link[rel="preload"][as="'+Ze(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Ze(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Ze(n.imageSizes)+'"]')):r+='[href="'+Ze(e)+'"]';var s=r;switch(t){case"style":s=ta(e);break;case"script":s=ma(e)}ln.has(s)||(e=Rt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(rl(s))||t==="script"&&i.querySelector(sl(s))||(t=i.createElement("link"),le(t,"link",e),te(t),i.head.appendChild(t)))}}function xR(e,t){fi.m(e,t);var n=da;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ze(i)+'"][href="'+Ze(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ma(e)}if(!ln.has(s)&&(e=Rt({rel:"modulepreload",href:e},t),ln.set(s,e),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}i=n.createElement("link"),le(i,"link",e),te(i),n.head.appendChild(i)}}}function zR(e,t,n){fi.S(e,t,n);var i=da;if(i&&e){var r=Ms(i).hoistableStyles,s=ta(e);t=t||"default";var a=r.get(s);if(!a){var l={loading:0,preload:null};if(a=i.querySelector(rl(s)))l.loading=5;else{e=Rt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(s))&&ig(e,n);var u=a=i.createElement("link");te(u),le(u,"link",e),u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,mu(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:l},r.set(s,a)}}}function BR(e,t){fi.X(e,t);var n=da;if(n&&e){var i=Ms(n).hoistableScripts,r=ma(e),s=i.get(r);s||(s=n.querySelector(sl(r)),s||(e=Rt({src:e,async:!0},t),(t=ln.get(r))&&rg(e,t),s=n.createElement("script"),te(s),le(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function qR(e,t){fi.M(e,t);var n=da;if(n&&e){var i=Ms(n).hoistableScripts,r=ma(e),s=i.get(r);s||(s=n.querySelector(sl(r)),s||(e=Rt({src:e,async:!0,type:"module"},t),(t=ln.get(r))&&rg(e,t),s=n.createElement("script"),te(s),le(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function N_(e,t,n,i){var r=(r=Ui.current)?Wu(r):null;if(!r)throw Error(P(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ta(n.href),n=Ms(r).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ta(n.href);var s=Ms(r).hoistableStyles,a=s.get(e);if(a||(r=r.ownerDocument||r,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,a),(s=r.querySelector(rl(e)))&&!s._p&&(a.instance=s,a.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),s||jR(r,e,n,a.state))),t&&i===null)throw Error(P(528,""));return a}if(t&&i!==null)throw Error(P(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ma(n),n=Ms(r).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(P(444,e))}}function ta(e){return'href="'+Ze(e)+'"'}function rl(e){return'link[rel="stylesheet"]['+e+"]"}function TA(e){return Rt({},e,{"data-precedence":e.precedence,precedence:null})}function jR(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),le(t,"link",n),te(t),e.head.appendChild(t))}function ma(e){return'[src="'+Ze(e)+'"]'}function sl(e){return"script[async]"+e}function M_(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ze(n.href)+'"]');if(i)return t.instance=i,te(i),i;var r=Rt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),te(i),le(i,"style",r),mu(i,n.precedence,e),t.instance=i;case"stylesheet":r=ta(n.href);var s=e.querySelector(rl(r));if(s)return t.state.loading|=4,t.instance=s,te(s),s;i=TA(n),(r=ln.get(r))&&ig(i,r),s=(e.ownerDocument||e).createElement("link"),te(s);var a=s;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),le(s,"link",i),t.state.loading|=4,mu(s,n.precedence,e),t.instance=s;case"script":return s=ma(n.src),(r=e.querySelector(sl(s)))?(t.instance=r,te(r),r):(i=n,(r=ln.get(s))&&(i=Rt({},n),rg(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),te(r),le(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(P(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(i=t.instance,t.state.loading|=4,mu(i,n.precedence,e));return t.instance}function mu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,a=0;a<i.length;a++){var l=i[a];if(l.dataset.precedence===t)s=l;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ig(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function rg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gu=null;function V_(e,t,n){if(gu===null){var i=new Map,r=gu=new Map;r.set(n,i)}else r=gu,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var s=n[r];if(!(s[Wo]||s[re]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(t)||"";a=e+a;var l=i.get(a);l?l.push(s):i.set(a,[s])}}return i}function P_(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function FR(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function AA(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function HR(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var r=ta(i.href),s=t.querySelector(rl(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Zu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,te(s);return}s=t.ownerDocument||t,i=TA(i),(r=ln.get(r))&&ig(i,r),s=s.createElement("link"),te(s);var a=s;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),le(s,"link",i),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Zu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var vf=0;function GR(e,t){return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&vf===0&&(vf=62500*wR());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tc=null;function pu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tc=new Map,t.forEach(KR,e),tc=null,Zu.call(e))}function KR(e,t){if(!(t.state.loading&4)){var n=tc.get(e);if(n)var i=n.get(null);else{n=new Map,tc.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var a=r[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}r=t.instance,a=r.getAttribute("data-precedence"),s=n.get(a)||i,s===i&&n.set(null,r),n.set(a,r),this.count++,i=Zu.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Po={$$typeof:Hn,Provider:null,Consumer:null,_currentValue:Mr,_currentValue2:Mr,_threadCount:0};function QR(e,t,n,i,r,s,a,l,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qh(0),this.hiddenUpdates=qh(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function SA(e,t,n,i,r,s,a,l,u,c,d,m){return e=new QR(e,t,n,a,u,c,d,m,l),t=1,s===!0&&(t|=24),s=Le(3,null,null,t),e.current=s,s.stateNode=e,t=Om(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:t},Vm(s),e}function bA(e){return e?(e=Cs,e):Cs}function wA(e,t,n,i,r,s){r=bA(r),i.context===null?i.context=r:i.pendingContext=r,i=zi(t),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=Bi(e,i,t),n!==null&&(Ce(n,e,t),lo(n,e,t))}function k_(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function sg(e,t){k_(e,t),(e=e.alternate)&&k_(e,t)}function IA(e){if(e.tag===13||e.tag===31){var t=ts(e,67108864);t!==null&&Ce(t,e,67108864),sg(e,67108864)}}function L_(e){if(e.tag===13||e.tag===31){var t=Fe();t=pm(t);var n=ts(e,t);n!==null&&Ce(n,e,t),sg(e,t)}}var ec=!0;function YR(e,t,n,i){var r=K.T;K.T=null;var s=ht.p;try{ht.p=2,ag(e,t,n,i)}finally{ht.p=s,K.T=r}}function $R(e,t,n,i){var r=K.T;K.T=null;var s=ht.p;try{ht.p=8,ag(e,t,n,i)}finally{ht.p=s,K.T=r}}function ag(e,t,n,i){if(ec){var r=Md(i);if(r===null)yf(e,t,i,nc,n),U_(e,i);else if(JR(r,e,t,n,i))i.stopPropagation();else if(U_(e,i),t&4&&-1<XR.indexOf(e)){for(;r!==null;){var s=ua(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=wr(s.pendingLanes);if(a!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-je(a);l.entanglements[1]|=u,a&=~u}kn(s),!(ct&6)&&(Gu=Be()+500,il(0))}}break;case 31:case 13:l=ts(s,2),l!==null&&Ce(l,s,2),xc(),sg(s,2)}if(s=Md(i),s===null&&yf(e,t,i,nc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yf(e,t,i,null,n)}}function Md(e){return e=Em(e),og(e)}var nc=null;function og(e){if(nc=null,e=As(e),e!==null){var t=Yo(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=KE(t),e!==null)return e;e=null}else if(n===31){if(e=QE(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return nc=e,null}function RA(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k1()){case JE:return 2;case WE:return 8;case Nu:case L1:return 32;case ZE:return 268435456;default:return 32}default:return 32}}var Vd=!1,Fi=null,Hi=null,Gi=null,ko=new Map,Lo=new Map,Ci=[],XR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,t){switch(e){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(t.pointerId)}}function Ha(e,t,n,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=ua(t),t!==null&&IA(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function JR(e,t,n,i,r){switch(t){case"focusin":return Fi=Ha(Fi,e,t,n,i,r),!0;case"dragenter":return Hi=Ha(Hi,e,t,n,i,r),!0;case"mouseover":return Gi=Ha(Gi,e,t,n,i,r),!0;case"pointerover":var s=r.pointerId;return ko.set(s,Ha(ko.get(s)||null,e,t,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Lo.set(s,Ha(Lo.get(s)||null,e,t,n,i,r)),!0}return!1}function CA(e){var t=As(e.target);if(t!==null){var n=Yo(t);if(n!==null){if(t=n.tag,t===13){if(t=KE(n),t!==null){e.blockedOn=t,Ty(e.priority,function(){L_(n)});return}}else if(t===31){if(t=QE(n),t!==null){e.blockedOn=t,Ty(e.priority,function(){L_(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Md(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Jf=i,n.target.dispatchEvent(i),Jf=null}else return t=ua(n),t!==null&&IA(t),e.blockedOn=n,!1;t.shift()}return!0}function x_(e,t,n){yu(e)&&n.delete(t)}function WR(){Vd=!1,Fi!==null&&yu(Fi)&&(Fi=null),Hi!==null&&yu(Hi)&&(Hi=null),Gi!==null&&yu(Gi)&&(Gi=null),ko.forEach(x_),Lo.forEach(x_)}function Gl(e,t){e.blockedOn===t&&(e.blockedOn=null,Vd||(Vd=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,WR)))}var Kl=null;function z_(e){Kl!==e&&(Kl=e,$t.unstable_scheduleCallback($t.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(og(i||n)===null)continue;break}var s=ua(n);s!==null&&(e.splice(t,3),t-=3,dd(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function ea(e){function t(u){return Gl(u,e)}Fi!==null&&Gl(Fi,e),Hi!==null&&Gl(Hi,e),Gi!==null&&Gl(Gi,e),ko.forEach(t),Lo.forEach(t);for(var n=0;n<Ci.length;n++){var i=Ci[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ci.length&&(n=Ci[0],n.blockedOn===null);)CA(n),n.blockedOn===null&&Ci.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],a=r[Oe]||null;if(typeof s=="function")a||z_(n);else if(a){var l=null;if(s&&s.hasAttribute("formAction")){if(r=s,a=s[Oe]||null)l=a.formAction;else if(og(r)!==null)continue}else l=a.action;typeof l=="function"?n[i+1]=l:(n.splice(i,3),i-=3),z_(n)}}}function DA(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return r=a})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function lg(e){this._internalRoot=e}qc.prototype.render=lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));var n=t.current,i=Fe();wA(n,i,e,t,null,null)};qc.prototype.unmount=lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wA(e.current,2,null,e,null,null),xc(),t[la]=null}};function qc(e){this._internalRoot=e}qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=rT();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ci.length&&t!==0&&t<Ci[n].priority;n++);Ci.splice(n,0,e),n===0&&CA(e)}};var B_=HE.version;if(B_!=="19.2.6")throw Error(P(527,B_,"19.2.6"));ht.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=C1(t),e=e!==null?YE(e):null,e=e===null?null:e.stateNode,e};var ZR={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{$o=Ql.inject(ZR),qe=Ql}catch{}}bc.createRoot=function(e,t){if(!GE(e))throw Error(P(299));var n=!1,i="",r=E0,s=T0,a=A0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=SA(e,1,!1,null,null,n,i,null,r,s,a,DA),e[la]=t.current,ng(e),new lg(t)};bc.hydrateRoot=function(e,t,n){if(!GE(e))throw Error(P(299));var i=!1,r="",s=E0,a=T0,l=A0,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),t=SA(e,1,!0,t,n??null,i,r,u,s,a,l,DA),t.context=bA(null),n=t.current,i=Fe(),i=pm(i),r=zi(i),r.callback=null,Bi(n,r,i),n=i,t.current.lanes=n,Jo(t,n),kn(t),e[la]=t.current,ng(e),new qc(t)};bc.version="19.2.6";function OA(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OA)}catch(e){console.error(e)}}OA(),xE.exports=bc;var JP=xE.exports;const tC={tagline:"Your Local Cash & Carry",phone:"09054127011",whatsapp:"919054127011",email:"support@hrsupermarket.in",address:"Shop No 1, By Pass Road, near Ganpati Fatsar, Arjun Society, Rajkot, Surendranagar, Gujarat 363030",city:"Surendranagar, Gujarat",lat:22.7271,lng:71.6486},q_=[{id:"grains-flours",name:"Grains & Flours",emoji:"🌾",image:"https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=900&q=80",items:["Aashirvaad Atta","Fortune Chakki Fresh Atta","Multigrain Flour","Maida","Sooji Rava","Besan","Brown Rice","Basmati Rice","Poha","Jowar Flour"]},{id:"pulses-lentils",name:"Pulses & Lentils",emoji:"🫘",image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",items:["Toor Dal","Moong Dal","Masoor Dal","Urad Dal","Chana Dal","Rajma","Kabuli Chana","Moth Beans","Green Gram","Kala Chana"]},{id:"spices-masalas",name:"Spices & Masalas",emoji:"🌶️",image:"https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80",items:["Turmeric Powder","Red Chilli Powder","Coriander Powder","Cumin Seeds","Garam Masala","Kitchen King Masala","Pav Bhaji Masala","Sambar Powder","Mustard Seeds","Black Pepper"]},{id:"oils-ghee",name:"Oils & Ghee",emoji:"🫗",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",items:["Fortune Sunflower Oil","Groundnut Oil","Mustard Oil","Olive Oil","Cow Ghee","Buffalo Ghee","Rice Bran Oil","Soyabean Oil","Sesame Oil","Vanaspati"]},{id:"dairy-eggs",name:"Dairy & Eggs",emoji:"🥛",image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",items:["Amul Gold Milk","Fresh Curd","Paneer","Butter","Cheese Cubes","Eggs","Buttermilk","Whipping Cream","Flavoured Milk","Greek Yogurt"]},{id:"snacks-namkeen",name:"Snacks & Namkeen",emoji:"🍘",image:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",items:["Lay's Magic Masala","Haldiram Bhujia","Kurkure Masala Munch","Parle-G","Khakhra","Moong Dal Namkeen","Sev","Chivda","Mathri","Masala Peanuts"]},{id:"beverages",name:"Beverages",emoji:"🥤",image:"https://images.unsplash.com/photo-1543253539-89f1b0d59b0c?auto=format&fit=crop&w=900&q=80",items:["Coca-Cola","Pepsi","Sprite","Frooti","Mango Juice","Orange Juice","Mineral Water","Cold Coffee","Tender Coconut Water","Energy Drink"]},{id:"tea-coffee",name:"Tea & Coffee",emoji:"☕",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",items:["Tata Tea Gold","Brooke Bond Red Label","Society Tea","Green Tea","Instant Coffee","Filter Coffee","Masala Tea","Elaichi Tea","Coffee Sachets","Sugar Free Sweetener"]},{id:"fresh-fruits",name:"Fresh Fruits",emoji:"🍎",image:"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",items:["Apples","Bananas","Oranges","Pomegranates","Papaya","Mangoes","Grapes","Watermelon","Guava","Pineapple"]},{id:"fresh-vegetables",name:"Fresh Vegetables",emoji:"🥬",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",items:["Potato","Onion","Tomato","Cauliflower","Cabbage","Green Chilli","Coriander","Brinjal","Okra","Bottle Gourd"]},{id:"packaged-foods",name:"Packaged Foods",emoji:"🍜",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",items:["Maggi Noodles","Pasta","Macaroni","Ready Poha Mix","Soup Packets","Cornflakes","Oats","Peanut Butter","Jam","Instant Upma Mix"]},{id:"cleaning-home",name:"Cleaning & Home",emoji:"🧼",image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",items:["Surf Excel","Ariel Detergent","Dishwash Liquid","Floor Cleaner","Toilet Cleaner","Garbage Bags","Scrub Pads","Mop Refill","Glass Cleaner","Room Freshener"]},{id:"personal-care",name:"Personal Care",emoji:"🧴",image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",items:["Bath Soap","Shampoo","Hair Oil","Face Wash","Toothpaste","Toothbrush","Body Lotion","Talcum Powder","Hand Wash","Shaving Cream"]},{id:"sweets-dry-fruits",name:"Sweets & Dry Fruits",emoji:"🥜",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80",items:["Kaju","Badam","Pista","Raisins","Dates","Soan Papdi","Besan Ladoo","Kaju Katli","Dry Fruit Mix","Anjeer"]}];function eC(e){var t;return((t=q_.find(n=>n.name===e))==null?void 0:t.image)||q_[0].image}const nC=[["Aashirvaad Atta","Grains & Flours","5kg",285,320,4.7,148,"Bestseller","🌾"],["Fortune Basmati Rice","Grains & Flours","5kg",449,520,4.6,97,"Popular","🍚"],["Toor Dal","Pulses & Lentils","1kg",158,185,4.5,88,"Daily Saver","🫘"],["Kabuli Chana","Pulses & Lentils","1kg",132,155,4.4,64,"Popular","🫘"],["Turmeric Powder","Spices & Masalas","500g",112,135,4.8,120,"Kitchen Pick","🌶️"],["Garam Masala","Spices & Masalas","200g",86,110,4.6,53,"Bestseller","🧂"],["Fortune Sunflower Oil","Oils & Ghee","1L",168,189,4.5,140,"Popular","🫗"],["Cow Ghee","Oils & Ghee","1L",615,690,4.7,76,"Premium","🧈"],["Amul Gold Milk","Dairy & Eggs","1L",68,72,4.8,202,"Fresh","🥛"],["Farm Eggs","Dairy & Eggs","12 pcs",84,96,4.4,91,"Daily Fresh","🥚"],["Haldiram Bhujia","Snacks & Namkeen","400g",94,115,4.7,112,"Bestseller","🍘"],["Lay's Magic Masala","Snacks & Namkeen","Large Pack",45,50,4.3,131,"Popular","🥔"],["Coca-Cola","Beverages","2L",95,110,4.5,88,"Party Pack","🥤"],["Mango Juice","Beverages","1L",110,125,4.4,67,"Summer Pick","🥭"],["Tata Tea Gold","Tea & Coffee","1kg",565,630,4.8,119,"Popular","☕"],["Instant Coffee","Tea & Coffee","100g",155,180,4.5,58,"Hot Pick","☕"],["Apples","Fresh Fruits","1kg",145,170,4.3,39,"Fresh","🍎"],["Bananas","Fresh Fruits","12 pcs",60,70,4.6,63,"Fresh","🍌"],["Potato","Fresh Vegetables","1kg",30,36,4.4,77,"Fresh","🥔"],["Tomato","Fresh Vegetables","1kg",32,40,4.2,52,"Daily Fresh","🍅"],["Maggi Noodles","Packaged Foods","4 pack",56,68,4.7,156,"Bestseller","🍜"],["Cornflakes","Packaged Foods","750g",185,215,4.3,42,"Breakfast Pick","🥣"],["Surf Excel","Cleaning & Home","1kg",225,260,4.6,71,"Popular","🧼"],["Floor Cleaner","Cleaning & Home","2L",188,220,4.4,36,"Home Care","🪣"],["Bath Soap Value Pack","Personal Care","5 pcs",120,145,4.5,55,"Value Pack","🧼"],["Toothpaste Family Pack","Personal Care","300g",135,160,4.4,49,"Popular","🪥"],["Kaju","Sweets & Dry Fruits","500g",495,560,4.8,81,"Premium","🥜"],["Soan Papdi","Sweets & Dry Fruits","500g",160,190,4.2,29,"Festive","🍬"]],WP=[{id:"banner-1",title:"Weekend Grocery Rush",subtitle:"Fresh staples, namkeen, and dairy picks packed for the family.",cta:"Shop now",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #1e9b6d, #104f4f)"},{id:"banner-2",title:"Tea Time Specials",subtitle:"Biscuits, tea, coffee, and evening snack combos with local savings.",cta:"View offers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #e8843f, #b64c36)"},{id:"banner-3",title:"Fresh Fruits & Veggies",subtitle:"Everyday freshness for Surendranagar households with quick pickup.",cta:"Order produce",image:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #74a84a, #285943)"},{id:"banner-4",title:"Dry Fruit Gifting Picks",subtitle:"Premium sweets, dry fruits, and festive family favorites in one cart.",cta:"See gifting range",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #5e3f99, #aa5b86)"}],ZP=[{id:"coupon-1",code:"HRWELCOME",title:"Welcome savings",discount:"₹50 off above ₹999"},{id:"coupon-2",code:"SNACK25",title:"Snack combo offer",discount:"₹25 off on snacks"},{id:"coupon-3",code:"FRESH10",title:"Fresh basket bonus",discount:"10% off on fruits & vegetables"}],tk=[{id:"DEMO-101",status:"Delivered",total:845,createdAt:"2026-05-14T10:30:00.000Z",items:[{title:"Aashirvaad Atta",quantity:1},{title:"Amul Gold Milk",quantity:2},{title:"Tomato",quantity:1}]},{id:"DEMO-102",status:"Out for delivery",total:610,createdAt:"2026-05-20T17:45:00.000Z",items:[{title:"Haldiram Bhujia",quantity:1},{title:"Tata Tea Gold",quantity:1},{title:"Coca-Cola",quantity:1}]},{id:"DEMO-103",status:"Ready for pickup",total:330,createdAt:"2026-05-22T12:15:00.000Z",items:[{title:"Potato",quantity:2},{title:"Toor Dal",quantity:1},{title:"Bath Soap Value Pack",quantity:1}]}],ek={name:"Divyraj Customer",email:"customer@example.com",phone:"+91 98765 43210",address:"By Pass Road, Surendranagar, Gujarat"},nk={orderUpdates:!0,offers:!0,preorderAlerts:!0,newArrivals:!1,walletCredits:!0},ik={balance:480,transactions:[{id:"txn-1",label:"Wallet top-up",amount:500,type:"credit"},{id:"txn-2",label:"Order adjustment",amount:20,type:"debit"}]},rk=nC.map(([e,t,n,i,r,s,a,l,u],c)=>({id:`prod-${c+1}`,name:e,category:t,size:n,price:i,mrp:r,rating:s,reviews:a,badge:l,emoji:u,image:eC(t),discount:Math.round((r-i)/r*100),stock:c%4===0?"Fresh stock":c%3===0?"Fast moving":"Ready to dispatch",description:`${e} in ${n} with quick local availability for homes across Surendranagar.`})),sk={banners:"hr-react-banners",cart:"hr-react-cart",notifications:"hr-react-notifications",orders:"hr-react-demo-orders",pinAdmin:"hr-react-admin-pin-ok",pinDivyraj:"hr-react-divyraj-pin-ok",products:"hr-react-products",profile:"hr-react-profile",recentlyViewed:"hr-react-recently-viewed",settings:"hr-react-settings",wallet:"hr-react-wallet",wishlist:"hr-react-wishlist"};function iC(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function rC(e,t){localStorage.setItem(e,JSON.stringify(t))}function j_(e){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(e||0)}function ak(e){return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(e))}function ok(e,t,n,i){const r=c=>c*Math.PI/180,s=r(n-e),a=r(i-t),l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(r(e))*Math.cos(r(n))*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function lk(e,t){return Number.isFinite(e)?t?e<=2?20:e<=4?30:e<=6?45:60:0:20}function uk(e){return Number.isFinite(e)?`${e.toFixed(1)} km from ${tC.city}`:"Location not detected yet"}function ck(e,t){const n=[],i=new Date;let r=t,s=e;for(;r<i.getFullYear()||r===i.getFullYear()&&s<=i.getMonth()+1;){const a=new Date(r,s-1,1);n.push({id:`${r}-${String(s).padStart(2,"0")}`,month:s,year:r,label:a.toLocaleString("en-IN",{month:"long",year:"numeric"})}),s+=1,s===13&&(s=1,r+=1)}return n}function sC(e){return String(e||"HR").split(" ").filter(Boolean).slice(0,2).map(t=>{var n;return((n=t[0])==null?void 0:n.toUpperCase())||""}).join("")}const ut={bg:"#f4f6f1",card:"#ffffff",text:"#10231a",subtext:"#5f6f65",line:"#dbe5dd",accent:"#157347",accentSoft:"#dff5e9",danger:"#d24747"};function NA({compact:e=!1}){return Q.jsx("div",{style:{width:e?40:54,height:e?40:54,borderRadius:16,background:"linear-gradient(135deg, #157347, #0f5132)",color:"#fff",display:"grid",placeItems:"center",fontWeight:800,letterSpacing:"0.08em",boxShadow:"0 12px 24px rgba(21, 115, 71, 0.22)"},children:"HR"})}function hk({compact:e=!1,tagline:t}){return Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:e?10:14},children:[Q.jsx(NA,{compact:e}),Q.jsxs("div",{children:[Q.jsx("div",{style:{fontWeight:800,fontSize:e?15:18},children:"HR Supermarket"}),Q.jsx("div",{style:{fontSize:e?11:13,color:ut.subtext},children:t})]})]})}function MA({children:e,style:t={}}){return Q.jsx("div",{style:{background:ut.card,border:`1px solid ${ut.line}`,borderRadius:24,boxShadow:"0 18px 40px rgba(16, 35, 26, 0.08)",...t},children:e})}function aC({children:e,onClick:t,kind:n="primary",style:i={},disabled:r=!1,type:s="button"}){const a=n==="primary"?{bg:ut.accent,color:"#fff",border:"transparent"}:n==="soft"?{bg:ut.accentSoft,color:ut.accent,border:ut.accentSoft}:n==="ghost"?{bg:"transparent",color:ut.text,border:ut.line}:n==="danger"?{bg:"#fff4f4",color:ut.danger,border:"#ffd1d1"}:{bg:"#fff",color:ut.text,border:ut.line};return Q.jsx("button",{type:s,disabled:r,onClick:t,style:{borderRadius:999,padding:"12px 18px",border:`1px solid ${a.border}`,background:a.bg,color:a.color,cursor:r?"not-allowed":"pointer",fontWeight:700,opacity:r?.6:1,...i},children:e})}function fk({value:e,onChange:t,placeholder:n,style:i={}}){return Q.jsx("input",{value:e,onChange:r=>t(r.target.value),placeholder:n,style:{width:"100%",borderRadius:18,border:`1px solid ${ut.line}`,padding:"14px 16px",outline:"none",fontSize:15,...i}})}function dk({children:e,tone:t="default",style:n={}}){const i=t==="green"?{bg:"#e5f8ec",color:"#0d683f"}:t==="orange"?{bg:"#fff1de",color:"#a25b10"}:t==="dark"?{bg:"#10231a",color:"#fff"}:{bg:"#f2f4f3",color:ut.subtext};return Q.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,padding:"7px 10px",background:i.bg,color:i.color,fontSize:12,fontWeight:700,...n},children:e})}function mk({open:e,children:t,onClose:n,width:i=420,mobileFull:r=!1}){return Q.jsxs(Q.Fragment,{children:[Q.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:e?"rgba(15, 23, 32, 0.45)":"transparent",pointerEvents:e?"auto":"none",transition:"background 180ms ease",zIndex:50}}),Q.jsx("div",{style:{position:"fixed",top:0,right:0,height:"100vh",width:r?"min(100vw, 100%)":`min(${i}px, 100vw)`,background:ut.card,transform:e?"translateX(0)":"translateX(100%)",transition:"transform 240ms ease",zIndex:51,overflowY:"auto",boxShadow:"-20px 0 40px rgba(15, 23, 32, 0.18)"},children:t})]})}function gk({open:e,children:t,onClose:n}){return e?Q.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:"rgba(15, 23, 32, 0.45)",display:"grid",placeItems:"center",padding:20,zIndex:60},children:Q.jsx("div",{onClick:i=>i.stopPropagation(),style:{width:"min(760px, 100%)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:28,boxShadow:"0 28px 60px rgba(15, 23, 32, 0.2)"},children:t})}):null}function pk({message:e}){return e?Q.jsx("div",{style:{position:"fixed",right:18,bottom:18,zIndex:80,background:"#10231a",color:"#fff",borderRadius:18,padding:"14px 18px",boxShadow:"0 18px 30px rgba(16, 35, 26, 0.24)"},children:e}):null}function yk({label:e,value:t,subtext:n,dark:i=!1}){return Q.jsxs(MA,{style:{padding:20,background:i?"#132231":"#fff",color:i?"#fff":ut.text},children:[Q.jsx("div",{style:{fontSize:13,color:i?"#93a4b6":ut.subtext},children:e}),Q.jsx("div",{style:{fontSize:30,fontWeight:800,marginTop:10},children:t}),n?Q.jsx("div",{style:{marginTop:10,fontSize:13,color:i?"#93a4b6":ut.subtext},children:n}):null]})}function _k({title:e,subtitle:t,onSubmit:n,pin:i,setPin:r,error:s,dark:a=!1}){return Q.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:a?"#071018":ut.bg,padding:20},children:Q.jsxs(MA,{style:{width:"min(420px, 100%)",padding:28,background:a?"#101b27":"#fff",color:a?"#fff":ut.text},children:[Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[Q.jsx(NA,{}),Q.jsxs("div",{children:[Q.jsx("div",{style:{fontWeight:800,fontSize:20},children:e}),Q.jsx("div",{style:{color:a?"#8ea3b8":ut.subtext,fontSize:14},children:t})]})]}),Q.jsxs("form",{onSubmit:l=>{l.preventDefault(),n()},style:{display:"grid",gap:14},children:[Q.jsx("input",{value:i,onChange:l=>r(l.target.value),placeholder:"Enter PIN",type:"password",style:{width:"100%",borderRadius:16,border:`1px solid ${a?"#233243":ut.line}`,padding:"14px 16px",outline:"none",background:a?"#0b141d":"#fff",color:a?"#fff":ut.text}}),s?Q.jsx("div",{style:{color:"#ff7676",fontSize:13},children:s}):null,Q.jsx(aC,{type:"submit",style:{width:"100%"},children:"Unlock"})]})]})})}function vk({kicker:e,title:t,action:n}){return Q.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:16,marginBottom:18,flexWrap:"wrap"},children:[Q.jsxs("div",{children:[Q.jsx("div",{style:{fontSize:12,textTransform:"uppercase",color:ut.accent,fontWeight:800},children:e}),Q.jsx("div",{style:{fontSize:28,fontWeight:800,marginTop:6},children:t})]}),n]})}function Ek({items:e,active:t,onChange:n}){return Q.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,zIndex:45,background:"#fff",borderTop:`1px solid ${ut.line}`,display:"grid",gridTemplateColumns:`repeat(${e.length}, 1fr)`},children:e.map(i=>Q.jsxs("button",{onClick:()=>n(i.key),style:{border:0,background:"transparent",padding:"10px 8px 12px",color:t===i.key?ut.accent:ut.subtext,fontWeight:t===i.key?800:600},children:[Q.jsx("div",{style:{fontSize:20},children:i.icon}),Q.jsx("div",{style:{fontSize:11,marginTop:4},children:i.label})]},i.key))})}function Tk({price:e,mrp:t,discount:n}){return Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[Q.jsx("div",{style:{fontSize:20,fontWeight:800},children:j_(e)}),Q.jsx("div",{style:{fontSize:14,color:ut.subtext,textDecoration:"line-through"},children:j_(t)}),Q.jsxs("div",{style:{color:ut.accent,fontWeight:800,fontSize:14},children:[n,"% off"]})]})}function Ak({name:e}){return Q.jsx("div",{style:{width:44,height:44,borderRadius:"50%",display:"grid",placeItems:"center",background:ut.accentSoft,color:ut.accent,fontWeight:800},children:sC(e)})}const oC=()=>{};var F_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},lC=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],a=e[n++],l=e[n++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;t[i++]=String.fromCharCode(55296+(u>>10)),t[i++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return t.join("")},PA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],a=r+1<e.length,l=a?e[r+1]:0,u=r+2<e.length,c=u?e[r+2]:0,d=s>>2,m=(s&3)<<4|l>>4;let g=(l&15)<<2|c>>6,_=c&63;u||(_=64,a||(g=64)),i.push(n[d],n[m],n[g],n[_])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(VA(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):lC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],l=r<e.length?n[e.charAt(r)]:0;++r;const c=r<e.length?n[e.charAt(r)]:64;++r;const m=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||l==null||c==null||m==null)throw new uC;const g=s<<2|l>>4;if(i.push(g),c!==64){const _=l<<4&240|c>>2;if(i.push(_),m!==64){const D=c<<6&192|m;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class uC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cC=function(e){const t=VA(e);return PA.encodeByteArray(t,!0)},ic=function(e){return cC(e).replace(/\./g,"")},kA=function(e){try{return PA.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=()=>hC().__FIREBASE_DEFAULTS__,dC=()=>{if(typeof process>"u"||typeof F_>"u")return;const e=F_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},mC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kA(e[1]);return t&&JSON.parse(t)},jc=()=>{try{return oC()||fC()||dC()||mC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},LA=e=>{var t,n;return(n=(t=jc())==null?void 0:t.emulatorHosts)==null?void 0:n[e]},gC=e=>{const t=LA(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},UA=()=>{var e;return(e=jc())==null?void 0:e.config},xA=e=>{var t;return(t=jc())==null?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...e};return[ic(JSON.stringify(n)),ic(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _C(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function vC(){var t;const e=(t=jc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function EC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ug(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function TC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AC(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function SC(){return!vC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cg(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)==null?void 0:s.message)||"")}}catch(n){t(n)}})}function zA(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="FirebaseError";class vn extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=bC,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ns.prototype.create)}}class ns{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],a=s?wC(s,i):"Error",l=`${this.serviceName}: ${a} (${r}).`;return new vn(r,l,i)}}function wC(e,t){return e.replace(IC,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const IC=/\{\$([^}]+)}/g;function RC(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function tr(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],a=t[r];if(H_(s)&&H_(a)){if(!tr(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function H_(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ja(e){const t={};return e.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");t[decodeURIComponent(r)]=decodeURIComponent(s)}}),t}function Wa(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function CC(e,t){const n=new DC(e,t);return n.subscribe.bind(n)}class DC{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");OC(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=Ef),r.error===void 0&&(r.error=Ef),r.complete===void 0&&(r.complete=Ef);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OC(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ef(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=1e3,MC=2,VC=4*60*60*1e3,PC=.5;function G_(e,t=NC,n=MC){const i=t*Math.pow(n,e),r=Math.round(PC*i*(Math.random()-.5)*2);return Math.min(VC,i+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function BA(e){return(await fetch(e,{credentials:"include"})).ok}class pn{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new pC;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(UC(t))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=Cr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cr){return this.instances.has(t)}getOptions(t=Cr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&a.resolve(r)}return r}onInit(t,n){const i=this.normalizeInstanceIdentifier(n),r=this.onInitCallbacks.get(i)??new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:LC(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=Cr){return this.component?this.component.multipleInstances?t:Cr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LC(e){return e===Cr?void 0:e}function UC(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(st||(st={}));const zC={debug:st.DEBUG,verbose:st.VERBOSE,info:st.INFO,warn:st.WARN,error:st.ERROR,silent:st.SILENT},BC=st.INFO,qC={[st.DEBUG]:"log",[st.VERBOSE]:"log",[st.INFO]:"info",[st.WARN]:"warn",[st.ERROR]:"error"},jC=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=qC[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fc{constructor(t){this.name=t,this._logLevel=BC,this._logHandler=jC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in st))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,st.DEBUG,...t),this._logHandler(this,st.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,st.VERBOSE,...t),this._logHandler(this,st.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,st.INFO,...t),this._logHandler(this,st.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,st.WARN,...t),this._logHandler(this,st.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,st.ERROR,...t),this._logHandler(this,st.ERROR,...t)}}const FC=(e,t)=>t.some(n=>e instanceof n);let K_,Q_;function HC(){return K_||(K_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GC(){return Q_||(Q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qA=new WeakMap,Pd=new WeakMap,jA=new WeakMap,Tf=new WeakMap,fg=new WeakMap;function KC(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ki(e.result)),r()},a=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&qA.set(n,e)}).catch(()=>{}),fg.set(t,e),t}function QC(e){if(Pd.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),r()},a=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Pd.set(e,t)}let kd={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pd.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jA.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ki(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function YC(e){kd=e(kd)}function $C(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(Af(this),t,...n);return jA.set(i,t.sort?t.sort():[t]),Ki(i)}:GC().includes(e)?function(...t){return e.apply(Af(this),t),Ki(qA.get(this))}:function(...t){return Ki(e.apply(Af(this),t))}}function XC(e){return typeof e=="function"?$C(e):(e instanceof IDBTransaction&&QC(e),FC(e,HC())?new Proxy(e,kd):e)}function Ki(e){if(e instanceof IDBRequest)return KC(e);if(Tf.has(e))return Tf.get(e);const t=XC(e);return t!==e&&(Tf.set(e,t),fg.set(t,e)),t}const Af=e=>fg.get(e);function FA(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),l=Ki(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Ki(a.result),u.oldVersion,u.newVersion,Ki(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const JC=["get","getKey","getAll","getAllKeys","count"],WC=["put","add","delete","clear"],Sf=new Map;function Y_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Sf.get(t))return Sf.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=WC.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||JC.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,r?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),r&&u.done]))[0]};return Sf.set(t,s),s}YC(e=>({...e,get:(t,n,i)=>Y_(t,n)||e.get(t,n,i),has:(t,n)=>!!Y_(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(t2(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function t2(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ld="@firebase/app",$_="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Fc("@firebase/app"),e2="@firebase/app-compat",n2="@firebase/analytics-compat",i2="@firebase/analytics",r2="@firebase/app-check-compat",s2="@firebase/app-check",a2="@firebase/auth",o2="@firebase/auth-compat",l2="@firebase/database",u2="@firebase/data-connect",c2="@firebase/database-compat",h2="@firebase/functions",f2="@firebase/functions-compat",d2="@firebase/installations",m2="@firebase/installations-compat",g2="@firebase/messaging",p2="@firebase/messaging-compat",y2="@firebase/performance",_2="@firebase/performance-compat",v2="@firebase/remote-config",E2="@firebase/remote-config-compat",T2="@firebase/storage",A2="@firebase/storage-compat",S2="@firebase/firestore",b2="@firebase/ai",w2="@firebase/firestore-compat",I2="firebase",R2="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="[DEFAULT]",C2={[Ld]:"fire-core",[e2]:"fire-core-compat",[i2]:"fire-analytics",[n2]:"fire-analytics-compat",[s2]:"fire-app-check",[r2]:"fire-app-check-compat",[a2]:"fire-auth",[o2]:"fire-auth-compat",[l2]:"fire-rtdb",[u2]:"fire-data-connect",[c2]:"fire-rtdb-compat",[h2]:"fire-fn",[f2]:"fire-fn-compat",[d2]:"fire-iid",[m2]:"fire-iid-compat",[g2]:"fire-fcm",[p2]:"fire-fcm-compat",[y2]:"fire-perf",[_2]:"fire-perf-compat",[v2]:"fire-rc",[E2]:"fire-rc-compat",[T2]:"fire-gcs",[A2]:"fire-gcs-compat",[S2]:"fire-fst",[w2]:"fire-fst-compat",[b2]:"fire-vertex","fire-js":"fire-js",[I2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,D2=new Map,xd=new Map;function X_(e,t){try{e.container.addComponent(t)}catch(n){oi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Nn(e){const t=e.name;if(xd.has(t))return oi.debug(`There were multiple attempts to register component ${t}.`),!1;xd.set(t,e);for(const n of rc.values())X_(n,e);for(const n of D2.values())X_(n,e);return!0}function is(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ue(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qi=new ns("app","Firebase",O2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(t,n,i){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=R2;function HA(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i={name:Ud,automaticDataCollectionEnabled:!0,...t},r=i.name;if(typeof r!="string"||!r)throw Qi.create("bad-app-name",{appName:String(r)});if(n||(n=UA()),!n)throw Qi.create("no-options");const s=rc.get(r);if(s){if(tr(n,s.options)&&tr(i,s.config))return s;throw Qi.create("duplicate-app",{appName:r})}const a=new xC(r);for(const u of xd.values())a.addComponent(u);const l=new N2(n,i,a);return rc.set(r,l),l}function dg(e=Ud){const t=rc.get(e);if(!t&&e===Ud&&UA())return HA();if(!t)throw Qi.create("no-app",{appName:e});return t}function an(e,t,n){let i=C2[e]??e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),oi.warn(a.join(" "));return}Nn(new pn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M2="firebase-heartbeat-database",V2=1,Uo="firebase-heartbeat-store";let bf=null;function GA(){return bf||(bf=FA(M2,V2,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Uo)}catch(n){console.warn(n)}}}}).catch(e=>{throw Qi.create("idb-open",{originalErrorMessage:e.message})})),bf}async function P2(e){try{const n=(await GA()).transaction(Uo),i=await n.objectStore(Uo).get(KA(e));return await n.done,i}catch(t){if(t instanceof vn)oi.warn(t.message);else{const n=Qi.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});oi.warn(n.message)}}}async function J_(e,t){try{const i=(await GA()).transaction(Uo,"readwrite");await i.objectStore(Uo).put(t,KA(e)),await i.done}catch(n){if(n instanceof vn)oi.warn(n.message);else{const i=Qi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});oi.warn(i.message)}}}function KA(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2=1024,L2=30;class U2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z2(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=W_();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>L2){const a=B2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){oi.warn(i)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=W_(),{heartbeatsToSend:i,unsentEntries:r}=x2(this._heartbeatsCache.heartbeats),s=ic(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return oi.warn(n),""}}}function W_(){return new Date().toISOString().substring(0,10)}function x2(e,t=k2){const n=[];let i=e.slice();for(const r of e){const s=n.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),Z_(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Z_(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class z2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cg()?hg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await P2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return J_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const i=await this.read();return J_(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Z_(e){return ic(JSON.stringify({version:2,heartbeats:e})).length}function B2(e){if(e.length===0)return-1;let t=0,n=e[0].date;for(let i=1;i<e.length;i++)e[i].date<n&&(n=e[i].date,t=i);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q2(e){Nn(new pn("platform-logger",t=>new ZC(t),"PRIVATE")),Nn(new pn("heartbeat",t=>new U2(t),"PRIVATE")),an(Ld,$_,e),an(Ld,$_,"esm2020"),an("fire-js","")}q2("");var j2="firebase",F2="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(j2,F2,"app");const QA="@firebase/installations",mg="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=1e4,$A=`w:${mg}`,XA="FIS_v2",H2="https://firebaseinstallations.googleapis.com/v1",G2=60*60*1e3,K2="installations",Q2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Hr=new ns(K2,Q2,Y2);function JA(e){return e instanceof vn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA({projectId:e}){return`${H2}/projects/${e}/installations`}function ZA(e){return{token:e.token,requestStatus:2,expiresIn:X2(e.expiresIn),creationTime:Date.now()}}async function tS(e,t){const i=(await t.json()).error;return Hr.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function eS({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $2(e,{refreshToken:t}){const n=eS(e);return n.append("Authorization",J2(t)),n}async function nS(e){const t=await e();return t.status>=500&&t.status<600?e():t}function X2(e){return Number(e.replace("s","000"))}function J2(e){return`${XA} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=WA(e),r=eS(e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={fid:n,authVersion:XA,appId:e.appId,sdkVersion:$A},l={method:"POST",headers:r,body:JSON.stringify(a)},u=await nS(()=>fetch(i,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ZA(c.authToken)}}else throw await tS("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z2(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=/^[cdef][\w-]{21}$/,zd="";function eD(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=nD(e);return tD.test(n)?n:zd}catch{return zd}}function nD(e){return Z2(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=new Map;function sS(e,t){const n=Hc(e);aS(n,t),iD(n,t)}function aS(e,t){const n=rS.get(e);if(n)for(const i of n)i(t)}function iD(e,t){const n=rD();n&&n.postMessage({key:e,fid:t}),sD()}let Dr=null;function rD(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=e=>{aS(e.data.key,e.data.fid)}),Dr}function sD(){rS.size===0&&Dr&&(Dr.close(),Dr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="firebase-installations-database",oD=1,Gr="firebase-installations-store";let wf=null;function gg(){return wf||(wf=FA(aD,oD,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Gr)}}})),wf}async function sc(e,t){const n=Hc(e),r=(await gg()).transaction(Gr,"readwrite"),s=r.objectStore(Gr),a=await s.get(n);return await s.put(t,n),await r.done,(!a||a.fid!==t.fid)&&sS(e,t.fid),t}async function oS(e){const t=Hc(e),i=(await gg()).transaction(Gr,"readwrite");await i.objectStore(Gr).delete(t),await i.done}async function Gc(e,t){const n=Hc(e),r=(await gg()).transaction(Gr,"readwrite"),s=r.objectStore(Gr),a=await s.get(n),l=t(a);return l===void 0?await s.delete(n):await s.put(l,n),await r.done,l&&(!a||a.fid!==l.fid)&&sS(e,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(e){let t;const n=await Gc(e.appConfig,i=>{const r=lD(i),s=uD(e,r);return t=s.registrationPromise,s.installationEntry});return n.fid===zd?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function lD(e){const t=e||{fid:eD(),registrationStatus:0};return lS(t)}function uD(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Hr.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=cD(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:hD(e)}:{installationEntry:t}}async function cD(e,t){try{const n=await W2(e,t);return sc(e.appConfig,n)}catch(n){throw JA(n)&&n.customData.serverCode===409?await oS(e.appConfig):await sc(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function hD(e){let t=await tv(e.appConfig);for(;t.registrationStatus===1;)await iS(100),t=await tv(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await pg(e);return i||n}return t}function tv(e){return Gc(e,t=>{if(!t)throw Hr.create("installation-not-found");return lS(t)})}function lS(e){return fD(e)?{fid:e.fid,registrationStatus:0}:e}function fD(e){return e.registrationStatus===1&&e.registrationTime+YA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dD({appConfig:e,heartbeatServiceProvider:t},n){const i=mD(e,n),r=$2(e,n),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={installation:{sdkVersion:$A,appId:e.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},u=await nS(()=>fetch(i,l));if(u.ok){const c=await u.json();return ZA(c)}else throw await tS("Generate Auth Token",u)}function mD(e,{fid:t}){return`${WA(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(e,t=!1){let n;const i=await Gc(e.appConfig,s=>{if(!uS(s))throw Hr.create("not-registered");const a=s.authToken;if(!t&&yD(a))return s;if(a.requestStatus===1)return n=gD(e,t),s;{if(!navigator.onLine)throw Hr.create("app-offline");const l=vD(s);return n=pD(e,l),l}});return n?await n:i.authToken}async function gD(e,t){let n=await ev(e.appConfig);for(;n.authToken.requestStatus===1;)await iS(100),n=await ev(e.appConfig);const i=n.authToken;return i.requestStatus===0?yg(e,t):i}function ev(e){return Gc(e,t=>{if(!uS(t))throw Hr.create("not-registered");const n=t.authToken;return ED(n)?{...t,authToken:{requestStatus:0}}:t})}async function pD(e,t){try{const n=await dD(e,t),i={...t,authToken:n};return await sc(e.appConfig,i),n}catch(n){if(JA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oS(e.appConfig);else{const i={...t,authToken:{requestStatus:0}};await sc(e.appConfig,i)}throw n}}function uS(e){return e!==void 0&&e.registrationStatus===2}function yD(e){return e.requestStatus===2&&!_D(e)}function _D(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+G2}function vD(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function ED(e){return e.requestStatus===1&&e.requestTime+YA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TD(e){const t=e,{installationEntry:n,registrationPromise:i}=await pg(t);return i?i.catch(console.error):yg(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AD(e,t=!1){const n=e;return await SD(n),(await yg(n,t)).token}async function SD(e){const{registrationPromise:t}=await pg(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(e){if(!e||!e.options)throw If("App Configuration");if(!e.name)throw If("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw If(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function If(e){return Hr.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS="installations",wD="installations-internal",ID=e=>{const t=e.getProvider("app").getImmediate(),n=bD(t),i=is(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},RD=e=>{const t=e.getProvider("app").getImmediate(),n=is(t,cS).getImmediate();return{getId:()=>TD(n),getToken:r=>AD(n,r)}};function CD(){Nn(new pn(cS,ID,"PUBLIC")),Nn(new pn(wD,RD,"PRIVATE"))}CD();an(QA,mg);an(QA,mg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="analytics",DD="firebase_id",OD="origin",ND=60*1e3,MD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_g="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Fc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},He=new ns("analytics","Analytics",VD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PD(e){if(!e.startsWith(_g)){const t=He.create("invalid-gtag-resource",{gtagURL:e});return Ee.warn(t.message),""}return e}function hS(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function kD(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function LD(e,t){const n=kD("firebase-js-sdk-policy",{createScriptURL:PD}),i=document.createElement("script"),r=`${_g}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function UD(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function xD(e,t,n,i,r,s){const a=i[r];try{if(a)await t[a];else{const u=(await hS(n)).find(c=>c.measurementId===r);u&&await t[u.appId]}}catch(l){Ee.error(l)}e("config",r,s)}async function zD(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await hS(n);for(const u of a){const c=l.find(m=>m.measurementId===u),d=c&&t[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(s){Ee.error(s)}}function BD(e,t,n,i){async function r(s,...a){try{if(s==="event"){const[l,u]=a;await zD(e,t,n,l,u)}else if(s==="config"){const[l,u]=a;await xD(e,t,n,i,l,u)}else if(s==="consent"){const[l,u]=a;e("consent",l,u)}else if(s==="get"){const[l,u,c]=a;e("get",l,u,c)}else if(s==="set"){const[l]=a;e("set",l)}else e(s,...a)}catch(l){Ee.error(l)}}return r}function qD(e,t,n,i,r){let s=function(...a){window[i].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=BD(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}function jD(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(_g)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD=30,HD=1e3;class GD{constructor(t={},n=HD){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const fS=new GD;function KD(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function QD(e){var a;const{appId:t,apiKey:n}=e,i={method:"GET",headers:KD(n)},r=MD.replace("{app-id}",t),s=await fetch(r,i);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(a=u.error)!=null&&a.message&&(l=u.error.message)}catch{}throw He.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function YD(e,t=fS,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw He.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw He.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new JD;return setTimeout(async()=>{l.abort()},ND),dS({appId:i,apiKey:r,measurementId:s},a,l,t)}async function dS(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=fS){var l;const{appId:s,measurementId:a}=e;try{await $D(i,t)}catch(u){if(a)return Ee.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:a};throw u}try{const u=await QD(e);return r.deleteThrottleMetadata(s),u}catch(u){const c=u;if(!XD(c)){if(r.deleteThrottleMetadata(s),a)return Ee.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw u}const d=Number((l=c==null?void 0:c.customData)==null?void 0:l.httpStatus)===503?G_(n,r.intervalMillis,FD):G_(n,r.intervalMillis),m={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return r.setThrottleMetadata(s,m),Ee.debug(`Calling attemptFetch again in ${d} millis`),dS(e,m,i,r)}}function $D(e,t){return new Promise((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener(()=>{clearTimeout(s),i(He.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function XD(e){if(!(e instanceof vn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class JD{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function WD(e,t,n,i,r){if(r&&r.global){e("event",n,i);return}else{const s=await t,a={...i,send_to:s};e("event",n,a)}}async function ZD(e,t,n,i){if(i&&i.global){const r={};for(const s of Object.keys(n))r[`user_properties.${s}`]=n[s];return e("set",r),Promise.resolve()}else{const r=await t;e("config",r,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(){if(cg())try{await hg()}catch(e){return Ee.warn(He.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ee.warn(He.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function eO(e,t,n,i,r,s,a){const l=YD(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&Ee.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Ee.error(g)),t.push(l);const u=tO().then(g=>{if(g)return i.getId()}),[c,d]=await Promise.all([l,u]);jD(s)||LD(s,c.measurementId),r("js",new Date);const m=(a==null?void 0:a.config)??{};return m[OD]="firebase",m.update=!0,d!=null&&(m[DD]=d),r("config",c.measurementId,m),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(t){this.app=t}_delete(){return delete zs[this.app.options.appId],Promise.resolve()}}let zs={},nv=[];const iv={};let Rf="dataLayer",iO="gtag",rv,vg,sv=!1;function rO(){const e=[];if(ug()&&e.push("This is a browser extension environment."),zA()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,r)=>`(${r+1}) ${i}`).join(" "),n=He.create("invalid-analytics-context",{errorInfo:t});Ee.warn(n.message)}}function sO(e,t,n){rO();const i=e.options.appId;if(!i)throw He.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ee.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw He.create("no-api-key");if(zs[i]!=null)throw He.create("already-exists",{id:i});if(!sv){UD(Rf);const{wrappedGtag:s,gtagCore:a}=qD(zs,nv,iv,Rf,iO);vg=s,rv=a,sv=!0}return zs[i]=eO(e,nv,iv,t,rv,Rf,n),new nO(e)}function aO(e=dg()){e=Dt(e);const t=is(e,ac);return t.isInitialized()?t.getImmediate():oO(e)}function oO(e,t={}){const n=is(e,ac);if(n.isInitialized()){const r=n.getImmediate();if(tr(t,n.getOptions()))return r;throw He.create("already-initialized")}return n.initialize({options:t})}async function lO(){if(ug()||!zA()||!cg())return!1;try{return await hg()}catch{return!1}}function uO(e,t,n){e=Dt(e),ZD(vg,zs[e.app.options.appId],t,n).catch(i=>Ee.error(i))}function cO(e,t,n,i){e=Dt(e),WD(vg,zs[e.app.options.appId],t,n,i).catch(r=>Ee.error(r))}const av="@firebase/analytics",ov="0.10.22";function hO(){Nn(new pn(ac,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return sO(i,r,n)},"PUBLIC")),Nn(new pn("analytics-internal",e,"PRIVATE")),an(av,ov),an(av,ov,"esm2020");function e(t){try{const n=t.getProvider(ac).getImmediate();return{logEvent:(i,r,s)=>cO(n,i,r,s),setUserProperties:(i,r)=>uO(n,i,r)}}catch(n){throw He.create("interop-component-reg-failed",{reason:n})}}}hO();function mS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fO=mS,gS=new ns("auth","Firebase",mS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Fc("@firebase/auth");function dO(e,...t){oc.logLevel<=st.WARN&&oc.warn(`Auth (${ga}): ${e}`,...t)}function _u(e,...t){oc.logLevel<=st.ERROR&&oc.error(`Auth (${ga}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e,...t){throw Tg(e,...t)}function mn(e,...t){return Tg(e,...t)}function Eg(e,t,n){const i={...fO(),[t]:n};return new ns("auth","Firebase",i).create(t,{appName:e.name})}function Zn(e){return Eg(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mO(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&un(e,"argument-error"),Eg(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Tg(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return gS.create(e,...t)}function H(e,t,...n){if(!e)throw Tg(t,...n)}function Qn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw _u(t),new Error(t)}function li(e,t){e||Qn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.href)||""}function gO(){return lv()==="http:"||lv()==="https:"}function lv(){var e;return typeof self<"u"&&((e=self.location)==null?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pO(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gO()||ug()||"connection"in navigator)?navigator.onLine:!0}function yO(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,n){this.shortDelay=t,this.longDelay=n,li(n>t,"Short delay should be less than long delay!"),this.isMobile=_C()||TC()}get(){return pO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(e,t){li(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EO=new ll(3e4,6e4);function cr(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function di(e,t,n,i,r={}){return yS(e,r,async()=>{let s={},a={};i&&(t==="GET"?a=i:s={body:JSON.stringify(i)});const l=al({key:e.config.apiKey,...a}).slice(1),u=await e._getAdditionalHeaders();u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode);const c={method:t,headers:u,...s};return EC()||(c.referrerPolicy="no-referrer"),e.emulatorConfig&&ol(e.emulatorConfig.host)&&(c.credentials="include"),pS.fetch()(await _S(e,e.config.apiHost,n,l),c)})}async function yS(e,t,n){e._canInitEmulator=!1;const i={..._O,...t};try{const r=new AO(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Yl(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yl(e,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Yl(e,"email-already-in-use",a);if(u==="USER_DISABLED")throw Yl(e,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Eg(e,d,c);un(e,d)}}catch(r){if(r instanceof vn)throw r;un(e,"network-request-failed",{message:String(r)})}}async function ul(e,t,n,i,r={}){const s=await di(e,t,n,i,r);return"mfaPendingCredential"in s&&un(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function _S(e,t,n,i){const r=`${t}${n}?${i}`,s=e,a=s.config.emulator?Ag(e.config,r):`${e.config.apiScheme}://${r}`;return vO.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function TO(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AO{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mn(this.auth,"network-request-failed")),EO.get())})}}function Yl(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=mn(e,t,i);return r.customData._tokenResponse=n,r}function uv(e){return e!==void 0&&e.enterprise!==void 0}class SO{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return TO(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bO(e,t){return di(e,"GET","/v2/recaptchaConfig",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(e,t){return di(e,"POST","/v1/accounts:delete",t)}async function lc(e,t){return di(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function IO(e,t=!1){const n=Dt(e),i=await n.getIdToken(t),r=Sg(i);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:_o(Cf(r.auth_time)),issuedAtTime:_o(Cf(r.iat)),expirationTime:_o(Cf(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cf(e){return Number(e)*1e3}function Sg(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return _u("JWT malformed, contained fewer than 3 sections"),null;try{const r=kA(n);return r?JSON.parse(r):(_u("Failed to decode base64 JWT payload"),null)}catch(r){return _u("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function cv(e){const t=Sg(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof vn&&RO(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function RO({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(e){var m;const t=e.auth,n=await e.getIdToken(),i=await na(e,lc(t,{idToken:n}));H(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const s=(m=r.providerUserInfo)!=null&&m.length?vS(r.providerUserInfo):[],a=OO(e.providerData,s),l=e.isAnonymous,u=!(e.email&&r.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qd(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function DO(e){const t=Dt(e);await uc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function OO(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function vS(e){return e.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(e,t){const n=await yS(e,{},async()=>{const i=al({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,a=await _S(e,r,"/v1/token",`key=${s}`),l=await e._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:i};return e.emulatorConfig&&ol(e.emulatorConfig.host)&&(u.credentials="include"),pS.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MO(e,t){return di(e,"POST","/v2/accounts:revokeToken",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):cv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=cv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await NO(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new Bs;return i&&(H(typeof i=="string","internal-error",{appName:t}),a.refreshToken=i),r&&(H(typeof r=="string","internal-error",{appName:t}),a.accessToken=r),s&&(H(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Bs,this.toJSON())}_performRefresh(){return Qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class dn{constructor({uid:t,auth:n,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new CO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const n=await na(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return IO(this,t)}reload(){return DO(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new dn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ue(this.auth.app))return Promise.reject(Zn(this.auth));const t=await this.getIdToken();return await na(this,wO(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const i=n.displayName??void 0,r=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,c=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:m,emailVerified:g,isAnonymous:_,providerData:D,stsTokenManager:M}=n;H(m&&M,t,"internal-error");const L=Bs.fromJSON(this.name,M);H(typeof m=="string",t,"internal-error"),Ai(i,t.name),Ai(r,t.name),H(typeof g=="boolean",t,"internal-error"),H(typeof _=="boolean",t,"internal-error"),Ai(s,t.name),Ai(a,t.name),Ai(l,t.name),Ai(u,t.name),Ai(c,t.name),Ai(d,t.name);const S=new dn({uid:m,auth:t,email:r,emailVerified:g,displayName:i,isAnonymous:_,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:L,createdAt:c,lastLoginAt:d});return D&&Array.isArray(D)&&(S.providerData=D.map(T=>({...T}))),u&&(S._redirectEventId=u),S}static async _fromIdTokenResponse(t,n,i=!1){const r=new Bs;r.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await uc(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];H(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?vS(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),l=new Bs;l.updateFromIdToken(i);const u=new dn({uid:r.localId,auth:t,stsTokenManager:l,isAnonymous:a}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new qd(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;function Yn(e){li(e instanceof Function,"Expected a class definition");let t=hv.get(e);return t?(li(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,hv.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ES.type="NONE";const fv=ES;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e,t,n){return`firebase:${e}:${t}:${n}`}class qs{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=vu(this.userKey,r.apiKey,s),this.fullPersistenceKey=vu("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await lc(this.auth,{idToken:t}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,t):null}return dn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new qs(Yn(fv),t,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||Yn(fv);const a=vu(i,t.config.apiKey,t.name);let l=null;for(const c of n)try{const d=await c._get(a);if(d){let m;if(typeof d=="string"){const g=await lc(t,{idToken:d}).catch(()=>{});if(!g)break;m=await dn._fromGetAccountInfoResponse(t,g,d)}else m=dn._fromJSON(t,d);c!==s&&(l=m),s=c;break}}catch{}const u=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qs(s,t,i):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new qs(s,t,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TS(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(IS(t))return"Blackberry";if(RS(t))return"Webos";if(AS(t))return"Safari";if((t.includes("chrome/")||SS(t))&&!t.includes("edge/"))return"Chrome";if(wS(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function TS(e=ge()){return/firefox\//i.test(e)}function AS(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function SS(e=ge()){return/crios\//i.test(e)}function bS(e=ge()){return/iemobile/i.test(e)}function wS(e=ge()){return/android/i.test(e)}function IS(e=ge()){return/blackberry/i.test(e)}function RS(e=ge()){return/webos/i.test(e)}function bg(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function VO(e=ge()){var t;return bg(e)&&!!((t=window.navigator)!=null&&t.standalone)}function PO(){return AC()&&document.documentMode===10}function CS(e=ge()){return bg(e)||wS(e)||RS(e)||IS(e)||/windows phone/i.test(e)||bS(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(e,t=[]){let n;switch(e){case"Browser":n=dv(ge());break;case"Worker":n=`${dv(ge())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ga}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((a,l)=>{try{const u=t(s);a(u)}catch(u){l(u)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(e,t={}){return di(e,"GET","/v2/passwordPolicy",cr(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=6;class xO{constructor(t){var i;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??UO,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=t.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new kO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Yn(n)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await qs.create(this,t),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await lc(this,{idToken:t}),i=await dn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var s;if(Ue(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await uc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=yO()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ue(this.app))return Promise.reject(Zn(this));const n=t?Dt(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ue(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ue(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yn(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await LO(this),n=new xO(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new ns("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await MO(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Yn(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[Yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,i,r);return()=>{a=!0,u()}}else{const u=t.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=DS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var n;if(Ue(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&dO(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hr(e){return Dt(e)}class mv{constructor(t){this.auth=t,this.observer=null,this.addObserver=CC(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BO(e){Kc=e}function OS(e){return Kc.loadJS(e)}function qO(){return Kc.recaptchaEnterpriseScript}function jO(){return Kc.gapiScript}function FO(e){return`__${e}${Math.floor(Math.random()*1e6)}`}class HO{constructor(){this.enterprise=new GO}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class GO{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const KO="recaptcha-enterprise",NS="NO_RECAPTCHA";class QO{constructor(t){this.type=KO,this.auth=hr(t)}async verify(t="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{bO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new SO(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(u=>{l(u)})})}function r(s,a,l){const u=window.grecaptcha;uv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:t}).then(c=>{a(c)}).catch(()=>{a(NS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new HO().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{i(this.auth).then(l=>{if(!n&&uv(window.grecaptcha))r(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=qO();u.length!==0&&(u+=l),OS(u).then(()=>{r(l,s,a)}).catch(c=>{a(c)})}}).catch(l=>{a(l)})})}}async function gv(e,t,n,i=!1,r=!1){const s=new QO(e);let a;if(r)a=NS;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const l={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function jd(e,t,n,i,r){var s;if((s=e._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await gv(e,t,n,n==="getOobCode");return i(e,a)}else return i(e,t).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await gv(e,t,n,n==="getOobCode");return i(e,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(e,t){const n=is(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(tr(s,t??{}))return r;un(r,"already-initialized")}return n.initialize({options:t})}function $O(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yn);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}function XO(e,t,n){const i=hr(e);H(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!1,s=MS(t),{host:a,port:l}=JO(t),u=l===null?"":`:${l}`,c={url:`${s}//${a}${u}/`},d=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){H(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),H(tr(c,i.config.emulator)&&tr(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,ol(a)?BA(`${s}//${a}${u}`):WO()}function MS(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function JO(e){const t=MS(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:pv(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:pv(a)}}}function pv(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function WO(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qn("not implemented")}_getIdTokenResponse(t){return Qn("not implemented")}_linkToIdToken(t,n){return Qn("not implemented")}_getReauthenticationResolver(t){return Qn("not implemented")}}async function ZO(e,t){return di(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(e,t){return ul(e,"POST","/v1/accounts:signInWithPassword",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(e,t){return ul(e,"POST","/v1/accounts:signInWithEmailLink",cr(e,t))}async function nN(e,t){return ul(e,"POST","/v1/accounts:signInWithEmailLink",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends wg{constructor(t,n,i,r=null){super("password",i),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new xo(t,n,"password")}static _fromEmailAndCode(t,n,i=null){return new xo(t,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(t,n,"signInWithPassword",tN);case"emailLink":return eN(t,{email:this._email,oobCode:this._password});default:un(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jd(t,i,"signUpPassword",ZO);case"emailLink":return nN(t,{idToken:n,email:this._email,oobCode:this._password});default:un(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(e,t){return ul(e,"POST","/v1/accounts:signInWithIdp",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iN="http://localhost";class Kr extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Kr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:i,signInMethod:r,...s}=n;if(!i||!r)return null;const a=new Kr(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return js(t,n)}_linkToIdToken(t,n){const i=this.buildRequest();return i.idToken=n,js(t,i)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,js(t,n)}buildRequest(){const t={requestUri:iN,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=al(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sN(e){const t=Ja(Wa(e)).link,n=t?Ja(Wa(t)).deep_link_id:null,i=Ja(Wa(e)).deep_link_id;return(i?Ja(Wa(i)).link:null)||i||n||t||e}class Ig{constructor(t){const n=Ja(Wa(t)),i=n.apiKey??null,r=n.oobCode??null,s=rN(n.mode??null);H(i&&r&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=r,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=sN(t);try{return new Ig(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.providerId=pa.PROVIDER_ID}static credential(t,n){return xo._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const i=Ig.parseLink(n);return H(i,"argument-error"),xo._fromEmailAndCode(t,i.code,i.tenantId)}}pa.PROVIDER_ID="password";pa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";pa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl extends Rg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends cl{constructor(){super("facebook.com")}static credential(t){return Kr._fromParams({providerId:Di.PROVIDER_ID,signInMethod:Di.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Di.credentialFromTaggedObject(t)}static credentialFromError(t){return Di.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Di.credential(t.oauthAccessToken)}catch{return null}}}Di.FACEBOOK_SIGN_IN_METHOD="facebook.com";Di.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Kr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Fn.credentialFromTaggedObject(t)}static credentialFromError(t){return Fn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:i}=t;if(!n&&!i)return null;try{return Fn.credential(n,i)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends cl{constructor(){super("github.com")}static credential(t){return Kr._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Oi.credentialFromTaggedObject(t)}static credentialFromError(t){return Oi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Oi.credential(t.oauthAccessToken)}catch{return null}}}Oi.GITHUB_SIGN_IN_METHOD="github.com";Oi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends cl{constructor(){super("twitter.com")}static credential(t,n){return Kr._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ni.credentialFromTaggedObject(t)}static credentialFromError(t){return Ni.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=t;if(!n||!i)return null;try{return Ni.credential(n,i)}catch{return null}}}Ni.TWITTER_SIGN_IN_METHOD="twitter.com";Ni.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aN(e,t){return ul(e,"POST","/v1/accounts:signUp",cr(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,i,r=!1){const s=await dn._fromIdTokenResponse(t,i,r),a=yv(i);return new Qr({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(t,n,i){await t._updateTokensIfNecessary(i,!0);const r=yv(i);return new Qr({user:t,providerId:r,_tokenResponse:i,operationType:n})}}function yv(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends vn{constructor(t,n,i,r){super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,n,i,r){return new cc(t,n,i,r)}}function VS(e,t,n,i){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(e,s,t,i):s})}async function oN(e,t,n=!1){const i=await na(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qr._forOperation(e,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lN(e,t,n=!1){const{auth:i}=e;if(Ue(i.app))return Promise.reject(Zn(i));const r="reauthenticate";try{const s=await na(e,VS(i,r,t,e),n);H(s.idToken,i,"internal-error");const a=Sg(s.idToken);H(a,i,"internal-error");const{sub:l}=a;return H(e.uid===l,i,"user-mismatch"),Qr._forOperation(e,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PS(e,t,n=!1){if(Ue(e.app))return Promise.reject(Zn(e));const i="signIn",r=await VS(e,i,t),s=await Qr._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function uN(e,t){return PS(hr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(e){const t=hr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function cN(e,t,n){if(Ue(e.app))return Promise.reject(Zn(e));const i=hr(e),a=await jd(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&kS(e),u}),l=await Qr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function hN(e,t,n){return Ue(e.app)?Promise.reject(Zn(e)):uN(Dt(e),pa.credential(t,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&kS(e),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fN(e,t){return di(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dN(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const i=Dt(e),s={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await na(i,fN(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(e,t){return Dt(e).setPersistence(t)}function gN(e,t,n,i){return Dt(e).onIdTokenChanged(t,n,i)}function pN(e,t,n){return Dt(e).beforeAuthStateChanged(t,n)}function yN(e,t,n,i){return Dt(e).onAuthStateChanged(t,n,i)}function _N(e){return Dt(e).signOut()}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=1e3,EN=10;class US extends LS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&t(n,r,i)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const i=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);PO()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,EN):r()}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:i}),!0)})},vN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}US.type="LOCAL";const xS=US;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS extends LS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}zS.type="SESSION";const BS=zS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const i=new Qc(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(a).map(async c=>c(n.origin,s)),u=await TN(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const c=Cg("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(m){const g=m;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}function SN(e){Rn().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(){return typeof Rn().WorkerGlobalScope<"u"&&typeof Rn().importScripts=="function"}async function bN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wN(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)==null?void 0:e.controller)||null}function IN(){return qS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="firebaseLocalStorageDb",RN=1,fc="firebaseLocalStorage",FS="fbase_key";class hl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(e,t){return e.transaction([fc],t?"readwrite":"readonly").objectStore(fc)}function CN(){const e=indexedDB.deleteDatabase(jS);return new hl(e).toPromise()}function Fd(){const e=indexedDB.open(jS,RN);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const i=e.result;try{i.createObjectStore(fc,{keyPath:FS})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const i=e.result;i.objectStoreNames.contains(fc)?t(i):(i.close(),await CN(),t(await Fd()))})})}async function _v(e,t,n){const i=Yc(e,!0).put({[FS]:t,value:n});return new hl(i).toPromise()}async function DN(e,t){const n=Yc(e,!1).get(t),i=await new hl(n).toPromise();return i===void 0?null:i.value}function vv(e,t){const n=Yc(e,!0).delete(t);return new hl(n).toPromise()}const ON=800,NN=3;class HS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fd(),this.db)}async _withRetries(t){let n=0;for(;;)try{const i=await this._openDb();return await t(i)}catch(i){if(n++>NN)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(IN()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await bN(),!this.activeServiceWorker)return;this.sender=new AN(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(i=t[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||wN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fd();return await _v(t,hc,"1"),await vv(t,hc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>_v(i,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(i=>DN(i,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>vv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const s=Yc(r,!1).getAll();return new hl(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(t.length!==0)for(const{fbase_key:r,value:s}of t)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const i=this.listeners[t];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ON)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HS.type="LOCAL";const MN=HS;new ll(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(e,t){return t?Yn(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends wg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return js(t,this._buildIdpRequest())}_linkToIdToken(t,n){return js(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return js(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function VN(e){return PS(e.auth,new Dg(e),e.bypassAuthState)}function PN(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),lN(n,new Dg(e),e.bypassAuthState)}async function kN(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),oN(n,new Dg(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(t,n,i,r,s=!1){this.auth=t,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:l}=t;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return VN;case"linkViaPopup":case"linkViaRedirect":return kN;case"reauthViaPopup":case"reauthViaRedirect":return PN;default:un(this.auth,"internal-error")}}resolve(t){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){li(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=new ll(2e3,1e4);async function UN(e,t,n){if(Ue(e.app))return Promise.reject(mn(e,"operation-not-supported-in-this-environment"));const i=hr(e);mO(e,t,Rg);const r=GS(i,n);return new Or(i,"signInViaPopup",t,r).executeNotNull()}class Or extends KS{constructor(t,n,i,r,s){super(t,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){li(this.filter.length===1,"Popup operations only handle one event");const t=Cg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(mn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,LN.get())};t()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN="pendingRedirect",Eu=new Map;class zN extends KS{constructor(t,n,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let t=Eu.get(this.auth._key());if(!t){try{const i=await BN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(i)}catch(n){t=()=>Promise.reject(n)}Eu.set(this.auth._key(),t)}return this.bypassAuthState||Eu.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(e,t){const n=FN(t),i=jN(e);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function qN(e,t){Eu.set(e._key(),t)}function jN(e){return Yn(e._redirectPersistence)}function FN(e){return vu(xN,e.config.apiKey,e.name)}async function HN(e,t,n=!1){if(Ue(e.app))return Promise.reject(Zn(e));const i=hr(e),r=GS(i,t),a=await new zN(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=10*60*1e3;class KN{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(t,i)&&(n=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!QN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var i;if(t.error&&!QS(t)){const r=((i=t.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(mn(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const i=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=GN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ev(t))}saveEventToCache(t){this.cachedEventUids.add(Ev(t)),this.lastProcessedEventTime=Date.now()}}function Ev(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function QS({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function QN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QS(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YN(e,t={}){return di(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XN=/^https?/;async function JN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await YN(e);for(const n of t)try{if(WN(n))return}catch{}un(e,"unauthorized-domain")}function WN(e){const t=Bd(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&i===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!XN.test(n))return!1;if($N.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=new ll(3e4,6e4);function Tv(){const e=Rn().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function tM(e){return new Promise((t,n)=>{var r,s,a;function i(){Tv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Tv(),n(mn(e,"network-request-failed"))},timeout:ZN.get()})}if((s=(r=Rn().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)t(gapi.iframes.getContext());else if((a=Rn().gapi)!=null&&a.load)i();else{const l=FO("iframefcb");return Rn()[l]=()=>{gapi.load?i():n(mn(e,"network-request-failed"))},OS(`${jO()}?onload=${l}`).catch(u=>n(u))}}).catch(t=>{throw Tu=null,t})}let Tu=null;function eM(e){return Tu=Tu||tM(e),Tu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=new ll(5e3,15e3),iM="__/auth/iframe",rM="emulator/auth/iframe",sM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oM(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ag(t,rM):`https://${e.config.authDomain}/${iM}`,i={apiKey:t.apiKey,appName:e.name,v:ga},r=aM.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${al(i).slice(1)}`}async function lM(e){const t=await eM(e),n=Rn().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:oM(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sM,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=mn(e,"network-request-failed"),l=Rn().setTimeout(()=>{s(a)},nM.get());function u(){Rn().clearTimeout(l),r(i)}i.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cM=500,hM=600,fM="_blank",dM="http://localhost";class Av{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mM(e,t,n,i=cM,r=hM){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const u={...uM,width:i.toString(),height:r.toString(),top:s,left:a},c=ge().toLowerCase();n&&(l=SS(c)?fM:n),TS(c)&&(t=t||dM,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[_,D])=>`${g}${_}=${D},`,"");if(VO(c)&&l!=="_self")return gM(t||"",l),new Av(null);const m=window.open(t||"",l,d);H(m,e,"popup-blocked");try{m.focus()}catch{}return new Av(m)}function gM(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pM="__/auth/handler",yM="emulator/auth/handler",_M=encodeURIComponent("fac");async function Sv(e,t,n,i,r,s){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:ga,eventId:r};if(t instanceof Rg){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",RC(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,m]of Object.entries({}))a[d]=m}if(t instanceof cl){const d=t.getScopes().filter(m=>m!=="");d.length>0&&(a.scopes=d.join(","))}e.tenantId&&(a.tid=e.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await e._getAppCheckToken(),c=u?`#${_M}=${encodeURIComponent(u)}`:"";return`${vM(e)}?${al(l).slice(1)}${c}`}function vM({config:e}){return e.emulator?Ag(e,yM):`https://${e.authDomain}/${pM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="webStorageSupport";class EM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BS,this._completeRedirectFn=HN,this._overrideRedirectResult=qN}async _openPopup(t,n,i,r){var a;li((a=this.eventManagers[t._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const s=await Sv(t,n,i,Bd(),r);return mM(t,s,Cg())}async _openRedirect(t,n,i,r){await this._originValidation(t);const s=await Sv(t,n,i,Bd(),r);return SN(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(li(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(t);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(t){const n=await lM(t),i=new KN(t);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,i}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Df,{type:Df},r=>{var a;const s=(a=r==null?void 0:r[0])==null?void 0:a[Df];s!==void 0&&n(!!s),un(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return CS()||AS()||bg()}}const TM=EM;var bv="@firebase/auth",wv="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AM{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bM(e){Nn(new pn("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;H(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:l,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:DS(e)},c=new zO(i,r,s,u);return $O(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Nn(new pn("auth-internal",t=>{const n=hr(t.getProvider("auth").getImmediate());return(i=>new AM(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(bv,wv,SM(e)),an(bv,wv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wM=5*60,IM=xA("authIdTokenMaxAge")||wM;let Iv=null;const RM=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>IM)return;const r=n==null?void 0:n.token;Iv!==r&&(Iv=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function CM(e=dg()){const t=is(e,"auth");if(t.isInitialized())return t.getImmediate();const n=YO(e,{popupRedirectResolver:TM,persistence:[MN,xS,BS]}),i=xA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const a=RM(s.toString());pN(n,a,()=>a(n.currentUser)),gN(n,l=>a(l))}}const r=LA("auth");return r&&XO(n,`http://${r}`),n}function DM(){var e;return((e=document.getElementsByTagName("head"))==null?void 0:e[0])??document}BO({loadJS(e){return new Promise((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=r=>{const s=mn("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",DM().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bM("Browser");var Rv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yi,YS;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,y){function E(){}E.prototype=y.prototype,v.F=y.prototype,v.prototype=new E,v.prototype.constructor=v,v.D=function(b,w,R){for(var A=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)A[ce-2]=arguments[ce];return y.prototype[w].apply(b,A)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,y,E){E||(E=0);const b=Array(16);if(typeof y=="string")for(var w=0;w<16;++w)b[w]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(w=0;w<16;++w)b[w]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=v.g[0],E=v.g[1],w=v.g[2];let R=v.g[3],A;A=y+(R^E&(w^R))+b[0]+3614090360&4294967295,y=E+(A<<7&4294967295|A>>>25),A=R+(w^y&(E^w))+b[1]+3905402710&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(E^R&(y^E))+b[2]+606105819&4294967295,w=R+(A<<17&4294967295|A>>>15),A=E+(y^w&(R^y))+b[3]+3250441966&4294967295,E=w+(A<<22&4294967295|A>>>10),A=y+(R^E&(w^R))+b[4]+4118548399&4294967295,y=E+(A<<7&4294967295|A>>>25),A=R+(w^y&(E^w))+b[5]+1200080426&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(E^R&(y^E))+b[6]+2821735955&4294967295,w=R+(A<<17&4294967295|A>>>15),A=E+(y^w&(R^y))+b[7]+4249261313&4294967295,E=w+(A<<22&4294967295|A>>>10),A=y+(R^E&(w^R))+b[8]+1770035416&4294967295,y=E+(A<<7&4294967295|A>>>25),A=R+(w^y&(E^w))+b[9]+2336552879&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(E^R&(y^E))+b[10]+4294925233&4294967295,w=R+(A<<17&4294967295|A>>>15),A=E+(y^w&(R^y))+b[11]+2304563134&4294967295,E=w+(A<<22&4294967295|A>>>10),A=y+(R^E&(w^R))+b[12]+1804603682&4294967295,y=E+(A<<7&4294967295|A>>>25),A=R+(w^y&(E^w))+b[13]+4254626195&4294967295,R=y+(A<<12&4294967295|A>>>20),A=w+(E^R&(y^E))+b[14]+2792965006&4294967295,w=R+(A<<17&4294967295|A>>>15),A=E+(y^w&(R^y))+b[15]+1236535329&4294967295,E=w+(A<<22&4294967295|A>>>10),A=y+(w^R&(E^w))+b[1]+4129170786&4294967295,y=E+(A<<5&4294967295|A>>>27),A=R+(E^w&(y^E))+b[6]+3225465664&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^E&(R^y))+b[11]+643717713&4294967295,w=R+(A<<14&4294967295|A>>>18),A=E+(R^y&(w^R))+b[0]+3921069994&4294967295,E=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(E^w))+b[5]+3593408605&4294967295,y=E+(A<<5&4294967295|A>>>27),A=R+(E^w&(y^E))+b[10]+38016083&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^E&(R^y))+b[15]+3634488961&4294967295,w=R+(A<<14&4294967295|A>>>18),A=E+(R^y&(w^R))+b[4]+3889429448&4294967295,E=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(E^w))+b[9]+568446438&4294967295,y=E+(A<<5&4294967295|A>>>27),A=R+(E^w&(y^E))+b[14]+3275163606&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^E&(R^y))+b[3]+4107603335&4294967295,w=R+(A<<14&4294967295|A>>>18),A=E+(R^y&(w^R))+b[8]+1163531501&4294967295,E=w+(A<<20&4294967295|A>>>12),A=y+(w^R&(E^w))+b[13]+2850285829&4294967295,y=E+(A<<5&4294967295|A>>>27),A=R+(E^w&(y^E))+b[2]+4243563512&4294967295,R=y+(A<<9&4294967295|A>>>23),A=w+(y^E&(R^y))+b[7]+1735328473&4294967295,w=R+(A<<14&4294967295|A>>>18),A=E+(R^y&(w^R))+b[12]+2368359562&4294967295,E=w+(A<<20&4294967295|A>>>12),A=y+(E^w^R)+b[5]+4294588738&4294967295,y=E+(A<<4&4294967295|A>>>28),A=R+(y^E^w)+b[8]+2272392833&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^E)+b[11]+1839030562&4294967295,w=R+(A<<16&4294967295|A>>>16),A=E+(w^R^y)+b[14]+4259657740&4294967295,E=w+(A<<23&4294967295|A>>>9),A=y+(E^w^R)+b[1]+2763975236&4294967295,y=E+(A<<4&4294967295|A>>>28),A=R+(y^E^w)+b[4]+1272893353&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^E)+b[7]+4139469664&4294967295,w=R+(A<<16&4294967295|A>>>16),A=E+(w^R^y)+b[10]+3200236656&4294967295,E=w+(A<<23&4294967295|A>>>9),A=y+(E^w^R)+b[13]+681279174&4294967295,y=E+(A<<4&4294967295|A>>>28),A=R+(y^E^w)+b[0]+3936430074&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^E)+b[3]+3572445317&4294967295,w=R+(A<<16&4294967295|A>>>16),A=E+(w^R^y)+b[6]+76029189&4294967295,E=w+(A<<23&4294967295|A>>>9),A=y+(E^w^R)+b[9]+3654602809&4294967295,y=E+(A<<4&4294967295|A>>>28),A=R+(y^E^w)+b[12]+3873151461&4294967295,R=y+(A<<11&4294967295|A>>>21),A=w+(R^y^E)+b[15]+530742520&4294967295,w=R+(A<<16&4294967295|A>>>16),A=E+(w^R^y)+b[2]+3299628645&4294967295,E=w+(A<<23&4294967295|A>>>9),A=y+(w^(E|~R))+b[0]+4096336452&4294967295,y=E+(A<<6&4294967295|A>>>26),A=R+(E^(y|~w))+b[7]+1126891415&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~E))+b[14]+2878612391&4294967295,w=R+(A<<15&4294967295|A>>>17),A=E+(R^(w|~y))+b[5]+4237533241&4294967295,E=w+(A<<21&4294967295|A>>>11),A=y+(w^(E|~R))+b[12]+1700485571&4294967295,y=E+(A<<6&4294967295|A>>>26),A=R+(E^(y|~w))+b[3]+2399980690&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~E))+b[10]+4293915773&4294967295,w=R+(A<<15&4294967295|A>>>17),A=E+(R^(w|~y))+b[1]+2240044497&4294967295,E=w+(A<<21&4294967295|A>>>11),A=y+(w^(E|~R))+b[8]+1873313359&4294967295,y=E+(A<<6&4294967295|A>>>26),A=R+(E^(y|~w))+b[15]+4264355552&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~E))+b[6]+2734768916&4294967295,w=R+(A<<15&4294967295|A>>>17),A=E+(R^(w|~y))+b[13]+1309151649&4294967295,E=w+(A<<21&4294967295|A>>>11),A=y+(w^(E|~R))+b[4]+4149444226&4294967295,y=E+(A<<6&4294967295|A>>>26),A=R+(E^(y|~w))+b[11]+3174756917&4294967295,R=y+(A<<10&4294967295|A>>>22),A=w+(y^(R|~E))+b[2]+718787259&4294967295,w=R+(A<<15&4294967295|A>>>17),A=E+(R^(w|~y))+b[9]+3951481745&4294967295,v.g[0]=v.g[0]+y&4294967295,v.g[1]=v.g[1]+(w+(A<<21&4294967295|A>>>11))&4294967295,v.g[2]=v.g[2]+w&4294967295,v.g[3]=v.g[3]+R&4294967295}i.prototype.v=function(v,y){y===void 0&&(y=v.length);const E=y-this.blockSize,b=this.C;let w=this.h,R=0;for(;R<y;){if(w==0)for(;R<=E;)r(this,v,R),R+=this.blockSize;if(typeof v=="string"){for(;R<y;)if(b[w++]=v.charCodeAt(R++),w==this.blockSize){r(this,b),w=0;break}}else for(;R<y;)if(b[w++]=v[R++],w==this.blockSize){r(this,b),w=0;break}}this.h=w,this.o+=y},i.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var y=1;y<v.length-8;++y)v[y]=0;y=this.o*8;for(var E=v.length-8;E<v.length;++E)v[E]=y&255,y/=256;for(this.v(v),v=Array(16),y=0,E=0;E<4;++E)for(let b=0;b<32;b+=8)v[y++]=this.g[E]>>>b&255;return v};function s(v,y){var E=l;return Object.prototype.hasOwnProperty.call(E,v)?E[v]:E[v]=y(v)}function a(v,y){this.h=y;const E=[];let b=!0;for(let w=v.length-1;w>=0;w--){const R=v[w]|0;b&&R==y||(E[w]=R,b=!1)}this.g=E}var l={};function u(v){return-128<=v&&v<128?s(v,function(y){return new a([y|0],y<0?-1:0)}):new a([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return m;if(v<0)return L(c(-v));const y=[];let E=1;for(let b=0;v>=E;b++)y[b]=v/E|0,E*=4294967296;return new a(y,0)}function d(v,y){if(v.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(v.charAt(0)=="-")return L(d(v.substring(1),y));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=c(Math.pow(y,8));let b=m;for(let R=0;R<v.length;R+=8){var w=Math.min(8,v.length-R);const A=parseInt(v.substring(R,R+w),y);w<8?(w=c(Math.pow(y,w)),b=b.j(w).add(c(A))):(b=b.j(E),b=b.add(c(A)))}return b}var m=u(0),g=u(1),_=u(16777216);e=a.prototype,e.m=function(){if(M(this))return-L(this).m();let v=0,y=1;for(let E=0;E<this.g.length;E++){const b=this.i(E);v+=(b>=0?b:4294967296+b)*y,y*=4294967296}return v},e.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(M(this))return"-"+L(this).toString(v);const y=c(Math.pow(v,6));var E=this;let b="";for(;;){const w=N(E,y).g;E=S(E,w.j(y));let R=((E.g.length>0?E.g[0]:E.h)>>>0).toString(v);if(E=w,D(E))return R+b;for(;R.length<6;)R="0"+R;b=R+b}},e.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let y=0;y<v.g.length;y++)if(v.g[y]!=0)return!1;return!0}function M(v){return v.h==-1}e.l=function(v){return v=S(this,v),M(v)?-1:D(v)?0:1};function L(v){const y=v.g.length,E=[];for(let b=0;b<y;b++)E[b]=~v.g[b];return new a(E,~v.h).add(g)}e.abs=function(){return M(this)?L(this):this},e.add=function(v){const y=Math.max(this.g.length,v.g.length),E=[];let b=0;for(let w=0;w<=y;w++){let R=b+(this.i(w)&65535)+(v.i(w)&65535),A=(R>>>16)+(this.i(w)>>>16)+(v.i(w)>>>16);b=A>>>16,R&=65535,A&=65535,E[w]=A<<16|R}return new a(E,E[E.length-1]&-2147483648?-1:0)};function S(v,y){return v.add(L(y))}e.j=function(v){if(D(this)||D(v))return m;if(M(this))return M(v)?L(this).j(L(v)):L(L(this).j(v));if(M(v))return L(this.j(L(v)));if(this.l(_)<0&&v.l(_)<0)return c(this.m()*v.m());const y=this.g.length+v.g.length,E=[];for(var b=0;b<2*y;b++)E[b]=0;for(b=0;b<this.g.length;b++)for(let w=0;w<v.g.length;w++){const R=this.i(b)>>>16,A=this.i(b)&65535,ce=v.i(w)>>>16,cn=v.i(w)&65535;E[2*b+2*w]+=A*cn,T(E,2*b+2*w),E[2*b+2*w+1]+=R*cn,T(E,2*b+2*w+1),E[2*b+2*w+1]+=A*ce,T(E,2*b+2*w+1),E[2*b+2*w+2]+=R*ce,T(E,2*b+2*w+2)}for(v=0;v<y;v++)E[v]=E[2*v+1]<<16|E[2*v];for(v=y;v<2*y;v++)E[v]=0;return new a(E,0)};function T(v,y){for(;(v[y]&65535)!=v[y];)v[y+1]+=v[y]>>>16,v[y]&=65535,y++}function I(v,y){this.g=v,this.h=y}function N(v,y){if(D(y))throw Error("division by zero");if(D(v))return new I(m,m);if(M(v))return y=N(L(v),y),new I(L(y.g),L(y.h));if(M(y))return y=N(v,L(y)),new I(L(y.g),y.h);if(v.g.length>30){if(M(v)||M(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,b=y;b.l(v)<=0;)E=x(E),b=x(b);var w=j(E,1),R=j(b,1);for(b=j(b,2),E=j(E,2);!D(b);){var A=R.add(b);A.l(v)<=0&&(w=w.add(E),R=A),b=j(b,1),E=j(E,1)}return y=S(v,w.j(y)),new I(w,y)}for(w=m;v.l(y)>=0;){for(E=Math.max(1,Math.floor(v.m()/y.m())),b=Math.ceil(Math.log(E)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),R=c(E),A=R.j(y);M(A)||A.l(v)>0;)E-=b,R=c(E),A=R.j(y);D(R)&&(R=g),w=w.add(R),v=S(v,A)}return new I(w,v)}e.B=function(v){return N(this,v).h},e.and=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let b=0;b<y;b++)E[b]=this.i(b)&v.i(b);return new a(E,this.h&v.h)},e.or=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let b=0;b<y;b++)E[b]=this.i(b)|v.i(b);return new a(E,this.h|v.h)},e.xor=function(v){const y=Math.max(this.g.length,v.g.length),E=[];for(let b=0;b<y;b++)E[b]=this.i(b)^v.i(b);return new a(E,this.h^v.h)};function x(v){const y=v.g.length+1,E=[];for(let b=0;b<y;b++)E[b]=v.i(b)<<1|v.i(b-1)>>>31;return new a(E,v.h)}function j(v,y){const E=y>>5;y%=32;const b=v.g.length-E,w=[];for(let R=0;R<b;R++)w[R]=y>0?v.i(R+E)>>>y|v.i(R+E+1)<<32-y:v.i(R+E);return new a(w,v.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,YS=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=d,Yi=a}).apply(typeof Rv<"u"?Rv:typeof self<"u"?self:typeof window<"u"?window:{});var $l=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $S,Za,XS,Au,Hd,JS,WS,ZS;(function(){var e,t=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof $l=="object"&&$l];for(var h=0;h<o.length;++h){var f=o[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var i=n(this);function r(o,h){if(h)t:{var f=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var C=o[p];if(!(C in f))break t;f=f[C]}o=o[o.length-1],p=f[o],h=h(p),h!=p&&h!=null&&t(f,o,{configurable:!0,writable:!0,value:h})}}r("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(o){return o||function(h){var f=[],p;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&f.push([p,h[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function u(o,h,f){return o.call.apply(o.bind,arguments)}function c(o,h,f){return c=u,c.apply(null,arguments)}function d(o,h){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function m(o,h){function f(){}f.prototype=h.prototype,o.Z=h.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,C,O){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return h.prototype[C].apply(p,U)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function _(o){const h=o.length;if(h>0){const f=Array(h);for(let p=0;p<h;p++)f[p]=o[p];return f}return[]}function D(o,h){for(let p=1;p<arguments.length;p++){const C=arguments[p];var f=typeof C;if(f=f!="object"?f:C?Array.isArray(C)?"array":f:"null",f=="array"||f=="object"&&typeof C.length=="number"){f=o.length||0;const O=C.length||0;o.length=f+O;for(let U=0;U<O;U++)o[f+U]=C[U]}else o.push(C)}}class M{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(o){a.setTimeout(()=>{throw o},0)}function S(){var o=v;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class T{constructor(){this.h=this.g=null}add(h,f){const p=I.get();p.set(h,f),this.h?this.h.next=p:this.g=p,this.h=p}}var I=new M(()=>new N,o=>o.reset());class N{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let x,j=!1,v=new T,y=()=>{const o=Promise.resolve(void 0);x=()=>{o.then(E)}};function E(){for(var o;o=S();){try{o.h.call(o.g)}catch(f){L(f)}var h=I;h.j(o),h.h<100&&(h.h++,o.next=h.g,h.g=o)}j=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function w(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,h),a.removeEventListener("test",f,h)}catch{}return o}();function A(o){return/^[\s\xa0]*$/.test(o)}function ce(o,h){w.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,h)}m(ce,w),ce.prototype.init=function(o,h){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget,h||(f=="mouseover"?h=o.fromElement:f=="mouseout"&&(h=o.toElement)),this.relatedTarget=h,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ce.Z.h.call(this)},ce.prototype.h=function(){ce.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),q=0;function tt(o,h,f,p,C){this.listener=o,this.proxy=null,this.src=h,this.type=f,this.capture=!!p,this.ha=C,this.key=++q,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function vt(o,h,f){for(const p in o)h.call(f,o[p],p,o)}function xt(o,h){for(const f in o)h.call(void 0,o[f],f,o)}function gr(o){const h={};for(const f in o)h[f]=o[f];return h}const pr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function as(o,h){let f,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(f in p)o[f]=p[f];for(let O=0;O<pr.length;O++)f=pr[O],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function Qe(o){this.src=o,this.g={},this.h=0}Qe.prototype.add=function(o,h,f,p,C){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const U=dh(o,h,p,C);return U>-1?(h=o[U],f||(h.fa=!1)):(h=new tt(h,this.src,O,!!p,C),h.fa=f,o.push(h)),h};function mi(o,h){const f=h.type;if(f in o.g){var p=o.g[f],C=Array.prototype.indexOf.call(p,h,void 0),O;(O=C>=0)&&Array.prototype.splice.call(p,C,1),O&&(X(h),o.g[f].length==0&&(delete o.g[f],o.h--))}}function dh(o,h,f,p){for(let C=0;C<o.length;++C){const O=o[C];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==p)return C}return-1}var mh="closure_lm_"+(Math.random()*1e6|0),gh={};function gp(o,h,f,p,C){if(Array.isArray(h)){for(let O=0;O<h.length;O++)gp(o,h[O],f,p,C);return null}return f=_p(f),o&&o[cn]?o.J(h,f,l(p)?!!p.capture:!1,C):Dw(o,h,f,!1,p,C)}function Dw(o,h,f,p,C,O){if(!h)throw Error("Invalid event type");const U=l(C)?!!C.capture:!!C;let Z=yh(o);if(Z||(o[mh]=Z=new Qe(o)),f=Z.add(h,f,p,U,O),f.proxy)return f;if(p=Ow(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)R||(C=U),C===void 0&&(C=!1),o.addEventListener(h.toString(),p,C);else if(o.attachEvent)o.attachEvent(yp(h.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ow(){function o(f){return h.call(o.src,o.listener,f)}const h=Nw;return o}function pp(o,h,f,p,C){if(Array.isArray(h))for(var O=0;O<h.length;O++)pp(o,h[O],f,p,C);else p=l(p)?!!p.capture:!!p,f=_p(f),o&&o[cn]?(o=o.i,O=String(h).toString(),O in o.g&&(h=o.g[O],f=dh(h,f,p,C),f>-1&&(X(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete o.g[O],o.h--)))):o&&(o=yh(o))&&(h=o.g[h.toString()],o=-1,h&&(o=dh(h,f,p,C)),(f=o>-1?h[o]:null)&&ph(f))}function ph(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[cn])mi(h.i,o);else{var f=o.type,p=o.proxy;h.removeEventListener?h.removeEventListener(f,p,o.capture):h.detachEvent?h.detachEvent(yp(f),p):h.addListener&&h.removeListener&&h.removeListener(p),(f=yh(h))?(mi(f,o),f.h==0&&(f.src=null,h[mh]=null)):X(o)}}}function yp(o){return o in gh?gh[o]:gh[o]="on"+o}function Nw(o,h){if(o.da)o=!0;else{h=new ce(h,this);const f=o.listener,p=o.ha||o.src;o.fa&&ph(o),o=f.call(p,h)}return o}function yh(o){return o=o[mh],o instanceof Qe?o:null}var _h="__closure_events_fn_"+(Math.random()*1e9>>>0);function _p(o){return typeof o=="function"?o:(o[_h]||(o[_h]=function(h){return o.handleEvent(h)}),o[_h])}function he(){b.call(this),this.i=new Qe(this),this.M=this,this.G=null}m(he,b),he.prototype[cn]=!0,he.prototype.removeEventListener=function(o,h,f,p){pp(this,o,h,f,p)};function pe(o,h){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=h.type||h,typeof h=="string")h=new w(h,o);else if(h instanceof w)h.target=h.target||o;else{var C=h;h=new w(p,o),as(h,C)}C=!0;let O,U;if(f)for(U=f.length-1;U>=0;U--)O=h.g=f[U],C=El(O,p,!0,h)&&C;if(O=h.g=o,C=El(O,p,!0,h)&&C,C=El(O,p,!1,h)&&C,f)for(U=0;U<f.length;U++)O=h.g=f[U],C=El(O,p,!1,h)&&C}he.prototype.N=function(){if(he.Z.N.call(this),this.i){var o=this.i;for(const h in o.g){const f=o.g[h];for(let p=0;p<f.length;p++)X(f[p]);delete o.g[h],o.h--}}this.G=null},he.prototype.J=function(o,h,f,p){return this.i.add(String(o),h,!1,f,p)},he.prototype.K=function(o,h,f,p){return this.i.add(String(o),h,!0,f,p)};function El(o,h,f,p){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();let C=!0;for(let O=0;O<h.length;++O){const U=h[O];if(U&&!U.da&&U.capture==f){const Z=U.listener,Kt=U.ha||U.src;U.fa&&mi(o.i,U),C=Z.call(Kt,p)!==!1&&C}}return C&&!p.defaultPrevented}function Mw(o,h){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=c(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:a.setTimeout(o,h||0)}function vp(o){o.g=Mw(()=>{o.g=null,o.i&&(o.i=!1,vp(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Vw extends b{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:vp(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Aa(o){b.call(this),this.h=o,this.g={}}m(Aa,b);var Ep=[];function Tp(o){vt(o.g,function(h,f){this.g.hasOwnProperty(f)&&ph(h)},o),o.g={}}Aa.prototype.N=function(){Aa.Z.N.call(this),Tp(this)},Aa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vh=a.JSON.stringify,Pw=a.JSON.parse,kw=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ap(){}function Sp(){}var Sa={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Eh(){w.call(this,"d")}m(Eh,w);function Th(){w.call(this,"c")}m(Th,w);var yr={},bp=null;function Tl(){return bp=bp||new he}yr.Ia="serverreachability";function wp(o){w.call(this,yr.Ia,o)}m(wp,w);function ba(o){const h=Tl();pe(h,new wp(h))}yr.STAT_EVENT="statevent";function Ip(o,h){w.call(this,yr.STAT_EVENT,o),this.stat=h}m(Ip,w);function ye(o){const h=Tl();pe(h,new Ip(h,o))}yr.Ja="timingevent";function Rp(o,h){w.call(this,yr.Ja,o),this.size=h}m(Rp,w);function wa(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},h)}function Ia(){this.g=!0}Ia.prototype.ua=function(){this.g=!1};function Lw(o,h,f,p,C,O){o.info(function(){if(o.g)if(O){var U="",Z=O.split("&");for(let yt=0;yt<Z.length;yt++){var Kt=Z[yt].split("=");if(Kt.length>1){const Xt=Kt[0];Kt=Kt[1];const Tn=Xt.split("_");U=Tn.length>=2&&Tn[1]=="type"?U+(Xt+"="+Kt+"&"):U+(Xt+"=redacted&")}}}else U=null;else U=O;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+h+`
`+f+`
`+U})}function Uw(o,h,f,p,C,O,U){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+h+`
`+f+`
`+O+" "+U})}function os(o,h,f,p){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+zw(o,f)+(p?" "+p:"")})}function xw(o,h){o.info(function(){return"TIMEOUT: "+h})}Ia.prototype.info=function(){};function zw(o,h){if(!o.g)return h;if(!h)return null;try{const O=JSON.parse(h);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var f=O[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var C=p[0];if(C!="noop"&&C!="stop"&&C!="close")for(let U=1;U<p.length;U++)p[U]=""}}}}return vh(O)}catch{return h}}var Al={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Cp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dp;function Ah(){}m(Ah,Ap),Ah.prototype.g=function(){return new XMLHttpRequest},Dp=new Ah;function Ra(o){return encodeURIComponent(String(o))}function Bw(o){var h=1;o=o.split(":");const f=[];for(;h>0&&o.length;)f.push(o.shift()),h--;return o.length&&f.push(o.join(":")),f}function gi(o,h,f,p){this.j=o,this.i=h,this.l=f,this.S=p||1,this.V=new Aa(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Op}function Op(){this.i=null,this.g="",this.h=!1}var Np={},Sh={};function bh(o,h,f){o.M=1,o.A=bl(En(h)),o.u=f,o.R=!0,Mp(o,null)}function Mp(o,h){o.F=Date.now(),Sl(o),o.B=En(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),Gp(f.i,"t",p),o.C=0,f=o.j.L,o.h=new Op,o.g=uy(o.j,f?h:null,!o.u),o.P>0&&(o.O=new Vw(c(o.Y,o,o.g),o.P)),h=o.V,f=o.g,p=o.ba;var C="readystatechange";Array.isArray(C)||(C&&(Ep[0]=C.toString()),C=Ep);for(let O=0;O<C.length;O++){const U=gp(f,C[O],p||h.handleEvent,!1,h.h||h);if(!U)break;h.g[U.key]=U}h=o.J?gr(o.J):{},o.u?(o.v||(o.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,h)):(o.v="GET",o.g.ea(o.B,o.v,null,h)),ba(),Lw(o.i,o.v,o.B,o.l,o.S,o.u)}gi.prototype.ba=function(o){o=o.target;const h=this.O;h&&_i(o)==3?h.j():this.Y(o)},gi.prototype.Y=function(o){try{if(o==this.g)t:{const Z=_i(this.g),Kt=this.g.ya(),yt=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Wp(this.g)))){this.K||Z!=4||Kt==7||(Kt==8||yt<=0?ba(3):ba(2)),wh(this);var h=this.g.ca();this.X=h;var f=qw(this);if(this.o=h==200,Uw(this.i,this.v,this.B,this.l,this.S,Z,h),this.o){if(this.U&&!this.L){e:{if(this.g){var p,C=this.g;if((p=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(p)){var O=p;break e}}O=null}if(o=O)os(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ih(this,o);else{this.o=!1,this.m=3,ye(12),_r(this),Ca(this);break t}}if(this.R){o=!0;let Xt;for(;!this.K&&this.C<f.length;)if(Xt=jw(this,f),Xt==Sh){Z==4&&(this.m=4,ye(14),o=!1),os(this.i,this.l,null,"[Incomplete Response]");break}else if(Xt==Np){this.m=4,ye(15),os(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else os(this.i,this.l,Xt,null),Ih(this,Xt);if(Vp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||f.length!=0||this.h.h||(this.m=1,ye(16),o=!1),this.o=this.o&&o,!o)os(this.i,this.l,f,"[Invalid Chunked Response]"),_r(this),Ca(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ph(U),U.P=!0,ye(11))}}else os(this.i,this.l,f,null),Ih(this,f);Z==4&&_r(this),this.o&&!this.K&&(Z==4?sy(this.j,this):(this.o=!1,Sl(this)))}else n1(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ye(12)):(this.m=0,ye(13)),_r(this),Ca(this)}}}catch{}finally{}};function qw(o){if(!Vp(o))return o.g.la();const h=Wp(o.g);if(h==="")return"";let f="";const p=h.length,C=_i(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return _r(o),Ca(o),"";o.h.i=new a.TextDecoder}for(let O=0;O<p;O++)o.h.h=!0,f+=o.h.i.decode(h[O],{stream:!(C&&O==p-1)});return h.length=0,o.h.g+=f,o.C=0,o.h.g}function Vp(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function jw(o,h){var f=o.C,p=h.indexOf(`
`,f);return p==-1?Sh:(f=Number(h.substring(f,p)),isNaN(f)?Np:(p+=1,p+f>h.length?Sh:(h=h.slice(p,p+f),o.C=p+f,h)))}gi.prototype.cancel=function(){this.K=!0,_r(this)};function Sl(o){o.T=Date.now()+o.H,Pp(o,o.H)}function Pp(o,h){if(o.D!=null)throw Error("WatchDog timer not null");o.D=wa(c(o.aa,o),h)}function wh(o){o.D&&(a.clearTimeout(o.D),o.D=null)}gi.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(xw(this.i,this.B),this.M!=2&&(ba(),ye(17)),_r(this),this.m=2,Ca(this)):Pp(this,this.T-o)};function Ca(o){o.j.I==0||o.K||sy(o.j,o)}function _r(o){wh(o);var h=o.O;h&&typeof h.dispose=="function"&&h.dispose(),o.O=null,Tp(o.V),o.g&&(h=o.g,o.g=null,h.abort(),h.dispose())}function Ih(o,h){try{var f=o.j;if(f.I!=0&&(f.g==o||Rh(f.h,o))){if(!o.L&&Rh(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(h)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){t:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Dl(f),Rl(f);else break t;Vh(f),ye(18)}}else f.xa=C[1],0<f.xa-f.K&&C[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=wa(c(f.Va,f),6e3));Up(f.h)<=1&&f.ta&&(f.ta=void 0)}else Er(f,11)}else if((o.L||f.g==o)&&Dl(f),!A(h))for(C=f.Ba.g.parse(h),h=0;h<C.length;h++){let yt=C[h];const Xt=yt[0];if(!(Xt<=f.K))if(f.K=Xt,yt=yt[1],f.I==2)if(yt[0]=="c"){f.M=yt[1],f.ba=yt[2];const Tn=yt[3];Tn!=null&&(f.ka=Tn,f.j.info("VER="+f.ka));const Tr=yt[4];Tr!=null&&(f.za=Tr,f.j.info("SVER="+f.za));const vi=yt[5];vi!=null&&typeof vi=="number"&&vi>0&&(p=1.5*vi,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Ei=o.g;if(Ei){const Nl=Ei.g?Ei.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nl){var O=p.h;O.g||Nl.indexOf("spdy")==-1&&Nl.indexOf("quic")==-1&&Nl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ch(O,O.h),O.h=null))}if(p.G){const kh=Ei.g?Ei.g.getResponseHeader("X-HTTP-Session-Id"):null;kh&&(p.wa=kh,At(p.J,p.G,kh))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var U=o;if(p.na=ly(p,p.L?p.ba:null,p.W),U.L){xp(p.h,U);var Z=U,Kt=p.O;Kt&&(Z.H=Kt),Z.D&&(wh(Z),Sl(Z)),p.g=U}else iy(p);f.i.length>0&&Cl(f)}else yt[0]!="stop"&&yt[0]!="close"||Er(f,7);else f.I==3&&(yt[0]=="stop"||yt[0]=="close"?yt[0]=="stop"?Er(f,7):Mh(f):yt[0]!="noop"&&f.l&&f.l.qa(yt),f.A=0)}}ba(4)}catch{}}var Fw=class{constructor(o,h){this.g=o,this.map=h}};function kp(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Lp(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Up(o){return o.h?1:o.g?o.g.size:0}function Rh(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Ch(o,h){o.g?o.g.add(h):o.h=h}function xp(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}kp.prototype.cancel=function(){if(this.i=zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zp(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const f of o.g.values())h=h.concat(f.G);return h}return _(o.i)}var Bp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hw(o,h){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let C,O=null;p>=0?(C=o[f].substring(0,p),O=o[f].substring(p+1)):C=o[f],h(C,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function pi(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;o instanceof pi?(this.l=o.l,Da(this,o.j),this.o=o.o,this.g=o.g,Oa(this,o.u),this.h=o.h,Dh(this,Kp(o.i)),this.m=o.m):o&&(h=String(o).match(Bp))?(this.l=!1,Da(this,h[1]||"",!0),this.o=Na(h[2]||""),this.g=Na(h[3]||"",!0),Oa(this,h[4]),this.h=Na(h[5]||"",!0),Dh(this,h[6]||"",!0),this.m=Na(h[7]||"")):(this.l=!1,this.i=new Va(null,this.l))}pi.prototype.toString=function(){const o=[];var h=this.j;h&&o.push(Ma(h,qp,!0),":");var f=this.g;return(f||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Ma(h,qp,!0),"@"),o.push(Ra(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ma(f,f.charAt(0)=="/"?Qw:Kw,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ma(f,$w)),o.join("")},pi.prototype.resolve=function(o){const h=En(this);let f=!!o.j;f?Da(h,o.j):f=!!o.o,f?h.o=o.o:f=!!o.g,f?h.g=o.g:f=o.u!=null;var p=o.h;if(f)Oa(h,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var C=h.h.lastIndexOf("/");C!=-1&&(p=h.h.slice(0,C+1)+p)}if(C=p,C==".."||C==".")p="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){p=C.lastIndexOf("/",0)==0,C=C.split("/");const O=[];for(let U=0;U<C.length;){const Z=C[U++];Z=="."?p&&U==C.length&&O.push(""):Z==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),p&&U==C.length&&O.push("")):(O.push(Z),p=!0)}p=O.join("/")}else p=C}return f?h.h=p:f=o.i.toString()!=="",f?Dh(h,Kp(o.i)):f=!!o.m,f&&(h.m=o.m),h};function En(o){return new pi(o)}function Da(o,h,f){o.j=f?Na(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Oa(o,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);o.u=h}else o.u=null}function Dh(o,h,f){h instanceof Va?(o.i=h,Xw(o.i,o.l)):(f||(h=Ma(h,Yw)),o.i=new Va(h,o.l))}function At(o,h,f){o.i.set(h,f)}function bl(o){return At(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Na(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ma(o,h,f){return typeof o=="string"?(o=encodeURI(o).replace(h,Gw),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Gw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qp=/[#\/\?@]/g,Kw=/[#\?:]/g,Qw=/[#\?]/g,Yw=/[#\?@]/g,$w=/#/g;function Va(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function vr(o){o.g||(o.g=new Map,o.h=0,o.i&&Hw(o.i,function(h,f){o.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}e=Va.prototype,e.add=function(o,h){vr(this),this.i=null,o=ls(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(h),this.h+=1,this};function jp(o,h){vr(o),h=ls(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Fp(o,h){return vr(o),h=ls(o,h),o.g.has(h)}e.forEach=function(o,h){vr(this),this.g.forEach(function(f,p){f.forEach(function(C){o.call(h,C,p,this)},this)},this)};function Hp(o,h){vr(o);let f=[];if(typeof h=="string")Fp(o,h)&&(f=f.concat(o.g.get(ls(o,h))));else for(o=Array.from(o.g.values()),h=0;h<o.length;h++)f=f.concat(o[h]);return f}e.set=function(o,h){return vr(this),this.i=null,o=ls(this,o),Fp(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},e.get=function(o,h){return o?(o=Hp(this,o),o.length>0?String(o[0]):h):h};function Gp(o,h,f){jp(o,h),f.length>0&&(o.i=null,o.g.set(ls(o,h),_(f)),o.h+=f.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(let p=0;p<h.length;p++){var f=h[p];const C=Ra(f);f=Hp(this,f);for(let O=0;O<f.length;O++){let U=C;f[O]!==""&&(U+="="+Ra(f[O])),o.push(U)}}return this.i=o.join("&")};function Kp(o){const h=new Va;return h.i=o.i,o.g&&(h.g=new Map(o.g),h.h=o.h),h}function ls(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function Xw(o,h){h&&!o.j&&(vr(o),o.i=null,o.g.forEach(function(f,p){const C=p.toLowerCase();p!=C&&(jp(this,p),Gp(this,C,f))},o)),o.j=h}function Jw(o,h){const f=new Ia;if(a.Image){const p=new Image;p.onload=d(yi,f,"TestLoadImage: loaded",!0,h,p),p.onerror=d(yi,f,"TestLoadImage: error",!1,h,p),p.onabort=d(yi,f,"TestLoadImage: abort",!1,h,p),p.ontimeout=d(yi,f,"TestLoadImage: timeout",!1,h,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else h(!1)}function Ww(o,h){const f=new Ia,p=new AbortController,C=setTimeout(()=>{p.abort(),yi(f,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(C),O.ok?yi(f,"TestPingServer: ok",!0,h):yi(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),yi(f,"TestPingServer: error",!1,h)})}function yi(o,h,f,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(f)}catch{}}function Zw(){this.g=new kw}function Oh(o){this.i=o.Sb||null,this.h=o.ab||!1}m(Oh,Ap),Oh.prototype.g=function(){return new wl(this.i,this.h)};function wl(o,h){he.call(this),this.H=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}m(wl,he),e=wl.prototype,e.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=h,this.readyState=1,ka(this)},e.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(h.body=o),(this.H||a).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Pa(this)),this.readyState=0},e.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ka(this)),this.g&&(this.readyState=3,ka(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Qp(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Qp(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}e.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Pa(this):ka(this),this.readyState==3&&Qp(this)}},e.Oa=function(o){this.g&&(this.response=this.responseText=o,Pa(this))},e.Na=function(o){this.g&&(this.response=o,Pa(this))},e.ga=function(){this.g&&Pa(this)};function Pa(o){o.readyState=4,o.l=null,o.j=null,o.B=null,ka(o)}e.setRequestHeader=function(o,h){this.A.append(o,h)},e.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=h.next();return o.join(`\r
`)};function ka(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Yp(o){let h="";return vt(o,function(f,p){h+=p,h+=":",h+=f,h+=`\r
`}),h}function Nh(o,h,f){t:{for(p in f){var p=!1;break t}p=!0}p||(f=Yp(f),typeof o=="string"?f!=null&&Ra(f):At(o,h,f))}function Nt(o){he.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}m(Nt,he);var t1=/^https?$/i,e1=["POST","PUT"];e=Nt.prototype,e.Fa=function(o){this.H=o},e.ea=function(o,h,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dp.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(O){$p(this,O);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)f.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())f.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),C=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(e1,h,void 0)>=0)||p||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,U]of f)this.g.setRequestHeader(O,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){$p(this,O)}};function $p(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.o=5,Xp(o),Il(o)}function Xp(o){o.A||(o.A=!0,pe(o,"complete"),pe(o,"error"))}e.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,pe(this,"complete"),pe(this,"abort"),Il(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Il(this,!0)),Nt.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Jp(this):this.Xa())},e.Xa=function(){Jp(this)};function Jp(o){if(o.h&&typeof s<"u"){if(o.v&&_i(o)==4)setTimeout(o.Ca.bind(o),0);else if(pe(o,"readystatechange"),_i(o)==4){o.h=!1;try{const O=o.ca();t:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break t;default:h=!1}var f;if(!(f=h)){var p;if(p=O===0){let U=String(o.D).match(Bp)[1]||null;!U&&a.self&&a.self.location&&(U=a.self.location.protocol.slice(0,-1)),p=!t1.test(U?U.toLowerCase():"")}f=p}if(f)pe(o,"complete"),pe(o,"success");else{o.o=6;try{var C=_i(o)>2?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.ca()+"]",Xp(o)}}finally{Il(o)}}}}function Il(o,h){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,h||pe(o,"ready");try{f.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function _i(o){return o.g?o.g.readyState:0}e.ca=function(){try{return _i(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Pw(h)}};function Wp(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n1(o){const h={};o=(o.g&&_i(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(A(o[p]))continue;var f=Bw(o[p]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[C]||[];h[C]=O,O.push(f)}xt(h,function(p){return p.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function La(o,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||h}function Zp(o){this.za=0,this.i=[],this.j=new Ia,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=La("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=La("baseRetryDelayMs",5e3,o),this.Za=La("retryDelaySeedMs",1e4,o),this.Ta=La("forwardChannelMaxRetries",2,o),this.va=La("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new kp(o&&o.concurrentRequestLimit),this.Ba=new Zw,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=Zp.prototype,e.ka=8,e.I=1,e.connect=function(o,h,f,p){ye(0),this.W=o,this.H=h||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=ly(this,null,this.W),Cl(this)};function Mh(o){if(ty(o),o.I==3){var h=o.V++,f=En(o.J);if(At(f,"SID",o.M),At(f,"RID",h),At(f,"TYPE","terminate"),Ua(o,f),h=new gi(o,o.j,h),h.M=2,h.A=bl(En(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=h.A,f=!0),f||(h.g=uy(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Sl(h)}oy(o)}function Rl(o){o.g&&(Ph(o),o.g.cancel(),o.g=null)}function ty(o){Rl(o),o.v&&(a.clearTimeout(o.v),o.v=null),Dl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Cl(o){if(!Lp(o.h)&&!o.m){o.m=!0;var h=o.Ea;x||y(),j||(x(),j=!0),v.add(h,o),o.D=0}}function i1(o,h){return Up(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=h.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=wa(c(o.Ea,o,h),ay(o,o.D)),o.D++,!0)}e.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const C=new gi(this,this.j,o);let O=this.o;if(this.U&&(O?(O=gr(O),as(O,this.U)):O=this.U),this.u!==null||this.R||(C.J=O,O=null),this.S)t:{for(var h=0,f=0;f<this.i.length;f++){e:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break e}p=void 0}if(p===void 0)break;if(h+=p,h>4096){h=f;break t}if(h===4096||f===this.i.length-1){h=f+1;break t}}h=1e3}else h=1e3;h=ny(this,C,h),f=En(this.J),At(f,"RID",o),At(f,"CVER",22),this.G&&At(f,"X-HTTP-Session-Id",this.G),Ua(this,f),O&&(this.R?h="headers="+Ra(Yp(O))+"&"+h:this.u&&Nh(f,this.u,O)),Ch(this.h,C),this.Ra&&At(f,"TYPE","init"),this.S?(At(f,"$req",h),At(f,"SID","null"),C.U=!0,bh(C,f,null)):bh(C,f,h),this.I=2}}else this.I==3&&(o?ey(this,o):this.i.length==0||Lp(this.h)||ey(this))};function ey(o,h){var f;h?f=h.l:f=o.V++;const p=En(o.J);At(p,"SID",o.M),At(p,"RID",f),At(p,"AID",o.K),Ua(o,p),o.u&&o.o&&Nh(p,o.u,o.o),f=new gi(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),h&&(o.i=h.G.concat(o.i)),h=ny(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ch(o.h,f),bh(f,p,h)}function Ua(o,h){o.H&&vt(o.H,function(f,p){At(h,p,f)}),o.l&&vt({},function(f,p){At(h,p,f)})}function ny(o,h,f){f=Math.min(o.i.length,f);const p=o.l?c(o.l.Ka,o.l,o):null;t:{var C=o.i;let Z=-1;for(;;){const Kt=["count="+f];Z==-1?f>0?(Z=C[0].g,Kt.push("ofs="+Z)):Z=0:Kt.push("ofs="+Z);let yt=!0;for(let Xt=0;Xt<f;Xt++){var O=C[Xt].g;const Tn=C[Xt].map;if(O-=Z,O<0)Z=Math.max(0,C[Xt].g-100),yt=!1;else try{O="req"+O+"_"||"";try{var U=Tn instanceof Map?Tn:Object.entries(Tn);for(const[Tr,vi]of U){let Ei=vi;l(vi)&&(Ei=vh(vi)),Kt.push(O+Tr+"="+encodeURIComponent(Ei))}}catch(Tr){throw Kt.push(O+"type="+encodeURIComponent("_badmap")),Tr}}catch{p&&p(Tn)}}if(yt){U=Kt.join("&");break t}}U=void 0}return o=o.i.splice(0,f),h.G=o,U}function iy(o){if(!o.g&&!o.v){o.Y=1;var h=o.Da;x||y(),j||(x(),j=!0),v.add(h,o),o.A=0}}function Vh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=wa(c(o.Da,o),ay(o,o.A)),o.A++,!0)}e.Da=function(){if(this.v=null,ry(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=wa(c(this.Wa,this),o)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ye(10),Rl(this),ry(this))};function Ph(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function ry(o){o.g=new gi(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var h=En(o.na);At(h,"RID","rpc"),At(h,"SID",o.M),At(h,"AID",o.K),At(h,"CI",o.F?"0":"1"),!o.F&&o.ia&&At(h,"TO",o.ia),At(h,"TYPE","xmlhttp"),Ua(o,h),o.u&&o.o&&Nh(h,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=bl(En(h)),f.u=null,f.R=!0,Mp(f,o)}e.Va=function(){this.C!=null&&(this.C=null,Rl(this),Vh(this),ye(19))};function Dl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function sy(o,h){var f=null;if(o.g==h){Dl(o),Ph(o),o.g=null;var p=2}else if(Rh(o.h,h))f=h.G,xp(o.h,h),p=1;else return;if(o.I!=0){if(h.o)if(p==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var C=o.D;p=Tl(),pe(p,new Rp(p,f)),Cl(o)}else iy(o);else if(C=h.m,C==3||C==0&&h.X>0||!(p==1&&i1(o,h)||p==2&&Vh(o)))switch(f&&f.length>0&&(h=o.h,h.i=h.i.concat(f)),C){case 1:Er(o,5);break;case 4:Er(o,10);break;case 3:Er(o,6);break;default:Er(o,2)}}}function ay(o,h){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*h}function Er(o,h){if(o.j.info("Error code "+h),h==2){var f=c(o.bb,o),p=o.Ua;const C=!p;p=new pi(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Da(p,"https"),bl(p),C?Jw(p.toString(),f):Ww(p.toString(),f)}else ye(2);o.I=0,o.l&&o.l.pa(h),oy(o),ty(o)}e.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function oy(o){if(o.I=0,o.ja=[],o.l){const h=zp(o.h);(h.length!=0||o.i.length!=0)&&(D(o.ja,h),D(o.ja,o.i),o.h.i.length=0,_(o.i),o.i.length=0),o.l.oa()}}function ly(o,h,f){var p=f instanceof pi?En(f):new pi(f);if(p.g!="")h&&(p.g=h+"."+p.g),Oa(p,p.u);else{var C=a.location;p=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;const O=new pi(null);p&&Da(O,p),h&&(O.g=h),C&&Oa(O,C),f&&(O.h=f),p=O}return f=o.G,h=o.wa,f&&h&&At(p,f,h),At(p,"VER",o.ka),Ua(o,p),p}function uy(o,h,f){if(h&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Aa&&!o.ma?new Nt(new Oh({ab:f})):new Nt(o.ma),h.Fa(o.L),h}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function cy(){}e=cy.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Ol(){}Ol.prototype.g=function(o,h){return new Me(o,h)};function Me(o,h){he.call(this),this.g=new Zp(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(o?o["X-WebChannel-Client-Profile"]=h.sa:o={"X-WebChannel-Client-Profile":h.sa}),this.g.U=o,(o=h&&h.Qb)&&!A(o)&&(this.g.u=o),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!A(h)&&(this.g.G=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new us(this)}m(Me,he),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Mh(this.g)},Me.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=vh(o),o=f);h.i.push(new Fw(h.Ya++,o)),h.I==3&&Cl(h)},Me.prototype.N=function(){this.g.l=null,delete this.j,Mh(this.g),delete this.g,Me.Z.N.call(this)};function hy(o){Eh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){t:{for(const f in h){o=f;break t}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}m(hy,Eh);function fy(){Th.call(this),this.status=1}m(fy,Th);function us(o){this.g=o}m(us,cy),us.prototype.ra=function(){pe(this.g,"a")},us.prototype.qa=function(o){pe(this.g,new hy(o))},us.prototype.pa=function(o){pe(this.g,new fy)},us.prototype.oa=function(){pe(this.g,"b")},Ol.prototype.createWebChannel=Ol.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,ZS=function(){return new Ol},WS=function(){return Tl()},JS=yr,Hd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Al.NO_ERROR=0,Al.TIMEOUT=8,Al.HTTP_ERROR=6,Au=Al,Cp.COMPLETE="complete",XS=Cp,Sp.EventType=Sa,Sa.OPEN="a",Sa.CLOSE="b",Sa.ERROR="c",Sa.MESSAGE="d",he.prototype.listen=he.prototype.J,Za=Sp,Nt.prototype.listenOnce=Nt.prototype.K,Nt.prototype.getLastError=Nt.prototype.Ha,Nt.prototype.getLastErrorCode=Nt.prototype.ya,Nt.prototype.getStatus=Nt.prototype.ca,Nt.prototype.getResponseJson=Nt.prototype.La,Nt.prototype.getResponseText=Nt.prototype.la,Nt.prototype.send=Nt.prototype.ea,Nt.prototype.setWithCredentials=Nt.prototype.Fa,$S=Nt}).apply(typeof $l<"u"?$l:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}de.UNAUTHENTICATED=new de(null),de.GOOGLE_CREDENTIALS=new de("google-credentials-uid"),de.FIRST_PARTY=new de("first-party-uid"),de.MOCK_USER=new de("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ya="12.13.0";function OM(e){ya=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new Fc("@firebase/firestore");function gs(){return Yr.logLevel}function B(e,...t){if(Yr.logLevel<=st.DEBUG){const n=t.map(Og);Yr.debug(`Firestore (${ya}): ${e}`,...n)}}function ui(e,...t){if(Yr.logLevel<=st.ERROR){const n=t.map(Og);Yr.error(`Firestore (${ya}): ${e}`,...n)}}function $r(e,...t){if(Yr.logLevel<=st.WARN){const n=t.map(Og);Yr.warn(`Firestore (${ya}): ${e}`,...n)}}function Og(e){if(typeof e=="string")return e;try{return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){let i="Unexpected state";typeof t=="string"?i=t:n=t,tb(e,i,n)}function tb(e,t,n){let i=`FIRESTORE (${ya}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw ui(i),new Error(i)}function ft(e,t,n,i){let r="Unexpected state";typeof n=="string"?r=n:i=n,e||tb(t,r,i)}function $(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class NM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(de.UNAUTHENTICATED))}shutdown(){}}class MM{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VM{constructor(t){this.t=t,this.currentUser=de.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){ft(this.o===void 0,42304);let i=this.i;const r=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let s=new ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ti,t.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ti)}},0),a()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ft(typeof i.accessToken=="string",31837,{l:i}),new eb(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string",2055,{h:t}),new de(t)}}class PM{constructor(t,n,i){this.P=t,this.T=n,this.I=i,this.type="FirstParty",this.user=de.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class kM{constructor(t,n,i){this.P=t,this.T=n,this.I=i}getToken(){return Promise.resolve(new PM(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(de.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LM{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ue(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){ft(this.o===void 0,3512);const i=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Cv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Cv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UM(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=UM(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%62))}return i}}function it(e,t){return e<t?-1:e>t?1:0}function Gd(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const r=e.charAt(i),s=t.charAt(i);if(r!==s)return Of(r)===Of(s)?it(r,s):Of(r)?1:-1}return it(e.length,t.length)}const xM=55296,zM=57343;function Of(e){const t=e.charCodeAt(0);return t>=xM&&t<=zM}function ia(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv="__name__";class An{constructor(t,n,i){n===void 0?n=0:n>t.length&&G(637,{offset:n,range:t.length}),i===void 0?i=t.length-n:i>t.length-n&&G(1746,{length:i,range:t.length-n}),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return An.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof An?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=An.compareSegments(t.get(r),n.get(r));if(s!==0)return s}return it(t.length,n.length)}static compareSegments(t,n){const i=An.isNumericId(t),r=An.isNumericId(n);return i&&!r?-1:!i&&r?1:i&&r?An.extractNumericId(t).compare(An.extractNumericId(n)):Gd(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Yi.fromString(t.substring(4,t.length-2))}}class Et extends An{construct(t,n,i){return new Et(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new Et(n)}static emptyPath(){return new Et([])}}const BM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends An{construct(t,n,i){return new ae(t,n,i)}static isValidIdentifier(t){return BM.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dv}static keyField(){return new ae([Dv])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;r<t.length;){const l=t[r];if(l==="\\"){if(r+1===t.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=u,r+=2}else l==="`"?(a=!a,r++):l!=="."||a?(i+=l,r++):(s(),r++)}if(s(),a)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ae(n)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(Et.fromString(t))}static fromName(t){return new F(Et.fromString(t).popFirst(5))}static empty(){return new F(Et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Et.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new Et(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(e,t,n){if(!n)throw new z(V.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qM(e,t,n,i){if(t===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ov(e){if(!F.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Nv(e){if(F.isDocumentKey(e))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ib(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function $c(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":G(12329,{type:typeof e})}function De(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$c(e);throw new z(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){const n={typeString:e};return t&&(n.value=t),n}function fl(e,t){if(!ib(e))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in t)if(t[i]){const r=t[i].typeString,s="value"in t[i]?{value:t[i].value}:void 0;if(!(i in e)){n=`JSON missing required field: '${i}'`;break}const a=e[i];if(r&&typeof a!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new z(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=-62135596800,Vv=1e6;class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(t){return wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor((t-1e3*n)*Vv);return new wt(n,i)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Mv)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vv}_compareTo(t){return this.seconds===t.seconds?it(this.nanoseconds,t.nanoseconds):it(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:wt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(fl(t,wt._jsonSchema))return new wt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Mv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}wt._jsonSchemaVersion="firestore/timestamp/1.0",wt._jsonSchema={type:Gt("string",wt._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(t){return new Y(t)}static min(){return new Y(new wt(0,0))}static max(){return new Y(new wt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=-1;function jM(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(i===1e9?new wt(n+1,0):new wt(n,i));return new er(r,F.empty(),t)}function FM(e){return new er(e.readTime,e.key,zo)}class er{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new er(Y.min(),F.empty(),zo)}static max(){return new er(Y.max(),F.empty(),zo)}}function HM(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=F.comparator(e.documentKey,t.documentKey),n!==0?n:it(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(e){if(e.code!==V.FAILED_PRECONDITION||e.message!==GM)throw e;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,i)=>{n(t)})}static reject(t){return new k((n,i)=>{i(t)})}static waitFor(t){return new k((n,i)=>{let r=0,s=0,a=!1;t.forEach(l=>{++r,l.next(()=>{++s,a&&s===r&&n()},u=>i(u))}),a=!0,s===r&&n()})}static or(t){let n=k.resolve(!1);for(const i of t)n=n.next(r=>r?k.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new k((i,r)=>{const s=t.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(t[c]).next(d=>{a[c]=d,++l,l===s&&i(a)},d=>r(d))}})}static doWhile(t,n){return new k((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function QM(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function va(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Xc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=-1;function Jc(e){return e==null}function dc(e){return e===0&&1/e==-1/0}function YM(e){return typeof e=="number"&&Number.isInteger(e)&&!dc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="";function $M(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Pv(t)),t=XM(e.get(n),t);return Pv(t)}function XM(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const s=e.charAt(r);switch(s){case"\0":n+="";break;case rb:n+="";break;default:n+=s}}return n}function Pv(e){return e+rb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function sb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n){this.comparator=t,this.root=n||ie.EMPTY}insert(t,n){return new Ot(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,ie.BLACK,null,null))}remove(t){return new Ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ie.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xl(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xl(this.root,t,this.comparator,!0)}}class Xl{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ie{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??ie.RED,this.left=r??ie.EMPTY,this.right=s??ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new ie(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ie.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return ie.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw G(27949);return t+(this.isRed()?0:1)}}ie.EMPTY=null,ie.RED=!0,ie.BLACK=!1;ie.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(t,n,i,r,s){return this}insert(t,n,i){return new ie(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.comparator=t,this.data=new Ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lv(this.data.getIterator())}getIteratorFrom(t){return new Lv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof Yt)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Yt(this.comparator);return n.data=t,n}}class Lv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.fields=t,t.sort(ae.comparator)}static empty(){return new ze([])}unionWith(t){let n=new Yt(ae.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new ze(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ia(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ab("Invalid base64 string: "+s):s}}(t);return new ue(n)}static fromUint8Array(t){const n=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(t);return new ue(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return it(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ue.EMPTY_BYTE_STRING=new ue("");const JM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(e){if(ft(!!e,39018),typeof e=="string"){let t=0;const n=JM.exec(e);if(ft(!!n,46558,{timestamp:e}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:kt(e.seconds),nanos:kt(e.nanos)}}function kt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ir(e){return typeof e=="string"?ue.fromBase64String(e):ue.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob="server_timestamp",lb="__type__",ub="__previous_value__",cb="__local_write_time__";function Vg(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[lb])==null?void 0:i.stringValue)===ob}function Wc(e){const t=e.mapValue.fields[ub];return Vg(t)?Wc(t):t}function Bo(e){const t=nr(e.mapValue.fields[cb].timestampValue);return new wt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(t,n,i,r,s,a,l,u,c,d,m){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=m}}const mc="(default)";class qo{constructor(t,n){this.projectId=t,this.database=n||mc}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===mc}isEqual(t){return t instanceof qo&&t.projectId===this.projectId&&t.database===this.database}}function ZM(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(e.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hb="__type__",tV="__max__",Jl={mapValue:{}},fb="__vector__",gc="value";function rr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Vg(e)?4:nV(e)?9007199254740991:eV(e)?10:11:G(28295,{value:e})}function Mn(e,t){if(e===t)return!0;const n=rr(e);if(n!==rr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Bo(e).isEqual(Bo(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=nr(r.timestampValue),l=nr(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return ir(r.bytesValue).isEqual(ir(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return kt(r.geoPointValue.latitude)===kt(s.geoPointValue.latitude)&&kt(r.geoPointValue.longitude)===kt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return kt(r.integerValue)===kt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=kt(r.doubleValue),l=kt(s.doubleValue);return a===l?dc(a)===dc(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return ia(e.arrayValue.values||[],t.arrayValue.values||[],Mn);case 10:case 11:return function(r,s){const a=r.mapValue.fields||{},l=s.mapValue.fields||{};if(kv(a)!==kv(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Mn(a[u],l[u])))return!1;return!0}(e,t);default:return G(52216,{left:e})}}function jo(e,t){return(e.values||[]).find(n=>Mn(n,t))!==void 0}function ra(e,t){if(e===t)return 0;const n=rr(e),i=rr(t);if(n!==i)return it(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return it(e.booleanValue,t.booleanValue);case 2:return function(s,a){const l=kt(s.integerValue||s.doubleValue),u=kt(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(e,t);case 3:return Uv(e.timestampValue,t.timestampValue);case 4:return Uv(Bo(e),Bo(t));case 5:return Gd(e.stringValue,t.stringValue);case 6:return function(s,a){const l=ir(s),u=ir(a);return l.compareTo(u)}(e.bytesValue,t.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=it(l[c],u[c]);if(d!==0)return d}return it(l.length,u.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,a){const l=it(kt(s.latitude),kt(a.latitude));return l!==0?l:it(kt(s.longitude),kt(a.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return xv(e.arrayValue,t.arrayValue);case 10:return function(s,a){var g,_,D,M;const l=s.fields||{},u=a.fields||{},c=(g=l[gc])==null?void 0:g.arrayValue,d=(_=u[gc])==null?void 0:_.arrayValue,m=it(((D=c==null?void 0:c.values)==null?void 0:D.length)||0,((M=d==null?void 0:d.values)==null?void 0:M.length)||0);return m!==0?m:xv(c,d)}(e.mapValue,t.mapValue);case 11:return function(s,a){if(s===Jl.mapValue&&a===Jl.mapValue)return 0;if(s===Jl.mapValue)return 1;if(a===Jl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=a.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let m=0;m<u.length&&m<d.length;++m){const g=Gd(u[m],d[m]);if(g!==0)return g;const _=ra(l[u[m]],c[d[m]]);if(_!==0)return _}return it(u.length,d.length)}(e.mapValue,t.mapValue);default:throw G(23264,{he:n})}}function Uv(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return it(e,t);const n=nr(e),i=nr(t),r=it(n.seconds,i.seconds);return r!==0?r:it(n.nanos,i.nanos)}function xv(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const s=ra(n[r],i[r]);if(s)return s}return it(n.length,i.length)}function sa(e){return Kd(e)}function Kd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=nr(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ir(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return F.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=Kd(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${Kd(n.fields[a])}`;return r+"}"}(e.mapValue):G(61005,{value:e})}function Su(e){switch(rr(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Wc(e);return t?16+Su(t):16;case 5:return 2*e.stringValue.length;case 6:return ir(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((r,s)=>r+Su(s),0)}(e.arrayValue);case 10:case 11:return function(i){let r=0;return fr(i.fields,(s,a)=>{r+=s.length+Su(a)}),r}(e.mapValue);default:throw G(13486,{value:e})}}function zv(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qd(e){return!!e&&"integerValue"in e}function Pg(e){return!!e&&"arrayValue"in e}function Bv(e){return!!e&&"nullValue"in e}function qv(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bu(e){return!!e&&"mapValue"in e}function eV(e){var n,i;return((i=(((n=e==null?void 0:e.mapValue)==null?void 0:n.fields)||{})[hb])==null?void 0:i.stringValue)===fb}function vo(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){const t={mapValue:{fields:{}}};return fr(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=vo(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=vo(e.arrayValue.values[n]);return t}return{...e}}function nV(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===tV}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.value=t}static empty(){return new Re({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!bu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=vo(n)}setAll(t){let n=ae.emptyPath(),i={},r=[];t.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,i,r),i={},r=[],n=l.popLast()}a?i[l.lastSegment()]=vo(a):r.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Mn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];bu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){fr(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Re(vo(this.value))}}function db(e){const t=[];return fr(e.fields,(n,i)=>{const r=new ae([n]);if(bu(i)){const s=db(i.mapValue).fields;if(s.length===0)t.push(r);else for(const a of s)t.push(r.child(a))}else t.push(r)}),new ze(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,n,i,r,s,a,l){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(t){return new me(t,0,Y.min(),Y.min(),Y.min(),Re.empty(),0)}static newFoundDocument(t,n,i,r){return new me(t,1,n,Y.min(),i,r,0)}static newNoDocument(t,n){return new me(t,2,n,Y.min(),Y.min(),Re.empty(),0)}static newUnknownDocument(t,n){return new me(t,3,n,Y.min(),Y.min(),Re.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Re.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof me&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t,n){this.position=t,this.inclusive=n}}function jv(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],a=e.position[r];if(s.field.isKeyField()?i=F.comparator(F.fromName(a.referenceValue),n.key):i=ra(a,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Fv(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Mn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(t,n="asc"){this.field=t,this.dir=n}}function iV(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{}class Ft extends mb{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new sV(t,n,i):n==="array-contains"?new lV(t,i):n==="in"?new uV(t,i):n==="not-in"?new cV(t,i):n==="array-contains-any"?new hV(t,i):new Ft(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new aV(t,i):new oV(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ra(n,this.value)):n!==null&&rr(this.value)===rr(n)&&this.matchesComparison(ra(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends mb{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new yn(t,n)}matches(t){return gb(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function gb(e){return e.op==="and"}function pb(e){return rV(e)&&gb(e)}function rV(e){for(const t of e.filters)if(t instanceof yn)return!1;return!0}function Yd(e){if(e instanceof Ft)return e.field.canonicalString()+e.op.toString()+sa(e.value);if(pb(e))return e.filters.map(t=>Yd(t)).join(",");{const t=e.filters.map(n=>Yd(n)).join(",");return`${e.op}(${t})`}}function yb(e,t){return e instanceof Ft?function(i,r){return r instanceof Ft&&i.op===r.op&&i.field.isEqual(r.field)&&Mn(i.value,r.value)}(e,t):e instanceof yn?function(i,r){return r instanceof yn&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,l)=>s&&yb(a,r.filters[l]),!0):!1}(e,t):void G(19439)}function _b(e){return e instanceof Ft?function(n){return`${n.field.canonicalString()} ${n.op} ${sa(n.value)}`}(e):e instanceof yn?function(n){return n.op.toString()+" {"+n.getFilters().map(_b).join(" ,")+"}"}(e):"Filter"}class sV extends Ft{constructor(t,n,i){super(t,n,i),this.key=F.fromName(i.referenceValue)}matches(t){const n=F.comparator(t.key,this.key);return this.matchesComparison(n)}}class aV extends Ft{constructor(t,n){super(t,"in",n),this.keys=vb("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class oV extends Ft{constructor(t,n){super(t,"not-in",n),this.keys=vb("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function vb(e,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map(i=>F.fromName(i.referenceValue))}class lV extends Ft{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Pg(n)&&jo(n.arrayValue,this.value)}}class uV extends Ft{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class cV extends Ft{constructor(t,n){super(t,"not-in",n)}matches(t){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!jo(this.value.arrayValue,n)}}class hV extends Ft{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Pg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>jo(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(t,n=null,i=[],r=[],s=null,a=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function Hv(e,t=null,n=[],i=[],r=null,s=null,a=null){return new fV(e,t,n,i,r,s,a)}function kg(e){const t=$(e);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Yd(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Jc(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>sa(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>sa(i)).join(",")),t.Te=n}return t.Te}function Lg(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!iV(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yb(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Fv(e.startAt,t.startAt)&&Fv(e.endAt,t.endAt)}function $d(e){return F.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,n=null,i=[],r=[],s=null,a="F",l=null,u=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function dV(e,t,n,i,r,s,a,l){return new Ea(e,t,n,i,r,s,a,l)}function Zc(e){return new Ea(e)}function Gv(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function mV(e){return F.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}function Eb(e){return e.collectionGroup!==null}function Eo(e){const t=$(e);if(t.Ie===null){t.Ie=[];const n=new Set;for(const s of t.explicitOrderBy)t.Ie.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Yt(ae.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.Ie.push(new Fo(s,i))}),n.has(ae.keyField().canonicalString())||t.Ie.push(new Fo(ae.keyField(),i))}return t.Ie}function Cn(e){const t=$(e);return t.Ee||(t.Ee=gV(t,Eo(e))),t.Ee}function gV(e,t){if(e.limitType==="F")return Hv(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Fo(r.field,s)});const n=e.endAt?new pc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new pc(e.startAt.position,e.startAt.inclusive):null;return Hv(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Xd(e,t){const n=e.filters.concat([t]);return new Ea(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function pV(e,t){const n=e.explicitOrderBy.concat([t]);return new Ea(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}function Jd(e,t,n){return new Ea(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function th(e,t){return Lg(Cn(e),Cn(t))&&e.limitType===t.limitType}function Tb(e){return`${kg(Cn(e))}|lt:${e.limitType}`}function ps(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>_b(r)).join(", ")}]`),Jc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>sa(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>sa(r)).join(",")),`Target(${i})`}(Cn(e))}; limitType=${e.limitType})`}function eh(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):F.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of Eo(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(a,l,u){const c=jv(a,l,u);return a.inclusive?c<=0:c<0}(i.startAt,Eo(i),r)||i.endAt&&!function(a,l,u){const c=jv(a,l,u);return a.inclusive?c>=0:c>0}(i.endAt,Eo(i),r))}(e,t)}function yV(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ab(e){return(t,n)=>{let i=!1;for(const r of Eo(e)){const s=_V(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function _V(e,t,n){const i=e.field.isKeyField()?F.comparator(t.key,n.key):function(s,a,l){const u=a.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ra(u,c):G(42886)}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return G(19790,{direction:e.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){fr(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return sb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vV=new Ot(F.comparator);function ci(){return vV}const Sb=new Ot(F.comparator);function to(...e){let t=Sb;for(const n of e)t=t.insert(n.key,n);return t}function bb(e){let t=Sb;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Nr(){return To()}function wb(){return To()}function To(){return new rs(e=>e.toString(),(e,t)=>e.isEqual(t))}const EV=new Ot(F.comparator),TV=new Yt(F.comparator);function rt(...e){let t=TV;for(const n of e)t=t.add(n);return t}const AV=new Yt(it);function SV(){return AV}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dc(t)?"-0":t}}function Ib(e){return{integerValue:""+e}}function Rb(e,t){return YM(t)?Ib(t):Ug(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(){this._=void 0}}function bV(e,t,n){return e instanceof Ho?function(r,s){const a={fields:{[lb]:{stringValue:ob},[cb]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Vg(s)&&(s=Wc(s)),s&&(a.fields[ub]=s),{mapValue:a}}(n,t):e instanceof Go?Db(e,t):e instanceof Ko?Ob(e,t):function(r,s){const a=Cb(r,s),l=Kv(a)+Kv(r.Ae);return Qd(a)&&Qd(r.Ae)?Ib(l):Ug(r.serializer,l)}(e,t)}function wV(e,t,n){return e instanceof Go?Db(e,t):e instanceof Ko?Ob(e,t):n}function Cb(e,t){return e instanceof Qo?function(i){return Qd(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class Ho extends nh{}class Go extends nh{constructor(t){super(),this.elements=t}}function Db(e,t){const n=Nb(t);for(const i of e.elements)n.some(r=>Mn(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ko extends nh{constructor(t){super(),this.elements=t}}function Ob(e,t){let n=Nb(t);for(const i of e.elements)n=n.filter(r=>!Mn(r,i));return{arrayValue:{values:n}}}class Qo extends nh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function Kv(e){return kt(e.integerValue||e.doubleValue)}function Nb(e){return Pg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(t,n){this.field=t,this.transform=n}}function IV(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Go&&r instanceof Go||i instanceof Ko&&r instanceof Ko?ia(i.elements,r.elements,Mn):i instanceof Qo&&r instanceof Qo?Mn(i.Ae,r.Ae):i instanceof Ho&&r instanceof Ho}(e.transform,t.transform)}class RV{constructor(t,n){this.version=t,this.transformResults=n}}class on{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new on}static exists(t){return new on(void 0,t)}static updateTime(t){return new on(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function wu(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class ih{}function Vb(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new xg(e.key,on.none()):new dl(e.key,e.data,on.none());{const n=e.data,i=Re.empty();let r=new Yt(ae.comparator);for(let s of t.fields)if(!r.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new dr(e.key,i,new ze(r.toArray()),on.none())}}function CV(e,t,n){e instanceof dl?function(r,s,a){const l=r.value.clone(),u=Yv(r.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(e,t,n):e instanceof dr?function(r,s,a){if(!wu(r.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Yv(r.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(Pb(r)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(e,t,n):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,n)}function Ao(e,t,n,i){return e instanceof dl?function(s,a,l,u){if(!wu(s.precondition,a))return l;const c=s.value.clone(),d=$v(s.fieldTransforms,u,a);return c.setAll(d),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(e,t,n,i):e instanceof dr?function(s,a,l,u){if(!wu(s.precondition,a))return l;const c=$v(s.fieldTransforms,u,a),d=a.data;return d.setAll(Pb(s)),d.setAll(c),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(e,t,n,i):function(s,a,l){return wu(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(e,t,n)}function DV(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=Cb(i.transform,r||null);s!=null&&(n===null&&(n=Re.empty()),n.set(i.field,s))}return n||null}function Qv(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&ia(i,r,(s,a)=>IV(s,a))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class dl extends ih{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class dr extends ih{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pb(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function Yv(e,t,n){const i=new Map;ft(e.length===n.length,32656,{Ve:n.length,de:e.length});for(let r=0;r<n.length;r++){const s=e[r],a=s.transform,l=t.data.field(s.field);i.set(s.field,wV(a,l,n[r]))}return i}function $v(e,t,n){const i=new Map;for(const r of e){const s=r.transform,a=n.data.field(r.field);i.set(r.field,bV(s,a,t))}return i}class xg extends ih{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class OV extends ih{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&CV(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=Ao(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=Ao(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=wb();return this.mutations.forEach(r=>{const s=t.get(r.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(r.key)?null:l;const u=Vb(a,l);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),rt())}isEqual(t){return this.batchId===t.batchId&&ia(this.mutations,t.mutations,(n,i)=>Qv(n,i))&&ia(this.baseMutations,t.baseMutations,(n,i)=>Qv(n,i))}}class zg{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){ft(t.mutations.length===i.length,58842,{me:t.mutations.length,fe:i.length});let r=function(){return EV}();const s=t.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new zg(t,n,i,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MV{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,lt;function PV(e){switch(e){case V.OK:return G(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return G(15467,{code:e})}}function kb(e){if(e===void 0)return ui("GRPC error has no .code"),V.UNKNOWN;switch(e){case zt.OK:return V.OK;case zt.CANCELLED:return V.CANCELLED;case zt.UNKNOWN:return V.UNKNOWN;case zt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case zt.INTERNAL:return V.INTERNAL;case zt.UNAVAILABLE:return V.UNAVAILABLE;case zt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case zt.NOT_FOUND:return V.NOT_FOUND;case zt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case zt.ABORTED:return V.ABORTED;case zt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case zt.DATA_LOSS:return V.DATA_LOSS;default:return G(39323,{code:e})}}(lt=zt||(zt={}))[lt.OK=0]="OK",lt[lt.CANCELLED=1]="CANCELLED",lt[lt.UNKNOWN=2]="UNKNOWN",lt[lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",lt[lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",lt[lt.NOT_FOUND=5]="NOT_FOUND",lt[lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",lt[lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",lt[lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",lt[lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",lt[lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",lt[lt.ABORTED=10]="ABORTED",lt[lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",lt[lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",lt[lt.INTERNAL=13]="INTERNAL",lt[lt.UNAVAILABLE=14]="UNAVAILABLE",lt[lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kV(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LV=new Yi([4294967295,4294967295],0);function Xv(e){const t=kV().encode(e),n=new YS;return n.update(t),new Uint8Array(n.digest())}function Jv(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Yi([n,i],0),new Yi([r,s],0)]}class Bg{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(i<0)throw new eo(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Yi.fromNumber(this.ge)}ye(t,n,i){let r=t.add(n.multiply(Yi.fromNumber(i)));return r.compare(LV)===1&&(r=new Yi([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=Xv(t),[i,r]=Jv(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(i,r,s);if(!this.we(a))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),a=new Bg(s,r,n);return i.forEach(l=>a.insert(l)),a}insert(t){if(this.ge===0)return;const n=Xv(t),[i,r]=Jv(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(i,r,s);this.Se(a)}}Se(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,gl.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new ml(Y.min(),r,new Ot(it),ci(),rt())}}class gl{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new gl(i,n,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n,i,r){this.be=t,this.removedTargetIds=n,this.key=i,this.De=r}}class Lb{constructor(t,n){this.targetId=t,this.Ce=n}}class Ub{constructor(t,n,i=ue.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class Wv{constructor(){this.ve=0,this.Fe=Zv(),this.Me=ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=rt(),n=rt(),i=rt();return this.Fe.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:G(38017,{changeType:s})}}),new gl(this.Me,this.xe,t,n,i)}Ke(){this.Oe=!1,this.Fe=Zv()}qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ft(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class UV{constructor(t){this.Ge=t,this.ze=new Map,this.je=ci(),this.Je=Wl(),this.He=Wl(),this.Ze=new Ot(it)}Xe(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,n=>{const i=this.nt(n);switch(t.state){case 0:this.rt(n)&&i.Le(t.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(t.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(t.resumeToken));break;default:G(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach((i,r)=>{this.rt(r)&&n(r)})}st(t){const n=t.targetId,i=t.Ce.count,r=this.ot(n);if(r){const s=r.target;if($d(s))if(i===0){const a=new F(s.path);this.et(n,a,me.newNoDocument(a,Y.min()))}else ft(i===1,20013,{expectedCount:i});else{const a=this._t(n);if(a!==i){const l=this.ut(t),u=l?this.ct(l,t,a):1;if(u!==0){this.it(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let a,l;try{a=ir(i).toUint8Array()}catch(u){if(u instanceof ab)return $r("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Bg(a,r,s)}catch(u){return $r(u instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(t,n,i){return n.Ce.count===i-this.Pt(t,n.targetId)?0:2}Pt(t,n){const i=this.Ge.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.et(n,s,null),r++)}),r}Tt(t){const n=new Map;this.ze.forEach((s,a)=>{const l=this.ot(a);if(l){if(s.current&&$d(l.target)){const u=new F(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,me.newNoDocument(u,t))}s.Be&&(n.set(a,s.ke()),s.Ke())}});let i=rt();this.He.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const c=this.ot(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(s))}),this.je.forEach((s,a)=>a.setReadTime(t));const r=new ml(t,n,this.Ze,this.je,i);return this.je=ci(),this.Je=Wl(),this.He=Wl(),this.Ze=new Ot(it),r}Ye(t,n){if(!this.rt(t))return;const i=this.Et(t,n.key)?2:0;this.nt(t).qe(n.key,i),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.Rt(n.key).add(t))}et(t,n,i){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,n)?r.qe(n,1):r.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(t)),this.He=this.He.insert(n,this.Rt(n).add(t)),i&&(this.je=this.je.insert(n,i))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new Wv,this.ze.set(t,n)),n}Rt(t){let n=this.He.get(t);return n||(n=new Yt(it),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Yt(it),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||B("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new Wv),this.Ge.getRemoteKeysForTarget(t).forEach(n=>{this.et(t,n,null)})}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Wl(){return new Ot(F.comparator)}function Zv(){return new Ot(F.comparator)}const xV={asc:"ASCENDING",desc:"DESCENDING"},zV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BV={and:"AND",or:"OR"};class qV{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Wd(e,t){return e.useProto3Json||Jc(t)?t:{value:t}}function yc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function jV(e,t){return yc(e,t.toTimestamp())}function Dn(e){return ft(!!e,49232),Y.fromTimestamp(function(n){const i=nr(n);return new wt(i.seconds,i.nanos)}(e))}function qg(e,t){return Zd(e,t).canonicalString()}function Zd(e,t){const n=function(r){return new Et(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function zb(e){const t=Et.fromString(e);return ft(Hb(t),10190,{key:t.toString()}),t}function tm(e,t){return qg(e.databaseId,t.path)}function Nf(e,t){const n=zb(t);if(n.get(1)!==e.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new F(qb(n))}function Bb(e,t){return qg(e.databaseId,t)}function FV(e){const t=zb(e);return t.length===4?Et.emptyPath():qb(t)}function em(e){return new Et(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qb(e){return ft(e.length>4&&e.get(4)==="documents",29091,{key:e.toString()}),e.popFirst(5)}function tE(e,t,n){return{name:tm(e,t),fields:n.value.mapValue.fields}}function HV(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G(39313,{state:c})}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ft(d===void 0||typeof d=="string",58123),ue.fromBase64String(d||"")):(ft(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),ue.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(c){const d=c.code===void 0?V.UNKNOWN:kb(c.code);return new z(d,c.message||"")}(a);n=new Ub(i,r,s,l||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Nf(e,i.document.name),s=Dn(i.document.updateTime),a=i.document.createTime?Dn(i.document.createTime):Y.min(),l=new Re({mapValue:{fields:i.document.fields}}),u=me.newFoundDocument(r,s,a,l),c=i.targetIds||[],d=i.removedTargetIds||[];n=new Iu(c,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Nf(e,i.document),s=i.readTime?Dn(i.readTime):Y.min(),a=me.newNoDocument(r,s),l=i.removedTargetIds||[];n=new Iu([],l,a.key,a)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Nf(e,i.document),s=i.removedTargetIds||[];n=new Iu([],s,r,null)}else{if(!("filter"in t))return G(11601,{Vt:t});{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new VV(r,s),l=i.targetId;n=new Lb(l,a)}}return n}function GV(e,t){let n;if(t instanceof dl)n={update:tE(e,t.key,t.value)};else if(t instanceof xg)n={delete:tm(e,t.key)};else if(t instanceof dr)n={update:tE(e,t.key,t.data),updateMask:t4(t.fieldMask)};else{if(!(t instanceof OV))return G(16599,{dt:t.type});n={verify:tm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,a){const l=a.transform;if(l instanceof Ho)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Go)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ko)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qo)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw G(20930,{transform:a.transform})}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:jV(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(e,t.precondition)),n}function KV(e,t){return e&&e.length>0?(ft(t!==void 0,14353),e.map(n=>function(r,s){let a=r.updateTime?Dn(r.updateTime):Dn(s);return a.isEqual(Y.min())&&(a=Dn(s)),new RV(a,r.transformResults||[])}(n,t))):[]}function QV(e,t){return{documents:[Bb(e,t.path)]}}function YV(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Bb(e,r);const s=function(c){if(c.length!==0)return Fb(yn.create(c,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:ys(g.field),direction:JV(g.dir)}}(d))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Wd(e,t.limit);return l!==null&&(n.structuredQuery.limit=l),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ft:n,parent:r}}function $V(e){let t=FV(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){ft(i===1,65062);const d=n.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(m){const g=jb(m);return g instanceof yn&&pb(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(g=>function(D){return new Fo(_s(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,Jc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new pc(_,g)}(n.startAt));let c=null;return n.endAt&&(c=function(m){const g=!m.before,_=m.values||[];return new pc(_,g)}(n.endAt)),dV(t,r,a,s,l,"F",u,c)}function XV(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:r})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function jb(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=_s(n.unaryFilter.field);return Ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=_s(n.unaryFilter.field);return Ft.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_s(n.unaryFilter.field);return Ft.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=_s(n.unaryFilter.field);return Ft.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(e):e.fieldFilter!==void 0?function(n){return Ft.create(_s(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return yn.create(n.compositeFilter.filters.map(i=>jb(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(e):G(30097,{filter:e})}function JV(e){return xV[e]}function WV(e){return zV[e]}function ZV(e){return BV[e]}function ys(e){return{fieldPath:e.canonicalString()}}function _s(e){return ae.fromServerFormat(e.fieldPath)}function Fb(e){return e instanceof Ft?function(n){if(n.op==="=="){if(qv(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(Bv(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qv(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(Bv(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:WV(n.op),value:n.value}}}(e):e instanceof yn?function(n){const i=n.getFilters().map(r=>Fb(r));return i.length===1?i[0]:{compositeFilter:{op:ZV(n.op),filters:i}}}(e):G(54877,{filter:e})}function t4(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Hb(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function Gb(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,n,i,r,s=Y.min(),a=Y.min(),l=ue.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(t){return new $n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e4{constructor(t){this.yt=t}}function n4(e){const t=$V({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Jd(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.bn=new r4}addToCollectionParentIndex(t,n){return this.bn.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.bn.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(er.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(er.min())}updateCollectionGroup(t,n,i){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class r4{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new Yt(Et.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new Yt(Et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kb=41943040;class Ie{static withCacheSize(t){return new Ie(t,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,i){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(Kb,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new sr(0)}static ar(){return new sr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="LruGarbageCollector",s4=1048576;function iE([e,t],[n,i]){const r=it(e,n);return r===0?it(t,i):r}class a4{constructor(t){this.Pr=t,this.buffer=new Yt(iE),this.Tr=0}Ir(){return++this.Tr}Er(t){const n=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();iE(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class o4{constructor(t,n,i){this.garbageCollector=t,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){B(nE,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){va(n)?B(nE,"Ignoring IndexedDB error during garbage collection: ",n):await _a(n)}await this.Ar(3e5)})}}class l4{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next(i=>Math.floor(n/100*i))}nthSequenceNumber(t,n){if(n===0)return k.resolve(Xc.ce);const i=new a4(n);return this.Vr.forEachTarget(t,r=>i.Er(r.sequenceNumber)).next(()=>this.Vr.mr(t,r=>i.Er(r))).next(()=>i.maxValue)}removeTargets(t,n,i){return this.Vr.removeTargets(t,n,i)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(eE)):this.getCacheSize(t).next(i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eE):this.gr(t,n))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let i,r,s,a,l,u,c;const d=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),r=this.params.maximumSequenceNumbersToCollect):r=m,a=Date.now(),this.nthSequenceNumber(t,r))).next(m=>(i=m,l=Date.now(),this.removeTargets(t,i,n))).next(m=>(s=m,u=Date.now(),this.removeOrphanedDocuments(t,i))).next(m=>(c=Date.now(),gs()<=st.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${r} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${m} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:m})))}}function u4(e,t){return new l4(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(){this.changes=new rs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,me.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?k.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&Ao(i.mutation,r,ze.empty(),wt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,rt()).next(()=>i))}getLocalViewOfDocuments(t,n,i=rt()){const r=Nr();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let a=to();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,n){const i=Nr();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,rt()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(t,n,i,r){let s=ci();const a=To(),l=function(){return To()}();return n.forEach((u,c)=>{const d=i.get(c.key);r.has(c.key)&&(d===void 0||d.mutation instanceof dr)?s=s.insert(c.key,c):d!==void 0?(a.set(c.key,d.mutation.getFieldMask()),Ao(d.mutation,c,d.mutation.getFieldMask(),wt.now())):a.set(c.key,ze.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((c,d)=>a.set(c,d)),n.forEach((c,d)=>l.set(c,new h4(d,a.get(c)??null))),l))}recalculateAndSaveOverlays(t,n){const i=To();let r=new Ot((a,l)=>a-l),s=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=i.get(u)||ze.empty();d=l.applyToLocalView(c,d),i.set(u,d);const m=(r.get(l.batchId)||rt()).add(u);r=r.insert(l.batchId,m)})}).next(()=>{const a=[],l=r.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,m=wb();d.forEach(g=>{if(!s.has(g)){const _=Vb(n.get(g),i.get(g));_!==null&&m.set(g,_),s=s.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(t,c,m))}return k.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return mV(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Eb(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):k.resolve(Nr());let l=zo,u=s;return a.next(c=>k.forEach(c,(d,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(d)?k.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,u,c,rt())).next(d=>({batchId:l,changes:bb(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new F(n)).next(i=>{let r=to();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let a=to();return this.indexManager.getCollectionParents(t,s).next(l=>k.forEach(l,u=>{const c=function(m,g){return new Ea(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,i,r).next(d=>{d.forEach((m,g)=>{a=a.insert(m,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(a=>{s.forEach((u,c)=>{const d=c.getKey();a.get(d)===null&&(a=a.insert(d,me.newInvalidDocument(d)))});let l=to();return a.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Ao(d.mutation,c,ze.empty(),wt.now()),eh(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return k.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Dn(r.createTime)}}(n)),k.resolve()}getNamedQuery(t,n){return k.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,function(r){return{name:r.name,query:n4(r.bundledQuery),readTime:Dn(r.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m4{constructor(){this.overlays=new Ot(F.comparator),this.Lr=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Nr();return k.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.St(t,n,s)}),k.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.Lr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(i)),k.resolve()}getOverlaysForCollection(t,n,i){const r=Nr(),s=n.length+1,a=new F(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return k.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new Ot((c,d)=>c-d);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let d=s.get(c.largestBatchId);d===null&&(d=Nr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Nr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=r)););return k.resolve(l)}St(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.Lr.get(r.largestBatchId).delete(i.key);this.Lr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new MV(n,i));let s=this.Lr.get(n);s===void 0&&(s=rt(),this.Lr.set(n,s)),this.Lr.set(n,s.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(){this.sessionToken=ue.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(){this.kr=new Yt(Wt.Kr),this.qr=new Yt(Wt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const i=new Wt(t,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Wr(new Wt(t,n))}Qr(t,n){t.forEach(i=>this.removeReference(i,n))}Gr(t){const n=new F(new Et([])),i=new Wt(n,t),r=new Wt(n,t+1),s=[];return this.qr.forEachInRange([i,r],a=>{this.Wr(a),s.push(a.key)}),s}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const n=new F(new Et([])),i=new Wt(n,t),r=new Wt(n,t+1);let s=rt();return this.qr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(t){const n=new Wt(t,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Wt{constructor(t,n){this.key=t,this.Jr=n}static Kr(t,n){return F.comparator(t.key,n.key)||it(t.Jr,n.Jr)}static Ur(t,n){return it(t.Jr,n.Jr)||F.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p4{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Yt(Wt.Kr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new NV(s,n,i,r);this.mutationQueue.push(a);for(const l of r)this.Hr=this.Hr.add(new Wt(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,n){return k.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.Xr(i),s=r<0?0:r;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?Mg:this.Yn-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Wt(n,0),r=new Wt(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([i,r],a=>{const l=this.Zr(a.Jr);s.push(l)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new Yt(it);return n.forEach(r=>{const s=new Wt(r,0),a=new Wt(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,a],l=>{i=i.add(l.Jr)})}),k.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;F.isDocumentKey(s)||(s=s.child(""));const a=new Wt(new F(s),0);let l=new Yt(it);return this.Hr.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(l=l.add(u.Jr)),!0)},a),k.resolve(this.Yr(l))}Yr(t){const n=[];return t.forEach(i=>{const r=this.Zr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){ft(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Hr;return k.forEach(n.mutations,r=>{const s=new Wt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Hr=i})}nr(t){}containsKey(t,n){const i=new Wt(n,0),r=this.Hr.firstAfterOrEqual(i);return k.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(t){this.ti=t,this.docs=function(){return new Ot(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,a=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return k.resolve(i?i.document.mutableCopy():me.newInvalidDocument(n))}getEntries(t,n){let i=ci();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():me.newInvalidDocument(r))}),k.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=ci();const a=n.path,l=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||HM(FM(d),i)<=0||(r.has(d.key)||eh(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(t,n,i,r){G(9500)}ni(t,n){return k.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new _4(this)}getSize(t){return k.resolve(this.size)}}class _4 extends c4{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(i)}),k.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(t){this.persistence=t,this.ri=new rs(n=>kg(n),Lg),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new jg,this.targetCount=0,this.oi=sr._r()}forEachTarget(t,n){return this.ri.forEach((i,r)=>n(r)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),k.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new sr(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.lr(n),k.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&i.get(l.targetId)===null&&(this.ri.delete(a),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),r++)}),k.waitFor(s).next(()=>r)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const i=this.ri.get(n)||null;return k.resolve(i)}addMatchingKeys(t,n,i){return this.si.$r(n,i),k.resolve()}removeMatchingKeys(t,n,i){this.si.Qr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(a=>{s.push(r.markPotentiallyOrphaned(t,a))}),k.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),k.resolve()}getMatchingKeysForTargetId(t,n){const i=this.si.jr(n);return k.resolve(i)}containsKey(t,n){return k.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(t,n){this._i={},this.overlays={},this.ai=new Xc(0),this.ui=!1,this.ui=!0,this.ci=new g4,this.referenceDelegate=t(this),this.li=new v4(this),this.indexManager=new i4,this.remoteDocumentCache=function(r){return new y4(r)}(i=>this.referenceDelegate.hi(i)),this.serializer=new e4(n),this.Pi=new d4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new m4,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this._i[t.toKey()];return i||(i=new p4(n,this.referenceDelegate),this._i[t.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,i){B("MemoryPersistence","Starting transaction:",t);const r=new E4(this.ai.next());return this.referenceDelegate.Ti(),i(r).next(s=>this.referenceDelegate.Ii(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Ei(t,n){return k.or(Object.values(this._i).map(i=>()=>i.containsKey(t,n)))}}class E4 extends KM{constructor(t){super(),this.currentSequenceNumber=t}}class Fg{constructor(t){this.persistence=t,this.Ri=new jg,this.Ai=null}static Vi(t){return new Fg(t)}get di(){if(this.Ai)return this.Ai;throw G(60996)}addReference(t,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),k.resolve()}removeReference(t,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),k.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach(r=>this.di.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.di.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Ti(){this.Ai=new Set}Ii(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.di,i=>{const r=F.fromPath(i);return this.mi(t,r).next(s=>{s||n.removeEntry(r,Y.min())})}).next(()=>(this.Ai=null,n.apply(t)))}updateLimboDocument(t,n){return this.mi(t,n).next(i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(t){return 0}mi(t,n){return k.or([()=>k.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class _c{constructor(t,n){this.persistence=t,this.fi=new rs(i=>$M(i.path),(i,r)=>i.isEqual(r)),this.garbageCollector=u4(this,n)}static Vi(t,n){return new _c(t,n)}Ti(){}Ii(t){return k.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(i=>n.next(r=>i+r))}pr(t){let n=0;return this.mr(t,i=>{n++}).next(()=>n)}mr(t,n){return k.forEach(this.fi,(i,r)=>this.wr(t,i,r).next(s=>s?k.resolve():n(r)))}removeTargets(t,n,i){return this.persistence.getTargetCache().removeTargets(t,n,i)}removeOrphanedDocuments(t,n){let i=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(t,a=>this.wr(t,a,n).next(l=>{l||(i++,s.removeEntry(a,Y.min()))})).next(()=>s.apply(t)).next(()=>i)}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),k.resolve()}removeTarget(t,n){const i=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,i)}addReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),k.resolve()}removeReference(t,n,i){return this.fi.set(i,t.currentSequenceNumber),k.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),k.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Su(t.data.value)),n}wr(t,n,i){return k.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const r=this.fi.get(n);return k.resolve(r!==void 0&&r>i)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.Ts=i,this.Is=r}static Es(t,n){let i=rt(),r=rt();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Hg(t,n.fromCache,i,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A4{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return SC()?8:QM(ge())>0?6:4}()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.gs(t,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ps(t,n,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new T4;return this.ys(t,n,a).next(l=>{if(s.result=l,this.As)return this.ws(t,n,a,l.size)})}).next(()=>s.result)}ws(t,n,i,r){return i.documentReadCount<this.Vs?(gs()<=st.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ps(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(gs()<=st.DEBUG&&B("QueryEngine","Query:",ps(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.ds*r?(gs()<=st.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ps(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Cn(n))):k.resolve())}gs(t,n){if(Gv(n))return k.resolve(null);let i=Cn(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Jd(n,null,"F"),i=Cn(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const a=rt(...s);return this.fs.getDocuments(t,a).next(l=>this.indexManager.getMinOffset(t,i).next(u=>{const c=this.Ss(n,l);return this.bs(n,c,a,u.readTime)?this.gs(t,Jd(n,null,"F")):this.Ds(t,c,n,u)}))})))}ps(t,n,i,r){return Gv(n)||r.isEqual(Y.min())?k.resolve(null):this.fs.getDocuments(t,i).next(s=>{const a=this.Ss(n,s);return this.bs(n,a,i,r)?k.resolve(null):(gs()<=st.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ps(n)),this.Ds(t,a,n,jM(r,zo)).next(l=>l))})}Ss(t,n){let i=new Yt(Ab(t));return n.forEach((r,s)=>{eh(t,s)&&(i=i.add(s))}),i}bs(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(t,n,i){return gs()<=st.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ps(n)),this.fs.getDocumentsMatchingQuery(t,n,er.min(),i)}Ds(t,n,i,r){return this.fs.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg="LocalStore",S4=3e8;class b4{constructor(t,n,i,r){this.persistence=t,this.Cs=n,this.serializer=r,this.vs=new Ot(it),this.Fs=new rs(s=>kg(s),Lg),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(i)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new f4(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.vs))}}function w4(e,t,n,i){return new b4(e,t,n,i)}async function Yb(e,t){const n=$(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n.Os(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],l=[];let u=rt();for(const c of r){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(c=>({Ns:c,removedBatchIds:a,addedBatchIds:l}))})})}function I4(e,t){const n=$(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const m=c.batch,g=m.keys();let _=k.resolve();return g.forEach(D=>{_=_.next(()=>d.getEntry(u,D)).next(M=>{const L=c.docVersions.get(D);ft(L!==null,48541),M.version.compareTo(L)<0&&(m.applyToRemoteDocument(M,c),M.isValidDocument()&&(M.setReadTime(c.commitVersion),d.addEntry(M)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let u=rt();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function $b(e){const t=$(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.li.getLastRemoteSnapshotVersion(n))}function R4(e,t){const n=$(e),i=t.snapshotVersion;let r=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});r=n.vs;const l=[];t.targetChanges.forEach((d,m)=>{const g=r.get(m);if(!g)return;l.push(n.li.removeMatchingKeys(s,d.removedDocuments,m).next(()=>n.li.addMatchingKeys(s,d.addedDocuments,m)));let _=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(m)!==null?_=_.withResumeToken(ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,i)),r=r.insert(m,_),function(M,L,S){return M.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-M.snapshotVersion.toMicroseconds()>=S4?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(g,_,d)&&l.push(n.li.updateTargetData(s,_))});let u=ci(),c=rt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(C4(s,a,t.documentUpdates).next(d=>{u=d.Bs,c=d.Ls})),!i.isEqual(Y.min())){const d=n.li.getLastRemoteSnapshotVersion(s).next(m=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,i));l.push(d)}return k.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.vs=r,s))}function C4(e,t,n){let i=rt(),r=rt();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let a=ci();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(t.removeEntry(l,u.readTime),a=a.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(u),a=a.insert(l,u)):B(Gg,"Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Bs:a,Ls:r}})}function D4(e,t){const n=$(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=Mg),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function O4(e,t){const n=$(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.li.getTargetData(i,t).next(s=>s?(r=s,k.resolve(r)):n.li.allocateTargetId(i).next(a=>(r=new $n(t,a,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.vs.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(t,i.targetId)),i})}async function nm(e,t,n){const i=$(e),r=i.vs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!va(a))throw a;B(Gg,`Failed to update sequence numbers for target ${t}: ${a}`)}i.vs=i.vs.remove(t),i.Fs.delete(r.target)}function rE(e,t,n){const i=$(e);let r=Y.min(),s=rt();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,c,d){const m=$(u),g=m.Fs.get(d);return g!==void 0?k.resolve(m.vs.get(g)):m.li.getTargetData(c,d)}(i,a,Cn(t)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>i.Cs.getDocumentsMatchingQuery(a,t,n?r:Y.min(),n?s:rt())).next(l=>(N4(i,yV(t),l),{documents:l,ks:s})))}function N4(e,t,n){let i=e.Ms.get(t)||Y.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.Ms.set(t,i)}class sE{constructor(){this.activeTargetIds=SV()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class M4{constructor(){this.vo=new sE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,i){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new sE,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V4{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE="ConnectivityMonitor";class oE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(aE,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){B(aE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl=null;function im(){return Zl===null?Zl=function(){return 268435456+Math.round(2147483648*Math.random())}():Zl++,"0x"+Zl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="RestConnection",P4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class k4{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+t.host,this.Uo=`projects/${i}/databases/${r}`,this.$o=this.databaseId.database===mc?`project_id=${i}`:`project_id=${i}&database_id=${r}`}Wo(t,n,i,r,s){const a=im(),l=this.Qo(t,n.toUriEncodedString());B(Mf,`Sending RPC '${t}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,r,s);const{host:c}=new URL(l),d=ol(c);return this.zo(t,l,u,i,d).then(m=>(B(Mf,`Received RPC '${t}' ${a}: `,m),m),m=>{throw $r(Mf,`RPC '${t}' ${a} failed with error: `,m,"url: ",l,"request:",i),m})}jo(t,n,i,r,s,a){return this.Wo(t,n,i,r,s)}Go(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ya}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,s)=>t[s]=r),i&&i.headers.forEach((r,s)=>t[s]=r)}Qo(t,n){const i=P4[t];let r=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="WebChannelConnection",Ga=(e,t,n)=>{e.listen(t,i=>{try{n(i)}catch(r){setTimeout(()=>{throw r},0)}})};class Fs extends k4{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Fs.c_){const t=WS();Ga(t,JS.STAT_EVENT,n=>{n.stat===Hd.PROXY?B(fe,"STAT_EVENT: detected buffering proxy"):n.stat===Hd.NOPROXY&&B(fe,"STAT_EVENT: detected no buffering proxy")}),Fs.c_=!0}}zo(t,n,i,r,s){const a=im();return new Promise((l,u)=>{const c=new $S;c.setWithCredentials(!0),c.listenOnce(XS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Au.NO_ERROR:const m=c.getResponseJson();B(fe,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(m)),l(m);break;case Au.TIMEOUT:B(fe,`RPC '${t}' ${a} timed out`),u(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Au.HTTP_ERROR:const g=c.getStatus();if(B(fe,`RPC '${t}' ${a} failed with status:`,g,"response text:",c.getResponseText()),g>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const D=_==null?void 0:_.error;if(D&&D.status&&D.message){const M=function(S){const T=S.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(D.status);u(new z(M,D.message))}else u(new z(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new z(V.UNAVAILABLE,"Connection failed."));break;default:G(9055,{l_:t,streamId:a,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{B(fe,`RPC '${t}' ${a} completed.`)}});const d=JSON.stringify(r);B(fe,`RPC '${t}' ${a} sending request:`,r),c.send(n,"POST",d,i,15)})}T_(t,n,i){const r=im(),s=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");B(fe,`Creating RPC '${t}' stream ${r}: ${c}`,l);const d=a.createWebChannel(c,l);this.I_(d);let m=!1,g=!1;const _=new L4({Jo:D=>{g?B(fe,`Not sending because RPC '${t}' stream ${r} is closed:`,D):(m||(B(fe,`Opening RPC '${t}' stream ${r} transport.`),d.open(),m=!0),B(fe,`RPC '${t}' stream ${r} sending:`,D),d.send(D))},Ho:()=>d.close()});return Ga(d,Za.EventType.OPEN,()=>{g||(B(fe,`RPC '${t}' stream ${r} transport opened.`),_.i_())}),Ga(d,Za.EventType.CLOSE,()=>{g||(g=!0,B(fe,`RPC '${t}' stream ${r} transport closed`),_.o_(),this.E_(d))}),Ga(d,Za.EventType.ERROR,D=>{g||(g=!0,$r(fe,`RPC '${t}' stream ${r} transport errored. Name:`,D.name,"Message:",D.message),_.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))}),Ga(d,Za.EventType.MESSAGE,D=>{var M;if(!g){const L=D.data[0];ft(!!L,16349);const S=L,T=(S==null?void 0:S.error)||((M=S[0])==null?void 0:M.error);if(T){B(fe,`RPC '${t}' stream ${r} received error:`,T);const I=T.status;let N=function(v){const y=zt[v];if(y!==void 0)return kb(y)}(I),x=T.message;I==="NOT_FOUND"&&x.includes("database")&&x.includes("does not exist")&&x.includes(this.databaseId.database)&&$r(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),N===void 0&&(N=V.INTERNAL,x="Unknown error status: "+I+" with message "+T.message),g=!0,_.o_(new z(N,x)),d.close()}else B(fe,`RPC '${t}' stream ${r} received:`,L),_.__(L)}}),Fs.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(n=>n===t)}Go(t,n,i){super.Go(t,n,i),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ZS()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(e){return new Fs(e)}function Vf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(e){return new qV(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fs.c_=!1;class Xb{constructor(t,n,i=1e3,r=1.5,s=6e4){this.Ci=t,this.timerId=n,this.R_=i,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),r=Math.max(0,n-i);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="PersistentStream";class Jb{constructor(t,n,i,r,s,a,l,u){this.Ci=t,this.S_=i,this.b_=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xb(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(ui(n.toString()),ui("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.D_===n&&this.G_(i,r)},i=>{t(()=>{const r=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(r)})})}G_(t,n){const i=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.Yo(()=>{i(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{i(()=>this.z_(r))}),this.stream.onMessage(r=>{i(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return B(lE,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget(()=>this.D_===t?n():(B(lE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class x4 extends Jb{constructor(t,n,i,r,s,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=HV(this.serializer,t),i=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Dn(a.readTime):Y.min()}(t);return this.listener.H_(n,i)}Z_(t){const n={};n.database=em(this.serializer),n.addTarget=function(s,a){let l;const u=a.target;if(l=$d(u)?{documents:QV(s,u)}:{query:YV(s,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=xb(s,a.resumeToken);const c=Wd(s,a.expectedCount);c!==null&&(l.expectedCount=c)}else if(a.snapshotVersion.compareTo(Y.min())>0){l.readTime=yc(s,a.snapshotVersion.toTimestamp());const c=Wd(s,a.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const i=XV(this.serializer,t);i&&(n.labels=i),this.K_(n)}X_(t){const n={};n.database=em(this.serializer),n.removeTarget=t,this.K_(n)}}class z4 extends Jb{constructor(t,n,i,r,s,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return ft(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ft(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ft(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=KV(t.writeResults,t.commitTime),i=Dn(t.commitTime);return this.listener.na(i,n)}ra(){const t={};t.database=em(this.serializer),this.K_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>GV(this.serializer,i))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{}class q4 extends B4{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(t,Zd(n,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(V.UNKNOWN,s.toString())})}jo(t,n,i,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(t,Zd(n,i),r,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(V.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function j4(e,t,n,i){return new q4(e,t,n,i)}class F4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ui(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="RemoteStore";class H4{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new sr(1e3),this.Va=new sr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(a=>{i.enqueueAndForget(async()=>{ss(this)&&(B(Vn,"Restarting streams for network reachability change."),await async function(u){const c=$(u);c.da.add(4),await pl(c),c.ga.set("Unknown"),c.da.delete(4),await sh(c)}(this))})}),this.ga=new F4(i,r)}}async function sh(e){if(ss(e))for(const t of e.ma)await t(!0)}async function pl(e){for(const t of e.ma)await t(!1)}function rm(e,t){return e.Ea.get(t)||void 0}function Wb(e,t){const n=$(e),i=rm(n,t.targetId);if(i!==void 0&&n.Ia.has(i))return;const r=function(l,u){const c=rm(l,u);c!==void 0&&l.Ra.delete(c);const d=function(g,_){return _%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,d),l.Ra.set(d,u),d}(n,t.targetId);B(Vn,"remoteStoreListen mapping SDK target ID to remote",t.targetId,r);const s=new $n(t.target,r,t.purpose,t.sequenceNumber,t.snapshotVersion,t.lastLimboFreeSnapshotVersion,t.resumeToken);n.Ia.set(r,s),$g(n)?Yg(n):Ta(n).O_()&&Qg(n,s)}function Kg(e,t){const n=$(e),i=Ta(n),r=rm(n,t);B(Vn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",t,r),n.Ia.delete(r),n.Ea.delete(t),n.Ra.delete(r),i.O_()&&Zb(n,r),n.Ia.size===0&&(i.O_()?i.L_():ss(n)&&n.ga.set("Unknown"))}function Qg(e,t){if(e.pa.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Y.min())>0){const n=e.Ra.get(t.targetId);if(n===void 0)return void B(Vn,"SDK target ID not found for remote ID: "+t.targetId);const i=e.remoteSyncer.getRemoteKeysForTarget(n).size;t=t.withExpectedCount(i)}Ta(e).Z_(t)}function Zb(e,t){e.pa.$e(t),Ta(e).X_(t)}function Yg(e){e.pa=new UV({getRemoteKeysForTarget:t=>{const n=e.Ra.get(t);return n!==void 0?e.remoteSyncer.getRemoteKeysForTarget(n):rt()},At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),Ta(e).start(),e.ga.ua()}function $g(e){return ss(e)&&!Ta(e).x_()&&e.Ia.size>0}function ss(e){return $(e).da.size===0}function tw(e){e.pa=void 0}async function G4(e){e.ga.set("Online")}async function K4(e){e.Ia.forEach((t,n)=>{Qg(e,t)})}async function Q4(e,t){tw(e),$g(e)?(e.ga.ha(t),Yg(e)):e.ga.set("Unknown")}async function Y4(e,t,n){if(e.ga.set("Online"),t instanceof Ub&&t.state===2&&t.cause)try{await async function(r,s){const a=s.cause;for(const l of s.targetIds){if(r.Ia.has(l)){const u=r.Ra.get(l);u!==void 0&&(await r.remoteSyncer.rejectListen(u,a),r.Ea.delete(u),r.Ra.delete(l)),r.Ia.delete(l)}r.pa.removeTarget(l)}}(e,t)}catch(i){B(Vn,"Failed to remove targets %s: %s ",t.targetIds.join(","),i),await vc(e,i)}else if(t instanceof Iu?e.pa.Xe(t):t instanceof Lb?e.pa.st(t):e.pa.tt(t),!n.isEqual(Y.min()))try{const i=await $b(e.localStore);n.compareTo(i)>=0&&await function(s,a){const l=s.pa.Tt(a);l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=s.Ia.get(d);m&&s.Ia.set(d,m.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const m=s.Ia.get(c);if(!m)return;s.Ia.set(c,m.withResumeToken(ue.EMPTY_BYTE_STRING,m.snapshotVersion)),Zb(s,c);const g=new $n(m.target,c,d,m.sequenceNumber);Qg(s,g)});const u=function(d,m){const g=new Map;m.targetChanges.forEach((D,M)=>{const L=d.Ra.get(M);L!==void 0&&g.set(L,D)});let _=new Ot(it);return m.targetMismatches.forEach((D,M)=>{const L=d.Ra.get(D);L!==void 0&&(_=_.insert(L,M))}),new ml(m.snapshotVersion,g,_,m.documentUpdates,m.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(e,n)}catch(i){B(Vn,"Failed to raise snapshot:",i),await vc(e,i)}}async function vc(e,t,n){if(!va(t))throw t;e.da.add(1),await pl(e),e.ga.set("Offline"),n||(n=()=>$b(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{B(Vn,"Retrying IndexedDB access"),await n(),e.da.delete(1),await sh(e)})}function ew(e,t){return t().catch(n=>vc(e,n,t))}async function ah(e){const t=$(e),n=ar(t);let i=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Mg;for(;$4(t);)try{const r=await D4(t.localStore,i);if(r===null){t.Ta.length===0&&n.L_();break}i=r.batchId,X4(t,r)}catch(r){await vc(t,r)}nw(t)&&iw(t)}function $4(e){return ss(e)&&e.Ta.length<10}function X4(e,t){e.Ta.push(t);const n=ar(e);n.O_()&&n.Y_&&n.ea(t.mutations)}function nw(e){return ss(e)&&!ar(e).x_()&&e.Ta.length>0}function iw(e){ar(e).start()}async function J4(e){ar(e).ra()}async function W4(e){const t=ar(e);for(const n of e.Ta)t.ea(n.mutations)}async function Z4(e,t,n){const i=e.Ta.shift(),r=zg.from(i,t,n);await ew(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await ah(e)}async function tP(e,t){t&&ar(e).Y_&&await async function(i,r){if(function(a){return PV(a)&&a!==V.ABORTED}(r.code)){const s=i.Ta.shift();ar(i).B_(),await ew(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await ah(i)}}(e,t),nw(e)&&iw(e)}async function uE(e,t){const n=$(e);n.asyncQueue.verifyOperationInProgress(),B(Vn,"RemoteStore received new credentials");const i=ss(n);n.da.add(3),await pl(n),i&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.da.delete(3),await sh(n)}async function eP(e,t){const n=$(e);t?(n.da.delete(2),await sh(n)):t||(n.da.add(2),await pl(n),n.ga.set("Unknown"))}function Ta(e){return e.ya||(e.ya=function(n,i,r){const s=$(n);return s.sa(),new x4(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Zo:G4.bind(null,e),Yo:K4.bind(null,e),t_:Q4.bind(null,e),H_:Y4.bind(null,e)}),e.ma.push(async t=>{t?(e.ya.B_(),$g(e)?Yg(e):e.ga.set("Unknown")):(await e.ya.stop(),tw(e))})),e.ya}function ar(e){return e.wa||(e.wa=function(n,i,r){const s=$(n);return s.sa(),new z4(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),Yo:J4.bind(null,e),t_:tP.bind(null,e),ta:W4.bind(null,e),na:Z4.bind(null,e)}),e.ma.push(async t=>{t?(e.wa.B_(),await ah(e)):(await e.wa.stop(),e.Ta.length>0&&(B(Vn,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const a=Date.now()+i,l=new Xg(t,n,a,r,s);return l.start(i),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jg(e,t){if(ui("AsyncQueue",`${t}: ${e}`),va(e))return new z(V.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{static emptySet(t){return new Hs(t.comparator)}constructor(t){this.comparator=t?(n,i)=>t(n,i)||F.comparator(n.key,i.key):(n,i)=>F.comparator(n.key,i.key),this.keyedMap=to(),this.sortedSet=new Ot(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Hs)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Hs;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.Sa=new Ot(F.comparator)}track(t){const n=t.doc.key,i=this.Sa.get(n);i?t.type!==0&&i.type===3?this.Sa=this.Sa.insert(n,t):t.type===3&&i.type!==1?this.Sa=this.Sa.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.Sa=this.Sa.remove(n):t.type===1&&i.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:t.doc}):G(63341,{Vt:t,ba:i}):this.Sa=this.Sa.insert(n,t)}Da(){const t=[];return this.Sa.inorderTraversal((n,i)=>{t.push(i)}),t}}class aa{constructor(t,n,i,r,s,a,l,u,c){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(t,n,i,r,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new aa(t,n,Hs.emptySet(n),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&th(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(t=>t.Ma())}}class iP{constructor(){this.queries=hE(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,i){const r=$(n),s=r.queries;r.queries=hE(),s.forEach((a,l)=>{for(const u of l.va)u.onError(i)})})(this,new z(V.ABORTED,"Firestore shutting down"))}}function hE(){return new rs(e=>Tb(e),th)}async function Wg(e,t){const n=$(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.Fa()&&t.Ma()&&(i=2):(s=new nP,i=t.Ma()?0:1);try{switch(i){case 0:s.Ca=await n.onListen(r,!0);break;case 1:s.Ca=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const l=Jg(a,`Initialization of query '${ps(t.query)}' failed`);return void t.onError(l)}n.queries.set(r,s),s.va.push(t),t.Oa(n.onlineState),s.Ca&&t.Na(s.Ca)&&tp(n)}async function Zg(e,t){const n=$(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const a=s.va.indexOf(t);a>=0&&(s.va.splice(a,1),s.va.length===0?r=t.Ma()?0:1:!s.Fa()&&t.Ma()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function rP(e,t){const n=$(e);let i=!1;for(const r of t){const s=r.query,a=n.queries.get(s);if(a){for(const l of a.va)l.Na(r)&&(i=!0);a.Ca=r}}i&&tp(n)}function sP(e,t,n){const i=$(e),r=i.queries.get(t);if(r)for(const s of r.va)s.onError(n);i.queries.delete(t)}function tp(e){e.xa.forEach(t=>{t.next()})}var sm,fE;(fE=sm||(sm={})).Ba="default",fE.Cache="cache";class ep{constructor(t,n,i){this.query=t,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=i||{}}Na(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new aa(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ka?this.qa(t)&&(this.La.next(t),n=!0):this.Ua(t,this.onlineState)&&(this.$a(t),n=!0),this.Ka=t,n}onError(t){this.La.error(t)}Oa(t){this.onlineState=t;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,t)&&(this.$a(this.Ka),n=!0),n}Ua(t,n){if(!t.fromCache||!this.Ma())return!0;const i=n!=="Offline";return(!this.options.Wa||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}qa(t){if(t.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(t){t=aa.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ka=!0,this.La.next(t)}Ma(){return this.options.source!==sm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(t){this.key=t}}class sw{constructor(t){this.key=t}}class aP{constructor(t,n){this.query=t,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=rt(),this.mutatedKeys=rt(),this.iu=Ab(t),this.su=new Hs(this.iu)}get ou(){return this.tu}_u(t,n){const i=n?n.au:new cE,r=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,a=r,l=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,m)=>{const g=r.get(d),_=eh(this.query,m)?m:null,D=!!g&&this.mutatedKeys.has(g.key),M=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let L=!1;g&&_?g.data.isEqual(_.data)?D!==M&&(i.track({type:3,doc:_}),L=!0):this.uu(g,_)||(i.track({type:2,doc:_}),L=!0,(u&&this.iu(_,u)>0||c&&this.iu(_,c)<0)&&(l=!0)):!g&&_?(i.track({type:0,doc:_}),L=!0):g&&!_&&(i.track({type:1,doc:g}),L=!0,(u||c)&&(l=!0)),L&&(_?(a=a.add(_),s=M?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),i.track({type:1,doc:d})}return{su:a,au:i,bs:l,mutatedKeys:s}}uu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.su;this.su=t.su,this.mutatedKeys=t.mutatedKeys;const a=t.au.Da();a.sort((d,m)=>function(_,D){const M=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{Vt:L})}};return M(_)-M(D)}(d.type,m.type)||this.iu(d.doc,m.doc)),this.cu(i),r=r??!1;const l=n&&!r?this.lu():[],u=this.ru.size===0&&this.current&&!r?1:0,c=u!==this.nu;return this.nu=u,a.length!==0||c?{snapshot:new aa(this.query,t.su,s,a,t.mutatedKeys,u===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new cE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(t){return!this.tu.has(t)&&!!this.su.has(t)&&!this.su.get(t).hasLocalMutations}cu(t){t&&(t.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=t.current)}lu(){if(!this.current)return[];const t=this.ru;this.ru=rt(),this.su.forEach(i=>{this.Pu(i.key)&&(this.ru=this.ru.add(i.key))});const n=[];return t.forEach(i=>{this.ru.has(i)||n.push(new sw(i))}),this.ru.forEach(i=>{t.has(i)||n.push(new rw(i))}),n}Tu(t){this.tu=t.ks,this.ru=rt();const n=this._u(t.documents);return this.applyChanges(n,!0)}Iu(){return aa.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const np="SyncEngine";class oP{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class lP{constructor(t){this.key=t,this.Eu=!1}}class uP{constructor(t,n,i,r,s,a){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new rs(l=>Tb(l),th),this.Vu=new Map,this.du=new Set,this.mu=new Ot(F.comparator),this.fu=new Map,this.gu=new jg,this.pu={},this.yu=new Map,this.wu=sr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function cP(e,t,n=!0){const i=hw(e);let r;const s=i.Au.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.Iu()):r=await aw(i,t,n,!0),r}async function hP(e,t){const n=hw(e);await aw(n,t,!0,!1)}async function aw(e,t,n,i){const r=await O4(e.localStore,Cn(t)),s=r.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let l;return i&&(l=await fP(e,t,s,a==="current",r.resumeToken)),e.isPrimaryClient&&n&&Wb(e.remoteStore,r),l}async function fP(e,t,n,i,r){e.bu=(m,g,_)=>async function(M,L,S,T){let I=L.view._u(S);I.bs&&(I=await rE(M.localStore,L.query,!1).then(({documents:v})=>L.view._u(v,I)));const N=T&&T.targetChanges.get(L.targetId),x=T&&T.targetMismatches.get(L.targetId)!=null,j=L.view.applyChanges(I,M.isPrimaryClient,N,x);return mE(M,L.targetId,j.hu),j.snapshot}(e,m,g,_);const s=await rE(e.localStore,t,!0),a=new aP(t,s.ks),l=a._u(s.documents),u=gl.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),c=a.applyChanges(l,e.isPrimaryClient,u);mE(e,n,c.hu);const d=new oP(t,n,a);return e.Au.set(t,d),e.Vu.has(n)?e.Vu.get(n).push(t):e.Vu.set(n,[t]),c.snapshot}async function dP(e,t,n){const i=$(e),r=i.Au.get(t),s=i.Vu.get(r.targetId);if(s.length>1)return i.Vu.set(r.targetId,s.filter(a=>!th(a,t))),void i.Au.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await nm(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Kg(i.remoteStore,r.targetId),am(i,r.targetId)}).catch(_a)):(am(i,r.targetId),await nm(i.localStore,r.targetId,!0))}async function mP(e,t){const n=$(e),i=n.Au.get(t),r=n.Vu.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Kg(n.remoteStore,i.targetId))}async function gP(e,t,n){const i=AP(e);try{const r=await function(a,l){const u=$(a),c=wt.now(),d=l.reduce((_,D)=>_.add(D.key),rt());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let D=ci(),M=rt();return u.xs.getEntries(_,d).next(L=>{D=L,D.forEach((S,T)=>{T.isValidDocument()||(M=M.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,D)).next(L=>{m=L;const S=[];for(const T of l){const I=DV(T,m.get(T.key).overlayedDocument);I!=null&&S.push(new dr(T.key,I,db(I.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,S,l)}).next(L=>{g=L;const S=L.applyToLocalDocumentSet(m,M);return u.documentOverlayCache.saveOverlays(_,L.batchId,S)})}).then(()=>({batchId:g.batchId,changes:bb(m)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(a,l,u){let c=a.pu[a.currentUser.toKey()];c||(c=new Ot(it)),c=c.insert(l,u),a.pu[a.currentUser.toKey()]=c}(i,r.batchId,n),await yl(i,r.changes),await ah(i.remoteStore)}catch(r){const s=Jg(r,"Failed to persist write");n.reject(s)}}async function ow(e,t){const n=$(e);try{const i=await R4(n.localStore,t);t.targetChanges.forEach((r,s)=>{const a=n.fu.get(s);a&&(ft(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?a.Eu=!0:r.modifiedDocuments.size>0?ft(a.Eu,14607):r.removedDocuments.size>0&&(ft(a.Eu,42227),a.Eu=!1))}),await yl(n,i,t)}catch(i){await _a(i)}}function dE(e,t,n){const i=$(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.Au.forEach((s,a)=>{const l=a.view.Oa(t);l.snapshot&&r.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let c=!1;u.queries.forEach((d,m)=>{for(const g of m.va)g.Oa(l)&&(c=!0)}),c&&tp(u)}(i.eventManager,t),r.length&&i.Ru.H_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function pP(e,t,n){const i=$(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.fu.get(t),s=r&&r.key;if(s){let a=new Ot(F.comparator);a=a.insert(s,me.newNoDocument(s,Y.min()));const l=rt().add(s),u=new ml(Y.min(),new Map,new Ot(it),a,l);await ow(i,u),i.mu=i.mu.remove(s),i.fu.delete(t),ip(i)}else await nm(i.localStore,t,!1).then(()=>am(i,t,n)).catch(_a)}async function yP(e,t){const n=$(e),i=t.batch.batchId;try{const r=await I4(n.localStore,t);uw(n,i,null),lw(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await yl(n,r)}catch(r){await _a(r)}}async function _P(e,t,n){const i=$(e);try{const r=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(m=>(ft(m!==null,37113),d=m.keys(),u.mutationQueue.removeMutationBatch(c,m))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(i.localStore,t);uw(i,t,n),lw(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await yl(i,r)}catch(r){await _a(r)}}function lw(e,t){(e.yu.get(t)||[]).forEach(n=>{n.resolve()}),e.yu.delete(t)}function uw(e,t,n){const i=$(e);let r=i.pu[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.pu[i.currentUser.toKey()]=r}}function am(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Vu.get(t))e.Au.delete(i),n&&e.Ru.Du(i,n);e.Vu.delete(t),e.isPrimaryClient&&e.gu.Gr(t).forEach(i=>{e.gu.containsKey(i)||cw(e,i)})}function cw(e,t){e.du.delete(t.path.canonicalString());const n=e.mu.get(t);n!==null&&(Kg(e.remoteStore,n),e.mu=e.mu.remove(t),e.fu.delete(n),ip(e))}function mE(e,t,n){for(const i of n)i instanceof rw?(e.gu.addReference(i.key,t),vP(e,i)):i instanceof sw?(B(np,"Document no longer in limbo: "+i.key),e.gu.removeReference(i.key,t),e.gu.containsKey(i.key)||cw(e,i.key)):G(19791,{Cu:i})}function vP(e,t){const n=t.key,i=n.path.canonicalString();e.mu.get(n)||e.du.has(i)||(B(np,"New document in limbo: "+n),e.du.add(i),ip(e))}function ip(e){for(;e.du.size>0&&e.mu.size<e.maxConcurrentLimboResolutions;){const t=e.du.values().next().value;e.du.delete(t);const n=new F(Et.fromString(t)),i=e.wu.next();e.fu.set(i,new lP(n)),e.mu=e.mu.insert(n,i),Wb(e.remoteStore,new $n(Cn(Zc(n.path)),i,"TargetPurposeLimboResolution",Xc.ce))}}async function yl(e,t,n){const i=$(e),r=[],s=[],a=[];i.Au.isEmpty()||(i.Au.forEach((l,u)=>{a.push(i.bu(u,t,n).then(c=>{var d;if((c||n)&&i.isPrimaryClient){const m=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;i.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(c){r.push(c);const m=Hg.Es(u.targetId,c);s.push(m)}}))}),await Promise.all(a),i.Ru.H_(r),await async function(u,c){const d=$(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>k.forEach(c,g=>k.forEach(g.Ts,_=>d.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>k.forEach(g.Is,_=>d.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!va(m))throw m;B(Gg,"Failed to update sequence numbers: "+m)}for(const m of c){const g=m.targetId;if(!m.fromCache){const _=d.vs.get(g),D=_.snapshotVersion,M=_.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(g,M)}}}(i.localStore,s))}async function EP(e,t){const n=$(e);if(!n.currentUser.isEqual(t)){B(np,"User change. New user:",t.toKey());const i=await Yb(n.localStore,t);n.currentUser=t,function(s,a){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new z(V.CANCELLED,a))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await yl(n,i.Ns)}}function TP(e,t){const n=$(e),i=n.fu.get(t);if(i&&i.Eu)return rt().add(i.key);{let r=rt();const s=n.Vu.get(t);if(!s)return r;for(const a of s){const l=n.Au.get(a);r=r.unionWith(l.view.ou)}return r}}function hw(e){const t=$(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ow.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=TP.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=pP.bind(null,t),t.Ru.H_=rP.bind(null,t.eventManager),t.Ru.Du=sP.bind(null,t.eventManager),t}function AP(e){const t=$(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=yP.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_P.bind(null,t),t}class Ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rh(t.databaseInfo.databaseId),this.sharedClientState=this.Mu(t),this.persistence=this.xu(t),await this.persistence.start(),this.localStore=this.Ou(t),this.gcScheduler=this.Nu(t,this.localStore),this.indexBackfillerScheduler=this.Bu(t,this.localStore)}Nu(t,n){return null}Bu(t,n){return null}Ou(t){return w4(this.persistence,new A4,t.initialUser,this.serializer)}xu(t){return new Qb(Fg.Vi,this.serializer)}Mu(t){return new M4}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ec.provider={build:()=>new Ec};class SP extends Ec{constructor(t){super(),this.cacheSizeBytes=t}Nu(t,n){ft(this.persistence.referenceDelegate instanceof _c,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new o4(i,t.asyncQueue,n)}xu(t){const n=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new Qb(i=>_c.Vi(i,n),this.serializer)}}class om{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>dE(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=EP.bind(null,this.syncEngine),await eP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new iP}()}createDatastore(t){const n=rh(t.databaseInfo.databaseId),i=U4(t.databaseInfo);return j4(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,a,l){return new H4(i,r,s,a,l)}(this.localStore,this.datastore,t.asyncQueue,n=>dE(this.syncEngine,n,0),function(){return oE.v()?new oE:new V4}())}createSyncEngine(t,n){return function(r,s,a,l,u,c,d){const m=new uP(r,s,a,l,u,c);return d&&(m.Su=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(r){const s=$(r);B(Vn,"RemoteStore shutting down."),s.da.add(5),await pl(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}om.provider={build:()=>new om};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.ku(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.ku(this.observer.error,t):ui("Uncaught Error in snapshot listener:",t.toString()))}Ku(){this.muted=!0}ku(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="FirestoreClient";class bP{constructor(t,n,i,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=r,this.user=de.UNAUTHENTICATED,this.clientId=Ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(i,async a=>{B(or,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(B(or,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Jg(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Pf(e,t){e.asyncQueue.verifyOperationInProgress(),B(or,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await Yb(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function gE(e,t){e.asyncQueue.verifyOperationInProgress();const n=await wP(e);B(or,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>uE(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>uE(t.remoteStore,r)),e._onlineComponents=t}async function wP(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){B(or,"Using user provided OfflineComponentProvider");try{await Pf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(r){return r.name==="FirebaseError"?r.code===V.FAILED_PRECONDITION||r.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;$r("Error using user provided cache. Falling back to memory cache: "+n),await Pf(e,new Ec)}}else B(or,"Using default OfflineComponentProvider"),await Pf(e,new SP(void 0));return e._offlineComponents}async function fw(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(B(or,"Using user provided OnlineComponentProvider"),await gE(e,e._uninitializedComponentsProvider._online)):(B(or,"Using default OnlineComponentProvider"),await gE(e,new om))),e._onlineComponents}function IP(e){return fw(e).then(t=>t.syncEngine)}async function Tc(e){const t=await fw(e),n=t.eventManager;return n.onListen=cP.bind(null,t.syncEngine),n.onUnlisten=dP.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=hP.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=mP.bind(null,t.syncEngine),n}function RP(e,t,n,i){const r=new rp(i),s=new ep(t,r,n);return e.asyncQueue.enqueueAndForget(async()=>Wg(await Tc(e),s)),()=>{r.Ku(),e.asyncQueue.enqueueAndForget(async()=>Zg(await Tc(e),s))}}function CP(e,t,n={}){const i=new ti;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,c){const d=new rp({next:g=>{d.Ku(),a.enqueueAndForget(()=>Zg(s,m));const _=g.docs.has(l);!_&&g.fromCache?c.reject(new z(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&u&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new ep(Zc(l.path),d,{includeMetadataChanges:!0,Wa:!0});return Wg(s,m)}(await Tc(e),e.asyncQueue,t,n,i)),i.promise}function DP(e,t,n={}){const i=new ti;return e.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,c){const d=new rp({next:g=>{d.Ku(),a.enqueueAndForget(()=>Zg(s,m)),g.fromCache&&u.source==="server"?c.reject(new z(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),m=new ep(l,d,{includeMetadataChanges:!0,Wa:!0});return Wg(s,m)}(await Tc(e),e.asyncQueue,t,n,i)),i.promise}function OP(e,t){const n=new ti;return e.asyncQueue.enqueueAndForget(async()=>gP(await IP(e),t,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NP="ComponentProvider",pE=new Map;function MP(e,t,n,i,r){return new WM(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,dw(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw="firestore.googleapis.com",yE=!0;class _E{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mw,this.ssl=yE}else this.host=t.host,this.ssl=t.ssl??yE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Kb;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<s4)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}qM("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dw(t.experimentalLongPollingOptions??{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class oh{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _E({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _E(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new NM;switch(i.type){case"firstParty":return new kM(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=pE.get(n);i&&(B(NP,"Removing Datastore"),pE.delete(n),i.terminate())}(this),Promise.resolve()}}function VP(e,t,n,i={}){var c;e=De(e,oh);const r=ol(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},l=`${t}:${n}`;r&&BA(`https://${l}`),s.host!==mw&&s.host!==l&&$r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:r,emulatorOptions:i};if(!tr(u,a)&&(e._setSettings(u),i.mockUserToken)){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=de.MOCK_USER;else{d=yC(i.mockUserToken,(c=e._app)==null?void 0:c.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new de(g)}e._authCredentials=new MM(new eb(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new mr(this.firestore,t,this._query)}}class Pt{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $i(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pt(this.firestore,t,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,i){if(fl(n,Pt._jsonSchema))return new Pt(t,i||null,new F(Et.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:Gt("string",Pt._jsonSchemaVersion),referencePath:Gt("string")};class $i extends mr{constructor(t,n,i){super(t,n,Zc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pt(this.firestore,null,new F(t))}withConverter(t){return new $i(this.firestore,t,this._path)}}function Sr(e,t,...n){if(e=Dt(e),nb("collection","path",t),e instanceof oh){const i=Et.fromString(t,...n);return Nv(i),new $i(e,null,i)}{if(!(e instanceof Pt||e instanceof $i))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Et.fromString(t,...n));return Nv(i),new $i(e.firestore,null,i)}}function Ye(e,t,...n){if(e=Dt(e),arguments.length===1&&(t=Ng.newId()),nb("doc","path",t),e instanceof oh){const i=Et.fromString(t,...n);return Ov(i),new Pt(e,null,new F(i))}{if(!(e instanceof Pt||e instanceof $i))throw new z(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Et.fromString(t,...n));return Ov(i),new Pt(e.firestore,e instanceof $i?e.converter:null,new F(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="AsyncQueue";class EE{constructor(t=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Xb(this,"async_queue_retry"),this.lc=()=>{const i=Vf();i&&B(vE,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.hc=t;const n=Vf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.Tc(t)}enterRestrictedMode(t){if(!this.sc){this.sc=!0,this.uc=t||!1;const n=Vf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(t){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new ti;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.rc.push(t),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(t){if(!va(t))throw t;B(vE,"Operation failed with retryable error: "+t)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(t){const n=this.hc.then(()=>(this.ac=!0,t().catch(i=>{throw this._c=i,this.ac=!1,ui("INTERNAL UNHANDLED ERROR: ",TE(i)),i}).then(i=>(this.ac=!1,i))));return this.hc=n,n}enqueueAfterDelay(t,n,i){this.Pc(),this.cc.indexOf(t)>-1&&(n=0);const r=Xg.createAndSchedule(this,t,n,i,s=>this.Ec(s));return this.oc.push(r),r}Pc(){this._c&&G(47125,{Rc:TE(this._c)})}verifyOperationInProgress(){}async Ac(){let t;do t=this.hc,await t;while(t!==this.hc)}Vc(t){for(const n of this.oc)if(n.timerId===t)return!0;return!1}dc(t){return this.Ac().then(()=>{this.oc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Ac()})}mc(t){this.cc.push(t)}Ec(t){const n=this.oc.indexOf(t);this.oc.splice(n,1)}}function TE(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+`
`+e.stack),t}class hi extends oh{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=new EE,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new EE(t),this._firestoreClient=void 0,await t}}}function PP(e,t){const n=typeof e=="object"?e:dg(),i=typeof e=="string"?e:mc,r=is(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=gC("firestore");s&&VP(r,...s)}return r}function lh(e){if(e._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||kP(e),e._firestoreClient}function kP(e){var i,r,s,a;const t=e._freezeSettings(),n=MP(e._databaseId,((i=e._app)==null?void 0:i.options.appId)||"",e._persistenceKey,(r=e._app)==null?void 0:r.options.apiKey,t);e._componentsProvider||(s=t.localCache)!=null&&s._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(e._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),e._firestoreClient=new bP(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(u){const c=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(c),_online:c}}(e._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new nn(ue.fromBase64String(t))}catch(n){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new nn(ue.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(fl(t,nn._jsonSchema))return nn.fromBase64String(t.bytes)}}nn._jsonSchemaVersion="firestore/bytes/1.0",nn._jsonSchema={type:Gt("string",nn._jsonSchemaVersion),bytes:Gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return it(this._lat,t._lat)||it(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:On._jsonSchemaVersion}}static fromJSON(t){if(fl(t,On._jsonSchema))return new On(t.latitude,t.longitude)}}On._jsonSchemaVersion="firestore/geoPoint/1.0",On._jsonSchema={type:Gt("string",On._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0}(this._values,t._values)}toJSON(){return{type:gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(fl(t,gn._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(n=>typeof n=="number"))return new gn(t.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}gn._jsonSchemaVersion="firestore/vectorValue/1.0",gn._jsonSchema={type:Gt("string",gn._jsonSchemaVersion),vectorValues:Gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=/^__.*__$/;class UP{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new dr(t,this.data,this.fieldMask,n,this.fieldTransforms):new dl(t,this.data,n,this.fieldTransforms)}}class gw{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new dr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function pw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{dataSource:e})}}class ap{constructor(t,n,i,r,s,a){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new ap({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(t){var r;const n=(r=this.path)==null?void 0:r.child(t),i=this.i({path:n,arrayElement:!1});return i.wc(t),i}Sc(t){var r;const n=(r=this.path)==null?void 0:r.child(t),i=this.i({path:n,arrayElement:!1});return i.fc(),i}bc(t){return this.i({path:void 0,arrayElement:!0})}Dc(t){return Ac(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let t=0;t<this.path.length;t++)this.wc(this.path.get(t))}wc(t){if(t.length===0)throw this.Dc("Document fields must not be empty");if(pw(this.dataSource)&&LP.test(t))throw this.Dc('Document fields cannot begin and end with "__"')}}class xP{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||rh(t)}V(t,n,i,r=!1){return new ap({dataSource:t,methodName:n,targetDoc:i,path:ae.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(e){const t=e._freezeSettings(),n=rh(e._databaseId);return new xP(e._databaseId,!!t.ignoreUndefinedProperties,n)}function yw(e,t,n,i,r,s={}){const a=e.V(s.merge||s.mergeFields?2:0,t,n,r);up("Data must be an object, but it was:",a,i);const l=_w(i,a);let u,c;if(s.merge)u=new ze(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const m of s.mergeFields){const g=Xr(t,m,n);if(!a.contains(g))throw new z(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Tw(d,g)||d.push(g)}u=new ze(d),c=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,c=a.fieldTransforms;return new UP(new Re(l),u,c)}class ch extends _l{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.Dc(`${this._methodName}() can only appear at the top level of your update data`):t.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ch}}class op extends _l{_toFieldTransform(t){return new Mb(t.path,new Ho)}isEqual(t){return t instanceof op}}class lp extends _l{constructor(t,n){super(t),this.Fc=n}_toFieldTransform(t){const n=new Qo(t.serializer,Rb(t.serializer,this.Fc));return new Mb(t.path,n)}isEqual(t){return t instanceof lp&&this.Fc===t.Fc}}function zP(e,t,n,i){const r=e.V(1,t,n);up("Data must be an object, but it was:",r,i);const s=[],a=Re.empty();fr(i,(u,c)=>{const d=Ew(t,u,n);c=Dt(c);const m=r.Sc(d);if(c instanceof ch)s.push(d);else{const g=vl(c,m);g!=null&&(s.push(d),a.set(d,g))}});const l=new ze(s);return new gw(a,l,r.fieldTransforms)}function BP(e,t,n,i,r,s){const a=e.V(1,t,n),l=[Xr(t,i,n)],u=[r];if(s.length%2!=0)throw new z(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(Xr(t,s[g])),u.push(s[g+1]);const c=[],d=Re.empty();for(let g=l.length-1;g>=0;--g)if(!Tw(c,l[g])){const _=l[g];let D=u[g];D=Dt(D);const M=a.Sc(_);if(D instanceof ch)c.push(_);else{const L=vl(D,M);L!=null&&(c.push(_),d.set(_,L))}}const m=new ze(c);return new gw(d,m,a.fieldTransforms)}function qP(e,t,n,i=!1){return vl(n,e.V(i?4:3,t))}function vl(e,t){if(vw(e=Dt(e)))return up("Unsupported field value:",t,e),_w(e,t);if(e instanceof _l)return function(i,r){if(!pw(r.dataSource))throw r.Dc(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.Dc("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const l of i){let u=vl(l,r.bc(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Dt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Rb(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=wt.fromDate(i);return{timestampValue:yc(r.serializer,s)}}if(i instanceof wt){const s=new wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:yc(r.serializer,s)}}if(i instanceof On)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof nn)return{bytesValue:xb(r.serializer,i._byteString)};if(i instanceof Pt){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qg(i.firestore._databaseId||r.databaseId,i._key.path)}}if(i instanceof gn)return function(a,l){const u=a instanceof gn?a.toArray():a;return{mapValue:{fields:{[hb]:{stringValue:fb},[gc]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw l.Dc("VectorValues must only contain numeric values.");return Ug(l.serializer,d)})}}}}}}(i,r);if(Gb(i))return i._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${$c(i)}`)}(e,t)}function _w(e,t){const n={};return sb(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fr(e,(i,r)=>{const s=vl(r,t.yc(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function vw(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof wt||e instanceof On||e instanceof nn||e instanceof Pt||e instanceof _l||e instanceof gn||Gb(e))}function up(e,t,n){if(!vw(n)||!ib(n)){const i=$c(n);throw i==="an object"?t.Dc(e+" a custom object"):t.Dc(e+" "+i)}}function Xr(e,t,n){if((t=Dt(t))instanceof sp)return t._internalPath;if(typeof t=="string")return Ew(e,t);throw Ac("Field path arguments must be of type string or ",e,!1,void 0,n)}const jP=new RegExp("[~\\*/\\[\\]]");function Ew(e,t,n){if(t.search(jP)>=0)throw Ac(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new sp(...t.split("."))._internalPath}catch{throw Ac(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ac(e,t,n,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new z(V.INVALID_ARGUMENT,l+e+u)}function Tw(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{convertValue(t,n="none"){switch(rr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return kt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ir(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw G(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return fr(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertVectorValue(t){var i,r,s;const n=(s=(r=(i=t.fields)==null?void 0:i[gc].arrayValue)==null?void 0:r.values)==null?void 0:s.map(a=>kt(a.doubleValue));return new gn(n)}convertGeoPoint(t){return new On(kt(t.latitude),kt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Wc(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Bo(t));default:return null}}convertTimestamp(t){const n=nr(t);return new wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=Et.fromString(t);ft(Hb(i),9688,{name:t});const r=new qo(i.get(1),i.get(3)),s=new F(i.popFirst(5));return r.isEqual(n)||ui(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp extends FP{constructor(t){super(),this.firestore=t}convertBytes(t){return new nn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Ve(){return new op("serverTimestamp")}function tu(e){return new lp("increment",e)}const AE="@firebase/firestore",SE="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new HP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(Xr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HP extends Aw{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hp{}class bw extends hp{}function kf(e,t,...n){let i=[];t instanceof hp&&i.push(t),i=i.concat(n),function(s){const a=s.filter(u=>u instanceof fp).length,l=s.filter(u=>u instanceof hh).length;if(a>1||a>0&&l>0)throw new z(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)e=r._apply(e);return e}class hh extends bw{constructor(t,n,i){super(),this._field=t,this._op=n,this._value=i,this.type="where"}static _create(t,n,i){return new hh(t,n,i)}_apply(t){const n=this._parse(t);return ww(t._query,n),new mr(t.firestore,t.converter,Xd(t._query,n))}_parse(t){const n=uh(t.firestore);return function(s,a,l,u,c,d,m){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){RE(m,d);const D=[];for(const M of m)D.push(IE(u,s,M));g={arrayValue:{values:D}}}else g=IE(u,s,m)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||RE(m,d),g=qP(l,a,m,d==="in"||d==="not-in");return Ft.create(c,d,g)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function GP(e,t,n){const i=t,r=Xr("where",e);return hh._create(r,i,n)}class fp extends hp{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new fp(t,n)}_parse(t){const n=this._queryConstraints.map(i=>i._parse(t)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(r,s){let a=r;const l=s.getFlattenedFilters();for(const u of l)ww(a,u),a=Xd(a,u)}(t._query,n),new mr(t.firestore,t.converter,Xd(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dp extends bw{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new dp(t,n)}_apply(t){const n=function(r,s,a){if(r.startAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new z(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fo(s,a)}(t._query,this._field,this._direction);return new mr(t.firestore,t.converter,pV(t._query,n))}}function wE(e,t="asc"){const n=t,i=Xr("orderBy",e);return dp._create(i,n)}function IE(e,t,n){if(typeof(n=Dt(n))=="string"){if(n==="")throw new z(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Eb(t)&&n.indexOf("/")!==-1)throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Et.fromString(n));if(!F.isDocumentKey(i))throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return zv(e,new F(i))}if(n instanceof Pt)return zv(e,n._key);throw new z(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(n)}.`)}function RE(e,t){if(!Array.isArray(e)||e.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ww(e,t){const n=function(r,s){for(const a of r)for(const l of a.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(e.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new z(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Iw(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class no{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ur extends Aw{constructor(t,n,i,r,s,a){super(t,n,i,r,a),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(Xr("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Ur._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ur._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ur._jsonSchema={type:Gt("string",Ur._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class Ru extends Ur{data(t={}){return super.data(t)}}class xr{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new no(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Ru(this._firestore,this._userDataWriter,i.key,i,new no(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(l=>{const u=new Ru(r._firestore,r._userDataWriter,l.doc.key,l.doc,new no(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ru(r._firestore,r._userDataWriter,l.doc.key,l.doc,new no(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,d=-1;return l.type!==0&&(c=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:KP(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=xr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ng.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],r=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function KP(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:e})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr._jsonSchemaVersion="firestore/querySnapshot/1.0",xr._jsonSchema={type:Gt("string",xr._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(e){e=De(e,Pt);const t=De(e.firestore,hi),n=lh(t);return CP(n,e._key).then(i=>Rw(t,e,i))}function YP(e){e=De(e,mr);const t=De(e.firestore,hi),n=lh(t),i=new cp(t);return Sw(e._query),DP(n,e._query).then(r=>new xr(t,i,e,r))}function eu(e,t,n){e=De(e,Pt);const i=De(e.firestore,hi),r=Iw(e.converter,t,n),s=uh(i);return fh(i,[yw(s,"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,on.none())])}function Lf(e,t,n,...i){e=De(e,Pt);const r=De(e.firestore,hi),s=uh(r);let a;return a=typeof(t=Dt(t))=="string"||t instanceof sp?BP(s,"updateDoc",e._key,t,n,i):zP(s,"updateDoc",e._key,t),fh(r,[a.toMutation(e._key,on.exists(!0))])}function CE(e){return fh(De(e.firestore,hi),[new xg(e._key,on.none())])}function Uf(e,t){const n=De(e.firestore,hi),i=Ye(e),r=Iw(e.converter,t),s=uh(e.firestore);return fh(n,[yw(s,"addDoc",i._key,r,e.converter!==null,{}).toMutation(i._key,on.exists(!1))]).then(()=>i)}function nu(e,...t){var c,d,m;e=Dt(e);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof t[i]!="object"||bE(t[i])||(n=t[i++]);const r={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(bE(t[i])){const g=t[i];t[i]=(c=g.next)==null?void 0:c.bind(g),t[i+1]=(d=g.error)==null?void 0:d.bind(g),t[i+2]=(m=g.complete)==null?void 0:m.bind(g)}let s,a,l;if(e instanceof Pt)a=De(e.firestore,hi),l=Zc(e._key.path),s={next:g=>{t[i]&&t[i](Rw(a,e,g))},error:t[i+1],complete:t[i+2]};else{const g=De(e,mr);a=De(g.firestore,hi),l=g._query;const _=new cp(a);s={next:D=>{t[i]&&t[i](new xr(a,_,g,D))},error:t[i+1],complete:t[i+2]},Sw(e._query)}const u=lh(a);return RP(u,l,r,s)}function fh(e,t){const n=lh(e);return OP(n,t)}function Rw(e,t,n){const i=n.docs.get(t._key),r=new cp(e);return new Ur(e,r,t._key,i,new no(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){OM(ga),Nn(new pn("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),l=new hi(new VM(i.getProvider("auth-internal")),new LM(a,i.getProvider("app-check-internal")),ZM(a,r),a);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),an(AE,SE,t),an(AE,SE,"esm2020")})();const $P={apiKey:"AIzaSyBdxuFu9cs0OdurGZneu6l_v72S_u2kmvw",authDomain:"hr-supermarket-db.firebaseapp.com",projectId:"hr-supermarket-db",storageBucket:"hr-supermarket-db.firebasestorage.app",messagingSenderId:"466119121244",appId:"1:466119121244:web:5002c474833406b8d6c999",measurementId:"G-JQ42BL9WE3"},XP=["divyrajchavda1987@gmail.com"],bk="1234",wk="9999",Ik={month:1,year:2026},mp=HA($P);lO().then(e=>{e&&aO(mp)});const vs=CM(mp);mN(vs,xS).catch(()=>{});const Jt=PP(mp),Cw=new Fn;Cw.setCustomParameters({prompt:"select_account"});function Rk(e){return XP.includes(e||"")}const Ck={onChange(e){return yN(vs,e)},async signInWithGoogle(){return UN(vs,Cw)},async signInWithEmail(e,t){return hN(vs,e,t)},async signUp(e,t,n){const i=await cN(vs,t,n);return e&&await dN(i.user,{displayName:e}),i},async signOut(){return _N(vs)}},Dk={subscribeCollection(e,t,n=()=>{}){return nu(kf(Sr(Jt,e),wE("createdAt","desc")),i=>{t(i.docs.map(r=>{var s,a,l,u,c,d,m,g;return{id:r.id,...r.data(),createdAt:((u=(l=(a=(s=r.data().createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))==null?void 0:l.toISOString)==null?void 0:u.call(l))||r.data().createdAt||null,updatedAt:((g=(m=(d=(c=r.data().updatedAt)==null?void 0:c.toDate)==null?void 0:d.call(c))==null?void 0:m.toISOString)==null?void 0:g.call(m))||r.data().updatedAt||null}}))},n)},subscribeOrdersForUser(e,t,n=()=>{}){return nu(kf(Sr(Jt,"orders"),GP("userId","==",e)),i=>{const r=i.docs.map(s=>{var a,l,u,c;return{id:s.id,...s.data(),createdAt:((c=(u=(l=(a=s.data().createdAt)==null?void 0:a.toDate)==null?void 0:l.call(a))==null?void 0:u.toISOString)==null?void 0:c.call(u))||s.data().createdAt||null}}).sort((s,a)=>new Date(a.createdAt||0)-new Date(s.createdAt||0));t(r)},n)},subscribeOrders(e,t=()=>{}){return nu(kf(Sr(Jt,"orders"),wE("createdAt","desc")),n=>{e(n.docs.map(i=>{var r,s,a,l;return{id:i.id,...i.data(),createdAt:((l=(a=(s=(r=i.data().createdAt)==null?void 0:r.toDate)==null?void 0:s.call(r))==null?void 0:a.toISOString)==null?void 0:l.call(a))||i.data().createdAt||null}}))},t)},subscribeDocument(e,t,n,i=()=>{}){return nu(Ye(Jt,e,t),r=>{n(r.exists()?{id:r.id,...r.data()}:null)},i)},async addProduct(e){return Uf(Sr(Jt,"products"),{...e,createdAt:Ve(),updatedAt:Ve()})},async removeProduct(e){return CE(Ye(Jt,"products",e))},async addBanner(e){return Uf(Sr(Jt,"banners"),{...e,createdAt:Ve(),updatedAt:Ve()})},async removeBanner(e){return CE(Ye(Jt,"banners",e))},async savePlatformFee(e,t){return eu(Ye(Jt,"platform_fees",e),t,{merge:!0})},async updatePlatformFeeStatus(e,t){return Lf(Ye(Jt,"platform_fees",e),{status:t,updatedAt:Ve()})},async updateOrderStatus(e,t){return Lf(Ye(Jt,"orders",e),{status:t,updatedAt:Ve()})},async updatePlatformCutStatus(e,t){return Lf(Ye(Jt,"orders",e),{platformCutStatus:t,updatedAt:Ve()})},async saveSettings(e){return eu(Ye(Jt,"settings","storefront"),{...e,updatedAt:Ve()},{merge:!0})},async getSettings(){const e=await QP(Ye(Jt,"settings","storefront"));return e.exists()?e.data():null},async placeOrder(e){const t=await Uf(Sr(Jt,"orders"),{...e,createdAt:Ve(),updatedAt:Ve()});return await eu(Ye(Jt,"platform_earnings","summary"),{totalOrders:tu(1),totalPlatformCut:tu(e.platformCut||0),totalHandlingFee:tu(e.handlingFee||0),totalActualHandling:tu(e.actualHandling||0),lastOrderId:t.id,updatedAt:Ve()},{merge:!0}),t},async seedPlatformFees(e){const t=await YP(Sr(Jt,"platform_fees")),n=new Set(t.docs.map(i=>i.id));await Promise.all(e.filter(i=>!n.has(i.id)).map(i=>eu(Ye(Jt,"platform_fees",i.id),{month:i.month,year:i.year,amount:1500,status:"Pending",createdAt:Ve(),updatedAt:Ve()})))}};function Ok(e,t){const[n,i]=ei.useState(()=>iC(e,t));return ei.useEffect(()=>{rC(e,n)},[e,n]),[n,i]}function Nk(e){const t=()=>window.matchMedia(e).matches,[n,i]=ei.useState(t);return ei.useEffect(()=>{const r=window.matchMedia(e),s=()=>i(r.matches);return s(),r.addEventListener("change",s),()=>r.removeEventListener("change",s)},[e]),n}function Mk(e,t=3500){const[n,i]=ei.useState(0);return ei.useEffect(()=>{if(!e)return;const r=window.setInterval(()=>{i(s=>(s+1)%e)},t);return()=>window.clearInterval(r)},[t,e]),[n,i]}function Vk(e,t="#10231a"){ei.useEffect(()=>{const n=document.body.style.background,i=document.body.style.color,r=document.body.style.margin,s=document.body.style.fontFamily;return document.body.style.margin="0",document.body.style.background=e,document.body.style.color=t,document.body.style.fontFamily="'Segoe UI', system-ui, sans-serif",()=>{document.body.style.background=n,document.body.style.color=i,document.body.style.margin=r,document.body.style.fontFamily=s}},[e,t])}export{Ak as A,dk as B,q_ as C,nk as D,ck as E,uk as F,Rk as G,Q as H,ei as I,sk as J,Mk as K,Vk as L,gk as M,Ok as N,Nk as O,WP as P,rC as Q,tC as S,hk as T,Ek as a,aC as b,bk as c,ek as d,ik as e,ZP as f,tk as g,wk as h,mk as i,rk as j,_k as k,Tk as l,Ik as m,fk as n,vk as o,yk as p,MA as q,pk as r,Ck as s,JP as t,ut as u,Dk as v,j_ as w,ak as x,lk as y,ok as z};
