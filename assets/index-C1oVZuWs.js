const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TestAccounts-UBJ0YG-L.js","assets/TestAccounts-n08822T4.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Po(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ae={},Cn=[],At=()=>{},Da=()=>!1,ai=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),xo=e=>e.startsWith("onUpdate:"),Me=Object.assign,To=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},pu=Object.prototype.hasOwnProperty,ye=(e,t)=>pu.call(e,t),de=Array.isArray,wn=e=>yr(e)==="[object Map]",Na=e=>yr(e)==="[object Set]",rs=e=>yr(e)==="[object Date]",he=e=>typeof e=="function",Ie=e=>typeof e=="string",ht=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",ka=e=>(_e(e)||he(e))&&he(e.then)&&he(e.catch),Ma=Object.prototype.toString,yr=e=>Ma.call(e),mu=e=>yr(e).slice(8,-1),La=e=>yr(e)==="[object Object]",li=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,er=Po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ci=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},gu=/-\w/g,ut=ci(e=>e.replace(gu,t=>t.slice(1).toUpperCase())),vu=/\B([A-Z])/g,mn=ci(e=>e.replace(vu,"-$1").toLowerCase()),ui=ci(e=>e.charAt(0).toUpperCase()+e.slice(1)),xi=ci(e=>e?`on${ui(e)}`:""),qt=(e,t)=>!Object.is(e,t),zr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fa=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Io=e=>{const t=parseFloat(e);return isNaN(t)?e:t},_u=e=>{const t=Ie(e)?Number(e):NaN;return isNaN(t)?e:t};let is;const fi=()=>is||(is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cr(e){if(de(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=Ie(r)?Cu(r):cr(r);if(i)for(const o in i)t[o]=i[o]}return t}else if(Ie(e)||_e(e))return e}const bu=/;(?![^(]*\))/g,yu=/:([^]+)/,Su=/\/\*[^]*?\*\//g;function Cu(e){const t={};return e.replace(Su,"").split(bu).forEach(n=>{if(n){const r=n.split(yu);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ur(e){let t="";if(Ie(e))t=e;else if(de(e))for(let n=0;n<e.length;n++){const r=ur(e[n]);r&&(t+=r+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Au=Po(wu);function Ba(e){return!!e||e===""}function Eu(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Ro(e[r],t[r]);return n}function Ro(e,t){if(e===t)return!0;let n=rs(e),r=rs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ht(e),r=ht(t),n||r)return e===t;if(n=de(e),r=de(t),n||r)return n&&r?Eu(e,t):!1;if(n=_e(e),r=_e(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const a in e){const s=e.hasOwnProperty(a),l=t.hasOwnProperty(a);if(s&&!l||!s&&l||!Ro(e[a],t[a]))return!1}}return String(e)===String(t)}const ja=e=>!!(e&&e.__v_isRef===!0),Sn=e=>Ie(e)?e:e==null?"":de(e)||_e(e)&&(e.toString===Ma||!he(e.toString))?ja(e)?Sn(e.value):JSON.stringify(e,Ua,2):String(e),Ua=(e,t)=>ja(t)?Ua(e,t.value):wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i],o)=>(n[Ti(r,o)+" =>"]=i,n),{})}:Na(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ti(n))}:ht(t)?Ti(t):_e(t)&&!de(t)&&!La(t)?String(t):t,Ti=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class Pu{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=ot,!t&&ot&&(this.index=(ot.scopes||(ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=ot;try{return ot=this,t()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){this._on>0&&--this._on===0&&(ot=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function xu(){return ot}let Ee;const Ii=new WeakSet;class za{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&ot.active&&ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ii.has(this)&&(Ii.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ha(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,os(this),Wa(this);const t=Ee,n=ft;Ee=this,ft=!0;try{return this.fn()}finally{Va(this),Ee=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)No(t);this.deps=this.depsTail=void 0,os(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ii.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zi(this)&&this.run()}get dirty(){return Zi(this)}}let $a=0,tr,nr;function Ha(e,t=!1){if(e.flags|=8,t){e.next=nr,nr=e;return}e.next=tr,tr=e}function Oo(){$a++}function Do(){if(--$a>0)return;if(nr){let t=nr;for(nr=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;tr;){let t=tr;for(tr=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Wa(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Va(e){let t,n=e.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),No(r),Tu(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=t,e.depsTail=n}function Zi(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ga(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ga(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===fr)||(e.globalVersion=fr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Zi(e))))return;e.flags|=2;const t=e.dep,n=Ee,r=ft;Ee=e,ft=!0;try{Wa(e);const i=e.fn(e._value);(t.version===0||qt(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Ee=n,ft=r,Va(e),e.flags&=-3}}function No(e,t=!1){const{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)No(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tu(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ft=!0;const qa=[];function Nt(){qa.push(ft),ft=!1}function kt(){const e=qa.pop();ft=e===void 0?!0:e}function os(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ee;Ee=void 0;try{t()}finally{Ee=n}}}let fr=0;class Iu{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ko{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ee||!ft||Ee===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ee)n=this.activeLink=new Iu(Ee,this),Ee.deps?(n.prevDep=Ee.depsTail,Ee.depsTail.nextDep=n,Ee.depsTail=n):Ee.deps=Ee.depsTail=n,Ya(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ee.depsTail,n.nextDep=void 0,Ee.depsTail.nextDep=n,Ee.depsTail=n,Ee.deps===n&&(Ee.deps=r)}return n}trigger(t){this.version++,fr++,this.notify(t)}notify(t){Oo();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Do()}}}function Ya(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Ya(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qr=new WeakMap,ln=Symbol(""),Ji=Symbol(""),dr=Symbol("");function Xe(e,t,n){if(ft&&Ee){let r=qr.get(e);r||qr.set(e,r=new Map);let i=r.get(n);i||(r.set(n,i=new ko),i.map=r,i.key=n),i.track()}}function Ot(e,t,n,r,i,o){const a=qr.get(e);if(!a){fr++;return}const s=l=>{l&&l.trigger()};if(Oo(),t==="clear")a.forEach(s);else{const l=de(e),c=l&&li(n);if(l&&n==="length"){const u=Number(r);a.forEach((d,m)=>{(m==="length"||m===dr||!ht(m)&&m>=u)&&s(d)})}else switch((n!==void 0||a.has(void 0))&&s(a.get(n)),c&&s(a.get(dr)),t){case"add":l?c&&s(a.get("length")):(s(a.get(ln)),wn(e)&&s(a.get(Ji)));break;case"delete":l||(s(a.get(ln)),wn(e)&&s(a.get(Ji)));break;case"set":wn(e)&&s(a.get(ln));break}}Do()}function Ru(e,t){const n=qr.get(e);return n&&n.get(t)}function vn(e){const t=ve(e);return t===e?t:(Xe(t,"iterate",dr),lt(e)?t:t.map(pt))}function di(e){return Xe(e=ve(e),"iterate",dr),e}function $t(e,t){return Mt(e)?In(cn(e)?pt(t):t):pt(t)}const Ou={__proto__:null,[Symbol.iterator](){return Ri(this,Symbol.iterator,e=>$t(this,e))},concat(...e){return vn(this).concat(...e.map(t=>de(t)?vn(t):t))},entries(){return Ri(this,"entries",e=>(e[1]=$t(this,e[1]),e))},every(e,t){return xt(this,"every",e,t,void 0,arguments)},filter(e,t){return xt(this,"filter",e,t,n=>n.map(r=>$t(this,r)),arguments)},find(e,t){return xt(this,"find",e,t,n=>$t(this,n),arguments)},findIndex(e,t){return xt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return xt(this,"findLast",e,t,n=>$t(this,n),arguments)},findLastIndex(e,t){return xt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return xt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Oi(this,"includes",e)},indexOf(...e){return Oi(this,"indexOf",e)},join(e){return vn(this).join(e)},lastIndexOf(...e){return Oi(this,"lastIndexOf",e)},map(e,t){return xt(this,"map",e,t,void 0,arguments)},pop(){return Vn(this,"pop")},push(...e){return Vn(this,"push",e)},reduce(e,...t){return ss(this,"reduce",e,t)},reduceRight(e,...t){return ss(this,"reduceRight",e,t)},shift(){return Vn(this,"shift")},some(e,t){return xt(this,"some",e,t,void 0,arguments)},splice(...e){return Vn(this,"splice",e)},toReversed(){return vn(this).toReversed()},toSorted(e){return vn(this).toSorted(e)},toSpliced(...e){return vn(this).toSpliced(...e)},unshift(...e){return Vn(this,"unshift",e)},values(){return Ri(this,"values",e=>$t(this,e))}};function Ri(e,t,n){const r=di(e),i=r[t]();return r!==e&&!lt(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.done||(o.value=n(o.value)),o}),i}const Du=Array.prototype;function xt(e,t,n,r,i,o){const a=di(e),s=a!==e&&!lt(e),l=a[t];if(l!==Du[t]){const d=l.apply(e,o);return s?pt(d):d}let c=n;a!==e&&(s?c=function(d,m){return n.call(this,$t(e,d),m,e)}:n.length>2&&(c=function(d,m){return n.call(this,d,m,e)}));const u=l.call(a,c,r);return s&&i?i(u):u}function ss(e,t,n,r){const i=di(e);let o=n;return i!==e&&(lt(e)?n.length>3&&(o=function(a,s,l){return n.call(this,a,s,l,e)}):o=function(a,s,l){return n.call(this,a,$t(e,s),l,e)}),i[t](o,...r)}function Oi(e,t,n){const r=ve(e);Xe(r,"iterate",dr);const i=r[t](...n);return(i===-1||i===!1)&&hi(n[0])?(n[0]=ve(n[0]),r[t](...n)):i}function Vn(e,t,n=[]){Nt(),Oo();const r=ve(e)[t].apply(e,n);return Do(),kt(),r}const Nu=Po("__proto__,__v_isRef,__isVue"),Ka=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function ku(e){ht(e)||(e=String(e));const t=ve(this);return Xe(t,"has",e),t.hasOwnProperty(e)}class Za{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?Wu:el:o?Xa:Qa).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=de(t);if(!i){let l;if(a&&(l=Ou[n]))return l;if(n==="hasOwnProperty")return ku}const s=Reflect.get(t,n,Be(t)?t:r);if((ht(n)?Ka.has(n):Nu(n))||(i||Xe(t,"get",n),o))return s;if(Be(s)){const l=a&&li(n)?s:s.value;return i&&_e(l)?Tn(l):l}return _e(s)?i?Tn(s):Sr(s):s}}class Ja extends Za{constructor(t=!1){super(!1,t)}set(t,n,r,i){let o=t[n];const a=de(t)&&li(n);if(!this._isShallow){const c=Mt(o);if(!lt(r)&&!Mt(r)&&(o=ve(o),r=ve(r)),!a&&Be(o)&&!Be(r))return c||(o.value=r),!0}const s=a?Number(n)<t.length:ye(t,n),l=Reflect.set(t,n,r,Be(t)?t:i);return t===ve(i)&&(s?qt(r,o)&&Ot(t,"set",n,r):Ot(t,"add",n,r)),l}deleteProperty(t,n){const r=ye(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&r&&Ot(t,"delete",n,void 0),i}has(t,n){const r=Reflect.has(t,n);return(!ht(n)||!Ka.has(n))&&Xe(t,"has",n),r}ownKeys(t){return Xe(t,"iterate",de(t)?"length":ln),Reflect.ownKeys(t)}}class Mu extends Za{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Lu=new Ja,Fu=new Mu,Bu=new Ja(!0);const Qi=e=>e,Dr=e=>Reflect.getPrototypeOf(e);function ju(e,t,n){return function(...r){const i=this.__v_raw,o=ve(i),a=wn(o),s=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?Qi:t?In:pt;return!t&&Xe(o,"iterate",l?Ji:ln),Me(Object.create(c),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:s?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function Nr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Uu(e,t){const n={get(i){const o=this.__v_raw,a=ve(o),s=ve(i);e||(qt(i,s)&&Xe(a,"get",i),Xe(a,"get",s));const{has:l}=Dr(a),c=t?Qi:e?In:pt;if(l.call(a,i))return c(o.get(i));if(l.call(a,s))return c(o.get(s));o!==a&&o.get(i)},get size(){const i=this.__v_raw;return!e&&Xe(ve(i),"iterate",ln),i.size},has(i){const o=this.__v_raw,a=ve(o),s=ve(i);return e||(qt(i,s)&&Xe(a,"has",i),Xe(a,"has",s)),i===s?o.has(i):o.has(i)||o.has(s)},forEach(i,o){const a=this,s=a.__v_raw,l=ve(s),c=t?Qi:e?In:pt;return!e&&Xe(l,"iterate",ln),s.forEach((u,d)=>i.call(o,c(u),c(d),a))}};return Me(n,e?{add:Nr("add"),set:Nr("set"),delete:Nr("delete"),clear:Nr("clear")}:{add(i){!t&&!lt(i)&&!Mt(i)&&(i=ve(i));const o=ve(this);return Dr(o).has.call(o,i)||(o.add(i),Ot(o,"add",i,i)),this},set(i,o){!t&&!lt(o)&&!Mt(o)&&(o=ve(o));const a=ve(this),{has:s,get:l}=Dr(a);let c=s.call(a,i);c||(i=ve(i),c=s.call(a,i));const u=l.call(a,i);return a.set(i,o),c?qt(o,u)&&Ot(a,"set",i,o):Ot(a,"add",i,o),this},delete(i){const o=ve(this),{has:a,get:s}=Dr(o);let l=a.call(o,i);l||(i=ve(i),l=a.call(o,i)),s&&s.call(o,i);const c=o.delete(i);return l&&Ot(o,"delete",i,void 0),c},clear(){const i=ve(this),o=i.size!==0,a=i.clear();return o&&Ot(i,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=ju(i,e,t)}),n}function Mo(e,t){const n=Uu(e,t);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ye(n,i)&&i in r?n:r,i,o)}const zu={get:Mo(!1,!1)},$u={get:Mo(!1,!0)},Hu={get:Mo(!0,!1)};const Qa=new WeakMap,Xa=new WeakMap,el=new WeakMap,Wu=new WeakMap;function Vu(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gu(e){return e.__v_skip||!Object.isExtensible(e)?0:Vu(mu(e))}function Sr(e){return Mt(e)?e:Lo(e,!1,Lu,zu,Qa)}function tl(e){return Lo(e,!1,Bu,$u,Xa)}function Tn(e){return Lo(e,!0,Fu,Hu,el)}function Lo(e,t,n,r,i){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Gu(e);if(o===0)return e;const a=i.get(e);if(a)return a;const s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function cn(e){return Mt(e)?cn(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function lt(e){return!!(e&&e.__v_isShallow)}function hi(e){return e?!!e.__v_raw:!1}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function Xi(e){return!ye(e,"__v_skip")&&Object.isExtensible(e)&&Fa(e,"__v_skip",!0),e}const pt=e=>_e(e)?Sr(e):e,In=e=>_e(e)?Tn(e):e;function Be(e){return e?e.__v_isRef===!0:!1}function Oe(e){return rl(e,!1)}function nl(e){return rl(e,!0)}function rl(e,t){return Be(e)?e:new qu(e,t)}class qu{constructor(t,n){this.dep=new ko,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ve(t),this._value=n?t:pt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||lt(t)||Mt(t);t=r?t:ve(t),qt(t,n)&&(this._rawValue=t,this._value=r?t:pt(t),this.dep.trigger())}}function dt(e){return Be(e)?e.value:e}const Yu={get:(e,t,n)=>t==="__v_raw"?e:dt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Be(i)&&!Be(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function il(e){return cn(e)?e:new Proxy(e,Yu)}class Ku{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._raw=ve(t);let i=!0,o=t;if(!de(t)||!li(String(n)))do i=!hi(o)||lt(o);while(i&&(o=o.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=dt(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Be(this._raw[this._key])){const n=this._object[this._key];if(Be(n)){n.value=t;return}}this._object[this._key]=t}get dep(){return Ru(this._raw,this._key)}}class Zu{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Cr(e,t,n){return Be(e)?e:he(e)?new Zu(e):_e(e)&&arguments.length>1?Ju(e,t,n):Oe(e)}function Ju(e,t,n){return new Ku(e,t,n)}class Qu{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ko(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ee!==this)return Ha(this,!0),!0}get value(){const t=this.dep.track();return Ga(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xu(e,t,n=!1){let r,i;return he(e)?r=e:(r=e.get,i=e.set),new Qu(r,i,n)}const kr={},Yr=new WeakMap;let nn;function ef(e,t=!1,n=nn){if(n){let r=Yr.get(n);r||Yr.set(n,r=[]),r.push(e)}}function tf(e,t,n=Ae){const{immediate:r,deep:i,once:o,scheduler:a,augmentJob:s,call:l}=n,c=x=>i?x:lt(x)||i===!1||i===0?Dt(x,1):Dt(x);let u,d,m,p,g=!1,h=!1;if(Be(e)?(d=()=>e.value,g=lt(e)):cn(e)?(d=()=>c(e),g=!0):de(e)?(h=!0,g=e.some(x=>cn(x)||lt(x)),d=()=>e.map(x=>{if(Be(x))return x.value;if(cn(x))return c(x);if(he(x))return l?l(x,2):x()})):he(e)?t?d=l?()=>l(e,2):e:d=()=>{if(m){Nt();try{m()}finally{kt()}}const x=nn;nn=u;try{return l?l(e,3,[p]):e(p)}finally{nn=x}}:d=At,t&&i){const x=d,O=i===!0?1/0:i;d=()=>Dt(x(),O)}const y=xu(),v=()=>{u.stop(),y&&y.active&&To(y.effects,u)};if(o&&t){const x=t;t=(...O)=>{x(...O),v()}}let b=h?new Array(e.length).fill(kr):kr;const w=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const O=u.run();if(i||g||(h?O.some((j,L)=>qt(j,b[L])):qt(O,b))){m&&m();const j=nn;nn=u;try{const L=[O,b===kr?void 0:h&&b[0]===kr?[]:b,p];b=O,l?l(t,3,L):t(...L)}finally{nn=j}}}else u.run()};return s&&s(w),u=new za(d),u.scheduler=a?()=>a(w,!1):w,p=x=>ef(x,!1,u),m=u.onStop=()=>{const x=Yr.get(u);if(x){if(l)l(x,4);else for(const O of x)O();Yr.delete(u)}},t?r?w(!0):b=u.run():a?a(w.bind(null,!0),!0):u.run(),v.pause=u.pause.bind(u),v.resume=u.resume.bind(u),v.stop=v,v}function Dt(e,t=1/0,n){if(t<=0||!_e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Be(e))Dt(e.value,t,n);else if(de(e))for(let r=0;r<e.length;r++)Dt(e[r],t,n);else if(Na(e)||wn(e))e.forEach(r=>{Dt(r,t,n)});else if(La(e)){for(const r in e)Dt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Dt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wr(e,t,n,r){try{return r?e(...r):e()}catch(i){Ar(i,t,n)}}function mt(e,t,n,r){if(he(e)){const i=wr(e,t,n,r);return i&&ka(i)&&i.catch(o=>{Ar(o,t,n)}),i}if(de(e)){const i=[];for(let o=0;o<e.length;o++)i.push(mt(e[o],t,n,r));return i}}function Ar(e,t,n,r=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=t&&t.appContext.config||Ae;if(t){let s=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}s=s.parent}if(o){Nt(),wr(o,null,10,[e,l,c]),kt();return}}nf(e,n,i,r,a)}function nf(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}const rt=[];let yt=-1;const An=[];let Ht=null,_n=0;const ol=Promise.resolve();let Kr=null;function sl(e){const t=Kr||ol;return e?t.then(this?e.bind(this):e):t}function rf(e){let t=yt+1,n=rt.length;for(;t<n;){const r=t+n>>>1,i=rt[r],o=hr(i);o<e||o===e&&i.flags&2?t=r+1:n=r}return t}function Fo(e){if(!(e.flags&1)){const t=hr(e),n=rt[rt.length-1];!n||!(e.flags&2)&&t>=hr(n)?rt.push(e):rt.splice(rf(t),0,e),e.flags|=1,al()}}function al(){Kr||(Kr=ol.then(cl))}function of(e){de(e)?An.push(...e):Ht&&e.id===-1?Ht.splice(_n+1,0,e):e.flags&1||(An.push(e),e.flags|=1),al()}function as(e,t,n=yt+1){for(;n<rt.length;n++){const r=rt[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ll(e){if(An.length){const t=[...new Set(An)].sort((n,r)=>hr(n)-hr(r));if(An.length=0,Ht){Ht.push(...t);return}for(Ht=t,_n=0;_n<Ht.length;_n++){const n=Ht[_n];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ht=null,_n=0}}const hr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function cl(e){try{for(yt=0;yt<rt.length;yt++){const t=rt[yt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),wr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;yt<rt.length;yt++){const t=rt[yt];t&&(t.flags&=-2)}yt=-1,rt.length=0,ll(),Kr=null,(rt.length||An.length)&&cl()}}let Ye=null,ul=null;function Zr(e){const t=Ye;return Ye=e,ul=e&&e.type.__scopeId||null,t}function En(e,t=Ye,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Xr(-1);const o=Zr(t);let a;try{a=e(...i)}finally{Zr(o),r._d&&Xr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function fl(e,t){if(Ye===null)return e;const n=_i(Ye),r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,s,l=Ae]=t[i];o&&(he(o)&&(o={mounted:o,updated:o}),o.deep&&Dt(a),r.push({dir:o,instance:n,value:a,oldValue:void 0,arg:s,modifiers:l}))}return e}function Xt(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let a=0;a<i.length;a++){const s=i[a];o&&(s.oldValue=o[a].value);let l=s.dir[r];l&&(Nt(),mt(l,n,8,[e.el,s,e,t]),kt())}}function Yt(e,t){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[e]=t}}function je(e,t,n=!1){const r=Go();if(r||xn){let i=xn?xn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&he(t)?t.call(r&&r.proxy):t}}const sf=Symbol.for("v-scx"),af=()=>je(sf);function dl(e,t){return Bo(e,null,t)}function un(e,t,n){return Bo(e,t,n)}function Bo(e,t,n=Ae){const{immediate:r,deep:i,flush:o,once:a}=n,s=Me({},n),l=t&&r||!t&&o!=="post";let c;if(Dn){if(o==="sync"){const p=af();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=At,p.resume=At,p.pause=At,p}}const u=qe;s.call=(p,g,h)=>mt(p,u,g,h);let d=!1;o==="post"?s.scheduler=p=>{Je(p,u&&u.suspense)}:o!=="sync"&&(d=!0,s.scheduler=(p,g)=>{g?p():Fo(p)}),s.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const m=tf(e,t,s);return Dn&&(c?c.push(m):l&&m()),m}function lf(e,t,n){const r=this.proxy,i=Ie(e)?e.includes(".")?hl(r,e):()=>r[e]:e.bind(r,r);let o;he(t)?o=t:(o=t.handler,n=t);const a=Pr(this),s=Bo(i,o.bind(r),n);return a(),s}function hl(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const pl=Symbol("_vte"),ml=e=>e.__isTeleport,rr=e=>e&&(e.disabled||e.disabled===""),ls=e=>e&&(e.defer||e.defer===""),cs=e=>typeof SVGElement<"u"&&e instanceof SVGElement,us=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,eo=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},gl={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,o,a,s,l,c){const{mc:u,pc:d,pbc:m,o:{insert:p,querySelector:g,createText:h,createComment:y}}=c,v=rr(t.props);let{shapeFlag:b,children:w,dynamicChildren:x}=t;if(e==null){const O=t.el=h(""),j=t.anchor=h("");p(O,n,r),p(j,n,r);const L=(M,W)=>{b&16&&u(w,M,W,i,o,a,s,l)},q=()=>{const M=t.target=eo(t.props,g),W=to(M,t,h,p);M&&(a!=="svg"&&cs(M)?a="svg":a!=="mathml"&&us(M)&&(a="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(M),v||(L(M,W),$r(t,!1)))};v&&(L(n,j),$r(t,!0)),ls(t.props)?(t.el.__isMounted=!1,Je(()=>{q(),delete t.el.__isMounted},o)):q()}else{if(ls(t.props)&&e.el.__isMounted===!1){Je(()=>{gl.process(e,t,n,r,i,o,a,s,l,c)},o);return}t.el=e.el,t.targetStart=e.targetStart;const O=t.anchor=e.anchor,j=t.target=e.target,L=t.targetAnchor=e.targetAnchor,q=rr(e.props),M=q?n:j,W=q?O:L;if(a==="svg"||cs(j)?a="svg":(a==="mathml"||us(j))&&(a="mathml"),x?(m(e.dynamicChildren,x,M,i,o,a,s),Wo(e,t,!0)):l||d(e,t,M,W,i,o,a,s,!1),v)q?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Mr(t,n,O,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ee=t.target=eo(t.props,g);ee&&Mr(t,ee,null,c,0)}else q&&Mr(t,j,L,c,1);$r(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},o){const{shapeFlag:a,children:s,anchor:l,targetStart:c,targetAnchor:u,target:d,props:m}=e;if(d&&(i(c),i(u)),o&&i(l),a&16){const p=o||!rr(m);for(let g=0;g<s.length;g++){const h=s[g];r(h,t,n,p,!!h.dynamicChildren)}}},move:Mr,hydrate:cf};function Mr(e,t,n,{o:{insert:r},m:i},o=2){o===0&&r(e.targetAnchor,t,n);const{el:a,anchor:s,shapeFlag:l,children:c,props:u}=e,d=o===2;if(d&&r(a,t,n),(!d||rr(u))&&l&16)for(let m=0;m<c.length;m++)i(c[m],t,n,2);d&&r(s,t,n)}function cf(e,t,n,r,i,o,{o:{nextSibling:a,parentNode:s,querySelector:l,insert:c,createText:u}},d){function m(y,v){let b=v;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")t.targetStart=b;else if(b.data==="teleport anchor"){t.targetAnchor=b,y._lpa=t.targetAnchor&&a(t.targetAnchor);break}}b=a(b)}}function p(y,v){v.anchor=d(a(y),v,s(y),n,r,i,o)}const g=t.target=eo(t.props,l),h=rr(t.props);if(g){const y=g._lpa||g.firstChild;t.shapeFlag&16&&(h?(p(e,t),m(g,y),t.targetAnchor||to(g,t,u,c,s(e)===g?e:null)):(t.anchor=a(e),m(g,y),t.targetAnchor||to(g,t,u,c),d(y&&a(y),t,g,n,r,i,o))),$r(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=a(e));return t.anchor&&a(t.anchor)}const uf=gl;function $r(e,t){const n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function to(e,t,n,r,i=null){const o=t.targetStart=n(""),a=t.targetAnchor=n("");return o[pl]=a,e&&(r(o,e,i),r(a,e,i)),a}const Ct=Symbol("_leaveCb"),Gn=Symbol("_enterCb");function vl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fn(()=>{e.isMounted=!0}),zo(()=>{e.isUnmounting=!0}),e}const ct=[Function,Array],_l={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},bl=e=>{const t=e.subTree;return t.component?bl(t.component):t},ff={name:"BaseTransition",props:_l,setup(e,{slots:t}){const n=Go(),r=vl();return()=>{const i=t.default&&jo(t.default(),!0);if(!i||!i.length)return;const o=yl(i),a=ve(e),{mode:s}=a;if(r.isLeaving)return Di(o);const l=fs(o);if(!l)return Di(o);let c=pr(l,a,r,n,d=>c=d);l.type!==Ge&&dn(l,c);let u=n.subTree&&fs(n.subTree);if(u&&u.type!==Ge&&!rn(u,l)&&bl(n).type!==Ge){let d=pr(u,a,r,n);if(dn(u,d),s==="out-in"&&l.type!==Ge)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Di(o);s==="in-out"&&l.type!==Ge?d.delayLeave=(m,p,g)=>{const h=Sl(r,u);h[String(u.key)]=u,m[Ct]=()=>{p(),m[Ct]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function yl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ge){t=n;break}}return t}const df=ff;function Sl(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pr(e,t,n,r,i){const{appear:o,mode:a,persisted:s=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:p,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:y,onAppear:v,onAfterAppear:b,onAppearCancelled:w}=t,x=String(e.key),O=Sl(n,e),j=(M,W)=>{M&&mt(M,r,9,W)},L=(M,W)=>{const ee=W[1];j(M,W),de(M)?M.every(A=>A.length<=1)&&ee():M.length<=1&&ee()},q={mode:a,persisted:s,beforeEnter(M){let W=l;if(!n.isMounted)if(o)W=y||l;else return;M[Ct]&&M[Ct](!0);const ee=O[x];ee&&rn(e,ee)&&ee.el[Ct]&&ee.el[Ct](),j(W,[M])},enter(M){let W=c,ee=u,A=d;if(!n.isMounted)if(o)W=v||c,ee=b||u,A=w||d;else return;let U=!1;M[Gn]=V=>{U||(U=!0,V?j(A,[M]):j(ee,[M]),q.delayedLeave&&q.delayedLeave(),M[Gn]=void 0)};const _=M[Gn].bind(null,!1);W?L(W,[M,_]):_()},leave(M,W){const ee=String(e.key);if(M[Gn]&&M[Gn](!0),n.isUnmounting)return W();j(m,[M]);let A=!1;M[Ct]=_=>{A||(A=!0,W(),_?j(h,[M]):j(g,[M]),M[Ct]=void 0,O[ee]===e&&delete O[ee])};const U=M[Ct].bind(null,!1);O[ee]=e,p?L(p,[M,U]):U()},clone(M){const W=pr(M,t,n,r,i);return i&&i(W),W}};return q}function Di(e){if(Er(e))return e=Kt(e),e.children=null,e}function fs(e){if(!Er(e))return ml(e.type)&&e.children?yl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&he(n.default))return n.default()}}function dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jo(e,t=!1,n){let r=[],i=0;for(let o=0;o<e.length;o++){let a=e[o];const s=n==null?a.key:String(n)+String(a.key!=null?a.key:o);a.type===Fe?(a.patchFlag&128&&i++,r=r.concat(jo(a.children,t,s))):(t||a.type!==Ge)&&r.push(s!=null?Kt(a,{key:s}):a)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Ue(e,t){return he(e)?Me({name:e.name},t,{setup:e}):e}function Uo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ds(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Jr=new WeakMap;function ir(e,t,n,r,i=!1){if(de(e)){e.forEach((h,y)=>ir(h,t&&(de(t)?t[y]:t),n,r,i));return}if(Pn(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ir(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?_i(r.component):r.el,a=i?null:o,{i:s,r:l}=e,c=t&&t.r,u=s.refs===Ae?s.refs={}:s.refs,d=s.setupState,m=ve(d),p=d===Ae?Da:h=>ds(u,h)?!1:ye(m,h),g=(h,y)=>!(y&&ds(u,y));if(c!=null&&c!==l){if(hs(t),Ie(c))u[c]=null,p(c)&&(d[c]=null);else if(Be(c)){const h=t;g(c,h.k)&&(c.value=null),h.k&&(u[h.k]=null)}}if(he(l))wr(l,s,12,[a,u]);else{const h=Ie(l),y=Be(l);if(h||y){const v=()=>{if(e.f){const b=h?p(l)?d[l]:u[l]:g()||!e.k?l.value:u[e.k];if(i)de(b)&&To(b,o);else if(de(b))b.includes(o)||b.push(o);else if(h)u[l]=[o],p(l)&&(d[l]=u[l]);else{const w=[o];g(l,e.k)&&(l.value=w),e.k&&(u[e.k]=w)}}else h?(u[l]=a,p(l)&&(d[l]=a)):y&&(g(l,e.k)&&(l.value=a),e.k&&(u[e.k]=a))};if(a){const b=()=>{v(),Jr.delete(e)};b.id=-1,Jr.set(e,b),Je(b,n)}else hs(e),v()}}}function hs(e){const t=Jr.get(e);t&&(t.flags|=8,Jr.delete(e))}const ps=e=>e.nodeType===8;fi().requestIdleCallback;fi().cancelIdleCallback;function hf(e,t){if(ps(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(ps(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const Pn=e=>!!e.type.__asyncLoader;function He(e){he(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:i=200,hydrate:o,timeout:a,suspensible:s=!0,onError:l}=e;let c=null,u,d=0;const m=()=>(d++,c=null,p()),p=()=>{let g;return c||(g=c=t().catch(h=>{if(h=h instanceof Error?h:new Error(String(h)),l)return new Promise((y,v)=>{l(h,()=>y(m()),()=>v(h),d+1)});throw h}).then(h=>g!==c&&c?c:(h&&(h.__esModule||h[Symbol.toStringTag]==="Module")&&(h=h.default),u=h,h)))};return Ue({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,h,y){let v=!1;(h.bu||(h.bu=[])).push(()=>v=!0);const b=()=>{v||y()},w=o?()=>{const x=o(b,O=>hf(g,O));x&&(h.bum||(h.bum=[])).push(x)}:b;u?w():p().then(()=>!h.isUnmounted&&w())},get __asyncResolved(){return u},setup(){const g=qe;if(Uo(g),u)return()=>Lr(u,g);const h=w=>{c=null,Ar(w,g,13,!r)};if(s&&g.suspense||Dn)return p().then(w=>()=>Lr(w,g)).catch(w=>(h(w),()=>r?Te(r,{error:w}):null));const y=Oe(!1),v=Oe(),b=Oe(!!i);return i&&setTimeout(()=>{b.value=!1},i),a!=null&&setTimeout(()=>{if(!y.value&&!v.value){const w=new Error(`Async component timed out after ${a}ms.`);h(w),v.value=w}},a),p().then(()=>{y.value=!0,g.parent&&Er(g.parent.vnode)&&g.parent.update()}).catch(w=>{h(w),v.value=w}),()=>{if(y.value&&u)return Lr(u,g);if(v.value&&r)return Te(r,{error:v.value});if(n&&!b.value)return Lr(n,g)}}})}function Lr(e,t){const{ref:n,props:r,children:i,ce:o}=t.vnode,a=Te(e,r,i);return a.ref=n,a.ce=o,delete t.vnode.ce,a}const Er=e=>e.type.__isKeepAlive;function pf(e,t){Cl(e,"a",t)}function mf(e,t){Cl(e,"da",t)}function Cl(e,t,n=qe){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(pi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Er(i.parent.vnode)&&gf(r,t,n,i),i=i.parent}}function gf(e,t,n,r){const i=pi(t,e,r,!0);Al(()=>{To(r[t],i)},n)}function pi(e,t,n=qe,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...a)=>{Nt();const s=Pr(n),l=mt(t,n,e,a);return s(),kt(),l});return r?i.unshift(o):i.push(o),o}}const Lt=e=>(t,n=qe)=>{(!Dn||e==="sp")&&pi(e,(...r)=>t(...r),n)},mi=Lt("bm"),Fn=Lt("m"),vf=Lt("bu"),wl=Lt("u"),zo=Lt("bum"),Al=Lt("um"),_f=Lt("sp"),bf=Lt("rtg"),yf=Lt("rtc");function Sf(e,t=qe){pi("ec",e,t)}const El="components";function Cf(e,t){return xl(El,e,!0,t)||e}const Pl=Symbol.for("v-ndc");function wf(e){return Ie(e)?xl(El,e,!1)||e:e||Pl}function xl(e,t,n=!0,r=!1){const i=Ye||qe;if(i){const o=i.type;{const s=ld(o,!1);if(s&&(s===t||s===ut(t)||s===ui(ut(t))))return o}const a=ms(i[e]||o[e],t)||ms(i.appContext[e],t);return!a&&r?o:a}}function ms(e,t){return e&&(e[t]||e[ut(t)]||e[ui(ut(t))])}function Ni(e,t,n,r){let i;const o=n,a=de(e);if(a||Ie(e)){const s=a&&cn(e);let l=!1,c=!1;s&&(l=!lt(e),c=Mt(e),e=di(e)),i=new Array(e.length);for(let u=0,d=e.length;u<d;u++)i[u]=t(l?c?In(pt(e[u])):pt(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,o)}else if(_e(e))if(e[Symbol.iterator])i=Array.from(e,(s,l)=>t(s,l,void 0,o));else{const s=Object.keys(e);i=new Array(s.length);for(let l=0,c=s.length;l<c;l++){const u=s[l];i[l]=t(e[u],u,l,o)}}else i=[];return i}function Hv(e,t,n={},r,i){if(Ye.ce||Ye.parent&&Pn(Ye.parent)&&Ye.parent.ce){const c=Object.keys(n).length>0;return Qe(),Rn(Fe,null,[Te("slot",n,r)],c?-2:64)}let o=e[t];o&&o._c&&(o._d=!1),Qe();const a=o&&Tl(o(n)),s=n.key||a&&a.key,l=Rn(Fe,{key:(s&&!ht(s)?s:`_${t}`)+(!a&&r?"_fb":"")},a||[],a&&e._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Tl(e){return e.some(t=>On(t)?!(t.type===Ge||t.type===Fe&&!Tl(t.children)):!0)?e:null}const no=e=>e?ql(e)?_i(e):no(e.parent):null,or=Me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>no(e.parent),$root:e=>no(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Rl(e),$forceUpdate:e=>e.f||(e.f=()=>{Fo(e.update)}),$nextTick:e=>e.n||(e.n=sl.bind(e.proxy)),$watch:e=>lf.bind(e)}),ki=(e,t)=>e!==Ae&&!e.__isScriptSetup&&ye(e,t),Af={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:o,accessCache:a,type:s,appContext:l}=e;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(ki(r,t))return a[t]=1,r[t];if(i!==Ae&&ye(i,t))return a[t]=2,i[t];if(ye(o,t))return a[t]=3,o[t];if(n!==Ae&&ye(n,t))return a[t]=4,n[t];ro&&(a[t]=0)}}const c=or[t];let u,d;if(c)return t==="$attrs"&&Xe(e.attrs,"get",""),c(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==Ae&&ye(n,t))return a[t]=4,n[t];if(d=l.config.globalProperties,ye(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return ki(i,t)?(i[t]=n,!0):r!==Ae&&ye(r,t)?(r[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:o,type:a}},s){let l;return!!(n[s]||e!==Ae&&s[0]!=="$"&&ye(e,s)||ki(t,s)||ye(o,s)||ye(r,s)||ye(or,s)||ye(i.config.globalProperties,s)||(l=a.__cssModules)&&l[s])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function gs(e){return de(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ro=!0;function Ef(e){const t=Rl(e),n=e.proxy,r=e.ctx;ro=!1,t.beforeCreate&&vs(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:a,watch:s,provide:l,inject:c,created:u,beforeMount:d,mounted:m,beforeUpdate:p,updated:g,activated:h,deactivated:y,beforeDestroy:v,beforeUnmount:b,destroyed:w,unmounted:x,render:O,renderTracked:j,renderTriggered:L,errorCaptured:q,serverPrefetch:M,expose:W,inheritAttrs:ee,components:A,directives:U,filters:_}=t;if(c&&Pf(c,r,null),a)for(const G in a){const ie=a[G];he(ie)&&(r[G]=ie.bind(n))}if(i){const G=i.call(n,n);_e(G)&&(e.data=Sr(G))}if(ro=!0,o)for(const G in o){const ie=o[G],Z=he(ie)?ie.bind(n,n):he(ie.get)?ie.get.bind(n,n):At,ae=!he(ie)&&he(ie.set)?ie.set.bind(n):At,z=me({get:Z,set:ae});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>z.value,set:F=>z.value=F})}if(s)for(const G in s)Il(s[G],r,n,G);if(l){const G=he(l)?l.call(n):l;Reflect.ownKeys(G).forEach(ie=>{Yt(ie,G[ie])})}u&&vs(u,e,"c");function oe(G,ie){de(ie)?ie.forEach(Z=>G(Z.bind(n))):ie&&G(ie.bind(n))}if(oe(mi,d),oe(Fn,m),oe(vf,p),oe(wl,g),oe(pf,h),oe(mf,y),oe(Sf,q),oe(yf,j),oe(bf,L),oe(zo,b),oe(Al,x),oe(_f,M),de(W))if(W.length){const G=e.exposed||(e.exposed={});W.forEach(ie=>{Object.defineProperty(G,ie,{get:()=>n[ie],set:Z=>n[ie]=Z,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===At&&(e.render=O),ee!=null&&(e.inheritAttrs=ee),A&&(e.components=A),U&&(e.directives=U),M&&Uo(e)}function Pf(e,t,n=At){de(e)&&(e=io(e));for(const r in e){const i=e[r];let o;_e(i)?"default"in i?o=je(i.from||r,i.default,!0):o=je(i.from||r):o=je(i),Be(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):t[r]=o}}function vs(e,t,n){mt(de(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Il(e,t,n,r){let i=r.includes(".")?hl(n,r):()=>n[r];if(Ie(e)){const o=t[e];he(o)&&un(i,o)}else if(he(e))un(i,e.bind(n));else if(_e(e))if(de(e))e.forEach(o=>Il(o,t,n,r));else{const o=he(e.handler)?e.handler.bind(n):t[e.handler];he(o)&&un(i,o,e)}}function Rl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,s=o.get(t);let l;return s?l=s:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>Qr(l,c,a,!0)),Qr(l,t,a)),_e(t)&&o.set(t,l),l}function Qr(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Qr(e,o,n,!0),i&&i.forEach(a=>Qr(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const s=xf[a]||n&&n[a];e[a]=s?s(e[a],t[a]):t[a]}return e}const xf={data:_s,props:bs,emits:bs,methods:Jn,computed:Jn,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Jn,directives:Jn,watch:If,provide:_s,inject:Tf};function _s(e,t){return t?e?function(){return Me(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Tf(e,t){return Jn(io(e),io(t))}function io(e){if(de(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Jn(e,t){return e?Me(Object.create(null),e,t):t}function bs(e,t){return e?de(e)&&de(t)?[...new Set([...e,...t])]:Me(Object.create(null),gs(e),gs(t??{})):t}function If(e,t){if(!e)return t;if(!t)return e;const n=Me(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Ol(){return{app:null,config:{isNativeTag:Da,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rf=0;function Of(e,t){return function(r,i=null){he(r)||(r=Me({},r)),i!=null&&!_e(i)&&(i=null);const o=Ol(),a=new WeakSet,s=[];let l=!1;const c=o.app={_uid:Rf++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:ud,get config(){return o.config},set config(u){},use(u,...d){return a.has(u)||(u&&he(u.install)?(a.add(u),u.install(c,...d)):he(u)&&(a.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,m){if(!l){const p=c._ceVNode||Te(r,i);return p.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(p,u,m),l=!0,c._container=u,u.__vue_app__=c,_i(p.component)}},onUnmount(u){s.push(u)},unmount(){l&&(mt(s,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=xn;xn=c;try{return u()}finally{xn=d}}};return c}}let xn=null;const Df=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ut(t)}Modifiers`]||e[`${mn(t)}Modifiers`];function Nf(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ae;let i=n;const o=t.startsWith("update:"),a=o&&Df(r,t.slice(7));a&&(a.trim&&(i=n.map(u=>Ie(u)?u.trim():u)),a.number&&(i=n.map(Io)));let s,l=r[s=xi(t)]||r[s=xi(ut(t))];!l&&o&&(l=r[s=xi(mn(t))]),l&&mt(l,e,6,i);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,mt(c,e,6,i)}}const kf=new WeakMap;function Dl(e,t,n=!1){const r=n?kf:t.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let a={},s=!1;if(!he(e)){const l=c=>{const u=Dl(c,t,!0);u&&(s=!0,Me(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!s?(_e(e)&&r.set(e,null),null):(de(o)?o.forEach(l=>a[l]=null):Me(a,o),_e(e)&&r.set(e,a),a)}function gi(e,t){return!e||!ai(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,mn(t))||ye(e,t))}function ys(e){const{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[o],slots:a,attrs:s,emit:l,render:c,renderCache:u,props:d,data:m,setupState:p,ctx:g,inheritAttrs:h}=e,y=Zr(e);let v,b;try{if(n.shapeFlag&4){const x=i||r,O=x;v=wt(c.call(O,x,u,d,p,m,g)),b=s}else{const x=t;v=wt(x.length>1?x(d,{attrs:s,slots:a,emit:l}):x(d,null)),b=t.props?s:Mf(s)}}catch(x){sr.length=0,Ar(x,e,1),v=Te(Ge)}let w=v;if(b&&h!==!1){const x=Object.keys(b),{shapeFlag:O}=w;x.length&&O&7&&(o&&x.some(xo)&&(b=Lf(b,o)),w=Kt(w,b,!1,!0))}return n.dirs&&(w=Kt(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&dn(w,n.transition),v=w,Zr(y),v}const Mf=e=>{let t;for(const n in e)(n==="class"||n==="style"||ai(n))&&((t||(t={}))[n]=e[n]);return t},Lf=(e,t)=>{const n={};for(const r in e)(!xo(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ff(e,t,n){const{props:r,children:i,component:o}=e,{props:a,children:s,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ss(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(Nl(a,r,m)&&!gi(c,m))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?Ss(r,a,c):!0:!!a;return!1}function Ss(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(Nl(t,e,o)&&!gi(n,o))return!0}return!1}function Nl(e,t,n){const r=e[n],i=t[n];return n==="style"&&_e(r)&&_e(i)?!Ro(r,i):r!==i}function Bf({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const kl={},Ml=()=>Object.create(kl),Ll=e=>Object.getPrototypeOf(e)===kl;function jf(e,t,n,r=!1){const i={},o=Ml();e.propsDefaults=Object.create(null),Fl(e,t,i,o);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:tl(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function Uf(e,t,n,r){const{props:i,attrs:o,vnode:{patchFlag:a}}=e,s=ve(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(gi(e.emitsOptions,m))continue;const p=t[m];if(l)if(ye(o,m))p!==o[m]&&(o[m]=p,c=!0);else{const g=ut(m);i[g]=oo(l,s,g,p,e,!1)}else p!==o[m]&&(o[m]=p,c=!0)}}}else{Fl(e,t,i,o)&&(c=!0);let u;for(const d in s)(!t||!ye(t,d)&&((u=mn(d))===d||!ye(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=oo(l,s,d,void 0,e,!0)):delete i[d]);if(o!==s)for(const d in o)(!t||!ye(t,d))&&(delete o[d],c=!0)}c&&Ot(e.attrs,"set","")}function Fl(e,t,n,r){const[i,o]=e.propsOptions;let a=!1,s;if(t)for(let l in t){if(er(l))continue;const c=t[l];let u;i&&ye(i,u=ut(l))?!o||!o.includes(u)?n[u]=c:(s||(s={}))[u]=c:gi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(o){const l=ve(n),c=s||Ae;for(let u=0;u<o.length;u++){const d=o[u];n[d]=oo(i,l,d,c[d],e,!ye(c,d))}}return a}function oo(e,t,n,r,i,o){const a=e[n];if(a!=null){const s=ye(a,"default");if(s&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&he(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=Pr(i);r=c[n]=l.call(null,t),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}a[0]&&(o&&!s?r=!1:a[1]&&(r===""||r===mn(n))&&(r=!0))}return r}const zf=new WeakMap;function Bl(e,t,n=!1){const r=n?zf:t.propsCache,i=r.get(e);if(i)return i;const o=e.props,a={},s=[];let l=!1;if(!he(e)){const u=d=>{l=!0;const[m,p]=Bl(d,t,!0);Me(a,m),p&&s.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return _e(e)&&r.set(e,Cn),Cn;if(de(o))for(let u=0;u<o.length;u++){const d=ut(o[u]);Cs(d)&&(a[d]=Ae)}else if(o)for(const u in o){const d=ut(u);if(Cs(d)){const m=o[u],p=a[d]=de(m)||he(m)?{type:m}:Me({},m),g=p.type;let h=!1,y=!0;if(de(g))for(let v=0;v<g.length;++v){const b=g[v],w=he(b)&&b.name;if(w==="Boolean"){h=!0;break}else w==="String"&&(y=!1)}else h=he(g)&&g.name==="Boolean";p[0]=h,p[1]=y,(h||ye(p,"default"))&&s.push(d)}}const c=[a,s];return _e(e)&&r.set(e,c),c}function Cs(e){return e[0]!=="$"&&!er(e)}const $o=e=>e==="_"||e==="_ctx"||e==="$stable",Ho=e=>de(e)?e.map(wt):[wt(e)],$f=(e,t,n)=>{if(t._n)return t;const r=En((...i)=>Ho(t(...i)),n);return r._c=!1,r},jl=(e,t,n)=>{const r=e._ctx;for(const i in e){if($o(i))continue;const o=e[i];if(he(o))t[i]=$f(i,o,r);else if(o!=null){const a=Ho(o);t[i]=()=>a}}},Ul=(e,t)=>{const n=Ho(t);e.slots.default=()=>n},zl=(e,t,n)=>{for(const r in t)(n||!$o(r))&&(e[r]=t[r])},Hf=(e,t,n)=>{const r=e.slots=Ml();if(e.vnode.shapeFlag&32){const i=t._;i?(zl(r,t,n),n&&Fa(r,"_",i,!0)):jl(t,r)}else t&&Ul(e,t)},Wf=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,a=Ae;if(r.shapeFlag&32){const s=t._;s?n&&s===1?o=!1:zl(i,t,n):(o=!t.$stable,jl(t,i)),a=t}else t&&(Ul(e,t),a={default:1});if(o)for(const s in i)!$o(s)&&a[s]==null&&delete i[s]},Je=Kf;function Vf(e){return Gf(e)}function Gf(e,t){const n=fi();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:a,createText:s,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:m,setScopeId:p=At,insertStaticContent:g}=e,h=(E,I,f,R=null,T=null,S=null,C=void 0,P=null,k=!!I.dynamicChildren)=>{if(E===I)return;E&&!rn(E,I)&&(R=H(E),F(E,T,S,!0),E=null),I.patchFlag===-2&&(k=!1,I.dynamicChildren=null);const{type:N,ref:D,shapeFlag:B}=I;switch(N){case vi:y(E,I,f,R);break;case Ge:v(E,I,f,R);break;case Hr:E==null&&b(I,f,R,C);break;case Fe:A(E,I,f,R,T,S,C,P,k);break;default:B&1?O(E,I,f,R,T,S,C,P,k):B&6?U(E,I,f,R,T,S,C,P,k):(B&64||B&128)&&N.process(E,I,f,R,T,S,C,P,k,re)}D!=null&&T?ir(D,E&&E.ref,S,I||E,!I):D==null&&E&&E.ref!=null&&ir(E.ref,null,S,E,!0)},y=(E,I,f,R)=>{if(E==null)r(I.el=s(I.children),f,R);else{const T=I.el=E.el;I.children!==E.children&&c(T,I.children)}},v=(E,I,f,R)=>{E==null?r(I.el=l(I.children||""),f,R):I.el=E.el},b=(E,I,f,R)=>{[E.el,E.anchor]=g(E.children,I,f,R,E.el,E.anchor)},w=({el:E,anchor:I},f,R)=>{let T;for(;E&&E!==I;)T=m(E),r(E,f,R),E=T;r(I,f,R)},x=({el:E,anchor:I})=>{let f;for(;E&&E!==I;)f=m(E),i(E),E=f;i(I)},O=(E,I,f,R,T,S,C,P,k)=>{if(I.type==="svg"?C="svg":I.type==="math"&&(C="mathml"),E==null)j(I,f,R,T,S,C,P,k);else{const N=E.el&&E.el._isVueCE?E.el:null;try{N&&N._beginPatch(),M(E,I,T,S,C,P,k)}finally{N&&N._endPatch()}}},j=(E,I,f,R,T,S,C,P)=>{let k,N;const{props:D,shapeFlag:B,transition:Y,dirs:$}=E;if(k=E.el=a(E.type,S,D&&D.is,D),B&8?u(k,E.children):B&16&&q(E.children,k,null,R,T,Mi(E,S),C,P),$&&Xt(E,null,R,"created"),L(k,E,E.scopeId,C,R),D){for(const ue in D)ue!=="value"&&!er(ue)&&o(k,ue,null,D[ue],S,R);"value"in D&&o(k,"value",null,D.value,S),(N=D.onVnodeBeforeMount)&&vt(N,R,E)}$&&Xt(E,null,R,"beforeMount");const Q=qf(T,Y);Q&&Y.beforeEnter(k),r(k,I,f),((N=D&&D.onVnodeMounted)||Q||$)&&Je(()=>{N&&vt(N,R,E),Q&&Y.enter(k),$&&Xt(E,null,R,"mounted")},T)},L=(E,I,f,R,T)=>{if(f&&p(E,f),R)for(let S=0;S<R.length;S++)p(E,R[S]);if(T){let S=T.subTree;if(I===S||Wl(S.type)&&(S.ssContent===I||S.ssFallback===I)){const C=T.vnode;L(E,C,C.scopeId,C.slotScopeIds,T.parent)}}},q=(E,I,f,R,T,S,C,P,k=0)=>{for(let N=k;N<E.length;N++){const D=E[N]=P?Rt(E[N]):wt(E[N]);h(null,D,I,f,R,T,S,C,P)}},M=(E,I,f,R,T,S,C)=>{const P=I.el=E.el;let{patchFlag:k,dynamicChildren:N,dirs:D}=I;k|=E.patchFlag&16;const B=E.props||Ae,Y=I.props||Ae;let $;if(f&&en(f,!1),($=Y.onVnodeBeforeUpdate)&&vt($,f,I,E),D&&Xt(I,E,f,"beforeUpdate"),f&&en(f,!0),(B.innerHTML&&Y.innerHTML==null||B.textContent&&Y.textContent==null)&&u(P,""),N?W(E.dynamicChildren,N,P,f,R,Mi(I,T),S):C||ie(E,I,P,null,f,R,Mi(I,T),S,!1),k>0){if(k&16)ee(P,B,Y,f,T);else if(k&2&&B.class!==Y.class&&o(P,"class",null,Y.class,T),k&4&&o(P,"style",B.style,Y.style,T),k&8){const Q=I.dynamicProps;for(let ue=0;ue<Q.length;ue++){const se=Q[ue],Ce=B[se],Ne=Y[se];(Ne!==Ce||se==="value")&&o(P,se,Ce,Ne,T,f)}}k&1&&E.children!==I.children&&u(P,I.children)}else!C&&N==null&&ee(P,B,Y,f,T);(($=Y.onVnodeUpdated)||D)&&Je(()=>{$&&vt($,f,I,E),D&&Xt(I,E,f,"updated")},R)},W=(E,I,f,R,T,S,C)=>{for(let P=0;P<I.length;P++){const k=E[P],N=I[P],D=k.el&&(k.type===Fe||!rn(k,N)||k.shapeFlag&198)?d(k.el):f;h(k,N,D,null,R,T,S,C,!0)}},ee=(E,I,f,R,T)=>{if(I!==f){if(I!==Ae)for(const S in I)!er(S)&&!(S in f)&&o(E,S,I[S],null,T,R);for(const S in f){if(er(S))continue;const C=f[S],P=I[S];C!==P&&S!=="value"&&o(E,S,P,C,T,R)}"value"in f&&o(E,"value",I.value,f.value,T)}},A=(E,I,f,R,T,S,C,P,k)=>{const N=I.el=E?E.el:s(""),D=I.anchor=E?E.anchor:s("");let{patchFlag:B,dynamicChildren:Y,slotScopeIds:$}=I;$&&(P=P?P.concat($):$),E==null?(r(N,f,R),r(D,f,R),q(I.children||[],f,D,T,S,C,P,k)):B>0&&B&64&&Y&&E.dynamicChildren&&E.dynamicChildren.length===Y.length?(W(E.dynamicChildren,Y,f,T,S,C,P),(I.key!=null||T&&I===T.subTree)&&Wo(E,I,!0)):ie(E,I,f,D,T,S,C,P,k)},U=(E,I,f,R,T,S,C,P,k)=>{I.slotScopeIds=P,E==null?I.shapeFlag&512?T.ctx.activate(I,f,R,C,k):_(I,f,R,T,S,C,k):V(E,I,k)},_=(E,I,f,R,T,S,C)=>{const P=E.component=rd(E,R,T);if(Er(E)&&(P.ctx.renderer=re),id(P,!1,C),P.asyncDep){if(T&&T.registerDep(P,oe,C),!E.el){const k=P.subTree=Te(Ge);v(null,k,I,f),E.placeholder=k.el}}else oe(P,E,I,f,T,S,C)},V=(E,I,f)=>{const R=I.component=E.component;if(Ff(E,I,f))if(R.asyncDep&&!R.asyncResolved){G(R,I,f);return}else R.next=I,R.update();else I.el=E.el,R.vnode=I},oe=(E,I,f,R,T,S,C)=>{const P=()=>{if(E.isMounted){let{next:B,bu:Y,u:$,parent:Q,vnode:ue}=E;{const Ke=$l(E);if(Ke){B&&(B.el=ue.el,G(E,B,C)),Ke.asyncDep.then(()=>{Je(()=>{E.isUnmounted||N()},T)});return}}let se=B,Ce;en(E,!1),B?(B.el=ue.el,G(E,B,C)):B=ue,Y&&zr(Y),(Ce=B.props&&B.props.onVnodeBeforeUpdate)&&vt(Ce,Q,B,ue),en(E,!0);const Ne=ys(E),De=E.subTree;E.subTree=Ne,h(De,Ne,d(De.el),H(De),E,T,S),B.el=Ne.el,se===null&&Bf(E,Ne.el),$&&Je($,T),(Ce=B.props&&B.props.onVnodeUpdated)&&Je(()=>vt(Ce,Q,B,ue),T)}else{let B;const{el:Y,props:$}=I,{bm:Q,m:ue,parent:se,root:Ce,type:Ne}=E,De=Pn(I);en(E,!1),Q&&zr(Q),!De&&(B=$&&$.onVnodeBeforeMount)&&vt(B,se,I),en(E,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Ne);const Ke=E.subTree=ys(E);h(null,Ke,f,R,E,T,S),I.el=Ke.el}if(ue&&Je(ue,T),!De&&(B=$&&$.onVnodeMounted)){const Ke=I;Je(()=>vt(B,se,Ke),T)}(I.shapeFlag&256||se&&Pn(se.vnode)&&se.vnode.shapeFlag&256)&&E.a&&Je(E.a,T),E.isMounted=!0,I=f=R=null}};E.scope.on();const k=E.effect=new za(P);E.scope.off();const N=E.update=k.run.bind(k),D=E.job=k.runIfDirty.bind(k);D.i=E,D.id=E.uid,k.scheduler=()=>Fo(D),en(E,!0),N()},G=(E,I,f)=>{I.component=E;const R=E.vnode.props;E.vnode=I,E.next=null,Uf(E,I.props,R,f),Wf(E,I.children,f),Nt(),as(E),kt()},ie=(E,I,f,R,T,S,C,P,k=!1)=>{const N=E&&E.children,D=E?E.shapeFlag:0,B=I.children,{patchFlag:Y,shapeFlag:$}=I;if(Y>0){if(Y&128){ae(N,B,f,R,T,S,C,P,k);return}else if(Y&256){Z(N,B,f,R,T,S,C,P,k);return}}$&8?(D&16&&ge(N,T,S),B!==N&&u(f,B)):D&16?$&16?ae(N,B,f,R,T,S,C,P,k):ge(N,T,S,!0):(D&8&&u(f,""),$&16&&q(B,f,R,T,S,C,P,k))},Z=(E,I,f,R,T,S,C,P,k)=>{E=E||Cn,I=I||Cn;const N=E.length,D=I.length,B=Math.min(N,D);let Y;for(Y=0;Y<B;Y++){const $=I[Y]=k?Rt(I[Y]):wt(I[Y]);h(E[Y],$,f,null,T,S,C,P,k)}N>D?ge(E,T,S,!0,!1,B):q(I,f,R,T,S,C,P,k,B)},ae=(E,I,f,R,T,S,C,P,k)=>{let N=0;const D=I.length;let B=E.length-1,Y=D-1;for(;N<=B&&N<=Y;){const $=E[N],Q=I[N]=k?Rt(I[N]):wt(I[N]);if(rn($,Q))h($,Q,f,null,T,S,C,P,k);else break;N++}for(;N<=B&&N<=Y;){const $=E[B],Q=I[Y]=k?Rt(I[Y]):wt(I[Y]);if(rn($,Q))h($,Q,f,null,T,S,C,P,k);else break;B--,Y--}if(N>B){if(N<=Y){const $=Y+1,Q=$<D?I[$].el:R;for(;N<=Y;)h(null,I[N]=k?Rt(I[N]):wt(I[N]),f,Q,T,S,C,P,k),N++}}else if(N>Y)for(;N<=B;)F(E[N],T,S,!0),N++;else{const $=N,Q=N,ue=new Map;for(N=Q;N<=Y;N++){const $e=I[N]=k?Rt(I[N]):wt(I[N]);$e.key!=null&&ue.set($e.key,N)}let se,Ce=0;const Ne=Y-Q+1;let De=!1,Ke=0;const we=new Array(Ne);for(N=0;N<Ne;N++)we[N]=0;for(N=$;N<=B;N++){const $e=E[N];if(Ce>=Ne){F($e,T,S,!0);continue}let ke;if($e.key!=null)ke=ue.get($e.key);else for(se=Q;se<=Y;se++)if(we[se-Q]===0&&rn($e,I[se])){ke=se;break}ke===void 0?F($e,T,S,!0):(we[ke-Q]=N+1,ke>=Ke?Ke=ke:De=!0,h($e,I[ke],f,null,T,S,C,P,k),Ce++)}const Qt=De?Yf(we):Cn;for(se=Qt.length-1,N=Ne-1;N>=0;N--){const $e=Q+N,ke=I[$e],Hn=I[$e+1],Rr=$e+1<D?Hn.el||Hl(Hn):R;we[N]===0?h(null,ke,f,Rr,T,S,C,P,k):De&&(se<0||N!==Qt[se]?z(ke,f,Rr,2):se--)}}},z=(E,I,f,R,T=null)=>{const{el:S,type:C,transition:P,children:k,shapeFlag:N}=E;if(N&6){z(E.component.subTree,I,f,R);return}if(N&128){E.suspense.move(I,f,R);return}if(N&64){C.move(E,I,f,re);return}if(C===Fe){r(S,I,f);for(let B=0;B<k.length;B++)z(k[B],I,f,R);r(E.anchor,I,f);return}if(C===Hr){w(E,I,f);return}if(R!==2&&N&1&&P)if(R===0)P.beforeEnter(S),r(S,I,f),Je(()=>P.enter(S),T);else{const{leave:B,delayLeave:Y,afterLeave:$}=P,Q=()=>{E.ctx.isUnmounted?i(S):r(S,I,f)},ue=()=>{S._isLeaving&&S[Ct](!0),B(S,()=>{Q(),$&&$()})};Y?Y(S,Q,ue):ue()}else r(S,I,f)},F=(E,I,f,R=!1,T=!1)=>{const{type:S,props:C,ref:P,children:k,dynamicChildren:N,shapeFlag:D,patchFlag:B,dirs:Y,cacheIndex:$}=E;if(B===-2&&(T=!1),P!=null&&(Nt(),ir(P,null,f,E,!0),kt()),$!=null&&(I.renderCache[$]=void 0),D&256){I.ctx.deactivate(E);return}const Q=D&1&&Y,ue=!Pn(E);let se;if(ue&&(se=C&&C.onVnodeBeforeUnmount)&&vt(se,I,E),D&6)X(E.component,f,R);else{if(D&128){E.suspense.unmount(f,R);return}Q&&Xt(E,null,I,"beforeUnmount"),D&64?E.type.remove(E,I,f,re,R):N&&!N.hasOnce&&(S!==Fe||B>0&&B&64)?ge(N,I,f,!1,!0):(S===Fe&&B&384||!T&&D&16)&&ge(k,I,f),R&&le(E)}(ue&&(se=C&&C.onVnodeUnmounted)||Q)&&Je(()=>{se&&vt(se,I,E),Q&&Xt(E,null,I,"unmounted")},f)},le=E=>{const{type:I,el:f,anchor:R,transition:T}=E;if(I===Fe){ne(f,R);return}if(I===Hr){x(E);return}const S=()=>{i(f),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(E.shapeFlag&1&&T&&!T.persisted){const{leave:C,delayLeave:P}=T,k=()=>C(f,S);P?P(E.el,S,k):k()}else S()},ne=(E,I)=>{let f;for(;E!==I;)f=m(E),i(E),E=f;i(I)},X=(E,I,f)=>{const{bum:R,scope:T,job:S,subTree:C,um:P,m:k,a:N}=E;ws(k),ws(N),R&&zr(R),T.stop(),S&&(S.flags|=8,F(C,E,I,f)),P&&Je(P,I),Je(()=>{E.isUnmounted=!0},I)},ge=(E,I,f,R=!1,T=!1,S=0)=>{for(let C=S;C<E.length;C++)F(E[C],I,f,R,T)},H=E=>{if(E.shapeFlag&6)return H(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=m(E.anchor||E.el),f=I&&I[pl];return f?m(f):I};let J=!1;const K=(E,I,f)=>{let R;E==null?I._vnode&&(F(I._vnode,null,null,!0),R=I._vnode.component):h(I._vnode||null,E,I,null,null,null,f),I._vnode=E,J||(J=!0,as(R),ll(),J=!1)},re={p:h,um:F,m:z,r:le,mt:_,mc:q,pc:ie,pbc:W,n:H,o:e};return{render:K,hydrate:void 0,createApp:Of(K)}}function Mi({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function en({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wo(e,t,n=!1){const r=e.children,i=t.children;if(de(r)&&de(i))for(let o=0;o<r.length;o++){const a=r[o];let s=i[o];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[o]=Rt(i[o]),s.el=a.el),!n&&s.patchFlag!==-2&&Wo(a,s)),s.type===vi&&(s.patchFlag===-1&&(s=i[o]=Rt(s)),s.el=a.el),s.type===Ge&&!s.el&&(s.el=a.el)}}function Yf(e){const t=e.slice(),n=[0];let r,i,o,a,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(o=0,a=n.length-1;o<a;)s=o+a>>1,e[n[s]]<c?o=s+1:a=s;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,a=n[o-1];o-- >0;)n[o]=a,a=t[a];return n}function $l(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$l(t)}function ws(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Hl(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Hl(t.subTree):null}const Wl=e=>e.__isSuspense;function Kf(e,t){t&&t.pendingBranch?de(e)?t.effects.push(...e):t.effects.push(e):of(e)}const Fe=Symbol.for("v-fgt"),vi=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Hr=Symbol.for("v-stc"),sr=[];let st=null;function Qe(e=!1){sr.push(st=e?null:[])}function Zf(){sr.pop(),st=sr[sr.length-1]||null}let mr=1;function Xr(e,t=!1){mr+=e,e<0&&st&&t&&(st.hasOnce=!0)}function Vl(e){return e.dynamicChildren=mr>0?st||Cn:null,Zf(),mr>0&&st&&st.push(e),e}function St(e,t,n,r,i,o){return Vl(pe(e,t,n,r,i,o,!0))}function Rn(e,t,n,r,i){return Vl(Te(e,t,n,r,i,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Gl=({key:e})=>e??null,Wr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ie(e)||Be(e)||he(e)?{i:Ye,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,i=null,o=e===Fe?0:1,a=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Gl(t),ref:t&&Wr(t),scopeId:ul,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ye};return s?(Vo(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Ie(n)?8:16),mr>0&&!a&&st&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&st.push(l),l}const Te=Jf;function Jf(e,t=null,n=null,r=0,i=null,o=!1){if((!e||e===Pl)&&(e=Ge),On(e)){const s=Kt(e,t,!0);return n&&Vo(s,n),mr>0&&!o&&st&&(s.shapeFlag&6?st[st.indexOf(e)]=s:st.push(s)),s.patchFlag=-2,s}if(cd(e)&&(e=e.__vccOpts),t){t=Qf(t);let{class:s,style:l}=t;s&&!Ie(s)&&(t.class=ur(s)),_e(l)&&(hi(l)&&!de(l)&&(l=Me({},l)),t.style=cr(l))}const a=Ie(e)?1:Wl(e)?128:ml(e)?64:_e(e)?4:he(e)?2:0;return pe(e,t,n,r,i,a,o,!0)}function Qf(e){return e?hi(e)||Ll(e)?Me({},e):e:null}function Kt(e,t,n=!1,r=!1){const{props:i,ref:o,patchFlag:a,children:s,transition:l}=e,c=t?ed(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Gl(c),ref:t&&t.ref?n&&o?de(o)?o.concat(Wr(t)):[o,Wr(t)]:Wr(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Fe?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&dn(u,l.clone(u)),u}function ei(e=" ",t=0){return Te(vi,null,e,t)}function Xf(e,t){const n=Te(Hr,null,e);return n.staticCount=t,n}function so(e="",t=!1){return t?(Qe(),Rn(Ge,null,e)):Te(Ge,null,e)}function wt(e){return e==null||typeof e=="boolean"?Te(Ge):de(e)?Te(Fe,null,e.slice()):On(e)?Rt(e):Te(vi,null,String(e))}function Rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Vo(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(de(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Vo(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!Ll(t)?t._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),r&64?(n=16,t=[ei(t)]):n=8);e.children=t,e.shapeFlag|=n}function ed(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=ur([t.class,r.class]));else if(i==="style")t.style=cr([t.style,r.style]);else if(ai(i)){const o=t[i],a=r[i];a&&o!==a&&!(de(o)&&o.includes(a))&&(t[i]=o?[].concat(o,a):a)}else i!==""&&(t[i]=r[i])}return t}function vt(e,t,n,r=null){mt(e,t,7,[n,r])}const td=Ol();let nd=0;function rd(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||td,o={uid:nd++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bl(r,i),emitsOptions:Dl(r,i),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Nf.bind(null,o),e.ce&&e.ce(o),o}let qe=null;const Go=()=>qe||Ye;let ti,ao;{const e=fi(),t=(n,r)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(r),o=>{i.length>1?i.forEach(a=>a(o)):i[0](o)}};ti=t("__VUE_INSTANCE_SETTERS__",n=>qe=n),ao=t("__VUE_SSR_SETTERS__",n=>Dn=n)}const Pr=e=>{const t=qe;return ti(e),e.scope.on(),()=>{e.scope.off(),ti(t)}},As=()=>{qe&&qe.scope.off(),ti(null)};function ql(e){return e.vnode.shapeFlag&4}let Dn=!1;function id(e,t=!1,n=!1){t&&ao(t);const{props:r,children:i}=e.vnode,o=ql(e);jf(e,r,o,t),Hf(e,i,n||t);const a=o?od(e,t):void 0;return t&&ao(!1),a}function od(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Af);const{setup:r}=n;if(r){Nt();const i=e.setupContext=r.length>1?ad(e):null,o=Pr(e),a=wr(r,e,0,[e.props,i]),s=ka(a);if(kt(),o(),(s||e.sp)&&!Pn(e)&&Uo(e),s){if(a.then(As,As),t)return a.then(l=>{Es(e,l)}).catch(l=>{Ar(l,e,0)});e.asyncDep=a}else Es(e,a)}else Yl(e)}function Es(e,t,n){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=il(t)),Yl(e)}function Yl(e,t,n){const r=e.type;e.render||(e.render=r.render||At);{const i=Pr(e);Nt();try{Ef(e)}finally{kt(),i()}}}const sd={get(e,t){return Xe(e,"get",""),e[t]}};function ad(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sd),slots:e.slots,emit:e.emit,expose:t}}function _i(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(il(Xi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in or)return or[n](e)},has(t,n){return n in t||n in or}})):e.proxy}function ld(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function cd(e){return he(e)&&"__vccOpts"in e}const me=(e,t)=>Xu(e,t,Dn);function te(e,t,n){try{Xr(-1);const r=arguments.length;return r===2?_e(t)&&!de(t)?On(t)?Te(e,null,[t]):Te(e,t):Te(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&On(n)&&(n=[n]),Te(e,t,n))}finally{Xr(1)}}const ud="3.5.28";/**
* @vue/runtime-dom v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lo;const Ps=typeof window<"u"&&window.trustedTypes;if(Ps)try{lo=Ps.createPolicy("vue",{createHTML:e=>e})}catch{}const Kl=lo?e=>lo.createHTML(e):e=>e,fd="http://www.w3.org/2000/svg",dd="http://www.w3.org/1998/Math/MathML",It=typeof document<"u"?document:null,xs=It&&It.createElement("template"),hd={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t==="svg"?It.createElementNS(fd,e):t==="mathml"?It.createElementNS(dd,e):n?It.createElement(e,{is:n}):It.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>It.createTextNode(e),createComment:e=>It.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>It.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const a=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{xs.innerHTML=Kl(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const s=xs.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Bt="transition",qn="animation",Nn=Symbol("_vtc"),Zl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Jl=Me({},_l,Zl),pd=e=>(e.displayName="Transition",e.props=Jl,e),Ql=pd((e,{slots:t})=>te(df,Xl(e),t)),tn=(e,t=[])=>{de(e)?e.forEach(n=>n(...t)):e&&e(...t)},Ts=e=>e?de(e)?e.some(t=>t.length>1):e.length>1:!1;function Xl(e){const t={};for(const A in e)A in Zl||(t[A]=e[A]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=a,appearToClass:u=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=md(i),h=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:b,onEnterCancelled:w,onLeave:x,onLeaveCancelled:O,onBeforeAppear:j=v,onAppear:L=b,onAppearCancelled:q=w}=t,M=(A,U,_,V)=>{A._enterCancelled=V,zt(A,U?u:s),zt(A,U?c:a),_&&_()},W=(A,U)=>{A._isLeaving=!1,zt(A,d),zt(A,p),zt(A,m),U&&U()},ee=A=>(U,_)=>{const V=A?L:b,oe=()=>M(U,A,_);tn(V,[U,oe]),Is(()=>{zt(U,A?l:o),bt(U,A?u:s),Ts(V)||Rs(U,r,h,oe)})};return Me(t,{onBeforeEnter(A){tn(v,[A]),bt(A,o),bt(A,a)},onBeforeAppear(A){tn(j,[A]),bt(A,l),bt(A,c)},onEnter:ee(!1),onAppear:ee(!0),onLeave(A,U){A._isLeaving=!0;const _=()=>W(A,U);bt(A,d),A._enterCancelled?(bt(A,m),co(A)):(co(A),bt(A,m)),Is(()=>{A._isLeaving&&(zt(A,d),bt(A,p),Ts(x)||Rs(A,r,y,_))}),tn(x,[A,_])},onEnterCancelled(A){M(A,!1,void 0,!0),tn(w,[A])},onAppearCancelled(A){M(A,!0,void 0,!0),tn(q,[A])},onLeaveCancelled(A){W(A),tn(O,[A])}})}function md(e){if(e==null)return null;if(_e(e))return[Li(e.enter),Li(e.leave)];{const t=Li(e);return[t,t]}}function Li(e){return _u(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Nn]||(e[Nn]=new Set)).add(t)}function zt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Nn];n&&(n.delete(t),n.size||(e[Nn]=void 0))}function Is(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gd=0;function Rs(e,t,n,r){const i=e._endId=++gd,o=()=>{i===e._endId&&r()};if(n!=null)return setTimeout(o,n);const{type:a,timeout:s,propCount:l}=ec(e,t);if(!a)return r();const c=a+"end";let u=0;const d=()=>{e.removeEventListener(c,m),o()},m=p=>{p.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},s+1),e.addEventListener(c,m)}function ec(e,t){const n=window.getComputedStyle(e),r=g=>(n[g]||"").split(", "),i=r(`${Bt}Delay`),o=r(`${Bt}Duration`),a=Os(i,o),s=r(`${qn}Delay`),l=r(`${qn}Duration`),c=Os(s,l);let u=null,d=0,m=0;t===Bt?a>0&&(u=Bt,d=a,m=o.length):t===qn?c>0&&(u=qn,d=c,m=l.length):(d=Math.max(a,c),u=d>0?a>c?Bt:qn:null,m=u?u===Bt?o.length:l.length:0);const p=u===Bt&&/\b(?:transform|all)(?:,|$)/.test(r(`${Bt}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:p}}function Os(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Ds(n)+Ds(e[r])))}function Ds(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function co(e){return(e?e.ownerDocument:document).body.offsetHeight}function vd(e,t,n){const r=e[Nn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ni=Symbol("_vod"),tc=Symbol("_vsh"),_d={name:"show",beforeMount(e,{value:t},{transition:n}){e[ni]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Yn(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Yn(e,!0),r.enter(e)):r.leave(e,()=>{Yn(e,!1)}):Yn(e,t))},beforeUnmount(e,{value:t}){Yn(e,t)}};function Yn(e,t){e.style.display=t?e[ni]:"none",e[tc]=!t}const bd=Symbol(""),yd=/(?:^|;)\s*display\s*:/;function Sd(e,t,n){const r=e.style,i=Ie(n);let o=!1;if(n&&!i){if(t)if(Ie(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();n[s]==null&&Vr(r,s,"")}else for(const a in t)n[a]==null&&Vr(r,a,"");for(const a in n)a==="display"&&(o=!0),Vr(r,a,n[a])}else if(i){if(t!==n){const a=r[bd];a&&(n+=";"+a),r.cssText=n,o=yd.test(n)}}else t&&e.removeAttribute("style");ni in e&&(e[ni]=o?r.display:"",e[tc]&&(r.display="none"))}const Ns=/\s*!important$/;function Vr(e,t,n){if(de(n))n.forEach(r=>Vr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cd(e,t);Ns.test(n)?e.setProperty(mn(r),n.replace(Ns,""),"important"):e[r]=n}}const ks=["Webkit","Moz","ms"],Fi={};function Cd(e,t){const n=Fi[t];if(n)return n;let r=ut(t);if(r!=="filter"&&r in e)return Fi[t]=r;r=ui(r);for(let i=0;i<ks.length;i++){const o=ks[i]+r;if(o in e)return Fi[t]=o}return t}const Ms="http://www.w3.org/1999/xlink";function Ls(e,t,n,r,i,o=Au(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ms,t.slice(6,t.length)):e.setAttributeNS(Ms,t,n):n==null||o&&!Ba(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ht(n)?String(n):n)}function Fs(e,t,n,r,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Kl(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const s=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(s!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const s=typeof e[t];s==="boolean"?n=Ba(n):n==null&&s==="string"?(n="",a=!0):s==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(i||t)}function bn(e,t,n,r){e.addEventListener(t,n,r)}function wd(e,t,n,r){e.removeEventListener(t,n,r)}const Bs=Symbol("_vei");function Ad(e,t,n,r,i=null){const o=e[Bs]||(e[Bs]={}),a=o[t];if(r&&a)a.value=r;else{const[s,l]=Ed(t);if(r){const c=o[t]=Td(r,i);bn(e,s,c,l)}else a&&(wd(e,s,a,l),o[t]=void 0)}}const js=/(?:Once|Passive|Capture)$/;function Ed(e){let t;if(js.test(e)){t={};let r;for(;r=e.match(js);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):mn(e.slice(2)),t]}let Bi=0;const Pd=Promise.resolve(),xd=()=>Bi||(Pd.then(()=>Bi=0),Bi=Date.now());function Td(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;mt(Id(r,n.value),t,5,[r])};return n.value=e,n.attached=xd(),n}function Id(e,t){if(de(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Us=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Rd=(e,t,n,r,i,o)=>{const a=i==="svg";t==="class"?vd(e,r,a):t==="style"?Sd(e,n,r):ai(t)?xo(t)||Ad(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Od(e,t,r,a))?(Fs(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ls(e,t,r,a,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ie(r))?Fs(e,ut(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ls(e,t,r,a))};function Od(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&Us(t)&&he(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Us(t)&&Ie(n)?!1:t in e}const nc=new WeakMap,rc=new WeakMap,ri=Symbol("_moveCb"),zs=Symbol("_enterCb"),Dd=e=>(delete e.props.mode,e),Nd=Dd({name:"TransitionGroup",props:Me({},Jl,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Go(),r=vl();let i,o;return wl(()=>{if(!i.length)return;const a=e.moveClass||`${e.name||"v"}-move`;if(!Bd(i[0].el,n.vnode.el,a)){i=[];return}i.forEach(Md),i.forEach(Ld);const s=i.filter(Fd);co(n.vnode.el),s.forEach(l=>{const c=l.el,u=c.style;bt(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[ri]=m=>{m&&m.target!==c||(!m||m.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[ri]=null,zt(c,a))};c.addEventListener("transitionend",d)}),i=[]}),()=>{const a=ve(e),s=Xl(a);let l=a.tag||Fe;if(i=[],o)for(let c=0;c<o.length;c++){const u=o[c];u.el&&u.el instanceof Element&&(i.push(u),dn(u,pr(u,s,r,n)),nc.set(u,ic(u.el)))}o=t.default?jo(t.default()):[];for(let c=0;c<o.length;c++){const u=o[c];u.key!=null&&dn(u,pr(u,s,r,n))}return Te(l,null,o)}}}),kd=Nd;function Md(e){const t=e.el;t[ri]&&t[ri](),t[zs]&&t[zs]()}function Ld(e){rc.set(e,ic(e.el))}function Fd(e){const t=nc.get(e),n=rc.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const o=e.el,a=o.style,s=o.getBoundingClientRect();let l=1,c=1;return o.offsetWidth&&(l=s.width/o.offsetWidth),o.offsetHeight&&(c=s.height/o.offsetHeight),(!Number.isFinite(l)||l===0)&&(l=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(l-1)<.01&&(l=1),Math.abs(c-1)<.01&&(c=1),a.transform=a.webkitTransform=`translate(${r/l}px,${i/c}px)`,a.transitionDuration="0s",e}}function ic(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function Bd(e,t,n){const r=e.cloneNode(),i=e[Nn];i&&i.forEach(s=>{s.split(/\s+/).forEach(l=>l&&r.classList.remove(l))}),n.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const o=t.nodeType===1?t:t.parentNode;o.appendChild(r);const{hasTransform:a}=ec(r);return o.removeChild(r),a}const $s=e=>{const t=e.props["onUpdate:modelValue"]||!1;return de(t)?n=>zr(t,n):t};function jd(e){e.target.composing=!0}function Hs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ji=Symbol("_assign");function Ws(e,t,n){return t&&(e=e.trim()),n&&(e=Io(e)),e}const Ud={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ji]=$s(i);const o=r||i.props&&i.props.type==="number";bn(e,t?"change":"input",a=>{a.target.composing||e[ji](Ws(e.value,n,o))}),(n||o)&&bn(e,"change",()=>{e.value=Ws(e.value,n,o)}),t||(bn(e,"compositionstart",jd),bn(e,"compositionend",Hs),bn(e,"change",Hs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:o}},a){if(e[ji]=$s(a),e.composing)return;const s=(o||e.type==="number")&&!/^0\d/.test(e.value)?Io(e.value):e.value,l=t??"";s!==l&&(document.activeElement===e&&e.type!=="range"&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l))}},zd=["ctrl","shift","alt","meta"],$d={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>zd.some(n=>e[`${n}Key`]&&!t.includes(n))},uo=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((i,...o)=>{for(let a=0;a<t.length;a++){const s=$d[t[a]];if(s&&s(i,t))return}return e(i,...o)}))},Hd=Me({patchProp:Rd},hd);let Vs;function Wd(){return Vs||(Vs=Vf(Hd))}const Vd=((...e)=>{const t=Wd().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=qd(r);if(!i)return;const o=t._component;!he(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const a=n(i,!1,Gd(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t});function Gd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qd(e){return Ie(e)?document.querySelector(e):e}function Yd(e){let t=".",n="__",r="--",i;if(e){let g=e.blockPrefix;g&&(t=g),g=e.elementPrefix,g&&(n=g),g=e.modifierPrefix,g&&(r=g)}const o={install(g){i=g.c;const h=g.context;h.bem={},h.bem.b=null,h.bem.els=null}};function a(g){let h,y;return{before(v){h=v.bem.b,y=v.bem.els,v.bem.els=null},after(v){v.bem.b=h,v.bem.els=y},$({context:v,props:b}){return g=typeof g=="string"?g:g({context:v,props:b}),v.bem.b=g,`${(b==null?void 0:b.bPrefix)||t}${v.bem.b}`}}}function s(g){let h;return{before(y){h=y.bem.els},after(y){y.bem.els=h},$({context:y,props:v}){return g=typeof g=="string"?g:g({context:y,props:v}),y.bem.els=g.split(",").map(b=>b.trim()),y.bem.els.map(b=>`${(v==null?void 0:v.bPrefix)||t}${y.bem.b}${n}${b}`).join(", ")}}}function l(g){return{$({context:h,props:y}){g=typeof g=="string"?g:g({context:h,props:y});const v=g.split(",").map(x=>x.trim());function b(x){return v.map(O=>`&${(y==null?void 0:y.bPrefix)||t}${h.bem.b}${x!==void 0?`${n}${x}`:""}${r}${O}`).join(", ")}const w=h.bem.els;return w!==null?b(w[0]):b()}}}function c(g){return{$({context:h,props:y}){g=typeof g=="string"?g:g({context:h,props:y});const v=h.bem.els;return`&:not(${(y==null?void 0:y.bPrefix)||t}${h.bem.b}${v!==null&&v.length>0?`${n}${v[0]}`:""}${r}${g})`}}}return Object.assign(o,{cB:((...g)=>i(a(g[0]),g[1],g[2])),cE:((...g)=>i(s(g[0]),g[1],g[2])),cM:((...g)=>i(l(g[0]),g[1],g[2])),cNotM:((...g)=>i(c(g[0]),g[1],g[2]))}),o}function Kd(e){let t=0;for(let n=0;n<e.length;++n)e[n]==="&"&&++t;return t}const oc=/\s*,(?![^(]*\))\s*/g,Zd=/\s+/g;function Jd(e,t){const n=[];return t.split(oc).forEach(r=>{let i=Kd(r);if(i){if(i===1){e.forEach(a=>{n.push(r.replace("&",a))});return}}else{e.forEach(a=>{n.push((a&&a+" ")+r)});return}let o=[r];for(;i--;){const a=[];o.forEach(s=>{e.forEach(l=>{a.push(s.replace("&",l))})}),o=a}o.forEach(a=>n.push(a))}),n}function Qd(e,t){const n=[];return t.split(oc).forEach(r=>{e.forEach(i=>{n.push((i&&i+" ")+r)})}),n}function Xd(e){let t=[""];return e.forEach(n=>{n=n&&n.trim(),n&&(n.includes("&")?t=Jd(t,n):t=Qd(t,n))}),t.join(", ").replace(Zd," ")}function Gs(e){if(!e)return;const t=e.parentElement;t&&t.removeChild(e)}function bi(e,t){return(t??document.head).querySelector(`style[cssr-id="${e}"]`)}function eh(e){const t=document.createElement("style");return t.setAttribute("cssr-id",e),t}function Fr(e){return e?/^\s*@(s|m)/.test(e):!1}const th=/[A-Z]/g;function sc(e){return e.replace(th,t=>"-"+t.toLowerCase())}function nh(e,t="  "){return typeof e=="object"&&e!==null?` {
`+Object.entries(e).map(n=>t+`  ${sc(n[0])}: ${n[1]};`).join(`
`)+`
`+t+"}":`: ${e};`}function rh(e,t,n){return typeof e=="function"?e({context:t.context,props:n}):e}function qs(e,t,n,r){if(!t)return"";const i=rh(t,n,r);if(!i)return"";if(typeof i=="string")return`${e} {
${i}
}`;const o=Object.keys(i);if(o.length===0)return n.config.keepEmptyBlock?e+` {
}`:"";const a=e?[e+" {"]:[];return o.forEach(s=>{const l=i[s];if(s==="raw"){a.push(`
`+l+`
`);return}s=sc(s),l!=null&&a.push(`  ${s}${nh(l)}`)}),e&&a.push("}"),a.join(`
`)}function fo(e,t,n){e&&e.forEach(r=>{if(Array.isArray(r))fo(r,t,n);else if(typeof r=="function"){const i=r(t);Array.isArray(i)?fo(i,t,n):i&&n(i)}else r&&n(r)})}function ac(e,t,n,r,i){const o=e.$;let a="";if(!o||typeof o=="string")Fr(o)?a=o:t.push(o);else if(typeof o=="function"){const c=o({context:r.context,props:i});Fr(c)?a=c:t.push(c)}else if(o.before&&o.before(r.context),!o.$||typeof o.$=="string")Fr(o.$)?a=o.$:t.push(o.$);else if(o.$){const c=o.$({context:r.context,props:i});Fr(c)?a=c:t.push(c)}const s=Xd(t),l=qs(s,e.props,r,i);a?n.push(`${a} {`):l.length&&n.push(l),e.children&&fo(e.children,{context:r.context,props:i},c=>{if(typeof c=="string"){const u=qs(s,{raw:c},r,i);n.push(u)}else ac(c,t,n,r,i)}),t.pop(),a&&n.push("}"),o&&o.after&&o.after(r.context)}function ih(e,t,n){const r=[];return ac(e,[],r,t,n),r.join(`

`)}function gr(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}typeof window<"u"&&(window.__cssrContext={});function oh(e,t,n,r){const{els:i}=t;if(n===void 0)i.forEach(Gs),t.els=[];else{const o=bi(n,r);o&&i.includes(o)&&(Gs(o),t.els=i.filter(a=>a!==o))}}function Ys(e,t){e.push(t)}function sh(e,t,n,r,i,o,a,s,l){let c;if(n===void 0&&(c=t.render(r),n=gr(c)),l){l.adapter(n,c??t.render(r));return}s===void 0&&(s=document.head);const u=bi(n,s);if(u!==null&&!o)return u;const d=u??eh(n);if(c===void 0&&(c=t.render(r)),d.textContent=c,u!==null)return u;if(a){const m=s.querySelector(`meta[name="${a}"]`);if(m)return s.insertBefore(d,m),Ys(t.els,d),d}return i?s.insertBefore(d,s.querySelector("style, link")):s.appendChild(d),Ys(t.els,d),d}function ah(e){return ih(this,this.instance,e)}function lh(e={}){const{id:t,ssr:n,props:r,head:i=!1,force:o=!1,anchorMetaName:a,parent:s}=e;return sh(this.instance,this,t,r,i,o,a,s,n)}function ch(e={}){const{id:t,parent:n}=e;oh(this.instance,this,t,n)}const Br=function(e,t,n,r){return{instance:e,$:t,props:n,children:r,els:[],render:ah,mount:lh,unmount:ch}},uh=function(e,t,n,r){return Array.isArray(t)?Br(e,{$:null},null,t):Array.isArray(n)?Br(e,t,null,n):Array.isArray(r)?Br(e,t,n,r):Br(e,t,n,null)};function fh(e={}){const t={c:((...n)=>uh(t,...n)),use:(n,...r)=>n.install(t,...r),find:bi,context:{},config:e};return t}function dh(e,t){if(e===void 0)return!1;if(t){const{context:{ids:n}}=t;return n.has(e)}return bi(e)!==null}const hh="n",ph=`.${hh}-`,mh="__",gh="--",lc=fh(),cc=Yd({blockPrefix:ph,elementPrefix:mh,modifierPrefix:gh});lc.use(cc);const{c:Se,find:Wv}=lc,{cB:Ve,cE:xe,cM:ze,cNotM:uc}=cc,Vv=(...e)=>Se(">",[Ve(...e)]);function jt(e,t){return e+(t==="default"?"":t.replace(/^[a-z]/,n=>n.toUpperCase()))}function Ks(e,t){let{target:n}=e;for(;n;){if(n.dataset&&n.dataset[t]!==void 0)return!0;n=n.parentElement}return!1}const Zs={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32",transparent:"#0000"};function vh(e,t,n){t/=100,n/=100;let r=(i,o=(i+e/60)%6)=>n-n*t*Math.max(Math.min(o,4-o,1),0);return[r(5)*255,r(3)*255,r(1)*255]}function _h(e,t,n){t/=100,n/=100;let r=t*Math.min(n,1-n),i=(o,a=(o+e/30)%12)=>n-r*Math.max(Math.min(a-3,9-a,1),-1);return[i(0)*255,i(8)*255,i(4)*255]}const Et="^\\s*",Pt="\\s*$",Zt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",at="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",on="([0-9A-Fa-f])",sn="([0-9A-Fa-f]{2})",fc=new RegExp(`${Et}hsl\\s*\\(${at},${Zt},${Zt}\\)${Pt}`),dc=new RegExp(`${Et}hsv\\s*\\(${at},${Zt},${Zt}\\)${Pt}`),hc=new RegExp(`${Et}hsla\\s*\\(${at},${Zt},${Zt},${at}\\)${Pt}`),pc=new RegExp(`${Et}hsva\\s*\\(${at},${Zt},${Zt},${at}\\)${Pt}`),bh=new RegExp(`${Et}rgb\\s*\\(${at},${at},${at}\\)${Pt}`),yh=new RegExp(`${Et}rgba\\s*\\(${at},${at},${at},${at}\\)${Pt}`),Sh=new RegExp(`${Et}#${on}${on}${on}${Pt}`),Ch=new RegExp(`${Et}#${sn}${sn}${sn}${Pt}`),wh=new RegExp(`${Et}#${on}${on}${on}${on}${Pt}`),Ah=new RegExp(`${Et}#${sn}${sn}${sn}${sn}${Pt}`);function it(e){return parseInt(e,16)}function Eh(e){try{let t;if(t=hc.exec(e))return[ii(t[1]),Vt(t[5]),Vt(t[9]),fn(t[13])];if(t=fc.exec(e))return[ii(t[1]),Vt(t[5]),Vt(t[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${e}.`)}catch(t){throw t}}function Ph(e){try{let t;if(t=pc.exec(e))return[ii(t[1]),Vt(t[5]),Vt(t[9]),fn(t[13])];if(t=dc.exec(e))return[ii(t[1]),Vt(t[5]),Vt(t[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${e}.`)}catch(t){throw t}}function hn(e){try{let t;if(t=Ch.exec(e))return[it(t[1]),it(t[2]),it(t[3]),1];if(t=bh.exec(e))return[et(t[1]),et(t[5]),et(t[9]),1];if(t=yh.exec(e))return[et(t[1]),et(t[5]),et(t[9]),fn(t[13])];if(t=Sh.exec(e))return[it(t[1]+t[1]),it(t[2]+t[2]),it(t[3]+t[3]),1];if(t=Ah.exec(e))return[it(t[1]),it(t[2]),it(t[3]),fn(it(t[4])/255)];if(t=wh.exec(e))return[it(t[1]+t[1]),it(t[2]+t[2]),it(t[3]+t[3]),fn(it(t[4]+t[4])/255)];if(e in Zs)return hn(Zs[e]);if(fc.test(e)||hc.test(e)){const[n,r,i,o]=Eh(e);return[..._h(n,r,i),o]}else if(dc.test(e)||pc.test(e)){const[n,r,i,o]=Ph(e);return[...vh(n,r,i),o]}throw new Error(`[seemly/rgba]: Invalid color value ${e}.`)}catch(t){throw t}}function xh(e){return e>1?1:e<0?0:e}function ho(e,t,n,r){return`rgba(${et(e)}, ${et(t)}, ${et(n)}, ${xh(r)})`}function Ui(e,t,n,r,i){return et((e*t*(1-r)+n*r)/i)}function Th(e,t){Array.isArray(e)||(e=hn(e)),Array.isArray(t)||(t=hn(t));const n=e[3],r=t[3],i=fn(n+r-n*r);return ho(Ui(e[0],n,t[0],r,i),Ui(e[1],n,t[1],r,i),Ui(e[2],n,t[2],r,i),i)}function Gv(e,t){const[n,r,i,o=1]=Array.isArray(e)?e:hn(e);return typeof t.alpha=="number"?ho(n,r,i,t.alpha):ho(n,r,i,o)}function jr(e,t){const[n,r,i,o=1]=Array.isArray(e)?e:hn(e),{lightness:a=1,alpha:s=1}=t;return Ih([n*a,r*a,i*a,o*s])}function fn(e){const t=Math.round(Number(e)*100)/100;return t>1?1:t<0?0:t}function ii(e){const t=Math.round(Number(e));return t>=360||t<0?0:t}function et(e){const t=Math.round(Number(e));return t>255?255:t<0?0:t}function Vt(e){const t=Math.round(Number(e));return t>100?100:t<0?0:t}function Ih(e){const[t,n,r]=e;return 3 in e?`rgba(${et(t)}, ${et(n)}, ${et(r)}, ${fn(e[3])})`:`rgba(${et(t)}, ${et(n)}, ${et(r)}, 1)`}function mc(e=8){return Math.random().toString(16).slice(2,2+e)}function Rh(e){const t=Oe(!!e.value);if(t.value)return Tn(t);const n=un(e,r=>{r&&(t.value=!0,n())});return Tn(t)}function po(e){const t=me(e),n=Oe(t.value);return un(t,r=>{n.value=r}),typeof e=="function"?n:{__v_isRef:!0,get value(){return n.value},set value(r){e.set(r)}}}function Oh(e,t){return un(e,n=>{n!==void 0&&(t.value=n)}),me(()=>e.value===void 0?t.value:e.value)}function Dh(){const e=Oe(!1);return Fn(()=>{e.value=!0}),Tn(e)}function qv(e){return e}const Nh="@css-render/vue3-ssr";function kh(e,t){return`<style cssr-id="${e}">
${t}
</style>`}function Mh(e,t,n){const{styles:r,ids:i}=n;i.has(e)||r!==null&&(i.add(e),r.push(kh(e,t)))}const Lh=typeof document<"u";function yi(){if(Lh)return;const e=je(Nh,null);if(e!==null)return{adapter:(t,n)=>Mh(t,n,e),context:e}}function Fh(e,t){console.error(`[naive/${e}]: ${t}`)}function gc(e,t){throw new Error(`[naive/${e}]: ${t}`)}function Qn(e,...t){if(Array.isArray(e))e.forEach(n=>Qn(n,...t));else return e(...t)}function Bh(e,t=[],n){const r={};return Object.getOwnPropertyNames(e).forEach(o=>{t.includes(o)||(r[o]=e[o])}),Object.assign(r,n)}function jh(e,...t){return typeof e=="function"?e(...t):typeof e=="string"?ei(e):typeof e=="number"?ei(String(e)):null}function Bn(e){return e.some(t=>On(t)?!(t.type===Ge||t.type===Fe&&!Bn(t.children)):!0)?e:null}function Yv(e,t){return e&&Bn(e())||t()}function Js(e,t,n){return e&&Bn(e(t))||n(t)}function Kv(e,t){const n=e&&Bn(e());return t(n||null)}function Uh(e,t,n){const r=e&&Bn(e(t));return n(r||null)}function Zv(e){return!(e&&Bn(e()))}const Jt="n-config-provider",mo="n";function Si(e={},t={defaultBordered:!0}){const n=je(Jt,null);return{inlineThemeDisabled:n==null?void 0:n.inlineThemeDisabled,mergedRtlRef:n==null?void 0:n.mergedRtlRef,mergedComponentPropsRef:n==null?void 0:n.mergedComponentPropsRef,mergedBreakpointsRef:n==null?void 0:n.mergedBreakpointsRef,mergedBorderedRef:me(()=>{var r,i;const{bordered:o}=e;return o!==void 0?o:(i=(r=n==null?void 0:n.mergedBorderedRef.value)!==null&&r!==void 0?r:t.defaultBordered)!==null&&i!==void 0?i:!0}),mergedClsPrefixRef:n?n.mergedClsPrefixRef:nl(mo),namespaceRef:me(()=>n==null?void 0:n.mergedNamespaceRef.value)}}function vc(e,t,n,r){n||gc("useThemeClass","cssVarsRef is not passed");const i=je(Jt,null),o=i==null?void 0:i.mergedThemeHashRef,a=i==null?void 0:i.styleMountTarget,s=Oe(""),l=yi();let c;const u=`__${e}`,d=()=>{let m=u;const p=t?t.value:void 0,g=o==null?void 0:o.value;g&&(m+=`-${g}`),p&&(m+=`-${p}`);const{themeOverrides:h,builtinThemeOverrides:y}=r;h&&(m+=`-${gr(JSON.stringify(h))}`),y&&(m+=`-${gr(JSON.stringify(y))}`),s.value=m,c=()=>{const v=n.value;let b="";for(const w in v)b+=`${w}: ${v[w]};`;Se(`.${m}`,b).mount({id:m,ssr:l,parent:a}),c=void 0}};return dl(()=>{d()}),{themeClass:s,onRender:()=>{c==null||c()}}}var _c=typeof global=="object"&&global&&global.Object===Object&&global,zh=typeof self=="object"&&self&&self.Object===Object&&self,jn=_c||zh||Function("return this")(),kn=jn.Symbol,bc=Object.prototype,$h=bc.hasOwnProperty,Hh=bc.toString,Kn=kn?kn.toStringTag:void 0;function Wh(e){var t=$h.call(e,Kn),n=e[Kn];try{e[Kn]=void 0;var r=!0}catch{}var i=Hh.call(e);return r&&(t?e[Kn]=n:delete e[Kn]),i}var Vh=Object.prototype,Gh=Vh.toString;function qh(e){return Gh.call(e)}var Yh="[object Null]",Kh="[object Undefined]",Qs=kn?kn.toStringTag:void 0;function xr(e){return e==null?e===void 0?Kh:Yh:Qs&&Qs in Object(e)?Wh(e):qh(e)}function Un(e){return e!=null&&typeof e=="object"}var Zh="[object Symbol]";function Jh(e){return typeof e=="symbol"||Un(e)&&xr(e)==Zh}function Qh(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var oi=Array.isArray,Xs=kn?kn.prototype:void 0,ea=Xs?Xs.toString:void 0;function yc(e){if(typeof e=="string")return e;if(oi(e))return Qh(e,yc)+"";if(Jh(e))return ea?ea.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function gn(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}function Sc(e){return e}var Xh="[object AsyncFunction]",ep="[object Function]",tp="[object GeneratorFunction]",np="[object Proxy]";function qo(e){if(!gn(e))return!1;var t=xr(e);return t==ep||t==tp||t==Xh||t==np}var zi=jn["__core-js_shared__"],ta=(function(){var e=/[^.]+$/.exec(zi&&zi.keys&&zi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""})();function rp(e){return!!ta&&ta in e}var ip=Function.prototype,op=ip.toString;function sp(e){if(e!=null){try{return op.call(e)}catch{}try{return e+""}catch{}}return""}var ap=/[\\^$.*+?()[\]{}|]/g,lp=/^\[object .+?Constructor\]$/,cp=Function.prototype,up=Object.prototype,fp=cp.toString,dp=up.hasOwnProperty,hp=RegExp("^"+fp.call(dp).replace(ap,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pp(e){if(!gn(e)||rp(e))return!1;var t=qo(e)?hp:lp;return t.test(sp(e))}function mp(e,t){return e==null?void 0:e[t]}function Yo(e,t){var n=mp(e,t);return pp(n)?n:void 0}var na=Object.create,gp=(function(){function e(){}return function(t){if(!gn(t))return{};if(na)return na(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}})();function vp(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function _p(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}var bp=800,yp=16,Sp=Date.now;function Cp(e){var t=0,n=0;return function(){var r=Sp(),i=yp-(r-n);if(n=r,i>0){if(++t>=bp)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function wp(e){return function(){return e}}var si=(function(){try{var e=Yo(Object,"defineProperty");return e({},"",{}),e}catch{}})(),Ap=si?function(e,t){return si(e,"toString",{configurable:!0,enumerable:!1,value:wp(t),writable:!0})}:Sc,Ep=Cp(Ap),Pp=9007199254740991,xp=/^(?:0|[1-9]\d*)$/;function Cc(e,t){var n=typeof e;return t=t??Pp,!!t&&(n=="number"||n!="symbol"&&xp.test(e))&&e>-1&&e%1==0&&e<t}function Ko(e,t,n){t=="__proto__"&&si?si(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Ci(e,t){return e===t||e!==e&&t!==t}var Tp=Object.prototype,Ip=Tp.hasOwnProperty;function Rp(e,t,n){var r=e[t];(!(Ip.call(e,t)&&Ci(r,n))||n===void 0&&!(t in e))&&Ko(e,t,n)}function Op(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var s=t[o],l=void 0;l===void 0&&(l=e[s]),i?Ko(n,s,l):Rp(n,s,l)}return n}var ra=Math.max;function Dp(e,t,n){return t=ra(t===void 0?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=ra(r.length-t,0),a=Array(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),vp(e,this,s)}}function Np(e,t){return Ep(Dp(e,t,Sc),e+"")}var kp=9007199254740991;function wc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=kp}function Zo(e){return e!=null&&wc(e.length)&&!qo(e)}function Mp(e,t,n){if(!gn(n))return!1;var r=typeof t;return(r=="number"?Zo(n)&&Cc(t,n.length):r=="string"&&t in n)?Ci(n[t],e):!1}function Lp(e){return Np(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(o=e.length>3&&typeof o=="function"?(i--,o):void 0,a&&Mp(n[0],n[1],a)&&(o=i<3?void 0:o,i=1),t=Object(t);++r<i;){var s=n[r];s&&e(t,s,r,o)}return t})}var Fp=Object.prototype;function Ac(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||Fp;return e===n}function Bp(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var jp="[object Arguments]";function ia(e){return Un(e)&&xr(e)==jp}var Ec=Object.prototype,Up=Ec.hasOwnProperty,zp=Ec.propertyIsEnumerable,go=ia((function(){return arguments})())?ia:function(e){return Un(e)&&Up.call(e,"callee")&&!zp.call(e,"callee")};function $p(){return!1}var Pc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,oa=Pc&&typeof module=="object"&&module&&!module.nodeType&&module,Hp=oa&&oa.exports===Pc,sa=Hp?jn.Buffer:void 0,Wp=sa?sa.isBuffer:void 0,xc=Wp||$p,Vp="[object Arguments]",Gp="[object Array]",qp="[object Boolean]",Yp="[object Date]",Kp="[object Error]",Zp="[object Function]",Jp="[object Map]",Qp="[object Number]",Xp="[object Object]",em="[object RegExp]",tm="[object Set]",nm="[object String]",rm="[object WeakMap]",im="[object ArrayBuffer]",om="[object DataView]",sm="[object Float32Array]",am="[object Float64Array]",lm="[object Int8Array]",cm="[object Int16Array]",um="[object Int32Array]",fm="[object Uint8Array]",dm="[object Uint8ClampedArray]",hm="[object Uint16Array]",pm="[object Uint32Array]",Pe={};Pe[sm]=Pe[am]=Pe[lm]=Pe[cm]=Pe[um]=Pe[fm]=Pe[dm]=Pe[hm]=Pe[pm]=!0;Pe[Vp]=Pe[Gp]=Pe[im]=Pe[qp]=Pe[om]=Pe[Yp]=Pe[Kp]=Pe[Zp]=Pe[Jp]=Pe[Qp]=Pe[Xp]=Pe[em]=Pe[tm]=Pe[nm]=Pe[rm]=!1;function mm(e){return Un(e)&&wc(e.length)&&!!Pe[xr(e)]}function gm(e){return function(t){return e(t)}}var Tc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ar=Tc&&typeof module=="object"&&module&&!module.nodeType&&module,vm=ar&&ar.exports===Tc,$i=vm&&_c.process,aa=(function(){try{var e=ar&&ar.require&&ar.require("util").types;return e||$i&&$i.binding&&$i.binding("util")}catch{}})(),la=aa&&aa.isTypedArray,Ic=la?gm(la):mm,_m=Object.prototype,bm=_m.hasOwnProperty;function ym(e,t){var n=oi(e),r=!n&&go(e),i=!n&&!r&&xc(e),o=!n&&!r&&!i&&Ic(e),a=n||r||i||o,s=a?Bp(e.length,String):[],l=s.length;for(var c in e)(t||bm.call(e,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Cc(c,l)))&&s.push(c);return s}function Sm(e,t){return function(n){return e(t(n))}}function Cm(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var wm=Object.prototype,Am=wm.hasOwnProperty;function Em(e){if(!gn(e))return Cm(e);var t=Ac(e),n=[];for(var r in e)r=="constructor"&&(t||!Am.call(e,r))||n.push(r);return n}function Rc(e){return Zo(e)?ym(e,!0):Em(e)}var vr=Yo(Object,"create");function Pm(){this.__data__=vr?vr(null):{},this.size=0}function xm(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Tm="__lodash_hash_undefined__",Im=Object.prototype,Rm=Im.hasOwnProperty;function Om(e){var t=this.__data__;if(vr){var n=t[e];return n===Tm?void 0:n}return Rm.call(t,e)?t[e]:void 0}var Dm=Object.prototype,Nm=Dm.hasOwnProperty;function km(e){var t=this.__data__;return vr?t[e]!==void 0:Nm.call(t,e)}var Mm="__lodash_hash_undefined__";function Lm(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=vr&&t===void 0?Mm:t,this}function pn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}pn.prototype.clear=Pm;pn.prototype.delete=xm;pn.prototype.get=Om;pn.prototype.has=km;pn.prototype.set=Lm;function Fm(){this.__data__=[],this.size=0}function wi(e,t){for(var n=e.length;n--;)if(Ci(e[n][0],t))return n;return-1}var Bm=Array.prototype,jm=Bm.splice;function Um(e){var t=this.__data__,n=wi(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():jm.call(t,n,1),--this.size,!0}function zm(e){var t=this.__data__,n=wi(t,e);return n<0?void 0:t[n][1]}function $m(e){return wi(this.__data__,e)>-1}function Hm(e,t){var n=this.__data__,r=wi(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function Ft(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Ft.prototype.clear=Fm;Ft.prototype.delete=Um;Ft.prototype.get=zm;Ft.prototype.has=$m;Ft.prototype.set=Hm;var Oc=Yo(jn,"Map");function Wm(){this.size=0,this.__data__={hash:new pn,map:new(Oc||Ft),string:new pn}}function Vm(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Ai(e,t){var n=e.__data__;return Vm(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Gm(e){var t=Ai(this,e).delete(e);return this.size-=t?1:0,t}function qm(e){return Ai(this,e).get(e)}function Ym(e){return Ai(this,e).has(e)}function Km(e,t){var n=Ai(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function zn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}zn.prototype.clear=Wm;zn.prototype.delete=Gm;zn.prototype.get=qm;zn.prototype.has=Ym;zn.prototype.set=Km;function Zm(e){return e==null?"":yc(e)}var Dc=Sm(Object.getPrototypeOf,Object),Jm="[object Object]",Qm=Function.prototype,Xm=Object.prototype,Nc=Qm.toString,eg=Xm.hasOwnProperty,tg=Nc.call(Object);function ng(e){if(!Un(e)||xr(e)!=Jm)return!1;var t=Dc(e);if(t===null)return!0;var n=eg.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&Nc.call(n)==tg}function rg(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=Array(i);++r<i;)o[r]=e[r+t];return o}function ig(e,t,n){var r=e.length;return n=n===void 0?r:n,!t&&n>=r?e:rg(e,t,n)}var og="\\ud800-\\udfff",sg="\\u0300-\\u036f",ag="\\ufe20-\\ufe2f",lg="\\u20d0-\\u20ff",cg=sg+ag+lg,ug="\\ufe0e\\ufe0f",fg="\\u200d",dg=RegExp("["+fg+og+cg+ug+"]");function kc(e){return dg.test(e)}function hg(e){return e.split("")}var Mc="\\ud800-\\udfff",pg="\\u0300-\\u036f",mg="\\ufe20-\\ufe2f",gg="\\u20d0-\\u20ff",vg=pg+mg+gg,_g="\\ufe0e\\ufe0f",bg="["+Mc+"]",vo="["+vg+"]",_o="\\ud83c[\\udffb-\\udfff]",yg="(?:"+vo+"|"+_o+")",Lc="[^"+Mc+"]",Fc="(?:\\ud83c[\\udde6-\\uddff]){2}",Bc="[\\ud800-\\udbff][\\udc00-\\udfff]",Sg="\\u200d",jc=yg+"?",Uc="["+_g+"]?",Cg="(?:"+Sg+"(?:"+[Lc,Fc,Bc].join("|")+")"+Uc+jc+")*",wg=Uc+jc+Cg,Ag="(?:"+[Lc+vo+"?",vo,Fc,Bc,bg].join("|")+")",Eg=RegExp(_o+"(?="+_o+")|"+Ag+wg,"g");function Pg(e){return e.match(Eg)||[]}function xg(e){return kc(e)?Pg(e):hg(e)}function Tg(e){return function(t){t=Zm(t);var n=kc(t)?xg(t):void 0,r=n?n[0]:t.charAt(0),i=n?ig(n,1).join(""):t.slice(1);return r[e]()+i}}var Ig=Tg("toUpperCase");function Rg(){this.__data__=new Ft,this.size=0}function Og(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function Dg(e){return this.__data__.get(e)}function Ng(e){return this.__data__.has(e)}var kg=200;function Mg(e,t){var n=this.__data__;if(n instanceof Ft){var r=n.__data__;if(!Oc||r.length<kg-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new zn(r)}return n.set(e,t),this.size=n.size,this}function $n(e){var t=this.__data__=new Ft(e);this.size=t.size}$n.prototype.clear=Rg;$n.prototype.delete=Og;$n.prototype.get=Dg;$n.prototype.has=Ng;$n.prototype.set=Mg;var zc=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ca=zc&&typeof module=="object"&&module&&!module.nodeType&&module,Lg=ca&&ca.exports===zc,ua=Lg?jn.Buffer:void 0;ua&&ua.allocUnsafe;function Fg(e,t){return e.slice()}var fa=jn.Uint8Array;function Bg(e){var t=new e.constructor(e.byteLength);return new fa(t).set(new fa(e)),t}function jg(e,t){var n=Bg(e.buffer);return new e.constructor(n,e.byteOffset,e.length)}function Ug(e){return typeof e.constructor=="function"&&!Ac(e)?gp(Dc(e)):{}}function zg(e){return function(t,n,r){for(var i=-1,o=Object(t),a=r(t),s=a.length;s--;){var l=a[++i];if(n(o[l],l,o)===!1)break}return t}}var $g=zg();function bo(e,t,n){(n!==void 0&&!Ci(e[t],n)||n===void 0&&!(t in e))&&Ko(e,t,n)}function Hg(e){return Un(e)&&Zo(e)}function yo(e,t){if(!(t==="constructor"&&typeof e[t]=="function")&&t!="__proto__")return e[t]}function Wg(e){return Op(e,Rc(e))}function Vg(e,t,n,r,i,o,a){var s=yo(e,n),l=yo(t,n),c=a.get(l);if(c){bo(e,n,c);return}var u=o?o(s,l,n+"",e,t,a):void 0,d=u===void 0;if(d){var m=oi(l),p=!m&&xc(l),g=!m&&!p&&Ic(l);u=l,m||p||g?oi(s)?u=s:Hg(s)?u=_p(s):p?(d=!1,u=Fg(l)):g?(d=!1,u=jg(l)):u=[]:ng(l)||go(l)?(u=s,go(s)?u=Wg(s):(!gn(s)||qo(s))&&(u=Ug(l))):d=!1}d&&(a.set(l,u),i(u,l,r,o,a),a.delete(l)),bo(e,n,u)}function $c(e,t,n,r,i){e!==t&&$g(t,function(o,a){if(i||(i=new $n),gn(o))Vg(e,t,a,n,$c,r,i);else{var s=r?r(yo(e,a),o,a+"",e,t,i):void 0;s===void 0&&(s=o),bo(e,a,s)}},Rc)}var Xn=Lp(function(e,t,n){$c(e,t,n)});const _r="naive-ui-style";function Jo(e,t,n){if(!t)return;const r=yi(),i=me(()=>{const{value:s}=t;if(!s)return;const l=s[e];if(l)return l}),o=je(Jt,null),a=()=>{dl(()=>{const{value:s}=n,l=`${s}${e}Rtl`;if(dh(l,r))return;const{value:c}=i;c&&c.style.mount({id:l,head:!0,anchorMetaName:_r,props:{bPrefix:s?`.${s}-`:void 0},ssr:r,parent:o==null?void 0:o.styleMountTarget})})};return r?a():mi(a),i}const Ei={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"},{fontSize:Gg,fontFamily:qg,lineHeight:Yg}=Ei,Hc=Se("body",`
 margin: 0;
 font-size: ${Gg};
 font-family: ${qg};
 line-height: ${Yg};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[Se("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);function Qo(e,t,n){if(!t)return;const r=yi(),i=je(Jt,null),o=()=>{const a=n.value;t.mount({id:a===void 0?e:a+e,head:!0,anchorMetaName:_r,props:{bPrefix:a?`.${a}-`:void 0},ssr:r,parent:i==null?void 0:i.styleMountTarget}),i!=null&&i.preflightStyleDisabled||Hc.mount({id:"n-global",head:!0,anchorMetaName:_r,ssr:r,parent:i==null?void 0:i.styleMountTarget})};r?o():mi(o)}function Jv(e){return e}function Tr(e,t,n,r,i,o){const a=yi(),s=je(Jt,null);if(n){const c=()=>{const u=o==null?void 0:o.value;n.mount({id:u===void 0?t:u+t,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:_r,ssr:a,parent:s==null?void 0:s.styleMountTarget}),s!=null&&s.preflightStyleDisabled||Hc.mount({id:"n-global",head:!0,anchorMetaName:_r,ssr:a,parent:s==null?void 0:s.styleMountTarget})};a?c():mi(c)}return me(()=>{var c;const{theme:{common:u,self:d,peers:m={}}={},themeOverrides:p={},builtinThemeOverrides:g={}}=i,{common:h,peers:y}=p,{common:v=void 0,[e]:{common:b=void 0,self:w=void 0,peers:x={}}={}}=(s==null?void 0:s.mergedThemeRef.value)||{},{common:O=void 0,[e]:j={}}=(s==null?void 0:s.mergedThemeOverridesRef.value)||{},{common:L,peers:q={}}=j,M=Xn({},u||b||v||r.common,O,L,h),W=Xn((c=d||w||r.self)===null||c===void 0?void 0:c(M),g,j,p);return{common:M,self:W,peers:Xn({},r.peers,x,m),peerOverrides:Xn({},g.peers,q,y)}})}Tr.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Kg=Ve("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[Se("svg",`
 height: 1em;
 width: 1em;
 `)]),Xo=Ue({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){Qo("-base-icon",Kg,Cr(e,"clsPrefix"))},render(){return te("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Wc=Ue({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const n=Dh();return()=>te(Ql,{name:"icon-switch-transition",appear:n.value},t)}});function Ir(e,t){const n=Ue({render(){return t()}});return Ue({name:Ig(e),setup(){var r;const i=(r=je(Jt,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var o;const a=(o=i==null?void 0:i.value)===null||o===void 0?void 0:o[e];return a?a():te(n,null)}}})}const Zg=Ue({name:"ChevronLeft",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Jg=Ue({name:"ChevronRight",render(){return te("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),Qg=Ir("close",()=>te("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},te("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},te("g",{fill:"currentColor","fill-rule":"nonzero"},te("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),Xg=Ir("error",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"}))))),e0=Ir("info",()=>te("svg",{viewBox:"0 0 28 28",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"}))))),t0=Ir("success",()=>te("svg",{viewBox:"0 0 48 48",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"}))))),n0=Ir("warning",()=>te("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},te("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},te("g",{"fill-rule":"nonzero"},te("path",{d:"M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"}))))),{cubicBezierEaseInOut:r0}=Ei;function So({originalTransform:e="",left:t=0,top:n=0,transition:r=`all .3s ${r0} !important`}={}){return[Se("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:`${e} scale(0.75)`,left:t,top:n,opacity:0}),Se("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:n,opacity:1}),Se("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:n,transition:r})]}const i0=Ve("base-close",`
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
`,[ze("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),Se("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),uc("disabled",[Se("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Se("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),Se("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),Se("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),Se("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),ze("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),ze("round",[Se("&::before",`
 border-radius: 50%;
 `)])]),o0=Ue({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return Qo("-base-close",i0,Cr(e,"clsPrefix")),()=>{const{clsPrefix:t,disabled:n,absolute:r,round:i,isButtonTag:o}=e;return te(o?"button":"div",{type:o?"button":void 0,tabindex:n||!e.focusable?-1:0,"aria-disabled":n,"aria-label":"close",role:o?void 0:"button",disabled:n,class:[`${t}-base-close`,r&&`${t}-base-close--absolute`,n&&`${t}-base-close--disabled`,i&&`${t}-base-close--round`],onMousedown:s=>{e.focusable||s.preventDefault()},onClick:e.onClick},te(Xo,{clsPrefix:t},{default:()=>te(Qg,null)}))}}}),Vc=Ue({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:t}){function n(s){e.width?s.style.maxWidth=`${s.offsetWidth}px`:s.style.maxHeight=`${s.offsetHeight}px`,s.offsetWidth}function r(s){e.width?s.style.maxWidth="0":s.style.maxHeight="0",s.offsetWidth;const{onLeave:l}=e;l&&l()}function i(s){e.width?s.style.maxWidth="":s.style.maxHeight="";const{onAfterLeave:l}=e;l&&l()}function o(s){if(s.style.transition="none",e.width){const l=s.offsetWidth;s.style.maxWidth="0",s.offsetWidth,s.style.transition="",s.style.maxWidth=`${l}px`}else if(e.reverse)s.style.maxHeight=`${s.offsetHeight}px`,s.offsetHeight,s.style.transition="",s.style.maxHeight="0";else{const l=s.offsetHeight;s.style.maxHeight="0",s.offsetWidth,s.style.transition="",s.style.maxHeight=`${l}px`}s.offsetWidth}function a(s){var l;e.width?s.style.maxWidth="":e.reverse||(s.style.maxHeight=""),(l=e.onAfterEnter)===null||l===void 0||l.call(e)}return()=>{const{group:s,width:l,appear:c,mode:u}=e,d=s?kd:Ql,m={name:l?"fade-in-width-expand-transition":"fade-in-height-expand-transition",appear:c,onEnter:o,onAfterEnter:a,onBeforeLeave:n,onLeave:r,onAfterLeave:i};return s||(m.mode=u),te(d,m,t)}}}),s0=Se([Se("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),Ve("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[xe("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[So()]),xe("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[So({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),xe("container",`
 animation: rotator 3s linear infinite both;
 `,[xe("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Hi="1.6s",a0={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},l0=Ue({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},a0),setup(e){Qo("-base-loading",s0,Cr(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:n,stroke:r,scale:i}=this,o=t/i;return te("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},te(Wc,null,{default:()=>this.show?te("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},te("div",{class:`${e}-base-loading__container`},te("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:r}},te("g",null,te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};270 ${o} ${o}`,begin:"0s",dur:Hi,fill:"freeze",repeatCount:"indefinite"}),te("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":n,"stroke-linecap":"round",cx:o,cy:o,r:t-n/2,"stroke-dasharray":5.67*t,"stroke-dashoffset":18.48*t},te("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,begin:"0s",dur:Hi,fill:"freeze",repeatCount:"indefinite"}),te("animate",{attributeName:"stroke-dashoffset",values:`${5.67*t};${1.42*t};${5.67*t}`,begin:"0s",dur:Hi,fill:"freeze",repeatCount:"indefinite"})))))):te("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),fe={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaAvatar:"0.2",alphaProgressRail:".08",alphaInput:"0",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},c0=hn(fe.neutralBase),Gc=hn(fe.neutralInvertBase),u0=`rgba(${Gc.slice(0,3).join(", ")}, `;function da(e){return`${u0+String(e)})`}function Ze(e){const t=Array.from(Gc);return t[3]=Number(e),Th(c0,t)}const qc=Object.assign(Object.assign({name:"common"},Ei),{baseColor:fe.neutralBase,primaryColor:fe.primaryDefault,primaryColorHover:fe.primaryHover,primaryColorPressed:fe.primaryActive,primaryColorSuppl:fe.primarySuppl,infoColor:fe.infoDefault,infoColorHover:fe.infoHover,infoColorPressed:fe.infoActive,infoColorSuppl:fe.infoSuppl,successColor:fe.successDefault,successColorHover:fe.successHover,successColorPressed:fe.successActive,successColorSuppl:fe.successSuppl,warningColor:fe.warningDefault,warningColorHover:fe.warningHover,warningColorPressed:fe.warningActive,warningColorSuppl:fe.warningSuppl,errorColor:fe.errorDefault,errorColorHover:fe.errorHover,errorColorPressed:fe.errorActive,errorColorSuppl:fe.errorSuppl,textColorBase:fe.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Ze(fe.alpha4),placeholderColor:Ze(fe.alpha4),placeholderColorDisabled:Ze(fe.alpha5),iconColor:Ze(fe.alpha4),iconColorHover:jr(Ze(fe.alpha4),{lightness:.75}),iconColorPressed:jr(Ze(fe.alpha4),{lightness:.9}),iconColorDisabled:Ze(fe.alpha5),opacity1:fe.alpha1,opacity2:fe.alpha2,opacity3:fe.alpha3,opacity4:fe.alpha4,opacity5:fe.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Ze(Number(fe.alphaClose)),closeIconColorHover:Ze(Number(fe.alphaClose)),closeIconColorPressed:Ze(Number(fe.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Ze(fe.alpha4),clearColorHover:jr(Ze(fe.alpha4),{lightness:.75}),clearColorPressed:jr(Ze(fe.alpha4),{lightness:.9}),scrollbarColor:da(fe.alphaScrollbar),scrollbarColorHover:da(fe.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Ze(fe.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:fe.neutralPopover,tableColor:fe.neutralCard,cardColor:fe.neutralCard,modalColor:fe.neutralModal,bodyColor:fe.neutralBody,tagColor:"#eee",avatarColor:Ze(fe.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Ze(fe.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:fe.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}),{cubicBezierEaseInOut:_t,cubicBezierEaseOut:f0,cubicBezierEaseIn:d0}=Ei;function Yc({overflow:e="hidden",duration:t=".3s",originalTransition:n="",leavingDelay:r="0s",foldPadding:i=!1,enterToProps:o=void 0,leaveToProps:a=void 0,reverse:s=!1}={}){const l=s?"leave":"enter",c=s?"enter":"leave";return[Se(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${l}-to`,Object.assign(Object.assign({},o),{opacity:1})),Se(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${l}-from`,Object.assign(Object.assign({},a),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:i?"0 !important":void 0,paddingBottom:i?"0 !important":void 0})),Se(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${_t} ${r},
 opacity ${t} ${f0} ${r},
 margin-top ${t} ${_t} ${r},
 margin-bottom ${t} ${_t} ${r},
 padding-top ${t} ${_t} ${r},
 padding-bottom ${t} ${_t} ${r}
 ${n?`,${n}`:""}
 `),Se(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${_t},
 opacity ${t} ${d0},
 margin-top ${t} ${_t},
 margin-bottom ${t} ${_t},
 padding-top ${t} ${_t},
 padding-bottom ${t} ${_t}
 ${n?`,${n}`:""}
 `)]}function h0(e){const{fontWeight:t,textColor1:n,textColor2:r,textColorDisabled:i,dividerColor:o,fontSize:a}=e;return{titleFontSize:a,titleFontWeight:t,dividerColor:o,titleTextColor:n,titleTextColorDisabled:i,fontSize:a,textColor:r,arrowColor:r,arrowColorDisabled:i,itemMargin:"16px 0 0 0",titlePadding:"16px 0 0 0"}}const p0={common:qc,self:h0},m0=Ve("collapse","width: 100%;",[Ve("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[ze("disabled",[xe("header","cursor: not-allowed;",[xe("header-main",`
 color: var(--n-title-text-color-disabled);
 `),Ve("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),Ve("collapse-item","margin-left: 32px;"),Se("&:first-child","margin-top: 0;"),Se("&:first-child >",[xe("header","padding-top: 0;")]),ze("left-arrow-placement",[xe("header",[Ve("collapse-item-arrow","margin-right: 4px;")])]),ze("right-arrow-placement",[xe("header",[Ve("collapse-item-arrow","margin-left: 4px;")])]),xe("content-wrapper",[xe("content-inner","padding-top: 16px;"),Yc({duration:"0.15s"})]),ze("active",[xe("header",[ze("active",[Ve("collapse-item-arrow","transform: rotate(90deg);")])])]),Se("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),uc("disabled",[ze("trigger-area-main",[xe("header",[xe("header-main","cursor: pointer;"),Ve("collapse-item-arrow","cursor: default;")])]),ze("trigger-area-arrow",[xe("header",[Ve("collapse-item-arrow","cursor: pointer;")])]),ze("trigger-area-extra",[xe("header",[xe("header-extra","cursor: pointer;")])])]),xe("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[xe("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),xe("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),Ve("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),g0=Object.assign(Object.assign({},Tr.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Kc="n-collapse",v0=Ue({name:"Collapse",props:g0,slots:Object,setup(e,{slots:t}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=Si(e),o=Oe(e.defaultExpandedNames),a=me(()=>e.expandedNames),s=Oh(a,o),l=Tr("Collapse","-collapse",m0,p0,e,n);function c(h){const{"onUpdate:expandedNames":y,onUpdateExpandedNames:v,onExpandedNamesChange:b}=e;v&&Qn(v,h),y&&Qn(y,h),b&&Qn(b,h),o.value=h}function u(h){const{onItemHeaderClick:y}=e;y&&Qn(y,h)}function d(h,y,v){const{accordion:b}=e,{value:w}=s;if(b)h?(c([y]),u({name:y,expanded:!0,event:v})):(c([]),u({name:y,expanded:!1,event:v}));else if(!Array.isArray(w))c([y]),u({name:y,expanded:!0,event:v});else{const x=w.slice(),O=x.findIndex(j=>y===j);~O?(x.splice(O,1),c(x),u({name:y,expanded:!1,event:v})):(x.push(y),c(x),u({name:y,expanded:!0,event:v}))}}Yt(Kc,{props:e,mergedClsPrefixRef:n,expandedNamesRef:s,slots:t,toggleItem:d});const m=Jo("Collapse",i,n),p=me(()=>{const{common:{cubicBezierEaseInOut:h},self:{titleFontWeight:y,dividerColor:v,titlePadding:b,titleTextColor:w,titleTextColorDisabled:x,textColor:O,arrowColor:j,fontSize:L,titleFontSize:q,arrowColorDisabled:M,itemMargin:W}}=l.value;return{"--n-font-size":L,"--n-bezier":h,"--n-text-color":O,"--n-divider-color":v,"--n-title-padding":b,"--n-title-font-size":q,"--n-title-text-color":w,"--n-title-text-color-disabled":x,"--n-title-font-weight":y,"--n-arrow-color":j,"--n-arrow-color-disabled":M,"--n-item-margin":W}}),g=r?vc("collapse",void 0,p,e):void 0;return{rtlEnabled:m,mergedTheme:l,mergedClsPrefix:n,cssVars:r?void 0:p,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),te("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),_0=Ue({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:Rh(Cr(e,"show"))}},render(){return te(Vc,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:n,clsPrefix:r}=this,i=t==="show"&&n,o=te("div",{class:`${r}-collapse-item__content-wrapper`},te("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return i?fl(o,[[_d,e]]):e?o:null}})}}),b0={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},y0=Ue({name:"CollapseItem",props:b0,setup(e){const{mergedRtlRef:t}=Si(e),n=mc(),r=po(()=>{var d;return(d=e.name)!==null&&d!==void 0?d:n}),i=je(Kc);i||gc("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:o,props:a,mergedClsPrefixRef:s,slots:l}=i,c=me(()=>{const{value:d}=o;if(Array.isArray(d)){const{value:m}=r;return!~d.findIndex(p=>p===m)}else if(d){const{value:m}=r;return m!==d}return!0});return{rtlEnabled:Jo("Collapse",t,s),collapseSlots:l,randomName:n,mergedClsPrefix:s,collapsed:c,triggerAreas:Cr(a,"triggerAreas"),mergedDisplayDirective:me(()=>{const{displayDirective:d}=e;return d||a.displayDirective}),arrowPlacement:me(()=>a.arrowPlacement),handleClick(d){let m="main";Ks(d,"arrow")&&(m="arrow"),Ks(d,"extra")&&(m="extra"),a.triggerAreas.includes(m)&&i&&!e.disabled&&i.toggleItem(c.value,r.value,d)}}},render(){const{collapseSlots:e,$slots:t,arrowPlacement:n,collapsed:r,mergedDisplayDirective:i,mergedClsPrefix:o,disabled:a,triggerAreas:s}=this,l=Js(t.header,{collapsed:r},()=>[this.title]),c=t["header-extra"]||e["header-extra"],u=t.arrow||e.arrow;return te("div",{class:[`${o}-collapse-item`,`${o}-collapse-item--${n}-arrow-placement`,a&&`${o}-collapse-item--disabled`,!r&&`${o}-collapse-item--active`,s.map(d=>`${o}-collapse-item--trigger-area-${d}`)]},te("div",{class:[`${o}-collapse-item__header`,!r&&`${o}-collapse-item__header--active`]},te("div",{class:`${o}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&l,te("div",{class:`${o}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},Js(u,{collapsed:r},()=>[te(Xo,{clsPrefix:o},{default:()=>this.rtlEnabled?te(Zg,null):te(Jg,null)})])),n==="left"&&l),Uh(c,{collapsed:r},d=>te("div",{class:`${o}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},d))),te(_0,{clsPrefix:o,displayDirective:i,show:!r},t))}}),S0={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Fh("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},C0=Ue({name:"ConfigProvider",alias:["App"],props:S0,setup(e){const t=je(Jt,null),n=me(()=>{const{theme:h}=e;if(h===null)return;const y=t==null?void 0:t.mergedThemeRef.value;return h===void 0?y:y===void 0?h:Object.assign({},y,h)}),r=me(()=>{const{themeOverrides:h}=e;if(h!==null){if(h===void 0)return t==null?void 0:t.mergedThemeOverridesRef.value;{const y=t==null?void 0:t.mergedThemeOverridesRef.value;return y===void 0?h:Xn({},y,h)}}}),i=po(()=>{const{namespace:h}=e;return h===void 0?t==null?void 0:t.mergedNamespaceRef.value:h}),o=po(()=>{const{bordered:h}=e;return h===void 0?t==null?void 0:t.mergedBorderedRef.value:h}),a=me(()=>{const{icons:h}=e;return h===void 0?t==null?void 0:t.mergedIconsRef.value:h}),s=me(()=>{const{componentOptions:h}=e;return h!==void 0?h:t==null?void 0:t.mergedComponentPropsRef.value}),l=me(()=>{const{clsPrefix:h}=e;return h!==void 0?h:t?t.mergedClsPrefixRef.value:mo}),c=me(()=>{var h;const{rtl:y}=e;if(y===void 0)return t==null?void 0:t.mergedRtlRef.value;const v={};for(const b of y)v[b.name]=Xi(b),(h=b.peers)===null||h===void 0||h.forEach(w=>{w.name in v||(v[w.name]=Xi(w))});return v}),u=me(()=>e.breakpoints||(t==null?void 0:t.mergedBreakpointsRef.value)),d=e.inlineThemeDisabled||(t==null?void 0:t.inlineThemeDisabled),m=e.preflightStyleDisabled||(t==null?void 0:t.preflightStyleDisabled),p=e.styleMountTarget||(t==null?void 0:t.styleMountTarget),g=me(()=>{const{value:h}=n,{value:y}=r,v=y&&Object.keys(y).length!==0,b=h==null?void 0:h.name;return b?v?`${b}-${gr(JSON.stringify(r.value))}`:b:v?gr(JSON.stringify(r.value)):""});return Yt(Jt,{mergedThemeHashRef:g,mergedBreakpointsRef:u,mergedRtlRef:c,mergedIconsRef:a,mergedComponentPropsRef:s,mergedBorderedRef:o,mergedNamespaceRef:i,mergedClsPrefixRef:l,mergedLocaleRef:me(()=>{const{locale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedLocaleRef.value:h}),mergedDateLocaleRef:me(()=>{const{dateLocale:h}=e;if(h!==null)return h===void 0?t==null?void 0:t.mergedDateLocaleRef.value:h}),mergedHljsRef:me(()=>{const{hljs:h}=e;return h===void 0?t==null?void 0:t.mergedHljsRef.value:h}),mergedKatexRef:me(()=>{const{katex:h}=e;return h===void 0?t==null?void 0:t.mergedKatexRef.value:h}),mergedThemeRef:n,mergedThemeOverridesRef:r,inlineThemeDisabled:d||!1,preflightStyleDisabled:m||!1,styleMountTarget:p}),{mergedClsPrefix:l,mergedBordered:o,mergedNamespace:i,mergedTheme:n,mergedThemeOverrides:r}},render(){var e,t,n,r;return this.abstract?(r=(n=this.$slots).default)===null||r===void 0?void 0:r.call(n):te(this.as||this.tag,{class:`${this.mergedClsPrefix||mo}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),w0="n-message-api",Zc="n-message-provider",A0={margin:"0 0 8px 0",padding:"10px 20px",maxWidth:"720px",minWidth:"420px",iconMargin:"0 10px 0 0",closeMargin:"0 0 0 10px",closeSize:"20px",closeIconSize:"16px",iconSize:"20px",fontSize:"14px"};function E0(e){const{textColor2:t,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,infoColor:o,successColor:a,errorColor:s,warningColor:l,popoverColor:c,boxShadow2:u,primaryColor:d,lineHeight:m,borderRadius:p,closeColorHover:g,closeColorPressed:h}=e;return Object.assign(Object.assign({},A0),{closeBorderRadius:p,textColor:t,textColorInfo:t,textColorSuccess:t,textColorError:t,textColorWarning:t,textColorLoading:t,color:c,colorInfo:c,colorSuccess:c,colorError:c,colorWarning:c,colorLoading:c,boxShadow:u,boxShadowInfo:u,boxShadowSuccess:u,boxShadowError:u,boxShadowWarning:u,boxShadowLoading:u,iconColor:t,iconColorInfo:o,iconColorSuccess:a,iconColorWarning:l,iconColorError:s,iconColorLoading:d,closeColorHover:g,closeColorPressed:h,closeIconColor:n,closeIconColorHover:r,closeIconColorPressed:i,closeColorHoverInfo:g,closeColorPressedInfo:h,closeIconColorInfo:n,closeIconColorHoverInfo:r,closeIconColorPressedInfo:i,closeColorHoverSuccess:g,closeColorPressedSuccess:h,closeIconColorSuccess:n,closeIconColorHoverSuccess:r,closeIconColorPressedSuccess:i,closeColorHoverError:g,closeColorPressedError:h,closeIconColorError:n,closeIconColorHoverError:r,closeIconColorPressedError:i,closeColorHoverWarning:g,closeColorPressedWarning:h,closeIconColorWarning:n,closeIconColorHoverWarning:r,closeIconColorPressedWarning:i,closeColorHoverLoading:g,closeColorPressedLoading:h,closeIconColorLoading:n,closeIconColorHoverLoading:r,closeIconColorPressedLoading:i,loadingColor:d,lineHeight:m,borderRadius:p,border:"0"})}const P0={common:qc,self:E0},Jc={icon:Function,type:{type:String,default:"info"},content:[String,Number,Function],showIcon:{type:Boolean,default:!0},closable:Boolean,keepAliveOnHover:Boolean,onClose:Function,onMouseenter:Function,onMouseleave:Function},x0=Se([Ve("message-wrapper",`
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `,[Yc({overflow:"visible",originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.85)"}})]),Ve("message",`
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
 `,[xe("content",`
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `),xe("icon",`
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `,[["default","info","success","warning","error","loading"].map(e=>ze(`${e}-type`,[Se("> *",`
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])),Se("> *",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `,[So()])]),xe("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `,[Se("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),Se("&:active",`
 color: var(--n-close-icon-color-pressed);
 `)])]),Ve("message-container",`
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `,[ze("top",`
 top: 12px;
 left: 0;
 right: 0;
 `),ze("top-left",`
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `),ze("top-right",`
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `),ze("bottom",`
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `),ze("bottom-left",`
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `),ze("bottom-right",`
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]),T0={info:()=>te(e0,null),success:()=>te(t0,null),warning:()=>te(n0,null),error:()=>te(Xg,null),default:()=>null},I0=Ue({name:"Message",props:Object.assign(Object.assign({},Jc),{render:Function}),setup(e){const{inlineThemeDisabled:t,mergedRtlRef:n}=Si(e),{props:r,mergedClsPrefixRef:i}=je(Zc),o=Jo("Message",n,i),a=Tr("Message","-message",x0,P0,r,i),s=me(()=>{const{type:c}=e,{common:{cubicBezierEaseInOut:u},self:{padding:d,margin:m,maxWidth:p,iconMargin:g,closeMargin:h,closeSize:y,iconSize:v,fontSize:b,lineHeight:w,borderRadius:x,border:O,iconColorInfo:j,iconColorSuccess:L,iconColorWarning:q,iconColorError:M,iconColorLoading:W,closeIconSize:ee,closeBorderRadius:A,[jt("textColor",c)]:U,[jt("boxShadow",c)]:_,[jt("color",c)]:V,[jt("closeColorHover",c)]:oe,[jt("closeColorPressed",c)]:G,[jt("closeIconColor",c)]:ie,[jt("closeIconColorPressed",c)]:Z,[jt("closeIconColorHover",c)]:ae}}=a.value;return{"--n-bezier":u,"--n-margin":m,"--n-padding":d,"--n-max-width":p,"--n-font-size":b,"--n-icon-margin":g,"--n-icon-size":v,"--n-close-icon-size":ee,"--n-close-border-radius":A,"--n-close-size":y,"--n-close-margin":h,"--n-text-color":U,"--n-color":V,"--n-box-shadow":_,"--n-icon-color-info":j,"--n-icon-color-success":L,"--n-icon-color-warning":q,"--n-icon-color-error":M,"--n-icon-color-loading":W,"--n-close-color-hover":oe,"--n-close-color-pressed":G,"--n-close-icon-color":ie,"--n-close-icon-color-pressed":Z,"--n-close-icon-color-hover":ae,"--n-line-height":w,"--n-border-radius":x,"--n-border":O}}),l=t?vc("message",me(()=>e.type[0]),s,{}):void 0;return{mergedClsPrefix:i,rtlEnabled:o,messageProviderProps:r,handleClose(){var c;(c=e.onClose)===null||c===void 0||c.call(e)},cssVars:t?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,placement:r.placement}},render(){const{render:e,type:t,closable:n,content:r,mergedClsPrefix:i,cssVars:o,themeClass:a,onRender:s,icon:l,handleClose:c,showIcon:u}=this;s==null||s();let d;return te("div",{class:[`${i}-message-wrapper`,a],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:[{alignItems:this.placement.startsWith("top")?"flex-start":"flex-end"},o]},e?e(this.$props):te("div",{class:[`${i}-message ${i}-message--${t}-type`,this.rtlEnabled&&`${i}-message--rtl`]},(d=R0(l,t,i))&&u?te("div",{class:`${i}-message__icon ${i}-message__icon--${t}-type`},te(Wc,null,{default:()=>d})):null,te("div",{class:`${i}-message__content`},jh(r)),n?te(o0,{clsPrefix:i,class:`${i}-message__close`,onClick:c,absolute:!0}):null))}});function R0(e,t,n){if(typeof e=="function")return e();{const r=t==="loading"?te(l0,{clsPrefix:n,strokeWidth:24,scale:.85}):T0[t]();return r?te(Xo,{clsPrefix:n,key:t},{default:()=>r}):null}}const O0=Ue({name:"MessageEnvironment",props:Object.assign(Object.assign({},Jc),{duration:{type:Number,default:3e3},onAfterLeave:Function,onLeave:Function,internalKey:{type:String,required:!0},onInternalAfterLeave:Function,onHide:Function,onAfterHide:Function}),setup(e){let t=null;const n=Oe(!0);Fn(()=>{r()});function r(){const{duration:u}=e;u&&(t=window.setTimeout(a,u))}function i(u){u.currentTarget===u.target&&t!==null&&(window.clearTimeout(t),t=null)}function o(u){u.currentTarget===u.target&&r()}function a(){const{onHide:u}=e;n.value=!1,t&&(window.clearTimeout(t),t=null),u&&u()}function s(){const{onClose:u}=e;u&&u(),a()}function l(){const{onAfterLeave:u,onInternalAfterLeave:d,onAfterHide:m,internalKey:p}=e;u&&u(),d&&d(p),m&&m()}function c(){a()}return{show:n,hide:a,handleClose:s,handleAfterLeave:l,handleMouseleave:o,handleMouseenter:i,deactivate:c}},render(){return te(Vc,{appear:!0,onAfterLeave:this.handleAfterLeave,onLeave:this.onLeave},{default:()=>[this.show?te(I0,{content:this.content,type:this.type,icon:this.icon,showIcon:this.showIcon,closable:this.closable,onClose:this.handleClose,onMouseenter:this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.keepAliveOnHover?this.handleMouseleave:void 0}):null]})}}),D0=Object.assign(Object.assign({},Tr.props),{to:[String,Object],duration:{type:Number,default:3e3},keepAliveOnHover:Boolean,max:Number,placement:{type:String,default:"top"},closable:Boolean,containerClass:String,containerStyle:[String,Object]}),N0=Ue({name:"MessageProvider",props:D0,setup(e){const{mergedClsPrefixRef:t}=Si(e),n=Oe([]),r=Oe({}),i={create(l,c){return o(l,Object.assign({type:"default"},c))},info(l,c){return o(l,Object.assign(Object.assign({},c),{type:"info"}))},success(l,c){return o(l,Object.assign(Object.assign({},c),{type:"success"}))},warning(l,c){return o(l,Object.assign(Object.assign({},c),{type:"warning"}))},error(l,c){return o(l,Object.assign(Object.assign({},c),{type:"error"}))},loading(l,c){return o(l,Object.assign(Object.assign({},c),{type:"loading"}))},destroyAll:s};Yt(Zc,{props:e,mergedClsPrefixRef:t}),Yt(w0,i);function o(l,c){const u=mc(),d=Sr(Object.assign(Object.assign({},c),{content:l,key:u,destroy:()=>{var p;(p=r.value[u])===null||p===void 0||p.hide()}})),{max:m}=e;return m&&n.value.length>=m&&n.value.shift(),n.value.push(d),d}function a(l){n.value.splice(n.value.findIndex(c=>c.key===l),1),delete r.value[l]}function s(){Object.values(r.value).forEach(l=>{l.hide()})}return Object.assign({mergedClsPrefix:t,messageRefs:r,messageList:n,handleAfterLeave:a},i)},render(){var e,t,n;return te(Fe,null,(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e),this.messageList.length?te(uf,{to:(n=this.to)!==null&&n!==void 0?n:"body"},te("div",{class:[`${this.mergedClsPrefix}-message-container`,`${this.mergedClsPrefix}-message-container--${this.placement}`,this.containerClass],key:"message-container",style:this.containerStyle},this.messageList.map(r=>te(O0,Object.assign({ref:i=>{i&&(this.messageRefs[r.key]=i)},internalKey:r.key,onInternalAfterLeave:this.handleAfterLeave},Bh(r,["destroy"],void 0),{duration:r.duration===void 0?this.duration:r.duration,keepAliveOnHover:r.keepAliveOnHover===void 0?this.keepAliveOnHover:r.keepAliveOnHover,closable:r.closable===void 0?this.closable:r.closable}))))):null)}}),k0={__name:"App",setup(e){const t={common:{fontFamily:"Microsoft JhengHei"}};return(n,r)=>{const i=Cf("router-view");return Qe(),Rn(dt(C0),{"theme-overrides":t,abstract:""},{default:En(()=>[Te(dt(N0),{placement:"top-right"},{default:En(()=>[Te(i)]),_:1})]),_:1})}}};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yn=typeof document<"u";function Qc(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function M0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qc(e.default)}const be=Object.assign;function Wi(e,t){const n={};for(const r in t){const i=t[r];n[r]=gt(i)?i.map(e):e(i)}return n}const lr=()=>{},gt=Array.isArray;function ha(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Xc=/#/g,L0=/&/g,F0=/\//g,B0=/=/g,j0=/\?/g,eu=/\+/g,U0=/%5B/g,z0=/%5D/g,tu=/%5E/g,$0=/%60/g,nu=/%7B/g,H0=/%7C/g,ru=/%7D/g,W0=/%20/g;function es(e){return e==null?"":encodeURI(""+e).replace(H0,"|").replace(U0,"[").replace(z0,"]")}function V0(e){return es(e).replace(nu,"{").replace(ru,"}").replace(tu,"^")}function Co(e){return es(e).replace(eu,"%2B").replace(W0,"+").replace(Xc,"%23").replace(L0,"%26").replace($0,"`").replace(nu,"{").replace(ru,"}").replace(tu,"^")}function G0(e){return Co(e).replace(B0,"%3D")}function q0(e){return es(e).replace(Xc,"%23").replace(j0,"%3F")}function Y0(e){return q0(e).replace(F0,"%2F")}function br(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const K0=/\/$/,Z0=e=>e.replace(K0,"");function Vi(e,t,n="/"){let r,i={},o="",a="";const s=t.indexOf("#");let l=t.indexOf("?");return l=s>=0&&l>s?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,s>0?s:t.length),i=e(o.slice(1))),s>=0&&(r=r||t.slice(0,s),a=t.slice(s,t.length)),r=e1(r??t,n),{fullPath:r+o+a,path:r,query:i,hash:br(a)}}function J0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pa(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Q0(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Mn(t.matched[r],n.matched[i])&&iu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Mn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function iu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!X0(e[n],t[n]))return!1;return!0}function X0(e,t){return gt(e)?ma(e,t):gt(t)?ma(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function ma(e,t){return gt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function e1(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,a,s;for(a=0;a<r.length;a++)if(s=r[a],s!==".")if(s==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(a).join("/")}const Ut={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let wo=(function(e){return e.pop="pop",e.push="push",e})({}),Gi=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function t1(e){if(!e)if(yn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Z0(e)}const n1=/^[^#]+#/;function r1(e,t){return e.replace(n1,"#")+t}function i1(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Pi=()=>({left:window.scrollX,top:window.scrollY});function o1(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=i1(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ga(e,t){return(history.state?history.state.position-t:-1)+e}const Ao=new Map;function s1(e,t){Ao.set(e,t)}function a1(e){const t=Ao.get(e);return Ao.delete(e),t}function l1(e){return typeof e=="string"||e&&typeof e=="object"}function ou(e){return typeof e=="string"||typeof e=="symbol"}let Re=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const su=Symbol("");Re.MATCHER_NOT_FOUND+"",Re.NAVIGATION_GUARD_REDIRECT+"",Re.NAVIGATION_ABORTED+"",Re.NAVIGATION_CANCELLED+"",Re.NAVIGATION_DUPLICATED+"";function Ln(e,t){return be(new Error,{type:e,[su]:!0},t)}function Tt(e,t){return e instanceof Error&&su in e&&(t==null||!!(e.type&t))}const c1=["params","query","hash"];function u1(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of c1)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function f1(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const i=n[r].replace(eu," "),o=i.indexOf("="),a=br(o<0?i:i.slice(0,o)),s=o<0?null:br(i.slice(o+1));if(a in t){let l=t[a];gt(l)||(l=t[a]=[l]),l.push(s)}else t[a]=s}return t}function va(e){let t="";for(let n in e){const r=e[n];if(n=G0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(gt(r)?r.map(i=>i&&Co(i)):[r&&Co(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function d1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=gt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const h1=Symbol(""),_a=Symbol(""),ts=Symbol(""),au=Symbol(""),Eo=Symbol("");function Zn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Wt(e,t,n,r,i,o=a=>a()){const a=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,l)=>{const c=m=>{m===!1?l(Ln(Re.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):l1(m)?l(Ln(Re.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(a&&r.enterCallbacks[i]===a&&typeof m=="function"&&a.push(m),s())},u=o(()=>e.call(r&&r.instances[i],t,n,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(m=>l(m))})}function qi(e,t,n,r,i=o=>o()){const o=[];for(const a of e)for(const s in a.components){let l=a.components[s];if(!(t!=="beforeRouteEnter"&&!a.instances[s]))if(Qc(l)){const c=(l.__vccOpts||l)[t];c&&o.push(Wt(c,n,r,a,s,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${a.path}"`);const d=M0(u)?u.default:u;a.mods[s]=u,a.components[s]=d;const m=(d.__vccOpts||d)[t];return m&&Wt(m,n,r,a,s,i)()}))}}return o}function p1(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){const s=t.matched[a];s&&(e.matched.find(c=>Mn(c,s))?r.push(s):n.push(s));const l=e.matched[a];l&&(t.matched.find(c=>Mn(c,l))||i.push(l))}return[n,r,i]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let m1=()=>location.protocol+"//"+location.host;function lu(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,s=i.slice(a);return s[0]!=="/"&&(s="/"+s),pa(s,"")}return pa(n,e)+r+i}function g1(e,t,n,r){let i=[],o=[],a=null;const s=({state:m})=>{const p=lu(e,location),g=n.value,h=t.value;let y=0;if(m){if(n.value=p,t.value=m,a&&a===g){a=null;return}y=h?m.position-h.position:0}else r(p);i.forEach(v=>{v(n.value,g,{delta:y,type:wo.pop,direction:y?y>0?Gi.forward:Gi.back:Gi.unknown})})};function l(){a=n.value}function c(m){i.push(m);const p=()=>{const g=i.indexOf(m);g>-1&&i.splice(g,1)};return o.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(be({},m.state,{scroll:Pi()}),"")}}function d(){for(const m of o)m();o=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function ba(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Pi():null}}function v1(e){const{history:t,location:n}=window,r={value:lu(e,n)},i={value:t.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),m=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:m1()+e+l;try{t[u?"replaceState":"pushState"](c,"",m),i.value=c}catch(p){console.error(p),n[u?"replace":"assign"](m)}}function a(l,c){o(l,be({},t.state,ba(i.value.back,l,i.value.forward,!0),c,{position:i.value.position}),!0),r.value=l}function s(l,c){const u=be({},i.value,t.state,{forward:l,scroll:Pi()});o(u.current,u,!0),o(l,be({},ba(r.value,l,null),{position:u.position+1},c),!1),r.value=l}return{location:r,state:i,push:s,replace:a}}function _1(e){e=t1(e);const t=v1(e),n=g1(e,t.state,t.location,t.replace);function r(o,a=!0){a||n.pauseListeners(),history.go(o)}const i=be({location:"",base:e,go:r,createHref:r1.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}let an=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Le=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Le||{});const b1={type:an.Static,value:""},y1=/[a-zA-Z0-9_]/;function S1(e){if(!e)return[[]];if(e==="/")return[[b1]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Le.Static,r=n;const i=[];let o;function a(){o&&i.push(o),o=[]}let s=0,l,c="",u="";function d(){c&&(n===Le.Static?o.push({type:an.Static,value:c}):n===Le.Param||n===Le.ParamRegExp||n===Le.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:an.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==Le.ParamRegExp){r=n,n=Le.EscapeNext;continue}switch(n){case Le.Static:l==="/"?(c&&d(),a()):l===":"?(d(),n=Le.Param):m();break;case Le.EscapeNext:m(),n=r;break;case Le.Param:l==="("?n=Le.ParamRegExp:y1.test(l)?m():(d(),n=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case Le.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Le.ParamRegExpEnd:u+=l;break;case Le.ParamRegExpEnd:d(),n=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&s--,u="";break;default:t("Unknown state");break}}return n===Le.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),a(),i}const ya="[^/]+?",C1={sensitive:!1,strict:!1,start:!0,end:!0};var nt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(nt||{});const w1=/[.+*?^${}()[\]/\\]/g;function A1(e,t){const n=be({},C1,t),r=[];let i=n.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[nt.Root];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const m=c[d];let p=nt.Segment+(n.sensitive?nt.BonusCaseSensitive:0);if(m.type===an.Static)d||(i+="/"),i+=m.value.replace(w1,"\\$&"),p+=nt.Static;else if(m.type===an.Param){const{value:g,repeatable:h,optional:y,regexp:v}=m;o.push({name:g,repeatable:h,optional:y});const b=v||ya;if(b!==ya){p+=nt.BonusCustomRegExp;try{`${b}`}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+x.message)}}let w=h?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(w=y&&c.length<2?`(?:/${w})`:"/"+w),y&&(w+="?"),i+=w,p+=nt.Dynamic,y&&(p+=nt.BonusOptional),h&&(p+=nt.BonusRepeatable),b===".*"&&(p+=nt.BonusWildcard)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=nt.BonusStrict}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function s(c){const u=c.match(a),d={};if(!u)return null;for(let m=1;m<u.length;m++){const p=u[m]||"",g=o[m-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const m of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of m)if(p.type===an.Static)u+=p.value;else if(p.type===an.Param){const{value:g,repeatable:h,optional:y}=p,v=g in c?c[g]:"";if(gt(v)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=gt(v)?v.join("/"):v;if(!b)if(y)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:a,score:r,keys:o,parse:s,stringify:l}}function E1(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===nt.Static+nt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===nt.Static+nt.Segment?1:-1:0}function cu(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const o=E1(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(Sa(r))return 1;if(Sa(i))return-1}return i.length-r.length}function Sa(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const P1={strict:!1,end:!0,sensitive:!1};function x1(e,t,n){const r=A1(S1(e.path),n),i=be(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function T1(e,t){const n=[],r=new Map;t=ha(P1,t);function i(d){return r.get(d)}function o(d,m,p){const g=!p,h=wa(d);h.aliasOf=p&&p.record;const y=ha(t,d),v=[h];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const O of x)v.push(wa(be({},h,{components:p?p.record.components:h.components,path:O,aliasOf:p?p.record:h})))}let b,w;for(const x of v){const{path:O}=x;if(m&&O[0]!=="/"){const j=m.record.path,L=j[j.length-1]==="/"?"":"/";x.path=m.record.path+(O&&L+O)}if(b=x1(x,m,y),p?p.alias.push(b):(w=w||b,w!==b&&w.alias.push(b),g&&d.name&&!Aa(b)&&a(d.name)),uu(b)&&l(b),h.children){const j=h.children;for(let L=0;L<j.length;L++)o(j[L],b,p&&p.children[L])}p=p||b}return w?()=>{a(w)}:lr}function a(d){if(ou(d)){const m=r.get(d);m&&(r.delete(d),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(d);m>-1&&(n.splice(m,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function s(){return n}function l(d){const m=O1(d,n);n.splice(m,0,d),d.record.name&&!Aa(d)&&r.set(d.record.name,d)}function c(d,m){let p,g={},h,y;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw Ln(Re.MATCHER_NOT_FOUND,{location:d});y=p.record.name,g=be(Ca(m.params,p.keys.filter(w=>!w.optional).concat(p.parent?p.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Ca(d.params,p.keys.map(w=>w.name))),h=p.stringify(g)}else if(d.path!=null)h=d.path,p=n.find(w=>w.re.test(h)),p&&(g=p.parse(h),y=p.record.name);else{if(p=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!p)throw Ln(Re.MATCHER_NOT_FOUND,{location:d,currentLocation:m});y=p.record.name,g=be({},m.params,d.params),h=p.stringify(g)}const v=[];let b=p;for(;b;)v.unshift(b.record),b=b.parent;return{name:y,path:h,params:g,matched:v,meta:R1(v)}}e.forEach(d=>o(d));function u(){n.length=0,r.clear()}return{addRoute:o,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ca(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wa(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:I1(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function I1(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Aa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function R1(e){return e.reduce((t,n)=>be(t,n.meta),{})}function O1(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;cu(e,t[o])<0?r=o:n=o+1}const i=D1(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function D1(e){let t=e;for(;t=t.parent;)if(uu(t)&&cu(e,t)===0)return t}function uu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ea(e){const t=je(ts),n=je(au),r=me(()=>{const l=dt(e.to);return t.resolve(l)}),i=me(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const m=d.findIndex(Mn.bind(null,u));if(m>-1)return m;const p=Pa(l[c-2]);return c>1&&Pa(u)===p&&d[d.length-1].path!==p?d.findIndex(Mn.bind(null,l[c-2])):m}),o=me(()=>i.value>-1&&F1(n.params,r.value.params)),a=me(()=>i.value>-1&&i.value===n.matched.length-1&&iu(n.params,r.value.params));function s(l={}){if(L1(l)){const c=t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(lr);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:o,isExactActive:a,navigate:s}}function N1(e){return e.length===1?e[0]:e}const k1=Ue({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ea,setup(e,{slots:t}){const n=Sr(Ea(e)),{options:r}=je(ts),i=me(()=>({[xa(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xa(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&N1(t.default(n));return e.custom?o:te("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),M1=k1;function L1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function F1(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!gt(i)||i.length!==r.length||r.some((o,a)=>o.valueOf()!==i[a].valueOf()))return!1}return!0}function Pa(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xa=(e,t,n)=>e??t??n,B1=Ue({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=je(Eo),i=me(()=>e.route||r.value),o=je(_a,0),a=me(()=>{let c=dt(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),s=me(()=>i.value.matched[a.value]);Yt(_a,me(()=>a.value+1)),Yt(h1,s),Yt(Eo,i);const l=Oe();return un(()=>[l.value,s.value,e.name],([c,u,d],[m,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Mn(u,p)||!m)&&(u.enterCallbacks[d]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,d=s.value,m=d&&d.components[u];if(!m)return Ta(n.default,{Component:m,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,y=te(m,be({},g,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ta(n.default,{Component:y,route:c})||y}}});function Ta(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const j1=B1;function U1(e){const t=T1(e.routes,e),n=e.parseQuery||f1,r=e.stringifyQuery||va,i=e.history,o=Zn(),a=Zn(),s=Zn(),l=nl(Ut);let c=Ut;yn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wi.bind(null,H=>""+H),d=Wi.bind(null,Y0),m=Wi.bind(null,br);function p(H,J){let K,re;return ou(H)?(K=t.getRecordMatcher(H),re=J):re=H,t.addRoute(re,K)}function g(H){const J=t.getRecordMatcher(H);J&&t.removeRoute(J)}function h(){return t.getRoutes().map(H=>H.record)}function y(H){return!!t.getRecordMatcher(H)}function v(H,J){if(J=be({},J||l.value),typeof H=="string"){const f=Vi(n,H,J.path),R=t.resolve({path:f.path},J),T=i.createHref(f.fullPath);return be(f,R,{params:m(R.params),hash:br(f.hash),redirectedFrom:void 0,href:T})}let K;if(H.path!=null)K=be({},H,{path:Vi(n,H.path,J.path).path});else{const f=be({},H.params);for(const R in f)f[R]==null&&delete f[R];K=be({},H,{params:d(f)}),J.params=d(J.params)}const re=t.resolve(K,J),ce=H.hash||"";re.params=u(m(re.params));const E=J0(r,be({},H,{hash:V0(ce),path:re.path})),I=i.createHref(E);return be({fullPath:E,hash:ce,query:r===va?d1(H.query):H.query||{}},re,{redirectedFrom:void 0,href:I})}function b(H){return typeof H=="string"?Vi(n,H,l.value.path):be({},H)}function w(H,J){if(c!==H)return Ln(Re.NAVIGATION_CANCELLED,{from:J,to:H})}function x(H){return L(H)}function O(H){return x(be(b(H),{replace:!0}))}function j(H,J){const K=H.matched[H.matched.length-1];if(K&&K.redirect){const{redirect:re}=K;let ce=typeof re=="function"?re(H,J):re;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=b(ce):{path:ce},ce.params={}),be({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function L(H,J){const K=c=v(H),re=l.value,ce=H.state,E=H.force,I=H.replace===!0,f=j(K,re);if(f)return L(be(b(f),{state:typeof f=="object"?be({},ce,f.state):ce,force:E,replace:I}),J||K);const R=K;R.redirectedFrom=J;let T;return!E&&Q0(r,re,K)&&(T=Ln(Re.NAVIGATION_DUPLICATED,{to:R,from:re}),z(re,re,!0,!1)),(T?Promise.resolve(T):W(R,re)).catch(S=>Tt(S)?Tt(S,Re.NAVIGATION_GUARD_REDIRECT)?S:ae(S):ie(S,R,re)).then(S=>{if(S){if(Tt(S,Re.NAVIGATION_GUARD_REDIRECT))return L(be({replace:I},b(S.to),{state:typeof S.to=="object"?be({},ce,S.to.state):ce,force:E}),J||R)}else S=A(R,re,!0,I,ce);return ee(R,re,S),S})}function q(H,J){const K=w(H,J);return K?Promise.reject(K):Promise.resolve()}function M(H){const J=ne.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(H):H()}function W(H,J){let K;const[re,ce,E]=p1(H,J);K=qi(re.reverse(),"beforeRouteLeave",H,J);for(const f of re)f.leaveGuards.forEach(R=>{K.push(Wt(R,H,J))});const I=q.bind(null,H,J);return K.push(I),ge(K).then(()=>{K=[];for(const f of o.list())K.push(Wt(f,H,J));return K.push(I),ge(K)}).then(()=>{K=qi(ce,"beforeRouteUpdate",H,J);for(const f of ce)f.updateGuards.forEach(R=>{K.push(Wt(R,H,J))});return K.push(I),ge(K)}).then(()=>{K=[];for(const f of E)if(f.beforeEnter)if(gt(f.beforeEnter))for(const R of f.beforeEnter)K.push(Wt(R,H,J));else K.push(Wt(f.beforeEnter,H,J));return K.push(I),ge(K)}).then(()=>(H.matched.forEach(f=>f.enterCallbacks={}),K=qi(E,"beforeRouteEnter",H,J,M),K.push(I),ge(K))).then(()=>{K=[];for(const f of a.list())K.push(Wt(f,H,J));return K.push(I),ge(K)}).catch(f=>Tt(f,Re.NAVIGATION_CANCELLED)?f:Promise.reject(f))}function ee(H,J,K){s.list().forEach(re=>M(()=>re(H,J,K)))}function A(H,J,K,re,ce){const E=w(H,J);if(E)return E;const I=J===Ut,f=yn?history.state:{};K&&(re||I?i.replace(H.fullPath,be({scroll:I&&f&&f.scroll},ce)):i.push(H.fullPath,ce)),l.value=H,z(H,J,K,I),ae()}let U;function _(){U||(U=i.listen((H,J,K)=>{if(!X.listening)return;const re=v(H),ce=j(re,X.currentRoute.value);if(ce){L(be(ce,{replace:!0,force:!0}),re).catch(lr);return}c=re;const E=l.value;yn&&s1(ga(E.fullPath,K.delta),Pi()),W(re,E).catch(I=>Tt(I,Re.NAVIGATION_ABORTED|Re.NAVIGATION_CANCELLED)?I:Tt(I,Re.NAVIGATION_GUARD_REDIRECT)?(L(be(b(I.to),{force:!0}),re).then(f=>{Tt(f,Re.NAVIGATION_ABORTED|Re.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===wo.pop&&i.go(-1,!1)}).catch(lr),Promise.reject()):(K.delta&&i.go(-K.delta,!1),ie(I,re,E))).then(I=>{I=I||A(re,E,!1),I&&(K.delta&&!Tt(I,Re.NAVIGATION_CANCELLED)?i.go(-K.delta,!1):K.type===wo.pop&&Tt(I,Re.NAVIGATION_ABORTED|Re.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ee(re,E,I)}).catch(lr)}))}let V=Zn(),oe=Zn(),G;function ie(H,J,K){ae(H);const re=oe.list();return re.length?re.forEach(ce=>ce(H,J,K)):console.error(H),Promise.reject(H)}function Z(){return G&&l.value!==Ut?Promise.resolve():new Promise((H,J)=>{V.add([H,J])})}function ae(H){return G||(G=!H,_(),V.list().forEach(([J,K])=>H?K(H):J()),V.reset()),H}function z(H,J,K,re){const{scrollBehavior:ce}=e;if(!yn||!ce)return Promise.resolve();const E=!K&&a1(ga(H.fullPath,0))||(re||!K)&&history.state&&history.state.scroll||null;return sl().then(()=>ce(H,J,E)).then(I=>I&&o1(I)).catch(I=>ie(I,H,J))}const F=H=>i.go(H);let le;const ne=new Set,X={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:h,resolve:v,options:e,push:x,replace:O,go:F,back:()=>F(-1),forward:()=>F(1),beforeEach:o.add,beforeResolve:a.add,afterEach:s.add,onError:oe.add,isReady:Z,install(H){H.component("RouterLink",M1),H.component("RouterView",j1),H.config.globalProperties.$router=X,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(l)}),yn&&!le&&l.value===Ut&&(le=!0,x(i.location).catch(re=>{}));const J={};for(const re in Ut)Object.defineProperty(J,re,{get:()=>l.value[re],enumerable:!0});H.provide(ts,X),H.provide(au,tl(J)),H.provide(Eo,l);const K=H.unmount;ne.add(H),H.unmount=function(){ne.delete(H),ne.size<1&&(c=Ut,U&&U(),U=null,l.value=Ut,le=!1,G=!1),K()}}};function ge(H){return H.reduce((J,K)=>J.then(()=>M(K)),Promise.resolve())}return X}const z1="modulepreload",$1=function(e){return"/RdssDevelopeGuide/"+e},Ia={},We=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=a(n.map(c=>{if(c=$1(c),c in Ia)return;Ia[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":z1,u||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),u)return new Promise((p,g)=>{m.addEventListener("load",p),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&o(s.reason);return t().catch(o)})};var Gt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function H1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ur(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Yi={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/var Ra;function W1(){return Ra||(Ra=1,(function(e,t){(function(n){e.exports=n()})(function(){return(function n(r,i,o){function a(c,u){if(!i[c]){if(!r[c]){var d=typeof Ur=="function"&&Ur;if(!u&&d)return d(c,!0);if(s)return s(c,!0);var m=new Error("Cannot find module '"+c+"'");throw m.code="MODULE_NOT_FOUND",m}var p=i[c]={exports:{}};r[c][0].call(p.exports,function(g){var h=r[c][1][g];return a(h||g)},p,p.exports,n,r,i,o)}return i[c].exports}for(var s=typeof Ur=="function"&&Ur,l=0;l<o.length;l++)a(o[l]);return a})({1:[function(n,r,i){var o=n("./utils"),a=n("./support"),s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";i.encode=function(l){for(var c,u,d,m,p,g,h,y=[],v=0,b=l.length,w=b,x=o.getTypeOf(l)!=="string";v<l.length;)w=b-v,d=x?(c=l[v++],u=v<b?l[v++]:0,v<b?l[v++]:0):(c=l.charCodeAt(v++),u=v<b?l.charCodeAt(v++):0,v<b?l.charCodeAt(v++):0),m=c>>2,p=(3&c)<<4|u>>4,g=1<w?(15&u)<<2|d>>6:64,h=2<w?63&d:64,y.push(s.charAt(m)+s.charAt(p)+s.charAt(g)+s.charAt(h));return y.join("")},i.decode=function(l){var c,u,d,m,p,g,h=0,y=0,v="data:";if(l.substr(0,v.length)===v)throw new Error("Invalid base64 input, it looks like a data url.");var b,w=3*(l=l.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(l.charAt(l.length-1)===s.charAt(64)&&w--,l.charAt(l.length-2)===s.charAt(64)&&w--,w%1!=0)throw new Error("Invalid base64 input, bad content length.");for(b=a.uint8array?new Uint8Array(0|w):new Array(0|w);h<l.length;)c=s.indexOf(l.charAt(h++))<<2|(m=s.indexOf(l.charAt(h++)))>>4,u=(15&m)<<4|(p=s.indexOf(l.charAt(h++)))>>2,d=(3&p)<<6|(g=s.indexOf(l.charAt(h++))),b[y++]=c,p!==64&&(b[y++]=u),g!==64&&(b[y++]=d);return b}},{"./support":30,"./utils":32}],2:[function(n,r,i){var o=n("./external"),a=n("./stream/DataWorker"),s=n("./stream/Crc32Probe"),l=n("./stream/DataLengthProbe");function c(u,d,m,p,g){this.compressedSize=u,this.uncompressedSize=d,this.crc32=m,this.compression=p,this.compressedContent=g}c.prototype={getContentWorker:function(){var u=new a(o.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")),d=this;return u.on("end",function(){if(this.streamInfo.data_length!==d.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),u},getCompressedWorker:function(){return new a(o.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},c.createWorkerFrom=function(u,d,m){return u.pipe(new s).pipe(new l("uncompressedSize")).pipe(d.compressWorker(m)).pipe(new l("compressedSize")).withStreamInfo("compression",d)},r.exports=c},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(n,r,i){var o=n("./stream/GenericWorker");i.STORE={magic:"\0\0",compressWorker:function(){return new o("STORE compression")},uncompressWorker:function(){return new o("STORE decompression")}},i.DEFLATE=n("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(n,r,i){var o=n("./utils"),a=(function(){for(var s,l=[],c=0;c<256;c++){s=c;for(var u=0;u<8;u++)s=1&s?3988292384^s>>>1:s>>>1;l[c]=s}return l})();r.exports=function(s,l){return s!==void 0&&s.length?o.getTypeOf(s)!=="string"?(function(c,u,d,m){var p=a,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^p[255&(c^u[h])];return-1^c})(0|l,s,s.length,0):(function(c,u,d,m){var p=a,g=m+d;c^=-1;for(var h=m;h<g;h++)c=c>>>8^p[255&(c^u.charCodeAt(h))];return-1^c})(0|l,s,s.length,0):0}},{"./utils":32}],5:[function(n,r,i){i.base64=!1,i.binary=!1,i.dir=!1,i.createFolders=!0,i.date=null,i.compression=null,i.compressionOptions=null,i.comment=null,i.unixPermissions=null,i.dosPermissions=null},{}],6:[function(n,r,i){var o=null;o=typeof Promise<"u"?Promise:n("lie"),r.exports={Promise:o}},{lie:37}],7:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=n("pako"),s=n("./utils"),l=n("./stream/GenericWorker"),c=o?"uint8array":"array";function u(d,m){l.call(this,"FlateWorker/"+d),this._pako=null,this._pakoAction=d,this._pakoOptions=m,this.meta={}}i.magic="\b\0",s.inherits(u,l),u.prototype.processChunk=function(d){this.meta=d.meta,this._pako===null&&this._createPako(),this._pako.push(s.transformTo(c,d.data),!1)},u.prototype.flush=function(){l.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},u.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this._pako=null},u.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var d=this;this._pako.onData=function(m){d.push({data:m,meta:d.meta})}},i.compressWorker=function(d){return new u("Deflate",d)},i.uncompressWorker=function(){return new u("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(n,r,i){function o(p,g){var h,y="";for(h=0;h<g;h++)y+=String.fromCharCode(255&p),p>>>=8;return y}function a(p,g,h,y,v,b){var w,x,O=p.file,j=p.compression,L=b!==c.utf8encode,q=s.transformTo("string",b(O.name)),M=s.transformTo("string",c.utf8encode(O.name)),W=O.comment,ee=s.transformTo("string",b(W)),A=s.transformTo("string",c.utf8encode(W)),U=M.length!==O.name.length,_=A.length!==W.length,V="",oe="",G="",ie=O.dir,Z=O.date,ae={crc32:0,compressedSize:0,uncompressedSize:0};g&&!h||(ae.crc32=p.crc32,ae.compressedSize=p.compressedSize,ae.uncompressedSize=p.uncompressedSize);var z=0;g&&(z|=8),L||!U&&!_||(z|=2048);var F=0,le=0;ie&&(F|=16),v==="UNIX"?(le=798,F|=(function(X,ge){var H=X;return X||(H=ge?16893:33204),(65535&H)<<16})(O.unixPermissions,ie)):(le=20,F|=(function(X){return 63&(X||0)})(O.dosPermissions)),w=Z.getUTCHours(),w<<=6,w|=Z.getUTCMinutes(),w<<=5,w|=Z.getUTCSeconds()/2,x=Z.getUTCFullYear()-1980,x<<=4,x|=Z.getUTCMonth()+1,x<<=5,x|=Z.getUTCDate(),U&&(oe=o(1,1)+o(u(q),4)+M,V+="up"+o(oe.length,2)+oe),_&&(G=o(1,1)+o(u(ee),4)+A,V+="uc"+o(G.length,2)+G);var ne="";return ne+=`
\0`,ne+=o(z,2),ne+=j.magic,ne+=o(w,2),ne+=o(x,2),ne+=o(ae.crc32,4),ne+=o(ae.compressedSize,4),ne+=o(ae.uncompressedSize,4),ne+=o(q.length,2),ne+=o(V.length,2),{fileRecord:d.LOCAL_FILE_HEADER+ne+q+V,dirRecord:d.CENTRAL_FILE_HEADER+o(le,2)+ne+o(ee.length,2)+"\0\0\0\0"+o(F,4)+o(y,4)+q+V+ee}}var s=n("../utils"),l=n("../stream/GenericWorker"),c=n("../utf8"),u=n("../crc32"),d=n("../signature");function m(p,g,h,y){l.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=g,this.zipPlatform=h,this.encodeFileName=y,this.streamFiles=p,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}s.inherits(m,l),m.prototype.push=function(p){var g=p.meta.percent||0,h=this.entriesCount,y=this._sources.length;this.accumulate?this.contentBuffer.push(p):(this.bytesWritten+=p.data.length,l.prototype.push.call(this,{data:p.data,meta:{currentFile:this.currentFile,percent:h?(g+100*(h-y-1))/h:100}}))},m.prototype.openedSource=function(p){this.currentSourceOffset=this.bytesWritten,this.currentFile=p.file.name;var g=this.streamFiles&&!p.file.dir;if(g){var h=a(p,g,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},m.prototype.closedSource=function(p){this.accumulate=!1;var g=this.streamFiles&&!p.file.dir,h=a(p,g,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),g)this.push({data:(function(y){return d.DATA_DESCRIPTOR+o(y.crc32,4)+o(y.compressedSize,4)+o(y.uncompressedSize,4)})(p),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},m.prototype.flush=function(){for(var p=this.bytesWritten,g=0;g<this.dirRecords.length;g++)this.push({data:this.dirRecords[g],meta:{percent:100}});var h=this.bytesWritten-p,y=(function(v,b,w,x,O){var j=s.transformTo("string",O(x));return d.CENTRAL_DIRECTORY_END+"\0\0\0\0"+o(v,2)+o(v,2)+o(b,4)+o(w,4)+o(j.length,2)+j})(this.dirRecords.length,h,p,this.zipComment,this.encodeFileName);this.push({data:y,meta:{percent:100}})},m.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},m.prototype.registerPrevious=function(p){this._sources.push(p);var g=this;return p.on("data",function(h){g.processChunk(h)}),p.on("end",function(){g.closedSource(g.previous.streamInfo),g._sources.length?g.prepareNextSource():g.end()}),p.on("error",function(h){g.error(h)}),this},m.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},m.prototype.error=function(p){var g=this._sources;if(!l.prototype.error.call(this,p))return!1;for(var h=0;h<g.length;h++)try{g[h].error(p)}catch{}return!0},m.prototype.lock=function(){l.prototype.lock.call(this);for(var p=this._sources,g=0;g<p.length;g++)p[g].lock()},r.exports=m},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(n,r,i){var o=n("../compressions"),a=n("./ZipFileWorker");i.generateWorker=function(s,l,c){var u=new a(l.streamFiles,c,l.platform,l.encodeFileName),d=0;try{s.forEach(function(m,p){d++;var g=(function(b,w){var x=b||w,O=o[x];if(!O)throw new Error(x+" is not a valid compression method !");return O})(p.options.compression,l.compression),h=p.options.compressionOptions||l.compressionOptions||{},y=p.dir,v=p.date;p._compressWorker(g,h).withStreamInfo("file",{name:m,dir:y,date:v,comment:p.comment||"",unixPermissions:p.unixPermissions,dosPermissions:p.dosPermissions}).pipe(u)}),u.entriesCount=d}catch(m){u.error(m)}return u}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(n,r,i){function o(){if(!(this instanceof o))return new o;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new o;for(var s in this)typeof this[s]!="function"&&(a[s]=this[s]);return a}}(o.prototype=n("./object")).loadAsync=n("./load"),o.support=n("./support"),o.defaults=n("./defaults"),o.version="3.10.1",o.loadAsync=function(a,s){return new o().loadAsync(a,s)},o.external=n("./external"),r.exports=o},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(n,r,i){var o=n("./utils"),a=n("./external"),s=n("./utf8"),l=n("./zipEntries"),c=n("./stream/Crc32Probe"),u=n("./nodejsUtils");function d(m){return new a.Promise(function(p,g){var h=m.decompressed.getContentWorker().pipe(new c);h.on("error",function(y){g(y)}).on("end",function(){h.streamInfo.crc32!==m.decompressed.crc32?g(new Error("Corrupted zip : CRC32 mismatch")):p()}).resume()})}r.exports=function(m,p){var g=this;return p=o.extend(p||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:s.utf8decode}),u.isNode&&u.isStream(m)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):o.prepareContent("the loaded zip file",m,!0,p.optimizedBinaryString,p.base64).then(function(h){var y=new l(p);return y.load(h),y}).then(function(h){var y=[a.Promise.resolve(h)],v=h.files;if(p.checkCRC32)for(var b=0;b<v.length;b++)y.push(d(v[b]));return a.Promise.all(y)}).then(function(h){for(var y=h.shift(),v=y.files,b=0;b<v.length;b++){var w=v[b],x=w.fileNameStr,O=o.resolve(w.fileNameStr);g.file(O,w.decompressed,{binary:!0,optimizedBinaryString:!0,date:w.date,dir:w.dir,comment:w.fileCommentStr.length?w.fileCommentStr:null,unixPermissions:w.unixPermissions,dosPermissions:w.dosPermissions,createFolders:p.createFolders}),w.dir||(g.file(O).unsafeOriginalName=x)}return y.zipComment.length&&(g.comment=y.zipComment),g})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(n,r,i){var o=n("../utils"),a=n("../stream/GenericWorker");function s(l,c){a.call(this,"Nodejs stream input adapter for "+l),this._upstreamEnded=!1,this._bindStream(c)}o.inherits(s,a),s.prototype._bindStream=function(l){var c=this;(this._stream=l).pause(),l.on("data",function(u){c.push({data:u,meta:{percent:0}})}).on("error",function(u){c.isPaused?this.generatedError=u:c.error(u)}).on("end",function(){c.isPaused?c._upstreamEnded=!0:c.end()})},s.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},r.exports=s},{"../stream/GenericWorker":28,"../utils":32}],13:[function(n,r,i){var o=n("readable-stream").Readable;function a(s,l,c){o.call(this,l),this._helper=s;var u=this;s.on("data",function(d,m){u.push(d)||u._helper.pause(),c&&c(m)}).on("error",function(d){u.emit("error",d)}).on("end",function(){u.push(null)})}n("../utils").inherits(a,o),a.prototype._read=function(){this._helper.resume()},r.exports=a},{"../utils":32,"readable-stream":16}],14:[function(n,r,i){r.exports={isNode:typeof Buffer<"u",newBufferFrom:function(o,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(o,a);if(typeof o=="number")throw new Error('The "data" argument must not be a number');return new Buffer(o,a)},allocBuffer:function(o){if(Buffer.alloc)return Buffer.alloc(o);var a=new Buffer(o);return a.fill(0),a},isBuffer:function(o){return Buffer.isBuffer(o)},isStream:function(o){return o&&typeof o.on=="function"&&typeof o.pause=="function"&&typeof o.resume=="function"}}},{}],15:[function(n,r,i){function o(O,j,L){var q,M=s.getTypeOf(j),W=s.extend(L||{},u);W.date=W.date||new Date,W.compression!==null&&(W.compression=W.compression.toUpperCase()),typeof W.unixPermissions=="string"&&(W.unixPermissions=parseInt(W.unixPermissions,8)),W.unixPermissions&&16384&W.unixPermissions&&(W.dir=!0),W.dosPermissions&&16&W.dosPermissions&&(W.dir=!0),W.dir&&(O=v(O)),W.createFolders&&(q=y(O))&&b.call(this,q,!0);var ee=M==="string"&&W.binary===!1&&W.base64===!1;L&&L.binary!==void 0||(W.binary=!ee),(j instanceof d&&j.uncompressedSize===0||W.dir||!j||j.length===0)&&(W.base64=!1,W.binary=!0,j="",W.compression="STORE",M="string");var A=null;A=j instanceof d||j instanceof l?j:g.isNode&&g.isStream(j)?new h(O,j):s.prepareContent(O,j,W.binary,W.optimizedBinaryString,W.base64);var U=new m(O,A,W);this.files[O]=U}var a=n("./utf8"),s=n("./utils"),l=n("./stream/GenericWorker"),c=n("./stream/StreamHelper"),u=n("./defaults"),d=n("./compressedObject"),m=n("./zipObject"),p=n("./generate"),g=n("./nodejsUtils"),h=n("./nodejs/NodejsStreamInputAdapter"),y=function(O){O.slice(-1)==="/"&&(O=O.substring(0,O.length-1));var j=O.lastIndexOf("/");return 0<j?O.substring(0,j):""},v=function(O){return O.slice(-1)!=="/"&&(O+="/"),O},b=function(O,j){return j=j!==void 0?j:u.createFolders,O=v(O),this.files[O]||o.call(this,O,null,{dir:!0,createFolders:j}),this.files[O]};function w(O){return Object.prototype.toString.call(O)==="[object RegExp]"}var x={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(O){var j,L,q;for(j in this.files)q=this.files[j],(L=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&O(L,q)},filter:function(O){var j=[];return this.forEach(function(L,q){O(L,q)&&j.push(q)}),j},file:function(O,j,L){if(arguments.length!==1)return O=this.root+O,o.call(this,O,j,L),this;if(w(O)){var q=O;return this.filter(function(W,ee){return!ee.dir&&q.test(W)})}var M=this.files[this.root+O];return M&&!M.dir?M:null},folder:function(O){if(!O)return this;if(w(O))return this.filter(function(M,W){return W.dir&&O.test(M)});var j=this.root+O,L=b.call(this,j),q=this.clone();return q.root=L.name,q},remove:function(O){O=this.root+O;var j=this.files[O];if(j||(O.slice(-1)!=="/"&&(O+="/"),j=this.files[O]),j&&!j.dir)delete this.files[O];else for(var L=this.filter(function(M,W){return W.name.slice(0,O.length)===O}),q=0;q<L.length;q++)delete this.files[L[q].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(O){var j,L={};try{if((L=s.extend(O||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=L.type.toLowerCase(),L.compression=L.compression.toUpperCase(),L.type==="binarystring"&&(L.type="string"),!L.type)throw new Error("No output type specified.");s.checkSupport(L.type),L.platform!=="darwin"&&L.platform!=="freebsd"&&L.platform!=="linux"&&L.platform!=="sunos"||(L.platform="UNIX"),L.platform==="win32"&&(L.platform="DOS");var q=L.comment||this.comment||"";j=p.generateWorker(this,L,q)}catch(M){(j=new l("error")).error(M)}return new c(j,L.type||"string",L.mimeType)},generateAsync:function(O,j){return this.generateInternalStream(O).accumulate(j)},generateNodeStream:function(O,j){return(O=O||{}).type||(O.type="nodebuffer"),this.generateInternalStream(O).toNodejsStream(j)}};r.exports=x},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(n,r,i){r.exports=n("stream")},{stream:void 0}],17:[function(n,r,i){var o=n("./DataReader");function a(s){o.call(this,s);for(var l=0;l<this.data.length;l++)s[l]=255&s[l]}n("../utils").inherits(a,o),a.prototype.byteAt=function(s){return this.data[this.zero+s]},a.prototype.lastIndexOfSignature=function(s){for(var l=s.charCodeAt(0),c=s.charCodeAt(1),u=s.charCodeAt(2),d=s.charCodeAt(3),m=this.length-4;0<=m;--m)if(this.data[m]===l&&this.data[m+1]===c&&this.data[m+2]===u&&this.data[m+3]===d)return m-this.zero;return-1},a.prototype.readAndCheckSignature=function(s){var l=s.charCodeAt(0),c=s.charCodeAt(1),u=s.charCodeAt(2),d=s.charCodeAt(3),m=this.readData(4);return l===m[0]&&c===m[1]&&u===m[2]&&d===m[3]},a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return[];var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=a},{"../utils":32,"./DataReader":18}],18:[function(n,r,i){var o=n("../utils");function a(s){this.data=s,this.length=s.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(s){this.checkIndex(this.index+s)},checkIndex:function(s){if(this.length<this.zero+s||s<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+s+"). Corrupted zip ?")},setIndex:function(s){this.checkIndex(s),this.index=s},skip:function(s){this.setIndex(this.index+s)},byteAt:function(){},readInt:function(s){var l,c=0;for(this.checkOffset(s),l=this.index+s-1;l>=this.index;l--)c=(c<<8)+this.byteAt(l);return this.index+=s,c},readString:function(s){return o.transformTo("string",this.readData(s))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var s=this.readInt(4);return new Date(Date.UTC(1980+(s>>25&127),(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(31&s)<<1))}},r.exports=a},{"../utils":32}],19:[function(n,r,i){var o=n("./Uint8ArrayReader");function a(s){o.call(this,s)}n("../utils").inherits(a,o),a.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(n,r,i){var o=n("./DataReader");function a(s){o.call(this,s)}n("../utils").inherits(a,o),a.prototype.byteAt=function(s){return this.data.charCodeAt(this.zero+s)},a.prototype.lastIndexOfSignature=function(s){return this.data.lastIndexOf(s)-this.zero},a.prototype.readAndCheckSignature=function(s){return s===this.readData(4)},a.prototype.readData=function(s){this.checkOffset(s);var l=this.data.slice(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=a},{"../utils":32,"./DataReader":18}],21:[function(n,r,i){var o=n("./ArrayReader");function a(s){o.call(this,s)}n("../utils").inherits(a,o),a.prototype.readData=function(s){if(this.checkOffset(s),s===0)return new Uint8Array(0);var l=this.data.subarray(this.zero+this.index,this.zero+this.index+s);return this.index+=s,l},r.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(n,r,i){var o=n("../utils"),a=n("../support"),s=n("./ArrayReader"),l=n("./StringReader"),c=n("./NodeBufferReader"),u=n("./Uint8ArrayReader");r.exports=function(d){var m=o.getTypeOf(d);return o.checkSupport(m),m!=="string"||a.uint8array?m==="nodebuffer"?new c(d):a.uint8array?new u(o.transformTo("uint8array",d)):new s(o.transformTo("array",d)):new l(d)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(n,r,i){i.LOCAL_FILE_HEADER="PK",i.CENTRAL_FILE_HEADER="PK",i.CENTRAL_DIRECTORY_END="PK",i.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",i.ZIP64_CENTRAL_DIRECTORY_END="PK",i.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(n,r,i){var o=n("./GenericWorker"),a=n("../utils");function s(l){o.call(this,"ConvertWorker to "+l),this.destType=l}a.inherits(s,o),s.prototype.processChunk=function(l){this.push({data:a.transformTo(this.destType,l.data),meta:l.meta})},r.exports=s},{"../utils":32,"./GenericWorker":28}],25:[function(n,r,i){var o=n("./GenericWorker"),a=n("../crc32");function s(){o.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}n("../utils").inherits(s,o),s.prototype.processChunk=function(l){this.streamInfo.crc32=a(l.data,this.streamInfo.crc32||0),this.push(l)},r.exports=s},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(n,r,i){var o=n("../utils"),a=n("./GenericWorker");function s(l){a.call(this,"DataLengthProbe for "+l),this.propName=l,this.withStreamInfo(l,0)}o.inherits(s,a),s.prototype.processChunk=function(l){if(l){var c=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=c+l.data.length}a.prototype.processChunk.call(this,l)},r.exports=s},{"../utils":32,"./GenericWorker":28}],27:[function(n,r,i){var o=n("../utils"),a=n("./GenericWorker");function s(l){a.call(this,"DataWorker");var c=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,l.then(function(u){c.dataIsReady=!0,c.data=u,c.max=u&&u.length||0,c.type=o.getTypeOf(u),c.isPaused||c._tickAndRepeat()},function(u){c.error(u)})}o.inherits(s,a),s.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},s.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,o.delay(this._tickAndRepeat,[],this)),!0)},s.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(o.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},s.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var l=null,c=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":l=this.data.substring(this.index,c);break;case"uint8array":l=this.data.subarray(this.index,c);break;case"array":case"nodebuffer":l=this.data.slice(this.index,c)}return this.index=c,this.push({data:l,meta:{percent:this.max?this.index/this.max*100:0}})},r.exports=s},{"../utils":32,"./GenericWorker":28}],28:[function(n,r,i){function o(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}o.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,s){return this._listeners[a].push(s),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,s){if(this._listeners[a])for(var l=0;l<this._listeners[a].length;l++)this._listeners[a][l].call(this,s)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var s=this;return a.on("data",function(l){s.processChunk(l)}),a.on("end",function(){s.end()}),a.on("error",function(l){s.error(l)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,s){return this.extraStreamInfo[a]=s,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},r.exports=o},{}],29:[function(n,r,i){var o=n("../utils"),a=n("./ConvertWorker"),s=n("./GenericWorker"),l=n("../base64"),c=n("../support"),u=n("../external"),d=null;if(c.nodestream)try{d=n("../nodejs/NodejsStreamOutputAdapter")}catch{}function m(g,h){return new u.Promise(function(y,v){var b=[],w=g._internalType,x=g._outputType,O=g._mimeType;g.on("data",function(j,L){b.push(j),h&&h(L)}).on("error",function(j){b=[],v(j)}).on("end",function(){try{var j=(function(L,q,M){switch(L){case"blob":return o.newBlob(o.transformTo("arraybuffer",q),M);case"base64":return l.encode(q);default:return o.transformTo(L,q)}})(x,(function(L,q){var M,W=0,ee=null,A=0;for(M=0;M<q.length;M++)A+=q[M].length;switch(L){case"string":return q.join("");case"array":return Array.prototype.concat.apply([],q);case"uint8array":for(ee=new Uint8Array(A),M=0;M<q.length;M++)ee.set(q[M],W),W+=q[M].length;return ee;case"nodebuffer":return Buffer.concat(q);default:throw new Error("concat : unsupported type '"+L+"'")}})(w,b),O);y(j)}catch(L){v(L)}b=[]}).resume()})}function p(g,h,y){var v=h;switch(h){case"blob":case"arraybuffer":v="uint8array";break;case"base64":v="string"}try{this._internalType=v,this._outputType=h,this._mimeType=y,o.checkSupport(v),this._worker=g.pipe(new a(v)),g.lock()}catch(b){this._worker=new s("error"),this._worker.error(b)}}p.prototype={accumulate:function(g){return m(this,g)},on:function(g,h){var y=this;return g==="data"?this._worker.on(g,function(v){h.call(y,v.data,v.meta)}):this._worker.on(g,function(){o.delay(h,arguments,y)}),this},resume:function(){return o.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(g){if(o.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new d(this,{objectMode:this._outputType!=="nodebuffer"},g)}},r.exports=p},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(n,r,i){if(i.base64=!0,i.array=!0,i.string=!0,i.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",i.nodebuffer=typeof Buffer<"u",i.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")i.blob=!1;else{var o=new ArrayBuffer(0);try{i.blob=new Blob([o],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(o),i.blob=a.getBlob("application/zip").size===0}catch{i.blob=!1}}}try{i.nodestream=!!n("readable-stream").Readable}catch{i.nodestream=!1}},{"readable-stream":16}],31:[function(n,r,i){for(var o=n("./utils"),a=n("./support"),s=n("./nodejsUtils"),l=n("./stream/GenericWorker"),c=new Array(256),u=0;u<256;u++)c[u]=252<=u?6:248<=u?5:240<=u?4:224<=u?3:192<=u?2:1;c[254]=c[254]=1;function d(){l.call(this,"utf-8 decode"),this.leftOver=null}function m(){l.call(this,"utf-8 encode")}i.utf8encode=function(p){return a.nodebuffer?s.newBufferFrom(p,"utf-8"):(function(g){var h,y,v,b,w,x=g.length,O=0;for(b=0;b<x;b++)(64512&(y=g.charCodeAt(b)))==55296&&b+1<x&&(64512&(v=g.charCodeAt(b+1)))==56320&&(y=65536+(y-55296<<10)+(v-56320),b++),O+=y<128?1:y<2048?2:y<65536?3:4;for(h=a.uint8array?new Uint8Array(O):new Array(O),b=w=0;w<O;b++)(64512&(y=g.charCodeAt(b)))==55296&&b+1<x&&(64512&(v=g.charCodeAt(b+1)))==56320&&(y=65536+(y-55296<<10)+(v-56320),b++),y<128?h[w++]=y:(y<2048?h[w++]=192|y>>>6:(y<65536?h[w++]=224|y>>>12:(h[w++]=240|y>>>18,h[w++]=128|y>>>12&63),h[w++]=128|y>>>6&63),h[w++]=128|63&y);return h})(p)},i.utf8decode=function(p){return a.nodebuffer?o.transformTo("nodebuffer",p).toString("utf-8"):(function(g){var h,y,v,b,w=g.length,x=new Array(2*w);for(h=y=0;h<w;)if((v=g[h++])<128)x[y++]=v;else if(4<(b=c[v]))x[y++]=65533,h+=b-1;else{for(v&=b===2?31:b===3?15:7;1<b&&h<w;)v=v<<6|63&g[h++],b--;1<b?x[y++]=65533:v<65536?x[y++]=v:(v-=65536,x[y++]=55296|v>>10&1023,x[y++]=56320|1023&v)}return x.length!==y&&(x.subarray?x=x.subarray(0,y):x.length=y),o.applyFromCharCode(x)})(p=o.transformTo(a.uint8array?"uint8array":"array",p))},o.inherits(d,l),d.prototype.processChunk=function(p){var g=o.transformTo(a.uint8array?"uint8array":"array",p.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var h=g;(g=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),g.set(h,this.leftOver.length)}else g=this.leftOver.concat(g);this.leftOver=null}var y=(function(b,w){var x;for((w=w||b.length)>b.length&&(w=b.length),x=w-1;0<=x&&(192&b[x])==128;)x--;return x<0||x===0?w:x+c[b[x]]>w?x:w})(g),v=g;y!==g.length&&(a.uint8array?(v=g.subarray(0,y),this.leftOver=g.subarray(y,g.length)):(v=g.slice(0,y),this.leftOver=g.slice(y,g.length))),this.push({data:i.utf8decode(v),meta:p.meta})},d.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:i.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},i.Utf8DecodeWorker=d,o.inherits(m,l),m.prototype.processChunk=function(p){this.push({data:i.utf8encode(p.data),meta:p.meta})},i.Utf8EncodeWorker=m},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(n,r,i){var o=n("./support"),a=n("./base64"),s=n("./nodejsUtils"),l=n("./external");function c(h){return h}function u(h,y){for(var v=0;v<h.length;++v)y[v]=255&h.charCodeAt(v);return y}n("setimmediate"),i.newBlob=function(h,y){i.checkSupport("blob");try{return new Blob([h],{type:y})}catch{try{var v=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return v.append(h),v.getBlob(y)}catch{throw new Error("Bug : can't construct the Blob.")}}};var d={stringifyByChunk:function(h,y,v){var b=[],w=0,x=h.length;if(x<=v)return String.fromCharCode.apply(null,h);for(;w<x;)y==="array"||y==="nodebuffer"?b.push(String.fromCharCode.apply(null,h.slice(w,Math.min(w+v,x)))):b.push(String.fromCharCode.apply(null,h.subarray(w,Math.min(w+v,x)))),w+=v;return b.join("")},stringifyByChar:function(h){for(var y="",v=0;v<h.length;v++)y+=String.fromCharCode(h[v]);return y},applyCanBeUsed:{uint8array:(function(){try{return o.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return o.nodebuffer&&String.fromCharCode.apply(null,s.allocBuffer(1)).length===1}catch{return!1}})()}};function m(h){var y=65536,v=i.getTypeOf(h),b=!0;if(v==="uint8array"?b=d.applyCanBeUsed.uint8array:v==="nodebuffer"&&(b=d.applyCanBeUsed.nodebuffer),b)for(;1<y;)try{return d.stringifyByChunk(h,v,y)}catch{y=Math.floor(y/2)}return d.stringifyByChar(h)}function p(h,y){for(var v=0;v<h.length;v++)y[v]=h[v];return y}i.applyFromCharCode=m;var g={};g.string={string:c,array:function(h){return u(h,new Array(h.length))},arraybuffer:function(h){return g.string.uint8array(h).buffer},uint8array:function(h){return u(h,new Uint8Array(h.length))},nodebuffer:function(h){return u(h,s.allocBuffer(h.length))}},g.array={string:m,array:c,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(h)}},g.arraybuffer={string:function(h){return m(new Uint8Array(h))},array:function(h){return p(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:c,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return s.newBufferFrom(new Uint8Array(h))}},g.uint8array={string:m,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:c,nodebuffer:function(h){return s.newBufferFrom(h)}},g.nodebuffer={string:m,array:function(h){return p(h,new Array(h.length))},arraybuffer:function(h){return g.nodebuffer.uint8array(h).buffer},uint8array:function(h){return p(h,new Uint8Array(h.length))},nodebuffer:c},i.transformTo=function(h,y){if(y=y||"",!h)return y;i.checkSupport(h);var v=i.getTypeOf(y);return g[v][h](y)},i.resolve=function(h){for(var y=h.split("/"),v=[],b=0;b<y.length;b++){var w=y[b];w==="."||w===""&&b!==0&&b!==y.length-1||(w===".."?v.pop():v.push(w))}return v.join("/")},i.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":o.nodebuffer&&s.isBuffer(h)?"nodebuffer":o.uint8array&&h instanceof Uint8Array?"uint8array":o.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},i.checkSupport=function(h){if(!o[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},i.MAX_VALUE_16BITS=65535,i.MAX_VALUE_32BITS=-1,i.pretty=function(h){var y,v,b="";for(v=0;v<(h||"").length;v++)b+="\\x"+((y=h.charCodeAt(v))<16?"0":"")+y.toString(16).toUpperCase();return b},i.delay=function(h,y,v){setImmediate(function(){h.apply(v||null,y||[])})},i.inherits=function(h,y){function v(){}v.prototype=y.prototype,h.prototype=new v},i.extend=function(){var h,y,v={};for(h=0;h<arguments.length;h++)for(y in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],y)&&v[y]===void 0&&(v[y]=arguments[h][y]);return v},i.prepareContent=function(h,y,v,b,w){return l.Promise.resolve(y).then(function(x){return o.blob&&(x instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(x))!==-1)&&typeof FileReader<"u"?new l.Promise(function(O,j){var L=new FileReader;L.onload=function(q){O(q.target.result)},L.onerror=function(q){j(q.target.error)},L.readAsArrayBuffer(x)}):x}).then(function(x){var O=i.getTypeOf(x);return O?(O==="arraybuffer"?x=i.transformTo("uint8array",x):O==="string"&&(w?x=a.decode(x):v&&b!==!0&&(x=(function(j){return u(j,o.uint8array?new Uint8Array(j.length):new Array(j.length))})(x))),x):l.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(n,r,i){var o=n("./reader/readerFor"),a=n("./utils"),s=n("./signature"),l=n("./zipEntry"),c=n("./support");function u(d){this.files=[],this.loadOptions=d}u.prototype={checkSignature:function(d){if(!this.reader.readAndCheckSignature(d)){this.reader.index-=4;var m=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(m)+", expected "+a.pretty(d)+")")}},isSignature:function(d,m){var p=this.reader.index;this.reader.setIndex(d);var g=this.reader.readString(4)===m;return this.reader.setIndex(p),g},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var d=this.reader.readData(this.zipCommentLength),m=c.uint8array?"uint8array":"array",p=a.transformTo(m,d);this.zipComment=this.loadOptions.decodeFileName(p)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var d,m,p,g=this.zip64EndOfCentralSize-44;0<g;)d=this.reader.readInt(2),m=this.reader.readInt(4),p=this.reader.readData(m),this.zip64ExtensibleData[d]={id:d,length:m,value:p}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var d,m;for(d=0;d<this.files.length;d++)m=this.files[d],this.reader.setIndex(m.localHeaderOffset),this.checkSignature(s.LOCAL_FILE_HEADER),m.readLocalPart(this.reader),m.handleUTF8(),m.processAttributes()},readCentralDir:function(){var d;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);)(d=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(d);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var d=this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);if(d<0)throw this.isSignature(0,s.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(d);var m=d;if(this.checkSignature(s.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(d=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(d),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,s.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var p=this.centralDirOffset+this.centralDirSize;this.zip64&&(p+=20,p+=12+this.zip64EndOfCentralSize);var g=m-p;if(0<g)this.isSignature(m,s.CENTRAL_FILE_HEADER)||(this.reader.zero=g);else if(g<0)throw new Error("Corrupted zip: missing "+Math.abs(g)+" bytes.")},prepareReader:function(d){this.reader=o(d)},load:function(d){this.prepareReader(d),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},r.exports=u},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(n,r,i){var o=n("./reader/readerFor"),a=n("./utils"),s=n("./compressedObject"),l=n("./crc32"),c=n("./utf8"),u=n("./compressions"),d=n("./support");function m(p,g){this.options=p,this.loadOptions=g}m.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(p){var g,h;if(p.skip(22),this.fileNameLength=p.readInt(2),h=p.readInt(2),this.fileName=p.readData(this.fileNameLength),p.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((g=(function(y){for(var v in u)if(Object.prototype.hasOwnProperty.call(u,v)&&u[v].magic===y)return u[v];return null})(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new s(this.compressedSize,this.uncompressedSize,this.crc32,g,p.readData(this.compressedSize))},readCentralPart:function(p){this.versionMadeBy=p.readInt(2),p.skip(2),this.bitFlag=p.readInt(2),this.compressionMethod=p.readString(2),this.date=p.readDate(),this.crc32=p.readInt(4),this.compressedSize=p.readInt(4),this.uncompressedSize=p.readInt(4);var g=p.readInt(2);if(this.extraFieldsLength=p.readInt(2),this.fileCommentLength=p.readInt(2),this.diskNumberStart=p.readInt(2),this.internalFileAttributes=p.readInt(2),this.externalFileAttributes=p.readInt(4),this.localHeaderOffset=p.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");p.skip(g),this.readExtraFields(p),this.parseZIP64ExtraField(p),this.fileComment=p.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var p=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),p==0&&(this.dosPermissions=63&this.externalFileAttributes),p==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var p=o(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=p.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=p.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=p.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=p.readInt(4))}},readExtraFields:function(p){var g,h,y,v=p.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});p.index+4<v;)g=p.readInt(2),h=p.readInt(2),y=p.readData(h),this.extraFields[g]={id:g,length:h,value:y};p.setIndex(v)},handleUTF8:function(){var p=d.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=c.utf8decode(this.fileName),this.fileCommentStr=c.utf8decode(this.fileComment);else{var g=this.findExtraFieldUnicodePath();if(g!==null)this.fileNameStr=g;else{var h=a.transformTo(p,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var y=this.findExtraFieldUnicodeComment();if(y!==null)this.fileCommentStr=y;else{var v=a.transformTo(p,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(v)}}},findExtraFieldUnicodePath:function(){var p=this.extraFields[28789];if(p){var g=o(p.value);return g.readInt(1)!==1||l(this.fileName)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null},findExtraFieldUnicodeComment:function(){var p=this.extraFields[25461];if(p){var g=o(p.value);return g.readInt(1)!==1||l(this.fileComment)!==g.readInt(4)?null:c.utf8decode(g.readData(p.length-5))}return null}},r.exports=m},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(n,r,i){function o(g,h,y){this.name=g,this.dir=y.dir,this.date=y.date,this.comment=y.comment,this.unixPermissions=y.unixPermissions,this.dosPermissions=y.dosPermissions,this._data=h,this._dataBinary=y.binary,this.options={compression:y.compression,compressionOptions:y.compressionOptions}}var a=n("./stream/StreamHelper"),s=n("./stream/DataWorker"),l=n("./utf8"),c=n("./compressedObject"),u=n("./stream/GenericWorker");o.prototype={internalStream:function(g){var h=null,y="string";try{if(!g)throw new Error("No output type specified.");var v=(y=g.toLowerCase())==="string"||y==="text";y!=="binarystring"&&y!=="text"||(y="string"),h=this._decompressWorker();var b=!this._dataBinary;b&&!v&&(h=h.pipe(new l.Utf8EncodeWorker)),!b&&v&&(h=h.pipe(new l.Utf8DecodeWorker))}catch(w){(h=new u("error")).error(w)}return new a(h,y,"")},async:function(g,h){return this.internalStream(g).accumulate(h)},nodeStream:function(g,h){return this.internalStream(g||"nodebuffer").toNodejsStream(h)},_compressWorker:function(g,h){if(this._data instanceof c&&this._data.compression.magic===g.magic)return this._data.getCompressedWorker();var y=this._decompressWorker();return this._dataBinary||(y=y.pipe(new l.Utf8EncodeWorker)),c.createWorkerFrom(y,g,h)},_decompressWorker:function(){return this._data instanceof c?this._data.getContentWorker():this._data instanceof u?this._data:new s(this._data)}};for(var d=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],m=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},p=0;p<d.length;p++)o.prototype[d[p]]=m;r.exports=o},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(n,r,i){(function(o){var a,s,l=o.MutationObserver||o.WebKitMutationObserver;if(l){var c=0,u=new l(g),d=o.document.createTextNode("");u.observe(d,{characterData:!0}),a=function(){d.data=c=++c%2}}else if(o.setImmediate||o.MessageChannel===void 0)a="document"in o&&"onreadystatechange"in o.document.createElement("script")?function(){var h=o.document.createElement("script");h.onreadystatechange=function(){g(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},o.document.documentElement.appendChild(h)}:function(){setTimeout(g,0)};else{var m=new o.MessageChannel;m.port1.onmessage=g,a=function(){m.port2.postMessage(0)}}var p=[];function g(){var h,y;s=!0;for(var v=p.length;v;){for(y=p,p=[],h=-1;++h<v;)y[h]();v=p.length}s=!1}r.exports=function(h){p.push(h)!==1||s||a()}}).call(this,typeof Gt<"u"?Gt:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(n,r,i){var o=n("immediate");function a(){}var s={},l=["REJECTED"],c=["FULFILLED"],u=["PENDING"];function d(v){if(typeof v!="function")throw new TypeError("resolver must be a function");this.state=u,this.queue=[],this.outcome=void 0,v!==a&&h(this,v)}function m(v,b,w){this.promise=v,typeof b=="function"&&(this.onFulfilled=b,this.callFulfilled=this.otherCallFulfilled),typeof w=="function"&&(this.onRejected=w,this.callRejected=this.otherCallRejected)}function p(v,b,w){o(function(){var x;try{x=b(w)}catch(O){return s.reject(v,O)}x===v?s.reject(v,new TypeError("Cannot resolve promise with itself")):s.resolve(v,x)})}function g(v){var b=v&&v.then;if(v&&(typeof v=="object"||typeof v=="function")&&typeof b=="function")return function(){b.apply(v,arguments)}}function h(v,b){var w=!1;function x(L){w||(w=!0,s.reject(v,L))}function O(L){w||(w=!0,s.resolve(v,L))}var j=y(function(){b(O,x)});j.status==="error"&&x(j.value)}function y(v,b){var w={};try{w.value=v(b),w.status="success"}catch(x){w.status="error",w.value=x}return w}(r.exports=d).prototype.finally=function(v){if(typeof v!="function")return this;var b=this.constructor;return this.then(function(w){return b.resolve(v()).then(function(){return w})},function(w){return b.resolve(v()).then(function(){throw w})})},d.prototype.catch=function(v){return this.then(null,v)},d.prototype.then=function(v,b){if(typeof v!="function"&&this.state===c||typeof b!="function"&&this.state===l)return this;var w=new this.constructor(a);return this.state!==u?p(w,this.state===c?v:b,this.outcome):this.queue.push(new m(w,v,b)),w},m.prototype.callFulfilled=function(v){s.resolve(this.promise,v)},m.prototype.otherCallFulfilled=function(v){p(this.promise,this.onFulfilled,v)},m.prototype.callRejected=function(v){s.reject(this.promise,v)},m.prototype.otherCallRejected=function(v){p(this.promise,this.onRejected,v)},s.resolve=function(v,b){var w=y(g,b);if(w.status==="error")return s.reject(v,w.value);var x=w.value;if(x)h(v,x);else{v.state=c,v.outcome=b;for(var O=-1,j=v.queue.length;++O<j;)v.queue[O].callFulfilled(b)}return v},s.reject=function(v,b){v.state=l,v.outcome=b;for(var w=-1,x=v.queue.length;++w<x;)v.queue[w].callRejected(b);return v},d.resolve=function(v){return v instanceof this?v:s.resolve(new this(a),v)},d.reject=function(v){var b=new this(a);return s.reject(b,v)},d.all=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=v.length,x=!1;if(!w)return this.resolve([]);for(var O=new Array(w),j=0,L=-1,q=new this(a);++L<w;)M(v[L],L);return q;function M(W,ee){b.resolve(W).then(function(A){O[ee]=A,++j!==w||x||(x=!0,s.resolve(q,O))},function(A){x||(x=!0,s.reject(q,A))})}},d.race=function(v){var b=this;if(Object.prototype.toString.call(v)!=="[object Array]")return this.reject(new TypeError("must be an array"));var w=v.length,x=!1;if(!w)return this.resolve([]);for(var O=-1,j=new this(a);++O<w;)L=v[O],b.resolve(L).then(function(q){x||(x=!0,s.resolve(j,q))},function(q){x||(x=!0,s.reject(j,q))});var L;return j}},{immediate:36}],38:[function(n,r,i){var o={};(0,n("./lib/utils/common").assign)(o,n("./lib/deflate"),n("./lib/inflate"),n("./lib/zlib/constants")),r.exports=o},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(n,r,i){var o=n("./zlib/deflate"),a=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/messages"),c=n("./zlib/zstream"),u=Object.prototype.toString,d=0,m=-1,p=0,g=8;function h(v){if(!(this instanceof h))return new h(v);this.options=a.assign({level:m,method:g,chunkSize:16384,windowBits:15,memLevel:8,strategy:p,to:""},v||{});var b=this.options;b.raw&&0<b.windowBits?b.windowBits=-b.windowBits:b.gzip&&0<b.windowBits&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var w=o.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(w!==d)throw new Error(l[w]);if(b.header&&o.deflateSetHeader(this.strm,b.header),b.dictionary){var x;if(x=typeof b.dictionary=="string"?s.string2buf(b.dictionary):u.call(b.dictionary)==="[object ArrayBuffer]"?new Uint8Array(b.dictionary):b.dictionary,(w=o.deflateSetDictionary(this.strm,x))!==d)throw new Error(l[w]);this._dict_set=!0}}function y(v,b){var w=new h(b);if(w.push(v,!0),w.err)throw w.msg||l[w.err];return w.result}h.prototype.push=function(v,b){var w,x,O=this.strm,j=this.options.chunkSize;if(this.ended)return!1;x=b===~~b?b:b===!0?4:0,typeof v=="string"?O.input=s.string2buf(v):u.call(v)==="[object ArrayBuffer]"?O.input=new Uint8Array(v):O.input=v,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new a.Buf8(j),O.next_out=0,O.avail_out=j),(w=o.deflate(O,x))!==1&&w!==d)return this.onEnd(w),!(this.ended=!0);O.avail_out!==0&&(O.avail_in!==0||x!==4&&x!==2)||(this.options.to==="string"?this.onData(s.buf2binstring(a.shrinkBuf(O.output,O.next_out))):this.onData(a.shrinkBuf(O.output,O.next_out)))}while((0<O.avail_in||O.avail_out===0)&&w!==1);return x===4?(w=o.deflateEnd(this.strm),this.onEnd(w),this.ended=!0,w===d):x!==2||(this.onEnd(d),!(O.avail_out=0))},h.prototype.onData=function(v){this.chunks.push(v)},h.prototype.onEnd=function(v){v===d&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=v,this.msg=this.strm.msg},i.Deflate=h,i.deflate=y,i.deflateRaw=function(v,b){return(b=b||{}).raw=!0,y(v,b)},i.gzip=function(v,b){return(b=b||{}).gzip=!0,y(v,b)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(n,r,i){var o=n("./zlib/inflate"),a=n("./utils/common"),s=n("./utils/strings"),l=n("./zlib/constants"),c=n("./zlib/messages"),u=n("./zlib/zstream"),d=n("./zlib/gzheader"),m=Object.prototype.toString;function p(h){if(!(this instanceof p))return new p(h);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},h||{});var y=this.options;y.raw&&0<=y.windowBits&&y.windowBits<16&&(y.windowBits=-y.windowBits,y.windowBits===0&&(y.windowBits=-15)),!(0<=y.windowBits&&y.windowBits<16)||h&&h.windowBits||(y.windowBits+=32),15<y.windowBits&&y.windowBits<48&&(15&y.windowBits)==0&&(y.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var v=o.inflateInit2(this.strm,y.windowBits);if(v!==l.Z_OK)throw new Error(c[v]);this.header=new d,o.inflateGetHeader(this.strm,this.header)}function g(h,y){var v=new p(y);if(v.push(h,!0),v.err)throw v.msg||c[v.err];return v.result}p.prototype.push=function(h,y){var v,b,w,x,O,j,L=this.strm,q=this.options.chunkSize,M=this.options.dictionary,W=!1;if(this.ended)return!1;b=y===~~y?y:y===!0?l.Z_FINISH:l.Z_NO_FLUSH,typeof h=="string"?L.input=s.binstring2buf(h):m.call(h)==="[object ArrayBuffer]"?L.input=new Uint8Array(h):L.input=h,L.next_in=0,L.avail_in=L.input.length;do{if(L.avail_out===0&&(L.output=new a.Buf8(q),L.next_out=0,L.avail_out=q),(v=o.inflate(L,l.Z_NO_FLUSH))===l.Z_NEED_DICT&&M&&(j=typeof M=="string"?s.string2buf(M):m.call(M)==="[object ArrayBuffer]"?new Uint8Array(M):M,v=o.inflateSetDictionary(this.strm,j)),v===l.Z_BUF_ERROR&&W===!0&&(v=l.Z_OK,W=!1),v!==l.Z_STREAM_END&&v!==l.Z_OK)return this.onEnd(v),!(this.ended=!0);L.next_out&&(L.avail_out!==0&&v!==l.Z_STREAM_END&&(L.avail_in!==0||b!==l.Z_FINISH&&b!==l.Z_SYNC_FLUSH)||(this.options.to==="string"?(w=s.utf8border(L.output,L.next_out),x=L.next_out-w,O=s.buf2string(L.output,w),L.next_out=x,L.avail_out=q-x,x&&a.arraySet(L.output,L.output,w,x,0),this.onData(O)):this.onData(a.shrinkBuf(L.output,L.next_out)))),L.avail_in===0&&L.avail_out===0&&(W=!0)}while((0<L.avail_in||L.avail_out===0)&&v!==l.Z_STREAM_END);return v===l.Z_STREAM_END&&(b=l.Z_FINISH),b===l.Z_FINISH?(v=o.inflateEnd(this.strm),this.onEnd(v),this.ended=!0,v===l.Z_OK):b!==l.Z_SYNC_FLUSH||(this.onEnd(l.Z_OK),!(L.avail_out=0))},p.prototype.onData=function(h){this.chunks.push(h)},p.prototype.onEnd=function(h){h===l.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},i.Inflate=p,i.inflate=g,i.inflateRaw=function(h,y){return(y=y||{}).raw=!0,g(h,y)},i.ungzip=g},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(n,r,i){var o=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";i.assign=function(l){for(var c=Array.prototype.slice.call(arguments,1);c.length;){var u=c.shift();if(u){if(typeof u!="object")throw new TypeError(u+"must be non-object");for(var d in u)u.hasOwnProperty(d)&&(l[d]=u[d])}}return l},i.shrinkBuf=function(l,c){return l.length===c?l:l.subarray?l.subarray(0,c):(l.length=c,l)};var a={arraySet:function(l,c,u,d,m){if(c.subarray&&l.subarray)l.set(c.subarray(u,u+d),m);else for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){var c,u,d,m,p,g;for(c=d=0,u=l.length;c<u;c++)d+=l[c].length;for(g=new Uint8Array(d),c=m=0,u=l.length;c<u;c++)p=l[c],g.set(p,m),m+=p.length;return g}},s={arraySet:function(l,c,u,d,m){for(var p=0;p<d;p++)l[m+p]=c[u+p]},flattenChunks:function(l){return[].concat.apply([],l)}};i.setTyped=function(l){l?(i.Buf8=Uint8Array,i.Buf16=Uint16Array,i.Buf32=Int32Array,i.assign(i,a)):(i.Buf8=Array,i.Buf16=Array,i.Buf32=Array,i.assign(i,s))},i.setTyped(o)},{}],42:[function(n,r,i){var o=n("./common"),a=!0,s=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{s=!1}for(var l=new o.Buf8(256),c=0;c<256;c++)l[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;function u(d,m){if(m<65537&&(d.subarray&&s||!d.subarray&&a))return String.fromCharCode.apply(null,o.shrinkBuf(d,m));for(var p="",g=0;g<m;g++)p+=String.fromCharCode(d[g]);return p}l[254]=l[254]=1,i.string2buf=function(d){var m,p,g,h,y,v=d.length,b=0;for(h=0;h<v;h++)(64512&(p=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),h++),b+=p<128?1:p<2048?2:p<65536?3:4;for(m=new o.Buf8(b),h=y=0;y<b;h++)(64512&(p=d.charCodeAt(h)))==55296&&h+1<v&&(64512&(g=d.charCodeAt(h+1)))==56320&&(p=65536+(p-55296<<10)+(g-56320),h++),p<128?m[y++]=p:(p<2048?m[y++]=192|p>>>6:(p<65536?m[y++]=224|p>>>12:(m[y++]=240|p>>>18,m[y++]=128|p>>>12&63),m[y++]=128|p>>>6&63),m[y++]=128|63&p);return m},i.buf2binstring=function(d){return u(d,d.length)},i.binstring2buf=function(d){for(var m=new o.Buf8(d.length),p=0,g=m.length;p<g;p++)m[p]=d.charCodeAt(p);return m},i.buf2string=function(d,m){var p,g,h,y,v=m||d.length,b=new Array(2*v);for(p=g=0;p<v;)if((h=d[p++])<128)b[g++]=h;else if(4<(y=l[h]))b[g++]=65533,p+=y-1;else{for(h&=y===2?31:y===3?15:7;1<y&&p<v;)h=h<<6|63&d[p++],y--;1<y?b[g++]=65533:h<65536?b[g++]=h:(h-=65536,b[g++]=55296|h>>10&1023,b[g++]=56320|1023&h)}return u(b,g)},i.utf8border=function(d,m){var p;for((m=m||d.length)>d.length&&(m=d.length),p=m-1;0<=p&&(192&d[p])==128;)p--;return p<0||p===0?m:p+l[d[p]]>m?p:m}},{"./common":41}],43:[function(n,r,i){r.exports=function(o,a,s,l){for(var c=65535&o|0,u=o>>>16&65535|0,d=0;s!==0;){for(s-=d=2e3<s?2e3:s;u=u+(c=c+a[l++]|0)|0,--d;);c%=65521,u%=65521}return c|u<<16|0}},{}],44:[function(n,r,i){r.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(n,r,i){var o=(function(){for(var a,s=[],l=0;l<256;l++){a=l;for(var c=0;c<8;c++)a=1&a?3988292384^a>>>1:a>>>1;s[l]=a}return s})();r.exports=function(a,s,l,c){var u=o,d=c+l;a^=-1;for(var m=c;m<d;m++)a=a>>>8^u[255&(a^s[m])];return-1^a}},{}],46:[function(n,r,i){var o,a=n("../utils/common"),s=n("./trees"),l=n("./adler32"),c=n("./crc32"),u=n("./messages"),d=0,m=4,p=0,g=-2,h=-1,y=4,v=2,b=8,w=9,x=286,O=30,j=19,L=2*x+1,q=15,M=3,W=258,ee=W+M+1,A=42,U=113,_=1,V=2,oe=3,G=4;function ie(f,R){return f.msg=u[R],R}function Z(f){return(f<<1)-(4<f?9:0)}function ae(f){for(var R=f.length;0<=--R;)f[R]=0}function z(f){var R=f.state,T=R.pending;T>f.avail_out&&(T=f.avail_out),T!==0&&(a.arraySet(f.output,R.pending_buf,R.pending_out,T,f.next_out),f.next_out+=T,R.pending_out+=T,f.total_out+=T,f.avail_out-=T,R.pending-=T,R.pending===0&&(R.pending_out=0))}function F(f,R){s._tr_flush_block(f,0<=f.block_start?f.block_start:-1,f.strstart-f.block_start,R),f.block_start=f.strstart,z(f.strm)}function le(f,R){f.pending_buf[f.pending++]=R}function ne(f,R){f.pending_buf[f.pending++]=R>>>8&255,f.pending_buf[f.pending++]=255&R}function X(f,R){var T,S,C=f.max_chain_length,P=f.strstart,k=f.prev_length,N=f.nice_match,D=f.strstart>f.w_size-ee?f.strstart-(f.w_size-ee):0,B=f.window,Y=f.w_mask,$=f.prev,Q=f.strstart+W,ue=B[P+k-1],se=B[P+k];f.prev_length>=f.good_match&&(C>>=2),N>f.lookahead&&(N=f.lookahead);do if(B[(T=R)+k]===se&&B[T+k-1]===ue&&B[T]===B[P]&&B[++T]===B[P+1]){P+=2,T++;do;while(B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&B[++P]===B[++T]&&P<Q);if(S=W-(Q-P),P=Q-W,k<S){if(f.match_start=R,N<=(k=S))break;ue=B[P+k-1],se=B[P+k]}}while((R=$[R&Y])>D&&--C!=0);return k<=f.lookahead?k:f.lookahead}function ge(f){var R,T,S,C,P,k,N,D,B,Y,$=f.w_size;do{if(C=f.window_size-f.lookahead-f.strstart,f.strstart>=$+($-ee)){for(a.arraySet(f.window,f.window,$,$,0),f.match_start-=$,f.strstart-=$,f.block_start-=$,R=T=f.hash_size;S=f.head[--R],f.head[R]=$<=S?S-$:0,--T;);for(R=T=$;S=f.prev[--R],f.prev[R]=$<=S?S-$:0,--T;);C+=$}if(f.strm.avail_in===0)break;if(k=f.strm,N=f.window,D=f.strstart+f.lookahead,B=C,Y=void 0,Y=k.avail_in,B<Y&&(Y=B),T=Y===0?0:(k.avail_in-=Y,a.arraySet(N,k.input,k.next_in,Y,D),k.state.wrap===1?k.adler=l(k.adler,N,Y,D):k.state.wrap===2&&(k.adler=c(k.adler,N,Y,D)),k.next_in+=Y,k.total_in+=Y,Y),f.lookahead+=T,f.lookahead+f.insert>=M)for(P=f.strstart-f.insert,f.ins_h=f.window[P],f.ins_h=(f.ins_h<<f.hash_shift^f.window[P+1])&f.hash_mask;f.insert&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[P+M-1])&f.hash_mask,f.prev[P&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=P,P++,f.insert--,!(f.lookahead+f.insert<M)););}while(f.lookahead<ee&&f.strm.avail_in!==0)}function H(f,R){for(var T,S;;){if(f.lookahead<ee){if(ge(f),f.lookahead<ee&&R===d)return _;if(f.lookahead===0)break}if(T=0,f.lookahead>=M&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+M-1])&f.hash_mask,T=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),T!==0&&f.strstart-T<=f.w_size-ee&&(f.match_length=X(f,T)),f.match_length>=M)if(S=s._tr_tally(f,f.strstart-f.match_start,f.match_length-M),f.lookahead-=f.match_length,f.match_length<=f.max_lazy_match&&f.lookahead>=M){for(f.match_length--;f.strstart++,f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+M-1])&f.hash_mask,T=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart,--f.match_length!=0;);f.strstart++}else f.strstart+=f.match_length,f.match_length=0,f.ins_h=f.window[f.strstart],f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+1])&f.hash_mask;else S=s._tr_tally(f,0,f.window[f.strstart]),f.lookahead--,f.strstart++;if(S&&(F(f,!1),f.strm.avail_out===0))return _}return f.insert=f.strstart<M-1?f.strstart:M-1,R===m?(F(f,!0),f.strm.avail_out===0?oe:G):f.last_lit&&(F(f,!1),f.strm.avail_out===0)?_:V}function J(f,R){for(var T,S,C;;){if(f.lookahead<ee){if(ge(f),f.lookahead<ee&&R===d)return _;if(f.lookahead===0)break}if(T=0,f.lookahead>=M&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+M-1])&f.hash_mask,T=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),f.prev_length=f.match_length,f.prev_match=f.match_start,f.match_length=M-1,T!==0&&f.prev_length<f.max_lazy_match&&f.strstart-T<=f.w_size-ee&&(f.match_length=X(f,T),f.match_length<=5&&(f.strategy===1||f.match_length===M&&4096<f.strstart-f.match_start)&&(f.match_length=M-1)),f.prev_length>=M&&f.match_length<=f.prev_length){for(C=f.strstart+f.lookahead-M,S=s._tr_tally(f,f.strstart-1-f.prev_match,f.prev_length-M),f.lookahead-=f.prev_length-1,f.prev_length-=2;++f.strstart<=C&&(f.ins_h=(f.ins_h<<f.hash_shift^f.window[f.strstart+M-1])&f.hash_mask,T=f.prev[f.strstart&f.w_mask]=f.head[f.ins_h],f.head[f.ins_h]=f.strstart),--f.prev_length!=0;);if(f.match_available=0,f.match_length=M-1,f.strstart++,S&&(F(f,!1),f.strm.avail_out===0))return _}else if(f.match_available){if((S=s._tr_tally(f,0,f.window[f.strstart-1]))&&F(f,!1),f.strstart++,f.lookahead--,f.strm.avail_out===0)return _}else f.match_available=1,f.strstart++,f.lookahead--}return f.match_available&&(S=s._tr_tally(f,0,f.window[f.strstart-1]),f.match_available=0),f.insert=f.strstart<M-1?f.strstart:M-1,R===m?(F(f,!0),f.strm.avail_out===0?oe:G):f.last_lit&&(F(f,!1),f.strm.avail_out===0)?_:V}function K(f,R,T,S,C){this.good_length=f,this.max_lazy=R,this.nice_length=T,this.max_chain=S,this.func=C}function re(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=b,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*L),this.dyn_dtree=new a.Buf16(2*(2*O+1)),this.bl_tree=new a.Buf16(2*(2*j+1)),ae(this.dyn_ltree),ae(this.dyn_dtree),ae(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(q+1),this.heap=new a.Buf16(2*x+1),ae(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*x+1),ae(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ce(f){var R;return f&&f.state?(f.total_in=f.total_out=0,f.data_type=v,(R=f.state).pending=0,R.pending_out=0,R.wrap<0&&(R.wrap=-R.wrap),R.status=R.wrap?A:U,f.adler=R.wrap===2?0:1,R.last_flush=d,s._tr_init(R),p):ie(f,g)}function E(f){var R=ce(f);return R===p&&(function(T){T.window_size=2*T.w_size,ae(T.head),T.max_lazy_match=o[T.level].max_lazy,T.good_match=o[T.level].good_length,T.nice_match=o[T.level].nice_length,T.max_chain_length=o[T.level].max_chain,T.strstart=0,T.block_start=0,T.lookahead=0,T.insert=0,T.match_length=T.prev_length=M-1,T.match_available=0,T.ins_h=0})(f.state),R}function I(f,R,T,S,C,P){if(!f)return g;var k=1;if(R===h&&(R=6),S<0?(k=0,S=-S):15<S&&(k=2,S-=16),C<1||w<C||T!==b||S<8||15<S||R<0||9<R||P<0||y<P)return ie(f,g);S===8&&(S=9);var N=new re;return(f.state=N).strm=f,N.wrap=k,N.gzhead=null,N.w_bits=S,N.w_size=1<<N.w_bits,N.w_mask=N.w_size-1,N.hash_bits=C+7,N.hash_size=1<<N.hash_bits,N.hash_mask=N.hash_size-1,N.hash_shift=~~((N.hash_bits+M-1)/M),N.window=new a.Buf8(2*N.w_size),N.head=new a.Buf16(N.hash_size),N.prev=new a.Buf16(N.w_size),N.lit_bufsize=1<<C+6,N.pending_buf_size=4*N.lit_bufsize,N.pending_buf=new a.Buf8(N.pending_buf_size),N.d_buf=1*N.lit_bufsize,N.l_buf=3*N.lit_bufsize,N.level=R,N.strategy=P,N.method=T,E(f)}o=[new K(0,0,0,0,function(f,R){var T=65535;for(T>f.pending_buf_size-5&&(T=f.pending_buf_size-5);;){if(f.lookahead<=1){if(ge(f),f.lookahead===0&&R===d)return _;if(f.lookahead===0)break}f.strstart+=f.lookahead,f.lookahead=0;var S=f.block_start+T;if((f.strstart===0||f.strstart>=S)&&(f.lookahead=f.strstart-S,f.strstart=S,F(f,!1),f.strm.avail_out===0)||f.strstart-f.block_start>=f.w_size-ee&&(F(f,!1),f.strm.avail_out===0))return _}return f.insert=0,R===m?(F(f,!0),f.strm.avail_out===0?oe:G):(f.strstart>f.block_start&&(F(f,!1),f.strm.avail_out),_)}),new K(4,4,8,4,H),new K(4,5,16,8,H),new K(4,6,32,32,H),new K(4,4,16,16,J),new K(8,16,32,32,J),new K(8,16,128,128,J),new K(8,32,128,256,J),new K(32,128,258,1024,J),new K(32,258,258,4096,J)],i.deflateInit=function(f,R){return I(f,R,b,15,8,0)},i.deflateInit2=I,i.deflateReset=E,i.deflateResetKeep=ce,i.deflateSetHeader=function(f,R){return f&&f.state?f.state.wrap!==2?g:(f.state.gzhead=R,p):g},i.deflate=function(f,R){var T,S,C,P;if(!f||!f.state||5<R||R<0)return f?ie(f,g):g;if(S=f.state,!f.output||!f.input&&f.avail_in!==0||S.status===666&&R!==m)return ie(f,f.avail_out===0?-5:g);if(S.strm=f,T=S.last_flush,S.last_flush=R,S.status===A)if(S.wrap===2)f.adler=0,le(S,31),le(S,139),le(S,8),S.gzhead?(le(S,(S.gzhead.text?1:0)+(S.gzhead.hcrc?2:0)+(S.gzhead.extra?4:0)+(S.gzhead.name?8:0)+(S.gzhead.comment?16:0)),le(S,255&S.gzhead.time),le(S,S.gzhead.time>>8&255),le(S,S.gzhead.time>>16&255),le(S,S.gzhead.time>>24&255),le(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),le(S,255&S.gzhead.os),S.gzhead.extra&&S.gzhead.extra.length&&(le(S,255&S.gzhead.extra.length),le(S,S.gzhead.extra.length>>8&255)),S.gzhead.hcrc&&(f.adler=c(f.adler,S.pending_buf,S.pending,0)),S.gzindex=0,S.status=69):(le(S,0),le(S,0),le(S,0),le(S,0),le(S,0),le(S,S.level===9?2:2<=S.strategy||S.level<2?4:0),le(S,3),S.status=U);else{var k=b+(S.w_bits-8<<4)<<8;k|=(2<=S.strategy||S.level<2?0:S.level<6?1:S.level===6?2:3)<<6,S.strstart!==0&&(k|=32),k+=31-k%31,S.status=U,ne(S,k),S.strstart!==0&&(ne(S,f.adler>>>16),ne(S,65535&f.adler)),f.adler=1}if(S.status===69)if(S.gzhead.extra){for(C=S.pending;S.gzindex<(65535&S.gzhead.extra.length)&&(S.pending!==S.pending_buf_size||(S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),z(f),C=S.pending,S.pending!==S.pending_buf_size));)le(S,255&S.gzhead.extra[S.gzindex]),S.gzindex++;S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),S.gzindex===S.gzhead.extra.length&&(S.gzindex=0,S.status=73)}else S.status=73;if(S.status===73)if(S.gzhead.name){C=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),z(f),C=S.pending,S.pending===S.pending_buf_size)){P=1;break}P=S.gzindex<S.gzhead.name.length?255&S.gzhead.name.charCodeAt(S.gzindex++):0,le(S,P)}while(P!==0);S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),P===0&&(S.gzindex=0,S.status=91)}else S.status=91;if(S.status===91)if(S.gzhead.comment){C=S.pending;do{if(S.pending===S.pending_buf_size&&(S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),z(f),C=S.pending,S.pending===S.pending_buf_size)){P=1;break}P=S.gzindex<S.gzhead.comment.length?255&S.gzhead.comment.charCodeAt(S.gzindex++):0,le(S,P)}while(P!==0);S.gzhead.hcrc&&S.pending>C&&(f.adler=c(f.adler,S.pending_buf,S.pending-C,C)),P===0&&(S.status=103)}else S.status=103;if(S.status===103&&(S.gzhead.hcrc?(S.pending+2>S.pending_buf_size&&z(f),S.pending+2<=S.pending_buf_size&&(le(S,255&f.adler),le(S,f.adler>>8&255),f.adler=0,S.status=U)):S.status=U),S.pending!==0){if(z(f),f.avail_out===0)return S.last_flush=-1,p}else if(f.avail_in===0&&Z(R)<=Z(T)&&R!==m)return ie(f,-5);if(S.status===666&&f.avail_in!==0)return ie(f,-5);if(f.avail_in!==0||S.lookahead!==0||R!==d&&S.status!==666){var N=S.strategy===2?(function(D,B){for(var Y;;){if(D.lookahead===0&&(ge(D),D.lookahead===0)){if(B===d)return _;break}if(D.match_length=0,Y=s._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++,Y&&(F(D,!1),D.strm.avail_out===0))return _}return D.insert=0,B===m?(F(D,!0),D.strm.avail_out===0?oe:G):D.last_lit&&(F(D,!1),D.strm.avail_out===0)?_:V})(S,R):S.strategy===3?(function(D,B){for(var Y,$,Q,ue,se=D.window;;){if(D.lookahead<=W){if(ge(D),D.lookahead<=W&&B===d)return _;if(D.lookahead===0)break}if(D.match_length=0,D.lookahead>=M&&0<D.strstart&&($=se[Q=D.strstart-1])===se[++Q]&&$===se[++Q]&&$===se[++Q]){ue=D.strstart+W;do;while($===se[++Q]&&$===se[++Q]&&$===se[++Q]&&$===se[++Q]&&$===se[++Q]&&$===se[++Q]&&$===se[++Q]&&$===se[++Q]&&Q<ue);D.match_length=W-(ue-Q),D.match_length>D.lookahead&&(D.match_length=D.lookahead)}if(D.match_length>=M?(Y=s._tr_tally(D,1,D.match_length-M),D.lookahead-=D.match_length,D.strstart+=D.match_length,D.match_length=0):(Y=s._tr_tally(D,0,D.window[D.strstart]),D.lookahead--,D.strstart++),Y&&(F(D,!1),D.strm.avail_out===0))return _}return D.insert=0,B===m?(F(D,!0),D.strm.avail_out===0?oe:G):D.last_lit&&(F(D,!1),D.strm.avail_out===0)?_:V})(S,R):o[S.level].func(S,R);if(N!==oe&&N!==G||(S.status=666),N===_||N===oe)return f.avail_out===0&&(S.last_flush=-1),p;if(N===V&&(R===1?s._tr_align(S):R!==5&&(s._tr_stored_block(S,0,0,!1),R===3&&(ae(S.head),S.lookahead===0&&(S.strstart=0,S.block_start=0,S.insert=0))),z(f),f.avail_out===0))return S.last_flush=-1,p}return R!==m?p:S.wrap<=0?1:(S.wrap===2?(le(S,255&f.adler),le(S,f.adler>>8&255),le(S,f.adler>>16&255),le(S,f.adler>>24&255),le(S,255&f.total_in),le(S,f.total_in>>8&255),le(S,f.total_in>>16&255),le(S,f.total_in>>24&255)):(ne(S,f.adler>>>16),ne(S,65535&f.adler)),z(f),0<S.wrap&&(S.wrap=-S.wrap),S.pending!==0?p:1)},i.deflateEnd=function(f){var R;return f&&f.state?(R=f.state.status)!==A&&R!==69&&R!==73&&R!==91&&R!==103&&R!==U&&R!==666?ie(f,g):(f.state=null,R===U?ie(f,-3):p):g},i.deflateSetDictionary=function(f,R){var T,S,C,P,k,N,D,B,Y=R.length;if(!f||!f.state||(P=(T=f.state).wrap)===2||P===1&&T.status!==A||T.lookahead)return g;for(P===1&&(f.adler=l(f.adler,R,Y,0)),T.wrap=0,Y>=T.w_size&&(P===0&&(ae(T.head),T.strstart=0,T.block_start=0,T.insert=0),B=new a.Buf8(T.w_size),a.arraySet(B,R,Y-T.w_size,T.w_size,0),R=B,Y=T.w_size),k=f.avail_in,N=f.next_in,D=f.input,f.avail_in=Y,f.next_in=0,f.input=R,ge(T);T.lookahead>=M;){for(S=T.strstart,C=T.lookahead-(M-1);T.ins_h=(T.ins_h<<T.hash_shift^T.window[S+M-1])&T.hash_mask,T.prev[S&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=S,S++,--C;);T.strstart=S,T.lookahead=M-1,ge(T)}return T.strstart+=T.lookahead,T.block_start=T.strstart,T.insert=T.lookahead,T.lookahead=0,T.match_length=T.prev_length=M-1,T.match_available=0,f.next_in=N,f.input=D,f.avail_in=k,T.wrap=P,p},i.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(n,r,i){r.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(n,r,i){r.exports=function(o,a){var s,l,c,u,d,m,p,g,h,y,v,b,w,x,O,j,L,q,M,W,ee,A,U,_,V;s=o.state,l=o.next_in,_=o.input,c=l+(o.avail_in-5),u=o.next_out,V=o.output,d=u-(a-o.avail_out),m=u+(o.avail_out-257),p=s.dmax,g=s.wsize,h=s.whave,y=s.wnext,v=s.window,b=s.hold,w=s.bits,x=s.lencode,O=s.distcode,j=(1<<s.lenbits)-1,L=(1<<s.distbits)-1;e:do{w<15&&(b+=_[l++]<<w,w+=8,b+=_[l++]<<w,w+=8),q=x[b&j];t:for(;;){if(b>>>=M=q>>>24,w-=M,(M=q>>>16&255)===0)V[u++]=65535&q;else{if(!(16&M)){if((64&M)==0){q=x[(65535&q)+(b&(1<<M)-1)];continue t}if(32&M){s.mode=12;break e}o.msg="invalid literal/length code",s.mode=30;break e}W=65535&q,(M&=15)&&(w<M&&(b+=_[l++]<<w,w+=8),W+=b&(1<<M)-1,b>>>=M,w-=M),w<15&&(b+=_[l++]<<w,w+=8,b+=_[l++]<<w,w+=8),q=O[b&L];n:for(;;){if(b>>>=M=q>>>24,w-=M,!(16&(M=q>>>16&255))){if((64&M)==0){q=O[(65535&q)+(b&(1<<M)-1)];continue n}o.msg="invalid distance code",s.mode=30;break e}if(ee=65535&q,w<(M&=15)&&(b+=_[l++]<<w,(w+=8)<M&&(b+=_[l++]<<w,w+=8)),p<(ee+=b&(1<<M)-1)){o.msg="invalid distance too far back",s.mode=30;break e}if(b>>>=M,w-=M,(M=u-d)<ee){if(h<(M=ee-M)&&s.sane){o.msg="invalid distance too far back",s.mode=30;break e}if(U=v,(A=0)===y){if(A+=g-M,M<W){for(W-=M;V[u++]=v[A++],--M;);A=u-ee,U=V}}else if(y<M){if(A+=g+y-M,(M-=y)<W){for(W-=M;V[u++]=v[A++],--M;);if(A=0,y<W){for(W-=M=y;V[u++]=v[A++],--M;);A=u-ee,U=V}}}else if(A+=y-M,M<W){for(W-=M;V[u++]=v[A++],--M;);A=u-ee,U=V}for(;2<W;)V[u++]=U[A++],V[u++]=U[A++],V[u++]=U[A++],W-=3;W&&(V[u++]=U[A++],1<W&&(V[u++]=U[A++]))}else{for(A=u-ee;V[u++]=V[A++],V[u++]=V[A++],V[u++]=V[A++],2<(W-=3););W&&(V[u++]=V[A++],1<W&&(V[u++]=V[A++]))}break}}break}}while(l<c&&u<m);l-=W=w>>3,b&=(1<<(w-=W<<3))-1,o.next_in=l,o.next_out=u,o.avail_in=l<c?c-l+5:5-(l-c),o.avail_out=u<m?m-u+257:257-(u-m),s.hold=b,s.bits=w}},{}],49:[function(n,r,i){var o=n("../utils/common"),a=n("./adler32"),s=n("./crc32"),l=n("./inffast"),c=n("./inftrees"),u=1,d=2,m=0,p=-2,g=1,h=852,y=592;function v(A){return(A>>>24&255)+(A>>>8&65280)+((65280&A)<<8)+((255&A)<<24)}function b(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new o.Buf16(320),this.work=new o.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function w(A){var U;return A&&A.state?(U=A.state,A.total_in=A.total_out=U.total=0,A.msg="",U.wrap&&(A.adler=1&U.wrap),U.mode=g,U.last=0,U.havedict=0,U.dmax=32768,U.head=null,U.hold=0,U.bits=0,U.lencode=U.lendyn=new o.Buf32(h),U.distcode=U.distdyn=new o.Buf32(y),U.sane=1,U.back=-1,m):p}function x(A){var U;return A&&A.state?((U=A.state).wsize=0,U.whave=0,U.wnext=0,w(A)):p}function O(A,U){var _,V;return A&&A.state?(V=A.state,U<0?(_=0,U=-U):(_=1+(U>>4),U<48&&(U&=15)),U&&(U<8||15<U)?p:(V.window!==null&&V.wbits!==U&&(V.window=null),V.wrap=_,V.wbits=U,x(A))):p}function j(A,U){var _,V;return A?(V=new b,(A.state=V).window=null,(_=O(A,U))!==m&&(A.state=null),_):p}var L,q,M=!0;function W(A){if(M){var U;for(L=new o.Buf32(512),q=new o.Buf32(32),U=0;U<144;)A.lens[U++]=8;for(;U<256;)A.lens[U++]=9;for(;U<280;)A.lens[U++]=7;for(;U<288;)A.lens[U++]=8;for(c(u,A.lens,0,288,L,0,A.work,{bits:9}),U=0;U<32;)A.lens[U++]=5;c(d,A.lens,0,32,q,0,A.work,{bits:5}),M=!1}A.lencode=L,A.lenbits=9,A.distcode=q,A.distbits=5}function ee(A,U,_,V){var oe,G=A.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new o.Buf8(G.wsize)),V>=G.wsize?(o.arraySet(G.window,U,_-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(V<(oe=G.wsize-G.wnext)&&(oe=V),o.arraySet(G.window,U,_-V,oe,G.wnext),(V-=oe)?(o.arraySet(G.window,U,_-V,V,0),G.wnext=V,G.whave=G.wsize):(G.wnext+=oe,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=oe))),0}i.inflateReset=x,i.inflateReset2=O,i.inflateResetKeep=w,i.inflateInit=function(A){return j(A,15)},i.inflateInit2=j,i.inflate=function(A,U){var _,V,oe,G,ie,Z,ae,z,F,le,ne,X,ge,H,J,K,re,ce,E,I,f,R,T,S,C=0,P=new o.Buf8(4),k=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!A||!A.state||!A.output||!A.input&&A.avail_in!==0)return p;(_=A.state).mode===12&&(_.mode=13),ie=A.next_out,oe=A.output,ae=A.avail_out,G=A.next_in,V=A.input,Z=A.avail_in,z=_.hold,F=_.bits,le=Z,ne=ae,R=m;e:for(;;)switch(_.mode){case g:if(_.wrap===0){_.mode=13;break}for(;F<16;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(2&_.wrap&&z===35615){P[_.check=0]=255&z,P[1]=z>>>8&255,_.check=s(_.check,P,2,0),F=z=0,_.mode=2;break}if(_.flags=0,_.head&&(_.head.done=!1),!(1&_.wrap)||(((255&z)<<8)+(z>>8))%31){A.msg="incorrect header check",_.mode=30;break}if((15&z)!=8){A.msg="unknown compression method",_.mode=30;break}if(F-=4,f=8+(15&(z>>>=4)),_.wbits===0)_.wbits=f;else if(f>_.wbits){A.msg="invalid window size",_.mode=30;break}_.dmax=1<<f,A.adler=_.check=1,_.mode=512&z?10:12,F=z=0;break;case 2:for(;F<16;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(_.flags=z,(255&_.flags)!=8){A.msg="unknown compression method",_.mode=30;break}if(57344&_.flags){A.msg="unknown header flags set",_.mode=30;break}_.head&&(_.head.text=z>>8&1),512&_.flags&&(P[0]=255&z,P[1]=z>>>8&255,_.check=s(_.check,P,2,0)),F=z=0,_.mode=3;case 3:for(;F<32;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.head&&(_.head.time=z),512&_.flags&&(P[0]=255&z,P[1]=z>>>8&255,P[2]=z>>>16&255,P[3]=z>>>24&255,_.check=s(_.check,P,4,0)),F=z=0,_.mode=4;case 4:for(;F<16;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.head&&(_.head.xflags=255&z,_.head.os=z>>8),512&_.flags&&(P[0]=255&z,P[1]=z>>>8&255,_.check=s(_.check,P,2,0)),F=z=0,_.mode=5;case 5:if(1024&_.flags){for(;F<16;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.length=z,_.head&&(_.head.extra_len=z),512&_.flags&&(P[0]=255&z,P[1]=z>>>8&255,_.check=s(_.check,P,2,0)),F=z=0}else _.head&&(_.head.extra=null);_.mode=6;case 6:if(1024&_.flags&&(Z<(X=_.length)&&(X=Z),X&&(_.head&&(f=_.head.extra_len-_.length,_.head.extra||(_.head.extra=new Array(_.head.extra_len)),o.arraySet(_.head.extra,V,G,X,f)),512&_.flags&&(_.check=s(_.check,V,X,G)),Z-=X,G+=X,_.length-=X),_.length))break e;_.length=0,_.mode=7;case 7:if(2048&_.flags){if(Z===0)break e;for(X=0;f=V[G+X++],_.head&&f&&_.length<65536&&(_.head.name+=String.fromCharCode(f)),f&&X<Z;);if(512&_.flags&&(_.check=s(_.check,V,X,G)),Z-=X,G+=X,f)break e}else _.head&&(_.head.name=null);_.length=0,_.mode=8;case 8:if(4096&_.flags){if(Z===0)break e;for(X=0;f=V[G+X++],_.head&&f&&_.length<65536&&(_.head.comment+=String.fromCharCode(f)),f&&X<Z;);if(512&_.flags&&(_.check=s(_.check,V,X,G)),Z-=X,G+=X,f)break e}else _.head&&(_.head.comment=null);_.mode=9;case 9:if(512&_.flags){for(;F<16;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(z!==(65535&_.check)){A.msg="header crc mismatch",_.mode=30;break}F=z=0}_.head&&(_.head.hcrc=_.flags>>9&1,_.head.done=!0),A.adler=_.check=0,_.mode=12;break;case 10:for(;F<32;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}A.adler=_.check=v(z),F=z=0,_.mode=11;case 11:if(_.havedict===0)return A.next_out=ie,A.avail_out=ae,A.next_in=G,A.avail_in=Z,_.hold=z,_.bits=F,2;A.adler=_.check=1,_.mode=12;case 12:if(U===5||U===6)break e;case 13:if(_.last){z>>>=7&F,F-=7&F,_.mode=27;break}for(;F<3;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}switch(_.last=1&z,F-=1,3&(z>>>=1)){case 0:_.mode=14;break;case 1:if(W(_),_.mode=20,U!==6)break;z>>>=2,F-=2;break e;case 2:_.mode=17;break;case 3:A.msg="invalid block type",_.mode=30}z>>>=2,F-=2;break;case 14:for(z>>>=7&F,F-=7&F;F<32;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if((65535&z)!=(z>>>16^65535)){A.msg="invalid stored block lengths",_.mode=30;break}if(_.length=65535&z,F=z=0,_.mode=15,U===6)break e;case 15:_.mode=16;case 16:if(X=_.length){if(Z<X&&(X=Z),ae<X&&(X=ae),X===0)break e;o.arraySet(oe,V,G,X,ie),Z-=X,G+=X,ae-=X,ie+=X,_.length-=X;break}_.mode=12;break;case 17:for(;F<14;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(_.nlen=257+(31&z),z>>>=5,F-=5,_.ndist=1+(31&z),z>>>=5,F-=5,_.ncode=4+(15&z),z>>>=4,F-=4,286<_.nlen||30<_.ndist){A.msg="too many length or distance symbols",_.mode=30;break}_.have=0,_.mode=18;case 18:for(;_.have<_.ncode;){for(;F<3;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.lens[k[_.have++]]=7&z,z>>>=3,F-=3}for(;_.have<19;)_.lens[k[_.have++]]=0;if(_.lencode=_.lendyn,_.lenbits=7,T={bits:_.lenbits},R=c(0,_.lens,0,19,_.lencode,0,_.work,T),_.lenbits=T.bits,R){A.msg="invalid code lengths set",_.mode=30;break}_.have=0,_.mode=19;case 19:for(;_.have<_.nlen+_.ndist;){for(;K=(C=_.lencode[z&(1<<_.lenbits)-1])>>>16&255,re=65535&C,!((J=C>>>24)<=F);){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(re<16)z>>>=J,F-=J,_.lens[_.have++]=re;else{if(re===16){for(S=J+2;F<S;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(z>>>=J,F-=J,_.have===0){A.msg="invalid bit length repeat",_.mode=30;break}f=_.lens[_.have-1],X=3+(3&z),z>>>=2,F-=2}else if(re===17){for(S=J+3;F<S;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}F-=J,f=0,X=3+(7&(z>>>=J)),z>>>=3,F-=3}else{for(S=J+7;F<S;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}F-=J,f=0,X=11+(127&(z>>>=J)),z>>>=7,F-=7}if(_.have+X>_.nlen+_.ndist){A.msg="invalid bit length repeat",_.mode=30;break}for(;X--;)_.lens[_.have++]=f}}if(_.mode===30)break;if(_.lens[256]===0){A.msg="invalid code -- missing end-of-block",_.mode=30;break}if(_.lenbits=9,T={bits:_.lenbits},R=c(u,_.lens,0,_.nlen,_.lencode,0,_.work,T),_.lenbits=T.bits,R){A.msg="invalid literal/lengths set",_.mode=30;break}if(_.distbits=6,_.distcode=_.distdyn,T={bits:_.distbits},R=c(d,_.lens,_.nlen,_.ndist,_.distcode,0,_.work,T),_.distbits=T.bits,R){A.msg="invalid distances set",_.mode=30;break}if(_.mode=20,U===6)break e;case 20:_.mode=21;case 21:if(6<=Z&&258<=ae){A.next_out=ie,A.avail_out=ae,A.next_in=G,A.avail_in=Z,_.hold=z,_.bits=F,l(A,ne),ie=A.next_out,oe=A.output,ae=A.avail_out,G=A.next_in,V=A.input,Z=A.avail_in,z=_.hold,F=_.bits,_.mode===12&&(_.back=-1);break}for(_.back=0;K=(C=_.lencode[z&(1<<_.lenbits)-1])>>>16&255,re=65535&C,!((J=C>>>24)<=F);){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(K&&(240&K)==0){for(ce=J,E=K,I=re;K=(C=_.lencode[I+((z&(1<<ce+E)-1)>>ce)])>>>16&255,re=65535&C,!(ce+(J=C>>>24)<=F);){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}z>>>=ce,F-=ce,_.back+=ce}if(z>>>=J,F-=J,_.back+=J,_.length=re,K===0){_.mode=26;break}if(32&K){_.back=-1,_.mode=12;break}if(64&K){A.msg="invalid literal/length code",_.mode=30;break}_.extra=15&K,_.mode=22;case 22:if(_.extra){for(S=_.extra;F<S;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.length+=z&(1<<_.extra)-1,z>>>=_.extra,F-=_.extra,_.back+=_.extra}_.was=_.length,_.mode=23;case 23:for(;K=(C=_.distcode[z&(1<<_.distbits)-1])>>>16&255,re=65535&C,!((J=C>>>24)<=F);){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if((240&K)==0){for(ce=J,E=K,I=re;K=(C=_.distcode[I+((z&(1<<ce+E)-1)>>ce)])>>>16&255,re=65535&C,!(ce+(J=C>>>24)<=F);){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}z>>>=ce,F-=ce,_.back+=ce}if(z>>>=J,F-=J,_.back+=J,64&K){A.msg="invalid distance code",_.mode=30;break}_.offset=re,_.extra=15&K,_.mode=24;case 24:if(_.extra){for(S=_.extra;F<S;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}_.offset+=z&(1<<_.extra)-1,z>>>=_.extra,F-=_.extra,_.back+=_.extra}if(_.offset>_.dmax){A.msg="invalid distance too far back",_.mode=30;break}_.mode=25;case 25:if(ae===0)break e;if(X=ne-ae,_.offset>X){if((X=_.offset-X)>_.whave&&_.sane){A.msg="invalid distance too far back",_.mode=30;break}ge=X>_.wnext?(X-=_.wnext,_.wsize-X):_.wnext-X,X>_.length&&(X=_.length),H=_.window}else H=oe,ge=ie-_.offset,X=_.length;for(ae<X&&(X=ae),ae-=X,_.length-=X;oe[ie++]=H[ge++],--X;);_.length===0&&(_.mode=21);break;case 26:if(ae===0)break e;oe[ie++]=_.length,ae--,_.mode=21;break;case 27:if(_.wrap){for(;F<32;){if(Z===0)break e;Z--,z|=V[G++]<<F,F+=8}if(ne-=ae,A.total_out+=ne,_.total+=ne,ne&&(A.adler=_.check=_.flags?s(_.check,oe,ne,ie-ne):a(_.check,oe,ne,ie-ne)),ne=ae,(_.flags?z:v(z))!==_.check){A.msg="incorrect data check",_.mode=30;break}F=z=0}_.mode=28;case 28:if(_.wrap&&_.flags){for(;F<32;){if(Z===0)break e;Z--,z+=V[G++]<<F,F+=8}if(z!==(4294967295&_.total)){A.msg="incorrect length check",_.mode=30;break}F=z=0}_.mode=29;case 29:R=1;break e;case 30:R=-3;break e;case 31:return-4;case 32:default:return p}return A.next_out=ie,A.avail_out=ae,A.next_in=G,A.avail_in=Z,_.hold=z,_.bits=F,(_.wsize||ne!==A.avail_out&&_.mode<30&&(_.mode<27||U!==4))&&ee(A,A.output,A.next_out,ne-A.avail_out)?(_.mode=31,-4):(le-=A.avail_in,ne-=A.avail_out,A.total_in+=le,A.total_out+=ne,_.total+=ne,_.wrap&&ne&&(A.adler=_.check=_.flags?s(_.check,oe,ne,A.next_out-ne):a(_.check,oe,ne,A.next_out-ne)),A.data_type=_.bits+(_.last?64:0)+(_.mode===12?128:0)+(_.mode===20||_.mode===15?256:0),(le==0&&ne===0||U===4)&&R===m&&(R=-5),R)},i.inflateEnd=function(A){if(!A||!A.state)return p;var U=A.state;return U.window&&(U.window=null),A.state=null,m},i.inflateGetHeader=function(A,U){var _;return A&&A.state?(2&(_=A.state).wrap)==0?p:((_.head=U).done=!1,m):p},i.inflateSetDictionary=function(A,U){var _,V=U.length;return A&&A.state?(_=A.state).wrap!==0&&_.mode!==11?p:_.mode===11&&a(1,U,V,0)!==_.check?-3:ee(A,U,V,V)?(_.mode=31,-4):(_.havedict=1,m):p},i.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(n,r,i){var o=n("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],s=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],c=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];r.exports=function(u,d,m,p,g,h,y,v){var b,w,x,O,j,L,q,M,W,ee=v.bits,A=0,U=0,_=0,V=0,oe=0,G=0,ie=0,Z=0,ae=0,z=0,F=null,le=0,ne=new o.Buf16(16),X=new o.Buf16(16),ge=null,H=0;for(A=0;A<=15;A++)ne[A]=0;for(U=0;U<p;U++)ne[d[m+U]]++;for(oe=ee,V=15;1<=V&&ne[V]===0;V--);if(V<oe&&(oe=V),V===0)return g[h++]=20971520,g[h++]=20971520,v.bits=1,0;for(_=1;_<V&&ne[_]===0;_++);for(oe<_&&(oe=_),A=Z=1;A<=15;A++)if(Z<<=1,(Z-=ne[A])<0)return-1;if(0<Z&&(u===0||V!==1))return-1;for(X[1]=0,A=1;A<15;A++)X[A+1]=X[A]+ne[A];for(U=0;U<p;U++)d[m+U]!==0&&(y[X[d[m+U]]++]=U);if(L=u===0?(F=ge=y,19):u===1?(F=a,le-=257,ge=s,H-=257,256):(F=l,ge=c,-1),A=_,j=h,ie=U=z=0,x=-1,O=(ae=1<<(G=oe))-1,u===1&&852<ae||u===2&&592<ae)return 1;for(;;){for(q=A-ie,W=y[U]<L?(M=0,y[U]):y[U]>L?(M=ge[H+y[U]],F[le+y[U]]):(M=96,0),b=1<<A-ie,_=w=1<<G;g[j+(z>>ie)+(w-=b)]=q<<24|M<<16|W|0,w!==0;);for(b=1<<A-1;z&b;)b>>=1;if(b!==0?(z&=b-1,z+=b):z=0,U++,--ne[A]==0){if(A===V)break;A=d[m+y[U]]}if(oe<A&&(z&O)!==x){for(ie===0&&(ie=oe),j+=_,Z=1<<(G=A-ie);G+ie<V&&!((Z-=ne[G+ie])<=0);)G++,Z<<=1;if(ae+=1<<G,u===1&&852<ae||u===2&&592<ae)return 1;g[x=z&O]=oe<<24|G<<16|j-h|0}}return z!==0&&(g[j+z]=A-ie<<24|64<<16|0),v.bits=oe,0}},{"../utils/common":41}],51:[function(n,r,i){r.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(n,r,i){var o=n("../utils/common"),a=0,s=1;function l(C){for(var P=C.length;0<=--P;)C[P]=0}var c=0,u=29,d=256,m=d+1+u,p=30,g=19,h=2*m+1,y=15,v=16,b=7,w=256,x=16,O=17,j=18,L=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],q=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],M=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],W=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],ee=new Array(2*(m+2));l(ee);var A=new Array(2*p);l(A);var U=new Array(512);l(U);var _=new Array(256);l(_);var V=new Array(u);l(V);var oe,G,ie,Z=new Array(p);function ae(C,P,k,N,D){this.static_tree=C,this.extra_bits=P,this.extra_base=k,this.elems=N,this.max_length=D,this.has_stree=C&&C.length}function z(C,P){this.dyn_tree=C,this.max_code=0,this.stat_desc=P}function F(C){return C<256?U[C]:U[256+(C>>>7)]}function le(C,P){C.pending_buf[C.pending++]=255&P,C.pending_buf[C.pending++]=P>>>8&255}function ne(C,P,k){C.bi_valid>v-k?(C.bi_buf|=P<<C.bi_valid&65535,le(C,C.bi_buf),C.bi_buf=P>>v-C.bi_valid,C.bi_valid+=k-v):(C.bi_buf|=P<<C.bi_valid&65535,C.bi_valid+=k)}function X(C,P,k){ne(C,k[2*P],k[2*P+1])}function ge(C,P){for(var k=0;k|=1&C,C>>>=1,k<<=1,0<--P;);return k>>>1}function H(C,P,k){var N,D,B=new Array(y+1),Y=0;for(N=1;N<=y;N++)B[N]=Y=Y+k[N-1]<<1;for(D=0;D<=P;D++){var $=C[2*D+1];$!==0&&(C[2*D]=ge(B[$]++,$))}}function J(C){var P;for(P=0;P<m;P++)C.dyn_ltree[2*P]=0;for(P=0;P<p;P++)C.dyn_dtree[2*P]=0;for(P=0;P<g;P++)C.bl_tree[2*P]=0;C.dyn_ltree[2*w]=1,C.opt_len=C.static_len=0,C.last_lit=C.matches=0}function K(C){8<C.bi_valid?le(C,C.bi_buf):0<C.bi_valid&&(C.pending_buf[C.pending++]=C.bi_buf),C.bi_buf=0,C.bi_valid=0}function re(C,P,k,N){var D=2*P,B=2*k;return C[D]<C[B]||C[D]===C[B]&&N[P]<=N[k]}function ce(C,P,k){for(var N=C.heap[k],D=k<<1;D<=C.heap_len&&(D<C.heap_len&&re(P,C.heap[D+1],C.heap[D],C.depth)&&D++,!re(P,N,C.heap[D],C.depth));)C.heap[k]=C.heap[D],k=D,D<<=1;C.heap[k]=N}function E(C,P,k){var N,D,B,Y,$=0;if(C.last_lit!==0)for(;N=C.pending_buf[C.d_buf+2*$]<<8|C.pending_buf[C.d_buf+2*$+1],D=C.pending_buf[C.l_buf+$],$++,N===0?X(C,D,P):(X(C,(B=_[D])+d+1,P),(Y=L[B])!==0&&ne(C,D-=V[B],Y),X(C,B=F(--N),k),(Y=q[B])!==0&&ne(C,N-=Z[B],Y)),$<C.last_lit;);X(C,w,P)}function I(C,P){var k,N,D,B=P.dyn_tree,Y=P.stat_desc.static_tree,$=P.stat_desc.has_stree,Q=P.stat_desc.elems,ue=-1;for(C.heap_len=0,C.heap_max=h,k=0;k<Q;k++)B[2*k]!==0?(C.heap[++C.heap_len]=ue=k,C.depth[k]=0):B[2*k+1]=0;for(;C.heap_len<2;)B[2*(D=C.heap[++C.heap_len]=ue<2?++ue:0)]=1,C.depth[D]=0,C.opt_len--,$&&(C.static_len-=Y[2*D+1]);for(P.max_code=ue,k=C.heap_len>>1;1<=k;k--)ce(C,B,k);for(D=Q;k=C.heap[1],C.heap[1]=C.heap[C.heap_len--],ce(C,B,1),N=C.heap[1],C.heap[--C.heap_max]=k,C.heap[--C.heap_max]=N,B[2*D]=B[2*k]+B[2*N],C.depth[D]=(C.depth[k]>=C.depth[N]?C.depth[k]:C.depth[N])+1,B[2*k+1]=B[2*N+1]=D,C.heap[1]=D++,ce(C,B,1),2<=C.heap_len;);C.heap[--C.heap_max]=C.heap[1],(function(se,Ce){var Ne,De,Ke,we,Qt,$e,ke=Ce.dyn_tree,Hn=Ce.max_code,Rr=Ce.stat_desc.static_tree,du=Ce.stat_desc.has_stree,hu=Ce.stat_desc.extra_bits,ns=Ce.stat_desc.extra_base,Wn=Ce.stat_desc.max_length,Or=0;for(we=0;we<=y;we++)se.bl_count[we]=0;for(ke[2*se.heap[se.heap_max]+1]=0,Ne=se.heap_max+1;Ne<h;Ne++)Wn<(we=ke[2*ke[2*(De=se.heap[Ne])+1]+1]+1)&&(we=Wn,Or++),ke[2*De+1]=we,Hn<De||(se.bl_count[we]++,Qt=0,ns<=De&&(Qt=hu[De-ns]),$e=ke[2*De],se.opt_len+=$e*(we+Qt),du&&(se.static_len+=$e*(Rr[2*De+1]+Qt)));if(Or!==0){do{for(we=Wn-1;se.bl_count[we]===0;)we--;se.bl_count[we]--,se.bl_count[we+1]+=2,se.bl_count[Wn]--,Or-=2}while(0<Or);for(we=Wn;we!==0;we--)for(De=se.bl_count[we];De!==0;)Hn<(Ke=se.heap[--Ne])||(ke[2*Ke+1]!==we&&(se.opt_len+=(we-ke[2*Ke+1])*ke[2*Ke],ke[2*Ke+1]=we),De--)}})(C,P),H(B,ue,C.bl_count)}function f(C,P,k){var N,D,B=-1,Y=P[1],$=0,Q=7,ue=4;for(Y===0&&(Q=138,ue=3),P[2*(k+1)+1]=65535,N=0;N<=k;N++)D=Y,Y=P[2*(N+1)+1],++$<Q&&D===Y||($<ue?C.bl_tree[2*D]+=$:D!==0?(D!==B&&C.bl_tree[2*D]++,C.bl_tree[2*x]++):$<=10?C.bl_tree[2*O]++:C.bl_tree[2*j]++,B=D,ue=($=0)===Y?(Q=138,3):D===Y?(Q=6,3):(Q=7,4))}function R(C,P,k){var N,D,B=-1,Y=P[1],$=0,Q=7,ue=4;for(Y===0&&(Q=138,ue=3),N=0;N<=k;N++)if(D=Y,Y=P[2*(N+1)+1],!(++$<Q&&D===Y)){if($<ue)for(;X(C,D,C.bl_tree),--$!=0;);else D!==0?(D!==B&&(X(C,D,C.bl_tree),$--),X(C,x,C.bl_tree),ne(C,$-3,2)):$<=10?(X(C,O,C.bl_tree),ne(C,$-3,3)):(X(C,j,C.bl_tree),ne(C,$-11,7));B=D,ue=($=0)===Y?(Q=138,3):D===Y?(Q=6,3):(Q=7,4)}}l(Z);var T=!1;function S(C,P,k,N){ne(C,(c<<1)+(N?1:0),3),(function(D,B,Y,$){K(D),le(D,Y),le(D,~Y),o.arraySet(D.pending_buf,D.window,B,Y,D.pending),D.pending+=Y})(C,P,k)}i._tr_init=function(C){T||((function(){var P,k,N,D,B,Y=new Array(y+1);for(D=N=0;D<u-1;D++)for(V[D]=N,P=0;P<1<<L[D];P++)_[N++]=D;for(_[N-1]=D,D=B=0;D<16;D++)for(Z[D]=B,P=0;P<1<<q[D];P++)U[B++]=D;for(B>>=7;D<p;D++)for(Z[D]=B<<7,P=0;P<1<<q[D]-7;P++)U[256+B++]=D;for(k=0;k<=y;k++)Y[k]=0;for(P=0;P<=143;)ee[2*P+1]=8,P++,Y[8]++;for(;P<=255;)ee[2*P+1]=9,P++,Y[9]++;for(;P<=279;)ee[2*P+1]=7,P++,Y[7]++;for(;P<=287;)ee[2*P+1]=8,P++,Y[8]++;for(H(ee,m+1,Y),P=0;P<p;P++)A[2*P+1]=5,A[2*P]=ge(P,5);oe=new ae(ee,L,d+1,m,y),G=new ae(A,q,0,p,y),ie=new ae(new Array(0),M,0,g,b)})(),T=!0),C.l_desc=new z(C.dyn_ltree,oe),C.d_desc=new z(C.dyn_dtree,G),C.bl_desc=new z(C.bl_tree,ie),C.bi_buf=0,C.bi_valid=0,J(C)},i._tr_stored_block=S,i._tr_flush_block=function(C,P,k,N){var D,B,Y=0;0<C.level?(C.strm.data_type===2&&(C.strm.data_type=(function($){var Q,ue=4093624447;for(Q=0;Q<=31;Q++,ue>>>=1)if(1&ue&&$.dyn_ltree[2*Q]!==0)return a;if($.dyn_ltree[18]!==0||$.dyn_ltree[20]!==0||$.dyn_ltree[26]!==0)return s;for(Q=32;Q<d;Q++)if($.dyn_ltree[2*Q]!==0)return s;return a})(C)),I(C,C.l_desc),I(C,C.d_desc),Y=(function($){var Q;for(f($,$.dyn_ltree,$.l_desc.max_code),f($,$.dyn_dtree,$.d_desc.max_code),I($,$.bl_desc),Q=g-1;3<=Q&&$.bl_tree[2*W[Q]+1]===0;Q--);return $.opt_len+=3*(Q+1)+5+5+4,Q})(C),D=C.opt_len+3+7>>>3,(B=C.static_len+3+7>>>3)<=D&&(D=B)):D=B=k+5,k+4<=D&&P!==-1?S(C,P,k,N):C.strategy===4||B===D?(ne(C,2+(N?1:0),3),E(C,ee,A)):(ne(C,4+(N?1:0),3),(function($,Q,ue,se){var Ce;for(ne($,Q-257,5),ne($,ue-1,5),ne($,se-4,4),Ce=0;Ce<se;Ce++)ne($,$.bl_tree[2*W[Ce]+1],3);R($,$.dyn_ltree,Q-1),R($,$.dyn_dtree,ue-1)})(C,C.l_desc.max_code+1,C.d_desc.max_code+1,Y+1),E(C,C.dyn_ltree,C.dyn_dtree)),J(C),N&&K(C)},i._tr_tally=function(C,P,k){return C.pending_buf[C.d_buf+2*C.last_lit]=P>>>8&255,C.pending_buf[C.d_buf+2*C.last_lit+1]=255&P,C.pending_buf[C.l_buf+C.last_lit]=255&k,C.last_lit++,P===0?C.dyn_ltree[2*k]++:(C.matches++,P--,C.dyn_ltree[2*(_[k]+d+1)]++,C.dyn_dtree[2*F(P)]++),C.last_lit===C.lit_bufsize-1},i._tr_align=function(C){ne(C,2,3),X(C,w,ee),(function(P){P.bi_valid===16?(le(P,P.bi_buf),P.bi_buf=0,P.bi_valid=0):8<=P.bi_valid&&(P.pending_buf[P.pending++]=255&P.bi_buf,P.bi_buf>>=8,P.bi_valid-=8)})(C)}},{"../utils/common":41}],53:[function(n,r,i){r.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(n,r,i){(function(o){(function(a,s){if(!a.setImmediate){var l,c,u,d,m=1,p={},g=!1,h=a.document,y=Object.getPrototypeOf&&Object.getPrototypeOf(a);y=y&&y.setTimeout?y:a,l={}.toString.call(a.process)==="[object process]"?function(x){process.nextTick(function(){b(x)})}:(function(){if(a.postMessage&&!a.importScripts){var x=!0,O=a.onmessage;return a.onmessage=function(){x=!1},a.postMessage("","*"),a.onmessage=O,x}})()?(d="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",w,!1):a.attachEvent("onmessage",w),function(x){a.postMessage(d+x,"*")}):a.MessageChannel?((u=new MessageChannel).port1.onmessage=function(x){b(x.data)},function(x){u.port2.postMessage(x)}):h&&"onreadystatechange"in h.createElement("script")?(c=h.documentElement,function(x){var O=h.createElement("script");O.onreadystatechange=function(){b(x),O.onreadystatechange=null,c.removeChild(O),O=null},c.appendChild(O)}):function(x){setTimeout(b,0,x)},y.setImmediate=function(x){typeof x!="function"&&(x=new Function(""+x));for(var O=new Array(arguments.length-1),j=0;j<O.length;j++)O[j]=arguments[j+1];var L={callback:x,args:O};return p[m]=L,l(m),m++},y.clearImmediate=v}function v(x){delete p[x]}function b(x){if(g)setTimeout(b,0,x);else{var O=p[x];if(O){g=!0;try{(function(j){var L=j.callback,q=j.args;switch(q.length){case 0:L();break;case 1:L(q[0]);break;case 2:L(q[0],q[1]);break;case 3:L(q[0],q[1],q[2]);break;default:L.apply(s,q)}})(O)}finally{v(x),g=!1}}}}function w(x){x.source===a&&typeof x.data=="string"&&x.data.indexOf(d)===0&&b(+x.data.slice(d.length))}})(typeof self>"u"?o===void 0?this:o:self)}).call(this,typeof Gt<"u"?Gt:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Yi)),Yi.exports}var V1=W1();const G1=H1(V1);var Gr={exports:{}},q1=Gr.exports,Oa;function Y1(){return Oa||(Oa=1,(function(e,t){(function(n,r){r()})(q1,function(){function n(c,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,u,d){var m=new XMLHttpRequest;m.open("GET",c),m.responseType="blob",m.onload=function(){l(m.response,u,d)},m.onerror=function(){console.error("could not download file")},m.send()}function i(c){var u=new XMLHttpRequest;u.open("HEAD",c,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function o(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(u)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Gt=="object"&&Gt.global===Gt?Gt:void 0,s=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(c,u,d){var m=a.URL||a.webkitURL,p=document.createElement("a");u=u||c.name||"download",p.download=u,p.rel="noopener",typeof c=="string"?(p.href=c,p.origin===location.origin?o(p):i(p.href)?r(c,u,d):o(p,p.target="_blank")):(p.href=m.createObjectURL(c),setTimeout(function(){m.revokeObjectURL(p.href)},4e4),setTimeout(function(){o(p)},0))}:"msSaveOrOpenBlob"in navigator?function(c,u,d){if(u=u||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,d),u);else if(i(c))r(c,u,d);else{var m=document.createElement("a");m.href=c,m.target="_blank",setTimeout(function(){o(m)})}}:function(c,u,d,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof c=="string")return r(c,u,d);var p=c.type==="application/octet-stream",g=/constructor/i.test(a.HTMLElement)||a.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||p&&g||s)&&typeof FileReader<"u"){var y=new FileReader;y.onloadend=function(){var w=y.result;w=h?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=w:location=w,m=null},y.readAsDataURL(c)}else{var v=a.URL||a.webkitURL,b=v.createObjectURL(c);m?m.location=b:location.href=b,m=null,setTimeout(function(){v.revokeObjectURL(b)},4e4)}});a.saveAs=l.saveAs=l,e.exports=l})})(Gr)),Gr.exports}var K1=Y1();const Z1=`# 1. API 協作規則\r
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
`,J1=`# 2. 參數一致性\r
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
`,Q1=`# 3. 日期與時間格式\r
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
`,X1=`# 4. 分頁資料格式\r
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
`,ev=`# 5. API 呼叫方式與 HTTP Method 安全規範

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
`,tv=`# 6. 文字欄位長度\r
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
`,nv=`# 7. 上傳格式\r
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
`,rv=`# 8. 下載格式\r
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
`,iv=`# 9. 下拉選單 API\r
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
`,ov=`\uFEFF# Graph API 寄信

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
`,sv=`# 頁面權限\r
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
`,av=`\uFEFF# Fortify 掃描規則\r
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
`,lv=`# 權限模型與最大管理員規範

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
`,cv='# 14. 地端啟動與環境 DB 切換\n\n規範地端(本機)啟動後端 API 時,如何選擇要連接的環境資料庫(SIT / UAT),以及 VS Code Spring Boot Dashboard 的使用限制。\n\n---\n\n## 🌐 環境與 DB 實際對應\n\n系統有兩組測試團隊分別在 SIT / UAT 環境測試,**兩環境的 DB 不同、倒入的測試資料也不同**。各環境與 DB 的實際對應:\n\n| 環境 | 後端位置 | Profile | DB(內網位址) | DB(外網位址) |\n|---|---|---|---|---|\n| SIT 測試環境 | 35.194.171.114(前端 `.env.sit` 指向) | `sit` | 10.109.128.3 / `rdss` | 104.199.162.243 / `rdss` |\n| UAT 測試環境 | 34.80.125.220:8080(前端 `.env.uat` 指向) | `uat` | 10.109.128.3 / `rdss_n` | 104.199.162.243 / `rdss_n` |\n| 地端開發 | 本機 :8081 | `local` / `localuat` | ——(連不到) | 104.199.162.243 / `rdss` 或 `rdss_n` |\n\n**`10.109.128.3`(內網)與 `104.199.162.243`(外網)是同一台 DB 主機的兩個 IP**:部署在 GCP 內網的 SIT/UAT 後端走內網位址,地端開發者從外部走外網位址,連到的是同一顆資料庫。因此:\n\n- 地端跑 `local` → 連 `rdss` = **SIT 測試團隊使用的同一顆 DB**\n- 地端跑 `localuat` → 連 `rdss_n` = **UAT 測試團隊使用的同一顆 DB**\n\n> 佐證:兩位址上的資料庫剛好都是 `rdss` + `rdss_n` 一對、四個 profile 設定檔的 DB 帳號與加密密碼字串完全相同、`10.109.128.3` 為私有網段僅內網可達。(此對應為由設定檔推斷,尚未以 SQL 查證主機內網 IP;若發現地端查到的資料與測試團隊回報不一致,先回頭驗證此假設。)\n\n---\n\n## 🗂️ Spring Profile 與資料庫對照\n\n後端(`rdss_backend_api_new`)以 `--spring.profiles.active` 決定連接的 DB,對應設定檔在 `src/main/resources/application-{profile}.yml`:\n\n| Profile | DB 主機 | 資料庫 | 用途 |\n|---|---|---|---|\n| `sit` | 10.109.128.3 | `rdss` | SIT 測試環境 |\n| `uat` | 10.109.128.3 | `rdss_n` | UAT 測試環境 |\n| `local` | 104.199.162.243 | `rdss` | 外網開發機(SIT 資料) |\n| `localuat` | 104.199.162.243 | `rdss_n` | 外網開發機(UAT 資料) |\n| `rdssuat` | 10.193.15.100 | `rdss` | 內網 UAT 主機 |\n| `prod` | 10.193.15.100 | `rdss` | ⛔ 正式環境,**地端禁止使用** |\n\n> ⚠️ `10.109.128.3` 與 `10.193.15.100` 都是**內網主機,地端(外網)連不到**(除非有 VPN)。地端切換 SIT/UAT 資料,實際使用的是外網開發機的兩個 profile:**`local`(SIT 資料,rdss)/ `localuat`(UAT 資料,rdss_n)**。\n>\n> ⚠️ 各 profile 的 `server.port` 不一致(`local` 8081、`localuat` 8080、`sit`/`uat` 80),地端啟動一律另帶 `--server.port=8081` 覆寫,前端地端設定即以 8081 為準。\n\n---\n\n## ✅ 地端正確操作順序\n\n1. 前端確認 dev mode 的 `VITE_API_BASE_URL_V2` 為 `http://localhost:8081/`:可修改 `rdss_front/.env.dev`;若本機另有 `.env.dev.local`,Vite 會以後者為準,兩者不可互相矛盾。\n2. 以前端 dev mode 啟動(`npm run dev`);前端所有 API 會送到本機後端 8081。\n3. 在後端按 `Ctrl+Shift+D` 開啟 **Run and Debug**,從下拉選單選擇:\n   - `RDSS-SIT資料`:使用 `local` profile,連 `rdss`(SIT 測試資料)。\n   - `RDSS-UAT資料`:使用 `localuat` profile,連 `rdss_n`(UAT 測試資料)。\n4. 按 `F5` 啟動後端。需要切換 DB 時,先停止後端,改選另一組 configuration 後重新按 `F5`;前端仍維持指向 8081,不必跟著切 URL。\n\n> **責任界線:**前端 `.env.dev` 只決定「前端呼叫哪個後端位址」,不決定 DB;後端 `launch.json` 的 `--spring.profiles.active` 才決定連哪個 DB。\n>\n> 後端 `launch.json` 不設定 `envFile`:profile、port 與 UAT 所需的 JWT secret 都由 `args` 傳入。這不代表整個 RDSS 沒有環境檔;前端仍使用 `rdss_front/.env.dev`,兩者用途不同。\n\n---\n\n## ⚙️ launch.json 設定方式\n\n設定檔位置:**專案所屬工作區資料夾**的 `.vscode/launch.json`。注意 Dashboard 是以「app 所在的資料夾」往上找最近的 `.vscode/launch.json`——若 `C:\\IISI\\backend_new\\.vscode\\launch.json` 存在,會優先於 `C:\\IISI\\.vscode\\launch.json` 生效,兩份設定內容應保持一致,避免啟動吃錯設定。\n\n**每個環境建立一組具名 configuration**,以 `args` 指定 profile:\n\n> 📎 **可直接取用的範本**:[`assets/launch.json`](assets/launch.json)——已去識別化,檔內附每個參數的中文填寫說明。\n\n### 首次設定步驟(新人第一次會卡在這)\n\n1. 用 VS Code 開啟工作區,按 `Ctrl+Shift+D` 開啟 **Run and Debug** 面板。\n2. 若面板顯示「執行並偵錯」而沒有下拉選單 → 點 **建立 launch.json 檔案** → 選擇 **Java**。\n   VS Code 會在該資料夾建立 `.vscode/launch.json`。\n3. 把 `assets/launch.json` **整份覆蓋**進去,再依檔內【填寫說明】把 `<...>` 換成實際值。\n4. 確認 `projectName` 與本機 Java 專案名稱相符;不確定時看 VS Code Java Projects 面板顯示的名稱。\n5. **UAT 那組必須帶 `--jwt.secret`。** `application-localuat.yml` 的 `jwt.secret` 是 `${JWT_SECRET:}`(無 fallback),\n   不注入就是空字串,會造成 JWT 簽章失敗、登入拿不到有效 token;`local`(SIT)有 fallback 預設值故不需要。\n   該行有 Fortify 註解要求正式環境不得設 fallback,因此**不要改 yml**,改由啟動參數注入。\n6. 後端 `launch.json` 不設定 `envFile`;這與前端的 `rdss_front/.env.dev` 無關,不可因而認定前端不需要環境檔。\n7. 存檔。Run and Debug 的下拉選單就會出現「RDSS-SIT資料」「RDSS-UAT資料」兩組。\n\n> ⚠️ **只放一份。** 若 `C:\\IISI\\.vscode\\launch.json` 與 `C:\\IISI\\backend_new\\.vscode\\launch.json` 同時存在,\n> 後者優先生效,兩份內容一旦不同步就會「以為在測 UAT、實際連到 SIT」,而且不會有任何錯誤訊息。\n> 建議只保留 `backend_new/.vscode/launch.json`。\n\n\n```jsonc\n{\n    "configurations": [\n        {\n            "type": "java",\n            "name": "RDSS-SIT資料 (local, rdss)",\n            "request": "launch",\n            "cwd": "${workspaceFolder}",\n            "mainClass": "moi.rdss.platform.RdssBackendApiApplication",\n            "projectName": "rdss-backend-api-new",\n            "args": "--spring.profiles.active=local --server.port=8081"\n        },\n        {\n            "type": "java",\n            "name": "RDSS-UAT資料 (localuat, rdss_n)",\n            "request": "launch",\n            "cwd": "${workspaceFolder}",\n            "mainClass": "moi.rdss.platform.RdssBackendApiApplication",\n            "projectName": "rdss-backend-api-new",\n            "args": "--spring.profiles.active=localuat --server.port=8081 --jwt.secret=<從 application-local.yml 的 jwt.secret fallback 複製>"\n        }\n    ]\n}\n```\n\n---\n\n## 🚀 啟動方式(速查表)\n\n| 啟動入口 | 跑哪組設定 | 怎麼換環境 |\n|---|---|---|\n| Spring Boot Dashboard 播放鍵 | **固定第一組** | 只能去 launch.json 調整兩組設定的順序 |\n| Run and Debug(`Ctrl+Shift+D`) | **下拉選單選的那組** | 下拉直接選 → 按綠色播放鍵或 `F5` |\n\n- 綠色播放鍵 = `F5`,同一個動作;下拉選單**只影響下一次按 F5**,不影響 Dashboard 播放鍵。\n- **同時只能跑一個**(8081 只有一個):換環境前先停掉正在跑的,停掉方式隨意——Dashboard 停止鍵 / `Shift+F5` / terminal 內 `Ctrl+C` / 直接關掉該 terminal。\n- 啟動時若出現 `Port 8081 was already in use`,是前一個程序還沒完全釋放 port,等一兩秒再啟動一次。\n- 臨時跑一次另一個環境 → 走 Run and Debug 下拉;接下來一段時間都要測另一個環境 → 改 launch.json 順序讓 Dashboard 播放鍵直接吃它。\n- 無論從哪個入口啟動,執行中的 app 都會出現在 Dashboard,可從 Dashboard 停止。\n\n---\n\n## 🖥️ 前端(rdss_front)地端啟動\n\n- 地端開發用 `--mode dev`,API 位址由 `.env.dev` 的 `VITE_API_BASE_URL_V2=http://localhost:8081/` 指向地端後端(所以後端啟動固定帶 `--server.port=8081`)。\n- 若存在 `.env.dev.local`,Vite 會以該檔覆蓋 `.env.dev`;請同步確認 `VITE_API_BASE_URL_V2` 也指向 8081。`.env.dev.local` 符合現有 `*.local` Git 忽略規則,適合保留本機覆寫值。\n- **Port 衝突**:Vite 預設 5173,若本機還跑著其他專案的 dev server(如 `ai_coding_agent/frontend` 佔住 `127.0.0.1:5173`),瀏覽 `localhost:5173` 會被導到別的專案。此時改用專屬 port 啟動:\n\n  ```powershell\n  npx vite --mode dev --port 5180\n  ```\n\n  之後固定用 `http://localhost:5180` 開 RDSS 前端。`--port` 只是指令參數,**不落任何檔案、不會進版控**。\n  (注意:`npm run dev -- --port 5180` 在 Windows 下參數會被 npm 吃掉而失效,請直接用上面的 `npx vite` 寫法。)\n- Dev server 連續跑太久(1~2 天)可能因 Node heap 耗盡而崩潰(`JavaScript heap out of memory`)。長時間掛著的話,啟動前先設 `$env:NODE_OPTIONS = \'--max-old-space-size=4096\'` 加大記憶體上限;掛掉時重啟即可,不影響程式碼。\n- ⚠️ `.env.dev` 是**被 git 追蹤、僅供 dev／地端測試使用的設定檔**。把 API 位址改成 `localhost:8081` 屬於個人地端暫時修改,**未經團隊確認不得擅自 commit、push 或隨版本上板**;送版前必須以 `git status`／差異內容再次確認排除。若使用被忽略的 `.env.dev.local` 覆寫,仍要避免留下與實際測試目標不符的舊值。\n\n---\n\n## 🚧 Spring Boot Dashboard 的限制(踩雷紀錄)\n\nVS Code 的 Spring Boot Dashboard extension(vscjava.vscode-spring-boot-dashboard)有以下限制,設定時不要踩:\n\n1. **一個專案只會顯示一個節點**,無法像 Eclipse STS 版一樣在專案下列出多組啟動設定讓你選。\n2. 播放鍵啟動時,只會取 launch.json 中**第一個** `mainClass` + `projectName` 相符的設定,後面的永遠不會被用到。\n3. Dashboard 是把設定物件直接丟給 debugger,**不會解析 `${input:xxx}` 輸入變數**——在 `args` 裡用 `${input:}` 做選單,從 Dashboard 啟動時不會跳出選擇視窗,profile 會變成未解析的字面值,等於沒載入任何環境設定(DB 連線不明)。請勿使用這種寫法。\n4. 若相符的設定 `args` 為空(或找不到相符設定),app 會以 `application.yml` 的預設 profile(`local`)啟動,**連到外網開發機 104.199.162.243**,而不是 SIT/UAT。發現連錯 DB 時,先用 `netstat -ano` 對照 app 的 PID 確認實際連線的 DB 主機。\n\n---\n\n## ⛔ 禁止事項\n\n- 地端啟動一律禁用 `prod` / `rdssuat` 等正式、內網主機 profile。\n- 不要為了切環境去改 `application-{profile}.yml` 的 datasource 內容;切環境只透過 launch.json 換 profile。\n',uv=`# 15. Git 上板流程

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
`,fv=`// ─────────────────────────────────────────────────────────────
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
`,dv=[{name:"01-API協作規則.md",content:Z1},{name:"02-參數一致性.md",content:J1},{name:"03-日期與時間格式.md",content:Q1},{name:"04-分頁資料格式.md",content:X1},{name:"05-API呼叫方式與後端輸入驗證.md",content:ev},{name:"06-文字欄位長度.md",content:tv},{name:"07-上傳格式.md",content:nv},{name:"08-下載格式.md",content:rv},{name:"09-下拉選單API.md",content:iv},{name:"10-GraphAPI寄信.md",content:ov},{name:"11-頁面權限.md",content:sv},{name:"12-Fortify掃描規則.md",content:av},{name:"13-權限模型與最大管理員規範.md",content:lv},{name:"14-地端啟動與環境DB切換.md",content:cv},{name:"15-Git上板流程.md",content:uv}],hv=[{name:"launch.json",content:fv}];async function pv(){const e=new G1,t=e.folder("RDSS專案-前後端協作規範");for(const i of dv)t.file(i.name,i.content);const n=t.folder("assets");for(const i of hv)n.file(i.name,i.content);const r=await e.generateAsync({type:"blob"});K1.saveAs(r,"RDSS專案-前後端協作規範.zip")}const mv={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",padding:"52px 16px"}},gv={style:{width:"100%","max-width":"360px"}},vv=["disabled"],_v={key:0,style:{color:"#ef4444","font-size":"0.875rem",margin:"2px 0 0","text-align":"center"}},bv={__name:"PasswordGate",emits:["unlock"],setup(e,{emit:t}){const n=t,r=["18da6d36","a2e5a360","5f78996e","04fa4c89","51482ca8","83a7c8be","7bbfe3d6","686f2f96"],i=Oe(""),o=Oe(!1),a=Oe(!1),s=Oe(null);Fn(()=>{var u;(u=s.value)==null||u.focus()});const l=async u=>{const d=await globalThis.crypto.subtle.digest("SHA-256",new TextEncoder().encode(u));return Array.from(new Uint8Array(d)).map(m=>m.toString(16).padStart(2,"0")).join("")},c=async()=>{if(!(!i.value.trim()||a.value)){a.value=!0;try{const u=await l(i.value);u===r.join("")?n("unlock",u.slice(0,16)):o.value=!0}finally{a.value=!1}}};return(u,d)=>(Qe(),St("div",mv,[pe("div",gv,[d[2]||(d[2]=Xf('<div style="text-align:center;margin-bottom:24px;"><div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;background:#f1f5f9;border-radius:50%;margin-bottom:12px;"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div><h3 style="font-size:1.15rem;font-weight:700;color:#334155;margin:0 0 6px;">此章節受保護</h3><p style="color:#64748b;font-size:0.9rem;margin:0;">請輸入密碼以檢視內容</p></div>',1)),pe("form",{onSubmit:uo(c,["prevent"]),style:{display:"flex","flex-direction":"column",gap:"10px"}},[fl(pe("input",{ref_key:"inputRef",ref:s,"onUpdate:modelValue":d[0]||(d[0]=m=>i.value=m),type:"password",placeholder:"請輸入密碼",autocomplete:"new-password",style:cr({padding:"10px 14px",border:o.value?"1.5px solid #ef4444":"1.5px solid #e2e8f0",borderRadius:"8px",fontSize:"0.95rem",outline:"none",width:"100%",boxSizing:"border-box",transition:"border-color 0.15s"}),onInput:d[1]||(d[1]=m=>o.value=!1)},null,36),[[Ud,i.value]]),pe("button",{type:"submit",disabled:a.value||!i.value.trim(),style:cr([{padding:"10px",background:"#4f46e5",color:"#fff",border:"none","border-radius":"8px","font-size":"0.95rem","font-weight":"600",cursor:"pointer",transition:"background 0.2s",opacity:"1"},{opacity:a.value||!i.value.trim()?"0.55":"1",cursor:a.value||!i.value.trim()?"not-allowed":"pointer"}])},Sn(a.value?"驗證中…":"解鎖"),13,vv),o.value?(Qe(),St("p",_v," 密碼錯誤，請重試 ")):so("",!0)],32)])]))}},yv=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Sv={class:"min-w-0"},Cv={class:"hero sticky top-0 z-50 bg-gradient-to-b from-indigo-50 to-slate-50 border-b border-gray-200 px-3 py-2 sm:px-4 sm:py-3 md:px-6 lg:px-8"},wv={class:"flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3"},Av={class:"flex items-center gap-3 shrink-0"},Ev=["disabled"],Pv={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},xv={key:1,class:"w-4 h-4 animate-spin",fill:"none",viewBox:"0 0 24 24"},Tv={class:"flex flex-col lg:flex-row gap-4 sm:gap-6 w-full px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8"},Iv={class:"hidden lg:block lg:flex-shrink-0 lg:w-64 lg:sticky lg:top-44 lg:self-start lg:max-h-[calc(100vh-11rem)] lg:overflow-y-auto"},Rv={class:"bg-white rounded-xl p-5 shadow-lg"},Ov={class:"space-y-1"},Dv=["href","onClick"],Nv={class:"p-4 space-y-2"},kv=["href","onClick"],Mv={id:"sections",class:"flex-1 min-w-0 w-full max-w-full overflow-x-hidden"},Lv={class:"flex items-center justify-between w-full"},Fv={class:"text-lg md:text-xl lg:text-2xl font-bold"},Bv={key:0,style:{"font-size":"1rem","margin-right":"8px",opacity:"0.55"},title:"需要密碼"},Ki="_p",jv={__name:"Home",setup(e){var y;const t=Oe(!1),n=Oe(!1);function r(v){n.value=!0,localStorage.setItem(Ki,v)}const i=()=>localStorage.removeItem(Ki),o=async()=>{t.value=!0;try{await pv()}finally{t.value=!1}},a=[{id:"section-1",title:"1. API 協作規則",component:He(()=>We(()=>import("./ApiFormat-V3Yp0UXF.js"),[]))},{id:"section-2",title:"2. 參數一致性",component:He(()=>We(()=>import("./ResponseStructure-BA4sLgFy.js"),[]))},{id:"section-3",title:"3. 日期與時間格式",component:He(()=>We(()=>import("./DateTimeFormat-C6G5jQox.js"),[]))},{id:"section-4",title:"4. 分頁資料格式",component:He(()=>We(()=>import("./PaginationFormat-UI9mwICY.js"),[]))},{id:"section-5",title:"5. API 呼叫方式",component:He(()=>We(()=>import("./ApiCallMethod-CyL8XabH.js"),[]))},{id:"section-6",title:"6. 文字欄位長度",component:He(()=>We(()=>import("./TextFieldLength-DdIvYeMM.js"),[]))},{id:"section-7",title:"7. 上傳格式",component:He(()=>We(()=>import("./UploadFormat-Ds0Wa5oB.js"),[]))},{id:"section-8",title:"8. 下載格式",component:He(()=>We(()=>import("./DownloadFormat-DUqeTc1L.js"),[]))},{id:"section-9",title:"9. 下拉選單 API (待討論)",component:He(()=>We(()=>import("./DropdownApi-BpMa5IKD.js"),[]))},{id:"section-10",title:"10. Graph API 寄信",component:He(()=>We(()=>import("./GraphMailSpec-BLa37S5A.js"),[]))},{id:"section-11",title:"11. 頁面權限",component:He(()=>We(()=>import("./PagePermission-BPCrfB-g.js"),[]))},{id:"section-12",title:"12. Fortify 掃描規則",component:He(()=>We(()=>import("./FortifyRules-BeWJWUuH.js"),[]))},{id:"section-13",title:"13. 權限模型與最大管理員規範",component:He(()=>We(()=>import("./PermissionModel-BF0ckTih.js"),[]))},{id:"section-14",title:"14. 地端啟動與環境 DB 切換",component:He(()=>We(()=>import("./LocalEnvironment-BkFaS90j.js"),[]))},{id:"section-15",title:"15. Git 上板流程",component:He(()=>We(()=>import("./GitWorkflow-Dnr8v3gu.js"),[]))},{id:"appendix",title:"16. 測試環境",component:He(()=>We(()=>import("./TestEnvironment-Bi9-VYjc.js"),[])),protected:!0},{id:"section-last",title:"17. 測試帳號",component:He(()=>We(()=>import("./TestAccounts-UBJ0YG-L.js"),__vite__mapDeps([0,1]))),protected:!0}],s=Oe(((y=a[0])==null?void 0:y.id)||""),l=Oe(!1);let c,u=null;const d=Oe([]),m=()=>{l.value=!l.value},p=v=>{s.value=v;const b=document.getElementById(v);if(b){if(v==="section-1"){window.scrollTo({top:0,behavior:"smooth"});return}const O=b.getBoundingClientRect().top+window.pageYOffset-110;window.scrollTo({top:O,behavior:"smooth"})}},g=v=>{p(v),m()},h=()=>{const b=a.map(x=>document.getElementById(x.id)).filter(Boolean);if(!b.length)return;let w=b[0];for(const x of b)if(x.getBoundingClientRect().top-140<=0)w=x;else break;s.value=w.id};return Fn(()=>{c=()=>{u||(u=requestAnimationFrame(()=>{h(),u=null}))},window.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c,{passive:!0}),h();const v=localStorage.getItem(Ki);v&&/^[0-9a-f]{16}$/.test(v)&&(n.value=!0),window.addEventListener("beforeunload",i)}),zo(()=>{c&&(window.removeEventListener("scroll",c),window.removeEventListener("resize",c)),u&&(cancelAnimationFrame(u),u=null),window.removeEventListener("beforeunload",i)}),(v,b)=>(Qe(),St("div",Sv,[pe("header",Cv,[b[6]||(b[6]=pe("nav",{class:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 mb-2 sm:mb-3"},[pe("div",{class:"font-bold text-sm sm:text-base lg:text-lg tracking-wide break-words max-w-full"},"RDSS Development Guide")],-1)),pe("div",wv,[b[5]||(b[5]=pe("h2",{class:"text-base sm:text-lg md:text-xl lg:text-2xl font-bold break-words max-w-full"},"RDSS專案-前後端協作規範",-1)),pe("div",Av,[pe("button",{onClick:o,disabled:t.value,class:"inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"},[t.value?(Qe(),St("svg",xv,[...b[3]||(b[3]=[pe("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),pe("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"},null,-1)])])):(Qe(),St("svg",Pv,[...b[2]||(b[2]=[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},null,-1)])])),ei(" "+Sn(t.value?"打包中...":"下載規範MD檔"),1)],8,Ev),b[4]||(b[4]=pe("span",{class:"text-xs sm:text-sm text-gray-500"},"最後編輯日期：2026-08-10",-1))])])]),pe("div",Tv,[pe("aside",Iv,[pe("nav",Rv,[b[7]||(b[7]=pe("div",{class:"text-xl font-bold mb-4 text-slate-600"},"目錄",-1)),pe("ul",Ov,[(Qe(),St(Fe,null,Ni(a,w=>pe("li",{key:w.id},[pe("a",{href:`#${w.id}`,class:ur(["block px-3 py-2.5 text-gray-600 no-underline rounded-lg transition-all duration-200 text-sm hover:bg-slate-100 hover:text-slate-700 hover:translate-x-1",{"bg-slate-100 text-slate-700 translate-x-1":s.value===w.id}]),onClick:uo(x=>p(w.id),["prevent"])},Sn(w.title),11,Dv)])),64))])])]),pe("div",{class:"lg:hidden fixed bottom-6 right-6 z-40"},[pe("button",{onClick:m,class:"bg-indigo-600 text-white p-4 rounded-full shadow-xl hover:bg-indigo-700 transition-colors"},[...b[8]||(b[8]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])])]),l.value?(Qe(),St("div",{key:0,class:"lg:hidden fixed inset-0 w-screen bg-black bg-opacity-50 z-50",style:{height:"100vh"},onClick:m},[pe("div",{class:"absolute right-0 top-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto",style:{height:"100vh"},onClick:b[0]||(b[0]=uo(()=>{},["stop"]))},[pe("div",{class:"sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between"},[b[10]||(b[10]=pe("div",{class:"text-xl font-bold text-slate-700"},"目錄",-1)),pe("button",{onClick:m,class:"p-2 hover:bg-gray-100 rounded-lg transition-colors"},[...b[9]||(b[9]=[pe("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[pe("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])]),pe("ul",Nv,[(Qe(),St(Fe,null,Ni(a,w=>pe("li",{key:w.id},[pe("a",{href:`#${w.id}`,class:ur(["block px-4 py-3 text-gray-600 no-underline rounded-lg transition-all duration-200 hover:bg-slate-100 hover:text-slate-700",{"bg-indigo-100 text-indigo-700 font-medium":s.value===w.id}]),onClick:x=>g(w.id)},Sn(w.title),11,kv)])),64))])])])):so("",!0),pe("main",Mv,[Te(dt(v0),{"expanded-names":d.value,"onUpdate:expandedNames":b[1]||(b[1]=w=>d.value=w),"display-directive":"if","arrow-placement":"right"},{default:En(()=>[(Qe(),St(Fe,null,Ni(a,w=>Te(dt(y0),{key:w.id,name:w.id,id:w.id},{header:En(()=>[pe("div",Lv,[pe("span",Fv,Sn(w.title),1),w.protected&&!n.value?(Qe(),St("span",Bv,"🔒")):so("",!0)])]),default:En(()=>[w.protected&&!n.value?(Qe(),Rn(bv,{key:0,onUnlock:r})):(Qe(),Rn(wf(w.component),{key:1}))]),_:2},1032,["name","id"])),64))]),_:1},8,["expanded-names"])])]),b[11]||(b[11]=pe("footer",{class:"py-8 md:py-10 px-4 text-center text-gray-500 border-t border-gray-200"},[pe("p",{class:"text-sm md:text-base"},"© 2026 RDSS Development Guide")],-1))]))}},Uv=yv(jv,[["__scopeId","data-v-f5ea6b89"]]),zv=[{path:"/",name:"Home",component:Uv}],$v=U1({history:_1("/RdssDevelopeGuide/"),routes:zv}),fu=Vd(k0);fu.use($v);fu.mount("#app");export{Ci as $,yi as A,un as B,Ge as C,sl as D,Dh as E,Fe as F,Hv as G,ed as H,mc as I,Fh as J,Yo as K,jn as L,Sm as M,y0 as N,Ac as O,Zo as P,ym as Q,oi as R,Jh as S,uf as T,zn as U,Zm as V,sp as W,Oc as X,xr as Y,kn as Z,yv as _,Xf as a,fa as a0,xc as a1,$n as a2,Ic as a3,Un as a4,gn as a5,wc as a6,Cc as a7,go as a8,Sc as a9,l0 as aA,Ks as aB,Vv as aC,Zv as aD,_d as aE,Kt as aF,vi as aG,Oh as aH,Qn as aI,Gv as aJ,o0 as aK,Th as aL,Vc as aM,w0 as aN,gc as aO,Ni as aP,Sn as aQ,uo as aR,so as aS,$g as aa,Qh as ab,Jt as ac,Ir as ad,Ve as ae,Se as af,xe as ag,So as ah,Wc as ai,Yv as aj,Qo as ak,Xo as al,Ei as am,qc as an,ze as ao,Si as ap,Jo as aq,Tr as ar,dl as as,vc as at,Ql as au,jt as av,Jv as aw,jh as ax,uc as ay,Kv as az,Te as b,St as c,pe as d,ei as e,v0 as f,Fn as g,zo as h,me as i,qv as j,je as k,po as l,pf as m,mf as n,Qe as o,Ue as p,Yt as q,Oe as r,Go as s,fl as t,dt as u,fh as v,En as w,te as x,Rh as y,Cr as z};
