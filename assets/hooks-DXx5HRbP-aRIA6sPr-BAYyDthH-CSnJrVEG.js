(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var Ab={exports:{}},kc={};/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var iT=Symbol.for("react.transitional.element"),sT=Symbol.for("react.fragment");function Pb(t,e,n){var r=null;if(n!==void 0&&(r=""+n),e.key!==void 0&&(r=""+e.key),"key"in e){n={};for(var i in e)i!=="key"&&(n[i]=e[i])}else n=e;return e=n.ref,{$$typeof:iT,type:t,key:r,ref:e!==void 0?e:null,props:n}}kc.Fragment=sT;kc.jsx=Pb;kc.jsxs=Pb;Ab.exports=kc;var K=Ab.exports,xb={exports:{}},J={};/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var lp=Symbol.for("react.transitional.element"),aT=Symbol.for("react.portal"),oT=Symbol.for("react.fragment"),lT=Symbol.for("react.strict_mode"),uT=Symbol.for("react.profiler"),cT=Symbol.for("react.consumer"),hT=Symbol.for("react.context"),dT=Symbol.for("react.forward_ref"),fT=Symbol.for("react.suspense"),pT=Symbol.for("react.memo"),Db=Symbol.for("react.lazy"),mT=Symbol.for("react.activity"),fy=Symbol.iterator;function gT(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var Ob={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rb=Object.assign,Lb={};function oa(t,e,n){this.props=t,this.context=e,this.refs=Lb,this.updater=n||Ob}oa.prototype.isReactComponent={};oa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mb(){}Mb.prototype=oa.prototype;function up(t,e,n){this.props=t,this.context=e,this.refs=Lb,this.updater=n||Ob}var cp=up.prototype=new Mb;cp.constructor=up;Rb(cp,oa.prototype);cp.isPureReactComponent=!0;var py=Array.isArray;function Fd(){}var _e={H:null,A:null,T:null,S:null},Fb=Object.prototype.hasOwnProperty;function hp(t,e,n){var r=n.ref;return{$$typeof:lp,type:t,key:e,ref:r!==void 0?r:null,props:n}}function yT(t,e){return hp(t.type,e,t.props)}function dp(t){return typeof t=="object"&&t!==null&&t.$$typeof===lp}function vT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var my=/\/+/g;function Mh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vT(""+t.key):e.toString(36)}function wT(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Fd,Fd):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ds(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case lp:case aT:a=!0;break;case Db:return a=t._init,ds(a(t._payload),e,n,r,i)}}if(a)return i=i(t),a=r===""?"."+Mh(t,0):r,py(i)?(n="",a!=null&&(n=a.replace(my,"$&/")+"/"),ds(i,e,n,"",function(h){return h})):i!=null&&(dp(i)&&(i=yT(i,n+(i.key==null||t&&t.key===i.key?"":(""+i.key).replace(my,"$&/")+"/")+a)),e.push(i)),1;a=0;var l=r===""?".":r+":";if(py(t))for(var u=0;u<t.length;u++)r=t[u],s=l+Mh(r,u),a+=ds(r,e,n,s,i);else if(u=gT(t),typeof u=="function")for(t=u.call(t),u=0;!(r=t.next()).done;)r=r.value,s=l+Mh(r,u++),a+=ds(r,e,n,s,i);else if(s==="object"){if(typeof t.then=="function")return ds(wT(t),e,n,r,i);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function Dl(t,e,n){if(t==null)return t;var r=[],i=0;return ds(t,r,"","",function(s){return e.call(n,s,i++)}),r}function bT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gy=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ST={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!dp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};J.Activity=mT;J.Children=ST;J.Component=oa;J.Fragment=oT;J.Profiler=uT;J.PureComponent=up;J.StrictMode=lT;J.Suspense=fT;J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;J.__COMPILER_RUNTIME={__proto__:null,c:function(t){return _e.H.useMemoCache(t)}};J.cache=function(t){return function(){return t.apply(null,arguments)}};J.cacheSignal=function(){return null};J.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=Rb({},t.props),i=t.key;if(e!=null)for(s in e.key!==void 0&&(i=""+e.key),e)!Fb.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(r[s]=e[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var a=Array(s),l=0;l<s;l++)a[l]=arguments[l+2];r.children=a}return hp(t.type,i,r)};J.createContext=function(t){return t={$$typeof:hT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:cT,_context:t},t};J.createElement=function(t,e,n){var r,i={},s=null;if(e!=null)for(r in e.key!==void 0&&(s=""+e.key),e)Fb.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return hp(t,s,i)};J.createRef=function(){return{current:null}};J.forwardRef=function(t){return{$$typeof:dT,render:t}};J.isValidElement=dp;J.lazy=function(t){return{$$typeof:Db,_payload:{_status:-1,_result:t},_init:bT}};J.memo=function(t,e){return{$$typeof:pT,type:t,compare:e===void 0?null:e}};J.startTransition=function(t){var e=_e.T,n={};_e.T=n;try{var r=t(),i=_e.S;i!==null&&i(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(Fd,gy)}catch(s){gy(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),_e.T=e}};J.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()};J.use=function(t){return _e.H.use(t)};J.useActionState=function(t,e,n){return _e.H.useActionState(t,e,n)};J.useCallback=function(t,e){return _e.H.useCallback(t,e)};J.useContext=function(t){return _e.H.useContext(t)};J.useDebugValue=function(){};J.useDeferredValue=function(t,e){return _e.H.useDeferredValue(t,e)};J.useEffect=function(t,e){return _e.H.useEffect(t,e)};J.useEffectEvent=function(t){return _e.H.useEffectEvent(t)};J.useId=function(){return _e.H.useId()};J.useImperativeHandle=function(t,e,n){return _e.H.useImperativeHandle(t,e,n)};J.useInsertionEffect=function(t,e){return _e.H.useInsertionEffect(t,e)};J.useLayoutEffect=function(t,e){return _e.H.useLayoutEffect(t,e)};J.useMemo=function(t,e){return _e.H.useMemo(t,e)};J.useOptimistic=function(t,e){return _e.H.useOptimistic(t,e)};J.useReducer=function(t,e,n){return _e.H.useReducer(t,e,n)};J.useRef=function(t){return _e.H.useRef(t)};J.useState=function(t){return _e.H.useState(t)};J.useSyncExternalStore=function(t,e,n){return _e.H.useSyncExternalStore(t,e,n)};J.useTransition=function(){return _e.H.useTransition()};J.version="19.2.6";xb.exports=J;var tr=xb.exports,Ub={exports:{}},Ic={},zb={exports:{}},Vb={};/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(t){function e(j,Z){var Y=j.length;j.push(Z);e:for(;0<Y;){var ve=Y-1>>>1,Ue=j[ve];if(0<i(Ue,Z))j[ve]=Z,j[Y]=Ue,Y=ve;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var Z=j[0],Y=j.pop();if(Y!==Z){j[0]=Y;e:for(var ve=0,Ue=j.length,mi=Ue>>>1;ve<mi;){var gi=2*(ve+1)-1,ss=j[gi],Kt=gi+1,pr=j[Kt];if(0>i(ss,Y))Kt<Ue&&0>i(pr,ss)?(j[ve]=pr,j[Kt]=Y,ve=Kt):(j[ve]=ss,j[gi]=Y,ve=gi);else if(Kt<Ue&&0>i(pr,Y))j[ve]=pr,j[Kt]=Y,ve=Kt;else break e}}return Z}function i(j,Z){var Y=j.sortIndex-Z.sortIndex;return Y!==0?Y:j.id-Z.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,p=null,m=3,b=!1,A=!1,L=!1,M=!1,I=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function x(j){for(var Z=n(h);Z!==null;){if(Z.callback===null)r(h);else if(Z.startTime<=j)r(h),Z.sortIndex=Z.expirationTime,e(u,Z);else break;Z=n(h)}}function U(j){if(L=!1,x(j),!A)if(n(u)!==null)A=!0,B||(B=!0,C());else{var Z=n(h);Z!==null&&ln(U,Z.startTime-j)}}var B=!1,w=-1,y=5,v=-1;function k(){return M?!0:!(t.unstable_now()-v<y)}function T(){if(M=!1,B){var j=t.unstable_now();v=j;var Z=!0;try{e:{A=!1,L&&(L=!1,S(w),w=-1),b=!0;var Y=m;try{t:{for(x(j),p=n(u);p!==null&&!(p.expirationTime>j&&k());){var ve=p.callback;if(typeof ve=="function"){p.callback=null,m=p.priorityLevel;var Ue=ve(p.expirationTime<=j);if(j=t.unstable_now(),typeof Ue=="function"){p.callback=Ue,x(j),Z=!0;break t}p===n(u)&&r(u),x(j)}else r(u);p=n(u)}if(p!==null)Z=!0;else{var mi=n(h);mi!==null&&ln(U,mi.startTime-j),Z=!1}}break e}finally{p=null,m=Y,b=!1}Z=void 0}}finally{Z?C():B=!1}}}var C;if(typeof _=="function")C=function(){_(T)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,ct=E.port2;E.port1.onmessage=T,C=function(){ct.postMessage(null)}}else C=function(){I(T,0)};function ln(j,Z){w=I(function(){j(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var Y=m;m=Z;try{return j()}finally{m=Y}},t.unstable_requestPaint=function(){M=!0},t.unstable_runWithPriority=function(j,Z){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=m;m=j;try{return Z()}finally{m=Y}},t.unstable_scheduleCallback=function(j,Z,Y){var ve=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ve+Y:ve):Y=ve,j){case 1:var Ue=-1;break;case 2:Ue=250;break;case 5:Ue=1073741823;break;case 4:Ue=1e4;break;default:Ue=5e3}return Ue=Y+Ue,j={id:f++,callback:Z,priorityLevel:j,startTime:Y,expirationTime:Ue,sortIndex:-1},Y>ve?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(L?(S(w),w=-1):L=!0,ln(U,Y-ve))):(j.sortIndex=Ue,e(u,j),A||b||(A=!0,B||(B=!0,C()))),j},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(j){var Z=m;return function(){var Y=m;m=Z;try{return j.apply(this,arguments)}finally{m=Y}}}})(Vb);zb.exports=Vb;var ET=zb.exports,jb={exports:{}},St={};/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var kT=tr;function Bb(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Sr(){}var wt={d:{f:Sr,r:function(){throw Error(Bb(522))},D:Sr,C:Sr,L:Sr,m:Sr,X:Sr,S:Sr,M:Sr},p:0,findDOMNode:null},IT=Symbol.for("react.portal");function TT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:IT,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}var ro=kT.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Tc(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=wt;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Bb(299));return TT(t,e,null,n)};St.flushSync=function(t){var e=ro.T,n=wt.p;try{if(ro.T=null,wt.p=2,t)return t()}finally{ro.T=e,wt.p=n,wt.d.f()}};St.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,wt.d.C(t,e))};St.prefetchDNS=function(t){typeof t=="string"&&wt.d.D(t)};St.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,r=Tc(n,e.crossOrigin),i=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?wt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:s}):n==="script"&&wt.d.X(t,{crossOrigin:r,integrity:i,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};St.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Tc(e.as,e.crossOrigin);wt.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&wt.d.M(t)};St.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,r=Tc(n,e.crossOrigin);wt.d.L(t,n,{crossOrigin:r,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};St.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Tc(e.as,e.crossOrigin);wt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else wt.d.m(t)};St.requestFormReset=function(t){wt.d.r(t)};St.unstable_batchedUpdates=function(t,e){return t(e)};St.useFormState=function(t,e,n){return ro.H.useFormState(t,e,n)};St.useFormStatus=function(){return ro.H.useHostTransitionStatus()};St.version="19.2.6";function qb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qb)}catch(t){console.error(t)}}qb(),jb.exports=St;var _T=jb.exports;/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var Qe=ET,$b=tr,CT=_T;function O(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Hb(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gb(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kb(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yy(t){if(Wo(t)!==t)throw Error(O(188))}function NT(t){var e=t.alternate;if(!e){if(e=Wo(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yy(i),t;if(s===r)return yy(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function Wb(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Wb(t),e!==null)return e;t=t.sibling}return null}var Ce=Object.assign,AT=Symbol.for("react.element"),Ol=Symbol.for("react.transitional.element"),Ga=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Qb=Symbol.for("react.strict_mode"),Ud=Symbol.for("react.profiler"),Yb=Symbol.for("react.consumer"),$n=Symbol.for("react.context"),fp=Symbol.for("react.forward_ref"),zd=Symbol.for("react.suspense"),Vd=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),jd=Symbol.for("react.activity"),PT=Symbol.for("react.memo_cache_sentinel"),vy=Symbol.iterator;function Ua(t){return t===null||typeof t!="object"?null:(t=vy&&t[vy]||t["@@iterator"],typeof t=="function"?t:null)}var xT=Symbol.for("react.client.reference");function Bd(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xT?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Ud:return"Profiler";case Qb:return"StrictMode";case zd:return"Suspense";case Vd:return"SuspenseList";case jd:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ga:return"Portal";case $n:return t.displayName||"Context";case Yb:return(t._context.displayName||"Context")+".Consumer";case fp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pp:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case kr:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}var Ka=Array.isArray,G=$b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he=CT.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xi={pending:!1,data:null,method:null,action:null},qd=[],Ss=-1;function Rn(t){return{current:t}}function tt(t){0>Ss||(t.current=qd[Ss],qd[Ss]=null,Ss--)}function be(t,e){Ss++,qd[Ss]=t.current,t.current=e}var _n=Rn(null),ko=Rn(null),Fr=Rn(null),Nu=Rn(null);function Au(t,e){switch(be(Fr,e),be(ko,t),be(_n,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Iv(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Iv(e),t=gE(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}tt(_n),be(_n,t)}function Hs(){tt(_n),tt(ko),tt(Fr)}function $d(t){t.memoizedState!==null&&be(Nu,t);var e=_n.current,n=gE(e,t.type);e!==n&&(be(ko,t),be(_n,n))}function Pu(t){ko.current===t&&(tt(_n),tt(ko)),Nu.current===t&&(tt(Nu),Ro._currentValue=xi)}var Fh,wy;function ki(t){if(Fh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Fh=e&&e[1]||"",wy=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fh+t+wy}var Uh=!1;function zh(t,e){if(!t||Uh)return"";Uh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var p=function(){throw Error()};if(Object.defineProperty(p.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(p,[])}catch(b){var m=b}Reflect.construct(t,[],p)}else{try{p.call()}catch(b){m=b}t.call(p.prototype)}}else{try{throw Error()}catch(b){m=b}(p=t())&&typeof p.catch=="function"&&p.catch(function(){})}}catch(b){if(b&&m&&typeof b.stack=="string")return[b.stack,m.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=r.DetermineComponentFrameRoot(),a=s[0],l=s[1];if(a&&l){var u=a.split(`
`),h=l.split(`
`);for(i=r=0;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;for(;i<h.length&&!h[i].includes("DetermineComponentFrameRoot");)i++;if(r===u.length||i===h.length)for(r=u.length-1,i=h.length-1;1<=r&&0<=i&&u[r]!==h[i];)i--;for(;1<=r&&0<=i;r--,i--)if(u[r]!==h[i]){if(r!==1||i!==1)do if(r--,i--,0>i||u[r]!==h[i]){var f=`
`+u[r].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=r&&0<=i);break}}}finally{Uh=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ki(n):""}function DT(t,e){switch(t.tag){case 26:case 27:case 5:return ki(t.type);case 16:return ki("Lazy");case 13:return t.child!==e&&e!==null?ki("Suspense Fallback"):ki("Suspense");case 19:return ki("SuspenseList");case 0:case 15:return zh(t.type,!1);case 11:return zh(t.type.render,!1);case 1:return zh(t.type,!0);case 31:return ki("Activity");default:return""}}function by(t){try{var e="",n=null;do e+=DT(t,n),n=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Hd=Object.prototype.hasOwnProperty,mp=Qe.unstable_scheduleCallback,Vh=Qe.unstable_cancelCallback,OT=Qe.unstable_shouldYield,RT=Qe.unstable_requestPaint,Vt=Qe.unstable_now,LT=Qe.unstable_getCurrentPriorityLevel,Jb=Qe.unstable_ImmediatePriority,Xb=Qe.unstable_UserBlockingPriority,xu=Qe.unstable_NormalPriority,MT=Qe.unstable_LowPriority,Zb=Qe.unstable_IdlePriority,FT=Qe.log,UT=Qe.unstable_setDisableYieldValue,Qo=null,jt=null;function Dr(t){if(typeof FT=="function"&&UT(t),jt&&typeof jt.setStrictMode=="function")try{jt.setStrictMode(Qo,t)}catch{}}var Bt=Math.clz32?Math.clz32:jT,zT=Math.log,VT=Math.LN2;function jT(t){return t>>>=0,t===0?32:31-(zT(t)/VT|0)|0}var Rl=256,Ll=262144,Ml=4194304;function Ii(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _c(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var i=0,s=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var l=r&134217727;return l!==0?(r=l&~s,r!==0?i=Ii(r):(a&=l,a!==0?i=Ii(a):n||(n=l&~t,n!==0&&(i=Ii(n))))):(l=r&~s,l!==0?i=Ii(l):a!==0?i=Ii(a):n||(n=r&~t,n!==0&&(i=Ii(n)))),i===0?0:e!==0&&e!==i&&!(e&s)&&(s=i&-i,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:i}function Yo(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function BT(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function e0(){var t=Ml;return Ml<<=1,!(Ml&62914560)&&(Ml=4194304),t}function jh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qT(t,e,n,r,i,s){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var l=t.entanglements,u=t.expirationTimes,h=t.hiddenUpdates;for(n=a&~n;0<n;){var f=31-Bt(n),p=1<<f;l[f]=0,u[f]=-1;var m=h[f];if(m!==null)for(h[f]=null,f=0;f<m.length;f++){var b=m[f];b!==null&&(b.lane&=-536870913)}n&=~p}r!==0&&t0(t,r,0),s!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=s&~(a&~e))}function t0(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Bt(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&261930}function n0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}function r0(t,e){var n=e&-e;return n=n&42?1:gp(n),n&(t.suspendedLanes|e)?0:n}function gp(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function yp(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function i0(){var t=he.p;return t!==0?t:(t=window.event,t===void 0?32:CE(t.type))}function Sy(t,e){var n=he.p;try{return he.p=t,e()}finally{he.p=n}}var li=Math.random().toString(36).slice(2),it="__reactFiber$"+li,Pt="__reactProps$"+li,la="__reactContainer$"+li,Gd="__reactEvents$"+li,$T="__reactListeners$"+li,HT="__reactHandles$"+li,Ey="__reactResources$"+li,Xo="__reactMarker$"+li;function vp(t){delete t[it],delete t[Pt],delete t[Gd],delete t[$T],delete t[HT]}function Es(t){var e=t[it];if(e)return e;for(var n=t.parentNode;n;){if(e=n[la]||n[it]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Av(t);t!==null;){if(n=t[it])return n;t=Av(t)}return e}t=n,n=t.parentNode}return null}function ua(t){if(t=t[it]||t[la]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Wa(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(O(33))}function Ds(t){var e=t[Ey];return e||(e=t[Ey]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function et(t){t[Xo]=!0}var s0=new Set,a0={};function Yi(t,e){Gs(t,e),Gs(t+"Capture",e)}function Gs(t,e){for(a0[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var GT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ky={},Iy={};function KT(t){return Hd.call(Iy,t)?!0:Hd.call(ky,t)?!1:GT.test(t)?Iy[t]=!0:(ky[t]=!0,!1)}function ru(t,e,n){if(KT(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Fl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Mn(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}function Yt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function o0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WT(t,e,n){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Kd(t){if(!t._valueTracker){var e=o0(t)?"checked":"value";t._valueTracker=WT(t,e,""+t[e])}}function l0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=o0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var QT=/[\n"\\]/g;function hn(t){return t.replace(QT,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Wd(t,e,n,r,i,s,a,l){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Yt(e)):t.value!==""+Yt(e)&&(t.value=""+Yt(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?Qd(t,a,Yt(e)):n!=null?Qd(t,a,Yt(n)):r!=null&&t.removeAttribute("value"),i==null&&s!=null&&(t.defaultChecked=!!s),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?t.name=""+Yt(l):t.removeAttribute("name")}function u0(t,e,n,r,i,s,a,l){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){Kd(t);return}n=n!=null?""+Yt(n):"",e=e!=null?""+Yt(e):n,l||e===t.value||(t.value=e),t.defaultValue=e}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=l?t.checked:!!r,t.defaultChecked=!!r,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),Kd(t)}function Qd(t,e,n){e==="number"&&Du(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Os(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Yt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function c0(t,e,n){if(e!=null&&(e=""+Yt(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Yt(n):""}function h0(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(O(92));if(Ka(r)){if(1<r.length)throw Error(O(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=Yt(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r),Kd(t)}function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var YT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ty(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||YT.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function d0(t,e,n){if(e!=null&&typeof e!="object")throw Error(O(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var i in e)r=e[i],e.hasOwnProperty(i)&&n[i]!==r&&Ty(t,i,r)}else for(var s in e)e.hasOwnProperty(s)&&Ty(t,s,e[s])}function wp(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var JT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),XT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function iu(t){return XT.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Hn(){}var Yd=null;function bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ks=null,Rs=null;function _y(t){var e=ua(t);if(e&&(t=e.stateNode)){var n=t[Pt]||null;e:switch(t=e.stateNode,e.type){case"input":if(Wd(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=r[Pt]||null;if(!i)throw Error(O(90));Wd(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&l0(r)}break e;case"textarea":c0(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}}}var Bh=!1;function f0(t,e,n){if(Bh)return t(e,n);Bh=!0;try{var r=t(e);return r}finally{if(Bh=!1,(ks!==null||Rs!==null)&&(Uc(),ks&&(e=ks,t=Rs,Rs=ks=null,_y(e),t)))for(e=0;e<t.length;e++)_y(t[e])}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Pt]||null;if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jd=!1;if(nr)try{var za={};Object.defineProperty(za,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",za,za),window.removeEventListener("test",za,za)}catch{Jd=!1}var Or=null,Sp=null,su=null;function p0(){if(su)return su;var t,e=Sp,n=e.length,r,i="value"in Or?Or.value:Or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return su=i.slice(t,1<r?1-r:void 0)}function au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Cy(){return!1}function xt(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:Cy,this.isPropagationStopped=Cy,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=xt(Ji),Zo=Ce({},Ji,{view:0,detail:0}),ZT=xt(Zo),qh,$h,Va,Nc=Ce({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Va&&(Va&&t.type==="mousemove"?(qh=t.screenX-Va.screenX,$h=t.screenY-Va.screenY):$h=qh=0,Va=t),qh)},movementY:function(t){return"movementY"in t?t.movementY:$h}}),Ny=xt(Nc),e_=Ce({},Nc,{dataTransfer:0}),t_=xt(e_),n_=Ce({},Zo,{relatedTarget:0}),Hh=xt(n_),r_=Ce({},Ji,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=xt(r_),s_=Ce({},Ji,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),a_=xt(s_),o_=Ce({},Ji,{data:0}),Ay=xt(o_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},u_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=c_[t])?!!e[t]:!1}function Ep(){return h_}var d_=Ce({},Zo,{key:function(t){if(t.key){var e=l_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?u_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),f_=xt(d_),p_=Ce({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Py=xt(p_),m_=Ce({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),g_=xt(m_),y_=Ce({},Ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),v_=xt(y_),w_=Ce({},Nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b_=xt(w_),S_=Ce({},Ji,{newState:0,oldState:0}),E_=xt(S_),k_=[9,13,27,32],kp=nr&&"CompositionEvent"in window,io=null;nr&&"documentMode"in document&&(io=document.documentMode);var I_=nr&&"TextEvent"in window&&!io,m0=nr&&(!kp||io&&8<io&&11>=io),xy=" ",Dy=!1;function g0(t,e){switch(t){case"keyup":return k_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function y0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function T_(t,e){switch(t){case"compositionend":return y0(e);case"keypress":return e.which!==32?null:(Dy=!0,xy);case"textInput":return t=e.data,t===xy&&Dy?null:t;default:return null}}function __(t,e){if(Is)return t==="compositionend"||!kp&&g0(t,e)?(t=p0(),su=Sp=Or=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var C_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!C_[t.type]:e==="textarea"}function v0(t,e,n,r){ks?Rs?Rs.push(r):Rs=[r]:ks=r,e=Yu(e,"onChange"),0<e.length&&(n=new Cc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var so=null,To=null;function N_(t){fE(t,0)}function Ac(t){var e=Wa(t);if(l0(e))return t}function Ry(t,e){if(t==="change")return e}var w0=!1;if(nr){var Gh;if(nr){var Kh="oninput"in document;if(!Kh){var Ly=document.createElement("div");Ly.setAttribute("oninput","return;"),Kh=typeof Ly.oninput=="function"}Gh=Kh}else Gh=!1;w0=Gh&&(!document.documentMode||9<document.documentMode)}function My(){so&&(so.detachEvent("onpropertychange",b0),To=so=null)}function b0(t){if(t.propertyName==="value"&&Ac(To)){var e=[];v0(e,To,t,bp(t)),f0(N_,e)}}function A_(t,e,n){t==="focusin"?(My(),so=e,To=n,so.attachEvent("onpropertychange",b0)):t==="focusout"&&My()}function P_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(To)}function x_(t,e){if(t==="click")return Ac(e)}function D_(t,e){if(t==="input"||t==="change")return Ac(e)}function O_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:O_;function _o(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hd.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Fy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uy(t,e){var n=Fy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fy(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function E0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Du(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var R_=nr&&"documentMode"in document&&11>=document.documentMode,Ts=null,Xd=null,ao=null,Zd=!1;function zy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zd||Ts==null||Ts!==Du(r)||(r=Ts,"selectionStart"in r&&Ip(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&_o(ao,r)||(ao=r,r=Yu(Xd,"onSelect"),0<r.length&&(e=new Cc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ts)))}function Si(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _s={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionrun:Si("Transition","TransitionRun"),transitionstart:Si("Transition","TransitionStart"),transitioncancel:Si("Transition","TransitionCancel"),transitionend:Si("Transition","TransitionEnd")},Wh={},k0={};nr&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Xi(t){if(Wh[t])return Wh[t];if(!_s[t])return t;var e=_s[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return Wh[t]=e[n];return t}var I0=Xi("animationend"),T0=Xi("animationiteration"),_0=Xi("animationstart"),L_=Xi("transitionrun"),M_=Xi("transitionstart"),F_=Xi("transitioncancel"),C0=Xi("transitionend"),N0=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function vn(t,e){N0.set(t,e),Yi(e,[t])}var Ou=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Qt=[],Cs=0,Tp=0;function Pc(){for(var t=Cs,e=Tp=Cs=0;e<t;){var n=Qt[e];Qt[e++]=null;var r=Qt[e];Qt[e++]=null;var i=Qt[e];Qt[e++]=null;var s=Qt[e];if(Qt[e++]=null,r!==null&&i!==null){var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}s!==0&&A0(n,i,s)}}function xc(t,e,n,r){Qt[Cs++]=t,Qt[Cs++]=e,Qt[Cs++]=n,Qt[Cs++]=r,Tp|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function _p(t,e,n,r){return xc(t,e,n,r),Ru(t)}function Zi(t,e){return xc(t,null,null,e),Ru(t)}function A0(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var i=!1,s=t.return;s!==null;)s.childLanes|=n,r=s.alternate,r!==null&&(r.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(i=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,i&&e!==null&&(i=31-Bt(n),t=s.hiddenUpdates,r=t[i],r===null?t[i]=[e]:r.push(e),e.lane=n|536870912),s):null}function Ru(t){if(50<go)throw go=0,Ef=null,Error(O(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ns={};function U_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,e,n,r){return new U_(t,e,n,r)}function Cp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yn(t,e){var n=t.alternate;return n===null?(n=Mt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function P0(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ou(t,e,n,r,i,s){var a=0;if(r=t,typeof t=="function")Cp(t)&&(a=1);else if(typeof t=="string")a=qC(t,n,_n.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case jd:return t=Mt(31,n,e,i),t.elementType=jd,t.lanes=s,t;case bs:return Di(n.children,i,s,e);case Qb:a=8,i|=24;break;case Ud:return t=Mt(12,n,e,i|2),t.elementType=Ud,t.lanes=s,t;case zd:return t=Mt(13,n,e,i),t.elementType=zd,t.lanes=s,t;case Vd:return t=Mt(19,n,e,i),t.elementType=Vd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $n:a=10;break e;case Yb:a=9;break e;case fp:a=11;break e;case pp:a=14;break e;case kr:a=16,r=null;break e}a=29,n=Error(O(130,t===null?"null":typeof t,"")),r=null}return e=Mt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Di(t,e,n,r){return t=Mt(7,t,r,e),t.lanes=n,t}function Qh(t,e,n){return t=Mt(6,t,null,e),t.lanes=n,t}function x0(t){var e=Mt(18,null,null,0);return e.stateNode=t,e}function Yh(t,e,n){return e=Mt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Vy=new WeakMap;function Zt(t,e){if(typeof t=="object"&&t!==null){var n=Vy.get(t);return n!==void 0?n:(e={value:t,source:e,stack:by(e)},Vy.set(t,e),e)}return{value:t,source:e,stack:by(e)}}var As=[],Ps=0,Lu=null,Co=0,Jt=[],Xt=0,Yr=null,kn=1,In="";function jn(t,e){As[Ps++]=Co,As[Ps++]=Lu,Lu=t,Co=e}function D0(t,e,n){Jt[Xt++]=kn,Jt[Xt++]=In,Jt[Xt++]=Yr,Yr=t;var r=kn;t=In;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,kn=1<<32-Bt(e)+i|n<<i|r,In=s+t}else kn=1<<s|n<<i|r,In=t}function Np(t){t.return!==null&&(jn(t,1),D0(t,1,0))}function Ap(t){for(;t===Lu;)Lu=As[--Ps],As[Ps]=null,Co=As[--Ps],As[Ps]=null;for(;t===Yr;)Yr=Jt[--Xt],Jt[Xt]=null,In=Jt[--Xt],Jt[Xt]=null,kn=Jt[--Xt],Jt[Xt]=null}function O0(t,e){Jt[Xt++]=kn,Jt[Xt++]=In,Jt[Xt++]=Yr,kn=e.id,In=e.overflow,Yr=t}var st=null,Ie=null,oe=!1,Ur=null,en=!1,tf=Error(O(519));function Jr(t){var e=Error(O(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(Zt(e,t)),tf}function jy(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[it]=t,e[Pt]=r,n){case"dialog":te("cancel",e),te("close",e);break;case"iframe":case"object":case"embed":te("load",e);break;case"video":case"audio":for(n=0;n<Do.length;n++)te(Do[n],e);break;case"source":te("error",e);break;case"img":case"image":case"link":te("error",e),te("load",e);break;case"details":te("toggle",e);break;case"input":te("invalid",e),u0(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":te("invalid",e);break;case"textarea":te("invalid",e),h0(e,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||mE(e.textContent,n)?(r.popover!=null&&(te("beforetoggle",e),te("toggle",e)),r.onScroll!=null&&te("scroll",e),r.onScrollEnd!=null&&te("scrollend",e),r.onClick!=null&&(e.onclick=Hn),e=!0):e=!1,e||Jr(t,!0)}function By(t){for(st=t.return;st;)switch(st.tag){case 5:case 31:case 13:en=!1;return;case 27:case 3:en=!0;return;default:st=st.return}}function cs(t){if(t!==st)return!1;if(!oe)return By(t),oe=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Cf(t.type,t.memoizedProps)),n=!n),n&&Ie&&Jr(t),By(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));Ie=Nv(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));Ie=Nv(t)}else e===27?(e=Ie,ui(t.type)?(t=xf,xf=null,Ie=t):Ie=e):Ie=st?nn(t.stateNode.nextSibling):null;return!0}function Ui(){Ie=st=null,oe=!1}function Jh(){var t=Ur;return t!==null&&(Tt===null?Tt=t:Tt.push.apply(Tt,t),Ur=null),t}function No(t){Ur===null?Ur=[t]:Ur.push(t)}var nf=Rn(null),es=null,Gn=null;function Tr(t,e,n){be(nf,e._currentValue),e._currentValue=n}function Jn(t){t._currentValue=nf.current,tt(nf)}function rf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function sf(t,e,n,r){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){var a=i.child;s=s.firstContext;e:for(;s!==null;){var l=s;s=i;for(var u=0;u<e.length;u++)if(l.context===e[u]){s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),rf(s.return,n,t),r||(a=null);break e}s=l.next}}else if(i.tag===18){if(a=i.return,a===null)throw Error(O(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),rf(a,n,t),a=null}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}}function ca(t,e,n,r){t=null;for(var i=e,s=!1;i!==null;){if(!s){if(i.flags&524288)s=!0;else if(i.flags&262144)break}if(i.tag===10){var a=i.alternate;if(a===null)throw Error(O(387));if(a=a.memoizedProps,a!==null){var l=i.type;Ht(i.pendingProps.value,a.value)||(t!==null?t.push(l):t=[l])}}else if(i===Nu.current){if(a=i.alternate,a===null)throw Error(O(387));a.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ro):t=[Ro])}i=i.return}t!==null&&sf(e,t,n,r),e.flags|=262144}function Mu(t){for(t=t.firstContext;t!==null;){if(!Ht(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zi(t){es=t,Gn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ot(t){return R0(es,t)}function zl(t,e){return es===null&&zi(t),R0(t,e)}function R0(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Gn===null){if(t===null)throw Error(O(308));Gn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gn=Gn.next=e;return n}var z_=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},V_=Qe.unstable_scheduleCallback,j_=Qe.unstable_NormalPriority,Be={$$typeof:$n,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pp(){return{controller:new z_,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&V_(j_,function(){t.controller.abort()})}var oo=null,af=0,Ws=0,Ls=null;function B_(t,e){if(oo===null){var n=oo=[];af=0,Ws=tm(),Ls={status:"pending",value:void 0,then:function(r){n.push(r)}}}return af++,e.then(qy,qy),e}function qy(){if(--af===0&&oo!==null){Ls!==null&&(Ls.status="fulfilled");var t=oo;oo=null,Ws=0,Ls=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function q_(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var i=0;i<n.length;i++)(0,n[i])(e)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var $y=G.S;G.S=function(t,e){WS=Vt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&B_(t,e),$y!==null&&$y(t,e)};var Oi=Rn(null);function xp(){var t=Oi.current;return t!==null?t:ye.pooledCache}function lu(t,e){e===null?be(Oi,Oi.current):be(Oi,e.pool)}function L0(){var t=xp();return t===null?null:{parent:Be._currentValue,pool:t}}var ha=Error(O(460)),Dp=Error(O(474)),Dc=Error(O(542)),Fu={then:function(){}};function Hy(t){return t=t.status,t==="fulfilled"||t==="rejected"}function M0(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Hn,Hn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ky(t),t;default:if(typeof e.status=="string")e.then(Hn,Hn);else{if(t=ye,t!==null&&100<t.shellSuspendCounter)throw Error(O(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=r}},function(r){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ky(t),t}throw Ri=e,ha}}function Ti(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ri=n,ha):n}}var Ri=null;function Gy(){if(Ri===null)throw Error(O(459));var t=Ri;return Ri=null,t}function Ky(t){if(t===ha||t===Dc)throw Error(O(483))}var Ms=null,Ao=0;function Vl(t){var e=Ao;return Ao+=1,Ms===null&&(Ms=[]),M0(Ms,t,e)}function ja(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function jl(t,e){throw e.$$typeof===AT?Error(O(525)):(t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function F0(t){function e(I,S){if(t){var _=I.deletions;_===null?(I.deletions=[S],I.flags|=16):_.push(S)}}function n(I,S){if(!t)return null;for(;S!==null;)e(I,S),S=S.sibling;return null}function r(I){for(var S=new Map;I!==null;)I.key!==null?S.set(I.key,I):S.set(I.index,I),I=I.sibling;return S}function i(I,S){return I=Yn(I,S),I.index=0,I.sibling=null,I}function s(I,S,_){return I.index=_,t?(_=I.alternate,_!==null?(_=_.index,_<S?(I.flags|=67108866,S):_):(I.flags|=67108866,S)):(I.flags|=1048576,S)}function a(I){return t&&I.alternate===null&&(I.flags|=67108866),I}function l(I,S,_,x){return S===null||S.tag!==6?(S=Qh(_,I.mode,x),S.return=I,S):(S=i(S,_),S.return=I,S)}function u(I,S,_,x){var U=_.type;return U===bs?f(I,S,_.props.children,x,_.key):S!==null&&(S.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===kr&&Ti(U)===S.type)?(S=i(S,_.props),ja(S,_),S.return=I,S):(S=ou(_.type,_.key,_.props,null,I.mode,x),ja(S,_),S.return=I,S)}function h(I,S,_,x){return S===null||S.tag!==4||S.stateNode.containerInfo!==_.containerInfo||S.stateNode.implementation!==_.implementation?(S=Yh(_,I.mode,x),S.return=I,S):(S=i(S,_.children||[]),S.return=I,S)}function f(I,S,_,x,U){return S===null||S.tag!==7?(S=Di(_,I.mode,x,U),S.return=I,S):(S=i(S,_),S.return=I,S)}function p(I,S,_){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Qh(""+S,I.mode,_),S.return=I,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ol:return _=ou(S.type,S.key,S.props,null,I.mode,_),ja(_,S),_.return=I,_;case Ga:return S=Yh(S,I.mode,_),S.return=I,S;case kr:return S=Ti(S),p(I,S,_)}if(Ka(S)||Ua(S))return S=Di(S,I.mode,_,null),S.return=I,S;if(typeof S.then=="function")return p(I,Vl(S),_);if(S.$$typeof===$n)return p(I,zl(I,S),_);jl(I,S)}return null}function m(I,S,_,x){var U=S!==null?S.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return U!==null?null:l(I,S,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ol:return _.key===U?u(I,S,_,x):null;case Ga:return _.key===U?h(I,S,_,x):null;case kr:return _=Ti(_),m(I,S,_,x)}if(Ka(_)||Ua(_))return U!==null?null:f(I,S,_,x,null);if(typeof _.then=="function")return m(I,S,Vl(_),x);if(_.$$typeof===$n)return m(I,S,zl(I,_),x);jl(I,_)}return null}function b(I,S,_,x,U){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return I=I.get(_)||null,l(S,I,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ol:return I=I.get(x.key===null?_:x.key)||null,u(S,I,x,U);case Ga:return I=I.get(x.key===null?_:x.key)||null,h(S,I,x,U);case kr:return x=Ti(x),b(I,S,_,x,U)}if(Ka(x)||Ua(x))return I=I.get(_)||null,f(S,I,x,U,null);if(typeof x.then=="function")return b(I,S,_,Vl(x),U);if(x.$$typeof===$n)return b(I,S,_,zl(S,x),U);jl(S,x)}return null}function A(I,S,_,x){for(var U=null,B=null,w=S,y=S=0,v=null;w!==null&&y<_.length;y++){w.index>y?(v=w,w=null):v=w.sibling;var k=m(I,w,_[y],x);if(k===null){w===null&&(w=v);break}t&&w&&k.alternate===null&&e(I,w),S=s(k,S,y),B===null?U=k:B.sibling=k,B=k,w=v}if(y===_.length)return n(I,w),oe&&jn(I,y),U;if(w===null){for(;y<_.length;y++)w=p(I,_[y],x),w!==null&&(S=s(w,S,y),B===null?U=w:B.sibling=w,B=w);return oe&&jn(I,y),U}for(w=r(w);y<_.length;y++)v=b(w,I,y,_[y],x),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?y:v.key),S=s(v,S,y),B===null?U=v:B.sibling=v,B=v);return t&&w.forEach(function(T){return e(I,T)}),oe&&jn(I,y),U}function L(I,S,_,x){if(_==null)throw Error(O(151));for(var U=null,B=null,w=S,y=S=0,v=null,k=_.next();w!==null&&!k.done;y++,k=_.next()){w.index>y?(v=w,w=null):v=w.sibling;var T=m(I,w,k.value,x);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(I,w),S=s(T,S,y),B===null?U=T:B.sibling=T,B=T,w=v}if(k.done)return n(I,w),oe&&jn(I,y),U;if(w===null){for(;!k.done;y++,k=_.next())k=p(I,k.value,x),k!==null&&(S=s(k,S,y),B===null?U=k:B.sibling=k,B=k);return oe&&jn(I,y),U}for(w=r(w);!k.done;y++,k=_.next())k=b(w,I,y,k.value,x),k!==null&&(t&&k.alternate!==null&&w.delete(k.key===null?y:k.key),S=s(k,S,y),B===null?U=k:B.sibling=k,B=k);return t&&w.forEach(function(C){return e(I,C)}),oe&&jn(I,y),U}function M(I,S,_,x){if(typeof _=="object"&&_!==null&&_.type===bs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ol:e:{for(var U=_.key;S!==null;){if(S.key===U){if(U=_.type,U===bs){if(S.tag===7){n(I,S.sibling),x=i(S,_.props.children),x.return=I,I=x;break e}}else if(S.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===kr&&Ti(U)===S.type){n(I,S.sibling),x=i(S,_.props),ja(x,_),x.return=I,I=x;break e}n(I,S);break}else e(I,S);S=S.sibling}_.type===bs?(x=Di(_.props.children,I.mode,x,_.key),x.return=I,I=x):(x=ou(_.type,_.key,_.props,null,I.mode,x),ja(x,_),x.return=I,I=x)}return a(I);case Ga:e:{for(U=_.key;S!==null;){if(S.key===U)if(S.tag===4&&S.stateNode.containerInfo===_.containerInfo&&S.stateNode.implementation===_.implementation){n(I,S.sibling),x=i(S,_.children||[]),x.return=I,I=x;break e}else{n(I,S);break}else e(I,S);S=S.sibling}x=Yh(_,I.mode,x),x.return=I,I=x}return a(I);case kr:return _=Ti(_),M(I,S,_,x)}if(Ka(_))return A(I,S,_,x);if(Ua(_)){if(U=Ua(_),typeof U!="function")throw Error(O(150));return _=U.call(_),L(I,S,_,x)}if(typeof _.then=="function")return M(I,S,Vl(_),x);if(_.$$typeof===$n)return M(I,S,zl(I,_),x);jl(I,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,S!==null&&S.tag===6?(n(I,S.sibling),x=i(S,_),x.return=I,I=x):(n(I,S),x=Qh(_,I.mode,x),x.return=I,I=x),a(I)):n(I,S)}return function(I,S,_,x){try{Ao=0;var U=M(I,S,_,x);return Ms=null,U}catch(w){if(w===ha||w===Dc)throw w;var B=Mt(29,w,null,I.mode);return B.lanes=x,B.return=I,B}finally{}}}var Vi=F0(!0),U0=F0(!1),Ir=!1;function Op(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function zr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,e=Ru(t),A0(t,null,n),e}return xc(t,r,e,n),Ru(t)}function lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}function Xh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var lf=!1;function uo(){if(lf){var t=Ls;if(t!==null)throw t}}function co(t,e,n,r){lf=!1;var i=t.updateQueue;Ir=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;a=0,f=h=u=null,l=s;do{var m=l.lane&-536870913,b=m!==l.lane;if(b?(ae&m)===m:(r&m)===m){m!==0&&m===Ws&&(lf=!0),f!==null&&(f=f.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var A=t,L=l;m=e;var M=n;switch(L.tag){case 1:if(A=L.payload,typeof A=="function"){p=A.call(M,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=L.payload,m=typeof A=="function"?A.call(M,p,m):A,m==null)break e;p=Ce({},p,m);break e;case 2:Ir=!0}}m=l.callback,m!==null&&(t.flags|=64,b&&(t.flags|=8192),b=i.callbacks,b===null?i.callbacks=[m]:b.push(m))}else b={lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=b,u=p):f=f.next=b,a|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;b=l,l=b.next,b.next=null,i.lastBaseUpdate=b,i.shared.pending=null}}while(!0);f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,s===null&&(i.shared.lanes=0),Zr|=a,t.lanes=a,t.memoizedState=p}}function z0(t,e){if(typeof t!="function")throw Error(O(191,t));t.call(e)}function V0(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)z0(n[t],e)}var Qs=Rn(null),Uu=Rn(0);function Wy(t,e){t=ar,be(Uu,t),be(Qs,e),ar=t|e.baseLanes}function uf(){be(Uu,ar),be(Qs,Qs.current)}function Rp(){ar=Uu.current,tt(Qs),tt(Uu)}var Gt=Rn(null),mn=null;function _r(t){var e=t.alternate;be(Me,Me.current&1),be(Gt,t),mn===null&&(e===null||Qs.current!==null||e.memoizedState!==null)&&(mn=t)}function cf(t){be(Me,Me.current),be(Gt,t),mn===null&&(mn=t)}function j0(t){t.tag===22?(be(Me,Me.current),be(Gt,t),mn===null&&(mn=t)):Cr()}function Cr(){be(Me,Me.current),be(Gt,Gt.current)}function Lt(t){tt(Gt),mn===t&&(mn=null),tt(Me)}var Me=Rn(0);function zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Af(n)||Pf(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rr=0,X=null,ge=null,Ve=null,Vu=!1,Fs=!1,ji=!1,ju=0,Po=0,Us=null,$_=0;function De(){throw Error(O(321))}function Lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function Mp(t,e,n,r,i,s){return rr=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,G.H=t===null||t.memoizedState===null?vS:Kp,ji=!1,s=n(r,i),ji=!1,Fs&&(s=q0(e,n,r,i)),B0(t),s}function B0(t){G.H=xo;var e=ge!==null&&ge.next!==null;if(rr=0,Ve=ge=X=null,Vu=!1,Po=0,Us=null,e)throw Error(O(300));t===null||$e||(t=t.dependencies,t!==null&&Mu(t)&&($e=!0))}function q0(t,e,n,r){X=t;var i=0;do{if(Fs&&(Us=null),Po=0,Fs=!1,25<=i)throw Error(O(301));if(i+=1,Ve=ge=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}G.H=wS,s=e(n,r)}while(Fs);return s}function H_(){var t=G.H,e=t.useState()[0];return e=typeof e.then=="function"?tl(e):e,t=t.useState()[0],(ge!==null?ge.memoizedState:null)!==t&&(X.flags|=1024),e}function Fp(){var t=ju!==0;return ju=0,t}function Up(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function zp(t){if(Vu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Vu=!1}rr=0,Ve=ge=X=null,Fs=!1,Po=ju=0,Us=null}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?X.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Fe(){if(ge===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Ve===null?X.memoizedState:Ve.next;if(e!==null)Ve=e,ge=t;else{if(t===null)throw X.alternate===null?Error(O(467)):Error(O(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ve===null?X.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function tl(t){var e=Po;return Po+=1,Us===null&&(Us=[]),t=M0(Us,t,e),e=X,(Ve===null?e.memoizedState:Ve.next)===null&&(e=e.alternate,G.H=e===null||e.memoizedState===null?vS:Kp),t}function Rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return tl(t);if(t.$$typeof===$n)return ot(t)}throw Error(O(438,String(t)))}function Vp(t){var e=null,n=X.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Oc(),X.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=PT;return e.index++,n}function ir(t,e){return typeof e=="function"?e(t):e}function uu(t){var e=Fe();return jp(e,ge,t)}function jp(t,e,n){var r=t.queue;if(r===null)throw Error(O(311));r.lastRenderedReducer=n;var i=t.baseQueue,s=r.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}e.baseQueue=i=s,r.pending=null}if(s=t.baseState,i===null)t.memoizedState=s;else{e=i.next;var l=a=null,u=null,h=e,f=!1;do{var p=h.lane&-536870913;if(p!==h.lane?(ae&p)===p:(rr&p)===p){var m=h.revertLane;if(m===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),p===Ws&&(f=!0);else if((rr&m)===m){h=h.next,m===Ws&&(f=!0);continue}else p={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=p,a=s):u=u.next=p,X.lanes|=m,Zr|=m;p=h.action,ji&&n(s,p),s=h.hasEagerState?h.eagerState:n(s,p)}else m={lane:p,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(l=u=m,a=s):u=u.next=m,X.lanes|=p,Zr|=p;h=h.next}while(h!==null&&h!==e);if(u===null?a=s:u.next=l,!Ht(s,t.memoizedState)&&($e=!0,f&&(n=Ls,n!==null)))throw n;t.memoizedState=s,t.baseState=a,t.baseQueue=u,r.lastRenderedState=s}return i===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Zh(t){var e=Fe(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);Ht(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $0(t,e,n){var r=X,i=Fe(),s=oe;if(s){if(n===void 0)throw Error(O(407));n=n()}else n=e();var a=!Ht((ge||i).memoizedState,n);if(a&&(i.memoizedState=n,$e=!0),i=i.queue,Bp(K0.bind(null,r,i,t),[t]),i.getSnapshot!==e||a||Ve!==null&&Ve.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},G0.bind(null,r,i,n,e),null),ye===null)throw Error(O(349));s||rr&127||H0(r,e,n)}return n}function H0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e=Oc(),X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function G0(t,e,n,r){e.value=n,e.getSnapshot=r,W0(e)&&Q0(t)}function K0(t,e,n){return n(function(){W0(e)&&Q0(t)})}function W0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Q0(t){var e=Zi(t,2);e!==null&&Nt(e,t,2)}function hf(t){var e=vt();if(typeof t=="function"){var n=t;if(t=n(),ji){Dr(!0);try{n()}finally{Dr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:t},e}function Y0(t,e,n,r){return t.baseState=n,jp(t,ge,typeof r=="function"?r:ir)}function G_(t,e,n,r,i){if(Mc(t))throw Error(O(485));if(t=e.action,t!==null){var s={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};G.T!==null?n(!0):s.isTransition=!1,r(s),n=e.pending,n===null?(s.next=e.pending=s,J0(e,s)):(s.next=n.next,e.pending=n.next=s)}}function J0(t,e){var n=e.action,r=e.payload,i=t.state;if(e.isTransition){var s=G.T,a={};G.T=a;try{var l=n(i,r),u=G.S;u!==null&&u(a,l),Qy(t,e,l)}catch(h){df(t,e,h)}finally{s!==null&&a.types!==null&&(s.types=a.types),G.T=s}}else try{s=n(i,r),Qy(t,e,s)}catch(h){df(t,e,h)}}function Qy(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Yy(t,e,r)},function(r){return df(t,e,r)}):Yy(t,e,n)}function Yy(t,e,n){e.status="fulfilled",e.value=n,X0(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,J0(t,n)))}function df(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,X0(e),e=e.next;while(e!==r)}t.action=null}function X0(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Z0(t,e){return e}function Jy(t,e){if(oe){var n=ye.formState;if(n!==null){e:{var r=X;if(oe){if(Ie){t:{for(var i=Ie,s=en;i.nodeType!==8;){if(!s){i=null;break t}if(i=nn(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){Ie=nn(i.nextSibling),r=i.data==="F!";break e}}Jr(r)}r=!1}r&&(e=n[0])}}return n=vt(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Z0,lastRenderedState:e},n.queue=r,n=mS.bind(null,X,r),r.dispatch=n,r=hf(!1),s=Gp.bind(null,X,!1,r.queue),r=vt(),i={state:e,dispatch:null,action:t,pending:null},r.queue=i,n=G_.bind(null,X,i,s,n),i.dispatch=n,r.memoizedState=t,[e,n,!1]}function Xy(t){var e=Fe();return eS(e,ge,t)}function eS(t,e,n){if(e=jp(t,e,Z0)[0],t=uu(ir)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=tl(e)}catch(a){throw a===ha?Dc:a}else r=e;e=Fe();var i=e.queue,s=i.dispatch;return n!==e.memoizedState&&(X.flags|=2048,Ys(9,{destroy:void 0},K_.bind(null,i,n),null)),[r,s,t]}function K_(t,e){t.action=e}function Zy(t){var e=Fe(),n=ge;if(n!==null)return eS(e,n,t);Fe(),e=e.memoizedState,n=Fe();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Ys(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=X.updateQueue,e===null&&(e=Oc(),X.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function tS(){return Fe().memoizedState}function cu(t,e,n,r){var i=vt();X.flags|=t,i.memoizedState=Ys(1|e,{destroy:void 0},n,r===void 0?null:r)}function Lc(t,e,n,r){var i=Fe();r=r===void 0?null:r;var s=i.memoizedState.inst;ge!==null&&r!==null&&Lp(r,ge.memoizedState.deps)?i.memoizedState=Ys(e,s,n,r):(X.flags|=t,i.memoizedState=Ys(1|e,s,n,r))}function ev(t,e){cu(8390656,8,t,e)}function Bp(t,e){Lc(2048,8,t,e)}function W_(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=Oc(),X.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function nS(t){var e=Fe().memoizedState;return W_({ref:e,nextImpl:t}),function(){if(ce&2)throw Error(O(440));return e.impl.apply(void 0,arguments)}}function rS(t,e){return Lc(4,2,t,e)}function iS(t,e){return Lc(4,4,t,e)}function sS(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aS(t,e,n){n=n!=null?n.concat([t]):null,Lc(4,4,sS.bind(null,e,t),n)}function qp(){}function oS(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&Lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function lS(t,e){var n=Fe();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&Lp(e,r[1]))return r[0];if(r=t(),ji){Dr(!0);try{t()}finally{Dr(!1)}}return n.memoizedState=[r,e],r}function $p(t,e,n){return n===void 0||rr&1073741824&&!(ae&261930)?t.memoizedState=e:(t.memoizedState=n,t=YS(),X.lanes|=t,Zr|=t,n)}function uS(t,e,n,r){return Ht(n,e)?n:Qs.current!==null?(t=$p(t,n,r),Ht(t,e)||($e=!0),t):!(rr&42)||rr&1073741824&&!(ae&261930)?($e=!0,t.memoizedState=n):(t=YS(),X.lanes|=t,Zr|=t,e)}function cS(t,e,n,r,i){var s=he.p;he.p=s!==0&&8>s?s:8;var a=G.T,l={};G.T=l,Gp(t,!1,e,n);try{var u=i(),h=G.S;if(h!==null&&h(l,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=q_(u,r);ho(t,e,f,qt(t))}else ho(t,e,r,qt(t))}catch(p){ho(t,e,{then:function(){},status:"rejected",reason:p},qt())}finally{he.p=s,a!==null&&l.types!==null&&(a.types=l.types),G.T=a}}function Q_(){}function ff(t,e,n,r){if(t.tag!==5)throw Error(O(476));var i=hS(t).queue;cS(t,i,e,xi,n===null?Q_:function(){return dS(t),n(r)})}function hS(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:xi,baseState:xi,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:xi},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function dS(t){var e=hS(t);e.next===null&&(e=t.alternate.memoizedState),ho(t,e.next.queue,{},qt())}function Hp(){return ot(Ro)}function fS(){return Fe().memoizedState}function pS(){return Fe().memoizedState}function Y_(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=qt();t=zr(n);var r=Vr(e,t,n);r!==null&&(Nt(r,e,n),lo(r,e,n)),e={cache:Pp()},t.payload=e;return}e=e.return}}function J_(t,e,n){var r=qt();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Mc(t)?gS(e,n):(n=_p(t,e,n,r),n!==null&&(Nt(n,t,r),yS(n,e,r)))}function mS(t,e,n){var r=qt();ho(t,e,n,r)}function ho(t,e,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mc(t))gS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ht(l,a))return xc(t,e,i,0),ye===null&&Pc(),!1}catch{}finally{}if(n=_p(t,e,i,r),n!==null)return Nt(n,t,r),yS(n,e,r),!0}return!1}function Gp(t,e,n,r){if(r={lane:2,revertLane:tm(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Mc(t)){if(e)throw Error(O(479))}else e=_p(t,n,r,2),e!==null&&Nt(e,t,2)}function Mc(t){var e=t.alternate;return t===X||e!==null&&e===X}function gS(t,e){Fs=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function yS(t,e,n){if(n&4194048){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,n0(t,n)}}var xo={readContext:ot,use:Rc,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};xo.useEffectEvent=De;var vS={readContext:ot,use:Rc,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:ot,useEffect:ev,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,cu(4194308,4,sS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){cu(4,2,t,e)},useMemo:function(t,e){var n=vt();e=e===void 0?null:e;var r=t();if(ji){Dr(!0);try{t()}finally{Dr(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=vt();if(n!==void 0){var i=n(e);if(ji){Dr(!0);try{n(e)}finally{Dr(!1)}}}else i=e;return r.memoizedState=r.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},r.queue=t,t=t.dispatch=J_.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:function(t){t=hf(t);var e=t.queue,n=mS.bind(null,X,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:qp,useDeferredValue:function(t,e){var n=vt();return $p(n,t,e)},useTransition:function(){var t=hf(!1);return t=cS.bind(null,X,t.queue,!0,!1),vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=X,i=vt();if(oe){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),ye===null)throw Error(O(349));ae&127||H0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ev(K0.bind(null,r,s,t),[t]),r.flags|=2048,Ys(9,{destroy:void 0},G0.bind(null,r,s,n,e),null),n},useId:function(){var t=vt(),e=ye.identifierPrefix;if(oe){var n=In,r=kn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ju++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=$_++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Hp,useFormState:Jy,useActionState:Jy,useOptimistic:function(t){var e=vt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Gp.bind(null,X,!0,n),n.dispatch=e,[t,e]},useMemoCache:Vp,useCacheRefresh:function(){return vt().memoizedState=Y_.bind(null,X)},useEffectEvent:function(t){var e=vt(),n={impl:t};return e.memoizedState=n,function(){if(ce&2)throw Error(O(440));return n.impl.apply(void 0,arguments)}}},Kp={readContext:ot,use:Rc,useCallback:oS,useContext:ot,useEffect:Bp,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:uu,useRef:tS,useState:function(){return uu(ir)},useDebugValue:qp,useDeferredValue:function(t,e){var n=Fe();return uS(n,ge.memoizedState,t,e)},useTransition:function(){var t=uu(ir)[0],e=Fe().memoizedState;return[typeof t=="boolean"?t:tl(t),e]},useSyncExternalStore:$0,useId:fS,useHostTransitionStatus:Hp,useFormState:Xy,useActionState:Xy,useOptimistic:function(t,e){var n=Fe();return Y0(n,ge,t,e)},useMemoCache:Vp,useCacheRefresh:pS};Kp.useEffectEvent=nS;var wS={readContext:ot,use:Rc,useCallback:oS,useContext:ot,useEffect:Bp,useImperativeHandle:aS,useInsertionEffect:rS,useLayoutEffect:iS,useMemo:lS,useReducer:Zh,useRef:tS,useState:function(){return Zh(ir)},useDebugValue:qp,useDeferredValue:function(t,e){var n=Fe();return ge===null?$p(n,t,e):uS(n,ge.memoizedState,t,e)},useTransition:function(){var t=Zh(ir)[0],e=Fe().memoizedState;return[typeof t=="boolean"?t:tl(t),e]},useSyncExternalStore:$0,useId:fS,useHostTransitionStatus:Hp,useFormState:Zy,useActionState:Zy,useOptimistic:function(t,e){var n=Fe();return ge!==null?Y0(n,ge,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Vp,useCacheRefresh:pS};wS.useEffectEvent=nS;function ed(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pf={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=qt(),i=zr(r);i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,r),e!==null&&(Nt(e,t,r),lo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=qt(),i=zr(r);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,r),e!==null&&(Nt(e,t,r),lo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),r=zr(n);r.tag=2,e!=null&&(r.callback=e),e=Vr(t,r,n),e!==null&&(Nt(e,t,n),lo(e,t,n))}};function tv(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pf.enqueueReplaceState(e,e.state,null)}function Bi(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=Ce({},n));for(var i in t)n[i]===void 0&&(n[i]=t[i])}return n}function bS(t){Ou(t)}function SS(t){console.error(t)}function ES(t){Ou(t)}function Bu(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function rv(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function mf(t,e,n){return n=zr(n),n.tag=3,n.payload={element:null},n.callback=function(){Bu(t,e)},n}function kS(t){return t=zr(t),t.tag=3,t}function IS(t,e,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var s=r.value;t.payload=function(){return i(s)},t.callback=function(){rv(e,n,r)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){rv(e,n,r),typeof i!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})})}function X_(t,e,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&ca(e,n,i,!0),n=Gt.current,n!==null){switch(n.tag){case 31:case 13:return mn===null?Ku():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Fu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),hd(t,r,i)),!1;case 22:return n.flags|=65536,r===Fu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),hd(t,r,i)),!1}throw Error(O(435,n.tag))}return hd(t,r,i),Ku(),!1}if(oe)return e=Gt.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=i,r!==tf&&(t=Error(O(422),{cause:r}),No(Zt(t,n)))):(r!==tf&&(e=Error(O(423),{cause:r}),No(Zt(e,n))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,r=Zt(r,n),i=mf(t.stateNode,r,i),Xh(t,i),Oe!==4&&(Oe=2)),!1;var s=Error(O(520),{cause:r});if(s=Zt(s,n),mo===null?mo=[s]:mo.push(s),Oe!==4&&(Oe=2),e===null)return!0;r=Zt(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=i&-i,n.lanes|=t,t=mf(n.stateNode,r,t),Xh(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(jr===null||!jr.has(s))))return n.flags|=65536,i&=-i,n.lanes|=i,i=kS(i),IS(i,t,n,r),Xh(n,i),!1}n=n.return}while(n!==null);return!1}var Wp=Error(O(461)),$e=!1;function nt(t,e,n,r){e.child=t===null?U0(e,null,n,r):Vi(e,t.child,n,r)}function iv(t,e,n,r,i){n=n.render;var s=e.ref;if("ref"in r){var a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}else a=r;return zi(e),r=Mp(t,e,n,a,s,i),l=Fp(),t!==null&&!$e?(Up(t,e,i),sr(t,e,i)):(oe&&l&&Np(e),e.flags|=1,nt(t,e,r,i),e.child)}function sv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cp(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,TS(t,e,s,r,i)):(t=ou(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!Qp(t,i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(a,r)&&t.ref===e.ref)return sr(t,e,i)}return e.flags|=1,t=Yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function TS(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,Qp(t,i))t.flags&131072&&($e=!0);else return e.lanes=t.lanes,sr(t,e,i)}return gf(t,e,n,r,i)}function _S(t,e,n,r){var i=r.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(r=e.child=t.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~s}else r=0,e.child=null;return av(t,e,s,n,r)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&lu(e,s!==null?s.cachePool:null),s!==null?Wy(e,s):uf(),j0(e);else return r=e.lanes=536870912,av(t,e,s!==null?s.baseLanes|n:n,n,r)}else s!==null?(lu(e,s.cachePool),Wy(e,s),Cr(),e.memoizedState=null):(t!==null&&lu(e,null),uf(),Cr());return nt(t,e,i,n),e.child}function Qa(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function av(t,e,n,r,i){var s=xp();return s=s===null?null:{parent:Be._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&lu(e,null),uf(),j0(e),t!==null&&ca(t,e,r,!0),e.childLanes=i,null}function hu(t,e){return e=qu({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function ov(t,e,n){return Vi(e,t.child,null,n),t=hu(e,e.pendingProps),t.flags|=2,Lt(e),e.memoizedState=null,t}function Z_(t,e,n){var r=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(oe){if(r.mode==="hidden")return t=hu(e,r),e.lanes=536870912,Qa(null,t);if(cf(e),(t=Ie)?(t=vE(t,en),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:kn,overflow:In}:null,retryLane:536870912,hydrationErrors:null},n=x0(t),n.return=e,e.child=n,st=e,Ie=null)):t=null,t===null)throw Jr(e);return e.lanes=536870912,null}return hu(e,r)}var s=t.memoizedState;if(s!==null){var a=s.dehydrated;if(cf(e),i)if(e.flags&256)e.flags&=-257,e=ov(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(O(558));else if($e||ca(t,e,n,!1),i=(n&t.childLanes)!==0,$e||i){if(r=ye,r!==null&&(a=r0(r,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,Zi(t,a),Nt(r,t,a),Wp;Ku(),e=ov(t,e,n)}else t=s.treeContext,Ie=nn(a.nextSibling),st=e,oe=!0,Ur=null,en=!1,t!==null&&O0(e,t),e=hu(e,r),e.flags|=4096;return e}return t=Yn(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function du(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(O(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function gf(t,e,n,r,i){return zi(e),n=Mp(t,e,n,r,void 0,i),r=Fp(),t!==null&&!$e?(Up(t,e,i),sr(t,e,i)):(oe&&r&&Np(e),e.flags|=1,nt(t,e,n,i),e.child)}function lv(t,e,n,r,i,s){return zi(e),e.updateQueue=null,n=q0(e,r,n,i),B0(t),r=Fp(),t!==null&&!$e?(Up(t,e,s),sr(t,e,s)):(oe&&r&&Np(e),e.flags|=1,nt(t,e,n,s),e.child)}function uv(t,e,n,r,i){if(zi(e),e.stateNode===null){var s=Ns,a=n.contextType;typeof a=="object"&&a!==null&&(s=ot(a)),s=new n(r,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=pf,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=r,s.state=e.memoizedState,s.refs={},Op(e),a=n.contextType,s.context=typeof a=="object"&&a!==null?ot(a):Ns,s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(ed(e,n,a,r),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&pf.enqueueReplaceState(s,s.state,null),co(e,r,s,i),uo(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){s=e.stateNode;var l=e.memoizedProps,u=Bi(n,l);s.props=u;var h=s.context,f=n.contextType;a=Ns,typeof f=="object"&&f!==null&&(a=ot(f));var p=n.getDerivedStateFromProps;f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function",l=e.pendingProps!==l,f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l||h!==a)&&nv(e,s,r,a),Ir=!1;var m=e.memoizedState;s.state=m,co(e,r,s,i),uo(),h=e.memoizedState,l||m!==h||Ir?(typeof p=="function"&&(ed(e,n,p,r),h=e.memoizedState),(u=Ir||tv(e,n,u,r,m,h,a))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=h),s.props=r,s.state=h,s.context=a,r=u):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,of(t,e),a=e.memoizedProps,f=Bi(n,a),s.props=f,p=e.pendingProps,m=s.context,h=n.contextType,u=Ns,typeof h=="object"&&h!==null&&(u=ot(h)),l=n.getDerivedStateFromProps,(h=typeof l=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||m!==u)&&nv(e,s,r,u),Ir=!1,m=e.memoizedState,s.state=m,co(e,r,s,i),uo();var b=e.memoizedState;a!==p||m!==b||Ir||t!==null&&t.dependencies!==null&&Mu(t.dependencies)?(typeof l=="function"&&(ed(e,n,l,r),b=e.memoizedState),(f=Ir||tv(e,n,f,r,m,b,u)||t!==null&&t.dependencies!==null&&Mu(t.dependencies))?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,b,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,b,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=b),s.props=r,s.state=b,s.context=u,r=f):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return s=r,du(t,e),r=(e.flags&128)!==0,s||r?(s=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&r?(e.child=Vi(e,t.child,null,i),e.child=Vi(e,null,n,i)):nt(t,e,n,i),e.memoizedState=s.state,t=e.child):t=sr(t,e,i),t}function cv(t,e,n,r){return Ui(),e.flags|=256,nt(t,e,n,r),e.child}var td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nd(t){return{baseLanes:t,cachePool:L0()}}function rd(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Ut),t}function CS(t,e,n){var r=e.pendingProps,i=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(Me.current&2)!==0),a&&(i=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(oe){if(i?_r(e):Cr(),(t=Ie)?(t=vE(t,en),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Yr!==null?{id:kn,overflow:In}:null,retryLane:536870912,hydrationErrors:null},n=x0(t),n.return=e,e.child=n,st=e,Ie=null)):t=null,t===null)throw Jr(e);return Pf(t)?e.lanes=32:e.lanes=536870912,null}var l=r.children;return r=r.fallback,i?(Cr(),i=e.mode,l=qu({mode:"hidden",children:l},i),r=Di(r,i,n,null),l.return=e,r.return=e,l.sibling=r,e.child=l,r=e.child,r.memoizedState=nd(n),r.childLanes=rd(t,a,n),e.memoizedState=td,Qa(null,r)):(_r(e),yf(e,l))}var u=t.memoizedState;if(u!==null&&(l=u.dehydrated,l!==null)){if(s)e.flags&256?(_r(e),e.flags&=-257,e=id(t,e,n)):e.memoizedState!==null?(Cr(),e.child=t.child,e.flags|=128,e=null):(Cr(),l=r.fallback,i=e.mode,r=qu({mode:"visible",children:r.children},i),l=Di(l,i,n,null),l.flags|=2,r.return=e,l.return=e,r.sibling=l,e.child=r,Vi(e,t.child,null,n),r=e.child,r.memoizedState=nd(n),r.childLanes=rd(t,a,n),e.memoizedState=td,e=Qa(null,r));else if(_r(e),Pf(l)){if(a=l.nextSibling&&l.nextSibling.dataset,a)var h=a.dgst;a=h,r=Error(O(419)),r.stack="",r.digest=a,No({value:r,source:null,stack:null}),e=id(t,e,n)}else if($e||ca(t,e,n,!1),a=(n&t.childLanes)!==0,$e||a){if(a=ye,a!==null&&(r=r0(a,n),r!==0&&r!==u.retryLane))throw u.retryLane=r,Zi(t,r),Nt(a,t,r),Wp;Af(l)||Ku(),e=id(t,e,n)}else Af(l)?(e.flags|=192,e.child=t.child,e=null):(t=u.treeContext,Ie=nn(l.nextSibling),st=e,oe=!0,Ur=null,en=!1,t!==null&&O0(e,t),e=yf(e,r.children),e.flags|=4096);return e}return i?(Cr(),l=r.fallback,i=e.mode,u=t.child,h=u.sibling,r=Yn(u,{mode:"hidden",children:r.children}),r.subtreeFlags=u.subtreeFlags&65011712,h!==null?l=Yn(h,l):(l=Di(l,i,n,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Qa(null,r),r=e.child,l=t.child.memoizedState,l===null?l=nd(n):(i=l.cachePool,i!==null?(u=Be._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=L0(),l={baseLanes:l.baseLanes|n,cachePool:i}),r.memoizedState=l,r.childLanes=rd(t,a,n),e.memoizedState=td,Qa(t.child,r)):(_r(e),n=t.child,t=n.sibling,n=Yn(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function yf(t,e){return e=qu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function qu(t,e){return t=Mt(22,t,null,e),t.lanes=0,t}function id(t,e,n){return Vi(e,t.child,null,n),t=yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rf(t.return,e,n)}function sd(t,e,n,r,i,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i,a.treeForkCount=s)}function NS(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;r=r.children;var a=Me.current,l=(a&2)!==0;if(l?(a=a&1|2,e.flags|=128):a&=1,be(Me,a),nt(t,e,r,n),r=oe?Co:0,!l&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hv(t,n,e);else if(t.tag===19)hv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&zu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sd(e,!1,i,n,s,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&zu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sd(e,!0,n,null,s,r);break;case"together":sd(e,!1,null,null,void 0,r);break;default:e.memoizedState=null}return e.child}function sr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))if(t!==null){if(ca(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Qp(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Mu(t)))}function eC(t,e,n){switch(e.tag){case 3:Au(e,e.stateNode.containerInfo),Tr(e,Be,t.memoizedState.cache),Ui();break;case 27:case 5:$d(e);break;case 4:Au(e,e.stateNode.containerInfo);break;case 10:Tr(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,cf(e),null;break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(_r(e),e.flags|=128,null):n&e.child.childLanes?CS(t,e,n):(_r(e),t=sr(t,e,n),t!==null?t.sibling:null);_r(e);break;case 19:var i=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(ca(t,e,n,!1),r=(n&e.childLanes)!==0),i){if(r)return NS(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),be(Me,Me.current),r)break;return null;case 22:return e.lanes=0,_S(t,e,n,e.pendingProps);case 24:Tr(e,Be,t.memoizedState.cache)}return sr(t,e,n)}function AS(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)$e=!0;else{if(!Qp(t,n)&&!(e.flags&128))return $e=!1,eC(t,e,n);$e=!!(t.flags&131072)}else $e=!1,oe&&e.flags&1048576&&D0(e,Co,e.index);switch(e.lanes=0,e.tag){case 16:e:{var r=e.pendingProps;if(t=Ti(e.elementType),e.type=t,typeof t=="function")Cp(t)?(r=Bi(t,r),e.tag=1,e=uv(null,e,t,r,n)):(e.tag=0,e=gf(null,e,t,r,n));else{if(t!=null){var i=t.$$typeof;if(i===fp){e.tag=11,e=iv(null,e,t,r,n);break e}else if(i===pp){e.tag=14,e=sv(null,e,t,r,n);break e}}throw e=Bd(t)||t,Error(O(306,e,""))}}return e;case 0:return gf(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,i=Bi(r,e.pendingProps),uv(t,e,r,i,n);case 3:e:{if(Au(e,e.stateNode.containerInfo),t===null)throw Error(O(387));r=e.pendingProps;var s=e.memoizedState;i=s.element,of(t,e),co(e,r,null,n);var a=e.memoizedState;if(r=a.cache,Tr(e,Be,r),r!==s.cache&&sf(e,[Be],n,!0),uo(),r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=cv(t,e,r,n);break e}else if(r!==i){i=Zt(Error(O(424)),e),No(i),e=cv(t,e,r,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ie=nn(t.firstChild),st=e,oe=!0,Ur=null,en=!0,n=U0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ui(),r===i){e=sr(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 26:return du(t,e),t===null?(n=xv(e.type,null,e.pendingProps,null))?e.memoizedState=n:oe||(n=e.type,t=e.pendingProps,r=Ju(Fr.current).createElement(n),r[it]=e,r[Pt]=t,lt(r,n,t),et(r),e.stateNode=r):e.memoizedState=xv(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $d(e),t===null&&oe&&(r=e.stateNode=wE(e.type,e.pendingProps,Fr.current),st=e,en=!0,i=Ie,ui(e.type)?(xf=i,Ie=nn(r.firstChild)):Ie=i),nt(t,e,e.pendingProps.children,n),du(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&oe&&((i=r=Ie)&&(r=PC(r,e.type,e.pendingProps,en),r!==null?(e.stateNode=r,st=e,Ie=nn(r.firstChild),en=!1,i=!0):i=!1),i||Jr(e)),$d(e),i=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,r=s.children,Cf(i,s)?r=null:a!==null&&Cf(i,a)&&(e.flags|=32),e.memoizedState!==null&&(i=Mp(t,e,H_,null,null,n),Ro._currentValue=i),du(t,e),nt(t,e,r,n),e.child;case 6:return t===null&&oe&&((t=n=Ie)&&(n=xC(n,e.pendingProps,en),n!==null?(e.stateNode=n,st=e,Ie=null,t=!0):t=!1),t||Jr(e)),null;case 13:return CS(t,e,n);case 4:return Au(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return iv(t,e,e.type,e.pendingProps,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,Tr(e,e.type,r.value),nt(t,e,r.children,n),e.child;case 9:return i=e.type._context,r=e.pendingProps.children,zi(e),i=ot(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return sv(t,e,e.type,e.pendingProps,n);case 15:return TS(t,e,e.type,e.pendingProps,n);case 19:return NS(t,e,n);case 31:return Z_(t,e,n);case 22:return _S(t,e,n,e.pendingProps);case 24:return zi(e),r=ot(Be),t===null?(i=xp(),i===null&&(i=ye,s=Pp(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=n),i=s),e.memoizedState={parent:r,cache:i},Op(e),Tr(e,Be,i)):(t.lanes&n&&(of(t,e),co(e,null,null,n),uo()),i=t.memoizedState,s=e.memoizedState,i.parent!==r?(i={parent:r,cache:r},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),Tr(e,Be,r)):(r=s.cache,Tr(e,Be,r),r!==i.cache&&sf(e,[Be],n,!0))),nt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(O(156,e.tag))}function Fn(t){t.flags|=4}function ad(t,e,n,r,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(ZS())t.flags|=8192;else throw Ri=Fu,Dp}else t.flags&=-16777217}function dv(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!EE(e))if(ZS())t.flags|=8192;else throw Ri=Fu,Dp}function Bl(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?e0():536870912,t.lanes|=e,Js|=e)}function Ba(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tC(t,e,n){var r=e.pendingProps;switch(Ap(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(e),null;case 1:return ke(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Jn(Be),Hs(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(cs(e)?Fn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jh())),ke(e),null;case 26:var i=e.type,s=e.memoizedState;return t===null?(Fn(e),s!==null?(ke(e),dv(e,s)):(ke(e),ad(e,i,null,r,n))):s?s!==t.memoizedState?(Fn(e),ke(e),dv(e,s)):(ke(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Fn(e),ke(e),ad(e,i,t,r,n)),null;case 27:if(Pu(e),n=Fr.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(O(166));return ke(e),null}t=_n.current,cs(e)?jy(e):(t=wE(i,r,n),e.stateNode=t,Fn(e))}return ke(e),null;case 5:if(Pu(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(O(166));return ke(e),null}if(s=_n.current,cs(e))jy(e);else{var a=Ju(Fr.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?s.multiple=!0:r.size&&(s.size=r.size);break;default:s=typeof r.is=="string"?a.createElement(i,{is:r.is}):a.createElement(i)}}s[it]=e,s[Pt]=r;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=s;e:switch(lt(s,i,r),i){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Fn(e)}}return ke(e),ad(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(t=Fr.current,cs(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,i=st,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}t[it]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||mE(t.nodeValue,n)),t||Jr(e,!0)}else t=Ju(t).createTextNode(r),t[it]=e,e.stateNode=t}return ke(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(r=cs(e),n!==null){if(t===null){if(!r)throw Error(O(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(557));t[it]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),t=!1}else n=Jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Lt(e),e):(Lt(e),null);if(e.flags&128)throw Error(O(558))}return ke(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=cs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(O(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(O(317));i[it]=e}else Ui(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ke(e),i=!1}else i=Jh(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Lt(e),e):(Lt(e),null)}return Lt(e),e.flags&128?(e.lanes=n,e):(n=r!==null,t=t!==null&&t.memoizedState!==null,n&&(r=e.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==i&&(r.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Bl(e,e.updateQueue),ke(e),null);case 4:return Hs(),t===null&&nm(e.stateNode.containerInfo),ke(e),null;case 10:return Jn(e.type),ke(e),null;case 19:if(tt(Me),r=e.memoizedState,r===null)return ke(e),null;if(i=(e.flags&128)!==0,s=r.rendering,s===null)if(i)Ba(r,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=zu(t),s!==null){for(e.flags|=128,Ba(r,!1),t=s.updateQueue,e.updateQueue=t,Bl(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)P0(n,t),n=n.sibling;return be(Me,Me.current&1|2),oe&&jn(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&Vt()>Hu&&(e.flags|=128,i=!0,Ba(r,!1),e.lanes=4194304)}else{if(!i)if(t=zu(s),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,Bl(e,t),Ba(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!oe)return ke(e),null}else 2*Vt()-r.renderingStartTime>Hu&&n!==536870912&&(e.flags|=128,i=!0,Ba(r,!1),e.lanes=4194304);r.isBackwards?(s.sibling=e.child,e.child=s):(t=r.last,t!==null?t.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Vt(),t.sibling=null,n=Me.current,be(Me,i?n&1|2:n&1),oe&&jn(e,r.treeForkCount),t):(ke(e),null);case 22:case 23:return Lt(e),Rp(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?n&536870912&&!(e.flags&128)&&(ke(e),e.subtreeFlags&6&&(e.flags|=8192)):ke(e),n=e.updateQueue,n!==null&&Bl(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&tt(Oi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Jn(Be),ke(e),null;case 25:return null;case 30:return null}throw Error(O(156,e.tag))}function nC(t,e){switch(Ap(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jn(Be),Hs(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Pu(e),null;case 31:if(e.memoizedState!==null){if(Lt(e),e.alternate===null)throw Error(O(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Lt(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Ui()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return tt(Me),null;case 4:return Hs(),null;case 10:return Jn(e.type),null;case 22:case 23:return Lt(e),Rp(),t!==null&&tt(Oi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Jn(Be),null;case 25:return null;default:return null}}function PS(t,e){switch(Ap(e),e.tag){case 3:Jn(Be),Hs();break;case 26:case 27:case 5:Pu(e);break;case 4:Hs();break;case 31:e.memoizedState!==null&&Lt(e);break;case 13:Lt(e);break;case 19:tt(Me);break;case 10:Jn(e.type);break;case 22:case 23:Lt(e),Rp(),t!==null&&tt(Oi);break;case 24:Jn(Be)}}function nl(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&t)===t){r=void 0;var s=n.create,a=n.inst;r=s(),a.destroy=r}n=n.next}while(n!==i)}}catch(l){pe(e,e.return,l)}}function Xr(t,e,n){try{var r=e.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var s=i.next;r=s;do{if((r.tag&t)===t){var a=r.inst,l=a.destroy;if(l!==void 0){a.destroy=void 0,i=e;var u=n,h=l;try{h()}catch(f){pe(i,u,f)}}}r=r.next}while(r!==s)}}catch(f){pe(e,e.return,f)}}function xS(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{V0(e,n)}catch(r){pe(t,t.return,r)}}}function DS(t,e,n){n.props=Bi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){pe(t,e,r)}}function fo(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(i){pe(t,e,i)}}function Tn(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){pe(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){pe(t,e,i)}else n.current=null}function OS(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){pe(t,t.return,i)}}function od(t,e,n){try{var r=t.stateNode;IC(r,t.type,n,e),r[Pt]=e}catch(i){pe(t,t.return,i)}}function RS(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ui(t.type)||t.tag===4}function ld(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||RS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ui(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hn));else if(r!==4&&(r===27&&ui(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(vf(t,e,n),t=t.sibling;t!==null;)vf(t,e,n),t=t.sibling}function $u(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(r===27&&ui(t.type)&&(n=t.stateNode),t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function LS(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);lt(e,r,n),e[it]=t,e[Pt]=n}catch(s){pe(t,t.return,s)}}var Bn=!1,je=!1,ud=!1,fv=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function rC(t,e){if(t=t.containerInfo,Tf=tc,t=E0(t),Ip(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,p=t,m=null;t:for(;;){for(var b;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(b=p.firstChild)!==null;)m=p,p=b;for(;;){if(p===t)break t;if(m===n&&++h===i&&(l=a),m===s&&++f===r&&(u=a),(b=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=b}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_f={focusedElem:t,selectionRange:n},tc=!1,Ze=e;Ze!==null;)if(e=Ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ze=t;else for(;Ze!==null;){switch(e=Ze,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)i=t[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,i=s.memoizedProps,s=s.memoizedState,r=n.stateNode;try{var A=Bi(n.type,i);t=r.getSnapshotBeforeUpdate(A,s),r.__reactInternalSnapshotBeforeUpdate=t}catch(L){pe(n,n.return,L)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Nf(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(O(163))}if(t=e.sibling,t!==null){t.return=e.return,Ze=t;break}Ze=e.return}}function MS(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:zn(t,n),r&4&&nl(5,n);break;case 1:if(zn(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){pe(n,n.return,a)}else{var i=Bi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){pe(n,n.return,a)}}r&64&&xS(n),r&512&&fo(n,n.return);break;case 3:if(zn(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{V0(t,e)}catch(a){pe(n,n.return,a)}}break;case 27:e===null&&r&4&&LS(n);case 26:case 5:zn(t,n),e===null&&r&4&&OS(n),r&512&&fo(n,n.return);break;case 12:zn(t,n);break;case 31:zn(t,n),r&4&&zS(t,n);break;case 13:zn(t,n),r&4&&VS(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=dC.bind(null,n),DC(t,n))));break;case 22:if(r=n.memoizedState!==null||Bn,!r){e=e!==null&&e.memoizedState!==null||je,i=Bn;var s=je;Bn=r,(je=e)&&!s?Vn(t,n,(n.subtreeFlags&8772)!==0):zn(t,n),Bn=i,je=s}break;case 30:break;default:zn(t,n)}}function FS(t){var e=t.alternate;e!==null&&(t.alternate=null,FS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&vp(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ne=null,It=!1;function Un(t,e,n){for(n=n.child;n!==null;)US(t,e,n),n=n.sibling}function US(t,e,n){if(jt&&typeof jt.onCommitFiberUnmount=="function")try{jt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 26:je||Tn(n,e),Un(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||Tn(n,e);var r=Ne,i=It;ui(n.type)&&(Ne=n.stateNode,It=!1),Un(t,e,n),yo(n.stateNode),Ne=r,It=i;break;case 5:je||Tn(n,e);case 6:if(r=Ne,i=It,Ne=null,Un(t,e,n),Ne=r,It=i,Ne!==null)if(It)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(n.stateNode)}catch(s){pe(n,e,s)}else try{Ne.removeChild(n.stateNode)}catch(s){pe(n,e,s)}break;case 18:Ne!==null&&(It?(t=Ne,_v(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),ta(t)):_v(Ne,n.stateNode));break;case 4:r=Ne,i=It,Ne=n.stateNode.containerInfo,It=!0,Un(t,e,n),Ne=r,It=i;break;case 0:case 11:case 14:case 15:Xr(2,n,e),je||Xr(4,n,e),Un(t,e,n);break;case 1:je||(Tn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&DS(n,e,r)),Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:je=(r=je)||n.memoizedState!==null,Un(t,e,n),je=r;break;default:Un(t,e,n)}}function zS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ta(t)}catch(n){pe(e,e.return,n)}}}function VS(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ta(t)}catch(n){pe(e,e.return,n)}}function iC(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new fv),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new fv),e;default:throw Error(O(435,t.tag))}}function ql(t,e){var n=iC(t);e.forEach(function(r){if(!n.has(r)){n.add(r);var i=fC.bind(null,t,r);r.then(i,i)}})}function Et(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 27:if(ui(l.type)){Ne=l.stateNode,It=!1;break e}break;case 5:Ne=l.stateNode,It=!1;break e;case 3:case 4:Ne=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(Ne===null)throw Error(O(160));US(s,a,i),Ne=null,It=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)jS(e,t),e=e.sibling}var cn=null;function jS(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Et(e,t),kt(t),r&4&&(Xr(3,t,t.return),nl(3,t),Xr(5,t,t.return));break;case 1:Et(e,t),kt(t),r&512&&(je||n===null||Tn(n,n.return)),r&64&&Bn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=cn;if(Et(e,t),kt(t),r&512&&(je||n===null||Tn(n,n.return)),r&4){var s=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){e:{r=t.type,n=t.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":s=i.getElementsByTagName("title")[0],(!s||s[Xo]||s[it]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(r),i.head.insertBefore(s,i.querySelector("head > title"))),lt(s,r,n),s[it]=t,et(s),r=s;break e;case"link":var a=Ov("link","href",i).get(r+(n.href||""));if(a){for(var l=0;l<a.length;l++)if(s=a[l],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(l,1);break t}}s=i.createElement(r),lt(s,r,n),i.head.appendChild(s);break;case"meta":if(a=Ov("meta","content",i).get(r+(n.content||""))){for(l=0;l<a.length;l++)if(s=a[l],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(l,1);break t}}s=i.createElement(r),lt(s,r,n),i.head.appendChild(s);break;default:throw Error(O(468,r))}s[it]=t,et(s),r=s}t.stateNode=r}else Rv(i,t.type,t.stateNode);else t.stateNode=Dv(i,r,t.memoizedProps);else s!==r?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,r===null?Rv(i,t.type,t.stateNode):Dv(i,r,t.memoizedProps)):r===null&&t.stateNode!==null&&od(t,t.memoizedProps,n.memoizedProps)}break;case 27:Et(e,t),kt(t),r&512&&(je||n===null||Tn(n,n.return)),n!==null&&r&4&&od(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Et(e,t),kt(t),r&512&&(je||n===null||Tn(n,n.return)),t.flags&32){i=t.stateNode;try{Ks(i,"")}catch(A){pe(t,t.return,A)}}r&4&&t.stateNode!=null&&(i=t.memoizedProps,od(t,i,n!==null?n.memoizedProps:i)),r&1024&&(ud=!0);break;case 6:if(Et(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(O(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(A){pe(t,t.return,A)}}break;case 3:if(mu=null,i=cn,cn=Xu(e.containerInfo),Et(e,t),cn=i,kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(A){pe(t,t.return,A)}ud&&(ud=!1,BS(t));break;case 4:r=cn,cn=Xu(t.stateNode.containerInfo),Et(e,t),kt(t),cn=r;break;case 12:Et(e,t),kt(t);break;case 31:Et(e,t),kt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,ql(t,r)));break;case 13:Et(e,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Fc=Vt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,ql(t,r)));break;case 22:i=t.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,h=Bn,f=je;if(Bn=h||i,je=f||u,Et(e,t),je=f,Bn=h,kt(t),r&8192)e:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(n===null||u||Bn||je||_i(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){u=n=e;try{if(s=u.stateNode,i)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{l=u.stateNode;var p=u.memoizedProps.style,m=p!=null&&p.hasOwnProperty("display")?p.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(A){pe(u,u.return,A)}}}else if(e.tag===6){if(n===null){u=e;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(A){pe(u,u.return,A)}}}else if(e.tag===18){if(n===null){u=e;try{var b=u.stateNode;i?Cv(b,!0):Cv(u.stateNode,!1)}catch(A){pe(u,u.return,A)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ql(t,n))));break;case 19:Et(e,t),kt(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,ql(t,r)));break;case 30:break;case 21:break;default:Et(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(RS(r)){n=r;break}r=r.return}if(n==null)throw Error(O(160));switch(n.tag){case 27:var i=n.stateNode,s=ld(t);$u(t,s,i);break;case 5:var a=n.stateNode;n.flags&32&&(Ks(a,""),n.flags&=-33);var l=ld(t);$u(t,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=ld(t);vf(t,h,u);break;default:throw Error(O(161))}}catch(f){pe(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BS(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;BS(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function zn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)MS(t,e.alternate,e),e=e.sibling}function _i(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Xr(4,e,e.return),_i(e);break;case 1:Tn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&DS(e,e.return,n),_i(e);break;case 27:yo(e.stateNode);case 26:case 5:Tn(e,e.return),_i(e);break;case 22:e.memoizedState===null&&_i(e);break;case 30:_i(e);break;default:_i(e)}t=t.sibling}}function Vn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,i=t,s=e,a=s.flags;switch(s.tag){case 0:case 11:case 15:Vn(i,s,n),nl(4,s);break;case 1:if(Vn(i,s,n),r=s,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(h){pe(r,r.return,h)}if(r=s,i=r.updateQueue,i!==null){var l=r.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)z0(u[i],l)}catch(h){pe(r,r.return,h)}}n&&a&64&&xS(s),fo(s,s.return);break;case 27:LS(s);case 26:case 5:Vn(i,s,n),n&&r===null&&a&4&&OS(s),fo(s,s.return);break;case 12:Vn(i,s,n);break;case 31:Vn(i,s,n),n&&a&4&&zS(i,s);break;case 13:Vn(i,s,n),n&&a&4&&VS(i,s);break;case 22:s.memoizedState===null&&Vn(i,s,n),fo(s,s.return);break;case 30:break;default:Vn(i,s,n)}e=e.sibling}}function Yp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&el(n))}function Jp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t))}function un(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qS(t,e,n,r),e=e.sibling}function qS(t,e,n,r){var i=e.flags;switch(e.tag){case 0:case 11:case 15:un(t,e,n,r),i&2048&&nl(9,e);break;case 1:un(t,e,n,r);break;case 3:un(t,e,n,r),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&el(t)));break;case 12:if(i&2048){un(t,e,n,r),t=e.stateNode;try{var s=e.memoizedProps,a=s.id,l=s.onPostCommit;typeof l=="function"&&l(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(u){pe(e,e.return,u)}}else un(t,e,n,r);break;case 31:un(t,e,n,r);break;case 13:un(t,e,n,r);break;case 23:break;case 22:s=e.stateNode,a=e.alternate,e.memoizedState!==null?s._visibility&2?un(t,e,n,r):po(t,e):s._visibility&2?un(t,e,n,r):(s._visibility|=2,fs(t,e,n,r,(e.subtreeFlags&10256)!==0||!1)),i&2048&&Yp(a,e);break;case 24:un(t,e,n,r),i&2048&&Jp(e.alternate,e);break;default:un(t,e,n,r)}}function fs(t,e,n,r,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,a=e,l=n,u=r,h=a.flags;switch(a.tag){case 0:case 11:case 15:fs(s,a,l,u,i),nl(8,a);break;case 23:break;case 22:var f=a.stateNode;a.memoizedState!==null?f._visibility&2?fs(s,a,l,u,i):po(s,a):(f._visibility|=2,fs(s,a,l,u,i)),i&&h&2048&&Yp(a.alternate,a);break;case 24:fs(s,a,l,u,i),i&&h&2048&&Jp(a.alternate,a);break;default:fs(s,a,l,u,i)}e=e.sibling}}function po(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,i=r.flags;switch(r.tag){case 22:po(n,r),i&2048&&Yp(r.alternate,r);break;case 24:po(n,r),i&2048&&Jp(r.alternate,r);break;default:po(n,r)}e=e.sibling}}var Ya=8192;function hs(t,e,n){if(t.subtreeFlags&Ya)for(t=t.child;t!==null;)$S(t,e,n),t=t.sibling}function $S(t,e,n){switch(t.tag){case 26:hs(t,e,n),t.flags&Ya&&t.memoizedState!==null&&$C(n,cn,t.memoizedState,t.memoizedProps);break;case 5:hs(t,e,n);break;case 3:case 4:var r=cn;cn=Xu(t.stateNode.containerInfo),hs(t,e,n),cn=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ya,Ya=16777216,hs(t,e,n),Ya=r):hs(t,e,n));break;default:hs(t,e,n)}}function HS(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function qa(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ze=r,KS(r,t)}HS(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)GS(t),t=t.sibling}function GS(t){switch(t.tag){case 0:case 11:case 15:qa(t),t.flags&2048&&Xr(9,t,t.return);break;case 3:qa(t);break;case 12:qa(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,fu(t)):qa(t);break;default:qa(t)}}function fu(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Ze=r,KS(r,t)}HS(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Xr(8,e,e.return),fu(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,fu(e));break;default:fu(e)}t=t.sibling}}function KS(t,e){for(;Ze!==null;){var n=Ze;switch(n.tag){case 0:case 11:case 15:Xr(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:el(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Ze=r;else e:for(n=t;Ze!==null;){r=Ze;var i=r.sibling,s=r.return;if(FS(r),r===n){Ze=null;break e}if(i!==null){i.return=s,Ze=i;break e}Ze=s}}}var sC={getCacheForType:function(t){var e=ot(Be),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ot(Be).controller.signal}},aC=typeof WeakMap=="function"?WeakMap:Map,ce=0,ye=null,ne=null,ae=0,fe=0,Rt=null,Rr=!1,da=!1,Xp=!1,ar=0,Oe=0,Zr=0,Li=0,Zp=0,Ut=0,Js=0,mo=null,Tt=null,wf=!1,Fc=0,WS=0,Hu=1/0,Gu=null,jr=null,Ke=0,Br=null,Xs=null,Xn=0,bf=0,Sf=null,QS=null,go=0,Ef=null;function qt(){return ce&2&&ae!==0?ae&-ae:G.T!==null?tm():i0()}function YS(){if(Ut===0)if(!(ae&536870912)||oe){var t=Ll;Ll<<=1,!(Ll&3932160)&&(Ll=262144),Ut=t}else Ut=536870912;return t=Gt.current,t!==null&&(t.flags|=32),Ut}function Nt(t,e,n){(t===ye&&(fe===2||fe===9)||t.cancelPendingCommit!==null)&&(Zs(t,0),Lr(t,ae,Ut,!1)),Jo(t,n),(!(ce&2)||t!==ye)&&(t===ye&&(!(ce&2)&&(Li|=n),Oe===4&&Lr(t,ae,Ut,!1)),Ln(t))}function JS(t,e,n){if(ce&6)throw Error(O(327));var r=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Yo(t,e),i=r?uC(t,e):cd(t,e,!0),s=r;do{if(i===0){da&&!r&&Lr(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!oC(n)){i=cd(t,e,!1),s=!1;continue}if(i===2){if(s=e,t.errorRecoveryDisabledLanes&s)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var l=t;i=mo;var u=l.current.memoizedState.isDehydrated;if(u&&(Zs(l,a).flags|=256),a=cd(l,a,!1),a!==2){if(Xp&&!u){l.errorRecoveryDisabledLanes|=s,Li|=s,i=4;break e}s=Tt,Tt=i,s!==null&&(Tt===null?Tt=s:Tt.push.apply(Tt,s))}i=a}if(s=!1,i!==2)continue}}if(i===1){Zs(t,0),Lr(t,e,0,!0);break}e:{switch(r=t,s=i,s){case 0:case 1:throw Error(O(345));case 4:if((e&4194048)!==e)break;case 6:Lr(r,e,Ut,!Rr);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(O(329))}if((e&62914560)===e&&(i=Fc+300-Vt(),10<i)){if(Lr(r,e,Ut,!Rr),_c(r,0,!0)!==0)break e;Xn=e,r.timeoutHandle=yE(pv.bind(null,r,n,Tt,Gu,wf,e,Ut,Li,Js,Rr,s,"Throttled",-0,0),i);break e}pv(r,n,Tt,Gu,wf,e,Ut,Li,Js,Rr,s,null,-0,0)}}break}while(!0);Ln(t)}function pv(t,e,n,r,i,s,a,l,u,h,f,p,m,b){if(t.timeoutHandle=-1,p=e.subtreeFlags,p&8192||(p&16785408)===16785408){p={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hn},$S(e,s,p);var A=(s&62914560)===s?Fc-Vt():(s&4194048)===s?WS-Vt():0;if(A=HC(p,A),A!==null){Xn=s,t.cancelPendingCommit=A(gv.bind(null,t,e,s,n,r,i,a,l,u,f,p,null,m,b)),Lr(t,s,a,!h);return}}gv(t,e,s,n,r,i,a,l,u)}function oC(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Lr(t,e,n,r){e&=~Zp,e&=~Li,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var i=e;0<i;){var s=31-Bt(i),a=1<<s;r[s]=-1,i&=~a}n!==0&&t0(t,n,e)}function Uc(){return ce&6?!0:(rl(0),!1)}function em(){if(ne!==null){if(fe===0)var t=ne.return;else t=ne,Gn=es=null,zp(t),Ms=null,Ao=0,t=ne;for(;t!==null;)PS(t.alternate,t),t=t.return;ne=null}}function Zs(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,CC(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xn=0,em(),ye=t,ne=n=Yn(t.current,null),ae=e,fe=0,Rt=null,Rr=!1,da=Yo(t,e),Xp=!1,Js=Ut=Zp=Li=Zr=Oe=0,Tt=mo=null,wf=!1,e&8&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var i=31-Bt(r),s=1<<i;e|=t[i],r&=~s}return ar=e,Pc(),n}function XS(t,e){X=null,G.H=xo,e===ha||e===Dc?(e=Gy(),fe=3):e===Dp?(e=Gy(),fe=4):fe=e===Wp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Rt=e,ne===null&&(Oe=1,Bu(t,Zt(e,t.current)))}function ZS(){var t=Gt.current;return t===null?!0:(ae&4194048)===ae?mn===null:(ae&62914560)===ae||ae&536870912?t===mn:!1}function eE(){var t=G.H;return G.H=xo,t===null?xo:t}function tE(){var t=G.A;return G.A=sC,t}function Ku(){Oe=4,Rr||(ae&4194048)!==ae&&Gt.current!==null||(da=!0),!(Zr&134217727)&&!(Li&134217727)||ye===null||Lr(ye,ae,Ut,!1)}function cd(t,e,n){var r=ce;ce|=2;var i=eE(),s=tE();(ye!==t||ae!==e)&&(Gu=null,Zs(t,e)),e=!1;var a=Oe;e:do try{if(fe!==0&&ne!==null){var l=ne,u=Rt;switch(fe){case 8:em(),a=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(e=!0);var h=fe;if(fe=0,Rt=null,xs(t,l,u,h),n&&da){a=0;break e}break;default:h=fe,fe=0,Rt=null,xs(t,l,u,h)}}lC(),a=Oe;break}catch(f){XS(t,f)}while(!0);return e&&t.shellSuspendCounter++,Gn=es=null,ce=r,G.H=i,G.A=s,ne===null&&(ye=null,ae=0,Pc()),a}function lC(){for(;ne!==null;)nE(ne)}function uC(t,e){var n=ce;ce|=2;var r=eE(),i=tE();ye!==t||ae!==e?(Gu=null,Hu=Vt()+500,Zs(t,e)):da=Yo(t,e);e:do try{if(fe!==0&&ne!==null){e=ne;var s=Rt;t:switch(fe){case 1:fe=0,Rt=null,xs(t,e,s,1);break;case 2:case 9:if(Hy(s)){fe=0,Rt=null,mv(e);break}e=function(){fe!==2&&fe!==9||ye!==t||(fe=7),Ln(t)},s.then(e,e);break e;case 3:fe=7;break e;case 4:fe=5;break e;case 7:Hy(s)?(fe=0,Rt=null,mv(e)):(fe=0,Rt=null,xs(t,e,s,7));break;case 5:var a=null;switch(ne.tag){case 26:a=ne.memoizedState;case 5:case 27:var l=ne;if(a?EE(a):l.stateNode.complete){fe=0,Rt=null;var u=l.sibling;if(u!==null)ne=u;else{var h=l.return;h!==null?(ne=h,zc(h)):ne=null}break t}}fe=0,Rt=null,xs(t,e,s,5);break;case 6:fe=0,Rt=null,xs(t,e,s,6);break;case 8:em(),Oe=6;break e;default:throw Error(O(462))}}cC();break}catch(f){XS(t,f)}while(!0);return Gn=es=null,G.H=r,G.A=i,ce=n,ne!==null?0:(ye=null,ae=0,Pc(),Oe)}function cC(){for(;ne!==null&&!OT();)nE(ne)}function nE(t){var e=AS(t.alternate,t,ar);t.memoizedProps=t.pendingProps,e===null?zc(t):ne=e}function mv(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=lv(n,e,e.pendingProps,e.type,void 0,ae);break;case 11:e=lv(n,e,e.pendingProps,e.type.render,e.ref,ae);break;case 5:zp(e);default:PS(n,e),e=ne=P0(e,ar),e=AS(n,e,ar)}t.memoizedProps=t.pendingProps,e===null?zc(t):ne=e}function xs(t,e,n,r){Gn=es=null,zp(e),Ms=null,Ao=0;var i=e.return;try{if(X_(t,i,e,n,ae)){Oe=1,Bu(t,Zt(n,t.current)),ne=null;return}}catch(s){if(i!==null)throw ne=i,s;Oe=1,Bu(t,Zt(n,t.current)),ne=null;return}e.flags&32768?(oe||r===1?t=!0:da||ae&536870912?t=!1:(Rr=t=!0,(r===2||r===9||r===3||r===6)&&(r=Gt.current,r!==null&&r.tag===13&&(r.flags|=16384))),rE(e,t)):zc(e)}function zc(t){var e=t;do{if(e.flags&32768){rE(e,Rr);return}t=e.return;var n=tC(e.alternate,e,ar);if(n!==null){ne=n;return}if(e=e.sibling,e!==null){ne=e;return}ne=e=t}while(e!==null);Oe===0&&(Oe=5)}function rE(t,e){do{var n=nC(t.alternate,t);if(n!==null){n.flags&=32767,ne=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ne=t;return}ne=t=n}while(t!==null);Oe=6,ne=null}function gv(t,e,n,r,i,s,a,l,u){t.cancelPendingCommit=null;do Vc();while(Ke!==0);if(ce&6)throw Error(O(327));if(e!==null){if(e===t.current)throw Error(O(177));if(s=e.lanes|e.childLanes,s|=Tp,qT(t,n,s,a,l,u),t===ye&&(ne=ye=null,ae=0),Xs=e,Br=t,Xn=n,bf=s,Sf=i,QS=r,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,pC(xu,function(){return lE(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(e.flags&13878)!==0,e.subtreeFlags&13878||r){r=G.T,G.T=null,i=he.p,he.p=2,a=ce,ce|=4;try{rC(t,e,n)}finally{ce=a,he.p=i,G.T=r}}Ke=1,iE(),sE(),aE()}}function iE(){if(Ke===1){Ke=0;var t=Br,e=Xs,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=G.T,G.T=null;var r=he.p;he.p=2;var i=ce;ce|=4;try{jS(e,t);var s=_f,a=E0(t.containerInfo),l=s.focusedElem,u=s.selectionRange;if(a!==l&&l&&l.ownerDocument&&S0(l.ownerDocument.documentElement,l)){if(u!==null&&Ip(l)){var h=u.start,f=u.end;if(f===void 0&&(f=h),"selectionStart"in l)l.selectionStart=h,l.selectionEnd=Math.min(f,l.value.length);else{var p=l.ownerDocument||document,m=p&&p.defaultView||window;if(m.getSelection){var b=m.getSelection(),A=l.textContent.length,L=Math.min(u.start,A),M=u.end===void 0?L:Math.min(u.end,A);!b.extend&&L>M&&(a=M,M=L,L=a);var I=Uy(l,L),S=Uy(l,M);if(I&&S&&(b.rangeCount!==1||b.anchorNode!==I.node||b.anchorOffset!==I.offset||b.focusNode!==S.node||b.focusOffset!==S.offset)){var _=p.createRange();_.setStart(I.node,I.offset),b.removeAllRanges(),L>M?(b.addRange(_),b.extend(S.node,S.offset)):(_.setEnd(S.node,S.offset),b.addRange(_))}}}}for(p=[],b=l;b=b.parentNode;)b.nodeType===1&&p.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<p.length;l++){var x=p[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}tc=!!Tf,_f=Tf=null}finally{ce=i,he.p=r,G.T=n}}t.current=e,Ke=2}}function sE(){if(Ke===2){Ke=0;var t=Br,e=Xs,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=G.T,G.T=null;var r=he.p;he.p=2;var i=ce;ce|=4;try{MS(t,e.alternate,e)}finally{ce=i,he.p=r,G.T=n}}Ke=3}}function aE(){if(Ke===4||Ke===3){Ke=0,RT();var t=Br,e=Xs,n=Xn,r=QS;e.subtreeFlags&10256||e.flags&10256?Ke=5:(Ke=0,Xs=Br=null,oE(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(jr=null),yp(n),e=e.stateNode,jt&&typeof jt.onCommitFiberRoot=="function")try{jt.onCommitFiberRoot(Qo,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=G.T,i=he.p,he.p=2,G.T=null;try{for(var s=t.onRecoverableError,a=0;a<r.length;a++){var l=r[a];s(l.value,{componentStack:l.stack})}}finally{G.T=e,he.p=i}}Xn&3&&Vc(),Ln(t),i=t.pendingLanes,n&261930&&i&42?t===Ef?go++:(go=0,Ef=t):go=0,rl(0)}}function oE(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,el(e)))}function Vc(){return iE(),sE(),aE(),lE()}function lE(){if(Ke!==5)return!1;var t=Br,e=bf;bf=0;var n=yp(Xn),r=G.T,i=he.p;try{he.p=32>n?32:n,G.T=null,n=Sf,Sf=null;var s=Br,a=Xn;if(Ke=0,Xs=Br=null,Xn=0,ce&6)throw Error(O(331));var l=ce;if(ce|=4,GS(s.current),qS(s,s.current,a,n),ce=l,rl(0,!1),jt&&typeof jt.onPostCommitFiberRoot=="function")try{jt.onPostCommitFiberRoot(Qo,s)}catch{}return!0}finally{he.p=i,G.T=r,oE(t,e)}}function yv(t,e,n){e=Zt(n,e),e=mf(t.stateNode,e,2),t=Vr(t,e,2),t!==null&&(Jo(t,2),Ln(t))}function pe(t,e,n){if(t.tag===3)yv(t,t,n);else for(;e!==null;){if(e.tag===3){yv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jr===null||!jr.has(r))){t=Zt(n,t),n=kS(2),r=Vr(e,n,2),r!==null&&(IS(n,r,e,t),Jo(r,2),Ln(r));break}}e=e.return}}function hd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aC;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(Xp=!0,i.add(n),t=hC.bind(null,t,e,n),e.then(t,t))}function hC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,ye===t&&(ae&n)===n&&(Oe===4||Oe===3&&(ae&62914560)===ae&&300>Vt()-Fc?!(ce&2)&&Zs(t,0):Zp|=n,Js===ae&&(Js=0)),Ln(t)}function uE(t,e){e===0&&(e=e0()),t=Zi(t,e),t!==null&&(Jo(t,e),Ln(t))}function dC(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uE(t,n)}function fC(t,e){var n=0;switch(t.tag){case 31:case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(O(314))}r!==null&&r.delete(e),uE(t,n)}function pC(t,e){return mp(t,e)}var Wu=null,ps=null,kf=!1,Qu=!1,dd=!1,Mr=0;function Ln(t){t!==ps&&t.next===null&&(ps===null?Wu=ps=t:ps=ps.next=t),Qu=!0,kf||(kf=!0,gC())}function rl(t,e){if(!dd&&Qu){dd=!0;do for(var n=!1,r=Wu;r!==null;){if(t!==0){var i=r.pendingLanes;if(i===0)var s=0;else{var a=r.suspendedLanes,l=r.pingedLanes;s=(1<<31-Bt(42|t)+1)-1,s&=i&~(a&~l),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,vv(r,s))}else s=ae,s=_c(r,r===ye?s:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(s&3)||Yo(r,s)||(n=!0,vv(r,s));r=r.next}while(n);dd=!1}}function mC(){cE()}function cE(){Qu=kf=!1;var t=0;Mr!==0&&_C()&&(t=Mr);for(var e=Vt(),n=null,r=Wu;r!==null;){var i=r.next,s=hE(r,e);s===0?(r.next=null,n===null?Wu=i:n.next=i,i===null&&(ps=n)):(n=r,(t!==0||s&3)&&(Qu=!0)),r=i}Ke!==0&&Ke!==5||rl(t),Mr!==0&&(Mr=0)}function hE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var a=31-Bt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=BT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}if(e=ye,n=ae,n=_c(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(fe===2||fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Vh(r),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Yo(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Vh(r),yp(n)){case 2:case 8:n=Xb;break;case 32:n=xu;break;case 268435456:n=Zb;break;default:n=xu}return r=dE.bind(null,t),n=mp(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Vh(r),t.callbackPriority=2,t.callbackNode=null,2}function dE(t,e){if(Ke!==0&&Ke!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Vc()&&t.callbackNode!==n)return null;var r=ae;return r=_c(t,t===ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(JS(t,r,e),hE(t,Vt()),t.callbackNode!=null&&t.callbackNode===n?dE.bind(null,t):null)}function vv(t,e){if(Vc())return null;JS(t,e,!0)}function gC(){NC(function(){ce&6?mp(Jb,mC):cE()})}function tm(){if(Mr===0){var t=Ws;t===0&&(t=Rl,Rl<<=1,!(Rl&261888)&&(Rl=256)),Mr=t}return Mr}function wv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:iu(""+t)}function bv(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function yC(t,e,n,r,i){if(e==="submit"&&n&&n.stateNode===i){var s=wv((i[Pt]||null).action),a=r.submitter;a&&(e=(e=a[Pt]||null)?wv(e.formAction):a.getAttribute("formAction"),e!==null&&(s=e,a=null));var l=new Cc("action","action",null,r,i);t.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Mr!==0){var u=a?bv(i,a):new FormData(i);ff(n,{pending:!0,data:u,method:i.method,action:s},null,u)}}else typeof s=="function"&&(l.preventDefault(),u=a?bv(i,a):new FormData(i),ff(n,{pending:!0,data:u,method:i.method,action:s},s,u))},currentTarget:i}]})}}for(var fd=0;fd<ef.length;fd++){var pd=ef[fd],vC=pd.toLowerCase(),wC=pd[0].toUpperCase()+pd.slice(1);vn(vC,"on"+wC)}vn(I0,"onAnimationEnd");vn(T0,"onAnimationIteration");vn(_0,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(L_,"onTransitionRun");vn(M_,"onTransitionStart");vn(F_,"onTransitionCancel");vn(C0,"onTransitionEnd");Gs("onMouseEnter",["mouseout","mouseover"]);Gs("onMouseLeave",["mouseout","mouseover"]);Gs("onPointerEnter",["pointerout","pointerover"]);Gs("onPointerLeave",["pointerout","pointerover"]);Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function fE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=h;try{s(i)}catch(f){Ou(f)}i.currentTarget=null,s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;s=l,i.currentTarget=h;try{s(i)}catch(f){Ou(f)}i.currentTarget=null,s=u}}}}function te(t,e){var n=e[Gd];n===void 0&&(n=e[Gd]=new Set);var r=t+"__bubble";n.has(r)||(pE(e,t,2,!1),n.add(r))}function md(t,e,n){var r=0;e&&(r|=4),pE(n,t,r,e)}var $l="_reactListening"+Math.random().toString(36).slice(2);function nm(t){if(!t[$l]){t[$l]=!0,s0.forEach(function(n){n!=="selectionchange"&&(bC.has(n)||md(n,!1,t),md(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$l]||(e[$l]=!0,md("selectionchange",!1,e))}}function pE(t,e,n,r){switch(CE(e)){case 2:var i=WC;break;case 8:i=QC;break;default:i=am}n=i.bind(null,e,n,t),i=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===i)return;a=a.return}for(;l!==null;){if(a=Es(l),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){r=s=a;continue e}l=l.parentNode}}r=r.return}f0(function(){var h=s,f=bp(n),p=[];e:{var m=N0.get(t);if(m!==void 0){var b=Cc,A=t;switch(t){case"keypress":if(au(n)===0)break e;case"keydown":case"keyup":b=f_;break;case"focusin":A="focus",b=Hh;break;case"focusout":A="blur",b=Hh;break;case"beforeblur":case"afterblur":b=Hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ny;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=g_;break;case I0:case T0:case _0:b=i_;break;case C0:b=v_;break;case"scroll":case"scrollend":b=ZT;break;case"wheel":b=b_;break;case"copy":case"cut":case"paste":b=a_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Py;break;case"toggle":case"beforetoggle":b=E_}var L=(e&4)!==0,M=!L&&(t==="scroll"||t==="scrollend"),I=L?m!==null?m+"Capture":null:m;L=[];for(var S=h,_;S!==null;){var x=S;if(_=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||_===null||I===null||(x=Io(S,I),x!=null&&L.push(Oo(S,x,_))),M)break;S=S.return}0<L.length&&(m=new b(m,A,null,n,f),p.push({event:m,listeners:L}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",m&&n!==Yd&&(A=n.relatedTarget||n.fromElement)&&(Es(A)||A[la]))break e;if((b||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,b?(A=n.relatedTarget||n.toElement,b=h,A=A?Es(A):null,A!==null&&(M=Wo(A),L=A.tag,A!==M||L!==5&&L!==27&&L!==6)&&(A=null)):(b=null,A=h),b!==A)){if(L=Ny,x="onMouseLeave",I="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(L=Py,x="onPointerLeave",I="onPointerEnter",S="pointer"),M=b==null?m:Wa(b),_=A==null?m:Wa(A),m=new L(x,S+"leave",b,n,f),m.target=M,m.relatedTarget=_,x=null,Es(f)===h&&(L=new L(I,S+"enter",A,n,f),L.target=_,L.relatedTarget=M,x=L),M=x,b&&A)t:{for(L=SC,I=b,S=A,_=0,x=I;x;x=L(x))_++;x=0;for(var U=S;U;U=L(U))x++;for(;0<_-x;)I=L(I),_--;for(;0<x-_;)S=L(S),x--;for(;_--;){if(I===S||S!==null&&I===S.alternate){L=I;break t}I=L(I),S=L(S)}L=null}else L=null;b!==null&&Sv(p,m,b,L,!1),A!==null&&M!==null&&Sv(p,M,A,L,!0)}}e:{if(m=h?Wa(h):window,b=m.nodeName&&m.nodeName.toLowerCase(),b==="select"||b==="input"&&m.type==="file")var B=Ry;else if(Oy(m))if(w0)B=D_;else{B=P_;var w=A_}else b=m.nodeName,!b||b.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&wp(h.elementType)&&(B=Ry):B=x_;if(B&&(B=B(t,h))){v0(p,B,n,f);break e}w&&w(t,m,h),t==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&Qd(m,"number",m.value)}switch(w=h?Wa(h):window,t){case"focusin":(Oy(w)||w.contentEditable==="true")&&(Ts=w,Xd=h,ao=null);break;case"focusout":ao=Xd=Ts=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,zy(p,n,f);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":zy(p,n,f)}var y;if(kp)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Is?g0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(m0&&n.locale!=="ko"&&(Is||v!=="onCompositionStart"?v==="onCompositionEnd"&&Is&&(y=p0()):(Or=f,Sp="value"in Or?Or.value:Or.textContent,Is=!0)),w=Yu(h,v),0<w.length&&(v=new Ay(v,t,null,n,f),p.push({event:v,listeners:w}),y?v.data=y:(y=y0(n),y!==null&&(v.data=y)))),(y=I_?T_(t,n):__(t,n))&&(v=Yu(h,"onBeforeInput"),0<v.length&&(w=new Ay("onBeforeInput","beforeinput",null,n,f),p.push({event:w,listeners:v}),w.data=y)),yC(p,t,h,n,f)}fE(p,e)})}function Oo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Io(t,n),i!=null&&r.unshift(Oo(t,i,s)),i=Io(t,e),i!=null&&r.push(Oo(t,i,s))),t.tag===3)return r;t=t.return}return[]}function SC(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Sv(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(l=l.tag,u!==null&&u===r)break;l!==5&&l!==26&&l!==27||h===null||(u=h,i?(h=Io(n,s),h!=null&&a.unshift(Oo(n,h,u))):i||(h=Io(n,s),h!=null&&a.push(Oo(n,h,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var EC=/\r\n?/g,kC=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(EC,`
`).replace(kC,"")}function mE(t,e){return e=Ev(e),Ev(t)===e}function me(t,e,n,r,i,s){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Ks(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Ks(t,""+r);break;case"className":Fl(t,"class",r);break;case"tabIndex":Fl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(t,n,r);break;case"style":d0(t,r,s);break;case"data":if(e!=="object"){Fl(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=iu(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&me(t,e,"name",i.name,i,null),me(t,e,"formEncType",i.formEncType,i,null),me(t,e,"formMethod",i.formMethod,i,null),me(t,e,"formTarget",i.formTarget,i,null)):(me(t,e,"encType",i.encType,i,null),me(t,e,"method",i.method,i,null),me(t,e,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=iu(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Hn);break;case"onScroll":r!=null&&te("scroll",t);break;case"onScrollEnd":r!=null&&te("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(O(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(O(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=iu(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":te("beforetoggle",t),te("toggle",t),ru(t,"popover",r);break;case"xlinkActuate":Mn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Mn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Mn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Mn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Mn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Mn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Mn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ru(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=JT.get(n)||n,ru(t,n,r))}}function If(t,e,n,r,i,s){switch(n){case"style":d0(t,r,s);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(O(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(O(60));t.innerHTML=n}}break;case"children":typeof r=="string"?Ks(t,r):(typeof r=="number"||typeof r=="bigint")&&Ks(t,""+r);break;case"onScroll":r!=null&&te("scroll",t);break;case"onScrollEnd":r!=null&&te("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Hn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!a0.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),e=n.slice(2,i?n.length-7:void 0),s=t[Pt]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,i),typeof r=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,i);break e}n in t?t[n]=r:r===!0?t.setAttribute(n,""):ru(t,n,r)}}}function lt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":te("error",t),te("load",t);var r=!1,i=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(O(137,e));default:me(t,e,s,a,n,null)}}i&&me(t,e,"srcSet",n.srcSet,n,null),r&&me(t,e,"src",n.src,n,null);return;case"input":te("invalid",t);var l=s=a=i=null,u=null,h=null;for(r in n)if(n.hasOwnProperty(r)){var f=n[r];if(f!=null)switch(r){case"name":i=f;break;case"type":a=f;break;case"checked":u=f;break;case"defaultChecked":h=f;break;case"value":s=f;break;case"defaultValue":l=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(O(137,e));break;default:me(t,e,r,f,n,null)}}u0(t,s,l,u,h,a,i,!1);return;case"select":te("invalid",t),r=a=s=null;for(i in n)if(n.hasOwnProperty(i)&&(l=n[i],l!=null))switch(i){case"value":s=l;break;case"defaultValue":a=l;break;case"multiple":r=l;default:me(t,e,i,l,n,null)}e=s,n=a,t.multiple=!!r,e!=null?Os(t,!!r,e,!1):n!=null&&Os(t,!!r,n,!0);return;case"textarea":te("invalid",t),s=i=r=null;for(a in n)if(n.hasOwnProperty(a)&&(l=n[a],l!=null))switch(a){case"value":r=l;break;case"defaultValue":i=l;break;case"children":s=l;break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(O(91));break;default:me(t,e,a,l,n,null)}h0(t,r,i,s);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:me(t,e,u,r,n,null)}return;case"dialog":te("beforetoggle",t),te("toggle",t),te("cancel",t),te("close",t);break;case"iframe":case"object":te("load",t);break;case"video":case"audio":for(r=0;r<Do.length;r++)te(Do[r],t);break;case"image":te("error",t),te("load",t);break;case"details":te("toggle",t);break;case"embed":case"source":case"link":te("error",t),te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(r=n[h],r!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(O(137,e));default:me(t,e,h,r,n,null)}return;default:if(wp(e)){for(f in n)n.hasOwnProperty(f)&&(r=n[f],r!==void 0&&If(t,e,f,r,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(r=n[l],r!=null&&me(t,e,l,r,n,null))}function IC(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,a=null,l=null,u=null,h=null,f=null;for(b in n){var p=n[b];if(n.hasOwnProperty(b)&&p!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=p;default:r.hasOwnProperty(b)||me(t,e,b,null,r,p)}}for(var m in r){var b=r[m];if(p=n[m],r.hasOwnProperty(m)&&(b!=null||p!=null))switch(m){case"type":s=b;break;case"name":i=b;break;case"checked":h=b;break;case"defaultChecked":f=b;break;case"value":a=b;break;case"defaultValue":l=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(O(137,e));break;default:b!==p&&me(t,e,m,b,r,p)}}Wd(t,a,l,u,h,f,s,i);return;case"select":b=a=l=m=null;for(s in n)if(u=n[s],n.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":b=u;default:r.hasOwnProperty(s)||me(t,e,s,null,r,u)}for(i in r)if(s=r[i],u=n[i],r.hasOwnProperty(i)&&(s!=null||u!=null))switch(i){case"value":m=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:s!==u&&me(t,e,i,s,r,u)}e=l,n=a,r=b,m!=null?Os(t,!!n,m,!1):!!r!=!!n&&(e!=null?Os(t,!!n,e,!0):Os(t,!!n,n?[]:"",!1));return;case"textarea":b=m=null;for(l in n)if(i=n[l],n.hasOwnProperty(l)&&i!=null&&!r.hasOwnProperty(l))switch(l){case"value":break;case"children":break;default:me(t,e,l,null,r,i)}for(a in r)if(i=r[a],s=n[a],r.hasOwnProperty(a)&&(i!=null||s!=null))switch(a){case"value":m=i;break;case"defaultValue":b=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(O(91));break;default:i!==s&&me(t,e,a,i,r,s)}c0(t,m,b);return;case"option":for(var A in n)if(m=n[A],n.hasOwnProperty(A)&&m!=null&&!r.hasOwnProperty(A))switch(A){case"selected":t.selected=!1;break;default:me(t,e,A,null,r,m)}for(u in r)if(m=r[u],b=n[u],r.hasOwnProperty(u)&&m!==b&&(m!=null||b!=null))switch(u){case"selected":t.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:me(t,e,u,m,r,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in n)m=n[L],n.hasOwnProperty(L)&&m!=null&&!r.hasOwnProperty(L)&&me(t,e,L,null,r,m);for(h in r)if(m=r[h],b=n[h],r.hasOwnProperty(h)&&m!==b&&(m!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(O(137,e));break;default:me(t,e,h,m,r,b)}return;default:if(wp(e)){for(var M in n)m=n[M],n.hasOwnProperty(M)&&m!==void 0&&!r.hasOwnProperty(M)&&If(t,e,M,void 0,r,m);for(f in r)m=r[f],b=n[f],!r.hasOwnProperty(f)||m===b||m===void 0&&b===void 0||If(t,e,f,m,r,b);return}}for(var I in n)m=n[I],n.hasOwnProperty(I)&&m!=null&&!r.hasOwnProperty(I)&&me(t,e,I,null,r,m);for(p in r)m=r[p],b=n[p],!r.hasOwnProperty(p)||m===b||m==null&&b==null||me(t,e,p,m,r,b)}function kv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function TC(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var i=n[r],s=i.transferSize,a=i.initiatorType,l=i.duration;if(s&&l&&kv(a)){for(a=0,l=i.responseEnd,r+=1;r<n.length;r++){var u=n[r],h=u.startTime;if(h>l)break;var f=u.transferSize,p=u.initiatorType;f&&kv(p)&&(u=u.responseEnd,a+=f*(u<l?1:(l-h)/(u-h)))}if(--r,e+=8*(s+a)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Tf=null,_f=null;function Ju(t){return t.nodeType===9?t:t.ownerDocument}function Iv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function gE(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yd=null;function _C(){var t=window.event;return t&&t.type==="popstate"?t===yd?!1:(yd=t,!0):(yd=null,!1)}var yE=typeof setTimeout=="function"?setTimeout:void 0,CC=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,NC=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(AC)}:yE;function AC(t){setTimeout(function(){throw t})}function ui(t){return t==="head"}function _v(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(r===0){t.removeChild(i),ta(e);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")yo(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,yo(n);for(var s=n.firstChild;s;){var a=s.nextSibling,l=s.nodeName;s[Xo]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&yo(t.ownerDocument.body);n=i}while(n);ta(e)}function Cv(t,e){var n=t;t=0;do{var r=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=r}while(n)}function Nf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nf(n),vp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function PC(t,e,n,r){for(;t.nodeType===1;){var i=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Xo])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence")||s!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=nn(t.nextSibling),t===null)break}return null}function xC(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=nn(t.nextSibling),t===null))return null;return t}function vE(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=nn(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function Pf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function DC(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function nn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var xf=null;function Nv(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return nn(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Av(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function wE(t,e,n){switch(e=Ju(n),t){case"html":if(t=e.documentElement,!t)throw Error(O(452));return t;case"head":if(t=e.head,!t)throw Error(O(453));return t;case"body":if(t=e.body,!t)throw Error(O(454));return t;default:throw Error(O(451))}}function yo(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);vp(t)}var an=new Map,Pv=new Set;function Xu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var dr=he.d;he.d={f:OC,r:RC,D:LC,C:MC,L:FC,m:UC,X:VC,S:zC,M:jC};function OC(){var t=dr.f(),e=Uc();return t||e}function RC(t){var e=ua(t);e!==null&&e.tag===5&&e.type==="form"?dS(e):dr.r(t)}var fa=typeof document>"u"?null:document;function bE(t,e,n){var r=fa;if(r&&typeof e=="string"&&e){var i=hn(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Pv.has(i)||(Pv.add(i),t={rel:t,crossOrigin:n,href:e},r.querySelector(i)===null&&(e=r.createElement("link"),lt(e,"link",t),et(e),r.head.appendChild(e)))}}function LC(t){dr.D(t),bE("dns-prefetch",t,null)}function MC(t,e){dr.C(t,e),bE("preconnect",t,e)}function FC(t,e,n){dr.L(t,e,n);var r=fa;if(r&&t&&e){var i='link[rel="preload"][as="'+hn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+hn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+hn(n.imageSizes)+'"]')):i+='[href="'+hn(t)+'"]';var s=i;switch(e){case"style":s=ea(t);break;case"script":s=pa(t)}an.has(s)||(t=Ce({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),an.set(s,t),r.querySelector(i)!==null||e==="style"&&r.querySelector(il(s))||e==="script"&&r.querySelector(sl(s))||(e=r.createElement("link"),lt(e,"link",t),et(e),r.head.appendChild(e)))}}function UC(t,e){dr.m(t,e);var n=fa;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+hn(r)+'"][href="'+hn(t)+'"]',s=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=pa(t)}if(!an.has(s)&&(t=Ce({rel:"modulepreload",href:t},e),an.set(s,t),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}r=n.createElement("link"),lt(r,"link",t),et(r),n.head.appendChild(r)}}}function zC(t,e,n){dr.S(t,e,n);var r=fa;if(r&&t){var i=Ds(r).hoistableStyles,s=ea(t);e=e||"default";var a=i.get(s);if(!a){var l={loading:0,preload:null};if(a=r.querySelector(il(s)))l.loading=5;else{t=Ce({rel:"stylesheet",href:t,"data-precedence":e},n),(n=an.get(s))&&rm(t,n);var u=a=r.createElement("link");et(u),lt(u,"link",t),u._p=new Promise(function(h,f){u.onload=h,u.onerror=f}),u.addEventListener("load",function(){l.loading|=1}),u.addEventListener("error",function(){l.loading|=2}),l.loading|=4,pu(a,e,r)}a={type:"stylesheet",instance:a,count:1,state:l},i.set(s,a)}}}function VC(t,e){dr.X(t,e);var n=fa;if(n&&t){var r=Ds(n).hoistableScripts,i=pa(t),s=r.get(i);s||(s=n.querySelector(sl(i)),s||(t=Ce({src:t,async:!0},e),(e=an.get(i))&&im(t,e),s=n.createElement("script"),et(s),lt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function jC(t,e){dr.M(t,e);var n=fa;if(n&&t){var r=Ds(n).hoistableScripts,i=pa(t),s=r.get(i);s||(s=n.querySelector(sl(i)),s||(t=Ce({src:t,async:!0,type:"module"},e),(e=an.get(i))&&im(t,e),s=n.createElement("script"),et(s),lt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},r.set(i,s))}}function xv(t,e,n,r){var i=(i=Fr.current)?Xu(i):null;if(!i)throw Error(O(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ea(n.href),n=Ds(i).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ea(n.href);var s=Ds(i).hoistableStyles,a=s.get(t);if(a||(i=i.ownerDocument||i,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,a),(s=i.querySelector(il(t)))&&!s._p&&(a.instance=s,a.state.loading=5),an.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(t,n),s||BC(i,t,n,a.state))),e&&r===null)throw Error(O(528,""));return a}if(e&&r!==null)throw Error(O(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=pa(n),n=Ds(i).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(O(444,t))}}function ea(t){return'href="'+hn(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function SE(t){return Ce({},t,{"data-precedence":t.precedence,precedence:null})}function BC(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),lt(e,"link",n),et(e),t.head.appendChild(e))}function pa(t){return'[src="'+hn(t)+'"]'}function sl(t){return"script[async]"+t}function Dv(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+hn(n.href)+'"]');if(r)return e.instance=r,et(r),r;var i=Ce({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),et(r),lt(r,"style",i),pu(r,n.precedence,t),e.instance=r;case"stylesheet":i=ea(n.href);var s=t.querySelector(il(i));if(s)return e.state.loading|=4,e.instance=s,et(s),s;r=SE(n),(i=an.get(i))&&rm(r,i),s=(t.ownerDocument||t).createElement("link"),et(s);var a=s;return a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),lt(s,"link",r),e.state.loading|=4,pu(s,n.precedence,t),e.instance=s;case"script":return s=pa(n.src),(i=t.querySelector(sl(s)))?(e.instance=i,et(i),i):(r=n,(i=an.get(s))&&(r=Ce({},n),im(r,i)),t=t.ownerDocument||t,i=t.createElement("script"),et(i),lt(i,"link",r),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(O(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,pu(r,n.precedence,t));return e.instance}function pu(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,s=i,a=0;a<r.length;a++){var l=r[a];if(l.dataset.precedence===e)s=l;else if(s!==i)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function rm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function im(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var mu=null;function Ov(t,e,n){if(mu===null){var r=new Map,i=mu=new Map;i.set(n,r)}else i=mu,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),i=0;i<n.length;i++){var s=n[i];if(!(s[Xo]||s[it]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(e)||"";a=t+a;var l=r.get(a);l?l.push(s):r.set(a,[s])}}return r}function Rv(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function qC(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function EE(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function $C(t,e,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var i=ea(r.href),s=e.querySelector(il(i));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Zu.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,et(s);return}s=e.ownerDocument||e,r=SE(r),(i=an.get(i))&&rm(r,i),s=s.createElement("link"),et(s);var a=s;a._p=new Promise(function(l,u){a.onload=l,a.onerror=u}),lt(s,"link",r),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Zu.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var vd=0;function HC(t,e){return t.stylesheets&&t.count===0&&gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var r=setTimeout(function(){if(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&vd===0&&(vd=62500*TC());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>vd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Zu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function gu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,e.forEach(GC,t),ec=null,Zu.call(t))}function GC(t,e){if(!(e.state.loading&4)){var n=ec.get(t);if(n)var r=n.get(null);else{n=new Map,ec.set(t,n);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var a=i[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}i=e.instance,a=i.getAttribute("data-precedence"),s=n.get(a)||r,s===r&&n.set(null,i),n.set(a,i),this.count++,r=Zu.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),s?s.parentNode.insertBefore(i,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ro={$$typeof:$n,Provider:null,Consumer:null,_currentValue:xi,_currentValue2:xi,_threadCount:0};function KC(t,e,n,r,i,s,a,l,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jh(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jh(0),this.hiddenUpdates=jh(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function kE(t,e,n,r,i,s,a,l,u,h,f,p){return t=new KC(t,e,n,a,u,h,f,p,l),e=1,s===!0&&(e|=24),s=Mt(3,null,null,e),t.current=s,s.stateNode=t,e=Pp(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:r,isDehydrated:n,cache:e},Op(s),t}function IE(t){return t?(t=Ns,t):Ns}function TE(t,e,n,r,i,s){i=IE(i),r.context===null?r.context=i:r.pendingContext=i,r=zr(e),r.payload={element:n},s=s===void 0?null:s,s!==null&&(r.callback=s),n=Vr(t,r,e),n!==null&&(Nt(n,t,e),lo(n,t,e))}function Lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function sm(t,e){Lv(t,e),(t=t.alternate)&&Lv(t,e)}function _E(t){if(t.tag===13||t.tag===31){var e=Zi(t,67108864);e!==null&&Nt(e,t,67108864),sm(t,67108864)}}function Mv(t){if(t.tag===13||t.tag===31){var e=qt();e=gp(e);var n=Zi(t,e);n!==null&&Nt(n,t,e),sm(t,e)}}var tc=!0;function WC(t,e,n,r){var i=G.T;G.T=null;var s=he.p;try{he.p=2,am(t,e,n,r)}finally{he.p=s,G.T=i}}function QC(t,e,n,r){var i=G.T;G.T=null;var s=he.p;try{he.p=8,am(t,e,n,r)}finally{he.p=s,G.T=i}}function am(t,e,n,r){if(tc){var i=Df(r);if(i===null)gd(t,e,r,nc,n),Fv(t,r);else if(JC(i,t,e,n,r))r.stopPropagation();else if(Fv(t,r),e&4&&-1<YC.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=Ii(s.pendingLanes);if(a!==0){var l=s;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var u=1<<31-Bt(a);l.entanglements[1]|=u,a&=~u}Ln(s),!(ce&6)&&(Hu=Vt()+500,rl(0))}}break;case 31:case 13:l=Zi(s,2),l!==null&&Nt(l,s,2),Uc(),sm(s,2)}if(s=Df(r),s===null&&gd(t,e,r,nc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gd(t,e,r,null,n)}}function Df(t){return t=bp(t),om(t)}var nc=null;function om(t){if(nc=null,t=Es(t),t!==null){var e=Wo(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=Gb(e),t!==null)return t;t=null}else if(n===31){if(t=Kb(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return nc=t,null}function CE(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(LT()){case Jb:return 2;case Xb:return 8;case xu:case MT:return 32;case Zb:return 268435456;default:return 32}default:return 32}}var Of=!1,qr=null,$r=null,Hr=null,Lo=new Map,Mo=new Map,Nr=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fv(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":Lo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function $a(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&_E(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JC(t,e,n,r,i){switch(e){case"focusin":return qr=$a(qr,t,e,n,r,i),!0;case"dragenter":return $r=$a($r,t,e,n,r,i),!0;case"mouseover":return Hr=$a(Hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Lo.set(s,$a(Lo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Mo.set(s,$a(Mo.get(s)||null,t,e,n,r,i)),!0}return!1}function NE(t){var e=Es(t.target);if(e!==null){var n=Wo(e);if(n!==null){if(e=n.tag,e===13){if(e=Gb(n),e!==null){t.blockedOn=e,Sy(t.priority,function(){Mv(n)});return}}else if(e===31){if(e=Kb(n),e!==null){t.blockedOn=e,Sy(t.priority,function(){Mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Yd=r,n.target.dispatchEvent(r),Yd=null}else return e=ua(n),e!==null&&_E(e),t.blockedOn=n,!1;e.shift()}return!0}function Uv(t,e,n){yu(t)&&n.delete(e)}function XC(){Of=!1,qr!==null&&yu(qr)&&(qr=null),$r!==null&&yu($r)&&($r=null),Hr!==null&&yu(Hr)&&(Hr=null),Lo.forEach(Uv),Mo.forEach(Uv)}function Hl(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,XC)))}var Gl=null;function zv(t){Gl!==t&&(Gl=t,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],i=t[e+2];if(typeof r!="function"){if(om(r||n)===null)continue;break}var s=ua(n);s!==null&&(t.splice(e,3),e-=3,ff(s,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function ta(t){function e(u){return Hl(u,t)}qr!==null&&Hl(qr,t),$r!==null&&Hl($r,t),Hr!==null&&Hl(Hr,t),Lo.forEach(e),Mo.forEach(e);for(var n=0;n<Nr.length;n++){var r=Nr[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Nr.length&&(n=Nr[0],n.blockedOn===null);)NE(n),n.blockedOn===null&&Nr.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],s=n[r+1],a=i[Pt]||null;if(typeof s=="function")a||zv(n);else if(a){var l=null;if(s&&s.hasAttribute("formAction")){if(i=s,a=s[Pt]||null)l=a.formAction;else if(om(i)!==null)continue}else l=a.action;typeof l=="function"?n[r+1]=l:(n.splice(r,3),r-=3),zv(n)}}}function AE(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return i=a})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function lm(t){this._internalRoot=t}jc.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));var n=e.current,r=qt();TE(n,r,t,e,null,null)};jc.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;TE(t.current,2,null,t,null,null),Uc(),e[la]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=i0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Nr.length&&e!==0&&e<Nr[n].priority;n++);Nr.splice(n,0,t),n===0&&NE(t)}};var Vv=$b.version;if(Vv!=="19.2.6")throw Error(O(527,Vv,"19.2.6"));he.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=NT(e),t=t!==null?Wb(t):null,t=t===null?null:t.stateNode,t};var ZC={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Qo=Kl.inject(ZC),jt=Kl}catch{}}Ic.createRoot=function(t,e){if(!Hb(t))throw Error(O(299));var n=!1,r="",i=bS,s=SS,a=ES;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=kE(t,1,!1,null,null,n,r,null,i,s,a,AE),t[la]=e.current,nm(t),new lm(e)};Ic.hydrateRoot=function(t,e,n){if(!Hb(t))throw Error(O(299));var r=!1,i="",s=bS,a=SS,l=ES,u=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),e=kE(t,1,!0,e,n??null,r,i,u,s,a,l,AE),e.context=IE(null),n=e.current,r=qt(),r=gp(r),i=zr(r),i.callback=null,Vr(n,i,r),n=r,e.current.lanes=n,Jo(e,n),Ln(e),t[la]=e.current,nm(t),new jc(e)};Ic.version="19.2.6";function PE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(PE)}catch(t){console.error(t)}}PE(),Ub.exports=Ic;var J4=Ub.exports;const e2={tagline:"Your Local Cash & Carry",phone:"09054127011",whatsapp:"919054127011",email:"support@hrsupermarket.in",address:"Shop No 1, By Pass Road, near Ganpati Fatsar, Arjun Society, Rajkot, Surendranagar, Gujarat 363030",city:"Surendranagar, Gujarat",lat:22.7271,lng:71.6486},jv=[{id:"grains-flours",name:"Grains & Flours",emoji:"🌾",image:"https://images.unsplash.com/photo-1515543904379-3d757afe72e2?auto=format&fit=crop&w=900&q=80",items:["Aashirvaad Atta","Fortune Chakki Fresh Atta","Multigrain Flour","Maida","Sooji Rava","Besan","Brown Rice","Basmati Rice","Poha","Jowar Flour"]},{id:"pulses-lentils",name:"Pulses & Lentils",emoji:"🫘",image:"https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",items:["Toor Dal","Moong Dal","Masoor Dal","Urad Dal","Chana Dal","Rajma","Kabuli Chana","Moth Beans","Green Gram","Kala Chana"]},{id:"spices-masalas",name:"Spices & Masalas",emoji:"🌶️",image:"https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=80",items:["Turmeric Powder","Red Chilli Powder","Coriander Powder","Cumin Seeds","Garam Masala","Kitchen King Masala","Pav Bhaji Masala","Sambar Powder","Mustard Seeds","Black Pepper"]},{id:"oils-ghee",name:"Oils & Ghee",emoji:"🫗",image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=80",items:["Fortune Sunflower Oil","Groundnut Oil","Mustard Oil","Olive Oil","Cow Ghee","Buffalo Ghee","Rice Bran Oil","Soyabean Oil","Sesame Oil","Vanaspati"]},{id:"dairy-eggs",name:"Dairy & Eggs",emoji:"🥛",image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",items:["Amul Gold Milk","Fresh Curd","Paneer","Butter","Cheese Cubes","Eggs","Buttermilk","Whipping Cream","Flavoured Milk","Greek Yogurt"]},{id:"snacks-namkeen",name:"Snacks & Namkeen",emoji:"🍘",image:"https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",items:["Lay's Magic Masala","Haldiram Bhujia","Kurkure Masala Munch","Parle-G","Khakhra","Moong Dal Namkeen","Sev","Chivda","Mathri","Masala Peanuts"]},{id:"beverages",name:"Beverages",emoji:"🥤",image:"https://images.unsplash.com/photo-1543253539-89f1b0d59b0c?auto=format&fit=crop&w=900&q=80",items:["Coca-Cola","Pepsi","Sprite","Frooti","Mango Juice","Orange Juice","Mineral Water","Cold Coffee","Tender Coconut Water","Energy Drink"]},{id:"tea-coffee",name:"Tea & Coffee",emoji:"☕",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",items:["Tata Tea Gold","Brooke Bond Red Label","Society Tea","Green Tea","Instant Coffee","Filter Coffee","Masala Tea","Elaichi Tea","Coffee Sachets","Sugar Free Sweetener"]},{id:"fresh-fruits",name:"Fresh Fruits",emoji:"🍎",image:"https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",items:["Apples","Bananas","Oranges","Pomegranates","Papaya","Mangoes","Grapes","Watermelon","Guava","Pineapple"]},{id:"fresh-vegetables",name:"Fresh Vegetables",emoji:"🥬",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",items:["Potato","Onion","Tomato","Cauliflower","Cabbage","Green Chilli","Coriander","Brinjal","Okra","Bottle Gourd"]},{id:"packaged-foods",name:"Packaged Foods",emoji:"🍜",image:"https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=80",items:["Maggi Noodles","Pasta","Macaroni","Ready Poha Mix","Soup Packets","Cornflakes","Oats","Peanut Butter","Jam","Instant Upma Mix"]},{id:"cleaning-home",name:"Cleaning & Home",emoji:"🧼",image:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",items:["Surf Excel","Ariel Detergent","Dishwash Liquid","Floor Cleaner","Toilet Cleaner","Garbage Bags","Scrub Pads","Mop Refill","Glass Cleaner","Room Freshener"]},{id:"personal-care",name:"Personal Care",emoji:"🧴",image:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",items:["Bath Soap","Shampoo","Hair Oil","Face Wash","Toothpaste","Toothbrush","Body Lotion","Talcum Powder","Hand Wash","Shaving Cream"]},{id:"sweets-dry-fruits",name:"Sweets & Dry Fruits",emoji:"🥜",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=900&q=80",items:["Kaju","Badam","Pista","Raisins","Dates","Soan Papdi","Besan Ladoo","Kaju Katli","Dry Fruit Mix","Anjeer"]}];function t2(t){var e;return((e=jv.find(n=>n.name===t))==null?void 0:e.image)||jv[0].image}const n2=[["Aashirvaad Atta","Grains & Flours","5kg",285,320,4.7,148,"Bestseller","🌾"],["Fortune Basmati Rice","Grains & Flours","5kg",449,520,4.6,97,"Popular","🍚"],["Toor Dal","Pulses & Lentils","1kg",158,185,4.5,88,"Daily Saver","🫘"],["Kabuli Chana","Pulses & Lentils","1kg",132,155,4.4,64,"Popular","🫘"],["Turmeric Powder","Spices & Masalas","500g",112,135,4.8,120,"Kitchen Pick","🌶️"],["Garam Masala","Spices & Masalas","200g",86,110,4.6,53,"Bestseller","🧂"],["Fortune Sunflower Oil","Oils & Ghee","1L",168,189,4.5,140,"Popular","🫗"],["Cow Ghee","Oils & Ghee","1L",615,690,4.7,76,"Premium","🧈"],["Amul Gold Milk","Dairy & Eggs","1L",68,72,4.8,202,"Fresh","🥛"],["Farm Eggs","Dairy & Eggs","12 pcs",84,96,4.4,91,"Daily Fresh","🥚"],["Haldiram Bhujia","Snacks & Namkeen","400g",94,115,4.7,112,"Bestseller","🍘"],["Lay's Magic Masala","Snacks & Namkeen","Large Pack",45,50,4.3,131,"Popular","🥔"],["Coca-Cola","Beverages","2L",95,110,4.5,88,"Party Pack","🥤"],["Mango Juice","Beverages","1L",110,125,4.4,67,"Summer Pick","🥭"],["Tata Tea Gold","Tea & Coffee","1kg",565,630,4.8,119,"Popular","☕"],["Instant Coffee","Tea & Coffee","100g",155,180,4.5,58,"Hot Pick","☕"],["Apples","Fresh Fruits","1kg",145,170,4.3,39,"Fresh","🍎"],["Bananas","Fresh Fruits","12 pcs",60,70,4.6,63,"Fresh","🍌"],["Potato","Fresh Vegetables","1kg",30,36,4.4,77,"Fresh","🥔"],["Tomato","Fresh Vegetables","1kg",32,40,4.2,52,"Daily Fresh","🍅"],["Maggi Noodles","Packaged Foods","4 pack",56,68,4.7,156,"Bestseller","🍜"],["Cornflakes","Packaged Foods","750g",185,215,4.3,42,"Breakfast Pick","🥣"],["Surf Excel","Cleaning & Home","1kg",225,260,4.6,71,"Popular","🧼"],["Floor Cleaner","Cleaning & Home","2L",188,220,4.4,36,"Home Care","🪣"],["Bath Soap Value Pack","Personal Care","5 pcs",120,145,4.5,55,"Value Pack","🧼"],["Toothpaste Family Pack","Personal Care","300g",135,160,4.4,49,"Popular","🪥"],["Kaju","Sweets & Dry Fruits","500g",495,560,4.8,81,"Premium","🥜"],["Soan Papdi","Sweets & Dry Fruits","500g",160,190,4.2,29,"Festive","🍬"]],X4=[{id:"banner-1",title:"Weekend Grocery Rush",subtitle:"Fresh staples, namkeen, and dairy picks packed for the family.",cta:"Shop now",image:"https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #1e9b6d, #104f4f)"},{id:"banner-2",title:"Tea Time Specials",subtitle:"Biscuits, tea, coffee, and evening snack combos with local savings.",cta:"View offers",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #e8843f, #b64c36)"},{id:"banner-3",title:"Fresh Fruits & Veggies",subtitle:"Everyday freshness for Surendranagar households with quick pickup.",cta:"Order produce",image:"https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #74a84a, #285943)"},{id:"banner-4",title:"Dry Fruit Gifting Picks",subtitle:"Premium sweets, dry fruits, and festive family favorites in one cart.",cta:"See gifting range",image:"https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&w=1400&q=80",gradient:"linear-gradient(135deg, #5e3f99, #aa5b86)"}],Z4=[{id:"coupon-1",code:"HRWELCOME",title:"Welcome savings",discount:"₹50 off above ₹999"},{id:"coupon-2",code:"SNACK25",title:"Snack combo offer",discount:"₹25 off on snacks"},{id:"coupon-3",code:"FRESH10",title:"Fresh basket bonus",discount:"10% off on fruits & vegetables"}],eL=[{id:"DEMO-101",status:"Delivered",total:845,createdAt:"2026-05-14T10:30:00.000Z",items:[{title:"Aashirvaad Atta",quantity:1},{title:"Amul Gold Milk",quantity:2},{title:"Tomato",quantity:1}]},{id:"DEMO-102",status:"Out for delivery",total:610,createdAt:"2026-05-20T17:45:00.000Z",items:[{title:"Haldiram Bhujia",quantity:1},{title:"Tata Tea Gold",quantity:1},{title:"Coca-Cola",quantity:1}]},{id:"DEMO-103",status:"Ready for pickup",total:330,createdAt:"2026-05-22T12:15:00.000Z",items:[{title:"Potato",quantity:2},{title:"Toor Dal",quantity:1},{title:"Bath Soap Value Pack",quantity:1}]}],tL={name:"Divyraj Customer",email:"customer@example.com",phone:"+91 98765 43210",address:"By Pass Road, Surendranagar, Gujarat"},nL={orderUpdates:!0,offers:!0,preorderAlerts:!0,newArrivals:!1,walletCredits:!0},rL={balance:480,transactions:[{id:"txn-1",label:"Wallet top-up",amount:500,type:"credit"},{id:"txn-2",label:"Order adjustment",amount:20,type:"debit"}]},iL=n2.map(([t,e,n,r,i,s,a,l,u],h)=>({id:`prod-${h+1}`,name:t,category:e,size:n,price:r,mrp:i,rating:s,reviews:a,badge:l,emoji:u,image:t2(e),discount:Math.round((i-r)/i*100),stock:h%4===0?"Fresh stock":h%3===0?"Fast moving":"Ready to dispatch",description:`${t} in ${n} with quick local availability for homes across Surendranagar.`})),sL={banners:"hr-react-banners",cart:"hr-react-cart",notifications:"hr-react-notifications",orders:"hr-react-demo-orders",pinAdmin:"hr-react-admin-pin-ok",pinDivyraj:"hr-react-divyraj-pin-ok",products:"hr-react-products",profile:"hr-react-profile",recentlyViewed:"hr-react-recently-viewed",settings:"hr-react-settings",wallet:"hr-react-wallet",wishlist:"hr-react-wishlist"};function r2(t,e){try{const n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function i2(t,e){localStorage.setItem(t,JSON.stringify(e))}function Bv(t){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(t||0)}function aL(t){return new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(t))}function oL(t,e,n,r){const i=u=>u*Math.PI/180,s=i(n-t),a=i(r-e),l=Math.sin(s/2)*Math.sin(s/2)+Math.cos(i(t))*Math.cos(i(n))*Math.sin(a/2)*Math.sin(a/2);return 6371*(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)))}function lL(t,e){return Number.isFinite(t)?e?t<=2?20:t<=4?30:t<=6?45:60:0:20}function uL(t){return Number.isFinite(t)?`${t.toFixed(1)} km from ${e2.city}`:"Location not detected yet"}function cL(t,e){const n=[],r=new Date;let i=e,s=t;for(;i<r.getFullYear()||i===r.getFullYear()&&s<=r.getMonth()+1;){const a=new Date(i,s-1,1);n.push({id:`${i}-${String(s).padStart(2,"0")}`,month:s,year:i,label:a.toLocaleString("en-IN",{month:"long",year:"numeric"})}),s+=1,s===13&&(s=1,i+=1)}return n}function s2(t){return String(t||"HR").split(" ").filter(Boolean).slice(0,2).map(e=>{var n;return((n=e[0])==null?void 0:n.toUpperCase())||""}).join("")}const ue={bg:"#f4f6f1",card:"#ffffff",text:"#10231a",subtext:"#5f6f65",line:"#dbe5dd",accent:"#157347",accentSoft:"#dff5e9",danger:"#d24747"};function xE({compact:t=!1}){return K.jsx("div",{style:{width:t?40:54,height:t?40:54,borderRadius:16,background:"linear-gradient(135deg, #157347, #0f5132)",color:"#fff",display:"grid",placeItems:"center",fontWeight:800,letterSpacing:"0.08em",boxShadow:"0 12px 24px rgba(21, 115, 71, 0.22)"},children:"HR"})}function hL({compact:t=!1,tagline:e}){return K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:t?10:14},children:[K.jsx(xE,{compact:t}),K.jsxs("div",{children:[K.jsx("div",{style:{fontWeight:800,fontSize:t?15:18},children:"HR Supermarket"}),K.jsx("div",{style:{fontSize:t?11:13,color:ue.subtext},children:e})]})]})}function DE({children:t,style:e={}}){return K.jsx("div",{style:{background:ue.card,border:`1px solid ${ue.line}`,borderRadius:24,boxShadow:"0 18px 40px rgba(16, 35, 26, 0.08)",...e},children:t})}function a2({children:t,onClick:e,kind:n="primary",style:r={},disabled:i=!1,type:s="button"}){const a=n==="primary"?{bg:ue.accent,color:"#fff",border:"transparent"}:n==="soft"?{bg:ue.accentSoft,color:ue.accent,border:ue.accentSoft}:n==="ghost"?{bg:"transparent",color:ue.text,border:ue.line}:n==="danger"?{bg:"#fff4f4",color:ue.danger,border:"#ffd1d1"}:{bg:"#fff",color:ue.text,border:ue.line};return K.jsx("button",{type:s,disabled:i,onClick:e,style:{borderRadius:999,padding:"12px 18px",border:`1px solid ${a.border}`,background:a.bg,color:a.color,cursor:i?"not-allowed":"pointer",fontWeight:700,opacity:i?.6:1,...r},children:t})}function dL({value:t,onChange:e,placeholder:n,style:r={}}){return K.jsx("input",{value:t,onChange:i=>e(i.target.value),placeholder:n,style:{width:"100%",borderRadius:18,border:`1px solid ${ue.line}`,padding:"14px 16px",outline:"none",fontSize:15,...r}})}function fL({children:t,tone:e="default",style:n={}}){const r=e==="green"?{bg:"#e5f8ec",color:"#0d683f"}:e==="orange"?{bg:"#fff1de",color:"#a25b10"}:e==="dark"?{bg:"#10231a",color:"#fff"}:{bg:"#f2f4f3",color:ue.subtext};return K.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:6,borderRadius:999,padding:"7px 10px",background:r.bg,color:r.color,fontSize:12,fontWeight:700,...n},children:t})}function pL({open:t,children:e,onClose:n,width:r=420,mobileFull:i=!1}){return K.jsxs(K.Fragment,{children:[K.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:t?"rgba(15, 23, 32, 0.45)":"transparent",pointerEvents:t?"auto":"none",transition:"background 180ms ease",zIndex:50}}),K.jsx("div",{style:{position:"fixed",top:0,right:0,height:"100vh",width:i?"min(100vw, 100%)":`min(${r}px, 100vw)`,background:ue.card,transform:t?"translateX(0)":"translateX(100%)",transition:"transform 240ms ease",zIndex:51,overflowY:"auto",boxShadow:"-20px 0 40px rgba(15, 23, 32, 0.18)"},children:e})]})}function mL({open:t,children:e,onClose:n}){return t?K.jsx("div",{onClick:n,style:{position:"fixed",inset:0,background:"rgba(15, 23, 32, 0.45)",display:"grid",placeItems:"center",padding:20,zIndex:60},children:K.jsx("div",{onClick:r=>r.stopPropagation(),style:{width:"min(760px, 100%)",maxHeight:"85vh",overflowY:"auto",background:"#fff",borderRadius:28,boxShadow:"0 28px 60px rgba(15, 23, 32, 0.2)"},children:e})}):null}function gL({message:t}){return t?K.jsx("div",{style:{position:"fixed",right:18,bottom:18,zIndex:80,background:"#10231a",color:"#fff",borderRadius:18,padding:"14px 18px",boxShadow:"0 18px 30px rgba(16, 35, 26, 0.24)"},children:t}):null}function yL({label:t,value:e,subtext:n,dark:r=!1}){return K.jsxs(DE,{style:{padding:20,background:r?"#132231":"#fff",color:r?"#fff":ue.text},children:[K.jsx("div",{style:{fontSize:13,color:r?"#93a4b6":ue.subtext},children:t}),K.jsx("div",{style:{fontSize:30,fontWeight:800,marginTop:10},children:e}),n?K.jsx("div",{style:{marginTop:10,fontSize:13,color:r?"#93a4b6":ue.subtext},children:n}):null]})}function vL({title:t,subtitle:e,onSubmit:n,pin:r,setPin:i,error:s,dark:a=!1}){return K.jsx("div",{style:{minHeight:"100vh",display:"grid",placeItems:"center",background:a?"#071018":ue.bg,padding:20},children:K.jsxs(DE,{style:{width:"min(420px, 100%)",padding:28,background:a?"#101b27":"#fff",color:a?"#fff":ue.text},children:[K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[K.jsx(xE,{}),K.jsxs("div",{children:[K.jsx("div",{style:{fontWeight:800,fontSize:20},children:t}),K.jsx("div",{style:{color:a?"#8ea3b8":ue.subtext,fontSize:14},children:e})]})]}),K.jsxs("form",{onSubmit:l=>{l.preventDefault(),n()},style:{display:"grid",gap:14},children:[K.jsx("input",{value:r,onChange:l=>i(l.target.value),placeholder:"Enter PIN",type:"password",style:{width:"100%",borderRadius:16,border:`1px solid ${a?"#233243":ue.line}`,padding:"14px 16px",outline:"none",background:a?"#0b141d":"#fff",color:a?"#fff":ue.text}}),s?K.jsx("div",{style:{color:"#ff7676",fontSize:13},children:s}):null,K.jsx(a2,{type:"submit",style:{width:"100%"},children:"Unlock"})]})]})})}function wL({kicker:t,title:e,action:n}){return K.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:16,marginBottom:18,flexWrap:"wrap"},children:[K.jsxs("div",{children:[K.jsx("div",{style:{fontSize:12,textTransform:"uppercase",color:ue.accent,fontWeight:800},children:t}),K.jsx("div",{style:{fontSize:28,fontWeight:800,marginTop:6},children:e})]}),n]})}function bL({items:t,active:e,onChange:n}){return K.jsx("div",{style:{position:"fixed",left:0,right:0,bottom:0,zIndex:45,background:"#fff",borderTop:`1px solid ${ue.line}`,display:"grid",gridTemplateColumns:`repeat(${t.length}, 1fr)`},children:t.map(r=>K.jsxs("button",{onClick:()=>n(r.key),style:{border:0,background:"transparent",padding:"10px 8px 12px",color:e===r.key?ue.accent:ue.subtext,fontWeight:e===r.key?800:600},children:[K.jsx("div",{style:{fontSize:20},children:r.icon}),K.jsx("div",{style:{fontSize:11,marginTop:4},children:r.label})]},r.key))})}function SL({price:t,mrp:e,discount:n}){return K.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[K.jsx("div",{style:{fontSize:20,fontWeight:800},children:Bv(t)}),K.jsx("div",{style:{fontSize:14,color:ue.subtext,textDecoration:"line-through"},children:Bv(e)}),K.jsxs("div",{style:{color:ue.accent,fontWeight:800,fontSize:14},children:[n,"% off"]})]})}function EL({name:t}){return K.jsx("div",{style:{width:44,height:44,borderRadius:"50%",display:"grid",placeItems:"center",background:ue.accentSoft,color:ue.accent,fontWeight:800},children:s2(t)})}const o2=()=>{};var qv={};/**
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
*/const OE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},l2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},RE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|h>>6,b=h&63;u||(b=64,a||(m=64)),r.push(n[f],n[p],n[m],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(OE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new u2;const h=s<<2|a>>4;if(r.push(h),l!==64){const f=a<<4&240|l>>2;if(r.push(f),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c2=function(t){const e=OE(t);return RE.encodeByteArray(e,!0)},rc=function(t){return c2(t).replace(/\./g,"")},LE=function(t){try{return RE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
*/const d2=()=>h2().__FIREBASE_DEFAULTS__,f2=()=>{if(typeof process>"u"||typeof qv>"u")return;const t=qv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},p2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LE(t[1]);return e&&JSON.parse(e)},Bc=()=>{try{return o2()||d2()||f2()||p2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ME=t=>{var e,n;return(n=(e=Bc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},m2=t=>{const e=ME(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FE=()=>{var t;return(t=Bc())==null?void 0:t.config},UE=t=>{var e;return(e=Bc())==null?void 0:e[`_${t}`]};/**
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
*/function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function v2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function w2(){var t;const e=(t=Bc())==null?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function b2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function um(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function S2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E2(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function k2(){return!w2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cm(){try{return typeof indexedDB=="object"}catch{return!1}}function hm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function zE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
*/const I2="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=I2,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?T2(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new wn(i,l,r)}}function T2(t,e){return t.replace(_2,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _2=/\{\$([^}]+)}/g;function C2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ei(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if($v(s)&&$v(a)){if(!ei(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $v(t){return t!==null&&typeof t=="object"}/**
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
*/function al(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ja(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function N2(t,e){const n=new A2(t,e);return n.subscribe.bind(n)}class A2{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");P2(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wd),i.error===void 0&&(i.error=wd),i.complete===void 0&&(i.complete=wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wd(){}/**
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
*/const x2=1e3,D2=2,O2=4*60*60*1e3,R2=.5;function Hv(t,e=x2,n=D2){const r=e*Math.pow(n,t),i=Math.round(R2*r*(Math.random()-.5)*2);return Math.min(O2,r+i)}/**
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
*/function Ae(t){return t&&t._delegate?t._delegate:t}/**
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
*/function ol(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function VE(t){return(await fetch(t,{credentials:"include"})).ok}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
*/const Ci="[DEFAULT]";/**
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
*/class L2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new g2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(F2(e))try{this.getOrInitializeService({instanceIdentifier:Ci})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ci){return this.instances.has(e)}getOptions(e=Ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:M2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ci){return this.component?this.component.multipleInstances?e:Ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function M2(t){return t===Ci?void 0:t}function F2(t){return t.instantiationMode==="EAGER"}/**
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
*/class U2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new L2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
*/var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const z2={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},V2=se.INFO,j2={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},B2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=j2[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qc{constructor(e){this.name=e,this._logLevel=V2,this._logHandler=B2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const q2=(t,e)=>e.some(n=>t instanceof n);let Gv,Kv;function $2(){return Gv||(Gv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function H2(){return Kv||(Kv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const jE=new WeakMap,Rf=new WeakMap,BE=new WeakMap,bd=new WeakMap,dm=new WeakMap;function G2(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Gr(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&jE.set(n,t)}).catch(()=>{}),dm.set(e,t),e}function K2(t){if(Rf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Rf.set(t,e)}let Lf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||BE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W2(t){Lf=t(Lf)}function Q2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sd(this),e,...n);return BE.set(r,e.sort?e.sort():[e]),Gr(r)}:H2().includes(t)?function(...e){return t.apply(Sd(this),e),Gr(jE.get(this))}:function(...e){return Gr(t.apply(Sd(this),e))}}function Y2(t){return typeof t=="function"?Q2(t):(t instanceof IDBTransaction&&K2(t),q2(t,$2())?new Proxy(t,Lf):t)}function Gr(t){if(t instanceof IDBRequest)return G2(t);if(bd.has(t))return bd.get(t);const e=Y2(t);return e!==t&&(bd.set(t,e),dm.set(e,t)),e}const Sd=t=>dm.get(t);function qE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Gr(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Gr(a.result),u.oldVersion,u.newVersion,Gr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const J2=["get","getKey","getAll","getAllKeys","count"],X2=["put","add","delete","clear"],Ed=new Map;function Wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ed.get(e))return Ed.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=X2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||J2.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ed.set(e,s),s}W2(t=>({...t,get:(e,n,r)=>Wv(e,n)||t.get(e,n,r),has:(e,n)=>!!Wv(e,n)||t.has(e,n)}));/**
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
*/class Z2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(eN(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function eN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mf="@firebase/app",Qv="0.14.12";/**
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
*/const or=new qc("@firebase/app"),tN="@firebase/app-compat",nN="@firebase/analytics-compat",rN="@firebase/analytics",iN="@firebase/app-check-compat",sN="@firebase/app-check",aN="@firebase/auth",oN="@firebase/auth-compat",lN="@firebase/database",uN="@firebase/data-connect",cN="@firebase/database-compat",hN="@firebase/functions",dN="@firebase/functions-compat",fN="@firebase/installations",pN="@firebase/installations-compat",mN="@firebase/messaging",gN="@firebase/messaging-compat",yN="@firebase/performance",vN="@firebase/performance-compat",wN="@firebase/remote-config",bN="@firebase/remote-config-compat",SN="@firebase/storage",EN="@firebase/storage-compat",kN="@firebase/firestore",IN="@firebase/ai",TN="@firebase/firestore-compat",_N="firebase",CN="12.13.0";/**
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
*/const Ff="[DEFAULT]",NN={[Mf]:"fire-core",[tN]:"fire-core-compat",[rN]:"fire-analytics",[nN]:"fire-analytics-compat",[sN]:"fire-app-check",[iN]:"fire-app-check-compat",[aN]:"fire-auth",[oN]:"fire-auth-compat",[lN]:"fire-rtdb",[uN]:"fire-data-connect",[cN]:"fire-rtdb-compat",[hN]:"fire-fn",[dN]:"fire-fn-compat",[fN]:"fire-iid",[pN]:"fire-iid-compat",[mN]:"fire-fcm",[gN]:"fire-fcm-compat",[yN]:"fire-perf",[vN]:"fire-perf-compat",[wN]:"fire-rc",[bN]:"fire-rc-compat",[SN]:"fire-gcs",[EN]:"fire-gcs-compat",[kN]:"fire-fst",[TN]:"fire-fst-compat",[IN]:"fire-vertex","fire-js":"fire-js",[_N]:"fire-js-all"};/**
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
*/const ic=new Map,AN=new Map,Uf=new Map;function Yv(t,e){try{t.container.addComponent(e)}catch(n){or.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xn(t){const e=t.name;if(Uf.has(e))return or.debug(`There were multiple attempts to register component ${e}.`),!1;Uf.set(e,t);for(const n of ic.values())Yv(n,t);for(const n of AN.values())Yv(n,t);return!0}function ns(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t==null?!1:t.settings!==void 0}/**
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
*/const PN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kr=new ts("app","Firebase",PN);/**
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
*/class xN{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kr.create("app-deleted",{appName:this._name})}}/**
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
*/const ma=CN;function $E(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ff,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Kr.create("bad-app-name",{appName:String(i)});if(n||(n=FE()),!n)throw Kr.create("no-options");const s=ic.get(i);if(s){if(ei(n,s.options)&&ei(r,s.config))return s;throw Kr.create("duplicate-app",{appName:i})}const a=new U2(i);for(const u of Uf.values())a.addComponent(u);const l=new xN(n,r,a);return ic.set(i,l),l}function fm(t=Ff){const e=ic.get(t);if(!e&&t===Ff&&FE())return $E();if(!e)throw Kr.create("no-app",{appName:t});return e}function rn(t,e,n){let r=NN[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),or.warn(a.join(" "));return}xn(new gn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
*/const DN="firebase-heartbeat-database",ON=1,Fo="firebase-heartbeat-store";let kd=null;function HE(){return kd||(kd=qE(DN,ON,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Kr.create("idb-open",{originalErrorMessage:t.message})})),kd}async function RN(t){try{const e=(await HE()).transaction(Fo),n=await e.objectStore(Fo).get(GE(t));return await e.done,n}catch(e){if(e instanceof wn)or.warn(e.message);else{const n=Kr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});or.warn(n.message)}}}async function Jv(t,e){try{const n=(await HE()).transaction(Fo,"readwrite");await n.objectStore(Fo).put(e,GE(t)),await n.done}catch(n){if(n instanceof wn)or.warn(n.message);else{const r=Kr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});or.warn(r.message)}}}function GE(t){return`${t.name}!${t.options.appId}`}/**
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
*/const LN=1024,MN=30;class FN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>MN){const s=VN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){or.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xv(),{heartbeatsToSend:r,unsentEntries:i}=UN(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return or.warn(n),""}}}function Xv(){return new Date().toISOString().substring(0,10)}function UN(t,e=LN){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Zv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cm()?hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await RN(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function Zv(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function VN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
*/function jN(t){xn(new gn("platform-logger",e=>new Z2(e),"PRIVATE")),xn(new gn("heartbeat",e=>new FN(e),"PRIVATE")),rn(Mf,Qv,t),rn(Mf,Qv,"esm2020"),rn("fire-js","")}jN("");var BN="firebase",qN="12.13.0";/**
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
*/rn(BN,qN,"app");const KE="@firebase/installations",pm="0.6.22";/**
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
*/const WE=1e4,QE=`w:${pm}`,YE="FIS_v2",$N="https://firebaseinstallations.googleapis.com/v1",HN=60*60*1e3,GN="installations",KN="Installations";/**
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
*/const WN={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},qi=new ts(GN,KN,WN);function JE(t){return t instanceof wn&&t.code.includes("request-failed")}/**
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
*/function XE({projectId:t}){return`${$N}/projects/${t}/installations`}function ZE(t){return{token:t.token,requestStatus:2,expiresIn:YN(t.expiresIn),creationTime:Date.now()}}async function ek(t,e){const n=(await e.json()).error;return qi.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function tk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QN(t,{refreshToken:e}){const n=tk(t);return n.append("Authorization",JN(e)),n}async function nk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YN(t){return Number(t.replace("s","000"))}function JN(t){return`${YE} ${t}`}/**
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
*/async function XN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XE(t),i=tk(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={fid:n,authVersion:YE,appId:t.appId,sdkVersion:QE},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await nk(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ZE(h.authToken)}}else throw await ek("Create Installation",u)}/**
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
*/function rk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
*/function ZN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
*/const eA=/^[cdef][\w-]{21}$/,zf="";function tA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=nA(t);return eA.test(e)?e:zf}catch{return zf}}function nA(t){return ZN(t).substr(0,22)}/**
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
*/function $c(t){return`${t.appName}!${t.appId}`}/**
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
*/const ik=new Map;function sk(t,e){const n=$c(t);ak(n,e),rA(n,e)}function ak(t,e){const n=ik.get(t);if(n)for(const r of n)r(e)}function rA(t,e){const n=iA();n&&n.postMessage({key:t,fid:e}),sA()}let Ni=null;function iA(){return!Ni&&"BroadcastChannel"in self&&(Ni=new BroadcastChannel("[Firebase] FID Change"),Ni.onmessage=t=>{ak(t.data.key,t.data.fid)}),Ni}function sA(){ik.size===0&&Ni&&(Ni.close(),Ni=null)}/**
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
*/const aA="firebase-installations-database",oA=1,$i="firebase-installations-store";let Id=null;function mm(){return Id||(Id=qE(aA,oA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}})),Id}async function sc(t,e){const n=$c(t),r=(await mm()).transaction($i,"readwrite"),i=r.objectStore($i),s=await i.get(n);return await i.put(e,n),await r.done,(!s||s.fid!==e.fid)&&sk(t,e.fid),e}async function ok(t){const e=$c(t),n=(await mm()).transaction($i,"readwrite");await n.objectStore($i).delete(e),await n.done}async function Hc(t,e){const n=$c(t),r=(await mm()).transaction($i,"readwrite"),i=r.objectStore($i),s=await i.get(n),a=e(s);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!s||s.fid!==a.fid)&&sk(t,a.fid),a}/**
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
*/async function gm(t){let e;const n=await Hc(t.appConfig,r=>{const i=lA(r),s=uA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function lA(t){const e=t||{fid:tA(),registrationStatus:0};return lk(e)}function uA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(qi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:hA(t)}:{installationEntry:e}}async function cA(t,e){try{const n=await XN(t,e);return sc(t.appConfig,n)}catch(n){throw JE(n)&&n.customData.serverCode===409?await ok(t.appConfig):await sc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function hA(t){let e=await ew(t.appConfig);for(;e.registrationStatus===1;)await rk(100),e=await ew(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gm(t);return r||n}return e}function ew(t){return Hc(t,e=>{if(!e)throw qi.create("installation-not-found");return lk(e)})}function lk(t){return dA(t)?{fid:t.fid,registrationStatus:0}:t}function dA(t){return t.registrationStatus===1&&t.registrationTime+WE<Date.now()}/**
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
*/async function fA({appConfig:t,heartbeatServiceProvider:e},n){const r=pA(t,n),i=QN(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const a={installation:{sdkVersion:QE,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(a)},u=await nk(()=>fetch(r,l));if(u.ok){const h=await u.json();return ZE(h)}else throw await ek("Generate Auth Token",u)}function pA(t,{fid:e}){return`${XE(t)}/${e}/authTokens:generate`}/**
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
*/async function ym(t,e=!1){let n;const r=await Hc(t.appConfig,i=>{if(!uk(i))throw qi.create("not-registered");const s=i.authToken;if(!e&&yA(s))return i;if(s.requestStatus===1)return n=mA(t,e),i;{if(!navigator.onLine)throw qi.create("app-offline");const a=wA(i);return n=gA(t,a),a}});return n?await n:r.authToken}async function mA(t,e){let n=await tw(t.appConfig);for(;n.authToken.requestStatus===1;)await rk(100),n=await tw(t.appConfig);const r=n.authToken;return r.requestStatus===0?ym(t,e):r}function tw(t){return Hc(t,e=>{if(!uk(e))throw qi.create("not-registered");const n=e.authToken;return bA(n)?{...e,authToken:{requestStatus:0}}:e})}async function gA(t,e){try{const n=await fA(t,e),r={...e,authToken:n};return await sc(t.appConfig,r),n}catch(n){if(JE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ok(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await sc(t.appConfig,r)}throw n}}function uk(t){return t!==void 0&&t.registrationStatus===2}function yA(t){return t.requestStatus===2&&!vA(t)}function vA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HN}function wA(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function bA(t){return t.requestStatus===1&&t.requestTime+WE<Date.now()}/**
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
*/async function SA(t){const e=t,{installationEntry:n,registrationPromise:r}=await gm(e);return r?r.catch(console.error):ym(e).catch(console.error),n.fid}/**
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
*/async function EA(t,e=!1){const n=t;return await kA(n),(await ym(n,e)).token}async function kA(t){const{registrationPromise:e}=await gm(t);e&&await e}/**
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
*/function IA(t){if(!t||!t.options)throw Td("App Configuration");if(!t.name)throw Td("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Td(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Td(t){return qi.create("missing-app-config-values",{valueName:t})}/**
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
*/const ck="installations",TA="installations-internal",_A=t=>{const e=t.getProvider("app").getImmediate(),n=IA(e),r=ns(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},CA=t=>{const e=t.getProvider("app").getImmediate(),n=ns(e,ck).getImmediate();return{getId:()=>SA(n),getToken:r=>EA(n,r)}};function NA(){xn(new gn(ck,_A,"PUBLIC")),xn(new gn(TA,CA,"PRIVATE"))}NA();rn(KE,pm);rn(KE,pm,"esm2020");/**
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
*/const ac="analytics",AA="firebase_id",PA="origin",xA=60*1e3,DA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vm="https://www.googletagmanager.com/gtag/js";/**
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
*/const bt=new qc("@firebase/analytics");/**
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
*/const OA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new ts("analytics","Analytics",OA);/**
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
*/function RA(t){if(!t.startsWith(vm)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return bt.warn(e.message),""}return t}function hk(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function LA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function MA(t,e){const n=LA("firebase-js-sdk-policy",{createScriptURL:RA}),r=document.createElement("script"),i=`${vm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function FA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function UA(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const l=(await hk(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(l){bt.error(l)}t("config",i,s)}async function zA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const l=await hk(n);for(const u of a){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){bt.error(s)}}function VA(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[l,u]=a;await zA(t,e,n,l,u)}else if(s==="config"){const[l,u]=a;await UA(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=a;t("consent",l,u)}else if(s==="get"){const[l,u,h]=a;t("get",l,u,h)}else if(s==="set"){const[l]=a;t("set",l)}else t(s,...a)}catch(l){bt.error(l)}}return i}function jA(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function BA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vm)&&n.src.includes(t))return n;return null}/**
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
*/const qA=30,$A=1e3;class HA{constructor(e={},n=$A){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const dk=new HA;function GA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function KA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:GA(r)},s=DA.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let l="";try{const u=await a.json();(e=u.error)!=null&&e.message&&(l=u.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function WA(t,e=dk,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $t.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new JA;return setTimeout(async()=>{l.abort()},xA),fk({appId:r,apiKey:i,measurementId:s},a,l,e)}async function fk(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=dk){var s;const{appId:a,measurementId:l}=t;try{await QA(r,e)}catch(u){if(l)return bt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw u}try{const u=await KA(t);return i.deleteThrottleMetadata(a),u}catch(u){const h=u;if(!YA(h)){if(i.deleteThrottleMetadata(a),l)return bt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:l};throw u}const f=Number((s=h==null?void 0:h.customData)==null?void 0:s.httpStatus)===503?Hv(n,i.intervalMillis,qA):Hv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(a,p),bt.debug(`Calling attemptFetch again in ${f} millis`),fk(t,p,r,i)}}function QA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function YA(t){if(!(t instanceof wn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class JA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function XA(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a={...r,send_to:s};t("event",n,a)}}async function ZA(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
*/async function eP(){if(cm())try{await hm()}catch(t){return bt.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return bt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function tP(t,e,n,r,i,s,a){const l=WA(t);l.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&bt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>bt.error(m)),e.push(l);const u=eP().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([l,u]);BA(s)||MA(s,h.measurementId),i("js",new Date);const p=(a==null?void 0:a.config)??{};return p[PA]="firebase",p.update=!0,f!=null&&(p[AA]=f),i("config",h.measurementId,p),h.measurementId}/**
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
*/class nP{constructor(e){this.app=e}_delete(){return delete zs[this.app.options.appId],Promise.resolve()}}let zs={},nw=[];const rw={};let _d="dataLayer",rP="gtag",iw,wm,sw=!1;function iP(){const t=[];if(um()&&t.push("This is a browser extension environment."),zE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});bt.warn(n.message)}}function sP(t,e,n){iP();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)bt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(zs[r]!=null)throw $t.create("already-exists",{id:r});if(!sw){FA(_d);const{wrappedGtag:i,gtagCore:s}=jA(zs,nw,rw,_d,rP);wm=i,iw=s,sw=!0}return zs[r]=tP(t,nw,rw,e,iw,_d,n),new nP(t)}function aP(t=fm()){t=Ae(t);const e=ns(t,ac);return e.isInitialized()?e.getImmediate():oP(t)}function oP(t,e={}){const n=ns(t,ac);if(n.isInitialized()){const r=n.getImmediate();if(ei(e,n.getOptions()))return r;throw $t.create("already-initialized")}return n.initialize({options:e})}async function lP(){if(um()||!zE()||!cm())return!1;try{return await hm()}catch{return!1}}function uP(t,e,n){t=Ae(t),ZA(wm,zs[t.app.options.appId],e,n).catch(r=>bt.error(r))}function cP(t,e,n,r){t=Ae(t),XA(wm,zs[t.app.options.appId],e,n,r).catch(i=>bt.error(i))}const aw="@firebase/analytics",ow="0.10.22";function hP(){xn(new gn(ac,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return sP(r,i,n)},"PUBLIC")),xn(new gn("analytics-internal",t,"PRIVATE")),rn(aw,ow),rn(aw,ow,"esm2020");function t(e){try{const n=e.getProvider(ac).getImmediate();return{logEvent:(r,i,s)=>cP(n,r,i,s),setUserProperties:(r,i)=>uP(n,r,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}hP();function pk(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dP=pk,mk=new ts("auth","Firebase",pk());/**
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
*/const oc=new qc("@firebase/auth");function fP(t,...e){oc.logLevel<=se.WARN&&oc.warn(`Auth (${ma}): ${t}`,...e)}function vu(t,...e){oc.logLevel<=se.ERROR&&oc.error(`Auth (${ma}): ${t}`,...e)}/**
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
*/function on(t,...e){throw Sm(t,...e)}function fn(t,...e){return Sm(t,...e)}function bm(t,e,n){const r={...dP(),[e]:n};return new ts("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return bm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pP(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),bm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return mk.create(t,...e)}function $(t,e,...n){if(!t)throw Sm(e,...n)}function Kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function lr(t,e){t||Kn(e)}/**
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
*/function Vf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function mP(){return lw()==="http:"||lw()==="https:"}function lw(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
*/class ll{constructor(e,n){this.shortDelay=e,this.longDelay=n,lr(n>e,"Short delay should be less than long delay!"),this.isMobile=v2()||S2()}get(){return gP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
*/class gk{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
*/const wP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bP=new ll(3e4,6e4);function ci(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fr(t,e,n,r,i={}){return yk(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=al({key:t.config.apiKey,...a}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return b2()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ol(t.emulatorConfig.host)&&(h.credentials="include"),gk.fetch()(await vk(t,t.config.apiHost,n,l),h)})}async function yk(t,e,n){t._canInitEmulator=!1;const r={...vP,...e};try{const i=new EP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Wl(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Wl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw Wl(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bm(t,f,h);on(t,f)}}catch(i){if(i instanceof wn)throw i;on(t,"network-request-failed",{message:String(i)})}}async function ul(t,e,n,r,i={}){const s=await fr(t,e,n,r,i);return"mfaPendingCredential"in s&&on(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vk(t,e,n,r){const i=`${e}${n}?${r}`,s=t,a=s.config.emulator?Em(t.config,i):`${t.config.apiScheme}://${i}`;return wP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(a).toString():a}function SP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class EP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),bP.get())})}}function Wl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function uw(t){return t!==void 0&&t.enterprise!==void 0}class kP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return SP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IP(t,e){return fr(t,"GET","/v2/recaptchaConfig",ci(t,e))}/**
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
*/async function TP(t,e){return fr(t,"POST","/v1/accounts:delete",e)}async function lc(t,e){return fr(t,"POST","/v1/accounts:lookup",e)}/**
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
*/function vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _P(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),i=km(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vo(Cd(i.auth_time)),issuedAtTime:vo(Cd(i.iat)),expirationTime:vo(Cd(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Cd(t){return Number(t)*1e3}function km(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=LE(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cw(t){const e=km(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
*/async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&CP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function CP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
*/class NP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
*/async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await na(t,lc(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=(e=s.providerUserInfo)!=null&&e.length?wk(s.providerUserInfo):[],l=PP(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new jf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function AP(t){const e=Ae(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PP(t,e){return[...t.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function wk(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
*/async function xP(t,e){const n=await yk(t,{},async()=>{const r=al({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=await vk(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ol(t.emulatorConfig.host)&&(u.credentials="include"),gk.fetch()(a,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DP(t,e){return fr(t,"POST","/v2/accounts:revokeToken",ci(t,e))}/**
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
*/class Vs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=cw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Vs;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vs,this.toJSON())}_performRefresh(){return Kn("not implemented")}}/**
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
*/function Er(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new NP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _P(this,e)}reload(){return AP(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(Zn(this.auth));const e=await this.getIdToken();return await na(this,TP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,a=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:b,providerData:A,stsTokenManager:L}=n;$(p&&L,e,"internal-error");const M=Vs.fromJSON(this.name,L);$(typeof p=="string",e,"internal-error"),Er(r,e.name),Er(i,e.name),$(typeof m=="boolean",e,"internal-error"),$(typeof b=="boolean",e,"internal-error"),Er(s,e.name),Er(a,e.name),Er(l,e.name),Er(u,e.name),Er(h,e.name),Er(f,e.name);const I=new dn({uid:p,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:s,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:f});return A&&Array.isArray(A)&&(I.providerData=A.map(S=>({...S}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vs;i.updateFromServerResponse(n);const s=new dn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await uc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?wk(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vs;l.updateFromIdToken(r);const u=new dn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
*/const hw=new Map;function Wn(t){lr(t instanceof Function,"Expected a class definition");let e=hw.get(t);return e?(lr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hw.set(t,e),e)}/**
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
*/class bk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bk.type="NONE";const dw=bk;/**
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
*/function wu(t,e,n){return`firebase:${t}:${e}:${n}`}class js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wu(this.userKey,i.apiKey,s),this.fullPersistenceKey=wu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await lc(this.auth,{idToken:e}).catch(()=>{});return n?dn._fromGetAccountInfoResponse(this.auth,n,e):null}return dn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new js(Wn(dw),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Wn(dw);const a=wu(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const m=await lc(e,{idToken:f}).catch(()=>{});if(!m)break;p=await dn._fromGetAccountInfoResponse(e,m,f)}else p=dn._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new js(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new js(s,e,r))}}/**
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
*/function fw(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ik(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_k(e))return"Blackberry";if(Ck(e))return"Webos";if(Ek(e))return"Safari";if((e.includes("chrome/")||kk(e))&&!e.includes("edge/"))return"Chrome";if(Tk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sk(t=mt()){return/firefox\//i.test(t)}function Ek(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kk(t=mt()){return/crios\//i.test(t)}function Ik(t=mt()){return/iemobile/i.test(t)}function Tk(t=mt()){return/android/i.test(t)}function _k(t=mt()){return/blackberry/i.test(t)}function Ck(t=mt()){return/webos/i.test(t)}function Im(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OP(t=mt()){var e;return Im(t)&&!!((e=window.navigator)!=null&&e.standalone)}function RP(){return E2()&&document.documentMode===10}function Nk(t=mt()){return Im(t)||Tk(t)||Ck(t)||_k(t)||/windows phone/i.test(t)||Ik(t)}/**
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
*/function Ak(t,e=[]){let n;switch(t){case"Browser":n=fw(mt());break;case"Worker":n=`${fw(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ma}/${r}`}/**
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
*/const FP=6;class UP{constructor(e){var n;const r=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=r.minPasswordLength??FP,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),r.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),r.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),r.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),r.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
*/class zP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pw(this),this.idTokenSubscription=new pw(this),this.beforeStateQueue=new LP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mk,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await js.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lc(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)==null?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&u!=null&&u.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=yP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(Zn(this));const n=e?Ae(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MP(this),n=new UP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await js.create(this,[Wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=((e=this.currentUser)==null?void 0:e.uid)??null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ak(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ft(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken());return n!=null&&n.error&&fP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hi(t){return Ae(t)}class pw{constructor(e){this.auth=e,this.observer=null,this.addObserver=N2(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
*/let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VP(t){Gc=t}function Pk(t){return Gc.loadJS(t)}function jP(){return Gc.recaptchaEnterpriseScript}function BP(){return Gc.gapiScript}function qP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $P{constructor(){this.enterprise=new HP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class HP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const GP="recaptcha-enterprise",xk="NO_RECAPTCHA";class KP{constructor(e){this.type=GP,this.auth=hi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{IP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new kP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;uw(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(xk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $P().execute("siteKey",{action:"verify"}):new Promise((s,a)=>{r(this.auth).then(l=>{if(!n&&uw(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=jP();u.length!==0&&(u+=l),Pk(u).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function mw(t,e,n,r=!1,i=!1){const s=new KP(t);let a;if(i)a=xk;else try{a=await s.verify(n)}catch{a=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Bf(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await mw(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await mw(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
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
*/function WP(t,e){const n=ns(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(ei(i,e??{}))return r;on(r,"already-initialized")}return n.initialize({options:e})}function QP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YP(t,e,n){const r=hi(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Dk(e),{host:a,port:l}=JP(e),u=l===null?"":`:${l}`,h={url:`${s}//${a}${u}/`},f=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(ei(h,r.config.emulator)&&ei(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ol(a)?VE(`${s}//${a}${u}`):XP()}function Dk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JP(t){const e=Dk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:gw(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:gw(a)}}}function gw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
*/class Tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kn("not implemented")}_getIdTokenResponse(e){return Kn("not implemented")}_linkToIdToken(e,n){return Kn("not implemented")}_getReauthenticationResolver(e){return Kn("not implemented")}}async function ZP(t,e){return fr(t,"POST","/v1/accounts:signUp",e)}/**
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
*/async function ex(t,e){return ul(t,"POST","/v1/accounts:signInWithPassword",ci(t,e))}/**
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
*/async function tx(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}async function nx(t,e){return ul(t,"POST","/v1/accounts:signInWithEmailLink",ci(t,e))}/**
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
*/class Uo extends Tm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Uo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Uo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&n!=null&&n.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,n,"signInWithPassword",ex);case"emailLink":return tx(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bf(e,r,"signUpPassword",ZP);case"emailLink":return nx(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
*/const rx="http://localhost";class Hi extends Tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const a=new Hi(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Bs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bs(e,n)}buildRequest(){const e={requestUri:rx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=al(n)}return e}}/**
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
*/function ix(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sx(t){const e=Ja(Xa(t)).link,n=e?Ja(Xa(e)).deep_link_id:null,r=Ja(Xa(t)).deep_link_id;return(r?Ja(Xa(r)).link:null)||r||n||e||t}class _m{constructor(e){const n=Ja(Xa(e)),r=n.apiKey??null,i=n.oobCode??null,s=ix(n.mode??null);$(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=sx(e);try{return new _m(n)}catch{return null}}}/**
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
*/class ga{constructor(){this.providerId=ga.PROVIDER_ID}static credential(e,n){return Uo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=_m.parseLink(n);return $(r,"argument-error"),Uo._fromEmailAndCode(e,r.code,r.tenantId)}}ga.PROVIDER_ID="password";ga.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ga.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
*/class Cm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
*/class cl extends Cm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
*/class Ar extends cl{constructor(){super("facebook.com")}static credential(e){return Hi._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
*/class qn extends cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hi._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
*/class xr extends cl{constructor(){super("twitter.com")}static credential(e,n){return Hi._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xr.credential(n,r)}catch{return null}}}xr.TWITTER_SIGN_IN_METHOD="twitter.com";xr.PROVIDER_ID="twitter.com";/**
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
*/async function ax(t,e){return ul(t,"POST","/v1/accounts:signUp",ci(t,e))}/**
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
*/class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dn._fromIdTokenResponse(e,r,i),a=yw(r);return new Gi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=yw(r);return new Gi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function yw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
*/class cc extends wn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function Ok(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function ox(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gi._forOperation(t,"link",r)}/**
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
*/async function lx(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(Zn(r));const i="reauthenticate";try{const s=await na(t,Ok(r,i,e,t),n);$(s.idToken,r,"internal-error");const a=km(s.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(t.uid===l,r,"user-mismatch"),Gi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&on(r,"user-mismatch"),s}}/**
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
*/async function Rk(t,e,n=!1){if(Ft(t.app))return Promise.reject(Zn(t));const r="signIn",i=await Ok(t,r,e),s=await Gi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function ux(t,e){return Rk(hi(t),e)}/**
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
*/async function Lk(t){const e=hi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cx(t,e,n){if(Ft(t.app))return Promise.reject(Zn(t));const r=hi(t),i=await Bf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ax).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&Lk(t),a}),s=await Gi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function hx(t,e,n){return Ft(t.app)?Promise.reject(Zn(t)):ux(Ae(t),ga.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Lk(t),r})}/**
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
*/async function dx(t,e){return fr(t,"POST","/v1/accounts:update",e)}/**
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
*/async function fx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ae(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await na(r,dx(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}/**
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
*/function px(t,e){return Ae(t).setPersistence(e)}function mx(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function gx(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function yx(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function vx(t){return Ae(t).signOut()}const hc="__sak";/**
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
*/class Mk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
*/const wx=1e3,bx=10;class Fk extends Mk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);RP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fk.type="LOCAL";const Uk=Fk;/**
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
*/class zk extends Mk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zk.type="SESSION";const Vk=zk;/**
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
*/function Sx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
*/class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await Sx(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
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
*/function Nm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
*/class Ex{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Nm("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
*/function Cn(){return window}function kx(t){Cn().location.href=t}/**
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
*/function jk(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Ix(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function _x(){return jk()?self:null}/**
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
*/const Bk="firebaseLocalStorageDb",Cx=1,dc="firebaseLocalStorage",qk="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function Nx(){const t=indexedDB.deleteDatabase(Bk);return new hl(t).toPromise()}function qf(){const t=indexedDB.open(Bk,Cx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:qk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await Nx(),e(await qf()))})})}async function vw(t,e,n){const r=Wc(t,!0).put({[qk]:e,value:n});return new hl(r).toPromise()}async function Ax(t,e){const n=Wc(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function ww(t,e){const n=Wc(t,!0).delete(e);return new hl(n).toPromise()}const Px=800,xx=3;class $k{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(_x()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ix(),!this.activeServiceWorker)return;this.sender=new Ex(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(e=r[0])!=null&&e.fulfilled&&(n=r[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await vw(e,hc,"1"),await ww(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ax(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ww(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Wc(i,!1).getAll();return new hl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Px)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$k.type="LOCAL";const Dx=$k;new ll(3e4,6e4);/**
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
*/function Hk(t,e){return e?Wn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
*/class Am extends Tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ox(t){return Rk(t.auth,new Am(t),t.bypassAuthState)}function Rx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),lx(n,new Am(t),t.bypassAuthState)}async function Lx(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ox(n,new Am(t),t.bypassAuthState)}/**
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
*/class Gk{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ox;case"linkViaPopup":case"linkViaRedirect":return Lx;case"reauthViaPopup":case"reauthViaRedirect":return Rx;default:on(this.auth,"internal-error")}}resolve(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
*/const Mx=new ll(2e3,1e4);async function Fx(t,e,n){if(Ft(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=hi(t);pP(t,e,Cm);const i=Hk(r,n);return new Ai(r,"signInViaPopup",e,i).executeNotNull()}class Ai extends Gk{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){lr(this.filter.length===1,"Popup operations only handle one event");const e=Nm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mx.get())};e()}}Ai.currentPopupAction=null;/**
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
*/const Ux="pendingRedirect",bu=new Map;class zx extends Gk{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bu.get(this.auth._key());if(!e){try{const n=await Vx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(n){e=()=>Promise.reject(n)}bu.set(this.auth._key(),e)}return this.bypassAuthState||bu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Vx(t,e){const n=qx(e),r=Bx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jx(t,e){bu.set(t._key(),e)}function Bx(t){return Wn(t._redirectPersistence)}function qx(t){return wu(Ux,t.config.apiKey,t.name)}async function $x(t,e,n=!1){if(Ft(t.app))return Promise.reject(Zn(t));const r=hi(t),i=Hk(r,e),s=await new zx(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
*/const Hx=10*60*1e3;class Gx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Kk(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hx&&this.cachedEventUids.clear(),this.cachedEventUids.has(bw(e))}saveEventToCache(e){this.cachedEventUids.add(bw(e)),this.lastProcessedEventTime=Date.now()}}function bw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Kk({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kk(t);default:return!1}}/**
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
*/async function Wx(t,e={}){return fr(t,"GET","/v1/projects",e)}/**
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
*/const Qx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yx=/^https?/;async function Jx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wx(t);for(const n of e)try{if(Xx(n))return}catch{}on(t,"unauthorized-domain")}function Xx(t){const e=Vf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Yx.test(n))return!1;if(Qx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
*/const Zx=new ll(3e4,6e4);function Sw(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function eD(t){return new Promise((e,n)=>{var r,i,s;function a(){Sw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sw(),n(fn(t,"network-request-failed"))},timeout:Zx.get()})}if((i=(r=Cn().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((s=Cn().gapi)!=null&&s.load)a();else{const l=qP("iframefcb");return Cn()[l]=()=>{gapi.load?a():n(fn(t,"network-request-failed"))},Pk(`${BP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Su=null,e})}let Su=null;function tD(t){return Su=Su||eD(t),Su}/**
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
*/const nD=new ll(5e3,15e3),rD="__/auth/iframe",iD="emulator/auth/iframe",sD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oD(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Em(e,iD):`https://${t.config.authDomain}/${rD}`,r={apiKey:e.apiKey,appName:t.name,v:ma},i=aD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${al(r).slice(1)}`}async function lD(t){const e=await tD(t),n=Cn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:oD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=fn(t,"network-request-failed"),l=Cn().setTimeout(()=>{s(a)},nD.get());function u(){Cn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
*/const uD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cD=500,hD=600,dD="_blank",fD="http://localhost";class Ew{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pD(t,e,n,r=cD,i=hD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...uD,width:r.toString(),height:i.toString(),top:s,left:a},h=mt().toLowerCase();n&&(l=kk(h)?dD:n),Sk(h)&&(e=e||fD,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[b,A])=>`${m}${b}=${A},`,"");if(OP(h)&&l!=="_self")return mD(e||"",l),new Ew(null);const p=window.open(e||"",l,f);$(p,t,"popup-blocked");try{p.focus()}catch{}return new Ew(p)}function mD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
*/const gD="__/auth/handler",yD="emulator/auth/handler",vD=encodeURIComponent("fac");async function kw(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ma,eventId:i};if(e instanceof Cm){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",C2(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof cl){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${vD}=${encodeURIComponent(u)}`:"";return`${wD(t)}?${al(l).slice(1)}${h}`}function wD({config:t}){return t.emulator?Em(t,yD):`https://${t.authDomain}/${gD}`}/**
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
*/const Nd="webStorageSupport";class bD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vk,this._completeRedirectFn=$x,this._overrideRedirectResult=jx}async _openPopup(e,n,r,i){var s;lr((s=this.eventManagers[e._key()])==null?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await kw(e,n,r,Vf(),i);return pD(e,a,Nm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await kw(e,n,r,Vf(),i);return kx(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await lD(e),r=new Gx(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nd,{type:Nd},r=>{var i;const s=(i=r==null?void 0:r[0])==null?void 0:i[Nd];s!==void 0&&n(!!s),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Jx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Nk()||Ek()||Im()}}const SD=bD;var Iw="@firebase/auth",Tw="1.13.1";/**
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
*/class ED{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
*/function kD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ID(t){xn(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ak(t)},h=new zP(r,i,s,u);return QP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xn(new gn("auth-internal",e=>{const n=hi(e.getProvider("auth").getImmediate());return(r=>new ED(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Iw,Tw,kD(t)),rn(Iw,Tw,"esm2020")}/**
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
*/const TD=5*60,_D=UE("authIdTokenMaxAge")||TD;let _w=null;const CD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>_D)return;const i=n==null?void 0:n.token;_w!==i&&(_w=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ND(t=fm()){const e=ns(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:SD,persistence:[Dx,Uk,Vk]}),r=UE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=CD(s.toString());gx(n,a,()=>a(n.currentUser)),mx(n,l=>a(l))}}const i=ME("auth");return i&&YP(n,`http://${i}`),n}function AD(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}VP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",AD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ID("Browser");var Cw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,Wk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.F=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.D=function(k,T,C){for(var E=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)E[ct-2]=arguments[ct];return y.prototype[T].apply(k,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,v){v||(v=0);const k=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)k[T]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(T=0;T<16;++T)k[T]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],T=w.g[2];let C=w.g[3],E;E=y+(C^v&(T^C))+k[0]+3614090360&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(T^y&(v^T))+k[1]+3905402710&4294967295,C=y+(E<<12&4294967295|E>>>20),E=T+(v^C&(y^v))+k[2]+606105819&4294967295,T=C+(E<<17&4294967295|E>>>15),E=v+(y^T&(C^y))+k[3]+3250441966&4294967295,v=T+(E<<22&4294967295|E>>>10),E=y+(C^v&(T^C))+k[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(T^y&(v^T))+k[5]+1200080426&4294967295,C=y+(E<<12&4294967295|E>>>20),E=T+(v^C&(y^v))+k[6]+2821735955&4294967295,T=C+(E<<17&4294967295|E>>>15),E=v+(y^T&(C^y))+k[7]+4249261313&4294967295,v=T+(E<<22&4294967295|E>>>10),E=y+(C^v&(T^C))+k[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(T^y&(v^T))+k[9]+2336552879&4294967295,C=y+(E<<12&4294967295|E>>>20),E=T+(v^C&(y^v))+k[10]+4294925233&4294967295,T=C+(E<<17&4294967295|E>>>15),E=v+(y^T&(C^y))+k[11]+2304563134&4294967295,v=T+(E<<22&4294967295|E>>>10),E=y+(C^v&(T^C))+k[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(T^y&(v^T))+k[13]+4254626195&4294967295,C=y+(E<<12&4294967295|E>>>20),E=T+(v^C&(y^v))+k[14]+2792965006&4294967295,T=C+(E<<17&4294967295|E>>>15),E=v+(y^T&(C^y))+k[15]+1236535329&4294967295,v=T+(E<<22&4294967295|E>>>10),E=y+(T^C&(v^T))+k[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^T&(y^v))+k[6]+3225465664&4294967295,C=y+(E<<9&4294967295|E>>>23),E=T+(y^v&(C^y))+k[11]+643717713&4294967295,T=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(T^C))+k[0]+3921069994&4294967295,v=T+(E<<20&4294967295|E>>>12),E=y+(T^C&(v^T))+k[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^T&(y^v))+k[10]+38016083&4294967295,C=y+(E<<9&4294967295|E>>>23),E=T+(y^v&(C^y))+k[15]+3634488961&4294967295,T=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(T^C))+k[4]+3889429448&4294967295,v=T+(E<<20&4294967295|E>>>12),E=y+(T^C&(v^T))+k[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^T&(y^v))+k[14]+3275163606&4294967295,C=y+(E<<9&4294967295|E>>>23),E=T+(y^v&(C^y))+k[3]+4107603335&4294967295,T=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(T^C))+k[8]+1163531501&4294967295,v=T+(E<<20&4294967295|E>>>12),E=y+(T^C&(v^T))+k[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^T&(y^v))+k[2]+4243563512&4294967295,C=y+(E<<9&4294967295|E>>>23),E=T+(y^v&(C^y))+k[7]+1735328473&4294967295,T=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(T^C))+k[12]+2368359562&4294967295,v=T+(E<<20&4294967295|E>>>12),E=y+(v^T^C)+k[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^T)+k[8]+2272392833&4294967295,C=y+(E<<11&4294967295|E>>>21),E=T+(C^y^v)+k[11]+1839030562&4294967295,T=C+(E<<16&4294967295|E>>>16),E=v+(T^C^y)+k[14]+4259657740&4294967295,v=T+(E<<23&4294967295|E>>>9),E=y+(v^T^C)+k[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^T)+k[4]+1272893353&4294967295,C=y+(E<<11&4294967295|E>>>21),E=T+(C^y^v)+k[7]+4139469664&4294967295,T=C+(E<<16&4294967295|E>>>16),E=v+(T^C^y)+k[10]+3200236656&4294967295,v=T+(E<<23&4294967295|E>>>9),E=y+(v^T^C)+k[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^T)+k[0]+3936430074&4294967295,C=y+(E<<11&4294967295|E>>>21),E=T+(C^y^v)+k[3]+3572445317&4294967295,T=C+(E<<16&4294967295|E>>>16),E=v+(T^C^y)+k[6]+76029189&4294967295,v=T+(E<<23&4294967295|E>>>9),E=y+(v^T^C)+k[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^T)+k[12]+3873151461&4294967295,C=y+(E<<11&4294967295|E>>>21),E=T+(C^y^v)+k[15]+530742520&4294967295,T=C+(E<<16&4294967295|E>>>16),E=v+(T^C^y)+k[2]+3299628645&4294967295,v=T+(E<<23&4294967295|E>>>9),E=y+(T^(v|~C))+k[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~T))+k[7]+1126891415&4294967295,C=y+(E<<10&4294967295|E>>>22),E=T+(y^(C|~v))+k[14]+2878612391&4294967295,T=C+(E<<15&4294967295|E>>>17),E=v+(C^(T|~y))+k[5]+4237533241&4294967295,v=T+(E<<21&4294967295|E>>>11),E=y+(T^(v|~C))+k[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~T))+k[3]+2399980690&4294967295,C=y+(E<<10&4294967295|E>>>22),E=T+(y^(C|~v))+k[10]+4293915773&4294967295,T=C+(E<<15&4294967295|E>>>17),E=v+(C^(T|~y))+k[1]+2240044497&4294967295,v=T+(E<<21&4294967295|E>>>11),E=y+(T^(v|~C))+k[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~T))+k[15]+4264355552&4294967295,C=y+(E<<10&4294967295|E>>>22),E=T+(y^(C|~v))+k[6]+2734768916&4294967295,T=C+(E<<15&4294967295|E>>>17),E=v+(C^(T|~y))+k[13]+1309151649&4294967295,v=T+(E<<21&4294967295|E>>>11),E=y+(T^(v|~C))+k[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~T))+k[11]+3174756917&4294967295,C=y+(E<<10&4294967295|E>>>22),E=T+(y^(C|~v))+k[2]+718787259&4294967295,T=C+(E<<15&4294967295|E>>>17),E=v+(C^(T|~y))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(T+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const v=y-this.blockSize,k=this.C;let T=this.h,C=0;for(;C<y;){if(T==0)for(;C<=v;)i(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<y;)if(k[T++]=w.charCodeAt(C++),T==this.blockSize){i(this,k),T=0;break}}else for(;C<y;)if(k[T++]=w[C++],T==this.blockSize){i(this,k),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var v=w.length-8;v<w.length;++v)w[v]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,v=0;v<4;++v)for(let k=0;k<32;k+=8)w[y++]=this.g[v]>>>k&255;return w};function s(w,y){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function a(w,y){this.h=y;const v=[];let k=!0;for(let T=w.length-1;T>=0;T--){const C=w[T]|0;k&&C==y||(v[T]=C,k=!1)}this.g=v}var l={};function u(w){return-128<=w&&w<128?s(w,function(y){return new a([y|0],y<0?-1:0)}):new a([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return M(h(-w));const y=[];let v=1;for(let k=0;w>=v;k++)y[k]=w/v|0,v*=4294967296;return new a(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return M(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const v=h(Math.pow(y,8));let k=p;for(let C=0;C<w.length;C+=8){var T=Math.min(8,w.length-C);const E=parseInt(w.substring(C,C+T),y);T<8?(T=h(Math.pow(y,T)),k=k.j(T).add(h(E))):(k=k.j(v),k=k.add(h(E)))}return k}var p=u(0),m=u(1),b=u(16777216);t=a.prototype,t.m=function(){if(L(this))return-M(this).m();let w=0,y=1;for(let v=0;v<this.g.length;v++){const k=this.i(v);w+=(k>=0?k:4294967296+k)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(A(this))return"0";if(L(this))return"-"+M(this).toString(w);const y=h(Math.pow(w,6));var v=this;let k="";for(;;){const T=x(v,y).g;v=I(v,T.j(y));let C=((v.g.length>0?v.g[0]:v.h)>>>0).toString(w);if(v=T,A(v))return C+k;for(;C.length<6;)C="0"+C;k=C+k}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function A(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=I(this,w),L(w)?-1:A(w)?0:1};function M(w){const y=w.g.length,v=[];for(let k=0;k<y;k++)v[k]=~w.g[k];return new a(v,~w.h).add(m)}t.abs=function(){return L(this)?M(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),v=[];let k=0;for(let T=0;T<=y;T++){let C=k+(this.i(T)&65535)+(w.i(T)&65535),E=(C>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);k=E>>>16,C&=65535,E&=65535,v[T]=E<<16|C}return new a(v,v[v.length-1]&-2147483648?-1:0)};function I(w,y){return w.add(M(y))}t.j=function(w){if(A(this)||A(w))return p;if(L(this))return L(w)?M(this).j(M(w)):M(M(this).j(w));if(L(w))return M(this.j(M(w)));if(this.l(b)<0&&w.l(b)<0)return h(this.m()*w.m());const y=this.g.length+w.g.length,v=[];for(var k=0;k<2*y;k++)v[k]=0;for(k=0;k<this.g.length;k++)for(let T=0;T<w.g.length;T++){const C=this.i(k)>>>16,E=this.i(k)&65535,ct=w.i(T)>>>16,ln=w.i(T)&65535;v[2*k+2*T]+=E*ln,S(v,2*k+2*T),v[2*k+2*T+1]+=C*ln,S(v,2*k+2*T+1),v[2*k+2*T+1]+=E*ct,S(v,2*k+2*T+1),v[2*k+2*T+2]+=C*ct,S(v,2*k+2*T+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new a(v,0)};function S(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function _(w,y){this.g=w,this.h=y}function x(w,y){if(A(y))throw Error("division by zero");if(A(w))return new _(p,p);if(L(w))return y=x(M(w),y),new _(M(y.g),M(y.h));if(L(y))return y=x(w,M(y)),new _(M(y.g),y.h);if(w.g.length>30){if(L(w)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var v=m,k=y;k.l(w)<=0;)v=U(v),k=U(k);var T=B(v,1),C=B(k,1);for(k=B(k,2),v=B(v,2);!A(k);){var E=C.add(k);E.l(w)<=0&&(T=T.add(v),C=E),k=B(k,1),v=B(v,1)}return y=I(w,T.j(y)),new _(T,y)}for(T=p;w.l(y)>=0;){for(v=Math.max(1,Math.floor(w.m()/y.m())),k=Math.ceil(Math.log(v)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),C=h(v),E=C.j(y);L(E)||E.l(w)>0;)v-=k,C=h(v),E=C.j(y);A(C)&&(C=m),T=T.add(C),w=I(w,E)}return new _(T,w)}t.B=function(w){return x(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let k=0;k<y;k++)v[k]=this.i(k)&w.i(k);return new a(v,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let k=0;k<y;k++)v[k]=this.i(k)|w.i(k);return new a(v,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),v=[];for(let k=0;k<y;k++)v[k]=this.i(k)^w.i(k);return new a(v,this.h^w.h)};function U(w){const y=w.g.length+1,v=[];for(let k=0;k<y;k++)v[k]=w.i(k)<<1|w.i(k-1)>>>31;return new a(v,w.h)}function B(w,y){const v=y>>5;y%=32;const k=w.g.length-v,T=[];for(let C=0;C<k;C++)T[C]=y>0?w.i(C+v)>>>y|w.i(C+v+1)<<32-y:w.i(C+v);return new a(T,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wk=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Wr=a}).apply(typeof Cw<"u"?Cw:typeof self<"u"?self:typeof window<"u"?window:{});var Ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qk,Za,Yk,Eu,$f,Jk,Xk,Zk;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ql=="object"&&Ql];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var N=o[g];if(!(N in d))break e;d=d[N]}o=o[o.length-1],g=d[o],c=c(g),c!=g&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(c){var d=[],g;for(g in c)Object.prototype.hasOwnProperty.call(c,g)&&d.push([g,c[g]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,d){return o.call.apply(o.bind,arguments)}function h(o,c,d){return h=u,h.apply(null,arguments)}function f(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function p(o,c){function d(){}d.prototype=c.prototype,o.Z=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Ob=function(g,N,P){for(var F=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)F[ee-2]=arguments[ee];return c.prototype[N].apply(g,F)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const c=o.length;if(c>0){const d=Array(c);for(let g=0;g<c;g++)d[g]=o[g];return d}return[]}function A(o,c){for(let g=1;g<arguments.length;g++){const N=arguments[g];var d=typeof N;if(d=d!="object"?d:N?Array.isArray(N)?"array":d:"null",d=="array"||d=="object"&&typeof N.length=="number"){d=o.length||0;const P=N.length||0;o.length=d+P;for(let F=0;F<P;F++)o[d+F]=N[F]}else o.push(N)}}class L{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(o){a.setTimeout(()=>{throw o},0)}function I(){var o=w;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class S{constructor(){this.h=this.g=null}add(c,d){const g=_.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var _=new L(()=>new x,o=>o.reset());class x{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,B=!1,w=new S,y=()=>{const o=Promise.resolve(void 0);U=()=>{o.then(v)}};function v(){for(var o;o=I();){try{o.h.call(o.g)}catch(d){M(d)}var c=_;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}B=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return o}();function E(o){return/^[\s\xa0]*$/.test(o)}function ct(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}p(ct,T),ct.prototype.init=function(o,c){const d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&ct.Z.h.call(this)},ct.prototype.h=function(){ct.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),j=0;function Z(o,c,d,g,N){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=N,this.key=++j,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o,c,d){for(const g in o)c.call(d,o[g],g,o)}function Ue(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function mi(o){const c={};for(const d in o)c[d]=o[d];return c}const gi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ss(o,c){let d,g;for(let N=1;N<arguments.length;N++){g=arguments[N];for(d in g)o[d]=g[d];for(let P=0;P<gi.length;P++)d=gi[P],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function Kt(o){this.src=o,this.g={},this.h=0}Kt.prototype.add=function(o,c,d,g,N){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const F=fh(o,c,g,N);return F>-1?(c=o[F],d||(c.fa=!1)):(c=new Z(c,this.src,P,!!g,N),c.fa=d,o.push(c)),c};function pr(o,c){const d=c.type;if(d in o.g){var g=o.g[d],N=Array.prototype.indexOf.call(g,c,void 0),P;(P=N>=0)&&Array.prototype.splice.call(g,N,1),P&&(Y(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function fh(o,c,d,g){for(let N=0;N<o.length;++N){const P=o[N];if(!P.da&&P.listener==c&&P.capture==!!d&&P.ha==g)return N}return-1}var ph="closure_lm_"+(Math.random()*1e6|0),mh={};function mg(o,c,d,g,N){if(Array.isArray(c)){for(let P=0;P<c.length;P++)mg(o,c[P],d,g,N);return null}return d=vg(d),o&&o[ln]?o.J(c,d,l(g)?!!g.capture:!1,N):AI(o,c,d,!1,g,N)}function AI(o,c,d,g,N,P){if(!c)throw Error("Invalid event type");const F=l(N)?!!N.capture:!!N;let ee=yh(o);if(ee||(o[ph]=ee=new Kt(o)),d=ee.add(c,d,g,F,P),d.proxy)return d;if(g=PI(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)C||(N=F),N===void 0&&(N=!1),o.addEventListener(c.toString(),g,N);else if(o.attachEvent)o.attachEvent(yg(c.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function PI(){function o(d){return c.call(o.src,o.listener,d)}const c=xI;return o}function gg(o,c,d,g,N){if(Array.isArray(c))for(var P=0;P<c.length;P++)gg(o,c[P],d,g,N);else g=l(g)?!!g.capture:!!g,d=vg(d),o&&o[ln]?(o=o.i,P=String(c).toString(),P in o.g&&(c=o.g[P],d=fh(c,d,g,N),d>-1&&(Y(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete o.g[P],o.h--)))):o&&(o=yh(o))&&(c=o.g[c.toString()],o=-1,c&&(o=fh(c,d,g,N)),(d=o>-1?c[o]:null)&&gh(d))}function gh(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ln])pr(c.i,o);else{var d=o.type,g=o.proxy;c.removeEventListener?c.removeEventListener(d,g,o.capture):c.detachEvent?c.detachEvent(yg(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=yh(c))?(pr(d,o),d.h==0&&(d.src=null,c[ph]=null)):Y(o)}}}function yg(o){return o in mh?mh[o]:mh[o]="on"+o}function xI(o,c){if(o.da)o=!0;else{c=new ct(c,this);const d=o.listener,g=o.ha||o.src;o.fa&&gh(o),o=d.call(g,c)}return o}function yh(o){return o=o[ph],o instanceof Kt?o:null}var vh="__closure_events_fn_"+(Math.random()*1e9>>>0);function vg(o){return typeof o=="function"?o:(o[vh]||(o[vh]=function(c){return o.handleEvent(c)}),o[vh])}function ht(){k.call(this),this.i=new Kt(this),this.M=this,this.G=null}p(ht,k),ht.prototype[ln]=!0,ht.prototype.removeEventListener=function(o,c,d,g){gg(this,o,c,d,g)};function gt(o,c){var d,g=o.G;if(g)for(d=[];g;g=g.G)d.push(g);if(o=o.M,g=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var N=c;c=new T(g,o),ss(c,N)}N=!0;let P,F;if(d)for(F=d.length-1;F>=0;F--)P=c.g=d[F],N=bl(P,g,!0,c)&&N;if(P=c.g=o,N=bl(P,g,!0,c)&&N,N=bl(P,g,!1,c)&&N,d)for(F=0;F<d.length;F++)P=c.g=d[F],N=bl(P,g,!1,c)&&N}ht.prototype.N=function(){if(ht.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const d=o.g[c];for(let g=0;g<d.length;g++)Y(d[g]);delete o.g[c],o.h--}}this.G=null},ht.prototype.J=function(o,c,d,g){return this.i.add(String(o),c,!1,d,g)},ht.prototype.K=function(o,c,d,g){return this.i.add(String(o),c,!0,d,g)};function bl(o,c,d,g){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let N=!0;for(let P=0;P<c.length;++P){const F=c[P];if(F&&!F.da&&F.capture==d){const ee=F.listener,Ge=F.ha||F.src;F.fa&&pr(o.i,F),N=ee.call(Ge,g)!==!1&&N}}return N&&!g.defaultPrevented}function DI(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function wg(o){o.g=DI(()=>{o.g=null,o.i&&(o.i=!1,wg(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class OI extends k{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ea(o){k.call(this),this.h=o,this.g={}}p(Ea,k);var bg=[];function Sg(o){ve(o.g,function(c,d){this.g.hasOwnProperty(d)&&gh(c)},o),o.g={}}Ea.prototype.N=function(){Ea.Z.N.call(this),Sg(this)},Ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wh=a.JSON.stringify,RI=a.JSON.parse,LI=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Eg(){}function kg(){}var ka={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function bh(){T.call(this,"d")}p(bh,T);function Sh(){T.call(this,"c")}p(Sh,T);var yi={},Ig=null;function Sl(){return Ig=Ig||new ht}yi.Ia="serverreachability";function Tg(o){T.call(this,yi.Ia,o)}p(Tg,T);function Ia(o){const c=Sl();gt(c,new Tg(c))}yi.STAT_EVENT="statevent";function _g(o,c){T.call(this,yi.STAT_EVENT,o),this.stat=c}p(_g,T);function yt(o){const c=Sl();gt(c,new _g(c,o))}yi.Ja="timingevent";function Cg(o,c){T.call(this,yi.Ja,o),this.size=c}p(Cg,T);function Ta(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function _a(){this.g=!0}_a.prototype.ua=function(){this.g=!1};function MI(o,c,d,g,N,P){o.info(function(){if(o.g)if(P){var F="",ee=P.split("&");for(let Ee=0;Ee<ee.length;Ee++){var Ge=ee[Ee].split("=");if(Ge.length>1){const Ye=Ge[0];Ge=Ge[1];const Sn=Ye.split("_");F=Sn.length>=2&&Sn[1]=="type"?F+(Ye+"="+Ge+"&"):F+(Ye+"=redacted&")}}}else F=null;else F=P;return"XMLHTTP REQ ("+g+") [attempt "+N+"]: "+c+`
`+d+`
`+F})}function FI(o,c,d,g,N,P,F){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+N+"]: "+c+`
`+d+`
`+P+" "+F})}function as(o,c,d,g){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+zI(o,d)+(g?" "+g:"")})}function UI(o,c){o.info(function(){return"TIMEOUT: "+c})}_a.prototype.info=function(){};function zI(o,c){if(!o.g)return c;if(!c)return null;try{const P=JSON.parse(c);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var d=P[o];if(!(d.length<2)){var g=d[1];if(Array.isArray(g)&&!(g.length<1)){var N=g[0];if(N!="noop"&&N!="stop"&&N!="close")for(let F=1;F<g.length;F++)g[F]=""}}}}return wh(P)}catch{return c}}var El={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ng={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ag;function Eh(){}p(Eh,Eg),Eh.prototype.g=function(){return new XMLHttpRequest},Ag=new Eh;function Ca(o){return encodeURIComponent(String(o))}function VI(o){var c=1;o=o.split(":");const d=[];for(;c>0&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function mr(o,c,d,g){this.j=o,this.i=c,this.l=d,this.S=g||1,this.V=new Ea(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Pg}function Pg(){this.i=null,this.g="",this.h=!1}var xg={},kh={};function Ih(o,c,d){o.M=1,o.A=Il(bn(c)),o.u=d,o.R=!0,Dg(o,null)}function Dg(o,c){o.F=Date.now(),kl(o),o.B=bn(o.A);var d=o.B,g=o.S;Array.isArray(g)||(g=[String(g)]),Hg(d.i,"t",g),o.C=0,d=o.j.L,o.h=new Pg,o.g=uy(o.j,d?c:null,!o.u),o.P>0&&(o.O=new OI(h(o.Y,o,o.g),o.P)),c=o.V,d=o.g,g=o.ba;var N="readystatechange";Array.isArray(N)||(N&&(bg[0]=N.toString()),N=bg);for(let P=0;P<N.length;P++){const F=mg(d,N[P],g||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.J?mi(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),Ia(),MI(o.i,o.v,o.B,o.l,o.S,o.u)}mr.prototype.ba=function(o){o=o.target;const c=this.O;c&&vr(o)==3?c.j():this.Y(o)},mr.prototype.Y=function(o){try{if(o==this.g)e:{const ee=vr(this.g),Ge=this.g.ya(),Ee=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Xg(this.g)))){this.K||ee!=4||Ge==7||(Ge==8||Ee<=0?Ia(3):Ia(2)),Th(this);var c=this.g.ca();this.X=c;var d=jI(this);if(this.o=c==200,FI(this.i,this.v,this.B,this.l,this.S,ee,c),this.o){if(this.U&&!this.L){t:{if(this.g){var g,N=this.g;if((g=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(g)){var P=g;break t}}P=null}if(o=P)as(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_h(this,o);else{this.o=!1,this.m=3,yt(12),vi(this),Na(this);break e}}if(this.R){o=!0;let Ye;for(;!this.K&&this.C<d.length;)if(Ye=BI(this,d),Ye==kh){ee==4&&(this.m=4,yt(14),o=!1),as(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==xg){this.m=4,yt(15),as(this.i,this.l,d,"[Invalid Chunk]"),o=!1;break}else as(this.i,this.l,Ye,null),_h(this,Ye);if(Og(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||d.length!=0||this.h.h||(this.m=1,yt(16),o=!1),this.o=this.o&&o,!o)as(this.i,this.l,d,"[Invalid Chunked Response]"),vi(this),Na(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Rh(F),F.P=!0,yt(11))}}else as(this.i,this.l,d,null),_h(this,d);ee==4&&vi(this),this.o&&!this.K&&(ee==4?sy(this.j,this):(this.o=!1,kl(this)))}else nT(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),vi(this),Na(this)}}}catch{}finally{}};function jI(o){if(!Og(o))return o.g.la();const c=Xg(o.g);if(c==="")return"";let d="";const g=c.length,N=vr(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return vi(o),Na(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<g;P++)o.h.h=!0,d+=o.h.i.decode(c[P],{stream:!(N&&P==g-1)});return c.length=0,o.h.g+=d,o.C=0,o.h.g}function Og(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function BI(o,c){var d=o.C,g=c.indexOf(`
`,d);return g==-1?kh:(d=Number(c.substring(d,g)),isNaN(d)?xg:(g+=1,g+d>c.length?kh:(c=c.slice(g,g+d),o.C=g+d,c)))}mr.prototype.cancel=function(){this.K=!0,vi(this)};function kl(o){o.T=Date.now()+o.H,Rg(o,o.H)}function Rg(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ta(h(o.aa,o),c)}function Th(o){o.D&&(a.clearTimeout(o.D),o.D=null)}mr.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(UI(this.i,this.B),this.M!=2&&(Ia(),yt(17)),vi(this),this.m=2,Na(this)):Rg(this,this.T-o)};function Na(o){o.j.I==0||o.K||sy(o.j,o)}function vi(o){Th(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,Sg(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function _h(o,c){try{var d=o.j;if(d.I!=0&&(d.g==o||Ch(d.h,o))){if(!o.L&&Ch(d.h,o)&&d.I==3){try{var g=d.Ba.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var N=g;if(N[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<o.F)Al(d),Cl(d);else break e;Oh(d),yt(18)}}else d.xa=N[1],0<d.xa-d.K&&N[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ta(h(d.Va,d),6e3));Fg(d.h)<=1&&d.ta&&(d.ta=void 0)}else bi(d,11)}else if((o.L||d.g==o)&&Al(d),!E(c))for(N=d.Ba.g.parse(c),c=0;c<N.length;c++){let Ee=N[c];const Ye=Ee[0];if(!(Ye<=d.K))if(d.K=Ye,Ee=Ee[1],d.I==2)if(Ee[0]=="c"){d.M=Ee[1],d.ba=Ee[2];const Sn=Ee[3];Sn!=null&&(d.ka=Sn,d.j.info("VER="+d.ka));const us=Ee[4];us!=null&&(d.za=us,d.j.info("SVER="+d.za));const wr=Ee[5];wr!=null&&typeof wr=="number"&&wr>0&&(g=1.5*wr,d.O=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const br=o.g;if(br){const xl=br.g?br.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xl){var P=g.h;P.g||xl.indexOf("spdy")==-1&&xl.indexOf("quic")==-1&&xl.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Nh(P,P.h),P.h=null))}if(g.G){const Lh=br.g?br.g.getResponseHeader("X-HTTP-Session-Id"):null;Lh&&(g.wa=Lh,Se(g.J,g.G,Lh))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-o.F,d.j.info("Handshake RTT: "+d.T+"ms")),g=d;var F=o;if(g.na=ly(g,g.L?g.ba:null,g.W),F.L){Ug(g.h,F);var ee=F,Ge=g.O;Ge&&(ee.H=Ge),ee.D&&(Th(ee),kl(ee)),g.g=F}else ry(g);d.i.length>0&&Nl(d)}else Ee[0]!="stop"&&Ee[0]!="close"||bi(d,7);else d.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?bi(d,7):Dh(d):Ee[0]!="noop"&&d.l&&d.l.qa(Ee),d.A=0)}}Ia(4)}catch{}}var qI=class{constructor(o,c){this.g=o,this.map=c}};function Lg(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mg(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Fg(o){return o.h?1:o.g?o.g.size:0}function Ch(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Nh(o,c){o.g?o.g.add(c):o.h=c}function Ug(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Lg.prototype.cancel=function(){if(this.i=zg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function zg(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.G);return c}return b(o.i)}var Vg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $I(o,c){if(o){o=o.split("&");for(let d=0;d<o.length;d++){const g=o[d].indexOf("=");let N,P=null;g>=0?(N=o[d].substring(0,g),P=o[d].substring(g+1)):N=o[d],c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof gr?(this.l=o.l,Aa(this,o.j),this.o=o.o,this.g=o.g,Pa(this,o.u),this.h=o.h,Ah(this,Gg(o.i)),this.m=o.m):o&&(c=String(o).match(Vg))?(this.l=!1,Aa(this,c[1]||"",!0),this.o=xa(c[2]||""),this.g=xa(c[3]||"",!0),Pa(this,c[4]),this.h=xa(c[5]||"",!0),Ah(this,c[6]||"",!0),this.m=xa(c[7]||"")):(this.l=!1,this.i=new Oa(null,this.l))}gr.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(Da(c,jg,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Da(c,jg,!0),"@"),o.push(Ca(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&o.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Da(d,d.charAt(0)=="/"?KI:GI,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Da(d,QI)),o.join("")},gr.prototype.resolve=function(o){const c=bn(this);let d=!!o.j;d?Aa(c,o.j):d=!!o.o,d?c.o=o.o:d=!!o.g,d?c.g=o.g:d=o.u!=null;var g=o.h;if(d)Pa(c,o.u);else if(d=!!o.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var N=c.h.lastIndexOf("/");N!=-1&&(g=c.h.slice(0,N+1)+g)}if(N=g,N==".."||N==".")g="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){g=N.lastIndexOf("/",0)==0,N=N.split("/");const P=[];for(let F=0;F<N.length;){const ee=N[F++];ee=="."?g&&F==N.length&&P.push(""):ee==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),g&&F==N.length&&P.push("")):(P.push(ee),g=!0)}g=P.join("/")}else g=N}return d?c.h=g:d=o.i.toString()!=="",d?Ah(c,Gg(o.i)):d=!!o.m,d&&(c.m=o.m),c};function bn(o){return new gr(o)}function Aa(o,c,d){o.j=d?xa(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Pa(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function Ah(o,c,d){c instanceof Oa?(o.i=c,YI(o.i,o.l)):(d||(c=Da(c,WI)),o.i=new Oa(c,o.l))}function Se(o,c,d){o.i.set(c,d)}function Il(o){return Se(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function xa(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Da(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,HI),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function HI(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var jg=/[#\/\?@]/g,GI=/[#\?:]/g,KI=/[#\?]/g,WI=/[#\?@]/g,QI=/#/g;function Oa(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function wi(o){o.g||(o.g=new Map,o.h=0,o.i&&$I(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Oa.prototype,t.add=function(o,c){wi(this),this.i=null,o=os(this,o);let d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Bg(o,c){wi(o),c=os(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function qg(o,c){return wi(o),c=os(o,c),o.g.has(c)}t.forEach=function(o,c){wi(this),this.g.forEach(function(d,g){d.forEach(function(N){o.call(c,N,g,this)},this)},this)};function $g(o,c){wi(o);let d=[];if(typeof c=="string")qg(o,c)&&(d=d.concat(o.g.get(os(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)d=d.concat(o[c]);return d}t.set=function(o,c){return wi(this),this.i=null,o=os(this,o),qg(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=$g(this,o),o.length>0?String(o[0]):c):c};function Hg(o,c,d){Bg(o,c),d.length>0&&(o.i=null,o.g.set(os(o,c),b(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let g=0;g<c.length;g++){var d=c[g];const N=Ca(d);d=$g(this,d);for(let P=0;P<d.length;P++){let F=N;d[P]!==""&&(F+="="+Ca(d[P])),o.push(F)}}return this.i=o.join("&")};function Gg(o){const c=new Oa;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function os(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function YI(o,c){c&&!o.j&&(wi(o),o.i=null,o.g.forEach(function(d,g){const N=g.toLowerCase();g!=N&&(Bg(this,g),Hg(this,N,d))},o)),o.j=c}function JI(o,c){const d=new _a;if(a.Image){const g=new Image;g.onload=f(yr,d,"TestLoadImage: loaded",!0,c,g),g.onerror=f(yr,d,"TestLoadImage: error",!1,c,g),g.onabort=f(yr,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=f(yr,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else c(!1)}function XI(o,c){const d=new _a,g=new AbortController,N=setTimeout(()=>{g.abort(),yr(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(N),P.ok?yr(d,"TestPingServer: ok",!0,c):yr(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),yr(d,"TestPingServer: error",!1,c)})}function yr(o,c,d,g,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),g(d)}catch{}}function ZI(){this.g=new LI}function Ph(o){this.i=o.Sb||null,this.h=o.ab||!1}p(Ph,Eg),Ph.prototype.g=function(){return new Tl(this.i,this.h)};function Tl(o,c){ht.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Tl,ht),t=Tl.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,La(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,La(this)),this.g&&(this.readyState=3,La(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kg(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kg(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Ra(this):La(this),this.readyState==3&&Kg(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,Ra(this))},t.Na=function(o){this.g&&(this.response=o,Ra(this))},t.ga=function(){this.g&&Ra(this)};function Ra(o){o.readyState=4,o.l=null,o.j=null,o.B=null,La(o)}t.setRequestHeader=function(o,c){this.A.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function La(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Wg(o){let c="";return ve(o,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function xh(o,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Wg(d),typeof o=="string"?d!=null&&Ca(d):Se(o,c,d))}function xe(o){ht.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(xe,ht);var eT=/^https?$/i,tT=["POST","PUT"];t=xe.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ag.g(),this.g.onreadystatechange=m(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(P){Qg(this,P);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var N in g)d.set(N,g[N]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())d.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),N=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(tT,c,void 0)>=0)||g||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of d)this.g.setRequestHeader(P,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Qg(this,P)}};function Qg(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Yg(o),_l(o)}function Yg(o){o.A||(o.A=!0,gt(o,"complete"),gt(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,gt(this,"complete"),gt(this,"abort"),_l(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_l(this,!0)),xe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Jg(this):this.Xa())},t.Xa=function(){Jg(this)};function Jg(o){if(o.h&&typeof s<"u"){if(o.v&&vr(o)==4)setTimeout(o.Ca.bind(o),0);else if(gt(o,"readystatechange"),vr(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=P===0){let F=String(o.D).match(Vg)[1]||null;!F&&a.self&&a.self.location&&(F=a.self.location.protocol.slice(0,-1)),g=!eT.test(F?F.toLowerCase():"")}d=g}if(d)gt(o,"complete"),gt(o,"success");else{o.o=6;try{var N=vr(o)>2?o.g.statusText:""}catch{N=""}o.l=N+" ["+o.ca()+"]",Yg(o)}}finally{_l(o)}}}}function _l(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const d=o.g;o.g=null,c||gt(o,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function vr(o){return o.g?o.g.readyState:0}t.ca=function(){try{return vr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),RI(c)}};function Xg(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function nT(o){const c={};o=(o.g&&vr(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(E(o[g]))continue;var d=VI(o[g]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=c[N]||[];c[N]=P,P.push(d)}Ue(c,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ma(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Zg(o){this.za=0,this.i=[],this.j=new _a,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ma("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ma("baseRetryDelayMs",5e3,o),this.Za=Ma("retryDelaySeedMs",1e4,o),this.Ta=Ma("forwardChannelMaxRetries",2,o),this.va=Ma("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Lg(o&&o.concurrentRequestLimit),this.Ba=new ZI,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Zg.prototype,t.ka=8,t.I=1,t.connect=function(o,c,d,g){yt(0),this.W=o,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.J=ly(this,null,this.W),Nl(this)};function Dh(o){if(ey(o),o.I==3){var c=o.V++,d=bn(o.J);if(Se(d,"SID",o.M),Se(d,"RID",c),Se(d,"TYPE","terminate"),Fa(o,d),c=new mr(o,o.j,c),c.M=2,c.A=Il(bn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.A,d=!0),d||(c.g=uy(c.j,null),c.g.ea(c.A)),c.F=Date.now(),kl(c)}oy(o)}function Cl(o){o.g&&(Rh(o),o.g.cancel(),o.g=null)}function ey(o){Cl(o),o.v&&(a.clearTimeout(o.v),o.v=null),Al(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Nl(o){if(!Mg(o.h)&&!o.m){o.m=!0;var c=o.Ea;U||y(),B||(U(),B=!0),w.add(c,o),o.D=0}}function rT(o,c){return Fg(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ta(h(o.Ea,o,c),ay(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const N=new mr(this,this.j,o);let P=this.o;if(this.U&&(P?(P=mi(P),ss(P,this.U)):P=this.U),this.u!==null||this.R||(N.J=P,P=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=ny(this,N,c),d=bn(this.J),Se(d,"RID",o),Se(d,"CVER",22),this.G&&Se(d,"X-HTTP-Session-Id",this.G),Fa(this,d),P&&(this.R?c="headers="+Ca(Wg(P))+"&"+c:this.u&&xh(d,this.u,P)),Nh(this.h,N),this.Ra&&Se(d,"TYPE","init"),this.S?(Se(d,"$req",c),Se(d,"SID","null"),N.U=!0,Ih(N,d,null)):Ih(N,d,c),this.I=2}}else this.I==3&&(o?ty(this,o):this.i.length==0||Mg(this.h)||ty(this))};function ty(o,c){var d;c?d=c.l:d=o.V++;const g=bn(o.J);Se(g,"SID",o.M),Se(g,"RID",d),Se(g,"AID",o.K),Fa(o,g),o.u&&o.o&&xh(g,o.u,o.o),d=new mr(o,o.j,d,o.D+1),o.u===null&&(d.J=o.o),c&&(o.i=c.G.concat(o.i)),c=ny(o,d,1e3),d.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Nh(o.h,d),Ih(d,g,c)}function Fa(o,c){o.H&&ve(o.H,function(d,g){Se(c,g,d)}),o.l&&ve({},function(d,g){Se(c,g,d)})}function ny(o,c,d){d=Math.min(o.i.length,d);const g=o.l?h(o.l.Ka,o.l,o):null;e:{var N=o.i;let ee=-1;for(;;){const Ge=["count="+d];ee==-1?d>0?(ee=N[0].g,Ge.push("ofs="+ee)):ee=0:Ge.push("ofs="+ee);let Ee=!0;for(let Ye=0;Ye<d;Ye++){var P=N[Ye].g;const Sn=N[Ye].map;if(P-=ee,P<0)ee=Math.max(0,N[Ye].g-100),Ee=!1;else try{P="req"+P+"_"||"";try{var F=Sn instanceof Map?Sn:Object.entries(Sn);for(const[us,wr]of F){let br=wr;l(wr)&&(br=wh(wr)),Ge.push(P+us+"="+encodeURIComponent(br))}}catch(us){throw Ge.push(P+"type="+encodeURIComponent("_badmap")),us}}catch{g&&g(Sn)}}if(Ee){F=Ge.join("&");break e}}F=void 0}return o=o.i.splice(0,d),c.G=o,F}function ry(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;U||y(),B||(U(),B=!0),w.add(c,o),o.A=0}}function Oh(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ta(h(o.Da,o),ay(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,iy(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ta(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Cl(this),iy(this))};function Rh(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function iy(o){o.g=new mr(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=bn(o.na);Se(c,"RID","rpc"),Se(c,"SID",o.M),Se(c,"AID",o.K),Se(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&Se(c,"TO",o.ia),Se(c,"TYPE","xmlhttp"),Fa(o,c),o.u&&o.o&&xh(c,o.u,o.o),o.O&&(o.g.H=o.O);var d=o.g;o=o.ba,d.M=1,d.A=Il(bn(c)),d.u=null,d.R=!0,Dg(d,o)}t.Va=function(){this.C!=null&&(this.C=null,Cl(this),Oh(this),yt(19))};function Al(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function sy(o,c){var d=null;if(o.g==c){Al(o),Rh(o),o.g=null;var g=2}else if(Ch(o.h,c))d=c.G,Ug(o.h,c),g=1;else return;if(o.I!=0){if(c.o)if(g==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var N=o.D;g=Sl(),gt(g,new Cg(g,d)),Nl(o)}else ry(o);else if(N=c.m,N==3||N==0&&c.X>0||!(g==1&&rT(o,c)||g==2&&Oh(o)))switch(d&&d.length>0&&(c=o.h,c.i=c.i.concat(d)),N){case 1:bi(o,5);break;case 4:bi(o,10);break;case 3:bi(o,6);break;default:bi(o,2)}}}function ay(o,c){let d=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(d*=2),d*c}function bi(o,c){if(o.j.info("Error code "+c),c==2){var d=h(o.bb,o),g=o.Ua;const N=!g;g=new gr(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Aa(g,"https"),Il(g),N?JI(g.toString(),d):XI(g.toString(),d)}else yt(2);o.I=0,o.l&&o.l.pa(c),oy(o),ey(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function oy(o){if(o.I=0,o.ja=[],o.l){const c=zg(o.h);(c.length!=0||o.i.length!=0)&&(A(o.ja,c),A(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function ly(o,c,d){var g=d instanceof gr?bn(d):new gr(d);if(g.g!="")c&&(g.g=c+"."+g.g),Pa(g,g.u);else{var N=a.location;g=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;const P=new gr(null);g&&Aa(P,g),c&&(P.g=c),N&&Pa(P,N),d&&(P.h=d),g=P}return d=o.G,c=o.wa,d&&c&&Se(g,d,c),Se(g,"VER",o.ka),Fa(o,g),g}function uy(o,c,d){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new xe(new Ph({ab:d})):new xe(o.ma),c.Fa(o.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cy(){}t=cy.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Pl(){}Pl.prototype.g=function(o,c){return new Dt(o,c)};function Dt(o,c){ht.call(this),this.g=new Zg(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!E(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new ls(this)}p(Dt,ht),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Dh(this.g)},Dt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.v&&(d={},d.__data__=wh(o),o=d);c.i.push(new qI(c.Ya++,o)),c.I==3&&Nl(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Dh(this.g),delete this.g,Dt.Z.N.call(this)};function hy(o){bh.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}p(hy,bh);function dy(){Sh.call(this),this.status=1}p(dy,Sh);function ls(o){this.g=o}p(ls,cy),ls.prototype.ra=function(){gt(this.g,"a")},ls.prototype.qa=function(o){gt(this.g,new hy(o))},ls.prototype.pa=function(o){gt(this.g,new dy)},ls.prototype.oa=function(){gt(this.g,"b")},Pl.prototype.createWebChannel=Pl.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,Zk=function(){return new Pl},Xk=function(){return Sl()},Jk=yi,$f={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},El.NO_ERROR=0,El.TIMEOUT=8,El.HTTP_ERROR=6,Eu=El,Ng.COMPLETE="complete",Yk=Ng,kg.EventType=ka,ka.OPEN="a",ka.CLOSE="b",ka.ERROR="c",ka.MESSAGE="d",ht.prototype.listen=ht.prototype.J,Za=kg,xe.prototype.listenOnce=xe.prototype.K,xe.prototype.getLastError=xe.prototype.Ha,xe.prototype.getLastErrorCode=xe.prototype.ya,xe.prototype.getStatus=xe.prototype.ca,xe.prototype.getResponseJson=xe.prototype.La,xe.prototype.getResponseText=xe.prototype.la,xe.prototype.send=xe.prototype.ea,xe.prototype.setWithCredentials=xe.prototype.Fa,Qk=xe}).apply(typeof Ql<"u"?Ql:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
*/let ya="12.13.0";function PD(t){ya=t}/**
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
*/const Ki=new qc("@firebase/firestore");function ms(){return Ki.logLevel}function V(t,...e){if(Ki.logLevel<=se.DEBUG){const n=e.map(Pm);Ki.debug(`Firestore (${ya}): ${t}`,...n)}}function ur(t,...e){if(Ki.logLevel<=se.ERROR){const n=e.map(Pm);Ki.error(`Firestore (${ya}): ${t}`,...n)}}function Wi(t,...e){if(Ki.logLevel<=se.WARN){const n=e.map(Pm);Ki.warn(`Firestore (${ya}): ${t}`,...n)}}function Pm(t){if(typeof t=="string")return t;try{return function(e){return JSON.stringify(e)}(t)}catch{return t}}/**
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
*/const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
*/class t1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ft.UNAUTHENTICATED))}shutdown(){}}class DD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class OD{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){de(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string",31837,{l:r}),new t1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class RD{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class LD{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new RD(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MD{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ft(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){de(this.o===void 0,3512);const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.m;return this.m=s.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Nw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Nw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
*/function FD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
*/class xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=FD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function Hf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ad(i)===Ad(s)?re(i,s):Ad(i)?1:-1}return re(t.length,e.length)}const UD=55296,zD=57343;function Ad(t){const e=t.charCodeAt(0);return e>=UD&&e<=zD}function ra(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
*/const Aw="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&H(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=En.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return re(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),i=En.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?En.extractNumericId(e).compare(En.extractNumericId(n)):Hf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wr.fromString(e.substring(4,e.length-2))}}class we extends En{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const VD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends En{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return VD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Aw}static keyField(){return new at([Aw])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
*/class q{constructor(e){this.path=e}static fromPath(e){return new q(we.fromString(e))}static fromName(e){return new q(we.fromString(e).popFirst(5))}static empty(){return new q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new we(e.slice()))}}/**
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
*/function n1(t,e,n){if(!n)throw new z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jD(t,e,n,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pw(t){if(!q.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xw(t){if(q.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function r1(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Qc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H(12329,{type:typeof t})}function At(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
*/function He(t,e){const n={typeString:t};return e&&(n.value=e),n}function dl(t,e){if(!r1(t))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(D.INVALID_ARGUMENT,n);return!0}/**
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
*/const Dw=-62135596800,Ow=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ow);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dw)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ow}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(dl(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:He("string",Te._jsonSchemaVersion),seconds:He("number"),nanoseconds:He("number")};/**
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
*/class W{static fromTimestamp(e){return new W(e)}static min(){return new W(new Te(0,0))}static max(){return new W(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
*/const zo=-1;function BD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new ti(i,q.empty(),e)}function qD(t){return new ti(t.readTime,t.key,zo)}class ti{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ti(W.min(),q.empty(),zo)}static max(){return new ti(W.max(),q.empty(),zo)}}function $D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
*/const HD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
*/async function va(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==HD)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
*/class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function KD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function wa(t){return t.name==="IndexedDbTransactionError"}/**
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
*/const Dm=-1;function Jc(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function WD(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
*/const i1="";function QD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Rw(e)),e=YD(t.get(n),e);return Rw(e)}function YD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case i1:n+="";break;default:n+=s}}return n}function Rw(t){return t+i1+""}/**
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
*/function Lw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function s1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
*/class We{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mw(this.data.getIterator())}getIteratorFrom(e){return new Mw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new We(this.comparator);return n.data=e,n}}class Mw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
*/class zt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new zt([])}unionWith(e){let n=new We(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ra(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
*/class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new a1("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const JD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ni(t){if(de(!!t,39018),typeof t=="string"){let e=0;const n=JD.exec(t);if(de(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ri(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
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
*/const o1="server_timestamp",l1="__type__",u1="__previous_value__",c1="__local_write_time__";function Om(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[l1])==null?void 0:n.stringValue)===o1}function Xc(t){const e=t.mapValue.fields[u1];return Om(e)?Xc(e):e}function Vo(t){const e=ni(t.mapValue.fields[c1].timestampValue);return new Te(e.seconds,e.nanos)}/**
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
*/class XD{constructor(e,n,r,i,s,a,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const pc="(default)";class jo{constructor(e,n){this.projectId=e,this.database=n||pc}static empty(){return new jo("","")}get isDefaultDatabase(){return this.database===pc}isEqual(e){return e instanceof jo&&e.projectId===this.projectId&&e.database===this.database}}function ZD(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jo(t.options.projectId,e)}/**
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
*/const h1="__type__",eO="__max__",Jl={mapValue:{}},d1="__vector__",mc="value";function ii(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Om(t)?4:nO(t)?9007199254740991:tO(t)?10:11:H(28295,{value:t})}function Dn(t,e){if(t===e)return!0;const n=ii(t);if(n!==ii(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ni(r.timestampValue),a=ni(i.timestampValue);return s.seconds===a.seconds&&s.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ri(r.bytesValue).isEqual(ri(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Le(r.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Le(r.integerValue)===Le(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Le(r.doubleValue),a=Le(i.doubleValue);return s===a?fc(s)===fc(a):isNaN(s)&&isNaN(a)}return!1}(t,e);case 9:return ra(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(r,i){const s=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Lw(s)!==Lw(a))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(a[l]===void 0||!Dn(s[l],a[l])))return!1;return!0}(t,e);default:return H(52216,{left:t})}}function Bo(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function ia(t,e){if(t===e)return 0;const n=ii(t),r=ii(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const a=Le(i.integerValue||i.doubleValue),l=Le(s.integerValue||s.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Fw(t.timestampValue,e.timestampValue);case 4:return Fw(Vo(t),Vo(e));case 5:return Hf(t.stringValue,e.stringValue);case 6:return function(i,s){const a=ri(i),l=ri(s);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const a=i.split("/"),l=s.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=re(a[u],l[u]);if(h!==0)return h}return re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const a=re(Le(i.latitude),Le(s.latitude));return a!==0?a:re(Le(i.longitude),Le(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Uw(t.arrayValue,e.arrayValue);case 10:return function(i,s){var a,l,u,h;const f=i.fields||{},p=s.fields||{},m=(a=f[mc])==null?void 0:a.arrayValue,b=(l=p[mc])==null?void 0:l.arrayValue,A=re(((u=m==null?void 0:m.values)==null?void 0:u.length)||0,((h=b==null?void 0:b.values)==null?void 0:h.length)||0);return A!==0?A:Uw(m,b)}(t.mapValue,e.mapValue);case 11:return function(i,s){if(i===Jl.mapValue&&s===Jl.mapValue)return 0;if(i===Jl.mapValue)return 1;if(s===Jl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=s.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=Hf(l[f],h[f]);if(p!==0)return p;const m=ia(a[l[f]],u[h[f]]);if(m!==0)return m}return re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw H(23264,{he:n})}}function Fw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=ni(t),r=ni(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Uw(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ia(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function sa(t){return Gf(t)}function Gf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(e){const n=ni(e);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(e){return ri(e).toBase64()}(t.bytesValue):"referenceValue"in t?function(e){return q.fromName(e).toString()}(t.referenceValue):"geoPointValue"in t?function(e){return`geo(${e.latitude},${e.longitude})`}(t.geoPointValue):"arrayValue"in t?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=Gf(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${Gf(e.fields[s])}`;return r+"}"}(t.mapValue):H(61005,{value:t})}function ku(t){switch(ii(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xc(t);return e?16+ku(e):16;case 5:return 2*t.stringValue.length;case 6:return ri(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((r,i)=>r+ku(i),0)}(t.arrayValue);case 10:case 11:return function(n){let r=0;return di(n.fields,(i,s)=>{r+=i.length+ku(s)}),r}(t.mapValue);default:throw H(13486,{value:t})}}function zw(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kf(t){return!!t&&"integerValue"in t}function Rm(t){return!!t&&"arrayValue"in t}function Vw(t){return!!t&&"nullValue"in t}function jw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function tO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)==null?void 0:e.fields)||{})[h1])==null?void 0:n.stringValue)===d1}function wo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return{...t}}function nO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eO}/**
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
*/class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=at.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=wo(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(wo(this.value))}}function f1(t){const e=[];return di(t.fields,(n,r)=>{const i=new at([n]);if(Iu(r)){const s=f1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new zt(e)}/**
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
*/class pt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new pt(e,0,W.min(),W.min(),W.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new pt(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new pt(e,2,n,W.min(),W.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,W.min(),W.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
*/class gc{constructor(e,n){this.position=e,this.inclusive=n}}function Bw(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),n.key):r=ia(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
*/class qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function rO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
*/class p1{}class qe extends p1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sO(e,n,r):n==="array-contains"?new lO(e,r):n==="in"?new uO(e,r):n==="not-in"?new cO(e,r):n==="array-contains-any"?new hO(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new aO(e,r):new oO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ia(n,this.value)):n!==null&&ii(this.value)===ii(n)&&this.matchesComparison(ia(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yn extends p1{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new yn(e,n)}matches(e){return m1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function m1(t){return t.op==="and"}function g1(t){return iO(t)&&m1(t)}function iO(t){for(const e of t.filters)if(e instanceof yn)return!1;return!0}function Wf(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+sa(t.value);if(g1(t))return t.filters.map(e=>Wf(e)).join(",");{const e=t.filters.map(n=>Wf(n)).join(",");return`${t.op}(${e})`}}function y1(t,e){return t instanceof qe?function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&Dn(n.value,r.value)}(t,e):t instanceof yn?function(n,r){return r instanceof yn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,a)=>i&&y1(s,r.filters[a]),!0):!1}(t,e):void H(19439)}function v1(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${sa(e.value)}`}(t):t instanceof yn?function(e){return e.op.toString()+" {"+e.getFilters().map(v1).join(" ,")+"}"}(t):"Filter"}class sO extends qe{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class aO extends qe{constructor(e,n){super(e,"in",n),this.keys=w1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oO extends qe{constructor(e,n){super(e,"not-in",n),this.keys=w1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w1(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class lO extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rm(n)&&Bo(n.arrayValue,this.value)}}class uO extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}class cO extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bo(this.value.arrayValue,n)}}class hO extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
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
*/class dO{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.Te=null}}function $w(t,e=null,n=[],r=[],i=null,s=null,a=null){return new dO(t,e,n,r,i,s,a)}function Lm(t){const e=Q(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>sa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>sa(r)).join(",")),e.Te=n}return e.Te}function Mm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qw(t.startAt,e.startAt)&&qw(t.endAt,e.endAt)}function Qf(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
*/class ba{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function fO(t,e,n,r,i,s,a,l){return new ba(t,e,n,r,i,s,a,l)}function Zc(t){return new ba(t)}function Hw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function pO(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function b1(t){return t.collectionGroup!==null}function bo(t){const e=Q(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let s=new We(at.comparator);return i.filters.forEach(a=>{a.getFlattenedFilters().forEach(l=>{l.isInequality()&&(s=s.add(l.field))})}),s})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new qo(i,r))}),n.has(at.keyField().canonicalString())||e.Ie.push(new qo(at.keyField(),r))}return e.Ie}function Nn(t){const e=Q(t);return e.Ee||(e.Ee=mO(e,bo(t))),e.Ee}function mO(t,e){if(t.limitType==="F")return $w(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qo(i.field,s)});const n=t.endAt?new gc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new gc(t.startAt.position,t.startAt.inclusive):null;return $w(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yf(t,e){const n=t.filters.concat([e]);return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gO(t,e){const n=t.explicitOrderBy.concat([e]);return new ba(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Jf(t,e,n){return new ba(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function eh(t,e){return Mm(Nn(t),Nn(e))&&t.limitType===e.limitType}function S1(t){return`${Lm(Nn(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>v1(r)).join(", ")}]`),Jc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>sa(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>sa(r)).join(",")),`Target(${n})`}(Nn(t))}; limitType=${t.limitType})`}function th(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of bo(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,a){const l=Bw(i,s,a);return i.inclusive?l<=0:l<0}(n.startAt,bo(n),r)||n.endAt&&!function(i,s,a){const l=Bw(i,s,a);return i.inclusive?l>=0:l>0}(n.endAt,bo(n),r))}(t,e)}function yO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function E1(t){return(e,n)=>{let r=!1;for(const i of bo(t)){const s=vO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vO(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,s,a){const l=s.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ia(l,u):H(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:t.dir})}}/**
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
*/const wO=new Pe(q.comparator);function cr(){return wO}const k1=new Pe(q.comparator);function eo(...t){let e=k1;for(const n of t)e=e.insert(n.key,n);return e}function I1(t){let e=k1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Pi(){return So()}function T1(){return So()}function So(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const bO=new Pe(q.comparator),SO=new We(q.comparator);function ie(...t){let e=SO;for(const n of t)e=e.add(n);return e}const EO=new We(re);function kO(){return EO}/**
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
*/function Fm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function _1(t){return{integerValue:""+t}}function C1(t,e){return WD(e)?_1(e):Fm(t,e)}/**
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
*/class nh{constructor(){this._=void 0}}function IO(t,e,n){return t instanceof $o?function(r,i){const s={fields:{[l1]:{stringValue:o1},[c1]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Om(i)&&(i=Xc(i)),i&&(s.fields[u1]=i),{mapValue:s}}(n,e):t instanceof Ho?A1(t,e):t instanceof Go?P1(t,e):function(r,i){const s=N1(r,i),a=Gw(s)+Gw(r.Ae);return Kf(s)&&Kf(r.Ae)?_1(a):Fm(r.serializer,a)}(t,e)}function TO(t,e,n){return t instanceof Ho?A1(t,e):t instanceof Go?P1(t,e):n}function N1(t,e){return t instanceof Ko?function(n){return Kf(n)||function(r){return!!r&&"doubleValue"in r}(n)}(e)?e:{integerValue:0}:null}class $o extends nh{}class Ho extends nh{constructor(e){super(),this.elements=e}}function A1(t,e){const n=x1(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Go extends nh{constructor(e){super(),this.elements=e}}function P1(t,e){let n=x1(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Ko extends nh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Gw(t){return Le(t.integerValue||t.doubleValue)}function x1(t){return Rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
*/class D1{constructor(e,n){this.field=e,this.transform=n}}function _O(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Ho&&r instanceof Ho||n instanceof Go&&r instanceof Go?ra(n.elements,r.elements,Dn):n instanceof Ko&&r instanceof Ko?Dn(n.Ae,r.Ae):n instanceof $o&&r instanceof $o}(t.transform,e.transform)}class CO{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rh{}function O1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Um(t.key,sn.none()):new fl(t.key,t.data,sn.none());{const n=t.data,r=Ct.empty();let i=new We(at.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new fi(t.key,r,new zt(i.toArray()),sn.none())}}function NO(t,e,n){t instanceof fl?function(r,i,s){const a=r.value.clone(),l=Ww(r.fieldTransforms,i,s.transformResults);a.setAll(l),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(r,i,s){if(!Tu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const a=Ww(r.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(R1(r)),l.setAll(a),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Eo(t,e,n,r){return t instanceof fl?function(i,s,a,l){if(!Tu(i.precondition,s))return a;const u=i.value.clone(),h=Qw(i.fieldTransforms,l,s);return u.setAll(h),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(i,s,a,l){if(!Tu(i.precondition,s))return a;const u=Qw(i.fieldTransforms,l,s),h=s.data;return h.setAll(R1(i)),h.setAll(u),s.convertToFoundDocument(s.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,s,a){return Tu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):a}(t,e,n)}function AO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=N1(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function Kw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ra(n,r,(i,s)=>_O(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fl extends rh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends rh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function R1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ww(t,e,n){const r=new Map;de(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,TO(a,l,n[i]))}return r}function Qw(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,IO(s,a,e))}return r}class Um extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PO extends rh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
*/class xO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Eo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=T1();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=O1(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ra(this.mutations,e.mutations,(n,r)=>Kw(n,r))&&ra(this.baseMutations,e.baseMutations,(n,r)=>Kw(n,r))}}class zm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return bO}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new zm(e,n,r,i)}}/**
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
*/class DO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
*/class OO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
*/var ze,le;function RO(t){switch(t){case D.OK:return H(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return H(15467,{code:t})}}function L1(t){if(t===void 0)return ur("GRPC error has no .code"),D.UNKNOWN;switch(t){case ze.OK:return D.OK;case ze.CANCELLED:return D.CANCELLED;case ze.UNKNOWN:return D.UNKNOWN;case ze.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case ze.INTERNAL:return D.INTERNAL;case ze.UNAVAILABLE:return D.UNAVAILABLE;case ze.UNAUTHENTICATED:return D.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case ze.NOT_FOUND:return D.NOT_FOUND;case ze.ALREADY_EXISTS:return D.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return D.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case ze.ABORTED:return D.ABORTED;case ze.OUT_OF_RANGE:return D.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return D.UNIMPLEMENTED;case ze.DATA_LOSS:return D.DATA_LOSS;default:return H(39323,{code:t})}}(le=ze||(ze={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
*/function LO(){return new TextEncoder}/**
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
*/const MO=new Wr([4294967295,4294967295],0);function Yw(t){const e=LO().encode(t),n=new Wk;return n.update(e),new Uint8Array(n.digest())}function Jw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wr([n,r],0),new Wr([i,s],0)]}class Vm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new to(`Invalid padding: ${n}`);if(r<0)throw new to(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new to(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new to(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Wr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Wr.fromNumber(r)));return i.compare(MO)===1&&(i=new Wr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Yw(e),[r,i]=Jw(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);if(!this.we(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Vm(s,i,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const n=Yw(e),[r,i]=Jw(n);for(let s=0;s<this.hashCount;s++){const a=this.ye(r,i,s);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class to extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
*/class _u{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class M1{constructor(e,n){this.targetId=e,this.Ce=n}}class F1{constructor(e,n,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Xw{constructor(){this.ve=0,this.Fe=Zw(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ie(),n=ie(),r=ie();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H(38017,{changeType:s})}}),new ml(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=Zw()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class FO{constructor(e){this.Ge=e,this.ze=new Map,this.je=cr(),this.Je=Xl(),this.He=Xl(),this.Ze=new Pe(re)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:H(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Qf(s))if(r===0){const a=new q(s.path);this.et(n,a,pt.newNoDocument(a,W.min()))}else de(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,l;try{a=ri(r).toUint8Array()}catch(u){if(u instanceof a1)return Wi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vm(a,i,s)}catch(u){return Wi(u instanceof to?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,a)=>{const l=this.ot(a);if(l){if(s.current&&Qf(l.target)){const u=new q(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,pt.newNoDocument(u,e))}s.Be&&(n.set(a,s.ke()),s.Ke())}});let r=ie();this.He.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,a)=>a.setReadTime(e));const i=new pl(e,n,this.Ze,this.je,r);return this.je=cr(),this.Je=Xl(),this.He=Xl(),this.Ze=new Pe(re),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Xw,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new We(re),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new We(re),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Xw),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Xl(){return new Pe(q.comparator)}function Zw(){return new Pe(q.comparator)}const UO={asc:"ASCENDING",desc:"DESCENDING"},zO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VO={and:"AND",or:"OR"};class jO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xf(t,e){return t.useProto3Json||Jc(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BO(t,e){return yc(t,e.toTimestamp())}function An(t){return de(!!t,49232),W.fromTimestamp(function(e){const n=ni(e);return new Te(n.seconds,n.nanos)}(t))}function jm(t,e){return Zf(t,e).canonicalString()}function Zf(t,e){const n=function(r){return new we(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function z1(t){const e=we.fromString(t);return de($1(e),10190,{key:e.toString()}),e}function ep(t,e){return jm(t.databaseId,e.path)}function Pd(t,e){const n=z1(e);if(n.get(1)!==t.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(j1(n))}function V1(t,e){return jm(t.databaseId,e)}function qO(t){const e=z1(t);return e.length===4?we.emptyPath():j1(e)}function tp(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function j1(t){return de(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function eb(t,e,n){return{name:ep(t,e),fields:n.value.mapValue.fields}}function $O(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(de(h===void 0||typeof h=="string",58123),ut.fromBase64String(h||"")):(de(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ut.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(u){const h=u.code===void 0?D.UNKNOWN:L1(u.code);return new z(h,u.message||"")}(a);n=new F1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pd(t,r.document.name),s=An(r.document.updateTime),a=r.document.createTime?An(r.document.createTime):W.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=pt.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new _u(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pd(t,r.document),s=r.readTime?An(r.readTime):W.min(),a=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new _u([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pd(t,r.document),s=r.removedTargetIds||[];n=new _u([],s,i,null)}else{if(!("filter"in e))return H(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new OO(i,s),l=r.targetId;n=new M1(l,a)}}return n}function HO(t,e){let n;if(e instanceof fl)n={update:eb(t,e.key,e.value)};else if(e instanceof Um)n={delete:ep(t,e.key)};else if(e instanceof fi)n={update:eb(t,e.key,e.data),updateMask:eR(e.fieldMask)};else{if(!(e instanceof PO))return H(16599,{dt:e.type});n={verify:ep(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const a=s.transform;if(a instanceof $o)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ho)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Go)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ko)return{fieldPath:s.field.canonicalString(),increment:a.Ae};throw H(20930,{transform:s.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:BO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H(27497)}(t,e.precondition)),n}function GO(t,e){return t&&t.length>0?(de(e!==void 0,14353),t.map(n=>function(r,i){let s=r.updateTime?An(r.updateTime):An(i);return s.isEqual(W.min())&&(s=An(i)),new CO(s,r.transformResults||[])}(n,e))):[]}function KO(t,e){return{documents:[V1(t,e.path)]}}function WO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=V1(t,i);const s=function(u){if(u.length!==0)return q1(yn.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:ys(f.field),direction:JO(f.dir)}}(h))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Xf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:i}}function QO(t){let e=qO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(f){const p=B1(f);return p instanceof yn&&g1(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(f){return f.map(p=>function(m){return new qo(vs(m.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(p))}(n.orderBy));let l=null;n.limit&&(l=function(f){let p;return p=typeof f=="object"?f.value:f,Jc(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,m=f.values||[];return new gc(m,p)}(n.startAt));let h=null;return n.endAt&&(h=function(f){const p=!f.before,m=f.values||[];return new gc(m,p)}(n.endAt)),fO(e,i,a,s,l,"F",u,h)}function YO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function B1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=vs(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=vs(e.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=vs(e.unaryFilter.field);return qe.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(t):t.fieldFilter!==void 0?function(e){return qe.create(vs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return yn.create(e.compositeFilter.filters.map(n=>B1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(e.compositeFilter.op))}(t):H(30097,{filter:t})}function JO(t){return UO[t]}function XO(t){return zO[t]}function ZO(t){return VO[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return at.fromServerFormat(t.fieldPath)}function q1(t){return t instanceof qe?function(e){if(e.op==="=="){if(jw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NAN"}};if(Vw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(jw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NAN"}};if(Vw(e.value))return{unaryFilter:{field:ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(e.field),op:XO(e.op),value:e.value}}}(t):t instanceof yn?function(e){const n=e.getFilters().map(r=>q1(r));return n.length===1?n[0]:{compositeFilter:{op:ZO(e.op),filters:n}}}(t):H(54877,{filter:t})}function eR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function $1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function H1(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
*/class tR{constructor(e){this.yt=e}}function nR(t){const e=QO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jf(e,e.limit,"L"):e}/**
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
*/class rR{constructor(){this.bn=new iR}addToCollectionParentIndex(e,n){return this.bn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(ti.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class iR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new We(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new We(we.comparator)).toArray()}}/**
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
*/const tb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},G1=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
*/_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(G1,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
*/const nb="LruGarbageCollector",sR=1048576;function rb([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class aR{constructor(e){this.Pr=e,this.buffer=new We(rb),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();rb(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(nb,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){wa(n)?V(nb,"Ignoring IndexedDB error during garbage collection: ",n):await va(n)}await this.Ar(3e5)})}}class lR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return R.resolve(Yc.ce);const r=new aR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(tb)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tb):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,a,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,a=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ms()<=se.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${i} in `+(l-a)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function uR(t,e){return new lR(t,e)}/**
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
*/class cR{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
*/class hR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
*/class dR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Eo(r.mutation,i,zt.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Pi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=eo();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Pi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=cr();const a=So(),l=function(){return So()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof fi)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Eo(f.mutation,h,f.mutation.getFieldMask(),Te.now())):a.set(h.key,zt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>l.set(h,new hR(f,a.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=So();let i=new Pe((a,l)=>a-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||zt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=T1();f.forEach(m=>{if(!s.has(m)){const b=O1(n.get(m),r.get(m));b!==null&&p.set(m,b),s=s.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return R.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return pO(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):b1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Pi());let l=zo,u=s;return a.next(h=>R.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:I1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=eo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=eo();return this.indexManager.getCollectionParents(e,s).next(l=>R.forEach(l,u=>{const h=function(f,p){return new ba(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,pt.newInvalidDocument(f)))});let l=eo();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Eo(f.mutation,h,zt.empty(),Te.now()),th(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
*/class fR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return R.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:An(r.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(r){return{name:r.name,query:nR(r.bundledQuery),readTime:An(r.readTime)}}(n)),R.resolve()}}/**
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
*/class pR{constructor(){this.overlays=new Pe(q.comparator),this.Lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Pi();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Pi(),s=n.length+1,a=new q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Pi(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Pi(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return R.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new DO(n,r));let s=this.Lr.get(n);s===void 0&&(s=ie(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
*/class mR{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return R.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,R.resolve()}}/**
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
*/class Bm{constructor(){this.kr=new We(Xe.Kr),this.qr=new We(Xe.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Xe(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new q(new we([])),r=new Xe(n,e),i=new Xe(n,e+1),s=[];return this.qr.forEachInRange([r,i],a=>{this.Wr(a),s.push(a.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new q(new we([])),r=new Xe(n,e),i=new Xe(n,e+1);let s=ie();return this.qr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Xe(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return q.comparator(e.key,n.key)||re(e.Jr,n.Jr)}static Ur(e,n){return re(e.Jr,n.Jr)||q.comparator(e.key,n.key)}}/**
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
*/class gR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new We(Xe.Kr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new xO(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.Hr=this.Hr.add(new Xe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return R.resolve(a)}lookupMutationBatch(e,n){return R.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?Dm:this.Yn-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),i=new Xe(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],a=>{const l=this.Zr(a.Jr);s.push(l)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new We(re);return n.forEach(i=>{const s=new Xe(i,0),a=new Xe(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,a],l=>{r=r.add(l.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const a=new Xe(new q(s),0);let l=new We(re);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},a),R.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(n.mutations,i=>{const s=new Xe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Xe(n,0),i=this.Hr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
*/class yR{constructor(e){this.ti=e,this.docs=function(){return new Pe(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=cr();const a=n.path,l=new q(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||$D(qD(f),r)<=0||(i.has(f.key)||th(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H(9500)}ni(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new vR(this)}getSize(e){return R.resolve(this.size)}}class vR extends cR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
*/class wR{constructor(e){this.persistence=e,this.ri=new rs(n=>Lm(n),Mm),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.ii=0,this.si=new Bm,this.targetCount=0,this.oi=si._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),R.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new si(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.lr(n),R.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.si.containsKey(n))}}/**
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
*/class K1{constructor(e,n){this._i={},this.overlays={},this.ai=new Yc(0),this.ui=!1,this.ui=!0,this.ci=new mR,this.referenceDelegate=e(this),this.li=new wR(this),this.indexManager=new rR,this.remoteDocumentCache=function(r){return new yR(r)}(r=>this.referenceDelegate.hi(r)),this.serializer=new tR(n),this.Pi=new fR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new gR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new bR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class bR extends GD{constructor(e){super(),this.currentSequenceNumber=e}}class qm{constructor(e){this.persistence=e,this.Ri=new Bm,this.Ai=null}static Vi(e){return new qm(e)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),R.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const i=q.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return R.or([()=>R.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.fi=new rs(r=>QD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=uR(this,n)}static Vi(e,n){return new vc(e,n)}Ti(){}Ii(e){return R.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return R.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?R.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,a=>this.wr(e,a,n).next(l=>{l||(r++,s.removeEntry(a,W.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),R.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),R.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),R.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ku(e.data.value)),n}wr(e,n,r){return R.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return R.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
*/class $m{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new $m(e,n.fromCache,r,i)}}/**
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
*/class SR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
*/class ER{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return k2()?8:KD(mt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new SR;return this.ys(e,n,a).next(l=>{if(s.result=l,this.As)return this.ws(e,n,a,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ms()<=se.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(ms()<=se.DEBUG&&V("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ms()<=se.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):R.resolve())}gs(e,n){if(Hw(n))return R.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Jf(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ie(...s);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,a,u.readTime)?this.gs(e,Jf(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Hw(n)||i.isEqual(W.min())?R.resolve(null):this.fs.getDocuments(e,r).next(s=>{const a=this.Ss(n,s);return this.bs(n,a,r,i)?R.resolve(null):(ms()<=se.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(n)),this.Ds(e,a,n,BD(i,zo)).next(l=>l))})}Ss(e,n){let r=new We(E1(e));return n.forEach((i,s)=>{th(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ms()<=se.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",gs(n)),this.fs.getDocumentsMatchingQuery(e,n,ti.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
*/const Hm="LocalStore",kR=3e8;class IR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Pe(re),this.Fs=new rs(s=>Lm(s),Mm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function TR(t,e,n,r){return new IR(t,e,n,r)}async function W1(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ie();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:a,addedBatchIds:l}))})})}function _R(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let m=R.resolve();return p.forEach(b=>{m=m.next(()=>h.getEntry(l,b)).next(A=>{const L=u.docVersions.get(b);de(L!==null,48541),A.version.compareTo(L)<0&&(f.applyToRemoteDocument(A,u),A.isValidDocument()&&(A.setReadTime(u.commitVersion),h.addEntry(A)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Q1(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function CR(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let b=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(ut.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(f.resumeToken,r)),i=i.insert(p,b),function(A,L,M){return A.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=kR?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(m,b,f)&&l.push(n.li.updateTargetData(s,b))});let u=cr(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(NR(s,a,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(W.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return R.waitFor(l).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function NR(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=cr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):V(Hm,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:a,Ls:i}})}function AR(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Dm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function PR(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.li.allocateTargetId(r).next(a=>(i=new Qn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function np(t,e,n){const r=Q(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!wa(a))throw a;V(Hm,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function ib(t,e,n){const r=Q(t);let i=W.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,u,h){const f=Q(l),p=f.Fs.get(h);return p!==void 0?R.resolve(f.vs.get(p)):f.li.getTargetData(u,h)}(r,a,Nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,n?i:W.min(),n?s:ie())).next(l=>(xR(r,yO(e),l),{documents:l,ks:s})))}function xR(t,e,n){let r=t.Ms.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class sb{constructor(){this.activeTargetIds=kO()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class DR{constructor(){this.vo=new sb,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new sb,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
*/class OR{Mo(e){}shutdown(){}}/**
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
*/const ab="ConnectivityMonitor";class ob{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(ab,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(ab,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
*/const xd="RestConnection",RR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class LR{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===pc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const a=rp(),l=this.Qo(e,n.toUriEncodedString());V(xd,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=ol(h);return this.zo(e,l,u,r,f).then(p=>(V(xd,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Wi(xd,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,a){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ya}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=RR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
*/class MR{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
*/const dt="WebChannelConnection",Ha=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class qs extends LR{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!qs.c_){const e=Xk();Ha(e,Jk.STAT_EVENT,n=>{n.stat===$f.PROXY?V(dt,"STAT_EVENT: detected buffering proxy"):n.stat===$f.NOPROXY&&V(dt,"STAT_EVENT: detected no buffering proxy")}),qs.c_=!0}}zo(e,n,r,i,s){const a=rp();return new Promise((l,u)=>{const h=new Qk;h.setWithCredentials(!0),h.listenOnce(Yk.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Eu.NO_ERROR:const p=h.getResponseJson();V(dt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case Eu.TIMEOUT:V(dt,`RPC '${e}' ${a} timed out`),u(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Eu.HTTP_ERROR:const m=h.getStatus();if(V(dt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const A=b==null?void 0:b.error;if(A&&A.status&&A.message){const L=function(M){const I=M.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(I)>=0?I:D.UNKNOWN}(A.status);u(new z(L,A.message))}else u(new z(D.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new z(D.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{V(dt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(i);V(dt,`RPC '${e}' ${a} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=rp(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");V(dt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=a.createWebChannel(h,l);this.I_(f);let p=!1,m=!1;const b=new MR({Jo:A=>{m?V(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(p||(V(dt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),V(dt,`RPC '${e}' stream ${i} sending:`,A),f.send(A))},Ho:()=>f.close()});return Ha(f,Za.EventType.OPEN,()=>{m||(V(dt,`RPC '${e}' stream ${i} transport opened.`),b.i_())}),Ha(f,Za.EventType.CLOSE,()=>{m||(m=!0,V(dt,`RPC '${e}' stream ${i} transport closed`),b.o_(),this.E_(f))}),Ha(f,Za.EventType.ERROR,A=>{m||(m=!0,Wi(dt,`RPC '${e}' stream ${i} transport errored. Name:`,A.name,"Message:",A.message),b.o_(new z(D.UNAVAILABLE,"The operation could not be completed")))}),Ha(f,Za.EventType.MESSAGE,A=>{var L;if(!m){const M=A.data[0];de(!!M,16349);const I=M,S=(I==null?void 0:I.error)||((L=I[0])==null?void 0:L.error);if(S){V(dt,`RPC '${e}' stream ${i} received error:`,S);const _=S.status;let x=function(B){const w=ze[B];if(w!==void 0)return L1(w)}(_),U=S.message;_==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Wi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),x===void 0&&(x=D.INTERNAL,U="Unknown error status: "+_+" with message "+S.message),m=!0,b.o_(new z(x,U)),f.close()}else V(dt,`RPC '${e}' stream ${i} received:`,M),b.__(M)}}),qs.u_(),setTimeout(()=>{b.s_()},0),b}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zk()}}/**
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
*/function FR(t){return new qs(t)}function Dd(){return typeof document<"u"?document:null}/**
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
*/function ih(t){return new jO(t,!0)}/**
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
*/qs.c_=!1;class Y1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
*/const lb="PersistentStream";class J1{constructor(e,n,r,i,s,a,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Y1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(ur(n.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return V(lb,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(V(lb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UR extends J1{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=$O(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?An(s.readTime):W.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=tp(this.serializer),n.addTarget=function(i,s){let a;const l=s.target;if(a=Qf(l)?{documents:KO(i,l)}:{query:WO(i,l).ft},a.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){a.resumeToken=U1(i,s.resumeToken);const u=Xf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}else if(s.snapshotVersion.compareTo(W.min())>0){a.readTime=yc(i,s.snapshotVersion.toTimestamp());const u=Xf(i,s.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=YO(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=tp(this.serializer),n.removeTarget=e,this.K_(n)}}class zR extends J1{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=GO(e.writeResults,e.commitTime),r=An(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=tp(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>HO(this.serializer,r))};this.K_(n)}}/**
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
*/class VR{}class jR extends VR{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Wo(e,Zf(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(D.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,Zf(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(D.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function BR(t,e,n,r){return new jR(t,e,n,r)}class qR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ur(n),this.aa=!1):V("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
*/const On="RemoteStore";class $R{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new si(1e3),this.Va=new si(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(a=>{r.enqueueAndForget(async()=>{is(this)&&(V(On,"Restarting streams for network reachability change."),await async function(l){const u=Q(l);u.da.add(4),await gl(u),u.ga.set("Unknown"),u.da.delete(4),await sh(u)}(this))})}),this.ga=new qR(r,i)}}async function sh(t){if(is(t))for(const e of t.ma)await e(!0)}async function gl(t){for(const e of t.ma)await e(!1)}function ip(t,e){return t.Ea.get(e)||void 0}function X1(t,e){const n=Q(t),r=ip(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(a,l){const u=ip(a,l);u!==void 0&&a.Ra.delete(u);const h=function(f,p){return p%2!=0?f.Va.next():f.Aa.next()}(a,l);return a.Ea.set(l,h),a.Ra.set(h,l),h}(n,e.targetId);V(On,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Qn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),Qm(n)?Wm(n):Sa(n).O_()&&Km(n,s)}function Gm(t,e){const n=Q(t),r=Sa(n),i=ip(n,e);V(On,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&Z1(n,i),n.Ia.size===0&&(r.O_()?r.L_():is(n)&&n.ga.set("Unknown"))}function Km(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void V(On,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Sa(t).Z_(e)}function Z1(t,e){t.pa.$e(e),Sa(t).X_(e)}function Wm(t){t.pa=new FO({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):ie()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Sa(t).start(),t.ga.ua()}function Qm(t){return is(t)&&!Sa(t).x_()&&t.Ia.size>0}function is(t){return Q(t).da.size===0}function eI(t){t.pa=void 0}async function HR(t){t.ga.set("Online")}async function GR(t){t.Ia.forEach((e,n)=>{Km(t,e)})}async function KR(t,e){eI(t),Qm(t)?(t.ga.ha(e),Wm(t)):t.ga.set("Unknown")}async function WR(t,e,n){if(t.ga.set("Online"),e instanceof F1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const a of i.targetIds){if(r.Ia.has(a)){const l=r.Ra.get(a);l!==void 0&&(await r.remoteSyncer.rejectListen(l,s),r.Ea.delete(l),r.Ra.delete(a)),r.Ia.delete(a)}r.pa.removeTarget(a)}}(t,e)}catch(r){V(On,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await wc(t,r)}else if(e instanceof _u?t.pa.Xe(e):e instanceof M1?t.pa.st(e):t.pa.tt(e),!n.isEqual(W.min()))try{const r=await Q1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const a=i.pa.Tt(s);a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(u.resumeToken,s))}}),a.targetMismatches.forEach((u,h)=>{const f=i.Ia.get(u);if(!f)return;i.Ia.set(u,f.withResumeToken(ut.EMPTY_BYTE_STRING,f.snapshotVersion)),Z1(i,u);const p=new Qn(f.target,u,h,f.sequenceNumber);Km(i,p)});const l=function(u,h){const f=new Map;h.targetChanges.forEach((m,b)=>{const A=u.Ra.get(b);A!==void 0&&f.set(A,m)});let p=new Pe(re);return h.targetMismatches.forEach((m,b)=>{const A=u.Ra.get(m);A!==void 0&&(p=p.insert(A,b))}),new pl(h.snapshotVersion,f,p,h.documentUpdates,h.resolvedLimboDocuments)}(i,a);return i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){V(On,"Failed to raise snapshot:",r),await wc(t,r)}}async function wc(t,e,n){if(!wa(e))throw e;t.da.add(1),await gl(t),t.ga.set("Offline"),n||(n=()=>Q1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V(On,"Retrying IndexedDB access"),await n(),t.da.delete(1),await sh(t)})}function tI(t,e){return e().catch(n=>wc(t,n,e))}async function ah(t){const e=Q(t),n=ai(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Dm;for(;QR(e);)try{const i=await AR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,YR(e,i)}catch(i){await wc(e,i)}nI(e)&&rI(e)}function QR(t){return is(t)&&t.Ta.length<10}function YR(t,e){t.Ta.push(e);const n=ai(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function nI(t){return is(t)&&!ai(t).x_()&&t.Ta.length>0}function rI(t){ai(t).start()}async function JR(t){ai(t).ra()}async function XR(t){const e=ai(t);for(const n of t.Ta)e.ea(n.mutations)}async function ZR(t,e,n){const r=t.Ta.shift(),i=zm.from(r,e,n);await tI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ah(t)}async function e4(t,e){e&&ai(t).Y_&&await async function(n,r){if(function(i){return RO(i)&&i!==D.ABORTED}(r.code)){const i=n.Ta.shift();ai(n).B_(),await tI(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ah(n)}}(t,e),nI(t)&&rI(t)}async function ub(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),V(On,"RemoteStore received new credentials");const r=is(n);n.da.add(3),await gl(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await sh(n)}async function t4(t,e){const n=Q(t);e?(n.da.delete(2),await sh(n)):e||(n.da.add(2),await gl(n),n.ga.set("Unknown"))}function Sa(t){return t.ya||(t.ya=function(e,n,r){const i=Q(e);return i.sa(),new UR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:HR.bind(null,t),Yo:GR.bind(null,t),t_:KR.bind(null,t),H_:WR.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),Qm(t)?Wm(t):t.ga.set("Unknown")):(await t.ya.stop(),eI(t))})),t.ya}function ai(t){return t.wa||(t.wa=function(e,n,r){const i=Q(e);return i.sa(),new zR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:JR.bind(null,t),t_:e4.bind(null,t),ta:XR.bind(null,t),na:ZR.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await ah(t)):(await t.wa.stop(),t.Ta.length>0&&(V(On,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
*/class Ym{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new Ym(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jm(t,e){if(ur("AsyncQueue",`${e}: ${t}`),wa(t))return new z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
*/class $s{static emptySet(e){return new $s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=eo(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
*/class cb{constructor(){this.Sa=new Pe(q.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):H(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class aa{constructor(e,n,r,i,s,a,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new aa(e,n,$s.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&eh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
*/class n4{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class r4{constructor(){this.queries=hb(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(e,n){const r=Q(e),i=r.queries;r.queries=hb(),i.forEach((s,a)=>{for(const l of a.va)l.onError(n)})})(this,new z(D.ABORTED,"Firestore shutting down"))}}function hb(){return new rs(t=>S1(t),eh)}async function Xm(t,e){const n=Q(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new n4,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const l=Jm(a,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&eg(n)}async function Zm(t,e){const n=Q(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.va.indexOf(e);a>=0&&(s.va.splice(a,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function i4(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const l of a.va)l.Na(i)&&(r=!0);a.Ca=i}}r&&eg(n)}function s4(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function eg(t){t.xa.forEach(e=>{e.next()})}var sp,db;(db=sp||(sp={})).Ba="default",db.Cache="cache";class tg{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new aa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=aa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==sp.Cache}}/**
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
*/class iI{constructor(e){this.key=e}}class sI{constructor(e){this.key=e}}class a4{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=ie(),this.mutatedKeys=ie(),this.iu=E1(e),this.su=new $s(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new cb,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),b=th(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let M=!1;m&&b?m.data.isEqual(b.data)?A!==L&&(r.track({type:3,doc:b}),M=!0):this.uu(m,b)||(r.track({type:2,doc:b}),M=!0,(u&&this.iu(b,u)>0||h&&this.iu(b,h)<0)&&(l=!0)):!m&&b?(r.track({type:0,doc:b}),M=!0):m&&!b&&(r.track({type:1,doc:m}),M=!0,(u||h)&&(l=!0)),M&&(b?(a=a.add(b),s=L?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:a,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const a=e.au.Da();a.sort((f,p)=>function(m,b){const A=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:L})}};return A(m)-A(b)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,h=u!==this.nu;return this.nu=u,a.length!==0||h?{snapshot:new aa(this.query,e.su,s,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new cb,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=ie(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new sI(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new iI(r))}),n}Tu(e){this.tu=e.ks,this.ru=ie();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return aa.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ng="SyncEngine";class o4{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class l4{constructor(e){this.key=e,this.Eu=!1}}class u4{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new rs(l=>S1(l),eh),this.Vu=new Map,this.du=new Set,this.mu=new Pe(q.comparator),this.fu=new Map,this.gu=new Bm,this.pu={},this.yu=new Map,this.wu=si.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function c4(t,e,n=!0){const r=hI(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await aI(r,e,n,!0),i}async function h4(t,e){const n=hI(t);await aI(n,e,!0,!1)}async function aI(t,e,n,r){const i=await PR(t.localStore,Nn(e)),s=i.targetId,a=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await d4(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&X1(t.remoteStore,i),l}async function d4(t,e,n,r,i){t.bu=(p,m,b)=>async function(A,L,M,I){let S=L.view._u(M);S.bs&&(S=await ib(A.localStore,L.query,!1).then(({documents:B})=>L.view._u(B,S)));const _=I&&I.targetChanges.get(L.targetId),x=I&&I.targetMismatches.get(L.targetId)!=null,U=L.view.applyChanges(S,A.isPrimaryClient,_,x);return pb(A,L.targetId,U.hu),U.snapshot}(t,p,m,b);const s=await ib(t.localStore,e,!0),a=new a4(e,s.ks),l=a._u(s.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=a.applyChanges(l,t.isPrimaryClient,u);pb(t,n,h.hu);const f=new o4(e,n,a);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function f4(t,e,n){const r=Q(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(a=>!eh(a,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await np(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Gm(r.remoteStore,i.targetId),ap(r,i.targetId)}).catch(va)):(ap(r,i.targetId),await np(r.localStore,i.targetId,!0))}async function p4(t,e){const n=Q(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Gm(n.remoteStore,r.targetId))}async function m4(t,e,n){const r=E4(t);try{const i=await function(s,a){const l=Q(s),u=Te.now(),h=a.reduce((m,b)=>m.add(b.key),ie());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let b=cr(),A=ie();return l.xs.getEntries(m,h).next(L=>{b=L,b.forEach((M,I)=>{I.isValidDocument()||(A=A.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,b)).next(L=>{f=L;const M=[];for(const I of a){const S=AO(I,f.get(I.key).overlayedDocument);S!=null&&M.push(new fi(I.key,S,f1(S.value.mapValue),sn.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,M,a)}).next(L=>{p=L;const M=L.applyToLocalDocumentSet(f,A);return l.documentOverlayCache.saveOverlays(m,L.batchId,M)})}).then(()=>({batchId:p.batchId,changes:I1(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,a,l){let u=s.pu[s.currentUser.toKey()];u||(u=new Pe(re)),u=u.insert(a,l),s.pu[s.currentUser.toKey()]=u}(r,i.batchId,n),await yl(r,i.changes),await ah(r.remoteStore)}catch(i){const s=Jm(i,"Failed to persist write");n.reject(s)}}async function oI(t,e){const n=Q(t);try{const r=await CR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.fu.get(s);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.Eu=!0:i.modifiedDocuments.size>0?de(a.Eu,14607):i.removedDocuments.size>0&&(de(a.Eu,42227),a.Eu=!1))}),await yl(n,r,e)}catch(r){await va(r)}}function fb(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,a)=>{const l=a.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(s,a){const l=Q(s);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.va)p.Oa(a)&&(u=!0)}),u&&eg(l)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function g4(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let a=new Pe(q.comparator);a=a.insert(s,pt.newNoDocument(s,W.min()));const l=ie().add(s),u=new pl(W.min(),new Map,new Pe(re),a,l);await oI(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),rg(r)}else await np(r.localStore,e,!1).then(()=>ap(r,e,n)).catch(va)}async function y4(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await _R(n.localStore,e);uI(n,r,null),lI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await yl(n,i)}catch(i){await va(i)}}async function v4(t,e,n){const r=Q(t);try{const i=await function(s,a){const l=Q(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(de(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);uI(r,e,n),lI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await yl(r,i)}catch(i){await va(i)}}function lI(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function uI(t,e,n){const r=Q(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function ap(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||cI(t,r)})}function cI(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(Gm(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),rg(t))}function pb(t,e,n){for(const r of n)r instanceof iI?(t.gu.addReference(r.key,e),w4(t,r)):r instanceof sI?(V(ng,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||cI(t,r.key)):H(19791,{Cu:r})}function w4(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(V(ng,"New document in limbo: "+n),t.du.add(r),rg(t))}function rg(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new q(we.fromString(e)),r=t.wu.next();t.fu.set(r,new l4(n)),t.mu=t.mu.insert(n,r),X1(t.remoteStore,new Qn(Nn(Zc(n.path)),r,"TargetPurposeLimboResolution",Yc.ce))}}async function yl(t,e,n){const r=Q(t),i=[],s=[],a=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{a.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=$m.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(a),r.Ru.H_(i),await async function(l,u){const h=Q(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>R.forEach(u,p=>R.forEach(p.Ts,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>R.forEach(p.Is,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!wa(f))throw f;V(Hm,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.vs.get(p),b=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(b);h.vs=h.vs.insert(p,A)}}}(r.localStore,s))}async function b4(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){V(ng,"User change. New user:",e.toKey());const r=await W1(n.localStore,e);n.currentUser=e,function(i,s){i.yu.forEach(a=>{a.forEach(l=>{l.reject(new z(D.CANCELLED,s))})}),i.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await yl(n,r.Ns)}}function S4(t,e){const n=Q(t),r=n.fu.get(e);if(r&&r.Eu)return ie().add(r.key);{let i=ie();const s=n.Vu.get(e);if(!s)return i;for(const a of s){const l=n.Au.get(a);i=i.unionWith(l.view.ou)}return i}}function hI(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=S4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g4.bind(null,e),e.Ru.H_=i4.bind(null,e.eventManager),e.Ru.Du=s4.bind(null,e.eventManager),e}function E4(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=v4.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ih(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return TR(this.persistence,new ER,e.initialUser,this.serializer)}xu(e){return new K1(qm.Vi,this.serializer)}Mu(e){return new DR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class k4 extends bc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){de(this.persistence.referenceDelegate instanceof vc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new oR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new K1(r=>vc.Vi(r,n),this.serializer)}}class op{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fb(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b4.bind(null,this.syncEngine),await t4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r4}()}createDatastore(e){const n=ih(e.databaseInfo.databaseId),r=FR(e.databaseInfo);return BR(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(n,r,i,s,a){return new $R(n,r,i,s,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fb(this.syncEngine,n,0),function(){return ob.v()?new ob:new OR}())}createSyncEngine(e,n){return function(r,i,s,a,l,u,h){const f=new u4(r,i,s,a,l,u);return h&&(f.Su=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=Q(r);V(On,"RemoteStore shutting down."),i.da.add(5),await gl(i),i.fa.shutdown(),i.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}op.provider={build:()=>new op};/**
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
*/const oi="FirestoreClient";class I4{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=xm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{V(oi,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(V(oi,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Od(t,e){t.asyncQueue.verifyOperationInProgress(),V(oi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await W1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await T4(t);V(oi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ub(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ub(e.remoteStore,i)),t._onlineComponents=e}async function T4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V(oi,"Using user provided OfflineComponentProvider");try{await Od(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===D.FAILED_PRECONDITION||r.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Wi("Error using user provided cache. Falling back to memory cache: "+n),await Od(t,new bc)}}else V(oi,"Using default OfflineComponentProvider"),await Od(t,new k4(void 0));return t._offlineComponents}async function dI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V(oi,"Using user provided OnlineComponentProvider"),await mb(t,t._uninitializedComponentsProvider._online)):(V(oi,"Using default OnlineComponentProvider"),await mb(t,new op))),t._onlineComponents}function _4(t){return dI(t).then(e=>e.syncEngine)}async function Sc(t){const e=await dI(t),n=e.eventManager;return n.onListen=c4.bind(null,e.syncEngine),n.onUnlisten=f4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=p4.bind(null,e.syncEngine),n}function C4(t,e,n,r){const i=new ig(r),s=new tg(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Xm(await Sc(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>Zm(await Sc(t),s))}}function N4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const h=new ig({next:p=>{h.Ku(),s.enqueueAndForget(()=>Zm(i,f));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new tg(Zc(a.path),h,{includeMetadataChanges:!0,Wa:!0});return Xm(i,f)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}function A4(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,a,l,u){const h=new ig({next:p=>{h.Ku(),s.enqueueAndForget(()=>Zm(i,f)),p.fromCache&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new tg(a,h,{includeMetadataChanges:!0,Wa:!0});return Xm(i,f)}(await Sc(t),t.asyncQueue,e,n,r)),r.promise}function P4(t,e){const n=new er;return t.asyncQueue.enqueueAndForget(async()=>m4(await _4(t),e,n)),n.promise}/**
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
*/function fI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
*/const x4="ComponentProvider",gb=new Map;function D4(t,e,n,r,i){return new XD(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,fI(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
*/const pI="firestore.googleapis.com",yb=!0;class vb{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=pI,this.ssl=yb}else this.host=e.host,this.ssl=e.ssl??yb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=G1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sR)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fI(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xD;switch(n.type){case"firstParty":return new LD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gb.get(e);n&&(V(x4,"Removing Datastore"),gb.delete(e),n.terminate())}(this),Promise.resolve()}}function O4(t,e,n,r={}){var i;t=At(t,oh);const s=ol(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},u=`${e}:${n}`;s&&VE(`https://${u}`),a.host!==pI&&a.host!==u&&Wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:u,ssl:s,emulatorOptions:r};if(!ei(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ft.MOCK_USER;else{f=y2(r.mockUserToken,(i=t._app)==null?void 0:i.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ft(m)}t._authCredentials=new DD(new t1(f,p))}}/**
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
*/class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(dl(n,Re._jsonSchema))return new Re(e,r||null,new q(we.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:He("string",Re._jsonSchemaVersion),referencePath:He("string")};class Qr extends pi{constructor(e,n,r){super(e,n,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new q(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function Ei(t,e,...n){if(t=Ae(t),n1("collection","path",e),t instanceof oh){const r=we.fromString(e,...n);return xw(r),new Qr(t,null,r)}{if(!(t instanceof Re||t instanceof Qr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return xw(r),new Qr(t.firestore,null,r)}}function Wt(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=xm.newId()),n1("doc","path",e),t instanceof oh){const r=we.fromString(e,...n);return Pw(r),new Re(t,null,new q(r))}{if(!(t instanceof Re||t instanceof Qr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Pw(r),new Re(t.firestore,t instanceof Qr?t.converter:null,new q(r))}}/**
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
*/const wb="AsyncQueue";class bb{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Y1(this,"async_queue_retry"),this.lc=()=>{const r=Dd();r&&V(wb,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Dd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Dd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new er;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!wa(e))throw e;V(wb,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,ur("INTERNAL UNHANDLED ERROR: ",Sb(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Ym.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&H(47125,{Rc:Sb(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Sb(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class hr extends oh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new bb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bb(e),this._firestoreClient=void 0,await e}}}function R4(t,e){const n=typeof t=="object"?t:fm(),r=typeof t=="string"?t:pc,i=ns(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=m2("firestore");s&&O4(i,...s)}return i}function lh(t){if(t._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||L4(t),t._firestoreClient}function L4(t){var e,n,r,i;const s=t._freezeSettings(),a=D4(t._databaseId,((e=t._app)==null?void 0:e.options.appId)||"",t._persistenceKey,(n=t._app)==null?void 0:n.options.apiKey,s);t._componentsProvider||(r=s.localCache)!=null&&r._offlineComponentProvider&&(i=s.localCache)!=null&&i._onlineComponentProvider&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new I4(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
*/class tn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tn(ut.fromBase64String(e))}catch(n){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new tn(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:tn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(dl(e,tn._jsonSchema))return tn.fromBase64String(e.bytes)}}tn._jsonSchemaVersion="firestore/bytes/1.0",tn._jsonSchema={type:He("string",tn._jsonSchemaVersion),bytes:He("string")};/**
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
*/class sg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
*/class Pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(dl(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:He("string",Pn._jsonSchemaVersion),latitude:He("number"),longitude:He("number")};/**
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
*/class pn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:pn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(dl(e,pn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new pn(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pn._jsonSchemaVersion="firestore/vectorValue/1.0",pn._jsonSchema={type:He("string",pn._jsonSchemaVersion),vectorValues:He("object")};/**
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
*/const M4=/^__.*__$/;class F4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new fl(e,this.data,n,this.fieldTransforms)}}class mI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function gI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:t})}}class ag{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ag({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.i({path:r,arrayElement:!1});return i.wc(e),i}Sc(e){var n;const r=(n=this.path)==null?void 0:n.child(e),i=this.i({path:r,arrayElement:!1});return i.fc(),i}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ec(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(gI(this.dataSource)&&M4.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class U4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ih(e)}V(e,n,r,i=!1){return new ag({dataSource:e,methodName:n,targetDoc:r,path:at.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uh(t){const e=t._freezeSettings(),n=ih(t._databaseId);return new U4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yI(t,e,n,r,i,s={}){const a=t.V(s.merge||s.mergeFields?2:0,e,n,i);ug("Data must be an object, but it was:",a,r);const l=vI(r,a);let u,h;if(s.merge)u=new zt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Qi(e,p,n);if(!a.contains(m))throw new z(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);SI(f,m)||f.push(m)}u=new zt(f),h=a.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=a.fieldTransforms;return new F4(new Ct(l),u,h)}class ch extends vl{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}class og extends vl{_toFieldTransform(e){return new D1(e.path,new $o)}isEqual(e){return e instanceof og}}class lg extends vl{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new Ko(e.serializer,C1(e.serializer,this.Fc));return new D1(e.path,n)}isEqual(e){return e instanceof lg&&this.Fc===e.Fc}}function z4(t,e,n,r){const i=t.V(1,e,n);ug("Data must be an object, but it was:",i,r);const s=[],a=Ct.empty();di(r,(u,h)=>{const f=bI(e,u,n);h=Ae(h);const p=i.Sc(f);if(h instanceof ch)s.push(f);else{const m=wl(h,p);m!=null&&(s.push(f),a.set(f,m))}});const l=new zt(s);return new mI(a,l,i.fieldTransforms)}function V4(t,e,n,r,i,s){const a=t.V(1,e,n),l=[Qi(e,r,n)],u=[i];if(s.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Qi(e,s[m])),u.push(s[m+1]);const h=[],f=Ct.empty();for(let m=l.length-1;m>=0;--m)if(!SI(h,l[m])){const b=l[m];let A=u[m];A=Ae(A);const L=a.Sc(b);if(A instanceof ch)h.push(b);else{const M=wl(A,L);M!=null&&(h.push(b),f.set(b,M))}}const p=new zt(h);return new mI(f,p,a.fieldTransforms)}function j4(t,e,n,r=!1){return wl(n,t.V(r?4:3,e))}function wl(t,e){if(wI(t=Ae(t)))return ug("Unsupported field value:",e,t),vI(t,e);if(t instanceof vl)return function(n,r){if(!gI(r.dataSource))throw r.Dc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Dc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const a of n){let l=wl(a,r.bc(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return C1(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:yc(r.serializer,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:yc(r.serializer,i)}}if(n instanceof Pn)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof tn)return{bytesValue:U1(r.serializer,n._byteString)};if(n instanceof Re){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Dc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:jm(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof pn)return function(i,s){const a=i instanceof pn?i.toArray():i;return{mapValue:{fields:{[h1]:{stringValue:d1},[mc]:{arrayValue:{values:a.map(l=>{if(typeof l!="number")throw s.Dc("VectorValues must only contain numeric values.");return Fm(s.serializer,l)})}}}}}}(n,r);if(H1(n))return n._toProto(r.serializer);throw r.Dc(`Unsupported field value: ${Qc(n)}`)}(t,e)}function vI(t,e){const n={};return s1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=wl(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Pn||t instanceof tn||t instanceof Re||t instanceof vl||t instanceof pn||H1(t))}function ug(t,e,n){if(!wI(n)||!r1(n)){const r=Qc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function Qi(t,e,n){if((e=Ae(e))instanceof sg)return e._internalPath;if(typeof e=="string")return bI(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const B4=new RegExp("[~\\*/\\[\\]]");function bI(t,e,n){if(e.search(B4)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sg(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new z(D.INVALID_ARGUMENT,l+t+u)}function SI(t,e){return t.some(n=>n.isEqual(e))}/**
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
*/class q4{convertValue(e,n="none"){switch(ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ri(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)==null?void 0:n[mc].arrayValue)==null?void 0:r.values)==null?void 0:i.map(a=>Le(a.doubleValue));return new pn(s)}convertGeoPoint(e){return new Pn(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=ni(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);de($1(r),9688,{name:e});const i=new jo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
*/class cg extends q4{constructor(e){super(),this.firestore=e}convertBytes(e){return new tn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function Ot(){return new og("serverTimestamp")}function eu(t){return new lg("increment",t)}const Eb="@firebase/firestore",kb="4.14.1";/**
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
*/function Ib(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
*/class EI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Qi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $4 extends EI{data(){return super.data()}}/**
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
*/function kI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hg{}class II extends hg{}function Rd(t,e,...n){let r=[];e instanceof hg&&r.push(e),r=r.concat(n),function(i){const s=i.filter(l=>l instanceof dg).length,a=i.filter(l=>l instanceof hh).length;if(s>1||s>0&&a>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class hh extends II{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new hh(e,n,r)}_apply(e){const n=this._parse(e);return TI(e._query,n),new pi(e.firestore,e.converter,Yf(e._query,n))}_parse(e){const n=uh(e.firestore);return function(r,i,s,a,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Cb(h,u);const p=[];for(const m of h)p.push(_b(a,r,m));f={arrayValue:{values:p}}}else f=_b(a,r,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Cb(h,u),f=j4(s,i,h,u==="in"||u==="not-in");return qe.create(l,u,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function H4(t,e,n){const r=e,i=Qi("where",t);return hh._create(i,r,n)}class dg extends hg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new dg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:yn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const a=i.getFlattenedFilters();for(const l of a)TI(s,l),s=Yf(s,l)}(e._query,n),new pi(e.firestore,e.converter,Yf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class fg extends II{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new fg(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(i,s)}(e._query,this._field,this._direction);return new pi(e.firestore,e.converter,gO(e._query,n))}}function Tb(t,e="asc"){const n=e,r=Qi("orderBy",t);return fg._create(r,n)}function _b(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!b1(e)&&n.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!q.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return zw(t,new q(r))}if(n instanceof Re)return zw(t,n._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(n)}.`)}function Cb(t,e){if(!Array.isArray(t)||t.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function TI(t,e){const n=function(r,i){for(const s of r)for(const a of s.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function _I(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class no{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends EI{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Qi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()||(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),n}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:He("string",Mi._jsonSchemaVersion),bundleSource:He("string","DocumentSnapshot"),bundleName:He("string"),bundle:He("string")};class Cu extends Mi{data(e={}){return super.data(e)}}class Fi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new no(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new no(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(a=>{const l=new Cu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new no(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Cu(r._firestore,r._userDataWriter,a.doc.key,a.doc,new no(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=s.indexOf(a.doc.key),s=s.delete(a.doc.key)),a.type!==1&&(s=s.add(a.doc),h=s.indexOf(a.doc.key)),{type:G4(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function G4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:t})}}/**
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
*/function K4(t){t=At(t,Re);const e=At(t.firestore,hr),n=lh(e);return N4(n,t._key).then(r=>CI(e,t,r))}function W4(t){t=At(t,pi);const e=At(t.firestore,hr),n=lh(e),r=new cg(e);return kI(t._query),A4(n,t._query).then(i=>new Fi(e,r,t,i))}function tu(t,e,n){t=At(t,Re);const r=At(t.firestore,hr),i=_I(t.converter,e,n),s=uh(r);return dh(r,[yI(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,sn.none())])}function Ld(t,e,n,...r){t=At(t,Re);const i=At(t.firestore,hr),s=uh(i);let a;return a=typeof(e=Ae(e))=="string"||e instanceof sg?V4(s,"updateDoc",t._key,e,n,r):z4(s,"updateDoc",t._key,e),dh(i,[a.toMutation(t._key,sn.exists(!0))])}function Nb(t){return dh(At(t.firestore,hr),[new Um(t._key,sn.none())])}function Md(t,e){const n=At(t.firestore,hr),r=Wt(t),i=_I(t.converter,e),s=uh(t.firestore);return dh(n,[yI(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function nu(t,...e){var n,r,i;t=Ae(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ib(e[a])||(s=e[a++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ib(e[a])){const m=e[a];e[a]=(n=m.next)==null?void 0:n.bind(m),e[a+1]=(r=m.error)==null?void 0:r.bind(m),e[a+2]=(i=m.complete)==null?void 0:i.bind(m)}let u,h,f;if(t instanceof Re)h=At(t.firestore,hr),f=Zc(t._key.path),u={next:m=>{e[a]&&e[a](CI(h,t,m))},error:e[a+1],complete:e[a+2]};else{const m=At(t,pi);h=At(m.firestore,hr),f=m._query;const b=new cg(h);u={next:A=>{e[a]&&e[a](new Fi(h,b,m,A))},error:e[a+1],complete:e[a+2]},kI(t._query)}const p=lh(h);return C4(p,f,l,u)}function dh(t,e){const n=lh(t);return P4(n,e)}function CI(t,e,n){const r=n.docs.get(e._key),i=new cg(t);return new Mi(t,i,e._key,r,new no(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){PD(ma),xn(new gn("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),a=new hr(new OD(n.getProvider("auth-internal")),new MD(s,n.getProvider("app-check-internal")),ZD(s,r),s);return i={useFetchStreams:e,...i},a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),rn(Eb,kb,t),rn(Eb,kb,"esm2020")})();const Q4={apiKey:"AIzaSyBdxuFu9cs0OdurGZneu6l_v72S_u2kmvw",authDomain:"hr-supermarket-db.firebaseapp.com",projectId:"hr-supermarket-db",storageBucket:"hr-supermarket-db.firebasestorage.app",messagingSenderId:"466119121244",appId:"1:466119121244:web:5002c474833406b8d6c999",measurementId:"G-JQ42BL9WE3"},Y4=["divyrajchavda1987@gmail.com"],kL="1234",IL="9999",TL={month:1,year:2026},pg=$E(Q4);lP().then(t=>{t&&aP(pg)});const ws=ND(pg);px(ws,Uk).catch(()=>{});const Je=R4(pg),NI=new qn;NI.setCustomParameters({prompt:"select_account"});function _L(t){return Y4.includes(t||"")}const CL={onChange(t){return yx(ws,t)},async signInWithGoogle(){return Fx(ws,NI)},async signInWithEmail(t,e){return hx(ws,t,e)},async signUp(t,e,n){const r=await cx(ws,e,n);return t&&await fx(r.user,{displayName:t}),r},async signOut(){return vx(ws)}},NL={subscribeCollection(t,e,n=()=>{}){return nu(Rd(Ei(Je,t),Tb("createdAt","desc")),r=>{e(r.docs.map(i=>{var s,a,l,u,h,f,p,m;return{id:i.id,...i.data(),createdAt:((u=(l=(a=(s=i.data().createdAt)==null?void 0:s.toDate)==null?void 0:a.call(s))==null?void 0:l.toISOString)==null?void 0:u.call(l))||i.data().createdAt||null,updatedAt:((m=(p=(f=(h=i.data().updatedAt)==null?void 0:h.toDate)==null?void 0:f.call(h))==null?void 0:p.toISOString)==null?void 0:m.call(p))||i.data().updatedAt||null}}))},n)},subscribeOrdersForUser(t,e,n=()=>{}){return nu(Rd(Ei(Je,"orders"),H4("userId","==",t)),r=>{const i=r.docs.map(s=>{var a,l,u,h;return{id:s.id,...s.data(),createdAt:((h=(u=(l=(a=s.data().createdAt)==null?void 0:a.toDate)==null?void 0:l.call(a))==null?void 0:u.toISOString)==null?void 0:h.call(u))||s.data().createdAt||null}}).sort((s,a)=>new Date(a.createdAt||0)-new Date(s.createdAt||0));e(i)},n)},subscribeOrders(t,e=()=>{}){return nu(Rd(Ei(Je,"orders"),Tb("createdAt","desc")),n=>{t(n.docs.map(r=>{var i,s,a,l;return{id:r.id,...r.data(),createdAt:((l=(a=(s=(i=r.data().createdAt)==null?void 0:i.toDate)==null?void 0:s.call(i))==null?void 0:a.toISOString)==null?void 0:l.call(a))||r.data().createdAt||null}}))},e)},subscribeDocument(t,e,n,r=()=>{}){return nu(Wt(Je,t,e),i=>{n(i.exists()?{id:i.id,...i.data()}:null)},r)},async addProduct(t){return Md(Ei(Je,"products"),{...t,createdAt:Ot(),updatedAt:Ot()})},async removeProduct(t){return Nb(Wt(Je,"products",t))},async addBanner(t){return Md(Ei(Je,"banners"),{...t,createdAt:Ot(),updatedAt:Ot()})},async removeBanner(t){return Nb(Wt(Je,"banners",t))},async savePlatformFee(t,e){return tu(Wt(Je,"platform_fees",t),e,{merge:!0})},async updatePlatformFeeStatus(t,e){return Ld(Wt(Je,"platform_fees",t),{status:e,updatedAt:Ot()})},async updateOrderStatus(t,e){return Ld(Wt(Je,"orders",t),{status:e,updatedAt:Ot()})},async updatePlatformCutStatus(t,e){return Ld(Wt(Je,"orders",t),{platformCutStatus:e,updatedAt:Ot()})},async saveSettings(t){return tu(Wt(Je,"settings","storefront"),{...t,updatedAt:Ot()},{merge:!0})},async getSettings(){const t=await K4(Wt(Je,"settings","storefront"));return t.exists()?t.data():null},async placeOrder(t){const e=await Md(Ei(Je,"orders"),{...t,createdAt:Ot(),updatedAt:Ot()});return await tu(Wt(Je,"platform_earnings","summary"),{totalOrders:eu(1),totalPlatformCut:eu(t.platformCut||0),totalHandlingFee:eu(t.handlingFee||0),totalActualHandling:eu(t.actualHandling||0),lastOrderId:e.id,updatedAt:Ot()},{merge:!0}),e},async seedPlatformFees(t){const e=await W4(Ei(Je,"platform_fees")),n=new Set(e.docs.map(r=>r.id));await Promise.all(t.filter(r=>!n.has(r.id)).map(r=>tu(Wt(Je,"platform_fees",r.id),{month:r.month,year:r.year,amount:1500,status:"Pending",createdAt:Ot(),updatedAt:Ot()})))}};function AL(t,e){const[n,r]=tr.useState(()=>r2(t,e));return tr.useEffect(()=>{i2(t,n)},[t,n]),[n,r]}function PL(t){const e=()=>window.matchMedia(t).matches,[n,r]=tr.useState(e);return tr.useEffect(()=>{const i=window.matchMedia(t),s=()=>r(i.matches);return s(),i.addEventListener("change",s),()=>i.removeEventListener("change",s)},[t]),n}function xL(t,e=3500){const[n,r]=tr.useState(0);return tr.useEffect(()=>{if(!t)return;const i=window.setInterval(()=>{r(s=>(s+1)%t)},e);return()=>window.clearInterval(i)},[e,t]),[n,r]}function DL(t,e="#10231a"){tr.useEffect(()=>{const n=document.body.style.background,r=document.body.style.color,i=document.body.style.margin,s=document.body.style.fontFamily;return document.body.style.margin="0",document.body.style.background=t,document.body.style.color=e,document.body.style.fontFamily="'Segoe UI', system-ui, sans-serif",()=>{document.body.style.background=n,document.body.style.color=r,document.body.style.margin=i,document.body.style.fontFamily=s}},[t,e])}export{NL as A,Bv as B,_L as C,DL as D,kL as E,vL as F,bL as G,yL as H,CL as I,J4 as J,K,PL as N,AL as P,xL as R,EL as S,TL as T,X4 as X,Z4 as Z,IL as _,DE as a,a2 as b,aL as c,wL as d,cL as e,dL as f,e2 as g,eL as h,fL as i,gL as j,hL as k,i2 as l,iL as m,jv as n,SL as o,lL as p,mL as q,nL as r,oL as s,pL as t,rL as u,sL as v,tL as w,tr as x,uL as y,ue as z};
