---
sidebar_position: 9
title: A.9. Perulangan → for, range
sidebar_label: A.9. Perulangan → for, range
description: Tutorial belajar perulangan/iterasi di Python menggunakan for dan range. 
keywords: [perulangan, loop, for, range, looping]
faqs:
  - question: Perulangan di Python
    answer: Perulangan di Python bisa dilakukan menggunakan while, for range, dan juga kombinasi for dengan tipe data sequence seperti list, tuple, dan lainnya.
  - question: For di Python
    answer: 'Contoh perulanga di Python menggunakan keyword for → for i in range(5): print("index:", i)'
---

Perulangan atau *loop* merupakan teknik untuk mengulang-ulang eksekusi suatu blok kode. Pada chapter ini kita akan mempelajari penerapannya di Python.

## A.9.1. Keyword `for` dan fungsi `range()`

Perulangan di Python bisa dibuat menggunakan kombinasi keyword `for` dan fungsi `range()`.

- `for` adalah keyword untuk perulangan, dalam penerapannya diikuti dengan keyword `in`.
- fungsi `range()` digunakan untuk membuat object *range*, yang umumnya dipakai sebagai kontrol perulangan.

Agar lebih jelas, silakan perhatikan dan test kode berikut:

```python
for i in range(5):
    print("index:", i)
```

![perulangan for range](img/for-range-1.png)

Statement `print("index:", i)` muncul 5 kali, karena perulangan dilakukan dengan kontrol `range(5)` dimana fungsi ini menciptakan object *range* dengan isi deret angka sejumlah `5` dimulai dari angka `0` hingga `4`.

Statement `for i in range(5):` adalah contoh penulisan perulangan menggunakan `for` dan `range()`. Variabel `i` berisi nilai *counter* setiap iterasi, yang pada konteks ini adalah angka `0` hingga `4`.

Statement `print("index:", i)` wajib ditulis menjorok ke kanan karena merupakan isi dari blok perulangan `for i in range(5):`.

### ◉ Fungsi `list()`

Fungsi `range()` menghasilkan object *sequence*, yaitu suatu data yang strukturnya mirip seperti list. Object tersebut bisa ditampilkan dalam bentuk list dengan cara membungkusnya menggunakan fungsi `list()` (konversi tipe data *range* ke list).

```python
r = range(5)
print("r:", list(r))
```

![perulangan for range](img/for-range-2.png)

