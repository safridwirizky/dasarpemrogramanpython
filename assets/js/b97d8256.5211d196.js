"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[4790],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>c});var n=t(7294);function r(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function k(a,e){if(null==a)return{};var t,n,r=function(a,e){if(null==a)return{};var t,n,r={},i=Object.keys(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||(r[t]=a[t]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}var l=n.createContext({}),m=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},u=function(a){var e=m(a.components);return n.createElement(l.Provider,{value:e},a.children)},p="mdxType",s={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,r=a.mdxType,i=a.originalType,l=a.parentName,u=k(a,["components","mdxType","originalType","parentName"]),p=m(t),d=r,c=p["".concat(l,".").concat(d)]||p[d]||s[d]||i;return t?n.createElement(c,o(o({ref:e},u),{},{components:t})):n.createElement(c,o({ref:e},u))}));function c(a,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof a||r){var i=t.length,o=new Array(i);o[0]=d;var k={};for(var l in e)hasOwnProperty.call(e,l)&&(k[l]=e[l]);k.originalType=a,k[p]="string"==typeof a?a:r,o[1]=k;for(var m=2;m<i;m++)o[m]=t[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},232:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>k,toc:()=>m});var n=t(7462),r=(t(7294),t(3905));const i={sidebar_position:3,title:"A.3. Python Komentar",sidebar_label:"A.3. Komentar",description:"Tutorial belajar penerapan komentar di Python",keywords:["komentar python","multi line komentar python"],faqs:[{question:"Apa itu komentar di Python?",answer:"Komentar adalah sebuah statement yang tidak akan dijalankan oleh interpreter. Biasanya digunakan untuk menambahkan keterangan atau men-disable statements agar tidak dieksekusi saat run program."},{question:"Komentar di Python",answer:'Di Python, komentar menggunakan karakter # untuk jenis komentar 1 baris, dan karakter """ untuk jenis komentar multi baris.'}]},o=void 0,k={unversionedId:"basic/komentar",id:"basic/komentar",title:"A.3. Python Komentar",description:"Tutorial belajar penerapan komentar di Python",source:"@site/docs/basic/komentar.md",sourceDirName:"basic",slug:"/basic/komentar",permalink:"/basic/komentar",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"A.3. Python Komentar",sidebar_label:"A.3. Komentar",description:"Tutorial belajar penerapan komentar di Python",keywords:["komentar python","multi line komentar python"],faqs:[{question:"Apa itu komentar di Python?",answer:"Komentar adalah sebuah statement yang tidak akan dijalankan oleh interpreter. Biasanya digunakan untuk menambahkan keterangan atau men-disable statements agar tidak dieksekusi saat run program."},{question:"Komentar di Python",answer:'Di Python, komentar menggunakan karakter \\# untuk jenis komentar 1 baris, dan karakter """ untuk jenis komentar multi baris.'}]},sidebar:"tutorialSidebar",previous:{title:"A.2. Run Python di VSCode",permalink:"/basic/run-program-python"},next:{title:"A.4. Variabel",permalink:"/basic/variabel"}},l={},m=[{value:"A.3.1. Komentar satu baris",id:"a31-komentar-satu-baris",level:2},{value:"A.3.2. Komentar multi-baris",id:"a32-komentar-multi-baris",level:2},{value:"\u25c9 Komentar menggunakan <code>#</code> dituliskan",id:"-komentar-menggunakan--dituliskan",level:3},{value:"\u25c9 Komentar menggunakan <code>&quot;&quot;&quot;</code> atau <code>&#39;&#39;&#39;</code>",id:"-komentar-menggunakan--atau-",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],u={toc:m},p="wrapper";function s(a){let{components:e,...i}=a;return(0,r.kt)(p,(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Komentar adalah sebuah statement yang tidak akan dijalankan oleh interpreter. Biasanya digunakan untuk menambahkan keterangan atau men-disable statements agar tidak dieksekusi saat run program."),(0,r.kt)("p",null,"Python mengenal dua jenis komentar, yaitu komentar satu baris dan multi-baris."),(0,r.kt)("h2",{id:"a31-komentar-satu-baris"},"A.3.1. Komentar satu baris"),(0,r.kt)("p",null,"Karakter ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," digunakan untuk menuliskan komentar, contoh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# ini adalah komentar\nprint("halo,")\nprint("selamat pagi!") # ini juga komentar\n\n# println("statement ini tidak akan dipanggil")\n')),(0,r.kt)("p",null,"Jika di-run, outputnya:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"komentar di python",src:t(7266).Z,width:"299",height:"109"})),(0,r.kt)("p",null,"Bisa dilihat statement yang diawali dengan tanda ",(0,r.kt)("inlineCode",{parentName:"p"},"#")," tidak dieksekusi."),(0,r.kt)("h2",{id:"a32-komentar-multi-baris"},"A.3.2. Komentar multi-baris"),(0,r.kt)("p",null,"Komentar multi-baris bisa diterapkan melalui dua cara:"),(0,r.kt)("h3",{id:"-komentar-menggunakan--dituliskan"},"\u25c9 Komentar menggunakan ",(0,r.kt)("inlineCode",{parentName:"h3"},"#")," dituliskan"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# ini adalah komentar\n# ini juga komentar\n# komentar baris ke-3\n")),(0,r.kt)("h3",{id:"-komentar-menggunakan--atau-"},"\u25c9 Komentar menggunakan ",(0,r.kt)("inlineCode",{parentName:"h3"},'"""')," atau ",(0,r.kt)("inlineCode",{parentName:"h3"},"'''")),(0,r.kt)("p",null,"Karakter ",(0,r.kt)("inlineCode",{parentName:"p"},'"""')," atau ",(0,r.kt)("inlineCode",{parentName:"p"},"'''")," sebenarnya digunakan untuk membuat ",(0,r.kt)("em",{parentName:"p"},"multiline string")," atau string banyak baris. Selain itu, bisa juga dipergunakan sebagai penanda komentar multi baris. Contoh penerapannya:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""\nini adalah komentar\nini juga komentar\nkomentar baris ke-3\n"""\n')),(0,r.kt)("p",null,"Atau bisa juga ditulis seperti ini untuk komentar satu baris:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'"""ini adalah komentar"""\n')),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Pembahasan detail mengenai string ada di chapter ",(0,r.kt)("a",{parentName:"li",href:"/basic/string"},"String")))),(0,r.kt)("hr",null),(0,r.kt)("div",{class:"section-footnote"},(0,r.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,r.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,r.kt)("pre",null,(0,r.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/komentar"},"github.com/novalagung/dasarpemrogramanpython-example/../komentar")),(0,r.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/basic/string"},"String"))),(0,r.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.python-guide.org/writing/documentation/"},"https://docs.python-guide.org/writing/documentation/")))))}s.isMDXComponent=!0},7266:(a,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAABtCAIAAAB2sNAmAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAH0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wNS0wMlQxNzo0OTowNCswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTAtMjdUMjE6NDQ6MjcrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTAtMjdUMjE6NDQ6MjcrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA2NGI2NTdhLThmYzMtMTA0My1hZDIyLWJjZDM1NjM3MWUwMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4YWFkYjYyNy03OGRjLTFlNDUtYTE3MS0wNTZiYzAzYzAxMjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4YWFkYjYyNy03OGRjLTFlNDUtYTE3MS0wNTZiYzAzYzAxMjMiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjE4MDM4NjliLTgyY2EtMjg0OC1iNWRiLTU0OWRlZGQwYjk2ZDwvcmRmOmxpPiA8cmRmOmxpPnhtcC5kaWQ6Njc5NmJhYzgtNTU4MS01ODQyLTgyYTYtNmE2ZWI3MTdjNDAxPC9yZGY6bGk+IDxyZGY6bGk+eG1wLmRpZDo4YWFkYjYyNy03OGRjLTFlNDUtYTE3MS0wNTZiYzAzYzAxMjM8L3JkZjpsaT4gPHJkZjpsaT54bXAuZGlkOmE5MTBjOGRkLTkxYTAtNTk0MS1iMWNkLTkzZGQ2YjE0ZGQ4MTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjhhYWRiNjI3LTc4ZGMtMWU0NS1hMTcxLTA1NmJjMDNjMDEyMyIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0wMlQxNzo0OTowNCswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMTI4NGY1MC1mNGIxLWVkNDctYjYwYi00YzFjMDUzMDhmY2IiIHN0RXZ0OndoZW49IjIwMjMtMDktMzBUMjA6NTQ6MTErMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC43IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MDY0YjY1N2EtOGZjMy0xMDQzLWFkMjItYmNkMzU2MzcxZTAzIiBzdEV2dDp3aGVuPSIyMDIzLTEwLTI3VDIxOjQ0OjI3KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjUuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+h3JNPAAADtdJREFUeJztnXFoG9cdx39pE82WLWpPnhzqSolRMEpIb1XoIJG6mLqoS9AMRqCasHpwgpKD1pRMg5FSIYSh/aMIU0JApuD7wx3BGITBEwkReMQgxSPFKlqXCGNhV2pKbKTaqy3FU8ayP+5OOkkn6eSTfXb8+/xj6/R77/fu3X31fr/37klHXn/9dUAQRCZekrsBCHKoQQUiiJygAhFETlCBCCInqEAEkRNUIILIydFGVXTtBk20Fh1J3CUfGuhLOu71VnRs+P6FG1d5Zok7pHsSYNDDmGWjX304GgYAgCse+l0dewSu3fyAgG/HPvxynrVky7Fmibuk+xZTIft+9tuxD7+cBwAwFco26kwRpIFUGwOV7a8oK7zzSnvpO6PDJEmSdxIAkLhDkiSZVwX7khweZUWwFR1jbXWXPIP8ak/95jzz36BBB1XQXbxmEjp+5YyOrejC+WrlEWS/UEWBb5KuLzzUxTIRKi9+9NkXnwy9KdX19xtbAL98lZNKNruVV87gGR1kt7IVCmazW0riyrVyjQ0adACJ6LdZaD11QVCiCLLPqKLAb25++vWPhveLRai8+NFngycefe0e+0asC90lmqZpmi4a7gBMF061QnbpPhcdppaWOOVcOaODxNJSpQpTc7ei2VZi6OMSDQ6e0QEkHo4+WMryhlME2c9UnYnJzo1+wheh8iLlGTzxaNI9NldpfBKAi0KZzA0AWomrNE1/cGrpK5Kfnv3IKWfQoIPEw/tVqgyPziVA+cbQNQ3v4JUzOoBEbBLCP6YwEEUOCLXmQrNzo598vdIz6KHeeYfyDOqX6pSfEFvRMXIsuqUkPrhZlM6F7y9tgfLU0EUdJGKTFYsDAMCk+04ClMQbhXSRSR1179I0M62DgShyEBCxGpGdu/np5ErP+42RH8v86K1oFkrSufnRcAJalUpIPLxVs4ZJ990E7yUTgrLDLXk3ARiIIgcBcasR2bmbf5rbqQvdJZq+BACQuEPeLhwOj879jr6kI4Y+Pl+o+tbDxLs6XeLhJEBt9dxy3+FWO85/fFEHkP3p+6J6Tl04/wAAQPnGVZq+CvxVCgTZHxzB3UkIIiP4TAyCyAkqEEHkBBWIIHKCCkQQOUEFIoicoAIRRE6O/vzzz3K3AUEOLzgGIoicoAIRRE5QgQgiJ6hABJETVCCCyAkqEEHkBBWIIHKCCkQQOUEFIoicoAIRRE5QgQgiJ6hABJETVCCCyAkqEEHkBBWIIHKCCkQQOUEFIoicoAIRRE5QgQgiJy+3tbXtuPDz588b15JqmOyU5eR6ZPGnHZXWWx3v/br5m38ld+ZIb3W899arO/b+AkJe17ylzvwjtuuOpF33fB3W3xKdu3r9jhw5suOykn5H3k5R6vyLdNQ3xfwGvMlOEerywyUUWUEuGRwPxCs5Ci8kDb0GPcSLLEx2ypCtVqx+hB3tIbtwTlIZGNac3kp9Tv9v713Lfjn2AEkKhILA9FaHhbKDb2rV6iBUyaBP1D3EL21xWKHinRePrfZazpkgLijmBrJnjnYDk53qelzhA+9g0oDLEZ7y7esOkapAjnggdo4iukDf3qnIrcbq/MyKB8Y77RSR72qTnSLURaNnPBA7Rxms+nBNZeutDotWAQAlA2t+zM3Xy7MsHKzuiKmEMeYN4owjk53qyiZVWq0il4yudhJaBdsAniPWj97q6IV7MaWl0KTVvJHaQlGWYuPSM2KGynvQy7zBGoYXkg4L5WivOYaS19vh71utl9s7AACeRtyb0wMqjxEi7s1pxmJA5THC7ZWjl08eAwDo6PB4AAAgte6+8QwAAI4Ne3jFAQBg2KPpYIpvb97+/Om8oKOqDSuj7HKI6WSulwqHCveSQM9XEKiQpclOEVAowr2s9nvPtZA0EyOQBcZjqzmF1uKw6uusazWbA1V7lVLhx2lFp6FWtXrrObjn8/l8Pl8wCdperh1qwpAN+nw+XzStJuwmANBbe7WbUR8L7zJUdGSyU4QqGfT5psKgZ4d6zpHFbgIAUGuVMV80rdASzN9Ogx5MdgvnKJhUEVzXKLQWpknBZE5tsOrjgXGfzxdNQ46t1sfFB8JnpNBaLMpYoTwAQDww7otuai2UvdbPBx87ebl16/aa270WSTUbh4/B9GYKmrUD7NsD2mZIbc/T6273WiQF2yspt3vN7V7j5AcdRrb4ynbzafIlACCva1o5sxVQXR4+VuIob1kf5ZdDqJMFe4np0mAyV1xjac9X9p235G6b8OM0qLu4zjV1qSH9WOII26i5UJOdUOeSC8xZB5OgtVAURdUhxPj6ZuFFeKpYFMzBhSRoz9W4teKBKe7TMh5bzSmUncyLdJQdF4r6sNCZNR0ZGPmxtZjOaRXpGOspHriXzKm7AAByyYUw/y8E4qYudTrKnks8EEsrOg3FTSpqp/gzglwyOBUuLx+e8gWTKqJW36ci6/Q8AMB08im0Hj0P8GDlWYeWkQ1oO56tPHgmpvijJ8+aWl+GAdXJpqePuFyR/vvmdkfTgKBl3ZRdjrJOhiq9JITInoeS20bVrofwQjLH3TWmLjW/CTtEahSqJiiKACiO+OKB8Tiw2R1l7xSVmejbVQDVfyE7HlvttXSZAKpVxw8tASBdZrCazYES8pEvRRFl80DljhRarRpySX50ncuu1j4r5rzyncQWFFOOV4PwGRVifba7S1BoxedPTUePA0w/2n77ctMAPJseUHWktm7U+1vD2/99UmcJkTTmuktHoewECOcbY+pSp2NTkueIJCnw+fPn6X+OVdRXPHDP4LB0tusBarZTb+hUwOZ6dbvayaDJbtECNw+ktzosyjKTTqWCEw+XpJvsVPE8UJmjXDJ4D3otFrspzp2uQtmZP69OpQKqUJ5siI/RRZxRaYHSHLo2jHjmnz55W6Md2BzQNqeSmzULldJ09Hj+/+NHm+ouX5la1z0QN9mp+nppJzC3Dfd5YOpSpx9PSa91V1fkRckKgLnNFPlYDcBkpyjBXEZMMsg61Ft7teW60FsN6rKZotVsrtSu3FE8MB5Nq9k0Lvw4DfkUQm81MBG4EPHYao7NPMWwms2Vn2DVMyqCS1XrkN+wsXn7yX+YAY9+9LTjdPvp1s0H0wWDJ1vPmo7/4nz1WqY3U1BI88jTzdsrmemqJQTQWx0VUhfJ112SdzbJYm+beCCWVhscBpX0CBSgcXOhHMWrfNWmmgCKY1hx6xfhhaSBNz2t0HLzhmwouZA0WNhK08lkTst9FpZFy8VRSzpa6r7EEXNsKtjusFgohyE4PuUDO8WbtAzEwXSuvL1WfTwwDlaHJR+H5pLB8UDF82PiBrbedNQ3Fa50RgKY7AREfeOi7osOo8ZjBADYXuGt9U1vpoya1pV/8yPQeXr99HXNZY/qMvDnQku54V4b9mgKU6aNXT/MXw6hN616wV7iX2KCoghmyrkut4JJFoQfpwlClax3xl+YIydOnNhx4T17JqaIPVu03oer4w2CvK5pfbR2Y1rgrWFP+9Ztdu5kf7HXl0NvdViUMcERpLQpsj0TIw97tsS639dyG8/AsKYjtV73HMzesG8uh8lOqNNR6XMwDAdQgcguMDCsMXYwK+nVFiEOOWyOlUsGxYX6YjiAUSiC7DOkRKG4OwlB5AQViCByggpEEDmRNBPzl6/++qvwH/5M17Y0uyacxhYAgOUZm1NEAQQ5HEgcA8UmoKGRIZvN5o1kpLlDkBcNSQqUMAOEIAhAI9YDSa+/vxuAF18WQk7IRLxDI6HaZWtaIsiLibQdus+h+/dvb3iZALO7z2UGALPLBj6bzWaz2bwRMFIuc4XSZtdEvybizVs6vaSUxiDIQUTqXOjy3/44EgKA0OxipqWtBwBCI05uLCscFIC0GVuWZ1nT0Igvkuk+ixJEDhuSolDhPJAXhAIALFcun9lYlOIeQQ4+DV8PJL1OI7CxZa3JT/742NPWUsUSQV5QpOaBQt/WBGs/hAAAzC7KWFlW9HfLwKaOAGZXX3cm4mcXCs2uCb/fP1Exg0SQFwZpUehL5WEo7Y/0Ofv9/n4AWI5EMsY2KA5M+/3+fmbe1GkDr9/p9zsBAJZnbPmp0NDsImU0trT1AODsKPJis0/3RpBef78G1yeQg8GLtUOXWSPE5UHkcLBPx0AEOUDg/kAEOaigAhFETlCBCCInqEAEkZM9UiCzxu73+/0H9fFr0ivwkIDZNYEPDiCS2CMF7tIOXdKLAkAONvtvPXCfQjtt+OUaSOORqED+42ZCO3RrfCtM2V5e0us/uxHRGI0tmcjMYk+/sYVdmi+1hMJr3nNtwr7MrgkKfLNtTjE7iXmbhrk3ZvuqfckN+xAsguwISVGo2UUZ12ZsLOy9SXqd3EFvRNNfJUoU3svbbWybtc0stxj7mb89fWYBSyasnVmGDLcPo6rUW4zOvg2vzWazzSx393vJSt5Jb3/38kx+W8fyzNBIqEoIHfphTUr/IYj0PLB0Wy15tnt5hhVDaGSWUZAwwnt5uS0Sha0S4nf9VobREjBbMjSvmYXrJM92w/J3NHeMMUSQXURSFBoaGerx+pmNEFy0+JoGutmtEQyZSMXy4vfyircUA7PrQqDOxY0MGM+SADSY+3paMouzGGEiu4vUmRhugoL0+p0TLhiaBdFfCcrt5R0JASOxNmG7kRDp9YuyFEtmgxb2HvphzWnkPkAyEW/NZ8Npp01aU5DDTqNWIxY3mCwpNLuYYRMtMYjay1vZcnEjUyXKFYL09ndnFmeF6zS7+tgs0Gaz2UTszSC9B3iFE9kXSBoDXRP+ghy4LbYjQ+CacObj0NKZS94OXaG9vEJezBUtQyO+vgknOxladejNR8bcrGdIoM7QyKzNzw+hqzS+7s5CECEOw+4ks2vC2TYrQjUlhmbXhLNnEfcpIrXA3UkNovjbosx9PS242ofsMvhMDA/aOXOWH4ViuInsOpKiUARBJIJRKILICSoQQeQEFYggcoIKRBA5QQUiiJygAhFETlCBCCInqEAEkRNUIILICSoQQeQEFYggcoIKRBA5QQUiiJygAhFETlCBCCInqEAEkRNUIILICSoQQeQEFYggcvJ/oRn78MoHzoQAAAAASUVORK5CYII="}}]);