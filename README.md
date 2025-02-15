# 🎉 LivelyUI 

**A Lightweight CSS Framework for Lively Animations**

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/livelyui)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/size-5KB_(CSS)_+_2KB_(JS)-yellowgreen.svg)](https://github.com/yourusername/livelyui)

LivelyUI adalah framework CSS minimalis untuk membuat animasi UI yang hidup dengan mudah. Cukup tambahkan class, dan dapatkan animasi smooth untuk hover, scroll, dan transisi element!

## ✨ Fitur Utama

- 🖱 **Hover Animations** - Efek hover scaling & opacity
- 🚀 **Enter/Exit Animations** - Fade, slide, dan scale effects
- 🎯 **On-Scroll Animations** - Muncul saat element masuk viewport
- 🛠 **Utility Classes** - Kontrol duration, delay, dan easing
- 🚫 **Nonaktif Animasi** - Gunakan class `lui-none` untuk disable
- 📦 **Ultra Ringan** - Hanya 5KB (CSS) + 2KB (JS)
- 🌐 **Zero Dependencies** - Murni CSS & vanilla JS

## 🚀 Instalasi

### CDN (via GitHub)
Tambahkan di `<head>` HTML Anda:
```html
<!-- CSS -->
<link rel="stylesheet" 
      href="https://cdn.jsdelivr.net/gh/VincentSaerang21/livelyui@main/livelyui.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/VincentSaerang21/livelyui@main/livelyui.js"></script>
```

### Install Lokal
1. Download file:
   - [livelyui.css](https://raw.githubusercontent.com/VincentSaerang21/livelyui/main/livelyui.css)
   - [livelyui.js](https://raw.githubusercontent.com/VincentSaerang21/livelyui/main/livelyui.js)
2. Tambahkan ke HTML:
```html
<link rel="stylesheet" href="path/to/livelyui.css">
<script src="path/to/livelyui.js"></script>
```

## 🎮 Demo Langsung

[Lihat Demo](https://vicenzo.pro/livelyui)

## 🛠 Penggunaan Dasar

### Default Animasi
```html
<!-- Fade in otomatis pada semua element -->
<div>
  <p>Element ini akan fade in!</p>
</div>
```

### Hover Effect
```html
<button class="lui-scale-up">
  Hover Saya!
</button>
```

### Scroll Animation
```html
<div class="lui-scroll lui-fade-in">
  Muncul saat di-scroll
</div>
```

### Nonaktifkan Animasi
```html
<div class="lui-none">
  Tidak ada animasi disini
</div>
```

## 📚 Dokumentasi Lengkap

### Animasi Tersedia
| Class             | Efek                     |
|-------------------|--------------------------|
| `.lui-fade-in`    | Fade in dari transparan  |
| `.lui-slide-left` | Slide dari kiri          |
| `.lui-slide-right`| Slide dari kanan         |
| `.lui-scale-up`   | Scale up saat hover      |

### Utility Classes
**Duration:**
```html
<div class="lui-fade-in lui-duration-500">...</div>
```
| Class               | Durasi |
|---------------------|--------|
| `.lui-duration-100` | 0.1s   |
| `.lui-duration-300` | 0.3s   |
| `.lui-duration-500` | 0.5s   |
| `.lui-duration-1000`| 1s     |

**Delay:**
```html
<div class="lui-fade-in lui-delay-300">...</div>
```
| Class              | Delay |
|--------------------|-------|
| `.lui-delay-100`   | 0.1s  |
| `.lui-delay-300`   | 0.3s  |
| `.lui-delay-500`   | 0.5s  |
| `.lui-delay-1000`  | 1s    |

**Easing:**
```html
<div class="lui-fade-in lui-ease-out">...</div>
```
| Class               | Easing        |
|---------------------|---------------|
| `.lui-ease-in`      | ease-in       |
| `.lui-ease-out`     | ease-out      |
| `.lui-ease-in-out`  | ease-in-out   |

## 🎨 Kustomisasi
Override CSS variables di stylesheet Anda:
```css
:root {
  --lui-duration: 0.5s;    /* Default duration */
  --lui-easing: ease-out;  /* Default easing */
  --lui-scale-up: 1.1;     /* Scale hover effect */
}
```

## 🤝 Berkontribusi
1. Fork repositori
2. Buat branch fitur (`git checkout -b fitur/namafitur`)
3. Commit perubahan (`git commit -m 'Tambahkan fitur'`)
4. Push ke branch (`git push origin fitur/namafitur`)
5. Buat Pull Request

## 📄 Lisensi
Dilisensikan di bawah [MIT License](LICENSE)

---

Dibuat dengan ❤️ oleh [Nama Anda](https://github.com/VincentSaerang21)