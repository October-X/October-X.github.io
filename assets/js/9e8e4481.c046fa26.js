"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4361],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},v=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(t),v=l,p=s["".concat(c,".").concat(v)]||s[v]||m[v]||r;return t?a.createElement(p,o(o({ref:n},d),{},{components:t})):a.createElement(p,o({ref:n},d))}));function p(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=v;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8419:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(7462),l=(t(7294),t(3905));const r={},o="BOM",i={unversionedId:"Java/web/BOM",id:"Java/web/BOM",title:"BOM",description:"\u7b2c\u4e00\u7ae0 DOM\u7f16\u7a0b",source:"@site/docs/Java/4.web/4.BOM.md",sourceDirName:"Java/4.web",slug:"/Java/web/BOM",permalink:"/docs/Java/web/BOM",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Java/4.web/4.BOM.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"Java",previous:{title:"JS",permalink:"/docs/Java/web/JS"},next:{title:"1.\u65e5\u5fd7\u6846\u67b6",permalink:"/docs/Java/\u57fa\u7840\u77e5\u8bc6/\u65e5\u5fd7\u6846\u67b6"}},c={},u=[{value:"\u7b2c\u4e00\u7ae0 DOM\u7f16\u7a0b",id:"\u7b2c\u4e00\u7ae0-dom\u7f16\u7a0b",level:2},{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:3},{value:"\u4e8c\u3001\u5143\u7d20\u8282\u70b9",id:"\u4e8c\u5143\u7d20\u8282\u70b9",level:3},{value:"1\u3001\u83b7\u53d6\u5143\u7d20\u8282\u70b9\u7684\u65b9\u6cd5",id:"1\u83b7\u53d6\u5143\u7d20\u8282\u70b9\u7684\u65b9\u6cd5",level:4},{value:"2\u3001\u4fee\u6539\u5143\u7d20\u8282\u70b9\u7684\u5185\u5bb9",id:"2\u4fee\u6539\u5143\u7d20\u8282\u70b9\u7684\u5185\u5bb9",level:4},{value:"3\u3001\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u8282\u70b9",id:"3\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u8282\u70b9",level:4},{value:"4\u3001\u65b0\u5efa\u4e00\u4e2a\u5143\u7d20\u8282\u70b9",id:"4\u65b0\u5efa\u4e00\u4e2a\u5143\u7d20\u8282\u70b9",level:4},{value:"5\u3001\u83b7\u53d6\u6240\u6709\u7684\u5b50\u8282\u70b9",id:"5\u83b7\u53d6\u6240\u6709\u7684\u5b50\u8282\u70b9",level:4},{value:"\u4e09\u3001\u5c5e\u6027\u8282\u70b9",id:"\u4e09\u5c5e\u6027\u8282\u70b9",level:3},{value:"1\u3001\u4f7f\u7528\u5143\u7d20\u8282\u70b9\u65b9\u6cd5\u8fdb\u884c\u589e\u5220\u67e5\u6539",id:"1\u4f7f\u7528\u5143\u7d20\u8282\u70b9\u65b9\u6cd5\u8fdb\u884c\u589e\u5220\u67e5\u6539",level:4},{value:"2\u3001\u4f7f\u7528\u5c5e\u6027\u8282\u70b9\u5bf9\u8c61\u5bf9\u5c5e\u6027\u672c\u8eab\u8fdb\u884c\u64cd\u4f5c",id:"2\u4f7f\u7528\u5c5e\u6027\u8282\u70b9\u5bf9\u8c61\u5bf9\u5c5e\u6027\u672c\u8eab\u8fdb\u884c\u64cd\u4f5c",level:4},{value:"\u7b2c\u4e8c\u7ae0 BOM\u7f16\u7a0b",id:"\u7b2c\u4e8c\u7ae0-bom\u7f16\u7a0b",level:2},{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0-1",level:3},{value:"\u4e8c\u3001\u5e38\u7528\u65b9\u6cd5",id:"\u4e8c\u5e38\u7528\u65b9\u6cd5",level:3},{value:"1\u3001setTimeout",id:"1settimeout",level:4},{value:"2\u3001setInterval",id:"2setinterval",level:4},{value:"3\u3001\u6d4f\u89c8\u5668\u81ea\u5e26\u5c0f\u578b\u6570\u636e\u5e93",id:"3\u6d4f\u89c8\u5668\u81ea\u5e26\u5c0f\u578b\u6570\u636e\u5e93",level:4},{value:"4\u3001\u5f39\u7a97\u5176\u5b9e\u6ca1\u6c42\u7528",id:"4\u5f39\u7a97\u5176\u5b9e\u6ca1\u6c42\u7528",level:4},{value:"5\u3001history",id:"5history",level:4},{value:"6\u3001navigator",id:"6navigator",level:4},{value:"5\u3001\u4e00\u70b9\u6ce8\u610f",id:"5\u4e00\u70b9\u6ce8\u610f",level:4}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bom"},"BOM"),(0,l.kt)("h2",{id:"\u7b2c\u4e00\u7ae0-dom\u7f16\u7a0b"},"\u7b2c\u4e00\u7ae0 DOM\u7f16\u7a0b"),(0,l.kt)("h3",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,l.kt)("p",null,"\u5728 HTML DOM (Document Object Model) \u5373\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u4e2d, \u6bcf\u4e2a\u4e1c\u897f\u90fd\u662f ",(0,l.kt)("strong",{parentName:"p"},"\u8282\u70b9")," :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6587\u6863\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u6587\u6863\u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 HTML \u5143\u7d20\u90fd\u662f\u5143\u7d20\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u6709 HTML \u5c5e\u6027\u90fd\u662f\u5c5e\u6027\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u7d20\u5185\u7684\u6587\u672c\u662f\u6587\u672c\u8282\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u91ca\u662f\u6ce8\u91ca\u8282\u70b9\uff0c\u5c31\u4e0d\u7528")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div class='test1' id='a'>test</div>\n\ndiv\u6574\u4f53\u662f\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\nclass=\u2018test1\u2019 \u662f\u4e00\u4e2a\u5c5e\u6027\u8282\u70b9\ntest\u662f\u6587\u672c\u8282\u70b9\uff0c\u6ce8\u610f\u4e2d\u95f4\u6ca1\u6709\u4e1c\u897f\u7a7a\u5b57\u7b26\u4e5f\u662f\u4e00\u4e2a\u6587\u672c\u8282\u70b9\n")),(0,l.kt)("p",null,"\u6240\u6709\u7684\u8282\u70b9\u90fd\u6709\u4e00\u4e2anodeType\u5c5e\u6027\uff0c\u53ef\u4ee5\u5224\u65ad\u8282\u70b9\u7c7b\u578b\uff0c\u5e38\u7528\u7684\u5c31\u662f\u4ee5\u4e0b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"NodeType"),(0,l.kt)("th",{parentName:"tr",align:null},"Named Constant"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"ELEMENT_NODE \u5143\u7d20\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"ATTRIBUTE_NODE \u5c5e\u6027\u8282\u70b9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"TEXT_NODE \u6587\u672c\u8282\u70b9")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u5143\u7d20\u8282\u70b9\nvar mydiv = document.getElementById("div1")\nmydiv.nodeType\n1\n//\u5c5e\u6027\u8282\u70b9\nmydiv.attributes[0].nodeType\n2\n')),(0,l.kt)("p",null,"DOM\u64cd\u4f5c\u5176\u5b9e\u5c31\u662f\u5bf9\u8282\u70b9\u7684\u589e\u5220\u67e5\u6539"),(0,l.kt)("h3",{id:"\u4e8c\u5143\u7d20\u8282\u70b9"},"\u4e8c\u3001\u5143\u7d20\u8282\u70b9"),(0,l.kt)("h4",{id:"1\u83b7\u53d6\u5143\u7d20\u8282\u70b9\u7684\u65b9\u6cd5"},"1\u3001\u83b7\u53d6\u5143\u7d20\u8282\u70b9\u7684\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u6839\u636eid\u83b7\u53d6\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\nvar div1 = document.getElementById("div1")\n//\u6839\u636e\u6807\u7b7e\u540d\u83b7\u53d6\u4e00\u5806\u8282\u70b9\u7684\u96c6\u5408\nvar li1 = document.getElementsByTagName("li");\n//\u6839\u636eclass\u83b7\u53d6\u4e00\u5806\u5143\u7d20\u8282\u70b9\nvar div2 = document.getElementsByClassName("content");\n\n//\u4f7f\u7528css\u9009\u62e9\u5668\u9009\u62e9\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u5143\u7d20\u8282\u70b9\nvar d1 = document.querySelector(".content")\n//\u6839\u636ecss\u9009\u62e9\u5668\u9009\u62e9\u4e00\u6279\u80fd\u591f\u88ab\u5339\u914d\u5230\u7684\u6240\u6709\u7684\u5143\u7d20\nvar d1 = document.querySelectorAll(".content")\n')),(0,l.kt)("h4",{id:"2\u4fee\u6539\u5143\u7d20\u8282\u70b9\u7684\u5185\u5bb9"},"2\u3001\u4fee\u6539\u5143\u7d20\u8282\u70b9\u7684\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u4e0d\u6e32\u67d3html\u6807\u7b7e\uff0c\u6807\u7b7e\u4f1a\u5f53\u505a\u6587\u672c\u6253\u5370\u51fa\u6765\nmydiv.innerText = "jiasoushi"\n//\u4f1a\u5c06html\u6807\u7b7e\u6e32\u67d3\u51fa\u6765\nmydiv.innerHTML = "<h1>123</h1>"\n')),(0,l.kt)("h4",{id:"3\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u8282\u70b9"},"3\u3001\u5220\u9664\u4e00\u4e2a\u5143\u7d20\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u76f4\u63a5\u628a\u81ea\u5df1\u5e72\u6389\nvar mydiv = document.getElementById("div1")\nmydiv.remove();\n\n//\u6e05\u9664\u5185\u5bb9\nmydiv.innerText = \u201c\u201d;\n\n//\u5220\u9664\u67d0\u4e2a\u5b50\u5143\u7d20\u8282\u70b9\n//1\u3001\u627e\u5230\u8fd9\u4e2a\u5b57\u5143\u7d20\u8282\u70b9\nvar myul = document.getElementsByTagName(\'ul\')[0];\n//2\u3001\u8c03\u7528\u65b9\u6cd5\u5e72\u6389\uff0c\u6ce8\u610f\u8fd9\u4e2a\u65b9\u6cd5\u53c2\u6570\u4e00\u5b9a\u8981\u662f\u4e2a\u5143\u7d20\u8282\u70b9\nmydiv.removeChild(myul)\n\nvar div1 = document.getElementById("div1")\nundefined\nvar child = document.getElementsByTagName("ul")[0]\nundefined\nchild\n<ul>\u2026</ul>\ndiv1.removeChild(child );\n')),(0,l.kt)("h4",{id:"4\u65b0\u5efa\u4e00\u4e2a\u5143\u7d20\u8282\u70b9"},"4\u3001\u65b0\u5efa\u4e00\u4e2a\u5143\u7d20\u8282\u70b9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u521b\u5efa\u4e00\u4e2adiv\u6807\u7b7e\uff0c\u5185\u5b58\u4e2d\nvar mydiv = document.createElement("div");\n//\u6dfb\u52a0\u8fdb\u51e0\u4e2a\u5c5e\u6027\nmydiv.setAttribute("name","mydiv");\nmydiv.setAttribute("class","test");\n//\u83b7\u53d6\u5230\u6211\u7684div\nvar div1 = document.getElementById("div1");\n//\u5c06\u5185\u5b58\u4e2d\u65b0\u5efa\u7684div\u5b9e\u5b9e\u5728\u5728\u7684\u52a0\u5165\u5230\u6211\u7684div\u4e2d\ndiv1.append(mydiv)\n')),(0,l.kt)("h4",{id:"5\u83b7\u53d6\u6240\u6709\u7684\u5b50\u8282\u70b9"},"5\u3001\u83b7\u53d6\u6240\u6709\u7684\u5b50\u8282\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u4e86\u4e4b\u540e\u5f53\u7136\u5c31\u80fd\u50cf\u64cd\u4f5c\u8282\u70b9\u4e00\u6837\u64cd\u4f5c\u4ed6\u4e86\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b50\u8282\u70b9\u4e00\u822c\u662f\u4e2a\u96c6\u5408\uff0c\u5176\u5b9e\u5c31\u662f\u4e2a\u6570\u7ec4"),(0,l.kt)("li",{parentName:"ul"},"\u5faa\u73af\u904d\u5386\u53ef\u4ee5\u6279\u91cf\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u4ec5\u4ec5\u662f\u5b50\u8282\u70b9\u96c6\u5408\uff0c\u4efb\u4f55\u8282\u70b9\u96c6\u5408\u90fd\u80fd\u6279\u91cf\u64cd\u4f5c")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"//children\u5c5e\u6027\u80fd\u83b7\u53d6\u6240\u6709\u7684\u5b50\u5143\u7d20\u8282\u70b9\uff0c\u4e0d\u5305\u62ec\u6587\u672c\u8282\u70b9\nmydiv.children\nHTMLCollection [ul]\n\n//children\u5c5e\u6027\u80fd\u83b7\u53d6\u6240\u6709\u7684\u5b50\u5143\u7d20\u8282\u70b9\uff0c\u5305\u62ec\u6587\u672c\u8282\u70b9\nmydiv.childNodes\nNodeList(3) [text, ul, text]\n    \n//\u5b50\u8282\u70b9\u4e5f\u662f\u5143\u7d20\u8282\u70b9\uff0c\u4e00\u6837\u53ef\u4ee5\u6709\u5b50\u8282\u70b9    \nmydiv.children[0].children    \n")),(0,l.kt)("h3",{id:"\u4e09\u5c5e\u6027\u8282\u70b9"},"\u4e09\u3001\u5c5e\u6027\u8282\u70b9"),(0,l.kt)("h4",{id:"1\u4f7f\u7528\u5143\u7d20\u8282\u70b9\u65b9\u6cd5\u8fdb\u884c\u589e\u5220\u67e5\u6539"},"1\u3001\u4f7f\u7528\u5143\u7d20\u8282\u70b9\u65b9\u6cd5\u8fdb\u884c\u589e\u5220\u67e5\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'var mydiv = document.getElementById("div1")\n//\u83b7\u53d6\u8fd9\u4e2a\u5c5e\u6027\u7684\u503c\nmydiv.getAttribute("name")\n//\u4fee\u6539\uff0c\u540c\u65f6\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5c5e\u6027\u7684\u503c\nmydiv.setAttribute("name","cccc")\n//\u5220\u9664\u4e00\u4e2a\u5c5e\u6027\nmydiv.removeAttribute("name")\n')),(0,l.kt)("h4",{id:"2\u4f7f\u7528\u5c5e\u6027\u8282\u70b9\u5bf9\u8c61\u5bf9\u5c5e\u6027\u672c\u8eab\u8fdb\u884c\u64cd\u4f5c"},"2\u3001\u4f7f\u7528\u5c5e\u6027\u8282\u70b9\u5bf9\u8c61\u5bf9\u5c5e\u6027\u672c\u8eab\u8fdb\u884c\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u83b7\u53d6\u6240\u6709\u7684\u5c5e\u6027\u8282\u70b9\u7684\u96c6\u5408\uff0c\u662f\u4e2a\u53ef\u4ee5\u5f53\u6210\u6570\u7ec4\nmydiv.attributes\n//\u901a\u8fc7\u4e0b\u6807\u62ff\u5230\u7b2c\u4e8c\u4e2a\u5c5e\u6027\nmydiv.attributes[1]\n//\u62ff\u5230\u5c5e\u6027\u7684name\nvar attrName = mydiv.attributes[1].name\n//\u62ff\u5230\u5c5e\u6027\u7684\u503c\nvar attrValue = mydiv.attributes[1].value\n//\u4fee\u6539\u8fd9\u4e2a\u5c5e\u6027\u7684\u503c\nmydiv.attributes[1].value = "aaa"\n')),(0,l.kt)("h2",{id:"\u7b2c\u4e8c\u7ae0-bom\u7f16\u7a0b"},"\u7b2c\u4e8c\u7ae0 BOM\u7f16\u7a0b"),(0,l.kt)("h3",{id:"\u4e00\u6982\u8ff0-1"},"\u4e00\u3001\u6982\u8ff0"),(0,l.kt)("p",null,"BOM\u662f\u6d4f\u89c8\u5668\u5bf9\u8c61\u6a21\u578b\u3002"),(0,l.kt)("p",null,"BOM\u63d0\u4f9b\u4e86\u72ec\u7acb\u4e8e\u5185\u5bb9 \u800c\u4e0e\u6d4f\u89c8\u5668\u7a97\u53e3\u8fdb\u884c\u4ea4\u4e92\u7684\u5bf9\u8c61\uff1b"),(0,l.kt)("p",null,"BOM\u7684\u6838\u5fc3\u5bf9\u8c61\u662fwindow\uff1b"),(0,l.kt)("p",null,"BOM\u7531\u4e00\u7cfb\u5217\u76f8\u5173\u7684\u5bf9\u8c61\u6784\u6210\uff0c\u5e76\u4e14\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u63d0\u4f9b\u4e86\u5f88\u591a\u65b9\u6cd5\u4e0e\u5c5e\u6027\uff1b"),(0,l.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\uff0cF12\u6253\u5f00\u8c03\u8bd5\u7a97\u53e3\uff0cconsole\u91cc\u8f93\u5165window\uff0c\u5c31\u80fd\u770b\u5230\u8fd9\u4e2a\u5bf9\u8c61\u3002\u91cc\u8fb9\u6709\u5f88\u591a\u7684\u65b9\u6cd5\u548c\u5c5e\u6027\uff0c\u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u67e5\u770b\u548c\u6d4f\u89c8\u5668\u76f8\u5173\u7684\u4e00\u4e9b\u5185\u5bb9\uff0c\u6bd4\u5982\u6d4f\u89c8\u5668\u7684\u7248\u672c\u5566\uff08navigator\uff09\u3001\u6d4f\u89c8\u7684\u5386\u65f6\u8bb0\u5f55\u5566\uff08history\uff09\u3001\u7f51\u7ad9\u7684\u5730\u5740\u4fe1\u606f\u5566\uff08location\uff09\uff0c\u548c\u5c4f\u5e55\u76f8\u5173\u7684\u5185\u5bb9\u5566\uff08\u5e26screende\uff09\u7b49\u7b49\uff0c\u81ea\u5df1\u53ef\u4ee5\u6d4f\u89c8\u4e00\u4e0b\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u4e8c\u5e38\u7528\u65b9\u6cd5"},"\u4e8c\u3001\u5e38\u7528\u65b9\u6cd5"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u56de\u8c03\u51fd\u6570")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//js\u51fd\u6570\u975e\u5e38\u7075\u6d3b\uff0c\u5b9a\u4e49\u4e86\u53c2\u6570\u4f20\u4ec0\u4e48\u90fd\u884c\nvar callback = function(fun){\n    console.log(fun)\n}\ncallback(1)\ncallback("123")\ncallback( {name:\'zhangnan\'} )\ncallback( [1,2,3] )\n\n//\u5b9e\u9645\u4e0a\u4f20\u4ec0\u4e48\uff0c\u5c31\u8981\u628a\u8fd9\u4e2a\u53c2\u6570\u5f53\u6210\u4ec0\u4e48\u6765\u7528\n//\u8981\u662f\u4f20\u4e2a\u65b9\u6cd5\u5c31\u8981\u5728\u65b9\u6cd5\u91cc\u627e\u4e2a\u5408\u9002\u7684\u5730\u65b9\u8c03\u7528\u4e00\u4e0b\nvar callback = function(fun){\n    console.log(fun)\n}\n\nvar test = function(fun){\n    console.log("before");\n    fun();\n    console.log("after");\n}\n\n//\u4f60\u77e5\u9053\u9700\u8981\u4f20\u65b9\u6cd5\u5374\u4f20\u4e86\u4e00\u4e2a\u6570\u5b57\uff0c\u66f4\u5b9a\u4e0d\u80fd\u8c03\u7528\uff0c\u5c31\u4f1a\u62a5\u9519\ntest(1)\nVM1038:2 before\nVM1038:3 Uncaught TypeError: fun is not a function\n    at test (<anonymous>:3:5)\n    at <anonymous>:1:1\ntest @ VM1038:3\n(anonymous) @ VM1060:1\n\n\nvar callback = function(){\n    console.log("I am callback!")\n}\ntest(callback);\n\n//\u7ed3\u679c\nVM1038:2 before\nVM1151:2 I am callback!\nVM1038:4 after\n\n//callback\u5c31\u662f\u4e2a\u65b9\u6cd5\u7684\u540d\u5b57\nvar callback = function(data){\n    console.log("I am callback!"+data)\n}\n\nvar test = function(fun){\n    console.log("before");\n    fun();\n    console.log("after");\n}\n\nvar test = function(fun){\n    console.log("before");\n    var i = 10;\n    fun(i);\n    console.log("after");\n}\n//\u53ef\u4ee5\u76f4\u63a5\u4f20\u540d\u5b57\ntest(callback)\nVM1296:2 before\nVM1255:2 I am callback!10\nVM1296:5 after\n\n//\u4e5f\u80fd\u76f4\u63a5\u4f20\u4e2a\u65b9\u6cd5\u4f53\u8fdb\u53bb\ntest( function(data){\n    console.log("I am callback!"+data)\n} )\n\nVM1296:2 before\nVM1363:2 I am callback!10\nVM1296:5 after\n\n//\u76f4\u63a5\u8c03\u7528\u65b9\u6cd5\u4f53\u4e5f\u884c\n(function(){\n    console.log(123)\n})()\nVM1427:2 123\n\nvar a  = function(){\n    console.log(123)\n}\n//\u62ff\u540d\u5b57\u8c03\u7528\u4e5f\u884c\na()\nVM1452:2 123\n')),(0,l.kt)("h4",{id:"1settimeout"},"1\u3001setTimeout"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u4e00\u6b21\u6027\u5b9a\u65f6\u5668\uff0c\u4f1a\u5728\u591a\u5c11\u6beb\u79d2\u540e\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\n//\u91cc\u8fb9\u7684\u662f\u533f\u540d\u51fd\u6570\uff0c\u4e5f\u53eb\u56de\u8c03\u51fd\u6570\uff08\u5c31\u662f\u7b49\u8fc7\u4e86\u4e24\u79d2\u540e\u56de\u8fc7\u5934\u6765\u518d\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff09\n//\u8fd4\u56de\u503c\u662f\u4e2a\u5b9a\u65f6\u5668\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u662f\u5728\u672a\u6765\u53bb\u6267\u884c\u67d0\u4e2a\u51fd\u6570\nvar timer = setTimeout( function(){\n    console.log(123)\n},2000 )\n\n//\u5982\u679c\u65f6\u95f4\u672a\u5230\uff0c\u4e0d\u60f3\u8ba9\u4ed6\u6267\u884c\u4e86\uff0c\u5c31\u9700\u8981\u53d6\u6d88\u8fd9\u4e2a\u5b9a\u65f6\u5668\nclearTimeout(timer)\n")),(0,l.kt)("h4",{id:"2setinterval"},"2\u3001setInterval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u5468\u671f\u6027\u5b9a\u65f6\u5668\uff0c\u4f1a\u6bcf\u9694\u591a\u5c11\u6beb\u79d2\u540e\u6267\u884c\u8fd9\u4e2a\u51fd\u6570\n//\u91cc\u8fb9\u7684\u662f\u533f\u540d\u51fd\u6570\uff0c\u4e5f\u53eb\u56de\u8c03\u51fd\u6570\uff08\u5c31\u662f\u7b49\u8fc7\u4e86\u4e24\u79d2\u540e\u56de\u8fc7\u5934\u6765\u518d\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff09\n//\u8fd4\u56de\u503c\u662f\u4e2a\u5b9a\u65f6\u5668\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u662f\u5728\u672a\u6765\u53bb\u6267\u884c\u67d0\u4e2a\u51fd\u6570\nvar timer = setInterval( function(){\n    console.log(123)\n},2000 )\n\n//\u5982\u679c\u65f6\u95f4\u672a\u5230\uff0c\u6216\u8005\u4e2d\u9014\u4e0d\u60f3\u8ba9\u4ed6\u6267\u884c\u4e86\uff0c\u5c31\u9700\u8981\u53d6\u6d88\u8fd9\u4e2a\u5b9a\u65f6\u5668\nclearInterval(timer)\n")),(0,l.kt)("h4",{id:"3\u6d4f\u89c8\u5668\u81ea\u5e26\u5c0f\u578b\u6570\u636e\u5e93"},"3\u3001\u6d4f\u89c8\u5668\u81ea\u5e26\u5c0f\u578b\u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u4e3a\u6bcf\u4e00\u4e2a\u7f51\u5740\u63d0\u4f9b\u4e24\u4e2a\u5c0f\u578b\u6570\u636e\u5e93"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//localStorage\u53ea\u8981\u4e0d\u4eba\u4e3a\u5220\u9664\uff0c\u4f1a\u6d4f\u89c8\u5668\u88ab\u5220\u9664\u6570\u636e\u4f1a\u4e00\u76f4\u5728\n//\u589e\u52a0\u6216\u4fee\u6539\u4e00\u4e2a\nwindow.localStorage.setItem("name","lucy")\n//\u83b7\u53d6\nwindow.localStorage.getItem("name")\n//\u5220\u9664\u4e00\u4e2a\nwindow.localStorage.removeItem("name")\n//\u6e05\u7a7a\nwindow.localStorage.clear()\n\n//sessionStorage\u7f51\u9875\u88ab\u5173\u95ed\u5c31\u6ca1\u6709\u4e86\n//\u589e\u52a0\u6216\u4fee\u6539\u4e00\u4e2a\nwindow.sessionStorage.setItem("name","lucy")\n//\u83b7\u53d6\nwindow.sessionStorage.getItem("name")\n//\u5220\u9664\u4e00\u4e2a\nwindow.sessionStorage.removeItem("name")\n//\u6e05\u7a7a\nwindow.sessionStorage.clear()\n')),(0,l.kt)("h4",{id:"4\u5f39\u7a97\u5176\u5b9e\u6ca1\u6c42\u7528"},"4\u3001\u5f39\u7a97\u5176\u5b9e\u6ca1\u6c42\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u5f39\u4e2a\u63d0\u793a\u7a97\u53e3\uff0c\u8c03\u8bd5\u4e5f\u4e0d\u8981\u7528\uff0c\u4e0d\u4f18\u96c5\nalert(1)\n\n//\u5f39\u51fa\u786e\u8ba4\u6846\n//\u70b9\u51fb\u786e\u5b9a\u5c31\u662ftrue \u70b9\u51fb\u5426\u5c31\u662ffalse\nvar flag = confirm("\u60a8\u786e\u5b9a\u8981\u9000\u51fa\u5417?")\nconsole.log(flag)\n\n//\u5f39\u51fa\u4fe1\u606f\u6846\n//\u8f93\u5165\u4fe1\u606f\u540e\u70b9\u51fb\u786e\u5b9a\u8fd4\u56de\u586b\u7684\u5185\u5bb9\uff0c\u70b9\u51fb\u53d6\u6d88\u8fd4\u56denone\nvar message = prompt("\u8bf7\u586b\u5199\u60a8\u7684\u624b\u673a\u53f7\uff01");\nconsole.log(message);\nVM3797:2 1373838438\n\nvar message = window.prompt("\u8bf7\u8f93\u5165\u540d\u5b57\uff1a")\nundefined\nmessage\n"\u5f20\u6960"\nvar message = window.prompt("\u8bf7\u8f93\u5165\u540d\u5b57\uff1a")\nundefined\nmessage\n""\nvar message = window.prompt("\u8bf7\u8f93\u5165\u540d\u5b57\uff1a")\nundefined\nmessage\nnull\nvar message = window.prompt("\u8bf7\u8f93\u5165\u540d\u5b57\uff1a","liankun")\n')),(0,l.kt)("h4",{id:"5history"},"5\u3001history"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u56de\u9000\nhistory.go(-1)\n//\u5411\u524d\nhistory.go(1)\n//\u56de\u9000\nhistory.back()\n//\u5411\u524d\nwindow.history.forward()\n")),(0,l.kt)("h4",{id:"6navigator"},"6\u3001navigator"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5c5e\u6027\u63d0\u4f9b\u4e86\u4e00\u5199\u6d4f\u89c8\u5668\u7684\u5c5e\u6027\uff0c\u6bd4\u5982\u6d4f\u89c8\u5668\u7c7b\u578b\uff0c\u7248\u672c\u4e4b\u7c7b\u7684\u4fe1\u606f\u3002"),(0,l.kt)("h4",{id:"5\u4e00\u70b9\u6ce8\u610f"},"5\u3001\u4e00\u70b9\u6ce8\u610f"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u6a21\u578b\u4e2d\uff0c\u8c03\u7528\u7684\u65b9\u6cd5\u6216\u5c5e\u6027\u5176\u5b9e\u662f\u5c5e\u4e8ewindow\u5bf9\u8c61\u7684"),(0,l.kt)("p",null,"\u4f60\u5728\u6700\u5916\u5c42\u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u6216\u8005\u4e00\u4e2a\u53d8\u91cf\u5176\u5b9e\u662f\u8d4b\u7ed9\u4e86window\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u6a21\u578b\u4e2d\uff0c\u8c03\u7528window\u7684\u65b9\u6cd5\u53ef\u4ee5\u7701\u7565window. \u4e5f\u53ef\u4ee5\u4e0d\u7701\u7565\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},'window.localStorage.setItem("name","lucy")\nlocalStorage.setItem("name","lucy")\n')),(0,l.kt)("p",null,"\u6d4f\u89c8\u5668\u7f16\u7a0b\u4e2d\uff0c\u5168\u5c40\u7684\u53d8\u91cf\uff0c\u5c31\u662f\u76f4\u63a5\u5728\u6700\u5916\u8fb9\u5b9a\u4e49\u53d8\u91cf\u7684\u65f6\u5019\u5c3d\u91cf\u907f\u5f00name\uff0c\u5e94\u4e3awindow\u6709name\u5c5e\u6027\uff0c\u4f60\u518d\u5b9a\u4e49\u5c31\u8986\u76d6\u4e86\u4eba\u5bb6\u7684\u4e86\uff0c\u5f53\u7136\u5728\u65b9\u6cd5\u91cc\uff0c\u5bf9\u8c61\u4e2d\u53ef\u4ee5\u968f\u4fbf\u4f7f\u7528\u3002"))}s.isMDXComponent=!0}}]);