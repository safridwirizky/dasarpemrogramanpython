"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[500],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>h});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,h=m["".concat(s,".").concat(k)]||m[k]||c[k]||i;return a?t.createElement(h,o(o({ref:n},u),{},{components:a})):t.createElement(h,o({ref:n},u))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4900:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(7462),r=(a(7294),a(3905));const i={sidebar_position:13,title:"A.13. List Comprehension",sidebar_label:"A.13. List Comprehension",description:"List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru.",keywords:["list comprehension","python list comprehension","shortcut list"],faqs:[{question:"Apa itu list comprehension di Python?",answer:"List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru"}]},o=void 0,l={unversionedId:"basic/list-comprehension",id:"basic/list-comprehension",title:"A.13. List Comprehension",description:"List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru.",source:"@site/docs/basic/list-comprehension.md",sourceDirName:"basic",slug:"/basic/list-comprehension",permalink:"/basic/list-comprehension",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,title:"A.13. List Comprehension",sidebar_label:"A.13. List Comprehension",description:"List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru.",keywords:["list comprehension","python list comprehension","shortcut list"],faqs:[{question:"Apa itu list comprehension di Python?",answer:"List comprehension adalah metode ringkas pembuatan list selain menggunakan literal `[]`. Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru"}]},sidebar:"tutorialSidebar",previous:{title:"A.12. List",permalink:"/basic/list"}},s={},p=[{value:"A.13.1. Penerapan list comprehension",id:"a131-penerapan-list-comprehension",level:2},{value:"\u25c9 Contoh #1",id:"-contoh-1",level:3},{value:"\u25c9 Contoh #2",id:"-contoh-2",level:3},{value:"\u25c9 Contoh #3",id:"-contoh-3",level:3},{value:"\u25c9 Contoh #4",id:"-contoh-4",level:3},{value:"\u25c9 Contoh #5",id:"-contoh-5",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:p},m="wrapper";function c(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"List comprehension")," adalah metode ringkas pembuatan list selain menggunakan literal ",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),". Cara ini lebih banyak diterapkan untuk operasi list yang menghasilkan struktur baru."),(0,r.kt)("p",null,"Pada chapter ini kita akan mempelajarinya."),(0,r.kt)("h2",{id:"a131-penerapan-list-comprehension"},"A.13.1. Penerapan list comprehension"),(0,r.kt)("p",null,"Metode penulisan ini membuat kode menjadi sangat ringkas, dengan konsekuensi agak sedikit membingungkan untuk yang belum terbiasa. Jadi gunakan sesuai kebutuhan."),(0,r.kt)("p",null,"Silakan pelajari contoh berikut agar lebih mudah memahami seperti apa itu ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),"."),(0,r.kt)("h3",{id:"-contoh-1"},"\u25c9 Contoh #1"),(0,r.kt)("p",null,"Perulangan berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = []\nfor i in range(5):\n    seq.append(i * 2)\n\nprint(seq) # output \u2192 [0, 2, 4, 6, 8]\n")),(0,r.kt)("p",null,"... bisa dituliskan lebih ringkas menggunakan ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),", menjadi seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = [i * 2 for i in range(5)]\n\nprint(seq) # output \u2192 [0, 2, 4, 6, 8]\n")),(0,r.kt)("h3",{id:"-contoh-2"},"\u25c9 Contoh #2"),(0,r.kt)("p",null,"Perulangan berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = []\nfor i in range(10):\n    if i % 2 == 1:\n        seq.append(i)\n\nprint(seq) # output \u2192 [1, 3, 5, 7, 9]\n")),(0,r.kt)("p",null,"... bisa dituliskan lebih ringkas menggunakan ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),", menjadi seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = [i for i in range(10) if i % 2 == 1]\n\nprint(seq) # output \u2192 [1, 3, 5, 7, 9]\n")),(0,r.kt)("h3",{id:"-contoh-3"},"\u25c9 Contoh #3"),(0,r.kt)("p",null,"Perulangan berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = []\nfor i in range(1, 10):\n    if i % 2 == 0:\n        seq.append(i * 2)\n    else:\n        seq.append(i * 3)\n\nprint(seq) # output \u2192 [3, 4, 9, 8, 15, 12, 21, 16, 27]\n")),(0,r.kt)("p",null,"... bisa dituliskan lebih ringkas menjadi dengan bantuan ",(0,r.kt)("em",{parentName:"p"},"ternary")," menjadi seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = []\nfor i in range(1, 10):\n    seq.append(i * (2 if i % 2 == 0 else 3))\n\nprint(seq) # output \u2192 [3, 4, 9, 8, 15, 12, 21, 16, 27]\n")),(0,r.kt)("p",null,"... dan bisa dijadikan lebih ringkas lagi menggunakan ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"seq = [((i * 2) if i % 2 == 0 else (i * 3)) for i in range(1, 10)]\n\nprint(seq) # output \u2192 [3, 4, 9, 8, 15, 12, 21, 16, 27]\n")),(0,r.kt)("h3",{id:"-contoh-4"},"\u25c9 Contoh #4"),(0,r.kt)("p",null,"Perulangan berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"list_x = ['a', 'b', 'c']\nlist_y = ['1', '2', '3']\n\ncomb = []\nfor x in list_x:\n    for y in list_y:\n        comb.append(x + y)\n\nprint(seq) # output \u2192 ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']\n")),(0,r.kt)("p",null,"... bisa dituliskan lebih ringkas menggunakan ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),", menjadi seperti berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"comb = [x + y for x in list_x for y in list_y]\n\nprint(seq) # output \u2192 ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3']\n")),(0,r.kt)("h3",{id:"-contoh-5"},"\u25c9 Contoh #5"),(0,r.kt)("p",null,"Perulangan berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"matrix = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n]\n\ntransposed = []\nfor i in range(4):\n    tr = []\n    for row in matrix:\n        tr.append(row[i])\n    transposed.append(tr)\n\nprint(transposed) # output \u2192 [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]\n")),(0,r.kt)("p",null,"... bisa dituliskan lebih ringkas menjadi seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"matrix = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n]\n\ntransposed = []\nfor i in range(4):\n    transposed.append([row[i] for row in matrix])\n\nprint(transposed) # output \u2192 [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]\n")),(0,r.kt)("p",null,"... dan bisa dijadikan lebih ringkas lagi menggunakan ",(0,r.kt)("em",{parentName:"p"},"list comprehension"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"matrix = [\n    [1, 2, 3, 4],\n    [5, 6, 7, 8],\n    [9, 10, 11, 12],\n]\n\ntransposed = [[row[i] for row in matrix] for i in range(4)]\n\nprint(transposed) # output \u2192 [[1, 5, 9], [2, 6, 10], [3, 7, 11], [4, 8, 12]]\n")),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/list-comprehension"},"github.com/novalagung/dasarpemrogramanpython-example/../list-comprehension")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/list"},"List")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/for-range"},"Perulangan \u2192 for, range"))),(0,r.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stack vs Queue")),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/datastructures.html"},"https://docs.python.org/3/tutorial/datastructures.html")))))}c.isMDXComponent=!0}}]);