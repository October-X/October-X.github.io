"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3896],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2883:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},l="Promise\u7684\u94fe\u5f0f\u8c03\u7528",i={unversionedId:"interview/promise/Promise\u7684\u94fe\u5f0f\u8c03\u7528",id:"interview/promise/Promise\u7684\u94fe\u5f0f\u8c03\u7528",title:"Promise\u7684\u94fe\u5f0f\u8c03\u7528",description:"catch\u65b9\u6cd5",source:"@site/docs/interview/promise/2.Promise\u7684\u94fe\u5f0f\u8c03\u7528.md",sourceDirName:"interview/promise",slug:"/interview/promise/Promise\u7684\u94fe\u5f0f\u8c03\u7528",permalink:"/docs/interview/promise/Promise\u7684\u94fe\u5f0f\u8c03\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/promise/2.Promise\u7684\u94fe\u5f0f\u8c03\u7528.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"study",previous:{title:"Promise\u57fa\u7840",permalink:"/docs/interview/promise/Promise\u57fa\u7840"},next:{title:"Promise\u7684\u9759\u6001\u65b9\u6cd5",permalink:"/docs/interview/promise/Promise\u7684\u9759\u6001\u65b9\u6cd5"}},s={},c=[{value:"catch\u65b9\u6cd5",id:"catch\u65b9\u6cd5",level:2},{value:"\u94fe\u5f0f\u8c03\u7528",id:"\u94fe\u5f0f\u8c03\u7528",level:2},{value:"\u9093\u54e5\u7684\u89e3\u51b3\u65b9\u6848",id:"\u9093\u54e5\u7684\u89e3\u51b3\u65b9\u6848",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promise\u7684\u94fe\u5f0f\u8c03\u7528"},"Promise\u7684\u94fe\u5f0f\u8c03\u7528"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210618161125.png",alt:null})),(0,o.kt)("h2",{id:"catch\u65b9\u6cd5"},"catch\u65b9\u6cd5"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},".catch(onRejected)")," = ",(0,o.kt)("inlineCode",{parentName:"p"},".then(null, onRejected)")),(0,o.kt)("h2",{id:"\u94fe\u5f0f\u8c03\u7528"},"\u94fe\u5f0f\u8c03\u7528"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://october-x-image-host.oss-cn-hangzhou.aliyuncs.com/markdown-imgs20210621103501.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"then\u65b9\u6cd5\u5fc5\u5b9a\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684Promise")),(0,o.kt)("p",null,"\u53ef\u7406\u89e3\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"\u540e\u7eed\u5904\u7406\u4e5f\u662f\u4e00\u4e2a\u4efb\u52a1")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u65b0\u4efb\u52a1\u7684\u72b6\u6001\u53d6\u51b3\u4e8e\u540e\u7eed\u5904\u7406\uff1a"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u6ca1\u6709\u76f8\u5173\u7684\u540e\u7eed\u5904\u7406\uff0c\u65b0\u4efb\u52a1\u7684\u72b6\u6001\u548c\u524d\u4efb\u52a1\u4e00\u81f4\uff0c\u6570\u636e\u4e3a\u524d\u4efb\u52a1\u7684\u6570\u636e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u6709\u540e\u7eed\u5904\u7406\u4f46\u8fd8\u672a\u6267\u884c\uff0c\u65b0\u4efb\u52a1\u6302\u8d77\u3002")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"\u82e5\u540e\u7eed\u5904\u7406\u6267\u884c\u4e86\uff0c\u5219\u6839\u636e\u540e\u7eed\u5904\u7406\u7684\u60c5\u51b5\u786e\u5b9a\u65b0\u4efb\u52a1\u7684\u72b6\u6001"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u540e\u7eed\u5904\u7406\u6267\u884c\u65e0\u9519\uff0c\u65b0\u4efb\u52a1\u7684\u72b6\u6001\u4e3a\u5b8c\u6210\uff0c\u6570\u636e\u4e3a\u540e\u7eed\u5904\u7406\u7684\u8fd4\u56de\u503c"),(0,o.kt)("li",{parentName:"ul"},"\u540e\u7eed\u5904\u7406\u6267\u884c\u6709\u9519\uff0c\u65b0\u4efb\u52a1\u7684\u72b6\u6001\u4e3a\u5931\u8d25\uff0c\u6570\u636e\u4e3a\u5f02\u5e38\u5bf9\u8c61"),(0,o.kt)("li",{parentName:"ul"},"\u540e\u7eed\u6267\u884c\u540e\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u4efb\u52a1\u5bf9\u8c61\uff0c\u65b0\u4efb\u52a1\u7684\u72b6\u6001\u548c\u6570\u636e\u4e0e\u8be5\u4efb\u52a1\u5bf9\u8c61\u4e00\u81f4")))))),(0,o.kt)("p",null,"\u7531\u4e8e\u94fe\u5f0f\u4efb\u52a1\u7684\u5b58\u5728\uff0c\u5f02\u6b65\u4ee3\u7801\u62e5\u6709\u4e86\u66f4\u5f3a\u7684\u8868\u8fbe\u529b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5e38\u89c1\u4efb\u52a1\u5904\u7406\u4ee3\u7801\n\n/*\n * \u4efb\u52a1\u6210\u529f\u540e\uff0c\u6267\u884c\u5904\u74061\uff0c\u5931\u8d25\u5219\u6267\u884c\u5904\u74062\n */\npro.then(\u5904\u74061).catch(\u5904\u74062)\n\n/*\n * \u4efb\u52a1\u6210\u529f\u540e\uff0c\u4f9d\u6b21\u6267\u884c\u5904\u74061\u3001\u5904\u74062\n */\npro.then(\u5904\u74061).then(\u5904\u74062)\n\n/*\n * \u4efb\u52a1\u6210\u529f\u540e\uff0c\u4f9d\u6b21\u6267\u884c\u5904\u74061\u3001\u5904\u74062\uff0c\u82e5\u4efb\u52a1\u5931\u8d25\u6216\u524d\u9762\u7684\u5904\u7406\u6709\u9519\uff0c\u6267\u884c\u5904\u74063\n */\npro.then(\u5904\u74061).then(\u5904\u74062).catch(\u5904\u74063)\n")),(0,o.kt)("h2",{id:"\u9093\u54e5\u7684\u89e3\u51b3\u65b9\u6848"},"\u9093\u54e5\u7684\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5411\u67d0\u4f4d\u5973\u751f\u53d1\u9001\u4e00\u5219\u8868\u767d\u77ed\u4fe1\n// name: \u5973\u795e\u7684\u59d3\u540d\n// onFulffiled: \u6210\u529f\u540e\u7684\u56de\u8c03\n// onRejected: \u5931\u8d25\u540e\u7684\u56de\u8c03\nfunction sendMessage(name) {\n  return new Promise((resolve, reject) => {\n    // \u6a21\u62df \u53d1\u9001\u8868\u767d\u77ed\u4fe1\n    console.log(\n      `\u9093\u54e5 -> ${name}\uff1a\u6700\u8fd1\u6709\u8c23\u8a00\u8bf4\u6211\u559c\u6b22\u4f60\uff0c\u6211\u8981\u6f84\u6e05\u4e00\u4e0b\uff0c\u90a3\u4e0d\u662f\u8c23\u8a00\ud83d\ude18`\n    );\n    console.log(`\u7b49\u5f85${name}\u56de\u590d......`);\n    // \u6a21\u62df \u5973\u795e\u56de\u590d\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\n    setTimeout(() => {\n      // \u6a21\u62df \u670910%\u7684\u51e0\u7387\u6210\u529f\n      if (Math.random() <= 0.1) {\n        // \u6210\u529f\uff0c\u8c03\u7528 onFuffiled\uff0c\u5e76\u4f20\u9012\u5973\u795e\u7684\u56de\u590d\n        resolve(`${name} -> \u9093\u54e5\uff1a\u6211\u662f\u4e5d\uff0c\u4f60\u662f\u4e09\uff0c\u9664\u4e86\u4f60\u8fd8\u662f\u4f60\ud83d\ude18`);\n      } else {\n        // \u5931\u8d25\uff0c\u8c03\u7528 onRejected\uff0c\u5e76\u4f20\u9012\u5973\u795e\u7684\u56de\u590d\n        reject(`${name} -> \u9093\u54e5\uff1a\u4f60\u662f\u4e2a\u597d\u4eba\ud83d\ude1c`);\n      }\n    }, 1000);\n  });\n}\n\nsendMessage('\u674e\u5efa\u56fd')\n  .catch((reply) => {\n    // \u5931\u8d25\uff0c\u7ee7\u7eed\n    console.log(reply);\n    return sendMessage('\u738b\u5bcc\u8d35');\n  })\n  .catch((reply) => {\n    // \u5931\u8d25\uff0c\u7ee7\u7eed\n    console.log(reply);\n    return sendMessage('\u5468\u805a\u8d22');\n  })\n  .catch((reply) => {\n    // \u5931\u8d25\uff0c\u7ee7\u7eed\n    console.log(reply);\n    return sendMessage('\u5218\u4eba\u52c7');\n  })\n  .then(\n    (reply) => {\n      // \u6210\u529f\uff0c\u7ed3\u675f\n      console.log(reply);\n      console.log('\u9093\u54e5\u7ec8\u4e8e\u627e\u5230\u4e86\u81ea\u5df1\u7684\u4f34\u4fa3');\n    },\n    (reply) => {\n      // \u6700\u540e\u4e00\u4e2a\u4e5f\u5931\u8d25\u4e86\n      console.log(reply);\n      console.log('\u9093\u54e5\u547d\u72af\u5929\u715e\u5b64\u661f\uff0c\u65e0\u4f34\u7ec8\u8001\uff0c\u5b64\u72ec\u4e00\u751f');\n    }\n  );\n")))}m.isMDXComponent=!0}}]);