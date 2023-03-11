"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8652],{3905:(e,n,l)=>{l.d(n,{Zo:()=>k,kt:()=>c});var t=l(7294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function o(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function p(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=t.createContext({}),u=function(e){var n=t.useContext(i),l=n;return e&&(l="function"==typeof e?e(n):o(o({},n),e)),l},k=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=u(l),m=a,c=s["".concat(i,".").concat(m)]||s[m]||d[m]||r;return l?t.createElement(c,o(o({ref:n},k),{},{components:l})):t.createElement(c,o({ref:n},k))}));function c(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,o=new Array(r);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var u=2;u<r;u++)o[u]=l[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7558:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var t=l(7462),a=(l(7294),l(3905));const r={},o=void 0,p={unversionedId:"webpack/\u6027\u80fd\u4f18\u5316",id:"webpack/\u6027\u80fd\u4f18\u5316",title:"\u6027\u80fd\u4f18\u5316",description:"1.\u6027\u80fd\u4f18\u5316\u6982\u8ff0",source:"@site/docs/webpack/7.\u6027\u80fd\u4f18\u5316.md",sourceDirName:"webpack",slug:"/webpack/\u6027\u80fd\u4f18\u5316",permalink:"/docs/webpack/\u6027\u80fd\u4f18\u5316",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/webpack/7.\u6027\u80fd\u4f18\u5316.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"webpack",previous:{title:"js\u517c\u5bb9\u6027",permalink:"/docs/webpack/js\u517c\u5bb9\u6027"},next:{title:"\u8865\u5145\u548c\u6848\u4f8b",permalink:"/docs/webpack/\u8865\u5145\u548c\u6848\u4f8b"}},i={},u=[{value:"1.\u6027\u80fd\u4f18\u5316\u6982\u8ff0",id:"1\u6027\u80fd\u4f18\u5316\u6982\u8ff0",level:2},{value:"<strong>\u4f20\u8f93\u6027\u80fd</strong>",id:"\u4f20\u8f93\u6027\u80fd",level:3},{value:"<strong>\u8fd0\u884c\u6027\u80fd</strong>",id:"\u8fd0\u884c\u6027\u80fd",level:3},{value:"2.\u51cf\u5c11\u6a21\u5757\u89e3\u6790",id:"2\u51cf\u5c11\u6a21\u5757\u89e3\u6790",level:2},{value:"\u4ec0\u4e48\u53eb\u505a\u6a21\u5757\u89e3\u6790\uff1f",id:"\u4ec0\u4e48\u53eb\u505a\u6a21\u5757\u89e3\u6790",level:3},{value:"\u4e0d\u505a\u6a21\u5757\u89e3\u6790\u4f1a\u600e\u6837\uff1f",id:"\u4e0d\u505a\u6a21\u5757\u89e3\u6790\u4f1a\u600e\u6837",level:3},{value:"\u54ea\u4e9b\u6a21\u5757\u4e0d\u9700\u8981\u89e3\u6790\uff1f",id:"\u54ea\u4e9b\u6a21\u5757\u4e0d\u9700\u8981\u89e3\u6790",level:3},{value:"\u5982\u4f55\u8ba9\u67d0\u4e2a\u6a21\u5757\u4e0d\u8981\u89e3\u6790\uff1f",id:"\u5982\u4f55\u8ba9\u67d0\u4e2a\u6a21\u5757\u4e0d\u8981\u89e3\u6790",level:3},{value:"3.\u4f18\u5316loader\u6027\u80fd",id:"3\u4f18\u5316loader\u6027\u80fd",level:2},{value:"\u8fdb\u4e00\u6b65\u9650\u5236loader\u7684\u5e94\u7528\u8303\u56f4",id:"\u8fdb\u4e00\u6b65\u9650\u5236loader\u7684\u5e94\u7528\u8303\u56f4",level:3},{value:"\u7f13\u5b58loader\u7684\u7ed3\u679c",id:"\u7f13\u5b58loader\u7684\u7ed3\u679c",level:3},{value:"\u4e3aloader\u7684\u8fd0\u884c\u5f00\u542f\u591a\u7ebf\u7a0b",id:"\u4e3aloader\u7684\u8fd0\u884c\u5f00\u542f\u591a\u7ebf\u7a0b",level:3},{value:"4.\u70ed\u66ff\u6362 HMR",id:"4\u70ed\u66ff\u6362-hmr",level:2},{value:"\u4f7f\u7528\u548c\u539f\u7406",id:"\u4f7f\u7528\u548c\u539f\u7406",level:3},{value:"\u6837\u5f0f\u70ed\u66ff\u6362",id:"\u6837\u5f0f\u70ed\u66ff\u6362",level:3},{value:"5.\u624b\u52a8\u5206\u5305",id:"5\u624b\u52a8\u5206\u5305",level:2},{value:"\u57fa\u672c\u539f\u7406",id:"\u57fa\u672c\u539f\u7406",level:3},{value:"\u6253\u5305\u516c\u5171\u6a21\u5757",id:"\u6253\u5305\u516c\u5171\u6a21\u5757",level:3},{value:"\u4f7f\u7528\u516c\u5171\u6a21\u5757",id:"\u4f7f\u7528\u516c\u5171\u6a21\u5757",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"6.\u5f85\u66f4\u65b0",id:"6\u5f85\u66f4\u65b0",level:2}],k={toc:u};function s(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,t.Z)({},k,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1\u6027\u80fd\u4f18\u5316\u6982\u8ff0"},"1.\u6027\u80fd\u4f18\u5316\u6982\u8ff0"),(0,a.kt)("p",null,"\u8fd9\u91cc",(0,a.kt)("inlineCode",{parentName:"p"},"webpack"),"\u6240\u8bb2\u7684\u6027\u80fd\u4f18\u5316\u4e3b\u8981\u4f53\u73b0\u5728\u4e09\u4e2a\u65b9\u9762\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs2020-02-12-09-53-01.png",alt:"2020-02-12-09-53-01"})),(0,a.kt)("p",null,"\u8fd9\u91cc\u6240\u8bf4\u7684\u6784\u5efa\u6027\u80fd\uff0c\u662f\u6307\u5728",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u9636\u6bb5\u7684\u6784\u5efa\u6027\u80fd"),"\uff0c\u800c\u4e0d\u662f\u751f\u4ea7\u73af\u5883\u7684\u6784\u5efa\u6027\u80fd"),(0,a.kt)("p",null,"\u4f18\u5316\u7684\u76ee\u6807\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u662f\u964d\u4f4e\u4ece\u6253\u5305\u5f00\u59cb\uff0c\u5230\u4ee3\u7801\u6548\u679c\u5448\u73b0\u6240\u7ecf\u8fc7\u7684\u65f6\u95f4")),(0,a.kt)("p",null,"\u6784\u5efa\u6027\u80fd\u4f1a\u5f71\u54cd\u5f00\u53d1\u6548\u7387\u3002\u6784\u5efa\u6027\u80fd\u8d8a\u9ad8\uff0c\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u65f6\u95f4\u7684\u6d6a\u8d39\u8d8a\u5c11"),(0,a.kt)("h3",{id:"\u4f20\u8f93\u6027\u80fd"},(0,a.kt)("strong",{parentName:"h3"},"\u4f20\u8f93\u6027\u80fd")),(0,a.kt)("p",null,"\u4f20\u8f93\u6027\u80fd\u662f\u6307\uff0c\u6253\u5305\u540e\u7684JS\u4ee3\u7801\u4f20\u8f93\u5230\u6d4f\u89c8\u5668\u7ecf\u8fc7\u7684\u65f6\u95f4"),(0,a.kt)("p",null,"\u5728\u4f18\u5316\u4f20\u8f93\u6027\u80fd\u65f6\u8981\u8003\u8651\u5230\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u603b\u4f20\u8f93\u91cf\uff1a\u6240\u6709\u9700\u8981\u4f20\u8f93\u7684JS\u6587\u4ef6\u7684\u5185\u5bb9\u52a0\u8d77\u6765\uff0c\u5c31\u662f\u603b\u4f20\u8f93\u91cf\uff0c\u91cd\u590d\u4ee3\u7801\u8d8a\u5c11\uff0c\u603b\u4f20\u8f93\u91cf\u8d8a\u5c11"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u4ef6\u6570\u91cf\uff1a\u5f53\u8bbf\u95ee\u9875\u9762\u65f6\uff0c\u9700\u8981\u4f20\u8f93\u7684JS\u6587\u4ef6\u6570\u91cf\uff0c\u6587\u4ef6\u6570\u91cf\u8d8a\u591a\uff0chttp\u8bf7\u6c42\u8d8a\u591a\uff0c\u54cd\u5e94\u901f\u5ea6\u8d8a\u6162"),(0,a.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u7f13\u5b58\uff1aJS\u6587\u4ef6\u4f1a\u88ab\u6d4f\u89c8\u5668\u7f13\u5b58\uff0c\u88ab\u7f13\u5b58\u7684\u6587\u4ef6\u4e0d\u4f1a\u518d\u8fdb\u884c\u4f20\u8f93")),(0,a.kt)("h3",{id:"\u8fd0\u884c\u6027\u80fd"},(0,a.kt)("strong",{parentName:"h3"},"\u8fd0\u884c\u6027\u80fd")),(0,a.kt)("p",null,"\u8fd0\u884c\u6027\u80fd\u662f\u6307\uff0cJS\u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u7aef\u7684\u8fd0\u884c\u901f\u5ea6"),(0,a.kt)("p",null,"\u5b83\u4e3b\u8981\u53d6\u51b3\u4e8e\u6211\u4eec\u5982\u4f55\u4e66\u5199\u9ad8\u6027\u80fd\u7684\u4ee3\u7801"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6c38\u8fdc\u4e0d\u8981\u8fc7\u65e9\u7684\u5173\u6ce8\u4e8e\u6027\u80fd"),"\uff0c\u56e0\u4e3a\u4f60\u5728\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u65e0\u6cd5\u5b8c\u5168\u9884\u77e5\u6700\u7ec8\u7684\u8fd0\u884c\u6027\u80fd\uff0c\u8fc7\u65e9\u7684\u5173\u6ce8\u6027\u80fd\u4f1a\u6781\u5927\u7684\u964d\u4f4e\u5f00\u53d1\u6548\u7387"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u6027\u80fd\u4f18\u5316\u4e3b\u8981\u4ece\u4e0a\u9762\u4e09\u4e2a\u7ef4\u5ea6\u5165\u624b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\u4f18\u5316\u6ca1\u6709\u5b8c\u7f8e\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u9700\u8981\u5177\u4f53\u60c5\u51b5\u5177\u4f53\u5206\u6790")),(0,a.kt)("h2",{id:"2\u51cf\u5c11\u6a21\u5757\u89e3\u6790"},"2.\u51cf\u5c11\u6a21\u5757\u89e3\u6790"),(0,a.kt)("p",null,"\u63d0\u9ad8\u6784\u5efa\u6027\u80fd"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u53eb\u505a\u6a21\u5757\u89e3\u6790"},"\u4ec0\u4e48\u53eb\u505a\u6a21\u5757\u89e3\u6790\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221031150543053.png",alt:"image-20221031150543053"})),(0,a.kt)("p",null,"\u6a21\u5757\u89e3\u6790\u5305\u62ec\uff1a\u62bd\u8c61\u8bed\u6cd5\u6811\u5206\u6790\u3001\u4f9d\u8d56\u5206\u6790\u3001\u6a21\u5757\u8bed\u6cd5\u66ff\u6362"),(0,a.kt)("h3",{id:"\u4e0d\u505a\u6a21\u5757\u89e3\u6790\u4f1a\u600e\u6837"},"\u4e0d\u505a\u6a21\u5757\u89e3\u6790\u4f1a\u600e\u6837\uff1f"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221031150550059.png",alt:"image-20221031150550059"})),(0,a.kt)("p",null,"\u5982\u679c\u67d0\u4e2a\u6a21\u5757\u4e0d\u505a\u89e3\u6790\uff0c\u8be5\u6a21\u5757\u7ecf\u8fc7loader\u5904\u7406\u540e\u7684\u4ee3\u7801\u5c31\u662f\u6700\u7ec8\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709loader\u5bf9\u8be5\u6a21\u5757\u8fdb\u884c\u5904\u7406\uff0c\u8be5\u6a21\u5757\u7684\u6e90\u7801\u5c31\u662f\u6700\u7ec8\u6253\u5305\u7ed3\u679c\u7684\u4ee3\u7801\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u5bf9\u67d0\u4e2a\u6a21\u5757\u8fdb\u884c\u89e3\u6790\uff0c\u53ef\u4ee5\u7f29\u77ed\u6784\u5efa\u65f6\u95f4"),(0,a.kt)("h3",{id:"\u54ea\u4e9b\u6a21\u5757\u4e0d\u9700\u8981\u89e3\u6790"},"\u54ea\u4e9b\u6a21\u5757\u4e0d\u9700\u8981\u89e3\u6790\uff1f"),(0,a.kt)("p",null,"\u6a21\u5757\u4e2d\u65e0\u5176\u4ed6\u4f9d\u8d56\uff1a\u4e00\u4e9b\u5df2\u7ecf\u6253\u5305\u597d\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u6bd4\u5982jquery\u3001lodash"),(0,a.kt)("h3",{id:"\u5982\u4f55\u8ba9\u67d0\u4e2a\u6a21\u5757\u4e0d\u8981\u89e3\u6790"},"\u5982\u4f55\u8ba9\u67d0\u4e2a\u6a21\u5757\u4e0d\u8981\u89e3\u6790\uff1f"),(0,a.kt)("p",null,"\u914d\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"module.noParse"),"\uff0c\u5b83\u662f\u4e00\u4e2a\u6b63\u5219\uff0c\u88ab\u6b63\u5219\u5339\u914d\u5230\u7684\u6a21\u5757\u4e0d\u4f1a\u89e3\u6790"),(0,a.kt)("h2",{id:"3\u4f18\u5316loader\u6027\u80fd"},"3.\u4f18\u5316loader\u6027\u80fd"),(0,a.kt)("p",null,"\u63d0\u9ad8\u6784\u5efa\u6027\u80fd"),(0,a.kt)("h3",{id:"\u8fdb\u4e00\u6b65\u9650\u5236loader\u7684\u5e94\u7528\u8303\u56f4"},"\u8fdb\u4e00\u6b65\u9650\u5236loader\u7684\u5e94\u7528\u8303\u56f4"),(0,a.kt)("p",null,"\u601d\u8def\u662f\uff1a\u5bf9\u4e8e\u67d0\u4e9b\u5e93\uff0c\u4e0d\u4f7f\u7528loader"),(0,a.kt)("p",null,"\u4f8b\u5982\uff1ababel-loader\u53ef\u4ee5\u8f6c\u6362ES6\u6216\u66f4\u9ad8\u7248\u672c\u7684\u8bed\u6cd5\uff0c\u53ef\u662f\u6709\u4e9b\u5e93\u672c\u8eab\u5c31\u662f\u7528ES5\u8bed\u6cd5\u4e66\u5199\u7684\uff0c\u4e0d\u9700\u8981\u8f6c\u6362\uff0c\u4f7f\u7528babel-loader\u53cd\u800c\u4f1a\u6d6a\u8d39\u6784\u5efa\u65f6\u95f4"),(0,a.kt)("p",null,"lodash\u5c31\u662f\u8fd9\u6837\u7684\u4e00\u4e2a\u5e93"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"lodash\u662f\u5728ES5\u4e4b\u524d\u51fa\u73b0\u7684\u5e93\uff0c\u4f7f\u7528\u7684\u662fES3\u8bed\u6cd5")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"module.rule.exclude"),"\u6216",(0,a.kt)("inlineCode",{parentName:"p"},"module.rule.include"),"\uff0c\u6392\u9664\u6216\u4ec5\u5305\u542b\u9700\u8981\u5e94\u7528loader\u7684\u573a\u666f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                exclude: /lodash/,\n                use: "babel-loader"\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u66b4\u529b\u4e00\u70b9\uff0c\u751a\u81f3\u53ef\u4ee5\u6392\u9664\u6389",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u76ee\u5f55\u4e2d\u7684\u6a21\u5757\uff0c\u6216\u4ec5\u8f6c\u6362",(0,a.kt)("inlineCode",{parentName:"p"},"src"),"\u76ee\u5f55\u7684\u6a21\u5757"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n    module: {\n        rules: [\n            {\n                test: /\\.js$/,\n                exclude: /node_modules/,//\u8fd9\u4e48\u505a\u6bd4\u8f83\u66b4\u529b\uff0c\u56e0\u4e3a\u5927\u591a\u6570\u7684\u5e93\u90fd\u5df2\u7ecf\u505a\u4e86\u517c\u5bb9\u6027\u5904\u7406\n                //\u6216\n                // include: /src/,\n                use: "babel-loader"\n            }\n        ]\n    }\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u505a\u6cd5\u662f\u5bf9loader\u7684\u8303\u56f4\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u9650\u5236\uff0c\u548cnoParse\u4e0d\u51b2\u7a81\uff0c\u60f3\u60f3\u770b\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u51b2\u7a81")),(0,a.kt)("h3",{id:"\u7f13\u5b58loader\u7684\u7ed3\u679c"},"\u7f13\u5b58loader\u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u57fa\u4e8e\u4e00\u79cd\u5047\u8bbe\uff1a\u5982\u679c\u67d0\u4e2a\u6587\u4ef6\u5185\u5bb9\u4e0d\u53d8\uff0c\u7ecf\u8fc7\u76f8\u540c\u7684loader\u89e3\u6790\u540e\uff0c\u89e3\u6790\u540e\u7684\u7ed3\u679c\u4e5f\u4e0d\u53d8"),(0,a.kt)("p",null,"\u4e8e\u662f\uff0c\u53ef\u4ee5\u5c06loader\u7684\u89e3\u6790\u7ed3\u679c\u4fdd\u5b58\u4e0b\u6765\uff0c\u8ba9\u540e\u7eed\u7684\u89e3\u6790\u76f4\u63a5\u4f7f\u7528\u4fdd\u5b58\u7684\u7ed3\u679c"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cache-loader"),"\u53ef\u4ee5\u5b9e\u73b0\u8fd9\u6837\u7684\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.js$/,\n        use: [\'cache-loader\',\n          //\u4e5f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u5f0f\uff0c\u8fdb\u884c\u4e00\u4e9b\u914d\u7f6e\n          // {\n          //   loader: "cache-loader",\n          //   options:{\n          //     cacheDirectory: "./cache"\n          //   }\n          // },\n              ......loaders]\n        \n      },\n    ],\n  },\n};\n')),(0,a.kt)("p",null,"\u6709\u8da3\u7684\u662f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"cache-loader"),"\u653e\u5230\u6700\u524d\u9762\uff0c\u5374\u80fd\u591f\u51b3\u5b9a\u540e\u7eed\u7684loader\u662f\u5426\u8fd0\u884c"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0cloader\u7684\u8fd0\u884c\u8fc7\u7a0b\u4e2d\uff0c\u8fd8\u5305\u542b\u4e00\u4e2a\u8fc7\u7a0b\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"pitch")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221101150245175.png",alt:"image-20221101150245175"})),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8fd4\u56de\u7ed3\u679c\u624d\u8fdb\u884c\u4e0b\u4e00\u4e2apitch\u3002\u901a\u8fc7\u662f\u5426\u8fd4\u56de\u7ed3\u679c\u6765\u63a7\u5236\u4e0b\u4e00\u6b65\u5982\u4f55\u6267\u884c\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cache-loader"),"\u8fd8\u53ef\u4ee5\u5b9e\u73b0\u5404\u81ea\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\uff0c\u5177\u4f53\u65b9\u5f0f\u89c1\u6587\u6863"),(0,a.kt)("h3",{id:"\u4e3aloader\u7684\u8fd0\u884c\u5f00\u542f\u591a\u7ebf\u7a0b"},"\u4e3aloader\u7684\u8fd0\u884c\u5f00\u542f\u591a\u7ebf\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thread-loader"),"\u4f1a\u5f00\u542f\u4e00\u4e2a\u7ebf\u7a0b\u6c60\uff0c\u7ebf\u7a0b\u6c60\u4e2d\u5305\u542b\u9002\u91cf\u7684\u7ebf\u7a0b"),(0,a.kt)("p",null,"\u5b83\u4f1a\u628a\u540e\u7eed\u7684loader\u653e\u5230\u7ebf\u7a0b\u6c60\u7684\u7ebf\u7a0b\u4e2d\u8fd0\u884c\uff0c\u4ee5\u63d0\u9ad8\u6784\u5efa\u6548\u7387"),(0,a.kt)("p",null,"\u7531\u4e8e\u540e\u7eed\u7684loader\u4f1a\u653e\u5230\u65b0\u7684\u7ebf\u7a0b\u4e2d\uff0c\u6240\u4ee5\uff0c\u540e\u7eed\u7684loader\u4e0d\u80fd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 webpack api \u751f\u6210\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 plugin api"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u8bbf\u95ee webpack options")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u4e2d\uff0c\u53ef\u4ee5\u8fdb\u884c\u6d4b\u8bd5\uff0c\u6765\u51b3\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"thread-loader"),"\u653e\u5230\u4ec0\u4e48\u4f4d\u7f6e")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7279\u522b\u6ce8\u610f"),"\uff0c\u5f00\u542f\u548c\u7ba1\u7406\u7ebf\u7a0b\u9700\u8981\u6d88\u8017\u65f6\u95f4\uff0c\u5728\u5c0f\u578b\u9879\u76ee\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"thread-loader"),"\u53cd\u800c\u4f1a\u589e\u52a0\u6784\u5efa\u65f6\u95f4"),(0,a.kt)("h2",{id:"4\u70ed\u66ff\u6362-hmr"},"4.\u70ed\u66ff\u6362 HMR"),(0,a.kt)("p",null,"\u63d0\u9ad8\u6784\u5efa\u6027\u80fd"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u70ed\u66ff\u6362\u5e76\u4e0d\u80fd\u964d\u4f4e\u6784\u5efa\u65f6\u95f4\uff08\u53ef\u80fd\u8fd8\u4f1a\u7a0d\u5fae\u589e\u52a0\uff09\uff0c\u4f46\u53ef\u4ee5\u964d\u4f4e\u4ee3\u7801\u6539\u52a8\u5230\u6548\u679c\u5448\u73b0\u7684\u65f6\u95f4")),(0,a.kt)("p",null,"\u53eb\u505a\u70ed\u6a21\u5757\u66ff\u6362\uff08hot module replace\uff09"),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u65f6\uff0c\u8003\u8651\u4ee3\u7801\u6539\u52a8\u5230\u6548\u679c\u5448\u73b0\u7684\u8fc7\u7a0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221101153059491.png",alt:"image-20221101153059491"})),(0,a.kt)("p",null,"\u800c\u4f7f\u7528\u4e86\u70ed\u66ff\u6362\u540e\uff0c\u6d41\u7a0b\u53d1\u751f\u4e86\u53d8\u5316"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221101153108221.png",alt:"image-20221101153108221"})),(0,a.kt)("h3",{id:"\u4f7f\u7528\u548c\u539f\u7406"},"\u4f7f\u7528\u548c\u539f\u7406"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u66f4\u6539\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  devServer:{\n    hot:true // \u5f00\u542fHMR\n  },\n  plugins:[ \n    // \u53ef\u9009\n    new webpack.HotModuleReplacementPlugin()\n  ]\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u66f4\u6539\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// index.js\n\nif(module.hot){ // \u662f\u5426\u5f00\u542f\u4e86\u70ed\u66f4\u65b0\n  module.hot.accept() // \u63a5\u53d7\u70ed\u66f4\u65b0\n}\n")),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u53c2\u4e0e\u6700\u7ec8\u8fd0\u884c\uff01"),(0,a.kt)("p",null,"\u5f53\u5f00\u542f\u4e86\u70ed\u66f4\u65b0\u540e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u4f1a\u5411\u6253\u5305\u7ed3\u679c\u4e2d\u6ce8\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"module.hot"),"\u5c5e\u6027"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u4e0d\u7ba1\u662f\u5426\u5f00\u542f\u4e86\u70ed\u66f4\u65b0\uff0c\u5f53\u91cd\u65b0\u6253\u5305\u540e\uff0c\u90fd\u4f1a\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"location.reload"),"\u5237\u65b0\u9875\u9762"),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u8fd0\u884c\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"module.hot.accept()"),"\uff0c\u5c06\u6539\u53d8\u8fd9\u4e00\u884c\u4e3a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"module.hot.accept()"),"\u7684\u4f5c\u7528\u662f\u8ba9",(0,a.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"socket"),"\u7ba1\u9053\uff0c\u628a\u670d\u52a1\u5668\u66f4\u65b0\u7684\u5185\u5bb9\u53d1\u9001\u5230\u6d4f\u89c8\u5668"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221101153118147.png",alt:"image-20221101153118147"})),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u5c06\u7ed3\u679c\u4ea4\u7ed9\u63d2\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"HotModuleReplacementPlugin"),"\u6ce8\u5165\u7684\u4ee3\u7801\u6267\u884c"),(0,a.kt)("p",null,"\u63d2\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"HotModuleReplacementPlugin"),"\u4f1a\u6839\u636e\u8986\u76d6\u539f\u59cb\u4ee3\u7801\uff0c\u7136\u540e\u8ba9\u4ee3\u7801\u91cd\u65b0\u6267\u884c"),(0,a.kt)("p",null,"\uff08\u670d\u52a1\u5668\u5148\u544a\u8bc9\u5ba2\u6237\u7aef\u6709\u4e1c\u897f\u66f4\u65b0\u4e86\uff0c\u5ba2\u6237\u7aef\u6536\u5230\u540e\u4f1a\u8bf7\u6c42\u670d\u52a1\u5668\u54ea\u91cc\u66f4\u65b0\u4e86\u3002\u670d\u52a1\u5668\u8fd4\u56de\u66f4\u65b0\u90e8\u5206\u7684\u4ee3\u7801\u3002\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6240\u4ee5\uff0c\u70ed\u66ff\u6362\u53d1\u751f\u5728\u4ee3\u7801\u8fd0\u884c\u671f")),(0,a.kt)("h3",{id:"\u6837\u5f0f\u70ed\u66ff\u6362"},"\u6837\u5f0f\u70ed\u66ff\u6362"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6837\u5f0f\u4e5f\u662f\u53ef\u4ee5\u4f7f\u7528\u70ed\u66ff\u6362\u7684\uff0c\u4f46\u9700\u8981\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"style-loader")),(0,a.kt)("p",null,"\u56e0\u4e3a\u70ed\u66ff\u6362\u53d1\u751f\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"HotModuleReplacementPlugin"),"\u53ea\u4f1a\u7b80\u5355\u7684\u91cd\u65b0\u8fd0\u884c\u6a21\u5757\u4ee3\u7801"),(0,a.kt)("p",null,"\u56e0\u6b64",(0,a.kt)("inlineCode",{parentName:"p"},"style-loader"),"\u7684\u4ee3\u7801\u4e00\u8fd0\u884c\uff0c\u5c31\u4f1a\u91cd\u65b0\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"style"),"\u5143\u7d20\u4e2d\u7684\u6837\u5f0f"),(0,a.kt)("p",null,"\u800c",(0,a.kt)("inlineCode",{parentName:"p"},"mini-css-extract-plugin"),"\uff0c\u7531\u4e8e\u5b83\u751f\u6210\u6587\u4ef6\u662f\u5728",(0,a.kt)("strong",{parentName:"p"},"\u6784\u5efa\u671f\u95f4"),"\uff0c\u8fd0\u884c\u671f\u95f4\u5e76\u4f1a\u4e5f\u65e0\u6cd5\u6539\u52a8\u6587\u4ef6\uff0c\u56e0\u6b64\u5b83\u5bf9\u4e8e\u70ed\u66ff\u6362\u662f\u65e0\u6548\u7684"),(0,a.kt)("h2",{id:"5\u624b\u52a8\u5206\u5305"},"5.\u624b\u52a8\u5206\u5305"),(0,a.kt)("p",null,"\u63d0\u9ad8\u4f20\u8f93\u6027\u80fd"),(0,a.kt)("h3",{id:"\u57fa\u672c\u539f\u7406"},"\u57fa\u672c\u539f\u7406"),(0,a.kt)("p",null,"\u624b\u52a8\u5206\u5305\u7684\u603b\u4f53\u601d\u8def\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5148\u5355\u72ec\u7684\u6253\u5305\u516c\u5171\u6a21\u5757")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgsimage-20221101162010839.png",alt:"image-20221101162010839"})),(0,a.kt)("p",null,"\u516c\u5171\u6a21\u5757\u4f1a\u88ab\u6253\u5305\u6210\u4e3a\u52a8\u6001\u94fe\u63a5\u5e93(dll Dynamic Link Library)\uff0c\u5e76\u751f\u6210\u8d44\u6e90\u6e05\u5355"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u5165\u53e3\u6a21\u5757\u8fdb\u884c\u6b63\u5e38\u6253\u5305")),(0,a.kt)("p",null,"\u6253\u5305\u65f6\uff0c\u5982\u679c\u53d1\u73b0\u6a21\u5757\u4e2d\u4f7f\u7528\u4e86\u8d44\u6e90\u6e05\u5355\u4e2d\u63cf\u8ff0\u7684\u6a21\u5757\uff0c\u5219\u4e0d\u4f1a\u5f62\u6210\u4e0b\u9762\u7684\u4ee3\u7801\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'//\u6e90\u7801\uff0c\u5165\u53e3\u6587\u4ef6index.js\nimport $ from "jquery"\nimport _ from "lodash"\n_.isArray($(".red"));\n')),(0,a.kt)("p",null,"\u7531\u4e8e\u8d44\u6e90\u6e05\u5355\u4e2d\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"p"},"jquery"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"lodash"),"\u4e24\u4e2a\u6a21\u5757\uff0c\u56e0\u6b64\u6253\u5305\u7ed3\u679c\u7684\u5927\u81f4\u683c\u5f0f\u662f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'(function(modules){\n  //...\n})({\n  // index.js\u6587\u4ef6\u7684\u6253\u5305\u7ed3\u679c\u5e76\u6ca1\u6709\u53d8\u5316\n  "./src/index.js":\n  function(module, exports, __webpack_require__){\n    var $ = __webpack_require__("./node_modules/jquery/index.js")\n    var _ = __webpack_require__("./node_modules/lodash/index.js")\n    _.isArray($(".red"));\n  },\n  // \u7531\u4e8e\u8d44\u6e90\u6e05\u5355\u4e2d\u5b58\u5728\uff0cjquery\u7684\u4ee3\u7801\u5e76\u4e0d\u4f1a\u51fa\u73b0\u5728\u8fd9\u91cc\n  "./node_modules/jquery/index.js":\n  function(module, exports, __webpack_require__){\n    module.exports = jquery;\n  },\n  // \u7531\u4e8e\u8d44\u6e90\u6e05\u5355\u4e2d\u5b58\u5728\uff0clodash\u7684\u4ee3\u7801\u5e76\u4e0d\u4f1a\u51fa\u73b0\u5728\u8fd9\u91cc\n  "./node_modules/lodash/index.js":\n  function(module, exports, __webpack_require__){\n    module.exports = lodash;\n  }\n})\n')),(0,a.kt)("h3",{id:"\u6253\u5305\u516c\u5171\u6a21\u5757"},"\u6253\u5305\u516c\u5171\u6a21\u5757"),(0,a.kt)("p",null,"\u6253\u5305\u516c\u5171\u6a21\u5757\u662f\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u7684"),"\u6253\u5305\u8fc7\u7a0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5355\u72ec\u6253\u5305\u516c\u5171\u6a21\u5757\uff0c\u66b4\u9732\u53d8\u91cf\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.dll.config.js\nmodule.exports = {\n  mode: "production",\n  entry: {\n    jquery: ["jquery"],\n    lodash: ["lodash"]\n  },\n  output: {\n    filename: "dll/[name].js",\n    library: "[name]"\n  }\n};\n\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DllPlugin"),"\u751f\u6210\u8d44\u6e90\u6e05\u5355")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// webpack.dll.config.js\nmodule.exports = {\n  plugins: [\n    new webpack.DllPlugin({\n      path: path.resolve(__dirname, "dll", "[name].manifest.json"), //\u8d44\u6e90\u6e05\u5355\u7684\u4fdd\u5b58\u4f4d\u7f6e\n      name: "[name]"//\u8d44\u6e90\u6e05\u5355\u4e2d\uff0c\u66b4\u9732\u7684\u53d8\u91cf\u540d\n    })\n  ]\n};\n\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u540e\uff0c\u5373\u53ef\u5b8c\u6210\u516c\u5171\u6a21\u5757\u6253\u5305"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u516c\u5171\u6a21\u5757"},"\u4f7f\u7528\u516c\u5171\u6a21\u5757"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u4e2d\u624b\u52a8\u5f15\u5165\u516c\u5171\u6a21\u5757")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="./dll/jquery.js"><\/script>\n<script src="./dll/lodash.js"><\/script>\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"li"},"clean-webpack-plugin"))),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u4e86\u63d2\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"clean-webpack-plugin"),"\uff0c\u4e3a\u4e86\u907f\u514d\u5b83\u628a\u516c\u5171\u6a21\u5757\u6e05\u9664\uff0c\u9700\u8981\u505a\u51fa\u4ee5\u4e0b\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new CleanWebpackPlugin({\n  // \u8981\u6e05\u9664\u7684\u6587\u4ef6\u6216\u76ee\u5f55\n  // \u6392\u9664\u6389dll\u76ee\u5f55\u672c\u8eab\u548c\u5b83\u91cc\u9762\u7684\u6587\u4ef6\n  cleanOnceBeforeBuildPatterns: [\"**/*\", '!dll', '!dll/*']\n})\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u76ee\u5f55\u548c\u6587\u4ef6\u7684\u5339\u914d\u89c4\u5219\u4f7f\u7528\u7684\u662f",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/globby#globbing-patterns"},"globbing patterns"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DllReferencePlugin"),"\u63a7\u5236\u6253\u5305\u7ed3\u679c")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  plugins:[\n    new webpack.DllReferencePlugin({\n      manifest: require("./dll/jquery.manifest.json")\n    }),\n    new webpack.DllReferencePlugin({\n      manifest: require("./dll/lodash.manifest.json")\n    })\n  ]\n}\n\n')),(0,a.kt)("h3",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6253\u5305\u7684\u8fc7\u7a0b"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f00\u542f",(0,a.kt)("inlineCode",{parentName:"li"},"output.library"),"\u66b4\u9732\u516c\u5171\u6a21\u5757"),(0,a.kt)("li",{parentName:"ol"},"\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DllPlugin"),"\u521b\u5efa\u8d44\u6e90\u6e05\u5355"),(0,a.kt)("li",{parentName:"ol"},"\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"DllReferencePlugin"),"\u4f7f\u7528\u8d44\u6e90\u6e05\u5355")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6253\u5305\u7684\u6ce8\u610f\u4e8b\u9879"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u8d44\u6e90\u6e05\u5355\u4e0d\u53c2\u4e0e\u8fd0\u884c\uff0c\u53ef\u4ee5\u4e0d\u653e\u5230\u6253\u5305\u76ee\u5f55\u4e2d"),(0,a.kt)("li",{parentName:"ol"},"\u8bb0\u5f97\u624b\u52a8\u5f15\u5165\u516c\u5171JS\uff0c\u4ee5\u53ca\u907f\u514d\u88ab\u5220\u9664"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u8981\u5bf9\u5c0f\u578b\u7684\u516c\u5171JS\u5e93\u4f7f\u7528")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f18\u70b9"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6781\u5927\u63d0\u5347\u81ea\u8eab\u6a21\u5757\u7684\u6253\u5305\u901f\u5ea6"),(0,a.kt)("li",{parentName:"ol"},"\u6781\u5927\u7684\u7f29\u5c0f\u4e86\u81ea\u8eab\u6587\u4ef6\u4f53\u79ef"),(0,a.kt)("li",{parentName:"ol"},"\u6709\u5229\u4e8e\u6d4f\u89c8\u5668\u7f13\u5b58\u7b2c\u4e09\u65b9\u5e93\u7684\u516c\u5171\u4ee3\u7801")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u975e\u5e38\u7e41\u7410"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u7b2c\u4e09\u65b9\u5e93\u4e2d\u5305\u542b\u91cd\u590d\u4ee3\u7801\uff0c\u5219\u6548\u679c\u4e0d\u592a\u7406\u60f3")),(0,a.kt)("h2",{id:"6\u5f85\u66f4\u65b0"},"6.\u5f85\u66f4\u65b0"))}s.isMDXComponent=!0}}]);