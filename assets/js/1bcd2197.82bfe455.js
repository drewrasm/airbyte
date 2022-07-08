"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||a;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="So you want to make a redirect in docs?",c={unversionedId:"contributing-to-airbyte/updating-documentation/making_a_redirect",id:"contributing-to-airbyte/updating-documentation/making_a_redirect",title:"So you want to make a redirect in docs?",description:"Anywhere but here",source:"@site/../docs/09-contributing-to-airbyte/10-updating-documentation/02-making_a_redirect.md",sourceDirName:"09-contributing-to-airbyte/10-updating-documentation",slug:"/contributing-to-airbyte/updating-documentation/making_a_redirect",permalink:"/contributing-to-airbyte/updating-documentation/making_a_redirect",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/09-contributing-to-airbyte/10-updating-documentation/02-making_a_redirect.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributions to docs",permalink:"/contributing-to-airbyte/updating-documentation/contributing_to_docs"},next:{title:"Deploying and Reverting Docs",permalink:"/contributing-to-airbyte/updating-documentation/deploying_and_reverting_docs"}},u={},l=[{value:"Plugin Client Redirects",id:"plugin-client-redirects",level:2}],d={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"so-you-want-to-make-a-redirect-in-docs"},"So you want to make a redirect in docs?"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://camo.githubusercontent.com/098cc23055cd8e4409de6f4c91b1fea522a1aefc7986bfda9cc2055c029a2d3b/68747470733a2f2f6661726d352e737461746963666c69636b722e636f6d2f343133312f353036343836333337355f663636613038303034335f622e6a7067",alt:"Anywhere but here"})),(0,o.kt)("h2",{id:"plugin-client-redirects"},"Plugin Client Redirects"),(0,o.kt)("p",null,"A silly name, but a useful plugin that adds redirect functionality to docusuaurs\n",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects"},"Official documentation here")),(0,o.kt)("p",null,"You will need to edit ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/docusaurus/docusaurus.config.js#L22"},"this docusaurus file")),(0,o.kt)("p",null,"You will see a commented section the reads something like this "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"//                        {\n//                         from: '/some-lame-path',\n//                         to: '/a-much-cooler-uri',\n//                        },\n")),(0,o.kt)("p",null,"Copy this section, replace the values, and ",(0,o.kt)("a",{parentName:"p",href:"/contributing-to-airbyte/updating-documentation/locally_testing_docusaurus"},"test it locally")," by going to the\npath you created a redirect for and checked to see that the address changes to your new one."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," Your path *",(0,o.kt)("em",{parentName:"p"},"needs")," a leading slash ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," to work"))}s.isMDXComponent=!0}}]);