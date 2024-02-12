import{r as o,m as j,e as ve,j as n}from"./index-3ciV5Osy.js";import{N as He}from"./Navbar-T9n3FTVz.js";var We=Object.defineProperty,Ue=(e,t,r)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ae=(e,t,r)=>(Ue(e,typeof t!="symbol"?t+"":t,r),r);let Ve=class{constructor(){ae(this,"current",this.detect()),ae(this,"handoffState","pending"),ae(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},O=new Ve,C=(e,t)=>{O.isServer?o.useEffect(e,t):o.useLayoutEffect(e,t)};function L(e){let t=o.useRef(e);return C(()=>{t.current=e},[e]),t}let F=function(e){let t=L(e);return j.useCallback((...r)=>t.current(...r),[t])};function Ye(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function H(){let e=[],t={addEventListener(r,a,s,u){return r.addEventListener(a,s,u),t.add(()=>r.removeEventListener(a,s,u))},requestAnimationFrame(...r){let a=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(a))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let a=setTimeout(...r);return t.add(()=>clearTimeout(a))},microTask(...r){let a={current:!0};return Ye(()=>{a.current&&r[0]()}),t.add(()=>{a.current=!1})},style(r,a,s){let u=r.style.getPropertyValue(a);return Object.assign(r.style,{[a]:s}),this.add(()=>{Object.assign(r.style,{[a]:u})})},group(r){let a=H();return r(a),this.add(()=>a.dispose())},add(r){return e.push(r),()=>{let a=e.indexOf(r);if(a>=0)for(let s of e.splice(a,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function Fe(){let[e]=o.useState(H);return o.useEffect(()=>()=>e.dispose(),[e]),e}function ze(){let e=typeof document>"u";return"useSyncExternalStore"in ve?(t=>t.useSyncExternalStore)(ve)(()=>()=>{},()=>!1,()=>!e):!1}function ce(){let e=ze(),[t,r]=o.useState(O.isHandoffComplete);return t&&O.isHandoffComplete===!1&&r(!1),o.useEffect(()=>{t!==!0&&r(!0)},[t]),o.useEffect(()=>O.handoff(),[]),e?!1:t}var we;let Ee=(we=j.useId)!=null?we:function(){let e=ce(),[t,r]=j.useState(e?()=>O.nextId():null);return C(()=>{t===null&&r(O.nextId())},[t]),t!=null?""+t:void 0};function E(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,E),a}function Ge(e){return O.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function je(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ke(e,t){let[r,a]=o.useState(()=>je(e));return C(()=>{a(je(e))},[e.type,e.as]),C(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[r,t]),r}let $e=Symbol();function Je(e,t=!0){return Object.assign(e,{[$e]:t})}function W(...e){let t=o.useRef(e);o.useEffect(()=>{t.current=e},[e]);let r=F(a=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(a):s.current=a)});return e.every(a=>a==null||(a==null?void 0:a[$e]))?void 0:r}function J(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),S=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(S||{});function U({ourProps:e,theirProps:t,slot:r,defaultTag:a,features:s,visible:u=!0,name:f,mergeRefs:p}){p=p??Qe;let l=Pe(t,e);if(u)return K(l,r,a,f,p);let i=s??0;if(i&2){let{static:d=!1,...g}=l;if(d)return K(g,r,a,f,p)}if(i&1){let{unmount:d=!0,...g}=l;return E(d?0:1,{0(){return null},1(){return K({...g,hidden:!0,style:{display:"none"}},r,a,f,p)}})}return K(l,r,a,f,p)}function K(e,t={},r,a,s){let{as:u=r,children:f,refName:p="ref",...l}=oe(e,["unmount","static"]),i=e.ref!==void 0?{[p]:e.ref}:{},d=typeof f=="function"?f(t):f;"className"in l&&l.className&&typeof l.className=="function"&&(l.className=l.className(t));let g={};if(t){let y=!1,b=[];for(let[h,x]of Object.entries(t))typeof x=="boolean"&&(y=!0),x===!0&&b.push(h);y&&(g["data-headlessui-state"]=b.join(" "))}if(u===o.Fragment&&Object.keys(Ne(l)).length>0){if(!o.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(l).map(x=>`  - ${x}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(x=>`  - ${x}`).join(`
`)].join(`
`));let y=d.props,b=typeof(y==null?void 0:y.className)=="function"?(...x)=>J(y==null?void 0:y.className(...x),l.className):J(y==null?void 0:y.className,l.className),h=b?{className:b}:{};return o.cloneElement(d,Object.assign({},Pe(d.props,Ne(oe(l,["ref"]))),g,i,{ref:s(d.ref,i.ref)},h))}return o.createElement(u,Object.assign({},oe(l,["ref"]),u!==o.Fragment&&i,u!==o.Fragment&&g),d)}function Ie(){let e=o.useRef([]),t=o.useCallback(r=>{for(let a of e.current)a!=null&&(typeof a=="function"?a(r):a.current=r)},[]);return(...r)=>{if(!r.every(a=>a==null))return e.current=r,t}}function Qe(...e){return e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}function Pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(a[s])):t[s]=a[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](s,...u){let f=r[a];for(let p of f){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;p(s,...u)}}});return t}function B(e){var t;return Object.assign(o.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Ne(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function oe(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}let ue=o.createContext(null);ue.displayName="OpenClosedContext";var T=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(T||{});function de(){return o.useContext(ue)}function Se({value:e,children:t}){return j.createElement(ue.Provider,{value:e},t)}function Ze(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let a=(t==null?void 0:t.getAttribute("disabled"))==="";return a&&_e(r)?!1:a}function _e(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}var q=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(q||{});function me(){let e=o.useRef(!1);return C(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var ke;let Xe=(ke=j.startTransition)!=null?ke:function(e){e()};var et=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(et||{}),tt=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(tt||{});let nt={0:e=>({...e,disclosureState:E(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},fe=o.createContext(null);fe.displayName="DisclosureContext";function pe(e){let t=o.useContext(fe);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,pe),r}return t}let he=o.createContext(null);he.displayName="DisclosureAPIContext";function Ce(e){let t=o.useContext(he);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ce),r}return t}let xe=o.createContext(null);xe.displayName="DisclosurePanelContext";function rt(){return o.useContext(xe)}function at(e,t){return E(t.type,nt,e,t)}let ot=o.Fragment;function st(e,t){let{defaultOpen:r=!1,...a}=e,s=o.useRef(null),u=W(t,Je(m=>{s.current=m},e.as===void 0||e.as===o.Fragment)),f=o.useRef(null),p=o.useRef(null),l=o.useReducer(at,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:p,panelRef:f,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:d},g]=l,y=F(m=>{g({type:1});let $=Ge(s);if(!$||!d)return;let v=m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:$.getElementById(d):$.getElementById(d);v==null||v.focus()}),b=o.useMemo(()=>({close:y}),[y]),h=o.useMemo(()=>({open:i===0,close:y}),[i,y]),x={ref:u};return j.createElement(fe.Provider,{value:l},j.createElement(he.Provider,{value:b},j.createElement(Se,{value:E(i,{0:T.Open,1:T.Closed})},U({ourProps:x,theirProps:a,slot:h,defaultTag:ot,name:"Disclosure"}))))}let lt="button";function it(e,t){let r=Ee(),{id:a=`headlessui-disclosure-button-${r}`,...s}=e,[u,f]=pe("Disclosure.Button"),p=rt(),l=p===null?!1:p===u.panelId,i=o.useRef(null),d=W(i,t,l?null:u.buttonRef),g=Ie();o.useEffect(()=>{if(!l)return f({type:2,buttonId:a}),()=>{f({type:2,buttonId:null})}},[a,f,l]);let y=F(v=>{var w;if(l){if(u.disclosureState===1)return;switch(v.key){case q.Space:case q.Enter:v.preventDefault(),v.stopPropagation(),f({type:0}),(w=u.buttonRef.current)==null||w.focus();break}}else switch(v.key){case q.Space:case q.Enter:v.preventDefault(),v.stopPropagation(),f({type:0});break}}),b=F(v=>{switch(v.key){case q.Space:v.preventDefault();break}}),h=F(v=>{var w;Ze(v.currentTarget)||e.disabled||(l?(f({type:0}),(w=u.buttonRef.current)==null||w.focus()):f({type:0}))}),x=o.useMemo(()=>({open:u.disclosureState===0}),[u]),m=Ke(e,i),$=l?{ref:d,type:m,onKeyDown:y,onClick:h}:{ref:d,id:a,type:m,"aria-expanded":u.disclosureState===0,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:y,onKeyUp:b,onClick:h};return U({mergeRefs:g,ourProps:$,theirProps:s,slot:x,defaultTag:lt,name:"Disclosure.Button"})}let ct="div",ut=Q.RenderStrategy|Q.Static;function dt(e,t){let r=Ee(),{id:a=`headlessui-disclosure-panel-${r}`,...s}=e,[u,f]=pe("Disclosure.Panel"),{close:p}=Ce("Disclosure.Panel"),l=Ie(),i=W(t,u.panelRef,h=>{Xe(()=>f({type:h?4:5}))});o.useEffect(()=>(f({type:3,panelId:a}),()=>{f({type:3,panelId:null})}),[a,f]);let d=de(),g=d!==null?(d&T.Open)===T.Open:u.disclosureState===0,y=o.useMemo(()=>({open:u.disclosureState===0,close:p}),[u,p]),b={ref:i,id:a};return j.createElement(xe.Provider,{value:u.panelId},U({mergeRefs:l,ourProps:b,theirProps:s,slot:y,defaultTag:ct,features:ut,visible:g,name:"Disclosure.Panel"}))}let mt=B(st),ft=B(it),pt=B(dt),c=Object.assign(mt,{Button:ft,Panel:pt});function ht(e=0){let[t,r]=o.useState(e),a=me(),s=o.useCallback(l=>{a.current&&r(i=>i|l)},[t,a]),u=o.useCallback(l=>!!(t&l),[t]),f=o.useCallback(l=>{a.current&&r(i=>i&~l)},[r,a]),p=o.useCallback(l=>{a.current&&r(i=>i^l)},[r]);return{flags:t,addFlag:s,hasFlag:u,removeFlag:f,toggleFlag:p}}function xt(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function se(e,...t){e&&t.length>0&&e.classList.add(...t)}function le(e,...t){e&&t.length>0&&e.classList.remove(...t)}function yt(e,t){let r=H();if(!e)return r.dispose;let{transitionDuration:a,transitionDelay:s}=getComputedStyle(e),[u,f]=[a,s].map(l=>{let[i=0]=l.split(",").filter(Boolean).map(d=>d.includes("ms")?parseFloat(d):parseFloat(d)*1e3).sort((d,g)=>g-d);return i}),p=u+f;if(p!==0){r.group(i=>{i.setTimeout(()=>{t(),i.dispose()},p),i.addEventListener(e,"transitionrun",d=>{d.target===d.currentTarget&&i.dispose()})});let l=r.addEventListener(e,"transitionend",i=>{i.target===i.currentTarget&&(t(),l())})}else t();return r.add(()=>t()),r.dispose}function bt(e,t,r,a){let s=r?"enter":"leave",u=H(),f=a!==void 0?xt(a):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let p=E(s,{enter:()=>t.enter,leave:()=>t.leave}),l=E(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),i=E(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return le(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),se(e,...t.base,...p,...i),u.nextFrame(()=>{le(e,...t.base,...p,...i),se(e,...t.base,...p,...l),yt(e,()=>(le(e,...t.base,...p),se(e,...t.base,...t.entered),f()))}),u.dispose}function gt({immediate:e,container:t,direction:r,classes:a,onStart:s,onStop:u}){let f=me(),p=Fe(),l=L(r);C(()=>{e&&(l.current="enter")},[e]),C(()=>{let i=H();p.add(i.dispose);let d=t.current;if(d&&l.current!=="idle"&&f.current)return i.dispose(),s.current(l.current),i.add(bt(d,a.current,l.current==="enter",()=>{i.dispose(),u.current(l.current)})),i.dispose},[r])}function P(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Z=o.createContext(null);Z.displayName="TransitionContext";var vt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(vt||{});function wt(){let e=o.useContext(Z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function jt(){let e=o.useContext(_);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let _=o.createContext(null);_.displayName="NestingContext";function X(e){return"children"in e?X(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Re(e,t){let r=L(e),a=o.useRef([]),s=me(),u=Fe(),f=F((b,h=S.Hidden)=>{let x=a.current.findIndex(({el:m})=>m===b);x!==-1&&(E(h,{[S.Unmount](){a.current.splice(x,1)},[S.Hidden](){a.current[x].state="hidden"}}),u.microTask(()=>{var m;!X(a)&&s.current&&((m=r.current)==null||m.call(r))}))}),p=F(b=>{let h=a.current.find(({el:x})=>x===b);return h?h.state!=="visible"&&(h.state="visible"):a.current.push({el:b,state:"visible"}),()=>f(b,S.Unmount)}),l=o.useRef([]),i=o.useRef(Promise.resolve()),d=o.useRef({enter:[],leave:[],idle:[]}),g=F((b,h,x)=>{l.current.splice(0),t&&(t.chains.current[h]=t.chains.current[h].filter(([m])=>m!==b)),t==null||t.chains.current[h].push([b,new Promise(m=>{l.current.push(m)})]),t==null||t.chains.current[h].push([b,new Promise(m=>{Promise.all(d.current[h].map(([$,v])=>v)).then(()=>m())})]),h==="enter"?i.current=i.current.then(()=>t==null?void 0:t.wait.current).then(()=>x(h)):x(h)}),y=F((b,h,x)=>{Promise.all(d.current[h].splice(0).map(([m,$])=>$)).then(()=>{var m;(m=l.current.shift())==null||m()}).then(()=>x(h))});return o.useMemo(()=>({children:a,register:p,unregister:f,onStart:g,onStop:y,wait:i,chains:d}),[p,f,a,g,y,d,i])}function Nt(){}let kt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Te(e){var t;let r={};for(let a of kt)r[a]=(t=e[a])!=null?t:Nt;return r}function Tt(e){let t=o.useRef(Te(e));return o.useEffect(()=>{t.current=Te(e)},[e]),t}let Ft="div",De=Q.RenderStrategy;function Et(e,t){var r,a;let{beforeEnter:s,afterEnter:u,beforeLeave:f,afterLeave:p,enter:l,enterFrom:i,enterTo:d,entered:g,leave:y,leaveFrom:b,leaveTo:h,...x}=e,m=o.useRef(null),$=W(m,t),v=(r=x.unmount)==null||r?S.Unmount:S.Hidden,{show:w,appear:R,initial:ye}=wt(),[D,ee]=o.useState(w?"visible":"hidden"),be=jt(),{register:V,unregister:Y}=be;o.useEffect(()=>V(m),[V,m]),o.useEffect(()=>{if(v===S.Hidden&&m.current){if(w&&D!=="visible"){ee("visible");return}return E(D,{hidden:()=>Y(m),visible:()=>V(m)})}},[D,m,V,Y,w,v]);let te=L({base:P(x.className),enter:P(l),enterFrom:P(i),enterTo:P(d),entered:P(g),leave:P(y),leaveFrom:P(b),leaveTo:P(h)}),z=Tt({beforeEnter:s,afterEnter:u,beforeLeave:f,afterLeave:p}),ne=ce();o.useEffect(()=>{if(ne&&D==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,D,ne]);let Ae=ye&&!R,ge=R&&w&&ye,qe=!ne||Ae?"idle":w?"enter":"leave",M=ht(0),Le=F(I=>E(I,{enter:()=>{M.addFlag(T.Opening),z.current.beforeEnter()},leave:()=>{M.addFlag(T.Closing),z.current.beforeLeave()},idle:()=>{}})),Be=F(I=>E(I,{enter:()=>{M.removeFlag(T.Opening),z.current.afterEnter()},leave:()=>{M.removeFlag(T.Closing),z.current.afterLeave()},idle:()=>{}})),G=Re(()=>{ee("hidden"),Y(m)},be),re=o.useRef(!1);gt({immediate:ge,container:m,classes:te,direction:qe,onStart:L(I=>{re.current=!0,G.onStart(m,I,Le)}),onStop:L(I=>{re.current=!1,G.onStop(m,I,Be),I==="leave"&&!X(G)&&(ee("hidden"),Y(m))})});let A=x,Me={ref:$};return ge?A={...A,className:J(x.className,...te.current.enter,...te.current.enterFrom)}:re.current&&(A.className=J(x.className,(a=m.current)==null?void 0:a.className),A.className===""&&delete A.className),j.createElement(_.Provider,{value:G},j.createElement(Se,{value:E(D,{visible:T.Open,hidden:T.Closed})|M.flags},U({ourProps:Me,theirProps:A,defaultTag:Ft,features:De,visible:D==="visible",name:"Transition.Child"})))}function $t(e,t){let{show:r,appear:a=!1,unmount:s=!0,...u}=e,f=o.useRef(null),p=W(f,t);ce();let l=de();if(r===void 0&&l!==null&&(r=(l&T.Open)===T.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[i,d]=o.useState(r?"visible":"hidden"),g=Re(()=>{d("hidden")}),[y,b]=o.useState(!0),h=o.useRef([r]);C(()=>{y!==!1&&h.current[h.current.length-1]!==r&&(h.current.push(r),b(!1))},[h,r]);let x=o.useMemo(()=>({show:r,appear:a,initial:y}),[r,a,y]);o.useEffect(()=>{if(r)d("visible");else if(!X(g))d("hidden");else{let w=f.current;if(!w)return;let R=w.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&d("hidden")}},[r,g]);let m={unmount:s},$=F(()=>{var w;y&&b(!1),(w=e.beforeEnter)==null||w.call(e)}),v=F(()=>{var w;y&&b(!1),(w=e.beforeLeave)==null||w.call(e)});return j.createElement(_.Provider,{value:g},j.createElement(Z.Provider,{value:x},U({ourProps:{...m,as:o.Fragment,children:j.createElement(Oe,{ref:p,...m,...u,beforeEnter:$,beforeLeave:v})},theirProps:{},defaultTag:o.Fragment,features:De,visible:i==="visible",name:"Transition"})))}function It(e,t){let r=o.useContext(Z)!==null,a=de()!==null;return j.createElement(j.Fragment,null,!r&&a?j.createElement(ie,{ref:t,...e}):j.createElement(Oe,{ref:t,...e}))}let ie=B($t),Oe=B(Et),Pt=B(It),N=Object.assign(ie,{Child:Pt,Root:ie});function St({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"}))}const Ct=o.forwardRef(St),k=Ct;function Rt(){return n.jsx("div",{className:"w-full md:px-20 pt-[145px] pb-[120px]",children:n.jsxs("div",{className:"mx-auto w-full  rounded-2xl bg-white p-2",children:[n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is an Appraisal?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Appraisal documents may be necessary when insuring your belongings against loss, theft, or damage, or during legal proceedings following the event of a divorce, annulment, or death. In addition, federal law requires appraisals by “qualified appraisers” on certain charitable contributions to qualifying non-profit institutions. Additionally, many clients choose to request an appraisal is to protect their assets and interests when contemplating the sale of their belongings or the acquisition of new items for their collections."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Why might I need an appraisal?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Appraisal documents may be necessary when insuring your belongings against loss, theft, or damage, or during legal proceedings following the event of a divorce, annulment, or death. In addition, federal law requires appraisals by “qualified appraisers” on certain charitable contributions to qualifying non-profit institutions. Additionally, many clients choose to request an appraisal is to protect their assets and interests when contemplating the sale of their belongings or the acquisition of new items for their collections."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What makes your appraisals better than other appraisers?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"I provide higher quality appraisals, service, and overall experience. I do the appraisal work white you sit with me and watch the process. I am one of the few gemologists anywhere that have the GIA iD 100 Spectrometer that can distinguish between a natural-mined diamond and a manmade diamond or the rare type IIa diamond. With my machine, I don’t need to remove the diamond from the setting and send it off to the GIA for testing. Appointments with me take about 45 minutes."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"How long does the appraisal process takes?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Each appointment takes 30 to 45 minutes for me to take my notes and pictures of your item while you wait and watch. Your official written appraisal will be ready in 5 to 7 business days. I email your appraisal to you and then put your original paper appraisal in the mail to your address. You always leave our appointment with your jewellery and I use my notes and pictures to make your appraisal."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What method of payment do you offer?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Payment is made by company check or wire transfer."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Once I give you my jewelry, how long does it takes to receive payment?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Once we have examined the jewelry and a price has been accepted, payment will be made immediately."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What kind of documents do I need?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Your GIA or other certificates if you have it and a form of identification. We will also ask you to sign a document confirming that you are the owner of the item."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Would your company un-mount my diamonds for me, or do I have to un-mount them myself?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"If necessary, our company may un-mount the diamonds for you, but only with your permission."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"When I bring my jewelry, will it be examined in front of me?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Jewellery is always examined in your presence."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Do I need to make an appointment, or do I just walk in?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsxs(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-pink-900",children:["We highly encourage making an appointment prior to coming in:",n.jsx("a",{href:"mailto:fawasrufai09@gmail.com",children:"fawasrufai09@gmail.com"})," ","however we do accept walk-ins."]})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Do I need to come in or can I email or fax over a picture of the jewelry I want to sell?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"You may send us an email or a fax, but if we are interested, the piece must be examined in person to ensure you are offered the best price."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"How do we determine the value? "})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:n.jsxs("ul",{className:"ml-7",children:[n.jsx("li",{className:"list-disc",children:"INTRINSIC VALUE: Diamonds, colored gemstones and precious metals have value based on the size, quality and rarity of the gems and the weight and purity of the gold or platinum. Intrinsic value generally represents the minimum a piece is worth and we generally pay much, much more."}),n.jsx("li",{className:"list-disc",children:"CRAFTSMANSHIP AND DESIGN Jewelry from the past is executed with many techniques, usually hand fabricated, with great attention to detail. The more unique and intricate the design the higher the value."}),n.jsx("li",{className:"list-disc",children:"DESIRABILITY Signed jewelry, fine colored stone rings, exquisite examples of period jewelry and larger antique and estate diamond engagement rings are highly prized today. As always, ever changing fashion trends influence the demand for certain periods, materials and gemstones.."}),n.jsx("li",{className:"list-disc",children:"RARITY: Most high-quality antique, vintage and estate jewels are one-of-a-kind. In addition to being individually hand crafted, some antique and estate jewels are made by famous jewelers such as Cartier, Tiffany, Van Cleef & Arpels and many others. We happily pay a large premium for fine signed pieces.Often rarity and collectability is predicated solely on the unique character of the piece."}),n.jsx("li",{className:"list-disc",children:"LARGE DIAMONDS AND GEMS: If large diamonds and gemstones are highlighted in a fine piece of jewelry they make it even more rare and valuable."}),n.jsx("li",{className:"list-disc",children:"CONDITION: We expect to see some signs of wear on antique and estate jewelry. Jewelry in pristine original condition is rare and commands a premium. Jewelry with apparent alterations, repairs and restoration can be devalued."})]})})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What types of jewelry do we buy?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"We specialize in Fine antique, estate, and signed jewelry, large diamonds and gemstones, watches, and precious metals. We also purchase other fine antiques, paintings, and furniture. We do not purchase costume jewelry."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"I'm not sure if I want to sell my jewelry, can I come in for a Consultation?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Yes, you may make an appointment for a consultation. Verbal appraisals are free, but written appraisals are subject to a fee."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is the process that takes place once I decide I want to sell the jewelry to your company?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Upon arriving at our offices, you the seller will be shown to a private consultation room, where you will meet a member of our team in complete confidentiality. The item, be it a piece of jewellery, a diamond, or coloured stone, will be examined with a variety of gemological instruments. If we are interested in purchasing the piece or stone, we will make you an offer, and if you accept, payment will be made immediately via company check or wire transfer. If we do not wish to purchase the item or believe we are not the best avenue for you, we will try to direct you to the next best avenue."})})]})}),n.jsx(c,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(c.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(k,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is the Difference Between Fair Market Value and Marketable Cash Value?"})]}),n.jsx(N,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(c.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:n.jsxs("div",{className:"faq-body",children:[n.jsxs("p",{className:"",children:[n.jsx("strong",{children:n.jsx("em",{children:"Fair Market Value:"})})," If you are a willing seller and selling your jewelry by yourself and not paying any commissions, advertising costs, etc. then the money you sell it for is called the Fair Market Value."]}),n.jsxs("p",{className:"",children:[n.jsx("strong",{children:n.jsx("em",{children:"Marketable Cash Value:"})})," If you need help selling the jewelry items you would then be paying a commission or fee to someone who has experience and contacts in selling the types of jewelry you have for sale. Your take home price is the selling price less any commission and advertising fees that have been incurred."]})]})})})]})})]})})}const qt=()=>n.jsxs(n.Fragment,{children:[n.jsx(He,{}),n.jsxs("div",{children:[n.jsxs("div",{className:"block bg-[url('/back.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 pt-64 pb-60",children:[n.jsx("div",{className:" bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"}),n.jsx("div",{className:"text left-0 right-0 top-[50%] sm:top-[38%] com:top-[50px] mcom:top-[195px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 com:text-[300px] absolute font-bold fill-transparent stroke-1 mcom:text-[150px] tab:text-[100px] sm:text-[70px]",children:"Faqs"}),n.jsx("div",{className:"w-full px-4 mx-auto",children:n.jsx("h1",{className:"text-white mcom:text-[120px] text-[90px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]",children:"Faqs"})})]}),n.jsx(Rt,{})]})]});export{qt as default};
