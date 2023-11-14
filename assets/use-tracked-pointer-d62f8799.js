import{r as s}from"./index-39946eba.js";import{a as v,l as y,o as b}from"./keyboard-0ca52a30.js";import{t as w,h as x,T as A}from"./hidden-cb730d23.js";function R(e,n){let[t,r]=s.useState(e),o=v(e);return y(()=>r(o.current),[o,r,...n]),t}function p(){let e=[],n={addEventListener(t,r,o,i){return t.addEventListener(r,o,i),n.add(()=>t.removeEventListener(r,o,i))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return w(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let i=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:i})})},group(t){let r=p();return t(r),this.add(()=>r.dispose())},add(t){return e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function D(){let[e]=s.useState(p);return s.useEffect(()=>()=>e.dispose(),[e]),e}function m(e,n,t){let r=v(n);s.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,t),()=>document.removeEventListener(e,o,t)},[e,t])}function L(e,n,t){let r=v(n);s.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,t),()=>window.removeEventListener(e,o,t)},[e,t])}function q(e,n,t=!0){let r=s.useRef(!1);s.useEffect(()=>{requestAnimationFrame(()=>{r.current=t})},[t]);function o(u,l){if(!r.current||u.defaultPrevented)return;let c=l(u);if(c===null||!c.getRootNode().contains(c)||!c.isConnected)return;let d=function f(a){return typeof a=="function"?f(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let f of d){if(f===null)continue;let a=f instanceof HTMLElement?f:f.current;if(a!=null&&a.contains(c)||u.composed&&u.composedPath().includes(a))return}return!x(c,A.Loose)&&c.tabIndex!==-1&&u.preventDefault(),n(u,c)}let i=s.useRef(null);m("pointerdown",u=>{var l,c;r.current&&(i.current=((c=(l=u.composedPath)==null?void 0:l.call(u))==null?void 0:c[0])||u.target)},!0),m("mousedown",u=>{var l,c;r.current&&(i.current=((c=(l=u.composedPath)==null?void 0:l.call(u))==null?void 0:c[0])||u.target)},!0),m("click",u=>{i.current&&(o(u,()=>i.current),i.current=null)},!0),m("touchend",u=>o(u,()=>u.target instanceof HTMLElement?u.target:null),!0),L("blur",u=>o(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function T(e){throw new Error("Unexpected object: "+e)}var I=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(I||{});function N(e,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),o=r??-1,i=(()=>{switch(e.focus){case 0:return t.findIndex(u=>!n.resolveDisabled(u));case 1:{let u=t.slice().reverse().findIndex((l,c,d)=>o!==-1&&d.length-c-1>=o?!1:!n.resolveDisabled(l));return u===-1?u:t.length-1-u}case 2:return t.findIndex((u,l)=>l<=o?!1:!n.resolveDisabled(u));case 3:{let u=t.slice().reverse().findIndex(l=>!n.resolveDisabled(l));return u===-1?u:t.length-1-u}case 4:return t.findIndex(u=>n.resolveId(u)===e.id);case 5:return null;default:T(e)}})();return i===-1?r:i}function F(e={},n=null,t=[]){for(let[r,o]of Object.entries(e))E(t,g(n,r),o);return t}function g(e,n){return e?e+"["+n+"]":n}function E(e,n,t){if(Array.isArray(t))for(let[r,o]of t.entries())E(e,g(n,r.toString()),o);else t instanceof Date?e.push([n,t.toISOString()]):typeof t=="boolean"?e.push([n,t?"1":"0"]):typeof t=="string"?e.push([n,t]):typeof t=="number"?e.push([n,`${t}`]):t==null?e.push([n,""]):F(t,n,e)}function O(e,n,t){let[r,o]=s.useState(t),i=e!==void 0,u=s.useRef(i),l=s.useRef(!1),c=s.useRef(!1);return i&&!u.current&&!l.current?(l.current=!0,u.current=i,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!i&&u.current&&!c.current&&(c.current=!0,u.current=i,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[i?e:r,b(d=>(i||o(d),n==null?void 0:n(d)))]}function h(e){return[e.screenX,e.screenY]}function j(){let e=s.useRef([-1,-1]);return{wasMoved(n){let t=h(n);return e.current[0]===t[0]&&e.current[1]===t[1]?!1:(e.current=t,!0)},update(n){e.current=h(n)}}}export{O as T,I as a,F as e,q as h,R as i,p as o,D as p,j as u,N as x};
//# sourceMappingURL=use-tracked-pointer-d62f8799.js.map