"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,i(i({ref:t},s),{},{components:n})):r.createElement(v,i({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"interview/vue/\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",id:"interview/vue/\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",description:"\u8be6\u89c1vue-cli\u5b98\u7f51\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",source:"@site/docs/interview/vue/14.\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf.md",sourceDirName:"interview/vue",slug:"/interview/vue/\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",permalink:"/docs/interview/vue/\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/vue/14.\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u957f\u5217\u8868\u4f18\u5316",permalink:"/docs/interview/vue/\u957f\u5217\u8868\u4f18\u5316"},next:{title:"\u66f4\u591a\u914d\u7f6e",permalink:"/docs/interview/vue/\u66f4\u591a\u914d\u7f6e"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8be6\u89c1vue-cli\u5b98\u7f51",(0,a.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F%E5%92%8C%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F"},"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210323133209.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210323134742.png",alt:null})),(0,a.kt)("p",null,"vue-cli\u5728\u6253\u5305\u65f6\uff0c\u4f1a\u5c06process.env.XXX\u8fdb\u884c\u66ff\u6362\u3002\u8fd9\u4e2a\u5176\u5b9e\u662fwebpack.definePlugin\u5b8c\u6210\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/* \n    \u5f00\u53d1\u73af\u5883\uff1ahttp://www.test.com\n    \u751f\u4ea7\u73af\u5883\uff1ahttp://www.duyiservice.com\n  */\n  let baseUrl;\n  if (process.env.NODE_ENV === 'development') {\n    baseUrl = 'http://www.test.com';\n  } else {\n    baseUrl = 'http://www.duyiservice.com';\n  }\n  await fetch(baseUrl + '/api/news');\n\n")),(0,a.kt)("p",null,"\u6253\u5305\u5b8c\u6210\u540e\uff0c\u5982\u679c\u662f\u751f\u4ea7\u73af\u5883",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.NODE_ENV"),"\u4f1a\u88ab\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"production"),"\uff0c\u5f00\u53d1\u73af\u5883\u4f1a\u88ab\u66ff\u6362\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"development"),"\u3002\n\u5173\u4e8e\u73af\u5883\u53d8\u91cf\u5982\u4f55\u5b9a\u4e49\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u8bfb\u53d6\u5f53\u524d\u673a\u5668\u7684\u73af\u5883\u53d8\u91cf"),(0,a.kt)("li",{parentName:"ol"},"\u8bfb\u53d6",(0,a.kt)("inlineCode",{parentName:"li"},".env"),"\u6587\u4ef6")),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6\u4e2d\u53ef\u4ee5\u914d\u7f6e\u76f8\u5e94\u7684\u73af\u5883\u53d8\u91cf\n\u5f00\u53d1\u73af\u5883\u6211\u4eec\u53ef\u4ee5\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},".env.development"),"\u6587\u4ef6\uff0c\u5f53\u5f00\u53d1\u73af\u5883\u7684\u65f6\u5019\uff0c\u4f1a\u4f7f\u7528\u91cc\u9762\u914d\u7f6e\u7684\u53d8\u91cf\u503c\u3002\u751f\u4ea7\u73af\u5883\u6211\u4eec\u53ef\u4ee5\u521b\u5efa",(0,a.kt)("inlineCode",{parentName:"p"},".env.production"),"\u3002\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"fetch("),"${process.env.VUE",(0,a.kt)("em",{parentName:"p"},"APP_SERVERBASE}${url}",(0,a.kt)("inlineCode",{parentName:"em"},", ...args);"),"\u6211\u4eec\u5c31\u53ef\u4ee5\u5206\u522b\u5728\u4e24\u4e2a\u6587\u4ef6\u4e2d\u914d\u7f6e\uff0c\u5c31\u4e0d\u9700\u8981\u5355\u72ec\u505a\u5224\u65ad\u4e86\u3002\u5bf9\u4e8e\u81ea\u5b9a\u4e49\u53d8\u91cf\u7684\u65f6\u5019\u6211\u4eec\u8981\u4f7f\u7528`**VUE_APP"),"**XXX`\u3002"))}u.isMDXComponent=!0}}]);