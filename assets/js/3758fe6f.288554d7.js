"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5968],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),k=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=k(e.components);return n.createElement(i.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),o=k(a),N=l,c=o["".concat(i,".").concat(N)]||o[N]||u[N]||p;return a?n.createElement(c,r(r({ref:t},s),{},{components:a})):n.createElement(c,r({ref:t},s))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,r=new Array(p);r[0]=N;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[o]="string"==typeof e?e:l,r[1]=m;for(var k=2;k<p;k++)r[k]=a[k];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},6703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>o,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var n=a(7462),l=(a(7294),a(3905));const p={},r="File API",m={unversionedId:"interview/browser/File API",id:"interview/browser/File API",title:"File API",description:"\u672c\u6587\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a",source:"@site/docs/interview/browser/File API.md",sourceDirName:"interview/browser",slug:"/interview/browser/File API",permalink:"/docs/interview/browser/File API",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/browser/File API.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u76ee\u5f55",permalink:"/docs/interview/guides"},next:{title:"IndexedDB",permalink:"/docs/interview/browser/IndexedDB"}},i={},k=[{value:"<em>File API</em> \u4ecb\u7ecd",id:"file-api-\u4ecb\u7ecd",level:2},{value:"<em>File</em> \u5bf9\u8c61",id:"file-\u5bf9\u8c61",level:2},{value:"\u6784\u9020\u51fd\u6570",id:"\u6784\u9020\u51fd\u6570",level:3},{value:"\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5",level:3},{value:"<em>FileList</em> \u5bf9\u8c61",id:"filelist-\u5bf9\u8c61",level:2},{value:"<em>FileReader</em> \u5bf9\u8c61",id:"filereader-\u5bf9\u8c61",level:2},{value:"\u7efc\u5408\u5b9e\u4f8b",id:"\u7efc\u5408\u5b9e\u4f8b",level:2},{value:"<em>File System Access API</em>",id:"file-system-access-api",level:2}],s={toc:k};function o(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-api"},"File API"),(0,l.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u5305\u542b\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"File API")," \u4ecb\u7ecd"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"File")," \u5bf9\u8c61",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570"),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"FileList")," \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"FileReader")," \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u7efc\u5408\u5b9e\u4f8b")),(0,l.kt)("h2",{id:"file-api-\u4ecb\u7ecd"},(0,l.kt)("em",{parentName:"h2"},"File API")," \u4ecb\u7ecd"),(0,l.kt)("p",null,"\u6211\u4eec\u77e5\u9053\uff0c",(0,l.kt)("em",{parentName:"p"},"HTML")," \u7684 ",(0,l.kt)("em",{parentName:"p"},"input")," \u8868\u5355\u63a7\u4ef6\uff0c\u5176 ",(0,l.kt)("em",{parentName:"p"},"type")," \u5c5e\u6027\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,l.kt)("em",{parentName:"p"},"file"),"\uff0c\u8868\u793a\u8fd9\u662f\u4e00\u4e2a\u4e0a\u4f20\u63a7\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" name="" id="">\n')),(0,l.kt)("p",null,"\u9009\u62e9\u6587\u4ef6\u524d\uff1a"),(0,l.kt)("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-02-022039.png",alt:"image-20211202102038796",width:"200"}),(0,l.kt)("p",null,"\u9009\u62e9\u6587\u4ef6\u540e\uff1a"),(0,l.kt)("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-02-022057.png",alt:"image-20211202102056757",width:"200"}),(0,l.kt)("p",null,"\u8fd9\u79cd\u505a\u6cd5\u7528\u6237\u4f53\u9a8c\u975e\u5e38\u7684\u5dee\uff0c\u6211\u4eec\u65e0\u6cd5",(0,l.kt)("strong",{parentName:"p"},"\u5728\u5ba2\u6237\u7aef"),"\u5bf9\u7528\u6237\u9009\u53d6\u7684\u6587\u4ef6\u8fdb\u884c ",(0,l.kt)("em",{parentName:"p"},"validate"),"\uff0c\u65e0\u6cd5\u8bfb\u53d6\u6587\u4ef6\u5927\u5c0f\uff0c\u65e0\u6cd5\u5224\u65ad\u6587\u4ef6\u7c7b\u578b\uff0c\u65e0\u6cd5\u9884\u89c8\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u591a\u6587\u4ef6\u4e0a\u4f20\uff0c",(0,l.kt)("em",{parentName:"p"},"JavaScript")," \u66f4\u662f\u56de\u5929\u4e4f\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" name="" id="" multiple>\n')),(0,l.kt)("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-02-022115.png",alt:"image-20211202102115626",width:"200"}),(0,l.kt)("p",null,"\u4f46\u73b0\u5728\u6709\u4e86 ",(0,l.kt)("em",{parentName:"p"},"HTML5")," \u63d0\u4f9b\u7684 ",(0,l.kt)("em",{parentName:"p"},"File API"),"\uff0c\u4e00\u5207\u90fd\u4e0d\u540c\u4e86\u3002\u8be5\u63a5\u53e3\u5141\u8bb8 ",(0,l.kt)("em",{parentName:"p"},"JavaScript")," \u8bfb\u53d6\u672c\u5730\u6587\u4ef6\uff0c\u4f46\u5e76\u4e0d\u80fd\u76f4\u63a5\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\uff0c\u800c\u662f\u8981\u4f9d\u8d56\u4e8e\u7528\u6237\u884c\u4e3a\uff0c\u6bd4\u5982\u7528\u6237\u5728 ",(0,l.kt)("em",{parentName:"p"},"type='file'")," \u63a7\u4ef6\u4e0a\u9009\u62e9\u4e86\u67d0\u4e2a\u6587\u4ef6\u6216\u8005\u7528\u6237\u5c06\u6587\u4ef6\u62d6\u62fd\u5230\u6d4f\u89c8\u5668\u4e0a\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"File Api")," \u63d0\u4f9b\u4e86\u4ee5\u4e0b\u51e0\u4e2a\u63a5\u53e3\u6765\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File"),"\uff1a\u5355\u4e2a\u6587\u4ef6\uff0c\u63d0\u4f9b\u4e86\u8bf8\u5982 ",(0,l.kt)("em",{parentName:"p"},"name\u3001file size\u3001mimetype")," \u7b49\u53ea\u8bfb\u6587\u4ef6\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileList"),"\uff1a\u4e00\u4e2a\u7c7b\u6570\u7ec4 ",(0,l.kt)("em",{parentName:"p"},"File")," \u5bf9\u8c61\u96c6\u5408")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader"),"\uff1a\u5f02\u6b65\u8bfb\u53d6\u6587\u4ef6\u7684\u63a5\u53e3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"Blob"),"\uff1a\u6587\u4ef6\u5bf9\u8c61\u7684\u4e8c\u8fdb\u5236\u539f\u59cb\u6570\u636e"))),(0,l.kt)("h2",{id:"file-\u5bf9\u8c61"},(0,l.kt)("em",{parentName:"h2"},"File")," \u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"File")," \u5bf9\u8c61\u4ee3\u8868\u4e00\u4e2a\u6587\u4ef6\uff0c\u7528\u6765\u8bfb\u5199\u6587\u4ef6\u4fe1\u606f\u3002\u5b83\u7ee7\u627f\u4e86 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5bf9\u8c61\uff0c\u6216\u8005\u8bf4\u662f\u4e00\u79cd\u7279\u6b8a\u7684 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5bf9\u8c61\uff0c\u6240\u6709\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5bf9\u8c61\u7684\u573a\u5408\u90fd\u53ef\u4ee5\u4f7f\u7528\u5b83\u3002"),(0,l.kt)("p",null,"\u6700\u5e38\u89c1\u7684\u4f7f\u7528\u573a\u5408\u662f\u8868\u5355\u7684\u6587\u4ef6\u4e0a\u4f20\u63a7\u4ef6\uff08\\<",(0,l.kt)("em",{parentName:"p"},'input type="file"'),">\uff09\uff0c\u7528\u6237\u9009\u4e2d\u6587\u4ef6\u4ee5\u540e\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1a\u751f\u6210\u4e00\u4e2a\u6570\u7ec4\uff0c\u91cc\u9762\u662f\u6bcf\u4e00\u4e2a\u7528\u6237\u9009\u4e2d\u7684\u6587\u4ef6\uff0c\u5b83\u4eec\u90fd\u662f ",(0,l.kt)("em",{parentName:"p"},"File")," \u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" name="" id="file">\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6 DOM \u5143\u7d20\nvar file = document.getElementById('file');\nfile.onchange = function(event){\n    var files = event.target.files;\n    console.log(files);\n    console.log(files[0] instanceof File);\n}\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",(0,l.kt)("em",{parentName:"p"},"files","[0]")," \u662f\u7528\u6237\u9009\u4e2d\u7684\u7b2c\u4e00\u4e2a\u6587\u4ef6\uff0c\u5b83\u662f ",(0,l.kt)("em",{parentName:"p"},"File")," \u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-02-022135.png",alt:"image-20211202102135071",width:"500"}),(0,l.kt)("h3",{id:"\u6784\u9020\u51fd\u6570"},"\u6784\u9020\u51fd\u6570"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u539f\u751f\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"File( )")," \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210 ",(0,l.kt)("em",{parentName:"p"},"File")," \u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new File(array, name [, options])\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"File( )")," \u6784\u9020\u51fd\u6570\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"array"),"\uff1a\u4e00\u4e2a\u6570\u7ec4\uff0c\u6210\u5458\u53ef\u4ee5\u662f\u4e8c\u8fdb\u5236\u5bf9\u8c61\u6216\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6587\u4ef6\u7684\u5185\u5bb9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"name"),"\uff1a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u6587\u4ef6\u540d\u6216\u6587\u4ef6\u8def\u5f84\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"options"),"\uff1a\u914d\u7f6e\u5bf9\u8c61\uff0c\u8bbe\u7f6e\u5b9e\u4f8b\u7684\u5c5e\u6027\u3002\u8be5\u53c2\u6570\u53ef\u9009\u3002"))),(0,l.kt)("p",null,"\u7b2c\u4e09\u4e2a\u53c2\u6570\u914d\u7f6e\u5bf9\u8c61\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e24\u4e2a\u5c5e\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"type"),"\uff1a\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u5b9e\u4f8b\u5bf9\u8c61\u7684 ",(0,l.kt)("em",{parentName:"p"},"MIME")," \u7c7b\u578b\uff0c\u9ed8\u8ba4\u503c\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"lastModified"),"\uff1a\u65f6\u95f4\u6233\uff0c\u8868\u793a\u4e0a\u6b21\u4fee\u6539\u7684\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("em",{parentName:"p"},"Date.now( )"),"\u3002"))),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var file = new File(\n  ['foo'],\n  'foo.txt',\n  {\n    type: 'text/plain',\n  }\n);\n")),(0,l.kt)("h3",{id:"\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"File")," \u5bf9\u8c61\u6709\u4ee5\u4e0b\u5b9e\u4f8b\u5c5e\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File.lastModified"),"\uff1a\u6700\u540e\u4fee\u6539\u65f6\u95f4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File.name"),"\uff1a\u6587\u4ef6\u540d\u6216\u6587\u4ef6\u8def\u5f84")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File.size"),"\uff1a\u6587\u4ef6\u5927\u5c0f\uff08\u5355\u4f4d\u5b57\u8282\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File.type"),"\uff1a\u6587\u4ef6\u7684 ",(0,l.kt)("em",{parentName:"p"},"MIME")," \u7c7b\u578b"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var file = new File(\n    ['foo'],\n    'foo.txt',\n    {\n        type: 'text/plain',\n    }\n);\nconsole.log(file.lastModified); // 1638340865992\nconsole.log(file.name); // foo.txt\nconsole.log(file.size); // 3\nconsole.log(file.type); // text/plain\n")),(0,l.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"File")," \u6587\u4ef6\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5e76\u6253\u5370\u51fa\u4e86\u8be5\u6587\u4ef6\u5bf9\u8c61\u7684\u8bf8\u5982 ",(0,l.kt)("em",{parentName:"p"},"lastModified\u3001name\u3001size\u3001type")," \u7b49\u5c5e\u6027\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"File")," \u5bf9\u8c61\u6ca1\u6709\u81ea\u5df1\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff0c\u7531\u4e8e\u7ee7\u627f\u4e86 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5bf9\u8c61\uff0c\u56e0\u6b64\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u7684\u5b9e\u4f8b\u65b9\u6cd5 ",(0,l.kt)("em",{parentName:"p"},"slice( )"),"\u3002"),(0,l.kt)("h2",{id:"filelist-\u5bf9\u8c61"},(0,l.kt)("em",{parentName:"h2"},"FileList")," \u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileList")," \u5bf9\u8c61\u662f\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u4ee3\u8868\u4e00\u7ec4\u9009\u4e2d\u7684\u6587\u4ef6\uff0c\u6bcf\u4e2a\u6210\u5458\u90fd\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"File")," \u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u5728\u6700\u4e0a\u9762\u7684\u90a3\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u770b\u5230\u89e6\u53d1 ",(0,l.kt)("em",{parentName:"p"},"change")," \u4e8b\u4ef6\u540e\uff0c",(0,l.kt)("em",{parentName:"p"},"event.target.files")," \u62ff\u5230\u7684\u5c31\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"FileList")," \u5b9e\u4f8b\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5b83\u4e3b\u8981\u51fa\u73b0\u5728\u4e24\u4e2a\u573a\u5408\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6587\u4ef6\u63a7\u4ef6\u8282\u70b9\uff08\\<",(0,l.kt)("em",{parentName:"p"},'input type="file"'),">\uff09\u7684 ",(0,l.kt)("em",{parentName:"p"},"files")," \u5c5e\u6027\uff0c\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"FileList")," \u5b9e\u4f8b\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u62d6\u62c9\u4e00\u7ec4\u6587\u4ef6\u65f6\uff0c\u76ee\u6807\u533a\u7684 ",(0,l.kt)("em",{parentName:"p"},"DataTransfer.files")," \u5c5e\u6027\uff0c\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"FileList")," \u5b9e\u4f8b\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <input type="file" name="" id="file">\n    <script>\n        // \u83b7\u53d6 DOM \u5143\u7d20\n        var file = document.getElementById(\'file\');\n        file.onchange = function(event){\n            var files = event.target.files;\n            console.log(files);\n            console.log(files instanceof FileList);\n        }\n    <\/script>\n</body>\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6587\u4ef6\u63a7\u4ef6\u7684 ",(0,l.kt)("em",{parentName:"p"},"files")," \u5c5e\u6027\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"FileList")," \u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileList")," \u7684\u5b9e\u4f8b\u5c5e\u6027\u4e3b\u8981\u662f ",(0,l.kt)("em",{parentName:"p"},"length"),"\uff0c\u8868\u793a\u5305\u542b\u591a\u5c11\u4e2a\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileList")," \u7684\u5b9e\u4f8b\u65b9\u6cd5\u4e3b\u8981\u662f ",(0,l.kt)("em",{parentName:"p"},"item( )"),"\uff0c\u7528\u6765\u8fd4\u56de\u6307\u5b9a\u4f4d\u7f6e\u7684\u5b9e\u4f8b\u3002\u5b83\u63a5\u53d7\u4e00\u4e2a\u6574\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8868\u793a\u4f4d\u7f6e\u7684\u5e8f\u53f7\uff08\u4ece\u96f6\u5f00\u59cb\uff09\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u7531\u4e8e ",(0,l.kt)("em",{parentName:"p"},"FileList")," \u7684\u5b9e\u4f8b\u662f\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u76f4\u63a5\u7528\u65b9\u62ec\u53f7\u8fd0\u7b97\u7b26\uff0c\u5373 ",(0,l.kt)("em",{parentName:"p"},"myFileList","[0]")," \u7b49\u540c\u4e8e ",(0,l.kt)("em",{parentName:"p"},"myFileList.item(0)"),"\uff0c\u6240\u4ee5\u4e00\u822c\u7528\u4e0d\u5230 ",(0,l.kt)("em",{parentName:"p"},"item( )")," \u65b9\u6cd5\u3002"),(0,l.kt)("h2",{id:"filereader-\u5bf9\u8c61"},(0,l.kt)("em",{parentName:"h2"},"FileReader")," \u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileReader")," \u5bf9\u8c61\u7528\u4e8e\u8bfb\u53d6 ",(0,l.kt)("em",{parentName:"p"},"File")," \u5bf9\u8c61\u6216 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5bf9\u8c61\u6240\u5305\u542b\u7684\u6587\u4ef6\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u539f\u751f\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"FileReader")," \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u751f\u6210 ",(0,l.kt)("em",{parentName:"p"},"FileReader")," \u5b9e\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var reader = new FileReader();\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileReader")," \u6709\u4ee5\u4e0b\u7684\u5b9e\u4f8b\u5c5e\u6027\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.error"),"\uff1a\u8bfb\u53d6\u6587\u4ef6\u65f6\u4ea7\u751f\u7684\u9519\u8bef\u5bf9\u8c61")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.readyState"),"\uff1a\u6574\u6570\uff0c\u8868\u793a\u8bfb\u53d6\u6587\u4ef6\u65f6\u7684\u5f53\u524d\u72b6\u6001\u3002\u4e00\u5171\u6709\u4e09\u79cd\u53ef\u80fd\u7684\u72b6\u6001\uff0c",(0,l.kt)("em",{parentName:"p"},"0")," \u8868\u793a\u5c1a\u672a\u52a0\u8f7d\u4efb\u4f55\u6570\u636e\uff0c",(0,l.kt)("em",{parentName:"p"},"1")," \u8868\u793a\u6570\u636e\u6b63\u5728\u52a0\u8f7d\uff0c",(0,l.kt)("em",{parentName:"p"},"2")," \u8868\u793a\u52a0\u8f7d\u5b8c\u6210\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.result"),"\uff1a\u8bfb\u53d6\u5b8c\u6210\u540e\u7684\u6587\u4ef6\u5185\u5bb9\uff0c\u6709\u53ef\u80fd\u662f\u5b57\u7b26\u4e32\uff0c\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"ArrayBuffer")," \u5b9e\u4f8b\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onabort"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"abort")," \u4e8b\u4ef6\uff08\u7528\u6237\u7ec8\u6b62\u8bfb\u53d6\u64cd\u4f5c\uff09\u7684\u76d1\u542c\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onerror"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"error")," \u4e8b\u4ef6\uff08\u8bfb\u53d6\u9519\u8bef\uff09\u7684\u76d1\u542c\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onload"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"load")," \u4e8b\u4ef6\uff08\u8bfb\u53d6\u64cd\u4f5c\u5b8c\u6210\uff09\u7684\u76d1\u542c\u51fd\u6570\uff0c\u901a\u5e38\u5728\u8fd9\u4e2a\u51fd\u6570\u91cc\u9762\u4f7f\u7528 ",(0,l.kt)("em",{parentName:"p"},"result")," \u5c5e\u6027\uff0c\u62ff\u5230\u6587\u4ef6\u5185\u5bb9\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onloadstart"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"loadstart")," \u4e8b\u4ef6\uff08\u8bfb\u53d6\u64cd\u4f5c\u5f00\u59cb\uff09\u7684\u76d1\u542c\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onloadend"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"loadend")," \u4e8b\u4ef6\uff08\u8bfb\u53d6\u64cd\u4f5c\u7ed3\u675f\uff09\u7684\u76d1\u542c\u51fd\u6570\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.onprogress"),"\uff1a",(0,l.kt)("em",{parentName:"p"},"progress")," \u4e8b\u4ef6\uff08\u8bfb\u53d6\u64cd\u4f5c\u8fdb\u884c\u4e2d\uff09\u7684\u76d1\u542c\u51fd\u6570\u3002"))),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u76d1\u542c ",(0,l.kt)("em",{parentName:"p"},"load")," \u4e8b\u4ef6\u7684\u4e00\u4e2a\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<body>\n    <input type="file" name="" id="file">\n    <script>\n        // \u83b7\u53d6 DOM \u5143\u7d20\n        var file = document.getElementById(\'file\');\n        file.onchange = function (event) {\n            var file = event.target.files[0]; // \u62ff\u5230\u7b2c\u4e00\u4e2a\u6587\u4ef6\n            var reader = new FileReader(); // \u521b\u5efa\u4e00\u4e2a FileReader \u5b9e\u4f8b\u5bf9\u8c61\n            // \u8bfb\u53d6\u6587\u4ef6\u6210\u529f\u540e\u89e6\u53d1 load \u4e8b\u4ef6\n            reader.onload = function (event) {\n                console.log(event.target.result)\n            };\n            // \u8bfb\u53d6\u6587\u4ef6\n            reader.readAsText(file);\n        }\n    <\/script>\n</body>\n')),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u6bcf\u5f53\u6587\u4ef6\u63a7\u4ef6\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u5c1d\u8bd5\u8bfb\u53d6\u7b2c\u4e00\u4e2a\u6587\u4ef6\u3002\u5982\u679c\u8bfb\u53d6\u6210\u529f\uff08 ",(0,l.kt)("em",{parentName:"p"},"load")," \u4e8b\u4ef6\u53d1\u751f\uff09\uff0c\u5c31\u6253\u5370\u51fa\u6587\u4ef6\u5185\u5bb9\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"FileReader")," \u6709\u4ee5\u4e0b\u5b9e\u4f8b\u65b9\u6cd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.abort( )"),"\uff1a\u7ec8\u6b62\u8bfb\u53d6\u64cd\u4f5c\uff0c",(0,l.kt)("em",{parentName:"p"},"readyState")," \u5c5e\u6027\u5c06\u53d8\u6210 ",(0,l.kt)("em",{parentName:"p"},"2"),"\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.readAsArrayBuffer( )"),"\uff1a\u4ee5 ",(0,l.kt)("em",{parentName:"p"},"ArrayBuffer")," \u7684\u683c\u5f0f\u8bfb\u53d6\u6587\u4ef6\uff0c\u8bfb\u53d6\u5b8c\u6210\u540e ",(0,l.kt)("em",{parentName:"p"},"result")," \u5c5e\u6027\u5c06\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"ArrayBuffer")," \u5b9e\u4f8b\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.readAsBinaryString( )"),"\uff1a\u8bfb\u53d6\u5b8c\u6210\u540e\uff0c",(0,l.kt)("em",{parentName:"p"},"result")," \u5c5e\u6027\u5c06\u8fd4\u56de\u539f\u59cb\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.readAsDataURL( )"),"\uff1a\u8bfb\u53d6\u5b8c\u6210\u540e\uff0c",(0,l.kt)("em",{parentName:"p"},"result")," \u5c5e\u6027\u5c06\u8fd4\u56de\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"Data URL")," \u683c\u5f0f\uff08 ",(0,l.kt)("em",{parentName:"p"},"Base64")," \u7f16\u7801\uff09\u7684\u5b57\u7b26\u4e32\uff0c\u4ee3\u8868\u6587\u4ef6\u5185\u5bb9\u3002\u5bf9\u4e8e\u56fe\u7247\u6587\u4ef6\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u53ef\u4ee5\u7528\u4e8e \\<",(0,l.kt)("em",{parentName:"p"},"img"),"> \u5143\u7d20\u7684 ",(0,l.kt)("em",{parentName:"p"},"src")," \u5c5e\u6027\u3002\u6ce8\u610f\uff0c\u8fd9\u4e2a\u5b57\u7b26\u4e32\u4e0d\u80fd\u76f4\u63a5\u8fdb\u884c ",(0,l.kt)("em",{parentName:"p"},"Base64")," \u89e3\u7801\uff0c\u5fc5\u987b\u628a\u524d\u7f00 ",(0,l.kt)("inlineCode",{parentName:"p"},"data:*/*;base64,")," \u4ece\u5b57\u7b26\u4e32\u91cc\u5220\u9664\u4ee5\u540e\uff0c\u518d\u8fdb\u884c\u89e3\u7801\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"FileReader.readAsText( )"),"\uff1a\u8bfb\u53d6\u5b8c\u6210\u540e\uff0c",(0,l.kt)("em",{parentName:"p"},"result")," \u5c5e\u6027\u5c06\u8fd4\u56de\u6587\u4ef6\u5185\u5bb9\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002\u8be5\u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4ee3\u8868\u6587\u4ef6\u7684 ",(0,l.kt)("em",{parentName:"p"},"Blob")," \u5b9e\u4f8b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u53ef\u9009\u7684\uff0c\u8868\u793a\u6587\u672c\u7f16\u7801\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("em",{parentName:"p"},"UTF-8"),"\u3002"))),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u8bfb\u53d6\u56fe\u7247\u6587\u4ef6\u7684\u4f8b\u5b50\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<input type="file" name="" id="file">\n<img src="" alt="" width="200"/>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u83b7\u53d6 DOM \u5143\u7d20\nvar file = document.getElementById('file');\nfile.onchange = function () {\n    var preview = document.querySelector('img');\n    var file = document.querySelector('input[type=file]').files[0];\n    var reader = new FileReader();\n\n    reader.addEventListener('load', function () {\n        preview.src = reader.result;\n    }, false);\n\n    if (file) {\n        reader.readAsDataURL(file);\n    }\n};\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u7528\u6237\u9009\u4e2d\u56fe\u7247\u6587\u4ef6\u4ee5\u540e\uff0c\u811a\u672c\u4f1a\u81ea\u52a8\u8bfb\u53d6\u6587\u4ef6\u5185\u5bb9\uff0c\u7136\u540e\u4f5c\u4e3a\u4e00\u4e2a ",(0,l.kt)("em",{parentName:"p"},"Data URL")," \u8d4b\u503c\u7ed9 \\<",(0,l.kt)("em",{parentName:"p"},"img"),"> \u5143\u7d20\u7684 ",(0,l.kt)("em",{parentName:"p"},"src")," \u5c5e\u6027\uff0c\u4ece\u800c\u628a\u56fe\u7247\u5c55\u793a\u51fa\u6765\u3002"),(0,l.kt)("h2",{id:"\u7efc\u5408\u5b9e\u4f8b"},"\u7efc\u5408\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u7efc\u5408\u5b9e\u4f8b\u6765\u8d2f\u7a7f\u4e0a\u9762\u6240\u5b66\u7684\u5185\u5bb9\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"HTML")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<label>\n    <input type="file" name="" id="file">\n    <div class="uploadImg">\n        \x3c!-- \u5236\u4f5c\u4e2d\u95f4\u7684\u5341\u5b57\u67b6 --\x3e\n        <div class="cross"></div>\n    </div>\n</label>\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"CSS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},'.uploadImg {\n    width: 150px;\n    height: 150px;\n    border: 1px dashed skyblue;\n    border-radius: 30px;\n    position: relative;\n    cursor: pointer;\n}\n\n.cross {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    left: calc(50% - 15px);\n    top: calc(50% - 15px);\n}\n\n.cross::before {\n    content: "";\n    width: 30px;\n    height: 2px;\n    background-color: skyblue;\n    position: absolute;\n    top: calc(50% - 1px);\n}\n\n.cross::after {\n    content: "";\n    width: 30px;\n    height: 2px;\n    background-color: skyblue;\n    position: absolute;\n    left: calc(50% - 15px);\n    top: calc(50% - 1px);\n    transform: rotate(90deg);\n}\n\ninput[type="file"] {\n    display: none;\n}\n')),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"JS")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var file = document.querySelector("#file");\nvar div = document.querySelector(".uploadImg");\nvar cross = document.querySelector(".cross");\nconsole.log(div.firstChild);\nfile.onchange = function () {\n    // \u521b\u5efa filereader \u7528\u6765\u8bfb\u53d6\u6587\u4ef6\n    var reader = new FileReader();\n    // \u83b7\u53d6\u5230\u6587\u4ef6\u5185\u5bb9\n    var content = file.files[0];\n    if (content) {\n        reader.readAsDataURL(content);\n    }\n    reader.onload = function () {\n        // \u8bbe\u7f6e div \u80cc\u666f\u56fe\u50cf\u4ece\u800c\u5b9e\u73b0\u9884\u89c8\u6548\u679c\n        div.style.background = `url(${reader.result}) center/cover no-repeat`\n        cross.style.opacity = 0;\n    }\n}\n')),(0,l.kt)("h2",{id:"file-system-access-api"},(0,l.kt)("em",{parentName:"h2"},"File System Access API")),(0,l.kt)("p",null,"\u770b\u4e0a\u53bb\u4e0a\u9762\u7684 ",(0,l.kt)("em",{parentName:"p"},"File API")," \u8fd8\u4e0d\u9519\uff0c\u80fd\u591f\u8bfb\u53d6\u5230\u672c\u5730\u7684\u6587\u4ef6\uff0c\u4f46\u662f\u5b83\u548c\u79bb\u7ebf\u5b58\u50a8\u6709\u5565\u5173\u7cfb\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u8981\u7684\u662f\u79bb\u7ebf\u5b58\u50a8\u529f\u80fd\uff0c\u80fd\u591f\u5c06\u6570\u636e\u5b58\u50a8\u5230\u672c\u5730\u3002"),(0,l.kt)("p",null,"\u55ef\uff0c\u786e\u5b9e ",(0,l.kt)("em",{parentName:"p"},"File API")," \u53ea\u80fd\u591f\u505a\u8bfb\u53d6\u7684\u5de5\u4f5c\uff0c\u4f46\u662f\u6709\u4e00\u5957\u65b0\u7684 ",(0,l.kt)("em",{parentName:"p"},"API")," \u89c4\u8303\u53c8\u63a8\u51fa\u6765\u4e86\uff0c\u53eb\u505a ",(0,l.kt)("em",{parentName:"p"},"File System Access API"),"\u3002"),(0,l.kt)("p",null,"\u662f\u7684\uff0c\u4f60\u6ca1\u6709\u542c\u9519\uff0c\u8fd9\u662f",(0,l.kt)("strong",{parentName:"p"},"\u4e24\u5957\u89c4\u8303"),"\uff0c\u5343\u4e07\u6ca1\u5f04\u6df7\u6dc6\u4e86\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File API")," \u89c4\u8303\uff1a",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://w3c.github.io/FileAPI/"},"https://w3c.github.io/FileAPI/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"File System Access API")," \u89c4\u8303\uff1a",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://wicg.github.io/file-system-access/"},"https://wicg.github.io/file-system-access/"))))),(0,l.kt)("p",null,"\u5173\u4e8e ",(0,l.kt)("em",{parentName:"p"},"File System Access API"),"\uff0c\u8fd9\u5957\u65b9\u6848\u5e94\u8be5\u662f\u672a\u6765\u7684\u4e3b\u89d2\u3002\u5b83\u63d0\u4f9b\u4e86\u6bd4\u8f83\u7a33\u59a5\u7684\u672c\u5730\u6587\u4ef6\u4ea4\u4e92\u6a21\u5f0f\uff0c\u5373\u4fdd\u8bc1\u4e86\u5b9e\u7528\u4ef7\u503c\uff0c\u53c8\u4fdd\u969c\u4e86\u7528\u6237\u7684\u6570\u636e\u5b89\u5168\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a ",(0,l.kt)("em",{parentName:"p"},"API")," \u5bf9\u524d\u7aef\u6765\u8bf4\u610f\u4e49\u4e0d\u5c0f\u3002\u6709\u4e86\u8fd9\u4e2a\u529f\u80fd\uff0c",(0,l.kt)("em",{parentName:"p"},"Web")," \u53ef\u4ee5\u63d0\u4f9b\u66f4\u5b8c\u6574\u7684\u529f\u80fd\u94fe\u8def\uff0c\u4ece\u6253\u5f00\u3001\u5230\u7f16\u8f91\u3001\u5230\u4fdd\u5b58\uff0c\u4e00\u5957\u5230\u5e95\u3002\u4e0d\u8fc7\u9057\u61be\u7684\u662f\u76ee\u524d\u53ea\u6709 ",(0,l.kt)("em",{parentName:"p"},"Chrome")," \u652f\u6301\u3002"),(0,l.kt)("img",{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-02-022204.png",alt:"image-20211202102203944",width:"600"}),(0,l.kt)("p",null,"\uff08\u56fe\u4e3a\u8be5 ",(0,l.kt)("em",{parentName:"p"},"API")," \u76ee\u524d\u5728\u5404\u5927\u6d4f\u89c8\u5668\u7684\u652f\u6301\u60c5\u51b5\uff0c\u53ef\u4ee5\u770b\u5230\u5168\u7ebf\u98d9\u7ea2\uff09"),(0,l.kt)("p",null,"\u76ee\u524d\u9488\u5bf9\u8be5 ",(0,l.kt)("em",{parentName:"p"},"API")," \u7684\u76f8\u5173\u8d44\u6599\uff0c\u65e0\u8bba\u662f\u4e2d\u6587\u8fd8\u662f\u82f1\u6587\u90fd\u6bd4\u8f83\u5c11\uff0c\u5982\u679c\u5bf9\u8be5 API \u611f\u5174\u8da3\u7684\u540c\u5b66\uff0c\u4e0b\u9762\u7ed9\u51fa\u4e24\u4e2a\u6269\u5c55\u9605\u8bfb\u8d44\u6599\uff08\u82f1\u6587\uff09"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"MDN"),"\uff1a",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API"},"https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("em",{parentName:"p"},"web.dev"),"\uff1a",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("a",{parentName:"em",href:"https://web.dev/file-system-access/"},"https://web.dev/file-system-access/"))))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"-",(0,l.kt)("em",{parentName:"p"},"EOF"),"-"))}o.isMDXComponent=!0}}]);