> - Lebih detailnya mengenai list dibahas pada chapter [List](#)
> - Lebih detailnya mengenai mengenai *type conversion* dibahas pada chapter [Konversi Tipe Data](#)

## A.9.2. Penerapan fungsi `range()`

Statement `range(n)` menghasilkan data *range* sejumlah `n` yang isinya dimulai dari angka `0`. Syntax `range(n)` adalah bentuk paling sederhana penerapan fungsi ini.

Selain `range(n)` ada juga beberapa cara penulisan lainnya:

- Menggunakan `range(start, stop)`. Hasilnya data *range* dimulai dari `start` dan hingga `stop - 1`. Sebagai contoh, `range(1, 4)` menghasilkan data range `[1, 2, 3]`.

- Menggunakan `range(start, stop, step)`. Hasilnya data *range* dimulai dari `start` dan hingga `stop - 1`, dengan nilai *increment* sejumlah `step`. Sebagai contoh, `range(1, 10, 3)` menghasilkan data range `[1, 4, 7]`.

Agar lebih jelas, silakan perhatikan kode berikut. Ke-3 perulangan ini ekuivalen, menghasilkan output yang sama.

<table class="custom-table">
<tr>
<td>

```python
for i in range(3):
    print("index:", i)
```

</td>
<td>


```python
for i in range(0, 3):
    print("index:", i)
```

</td>
<td>

```python
for i in range(0, 3, 1):
    print("index:", i)
```

</td>
</tr>
<tr>
<td>

![perulangan for range](img/for-range-3.png)

</td>
<td>

![perulangan for range](img/for-range-3.png)

</td>
<td>

![perulangan for range](img/for-range-3.png)

</td>
</tr>
</table>

Tambahan contoh penerapan `for` dan `range()`:

<table class="custom-table top">
<tr>
<td>

```python
for i in range(2, 10, 2):
    print("index:", i)
```

</td>
<td>

```python
for i in range(5, -5, -1):
    print("index:", i)
```

</td>
</tr>
<tr>
<td>

![perulangan for range](img/for-range-4.png)

</td>
<td>

![perulangan for range](img/for-range-5.png)

</td>
</tr>
</table>

## A.9.3. Perulangan `for` tanpa `range()`

Perulangan menggunakan `for` bisa dilakukan pada beberapa jenis tipe data (seperti list, string, tuple, dan lainnya) caranya dengan langsung menuliskan saja variabel atau data tersebut pada statement `for`. Contoh penerapannya bisa dilihat di bawah ini:

### ◉ Iterasi data list

```python
messages = ["morning", "afternoon", "evening"]
for m in messages:
    print(m)
```

![perulangan for range](img/for-range-6.png)

### ◉ Iterasi data tuple

```python
numbers = ("twenty four", 24)
for n in numbers:
    print(n)
```

![perulangan for range](img/for-range-7.png)

### ◉ Iterasi data string

Penggunaan keyword `for` pada tipe data `str` (atau string) akan mengiterasi setiap karakter yang ada di string.

```python
for char in "hello python":
    print(char)
```

![perulangan for range](img/for-range-8.png)

### ◉ Iterasi data dictionary

Penggunaan keyword `for` pada tipe data `dict` (atau dictionary) akan mengiterasi *key*-nya. Dari *key* tersebut *value* bisa diambil dengan mudah menggunakan notasi `dict[key]`.

```python
bio = {
    "name": "toyota camry",
    "year": 1993,
}

for key in bio:
    print("key:", key, "value:", bio[key])
```

![perulangan for range](img/for-range-9.png)

### ◉ Iterasi data sets

```python
numbers = {"twenty four", 24}
for n in numbers:
    print(n)
```

![perulangan for range](img/for-range-10.png)

## A.9.4. Perulangan bercabang / *nested* `for`

Cara penerapan *nested loop* adalah cukup dengan menuliskan statement `for` sebagai isi dari statement `for` atasnya. Contoh:

```python
max = int(input("jumlah bintang: "))

for i in range(max):
    for j in range(0, max - i):
        print("*", end=" ")
    print()
```

![perulangan for range](img/for-range-11.png)

### ◉ Parameter opsional `end` pada fungsi `print()`

Fungsi `print()` memiliki parameter opsional bernama `end`, kegunaannya untuk mengubah karakter akhir yang muncul setelah data string di-*print*. *Default* nilai paramter `end` ini adalah `\n` atau karakter baris baru, itulah kenapa setiap selesai print pasti ada baris baru.

Statement `print("*", end=" ")` akan menghasilkan pesan `* ` yang di-akhiri dengan karakter spasi karena nilai parameter `end` di-set dengan nilai karakter spasi (atau ` `).

> Lebih detailnya tentang fungsi dan parameter opsional dibahas pada chapter [Fungsi](#)

---

<div class="section-footnote">

## Catatan chapter 📑

### ◉ Source code praktik

<pre>
    <a href="https://github.com/novalagung/dasarpemrogramanpython-example/tree/master/for-range">
        github.com/novalagung/dasarpemrogramanpython-example/../for-range
    </a>
</pre>

### ◉ Chapter relevan lainnya

- [List](#)
- [String](#)
- [Fungsi](#)

### ◉ Referensi

- https://docs.python.org/3/library/functions.html#func-range
- https://docs.python.org/3/library/functions.html#print
- https://python-reference.readthedocs.io/en/latest/docs/functions/range.html

</div>