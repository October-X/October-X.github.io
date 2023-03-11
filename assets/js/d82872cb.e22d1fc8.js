"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,N=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={},l="React Router 6 \u5feb\u901f\u4e0a\u624b",i={unversionedId:"react/react-router6",id:"react/react-router6",title:"React Router 6 \u5feb\u901f\u4e0a\u624b",description:"\u5b66\u4e60\u5efa\u8bae\uff1a",source:"@site/docs/react/10.react-router6.md",sourceDirName:"react",slug:"/react/react-router6",permalink:"/docs/react/react-router6",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/10.react-router6.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"react",previous:{title:"React \u8def\u7531",permalink:"/docs/react/react-router5"},next:{title:"\u95ee\u9898\u8bb0\u5f55",permalink:"/docs/react/\u95ee\u9898\u8bb0\u5f55"}},p={},m=[{value:"\u5b66\u4e60\u5efa\u8bae\uff1a",id:"\u5b66\u4e60\u5efa\u8bae",level:2},{value:"1.\u6982\u8ff0",id:"1\u6982\u8ff0",level:2},{value:"2.Component",id:"2component",level:2},{value:"1. <code>&lt;BrowserRouter&gt;</code>",id:"1-browserrouter",level:3},{value:"2. <code>&lt;HashRouter&gt;</code>",id:"2-hashrouter",level:3},{value:"3. <code>&lt;Routes/&gt; \u4e0e &lt;Route/&gt;</code>",id:"3-routes-\u4e0e-route",level:3},{value:"4. <code>&lt;Link&gt;</code>",id:"4-link",level:3},{value:"5. <code>&lt;NavLink&gt;</code>",id:"5-navlink",level:3},{value:"6. <code>&lt;Navigate&gt;</code>",id:"6-navigate",level:3},{value:"7. <code>&lt;Outlet&gt;</code>",id:"7-outlet",level:3},{value:"3.Hooks",id:"3hooks",level:2},{value:"1. useRoutes()",id:"1-useroutes",level:3},{value:"2. useNavigate()",id:"2-usenavigate",level:3},{value:"3. useParams()",id:"3-useparams",level:3},{value:"4. useSearchParams()",id:"4-usesearchparams",level:3},{value:"5. useLocation()",id:"5-uselocation",level:3},{value:"6. useMatch()",id:"6-usematch",level:3},{value:"7. useInRouterContext()",id:"7-useinroutercontext",level:3},{value:"8. useNavigationType()",id:"8-usenavigationtype",level:3},{value:"9. useOutlet()",id:"9-useoutlet",level:3},{value:"10.useResolvedPath()",id:"10useresolvedpath",level:3},{value:"11.\u6269\u5c55",id:"11\u6269\u5c55",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-router-6-\u5feb\u901f\u4e0a\u624b"},"React Router 6 \u5feb\u901f\u4e0a\u624b"),(0,r.kt)("h2",{id:"\u5b66\u4e60\u5efa\u8bae"},"\u5b66\u4e60\u5efa\u8bae\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/start/tutorial"},"Tutorial v6.4.3 | React Router")),(0,r.kt)("p",null,"\u5c06\u5b98\u65b9\u6587\u6863\u7684\u6559\u7a0b\u6848\u4f8b\u719f\u6089\u4e00\u4e0b\uff0c\u91cc\u9762\u6709\u7528loader\u548caction\u7406\u89e3\u4e00\u4e0b\u3002"),(0,r.kt)("h2",{id:"1\u6982\u8ff0"},"1.\u6982\u8ff0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"React Router \u4ee5\u4e09\u4e2a\u4e0d\u540c\u7684\u5305\u53d1\u5e03\u5230 npm \u4e0a\uff0c\u5b83\u4eec\u5206\u522b\u4e3a\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"react-router: \u8def\u7531\u7684\u6838\u5fc3\u5e93\uff0c\u63d0\u4f9b\u4e86\u5f88\u591a\u7684\uff1a\u7ec4\u4ef6\u3001\u94a9\u5b50\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"react-router-dom:"),"\u5305\u542breact-router\u6240\u6709\u5185\u5bb9\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e9b\u4e13\u95e8\u7528\u4e8e DOM \u7684\u7ec4\u4ef6\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"<BrowserRouter>"),"\u7b49 \u3002"),(0,r.kt)("li",{parentName:"ol"},"react-router-native: \u5305\u62ecreact-router\u6240\u6709\u5185\u5bb9\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e9b\u4e13\u95e8\u7528\u4e8eReactNative\u7684API\uff0c\u4f8b\u5982:",(0,r.kt)("inlineCode",{parentName:"li"},"<NativeRouter>"),"\u7b49\u3002"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e0eReact Router 5.x \u7248\u672c\u76f8\u6bd4\uff0c\u6539\u53d8\u4e86\u4ec0\u4e48\uff1f"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5185\u7f6e\u7ec4\u4ef6\u7684\u53d8\u5316\uff1a\u79fb\u9664",(0,r.kt)("inlineCode",{parentName:"p"},"<Switch/>")," \uff0c\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"p"},"<Routes/>"),"\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bed\u6cd5\u7684\u53d8\u5316\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"component={About}")," \u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"element={<About/>}"),"\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u589e\u591a\u4e2ahook\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"useParams"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useNavigate"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"useMatch"),"\u7b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b98\u65b9\u660e\u786e\u63a8\u8350\u51fd\u6570\u5f0f\u7ec4\u4ef6\u4e86\uff01\uff01\uff01"),(0,r.kt)("p",{parentName:"li"},"......"))))),(0,r.kt)("h2",{id:"2component"},"2.Component"),(0,r.kt)("h3",{id:"1-browserrouter"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<BrowserRouter>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8bf4\u660e\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserRouter> "),"\u7528\u4e8e\u5305\u88f9\u6574\u4e2a\u5e94\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { BrowserRouter } from "react-router-dom";\n\nReactDOM.render(\n  <BrowserRouter>\n    {/* \u6574\u4f53\u7ed3\u6784\uff08\u901a\u5e38\u4e3aApp\u7ec4\u4ef6\uff09 */}\n  </BrowserRouter>,root\n);\n')))),(0,r.kt)("h3",{id:"2-hashrouter"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<HashRouter>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bf4\u660e\uff1a\u4f5c\u7528\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"<BrowserRouter>"),"\u4e00\u6837\uff0c\u4f46",(0,r.kt)("inlineCode",{parentName:"li"},"<HashRouter>"),"\u4fee\u6539\u7684\u662f\u5730\u5740\u680f\u7684hash\u503c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5907\u6ce8\uff1a6.x\u7248\u672c\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"<HashRouter>"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"<BrowserRouter> ")," \u7684\u7528\u6cd5\u4e0e 5.x \u76f8\u540c\u3002")),(0,r.kt)("h3",{id:"3-routes-\u4e0e-route"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Routes/> \u4e0e <Route/>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"v6\u7248\u672c\u4e2d\u79fb\u51fa\u4e86\u5148\u524d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"<Switch>"),"\uff0c\u5f15\u5165\u4e86\u65b0\u7684\u66ff\u4ee3\u8005\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"<Routes>"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Routes>")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"<Route>"),"\u8981\u914d\u5408\u4f7f\u7528\uff0c\u4e14\u5fc5\u987b\u8981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"<Routes>"),"\u5305\u88f9",(0,r.kt)("inlineCode",{parentName:"p"},"<Route>"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Route>")," \u76f8\u5f53\u4e8e\u4e00\u4e2a if \u8bed\u53e5\uff0c\u5982\u679c\u5176\u8def\u5f84\u4e0e\u5f53\u524d URL \u5339\u914d\uff0c\u5219\u5448\u73b0\u5176\u5bf9\u5e94\u7684\u7ec4\u4ef6\uff0c\u4e0d\u518d\u5f80\u4e0b\u5339\u914d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Route caseSensitive>")," \u5c5e\u6027\u7528\u4e8e\u6307\u5b9a\uff1a\u5339\u914d\u65f6\u662f\u5426\u533a\u5206\u5927\u5c0f\u5199\uff08\u9ed8\u8ba4\u4e3a false\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53URL\u53d1\u751f\u53d8\u5316\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"<Routes> "),"\u90fd\u4f1a\u67e5\u770b\u5176\u6240\u6709\u5b50",(0,r.kt)("inlineCode",{parentName:"p"}," <Route>")," \u5143\u7d20\u4ee5\u627e\u5230\u6700\u4f73\u5339\u914d\u5e76\u5448\u73b0\u7ec4\u4ef6 \u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<Route>")," \u4e5f\u53ef\u4ee5\u5d4c\u5957\u4f7f\u7528\uff0c\u4e14\u53ef\u914d\u5408",(0,r.kt)("inlineCode",{parentName:"p"},"useRoutes()"),"\u914d\u7f6e \u201c\u8def\u7531\u8868\u201d \uff0c\u4f46\u9700\u8981\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Outlet>")," \u7ec4\u4ef6\u6765\u6e32\u67d3\u5176\u5b50\u8def\u7531\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Routes>\n    /*path\u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u8def\u5f84\uff0celement\u5c5e\u6027\u7528\u4e8e\u5b9a\u4e49\u5f53\u524d\u8def\u5f84\u6240\u5bf9\u5e94\u7684\u7ec4\u4ef6*/\n    <Route path="/login" element={<Login />}></Route>\n\n        /*\u7528\u4e8e\u5b9a\u4e49\u5d4c\u5957\u8def\u7531\uff0chome\u662f\u4e00\u7ea7\u8def\u7531\uff0c\u5bf9\u5e94\u7684\u8def\u5f84/home*/\n    <Route path="home" element={<Home />}>\n       /*test1 \u548c test2 \u662f\u4e8c\u7ea7\u8def\u7531,\u5bf9\u5e94\u7684\u8def\u5f84\u662f/home/test1 \u6216 /home/test2*/\n      <Route path="test1" element={<Test/>}></Route>\n      <Route path="test2" element={<Test2/>}></Route>\n        </Route>\n    \n        //Route\u4e5f\u53ef\u4ee5\u4e0d\u5199element\u5c5e\u6027, \u8fd9\u65f6\u5c31\u662f\u7528\u4e8e\u5c55\u793a\u5d4c\u5957\u7684\u8def\u7531 .\u6240\u5bf9\u5e94\u7684\u8def\u5f84\u662f/users/xxx\n    <Route path="users">\n       <Route path="xxx" element={<Demo />} />\n    </Route>\n</Routes>\n')))),(0,r.kt)("h3",{id:"4-link"},"4. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Link>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528: \u4fee\u6539URL\uff0c\u4e14\u4e0d\u53d1\u9001\u7f51\u7edc\u8bf7\u6c42\uff08\u8def\u7531\u94fe\u63a5\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6ce8\u610f: \u5916\u4fa7\u9700\u8981\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"<HashRouter>"),"\u5305\u88f9\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Link } from "react-router-dom";\n\nfunction Test() {\n  return (\n    <div>\n        <Link to="/\u8def\u5f84">\u6309\u94ae</Link>\n    </div>\n  );\n}\n')))),(0,r.kt)("h3",{id:"5-navlink"},"5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<NavLink>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528: \u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"<Link>"),"\u7ec4\u4ef6\u7c7b\u4f3c\uff0c\u4e14\u53ef\u5b9e\u73b0\u5bfc\u822a\u7684\u201c\u9ad8\u4eae\u201d\u6548\u679c\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u6ce8\u610f: NavLink\u9ed8\u8ba4\u7c7b\u540d\u662factive\uff0c\u4e0b\u9762\u662f\u6307\u5b9a\u81ea\u5b9a\u4e49\u7684class\n\n//\u81ea\u5b9a\u4e49\u6837\u5f0f\n<NavLink\n    to=\"login\"\n    className={({ isActive }) => {\n        console.log('home', isActive)\n        return isActive ? 'base one' : 'base'\n    }}\n>login</NavLink>\n\n/*\n    \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5f53Home\u7684\u5b50\u7ec4\u4ef6\u5339\u914d\u6210\u529f\uff0cHome\u7684\u5bfc\u822a\u4e5f\u4f1a\u9ad8\u4eae\uff0c\n    \u5f53NavLink\u4e0a\u6dfb\u52a0\u4e86end\u5c5e\u6027\u540e\uff0c\u82e5Home\u7684\u5b50\u7ec4\u4ef6\u5339\u914d\u6210\u529f\uff0c\u5219Home\u7684\u5bfc\u822a\u6ca1\u6709\u9ad8\u4eae\u6548\u679c\u3002\n*/\n<NavLink to=\"home\" end >home</NavLink>\n")))),(0,r.kt)("h3",{id:"6-navigate"},"6. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Navigate>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u53ea\u8981",(0,r.kt)("inlineCode",{parentName:"p"},"<Navigate>"),"\u7ec4\u4ef6\u88ab\u6e32\u67d3\uff0c\u5c31\u4f1a\u4fee\u6539\u8def\u5f84\uff0c\u5207\u6362\u89c6\u56fe\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"replace"),"\u5c5e\u6027\u7528\u4e8e\u63a7\u5236\u8df3\u8f6c\u6a21\u5f0f\uff08push\uff08\u914d\u7f6e\u4e3afalse\uff09 \u6216 replace\uff08\u914d\u7f6e\u4e3atrue\uff09\uff0c\u9ed8\u8ba4\u662fpush\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React,{useState} from 'react'\nimport {Navigate} from 'react-router-dom'\n\nexport default function Home() {\n    const [sum,setSum] = useState(1)\n    return (\n        <div>\n            <h3>\u6211\u662fHome\u7684\u5185\u5bb9</h3>\n            {/* \u6839\u636esum\u7684\u503c\u51b3\u5b9a\u662f\u5426\u5207\u6362\u89c6\u56fe */}\n            {sum === 1 ? <h4>sum\u7684\u503c\u4e3a{sum}</h4> : <Navigate to=\"/about\" replace={true}/>}\n            <button onClick={()=>setSum(2)}>\u70b9\u6211\u5c06sum\u53d8\u4e3a2</button>\n        </div>\n    )\n}\n")))),(0,r.kt)("h3",{id:"7-outlet"},"7. ",(0,r.kt)("inlineCode",{parentName:"h3"},"<Outlet>")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"<Route>"),"\u4ea7\u751f\u5d4c\u5957\u65f6\uff0c\u6e32\u67d3\u5176\u5bf9\u5e94\u7684\u540e\u7eed\u5b50\u8def\u7531\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//\u6839\u636e\u8def\u7531\u8868\u751f\u6210\u5bf9\u5e94\u7684\u8def\u7531\u89c4\u5219\nconst element = useRoutes([\n  {\n    path:'/about',\n    element:<About/>\n  },\n  {\n    path:'/home',\n    element:<Home/>,\n    children:[\n      //\u6b64\u5904path\u4e0d\u9700\u8981\u52a0/\n      {\n        path:'news',\n        element:<News/>\n      },\n      {\n        path:'message',\n        element:<Message/>,\n      }\n    ]\n  }\n])\n\n//Home.js\nimport React from 'react'\nimport {NavLink,Outlet} from 'react-router-dom'\n\nexport default function Home() {\n    return (\n        <div>\n            <h2>Home\u7ec4\u4ef6\u5185\u5bb9</h2>\n            <div>\n                <ul className=\"nav nav-tabs\">\n                    <li>\n                    {/* \n                        \u6ce8\u610f\u8fd9\u8fb9to\u6ca1\u6709\u5199/ \u4e5f\u53ef\u4ee5\u5199\u6210./news \n                        \u5982\u679c\u5728\u4e0a\u7ea7\u8def\u7531\u7684<Navlink>\u4e2d\u52a0\u4e0aend\uff0c\u9009\u4e2d\u5b50\u7ea7\u65f6\uff0c\u4e0a\u7ea7\u6ca1\u6709\u9009\u4e2d\u6837\u5f0f\u3002\n                    */}   \n                        <NavLink className=\"list-group-item\" to=\"news\">News</NavLink>\n                    </li>\n                    <li>\n                        <NavLink className=\"list-group-item\" to=\"message\">Message</NavLink>\n                    </li>\n                </ul>\n                {/* \u6307\u5b9a\u8def\u7531\u7ec4\u4ef6\u5448\u73b0\u7684\u4f4d\u7f6e */}\n                <Outlet />\n            </div>\n        </div>\n    )\n}\n\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8def\u7531\u8868\u914d\u7f6e\u6848\u4f8b")),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main/start/tutorial"},"\u6559\u7a0b v6.4.3 |\u53cd\u5e94\u8def\u7531\u5668 (reactrouter.com)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"")),(0,r.kt)("h2",{id:"3hooks"},"3.Hooks"),(0,r.kt)("h3",{id:"1-useroutes"},"1. useRoutes()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u6839\u636e\u8def\u7531\u8868\uff0c\u52a8\u6001\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"<Routes>"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"<Route>"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"//\u8def\u7531\u8868\u914d\u7f6e\uff1asrc/routes/index.js\nimport About from '../pages/About'\nimport Home from '../pages/Home'\nimport {Navigate} from 'react-router-dom'\n\nexport default [\n    {\n        path:'/about',\n        element:<About/>\n    },\n    {\n        path:'/home',\n        element:<Home/>\n    },\n    {\n        path:'/',\n        element:<Navigate to=\"/about\"/>\n    }\n]\n\n//App.jsx\nimport React from 'react'\nimport {NavLink,useRoutes} from 'react-router-dom'\nimport routes from './routes'\n\nexport default function App() {\n    //\u6839\u636e\u8def\u7531\u8868\u751f\u6210\u5bf9\u5e94\u7684\u8def\u7531\u89c4\u5219\n    const element = useRoutes(routes)\n    return (\n        <div>\n            ......\n      {/* \u6ce8\u518c\u8def\u7531 */}\n      {element}\n          ......\n        </div>\n    )\n}\n\n")))),(0,r.kt)("h3",{id:"2-usenavigate"},"2. useNavigate()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\u7528\u6765\u5b9e\u73b0\u7f16\u7a0b\u5f0f\u5bfc\u822a\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport {useNavigate} from 'react-router-dom'\n\nexport default function Demo() {\n  const navigate = useNavigate()\n  const handle = () => {\n    //\u7b2c\u4e00\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a\u6307\u5b9a\u5177\u4f53\u7684\u8def\u5f84\n    navigate('/login', {\n      replace: false,\n      state: {a:1, b:2}\n    }) \n    //\u7b2c\u4e8c\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a\u4f20\u5165\u6570\u503c\u8fdb\u884c\u524d\u8fdb\u6216\u540e\u9000\uff0c\u7c7b\u4f3c\u4e8e5.x\u4e2d\u7684 history.go()\u65b9\u6cd5\n    navigate(-1)\n  }\n  \n  return (\n    <div>\n      <button onClick={handle}>\u6309\u94ae</button>\n    </div>\n  )\n}\n")))),(0,r.kt)("h3",{id:"3-useparams"},"3. useParams()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u56de\u5f53\u524d\u5339\u914d\u8def\u7531\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"params"),"\u53c2\u6570\uff0c\u7c7b\u4f3c\u4e8e5.x\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"match.params"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Routes, Route, useParams } from 'react-router-dom';\nimport User from './pages/User.jsx'\n\nfunction ProfilePage() {\n  // \u83b7\u53d6URL\u4e2d\u643a\u5e26\u8fc7\u6765\u7684params\u53c2\u6570\n  let { id } = useParams();\n}\n\nfunction App() {\n  return (\n    <Routes>\n      <Route path=\"users/:id\" element={<User />}/>\n    </Routes>\n  );\n}\n")))),(0,r.kt)("h3",{id:"4-usesearchparams"},"4. useSearchParams()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u7528\u4e8e\u8bfb\u53d6\u548c\u4fee\u6539\u5f53\u524d\u4f4d\u7f6e\u7684 URL \u4e2d\u7684\u67e5\u8be2\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u503c\u7684\u6570\u7ec4\uff0c\u5185\u5bb9\u5206\u522b\u4e3a\uff1a\u5f53\u524d\u7684seaech\u53c2\u6570\u3001\u66f4\u65b0search\u7684\u51fd\u6570\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport {useSearchParams} from 'react-router-dom'\n\nexport default function Detail() {\n    const [search,setSearch] = useSearchParams()\n    const id = search.get('id')\n    const title = search.get('title')\n    const content = search.get('content')\n    return (\n        <ul>\n            <li>\n                <button onClick={()=>setSearch('id=008&title=\u54c8\u54c8&content=\u563b\u563b')}>\u70b9\u6211\u66f4\u65b0\u4e00\u4e0b\u6536\u5230\u7684search\u53c2\u6570</button>\n            </li>\n            <li>\u6d88\u606f\u7f16\u53f7\uff1a{id}</li>\n            <li>\u6d88\u606f\u6807\u9898\uff1a{title}</li>\n            <li>\u6d88\u606f\u5185\u5bb9\uff1a{content}</li>\n        </ul>\n    )\n}\n\n")))),(0,r.kt)("h3",{id:"5-uselocation"},"5. useLocation()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u83b7\u53d6\u5f53\u524d location \u4fe1\u606f\uff0c\u5bf9\u68075.x\u4e2d\u7684\u8def\u7531\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"location"),"\u5c5e\u6027\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\'\nimport {useLocation} from \'react-router-dom\'\n\nexport default function Detail() {\n    const x = useLocation()\n    console.log(\'@\',x)\n  //\u8def\u7531\u7684<Link>\u6216<NavLink>\u914d\u7f6estate\u5c5e\u6027\n  // x\u5c31\u662flocation\u5bf9\u8c61: \n    /*\n        {\n      hash: "",\n      key: "ah9nv6sz",\n      pathname: "/login",\n      search: "?name=zs&age=18",\n      state: {a: 1, b: 2}\n    }\n    */\n    return (\n        <ul>\n            <li>\u6d88\u606f\u7f16\u53f7\uff1a{id}</li>\n            <li>\u6d88\u606f\u6807\u9898\uff1a{title}</li>\n            <li>\u6d88\u606f\u5185\u5bb9\uff1a{content}</li>\n        </ul>\n    )\n}\n\n  \n\n\n')))),(0,r.kt)("h3",{id:"6-usematch"},"6. useMatch()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u8fd4\u56de\u5f53\u524d\u5339\u914d\u4fe1\u606f\uff0c\u5bf9\u68075.x\u4e2d\u7684\u8def\u7531\u7ec4\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"match"),"\u5c5e\u6027\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Route path=\"/login/:page/:pageSize\" element={<Login />}/>\n<NavLink to=\"/login/1/10\">\u767b\u5f55</NavLink>\n\nexport default function Login() {\n  const match = useMatch('/login/:x/:y')\n  console.log(match) //\u8f93\u51famatch\u5bf9\u8c61\n  //match\u5bf9\u8c61\u5185\u5bb9\u5982\u4e0b\uff1a\n  /*\n    {\n      params: {x: '1', y: '10'}\n      pathname: \"/LoGin/1/10\"  \n      pathnameBase: \"/LoGin/1/10\"\n      pattern: {\n        path: '/login/:x/:y', \n        caseSensitive: false, \n        end: false\n      }\n    }\n  */\n  return (\n    <div>\n      <h1>Login</h1>\n    </div>\n  )\n}\n")))),(0,r.kt)("h3",{id:"7-useinroutercontext"},"7. useInRouterContext()"),(0,r.kt)("p",null,"\u200b\t\t\t\u4f5c\u7528\uff1a\u5982\u679c\u7ec4\u4ef6\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Router>")," \u7684\u4e0a\u4e0b\u6587\u4e2d\u5448\u73b0\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"p"},"useInRouterContext")," \u94a9\u5b50\u8fd4\u56de true\uff0c\u5426\u5219\u8fd4\u56de false\u3002"),(0,r.kt)("h3",{id:"8-usenavigationtype"},"8. useNavigationType()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u7528\uff1a\u8fd4\u56de\u5f53\u524d\u7684\u5bfc\u822a\u7c7b\u578b\uff08\u7528\u6237\u662f\u5982\u4f55\u6765\u5230\u5f53\u524d\u9875\u9762\u7684\uff09\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8fd4\u56de\u503c\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"POP"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"PUSH"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5907\u6ce8\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"POP"),"\u662f\u6307\u5728\u6d4f\u89c8\u5668\u4e2d\u76f4\u63a5\u6253\u5f00\u4e86\u8fd9\u4e2a\u8def\u7531\u7ec4\u4ef6\uff08\u5237\u65b0\u9875\u9762\uff09\u3002")),(0,r.kt)("h3",{id:"9-useoutlet"},"9. useOutlet()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u7528\u6765\u5448\u73b0\u5f53\u524d\u7ec4\u4ef6\u4e2d\u6e32\u67d3\u7684\u5d4c\u5957\u8def\u7531\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const result = useOutlet()\nconsole.log(result)\n// \u5982\u679c\u5d4c\u5957\u8def\u7531\u6ca1\u6709\u6302\u8f7d,\u5219result\u4e3anull\n// \u5982\u679c\u5d4c\u5957\u8def\u7531\u5df2\u7ecf\u6302\u8f7d,\u5219\u5c55\u793a\u5d4c\u5957\u7684\u8def\u7531\u5bf9\u8c61\n")))),(0,r.kt)("h3",{id:"10useresolvedpath"},"10.useResolvedPath()"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u7528\uff1a\u7ed9\u5b9a\u4e00\u4e2a URL\u503c\uff0c\u89e3\u6790\u5176\u4e2d\u7684\uff1apath\u3001search\u3001hash\u503c\u3002")),(0,r.kt)("h3",{id:"11\u6269\u5c55"},"11.\u6269\u5c55"),(0,r.kt)("p",null,"\u53c2\u8003\u5b98\u65b9\u6587\u6863",(0,r.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"Home v6.4.3 | React Router"),"\uff0c\u91cc\u9762\u8fd8\u6709\u5f88\u591a\u77e5\u8bc6\u3002"))}s.isMDXComponent=!0}}]);