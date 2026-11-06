const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TestAccounts-C5o-bBv1.js","assets/TestAccounts-B09IER6b.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Ie={},Mr=[],kt=()=>{},el=()=>!1,_o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ui=e=>e.startsWith("onUpdate:"),$e=Object.assign,Wi=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},ad=Object.prototype.hasOwnProperty,we=(e,t)=>ad.call(e,t),ge=Array.isArray,Lr=e=>Mn(e)==="[object Map]",tl=e=>Mn(e)==="[object Set]",_a=e=>Mn(e)==="[object Date]",ve=e=>typeof e=="function",Le=e=>typeof e=="string",_t=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",rl=e=>(_e(e)||ve(e))&&ve(e.then)&&ve(e.catch),nl=Object.prototype.toString,Mn=e=>nl.call(e),sd=e=>Mn(e).slice(8,-1),ol=e=>Mn(e)==="[object Object]",Po=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hn=ji(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=e=>{const t=Object.create(null);return(r=>t[r]||(t[r]=e(r)))},ld=/-\w/g,St=wo(e=>e.replace(ld,t=>t.slice(1).toUpperCase())),cd=/\B([A-Z])/g,wr=wo(e=>e.replace(cd,"-$1").toLowerCase()),Ao=wo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Uo=wo(e=>e?`on${Ao(e)}`:""),ir=(e,t)=>!Object.is(e,t),ro=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},il=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Vi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ud=e=>{const t=Le(e)?Number(e):NaN;return isNaN(t)?e:t};let Pa;const Eo=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _n(e){if(ge(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],o=Le(n)?hd(n):_n(n);if(o)for(const i in o)t[i]=o[i]}return t}else if(Le(e)||_e(e))return e}const dd=/;(?![^(]*\))/g,fd=/:([^]+)/,pd=/\/\*[^]*?\*\//g;function hd(e){const t={};return e.replace(pd,"").split(dd).forEach(r=>{if(r){const n=r.split(fd);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Pn(e){let t="";if(Le(e))t=e;else if(ge(e))for(let r=0;r<e.length;r++){const n=Pn(e[r]);n&&(t+=n+" ")}else if(_e(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const md="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gd=ji(md);function al(e){return!!e||e===""}function vd(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=Gi(e[n],t[n]);return r}function Gi(e,t){if(e===t)return!0;let r=_a(e),n=_a(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=_t(e),n=_t(t),r||n)return e===t;if(r=ge(e),n=ge(t),r||n)return r&&n?vd(e,t):!1;if(r=_e(e),n=_e(t),r||n){if(!r||!n)return!1;const o=Object.keys(e).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in e){const s=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(s&&!l||!s&&l||!Gi(e[a],t[a]))return!1}}return String(e)===String(t)}const sl=e=>!!(e&&e.__v_isRef===!0),kr=e=>Le(e)?e:e==null?"":ge(e)||_e(e)&&(e.toString===nl||!ve(e.toString))?sl(e)?kr(e.value):JSON.stringify(e,ll,2):String(e),ll=(e,t)=>sl(t)?ll(e,t.value):Lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,o],i)=>(r[Wo(n,i)+" =>"]=o,r),{})}:tl(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>Wo(r))}:_t(t)?Wo(t):_e(t)&&!ge(t)&&!ol(t)?String(t):t,Wo=(e,t="")=>{var r;return _t(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pt;class bd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=pt,!t&&pt&&(this.index=(pt.scopes||(pt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=pt;try{return pt=this,t()}finally{pt=r}}}on(){++this._on===1&&(this.prevScope=pt,pt=this)}off(){this._on>0&&--this._on===0&&(pt=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Cd(){return pt}let Re;const Vo=new WeakSet;class cl{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pt&&pt.active&&pt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vo.has(this)&&(Vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wa(this),fl(this);const t=Re,r=yt;Re=this,yt=!0;try{return this.fn()}finally{pl(this),Re=t,yt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ki(t);this.deps=this.depsTail=void 0,wa(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pi(this)&&this.run()}get dirty(){return pi(this)}}let ul=0,mn,gn;function dl(e,t=!1){if(e.flags|=8,t){e.next=gn,gn=e;return}e.next=mn,mn=e}function qi(){ul++}function Yi(){if(--ul>0)return;if(gn){let t=gn;for(gn=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;mn;){let t=mn;for(mn=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function fl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pl(e){let t,r=e.depsTail,n=r;for(;n;){const o=n.prevDep;n.version===-1?(n===r&&(r=o),Ki(n),xd(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=o}e.deps=t,e.depsTail=r}function pi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===wn)||(e.globalVersion=wn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!pi(e))))return;e.flags|=2;const t=e.dep,r=Re,n=yt;Re=e,yt=!0;try{fl(e);const o=e.fn(e._value);(t.version===0||ir(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Re=r,yt=n,pl(e),e.flags&=-3}}function Ki(e,t=!1){const{dep:r,prevSub:n,nextSub:o}=e;if(n&&(n.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let i=r.computed.deps;i;i=i.nextDep)Ki(i,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function xd(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let yt=!0;const ml=[];function Ut(){ml.push(yt),yt=!1}function Wt(){const e=ml.pop();yt=e===void 0?!0:e}function wa(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Re;Re=void 0;try{t()}finally{Re=r}}}let wn=0;class Sd{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qi{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Re||!yt||Re===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Re)r=this.activeLink=new Sd(Re,this),Re.deps?(r.prevDep=Re.depsTail,Re.depsTail.nextDep=r,Re.depsTail=r):Re.deps=Re.depsTail=r,gl(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=Re.depsTail,r.nextDep=void 0,Re.depsTail.nextDep=r,Re.depsTail=r,Re.deps===r&&(Re.deps=n)}return r}trigger(t){this.version++,wn++,this.notify(t)}notify(t){qi();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{Yi()}}}function gl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)gl(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const lo=new WeakMap,Cr=Symbol(""),hi=Symbol(""),An=Symbol("");function at(e,t,r){if(yt&&Re){let n=lo.get(e);n||lo.set(e,n=new Map);let o=n.get(r);o||(n.set(r,o=new Qi),o.map=n,o.key=r),o.track()}}function zt(e,t,r,n,o,i){const a=lo.get(e);if(!a){wn++;return}const s=l=>{l&&l.trigger()};if(qi(),t==="clear")a.forEach(s);else{const l=ge(e),c=l&&Po(r);if(l&&r==="length"){const u=Number(n);a.forEach((d,m)=>{(m==="length"||m===An||!_t(m)&&m>=u)&&s(d)})}else switch((r!==void 0||a.has(void 0))&&s(a.get(r)),c&&s(a.get(An)),t){case"add":l?c&&s(a.get("length")):(s(a.get(Cr)),Lr(e)&&s(a.get(hi)));break;case"delete":l||(s(a.get(Cr)),Lr(e)&&s(a.get(hi)));break;case"set":Lr(e)&&s(a.get(Cr));break}}Yi()}function yd(e,t){const r=lo.get(e);return r&&r.get(t)}function Ir(e){const t=ye(e);return t===e?t:(at(t,"iterate",An),vt(e)?t:t.map(Pt))}function To(e){return at(e=ye(e),"iterate",An),e}function er(e,t){return Vt(e)?$r(xr(e)?Pt(t):t):Pt(t)}const _d={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,e=>er(this,e))},concat(...e){return Ir(this).concat(...e.map(t=>ge(t)?Ir(t):t))},entries(){return Go(this,"entries",e=>(e[1]=er(this,e[1]),e))},every(e,t){return Ft(this,"every",e,t,void 0,arguments)},filter(e,t){return Ft(this,"filter",e,t,r=>r.map(n=>er(this,n)),arguments)},find(e,t){return Ft(this,"find",e,t,r=>er(this,r),arguments)},findIndex(e,t){return Ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ft(this,"findLast",e,t,r=>er(this,r),arguments)},findLastIndex(e,t){return Ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return qo(this,"includes",e)},indexOf(...e){return qo(this,"indexOf",e)},join(e){return Ir(this).join(e)},lastIndexOf(...e){return qo(this,"lastIndexOf",e)},map(e,t){return Ft(this,"map",e,t,void 0,arguments)},pop(){return on(this,"pop")},push(...e){return on(this,"push",e)},reduce(e,...t){return Aa(this,"reduce",e,t)},reduceRight(e,...t){return Aa(this,"reduceRight",e,t)},shift(){return on(this,"shift")},some(e,t){return Ft(this,"some",e,t,void 0,arguments)},splice(...e){return on(this,"splice",e)},toReversed(){return Ir(this).toReversed()},toSorted(e){return Ir(this).toSorted(e)},toSpliced(...e){return Ir(this).toSpliced(...e)},unshift(...e){return on(this,"unshift",e)},values(){return Go(this,"values",e=>er(this,e))}};function Go(e,t,r){const n=To(e),o=n[t]();return n!==e&&!vt(e)&&(o._next=o.next,o.next=()=>{const i=o._next();return i.done||(i.value=r(i.value)),i}),o}const Pd=Array.prototype;function Ft(e,t,r,n,o,i){const a=To(e),s=a!==e&&!vt(e),l=a[t];if(l!==Pd[t]){const d=l.apply(e,i);return s?Pt(d):d}let c=r;a!==e&&(s?c=function(d,m){return r.call(this,er(e,d),m,e)}:r.length>2&&(c=function(d,m){return r.call(this,d,m,e)}));const u=l.call(a,c,n);return s&&o?o(u):u}function Aa(e,t,r,n){const o=To(e);let i=r;return o!==e&&(vt(e)?r.length>3&&(i=function(a,s,l){return r.call(this,a,s,l,e)}):i=function(a,s,l){return r.call(this,a,er(e,s),l,e)}),o[t](i,...n)}function qo(e,t,r){const n=ye(e);at(n,"iterate",An);const o=n[t](...r);return(o===-1||o===!1)&&Io(r[0])?(r[0]=ye(r[0]),n[t](...r)):o}function on(e,t,r=[]){Ut(),qi();const n=ye(e)[t].apply(e,r);return Yi(),Wt(),n}const wd=ji("__proto__,__v_isRef,__isVue"),vl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function Ad(e){_t(e)||(e=String(e));const t=ye(this);return at(t,"has",e),t.hasOwnProperty(e)}class bl{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(r==="__v_isReactive")return!o;if(r==="__v_isReadonly")return o;if(r==="__v_isShallow")return i;if(r==="__v_raw")return n===(o?i?Fd:yl:i?Sl:xl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const a=ge(t);if(!o){let l;if(a&&(l=_d[r]))return l;if(r==="hasOwnProperty")return Ad}const s=Reflect.get(t,r,Ge(t)?t:n);if((_t(r)?vl.has(r):wd(r))||(o||at(t,"get",r),i))return s;if(Ge(s)){const l=a&&Po(r)?s:s.value;return o&&_e(l)?zr(l):l}return _e(s)?o?zr(s):Ln(s):s}}class Cl extends bl{constructor(t=!1){super(!1,t)}set(t,r,n,o){let i=t[r];const a=ge(t)&&Po(r);if(!this._isShallow){const c=Vt(i);if(!vt(n)&&!Vt(n)&&(i=ye(i),n=ye(n)),!a&&Ge(i)&&!Ge(n))return c||(i.value=n),!0}const s=a?Number(r)<t.length:we(t,r),l=Reflect.set(t,r,n,Ge(t)?t:o);return t===ye(o)&&(s?ir(n,i)&&zt(t,"set",r,n):zt(t,"add",r,n)),l}deleteProperty(t,r){const n=we(t,r);t[r];const o=Reflect.deleteProperty(t,r);return o&&n&&zt(t,"delete",r,void 0),o}has(t,r){const n=Reflect.has(t,r);return(!_t(r)||!vl.has(r))&&at(t,"has",r),n}ownKeys(t){return at(t,"iterate",ge(t)?"length":Cr),Reflect.ownKeys(t)}}class Ed extends bl{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const Td=new Cl,Id=new Ed,Rd=new Cl(!0);const mi=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function Od(e,t,r){return function(...n){const o=this.__v_raw,i=ye(o),a=Lr(i),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=o[e](...n),u=r?mi:t?$r:Pt;return!t&&at(i,"iterate",l?hi:Cr),$e(Object.create(c),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:s?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function Kn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Dd(e,t){const r={get(o){const i=this.__v_raw,a=ye(i),s=ye(o);e||(ir(o,s)&&at(a,"get",o),at(a,"get",s));const{has:l}=Yn(a),c=t?mi:e?$r:Pt;if(l.call(a,o))return c(i.get(o));if(l.call(a,s))return c(i.get(s));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!e&&at(ye(o),"iterate",Cr),o.size},has(o){const i=this.__v_raw,a=ye(i),s=ye(o);return e||(ir(o,s)&&at(a,"has",o),at(a,"has",s)),o===s?i.has(o):i.has(o)||i.has(s)},forEach(o,i){const a=this,s=a.__v_raw,l=ye(s),c=t?mi:e?$r:Pt;return!e&&at(l,"iterate",Cr),s.forEach((u,d)=>o.call(i,c(u),c(d),a))}};return $e(r,e?{add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear")}:{add(o){!t&&!vt(o)&&!Vt(o)&&(o=ye(o));const i=ye(this);return Yn(i).has.call(i,o)||(i.add(o),zt(i,"add",o,o)),this},set(o,i){!t&&!vt(i)&&!Vt(i)&&(i=ye(i));const a=ye(this),{has:s,get:l}=Yn(a);let c=s.call(a,o);c||(o=ye(o),c=s.call(a,o));const u=l.call(a,o);return a.set(o,i),c?ir(i,u)&&zt(a,"set",o,i):zt(a,"add",o,i),this},delete(o){const i=ye(this),{has:a,get:s}=Yn(i);let l=a.call(i,o);l||(o=ye(o),l=a.call(i,o)),s&&s.call(i,o);const c=i.delete(o);return l&&zt(i,"delete",o,void 0),c},clear(){const o=ye(this),i=o.size!==0,a=o.clear();return i&&zt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{r[o]=Od(o,e,t)}),r}function Zi(e,t){const r=Dd(e,t);return(n,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(we(r,o)&&o in n?r:n,o,i)}const kd={get:Zi(!1,!1)},Md={get:Zi(!1,!0)},Ld={get:Zi(!0,!1)};const xl=new WeakMap,Sl=new WeakMap,yl=new WeakMap,Fd=new WeakMap;function Nd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bd(e){return e.__v_skip||!Object.isExtensible(e)?0:Nd(sd(e))}function Ln(e){return Vt(e)?e:Ji(e,!1,Td,kd,xl)}function _l(e){return Ji(e,!1,Rd,Md,Sl)}function zr(e){return Ji(e,!0,Id,Ld,yl)}function Ji(e,t,r,n,o){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=Bd(e);if(i===0)return e;const a=o.get(e);if(a)return a;const s=new Proxy(e,i===2?n:r);return o.set(e,s),s}function xr(e){return Vt(e)?xr(e.__v_raw):!!(e&&e.__v_isReactive)}function Vt(e){return!!(e&&e.__v_isReadonly)}function vt(e){return!!(e&&e.__v_isShallow)}function Io(e){return e?!!e.__v_raw:!1}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function gi(e){return!we(e,"__v_skip")&&Object.isExtensible(e)&&il(e,"__v_skip",!0),e}const Pt=e=>_e(e)?Ln(e):e,$r=e=>_e(e)?zr(e):e;function Ge(e){return e?e.__v_isRef===!0:!1}function De(e){return wl(e,!1)}function Pl(e){return wl(e,!0)}function wl(e,t){return Ge(e)?e:new Hd(e,t)}class Hd{constructor(t,r){this.dep=new Qi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ye(t),this._value=r?t:Pt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||vt(t)||Vt(t);t=n?t:ye(t),ir(t,r)&&(this._rawValue=t,this._value=n?t:Pt(t),this.dep.trigger())}}function Ze(e){return Ge(e)?e.value:e}const zd={get:(e,t,r)=>t==="__v_raw"?e:Ze(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const o=e[t];return Ge(o)&&!Ge(r)?(o.value=r,!0):Reflect.set(e,t,r,n)}};function Al(e){return xr(e)?e:new Proxy(e,zd)}class $d{constructor(t,r,n){this._object=t,this._key=r,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._raw=ye(t);let o=!0,i=t;if(!ge(t)||!Po(String(r)))do o=!Io(i)||vt(i);while(o&&(i=i.__v_raw));this._shallow=o}get value(){let t=this._object[this._key];return this._shallow&&(t=Ze(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Ge(this._raw[this._key])){const r=this._object[this._key];if(Ge(r)){r.value=t;return}}this._object[this._key]=t}get dep(){return yd(this._raw,this._key)}}class jd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Fn(e,t,r){return Ge(e)?e:ve(e)?new jd(e):_e(e)&&arguments.length>1?Ud(e,t,r):De(e)}function Ud(e,t,r){return new $d(e,t,r)}class Wd{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Qi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Re!==this)return dl(this,!0),!0}get value(){const t=this.dep.track();return hl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Vd(e,t,r=!1){let n,o;return ve(e)?n=e:(n=e.get,o=e.set),new Wd(n,o,r)}const Qn={},co=new WeakMap;let hr;function Gd(e,t=!1,r=hr){if(r){let n=co.get(r);n||co.set(r,n=[]),n.push(e)}}function qd(e,t,r=Ie){const{immediate:n,deep:o,once:i,scheduler:a,augmentJob:s,call:l}=r,c=w=>o?w:vt(w)||o===!1||o===0?$t(w,1):$t(w);let u,d,m,p,g=!1,h=!1;if(Ge(e)?(d=()=>e.value,g=vt(e)):xr(e)?(d=()=>c(e),g=!0):ge(e)?(h=!0,g=e.some(w=>xr(w)||vt(w)),d=()=>e.map(w=>{if(Ge(w))return w.value;if(xr(w))return c(w);if(ve(w))return l?l(w,2):w()})):ve(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){Ut();try{m()}finally{Wt()}}const w=hr;hr=u;try{return l?l(e,3,[p]):e(p)}finally{hr=w}}:d=kt,t&&o){const w=d,A=o===!0?1/0:o;d=()=>$t(w(),A)}const b=Cd(),v=()=>{u.stop(),b&&b.active&&Wi(b.effects,u)};if(i&&t){const w=t;t=(...A)=>{w(...A),v()}}let x=h?new Array(e.length).fill(Qn):Qn;const _=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const A=u.run();if(o||g||(h?A.some((k,N)=>ir(k,x[N])):ir(A,x))){m&&m();const k=hr;hr=u;try{const N=[A,x===Qn?void 0:h&&x[0]===Qn?[]:x,p];x=A,l?l(t,3,N):t(...N)}finally{hr=k}}}else u.run()};return s&&s(_),u=new cl(d),u.scheduler=a?()=>a(_,!1):_,p=w=>Gd(w,!1,u),m=u.onStop=()=>{const w=co.get(u);if(w){if(l)l(w,4);else for(const A of w)A();co.delete(u)}},t?n?_(!0):x=u.run():a?a(_.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function $t(e,t=1/0,r){if(t<=0||!_e(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,Ge(e))$t(e.value,t,r);else if(ge(e))for(let n=0;n<e.length;n++)$t(e[n],t,r);else if(tl(e)||Lr(e))e.forEach(n=>{$t(n,t,r)});else if(ol(e)){for(const n in e)$t(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&$t(e[n],t,r)}return e}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Nn(e,t,r,n){try{return n?e(...n):e()}catch(o){Bn(o,t,r)}}function wt(e,t,r,n){if(ve(e)){const o=Nn(e,t,r,n);return o&&rl(o)&&o.catch(i=>{Bn(i,t,r)}),o}if(ge(e)){const o=[];for(let i=0;i<e.length;i++)o.push(wt(e[i],t,r,n));return o}}function Bn(e,t,r,n=!0){const o=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ie;if(t){let s=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}s=s.parent}if(i){Ut(),Nn(i,null,10,[e,l,c]),Wt();return}}Yd(e,r,o,n,a)}function Yd(e,t,r,n=!0,o=!1){if(o)throw e;console.error(e)}const dt=[];let Rt=-1;const Fr=[];let tr=null,Rr=0;const El=Promise.resolve();let uo=null;function Xi(e){const t=uo||El;return e?t.then(this?e.bind(this):e):t}function Kd(e){let t=Rt+1,r=dt.length;for(;t<r;){const n=t+r>>>1,o=dt[n],i=En(o);i<e||i===e&&o.flags&2?t=n+1:r=n}return t}function ea(e){if(!(e.flags&1)){const t=En(e),r=dt[dt.length-1];!r||!(e.flags&2)&&t>=En(r)?dt.push(e):dt.splice(Kd(t),0,e),e.flags|=1,Tl()}}function Tl(){uo||(uo=El.then(Rl))}function Qd(e){ge(e)?Fr.push(...e):tr&&e.id===-1?tr.splice(Rr+1,0,e):e.flags&1||(Fr.push(e),e.flags|=1),Tl()}function Ea(e,t,r=Rt+1){for(;r<dt.length;r++){const n=dt[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;dt.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Il(e){if(Fr.length){const t=[...new Set(Fr)].sort((r,n)=>En(r)-En(n));if(Fr.length=0,tr){tr.push(...t);return}for(tr=t,Rr=0;Rr<tr.length;Rr++){const r=tr[Rr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}tr=null,Rr=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Rl(e){try{for(Rt=0;Rt<dt.length;Rt++){const t=dt[Rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Nn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Rt<dt.length;Rt++){const t=dt[Rt];t&&(t.flags&=-2)}Rt=-1,dt.length=0,Il(),uo=null,(dt.length||Fr.length)&&Rl()}}let rt=null,Ol=null;function fo(e){const t=rt;return rt=e,Ol=e&&e.type.__scopeId||null,t}function Nr(e,t=rt,r){if(!t||e._n)return e;const n=(...o)=>{n._d&&mo(-1);const i=fo(t);let a;try{a=e(...o)}finally{fo(i),n._d&&mo(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function Dl(e,t){if(rt===null)return e;const r=Mo(rt),n=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,s,l=Ie]=t[o];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&$t(a),n.push({dir:i,instance:r,value:a,oldValue:void 0,arg:s,modifiers:l}))}return e}function dr(e,t,r,n){const o=e.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let l=s.dir[n];l&&(Ut(),wt(l,r,8,[e.el,s,e,t]),Wt())}}function ar(e,t){if(tt){let r=tt.provides;const n=tt.parent&&tt.parent.provides;n===r&&(r=tt.provides=Object.create(n)),r[e]=t}}function qe(e,t,r=!1){const n=ua();if(n||Hr){let o=Hr?Hr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return r&&ve(t)?t.call(n&&n.proxy):t}}const Zd=Symbol.for("v-scx"),Jd=()=>qe(Zd);function ta(e,t){return ra(e,null,t)}function Sr(e,t,r){return ra(e,t,r)}function ra(e,t,r=Ie){const{immediate:n,deep:o,flush:i,once:a}=r,s=$e({},r),l=t&&n||!t&&i!=="post";let c;if(Wr){if(i==="sync"){const p=Jd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=kt,p.resume=kt,p.pause=kt,p}}const u=tt;s.call=(p,g,h)=>wt(p,u,g,h);let d=!1;i==="post"?s.scheduler=p=>{it(p,u&&u.suspense)}:i!=="sync"&&(d=!0,s.scheduler=(p,g)=>{g?p():ea(p)}),s.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const m=qd(e,t,s);return Wr&&(c?c.push(m):l&&m()),m}function Xd(e,t,r){const n=this.proxy,o=Le(e)?e.includes(".")?kl(n,e):()=>n[e]:e.bind(n,n);let i;ve(t)?i=t:(i=t.handler,r=t);const a=zn(this),s=ra(o,i.bind(n),r);return a(),s}function kl(e,t){const r=t.split(".");return()=>{let n=e;for(let o=0;o<r.length&&n;o++)n=n[r[o]];return n}}const Ml=Symbol("_vte"),Ll=e=>e.__isTeleport,vn=e=>e&&(e.disabled||e.disabled===""),Ta=e=>e&&(e.defer||e.defer===""),Ia=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ra=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,vi=(e,t)=>{const r=e&&e.to;return Le(r)?t?t(r):null:r},Fl={name:"Teleport",__isTeleport:!0,process(e,t,r,n,o,i,a,s,l,c){const{mc:u,pc:d,pbc:m,o:{insert:p,querySelector:g,createText:h,createComment:b}}=c,v=vn(t.props);let{shapeFlag:x,children:_,dynamicChildren:w}=t;if(e==null){const A=t.el=h(""),k=t.anchor=h("");p(A,r,n),p(k,r,n);const N=(D,U)=>{x&16&&u(_,D,U,o,i,a,s,l)},$=()=>{const D=t.target=vi(t.props,g),U=bi(D,t,h,p);D&&(a!=="svg"&&Ia(D)?a="svg":a!=="mathml"&&Ra(D)&&(a="mathml"),o&&o.isCE&&(o.ce._teleportTargets||(o.ce._teleportTargets=new Set)).add(D),v||(N(D,U),no(t,!1)))};v&&(N(r,k),no(t,!0)),Ta(t.props)?(t.el.__isMounted=!1,it(()=>{$(),delete t.el.__isMounted},i)):$()}else{if(Ta(t.props)&&e.el.__isMounted===!1){it(()=>{Fl.process(e,t,r,n,o,i,a,s,l,c)},i);return}t.el=e.el,t.targetStart=e.targetStart;const A=t.anchor=e.anchor,k=t.target=e.target,N=t.targetAnchor=e.targetAnchor,$=vn(e.props),D=$?r:k,U=$?A:N;if(a==="svg"||Ia(k)?a="svg":(a==="mathml"||Ra(k))&&(a="mathml"),w?(m(e.dynamicChildren,w,D,o,i,a,s),la(e,t,!0)):l||d(e,t,D,U,o,i,a,s,!1),v)$?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Zn(t,r,A,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const J=t.target=vi(t.props,g);J&&Zn(t,J,null,c,0)}else $&&Zn(t,k,N,c,1);no(t,v)}},remove(e,t,r,{um:n,o:{remove:o}},i){const{shapeFlag:a,children:s,anchor:l,targetStart:c,targetAnchor:u,target:d,props:m}=e;if(d&&(o(c),o(u)),i&&o(l),a&16){const p=i||!vn(m);for(let g=0;g<s.length;g++){const h=s[g];n(h,t,r,p,!!h.dynamicChildren)}}},move:Zn,hydrate:ef};function Zn(e,t,r,{o:{insert:n},m:o},i=2){i===0&&n(e.targetAnchor,t,r);const{el:a,anchor:s,shapeFlag:l,children:c,props:u}=e,d=i===2;if(d&&n(a,t,r),(!d||vn(u))&&l&16)for(let m=0;m<c.length;m++)o(c[m],t,r,2);d&&n(s,t,r)}function ef(e,t,r,n,o,i,{o:{nextSibling:a,parentNode:s,querySelector:l,insert:c,createText:u}},d){function m(b,v){let x=v;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")t.targetStart=x;else if(x.data==="teleport anchor"){t.targetAnchor=x,b._lpa=t.targetAnchor&&a(t.targetAnchor);break}}x=a(x)}}function p(b,v){v.anchor=d(a(b),v,s(b),r,n,o,i)}const g=t.target=vi(t.props,l),h=vn(t.props);if(g){const b=g._lpa||g.firstChild;t.shapeFlag&16&&(h?(p(e,t),m(g,b),t.targetAnchor||bi(g,t,u,c,s(e)===g?e:null)):(t.anchor=a(e),m(g,b),t.targetAnchor||bi(g,t,u,c),d(b&&a(b),t,g,r,n,o,i))),no(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const tf=Fl;function no(e,t){const r=e.ctx;if(r&&r.ut){let n,o;for(t?(n=e.el,o=e.anchor):(n=e.targetStart,o=e.targetAnchor);n&&n!==o;)n.nodeType===1&&n.setAttribute("data-v-owner",r.uid),n=n.nextSibling;r.ut()}}function bi(e,t,r,n,o=null){const i=t.targetStart=r(""),a=t.targetAnchor=r("");return i[Ml]=a,e&&(n(i,e,o),n(a,e,o)),a}const Ot=Symbol("_leaveCb"),an=Symbol("_enterCb");function Nl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kr(()=>{e.isMounted=!0}),ia(()=>{e.isUnmounting=!0}),e}const Ct=[Function,Array],Bl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},Hl=e=>{const t=e.subTree;return t.component?Hl(t.component):t},rf={name:"BaseTransition",props:Bl,setup(e,{slots:t}){const r=ua(),n=Nl();return()=>{const o=t.default&&na(t.default(),!0);if(!o||!o.length)return;const i=zl(o),a=ye(e),{mode:s}=a;if(n.isLeaving)return Yo(i);const l=Oa(i);if(!l)return Yo(i);let c=Tn(l,a,n,r,d=>c=d);l.type!==et&&_r(l,c);let u=r.subTree&&Oa(r.subTree);if(u&&u.type!==et&&!mr(u,l)&&Hl(r).type!==et){let d=Tn(u,a,n,r);if(_r(u,d),s==="out-in"&&l.type!==et)return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete d.afterLeave,u=void 0},Yo(i);s==="in-out"&&l.type!==et?d.delayLeave=(m,p,g)=>{const h=$l(n,u);h[String(u.key)]=u,m[Ot]=()=>{p(),m[Ot]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function zl(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==et){t=r;break}}return t}const nf=rf;function $l(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Tn(e,t,r,n,o){const{appear:i,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:b,onAppear:v,onAfterAppear:x,onAppearCancelled:_}=t,w=String(e.key),A=$l(r,e),k=(D,U)=>{D&&wt(D,n,9,U)},N=(D,U)=>{const J=U[1];k(D,U),ge(D)?D.every(P=>P.length<=1)&&J():D.length<=1&&J()},$={mode:a,persisted:s,beforeEnter(D){let U=l;if(!r.isMounted)if(i)U=b||l;else return;D[Ot]&&D[Ot](!0);const J=A[w];J&&mr(e,J)&&J.el[Ot]&&J.el[Ot](),k(U,[D])},enter(D){let U=c,J=u,P=d;if(!r.isMounted)if(i)U=v||c,J=x||u,P=_||d;else return;let B=!1;D[an]=W=>{B||(B=!0,W?k(P,[D]):k(J,[D]),$.delayedLeave&&$.delayedLeave(),D[an]=void 0)};const C=D[an].bind(null,!1);U?N(U,[D,C]):C()},leave(D,U){const J=String(e.key);if(D[an]&&D[an](!0),r.isUnmounting)return U();k(m,[D]);let P=!1;D[Ot]=C=>{P||(P=!0,U(),C?k(h,[D]):k(g,[D]),D[Ot]=void 0,A[J]===e&&delete A[J])};const B=D[Ot].bind(null,!1);A[J]=e,p?N(p,[D,B]):B()},clone(D){const U=Tn(D,t,r,n,o);return o&&o(U),U}};return $}function Yo(e){if(Hn(e))return e=sr(e),e.children=null,e}function Oa(e){if(!Hn(e))return Ll(e.type)&&e.children?zl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&ve(r.default))return r.default()}}function _r(e,t){e.shapeFlag&6&&e.component?(e.transition=t,_r(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function na(e,t=!1,r){let n=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const s=r==null?a.key:String(r)+String(a.key!=null?a.key:i);a.type===Ve?(a.patchFlag&128&&o++,n=n.concat(na(a.children,t,s))):(t||a.type!==et)&&n.push(s!=null?sr(a,{key:s}):a)}if(o>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Ye(e,t){return ve(e)?$e({name:e.name},t,{setup:e}):e}function oa(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Da(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const po=new WeakMap;function bn(e,t,r,n,o=!1){if(ge(e)){e.forEach((h,b)=>bn(h,t&&(ge(t)?t[b]:t),r,n,o));return}if(Br(n)&&!o){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&bn(e,t,r,n.component.subTree);return}const i=n.shapeFlag&4?Mo(n.component):n.el,a=o?null:i,{i:s,r:l}=e,c=t&&t.r,u=s.refs===Ie?s.refs={}:s.refs,d=s.setupState,m=ye(d),p=d===Ie?el:h=>Da(u,h)?!1:we(m,h),g=(h,b)=>!(b&&Da(u,b));if(c!=null&&c!==l){if(ka(t),Le(c))u[c]=null,p(c)&&(d[c]=null);else if(Ge(c)){const h=t;g(c,h.k)&&(c.value=null),h.k&&(u[h.k]=null)}}if(ve(l))Nn(l,s,12,[a,u]);else{const h=Le(l),b=Ge(l);if(h||b){const v=()=>{if(e.f){const x=h?p(l)?d[l]:u[l]:g()||!e.k?l.value:u[e.k];if(o)ge(x)&&Wi(x,i);else if(ge(x))x.includes(i)||x.push(i);else if(h)u[l]=[i],p(l)&&(d[l]=u[l]);else{const _=[i];g(l,e.k)&&(l.value=_),e.k&&(u[e.k]=_)}}else h?(u[l]=a,p(l)&&(d[l]=a)):b&&(g(l,e.k)&&(l.value=a),e.k&&(u[e.k]=a))};if(a){const x=()=>{v(),po.delete(e)};x.id=-1,po.set(e,x),it(x,r)}else ka(e),v()}}}function ka(e){const t=po.get(e);t&&(t.flags|=8,po.delete(e))}const Ma=e=>e.nodeType===8;Eo().requestIdleCallback;Eo().cancelIdleCallback;function of(e,t){if(Ma(e)&&e.data==="["){let r=1,n=e.nextSibling;for(;n;){if(n.nodeType===1){if(t(n)===!1)break}else if(Ma(n))if(n.data==="]"){if(--r===0)break}else n.data==="["&&r++;n=n.nextSibling}}else t(e)}const Br=e=>!!e.type.__asyncLoader;function je(e){ve(e)&&(e={loader:e});const{loader:t,loadingComponent:r,errorComponent:n,delay:o=200,hydrate:i,timeout:a,suspensible:s=!0,onError:l}=e;let c=null,u,d=0;const m=()=>(d++,c=null,p()),p=()=>{let g;return c||(g=c=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),l)return new Promise((b,v)=>{l(h,()=>b(m()),()=>v(h),d+1)});throw h}).then(h=>g!==c&&c?c:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),u=h,h)))};return Ye({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,h,b){let v=!1;(h.bu||(h.bu=[])).push(()=>v=!0);const x=()=>{v||b()},_=i?()=>{const w=i(x,A=>of(g,A));w&&(h.bum||(h.bum=[])).push(w)}:x;u?_():p().then(()=>!h.isUnmounted&&_())},get __asyncResolved(){return u},setup(){const g=tt;if(oa(g),u)return()=>Jn(u,g);const h=_=>{c=null,Bn(_,g,13,!n)};if(s&&g.suspense||Wr)return p().then(_=>()=>Jn(_,g)).catch(_=>(h(_),()=>n?Me(n,{error:_}):null));const b=De(!1),v=De(),x=De(!!o);return o&&setTimeout(()=>{x.value=!1},o),a!=null&&setTimeout(()=>{if(!b.value&&!v.value){const _=new Error(`Async component timed out after ${a}ms.`);h(_),v.value=_}},a),p().then(()=>{b.value=!0,g.parent&&Hn(g.parent.vnode)&&g.parent.update()}).catch(_=>{h(_),v.value=_}),()=>{if(b.value&&u)return Jn(u,g);if(v.value&&n)return Me(n,{error:v.value});if(r&&!x.value)return Jn(r,g)}}})}function Jn(e,t){const{ref:r,props:n,children:o,ce:i}=t.vnode,a=Me(e,n,o);return a.ref=r,a.ce=i,delete t.vnode.ce,a}const Hn=e=>e.type.__isKeepAlive;function af(e,t){jl(e,"a",t)}function sf(e,t){jl(e,"da",t)}function jl(e,t,r=tt){const n=e.__wdc||(e.__wdc=()=>{let o=r;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Ro(t,n,r),r){let o=r.parent;for(;o&&o.parent;)Hn(o.parent.vnode)&&lf(n,t,r,o),o=o.parent}}function lf(e,t,r,n){const o=Ro(t,e,n,!0);Wl(()=>{Wi(n[t],o)},r)}function Ro(e,t,r=tt,n=!1){if(r){const o=r[e]||(r[e]=[]),i=t.__weh||(t.__weh=(...a)=>{Ut();const s=zn(r),l=wt(t,r,e,a);return s(),Wt(),l});return n?o.unshift(i):o.push(i),i}}const qt=e=>(t,r=tt)=>{(!Wr||e==="sp")&&Ro(e,(...n)=>t(...n),r)},Oo=qt("bm"),Kr=qt("m"),cf=qt("bu"),Ul=qt("u"),ia=qt("bum"),Wl=qt("um"),uf=qt("sp"),df=qt("rtg"),ff=qt("rtc");function pf(e,t=tt){Ro("ec",e,t)}const Vl="components";function hf(e,t){return ql(Vl,e,!0,t)||e}const Gl=Symbol.for("v-ndc");function mf(e){return Le(e)?ql(Vl,e,!1)||e:e||Gl}function ql(e,t,r=!0,n=!1){const o=rt||tt;if(o){const i=o.type;{const s=ep(i,!1);if(s&&(s===t||s===St(t)||s===Ao(St(t))))return i}const a=La(o[e]||i[e],t)||La(o.appContext[e],t);return!a&&n?i:a}}function La(e,t){return e&&(e[t]||e[St(t)]||e[Ao(St(t))])}function Ko(e,t,r,n){let o;const i=r,a=ge(e);if(a||Le(e)){const s=a&&xr(e);let l=!1,c=!1;s&&(l=!vt(e),c=Vt(e),e=To(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=t(l?c?$r(Pt(e[u])):Pt(e[u]):e[u],u,void 0,i)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=t(s+1,s,void 0,i)}else if(_e(e))if(e[Symbol.iterator])o=Array.from(e,(s,l)=>t(s,l,void 0,i));else{const s=Object.keys(e);o=new Array(s.length);for(let l=0,c=s.length;l<c;l++){const u=s[l];o[l]=t(e[u],u,l,i)}}else o=[];return o}function NS(e,t,r={},n,o){if(rt.ce||rt.parent&&Br(rt.parent)&&rt.parent.ce){const c=Object.keys(r).length>0;return Ke(),jr(Ve,null,[Me("slot",r,n)],c?-2:64)}let i=e[t];i&&i._c&&(i._d=!1),Ke();const a=i&&Yl(i(r)),s=r.key||a&&a.key,l=jr(Ve,{key:(s&&!_t(s)?s:`_${t}`)+(!a&&n?"_fb":"")},a||[],a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Yl(e){return e.some(t=>Ur(t)?!(t.type===et||t.type===Ve&&!Yl(t.children)):!0)?e:null}const Ci=e=>e?pc(e)?Mo(e):Ci(e.parent):null,Cn=$e(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ci(e.parent),$root:e=>Ci(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ql(e),$forceUpdate:e=>e.f||(e.f=()=>{ea(e.update)}),$nextTick:e=>e.n||(e.n=Xi.bind(e.proxy)),$watch:e=>Xd.bind(e)}),Qo=(e,t)=>e!==Ie&&!e.__isScriptSetup&&we(e,t),gf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:o,props:i,accessCache:a,type:s,appContext:l}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return n[t];case 2:return o[t];case 4:return r[t];case 3:return i[t]}else{if(Qo(n,t))return a[t]=1,n[t];if(o!==Ie&&we(o,t))return a[t]=2,o[t];if(we(i,t))return a[t]=3,i[t];if(r!==Ie&&we(r,t))return a[t]=4,r[t];xi&&(a[t]=0)}}const c=Cn[t];let u,d;if(c)return t==="$attrs"&&at(e.attrs,"get",""),c(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(r!==Ie&&we(r,t))return a[t]=4,r[t];if(d=l.config.globalProperties,we(d,t))return d[t]},set({_:e},t,r){const{data:n,setupState:o,ctx:i}=e;return Qo(o,t)?(o[t]=r,!0):n!==Ie&&we(n,t)?(n[t]=r,!0):we(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:o,props:i,type:a}},s){let l;return!!(r[s]||e!==Ie&&s[0]!=="$"&&we(e,s)||Qo(t,s)||we(i,s)||we(n,s)||we(Cn,s)||we(o.config.globalProperties,s)||(l=a.__cssModules)&&l[s])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:we(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function Fa(e){return ge(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let xi=!0;function vf(e){const t=Ql(e),r=e.proxy,n=e.ctx;xi=!1,t.beforeCreate&&Na(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:s,provide:l,inject:c,created:u,beforeMount:d,mounted:m,beforeUpdate:p,updated:g,activated:h,deactivated:b,beforeDestroy:v,beforeUnmount:x,destroyed:_,unmounted:w,render:A,renderTracked:k,renderTriggered:N,errorCaptured:$,serverPrefetch:D,expose:U,inheritAttrs:J,components:P,directives:B,filters:C}=t;if(c&&bf(c,n,null),a)for(const q in a){const ne=a[q];ve(ne)&&(n[q]=ne.bind(r))}if(o){const q=o.call(r,r);_e(q)&&(e.data=Ln(q))}if(xi=!0,i)for(const q in i){const ne=i[q],Q=ve(ne)?ne.bind(r,r):ve(ne.get)?ne.get.bind(r,r):kt,de=!ve(ne)&&ve(ne.set)?ne.set.bind(r):kt,j=Ce({get:Q,set:de});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>j.value,set:H=>j.value=H})}if(s)for(const q in s)Kl(s[q],n,r,q);if(l){const q=ve(l)?l.call(r):l;Reflect.ownKeys(q).forEach(ne=>{ar(ne,q[ne])})}u&&Na(u,e,"c");function ae(q,ne){ge(ne)?ne.forEach(Q=>q(Q.bind(r))):ne&&q(ne.bind(r))}if(ae(Oo,d),ae(Kr,m),ae(cf,p),ae(Ul,g),ae(af,h),ae(sf,b),ae(pf,$),ae(ff,k),ae(df,N),ae(ia,x),ae(Wl,w),ae(uf,D),ge(U))if(U.length){const q=e.exposed||(e.exposed={});U.forEach(ne=>{Object.defineProperty(q,ne,{get:()=>r[ne],set:Q=>r[ne]=Q,enumerable:!0})})}else e.exposed||(e.exposed={});A&&e.render===kt&&(e.render=A),J!=null&&(e.inheritAttrs=J),P&&(e.components=P),B&&(e.directives=B),D&&oa(e)}function bf(e,t,r=kt){ge(e)&&(e=Si(e));for(const n in e){const o=e[n];let i;_e(o)?"default"in o?i=qe(o.from||n,o.default,!0):i=qe(o.from||n):i=qe(o),Ge(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[n]=i}}function Na(e,t,r){wt(ge(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Kl(e,t,r,n){let o=n.includes(".")?kl(r,n):()=>r[n];if(Le(e)){const i=t[e];ve(i)&&Sr(o,i)}else if(ve(e))Sr(o,e.bind(r));else if(_e(e))if(ge(e))e.forEach(i=>Kl(i,t,r,n));else{const i=ve(e.handler)?e.handler.bind(r):t[e.handler];ve(i)&&Sr(o,i,e)}}function Ql(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,s=i.get(t);let l;return s?l=s:!o.length&&!r&&!n?l=t:(l={},o.length&&o.forEach(c=>ho(l,c,a,!0)),ho(l,t,a)),_e(t)&&i.set(t,l),l}function ho(e,t,r,n=!1){const{mixins:o,extends:i}=t;i&&ho(e,i,r,!0),o&&o.forEach(a=>ho(e,a,r,!0));for(const a in t)if(!(n&&a==="expose")){const s=Cf[a]||r&&r[a];e[a]=s?s(e[a],t[a]):t[a]}return e}const Cf={data:Ba,props:Ha,emits:Ha,methods:dn,computed:dn,beforeCreate:ct,created:ct,beforeMount:ct,mounted:ct,beforeUpdate:ct,updated:ct,beforeDestroy:ct,beforeUnmount:ct,destroyed:ct,unmounted:ct,activated:ct,deactivated:ct,errorCaptured:ct,serverPrefetch:ct,components:dn,directives:dn,watch:Sf,provide:Ba,inject:xf};function Ba(e,t){return t?e?function(){return $e(ve(e)?e.call(this,this):e,ve(t)?t.call(this,this):t)}:t:e}function xf(e,t){return dn(Si(e),Si(t))}function Si(e){if(ge(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function ct(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?$e(Object.create(null),e,t):t}function Ha(e,t){return e?ge(e)&&ge(t)?[...new Set([...e,...t])]:$e(Object.create(null),Fa(e),Fa(t??{})):t}function Sf(e,t){if(!e)return t;if(!t)return e;const r=$e(Object.create(null),e);for(const n in t)r[n]=ct(e[n],t[n]);return r}function Zl(){return{app:null,config:{isNativeTag:el,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yf=0;function _f(e,t){return function(n,o=null){ve(n)||(n=$e({},n)),o!=null&&!_e(o)&&(o=null);const i=Zl(),a=new WeakSet,s=[];let l=!1;const c=i.app={_uid:yf++,_component:n,_props:o,_container:null,_context:i,_instance:null,version:rp,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&ve(u.install)?(a.add(u),u.install(c,...d)):ve(u)&&(a.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,m){if(!l){const p=c._ceVNode||Me(n,o);return p.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(p,u,m),l=!0,c._container=u,u.__vue_app__=c,Mo(p.component)}},onUnmount(u){s.push(u)},unmount(){l&&(wt(s,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c},runWithContext(u){const d=Hr;Hr=c;try{return u()}finally{Hr=d}}};return c}}let Hr=null;const Pf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${St(t)}Modifiers`]||e[`${wr(t)}Modifiers`];function wf(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||Ie;let o=r;const i=t.startsWith("update:"),a=i&&Pf(n,t.slice(7));a&&(a.trim&&(o=r.map(u=>Le(u)?u.trim():u)),a.number&&(o=r.map(Vi)));let s,l=n[s=Uo(t)]||n[s=Uo(St(t))];!l&&i&&(l=n[s=Uo(wr(t))]),l&&wt(l,e,6,o);const c=n[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,wt(c,e,6,o)}}const Af=new WeakMap;function Jl(e,t,r=!1){const n=r?Af:t.emitsCache,o=n.get(e);if(o!==void 0)return o;const i=e.emits;let a={},s=!1;if(!ve(e)){const l=c=>{const u=Jl(c,t,!0);u&&(s=!0,$e(a,u))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(_e(e)&&n.set(e,null),null):(ge(i)?i.forEach(l=>a[l]=null):$e(a,i),_e(e)&&n.set(e,a),a)}function Do(e,t){return!e||!_o(t)?!1:(t=t.slice(2).replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,wr(t))||we(e,t))}function za(e){const{type:t,vnode:r,proxy:n,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:l,render:c,renderCache:u,props:d,data:m,setupState:p,ctx:g,inheritAttrs:h}=e,b=fo(e);let v,x;try{if(r.shapeFlag&4){const w=o||n,A=w;v=Dt(c.call(A,w,u,d,p,m,g)),x=s}else{const w=t;v=Dt(w.length>1?w(d,{attrs:s,slots:a,emit:l}):w(d,null)),x=t.props?s:Ef(s)}}catch(w){xn.length=0,Bn(w,e,1),v=Me(et)}let _=v;if(x&&h!==!1){const w=Object.keys(x),{shapeFlag:A}=_;w.length&&A&7&&(i&&w.some(Ui)&&(x=Tf(x,i)),_=sr(_,x,!1,!0))}return r.dirs&&(_=sr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(r.dirs):r.dirs),r.transition&&_r(_,r.transition),v=_,fo(b),v}const Ef=e=>{let t;for(const r in e)(r==="class"||r==="style"||_o(r))&&((t||(t={}))[r]=e[r]);return t},Tf=(e,t)=>{const r={};for(const n in e)(!Ui(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function If(e,t,r){const{props:n,children:o,component:i}=e,{props:a,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return n?$a(n,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(Xl(a,n,m)&&!Do(c,m))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:n===a?!1:n?a?$a(n,a,c):!0:!!a;return!1}function $a(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const i=n[o];if(Xl(t,e,i)&&!Do(r,i))return!0}return!1}function Xl(e,t,r){const n=e[r],o=t[r];return r==="style"&&_e(n)&&_e(o)?!Gi(n,o):n!==o}function Rf({vnode:e,parent:t},r){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=r,t=t.parent;else break}}const ec={},tc=()=>Object.create(ec),rc=e=>Object.getPrototypeOf(e)===ec;function Of(e,t,r,n=!1){const o={},i=tc();e.propsDefaults=Object.create(null),nc(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);r?e.props=n?o:_l(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Df(e,t,r,n){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,s=ye(o),[l]=e.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Do(e.emitsOptions,m))continue;const p=t[m];if(l)if(we(i,m))p!==i[m]&&(i[m]=p,c=!0);else{const g=St(m);o[g]=yi(l,s,g,p,e,!1)}else p!==i[m]&&(i[m]=p,c=!0)}}}else{nc(e,t,o,i)&&(c=!0);let u;for(const d in s)(!t||!we(t,d)&&((u=wr(d))===d||!we(t,u)))&&(l?r&&(r[d]!==void 0||r[u]!==void 0)&&(o[d]=yi(l,s,d,void 0,e,!0)):delete o[d]);if(i!==s)for(const d in i)(!t||!we(t,d))&&(delete i[d],c=!0)}c&&zt(e.attrs,"set","")}function nc(e,t,r,n){const[o,i]=e.propsOptions;let a=!1,s;if(t)for(let l in t){if(hn(l))continue;const c=t[l];let u;o&&we(o,u=St(l))?!i||!i.includes(u)?r[u]=c:(s||(s={}))[u]=c:Do(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(i){const l=ye(r),c=s||Ie;for(let u=0;u<i.length;u++){const d=i[u];r[d]=yi(o,l,d,c[d],e,!we(c,d))}}return a}function yi(e,t,r,n,o,i){const a=e[r];if(a!=null){const s=we(a,"default");if(s&&n===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ve(l)){const{propsDefaults:c}=o;if(r in c)n=c[r];else{const u=zn(o);n=c[r]=l.call(null,t),u()}}else n=l;o.ce&&o.ce._setProp(r,n)}a[0]&&(i&&!s?n=!1:a[1]&&(n===""||n===wr(r))&&(n=!0))}return n}const kf=new WeakMap;function oc(e,t,r=!1){const n=r?kf:t.propsCache,o=n.get(e);if(o)return o;const i=e.props,a={},s=[];let l=!1;if(!ve(e)){const u=d=>{l=!0;const[m,p]=oc(d,t,!0);$e(a,m),p&&s.push(...p)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return _e(e)&&n.set(e,Mr),Mr;if(ge(i))for(let u=0;u<i.length;u++){const d=St(i[u]);ja(d)&&(a[d]=Ie)}else if(i)for(const u in i){const d=St(u);if(ja(d)){const m=i[u],p=a[d]=ge(m)||ve(m)?{type:m}:$e({},m),g=p.type;let h=!1,b=!0;if(ge(g))for(let v=0;v<g.length;++v){const x=g[v],_=ve(x)&&x.name;if(_==="Boolean"){h=!0;break}else _==="String"&&(b=!1)}else h=ve(g)&&g.name==="Boolean";p[0]=h,p[1]=b,(h||we(p,"default"))&&s.push(d)}}const c=[a,s];return _e(e)&&n.set(e,c),c}function ja(e){return e[0]!=="$"&&!hn(e)}const aa=e=>e==="_"||e==="_ctx"||e==="$stable",sa=e=>ge(e)?e.map(Dt):[Dt(e)],Mf=(e,t,r)=>{if(t._n)return t;const n=Nr((...o)=>sa(t(...o)),r);return n._c=!1,n},ic=(e,t,r)=>{const n=e._ctx;for(const o in e){if(aa(o))continue;const i=e[o];if(ve(i))t[o]=Mf(o,i,n);else if(i!=null){const a=sa(i);t[o]=()=>a}}},ac=(e,t)=>{const r=sa(t);e.slots.default=()=>r},sc=(e,t,r)=>{for(const n in t)(r||!aa(n))&&(e[n]=t[n])},Lf=(e,t,r)=>{const n=e.slots=tc();if(e.vnode.shapeFlag&32){const o=t._;o?(sc(n,t,r),r&&il(n,"_",o,!0)):ic(t,n)}else t&&ac(e,t)},Ff=(e,t,r)=>{const{vnode:n,slots:o}=e;let i=!0,a=Ie;if(n.shapeFlag&32){const s=t._;s?r&&s===1?i=!1:sc(o,t,r):(i=!t.$stable,ic(t,o)),a=t}else t&&(ac(e,t),a={default:1});if(i)for(const s in o)!aa(s)&&a[s]==null&&delete o[s]},it=$f;function Nf(e){return Bf(e)}function Bf(e,t){const r=Eo();r.__VUE__=!0;const{insert:n,remove:o,patchProp:i,createElement:a,createText:s,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:m,setScopeId:p=kt,insertStaticContent:g}=e,h=(E,R,f,O=null,I=null,S=null,y=void 0,T=null,F=!!R.dynamicChildren)=>{if(E===R)return;E&&!mr(E,R)&&(O=G(E),H(E,I,S,!0),E=null),R.patchFlag===-2&&(F=!1,R.dynamicChildren=null);const{type:L,ref:M,shapeFlag:z}=R;switch(L){case ko:b(E,R,f,O);break;case et:v(E,R,f,O);break;case oo:E==null&&x(R,f,O,y);break;case Ve:P(E,R,f,O,I,S,y,T,F);break;default:z&1?A(E,R,f,O,I,S,y,T,F):z&6?B(E,R,f,O,I,S,y,T,F):(z&64||z&128)&&L.process(E,R,f,O,I,S,y,T,F,ie)}M!=null&&I?bn(M,E&&E.ref,S,R||E,!R):M==null&&E&&E.ref!=null&&bn(E.ref,null,S,E,!0)},b=(E,R,f,O)=>{if(E==null)n(R.el=s(R.children),f,O);else{const I=R.el=E.el;R.children!==E.children&&c(I,R.children)}},v=(E,R,f,O)=>{E==null?n(R.el=l(R.children||""),f,O):R.el=E.el},x=(E,R,f,O)=>{[E.el,E.anchor]=g(E.children,R,f,O,E.el,E.anchor)},_=({el:E,anchor:R},f,O)=>{let I;for(;E&&E!==R;)I=m(E),n(E,f,O),E=I;n(R,f,O)},w=({el:E,anchor:R})=>{let f;for(;E&&E!==R;)f=m(E),o(E),E=f;o(R)},A=(E,R,f,O,I,S,y,T,F)=>{if(R.type==="svg"?y="svg":R.type==="math"&&(y="mathml"),E==null)k(R,f,O,I,S,y,T,F);else{const L=E.el&&E.el._isVueCE?E.el:null;try{L&&L._beginPatch(),D(E,R,I,S,y,T,F)}finally{L&&L._endPatch()}}},k=(E,R,f,O,I,S,y,T)=>{let F,L;const{props:M,shapeFlag:z,transition:Y,dirs:V}=E;if(F=E.el=a(E.type,S,M&&M.is,M),z&8?u(F,E.children):z&16&&$(E.children,F,null,O,I,Zo(E,S),y,T),V&&dr(E,null,O,"created"),N(F,E,E.scopeId,y,O),M){for(const he in M)he!=="value"&&!hn(he)&&i(F,he,null,M[he],S,O);"value"in M&&i(F,"value",null,M.value,S),(L=M.onVnodeBeforeMount)&&Et(L,O,E)}V&&dr(E,null,O,"beforeMount");const ee=Hf(I,Y);ee&&Y.beforeEnter(F),n(F,R,f),((L=M&&M.onVnodeMounted)||ee||V)&&it(()=>{L&&Et(L,O,E),ee&&Y.enter(F),V&&dr(E,null,O,"mounted")},I)},N=(E,R,f,O,I)=>{if(f&&p(E,f),O)for(let S=0;S<O.length;S++)p(E,O[S]);if(I){let S=I.subTree;if(R===S||uc(S.type)&&(S.ssContent===R||S.ssFallback===R)){const y=I.vnode;N(E,y,y.scopeId,y.slotScopeIds,I.parent)}}},$=(E,R,f,O,I,S,y,T,F=0)=>{for(let L=F;L<E.length;L++){const M=E[L]=T?Ht(E[L]):Dt(E[L]);h(null,M,R,f,O,I,S,y,T)}},D=(E,R,f,O,I,S,y)=>{const T=R.el=E.el;let{patchFlag:F,dynamicChildren:L,dirs:M}=R;F|=E.patchFlag&16;const z=E.props||Ie,Y=R.props||Ie;let V;if(f&&fr(f,!1),(V=Y.onVnodeBeforeUpdate)&&Et(V,f,R,E),M&&dr(R,E,f,"beforeUpdate"),f&&fr(f,!0),(z.innerHTML&&Y.innerHTML==null||z.textContent&&Y.textContent==null)&&u(T,""),L?U(E.dynamicChildren,L,T,f,O,Zo(R,I),S):y||ne(E,R,T,null,f,O,Zo(R,I),S,!1),F>0){if(F&16)J(T,z,Y,f,I);else if(F&2&&z.class!==Y.class&&i(T,"class",null,Y.class,I),F&4&&i(T,"style",z.style,Y.style,I),F&8){const ee=R.dynamicProps;for(let he=0;he<ee.length;he++){const ce=ee[he],Ee=z[ce],He=Y[ce];(He!==Ee||ce==="value")&&i(T,ce,Ee,He,I,f)}}F&1&&E.children!==R.children&&u(T,R.children)}else!y&&L==null&&J(T,z,Y,f,I);((V=Y.onVnodeUpdated)||M)&&it(()=>{V&&Et(V,f,R,E),M&&dr(R,E,f,"updated")},O)},U=(E,R,f,O,I,S,y)=>{for(let T=0;T<R.length;T++){const F=E[T],L=R[T],M=F.el&&(F.type===Ve||!mr(F,L)||F.shapeFlag&198)?d(F.el):f;h(F,L,M,null,O,I,S,y,!0)}},J=(E,R,f,O,I)=>{if(R!==f){if(R!==Ie)for(const S in R)!hn(S)&&!(S in f)&&i(E,S,R[S],null,I,O);for(const S in f){if(hn(S))continue;const y=f[S],T=R[S];y!==T&&S!=="value"&&i(E,S,T,y,I,O)}"value"in f&&i(E,"value",R.value,f.value,I)}},P=(E,R,f,O,I,S,y,T,F)=>{const L=R.el=E?E.el:s(""),M=R.anchor=E?E.anchor:s("");let{patchFlag:z,dynamicChildren:Y,slotScopeIds:V}=R;V&&(T=T?T.concat(V):V),E==null?(n(L,f,O),n(M,f,O),$(R.children||[],f,M,I,S,y,T,F)):z>0&&z&64&&Y&&E.dynamicChildren&&E.dynamicChildren.length===Y.length?(U(E.dynamicChildren,Y,f,I,S,y,T),(R.key!=null||I&&R===I.subTree)&&la(E,R,!0)):ne(E,R,f,M,I,S,y,T,F)},B=(E,R,f,O,I,S,y,T,F)=>{R.slotScopeIds=T,E==null?R.shapeFlag&512?I.ctx.activate(R,f,O,y,F):C(R,f,O,I,S,y,F):W(E,R,F)},C=(E,R,f,O,I,S,y)=>{const T=E.component=Kf(E,O,I);if(Hn(E)&&(T.ctx.renderer=ie),Qf(T,!1,y),T.asyncDep){if(I&&I.registerDep(T,ae,y),!E.el){const F=T.subTree=Me(et);v(null,F,R,f),E.placeholder=F.el}}else ae(T,E,R,f,I,S,y)},W=(E,R,f)=>{const O=R.component=E.component;if(If(E,R,f))if(O.asyncDep&&!O.asyncResolved){q(O,R,f);return}else O.next=R,O.update();else R.el=E.el,O.vnode=R},ae=(E,R,f,O,I,S,y)=>{const T=()=>{if(E.isMounted){let{next:z,bu:Y,u:V,parent:ee,vnode:he}=E;{const nt=lc(E);if(nt){z&&(z.el=he.el,q(E,z,y)),nt.asyncDep.then(()=>{it(()=>{E.isUnmounted||L()},I)});return}}let ce=z,Ee;fr(E,!1),z?(z.el=he.el,q(E,z,y)):z=he,Y&&ro(Y),(Ee=z.props&&z.props.onVnodeBeforeUpdate)&&Et(Ee,ee,z,he),fr(E,!0);const He=za(E),Ne=E.subTree;E.subTree=He,h(Ne,He,d(Ne.el),G(Ne),E,I,S),z.el=He.el,ce===null&&Rf(E,He.el),V&&it(V,I),(Ee=z.props&&z.props.onVnodeUpdated)&&it(()=>Et(Ee,ee,z,he),I)}else{let z;const{el:Y,props:V}=R,{bm:ee,m:he,parent:ce,root:Ee,type:He}=E,Ne=Br(R);fr(E,!1),ee&&ro(ee),!Ne&&(z=V&&V.onVnodeBeforeMount)&&Et(z,ce,R),fr(E,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(He);const nt=E.subTree=za(E);h(null,nt,f,O,E,I,S),R.el=nt.el}if(he&&it(he,I),!Ne&&(z=V&&V.onVnodeMounted)){const nt=R;it(()=>Et(z,ce,nt),I)}(R.shapeFlag&256||ce&&Br(ce.vnode)&&ce.vnode.shapeFlag&256)&&E.a&&it(E.a,I),E.isMounted=!0,R=f=O=null}};E.scope.on();const F=E.effect=new cl(T);E.scope.off();const L=E.update=F.run.bind(F),M=E.job=F.runIfDirty.bind(F);M.i=E,M.id=E.uid,F.scheduler=()=>ea(M),fr(E,!0),L()},q=(E,R,f)=>{R.component=E;const O=E.vnode.props;E.vnode=R,E.next=null,Df(E,R.props,O,f),Ff(E,R.children,f),Ut(),Ea(E),Wt()},ne=(E,R,f,O,I,S,y,T,F=!1)=>{const L=E&&E.children,M=E?E.shapeFlag:0,z=R.children,{patchFlag:Y,shapeFlag:V}=R;if(Y>0){if(Y&128){de(L,z,f,O,I,S,y,T,F);return}else if(Y&256){Q(L,z,f,O,I,S,y,T,F);return}}V&8?(M&16&&xe(L,I,S),z!==L&&u(f,z)):M&16?V&16?de(L,z,f,O,I,S,y,T,F):xe(L,I,S,!0):(M&8&&u(f,""),V&16&&$(z,f,O,I,S,y,T,F))},Q=(E,R,f,O,I,S,y,T,F)=>{E=E||Mr,R=R||Mr;const L=E.length,M=R.length,z=Math.min(L,M);let Y;for(Y=0;Y<z;Y++){const V=R[Y]=F?Ht(R[Y]):Dt(R[Y]);h(E[Y],V,f,null,I,S,y,T,F)}L>M?xe(E,I,S,!0,!1,z):$(R,f,O,I,S,y,T,F,z)},de=(E,R,f,O,I,S,y,T,F)=>{let L=0;const M=R.length;let z=E.length-1,Y=M-1;for(;L<=z&&L<=Y;){const V=E[L],ee=R[L]=F?Ht(R[L]):Dt(R[L]);if(mr(V,ee))h(V,ee,f,null,I,S,y,T,F);else break;L++}for(;L<=z&&L<=Y;){const V=E[z],ee=R[Y]=F?Ht(R[Y]):Dt(R[Y]);if(mr(V,ee))h(V,ee,f,null,I,S,y,T,F);else break;z--,Y--}if(L>z){if(L<=Y){const V=Y+1,ee=V<M?R[V].el:O;for(;L<=Y;)h(null,R[L]=F?Ht(R[L]):Dt(R[L]),f,ee,I,S,y,T,F),L++}}else if(L>Y)for(;L<=z;)H(E[L],I,S,!0),L++;else{const V=L,ee=L,he=new Map;for(L=ee;L<=Y;L++){const Je=R[L]=F?Ht(R[L]):Dt(R[L]);Je.key!=null&&he.set(Je.key,L)}let ce,Ee=0;const He=Y-ee+1;let Ne=!1,nt=0;const Te=new Array(He);for(L=0;L<He;L++)Te[L]=0;for(L=V;L<=z;L++){const Je=E[L];if(Ee>=He){H(Je,I,S,!0);continue}let ze;if(Je.key!=null)ze=he.get(Je.key);else for(ce=ee;ce<=Y;ce++)if(Te[ce-ee]===0&&mr(Je,R[ce])){ze=ce;break}ze===void 0?H(Je,I,S,!0):(Te[ze-ee]=L+1,ze>=nt?nt=ze:Ne=!0,h(Je,R[ze],f,null,I,S,y,T,F),Ee++)}const ur=Ne?zf(Te):Mr;for(ce=ur.length-1,L=He-1;L>=0;L--){const Je=ee+L,ze=R[Je],rn=R[Je+1],Gn=Je+1<M?rn.el||cc(rn):O;Te[L]===0?h(null,ze,f,Gn,I,S,y,T,F):Ne&&(ce<0||L!==ur[ce]?j(ze,f,Gn,2):ce--)}}},j=(E,R,f,O,I=null)=>{const{el:S,type:y,transition:T,children:F,shapeFlag:L}=E;if(L&6){j(E.component.subTree,R,f,O);return}if(L&128){E.suspense.move(R,f,O);return}if(L&64){y.move(E,R,f,ie);return}if(y===Ve){n(S,R,f);for(let z=0;z<F.length;z++)j(F[z],R,f,O);n(E.anchor,R,f);return}if(y===oo){_(E,R,f);return}if(O!==2&&L&1&&T)if(O===0)T.beforeEnter(S),n(S,R,f),it(()=>T.enter(S),I);else{const{leave:z,delayLeave:Y,afterLeave:V}=T,ee=()=>{E.ctx.isUnmounted?o(S):n(S,R,f)},he=()=>{S._isLeaving&&S[Ot](!0),z(S,()=>{ee(),V&&V()})};Y?Y(S,ee,he):he()}else n(S,R,f)},H=(E,R,f,O=!1,I=!1)=>{const{type:S,props:y,ref:T,children:F,dynamicChildren:L,shapeFlag:M,patchFlag:z,dirs:Y,cacheIndex:V}=E;if(z===-2&&(I=!1),T!=null&&(Ut(),bn(T,null,f,E,!0),Wt()),V!=null&&(R.renderCache[V]=void 0),M&256){R.ctx.deactivate(E);return}const ee=M&1&&Y,he=!Br(E);let ce;if(he&&(ce=y&&y.onVnodeBeforeUnmount)&&Et(ce,R,E),M&6)te(E.component,f,O);else{if(M&128){E.suspense.unmount(f,O);return}ee&&dr(E,null,R,"beforeUnmount"),M&64?E.type.remove(E,R,f,ie,O):L&&!L.hasOnce&&(S!==Ve||z>0&&z&64)?xe(L,R,f,!1,!0):(S===Ve&&z&384||!I&&M&16)&&xe(F,R,f),O&&fe(E)}(he&&(ce=y&&y.onVnodeUnmounted)||ee)&&it(()=>{ce&&Et(ce,R,E),ee&&dr(E,null,R,"unmounted")},f)},fe=E=>{const{type:R,el:f,anchor:O,transition:I}=E;if(R===Ve){oe(f,O);return}if(R===oo){w(E);return}const S=()=>{o(f),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(E.shapeFlag&1&&I&&!I.persisted){const{leave:y,delayLeave:T}=I,F=()=>y(f,S);T?T(E.el,S,F):F()}else S()},oe=(E,R)=>{let f;for(;E!==R;)f=m(E),o(E),E=f;o(R)},te=(E,R,f)=>{const{bum:O,scope:I,job:S,subTree:y,um:T,m:F,a:L}=E;Ua(F),Ua(L),O&&ro(O),I.stop(),S&&(S.flags|=8,H(y,E,R,f)),T&&it(T,R),it(()=>{E.isUnmounted=!0},R)},xe=(E,R,f,O=!1,I=!1,S=0)=>{for(let y=S;y<E.length;y++)H(E[y],R,f,O,I)},G=E=>{if(E.shapeFlag&6)return G(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const R=m(E.anchor||E.el),f=R&&R[Ml];return f?m(f):R};let Z=!1;const K=(E,R,f)=>{let O;E==null?R._vnode&&(H(R._vnode,null,null,!0),O=R._vnode.component):h(R._vnode||null,E,R,null,null,null,f),R._vnode=E,Z||(Z=!0,Ea(O),Il(),Z=!1)},ie={p:h,um:H,m:j,r:fe,mt:C,mc:$,pc:ne,pbc:U,n:G,o:e};return{render:K,hydrate:void 0,createApp:_f(K)}}function Zo({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function fr({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function la(e,t,r=!1){const n=e.children,o=t.children;if(ge(n)&&ge(o))for(let i=0;i<n.length;i++){const a=n[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Ht(o[i]),s.el=a.el),!r&&s.patchFlag!==-2&&la(a,s)),s.type===ko&&(s.patchFlag===-1&&(s=o[i]=Ht(s)),s.el=a.el),s.type===et&&!s.el&&(s.el=a.el)}}function zf(e){const t=e.slice(),r=[0];let n,o,i,a,s;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(o=r[r.length-1],e[o]<c){t[n]=o,r.push(n);continue}for(i=0,a=r.length-1;i<a;)s=i+a>>1,e[r[s]]<c?i=s+1:a=s;c<e[r[i]]&&(i>0&&(t[n]=r[i-1]),r[i]=n)}}for(i=r.length,a=r[i-1];i-- >0;)r[i]=a,a=t[a];return r}function lc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:lc(t)}function Ua(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function cc(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?cc(t.subTree):null}const uc=e=>e.__isSuspense;function $f(e,t){t&&t.pendingBranch?ge(e)?t.effects.push(...e):t.effects.push(e):Qd(e)}const Ve=Symbol.for("v-fgt"),ko=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),xn=[];let mt=null;function Ke(e=!1){xn.push(mt=e?null:[])}function jf(){xn.pop(),mt=xn[xn.length-1]||null}let In=1;function mo(e,t=!1){In+=e,e<0&&mt&&t&&(mt.hasOnce=!0)}function dc(e){return e.dynamicChildren=In>0?mt||Mr:null,jf(),In>0&&mt&&mt.push(e),e}function xt(e,t,r,n,o,i){return dc(be(e,t,r,n,o,i,!0))}function jr(e,t,r,n,o){return dc(Me(e,t,r,n,o,!0))}function Ur(e){return e?e.__v_isVNode===!0:!1}function mr(e,t){return e.type===t.type&&e.key===t.key}const fc=({key:e})=>e??null,io=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Le(e)||Ge(e)||ve(e)?{i:rt,r:e,k:t,f:!!r}:e:null);function be(e,t=null,r=null,n=0,o=null,i=e===Ve?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&fc(t),ref:t&&io(t),scopeId:Ol,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:rt};return s?(ca(l,r),i&128&&e.normalize(l)):r&&(l.shapeFlag|=Le(r)?8:16),In>0&&!a&&mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&mt.push(l),l}const Me=Uf;function Uf(e,t=null,r=null,n=0,o=null,i=!1){if((!e||e===Gl)&&(e=et),Ur(e)){const s=sr(e,t,!0);return r&&ca(s,r),In>0&&!i&&mt&&(s.shapeFlag&6?mt[mt.indexOf(e)]=s:mt.push(s)),s.patchFlag=-2,s}if(tp(e)&&(e=e.__vccOpts),t){t=Wf(t);let{class:s,style:l}=t;s&&!Le(s)&&(t.class=Pn(s)),_e(l)&&(Io(l)&&!ge(l)&&(l=$e({},l)),t.style=_n(l))}const a=Le(e)?1:uc(e)?128:Ll(e)?64:_e(e)?4:ve(e)?2:0;return be(e,t,r,n,o,a,i,!0)}function Wf(e){return e?Io(e)||rc(e)?$e({},e):e:null}function sr(e,t,r=!1,n=!1){const{props:o,ref:i,patchFlag:a,children:s,transition:l}=e,c=t?Gf(o||{},t):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&fc(c),ref:t&&t.ref?r&&i?ge(i)?i.concat(io(t)):[i,io(t)]:io(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sr(e.ssContent),ssFallback:e.ssFallback&&sr(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&_r(u,l.clone(u)),u}function go(e=" ",t=0){return Me(ko,null,e,t)}function Vf(e,t){const r=Me(oo,null,e);return r.staticCount=t,r}function _i(e="",t=!1){return t?(Ke(),jr(et,null,e)):Me(et,null,e)}function Dt(e){return e==null||typeof e=="boolean"?Me(et):ge(e)?Me(Ve,null,e.slice()):Ur(e)?Ht(e):Me(ko,null,String(e))}function Ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sr(e)}function ca(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(ge(t))r=16;else if(typeof t=="object")if(n&65){const o=t.default;o&&(o._c&&(o._d=!1),ca(e,o()),o._c&&(o._d=!0));return}else{r=32;const o=t._;!o&&!rc(t)?t._ctx=rt:o===3&&rt&&(rt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ve(t)?(t={default:t,_ctx:rt},r=32):(t=String(t),n&64?(r=16,t=[go(t)]):r=8);e.children=t,e.shapeFlag|=r}function Gf(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const o in n)if(o==="class")t.class!==n.class&&(t.class=Pn([t.class,n.class]));else if(o==="style")t.style=_n([t.style,n.style]);else if(_o(o)){const i=t[o],a=n[o];a&&i!==a&&!(ge(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=n[o])}return t}function Et(e,t,r,n=null){wt(e,t,7,[r,n])}const qf=Zl();let Yf=0;function Kf(e,t,r){const n=e.type,o=(t?t.appContext:e.appContext)||qf,i={uid:Yf++,vnode:e,type:n,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oc(n,o),emitsOptions:Jl(n,o),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:n.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=wf.bind(null,i),e.ce&&e.ce(i),i}let tt=null;const ua=()=>tt||rt;let vo,Pi;{const e=Eo(),t=(r,n)=>{let o;return(o=e[r])||(o=e[r]=[]),o.push(n),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};vo=t("__VUE_INSTANCE_SETTERS__",r=>tt=r),Pi=t("__VUE_SSR_SETTERS__",r=>Wr=r)}const zn=e=>{const t=tt;return vo(e),e.scope.on(),()=>{e.scope.off(),vo(t)}},Wa=()=>{tt&&tt.scope.off(),vo(null)};function pc(e){return e.vnode.shapeFlag&4}let Wr=!1;function Qf(e,t=!1,r=!1){t&&Pi(t);const{props:n,children:o}=e.vnode,i=pc(e);Of(e,n,i,t),Lf(e,o,r||t);const a=i?Zf(e,t):void 0;return t&&Pi(!1),a}function Zf(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gf);const{setup:n}=r;if(n){Ut();const o=e.setupContext=n.length>1?Xf(e):null,i=zn(e),a=Nn(n,e,0,[e.props,o]),s=rl(a);if(Wt(),i(),(s||e.sp)&&!Br(e)&&oa(e),s){if(a.then(Wa,Wa),t)return a.then(l=>{Va(e,l)}).catch(l=>{Bn(l,e,0)});e.asyncDep=a}else Va(e,a)}else hc(e)}function Va(e,t,r){ve(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=Al(t)),hc(e)}function hc(e,t,r){const n=e.type;e.render||(e.render=n.render||kt);{const o=zn(e);Ut();try{vf(e)}finally{Wt(),o()}}}const Jf={get(e,t){return at(e,"get",""),e[t]}};function Xf(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Jf),slots:e.slots,emit:e.emit,expose:t}}function Mo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Al(gi(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Cn)return Cn[r](e)},has(t,r){return r in t||r in Cn}})):e.proxy}function ep(e,t=!0){return ve(e)?e.displayName||e.name:e.name||t&&e.__name}function tp(e){return ve(e)&&"__vccOpts"in e}const Ce=(e,t)=>Vd(e,t,Wr);function re(e,t,r){try{mo(-1);const n=arguments.length;return n===2?_e(t)&&!ge(t)?Ur(t)?Me(e,null,[t]):Me(e,t):Me(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Ur(r)&&(r=[r]),Me(e,t,r))}finally{mo(1)}}const rp="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wi;const Ga=typeof window<"u"&&window.trustedTypes;if(Ga)try{wi=Ga.createPolicy("vue",{createHTML:e=>e})}catch{}const mc=wi?e=>wi.createHTML(e):e=>e,np="http://www.w3.org/2000/svg",op="http://www.w3.org/1998/Math/MathML",Bt=typeof document<"u"?document:null,qa=Bt&&Bt.createElement("template"),ip={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const o=t==="svg"?Bt.createElementNS(np,e):t==="mathml"?Bt.createElementNS(op,e):r?Bt.createElement(e,{is:r}):Bt.createElement(e);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Bt.createTextNode(e),createComment:e=>Bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,o,i){const a=r?r.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),r),!(o===i||!(o=o.nextSibling)););else{qa.innerHTML=mc(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const s=qa.content;if(n==="svg"||n==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,r)}return[a?a.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Qt="transition",sn="animation",Vr=Symbol("_vtc"),gc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vc=$e({},Bl,gc),ap=e=>(e.displayName="Transition",e.props=vc,e),bc=ap((e,{slots:t})=>re(nf,Cc(e),t)),pr=(e,t=[])=>{ge(e)?e.forEach(r=>r(...t)):e&&e(...t)},Ya=e=>e?ge(e)?e.some(t=>t.length>1):e.length>1:!1;function Cc(e){const t={};for(const P in e)P in gc||(t[P]=e[P]);if(e.css===!1)return t;const{name:r="v",type:n,duration:o,enterFromClass:i=`${r}-enter-from`,enterActiveClass:a=`${r}-enter-active`,enterToClass:s=`${r}-enter-to`,appearFromClass:l=i,appearActiveClass:c=a,appearToClass:u=s,leaveFromClass:d=`${r}-leave-from`,leaveActiveClass:m=`${r}-leave-active`,leaveToClass:p=`${r}-leave-to`}=e,g=sp(o),h=g&&g[0],b=g&&g[1],{onBeforeEnter:v,onEnter:x,onEnterCancelled:_,onLeave:w,onLeaveCancelled:A,onBeforeAppear:k=v,onAppear:N=x,onAppearCancelled:$=_}=t,D=(P,B,C,W)=>{P._enterCancelled=W,Xt(P,B?u:s),Xt(P,B?c:a),C&&C()},U=(P,B)=>{P._isLeaving=!1,Xt(P,d),Xt(P,p),Xt(P,m),B&&B()},J=P=>(B,C)=>{const W=P?N:x,ae=()=>D(B,P,C);pr(W,[B,ae]),Ka(()=>{Xt(B,P?l:i),It(B,P?u:s),Ya(W)||Qa(B,n,h,ae)})};return $e(t,{onBeforeEnter(P){pr(v,[P]),It(P,i),It(P,a)},onBeforeAppear(P){pr(k,[P]),It(P,l),It(P,c)},onEnter:J(!1),onAppear:J(!0),onLeave(P,B){P._isLeaving=!0;const C=()=>U(P,B);It(P,d),P._enterCancelled?(It(P,m),Ai(P)):(Ai(P),It(P,m)),Ka(()=>{P._isLeaving&&(Xt(P,d),It(P,p),Ya(w)||Qa(P,n,b,C))}),pr(w,[P,C])},onEnterCancelled(P){D(P,!1,void 0,!0),pr(_,[P])},onAppearCancelled(P){D(P,!0,void 0,!0),pr($,[P])},onLeaveCancelled(P){U(P),pr(A,[P])}})}function sp(e){if(e==null)return null;if(_e(e))return[Jo(e.enter),Jo(e.leave)];{const t=Jo(e);return[t,t]}}function Jo(e){return ud(e)}function It(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[Vr]||(e[Vr]=new Set)).add(t)}function Xt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[Vr];r&&(r.delete(t),r.size||(e[Vr]=void 0))}function Ka(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let lp=0;function Qa(e,t,r,n){const o=e._endId=++lp,i=()=>{o===e._endId&&n()};if(r!=null)return setTimeout(i,r);const{type:a,timeout:s,propCount:l}=xc(e,t);if(!a)return n();const c=a+"end";let u=0;const d=()=>{e.removeEventListener(c,m),i()},m=p=>{p.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},s+1),e.addEventListener(c,m)}function xc(e,t){const r=window.getComputedStyle(e),n=g=>(r[g]||"").split(", "),o=n(`${Qt}Delay`),i=n(`${Qt}Duration`),a=Za(o,i),s=n(`${sn}Delay`),l=n(`${sn}Duration`),c=Za(s,l);let u=null,d=0,m=0;t===Qt?a>0&&(u=Qt,d=a,m=i.length):t===sn?c>0&&(u=sn,d=c,m=l.length):(d=Math.max(a,c),u=d>0?a>c?Qt:sn:null,m=u?u===Qt?i.length:l.length:0);const p=u===Qt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Qt}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:p}}function Za(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>Ja(r)+Ja(e[n])))}function Ja(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ai(e){return(e?e.ownerDocument:document).body.offsetHeight}function cp(e,t,r){const n=e[Vr];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const bo=Symbol("_vod"),Sc=Symbol("_vsh"),up={name:"show",beforeMount(e,{value:t},{transition:r}){e[bo]=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):ln(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:n}){!t!=!r&&(n?t?(n.beforeEnter(e),ln(e,!0),n.enter(e)):n.leave(e,()=>{ln(e,!1)}):ln(e,t))},beforeUnmount(e,{value:t}){ln(e,t)}};function ln(e,t){e.style.display=t?e[bo]:"none",e[Sc]=!t}const dp=Symbol(""),fp=/(?:^|;)\s*display\s*:/;function pp(e,t,r){const n=e.style,o=Le(r);let i=!1;if(r&&!o){if(t)if(Le(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();r[s]==null&&ao(n,s,"")}else for(const a in t)r[a]==null&&ao(n,a,"");for(const a in r)a==="display"&&(i=!0),ao(n,a,r[a])}else if(o){if(t!==r){const a=n[dp];a&&(r+=";"+a),n.cssText=r,i=fp.test(r)}}else t&&e.removeAttribute("style");bo in e&&(e[bo]=i?n.display:"",e[Sc]&&(n.display="none"))}const Xa=/\s*!important$/;function ao(e,t,r){if(ge(r))r.forEach(n=>ao(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=hp(e,t);Xa.test(r)?e.setProperty(wr(n),r.replace(Xa,""),"important"):e[n]=r}}const es=["Webkit","Moz","ms"],Xo={};function hp(e,t){const r=Xo[t];if(r)return r;let n=St(t);if(n!=="filter"&&n in e)return Xo[t]=n;n=Ao(n);for(let o=0;o<es.length;o++){const i=es[o]+n;if(i in e)return Xo[t]=i}return t}const ts="http://www.w3.org/1999/xlink";function rs(e,t,r,n,o,i=gd(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(ts,t.slice(6,t.length)):e.setAttributeNS(ts,t,r):r==null||i&&!al(r)?e.removeAttribute(t):e.setAttribute(t,i?"":_t(r)?String(r):r)}function ns(e,t,r,n,o){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?mc(r):r);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(s!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let a=!1;if(r===""||r==null){const s=typeof e[t];s==="boolean"?r=al(r):r==null&&s==="string"?(r="",a=!0):s==="number"&&(r=0,a=!0)}try{e[t]=r}catch{}a&&e.removeAttribute(o||t)}function Or(e,t,r,n){e.addEventListener(t,r,n)}function mp(e,t,r,n){e.removeEventListener(t,r,n)}const os=Symbol("_vei");function gp(e,t,r,n,o=null){const i=e[os]||(e[os]={}),a=i[t];if(n&&a)a.value=n;else{const[s,l]=vp(t);if(n){const c=i[t]=xp(n,o);Or(e,s,c,l)}else a&&(mp(e,s,a,l),i[t]=void 0)}}const is=/(?:Once|Passive|Capture)$/;function vp(e){let t;if(is.test(e)){t={};let n;for(;n=e.match(is);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):wr(e.slice(2)),t]}let ei=0;const bp=Promise.resolve(),Cp=()=>ei||(bp.then(()=>ei=0),ei=Date.now());function xp(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;wt(Sp(n,r.value),t,5,[n])};return r.value=e,r.attached=Cp(),r}function Sp(e,t){if(ge(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>o=>!o._stopped&&n&&n(o))}else return t}const as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yp=(e,t,r,n,o,i)=>{const a=o==="svg";t==="class"?cp(e,n,a):t==="style"?pp(e,r,n):_o(t)?Ui(t)||gp(e,t,r,n,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):_p(e,t,n,a))?(ns(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&rs(e,t,n,a,i,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Le(n))?ns(e,St(t),n,i,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),rs(e,t,n,a))};function _p(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&as(t)&&ve(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return as(t)&&Le(r)?!1:t in e}const yc=new WeakMap,_c=new WeakMap,Co=Symbol("_moveCb"),ss=Symbol("_enterCb"),Pp=e=>(delete e.props.mode,e),wp=Pp({name:"TransitionGroup",props:$e({},vc,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=ua(),n=Nl();let o,i;return Ul(()=>{if(!o.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Rp(o[0].el,r.vnode.el,a)){o=[];return}o.forEach(Ep),o.forEach(Tp);const s=o.filter(Ip);Ai(r.vnode.el),s.forEach(l=>{const c=l.el,u=c.style;It(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[Co]=m=>{m&&m.target!==c||(!m||m.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[Co]=null,Xt(c,a))};c.addEventListener("transitionend",d)}),o=[]}),()=>{const a=ye(e),s=Cc(a);let l=a.tag||Ve;if(o=[],i)for(let c=0;c<i.length;c++){const u=i[c];u.el&&u.el instanceof Element&&(o.push(u),_r(u,Tn(u,s,n,r)),yc.set(u,Pc(u.el)))}i=t.default?na(t.default()):[];for(let c=0;c<i.length;c++){const u=i[c];u.key!=null&&_r(u,Tn(u,s,n,r))}return Me(l,null,i)}}}),Ap=wp;function Ep(e){const t=e.el;t[Co]&&t[Co](),t[ss]&&t[ss]()}function Tp(e){_c.set(e,Pc(e.el))}function Ip(e){const t=yc.get(e),r=_c.get(e),n=t.left-r.left,o=t.top-r.top;if(n||o){const i=e.el,a=i.style,s=i.getBoundingClientRect();let l=1,c=1;return i.offsetWidth&&(l=s.width/i.offsetWidth),i.offsetHeight&&(c=s.height/i.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),a.transform=a.webkitTransform=`translate(${n/l}px,${o/c}px)`,a.transitionDuration="0s",e}}function Pc(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Rp(e,t,r){const n=e.cloneNode(),o=e[Vr];o&&o.forEach(s=>{s.split(/\s+/).forEach(l=>l&&n.classList.remove(l))}),r.split(/\s+/).forEach(s=>s&&n.classList.add(s)),n.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(n);const{hasTransform:a}=xc(n);return i.removeChild(n),a}const ls=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ge(t)?r=>ro(t,r):t};function Op(e){e.target.composing=!0}function cs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ti=Symbol("_assign");function us(e,t,r){return t&&(e=e.trim()),r&&(e=Vi(e)),e}const Dp={created(e,{modifiers:{lazy:t,trim:r,number:n}},o){e[ti]=ls(o);const i=n||o.props&&o.props.type==="number";Or(e,t?"change":"input",a=>{a.target.composing||e[ti](us(e.value,r,i))}),(r||i)&&Or(e,"change",()=>{e.value=us(e.value,r,i)}),t||(Or(e,"compositionstart",Op),Or(e,"compositionend",cs),Or(e,"change",cs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:o,number:i}},a){if(e[ti]=ls(a),e.composing)return;const s=(i||e.type==="number")&&!/^0\d/.test(e.value)?Vi(e.value):e.value,l=t??"";s!==l&&(document.activeElement===e&&e.type!=="range"&&(n&&t===r||o&&e.value.trim()===l)||(e.value=l))}},kp=["ctrl","shift","alt","meta"],Mp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>kp.some(r=>e[`${r}Key`]&&!t.includes(r))},Ei=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=((o,...i)=>{for(let a=0;a<t.length;a++){const s=Mp[t[a]];if(s&&s(o,t))return}return e(o,...i)}))},Lp=$e({patchProp:yp},ip);let ds;function Fp(){return ds||(ds=Nf(Lp))}const Np=((...e)=>{const t=Fp().createApp(...e),{mount:r}=t;return t.mount=n=>{const o=Hp(n);if(!o)return;const i=t._component;!ve(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=r(o,!1,Bp(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Bp(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Hp(e){return Le(e)?document.querySelector(e):e}function zp(e){let t=".",r="__",n="--",o;if(e){let g=e.blockPrefix;g&&(t=g),g=e.elementPrefix,g&&(r=g),g=e.modifierPrefix,g&&(n=g)}const i={install(g){o=g.c;const h=g.context;h.bem={},h.bem.b=null,h.bem.els=null}};function a(g){let h,b;return{before(v){h=v.bem.b,b=v.bem.els,v.bem.els=null},after(v){v.bem.b=h,v.bem.els=b},$({context:v,props:x}){return g=typeof g=="string"?g:g({context:v,props:x}),v.bem.b=g,`${(x==null?void 0:x.bPrefix)||t}${v.bem.b}`}}}function s(g){let h;return{before(b){h=b.bem.els},after(b){b.bem.els=h},$({context:b,props:v}){return g=typeof g=="string"?g:g({context:b,props:v}),b.bem.els=g.split(",").map(x=>x.trim()),b.bem.els.map(x=>`${(v==null?void 0:v.bPrefix)||t}${b.bem.b}${r}${x}`).join(", ")}}}function l(g){return{$({context:h,props:b}){g=typeof g=="string"?g:g({context:h,props:b});const v=g.split(",").map(w=>w.trim());function x(w){return v.map(A=>`&${(b==null?void 0:b.bPrefix)||t}${h.bem.b}${w!==void 0?`${r}${w}`:""}${n}${A}`).join(", ")}const _=h.bem.els;return _!==null?x(_[0]):x()}}}function c(g){return{$({context:h,props:b}){g=typeof g=="string"?g:g({context:h,props:b});const v=h.bem.els;return`&:not(${(b==null?void 0:b.bPrefix)||t}${h.bem.b}${v!==null&&v.length>0?`${r}${v[0]}`:""}${n}${g})`}}}return Object.assign(i,{cB:((...g)=>o(a(g[0]),g[1],g[2])),cE:((...g)=>o(s(g[0]),g[1],g[2])),cM:((...g)=>o(l(g[0]),g[1],g[2])),cNotM:((...g)=>o(c(g[0]),g[1],g[2]))}),i}function $p(e){let t=0;for(let r=0;r<e.length;++r)e[r]==="&"&&++t;return t}const wc=/\s*,(?![^(]*\))\s*/g,jp=/\s+/g;function Up(e,t){const r=[];return t.split(wc).forEach(n=>{let o=$p(n);if(o){if(o===1){e.forEach(a=>{r.push(n.replace("&",a))});return}}else{e.forEach(a=>{r.push((a&&a+" ")+n)});return}let i=[n];for(;o--;){const a=[];i.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),i=a}i.forEach(a=>r.push(a))}),r}function Wp(e,t){const r=[];return t.split(wc).forEach(n=>{e.forEach(o=>{r.push((o&&o+" ")+n)})}),r}function Vp(e){let t=[""];return e.forEach(r=>{r=r&&r.trim(),r&&(r.includes("&")?t=Up(t,r):t=Wp(t,r))}),t.join(", ").replace(jp," ")}function fs(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function Lo(e,t){return(t??document.head).querySelector(`style[cssr-id="${e}"]`)}function Gp(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Xn(e){return e?/^\s*@(s|m)/.test(e):!1}const qp=/[A-Z]/g;function Ac(e){return e.replace(qp,t=>"-"+t.toLowerCase())}function Yp(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(r=>t+`  ${Ac(r[0])}: ${r[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function Kp(e,t,r){return typeof e=="function"?e({context:t.context,props:r}):e}function ps(e,t,r,n){if(!t)return"";const o=Kp(t,r,n);if(!o)return"";if(typeof o=="string")return`${e} {
${o}
}`;const i=Object.keys(o);if(i.length===0)return r.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return i.forEach(s=>{const l=o[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=Ac(s),l!=null&&a.push(`  ${s}${Yp(l)}`)}),e&&a.push("}"),a.join(`
`)}function Ti(e,t,r){e&&e.forEach(n=>{if(Array.isArray(n))Ti(n,t,r);else if(typeof n=="function"){const o=n(t);Array.isArray(o)?Ti(o,t,r):o&&r(o)}else n&&r(n)})}function Ec(e,t,r,n,o){const i=e.$;let a="";if(!i||typeof i=="string")Xn(i)?a=i:t.push(i);else if(typeof i=="function"){const c=i({context:n.context,props:o});Xn(c)?a=c:t.push(c)}else if(i.before&&i.before(n.context),!i.$||typeof i.$=="string")Xn(i.$)?a=i.$:t.push(i.$);else if(i.$){const c=i.$({context:n.context,props:o});Xn(c)?a=c:t.push(c)}const s=Vp(t),l=ps(s,e.props,n,o);a?r.push(`${a} {`):l.length&&r.push(l),e.children&&Ti(e.children,{context:n.context,props:o},c=>{if(typeof c=="string"){const u=ps(s,{raw:c},n,o);r.push(u)}else Ec(c,t,r,n,o)}),t.pop(),a&&r.push("}"),i&&i.after&&i.after(n.context)}function Qp(e,t,r){const n=[];return Ec(e,[],n,t,r),n.join(`

`)}function Rn(e){for(var t=0,r,n=0,o=e.length;o>=4;++n,o-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function Zp(e,t,r,n){const{els:o}=t;if(r===void 0)o.forEach(fs),t.els=[];else{const i=Lo(r,n);i&&o.includes(i)&&(fs(i),t.els=o.filter(a=>a!==i))}}function hs(e,t){e.push(t)}function Jp(e,t,r,n,o,i,a,s,l){let c;if(r===void 0&&(c=t.render(n),r=Rn(c)),l){l.adapter(r,c??t.render(n));return}s===void 0&&(s=document.head);const u=Lo(r,s);if(u!==null&&!i)return u;const d=u??Gp(r);if(c===void 0&&(c=t.render(n)),d.textContent=c,u!==null)return u;if(a){const m=s.querySelector(`meta[name="${a}"]`);if(m)return s.insertBefore(d,m),hs(t.els,d),d}return o?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),hs(t.els,d),d}function Xp(e){return Qp(this,this.instance,e)}function eh(e={}){const{id:t,ssr:r,props:n,head:o=!1,force:i=!1,anchorMetaName:a,parent:s}=e;return Jp(this.instance,this,t,n,o,i,a,s,r)}function th(e={}){const{id:t,parent:r}=e;Zp(this.instance,this,t,r)}const eo=function(e,t,r,n){return{instance:e,$:t,props:r,children:n,els:[],render:Xp,mount:eh,unmount:th}},rh=function(e,t,r,n){return Array.isArray(t)?eo(e,{$:null},null,t):Array.isArray(r)?eo(e,t,null,r):Array.isArray(n)?eo(e,t,r,n):eo(e,t,r,null)};function nh(e={}){const t={c:((...r)=>rh(t,...r)),use:(r,...n)=>r.install(t,...n),find:Lo,context:{},config:e};return t}function oh(e,t){if(e===void 0)return!1;if(t){const{context:{ids:r}}=t;return r.has(e)}return Lo(e)!==null}const ih="n",ah=`.${ih}-`,sh="__",lh="--",Tc=nh(),Ic=zp({blockPrefix:ah,elementPrefix:sh,modifierPrefix:lh});Tc.use(Ic);const{c:Ae,find:BS}=Tc,{cB:Xe,cE:ke,cM:Qe,cNotM:Rc}=Ic,HS=(...e)=>Ae(">",[Xe(...e)]);function Zt(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,r=>r.toUpperCase()))}function ms(e,t){let{target:r}=e;for(;r;){if(r.dataset&&r.dataset[t]!==void 0)return!0;r=r.parentElement}return!1}const gs={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function ch(e,t,r){t/=100,r/=100;let n=(o,i=(o+e/60)%6)=>r-r*t*Math.max(Math.min(i,4-i,1),0);return[n(5)*255,n(3)*255,n(1)*255]}function uh(e,t,r){t/=100,r/=100;let n=t*Math.min(r,1-r),o=(i,a=(i+e/30)%12)=>r-n*Math.max(Math.min(a-3,9-a,1),-1);return[o(0)*255,o(8)*255,o(4)*255]}const Mt="^\\s*",Lt="\\s*$",lr="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",gt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",gr="([0-9A-Fa-f])",vr="([0-9A-Fa-f]{2})",Oc=new RegExp(`${Mt}hsl\\s*\\(${gt},${lr},${lr}\\)${Lt}`),Dc=new RegExp(`${Mt}hsv\\s*\\(${gt},${lr},${lr}\\)${Lt}`),kc=new RegExp(`${Mt}hsla\\s*\\(${gt},${lr},${lr},${gt}\\)${Lt}`),Mc=new RegExp(`${Mt}hsva\\s*\\(${gt},${lr},${lr},${gt}\\)${Lt}`),dh=new RegExp(`${Mt}rgb\\s*\\(${gt},${gt},${gt}\\)${Lt}`),fh=new RegExp(`${Mt}rgba\\s*\\(${gt},${gt},${gt},${gt}\\)${Lt}`),ph=new RegExp(`${Mt}#${gr}${gr}${gr}${Lt}`),hh=new RegExp(`${Mt}#${vr}${vr}${vr}${Lt}`),mh=new RegExp(`${Mt}#${gr}${gr}${gr}${gr}${Lt}`),gh=new RegExp(`${Mt}#${vr}${vr}${vr}${vr}${Lt}`);function ft(e){return parseInt(e,16)}function vh(e){try{let t;if(t=kc.exec(e))return[xo(t[1]),nr(t[5]),nr(t[9]),yr(t[13])];if(t=Oc.exec(e))return[xo(t[1]),nr(t[5]),nr(t[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(t){throw t}}function bh(e){try{let t;if(t=Mc.exec(e))return[xo(t[1]),nr(t[5]),nr(t[9]),yr(t[13])];if(t=Dc.exec(e))return[xo(t[1]),nr(t[5]),nr(t[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(t){throw t}}function Gt(e){try{let t;if(t=hh.exec(e))return[ft(t[1]),ft(t[2]),ft(t[3]),1];if(t=dh.exec(e))return[st(t[1]),st(t[5]),st(t[9]),1];if(t=fh.exec(e))return[st(t[1]),st(t[5]),st(t[9]),yr(t[13])];if(t=ph.exec(e))return[ft(t[1]+t[1]),ft(t[2]+t[2]),ft(t[3]+t[3]),1];if(t=gh.exec(e))return[ft(t[1]),ft(t[2]),ft(t[3]),yr(ft(t[4])/255)];if(t=mh.exec(e))return[ft(t[1]+t[1]),ft(t[2]+t[2]),ft(t[3]+t[3]),yr(ft(t[4]+t[4])/255)];if(e in gs)return Gt(gs[e]);if(Oc.test(e)||kc.test(e)){const[r,n,o,i]=vh(e);return[...uh(r,n,o),i]}else if(Dc.test(e)||Mc.test(e)){const[r,n,o,i]=bh(e);return[...ch(r,n,o),i]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function Ch(e){return e>1?1:e<0?0:e}function Ii(e,t,r,n){return`rgba(${st(e)}, ${st(t)}, ${st(r)}, ${Ch(n)})`}function ri(e,t,r,n,o){return st((e*t*(1-n)+r*n)/o)}function ue(e,t){Array.isArray(e)||(e=Gt(e)),Array.isArray(t)||(t=Gt(t));const r=e[3],n=t[3],o=yr(r+n-r*n);return Ii(ri(e[0],r,t[0],n,o),ri(e[1],r,t[1],n,o),ri(e[2],r,t[2],n,o),o)}function le(e,t){const[r,n,o,i=1]=Array.isArray(e)?e:Gt(e);return typeof t.alpha=="number"?Ii(r,n,o,t.alpha):Ii(r,n,o,i)}function Be(e,t){const[r,n,o,i=1]=Array.isArray(e)?e:Gt(e),{lightness:a=1,alpha:s=1}=t;return xh([r*a,n*a,o*a,i*s])}function yr(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function xo(e){const t=Math.round(Number(e));return t>=360||t<0?0:t}function st(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function nr(e){const t=Math.round(Number(e));return t>100?100:t<0?0:t}function xh(e){const[t,r,n]=e;return 3 in e?`rgba(${st(t)}, ${st(r)}, ${st(n)}, ${yr(e[3])})`:`rgba(${st(t)}, ${st(r)}, ${st(n)}, 1)`}function Lc(e=8){return Math.random().toString(16).slice(2,2+e)}function Sh(e){const t=De(!!e.value);if(t.value)return zr(t);const r=Sr(e,n=>{n&&(t.value=!0,r())});return zr(t)}function Ri(e){const t=Ce(e),r=De(t.value);return Sr(t,n=>{r.value=n}),typeof e=="function"?r:{__v_isRef:!0,get value(){return r.value},set value(n){e.set(n)}}}function yh(e,t){return Sr(e,r=>{r!==void 0&&(t.value=r)}),Ce(()=>e.value===void 0?t.value:e.value)}function _h(){const e=De(!1);return Kr(()=>{e.value=!0}),zr(e)}function zS(e){return e}const Ph="@css-render/vue3-ssr";function wh(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function Ah(e,t,r){const{styles:n,ids:o}=r;o.has(e)||n!==null&&(o.add(e),n.push(wh(e,t)))}const Eh=typeof document<"u";function Fo(){if(Eh)return;const e=qe(Ph,null);if(e!==null)return{adapter:(t,r)=>Ah(t,r,e),context:e}}function Th(e,t){console.error(`[naive/${e}]: ${t}`)}function Fc(e,t){throw new Error(`[naive/${e}]: ${t}`)}function fn(e,...t){if(Array.isArray(e))e.forEach(r=>fn(r,...t));else return e(...t)}function Ih(e,t=[],r){const n={};return Object.getOwnPropertyNames(e).forEach(i=>{t.includes(i)||(n[i]=e[i])}),Object.assign(n,r)}function Rh(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?go(e):typeof e=="number"?go(String(e)):null}function Qr(e){return e.some(t=>Ur(t)?!(t.type===et||t.type===Ve&&!Qr(t.children)):!0)?e:null}function $S(e,t){return e&&Qr(e())||t()}function vs(e,t,r){return e&&Qr(e(t))||r(t)}function jS(e,t){const r=e&&Qr(e());return t(r||null)}function Oh(e,t,r){const n=e&&Qr(e(t));return r(n||null)}function US(e){return!(e&&Qr(e()))}const cr="n-config-provider",Oi="n";function No(e={},t={defaultBordered:!0}){const r=qe(cr,null);return{inlineThemeDisabled:r==null?void 0:r.inlineThemeDisabled,mergedRtlRef:r==null?void 0:r.mergedRtlRef,mergedComponentPropsRef:r==null?void 0:r.mergedComponentPropsRef,mergedBreakpointsRef:r==null?void 0:r.mergedBreakpointsRef,mergedBorderedRef:Ce(()=>{var n,o;const{bordered:i}=e;return i!==void 0?i:(o=(n=r==null?void 0:r.mergedBorderedRef.value)!==null&&n!==void 0?n:t.defaultBordered)!==null&&o!==void 0?o:!0}),mergedClsPrefixRef:r?r.mergedClsPrefixRef:Pl(Oi),namespaceRef:Ce(()=>r==null?void 0:r.mergedNamespaceRef.value)}}function Nc(e,t,r,n){r||Fc("useThemeClass","cssVarsRef is not passed");const o=qe(cr,null),i=o==null?void 0:o.mergedThemeHashRef,a=o==null?void 0:o.styleMountTarget,s=De(""),l=Fo();let c;const u=`__${e}`,d=()=>{let m=u;const p=t?t.value:void 0,g=i==null?void 0:i.value;g&&(m+=`-${g}`),p&&(m+=`-${p}`);const{themeOverrides:h,builtinThemeOverrides:b}=n;h&&(m+=`-${Rn(JSON.stringify(h))}`),b&&(m+=`-${Rn(JSON.stringify(b))}`),s.value=m,c=()=>{const v=r.value;let x="";for(const _ in v)x+=`${_}: ${v[_]};`;Ae(`.${m}`,x).mount({id:m,ssr:l,parent:a}),c=void 0}};return ta(()=>{d()}),{themeClass:s,onRender:()=>{c==null||c()}}}var Bc=typeof global=="object"&&global&&global.Object===Object&&global,Dh=typeof self=="object"&&self&&self.Object===Object&&self,Zr=Bc||Dh||Function("return this")(),Gr=Zr.Symbol,Hc=Object.prototype,kh=Hc.hasOwnProperty,Mh=Hc.toString,cn=Gr?Gr.toStringTag:void 0;function Lh(e){var t=kh.call(e,cn),r=e[cn];try{e[cn]=void 0;var n=!0}catch{}var o=Mh.call(e);return n&&(t?e[cn]=r:delete e[cn]),o}var Fh=Object.prototype,Nh=Fh.toString;function Bh(e){return Nh.call(e)}var Hh="[object Null]",zh="[object Undefined]",bs=Gr?Gr.toStringTag:void 0;function $n(e){return e==null?e===void 0?zh:Hh:bs&&bs in Object(e)?Lh(e):Bh(e)}function Jr(e){return e!=null&&typeof e=="object"}var $h="[object Symbol]";function jh(e){return typeof e=="symbol"||Jr(e)&&$n(e)==$h}function Uh(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var So=Array.isArray,Cs=Gr?Gr.prototype:void 0,xs=Cs?Cs.toString:void 0;function zc(e){if(typeof e=="string")return e;if(So(e))return Uh(e,zc)+"";if(jh(e))return xs?xs.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function Ar(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function $c(e){return e}var Wh="[object AsyncFunction]",Vh="[object Function]",Gh="[object GeneratorFunction]",qh="[object Proxy]";function da(e){if(!Ar(e))return!1;var t=$n(e);return t==Vh||t==Gh||t==Wh||t==qh}var ni=Zr["__core-js_shared__"],Ss=(function(){var e=/[^.]+$/.exec(ni&&ni.keys&&ni.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function Yh(e){return!!Ss&&Ss in e}var Kh=Function.prototype,Qh=Kh.toString;function Zh(e){if(e!=null){try{return Qh.call(e)}catch{}try{return e+""}catch{}}return""}var Jh=/[\\^$.*+?()[\]{}|]/g,Xh=/^\[object .+?Constructor\]$/,em=Function.prototype,tm=Object.prototype,rm=em.toString,nm=tm.hasOwnProperty,om=RegExp("^"+rm.call(nm).replace(Jh,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function im(e){if(!Ar(e)||Yh(e))return!1;var t=da(e)?om:Xh;return t.test(Zh(e))}function am(e,t){return e==null?void 0:e[t]}function fa(e,t){var r=am(e,t);return im(r)?r:void 0}var ys=Object.create,sm=(function(){function e(){}return function(t){if(!Ar(t))return{};if(ys)return ys(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}})();function lm(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function cm(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var um=800,dm=16,fm=Date.now;function pm(e){var t=0,r=0;return function(){var n=fm(),o=dm-(n-r);if(r=n,o>0){if(++t>=um)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function hm(e){return function(){return e}}var yo=(function(){try{var e=fa(Object,"defineProperty");return e({},"",{}),e}catch{}})(),mm=yo?function(e,t){return yo(e,"toString",{configurable:!0,enumerable:!1,value:hm(t),writable:!0})}:$c,gm=pm(mm),vm=9007199254740991,bm=/^(?:0|[1-9]\d*)$/;function jc(e,t){var r=typeof e;return t=t??vm,!!t&&(r=="number"||r!="symbol"&&bm.test(e))&&e>-1&&e%1==0&&e<t}function pa(e,t,r){t=="__proto__"&&yo?yo(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function Bo(e,t){return e===t||e!==e&&t!==t}var Cm=Object.prototype,xm=Cm.hasOwnProperty;function Sm(e,t,r){var n=e[t];(!(xm.call(e,t)&&Bo(n,r))||r===void 0&&!(t in e))&&pa(e,t,r)}function ym(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],l=void 0;l===void 0&&(l=e[s]),o?pa(r,s,l):Sm(r,s,l)}return r}var _s=Math.max;function _m(e,t,r){return t=_s(t===void 0?e.length-1:t,0),function(){for(var n=arguments,o=-1,i=_s(n.length-t,0),a=Array(i);++o<i;)a[o]=n[t+o];o=-1;for(var s=Array(t+1);++o<t;)s[o]=n[o];return s[t]=r(a),lm(e,this,s)}}function Pm(e,t){return gm(_m(e,t,$c),e+"")}var wm=9007199254740991;function Uc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=wm}function ha(e){return e!=null&&Uc(e.length)&&!da(e)}function Am(e,t,r){if(!Ar(r))return!1;var n=typeof t;return(n=="number"?ha(r)&&jc(t,r.length):n=="string"&&t in r)?Bo(r[t],e):!1}function Em(e){return Pm(function(t,r){var n=-1,o=r.length,i=o>1?r[o-1]:void 0,a=o>2?r[2]:void 0;for(i=e.length>3&&typeof i=="function"?(o--,i):void 0,a&&Am(r[0],r[1],a)&&(i=o<3?void 0:i,o=1),t=Object(t);++n<o;){var s=r[n];s&&e(t,s,n,i)}return t})}var Tm=Object.prototype;function Wc(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Tm;return e===r}function Im(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Rm="[object Arguments]";function Ps(e){return Jr(e)&&$n(e)==Rm}var Vc=Object.prototype,Om=Vc.hasOwnProperty,Dm=Vc.propertyIsEnumerable,Di=Ps((function(){return arguments})())?Ps:function(e){return Jr(e)&&Om.call(e,"callee")&&!Dm.call(e,"callee")};function km(){return!1}var Gc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ws=Gc&&typeof module=="object"&&module&&!module.nodeType&&module,Mm=ws&&ws.exports===Gc,As=Mm?Zr.Buffer:void 0,Lm=As?As.isBuffer:void 0,qc=Lm||km,Fm="[object Arguments]",Nm="[object Array]",Bm="[object Boolean]",Hm="[object Date]",zm="[object Error]",$m="[object Function]",jm="[object Map]",Um="[object Number]",Wm="[object Object]",Vm="[object RegExp]",Gm="[object Set]",qm="[object String]",Ym="[object WeakMap]",Km="[object ArrayBuffer]",Qm="[object DataView]",Zm="[object Float32Array]",Jm="[object Float64Array]",Xm="[object Int8Array]",eg="[object Int16Array]",tg="[object Int32Array]",rg="[object Uint8Array]",ng="[object Uint8ClampedArray]",og="[object Uint16Array]",ig="[object Uint32Array]",Oe={};Oe[Zm]=Oe[Jm]=Oe[Xm]=Oe[eg]=Oe[tg]=Oe[rg]=Oe[ng]=Oe[og]=Oe[ig]=!0;Oe[Fm]=Oe[Nm]=Oe[Km]=Oe[Bm]=Oe[Qm]=Oe[Hm]=Oe[zm]=Oe[$m]=Oe[jm]=Oe[Um]=Oe[Wm]=Oe[Vm]=Oe[Gm]=Oe[qm]=Oe[Ym]=!1;function ag(e){return Jr(e)&&Uc(e.length)&&!!Oe[$n(e)]}function sg(e){return function(t){return e(t)}}var Yc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Sn=Yc&&typeof module=="object"&&module&&!module.nodeType&&module,lg=Sn&&Sn.exports===Yc,oi=lg&&Bc.process,Es=(function(){try{var e=Sn&&Sn.require&&Sn.require("util").types;return e||oi&&oi.binding&&oi.binding("util")}catch{}})(),Ts=Es&&Es.isTypedArray,Kc=Ts?sg(Ts):ag,cg=Object.prototype,ug=cg.hasOwnProperty;function dg(e,t){var r=So(e),n=!r&&Di(e),o=!r&&!n&&qc(e),i=!r&&!n&&!o&&Kc(e),a=r||n||o||i,s=a?Im(e.length,String):[],l=s.length;for(var c in e)(t||ug.call(e,c))&&!(a&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||jc(c,l)))&&s.push(c);return s}function fg(e,t){return function(r){return e(t(r))}}function pg(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var hg=Object.prototype,mg=hg.hasOwnProperty;function gg(e){if(!Ar(e))return pg(e);var t=Wc(e),r=[];for(var n in e)n=="constructor"&&(t||!mg.call(e,n))||r.push(n);return r}function Qc(e){return ha(e)?dg(e,!0):gg(e)}var On=fa(Object,"create");function vg(){this.__data__=On?On(null):{},this.size=0}function bg(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Cg="__lodash_hash_undefined__",xg=Object.prototype,Sg=xg.hasOwnProperty;function yg(e){var t=this.__data__;if(On){var r=t[e];return r===Cg?void 0:r}return Sg.call(t,e)?t[e]:void 0}var _g=Object.prototype,Pg=_g.hasOwnProperty;function wg(e){var t=this.__data__;return On?t[e]!==void 0:Pg.call(t,e)}var Ag="__lodash_hash_undefined__";function Eg(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=On&&t===void 0?Ag:t,this}function Pr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Pr.prototype.clear=vg;Pr.prototype.delete=bg;Pr.prototype.get=yg;Pr.prototype.has=wg;Pr.prototype.set=Eg;function Tg(){this.__data__=[],this.size=0}function Ho(e,t){for(var r=e.length;r--;)if(Bo(e[r][0],t))return r;return-1}var Ig=Array.prototype,Rg=Ig.splice;function Og(e){var t=this.__data__,r=Ho(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():Rg.call(t,r,1),--this.size,!0}function Dg(e){var t=this.__data__,r=Ho(t,e);return r<0?void 0:t[r][1]}function kg(e){return Ho(this.__data__,e)>-1}function Mg(e,t){var r=this.__data__,n=Ho(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}function Yt(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Yt.prototype.clear=Tg;Yt.prototype.delete=Og;Yt.prototype.get=Dg;Yt.prototype.has=kg;Yt.prototype.set=Mg;var Zc=fa(Zr,"Map");function Lg(){this.size=0,this.__data__={hash:new Pr,map:new(Zc||Yt),string:new Pr}}function Fg(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function zo(e,t){var r=e.__data__;return Fg(t)?r[typeof t=="string"?"string":"hash"]:r.map}function Ng(e){var t=zo(this,e).delete(e);return this.size-=t?1:0,t}function Bg(e){return zo(this,e).get(e)}function Hg(e){return zo(this,e).has(e)}function zg(e,t){var r=zo(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}function Xr(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xr.prototype.clear=Lg;Xr.prototype.delete=Ng;Xr.prototype.get=Bg;Xr.prototype.has=Hg;Xr.prototype.set=zg;function $g(e){return e==null?"":zc(e)}var Jc=fg(Object.getPrototypeOf,Object),jg="[object Object]",Ug=Function.prototype,Wg=Object.prototype,Xc=Ug.toString,Vg=Wg.hasOwnProperty,Gg=Xc.call(Object);function qg(e){if(!Jr(e)||$n(e)!=jg)return!1;var t=Jc(e);if(t===null)return!0;var r=Vg.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&Xc.call(r)==Gg}function Yg(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}function Kg(e,t,r){var n=e.length;return r=r===void 0?n:r,!t&&r>=n?e:Yg(e,t,r)}var Qg="\\ud800-\\udfff",Zg="\\u0300-\\u036f",Jg="\\ufe20-\\ufe2f",Xg="\\u20d0-\\u20ff",e0=Zg+Jg+Xg,t0="\\ufe0e\\ufe0f",r0="\\u200d",n0=RegExp("["+r0+Qg+e0+t0+"]");function eu(e){return n0.test(e)}function o0(e){return e.split("")}var tu="\\ud800-\\udfff",i0="\\u0300-\\u036f",a0="\\ufe20-\\ufe2f",s0="\\u20d0-\\u20ff",l0=i0+a0+s0,c0="\\ufe0e\\ufe0f",u0="["+tu+"]",ki="["+l0+"]",Mi="\\ud83c[\\udffb-\\udfff]",d0="(?:"+ki+"|"+Mi+")",ru="[^"+tu+"]",nu="(?:\\ud83c[\\udde6-\\uddff]){2}",ou="[\\ud800-\\udbff][\\udc00-\\udfff]",f0="\\u200d",iu=d0+"?",au="["+c0+"]?",p0="(?:"+f0+"(?:"+[ru,nu,ou].join("|")+")"+au+iu+")*",h0=au+iu+p0,m0="(?:"+[ru+ki+"?",ki,nu,ou,u0].join("|")+")",g0=RegExp(Mi+"(?="+Mi+")|"+m0+h0,"g");function v0(e){return e.match(g0)||[]}function b0(e){return eu(e)?v0(e):o0(e)}function C0(e){return function(t){t=$g(t);var r=eu(t)?b0(t):void 0,n=r?r[0]:t.charAt(0),o=r?Kg(r,1).join(""):t.slice(1);return n[e]()+o}}var x0=C0("toUpperCase");function S0(){this.__data__=new Yt,this.size=0}function y0(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function _0(e){return this.__data__.get(e)}function P0(e){return this.__data__.has(e)}var w0=200;function A0(e,t){var r=this.__data__;if(r instanceof Yt){var n=r.__data__;if(!Zc||n.length<w0-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new Xr(n)}return r.set(e,t),this.size=r.size,this}function en(e){var t=this.__data__=new Yt(e);this.size=t.size}en.prototype.clear=S0;en.prototype.delete=y0;en.prototype.get=_0;en.prototype.has=P0;en.prototype.set=A0;var su=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Is=su&&typeof module=="object"&&module&&!module.nodeType&&module,E0=Is&&Is.exports===su,Rs=E0?Zr.Buffer:void 0;Rs&&Rs.allocUnsafe;function T0(e,t){return e.slice()}var Os=Zr.Uint8Array;function I0(e){var t=new e.constructor(e.byteLength);return new Os(t).set(new Os(e)),t}function R0(e,t){var r=I0(e.buffer);return new e.constructor(r,e.byteOffset,e.length)}function O0(e){return typeof e.constructor=="function"&&!Wc(e)?sm(Jc(e)):{}}function D0(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var l=a[++o];if(r(i[l],l,i)===!1)break}return t}}var k0=D0();function Li(e,t,r){(r!==void 0&&!Bo(e[t],r)||r===void 0&&!(t in e))&&pa(e,t,r)}function M0(e){return Jr(e)&&ha(e)}function Fi(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function L0(e){return ym(e,Qc(e))}function F0(e,t,r,n,o,i,a){var s=Fi(e,r),l=Fi(t,r),c=a.get(l);if(c){Li(e,r,c);return}var u=i?i(s,l,r+"",e,t,a):void 0,d=u===void 0;if(d){var m=So(l),p=!m&&qc(l),g=!m&&!p&&Kc(l);u=l,m||p||g?So(s)?u=s:M0(s)?u=cm(s):p?(d=!1,u=T0(l)):g?(d=!1,u=R0(l)):u=[]:qg(l)||Di(l)?(u=s,Di(s)?u=L0(s):(!Ar(s)||da(s))&&(u=O0(l))):d=!1}d&&(a.set(l,u),o(u,l,n,i,a),a.delete(l)),Li(e,r,u)}function lu(e,t,r,n,o){e!==t&&k0(t,function(i,a){if(o||(o=new en),Ar(i))F0(e,t,a,r,lu,n,o);else{var s=n?n(Fi(e,a),i,a+"",e,t,o):void 0;s===void 0&&(s=i),Li(e,a,s)}},Qc)}var pn=Em(function(e,t,r){lu(e,t,r)});const Dn="naive-ui-style";function ma(e,t,r){if(!t)return;const n=Fo(),o=Ce(()=>{const{value:s}=t;if(!s)return;const l=s[e];if(l)return l}),i=qe(cr,null),a=()=>{ta(()=>{const{value:s}=r,l=`${s}${e}Rtl`;if(oh(l,n))return;const{value:c}=o;c&&c.style.mount({id:l,head:!0,anchorMetaName:Dn,props:{bPrefix:s?`.${s}-`:void 0},ssr:n,parent:i==null?void 0:i.styleMountTarget})})};return n?a():Oo(a),o}const jn={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:N0,fontFamily:B0,lineHeight:H0}=jn,cu=Ae("body",`
 margin: 0;
 font-size: ${N0};
 font-family: ${B0};
 line-height: ${H0};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[Ae("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function ga(e,t,r){if(!t)return;const n=Fo(),o=qe(cr,null),i=()=>{const a=r.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:Dn,props:{bPrefix:a?`.${a}-`:void 0},ssr:n,parent:o==null?void 0:o.styleMountTarget}),o!=null&&o.preflightStyleDisabled||cu.mount({id:"n-global",head:!0,anchorMetaName:Dn,ssr:n,parent:o==null?void 0:o.styleMountTarget})};n?i():Oo(i)}function Un(e,t,r,n,o,i){const a=Fo(),s=qe(cr,null);if(r){const c=()=>{const u=i==null?void 0:i.value;r.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:Dn,ssr:a,parent:s==null?void 0:s.styleMountTarget}),s!=null&&s.preflightStyleDisabled||cu.mount({id:"n-global",head:!0,anchorMetaName:Dn,ssr:a,parent:s==null?void 0:s.styleMountTarget})};a?c():Oo(c)}return Ce(()=>{var c;const{theme:{common:u,self:d,peers:m={}}={},themeOverrides:p={},builtinThemeOverrides:g={}}=o,{common:h,peers:b}=p,{common:v=void 0,[e]:{common:x=void 0,self:_=void 0,peers:w={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:A=void 0,[e]:k={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:N,peers:$={}}=k,D=pn({},u||x||v||n.common,A,N,h),U=pn((c=d||_||n.self)===null||c===void 0?void 0:c(D),g,k,p);return{common:D,self:U,peers:pn({},n.peers,w,m),peerOverrides:pn({},g.peers,$,b)}})}Un.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const z0=Xe("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[Ae("svg",`
 height: 1em;
 width: 1em;
 `)]),va=Ye({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){ga("-base-icon",z0,Fn(e,"clsPrefix"))},render(){return re("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),uu=Ye({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const r=_h();return()=>re(bc,{name:"icon-switch-transition",appear:r.value},t)}});function Wn(e,t){const r=Ye({render(){return t()}});return Ye({name:x0(e),setup(){var n;const o=(n=qe(cr,null))===null||n===void 0?void 0:n.mergedIconsRef;return()=>{var i;const a=(i=o==null?void 0:o.value)===null||i===void 0?void 0:i[e];return a?a():re(r,null)}}})}const $0=Ye({name:"ChevronLeft",render(){return re("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),j0=Ye({name:"ChevronRight",render(){return re("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},re("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),U0=Wn("close",()=>re("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},re("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},re("g",{fill:"currentColor","fill-rule":"nonzero"},re("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),W0=Wn("error",()=>re("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},re("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},re("g",{"fill-rule":"nonzero"},re("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),V0=Wn("info",()=>re("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},re("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},re("g",{"fill-rule":"nonzero"},re("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),G0=Wn("success",()=>re("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},re("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},re("g",{"fill-rule":"nonzero"},re("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),q0=Wn("warning",()=>re("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},re("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},re("g",{"fill-rule":"nonzero"},re("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:Y0}=jn;function Ni({originalTransform:e="",left:t=0,top:r=0,transition:n=`all .3s ${Y0} !important`}={}){return[Ae("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:r,opacity:0}),Ae("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:r,opacity:1}),Ae("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:r,transition:n})]}const K0=Xe("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Qe("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),Ae("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),Rc("disabled",[Ae("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Ae("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),Ae("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),Ae("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),Ae("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Qe("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Qe("round",[Ae("&::before",`
 border-radius: 50%;
 `)])]),Q0=Ye({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return ga("-base-close",K0,Fn(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:r,absolute:n,round:o,isButtonTag:i}=e;return re(i?"button":"div",{type:i?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:i?void 0:"button",disabled:r,class:[`${t}-base-close`,n&&`${t}-base-close--absolute`,r&&`${t}-base-close--disabled`,o&&`${t}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},re(va,{clsPrefix:t},{default:()=>re(U0,null)}))}}}),du=Ye({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function r(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function n(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function o(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function i(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:c,mode:u}=e,d=s?Ap:bc,m={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:i,onAfterEnter:a,onBeforeLeave:r,onLeave:n,onAfterLeave:o};return s||(m.mode=u),re(d,m,t)}}}),Z0=Ae([Ae("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Xe("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[ke("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ni()]),ke("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ni({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),ke("container",`
 animation: rotator 3s linear infinite both;
 `,[ke("icon",`
 height: 1em;
 width: 1em;
 `)])])]),ii="1.6s",J0={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},X0=Ye({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},J0),setup(e){ga("-base-loading",Z0,Fn(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:r,stroke:n,scale:o}=this,i=t/o;return re("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},re(uu,null,{default:()=>this.show?re("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},re("div",{class:`${e}-base-loading__container`},re("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*i} ${2*i}`,xmlns:"http://www.w3.org/2000/svg",style:{color:n}},re("g",null,re("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};270 ${i} ${i}`,begin:"0s",dur:ii,fill:"freeze",repeatCount:"indefinite"}),re("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":r,"stroke-linecap":"round",cx:i,cy:i,r:t-r/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},re("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,begin:"0s",dur:ii,fill:"freeze",repeatCount:"indefinite"}),re("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:ii,fill:"freeze",repeatCount:"indefinite"})))))):re("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),se={neutralBase:"#000",neutralInvertBase:"#fff",neutralTextBase:"#fff",neutralPopover:"rgb(72, 72, 78)",neutralCard:"rgb(24, 24, 28)",neutralModal:"rgb(44, 44, 50)",neutralBody:"rgb(16, 16, 20)",alpha1:"0.9",alpha2:"0.82",alpha3:"0.52",alpha4:"0.38",alpha5:"0.28",alphaClose:"0.52",alphaDisabled:"0.38",alphaDisabledInput:"0.06",alphaPending:"0.09",alphaTablePending:"0.06",alphaTableStriped:"0.05",alphaPressed:"0.05",alphaAvatar:"0.18",alphaRail:"0.2",alphaProgressRail:"0.12",alphaBorder:"0.24",alphaDivider:"0.09",alphaInput:"0.1",alphaAction:"0.06",alphaTab:"0.04",alphaScrollbar:"0.2",alphaScrollbarHover:"0.3",alphaCode:"0.12",alphaTag:"0.2",primaryHover:"#7fe7c4",primaryDefault:"#63e2b7",primaryActive:"#5acea7",primarySuppl:"rgb(42, 148, 125)",infoHover:"#8acbec",infoDefault:"#70c0e8",infoActive:"#66afd3",infoSuppl:"rgb(56, 137, 197)",errorHover:"#e98b8b",errorDefault:"#e88080",errorActive:"#e57272",errorSuppl:"rgb(208, 58, 82)",warningHover:"#f5d599",warningDefault:"#f2c97d",warningActive:"#e6c260",warningSuppl:"rgb(240, 138, 0)",successHover:"#7fe7c4",successDefault:"#63e2b7",successActive:"#5acea7",successSuppl:"rgb(42, 148, 125)"},e1=Gt(se.neutralBase),fu=Gt(se.neutralInvertBase),t1=`rgba(${fu.slice(0,3).join(", ")}, `;function Se(e){return`${t1+String(e)})`}function r1(e){const t=Array.from(fu);return t[3]=Number(e),ue(e1,t)}const X=Object.assign(Object.assign({name:"common"},jn),{baseColor:se.neutralBase,primaryColor:se.primaryDefault,primaryColorHover:se.primaryHover,primaryColorPressed:se.primaryActive,primaryColorSuppl:se.primarySuppl,infoColor:se.infoDefault,infoColorHover:se.infoHover,infoColorPressed:se.infoActive,infoColorSuppl:se.infoSuppl,successColor:se.successDefault,successColorHover:se.successHover,successColorPressed:se.successActive,successColorSuppl:se.successSuppl,warningColor:se.warningDefault,warningColorHover:se.warningHover,warningColorPressed:se.warningActive,warningColorSuppl:se.warningSuppl,errorColor:se.errorDefault,errorColorHover:se.errorHover,errorColorPressed:se.errorActive,errorColorSuppl:se.errorSuppl,textColorBase:se.neutralTextBase,textColor1:Se(se.alpha1),textColor2:Se(se.alpha2),textColor3:Se(se.alpha3),textColorDisabled:Se(se.alpha4),placeholderColor:Se(se.alpha4),placeholderColorDisabled:Se(se.alpha5),iconColor:Se(se.alpha4),iconColorDisabled:Se(se.alpha5),iconColorHover:Se(Number(se.alpha4)*1.25),iconColorPressed:Se(Number(se.alpha4)*.8),opacity1:se.alpha1,opacity2:se.alpha2,opacity3:se.alpha3,opacity4:se.alpha4,opacity5:se.alpha5,dividerColor:Se(se.alphaDivider),borderColor:Se(se.alphaBorder),closeIconColorHover:Se(Number(se.alphaClose)),closeIconColor:Se(Number(se.alphaClose)),closeIconColorPressed:Se(Number(se.alphaClose)),closeColorHover:"rgba(255, 255, 255, .12)",closeColorPressed:"rgba(255, 255, 255, .08)",clearColor:Se(se.alpha4),clearColorHover:Be(Se(se.alpha4),{alpha:1.25}),clearColorPressed:Be(Se(se.alpha4),{alpha:.8}),scrollbarColor:Se(se.alphaScrollbar),scrollbarColorHover:Se(se.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Se(se.alphaProgressRail),railColor:Se(se.alphaRail),popoverColor:se.neutralPopover,tableColor:se.neutralCard,cardColor:se.neutralCard,modalColor:se.neutralModal,bodyColor:se.neutralBody,tagColor:r1(se.alphaTag),avatarColor:Se(se.alphaAvatar),invertedColor:se.neutralBase,inputColor:Se(se.alphaInput),codeColor:Se(se.alphaCode),tabColor:Se(se.alphaTab),actionColor:Se(se.alphaAction),tableHeaderColor:Se(se.alphaAction),hoverColor:Se(se.alphaPending),tableColorHover:Se(se.alphaTablePending),tableColorStriped:Se(se.alphaTableStriped),pressedColor:Se(se.alphaPressed),opacityDisabled:se.alphaDisabled,inputColorDisabled:Se(se.alphaDisabledInput),buttonColor2:"rgba(255, 255, 255, .08)",buttonColor2Hover:"rgba(255, 255, 255, .12)",buttonColor2Pressed:"rgba(255, 255, 255, .08)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .24), 0 3px 6px 0 rgba(0, 0, 0, .18), 0 5px 12px 4px rgba(0, 0, 0, .12)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .24), 0 6px 12px 0 rgba(0, 0, 0, .16), 0 9px 18px 8px rgba(0, 0, 0, .10)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),me={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},n1=Gt(me.neutralBase),pu=Gt(me.neutralInvertBase),o1=`rgba(${pu.slice(0,3).join(", ")}, `;function Ds(e){return`${o1+String(e)})`}function ot(e){const t=Array.from(pu);return t[3]=Number(e),ue(n1,t)}const Kt=Object.assign(Object.assign({name:"common"},jn),{baseColor:me.neutralBase,primaryColor:me.primaryDefault,primaryColorHover:me.primaryHover,primaryColorPressed:me.primaryActive,primaryColorSuppl:me.primarySuppl,infoColor:me.infoDefault,infoColorHover:me.infoHover,infoColorPressed:me.infoActive,infoColorSuppl:me.infoSuppl,successColor:me.successDefault,successColorHover:me.successHover,successColorPressed:me.successActive,successColorSuppl:me.successSuppl,warningColor:me.warningDefault,warningColorHover:me.warningHover,warningColorPressed:me.warningActive,warningColorSuppl:me.warningSuppl,errorColor:me.errorDefault,errorColorHover:me.errorHover,errorColorPressed:me.errorActive,errorColorSuppl:me.errorSuppl,textColorBase:me.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:ot(me.alpha4),placeholderColor:ot(me.alpha4),placeholderColorDisabled:ot(me.alpha5),iconColor:ot(me.alpha4),iconColorHover:Be(ot(me.alpha4),{lightness:.75}),iconColorPressed:Be(ot(me.alpha4),{lightness:.9}),iconColorDisabled:ot(me.alpha5),opacity1:me.alpha1,opacity2:me.alpha2,opacity3:me.alpha3,opacity4:me.alpha4,opacity5:me.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:ot(Number(me.alphaClose)),closeIconColorHover:ot(Number(me.alphaClose)),closeIconColorPressed:ot(Number(me.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:ot(me.alpha4),clearColorHover:Be(ot(me.alpha4),{lightness:.75}),clearColorPressed:Be(ot(me.alpha4),{lightness:.9}),scrollbarColor:Ds(me.alphaScrollbar),scrollbarColorHover:Ds(me.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:ot(me.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:me.neutralPopover,tableColor:me.neutralCard,cardColor:me.neutralCard,modalColor:me.neutralModal,bodyColor:me.neutralBody,tagColor:"#eee",avatarColor:ot(me.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:ot(me.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:me.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),i1={railInsetHorizontalBottom:"auto 2px 4px 2px",railInsetHorizontalTop:"4px 2px auto 2px",railInsetVerticalRight:"2px 4px 2px auto",railInsetVerticalLeft:"2px auto 2px 4px",railColor:"transparent"};function hu(e){const{scrollbarColor:t,scrollbarColorHover:r,scrollbarHeight:n,scrollbarWidth:o,scrollbarBorderRadius:i}=e;return Object.assign(Object.assign({},i1),{height:n,width:o,borderRadius:i,color:t,colorHover:r})}const mu={name:"Scrollbar",common:Kt,self:hu},lt={name:"Scrollbar",common:X,self:hu},a1={iconSizeTiny:"28px",iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};function gu(e){const{textColorDisabled:t,iconColor:r,textColor2:n,fontSizeTiny:o,fontSizeSmall:i,fontSizeMedium:a,fontSizeLarge:s,fontSizeHuge:l}=e;return Object.assign(Object.assign({},a1),{fontSizeTiny:o,fontSizeSmall:i,fontSizeMedium:a,fontSizeLarge:s,fontSizeHuge:l,textColor:t,iconColor:r,extraTextColor:n})}const vu={name:"Empty",common:Kt,self:gu},Er={name:"Empty",common:X,self:gu},s1={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function bu(e){const{borderRadius:t,popoverColor:r,textColor3:n,dividerColor:o,textColor2:i,primaryColorPressed:a,textColorDisabled:s,primaryColor:l,opacityDisabled:c,hoverColor:u,fontSizeTiny:d,fontSizeSmall:m,fontSizeMedium:p,fontSizeLarge:g,fontSizeHuge:h,heightTiny:b,heightSmall:v,heightMedium:x,heightLarge:_,heightHuge:w}=e;return Object.assign(Object.assign({},s1),{optionFontSizeTiny:d,optionFontSizeSmall:m,optionFontSizeMedium:p,optionFontSizeLarge:g,optionFontSizeHuge:h,optionHeightTiny:b,optionHeightSmall:v,optionHeightMedium:x,optionHeightLarge:_,optionHeightHuge:w,borderRadius:t,color:r,groupHeaderTextColor:n,actionDividerColor:o,optionTextColor:i,optionTextColorPressed:a,optionTextColorDisabled:s,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:i,loadingColor:l})}const l1={name:"InternalSelectMenu",common:Kt,peers:{Scrollbar:mu,Empty:vu},self:bu},Vn={name:"InternalSelectMenu",common:X,peers:{Scrollbar:lt,Empty:Er},self:bu},c1={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};function Cu(e){const{boxShadow2:t,popoverColor:r,textColor2:n,borderRadius:o,fontSize:i,dividerColor:a}=e;return Object.assign(Object.assign({},c1),{fontSize:i,borderRadius:o,color:r,dividerColor:a,textColor:n,boxShadow:t})}const u1={name:"Popover",common:Kt,peers:{Scrollbar:mu},self:Cu},Tr={name:"Popover",common:X,peers:{Scrollbar:lt},self:Cu},d1={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px"},xu={name:"Tag",common:X,self(e){const{textColor2:t,primaryColorHover:r,primaryColorPressed:n,primaryColor:o,infoColor:i,successColor:a,warningColor:s,errorColor:l,baseColor:c,borderColor:u,tagColor:d,opacityDisabled:m,closeIconColor:p,closeIconColorHover:g,closeIconColorPressed:h,closeColorHover:b,closeColorPressed:v,borderRadiusSmall:x,fontSizeMini:_,fontSizeTiny:w,fontSizeSmall:A,fontSizeMedium:k,heightMini:N,heightTiny:$,heightSmall:D,heightMedium:U,buttonColor2Hover:J,buttonColor2Pressed:P,fontWeightStrong:B}=e;return Object.assign(Object.assign({},d1),{closeBorderRadius:x,heightTiny:N,heightSmall:$,heightMedium:D,heightLarge:U,borderRadius:x,opacityDisabled:m,fontSizeTiny:_,fontSizeSmall:w,fontSizeMedium:A,fontSizeLarge:k,fontWeightStrong:B,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:J,colorPressedCheckable:P,colorChecked:o,colorCheckedHover:r,colorCheckedPressed:n,border:`1px solid ${u}`,textColor:t,color:d,colorBordered:"#0000",closeIconColor:p,closeIconColorHover:g,closeIconColorPressed:h,closeColorHover:b,closeColorPressed:v,borderPrimary:`1px solid ${le(o,{alpha:.3})}`,textColorPrimary:o,colorPrimary:le(o,{alpha:.16}),colorBorderedPrimary:"#0000",closeIconColorPrimary:Be(o,{lightness:.7}),closeIconColorHoverPrimary:Be(o,{lightness:.7}),closeIconColorPressedPrimary:Be(o,{lightness:.7}),closeColorHoverPrimary:le(o,{alpha:.16}),closeColorPressedPrimary:le(o,{alpha:.12}),borderInfo:`1px solid ${le(i,{alpha:.3})}`,textColorInfo:i,colorInfo:le(i,{alpha:.16}),colorBorderedInfo:"#0000",closeIconColorInfo:Be(i,{alpha:.7}),closeIconColorHoverInfo:Be(i,{alpha:.7}),closeIconColorPressedInfo:Be(i,{alpha:.7}),closeColorHoverInfo:le(i,{alpha:.16}),closeColorPressedInfo:le(i,{alpha:.12}),borderSuccess:`1px solid ${le(a,{alpha:.3})}`,textColorSuccess:a,colorSuccess:le(a,{alpha:.16}),colorBorderedSuccess:"#0000",closeIconColorSuccess:Be(a,{alpha:.7}),closeIconColorHoverSuccess:Be(a,{alpha:.7}),closeIconColorPressedSuccess:Be(a,{alpha:.7}),closeColorHoverSuccess:le(a,{alpha:.16}),closeColorPressedSuccess:le(a,{alpha:.12}),borderWarning:`1px solid ${le(s,{alpha:.3})}`,textColorWarning:s,colorWarning:le(s,{alpha:.16}),colorBorderedWarning:"#0000",closeIconColorWarning:Be(s,{alpha:.7}),closeIconColorHoverWarning:Be(s,{alpha:.7}),closeIconColorPressedWarning:Be(s,{alpha:.7}),closeColorHoverWarning:le(s,{alpha:.16}),closeColorPressedWarning:le(s,{alpha:.11}),borderError:`1px solid ${le(l,{alpha:.3})}`,textColorError:l,colorError:le(l,{alpha:.16}),colorBorderedError:"#0000",closeIconColorError:Be(l,{alpha:.7}),closeIconColorHoverError:Be(l,{alpha:.7}),closeIconColorPressedError:Be(l,{alpha:.7}),closeColorHoverError:le(l,{alpha:.16}),closeColorPressedError:le(l,{alpha:.12})})}},Su={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"},ba={name:"InternalSelection",common:X,peers:{Popover:Tr},self(e){const{borderRadius:t,textColor2:r,textColorDisabled:n,inputColor:o,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,iconColor:m,iconColorDisabled:p,clearColor:g,clearColorHover:h,clearColorPressed:b,placeholderColor:v,placeholderColorDisabled:x,fontSizeTiny:_,fontSizeSmall:w,fontSizeMedium:A,fontSizeLarge:k,heightTiny:N,heightSmall:$,heightMedium:D,heightLarge:U,fontWeight:J}=e;return Object.assign(Object.assign({},Su),{fontWeight:J,fontSizeTiny:_,fontSizeSmall:w,fontSizeMedium:A,fontSizeLarge:k,heightTiny:N,heightSmall:$,heightMedium:D,heightLarge:U,borderRadius:t,textColor:r,textColorDisabled:n,placeholderColor:v,placeholderColorDisabled:x,color:o,colorDisabled:i,colorActive:le(a,{alpha:.1}),border:"1px solid #0000",borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 8px 0 ${le(a,{alpha:.4})}`,boxShadowFocus:`0 0 8px 0 ${le(a,{alpha:.4})}`,caretColor:a,arrowColor:m,arrowColorDisabled:p,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 8px 0 ${le(l,{alpha:.4})}`,boxShadowFocusWarning:`0 0 8px 0 ${le(l,{alpha:.4})}`,colorActiveWarning:le(l,{alpha:.1}),caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 8px 0 ${le(u,{alpha:.4})}`,boxShadowFocusError:`0 0 8px 0 ${le(u,{alpha:.4})}`,colorActiveError:le(u,{alpha:.1}),caretColorError:u,clearColor:g,clearColorHover:h,clearColorPressed:b})}};function f1(e){const{borderRadius:t,textColor2:r,textColorDisabled:n,inputColor:o,inputColorDisabled:i,primaryColor:a,primaryColorHover:s,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderColor:m,iconColor:p,iconColorDisabled:g,clearColor:h,clearColorHover:b,clearColorPressed:v,placeholderColor:x,placeholderColorDisabled:_,fontSizeTiny:w,fontSizeSmall:A,fontSizeMedium:k,fontSizeLarge:N,heightTiny:$,heightSmall:D,heightMedium:U,heightLarge:J,fontWeight:P}=e;return Object.assign(Object.assign({},Su),{fontSizeTiny:w,fontSizeSmall:A,fontSizeMedium:k,fontSizeLarge:N,heightTiny:$,heightSmall:D,heightMedium:U,heightLarge:J,borderRadius:t,fontWeight:P,textColor:r,textColorDisabled:n,placeholderColor:x,placeholderColorDisabled:_,color:o,colorDisabled:i,colorActive:o,border:`1px solid ${m}`,borderHover:`1px solid ${s}`,borderActive:`1px solid ${a}`,borderFocus:`1px solid ${s}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${le(a,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${le(a,{alpha:.2})}`,caretColor:a,arrowColor:p,arrowColorDisabled:g,loadingColor:a,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${le(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${le(l,{alpha:.2})}`,colorActiveWarning:o,caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${le(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${le(u,{alpha:.2})}`,colorActiveError:o,caretColorError:u,clearColor:h,clearColorHover:b,clearColorPressed:v})}const p1={name:"InternalSelection",common:Kt,peers:{Popover:u1},self:f1},h1={iconMargin:"11px 8px 0 12px",iconMarginRtl:"11px 12px 0 8px",iconSize:"24px",closeIconSize:"16px",closeSize:"20px",closeMargin:"13px 14px 0 0",closeMarginRtl:"13px 0 0 14px",padding:"13px"},m1={name:"Alert",common:X,self(e){const{lineHeight:t,borderRadius:r,fontWeightStrong:n,dividerColor:o,inputColor:i,textColor1:a,textColor2:s,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,infoColorSuppl:p,successColorSuppl:g,warningColorSuppl:h,errorColorSuppl:b,fontSize:v}=e;return Object.assign(Object.assign({},h1),{fontSize:v,lineHeight:t,titleFontWeight:n,borderRadius:r,border:`1px solid ${o}`,color:i,titleTextColor:a,iconColor:s,contentTextColor:s,closeBorderRadius:r,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,borderInfo:`1px solid ${le(p,{alpha:.35})}`,colorInfo:le(p,{alpha:.25}),titleTextColorInfo:a,iconColorInfo:p,contentTextColorInfo:s,closeColorHoverInfo:l,closeColorPressedInfo:c,closeIconColorInfo:u,closeIconColorHoverInfo:d,closeIconColorPressedInfo:m,borderSuccess:`1px solid ${le(g,{alpha:.35})}`,colorSuccess:le(g,{alpha:.25}),titleTextColorSuccess:a,iconColorSuccess:g,contentTextColorSuccess:s,closeColorHoverSuccess:l,closeColorPressedSuccess:c,closeIconColorSuccess:u,closeIconColorHoverSuccess:d,closeIconColorPressedSuccess:m,borderWarning:`1px solid ${le(h,{alpha:.35})}`,colorWarning:le(h,{alpha:.25}),titleTextColorWarning:a,iconColorWarning:h,contentTextColorWarning:s,closeColorHoverWarning:l,closeColorPressedWarning:c,closeIconColorWarning:u,closeIconColorHoverWarning:d,closeIconColorPressedWarning:m,borderError:`1px solid ${le(b,{alpha:.35})}`,colorError:le(b,{alpha:.25}),titleTextColorError:a,iconColorError:b,contentTextColorError:s,closeColorHoverError:l,closeColorPressedError:c,closeIconColorError:u,closeIconColorHoverError:d,closeIconColorPressedError:m})}},{cubicBezierEaseInOut:Tt,cubicBezierEaseOut:g1,cubicBezierEaseIn:v1}=jn;function yu({overflow:e="hidden",duration:t=".3s",originalTransition:r="",leavingDelay:n="0s",foldPadding:o=!1,enterToProps:i=void 0,leaveToProps:a=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",c=s?"enter":"leave";return[Ae(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},i),{opacity:1})),Ae(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:o?"0 !important":void 0,paddingBottom:o?"0 !important":void 0})),Ae(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Tt} ${n},
 opacity ${t} ${g1} ${n},
 margin-top ${t} ${Tt} ${n},
 margin-bottom ${t} ${Tt} ${n},
 padding-top ${t} ${Tt} ${n},
 padding-bottom ${t} ${Tt} ${n}
 ${r?`,${r}`:""}
 `),Ae(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${Tt},
 opacity ${t} ${v1},
 margin-top ${t} ${Tt},
 margin-bottom ${t} ${Tt},
 padding-top ${t} ${Tt},
 padding-bottom ${t} ${Tt}
 ${r?`,${r}`:""}
 `)]}const b1={linkFontSize:"13px",linkPadding:"0 0 0 16px",railWidth:"4px"};function C1(e){const{borderRadius:t,railColor:r,primaryColor:n,primaryColorHover:o,primaryColorPressed:i,textColor2:a}=e;return Object.assign(Object.assign({},b1),{borderRadius:t,railColor:r,railColorActive:n,linkColor:le(n,{alpha:.15}),linkTextColor:a,linkTextColorHover:o,linkTextColorPressed:i,linkTextColorActive:n})}const x1={name:"Anchor",common:X,self:C1},S1={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};function y1(e){const{textColor2:t,textColor3:r,textColorDisabled:n,primaryColor:o,primaryColorHover:i,inputColor:a,inputColorDisabled:s,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderRadius:m,lineHeight:p,fontSizeTiny:g,fontSizeSmall:h,fontSizeMedium:b,fontSizeLarge:v,heightTiny:x,heightSmall:_,heightMedium:w,heightLarge:A,clearColor:k,clearColorHover:N,clearColorPressed:$,placeholderColor:D,placeholderColorDisabled:U,iconColor:J,iconColorDisabled:P,iconColorHover:B,iconColorPressed:C,fontWeight:W}=e;return Object.assign(Object.assign({},S1),{fontWeight:W,countTextColorDisabled:n,countTextColor:r,heightTiny:x,heightSmall:_,heightMedium:w,heightLarge:A,fontSizeTiny:g,fontSizeSmall:h,fontSizeMedium:b,fontSizeLarge:v,lineHeight:p,lineHeightTextarea:p,borderRadius:m,iconSize:"16px",groupLabelColor:a,textColor:t,textColorDisabled:n,textDecorationColor:t,groupLabelTextColor:t,caretColor:o,placeholderColor:D,placeholderColorDisabled:U,color:a,colorDisabled:s,colorFocus:le(o,{alpha:.1}),groupLabelBorder:"1px solid #0000",border:"1px solid #0000",borderHover:`1px solid ${i}`,borderDisabled:"1px solid #0000",borderFocus:`1px solid ${i}`,boxShadowFocus:`0 0 8px 0 ${le(o,{alpha:.3})}`,loadingColor:o,loadingColorWarning:l,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,colorFocusWarning:le(l,{alpha:.1}),borderFocusWarning:`1px solid ${c}`,boxShadowFocusWarning:`0 0 8px 0 ${le(l,{alpha:.3})}`,caretColorWarning:l,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,colorFocusError:le(u,{alpha:.1}),borderFocusError:`1px solid ${d}`,boxShadowFocusError:`0 0 8px 0 ${le(u,{alpha:.3})}`,caretColorError:u,clearColor:k,clearColorHover:N,clearColorPressed:$,iconColor:J,iconColorDisabled:P,iconColorHover:B,iconColorPressed:C,suffixTextColor:t})}const bt={name:"Input",common:X,peers:{Scrollbar:lt},self:y1};function _1(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const P1={name:"AutoComplete",common:X,peers:{InternalSelectMenu:Vn,Input:bt},self:_1};function w1(e){const{borderRadius:t,avatarColor:r,cardColor:n,fontSize:o,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,modalColor:u,popoverColor:d}=e;return{borderRadius:t,fontSize:o,border:`2px solid ${n}`,heightTiny:i,heightSmall:a,heightMedium:s,heightLarge:l,heightHuge:c,color:ue(n,r),colorModal:ue(u,r),colorPopover:ue(d,r)}}const _u={name:"Avatar",common:X,self:w1};function A1(){return{gap:"-12px"}}const E1={name:"AvatarGroup",common:X,peers:{Avatar:_u},self:A1},T1={width:"44px",height:"44px",borderRadius:"22px",iconSize:"26px"},I1={name:"BackTop",common:X,self(e){const{popoverColor:t,textColor2:r,primaryColorHover:n,primaryColorPressed:o}=e;return Object.assign(Object.assign({},T1),{color:t,textColor:r,iconColor:r,iconColorHover:n,iconColorPressed:o,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)"})}},R1={name:"Badge",common:X,self(e){const{errorColorSuppl:t,infoColorSuppl:r,successColorSuppl:n,warningColorSuppl:o,fontFamily:i}=e;return{color:t,colorInfo:r,colorSuccess:n,colorError:t,colorWarning:o,fontSize:"12px",fontFamily:i}}},O1={fontWeightActive:"400"};function D1(e){const{fontSize:t,textColor3:r,textColor2:n,borderRadius:o,buttonColor2Hover:i,buttonColor2Pressed:a}=e;return Object.assign(Object.assign({},O1),{fontSize:t,itemLineHeight:"1.25",itemTextColor:r,itemTextColorHover:n,itemTextColorPressed:n,itemTextColorActive:n,itemBorderRadius:o,itemColorHover:i,itemColorPressed:a,separatorColor:r})}const k1={name:"Breadcrumb",common:X,self:D1},M1={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};function Pu(e){const{heightTiny:t,heightSmall:r,heightMedium:n,heightLarge:o,borderRadius:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,textColor2:d,textColor3:m,primaryColorHover:p,primaryColorPressed:g,borderColor:h,primaryColor:b,baseColor:v,infoColor:x,infoColorHover:_,infoColorPressed:w,successColor:A,successColorHover:k,successColorPressed:N,warningColor:$,warningColorHover:D,warningColorPressed:U,errorColor:J,errorColorHover:P,errorColorPressed:B,fontWeight:C,buttonColor2:W,buttonColor2Hover:ae,buttonColor2Pressed:q,fontWeightStrong:ne}=e;return Object.assign(Object.assign({},M1),{heightTiny:t,heightSmall:r,heightMedium:n,heightLarge:o,borderRadiusTiny:i,borderRadiusSmall:i,borderRadiusMedium:i,borderRadiusLarge:i,fontSizeTiny:a,fontSizeSmall:s,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:W,colorSecondaryHover:ae,colorSecondaryPressed:q,colorTertiary:W,colorTertiaryHover:ae,colorTertiaryPressed:q,colorQuaternary:"#0000",colorQuaternaryHover:ae,colorQuaternaryPressed:q,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:d,textColorTertiary:m,textColorHover:p,textColorPressed:g,textColorFocus:p,textColorDisabled:d,textColorText:d,textColorTextHover:p,textColorTextPressed:g,textColorTextFocus:p,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:p,textColorGhostPressed:g,textColorGhostFocus:p,textColorGhostDisabled:d,border:`1px solid ${h}`,borderHover:`1px solid ${p}`,borderPressed:`1px solid ${g}`,borderFocus:`1px solid ${p}`,borderDisabled:`1px solid ${h}`,rippleColor:b,colorPrimary:b,colorHoverPrimary:p,colorPressedPrimary:g,colorFocusPrimary:p,colorDisabledPrimary:b,textColorPrimary:v,textColorHoverPrimary:v,textColorPressedPrimary:v,textColorFocusPrimary:v,textColorDisabledPrimary:v,textColorTextPrimary:b,textColorTextHoverPrimary:p,textColorTextPressedPrimary:g,textColorTextFocusPrimary:p,textColorTextDisabledPrimary:d,textColorGhostPrimary:b,textColorGhostHoverPrimary:p,textColorGhostPressedPrimary:g,textColorGhostFocusPrimary:p,textColorGhostDisabledPrimary:b,borderPrimary:`1px solid ${b}`,borderHoverPrimary:`1px solid ${p}`,borderPressedPrimary:`1px solid ${g}`,borderFocusPrimary:`1px solid ${p}`,borderDisabledPrimary:`1px solid ${b}`,rippleColorPrimary:b,colorInfo:x,colorHoverInfo:_,colorPressedInfo:w,colorFocusInfo:_,colorDisabledInfo:x,textColorInfo:v,textColorHoverInfo:v,textColorPressedInfo:v,textColorFocusInfo:v,textColorDisabledInfo:v,textColorTextInfo:x,textColorTextHoverInfo:_,textColorTextPressedInfo:w,textColorTextFocusInfo:_,textColorTextDisabledInfo:d,textColorGhostInfo:x,textColorGhostHoverInfo:_,textColorGhostPressedInfo:w,textColorGhostFocusInfo:_,textColorGhostDisabledInfo:x,borderInfo:`1px solid ${x}`,borderHoverInfo:`1px solid ${_}`,borderPressedInfo:`1px solid ${w}`,borderFocusInfo:`1px solid ${_}`,borderDisabledInfo:`1px solid ${x}`,rippleColorInfo:x,colorSuccess:A,colorHoverSuccess:k,colorPressedSuccess:N,colorFocusSuccess:k,colorDisabledSuccess:A,textColorSuccess:v,textColorHoverSuccess:v,textColorPressedSuccess:v,textColorFocusSuccess:v,textColorDisabledSuccess:v,textColorTextSuccess:A,textColorTextHoverSuccess:k,textColorTextPressedSuccess:N,textColorTextFocusSuccess:k,textColorTextDisabledSuccess:d,textColorGhostSuccess:A,textColorGhostHoverSuccess:k,textColorGhostPressedSuccess:N,textColorGhostFocusSuccess:k,textColorGhostDisabledSuccess:A,borderSuccess:`1px solid ${A}`,borderHoverSuccess:`1px solid ${k}`,borderPressedSuccess:`1px solid ${N}`,borderFocusSuccess:`1px solid ${k}`,borderDisabledSuccess:`1px solid ${A}`,rippleColorSuccess:A,colorWarning:$,colorHoverWarning:D,colorPressedWarning:U,colorFocusWarning:D,colorDisabledWarning:$,textColorWarning:v,textColorHoverWarning:v,textColorPressedWarning:v,textColorFocusWarning:v,textColorDisabledWarning:v,textColorTextWarning:$,textColorTextHoverWarning:D,textColorTextPressedWarning:U,textColorTextFocusWarning:D,textColorTextDisabledWarning:d,textColorGhostWarning:$,textColorGhostHoverWarning:D,textColorGhostPressedWarning:U,textColorGhostFocusWarning:D,textColorGhostDisabledWarning:$,borderWarning:`1px solid ${$}`,borderHoverWarning:`1px solid ${D}`,borderPressedWarning:`1px solid ${U}`,borderFocusWarning:`1px solid ${D}`,borderDisabledWarning:`1px solid ${$}`,rippleColorWarning:$,colorError:J,colorHoverError:P,colorPressedError:B,colorFocusError:P,colorDisabledError:J,textColorError:v,textColorHoverError:v,textColorPressedError:v,textColorFocusError:v,textColorDisabledError:v,textColorTextError:J,textColorTextHoverError:P,textColorTextPressedError:B,textColorTextFocusError:P,textColorTextDisabledError:d,textColorGhostError:J,textColorGhostHoverError:P,textColorGhostPressedError:B,textColorGhostFocusError:P,textColorGhostDisabledError:J,borderError:`1px solid ${J}`,borderHoverError:`1px solid ${P}`,borderPressedError:`1px solid ${B}`,borderFocusError:`1px solid ${P}`,borderDisabledError:`1px solid ${J}`,rippleColorError:J,waveOpacity:"0.6",fontWeight:C,fontWeightStrong:ne})}const WS={common:Kt,self:Pu},ht={name:"Button",common:X,self(e){const t=Pu(e);return t.waveOpacity="0.8",t.colorOpacitySecondary="0.16",t.colorOpacitySecondaryHover="0.2",t.colorOpacitySecondaryPressed="0.12",t}},L1={titleFontSize:"22px"};function F1(e){const{borderRadius:t,fontSize:r,lineHeight:n,textColor2:o,textColor1:i,textColorDisabled:a,dividerColor:s,fontWeightStrong:l,primaryColor:c,baseColor:u,hoverColor:d,cardColor:m,modalColor:p,popoverColor:g}=e;return Object.assign(Object.assign({},L1),{borderRadius:t,borderColor:ue(m,s),borderColorModal:ue(p,s),borderColorPopover:ue(g,s),textColor:o,titleFontWeight:l,titleTextColor:i,dayTextColor:a,fontSize:r,lineHeight:n,dateColorCurrent:c,dateTextColorCurrent:u,cellColorHover:ue(m,d),cellColorHoverModal:ue(p,d),cellColorHoverPopover:ue(g,d),cellColor:m,cellColorModal:p,cellColorPopover:g,barColor:c})}const N1={name:"Calendar",common:X,peers:{Button:ht},self:F1},B1={paddingSmall:"12px 16px 12px",paddingMedium:"19px 24px 20px",paddingLarge:"23px 32px 24px",paddingHuge:"27px 40px 28px",titleFontSizeSmall:"16px",titleFontSizeMedium:"18px",titleFontSizeLarge:"18px",titleFontSizeHuge:"18px",closeIconSize:"18px",closeSize:"22px"};function H1(e){const{primaryColor:t,borderRadius:r,lineHeight:n,fontSize:o,cardColor:i,textColor2:a,textColor1:s,dividerColor:l,fontWeightStrong:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,closeColorHover:p,closeColorPressed:g,modalColor:h,boxShadow1:b,popoverColor:v,actionColor:x}=e;return Object.assign(Object.assign({},B1),{lineHeight:n,color:i,colorModal:h,colorPopover:v,colorTarget:t,colorEmbedded:x,colorEmbeddedModal:x,colorEmbeddedPopover:x,textColor:a,titleTextColor:s,borderColor:l,actionColor:x,titleFontWeight:c,closeColorHover:p,closeColorPressed:g,closeBorderRadius:r,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,fontSizeSmall:o,fontSizeMedium:o,fontSizeLarge:o,fontSizeHuge:o,boxShadow:b,borderRadius:r})}const wu={name:"Card",common:X,self(e){const t=H1(e),{cardColor:r,modalColor:n,popoverColor:o}=e;return t.colorEmbedded=r,t.colorEmbeddedModal=n,t.colorEmbeddedPopover=o,t}};function z1(){return{dotSize:"8px",dotColor:"rgba(255, 255, 255, .3)",dotColorActive:"rgba(255, 255, 255, 1)",dotColorFocus:"rgba(255, 255, 255, .5)",dotLineWidth:"16px",dotLineWidthActive:"24px",arrowColor:"#eee"}}const $1={name:"Carousel",common:X,self:z1},j1={sizeSmall:"14px",sizeMedium:"16px",sizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"};function U1(e){const{baseColor:t,inputColorDisabled:r,cardColor:n,modalColor:o,popoverColor:i,textColorDisabled:a,borderColor:s,primaryColor:l,textColor2:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:m,borderRadiusSmall:p,lineHeight:g}=e;return Object.assign(Object.assign({},j1),{labelLineHeight:g,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:m,borderRadius:p,color:t,colorChecked:l,colorDisabled:r,colorDisabledChecked:r,colorTableHeader:n,colorTableHeaderModal:o,colorTableHeaderPopover:i,checkMarkColor:t,checkMarkColorDisabled:a,checkMarkColorDisabledChecked:a,border:`1px solid ${s}`,borderDisabled:`1px solid ${s}`,borderDisabledChecked:`1px solid ${s}`,borderChecked:`1px solid ${l}`,borderFocus:`1px solid ${l}`,boxShadowFocus:`0 0 0 2px ${le(l,{alpha:.3})}`,textColor:c,textColorDisabled:a})}const tn={name:"Checkbox",common:X,self(e){const{cardColor:t}=e,r=U1(e);return r.color="#0000",r.checkMarkColor=t,r}};function W1(e){const{borderRadius:t,boxShadow2:r,popoverColor:n,textColor2:o,textColor3:i,primaryColor:a,textColorDisabled:s,dividerColor:l,hoverColor:c,fontSizeMedium:u,heightMedium:d}=e;return{menuBorderRadius:t,menuColor:n,menuBoxShadow:r,menuDividerColor:l,menuHeight:"calc(var(--n-option-height) * 6.6)",optionArrowColor:i,optionHeight:d,optionFontSize:u,optionColorHover:c,optionTextColor:o,optionTextColorActive:a,optionTextColorDisabled:s,optionCheckMarkColor:a,loadingColor:a,columnWidth:"180px"}}const V1={name:"Cascader",common:X,peers:{InternalSelectMenu:Vn,InternalSelection:ba,Scrollbar:lt,Checkbox:tn,Empty:vu},self:W1},Au={name:"Code",common:X,self(e){const{textColor2:t,fontSize:r,fontWeightStrong:n,textColor3:o}=e;return{textColor:t,fontSize:r,fontWeightStrong:n,"mono-3":"#5c6370","hue-1":"#56b6c2","hue-2":"#61aeee","hue-3":"#c678dd","hue-4":"#98c379","hue-5":"#e06c75","hue-5-2":"#be5046","hue-6":"#d19a66","hue-6-2":"#e6c07b",lineNumberTextColor:o}}};function Eu(e){const{fontWeight:t,textColor1:r,textColor2:n,textColorDisabled:o,dividerColor:i,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:t,dividerColor:i,titleTextColor:r,titleTextColorDisabled:o,fontSize:a,textColor:n,arrowColor:n,arrowColorDisabled:o,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const G1={common:Kt,self:Eu},q1={name:"Collapse",common:X,self:Eu},Y1=Xe("collapse","width: 100%;",[Xe("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[Qe("disabled",[ke("header","cursor: not-allowed;",[ke("header-main",`
 color: var(--n-title-text-color-disabled);
 `),Xe("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),Xe("collapse-item","margin-left: 32px;"),Ae("&:first-child","margin-top: 0;"),Ae("&:first-child >",[ke("header","padding-top: 0;")]),Qe("left-arrow-placement",[ke("header",[Xe("collapse-item-arrow","margin-right: 4px;")])]),Qe("right-arrow-placement",[ke("header",[Xe("collapse-item-arrow","margin-left: 4px;")])]),ke("content-wrapper",[ke("content-inner","padding-top: 16px;"),yu({duration:"0.15s"})]),Qe("active",[ke("header",[Qe("active",[Xe("collapse-item-arrow","transform: rotate(90deg);")])])]),Ae("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),Rc("disabled",[Qe("trigger-area-main",[ke("header",[ke("header-main","cursor: pointer;"),Xe("collapse-item-arrow","cursor: default;")])]),Qe("trigger-area-arrow",[ke("header",[Xe("collapse-item-arrow","cursor: pointer;")])]),Qe("trigger-area-extra",[ke("header",[ke("header-extra","cursor: pointer;")])])]),ke("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[ke("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),ke("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),Xe("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),K1=Object.assign(Object.assign({},Un.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Tu="n-collapse",Q1=Ye({name:"Collapse",props:K1,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:r,inlineThemeDisabled:n,mergedRtlRef:o}=No(e),i=De(e.defaultExpandedNames),a=Ce(()=>e.expandedNames),s=yh(a,i),l=Un("Collapse","-collapse",Y1,G1,e,r);function c(h){const{"onUpdate:expandedNames":b,onUpdateExpandedNames:v,onExpandedNamesChange:x}=e;v&&fn(v,h),b&&fn(b,h),x&&fn(x,h),i.value=h}function u(h){const{onItemHeaderClick:b}=e;b&&fn(b,h)}function d(h,b,v){const{accordion:x}=e,{value:_}=s;if(x)h?(c([b]),u({name:b,expanded:!0,event:v})):(c([]),u({name:b,expanded:!1,event:v}));else if(!Array.isArray(_))c([b]),u({name:b,expanded:!0,event:v});else{const w=_.slice(),A=w.findIndex(k=>b===k);~A?(w.splice(A,1),c(w),u({name:b,expanded:!1,event:v})):(w.push(b),c(w),u({name:b,expanded:!0,event:v}))}}ar(Tu,{props:e,mergedClsPrefixRef:r,expandedNamesRef:s,slots:t,toggleItem:d});const m=ma("Collapse",o,r),p=Ce(()=>{const{common:{cubicBezierEaseInOut:h},self:{titleFontWeight:b,dividerColor:v,titlePadding:x,titleTextColor:_,titleTextColorDisabled:w,textColor:A,arrowColor:k,fontSize:N,titleFontSize:$,arrowColorDisabled:D,itemMargin:U}}=l.value;return{"--n-font-size":N,"--n-bezier":h,"--n-text-color":A,"--n-divider-color":v,"--n-title-padding":x,"--n-title-font-size":$,"--n-title-text-color":_,"--n-title-text-color-disabled":w,"--n-title-font-weight":b,"--n-arrow-color":k,"--n-arrow-color-disabled":D,"--n-item-margin":U}}),g=n?Nc("collapse",void 0,p,e):void 0;return{rtlEnabled:m,mergedTheme:l,mergedClsPrefix:r,cssVars:n?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),re("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),Z1=Ye({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Sh(Fn(e,"show"))}},render(){return re(du,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:r,clsPrefix:n}=this,o=t==="show"&&r,i=re("div",{class:`${n}-collapse-item__content-wrapper`},re("div",{class:`${n}-collapse-item__content-inner`},this.$slots));return o?Dl(i,[[up,e]]):e?i:null}})}}),J1={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},X1=Ye({name:"CollapseItem",props:J1,setup(e){const{mergedRtlRef:t}=No(e),r=Lc(),n=Ri(()=>{var d;return(d=e.name)!==null&&d!==void 0?d:r}),o=qe(Tu);o||Fc("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:i,props:a,mergedClsPrefixRef:s,slots:l}=o,c=Ce(()=>{const{value:d}=i;if(Array.isArray(d)){const{value:m}=n;return!~d.findIndex(p=>p===m)}else if(d){const{value:m}=n;return m!==d}return!0});return{rtlEnabled:ma("Collapse",t,s),collapseSlots:l,randomName:r,mergedClsPrefix:s,collapsed:c,triggerAreas:Fn(a,"triggerAreas"),mergedDisplayDirective:Ce(()=>{const{displayDirective:d}=e;return d||a.displayDirective}),arrowPlacement:Ce(()=>a.arrowPlacement),handleClick(d){let m="main";ms(d,"arrow")&&(m="arrow"),ms(d,"extra")&&(m="extra"),a.triggerAreas.includes(m)&&o&&!e.disabled&&o.toggleItem(c.value,n.value,d)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:r,collapsed:n,mergedDisplayDirective:o,mergedClsPrefix:i,disabled:a,triggerAreas:s}=this,l=vs(t.header,{collapsed:n},()=>[this.title]),c=t["header-extra"]||e["header-extra"],u=t.arrow||e.arrow;return re("div",{class:[`${i}-collapse-item`,`${i}-collapse-item--${r}-arrow-placement`,a&&`${i}-collapse-item--disabled`,!n&&`${i}-collapse-item--active`,s.map(d=>`${i}-collapse-item--trigger-area-${d}`)]},re("div",{class:[`${i}-collapse-item__header`,!n&&`${i}-collapse-item__header--active`]},re("div",{class:`${i}-collapse-item__header-main`,onClick:this.handleClick},r==="right"&&l,re("div",{class:`${i}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},vs(u,{collapsed:n},()=>[re(va,{clsPrefix:i},{default:()=>this.rtlEnabled?re($0,null):re(j0,null)})])),r==="left"&&l),Oh(c,{collapsed:n},d=>re("div",{class:`${i}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},d))),re(Z1,{clsPrefix:i,displayDirective:o,show:!n},t))}});function ev(e){const{cubicBezierEaseInOut:t}=e;return{bezier:t}}const tv={name:"CollapseTransition",common:X,self:ev};function rv(e){const{fontSize:t,boxShadow2:r,popoverColor:n,textColor2:o,borderRadius:i,borderColor:a,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:m,dividerColor:p}=e;return{panelFontSize:t,boxShadow:r,color:n,textColor:o,borderRadius:i,border:`1px solid ${a}`,heightSmall:s,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:m,dividerColor:p}}const nv={name:"ColorPicker",common:X,peers:{Input:bt,Button:ht},self:rv},ov={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Th("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},iv=Ye({name:"ConfigProvider",alias:["App"],props:ov,setup(e){const t=qe(cr,null),r=Ce(()=>{const{theme:h}=e;if(h===null)return;const b=t==null?void 0:t.mergedThemeRef.value;return h===void 0?b:b===void 0?h:Object.assign({},b,h)}),n=Ce(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const b=t==null?void 0:t.mergedThemeOverridesRef.value;return b===void 0?h:pn({},b,h)}}}),o=Ri(()=>{const{namespace:h}=e;return h===void 0?t==null?void 0:t.mergedNamespaceRef.value:h}),i=Ri(()=>{const{bordered:h}=e;return h===void 0?t==null?void 0:t.mergedBorderedRef.value:h}),a=Ce(()=>{const{icons:h}=e;return h===void 0?t==null?void 0:t.mergedIconsRef.value:h}),s=Ce(()=>{const{componentOptions:h}=e;return h!==void 0?h:t==null?void 0:t.mergedComponentPropsRef.value}),l=Ce(()=>{const{clsPrefix:h}=e;return h!==void 0?h:t?t.mergedClsPrefixRef.value:Oi}),c=Ce(()=>{var h;const{rtl:b}=e;if(b===void 0)return t==null?void 0:t.mergedRtlRef.value;const v={};for(const x of b)v[x.name]=gi(x),(h=x.peers)===null||h===void 0||h.forEach(_=>{_.name in v||(v[_.name]=gi(_))});return v}),u=Ce(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),m=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),p=e.styleMountTarget||(t==null?void 0:t.styleMountTarget),g=Ce(()=>{const{value:h}=r,{value:b}=n,v=b&&Object.keys(b).length!==0,x=h==null?void 0:h.name;return x?v?`${x}-${Rn(JSON.stringify(n.value))}`:x:v?Rn(JSON.stringify(n.value)):""});return ar(cr,{mergedThemeHashRef:g,mergedBreakpointsRef:u,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:i,mergedNamespaceRef:o,mergedClsPrefixRef:l,mergedLocaleRef:Ce(()=>{const{locale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedLocaleRef.value:h}),mergedDateLocaleRef:Ce(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedDateLocaleRef.value:h}),mergedHljsRef:Ce(()=>{const{hljs:h}=e;return h===void 0?t==null?void 0:t.mergedHljsRef.value:h}),mergedKatexRef:Ce(()=>{const{katex:h}=e;return h===void 0?t==null?void 0:t.mergedKatexRef.value:h}),mergedThemeRef:r,mergedThemeOverridesRef:n,inlineThemeDisabled:d||!1,preflightStyleDisabled:m||!1,styleMountTarget:p}),{mergedClsPrefix:l,mergedBordered:i,mergedNamespace:o,mergedTheme:r,mergedThemeOverrides:n}},render(){var e,t,r,n;return this.abstract?(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r):re(this.as||this.tag,{class:`${this.mergedClsPrefix||Oi}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),Iu={name:"Popselect",common:X,peers:{Popover:Tr,InternalSelectMenu:Vn}};function Ru(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}const VS={name:"Select",common:Kt,peers:{InternalSelection:p1,InternalSelectMenu:l1},self:Ru},Ou={name:"Select",common:X,peers:{InternalSelection:ba,InternalSelectMenu:Vn},self:Ru},av={itemPaddingSmall:"0 4px",itemMarginSmall:"0 0 0 8px",itemMarginSmallRtl:"0 8px 0 0",itemPaddingMedium:"0 4px",itemMarginMedium:"0 0 0 8px",itemMarginMediumRtl:"0 8px 0 0",itemPaddingLarge:"0 4px",itemMarginLarge:"0 0 0 8px",itemMarginLargeRtl:"0 8px 0 0",buttonIconSizeSmall:"14px",buttonIconSizeMedium:"16px",buttonIconSizeLarge:"18px",inputWidthSmall:"60px",selectWidthSmall:"unset",inputMarginSmall:"0 0 0 8px",inputMarginSmallRtl:"0 8px 0 0",selectMarginSmall:"0 0 0 8px",prefixMarginSmall:"0 8px 0 0",suffixMarginSmall:"0 0 0 8px",inputWidthMedium:"60px",selectWidthMedium:"unset",inputMarginMedium:"0 0 0 8px",inputMarginMediumRtl:"0 8px 0 0",selectMarginMedium:"0 0 0 8px",prefixMarginMedium:"0 8px 0 0",suffixMarginMedium:"0 0 0 8px",inputWidthLarge:"60px",selectWidthLarge:"unset",inputMarginLarge:"0 0 0 8px",inputMarginLargeRtl:"0 8px 0 0",selectMarginLarge:"0 0 0 8px",prefixMarginLarge:"0 8px 0 0",suffixMarginLarge:"0 0 0 8px"};function sv(e){const{textColor2:t,primaryColor:r,primaryColorHover:n,primaryColorPressed:o,inputColorDisabled:i,textColorDisabled:a,borderColor:s,borderRadius:l,fontSizeTiny:c,fontSizeSmall:u,fontSizeMedium:d,heightTiny:m,heightSmall:p,heightMedium:g}=e;return Object.assign(Object.assign({},av),{buttonColor:"#0000",buttonColorHover:"#0000",buttonColorPressed:"#0000",buttonBorder:`1px solid ${s}`,buttonBorderHover:`1px solid ${s}`,buttonBorderPressed:`1px solid ${s}`,buttonIconColor:t,buttonIconColorHover:t,buttonIconColorPressed:t,itemTextColor:t,itemTextColorHover:n,itemTextColorPressed:o,itemTextColorActive:r,itemTextColorDisabled:a,itemColor:"#0000",itemColorHover:"#0000",itemColorPressed:"#0000",itemColorActive:"#0000",itemColorActiveHover:"#0000",itemColorDisabled:i,itemBorder:"1px solid #0000",itemBorderHover:"1px solid #0000",itemBorderPressed:"1px solid #0000",itemBorderActive:`1px solid ${r}`,itemBorderDisabled:`1px solid ${s}`,itemBorderRadius:l,itemSizeSmall:m,itemSizeMedium:p,itemSizeLarge:g,itemFontSizeSmall:c,itemFontSizeMedium:u,itemFontSizeLarge:d,jumperFontSizeSmall:c,jumperFontSizeMedium:u,jumperFontSizeLarge:d,jumperTextColor:t,jumperTextColorDisabled:a})}const Du={name:"Pagination",common:X,peers:{Select:Ou,Input:bt,Popselect:Iu},self(e){const{primaryColor:t,opacity3:r}=e,n=le(t,{alpha:Number(r)}),o=sv(e);return o.itemBorderActive=`1px solid ${n}`,o.itemBorderDisabled="1px solid #0000",o}},lv={padding:"4px 0",optionIconSizeSmall:"14px",optionIconSizeMedium:"16px",optionIconSizeLarge:"16px",optionIconSizeHuge:"18px",optionSuffixWidthSmall:"14px",optionSuffixWidthMedium:"14px",optionSuffixWidthLarge:"16px",optionSuffixWidthHuge:"16px",optionIconSuffixWidthSmall:"32px",optionIconSuffixWidthMedium:"32px",optionIconSuffixWidthLarge:"36px",optionIconSuffixWidthHuge:"36px",optionPrefixWidthSmall:"14px",optionPrefixWidthMedium:"14px",optionPrefixWidthLarge:"16px",optionPrefixWidthHuge:"16px",optionIconPrefixWidthSmall:"36px",optionIconPrefixWidthMedium:"36px",optionIconPrefixWidthLarge:"40px",optionIconPrefixWidthHuge:"40px"};function cv(e){const{primaryColor:t,textColor2:r,dividerColor:n,hoverColor:o,popoverColor:i,invertedColor:a,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,heightSmall:m,heightMedium:p,heightLarge:g,heightHuge:h,textColor3:b,opacityDisabled:v}=e;return Object.assign(Object.assign({},lv),{optionHeightSmall:m,optionHeightMedium:p,optionHeightLarge:g,optionHeightHuge:h,borderRadius:s,fontSizeSmall:l,fontSizeMedium:c,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:r,optionTextColorHover:r,optionTextColorActive:t,optionTextColorChildActive:t,color:i,dividerColor:n,suffixColor:r,prefixColor:r,optionColorHover:o,optionColorActive:le(t,{alpha:.1}),groupHeaderTextColor:b,optionTextColorInverted:"#BBB",optionTextColorHoverInverted:"#FFF",optionTextColorActiveInverted:"#FFF",optionTextColorChildActiveInverted:"#FFF",colorInverted:a,dividerColorInverted:"#BBB",suffixColorInverted:"#BBB",prefixColorInverted:"#BBB",optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:"#AAA",optionOpacityDisabled:v})}const Ca={name:"Dropdown",common:X,peers:{Popover:Tr},self(e){const{primaryColorSuppl:t,primaryColor:r,popoverColor:n}=e,o=cv(e);return o.colorInverted=n,o.optionColorActive=le(r,{alpha:.15}),o.optionColorActiveInverted=t,o.optionColorHoverInverted=t,o}},uv={padding:"8px 14px"},$o={name:"Tooltip",common:X,peers:{Popover:Tr},self(e){const{borderRadius:t,boxShadow2:r,popoverColor:n,textColor2:o}=e;return Object.assign(Object.assign({},uv),{borderRadius:t,boxShadow:r,color:n,textColor:o})}},ku={name:"Ellipsis",common:X,peers:{Tooltip:$o}},dv={radioSizeSmall:"14px",radioSizeMedium:"16px",radioSizeLarge:"18px",labelPadding:"0 8px",labelFontWeight:"400"},Mu={name:"Radio",common:X,self(e){const{borderColor:t,primaryColor:r,baseColor:n,textColorDisabled:o,inputColorDisabled:i,textColor2:a,opacityDisabled:s,borderRadius:l,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,heightSmall:m,heightMedium:p,heightLarge:g,lineHeight:h}=e;return Object.assign(Object.assign({},dv),{labelLineHeight:h,buttonHeightSmall:m,buttonHeightMedium:p,buttonHeightLarge:g,fontSizeSmall:c,fontSizeMedium:u,fontSizeLarge:d,boxShadow:`inset 0 0 0 1px ${t}`,boxShadowActive:`inset 0 0 0 1px ${r}`,boxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${le(r,{alpha:.3})}`,boxShadowHover:`inset 0 0 0 1px ${r}`,boxShadowDisabled:`inset 0 0 0 1px ${t}`,color:"#0000",colorDisabled:i,colorActive:"#0000",textColor:a,textColorDisabled:o,dotColorActive:r,dotColorDisabled:t,buttonBorderColor:t,buttonBorderColorActive:r,buttonBorderColorHover:r,buttonColor:"#0000",buttonColorActive:r,buttonTextColor:a,buttonTextColorActive:n,buttonTextColorHover:r,opacityDisabled:s,buttonBoxShadowFocus:`inset 0 0 0 1px ${r}, 0 0 0 2px ${le(r,{alpha:.3})}`,buttonBoxShadowHover:`inset 0 0 0 1px ${r}`,buttonBoxShadow:"inset 0 0 0 1px #0000",buttonBorderRadius:l})}},fv={thPaddingSmall:"8px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"8px",tdPaddingMedium:"12px",tdPaddingLarge:"12px",sorterSize:"15px",resizableContainerSize:"8px",resizableSize:"2px",filterSize:"15px",paginationMargin:"12px 0 0 0",emptyPadding:"48px 0",actionPadding:"8px 12px",actionButtonMargin:"0 8px 0 0"};function pv(e){const{cardColor:t,modalColor:r,popoverColor:n,textColor2:o,textColor1:i,tableHeaderColor:a,tableColorHover:s,iconColor:l,primaryColor:c,fontWeightStrong:u,borderRadius:d,lineHeight:m,fontSizeSmall:p,fontSizeMedium:g,fontSizeLarge:h,dividerColor:b,heightSmall:v,opacityDisabled:x,tableColorStriped:_}=e;return Object.assign(Object.assign({},fv),{actionDividerColor:b,lineHeight:m,borderRadius:d,fontSizeSmall:p,fontSizeMedium:g,fontSizeLarge:h,borderColor:ue(t,b),tdColorHover:ue(t,s),tdColorSorting:ue(t,s),tdColorStriped:ue(t,_),thColor:ue(t,a),thColorHover:ue(ue(t,a),s),thColorSorting:ue(ue(t,a),s),tdColor:t,tdTextColor:o,thTextColor:i,thFontWeight:u,thButtonColorHover:s,thIconColor:l,thIconColorActive:c,borderColorModal:ue(r,b),tdColorHoverModal:ue(r,s),tdColorSortingModal:ue(r,s),tdColorStripedModal:ue(r,_),thColorModal:ue(r,a),thColorHoverModal:ue(ue(r,a),s),thColorSortingModal:ue(ue(r,a),s),tdColorModal:r,borderColorPopover:ue(n,b),tdColorHoverPopover:ue(n,s),tdColorSortingPopover:ue(n,s),tdColorStripedPopover:ue(n,_),thColorPopover:ue(n,a),thColorHoverPopover:ue(ue(n,a),s),thColorSortingPopover:ue(ue(n,a),s),tdColorPopover:n,boxShadowBefore:"inset -12px 0 8px -12px rgba(0, 0, 0, .18)",boxShadowAfter:"inset 12px 0 8px -12px rgba(0, 0, 0, .18)",loadingColor:c,loadingSize:v,opacityLoading:x})}const hv={name:"DataTable",common:X,peers:{Button:ht,Checkbox:tn,Radio:Mu,Pagination:Du,Scrollbar:lt,Empty:Er,Popover:Tr,Ellipsis:ku,Dropdown:Ca},self(e){const t=pv(e);return t.boxShadowAfter="inset 12px 0 8px -12px rgba(0, 0, 0, .36)",t.boxShadowBefore="inset -12px 0 8px -12px rgba(0, 0, 0, .36)",t}};function mv(e){const{textColorBase:t,opacity1:r,opacity2:n,opacity3:o,opacity4:i,opacity5:a}=e;return{color:t,opacity1Depth:r,opacity2Depth:n,opacity3Depth:o,opacity4Depth:i,opacity5Depth:a}}const gv={name:"Icon",common:X,self:mv},vv={itemFontSize:"12px",itemHeight:"36px",itemWidth:"52px",panelActionPadding:"8px 0"};function bv(e){const{popoverColor:t,textColor2:r,primaryColor:n,hoverColor:o,dividerColor:i,opacityDisabled:a,boxShadow2:s,borderRadius:l,iconColor:c,iconColorDisabled:u}=e;return Object.assign(Object.assign({},vv),{panelColor:t,panelBoxShadow:s,panelDividerColor:i,itemTextColor:r,itemTextColorActive:n,itemColorHover:o,itemOpacityDisabled:a,itemBorderRadius:l,borderRadius:l,iconColor:c,iconColorDisabled:u})}const Lu={name:"TimePicker",common:X,peers:{Scrollbar:lt,Button:ht,Input:bt},self:bv},Cv={itemSize:"24px",itemCellWidth:"38px",itemCellHeight:"32px",scrollItemWidth:"80px",scrollItemHeight:"40px",panelExtraFooterPadding:"8px 12px",panelActionPadding:"8px 12px",calendarTitlePadding:"0",calendarTitleHeight:"28px",arrowSize:"14px",panelHeaderPadding:"8px 12px",calendarDaysHeight:"32px",calendarTitleGridTempateColumns:"28px 28px 1fr 28px 28px",calendarLeftPaddingDate:"6px 12px 4px 12px",calendarLeftPaddingDatetime:"4px 12px",calendarLeftPaddingDaterange:"6px 12px 4px 12px",calendarLeftPaddingDatetimerange:"4px 12px",calendarLeftPaddingMonth:"0",calendarLeftPaddingYear:"0",calendarLeftPaddingQuarter:"0",calendarLeftPaddingMonthrange:"0",calendarLeftPaddingQuarterrange:"0",calendarLeftPaddingYearrange:"0",calendarLeftPaddingWeek:"6px 12px 4px 12px",calendarRightPaddingDate:"6px 12px 4px 12px",calendarRightPaddingDatetime:"4px 12px",calendarRightPaddingDaterange:"6px 12px 4px 12px",calendarRightPaddingDatetimerange:"4px 12px",calendarRightPaddingMonth:"0",calendarRightPaddingYear:"0",calendarRightPaddingQuarter:"0",calendarRightPaddingMonthrange:"0",calendarRightPaddingQuarterrange:"0",calendarRightPaddingYearrange:"0",calendarRightPaddingWeek:"0"};function xv(e){const{hoverColor:t,fontSize:r,textColor2:n,textColorDisabled:o,popoverColor:i,primaryColor:a,borderRadiusSmall:s,iconColor:l,iconColorDisabled:c,textColor1:u,dividerColor:d,boxShadow2:m,borderRadius:p,fontWeightStrong:g}=e;return Object.assign(Object.assign({},Cv),{itemFontSize:r,calendarDaysFontSize:r,calendarTitleFontSize:r,itemTextColor:n,itemTextColorDisabled:o,itemTextColorActive:i,itemTextColorCurrent:a,itemColorIncluded:le(a,{alpha:.1}),itemColorHover:t,itemColorDisabled:t,itemColorActive:a,itemBorderRadius:s,panelColor:i,panelTextColor:n,arrowColor:l,calendarTitleTextColor:u,calendarTitleColorHover:t,calendarDaysTextColor:n,panelHeaderDividerColor:d,calendarDaysDividerColor:d,calendarDividerColor:d,panelActionDividerColor:d,panelBoxShadow:m,panelBorderRadius:p,calendarTitleFontWeight:g,scrollItemBorderRadius:p,iconColor:l,iconColorDisabled:c})}const Sv={name:"DatePicker",common:X,peers:{Input:bt,Button:ht,TimePicker:Lu,Scrollbar:lt},self(e){const{popoverColor:t,hoverColor:r,primaryColor:n}=e,o=xv(e);return o.itemColorDisabled=ue(t,r),o.itemColorIncluded=le(n,{alpha:.15}),o.itemColorHover=ue(t,r),o}},yv={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function _v(e){const{tableHeaderColor:t,textColor2:r,textColor1:n,cardColor:o,modalColor:i,popoverColor:a,dividerColor:s,borderRadius:l,fontWeightStrong:c,lineHeight:u,fontSizeSmall:d,fontSizeMedium:m,fontSizeLarge:p}=e;return Object.assign(Object.assign({},yv),{lineHeight:u,fontSizeSmall:d,fontSizeMedium:m,fontSizeLarge:p,titleTextColor:n,thColor:ue(o,t),thColorModal:ue(i,t),thColorPopover:ue(a,t),thTextColor:n,thFontWeight:c,tdTextColor:r,tdColor:o,tdColorModal:i,tdColorPopover:a,borderColor:ue(o,s),borderColorModal:ue(i,s),borderColorPopover:ue(a,s),borderRadius:l})}const Pv={name:"Descriptions",common:X,self:_v},wv={titleFontSize:"18px",padding:"16px 28px 20px 28px",iconSize:"28px",actionSpace:"12px",contentMargin:"8px 0 16px 0",iconMargin:"0 4px 0 0",iconMarginIconTop:"4px 0 8px 0",closeSize:"22px",closeIconSize:"18px",closeMargin:"20px 26px 0 0",closeMarginIconTop:"10px 16px 0 0"};function Av(e){const{textColor1:t,textColor2:r,modalColor:n,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,infoColor:c,successColor:u,warningColor:d,errorColor:m,primaryColor:p,dividerColor:g,borderRadius:h,fontWeightStrong:b,lineHeight:v,fontSize:x}=e;return Object.assign(Object.assign({},wv),{fontSize:x,lineHeight:v,border:`1px solid ${g}`,titleTextColor:t,textColor:r,color:n,closeColorHover:s,closeColorPressed:l,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:a,closeBorderRadius:h,iconColor:p,iconColorInfo:c,iconColorSuccess:u,iconColorWarning:d,iconColorError:m,borderRadius:h,titleFontWeight:b})}const Fu={name:"Dialog",common:X,peers:{Button:ht},self:Av};function Ev(e){const{modalColor:t,textColor2:r,boxShadow3:n}=e;return{color:t,textColor:r,boxShadow:n}}const Tv={name:"Modal",common:X,peers:{Scrollbar:lt,Dialog:Fu,Card:wu},self:Ev},Iv={name:"LoadingBar",common:X,self(e){const{primaryColor:t}=e;return{colorError:"red",colorLoading:t,height:"2px"}}},Rv="n-message-api",Nu="n-message-provider",Ov={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function Bu(e){const{textColor2:t,closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:o,infoColor:i,successColor:a,errorColor:s,warningColor:l,popoverColor:c,boxShadow2:u,primaryColor:d,lineHeight:m,borderRadius:p,closeColorHover:g,closeColorPressed:h}=e;return Object.assign(Object.assign({},Ov),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:i,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:d,closeColorHover:g,closeColorPressed:h,closeIconColor:r,closeIconColorHover:n,closeIconColorPressed:o,closeColorHoverInfo:g,closeColorPressedInfo:h,closeIconColorInfo:r,closeIconColorHoverInfo:n,closeIconColorPressedInfo:o,closeColorHoverSuccess:g,closeColorPressedSuccess:h,closeIconColorSuccess:r,closeIconColorHoverSuccess:n,closeIconColorPressedSuccess:o,closeColorHoverError:g,closeColorPressedError:h,closeIconColorError:r,closeIconColorHoverError:n,closeIconColorPressedError:o,closeColorHoverWarning:g,closeColorPressedWarning:h,closeIconColorWarning:r,closeIconColorHoverWarning:n,closeIconColorPressedWarning:o,closeColorHoverLoading:g,closeColorPressedLoading:h,closeIconColorLoading:r,closeIconColorHoverLoading:n,closeIconColorPressedLoading:o,loadingColor:d,lineHeight:m,borderRadius:p,border:"0"})}const Dv={common:Kt,self:Bu},kv={name:"Message",common:X,self:Bu},Hu={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},Mv=Ae([Xe("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[yu({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Xe("message",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 border: var(--n-border);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `,[ke("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),ke("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>Qe(`${e}-type`,[Ae("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),Ae("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[Ni()])]),ke("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[Ae("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Ae("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),Xe("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[Qe("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),Qe("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),Qe("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),Qe("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),Qe("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),Qe("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),Lv={info:()=>re(V0,null),success:()=>re(G0,null),warning:()=>re(q0,null),error:()=>re(W0,null),default:()=>null},Fv=Ye({name:"Message",props:Object.assign(Object.assign({},Hu),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:r}=No(e),{props:n,mergedClsPrefixRef:o}=qe(Nu),i=ma("Message",r,o),a=Un("Message","-message",Mv,Dv,n,o),s=Ce(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:u},self:{padding:d,margin:m,maxWidth:p,iconMargin:g,closeMargin:h,closeSize:b,iconSize:v,fontSize:x,lineHeight:_,borderRadius:w,border:A,iconColorInfo:k,iconColorSuccess:N,iconColorWarning:$,iconColorError:D,iconColorLoading:U,closeIconSize:J,closeBorderRadius:P,[Zt("textColor",c)]:B,[Zt("boxShadow",c)]:C,[Zt("color",c)]:W,[Zt("closeColorHover",c)]:ae,[Zt("closeColorPressed",c)]:q,[Zt("closeIconColor",c)]:ne,[Zt("closeIconColorPressed",c)]:Q,[Zt("closeIconColorHover",c)]:de}}=a.value;return{"--n-bezier":u,"--n-margin":m,"--n-padding":d,"--n-max-width":p,"--n-font-size":x,"--n-icon-margin":g,"--n-icon-size":v,"--n-close-icon-size":J,"--n-close-border-radius":P,"--n-close-size":b,"--n-close-margin":h,"--n-text-color":B,"--n-color":W,"--n-box-shadow":C,"--n-icon-color-info":k,"--n-icon-color-success":N,"--n-icon-color-warning":$,"--n-icon-color-error":D,"--n-icon-color-loading":U,"--n-close-color-hover":ae,"--n-close-color-pressed":q,"--n-close-icon-color":ne,"--n-close-icon-color-pressed":Q,"--n-close-icon-color-hover":de,"--n-line-height":_,"--n-border-radius":w,"--n-border":A}}),l=t?Nc("message",Ce(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:o,rtlEnabled:i,messageProviderProps:n,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:n.placement}},render(){const{render:e,type:t,closable:r,content:n,mergedClsPrefix:o,cssVars:i,themeClass:a,onRender:s,icon:l,handleClose:c,showIcon:u}=this;s==null||s();let d;return re("div",{class:[`${o}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},i]},e?e(this.$props):re("div",{class:[`${o}-message ${o}-message--${t}-type`,this.rtlEnabled&&`${o}-message--rtl`]},(d=Nv(l,t,o))&&u?re("div",{class:`${o}-message__icon ${o}-message__icon--${t}-type`},re(uu,null,{default:()=>d})):null,re("div",{class:`${o}-message__content`},Rh(n)),r?re(Q0,{clsPrefix:o,class:`${o}-message__close`,onClick:c,absolute:!0}):null))}});function Nv(e,t,r){if(typeof e=="function")return e();{const n=t==="loading"?re(X0,{clsPrefix:r,strokeWidth:24,scale:.85}):Lv[t]();return n?re(va,{clsPrefix:r,key:t},{default:()=>n}):null}}const Bv=Ye({name:"MessageEnvironment",props:Object.assign(Object.assign({},Hu),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const r=De(!0);Kr(()=>{n()});function n(){const{duration:u}=e;u&&(t=window.setTimeout(a,u))}function o(u){u.currentTarget===u.target&&t!==null&&(window.clearTimeout(t),t=null)}function i(u){u.currentTarget===u.target&&n()}function a(){const{onHide:u}=e;r.value=!1,t&&(window.clearTimeout(t),t=null),u&&u()}function s(){const{onClose:u}=e;u&&u(),a()}function l(){const{onAfterLeave:u,onInternalAfterLeave:d,onAfterHide:m,internalKey:p}=e;u&&u(),d&&d(p),m&&m()}function c(){a()}return{show:r,hide:a,handleClose:s,handleAfterLeave:l,handleMouseleave:i,handleMouseenter:o,deactivate:c}},render(){return re(du,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?re(Fv,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),Hv=Object.assign(Object.assign({},Un.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),zv=Ye({name:"MessageProvider",props:Hv,setup(e){const{mergedClsPrefixRef:t}=No(e),r=De([]),n=De({}),o={create(l,c){return i(l,Object.assign({type:"default"},c))},info(l,c){return i(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return i(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return i(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return i(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return i(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:s};ar(Nu,{props:e,mergedClsPrefixRef:t}),ar(Rv,o);function i(l,c){const u=Lc(),d=Ln(Object.assign(Object.assign({},c),{content:l,key:u,destroy:()=>{var p;(p=n.value[u])===null||p===void 0||p.hide()}})),{max:m}=e;return m&&r.value.length>=m&&r.value.shift(),r.value.push(d),d}function a(l){r.value.splice(r.value.findIndex(c=>c.key===l),1),delete n.value[l]}function s(){Object.values(n.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:n,messageList:r,handleAfterLeave:a},o)},render(){var e,t,r;return re(Ve,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?re(tf,{to:(r=this.to)!==null&&r!==void 0?r:"body"},re("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(n=>re(Bv,Object.assign({ref:o=>{o&&(this.messageRefs[n.key]=o)},internalKey:n.key,onInternalAfterLeave:this.handleAfterLeave},Ih(n,["destroy"],void 0),{duration:n.duration===void 0?this.duration:n.duration,keepAliveOnHover:n.keepAliveOnHover===void 0?this.keepAliveOnHover:n.keepAliveOnHover,closable:n.closable===void 0?this.closable:n.closable}))))):null)}}),$v={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"};function jv(e){const{textColor2:t,successColor:r,infoColor:n,warningColor:o,errorColor:i,popoverColor:a,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeColorHover:u,closeColorPressed:d,textColor1:m,textColor3:p,borderRadius:g,fontWeightStrong:h,boxShadow2:b,lineHeight:v,fontSize:x}=e;return Object.assign(Object.assign({},$v),{borderRadius:g,lineHeight:v,fontSize:x,headerFontWeight:h,iconColor:t,iconColorSuccess:r,iconColorInfo:n,iconColorWarning:o,iconColorError:i,color:a,textColor:t,closeIconColor:s,closeIconColorHover:l,closeIconColorPressed:c,closeBorderRadius:g,closeColorHover:u,closeColorPressed:d,headerTextColor:m,descriptionTextColor:p,actionTextColor:t,boxShadow:b})}const Uv={name:"Notification",common:X,peers:{Scrollbar:lt},self:jv};function Wv(e){const{textColor1:t,dividerColor:r,fontWeightStrong:n}=e;return{textColor:t,color:r,fontWeight:n}}const Vv={name:"Divider",common:X,self:Wv};function Gv(e){const{modalColor:t,textColor1:r,textColor2:n,boxShadow3:o,lineHeight:i,fontWeightStrong:a,dividerColor:s,closeColorHover:l,closeColorPressed:c,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,borderRadius:p,primaryColorHover:g}=e;return{bodyPadding:"16px 24px",borderRadius:p,headerPadding:"16px 24px",footerPadding:"16px 24px",color:t,textColor:n,titleTextColor:r,titleFontSize:"18px",titleFontWeight:a,boxShadow:o,lineHeight:i,headerBorderBottom:`1px solid ${s}`,footerBorderTop:`1px solid ${s}`,closeIconColor:u,closeIconColorHover:d,closeIconColorPressed:m,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:p,resizableTriggerColorHover:g}}const qv={name:"Drawer",common:X,peers:{Scrollbar:lt},self:Gv},Yv={actionMargin:"0 0 0 20px",actionMarginRtl:"0 20px 0 0"},Kv={name:"DynamicInput",common:X,peers:{Input:bt,Button:ht},self(){return Yv}},Qv={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},zu={name:"Space",self(){return Qv}},Zv={name:"DynamicTags",common:X,peers:{Input:bt,Button:ht,Tag:xu,Space:zu},self(){return{inputWidth:"64px"}}},Jv={name:"Element",common:X},Xv={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},eb={name:"Flex",self(){return Xv}},tb={name:"ButtonGroup",common:X},rb={feedbackPadding:"4px 0 0 2px",feedbackHeightSmall:"24px",feedbackHeightMedium:"24px",feedbackHeightLarge:"26px",feedbackFontSizeSmall:"13px",feedbackFontSizeMedium:"14px",feedbackFontSizeLarge:"14px",labelFontSizeLeftSmall:"14px",labelFontSizeLeftMedium:"14px",labelFontSizeLeftLarge:"15px",labelFontSizeTopSmall:"13px",labelFontSizeTopMedium:"14px",labelFontSizeTopLarge:"14px",labelHeightSmall:"24px",labelHeightMedium:"26px",labelHeightLarge:"28px",labelPaddingVertical:"0 0 6px 2px",labelPaddingHorizontal:"0 12px 0 0",labelTextAlignVertical:"left",labelTextAlignHorizontal:"right",labelFontWeight:"400"};function nb(e){const{heightSmall:t,heightMedium:r,heightLarge:n,textColor1:o,errorColor:i,warningColor:a,lineHeight:s,textColor3:l}=e;return Object.assign(Object.assign({},rb),{blankHeightSmall:t,blankHeightMedium:r,blankHeightLarge:n,lineHeight:s,labelTextColor:o,asteriskColor:i,feedbackTextColorError:i,feedbackTextColorWarning:a,feedbackTextColor:l})}const ob={name:"Form",common:X,self:nb},ib={name:"GradientText",common:X,self(e){const{primaryColor:t,successColor:r,warningColor:n,errorColor:o,infoColor:i,primaryColorSuppl:a,successColorSuppl:s,warningColorSuppl:l,errorColorSuppl:c,infoColorSuppl:u,fontWeightStrong:d}=e;return{fontWeight:d,rotate:"252deg",colorStartPrimary:t,colorEndPrimary:a,colorStartInfo:i,colorEndInfo:u,colorStartWarning:n,colorEndWarning:l,colorStartError:o,colorEndError:c,colorStartSuccess:r,colorEndSuccess:s}}},ab={name:"InputNumber",common:X,peers:{Button:ht,Input:bt},self(e){const{textColorDisabled:t}=e;return{iconColorDisabled:t}}};function sb(){return{inputWidthSmall:"24px",inputWidthMedium:"30px",inputWidthLarge:"36px",gapSmall:"8px",gapMedium:"8px",gapLarge:"8px"}}const lb={name:"InputOtp",common:X,peers:{Input:bt},self:sb},cb={name:"Layout",common:X,peers:{Scrollbar:lt},self(e){const{textColor2:t,bodyColor:r,popoverColor:n,cardColor:o,dividerColor:i,scrollbarColor:a,scrollbarColorHover:s}=e;return{textColor:t,textColorInverted:t,color:r,colorEmbedded:r,headerColor:o,headerColorInverted:o,footerColor:o,footerColorInverted:o,headerBorderColor:i,headerBorderColorInverted:i,footerBorderColor:i,footerBorderColorInverted:i,siderBorderColor:i,siderBorderColorInverted:i,siderColor:o,siderColorInverted:o,siderToggleButtonBorder:"1px solid transparent",siderToggleButtonColor:n,siderToggleButtonIconColor:t,siderToggleButtonIconColorInverted:t,siderToggleBarColor:ue(r,a),siderToggleBarColorHover:ue(r,s),__invertScrollbar:"false"}}},ub={name:"Row",common:X};function db(e){const{textColor2:t,cardColor:r,modalColor:n,popoverColor:o,dividerColor:i,borderRadius:a,fontSize:s,hoverColor:l}=e;return{textColor:t,color:r,colorHover:l,colorModal:n,colorHoverModal:ue(n,l),colorPopover:o,colorHoverPopover:ue(o,l),borderColor:i,borderColorModal:ue(n,i),borderColorPopover:ue(o,i),borderRadius:a,fontSize:s}}const fb={name:"List",common:X,self:db},pb={name:"Log",common:X,peers:{Scrollbar:lt,Code:Au},self(e){const{textColor2:t,inputColor:r,fontSize:n,primaryColor:o}=e;return{loaderFontSize:n,loaderTextColor:t,loaderColor:r,loaderBorder:"1px solid #0000",loadingColor:o}}},hb={name:"Mention",common:X,peers:{InternalSelectMenu:Vn,Input:bt},self(e){const{boxShadow2:t}=e;return{menuBoxShadow:t}}};function mb(e,t,r,n){return{itemColorHoverInverted:"#0000",itemColorActiveInverted:t,itemColorActiveHoverInverted:t,itemColorActiveCollapsedInverted:t,itemTextColorInverted:e,itemTextColorHoverInverted:r,itemTextColorChildActiveInverted:r,itemTextColorChildActiveHoverInverted:r,itemTextColorActiveInverted:r,itemTextColorActiveHoverInverted:r,itemTextColorHorizontalInverted:e,itemTextColorHoverHorizontalInverted:r,itemTextColorChildActiveHorizontalInverted:r,itemTextColorChildActiveHoverHorizontalInverted:r,itemTextColorActiveHorizontalInverted:r,itemTextColorActiveHoverHorizontalInverted:r,itemIconColorInverted:e,itemIconColorHoverInverted:r,itemIconColorActiveInverted:r,itemIconColorActiveHoverInverted:r,itemIconColorChildActiveInverted:r,itemIconColorChildActiveHoverInverted:r,itemIconColorCollapsedInverted:e,itemIconColorHorizontalInverted:e,itemIconColorHoverHorizontalInverted:r,itemIconColorActiveHorizontalInverted:r,itemIconColorActiveHoverHorizontalInverted:r,itemIconColorChildActiveHorizontalInverted:r,itemIconColorChildActiveHoverHorizontalInverted:r,arrowColorInverted:e,arrowColorHoverInverted:r,arrowColorActiveInverted:r,arrowColorActiveHoverInverted:r,arrowColorChildActiveInverted:r,arrowColorChildActiveHoverInverted:r,groupTextColorInverted:n}}function gb(e){const{borderRadius:t,textColor3:r,primaryColor:n,textColor2:o,textColor1:i,fontSize:a,dividerColor:s,hoverColor:l,primaryColorHover:c}=e;return Object.assign({borderRadius:t,color:"#0000",groupTextColor:r,itemColorHover:l,itemColorActive:le(n,{alpha:.1}),itemColorActiveHover:le(n,{alpha:.1}),itemColorActiveCollapsed:le(n,{alpha:.1}),itemTextColor:o,itemTextColorHover:o,itemTextColorActive:n,itemTextColorActiveHover:n,itemTextColorChildActive:n,itemTextColorChildActiveHover:n,itemTextColorHorizontal:o,itemTextColorHoverHorizontal:c,itemTextColorActiveHorizontal:n,itemTextColorActiveHoverHorizontal:n,itemTextColorChildActiveHorizontal:n,itemTextColorChildActiveHoverHorizontal:n,itemIconColor:i,itemIconColorHover:i,itemIconColorActive:n,itemIconColorActiveHover:n,itemIconColorChildActive:n,itemIconColorChildActiveHover:n,itemIconColorCollapsed:i,itemIconColorHorizontal:i,itemIconColorHoverHorizontal:c,itemIconColorActiveHorizontal:n,itemIconColorActiveHoverHorizontal:n,itemIconColorChildActiveHorizontal:n,itemIconColorChildActiveHoverHorizontal:n,itemHeight:"42px",arrowColor:o,arrowColorHover:o,arrowColorActive:n,arrowColorActiveHover:n,arrowColorChildActive:n,arrowColorChildActiveHover:n,colorInverted:"#0000",borderColorHorizontal:"#0000",fontSize:a,dividerColor:s},mb("#BBB",n,"#FFF","#AAA"))}const vb={name:"Menu",common:X,peers:{Tooltip:$o,Dropdown:Ca},self(e){const{primaryColor:t,primaryColorSuppl:r}=e,n=gb(e);return n.itemColorActive=le(t,{alpha:.15}),n.itemColorActiveHover=le(t,{alpha:.15}),n.itemColorActiveCollapsed=le(t,{alpha:.15}),n.itemColorActiveInverted=r,n.itemColorActiveHoverInverted=r,n.itemColorActiveCollapsedInverted=r,n}},bb={titleFontSize:"18px",backSize:"22px"};function Cb(e){const{textColor1:t,textColor2:r,textColor3:n,fontSize:o,fontWeightStrong:i,primaryColorHover:a,primaryColorPressed:s}=e;return Object.assign(Object.assign({},bb),{titleFontWeight:i,fontSize:o,titleTextColor:t,backColor:r,backColorHover:a,backColorPressed:s,subtitleTextColor:n})}const xb={name:"PageHeader",common:X,self:Cb},Sb={iconSize:"22px"};function yb(e){const{fontSize:t,warningColor:r}=e;return Object.assign(Object.assign({},Sb),{fontSize:t,iconColor:r})}const _b={name:"Popconfirm",common:X,peers:{Button:ht,Popover:Tr},self:yb};function Pb(e){const{infoColor:t,successColor:r,warningColor:n,errorColor:o,textColor2:i,progressRailColor:a,fontSize:s,fontWeight:l}=e;return{fontSize:s,fontSizeCircle:"28px",fontWeightCircle:l,railColor:a,railHeight:"8px",iconSizeCircle:"36px",iconSizeLine:"18px",iconColor:t,iconColorInfo:t,iconColorSuccess:r,iconColorWarning:n,iconColorError:o,textColorCircle:i,textColorLineInner:"rgb(255, 255, 255)",textColorLineOuter:i,fillColor:t,fillColorInfo:t,fillColorSuccess:r,fillColorWarning:n,fillColorError:o,lineBgProcessing:"linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)"}}const $u={name:"Progress",common:X,self(e){const t=Pb(e);return t.textColorLineInner="rgb(0, 0, 0)",t.lineBgProcessing="linear-gradient(90deg, rgba(255, 255, 255, .3) 0%, rgba(255, 255, 255, .5) 100%)",t}},wb={name:"Rate",common:X,self(e){const{railColor:t}=e;return{itemColor:t,itemColorActive:"#CCAA33",itemSize:"20px",sizeSmall:"16px",sizeMedium:"20px",sizeLarge:"24px"}}},Ab={titleFontSizeSmall:"26px",titleFontSizeMedium:"32px",titleFontSizeLarge:"40px",titleFontSizeHuge:"48px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",iconSizeSmall:"64px",iconSizeMedium:"80px",iconSizeLarge:"100px",iconSizeHuge:"125px",iconColor418:void 0,iconColor404:void 0,iconColor403:void 0,iconColor500:void 0};function Eb(e){const{textColor2:t,textColor1:r,errorColor:n,successColor:o,infoColor:i,warningColor:a,lineHeight:s,fontWeightStrong:l}=e;return Object.assign(Object.assign({},Ab),{lineHeight:s,titleFontWeight:l,titleTextColor:r,textColor:t,iconColorError:n,iconColorSuccess:o,iconColorInfo:i,iconColorWarning:a})}const Tb={name:"Result",common:X,self:Eb},Ib={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"},Rb={name:"Slider",common:X,self(e){const t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:r,modalColor:n,primaryColorSuppl:o,popoverColor:i,textColor2:a,cardColor:s,borderRadius:l,fontSize:c,opacityDisabled:u}=e;return Object.assign(Object.assign({},Ib),{fontSize:c,markFontSize:c,railColor:r,railColorHover:r,fillColor:o,fillColorHover:o,opacityDisabled:u,handleColor:"#FFF",dotColor:s,dotColorModal:n,dotColorPopover:i,handleBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowHover:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowActive:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",handleBoxShadowFocus:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",indicatorColor:i,indicatorBoxShadow:t,indicatorTextColor:a,indicatorBorderRadius:l,dotBorder:`2px solid ${r}`,dotBorderActive:`2px solid ${o}`,dotBoxShadow:""})}};function Ob(e){const{opacityDisabled:t,heightTiny:r,heightSmall:n,heightMedium:o,heightLarge:i,heightHuge:a,primaryColor:s,fontSize:l}=e;return{fontSize:l,textColor:s,sizeTiny:r,sizeSmall:n,sizeMedium:o,sizeLarge:i,sizeHuge:a,color:s,opacitySpinning:t}}const Db={name:"Spin",common:X,self:Ob};function kb(e){const{textColor2:t,textColor3:r,fontSize:n,fontWeight:o}=e;return{labelFontSize:n,labelFontWeight:o,valueFontWeight:o,valueFontSize:"24px",labelTextColor:r,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}}const Mb={name:"Statistic",common:X,self:kb},Lb={stepHeaderFontSizeSmall:"14px",stepHeaderFontSizeMedium:"16px",indicatorIndexFontSizeSmall:"14px",indicatorIndexFontSizeMedium:"16px",indicatorSizeSmall:"22px",indicatorSizeMedium:"28px",indicatorIconSizeSmall:"14px",indicatorIconSizeMedium:"18px"};function Fb(e){const{fontWeightStrong:t,baseColor:r,textColorDisabled:n,primaryColor:o,errorColor:i,textColor1:a,textColor2:s}=e;return Object.assign(Object.assign({},Lb),{stepHeaderFontWeight:t,indicatorTextColorProcess:r,indicatorTextColorWait:n,indicatorTextColorFinish:o,indicatorTextColorError:i,indicatorBorderColorProcess:o,indicatorBorderColorWait:n,indicatorBorderColorFinish:o,indicatorBorderColorError:i,indicatorColorProcess:o,indicatorColorWait:"#0000",indicatorColorFinish:"#0000",indicatorColorError:"#0000",splitorColorProcess:n,splitorColorWait:n,splitorColorFinish:o,splitorColorError:n,headerTextColorProcess:a,headerTextColorWait:n,headerTextColorFinish:n,headerTextColorError:i,descriptionTextColorProcess:s,descriptionTextColorWait:n,descriptionTextColorFinish:n,descriptionTextColorError:i})}const Nb={name:"Steps",common:X,self:Fb},Bb={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"},Hb={name:"Switch",common:X,self(e){const{primaryColorSuppl:t,opacityDisabled:r,borderRadius:n,primaryColor:o,textColor2:i,baseColor:a}=e;return Object.assign(Object.assign({},Bb),{iconColor:a,textColor:i,loadingColor:t,opacityDisabled:r,railColor:"rgba(255, 255, 255, .20)",railColorActive:t,buttonBoxShadow:"0px 2px 4px 0 rgba(0, 0, 0, 0.4)",buttonColor:"#FFF",railBorderRadiusSmall:n,railBorderRadiusMedium:n,railBorderRadiusLarge:n,buttonBorderRadiusSmall:n,buttonBorderRadiusMedium:n,buttonBorderRadiusLarge:n,boxShadowFocus:`0 0 8px 0 ${le(o,{alpha:.3})}`})}},zb={thPaddingSmall:"6px",thPaddingMedium:"12px",thPaddingLarge:"12px",tdPaddingSmall:"6px",tdPaddingMedium:"12px",tdPaddingLarge:"12px"};function $b(e){const{dividerColor:t,cardColor:r,modalColor:n,popoverColor:o,tableHeaderColor:i,tableColorStriped:a,textColor1:s,textColor2:l,borderRadius:c,fontWeightStrong:u,lineHeight:d,fontSizeSmall:m,fontSizeMedium:p,fontSizeLarge:g}=e;return Object.assign(Object.assign({},zb),{fontSizeSmall:m,fontSizeMedium:p,fontSizeLarge:g,lineHeight:d,borderRadius:c,borderColor:ue(r,t),borderColorModal:ue(n,t),borderColorPopover:ue(o,t),tdColor:r,tdColorModal:n,tdColorPopover:o,tdColorStriped:ue(r,a),tdColorStripedModal:ue(n,a),tdColorStripedPopover:ue(o,a),thColor:ue(r,i),thColorModal:ue(n,i),thColorPopover:ue(o,i),thTextColor:s,tdTextColor:l,thFontWeight:u})}const jb={name:"Table",common:X,self:$b},Ub={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function Wb(e){const{textColor2:t,primaryColor:r,textColorDisabled:n,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,tabColor:c,baseColor:u,dividerColor:d,fontWeight:m,textColor1:p,borderRadius:g,fontSize:h,fontWeightStrong:b}=e;return Object.assign(Object.assign({},Ub),{colorSegment:c,tabFontSizeCard:h,tabTextColorLine:p,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:n,tabTextColorSegment:p,tabTextColorActiveSegment:t,tabTextColorHoverSegment:t,tabTextColorDisabledSegment:n,tabTextColorBar:p,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:n,tabTextColorCard:p,tabTextColorHoverCard:p,tabTextColorActiveCard:r,tabTextColorDisabledCard:n,barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:a,closeColorHover:s,closeColorPressed:l,closeBorderRadius:g,tabColor:c,tabColorSegment:u,tabBorderColor:d,tabFontWeightActive:m,tabFontWeight:m,tabBorderRadius:g,paneTextColor:t,fontWeightStrong:b})}const Vb={name:"Tabs",common:X,self(e){const t=Wb(e),{inputColor:r}=e;return t.colorSegment=r,t.tabColorSegment=r,t}};function Gb(e){const{textColor1:t,textColor2:r,fontWeightStrong:n,fontSize:o}=e;return{fontSize:o,titleTextColor:t,textColor:r,titleFontWeight:n}}const qb={name:"Thing",common:X,self:Gb},Yb={titleMarginMedium:"0 0 6px 0",titleMarginLarge:"-2px 0 6px 0",titleFontSizeMedium:"14px",titleFontSizeLarge:"16px",iconSizeMedium:"14px",iconSizeLarge:"14px"},Kb={name:"Timeline",common:X,self(e){const{textColor3:t,infoColorSuppl:r,errorColorSuppl:n,successColorSuppl:o,warningColorSuppl:i,textColor1:a,textColor2:s,railColor:l,fontWeightStrong:c,fontSize:u}=e;return Object.assign(Object.assign({},Yb),{contentFontSize:u,titleFontWeight:c,circleBorder:`2px solid ${t}`,circleBorderInfo:`2px solid ${r}`,circleBorderError:`2px solid ${n}`,circleBorderSuccess:`2px solid ${o}`,circleBorderWarning:`2px solid ${i}`,iconColor:t,iconColorInfo:r,iconColorError:n,iconColorSuccess:o,iconColorWarning:i,titleTextColor:a,contentTextColor:s,metaTextColor:t,lineColor:l})}},Qb={extraFontSizeSmall:"12px",extraFontSizeMedium:"12px",extraFontSizeLarge:"14px",titleFontSizeSmall:"14px",titleFontSizeMedium:"16px",titleFontSizeLarge:"16px",closeSize:"20px",closeIconSize:"16px",headerHeightSmall:"44px",headerHeightMedium:"44px",headerHeightLarge:"50px"},Zb={name:"Transfer",common:X,peers:{Checkbox:tn,Scrollbar:lt,Input:bt,Empty:Er,Button:ht},self(e){const{fontWeight:t,fontSizeLarge:r,fontSizeMedium:n,fontSizeSmall:o,heightLarge:i,heightMedium:a,borderRadius:s,inputColor:l,tableHeaderColor:c,textColor1:u,textColorDisabled:d,textColor2:m,textColor3:p,hoverColor:g,closeColorHover:h,closeColorPressed:b,closeIconColor:v,closeIconColorHover:x,closeIconColorPressed:_,dividerColor:w}=e;return Object.assign(Object.assign({},Qb),{itemHeightSmall:a,itemHeightMedium:a,itemHeightLarge:i,fontSizeSmall:o,fontSizeMedium:n,fontSizeLarge:r,borderRadius:s,dividerColor:w,borderColor:"#0000",listColor:l,headerColor:c,titleTextColor:u,titleTextColorDisabled:d,extraTextColor:p,extraTextColorDisabled:d,itemTextColor:m,itemTextColorDisabled:d,itemColorPending:g,titleFontWeight:t,closeColorHover:h,closeColorPressed:b,closeIconColor:v,closeIconColorHover:x,closeIconColorPressed:_})}};function Jb(e){const{borderRadiusSmall:t,dividerColor:r,hoverColor:n,pressedColor:o,primaryColor:i,textColor3:a,textColor2:s,textColorDisabled:l,fontSize:c}=e;return{fontSize:c,lineHeight:"1.5",nodeHeight:"30px",nodeWrapperPadding:"3px 0",nodeBorderRadius:t,nodeColorHover:n,nodeColorPressed:o,nodeColorActive:le(i,{alpha:.1}),arrowColor:a,nodeTextColor:s,nodeTextColorDisabled:l,loadingColor:i,dropMarkColor:i,lineColor:r}}const ju={name:"Tree",common:X,peers:{Checkbox:tn,Scrollbar:lt,Empty:Er},self(e){const{primaryColor:t}=e,r=Jb(e);return r.nodeColorActive=le(t,{alpha:.15}),r}},Xb={name:"TreeSelect",common:X,peers:{Tree:ju,Empty:Er,InternalSelection:ba}},eC={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"};function tC(e){const{primaryColor:t,textColor2:r,borderColor:n,lineHeight:o,fontSize:i,borderRadiusSmall:a,dividerColor:s,fontWeightStrong:l,textColor1:c,textColor3:u,infoColor:d,warningColor:m,errorColor:p,successColor:g,codeColor:h}=e;return Object.assign(Object.assign({},eC),{aTextColor:t,blockquoteTextColor:r,blockquotePrefixColor:n,blockquoteLineHeight:o,blockquoteFontSize:i,codeBorderRadius:a,liTextColor:r,liLineHeight:o,liFontSize:i,hrColor:s,headerFontWeight:l,headerTextColor:c,pTextColor:r,pTextColor1Depth:c,pTextColor2Depth:r,pTextColor3Depth:u,pLineHeight:o,pFontSize:i,headerBarColor:t,headerBarColorPrimary:t,headerBarColorInfo:d,headerBarColorError:p,headerBarColorWarning:m,headerBarColorSuccess:g,textColor:r,textColor1Depth:c,textColor2Depth:r,textColor3Depth:u,textColorPrimary:t,textColorInfo:d,textColorSuccess:g,textColorWarning:m,textColorError:p,codeTextColor:r,codeColor:h,codeBorder:"1px solid #0000"})}const rC={name:"Typography",common:X,self:tC};function nC(e){const{iconColor:t,primaryColor:r,errorColor:n,textColor2:o,successColor:i,opacityDisabled:a,actionColor:s,borderColor:l,hoverColor:c,lineHeight:u,borderRadius:d,fontSize:m}=e;return{fontSize:m,lineHeight:u,borderRadius:d,draggerColor:s,draggerBorder:`1px dashed ${l}`,draggerBorderHover:`1px dashed ${r}`,itemColorHover:c,itemColorHoverError:le(n,{alpha:.06}),itemTextColor:o,itemTextColorError:n,itemTextColorSuccess:i,itemIconColor:t,itemDisabledOpacity:a,itemBorderImageCardError:`1px solid ${n}`,itemBorderImageCard:`1px solid ${l}`}}const oC={name:"Upload",common:X,peers:{Button:ht,Progress:$u},self(e){const{errorColor:t}=e,r=nC(e);return r.itemColorHoverError=le(t,{alpha:.09}),r}},iC={name:"Watermark",common:X,self(e){const{fontFamily:t}=e;return{fontFamily:t}}},aC={name:"FloatButton",common:X,self(e){const{popoverColor:t,textColor2:r,buttonColor2Hover:n,buttonColor2Pressed:o,primaryColor:i,primaryColorHover:a,primaryColorPressed:s,baseColor:l,borderRadius:c}=e;return{color:t,textColor:r,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .18)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .18)",colorHover:n,colorPressed:o,colorPrimary:i,colorPrimaryHover:a,colorPrimaryPressed:s,textColorPrimary:l,borderRadiusSquare:c}}};function sC(e){const{borderRadius:t,fontSizeMini:r,fontSizeTiny:n,fontSizeSmall:o,fontWeight:i,textColor2:a,cardColor:s,buttonColor2Hover:l}=e;return{activeColors:["#9be9a8","#40c463","#30a14e","#216e39"],borderRadius:t,borderColor:s,textColor:a,mininumColor:l,fontWeight:i,loadingColorStart:"rgba(0, 0, 0, 0.06)",loadingColorEnd:"rgba(0, 0, 0, 0.12)",rectSizeSmall:"10px",rectSizeMedium:"11px",rectSizeLarge:"12px",borderRadiusSmall:"2px",borderRadiusMedium:"2px",borderRadiusLarge:"2px",xGapSmall:"2px",xGapMedium:"3px",xGapLarge:"3px",yGapSmall:"2px",yGapMedium:"3px",yGapLarge:"3px",fontSizeSmall:n,fontSizeMedium:r,fontSizeLarge:o}}const lC={name:"Heatmap",common:X,self(e){const t=sC(e);return Object.assign(Object.assign({},t),{activeColors:["#0d4429","#006d32","#26a641","#39d353"],mininumColor:"rgba(255, 255, 255, 0.1)",loadingColorStart:"rgba(255, 255, 255, 0.12)",loadingColorEnd:"rgba(255, 255, 255, 0.18)"})}};function cC(e){const{primaryColor:t,baseColor:r}=e;return{color:t,iconColor:r}}const uC={name:"IconWrapper",common:X,self:cC},dC={name:"Image",common:X,peers:{Tooltip:$o},self:e=>{const{textColor2:t}=e;return{toolbarIconColor:t,toolbarColor:"rgba(0, 0, 0, .35)",toolbarBoxShadow:"none",toolbarBorderRadius:"24px"}}},fC={extraFontSize:"12px",width:"440px"},pC={name:"Transfer",common:X,peers:{Checkbox:tn,Scrollbar:lt,Input:bt,Empty:Er,Button:ht},self(e){const{iconColorDisabled:t,iconColor:r,fontWeight:n,fontSizeLarge:o,fontSizeMedium:i,fontSizeSmall:a,heightLarge:s,heightMedium:l,heightSmall:c,borderRadius:u,inputColor:d,tableHeaderColor:m,textColor1:p,textColorDisabled:g,textColor2:h,hoverColor:b}=e;return Object.assign(Object.assign({},fC),{itemHeightSmall:c,itemHeightMedium:l,itemHeightLarge:s,fontSizeSmall:a,fontSizeMedium:i,fontSizeLarge:o,borderRadius:u,borderColor:"#0000",listColor:d,headerColor:m,titleTextColor:p,titleTextColorDisabled:g,extraTextColor:h,filterDividerColor:"#0000",itemTextColor:h,itemTextColorDisabled:g,itemColorPending:b,titleFontWeight:n,iconColor:r,iconColorDisabled:t})}};function hC(){return{}}const mC={name:"Marquee",common:X,self:hC},gC={name:"QrCode",common:X,self:e=>({borderRadius:e.borderRadius})},vC={name:"Skeleton",common:X,self(e){const{heightSmall:t,heightMedium:r,heightLarge:n,borderRadius:o}=e;return{color:"rgba(255, 255, 255, 0.12)",colorEnd:"rgba(255, 255, 255, 0.18)",borderRadius:o,heightSmall:t,heightMedium:r,heightLarge:n}}},bC={name:"Split",common:X},CC=()=>({}),xC={name:"Equation",common:X,self:CC},SC={name:"FloatButtonGroup",common:X,self(e){const{popoverColor:t,dividerColor:r,borderRadius:n}=e;return{color:t,buttonBorderColor:r,borderRadiusSquare:n,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .12)"}}},yC={name:"dark",common:X,Alert:m1,Anchor:x1,AutoComplete:P1,Avatar:_u,AvatarGroup:E1,BackTop:I1,Badge:R1,Breadcrumb:k1,Button:ht,ButtonGroup:tb,Calendar:N1,Card:wu,Carousel:$1,Cascader:V1,Checkbox:tn,Code:Au,Collapse:q1,CollapseTransition:tv,ColorPicker:nv,DataTable:hv,DatePicker:Sv,Descriptions:Pv,Dialog:Fu,Divider:Vv,Drawer:qv,Dropdown:Ca,DynamicInput:Kv,DynamicTags:Zv,Element:Jv,Empty:Er,Ellipsis:ku,Equation:xC,Flex:eb,Form:ob,GradientText:ib,Heatmap:lC,Icon:gv,IconWrapper:uC,Image:dC,Input:bt,InputNumber:ab,InputOtp:lb,LegacyTransfer:pC,Layout:cb,List:fb,LoadingBar:Iv,Log:pb,Menu:vb,Mention:hb,Message:kv,Modal:Tv,Notification:Uv,PageHeader:xb,Pagination:Du,Popconfirm:_b,Popover:Tr,Popselect:Iu,Progress:$u,QrCode:gC,Radio:Mu,Rate:wb,Result:Tb,Row:ub,Scrollbar:lt,Select:Ou,Skeleton:vC,Slider:Rb,Space:zu,Spin:Db,Statistic:Mb,Steps:Nb,Switch:Hb,Table:jb,Tabs:Vb,Tag:xu,Thing:qb,TimePicker:Lu,Timeline:Kb,Tooltip:$o,Transfer:Zb,Tree:ju,TreeSelect:Xb,Typography:rC,Upload:oC,Watermark:iC,Split:bC,FloatButton:aC,FloatButtonGroup:SC,Marquee:mC},Uu="theme",_C=()=>{try{return localStorage.getItem(Uu)}catch{return null}},PC=typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches,ai=typeof window<"u"?new URLSearchParams(window.location.search).get("theme"):null,ks=_C(),jt=De(ai==="dark"||ai==="light"?ai==="dark":ks?ks==="dark":PC),Ms=()=>{jt.value=!jt.value};ta(()=>{const e=document.documentElement;e.classList.toggle("dark",jt.value),e.style.colorScheme=jt.value?"dark":"light";try{localStorage.setItem(Uu,jt.value?"dark":"light")}catch{}});const wC={__name:"App",setup(e){const t={common:{fontFamily:"Microsoft JhengHei"}};return(r,n)=>{const o=hf("router-view");return Ke(),jr(Ze(iv),{theme:Ze(jt)?Ze(yC):null,"theme-overrides":t,abstract:""},{default:Nr(()=>[Me(Ze(zv),{placement:"top-right"},{default:Nr(()=>[Me(o)]),_:1})]),_:1},8,["theme"])}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Dr=typeof document<"u";function Wu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function AC(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wu(e.default)}const Pe=Object.assign;function si(e,t){const r={};for(const n in t){const o=t[n];r[n]=At(o)?o.map(e):e(o)}return r}const yn=()=>{},At=Array.isArray;function Ls(e,t){const r={};for(const n in e)r[n]=n in t?t[n]:e[n];return r}const Vu=/#/g,EC=/&/g,TC=/\//g,IC=/=/g,RC=/\?/g,Gu=/\+/g,OC=/%5B/g,DC=/%5D/g,qu=/%5E/g,kC=/%60/g,Yu=/%7B/g,MC=/%7C/g,Ku=/%7D/g,LC=/%20/g;function xa(e){return e==null?"":encodeURI(""+e).replace(MC,"|").replace(OC,"[").replace(DC,"]")}function FC(e){return xa(e).replace(Yu,"{").replace(Ku,"}").replace(qu,"^")}function Bi(e){return xa(e).replace(Gu,"%2B").replace(LC,"+").replace(Vu,"%23").replace(EC,"%26").replace(kC,"`").replace(Yu,"{").replace(Ku,"}").replace(qu,"^")}function NC(e){return Bi(e).replace(IC,"%3D")}function BC(e){return xa(e).replace(Vu,"%23").replace(RC,"%3F")}function HC(e){return BC(e).replace(TC,"%2F")}function kn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const zC=/\/$/,$C=e=>e.replace(zC,"");function li(e,t,r="/"){let n,o={},i="",a="";const s=t.indexOf("#");let l=t.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(n=t.slice(0,l),i=t.slice(l,s>0?s:t.length),o=e(i.slice(1))),s>=0&&(n=n||t.slice(0,s),a=t.slice(s,t.length)),n=VC(n??t,r),{fullPath:n+i+a,path:n,query:o,hash:kn(a)}}function jC(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Fs(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function UC(e,t,r){const n=t.matched.length-1,o=r.matched.length-1;return n>-1&&n===o&&qr(t.matched[n],r.matched[o])&&Qu(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function qr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e)if(!WC(e[r],t[r]))return!1;return!0}function WC(e,t){return At(e)?Ns(e,t):At(t)?Ns(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Ns(e,t){return At(t)?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function VC(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),n=e.split("/"),o=n[n.length-1];(o===".."||o===".")&&n.push("");let i=r.length-1,a,s;for(a=0;a<n.length;a++)if(s=n[a],s!==".")if(s==="..")i>1&&i--;else break;return r.slice(0,i).join("/")+"/"+n.slice(a).join("/")}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hi=(function(e){return e.pop="pop",e.push="push",e})({}),ci=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function GC(e){if(!e)if(Dr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$C(e)}const qC=/^[^#]+#/;function YC(e,t){return e.replace(qC,"#")+t}function KC(e,t){const r=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-r.left-(t.left||0),top:n.top-r.top-(t.top||0)}}const jo=()=>({left:window.scrollX,top:window.scrollY});function QC(e){let t;if("el"in e){const r=e.el,n=typeof r=="string"&&r.startsWith("#"),o=typeof r=="string"?n?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!o)return;t=KC(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Bs(e,t){return(history.state?history.state.position-t:-1)+e}const zi=new Map;function ZC(e,t){zi.set(e,t)}function JC(e){const t=zi.get(e);return zi.delete(e),t}function XC(e){return typeof e=="string"||e&&typeof e=="object"}function Zu(e){return typeof e=="string"||typeof e=="symbol"}let Fe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Ju=Symbol("");Fe.MATCHER_NOT_FOUND+"",Fe.NAVIGATION_GUARD_REDIRECT+"",Fe.NAVIGATION_ABORTED+"",Fe.NAVIGATION_CANCELLED+"",Fe.NAVIGATION_DUPLICATED+"";function Yr(e,t){return Pe(new Error,{type:e,[Ju]:!0},t)}function Nt(e,t){return e instanceof Error&&Ju in e&&(t==null||!!(e.type&t))}const ex=["params","query","hash"];function tx(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const r of ex)r in e&&(t[r]=e[r]);return JSON.stringify(t,null,2)}function rx(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<r.length;++n){const o=r[n].replace(Gu," "),i=o.indexOf("="),a=kn(i<0?o:o.slice(0,i)),s=i<0?null:kn(o.slice(i+1));if(a in t){let l=t[a];At(l)||(l=t[a]=[l]),l.push(s)}else t[a]=s}return t}function Hs(e){let t="";for(let r in e){const n=e[r];if(r=NC(r),n==null){n!==void 0&&(t+=(t.length?"&":"")+r);continue}(At(n)?n.map(o=>o&&Bi(o)):[n&&Bi(n)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+r,o!=null&&(t+="="+o))})}return t}function nx(e){const t={};for(const r in e){const n=e[r];n!==void 0&&(t[r]=At(n)?n.map(o=>o==null?null:""+o):n==null?n:""+n)}return t}const ox=Symbol(""),zs=Symbol(""),Sa=Symbol(""),Xu=Symbol(""),$i=Symbol("");function un(){let e=[];function t(n){return e.push(n),()=>{const o=e.indexOf(n);o>-1&&e.splice(o,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function rr(e,t,r,n,o,i=a=>a()){const a=n&&(n.enterCallbacks[o]=n.enterCallbacks[o]||[]);return()=>new Promise((s,l)=>{const c=m=>{m===!1?l(Yr(Fe.NAVIGATION_ABORTED,{from:r,to:t})):m instanceof Error?l(m):XC(m)?l(Yr(Fe.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&n.enterCallbacks[o]===a&&typeof m=="function"&&a.push(m),s())},u=i(()=>e.call(n&&n.instances[o],t,r,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(m=>l(m))})}function ui(e,t,r,n,o=i=>i()){const i=[];for(const a of e)for(const s in a.components){let l=a.components[s];if(!(t!=="beforeRouteEnter"&&!a.instances[s]))if(Wu(l)){const c=(l.__vccOpts||l)[t];c&&i.push(rr(c,r,n,a,s,o))}else{let c=l();i.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${a.path}"`);const d=AC(u)?u.default:u;a.mods[s]=u,a.components[s]=d;const m=(d.__vccOpts||d)[t];return m&&rr(m,r,n,a,s,o)()}))}}return i}function ix(e,t){const r=[],n=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const s=t.matched[a];s&&(e.matched.find(c=>qr(c,s))?n.push(s):r.push(s));const l=e.matched[a];l&&(t.matched.find(c=>qr(c,l))||o.push(l))}return[r,n,o]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ax=()=>location.protocol+"//"+location.host;function ed(e,t){const{pathname:r,search:n,hash:o}=t,i=e.indexOf("#");if(i>-1){let a=o.includes(e.slice(i))?e.slice(i).length:1,s=o.slice(a);return s[0]!=="/"&&(s="/"+s),Fs(s,"")}return Fs(r,e)+n+o}function sx(e,t,r,n){let o=[],i=[],a=null;const s=({state:m})=>{const p=ed(e,location),g=r.value,h=t.value;let b=0;if(m){if(r.value=p,t.value=m,a&&a===g){a=null;return}b=h?m.position-h.position:0}else n(p);o.forEach(v=>{v(r.value,g,{delta:b,type:Hi.pop,direction:b?b>0?ci.forward:ci.back:ci.unknown})})};function l(){a=r.value}function c(m){o.push(m);const p=()=>{const g=o.indexOf(m);g>-1&&o.splice(g,1)};return i.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:jo()}),"")}}function d(){for(const m of i)m();i=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function $s(e,t,r,n=!1,o=!1){return{back:e,current:t,forward:r,replaced:n,position:window.history.length,scroll:o?jo():null}}function lx(e){const{history:t,location:r}=window,n={value:ed(e,r)},o={value:t.state};o.value||i(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const d=e.indexOf("#"),m=d>-1?(r.host&&document.querySelector("base")?e:e.slice(d))+l:ax()+e+l;try{t[u?"replaceState":"pushState"](c,"",m),o.value=c}catch(p){console.error(p),r[u?"replace":"assign"](m)}}function a(l,c){i(l,Pe({},t.state,$s(o.value.back,l,o.value.forward,!0),c,{position:o.value.position}),!0),n.value=l}function s(l,c){const u=Pe({},o.value,t.state,{forward:l,scroll:jo()});i(u.current,u,!0),i(l,Pe({},$s(n.value,l,null),{position:u.position+1},c),!1),n.value=l}return{location:n,state:o,push:s,replace:a}}function cx(e){e=GC(e);const t=lx(e),r=sx(e,t.state,t.location,t.replace);function n(i,a=!0){a||r.pauseListeners(),history.go(i)}const o=Pe({location:"",base:e,go:n,createHref:YC.bind(null,e)},t,r);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}let br=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var We=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(We||{});const ux={type:br.Static,value:""},dx=/[a-zA-Z0-9_]/;function fx(e){if(!e)return[[]];if(e==="/")return[[ux]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${r})/"${c}": ${p}`)}let r=We.Static,n=r;const o=[];let i;function a(){i&&o.push(i),i=[]}let s=0,l,c="",u="";function d(){c&&(r===We.Static?i.push({type:br.Static,value:c}):r===We.Param||r===We.ParamRegExp||r===We.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:br.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&r!==We.ParamRegExp){n=r,r=We.EscapeNext;continue}switch(r){case We.Static:l==="/"?(c&&d(),a()):l===":"?(d(),r=We.Param):m();break;case We.EscapeNext:m(),r=n;break;case We.Param:l==="("?r=We.ParamRegExp:dx.test(l)?m():(d(),r=We.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case We.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:r=We.ParamRegExpEnd:u+=l;break;case We.ParamRegExpEnd:d(),r=We.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:t("Unknown state");break}}return r===We.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),a(),o}const js="[^/]+?",px={sensitive:!1,strict:!1,start:!0,end:!0};var ut=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ut||{});const hx=/[.+*?^${}()[\]/\\]/g;function mx(e,t){const r=Pe({},px,t),n=[];let o=r.start?"^":"";const i=[];for(const c of e){const u=c.length?[]:[ut.Root];r.strict&&!c.length&&(o+="/");for(let d=0;d<c.length;d++){const m=c[d];let p=ut.Segment+(r.sensitive?ut.BonusCaseSensitive:0);if(m.type===br.Static)d||(o+="/"),o+=m.value.replace(hx,"\\$&"),p+=ut.Static;else if(m.type===br.Param){const{value:g,repeatable:h,optional:b,regexp:v}=m;i.push({name:g,repeatable:h,optional:b});const x=v||js;if(x!==js){p+=ut.BonusCustomRegExp;try{`${x}`}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+w.message)}}let _=h?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(_=b&&c.length<2?`(?:/${_})`:"/"+_),b&&(_+="?"),o+=_,p+=ut.Dynamic,b&&(p+=ut.BonusOptional),h&&(p+=ut.BonusRepeatable),x===".*"&&(p+=ut.BonusWildcard)}u.push(p)}n.push(u)}if(r.strict&&r.end){const c=n.length-1;n[c][n[c].length-1]+=ut.BonusStrict}r.strict||(o+="/?"),r.end?o+="$":r.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const a=new RegExp(o,r.sensitive?"":"i");function s(c){const u=c.match(a),d={};if(!u)return null;for(let m=1;m<u.length;m++){const p=u[m]||"",g=i[m-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of m)if(p.type===br.Static)u+=p.value;else if(p.type===br.Param){const{value:g,repeatable:h,optional:b}=p,v=g in c?c[g]:"";if(At(v)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=At(v)?v.join("/"):v;if(!x)if(b)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=x}}return u||"/"}return{re:a,score:n,keys:i,parse:s,stringify:l}}function gx(e,t){let r=0;for(;r<e.length&&r<t.length;){const n=t[r]-e[r];if(n)return n;r++}return e.length<t.length?e.length===1&&e[0]===ut.Static+ut.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ut.Static+ut.Segment?1:-1:0}function td(e,t){let r=0;const n=e.score,o=t.score;for(;r<n.length&&r<o.length;){const i=gx(n[r],o[r]);if(i)return i;r++}if(Math.abs(o.length-n.length)===1){if(Us(n))return 1;if(Us(o))return-1}return o.length-n.length}function Us(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const vx={strict:!1,end:!0,sensitive:!1};function bx(e,t,r){const n=mx(fx(e.path),r),o=Pe(n,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Cx(e,t){const r=[],n=new Map;t=Ls(vx,t);function o(d){return n.get(d)}function i(d,m,p){const g=!p,h=Vs(d);h.aliasOf=p&&p.record;const b=Ls(t,d),v=[h];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of w)v.push(Vs(Pe({},h,{components:p?p.record.components:h.components,path:A,aliasOf:p?p.record:h})))}let x,_;for(const w of v){const{path:A}=w;if(m&&A[0]!=="/"){const k=m.record.path,N=k[k.length-1]==="/"?"":"/";w.path=m.record.path+(A&&N+A)}if(x=bx(w,m,b),p?p.alias.push(x):(_=_||x,_!==x&&_.alias.push(x),g&&d.name&&!Gs(x)&&a(d.name)),rd(x)&&l(x),h.children){const k=h.children;for(let N=0;N<k.length;N++)i(k[N],x,p&&p.children[N])}p=p||x}return _?()=>{a(_)}:yn}function a(d){if(Zu(d)){const m=n.get(d);m&&(n.delete(d),r.splice(r.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=r.indexOf(d);m>-1&&(r.splice(m,1),d.record.name&&n.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function s(){return r}function l(d){const m=yx(d,r);r.splice(m,0,d),d.record.name&&!Gs(d)&&n.set(d.record.name,d)}function c(d,m){let p,g={},h,b;if("name"in d&&d.name){if(p=n.get(d.name),!p)throw Yr(Fe.MATCHER_NOT_FOUND,{location:d});b=p.record.name,g=Pe(Ws(m.params,p.keys.filter(_=>!_.optional).concat(p.parent?p.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&Ws(d.params,p.keys.map(_=>_.name))),h=p.stringify(g)}else if(d.path!=null)h=d.path,p=r.find(_=>_.re.test(h)),p&&(g=p.parse(h),b=p.record.name);else{if(p=m.name?n.get(m.name):r.find(_=>_.re.test(m.path)),!p)throw Yr(Fe.MATCHER_NOT_FOUND,{location:d,currentLocation:m});b=p.record.name,g=Pe({},m.params,d.params),h=p.stringify(g)}const v=[];let x=p;for(;x;)v.unshift(x.record),x=x.parent;return{name:b,path:h,params:g,matched:v,meta:Sx(v)}}e.forEach(d=>i(d));function u(){r.length=0,n.clear()}return{addRoute:i,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:s,getRecordMatcher:o}}function Ws(e,t){const r={};for(const n of t)n in e&&(r[n]=e[n]);return r}function Vs(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:xx(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xx(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const n in e.components)t[n]=typeof r=="object"?r[n]:r;return t}function Gs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Sx(e){return e.reduce((t,r)=>Pe(t,r.meta),{})}function yx(e,t){let r=0,n=t.length;for(;r!==n;){const i=r+n>>1;td(e,t[i])<0?n=i:r=i+1}const o=_x(e);return o&&(n=t.lastIndexOf(o,n-1)),n}function _x(e){let t=e;for(;t=t.parent;)if(rd(t)&&td(e,t)===0)return t}function rd({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function qs(e){const t=qe(Sa),r=qe(Xu),n=Ce(()=>{const l=Ze(e.to);return t.resolve(l)}),o=Ce(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],d=r.matched;if(!u||!d.length)return-1;const m=d.findIndex(qr.bind(null,u));if(m>-1)return m;const p=Ys(l[c-2]);return c>1&&Ys(u)===p&&d[d.length-1].path!==p?d.findIndex(qr.bind(null,l[c-2])):m}),i=Ce(()=>o.value>-1&&Tx(r.params,n.value.params)),a=Ce(()=>o.value>-1&&o.value===r.matched.length-1&&Qu(r.params,n.value.params));function s(l={}){if(Ex(l)){const c=t[Ze(e.replace)?"replace":"push"](Ze(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:Ce(()=>n.value.href),isActive:i,isExactActive:a,navigate:s}}function Px(e){return e.length===1?e[0]:e}const wx=Ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:qs,setup(e,{slots:t}){const r=Ln(qs(e)),{options:n}=qe(Sa),o=Ce(()=>({[Ks(e.activeClass,n.linkActiveClass,"router-link-active")]:r.isActive,[Ks(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const i=t.default&&Px(t.default(r));return e.custom?i:re("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:o.value},i)}}}),Ax=wx;function Ex(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tx(e,t){for(const r in t){const n=t[r],o=e[r];if(typeof n=="string"){if(n!==o)return!1}else if(!At(o)||o.length!==n.length||n.some((i,a)=>i.valueOf()!==o[a].valueOf()))return!1}return!0}function Ys(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ks=(e,t,r)=>e??t??r,Ix=Ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const n=qe($i),o=Ce(()=>e.route||n.value),i=qe(zs,0),a=Ce(()=>{let c=Ze(i);const{matched:u}=o.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),s=Ce(()=>o.value.matched[a.value]);ar(zs,Ce(()=>a.value+1)),ar(ox,s),ar($i,o);const l=De();return Sr(()=>[l.value,s.value,e.name],([c,u,d],[m,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!qr(u,p)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=o.value,u=e.name,d=s.value,m=d&&d.components[u];if(!m)return Qs(r.default,{Component:m,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,b=re(m,Pe({},g,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Qs(r.default,{Component:b,route:c})||b}}});function Qs(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const Rx=Ix;function Ox(e){const t=Cx(e.routes,e),r=e.parseQuery||rx,n=e.stringifyQuery||Hs,o=e.history,i=un(),a=un(),s=un(),l=Pl(Jt);let c=Jt;Dr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=si.bind(null,G=>""+G),d=si.bind(null,HC),m=si.bind(null,kn);function p(G,Z){let K,ie;return Zu(G)?(K=t.getRecordMatcher(G),ie=Z):ie=G,t.addRoute(ie,K)}function g(G){const Z=t.getRecordMatcher(G);Z&&t.removeRoute(Z)}function h(){return t.getRoutes().map(G=>G.record)}function b(G){return!!t.getRecordMatcher(G)}function v(G,Z){if(Z=Pe({},Z||l.value),typeof G=="string"){const f=li(r,G,Z.path),O=t.resolve({path:f.path},Z),I=o.createHref(f.fullPath);return Pe(f,O,{params:m(O.params),hash:kn(f.hash),redirectedFrom:void 0,href:I})}let K;if(G.path!=null)K=Pe({},G,{path:li(r,G.path,Z.path).path});else{const f=Pe({},G.params);for(const O in f)f[O]==null&&delete f[O];K=Pe({},G,{params:d(f)}),Z.params=d(Z.params)}const ie=t.resolve(K,Z),pe=G.hash||"";ie.params=u(m(ie.params));const E=jC(n,Pe({},G,{hash:FC(pe),path:ie.path})),R=o.createHref(E);return Pe({fullPath:E,hash:pe,query:n===Hs?nx(G.query):G.query||{}},ie,{redirectedFrom:void 0,href:R})}function x(G){return typeof G=="string"?li(r,G,l.value.path):Pe({},G)}function _(G,Z){if(c!==G)return Yr(Fe.NAVIGATION_CANCELLED,{from:Z,to:G})}function w(G){return N(G)}function A(G){return w(Pe(x(G),{replace:!0}))}function k(G,Z){const K=G.matched[G.matched.length-1];if(K&&K.redirect){const{redirect:ie}=K;let pe=typeof ie=="function"?ie(G,Z):ie;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=x(pe):{path:pe},pe.params={}),Pe({query:G.query,hash:G.hash,params:pe.path!=null?{}:G.params},pe)}}function N(G,Z){const K=c=v(G),ie=l.value,pe=G.state,E=G.force,R=G.replace===!0,f=k(K,ie);if(f)return N(Pe(x(f),{state:typeof f=="object"?Pe({},pe,f.state):pe,force:E,replace:R}),Z||K);const O=K;O.redirectedFrom=Z;let I;return!E&&UC(n,ie,K)&&(I=Yr(Fe.NAVIGATION_DUPLICATED,{to:O,from:ie}),j(ie,ie,!0,!1)),(I?Promise.resolve(I):U(O,ie)).catch(S=>Nt(S)?Nt(S,Fe.NAVIGATION_GUARD_REDIRECT)?S:de(S):ne(S,O,ie)).then(S=>{if(S){if(Nt(S,Fe.NAVIGATION_GUARD_REDIRECT))return N(Pe({replace:R},x(S.to),{state:typeof S.to=="object"?Pe({},pe,S.to.state):pe,force:E}),Z||O)}else S=P(O,ie,!0,R,pe);return J(O,ie,S),S})}function $(G,Z){const K=_(G,Z);return K?Promise.reject(K):Promise.resolve()}function D(G){const Z=oe.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(G):G()}function U(G,Z){let K;const[ie,pe,E]=ix(G,Z);K=ui(ie.reverse(),"beforeRouteLeave",G,Z);for(const f of ie)f.leaveGuards.forEach(O=>{K.push(rr(O,G,Z))});const R=$.bind(null,G,Z);return K.push(R),xe(K).then(()=>{K=[];for(const f of i.list())K.push(rr(f,G,Z));return K.push(R),xe(K)}).then(()=>{K=ui(pe,"beforeRouteUpdate",G,Z);for(const f of pe)f.updateGuards.forEach(O=>{K.push(rr(O,G,Z))});return K.push(R),xe(K)}).then(()=>{K=[];for(const f of E)if(f.beforeEnter)if(At(f.beforeEnter))for(const O of f.beforeEnter)K.push(rr(O,G,Z));else K.push(rr(f.beforeEnter,G,Z));return K.push(R),xe(K)}).then(()=>(G.matched.forEach(f=>f.enterCallbacks={}),K=ui(E,"beforeRouteEnter",G,Z,D),K.push(R),xe(K))).then(()=>{K=[];for(const f of a.list())K.push(rr(f,G,Z));return K.push(R),xe(K)}).catch(f=>Nt(f,Fe.NAVIGATION_CANCELLED)?f:Promise.reject(f))}function J(G,Z,K){s.list().forEach(ie=>D(()=>ie(G,Z,K)))}function P(G,Z,K,ie,pe){const E=_(G,Z);if(E)return E;const R=Z===Jt,f=Dr?history.state:{};K&&(ie||R?o.replace(G.fullPath,Pe({scroll:R&&f&&f.scroll},pe)):o.push(G.fullPath,pe)),l.value=G,j(G,Z,K,R),de()}let B;function C(){B||(B=o.listen((G,Z,K)=>{if(!te.listening)return;const ie=v(G),pe=k(ie,te.currentRoute.value);if(pe){N(Pe(pe,{replace:!0,force:!0}),ie).catch(yn);return}c=ie;const E=l.value;Dr&&ZC(Bs(E.fullPath,K.delta),jo()),U(ie,E).catch(R=>Nt(R,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_CANCELLED)?R:Nt(R,Fe.NAVIGATION_GUARD_REDIRECT)?(N(Pe(x(R.to),{force:!0}),ie).then(f=>{Nt(f,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Hi.pop&&o.go(-1,!1)}).catch(yn),Promise.reject()):(K.delta&&o.go(-K.delta,!1),ne(R,ie,E))).then(R=>{R=R||P(ie,E,!1),R&&(K.delta&&!Nt(R,Fe.NAVIGATION_CANCELLED)?o.go(-K.delta,!1):K.type===Hi.pop&&Nt(R,Fe.NAVIGATION_ABORTED|Fe.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),J(ie,E,R)}).catch(yn)}))}let W=un(),ae=un(),q;function ne(G,Z,K){de(G);const ie=ae.list();return ie.length?ie.forEach(pe=>pe(G,Z,K)):console.error(G),Promise.reject(G)}function Q(){return q&&l.value!==Jt?Promise.resolve():new Promise((G,Z)=>{W.add([G,Z])})}function de(G){return q||(q=!G,C(),W.list().forEach(([Z,K])=>G?K(G):Z()),W.reset()),G}function j(G,Z,K,ie){const{scrollBehavior:pe}=e;if(!Dr||!pe)return Promise.resolve();const E=!K&&JC(Bs(G.fullPath,0))||(ie||!K)&&history.state&&history.state.scroll||null;return Xi().then(()=>pe(G,Z,E)).then(R=>R&&QC(R)).catch(R=>ne(R,G,Z))}const H=G=>o.go(G);let fe;const oe=new Set,te={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:b,getRoutes:h,resolve:v,options:e,push:w,replace:A,go:H,back:()=>H(-1),forward:()=>H(1),beforeEach:i.add,beforeResolve:a.add,afterEach:s.add,onError:ae.add,isReady:Q,install(G){G.component("RouterLink",Ax),G.component("RouterView",Rx),G.config.globalProperties.$router=te,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),Dr&&!fe&&l.value===Jt&&(fe=!0,w(o.location).catch(ie=>{}));const Z={};for(const ie in Jt)Object.defineProperty(Z,ie,{get:()=>l.value[ie],enumerable:!0});G.provide(Sa,te),G.provide(Xu,_l(Z)),G.provide($i,l);const K=G.unmount;oe.add(G),G.unmount=function(){oe.delete(G),oe.size<1&&(c=Jt,B&&B(),B=null,l.value=Jt,fe=!1,q=!1),K()}}};function xe(G){return G.reduce((Z,K)=>Z.then(()=>D(K)),Promise.resolve())}return te}const Dx="modulepreload",kx=function(e){return"/RdssDevelopeGuide/"+e},Zs={},Ue=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=a(r.map(c=>{if(c=kx(c),c in Zs)return;Zs[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":Dx,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((p,g)=>{m.addEventListener("load",p),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};var or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function to(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var di={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Js;function Lx(){return Js||(Js=1,(function(e,t){(function(r){e.exports=r()})(function(){return(function r(n,o,i){function a(c,u){if(!o[c]){if(!n[c]){var d=typeof to=="function"&&to;if(!u&&d)return d(c,!0);if(s)return s(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var p=o[c]={exports:{}};n[c][0].call(p.exports,function(g){var h=n[c][1][g];return a(h||g)},p,p.exports,r,n,o,i)}return o[c].exports}for(var s=typeof to=="function"&&to,l=0;l<i.length;l++)a(i[l]);return a})({1:[function(r,n,o){var i=r("./utils"),a=r("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(l){for(var c,u,d,m,p,g,h,b=[],v=0,x=l.length,_=x,w=i.getTypeOf(l)!=="string";v<l.length;)_=x-v,d=w?(c=l[v++],u=v<x?l[v++]:0,v<x?l[v++]:0):(c=l.charCodeAt(v++),u=v<x?l.charCodeAt(v++):0,v<x?l.charCodeAt(v++):0),m=c>>2,p=(3&c)<<4|u>>4,g=1<_?(15&u)<<2|d>>6:64,h=2<_?63&d:64,b.push(s.charAt(m)+s.charAt(p)+s.charAt(g)+s.charAt(h));return b.join("")},o.decode=function(l){var c,u,d,m,p,g,h=0,b=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var x,_=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&_--,l.charAt(l.length-2)===s.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=a.uint8array?new Uint8Array(0|_):new Array(0|_);h<l.length;)c=s.indexOf(l.charAt(h++))<<2|(m=s.indexOf(l.charAt(h++)))>>4,u=(15&m)<<4|(p=s.indexOf(l.charAt(h++)))>>2,d=(3&p)<<6|(g=s.indexOf(l.charAt(h++))),x[b++]=c,p!==64&&(x[b++]=u),g!==64&&(x[b++]=d);return x}},{"./support":30,"./utils":32}],2:[function(r,n,o){var i=r("./external"),a=r("./stream/DataWorker"),s=r("./stream/Crc32Probe"),l=r("./stream/DataLengthProbe");function c(u,d,m,p,g){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=p,this.compressedContent=g}c.prototype={getContentWorker:function(){var u=new a(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new s).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},n.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(r,n,o){var i=r("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new i("STORE compression")},uncompressWorker:function(){return new i("STORE decompression")}},o.DEFLATE=r("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(r,n,o){var i=r("./utils"),a=(function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var u=0;u<8;u++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l})();n.exports=function(s,l){return s!==void 0&&s.length?i.getTypeOf(s)!=="string"?(function(c,u,d,m){var p=a,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^p[255&(c^u[h])];return-1^c})(0|l,s,s.length,0):(function(c,u,d,m){var p=a,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^p[255&(c^u.charCodeAt(h))];return-1^c})(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(r,n,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(r,n,o){var i=null;i=typeof Promise<"u"?Promise:r("lie"),n.exports={Promise:i}},{lie:37}],7:[function(r,n,o){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=r("pako"),s=r("./utils"),l=r("./stream/GenericWorker"),c=i?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}o.magic="\b\0",s.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},o.compressWorker=function(d){return new u("Deflate",d)},o.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(r,n,o){function i(p,g){var h,b="";for(h=0;h<g;h++)b+=String.fromCharCode(255&p),p>>>=8;return b}function a(p,g,h,b,v,x){var _,w,A=p.file,k=p.compression,N=x!==c.utf8encode,$=s.transformTo("string",x(A.name)),D=s.transformTo("string",c.utf8encode(A.name)),U=A.comment,J=s.transformTo("string",x(U)),P=s.transformTo("string",c.utf8encode(U)),B=D.length!==A.name.length,C=P.length!==U.length,W="",ae="",q="",ne=A.dir,Q=A.date,de={crc32:0,compressedSize:0,uncompressedSize:0};g&&!h||(de.crc32=p.crc32,de.compressedSize=p.compressedSize,de.uncompressedSize=p.uncompressedSize);var j=0;g&&(j|=8),N||!B&&!C||(j|=2048);var H=0,fe=0;ne&&(H|=16),v==="UNIX"?(fe=798,H|=(function(te,xe){var G=te;return te||(G=xe?16893:33204),(65535&G)<<16})(A.unixPermissions,ne)):(fe=20,H|=(function(te){return 63&(te||0)})(A.dosPermissions)),_=Q.getUTCHours(),_<<=6,_|=Q.getUTCMinutes(),_<<=5,_|=Q.getUTCSeconds()/2,w=Q.getUTCFullYear()-1980,w<<=4,w|=Q.getUTCMonth()+1,w<<=5,w|=Q.getUTCDate(),B&&(ae=i(1,1)+i(u($),4)+D,W+="up"+i(ae.length,2)+ae),C&&(q=i(1,1)+i(u(J),4)+P,W+="uc"+i(q.length,2)+q);var oe="";return oe+=`
\0`,oe+=i(j,2),oe+=k.magic,oe+=i(_,2),oe+=i(w,2),oe+=i(de.crc32,4),oe+=i(de.compressedSize,4),oe+=i(de.uncompressedSize,4),oe+=i($.length,2),oe+=i(W.length,2),{fileRecord:d.LOCAL_FILE_HEADER+oe+$+W,dirRecord:d.CENTRAL_FILE_HEADER+i(fe,2)+oe+i(J.length,2)+"\0\0\0\0"+i(H,4)+i(b,4)+$+W+J}}var s=r("../utils"),l=r("../stream/GenericWorker"),c=r("../utf8"),u=r("../crc32"),d=r("../signature");function m(p,g,h,b){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=h,this.encodeFileName=b,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(m,l),m.prototype.push=function(p){var g=p.meta.percent||0,h=this.entriesCount,b=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:h?(g+100*(h-b-1))/h:100}}))},m.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var h=a(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,h=a(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),g)this.push({data:(function(b){return d.DATA_DESCRIPTOR+i(b.crc32,4)+i(b.compressedSize,4)+i(b.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var h=this.bytesWritten-p,b=(function(v,x,_,w,A){var k=s.transformTo("string",A(w));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+i(v,2)+i(v,2)+i(x,4)+i(_,4)+i(k.length,2)+k})(this.dirRecords.length,h,p,this.zipComment,this.encodeFileName);this.push({data:b,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(h){g.processChunk(h)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(h){g.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(p){var g=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var h=0;h<g.length;h++)try{g[h].error(p)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},n.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(r,n,o){var i=r("../compressions"),a=r("./ZipFileWorker");o.generateWorker=function(s,l,c){var u=new a(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{s.forEach(function(m,p){d++;var g=(function(x,_){var w=x||_,A=i[w];if(!A)throw new Error(w+" is not a valid compression method !");return A})(p.options.compression,l.compression),h=p.options.compressionOptions||l.compressionOptions||{},b=p.dir,v=p.date;p._compressWorker(g,h).withStreamInfo("file",{name:m,dir:b,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(r,n,o){function i(){if(!(this instanceof i))return new i;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new i;for(var s in this)typeof this[s]!="function"&&(a[s]=this[s]);return a}}(i.prototype=r("./object")).loadAsync=r("./load"),i.support=r("./support"),i.defaults=r("./defaults"),i.version="3.10.1",i.loadAsync=function(a,s){return new i().loadAsync(a,s)},i.external=r("./external"),n.exports=i},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(r,n,o){var i=r("./utils"),a=r("./external"),s=r("./utf8"),l=r("./zipEntries"),c=r("./stream/Crc32Probe"),u=r("./nodejsUtils");function d(m){return new a.Promise(function(p,g){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(b){g(b)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}n.exports=function(m,p){var g=this;return p=i.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),u.isNode&&u.isStream(m)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):i.prepareContent("the loaded zip file",m,!0,p.optimizedBinaryString,p.base64).then(function(h){var b=new l(p);return b.load(h),b}).then(function(h){var b=[a.Promise.resolve(h)],v=h.files;if(p.checkCRC32)for(var x=0;x<v.length;x++)b.push(d(v[x]));return a.Promise.all(b)}).then(function(h){for(var b=h.shift(),v=b.files,x=0;x<v.length;x++){var _=v[x],w=_.fileNameStr,A=i.resolve(_.fileNameStr);g.file(A,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:p.createFolders}),_.dir||(g.file(A).unsafeOriginalName=w)}return b.zipComment.length&&(g.comment=b.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(r,n,o){var i=r("../utils"),a=r("../stream/GenericWorker");function s(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}i.inherits(s,a),s.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(r,n,o){var i=r("readable-stream").Readable;function a(s,l,c){i.call(this,l),this._helper=s;var u=this;s.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}r("../utils").inherits(a,i),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(r,n,o){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(i,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(i,a);if(typeof i=="number")throw new Error('The "data" argument must not be a number');return new Buffer(i,a)},allocBuffer:function(i){if(Buffer.alloc)return Buffer.alloc(i);var a=new Buffer(i);return a.fill(0),a},isBuffer:function(i){return Buffer.isBuffer(i)},isStream:function(i){return i&&typeof i.on=="function"&&typeof i.pause=="function"&&typeof i.resume=="function"}}},{}],15:[function(r,n,o){function i(A,k,N){var $,D=s.getTypeOf(k),U=s.extend(N||{},u);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(A=v(A)),U.createFolders&&($=b(A))&&x.call(this,$,!0);var J=D==="string"&&U.binary===!1&&U.base64===!1;N&&N.binary!==void 0||(U.binary=!J),(k instanceof d&&k.uncompressedSize===0||U.dir||!k||k.length===0)&&(U.base64=!1,U.binary=!0,k="",U.compression="STORE",D="string");var P=null;P=k instanceof d||k instanceof l?k:g.isNode&&g.isStream(k)?new h(A,k):s.prepareContent(A,k,U.binary,U.optimizedBinaryString,U.base64);var B=new m(A,P,U);this.files[A]=B}var a=r("./utf8"),s=r("./utils"),l=r("./stream/GenericWorker"),c=r("./stream/StreamHelper"),u=r("./defaults"),d=r("./compressedObject"),m=r("./zipObject"),p=r("./generate"),g=r("./nodejsUtils"),h=r("./nodejs/NodejsStreamInputAdapter"),b=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var k=A.lastIndexOf("/");return 0<k?A.substring(0,k):""},v=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},x=function(A,k){return k=k!==void 0?k:u.createFolders,A=v(A),this.files[A]||i.call(this,A,null,{dir:!0,createFolders:k}),this.files[A]};function _(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var w={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var k,N,$;for(k in this.files)$=this.files[k],(N=k.slice(this.root.length,k.length))&&k.slice(0,this.root.length)===this.root&&A(N,$)},filter:function(A){var k=[];return this.forEach(function(N,$){A(N,$)&&k.push($)}),k},file:function(A,k,N){if(arguments.length!==1)return A=this.root+A,i.call(this,A,k,N),this;if(_(A)){var $=A;return this.filter(function(U,J){return!J.dir&&$.test(U)})}var D=this.files[this.root+A];return D&&!D.dir?D:null},folder:function(A){if(!A)return this;if(_(A))return this.filter(function(D,U){return U.dir&&A.test(D)});var k=this.root+A,N=x.call(this,k),$=this.clone();return $.root=N.name,$},remove:function(A){A=this.root+A;var k=this.files[A];if(k||(A.slice(-1)!=="/"&&(A+="/"),k=this.files[A]),k&&!k.dir)delete this.files[A];else for(var N=this.filter(function(D,U){return U.name.slice(0,A.length)===A}),$=0;$<N.length;$++)delete this.files[N[$].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var k,N={};try{if((N=s.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=N.type.toLowerCase(),N.compression=N.compression.toUpperCase(),N.type==="binarystring"&&(N.type="string"),!N.type)throw new Error("No output type specified.");s.checkSupport(N.type),N.platform!=="darwin"&&N.platform!=="freebsd"&&N.platform!=="linux"&&N.platform!=="sunos"||(N.platform="UNIX"),N.platform==="win32"&&(N.platform="DOS");var $=N.comment||this.comment||"";k=p.generateWorker(this,N,$)}catch(D){(k=new l("error")).error(D)}return new c(k,N.type||"string",N.mimeType)},generateAsync:function(A,k){return this.generateInternalStream(A).accumulate(k)},generateNodeStream:function(A,k){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(k)}};n.exports=w},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(r,n,o){n.exports=r("stream")},{stream:void 0}],17:[function(r,n,o){var i=r("./DataReader");function a(s){i.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}r("../utils").inherits(a,i),a.prototype.byteAt=function(s){return this.data[this.zero+s]},a.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),c=s.charCodeAt(1),u=s.charCodeAt(2),d=s.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},a.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),c=s.charCodeAt(1),u=s.charCodeAt(2),d=s.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(r,n,o){var i=r("../utils");function a(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,c=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=s,c},readString:function(s){return i.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},n.exports=a},{"../utils":32}],19:[function(r,n,o){var i=r("./Uint8ArrayReader");function a(s){i.call(this,s)}r("../utils").inherits(a,i),a.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(r,n,o){var i=r("./DataReader");function a(s){i.call(this,s)}r("../utils").inherits(a,i),a.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},a.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},a.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},a.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(r,n,o){var i=r("./ArrayReader");function a(s){i.call(this,s)}r("../utils").inherits(a,i),a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(r,n,o){var i=r("../utils"),a=r("../support"),s=r("./ArrayReader"),l=r("./StringReader"),c=r("./NodeBufferReader"),u=r("./Uint8ArrayReader");n.exports=function(d){var m=i.getTypeOf(d);return i.checkSupport(m),m!=="string"||a.uint8array?m==="nodebuffer"?new c(d):a.uint8array?new u(i.transformTo("uint8array",d)):new s(i.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(r,n,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(r,n,o){var i=r("./GenericWorker"),a=r("../utils");function s(l){i.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(s,i),s.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},n.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(r,n,o){var i=r("./GenericWorker"),a=r("../crc32");function s(){i.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}r("../utils").inherits(s,i),s.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},n.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(r,n,o){var i=r("../utils"),a=r("./GenericWorker");function s(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}i.inherits(s,a),s.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},n.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(r,n,o){var i=r("../utils"),a=r("./GenericWorker");function s(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=i.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}i.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,i.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(i.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(r,n,o){function i(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}i.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,s){return this._listeners[a].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,s){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,s)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var s=this;return a.on("data",function(l){s.processChunk(l)}),a.on("end",function(){s.end()}),a.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,s){return this.extraStreamInfo[a]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=i},{}],29:[function(r,n,o){var i=r("../utils"),a=r("./ConvertWorker"),s=r("./GenericWorker"),l=r("../base64"),c=r("../support"),u=r("../external"),d=null;if(c.nodestream)try{d=r("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,h){return new u.Promise(function(b,v){var x=[],_=g._internalType,w=g._outputType,A=g._mimeType;g.on("data",function(k,N){x.push(k),h&&h(N)}).on("error",function(k){x=[],v(k)}).on("end",function(){try{var k=(function(N,$,D){switch(N){case"blob":return i.newBlob(i.transformTo("arraybuffer",$),D);case"base64":return l.encode($);default:return i.transformTo(N,$)}})(w,(function(N,$){var D,U=0,J=null,P=0;for(D=0;D<$.length;D++)P+=$[D].length;switch(N){case"string":return $.join("");case"array":return Array.prototype.concat.apply([],$);case"uint8array":for(J=new Uint8Array(P),D=0;D<$.length;D++)J.set($[D],U),U+=$[D].length;return J;case"nodebuffer":return Buffer.concat($);default:throw new Error("concat : unsupported type '"+N+"'")}})(_,x),A);b(k)}catch(N){v(N)}x=[]}).resume()})}function p(g,h,b){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=b,i.checkSupport(v),this._worker=g.pipe(new a(v)),g.lock()}catch(x){this._worker=new s("error"),this._worker.error(x)}}p.prototype={accumulate:function(g){return m(this,g)},on:function(g,h){var b=this;return g==="data"?this._worker.on(g,function(v){h.call(b,v.data,v.meta)}):this._worker.on(g,function(){i.delay(h,arguments,b)}),this},resume:function(){return i.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(i.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},n.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(r,n,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var i=new ArrayBuffer(0);try{o.blob=new Blob([i],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(i),o.blob=a.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!r("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(r,n,o){for(var i=r("./utils"),a=r("./support"),s=r("./nodejsUtils"),l=r("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}o.utf8encode=function(p){return a.nodebuffer?s.newBufferFrom(p,"utf-8"):(function(g){var h,b,v,x,_,w=g.length,A=0;for(x=0;x<w;x++)(64512&(b=g.charCodeAt(x)))==55296&&x+1<w&&(64512&(v=g.charCodeAt(x+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),x++),A+=b<128?1:b<2048?2:b<65536?3:4;for(h=a.uint8array?new Uint8Array(A):new Array(A),x=_=0;_<A;x++)(64512&(b=g.charCodeAt(x)))==55296&&x+1<w&&(64512&(v=g.charCodeAt(x+1)))==56320&&(b=65536+(b-55296<<10)+(v-56320),x++),b<128?h[_++]=b:(b<2048?h[_++]=192|b>>>6:(b<65536?h[_++]=224|b>>>12:(h[_++]=240|b>>>18,h[_++]=128|b>>>12&63),h[_++]=128|b>>>6&63),h[_++]=128|63&b);return h})(p)},o.utf8decode=function(p){return a.nodebuffer?i.transformTo("nodebuffer",p).toString("utf-8"):(function(g){var h,b,v,x,_=g.length,w=new Array(2*_);for(h=b=0;h<_;)if((v=g[h++])<128)w[b++]=v;else if(4<(x=c[v]))w[b++]=65533,h+=x-1;else{for(v&=x===2?31:x===3?15:7;1<x&&h<_;)v=v<<6|63&g[h++],x--;1<x?w[b++]=65533:v<65536?w[b++]=v:(v-=65536,w[b++]=55296|v>>10&1023,w[b++]=56320|1023&v)}return w.length!==b&&(w.subarray?w=w.subarray(0,b):w.length=b),i.applyFromCharCode(w)})(p=i.transformTo(a.uint8array?"uint8array":"array",p))},i.inherits(d,l),d.prototype.processChunk=function(p){var g=i.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var h=g;(g=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),g.set(h,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var b=(function(x,_){var w;for((_=_||x.length)>x.length&&(_=x.length),w=_-1;0<=w&&(192&x[w])==128;)w--;return w<0||w===0?_:w+c[x[w]]>_?w:_})(g),v=g;b!==g.length&&(a.uint8array?(v=g.subarray(0,b),this.leftOver=g.subarray(b,g.length)):(v=g.slice(0,b),this.leftOver=g.slice(b,g.length))),this.push({data:o.utf8decode(v),meta:p.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=d,i.inherits(m,l),m.prototype.processChunk=function(p){this.push({data:o.utf8encode(p.data),meta:p.meta})},o.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(r,n,o){var i=r("./support"),a=r("./base64"),s=r("./nodejsUtils"),l=r("./external");function c(h){return h}function u(h,b){for(var v=0;v<h.length;++v)b[v]=255&h.charCodeAt(v);return b}r("setimmediate"),o.newBlob=function(h,b){o.checkSupport("blob");try{return new Blob([h],{type:b})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(b)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,b,v){var x=[],_=0,w=h.length;if(w<=v)return String.fromCharCode.apply(null,h);for(;_<w;)b==="array"||b==="nodebuffer"?x.push(String.fromCharCode.apply(null,h.slice(_,Math.min(_+v,w)))):x.push(String.fromCharCode.apply(null,h.subarray(_,Math.min(_+v,w)))),_+=v;return x.join("")},stringifyByChar:function(h){for(var b="",v=0;v<h.length;v++)b+=String.fromCharCode(h[v]);return b},applyCanBeUsed:{uint8array:(function(){try{return i.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return i.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var b=65536,v=o.getTypeOf(h),x=!0;if(v==="uint8array"?x=d.applyCanBeUsed.uint8array:v==="nodebuffer"&&(x=d.applyCanBeUsed.nodebuffer),x)for(;1<b;)try{return d.stringifyByChunk(h,v,b)}catch{b=Math.floor(b/2)}return d.stringifyByChar(h)}function p(h,b){for(var v=0;v<h.length;v++)b[v]=h[v];return b}o.applyFromCharCode=m;var g={};g.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return g.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,s.allocBuffer(h.length))}},g.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(h)}},g.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return p(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(new Uint8Array(h))}},g.uint8array={string:m,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return s.newBufferFrom(h)}},g.nodebuffer={string:m,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return g.nodebuffer.uint8array(h).buffer},uint8array:function(h){return p(h,new Uint8Array(h.length))},nodebuffer:c},o.transformTo=function(h,b){if(b=b||"",!h)return b;o.checkSupport(h);var v=o.getTypeOf(b);return g[v][h](b)},o.resolve=function(h){for(var b=h.split("/"),v=[],x=0;x<b.length;x++){var _=b[x];_==="."||_===""&&x!==0&&x!==b.length-1||(_===".."?v.pop():v.push(_))}return v.join("/")},o.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":i.nodebuffer&&s.isBuffer(h)?"nodebuffer":i.uint8array&&h instanceof Uint8Array?"uint8array":i.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(h){if(!i[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(h){var b,v,x="";for(v=0;v<(h||"").length;v++)x+="\\x"+((b=h.charCodeAt(v))<16?"0":"")+b.toString(16).toUpperCase();return x},o.delay=function(h,b,v){setImmediate(function(){h.apply(v||null,b||[])})},o.inherits=function(h,b){function v(){}v.prototype=b.prototype,h.prototype=new v},o.extend=function(){var h,b,v={};for(h=0;h<arguments.length;h++)for(b in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],b)&&v[b]===void 0&&(v[b]=arguments[h][b]);return v},o.prepareContent=function(h,b,v,x,_){return l.Promise.resolve(b).then(function(w){return i.blob&&(w instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(w))!==-1)&&typeof FileReader<"u"?new l.Promise(function(A,k){var N=new FileReader;N.onload=function($){A($.target.result)},N.onerror=function($){k($.target.error)},N.readAsArrayBuffer(w)}):w}).then(function(w){var A=o.getTypeOf(w);return A?(A==="arraybuffer"?w=o.transformTo("uint8array",w):A==="string"&&(_?w=a.decode(w):v&&x!==!0&&(w=(function(k){return u(k,i.uint8array?new Uint8Array(k.length):new Array(k.length))})(w))),w):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(r,n,o){var i=r("./reader/readerFor"),a=r("./utils"),s=r("./signature"),l=r("./zipEntry"),c=r("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(m)+", expected "+a.pretty(d)+")")}},isSignature:function(d,m){var p=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===m;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",p=a.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,p,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),m=this.reader.readInt(4),p=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=m-p;if(0<g)this.isSignature(m,s.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=i(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(r,n,o){var i=r("./reader/readerFor"),a=r("./utils"),s=r("./compressedObject"),l=r("./crc32"),c=r("./utf8"),u=r("./compressions"),d=r("./support");function m(p,g){this.options=p,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,h;if(p.skip(22),this.fileNameLength=p.readInt(2),h=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(b){for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v)&&u[v].magic===b)return u[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=i(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,h,b,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)g=p.readInt(2),h=p.readInt(2),b=p.readData(h),this.extraFields[g]={id:g,length:h,value:b};p.setIndex(v)},handleUTF8:function(){var p=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var h=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var b=this.findExtraFieldUnicodeComment();if(b!==null)this.fileCommentStr=b;else{var v=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=i(p.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=i(p.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null}},n.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(r,n,o){function i(g,h,b){this.name=g,this.dir=b.dir,this.date=b.date,this.comment=b.comment,this.unixPermissions=b.unixPermissions,this.dosPermissions=b.dosPermissions,this._data=h,this._dataBinary=b.binary,this.options={compression:b.compression,compressionOptions:b.compressionOptions}}var a=r("./stream/StreamHelper"),s=r("./stream/DataWorker"),l=r("./utf8"),c=r("./compressedObject"),u=r("./stream/GenericWorker");i.prototype={internalStream:function(g){var h=null,b="string";try{if(!g)throw new Error("No output type specified.");var v=(b=g.toLowerCase())==="string"||b==="text";b!=="binarystring"&&b!=="text"||(b="string"),h=this._decompressWorker();var x=!this._dataBinary;x&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!x&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(_){(h=new u("error")).error(_)}return new a(h,b,"")},async:function(g,h){return this.internalStream(g).accumulate(h)},nodeStream:function(g,h){return this.internalStream(g||"nodebuffer").toNodejsStream(h)},_compressWorker:function(g,h){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var b=this._decompressWorker();return this._dataBinary||(b=b.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(b,g,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new s(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)i.prototype[d[p]]=m;n.exports=i},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(r,n,o){(function(i){var a,s,l=i.MutationObserver||i.WebKitMutationObserver;if(l){var c=0,u=new l(g),d=i.document.createTextNode("");u.observe(d,{characterData:!0}),a=function(){d.data=c=++c%2}}else if(i.setImmediate||i.MessageChannel===void 0)a="document"in i&&"onreadystatechange"in i.document.createElement("script")?function(){var h=i.document.createElement("script");h.onreadystatechange=function(){g(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},i.document.documentElement.appendChild(h)}:function(){setTimeout(g,0)};else{var m=new i.MessageChannel;m.port1.onmessage=g,a=function(){m.port2.postMessage(0)}}var p=[];function g(){var h,b;s=!0;for(var v=p.length;v;){for(b=p,p=[],h=-1;++h<v;)b[h]();v=p.length}s=!1}n.exports=function(h){p.push(h)!==1||s||a()}}).call(this,typeof or<"u"?or:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(r,n,o){var i=r("immediate");function a(){}var s={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,v!==a&&h(this,v)}function m(v,x,_){this.promise=v,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function p(v,x,_){i(function(){var w;try{w=x(_)}catch(A){return s.reject(v,A)}w===v?s.reject(v,new TypeError("Cannot resolve promise with itself")):s.resolve(v,w)})}function g(v){var x=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof x=="function")return function(){x.apply(v,arguments)}}function h(v,x){var _=!1;function w(N){_||(_=!0,s.reject(v,N))}function A(N){_||(_=!0,s.resolve(v,N))}var k=b(function(){x(A,w)});k.status==="error"&&w(k.value)}function b(v,x){var _={};try{_.value=v(x),_.status="success"}catch(w){_.status="error",_.value=w}return _}(n.exports=d).prototype.finally=function(v){if(typeof v!="function")return this;var x=this.constructor;return this.then(function(_){return x.resolve(v()).then(function(){return _})},function(_){return x.resolve(v()).then(function(){throw _})})},d.prototype.catch=function(v){return this.then(null,v)},d.prototype.then=function(v,x){if(typeof v!="function"&&this.state===c||typeof x!="function"&&this.state===l)return this;var _=new this.constructor(a);return this.state!==u?p(_,this.state===c?v:x,this.outcome):this.queue.push(new m(_,v,x)),_},m.prototype.callFulfilled=function(v){s.resolve(this.promise,v)},m.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},m.prototype.callRejected=function(v){s.reject(this.promise,v)},m.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},s.resolve=function(v,x){var _=b(g,x);if(_.status==="error")return s.reject(v,_.value);var w=_.value;if(w)h(v,w);else{v.state=c,v.outcome=x;for(var A=-1,k=v.queue.length;++A<k;)v.queue[A].callFulfilled(x)}return v},s.reject=function(v,x){v.state=l,v.outcome=x;for(var _=-1,w=v.queue.length;++_<w;)v.queue[_].callRejected(x);return v},d.resolve=function(v){return v instanceof this?v:s.resolve(new this(a),v)},d.reject=function(v){var x=new this(a);return s.reject(x,v)},d.all=function(v){var x=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=v.length,w=!1;if(!_)return this.resolve([]);for(var A=new Array(_),k=0,N=-1,$=new this(a);++N<_;)D(v[N],N);return $;function D(U,J){x.resolve(U).then(function(P){A[J]=P,++k!==_||w||(w=!0,s.resolve($,A))},function(P){w||(w=!0,s.reject($,P))})}},d.race=function(v){var x=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=v.length,w=!1;if(!_)return this.resolve([]);for(var A=-1,k=new this(a);++A<_;)N=v[A],x.resolve(N).then(function($){w||(w=!0,s.resolve(k,$))},function($){w||(w=!0,s.reject(k,$))});var N;return k}},{immediate:36}],38:[function(r,n,o){var i={};(0,r("./lib/utils/common").assign)(i,r("./lib/deflate"),r("./lib/inflate"),r("./lib/zlib/constants")),n.exports=i},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(r,n,o){var i=r("./zlib/deflate"),a=r("./utils/common"),s=r("./utils/strings"),l=r("./zlib/messages"),c=r("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,p=0,g=8;function h(v){if(!(this instanceof h))return new h(v);this.options=a.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var _=i.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(_!==d)throw new Error(l[_]);if(x.header&&i.deflateSetHeader(this.strm,x.header),x.dictionary){var w;if(w=typeof x.dictionary=="string"?s.string2buf(x.dictionary):u.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(_=i.deflateSetDictionary(this.strm,w))!==d)throw new Error(l[_]);this._dict_set=!0}}function b(v,x){var _=new h(x);if(_.push(v,!0),_.err)throw _.msg||l[_.err];return _.result}h.prototype.push=function(v,x){var _,w,A=this.strm,k=this.options.chunkSize;if(this.ended)return!1;w=x===~~x?x:x===!0?4:0,typeof v=="string"?A.input=s.string2buf(v):u.call(v)==="[object ArrayBuffer]"?A.input=new Uint8Array(v):A.input=v,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new a.Buf8(k),A.next_out=0,A.avail_out=k),(_=i.deflate(A,w))!==1&&_!==d)return this.onEnd(_),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||w!==4&&w!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(a.shrinkBuf(A.output,A.next_out))):this.onData(a.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&_!==1);return w===4?(_=i.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===d):w!==2||(this.onEnd(d),!(A.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},o.Deflate=h,o.deflate=b,o.deflateRaw=function(v,x){return(x=x||{}).raw=!0,b(v,x)},o.gzip=function(v,x){return(x=x||{}).gzip=!0,b(v,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(r,n,o){var i=r("./zlib/inflate"),a=r("./utils/common"),s=r("./utils/strings"),l=r("./zlib/constants"),c=r("./zlib/messages"),u=r("./zlib/zstream"),d=r("./zlib/gzheader"),m=Object.prototype.toString;function p(h){if(!(this instanceof p))return new p(h);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},h||{});var b=this.options;b.raw&&0<=b.windowBits&&b.windowBits<16&&(b.windowBits=-b.windowBits,b.windowBits===0&&(b.windowBits=-15)),!(0<=b.windowBits&&b.windowBits<16)||h&&h.windowBits||(b.windowBits+=32),15<b.windowBits&&b.windowBits<48&&(15&b.windowBits)==0&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=i.inflateInit2(this.strm,b.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new d,i.inflateGetHeader(this.strm,this.header)}function g(h,b){var v=new p(b);if(v.push(h,!0),v.err)throw v.msg||c[v.err];return v.result}p.prototype.push=function(h,b){var v,x,_,w,A,k,N=this.strm,$=this.options.chunkSize,D=this.options.dictionary,U=!1;if(this.ended)return!1;x=b===~~b?b:b===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?N.input=s.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?N.input=new Uint8Array(h):N.input=h,N.next_in=0,N.avail_in=N.input.length;do{if(N.avail_out===0&&(N.output=new a.Buf8($),N.next_out=0,N.avail_out=$),(v=i.inflate(N,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&D&&(k=typeof D=="string"?s.string2buf(D):m.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,v=i.inflateSetDictionary(this.strm,k)),v===l.Z_BUF_ERROR&&U===!0&&(v=l.Z_OK,U=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);N.next_out&&(N.avail_out!==0&&v!==l.Z_STREAM_END&&(N.avail_in!==0||x!==l.Z_FINISH&&x!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=s.utf8border(N.output,N.next_out),w=N.next_out-_,A=s.buf2string(N.output,_),N.next_out=w,N.avail_out=$-w,w&&a.arraySet(N.output,N.output,_,w,0),this.onData(A)):this.onData(a.shrinkBuf(N.output,N.next_out)))),N.avail_in===0&&N.avail_out===0&&(U=!0)}while((0<N.avail_in||N.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(x=l.Z_FINISH),x===l.Z_FINISH?(v=i.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):x!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(N.avail_out=0))},p.prototype.onData=function(h){this.chunks.push(h)},p.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},o.Inflate=p,o.inflate=g,o.inflateRaw=function(h,b){return(b=b||{}).raw=!0,g(h,b)},o.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(r,n,o){var i=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},o.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){var c,u,d,m,p,g;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(g=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)p=l[c],g.set(p,m),m+=p.length;return g}},s={arraySet:function(l,c,u,d,m){for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};o.setTyped=function(l){l?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,a)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,s))},o.setTyped(i)},{}],42:[function(r,n,o){var i=r("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new i.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&s||!d.subarray&&a))return String.fromCharCode.apply(null,i.shrinkBuf(d,m));for(var p="",g=0;g<m;g++)p+=String.fromCharCode(d[g]);return p}l[254]=l[254]=1,o.string2buf=function(d){var m,p,g,h,b,v=d.length,x=0;for(h=0;h<v;h++)(64512&(p=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),h++),x+=p<128?1:p<2048?2:p<65536?3:4;for(m=new i.Buf8(x),h=b=0;b<x;h++)(64512&(p=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),h++),p<128?m[b++]=p:(p<2048?m[b++]=192|p>>>6:(p<65536?m[b++]=224|p>>>12:(m[b++]=240|p>>>18,m[b++]=128|p>>>12&63),m[b++]=128|p>>>6&63),m[b++]=128|63&p);return m},o.buf2binstring=function(d){return u(d,d.length)},o.binstring2buf=function(d){for(var m=new i.Buf8(d.length),p=0,g=m.length;p<g;p++)m[p]=d.charCodeAt(p);return m},o.buf2string=function(d,m){var p,g,h,b,v=m||d.length,x=new Array(2*v);for(p=g=0;p<v;)if((h=d[p++])<128)x[g++]=h;else if(4<(b=l[h]))x[g++]=65533,p+=b-1;else{for(h&=b===2?31:b===3?15:7;1<b&&p<v;)h=h<<6|63&d[p++],b--;1<b?x[g++]=65533:h<65536?x[g++]=h:(h-=65536,x[g++]=55296|h>>10&1023,x[g++]=56320|1023&h)}return u(x,g)},o.utf8border=function(d,m){var p;for((m=m||d.length)>d.length&&(m=d.length),p=m-1;0<=p&&(192&d[p])==128;)p--;return p<0||p===0?m:p+l[d[p]]>m?p:m}},{"./common":41}],43:[function(r,n,o){n.exports=function(i,a,s,l){for(var c=65535&i|0,u=i>>>16&65535|0,d=0;s!==0;){for(s-=d=2e3<s?2e3:s;u=u+(c=c+a[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(r,n,o){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(r,n,o){var i=(function(){for(var a,s=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;s[l]=a}return s})();n.exports=function(a,s,l,c){var u=i,d=c+l;a^=-1;for(var m=c;m<d;m++)a=a>>>8^u[255&(a^s[m])];return-1^a}},{}],46:[function(r,n,o){var i,a=r("../utils/common"),s=r("./trees"),l=r("./adler32"),c=r("./crc32"),u=r("./messages"),d=0,m=4,p=0,g=-2,h=-1,b=4,v=2,x=8,_=9,w=286,A=30,k=19,N=2*w+1,$=15,D=3,U=258,J=U+D+1,P=42,B=113,C=1,W=2,ae=3,q=4;function ne(f,O){return f.msg=u[O],O}function Q(f){return(f<<1)-(4<f?9:0)}function de(f){for(var O=f.length;0<=--O;)f[O]=0}function j(f){var O=f.state,I=O.pending;I>f.avail_out&&(I=f.avail_out),I!==0&&(a.arraySet(f.output,O.pending_buf,O.pending_out,I,f.next_out),f.next_out+=I,O.pending_out+=I,f.total_out+=I,f.avail_out-=I,O.pending-=I,O.pending===0&&(O.pending_out=0))}function H(f,O){s._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,O),f.block_start=f.strstart,j(f.strm)}function fe(f,O){f.pending_buf[f.pending++]=O}function oe(f,O){f.pending_buf[f.pending++]=O>>>8&255,f.pending_buf[f.pending++]=255&O}function te(f,O){var I,S,y=f.max_chain_length,T=f.strstart,F=f.prev_length,L=f.nice_match,M=f.strstart>f.w_size-J?f.strstart-(f.w_size-J):0,z=f.window,Y=f.w_mask,V=f.prev,ee=f.strstart+U,he=z[T+F-1],ce=z[T+F];f.prev_length>=f.good_match&&(y>>=2),L>f.lookahead&&(L=f.lookahead);do if(z[(I=O)+F]===ce&&z[I+F-1]===he&&z[I]===z[T]&&z[++I]===z[T+1]){T+=2,I++;do;while(z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&z[++T]===z[++I]&&T<ee);if(S=U-(ee-T),T=ee-U,F<S){if(f.match_start=O,L<=(F=S))break;he=z[T+F-1],ce=z[T+F]}}while((O=V[O&Y])>M&&--y!=0);return F<=f.lookahead?F:f.lookahead}function xe(f){var O,I,S,y,T,F,L,M,z,Y,V=f.w_size;do{if(y=f.window_size-f.lookahead-f.strstart,f.strstart>=V+(V-J)){for(a.arraySet(f.window,f.window,V,V,0),f.match_start-=V,f.strstart-=V,f.block_start-=V,O=I=f.hash_size;S=f.head[--O],f.head[O]=V<=S?S-V:0,--I;);for(O=I=V;S=f.prev[--O],f.prev[O]=V<=S?S-V:0,--I;);y+=V}if(f.strm.avail_in===0)break;if(F=f.strm,L=f.window,M=f.strstart+f.lookahead,z=y,Y=void 0,Y=F.avail_in,z<Y&&(Y=z),I=Y===0?0:(F.avail_in-=Y,a.arraySet(L,F.input,F.next_in,Y,M),F.state.wrap===1?F.adler=l(F.adler,L,Y,M):F.state.wrap===2&&(F.adler=c(F.adler,L,Y,M)),F.next_in+=Y,F.total_in+=Y,Y),f.lookahead+=I,f.lookahead+f.insert>=D)for(T=f.strstart-f.insert,f.ins_h=f.window[T],f.ins_h=(f.ins_h<<f.hash_shift^f.window[T+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[T+D-1])&f.hash_mask,f.prev[T&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=T,T++,f.insert--,!(f.lookahead+f.insert<D)););}while(f.lookahead<J&&f.strm.avail_in!==0)}function G(f,O){for(var I,S;;){if(f.lookahead<J){if(xe(f),f.lookahead<J&&O===d)return C;if(f.lookahead===0)break}if(I=0,f.lookahead>=D&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+D-1])&f.hash_mask,I=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),I!==0&&f.strstart-I<=f.w_size-J&&(f.match_length=te(f,I)),f.match_length>=D)if(S=s._tr_tally(f,f.strstart-f.match_start,f.match_length-D),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=D){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+D-1])&f.hash_mask,I=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else S=s._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(S&&(H(f,!1),f.strm.avail_out===0))return C}return f.insert=f.strstart<D-1?f.strstart:D-1,O===m?(H(f,!0),f.strm.avail_out===0?ae:q):f.last_lit&&(H(f,!1),f.strm.avail_out===0)?C:W}function Z(f,O){for(var I,S,y;;){if(f.lookahead<J){if(xe(f),f.lookahead<J&&O===d)return C;if(f.lookahead===0)break}if(I=0,f.lookahead>=D&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+D-1])&f.hash_mask,I=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=D-1,I!==0&&f.prev_length<f.max_lazy_match&&f.strstart-I<=f.w_size-J&&(f.match_length=te(f,I),f.match_length<=5&&(f.strategy===1||f.match_length===D&&4096<f.strstart-f.match_start)&&(f.match_length=D-1)),f.prev_length>=D&&f.match_length<=f.prev_length){for(y=f.strstart+f.lookahead-D,S=s._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-D),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=y&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+D-1])&f.hash_mask,I=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=D-1,f.strstart++,S&&(H(f,!1),f.strm.avail_out===0))return C}else if(f.match_available){if((S=s._tr_tally(f,0,f.window[f.strstart-1]))&&H(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return C}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(S=s._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<D-1?f.strstart:D-1,O===m?(H(f,!0),f.strm.avail_out===0?ae:q):f.last_lit&&(H(f,!1),f.strm.avail_out===0)?C:W}function K(f,O,I,S,y){this.good_length=f,this.max_lazy=O,this.nice_length=I,this.max_chain=S,this.func=y}function ie(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*N),this.dyn_dtree=new a.Buf16(2*(2*A+1)),this.bl_tree=new a.Buf16(2*(2*k+1)),de(this.dyn_ltree),de(this.dyn_dtree),de(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16($+1),this.heap=new a.Buf16(2*w+1),de(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*w+1),de(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function pe(f){var O;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=v,(O=f.state).pending=0,O.pending_out=0,O.wrap<0&&(O.wrap=-O.wrap),O.status=O.wrap?P:B,f.adler=O.wrap===2?0:1,O.last_flush=d,s._tr_init(O),p):ne(f,g)}function E(f){var O=pe(f);return O===p&&(function(I){I.window_size=2*I.w_size,de(I.head),I.max_lazy_match=i[I.level].max_lazy,I.good_match=i[I.level].good_length,I.nice_match=i[I.level].nice_length,I.max_chain_length=i[I.level].max_chain,I.strstart=0,I.block_start=0,I.lookahead=0,I.insert=0,I.match_length=I.prev_length=D-1,I.match_available=0,I.ins_h=0})(f.state),O}function R(f,O,I,S,y,T){if(!f)return g;var F=1;if(O===h&&(O=6),S<0?(F=0,S=-S):15<S&&(F=2,S-=16),y<1||_<y||I!==x||S<8||15<S||O<0||9<O||T<0||b<T)return ne(f,g);S===8&&(S=9);var L=new ie;return(f.state=L).strm=f,L.wrap=F,L.gzhead=null,L.w_bits=S,L.w_size=1<<L.w_bits,L.w_mask=L.w_size-1,L.hash_bits=y+7,L.hash_size=1<<L.hash_bits,L.hash_mask=L.hash_size-1,L.hash_shift=~~((L.hash_bits+D-1)/D),L.window=new a.Buf8(2*L.w_size),L.head=new a.Buf16(L.hash_size),L.prev=new a.Buf16(L.w_size),L.lit_bufsize=1<<y+6,L.pending_buf_size=4*L.lit_bufsize,L.pending_buf=new a.Buf8(L.pending_buf_size),L.d_buf=1*L.lit_bufsize,L.l_buf=3*L.lit_bufsize,L.level=O,L.strategy=T,L.method=I,E(f)}i=[new K(0,0,0,0,function(f,O){var I=65535;for(I>f.pending_buf_size-5&&(I=f.pending_buf_size-5);;){if(f.lookahead<=1){if(xe(f),f.lookahead===0&&O===d)return C;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var S=f.block_start+I;if((f.strstart===0||f.strstart>=S)&&(f.lookahead=f.strstart-S,f.strstart=S,H(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-J&&(H(f,!1),f.strm.avail_out===0))return C}return f.insert=0,O===m?(H(f,!0),f.strm.avail_out===0?ae:q):(f.strstart>f.block_start&&(H(f,!1),f.strm.avail_out),C)}),new K(4,4,8,4,G),new K(4,5,16,8,G),new K(4,6,32,32,G),new K(4,4,16,16,Z),new K(8,16,32,32,Z),new K(8,16,128,128,Z),new K(8,32,128,256,Z),new K(32,128,258,1024,Z),new K(32,258,258,4096,Z)],o.deflateInit=function(f,O){return R(f,O,x,15,8,0)},o.deflateInit2=R,o.deflateReset=E,o.deflateResetKeep=pe,o.deflateSetHeader=function(f,O){return f&&f.state?f.state.wrap!==2?g:(f.state.gzhead=O,p):g},o.deflate=function(f,O){var I,S,y,T;if(!f||!f.state||5<O||O<0)return f?ne(f,g):g;if(S=f.state,!f.output||!f.input&&f.avail_in!==0||S.status===666&&O!==m)return ne(f,f.avail_out===0?-5:g);if(S.strm=f,I=S.last_flush,S.last_flush=O,S.status===P)if(S.wrap===2)f.adler=0,fe(S,31),fe(S,139),fe(S,8),S.gzhead?(fe(S,(S.gzhead.text?1:0)+(S.gzhead.hcrc?2:0)+(S.gzhead.extra?4:0)+(S.gzhead.name?8:0)+(S.gzhead.comment?16:0)),fe(S,255&S.gzhead.time),fe(S,S.gzhead.time>>8&255),fe(S,S.gzhead.time>>16&255),fe(S,S.gzhead.time>>24&255),fe(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),fe(S,255&S.gzhead.os),S.gzhead.extra&&S.gzhead.extra.length&&(fe(S,255&S.gzhead.extra.length),fe(S,S.gzhead.extra.length>>8&255)),S.gzhead.hcrc&&(f.adler=c(f.adler,S.pending_buf,S.pending,0)),S.gzindex=0,S.status=69):(fe(S,0),fe(S,0),fe(S,0),fe(S,0),fe(S,0),fe(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),fe(S,3),S.status=B);else{var F=x+(S.w_bits-8<<4)<<8;F|=(2<=S.strategy||S.level<2?0:S.level<6?1:S.level===6?2:3)<<6,S.strstart!==0&&(F|=32),F+=31-F%31,S.status=B,oe(S,F),S.strstart!==0&&(oe(S,f.adler>>>16),oe(S,65535&f.adler)),f.adler=1}if(S.status===69)if(S.gzhead.extra){for(y=S.pending;S.gzindex<(65535&S.gzhead.extra.length)&&(S.pending!==S.pending_buf_size||(S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),j(f),y=S.pending,S.pending!==S.pending_buf_size));)fe(S,255&S.gzhead.extra[S.gzindex]),S.gzindex++;S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),S.gzindex===S.gzhead.extra.length&&(S.gzindex=0,S.status=73)}else S.status=73;if(S.status===73)if(S.gzhead.name){y=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),j(f),y=S.pending,S.pending===S.pending_buf_size)){T=1;break}T=S.gzindex<S.gzhead.name.length?255&S.gzhead.name.charCodeAt(S.gzindex++):0,fe(S,T)}while(T!==0);S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),T===0&&(S.gzindex=0,S.status=91)}else S.status=91;if(S.status===91)if(S.gzhead.comment){y=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),j(f),y=S.pending,S.pending===S.pending_buf_size)){T=1;break}T=S.gzindex<S.gzhead.comment.length?255&S.gzhead.comment.charCodeAt(S.gzindex++):0,fe(S,T)}while(T!==0);S.gzhead.hcrc&&S.pending>y&&(f.adler=c(f.adler,S.pending_buf,S.pending-y,y)),T===0&&(S.status=103)}else S.status=103;if(S.status===103&&(S.gzhead.hcrc?(S.pending+2>S.pending_buf_size&&j(f),S.pending+2<=S.pending_buf_size&&(fe(S,255&f.adler),fe(S,f.adler>>8&255),f.adler=0,S.status=B)):S.status=B),S.pending!==0){if(j(f),f.avail_out===0)return S.last_flush=-1,p}else if(f.avail_in===0&&Q(O)<=Q(I)&&O!==m)return ne(f,-5);if(S.status===666&&f.avail_in!==0)return ne(f,-5);if(f.avail_in!==0||S.lookahead!==0||O!==d&&S.status!==666){var L=S.strategy===2?(function(M,z){for(var Y;;){if(M.lookahead===0&&(xe(M),M.lookahead===0)){if(z===d)return C;break}if(M.match_length=0,Y=s._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++,Y&&(H(M,!1),M.strm.avail_out===0))return C}return M.insert=0,z===m?(H(M,!0),M.strm.avail_out===0?ae:q):M.last_lit&&(H(M,!1),M.strm.avail_out===0)?C:W})(S,O):S.strategy===3?(function(M,z){for(var Y,V,ee,he,ce=M.window;;){if(M.lookahead<=U){if(xe(M),M.lookahead<=U&&z===d)return C;if(M.lookahead===0)break}if(M.match_length=0,M.lookahead>=D&&0<M.strstart&&(V=ce[ee=M.strstart-1])===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]){he=M.strstart+U;do;while(V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&V===ce[++ee]&&ee<he);M.match_length=U-(he-ee),M.match_length>M.lookahead&&(M.match_length=M.lookahead)}if(M.match_length>=D?(Y=s._tr_tally(M,1,M.match_length-D),M.lookahead-=M.match_length,M.strstart+=M.match_length,M.match_length=0):(Y=s._tr_tally(M,0,M.window[M.strstart]),M.lookahead--,M.strstart++),Y&&(H(M,!1),M.strm.avail_out===0))return C}return M.insert=0,z===m?(H(M,!0),M.strm.avail_out===0?ae:q):M.last_lit&&(H(M,!1),M.strm.avail_out===0)?C:W})(S,O):i[S.level].func(S,O);if(L!==ae&&L!==q||(S.status=666),L===C||L===ae)return f.avail_out===0&&(S.last_flush=-1),p;if(L===W&&(O===1?s._tr_align(S):O!==5&&(s._tr_stored_block(S,0,0,!1),O===3&&(de(S.head),S.lookahead===0&&(S.strstart=0,S.block_start=0,S.insert=0))),j(f),f.avail_out===0))return S.last_flush=-1,p}return O!==m?p:S.wrap<=0?1:(S.wrap===2?(fe(S,255&f.adler),fe(S,f.adler>>8&255),fe(S,f.adler>>16&255),fe(S,f.adler>>24&255),fe(S,255&f.total_in),fe(S,f.total_in>>8&255),fe(S,f.total_in>>16&255),fe(S,f.total_in>>24&255)):(oe(S,f.adler>>>16),oe(S,65535&f.adler)),j(f),0<S.wrap&&(S.wrap=-S.wrap),S.pending!==0?p:1)},o.deflateEnd=function(f){var O;return f&&f.state?(O=f.state.status)!==P&&O!==69&&O!==73&&O!==91&&O!==103&&O!==B&&O!==666?ne(f,g):(f.state=null,O===B?ne(f,-3):p):g},o.deflateSetDictionary=function(f,O){var I,S,y,T,F,L,M,z,Y=O.length;if(!f||!f.state||(T=(I=f.state).wrap)===2||T===1&&I.status!==P||I.lookahead)return g;for(T===1&&(f.adler=l(f.adler,O,Y,0)),I.wrap=0,Y>=I.w_size&&(T===0&&(de(I.head),I.strstart=0,I.block_start=0,I.insert=0),z=new a.Buf8(I.w_size),a.arraySet(z,O,Y-I.w_size,I.w_size,0),O=z,Y=I.w_size),F=f.avail_in,L=f.next_in,M=f.input,f.avail_in=Y,f.next_in=0,f.input=O,xe(I);I.lookahead>=D;){for(S=I.strstart,y=I.lookahead-(D-1);I.ins_h=(I.ins_h<<I.hash_shift^I.window[S+D-1])&I.hash_mask,I.prev[S&I.w_mask]=I.head[I.ins_h],I.head[I.ins_h]=S,S++,--y;);I.strstart=S,I.lookahead=D-1,xe(I)}return I.strstart+=I.lookahead,I.block_start=I.strstart,I.insert=I.lookahead,I.lookahead=0,I.match_length=I.prev_length=D-1,I.match_available=0,f.next_in=L,f.input=M,f.avail_in=F,I.wrap=T,p},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(r,n,o){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(r,n,o){n.exports=function(i,a){var s,l,c,u,d,m,p,g,h,b,v,x,_,w,A,k,N,$,D,U,J,P,B,C,W;s=i.state,l=i.next_in,C=i.input,c=l+(i.avail_in-5),u=i.next_out,W=i.output,d=u-(a-i.avail_out),m=u+(i.avail_out-257),p=s.dmax,g=s.wsize,h=s.whave,b=s.wnext,v=s.window,x=s.hold,_=s.bits,w=s.lencode,A=s.distcode,k=(1<<s.lenbits)-1,N=(1<<s.distbits)-1;e:do{_<15&&(x+=C[l++]<<_,_+=8,x+=C[l++]<<_,_+=8),$=w[x&k];t:for(;;){if(x>>>=D=$>>>24,_-=D,(D=$>>>16&255)===0)W[u++]=65535&$;else{if(!(16&D)){if((64&D)==0){$=w[(65535&$)+(x&(1<<D)-1)];continue t}if(32&D){s.mode=12;break e}i.msg="invalid literal/length code",s.mode=30;break e}U=65535&$,(D&=15)&&(_<D&&(x+=C[l++]<<_,_+=8),U+=x&(1<<D)-1,x>>>=D,_-=D),_<15&&(x+=C[l++]<<_,_+=8,x+=C[l++]<<_,_+=8),$=A[x&N];r:for(;;){if(x>>>=D=$>>>24,_-=D,!(16&(D=$>>>16&255))){if((64&D)==0){$=A[(65535&$)+(x&(1<<D)-1)];continue r}i.msg="invalid distance code",s.mode=30;break e}if(J=65535&$,_<(D&=15)&&(x+=C[l++]<<_,(_+=8)<D&&(x+=C[l++]<<_,_+=8)),p<(J+=x&(1<<D)-1)){i.msg="invalid distance too far back",s.mode=30;break e}if(x>>>=D,_-=D,(D=u-d)<J){if(h<(D=J-D)&&s.sane){i.msg="invalid distance too far back",s.mode=30;break e}if(B=v,(P=0)===b){if(P+=g-D,D<U){for(U-=D;W[u++]=v[P++],--D;);P=u-J,B=W}}else if(b<D){if(P+=g+b-D,(D-=b)<U){for(U-=D;W[u++]=v[P++],--D;);if(P=0,b<U){for(U-=D=b;W[u++]=v[P++],--D;);P=u-J,B=W}}}else if(P+=b-D,D<U){for(U-=D;W[u++]=v[P++],--D;);P=u-J,B=W}for(;2<U;)W[u++]=B[P++],W[u++]=B[P++],W[u++]=B[P++],U-=3;U&&(W[u++]=B[P++],1<U&&(W[u++]=B[P++]))}else{for(P=u-J;W[u++]=W[P++],W[u++]=W[P++],W[u++]=W[P++],2<(U-=3););U&&(W[u++]=W[P++],1<U&&(W[u++]=W[P++]))}break}}break}}while(l<c&&u<m);l-=U=_>>3,x&=(1<<(_-=U<<3))-1,i.next_in=l,i.next_out=u,i.avail_in=l<c?c-l+5:5-(l-c),i.avail_out=u<m?m-u+257:257-(u-m),s.hold=x,s.bits=_}},{}],49:[function(r,n,o){var i=r("../utils/common"),a=r("./adler32"),s=r("./crc32"),l=r("./inffast"),c=r("./inftrees"),u=1,d=2,m=0,p=-2,g=1,h=852,b=592;function v(P){return(P>>>24&255)+(P>>>8&65280)+((65280&P)<<8)+((255&P)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new i.Buf16(320),this.work=new i.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(P){var B;return P&&P.state?(B=P.state,P.total_in=P.total_out=B.total=0,P.msg="",B.wrap&&(P.adler=1&B.wrap),B.mode=g,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new i.Buf32(h),B.distcode=B.distdyn=new i.Buf32(b),B.sane=1,B.back=-1,m):p}function w(P){var B;return P&&P.state?((B=P.state).wsize=0,B.whave=0,B.wnext=0,_(P)):p}function A(P,B){var C,W;return P&&P.state?(W=P.state,B<0?(C=0,B=-B):(C=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?p:(W.window!==null&&W.wbits!==B&&(W.window=null),W.wrap=C,W.wbits=B,w(P))):p}function k(P,B){var C,W;return P?(W=new x,(P.state=W).window=null,(C=A(P,B))!==m&&(P.state=null),C):p}var N,$,D=!0;function U(P){if(D){var B;for(N=new i.Buf32(512),$=new i.Buf32(32),B=0;B<144;)P.lens[B++]=8;for(;B<256;)P.lens[B++]=9;for(;B<280;)P.lens[B++]=7;for(;B<288;)P.lens[B++]=8;for(c(u,P.lens,0,288,N,0,P.work,{bits:9}),B=0;B<32;)P.lens[B++]=5;c(d,P.lens,0,32,$,0,P.work,{bits:5}),D=!1}P.lencode=N,P.lenbits=9,P.distcode=$,P.distbits=5}function J(P,B,C,W){var ae,q=P.state;return q.window===null&&(q.wsize=1<<q.wbits,q.wnext=0,q.whave=0,q.window=new i.Buf8(q.wsize)),W>=q.wsize?(i.arraySet(q.window,B,C-q.wsize,q.wsize,0),q.wnext=0,q.whave=q.wsize):(W<(ae=q.wsize-q.wnext)&&(ae=W),i.arraySet(q.window,B,C-W,ae,q.wnext),(W-=ae)?(i.arraySet(q.window,B,C-W,W,0),q.wnext=W,q.whave=q.wsize):(q.wnext+=ae,q.wnext===q.wsize&&(q.wnext=0),q.whave<q.wsize&&(q.whave+=ae))),0}o.inflateReset=w,o.inflateReset2=A,o.inflateResetKeep=_,o.inflateInit=function(P){return k(P,15)},o.inflateInit2=k,o.inflate=function(P,B){var C,W,ae,q,ne,Q,de,j,H,fe,oe,te,xe,G,Z,K,ie,pe,E,R,f,O,I,S,y=0,T=new i.Buf8(4),F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!P||!P.state||!P.output||!P.input&&P.avail_in!==0)return p;(C=P.state).mode===12&&(C.mode=13),ne=P.next_out,ae=P.output,de=P.avail_out,q=P.next_in,W=P.input,Q=P.avail_in,j=C.hold,H=C.bits,fe=Q,oe=de,O=m;e:for(;;)switch(C.mode){case g:if(C.wrap===0){C.mode=13;break}for(;H<16;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(2&C.wrap&&j===35615){T[C.check=0]=255&j,T[1]=j>>>8&255,C.check=s(C.check,T,2,0),H=j=0,C.mode=2;break}if(C.flags=0,C.head&&(C.head.done=!1),!(1&C.wrap)||(((255&j)<<8)+(j>>8))%31){P.msg="incorrect header check",C.mode=30;break}if((15&j)!=8){P.msg="unknown compression method",C.mode=30;break}if(H-=4,f=8+(15&(j>>>=4)),C.wbits===0)C.wbits=f;else if(f>C.wbits){P.msg="invalid window size",C.mode=30;break}C.dmax=1<<f,P.adler=C.check=1,C.mode=512&j?10:12,H=j=0;break;case 2:for(;H<16;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(C.flags=j,(255&C.flags)!=8){P.msg="unknown compression method",C.mode=30;break}if(57344&C.flags){P.msg="unknown header flags set",C.mode=30;break}C.head&&(C.head.text=j>>8&1),512&C.flags&&(T[0]=255&j,T[1]=j>>>8&255,C.check=s(C.check,T,2,0)),H=j=0,C.mode=3;case 3:for(;H<32;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.head&&(C.head.time=j),512&C.flags&&(T[0]=255&j,T[1]=j>>>8&255,T[2]=j>>>16&255,T[3]=j>>>24&255,C.check=s(C.check,T,4,0)),H=j=0,C.mode=4;case 4:for(;H<16;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.head&&(C.head.xflags=255&j,C.head.os=j>>8),512&C.flags&&(T[0]=255&j,T[1]=j>>>8&255,C.check=s(C.check,T,2,0)),H=j=0,C.mode=5;case 5:if(1024&C.flags){for(;H<16;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.length=j,C.head&&(C.head.extra_len=j),512&C.flags&&(T[0]=255&j,T[1]=j>>>8&255,C.check=s(C.check,T,2,0)),H=j=0}else C.head&&(C.head.extra=null);C.mode=6;case 6:if(1024&C.flags&&(Q<(te=C.length)&&(te=Q),te&&(C.head&&(f=C.head.extra_len-C.length,C.head.extra||(C.head.extra=new Array(C.head.extra_len)),i.arraySet(C.head.extra,W,q,te,f)),512&C.flags&&(C.check=s(C.check,W,te,q)),Q-=te,q+=te,C.length-=te),C.length))break e;C.length=0,C.mode=7;case 7:if(2048&C.flags){if(Q===0)break e;for(te=0;f=W[q+te++],C.head&&f&&C.length<65536&&(C.head.name+=String.fromCharCode(f)),f&&te<Q;);if(512&C.flags&&(C.check=s(C.check,W,te,q)),Q-=te,q+=te,f)break e}else C.head&&(C.head.name=null);C.length=0,C.mode=8;case 8:if(4096&C.flags){if(Q===0)break e;for(te=0;f=W[q+te++],C.head&&f&&C.length<65536&&(C.head.comment+=String.fromCharCode(f)),f&&te<Q;);if(512&C.flags&&(C.check=s(C.check,W,te,q)),Q-=te,q+=te,f)break e}else C.head&&(C.head.comment=null);C.mode=9;case 9:if(512&C.flags){for(;H<16;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(j!==(65535&C.check)){P.msg="header crc mismatch",C.mode=30;break}H=j=0}C.head&&(C.head.hcrc=C.flags>>9&1,C.head.done=!0),P.adler=C.check=0,C.mode=12;break;case 10:for(;H<32;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}P.adler=C.check=v(j),H=j=0,C.mode=11;case 11:if(C.havedict===0)return P.next_out=ne,P.avail_out=de,P.next_in=q,P.avail_in=Q,C.hold=j,C.bits=H,2;P.adler=C.check=1,C.mode=12;case 12:if(B===5||B===6)break e;case 13:if(C.last){j>>>=7&H,H-=7&H,C.mode=27;break}for(;H<3;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}switch(C.last=1&j,H-=1,3&(j>>>=1)){case 0:C.mode=14;break;case 1:if(U(C),C.mode=20,B!==6)break;j>>>=2,H-=2;break e;case 2:C.mode=17;break;case 3:P.msg="invalid block type",C.mode=30}j>>>=2,H-=2;break;case 14:for(j>>>=7&H,H-=7&H;H<32;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if((65535&j)!=(j>>>16^65535)){P.msg="invalid stored block lengths",C.mode=30;break}if(C.length=65535&j,H=j=0,C.mode=15,B===6)break e;case 15:C.mode=16;case 16:if(te=C.length){if(Q<te&&(te=Q),de<te&&(te=de),te===0)break e;i.arraySet(ae,W,q,te,ne),Q-=te,q+=te,de-=te,ne+=te,C.length-=te;break}C.mode=12;break;case 17:for(;H<14;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(C.nlen=257+(31&j),j>>>=5,H-=5,C.ndist=1+(31&j),j>>>=5,H-=5,C.ncode=4+(15&j),j>>>=4,H-=4,286<C.nlen||30<C.ndist){P.msg="too many length or distance symbols",C.mode=30;break}C.have=0,C.mode=18;case 18:for(;C.have<C.ncode;){for(;H<3;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.lens[F[C.have++]]=7&j,j>>>=3,H-=3}for(;C.have<19;)C.lens[F[C.have++]]=0;if(C.lencode=C.lendyn,C.lenbits=7,I={bits:C.lenbits},O=c(0,C.lens,0,19,C.lencode,0,C.work,I),C.lenbits=I.bits,O){P.msg="invalid code lengths set",C.mode=30;break}C.have=0,C.mode=19;case 19:for(;C.have<C.nlen+C.ndist;){for(;K=(y=C.lencode[j&(1<<C.lenbits)-1])>>>16&255,ie=65535&y,!((Z=y>>>24)<=H);){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(ie<16)j>>>=Z,H-=Z,C.lens[C.have++]=ie;else{if(ie===16){for(S=Z+2;H<S;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(j>>>=Z,H-=Z,C.have===0){P.msg="invalid bit length repeat",C.mode=30;break}f=C.lens[C.have-1],te=3+(3&j),j>>>=2,H-=2}else if(ie===17){for(S=Z+3;H<S;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}H-=Z,f=0,te=3+(7&(j>>>=Z)),j>>>=3,H-=3}else{for(S=Z+7;H<S;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}H-=Z,f=0,te=11+(127&(j>>>=Z)),j>>>=7,H-=7}if(C.have+te>C.nlen+C.ndist){P.msg="invalid bit length repeat",C.mode=30;break}for(;te--;)C.lens[C.have++]=f}}if(C.mode===30)break;if(C.lens[256]===0){P.msg="invalid code -- missing end-of-block",C.mode=30;break}if(C.lenbits=9,I={bits:C.lenbits},O=c(u,C.lens,0,C.nlen,C.lencode,0,C.work,I),C.lenbits=I.bits,O){P.msg="invalid literal/lengths set",C.mode=30;break}if(C.distbits=6,C.distcode=C.distdyn,I={bits:C.distbits},O=c(d,C.lens,C.nlen,C.ndist,C.distcode,0,C.work,I),C.distbits=I.bits,O){P.msg="invalid distances set",C.mode=30;break}if(C.mode=20,B===6)break e;case 20:C.mode=21;case 21:if(6<=Q&&258<=de){P.next_out=ne,P.avail_out=de,P.next_in=q,P.avail_in=Q,C.hold=j,C.bits=H,l(P,oe),ne=P.next_out,ae=P.output,de=P.avail_out,q=P.next_in,W=P.input,Q=P.avail_in,j=C.hold,H=C.bits,C.mode===12&&(C.back=-1);break}for(C.back=0;K=(y=C.lencode[j&(1<<C.lenbits)-1])>>>16&255,ie=65535&y,!((Z=y>>>24)<=H);){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(K&&(240&K)==0){for(pe=Z,E=K,R=ie;K=(y=C.lencode[R+((j&(1<<pe+E)-1)>>pe)])>>>16&255,ie=65535&y,!(pe+(Z=y>>>24)<=H);){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}j>>>=pe,H-=pe,C.back+=pe}if(j>>>=Z,H-=Z,C.back+=Z,C.length=ie,K===0){C.mode=26;break}if(32&K){C.back=-1,C.mode=12;break}if(64&K){P.msg="invalid literal/length code",C.mode=30;break}C.extra=15&K,C.mode=22;case 22:if(C.extra){for(S=C.extra;H<S;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.length+=j&(1<<C.extra)-1,j>>>=C.extra,H-=C.extra,C.back+=C.extra}C.was=C.length,C.mode=23;case 23:for(;K=(y=C.distcode[j&(1<<C.distbits)-1])>>>16&255,ie=65535&y,!((Z=y>>>24)<=H);){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if((240&K)==0){for(pe=Z,E=K,R=ie;K=(y=C.distcode[R+((j&(1<<pe+E)-1)>>pe)])>>>16&255,ie=65535&y,!(pe+(Z=y>>>24)<=H);){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}j>>>=pe,H-=pe,C.back+=pe}if(j>>>=Z,H-=Z,C.back+=Z,64&K){P.msg="invalid distance code",C.mode=30;break}C.offset=ie,C.extra=15&K,C.mode=24;case 24:if(C.extra){for(S=C.extra;H<S;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}C.offset+=j&(1<<C.extra)-1,j>>>=C.extra,H-=C.extra,C.back+=C.extra}if(C.offset>C.dmax){P.msg="invalid distance too far back",C.mode=30;break}C.mode=25;case 25:if(de===0)break e;if(te=oe-de,C.offset>te){if((te=C.offset-te)>C.whave&&C.sane){P.msg="invalid distance too far back",C.mode=30;break}xe=te>C.wnext?(te-=C.wnext,C.wsize-te):C.wnext-te,te>C.length&&(te=C.length),G=C.window}else G=ae,xe=ne-C.offset,te=C.length;for(de<te&&(te=de),de-=te,C.length-=te;ae[ne++]=G[xe++],--te;);C.length===0&&(C.mode=21);break;case 26:if(de===0)break e;ae[ne++]=C.length,de--,C.mode=21;break;case 27:if(C.wrap){for(;H<32;){if(Q===0)break e;Q--,j|=W[q++]<<H,H+=8}if(oe-=de,P.total_out+=oe,C.total+=oe,oe&&(P.adler=C.check=C.flags?s(C.check,ae,oe,ne-oe):a(C.check,ae,oe,ne-oe)),oe=de,(C.flags?j:v(j))!==C.check){P.msg="incorrect data check",C.mode=30;break}H=j=0}C.mode=28;case 28:if(C.wrap&&C.flags){for(;H<32;){if(Q===0)break e;Q--,j+=W[q++]<<H,H+=8}if(j!==(4294967295&C.total)){P.msg="incorrect length check",C.mode=30;break}H=j=0}C.mode=29;case 29:O=1;break e;case 30:O=-3;break e;case 31:return-4;case 32:default:return p}return P.next_out=ne,P.avail_out=de,P.next_in=q,P.avail_in=Q,C.hold=j,C.bits=H,(C.wsize||oe!==P.avail_out&&C.mode<30&&(C.mode<27||B!==4))&&J(P,P.output,P.next_out,oe-P.avail_out)?(C.mode=31,-4):(fe-=P.avail_in,oe-=P.avail_out,P.total_in+=fe,P.total_out+=oe,C.total+=oe,C.wrap&&oe&&(P.adler=C.check=C.flags?s(C.check,ae,oe,P.next_out-oe):a(C.check,ae,oe,P.next_out-oe)),P.data_type=C.bits+(C.last?64:0)+(C.mode===12?128:0)+(C.mode===20||C.mode===15?256:0),(fe==0&&oe===0||B===4)&&O===m&&(O=-5),O)},o.inflateEnd=function(P){if(!P||!P.state)return p;var B=P.state;return B.window&&(B.window=null),P.state=null,m},o.inflateGetHeader=function(P,B){var C;return P&&P.state?(2&(C=P.state).wrap)==0?p:((C.head=B).done=!1,m):p},o.inflateSetDictionary=function(P,B){var C,W=B.length;return P&&P.state?(C=P.state).wrap!==0&&C.mode!==11?p:C.mode===11&&a(1,B,W,0)!==C.check?-3:J(P,B,W,W)?(C.mode=31,-4):(C.havedict=1,m):p},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(r,n,o){var i=r("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(u,d,m,p,g,h,b,v){var x,_,w,A,k,N,$,D,U,J=v.bits,P=0,B=0,C=0,W=0,ae=0,q=0,ne=0,Q=0,de=0,j=0,H=null,fe=0,oe=new i.Buf16(16),te=new i.Buf16(16),xe=null,G=0;for(P=0;P<=15;P++)oe[P]=0;for(B=0;B<p;B++)oe[d[m+B]]++;for(ae=J,W=15;1<=W&&oe[W]===0;W--);if(W<ae&&(ae=W),W===0)return g[h++]=20971520,g[h++]=20971520,v.bits=1,0;for(C=1;C<W&&oe[C]===0;C++);for(ae<C&&(ae=C),P=Q=1;P<=15;P++)if(Q<<=1,(Q-=oe[P])<0)return-1;if(0<Q&&(u===0||W!==1))return-1;for(te[1]=0,P=1;P<15;P++)te[P+1]=te[P]+oe[P];for(B=0;B<p;B++)d[m+B]!==0&&(b[te[d[m+B]]++]=B);if(N=u===0?(H=xe=b,19):u===1?(H=a,fe-=257,xe=s,G-=257,256):(H=l,xe=c,-1),P=C,k=h,ne=B=j=0,w=-1,A=(de=1<<(q=ae))-1,u===1&&852<de||u===2&&592<de)return 1;for(;;){for($=P-ne,U=b[B]<N?(D=0,b[B]):b[B]>N?(D=xe[G+b[B]],H[fe+b[B]]):(D=96,0),x=1<<P-ne,C=_=1<<q;g[k+(j>>ne)+(_-=x)]=$<<24|D<<16|U|0,_!==0;);for(x=1<<P-1;j&x;)x>>=1;if(x!==0?(j&=x-1,j+=x):j=0,B++,--oe[P]==0){if(P===W)break;P=d[m+b[B]]}if(ae<P&&(j&A)!==w){for(ne===0&&(ne=ae),k+=C,Q=1<<(q=P-ne);q+ne<W&&!((Q-=oe[q+ne])<=0);)q++,Q<<=1;if(de+=1<<q,u===1&&852<de||u===2&&592<de)return 1;g[w=j&A]=ae<<24|q<<16|k-h|0}}return j!==0&&(g[k+j]=P-ne<<24|64<<16|0),v.bits=ae,0}},{"../utils/common":41}],51:[function(r,n,o){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(r,n,o){var i=r("../utils/common"),a=0,s=1;function l(y){for(var T=y.length;0<=--T;)y[T]=0}var c=0,u=29,d=256,m=d+1+u,p=30,g=19,h=2*m+1,b=15,v=16,x=7,_=256,w=16,A=17,k=18,N=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],$=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],J=new Array(2*(m+2));l(J);var P=new Array(2*p);l(P);var B=new Array(512);l(B);var C=new Array(256);l(C);var W=new Array(u);l(W);var ae,q,ne,Q=new Array(p);function de(y,T,F,L,M){this.static_tree=y,this.extra_bits=T,this.extra_base=F,this.elems=L,this.max_length=M,this.has_stree=y&&y.length}function j(y,T){this.dyn_tree=y,this.max_code=0,this.stat_desc=T}function H(y){return y<256?B[y]:B[256+(y>>>7)]}function fe(y,T){y.pending_buf[y.pending++]=255&T,y.pending_buf[y.pending++]=T>>>8&255}function oe(y,T,F){y.bi_valid>v-F?(y.bi_buf|=T<<y.bi_valid&65535,fe(y,y.bi_buf),y.bi_buf=T>>v-y.bi_valid,y.bi_valid+=F-v):(y.bi_buf|=T<<y.bi_valid&65535,y.bi_valid+=F)}function te(y,T,F){oe(y,F[2*T],F[2*T+1])}function xe(y,T){for(var F=0;F|=1&y,y>>>=1,F<<=1,0<--T;);return F>>>1}function G(y,T,F){var L,M,z=new Array(b+1),Y=0;for(L=1;L<=b;L++)z[L]=Y=Y+F[L-1]<<1;for(M=0;M<=T;M++){var V=y[2*M+1];V!==0&&(y[2*M]=xe(z[V]++,V))}}function Z(y){var T;for(T=0;T<m;T++)y.dyn_ltree[2*T]=0;for(T=0;T<p;T++)y.dyn_dtree[2*T]=0;for(T=0;T<g;T++)y.bl_tree[2*T]=0;y.dyn_ltree[2*_]=1,y.opt_len=y.static_len=0,y.last_lit=y.matches=0}function K(y){8<y.bi_valid?fe(y,y.bi_buf):0<y.bi_valid&&(y.pending_buf[y.pending++]=y.bi_buf),y.bi_buf=0,y.bi_valid=0}function ie(y,T,F,L){var M=2*T,z=2*F;return y[M]<y[z]||y[M]===y[z]&&L[T]<=L[F]}function pe(y,T,F){for(var L=y.heap[F],M=F<<1;M<=y.heap_len&&(M<y.heap_len&&ie(T,y.heap[M+1],y.heap[M],y.depth)&&M++,!ie(T,L,y.heap[M],y.depth));)y.heap[F]=y.heap[M],F=M,M<<=1;y.heap[F]=L}function E(y,T,F){var L,M,z,Y,V=0;if(y.last_lit!==0)for(;L=y.pending_buf[y.d_buf+2*V]<<8|y.pending_buf[y.d_buf+2*V+1],M=y.pending_buf[y.l_buf+V],V++,L===0?te(y,M,T):(te(y,(z=C[M])+d+1,T),(Y=N[z])!==0&&oe(y,M-=W[z],Y),te(y,z=H(--L),F),(Y=$[z])!==0&&oe(y,L-=Q[z],Y)),V<y.last_lit;);te(y,_,T)}function R(y,T){var F,L,M,z=T.dyn_tree,Y=T.stat_desc.static_tree,V=T.stat_desc.has_stree,ee=T.stat_desc.elems,he=-1;for(y.heap_len=0,y.heap_max=h,F=0;F<ee;F++)z[2*F]!==0?(y.heap[++y.heap_len]=he=F,y.depth[F]=0):z[2*F+1]=0;for(;y.heap_len<2;)z[2*(M=y.heap[++y.heap_len]=he<2?++he:0)]=1,y.depth[M]=0,y.opt_len--,V&&(y.static_len-=Y[2*M+1]);for(T.max_code=he,F=y.heap_len>>1;1<=F;F--)pe(y,z,F);for(M=ee;F=y.heap[1],y.heap[1]=y.heap[y.heap_len--],pe(y,z,1),L=y.heap[1],y.heap[--y.heap_max]=F,y.heap[--y.heap_max]=L,z[2*M]=z[2*F]+z[2*L],y.depth[M]=(y.depth[F]>=y.depth[L]?y.depth[F]:y.depth[L])+1,z[2*F+1]=z[2*L+1]=M,y.heap[1]=M++,pe(y,z,1),2<=y.heap_len;);y.heap[--y.heap_max]=y.heap[1],(function(ce,Ee){var He,Ne,nt,Te,ur,Je,ze=Ee.dyn_tree,rn=Ee.max_code,Gn=Ee.stat_desc.static_tree,od=Ee.stat_desc.has_stree,id=Ee.stat_desc.extra_bits,ya=Ee.stat_desc.extra_base,nn=Ee.stat_desc.max_length,qn=0;for(Te=0;Te<=b;Te++)ce.bl_count[Te]=0;for(ze[2*ce.heap[ce.heap_max]+1]=0,He=ce.heap_max+1;He<h;He++)nn<(Te=ze[2*ze[2*(Ne=ce.heap[He])+1]+1]+1)&&(Te=nn,qn++),ze[2*Ne+1]=Te,rn<Ne||(ce.bl_count[Te]++,ur=0,ya<=Ne&&(ur=id[Ne-ya]),Je=ze[2*Ne],ce.opt_len+=Je*(Te+ur),od&&(ce.static_len+=Je*(Gn[2*Ne+1]+ur)));if(qn!==0){do{for(Te=nn-1;ce.bl_count[Te]===0;)Te--;ce.bl_count[Te]--,ce.bl_count[Te+1]+=2,ce.bl_count[nn]--,qn-=2}while(0<qn);for(Te=nn;Te!==0;Te--)for(Ne=ce.bl_count[Te];Ne!==0;)rn<(nt=ce.heap[--He])||(ze[2*nt+1]!==Te&&(ce.opt_len+=(Te-ze[2*nt+1])*ze[2*nt],ze[2*nt+1]=Te),Ne--)}})(y,T),G(z,he,y.bl_count)}function f(y,T,F){var L,M,z=-1,Y=T[1],V=0,ee=7,he=4;for(Y===0&&(ee=138,he=3),T[2*(F+1)+1]=65535,L=0;L<=F;L++)M=Y,Y=T[2*(L+1)+1],++V<ee&&M===Y||(V<he?y.bl_tree[2*M]+=V:M!==0?(M!==z&&y.bl_tree[2*M]++,y.bl_tree[2*w]++):V<=10?y.bl_tree[2*A]++:y.bl_tree[2*k]++,z=M,he=(V=0)===Y?(ee=138,3):M===Y?(ee=6,3):(ee=7,4))}function O(y,T,F){var L,M,z=-1,Y=T[1],V=0,ee=7,he=4;for(Y===0&&(ee=138,he=3),L=0;L<=F;L++)if(M=Y,Y=T[2*(L+1)+1],!(++V<ee&&M===Y)){if(V<he)for(;te(y,M,y.bl_tree),--V!=0;);else M!==0?(M!==z&&(te(y,M,y.bl_tree),V--),te(y,w,y.bl_tree),oe(y,V-3,2)):V<=10?(te(y,A,y.bl_tree),oe(y,V-3,3)):(te(y,k,y.bl_tree),oe(y,V-11,7));z=M,he=(V=0)===Y?(ee=138,3):M===Y?(ee=6,3):(ee=7,4)}}l(Q);var I=!1;function S(y,T,F,L){oe(y,(c<<1)+(L?1:0),3),(function(M,z,Y,V){K(M),fe(M,Y),fe(M,~Y),i.arraySet(M.pending_buf,M.window,z,Y,M.pending),M.pending+=Y})(y,T,F)}o._tr_init=function(y){I||((function(){var T,F,L,M,z,Y=new Array(b+1);for(M=L=0;M<u-1;M++)for(W[M]=L,T=0;T<1<<N[M];T++)C[L++]=M;for(C[L-1]=M,M=z=0;M<16;M++)for(Q[M]=z,T=0;T<1<<$[M];T++)B[z++]=M;for(z>>=7;M<p;M++)for(Q[M]=z<<7,T=0;T<1<<$[M]-7;T++)B[256+z++]=M;for(F=0;F<=b;F++)Y[F]=0;for(T=0;T<=143;)J[2*T+1]=8,T++,Y[8]++;for(;T<=255;)J[2*T+1]=9,T++,Y[9]++;for(;T<=279;)J[2*T+1]=7,T++,Y[7]++;for(;T<=287;)J[2*T+1]=8,T++,Y[8]++;for(G(J,m+1,Y),T=0;T<p;T++)P[2*T+1]=5,P[2*T]=xe(T,5);ae=new de(J,N,d+1,m,b),q=new de(P,$,0,p,b),ne=new de(new Array(0),D,0,g,x)})(),I=!0),y.l_desc=new j(y.dyn_ltree,ae),y.d_desc=new j(y.dyn_dtree,q),y.bl_desc=new j(y.bl_tree,ne),y.bi_buf=0,y.bi_valid=0,Z(y)},o._tr_stored_block=S,o._tr_flush_block=function(y,T,F,L){var M,z,Y=0;0<y.level?(y.strm.data_type===2&&(y.strm.data_type=(function(V){var ee,he=4093624447;for(ee=0;ee<=31;ee++,he>>>=1)if(1&he&&V.dyn_ltree[2*ee]!==0)return a;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return s;for(ee=32;ee<d;ee++)if(V.dyn_ltree[2*ee]!==0)return s;return a})(y)),R(y,y.l_desc),R(y,y.d_desc),Y=(function(V){var ee;for(f(V,V.dyn_ltree,V.l_desc.max_code),f(V,V.dyn_dtree,V.d_desc.max_code),R(V,V.bl_desc),ee=g-1;3<=ee&&V.bl_tree[2*U[ee]+1]===0;ee--);return V.opt_len+=3*(ee+1)+5+5+4,ee})(y),M=y.opt_len+3+7>>>3,(z=y.static_len+3+7>>>3)<=M&&(M=z)):M=z=F+5,F+4<=M&&T!==-1?S(y,T,F,L):y.strategy===4||z===M?(oe(y,2+(L?1:0),3),E(y,J,P)):(oe(y,4+(L?1:0),3),(function(V,ee,he,ce){var Ee;for(oe(V,ee-257,5),oe(V,he-1,5),oe(V,ce-4,4),Ee=0;Ee<ce;Ee++)oe(V,V.bl_tree[2*U[Ee]+1],3);O(V,V.dyn_ltree,ee-1),O(V,V.dyn_dtree,he-1)})(y,y.l_desc.max_code+1,y.d_desc.max_code+1,Y+1),E(y,y.dyn_ltree,y.dyn_dtree)),Z(y),L&&K(y)},o._tr_tally=function(y,T,F){return y.pending_buf[y.d_buf+2*y.last_lit]=T>>>8&255,y.pending_buf[y.d_buf+2*y.last_lit+1]=255&T,y.pending_buf[y.l_buf+y.last_lit]=255&F,y.last_lit++,T===0?y.dyn_ltree[2*F]++:(y.matches++,T--,y.dyn_ltree[2*(C[F]+d+1)]++,y.dyn_dtree[2*H(T)]++),y.last_lit===y.lit_bufsize-1},o._tr_align=function(y){oe(y,2,3),te(y,_,J),(function(T){T.bi_valid===16?(fe(T,T.bi_buf),T.bi_buf=0,T.bi_valid=0):8<=T.bi_valid&&(T.pending_buf[T.pending++]=255&T.bi_buf,T.bi_buf>>=8,T.bi_valid-=8)})(y)}},{"../utils/common":41}],53:[function(r,n,o){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(r,n,o){(function(i){(function(a,s){if(!a.setImmediate){var l,c,u,d,m=1,p={},g=!1,h=a.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(a);b=b&&b.setTimeout?b:a,l={}.toString.call(a.process)==="[object process]"?function(w){process.nextTick(function(){x(w)})}:(function(){if(a.postMessage&&!a.importScripts){var w=!0,A=a.onmessage;return a.onmessage=function(){w=!1},a.postMessage("","*"),a.onmessage=A,w}})()?(d="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",_,!1):a.attachEvent("onmessage",_),function(w){a.postMessage(d+w,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(w){x(w.data)},function(w){u.port2.postMessage(w)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(w){var A=h.createElement("script");A.onreadystatechange=function(){x(w),A.onreadystatechange=null,c.removeChild(A),A=null},c.appendChild(A)}):function(w){setTimeout(x,0,w)},b.setImmediate=function(w){typeof w!="function"&&(w=new Function(""+w));for(var A=new Array(arguments.length-1),k=0;k<A.length;k++)A[k]=arguments[k+1];var N={callback:w,args:A};return p[m]=N,l(m),m++},b.clearImmediate=v}function v(w){delete p[w]}function x(w){if(g)setTimeout(x,0,w);else{var A=p[w];if(A){g=!0;try{(function(k){var N=k.callback,$=k.args;switch($.length){case 0:N();break;case 1:N($[0]);break;case 2:N($[0],$[1]);break;case 3:N($[0],$[1],$[2]);break;default:N.apply(s,$)}})(A)}finally{v(w),g=!1}}}}function _(w){w.source===a&&typeof w.data=="string"&&w.data.indexOf(d)===0&&x(+w.data.slice(d.length))}})(typeof self>"u"?i===void 0?this:i:self)}).call(this,typeof or<"u"?or:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(di)),di.exports}var Fx=Lx();const Nx=Mx(Fx);var so={exports:{}},Bx=so.exports,Xs;function Hx(){return Xs||(Xs=1,(function(e,t){(function(r,n){n()})(Bx,function(){function r(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function n(c,u,d){var m=new XMLHttpRequest;m.open("GET",c),m.responseType="blob",m.onload=function(){l(m.response,u,d)},m.onerror=function(){console.error("could not download file")},m.send()}function o(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function i(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof or=="object"&&or.global===or?or:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,d){var m=a.URL||a.webkitURL,p=document.createElement("a");u=u||c.name||"download",p.download=u,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?i(p):o(p.href)?n(c,u,d):i(p,p.target="_blank")):(p.href=m.createObjectURL(c),setTimeout(function(){m.revokeObjectURL(p.href)},4e4),setTimeout(function(){i(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,d){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(r(c,d),u);else if(o(c))n(c,u,d);else{var m=document.createElement("a");m.href=c,m.target="_blank",setTimeout(function(){i(m)})}}:function(c,u,d,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof c=="string")return n(c,u,d);var p=c.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||p&&g||s)&&typeof FileReader<"u"){var b=new FileReader;b.onloadend=function(){var _=b.result;_=h?_:_.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=_:location=_,m=null},b.readAsDataURL(c)}else{var v=a.URL||a.webkitURL,x=v.createObjectURL(c);m?m.location=x:location.href=x,m=null,setTimeout(function(){v.revokeObjectURL(x)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(so)),so.exports}var zx=Hx();const $x=`# 1. API 協作規則\r
\r
先確認資料結構、欄位命名與錯誤訊息的統一規範。要做為使用者的角度來檢測 message 的值是否清楚明確，不可有提示文字以外的內容如：錯誤代碼、內部訊息等。\r
\r
---\r
\r
## 📝 儲存/修改 API\r
\r
### 規範要點\r
- 成功與失敗的回應格式一致\r
- 欄位命名一致（camelCase / snake_case）\r
- 缺少欄位是否回傳空值\r
\r
### ✓ 成功 response\r
\`\`\`json\r
{\r
  "message": "儲存成功",\r
  "success": true,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
### ✗ 失敗 response\r
\`\`\`json\r
{\r
  "message": "XX欄位應輸入....",\r
  "success": false,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
---\r
\r
## 🔍 查詢 API\r
\r
### 規範要點\r
- 成功與失敗的回應格式一致\r
- 欄位命名一致（camelCase / snake_case）\r
- 缺少欄位是否回傳空值\r
\r
### ✓ 成功 response\r
\`\`\`json\r
{\r
  "message": "查詢成功",\r
  "success": true,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
### ✗ 失敗 response\r
\`\`\`json\r
{\r
  "message": "該帳號尚未通過XX流程",\r
  "success": false,\r
  "data": { ... }\r
}\r
\`\`\`\r
\r
---\r
\r
## 💬 前端彈窗處理邏輯\r
\r
### 📌 為何需要 message 和 success 參數？\r
- **message：** 前端透過此參數接收後端回傳的提示訊息，用於顯示彈窗內容\r
- **success：** 前端根據此參數判斷下一步行為（如導向列表頁、停留編輯頁等）\r
\r
### 前端判斷邏輯\r
- 以操作邏輯來說，肯定且正面的狀態時使用 \`success()\`\r
- 反之則使用 \`failure()\`\r
\r
\`\`\`javascript\r
// main.js - MutationCache 配置\r
mutationCache: new MutationCache({\r
  onSuccess: (data) => {\r
    destroyAll()\r
    // 根據 success 判斷彈窗類型\r
    if (data?.failed || !data?.success) {\r
      failure(data?.message)  // 顯示失敗彈窗\r
    } else if (data?.message?.length > 0 || data?.success) {\r
      success(data?.message)  // 顯示成功彈窗\r
    }\r
  },\r
  onError: (error) => {\r
    destroyAll()\r
    if (error?.displayMessage) {\r
      failure(error?.displayMessage)  // 顯示錯誤彈窗\r
    }\r
  }\r
})\r
\`\`\`\r
\r
### 實際應用流程\r
1. 前端發送 API 請求（儲存/修改/查詢）\r
2. 後端處理完畢後回傳 response（包含 message、success、data）\r
3. 前端 MutationCache 接收 response\r
4. 根據 \`data?.failed\` 或 \`data?.success\` 決定彈窗類型\r
5. 顯示 \`message\` 內容給使用者\r
6. 根據 \`success\` 參數執行下一步行為（如：成功時導向列表頁）\r
\r
> ⚠️ **重要：** 所有 API response 都必須包含 \`message\` 和 \`success\` 參數，否則前端無法正確判斷操作結果並給予使用者回饋。\r
\r
---\r
\r
## 💬 Message 格式規範\r
\r
> ⚠️ **重要原則：** 後端在制訂 message 時，必須符合情境回復相應的中文內容。使用者不需要看到工程師才看得懂的程式碼或技術訊息，只需要簡單明瞭的中文說明。\r
\r
### ❌ 錯誤範例\r
\r
**1. 包含程式碼或技術訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "unexpected: 會員資格不符"\r
}\r
\`\`\`\r
> ⚠️ 問題：使用者不需要知道「unexpected」這種技術訊息\r
\r
**2. 包含陣列格式**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "[會員資格不符]"\r
}\r
\`\`\`\r
> ⚠️ 問題：使用者不需要看到中括號這種程式符號\r
\r
**3. 包含錯誤代碼或內部訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "Error Code 4001: 使用者資格驗證失敗"\r
}\r
\`\`\`\r
> ⚠️ 問題：錯誤代碼應該記錄在 log 中，而非顯示給使用者\r
\r
### ✓ 正確範例\r
\r
**1. 清楚明確的中文說明**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "會員資格不符"\r
}\r
\`\`\`\r
\r
**2. 提供解決方向的說明**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "手機號碼格式錯誤，請輸入10位數字"\r
}\r
\`\`\`\r
\r
**3. 符合情境的友善訊息**\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "檔案大小超過限制，請上傳5MB以下的檔案"\r
}\r
\`\`\`\r
\r
### 💡 撰寫 Message 的原則\r
- **使用純中文：** 避免英文技術用語、程式碼或符號\r
- **說明問題：** 清楚告知使用者發生了什麼事\r
- **提供方向：** 盡可能告訴使用者如何解決或修正\r
- **保持簡潔：** 一句話說清楚，不要冗長或過於技術性\r
- **站在使用者角度：** 確保一般使用者能夠理解訊息內容\r
\r
---\r
\r
## 🔄 例外狀況：什麼時候不用回傳 data?\r
\r
> 📌 **原則說明：** 針對「上傳檔案」或「新增/修改資料」的 API，如果操作完成後不需要進一步的行為，則成功時可以不回傳 data 參數，僅回傳 success 和 message 即可。\r
\r
### ✓ 成功時：不需要 data\r
\`\`\`json\r
{\r
  "success": true,\r
  "message": "上傳成功"\r
}\r
\`\`\`\r
> 適用情境：單純的上傳、新增或修改操作，只單純告知使用者操作結果即可\r
\r
### ✗ 失敗時：不需要 data\r
\`\`\`json\r
{\r
  "success": false,\r
  "message": "XXX並未符合資格"\r
}\r
\`\`\`\r
\r
### 📦 什麼時候需要回傳 data？\r
如果上傳或新增修改成功後，前端需要進一步的行為，則必須回傳 data 參數：\r
- 需要顯示剛上傳檔案的資訊（如檔案 ID、檔案路徑等）\r
- 需要導向至新建立的資料詳細頁（需要資料 ID）\r
- 需要更新畫面上的其他資訊（如更新後的完整資料）\r
- 需要下載或預覽剛上傳的檔案\r
\r
\`\`\`json\r
{\r
  "success": true,\r
  "message": "上傳成功",\r
  "data": {\r
    "fileId": "12345",\r
    "filePath": "/uploads/document.pdf",\r
    "uploadTime": "2026-03-19 10:30:00"\r
  }\r
}\r
\`\`\`\r
\r
> 💡 **設計建議：** 在設計 API 時，先確認前端在操作成功後是否需要額外的資料。如果只需要顯示「成功」訊息並關閉彈窗或返回列表頁，則不需要回傳 data，可以簡化 response 結構。\r
\r
---\r
\r
## ⚠️ Error Code 定義\r
\r
> 📌 **重要說明：** 新系統初期未採用元件化架構，受限於開發時程暫無法全面重構。目前策略是明確定義各 Error Code 的意義，後端實作細節可另行討論，但前端必須能依 Error Code 進行問題排查。\r
\r
| Error Code | 定義 | 說明 |\r
|:---:|---|---|\r
| **200** | 成功 (OK) | 請求成功，伺服器已正確處理並回傳資料 |\r
| **400** | 錯誤的請求 (Bad Request) | 前端請求參數錯誤 |\r
| **401** | 未授權 (Unauthorized) | 未登入或 Token 失效，需要重新登入驗證身份 |\r
| **403** | 禁止存取 (Forbidden) | 已登入但無權限執行此操作，可能是角色權限不足 |\r
| **404** | 找不到 API (Not Found) | API 路徑不存在 |\r
| **405** | 不允許的方法 (Method Not Allowed) | HTTP 方法錯誤，例如該 API 只支援 POST 但使用了 GET |\r
| **422** | 無法處理的實體 (Unprocessable Entity) | 前端請求(request)格式正確，但因語義錯誤無法處理，例如資料驗證失敗 |\r
| **500** | 伺服器內部錯誤 (Internal Server Error) | 後端程式發生未預期的錯誤，需要後端工程師檢查 log 排查問題 |\r
\r
### 前端 Debug 建議\r
- **400：** 檢查前端傳送的參數是否符合後端要求（欄位名稱、資料型別、必填欄位）\r
- **401：** 檢查 Token 是否過期或未正確帶入 Authorization header\r
- **403：** 確認使用者角色權限，是否該功能需要更高權限\r
- **404：** 確認 API 路徑是否正確，或資料 ID 是否存在於資料庫\r
- **405：** 確認 HTTP Method（GET/POST/PUT/DELETE）是否使用正確\r
- **500：** 聯繫後端工程師查看 server log，通常是後端程式邏輯錯誤\r
`,jx=`# 2. 參數一致性\r
\r
前端儲存 API 的 request 格式中參數名稱要與查詢 API 拿到的參數一致，這樣可以提升串接效率，減少不必要的欄位轉換。\r
\r
---\r
\r
## ✓ 正確範例\r
\r
### 查詢 API 回傳格式\r
若使用駝峰命名，大小寫需一致（含縮寫字母大小寫）。\r
\`\`\`json\r
{\r
  "userId": 123,\r
  "userName": "Jane",\r
  "createdAt": "2026-02-12T10:30:00"\r
}\r
\`\`\`\r
\r
### 新增/編輯 API request 格式\r
使用駝峰命名，大小寫需一致（含縮寫字母大小寫）。\r
\`\`\`json\r
{\r
  "userId": 123,\r
  "userName": "Jane",\r
  "createdAt": "2026-02-12T10:30:00"\r
}\r
\`\`\`\r
\r
**優點：**\r
- 參數名稱完全一致，可直接使用查詢結果\r
- 不需要額外的欄位名稱轉換邏輯\r
- 降低串接錯誤率，提升開發效率\r
\r
---\r
\r
## ✗ 錯誤範例\r
\r
### 查詢 API 回傳格式\r
\`\`\`json\r
{\r
  "name": "Jane",\r
  "age": 25,\r
  "email": "jane@example.com"\r
}\r
\`\`\`\r
\r
### 新增/編輯 API request 格式\r
\`\`\`json\r
{\r
  "userName": "Jane",\r
  "userAge": 25,\r
  "userEmail": "jane@example.com"\r
}\r
\`\`\`\r
\r
**問題：**\r
- 參數名稱不一致（name vs userName、age vs userAge）\r
- 需要額外撰寫欄位轉換邏輯\r
- 容易因遺漏轉換導致串接錯誤\r
- 增加維護成本與測試複雜度\r
\r
---\r
\r
## 為何要做到一致性？\r
- **簡化前端開發流程：** 查詢後可直接將資料綁定到表單，不需額外轉換欄位名稱\r
- **降低出錯機率：** 避免因欄位名稱對應錯誤導致的 bug\r
- **提升可維護性：** 減少欄位映射邏輯，程式碼更簡潔易懂\r
- **加速開發效率：** 前後端協作更順暢，減少溝通成本\r
\r
---\r
\r
## 什麼情況下可以做到一致性？\r
- **新開發的功能：** 在設計階段就統一前後端欄位名稱規範\r
- **重構既有功能：** 在大規模重構時，同步調整前後端欄位命名\r
- **後端使用 DTO 轉換：** 後端可透過 Data Transfer Object 統一查詢與儲存的欄位結構\r
- **前後端協作良好：** 團隊有共識且願意遵循統一的命名規範\r
\r
> ⚠️ **例外情況：** 當頁面邏輯較複雜，或需整合多支查詢 API 的資料時，可不強制對齊參數名稱。\r
`,Ux=`# 3. 日期與時間格式\r
\r
統一字串格式，避免前後端轉換成本。\r
\r
---\r
\r
## 🔍 查詢時（後端 → 前端）\r
\r
### 後端回傳格式\r
後端統一回傳 ISO 8601 格式，不可有小數點：\r
\r
| 類型 | 回傳格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
\r
### 前端轉換顯示\r
前端依需求轉換為民國年：\r
\r
| 類型 | 轉換結果 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
---\r
\r
## 💾 儲存時（前端 → 後端）\r
\r
### 前端送出格式\r
前端可送出以下任一格式：\r
\r
**民國年格式：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
**或 ISO 格式（目前前端不儲存西元年，暫不啟用）：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
\r
### 後端接收規範\r
後端需能同時接受以下格式：\r
\r
**民國年格式：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`84/03/16\` |\r
| 年月日時分 | \`84/03/16 18:14\` |\r
| 年月日時分秒 | \`84/03/16 18:14:57\` |\r
\r
**或 ISO 格式（目前後端會接收西元年，要能接這格式）：**\r
\r
| 類型 | 格式 |\r
|---|---|\r
| 年月日 | \`1995-03-16\` |\r
| 年月日時分 | \`1995-03-16T18:14\` |\r
| 年月日時分秒 | \`1995-03-16T18:14:57\` |\r
`,Wx=`# 4. 分頁資料格式\r
\r
分頁功能採用關注點分離設計，分為 usePagination（邏輯層）和 AppPagination（展示層）兩個部分。\r
\r
---\r
\r
## 🤝 前後端協作規範\r
\r
### 📌 Request 參數組成\r
- **固定參數**：pageNo、pageSize（所有分頁 API 都需要）\r
- **業務參數**：typeId、keyword、startDate 等（視 API 功能需求而定，非必要）\r
\r
### 情境 A：只需分頁\r
\`\`\`\r
POST /api/users/list\r
\r
{\r
  "pageNo": 1,\r
  "pageSize": 15\r
}\r
\`\`\`\r
例如：取得所有使用者列表\r
\r
### 情境 B：需查詢條件 + 分頁\r
\`\`\`\r
POST /api/news/query\r
\r
{\r
  "typeId": 4,\r
  "keyword": "測試",\r
  "pageNo": 1,\r
  "pageSize": 15\r
}\r
\`\`\`\r
例如：根據條件搜尋新聞\r
\r
### Request 參數說明\r
\r
| 參數 | 型別 | 必填 | 說明 | 預設值 |\r
|---|---|:---:|---|---|\r
| \`pageNo\` | Integer | ✅ | 頁碼（1-based，第一頁 = 1） | 1 |\r
| \`pageSize\` | Integer | ✅ | 每頁筆數 | 15 |\r
| \`typeId\` | Integer | ❌ | 類別 ID（範例） | - |\r
| \`keyword\` | String | ❌ | 搜尋關鍵字（範例） | - |\r
| \`startDate\` | String | ❌ | 開始日期（範例） | - |\r
\r
### 回應格式\r
\`\`\`json\r
{\r
  "content": [...],\r
  "number": 1,\r
  "size": 15,\r
  "totalPages": 10,\r
  "total": 150,\r
  "offset": 0\r
}\r
\`\`\`\r
\r
### Response 參數說明\r
\r
| 參數 | 型別 | 必填 | 說明 |\r
|---|---|:---:|---|\r
| \`content\` | Array | ✅ | 資料陣列（空時為 []，不可為 null） |\r
| \`number\` | Integer | ✅ | 當前頁碼（**0-based**，Spring Data JPA 原生值，前端 \`extractPaginationContent\` 會自動 +1 轉回 1-based 顯示） |\r
| \`size\` | Integer | ✅ | 每頁筆數（對應 request.pageSize） |\r
| \`totalPages\` | Integer | ✅ | 總頁數 |\r
| \`total\` | Integer/Long | ✅ | 總筆數 |\r
| \`offset\` | Integer/Long | ✅ | 起始索引 = number × size（0-based） |\r
\r
---\r
\r
## 💻 前端實作指引\r
\r
### 📐 架構概述\r
分頁功能採用 **關注點分離（Separation of Concerns）** 設計模式，分為兩個層次：\r
- **usePagination.js**（邏輯層）：管理分頁狀態、處理 API 參數轉換、解析 API 回應\r
- **AppPagination.vue**（展示層）：渲染分頁按鈕、處理使用者點擊、發送 update:page 事件\r
\r
---\r
\r
### 🔧 usePagination Composable\r
\r
**檔案位置：** \`src/composables/usePagination.js\`\r
**功能：** 提供分頁狀態管理和資料處理的可組合函數\r
\r
#### 回傳值\r
\`\`\`javascript\r
{\r
  paginationModel,           // 分頁狀態物件\r
  updatePaginationPage,      // 更新頁碼函數（必須使用此函數處理換頁，才會觸發 API 請求）\r
  mergePaginationParameter,  // 合併分頁參數到 API 請求\r
  extractPaginationContent,  // 從 API 回應中提取分頁資料\r
}\r
\`\`\`\r
\r
#### paginationModel 結構\r
\`\`\`javascript\r
{\r
  page: 1,           // 當前頁碼（起始值：1）\r
  pageSize: 15,      // 每頁筆數（預設：15）\r
  itemCount: 0,      // 總筆數\r
  pageCount: 0,      // 總頁數\r
  prefix: Function,  // 分頁前綴文字生成函數\r
}\r
\`\`\`\r
\r
---\r
\r
### 📋 主要方法\r
\r
#### 1. mergePaginationParameter(parameter)\r
將分頁參數合併到 API 請求參數中。\r
\r
> **內部機制：** \`pageNo\` 來自內部的 \`requestPage\`（而非 \`paginationModel.page\`），只有透過 \`updatePaginationPage\` 才會更新 \`requestPage\`。這確保 \`extractPaginationContent\` 回寫 \`paginationModel.page\` 時不會觸發 computed 重算，避免無限 API 循環。\r
\r
**輸入：**\r
\`\`\`javascript\r
{ keyword: '測試' }\r
\`\`\`\r
\r
**輸出：**\r
\`\`\`javascript\r
{\r
  keyword: '測試',\r
  pageNo: 1,      // 頁碼（從 1 開始）\r
  pageSize: 15    // 每頁筆數\r
}\r
\`\`\`\r
\r
#### 2. extractPaginationContent(response)\r
從 API 回應中提取資料並更新分頁狀態。\r
\r
**支援兩種 API 回應格式：**\r
\r
格式 1（推薦）：使用 page/size\r
\`\`\`javascript\r
{\r
  content: [...],\r
  page: 1,\r
  size: 15,\r
  totalPages: 10,\r
  total: 150,\r
  offset: 0\r
}\r
\`\`\`\r
\r
格式 2：使用 number/pageSize（Spring Data JPA 原生格式，number 為 0-based）\r
\`\`\`javascript\r
{\r
  content: [...],\r
  number: 0,   // 0-based，前端自動 +1 轉為顯示頁碼\r
  pageSize: 15,\r
  totalPages: 10,\r
  total: 150,\r
  offset: 0\r
}\r
\`\`\`\r
\r
> **自動處理：** 提取 content 陣列並更新 paginationModel、為每筆資料附加 $$RowNumber（序號）和 $$RowIndex（索引）\r
\r
---\r
\r
### ⚠️ 換頁必須使用 updatePaginationPage\r
\r
> 🚨 **重要行為規則：所有換頁操作一律使用 updatePaginationPage**\r
> 不能直接賦值 \`paginationModel.page = page\`，這樣**只會更新 UI，不會觸發 API 請求**。\r
\r
#### ❌ 錯誤寫法\r
\`\`\`javascript\r
// 直接賦值 → 只更新 UI，不觸發 API\r
paginationModel.value.page = 2\r
\r
// 事件處理中直接賦值 → 同樣不會觸發 API\r
@update:page="page => (paginationModel.page = page)"\r
\`\`\`\r
\r
#### ✅ 正確寫法\r
\`\`\`javascript\r
// 使用函數 → 同時更新 requestPage 和 UI，觸發 API\r
updatePaginationPage(2)\r
\r
// 事件處理中使用函數\r
@update:page="updatePaginationPage"\r
\`\`\`\r
\r
#### 行為對比\r
\r
| 操作 | 更新 requestPage | 更新 UI (paginationModel.page) | 觸發 API |\r
|---|:---:|:---:|:---:|\r
| \`paginationModel.page = 2\` | ❌ | ✅ | ❌ |\r
| \`updatePaginationPage(2)\` | ✅ | ✅ | ✅ |\r
\r
**為什麼這樣設計？**\r
\r
\`mergePaginationParameter\` 產生 \`pageNo\` 時，讀取的是內部獨立的 \`requestPage\`，**不是** \`paginationModel.page\`。\r
\r
這個設計是為了避免無限循環：\`extractPaginationContent\` 會回寫 \`paginationModel.page\`，如果 \`mergePaginationParameter\` 也讀取它，就會形成 computed → API → 回寫 → computed 的無限循環。透過 \`requestPage\` 將兩者分離，徹底切斷循環。\r
\r
\`\`\`\r
extractPaginationContent 寫入 paginationModel.page\r
  → mergePaginationParameter 的 computed 重算\r
  → 產生新物件觸發 vue-query\r
  → API 請求 → 回應\r
  → extractPaginationContent 又寫入\r
  → 無限循環 ♻️\r
\`\`\`\r
\r
---\r
\r
### 🎨 AppPagination 元件\r
\r
**檔案位置：** \`src/components/AppPagination.vue\`\r
**功能：** 專為無障礙網頁設計的分頁 UI 元件，符合 WCAG 2.1 AA 無障礙標準，主要用於 public 頁面（非登入頁面）以通過無障礙檢測\r
\r
#### Props\r
\r
| Props | 類型 | 必填 | 預設值 | 說明 |\r
|---|---|:---:|---|---|\r
| \`page\` | Number | ✅ | - | 當前頁碼（1-based） |\r
| \`total\` | Number | ✅ | - | 總筆數 |\r
| \`pageSize\` | Number | ❌ | 10 | 每頁筆數 |\r
| \`maxPageButtons\` | Number | ❌ | 7 | 最多顯示幾個頁碼按鈕 |\r
\r
#### Events\r
\r
| Events | 參數 | 說明 |\r
|---|---|---|\r
| \`update:page\` | (page: Number) | 當使用者點擊頁碼時觸發 |\r
\r
#### ✨ 無障礙特性（WCAG 2.1 AA 標準）\r
\r
> **重要提醒：** 本元件專為通過政府網站無障礙檢測而設計，確保視障、肢障等使用者也能順利操作分頁功能。\r
\r
- **ARIA 標籤：** \`aria-label\` 為每個按鈕提供明確說明（如「第 3 頁」、「上一頁」）\r
- **當前頁標示：** \`aria-current="page"\` 告知螢幕閱讀器目前所在頁面\r
- **鍵盤導航：** 完整支援 Tab 鍵切換、Enter/Space 鍵觸發\r
- **視覺對比：** 當前頁高亮、disabled 狀態明確，符合色彩對比度要求\r
- **螢幕閱讀器：** 提供完整的頁碼資訊朗讀（如「共 150 筆資料」）\r
- **焦點管理：** 清晰的焦點框線，易於追蹤當前位置\r
\r
#### ⚠️ 重要觀念：Props ≠ API Request 參數\r
\r
AppPagination 是純 UI 元件，只負責顯示分頁介面，**不負責 API 通訊**。\r
\r
- **元件 Props（page, pageSize）**：只是 Vue 元件內部的命名，用於接收資料來顯示 UI\r
- **API Request 參數**：由 usePagination 的 mergePaginationParameter 產生，實際發送的是 \`pageNo\` 和 \`pageSize\`\r
\r
> **簡單來說：** AppPagination 的 \`:page\` prop 只是傳資料給 UI 元件，與後端 API 參數無關。\r
\r
---\r
\r
### 💡 使用方式\r
\r
#### 方式一：單獨使用 AppPagination\r
\r
適用於自訂列表佈局的情況：\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <!-- 自訂的列表 -->\r
    <div v-for="item in dataList" :key="item.id">\r
      {{ item.title }}\r
    </div>\r
\r
    <!-- 分頁元件 -->\r
    <app-pagination\r
      :page="paginationModel.page"\r
      :total="paginationModel.itemCount"\r
      :page-size="paginationModel.pageSize"\r
      @update:page="updatePaginationPage"\r
    />\r
  </div>\r
</template>\r
\r
<script setup>\r
import { useGetDataList } from '@/api/example'\r
\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
const queryParams = computed(() => mergePaginationParameter({}))\r
const { data: apiResponse } = useGetDataList(queryParams)\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
<\/script>\r
\`\`\`\r
\r
#### 方式二：搭配 AppTable 使用 ✅ 推薦\r
\r
適用於需要表格展示的情況，分頁會自動整合在表格下方：\r
\r
\`\`\`vue\r
<template>\r
  <app-table\r
    striped\r
    single-line\r
    accessible\r
    :pagination="paginationModel"\r
    @update:page="updatePaginationPage"\r
  >\r
    <tbody>\r
      <tr v-for="item in dataList" :key="item.id">\r
        <td>{{ item.title }}</td>\r
        <td>{{ item.date }}</td>\r
      </tr>\r
    </tbody>\r
  </app-table>\r
</template>\r
\r
<script setup>\r
import { useGetDataList } from '@/api/example'\r
\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
const queryParams = computed(() => mergePaginationParameter({}))\r
const { data: apiResponse } = useGetDataList(queryParams)\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
<\/script>\r
\`\`\`\r
\r
> ⚠️ **AppTable 重點說明：**\r
> - 必須加上 \`accessible\` prop（public 頁面使用無障礙版本）\r
> - 傳入 \`:pagination="paginationModel"\`（將整個分頁狀態傳入）\r
> - 監聽 \`@update:page\` 事件並呼叫 \`updatePaginationPage\`\r
> - **必須使用 \`updatePaginationPage\` 處理換頁事件，直接修改 \`paginationModel.page\` 不會觸發 API 請求！**\r
\r
---\r
\r
### 📝 完整範例\r
\r
#### 搭配搜尋功能（AppTable）\r
\r
\`\`\`vue\r
<template>\r
  <div>\r
    <!-- 搜尋表單 -->\r
    <div class="mb-4">\r
      <input v-model="searchModel.keyword" placeholder="請輸入關鍵字" />\r
      <button @click="handleSearch">搜尋</button>\r
      <button @click="handleReset">清除</button>\r
    </div>\r
\r
    <!-- 表格 + 分頁 -->\r
    <app-table\r
      striped\r
      single-line\r
      accessible\r
      :pagination="paginationModel"\r
      @update:page="updatePaginationPage"\r
    >\r
      <tbody>\r
        <tr v-for="item in dataList" :key="item.id">\r
          <td>{{ item.title }}</td>\r
          <td>{{ item.date }}</td>\r
        </tr>\r
      </tbody>\r
    </app-table>\r
  </div>\r
</template>\r
\r
<script setup>\r
import { cloneDeep } from 'lodash-es'\r
import { useGetNewsList } from '@/api/news'\r
\r
// 搜尋條件\r
const searchModel = ref({\r
  keyword: '',\r
})\r
\r
// 實際送出的查詢參數\r
const queryParams = ref({})\r
\r
// 分頁管理\r
const { paginationModel, updatePaginationPage, mergePaginationParameter, extractPaginationContent } = usePagination()\r
\r
// 合併分頁參數\r
const apiParams = computed(() => mergePaginationParameter(queryParams.value))\r
\r
// 呼叫 API\r
const { data: apiResponse } = useGetNewsList(apiParams)\r
\r
// 提取資料\r
const dataList = computed(() => extractPaginationContent(apiResponse.value))\r
\r
// 執行搜尋\r
const handleSearch = () => {\r
  queryParams.value = cloneDeep(searchModel.value)\r
}\r
\r
// 清除條件\r
const handleReset = () => {\r
  searchModel.value = { keyword: '' }\r
  queryParams.value = {}\r
}\r
<\/script>\r
\`\`\`\r
\r
#### 自訂每頁筆數\r
\r
\`\`\`vue\r
<script setup>\r
// 初始化時設定每頁 20 筆\r
const { paginationModel, updatePaginationPage } = usePagination({\r
  pageSize: 20\r
})\r
<\/script>\r
\r
<template>\r
  <app-table\r
    accessible\r
    :pagination="paginationModel"\r
    @update:page="updatePaginationPage"\r
  >\r
    <!-- 表格內容 -->\r
  </app-table>\r
</template>\r
\`\`\`\r
\r
#### 調整最大顯示按鈕數\r
\r
\`\`\`vue\r
<template>\r
  <!-- 最多顯示 5 個頁碼按鈕（預設 7 個） -->\r
  <app-pagination\r
    :page="paginationModel.page"\r
    :total="paginationModel.itemCount"\r
    :page-size="paginationModel.pageSize"\r
    :max-page-buttons="5"\r
    @update:page="updatePaginationPage"\r
  />\r
</template>\r
\r
<!-- 顯示效果：< 1 ... 3 4 5 ... 19 > 共 279 筆資料 -->\r
\`\`\`\r
\r
#### 換頁時捲動到頂部\r
\r
\`\`\`javascript\r
import { useAppScroll } from '@/composables/useAppScroll'\r
\r
const { scrollToTop } = useAppScroll()\r
const { paginationModel } = usePagination()\r
\r
// 監聽 page 變化，換頁時自動捲動到頂部\r
watchEffect(() => {\r
  if (paginationModel.value.page) {\r
    scrollToTop()\r
  }\r
})\r
\`\`\`\r
\r
---\r
\r
### ❓ 常見問題\r
\r
#### Q1: 應該使用哪種方式？\r
- **有表格展示** → 使用方式二（AppTable + pagination prop）✅ 推薦\r
- **自訂列表佈局** → 使用方式一（單獨 AppPagination）\r
\r
#### Q2: 為什麼 AppTable 的分頁點擊沒反應？\r
忘記監聽 \`@update:page\` 事件！必須這樣寫：\r
\r
\`\`\`vue\r
<!-- ❌ 錯誤：沒有監聽事件 -->\r
<app-table :pagination="paginationModel">\r
\r
<!-- ❌ 錯誤：直接修改 paginationModel.page，不會觸發 API 請求 -->\r
<app-table :pagination="paginationModel" @update:page="page => (paginationModel.page = page)">\r
\r
<!-- ✅ 正確：使用 updatePaginationPage -->\r
<app-table\r
  :pagination="paginationModel"\r
  @update:page="updatePaginationPage"\r
>\r
\`\`\`\r
\r
**運作原理：**\r
1. 使用者點擊頁碼按鈕\r
2. AppPagination 元件發出 \`update:page\` 事件\r
3. AppTable 接收到事件後，再次發出 \`update:page\` 事件\r
4. 父元件透過 \`updatePaginationPage\` 同時更新內部 \`requestPage\` 和 \`paginationModel.page\`\r
5. \`requestPage\` 更新後，\`mergePaginationParameter\` 的 computed 重新計算，觸發 API 請求\r
\r
#### Q3: AppTable 的 accessible prop 是什麼？\r
控制使用哪一種分頁元件：\r
- \`accessible\` - 使用 **AppPagination 無障礙版本**（符合 WCAG AA 標準）\r
- 不加或 \`accessible=false\` - 使用 Naive UI 的 n-pagination（無障礙不合規）\r
\r
\`\`\`vue\r
<!-- ✅ Public 頁面（對外服務，必須符合無障礙標準） -->\r
<app-table accessible :pagination="paginationModel">\r
\r
<!-- ❌ Private 頁面（內部管理系統，不需無障礙檢測） -->\r
<app-table :pagination="paginationModel">\r
\`\`\`\r
\r
> 📌 **重要提醒：** 所有 **public 資料夾下的頁面**都必須加上 \`accessible\`，政府網站無障礙檢測會檢查這些頁面。\r
\r
#### Q4: 為什麼要分成兩個部分（usePagination + AppPagination）？\r
遵循 Vue 3 Composition API 的最佳實踐：\r
- **usePagination**：可重複使用的邏輯（純 JavaScript，可用於不同的 UI）\r
- **AppPagination**：可自訂的展示層（Vue 元件，可替換成其他 UI）\r
\r
這樣的設計讓你可以：\r
1. 在不同元件間共用分頁邏輯\r
2. 輕鬆替換 UI 元件而不影響邏輯\r
3. 更容易測試和維護\r
\r
#### Q5: 可以不使用 AppPagination 元件嗎？\r
可以！\`usePagination\` 是獨立的，你可以：\r
1. 使用其他分頁 UI 元件\r
2. 自己手刻分頁 HTML\r
3. 使用第三方套件\r
\r
只要透過 \`updatePaginationPage\` 更新頁碼即可（不能直接修改 \`paginationModel.page\`）。\r
\r
#### Q6: API 回應格式不符合怎麼辦？\r
\r
> ⚠️ **重要：** 後端應該遵循統一的分頁格式規範。如果發現格式不符合，請**優先回報後端團隊修正**，而不是前端自行轉換。\r
\r
正常情況下**不需要特殊處理**，因為：\r
- ✅ **後端應遵循標準格式**：專案後端 API 已統一使用標準分頁格式\r
- ✅ **前端自動適配**：\`extractPaginationContent\` 已支援兩種常見格式\r
\r
格式 1（推薦）：使用 page/size\r
\`\`\`json\r
{\r
  "content": [...],\r
  "page": 1,\r
  "size": 15,\r
  "totalPages": 10,\r
  "total": 150\r
}\r
\`\`\`\r
\r
格式 2：使用 number/pageSize\r
\`\`\`json\r
{\r
  "content": [...],\r
  "number": 1,\r
  "pageSize": 15,\r
  "totalPages": 10,\r
  "total": 150\r
}\r
\`\`\`\r
\r
如果遇到格式不符合的情況：\r
1. **優先做法**：聯繫後端團隊調整 API 回應格式，統一使用標準格式\r
2. **臨時方案**（不推薦，會增加維護成本）：\r
\r
\`\`\`javascript\r
// 臨時方案範例（不推薦）\r
const { data: apiResponse } = useGetDataList(apiParams)\r
\r
const dataList = computed(() => {\r
  if (!apiResponse.value) return []\r
  \r
  // 將非標準格式轉換為標準格式\r
  const standardFormat = {\r
    content: apiResponse.value.items,\r
    page: apiResponse.value.currentPage,\r
    size: apiResponse.value.perPage,\r
    totalPages: apiResponse.value.pages,\r
    total: apiResponse.value.totalItems\r
  }\r
  \r
  return extractPaginationContent(standardFormat)\r
})\r
\`\`\`\r
\r
> 💡 發現格式不符時，請回報給後端團隊統一調整，避免每個頁面都要寫轉換邏輯。\r
\r
#### Q7: 如何在頁碼變更時觸發額外動作？\r
使用 \`watchEffect\` 或 \`watch\`：\r
\r
\`\`\`javascript\r
import { useAppScroll } from '@/composables/useAppScroll'\r
\r
const { scrollToTop } = useAppScroll()\r
\r
watchEffect(() => {\r
  // 當 page 改變時，捲動到頂部\r
  if (paginationModel.value.page) {\r
    scrollToTop()\r
    console.log('切換到第', paginationModel.value.page, '頁')\r
  }\r
})\r
\`\`\`\r
\r
#### Q8: AppTable 沒有 pagination prop 怎麼辦？\r
這種情況表示這個 app-table 只用來展示靜態資料，不需要分頁功能：\r
\r
\`\`\`vue\r
<!-- 靜態表格，只需要 accessible -->\r
<app-table accessible>\r
  <tbody>\r
    <tr>\r
      <td>資料1</td>\r
    </tr>\r
    <tr>\r
      <td>資料2</td>\r
    </tr>\r
  </tbody>\r
</app-table>\r
\`\`\`\r
\r
只有需要分頁功能的表格才需要加上 \`:pagination\` 和 \`@update:page\`。\r
\r
#### Q9: 為什麼不能直接用 paginationModel.page = page 處理換頁？\r
\r
因為 \`mergePaginationParameter\` 內部使用獨立的 \`requestPage\` 來產生 \`pageNo\`，而非讀取 \`paginationModel.page\`。\r
\r
直接修改 \`paginationModel.page\` 只會更新 UI 顯示，**不會觸發 API 請求**。必須透過 \`updatePaginationPage\` 同時更新 \`requestPage\` 和 \`paginationModel.page\`：\r
\r
\`\`\`javascript\r
// ❌ 錯誤：只更新 UI，不觸發 API\r
paginationModel.value.page = 2\r
\r
// ✅ 正確：同時更新 requestPage 和 UI，觸發 API\r
updatePaginationPage(2)\r
\`\`\`\r
\r
**設計原因：**\r
\r
\`extractPaginationContent\` 會從 API 回應中回寫 \`paginationModel.page\`（同步總頁數、總筆數等 UI 狀態）。如果 \`mergePaginationParameter\` 直接讀取 \`paginationModel.page\`，就會形成無限循環：\r
\r
\`\`\`\r
extractPaginationContent 寫入 paginationModel.page\r
  → mergePaginationParameter 的 computed 重算\r
  → 產生新物件觸發 vue-query\r
  → API 請求 → 回應\r
  → extractPaginationContent 又寫入\r
  → 無限循環 ♻️\r
\`\`\`\r
\r
透過 \`requestPage\` 將「API 請求用的頁碼」和「UI 顯示用的頁碼」分離，徹底切斷循環。\r
\r
---\r
\r
## ⚙️ 後端實作指引\r
\r
### 📌 統一規範\r
\r
本專案統一採用以下兩項**強制規定**，其餘 Service / Repository 的實作方式不限制：\r
- **Request：** 含有分頁參數的 Request 物件，一律繼承 \`DefaultPageParams\`\r
- **Response：** 分頁查詢的回應，一律回傳 \`Pagination<T>\`\r
\r
---\r
\r
### 1. 核心類別說明\r
\r
#### Request 端\r
\r
| 類別 | 路徑 | 說明 |\r
|---|---|---|\r
| \`PageParams\` | moi.rdss.platform.paging.PageParams | 分頁參數介面，定義 getPageNo() / getPageSize() |\r
| \`DefaultPageParams\` | moi.rdss.platform.paging.DefaultPageParams | 分頁參數基礎類，預設 pageNo=1、pageSize=10 |\r
\r
#### Response 端\r
\r
| 類別 | 路徑 | 說明 |\r
|---|---|---|\r
| \`Pagination<T>\` | moi.rdss.platform.paging.Pagination | 統一分頁回應物件（自訂），所有分頁 API 均回傳此型別 |\r
\r
#### 工具類（選用）\r
\r
| 類別 | 方法 | 說明 |\r
|---|---|---|\r
| \`RequestUtils\` | getPageRequest(PageParams) | 將 Request 轉為 Spring 的 PageRequest，自動處理頁碼從 1 → 0 的轉換 |\r
\r
---\r
\r
### 2. Request：繼承 DefaultPageParams\r
\r
> ✅ **強制規範：** 需要分頁的 Request 物件，一律繼承 \`DefaultPageParams\`，不可自行重複定義 pageNo / pageSize 欄位。\r
\r
\`\`\`java\r
@Data\r
@SuperBuilder\r
@NoArgsConstructor\r
public class FooListReq extends DefaultPageParams {\r
\r
    @Schema(description = "名稱關鍵字")\r
    private String name;\r
\r
    @Schema(description = "狀態")\r
    private String status;\r
}\r
\`\`\`\r
\r
**DefaultPageParams 已內建以下欄位：**\r
\r
| 欄位 | 預設值 | 說明 |\r
|---|---|---|\r
| \`pageNo\` | 1 | 前端頁碼從 1 開始 |\r
| \`pageSize\` | 10 | 每頁預設 10 筆 |\r
\r
---\r
\r
### 3. Response：回傳 Pagination\\<T\\>\r
\r
> ✅ **強制規範：** 所有分頁查詢的 API 回應，一律包裝為 \`Pagination<T>\`，不可直接回傳 Spring 的 \`Page<T>\` 給前端。\r
\r
**Pagination\\<T\\> JSON 回應格式：**\r
\`\`\`json\r
{\r
  "content": [],\r
  "total": 100,\r
  "size": 10,\r
  "number": 1,\r
  "totalPages": 10,\r
  "numberOfElements": 10,\r
  "first": true,\r
  "last": false,\r
  "offset": 0,\r
  "empty": false,\r
  "extra": {}\r
}\r
\`\`\`\r
\r
| 欄位 | 型別 | 說明 |\r
|---|---|---|\r
| \`content\` | Array | 資料集合 |\r
| \`total\` | Integer | 總筆數 |\r
| \`size\` | Integer | 每頁筆數 |\r
| \`number\` | Integer | 目前頁次（**0-based**，Spring Data JPA 原生值，第 1 頁 = 0） |\r
| \`totalPages\` | Integer | 總頁數 |\r
| \`numberOfElements\` | Integer | 本頁實際筆數 |\r
| \`first\` | Boolean | 是否為第一頁 |\r
| \`last\` | Boolean | 是否為最後一頁 |\r
| \`offset\` | Integer | 分頁位移 |\r
| \`empty\` | Boolean | 是否有資料 |\r
| \`extra\` | Object | 額外附加資料（選用） |\r
\r
---\r
\r
### 4. Service / Repository 實作彈性說明\r
\r
Service 與 Repository 的實作方式依 SQL 複雜程度自行決定，沒有強制標準寫法：\r
\r
| 情境 | Repository 回傳 | Service 最終組裝 |\r
|---|---|---|\r
| 簡單查詢，條件單純 | Spring Data JPA 的 \`Page<Entity>\` | 轉換後包裝成 \`Pagination<T>\` |\r
| 複雜 SQL，需自組查詢 | \`Page<Entity>\` 或 \`List<Entity>\` 皆可 | 轉換後包裝成 \`Pagination<T>\` |\r
\r
> **關鍵原則：** 不論 Service / Repository 內部怎麼實作，最終在 Controller 回傳給前端的格式一律是 \`Pagination<T>\`，確保前端收到的分頁格式固定一致。\r
\r
---\r
\r
### 5. Pagination\\<T\\> 常用建構方式\r
\r
實作時依情境選擇適合的建構子，以下為常見用法供參考：\r
\r
\`\`\`java\r
// 搭配 Spring Data JPA 的 Page<Entity> 使用（最常見）\r
return new Pagination<>(dtos, pageable, page.getTotalElements());\r
\r
// 手動指定分頁資訊（複雜 SQL / Native SQL）\r
return new Pagination<>(dtos, pageNumber, pageSize, total);\r
\r
// 附加額外欄位（如統計數字、摘要）\r
Pagination<FooDto> result = new Pagination<>(dtos, pageable, total);\r
result.addExtra("totalAmount", 99999L);\r
return result;\r
\r
// 從現有 Pagination 轉型\r
return existingPagination.map(entity -> convertToDto(entity));\r
\`\`\`\r
\r
> ⚠️ **注意：**\r
> 1. Spring Data JPA 的頁碼從 0 開始，前端傳入的 pageNo 從 1 開始。可使用 \`RequestUtils.getPageRequest(req)\` 自動轉換，或自行處理 -1 的計算。\r
> 2. \`Pagination<T>\` 的 \`number\` 欄位保持 Spring Data JPA 原生的 **0-based** 值，前端 \`extractPaginationContent\` 會自動 +1 轉為顯示用的 1-based 頁碼，後端**不需要**自行做 +1 轉換。\r
\r
---\r
\r
### 6. 禁止事項（Do NOT）\r
\r
| ❌ 禁止 | ✅ 應改為 |\r
|---|---|\r
| 回傳 Spring 的 \`Page<T>\` 給前端 | 回傳 \`Pagination<T>\` |\r
| Request 物件自行重複定義 pageNo / pageSize 欄位 | 繼承 \`DefaultPageParams\` |\r
\r
---\r
\r
### 7. 快速對照表\r
\r
| 層次 | Request 型別 | Response 型別 | 備註 |\r
|---|---|---|---|\r
| **Controller** | \`XxxReq extends DefaultPageParams\` | \`ResponseEntity<Pagination<XxxDto>>\` | 強制規範 |\r
| **Service** | 由 PG 自行決定 | \`Pagination<XxxDto>\` | 強制規範 |\r
| **Repository** | 由 PG 自行決定 | \`Page<T>\` 或 \`List<T>\` 皆可 | 依 SQL 複雜度決定 |\r
`,Vx=`# 5. API 呼叫方式與 HTTP Method 安全規範

> 修訂日期：2026-08-10
>
> 適用範圍：\`rdss_front\` 與 \`rdss_backend_api_new\` 的新 API、既有 API 修改及 code review

本規範不再把「SSDLC」解釋為「所有 API 一律 POST」。HTTP method 應依操作語意、資料敏感度與現有系統相容性選擇；安全控制的重點是：**敏感資料不得出現在 URL、GET 不得改變狀態、所有輸入都要驗證、每支 API 都要做授權檢查，且不得把敏感資料寫入 log 或 cache。**

**RDSS method 預設規則：只有無敏感資料、無副作用的簡單查詢使用 GET；敏感／複合查詢，以及新增、修改、刪除、寄送、送審等業務動作均使用 POST。既有 PUT／PATCH／DELETE 契約可維持，但新 API 原則上不新增這三種 method。**

> **引用說明：** 外部連結是本規範採用的安全控制依據；「RDSS 現階段採用原則」、生效範圍與優先序，是依現有前後端架構制定的落地方式，不代表外部規範逐字指定 RDSS 必須採用特定 endpoint 或程式寫法。

---

## 一、規範依據與已更正觀念

1. NIST SSDF（SP 800-218）是可依風險、成本與可行性調整的安全開發流程框架，沒有規定 API 必須使用哪一種 HTTP method。（[NIST SP 800-218 SSDF](https://csrc.nist.gov/pubs/sp/800/218/final)）
2. CWE-598 與 OWASP ASVS v5.0.0-14.2.1 管制的是「敏感資料出現在 URL／query string」，不是禁止 GET 本身。（[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS V14 Data Protection](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)）
3. HTTPS 保護傳輸中的 HTTP request；GET 與 POST 都必須使用 HTTPS。POST Body 的優點是資料不會成為 URL 的一部分，較不易落在 browser history、access log、proxy log 或 Referer，而不是「只有 POST 才會加密」。（[OWASP REST Security — HTTPS](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#https)）
4. GET 的 safe 語意及 GET／PUT／DELETE 的 idempotent 語意會影響 cache、prefetch 與失敗重試；不得只為形式統一而忽略方法語意。（[RFC 9110 §9.2 Common Method Properties](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2)）
5. CORS 的 \`allowedMethods\` 只決定瀏覽器跨來源請求範圍，不等於伺服器端的 HTTP method allowlist；端點仍須拒絕未允許的方法。（[OWASP REST Security — Restrict HTTP methods](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#restrict-http-methods)）

---

## 二、敏感資料定義

符合下列任一項即視為敏感資料；清單是最低要求，業務或法規另有較嚴格分類時從其規定：

- **個人資料：** 姓名、身分證號／居留證號、生日、電話、email、地址、照片、學經歷、任職、薪資、金融帳戶、健康或其他可直接／間接識別自然人的資料。
- **認證與憑證：** password、JWT／access token／refresh token、API key、session ID、OTP、驗證碼、憑證私密資料。
- **受保護業務資料：** 申請、審查、申訴、役男、單位人員、權限、未公開統計與檔案等資料，以及能直接定位這些資料的具意義識別碼。
- **含上述資料的查詢條件或組合：** 即使單一欄位看似普通，只要組合後可識別個人或定位受保護案件，也視為敏感。

不透明系統流水號／UUID 並非當然安全。其本身不得包含敏感業務意義，後端仍須針對目前登入者做物件層級授權檢查（防 IDOR）；高風險資源宜再採不可合理猜測的識別碼，但不可用「難猜」取代授權。

對應依據：[OWASP ASVS V14 Data Protection](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

---

## 三、HTTP method 決策規則

### 3.1 決策表

| 情境 | method | 參數位置 | 必要條件 | 官方參考 |
|---|---|---|---|---|
| 無副作用、無敏感 URL 參數的簡單查詢 | \`GET\` | Query string；或無參數 | 可安全重試／prefetch；參數須驗證 | [RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html) |
| 查詢條件含敏感資料、複合 DTO 或大量條件 | \`POST\` | JSON Body | 後端 \`@Valid @RequestBody\`；不得因 POST 而省略授權 | [CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md) |
| 新增或觸發業務動作 | \`POST\` | JSON Body／multipart | 不得用 GET；重送風險須由業務邏輯處理 | [RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3) |
| 完整／局部修改 | \`POST\` | JSON Body | RDSS 新 API 預設使用 action-style POST；既有 PUT／PATCH 契約可維持 | [RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)；POST 為 RDSS 落地決策 |
| 刪除資源 | \`POST\` | JSON Body | RDSS 新 API 預設使用 action-style POST；敏感識別資料放 Body，且必須做物件層級授權；既有 DELETE 契約可維持 | [RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/) |
| 檔案下載 | \`GET\` 或 \`POST\` | 無敏感條件可 GET；含敏感條件用 POST Body | 回應依內容決定 \`Cache-Control\`；需驗證下載權限 | [OWASP ASVS 14.2.1／14.3.2](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/) |

表內官方來源說明通用安全控制；新 API 預設採 action-style POST 是 RDSS 依現況制定的落地規則，不代表 RFC 或 OWASP 強制所有異動一律使用 POST。

### 3.2 RDSS 現階段採用原則

- **既有 API：契約優先。** 前端 method 必須與後端 Controller 的實際 mapping 一致，不得只因本規範發布就單邊改 method。
- **新 API／契約異動：依 RDSS 預設規則選擇。** 簡單非敏感只讀查詢使用 GET；其餘查詢與業務動作使用 POST。除非外部介接契約或架構審查明確要求，新 API 不新增 PUT／PATCH／DELETE。
- **既有 PUT／PATCH／DELETE：契約未異動前維持。** 不得為統一形式而單邊改成 POST；需要改 method 時仍須前後端同步與回歸驗證。
- **POST 查詢可以保留。** RDSS 現有大量查詢使用 POST Body；若條件含敏感資料或是複合 DTO，這仍是正確且可執行的選擇。
- **GET 僅能讀取。** 寄信、登出、更新計數、產檔、儲存、刪除、送審等有副作用操作不得新增為 GET。
- **method 不是授權控制。** 每支 API 仍須依 \`11-頁面權限.md\` 與 \`13-權限模型與最大管理員規範.md\` 驗證身分、功能權限及資料歸屬。

---

## 四、URL 與參數規則

### 4.1 必須遵守

- 敏感資料不得出現在 URL 的任何部分，包含 path、query string、fragment（fragment 不會送至 server，但仍可能留在 client 紀錄）。
- token、API key、session ID、OTP、身分證號、姓名、email 等不得放在 \`@RequestParam\` 或 \`@PathVariable\`。
- 不得以 \`POST /path?account=...\` 規避規則；只要資料仍在 URL 就不合格。
- \`@RequestParam\`／\`@PathVariable\` 必須有長度、格式、範圍與可接受值驗證；Controller 類別需啟用可生效的 method validation。
- 前端不得手工串接 query string；使用 Axios \`params\`，並確認值不屬於敏感資料。
- URL 中的資源 ID 必須搭配後端物件層級授權檢查，不能只判斷「已登入」。

對應依據：[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP API1:2023 BOLA](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/)

### 4.2 範例

\`\`\`text
# ✅ 非敏感代碼查詢
GET /RDP011A03/parentType

# ✅ 含個資的複合查詢（示意端點，非既有 API 契約）
POST /QSP020B01/query
{
  "idNo": "A123456789",
  "name": "王小明",
  "pageNo": 1,
  "pageSize": 15
}

# ❌ POST 仍把敏感資料放在 URL
POST /QSP020B01/query?idNo=A123456789

# ❌ 敏感識別碼放在 path
GET /api/person/A123456789/detail
\`\`\`

若第三方 SSO／OAuth callback 的既定協定無法避免 URL 參數，必須限縮為協定必要欄位、使用短效且不可預測的 code/state、避免記錄完整 URL，並由資安／架構審查確認；不得把此例外套用到一般 RDSS API。

---

## 五、後端實作規範（Spring Boot）

### 5.1 非敏感 GET

\`\`\`java
@RestController
@RequestMapping("/RDP011A03")
public class Rdp011a03Controller {

    @GetMapping("/parentType")
    public ResponseEntity<?> parentType() {
        // 查詢不得改變資料；仍須執行必要的身分與權限檢查
    }
}
\`\`\`

官方參考：[RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

### 5.2 含敏感／複合條件的 POST 查詢

\`\`\`java
@PostMapping("/query")
public ResponseEntity<?> query(@Valid @RequestBody PersonQueryReq req) {
    // Service 仍須依登入者檢查可查詢的資料範圍
}

public class PersonQueryReq {
    @Size(max = 10, message = "身分證號長度不可超過10字元")
    private String idNo;

    @Size(max = 50, message = "姓名長度不可超過50字元")
    private String name;
}
\`\`\`

官方參考：[CWE-598](https://cwe.mitre.org/data/definitions/598.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)

### 5.3 禁止用 GET 執行異動

\`\`\`java
// ❌ GET 具有登出／異動副作用
@GetMapping("/logout")
public ResponseEntity<?> logout() { ... }

// ✅ 沿用 RDSS action-style 契約
@PostMapping("/logout")
public ResponseEntity<?> logout() { ... }
\`\`\`

官方參考：[RFC 9110 §9.2.1 Safe Methods](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2.1)、[RFC 9110 §9.3.3 POST](https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3)

### 5.4 驗證要求

1. JSON Body 使用 \`@Valid @RequestBody\` + DTO Bean Validation。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)、[Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1)）
2. \`@RequestParam\`／\`@PathVariable\` 使用可生效的 method validation + 參數標註。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)）
3. 所有字串至少定義最大長度；有固定格式／列舉時再加 \`@Pattern\` 或 enum 驗證。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)、[Jakarta Validation 3.1](https://jakarta.ee/specifications/bean-validation/3.1/jakarta-validation-spec-3.1)）
4. 驗證必須在後端執行，前端驗證只負責使用者體驗。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)）
5. 不得因現有 \`XssStringJsonDeserializer\` 而省略長度、格式、SQL 參數化或輸出編碼。（[OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)、[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)）

統一例外處理必須涵蓋 \`MethodArgumentNotValidException\` 與 \`HandlerMethodValidationException\`；若既有 Controller 保留類別層級 \`@Validated\` 並透過 AOP 執行 method validation，也須涵蓋 \`ConstraintViolationException\`。驗證失敗應回傳一致的 400 格式，不得落成 500。（[Spring MVC Validation](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-validation.html)）

含自由文字的查詢優先使用 POST + DTO；若使用 GET，只接受可嚴格白名單驗證的代碼、數字、日期或 enum 類參數，並確認 method validation 與錯誤回應確實生效。（[OWASP Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)、[OWASP ASVS 14.2.1](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)）

---

## 六、前端實作規範（Vue 3 + Axios + TanStack Query）

### 6.1 非敏感 GET

\`\`\`javascript
export const useParentTypes = () =>
  useQuery({
    queryKey: ['/RDP011A03/parentType'],
    queryFn: () => instanceV2.get('/RDP011A03/parentType'),
  })
\`\`\`

### 6.2 含敏感／複合條件的 POST 查詢

\`\`\`javascript
export const usePersonQuery = criteria =>
  useQuery({
    queryKey: ['/QSP020B01/query', criteria],
    queryFn: () => instanceV2.post('/QSP020B01/query', criteria),
  })
\`\`\`

### 6.3 Query／Mutation 的判斷

- \`useQuery\`：只讀、可重新抓取的操作；即使後端因敏感條件而使用 POST，仍可用 \`useQuery\`。
- \`useMutation\`：會新增、修改、刪除、寄送、送審、產生一次性結果或需由使用者主動觸發的操作。
- 不可只看 GET／POST 決定 Query／Mutation；應看 API 是否有副作用。
- \`queryKey\` 若包含個資，只存在記憶體中且不得另行輸出到 console、持久化 storage 或監控事件；若未來啟用 query cache 持久化，須先重新做敏感資料審查。

套件行為參考：[TanStack Vue Query — Queries](https://tanstack.com/query/latest/docs/framework/vue/guides/queries)、[Mutations](https://tanstack.com/query/latest/docs/framework/vue/guides/mutations)、[Query Keys](https://tanstack.com/query/latest/docs/framework/vue/guides/query-keys)。「依副作用選擇 Query／Mutation」是 RDSS 為避免自動重抓造成異動的使用約束。

前端只能透過 \`src/api/axios.js\` 匯出的 \`instance\`／\`instanceV2\` 呼叫 API，不得另建 Axios instance、不得把 token 放 URL，也不得用 \`console.*\` 輸出 request／response。

---

## 七、日誌、Cache、CSRF 與 method 控管

### 7.1 日誌

- 禁止輸出完整 request、DTO、request body、response、Authorization header 或完整 URL。
- 禁止記錄第二章所列敏感值；錯誤 log 也不得把整包參數帶入。
- 可記錄：功能代碼、結果狀態、筆數、耗時、非敏感 enum／年度、後端產生的 correlation ID。
- POST Body 不會自動進 access log，但應用程式自己 \`log.info("{}", req)\` 仍會洩漏；不得把「改成 POST」視為 log 遮罩。

詳細 Fortify 寫法見 \`12-Fortify掃描規則.md\`。

對應依據：[CWE-532: Insertion of Sensitive Information into Log File](https://cwe.mitre.org/data/definitions/532.html)、[OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)

### 7.2 Cache 與安全 headers

- 回應含敏感資料時必須回 \`Cache-Control: no-store\`；檔案下載亦同。
- 全站必須使用 HTTPS；HSTS、Referrer-Policy 與反向代理／閘道的 URL log 遮罩需由部署設定一併確認。
- 在共用 interceptor／gateway 尚未建置全域規則前，開發者不得在文件中宣稱已全域套用；高風險 API 需逐支確認 response header。

對應依據：[OWASP ASVS 14.3.2](https://github.com/OWASP/ASVS/blob/v5.0.0_release/5.0/en/0x23-V14-Data-Protection.md)、[OWASP HTTP Security Response Headers](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)

### 7.3 CSRF

- CSRF 風險取決於瀏覽器是否會自動附帶認證資訊，不取決於 method 是否統一 POST。
- RDSS 採前端明確加入 \`Authorization: Bearer ...\`、後端不以 Cookie／HTTP Session 作為登入認證且維持 stateless 時，可依此威脅模型停用 CSRF；\`withCredentials: false\` 只能作為跨來源設定佐證，不能單獨作為停用 CSRF 的理由。
- 若改用 Cookie／Session／SSO Cookie 等瀏覽器自動附帶的認證，或新增可被一般 form 直接送出的認證流程，必須重新威脅建模並啟用適當 CSRF 防護。
- GET 永遠不得執行狀態異動。

對應依據：[OWASP Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### 7.4 HTTP method 控管

- 每支 Controller 端點必須明確使用 \`@GetMapping\`／\`@PostMapping\`／\`@PutMapping\`／\`@PatchMapping\`／\`@DeleteMapping\`，不得用未限制 method 的 \`@RequestMapping\` 暴露操作。
- 不支援的 method 應回 405；不得以 fallback Controller 接住後改執行其他操作。
- TRACE／TRACK 必須在 servlet container／reverse proxy 停用；OPTIONS／HEAD 是否開放依 CORS、health check 與實際端點需求決定。
- 現有 CORS 允許清單不是安全閘道 allowlist；正式環境仍須驗證 reverse proxy／WAF 設定。

對應依據：[OWASP REST Security — Restrict HTTP methods](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html#restrict-http-methods)、[RFC 9110 §15.5.6 — 405 Method Not Allowed](https://www.rfc-editor.org/rfc/rfc9110.html#section-15.5.6)

---

## 八、生效範圍與過渡策略

### 8.1 生效範圍

- **新增 API，或異動 method／path／request／response 契約：** 必須完整遵守本規範。
- **未異動的既有 API：** 不因本規範發布就全面轉換 method；若弱掃或人工審查發現問題，另依風險分級處理。
- **因一般功能而觸及既有 API：** P0／P1 或實際弱掃 High／Critical 為 PR 阻擋項目；P2 能低風險完成時一併修正，否則建立安全改善事項並完成風險註記；P3 列入技術債。
- **前後端契約異動：** 必須同批修改、驗證與發布，不得只改單側。
- **共用安全能力：** 在實作、部署及驗證完成前，不得於 PR 或文件宣稱已全域套用。

過渡原則依據：[NIST SSDF — risk-based adoption](https://csrc.nist.gov/projects/ssdf)

### 8.2 不採齊頭式 method 改寫

規範生效不代表立刻把既有 GET、PUT、PATCH 或 DELETE 改成 POST。既有契約可維持；只有新增 API 或經評估確定要異動契約時，才套用 RDSS 的 GET／POST 預設規則。改 method 可能影響 cache、retry、下載、WAF 與外部串接，必須前後端同步修改與驗證。

### 8.3 修正優先序

1. **P0：** URL 含 token、password、session、OTP、API key、身分證號等憑證／高度敏感資料。
2. **P1：** GET 有狀態異動；URL 含姓名、email、帳號、案件資訊等敏感條件；path 使用具業務意義識別碼且授權不足。
3. **P1：** 完整 request／DTO／response 或敏感欄位被寫入 log。
4. **P2：** 敏感回應未設 \`Cache-Control: no-store\`；\`@RequestParam\`／\`@PathVariable\` 缺少驗證。
5. **P3：** 無敏感資料且無副作用的既有 GET；可維持，後續只改善命名、驗證或 cache policy。

每次功能修改採「碰到就檢查」：若本次改動觸及既有 API，依 8.1 的生效範圍與上述優先序處理；未觸及的存量及非阻擋項目另開安全改善任務，不得在沒有評估回歸風險時混入一般功能修正。

---

## 九、PR 檢核清單

- [ ] method 與後端 Controller mapping 一致，且符合操作語意。
- [ ] GET／HEAD 沒有新增、修改、刪除、寄送、送審或其他副作用。
- [ ] URL path／query 不含敏感資料；POST 也沒有用 \`params\` 偷帶敏感值。
- [ ] Body 使用 DTO + \`@Valid\`；URL 參數有長度、格式、範圍／enum 驗證。
- [ ] Service 有登入者、功能權限與資料歸屬檢查，沒有 IDOR。
- [ ] 前端透過既有 Axios instance 呼叫，Query／Mutation 依副作用選擇。
- [ ] 沒有輸出完整 request／DTO／response／token／敏感欄位到 log 或 console。
- [ ] 敏感回應與下載已確認 \`Cache-Control: no-store\`。
- [ ] method 異動已同步修改前後端、API 文件、人工驗證案例及 WAF／proxy 設定（如適用）。
`,Gx=`# 6. 文字欄位長度\r
\r
前後端欄位長度驗證需保持一致，確保資料完整性。\r
\r
---\r
\r
## 📋 驗證原則\r
\r
### 前端驗證\r
- 使用 \`max\` 規則限制最大長度\r
- 提供即時錯誤提示訊息\r
- 在表單送出前阻擋不符規範的資料\r
- 提升使用者體驗\r
\r
### 後端驗證\r
- 使用 \`@Size\` 或 \`@Length\` 註解驗證\r
- 防止透過 Swagger 或 API 工具繞過前端驗證\r
- 確保資料庫欄位不會溢位\r
- 回傳明確的錯誤訊息\r
\r
---\r
\r
## ⚠️ 前後端雙重驗證的必要性\r
\r
理論上，前端已做長度限制，後端可不必重複驗證。但實務上，開發者可能透過 Swagger、Postman 等工具直接測試 API，若後端未設定驗證規則，可能會寫入不符合規範的資料至資料庫，造成資料品質問題。\r
\r
✓ **建議：前後端都應設定相同的長度限制，形成雙重防護機制。**\r
\r
---\r
\r
## 💡 前端實際使用範例\r
\r
### 範例 1：主要營業項目（限 200 字）\r
\`\`\`html\r
<app-form-row label="主要營業項目">\r
  <app-form-item\r
    :path="getWorkItemPath"\r
    :rule="[\r
      { required: saveType === 1, message: '請輸入營業項目' },\r
      { max: 200, message: '主要營業項目不可超過200個中文字' },\r
    ]"\r
  >\r
    <app-form-chinese-textarea \r
      v-model:value="getWorkItem" \r
      placeholder="營業項目" \r
    />\r
    <template #notice>以條列式簡述之，限200個中文字以內</template>\r
  </app-form-item>\r
</app-form-row>\r
\`\`\`\r
\r
### 範例 2：產品競爭力說明（限 600 字）\r
\`\`\`html\r
<app-form-row :label="false">\r
  <app-form-item\r
    path="commerce.potentialDesc"\r
    :rule="[\r
      { required: saveType === 1, message: '請輸入產品競爭力說明' },\r
      { max: 600, message: '產品競爭力說明不可超過600個中文字' },\r
    ]"\r
  >\r
    <app-form-chinese-textarea \r
      v-model:value="model.commerce.potentialDesc" \r
      placeholder="產品競爭力說明" \r
    />\r
    <template #notice>以條列式簡述之，限200個中文字以內</template>\r
  </app-form-item>\r
</app-form-row>\r
\`\`\`\r
\r
### 範例 3：其他說明（非必填，限 200 字）\r
\`\`\`html\r
<app-form-item\r
  path="commerce.shareratioDesc"\r
  :rule="[{ max: 200, message: '其他地區市場佔有率說明不可超過200個中文字' }]"\r
>\r
  <app-form-chinese-textarea\r
    v-model:value="model.commerce.shareratioDesc"\r
    placeholder="其他地區市場佔有率說明"\r
  />\r
  <template #notice>以條列式簡述之，限200個中文字以內</template>\r
</app-form-item>\r
\`\`\`\r
\r
### 關鍵說明\r
- \`:rule\` - 驗證規則陣列\r
- \`required\` - 必填驗證（通常依 saveType 動態判斷）\r
- \`max\` - 最大字數限制\r
- \`message\` - 錯誤提示訊息\r
- \`#notice slot\` - 顯示輔助說明文字\r
\r
---\r
\r
## 📏 常見長度規範參考\r
\r
| 欄位類型 | 建議長度 | 說明 |\r
|---|:---:|---|\r
| 標題（Title） | 50 字 | 適合短標題、名稱 |\r
| 摘要（Summary） | 200 字 | 簡短描述、條列說明 |\r
| 內容（Content） | 500 ~ 1000 字 | 詳細描述、長文內容 |\r
| 備註（Remark） | 200 ~ 500 字 | 補充說明 |\r
| 姓名（Name） | 20 ~ 50 字 | 人名、公司名稱 |\r
| 地址（Address） | 100 ~ 200 字 | 完整地址資訊 |\r
\r
---\r
\r
## 🔧 後端驗證範例（Java）\r
\r
\`\`\`java\r
public class CommerceDTO {\r
    \r
    // 主要營業項目 - 最長 200 字\r
    @Size(max = 200, message = "主要營業項目不可超過200個中文字")\r
    private String workItem;\r
    \r
    // 主要獲利來源 - 最長 200 字\r
    @Size(max = 200, message = "主要獲利來源不可超過200個中文字")\r
    private String psource;\r
    \r
    // 產品競爭力說明 - 必填且最長 600 字\r
    @NotBlank(message = "請輸入產品競爭力說明")\r
    @Size(max = 600, message = "產品競爭力說明不可超過600個中文字")\r
    private String potentialDesc;\r
    \r
    // 其他說明 - 非必填，最長 200 字\r
    @Size(max = 200, message = "其他地區市場佔有率說明不可超過200個中文字")\r
    private String shareratioDesc;\r
}\r
\`\`\`\r
\r
> **註：** 使用 \`@Size\` 或 \`@Length\` 註解，確保即使透過 Swagger 測試也無法寫入超長資料。\r
`,qx=`# 7. 上傳格式\r
\r
依檔案大小選擇 FormData 或 Base64。\r
\r
---\r
\r
## 上傳格式\r
\r
| 格式 | 說明 |\r
|---|---|\r
| **FormData** | 適合上傳檔案，支援多種資料類型。其他夾帶資料請後端包成一個 Object |\r
| **Base64** | 適合小型檔案，將檔案轉為字串格式 |\r
\r
---\r
\r
## FormData 使用方式\r
\r
### 有包物件\r
\`\`\`javascript\r
formData.set('req', new Blob([JSON.stringify(omit(modelValue, ['files']))], { type: 'application/json' }))\r
formData.set('file', modelValue.files[0])\r
\`\`\`\r
\r
### 沒包物件\r
\`\`\`javascript\r
formData.set('newsSubject', model.value.newsSubject)\r
formData.set('newsContent', model.value.newsContent)\r
formData.set('newsStartDate', useFormatDate(model.value.newsStartDate))\r
\`\`\`\r
`,Yx=`# 8. 下載格式\r
\r
支援回傳檔名或直接二進位串流。\r
\r
---\r
\r
## 回傳格式\r
\r
### Base64\r
**適合小型檔案下載**\r
\r
**優點：**\r
- 可以回傳其他資訊（如成功訊息）\r
\r
**缺點：**\r
- 檔案變大 33%\r
- 記憶體負擔大\r
\r
**回傳範例格式：**\r
\`\`\`json\r
{\r
  "statusCode": "200",\r
  "messageCode": null,\r
  "message": "執行成功",\r
  "data": {\r
    "exportFileData": "77u/LCwsLCzlpKfkuovntIDs...",\r
    "exportFileName": "大書紀資料明細資料表.csv"\r
  }\r
}\r
\`\`\`\r
\r
---\r
\r
### application/octet-stream\r
**適合大型檔案下載（需要額外處理 response header Content-Disposition 來取得檔名）**\r
\r
**優點：**\r
- 效能最佳\r
- 支援大檔案\r
- 下載體驗好\r
\r
**缺點：**\r
- 無法回傳其他訊息\r
\r
---\r
\r
## ODS（ODF）匯出\r
\r
報表需要 ODS 時，後端一律呼叫共用元件 \`ReportResponseEntityUtils.writeOds(fileName, workbook)\`，不要各自去接 LibreOffice。\r
\r
### 產生方式（兩段式）\r
\r
| 順序 | 方式 | 說明 |\r
| --- | --- | --- |\r
| 1 | LibreOffice 轉檔 | 先把 POI Workbook 寫成 xls/xlsx 暫存檔，再交由 LibreOffice 轉 ODS。版面與原 Excel 一致。 |\r
| 2 | 純 Java 產生（fallback） | LibreOffice 未安裝、轉檔失敗或結果為空時自動改走這條路（\`OdsUtils\`），API 不會因此失敗。 |\r
\r
目前伺服器的 LibreOffice 仍有問題，所以實務上大多會落到第 2 條路。\r
\r
### 純 Java 產生的差異（測試重點）\r
\r
| 項目 | 是否保留 |\r
| --- | --- |\r
| 多工作表、工作表名稱 | 保留 |\r
| 儲存格顯示文字（含公式計算後的結果、日期／數值顯示格式） | 保留 |\r
| 字型、顏色、框線等樣式 | 不保留 |\r
| 合併儲存格 | 不保留，合併會被拆成各自獨立的儲存格 |\r
| 第 1 列 | 一律當成標題列輸出 |\r
| 欄寬 | 不保留，由試算表軟體自動調整 |\r
| 圖片、圖表 | 不保留 |\r
\r
> 測 ODS 下載時，順便比對「舊系統既有報表」與「新產出的 ODS」版面是否相同，有落差回報後端。\r
\r
### 需要保留合併儲存格的報表\r
\r
由該報表自行組出 ODS bytes 再回傳，不要走 \`writeOds\`：\r
\r
\`\`\`java\r
byte[] odsBytes = OdsUtils.buildOdsBytesWithMerge(\r
        List.of(new OdsUtils.OdsSheetWithMerge(sheetName, headers, rows)));\r
return ReportResponseEntityUtils.writeOdsBytes(fileName + ".ods", odsBytes);\r
\`\`\`\r
\r
現行採用此做法的報表：PTM070B03、RFM032B24、薪資查詢報表、學生放棄確認表。\r
\r
### 前端取檔\r
\r
- Content-Type：\`application/vnd.oasis.opendocument.spreadsheet\`\r
- 以 octet-stream 串流回傳，檔名放在 \`Content-Disposition\`（經 URLEncoder 編碼，前端需 decode）\r
`,Kx=`# 9. 下拉選單 API\r
\r
因專案使用 Naive UI 元件庫，前端下拉選單必須使用 \`label\` 及 \`value\` 格式接收資料。\r
\r
---\r
\r
## 📌 重要規範\r
\r
後端提供的下拉選單 API 必須確保前端能直接轉換成 \`{ label, value }\` 格式，以符合 Naive UI 元件需求。\r
\r
---\r
\r
## 資料格式轉換\r
\r
### 後端 API 回傳範例\r
\`\`\`json\r
[\r
  { "dcName": "類別一", "depName": "部門一", "dcCode": "A001" },\r
  { "dcName": "類別二", "depName": "部門二", "dcCode": "A002" }\r
]\r
\`\`\`\r
\r
### 前端轉換處理\r
\`\`\`javascript\r
const originalOptions = computed(() =>\r
  map(toValue(data), item => ({\r
    value: item.dcCode,\r
    label: item.dcName,\r
    name: item.depName\r
  }))\r
)\r
\`\`\`\r
\r
### 最終使用格式\r
\`\`\`json\r
[\r
  { "value": "A001", "label": "類別一", "name": "部門一" },\r
  { "value": "A002", "label": "類別二", "name": "部門二" }\r
]\r
\`\`\`\r
\r
---\r
\r
## 實際應用範例\r
\r
### 下拉選單元件使用\r
\`\`\`vue\r
<template>\r
  <app-form-item :label="label" :path="path" :rule="rule">\r
    <app-form-select\r
      v-model:value="valueModel"\r
      :options="options"\r
      :loading="isFetching"\r
      @search="value => (searchText = value)"\r
    />\r
  </app-form-item>\r
</template>\r
\r
<script setup>\r
import { useCategoryCodeList } from '@/api/ptm/ptm031u11'\r
import { map } from 'lodash-es'\r
\r
// 呼叫 API 取得資料\r
const { isFetching, data } = useCategoryCodeList()\r
\r
// 轉換成 Naive UI 需要的 { value, label } 格式\r
const originalOptions = computed(() =>\r
  map(toValue(data), item => ({\r
    value: item.dcCode,\r
    label: item.dcName,\r
    name: item.depName\r
  }))\r
)\r
\r
const options = computed(() => [\r
  { label: '請選擇', value: '' },\r
  ...toValue(originalOptions)\r
])\r
<\/script>\r
\`\`\`\r
\r
---\r
\r
## 注意事項\r
- **value**：唯一識別值，用於提交表單\r
- **label**：顯示文字，呈現給使用者\r
- 後端 API 應提供清楚的欄位名稱，方便前端轉換\r
- 前端實作時，轉換邏輯統一使用 \`computed\` 處理，確保響應式更新\r
`,Qx=`\uFEFF# Graph API 寄信

> 文件版本：1.0.3
> 建立日期：2026-05-08
> 適用環境：local / SIT / UAT
> 狀態：✅ Phase 2 驗收通過，整理為共用寄信架構規範

---

## 目錄

1. 背景說明
2. 架構定位
3. 架構概覽
4. Azure AD App Registration 資訊
5. 環境設定
6. 核心元件說明
7. 寄信執行流程
8. 新增寄信功能實作順序
9. 開發規範
10. 常見錯誤與排除方式
11. 資安注意事項
12. 同事交接清單
13. 測試驗收記錄
14. 本機寄信測試注意事項

---

## 1. 背景說明

原本系統使用 SMTP（Gmail）寄信，改為透過 Microsoft Graph API 以 OAuth 2.0 Client Credentials 流程寄信。

| 項目 | 舊方式 | 新方式 |
|---|---|---|
| 協定 | SMTP / STARTTLS | HTTPS REST API |
| 驗證 | 帳號密碼 | OAuth 2.0 Client Credentials |
| 寄件人 | Gmail 帳號 | 企業信箱（指定 sender mailbox） |
| Admin Consent | 不需要 | ✅ 需要資訊部門核准 |
| 寄送方式 | SMTP 直接寄送 | Microsoft Graph API sendMail |

---

## 2. 架構定位

本功能是系統共用寄信架構，不是單一 API 專用。

後續只要系統有新的寄信功能，原則上都應沿用既有流程：

\`\`\`text
業務 API / Service
    ↓
建立 MailInfo
    ↓
透過 DatabaseMailService / MailProcess 寫入 MAIL_INFO
    ↓
排程 ScheduledMailSendJob 掃描待寄信資料
    ↓
GraphMailSender 透過 Microsoft Graph API 寄出
\`\`\`

### 核心原則

- 業務 Service **不應**直接呼叫 Microsoft Graph API
- 業務 Service **不應**自行取得 OAuth access token
- 業務 Service 只負責建立 \`MailInfo\` 並寫入 \`MAIL_INFO\`
- 實際寄送統一由 \`ScheduledMailSendJob\` 與 \`GraphMailSender\` 處理
- OAuth Token 統一由 \`GraphTokenService\` 管理與快取
- Graph API Request Body 統一由 \`GraphMailRequestFactory\` 轉換
- 寄信成功後統一更新 \`MAIL_INFO.status = 'Y'\`

---

## 3. 架構概覽

### 寄信流程

\`\`\`text
業務功能呼叫（例如 sendMailToUnit，或其他需要寄信的 Service）
        ↓
建立 MailInfo
        ↓
DatabaseMailService.apply() / applyReturnId()
        ↓ 寫入 DB
MAIL_INFO (status='N')
        ↓ 排程每 20 秒掃描
ScheduledMailSendJob.produceQueue()
        ↓ 排程每 30 秒消費
ScheduledMailSendJob.consumeQueue()
        ↓
GraphMailSender.send(mailInfo)
        ↓
GraphTokenService.getAccessToken()   → OAuth Token（含快取）
        ↓
GraphMailRequestFactory.build()      → MailInfo 轉 Graph API JSON
        ↓
POST https://graph.microsoft.com/v1.0/users/{sender}/sendMail
        ↓
MAIL_INFO status 更新為 'Y' ✅
\`\`\`

### 元件職責一覽

| 元件 | 位置 | 職責 |
|---|---|---|
| \`GraphMailProperties\` | \`config/properties/\` | 讀取 yml 設定，例如 tenant-id、client-id、client-secret、sender-address |
| \`GraphTokenService\` | \`service/sys/mail/\` | 取得 OAuth access token，含快取與到期前 60 秒更新機制 |
| \`GraphMailRequestFactory\` | \`service/sys/mail/\` | 將 MailInfo 轉換成 Graph API sendMail request body |
| \`GraphMailSender\` | \`service/sys/mail/\` | 呼叫 Graph API 實際寄信，含 401 自動重試 |
| \`ScheduledMailSendJob\` | \`schedule/\` | 批次排程：生產者每 20 秒掃描，消費者每 30 秒寄送 |
| \`DatabaseMailService\` | \`service/sys/\` | 業務層寄信入口，寫入 MAIL_INFO |
| \`MailProcess\` | \`service/sys/\` | 封裝信件模板、資料填充與 MailInfo 建立流程 |

---

## 4. Azure AD App Registration 資訊

> ⚠️ \`client-secret\` 為機敏資訊，請勿 commit 進 Git，請透過安全管道取得。

| 項目 | 值 | 機敏程度 |
|---|---|---|
| Tenant ID | \`54aa2fea-ecb3-4c71-80b3-de9a356e77c1\` | 🟡 內部資訊 |
| Client ID | \`b6df8fec-2fdb-4d95-8838-7f459ebbc891\` | 🟡 內部資訊 |
| Client Secret | 請向負責人或資訊部門取得「用戶端認證」 | 🔴 機敏，勿外洩 |
| Sender Address | 依環境設定；本機測試必須使用已獲 Exchange Online 外寄授權的個人公司信箱 | 🟡 內部資訊 |
| OAuth Scope | \`https://graph.microsoft.com/.default\` | 🟡 內部資訊 |
| Required Permission | \`Mail.Send\` | 🟡 內部資訊 |
| Admin Consent 狀態 | ✅ Mail.Send 已核准 | — |

---

## 5. 環境設定

### 本機開發（application-local.yml）

> ⚠️ \`application-local.yml\` 已加入 \`.gitignore\`，不會被 commit。

\`\`\`yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: 請向負責人取得後填入此處
    # NCATEST@iisigroup.com 目前未獲 Exchange Online 外寄寄件者授權。
    # 本機寄信測試請改成自己的、已授權公司信箱；收件者仍可使用既有測試帳號。
    sender-address: your.name@iisigroup.com
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: true   # 開啟後排程才會自動寄信，測試完建議改回 false
\`\`\`

### SIT / UAT 環境（application-sit.yml）

\`\`\`yaml
microsoft:
  graph:
    enabled: true
    tenant-id: 54aa2fea-ecb3-4c71-80b3-de9a356e77c1
    client-id: b6df8fec-2fdb-4d95-8838-7f459ebbc891
    client-secret: \${GRAPH_CLIENT_SECRET}   # 環境變數注入，不可明文寫入
    # 必須使用已獲 Exchange Online 授權的外寄信箱
    sender-address: \${GRAPH_SENDER_ADDRESS}
    scope: https://graph.microsoft.com/.default

scheduling:
  mail:
    enabled: false   # SIT 預設關閉，避免誤發信
\`\`\`

### 排程開關說明

| \`scheduling.mail.enabled\` | 效果 |
|---|---|
| \`true\` | 排程啟動，自動掃描 \`MAIL_INFO\` 並寄信 |
| \`false\` | 排程不啟動，信件會寫入 DB 但不會寄出 |

---

## 6. 核心元件說明

### GraphTokenService

Token Endpoint：\`https://login.microsoftonline.com/{tenantId}/oauth2/v2.0/token\`

- Token 到期前 60 秒自動重新取得
- 收到 401 時呼叫 \`clearCache()\` 清除快取後重試一次
- 不可將 access token 完整寫入 log

### GraphMailRequestFactory

| \`MailInfo\` 欄位 | Graph API 對應 |
|---|---|
| \`mailSubject\` | \`message.subject\` |
| \`mailContent\` | \`message.body.content\`，自動判斷 HTML / Text |
| \`mailTo\` | \`message.toRecipients\`，逗號分隔，自動去重 |
| \`mailCc\` | \`message.ccRecipients\` |
| \`mailBcc\` | \`message.bccRecipients\` |
| 附件（DB） | \`message.attachments\`，base64 編碼 |

### GraphMailSender

\`\`\`text
取得 token → 呼叫 Graph API
    → 若 401 → clearCache() → 重新取 token → 重試一次
    → 若成功 → 回傳成功
    → 若其他錯誤 → 拋出 GraphMailException
\`\`\`

---

## 7. 寄信執行流程

### Step 1：業務層寫入 MAIL_INFO

\`\`\`java
// 方式 A：直接 apply，不需要 ID
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailSubject("信件主旨");
mailInfo.setMailContent("<p>信件內容</p>");
databaseMailService.apply(mailInfo);

// 方式 B：applyReturnId，需要後續處理附件時使用
databaseMailService.applyReturnId(mailInfo);
// mailInfo.getId() 已有值，可用來新增附件記錄
\`\`\`

### Step 2：排程自動寄信

| 排程 | 職責 |
|---|---|
| 每 20 秒 | \`produceQueue()\` 從 DB 撈 \`status='N'\` 的信放入 Queue |
| 每 30 秒 | \`consumeQueue()\` 從 Queue 取信，呼叫 \`GraphMailSender.send()\` |
| 寄送成功 | 更新 \`MAIL_INFO.status = 'Y'\` |
| 寄送失敗 | 記錄 log，不影響其他信件繼續處理 |

### Step 3：確認寄出

\`\`\`sql
SELECT ID, MAIL_TO, MAIL_CC, MAIL_SUBJECT, STATUS, CREATION_DATE, MODIFY_DATE
FROM MAIL_INFO
ORDER BY CREATION_DATE DESC;
-- STATUS: N=待寄出 / Y=已寄出 / X=已作廢
\`\`\`

---

## 8. 新增寄信功能實作順序

**Step 1** — 確認寄信觸發點（哪個業務事件需要寄信）

**Step 2** — 確認收件人來源（TO / CC / BCC 從哪裡取得）；查無收件人時直接回傳訊息，不寫入 MAIL_INFO

**Step 3** — 建立 MailInfo；\`mailTo\` 必填；CC 不可拆成沒有 TO 的獨立筆

**Step 4** — 寫入 MAIL_INFO
\`\`\`java
databaseMailService.apply(mailInfo);           // 不需要 ID
databaseMailService.applyReturnId(mailInfo);   // 需要 ID（例如附件）
mailProcess.execute("TemplateName", dataMap);  // 使用信件模板
\`\`\`

**Step 5** — 由排程自動寄出，業務功能不需直接呼叫 \`GraphMailSender\`

**Step 6** — 驗證：MAIL_TO 正確、CC 未被拆成空 TO 資料、STATUS 由 N → Y、實際信箱收到信

---

## 9. 開發規範

### 正確的 MailInfo 設定方式

\`\`\`java
// ✅ 正確：一筆 MailInfo，TO 和 CC 寫在同一筆
MailInfo mailInfo = new MailInfo();
mailInfo.setMailTo("receiver@example.com");
mailInfo.setMailCc("cc@example.com");
databaseMailService.setCommonMailInfo(mailInfo);
databaseMailService.apply(mailInfo);
\`\`\`

\`\`\`java
// ❌ 錯誤：將 CC 拆成獨立一筆，且沒有 mailTo
// → mailTo=null 的那筆永遠寄不出去，排程無限重試！
MailInfo ccMailInfo = new MailInfo();
ccMailInfo.setMailCc("cc@example.com");
databaseMailService.apply(ccMailInfo);
\`\`\`

### 防呆規範（必須加入）

\`\`\`java
// 防呆1：查無收件對象時，提早回傳
if (receiverList == null || receiverList.isEmpty()) {
    log.warn("查無符合條件的收件者，不寄出任何信件");
    return ReturnMessage.getFailedInstance("查無符合條件的收件者，未寄出任何信件", null);
}

// 防呆2：信箱為空時跳過
for (Receiver receiver : receiverList) {
    if (StringUtils.isBlank(receiver.getEmail())) {
        log.warn("帳號={} 信箱為空，跳過寄信", receiver.getAccount());
        continue;
    }
}
\`\`\`

---

## 10. 常見錯誤與排除方式

### Graph API 錯誤碼

| HTTP 狀態碼 | 常見原因 | 建議處理 |
|---|---|---|
| \`400 Bad Request\` | request body 格式錯誤、收件人格式錯誤、附件 base64 錯誤 | 檢查 GraphMailRequestFactory 產出的 JSON、收件人 email、附件內容 |
| \`401 Unauthorized\` | access token 遺失 / 過期 / 無效，或 client-secret 錯誤 | 確認 tenant-id / client-id / client-secret；系統自動重試一次 |
| \`403 Forbidden\` | Mail.Send／Admin Consent 不足，或 sender mailbox 未獲 Exchange Online 外寄授權 | 同時確認 Azure App Registration 權限與 sender mailbox 的 Exchange 外寄授權 |
| \`404 Not Found\` | sender mailbox 不存在或 sender address 錯誤 | 確認 sender-address 是否為可寄信的 Exchange mailbox |
| \`429 Too Many Requests\` | 短時間內請求過多，Graph API 節流 | 依 Retry-After 秒數等待後重試 |
| \`500 / 502 / 503 / 504\` | Microsoft Graph 或 Microsoft 365 服務端暫時異常 | retry with backoff；持續發生請資訊部門確認服務狀態 |

### 排程無限重試（mailTo=null）

\`\`\`sql
-- 查看待寄出記錄
SELECT ID, MAIL_TO, MAIL_CC, STATUS, CREATION_DATE
FROM MAIL_INFO
WHERE STATUS = 'N'
ORDER BY CREATION_DATE DESC;

-- 確認是異常資料後，將其作廢（建議加日期條件）
UPDATE MAIL_INFO
SET STATUS = 'X', MODIFY_USER = 'MANUAL_CANCEL', MODIFY_DATE = GETDATE()
WHERE STATUS = 'N'
  AND CREATION_DATE >= '2026-05-07';
\`\`\`

---

## 11. 資安注意事項

| 項目 | 規範 |
|---|---|
| \`client-secret\` | 🔴 絕對不可 commit 進 Git |
| \`access_token\` | 🔴 不可完整寫入 log |
| \`application-local.yml\` | 已加入 \`.gitignore\`，本機設定不會上傳 |
| \`GraphManualIntegrationTest.java\` | 若含明文 secret，應加入 \`.gitignore\` |
| SIT / UAT 的 secret | 透過環境變數 \`\${GRAPH_CLIENT_SECRET}\` 注入，由 IT / DevOps 設定 |
| 完整憑證清單 | 參閱 **azure_graph_mail_server_credentials_inventory_full.md**，向 **PG Leader 或 PM** 取得 |

---

## 12. 同事交接清單

| 資訊 | 說明 | 建議窗口 |
|---|---|---|
| Client Secret / 用戶端認證 | 實際填入 client-secret 的值 | 負責人、資訊部門 |
| SIT / UAT \`GRAPH_CLIENT_SECRET\` 設定 | 部署環境的 secret 注入 | IT / DevOps |
| Mail.Send Admin Consent | 確認 Azure 權限已核准 | 資訊部門 / Azure AD 管理者 |
| Sender mailbox 狀態 | 確認寄件信箱存在且可使用 | 資訊部門 / Exchange 管理者 |
| 排程開關 | 確認各環境是否允許自動寄信 | PM / SA / IT / DevOps |

---

## 13. 測試驗收記錄

| 階段 | 測試類別 | 日期 | 結果 |
|---|---|---|---|
| Phase 1：取得 OAuth Token | \`GraphTokenServiceCacheTest\`（2 tests） | 2026-05-06 | ✅ Token 取得成功，快取機制正常 |
| Phase 2：完整寄信測試 | \`GraphManualIntegrationTest\` | 2026-05-07 | ✅ 202 Accepted，收件信箱確認收到 |
| 整合測試：sendMailToUnit | \`POST /QSP042b02/sendMailToUnit\` | 2026-05-07 | ✅ 寄出完成，CC Bug 已修正，防呆已新增 |

> \`sendMailToUnit\` 是本次驗收使用的業務 API 範例，後續其他寄信功能仍應沿用相同的共用流程。

---

## 14. 本機寄信測試注意事項

### 14.1 寄件者與收件者

目前 \`NCATEST@iisigroup.com\` 在 Exchange Online **沒有被授權作為外寄寄件者**。若將它設為
\`microsoft.graph.sender-address\`，即使 OAuth Token 與 Graph API \`Mail.Send\` 權限正常，
Exchange Online 仍可能阻擋寄送。

本機測試建議：

- **寄件者（sender-address）**：改成測試人員自己的、已獲外寄授權的公司信箱。
- **收件者（MAIL_TO）**：可以維持原本的測試帳號／測試信箱。
- 測試完成後，還原個人本機設定；不可把個人信箱或本機 yml 設定 commit 進 Git。
- 若收到 \`403 Forbidden\`，除了檢查 App Registration 的 \`Mail.Send\`，還要確認 sender mailbox
  是否被 Exchange Online 授權作為外寄寄件者。

### 14.2 暫時排除既有待寄信件

為避免測試自己的寄信功能時，排程同時寄出其他既有 \`STATUS='N'\` 信件，可以先記錄所有 ID，
再將它們暫時標記為 \`X\`。\`X\` 代表「作廢／排除」，**不是已發送**；已發送狀態是 \`Y\`。

> ⚠️ 必須先保存步驟 1 的 \`CNT\` 與 \`ID_LIST\`，確認保存成功後才能執行步驟 2。
> 所有步驟必須在同一個測試環境資料庫執行；測試結束後只還原原先保存的 ID。

\`\`\`sql
-- 步驟 1：撈出並保存既有待寄資料的筆數與 ID 清單
SELECT COUNT(*) AS CNT,
       STRING_AGG(CAST(ID AS VARCHAR(MAX)), ',') AS ID_LIST
FROM dbo.MAIL_INFO
WHERE STATUS = 'N';

-- 步驟 2：確認 CNT 與 ID_LIST 已複製存檔後，暫時排除既有待寄資料
DECLARE @EXPECTED_COUNT INT = 貼上步驟 1 的 CNT;
BEGIN TRANSACTION;

UPDATE dbo.MAIL_INFO
SET STATUS = 'X'
WHERE STATUS = 'N';

IF @@ROWCOUNT <> @EXPECTED_COUNT
BEGIN
    ROLLBACK;
    THROW 50001, '排除筆數與步驟 1 的 CNT 不一致，已回滾', 1;
END;

COMMIT;

-- 步驟 3：測試結束後，只還原步驟 1 保存的 ID
DECLARE @EXPECTED_COUNT INT = 貼上步驟 1 的 CNT;
BEGIN TRANSACTION;

UPDATE dbo.MAIL_INFO
SET STATUS = 'N'
WHERE ID IN (貼上步驟 1 的 ID_LIST)
  AND STATUS = 'X';

IF @@ROWCOUNT <> @EXPECTED_COUNT
BEGIN
    ROLLBACK;
    THROW 50002, '還原筆數與步驟 1 的 CNT 不一致，已回滾', 1;
END;

COMMIT;
\`\`\`

若 \`UPDATED_COUNT\`／\`RESTORED_COUNT\` 與原 \`CNT\` 不一致，應先 \`ROLLBACK\` 並重新確認環境、ID清單
與資料狀態，不可直接擴大 UPDATE 條件。

---

> 💡 **一句話總結：** 後續任何需要寄信的業務功能，建立 \`MailInfo\` 並寫入 \`MAIL_INFO\`，由排程與 \`GraphMailSender\` 統一透過 Microsoft Graph API 寄送即可，不需在各業務 API 中自行呼叫 Graph API 或取得 OAuth Token。
`,Zx=`# 頁面權限\r
\r
> 建立日期：2026-05-08\r
> 適用：所有後端工程師，包含接手新功能開發者\r
\r
---\r
\r
## 目錄\r
\r
1. 整體架構\r
2. 核心資料表\r
3. 角色（Role）系統\r
4. URI 比對規則（normalization）\r
5. 快取機制\r
6. 新增頁面權限 SOP（Step 1～5）\r
7. VISIBILITY vs RDSYS_PERMISSION_USER 使用時機\r
8. 前端權限與頁面路由對應機制\r
9. 常見錯誤排查\r
10. 異動驗證 Checklist\r
11. 主要程式碼位置速查\r
\r
---\r
\r
## 1. 整體架構\r
\r
\`\`\`text\r
HTTP 請求\r
    │\r
    ▼\r
[1] JwtTokenFilter              → 驗證 JWT Token，解析使用者身份，注入 SecurityContext\r
    │\r
    ▼\r
[2] Spring Security             → 確認使用者是否已登入（hasAnyAuthority 規則）\r
    │\r
    ▼\r
[3] WebUriAuthorizationFilter   → 比對請求 URI 與使用者角色擁有的 FUNC_CODE，決定是否放行\r
    │\r
    ▼\r
[4] Controller / Service        → 業務邏輯內部可再依角色細分行為（如 isRdssOffice()）\r
\`\`\`\r
\r
---\r
\r
## 2. 核心資料表\r
\r
### RDSYS_PERMISSION（功能頁面主檔）\r
\r
Entity：\`moi.rdss.platform.entity.RdsysPermission\`\r
\r
| 欄位 | 型別 | 說明 |\r
|---|---|---|\r
| \`SN\` | DECIMAL(10) | 主鍵，流水號 |\r
| \`FUNC_CODE\` | VARCHAR(15) | 功能代碼（如 QSP042B02）— 核心欄位 |\r
| \`ACTION_PATH\` | NVARCHAR(60) | 功能路徑，對應前端頁面路由。依系統慣例填入 FUNC_CODE 的值，確保選單連結路徑一致 |\r
| \`NAME_TEXT\` | NVARCHAR(80) | 選單顯示名稱 |\r
| \`PARENT_SN\` | DECIMAL(10) | 上層選單的 SN（NULL 表示根節點） |\r
| \`ITEM_ORDER\` | DECIMAL(6) | 選單排序 |\r
| \`VISIBILITY\` | DECIMAL(1) | 全域顯示開關：1 = 開放，0 = 全域關閉 |\r
| \`LINK_DISABLE\` | DECIMAL(1) | 連結是否停用 |\r
| \`CERT_USAGE\` | DECIMAL(2) | 是否啟用憑證：0=否，1=是，-1=強制 |\r
\r
### RDSYS_PERMISSION_USER（角色與功能對應表）\r
\r
Entity：\`moi.rdss.platform.entity.RdsysPermissionUser\`\r
\r
> ⚠️ 重要：\r
> - \`ACCOUNT\` 欄位儲存字串 \`'NULL'\`（4個字元），不是 SQL NULL，代表「適用整個 USER_TYPE」\r
> - \`S_TIME_ZONE\` / \`E_TIME_ZONE\` 為 NOT NULL 欄位，無時區限制時必須填字串 \`'NULL'\`\r
\r
| 欄位 | 說明 |\r
|---|---|\r
| \`PERMISSION_SN\` | 對應 RDSYS_PERMISSION.SN |\r
| \`USER_TYPE\` | 角色代碼，對應 Role enum 的 accType |\r
| \`ACCOUNT\` | 字串 \`'NULL'\` = 角色預設權限；填實際帳號 = 個人特殊權限 |\r
| \`START_TIME\` / \`STOP_TIME\` | 權限起迄時間（可為 SQL NULL） |\r
| \`S_TIME_ZONE\` / \`E_TIME_ZONE\` | NOT NULL 欄位，無時區限制時填字串 \`'NULL'\` |\r
\r
---\r
\r
## 3. 角色（Role）系統\r
\r
位置：\`moi.rdss.platform.enumeration.Role\`\r
\r
### 主要角色（RoleType = T）\r
\r
| accType | Role 名稱 | 說明 |\r
|---|---|---|\r
| 2 | ROLE_NCA | 研發替代役管理帳號 |\r
| 3 | ROLE_NCA_DIRECTOR | 役政司主管帳號 |\r
| 4 | ROLE_COMPANY | 用人單位 |\r
| 11 | ROLE_STUDENT | 學生 |\r
| 14 | ROLE_COMPANY_ASKING | 員額申請單位 |\r
| 17 | ROLE_RDSS_OFFICE | 專案辦公室 |\r
| 18 | ROLE_RDSSMAN | 研發替代役男 |\r
| 21 | ROLE_RDSS_OFFICE_PARTNER | 合作單位 |\r
| 23 | ROLE_NCA_NORMAL | 內政部一般帳號 |\r
\r
### 功能權限角色（RoleType = F）\r
\r
| accType | Role 名稱 | 說明 |\r
|---|---|---|\r
| 29 | ROLE_RDSS_OFFICE_SYSOP | 專案辦公室系統管理人員 |\r
| 30 | ROLE_RDSS_OFFICE_ADMIN | 專案辦公室管理人員 |\r
| 60 | ROLE_REC_UNIT | 收件執行單位 |\r
| 61 | ROLE_EXAM_HANDLE_UNIT | 審查作業執行單位 |\r
| 90 | ROLE_RFM_ADMIN | 基金管理負責人 |\r
| 181 | ROLE_QSP_ADMIN | 帳號啟用權限 |\r
\r
---\r
\r
## 4. URI 比對規則（normalization）

\`WebUriAuthorizationFilter\` 將請求 URI 正規化後，與 FUNC_CODE 前 6 碼做 \`startsWith\` 比對。

> ⚠️ 關鍵：只取 FUNC_CODE 前 6 碼，代表同模組下所有子頁面共用模組前綴授權。
>
> ⚠️ 個人權限限制：目前 \`RdsysPermissionRepository.selectFunctionCodeByRole\` 只依
> \`RDSYS_PERMISSION_USER.USER_TYPE\` 查 FUNC_CODE，沒有依 \`ACCOUNT\` 過濾。
> 個人 \`ACCOUNT\` 權限可以控制 \`/RDP022A01/permission\` 的 menu，但同一筆資料的
> FUNC_CODE 可能被相同 USER_TYPE 的其他帳號用於 URI 放行。需要逐帳號 API 隔離時，
> 必須同步改為帳號感知的授權查詢與快取鍵，不能只調整 DB。
\r
\`\`\`java\r
// 例：/adm_011b04/showPermissions\r
// 1. 去除開頭 '/'   → adm_011b04/showPermissions\r
// 2. 轉大寫         → ADM_011B04/SHOWPERMISSIONS\r
// 3. 去除第 4 位 '_' → ADM011B04/SHOWPERMISSIONS\r
// 比對 FUNC_CODE 前 6 碼：ADM011 → startsWith 符合 ✅\r
\r
private String normalization(String str) {\r
    StringBuilder sb = new StringBuilder(StringUtils.upperCase(str));\r
    if (sb.length() > 1 && sb.charAt(0) == '/') sb.deleteCharAt(0);\r
    if (sb.length() > 3 && sb.charAt(3) == '_') sb.deleteCharAt(3);\r
    return sb.toString();\r
}\r
\`\`\`\r
\r
---\r
\r
## 5. 快取機制\r
\r
> ⚠️ \`functionCodesCacheStore\` 過期時間為 **7 天**，登出登入不會清除。\r
> 修改 \`RDSYS_PERMISSION_USER\` 後，必須重啟服務（Jenkins 重新部署）才會生效。\r
\r
| 快取 | Key | Value | 用途 |\r
|---|---|---|---|\r
| \`authenticationCacheStore\` | account | Authentication | 快取使用者 Authentication |\r
| \`functionCodesCacheStore\` | role (accType string) | List\\<String\\> | 快取每個 Role 對應的 FUNC_CODE 前 6 碼 |\r
\r
---\r
\r
## 6. 新增頁面權限 SOP\r
\r
### Step 1　確認 FUNC_CODE 命名\r
\r
格式：\`{模組前綴 3碼}{功能群組 3碼}{頁面代碼 3碼}\`，例如 \`QSP042B03\`\r
\r
| 前綴 | 模組說明 |\r
|---|---|\r
| RDP | 一般公開頁面 |\r
| ADM | 行政管理 |\r
| PNR | 員額申請／審查 |\r
| QSP | 甄選作業 |\r
| REM | 役男管理 |\r
| MTM | 管訓作業 |\r
| PTM | 役男薪資 |\r
| AEP | 績效評核 |\r
| RFM | 基金管理 |\r
\r
情境 B — 查詢未使用群組代碼：\r
\r
\`\`\`sql\r
SELECT DISTINCT SUBSTRING(FUNC_CODE, 1, 6) AS GROUP_CODE\r
FROM RDSYS_PERMISSION\r
WHERE FUNC_CODE LIKE 'QSP%'\r
ORDER BY GROUP_CODE;\r
\`\`\`\r
\r
### Step 2　在 RDSYS_PERMISSION 新增頁面資料\r
\r
> ⚠️ \`ACTION_PATH\` 依系統慣例填入 FUNC_CODE 的值，確保選單連結指向正確路徑。\r
> **注意**：\`normalization\` 比對的對象是實際 HTTP 請求 URI（即 Controller 的 \`@RequestMapping\` 路徑），不是 \`ACTION_PATH\` 欄位本身。導致 403 的直接原因是 Controller 路徑未對應 FUNC_CODE，而非 ACTION_PATH 設錯。\r
\r
\`\`\`sql\r
SELECT MAX(SN) FROM RDSYS_PERMISSION;\r
SELECT * FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03';\r
\r
INSERT INTO RDSYS_PERMISSION (\r
    SN, FUNC_CODE, ACTION_PATH, NAME_TEXT, DESCRIPTION,\r
    PARENT_SN, ITEM_ORDER, VISIBILITY, LINK_DISABLE, LINK_PARAMETER, CERT_USAGE\r
) VALUES (\r
    999,\r
    'QSP042B03',\r
    'QSP042B03',  -- ★ ACTION_PATH = FUNC_CODE\r
    '新頁面名稱', '功能說明文字',\r
    (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B02'),\r
    10, 1, 0, NULL, 0\r
);\r
\`\`\`\r
\r
### Step 3　在 RDSYS_PERMISSION_USER 新增角色權限\r
\r
\`\`\`sql\r
SELECT * FROM RDSYS_PERMISSION_USER\r
WHERE PERMISSION_SN = (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03')\r
  AND USER_TYPE = 17;\r
\r
INSERT INTO RDSYS_PERMISSION_USER (\r
    PERMISSION_SN, USER_TYPE, ACCOUNT, START_TIME, STOP_TIME, S_TIME_ZONE, E_TIME_ZONE\r
) VALUES (\r
    (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03'),\r
    17, 'NULL', NULL, NULL, 'NULL', 'NULL'\r
);\r
\`\`\`\r
\r
### Step 4　建立 Controller\r
\r
\`\`\`java\r
// normalization('/QSP042B03/queryList') → 'QSP042B03/QUERYLIST'\r
// findFunctionCodesByRole 回傳前 6 碼：'QSP042'\r
// startsWith 符合 ✅\r
\r
@RestController\r
@RequestMapping("/QSP042B03")\r
public class Qsp042b03Controller {\r
    @PostMapping("/queryList")\r
    public ResponseEntity<?> queryList(...) { ... }\r
}\r
\`\`\`\r
\r
### Step 5　Service 內的角色細分（選用）\r
\r
\`\`\`java\r
AccountDetails accountDetails = (AccountDetails) authentication.getPrincipal();\r
\r
if (accountDetails.isRdssOffice()) {\r
    // 專案辦公室：可看全部資料\r
} else if (accountDetails.isNCAAccount()) {\r
    // 役政司：只能看自己管轄的資料\r
}\r
\`\`\`\r
\r
---\r
\r
## 7. VISIBILITY vs RDSYS_PERMISSION_USER 使用時機\r
\r
| 需求 | 應調整的位置 |\r
|---|---|\r
| 讓某個角色看不到某頁面 | 刪除 RDSYS_PERMISSION_USER 中該角色的對應資料 |\r
| 讓某個特定帳號才能看到 | 在 RDSYS_PERMISSION_USER 中加入指定 ACCOUNT |\r
| 讓所有角色都看不到（暫停功能） | 將 RDSYS_PERMISSION.VISIBILITY 設為 0 |\r
| 恢復頁面可見 | 將 RDSYS_PERMISSION.VISIBILITY 設為 1，並確認 RDSYS_PERMISSION_USER 有對應資料 |\r
\r
> 🔴 不要用 \`VISIBILITY = 0\` 調整單一角色權限，這是全域關閉。\r
\r
---\r
\r
## 8. 前端權限與頁面路由對應機制\r
\r
### 整體流程\r
\r
\`\`\`text\r
登入\r
 ↓\r
後端 /RDP022A01/permission 回傳 permissions 陣列\r
 ↓\r
前端將每筆 actionPath 轉換成 href（存入 Local Storage）\r
 ↓\r
使用者進入任一頁面\r
 ↓\r
前端比對 href === 當前路由路徑\r
 ↓\r
相符 → 有權限；不符 → 顯示 403\r
\`\`\`\r
\r
### 前端轉換邏輯（src/store/auth.js）\r
\r
\`\`\`js\r
href: permission.actionPath?.replace('Action.do', '')\r
\r
hasPermission = path =>\r
  flattenMenus.some(({ href }) => href === path)\r
\`\`\`\r
\r
### 前端路由產生規則（unplugin-vue-router File-based Routing）\r
\r
| 前端檔案位置 | 自動產生路由 |\r
|---|---|\r
| \`src/private/std/studentResumeQuery/index.vue\` | \`/std/studentResumeQuery\` |\r
| \`src/private/work/personQuery/index.vue\` | \`/work/personQuery\` |\r
| \`src/private/test/tst001a01/index.vue\` | \`/test/tst001a01\` |\r
\r
### 後端 actionPath 填寫規則\r
\r
格式：\`/{模組前綴}/{頁面名稱}Action.do\`，replace 後必須與前端路由**完全相符**。\r
\r
| 後端 actionPath | replace 後 | 對應前端檔案 |\r
|---|---|---|\r
| \`/std/studentResumeQueryAction.do\` | \`/std/studentResumeQuery\` | \`src/private/std/studentResumeQuery/index.vue\` |\r
| \`/work/personQueryAction.do\` | \`/work/personQuery\` | \`src/private/work/personQuery/index.vue\` |\r
| \`/test/tst001a01Action.do\` | \`/test/tst001a01\` | \`src/private/test/tst001a01/index.vue\` |\r
\r
### 現有模組前綴對照表\r
\r
| 模組前綴 | 對應功能 |\r
|---|---|\r
| \`/admin\` | 系統管理 |\r
| \`/aep\` | 管考獎懲 |\r
| \`/auth\` | 帳號驗證 |\r
| \`/info\` | 資訊需求 |\r
| \`/mtm\` | 受訓管理 |\r
| \`/pnask\` | 員額申請 |\r
| \`/pnexam\` | 員額審查 |\r
| \`/qsp\` | 甄選作業 |\r
| \`/rem\` | 成效管理 |\r
| \`/rfm\` | 基金管理 |\r
| \`/std\` | 甄選 / 學生 |\r
| \`/work\` | 役男管理 |\r
| \`/test\` | 測試用（需同步更新 authPaths） |\r
\r
### actionPath 常見錯誤\r
\r
\`\`\`text\r
// ❌ 後端 actionPath = "TST001A01"\r
"TST001A01" → replace 後仍為 "TST001A01"（無 / 開頭）→ 永遠比對不到 → 403\r
\r
// ✅ 後端 actionPath = "/test/tst001a01Action.do"\r
"/test/tst001a01Action.do" → replace 後為 "/test/tst001a01" → 符合前端路由 → 通過\r
\`\`\`\r
\r
修正後同步事項：\r
1. 後端將 \`actionPath\` 改為正確格式\r
2. 前端建立對應路由檔案\r
3. 前端 \`src/router/index.js\` 的 \`authPaths\` 加入新模組前綴\r
4. **必須重新登入**以刷新 Local Storage 中的 permissions 快取\r
\r
---\r
\r
## 9. 常見錯誤排查\r
\r
| 症狀 | 可能原因 | 解法 |\r
|---|---|---|\r
| DB 設定正確但仍 403 | Controller \`@RequestMapping\` 路徑未對應 FUNC_CODE | normalization 比對的是請求 URI，Controller 路徑必須使 \`normalization(URI).startsWith(funcCode前6碼)\` 成立。ACTION_PATH 依慣例填 FUNC_CODE 值是為了確保選單連結一致，兩者需同步維護 |\r
| DB 設定正確但仍 403 | 快取尚未清除 | functionCodesCacheStore 過期 7 天，需重啟服務 |\r
| DB 設定正確但仍 403 | ACCOUNT 填的是 SQL NULL | 應填字串 \`'NULL'\`（4個字元） |\r
| DB 設定正確但仍 403 | VISIBILITY = 0 | 全域關閉，將 VISIBILITY 改回 1 |\r
| Menu Tree 沒有顯示新頁面 | VISIBILITY 或 RDSYS_PERMISSION_USER 未設定 | 確認 VISIBILITY = 1 且有對應角色資料 |\r
| 前端一直 403 | actionPath 無 \`/\` 開頭 | 後端改為 \`/模組/頁面Action.do\` 格式 |\r
| 前端一直 403 | 新模組未加入 authPaths | 前端 \`src/router/index.js\` 補上新模組前綴 |\r
| 後端改了但前端還是舊權限 | permissions 快取於 Local Storage | 必須重新登入 |
| 個人 menu 已隱藏，但同類型其他帳號仍可呼叫 API | FUNC_CODE 授權只依 USER_TYPE，未依 ACCOUNT 過濾 | 修改後端為帳號感知授權，並調整 functionCodes 快取 key |
\r
---\r
\r
## 10. 異動驗證 Checklist\r
\r
\`\`\`sql\r
SELECT * FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03';\r
SELECT * FROM RDSYS_PERMISSION_USER\r
WHERE PERMISSION_SN = (SELECT SN FROM RDSYS_PERMISSION WHERE FUNC_CODE = 'QSP042B03');\r
\`\`\`\r
\r
- 以目標角色帳號登入，確認 Menu Tree 是否顯示新頁面\r
- 直接輸入完整 URL，確認是否可進入（不被 403 擋住）\r
- 以無授權角色嘗試存取，確認是否回傳 403
- 若使用個人 \`ACCOUNT\` 權限，必須再用同 USER_TYPE 的另一帳號直接呼叫 API，確認不會因角色 FUNC_CODE 外溢而被放行
- 確認快取是否需要清除（測試環境若未重啟，可能使用舊快取）\r
- 若有新增 API endpoint，確認 normalization 規則可正確比對\r
- 前端確認 \`actionPath\` 格式、\`authPaths\`、路由檔案三者一致\r
- 重新登入刷新 permissions 快取後再次驗證\r
\r
---\r
\r
## 11. 主要程式碼位置速查\r
\r
| 元件 | 路徑 |\r
|---|---|\r
| 安全設定入口 | \`config/SecurityConfig.java\` |\r
| JWT 解析 Filter | \`config/filter/JwtTokenFilter.java\` |\r
| URI 權限 Filter | \`config/filter/WebUriAuthorizationFilter.java\` |\r
| 授權核心 Service | \`service/AuthorizationService.java\` |\r
| 使用者載入 Service | \`service/AuthenticationService.java\` |\r
| 使用者詳細資料模型 | \`model/AccountDetails.java\` |\r
| 角色 Enum | \`enumeration/Role.java\` |\r
| 免驗證路徑清單 | \`Constants.java\` |\r
| 頁面主檔 Entity | \`entity/RdsysPermission.java\` |\r
| 角色權限對應 Entity | \`entity/RdsysPermissionUser.java\` |\r
| 角色權限查詢（核心 SQL） | \`repository/impl/RdsysPermissionRepositoryCustImpl.java\` |\r
| 帳號角色查詢 | \`repository/AccountRepository.java → selectRolesByAccount\` |\r
| 權限管理後台 | \`service/adm/Adm011b04Service.java\` |\r
| 前端權限 store | \`src/store/auth.js\` |\r
| 前端路由保護設定 | \`src/router/index.js → authPaths\` |\r
`,Jx=`\uFEFF# Fortify 掃描規則\r
\r
彙整 Fortify 靜態掃描中前後端常見的觸發規則與對應安全寫法，持續補充中。\r
\r
---\r
\r
## 🖥️ 前端規則\r
\r
### Password 欄位規範\r
\r
> **適用對象：** 所有前端工程師。凡是 Vue 元件中有 password 相關欄位的表單，請在 PR 前先對照本節自我檢查。\r
\r
#### 觸發規則總覽\r
\r
| 類型 | 範例 | 嚴重度 | 說明 |\r
|------|------|--------|------|\r
| Empty Password | \`password: ""\` 或 \`form.password = ""\` | **High** | password 欄位被明確賦予空字串 |\r
| Null Password | \`password: null\` | Low | password 欄位被明確賦予 null |\r
| Password in Comment | \`// 帶入 password 欄位\` | Low | 註解內出現 password 字串 |\r
\r
#### 核心原則\r
\r
1. **password 欄位的值不能是靜態空值**（\`null\` / \`""\`）\r
2. **密碼不能出現在 comment 裡**——連欄位名稱 \`password\` 這個詞都要避免\r
3. **測試用 function 裡不要有 password 賦值**（\`fillTestData\`、\`testInfo\` 這類）\r
4. **值來自動態來源就沒問題**——欄位名稱叫 \`password\` 本身不是問題\r
\r
---\r
\r
#### 案例一：登入表單初始化（最常見）\r
\r
幾乎每個有登入功能的頁面都會有這個 reactive 初始值，這是最常踩的地雷。\r
\r
\`\`\`js\r
// ❌ 觸發 High（Empty Password）\r
const loginForm = reactive({\r
  userId: '',\r
  password: '',   // ← High\r
  captcha: ''\r
})\r
\r
// ✅ 安全寫法\r
const loginForm = reactive({\r
  userId: '',\r
  password: undefined, // 或直接省略\r
  captcha: ''\r
})\r
// v-model 仍可正常綁定，使用者輸入後自然有值\r
\`\`\`\r
\r
---\r
\r
#### 案例二：null 初始化（Low，仍需修正）\r
\r
有些人會用 \`null\` 表示「尚未輸入」，但 Fortify 仍會標記 Low。\r
\r
\`\`\`js\r
// ❌ 觸發 Low（Null Password）\r
const form = reactive({\r
  account: '',\r
  password: null,  // ← Low\r
  smsCode: null\r
})\r
\r
// ✅ 安全寫法\r
const form = reactive({\r
  account: '',\r
  password: undefined, // undefined 不觸發\r
  smsCode: null        // 非 password 欄位不受限\r
})\r
\`\`\`\r
\r
---\r
\r
#### 案例三：重置表單時的賦值\r
\r
送出後重置或關閉 Dialog 時清空 form，password 欄位也不能直接清成空字串。\r
\r
\`\`\`js\r
// ❌ 觸發 High\r
const resetForm = () => {\r
  form.userId   = ''\r
  form.password = ''  // ← High\r
  form.captcha  = ''\r
}\r
\r
// ✅ 安全寫法\r
const resetForm = () => {\r
  form.userId   = ''\r
  form.password = undefined // ← 不觸發\r
  form.captcha  = ''\r
}\r
\`\`\`\r
\r
---\r
\r
#### 案例四：測試資料填入函式\r
\r
開發期間常會寫 \`fillTestData\` 快速填入帳密，這整段在 commit 前就要刪除，若忘記留著也會觸發掃描。\r
\r
\`\`\`js\r
// ❌ 觸發 High（即使是空字串也觸發）\r
const fillTestData = () => {\r
  loginForm.userId   = 'A123456789'\r
  loginForm.password = ''  // ← High\r
}\r
\r
// 或帶入測試密碼（同樣觸發 High）\r
loginForm.password = 'P@ssw0rd'\r
\r
// ✅ 作法：整段刪除\r
// fillTestData 整個 function 在 commit 前必須移除。\r
// 如需測試，請在瀏覽器 DevTools Console 手動執行，不要寫在原始碼裡。\r
\`\`\`\r
\r
---\r
\r
#### 案例五：Comment 內出現 password\r
\r
Fortify 掃描的是「password」這個英文字串本身，即使只是出現在 comment 裡，也會觸發 Low。\r
\r
\`\`\`js\r
// ❌ 觸發 Low\r
// TODO: 記得帶入 password 欄位\r
// 帶入 password 進行驗證\r
// QSP043S04 需要 password 欄位\r
\r
// ✅ 改用業務語意描述\r
// TODO: 記得帶入登入驗證欄位\r
// 帶入憑證進行驗證\r
// QSP043S04/S05 需要登入驗證欄位\r
\`\`\`\r
\r
---\r
\r
#### 安全寫法總覽\r
\r
值來自動態來源——不會觸發：\r
\r
\`\`\`js\r
// ✅ 來自 props\r
password: props.credential\r
\r
// ✅ 來自使用者輸入（v-model 綁定）\r
// <n-input v-model:value="form.password" type="password" />\r
// → Fortify 知道這是 user-supplied，不會報錯\r
\r
// ✅ 來自 computed / ref（動態）\r
password: userInput.value\r
\`\`\`\r
\r
---\r
\r
#### PR 前快速自查清單\r
\r
- ☐ \`reactive({ password: '' })\` → 改成 \`undefined\` 或省略\r
- ☐ \`reactive({ password: null })\` → 改成 \`undefined\` 或省略\r
- ☐ \`form.password = ''\`（reset / clear）→ 改成 \`= undefined\`\r
- ☐ \`fillTestData\` 或任何 hardcode password 賦值 → 整段刪除\r
- ☐ Comment 內有 "password" 字串 → 改用業務語意描述\r
\r
---\r
\r
## ⚙️ 後端規則\r
\r
> ⏸ **暫緩項目：JWT Hardcoded Secret**  \r
> \`JwtService.java\`、\`application-sit.yml\`、\`application-uat.yml\` 目前保留 fallback 以維持 SIT/UAT 登入正常。  \r
> 待維運設定 \`JWT_SECRET\` 環境變數後，移除 fallback 改為拋出 \`IllegalStateException\`。  \r
> 程式內以 \`TODO(Fortify-Deferred)\` 標記，可全文搜尋追蹤。\r
\r
---\r
\r
### 1. Password Management: Hardcoded Password\r
\r
#### 案例一：Swagger @Schema 範例值\r
\r
\`@Schema(example = "password123")\` 這類 Swagger 文件用的範例值，Fortify 也會掃到。移除 \`example\` 屬性即可，\`description\` 保留。\r
\r
已處理檔案：\`UserLogin.java\`、\`AskAccountDto.java\`、\`ApplyUserInfo.java\`、\`DepartmentSummary.java\`、\`RchDepartmentInfo.java\`\r
\r
\`\`\`java\r
// ❌ 觸發 High\r
@Schema(\r
  description = "登入密碼",\r
  example = "password123"  // ← High\r
)\r
private String password;\r
\r
// ✅ 安全寫法\r
@Schema(\r
  description = "登入密碼"\r
  // 移除 example 屬性即可\r
)\r
private String password;\r
\`\`\`\r
\r
---\r
\r
#### 案例二：設定檔硬編碼憑證\r
\r
\`application-*.yml\` 內的 JWT secret、API Key、Client Secret 不能硬編碼，改用 Spring 環境變數注入。\r
\r
\`\`\`yaml\r
# ❌ 觸發 High\r
jwt:\r
  secret: rdss-backend-api-secret-key\r
\r
fido:\r
  api-key: abcd1234efgh5678\r
\r
microsoft:\r
  graph:\r
    client-secret: xxxSecret\r
\r
# ✅ 安全寫法（環境變數注入）\r
jwt:\r
  secret: \${JWT_SECRET:}           # 無預設值\r
\r
fido:\r
  api-key: \${FIDO_API_KEY:}\r
\r
microsoft:\r
  graph:\r
    client-secret: \${GRAPH_CLIENT_SECRET:}\r
\`\`\`\r
\r
> **部署設定：** SIT / UAT / PROD 部署時需設定環境變數 \`JWT_SECRET\`、\`FIDO_API_KEY\`、\`GRAPH_CLIENT_SECRET\`（至少 256 bits 隨機字串）。\r
\r
---\r
\r
#### 案例三：Comment / Javadoc 含 password\r
\r
Java 中的 Javadoc、行內註解只要含 \`password\` 字串就會觸發 Low，改用業務語意描述。\r
\r
\`\`\`java\r
// ❌ 觸發 Low\r
/**\r
 * 郵件模板參數：\r
 * NAME, ACCOUNT, PASSWORD, ...\r
 */\r
\r
// KEY:password regex, VALUE:message\r
\r
// ✅ 改用業務語意\r
/**\r
 * 郵件模板參數：\r
 * NAME, ACCOUNT, 登入密碼參數, ...\r
 */\r
\r
// KEY:規則 regex, VALUE:錯誤訊息\r
\`\`\`\r
\r
已處理：\`QspStudentMailTemplateDef.java\`、\`PWordUtils.java\`\r
\r
---\r
\r
#### 案例四：含硬編碼的 main() 測試方法\r
\r
\`main()\` 方法內若有任何硬編碼字串直接賦值給 password 相關變數，整段刪除。\r
\r
\`\`\`java\r
// ❌ 觸發 High（UnitAccountEncoder.java）\r
public static void main(String[] args) {\r
  String pwd = "testP@ss123";   // ← High\r
  System.out.println(encode(pwd));\r
}\r
\r
// ✅ 作法：整段刪除，改用單元測試並透過環境變數傳入測試值\r
\`\`\`\r
\r
---\r
\r
#### 案例五：log 訊息與常數名稱含 password\r
\r
\`\`\`java\r
// ❌ 觸發 Low（EncryptUtils.java）\r
log.warn("password error", e);\r
\r
// ❌ 觸發 Low（UserController.java）\r
private static final String PASSWORD_PATTERN = "...";\r
\r
// ✅ 改用業務語意命名\r
log.warn("decrypt failed", e);\r
\r
// 正則內容不變，僅改常數名\r
private static final String PASSCODE_FORMAT_PATTERN = "...";\r
\`\`\`\r
\r
---\r
\r
### 2. Privacy Violation（CWE-200）— 日誌洩漏

> 敏感資料的判定與 HTTP 傳遞規則以 \`05-API呼叫方式.md\` 第二章為準。把 API 從 GET 改成 POST 只會讓參數離開 URL，**不會阻止應用程式自行把 Request Body 寫入 log**。
>
> 官方對照：[CWE-532: Insertion of Sensitive Information into Log File](https://cwe.mitre.org/data/definitions/532.html)、[OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)。\`Privacy Violation\` 是掃描工具的 finding category；實際弱點應依掃描資料流與 CWE mapping 判定，不可只看 category 名稱。

#### 核心規則：不得整包輸出 request / DTO / response

DTO 未必只有目前看得到的欄位，日後新增個資或憑證欄位時，整包 \`toString()\` 會在沒有修改 log 程式的情況下開始洩漏。因此不論目前是否觸發 Fortify，一律禁止以下寫法：

\`\`\`java
// ❌ Request Body 仍會被應用程式寫入 log
log.info("收到查詢條件: {}", req);
log.debug("response: {}", response);
log.error("處理失敗, param: {}", param, e);

// ✅ 僅記錄排錯所需的非敏感摘要
log.info("查詢完成, year: {}, resultCount: {}", req.getYear(), resultCount);
log.error("查詢失敗, correlationId: {}", correlationId, e);
\`\`\`

允許記錄的內容限於功能代碼、結果狀態、筆數、耗時、非敏感 enum／年度與後端產生的 correlation ID。帳號、姓名、身分證號、email、電話、token、完整 URL 及可定位受保護案件的識別資訊均不得輸出；若無法判定，預設不記值。

#### 案例一：e.printStackTrace() 洩漏堆疊
\r
\`e.printStackTrace()\` 會將完整 stack trace 輸出至 stderr，可能洩漏系統架構細節。統一改用 \`log.error()\`。\r
\r
\`\`\`java\r
// ❌ 觸發（Privacy Violation）\r
} catch (Exception e) {\r
  e.printStackTrace();  // ← 洩漏 stack trace\r
}\r
\r
// ✅ 安全寫法\r
@Slf4j  // 或手動宣告 Logger\r
} catch (Exception e) {\r
  log.error("操作失敗描述", e);\r
}\r
\`\`\`\r
\r
已修正的檔案（Part2）：report/pdf 下 19 個 Document 類別、\`CellBeanProperty\`、\`Adm022b03Service\`、\`Rem050b01Service\`、utils 工具類等，共約 35 個檔案。\r
\r
---\r
\r
#### 案例二：Log 輸出敏感欄位值\r
\r
Log 內容不能包含 ISSN、密碼等敏感資料值，移除或改為輸出非敏感的業務識別資訊。\r
\r
\`\`\`java\r
// ❌ 觸發（Privacy Violation）\r
// Rem040b04Service.java\r
log.info("查詢ISSN: {}", req.getIssn());  // ← 敏感\r
\r
// Rdp031a01Service.java\r
log.debug("Password for user {}: {}",\r
    accountNo,\r
    applyUserInfo.getPassword());         // ← High\r
\r
// ✅ 安全寫法：僅保留非敏感的業務識別資訊\r
log.info("查詢年度: {}", req.getYear());\r
\r
// 含密碼的 log 整行刪除\r
\`\`\`\r
\r
---\r
\r
### 3. Path Manipulation（CWE-022）— Zip Slip\r
\r
解壓 ZIP 時若未驗證 entry 的路徑，攻擊者可構造含 \`..\` 或絕對路徑的 ZIP，將檔案寫到任意目錄（Zip Slip 攻擊）。\r
\r
\`\`\`java\r
// ❌ 觸發（Path Manipulation）— Rfm020b04Service.java\r
File outFile = new File(outDir, entry.getName());  // ← 未驗證路徑\r
outFile.getParentFile().mkdirs();\r
\r
// ✅ 安全寫法（路徑驗證）\r
String name = entry.getName();\r
if (name.contains("..") || Paths.get(name).isAbsolute()) {\r
    log.warn("略過可疑 entry: {}", name);\r
    continue;\r
}\r
File outFile = new File(outDir, name);\r
String canon = outFile.getCanonicalPath();\r
if (!canon.startsWith(outDir.getCanonicalPath() + File.separator)) {\r
    log.warn("路徑穿越攻擊，略過: {}", name);\r
    continue;\r
}\r
// 才進行解壓\r
\`\`\`\r
\r
> ⚠️ **邏輯影響：** 正常平面 ZIP 不受影響；含路徑穿越的惡意 entry 會被略過（預期行為）。\r
\r
---\r
\r
### 4. Null Password — Java reset()\r
\r
> ⚠️ **注意：Java 與前端規則相反。** Java 中 \`null\` → \`""\`（空字串）；前端 JS 則是 \`""\` → \`undefined\`。\r
\r
\`\`\`java\r
// ❌ 觸發 Low（EmployeeApplyRxDto.java）\r
public void reset() {\r
    this.password = null;  // ← Low\r
    this.smsCode  = null;\r
}\r
\r
// ✅ 安全寫法\r
public void reset() {\r
    this.password = "";   // null → ""\r
    this.smsCode  = null; // 非 password 欄位不受限\r
}\r
// 實際密碼驗證走獨立參數，業務邏輯不受影響\r
\`\`\`\r
\r
---\r
\r
### 5. Spring Boot Misconfiguration: DevTools Enabled\r
\r
\`spring-boot-devtools\` 預設為 runtime 依賴時，正式部署環境也可能啟用開發工具。改為僅在 \`dev\` profile 下啟用。\r
\r
\`\`\`xml\r
<!-- ❌ 觸發（Misconfiguration） -->\r
<dependency>\r
  <groupId>org.springframework.boot</groupId>\r
  <artifactId>spring-boot-devtools</artifactId>\r
  <scope>runtime</scope>\r
</dependency>\r
\r
<!-- ✅ 安全寫法（移至 dev profile） -->\r
<profiles>\r
  <profile>\r
    <id>dev</id>\r
    <dependencies>\r
      <dependency>\r
        <groupId>org.springframework.boot</groupId>\r
        <artifactId>spring-boot-devtools</artifactId>\r
        <scope>runtime</scope>\r
      </dependency>\r
    </dependencies>\r
  </profile>\r
</profiles>\r
<!-- 本機開發：mvn -Pdev spring-boot:run -->\r
\`\`\`\r
\r
---\r
\r
### 6. 命名調整——降低誤報\r
\r
業務上必要的 \`password\` 欄位（值由使用者輸入，非硬編碼）本身不算問題，但**方法參數名稱**、**Javadoc 說明**含 password 也會觸發低嚴重度警告。以下調整僅改名，不影響業務邏輯。\r
\r
| 檔案 | 修改前 | 修改後 | 備註 |\r
|------|--------|--------|------|\r
| \`SftpUtils.java\` | \`param password\` | \`param passcode\` | 呼叫端以位置傳參，不受影響 |\r
| \`QspStudentMailUtils.java\` | \`param password\` | \`param initialPasscode\` | 郵件模板 key \`PASSWORD\` 不變 |\r
| \`Rdp032a02Service.java\` | \`password / newPassword\` | \`newPasscode\` | 方法參數名調整 |\r
| \`UserAuthenticationInfo.java\` | \`setInputPasswd1(String password)\` | \`setInputPasswd1(String inputPasscode)\` | 方法名不變 |\r
| \`AccountVO.java\` | Javadoc 含 password | 改為「登入憑證」描述 | getter/setter 方法名不變 |\r
| \`GraphMailProperties.java\` | 註解 \`Client Secret\` | 改為「應用程式憑證」描述 | 欄位名 \`clientSecret\` 仍可能誤報，可標記 Not an Issue |\r
\r
---\r
\r
### 7. 可能為誤報的項目（業務必要欄位）\r
\r
以下欄位值來自使用者輸入或環境變數，非硬編碼憑證。若重掃後仍出現，可在 Fortify Audit 標記為 **Not an Issue**，或使用 \`@FortifyNotPassword\`（專案內已有範例，見 \`PDFDocBuilder.java\`）。\r
\r
| 項目 | 說明 |\r
|------|------|\r
| DTO/Entity 的 \`password\` 欄位 | 登入、重設密碼等 API 請求欄位，值由使用者輸入，非硬編碼 |\r
| \`Account\` / \`CompanySelectItemVo\` 的 \`secret\` | 「機密性單位」旗標（DB 欄位 SECRET），非 JWT secret |\r
| \`GraphMailProperties.clientSecret\` | 實際值由 \`GRAPH_CLIENT_SECRET\` 環境變數注入 |\r
| \`PDFDocBuilder.KEY_Encryption_*Password\` | PDF 權限設定的 key 名稱常數，非實際密碼 |\r
\r
`,Xx=`# 權限模型與最大管理員規範

## 目的

RDSS 的權限不能只看 menu 或頁面是否顯示。最大管理員要做到「可進入、可檢視、可操作、可稽核」，必須同時確認頁面權限、模組功能權限、案件歸屬與最大管理員覆寫規則。

本規範整合頁面權限盤點經驗與本次 \`OFFICIAL_DOC_USER\` 簽辦角色問題，作為後續開發、DB 調整與 DBA 同步資料的共同判斷基準。

## 權限分層

| 層級 | 說明 | 常見資料來源 |
|---|---|---|
| 頁面權限 | 控制 menu、麵包屑與 URI 是否可進入 | \`RDSYS_PERMISSION\`, \`RDSYS_PERMISSION_USER\` |
| 功能角色 | 控制頁面內按鈕、簽辦、核決、審查、轉派等動作 | \`OFFICIAL_DOC_USER\`, 審查委員表、分案表、稽核角色表 |
| 案件歸屬 | 控制某筆資料目前是否由登入帳號處理 | \`PROCESSOR_ACC\`, \`LAYER_3_ACC\`, \`LAYER_2_ACC\`, assignment 欄位 |
| 最大管理員覆寫 | 管理員可否不具備原流程角色仍檢視或操作 | 後端集中式授權判斷 |

## 頁面權限規範

頁面權限仍以 \`11-頁面權限.md\` 為細節主文件，以下是必要注意事項：

1. \`RDSYS_PERMISSION\` 是頁面/menu 主檔，不應為了單一角色隱藏頁面而刪除主檔資料。
2. \`RDSYS_PERMISSION_USER\` 是角色或帳號與頁面的授權關聯。
3. \`RDSYS_PERMISSION_USER.ACCOUNT = 'NULL'\` 是字串，不是 SQL NULL。
4. 要移除某角色頁面權限，優先刪 \`RDSYS_PERMISSION_USER\` 對應資料。
5. 要全域暫停頁面，才考慮 \`RDSYS_PERMISSION.VISIBILITY = 0\`。
6. 查頁面是否仍出現時，要同時看登入帳號 API 回應、localStorage/session 快取、後端權限快取與部署狀態。
7. 簡單頁面權限 SQL 不使用 \`WITH\`、\`#temp table\` 或 \`DELETE alias FROM table alias JOIN ...\` 作為預設寫法。
8. 個人 \`ACCOUNT\` 授權目前可控制 menu，但 URI 授權查詢只依 \`USER_TYPE\` 取得 FUNC_CODE；涉及逐帳號 API 隔離時必須修正後端，不可只靠 \`RDSYS_PERMISSION_USER.ACCOUNT\`。

## 功能權限規範

若頁面內有簽辦、審查、核決、轉派、分案、稽核、下載敏感檔案等動作，必須確認 service/repository 是否另有功能權限限制。

常見限制方式：

1. 查模組角色表，例如 \`OFFICIAL_DOC_USER.ACCOUNT = :account\`。
2. 查角色階段，例如 \`DUTY = 0/1/2\`、\`TYPE = 1/2\`。
3. 查案件目前處理人，例如 \`PROCESSOR_ACC = :account\`、\`LAYER_3_ACC = :account\`、\`LAYER_2_ACC = :account\`。
4. 查分案或審查委員，例如 \`STUDENT_SIGNUP_EXAMINER\`、\`STUDENT_SIGNUP_ASSIGN\`。
5. API 回傳 \`canEdit\`、\`canApprove\`、\`isUndertaker\` 等欄位給前端控制按鈕。

頁面權限通過後，不代表功能權限一定通過。開發與測試都必須分開驗證。

## 最大管理員原則

最大管理員應由後端集中判斷，例如：

\`\`\`java
authorizationService.isSuperAdmin(accountDetails)
\`\`\`

不建議在各 service 直接寫死 \`NCA001\`。最大管理員身份來源須由系統明確定義，可採：

| 方式 | 適用情境 |
|---|---|
| 指定帳號白名單 | 短期、範圍最小 |
| \`ROLE_NCA\` / \`accType = 2\` | 確認所有該類帳號都應具備最大管理權時 |
| DB flag / 設定表 | 長期維護最清楚 |

## 不建議用角色表硬塞最大管理員

不要為了讓最大管理員可操作，就把最大管理員帳號補進所有模組角色表。

以 \`OFFICIAL_DOC_USER\` 為例，直接加入 \`NCA001\` 可能造成：

1. 下拉選單多出最大管理員，污染正式承辦人名單。
2. 待辦或簽辦流程誤把最大管理員視為正式承辦人。
3. 稽核紀錄無法分辨是正式角色操作還是管理員覆寫。
4. 不同 \`TYPE\` 的文書流程可能互相污染。

正確做法是：角色表保留原本流程語意，最大管理員用後端 override 取得管理能力。

## 寫入操作稽核

最大管理員執行寫入動作時，必須保留實際操作者語意。

建議記錄：

1. 實際登入帳號。
2. 原案件目前處理角色。
3. 是否為最大管理員覆寫。
4. 操作原因、備註或系統註記。

不可將最大管理員偽裝成原承辦人。若功能是轉派，應明確保留「誰轉派、轉給誰」。

## 模組盤點 SOP

新增或調整功能時，依序盤點：

1. 此頁是否有 \`RDSYS_PERMISSION\` 主檔。
2. \`RDSYS_PERMISSION_USER\` 是否授權目標角色或帳號。
3. Controller URI 是否與 \`ACTION_PATH\` 正確對應。
4. Service 是否用登入帳號判斷可否操作。
5. Repository SQL 是否用案件處理人或分案欄位過濾。
6. 是否有模組角色表。
7. 最大管理員是否應具備檢視權。
8. 最大管理員是否應具備寫入權。
9. 若具備寫入權，稽核紀錄如何保存。

## 建議盤點 SQL

查出含帳號、角色、簽辦階段欄位的表：

\`\`\`sql
SELECT
    TABLE_NAME,
    COLUMN_NAME,
    DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME IN (
    'ACCOUNT',
    'PROCESSOR_ACC',
    'LAYER_3_ACC',
    'LAYER_2_ACC',
    'DUTY',
    'TYPE',
    'IS_FINAL_APPROVAL'
)
ORDER BY TABLE_NAME, COLUMN_NAME;
\`\`\`

查最大管理員在文書簽辦角色表中的設定：

\`\`\`sql
SELECT
    ACCOUNT,
    TYPE,
    DUTY,
    IS_FINAL_APPROVAL
FROM OFFICIAL_DOC_USER
WHERE ACCOUNT IN ('NCA001', 'NCA002', 'NCA003', 'III413')
ORDER BY ACCOUNT, TYPE, DUTY;
\`\`\`

查文書簽辦角色全貌：

\`\`\`sql
SELECT
    TYPE,
    DUTY,
    IS_FINAL_APPROVAL,
    ACCOUNT,
    NAME
FROM OFFICIAL_DOC_USER
ORDER BY TYPE, DUTY, IS_FINAL_APPROVAL DESC, ACCOUNT;
\`\`\`

查指定頁面的頁面權限來源：

\`\`\`sql
SELECT
    pu.PERMISSION_SN,
    p.FUNC_CODE,
    p.ACTION_PATH,
    p.NAME_TEXT,
    p.PARENT_SN,
    pu.USER_TYPE,
    pu.ACCOUNT
FROM RDSYS_PERMISSION_USER pu
JOIN RDSYS_PERMISSION p
    ON p.SN = pu.PERMISSION_SN
WHERE p.NAME_TEXT IN ('頁面名稱1', '頁面名稱2')
ORDER BY p.SN, pu.USER_TYPE, pu.ACCOUNT;
\`\`\`

## 出境申請簽辦處理案例

\`PTM063B01\` 的頁面權限與簽辦權限是不同層級：

1. 頁面能否進入：\`RDSYS_PERMISSION\` / \`RDSYS_PERMISSION_USER\`。
2. 是否承辦人：\`OFFICIAL_DOC_USER\` 的 \`ACCOUNT\`、\`DUTY\`、\`TYPE\`。
3. 是否看得到待辦案件：案件欄位如 \`PROCESSOR_ACC\`、\`LAYER_3_ACC\`、\`LAYER_2_ACC\`。
4. 是否能轉派或簽辦：service 內的目前階段與登入帳號檢查。

因此最大管理員只補頁面權限仍不夠。後端應在 \`PTM063B01\` 的查詢、明細、轉派、簽辦流程中明確加入最大管理員策略。

## DBA 交付原則

若目標是同步 menu 或麵包屑，DBA 需要 \`RDSYS_PERMISSION\` 與 \`RDSYS_PERMISSION_USER\` 的參照與資料。

若目標是讓最大管理員可操作全功能，不能只交 DBA 覆蓋資料。應先由後端定義最大管理員 override，再由 DBA 同步必要的基礎頁面權限。
`,eS='# 14. 地端啟動與環境 DB 切換\n\n規範地端(本機)啟動後端 API 時,如何選擇要連接的環境資料庫(SIT / UAT),以及 VS Code Spring Boot Dashboard 的使用限制。\n\n---\n\n## 🌐 環境與 DB 實際對應\n\n系統有兩組測試團隊分別在 SIT / UAT 環境測試,**兩環境的 DB 不同、倒入的測試資料也不同**。各環境與 DB 的實際對應:\n\n| 環境 | 後端位置 | Profile | DB(內網位址) | DB(外網位址) |\n|---|---|---|---|---|\n| SIT 測試環境 | 35.194.171.114(前端 `.env.sit` 指向) | `sit` | 10.109.128.3 / `rdss` | 104.199.162.243 / `rdss` |\n| UAT 測試環境 | 34.80.125.220:8080(前端 `.env.uat` 指向) | `uat` | 10.109.128.3 / `rdss_n` | 104.199.162.243 / `rdss_n` |\n| 地端開發 | 本機 :8081 | `local` / `localuat` | ——(連不到) | 104.199.162.243 / `rdss` 或 `rdss_n` |\n\n**`10.109.128.3`(內網)與 `104.199.162.243`(外網)是同一台 DB 主機的兩個 IP**:部署在 GCP 內網的 SIT/UAT 後端走內網位址,地端開發者從外部走外網位址,連到的是同一顆資料庫。因此:\n\n- 地端跑 `local` → 連 `rdss` = **SIT 測試團隊使用的同一顆 DB**\n- 地端跑 `localuat` → 連 `rdss_n` = **UAT 測試團隊使用的同一顆 DB**\n\n> 佐證:兩位址上的資料庫剛好都是 `rdss` + `rdss_n` 一對、四個 profile 設定檔的 DB 帳號與加密密碼字串完全相同、`10.109.128.3` 為私有網段僅內網可達。(此對應為由設定檔推斷,尚未以 SQL 查證主機內網 IP;若發現地端查到的資料與測試團隊回報不一致,先回頭驗證此假設。)\n\n---\n\n## 🗂️ Spring Profile 與資料庫對照\n\n後端(`rdss_backend_api_new`)以 `--spring.profiles.active` 決定連接的 DB,對應設定檔在 `src/main/resources/application-{profile}.yml`:\n\n| Profile | DB 主機 | 資料庫 | 用途 |\n|---|---|---|---|\n| `sit` | 10.109.128.3 | `rdss` | SIT 測試環境 |\n| `uat` | 10.109.128.3 | `rdss_n` | UAT 測試環境 |\n| `local` | 104.199.162.243 | `rdss` | 外網開發機(SIT 資料) |\n| `localuat` | 104.199.162.243 | `rdss_n` | 外網開發機(UAT 資料) |\n| `rdssuat` | 10.193.15.100 | `rdss` | 內網 UAT 主機 |\n| `prod` | 10.193.15.100 | `rdss` | ⛔ 正式環境,**地端禁止使用** |\n\n> ⚠️ `10.109.128.3` 與 `10.193.15.100` 都是**內網主機,地端(外網)連不到**(除非有 VPN)。地端切換 SIT/UAT 資料,實際使用的是外網開發機的兩個 profile:**`local`(SIT 資料,rdss)/ `localuat`(UAT 資料,rdss_n)**。\n>\n> ⚠️ 各 profile 的 `server.port` 不一致(`local` 8081、`localuat` 8080、`sit`/`uat` 80),地端啟動一律另帶 `--server.port=8081` 覆寫,前端地端設定即以 8081 為準。\n\n---\n\n## ✅ 地端正確操作順序\n\n1. 前端確認 dev mode 的 `VITE_API_BASE_URL_V2` 為 `http://localhost:8081/`:可修改 `rdss_front/.env.dev`;若本機另有 `.env.dev.local`,Vite 會以後者為準,兩者不可互相矛盾。\n2. 以前端 dev mode 啟動(`npm run dev`);前端所有 API 會送到本機後端 8081。\n3. 在後端按 `Ctrl+Shift+D` 開啟 **Run and Debug**,從下拉選單選擇:\n   - `RDSS-SIT資料`:使用 `local` profile,連 `rdss`(SIT 測試資料)。\n   - `RDSS-UAT資料`:使用 `localuat` profile,連 `rdss_n`(UAT 測試資料)。\n4. 按 `F5` 啟動後端。需要切換 DB 時,先停止後端,改選另一組 configuration 後重新按 `F5`;前端仍維持指向 8081,不必跟著切 URL。\n\n> **責任界線:**前端 `.env.dev` 只決定「前端呼叫哪個後端位址」,不決定 DB;後端 `launch.json` 的 `--spring.profiles.active` 才決定連哪個 DB。\n>\n> 後端 `launch.json` 不設定 `envFile`:profile、port 與 UAT 所需的 JWT secret 都由 `args` 傳入。這不代表整個 RDSS 沒有環境檔;前端仍使用 `rdss_front/.env.dev`,兩者用途不同。\n\n---\n\n## ⚙️ launch.json 設定方式\n\n設定檔位置:**專案所屬工作區資料夾**的 `.vscode/launch.json`。注意 Dashboard 是以「app 所在的資料夾」往上找最近的 `.vscode/launch.json`——若 `C:\\IISI\\backend_new\\.vscode\\launch.json` 存在,會優先於 `C:\\IISI\\.vscode\\launch.json` 生效,兩份設定內容應保持一致,避免啟動吃錯設定。\n\n**每個環境建立一組具名 configuration**,以 `args` 指定 profile:\n\n> 📎 **可直接取用的範本**:[`assets/launch.json`](assets/launch.json)——已去識別化,檔內附每個參數的中文填寫說明。\n\n### 首次設定步驟(新人第一次會卡在這)\n\n1. 用 VS Code 開啟工作區,按 `Ctrl+Shift+D` 開啟 **Run and Debug** 面板。\n2. 若面板顯示「執行並偵錯」而沒有下拉選單 → 點 **建立 launch.json 檔案** → 選擇 **Java**。\n   VS Code 會在該資料夾建立 `.vscode/launch.json`。\n3. 把 `assets/launch.json` **整份覆蓋**進去,再依檔內【填寫說明】把 `<...>` 換成實際值。\n4. 確認 `projectName` 與本機 Java 專案名稱相符;不確定時看 VS Code Java Projects 面板顯示的名稱。\n5. **UAT 那組必須帶 `--jwt.secret`。** `application-localuat.yml` 的 `jwt.secret` 是 `${JWT_SECRET:}`(無 fallback),\n   不注入就是空字串,會造成 JWT 簽章失敗、登入拿不到有效 token;`local`(SIT)有 fallback 預設值故不需要。\n   該行有 Fortify 註解要求正式環境不得設 fallback,因此**不要改 yml**,改由啟動參數注入。\n6. 後端 `launch.json` 不設定 `envFile`;這與前端的 `rdss_front/.env.dev` 無關,不可因而認定前端不需要環境檔。\n7. 存檔。Run and Debug 的下拉選單就會出現「RDSS-SIT資料」「RDSS-UAT資料」兩組。\n\n> ⚠️ **只放一份。** 若 `C:\\IISI\\.vscode\\launch.json` 與 `C:\\IISI\\backend_new\\.vscode\\launch.json` 同時存在,\n> 後者優先生效,兩份內容一旦不同步就會「以為在測 UAT、實際連到 SIT」,而且不會有任何錯誤訊息。\n> 建議只保留 `backend_new/.vscode/launch.json`。\n\n\n```jsonc\n{\n    "configurations": [\n        {\n            "type": "java",\n            "name": "RDSS-SIT資料 (local, rdss)",\n            "request": "launch",\n            "cwd": "${workspaceFolder}",\n            "mainClass": "moi.rdss.platform.RdssBackendApiApplication",\n            "projectName": "rdss-backend-api-new",\n            "args": "--spring.profiles.active=local --server.port=8081"\n        },\n        {\n            "type": "java",\n            "name": "RDSS-UAT資料 (localuat, rdss_n)",\n            "request": "launch",\n            "cwd": "${workspaceFolder}",\n            "mainClass": "moi.rdss.platform.RdssBackendApiApplication",\n            "projectName": "rdss-backend-api-new",\n            "args": "--spring.profiles.active=localuat --server.port=8081 --jwt.secret=<從 application-local.yml 的 jwt.secret fallback 複製>"\n        }\n    ]\n}\n```\n\n---\n\n## 🚀 啟動方式(速查表)\n\n| 啟動入口 | 跑哪組設定 | 怎麼換環境 |\n|---|---|---|\n| Spring Boot Dashboard 播放鍵 | **固定第一組** | 只能去 launch.json 調整兩組設定的順序 |\n| Run and Debug(`Ctrl+Shift+D`) | **下拉選單選的那組** | 下拉直接選 → 按綠色播放鍵或 `F5` |\n\n- 綠色播放鍵 = `F5`,同一個動作;下拉選單**只影響下一次按 F5**,不影響 Dashboard 播放鍵。\n- **同時只能跑一個**(8081 只有一個):換環境前先停掉正在跑的,停掉方式隨意——Dashboard 停止鍵 / `Shift+F5` / terminal 內 `Ctrl+C` / 直接關掉該 terminal。\n- 啟動時若出現 `Port 8081 was already in use`,是前一個程序還沒完全釋放 port,等一兩秒再啟動一次。\n- 臨時跑一次另一個環境 → 走 Run and Debug 下拉;接下來一段時間都要測另一個環境 → 改 launch.json 順序讓 Dashboard 播放鍵直接吃它。\n- 無論從哪個入口啟動,執行中的 app 都會出現在 Dashboard,可從 Dashboard 停止。\n\n---\n\n## 🖥️ 前端(rdss_front)地端啟動\n\n- 地端開發用 `--mode dev`,API 位址由 `.env.dev` 的 `VITE_API_BASE_URL_V2=http://localhost:8081/` 指向地端後端(所以後端啟動固定帶 `--server.port=8081`)。\n- 若存在 `.env.dev.local`,Vite 會以該檔覆蓋 `.env.dev`;請同步確認 `VITE_API_BASE_URL_V2` 也指向 8081。`.env.dev.local` 符合現有 `*.local` Git 忽略規則,適合保留本機覆寫值。\n- **Port 衝突**:Vite 預設 5173,若本機還跑著其他專案的 dev server(如 `ai_coding_agent/frontend` 佔住 `127.0.0.1:5173`),瀏覽 `localhost:5173` 會被導到別的專案。此時改用專屬 port 啟動:\n\n  ```powershell\n  npx vite --mode dev --port 5180\n  ```\n\n  之後固定用 `http://localhost:5180` 開 RDSS 前端。`--port` 只是指令參數,**不落任何檔案、不會進版控**。\n  (注意:`npm run dev -- --port 5180` 在 Windows 下參數會被 npm 吃掉而失效,請直接用上面的 `npx vite` 寫法。)\n- Dev server 連續跑太久(1~2 天)可能因 Node heap 耗盡而崩潰(`JavaScript heap out of memory`)。長時間掛著的話,啟動前先設 `$env:NODE_OPTIONS = \'--max-old-space-size=4096\'` 加大記憶體上限;掛掉時重啟即可,不影響程式碼。\n- ⚠️ `.env.dev` 是**被 git 追蹤、僅供 dev／地端測試使用的設定檔**。把 API 位址改成 `localhost:8081` 屬於個人地端暫時修改,**未經團隊確認不得擅自 commit、push 或隨版本上板**;送版前必須以 `git status`／差異內容再次確認排除。若使用被忽略的 `.env.dev.local` 覆寫,仍要避免留下與實際測試目標不符的舊值。\n\n---\n\n## 🚧 Spring Boot Dashboard 的限制(踩雷紀錄)\n\nVS Code 的 Spring Boot Dashboard extension(vscjava.vscode-spring-boot-dashboard)有以下限制,設定時不要踩:\n\n1. **一個專案只會顯示一個節點**,無法像 Eclipse STS 版一樣在專案下列出多組啟動設定讓你選。\n2. 播放鍵啟動時,只會取 launch.json 中**第一個** `mainClass` + `projectName` 相符的設定,後面的永遠不會被用到。\n3. Dashboard 是把設定物件直接丟給 debugger,**不會解析 `${input:xxx}` 輸入變數**——在 `args` 裡用 `${input:}` 做選單,從 Dashboard 啟動時不會跳出選擇視窗,profile 會變成未解析的字面值,等於沒載入任何環境設定(DB 連線不明)。請勿使用這種寫法。\n4. 若相符的設定 `args` 為空(或找不到相符設定),app 會以 `application.yml` 的預設 profile(`local`)啟動,**連到外網開發機 104.199.162.243**,而不是 SIT/UAT。發現連錯 DB 時,先用 `netstat -ano` 對照 app 的 PID 確認實際連線的 DB 主機。\n\n---\n\n## ⛔ 禁止事項\n\n- 地端啟動一律禁用 `prod` / `rdssuat` 等正式、內網主機 profile。\n- 不要為了切環境去改 `application-{profile}.yml` 的 datasource 內容;切環境只透過 launch.json 換 profile。\n',tS=`# 15. Git 上板流程

本章是 RDSS 前端、後端共用的 Git commit、push 與上板正式規範。人員與 AI 必須遵守同一套核心流程。

目前團隊採 \`main\` 加個人分支模式，不強制 Pull Request。核心做法是：先在個人分支整合並驗證最新 \`main\`，最後只把已驗證的 commit 以一般 push 更新至遠端 \`main\`。

---

## 30 秒看懂流程

\`\`\`text
個人分支完成 commit
  → 確認工作目錄乾淨
  → 取得並合併最新 main
  → 重新驗證前端或後端
  → 檢查真正要進 main 的差異
  → 記錄已驗證 commit SHA
  → 再確認 main 沒有更新
  → 一般 push 個人分支與 main
  → 確認該 SHA 已存在於遠端 main
\`\`\`

任何拒絕、衝突、驗證失敗或異常差異都必須停止；禁止 force push。

## 適用範圍與授權

- 本流程只適用於前端、後端程式 repository。
- 前端與後端是兩個獨立 repository，必須分別執行、驗證與回報。
- 只有使用者明確要求「上板」、「併版」或「push」時，AI 才可執行遠端 push。
- 僅要求修改、檢查、測試或 commit 時，不代表允許 push。
- 平常只在個人分支開發；正常上板流程不得在本機 \`main\` 修改或 commit。

請 AI 上板時可使用：

> 請先完整讀取開發指南的 \`15-Git上板流程.md\`，依規範幫我上板前端及後端，並分別回報驗證與上板結果。

只想檢查時可使用：

> 請先完整讀取開發指南的 \`15-Git上板流程.md\`，只檢查目前是否符合上板條件，不要 commit、不要 push。

## 個人設定

每位 PG 在前端、後端 repository 各設定一次。先切到自己的個人分支，將角括號內的文字替換成自己的資料後再執行：

\`\`\`powershell
git config --local rdss.branchName "<個人分支名稱>"
git config --local rdss.developerName "<開發者姓名>"
\`\`\`

- \`<個人分支名稱>\`：填入自己目前使用的個人分支，必須與 \`git branch --show-current\` 的結果相同，且不可填 \`main\`。
- \`<開發者姓名>\`：填入自己的姓名，後續會用於確認 commit 紀錄。
- 角括號與提示文字只是填寫位置，必須替換，不可原樣執行。

確認設定：

\`\`\`powershell
git config --local --get rdss.branchName
git config --local --get rdss.developerName
git branch --show-current
\`\`\`

設定的分支必須與目前分支相同，且不可為 \`main\`。設定只寫入該 repository 的 \`.git/config\`，不會被 commit，也不會影響其他 PG。

Repository 管理者必須確認遠端 \`main\`：

- 禁止 force push。
- 禁止刪除 \`main\`。
- 管理者與 bypass 權限也不能略過上述限制。
- 保留團隊需要的一般 direct push 權限；本流程不強制 PR。

遠端保護尚未確認前，不可宣稱本流程已完整啟用。

## 絕對禁止事項

- 禁止 \`git push --force\`、\`git push --force-with-lease\` 或其他強制更新。
- 禁止刪除遠端 \`main\`。
- 禁止以 \`reset --hard\`、\`clean\`、rebase、amend 等方式改寫已推送的 \`main\`。
- 禁止在本機 \`main\` 建立個人 commit 或 merge commit。
- 禁止盲目使用 \`git add .\`、\`git add -A\` 或 \`git add -u\`。
- 禁止提交密碼、私鑰、token、\`.env\`、\`.env.*\`、本機設定、\`application-local.yml\`、\`target/\`、\`dist/\` 或 \`node_modules/\`。
- 同步或 push 遭拒時禁止繞過保護。

## Commit 規則

先檢查所有異動：

\`\`\`bash
git branch --show-current
git status --short --branch
git diff -- <明確檔案路徑>
git diff --cached -- <明確檔案路徑>
\`\`\`

只加入本次任務的明確檔案：

\`\`\`bash
git add <檔案路徑一> <檔案路徑二>
\`\`\`

Commit 訊息格式：

\`\`\`text
[模組代號][開發者姓名][修正內容]
\`\`\`

開發者姓名必須使用 repository-local 的 \`rdss.developerName\`，不可套用其他人的姓名。

完成必要 commit 後執行：

\`\`\`bash
git status --porcelain
\`\`\`

輸出必須完全為空。任何 staged、unstaged 或 untracked 檔案都代表本機驗證內容可能與實際 push 的 commit 不一致。

## 標準上板流程

以下步驟對每個要上板的 repository 分別執行。

### 1. 確認 repository 與個人分支

\`\`\`powershell
git rev-parse --show-toplevel
git status --short --branch
git remote -v

$BRANCH_NAME = [string](git config --local --get rdss.branchName)
$DEVELOPER_NAME = [string](git config --local --get rdss.developerName)
$CURRENT_BRANCH = [string](git branch --show-current)

$BRANCH_NAME = $BRANCH_NAME.Trim()
$DEVELOPER_NAME = $DEVELOPER_NAME.Trim()
$CURRENT_BRANCH = $CURRENT_BRANCH.Trim()

git check-ref-format --branch $BRANCH_NAME
\`\`\`

必須確認 repository 與 remote \`origin\` 正確；個人分支與開發者設定不可為空；\`$CURRENT_BRANCH\` 必須完全等於 \`$BRANCH_NAME\`，且不得為 \`main\` 或 detached HEAD。

### 2. 取得並合併最新 main

保持在個人分支：

\`\`\`bash
git status --porcelain
git fetch origin main:main
git merge main
git status --porcelain
\`\`\`

- merge 前後工作目錄都必須乾淨。
- fetch 出現 rejected、non-fast-forward、forced update 或其他失敗時立即停止。這可能代表遠端 \`main\` 歷史被改寫。
- merge conflict 時立即停止並列出衝突檔案，不得猜測解法後繼續上板。

### 3. 驗證合併後版本

後端至少執行：

\`\`\`powershell
.\\mvnw.cmd compile -DskipTests
\`\`\`

前端至少執行：

\`\`\`bash
npm run lint
npm run build:dev
\`\`\`

Repository 若有更完整的必要測試，仍須一併執行。任一必要驗證失敗即停止。

### 4. 審查上板差異並固定 SHA

\`\`\`powershell
git status --porcelain
git diff --name-status main...HEAD
git diff --stat main...HEAD
$DEPLOY_SHA = [string](git rev-parse HEAD)
$DEPLOY_SHA = $DEPLOY_SHA.Trim()
\`\`\`

必須確認：

- 工作目錄完全乾淨。
- 差異只包含本次任務。
- 沒有陌生檔案、敏感設定或非預期刪除。
- 沒有編譯產物、套件目錄或其他不應提交的內容。

\`$DEPLOY_SHA\` 必須為非空的完整 commit SHA。後續只能檢查及推送這個已完成驗證與差異審查的 commit。

### 5. 上板前最後同步閘門

\`\`\`powershell
git status --porcelain

$CURRENT_SHA = [string](git rev-parse HEAD)
$CURRENT_SHA = $CURRENT_SHA.Trim()

git fetch origin main:main
git merge-base --is-ancestor main $DEPLOY_SHA
\`\`\`

- 工作目錄必須仍然乾淨。
- \`$CURRENT_SHA\` 必須仍完全等於 \`$DEPLOY_SHA\`。
- ancestor 指令 exit code \`0\`：本次上板 SHA 包含最新 \`main\`，可以繼續。
- 非 \`0\`：驗證期間 \`main\` 已更新，回到步驟 2，重新 merge、驗證與審查差異。

### 6. 推送已驗證 SHA

推送已驗證版本：

\`\`\`powershell
git push origin "\${DEPLOY_SHA}:refs/heads/\${BRANCH_NAME}"
git push origin "\${DEPLOY_SHA}:refs/heads/main"
\`\`\`

必須使用完整目的 ref \`refs/heads/...\`，讓遠端個人分支第一次建立時也能正確推送。兩次 push 必須使用同一個 \`$DEPLOY_SHA\`。

只能使用一般 push。若個人分支 push 失敗，不能繼續更新 \`main\`；若 \`main\` push 被 rejected 或 non-fast-forward，代表其他人可能已搶先上板，回到步驟 2 重新執行，禁止 force。

### 7. 上板後確認

\`\`\`powershell
git fetch origin main:main
git merge-base --is-ancestor $DEPLOY_SHA main
git rev-parse main
\`\`\`

- ancestor 指令 exit code \`0\`：本次 SHA 已存在於遠端 \`main\` 歷史中，可以回報成功。
- 非 \`0\`：本次 SHA 不在遠端 \`main\`，不得回報完成。

不要求遠端 \`main\` 與本機 \`HEAD\` 永遠相同，因為其他人可能在本次上板後又成功上板；只要本次 SHA 仍是 \`main\` 的 ancestor，就代表本次版本已正確進入主幹。

## 強制停止條件

| 情況 | 處理方式 |
|---|---|
| 個人分支或開發者設定缺少 | 停止，請 PG 完成 repository-local 設定 |
| 目前位於 \`main\` | 停止，回到正確個人分支重新確認 |
| repository 或 remote 無法確認 | 停止，不 commit、不 push |
| \`git status --porcelain\` 有任何輸出 | 停止，先釐清 staged、unstaged 或 untracked 檔案 |
| fetch 顯示 rejected、non-fast-forward 或 forced update | 停止，請管理者確認 \`main\` 歷史 |
| merge conflict | 停止並回報衝突，不可繼續 push |
| 驗證失敗 | 停止，不 push |
| 差異包含非本次任務、敏感設定或非預期刪除 | 停止並修正上板範圍 |
| \`HEAD\` 與 \`$DEPLOY_SHA\` 不一致 | 停止，重新驗證與審查 |
| 最後同步閘門失敗 | 回到同步、merge 與驗證步驟 |
| 個人分支 push 失敗 | 停止，不更新 \`main\` |
| \`main\` push 被拒絕 | 回到同步、merge 與驗證步驟，禁止 force |
| 上板後本次 SHA 不是 \`main\` 的 ancestor | 不可回報完成，先確認遠端狀態 |

## 不使用 PR 的界線

本流程可防止一般 push 蓋掉別人的 commit，也能攔截遠端歷史改寫、驗證期間競爭與大量異常差異，但不等於程式碼審查制度。

- Git 只能阻止非 fast-forward，無法判斷一個合法 fast-forward commit 的業務內容是否正確。
- 若團隊沒有人審 PR，僅增加 PR 步驟並不會自動提高品質。
- 不使用 PR 時，更必須落實遠端禁止 force push、差異審查、必要驗證及停止條件。
- 若未來具備固定 reviewer 或 CI，可再將人工審查或自動檢查加入 \`main\` 的伺服器端閘門。

## 完成回報

每個 repository 分別回報：

- 前端或後端及個人分支名稱。
- 本次 \`$DEPLOY_SHA\`。
- 已執行的驗證及結果。
- 個人分支 push 結果。
- 遠端 \`main\` push 結果。
- 本次 SHA 是否存在於遠端 \`main\` 的核對結果。

只有前端與後端各自完成全部步驟時，才能回報「前後端均已上板完成」。
`,rS=`# 16. 錯誤代碼與例外日誌

程式沒預期到的錯誤（DB 連不上、欄位截斷、NullPointer…）發生時，使用者只看到一句固定的話加一組錯誤代碼；例外原文與堆疊只進後端 log。維運拿代碼去 log 搜，就找到那一筆。

---

## 📋 適用範圍

| 情況 | 做法 | 使用者看到 |
|---|---|---|
| 業務驗證失敗（必填、超長、狀態不符、找不到資料） | 照原本做法，回明確原因 | 「主要營業項目不可超過200字」 |
| 程式沒預期的例外（\`catch (Exception e)\`） | **走錯誤代碼機制** | 「系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）」 |

判斷標準：使用者改資料就能避開的，是業務驗證；使用者怎麼改都避不開的，是例外。

---

## 🔢 代碼格式

\`\`\`
yyMMdd-XXXXXX
261021-K7M2QX
\`\`\`

- 前 6 碼是西元日期，維運直接知道要開哪一天的 log 檔
- 後 6 碼隨機大寫英數，字元集去掉 \`0 O 1 I\`，避免口述或抄寫混淆
- 代碼由後端 \`ErrorRef\` 產生，前端不產生、不解析

---

## 💬 使用者看到的訊息

固定句型，只有代碼會變：

\`\`\`
系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）
\`\`\`

模組化儲存（營運計畫書各章節這種一次存多個模組的 API）的回應長這樣，前端全站處理器會逐行顯示：

\`\`\`json
{
  "success": false,
  "message": "1. 公司簡介：系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）",
  "details": [
    { "moduleName": "單位規模", "success": true,  "message": "更新成功" },
    { "moduleName": "公司簡介", "success": false, "message": "系統處理失敗，請稍後再試（錯誤代碼 261021-K7M2QX）" }
  ]
}
\`\`\`

全站最後防線（\`RestApiExceptionHandler\`）也附代碼：

\`\`\`
操作失敗，請確認資料後重試（錯誤代碼 261021-K7M2QX）
系統發生錯誤，請稍後再試（錯誤代碼 261021-K7M2QX）
\`\`\`

### ❌ 禁止出現在回應裡的東西

- \`e.getMessage()\`、SQL 錯誤原文、例外類別名稱、堆疊
- 資料表或欄位名稱
- 「成功 N 個、失敗 M 個」這種統計句（使用者要的是哪裡錯，不是幾個錯）

這也是 Fortify「資訊外洩」類的掃描項目，見第 12 章。

---

## 📝 log 格式

每個代碼對應**一行** ERROR log，後面接完整堆疊：

\`\`\`
[ERR 261021-K7M2QX] 更新公司簡介失敗 | user=116T3539 uri=/PNR012U11/operationPlan/1A/save | DataIntegrityViolationException: could not execute statement...
    at ...
\`\`\`

| 欄位 | 內容 | 來源 |
|---|---|---|
| \`[ERR 代碼]\` | 固定前綴，搜 log 用 | \`ErrorRef\` 自動加 |
| 第二段 | 哪個功能、哪個模組（程式自己寫，用中文） | 呼叫端傳入 |
| \`user=\` | 登入帳號 | \`ErrorRef\` 從 Spring Security 取 |
| \`uri=\` | 當次請求路徑 | \`ErrorRef\` 從 request 取 |
| 第三段 | 例外類別與原文 | \`ErrorRef\` 自動加 |

同一個例外**只記一次**：catch 裡呼叫 \`ErrorRef\` 之後，不要再另外 \`log.error(..., e)\`，否則堆疊會出現兩遍。

### 各環境 log 位置

| 環境 | 位置 |
|---|---|
| 本機 | 後端 console；若有設 \`logging.file.name\` 則看該檔 |
| SIT | \`/home/rdss/api/logs/rdss-api.log\` |
| 資服司 UAT（rdssuat） | 比照 SIT 路徑（設定檔裡的 \`C:/rdss\` 是舊值，不要照抄） |
| 正式 | 兩台 AP active-standby，**兩台都要搜** |

查法：

\`\`\`bash
grep -n "ERR 261021-K7M2QX" rdss-api.log
\`\`\`

---

## ☕ 後端寫法

工具類：\`moi.rdss.platform.utils.ErrorRef\`

| 方法 | 用途 |
|---|---|
| \`ErrorRef.logAndMessage(log, "哪個功能", e)\` | 記 log 並回傳給使用者的整句訊息（最常用） |
| \`ErrorRef.log(log, "哪個功能", e)\` | 只記 log，回傳代碼，自己組訊息時用 |
| \`ErrorRef.userMessage(code)\` | 用代碼組固定句型 |

### 範例 1：模組化儲存的 catch

\`\`\`java
} catch (Exception e) {
    response.addDetail("公司簡介", false, ErrorRef.logAndMessage(log, "更新公司簡介失敗", e));
    failCount++;
}
\`\`\`

### 範例 2：整支 API 的最外層 catch

\`\`\`java
} catch (Exception e) {
    return OperationPlanCh4_4SaveRes.failure(ErrorRef.logAndMessage(log, "2A 研發願景儲存失敗", e));
}
\`\`\`

### 範例 3：改之前 ❌ → 改之後 ✓

\`\`\`java
// ❌ 例外原文丟給使用者，log 又多記一次堆疊
log.error("更新公司簡介失敗", e);
response.addDetail("公司簡介", false, "更新失敗: " + e.getMessage());

// ❌ 使用者只看到「處理失敗」，回報時對不回 log
log.error("更新公司簡介失敗", e);
response.addDetail("公司簡介", false, "處理失敗");

// ✓
response.addDetail("公司簡介", false, ErrorRef.logAndMessage(log, "更新公司簡介失敗", e));
\`\`\`

### 什麼時候不用 ErrorRef

- 業務驗證：直接回原因，例如 \`failure("資料驗證失敗", errorMessages)\`
- 可預期且使用者能處理的狀況：例如「查無報名資料，請先完成報名」
- 查詢 API 的例外：直接 \`throw\`，交給 \`RestApiExceptionHandler\` 統一處理即可

---

## 🖥️ 前端規則

- 照後端 \`message\` 顯示，不自行改寫、不拆解代碼
- 模組化儲存回應（\`details[]\` 內有 \`moduleName\`）：\`success:false\` 一律紅叉顯示，\`message\` 以換行拆成多行；\`main.js\` 全站處理器已實作，頁面不要再自己跳第二個提示
- 不要把 axios error 的 \`error.message\`（例如 \`Request failed with status code 500\`）顯示給使用者
- 需要客製訊息的頁面，在 mutation 加 \`meta: { includeGlobalSuccess: false }\` 自己接，但訊息內容仍須遵守本章規則

---

## ✅ 檢查清單

- [ ] \`catch (Exception e)\` 裡沒有 \`e.getMessage()\` 進回應
- [ ] 使用者訊息是固定句型加代碼，不是「處理失敗」四個字
- [ ] 同一個例外只有一行 \`[ERR ...]\` log，沒有重複的 \`log.error\`
- [ ] 業務驗證沒有誤用錯誤代碼（使用者看得懂的原因要直接寫）
- [ ] 前端沒有解析代碼或自行改寫訊息

---

## 📌 現況（2026-10-21）

- 已套用：營運計畫書各章節儲存 API（1A／1B／1C／2A／3A／3B，一般、新申請、原用人、自創）、\`RestApiExceptionHandler\` 的 RuntimeException 與 Exception 兩個最後防線
- 其他模組的 catch 區塊仍是舊寫法，新寫或改到時一併換成 \`ErrorRef\`
`,nS=`// ─────────────────────────────────────────────────────────────
// RDSS 後端地端啟動設定範本（去識別化）
//
// 放置位置：backend_new/.vscode/launch.json
//           此路徑不在任何 git repo 內，不會進版控。
//
// 使用方式：整份複製後，依下方【填寫說明】把 <...> 的部分換成實際值。
// ─────────────────────────────────────────────────────────────
//
// 【填寫說明】
//
// mainClass
//   後端啟動類別的完整路徑。
//   查法：在 rdss_backend_api_new 搜尋 @SpringBootApplication 所在的類別。
//
// projectName
//   VS Code「Java Projects」面板顯示的專案名稱，通常等於 pom.xml 的 artifactId。
//
// --spring.profiles.active
//   決定連哪個 DB，不要改 application-{profile}.yml 的 datasource 來切換。
//     local     → 外網開發機 rdss    （SIT 測試團隊同一顆 DB）
//     localuat  → 外網開發機 rdss_n  （UAT 測試團隊同一顆 DB）
//   ⛔ 地端禁用 prod / rdssuat（內網主機，且屬正式環境）。
//
// --server.port
//   固定 8081。各 profile 的預設 port 不一致，一律以參數覆寫，
//   前端 .env.dev 的 VITE_API_BASE_URL_V2 也以 8081 為準。
//
// envFile
//   本後端啟動範本不使用 envFile；profile、port 與下方 JWT secret 均由 args 傳入。
//   注意：這與前端 rdss_front/.env.dev 是兩件事。前端仍須將 dev mode 的 API
//         指向 http://localhost:8081/；若有 .env.dev.local，該檔會覆蓋 .env.dev，
//         也必須確認其值。DB 再由本檔所選 profile 決定。
//   ⚠ .env.dev 僅供 dev／地端測試使用；個人為連本機 8081 所做的暫時修改，
//     未經團隊確認不得擅自 commit、push 或隨版本上板。
//
// --jwt.secret（只有 UAT 那組需要）
//   application-localuat.yml 寫的是 \${JWT_SECRET:}，沒有 fallback 預設值，
//   不注入就會是空字串，導致 JWT 簽章失敗、登入拿不到有效 token。
//   取值方式：打開 rdss_backend_api_new/src/main/resources/application-local.yml，
//            找到 jwt.secret 那行 \${JWT_SECRET:○○○}，把 ○○○ 整段複製過來。
//   SIT 那組不需要，因為 application-local.yml 已內建 fallback。
//   ⚠ 不要改 application-localuat.yml 補 fallback：該行有 Fortify 註解，
//     要求正式環境不得設 fallback 預設值。
//
// 【切換環境】
//   Ctrl+Shift+D 開 Run and Debug → 下拉選要的那組 → F5
//   ⚠ Spring Boot Dashboard 播放鍵永遠只跑第一組，下拉選了也不會生效。
//   ⚠ 同時只能跑一個（8081 只有一個），換環境前先 Shift+F5 停掉。
// ─────────────────────────────────────────────────────────────
{
    "configurations": [
        {
            "type": "java",
            "name": "RDSS-SIT資料 (local, rdss)",
            "request": "launch",
            "cwd": "\${workspaceFolder}",
            "mainClass": "<後端啟動類別完整路徑>",
            "projectName": "<Java Projects 面板顯示的專案名稱>",
            "args": "--spring.profiles.active=local --server.port=8081"
        },
        {
            "type": "java",
            "name": "RDSS-UAT資料 (localuat, rdss_n)",
            "request": "launch",
            "cwd": "\${workspaceFolder}",
            "mainClass": "<後端啟動類別完整路徑>",
            "projectName": "<Java Projects 面板顯示的專案名稱>",
            "args": "--spring.profiles.active=localuat --server.port=8081 --jwt.secret=<見上方填寫說明，從 application-local.yml 複製>"
        }
    ]
}
`,oS=[{name:"01-API協作規則.md",content:$x},{name:"02-參數一致性.md",content:jx},{name:"03-日期與時間格式.md",content:Ux},{name:"04-分頁資料格式.md",content:Wx},{name:"05-API呼叫方式與後端輸入驗證.md",content:Vx},{name:"06-文字欄位長度.md",content:Gx},{name:"07-上傳格式.md",content:qx},{name:"08-下載格式.md",content:Yx},{name:"09-下拉選單API.md",content:Kx},{name:"10-GraphAPI寄信.md",content:Qx},{name:"11-頁面權限.md",content:Zx},{name:"12-Fortify掃描規則.md",content:Jx},{name:"13-權限模型與最大管理員規範.md",content:Xx},{name:"14-地端啟動與環境DB切換.md",content:eS},{name:"15-Git上板流程.md",content:tS},{name:"16-錯誤代碼與例外日誌.md",content:rS}],iS=[{name:"launch.json",content:nS}];async function aS(){const e=new Nx,t=e.folder("RDSS專案-前後端協作規範");for(const o of oS)t.file(o.name,o.content);const r=t.folder("assets");for(const o of iS)r.file(o.name,o.content);const n=await e.generateAsync({type:"blob"});zx.saveAs(n,"RDSS專案-前後端協作規範.zip")}const sS={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",padding:"52px 16px"}},lS={style:{width:"100%","max-width":"360px"}},cS=["disabled"],uS={key:0,style:{color:"var(--c-text-red-500)","font-size":"0.875rem",margin:"2px 0 0","text-align":"center"}},dS={__name:"PasswordGate",emits:["unlock"],setup(e,{emit:t}){const r=t,n=["18da6d36","a2e5a360","5f78996e","04fa4c89","51482ca8","83a7c8be","7bbfe3d6","686f2f96"],o=De(""),i=De(!1),a=De(!1),s=De(null);Kr(()=>{var u;(u=s.value)==null||u.focus()});const l=async u=>{const d=await globalThis.crypto.subtle.digest("SHA-256",new TextEncoder().encode(u));return Array.from(new Uint8Array(d)).map(m=>m.toString(16).padStart(2,"0")).join("")},c=async()=>{if(!(!o.value.trim()||a.value)){a.value=!0;try{const u=await l(o.value);u===n.join("")?r("unlock",u.slice(0,16)):i.value=!0}finally{a.value=!1}}};return(u,d)=>(Ke(),xt("div",sS,[be("div",lS,[d[2]||(d[2]=Vf('<div style="text-align:center;margin-bottom:24px;"><div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background:var(--c-bg-slate-100);border-radius:50%;margin-bottom:12px;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div><h3 style="font-size:1.15rem;font-weight:700;color:var(--c-text-slate-700);margin:0 0 6px;">此章節受保護</h3><p style="color:var(--c-text-slate-500);font-size:0.9rem;margin:0;">請輸入密碼以檢視內容</p></div>',1)),be("form",{onSubmit:Ei(c,["prevent"]),style:{display:"flex","flex-direction":"column",gap:"10px"}},[Dl(be("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=m=>o.value=m),type:"password",placeholder:"請輸入密碼",autocomplete:"new-password",style:_n({padding:"10px 14px",border:i.value?"1.5px solid var(--c-border-red-500)":"1.5px solid var(--c-border-slate-200)",borderRadius:"8px",fontSize:"0.95rem",outline:"none",width:"100%",boxSizing:"border-box",transition:"border-color 0.15s"}),onInput:d[1]||(d[1]=m=>i.value=!1)},null,36),[[Dp,o.value]]),be("button",{type:"submit",disabled:a.value||!o.value.trim(),style:_n([{padding:"10px",background:"var(--c-bg-indigo-600)",color:"var(--c-text-white)",border:"none","border-radius":"8px","font-size":"0.95rem","font-weight":"600",cursor:"pointer",transition:"background 0.2s",opacity:"1"},{opacity:a.value||!o.value.trim()?"0.55":"1",cursor:a.value||!o.value.trim()?"not-allowed":"pointer"}])},kr(a.value?"驗證中…":"解鎖"),13,cS),i.value?(Ke(),xt("p",uS," 密碼錯誤，請重試 ")):_i("",!0)],32)])]))}},fS=(e,t)=>{const r=e.__vccOpts||e;for(const[n,o]of t)r[n]=o;return r},pS={class:"flex flex-col h-screen min-w-0 overflow-hidden"},hS={class:"hero shrink-0 z-20 bg-gradient-to-b from-indigo-50 to-slate-50 border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-8"},mS={class:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3"},gS={class:"flex items-center gap-3 shrink-0"},vS=["title","aria-label"],bS={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},CS={key:1,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},xS=["disabled"],SS={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},yS={key:1,class:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24"},_S={class:"flex-1 min-h-0 flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-3 pt-4 sm:px-4 sm:pt-6 md:px-6 md:pt-8 lg:px-8"},PS={class:"hidden lg:block lg:shrink-0 lg:w-64 lg:h-full lg:overflow-y-auto lg:pb-8"},wS={class:"bg-white rounded-xl p-5 shadow-lg"},AS={class:"space-y-1"},ES=["href","onClick"],TS={class:"p-4 space-y-2"},IS=["href","onClick"],RS={class:"flex items-center justify-between w-full"},OS={class:"text-lg md:text-xl lg:text-2xl font-bold"},DS={key:0,style:{"font-size":"1rem","margin-right":"8px",opacity:"0.55"},title:"需要密碼"},fi="_p",kS={__name:"Home",setup(e){var _;const t=De(!1),r=De(!1);function n(w){r.value=!0,localStorage.setItem(fi,w)}const o=()=>localStorage.removeItem(fi),i=async()=>{t.value=!0;try{await aS()}finally{t.value=!1}},a=[{id:"section-1",title:"1. API 協作規則",component:je(()=>Ue(()=>import("./ApiFormat-CjxRc1pi.js"),[]))},{id:"section-2",title:"2. 參數一致性",component:je(()=>Ue(()=>import("./ResponseStructure-DcnzhPwO.js"),[]))},{id:"section-3",title:"3. 日期與時間格式",component:je(()=>Ue(()=>import("./DateTimeFormat-BchGjCl8.js"),[]))},{id:"section-4",title:"4. 分頁資料格式",component:je(()=>Ue(()=>import("./PaginationFormat-H_RKFdvK.js"),[]))},{id:"section-5",title:"5. API 呼叫方式",component:je(()=>Ue(()=>import("./ApiCallMethod-57A3BE2B.js"),[]))},{id:"section-6",title:"6. 文字欄位長度",component:je(()=>Ue(()=>import("./TextFieldLength-BCe1sZg0.js"),[]))},{id:"section-7",title:"7. 上傳格式",component:je(()=>Ue(()=>import("./UploadFormat-9Ki_MmMA.js"),[]))},{id:"section-8",title:"8. 下載格式",component:je(()=>Ue(()=>import("./DownloadFormat-DIsQ3QCD.js"),[]))},{id:"section-9",title:"9. 下拉選單 API (待討論)",component:je(()=>Ue(()=>import("./DropdownApi-4Rw7Tf2n.js"),[]))},{id:"section-10",title:"10. Graph API 寄信",component:je(()=>Ue(()=>import("./GraphMailSpec-C671p3Xj.js"),[]))},{id:"section-11",title:"11. 頁面權限",component:je(()=>Ue(()=>import("./PagePermission-RnXrz43d.js"),[]))},{id:"section-12",title:"12. Fortify 掃描規則",component:je(()=>Ue(()=>import("./FortifyRules-Bs81jJXD.js"),[]))},{id:"section-13",title:"13. 權限模型與最大管理員規範",component:je(()=>Ue(()=>import("./PermissionModel-BeIhtBl-.js"),[]))},{id:"section-14",title:"14. 地端啟動與環境 DB 切換",component:je(()=>Ue(()=>import("./LocalEnvironment-BEWceTwa.js"),[]))},{id:"section-15",title:"15. Git 上板流程",component:je(()=>Ue(()=>import("./GitWorkflow-C5iE8pmo.js"),[]))},{id:"section-16",title:"16. 錯誤代碼與例外日誌",component:je(()=>Ue(()=>import("./ErrorCodeLogging-36UQmFlr.js"),[]))},{id:"section-17",title:"17. SIT 資料匯入不覆蓋表",component:je(()=>Ue(()=>import("./NoOverwriteTables-CwvIZ9JL.js"),[])),protected:!0},{id:"appendix",title:"18. 測試環境",component:je(()=>Ue(()=>import("./TestEnvironment-C3ekkkxc.js"),[])),protected:!0},{id:"section-last",title:"19. 測試帳號",component:je(()=>Ue(()=>import("./TestAccounts-C5o-bBv1.js"),__vite__mapDeps([0,1]))),protected:!0}],s=De(((_=a[0])==null?void 0:_.id)||""),l=De(!1),c=De(null);let u,d=null,m=null;const p=()=>{const w=c.value;w&&(w.classList.add("is-scrolling"),clearTimeout(m),m=setTimeout(()=>w.classList.remove("is-scrolling"),800))},g=De([]),h=()=>{l.value=!l.value},b=w=>{s.value=w;const A=document.getElementById(w),k=c.value;if(A&&k){if(w==="section-1"){k.scrollTo({top:0,behavior:"smooth"});return}const D=A.getBoundingClientRect().top-k.getBoundingClientRect().top+k.scrollTop-8;k.scrollTo({top:D,behavior:"smooth"})}},v=w=>{b(w),h()},x=()=>{const w=c.value;if(!w)return;const A=w.getBoundingClientRect().top,k=40,N=a.map(D=>document.getElementById(D.id)).filter(Boolean);if(!N.length)return;let $=N[0];for(const D of N)if(D.getBoundingClientRect().top-A-k<=0)$=D;else break;s.value=$.id};return Kr(()=>{var k;u=()=>{p(),!d&&(d=requestAnimationFrame(()=>{x(),d=null}))},(k=c.value)==null||k.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u,{passive:!0}),x();const w=new URLSearchParams(window.location.search).get("expand");if(w){const N=w==="all"?a.map($=>$.id):w.split(",").filter($=>a.some(D=>D.id===$));g.value=N,N.length&&Xi(()=>b(N[0]))}const A=localStorage.getItem(fi);A&&/^[0-9a-f]{16}$/.test(A)&&(r.value=!0),window.addEventListener("beforeunload",o)}),ia(()=>{var w;u&&((w=c.value)==null||w.removeEventListener("scroll",u),window.removeEventListener("resize",u)),d&&(cancelAnimationFrame(d),d=null),clearTimeout(m),window.removeEventListener("beforeunload",o)}),(w,A)=>(Ke(),xt("div",pS,[be("header",hS,[A[9]||(A[9]=be("nav",{class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3"},[be("div",{class:"font-bold text-sm sm:text-base lg:text-lg tracking-wide break-words max-w-full"},"RDSS Development Guide")],-1)),be("div",mS,[A[8]||(A[8]=be("h2",{class:"text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words max-w-full"},"RDSS專案-前後端協作規範",-1)),be("div",gS,[be("button",{type:"button",onClick:A[0]||(A[0]=(...k)=>Ze(Ms)&&Ze(Ms)(...k)),title:Ze(jt)?"切換為白天模式":"切換為夜晚模式","aria-label":Ze(jt)?"切換為白天模式":"切換為夜晚模式",class:"inline-flex items-center justify-center w-8 h-8 p-0 rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-slate-100 transition-colors"},[Ze(jt)?(Ke(),xt("svg",bS,[...A[3]||(A[3]=[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1)])])):(Ke(),xt("svg",CS,[...A[4]||(A[4]=[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1)])]))],8,vS),be("button",{onClick:i,disabled:t.value,class:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},[t.value?(Ke(),xt("svg",yS,[...A[6]||(A[6]=[be("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),be("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):(Ke(),xt("svg",SS,[...A[5]||(A[5]=[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])])),go(" "+kr(t.value?"打包中...":"下載規範MD檔"),1)],8,xS),A[7]||(A[7]=be("span",{class:"text-xs sm:text-sm text-gray-500"},"最後編輯日期：2026-11-06",-1))])])]),be("div",_S,[be("aside",PS,[be("nav",wS,[A[10]||(A[10]=be("div",{class:"text-xl font-bold mb-4 text-slate-600"},"目錄",-1)),be("ul",AS,[(Ke(),xt(Ve,null,Ko(a,k=>be("li",{key:k.id},[be("a",{href:`#${k.id}`,class:Pn(["block px-3 py-2.5 text-gray-600 no-underline rounded-lg transition-all duration-200 text-sm hover:bg-slate-100 hover:text-slate-700 hover:translate-x-1",{"bg-slate-100 text-slate-700 translate-x-1":s.value===k.id}]),onClick:Ei(N=>b(k.id),["prevent"])},kr(k.title),11,ES)])),64))])])]),be("div",{class:"lg:hidden fixed bottom-6 right-6 z-40"},[be("button",{onClick:h,class:"bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"},[...A[11]||(A[11]=[be("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])])]),l.value?(Ke(),xt("div",{key:0,class:"lg:hidden fixed inset-0 w-screen bg-black bg-opacity-50 z-50",style:{height:"100vh"},onClick:h},[be("div",{class:"absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto",style:{height:"100vh"},onClick:A[1]||(A[1]=Ei(()=>{},["stop"]))},[be("div",{class:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"},[A[13]||(A[13]=be("div",{class:"text-xl font-bold text-slate-700"},"目錄",-1)),be("button",{onClick:h,class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[...A[12]||(A[12]=[be("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),be("ul",TS,[(Ke(),xt(Ve,null,Ko(a,k=>be("li",{key:k.id},[be("a",{href:`#${k.id}`,class:Pn(["block px-4 py-3 text-gray-600 no-underline rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-slate-700",{"bg-indigo-100 text-indigo-700 font-medium":s.value===k.id}]),onClick:N=>v(k.id)},kr(k.title),11,IS)])),64))])])])):_i("",!0),be("main",{id:"sections",ref_key:"mainRef",ref:c,class:"flex-1 min-w-0 min-h-0 w-full max-w-full overflow-y-auto overflow-x-hidden"},[Me(Ze(Q1),{"expanded-names":g.value,"onUpdate:expandedNames":A[2]||(A[2]=k=>g.value=k),"display-directive":"if","arrow-placement":"right"},{default:Nr(()=>[(Ke(),xt(Ve,null,Ko(a,k=>Me(Ze(X1),{key:k.id,name:k.id,id:k.id},{header:Nr(()=>[be("div",RS,[be("span",OS,kr(k.title),1),k.protected&&!r.value?(Ke(),xt("span",DS,"🔒")):_i("",!0)])]),default:Nr(()=>[k.protected&&!r.value?(Ke(),jr(dS,{key:0,onUnlock:n})):(Ke(),jr(mf(k.component),{key:1}))]),_:2},1032,["name","id"])),64))]),_:1},8,["expanded-names"]),A[14]||(A[14]=be("footer",{class:"mt-8 py-8 md:py-10 px-4 text-center text-gray-500 border-t border-gray-200"},[be("p",{class:"text-sm md:text-base"},"© 2026 RDSS Development Guide")],-1))],512)])]))}},MS=fS(kS,[["__scopeId","data-v-1babb135"]]),LS=[{path:"/",name:"Home",component:MS}],FS=Ox({history:cx("/RdssDevelopeGuide/"),routes:LS}),nd=Np(wC);nd.use(FS);nd.mount("#app");export{$n as $,Sh as A,Fn as B,et as C,Fo as D,Sr as E,Ve as F,Xi as G,_h as H,NS as I,Gf as J,Lc as K,Th as L,fa as M,X1 as N,Zr as O,fg as P,Wc as Q,ha as R,dg as S,tf as T,So as U,jh as V,Xr as W,$g as X,Zh as Y,Zc as Z,fS as _,Vf as a,Gr as a0,Bo as a1,Os as a2,qc as a3,en as a4,Kc as a5,Jr as a6,Ar as a7,Uc as a8,jc as a9,Rc as aA,jS as aB,X0 as aC,l1 as aD,ms as aE,HS as aF,u1 as aG,US as aH,up as aI,sr as aJ,ko as aK,yh as aL,fn as aM,Kt as aN,d1 as aO,le as aP,Q0 as aQ,p1 as aR,ue as aS,du as aT,WS as aU,VS as aV,Rv as aW,Fc as aX,Ei as aY,_i as aZ,Di as aa,$c as ab,k0 as ac,Uh as ad,cr as ae,Wn as af,Xe as ag,Ae as ah,ke as ai,Ni as aj,uu as ak,$S as al,ga as am,va as an,jn as ao,Qe as ap,No as aq,ma as ar,Un as as,mu as at,ta as au,Nc as av,bc as aw,vu as ax,Zt as ay,Rh as az,Me as b,xt as c,be as d,go as e,Q1 as f,Kr as g,ia as h,Ce as i,zS as j,qe as k,Ri as l,De as m,af as n,Ke as o,sf as p,Ye as q,Ko as r,ar as s,kr as t,Ze as u,ua as v,Nr as w,Dl as x,nh as y,re as z};
