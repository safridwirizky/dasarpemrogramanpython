"use strict";(self.webpackChunkdasarpemrogramanpython=self.webpackChunkdasarpemrogramanpython||[]).push([[7848],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,m=e.originalType,o=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=p(t),s=i,c=u["".concat(o,".").concat(s)]||u[s]||k[s]||m;return t?n.createElement(c,r(r({ref:a},l),{},{components:t})):n.createElement(c,r({ref:a},l))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var m=t.length,r=new Array(m);r[0]=s;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d[u]="string"==typeof e?e:i,r[1]=d;for(var p=2;p<m;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1598:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>k,frontMatter:()=>m,metadata:()=>d,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const m={sidebar_position:51,title:"A.51. Python Date, Time, DateTime, Timezone",sidebar_label:"A.51. Date, Time, DateTime, Timezone"},r=void 0,d={unversionedId:"basic/datetime-timezone",id:"basic/datetime-timezone",title:"A.51. Python Date, Time, DateTime, Timezone",description:"Pada chapter ini kita akan belajar tentang tipe data date, time, datetime untuk penyimpanan informasi tanggal dan waktu di Python, serta peran dari tipe data timezone untuk penentuan zona waktu.",source:"@site/docs/basic/datetime-timezone.md",sourceDirName:"basic",slug:"/basic/datetime-timezone",permalink:"/basic/datetime-timezone",draft:!1,tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,title:"A.51. Python Date, Time, DateTime, Timezone",sidebar_label:"A.51. Date, Time, DateTime, Timezone"},sidebar:"tutorialSidebar",previous:{title:"A.50. File/Data Format \u279c JSON",permalink:"/basic/json"},next:{title:"A.52. DateTime \u279c Parsing & Formatting",permalink:"/basic/datetime-parsing-formatting"}},o={},p=[{value:"A.51.1. Pengenalan <code>date</code>, <code>time</code>, dan <code>datetime</code>",id:"a511-pengenalan-date-time-dan-datetime",level:2},{value:"\u25c9 Combining <code>date</code> &amp; <code>time</code>",id:"-combining-date--time",level:3},{value:"\u25c9 Mengambil datetime hari ini / sekarang",id:"-mengambil-datetime-hari-ini--sekarang",level:3},{value:"A.51.2. Pengenalan timezone (<code>tz</code>)",id:"a512-pengenalan-timezone-tz",level:2},{value:"\u25c9 Local timezone vs. UTC vs. specific timezone vs. no timezone",id:"-local-timezone-vs-utc-vs-specific-timezone-vs-no-timezone",level:3},{value:"\u25c9 Konversi datetime antar timezone",id:"-konversi-datetime-antar-timezone",level:3},{value:"\u25c9 Mengubah timezone tanpa konversi datetime",id:"-mengubah-timezone-tanpa-konversi-datetime",level:3},{value:"Catatan chapter \ud83d\udcd1",id:"catatan-chapter-",level:2},{value:"\u25c9 Source code praktik",id:"-source-code-praktik",level:3},{value:"\u25c9 Chapter relevan lainnya",id:"-chapter-relevan-lainnya",level:3},{value:"\u25c9 TBA",id:"-tba",level:3},{value:"\u25c9 Referensi",id:"-referensi",level:3}],l={toc:p},u="wrapper";function k(e){let{components:a,...t}=e;return(0,i.kt)(u,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Pada chapter ini kita akan belajar tentang tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," untuk penyimpanan informasi tanggal dan waktu di Python, serta peran dari tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"timezone")," untuk penentuan zona waktu."),(0,i.kt)("h2",{id:"a511-pengenalan-date-time-dan-datetime"},"A.51.1. Pengenalan ",(0,i.kt)("inlineCode",{parentName:"h2"},"date"),", ",(0,i.kt)("inlineCode",{parentName:"h2"},"time"),", dan ",(0,i.kt)("inlineCode",{parentName:"h2"},"datetime")),(0,i.kt)("p",null,"Python menyediakan package ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," berisi banyak sekali API untuk keperluan operasi data yang berhubungan dengan tanggal dan waktu. Tiga diantaranya adalah tipe data berikut:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tipe data class ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," untuk penyimpanan informasi tanggal"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import date\n\ndata_date = date(year=2020, month=1, day=31)\n\nprint("date:", data_date)\nprint(" \u279c year:", data_date.year)\nprint(" \u279c month:", data_date.month)\nprint(" \u279c day:", data_date.day)\n# output \u2193\n# \n# date: 2020-01-31\n#  \u279c year: 2020\n#  \u279c month: 1\n#  \u279c day: 31\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tipe data class ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," untuk penyimpanan informasi waktu (jam, menit, detik)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import time\n\ndata_time = time(hour=13, minute=14, second=31)\n\nprint("time:", data_time)\nprint(" \u279c hour:", data_time.hour)\nprint(" \u279c minute:", data_time.minute)\nprint(" \u279c second:", data_time.second)\nprint(" \u279c timezone:", data_time.tzinfo)\n# output \u2193\n# \n# time: 13:14:31\n#  \u279c hour: 13\n#  \u279c minute: 14\n#  \u279c second: 31\n#  \u279c timezone: None\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tipe data class ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," untuk penyimpanan informasi tanggal dan waktu"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from datetime import datetime\n\ndata_datetime = datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31)\n\nprint("datetime:", data_datetime)\nprint(" \u279c year:", data_datetime.year)\nprint(" \u279c month:", data_datetime.month)\nprint(" \u279c day:", data_datetime.day)\nprint(" \u279c hour:", data_datetime.hour)\nprint(" \u279c minute:", data_datetime.minute)\nprint(" \u279c second:", data_datetime.second)\nprint(" \u279c timezone:", data_datetime.tzinfo)\n# output \u2193\n# \n# datetime: 2020-01-31 13:14:31\n#  \u279c year: 2020\n#  \u279c month: 1\n#  \u279c day: 31\n#  \u279c hour: 13\n#  \u279c minute: 14\n#  \u279c second: 31\n#  \u279c timezone: None\n')))),(0,i.kt)("p",null,"Pengaksesan informasi unit waktu (seperti hari, tahun, jam, dan lainnya) dilakukan via attribute. Mengenai nama attribute-nya silakan lihat di kode di atas."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," berada di package bernama sama yaitu ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),". Pada contoh di atas, tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," di-import dari package-nya."),(0,i.kt)("p",{parentName:"blockquote"},"Contoh jika yang di-import adalah package ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," penggunaan tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," seperti ini:",(0,i.kt)("br",null),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"datetime.datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31)")),(0,i.kt)("p",{parentName:"blockquote"},"Jangan sampai bingung ya.")),(0,i.kt)("p",null,"Khusus untuk tipe data yang juga menyimpan informasi waktu (seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),"), disitu ada attribute bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"timezone")," isinya informasi zona waktu. ",(0,i.kt)("em",{parentName:"p"},"By default"),", zona waktu adalah kosong atau ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,i.kt)("h3",{id:"-combining-date--time"},"\u25c9 Combining ",(0,i.kt)("inlineCode",{parentName:"h3"},"date")," & ",(0,i.kt)("inlineCode",{parentName:"h3"},"time")),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," bisa dikominasikan untuk menciptakan object baru bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),". Caranya via class method ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," milik tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data_datetime = datetime.combine(data_date, data_time)\n\nprint("datetime:", data_datetime)\nprint(" \u279c year:", data_datetime.year)\nprint(" \u279c month:", data_datetime.month)\nprint(" \u279c day:", data_datetime.day)\nprint(" \u279c hour:", data_datetime.hour)\nprint(" \u279c minute:", data_datetime.minute)\nprint(" \u279c second:", data_datetime.second)\nprint(" \u279c timezone:", data_datetime.tzinfo)\n# output \u2193\n# \n# datetime: 2020-01-31 13:14:31\n#  \u279c year: 2020\n#  \u279c month: 1\n#  \u279c day: 31\n#  \u279c hour: 13\n#  \u279c minute: 14\n#  \u279c second: 31\n#  \u279c timezone: None\n')),(0,i.kt)("h3",{id:"-mengambil-datetime-hari-ini--sekarang"},"\u25c9 Mengambil datetime hari ini / sekarang"),(0,i.kt)("p",null,"Tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," bisa dikominasikan untuk menciptakan object baru bertipe ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),". Caranya via class method ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," milik tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data1 = datetime.now()\nprint("sekarang (datetime):", data1)\n# output \u279c sekarang (datetime): 2023-12-23 11:50:45.303421\n\ndata2 = datetime.today()\nprint("sekarang (datetime):", data2)\n# output \u279c sekarang (datetime): 2023-12-23 11:50:45.303422\n\ndata2 = date.today()\nprint("sekarang (date):", data2)\n# output \u279c sekarang (date): 2023-12-23\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Kode di atas outputnya adalah sesuai dengan output program di local penulis saat program di run. Di tempat pembaca output pastinya berbeda.")),(0,i.kt)("h2",{id:"a512-pengenalan-timezone-tz"},"A.51.2. Pengenalan timezone (",(0,i.kt)("inlineCode",{parentName:"h2"},"tz"),")"),(0,i.kt)("p",null,"Setiap tipe data yang meyimpan informasi waktu (seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),") didalamnya ada informasi timezone yang bisa diakses ataupun ditentukan saat pembuatan data. Informasi timezone direpresentasikan menggunakan ",(0,i.kt)("inlineCode",{parentName:"p"},"dateutil.tz"),", tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"tz")," dalam package ",(0,i.kt)("inlineCode",{parentName:"p"},"dateutil"),"."),(0,i.kt)("p",null,"Method ",(0,i.kt)("inlineCode",{parentName:"p"},"tz.gettz()")," digunakan untuk membuat data timezone. Contoh pengaplikasiannya:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Membuat data timezone ",(0,i.kt)("em",{parentName:"p"},"New York")," atau EST (Eastern Time):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tzinfo = tz.gettz("America/New_York")\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Membuat data timezone WIB (Waktu Indonesia Barat) atau GMT+7:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tzinfo = tz.gettz("Asia/Jakarta")\n')))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Selengkapnya mengenai list timezone identifier silakan cek di ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"))),(0,i.kt)("p",null,"Penerapan ",(0,i.kt)("inlineCode",{parentName:"p"},"tz")," dalam pembuatan data ",(0,i.kt)("inlineCode",{parentName:"p"},"time")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"timezone")," dilakukan via pengisian parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"tzinfo"),". Contoh penerapannya:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Timezone pada tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import tz\nfrom datetime import time\n\ntzinfo = tz.gettz("America/New_York")\ndata_time = time(hour=13, minute=14, second=31, tzinfo=tzinfo)\n\nprint("time:", data_time)\n# output \u279c time: 13:14:31\n\nprint("timezone:", data_time.tzinfo)\n# output \u279c timezone: tzfile(\'US/Eastern\')\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Timezone pada tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import tz\nfrom datetime import datetime\n\ndata_datetime = datetime(year=2020, month=1, day=31, hour=13, minute=14, second=31, tzinfo=tzinfo)\n\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31-05:00\n\nprint("timezone:", data_time.tzinfo)\n# output \u279c timezone: tzfile(\'US/Eastern\')\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Timezone pada tipe ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," hasil kombinasi ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"time"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import tz\nfrom datetime import date, time\n\ndata_date = date(year=2020, month=1, day=31)\ndata_time = time(hour=13, minute=14, second=31)\ndata_datetime = datetime.combine(data_date, data_time, tzinfo=tzinfo)\n\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31-05:00\n\nprint("timezone:", data_time.tzinfo)\n# output \u279c timezone: tzfile(\'US/Eastern\')\n')))),(0,i.kt)("h3",{id:"-local-timezone-vs-utc-vs-specific-timezone-vs-no-timezone"},"\u25c9 Local timezone vs. UTC vs. specific timezone vs. no timezone"),(0,i.kt)("p",null,"Selain method ",(0,i.kt)("inlineCode",{parentName:"p"},"tz.gettz()")," ada juga 2 method untuk keperluan timezone lainnya, yaitu:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"tz.tzlocal()")," untuk membuat data timezone sesuai waktu local"),(0,i.kt)("li",{parentName:"ul"},"Method ",(0,i.kt)("inlineCode",{parentName:"li"},"tz.tzutc()")," untuk membuat data timezone dengan offset UTC")),(0,i.kt)("p",null,"Contoh penerapan:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from dateutil import tz\nfrom datetime import date, time, datetime\n\ntzinfo = tz.tzlocal()\ndata_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31+07:00\n\ntzinfo = tz.tzutc()\ndata_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31+00:00\n\ntzinfo = tz.gettz("America/New_York")\ndata_datetime = datetime(2020, 1, 31, 13, 14, 31, tzinfo=tzinfo)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31-05:00\n\ndata_datetime = datetime(2020, 1, 31, 13, 14, 31)\nprint("datetime:", data_datetime)\n# output \u279c datetime: 2020-01-31 13:14:31\n')),(0,i.kt)("p",null,"Silakan perhatikan ke-4 output statement ",(0,i.kt)("inlineCode",{parentName:"p"},"print")," di atas. Kesemuanya berisi informasi datetime yang sama persis namun berbeda timezone. Meskipun informasi tanggal dan waktunya sama persis, jika timezone-nya berbeda maka data tersebut menunjukkan datetime yang benar-benar berbeda."),(0,i.kt)("h3",{id:"-konversi-datetime-antar-timezone"},"\u25c9 Konversi datetime antar timezone"),(0,i.kt)("p",null,"Melanjutkan pembahasan section sebelumnya, data ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-31 13:14:31+07:00")," adalah ekuivalen dengan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Data ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 06:14:31+00:00")," pada zona waktu UTC"),(0,i.kt)("li",{parentName:"ul"},"Data ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 01:14:31-05:00")," pada zona waktu New York")),(0,i.kt)("p",null,"Sampai sini bisa disimpulkan bahwa:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dua buah datetime adalah tidak sama jika informasi datetime sama persis namun timezone-nya berbeda."),(0,i.kt)("li",{parentName:"ul"},"Dua buah datetime bisa saja ekuivalen atau sama meskipun informasi datetime dan timezone-nya berbeda.")),(0,i.kt)("p",null,"Cara manual untuk mencari data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," di zona waktu lain adalah dengan melakukan operasi tambah/kurang terhadap timezone-nya. Misalnya: Data ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-31 13:14:31")," WIB (GMT+7), kalau dikonversi ke timezone UTC caranya cukup dengan kurangi saja dengan 7 jam, hasilnya: ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-31 06:14:31")," UTC (GMT+0)."),(0,i.kt)("p",null,"Atau, praktisnya bisa dengan menggunakan method ",(0,i.kt)("inlineCode",{parentName:"p"},"astimezone()")," milik tipe data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def print_dt(d):\n    print("datetime:", d, "| tz:", d.tzname())\n\nfrom dateutil import tz\nfrom datetime import date, time, datetime\n\ndata = datetime(2020, 1, 31, 13, 14, 31, tzinfo=None)\nprint_dt(data)\n# output \u279c datetime: 2020-01-31 13:14:31       | tz: None\n\ndata_local_tz = data.astimezone(tz.tzlocal())\nprint_dt(data_local_tz)\n# output \u279c datetime: 2020-01-31 13:14:31+07:00 | tz: SE Asia Standard Time\n\ndata_new_york_tz = data.astimezone(tz.gettz("America/New_York"))\nprint_dt(data_new_york_tz)\n# output \u279c datetime: 2020-01-31 01:14:31-05:00 | tz: EST\n\ndata_utc_tz = data.astimezone(tz.tzutc())\nprint_dt(data_utc_tz)\n# output \u279c datetime: 2020-01-31 06:14:31+00:00 | tz: UTC\n')),(0,i.kt)("p",null,"Penjelasan:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," dibuat dengan isi datetime ",(0,i.kt)("inlineCode",{parentName:"p"},"2020-01-31 13:14:31")," tanpa informasi timezone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Penerapan method ",(0,i.kt)("inlineCode",{parentName:"p"},"astimezone()")," terhadap data tanpa timezone berefek ke penambahan timezone tanpa perubahan waktu."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Variabel ",(0,i.kt)("inlineCode",{parentName:"li"},"data_local_tz")," berisi informasi datetime yang sama persis dengan ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," tapi dengan timezone adalah WIB atau GMT+7."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Kemudian variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"data_local_tz")," dikonversi ke timezone New York dan hasilnya disimpan di variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"data_new_york_tz"),". Variabel ini berisi data yang mengarah ke suatu waktu yang sama tapi berbeda timezone."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pada tanggal 31 Januari 2020, selisih jam antara GMT+7 dan New York tz (EST) adalah sebanyak ",(0,i.kt)("inlineCode",{parentName:"li"},"-12 jam"),", maka output hasil konversi timezone data ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 13:14:31+07:00")," WIB adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 01:14:31-05:00")," EST."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Lalu variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"data_new_york_tz")," dikonversi ke UTC timezone dengan hasil disimpan di variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"data_utc_tz"),"."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Pada tanggal 31 Januari 2020, selisih jam antara New York tz (EST) dan UTC adalah sebanyak ",(0,i.kt)("inlineCode",{parentName:"li"},"+5 jam"),", maka output hasil konversi timezone data ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 01:14:31-05:00")," EST adalah ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-31 06:14:31+00:00")," UTC.")))),(0,i.kt)("p",null,"Semoga sampai sini cukup jelas."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Dalam konversi timezone, komputer membutuhkan setidaknya 2 hal agar konversi timezone terhadap data datetime menghasilkan output yang valid, yaitu:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Informasi timezone asal dan tujuan"),(0,i.kt)("li",{parentName:"ul"},"Informasi tanggal timezone asal atau tujuan.")),(0,i.kt)("p",{parentName:"admonition"},"Poin ke-2 sangat penting untuk diketahui karena beberapa timezone mengadopsi sistem yang didalamnya ada pergeseran jam sebanyak 2 kali dalam setahun. Contohnya seperti timezone Pacific Time (PT). Selisih atau offset timezone PT terhadap UTC di bulan Juni adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"-7 jam")," sedangkan pada bulan Desember adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"\u22128 jam"),". Unik bukan?"),(0,i.kt)("p",{parentName:"admonition"},"Selengkapnya ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Pacific_Time_Zone"},"https://en.wikipedia.org/wiki/Pacific_Time_Zone"))),(0,i.kt)("h3",{id:"-mengubah-timezone-tanpa-konversi-datetime"},"\u25c9 Mengubah timezone tanpa konversi datetime"),(0,i.kt)("p",null,"Untuk mengkonversi suatu data ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," ke timezone lain, gunakan method ",(0,i.kt)("inlineCode",{parentName:"p"},"astimezone()"),". Namun untuk merubah timezone tanpa melakukan konversi waktu, maka gunakan method ",(0,i.kt)("inlineCode",{parentName:"p"},"replace()"),". Contoh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def print_dt(d):\n    print("datetime:", d, "| tz:", d.tzname())\n\nfrom dateutil import tz\nfrom datetime import date, time, datetime\n\ndata = datetime(2020, 1, 31, 13, 14, 31, tzinfo=None)\nprint_dt(data)\n# output \u279c datetime: 2020-01-31 13:14:31       | tz: None\n\ndata_local_tz = data.replace(tzinfo=tz.tzlocal())\nprint_dt(data_local_tz)\n# output \u279c datetime: 2020-01-31 13:14:31+07:00 | tz: SE Asia Standard Time\n\ndata_new_york_tz = data.replace(tzinfo=tz.gettz("America/New_York"))\nprint_dt(data_new_york_tz)\n# output \u279c datetime: 2020-01-31 13:14:31-05:00 | tz: EST\n\ndata_utc_tz = data.replace(tzinfo=tz.tzutc())\nprint_dt(data_utc_tz)\n# output \u279c datetime: 2020-01-31 13:14:31+00:00 | tz: UTC\n')),(0,i.kt)("hr",null),(0,i.kt)("div",{class:"section-footnote"},(0,i.kt)("h2",{id:"catatan-chapter-"},"Catatan chapter \ud83d\udcd1"),(0,i.kt)("h3",{id:"-source-code-praktik"},"\u25c9 Source code praktik"),(0,i.kt)("pre",null,(0,i.kt)("a",{href:"https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/datetime-timezone"},"github.com/novalagung/dasarpemrogramanpython-example/../datetime-timezone")),(0,i.kt)("h3",{id:"-chapter-relevan-lainnya"},"\u25c9 Chapter relevan lainnya"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/basic/datetime-parsing-formatting"},"DateTime \u279c Parsing & Formatting"))),(0,i.kt)("h3",{id:"-tba"},"\u25c9 TBA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Locale")),(0,i.kt)("h3",{id:"-referensi"},"\u25c9 Referensi"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/datetime.html"},"https://docs.python.org/3/library/datetime.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/3305413/"},"https://stackoverflow.com/questions/3305413/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://realpython.com/python-datetime/"},"https://realpython.com/python-datetime/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pacific_Time_Zone"},"https://en.wikipedia.org/wiki/Pacific_Time_Zone")))))}k.isMDXComponent=!0}}]);