"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(r),d=i,y=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},58098:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={},a="Sentry Integration",c={unversionedId:"operator-guides/configuring-airbyte/sentry-integration",id:"operator-guides/configuring-airbyte/sentry-integration",title:"Sentry Integration",description:"Airbyte provides an opportunity to aggregate connectors' exceptions and errors via Sentry.",source:"@site/../docs/06-operator-guides/10-configuring-airbyte/01-sentry-integration.md",sourceDirName:"06-operator-guides/10-configuring-airbyte",slug:"/operator-guides/configuring-airbyte/sentry-integration",permalink:"/operator-guides/configuring-airbyte/sentry-integration",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/06-operator-guides/10-configuring-airbyte/01-sentry-integration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuring Airbyte",permalink:"/operator-guides/configuring-airbyte/"},next:{title:"Using custom connectors",permalink:"/operator-guides/using-custom-connectors"}},s={},l=[{value:"UML diagram",id:"uml-diagram",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sentry-integration"},"Sentry Integration"),(0,i.kt)("p",null,"Airbyte provides an opportunity to aggregate connectors' exceptions and errors via ",(0,i.kt)("a",{parentName:"p",href:"https://https://sentry.io/"},"Sentry"),".\nBy default, this option is off. There are 2 possible mechanisms for its activation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the ",(0,i.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN")," environment variable into Dockerfile of necessary connectors."),(0,i.kt)("li",{parentName:"ol"},"Define the ",(0,i.kt)("inlineCode",{parentName:"li"},"SENTRY_DSN")," into the workspace environment file (",(0,i.kt)("inlineCode",{parentName:"li"},".env"),"). Workers will add this variable to all docker connectors automatically.")),(0,i.kt)("p",null,"Most connectors written using the Airbyte Python or Java CDKs automatically detect this environment variable and activate Sentry profiling accordingly. "),(0,i.kt)("h2",{id:"uml-diagram"},"UML diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(27398).Z,width:"772",height:"1058"})))}u.isMDXComponent=!0},27398:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sentry-flow-v1-77f21deba3ed04428ca87d49c965ad8a.png"}}]);