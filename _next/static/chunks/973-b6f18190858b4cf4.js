(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[973],{5301:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{NY:function(){return C},Ee:function(){return E},fC:function(){return b}});var o=r(2784);let l=Boolean(null==globalThis?void 0:globalThis.document)?o.useLayoutEffect:()=>{};r(8316);let a=(0,o.forwardRef)((e,t)=>{let{children:r,...l}=e,a=o.Children.toArray(r),i=a.find(c);if(i){let f=i.props.children,s=a.map(e=>e!==i?e:o.Children.count(f)>1?o.Children.only(null):(0,o.isValidElement)(f)?f.props.children:null);return(0,o.createElement)(u,n({},l,{ref:t}),(0,o.isValidElement)(f)?(0,o.cloneElement)(f,void 0,s):null)}return(0,o.createElement)(u,n({},l,{ref:t}),r)});a.displayName="Slot";let u=(0,o.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,o.isValidElement)(r)?(0,o.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],l=t[n],a=/^on[A-Z]/.test(n);a?o&&l?r[n]=(...e)=>{l(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...l}:"className"===n&&(r[n]=[o,l].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:function(...e){return t=>e.forEach(e=>{var r;"function"==typeof(r=e)?r(t):null!=r&&(r.current=t)})}(t,r.ref)}):o.Children.count(r)>1?o.Children.only(null):null});u.displayName="SlotClone";let i=({children:e})=>(0,o.createElement)(o.Fragment,null,e);function c(e){return(0,o.isValidElement)(e)&&e.type===i}let f=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:l,...u}=e,i=l?a:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(i,n({},u,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),s="Avatar",[d,p]=function(e,t=[]){let r=[],n=()=>{let t=r.map(e=>(0,o.createContext)(e));return function(r){let n=(null==r?void 0:r[e])||t;return(0,o.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return n.scopeName=e,[function(t,n){let l=(0,o.createContext)(n),a=r.length;function u(t){let{scope:r,children:n,...u}=t,i=(null==r?void 0:r[e][a])||l,c=(0,o.useMemo)(()=>u,Object.values(u));return(0,o.createElement)(i.Provider,{value:c},n)}return r=[...r,n],u.displayName=t+"Provider",[u,function(r,u){let i=(null==u?void 0:u[e][a])||l,c=(0,o.useContext)(i);if(c)return c;if(void 0!==n)return n;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e),l=o[`__scope${n}`];return{...t,...l}},{});return(0,o.useMemo)(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(n,...t)]}(s),[m,v]=d(s),h=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,...l}=e,[a,u]=(0,o.useState)("idle");return(0,o.createElement)(m,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:u},(0,o.createElement)(f.span,n({},l,{ref:t})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,src:a,onLoadingStatusChange:u=()=>{},...i}=e,c=v("AvatarImage",r),s=function(e){let[t,r]=(0,o.useState)("idle");return(0,o.useEffect)(()=>{if(!e){r("error");return}let t=!0,n=new window.Image,o=e=>()=>{t&&r(e)};return r("loading"),n.onload=o("loaded"),n.onerror=o("error"),n.src=e,()=>{t=!1}},[e]),t}(a),d=function(e){let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),(0,o.useMemo)(()=>(...e)=>{var r;return null===(r=t.current)||void 0===r?void 0:r.call(t,...e)},[])}(e=>{u(e),c.onImageLoadingStatusChange(e)});return l(()=>{"idle"!==s&&d(s)},[s,d]),"loaded"===s?(0,o.createElement)(f.img,n({},i,{ref:t,src:a})):null}),g=(0,o.forwardRef)((e,t)=>{let{__scopeAvatar:r,delayMs:l,...a}=e,u=v("AvatarFallback",r),[i,c]=(0,o.useState)(void 0===l);return(0,o.useEffect)(()=>{if(void 0!==l){let e=window.setTimeout(()=>c(!0),l);return()=>window.clearTimeout(e)}},[l]),i&&"loaded"!==u.imageLoadingStatus?(0,o.createElement)(f.span,n({},a,{ref:t})):null}),b=h,E=y,C=g},2219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1088:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(3903).Z,o=r(5154).Z,l=n(r(2784)),a=r(4e3),u=r(4588),i=r(7003),c=r(7858),f=r(7826),s=r(8599),d=r(2219),p=r(2484);let m=new Set;function v(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(m.has(l))return;m.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function h(e){return"string"==typeof e?e:u.formatUrl(e)}let y=l.default.forwardRef(function(e,t){let r,n;let{href:u,as:m,children:y,prefetch:g,passHref:b,replace:E,shallow:C,scroll:w,locale:_,onClick:O,onMouseEnter:j,onTouchStart:M,legacyBehavior:S=!0!==Boolean(!0)}=e,N=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,S&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let P=!1!==g,x=l.default.useContext(c.RouterContext),k=l.default.useContext(f.AppRouterContext),L=null!=x?x:k,R=!x,{href:I,as:T}=l.default.useMemo(()=>{if(!x){let e=h(u);return{href:e,as:m?h(m):e}}let[t,r]=a.resolveHref(x,u,!0);return{href:t,as:m?a.resolveHref(x,m):r||t}},[x,u,m]),A=l.default.useRef(I),$=l.default.useRef(T);S&&(n=l.default.Children.only(r));let z=S?n&&"object"==typeof n&&n.ref:t,[B,D,K]=s.useIntersection({rootMargin:"200px"}),U=l.default.useCallback(e=>{($.current!==T||A.current!==I)&&(K(),$.current=T,A.current=I),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[T,z,I,K,B]);l.default.useEffect(()=>{L&&D&&P&&v(L,I,T,{locale:_})},[T,I,D,_,P,null==x?void 0:x.locale,L]);let V={ref:U,onClick(e){S||"function"!=typeof O||O(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,r,n,o,u,i,c,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let m=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?l.default.startTransition(m):m()}(e,L,I,T,E,C,w,_,R,P)},onMouseEnter(e){S||"function"!=typeof j||j(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&(P||!R)&&v(L,I,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){S||"function"!=typeof M||M(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&(P||!R)&&v(L,I,T,{locale:_,priority:!0,bypassPrefetchedCheck:!0})}};if(!S||b||"a"===n.type&&!("href"in n.props)){let H=void 0!==_?_:null==x?void 0:x.locale,Z=(null==x?void 0:x.isLocaleDomain)&&d.getDomainLocale(T,H,null==x?void 0:x.locales,null==x?void 0:x.domainLocales);V.href=Z||p.addBasePath(i.addLocale(T,H,null==x?void 0:x.defaultLocale))}return S?l.default.cloneElement(n,V):l.default.createElement("a",Object.assign({},N,V),r)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!l,[f,s]=n.useState(!1),[d,p]=n.useState(null);n.useEffect(()=>{if(l){if(!c&&!f&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=u.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},u.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let t=u.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&u.splice(t,1)}}}(d,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!f){let n=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(n)}},[d,c,r,t,f]);let m=n.useCallback(()=>{s(!1)},[]);return[p,f,m]};var n=r(2784),o=r(1424);let l="function"==typeof IntersectionObserver,a=new Map,u=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7729:function(e,t,r){e.exports=r(7016)},9097:function(e,t,r){e.exports=r(1088)},8281:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(2784),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function i(e){return function(t){return n.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,i=e.title,c=u(e,["attr","size","title"]),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}}]);