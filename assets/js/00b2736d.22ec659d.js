"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2280],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),k=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=k(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,i=m(e,["components","mdxType","originalType","parentName"]),s=k(n),c=r,N=s["".concat(o,".").concat(c)]||s[c]||u[c]||p;return n?a.createElement(N,l(l({ref:t},i),{},{components:n})):a.createElement(N,l({ref:t},i))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,l=new Array(p);l[0]=c;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[s]="string"==typeof e?e:r,l[1]=m;for(var k=2;k<p;k++)l[k]=n[k];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=n(7462),r=(n(7294),n(3905));const p={},l="DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",m={unversionedId:"interview/js/DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",id:"interview/js/DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",title:"DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",description:"\u7ecf\u5178\u771f\u9898",source:"@site/docs/interview/js/12.DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664.md",sourceDirName:"interview/js",slug:"/interview/js/DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",permalink:"/docs/interview/js/DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/js/12.DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u95ed\u5305",permalink:"/docs/interview/js/\u95ed\u5305"},next:{title:"DOM \u4e8b\u4ef6\u7684\u4f20\u64ad\u673a\u5236",permalink:"/docs/interview/js/DOM \u4e8b\u4ef6\u7684\u4f20\u64ad\u673a\u5236"}},o={},k=[{value:"\u7ecf\u5178\u771f\u9898",id:"\u7ecf\u5178\u771f\u9898",level:2},{value:"<em>DOM</em> \u6ce8\u518c\u4e8b\u4ef6",id:"dom-\u6ce8\u518c\u4e8b\u4ef6",level:2},{value:"<em>HTML</em> \u5143\u7d20\u4e2d\u6ce8\u518c\u4e8b\u4ef6",id:"html-\u5143\u7d20\u4e2d\u6ce8\u518c\u4e8b\u4ef6",level:3},{value:"<em>DOM0</em> \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6",id:"dom0-\u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6",level:3},{value:"<em>DOM2</em> \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6",id:"dom2-\u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6",level:3},{value:"<em>DOM</em> \u79fb\u9664\u4e8b\u4ef6",id:"dom-\u79fb\u9664\u4e8b\u4ef6",level:2},{value:"\u771f\u9898\u89e3\u7b54",id:"\u771f\u9898\u89e3\u7b54",level:2}],i={toc:k};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dom-\u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664"},"DOM \u4e8b\u4ef6\u7684\u6ce8\u518c\u548c\u79fb\u9664"),(0,r.kt)("h2",{id:"\u7ecf\u5178\u771f\u9898"},"\u7ecf\u5178\u771f\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u603b\u7ed3\u4e00\u4e0b ",(0,r.kt)("em",{parentName:"li"},"DOM")," \u4e2d\u5982\u4f55\u6ce8\u518c\u4e8b\u4ef6\u548c\u79fb\u9664\u4e8b\u4ef6")),(0,r.kt)("h2",{id:"dom-\u6ce8\u518c\u4e8b\u4ef6"},(0,r.kt)("em",{parentName:"h2"},"DOM")," \u6ce8\u518c\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u4e3a ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u6ce8\u518c\u4e8b\u4ef6\u7684\u65b9\u5f0f\u6709\u591a\u79cd\u3002\u4f46\u662f\u5e76\u4e0d\u662f\u4e00\u5f00\u59cb\u5c31\u8bbe\u8ba1\u4e86\u591a\u79cd\u65b9\u5f0f\uff0c\u800c\u662f\u968f\u7740\u6280\u672f\u7684\u53d1\u5c55\uff0c\u53d1\u5c55\u524d\u4e00\u79cd\u65b9\u5f0f\u6709\u6240\u7f3a\u9677\uff0c\u6240\u4ee5\u8bbe\u8ba1\u4e86\u65b0\u7684 ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u6ce8\u518c\u4e8b\u4ef6\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5c31\u4e00\u8d77\u6765\u603b\u7ed3\u4e00\u4e0b ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u4e2d\u6ce8\u518c\u4e8b\u4ef6\u7684\u65b9\u5f0f\u6709\u54ea\u4e9b\u3002"),(0,r.kt)("h3",{id:"html-\u5143\u7d20\u4e2d\u6ce8\u518c\u4e8b\u4ef6"},(0,r.kt)("em",{parentName:"h3"},"HTML")," \u5143\u7d20\u4e2d\u6ce8\u518c\u4e8b\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"HTML")," \u5143\u7d20\u4e2d\u6ce8\u518c\u7684\u4e8b\u4ef6\uff0c\u53c8\u88ab\u79f0\u4e4b\u4e3a\u884c\u5185\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u8fd9\u662f\u5728\u6d4f\u89c8\u5668\u4e2d\u5904\u7406\u4e8b\u4ef6\u6700\u539f\u59cb\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<button onclick=\"test('\u5f20\u4e09')\">\u70b9\u51fb\u6211</button>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function test(name) {\n  console.log(`\u6211\u77e5\u9053\u4f60\u5df2\u7ecf\u70b9\u51fb\u4e86\uff0c${name}`);\n}\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4e3a ",(0,r.kt)("em",{parentName:"p"},"button")," \u5143\u7d20\u6dfb\u52a0\u4e86 ",(0,r.kt)("em",{parentName:"p"},"onclick")," \u5c5e\u6027\uff0c\u7136\u540e\u7ed1\u5b9a\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("em",{parentName:"p"},"test")," \u7684\u4e8b\u4ef6\u5904\u7406\u5668\u3002"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u4e2d\u53ea\u9700\u8981\u4e66\u5199\u5bf9\u5e94\u7684 ",(0,r.kt)("em",{parentName:"p"},"test")," \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\uff0c\u5c31\u662f\u8fd9\u79cd\u65b9\u6cd5\u5df2\u7ecf\u8fc7\u65f6\u4e86\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"JavaScript")," \u4ee3\u7801\u4e0e ",(0,r.kt)("em",{parentName:"li"},"HTML")," \u6807\u8bb0\u6df7\u6742\u5728\u4e00\u8d77\uff0c\u7834\u574f\u4e86\u7ed3\u6784\u548c\u884c\u4e3a\u5206\u79bb\u7684\u7406\u5ff5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5143\u7d20\u53ea\u80fd\u4e3a\u6bcf\u79cd\u4e8b\u4ef6\u7c7b\u578b\u7ed1\u5b9a\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u5668\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u5904\u7406\u5668\u7684\u4ee3\u7801\u9690\u85cf\u4e8e\u6807\u8bb0\u4e2d\uff0c\u5f88\u96be\u627e\u5230\u4e8b\u4ef6\u662f\u5728\u54ea\u91cc\u58f0\u660e\u7684\u3002")),(0,r.kt)("p",null,"\u4f46\u662f\u5982\u679c\u662f\u505a\u7b80\u5355\u7684\u4e8b\u4ef6\u6d4b\u8bd5\uff0c\u90a3\u4e48\u8fd9\u79cd\u5199\u6cd5\u8fd8\u662f\u975e\u5e38\u65b9\u4fbf\u5feb\u6377\u7684\u3002"),(0,r.kt)("h3",{id:"dom0-\u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6"},(0,r.kt)("em",{parentName:"h3"},"DOM0")," \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u662f\u9996\u5148\u53d6\u5230\u8981\u4e3a\u5176\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5143\u7d20\u8282\u70b9\u5bf9\u8c61\uff0c\u7136\u540e\u7ed9\u8fd9\u4e9b\u8282\u70b9\u5bf9\u8c61\u7684\u4e8b\u4ef6\u5904\u7406\u5c5e\u6027\u8d4b\u503c\u4e00\u4e2a\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u8fd9\u6837\u5c31\u53ef\u4ee5\u8fbe\u5230 ",(0,r.kt)("em",{parentName:"p"},"JavaScript")," \u4ee3\u7801\u548c ",(0,r.kt)("em",{parentName:"p"},"HTML")," \u4ee3\u7801\u76f8\u5206\u79bb\u7684\u76ee\u7684\u3002"),(0,r.kt)("p",null,"\u5177\u4f53\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button id="test">\u70b9\u51fb\u6211</button>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var test = document.getElementById("test");\ntest.onclick = function(){\n  console.log("this is a test");\n}\n')),(0,r.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u867d\u7136\u76f8\u6bd4 ",(0,r.kt)("em",{parentName:"p"},"HTML")," \u5143\u7d20\u4e2d\u6ce8\u518c\u4e8b\u4ef6\u6709\u6240\u6539\u8fdb\uff0c\u4f46\u662f\u5b83\u4e5f\u6709\u4e00\u4e2a\u7f3a\u70b9\uff0c\u90a3\u5c31\u662f\u5b83\u4f9d\u7136\u5b58\u5728\u6bcf\u4e2a\u5143\u7d20\u53ea\u80fd\u7ed1\u5b9a\u4e00\u4e2a\u51fd\u6570\u7684\u5c40\u9650\u6027\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c1d\u8bd5\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u4e3a\u540c\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\u7ed1\u5b9a ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u4e8b\u4ef6\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var test = document.getElementById("test");\ntest.onclick = function(){\n  console.log("this is a test");\n}\ntest.onclick = function(){\n  console.log("this is a test,too");\n}\n')),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u4e3a\u8be5 ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u7ed1\u5b9a ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u76f8\u540c\u7c7b\u578b\u7684\u4e8b\u4ef6\u65f6\uff0c\u540e\u9762\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u5c31\u4f1a\u628a\u524d\u9762\u7684\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u7ed9\u8986\u76d6\u6389\u3002"),(0,r.kt)("h3",{id:"dom2-\u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6"},(0,r.kt)("em",{parentName:"h3"},"DOM2")," \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u518d\u6b21\u5bf9\u4e8b\u4ef6\u7684\u7ed1\u5b9a\u65b9\u5f0f\u8fdb\u884c\u4e86\u6539\u8fdb\u3002"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u65b9\u6cd5\u6765\u4e3a\u4e00\u4e2a ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u6dfb\u52a0\u591a\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"),(0,r.kt)("p",null,"\u8be5\u65b9\u6cd5\u63a5\u6536 ",(0,r.kt)("em",{parentName:"p"},"3")," \u4e2a\u53c2\u6570\uff1a\u4e8b\u4ef6\u540d\u3001\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3001\u5e03\u5c14\u503c\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8fd9\u4e2a\u5e03\u5c14\u503c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"true"),"\uff0c\u5219\u5728\u6355\u83b7\u9636\u6bb5\u5904\u7406\u4e8b\u4ef6\uff0c\u5982\u679c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u5219\u5728\u5192\u6ce1\u9636\u6bb5\u5904\u7406\u4e8b\u4ef6\u3002\u82e5\u6700\u540e\u7684\u5e03\u5c14\u503c\u4e0d\u586b\u5199\uff0c\u5219\u548c ",(0,r.kt)("em",{parentName:"p"},"false")," \u6548\u679c\u4e00\u6837\uff0c\u4e5f\u5c31\u662f\u8bf4\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u5728\u5192\u6ce1\u9636\u6bb5\u8fdb\u884c\u4e8b\u4ef6\u7684\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u6765\u770b\u4e0b\u9762\u7684\u793a\u4f8b\uff1a\u8fd9\u91cc\u6211\u4eec\u4e3a ",(0,r.kt)("em",{parentName:"p"},"button")," \u5143\u7d20\u7ed1\u5b9a\u4e86 ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u5e76\u4e14 ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u90fd\u662f\u901a\u8fc7\u70b9\u51fb\u6765\u89e6\u53d1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var test = document.getElementById("test");\ntest.addEventListener("click", function () {\n  console.log("this is a test");\n}, false);\ntest.addEventListener("click", function () {\n  console.log("this is a test,too");\n}, false);\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u4e3a\u6309\u94ae\u7ed1\u5b9a\u4e86 ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u70b9\u51fb\u7684\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u90fd\u4f1a\u6267\u884c\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728 ",(0,r.kt)("em",{parentName:"p"},"IE")," \u4e2d\u548c ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u65b9\u6cd5\u4e0e\u4e4b\u5bf9\u5e94\u7684\u662f ",(0,r.kt)("em",{parentName:"p"},"attachEvent")," \u65b9\u6cd5\u3002"),(0,r.kt)("h2",{id:"dom-\u79fb\u9664\u4e8b\u4ef6"},(0,r.kt)("em",{parentName:"h2"},"DOM")," \u79fb\u9664\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"DOM0")," \u7ea7\u6765\u6dfb\u52a0\u7684\u4e8b\u4ef6\uff0c\u5220\u9664\u7684\u65b9\u6cd5\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5c06 ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u7684\u4e8b\u4ef6\u5904\u7406\u5c5e\u6027\u8d4b\u503c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"null")," \u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var test = document.getElementById("test");\ntest.onclick = function(){\n  console.log("this is a test");\n  test.onclick = null;\n}\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"DOM0")," \u7ea7\u7684\u65b9\u5f0f\u4e3a ",(0,r.kt)("em",{parentName:"p"},"button")," \u6309\u94ae\u7ed1\u5b9a\u4e86\u70b9\u51fb\u4e8b\u4ef6\uff0c\u4f46\u662f\u5728\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u53c8\u79fb\u9664\u4e86\u8be5\u4e8b\u4ef6\u3002\u6240\u4ee5\u8be5\u4e8b\u4ef6\u53ea\u4f1a\u751f\u6548\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u6765\u6dfb\u52a0\u7684\u4e8b\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"removeEventLister")," \u65b9\u6cd5\u6765\u8fdb\u884c\u4e8b\u4ef6\u7684\u5220\u9664\u3002"),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u8981\u901a\u8fc7\u8be5\u65b9\u6cd5\u79fb\u9664",(0,r.kt)("strong",{parentName:"p"},"\u67d0\u4e00\u7c7b\u4e8b\u4ef6\u7c7b\u578b\u7684\u4e00\u4e2a\u4e8b\u4ef6"),"\u7684\u8bdd\uff0c\u5728\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u6765\u7ed1\u5b9a\u4e8b\u4ef6\u65f6\u7684\u5199\u6cd5\u5c31\u8981\u7a0d\u4f5c\u6539\u53d8\u3002"),(0,r.kt)("p",null,"\u5148\u5355\u72ec\u5c06\u7ed1\u5b9a\u51fd\u6570\u5199\u597d\uff0c\u7136\u540e ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u8fdb\u884c\u7ed1\u5b9a\u65f6\u7b2c ",(0,r.kt)("em",{parentName:"p"},"2")," \u4e2a\u53c2\u6570\u4f20\u5165\u8981\u7ed1\u5b9a\u7684\u51fd\u6570\u540d\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var test = document.getElementById("test");\n//DOM 2\u7ea7\u6dfb\u52a0\u4e8b\u4ef6\nfunction fn1() {\n  console.log("this is a test");\n  test.removeEventListener("click", fn1); // \u53ea\u5220\u9664\u7b2c\u4e00\u4e2a\u70b9\u51fb\u4e8b\u4ef6\n}\nfunction fn2() {\n  console.log("this is a test,too");\n}\ntest.addEventListener("click", fn1, false);\ntest.addEventListener("click", fn2, false);\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u4e3a ",(0,r.kt)("em",{parentName:"p"},"button")," \u5143\u7d20\u7ed1\u5b9a\u4e86\u4e24\u4e2a ",(0,r.kt)("em",{parentName:"p"},"click")," \u4e8b\u4ef6\uff0c\u4e4b\u540e\u5728\u7b2c\u4e00\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\uff0c\u5bf9 ",(0,r.kt)("em",{parentName:"p"},"fn1")," \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u8fdb\u884c\u4e86\u79fb\u9664\u3002\u6240\u4ee5\u7b2c\u4e00\u6b21\u70b9\u51fb\u65f6\uff0c",(0,r.kt)("em",{parentName:"p"},"fn1")," \u548c ",(0,r.kt)("em",{parentName:"p"},"fn2")," \u90fd\u4f1a\u8d77\u4f5c\u7528\uff0c\u4e4b\u540e\u56e0\u4e3a ",(0,r.kt)("em",{parentName:"p"},"fn1")," \u88ab\u79fb\u9664\uff0c\u6240\u4ee5\u53ea\u4f1a ",(0,r.kt)("em",{parentName:"p"},"fn2")," \u6709\u4f5c\u7528\u3002"),(0,r.kt)("h2",{id:"\u771f\u9898\u89e3\u7b54"},"\u771f\u9898\u89e3\u7b54"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u603b\u7ed3\u4e00\u4e0b ",(0,r.kt)("em",{parentName:"li"},"DOM")," \u4e2d\u5982\u4f55\u6ce8\u518c\u4e8b\u4ef6\u548c\u79fb\u9664\u4e8b\u4ef6")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53c2\u8003\u7b54\u6848\uff1a"),(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u518c\u4e8b\u4ef6\u7684\u65b9\u5f0f\u5e38\u89c1\u7684\u6709 ",(0,r.kt)("em",{parentName:"p"},"3")," \u79cd\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"HTML")," \u5143\u7d20\u4e2d\u6ce8\u518c\u7684\u4e8b\u4ef6\uff1a\u8fd9\u79cd\u65b9\u5f0f\u53c8\u88ab\u79f0\u4e4b\u4e3a\u884c\u5185\u4e8b\u4ef6\u76d1\u542c\u5668\u3002\u8fd9\u662f\u5728\u6d4f\u89c8\u5668\u4e2d\u5904\u7406\u4e8b\u4ef6\u6700\u539f\u59cb\u7684\u65b9\u6cd5\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"DOM0")," \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6\uff1a\u8fd9\u79cd\u65b9\u5f0f\u662f\u9996\u5148\u53d6\u5230\u8981\u4e3a\u5176\u7ed1\u5b9a\u4e8b\u4ef6\u7684\u5143\u7d20\u8282\u70b9\u5bf9\u8c61\uff0c\u7136\u540e\u7ed9\u8fd9\u4e9b\u8282\u70b9\u5bf9\u8c61\u7684\u4e8b\u4ef6\u5904\u7406\u5c5e\u6027\u8d4b\u503c\u4e00\u4e2a\u51fd\u6570\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u65b9\u5f0f\u6ce8\u518c\u4e8b\u4ef6\uff1a",(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u901a\u8fc7 ",(0,r.kt)("em",{parentName:"p"},"addEventListener")," \u65b9\u6cd5\u6765\u4e3a\u4e00\u4e2a ",(0,r.kt)("em",{parentName:"p"},"DOM")," \u5143\u7d20\u6dfb\u52a0\u591a\u4e2a\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65b9\u6cd5\u63a5\u6536 ",(0,r.kt)("em",{parentName:"p"},"3")," \u4e2a\u53c2\u6570\uff1a\u4e8b\u4ef6\u540d\u3001\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3001\u5e03\u5c14\u503c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8fd9\u4e2a\u5e03\u5c14\u503c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"true"),"\uff0c\u5219\u5728\u6355\u83b7\u9636\u6bb5\u5904\u7406\u4e8b\u4ef6\uff0c\u5982\u679c\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u5219\u5728\u5192\u6ce1\u9636\u6bb5\u5904\u7406\u4e8b\u4ef6\u3002\u82e5\u6700\u540e\u7684\u5e03\u5c14\u503c\u4e0d\u586b\u5199\uff0c\u5219\u548c ",(0,r.kt)("em",{parentName:"p"},"false")," \u6548\u679c\u4e00\u6837\uff0c\u4e5f\u5c31\u662f\u8bf4\u9ed8\u8ba4\u4e3a ",(0,r.kt)("em",{parentName:"p"},"false"),"\uff0c\u5728\u5192\u6ce1\u9636\u6bb5\u8fdb\u884c\u4e8b\u4ef6\u7684\u5904\u7406\u3002"))),(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u79fb\u9664\u6ce8\u518c\u7684\u4e8b\u4ef6\uff0c\u5982\u679c\u662f ",(0,r.kt)("em",{parentName:"p"},"DOM0")," \u7ea7\u65b9\u5f0f\u6ce8\u518c\u7684\u4e8b\u4ef6\uff0c\u76f4\u63a5\u5c06\u503c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("em",{parentName:"p"},"null")," \u5373\u53ef\u3002\u5982\u679c\u662f ",(0,r.kt)("em",{parentName:"p"},"DOM2")," \u7ea7\u6ce8\u518c\u7684\u4e8b\u4ef6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("em",{parentName:"p"},"removeEventListener")," \u65b9\u6cd5\u6765\u79fb\u9664\u4e8b\u4ef6\u3002")),(0,r.kt)("p",null,"-",(0,r.kt)("em",{parentName:"p"},"EOF"),"-"))}s.isMDXComponent=!0}}]);