(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var Nw={exports:{}},Sc={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var i_=Symbol.for("react.transitional.element"),s_=Symbol.for("react.fragment");function Pw(t,e,n){var r=null;if(n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:i_,type:t,key:r,ref:e!==void 0?e:null,props:n}}Sc.Fragment=s_;Sc.jsx=Pw;Sc.jsxs=Pw;Nw.exports=Sc;var K=Nw.exports,Dw={exports:{}},J={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var lp=Symbol.for("react.transitional.element"),a_=Symbol.for("react.portal"),o_=Symbol.for("react.fragment"),l_=Symbol.for("react.strict_mode"),u_=Symbol.for("react.profiler"),c_=Symbol.for("react.consumer"),h_=Symbol.for("react.context"),d_=Symbol.for("react.forward_ref"),f_=Symbol.for("react.suspense"),p_=Symbol.for("react.memo"),Rw=Symbol.for("react.lazy"),m_=Symbol.for("react.activity"),fy=Symbol.iterator;function g_(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ow=Object.assign,Lw={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||xw}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mw(){}Mw.prototype=oa.prototype;function up(t,e,n){this.props=t,this.context=e,this.refs=Lw,this.updater=n||xw}var cp=up.prototype=new Mw;cp.constructor=up;Ow(cp,oa.prototype);cp.isPureReactComponent=!0;var py=Array.isArray;function Fd(){}var Ce={H:null,A:null,T:null,S:null},Fw=Object.prototype.hasOwnProperty;function hp(t,e,n){var r=n.ref;return{$$typeof:lp,type:t,key:e,ref:r!==void 0?r:null,props:n}}function y_(t,e){return hp(t.type,e,t.props)}function dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===lp}function v_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var my=/\/+/g;function Mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?v_(""+t.key):e.toString(36)}function b_(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Fd,Fd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ds(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case lp:case a_:a=!0;break;case Rw:return a=t._init,ds(a(t._payload),e,n,r,i)}}if(a)return i=i(t),a=r===""?"."+Mh(t,0):r,py(i)?(n="",a!=null&&(n=a.replace(my,"$&/")+"/"),ds(i,e,n,"",function(h){return h})):i!=null&&(dp(i)&&(i=y_(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(my,"$&/")+"/")+a)),e.push(i)),1;a=0;var l=r===""?".":r+":";if(py(t))for(var u=0;u<t.length;u++)r=t[u],s=l+Mh(r,u),a+=ds(r,e,n,s,i);else if(u=g_(t),typeof u=="function")for(t=u.call(t),u=0;!(r=t.next()).done;)r=r.value,s=l+Mh(r,u++),a+=ds(r,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return ds(b_(t),e,n,r,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function Rl(t,e,n){if(t==null)return t;var r=[],i=0;return ds(t,r,"","",function(s){return e.call(n,s,i++)}),r}function w_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gy=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},k_={map:Rl,forEach:function(t,e,n){Rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Rl(t,function(){e++}),e},toArray:function(t){return Rl(t,function(e){return e})||[]},only:function(t){if(!dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Activity=m_;J.Children=k_;J.Component=oa;J.Fragment=o_;J.Profiler=u_;J.PureComponent=up;J.StrictMode=l_;J.Suspense=f_;J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ce;J.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Ce.H.useMemoCache(t)}};J.cache=function(t){return function(){return t.apply(null,arguments)}};J.cacheSignal=function(){return null};J.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=Ow({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!Fw.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return hp(t.type,i,r)};J.createContext=function(t){return t={$$typeof:h_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:c_,_context:t},t};J.createElement=function(t,e,n){var r,i={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)Fw.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return hp(t,s,i)};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:d_,render:t}};J.isValidElement=dp;J.lazy=function(t){return{$$typeof:Rw,_payload:{_status:-1,_result:t},_init:w_}};J.memo=function(t,e){return{$$typeof:p_,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=Ce.T,n={};Ce.T=n;try{var r=t(),i=Ce.S;i!==null&&i(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(Fd,gy)}catch(s){gy(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Ce.T=e}};J.unstable_useCacheRefresh=function(){return Ce.H.useCacheRefresh()};J.use=function(t){return Ce.H.use(t)};J.useActionState=function(t,e,n){return Ce.H.useActionState(t,e,n)};J.useCallback=function(t,e){return Ce.H.useCallback(t,e)};J.useContext=function(t){return Ce.H.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t,e){return Ce.H.useDeferredValue(t,e)};J.useEffect=function(t,e){return Ce.H.useEffect(t,e)};J.useEffectEvent=function(t){return Ce.H.useEffectEvent(t)};J.useId=function(){return Ce.H.useId()};J.useImperativeHandle=function(t,e,n){return Ce.H.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return Ce.H.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return Ce.H.useLayoutEffect(t,e)};J.useMemo=function(t,e){return Ce.H.useMemo(t,e)};J.useOptimistic=function(t,e){return Ce.H.useOptimistic(t,e)};J.useReducer=function(t,e,n){return Ce.H.useReducer(t,e,n)};J.useRef=function(t){return Ce.H.useRef(t)};J.useState=function(t){return Ce.H.useState(t)};J.useSyncExternalStore=function(t,e,n){return Ce.H.useSyncExternalStore(t,e,n)};J.useTransition=function(){return Ce.H.useTransition()};J.version="19.2.6";Dw.exports=J;var tr=Dw.exports,Vw={exports:{}},Tc={},Uw={exports:{}},zw={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(j,Z){var Y=j.length;j.push(Z);e:for(;0<Y;){var ve=Y-1>>>1,Ve=j[ve];if(0<i(Ve,Z))j[ve]=Z,j[Y]=Ve,Y=ve;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Z=j[0],Y=j.pop();if(Y!==Z){j[0]=Y;e:for(var ve=0,Ve=j.length,mi=Ve>>>1;ve<mi;){var gi=2*(ve+1)-1,ss=j[gi],Kt=gi+1,pr=j[Kt];if(0>i(ss,Y))Kt<Ve&&0>i(pr,ss)?(j[ve]=pr,j[Kt]=Y,ve=Kt):(j[ve]=ss,j[gi]=Y,ve=gi);else if(Kt<Ve&&0>i(pr,Y))j[ve]=pr,j[Kt]=Y,ve=Kt;else break e}}return Z}function i(j,Z){var Y=j.sortIndex-Z.sortIndex;return Y!==0?Y:j.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,p=null,m=3,w=!1,N=!1,L=!1,M=!1,T=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function D(j){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=j)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function V(j){if(L=!1,D(j),!N)if(n(u)!==null)N=!0,B||(B=!0,I());else{var Z=n(h);Z!==null&&ln(V,Z.startTime-j)}}var B=!1,b=-1,y=5,v=-1;function S(){return M?!0:!(t.unstable_now()-v<y)}function _(){if(M=!1,B){var j=t.unstable_now();v=j;var Z=!0;try{e:{N=!1,L&&(L=!1,k(b),b=-1),w=!0;var Y=m;try{t:{for(D(j),p=n(u);p!==null&&!(p.expirationTime>j&&S());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var Ve=ve(p.expirationTime<=j);if(j=t.unstable_now(),typeof Ve=="function"){p.callback=Ve,D(j),Z=!0;break t}p===n(u)&&r(u),D(j)}else r(u);p=n(u)}if(p!==null)Z=!0;else{var mi=n(h);mi!==null&&ln(V,mi.startTime-j),Z=!1}}break e}finally{p=null,m=Y,w=!1}Z=void 0}}finally{Z?I():B=!1}}}var I;if(typeof C=="function")I=function(){C(_)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,ct=E.port2;E.port1.onmessage=_,I=function(){ct.postMessage(null)}}else I=function(){T(_,0)};function ln(j,Z){b=T(function(){j(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var Y=m;m=Z;try{return j()}finally{m=Y}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=m;m=j;try{return Z()}finally{m=Y}},t.unstable_scheduleCallback=function(j,Z,Y){var ve=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,j){case 1:var Ve=-1;break;case 2:Ve=250;break;case 5:Ve=1073741823;break;case 4:Ve=1e4;break;default:Ve=5e3}return Ve=Y+Ve,j={id:f++,callback:Z,priorityLevel:j,startTime:Y,expirationTime:Ve,sortIndex:-1},Y>ve?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(L?(k(b),b=-1):L=!0,ln(V,Y-ve))):(j.sortIndex=Ve,e(u,j),N||w||(N=!0,B||(B=!0,I()))),j},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(j){var Z=m;return function(){var Y=m;m=Z;try{return j.apply(this,arguments)}finally{m=Y}}}})(zw);Uw.exports=zw;var E_=Uw.exports,jw={exports:{}},kt={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var S_=tr;function Bw(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kr(){}var bt={d:{f:kr,r:function(){throw Error(Bw(522))},D:kr,C:kr,L:kr,m:kr,X:kr,S:kr,M:kr},p:0,findDOMNode:null},T_=Symbol.for("react.portal");function __(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T_,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}var ro=S_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _c(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bt;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Bw(299));return __(t,e,null,n)};kt.flushSync=function(t){var e=ro.T,n=bt.p;try{if(ro.T=null,bt.p=2,t)return t()}finally{ro.T=e,bt.p=n,bt.d.f()}};kt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,bt.d.C(t,e))};kt.prefetchDNS=function(t){typeof t=="string"&&bt.d.D(t)};kt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,r=_c(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?bt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:s}):n==="script"&&bt.d.X(t,{crossOrigin:r,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};kt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=_c(e.as,e.crossOrigin);bt.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&bt.d.M(t)};kt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,r=_c(n,e.crossOrigin);bt.d.L(t,n,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};kt.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=_c(e.as,e.crossOrigin);bt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else bt.d.m(t)};kt.requestFormReset=function(t){bt.d.r(t)};kt.unstable_batchedUpdates=function(t,e){return t(e)};kt.useFormState=function(t,e,n){return ro.H.useFormState(t,e,n)};kt.useFormStatus=function(){return ro.H.useHostTransitionStatus()};kt.version="19.2.6";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(t){console.error(t)}}$w(),jw.exports=kt;var C_=jw.exports;/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Qe=E_,qw=tr,I_=C_;function x(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Hw(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kw(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yy(t){if(Wo(t)!==t)throw Error(x(188))}function A_(t){var e=t.alternate;if(!e){if(e=Wo(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yy(i),t;if(s===r)return yy(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function Ww(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Ww(t),e!==null)return e;t=t.sibling}return null}var Ie=Object.assign,N_=Symbol.for("react.element"),xl=Symbol.for("react.transitional.element"),Ga=Symbol.for("react.portal"),ws=Symbol.for("react.fragment"),Qw=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),Yw=Symbol.for("react.consumer"),qn=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),zd=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),Sr=Symbol.for("react.lazy"),jd=Symbol.for("react.activity"),P_=Symbol.for("react.memo_cache_sentinel"),vy=Symbol.iterator;function Va(t){return t===null||typeof t!="object"?null:(t=vy&&t[vy]||t["@@iterator"],typeof t=="function"?t:null)}var D_=Symbol.for("react.client.reference");function Bd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===D_?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ws:return"Fragment";case Vd:return"Profiler";case Qw:return"StrictMode";case Ud:return"Suspense";case zd:return"SuspenseList";case jd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ga:return"Portal";case qn:return t.displayName||"Context";case Yw:return(t._context.displayName||"Context")+".Consumer";case fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pp:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Sr:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}var Ka=Array.isArray,G=qw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=I_.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Di={pending:!1,data:null,method:null,action:null},$d=[],ks=-1;function On(t){return{current:t}}function tt(t){0>ks||(t.current=$d[ks],$d[ks]=null,ks--)}function we(t,e){ks++,$d[ks]=t.current,t.current=e}var Cn=On(null),So=On(null),Fr=On(null),Au=On(null);function Nu(t,e){switch(we(Fr,e),we(So,t),we(Cn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Tv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Tv(e),t=gE(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(Cn),we(Cn,t)}function Hs(){tt(Cn),tt(So),tt(Fr)}function qd(t){t.memoizedState!==null&&we(Au,t);var e=Cn.current,n=gE(e,t.type);e!==n&&(we(So,t),we(Cn,n))}function Pu(t){So.current===t&&(tt(Cn),tt(So)),Au.current===t&&(tt(Au),Oo._currentValue=Di)}var Fh,by;function Si(t){if(Fh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fh=e&&e[1]||"",by=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fh+t+by}var Vh=!1;function Uh(t,e){if(!t||Vh)return"";Vh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(w){var m=w}Reflect.construct(t,[],p)}else{try{p.call()}catch(w){m=w}t.call(p.prototype)}}else{try{throw Error()}catch(w){m=w}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(w){if(w&&m&&typeof w.stack=="string")return[w.stack,m.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),a=s[0],l=s[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(i=r=0;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(r===u.length||i===h.length)for(r=u.length-1,i=h.length-1;1<=r&&0<=i&&u[r]!==h[i];)i--;for(;1<=r&&0<=i;r--,i--)if(u[r]!==h[i]){if(r!==1||i!==1)do if(r--,i--,0>i||u[r]!==h[i]){var f=`
`+u[r].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=r&&0<=i);break}}}finally{Vh=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Si(n):""}function R_(t,e){switch(t.tag){case 26:case 27:case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return t.child!==e&&e!==null?Si("Suspense Fallback"):Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Uh(t.type,!1);case 11:return Uh(t.type.render,!1);case 1:return Uh(t.type,!0);case 31:return Si("Activity");default:return""}}function wy(t){try{var e="",n=null;do e+=R_(t,n),n=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Hd=Object.prototype.hasOwnProperty,mp=Qe.unstable_scheduleCallback,zh=Qe.unstable_cancelCallback,x_=Qe.unstable_shouldYield,O_=Qe.unstable_requestPaint,zt=Qe.unstable_now,L_=Qe.unstable_getCurrentPriorityLevel,Jw=Qe.unstable_ImmediatePriority,Xw=Qe.unstable_UserBlockingPriority,Du=Qe.unstable_NormalPriority,M_=Qe.unstable_LowPriority,Zw=Qe.unstable_IdlePriority,F_=Qe.log,V_=Qe.unstable_setDisableYieldValue,Qo=null,jt=null;function Rr(t){if(typeof F_=="function"&&V_(t),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Qo,t)}catch{}}var Bt=Math.clz32?Math.clz32:j_,U_=Math.log,z_=Math.LN2;function j_(t){return t>>>=0,t===0?32:31-(U_(t)/z_|0)|0}var Ol=256,Ll=262144,Ml=4194304;function Ti(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cc(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var i=0,s=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var l=r&134217727;return l!==0?(r=l&~s,r!==0?i=Ti(r):(a&=l,a!==0?i=Ti(a):n||(n=l&~t,n!==0&&(i=Ti(n))))):(l=r&~s,l!==0?i=Ti(l):a!==0?i=Ti(a):n||(n=r&~t,n!==0&&(i=Ti(n)))),i===0?0:e!==0&&e!==i&&!(e&s)&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function Yo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function B_(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(){var t=Ml;return Ml<<=1,!(Ml&62914560)&&(Ml=4194304),t}function jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $_(t,e,n,r,i,s){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,u=t.expirationTimes,h=t.hiddenUpdates;for(n=a&~n;0<n;){var f=31-Bt(n),p=1<<f;l[f]=0,u[f]=-1;var m=h[f];if(m!==null)for(h[f]=null,f=0;f<m.length;f++){var w=m[f];w!==null&&(w.lane&=-536870913)}n&=~p}r!==0&&t0(t,r,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(a&~e))}function t0(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Bt(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&261930}function n0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}function r0(t,e){var n=e&-e;return n=n&42?1:gp(n),n&(t.suspendedLanes|e)?0:n}function gp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function i0(){var t=he.p;return t!==0?t:(t=window.event,t===void 0?32:IE(t.type))}function ky(t,e){var n=he.p;try{return he.p=t,e()}finally{he.p=n}}var li=Math.random().toString(36).slice(2),it="__reactFiber$"+li,Pt="__reactProps$"+li,la="__reactContainer$"+li,Gd="__reactEvents$"+li,q_="__reactListeners$"+li,H_="__reactHandles$"+li,Ey="__reactResources$"+li,Xo="__reactMarker$"+li;function vp(t){delete t[it],delete t[Pt],delete t[Gd],delete t[q_],delete t[H_]}function Es(t){var e=t[it];if(e)return e;for(var n=t.parentNode;n;){if(e=n[la]||n[it]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[it])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function ua(t){if(t=t[it]||t[la]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Wa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(x(33))}function Rs(t){var e=t[Ey];return e||(e=t[Ey]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function et(t){t[Xo]=!0}var s0=new Set,a0={};function Yi(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(a0[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var G_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sy={},Ty={};function K_(t){return Hd.call(Ty,t)?!0:Hd.call(Sy,t)?!1:G_.test(t)?Ty[t]=!0:(Sy[t]=!0,!1)}function ru(t,e,n){if(K_(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Fl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Mn(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function W_(t,e,n){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kd(t){if(!t._valueTracker){var e=o0(t)?"checked":"value";t._valueTracker=W_(t,e,""+t[e])}}function l0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Q_=/[\n"\\]/g;function hn(t){return t.replace(Q_,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Wd(t,e,n,r,i,s,a,l){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Yt(e)):t.value!==""+Yt(e)&&(t.value=""+Yt(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?Qd(t,a,Yt(e)):n!=null?Qd(t,a,Yt(n)):r!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Yt(l):t.removeAttribute("name")}function u0(t,e,n,r,i,s,a,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Kd(t);return}n=n!=null?""+Yt(n):"",e=e!=null?""+Yt(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=l?t.checked:!!r,t.defaultChecked=!!r,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),Kd(t)}function Qd(t,e,n){e==="number"&&Ru(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function xs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function c0(t,e,n){if(e!=null&&(e=""+Yt(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Yt(n):""}function h0(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(x(92));if(Ka(r)){if(1<r.length)throw Error(x(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=Yt(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r),Kd(t)}function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Y_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _y(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||Y_.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function d0(t,e,n){if(e!=null&&typeof e!="object")throw Error(x(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var i in e)r=e[i],e.hasOwnProperty(i)&&n[i]!==r&&_y(t,i,r)}else for(var s in e)e.hasOwnProperty(s)&&_y(t,s,e[s])}function bp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var J_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function iu(t){return X_.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hn(){}var Yd=null;function wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ss=null,Os=null;function Cy(t){var e=ua(t);if(e&&(t=e.stateNode)){var n=t[Pt]||null;e:switch(t=e.stateNode,e.type){case"input":if(Wd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=r[Pt]||null;if(!i)throw Error(x(90));Wd(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&l0(r)}break e;case"textarea":c0(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}}}var Bh=!1;function f0(t,e,n){if(Bh)return t(e,n);Bh=!0;try{var r=t(e);return r}finally{if(Bh=!1,(Ss!==null||Os!==null)&&(Vc(),Ss&&(e=Ss,t=Os,Os=Ss=null,Cy(e),t)))for(e=0;e<t.length;e++)Cy(t[e])}}function To(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Pt]||null;if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=!1;if(nr)try{var Ua={};Object.defineProperty(Ua,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",Ua,Ua),window.removeEventListener("test",Ua,Ua)}catch{Jd=!1}var xr=null,kp=null,su=null;function p0(){if(su)return su;var t,e=kp,n=e.length,r,i="value"in xr?xr.value:xr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return su=i.slice(t,1<r?1-r:void 0)}function au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function Iy(){return!1}function Dt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vl:Iy,this.isPropagationStopped=Iy,this}return Ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ic=Dt(Ji),Zo=Ie({},Ji,{view:0,detail:0}),Z_=Dt(Zo),$h,qh,za,Ac=Ie({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?($h=t.screenX-za.screenX,qh=t.screenY-za.screenY):qh=$h=0,za=t),$h)},movementY:function(t){return"movementY"in t?t.movementY:qh}}),Ay=Dt(Ac),eC=Ie({},Ac,{dataTransfer:0}),tC=Dt(eC),nC=Ie({},Zo,{relatedTarget:0}),Hh=Dt(nC),rC=Ie({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),iC=Dt(rC),sC=Ie({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aC=Dt(sC),oC=Ie({},Ji,{data:0}),Ny=Dt(oC),lC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cC[t])?!!e[t]:!1}function Ep(){return hC}var dC=Ie({},Zo,{key:function(t){if(t.key){var e=lC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fC=Dt(dC),pC=Ie({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Py=Dt(pC),mC=Ie({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),gC=Dt(mC),yC=Ie({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),vC=Dt(yC),bC=Ie({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wC=Dt(bC),kC=Ie({},Ji,{newState:0,oldState:0}),EC=Dt(kC),SC=[9,13,27,32],Sp=nr&&"CompositionEvent"in window,io=null;nr&&"documentMode"in document&&(io=document.documentMode);var TC=nr&&"TextEvent"in window&&!io,m0=nr&&(!Sp||io&&8<io&&11>=io),Dy=" ",Ry=!1;function g0(t,e){switch(t){case"keyup":return SC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function _C(t,e){switch(t){case"compositionend":return y0(e);case"keypress":return e.which!==32?null:(Ry=!0,Dy);case"textInput":return t=e.data,t===Dy&&Ry?null:t;default:return null}}function CC(t,e){if(Ts)return t==="compositionend"||!Sp&&g0(t,e)?(t=p0(),su=kp=xr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var IC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!IC[t.type]:e==="textarea"}function v0(t,e,n,r){Ss?Os?Os.push(r):Os=[r]:Ss=r,e=Yu(e,"onChange"),0<e.length&&(n=new Ic("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,_o=null;function AC(t){fE(t,0)}function Nc(t){var e=Wa(t);if(l0(e))return t}function Oy(t,e){if(t==="change")return e}var b0=!1;if(nr){var Gh;if(nr){var Kh="oninput"in document;if(!Kh){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),Kh=typeof Ly.oninput=="function"}Gh=Kh}else Gh=!1;b0=Gh&&(!document.documentMode||9<document.documentMode)}function My(){so&&(so.detachEvent("onpropertychange",w0),_o=so=null)}function w0(t){if(t.propertyName==="value"&&Nc(_o)){var e=[];v0(e,_o,t,wp(t)),f0(AC,e)}}function NC(t,e,n){t==="focusin"?(My(),so=e,_o=n,so.attachEvent("onpropertychange",w0)):t==="focusout"&&My()}function PC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(_o)}function DC(t,e){if(t==="click")return Nc(e)}function RC(t,e){if(t==="input"||t==="change")return Nc(e)}function xC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:xC;function Co(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hd.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vy(t,e){var n=Fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fy(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ru(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ru(t.document)}return e}function Tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var OC=nr&&"documentMode"in document&&11>=document.documentMode,_s=null,Xd=null,ao=null,Zd=!1;function Uy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zd||_s==null||_s!==Ru(r)||(r=_s,"selectionStart"in r&&Tp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Co(ao,r)||(ao=r,r=Yu(Xd,"onSelect"),0<r.length&&(e=new Ic("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function ki(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Cs={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionrun:ki("Transition","TransitionRun"),transitionstart:ki("Transition","TransitionStart"),transitioncancel:ki("Transition","TransitionCancel"),transitionend:ki("Transition","TransitionEnd")},Wh={},S0={};nr&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function Xi(t){if(Wh[t])return Wh[t];if(!Cs[t])return t;var e=Cs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S0)return Wh[t]=e[n];return t}var T0=Xi("animationend"),_0=Xi("animationiteration"),C0=Xi("animationstart"),LC=Xi("transitionrun"),MC=Xi("transitionstart"),FC=Xi("transitioncancel"),I0=Xi("transitionend"),A0=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function vn(t,e){A0.set(t,e),Yi(e,[t])}var xu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qt=[],Is=0,_p=0;function Pc(){for(var t=Is,e=_p=Is=0;e<t;){var n=Qt[e];Qt[e++]=null;var r=Qt[e];Qt[e++]=null;var i=Qt[e];Qt[e++]=null;var s=Qt[e];if(Qt[e++]=null,r!==null&&i!==null){var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}s!==0&&N0(n,i,s)}}function Dc(t,e,n,r){Qt[Is++]=t,Qt[Is++]=e,Qt[Is++]=n,Qt[Is++]=r,_p|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Cp(t,e,n,r){return Dc(t,e,n,r),Ou(t)}function Zi(t,e){return Dc(t,null,null,e),Ou(t)}function N0(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Bt(n),t=s.hiddenUpdates,r=t[i],r===null?t[i]=[e]:r.push(e),e.lane=n|536870912),s):null}function Ou(t){if(50<go)throw go=0,Ef=null,Error(x(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var As={};function VC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new VC(t,e,n,r)}function Ip(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yn(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function P0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ou(t,e,n,r,i,s){var a=0;if(r=t,typeof t=="function")Ip(t)&&(a=1);else if(typeof t=="string")a=$I(t,n,Cn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case jd:return t=Mt(31,n,e,i),t.elementType=jd,t.lanes=s,t;case ws:return Ri(n.children,i,s,e);case Qw:a=8,i|=24;break;case Vd:return t=Mt(12,n,e,i|2),t.elementType=Vd,t.lanes=s,t;case Ud:return t=Mt(13,n,e,i),t.elementType=Ud,t.lanes=s,t;case zd:return t=Mt(19,n,e,i),t.elementType=zd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qn:a=10;break e;case Yw:a=9;break e;case fp:a=11;break e;case pp:a=14;break e;case Sr:a=16,r=null;break e}a=29,n=Error(x(130,t===null?"null":typeof t,"")),r=null}return e=Mt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ri(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Qh(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function D0(t){var e=Mt(18,null,null,0);return e.stateNode=t,e}function Yh(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var zy=new WeakMap;function Zt(t,e){if(typeof t=="object"&&t!==null){var n=zy.get(t);return n!==void 0?n:(e={value:t,source:e,stack:wy(e)},zy.set(t,e),e)}return{value:t,source:e,stack:wy(e)}}var Ns=[],Ps=0,Lu=null,Io=0,Jt=[],Xt=0,Yr=null,Sn=1,Tn="";function jn(t,e){Ns[Ps++]=Io,Ns[Ps++]=Lu,Lu=t,Io=e}function R0(t,e,n){Jt[Xt++]=Sn,Jt[Xt++]=Tn,Jt[Xt++]=Yr,Yr=t;var r=Sn;t=Tn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Sn=1<<32-Bt(e)+i|n<<i|r,Tn=s+t}else Sn=1<<s|n<<i|r,Tn=t}function Ap(t){t.return!==null&&(jn(t,1),R0(t,1,0))}function Np(t){for(;t===Lu;)Lu=Ns[--Ps],Ns[Ps]=null,Io=Ns[--Ps],Ns[Ps]=null;for(;t===Yr;)Yr=Jt[--Xt],Jt[Xt]=null,Tn=Jt[--Xt],Jt[Xt]=null,Sn=Jt[--Xt],Jt[Xt]=null}function x0(t,e){Jt[Xt++]=Sn,Jt[Xt++]=Tn,Jt[Xt++]=Yr,Sn=e.id,Tn=e.overflow,Yr=t}var st=null,Te=null,oe=!1,Vr=null,en=!1,tf=Error(x(519));function Jr(t){var e=Error(x(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ao(Zt(e,t)),tf}function jy(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[it]=t,e[Pt]=r,n){case"dialog":te("cancel",e),te("close",e);break;case"iframe":case"object":case"embed":te("load",e);break;case"video":case"audio":for(n=0;n<Ro.length;n++)te(Ro[n],e);break;case"source":te("error",e);break;case"img":case"image":case"link":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"input":te("invalid",e),u0(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":te("invalid",e);break;case"textarea":te("invalid",e),h0(e,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||mE(e.textContent,n)?(r.popover!=null&&(te("beforetoggle",e),te("toggle",e)),r.onScroll!=null&&te("scroll",e),r.onScrollEnd!=null&&te("scrollend",e),r.onClick!=null&&(e.onclick=Hn),e=!0):e=!1,e||Jr(t,!0)}function By(t){for(st=t.return;st;)switch(st.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:st=st.return}}function cs(t){if(t!==st)return!1;if(!oe)return By(t),oe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||If(t.type,t.memoizedProps)),n=!n),n&&Te&&Jr(t),By(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));Te=Av(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));Te=Av(t)}else e===27?(e=Te,ui(t.type)?(t=Df,Df=null,Te=t):Te=e):Te=st?nn(t.stateNode.nextSibling):null;return!0}function Vi(){Te=st=null,oe=!1}function Jh(){var t=Vr;return t!==null&&(_t===null?_t=t:_t.push.apply(_t,t),Vr=null),t}function Ao(t){Vr===null?Vr=[t]:Vr.push(t)}var nf=On(null),es=null,Gn=null;function _r(t,e,n){we(nf,e._currentValue),e._currentValue=n}function Jn(t){t._currentValue=nf.current,tt(nf)}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function sf(t,e,n,r){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var a=i.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=i;for(var u=0;u<e.length;u++)if(l.context===e[u]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,t),r||(a=null);break e}s=l.next}}else if(i.tag===18){if(a=i.return,a===null)throw Error(x(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),rf(a,n,t),a=null}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}}function ca(t,e,n,r){t=null;for(var i=e,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var a=i.alternate;if(a===null)throw Error(x(387));if(a=a.memoizedProps,a!==null){var l=i.type;Ht(i.pendingProps.value,a.value)||(t!==null?t.push(l):t=[l])}}else if(i===Au.current){if(a=i.alternate,a===null)throw Error(x(387));a.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}i=i.return}t!==null&&sf(e,t,n,r),e.flags|=262144}function Mu(t){for(t=t.firstContext;t!==null;){if(!Ht(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ui(t){es=t,Gn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ot(t){return O0(es,t)}function Ul(t,e){return es===null&&Ui(t),O0(t,e)}function O0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Gn===null){if(t===null)throw Error(x(308));Gn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gn=Gn.next=e;return n}var UC=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},zC=Qe.unstable_scheduleCallback,jC=Qe.unstable_NormalPriority,Be={$$typeof:qn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pp(){return{controller:new UC,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&zC(jC,function(){t.controller.abort()})}var oo=null,af=0,Ws=0,Ls=null;function BC(t,e){if(oo===null){var n=oo=[];af=0,Ws=tm(),Ls={status:"pending",value:void 0,then:function(r){n.push(r)}}}return af++,e.then($y,$y),e}function $y(){if(--af===0&&oo!==null){Ls!==null&&(Ls.status="fulfilled");var t=oo;oo=null,Ws=0,Ls=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function $C(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var qy=G.S;G.S=function(t,e){Wk=zt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&BC(t,e),qy!==null&&qy(t,e)};var xi=On(null);function Dp(){var t=xi.current;return t!==null?t:ye.pooledCache}function lu(t,e){e===null?we(xi,xi.current):we(xi,e.pool)}function L0(){var t=Dp();return t===null?null:{parent:Be._currentValue,pool:t}}var ha=Error(x(460)),Rp=Error(x(474)),Rc=Error(x(542)),Fu={then:function(){}};function Hy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function M0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Hn,Hn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ky(t),t;default:if(typeof e.status=="string")e.then(Hn,Hn);else{if(t=ye,t!==null&&100<t.shellSuspendCounter)throw Error(x(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=r}},function(r){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ky(t),t}throw Oi=e,ha}}function _i(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Oi=n,ha):n}}var Oi=null;function Gy(){if(Oi===null)throw Error(x(459));var t=Oi;return Oi=null,t}function Ky(t){if(t===ha||t===Rc)throw Error(x(483))}var Ms=null,No=0;function zl(t){var e=No;return No+=1,Ms===null&&(Ms=[]),M0(Ms,t,e)}function ja(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function jl(t,e){throw e.$$typeof===N_?Error(x(525)):(t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function F0(t){function e(T,k){if(t){var C=T.deletions;C===null?(T.deletions=[k],T.flags|=16):C.push(k)}}function n(T,k){if(!t)return null;for(;k!==null;)e(T,k),k=k.sibling;return null}function r(T){for(var k=new Map;T!==null;)T.key!==null?k.set(T.key,T):k.set(T.index,T),T=T.sibling;return k}function i(T,k){return T=Yn(T,k),T.index=0,T.sibling=null,T}function s(T,k,C){return T.index=C,t?(C=T.alternate,C!==null?(C=C.index,C<k?(T.flags|=67108866,k):C):(T.flags|=67108866,k)):(T.flags|=1048576,k)}function a(T){return t&&T.alternate===null&&(T.flags|=67108866),T}function l(T,k,C,D){return k===null||k.tag!==6?(k=Qh(C,T.mode,D),k.return=T,k):(k=i(k,C),k.return=T,k)}function u(T,k,C,D){var V=C.type;return V===ws?f(T,k,C.props.children,D,C.key):k!==null&&(k.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&_i(V)===k.type)?(k=i(k,C.props),ja(k,C),k.return=T,k):(k=ou(C.type,C.key,C.props,null,T.mode,D),ja(k,C),k.return=T,k)}function h(T,k,C,D){return k===null||k.tag!==4||k.stateNode.containerInfo!==C.containerInfo||k.stateNode.implementation!==C.implementation?(k=Yh(C,T.mode,D),k.return=T,k):(k=i(k,C.children||[]),k.return=T,k)}function f(T,k,C,D,V){return k===null||k.tag!==7?(k=Ri(C,T.mode,D,V),k.return=T,k):(k=i(k,C),k.return=T,k)}function p(T,k,C){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Qh(""+k,T.mode,C),k.return=T,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case xl:return C=ou(k.type,k.key,k.props,null,T.mode,C),ja(C,k),C.return=T,C;case Ga:return k=Yh(k,T.mode,C),k.return=T,k;case Sr:return k=_i(k),p(T,k,C)}if(Ka(k)||Va(k))return k=Ri(k,T.mode,C,null),k.return=T,k;if(typeof k.then=="function")return p(T,zl(k),C);if(k.$$typeof===qn)return p(T,Ul(T,k),C);jl(T,k)}return null}function m(T,k,C,D){var V=k!==null?k.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return V!==null?null:l(T,k,""+C,D);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case xl:return C.key===V?u(T,k,C,D):null;case Ga:return C.key===V?h(T,k,C,D):null;case Sr:return C=_i(C),m(T,k,C,D)}if(Ka(C)||Va(C))return V!==null?null:f(T,k,C,D,null);if(typeof C.then=="function")return m(T,k,zl(C),D);if(C.$$typeof===qn)return m(T,k,Ul(T,C),D);jl(T,C)}return null}function w(T,k,C,D,V){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return T=T.get(C)||null,l(k,T,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xl:return T=T.get(D.key===null?C:D.key)||null,u(k,T,D,V);case Ga:return T=T.get(D.key===null?C:D.key)||null,h(k,T,D,V);case Sr:return D=_i(D),w(T,k,C,D,V)}if(Ka(D)||Va(D))return T=T.get(C)||null,f(k,T,D,V,null);if(typeof D.then=="function")return w(T,k,C,zl(D),V);if(D.$$typeof===qn)return w(T,k,C,Ul(k,D),V);jl(k,D)}return null}function N(T,k,C,D){for(var V=null,B=null,b=k,y=k=0,v=null;b!==null&&y<C.length;y++){b.index>y?(v=b,b=null):v=b.sibling;var S=m(T,b,C[y],D);if(S===null){b===null&&(b=v);break}t&&b&&S.alternate===null&&e(T,b),k=s(S,k,y),B===null?V=S:B.sibling=S,B=S,b=v}if(y===C.length)return n(T,b),oe&&jn(T,y),V;if(b===null){for(;y<C.length;y++)b=p(T,C[y],D),b!==null&&(k=s(b,k,y),B===null?V=b:B.sibling=b,B=b);return oe&&jn(T,y),V}for(b=r(b);y<C.length;y++)v=w(b,T,y,C[y],D),v!==null&&(t&&v.alternate!==null&&b.delete(v.key===null?y:v.key),k=s(v,k,y),B===null?V=v:B.sibling=v,B=v);return t&&b.forEach(function(_){return e(T,_)}),oe&&jn(T,y),V}function L(T,k,C,D){if(C==null)throw Error(x(151));for(var V=null,B=null,b=k,y=k=0,v=null,S=C.next();b!==null&&!S.done;y++,S=C.next()){b.index>y?(v=b,b=null):v=b.sibling;var _=m(T,b,S.value,D);if(_===null){b===null&&(b=v);break}t&&b&&_.alternate===null&&e(T,b),k=s(_,k,y),B===null?V=_:B.sibling=_,B=_,b=v}if(S.done)return n(T,b),oe&&jn(T,y),V;if(b===null){for(;!S.done;y++,S=C.next())S=p(T,S.value,D),S!==null&&(k=s(S,k,y),B===null?V=S:B.sibling=S,B=S);return oe&&jn(T,y),V}for(b=r(b);!S.done;y++,S=C.next())S=w(b,T,y,S.value,D),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?y:S.key),k=s(S,k,y),B===null?V=S:B.sibling=S,B=S);return t&&b.forEach(function(I){return e(T,I)}),oe&&jn(T,y),V}function M(T,k,C,D){if(typeof C=="object"&&C!==null&&C.type===ws&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case xl:e:{for(var V=C.key;k!==null;){if(k.key===V){if(V=C.type,V===ws){if(k.tag===7){n(T,k.sibling),D=i(k,C.props.children),D.return=T,T=D;break e}}else if(k.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sr&&_i(V)===k.type){n(T,k.sibling),D=i(k,C.props),ja(D,C),D.return=T,T=D;break e}n(T,k);break}else e(T,k);k=k.sibling}C.type===ws?(D=Ri(C.props.children,T.mode,D,C.key),D.return=T,T=D):(D=ou(C.type,C.key,C.props,null,T.mode,D),ja(D,C),D.return=T,T=D)}return a(T);case Ga:e:{for(V=C.key;k!==null;){if(k.key===V)if(k.tag===4&&k.stateNode.containerInfo===C.containerInfo&&k.stateNode.implementation===C.implementation){n(T,k.sibling),D=i(k,C.children||[]),D.return=T,T=D;break e}else{n(T,k);break}else e(T,k);k=k.sibling}D=Yh(C,T.mode,D),D.return=T,T=D}return a(T);case Sr:return C=_i(C),M(T,k,C,D)}if(Ka(C))return N(T,k,C,D);if(Va(C)){if(V=Va(C),typeof V!="function")throw Error(x(150));return C=V.call(C),L(T,k,C,D)}if(typeof C.then=="function")return M(T,k,zl(C),D);if(C.$$typeof===qn)return M(T,k,Ul(T,C),D);jl(T,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,k!==null&&k.tag===6?(n(T,k.sibling),D=i(k,C),D.return=T,T=D):(n(T,k),D=Qh(C,T.mode,D),D.return=T,T=D),a(T)):n(T,k)}return function(T,k,C,D){try{No=0;var V=M(T,k,C,D);return Ms=null,V}catch(b){if(b===ha||b===Rc)throw b;var B=Mt(29,b,null,T.mode);return B.lanes=D,B.return=T,B}finally{}}}var zi=F0(!0),V0=F0(!1),Tr=!1;function xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ur(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,e=Ou(t),N0(t,null,n),e}return Dc(t,r,e,n),Ou(t)}function lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}function Xh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var lf=!1;function uo(){if(lf){var t=Ls;if(t!==null)throw t}}function co(t,e,n,r){lf=!1;var i=t.updateQueue;Tr=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;a=0,f=h=u=null,l=s;do{var m=l.lane&-536870913,w=m!==l.lane;if(w?(ae&m)===m:(r&m)===m){m!==0&&m===Ws&&(lf=!0),f!==null&&(f=f.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var N=t,L=l;m=e;var M=n;switch(L.tag){case 1:if(N=L.payload,typeof N=="function"){p=N.call(M,p,m);break e}p=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=L.payload,m=typeof N=="function"?N.call(M,p,m):N,m==null)break e;p=Ie({},p,m);break e;case 2:Tr=!0}}m=l.callback,m!==null&&(t.flags|=64,w&&(t.flags|=8192),w=i.callbacks,w===null?i.callbacks=[m]:w.push(m))}else w={lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=w,u=p):f=f.next=w,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;w=l,l=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Zr|=a,t.lanes=a,t.memoizedState=p}}function U0(t,e){if(typeof t!="function")throw Error(x(191,t));t.call(e)}function z0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)U0(n[t],e)}var Qs=On(null),Vu=On(0);function Wy(t,e){t=ar,we(Vu,t),we(Qs,e),ar=t|e.baseLanes}function uf(){we(Vu,ar),we(Qs,Qs.current)}function Op(){ar=Vu.current,tt(Qs),tt(Vu)}var Gt=On(null),mn=null;function Cr(t){var e=t.alternate;we(Me,Me.current&1),we(Gt,t),mn===null&&(e===null||Qs.current!==null||e.memoizedState!==null)&&(mn=t)}function cf(t){we(Me,Me.current),we(Gt,t),mn===null&&(mn=t)}function j0(t){t.tag===22?(we(Me,Me.current),we(Gt,t),mn===null&&(mn=t)):Ir()}function Ir(){we(Me,Me.current),we(Gt,Gt.current)}function Lt(t){tt(Gt),mn===t&&(mn=null),tt(Me)}var Me=On(0);function Uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Nf(n)||Pf(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rr=0,X=null,ge=null,ze=null,zu=!1,Fs=!1,ji=!1,ju=0,Po=0,Vs=null,qC=0;function Re(){throw Error(x(321))}function Lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function Mp(t,e,n,r,i,s){return rr=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,G.H=t===null||t.memoizedState===null?vk:Kp,ji=!1,s=n(r,i),ji=!1,Fs&&(s=$0(e,n,r,i)),B0(t),s}function B0(t){G.H=Do;var e=ge!==null&&ge.next!==null;if(rr=0,ze=ge=X=null,zu=!1,Po=0,Vs=null,e)throw Error(x(300));t===null||qe||(t=t.dependencies,t!==null&&Mu(t)&&(qe=!0))}function $0(t,e,n,r){X=t;var i=0;do{if(Fs&&(Vs=null),Po=0,Fs=!1,25<=i)throw Error(x(301));if(i+=1,ze=ge=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}G.H=bk,s=e(n,r)}while(Fs);return s}function HC(){var t=G.H,e=t.useState()[0];return e=typeof e.then=="function"?tl(e):e,t=t.useState()[0],(ge!==null?ge.memoizedState:null)!==t&&(X.flags|=1024),e}function Fp(){var t=ju!==0;return ju=0,t}function Vp(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Up(t){if(zu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}zu=!1}rr=0,ze=ge=X=null,Fs=!1,Po=ju=0,Vs=null}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?X.memoizedState=ze=t:ze=ze.next=t,ze}function Fe(){if(ge===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ze===null?X.memoizedState:ze.next;if(e!==null)ze=e,ge=t;else{if(t===null)throw X.alternate===null?Error(x(467)):Error(x(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ze===null?X.memoizedState=ze=t:ze=ze.next=t}return ze}function xc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var e=Po;return Po+=1,Vs===null&&(Vs=[]),t=M0(Vs,t,e),e=X,(ze===null?e.memoizedState:ze.next)===null&&(e=e.alternate,G.H=e===null||e.memoizedState===null?vk:Kp),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===qn)return ot(t)}throw Error(x(438,String(t)))}function zp(t){var e=null,n=X.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=xc(),X.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=P_;return e.index++,n}function ir(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Fe();return jp(e,ge,t)}function jp(t,e,n){var r=t.queue;if(r===null)throw Error(x(311));r.lastRenderedReducer=n;var i=t.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}e.baseQueue=i=s,r.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var l=a=null,u=null,h=e,f=!1;do{var p=h.lane&-536870913;if(p!==h.lane?(ae&p)===p:(rr&p)===p){var m=h.revertLane;if(m===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),p===Ws&&(f=!0);else if((rr&m)===m){h=h.next,m===Ws&&(f=!0);continue}else p={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=p,a=s):u=u.next=p,X.lanes|=m,Zr|=m;p=h.action,ji&&n(s,p),s=h.hasEagerState?h.eagerState:n(s,p)}else m={lane:p,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=s):u=u.next=m,X.lanes|=p,Zr|=p;h=h.next}while(h!==null&&h!==e);if(u===null?a=s:u.next=l,!Ht(s,t.memoizedState)&&(qe=!0,f&&(n=Ls,n!==null)))throw n;t.memoizedState=s,t.baseState=a,t.baseQueue=u,r.lastRenderedState=s}return i===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Zh(t){var e=Fe(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ht(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function q0(t,e,n){var r=X,i=Fe(),s=oe;if(s){if(n===void 0)throw Error(x(407));n=n()}else n=e();var a=!Ht((ge||i).memoizedState,n);if(a&&(i.memoizedState=n,qe=!0),i=i.queue,Bp(K0.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},G0.bind(null,r,i,n,e),null),ye===null)throw Error(x(349));s||rr&127||H0(r,e,n)}return n}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e=xc(),X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&Q0(t)}function K0(t,e,n){return n(function(){W0(e)&&Q0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Q0(t){var e=Zi(t,2);e!==null&&At(e,t,2)}function hf(t){var e=vt();if(typeof t=="function"){var n=t;if(t=n(),ji){Rr(!0);try{n()}finally{Rr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:t},e}function Y0(t,e,n,r){return t.baseState=n,jp(t,ge,typeof r=="function"?r:ir)}function GC(t,e,n,r,i){if(Mc(t))throw Error(x(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};G.T!==null?n(!0):s.isTransition=!1,r(s),n=e.pending,n===null?(s.next=e.pending=s,J0(e,s)):(s.next=n.next,e.pending=n.next=s)}}function J0(t,e){var n=e.action,r=e.payload,i=t.state;if(e.isTransition){var s=G.T,a={};G.T=a;try{var l=n(i,r),u=G.S;u!==null&&u(a,l),Qy(t,e,l)}catch(h){df(t,e,h)}finally{s!==null&&a.types!==null&&(s.types=a.types),G.T=s}}else try{s=n(i,r),Qy(t,e,s)}catch(h){df(t,e,h)}}function Qy(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Yy(t,e,r)},function(r){return df(t,e,r)}):Yy(t,e,n)}function Yy(t,e,n){e.status="fulfilled",e.value=n,X0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,J0(t,n)))}function df(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,X0(e),e=e.next;while(e!==r)}t.action=null}function X0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Z0(t,e){return e}function Jy(t,e){if(oe){var n=ye.formState;if(n!==null){e:{var r=X;if(oe){if(Te){t:{for(var i=Te,s=en;i.nodeType!==8;){if(!s){i=null;break t}if(i=nn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Te=nn(i.nextSibling),r=i.data==="F!";break e}}Jr(r)}r=!1}r&&(e=n[0])}}return n=vt(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z0,lastRenderedState:e},n.queue=r,n=mk.bind(null,X,r),r.dispatch=n,r=hf(!1),s=Gp.bind(null,X,!1,r.queue),r=vt(),i={state:e,dispatch:null,action:t,pending:null},r.queue=i,n=GC.bind(null,X,i,s,n),i.dispatch=n,r.memoizedState=t,[e,n,!1]}function Xy(t){var e=Fe();return ek(e,ge,t)}function ek(t,e,n){if(e=jp(t,e,Z0)[0],t=uu(ir)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=tl(e)}catch(a){throw a===ha?Rc:a}else r=e;e=Fe();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(X.flags|=2048,Ys(9,{destroy:void 0},KC.bind(null,i,n),null)),[r,s,t]}function KC(t,e){t.action=e}function Zy(t){var e=Fe(),n=ge;if(n!==null)return ek(e,n,t);Fe(),e=e.memoizedState,n=Fe();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Ys(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=X.updateQueue,e===null&&(e=xc(),X.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function tk(){return Fe().memoizedState}function cu(t,e,n,r){var i=vt();X.flags|=t,i.memoizedState=Ys(1|e,{destroy:void 0},n,r===void 0?null:r)}function Lc(t,e,n,r){var i=Fe();r=r===void 0?null:r;var s=i.memoizedState.inst;ge!==null&&r!==null&&Lp(r,ge.memoizedState.deps)?i.memoizedState=Ys(e,s,n,r):(X.flags|=t,i.memoizedState=Ys(1|e,s,n,r))}function ev(t,e){cu(8390656,8,t,e)}function Bp(t,e){Lc(2048,8,t,e)}function WC(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=xc(),X.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function nk(t){var e=Fe().memoizedState;return WC({ref:e,nextImpl:t}),function(){if(ce&2)throw Error(x(440));return e.impl.apply(void 0,arguments)}}function rk(t,e){return Lc(4,2,t,e)}function ik(t,e){return Lc(4,4,t,e)}function sk(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ak(t,e,n){n=n!=null?n.concat([t]):null,Lc(4,4,sk.bind(null,e,t),n)}function $p(){}function ok(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lk(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Lp(e,r[1]))return r[0];if(r=t(),ji){Rr(!0);try{t()}finally{Rr(!1)}}return n.memoizedState=[r,e],r}function qp(t,e,n){return n===void 0||rr&1073741824&&!(ae&261930)?t.memoizedState=e:(t.memoizedState=n,t=Yk(),X.lanes|=t,Zr|=t,n)}function uk(t,e,n,r){return Ht(n,e)?n:Qs.current!==null?(t=qp(t,n,r),Ht(t,e)||(qe=!0),t):!(rr&42)||rr&1073741824&&!(ae&261930)?(qe=!0,t.memoizedState=n):(t=Yk(),X.lanes|=t,Zr|=t,e)}function ck(t,e,n,r,i){var s=he.p;he.p=s!==0&&8>s?s:8;var a=G.T,l={};G.T=l,Gp(t,!1,e,n);try{var u=i(),h=G.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=$C(u,r);ho(t,e,f,$t(t))}else ho(t,e,r,$t(t))}catch(p){ho(t,e,{then:function(){},status:"rejected",reason:p},$t())}finally{he.p=s,a!==null&&l.types!==null&&(a.types=l.types),G.T=a}}function QC(){}function ff(t,e,n,r){if(t.tag!==5)throw Error(x(476));var i=hk(t).queue;ck(t,i,e,Di,n===null?QC:function(){return dk(t),n(r)})}function hk(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Di,baseState:Di,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:Di},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dk(t){var e=hk(t);e.next===null&&(e=t.alternate.memoizedState),ho(t,e.next.queue,{},$t())}function Hp(){return ot(Oo)}function fk(){return Fe().memoizedState}function pk(){return Fe().memoizedState}function YC(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=$t();t=Ur(n);var r=zr(e,t,n);r!==null&&(At(r,e,n),lo(r,e,n)),e={cache:Pp()},t.payload=e;return}e=e.return}}function JC(t,e,n){var r=$t();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mc(t)?gk(e,n):(n=Cp(t,e,n,r),n!==null&&(At(n,t,r),yk(n,e,r)))}function mk(t,e,n){var r=$t();ho(t,e,n,r)}function ho(t,e,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mc(t))gk(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,a))return Dc(t,e,i,0),ye===null&&Pc(),!1}catch{}finally{}if(n=Cp(t,e,i,r),n!==null)return At(n,t,r),yk(n,e,r),!0}return!1}function Gp(t,e,n,r){if(r={lane:2,revertLane:tm(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(t)){if(e)throw Error(x(479))}else e=Cp(t,n,r,2),e!==null&&At(e,t,2)}function Mc(t){var e=t.alternate;return t===X||e!==null&&e===X}function gk(t,e){Fs=zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yk(t,e,n){if(n&4194048){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}var Do={readContext:ot,use:Oc,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re};Do.useEffectEvent=Re;var vk={readContext:ot,use:Oc,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:ev,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,cu(4194308,4,sk.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){cu(4,2,t,e)},useMemo:function(t,e){var n=vt();e=e===void 0?null:e;var r=t();if(ji){Rr(!0);try{t()}finally{Rr(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=vt();if(n!==void 0){var i=n(e);if(ji){Rr(!0);try{n(e)}finally{Rr(!1)}}}else i=e;return r.memoizedState=r.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},r.queue=t,t=t.dispatch=JC.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:function(t){t=hf(t);var e=t.queue,n=mk.bind(null,X,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:$p,useDeferredValue:function(t,e){var n=vt();return qp(n,t,e)},useTransition:function(){var t=hf(!1);return t=ck.bind(null,X,t.queue,!0,!1),vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=X,i=vt();if(oe){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),ye===null)throw Error(x(349));ae&127||H0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ev(K0.bind(null,r,s,t),[t]),r.flags|=2048,Ys(9,{destroy:void 0},G0.bind(null,r,s,n,e),null),n},useId:function(){var t=vt(),e=ye.identifierPrefix;if(oe){var n=Tn,r=Sn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ju++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=qC++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Hp,useFormState:Jy,useActionState:Jy,useOptimistic:function(t){var e=vt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Gp.bind(null,X,!0,n),n.dispatch=e,[t,e]},useMemoCache:zp,useCacheRefresh:function(){return vt().memoizedState=YC.bind(null,X)},useEffectEvent:function(t){var e=vt(),n={impl:t};return e.memoizedState=n,function(){if(ce&2)throw Error(x(440));return n.impl.apply(void 0,arguments)}}},Kp={readContext:ot,use:Oc,useCallback:ok,useContext:ot,useEffect:Bp,useImperativeHandle:ak,useInsertionEffect:rk,useLayoutEffect:ik,useMemo:lk,useReducer:uu,useRef:tk,useState:function(){return uu(ir)},useDebugValue:$p,useDeferredValue:function(t,e){var n=Fe();return uk(n,ge.memoizedState,t,e)},useTransition:function(){var t=uu(ir)[0],e=Fe().memoizedState;return[typeof t=="boolean"?t:tl(t),e]},useSyncExternalStore:q0,useId:fk,useHostTransitionStatus:Hp,useFormState:Xy,useActionState:Xy,useOptimistic:function(t,e){var n=Fe();return Y0(n,ge,t,e)},useMemoCache:zp,useCacheRefresh:pk};Kp.useEffectEvent=nk;var bk={readContext:ot,use:Oc,useCallback:ok,useContext:ot,useEffect:Bp,useImperativeHandle:ak,useInsertionEffect:rk,useLayoutEffect:ik,useMemo:lk,useReducer:Zh,useRef:tk,useState:function(){return Zh(ir)},useDebugValue:$p,useDeferredValue:function(t,e){var n=Fe();return ge===null?qp(n,t,e):uk(n,ge.memoizedState,t,e)},useTransition:function(){var t=Zh(ir)[0],e=Fe().memoizedState;return[typeof t=="boolean"?t:tl(t),e]},useSyncExternalStore:q0,useId:fk,useHostTransitionStatus:Hp,useFormState:Zy,useActionState:Zy,useOptimistic:function(t,e){var n=Fe();return ge!==null?Y0(n,ge,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:zp,useCacheRefresh:pk};bk.useEffectEvent=nk;function ed(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pf={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=Ur(r);i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,r),e!==null&&(At(e,t,r),lo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=Ur(r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=zr(t,i,r),e!==null&&(At(e,t,r),lo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=Ur(n);r.tag=2,e!=null&&(r.callback=e),e=zr(t,r,n),e!==null&&(At(e,t,n),lo(e,t,n))}};function tv(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!Co(n,r)||!Co(i,s):!0}function nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pf.enqueueReplaceState(e,e.state,null)}function Bi(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=Ie({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function wk(t){xu(t)}function kk(t){console.error(t)}function Ek(t){xu(t)}function Bu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function rv(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function mf(t,e,n){return n=Ur(n),n.tag=3,n.payload={element:null},n.callback=function(){Bu(t,e)},n}function Sk(t){return t=Ur(t),t.tag=3,t}function Tk(t,e,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;t.payload=function(){return i(s)},t.callback=function(){rv(e,n,r)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){rv(e,n,r),typeof i!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})})}function XC(t,e,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&ca(e,n,i,!0),n=Gt.current,n!==null){switch(n.tag){case 31:case 13:return mn===null?Ku():n.alternate===null&&xe===0&&(xe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Fu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),hd(t,r,i)),!1;case 22:return n.flags|=65536,r===Fu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),hd(t,r,i)),!1}throw Error(x(435,n.tag))}return hd(t,r,i),Ku(),!1}if(oe)return e=Gt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,r!==tf&&(t=Error(x(422),{cause:r}),Ao(Zt(t,n)))):(r!==tf&&(e=Error(x(423),{cause:r}),Ao(Zt(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,r=Zt(r,n),i=mf(t.stateNode,r,i),Xh(t,i),xe!==4&&(xe=2)),!1;var s=Error(x(520),{cause:r});if(s=Zt(s,n),mo===null?mo=[s]:mo.push(s),xe!==4&&(xe=2),e===null)return!0;r=Zt(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=mf(n.stateNode,r,t),Xh(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(jr===null||!jr.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Sk(i),Tk(i,t,n,r),Xh(n,i),!1}n=n.return}while(n!==null);return!1}var Wp=Error(x(461)),qe=!1;function nt(t,e,n,r){e.child=t===null?V0(e,null,n,r):zi(e,t.child,n,r)}function iv(t,e,n,r,i){n=n.render;var s=e.ref;if("ref"in r){var a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}else a=r;return Ui(e),r=Mp(t,e,n,a,s,i),l=Fp(),t!==null&&!qe?(Vp(t,e,i),sr(t,e,i)):(oe&&l&&Ap(e),e.flags|=1,nt(t,e,r,i),e.child)}function sv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ip(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,_k(t,e,s,r,i)):(t=ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Qp(t,i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(a,r)&&t.ref===e.ref)return sr(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function _k(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Co(s,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=s,Qp(t,i))t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,sr(t,e,i)}return gf(t,e,n,r,i)}function Ck(t,e,n,r){var i=r.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(r=e.child=t.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~s}else r=0,e.child=null;return av(t,e,s,n,r)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&lu(e,s!==null?s.cachePool:null),s!==null?Wy(e,s):uf(),j0(e);else return r=e.lanes=536870912,av(t,e,s!==null?s.baseLanes|n:n,n,r)}else s!==null?(lu(e,s.cachePool),Wy(e,s),Ir(),e.memoizedState=null):(t!==null&&lu(e,null),uf(),Ir());return nt(t,e,i,n),e.child}function Qa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function av(t,e,n,r,i){var s=Dp();return s=s===null?null:{parent:Be._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&lu(e,null),uf(),j0(e),t!==null&&ca(t,e,r,!0),e.childLanes=i,null}function hu(t,e){return e=$u({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ov(t,e,n){return zi(e,t.child,null,n),t=hu(e,e.pendingProps),t.flags|=2,Lt(e),e.memoizedState=null,t}function ZC(t,e,n){var r=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(oe){if(r.mode==="hidden")return t=hu(e,r),e.lanes=536870912,Qa(null,t);if(cf(e),(t=Te)?(t=vE(t,en),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:Sn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},n=D0(t),n.return=e,e.child=n,st=e,Te=null)):t=null,t===null)throw Jr(e);return e.lanes=536870912,null}return hu(e,r)}var s=t.memoizedState;if(s!==null){var a=s.dehydrated;if(cf(e),i)if(e.flags&256)e.flags&=-257,e=ov(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(x(558));else if(qe||ca(t,e,n,!1),i=(n&t.childLanes)!==0,qe||i){if(r=ye,r!==null&&(a=r0(r,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,Zi(t,a),At(r,t,a),Wp;Ku(),e=ov(t,e,n)}else t=s.treeContext,Te=nn(a.nextSibling),st=e,oe=!0,Vr=null,en=!1,t!==null&&x0(e,t),e=hu(e,r),e.flags|=4096;return e}return t=Yn(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function du(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(x(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function gf(t,e,n,r,i){return Ui(e),n=Mp(t,e,n,r,void 0,i),r=Fp(),t!==null&&!qe?(Vp(t,e,i),sr(t,e,i)):(oe&&r&&Ap(e),e.flags|=1,nt(t,e,n,i),e.child)}function lv(t,e,n,r,i,s){return Ui(e),e.updateQueue=null,n=$0(e,r,n,i),B0(t),r=Fp(),t!==null&&!qe?(Vp(t,e,s),sr(t,e,s)):(oe&&r&&Ap(e),e.flags|=1,nt(t,e,n,s),e.child)}function uv(t,e,n,r,i){if(Ui(e),e.stateNode===null){var s=As,a=n.contextType;typeof a=="object"&&a!==null&&(s=ot(a)),s=new n(r,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pf,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=r,s.state=e.memoizedState,s.refs={},xp(e),a=n.contextType,s.context=typeof a=="object"&&a!==null?ot(a):As,s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(ed(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&pf.enqueueReplaceState(s,s.state,null),co(e,r,s,i),uo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,u=Bi(n,l);s.props=u;var h=s.context,f=n.contextType;a=As,typeof f=="object"&&f!==null&&(a=ot(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||h!==a)&&nv(e,s,r,a),Tr=!1;var m=e.memoizedState;s.state=m,co(e,r,s,i),uo(),h=e.memoizedState,l||m!==h||Tr?(typeof p=="function"&&(ed(e,n,p,r),h=e.memoizedState),(u=Tr||tv(e,n,u,r,m,h,a))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=h),s.props=r,s.state=h,s.context=a,r=u):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,of(t,e),a=e.memoizedProps,f=Bi(n,a),s.props=f,p=e.pendingProps,m=s.context,h=n.contextType,u=As,typeof h=="object"&&h!==null&&(u=ot(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==u)&&nv(e,s,r,u),Tr=!1,m=e.memoizedState,s.state=m,co(e,r,s,i),uo();var w=e.memoizedState;a!==p||m!==w||Tr||t!==null&&t.dependencies!==null&&Mu(t.dependencies)?(typeof l=="function"&&(ed(e,n,l,r),w=e.memoizedState),(f=Tr||tv(e,n,f,r,m,w,u)||t!==null&&t.dependencies!==null&&Mu(t.dependencies))?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),s.props=r,s.state=w,s.context=u,r=f):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return s=r,du(t,e),r=(e.flags&128)!==0,s||r?(s=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&r?(e.child=zi(e,t.child,null,i),e.child=zi(e,null,n,i)):nt(t,e,n,i),e.memoizedState=s.state,t=e.child):t=sr(t,e,i),t}function cv(t,e,n,r){return Vi(),e.flags|=256,nt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(t){return{baseLanes:t,cachePool:L0()}}function rd(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Vt),t}function Ik(t,e,n){var r=e.pendingProps,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(Me.current&2)!==0),a&&(i=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(oe){if(i?Cr(e):Ir(),(t=Te)?(t=vE(t,en),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:Sn,overflow:Tn}:null,retryLane:536870912,hydrationErrors:null},n=D0(t),n.return=e,e.child=n,st=e,Te=null)):t=null,t===null)throw Jr(e);return Pf(t)?e.lanes=32:e.lanes=536870912,null}var l=r.children;return r=r.fallback,i?(Ir(),i=e.mode,l=$u({mode:"hidden",children:l},i),r=Ri(r,i,n,null),l.return=e,r.return=e,l.sibling=r,e.child=l,r=e.child,r.memoizedState=nd(n),r.childLanes=rd(t,a,n),e.memoizedState=td,Qa(null,r)):(Cr(e),yf(e,l))}var u=t.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(s)e.flags&256?(Cr(e),e.flags&=-257,e=id(t,e,n)):e.memoizedState!==null?(Ir(),e.child=t.child,e.flags|=128,e=null):(Ir(),l=r.fallback,i=e.mode,r=$u({mode:"visible",children:r.children},i),l=Ri(l,i,n,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,zi(e,t.child,null,n),r=e.child,r.memoizedState=nd(n),r.childLanes=rd(t,a,n),e.memoizedState=td,e=Qa(null,r));else if(Cr(e),Pf(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,r=Error(x(419)),r.stack="",r.digest=a,Ao({value:r,source:null,stack:null}),e=id(t,e,n)}else if(qe||ca(t,e,n,!1),a=(n&t.childLanes)!==0,qe||a){if(a=ye,a!==null&&(r=r0(a,n),r!==0&&r!==u.retryLane))throw u.retryLane=r,Zi(t,r),At(a,t,r),Wp;Nf(l)||Ku(),e=id(t,e,n)}else Nf(l)?(e.flags|=192,e.child=t.child,e=null):(t=u.treeContext,Te=nn(l.nextSibling),st=e,oe=!0,Vr=null,en=!1,t!==null&&x0(e,t),e=yf(e,r.children),e.flags|=4096);return e}return i?(Ir(),l=r.fallback,i=e.mode,u=t.child,h=u.sibling,r=Yn(u,{mode:"hidden",children:r.children}),r.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=Yn(h,l):(l=Ri(l,i,n,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Qa(null,r),r=e.child,l=t.child.memoizedState,l===null?l=nd(n):(i=l.cachePool,i!==null?(u=Be._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=L0(),l={baseLanes:l.baseLanes|n,cachePool:i}),r.memoizedState=l,r.childLanes=rd(t,a,n),e.memoizedState=td,Qa(t.child,r)):(Cr(e),n=t.child,t=n.sibling,n=Yn(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function yf(t,e){return e=$u({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function $u(t,e){return t=Mt(22,t,null,e),t.lanes=0,t}function id(t,e,n){return zi(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function sd(t,e,n,r,i,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.treeForkCount=s)}function Ak(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;r=r.children;var a=Me.current,l=(a&2)!==0;if(l?(a=a&1|2,e.flags|=128):a&=1,we(Me,a),nt(t,e,r,n),r=oe?Io:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hv(t,n,e);else if(t.tag===19)hv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sd(e,!1,i,n,s,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sd(e,!0,n,null,s,r);break;case"together":sd(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))if(t!==null){if(ca(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Mu(t)))}function eI(t,e,n){switch(e.tag){case 3:Nu(e,e.stateNode.containerInfo),_r(e,Be,t.memoizedState.cache),Vi();break;case 27:case 5:qd(e);break;case 4:Nu(e,e.stateNode.containerInfo);break;case 10:_r(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,cf(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(Cr(e),e.flags|=128,null):n&e.child.childLanes?Ik(t,e,n):(Cr(e),t=sr(t,e,n),t!==null?t.sibling:null);Cr(e);break;case 19:var i=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(ca(t,e,n,!1),r=(n&e.childLanes)!==0),i){if(r)return Ak(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Me,Me.current),r)break;return null;case 22:return e.lanes=0,Ck(t,e,n,e.pendingProps);case 24:_r(e,Be,t.memoizedState.cache)}return sr(t,e,n)}function Nk(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)qe=!0;else{if(!Qp(t,n)&&!(e.flags&128))return qe=!1,eI(t,e,n);qe=!!(t.flags&131072)}else qe=!1,oe&&e.flags&1048576&&R0(e,Io,e.index);switch(e.lanes=0,e.tag){case 16:e:{var r=e.pendingProps;if(t=_i(e.elementType),e.type=t,typeof t=="function")Ip(t)?(r=Bi(t,r),e.tag=1,e=uv(null,e,t,r,n)):(e.tag=0,e=gf(null,e,t,r,n));else{if(t!=null){var i=t.$$typeof;if(i===fp){e.tag=11,e=iv(null,e,t,r,n);break e}else if(i===pp){e.tag=14,e=sv(null,e,t,r,n);break e}}throw e=Bd(t)||t,Error(x(306,e,""))}}return e;case 0:return gf(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,i=Bi(r,e.pendingProps),uv(t,e,r,i,n);case 3:e:{if(Nu(e,e.stateNode.containerInfo),t===null)throw Error(x(387));r=e.pendingProps;var s=e.memoizedState;i=s.element,of(t,e),co(e,r,null,n);var a=e.memoizedState;if(r=a.cache,_r(e,Be,r),r!==s.cache&&sf(e,[Be],n,!0),uo(),r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=cv(t,e,r,n);break e}else if(r!==i){i=Zt(Error(x(424)),e),Ao(i),e=cv(t,e,r,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Te=nn(t.firstChild),st=e,oe=!0,Vr=null,en=!0,n=V0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Vi(),r===i){e=sr(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 26:return du(t,e),t===null?(n=Dv(e.type,null,e.pendingProps,null))?e.memoizedState=n:oe||(n=e.type,t=e.pendingProps,r=Ju(Fr.current).createElement(n),r[it]=e,r[Pt]=t,lt(r,n,t),et(r),e.stateNode=r):e.memoizedState=Dv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qd(e),t===null&&oe&&(r=e.stateNode=bE(e.type,e.pendingProps,Fr.current),st=e,en=!0,i=Te,ui(e.type)?(Df=i,Te=nn(r.firstChild)):Te=i),nt(t,e,e.pendingProps.children,n),du(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&oe&&((i=r=Te)&&(r=PI(r,e.type,e.pendingProps,en),r!==null?(e.stateNode=r,st=e,Te=nn(r.firstChild),en=!1,i=!0):i=!1),i||Jr(e)),qd(e),i=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,r=s.children,If(i,s)?r=null:a!==null&&If(i,a)&&(e.flags|=32),e.memoizedState!==null&&(i=Mp(t,e,HC,null,null,n),Oo._currentValue=i),du(t,e),nt(t,e,r,n),e.child;case 6:return t===null&&oe&&((t=n=Te)&&(n=DI(n,e.pendingProps,en),n!==null?(e.stateNode=n,st=e,Te=null,t=!0):t=!1),t||Jr(e)),null;case 13:return Ik(t,e,n);case 4:return Nu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=zi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return iv(t,e,e.type,e.pendingProps,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,_r(e,e.type,r.value),nt(t,e,r.children,n),e.child;case 9:return i=e.type._context,r=e.pendingProps.children,Ui(e),i=ot(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return sv(t,e,e.type,e.pendingProps,n);case 15:return _k(t,e,e.type,e.pendingProps,n);case 19:return Ak(t,e,n);case 31:return ZC(t,e,n);case 22:return Ck(t,e,n,e.pendingProps);case 24:return Ui(e),r=ot(Be),t===null?(i=Dp(),i===null&&(i=ye,s=Pp(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:r,cache:i},xp(e),_r(e,Be,i)):(t.lanes&n&&(of(t,e),co(e,null,null,n),uo()),i=t.memoizedState,s=e.memoizedState,i.parent!==r?(i={parent:r,cache:r},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),_r(e,Be,r)):(r=s.cache,_r(e,Be,r),r!==i.cache&&sf(e,[Be],n,!0))),nt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(x(156,e.tag))}function Fn(t){t.flags|=4}function ad(t,e,n,r,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(Zk())t.flags|=8192;else throw Oi=Fu,Rp}else t.flags&=-16777217}function dv(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!EE(e))if(Zk())t.flags|=8192;else throw Oi=Fu,Rp}function Bl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?e0():536870912,t.lanes|=e,Js|=e)}function Ba(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Se(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tI(t,e,n){var r=e.pendingProps;switch(Np(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(e),null;case 1:return Se(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Jn(Be),Hs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(cs(e)?Fn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jh())),Se(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Fn(e),s!==null?(Se(e),dv(e,s)):(Se(e),ad(e,i,null,r,n))):s?s!==t.memoizedState?(Fn(e),Se(e),dv(e,s)):(Se(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Fn(e),Se(e),ad(e,i,t,r,n)),null;case 27:if(Pu(e),n=Fr.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Se(e),null}t=Cn.current,cs(e)?jy(e):(t=bE(i,r,n),e.stateNode=t,Fn(e))}return Se(e),null;case 5:if(Pu(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Se(e),null}if(s=Cn.current,cs(e))jy(e);else{var a=Ju(Fr.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?a.createElement(i,{is:r.is}):a.createElement(i)}}s[it]=e,s[Pt]=r;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=s;e:switch(lt(s,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Fn(e)}}return Se(e),ad(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(t=Fr.current,cs(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,i=st,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}t[it]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||mE(t.nodeValue,n)),t||Jr(e,!0)}else t=Ju(t).createTextNode(r),t[it]=e,e.stateNode=t}return Se(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(r=cs(e),n!==null){if(t===null){if(!r)throw Error(x(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(557));t[it]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),t=!1}else n=Jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Lt(e),e):(Lt(e),null);if(e.flags&128)throw Error(x(558))}return Se(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=cs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(x(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(x(317));i[it]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Se(e),i=!1}else i=Jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Lt(e),e):(Lt(e),null)}return Lt(e),e.flags&128?(e.lanes=n,e):(n=r!==null,t=t!==null&&t.memoizedState!==null,n&&(r=e.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Bl(e,e.updateQueue),Se(e),null);case 4:return Hs(),t===null&&nm(e.stateNode.containerInfo),Se(e),null;case 10:return Jn(e.type),Se(e),null;case 19:if(tt(Me),r=e.memoizedState,r===null)return Se(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)Ba(r,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Uu(t),s!==null){for(e.flags|=128,Ba(r,!1),t=s.updateQueue,e.updateQueue=t,Bl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)P0(n,t),n=n.sibling;return we(Me,Me.current&1|2),oe&&jn(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&zt()>Hu&&(e.flags|=128,i=!0,Ba(r,!1),e.lanes=4194304)}else{if(!i)if(t=Uu(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Bl(e,t),Ba(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!oe)return Se(e),null}else 2*zt()-r.renderingStartTime>Hu&&n!==536870912&&(e.flags|=128,i=!0,Ba(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(t=r.last,t!==null?t.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=zt(),t.sibling=null,n=Me.current,we(Me,i?n&1|2:n&1),oe&&jn(e,r.treeForkCount),t):(Se(e),null);case 22:case 23:return Lt(e),Op(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?n&536870912&&!(e.flags&128)&&(Se(e),e.subtreeFlags&6&&(e.flags|=8192)):Se(e),n=e.updateQueue,n!==null&&Bl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&tt(xi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Jn(Be),Se(e),null;case 25:return null;case 30:return null}throw Error(x(156,e.tag))}function nI(t,e){switch(Np(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(Be),Hs(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pu(e),null;case 31:if(e.memoizedState!==null){if(Lt(e),e.alternate===null)throw Error(x(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Lt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(Me),null;case 4:return Hs(),null;case 10:return Jn(e.type),null;case 22:case 23:return Lt(e),Op(),t!==null&&tt(xi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(Be),null;case 25:return null;default:return null}}function Pk(t,e){switch(Np(e),e.tag){case 3:Jn(Be),Hs();break;case 26:case 27:case 5:Pu(e);break;case 4:Hs();break;case 31:e.memoizedState!==null&&Lt(e);break;case 13:Lt(e);break;case 19:tt(Me);break;case 10:Jn(e.type);break;case 22:case 23:Lt(e),Op(),t!==null&&tt(xi);break;case 24:Jn(Be)}}function nl(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&t)===t){r=void 0;var s=n.create,a=n.inst;r=s(),a.destroy=r}n=n.next}while(n!==i)}}catch(l){pe(e,e.return,l)}}function Xr(t,e,n){try{var r=e.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&t)===t){var a=r.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,i=e;var u=n,h=l;try{h()}catch(f){pe(i,u,f)}}}r=r.next}while(r!==s)}}catch(f){pe(e,e.return,f)}}function Dk(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{z0(e,n)}catch(r){pe(t,t.return,r)}}}function Rk(t,e,n){n.props=Bi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){pe(t,e,r)}}function fo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(i){pe(t,e,i)}}function _n(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){pe(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){pe(t,e,i)}else n.current=null}function xk(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){pe(t,t.return,i)}}function od(t,e,n){try{var r=t.stateNode;TI(r,t.type,n,e),r[Pt]=e}catch(i){pe(t,t.return,i)}}function Ok(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ui(t.type)||t.tag===4}function ld(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ok(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ui(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hn));else if(r!==4&&(r===27&&ui(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}function qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&ui(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}function Lk(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lt(e,r,n),e[it]=t,e[Pt]=n}catch(s){pe(t,t.return,s)}}var Bn=!1,je=!1,ud=!1,fv=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function rI(t,e){if(t=t.containerInfo,_f=tc,t=E0(t),Tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=a),m===s&&++f===r&&(u=a),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cf={focusedElem:t,selectionRange:n},tc=!1,Ze=e;Ze!==null;)if(e=Ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ze=t;else for(;Ze!==null;){switch(e=Ze,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var N=Bi(n.type,i);t=r.getSnapshotBeforeUpdate(N,s),r.__reactInternalSnapshotBeforeUpdate=t}catch(L){pe(n,n.return,L)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Af(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(x(163))}if(t=e.sibling,t!==null){t.return=e.return,Ze=t;break}Ze=e.return}}function Mk(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Un(t,n),r&4&&nl(5,n);break;case 1:if(Un(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){pe(n,n.return,a)}else{var i=Bi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){pe(n,n.return,a)}}r&64&&Dk(n),r&512&&fo(n,n.return);break;case 3:if(Un(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{z0(t,e)}catch(a){pe(n,n.return,a)}}break;case 27:e===null&&r&4&&Lk(n);case 26:case 5:Un(t,n),e===null&&r&4&&xk(n),r&512&&fo(n,n.return);break;case 12:Un(t,n);break;case 31:Un(t,n),r&4&&Uk(t,n);break;case 13:Un(t,n),r&4&&zk(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=dI.bind(null,n),RI(t,n))));break;case 22:if(r=n.memoizedState!==null||Bn,!r){e=e!==null&&e.memoizedState!==null||je,i=Bn;var s=je;Bn=r,(je=e)&&!s?zn(t,n,(n.subtreeFlags&8772)!==0):Un(t,n),Bn=i,je=s}break;case 30:break;default:Un(t,n)}}function Fk(t){var e=t.alternate;e!==null&&(t.alternate=null,Fk(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ae=null,Tt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)Vk(t,e,n),n=n.sibling}function Vk(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 26:je||_n(n,e),Vn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||_n(n,e);var r=Ae,i=Tt;ui(n.type)&&(Ae=n.stateNode,Tt=!1),Vn(t,e,n),yo(n.stateNode),Ae=r,Tt=i;break;case 5:je||_n(n,e);case 6:if(r=Ae,i=Tt,Ae=null,Vn(t,e,n),Ae=r,Tt=i,Ae!==null)if(Tt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(s){pe(n,e,s)}else try{Ae.removeChild(n.stateNode)}catch(s){pe(n,e,s)}break;case 18:Ae!==null&&(Tt?(t=Ae,Cv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ta(t)):Cv(Ae,n.stateNode));break;case 4:r=Ae,i=Tt,Ae=n.stateNode.containerInfo,Tt=!0,Vn(t,e,n),Ae=r,Tt=i;break;case 0:case 11:case 14:case 15:Xr(2,n,e),je||Xr(4,n,e),Vn(t,e,n);break;case 1:je||(_n(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Rk(n,e,r)),Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:je=(r=je)||n.memoizedState!==null,Vn(t,e,n),je=r;break;default:Vn(t,e,n)}}function Uk(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ta(t)}catch(n){pe(e,e.return,n)}}}function zk(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ta(t)}catch(n){pe(e,e.return,n)}}function iI(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new fv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new fv),e;default:throw Error(x(435,t.tag))}}function $l(t,e){var n=iI(t);e.forEach(function(r){if(!n.has(r)){n.add(r);var i=fI.bind(null,t,r);r.then(i,i)}})}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 27:if(ui(l.type)){Ae=l.stateNode,Tt=!1;break e}break;case 5:Ae=l.stateNode,Tt=!1;break e;case 3:case 4:Ae=l.stateNode.containerInfo,Tt=!0;break e}l=l.return}if(Ae===null)throw Error(x(160));Vk(s,a,i),Ae=null,Tt=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jk(e,t),e=e.sibling}var cn=null;function jk(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Et(e,t),St(t),r&4&&(Xr(3,t,t.return),nl(3,t),Xr(5,t,t.return));break;case 1:Et(e,t),St(t),r&512&&(je||n===null||_n(n,n.return)),r&64&&Bn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=cn;if(Et(e,t),St(t),r&512&&(je||n===null||_n(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){e:{r=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Xo]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),lt(s,r,n),s[it]=t,et(s),r=s;break e;case"link":var a=xv("link","href",i).get(r+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(s=a[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break t}}s=i.createElement(r),lt(s,r,n),i.head.appendChild(s);break;case"meta":if(a=xv("meta","content",i).get(r+(n.content||""))){for(l=0;l<a.length;l++)if(s=a[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break t}}s=i.createElement(r),lt(s,r,n),i.head.appendChild(s);break;default:throw Error(x(468,r))}s[it]=t,et(s),r=s}t.stateNode=r}else Ov(i,t.type,t.stateNode);else t.stateNode=Rv(i,r,t.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?Ov(i,t.type,t.stateNode):Rv(i,r,t.memoizedProps)):r===null&&t.stateNode!==null&&od(t,t.memoizedProps,n.memoizedProps)}break;case 27:Et(e,t),St(t),r&512&&(je||n===null||_n(n,n.return)),n!==null&&r&4&&od(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Et(e,t),St(t),r&512&&(je||n===null||_n(n,n.return)),t.flags&32){i=t.stateNode;try{Ks(i,"")}catch(N){pe(t,t.return,N)}}r&4&&t.stateNode!=null&&(i=t.memoizedProps,od(t,i,n!==null?n.memoizedProps:i)),r&1024&&(ud=!0);break;case 6:if(Et(e,t),St(t),r&4){if(t.stateNode===null)throw Error(x(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(N){pe(t,t.return,N)}}break;case 3:if(mu=null,i=cn,cn=Xu(e.containerInfo),Et(e,t),cn=i,St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(N){pe(t,t.return,N)}ud&&(ud=!1,Bk(t));break;case 4:r=cn,cn=Xu(t.stateNode.containerInfo),Et(e,t),St(t),cn=r;break;case 12:Et(e,t),St(t);break;case 31:Et(e,t),St(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,$l(t,r)));break;case 13:Et(e,t),St(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fc=zt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,$l(t,r)));break;case 22:i=t.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=Bn,f=je;if(Bn=h||i,je=f||u,Et(e,t),je=f,Bn=h,St(t),r&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||u||Bn||je||Ci(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){u=n=e;try{if(s=u.stateNode,i)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var p=u.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){pe(u,u.return,N)}}}else if(e.tag===6){if(n===null){u=e;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(N){pe(u,u.return,N)}}}else if(e.tag===18){if(n===null){u=e;try{var w=u.stateNode;i?Iv(w,!0):Iv(u.stateNode,!1)}catch(N){pe(u,u.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,$l(t,n))));break;case 19:Et(e,t),St(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,$l(t,r)));break;case 30:break;case 21:break;default:Et(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Ok(r)){n=r;break}r=r.return}if(n==null)throw Error(x(160));switch(n.tag){case 27:var i=n.stateNode,s=ld(t);qu(t,s,i);break;case 5:var a=n.stateNode;n.flags&32&&(Ks(a,""),n.flags&=-33);var l=ld(t);qu(t,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=ld(t);vf(t,h,u);break;default:throw Error(x(161))}}catch(f){pe(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Bk(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Bk(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Un(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Mk(t,e.alternate,e),e=e.sibling}function Ci(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Xr(4,e,e.return),Ci(e);break;case 1:_n(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Rk(e,e.return,n),Ci(e);break;case 27:yo(e.stateNode);case 26:case 5:_n(e,e.return),Ci(e);break;case 22:e.memoizedState===null&&Ci(e);break;case 30:Ci(e);break;default:Ci(e)}t=t.sibling}}function zn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,i=t,s=e,a=s.flags;switch(s.tag){case 0:case 11:case 15:zn(i,s,n),nl(4,s);break;case 1:if(zn(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){pe(r,r.return,h)}if(r=s,i=r.updateQueue,i!==null){var l=r.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)U0(u[i],l)}catch(h){pe(r,r.return,h)}}n&&a&64&&Dk(s),fo(s,s.return);break;case 27:Lk(s);case 26:case 5:zn(i,s,n),n&&r===null&&a&4&&xk(s),fo(s,s.return);break;case 12:zn(i,s,n);break;case 31:zn(i,s,n),n&&a&4&&Uk(i,s);break;case 13:zn(i,s,n),n&&a&4&&zk(i,s);break;case 22:s.memoizedState===null&&zn(i,s,n),fo(s,s.return);break;case 30:break;default:zn(i,s,n)}e=e.sibling}}function Yp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&el(n))}function Jp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t))}function un(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)$k(t,e,n,r),e=e.sibling}function $k(t,e,n,r){var i=e.flags;switch(e.tag){case 0:case 11:case 15:un(t,e,n,r),i&2048&&nl(9,e);break;case 1:un(t,e,n,r);break;case 3:un(t,e,n,r),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t)));break;case 12:if(i&2048){un(t,e,n,r),t=e.stateNode;try{var s=e.memoizedProps,a=s.id,l=s.onPostCommit;typeof l=="function"&&l(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(u){pe(e,e.return,u)}}else un(t,e,n,r);break;case 31:un(t,e,n,r);break;case 13:un(t,e,n,r);break;case 23:break;case 22:s=e.stateNode,a=e.alternate,e.memoizedState!==null?s._visibility&2?un(t,e,n,r):po(t,e):s._visibility&2?un(t,e,n,r):(s._visibility|=2,fs(t,e,n,r,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Yp(a,e);break;case 24:un(t,e,n,r),i&2048&&Jp(e.alternate,e);break;default:un(t,e,n,r)}}function fs(t,e,n,r,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,a=e,l=n,u=r,h=a.flags;switch(a.tag){case 0:case 11:case 15:fs(s,a,l,u,i),nl(8,a);break;case 23:break;case 22:var f=a.stateNode;a.memoizedState!==null?f._visibility&2?fs(s,a,l,u,i):po(s,a):(f._visibility|=2,fs(s,a,l,u,i)),i&&h&2048&&Yp(a.alternate,a);break;case 24:fs(s,a,l,u,i),i&&h&2048&&Jp(a.alternate,a);break;default:fs(s,a,l,u,i)}e=e.sibling}}function po(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,i=r.flags;switch(r.tag){case 22:po(n,r),i&2048&&Yp(r.alternate,r);break;case 24:po(n,r),i&2048&&Jp(r.alternate,r);break;default:po(n,r)}e=e.sibling}}var Ya=8192;function hs(t,e,n){if(t.subtreeFlags&Ya)for(t=t.child;t!==null;)qk(t,e,n),t=t.sibling}function qk(t,e,n){switch(t.tag){case 26:hs(t,e,n),t.flags&Ya&&t.memoizedState!==null&&qI(n,cn,t.memoizedState,t.memoizedProps);break;case 5:hs(t,e,n);break;case 3:case 4:var r=cn;cn=Xu(t.stateNode.containerInfo),hs(t,e,n),cn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ya,Ya=16777216,hs(t,e,n),Ya=r):hs(t,e,n));break;default:hs(t,e,n)}}function Hk(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function $a(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ze=r,Kk(r,t)}Hk(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Gk(t),t=t.sibling}function Gk(t){switch(t.tag){case 0:case 11:case 15:$a(t),t.flags&2048&&Xr(9,t,t.return);break;case 3:$a(t);break;case 12:$a(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,fu(t)):$a(t);break;default:$a(t)}}function fu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ze=r,Kk(r,t)}Hk(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Xr(8,e,e.return),fu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,fu(e));break;default:fu(e)}t=t.sibling}}function Kk(t,e){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Xr(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:el(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ze=r;else e:for(n=t;Ze!==null;){r=Ze;var i=r.sibling,s=r.return;if(Fk(r),r===n){Ze=null;break e}if(i!==null){i.return=s,Ze=i;break e}Ze=s}}}var sI={getCacheForType:function(t){var e=ot(Be),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ot(Be).controller.signal}},aI=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,ne=null,ae=0,fe=0,Ot=null,Or=!1,da=!1,Xp=!1,ar=0,xe=0,Zr=0,Li=0,Zp=0,Vt=0,Js=0,mo=null,_t=null,bf=!1,Fc=0,Wk=0,Hu=1/0,Gu=null,jr=null,Ke=0,Br=null,Xs=null,Xn=0,wf=0,kf=null,Qk=null,go=0,Ef=null;function $t(){return ce&2&&ae!==0?ae&-ae:G.T!==null?tm():i0()}function Yk(){if(Vt===0)if(!(ae&536870912)||oe){var t=Ll;Ll<<=1,!(Ll&3932160)&&(Ll=262144),Vt=t}else Vt=536870912;return t=Gt.current,t!==null&&(t.flags|=32),Vt}function At(t,e,n){(t===ye&&(fe===2||fe===9)||t.cancelPendingCommit!==null)&&(Zs(t,0),Lr(t,ae,Vt,!1)),Jo(t,n),(!(ce&2)||t!==ye)&&(t===ye&&(!(ce&2)&&(Li|=n),xe===4&&Lr(t,ae,Vt,!1)),Ln(t))}function Jk(t,e,n){if(ce&6)throw Error(x(327));var r=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Yo(t,e),i=r?uI(t,e):cd(t,e,!0),s=r;do{if(i===0){da&&!r&&Lr(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!oI(n)){i=cd(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var l=t;i=mo;var u=l.current.memoizedState.isDehydrated;if(u&&(Zs(l,a).flags|=256),a=cd(l,a,!1),a!==2){if(Xp&&!u){l.errorRecoveryDisabledLanes|=s,Li|=s,i=4;break e}s=_t,_t=i,s!==null&&(_t===null?_t=s:_t.push.apply(_t,s))}i=a}if(s=!1,i!==2)continue}}if(i===1){Zs(t,0),Lr(t,e,0,!0);break}e:{switch(r=t,s=i,s){case 0:case 1:throw Error(x(345));case 4:if((e&4194048)!==e)break;case 6:Lr(r,e,Vt,!Or);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(x(329))}if((e&62914560)===e&&(i=Fc+300-zt(),10<i)){if(Lr(r,e,Vt,!Or),Cc(r,0,!0)!==0)break e;Xn=e,r.timeoutHandle=yE(pv.bind(null,r,n,_t,Gu,bf,e,Vt,Li,Js,Or,s,"Throttled",-0,0),i);break e}pv(r,n,_t,Gu,bf,e,Vt,Li,Js,Or,s,null,-0,0)}}break}while(!0);Ln(t)}function pv(t,e,n,r,i,s,a,l,u,h,f,p,m,w){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},qk(e,s,p);var N=(s&62914560)===s?Fc-zt():(s&4194048)===s?Wk-zt():0;if(N=HI(p,N),N!==null){Xn=s,t.cancelPendingCommit=N(gv.bind(null,t,e,s,n,r,i,a,l,u,f,p,null,m,w)),Lr(t,s,a,!h);return}}gv(t,e,s,n,r,i,a,l,u)}function oI(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e,n,r){e&=~Zp,e&=~Li,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var i=e;0<i;){var s=31-Bt(i),a=1<<s;r[s]=-1,i&=~a}n!==0&&t0(t,n,e)}function Vc(){return ce&6?!0:(rl(0),!1)}function em(){if(ne!==null){if(fe===0)var t=ne.return;else t=ne,Gn=es=null,Up(t),Ms=null,No=0,t=ne;for(;t!==null;)Pk(t.alternate,t),t=t.return;ne=null}}function Zs(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,II(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xn=0,em(),ye=t,ne=n=Yn(t.current,null),ae=e,fe=0,Ot=null,Or=!1,da=Yo(t,e),Xp=!1,Js=Vt=Zp=Li=Zr=xe=0,_t=mo=null,bf=!1,e&8&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var i=31-Bt(r),s=1<<i;e|=t[i],r&=~s}return ar=e,Pc(),n}function Xk(t,e){X=null,G.H=Do,e===ha||e===Rc?(e=Gy(),fe=3):e===Rp?(e=Gy(),fe=4):fe=e===Wp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ot=e,ne===null&&(xe=1,Bu(t,Zt(e,t.current)))}function Zk(){var t=Gt.current;return t===null?!0:(ae&4194048)===ae?mn===null:(ae&62914560)===ae||ae&536870912?t===mn:!1}function eE(){var t=G.H;return G.H=Do,t===null?Do:t}function tE(){var t=G.A;return G.A=sI,t}function Ku(){xe=4,Or||(ae&4194048)!==ae&&Gt.current!==null||(da=!0),!(Zr&134217727)&&!(Li&134217727)||ye===null||Lr(ye,ae,Vt,!1)}function cd(t,e,n){var r=ce;ce|=2;var i=eE(),s=tE();(ye!==t||ae!==e)&&(Gu=null,Zs(t,e)),e=!1;var a=xe;e:do try{if(fe!==0&&ne!==null){var l=ne,u=Ot;switch(fe){case 8:em(),a=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(e=!0);var h=fe;if(fe=0,Ot=null,Ds(t,l,u,h),n&&da){a=0;break e}break;default:h=fe,fe=0,Ot=null,Ds(t,l,u,h)}}lI(),a=xe;break}catch(f){Xk(t,f)}while(!0);return e&&t.shellSuspendCounter++,Gn=es=null,ce=r,G.H=i,G.A=s,ne===null&&(ye=null,ae=0,Pc()),a}function lI(){for(;ne!==null;)nE(ne)}function uI(t,e){var n=ce;ce|=2;var r=eE(),i=tE();ye!==t||ae!==e?(Gu=null,Hu=zt()+500,Zs(t,e)):da=Yo(t,e);e:do try{if(fe!==0&&ne!==null){e=ne;var s=Ot;t:switch(fe){case 1:fe=0,Ot=null,Ds(t,e,s,1);break;case 2:case 9:if(Hy(s)){fe=0,Ot=null,mv(e);break}e=function(){fe!==2&&fe!==9||ye!==t||(fe=7),Ln(t)},s.then(e,e);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Hy(s)?(fe=0,Ot=null,mv(e)):(fe=0,Ot=null,Ds(t,e,s,7));break;case 5:var a=null;switch(ne.tag){case 26:a=ne.memoizedState;case 5:case 27:var l=ne;if(a?EE(a):l.stateNode.complete){fe=0,Ot=null;var u=l.sibling;if(u!==null)ne=u;else{var h=l.return;h!==null?(ne=h,Uc(h)):ne=null}break t}}fe=0,Ot=null,Ds(t,e,s,5);break;case 6:fe=0,Ot=null,Ds(t,e,s,6);break;case 8:em(),xe=6;break e;default:throw Error(x(462))}}cI();break}catch(f){Xk(t,f)}while(!0);return Gn=es=null,G.H=r,G.A=i,ce=n,ne!==null?0:(ye=null,ae=0,Pc(),xe)}function cI(){for(;ne!==null&&!x_();)nE(ne)}function nE(t){var e=Nk(t.alternate,t,ar);t.memoizedProps=t.pendingProps,e===null?Uc(t):ne=e}function mv(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=lv(n,e,e.pendingProps,e.type,void 0,ae);break;case 11:e=lv(n,e,e.pendingProps,e.type.render,e.ref,ae);break;case 5:Up(e);default:Pk(n,e),e=ne=P0(e,ar),e=Nk(n,e,ar)}t.memoizedProps=t.pendingProps,e===null?Uc(t):ne=e}function Ds(t,e,n,r){Gn=es=null,Up(e),Ms=null,No=0;var i=e.return;try{if(XC(t,i,e,n,ae)){xe=1,Bu(t,Zt(n,t.current)),ne=null;return}}catch(s){if(i!==null)throw ne=i,s;xe=1,Bu(t,Zt(n,t.current)),ne=null;return}e.flags&32768?(oe||r===1?t=!0:da||ae&536870912?t=!1:(Or=t=!0,(r===2||r===9||r===3||r===6)&&(r=Gt.current,r!==null&&r.tag===13&&(r.flags|=16384))),rE(e,t)):Uc(e)}function Uc(t){var e=t;do{if(e.flags&32768){rE(e,Or);return}t=e.return;var n=tI(e.alternate,e,ar);if(n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);xe===0&&(xe=5)}function rE(t,e){do{var n=nI(t.alternate,t);if(n!==null){n.flags&=32767,ne=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ne=t;return}ne=t=n}while(t!==null);xe=6,ne=null}function gv(t,e,n,r,i,s,a,l,u){t.cancelPendingCommit=null;do zc();while(Ke!==0);if(ce&6)throw Error(x(327));if(e!==null){if(e===t.current)throw Error(x(177));if(s=e.lanes|e.childLanes,s|=_p,$_(t,n,s,a,l,u),t===ye&&(ne=ye=null,ae=0),Xs=e,Br=t,Xn=n,wf=s,kf=i,Qk=r,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,pI(Du,function(){return lE(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,e.subtreeFlags&13878||r){r=G.T,G.T=null,i=he.p,he.p=2,a=ce,ce|=4;try{rI(t,e,n)}finally{ce=a,he.p=i,G.T=r}}Ke=1,iE(),sE(),aE()}}function iE(){if(Ke===1){Ke=0;var t=Br,e=Xs,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=G.T,G.T=null;var r=he.p;he.p=2;var i=ce;ce|=4;try{jk(e,t);var s=Cf,a=E0(t.containerInfo),l=s.focusedElem,u=s.selectionRange;if(a!==l&&l&&l.ownerDocument&&k0(l.ownerDocument.documentElement,l)){if(u!==null&&Tp(l)){var h=u.start,f=u.end;if(f===void 0&&(f=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(f,l.value.length);else{var p=l.ownerDocument||document,m=p&&p.defaultView||window;if(m.getSelection){var w=m.getSelection(),N=l.textContent.length,L=Math.min(u.start,N),M=u.end===void 0?L:Math.min(u.end,N);!w.extend&&L>M&&(a=M,M=L,L=a);var T=Vy(l,L),k=Vy(l,M);if(T&&k&&(w.rangeCount!==1||w.anchorNode!==T.node||w.anchorOffset!==T.offset||w.focusNode!==k.node||w.focusOffset!==k.offset)){var C=p.createRange();C.setStart(T.node,T.offset),w.removeAllRanges(),L>M?(w.addRange(C),w.extend(k.node,k.offset)):(C.setEnd(k.node,k.offset),w.addRange(C))}}}}for(p=[],w=l;w=w.parentNode;)w.nodeType===1&&p.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++){var D=p[l];D.element.scrollLeft=D.left,D.element.scrollTop=D.top}}tc=!!_f,Cf=_f=null}finally{ce=i,he.p=r,G.T=n}}t.current=e,Ke=2}}function sE(){if(Ke===2){Ke=0;var t=Br,e=Xs,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=G.T,G.T=null;var r=he.p;he.p=2;var i=ce;ce|=4;try{Mk(t,e.alternate,e)}finally{ce=i,he.p=r,G.T=n}}Ke=3}}function aE(){if(Ke===4||Ke===3){Ke=0,O_();var t=Br,e=Xs,n=Xn,r=Qk;e.subtreeFlags&10256||e.flags&10256?Ke=5:(Ke=0,Xs=Br=null,oE(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(jr=null),yp(n),e=e.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=G.T,i=he.p,he.p=2,G.T=null;try{for(var s=t.onRecoverableError,a=0;a<r.length;a++){var l=r[a];s(l.value,{componentStack:l.stack})}}finally{G.T=e,he.p=i}}Xn&3&&zc(),Ln(t),i=t.pendingLanes,n&261930&&i&42?t===Ef?go++:(go=0,Ef=t):go=0,rl(0)}}function oE(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,el(e)))}function zc(){return iE(),sE(),aE(),lE()}function lE(){if(Ke!==5)return!1;var t=Br,e=wf;wf=0;var n=yp(Xn),r=G.T,i=he.p;try{he.p=32>n?32:n,G.T=null,n=kf,kf=null;var s=Br,a=Xn;if(Ke=0,Xs=Br=null,Xn=0,ce&6)throw Error(x(331));var l=ce;if(ce|=4,Gk(s.current),$k(s,s.current,a,n),ce=l,rl(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Qo,s)}catch{}return!0}finally{he.p=i,G.T=r,oE(t,e)}}function yv(t,e,n){e=Zt(n,e),e=mf(t.stateNode,e,2),t=zr(t,e,2),t!==null&&(Jo(t,2),Ln(t))}function pe(t,e,n){if(t.tag===3)yv(t,t,n);else for(;e!==null;){if(e.tag===3){yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Zt(n,t),n=Sk(2),r=zr(e,n,2),r!==null&&(Tk(n,r,e,t),Jo(r,2),Ln(r));break}}e=e.return}}function hd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(Xp=!0,i.add(n),t=hI.bind(null,t,e,n),e.then(t,t))}function hI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ye===t&&(ae&n)===n&&(xe===4||xe===3&&(ae&62914560)===ae&&300>zt()-Fc?!(ce&2)&&Zs(t,0):Zp|=n,Js===ae&&(Js=0)),Ln(t)}function uE(t,e){e===0&&(e=e0()),t=Zi(t,e),t!==null&&(Jo(t,e),Ln(t))}function dI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uE(t,n)}function fI(t,e){var n=0;switch(t.tag){case 31:case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(x(314))}r!==null&&r.delete(e),uE(t,n)}function pI(t,e){return mp(t,e)}var Wu=null,ps=null,Sf=!1,Qu=!1,dd=!1,Mr=0;function Ln(t){t!==ps&&t.next===null&&(ps===null?Wu=ps=t:ps=ps.next=t),Qu=!0,Sf||(Sf=!0,gI())}function rl(t,e){if(!dd&&Qu){dd=!0;do for(var n=!1,r=Wu;r!==null;){if(t!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var a=r.suspendedLanes,l=r.pingedLanes;s=(1<<31-Bt(42|t)+1)-1,s&=i&~(a&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,vv(r,s))}else s=ae,s=Cc(r,r===ye?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(s&3)||Yo(r,s)||(n=!0,vv(r,s));r=r.next}while(n);dd=!1}}function mI(){cE()}function cE(){Qu=Sf=!1;var t=0;Mr!==0&&CI()&&(t=Mr);for(var e=zt(),n=null,r=Wu;r!==null;){var i=r.next,s=hE(r,e);s===0?(r.next=null,n===null?Wu=i:n.next=i,i===null&&(ps=n)):(n=r,(t!==0||s&3)&&(Qu=!0)),r=i}Ke!==0&&Ke!==5||rl(t),Mr!==0&&(Mr=0)}function hE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var a=31-Bt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=B_(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}if(e=ye,n=ae,n=Cc(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(fe===2||fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&zh(r),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Yo(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&zh(r),yp(n)){case 2:case 8:n=Xw;break;case 32:n=Du;break;case 268435456:n=Zw;break;default:n=Du}return r=dE.bind(null,t),n=mp(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&zh(r),t.callbackPriority=2,t.callbackNode=null,2}function dE(t,e){if(Ke!==0&&Ke!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(zc()&&t.callbackNode!==n)return null;var r=ae;return r=Cc(t,t===ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Jk(t,r,e),hE(t,zt()),t.callbackNode!=null&&t.callbackNode===n?dE.bind(null,t):null)}function vv(t,e){if(zc())return null;Jk(t,e,!0)}function gI(){AI(function(){ce&6?mp(Jw,mI):cE()})}function tm(){if(Mr===0){var t=Ws;t===0&&(t=Ol,Ol<<=1,!(Ol&261888)&&(Ol=256)),Mr=t}return Mr}function bv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:iu(""+t)}function wv(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function yI(t,e,n,r,i){if(e==="submit"&&n&&n.stateNode===i){var s=bv((i[Pt]||null).action),a=r.submitter;a&&(e=(e=a[Pt]||null)?bv(e.formAction):a.getAttribute("formAction"),e!==null&&(s=e,a=null));var l=new Ic("action","action",null,r,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Mr!==0){var u=a?wv(i,a):new FormData(i);ff(n,{pending:!0,data:u,method:i.method,action:s},null,u)}}else typeof s=="function"&&(l.preventDefault(),u=a?wv(i,a):new FormData(i),ff(n,{pending:!0,data:u,method:i.method,action:s},s,u))},currentTarget:i}]})}}for(var fd=0;fd<ef.length;fd++){var pd=ef[fd],vI=pd.toLowerCase(),bI=pd[0].toUpperCase()+pd.slice(1);vn(vI,"on"+bI)}vn(T0,"onAnimationEnd");vn(_0,"onAnimationIteration");vn(C0,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(LC,"onTransitionRun");vn(MC,"onTransitionStart");vn(FC,"onTransitionCancel");vn(I0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function fE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=h;try{s(i)}catch(f){xu(f)}i.currentTarget=null,s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=h;try{s(i)}catch(f){xu(f)}i.currentTarget=null,s=u}}}}function te(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var r=t+"__bubble";n.has(r)||(pE(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),pE(n,t,r,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function nm(t){if(!t[ql]){t[ql]=!0,s0.forEach(function(n){n!=="selectionchange"&&(wI.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,md("selectionchange",!1,e))}}function pE(t,e,n,r){switch(IE(e)){case 2:var i=WI;break;case 8:i=QI;break;default:i=am}n=i.bind(null,e,n,t),i=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===i)return;a=a.return}for(;l!==null;){if(a=Es(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){r=s=a;continue e}l=l.parentNode}}r=r.return}f0(function(){var h=s,f=wp(n),p=[];e:{var m=A0.get(t);if(m!==void 0){var w=Ic,N=t;switch(t){case"keypress":if(au(n)===0)break e;case"keydown":case"keyup":w=fC;break;case"focusin":N="focus",w=Hh;break;case"focusout":N="blur",w=Hh;break;case"beforeblur":case"afterblur":w=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Ay;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=tC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=gC;break;case T0:case _0:case C0:w=iC;break;case I0:w=vC;break;case"scroll":case"scrollend":w=Z_;break;case"wheel":w=wC;break;case"copy":case"cut":case"paste":w=aC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Py;break;case"toggle":case"beforetoggle":w=EC}var L=(e&4)!==0,M=!L&&(t==="scroll"||t==="scrollend"),T=L?m!==null?m+"Capture":null:m;L=[];for(var k=h,C;k!==null;){var D=k;if(C=D.stateNode,D=D.tag,D!==5&&D!==26&&D!==27||C===null||T===null||(D=To(k,T),D!=null&&L.push(xo(k,D,C))),M)break;k=k.return}0<L.length&&(m=new w(m,N,null,n,f),p.push({event:m,listeners:L}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",m&&n!==Yd&&(N=n.relatedTarget||n.fromElement)&&(Es(N)||N[la]))break e;if((w||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,w?(N=n.relatedTarget||n.toElement,w=h,N=N?Es(N):null,N!==null&&(M=Wo(N),L=N.tag,N!==M||L!==5&&L!==27&&L!==6)&&(N=null)):(w=null,N=h),w!==N)){if(L=Ay,D="onMouseLeave",T="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(L=Py,D="onPointerLeave",T="onPointerEnter",k="pointer"),M=w==null?m:Wa(w),C=N==null?m:Wa(N),m=new L(D,k+"leave",w,n,f),m.target=M,m.relatedTarget=C,D=null,Es(f)===h&&(L=new L(T,k+"enter",N,n,f),L.target=C,L.relatedTarget=M,D=L),M=D,w&&N)t:{for(L=kI,T=w,k=N,C=0,D=T;D;D=L(D))C++;D=0;for(var V=k;V;V=L(V))D++;for(;0<C-D;)T=L(T),C--;for(;0<D-C;)k=L(k),D--;for(;C--;){if(T===k||k!==null&&T===k.alternate){L=T;break t}T=L(T),k=L(k)}L=null}else L=null;w!==null&&kv(p,m,w,L,!1),N!==null&&M!==null&&kv(p,M,N,L,!0)}}e:{if(m=h?Wa(h):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var B=Oy;else if(xy(m))if(b0)B=RC;else{B=PC;var b=NC}else w=m.nodeName,!w||w.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&bp(h.elementType)&&(B=Oy):B=DC;if(B&&(B=B(t,h))){v0(p,B,n,f);break e}b&&b(t,m,h),t==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&Qd(m,"number",m.value)}switch(b=h?Wa(h):window,t){case"focusin":(xy(b)||b.contentEditable==="true")&&(_s=b,Xd=h,ao=null);break;case"focusout":ao=Xd=_s=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,Uy(p,n,f);break;case"selectionchange":if(OC)break;case"keydown":case"keyup":Uy(p,n,f)}var y;if(Sp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ts?g0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(m0&&n.locale!=="ko"&&(Ts||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ts&&(y=p0()):(xr=f,kp="value"in xr?xr.value:xr.textContent,Ts=!0)),b=Yu(h,v),0<b.length&&(v=new Ny(v,t,null,n,f),p.push({event:v,listeners:b}),y?v.data=y:(y=y0(n),y!==null&&(v.data=y)))),(y=TC?_C(t,n):CC(t,n))&&(v=Yu(h,"onBeforeInput"),0<v.length&&(b=new Ny("onBeforeInput","beforeinput",null,n,f),p.push({event:b,listeners:v}),b.data=y)),yI(p,t,h,n,f)}fE(p,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=To(t,n),i!=null&&r.unshift(xo(t,i,s)),i=To(t,e),i!=null&&r.push(xo(t,i,s))),t.tag===3)return r;t=t.return}return[]}function kI(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function kv(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===r)break;l!==5&&l!==26&&l!==27||h===null||(u=h,i?(h=To(n,s),h!=null&&a.unshift(xo(n,h,u))):i||(h=To(n,s),h!=null&&a.push(xo(n,h,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var EI=/\r\n?/g,SI=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(EI,`
`).replace(SI,"")}function mE(t,e){return e=Ev(e),Ev(t)===e}function me(t,e,n,r,i,s){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Ks(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Ks(t,""+r);break;case"className":Fl(t,"class",r);break;case"tabIndex":Fl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(t,n,r);break;case"style":d0(t,r,s);break;case"data":if(e!=="object"){Fl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=iu(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&me(t,e,"name",i.name,i,null),me(t,e,"formEncType",i.formEncType,i,null),me(t,e,"formMethod",i.formMethod,i,null),me(t,e,"formTarget",i.formTarget,i,null)):(me(t,e,"encType",i.encType,i,null),me(t,e,"method",i.method,i,null),me(t,e,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=iu(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Hn);break;case"onScroll":r!=null&&te("scroll",t);break;case"onScrollEnd":r!=null&&te("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(x(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(x(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=iu(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":te("beforetoggle",t),te("toggle",t),ru(t,"popover",r);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ru(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=J_.get(n)||n,ru(t,n,r))}}function Tf(t,e,n,r,i,s){switch(n){case"style":d0(t,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(x(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(x(60));t.innerHTML=n}}break;case"children":typeof r=="string"?Ks(t,r):(typeof r=="number"||typeof r=="bigint")&&Ks(t,""+r);break;case"onScroll":r!=null&&te("scroll",t);break;case"onScrollEnd":r!=null&&te("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!a0.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[Pt]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,i);break e}n in t?t[n]=r:r===!0?t.setAttribute(n,""):ru(t,n,r)}}}function lt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",t),te("load",t);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:me(t,e,s,a,n,null)}}i&&me(t,e,"srcSet",n.srcSet,n,null),r&&me(t,e,"src",n.src,n,null);return;case"input":te("invalid",t);var l=s=a=i=null,u=null,h=null;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"name":i=f;break;case"type":a=f;break;case"checked":u=f;break;case"defaultChecked":h=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(x(137,e));break;default:me(t,e,r,f,n,null)}}u0(t,s,l,u,h,a,i,!1);return;case"select":te("invalid",t),r=a=s=null;for(i in n)if(n.hasOwnProperty(i)&&(l=n[i],l!=null))switch(i){case"value":s=l;break;case"defaultValue":a=l;break;case"multiple":r=l;default:me(t,e,i,l,n,null)}e=s,n=a,t.multiple=!!r,e!=null?xs(t,!!r,e,!1):n!=null&&xs(t,!!r,n,!0);return;case"textarea":te("invalid",t),s=i=r=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":r=l;break;case"defaultValue":i=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(x(91));break;default:me(t,e,a,l,n,null)}h0(t,r,i,s);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:me(t,e,u,r,n,null)}return;case"dialog":te("beforetoggle",t),te("toggle",t),te("cancel",t),te("close",t);break;case"iframe":case"object":te("load",t);break;case"video":case"audio":for(r=0;r<Ro.length;r++)te(Ro[r],t);break;case"image":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"embed":case"source":case"link":te("error",t),te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(r=n[h],r!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(x(137,e));default:me(t,e,h,r,n,null)}return;default:if(bp(e)){for(f in n)n.hasOwnProperty(f)&&(r=n[f],r!==void 0&&Tf(t,e,f,r,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(r=n[l],r!=null&&me(t,e,l,r,n,null))}function TI(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,a=null,l=null,u=null,h=null,f=null;for(w in n){var p=n[w];if(n.hasOwnProperty(w)&&p!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":u=p;default:r.hasOwnProperty(w)||me(t,e,w,null,r,p)}}for(var m in r){var w=r[m];if(p=n[m],r.hasOwnProperty(m)&&(w!=null||p!=null))switch(m){case"type":s=w;break;case"name":i=w;break;case"checked":h=w;break;case"defaultChecked":f=w;break;case"value":a=w;break;case"defaultValue":l=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(x(137,e));break;default:w!==p&&me(t,e,m,w,r,p)}}Wd(t,a,l,u,h,f,s,i);return;case"select":w=a=l=m=null;for(s in n)if(u=n[s],n.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":w=u;default:r.hasOwnProperty(s)||me(t,e,s,null,r,u)}for(i in r)if(s=r[i],u=n[i],r.hasOwnProperty(i)&&(s!=null||u!=null))switch(i){case"value":m=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:s!==u&&me(t,e,i,s,r,u)}e=l,n=a,r=w,m!=null?xs(t,!!n,m,!1):!!r!=!!n&&(e!=null?xs(t,!!n,e,!0):xs(t,!!n,n?[]:"",!1));return;case"textarea":w=m=null;for(l in n)if(i=n[l],n.hasOwnProperty(l)&&i!=null&&!r.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:me(t,e,l,null,r,i)}for(a in r)if(i=r[a],s=n[a],r.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":m=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(x(91));break;default:i!==s&&me(t,e,a,i,r,s)}c0(t,m,w);return;case"option":for(var N in n)if(m=n[N],n.hasOwnProperty(N)&&m!=null&&!r.hasOwnProperty(N))switch(N){case"selected":t.selected=!1;break;default:me(t,e,N,null,r,m)}for(u in r)if(m=r[u],w=n[u],r.hasOwnProperty(u)&&m!==w&&(m!=null||w!=null))switch(u){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:me(t,e,u,m,r,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in n)m=n[L],n.hasOwnProperty(L)&&m!=null&&!r.hasOwnProperty(L)&&me(t,e,L,null,r,m);for(h in r)if(m=r[h],w=n[h],r.hasOwnProperty(h)&&m!==w&&(m!=null||w!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(x(137,e));break;default:me(t,e,h,m,r,w)}return;default:if(bp(e)){for(var M in n)m=n[M],n.hasOwnProperty(M)&&m!==void 0&&!r.hasOwnProperty(M)&&Tf(t,e,M,void 0,r,m);for(f in r)m=r[f],w=n[f],!r.hasOwnProperty(f)||m===w||m===void 0&&w===void 0||Tf(t,e,f,m,r,w);return}}for(var T in n)m=n[T],n.hasOwnProperty(T)&&m!=null&&!r.hasOwnProperty(T)&&me(t,e,T,null,r,m);for(p in r)m=r[p],w=n[p],!r.hasOwnProperty(p)||m===w||m==null&&w==null||me(t,e,p,m,r,w)}function Sv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _I(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],s=i.transferSize,a=i.initiatorType,l=i.duration;if(s&&l&&Sv(a)){for(a=0,l=i.responseEnd,r+=1;r<n.length;r++){var u=n[r],h=u.startTime;if(h>l)break;var f=u.transferSize,p=u.initiatorType;f&&Sv(p)&&(u=u.responseEnd,a+=f*(u<l?1:(l-h)/(u-h)))}if(--r,e+=8*(s+a)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _f=null,Cf=null;function Ju(t){return t.nodeType===9?t:t.ownerDocument}function Tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gE(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function If(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=null;function CI(){var t=window.event;return t&&t.type==="popstate"?t===yd?!1:(yd=t,!0):(yd=null,!1)}var yE=typeof setTimeout=="function"?setTimeout:void 0,II=typeof clearTimeout=="function"?clearTimeout:void 0,_v=typeof Promise=="function"?Promise:void 0,AI=typeof queueMicrotask=="function"?queueMicrotask:typeof _v<"u"?function(t){return _v.resolve(null).then(t).catch(NI)}:yE;function NI(t){setTimeout(function(){throw t})}function ui(t){return t==="head"}function Cv(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){t.removeChild(i),ta(e);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")yo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,yo(n);for(var s=n.firstChild;s;){var a=s.nextSibling,l=s.nodeName;s[Xo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&yo(t.ownerDocument.body);n=i}while(n);ta(e)}function Iv(t,e){var n=t;t=0;do{var r=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=r}while(n)}function Af(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Af(n),vp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function PI(t,e,n,r){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Xo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence")||s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=nn(t.nextSibling),t===null)break}return null}function DI(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=nn(t.nextSibling),t===null))return null;return t}function vE(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=nn(t.nextSibling),t===null))return null;return t}function Nf(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function RI(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Df=null;function Av(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return nn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function bE(t,e,n){switch(e=Ju(n),t){case"html":if(t=e.documentElement,!t)throw Error(x(452));return t;case"head":if(t=e.head,!t)throw Error(x(453));return t;case"body":if(t=e.body,!t)throw Error(x(454));return t;default:throw Error(x(451))}}function yo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vp(t)}var an=new Map,Pv=new Set;function Xu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var dr=he.d;he.d={f:xI,r:OI,D:LI,C:MI,L:FI,m:VI,X:zI,S:UI,M:jI};function xI(){var t=dr.f(),e=Vc();return t||e}function OI(t){var e=ua(t);e!==null&&e.tag===5&&e.type==="form"?dk(e):dr.r(t)}var fa=typeof document>"u"?null:document;function wE(t,e,n){var r=fa;if(r&&typeof e=="string"&&e){var i=hn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Pv.has(i)||(Pv.add(i),t={rel:t,crossOrigin:n,href:e},r.querySelector(i)===null&&(e=r.createElement("link"),lt(e,"link",t),et(e),r.head.appendChild(e)))}}function LI(t){dr.D(t),wE("dns-prefetch",t,null)}function MI(t,e){dr.C(t,e),wE("preconnect",t,e)}function FI(t,e,n){dr.L(t,e,n);var r=fa;if(r&&t&&e){var i='link[rel="preload"][as="'+hn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+hn(n.imageSizes)+'"]')):i+='[href="'+hn(t)+'"]';var s=i;switch(e){case"style":s=ea(t);break;case"script":s=pa(t)}an.has(s)||(t=Ie({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),an.set(s,t),r.querySelector(i)!==null||e==="style"&&r.querySelector(il(s))||e==="script"&&r.querySelector(sl(s))||(e=r.createElement("link"),lt(e,"link",t),et(e),r.head.appendChild(e)))}}function VI(t,e){dr.m(t,e);var n=fa;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(t)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pa(t)}if(!an.has(s)&&(t=Ie({rel:"modulepreload",href:t},e),an.set(s,t),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}r=n.createElement("link"),lt(r,"link",t),et(r),n.head.appendChild(r)}}}function UI(t,e,n){dr.S(t,e,n);var r=fa;if(r&&t){var i=Rs(r).hoistableStyles,s=ea(t);e=e||"default";var a=i.get(s);if(!a){var l={loading:0,preload:null};if(a=r.querySelector(il(s)))l.loading=5;else{t=Ie({rel:"stylesheet",href:t,"data-precedence":e},n),(n=an.get(s))&&rm(t,n);var u=a=r.createElement("link");et(u),lt(u,"link",t),u._p=new Promise(function(h,f){u.onload=h,u.onerror=f}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,pu(a,e,r)}a={type:"stylesheet",instance:a,count:1,state:l},i.set(s,a)}}}function zI(t,e){dr.X(t,e);var n=fa;if(n&&t){var r=Rs(n).hoistableScripts,i=pa(t),s=r.get(i);s||(s=n.querySelector(sl(i)),s||(t=Ie({src:t,async:!0},e),(e=an.get(i))&&im(t,e),s=n.createElement("script"),et(s),lt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function jI(t,e){dr.M(t,e);var n=fa;if(n&&t){var r=Rs(n).hoistableScripts,i=pa(t),s=r.get(i);s||(s=n.querySelector(sl(i)),s||(t=Ie({src:t,async:!0,type:"module"},e),(e=an.get(i))&&im(t,e),s=n.createElement("script"),et(s),lt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function Dv(t,e,n,r){var i=(i=Fr.current)?Xu(i):null;if(!i)throw Error(x(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ea(n.href),n=Rs(i).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ea(n.href);var s=Rs(i).hoistableStyles,a=s.get(t);if(a||(i=i.ownerDocument||i,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,a),(s=i.querySelector(il(t)))&&!s._p&&(a.instance=s,a.state.loading=5),an.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(t,n),s||BI(i,t,n,a.state))),e&&r===null)throw Error(x(528,""));return a}if(e&&r!==null)throw Error(x(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pa(n),n=Rs(i).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(x(444,t))}}function ea(t){return'href="'+hn(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function kE(t){return Ie({},t,{"data-precedence":t.precedence,precedence:null})}function BI(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),lt(e,"link",n),et(e),t.head.appendChild(e))}function pa(t){return'[src="'+hn(t)+'"]'}function sl(t){return"script[async]"+t}function Rv(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+hn(n.href)+'"]');if(r)return e.instance=r,et(r),r;var i=Ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),et(r),lt(r,"style",i),pu(r,n.precedence,t),e.instance=r;case"stylesheet":i=ea(n.href);var s=t.querySelector(il(i));if(s)return e.state.loading|=4,e.instance=s,et(s),s;r=kE(n),(i=an.get(i))&&rm(r,i),s=(t.ownerDocument||t).createElement("link"),et(s);var a=s;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),lt(s,"link",r),e.state.loading|=4,pu(s,n.precedence,t),e.instance=s;case"script":return s=pa(n.src),(i=t.querySelector(sl(s)))?(e.instance=i,et(i),i):(r=n,(i=an.get(s))&&(r=Ie({},n),im(r,i)),t=t.ownerDocument||t,i=t.createElement("script"),et(i),lt(i,"link",r),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(x(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,pu(r,n.precedence,t));return e.instance}function pu(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,a=0;a<r.length;a++){var l=r[a];if(l.dataset.precedence===e)s=l;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function rm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function im(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var mu=null;function xv(t,e,n){if(mu===null){var r=new Map,i=mu=new Map;i.set(n,r)}else i=mu,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[Xo]||s[it]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(e)||"";a=t+a;var l=r.get(a);l?l.push(s):r.set(a,[s])}}return r}function Ov(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function $I(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function EE(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function qI(t,e,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var i=ea(r.href),s=e.querySelector(il(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Zu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,et(s);return}s=e.ownerDocument||e,r=kE(r),(i=an.get(i))&&rm(r,i),s=s.createElement("link"),et(s);var a=s;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),lt(s,"link",r),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Zu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var vd=0;function HI(t,e){return t.stylesheets&&t.count===0&&gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var r=setTimeout(function(){if(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&vd===0&&(vd=62500*_I());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>vd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function gu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,e.forEach(GI,t),ec=null,Zu.call(t))}function GI(t,e){if(!(e.state.loading&4)){var n=ec.get(t);if(n)var r=n.get(null);else{n=new Map,ec.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var a=i[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}i=e.instance,a=i.getAttribute("data-precedence"),s=n.get(a)||r,s===r&&n.set(null,i),n.set(a,i),this.count++,r=Zu.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Oo={$$typeof:qn,Provider:null,Consumer:null,_currentValue:Di,_currentValue2:Di,_threadCount:0};function KI(t,e,n,r,i,s,a,l,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jh(0),this.hiddenUpdates=jh(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function SE(t,e,n,r,i,s,a,l,u,h,f,p){return t=new KI(t,e,n,a,u,h,f,p,l),e=1,s===!0&&(e|=24),s=Mt(3,null,null,e),t.current=s,s.stateNode=t,e=Pp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:e},xp(s),t}function TE(t){return t?(t=As,t):As}function _E(t,e,n,r,i,s){i=TE(i),r.context===null?r.context=i:r.pendingContext=i,r=Ur(e),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=zr(t,r,e),n!==null&&(At(n,t,e),lo(n,t,e))}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function CE(t){if(t.tag===13||t.tag===31){var e=Zi(t,67108864);e!==null&&At(e,t,67108864),sm(t,67108864)}}function Mv(t){if(t.tag===13||t.tag===31){var e=$t();e=gp(e);var n=Zi(t,e);n!==null&&At(n,t,e),sm(t,e)}}var tc=!0;function WI(t,e,n,r){var i=G.T;G.T=null;var s=he.p;try{he.p=2,am(t,e,n,r)}finally{he.p=s,G.T=i}}function QI(t,e,n,r){var i=G.T;G.T=null;var s=he.p;try{he.p=8,am(t,e,n,r)}finally{he.p=s,G.T=i}}function am(t,e,n,r){if(tc){var i=Rf(r);if(i===null)gd(t,e,r,nc,n),Fv(t,r);else if(JI(i,t,e,n,r))r.stopPropagation();else if(Fv(t,r),e&4&&-1<YI.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=Ti(s.pendingLanes);if(a!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-Bt(a);l.entanglements[1]|=u,a&=~u}Ln(s),!(ce&6)&&(Hu=zt()+500,rl(0))}}break;case 31:case 13:l=Zi(s,2),l!==null&&At(l,s,2),Vc(),sm(s,2)}if(s=Rf(r),s===null&&gd(t,e,r,nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}function Rf(t){return t=wp(t),om(t)}var nc=null;function om(t){if(nc=null,t=Es(t),t!==null){var e=Wo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Gw(e),t!==null)return t;t=null}else if(n===31){if(t=Kw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return nc=t,null}function IE(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(L_()){case Jw:return 2;case Xw:return 8;case Du:case M_:return 32;case Zw:return 268435456;default:return 32}default:return 32}}var xf=!1,$r=null,qr=null,Hr=null,Lo=new Map,Mo=new Map,Ar=[],YI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,e){switch(t){case"focusin":case"focusout":$r=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function qa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&CE(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JI(t,e,n,r,i){switch(e){case"focusin":return $r=qa($r,t,e,n,r,i),!0;case"dragenter":return qr=qa(qr,t,e,n,r,i),!0;case"mouseover":return Hr=qa(Hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,qa(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,qa(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function AE(t){var e=Es(t.target);if(e!==null){var n=Wo(e);if(n!==null){if(e=n.tag,e===13){if(e=Gw(n),e!==null){t.blockedOn=e,ky(t.priority,function(){Mv(n)});return}}else if(e===31){if(e=Kw(n),e!==null){t.blockedOn=e,ky(t.priority,function(){Mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rf(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yd=r,n.target.dispatchEvent(r),Yd=null}else return e=ua(n),e!==null&&CE(e),t.blockedOn=n,!1;e.shift()}return!0}function Vv(t,e,n){yu(t)&&n.delete(e)}function XI(){xf=!1,$r!==null&&yu($r)&&($r=null),qr!==null&&yu(qr)&&(qr=null),Hr!==null&&yu(Hr)&&(Hr=null),Lo.forEach(Vv),Mo.forEach(Vv)}function Hl(t,e){t.blockedOn===e&&(t.blockedOn=null,xf||(xf=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,XI)))}var Gl=null;function Uv(t){Gl!==t&&(Gl=t,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],i=t[e+2];if(typeof r!="function"){if(om(r||n)===null)continue;break}var s=ua(n);s!==null&&(t.splice(e,3),e-=3,ff(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function ta(t){function e(u){return Hl(u,t)}$r!==null&&Hl($r,t),qr!==null&&Hl(qr,t),Hr!==null&&Hl(Hr,t),Lo.forEach(e),Mo.forEach(e);for(var n=0;n<Ar.length;n++){var r=Ar[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ar.length&&(n=Ar[0],n.blockedOn===null);)AE(n),n.blockedOn===null&&Ar.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],a=i[Pt]||null;if(typeof s=="function")a||Uv(n);else if(a){var l=null;if(s&&s.hasAttribute("formAction")){if(i=s,a=s[Pt]||null)l=a.formAction;else if(om(i)!==null)continue}else l=a.action;typeof l=="function"?n[r+1]=l:(n.splice(r,3),r-=3),Uv(n)}}}function NE(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return i=a})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function lm(t){this._internalRoot=t}jc.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));var n=e.current,r=$t();_E(n,r,t,e,null,null)};jc.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_E(t.current,2,null,t,null,null),Vc(),e[la]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ar.length&&e!==0&&e<Ar[n].priority;n++);Ar.splice(n,0,t),n===0&&AE(t)}};var zv=qw.version;if(zv!=="19.2.6")throw Error(x(527,zv,"19.2.6"));he.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=A_(e),t=t!==null?Ww(t):null,t=t===null?null:t.stateNode,t};var ZI={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Qo=Kl.inject(ZI),jt=Kl}catch{}}Tc.createRoot=function(t,e){if(!Hw(t))throw Error(x(299));var n=!1,r="",i=wk,s=kk,a=Ek;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=SE(t,1,!1,null,null,n,r,null,i,s,a,NE),t[la]=e.current,nm(t),new lm(e)};Tc.hydrateRoot=function(t,e,n){if(!Hw(t))throw Error(x(299));var r=!1,i="",s=wk,a=kk,l=Ek,u=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),e=SE(t,1,!0,e,n??null,r,i,u,s,a,l,NE),e.context=TE(null),n=e.current,r=$t(),r=gp(r),i=Ur(r),i.callback=null,zr(n,i,r),n=r,e.current.lanes=n,Jo(e,n),Ln(e),t[la]=e.current,nm(t),new jc(e)};Tc.version="19.2.6";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(t){console.error(t)}}PE(),Vw.exports=Tc;var J4=Vw.exports;const e2={tagline:"Your Local Cash & Carry",phone:"09054127011",whatsapp:"919054127011",email:"support@hrsupermarket.in",address:"Shop No 1, By Pass Road, near Ganpati Fatsar, Arjun Society, Rajkot, Surendranagar, Gujarat 363030",city:"Surendranagar, Gujarat",lat:22.7271,lng:71.6486},jv=[{id:"grains-flours",name:"Grains & Flours",emoji:"🌾",image:"https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=900&q=80",items:["Aashirvaad Atta","Fortune Chakki Fresh Atta","Multigrain Flour","Maida","Sooji Rava","Besan","Brown Rice","Basmati Rice","Poha","Jowar Flour"]},{id:"pulses-lentils",name:"Pulses & Lentils",emoji:"🫘",image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",items:["Toor Dal","Moong Dal","Masoor Dal","Urad Dal","Chana Dal","Rajma","Kabuli Chana","Moth Beans","Green Gram","Kala Chana"]},{id:"spices-masalas",name:"Spices & Masalas",emoji:"🌶️",image:"https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80",items:["Turmeric Powder","Red Chilli Powder","Coriander Powder","Cumin Seeds","Garam Masala","Kitchen King Masala","Pav Bhaji Masala","Sambar Powder","Mustard Seeds","Black Pepper"]},{id:"oils-ghee",name:"Oils & Ghee",emoji:"🫗",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",items:["Fortune Sunflower Oil","Groundnut Oil","Mustard Oil","Olive Oil","Cow Ghee","Buffalo Ghee","Rice Bran Oil","Soyabean Oil","Sesame Oil","Vanaspati"]},{id:"dairy-eggs",name:"Dairy & Eggs",emoji:"🥛",image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",items:["Amul Gold Milk","Fresh Curd","Paneer","Butter","Cheese Cubes","Eggs","Buttermilk","Whipping Cream","Flavoured Milk","Greek Yogurt"]},{id:"snacks-namkeen",name:"Snacks & Namkeen",emoji:"🍘",image:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",items:["Lay's Magic Masala","Haldiram Bhujia","Kurkure Masala Munch","Parle-G","Khakhra","Moong Dal Namkeen","Sev","Chivda","Mathri","Masala Peanuts"]},{id:"beverages",name:"Beverages",emoji:"🥤",image:"https://images.unsplash.com/photo-1543253539-89f1b0d59b0c?auto=format&fit=crop&w=900&q=80",items:["Coca-Cola","Pepsi","Sprite","Frooti","Mango Juice","Orange Juice","Mineral Water","Cold Coffee","Tender Coconut Water","Energy Drink"]},{id:"tea-coffee",name:"Tea & Coffee",emoji:"☕",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",items:["Tata Tea Gold","Brooke Bond Red Label","Society Tea","Green Tea","Instant Coffee","Filter Coffee","Masala Tea","Elaichi Tea","Coffee Sachets","Sugar Free Sweetener"]},{id:"fresh-fruits",name:"Fresh Fruits",emoji:"🍎",image:"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",items:["Apples","Bananas","Oranges","Pomegranates","Papaya","Mangoes","Grapes","Watermelon","Guava","Pineapple"]},{id:"fresh-vegetables",name:"Fresh Vegetables",emoji:"🥬",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",items:["Potato","Onion","Tomato","Cauliflower","Cabbage","Green Chilli","Coriander","Brinjal","Okra","Bottle Gourd"]},{id:"packaged-foods",name:"Packaged Foods",emoji:"🍜",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",items:["Maggi Noodles","Pasta","Macaroni","Ready Poha Mix","Soup Packets","Cornflakes","Oats","Peanut Butter","Jam","Instant Upma Mix"]},{id:"cleaning-home",name:"Cleaning & Home",emoji:"🧼",image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",items:["Surf Excel","Ariel Detergent","Dishwash Liquid","Floor Cleaner","Toilet Cleaner","Garbage Bags","Scrub Pads","Mop Refill","Glass Cleaner","Room Freshener"]},{id:"personal-care",name:"Personal Care",emoji:"🧴",image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",items:["Bath Soap","Shampoo","Hair Oil","Face Wash","Toothpaste","Toothbrush","Body Lotion","Talcum Powder","Hand Wash","Shaving Cream"]},{id:"sweets-dry-fruits",name:"Sweets & Dry Fruits",emoji:"🥜",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80",items:["Kaju","Badam","Pista","Raisins","Dates","Soan Papdi","Besan Ladoo","Kaju Katli","Dry Fruit Mix","Anjeer"]}];function t2(t){var e;return((e=jv.find(n=>n.name===t))==null?void 0:e.image)||jv[0].image}const n2=[["Aashirvaad Atta","Grains & Flours","5kg",285,320,4.7,148,"Bestseller","🌾"],["Fortune Basmati Rice","Grains & Flours","5kg",449,520,4.6,97,"Popular","🍚"],["Toor Dal","Pulses & Lentils","1kg",158,185,4.5,88,"Daily Saver","🫘"],["Kabuli Chana","Pulses & Lentils","1kg",132,155,4.4,64,"Popular","🫘"],["Turmeric Powder","Spices & Masalas","500g",112,135,4.8,120,"Kitchen Pick","🌶️"],["Garam Masala","Spices & Masalas","200g",86,110,4.6,53,"Bestseller","🧂"],["Fortune Sunflower Oil","Oils & Ghee","1L",168,189,4.5,140,"Popular","🫗"],["Cow Ghee","Oils & Ghee","1L",615,690,4.7,76,"Premium","🧈"],["Amul Gold Milk","Dairy & Eggs","1L",68,72,4.8,202,"Fresh","🥛"],["Farm Eggs","Dairy & Eggs","12 pcs",84,96,4.4,91,"Daily Fresh","🥚"],["Haldiram Bhujia","Snacks & Namkeen","400g",94,115,4.7,112,"Bestseller","🍘"],["Lay's Magic Masala","Snacks & Namkeen","Large Pack",45,50,4.3,131,"Popular","🥔"],["Coca-Cola","Beverages","2L",95,110,4.5,88,"Party Pack","🥤"],["Mango Juice","Beverages","1L",110,125,4.4,67,"Summer Pick","🥭"],["Tata Tea Gold","Tea & Coffee","1kg",565,630,4.8,119,"Popular","☕"],["Instant Coffee","Tea & Coffee","100g",155,180,4.5,58,"Hot Pick","☕"],["Apples","Fresh Fruits","1kg",145,170,4.3,39,"Fresh","🍎"],["Bananas","Fresh Fruits","12 pcs",60,70,4.6,63,"Fresh","🍌"],["Potato","Fresh Vegetables","1kg",30,36,4.4,77,"Fresh","🥔"],["Tomato","Fresh Vegetables","1kg",32,40,4.2,52,"Daily Fresh","🍅"],["Maggi Noodles","Packaged Foods","4 pack",56,68,4.7,156,"Bestseller","🍜"],["Cornflakes","Packaged Foods","750g",185,215,4.3,42,"Breakfast Pick","🥣"],["Surf Excel","Cleaning & Home","1kg",225,260,4.6,71,"Popular","🧼"],["Floor Cleaner","Cleaning & Home","2L",188,220,4.4,36,"Home Care","🪣"],["Bath Soap Value Pack","Personal Care","5 pcs",120,145,4.5,55,"Value Pack","🧼"],["Toothpaste Family Pack","Personal Care","300g",135,160,4.4,49,"Popular","🪥"],["Kaju","Sweets & Dry Fruits","500g",495,560,4.8,81,"Premium","🥜"],["Soan Papdi","Sweets & Dry Fruits","500g",160,190,4.2,29,"Festive","🍬"]],X4=[{id:"banner-1",title:"Weekend Grocery Rush",subtitle:"Fresh staples, namkeen, and dairy picks packed for the family.",cta:"Shop now",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #1e9b6d, #104f4f)"},{id:"banner-2",title:"Tea Time Specials",subtitle:"Biscuits, tea, coffee, and evening snack combos with local savings.",cta:"View offers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #e8843f, #b64c36)"},{id:"banner-3",title:"Fresh Fruits & Veggies",subtitle:"Everyday freshness for Surendranagar households with quick pickup.",cta:"Order produce",image:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #74a84a, #285943)"},{id:"banner-4",title:"Dry Fruit Gifting Picks",subtitle:"Premium sweets, dry fruits, and festive family favorites in one cart.",cta:"See gifting range",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #5e3f99, #aa5b86)"}],Z4=[{id:"coupon-1",code:"HRWELCOME",title:"Welcome savings",discount:"₹50 off above ₹999"},{id:"coupon-2",code:"SNACK25",title:"Snack combo offer",discount:"₹25 off on snacks"},{id:"coupon-3",code:"FRESH10",title:"Fresh basket bonus",discount:"10% off on fruits & vegetables"}],eL=[{id:"DEMO-101",status:"Delivered",total:845,createdAt:"2026-05-14T10:30:00.000Z",items:[{title:"Aashirvaad Atta",quantity:1},{title:"Amul Gold Milk",quantity:2},{title:"Tomato",quantity:1}]},{id:"DEMO-102",status:"Out for delivery",total:610,createdAt:"2026-05-20T17:45:00.000Z",items:[{title:"Haldiram Bhujia",quantity:1},{title:"Tata Tea Gold",quantity:1},{title:"Coca-Cola",quantity:1}]},{id:"DEMO-103",status:"Ready for pickup",total:330,createdAt:"2026-05-22T12:15:00.000Z",items:[{title:"Potato",quantity:2},{title:"Toor Dal",quantity:1},{title:"Bath Soap Value Pack",quantity:1}]}],tL={name:"Divyraj Customer",email:"customer@example.com",phone:"+91 98765 43210",address:"By Pass Road, Surendranagar, Gujarat"},nL={orderUpdates:!0,offers:!0,preorderAlerts:!0,newArrivals:!1,walletCredits:!0},rL={balance:480,transactions:[{id:"txn-1",label:"Wallet top-up",amount:500,type:"credit"},{id:"txn-2",label:"Order adjustment",amount:20,type:"debit"}]},iL=n2.map(([t,e,n,r,i,s,a,l,u],h)=>({id:`prod-${h+1}`,name:t,category:e,size:n,price:r,mrp:i,rating:s,reviews:a,badge:l,emoji:u,image:t2(e),discount:Math.round((i-r)/i*100),stock:h%4===0?"Fresh stock":h%3===0?"Fast moving":"Ready to dispatch",description:`${t} in ${n} with quick local availability for homes across Surendranagar.`})),sL={banners:"hr-react-banners",cart:"hr-react-cart",notifications:"hr-react-notifications",orders:"hr-react-demo-orders",pinAdmin:"hr-react-admin-pin-ok",pinDivyraj:"hr-react-divyraj-pin-ok",products:"hr-react-products",profile:"hr-react-profile",recentlyViewed:"hr-react-recently-viewed",settings:"hr-react-settings",wallet:"hr-react-wallet",wishlist:"hr-react-wishlist"};function r2(t,e){try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function i2(t,e){localStorage.setItem(t,JSON.stringify(e))}function Bv(t){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(t||0)}function aL(t){return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t))}function oL(t,e,n,r){const i=u=>u*Math.PI/180,s=i(n-t),a=i(r-e),l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(i(t))*Math.cos(i(n))*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function lL(t,e){return Number.isFinite(t)?e?t<=2?20:t<=4?30:t<=6?45:60:0:20}function uL(t){return Number.isFinite(t)?`${t.toFixed(1)} km from ${e2.city}`:"Location not detected yet"}function cL(t,e){const n=[],r=new Date;let i=e,s=t;for(;i<r.getFullYear()||i===r.getFullYear()&&s<=r.getMonth()+1;){const a=new Date(i,s-1,1);n.push({id:`${i}-${String(s).padStart(2,"0")}`,month:s,year:i,label:a.toLocaleString("en-IN",{month:"long",year:"numeric"})}),s+=1,s===13&&(s=1,i+=1)}return n}function s2(t){return String(t||"HR").split(" ").filter(Boolean).slice(0,2).map(e=>{var n;return((n=e[0])==null?void 0:n.toUpperCase())||""}).join("")}const ue={bg:"#f4f6f1",card:"#ffffff",text:"#10231a",subtext:"#5f6f65",line:"#dbe5dd",accent:"#157347",accentSoft:"#dff5e9",danger:"#d24747"};function DE({compact:t=!1}){return K.jsx("div",{style:{width:t?40:54,height:t?40:54,borderRadius:16,background:"linear-gradient(135deg, #157347, #0f5132)",color:"#fff",display:"grid",placeItems:"center",fontWeight:800,letterSpacing:"0.08em",boxShadow:"0 12px 24px rgba(21, 115, 71, 0.22)"},children:"HR"})}function hL({compact:t=!1,tagline:e}){return K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:t?10:14},children:[K.jsx(DE,{compact:t}),K.jsxs("div",{children:[K.jsx("div",{style:{fontWeight:800,fontSize:t?15:18},children:"HR Supermarket"}),K.jsx("div",{style:{fontSize:t?11:13,color:ue.subtext},children:e})]})]})}function RE({children:t,style:e={}}){return K.jsx("div",{style:{background:ue.card,border:`1px solid ${ue.line}`,borderRadius:24,boxShadow:"0 18px 40px rgba(16, 35, 26, 0.08)",...e},children:t})}function a2({children:t,onClick:e,kind:n="primary",style:r={},disabled:i=!1,type:s="button"}){const a=n==="primary"?{bg:ue.accent,color:"#fff",border:"transparent"}:n==="soft"?{bg:ue.accentSoft,color:ue.accent,border:ue.accentSoft}:n==="ghost"?{bg:"transparent",color:ue.text,border:ue.line}:n==="danger"?{bg:"#fff4f4",color:ue.danger,border:"#ffd1d1"}:{bg:"#fff",color:ue.text,border:ue.line};return K.jsx("button",{type:s,disabled:i,onClick:e,style:{borderRadius:999,padding:"12px 18px",border:`1px solid ${a.border}`,background:a.bg,color:a.color,cursor:i?"not-allowed":"pointer",fontWeight:700,opacity:i?.6:1,...r},children:t})}function dL({value:t,onChange:e,placeholder:n,style:r={}}){return K.jsx("input",{value:t,onChange:i=>e(i.target.value),placeholder:n,style:{width:"100%",borderRadius:18,border:`1px solid ${ue.line}`,padding:"14px 16px",outline:"none",fontSize:15,...r}})}function fL({children:t,tone:e="default",style:n={}}){const r=e==="green"?{bg:"#e5f8ec",color:"#0d683f"}:e==="orange"?{bg:"#fff1de",color:"#a25b10"}:e==="dark"?{bg:"#10231a",color:"#fff"}:{bg:"#f2f4f3",color:ue.subtext};return K.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,padding:"7px 10px",background:r.bg,color:r.color,fontSize:12,fontWeight:700,...n},children:t})}function pL({open:t,children:e,onClose:n,width:r=420,mobileFull:i=!1}){return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:t?"rgba(15, 23, 32, 0.45)":"transparent",pointerEvents:t?"auto":"none",transition:"background 180ms ease",zIndex:50}}),K.jsx("div",{style:{position:"fixed",top:0,right:0,height:"100vh",width:i?"min(100vw, 100%)":`min(${r}px, 100vw)`,background:ue.card,transform:t?"translateX(0)":"translateX(100%)",transition:"transform 240ms ease",zIndex:51,overflowY:"auto",boxShadow:"-20px 0 40px rgba(15, 23, 32, 0.18)"},children:e})]})}function mL({open:t,children:e,onClose:n}){return t?K.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:"rgba(15, 23, 32, 0.45)",display:"grid",placeItems:"center",padding:20,zIndex:60},children:K.jsx("div",{onClick:r=>r.stopPropagation(),style:{width:"min(760px, 100%)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:28,boxShadow:"0 28px 60px rgba(15, 23, 32, 0.2)"},children:e})}):null}function gL({message:t}){return t?K.jsx("div",{style:{position:"fixed",right:18,bottom:18,zIndex:80,background:"#10231a",color:"#fff",borderRadius:18,padding:"14px 18px",boxShadow:"0 18px 30px rgba(16, 35, 26, 0.24)"},children:t}):null}function yL({label:t,value:e,subtext:n,dark:r=!1}){return K.jsxs(RE,{style:{padding:20,background:r?"#132231":"#fff",color:r?"#fff":ue.text},children:[K.jsx("div",{style:{fontSize:13,color:r?"#93a4b6":ue.subtext},children:t}),K.jsx("div",{style:{fontSize:30,fontWeight:800,marginTop:10},children:e}),n?K.jsx("div",{style:{marginTop:10,fontSize:13,color:r?"#93a4b6":ue.subtext},children:n}):null]})}function vL({title:t,subtitle:e,onSubmit:n,pin:r,setPin:i,error:s,dark:a=!1}){return K.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:a?"#071018":ue.bg,padding:20},children:K.jsxs(RE,{style:{width:"min(420px, 100%)",padding:28,background:a?"#101b27":"#fff",color:a?"#fff":ue.text},children:[K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[K.jsx(DE,{}),K.jsxs("div",{children:[K.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),K.jsx("div",{style:{color:a?"#8ea3b8":ue.subtext,fontSize:14},children:e})]})]}),K.jsxs("form",{onSubmit:l=>{l.preventDefault(),n()},style:{display:"grid",gap:14},children:[K.jsx("input",{value:r,onChange:l=>i(l.target.value),placeholder:"Enter PIN",type:"password",style:{width:"100%",borderRadius:16,border:`1px solid ${a?"#233243":ue.line}`,padding:"14px 16px",outline:"none",background:a?"#0b141d":"#fff",color:a?"#fff":ue.text}}),s?K.jsx("div",{style:{color:"#ff7676",fontSize:13},children:s}):null,K.jsx(a2,{type:"submit",style:{width:"100%"},children:"Unlock"})]})]})})}function bL({kicker:t,title:e,action:n}){return K.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:16,marginBottom:18,flexWrap:"wrap"},children:[K.jsxs("div",{children:[K.jsx("div",{style:{fontSize:12,textTransform:"uppercase",color:ue.accent,fontWeight:800},children:t}),K.jsx("div",{style:{fontSize:28,fontWeight:800,marginTop:6},children:e})]}),n]})}function wL({items:t,active:e,onChange:n}){return K.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,zIndex:45,background:"#fff",borderTop:`1px solid ${ue.line}`,display:"grid",gridTemplateColumns:`repeat(${t.length}, 1fr)`},children:t.map(r=>K.jsxs("button",{onClick:()=>n(r.key),style:{border:0,background:"transparent",padding:"10px 8px 12px",color:e===r.key?ue.accent:ue.subtext,fontWeight:e===r.key?800:600},children:[K.jsx("div",{style:{fontSize:20},children:r.icon}),K.jsx("div",{style:{fontSize:11,marginTop:4},children:r.label})]},r.key))})}function kL({price:t,mrp:e,discount:n}){return K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[K.jsx("div",{style:{fontSize:20,fontWeight:800},children:Bv(t)}),K.jsx("div",{style:{fontSize:14,color:ue.subtext,textDecoration:"line-through"},children:Bv(e)}),K.jsxs("div",{style:{color:ue.accent,fontWeight:800,fontSize:14},children:[n,"% off"]})]})}function EL({name:t}){return K.jsx("div",{style:{width:44,height:44,borderRadius:"50%",display:"grid",placeItems:"center",background:ue.accentSoft,color:ue.accent,fontWeight:800},children:s2(t)})}const o2=()=>{};var $v={};/**
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
*/const xE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},l2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},OE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,w=h&63;u||(w=64,a||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new u2;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c2=function(t){const e=xE(t);return OE.encodeByteArray(e,!0)},rc=function(t){return c2(t).replace(/\./g,"")},LE=function(t){try{return OE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/function h2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
*/const d2=()=>h2().__FIREBASE_DEFAULTS__,f2=()=>{if(typeof process>"u"||typeof $v>"u")return;const t=$v.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},p2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LE(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return o2()||d2()||f2()||p2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ME=t=>{var e,n;return(n=(e=Bc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},m2=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FE=()=>{var t;return(t=Bc())==null?void 0:t.config},VE=t=>{var e;return(e=Bc())==null?void 0:e[`_${t}`]};/**
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
*/class g2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
*/function y2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rc(JSON.stringify(n)),rc(JSON.stringify(a)),""].join(".")}/**
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
*/function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function b2(){var t;const e=(t=Bc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function w2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function um(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function k2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E2(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function S2(){return!b2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function hm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function UE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
*/const T2="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T2,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?_2(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new bn(i,l,r)}}function _2(t,e){return t.replace(C2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const C2=/\{\$([^}]+)}/g;function I2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(qv(s)&&qv(a)){if(!ei(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qv(t){return t!==null&&typeof t=="object"}/**
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
*/function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ja(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function A2(t,e){const n=new N2(t,e);return n.subscribe.bind(n)}class N2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bd),i.error===void 0&&(i.error=bd),i.complete===void 0&&(i.complete=bd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bd(){}/**
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
*/const D2=1e3,R2=2,x2=4*60*60*1e3,O2=.5;function Hv(t,e=D2,n=R2){const r=e*Math.pow(n,t),i=Math.round(O2*r*(Math.random()-.5)*2);return Math.min(x2,r+i)}/**
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
*/function Ne(t){return t&&t._delegate?t._delegate:t}/**
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
*/function ol(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function zE(t){return(await fetch(t,{credentials:"include"})).ok}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ii="[DEFAULT]";/**
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
*/class L2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new g2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F2(e))try{this.getOrInitializeService({instanceIdentifier:Ii})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ii){return this.instances.has(e)}getOptions(e=Ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ii){return this.component?this.component.multipleInstances?e:Ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M2(t){return t===Ii?void 0:t}function F2(t){return t.instantiationMode==="EAGER"}/**
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
*/class V2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const U2={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},z2=se.INFO,j2={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},B2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=j2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=z2,this._logHandler=B2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?U2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const $2=(t,e)=>e.some(n=>t instanceof n);let Gv,Kv;function q2(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H2(){return Kv||(Kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jE=new WeakMap,Of=new WeakMap,BE=new WeakMap,wd=new WeakMap,dm=new WeakMap;function G2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Gr(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&jE.set(n,t)}).catch(()=>{}),dm.set(e,t),e}function K2(t){if(Of.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Of.set(t,e)}let Lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W2(t){Lf=t(Lf)}function Q2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kd(this),e,...n);return BE.set(r,e.sort?e.sort():[e]),Gr(r)}:H2().includes(t)?function(...e){return t.apply(kd(this),e),Gr(jE.get(this))}:function(...e){return Gr(t.apply(kd(this),e))}}function Y2(t){return typeof t=="function"?Q2(t):(t instanceof IDBTransaction&&K2(t),$2(t,q2())?new Proxy(t,Lf):t)}function Gr(t){if(t instanceof IDBRequest)return G2(t);if(wd.has(t))return wd.get(t);const e=Y2(t);return e!==t&&(wd.set(t,e),dm.set(e,t)),e}const kd=t=>dm.get(t);function $E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Gr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Gr(a.result),u.oldVersion,u.newVersion,Gr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const J2=["get","getKey","getAll","getAllKeys","count"],X2=["put","add","delete","clear"],Ed=new Map;function Wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=X2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J2.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ed.set(e,s),s}W2(t=>({...t,get:(e,n,r)=>Wv(e,n)||t.get(e,n,r),has:(e,n)=>!!Wv(e,n)||t.has(e,n)}));/**
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
*/class Z2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(eA(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function eA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mf="@firebase/app",Qv="0.14.12";/**
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
*/const or=new $c("@firebase/app"),tA="@firebase/app-compat",nA="@firebase/analytics-compat",rA="@firebase/analytics",iA="@firebase/app-check-compat",sA="@firebase/app-check",aA="@firebase/auth",oA="@firebase/auth-compat",lA="@firebase/database",uA="@firebase/data-connect",cA="@firebase/database-compat",hA="@firebase/functions",dA="@firebase/functions-compat",fA="@firebase/installations",pA="@firebase/installations-compat",mA="@firebase/messaging",gA="@firebase/messaging-compat",yA="@firebase/performance",vA="@firebase/performance-compat",bA="@firebase/remote-config",wA="@firebase/remote-config-compat",kA="@firebase/storage",EA="@firebase/storage-compat",SA="@firebase/firestore",TA="@firebase/ai",_A="@firebase/firestore-compat",CA="firebase",IA="12.13.0";/**
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
*/const Ff="[DEFAULT]",AA={[Mf]:"fire-core",[tA]:"fire-core-compat",[rA]:"fire-analytics",[nA]:"fire-analytics-compat",[sA]:"fire-app-check",[iA]:"fire-app-check-compat",[aA]:"fire-auth",[oA]:"fire-auth-compat",[lA]:"fire-rtdb",[uA]:"fire-data-connect",[cA]:"fire-rtdb-compat",[hA]:"fire-fn",[dA]:"fire-fn-compat",[fA]:"fire-iid",[pA]:"fire-iid-compat",[mA]:"fire-fcm",[gA]:"fire-fcm-compat",[yA]:"fire-perf",[vA]:"fire-perf-compat",[bA]:"fire-rc",[wA]:"fire-rc-compat",[kA]:"fire-gcs",[EA]:"fire-gcs-compat",[SA]:"fire-fst",[_A]:"fire-fst-compat",[TA]:"fire-vertex","fire-js":"fire-js",[CA]:"fire-js-all"};/**
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
*/const ic=new Map,NA=new Map,Vf=new Map;function Yv(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Vf.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Vf.set(e,t);for(const n of ic.values())Yv(n,t);for(const n of NA.values())Yv(n,t);return!0}function ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
*/const PA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new ts("app","Firebase",PA);/**
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
*/class DA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
*/const ma=IA;function qE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ff,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Kr.create("bad-app-name",{appName:String(i)});if(n||(n=FE()),!n)throw Kr.create("no-options");const s=ic.get(i);if(s){if(ei(n,s.options)&&ei(r,s.config))return s;throw Kr.create("duplicate-app",{appName:i})}const a=new V2(i);for(const u of Vf.values())a.addComponent(u);const l=new DA(n,r,a);return ic.set(i,l),l}function fm(t=Ff){const e=ic.get(t);if(!e&&t===Ff&&FE())return qE();if(!e)throw Kr.create("no-app",{appName:t});return e}function rn(t,e,n){let r=AA[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}Dn(new gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
*/const RA="firebase-heartbeat-database",xA=1,Fo="firebase-heartbeat-store";let Sd=null;function HE(){return Sd||(Sd=$E(RA,xA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),Sd}async function OA(t){try{const e=(await HE()).transaction(Fo),n=await e.objectStore(Fo).get(GE(t));return await e.done,n}catch(e){if(e instanceof bn)or.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Jv(t,e){try{const n=(await HE()).transaction(Fo,"readwrite");await n.objectStore(Fo).put(e,GE(t)),await n.done}catch(n){if(n instanceof bn)or.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function GE(t){return`${t.name}!${t.options.appId}`}/**
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
*/const LA=1024,MA=30;class FA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new UA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>MA){const s=zA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xv(),{heartbeatsToSend:r,unsentEntries:i}=VA(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return or.warn(n),""}}}function Xv(){return new Date().toISOString().substring(0,10)}function VA(t,e=LA){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class UA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await OA(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Zv(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function zA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
*/function jA(t){Dn(new gn("platform-logger",e=>new Z2(e),"PRIVATE")),Dn(new gn("heartbeat",e=>new FA(e),"PRIVATE")),rn(Mf,Qv,t),rn(Mf,Qv,"esm2020"),rn("fire-js","")}jA("");var BA="firebase",$A="12.13.0";/**
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
*/rn(BA,$A,"app");const KE="@firebase/installations",pm="0.6.22";/**
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
*/const WE=1e4,QE=`w:${pm}`,YE="FIS_v2",qA="https://firebaseinstallations.googleapis.com/v1",HA=60*60*1e3,GA="installations",KA="Installations";/**
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
*/const WA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$i=new ts(GA,KA,WA);function JE(t){return t instanceof bn&&t.code.includes("request-failed")}/**
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
*/function XE({projectId:t}){return`${qA}/projects/${t}/installations`}function ZE(t){return{token:t.token,requestStatus:2,expiresIn:YA(t.expiresIn),creationTime:Date.now()}}async function eS(t,e){const n=(await e.json()).error;return $i.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QA(t,{refreshToken:e}){const n=tS(t);return n.append("Authorization",JA(e)),n}async function nS(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YA(t){return Number(t.replace("s","000"))}function JA(t){return`${YE} ${t}`}/**
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
*/async function XA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XE(t),i=tS(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:YE,appId:t.appId,sdkVersion:QE},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await nS(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ZE(h.authToken)}}else throw await eS("Create Installation",u)}/**
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
*/function rS(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
*/function ZA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
*/const eN=/^[cdef][\w-]{21}$/,Uf="";function tN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=nN(t);return eN.test(e)?e:Uf}catch{return Uf}}function nN(t){return ZA(t).substr(0,22)}/**
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
*/function qc(t){return`${t.appName}!${t.appId}`}/**
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
*/const iS=new Map;function sS(t,e){const n=qc(t);aS(n,e),rN(n,e)}function aS(t,e){const n=iS.get(t);if(n)for(const r of n)r(e)}function rN(t,e){const n=iN();n&&n.postMessage({key:t,fid:e}),sN()}let Ai=null;function iN(){return!Ai&&"BroadcastChannel"in self&&(Ai=new BroadcastChannel("[Firebase] FID Change"),Ai.onmessage=t=>{aS(t.data.key,t.data.fid)}),Ai}function sN(){iS.size===0&&Ai&&(Ai.close(),Ai=null)}/**
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
*/const aN="firebase-installations-database",oN=1,qi="firebase-installations-store";let Td=null;function mm(){return Td||(Td=$E(aN,oN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qi)}}})),Td}async function sc(t,e){const n=qc(t),r=(await mm()).transaction(qi,"readwrite"),i=r.objectStore(qi),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&sS(t,e.fid),e}async function oS(t){const e=qc(t),n=(await mm()).transaction(qi,"readwrite");await n.objectStore(qi).delete(e),await n.done}async function Hc(t,e){const n=qc(t),r=(await mm()).transaction(qi,"readwrite"),i=r.objectStore(qi),s=await i.get(n),a=e(s);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&sS(t,a.fid),a}/**
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
*/async function gm(t){let e;const n=await Hc(t.appConfig,r=>{const i=lN(r),s=uN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Uf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function lN(t){const e=t||{fid:tN(),registrationStatus:0};return lS(e)}function uN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($i.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hN(t)}:{installationEntry:e}}async function cN(t,e){try{const n=await XA(t,e);return sc(t.appConfig,n)}catch(n){throw JE(n)&&n.customData.serverCode===409?await oS(t.appConfig):await sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hN(t){let e=await eb(t.appConfig);for(;e.registrationStatus===1;)await rS(100),e=await eb(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gm(t);return r||n}return e}function eb(t){return Hc(t,e=>{if(!e)throw $i.create("installation-not-found");return lS(e)})}function lS(t){return dN(t)?{fid:t.fid,registrationStatus:0}:t}function dN(t){return t.registrationStatus===1&&t.registrationTime+WE<Date.now()}/**
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
*/async function fN({appConfig:t,heartbeatServiceProvider:e},n){const r=pN(t,n),i=QA(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:QE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await nS(()=>fetch(r,l));if(u.ok){const h=await u.json();return ZE(h)}else throw await eS("Generate Auth Token",u)}function pN(t,{fid:e}){return`${XE(t)}/${e}/authTokens:generate`}/**
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
*/async function ym(t,e=!1){let n;const r=await Hc(t.appConfig,i=>{if(!uS(i))throw $i.create("not-registered");const s=i.authToken;if(!e&&yN(s))return i;if(s.requestStatus===1)return n=mN(t,e),i;{if(!navigator.onLine)throw $i.create("app-offline");const a=bN(i);return n=gN(t,a),a}});return n?await n:r.authToken}async function mN(t,e){let n=await tb(t.appConfig);for(;n.authToken.requestStatus===1;)await rS(100),n=await tb(t.appConfig);const r=n.authToken;return r.requestStatus===0?ym(t,e):r}function tb(t){return Hc(t,e=>{if(!uS(e))throw $i.create("not-registered");const n=e.authToken;return wN(n)?{...e,authToken:{requestStatus:0}}:e})}async function gN(t,e){try{const n=await fN(t,e),r={...e,authToken:n};return await sc(t.appConfig,r),n}catch(n){if(JE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await oS(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await sc(t.appConfig,r)}throw n}}function uS(t){return t!==void 0&&t.registrationStatus===2}function yN(t){return t.requestStatus===2&&!vN(t)}function vN(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HA}function bN(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function wN(t){return t.requestStatus===1&&t.requestTime+WE<Date.now()}/**
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
*/async function kN(t){const e=t,{installationEntry:n,registrationPromise:r}=await gm(e);return r?r.catch(console.error):ym(e).catch(console.error),n.fid}/**
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
*/async function EN(t,e=!1){const n=t;return await SN(n),(await ym(n,e)).token}async function SN(t){const{registrationPromise:e}=await gm(t);e&&await e}/**
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
*/function TN(t){if(!t||!t.options)throw _d("App Configuration");if(!t.name)throw _d("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _d(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _d(t){return $i.create("missing-app-config-values",{valueName:t})}/**
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
*/const cS="installations",_N="installations-internal",CN=t=>{const e=t.getProvider("app").getImmediate(),n=TN(e),r=ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IN=t=>{const e=t.getProvider("app").getImmediate(),n=ns(e,cS).getImmediate();return{getId:()=>kN(n),getToken:r=>EN(n,r)}};function AN(){Dn(new gn(cS,CN,"PUBLIC")),Dn(new gn(_N,IN,"PRIVATE"))}AN();rn(KE,pm);rn(KE,pm,"esm2020");/**
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
*/const ac="analytics",NN="firebase_id",PN="origin",DN=60*1e3,RN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vm="https://www.googletagmanager.com/gtag/js";/**
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
*/const wt=new $c("@firebase/analytics");/**
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
*/const xN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qt=new ts("analytics","Analytics",xN);/**
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
*/function ON(t){if(!t.startsWith(vm)){const e=qt.create("invalid-gtag-resource",{gtagURL:t});return wt.warn(e.message),""}return t}function hS(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function LN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MN(t,e){const n=LN("firebase-js-sdk-policy",{createScriptURL:ON}),r=document.createElement("script"),i=`${vm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function FN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VN(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await hS(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(l){wt.error(l)}t("config",i,s)}async function UN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await hS(n);for(const u of a){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){wt.error(s)}}function zN(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await UN(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await VN(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){wt.error(l)}}return i}function jN(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=zN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function BN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vm)&&n.src.includes(t))return n;return null}/**
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
*/const $N=30,qN=1e3;class HN{constructor(e={},n=qN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dS=new HN;function GN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function KN(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:GN(r)},s=RN.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();(e=u.error)!=null&&e.message&&(l=u.error.message)}catch{}throw qt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function WN(t,e=dS,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw qt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw qt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new JN;return setTimeout(async()=>{l.abort()},DN),fS({appId:r,apiKey:i,measurementId:s},a,l,e)}async function fS(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=dS){var s;const{appId:a,measurementId:l}=t;try{await QN(r,e)}catch(u){if(l)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await KN(t);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!YN(h)){if(i.deleteThrottleMetadata(a),l)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)==null?void 0:s.httpStatus)===503?Hv(n,i.intervalMillis,$N):Hv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,p),wt.debug(`Calling attemptFetch again in ${f} millis`),fS(t,p,r,i)}}function QN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(qt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YN(t){if(!(t instanceof bn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class JN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function ZN(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
*/async function eP(){if(cm())try{await hm()}catch(t){return wt.warn(qt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wt.warn(qt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tP(t,e,n,r,i,s,a){const l=WN(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>wt.error(m)),e.push(l);const u=eP().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([l,u]);BN(s)||MN(s,h.measurementId),i("js",new Date);const p=(a==null?void 0:a.config)??{};return p[PN]="firebase",p.update=!0,f!=null&&(p[NN]=f),i("config",h.measurementId,p),h.measurementId}/**
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
*/class nP{constructor(e){this.app=e}_delete(){return delete Us[this.app.options.appId],Promise.resolve()}}let Us={},nb=[];const rb={};let Cd="dataLayer",rP="gtag",ib,bm,sb=!1;function iP(){const t=[];if(um()&&t.push("This is a browser extension environment."),UE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qt.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function sP(t,e,n){iP();const r=t.options.appId;if(!r)throw qt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qt.create("no-api-key");if(Us[r]!=null)throw qt.create("already-exists",{id:r});if(!sb){FN(Cd);const{wrappedGtag:i,gtagCore:s}=jN(Us,nb,rb,Cd,rP);bm=i,ib=s,sb=!0}return Us[r]=tP(t,nb,rb,e,ib,Cd,n),new nP(t)}function aP(t=fm()){t=Ne(t);const e=ns(t,ac);return e.isInitialized()?e.getImmediate():oP(t)}function oP(t,e={}){const n=ns(t,ac);if(n.isInitialized()){const r=n.getImmediate();if(ei(e,n.getOptions()))return r;throw qt.create("already-initialized")}return n.initialize({options:e})}async function lP(){if(um()||!UE()||!cm())return!1;try{return await hm()}catch{return!1}}function uP(t,e,n){t=Ne(t),ZN(bm,Us[t.app.options.appId],e,n).catch(r=>wt.error(r))}function cP(t,e,n,r){t=Ne(t),XN(bm,Us[t.app.options.appId],e,n,r).catch(i=>wt.error(i))}const ab="@firebase/analytics",ob="0.10.22";function hP(){Dn(new gn(ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return sP(r,i,n)},"PUBLIC")),Dn(new gn("analytics-internal",t,"PRIVATE")),rn(ab,ob),rn(ab,ob,"esm2020");function t(e){try{const n=e.getProvider(ac).getImmediate();return{logEvent:(r,i,s)=>cP(n,r,i,s),setUserProperties:(r,i)=>uP(n,r,i)}}catch(n){throw qt.create("interop-component-reg-failed",{reason:n})}}}hP();function pS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dP=pS,mS=new ts("auth","Firebase",pS());/**
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
*/const oc=new $c("@firebase/auth");function fP(t,...e){oc.logLevel<=se.WARN&&oc.warn(`Auth (${ma}): ${t}`,...e)}function vu(t,...e){oc.logLevel<=se.ERROR&&oc.error(`Auth (${ma}): ${t}`,...e)}/**
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
*/function on(t,...e){throw km(t,...e)}function fn(t,...e){return km(t,...e)}function wm(t,e,n){const r={...dP(),[e]:n};return new ts("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return wm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),wm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function km(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mS.create(t,...e)}function q(t,e,...n){if(!t)throw km(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function lr(t,e){t||Kn(e)}/**
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
*/function zf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function mP(){return lb()==="http:"||lb()==="https:"}function lb(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
*/function gP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mP()||um()||"connection"in navigator)?navigator.onLine:!0}function yP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
*/class ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=v2()||k2()}get(){return gP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/function Em(t,e){lr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
*/class gS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const vP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
*/const bP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],wP=new ll(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fr(t,e,n,r,i={}){return yS(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=al({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return w2()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ol(t.emulatorConfig.host)&&(h.credentials="include"),gS.fetch()(await vS(t,t.config.apiHost,n,l),h)})}async function yS(t,e,n){t._canInitEmulator=!1;const r={...vP,...e};try{const i=new EP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Wl(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Wl(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wm(t,f,h);on(t,f)}}catch(i){if(i instanceof bn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function ul(t,e,n,r,i={}){const s=await fr(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vS(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Em(t.config,i):`${t.config.apiScheme}://${i}`;return bP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function kP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),wP.get())})}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function ub(t){return t!==void 0&&t.enterprise!==void 0}class SP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return kP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function TP(t,e){return fr(t,"GET","/v2/recaptchaConfig",ci(t,e))}/**
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
*/async function _P(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function lc(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
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
*/function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CP(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=Sm(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vo(Id(i.auth_time)),issuedAtTime:vo(Id(i.iat)),expirationTime:vo(Id(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Id(t){return Number(t)*1e3}function Sm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=LE(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cb(t){const e=Sm(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&IP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
*/class AP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/class jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vo(this.lastLoginAt),this.creationTime=vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
*/async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await na(t,lc(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=(e=s.providerUserInfo)!=null&&e.length?bS(s.providerUserInfo):[],l=PP(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function NP(t){const e=Ne(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PP(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function bS(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
*/async function DP(t,e){const n=await yS(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await vS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ol(t.emulatorConfig.host)&&(u.credentials="include"),gS.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RP(t,e){return fr(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
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
*/class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=cb(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await DP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new zs;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
*/function Er(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new AP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CP(this,e)}reload(){return NP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await na(this,_P(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:w,providerData:N,stsTokenManager:L}=n;q(p&&L,e,"internal-error");const M=zs.fromJSON(this.name,L);q(typeof p=="string",e,"internal-error"),Er(r,e.name),Er(i,e.name),q(typeof m=="boolean",e,"internal-error"),q(typeof w=="boolean",e,"internal-error"),Er(s,e.name),Er(a,e.name),Er(l,e.name),Er(u,e.name),Er(h,e.name),Er(f,e.name);const T=new dn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:w,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return N&&Array.isArray(N)&&(T.providerData=N.map(k=>({...k}))),u&&(T._redirectEventId=u),T}static async _fromIdTokenResponse(e,n,r=!1){const i=new zs;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bS(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zs;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
*/const hb=new Map;function Wn(t){lr(t instanceof Function,"Expected a class definition");let e=hb.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hb.set(t,e),e)}/**
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
*/class wS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wS.type="NONE";const db=wS;/**
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
*/function bu(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bu(this.userKey,i.apiKey,s),this.fullPersistenceKey=bu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Wn(db),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Wn(db);const a=bu(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await lc(e,{idToken:f}).catch(()=>{});if(!m)break;p=await dn._fromGetAccountInfoResponse(e,m,f)}else p=dn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new js(s,e,r))}}/**
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
*/function fb(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CS(e))return"Blackberry";if(IS(e))return"Webos";if(ES(e))return"Safari";if((e.includes("chrome/")||SS(e))&&!e.includes("edge/"))return"Chrome";if(_S(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kS(t=mt()){return/firefox\//i.test(t)}function ES(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function SS(t=mt()){return/crios\//i.test(t)}function TS(t=mt()){return/iemobile/i.test(t)}function _S(t=mt()){return/android/i.test(t)}function CS(t=mt()){return/blackberry/i.test(t)}function IS(t=mt()){return/webos/i.test(t)}function Tm(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xP(t=mt()){var e;return Tm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function OP(){return E2()&&document.documentMode===10}function AS(t=mt()){return Tm(t)||_S(t)||IS(t)||CS(t)||/windows phone/i.test(t)||TS(t)}/**
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
*/function NS(t,e=[]){let n;switch(t){case"Browser":n=fb(mt());break;case"Worker":n=`${fb(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ma}/${r}`}/**
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
*/class LP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
*/async function MP(t,e={}){return fr(t,"GET","/v2/passwordPolicy",ci(t,e))}/**
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
*/const FP=6;class VP{constructor(e){var n;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??FP,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
*/class UP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pb(this),this.idTokenSubscription=new pb(this),this.beforeStateQueue=new LP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)==null?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u!=null&&u.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Zn(this));const n=e?Ne(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MP(this),n=new VP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await RP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=NS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return n!=null&&n.error&&fP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(t){return Ne(t)}class pb{constructor(e){this.auth=e,this.observer=null,this.addObserver=A2(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zP(t){Gc=t}function PS(t){return Gc.loadJS(t)}function jP(){return Gc.recaptchaEnterpriseScript}function BP(){return Gc.gapiScript}function $P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class qP{constructor(){this.enterprise=new HP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const GP="recaptcha-enterprise",DS="NO_RECAPTCHA";class KP{constructor(e){this.type=GP,this.auth=hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{TP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new SP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;ub(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(DS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qP().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&ub(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jP();u.length!==0&&(u+=l),PS(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function mb(t,e,n,r=!1,i=!1){const s=new KP(t);let a;if(i)a=DS;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Bf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await mb(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mb(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
*/function WP(t,e){const n=ns(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ei(i,e??{}))return r;on(r,"already-initialized")}return n.initialize({options:e})}function QP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YP(t,e,n){const r=hi(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=RS(e),{host:a,port:l}=JP(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(ei(h,r.config.emulator)&&ei(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ol(a)?zE(`${s}//${a}${u}`):XP()}function RS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=RS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gb(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gb(a)}}}function gb(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
*/class _m{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function ZP(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
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
*/async function eD(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",ci(t,e))}/**
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
*/async function tD(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}async function nD(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}/**
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
*/class Vo extends _m{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Vo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Vo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,n,"signInWithPassword",eD);case"emailLink":return tD(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,r,"signUpPassword",ZP);case"emailLink":return nD(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
*/async function Bs(t,e){return ul(t,"POST","/v1/accounts:signInWithIdp",ci(t,e))}/**
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
*/const rD="http://localhost";class Hi extends _m{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Hi(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:rD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
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
*/function iD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sD(t){const e=Ja(Xa(t)).link,n=e?Ja(Xa(e)).deep_link_id:null,r=Ja(Xa(t)).deep_link_id;return(r?Ja(Xa(r)).link:null)||r||n||e||t}class Cm{constructor(e){const n=Ja(Xa(e)),r=n.apiKey??null,i=n.oobCode??null,s=iD(n.mode??null);q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=sD(e);try{return new Cm(n)}catch{return null}}}/**
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
*/class ga{constructor(){this.providerId=ga.PROVIDER_ID}static credential(e,n){return Vo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cm.parseLink(n);return q(r,"argument-error"),Vo._fromEmailAndCode(e,r.code,r.tenantId)}}ga.PROVIDER_ID="password";ga.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ga.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class Im{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class cl extends Im{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class Nr extends cl{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nr.credential(e.oauthAccessToken)}catch{return null}}}Nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nr.PROVIDER_ID="facebook.com";/**
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
*/class $n extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hi._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
*/class Pr extends cl{constructor(){super("github.com")}static credential(e){return Hi._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.GITHUB_SIGN_IN_METHOD="github.com";Pr.PROVIDER_ID="github.com";/**
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
*/class Dr extends cl{constructor(){super("twitter.com")}static credential(e,n){return Hi._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dr.credentialFromTaggedObject(e)}static credentialFromError(e){return Dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dr.credential(n,r)}catch{return null}}}Dr.TWITTER_SIGN_IN_METHOD="twitter.com";Dr.PROVIDER_ID="twitter.com";/**
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
*/async function aD(t,e){return ul(t,"POST","/v1/accounts:signUp",ci(t,e))}/**
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
*/class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),a=yb(r);return new Gi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yb(r);return new Gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yb(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
*/class cc extends bn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function xS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function oD(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
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
*/async function lD(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await na(t,xS(r,i,e,t),n);q(s.idToken,r,"internal-error");const a=Sm(s.idToken);q(a,r,"internal-error");const{sub:l}=a;return q(t.uid===l,r,"user-mismatch"),Gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
*/async function OS(t,e,n=!1){if(Ft(t.app))return Promise.reject(Zn(t));const r="signIn",i=await xS(t,r,e),s=await Gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uD(t,e){return OS(hi(t),e)}/**
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
*/async function LS(t){const e=hi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cD(t,e,n){if(Ft(t.app))return Promise.reject(Zn(t));const r=hi(t),i=await Bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",aD).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&LS(t),a}),s=await Gi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function hD(t,e,n){return Ft(t.app)?Promise.reject(Zn(t)):uD(Ne(t),ga.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&LS(t),r})}/**
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
*/async function dD(t,e){return fr(t,"POST","/v1/accounts:update",e)}/**
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
*/async function fD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await na(r,dD(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}/**
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
*/function pD(t,e){return Ne(t).setPersistence(e)}function mD(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function gD(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function yD(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function vD(t){return Ne(t).signOut()}const hc="__sak";/**
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
*/class MS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const bD=1e3,wD=10;class FS extends MS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=AS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);OP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},bD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FS.type="LOCAL";const VS=FS;/**
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
*/class US extends MS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}US.type="SESSION";const zS=US;/**
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
*/function kD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await kD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
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
*/function Am(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
*/class ED{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Am("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function In(){return window}function SD(t){In().location.href=t}/**
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
*/function jS(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function TD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _D(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function CD(){return jS()?self:null}/**
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
*/const BS="firebaseLocalStorageDb",ID=1,dc="firebaseLocalStorage",$S="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function AD(){const t=indexedDB.deleteDatabase(BS);return new hl(t).toPromise()}function $f(){const t=indexedDB.open(BS,ID);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:$S})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await AD(),e(await $f()))})})}async function vb(t,e,n){const r=Wc(t,!0).put({[$S]:e,value:n});return new hl(r).toPromise()}async function ND(t,e){const n=Wc(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function bb(t,e){const n=Wc(t,!0).delete(e);return new hl(n).toPromise()}const PD=800,DD=3;class qS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(CD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TD(),!this.activeServiceWorker)return;this.sender=new ED(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(e=r[0])!=null&&e.fulfilled&&(n=r[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_D()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $f();return await vb(e,hc,"1"),await bb(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vb(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ND(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bb(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qS.type="LOCAL";const RD=qS;new ll(3e4,6e4);/**
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
*/function HS(t,e){return e?Wn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
*/class Nm extends _m{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xD(t){return OS(t.auth,new Nm(t),t.bypassAuthState)}function OD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lD(n,new Nm(t),t.bypassAuthState)}async function LD(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),oD(n,new Nm(t),t.bypassAuthState)}/**
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
*/class GS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xD;case"linkViaPopup":case"linkViaRedirect":return LD;case"reauthViaPopup":case"reauthViaRedirect":return OD;default:on(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const MD=new ll(2e3,1e4);async function FD(t,e,n){if(Ft(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=hi(t);pP(t,e,Im);const i=HS(r,n);return new Ni(r,"signInViaPopup",e,i).executeNotNull()}class Ni extends GS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ni.currentPopupAction&&Ni.currentPopupAction.cancel(),Ni.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Am();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ni.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,MD.get())};e()}}Ni.currentPopupAction=null;/**
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
*/const VD="pendingRedirect",wu=new Map;class UD extends GS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const n=await zD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zD(t,e){const n=$D(e),r=BD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jD(t,e){wu.set(t._key(),e)}function BD(t){return Wn(t._redirectPersistence)}function $D(t){return bu(VD,t.config.apiKey,t.name)}async function qD(t,e,n=!1){if(Ft(t.app))return Promise.reject(Zn(t));const r=hi(t),i=HS(r,e),s=await new UD(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
*/const HD=10*60*1e3;class GD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!KD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!KS(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HD&&this.cachedEventUids.clear(),this.cachedEventUids.has(wb(e))}saveEventToCache(e){this.cachedEventUids.add(wb(e)),this.lastProcessedEventTime=Date.now()}}function wb(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function KD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KS(t);default:return!1}}/**
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
*/async function WD(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
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
*/const QD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YD=/^https?/;async function JD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await WD(t);for(const n of e)try{if(XD(n))return}catch{}on(t,"unauthorized-domain")}function XD(t){const e=zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!YD.test(n))return!1;if(QD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
*/const ZD=new ll(3e4,6e4);function kb(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eR(t){return new Promise((e,n)=>{var r,i,s;function a(){kb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kb(),n(fn(t,"network-request-failed"))},timeout:ZD.get()})}if((i=(r=In().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((s=In().gapi)!=null&&s.load)a();else{const l=$P("iframefcb");return In()[l]=()=>{gapi.load?a():n(fn(t,"network-request-failed"))},PS(`${BP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ku=null,e})}let ku=null;function tR(t){return ku=ku||eR(t),ku}/**
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
*/const nR=new ll(5e3,15e3),rR="__/auth/iframe",iR="emulator/auth/iframe",sR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oR(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,iR):`https://${t.config.authDomain}/${rR}`,r={apiKey:e.apiKey,appName:t.name,v:ma},i=aR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function lR(t){const e=await tR(t),n=In().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:oR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=fn(t,"network-request-failed"),l=In().setTimeout(()=>{s(a)},nR.get());function u(){In().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
*/const uR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cR=500,hR=600,dR="_blank",fR="http://localhost";class Eb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pR(t,e,n,r=cR,i=hR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...uR,width:r.toString(),height:i.toString(),top:s,left:a},h=mt().toLowerCase();n&&(l=SS(h)?dR:n),kS(h)&&(e=e||fR,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[w,N])=>`${m}${w}=${N},`,"");if(xP(h)&&l!=="_self")return mR(e||"",l),new Eb(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new Eb(p)}function mR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
*/const gR="__/auth/handler",yR="emulator/auth/handler",vR=encodeURIComponent("fac");async function Sb(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ma,eventId:i};if(e instanceof Im){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",I2(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof cl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${vR}=${encodeURIComponent(u)}`:"";return`${bR(t)}?${al(l).slice(1)}${h}`}function bR({config:t}){return t.emulator?Em(t,yR):`https://${t.authDomain}/${gR}`}/**
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
*/const Ad="webStorageSupport";class wR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zS,this._completeRedirectFn=qD,this._overrideRedirectResult=jD}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Sb(e,n,r,zf(),i);return pR(e,a,Am())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sb(e,n,r,zf(),i);return SD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lR(e),r=new GD(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ad,{type:Ad},r=>{var i;const s=(i=r==null?void 0:r[0])==null?void 0:i[Ad];s!==void 0&&n(!!s),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return AS()||ES()||Tm()}}const kR=wR;var Tb="@firebase/auth",_b="1.13.1";/**
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
*/class ER{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function SR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TR(t){Dn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NS(t)},h=new UP(r,i,s,u);return QP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new gn("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(r=>new ER(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Tb,_b,SR(t)),rn(Tb,_b,"esm2020")}/**
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
*/const _R=5*60,CR=VE("authIdTokenMaxAge")||_R;let Cb=null;const IR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>CR)return;const i=n==null?void 0:n.token;Cb!==i&&(Cb=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function AR(t=fm()){const e=ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:kR,persistence:[RD,VS,zS]}),r=VE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=IR(s.toString());gD(n,a,()=>a(n.currentUser)),mD(n,l=>a(l))}}const i=ME("auth");return i&&YP(n,`http://${i}`),n}function NR(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}zP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",NR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TR("Browser");var Ib=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,WS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.F=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.D=function(S,_,I){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return y.prototype[_].apply(S,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,v){v||(v=0);const S=Array(16);if(typeof y=="string")for(var _=0;_<16;++_)S[_]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(_=0;_<16;++_)S[_]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],_=b.g[2];let I=b.g[3],E;E=y+(I^v&(_^I))+S[0]+3614090360&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(_^y&(v^_))+S[1]+3905402710&4294967295,I=y+(E<<12&4294967295|E>>>20),E=_+(v^I&(y^v))+S[2]+606105819&4294967295,_=I+(E<<17&4294967295|E>>>15),E=v+(y^_&(I^y))+S[3]+3250441966&4294967295,v=_+(E<<22&4294967295|E>>>10),E=y+(I^v&(_^I))+S[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(_^y&(v^_))+S[5]+1200080426&4294967295,I=y+(E<<12&4294967295|E>>>20),E=_+(v^I&(y^v))+S[6]+2821735955&4294967295,_=I+(E<<17&4294967295|E>>>15),E=v+(y^_&(I^y))+S[7]+4249261313&4294967295,v=_+(E<<22&4294967295|E>>>10),E=y+(I^v&(_^I))+S[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(_^y&(v^_))+S[9]+2336552879&4294967295,I=y+(E<<12&4294967295|E>>>20),E=_+(v^I&(y^v))+S[10]+4294925233&4294967295,_=I+(E<<17&4294967295|E>>>15),E=v+(y^_&(I^y))+S[11]+2304563134&4294967295,v=_+(E<<22&4294967295|E>>>10),E=y+(I^v&(_^I))+S[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=I+(_^y&(v^_))+S[13]+4254626195&4294967295,I=y+(E<<12&4294967295|E>>>20),E=_+(v^I&(y^v))+S[14]+2792965006&4294967295,_=I+(E<<17&4294967295|E>>>15),E=v+(y^_&(I^y))+S[15]+1236535329&4294967295,v=_+(E<<22&4294967295|E>>>10),E=y+(_^I&(v^_))+S[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^_&(y^v))+S[6]+3225465664&4294967295,I=y+(E<<9&4294967295|E>>>23),E=_+(y^v&(I^y))+S[11]+643717713&4294967295,_=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(_^I))+S[0]+3921069994&4294967295,v=_+(E<<20&4294967295|E>>>12),E=y+(_^I&(v^_))+S[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^_&(y^v))+S[10]+38016083&4294967295,I=y+(E<<9&4294967295|E>>>23),E=_+(y^v&(I^y))+S[15]+3634488961&4294967295,_=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(_^I))+S[4]+3889429448&4294967295,v=_+(E<<20&4294967295|E>>>12),E=y+(_^I&(v^_))+S[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^_&(y^v))+S[14]+3275163606&4294967295,I=y+(E<<9&4294967295|E>>>23),E=_+(y^v&(I^y))+S[3]+4107603335&4294967295,_=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(_^I))+S[8]+1163531501&4294967295,v=_+(E<<20&4294967295|E>>>12),E=y+(_^I&(v^_))+S[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=I+(v^_&(y^v))+S[2]+4243563512&4294967295,I=y+(E<<9&4294967295|E>>>23),E=_+(y^v&(I^y))+S[7]+1735328473&4294967295,_=I+(E<<14&4294967295|E>>>18),E=v+(I^y&(_^I))+S[12]+2368359562&4294967295,v=_+(E<<20&4294967295|E>>>12),E=y+(v^_^I)+S[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^_)+S[8]+2272392833&4294967295,I=y+(E<<11&4294967295|E>>>21),E=_+(I^y^v)+S[11]+1839030562&4294967295,_=I+(E<<16&4294967295|E>>>16),E=v+(_^I^y)+S[14]+4259657740&4294967295,v=_+(E<<23&4294967295|E>>>9),E=y+(v^_^I)+S[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^_)+S[4]+1272893353&4294967295,I=y+(E<<11&4294967295|E>>>21),E=_+(I^y^v)+S[7]+4139469664&4294967295,_=I+(E<<16&4294967295|E>>>16),E=v+(_^I^y)+S[10]+3200236656&4294967295,v=_+(E<<23&4294967295|E>>>9),E=y+(v^_^I)+S[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^_)+S[0]+3936430074&4294967295,I=y+(E<<11&4294967295|E>>>21),E=_+(I^y^v)+S[3]+3572445317&4294967295,_=I+(E<<16&4294967295|E>>>16),E=v+(_^I^y)+S[6]+76029189&4294967295,v=_+(E<<23&4294967295|E>>>9),E=y+(v^_^I)+S[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=I+(y^v^_)+S[12]+3873151461&4294967295,I=y+(E<<11&4294967295|E>>>21),E=_+(I^y^v)+S[15]+530742520&4294967295,_=I+(E<<16&4294967295|E>>>16),E=v+(_^I^y)+S[2]+3299628645&4294967295,v=_+(E<<23&4294967295|E>>>9),E=y+(_^(v|~I))+S[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~_))+S[7]+1126891415&4294967295,I=y+(E<<10&4294967295|E>>>22),E=_+(y^(I|~v))+S[14]+2878612391&4294967295,_=I+(E<<15&4294967295|E>>>17),E=v+(I^(_|~y))+S[5]+4237533241&4294967295,v=_+(E<<21&4294967295|E>>>11),E=y+(_^(v|~I))+S[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~_))+S[3]+2399980690&4294967295,I=y+(E<<10&4294967295|E>>>22),E=_+(y^(I|~v))+S[10]+4293915773&4294967295,_=I+(E<<15&4294967295|E>>>17),E=v+(I^(_|~y))+S[1]+2240044497&4294967295,v=_+(E<<21&4294967295|E>>>11),E=y+(_^(v|~I))+S[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~_))+S[15]+4264355552&4294967295,I=y+(E<<10&4294967295|E>>>22),E=_+(y^(I|~v))+S[6]+2734768916&4294967295,_=I+(E<<15&4294967295|E>>>17),E=v+(I^(_|~y))+S[13]+1309151649&4294967295,v=_+(E<<21&4294967295|E>>>11),E=y+(_^(v|~I))+S[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=I+(v^(y|~_))+S[11]+3174756917&4294967295,I=y+(E<<10&4294967295|E>>>22),E=_+(y^(I|~v))+S[2]+718787259&4294967295,_=I+(E<<15&4294967295|E>>>17),E=v+(I^(_|~y))+S[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(_+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+_&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.v=function(b,y){y===void 0&&(y=b.length);const v=y-this.blockSize,S=this.C;let _=this.h,I=0;for(;I<y;){if(_==0)for(;I<=v;)i(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<y;)if(S[_++]=b.charCodeAt(I++),_==this.blockSize){i(this,S),_=0;break}}else for(;I<y;)if(S[_++]=b[I++],_==this.blockSize){i(this,S),_=0;break}}this.h=_,this.o+=y},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;y=this.o*8;for(var v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.v(b),b=Array(16),y=0,v=0;v<4;++v)for(let S=0;S<32;S+=8)b[y++]=this.g[v]>>>S&255;return b};function s(b,y){var v=l;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function a(b,y){this.h=y;const v=[];let S=!0;for(let _=b.length-1;_>=0;_--){const I=b[_]|0;S&&I==y||(v[_]=I,S=!1)}this.g=v}var l={};function u(b){return-128<=b&&b<128?s(b,function(y){return new a([y|0],y<0?-1:0)}):new a([b|0],b<0?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return M(h(-b));const y=[];let v=1;for(let S=0;b>=v;S++)y[S]=b/v|0,v*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return M(f(b.substring(1),y));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let S=p;for(let I=0;I<b.length;I+=8){var _=Math.min(8,b.length-I);const E=parseInt(b.substring(I,I+_),y);_<8?(_=h(Math.pow(y,_)),S=S.j(_).add(h(E))):(S=S.j(v),S=S.add(h(E)))}return S}var p=u(0),m=u(1),w=u(16777216);t=a.prototype,t.m=function(){if(L(this))return-M(this).m();let b=0,y=1;for(let v=0;v<this.g.length;v++){const S=this.i(v);b+=(S>=0?S:4294967296+S)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N(this))return"0";if(L(this))return"-"+M(this).toString(b);const y=h(Math.pow(b,6));var v=this;let S="";for(;;){const _=D(v,y).g;v=T(v,_.j(y));let I=((v.g.length>0?v.g[0]:v.h)>>>0).toString(b);if(v=_,N(v))return I+S;for(;I.length<6;)I="0"+I;S=I+S}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function N(b){if(b.h!=0)return!1;for(let y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=T(this,b),L(b)?-1:N(b)?0:1};function M(b){const y=b.g.length,v=[];for(let S=0;S<y;S++)v[S]=~b.g[S];return new a(v,~b.h).add(m)}t.abs=function(){return L(this)?M(this):this},t.add=function(b){const y=Math.max(this.g.length,b.g.length),v=[];let S=0;for(let _=0;_<=y;_++){let I=S+(this.i(_)&65535)+(b.i(_)&65535),E=(I>>>16)+(this.i(_)>>>16)+(b.i(_)>>>16);S=E>>>16,I&=65535,E&=65535,v[_]=E<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function T(b,y){return b.add(M(y))}t.j=function(b){if(N(this)||N(b))return p;if(L(this))return L(b)?M(this).j(M(b)):M(M(this).j(b));if(L(b))return M(this.j(M(b)));if(this.l(w)<0&&b.l(w)<0)return h(this.m()*b.m());const y=this.g.length+b.g.length,v=[];for(var S=0;S<2*y;S++)v[S]=0;for(S=0;S<this.g.length;S++)for(let _=0;_<b.g.length;_++){const I=this.i(S)>>>16,E=this.i(S)&65535,ct=b.i(_)>>>16,ln=b.i(_)&65535;v[2*S+2*_]+=E*ln,k(v,2*S+2*_),v[2*S+2*_+1]+=I*ln,k(v,2*S+2*_+1),v[2*S+2*_+1]+=E*ct,k(v,2*S+2*_+1),v[2*S+2*_+2]+=I*ct,k(v,2*S+2*_+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new a(v,0)};function k(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function C(b,y){this.g=b,this.h=y}function D(b,y){if(N(y))throw Error("division by zero");if(N(b))return new C(p,p);if(L(b))return y=D(M(b),y),new C(M(y.g),M(y.h));if(L(y))return y=D(b,M(y)),new C(M(y.g),y.h);if(b.g.length>30){if(L(b)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,S=y;S.l(b)<=0;)v=V(v),S=V(S);var _=B(v,1),I=B(S,1);for(S=B(S,2),v=B(v,2);!N(S);){var E=I.add(S);E.l(b)<=0&&(_=_.add(v),I=E),S=B(S,1),v=B(v,1)}return y=T(b,_.j(y)),new C(_,y)}for(_=p;b.l(y)>=0;){for(v=Math.max(1,Math.floor(b.m()/y.m())),S=Math.ceil(Math.log(v)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),I=h(v),E=I.j(y);L(E)||E.l(b)>0;)v-=S,I=h(v),E=I.j(y);N(I)&&(I=m),_=_.add(I),b=T(b,E)}return new C(_,b)}t.B=function(b){return D(this,b).h},t.and=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)&b.i(S);return new a(v,this.h&b.h)},t.or=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)|b.i(S);return new a(v,this.h|b.h)},t.xor=function(b){const y=Math.max(this.g.length,b.g.length),v=[];for(let S=0;S<y;S++)v[S]=this.i(S)^b.i(S);return new a(v,this.h^b.h)};function V(b){const y=b.g.length+1,v=[];for(let S=0;S<y;S++)v[S]=b.i(S)<<1|b.i(S-1)>>>31;return new a(v,b.h)}function B(b,y){const v=y>>5;y%=32;const S=b.g.length-v,_=[];for(let I=0;I<S;I++)_[I]=y>0?b.i(I+v)>>>y|b.i(I+v+1)<<32-y:b.i(I+v);return new a(_,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,WS=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Wr=a}).apply(typeof Ib<"u"?Ib:typeof self<"u"?self:typeof window<"u"?window:{});var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var QS,Za,YS,Eu,qf,JS,XS,ZS;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ql=="object"&&Ql];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var A=o[g];if(!(A in d))break e;d=d[A]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,A,P){for(var F=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)F[ee-2]=arguments[ee];return c.prototype[A].apply(g,F)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function w(o){const c=o.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function N(o,c){for(let g=1;g<arguments.length;g++){const A=arguments[g];var d=typeof A;if(d=d!="object"?d:A?Array.isArray(A)?"array":d:"null",d=="array"||d=="object"&&typeof A.length=="number"){d=o.length||0;const P=A.length||0;o.length=d+P;for(let F=0;F<P;F++)o[d+F]=A[F]}else o.push(A)}}class L{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){a.setTimeout(()=>{throw o},0)}function T(){var o=b;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class k{constructor(){this.h=this.g=null}add(c,d){const g=C.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var C=new L(()=>new D,o=>o.reset());class D{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let V,B=!1,b=new k,y=()=>{const o=Promise.resolve(void 0);V=()=>{o.then(v)}};function v(){for(var o;o=T();){try{o.h.call(o.g)}catch(d){M(d)}var c=C;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}B=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var I=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function ct(o,c){_.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(ct,_),ct.prototype.init=function(o,c){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ct.Z.h.call(this)},ct.prototype.h=function(){ct.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),j=0;function Z(o,c,d,g,A){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=A,this.key=++j,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function Ve(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function mi(o){const c={};for(const d in o)c[d]=o[d];return c}const gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ss(o,c){let d,g;for(let A=1;A<arguments.length;A++){g=arguments[A];for(d in g)o[d]=g[d];for(let P=0;P<gi.length;P++)d=gi[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function Kt(o){this.src=o,this.g={},this.h=0}Kt.prototype.add=function(o,c,d,g,A){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const F=fh(o,c,g,A);return F>-1?(c=o[F],d||(c.fa=!1)):(c=new Z(c,this.src,P,!!g,A),c.fa=d,o.push(c)),c};function pr(o,c){const d=c.type;if(d in o.g){var g=o.g[d],A=Array.prototype.indexOf.call(g,c,void 0),P;(P=A>=0)&&Array.prototype.splice.call(g,A,1),P&&(Y(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fh(o,c,d,g){for(let A=0;A<o.length;++A){const P=o[A];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==g)return A}return-1}var ph="closure_lm_"+(Math.random()*1e6|0),mh={};function mg(o,c,d,g,A){if(Array.isArray(c)){for(let P=0;P<c.length;P++)mg(o,c[P],d,g,A);return null}return d=vg(d),o&&o[ln]?o.J(c,d,l(g)?!!g.capture:!1,A):NT(o,c,d,!1,g,A)}function NT(o,c,d,g,A,P){if(!c)throw Error("Invalid event type");const F=l(A)?!!A.capture:!!A;let ee=yh(o);if(ee||(o[ph]=ee=new Kt(o)),d=ee.add(c,d,g,F,P),d.proxy)return d;if(g=PT(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)I||(A=F),A===void 0&&(A=!1),o.addEventListener(c.toString(),g,A);else if(o.attachEvent)o.attachEvent(yg(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function PT(){function o(d){return c.call(o.src,o.listener,d)}const c=DT;return o}function gg(o,c,d,g,A){if(Array.isArray(c))for(var P=0;P<c.length;P++)gg(o,c[P],d,g,A);else g=l(g)?!!g.capture:!!g,d=vg(d),o&&o[ln]?(o=o.i,P=String(c).toString(),P in o.g&&(c=o.g[P],d=fh(c,d,g,A),d>-1&&(Y(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[P],o.h--)))):o&&(o=yh(o))&&(c=o.g[c.toString()],o=-1,c&&(o=fh(c,d,g,A)),(d=o>-1?c[o]:null)&&gh(d))}function gh(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ln])pr(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(yg(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=yh(c))?(pr(d,o),d.h==0&&(d.src=null,c[ph]=null)):Y(o)}}}function yg(o){return o in mh?mh[o]:mh[o]="on"+o}function DT(o,c){if(o.da)o=!0;else{c=new ct(c,this);const d=o.listener,g=o.ha||o.src;o.fa&&gh(o),o=d.call(g,c)}return o}function yh(o){return o=o[ph],o instanceof Kt?o:null}var vh="__closure_events_fn_"+(Math.random()*1e9>>>0);function vg(o){return typeof o=="function"?o:(o[vh]||(o[vh]=function(c){return o.handleEvent(c)}),o[vh])}function ht(){S.call(this),this.i=new Kt(this),this.M=this,this.G=null}p(ht,S),ht.prototype[ln]=!0,ht.prototype.removeEventListener=function(o,c,d,g){gg(this,o,c,d,g)};function gt(o,c){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new _(c,o);else if(c instanceof _)c.target=c.target||o;else{var A=c;c=new _(g,o),ss(c,A)}A=!0;let P,F;if(d)for(F=d.length-1;F>=0;F--)P=c.g=d[F],A=wl(P,g,!0,c)&&A;if(P=c.g=o,A=wl(P,g,!0,c)&&A,A=wl(P,g,!1,c)&&A,d)for(F=0;F<d.length;F++)P=c.g=d[F],A=wl(P,g,!1,c)&&A}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let g=0;g<d.length;g++)Y(d[g]);delete o.g[c],o.h--}}this.G=null},ht.prototype.J=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},ht.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function wl(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let P=0;P<c.length;++P){const F=c[P];if(F&&!F.da&&F.capture==d){const ee=F.listener,Ge=F.ha||F.src;F.fa&&pr(o.i,F),A=ee.call(Ge,g)!==!1&&A}}return A&&!g.defaultPrevented}function RT(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function bg(o){o.g=RT(()=>{o.g=null,o.i&&(o.i=!1,bg(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class xT extends S{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ea(o){S.call(this),this.h=o,this.g={}}p(Ea,S);var wg=[];function kg(o){ve(o.g,function(c,d){this.g.hasOwnProperty(d)&&gh(c)},o),o.g={}}Ea.prototype.N=function(){Ea.Z.N.call(this),kg(this)},Ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bh=a.JSON.stringify,OT=a.JSON.parse,LT=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Eg(){}function Sg(){}var Sa={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wh(){_.call(this,"d")}p(wh,_);function kh(){_.call(this,"c")}p(kh,_);var yi={},Tg=null;function kl(){return Tg=Tg||new ht}yi.Ia="serverreachability";function _g(o){_.call(this,yi.Ia,o)}p(_g,_);function Ta(o){const c=kl();gt(c,new _g(c))}yi.STAT_EVENT="statevent";function Cg(o,c){_.call(this,yi.STAT_EVENT,o),this.stat=c}p(Cg,_);function yt(o){const c=kl();gt(c,new Cg(c,o))}yi.Ja="timingevent";function Ig(o,c){_.call(this,yi.Ja,o),this.size=c}p(Ig,_);function _a(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Ca(){this.g=!0}Ca.prototype.ua=function(){this.g=!1};function MT(o,c,d,g,A,P){o.info(function(){if(o.g)if(P){var F="",ee=P.split("&");for(let Ee=0;Ee<ee.length;Ee++){var Ge=ee[Ee].split("=");if(Ge.length>1){const Ye=Ge[0];Ge=Ge[1];const kn=Ye.split("_");F=kn.length>=2&&kn[1]=="type"?F+(Ye+"="+Ge+"&"):F+(Ye+"=redacted&")}}}else F=null;else F=P;return"XMLHTTP REQ ("+g+") [attempt "+A+"]: "+c+`
`+d+`
`+F})}function FT(o,c,d,g,A,P,F){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+A+"]: "+c+`
`+d+`
`+P+" "+F})}function as(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+UT(o,d)+(g?" "+g:"")})}function VT(o,c){o.info(function(){return"TIMEOUT: "+c})}Ca.prototype.info=function(){};function UT(o,c){if(!o.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var A=g[0];if(A!="noop"&&A!="stop"&&A!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return bh(P)}catch{return c}}var El={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ag={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ng;function Eh(){}p(Eh,Eg),Eh.prototype.g=function(){return new XMLHttpRequest},Ng=new Eh;function Ia(o){return encodeURIComponent(String(o))}function zT(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function mr(o,c,d,g){this.j=o,this.i=c,this.l=d,this.S=g||1,this.V=new Ea(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pg}function Pg(){this.i=null,this.g="",this.h=!1}var Dg={},Sh={};function Th(o,c,d){o.M=1,o.A=Tl(wn(c)),o.u=d,o.R=!0,Rg(o,null)}function Rg(o,c){o.F=Date.now(),Sl(o),o.B=wn(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Hg(d.i,"t",g),o.C=0,d=o.j.L,o.h=new Pg,o.g=uy(o.j,d?c:null,!o.u),o.P>0&&(o.O=new xT(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,g=o.ba;var A="readystatechange";Array.isArray(A)||(A&&(wg[0]=A.toString()),A=wg);for(let P=0;P<A.length;P++){const F=mg(d,A[P],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.J?mi(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Ta(),MT(o.i,o.v,o.B,o.l,o.S,o.u)}mr.prototype.ba=function(o){o=o.target;const c=this.O;c&&vr(o)==3?c.j():this.Y(o)},mr.prototype.Y=function(o){try{if(o==this.g)e:{const ee=vr(this.g),Ge=this.g.ya(),Ee=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Xg(this.g)))){this.K||ee!=4||Ge==7||(Ge==8||Ee<=0?Ta(3):Ta(2)),_h(this);var c=this.g.ca();this.X=c;var d=jT(this);if(this.o=c==200,FT(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,A=this.g;if((g=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var P=g;break t}}P=null}if(o=P)as(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ch(this,o);else{this.o=!1,this.m=3,yt(12),vi(this),Aa(this);break e}}if(this.R){o=!0;let Ye;for(;!this.K&&this.C<d.length;)if(Ye=BT(this,d),Ye==Sh){ee==4&&(this.m=4,yt(14),o=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==Dg){this.m=4,yt(15),as(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else as(this.i,this.l,Ye,null),Ch(this,Ye);if(xg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,yt(16),o=!1),this.o=this.o&&o,!o)as(this.i,this.l,d,"[Invalid Chunked Response]"),vi(this),Aa(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Oh(F),F.P=!0,yt(11))}}else as(this.i,this.l,d,null),Ch(this,d);ee==4&&vi(this),this.o&&!this.K&&(ee==4?sy(this.j,this):(this.o=!1,Sl(this)))}else n_(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),vi(this),Aa(this)}}}catch{}finally{}};function jT(o){if(!xg(o))return o.g.la();const c=Xg(o.g);if(c==="")return"";let d="";const g=c.length,A=vr(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return vi(o),Aa(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,d+=o.h.i.decode(c[P],{stream:!(A&&P==g-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function xg(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function BT(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?Sh:(d=Number(c.substring(d,g)),isNaN(d)?Dg:(g+=1,g+d>c.length?Sh:(c=c.slice(g,g+d),o.C=g+d,c)))}mr.prototype.cancel=function(){this.K=!0,vi(this)};function Sl(o){o.T=Date.now()+o.H,Og(o,o.H)}function Og(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=_a(h(o.aa,o),c)}function _h(o){o.D&&(a.clearTimeout(o.D),o.D=null)}mr.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(VT(this.i,this.B),this.M!=2&&(Ta(),yt(17)),vi(this),this.m=2,Aa(this)):Og(this,this.T-o)};function Aa(o){o.j.I==0||o.K||sy(o.j,o)}function vi(o){_h(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,kg(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function Ch(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Ih(d.h,o))){if(!o.L&&Ih(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var A=g;if(A[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Nl(d),Il(d);else break e;xh(d),yt(18)}}else d.xa=A[1],0<d.xa-d.K&&A[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=_a(h(d.Va,d),6e3));Fg(d.h)<=1&&d.ta&&(d.ta=void 0)}else wi(d,11)}else if((o.L||d.g==o)&&Nl(d),!E(c))for(A=d.Ba.g.parse(c),c=0;c<A.length;c++){let Ee=A[c];const Ye=Ee[0];if(!(Ye<=d.K))if(d.K=Ye,Ee=Ee[1],d.I==2)if(Ee[0]=="c"){d.M=Ee[1],d.ba=Ee[2];const kn=Ee[3];kn!=null&&(d.ka=kn,d.j.info("VER="+d.ka));const us=Ee[4];us!=null&&(d.za=us,d.j.info("SVER="+d.za));const br=Ee[5];br!=null&&typeof br=="number"&&br>0&&(g=1.5*br,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const wr=o.g;if(wr){const Dl=wr.g?wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dl){var P=g.h;P.g||Dl.indexOf("spdy")==-1&&Dl.indexOf("quic")==-1&&Dl.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ah(P,P.h),P.h=null))}if(g.G){const Lh=wr.g?wr.g.getResponseHeader("X-HTTP-Session-Id"):null;Lh&&(g.wa=Lh,ke(g.J,g.G,Lh))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var F=o;if(g.na=ly(g,g.L?g.ba:null,g.W),F.L){Vg(g.h,F);var ee=F,Ge=g.O;Ge&&(ee.H=Ge),ee.D&&(_h(ee),Sl(ee)),g.g=F}else ry(g);d.i.length>0&&Al(d)}else Ee[0]!="stop"&&Ee[0]!="close"||wi(d,7);else d.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?wi(d,7):Rh(d):Ee[0]!="noop"&&d.l&&d.l.qa(Ee),d.A=0)}}Ta(4)}catch{}}var $T=class{constructor(o,c){this.g=o,this.map=c}};function Lg(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mg(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fg(o){return o.h?1:o.g?o.g.size:0}function Ih(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ah(o,c){o.g?o.g.add(c):o.h=c}function Vg(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Lg.prototype.cancel=function(){if(this.i=Ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ug(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return w(o.i)}var zg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qT(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let A,P=null;g>=0?(A=o[d].substring(0,g),P=o[d].substring(g+1)):A=o[d],c(A,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof gr?(this.l=o.l,Na(this,o.j),this.o=o.o,this.g=o.g,Pa(this,o.u),this.h=o.h,Nh(this,Gg(o.i)),this.m=o.m):o&&(c=String(o).match(zg))?(this.l=!1,Na(this,c[1]||"",!0),this.o=Da(c[2]||""),this.g=Da(c[3]||"",!0),Pa(this,c[4]),this.h=Da(c[5]||"",!0),Nh(this,c[6]||"",!0),this.m=Da(c[7]||"")):(this.l=!1,this.i=new xa(null,this.l))}gr.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Ra(c,jg,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Ra(c,jg,!0),"@"),o.push(Ia(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ra(d,d.charAt(0)=="/"?KT:GT,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ra(d,QT)),o.join("")},gr.prototype.resolve=function(o){const c=wn(this);let d=!!o.j;d?Na(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var g=o.h;if(d)Pa(c,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var A=c.h.lastIndexOf("/");A!=-1&&(g=c.h.slice(0,A+1)+g)}if(A=g,A==".."||A==".")g="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){g=A.lastIndexOf("/",0)==0,A=A.split("/");const P=[];for(let F=0;F<A.length;){const ee=A[F++];ee=="."?g&&F==A.length&&P.push(""):ee==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&F==A.length&&P.push("")):(P.push(ee),g=!0)}g=P.join("/")}else g=A}return d?c.h=g:d=o.i.toString()!=="",d?Nh(c,Gg(o.i)):d=!!o.m,d&&(c.m=o.m),c};function wn(o){return new gr(o)}function Na(o,c,d){o.j=d?Da(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Pa(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Nh(o,c,d){c instanceof xa?(o.i=c,YT(o.i,o.l)):(d||(c=Ra(c,WT)),o.i=new xa(c,o.l))}function ke(o,c,d){o.i.set(c,d)}function Tl(o){return ke(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Da(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ra(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,HT),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function HT(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var jg=/[#\/\?@]/g,GT=/[#\?:]/g,KT=/[#\?]/g,WT=/[#\?@]/g,QT=/#/g;function xa(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function bi(o){o.g||(o.g=new Map,o.h=0,o.i&&qT(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=xa.prototype,t.add=function(o,c){bi(this),this.i=null,o=os(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Bg(o,c){bi(o),c=os(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function $g(o,c){return bi(o),c=os(o,c),o.g.has(c)}t.forEach=function(o,c){bi(this),this.g.forEach(function(d,g){d.forEach(function(A){o.call(c,A,g,this)},this)},this)};function qg(o,c){bi(o);let d=[];if(typeof c=="string")$g(o,c)&&(d=d.concat(o.g.get(os(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}t.set=function(o,c){return bi(this),this.i=null,o=os(this,o),$g(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=qg(this,o),o.length>0?String(o[0]):c):c};function Hg(o,c,d){Bg(o,c),d.length>0&&(o.i=null,o.g.set(os(o,c),w(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const A=Ia(d);d=qg(this,d);for(let P=0;P<d.length;P++){let F=A;d[P]!==""&&(F+="="+Ia(d[P])),o.push(F)}}return this.i=o.join("&")};function Gg(o){const c=new xa;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function os(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function YT(o,c){c&&!o.j&&(bi(o),o.i=null,o.g.forEach(function(d,g){const A=g.toLowerCase();g!=A&&(Bg(this,g),Hg(this,A,d))},o)),o.j=c}function JT(o,c){const d=new Ca;if(a.Image){const g=new Image;g.onload=f(yr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(yr,d,"TestLoadImage: error",!1,c,g),g.onabort=f(yr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(yr,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function XT(o,c){const d=new Ca,g=new AbortController,A=setTimeout(()=>{g.abort(),yr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(A),P.ok?yr(d,"TestPingServer: ok",!0,c):yr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),yr(d,"TestPingServer: error",!1,c)})}function yr(o,c,d,g,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),g(d)}catch{}}function ZT(){this.g=new LT}function Ph(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ph,Eg),Ph.prototype.g=function(){return new _l(this.i,this.h)};function _l(o,c){ht.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(_l,ht),t=_l.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,La(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Oa(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,La(this)),this.g&&(this.readyState=3,La(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kg(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kg(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Oa(this):La(this),this.readyState==3&&Kg(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Oa(this))},t.Na=function(o){this.g&&(this.response=o,Oa(this))},t.ga=function(){this.g&&Oa(this)};function Oa(o){o.readyState=4,o.l=null,o.j=null,o.B=null,La(o)}t.setRequestHeader=function(o,c){this.A.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function La(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wg(o){let c="";return ve(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function Dh(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Wg(d),typeof o=="string"?d!=null&&Ia(d):ke(o,c,d))}function De(o){ht.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(De,ht);var e_=/^https?$/i,t_=["POST","PUT"];t=De.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ng.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Qg(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var A in g)d.set(A,g[A]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),A=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(t_,c,void 0)>=0)||g||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of d)this.g.setRequestHeader(P,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Qg(this,P)}};function Qg(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Yg(o),Cl(o)}function Yg(o){o.A||(o.A=!0,gt(o,"complete"),gt(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,gt(this,"complete"),gt(this,"abort"),Cl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cl(this,!0)),De.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Jg(this):this.Xa())},t.Xa=function(){Jg(this)};function Jg(o){if(o.h&&typeof s<"u"){if(o.v&&vr(o)==4)setTimeout(o.Ca.bind(o),0);else if(gt(o,"readystatechange"),vr(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=P===0){let F=String(o.D).match(zg)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),g=!e_.test(F?F.toLowerCase():"")}d=g}if(d)gt(o,"complete"),gt(o,"success");else{o.o=6;try{var A=vr(o)>2?o.g.statusText:""}catch{A=""}o.l=A+" ["+o.ca()+"]",Yg(o)}}finally{Cl(o)}}}}function Cl(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||gt(o,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function vr(o){return o.g?o.g.readyState:0}t.ca=function(){try{return vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),OT(c)}};function Xg(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function n_(o){const c={};o=(o.g&&vr(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(E(o[g]))continue;var d=zT(o[g]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[A]||[];c[A]=P,P.push(d)}Ve(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Zg(o){this.za=0,this.i=[],this.j=new Ca,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ma("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ma("baseRetryDelayMs",5e3,o),this.Za=Ma("retryDelaySeedMs",1e4,o),this.Ta=Ma("forwardChannelMaxRetries",2,o),this.va=Ma("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Lg(o&&o.concurrentRequestLimit),this.Ba=new ZT,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Zg.prototype,t.ka=8,t.I=1,t.connect=function(o,c,d,g){yt(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=ly(this,null,this.W),Al(this)};function Rh(o){if(ey(o),o.I==3){var c=o.V++,d=wn(o.J);if(ke(d,"SID",o.M),ke(d,"RID",c),ke(d,"TYPE","terminate"),Fa(o,d),c=new mr(o,o.j,c),c.M=2,c.A=Tl(wn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=uy(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Sl(c)}oy(o)}function Il(o){o.g&&(Oh(o),o.g.cancel(),o.g=null)}function ey(o){Il(o),o.v&&(a.clearTimeout(o.v),o.v=null),Nl(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Al(o){if(!Mg(o.h)&&!o.m){o.m=!0;var c=o.Ea;V||y(),B||(V(),B=!0),b.add(c,o),o.D=0}}function r_(o,c){return Fg(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=_a(h(o.Ea,o,c),ay(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const A=new mr(this,this.j,o);let P=this.o;if(this.U&&(P?(P=mi(P),ss(P,this.U)):P=this.U),this.u!==null||this.R||(A.J=P,P=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=ny(this,A,c),d=wn(this.J),ke(d,"RID",o),ke(d,"CVER",22),this.G&&ke(d,"X-HTTP-Session-Id",this.G),Fa(this,d),P&&(this.R?c="headers="+Ia(Wg(P))+"&"+c:this.u&&Dh(d,this.u,P)),Ah(this.h,A),this.Ra&&ke(d,"TYPE","init"),this.S?(ke(d,"$req",c),ke(d,"SID","null"),A.U=!0,Th(A,d,null)):Th(A,d,c),this.I=2}}else this.I==3&&(o?ty(this,o):this.i.length==0||Mg(this.h)||ty(this))};function ty(o,c){var d;c?d=c.l:d=o.V++;const g=wn(o.J);ke(g,"SID",o.M),ke(g,"RID",d),ke(g,"AID",o.K),Fa(o,g),o.u&&o.o&&Dh(g,o.u,o.o),d=new mr(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=ny(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ah(o.h,d),Th(d,g,c)}function Fa(o,c){o.H&&ve(o.H,function(d,g){ke(c,g,d)}),o.l&&ve({},function(d,g){ke(c,g,d)})}function ny(o,c,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var A=o.i;let ee=-1;for(;;){const Ge=["count="+d];ee==-1?d>0?(ee=A[0].g,Ge.push("ofs="+ee)):ee=0:Ge.push("ofs="+ee);let Ee=!0;for(let Ye=0;Ye<d;Ye++){var P=A[Ye].g;const kn=A[Ye].map;if(P-=ee,P<0)ee=Math.max(0,A[Ye].g-100),Ee=!1;else try{P="req"+P+"_"||"";try{var F=kn instanceof Map?kn:Object.entries(kn);for(const[us,br]of F){let wr=br;l(br)&&(wr=bh(br)),Ge.push(P+us+"="+encodeURIComponent(wr))}}catch(us){throw Ge.push(P+"type="+encodeURIComponent("_badmap")),us}}catch{g&&g(kn)}}if(Ee){F=Ge.join("&");break e}}F=void 0}return o=o.i.splice(0,d),c.G=o,F}function ry(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;V||y(),B||(V(),B=!0),b.add(c,o),o.A=0}}function xh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=_a(h(o.Da,o),ay(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,iy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=_a(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Il(this),iy(this))};function Oh(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function iy(o){o.g=new mr(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=wn(o.na);ke(c,"RID","rpc"),ke(c,"SID",o.M),ke(c,"AID",o.K),ke(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ke(c,"TO",o.ia),ke(c,"TYPE","xmlhttp"),Fa(o,c),o.u&&o.o&&Dh(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Tl(wn(c)),d.u=null,d.R=!0,Rg(d,o)}t.Va=function(){this.C!=null&&(this.C=null,Il(this),xh(this),yt(19))};function Nl(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function sy(o,c){var d=null;if(o.g==c){Nl(o),Oh(o),o.g=null;var g=2}else if(Ih(o.h,c))d=c.G,Vg(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var A=o.D;g=kl(),gt(g,new Ig(g,d)),Al(o)}else ry(o);else if(A=c.m,A==3||A==0&&c.X>0||!(g==1&&r_(o,c)||g==2&&xh(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),A){case 1:wi(o,5);break;case 4:wi(o,10);break;case 3:wi(o,6);break;default:wi(o,2)}}}function ay(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function wi(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),g=o.Ua;const A=!g;g=new gr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Na(g,"https"),Tl(g),A?JT(g.toString(),d):XT(g.toString(),d)}else yt(2);o.I=0,o.l&&o.l.pa(c),oy(o),ey(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function oy(o){if(o.I=0,o.ja=[],o.l){const c=Ug(o.h);(c.length!=0||o.i.length!=0)&&(N(o.ja,c),N(o.ja,o.i),o.h.i.length=0,w(o.i),o.i.length=0),o.l.oa()}}function ly(o,c,d){var g=d instanceof gr?wn(d):new gr(d);if(g.g!="")c&&(g.g=c+"."+g.g),Pa(g,g.u);else{var A=a.location;g=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const P=new gr(null);g&&Na(P,g),c&&(P.g=c),A&&Pa(P,A),d&&(P.h=d),g=P}return d=o.G,c=o.wa,d&&c&&ke(g,d,c),ke(g,"VER",o.ka),Fa(o,g),g}function uy(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new De(new Ph({ab:d})):new De(o.ma),c.Fa(o.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cy(){}t=cy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Pl(){}Pl.prototype.g=function(o,c){return new Rt(o,c)};function Rt(o,c){ht.call(this),this.g=new Zg(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!E(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ls(this)}p(Rt,ht),Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){Rh(this.g)},Rt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=bh(o),o=d);c.i.push(new $T(c.Ya++,o)),c.I==3&&Al(c)},Rt.prototype.N=function(){this.g.l=null,delete this.j,Rh(this.g),delete this.g,Rt.Z.N.call(this)};function hy(o){wh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(hy,wh);function dy(){kh.call(this),this.status=1}p(dy,kh);function ls(o){this.g=o}p(ls,cy),ls.prototype.ra=function(){gt(this.g,"a")},ls.prototype.qa=function(o){gt(this.g,new hy(o))},ls.prototype.pa=function(o){gt(this.g,new dy)},ls.prototype.oa=function(){gt(this.g,"b")},Pl.prototype.createWebChannel=Pl.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,ZS=function(){return new Pl},XS=function(){return kl()},JS=yi,qf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,Eu=El,Ag.COMPLETE="complete",YS=Ag,Sg.EventType=Sa,Sa.OPEN="a",Sa.CLOSE="b",Sa.ERROR="c",Sa.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Za=Sg,De.prototype.listenOnce=De.prototype.K,De.prototype.getLastError=De.prototype.Ha,De.prototype.getLastErrorCode=De.prototype.ya,De.prototype.getStatus=De.prototype.ca,De.prototype.getResponseJson=De.prototype.La,De.prototype.getResponseText=De.prototype.la,De.prototype.send=De.prototype.ea,De.prototype.setWithCredentials=De.prototype.Fa,QS=De}).apply(typeof Ql<"u"?Ql:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
*/class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
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
*/let ya="12.13.0";function PR(t){ya=t}/**
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
*/const Ki=new $c("@firebase/firestore");function ms(){return Ki.logLevel}function z(t,...e){if(Ki.logLevel<=se.DEBUG){const n=e.map(Pm);Ki.debug(`Firestore (${ya}): ${t}`,...n)}}function ur(t,...e){if(Ki.logLevel<=se.ERROR){const n=e.map(Pm);Ki.error(`Firestore (${ya}): ${t}`,...n)}}function Wi(t,...e){if(Ki.logLevel<=se.WARN){const n=e.map(Pm);Ki.warn(`Firestore (${ya}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{return function(e){return JSON.stringify(e)}(t)}catch{return t}}/**
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
*/function H(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,e1(t,r,n)}function e1(t,e,n){let r=`FIRESTORE (${ya}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ur(r),new Error(r)}function de(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||e1(e,i,r)}function Q(t,e){return t}/**
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
*/const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
*/class t1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class DR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class RR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xR{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new t1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class OR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class LR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ab{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ab(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ab(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function FR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
*/class Dm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=FR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Hf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Nd(i)===Nd(s)?re(i,s):Nd(i)?1:-1}return re(t.length,e.length)}const VR=55296,UR=57343;function Nd(t){const e=t.charCodeAt(0);return e>=VR&&e<=UR}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
*/const Nb="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&H(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=En.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),i=En.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?En.extractNumericId(e).compare(En.extractNumericId(n)):Hf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wr.fromString(e.substring(4,e.length-2))}}class be extends En{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new be(n)}static emptyPath(){return new be([])}}const zR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends En{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return zR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Nb}static keyField(){return new at([Nb])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new U(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new U(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new U(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
*/class ${constructor(e){this.path=e}static fromPath(e){return new $(be.fromString(e))}static fromName(e){return new $(be.fromString(e).popFirst(5))}static empty(){return new $(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new be(e.slice()))}}/**
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
*/function n1(t,e,n){if(!n)throw new U(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jR(t,e,n,r){if(e===!0&&r===!0)throw new U(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pb(t){if(!$.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Db(t){if($.isDocumentKey(t))throw new U(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function r1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H(12329,{type:typeof t})}function Nt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new U(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
*/function He(t,e){const n={typeString:t};return e&&(n.value=e),n}function dl(t,e){if(!r1(t))throw new U(R.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new U(R.INVALID_ARGUMENT,n);return!0}/**
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
*/const Rb=-62135596800,xb=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xb);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Rb)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xb}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dl(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rb;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:He("string",_e._jsonSchemaVersion),seconds:He("number"),nanoseconds:He("number")};/**
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
*/class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new _e(0,0))}static max(){return new W(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const Uo=-1;function BR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new ti(i,$.empty(),e)}function $R(t){return new ti(t.readTime,t.key,Uo)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(W.min(),$.empty(),Uo)}static max(){return new ti(W.max(),$.empty(),Uo)}}function qR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
*/const HR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function va(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==HR)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function KR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ba(t){return t.name==="IndexedDbTransactionError"}/**
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
*/class Yc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yc.ce=-1;/**
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
*/const Rm=-1;function Jc(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function WR(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
*/const i1="";function QR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ob(e)),e=YR(t.get(n),e);return Ob(e)}function YR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case i1:n+="";break;default:n+=s}}return n}function Ob(t){return t+i1+""}/**
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
*/function Lb(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function s1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
*/class Pe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yl(this.root,e,this.comparator,!0)}}class Yl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw H(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
*/class We{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mb(this.data.getIterator())}getIteratorFrom(e){return new Mb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Mb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class Ut{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new We(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ra(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
*/class a1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
*/class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new a1("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const JR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=JR.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
*/const o1="server_timestamp",l1="__type__",u1="__previous_value__",c1="__local_write_time__";function xm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[l1])==null?void 0:n.stringValue)===o1}function Xc(t){const e=t.mapValue.fields[u1];return xm(e)?Xc(e):e}function zo(t){const e=ni(t.mapValue.fields[c1].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
*/class XR{constructor(e,n,r,i,s,a,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const pc="(default)";class jo{constructor(e,n){this.projectId=e,this.database=n||pc}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database===pc}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}function ZR(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new U(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(t.options.projectId,e)}/**
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
*/const h1="__type__",ex="__max__",Jl={mapValue:{}},d1="__vector__",mc="value";function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xm(t)?4:nx(t)?9007199254740991:tx(t)?10:11:H(28295,{value:t})}function Rn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zo(t).isEqual(zo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),a=ni(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),a=Le(i.doubleValue);return s===a?fc(s)===fc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(r,i){const s=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Lb(s)!==Lb(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Rn(s[l],a[l])))return!1;return!0}(t,e);default:return H(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=Le(i.integerValue||i.doubleValue),l=Le(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Fb(t.timestampValue,e.timestampValue);case 4:return Fb(zo(t),zo(e));case 5:return Hf(t.stringValue,e.stringValue);case 6:return function(i,s){const a=ri(i),l=ri(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=re(a[u],l[u]);if(h!==0)return h}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=re(Le(i.latitude),Le(s.latitude));return a!==0?a:re(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Vb(t.arrayValue,e.arrayValue);case 10:return function(i,s){var a,l,u,h;const f=i.fields||{},p=s.fields||{},m=(a=f[mc])==null?void 0:a.arrayValue,w=(l=p[mc])==null?void 0:l.arrayValue,N=re(((u=m==null?void 0:m.values)==null?void 0:u.length)||0,((h=w==null?void 0:w.values)==null?void 0:h.length)||0);return N!==0?N:Vb(m,w)}(t.mapValue,e.mapValue);case 11:return function(i,s){if(i===Jl.mapValue&&s===Jl.mapValue)return 0;if(i===Jl.mapValue)return 1;if(s===Jl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=s.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=Hf(l[f],h[f]);if(p!==0)return p;const m=ia(a[l[f]],u[h[f]]);if(m!==0)return m}return re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw H(23264,{he:n})}}function Fb(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=ni(t),r=ni(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Vb(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ia(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function sa(t){return Gf(t)}function Gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const n=ni(e);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return ri(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return $.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=Gf(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${Gf(e.fields[s])}`;return r+"}"}(t.mapValue):H(61005,{value:t})}function Su(t){switch(ii(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(t);return e?16+Su(e):16;case 5:return 2*t.stringValue.length;case 6:return ri(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+Su(i),0)}(t.arrayValue);case 10:case 11:return function(n){let r=0;return di(n.fields,(i,s)=>{r+=i.length+Su(s)}),r}(t.mapValue);default:throw H(13486,{value:t})}}function Ub(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kf(t){return!!t&&"integerValue"in t}function Om(t){return!!t&&"arrayValue"in t}function zb(t){return!!t&&"nullValue"in t}function jb(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tu(t){return!!t&&"mapValue"in t}function tx(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[h1])==null?void 0:n.stringValue)===d1}function bo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=bo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return{...t}}function nx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===ex}/**
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
*/class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=bo(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(bo(this.value))}}function f1(t){const e=[];return di(t.fields,(n,r)=>{const i=new at([n]);if(Tu(r)){const s=f1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ut(e)}/**
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
*/class pt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,W.min(),W.min(),W.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,W.min(),W.min(),It.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,W.min(),W.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class gc{constructor(e,n){this.position=e,this.inclusive=n}}function Bb(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),n.key):r=ia(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function $b(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
*/class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function rx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
*/class p1{}class $e extends p1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sx(e,n,r):n==="array-contains"?new lx(e,r):n==="in"?new ux(e,r):n==="not-in"?new cx(e,r):n==="array-contains-any"?new hx(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ax(e,r):new ox(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ia(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends p1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return m1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function m1(t){return t.op==="and"}function g1(t){return ix(t)&&m1(t)}function ix(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Wf(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+sa(t.value);if(g1(t))return t.filters.map(e=>Wf(e)).join(",");{const e=t.filters.map(n=>Wf(n)).join(",");return`${t.op}(${e})`}}function y1(t,e){return t instanceof $e?function(n,r){return r instanceof $e&&n.op===r.op&&n.field.isEqual(r.field)&&Rn(n.value,r.value)}(t,e):t instanceof yn?function(n,r){return r instanceof yn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,a)=>i&&y1(s,r.filters[a]),!0):!1}(t,e):void H(19439)}function v1(t){return t instanceof $e?function(e){return`${e.field.canonicalString()} ${e.op} ${sa(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(v1).join(" ,")+"}"}(t):"Filter"}class sx extends $e{constructor(e,n,r){super(e,n,r),this.key=$.fromName(r.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class ax extends $e{constructor(e,n){super(e,"in",n),this.keys=b1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class ox extends $e{constructor(e,n){super(e,"not-in",n),this.keys=b1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>$.fromName(r.referenceValue))}class lx extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Om(n)&&Bo(n.arrayValue,this.value)}}class ux extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class cx extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class hx extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Om(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
*/class dx{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function qb(t,e=null,n=[],r=[],i=null,s=null,a=null){return new dx(t,e,n,r,i,s,a)}function Lm(t){const e=Q(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>sa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>sa(r)).join(",")),e.Te=n}return e.Te}function Mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!$b(t.startAt,e.startAt)&&$b(t.endAt,e.endAt)}function Qf(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
*/class wa{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function fx(t,e,n,r,i,s,a,l){return new wa(t,e,n,r,i,s,a,l)}function Zc(t){return new wa(t)}function Hb(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function px(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function w1(t){return t.collectionGroup!==null}function wo(t){const e=Q(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new We(at.comparator);return i.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(s=s.add(l.field))})}),s})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new $o(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new $o(at.keyField(),r))}return e.Ie}function An(t){const e=Q(t);return e.Ee||(e.Ee=mx(e,wo(t))),e.Ee}function mx(t,e){if(t.limitType==="F")return qb(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new $o(i.field,s)});const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;return qb(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yf(t,e){const n=t.filters.concat([e]);return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gx(t,e){const n=t.explicitOrderBy.concat([e]);return new wa(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Jf(t,e,n){return new wa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eh(t,e){return Mm(An(t),An(e))&&t.limitType===e.limitType}function k1(t){return`${Lm(An(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>v1(r)).join(", ")}]`),Jc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>sa(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>sa(r)).join(",")),`Target(${n})`}(An(t))}; limitType=${t.limitType})`}function th(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of wo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,a){const l=Bb(i,s,a);return i.inclusive?l<=0:l<0}(n.startAt,wo(n),r)||n.endAt&&!function(i,s,a){const l=Bb(i,s,a);return i.inclusive?l>=0:l>0}(n.endAt,wo(n),r))}(t,e)}function yx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function E1(t){return(e,n)=>{let r=!1;for(const i of wo(t)){const s=vx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vx(t,e,n){const r=t.field.isKeyField()?$.comparator(e.key,n.key):function(i,s,a){const l=s.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ia(l,u):H(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:t.dir})}}/**
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
*/class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return s1(this.inner)}size(){return this.innerSize}}/**
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
*/const bx=new Pe($.comparator);function cr(){return bx}const S1=new Pe($.comparator);function eo(...t){let e=S1;for(const n of t)e=e.insert(n.key,n);return e}function T1(t){let e=S1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return ko()}function _1(){return ko()}function ko(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const wx=new Pe($.comparator),kx=new We($.comparator);function ie(...t){let e=kx;for(const n of t)e=e.add(n);return e}const Ex=new We(re);function Sx(){return Ex}/**
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
*/function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function C1(t){return{integerValue:""+t}}function I1(t,e){return WR(e)?C1(e):Fm(t,e)}/**
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
*/class nh{constructor(){this._=void 0}}function Tx(t,e,n){return t instanceof qo?function(r,i){const s={fields:{[l1]:{stringValue:o1},[c1]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&xm(i)&&(i=Xc(i)),i&&(s.fields[u1]=i),{mapValue:s}}(n,e):t instanceof Ho?N1(t,e):t instanceof Go?P1(t,e):function(r,i){const s=A1(r,i),a=Gb(s)+Gb(r.Ae);return Kf(s)&&Kf(r.Ae)?C1(a):Fm(r.serializer,a)}(t,e)}function _x(t,e,n){return t instanceof Ho?N1(t,e):t instanceof Go?P1(t,e):n}function A1(t,e){return t instanceof Ko?function(n){return Kf(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class qo extends nh{}class Ho extends nh{constructor(e){super(),this.elements=e}}function N1(t,e){const n=D1(e);for(const r of t.elements)n.some(i=>Rn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends nh{constructor(e){super(),this.elements=e}}function P1(t,e){let n=D1(e);for(const r of t.elements)n=n.filter(i=>!Rn(i,r));return{arrayValue:{values:n}}}class Ko extends nh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gb(t){return Le(t.integerValue||t.doubleValue)}function D1(t){return Om(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
*/class R1{constructor(e,n){this.field=e,this.transform=n}}function Cx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ho&&r instanceof Ho||n instanceof Go&&r instanceof Go?ra(n.elements,r.elements,Rn):n instanceof Ko&&r instanceof Ko?Rn(n.Ae,r.Ae):n instanceof qo&&r instanceof qo}(t.transform,e.transform)}class Ix{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rh{}function x1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vm(t.key,sn.none()):new fl(t.key,t.data,sn.none());{const n=t.data,r=It.empty();let i=new We(at.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new fi(t.key,r,new Ut(i.toArray()),sn.none())}}function Ax(t,e,n){t instanceof fl?function(r,i,s){const a=r.value.clone(),l=Wb(r.fieldTransforms,i,s.transformResults);a.setAll(l),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(r,i,s){if(!_u(r.precondition,i))return void i.convertToUnknownDocument(s.version);const a=Wb(r.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(O1(r)),l.setAll(a),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof fl?function(i,s,a,l){if(!_u(i.precondition,s))return a;const u=i.value.clone(),h=Qb(i.fieldTransforms,l,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(i,s,a,l){if(!_u(i.precondition,s))return a;const u=Qb(i.fieldTransforms,l,s),h=s.data;return h.setAll(O1(i)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,s,a){return _u(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function Nx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=A1(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function Kb(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ra(n,r,(i,s)=>Cx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends rh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends rh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function O1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Wb(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,_x(a,l,n[i]))}return r}function Qb(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,Tx(s,a,e))}return r}class Vm extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Px extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class Dx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ax(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=_1();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=x1(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>Kb(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>Kb(n,r))}}class Um{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return wx}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Um(e,n,r,i)}}/**
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
*/class Rx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class xx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
*/var Ue,le;function Ox(t){switch(t){case R.OK:return H(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return H(15467,{code:t})}}function L1(t){if(t===void 0)return ur("GRPC error has no .code"),R.UNKNOWN;switch(t){case Ue.OK:return R.OK;case Ue.CANCELLED:return R.CANCELLED;case Ue.UNKNOWN:return R.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return R.INTERNAL;case Ue.UNAVAILABLE:return R.UNAVAILABLE;case Ue.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Ue.NOT_FOUND:return R.NOT_FOUND;case Ue.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Ue.ABORTED:return R.ABORTED;case Ue.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Ue.DATA_LOSS:return R.DATA_LOSS;default:return H(39323,{code:t})}}(le=Ue||(Ue={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function Lx(){return new TextEncoder}/**
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
*/const Mx=new Wr([4294967295,4294967295],0);function Yb(t){const e=Lx().encode(t),n=new WS;return n.update(e),new Uint8Array(n.digest())}function Jb(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Wr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(Mx)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yb(e),[r,i]=Jb(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new zm(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const n=Yb(e),[r,i]=Jb(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class pl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pl(W.min(),i,new Pe(re),cr(),ie())}}class ml{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,ie(),ie(),ie())}}/**
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
*/class Cu{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class M1{constructor(e,n){this.targetId=e,this.Ce=n}}class F1{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xb{constructor(){this.ve=0,this.Fe=Zb(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H(38017,{changeType:s})}}),new ml(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Zb()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Fx{constructor(e){this.Ge=e,this.ze=new Map,this.je=cr(),this.Je=Xl(),this.He=Xl(),this.Ze=new Pe(re)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Qf(s))if(r===0){const a=new $(s.path);this.et(n,a,pt.newNoDocument(a,W.min()))}else de(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=ri(r).toUint8Array()}catch(u){if(u instanceof a1)return Wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new zm(a,i,s)}catch(u){return Wi(u instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,a)=>{const l=this.ot(a);if(l){if(s.current&&Qf(l.target)){const u=new $(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,pt.newNoDocument(u,e))}s.Be&&(n.set(a,s.ke()),s.Ke())}});let r=ie();this.He.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new pl(e,n,this.Ze,this.je,r);return this.je=cr(),this.Je=Xl(),this.He=Xl(),this.Ze=new Pe(re),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Xb,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new We(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xb),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xl(){return new Pe($.comparator)}function Zb(){return new Pe($.comparator)}const Vx={asc:"ASCENDING",desc:"DESCENDING"},Ux={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zx={and:"AND",or:"OR"};class jx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xf(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function V1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Bx(t,e){return yc(t,e.toTimestamp())}function Nn(t){return de(!!t,49232),W.fromTimestamp(function(e){const n=ni(e);return new _e(n.seconds,n.nanos)}(t))}function jm(t,e){return Zf(t,e).canonicalString()}function Zf(t,e){const n=function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function U1(t){const e=be.fromString(t);return de(q1(e),10190,{key:e.toString()}),e}function ep(t,e){return jm(t.databaseId,e.path)}function Pd(t,e){const n=U1(e);if(n.get(1)!==t.databaseId.projectId)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(j1(n))}function z1(t,e){return jm(t.databaseId,e)}function $x(t){const e=U1(t);return e.length===4?be.emptyPath():j1(e)}function tp(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j1(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ew(t,e,n){return{name:ep(t,e),fields:n.value.mapValue.fields}}function qx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(de(h===void 0||typeof h=="string",58123),ut.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const h=u.code===void 0?R.UNKNOWN:L1(u.code);return new U(h,u.message||"")}(a);n=new F1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pd(t,r.document.name),s=Nn(r.document.updateTime),a=r.document.createTime?Nn(r.document.createTime):W.min(),l=new It({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Cu(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pd(t,r.document),s=r.readTime?Nn(r.readTime):W.min(),a=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Cu([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pd(t,r.document),s=r.removedTargetIds||[];n=new Cu([],s,i,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new xx(i,s),l=r.targetId;n=new M1(l,a)}}return n}function Hx(t,e){let n;if(e instanceof fl)n={update:ew(t,e.key,e.value)};else if(e instanceof Vm)n={delete:ep(t,e.key)};else if(e instanceof fi)n={update:ew(t,e.key,e.data),updateMask:eO(e.fieldMask)};else{if(!(e instanceof Px))return H(16599,{dt:e.type});n={verify:ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof qo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ho)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ko)return{fieldPath:s.field.canonicalString(),increment:a.Ae};throw H(20930,{transform:s.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Bx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(t,e.precondition)),n}function Gx(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(r,i){let s=r.updateTime?Nn(r.updateTime):Nn(i);return s.isEqual(W.min())&&(s=Nn(i)),new Ix(s,r.transformResults||[])}(n,e))):[]}function Kx(t,e){return{documents:[z1(t,e.path)]}}function Wx(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=z1(t,i);const s=function(u){if(u.length!==0)return $1(yn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:ys(f.field),direction:Jx(f.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Xf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function Qx(t){let e=$x(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(f){const p=B1(f);return p instanceof yn&&g1(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(f){return f.map(p=>function(m){return new $o(vs(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,Jc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,m=f.values||[];return new gc(m,p)}(n.startAt));let h=null;return n.endAt&&(h=function(f){const p=!f.before,m=f.values||[];return new gc(m,p)}(n.endAt)),fx(e,i,a,s,l,"F",u,h)}function Yx(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function B1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vs(e.unaryFilter.field);return $e.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=vs(e.unaryFilter.field);return $e.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(e.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(e.unaryFilter.field);return $e.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(t):t.fieldFilter!==void 0?function(e){return $e.create(vs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>B1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(e.compositeFilter.op))}(t):H(30097,{filter:t})}function Jx(t){return Vx[t]}function Xx(t){return Ux[t]}function Zx(t){return zx[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return at.fromServerFormat(t.fieldPath)}function $1(t){return t instanceof $e?function(e){if(e.op==="=="){if(jb(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NAN"}};if(zb(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jb(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NAN"}};if(zb(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(e.field),op:Xx(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(r=>$1(r));return n.length===1?n[0]:{compositeFilter:{op:Zx(e.op),filters:n}}}(t):H(54877,{filter:t})}function eO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function q1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function H1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
*/class Qn{constructor(e,n,r,i,s=W.min(),a=W.min(),l=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
*/class tO{constructor(e){this.yt=e}}function nO(t){const e=Qx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jf(e,e.limit,"L"):e}/**
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
*/class rO{constructor(){this.bn=new iO}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(ti.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class iO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(be.comparator)).toArray()}}/**
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
*/const tw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G1=41943040;class Ct{static withCacheSize(e){return new Ct(e,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
*/Ct.DEFAULT_COLLECTION_PERCENTILE=10,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ct.DEFAULT=new Ct(G1,Ct.DEFAULT_COLLECTION_PERCENTILE,Ct.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ct.DISABLED=new Ct(-1,0,0);/**
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
*/class si{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new si(0)}static ar(){return new si(-1)}}/**
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
*/const nw="LruGarbageCollector",sO=1048576;function rw([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class aO{constructor(e){this.Pr=e,this.buffer=new We(rw),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){z(nw,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ba(n)?z(nw,"Ignoring IndexedDB error during garbage collection: ",n):await va(n)}await this.Ar(3e5)})}}class lO{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Yc.ce);const r=new aO(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(tw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tw):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ms()<=se.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function uO(t,e){return new lO(t,e)}/**
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
*/class cO{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class hO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
*/class dO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,Ut.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=eo();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=cr();const a=ko(),l=function(){return ko()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof fi)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Eo(f.mutation,h,f.mutation.getFieldMask(),_e.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>l.set(h,new hO(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new Pe((a,l)=>a-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ut.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=_1();f.forEach(m=>{if(!s.has(m)){const w=x1(n.get(m),r.get(m));w!==null&&p.set(m,w),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return px(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):w1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Pi());let l=Uo,u=s;return a.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:T1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=eo();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(f,p){return new wa(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,pt.newInvalidDocument(f)))});let l=eo();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Eo(f.mutation,h,Ut.empty(),_e.now()),th(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
*/class fO{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Nn(r.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(r){return{name:r.name,query:nO(r.bundledQuery),readTime:Nn(r.readTime)}}(n)),O.resolve()}}/**
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
*/class pO{constructor(){this.overlays=new Pe($.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,a=new $(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Rx(n,r));let s=this.Lr.get(n);s===void 0&&(s=ie(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
*/class mO{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
*/class Bm{constructor(){this.kr=new We(Xe.Kr),this.qr=new We(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new $(new be([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.qr.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new $(new be([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ie();return this.qr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return $.comparator(e.key,n.key)||re(e.Jr,n.Jr)}static Ur(e,n){return re(e.Jr,n.Jr)||$.comparator(e.key,n.key)}}/**
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
*/class gO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new We(Xe.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dx(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Hr=this.Hr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Rm:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],a=>{const l=this.Zr(a.Jr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(re);return n.forEach(i=>{const s=new Xe(i,0),a=new Xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,a],l=>{r=r.add(l.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;$.isDocumentKey(s)||(s=s.child(""));const a=new Xe(new $(s),0);let l=new We(re);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},a),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Xe(n,0),i=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
*/class yO{constructor(e){this.ti=e,this.docs=function(){return new Pe($.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const a=n.path,l=new $(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||qR($R(f),r)<=0||(i.has(f.key)||th(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vO(this)}getSize(e){return O.resolve(this.size)}}class vO extends cO{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
*/class bO{constructor(e){this.persistence=e,this.ri=new rs(n=>Lm(n),Mm),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new Bm,this.targetCount=0,this.oi=si._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new si(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
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
*/class K1{constructor(e,n){this._i={},this.overlays={},this.ai=new Yc(0),this.ui=!1,this.ui=!0,this.ci=new mO,this.referenceDelegate=e(this),this.li=new bO(this),this.indexManager=new rO,this.remoteDocumentCache=function(r){return new yO(r)}(r=>this.referenceDelegate.hi(r)),this.serializer=new tO(n),this.Pi=new fO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new gO(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new wO(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class wO extends GR{constructor(e){super(),this.currentSequenceNumber=e}}class $m{constructor(e){this.persistence=e,this.Ri=new Bm,this.Ai=null}static Vi(e){return new $m(e)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=$.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.fi=new rs(r=>QR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=uO(this,n)}static Vi(e,n){return new vc(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,W.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Su(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qm(e,n.fromCache,r,i)}}/**
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
*/class kO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class EO{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return S2()?8:KR(mt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new kO;return this.ys(e,n,a).next(l=>{if(s.result=l,this.As)return this.ws(e,n,a,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ms()<=se.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(ms()<=se.DEBUG&&z("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ms()<=se.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(n))):O.resolve())}gs(e,n){if(Hb(n))return O.resolve(null);let r=An(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jf(n,null,"F"),r=An(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ie(...s);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(e,Jf(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Hb(n)||i.isEqual(W.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const a=this.Ss(n,s);return this.bs(n,a,r,i)?O.resolve(null):(ms()<=se.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.Ds(e,a,n,BR(i,Uo)).next(l=>l))})}Ss(e,n){let r=new We(E1(e));return n.forEach((i,s)=>{th(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ms()<=se.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",gs(n)),this.fs.getDocumentsMatchingQuery(e,n,ti.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
*/const Hm="LocalStore",SO=3e8;class TO{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(re),this.Fs=new rs(s=>Lm(s),Mm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dO(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function _O(t,e,n,r){return new TO(t,e,n,r)}async function W1(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ie();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function CO(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let m=O.resolve();return p.forEach(w=>{m=m.next(()=>h.getEntry(l,w)).next(N=>{const L=u.docVersions.get(w);de(L!==null,48541),N.version.compareTo(L)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q1(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function IO(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let w=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(ut.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),i=i.insert(p,w),function(N,L,M){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=SO?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,w,f)&&l.push(n.li.updateTargetData(s,w))});let u=cr(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(AO(s,a,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(W.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function AO(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=cr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):z(Hm,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:i}})}function NO(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Rm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PO(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.li.allocateTargetId(r).next(a=>(i=new Qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function np(t,e,n){const r=Q(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!ba(a))throw a;z(Hm,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function iw(t,e,n){const r=Q(t);let i=W.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,h){const f=Q(l),p=f.Fs.get(h);return p!==void 0?O.resolve(f.vs.get(p)):f.li.getTargetData(u,h)}(r,a,An(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,n?i:W.min(),n?s:ie())).next(l=>(DO(r,yx(e),l),{documents:l,ks:s})))}function DO(t,e,n){let r=t.Ms.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class sw{constructor(){this.activeTargetIds=Sx()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RO{constructor(){this.vo=new sw,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new sw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class xO{Mo(e){}shutdown(){}}/**
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
*/const aw="ConnectivityMonitor";class ow{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){z(aw,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){z(aw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/let Zl=null;function rp(){return Zl===null?Zl=function(){return 268435456+Math.round(2147483648*Math.random())}():Zl++,"0x"+Zl.toString(16)}/**
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
*/const Dd="RestConnection",OO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LO{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===pc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=rp(),l=this.Qo(e,n.toUriEncodedString());z(Dd,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=ol(h);return this.zo(e,l,u,r,f).then(p=>(z(Dd,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Wi(Dd,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ya}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=OO[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
*/class MO{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
*/const dt="WebChannelConnection",Ha=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class $s extends LO{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!$s.c_){const e=XS();Ha(e,JS.STAT_EVENT,n=>{n.stat===qf.PROXY?z(dt,"STAT_EVENT: detected buffering proxy"):n.stat===qf.NOPROXY&&z(dt,"STAT_EVENT: detected no buffering proxy")}),$s.c_=!0}}zo(e,n,r,i,s){const a=rp();return new Promise((l,u)=>{const h=new QS;h.setWithCredentials(!0),h.listenOnce(YS.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Eu.NO_ERROR:const p=h.getResponseJson();z(dt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Eu.TIMEOUT:z(dt,`RPC '${e}' ${a} timed out`),u(new U(R.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const m=h.getStatus();if(z(dt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const L=function(M){const T=M.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(T)>=0?T:R.UNKNOWN}(N.status);u(new U(L,N.message))}else u(new U(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new U(R.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(dt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);z(dt,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=rp(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");z(dt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=a.createWebChannel(h,l);this.I_(f);let p=!1,m=!1;const w=new MO({Jo:N=>{m?z(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(p||(z(dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),z(dt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},Ho:()=>f.close()});return Ha(f,Za.EventType.OPEN,()=>{m||(z(dt,`RPC '${e}' stream ${i} transport opened.`),w.i_())}),Ha(f,Za.EventType.CLOSE,()=>{m||(m=!0,z(dt,`RPC '${e}' stream ${i} transport closed`),w.o_(),this.E_(f))}),Ha(f,Za.EventType.ERROR,N=>{m||(m=!0,Wi(dt,`RPC '${e}' stream ${i} transport errored. Name:`,N.name,"Message:",N.message),w.o_(new U(R.UNAVAILABLE,"The operation could not be completed")))}),Ha(f,Za.EventType.MESSAGE,N=>{var L;if(!m){const M=N.data[0];de(!!M,16349);const T=M,k=(T==null?void 0:T.error)||((L=T[0])==null?void 0:L.error);if(k){z(dt,`RPC '${e}' stream ${i} received error:`,k);const C=k.status;let D=function(B){const b=Ue[B];if(b!==void 0)return L1(b)}(C),V=k.message;C==="NOT_FOUND"&&V.includes("database")&&V.includes("does not exist")&&V.includes(this.databaseId.database)&&Wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=R.INTERNAL,V="Unknown error status: "+C+" with message "+k.message),m=!0,w.o_(new U(D,V)),f.close()}else z(dt,`RPC '${e}' stream ${i} received:`,M),w.__(M)}}),$s.u_(),setTimeout(()=>{w.s_()},0),w}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ZS()}}/**
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
*/function FO(t){return new $s(t)}function Rd(){return typeof document<"u"?document:null}/**
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
*/function ih(t){return new jx(t,!0)}/**
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
*/$s.c_=!1;class Y1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
*/const lw="PersistentStream";class J1{constructor(e,n,r,i,s,a,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Y1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new U(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return z(lw,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(z(lw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VO extends J1{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=qx(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?Nn(s.readTime):W.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=tp(this.serializer),n.addTarget=function(i,s){let a;const l=s.target;if(a=Qf(l)?{documents:Kx(i,l)}:{query:Wx(i,l).ft},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=V1(i,s.resumeToken);const u=Xf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(W.min())>0){a.readTime=yc(i,s.snapshotVersion.toTimestamp());const u=Xf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Yx(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=tp(this.serializer),n.removeTarget=e,this.K_(n)}}class UO extends J1{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Gx(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=tp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Hx(this.serializer,r))};this.K_(n)}}/**
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
*/class zO{}class jO extends zO{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Zf(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(R.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Zf(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new U(R.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function BO(t,e,n,r){return new jO(t,e,n,r)}class $O{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):z("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const xn="RemoteStore";class qO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new si(1e3),this.Va=new si(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{is(this)&&(z(xn,"Restarting streams for network reachability change."),await async function(l){const u=Q(l);u.da.add(4),await gl(u),u.ga.set("Unknown"),u.da.delete(4),await sh(u)}(this))})}),this.ga=new $O(r,i)}}async function sh(t){if(is(t))for(const e of t.ma)await e(!0)}async function gl(t){for(const e of t.ma)await e(!1)}function ip(t,e){return t.Ea.get(e)||void 0}function X1(t,e){const n=Q(t),r=ip(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(a,l){const u=ip(a,l);u!==void 0&&a.Ra.delete(u);const h=function(f,p){return p%2!=0?f.Va.next():f.Aa.next()}(a,l);return a.Ea.set(l,h),a.Ra.set(h,l),h}(n,e.targetId);z(xn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Qn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Qm(n)?Wm(n):ka(n).O_()&&Km(n,s)}function Gm(t,e){const n=Q(t),r=ka(n),i=ip(n,e);z(xn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&Z1(n,i),n.Ia.size===0&&(r.O_()?r.L_():is(n)&&n.ga.set("Unknown"))}function Km(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void z(xn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ka(t).Z_(e)}function Z1(t,e){t.pa.$e(e),ka(t).X_(e)}function Wm(t){t.pa=new Fx({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ie()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ka(t).start(),t.ga.ua()}function Qm(t){return is(t)&&!ka(t).x_()&&t.Ia.size>0}function is(t){return Q(t).da.size===0}function eT(t){t.pa=void 0}async function HO(t){t.ga.set("Online")}async function GO(t){t.Ia.forEach((e,n)=>{Km(t,e)})}async function KO(t,e){eT(t),Qm(t)?(t.ga.ha(e),Wm(t)):t.ga.set("Unknown")}async function WO(t,e,n){if(t.ga.set("Online"),e instanceof F1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const a of i.targetIds){if(r.Ia.has(a)){const l=r.Ra.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,s),r.Ea.delete(l),r.Ra.delete(a)),r.Ia.delete(a)}r.pa.removeTarget(a)}}(t,e)}catch(r){z(xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bc(t,r)}else if(e instanceof Cu?t.pa.Xe(e):e instanceof M1?t.pa.st(e):t.pa.tt(e),!n.isEqual(W.min()))try{const r=await Q1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.pa.Tt(s);a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Z1(i,u);const p=new Qn(f.target,u,h,f.sequenceNumber);Km(i,p)});const l=function(u,h){const f=new Map;h.targetChanges.forEach((m,w)=>{const N=u.Ra.get(w);N!==void 0&&f.set(N,m)});let p=new Pe(re);return h.targetMismatches.forEach((m,w)=>{const N=u.Ra.get(m);N!==void 0&&(p=p.insert(N,w))}),new pl(h.snapshotVersion,f,p,h.documentUpdates,h.resolvedLimboDocuments)}(i,a);return i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z(xn,"Failed to raise snapshot:",r),await bc(t,r)}}async function bc(t,e,n){if(!ba(e))throw e;t.da.add(1),await gl(t),t.ga.set("Offline"),n||(n=()=>Q1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(xn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await sh(t)})}function tT(t,e){return e().catch(n=>bc(t,n,e))}async function ah(t){const e=Q(t),n=ai(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rm;for(;QO(e);)try{const i=await NO(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,YO(e,i)}catch(i){await bc(e,i)}nT(e)&&rT(e)}function QO(t){return is(t)&&t.Ta.length<10}function YO(t,e){t.Ta.push(e);const n=ai(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function nT(t){return is(t)&&!ai(t).x_()&&t.Ta.length>0}function rT(t){ai(t).start()}async function JO(t){ai(t).ra()}async function XO(t){const e=ai(t);for(const n of t.Ta)e.ea(n.mutations)}async function ZO(t,e,n){const r=t.Ta.shift(),i=Um.from(r,e,n);await tT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ah(t)}async function e4(t,e){e&&ai(t).Y_&&await async function(n,r){if(function(i){return Ox(i)&&i!==R.ABORTED}(r.code)){const i=n.Ta.shift();ai(n).B_(),await tT(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ah(n)}}(t,e),nT(t)&&rT(t)}async function uw(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),z(xn,"RemoteStore received new credentials");const r=is(n);n.da.add(3),await gl(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await sh(n)}async function t4(t,e){const n=Q(t);e?(n.da.delete(2),await sh(n)):e||(n.da.add(2),await gl(n),n.ga.set("Unknown"))}function ka(t){return t.ya||(t.ya=function(e,n,r){const i=Q(e);return i.sa(),new VO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:HO.bind(null,t),Yo:GO.bind(null,t),t_:KO.bind(null,t),H_:WO.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Qm(t)?Wm(t):t.ga.set("Unknown")):(await t.ya.stop(),eT(t))})),t.ya}function ai(t){return t.wa||(t.wa=function(e,n,r){const i=Q(e);return i.sa(),new UO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:JO.bind(null,t),t_:e4.bind(null,t),ta:XO.bind(null,t),na:ZO.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await ah(t)):(await t.wa.stop(),t.Ta.length>0&&(z(xn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
*/class Ym{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Ym(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jm(t,e){if(ur("AsyncQueue",`${e}: ${t}`),ba(t))return new U(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
*/class qs{static emptySet(e){return new qs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||$.comparator(n.key,r.key):(n,r)=>$.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
*/class cw{constructor(){this.Sa=new Pe($.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):H(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new aa(e,n,qs.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
*/class n4{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class r4{constructor(){this.queries=hw(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,n){const r=Q(e),i=r.queries;r.queries=hw(),i.forEach((s,a)=>{for(const l of a.va)l.onError(n)})})(this,new U(R.ABORTED,"Firestore shutting down"))}}function hw(){return new rs(t=>k1(t),eh)}async function Xm(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new n4,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=Jm(a,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&eg(n)}async function Zm(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.va.indexOf(e);a>=0&&(s.va.splice(a,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i4(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.va)l.Na(i)&&(r=!0);a.Ca=i}}r&&eg(n)}function s4(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function eg(t){t.xa.forEach(e=>{e.next()})}var sp,dw;(dw=sp||(sp={})).Ba="default",dw.Cache="cache";class tg{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sp.Cache}}/**
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
*/class iT{constructor(e){this.key=e}}class sT{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ie(),this.mutatedKeys=ie(),this.iu=E1(e),this.su=new qs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new cw,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),w=th(this.query,p)?p:null,N=!!m&&this.mutatedKeys.has(m.key),L=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let M=!1;m&&w?m.data.isEqual(w.data)?N!==L&&(r.track({type:3,doc:w}),M=!0):this.uu(m,w)||(r.track({type:2,doc:w}),M=!0,(u&&this.iu(w,u)>0||h&&this.iu(w,h)<0)&&(l=!0)):!m&&w?(r.track({type:0,doc:w}),M=!0):m&&!w&&(r.track({type:1,doc:m}),M=!0,(u||h)&&(l=!0)),M&&(w?(a=a.add(w),s=L?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(m,w){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:L})}};return N(m)-N(w)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,h=u!==this.nu;return this.nu=u,a.length!==0||h?{snapshot:new aa(this.query,e.su,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new cw,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ie(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new sT(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new iT(r))}),n}Tu(e){this.tu=e.ks,this.ru=ie();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return aa.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ng="SyncEngine";class o4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class l4{constructor(e){this.key=e,this.Eu=!1}}class u4{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new rs(l=>k1(l),eh),this.Vu=new Map,this.du=new Set,this.mu=new Pe($.comparator),this.fu=new Map,this.gu=new Bm,this.pu={},this.yu=new Map,this.wu=si.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function c4(t,e,n=!0){const r=hT(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await aT(r,e,n,!0),i}async function h4(t,e){const n=hT(t);await aT(n,e,!0,!1)}async function aT(t,e,n,r){const i=await PO(t.localStore,An(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await d4(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&X1(t.remoteStore,i),l}async function d4(t,e,n,r,i){t.bu=(p,m,w)=>async function(N,L,M,T){let k=L.view._u(M);k.bs&&(k=await iw(N.localStore,L.query,!1).then(({documents:B})=>L.view._u(B,k)));const C=T&&T.targetChanges.get(L.targetId),D=T&&T.targetMismatches.get(L.targetId)!=null,V=L.view.applyChanges(k,N.isPrimaryClient,C,D);return pw(N,L.targetId,V.hu),V.snapshot}(t,p,m,w);const s=await iw(t.localStore,e,!0),a=new a4(e,s.ks),l=a._u(s.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);pw(t,n,h.hu);const f=new o4(e,n,a);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function f4(t,e,n){const r=Q(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(a=>!eh(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await np(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Gm(r.remoteStore,i.targetId),ap(r,i.targetId)}).catch(va)):(ap(r,i.targetId),await np(r.localStore,i.targetId,!0))}async function p4(t,e){const n=Q(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gm(n.remoteStore,r.targetId))}async function m4(t,e,n){const r=E4(t);try{const i=await function(s,a){const l=Q(s),u=_e.now(),h=a.reduce((m,w)=>m.add(w.key),ie());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=cr(),N=ie();return l.xs.getEntries(m,h).next(L=>{w=L,w.forEach((M,T)=>{T.isValidDocument()||(N=N.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,w)).next(L=>{f=L;const M=[];for(const T of a){const k=Nx(T,f.get(T.key).overlayedDocument);k!=null&&M.push(new fi(T.key,k,f1(k.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,M,a)}).next(L=>{p=L;const M=L.applyToLocalDocumentSet(f,N);return l.documentOverlayCache.saveOverlays(m,L.batchId,M)})}).then(()=>({batchId:p.batchId,changes:T1(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.pu[s.currentUser.toKey()];u||(u=new Pe(re)),u=u.insert(a,l),s.pu[s.currentUser.toKey()]=u}(r,i.batchId,n),await yl(r,i.changes),await ah(r.remoteStore)}catch(i){const s=Jm(i,"Failed to persist write");n.reject(s)}}async function oT(t,e){const n=Q(t);try{const r=await IO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.fu.get(s);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Eu=!0:i.modifiedDocuments.size>0?de(a.Eu,14607):i.removedDocuments.size>0&&(de(a.Eu,42227),a.Eu=!1))}),await yl(n,r,e)}catch(r){await va(r)}}function fw(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,a)=>{const l=a.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(s,a){const l=Q(s);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.va)p.Oa(a)&&(u=!0)}),u&&eg(l)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function g4(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let a=new Pe($.comparator);a=a.insert(s,pt.newNoDocument(s,W.min()));const l=ie().add(s),u=new pl(W.min(),new Map,new Pe(re),a,l);await oT(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),rg(r)}else await np(r.localStore,e,!1).then(()=>ap(r,e,n)).catch(va)}async function y4(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await CO(n.localStore,e);uT(n,r,null),lT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,i)}catch(i){await va(i)}}async function v4(t,e,n){const r=Q(t);try{const i=await function(s,a){const l=Q(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(de(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);uT(r,e,n),lT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,i)}catch(i){await va(i)}}function lT(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function uT(t,e,n){const r=Q(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||cT(t,r)})}function cT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Gm(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),rg(t))}function pw(t,e,n){for(const r of n)r instanceof iT?(t.gu.addReference(r.key,e),b4(t,r)):r instanceof sT?(z(ng,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||cT(t,r.key)):H(19791,{Cu:r})}function b4(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(z(ng,"New document in limbo: "+n),t.du.add(r),rg(t))}function rg(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new $(be.fromString(e)),r=t.wu.next();t.fu.set(r,new l4(n)),t.mu=t.mu.insert(n,r),X1(t.remoteStore,new Qn(An(Zc(n.path)),r,"TargetPurposeLimboResolution",Yc.ce))}}async function yl(t,e,n){const r=Q(t),i=[],s=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=qm.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(a),r.Ru.H_(i),await async function(l,u){const h=Q(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(u,p=>O.forEach(p.Ts,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>O.forEach(p.Is,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!ba(f))throw f;z(Hm,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.vs.get(p),w=m.snapshotVersion,N=m.withLastLimboFreeSnapshotVersion(w);h.vs=h.vs.insert(p,N)}}}(r.localStore,s))}async function w4(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){z(ng,"User change. New user:",e.toKey());const r=await W1(n.localStore,e);n.currentUser=e,function(i,s){i.yu.forEach(a=>{a.forEach(l=>{l.reject(new U(R.CANCELLED,s))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.Ns)}}function k4(t,e){const n=Q(t),r=n.fu.get(e);if(r&&r.Eu)return ie().add(r.key);{let i=ie();const s=n.Vu.get(e);if(!s)return i;for(const a of s){const l=n.Au.get(a);i=i.unionWith(l.view.ou)}return i}}function hT(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=k4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g4.bind(null,e),e.Ru.H_=i4.bind(null,e.eventManager),e.Ru.Du=s4.bind(null,e.eventManager),e}function E4(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v4.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return _O(this.persistence,new EO,e.initialUser,this.serializer)}xu(e){return new K1($m.Vi,this.serializer)}Mu(e){return new RO}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class S4 extends wc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){de(this.persistence.referenceDelegate instanceof vc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new oO(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Ct.withCacheSize(this.cacheSizeBytes):Ct.DEFAULT;return new K1(r=>vc.Vi(r,n),this.serializer)}}class op{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=w4.bind(null,this.syncEngine),await t4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r4}()}createDatastore(e){const n=ih(e.databaseInfo.databaseId),r=FO(e.databaseInfo);return BO(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(n,r,i,s,a){return new qO(n,r,i,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fw(this.syncEngine,n,0),function(){return ow.v()?new ow:new xO}())}createSyncEngine(e,n){return function(r,i,s,a,l,u,h){const f=new u4(r,i,s,a,l,u);return h&&(f.Su=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=Q(r);z(xn,"RemoteStore shutting down."),i.da.add(5),await gl(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}op.provider={build:()=>new op};/**
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
*/class ig{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):ur("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
*/const oi="FirestoreClient";class T4{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=Dm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{z(oi,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z(oi,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function xd(t,e){t.asyncQueue.verifyOperationInProgress(),z(oi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await W1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await _4(t);z(oi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>uw(e.remoteStore,i)),t._onlineComponents=e}async function _4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(oi,"Using user provided OfflineComponentProvider");try{await xd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===R.FAILED_PRECONDITION||r.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await xd(t,new wc)}}else z(oi,"Using default OfflineComponentProvider"),await xd(t,new S4(void 0));return t._offlineComponents}async function dT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(oi,"Using user provided OnlineComponentProvider"),await mw(t,t._uninitializedComponentsProvider._online)):(z(oi,"Using default OnlineComponentProvider"),await mw(t,new op))),t._onlineComponents}function C4(t){return dT(t).then(e=>e.syncEngine)}async function kc(t){const e=await dT(t),n=e.eventManager;return n.onListen=c4.bind(null,e.syncEngine),n.onUnlisten=f4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=p4.bind(null,e.syncEngine),n}function I4(t,e,n,r){const i=new ig(r),s=new tg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Xm(await kc(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>Zm(await kc(t),s))}}function A4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const h=new ig({next:p=>{h.Ku(),s.enqueueAndForget(()=>Zm(i,f));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new U(R.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new U(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new tg(Zc(a.path),h,{includeMetadataChanges:!0,Wa:!0});return Xm(i,f)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}function N4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const h=new ig({next:p=>{h.Ku(),s.enqueueAndForget(()=>Zm(i,f)),p.fromCache&&l.source==="server"?u.reject(new U(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new tg(a,h,{includeMetadataChanges:!0,Wa:!0});return Xm(i,f)}(await kc(t),t.asyncQueue,e,n,r)),r.promise}function P4(t,e){const n=new er;return t.asyncQueue.enqueueAndForget(async()=>m4(await C4(t),e,n)),n.promise}/**
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
*/function fT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
*/const D4="ComponentProvider",gw=new Map;function R4(t,e,n,r,i){return new XR(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,fT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
*/const pT="firestore.googleapis.com",yw=!0;class vw{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new U(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pT,this.ssl=yw}else this.host=e.host,this.ssl=e.ssl??yw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sO)throw new U(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fT(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new U(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new DR;switch(n.type){case"firstParty":return new LR(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gw.get(e);n&&(z(D4,"Removing Datastore"),gw.delete(e),n.terminate())}(this),Promise.resolve()}}function x4(t,e,n,r={}){var i;t=Nt(t,oh);const s=ol(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&zE(`https://${u}`),a.host!==pT&&a.host!==u&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:s,emulatorOptions:r};if(!ei(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ft.MOCK_USER;else{f=y2(r.mockUserToken,(i=t._app)==null?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new U(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ft(m)}t._authCredentials=new RR(new t1(f,p))}}/**
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
*/class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class Oe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Oe(this.firestore,e,this._key)}toJSON(){return{type:Oe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(dl(n,Oe._jsonSchema))return new Oe(e,r||null,new $(be.fromString(n.referencePath)))}}Oe._jsonSchemaVersion="firestore/documentReference/1.0",Oe._jsonSchema={type:He("string",Oe._jsonSchemaVersion),referencePath:He("string")};class Qr extends pi{constructor(e,n,r){super(e,n,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Oe(this.firestore,null,new $(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Ei(t,e,...n){if(t=Ne(t),n1("collection","path",e),t instanceof oh){const r=be.fromString(e,...n);return Db(r),new Qr(t,null,r)}{if(!(t instanceof Oe||t instanceof Qr))throw new U(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Db(r),new Qr(t.firestore,null,r)}}function Wt(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Dm.newId()),n1("doc","path",e),t instanceof oh){const r=be.fromString(e,...n);return Pb(r),new Oe(t,null,new $(r))}{if(!(t instanceof Oe||t instanceof Qr))throw new U(R.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Pb(r),new Oe(t.firestore,t instanceof Qr?t.converter:null,new $(r))}}/**
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
*/const bw="AsyncQueue";class ww{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Y1(this,"async_queue_retry"),this.lc=()=>{const r=Rd();r&&z(bw,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Rd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Rd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new er;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ba(e))throw e;z(bw,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,ur("INTERNAL UNHANDLED ERROR: ",kw(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Ym.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&H(47125,{Rc:kw(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function kw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class hr extends oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ww,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ww(e),this._firestoreClient=void 0,await e}}}function O4(t,e){const n=typeof t=="object"?t:fm(),r=typeof t=="string"?t:pc,i=ns(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=m2("firestore");s&&x4(i,...s)}return i}function lh(t){if(t._terminated)throw new U(R.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||L4(t),t._firestoreClient}function L4(t){var e,n,r,i;const s=t._freezeSettings(),a=R4(t._databaseId,((e=t._app)==null?void 0:e.options.appId)||"",t._persistenceKey,(n=t._app)==null?void 0:n.options.apiKey,s);t._componentsProvider||(r=s.localCache)!=null&&r._offlineComponentProvider&&(i=s.localCache)!=null&&i._onlineComponentProvider&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new T4(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
*/class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ut.fromBase64String(e))}catch(n){throw new U(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:He("string",tn._jsonSchemaVersion),bytes:He("string")};/**
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
*/class sg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class vl{constructor(e){this._methodName=e}}/**
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
*/class Pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(dl(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:He("string",Pn._jsonSchemaVersion),latitude:He("number"),longitude:He("number")};/**
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
*/class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dl(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new U(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:He("string",pn._jsonSchemaVersion),vectorValues:He("object")};/**
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
*/const M4=/^__.*__$/;class F4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}class mT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:t})}}class ag{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ag({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.i({path:r,arrayElement:!1});return i.wc(e),i}Sc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.i({path:r,arrayElement:!1});return i.fc(),i}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ec(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(gT(this.dataSource)&&M4.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class V4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ih(e)}V(e,n,r,i=!1){return new ag({dataSource:e,methodName:n,targetDoc:r,path:at.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new V4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yT(t,e,n,r,i,s={}){const a=t.V(s.merge||s.mergeFields?2:0,e,n,i);ug("Data must be an object, but it was:",a,r);const l=vT(r,a);let u,h;if(s.merge)u=new Ut(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Qi(e,p,n);if(!a.contains(m))throw new U(R.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);kT(f,m)||f.push(m)}u=new Ut(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new F4(new It(l),u,h)}class ch extends vl{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}class og extends vl{_toFieldTransform(e){return new R1(e.path,new qo)}isEqual(e){return e instanceof og}}class lg extends vl{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Ko(e.serializer,I1(e.serializer,this.Fc));return new R1(e.path,n)}isEqual(e){return e instanceof lg&&this.Fc===e.Fc}}function U4(t,e,n,r){const i=t.V(1,e,n);ug("Data must be an object, but it was:",i,r);const s=[],a=It.empty();di(r,(u,h)=>{const f=wT(e,u,n);h=Ne(h);const p=i.Sc(f);if(h instanceof ch)s.push(f);else{const m=bl(h,p);m!=null&&(s.push(f),a.set(f,m))}});const l=new Ut(s);return new mT(a,l,i.fieldTransforms)}function z4(t,e,n,r,i,s){const a=t.V(1,e,n),l=[Qi(e,r,n)],u=[i];if(s.length%2!=0)throw new U(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Qi(e,s[m])),u.push(s[m+1]);const h=[],f=It.empty();for(let m=l.length-1;m>=0;--m)if(!kT(h,l[m])){const w=l[m];let N=u[m];N=Ne(N);const L=a.Sc(w);if(N instanceof ch)h.push(w);else{const M=bl(N,L);M!=null&&(h.push(w),f.set(w,M))}}const p=new Ut(h);return new mT(f,p,a.fieldTransforms)}function j4(t,e,n,r=!1){return bl(n,t.V(r?4:3,e))}function bl(t,e){if(bT(t=Ne(t)))return ug("Unsupported field value:",e,t),vT(t,e);if(t instanceof vl)return function(n,r){if(!gT(r.dataSource))throw r.Dc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const a of n){let l=bl(a,r.bc(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ne(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return I1(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=_e.fromDate(n);return{timestampValue:yc(r.serializer,i)}}if(n instanceof _e){const i=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yc(r.serializer,i)}}if(n instanceof Pn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tn)return{bytesValue:V1(r.serializer,n._byteString)};if(n instanceof Oe){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Dc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jm(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof pn)return function(i,s){const a=i instanceof pn?i.toArray():i;return{mapValue:{fields:{[h1]:{stringValue:d1},[mc]:{arrayValue:{values:a.map(l=>{if(typeof l!="number")throw s.Dc("VectorValues must only contain numeric values.");return Fm(s.serializer,l)})}}}}}}(n,r);if(H1(n))return n._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Qc(n)}`)}(t,e)}function vT(t,e){const n={};return s1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=bl(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function bT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Pn||t instanceof tn||t instanceof Oe||t instanceof vl||t instanceof pn||H1(t))}function ug(t,e,n){if(!bT(n)||!r1(n)){const r=Qc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Qi(t,e,n){if((e=Ne(e))instanceof sg)return e._internalPath;if(typeof e=="string")return wT(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const B4=new RegExp("[~\\*/\\[\\]]");function wT(t,e,n){if(e.search(B4)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sg(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new U(R.INVALID_ARGUMENT,l+t+u)}function kT(t,e){return t.some(n=>n.isEqual(e))}/**
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
*/class $4{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)==null?void 0:n[mc].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>Le(a.doubleValue));return new pn(s)}convertGeoPoint(e){return new Pn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zo(e));default:return null}}convertTimestamp(e){const n=ni(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);de(q1(r),9688,{name:e});const i=new jo(r.get(1),r.get(3)),s=new $(r.popFirst(5));return i.isEqual(n)||ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
*/class cg extends $4{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Oe(this.firestore,null,n)}}function xt(){return new og("serverTimestamp")}function eu(t){return new lg("increment",t)}const Ew="@firebase/firestore",Sw="4.14.1";/**
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
*/function Tw(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
*/class ET{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Oe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new q4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class q4 extends ET{data(){return super.data()}}/**
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
*/function ST(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hg{}class TT extends hg{}function Od(t,e,...n){let r=[];e instanceof hg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(l=>l instanceof dg).length,a=i.filter(l=>l instanceof hh).length;if(s>1||s>0&&a>0)throw new U(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hh extends TT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hh(e,n,r)}_apply(e){const n=this._parse(e);return _T(e._query,n),new pi(e.firestore,e.converter,Yf(e._query,n))}_parse(e){const n=uh(e.firestore);return function(r,i,s,a,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Iw(h,u);const p=[];for(const m of h)p.push(Cw(a,r,m));f={arrayValue:{values:p}}}else f=Cw(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Iw(h,u),f=j4(s,i,h,u==="in"||u==="not-in");return $e.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function H4(t,e,n){const r=e,i=Qi("where",t);return hh._create(i,r,n)}class dg extends hg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const a=i.getFlattenedFilters();for(const l of a)_T(s,l),s=Yf(s,l)}(e._query,n),new pi(e.firestore,e.converter,Yf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fg extends TT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new U(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new U(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $o(i,s)}(e._query,this._field,this._direction);return new pi(e.firestore,e.converter,gx(e._query,n))}}function _w(t,e="asc"){const n=e,r=Qi("orderBy",t);return fg._create(r,n)}function Cw(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new U(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!w1(e)&&n.indexOf("/")!==-1)throw new U(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!$.isDocumentKey(r))throw new U(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ub(t,new $(r))}if(n instanceof Oe)return Ub(t,n._key);throw new U(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n)}.`)}function Iw(t,e){if(!Array.isArray(t)||t.length===0)throw new U(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function _T(t,e){const n=function(r,i){for(const s of r)for(const a of s.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function CT(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends ET{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new U(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),n}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:He("string",Mi._jsonSchemaVersion),bundleSource:He("string","DocumentSnapshot"),bundleName:He("string"),bundle:He("string")};class Iu extends Mi{data(e={}){return super.data(e)}}class Fi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(a=>{const l=new Iu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new no(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Iu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new no(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:G4(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new U(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Dm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:t})}}/**
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
*/Fi._jsonSchemaVersion="firestore/querySnapshot/1.0",Fi._jsonSchema={type:He("string",Fi._jsonSchemaVersion),bundleSource:He("string","QuerySnapshot"),bundleName:He("string"),bundle:He("string")};/**
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
*/function K4(t){t=Nt(t,Oe);const e=Nt(t.firestore,hr),n=lh(e);return A4(n,t._key).then(r=>IT(e,t,r))}function W4(t){t=Nt(t,pi);const e=Nt(t.firestore,hr),n=lh(e),r=new cg(e);return ST(t._query),N4(n,t._query).then(i=>new Fi(e,r,t,i))}function tu(t,e,n){t=Nt(t,Oe);const r=Nt(t.firestore,hr),i=CT(t.converter,e,n),s=uh(r);return dh(r,[yT(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Ld(t,e,n,...r){t=Nt(t,Oe);const i=Nt(t.firestore,hr),s=uh(i);let a;return a=typeof(e=Ne(e))=="string"||e instanceof sg?z4(s,"updateDoc",t._key,e,n,r):U4(s,"updateDoc",t._key,e),dh(i,[a.toMutation(t._key,sn.exists(!0))])}function Aw(t){return dh(Nt(t.firestore,hr),[new Vm(t._key,sn.none())])}function Md(t,e){const n=Nt(t.firestore,hr),r=Wt(t),i=CT(t.converter,e),s=uh(t.firestore);return dh(n,[yT(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function nu(t,...e){var n,r,i;t=Ne(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Tw(e[a])||(s=e[a++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Tw(e[a])){const m=e[a];e[a]=(n=m.next)==null?void 0:n.bind(m),e[a+1]=(r=m.error)==null?void 0:r.bind(m),e[a+2]=(i=m.complete)==null?void 0:i.bind(m)}let u,h,f;if(t instanceof Oe)h=Nt(t.firestore,hr),f=Zc(t._key.path),u={next:m=>{e[a]&&e[a](IT(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=Nt(t,pi);h=Nt(m.firestore,hr),f=m._query;const w=new cg(h);u={next:N=>{e[a]&&e[a](new Fi(h,w,m,N))},error:e[a+1],complete:e[a+2]},ST(t._query)}const p=lh(h);return I4(p,f,l,u)}function dh(t,e){const n=lh(t);return P4(n,e)}function IT(t,e,n){const r=n.docs.get(e._key),i=new cg(t);return new Mi(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){PR(ma),Dn(new gn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),a=new hr(new xR(n.getProvider("auth-internal")),new MR(s,n.getProvider("app-check-internal")),ZR(s,r),s);return i={useFetchStreams:e,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),rn(Ew,Sw,t),rn(Ew,Sw,"esm2020")})();const Q4={apiKey:"AIzaSyBdxuFu9cs0OdurGZneu6l_v72S_u2kmvw",authDomain:"hr-supermarket-db.firebaseapp.com",projectId:"hr-supermarket-db",storageBucket:"hr-supermarket-db.firebasestorage.app",messagingSenderId:"466119121244",appId:"1:466119121244:web:5002c474833406b8d6c999",measurementId:"G-JQ42BL9WE3"},Y4=["divyrajchavda1987@gmail.com"],SL="1234",TL="9999",_L={month:1,year:2026},pg=qE(Q4);lP().then(t=>{t&&aP(pg)});const bs=AR(pg);pD(bs,VS).catch(()=>{});const Je=O4(pg),AT=new $n;AT.setCustomParameters({prompt:"select_account"});function CL(t){return Y4.includes(t||"")}const IL={onChange(t){return yD(bs,t)},async signInWithGoogle(){return FD(bs,AT)},async signInWithEmail(t,e){return hD(bs,t,e)},async signUp(t,e,n){const r=await cD(bs,e,n);return t&&await fD(r.user,{displayName:t}),r},async signOut(){return vD(bs)}},AL={subscribeCollection(t,e,n=()=>{}){return nu(Od(Ei(Je,t),_w("createdAt","desc")),r=>{e(r.docs.map(i=>{var s,a,l,u,h,f,p,m;return{id:i.id,...i.data(),createdAt:((u=(l=(a=(s=i.data().createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))==null?void 0:l.toISOString)==null?void 0:u.call(l))||i.data().createdAt||null,updatedAt:((m=(p=(f=(h=i.data().updatedAt)==null?void 0:h.toDate)==null?void 0:f.call(h))==null?void 0:p.toISOString)==null?void 0:m.call(p))||i.data().updatedAt||null}}))},n)},subscribeOrdersForUser(t,e,n=()=>{}){return nu(Od(Ei(Je,"orders"),H4("userId","==",t)),r=>{const i=r.docs.map(s=>{var a,l,u,h;return{id:s.id,...s.data(),createdAt:((h=(u=(l=(a=s.data().createdAt)==null?void 0:a.toDate)==null?void 0:l.call(a))==null?void 0:u.toISOString)==null?void 0:h.call(u))||s.data().createdAt||null}}).sort((s,a)=>new Date(a.createdAt||0)-new Date(s.createdAt||0));e(i)},n)},subscribeOrders(t,e=()=>{}){return nu(Od(Ei(Je,"orders"),_w("createdAt","desc")),n=>{t(n.docs.map(r=>{var i,s,a,l;return{id:r.id,...r.data(),createdAt:((l=(a=(s=(i=r.data().createdAt)==null?void 0:i.toDate)==null?void 0:s.call(i))==null?void 0:a.toISOString)==null?void 0:l.call(a))||r.data().createdAt||null}}))},e)},subscribeDocument(t,e,n,r=()=>{}){return nu(Wt(Je,t,e),i=>{n(i.exists()?{id:i.id,...i.data()}:null)},r)},async addProduct(t){return Md(Ei(Je,"products"),{...t,createdAt:xt(),updatedAt:xt()})},async removeProduct(t){return Aw(Wt(Je,"products",t))},async addBanner(t){return Md(Ei(Je,"banners"),{...t,createdAt:xt(),updatedAt:xt()})},async removeBanner(t){return Aw(Wt(Je,"banners",t))},async savePlatformFee(t,e){return tu(Wt(Je,"platform_fees",t),e,{merge:!0})},async updatePlatformFeeStatus(t,e){return Ld(Wt(Je,"platform_fees",t),{status:e,updatedAt:xt()})},async updateOrderStatus(t,e){return Ld(Wt(Je,"orders",t),{status:e,updatedAt:xt()})},async updatePlatformCutStatus(t,e){return Ld(Wt(Je,"orders",t),{platformCutStatus:e,updatedAt:xt()})},async saveSettings(t){return tu(Wt(Je,"settings","storefront"),{...t,updatedAt:xt()},{merge:!0})},async getSettings(){const t=await K4(Wt(Je,"settings","storefront"));return t.exists()?t.data():null},async placeOrder(t){const e=await Md(Ei(Je,"orders"),{...t,createdAt:xt(),updatedAt:xt()});return await tu(Wt(Je,"platform_earnings","summary"),{totalOrders:eu(1),totalPlatformCut:eu(t.platformCut||0),totalHandlingFee:eu(t.handlingFee||0),totalActualHandling:eu(t.actualHandling||0),lastOrderId:e.id,updatedAt:xt()},{merge:!0}),e},async seedPlatformFees(t){const e=await W4(Ei(Je,"platform_fees")),n=new Set(e.docs.map(r=>r.id));await Promise.all(t.filter(r=>!n.has(r.id)).map(r=>tu(Wt(Je,"platform_fees",r.id),{month:r.month,year:r.year,amount:1500,status:"Pending",createdAt:xt(),updatedAt:xt()})))}};function NL(t,e){const[n,r]=tr.useState(()=>r2(t,e));return tr.useEffect(()=>{i2(t,n)},[t,n]),[n,r]}function PL(t){const e=()=>window.matchMedia(t).matches,[n,r]=tr.useState(e);return tr.useEffect(()=>{const i=window.matchMedia(t),s=()=>r(i.matches);return s(),i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[t]),n}function DL(t,e=3500){const[n,r]=tr.useState(0);return tr.useEffect(()=>{if(!t)return;const i=window.setInterval(()=>{r(s=>(s+1)%t)},e);return()=>window.clearInterval(i)},[e,t]),[n,r]}function RL(t,e="#10231a"){tr.useEffect(()=>{const n=document.body.style.background,r=document.body.style.color,i=document.body.style.margin,s=document.body.style.fontFamily;return document.body.style.margin="0",document.body.style.background=t,document.body.style.color=e,document.body.style.fontFamily="'Segoe UI', system-ui, sans-serif",()=>{document.body.style.background=n,document.body.style.color=r,document.body.style.margin=i,document.body.style.fontFamily=s}},[t,e])}export{NL as A,Bv as B,IL as C,RE as D,EL as E,vL as F,bL as G,DL as H,TL as I,J4 as J,K,yL as L,AL as N,PL as P,kL as S,_L as T,X4 as X,Z4 as Z,CL as _,RL as a,a2 as b,aL as c,wL as d,cL as e,dL as f,e2 as g,eL as h,fL as i,gL as j,hL as k,i2 as l,iL as m,jv as n,SL as o,lL as p,mL as q,nL as r,oL as s,pL as t,rL as u,sL as v,tL as w,tr as x,uL as y,ue as z};
