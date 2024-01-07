import{r as o,m as w,e as ge,j as n}from"./index-X7_WWE6-.js";var Be=Object.defineProperty,Me=(e,t,r)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,re=(e,t,r)=>(Me(e,typeof t!="symbol"?t+"":t,r),r);let He=class{constructor(){re(this,"current",this.detect()),re(this,"handoffState","pending"),re(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},R=new He,C=(e,t)=>{R.isServer?o.useEffect(e,t):o.useLayoutEffect(e,t)};function L(e){let t=o.useRef(e);return C(()=>{t.current=e},[e]),t}function We(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function H(){let e=[],t={addEventListener(r,a,s,u){return r.addEventListener(a,s,u),t.add(()=>r.removeEventListener(a,s,u))},requestAnimationFrame(...r){let a=requestAnimationFrame(...r);return t.add(()=>cancelAnimationFrame(a))},nextFrame(...r){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...r))},setTimeout(...r){let a=setTimeout(...r);return t.add(()=>clearTimeout(a))},microTask(...r){let a={current:!0};return We(()=>{a.current&&r[0]()}),t.add(()=>{a.current=!1})},style(r,a,s){let u=r.style.getPropertyValue(a);return Object.assign(r.style,{[a]:s}),this.add(()=>{Object.assign(r.style,{[a]:u})})},group(r){let a=H();return r(a),this.add(()=>a.dispose())},add(r){return e.push(r),()=>{let a=e.indexOf(r);if(a>=0)for(let s of e.splice(a,1))s()}},dispose(){for(let r of e.splice(0))r()}};return t}function Te(){let[e]=o.useState(H);return o.useEffect(()=>()=>e.dispose(),[e]),e}let E=function(e){let t=L(e);return w.useCallback((...r)=>t.current(...r),[t])};function Ue(){let e=typeof document>"u";return"useSyncExternalStore"in ge?(t=>t.useSyncExternalStore)(ge)(()=>()=>{},()=>!1,()=>!e):!1}function ie(){let e=Ue(),[t,r]=o.useState(R.isHandoffComplete);return t&&R.isHandoffComplete===!1&&r(!1),o.useEffect(()=>{t!==!0&&r(!0)},[t]),o.useEffect(()=>R.handoff(),[]),e?!1:t}var ve;let Fe=(ve=w.useId)!=null?ve:function(){let e=ie(),[t,r]=w.useState(e?()=>R.nextId():null);return C(()=>{t===null&&r(R.nextId())},[t]),t!=null?""+t:void 0};function $(e,t,...r){if(e in t){let s=t[e];return typeof s=="function"?s(...r):s}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(s=>`"${s}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,$),a}function Ve(e){return R.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function we(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Ye(e,t){let[r,a]=o.useState(()=>we(e));return C(()=>{a(we(e))},[e.type,e.as]),C(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[r,t]),r}let Ee=Symbol();function ze(e,t=!0){return Object.assign(e,{[Ee]:t})}function W(...e){let t=o.useRef(e);o.useEffect(()=>{t.current=e},[e]);let r=E(a=>{for(let s of t.current)s!=null&&(typeof s=="function"?s(a):s.current=a)});return e.every(a=>a==null||(a==null?void 0:a[Ee]))?void 0:r}function K(...e){return Array.from(new Set(e.flatMap(t=>typeof t=="string"?t.split(" "):[]))).filter(Boolean).join(" ")}var Q=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(Q||{}),P=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(P||{});function U({ourProps:e,theirProps:t,slot:r,defaultTag:a,features:s,visible:u=!0,name:f}){let d=$e(t,e);if(u)return J(d,r,a,f);let c=s??0;if(c&2){let{static:l=!1,...p}=d;if(l)return J(p,r,a,f)}if(c&1){let{unmount:l=!0,...p}=d;return $(l?0:1,{0(){return null},1(){return J({...p,hidden:!0,style:{display:"none"}},r,a,f)}})}return J(d,r,a,f)}function J(e,t={},r,a){let{as:s=r,children:u,refName:f="ref",...d}=ae(e,["unmount","static"]),c=e.ref!==void 0?{[f]:e.ref}:{},l=typeof u=="function"?u(t):u;"className"in d&&d.className&&typeof d.className=="function"&&(d.className=d.className(t));let p={};if(t){let x=!1,b=[];for(let[y,h]of Object.entries(t))typeof h=="boolean"&&(x=!0),h===!0&&b.push(y);x&&(p["data-headlessui-state"]=b.join(" "))}if(s===o.Fragment&&Object.keys(je(d)).length>0){if(!o.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(d).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let x=l.props,b=typeof(x==null?void 0:x.className)=="function"?(...h)=>K(x==null?void 0:x.className(...h),d.className):K(x==null?void 0:x.className,d.className),y=b?{className:b}:{};return o.cloneElement(l,Object.assign({},$e(l.props,je(ae(d,["ref"]))),p,c,Ge(l.ref,c.ref),y))}return o.createElement(s,Object.assign({},ae(d,["ref"]),s!==o.Fragment&&c,s!==o.Fragment&&p),l)}function Ge(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let r of e)r!=null&&(typeof r=="function"?r(t):r.current=t)}}}function $e(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let s in a)s.startsWith("on")&&typeof a[s]=="function"?(r[s]!=null||(r[s]=[]),r[s].push(a[s])):t[s]=a[s];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](s,...u){let f=r[a];for(let d of f){if((s instanceof Event||(s==null?void 0:s.nativeEvent)instanceof Event)&&s.defaultPrevented)return;d(s,...u)}}});return t}function B(e){var t;return Object.assign(o.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function je(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function ae(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function Je(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let a=(t==null?void 0:t.getAttribute("disabled"))==="";return a&&Ke(r)?!1:a}function Ke(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ce=o.createContext(null);ce.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function ue(){return o.useContext(ce)}function Ie({value:e,children:t}){return w.createElement(ce.Provider,{value:e},t)}var q=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(q||{});function de(){let e=o.useRef(!1);return C(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var Ne;let Qe=(Ne=w.startTransition)!=null?Ne:function(e){e()};var Ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ze||{}),Xe=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Xe||{});let _e={0:e=>({...e,disclosureState:$(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},me=o.createContext(null);me.displayName="DisclosureContext";function fe(e){let t=o.useContext(me);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,fe),r}return t}let pe=o.createContext(null);pe.displayName="DisclosureAPIContext";function Se(e){let t=o.useContext(pe);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Se),r}return t}let he=o.createContext(null);he.displayName="DisclosurePanelContext";function et(){return o.useContext(he)}function tt(e,t){return $(t.type,_e,e,t)}let nt=o.Fragment;function rt(e,t){let{defaultOpen:r=!1,...a}=e,s=o.useRef(null),u=W(t,ze(m=>{s.current=m},e.as===void 0||e.as===o.Fragment)),f=o.useRef(null),d=o.useRef(null),c=o.useReducer(tt,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:d,panelRef:f,buttonId:null,panelId:null}),[{disclosureState:l,buttonId:p},x]=c,b=E(m=>{x({type:1});let v=Ve(s);if(!v||!p)return;let k=m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:v.getElementById(p):v.getElementById(p);k==null||k.focus()}),y=o.useMemo(()=>({close:b}),[b]),h=o.useMemo(()=>({open:l===0,close:b}),[l,b]),g={ref:u};return w.createElement(me.Provider,{value:c},w.createElement(pe.Provider,{value:y},w.createElement(Ie,{value:$(l,{0:F.Open,1:F.Closed})},U({ourProps:g,theirProps:a,slot:h,defaultTag:nt,name:"Disclosure"}))))}let at="button";function ot(e,t){let r=Fe(),{id:a=`headlessui-disclosure-button-${r}`,...s}=e,[u,f]=fe("Disclosure.Button"),d=et(),c=d===null?!1:d===u.panelId,l=o.useRef(null),p=W(l,t,c?null:u.buttonRef);o.useEffect(()=>{if(!c)return f({type:2,buttonId:a}),()=>{f({type:2,buttonId:null})}},[a,f,c]);let x=E(v=>{var k;if(c){if(u.disclosureState===1)return;switch(v.key){case q.Space:case q.Enter:v.preventDefault(),v.stopPropagation(),f({type:0}),(k=u.buttonRef.current)==null||k.focus();break}}else switch(v.key){case q.Space:case q.Enter:v.preventDefault(),v.stopPropagation(),f({type:0});break}}),b=E(v=>{switch(v.key){case q.Space:v.preventDefault();break}}),y=E(v=>{var k;Je(v.currentTarget)||e.disabled||(c?(f({type:0}),(k=u.buttonRef.current)==null||k.focus()):f({type:0}))}),h=o.useMemo(()=>({open:u.disclosureState===0}),[u]),g=Ye(e,l),m=c?{ref:p,type:g,onKeyDown:x,onClick:y}:{ref:p,id:a,type:g,"aria-expanded":u.disclosureState===0,"aria-controls":u.linkedPanel?u.panelId:void 0,onKeyDown:x,onKeyUp:b,onClick:y};return U({ourProps:m,theirProps:s,slot:h,defaultTag:at,name:"Disclosure.Button"})}let st="div",lt=Q.RenderStrategy|Q.Static;function it(e,t){let r=Fe(),{id:a=`headlessui-disclosure-panel-${r}`,...s}=e,[u,f]=fe("Disclosure.Panel"),{close:d}=Se("Disclosure.Panel"),c=W(t,u.panelRef,y=>{Qe(()=>f({type:y?4:5}))});o.useEffect(()=>(f({type:3,panelId:a}),()=>{f({type:3,panelId:null})}),[a,f]);let l=ue(),p=l!==null?(l&F.Open)===F.Open:u.disclosureState===0,x=o.useMemo(()=>({open:u.disclosureState===0,close:d}),[u,d]),b={ref:c,id:a};return w.createElement(he.Provider,{value:u.panelId},U({ourProps:b,theirProps:s,slot:x,defaultTag:st,features:lt,visible:p,name:"Disclosure.Panel"}))}let ct=B(rt),ut=B(ot),dt=B(it),i=Object.assign(ct,{Button:ut,Panel:dt});function mt(e=0){let[t,r]=o.useState(e),a=de(),s=o.useCallback(c=>{a.current&&r(l=>l|c)},[t,a]),u=o.useCallback(c=>!!(t&c),[t]),f=o.useCallback(c=>{a.current&&r(l=>l&~c)},[r,a]),d=o.useCallback(c=>{a.current&&r(l=>l^c)},[r]);return{flags:t,addFlag:s,hasFlag:u,removeFlag:f,toggleFlag:d}}function ft(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function oe(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}function pt(e,t){let r=H();if(!e)return r.dispose;let{transitionDuration:a,transitionDelay:s}=getComputedStyle(e),[u,f]=[a,s].map(c=>{let[l=0]=c.split(",").filter(Boolean).map(p=>p.includes("ms")?parseFloat(p):parseFloat(p)*1e3).sort((p,x)=>x-p);return l}),d=u+f;if(d!==0){r.group(l=>{l.setTimeout(()=>{t(),l.dispose()},d),l.addEventListener(e,"transitionrun",p=>{p.target===p.currentTarget&&l.dispose()})});let c=r.addEventListener(e,"transitionend",l=>{l.target===l.currentTarget&&(t(),c())})}else t();return r.add(()=>t()),r.dispose}function ht(e,t,r,a){let s=r?"enter":"leave",u=H(),f=a!==void 0?ft(a):()=>{};s==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let d=$(s,{enter:()=>t.enter,leave:()=>t.leave}),c=$(s,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=$(s,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return se(e,...t.base,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),oe(e,...t.base,...d,...l),u.nextFrame(()=>{se(e,...t.base,...d,...l),oe(e,...t.base,...d,...c),pt(e,()=>(se(e,...t.base,...d),oe(e,...t.base,...t.entered),f()))}),u.dispose}function xt({immediate:e,container:t,direction:r,classes:a,onStart:s,onStop:u}){let f=de(),d=Te(),c=L(r);C(()=>{e&&(c.current="enter")},[e]),C(()=>{let l=H();d.add(l.dispose);let p=t.current;if(p&&c.current!=="idle"&&f.current)return l.dispose(),s.current(c.current),l.add(ht(p,a.current,c.current==="enter",()=>{l.dispose(),u.current(c.current)})),l.dispose},[r])}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let Z=o.createContext(null);Z.displayName="TransitionContext";var yt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(yt||{});function bt(){let e=o.useContext(Z);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function gt(){let e=o.useContext(X);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let X=o.createContext(null);X.displayName="NestingContext";function _(e){return"children"in e?_(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Pe(e,t){let r=L(e),a=o.useRef([]),s=de(),u=Te(),f=E((y,h=P.Hidden)=>{let g=a.current.findIndex(({el:m})=>m===y);g!==-1&&($(h,{[P.Unmount](){a.current.splice(g,1)},[P.Hidden](){a.current[g].state="hidden"}}),u.microTask(()=>{var m;!_(a)&&s.current&&((m=r.current)==null||m.call(r))}))}),d=E(y=>{let h=a.current.find(({el:g})=>g===y);return h?h.state!=="visible"&&(h.state="visible"):a.current.push({el:y,state:"visible"}),()=>f(y,P.Unmount)}),c=o.useRef([]),l=o.useRef(Promise.resolve()),p=o.useRef({enter:[],leave:[],idle:[]}),x=E((y,h,g)=>{c.current.splice(0),t&&(t.chains.current[h]=t.chains.current[h].filter(([m])=>m!==y)),t==null||t.chains.current[h].push([y,new Promise(m=>{c.current.push(m)})]),t==null||t.chains.current[h].push([y,new Promise(m=>{Promise.all(p.current[h].map(([v,k])=>k)).then(()=>m())})]),h==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(h)):g(h)}),b=E((y,h,g)=>{Promise.all(p.current[h].splice(0).map(([m,v])=>v)).then(()=>{var m;(m=c.current.shift())==null||m()}).then(()=>g(h))});return o.useMemo(()=>({children:a,register:d,unregister:f,onStart:x,onStop:b,wait:l,chains:p}),[d,f,a,x,b,p,l])}function vt(){}let wt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ke(e){var t;let r={};for(let a of wt)r[a]=(t=e[a])!=null?t:vt;return r}function jt(e){let t=o.useRef(ke(e));return o.useEffect(()=>{t.current=ke(e)},[e]),t}let Nt="div",Ce=Q.RenderStrategy;function kt(e,t){var r,a;let{beforeEnter:s,afterEnter:u,beforeLeave:f,afterLeave:d,enter:c,enterFrom:l,enterTo:p,entered:x,leave:b,leaveFrom:y,leaveTo:h,...g}=e,m=o.useRef(null),v=W(m,t),k=(r=g.unmount)==null||r?P.Unmount:P.Hidden,{show:T,appear:D,initial:xe}=bt(),[O,ee]=o.useState(T?"visible":"hidden"),ye=gt(),{register:V,unregister:Y}=ye;o.useEffect(()=>V(m),[V,m]),o.useEffect(()=>{if(k===P.Hidden&&m.current){if(T&&O!=="visible"){ee("visible");return}return $(O,{hidden:()=>Y(m),visible:()=>V(m)})}},[O,m,V,Y,T,k]);let te=L({base:S(g.className),enter:S(c),enterFrom:S(l),enterTo:S(p),entered:S(x),leave:S(b),leaveFrom:S(y),leaveTo:S(h)}),z=jt({beforeEnter:s,afterEnter:u,beforeLeave:f,afterLeave:d}),ne=ie();o.useEffect(()=>{if(ne&&O==="visible"&&m.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[m,O,ne]);let Oe=xe&&!D,be=D&&T&&xe,Re=!ne||Oe?"idle":T?"enter":"leave",M=mt(0),Ae=E(I=>$(I,{enter:()=>{M.addFlag(F.Opening),z.current.beforeEnter()},leave:()=>{M.addFlag(F.Closing),z.current.beforeLeave()},idle:()=>{}})),qe=E(I=>$(I,{enter:()=>{M.removeFlag(F.Opening),z.current.afterEnter()},leave:()=>{M.removeFlag(F.Closing),z.current.afterLeave()},idle:()=>{}})),G=Pe(()=>{ee("hidden"),Y(m)},ye);xt({immediate:be,container:m,classes:te,direction:Re,onStart:L(I=>{G.onStart(m,I,Ae)}),onStop:L(I=>{G.onStop(m,I,qe),I==="leave"&&!_(G)&&(ee("hidden"),Y(m))})});let A=g,Le={ref:v};return be?A={...A,className:K(g.className,...te.current.enter,...te.current.enterFrom)}:(A.className=K(g.className,(a=m.current)==null?void 0:a.className),A.className===""&&delete A.className),w.createElement(X.Provider,{value:G},w.createElement(Ie,{value:$(O,{visible:F.Open,hidden:F.Closed})|M.flags},U({ourProps:Le,theirProps:A,defaultTag:Nt,features:Ce,visible:O==="visible",name:"Transition.Child"})))}function Tt(e,t){let{show:r,appear:a=!1,unmount:s=!0,...u}=e,f=o.useRef(null),d=W(f,t);ie();let c=ue();if(r===void 0&&c!==null&&(r=(c&F.Open)===F.Open),![!0,!1].includes(r))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,p]=o.useState(r?"visible":"hidden"),x=Pe(()=>{p("hidden")}),[b,y]=o.useState(!0),h=o.useRef([r]);C(()=>{b!==!1&&h.current[h.current.length-1]!==r&&(h.current.push(r),y(!1))},[h,r]);let g=o.useMemo(()=>({show:r,appear:a,initial:b}),[r,a,b]);o.useEffect(()=>{if(r)p("visible");else if(!_(x))p("hidden");else{let T=f.current;if(!T)return;let D=T.getBoundingClientRect();D.x===0&&D.y===0&&D.width===0&&D.height===0&&p("hidden")}},[r,x]);let m={unmount:s},v=E(()=>{var T;b&&y(!1),(T=e.beforeEnter)==null||T.call(e)}),k=E(()=>{var T;b&&y(!1),(T=e.beforeLeave)==null||T.call(e)});return w.createElement(X.Provider,{value:x},w.createElement(Z.Provider,{value:g},U({ourProps:{...m,as:o.Fragment,children:w.createElement(De,{ref:d,...m,...u,beforeEnter:v,beforeLeave:k})},theirProps:{},defaultTag:o.Fragment,features:Ce,visible:l==="visible",name:"Transition"})))}function Ft(e,t){let r=o.useContext(Z)!==null,a=ue()!==null;return w.createElement(w.Fragment,null,!r&&a?w.createElement(le,{ref:t,...e}):w.createElement(De,{ref:t,...e}))}let le=B(Tt),De=B(kt),Et=B(Ft),j=Object.assign(le,{Child:Et,Root:le});function $t({title:e,titleId:t,...r},a){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},r),e?o.createElement("title",{id:t},e):null,o.createElement("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"}))}const It=o.forwardRef($t),N=It;function St(){return n.jsx("div",{className:"w-full md:px-20 pt-[145px] pb-[120px]",children:n.jsxs("div",{className:"mx-auto w-full  rounded-2xl bg-white p-2",children:[n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is an Appraisal?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Appraisal documents may be necessary when insuring your belongings against loss, theft, or damage, or during legal proceedings following the event of a divorce, annulment, or death. In addition, federal law requires appraisals by “qualified appraisers” on certain charitable contributions to qualifying non-profit institutions. Additionally, many clients choose to request an appraisal is to protect their assets and interests when contemplating the sale of their belongings or the acquisition of new items for their collections."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Why might I need an appraisal?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Appraisal documents may be necessary when insuring your belongings against loss, theft, or damage, or during legal proceedings following the event of a divorce, annulment, or death. In addition, federal law requires appraisals by “qualified appraisers” on certain charitable contributions to qualifying non-profit institutions. Additionally, many clients choose to request an appraisal is to protect their assets and interests when contemplating the sale of their belongings or the acquisition of new items for their collections."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What makes your appraisals better than other appraisers?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"I provide higher quality appraisals, service, and overall experience. I do the appraisal work white you sit with me and watch the process. I am one of the few gemologists anywhere that have the GIA iD 100 Spectrometer that can distinguish between a natural-mined diamond and a manmade diamond or the rare type IIa diamond. With my machine, I don’t need to remove the diamond from the setting and send it off to the GIA for testing. Appointments with me take about 45 minutes."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"How long does the appraisal process takes?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Each appointment takes 30 to 45 minutes for me to take my notes and pictures of your item while you wait and watch. Your official written appraisal will be ready in 5 to 7 business days. I email your appraisal to you and then put your original paper appraisal in the mail to your address. You always leave our appointment with your jewellery and I use my notes and pictures to make your appraisal."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What method of payment do you offer?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Payment is made by company check or wire transfer."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Once I give you my jewelry, how long does it takes to receive payment?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Once we have examined the jewelry and a price has been accepted, payment will be made immediately."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What kind of documents do I need?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Your GIA or other certificates if you have it and a form of identification. We will also ask you to sign a document confirming that you are the owner of the item."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Would your company un-mount my diamonds for me, or do I have to un-mount them myself?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"If necessary, our company may un-mount the diamonds for you, but only with your permission."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"When I bring my jewelry, will it be examined in front of me?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Jewellery is always examined in your presence."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Do I need to make an appointment, or do I just walk in?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsxs(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-pink-900",children:["We highly encourage making an appointment prior to coming in:",n.jsx("a",{href:"mailto:fawasrufai09@gmail.com",children:"fawasrufai09@gmail.com"})," ","however we do accept walk-ins."]})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"Do I need to come in or can I email or fax over a picture of the jewelry I want to sell?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"You may send us an email or a fax, but if we are interested, the piece must be examined in person to ensure you are offered the best price."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"How do we determine the value? "})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:n.jsxs("ul",{className:"ml-7",children:[n.jsx("li",{className:"list-disc",children:"INTRINSIC VALUE: Diamonds, colored gemstones and precious metals have value based on the size, quality and rarity of the gems and the weight and purity of the gold or platinum. Intrinsic value generally represents the minimum a piece is worth and we generally pay much, much more."}),n.jsx("li",{className:"list-disc",children:"CRAFTSMANSHIP AND DESIGN Jewelry from the past is executed with many techniques, usually hand fabricated, with great attention to detail. The more unique and intricate the design the higher the value."}),n.jsx("li",{className:"list-disc",children:"DESIRABILITY Signed jewelry, fine colored stone rings, exquisite examples of period jewelry and larger antique and estate diamond engagement rings are highly prized today. As always, ever changing fashion trends influence the demand for certain periods, materials and gemstones.."}),n.jsx("li",{className:"list-disc",children:"RARITY: Most high-quality antique, vintage and estate jewels are one-of-a-kind. In addition to being individually hand crafted, some antique and estate jewels are made by famous jewelers such as Cartier, Tiffany, Van Cleef & Arpels and many others. We happily pay a large premium for fine signed pieces.Often rarity and collectability is predicated solely on the unique character of the piece."}),n.jsx("li",{className:"list-disc",children:"LARGE DIAMONDS AND GEMS: If large diamonds and gemstones are highlighted in a fine piece of jewelry they make it even more rare and valuable."}),n.jsx("li",{className:"list-disc",children:"CONDITION: We expect to see some signs of wear on antique and estate jewelry. Jewelry in pristine original condition is rare and commands a premium. Jewelry with apparent alterations, repairs and restoration can be devalued."})]})})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What types of jewelry do we buy?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"We specialize in Fine antique, estate, and signed jewelry, large diamonds and gemstones, watches, and precious metals. We also purchase other fine antiques, paintings, and furniture. We do not purchase costume jewelry."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"I'm not sure if I want to sell my jewelry, can I come in for a Consultation?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Yes, you may make an appointment for a consultation. Verbal appraisals are free, but written appraisals are subject to a fee."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is the process that takes place once I decide I want to sell the jewelry to your company?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:"Upon arriving at our offices, you the seller will be shown to a private consultation room, where you will meet a member of our team in complete confidentiality. The item, be it a piece of jewellery, a diamond, or coloured stone, will be examined with a variety of gemological instruments. If we are interested in purchasing the piece or stone, we will make you an offer, and if you accept, payment will be made immediately via company check or wire transfer. If we do not wish to purchase the item or believe we are not the best avenue for you, we will try to direct you to the next best avenue."})})]})}),n.jsx(i,{children:({open:e})=>n.jsxs(n.Fragment,{children:[n.jsxs(i.Button,{className:`${e?"border-none mb-3":""} flex w-full bg-white px-4 py-6 text-left text-xl my-7 font-semibold text-black border-2 focus:outline-none "`,children:[n.jsx(N,{className:`${e?"rotate-45 transform":""} h-5 w-5 mr-9 text-[#0b2545] text-3xl font-black`}),n.jsx("span",{children:"What is the Difference Between Fair Market Value and Marketable Cash Value?"})]}),n.jsx(j,{enter:"transition duration-400 ease-in-out",enterFrom:"transform scale-95 opacity-40",enterTo:"transform scale-100 opacity-100",leave:"transition duration-200 ease-in-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:n.jsx(i.Panel,{className:"px-4 pb-2 pt-4 text-[17px] text-gray-900",children:n.jsxs("div",{className:"faq-body",children:[n.jsxs("p",{className:"",children:[n.jsx("strong",{children:n.jsx("em",{children:"Fair Market Value:"})})," If you are a willing seller and selling your jewelry by yourself and not paying any commissions, advertising costs, etc. then the money you sell it for is called the Fair Market Value."]}),n.jsxs("p",{className:"",children:[n.jsx("strong",{children:n.jsx("em",{children:"Marketable Cash Value:"})})," If you need help selling the jewelry items you would then be paying a commission or fee to someone who has experience and contacts in selling the types of jewelry you have for sale. Your take home price is the selling price less any commission and advertising fees that have been incurred."]})]})})})]})})]})})}const Dt=()=>n.jsxs("div",{children:[n.jsxs("div",{className:"block bg-[url('/back.jpeg')] relative bg-cover bg-no-repeat bg-center z-10 overflow-visible px-0 pt-64 pb-60",children:[n.jsx("div",{className:" bg-[rgb(52,52,52)] opacity-50 -z-10 absolute top-0 left-0 h-full w-full"}),n.jsx("div",{className:"text left-0 right-0 top-[50%] sm:top-[38%] com:top-[50px] mcom:top-[195px] font-[Syne] text-center translate-x-0 stroke-white opacity-10 -z-10 com:text-[300px] absolute font-bold fill-transparent stroke-1 mcom:text-[150px] tab:text-[100px] sm:text-[70px]",children:"Faqs"}),n.jsx("div",{className:"w-full px-4 mx-auto",children:n.jsx("h1",{className:"text-white mcom:text-[120px] text-[90px] text-center mt-0  mb-2 font-semibold font-[Syne] leading-[0.833]",children:"Faqs"})})]}),n.jsx(St,{})]});export{Dt as default};
