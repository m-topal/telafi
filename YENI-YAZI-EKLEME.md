# Yeni Yazı Ekleme

## Kolay yöntem
Sitede `/yeni-yazi/` sayfasını aç. Formdan `.md` dosyası üret.

## Manuel yöntem
`_posts` klasörüne şu formatta bir dosya ekle:

```md
---
title: "Yazının başlığı"
date: 2026-08-28 12:00:00 -0700
author: "Yazar Adı"
category: "Düşünce"
reading_time: "7 dk"
excerpt_text: "Ana sayfada görünen kısa açıklama."
featured: false
format: "article"
---

Yazı burada başlar.
```

Ana sayfada öne çıkarmak için `featured: true`.
Kısa not için `format: "note"`.
