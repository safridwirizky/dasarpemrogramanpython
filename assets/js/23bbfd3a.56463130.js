"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[414],{3905:(a,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var m=t.createContext({}),s=function(a){var e=t.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},d=function(a){var e=s(a.components);return t.createElement(m.Provider,{value:e},a.children)},u="mdxType",g={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},o=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,m=a.parentName,d=p(a,["components","mdxType","originalType","parentName"]),u=s(n),o=i,k=u["".concat(m,".").concat(o)]||u[o]||g[o]||r;return n?t.createElement(k,l(l({ref:e},d),{},{components:n})):t.createElement(k,l({ref:e},d))}));function k(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=o;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=a,p[u]="string"==typeof a?a:i,l[1]=p;for(var s=2;s<r;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}o.displayName="MDXCreateElement"},1489:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_position:47,title:"A.47. Python CLI Arguments & Flags",sidebar_label:"A.47. CLI Arguments & Flags"},l=void 0,p={unversionedId:"basic/cli-arguments-flags",id:"basic/cli-arguments-flags",title:"A.47. Python CLI Arguments & Flags",description:"Chapter ini membahas tentang pengaksean CLI argument eksekusi program Python. Yang dimaksud dengan argument adalah apapun yang ditulis setelah command python (atau python.exe di Windows). Umumnya program yang dibuat untuk keperluan tooling ataupun utility lainnya banyak memanfaatkan command line interface arguments ini.",source:"@site/docs/basic/cli-arguments-flags.md",sourceDirName:"basic",slug:"/basic/cli-arguments-flags",permalink:"/basic/cli-arguments-flags",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,title:"A.47. Python CLI Arguments & Flags",sidebar_label:"A.47. CLI Arguments & Flags"},sidebar:"tutorialSidebar",previous:{title:"A.46. File I/O",permalink:"/basic/file"}},m={},s=[{value:"A.47.1. CLI arguments <code>sys.argv</code>",id:"a471-cli-arguments-sysargv",level:2},{value:"\u25c9 Best practice pengaksesan argument",id:"-best-practice-pengaksesan-argument",level:3},{value:"A.47.2. CLI flags <code>argparse</code>",id:"a472-cli-flags-argparse",level:2},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 TBA",id:"-tba",level:2},{value:"\u25c9 Referensi",id:"-referensi",level:3}],d={toc:s},u="wrapper";function g(a){let{components:e,...r}=a;return(0,i.kt)(u,(0,t.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chapter ini membahas tentang pengaksean CLI argument eksekusi program Python. Yang dimaksud dengan argument adalah apapun yang ditulis setelah command ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," (atau ",(0,i.kt)("inlineCode",{parentName:"p"},"python.exe")," di Windows). Umumnya program yang dibuat untuk keperluan tooling ataupun utility lainnya banyak memanfaatkan ",(0,i.kt)("em",{parentName:"p"},"command line interface")," arguments ini."),(0,i.kt)("p",null,"Python mengenal 2 jenis CLI arguments, yaitu raw arguments (atau cukup arguments) dan flags, keduanya dibahas di sini."),(0,i.kt)("h2",{id:"a471-cli-arguments-sysargv"},"A.47.1. CLI arguments ",(0,i.kt)("inlineCode",{parentName:"h2"},"sys.argv")),(0,i.kt)("p",null,"Data CLI argument eksekusi program bisa diakses via ",(0,i.kt)("inlineCode",{parentName:"p"},"sys.argv"),". Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"sys.argv")," ini berisi data argument bertipe string tersimpan dalam list. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Dalam penggunaannya module ",(0,i.kt)("inlineCode",{parentName:"p"},"sys")," harus di-import terlebih dahulu")),(0,i.kt)("p",null,"Misalnya, pada command berikut ini, pengaksesan variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"sys.argv")," menghasilkan data ",(0,i.kt)("inlineCode",{parentName:"p"},'["main.py"]'),", karena ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," merupakan CLI argument yang ditulis setelah command ",(0,i.kt)("inlineCode",{parentName:"p"},"python"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"python.exe"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py\n")),(0,i.kt)("p",null,"Argument bisa saja ada banyak, misalnya pada kode berikut terdapat 3 argument, ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sesuk"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"prei"),". Penulisan banyak argument ditandai dengan pembatas karakter spasi."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py sesuk prei\n")),(0,i.kt)("p",null,"Mengenai command ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," sendiri, dia hanya membutuhkan informasi argument pertama saja untuk menentukan file mana yang akan dieksekusi. Argument ke-2, ke-3, dan seterusnya tidak dibutuhkan oleh command ",(0,i.kt)("inlineCode",{parentName:"p"},"python"),", tetapi tetap bisa dipergunakan untuk keperluan lainnya."),(0,i.kt)("p",null,"Silakan coba tulis kode berikut kemudian run program-nya menggunakan command di bawahnya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\nif __name__ == "__main__":\n    print(f"type: {type(sys.argv).__name__}")\n    print(f"len:  {len(sys.argv)}")\n\n    for arg in sys.argv:\n        print(f" \u279c  {arg}")\n')),(0,i.kt)("p",null,"Command eksekusi program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'python.exe main_1.py\npython.exe main_1.py hello python\npython.exe main_1.py "hello python" 24562 \ud83d\ude0a True\n')),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(2871).Z,width:"486",height:"379"})),(0,i.kt)("p",null,"Silakan lihat perbandingan antara command dengan output. Pada command ke-2, ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," merupakan dua argument berbeda, sedangkan pada command ke-3, ",(0,i.kt)("inlineCode",{parentName:"p"},"hello python")," adalah satu argument karena penulisannya diapit tanda literal string (",(0,i.kt)("inlineCode",{parentName:"p"},'"'),")."),(0,i.kt)("p",null,"Semua argument, baik itu angka, emoji, ataupun karakter unicode lainnya akan ditampung sebagai elemen list bertipe string di ",(0,i.kt)("inlineCode",{parentName:"p"},"sys.argv"),"."),(0,i.kt)("h3",{id:"-best-practice-pengaksesan-argument"},"\u25c9 Best practice pengaksesan argument"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"sys.argv")," merupakan list, maka pengaksesan element tertentu yang index-nya diluar kapasitas adalah menghasilkan error. Karena alasan ini ada baiknya untuk berhati-hati dalam mengakses argument di index tertentu pada variabel tersebut, pastikan untuk menambahkan seleksi kondisi terlebih dahulu untuk mengecek apakah index dari element yang dicari masih dalam kapasitas."),(0,i.kt)("p",null,"Salah satu solusi aman bisa dengan membuat fungsi terpisah untuk pengaksesan argument, contohnya bisa dilihat pada kode berikut dimana jika argument yang dicari tidak ada, maka nilai ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," dikembalikan. Metode ini lebih efisien."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import sys\n\ndef get_arg(index):\n    if len(sys.argv) > index:\n        return sys.argv[index]\n    else:\n        return None\n\nif __name__ == "__main__":\n    print(f"type: {type(sys.argv).__name__}")\n    print(f"len:  {len(sys.argv)}")\n    \n    print(f"arg1: {get_arg(0)}")\n    print(f"arg2: {get_arg(1)}")\n    print(f"arg3: {get_arg(2)}")\n    print(f"arg4: {get_arg(3)}")\n    print(f"arg5: {get_arg(4)}")\n')),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(9636).Z,width:"486",height:"338"})),(0,i.kt)("h2",{id:"a472-cli-flags-argparse"},"A.47.2. CLI flags ",(0,i.kt)("inlineCode",{parentName:"h2"},"argparse")),(0,i.kt)("p",null,"Flags adalah istilah untuk argument dengan label. Contohnya seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"python main.py --name Noval")," adalah contoh pengaplikasian flag, dengan label adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"--name")," berisi data string ",(0,i.kt)("inlineCode",{parentName:"p"},"Noval"),"."),(0,i.kt)("p",null,"Python menyediakan module ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse")," berisi banyak API untuk keperluan operasi flag argument."),(0,i.kt)("p",null,"Untuk menerapkan flag, sebuah object parser perlu dibuat menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"argparse.ArgumentParser()"),", dengan isi parameter adalah informasi program (seperti nama dan deskripsi). Kemudian dari object tersebut, didaftarkan beberapa flag argument (misalnya ",(0,i.kt)("inlineCode",{parentName:"p"},"--name"),") beserta property-nya. Lalu di akhir, method ",(0,i.kt)("inlineCode",{parentName:"p"},"parse_args()")," wajib ditulis dan pengaksesan nilai flag dilakukan dari object kembalian method tersebut."),(0,i.kt)("p",null,"Program di bawah ini berisi peneprapan flag argument untuk program sederhana yang kegunaannya untuk pembuatan file. Nama dan path file beserta isinya dikontrol via CLI flag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import argparse\n\ndef main():\n    parser = argparse.ArgumentParser(\n        prog=\'File Manager\',\n        description=\'Managing file easily\'\n    )\n\n    parser.add_argument("--path", help="path of the file/folder", default="file.txt", required=True)\n    parser.add_argument("--content", help="content of the file", default="")\n    args = parser.parse_args()\n\n    with open(args.path, \'a\') as f:\n        f.write(args.content)\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("p",null,"Coba jalankan program di atas dengan perintah standar ",(0,i.kt)("inlineCode",{parentName:"p"},"python main.py"),". Outpunya:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(37).Z,width:"492",height:"107"})),(0,i.kt)("p",null,"Error muncul, karena ada salah satu flag yang di-setting untuk wajib diisi, yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"--path"),". Bisa dilihat pada statement ",(0,i.kt)("inlineCode",{parentName:"p"},'parser.add_argument("--path", ...)')," di atas, disitu parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," di-isi dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", menjadikan pemanggilan program tanpa flag ini memunculkan error."),(0,i.kt)("p",null,"Untuk melihat flag apa saja yang tersedia, gunakan flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," atau ",(0,i.kt)("inlineCode",{parentName:"p"},"-h"),". Dengan flag tersebut, informasi nama program dan flag yang tersedia dimunculkan."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(6634).Z,width:"428",height:"369"})),(0,i.kt)("p",null,"Sekarang coba jalankan command dengan disertai isi flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--path")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"--content"),". Program akan berjalan sesuai desain. File terbuat dengan isi sesuai nilai flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--content"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'python main.py --path "./file.txt" --content "hello python"\ncat file.txt\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(4023).Z,width:"652",height:"117"})),(0,i.kt)("p",null,"Kembali ke bagian deklarasi flag menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"parser.add_argument()"),", dalam pembuatannya ada beberapa konfigurasi yang bisa dimanfaatkan sesuai kebutuhan, diantaranya:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Keterangan"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Positional param"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Diisi dengan nama flag, umumnya menggunakan notasi ",(0,i.kt)("inlineCode",{parentName:"td"},"--nama")," untuk flag dengan label kata atau frasa, dan ",(0,i.kt)("inlineCode",{parentName:"td"},"-n")," saja untuk huruf. Keduanya juga bisa digunakan bersamaan, misalnya ",(0,i.kt)("inlineCode",{parentName:"td"},'parser.add_argument("--path", "-p", ...)')," baru setelahnya diikuti keyword argument.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keyword param ",(0,i.kt)("inlineCode",{parentName:"td"},"help")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Diisi dengan informasi keterangan flag. Nantinya muncul saat ",(0,i.kt)("inlineCode",{parentName:"td"},"--help")," digunakan.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keyword param ",(0,i.kt)("inlineCode",{parentName:"td"},"default")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Diisi dengan nilai default flag ketika tidak ditulis nilainya secara explicit.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keyword","\xa0","param","\xa0",(0,i.kt)("inlineCode",{parentName:"td"},"required")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Penanda apakah flag wajib diisi atau opsional. Jika diisi ",(0,i.kt)("inlineCode",{parentName:"td"},"True")," maka wajib untuk diisi dan memunculkan error jika tidak diisi")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Keyword","\xa0","param","\xa0",(0,i.kt)("inlineCode",{parentName:"td"},"choices")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Jika diisi dengan nilai list, maka element list menjadi opsi pengisian flag. Jika saat pemanggilan flag diisi dengan nilai yang tidak ada di list maka error muncul.")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Selain parameter di atas, ada juga beberapa lainnya. Selengkapnya bisa cek di halaman dokumentasi ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/argparse.html"},"https://docs.python.org/3/library/argparse.html")," ")),(0,i.kt)("p",null,"Ok, agar makin paham, mari praktek lagi dengan memodifikasi program sebelumnya menjadi seperti ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    parser = argparse.ArgumentParser(\n        prog=\'File Manager\',\n        description=\'Managing file easily\'\n    )\n\n    parser.add_argument("--operation-mode", "-op", help="choose operation", choices=["write file", "list items"], required=True)\n    parser.add_argument("--path", "-p", help="path of the file/folder", default=".", required=True)\n    parser.add_argument("--content", "-c", help="content of the file", default="")\n    args = parser.parse_args()\n\n    if args.operation_mode == "write file":\n        with open(args.path, \'a\') as f:\n            f.write(args.content)\n\n    elif args.operation_mode == "list items":\n        for f in glob.glob(f"{args.path}/**", recursive=True):\n            print(f)\n\nif __name__ == "__main__":\n    main()\n')),(0,i.kt)("p",null,"Perbedaan program terbaru dibanding sebelumnya:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag baru ditambahkan bernama ",(0,i.kt)("inlineCode",{parentName:"li"},"--operation-mode")," atau ",(0,i.kt)("inlineCode",{parentName:"li"},"-op"),", flag ini yang wajib diisi nilai ",(0,i.kt)("inlineCode",{parentName:"li"},"write file")," atau ",(0,i.kt)("inlineCode",{parentName:"li"},"list items"),"."),(0,i.kt)("li",{parentName:"ul"},"Flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--path")," dibuatkan ",(0,i.kt)("em",{parentName:"li"},"shorthand"),"-nya yaitu ",(0,i.kt)("inlineCode",{parentName:"li"},"-p"),"."),(0,i.kt)("li",{parentName:"ul"},"Flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--content")," dibuatkan ",(0,i.kt)("em",{parentName:"li"},"shorthand"),"-nya yaitu ",(0,i.kt)("inlineCode",{parentName:"li"},"-c"),"."),(0,i.kt)("li",{parentName:"ul"},"Ketika flag ",(0,i.kt)("inlineCode",{parentName:"li"},"-op")," bernilai ",(0,i.kt)("inlineCode",{parentName:"li"},"write file"),", maka program melakukan penulisan konten dengan isi dan tujuan file sesuai dengan nilai flag saat eksekusi."),(0,i.kt)("li",{parentName:"ul"},"Ketika flag ",(0,i.kt)("inlineCode",{parentName:"li"},"-op")," bernilai ",(0,i.kt)("inlineCode",{parentName:"li"},"list items"),", maka program menampilkan list files/folders pada path yang ditentukan via flag ",(0,i.kt)("inlineCode",{parentName:"li"},"--path"),". ")),(0,i.kt)("p",null,"O iya, perlu diketahui bahwa ketika flag labelnya adalah frasa dan menggunakan karakter ",(0,i.kt)("inlineCode",{parentName:"p"},"-")," sebagai pembatas kata, maka pengaksesannya menggunakan pembatas ",(0,i.kt)("inlineCode",{parentName:"p"},"_"),". Contohnya bisa dilihat pada flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--operation-mode")," yang pengaksesan nilainya dilakukan via ",(0,i.kt)("inlineCode",{parentName:"p"},"args.operation_mode"),"."),(0,i.kt)("p",null,"Jalankan program dengan 3 perintah berikut lalu lihat outputnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'python.exe main_4.py --help\npython.exe main_4.py --op "write file" -p "./file.txt" -c "hello python"\npython.exe main_4.py --op "list items" -p "./"\n')),(0,i.kt)("p",null,"Output program:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Python CLI Arguments &amp; Flags",src:n(5634).Z,width:"730",height:"460"})),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/cli-arguments-flags"},"github.com/novalagung/dasarpemrogramanpython-example/../cli-arguments-flags")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/file"},"File I/O"))),(0,i.kt)("h2",{id:"-tba"},"\u25c9 TBA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag without value ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/8259001/python-argparse-command-line-flags-without-arguments"},"https://stackoverflow.com/questions/8259001/python-argparse-command-line-flags-without-arguments"))),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/argparse.html"},"https://docs.python.org/3/library/argparse.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/35603729/difference-between-single-dash-and-double-dash-in-argparse"},"https://stackoverflow.com/questions/35603729/difference-between-single-dash-and-double-dash-in-argparse")))))}g.isMDXComponent=!0},2871:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/cli-arguments-flags-1-dc4659f7bab10b0670ce9ffa47d35924.png"},9636:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/cli-arguments-flags-2-948bdaac17a7c45ad451a96913bb252c.png"},37:(a,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAABrCAIAAAA6iibjAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0xMi0xM1QxNjozMTo0MSswNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMTItMTNUMTc6MTg6NTIrMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMTItMTNUMTc6MTg6NTIrMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBhZTU0MDRkLTY2YTQtYWY0My1iMTY0LWQ4M2YxODk2ZGIxYyIgeG1wTU06RG9jdW1lbnRJRD0i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"},6634:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/cli-arguments-flags-4-5370982d1df93d05956aea95f8c1530b.png"},4023:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/cli-arguments-flags-5-db4666e9eaf888c2909aafe009ccf050.png"},5634:(a,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/cli-arguments-flags-6-82312ae9bbe8e027f83e196b1bc047f6.png"}}]);