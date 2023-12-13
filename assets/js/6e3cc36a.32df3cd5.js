"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[5835],{3905:(e,a,n)=>{n.d(a,{Zo:()=>s,kt:()=>g});var i=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=i.createContext({}),d=function(e){var a=i.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},s=function(e){var a=d(e.components);return i.createElement(o.Provider,{value:a},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=t,g=m["".concat(o,".").concat(u)]||m[u]||k[u]||l;return n?i.createElement(g,r(r({ref:a},s),{},{components:n})):i.createElement(g,r({ref:a},s))}));function g(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=u;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[m]="string"==typeof e?e:t,r[1]=p;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1986:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var i=n(7462),t=(n(7294),n(3905));const l={sidebar_position:46,title:"A.46. Python File I/O",sidebar_label:"A.46. File I/O"},r=void 0,p={unversionedId:"basic/file",id:"basic/file",title:"A.46. Python File I/O",description:"Pada chapter ini kita akan belajar tentang pengolahan file dan folder, dan beberapa hal relevan lainnya yang masih berhubungan dengan manajemen file & folder.",source:"@site/docs/basic/file.md",sourceDirName:"basic",slug:"/basic/file",permalink:"/basic/file",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,title:"A.46. Python File I/O",sidebar_label:"A.46. File I/O"},sidebar:"tutorialSidebar",previous:{title:"A.45. DocString",permalink:"/basic/docstring"},next:{title:"A.47. CLI Arguments & Flags",permalink:"/basic/cli-arguments-flags"}},o={},d=[{value:"A.46.1. Membuka stream file",id:"a461-membuka-stream-file",level:2},{value:"A.46.2. Keyword <code>with</code>",id:"a462-keyword-with",level:2},{value:"A.46.3. Menulis file",id:"a463-menulis-file",level:2},{value:"A.46.4. Append konten ke file",id:"a464-append-konten-ke-file",level:2},{value:"A.46.5. Membaca file",id:"a465-membaca-file",level:2},{value:"A.46.6. Membaca dan menulis dalam 1 sesi",id:"a466-membaca-dan-menulis-dalam-1-sesi",level:2},{value:"A.46.7. Mengosongkan isi file",id:"a467-mengosongkan-isi-file",level:2},{value:"A.46.8. Menghapus file atau folder",id:"a468-menghapus-file-atau-folder",level:2},{value:"A.46.9. Mengecek apakah file atau folder ada",id:"a469-mengecek-apakah-file-atau-folder-ada",level:2},{value:"A.46.10. Membuat folder baru",id:"a4610-membuat-folder-baru",level:2},{value:"A.46.11. Menampilkan isi folder",id:"a4611-menampilkan-isi-folder",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],s={toc:d},m="wrapper";function k(e){let{components:a,...l}=e;return(0,t.kt)(m,(0,i.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Pada chapter ini kita akan belajar tentang pengolahan file dan folder, dan beberapa hal relevan lainnya yang masih berhubungan dengan manajemen file & folder."),(0,t.kt)("h2",{id:"a461-membuka-stream-file"},"A.46.1. Membuka stream file"),(0,t.kt)("p",null,"Di Python, hampir semua operasi file diawali dengan pemanggilan fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"open()"),", dan diakhiri pemanggilan method ",(0,t.kt)("inlineCode",{parentName:"p"},"close()")," (milik object yang dikembalikan oleh fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"open()"),")."),(0,t.kt)("p",null,"Fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," dalam penggunannya membutuhkan pengisian beberapa parameter:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Parameter ke-1: nama file."),(0,t.kt)("li",{parentName:"ul"},"Parameter ke-2: mode I/O, ada beberapa mode operasi file, diantaranya:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"w")," untuk mode tulis dengan posisi kursor ada di baris paling awal. Jadi operasi penulisan bisa menimpa konten yang sudah ada. Selain itu, mode ini membuat isi file otomatis menjadi kosong saat fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"open()")," dipanggil."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"a")," untuk mode ",(0,t.kt)("em",{parentName:"li"},"append"),", yaitu mode tulis dengan posisi kursor sudah di baris paling akhir. Jadi penambahan konten tidak akan menimpa konten sebelumnya, tapi ditambahkan di akhir."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"r")," untuk mode baca."))),(0,t.kt)("li",{parentName:"ul"},"Ada juga parameter opsional lainnya, salah satunya ",(0,t.kt)("inlineCode",{parentName:"li"},"encoding")," yang umum diisi dengan nilai ",(0,t.kt)("inlineCode",{parentName:"li"},"utf-8"),".")),(0,t.kt)("p",null,"Bentuk paling sederhana penerapan operasi buka file:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'f = open("/path/to/file/file.txt", "w", encoding="utf-8")\n\n# ...\n\nf.close()\n')),(0,t.kt)("p",null,"Kode di atas akan membuka stream I/O file bernama ",(0,t.kt)("inlineCode",{parentName:"p"},"file.txt"),". Jika file tujuan belum ada, maka otomatis dibuatkan oleh Python. Dari object kembalian fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," nantinya kita bisa lakukan banyak jenis operasi seperti membaca isi file, menulis, menghapus, dan lainnya."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Untuk pengguna Windows, tulis saja path-nya dengan karakter ",(0,t.kt)("inlineCode",{parentName:"p"},"\\")," ter-escape.",(0,t.kt)("br",null),"Contoh: ",(0,t.kt)("inlineCode",{parentName:"p"},'C:\\\\Users\\\\novalagung\\\\Desktop\\\\file.txt"')," ")),(0,t.kt)("p",null,"Silakan tulis kode di atas, lalu ganti path-nya dengan current path (atau bisa gunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"."),"), kemudian run programnya. Hasil eksekusi program adalah pembuatan sebuah file baru bernama ",(0,t.kt)("inlineCode",{parentName:"p"},"file.txt")," yang isinya kosong."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(6193).Z,width:"234",height:"98"})),(0,t.kt)("p",null,"Mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w")," digunakan disitu, artinya file dibuka dengan mode tulis. Salah satu efek dari penggunaan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w")," adalah ketika file dibuka isinya pasti dikosongkan terlebih dahulu."),(0,t.kt)("p",null,"File yang dibuka, wajib untuk selalu ditutup di akhir. Karena membiarkan file tetap terbuka beresiko membuat isi file rusak ketika ada lebih dari 1 pengakses yang melakukan operasi terhadap file tersebut secara bersamaan."),(0,t.kt)("p",null,"Untuk mengecek apakah file sedang terbuka stream-nya, bisa dengan melihat nilai attribute ",(0,t.kt)("inlineCode",{parentName:"p"},"closed"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'f = open("file.txt", "w", encoding="utf-8")\nprint("file is closed:", f.closed)\n# output \u279c file is closed: False\n\n# ...\n\nf.close()\nprint("file is closed:", f.closed)\n# output \u279c file is closed: True\n')),(0,t.kt)("h2",{id:"a462-keyword-with"},"A.46.2. Keyword ",(0,t.kt)("inlineCode",{parentName:"h2"},"with")),(0,t.kt)("p",null,"Ada cara yang lebih efisien dalam operasi buka file agar file otomatis ter-close setelah digunakan, yaitu dengan menggunakan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"with")," diikuti statement ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," lalu syntax ",(0,t.kt)("inlineCode",{parentName:"p"},"as nama_variabel"),". Kurang lebih seperti ini penulisannya:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "w", encoding="utf-8") as f:\n    print("file is closed:", f.closed)\n    # output \u279c file is closed: False\n    # ...\n\nprint("file is closed:", f.closed)\n# output \u279c file is closed: True\n')),(0,t.kt)("h2",{id:"a463-menulis-file"},"A.46.3. Menulis file"),(0,t.kt)("p",null,"Operasi penulisan konten ke file dilakukan via method ",(0,t.kt)("inlineCode",{parentName:"p"},"write()")," milik object file. Contoh penerapannya bisa dilihat pada kode berikut, dimana ada method ",(0,t.kt)("inlineCode",{parentName:"p"},"write()")," digunakan 3x untuk menulis karakter string."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "w", encoding="utf-8") as f:\n    f.write("hello")\n    f.write("python\\n")\n    f.write("how are you?\\n")\n')),(0,t.kt)("p",null,"Output program:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(609).Z,width:"233",height:"280"})),(0,t.kt)("p",null,"Program di-run 3x dan isinya tetap sama (tidak menumpuk), ini karena setiap kali statement ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," dijalankan dengan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w"),", file akan dikosongkan terlebih dahulu."),(0,t.kt)("h2",{id:"a464-append-konten-ke-file"},"A.46.4. Append konten ke file"),(0,t.kt)("p",null,"Gunakan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"a")," untuk append konten ke file yang isinya bisa saja tidak kosong (agar isi konten tidak ditimpa)."),(0,t.kt)("p",null,"Coba jalankan kode berikut terahdap file ",(0,t.kt)("inlineCode",{parentName:"p"},"file.txt")," yang sebelumnya sudah dibuat. Saat program di-run kondisi file sudah terisi dan tidak dikosongkan terlebih dahulu. Dengan mengeksekusi ",(0,t.kt)("inlineCode",{parentName:"p"},"write()")," disitu maka isi konten akan bertambah terus setiap kali program di-run."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "a", encoding="utf-8") as f:\n    f.write("happy monday\\n")\n')),(0,t.kt)("p",null,"Output program:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(8276).Z,width:"234",height:"477"})),(0,t.kt)("p",null,"Bisa dilihat, setiap kali program dieksekusi konten ",(0,t.kt)("inlineCode",{parentName:"p"},"happy monday\\n")," bertambah terus."),(0,t.kt)("h2",{id:"a465-membaca-file"},"A.46.5. Membaca file"),(0,t.kt)("p",null,"Method ",(0,t.kt)("inlineCode",{parentName:"p"},"readline()")," dan ",(0,t.kt)("inlineCode",{parentName:"p"},"read()")," milik object file, keduanya digunakan untuk membaca isi file."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Method ",(0,t.kt)("inlineCode",{parentName:"p"},"readline()")," akan membaca isi file baris per baris. Pembacaan dimulai dari baris paling atas dan proses pembacaan terjadi setiap kali method ",(0,t.kt)("inlineCode",{parentName:"p"},"readline()")," dipanggil. Ketika method ini mengembalikan string kosong, bisa jadi menandakan semua baris konten file sudah terbaca."),(0,t.kt)("p",{parentName:"li"},"  Disini penulis gunakan kata ",(0,t.kt)("em",{parentName:"p"},"bisa jadi")," karena ada kasus dimana pada beberapa baris bisa saja memang isinya sengaja kosong.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Method ",(0,t.kt)("inlineCode",{parentName:"p"},"read()")," akan membaca seluruh isi file. Pemanggilan method ini untuk kedua kalinya pasti mengembalikan string kosong, menandakan semua baris konten file sudah terbaca."))),(0,t.kt)("p",null,"Mari praktekan penggunaan 2 method di atas. Pertama isi file ",(0,t.kt)("inlineCode",{parentName:"p"},"file.txt")," secara manual dengan konten berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},"hellopython\nhow are you?\nhappy monday\n")),(0,t.kt)("p",null,"Kemudian baca isinya per baris menggunakan kode berikut:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "a", encoding="utf-8") as f:\n    print(f"line 1: {f.readline()}")\n    print(f"line 2: {f.readline()}")\n    print(f"line 3: {f.readline()}")\n    print(f"line 4: {f.readline()}")\n    print(f"line 5: {f.readline()}")\n')),(0,t.kt)("p",null,"Output program:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(1144).Z,width:"613",height:"213"})),(0,t.kt)("p",null,"Malah error? Kok bisa? Error ini disebabkan karena kita menggunakan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"a")," yang mode tersebut hanya valid untuk operasi append. Kita perlu mengubah mode menjadi ",(0,t.kt)("inlineCode",{parentName:"p"},"r")," untuk operasi pembacaan file."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r", encoding="utf-8") as f:\n    print(f"line 1: {f.readline()}")\n    print(f"line 2: {f.readline()}")\n    print(f"line 3: {f.readline()}")\n    print(f"line 4: {f.readline()}")\n    print(f"line 5: {f.readline()}")\n')),(0,t.kt)("p",null,"Output program:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(5556).Z,width:"261",height:"282"})),(0,t.kt)("p",null,"Bisa dilihat method ",(0,t.kt)("inlineCode",{parentName:"p"},"readline()")," mengembalikan data per baris dari atas ke bawah dengan jumlah sesuai dengan berapa kali baris method tersebut dipanggil."),(0,t.kt)("p",null,"Dalam penerapannya, dianjurkan untuk menggunakan method ini dalam perulangan kemudian ditambahkan pengecekan isi konten untuk menandai bahwa konten sudah terbaca semua. Contohnya seperti ini:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r", encoding="utf-8") as f:\n    i = 0\n    while True:\n        line = f.readline()\n        if not line:\n            break\n        print(f"line {i}: {line}")\n        i += 1\n')),(0,t.kt)("p",null,"Kode di atas bisa disederhanakan lagi dengan cara langsung mengiterasi object file-nya. Jadi variabel ",(0,t.kt)("inlineCode",{parentName:"p"},"f")," digunakan secara langsung pada statement perulangan. Hal ini bisa dilakukan karena tipe data kembalian fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"open()")," adalah ",(0,t.kt)("inlineCode",{parentName:"p"},"TextIOWrapper")," dan tipe ini termasuk tipe data yang ",(0,t.kt)("em",{parentName:"p"},"iteratable"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r", encoding="utf-8") as f:\n    i = 1\n    for line in f:\n        print(f"line {i}: {line}")\n        i += 1\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai tipe data iteratable dibahas pada chapter ",(0,t.kt)("a",{parentName:"p",href:"#"},"Iterator"))),(0,t.kt)("p",null,"Kode yang sudah cukup ringkas di atas bisa disederhanakan lagi dengan cara membungkus tipe data ",(0,t.kt)("inlineCode",{parentName:"p"},"f")," dalam fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"enumerate()"),". Fungsi ini membuat suatu object yang iteratable menjadi memiliki index di setiap element-nya."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r", encoding="utf-8") as f:\n    for i, line in enumerate(f):\n        print(f"line {i+1}: {line}")\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Lebih detailnya mengenai fungsi ",(0,t.kt)("inlineCode",{parentName:"p"},"enumerate()")," data iteratable dibahas pada chapter ",(0,t.kt)("a",{parentName:"p",href:"#"},"Iterator"))),(0,t.kt)("p",null,"Jika goal dari program adalah hanya membaca isi file secara menyeluruh, sebenarnya lebih praktis lagi menggunakan method ",(0,t.kt)("inlineCode",{parentName:"p"},"read()"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r", encoding="utf-8") as f:\n    print(f.read())\n')),(0,t.kt)("h2",{id:"a466-membaca-dan-menulis-dalam-1-sesi"},"A.46.6. Membaca dan menulis dalam 1 sesi"),(0,t.kt)("p",null,"Di awal chapter telah dijelaskan tentang kegunaan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"a"),", dan ",(0,t.kt)("inlineCode",{parentName:"p"},"r"),". Lalu bagaimana jika ada kebutuhan untuk membaca dan menulis file dalam satu sesi? Jawabannya adalah dengan menambahkan tanda ",(0,t.kt)("inlineCode",{parentName:"p"},"+")," pada mode (jadinya ",(0,t.kt)("inlineCode",{parentName:"p"},"w+"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"a+"),", atau ",(0,t.kt)("inlineCode",{parentName:"p"},"r+"),")."),(0,t.kt)("p",null,"Sebagai contoh, pada program berikut, mode ",(0,t.kt)("inlineCode",{parentName:"p"},"r+")," digunakan. O iya, proses pembacaan file dilakukan 2x ya, penjelasan disertakan dibawahnya."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "r+", encoding="utf-8") as f:\n    print(f"read:\\n{f.read()}")\n    f.write("lorem ipsum dolor\\n")\n    print(f"read:\\n{f.read()}")\n\nwith open("file.txt", "r+", encoding="utf-8") as f:\n    print(f"read:\\n{f.read()}")\n')),(0,t.kt)("p",null,"Output program:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Python file",src:n(87).Z,width:"234",height:"451"})),(0,t.kt)("p",null,"Bisa dilihat di program, block ",(0,t.kt)("inlineCode",{parentName:"p"},"with")," pertama yang berisi operasi baca dan juga tulis tidak menghasilkan error. Namun ada yang aneh, yaitu tepat setelah ",(0,t.kt)("inlineCode",{parentName:"p"},"lorem ipsum dolor\\n")," ditulis ke file, proses baca menghasilkan string kosong. Tapi ketika file dibaca lagi menggunakan block ",(0,t.kt)("inlineCode",{parentName:"p"},"with")," baru, isinya sesuai harapan. Jawabannya adalah karena ",(0,t.kt)("strong",{parentName:"p"},"pergerakan cursor"),"."),(0,t.kt)("p",null,"Flow program di atas kurang lebih seperti ini:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Cursor awal pembacaan file ada di baris paling awal, karena mode ",(0,t.kt)("inlineCode",{parentName:"li"},"r+")," digunakan."),(0,t.kt)("li",{parentName:"ol"},"Setelah method ",(0,t.kt)("inlineCode",{parentName:"li"},"read()")," dipanggil, cursor berada di posisi paling akhir."),(0,t.kt)("li",{parentName:"ol"},"Kemudian ",(0,t.kt)("inlineCode",{parentName:"li"},"lorem ipsum dolor\\n")," ditulis ke file, maka text tersebut ada di baris baru di akhir file."),(0,t.kt)("li",{parentName:"ol"},"Lalu ketika method ",(0,t.kt)("inlineCode",{parentName:"li"},"read()")," dibaca lagi, isinya kosong, karena cursor posisinya sudah ada di baris akhir file."),(0,t.kt)("li",{parentName:"ol"},"Kemudian ketika file dibaca ulang menggunakan fungsi ",(0,t.kt)("inlineCode",{parentName:"li"},"open()")," dengan block ",(0,t.kt)("inlineCode",{parentName:"li"},"with")," baru, cursor kembali aktif di baris paling awal."),(0,t.kt)("li",{parentName:"ol"},"Lalu file dibaca, maka seluruh isi konten yang beru dikembalikan.")),(0,t.kt)("p",null,"Mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w+"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"a+"),", dan ",(0,t.kt)("inlineCode",{parentName:"p"},"r+")," kesemuanya bisa digunakan untuk baca dan tulis dalam 1 sesi, dengan perbedaan ada di posisi kursornya aktif dimana. Jika pembaca tertarik untuk mempelajarinya lebih detail, silakan baca diskusi di StackOverflow berikut:"),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011"},"https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011")),(0,t.kt)("h2",{id:"a467-mengosongkan-isi-file"},"A.46.7. Mengosongkan isi file"),(0,t.kt)("p",null,"Cara mengosongkan file bisa dilakukan dengan mudah menggunakan mode ",(0,t.kt)("inlineCode",{parentName:"p"},"w"),". Baca file menggunakan mode tersebut kemudian langsung ",(0,t.kt)("inlineCode",{parentName:"p"},"close()")," saja. Boleh menggunakan keyword ",(0,t.kt)("inlineCode",{parentName:"p"},"with")," atau bisa langsung sebaris statement. Contoh penerapannya bisa dilihat di kode berikut. 3 block statement di situ semuanya ekuivalen, membuat isi file menjadi kosong."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "w", encoding="utf-8") as f:\n    pass\n\nwith open("file.txt", "w", encoding="utf-8"):\n    pass\n\nopen("file.txt", "w", encoding="utf-8").close()\n')),(0,t.kt)("p",null,"Opsi lainnya adalah menggunakan method ",(0,t.kt)("inlineCode",{parentName:"p"},"truncate()"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'with open("file.txt", "w", encoding="utf-8") as f:\n    f.truncate()\n')),(0,t.kt)("h2",{id:"a468-menghapus-file-atau-folder"},"A.46.8. Menghapus file atau folder"),(0,t.kt)("p",null,"API ",(0,t.kt)("inlineCode",{parentName:"p"},"os.remove()")," digunakan untuk menghapus file, sedangkan ",(0,t.kt)("inlineCode",{parentName:"p"},"os.rmdir()")," untuk menghapus folder. Contoh penerapan:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Menghapus file:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.remove("/path/to/something/file.txt")\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Menghapus folder:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.rmdir("/path/to/something")\n')),(0,t.kt)("p",{parentName:"li"},"  Untuk path berbasis windows, pastikan karakter ",(0,t.kt)("inlineCode",{parentName:"p"},"\\")," ditulis dengan cara di-escape (ditulis ",(0,t.kt)("inlineCode",{parentName:"p"},"\\\\"),")."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.rmdir("C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples")\n')))),(0,t.kt)("h2",{id:"a469-mengecek-apakah-file-atau-folder-ada"},"A.46.9. Mengecek apakah file atau folder ada"),(0,t.kt)("p",null,"API ",(0,t.kt)("inlineCode",{parentName:"p"},"os.path.isfile()")," digunakan untuk mengecek apakah suatu file ada."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os.path\n\nif os.path.isfile("/path/to/something/file.txt"):\n    print("file.txt is exists")\nelse:\n    print("file.txt is not exists")\n')),(0,t.kt)("p",null,"Untuk pengecekan terhadap folder, gunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"os.path.exists()"),". Fungsi ini bisa digunakan baik untuk pengecekan file ataupun folder."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'if os.path.exists("/path/to/something"):\n    print("something is exists")\nelse:\n    print("something is not exists")\n')),(0,t.kt)("p",null,"Untuk path berbasis windows, pastikan karakter ",(0,t.kt)("inlineCode",{parentName:"p"},"\\")," ditulis dengan cara di-escape (ditulis ",(0,t.kt)("inlineCode",{parentName:"p"},"\\\\"),")."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'if os.path.exists("C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples\\\\file.txt"):\n    print("file.txt is exists")\nelse:\n    print("file.txt is not exists")\n')),(0,t.kt)("h2",{id:"a4610-membuat-folder-baru"},"A.46.10. Membuat folder baru"),(0,t.kt)("p",null,"API ",(0,t.kt)("inlineCode",{parentName:"p"},"os.makedirs()")," digunakan untuk membuat folder baru."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.makedirs("/path/to/somefolder")\n')),(0,t.kt)("p",null,"Untuk path berbasis windows, pastikan karakter ",(0,t.kt)("inlineCode",{parentName:"p"},"\\")," ditulis dengan cara di-escape (ditulis ",(0,t.kt)("inlineCode",{parentName:"p"},"\\\\"),")."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nos.makedirs("C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples")\n')),(0,t.kt)("h2",{id:"a4611-menampilkan-isi-folder"},"A.46.11. Menampilkan isi folder"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"os.listdir()"),":"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\npath_location = "C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples\\\\file"\nfor f in os.listdir(path_location):\n    print(f)\n'))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"os.walk()"),":"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\npath_location = "C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples\\\\file"\nfor (dirpath, dirnames, filenames) in os.walk(path_location):\n    print(dirpath, dirnames, filenames)\n')),(0,t.kt)("p",{parentName:"li"},"  Penjelasan:"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Variabel ",(0,t.kt)("inlineCode",{parentName:"li"},"dirpath")," berisi current"),(0,t.kt)("li",{parentName:"ul"},"Variabel ",(0,t.kt)("inlineCode",{parentName:"li"},"dirnames")," berisi folder yang berada dalam current folder"),(0,t.kt)("li",{parentName:"ul"},"Variabel ",(0,t.kt)("inlineCode",{parentName:"li"},"filenames")," berisi file yang berada dalam current folder")))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Menggunakan ",(0,t.kt)("inlineCode",{parentName:"p"},"glob.glob()"),":"),(0,t.kt)("p",{parentName:"li"},"  API ",(0,t.kt)("inlineCode",{parentName:"p"},"glob.glob()")," ini didesain untuk pencarian. Jadi pada penerapannya perlu ditambahi kondisi ",(0,t.kt)("em",{parentName:"p"},"wildcard")," pencarian. Misalnya, dengan menambahkan ",(0,t.kt)("inlineCode",{parentName:"p"},"**")," di akhir path, maka pencarian dilakukan terhadap semua jenis file dan folder."),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-python"},'import glob\n\npath_location = "C:\\\\LibsSoftLink\\\\dasarpemrogramanpython\\\\examples\\\\file"\nfor f in glob.glob(f"{path_location}\\\\**", recursive=True):\n    print(f)\n')))),(0,t.kt)("hr",null),(0,t.kt)("div",{class:"section-footnote"},(0,t.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,t.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,t.kt)("pre",null,(0,t.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/file"},"github.com/novalagung/dasarpemrogramanpython-example/../file")),(0,t.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Pathlib ",(0,t.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/pathlib.html"},"https://docs.python.org/3/library/pathlib.html")),(0,t.kt)("li",{parentName:"ul"},"Search pattern")),(0,t.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"},"https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011"},"https://stackoverflow.com/questions/1466000/difference-between-modes-a-a-w-w-and-r-in-built-in-open-function/30566011#30566011")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://builtin.com/data-science/python-list-files-in-directory"},"https://builtin.com/data-science/python-list-files-in-directory")))))}k.isMDXComponent=!0},6193:(e,a,n)=>{n.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAABiCAIAAADRFdisAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMi0xMVQxNTo1OTowNyswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTItMTFUMjE6MDQ6MTMrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTItMTFUMjE6MDQ6MTMrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmY2YWNiYzg1LTE2NmQtYmE0Ni04Y2M3LWUwODc0MDdjYTM1ZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODYwZmY1ZS04YjYxLWVjNDQtYjMwOC02NWM2NzAyMDVkNjMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ODYwZmY1ZS04YjYxLWVjNDQtYjMwOC02NWM2NzAyMDVkNjMiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT54bXAuZGlkOjc4NjBmZjVlLThiNjEtZWM0NC1iMzA4LTY1YzY3MDIwNWQ2MzwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4NjBmZjVlLThiNjEtZWM0NC1iMzA4LTY1YzY3MDIwNWQ2MyIgc3RFdnQ6d2hlbj0iMjAyMy0xMi0xMVQxNTo1OTowNyswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmNmFjYmM4NS0xNjZkLWJhNDYtOGNjNy1lMDg3NDA3Y2EzNWQiIHN0RXZ0OndoZW49IjIwMjMtMTItMTFUMjE6MDQ6MTMrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7rK47eAAANg0lEQVR4nO2da1BT1xbHVwRfEbRURL20USAVREXlIq9LGWxRaSdUQDFSUSfQFttiwepVpMqjtVWpFKjglRbM2EHTaKnYZEZUrlLKRQQLlKnx0YAxU2sr4ANiLChwP5wkhLyBIGxcv0/knLXX2fuc/9ln7UXOCm3e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"},609:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/file-2-c9ea40c5ff1c992396bdf44356897f71.png"},8276:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/file-3-c911aefd80692c03cdc7c9c81f10a49c.png"},1144:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/file-4-7ba31f1cfffe30da75f6b1d30e96afbe.png"},5556:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/file-5-1014b6242df27b1a1b345fc2899cbd33.png"},87:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/file-6-82740e6e8c4f495e3ae4a13663e1c0ea.png"}}]);