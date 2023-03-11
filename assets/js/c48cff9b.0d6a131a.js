"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=o,v=d["".concat(m,".").concat(s)]||d[s]||u[s]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"interview/vue/\u865a\u62dfDOM\u8be6\u89e3",id:"interview/vue/\u865a\u62dfDOM\u8be6\u89e3",title:"\u865a\u62dfDOM\u8be6\u89e3",description:"\u9762\u8bd5\u9898\uff1a\u8bf7\u4f60\u9610\u8ff0\u4e00\u4e0b\u5bf9vue\u865a\u62dfdom\u7684\u7406\u89e3",source:"@site/docs/interview/vue/2.\u865a\u62dfDOM\u8be6\u89e3.md",sourceDirName:"interview/vue",slug:"/interview/vue/\u865a\u62dfDOM\u8be6\u89e3",permalink:"/docs/interview/vue/\u865a\u62dfDOM\u8be6\u89e3",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/vue/2.\u865a\u62dfDOM\u8be6\u89e3.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u7ec4\u4ef6\u901a\u4fe1\u603b\u7ed3",permalink:"/docs/interview/vue/\u7ec4\u4ef6\u901a\u4fe1\u603b\u7ed3"},next:{title:"v-model",permalink:"/docs/interview/vue/v-model"}},m={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u9762\u8bd5\u9898\uff1a\u8bf7\u4f60\u9610\u8ff0\u4e00\u4e0b\u5bf9vue\u865a\u62dfdom\u7684\u7406\u89e3")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ec0\u4e48\u662f\u865a\u62dfdom\uff1f\n\u865a\u62dfdom\u672c\u8d28\u4e0a\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684JS\u5bf9\u8c61\uff0c\u7528\u4e8e\u63cf\u8ff0\u89c6\u56fe\u7684\u754c\u9762\u7ed3\u6784\n\u5728vue\u4e2d\uff0c\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570\uff0c\u6bcf\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u865a\u62dfdom\u6811\uff0c\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u5bf9\u5e94\u4e00\u68f5\u865a\u62dfDOM\u6811 ",(0,o.kt)("img",{parentName:"li",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210225140726.png",alt:null})," "),(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u865a\u62dfdom\uff1f\n\u5728",(0,o.kt)("inlineCode",{parentName:"li"},"vue"),"\u4e2d\uff0c\u6e32\u67d3\u89c6\u56fe\u4f1a\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570\uff0c\u8fd9\u79cd\u6e32\u67d3\u4e0d\u4ec5\u53d1\u751f\u5728\u7ec4\u4ef6\u521b\u5efa\u65f6\uff0c\u540c\u65f6\u53d1\u751f\u5728\u89c6\u56fe\u4f9d\u8d56\u7684\u6570\u636e\u66f4\u65b0\u65f6\u3002\u5982\u679c\u5728\u6e32\u67d3\u65f6\uff0c\u76f4\u63a5\u4f7f\u7528\u771f\u5b9e",(0,o.kt)("inlineCode",{parentName:"li"},"DOM"),"\uff0c\u7531\u4e8e\u771f\u5b9e",(0,o.kt)("inlineCode",{parentName:"li"},"DOM"),"\u7684\u521b\u5efa\u3001\u66f4\u65b0\u3001\u63d2\u5165\u7b49\u64cd\u4f5c\u4f1a\u5e26\u6765\u5927\u91cf\u7684\u6027\u80fd\u635f\u8017\uff0c\u4ece\u800c\u5c31\u4f1a\u6781\u5927\u7684\u964d\u4f4e\u6e32\u67d3\u6548\u7387\u3002\n\u56e0\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"vue"),"\u5728\u6e32\u67d3\u65f6\uff0c\u4f7f\u7528\u865a\u62dfdom\u6765\u66ff\u4ee3\u771f\u5b9edom\uff0c\u4e3b\u8981\u4e3a\u89e3\u51b3\u6e32\u67d3\u6548\u7387\u7684\u95ee\u9898\u3002 "),(0,o.kt)("li",{parentName:"ol"},"\u865a\u62dfdom\u662f\u5982\u4f55\u8f6c\u6362\u4e3a\u771f\u5b9edom\u7684\uff1f\n\u5728\u4e00\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u9996\u6b21\u88ab\u6e32\u67d3\u65f6\uff0c\u5b83\u5148\u751f\u6210\u865a\u62dfdom\u6811\uff0c\u7136\u540e\u6839\u636e\u865a\u62dfdom\u6811\u521b\u5efa\u771f\u5b9edom\uff0c\u5e76\u628a\u771f\u5b9edom\u6302\u8f7d\u5230\u9875\u9762\u4e2d\u5408\u9002\u7684\u4f4d\u7f6e\uff0c\u6b64\u65f6\uff0c\u6bcf\u4e2a\u865a\u62dfdom\u4fbf\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u771f\u5b9e\u7684dom\u3002\n\u5982\u679c\u4e00\u4e2a\u7ec4\u4ef6\u53d7\u54cd\u5e94\u5f0f\u6570\u636e\u53d8\u5316\u7684\u5f71\u54cd\uff0c\u9700\u8981\u91cd\u65b0\u6e32\u67d3\u65f6\uff0c\u5b83\u4ecd\u7136\u4f1a\u91cd\u65b0\u8c03\u7528render\u51fd\u6570\uff0c\u521b\u5efa\u51fa\u4e00\u4e2a\u65b0\u7684\u865a\u62dfdom\u6811\uff0c\u7528\u65b0\u6811\u548c\u65e7\u6811\u5bf9\u6bd4\uff0c\u901a\u8fc7\u5bf9\u6bd4\uff0cvue\u4f1a\u627e\u5230\u6700\u5c0f\u66f4\u65b0\u91cf\uff0c\u7136\u540e\u66f4\u65b0\u5fc5\u8981\u7684\u865a\u62dfdom\u8282\u70b9\uff0c\u6700\u540e\uff0c\u8fd9\u4e9b\u66f4\u65b0\u8fc7\u7684\u865a\u62df\u8282\u70b9\uff0c\u4f1a\u53bb\u4fee\u6539\u5b83\u4eec\u5bf9\u5e94\u7684\u771f\u5b9edom\n\u8fd9\u6837\u4e00\u6765\uff0c\u5c31\u4fdd\u8bc1\u4e86\u5bf9\u771f\u5b9edom\u8fbe\u5230\u6700\u5c0f\u7684\u6539\u52a8\u3002 ",(0,o.kt)("img",{parentName:"li",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210225144108.png",alt:null})," "),(0,o.kt)("li",{parentName:"ol"},"\u6a21\u677f\u548c\u865a\u62dfdom\u7684\u5173\u7cfb\nvue\u6846\u67b6\u4e2d\u6709\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"compile"),"\u6a21\u5757\uff0c\u5b83\u4e3b\u8981\u8d1f\u8d23\u5c06\u6a21\u677f\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570\uff0c\u800c",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570\u8c03\u7528\u540e\u5c06\u5f97\u5230\u865a\u62dfdom\u3002\n\u7f16\u8bd1\u7684\u8fc7\u7a0b\u5206\u4e24\u6b65\uff1a "),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6a21\u677f\u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"AST(\u62bd\u8c61\u8bed\u6cd5\u6811)"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"li",href:"https://astexplorer.net/"},"https://astexplorer.net/")))),(0,o.kt)("li",{parentName:"ol"},"\u5c06",(0,o.kt)("inlineCode",{parentName:"li"},"AST"),"\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"render"),"\u51fd\u6570")),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4f20\u7edf\u7684\u5f15\u5165\u65b9\u5f0f\uff0c\u5219\u7f16\u8bd1\u65f6\u95f4\u53d1\u751f\u5728\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u52a0\u8f7d\u65f6\uff0c\u8fd9\u79f0\u4e4b\u4e3a\u8fd0\u884c\u65f6\u7f16\u8bd1\u3002\n\u5982\u679c\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"vue-cli"),"\u7684\u9ed8\u8ba4\u914d\u7f6e\u4e0b\uff0c\u7f16\u8bd1\u53d1\u751f\u5728\u6253\u5305\u65f6\uff0c\u8fd9\u79f0\u4e4b\u4e3a\u6a21\u677f\u9884\u7f16\u8bd1\u3002\n\u7f16\u8bd1\u662f\u4e00\u4e2a\u6781\u5176\u8017\u8d39\u6027\u80fd\u7684\u64cd\u4f5c\uff0c\u9884\u7f16\u8bd1\u53ef\u4ee5\u6709\u6548\u7684\u63d0\u9ad8\u8fd0\u884c\u65f6\u7684\u6027\u80fd\uff0c\u800c\u4e14\uff0c\u7531\u4e8e\u8fd0\u884c\u7684\u65f6\u5019\u5df2\u4e0d\u9700\u8981\u7f16\u8bd1\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"vue-cli"),"\u5728\u6253\u5305\u65f6\u4f1a\u6392\u9664\u6389",(0,o.kt)("inlineCode",{parentName:"p"},"vue"),"\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"compile"),"\u6a21\u5757\uff0c\u4ee5\u51cf\u5c11\u6253\u5305\u4f53\u79ef\n\u6a21\u677f\u7684\u5b58\u5728\uff0c\u4ec5\u4ec5\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u4eba\u5458\u66f4\u52a0\u65b9\u4fbf\u7684\u4e66\u5199\u754c\u9762\u4ee3\u7801\n",(0,o.kt)("strong",{parentName:"p"},"vue\u6700\u7ec8\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u6700\u7ec8\u9700\u8981\u7684\u662frender\u51fd\u6570\uff0c\u800c\u4e0d\u662f\u6a21\u677f\uff0c\u56e0\u6b64\uff0c\u6a21\u677f\u4e2d\u7684\u5404\u79cd\u8bed\u6cd5\uff0c\u5728\u865a\u62dfdom\u4e2d\u90fd\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u5b83\u4eec\u90fd\u4f1a\u53d8\u6210\u865a\u62dfdom\u7684\u914d\u7f6e")))}d.isMDXComponent=!0}}]);