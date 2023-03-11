"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9541],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,v=c["".concat(i,".").concat(d)]||c[d]||m[d]||o;return t?a.createElement(v,l(l({ref:n},u),{},{components:t})):a.createElement(v,l({ref:n},u))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3050:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={},l=void 0,p={unversionedId:"interview/vue/keep-alive",id:"interview/vue/keep-alive",title:"keep-alive",description:"\u9762\u8bd5\u9898\uff1a\u8bf7\u9610\u8ff0keep-alive\u7ec4\u4ef6\u7684\u4f5c\u7528\u548c\u539f\u7406",source:"@site/docs/interview/vue/12.keep-alive.md",sourceDirName:"interview/vue",slug:"/interview/vue/keep-alive",permalink:"/docs/interview/vue/keep-alive",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/interview/vue/12.keep-alive.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528key",permalink:"/docs/interview/vue/\u4f18\u5316"},next:{title:"\u957f\u5217\u8868\u4f18\u5316",permalink:"/docs/interview/vue/\u957f\u5217\u8868\u4f18\u5316"}},i={},s=[{value:"\u8def\u7531\u9009\u9879\u5361\u6848\u4f8b",id:"\u8def\u7531\u9009\u9879\u5361\u6848\u4f8b",level:2},{value:"<code>App.vue</code>",id:"appvue",level:2}],u={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9762\u8bd5\u9898\uff1a\u8bf7\u9610\u8ff0keep-alive\u7ec4\u4ef6\u7684\u4f5c\u7528\u548c\u539f\u7406")),(0,r.kt)("p",null,"keep-alive\u7ec4\u4ef6\u662fvue\u7684\u5185\u7f6e\u7ec4\u4ef6\uff0c\u7528\u4e8e\u7f13\u5b58\u5185\u90e8\u7ec4\u4ef6\u5b9e\u4f8b\u3002\u8fd9\u6837\u505a\u7684\u76ee\u7684\u5728\u4e8e\uff0ckeep-alive\u5185\u90e8\u7684\u7ec4\u4ef6\u5207\u56de\u65f6\uff0c\u4e0d\u7528\u91cd\u65b0\u521b\u5efa\u7ec4\u4ef6\u5b9e\u4f8b\uff0c\u800c\u76f4\u63a5\u4f7f\u7528\u7f13\u5b58\u4e2d\u7684\u5b9e\u4f8b\uff0c\u4e00\u65b9\u9762\u80fd\u591f\u907f\u514d\u521b\u5efa\u7ec4\u4ef6\u5e26\u6765\u7684\u5f00\u9500\uff0c\u53e6\u4e00\u65b9\u9762\u53ef\u4ee5\u4fdd\u7559\u7ec4\u4ef6\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,"keep-alive\u5177\u6709include\u548cexclude\u5c5e\u6027\uff0c\u901a\u8fc7\u5b83\u4eec\u53ef\u4ee5\u63a7\u5236\u54ea\u4e9b\u7ec4\u4ef6\u8fdb\u5165\u7f13\u5b58\u3002\u53e6\u5916\u5b83\u8fd8\u63d0\u4f9b\u4e86max\u5c5e\u6027\uff0c\u901a\u8fc7\u5b83\u53ef\u4ee5\u8bbe\u7f6e\u6700\u5927\u7f13\u5b58\u6570\uff0c\u5f53\u7f13\u5b58\u7684\u5b9e\u4f8b\u8d85\u8fc7\u8be5\u6570\u65f6\uff0cvue\u4f1a\u79fb\u9664\u6700\u4e45\u6ca1\u6709\u4f7f\u7528\u7684\u7ec4\u4ef6\u7f13\u5b58\u3002"),(0,r.kt)("p",null,"\u53d7keep-alive\u7684\u5f71\u54cd\uff0c\u5176\u5185\u90e8\u6240\u6709\u5d4c\u5957\u7684\u7ec4\u4ef6\u90fd\u5177\u6709\u4e24\u4e2a\u751f\u547d\u5468\u671f\u94a9\u5b50\u51fd\u6570\uff0c\u5206\u522b\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"activated"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"deactivated"),"(\u8fd9\u4e24\u4e2a\u5728\u5b50\u7ec4\u4ef6\u4e5f\u5c31\u662f\u88ab\u5d4c\u5957\u7ec4\u4ef6\u4e2d\u4f7f\u7528)\uff0c\u5b83\u4eec\u5206\u522b\u5728\u7ec4\u4ef6\u6fc0\u6d3b\u548c\u5931\u6d3b\u65f6\u89e6\u53d1\u3002\u7b2c\u4e00\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"activated"),"\u89e6\u53d1\u662f\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"mounted"),"\u4e4b\u540e"),(0,r.kt)("p",null,"\u5728\u5177\u4f53\u7684\u5b9e\u73b0\u4e0a\uff0ckeep-alive\u5728\u5185\u90e8\u7ef4\u62a4\u4e86\u4e00\u4e2akey\u6570\u7ec4\u548c\u4e00\u4e2a\u7f13\u5b58\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// keep-alive \u5185\u90e8\u7684\u58f0\u660e\u5468\u671f\u51fd\u6570\ncreated () {\n  this.cache = Object.create(null)\n  this.keys = []\n}\n")),(0,r.kt)("p",null,"key\u6570\u7ec4\u8bb0\u5f55\u76ee\u524d\u7f13\u5b58\u7684\u7ec4\u4ef6key\u503c\uff0c\u5982\u679c\u7ec4\u4ef6\u6ca1\u6709\u6307\u5b9akey\u503c\uff0c\u5219\u4f1a\u4e3a\u5176\u81ea\u52a8\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684key\u503c"),(0,r.kt)("p",null,"cache\u5bf9\u8c61\u4ee5key\u503c\u4e3a\u952e\uff0cvnode\u4e3a\u503c\uff0c\u7528\u4e8e\u7f13\u5b58\u7ec4\u4ef6\u5bf9\u5e94\u7684\u865a\u62dfDOM"),(0,r.kt)("p",null,"\u5728keep-alive\u7684\u6e32\u67d3\u51fd\u6570\u4e2d\uff0c\u5176\u57fa\u672c\u903b\u8f91\u662f\u5224\u65ad\u5f53\u524d\u6e32\u67d3\u7684vnode\u662f\u5426\u6709\u5bf9\u5e94\u7684\u7f13\u5b58\uff0c\u5982\u679c\u6709\uff0c\u4ece\u7f13\u5b58\u4e2d\u8bfb\u53d6\u5230\u5bf9\u5e94\u7684\u7ec4\u4ef6\u5b9e\u4f8b\uff1b\u5982\u679c\u6ca1\u6709\u5219\u5c06\u5176\u7f13\u5b58\u3002"),(0,r.kt)("p",null,"\u5f53\u7f13\u5b58\u6570\u91cf\u8d85\u8fc7max\u6570\u503c\u65f6\uff0ckeep-alive\u4f1a\u79fb\u9664\u6389key\u6570\u7ec4\u7684\u7b2c\u4e00\u4e2a\u5143\u7d20"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"render(){\n  const slot = this.$slots.default; // \u83b7\u53d6\u9ed8\u8ba4\u63d2\u69fd\n  const vnode = getFirstComponentChild(slot); // \u5f97\u5230\u63d2\u69fd\u4e2d\u7684\u7b2c\u4e00\u4e2a\u7ec4\u4ef6\u7684vnode\n  const name = getComponentName(vnode.componentOptions); //\u83b7\u53d6\u7ec4\u4ef6\u540d\u5b57\n  const { cache, keys } = this; // \u83b7\u53d6\u5f53\u524d\u7684\u7f13\u5b58\u5bf9\u8c61\u548ckey\u6570\u7ec4\n  const key = ...; // \u83b7\u53d6\u7ec4\u4ef6\u7684key\u503c\uff0c\u82e5\u6ca1\u6709\uff0c\u4f1a\u6309\u7167\u89c4\u5219\u81ea\u52a8\u751f\u6210\n  if (cache[key]) {\n    // \u6709\u7f13\u5b58\n    // \u91cd\u7528\u7ec4\u4ef6\u5b9e\u4f8b\n    vnode.componentInstance = cache[key].componentInstance\n    remove(keys, key); // \u5220\u9664key\n    // \u5c06key\u52a0\u5165\u5230\u6570\u7ec4\u672b\u5c3e\uff0c\u8fd9\u6837\u662f\u4e3a\u4e86\u4fdd\u8bc1\u6700\u8fd1\u4f7f\u7528\u7684\u7ec4\u4ef6\u5728\u6570\u7ec4\u4e2d\u9760\u540e\uff0c\u53cd\u4e4b\u9760\u524d\n    keys.push(key); \n  } else {\n    // \u65e0\u7f13\u5b58\uff0c\u8fdb\u884c\u7f13\u5b58\n    cache[key] = vnode\n    keys.push(key)\n    if (this.max && keys.length > parseInt(this.max)) {\n      // \u8d85\u8fc7\u6700\u5927\u7f13\u5b58\u6570\u91cf\uff0c\u79fb\u9664\u7b2c\u4e00\u4e2akey\u5bf9\u5e94\u7684\u7f13\u5b58\n      pruneCacheEntry(cache, keys[0], keys, this._vnode)\n    }\n  }\n  return vnode;\n}\n")),(0,r.kt)("h2",{id:"\u8def\u7531\u9009\u9879\u5361\u6848\u4f8b"},"\u8def\u7531\u9009\u9879\u5361\u6848\u4f8b"),(0,r.kt)("h2",{id:"appvue"},(0,r.kt)("inlineCode",{parentName:"h2"},"App.vue")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div class="h-full w-full fixed overflow-hidden flex">\n    <div\n      class="h-full flex-none w-72 bg-gray-800 text-gray-50 p-3 flex flex-col"\n    >\n      <h1 class="font-bold text-center text-3xl">Web Site</h1>\n      <ul class="mt-10 px-10 text-center">\n        <li v-for="item in $router.options.routes" class="mb-10">\n          <router-link active-class="text-red-400" :to="{ name: item.name }">\n            {{ item.name }}\n          </router-link>\n          <button\n            @click="handleAddPage(item.name)"\n            class="ml-5 text-gray-500 focus:outline-none"\n          >\n            +\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class="h-full flex-auto bg-gray-50">\n      <div class="flex items-center p-5 border-b text-gray-500">\n        <span class="mr-5">\u9009\u9879\u5361\uff1a</span>\n        <ul class="flex">\n          <li\n            v-for="pageName in $store.state.tabs.pageNames"\n            class="mr-5 bg-blue-100 px-3 py-2 rounded-md"\n          >\n            <router-link\n              active-class="text-yellow-600"\n              :to="{ name: pageName }"\n            >\n              {{ pageName }}\n            </router-link>\n            <button\n              class="ml-3 text-red-400 focus:outline-none"\n              @click="handleRemovePage(pageName)"\n            >\n              -\n            </button>\n          </li>\n        </ul>\n      </div>\n      <keep-alive :include="$store.state.tabs.pageNames">\n        <router-view></router-view>\n      </keep-alive>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  created() {\n    console.log(this);\n  },\n  methods: {\n    handleAddPage(pageName) {\n      this.$store.commit(\'tabs/addPage\', pageName);\n    },\n    handleRemovePage(pageName) {\n      this.$store.commit(\'tabs/removePage\', pageName);\n    },\n  },\n};\n<\/script>\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"/views/page1\u30012\u30013")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <div class="mx-auto text-center p-5">\n    <h1 class="font-bold text-3xl text-red-400">Page 1</h1>\n    <input type="text" class="rounded-md border-2 mt-5 p-3 w-1/2" />\n    <div class="mt-5">\n      <button class="focus:outline-none" @click="count--">-</button>\n      <span class="mx-5 font-bold text-2xl align-middle">{{ count }}</span>\n      <button class="focus:outline-none" @click="count++">+</button>\n    </div>\n  </div>\n</template>\n\n<script>\n//\u8be5\u9875\u9762\u96be\u4ee5\u6539\u52a8\nexport default {\n  name: \'page1\',\n  data() {\n    return {\n      count: 0,\n    };\n  },\n};\n<\/script>\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"router/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport page1 from '../views/page1.vue';\nimport page2 from '../views/page2.vue';\nimport page3 from '../views/page3.vue';\n\nVue.use(VueRouter);\n\nconst routes = [\n  {\n    path: '/page1',\n    name: page1.name,\n    component: page1,\n  },\n  {\n    path: '/page2',\n    name: page2.name,\n    component: page2,\n  },\n  {\n    path: '/page3',\n    name: page3.name,\n    component: page3,\n  },\n];\n\nconst router = new VueRouter({\n  mode: 'history',\n  routes,\n});\n\nexport default router;\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"store/tabs.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export default {\n  namespaced: true,\n  state: {\n    pageNames: [], // \u9009\u9879\u5361\u7684\u9875\u9762\n  },\n  mutations: {\n    addPage(state, newPageName) {\n      if (!state.pageNames.includes(newPageName)) {\n        state.pageNames.push(newPageName);\n      }\n    },\n    removePage(state, pageName) {\n      const index = state.pageNames.indexOf(pageName);\n      if (index >= 0) {\n        state.pageNames.splice(index, 1);\n      }\n    },\n  },\n};\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"store/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Vue from 'vue';\nimport Vuex from 'vuex';\nimport tabs from './tabs';\n\nVue.use(Vuex);\n\nexport default new Vuex.Store({\n  modules: {\n    tabs,\n  },\n});\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"main.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Vue from 'vue';\nimport App from './App.vue';\nimport router from './router';\nimport store from './store';\nimport 'tailwindcss/tailwind.css';\n\nnew Vue({\n  render: (h) => h(App),\n  store,\n  router,\n}).$mount('#app');\n\n")))}c.isMDXComponent=!0}}]);