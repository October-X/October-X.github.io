"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,v=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,l={unversionedId:"interview/vue/\u66f4\u591a\u914d\u7f6e",id:"interview/vue/\u66f4\u591a\u914d\u7f6e",title:"\u66f4\u591a\u914d\u7f6e",description:"\u6240\u6709\u914d\u7f6e\u53c2\u8003\uff1avue-cli \u914d\u7f6e",source:"@site/docs/interview/vue/15.\u66f4\u591a\u914d\u7f6e.md",sourceDirName:"interview/vue",slug:"/interview/vue/\u66f4\u591a\u914d\u7f6e",permalink:"/docs/interview/vue/\u66f4\u591a\u914d\u7f6e",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/vue/15.\u66f4\u591a\u914d\u7f6e.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf",permalink:"/docs/interview/vue/\u6a21\u5f0f\u548c\u73af\u5883\u53d8\u91cf"},next:{title:"\u5f02\u6b65\u7ec4\u4ef6",permalink:"/docs/interview/vue/\u5f02\u6b65\u7ec4\u4ef6"}},p={},u=[],c={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6240\u6709\u914d\u7f6e\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE"},"vue-cli \u914d\u7f6e")),(0,i.kt)("h1",{id:"vueconfigjs"},"vue.config.js"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"devServer     \u67e5\u770b",(0,i.kt)("inlineCode",{parentName:"li"},"webpack.devServer")),(0,i.kt)("li",{parentName:"ul"},"publicPath"),(0,i.kt)("li",{parentName:"ul"},"outputDir"),(0,i.kt)("li",{parentName:"ul"},"runtimeCompiler"),(0,i.kt)("li",{parentName:"ul"},"transpileDependencies"),(0,i.kt)("li",{parentName:"ul"},"configureWebpack"),(0,i.kt)("li",{parentName:"ul"},"css.requireModuleExtension")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// vue-cli\u7684\u914d\u7f6e\u6587\u4ef6\nmodule.exports = {\n  devServer: {\n    proxy: {\n      '/api': {\n        target: 'http://test.my-site.com',\n      },\n    },\n  },\n  publicPath: '/news',\n  // runtimeCompiler: true,\n  // transpileDependencies: []\n  // configureWebpack: {\n  //   // webpack\u914d\u7f6e\n  // }\n  // css: {\n  //   requireModuleExtension: false,\n  // },\n};\n")),(0,i.kt)("p",null,"\u5982\u679c\u6211\u4eec\u8fd9\u91cc\u914d\u7f6e\u4e86publicPath\uff0c\u90a3\u4e48\u5728\u8def\u7531\u4e2d\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const router = new VueRouter({\n  // \u914d\u7f6e\n  routes, // \u8def\u7531\u5339\u914d\u89c4\u5219\n  mode: 'history',\n  base: process.env.BASE_URL,//\u8fd9\u8fb9\u7684process.env.BASE_URL\u5c31\u662f/news/,\u90a3\u4e48\u5728\u8def\u7531\u8def\u5f84\u524d\u9762\u90fd\u4f1a\u52a0\u4e0a\u8fd9\u4e2a\u57fa\u5730\u5740\u3002\n});\n")),(0,i.kt)("h1",{id:"babel\u914d\u7f6e"},"babel\u914d\u7f6e"),(0,i.kt)("p",null,"\u5199\u5230\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"babel.config.js"),"\u4e2d"),(0,i.kt)("h1",{id:"eslint"},"ESLint"),(0,i.kt)("p",null,"ESLint \u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"eslintConfig")," \u5b57\u6bb5\u6765\u914d\u7f6e\u3002"),(0,i.kt)("h1",{id:"postcss"},"postcss"),(0,i.kt)("p",null,"\u5199\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"postcss.config.js")),(0,i.kt)("h1",{id:"\u66f4\u591a\u547d\u4ee4"},"\u66f4\u591a\u547d\u4ee4"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"vue ui"),"\u901a\u8fc7\u7f51\u9875\u53ef\u89c6\u5316\u8fdb\u884c\u9879\u76ee\u7684\u521b\u5efa\u548c\u7ba1\u7406"),(0,i.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"**vue add @vue/**xxx"),"\u547d\u4ee4\u8fdb\u884c\u4e00\u4e9b\u5b89\u88c5\u3002\u6bd4\u5982",(0,i.kt)("inlineCode",{parentName:"li"},"router"),"\u6216\u8005",(0,i.kt)("inlineCode",{parentName:"li"},"vuex"))))}s.isMDXComponent=!0}}]);