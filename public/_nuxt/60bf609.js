(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{232:function(t,e,r){"use strict";r.r(e);var n={},o=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-white dark:bg-gray-800"},[r("nav",{staticClass:"bg-white dark:bg-gray-800"},[r("div",{staticClass:"container p-6 mx-auto"},[r("div",{staticClass:"flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300"},[r("NuxtLink",{staticClass:"\n            border-b-2 border-transparent\n            hover:text-gray-800\n            dark:hover:text-gray-200\n            hover:border-blue-500\n            mx-1.5\n            sm:mx-6\n          ",class:{"border-blue-500":"index"===t.$route.name},attrs:{to:"/"}},[t._v("home")]),t._v(" "),r("NuxtLink",{staticClass:"\n            border-b-2 border-transparent\n            hover:text-gray-800\n            dark:hover:text-gray-200\n            hover:border-blue-500\n            mx-1.5\n            sm:mx-6\n          ",class:{"border-blue-500":"service"===t.$route.name},attrs:{to:"/service"}},[t._v("service")]),t._v(" "),r("NuxtLink",{staticClass:"\n            border-b-2 border-transparent\n            hover:text-gray-800\n            dark:hover:text-gray-200\n            hover:border-blue-500\n            mx-1.5\n            sm:mx-6\n          ",class:{"border-blue-500":"price"===t.$route.name},attrs:{to:"/price"}},[t._v("price")]),t._v(" "),r("NuxtLink",{staticClass:"\n            border-b-2 border-transparent\n            hover:text-gray-800\n            dark:hover:text-gray-200\n            hover:border-blue-500\n            mx-1.5\n            sm:mx-6\n          ",class:{"border-blue-500":"blog"===t.$route.name},attrs:{to:"/blog"}},[t._v("blog")]),t._v(" "),r("a",{staticClass:"\n            border-b-2 border-transparent\n            hover:text-gray-800\n            dark:hover:text-gray-200\n            hover:border-blue-500\n            mx-1.5\n            sm:mx-6\n          ",attrs:{target:"_blank",href:"https://form.run/@hiroyuki-akimoto-hp-1615021598"}},[t._v("contact")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);r(61);var n=r(60),o=r.n(n),c={transition:"slide-bottom",data:function(){return{fetchArticles:[],fetchImages:[],searchImage:"Programming"}},mounted:function(){var t=this;o.a.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fqiita.com%2Fhiroyuki_0507%2Ffeed&api_key=m2ksrp2xfjc8un9cobyywxstbsthyswxjzkafj6j").then((function(e){console.log(e.data.items),t.fetchArticles=e.data.items})).catch((function(t){console.log(t)})),o.a.get("".concat("https://pixabay.com/api/?key=").concat("23173794-d75fd9b1a1194fc6676d7bbf3","&q=").concat(this.searchImage)).then((function(e){var r=e.data.hits;for(var i in r)if(Object.hasOwnProperty.call(r,i)&&(t.fetchImages.push(r[i].largeImageURL),t.fetchImages.length===t.fetchArticles.length))return})).catch((function(t){console.log(t)}))}},l=r(38),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NubBer"),t._v(" "),r("div",{staticClass:"px-20 py-20 bg-gray-100"},[r("div",{staticClass:"flex-wrap items-start justify-center md:flex"},t._l(t.fetchArticles,(function(article,e){return r("div",{key:article.guid,staticClass:"flex-wrap max-w-sm my-10 mr-5 bg-white"},[r("img",{staticClass:"object-cover w-max max-h-52",attrs:{src:t.fetchImages[e]}}),t._v(" "),r("div",{staticClass:"p-5"},[r("small",{staticClass:"text-xs text-black truncate bg-white md:text-sm"},[t._v(t._s(article.pubDate.substring(0,10)))]),t._v(" "),r("h1",{staticClass:"py-2 text-sm font-bold text-blue-800 truncate md:text-2xl"},[t._v("\n            "+t._s(article.title)+"\n          ")]),t._v(" "),r("p",{staticClass:"text-xs text-black truncate bg-white md:text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")]),t._v(" "),r("a",{staticClass:"inline-block px-6 py-2 mt-4 text-white bg-blue-500 rounded",attrs:{href:article.link}},[t._v("Read More")])])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NubBer:r(232).default})}}]);