# MDX Blog System

## Yeni Post Ekleme

1. `content/posts/` dizinine yeni bir `.mdx` dosyası oluştur (örn: `my-post.mdx`)
2. Frontmatter ekle:

```mdx
---
title: "Post Başlığın"
excerpt: "120-160 karakter arası kısa özet"
coverImage: "/path/to/image.jpg"
publishedAt: "2025-01-15"
tags:
  - infrastructure
  - product
  - design
featured: true
status: published
---

# Başlık

İçeriğin buraya...
```

## Kullanılabilir Taglar

- `infrastructure` (mavi)
- `product` (yeşil)
- `design` (mor)
- `business` (turuncu)
- `career` (pembe)
- `technology` (cyan)

## Frontmatter Alanları

- **title**: (zorunlu) Post başlığı
- **excerpt**: (zorunlu) Kısa özet (SEO için)
- **coverImage**: (opsiyonel) Kapak görseli yolu
- **publishedAt**: (zorunlu) Yayın tarihi (YYYY-MM-DD)
- **updatedAt**: (opsiyonel) Güncelleme tarihi
- **tags**: (opsiyonel) Tag listesi
- **featured**: (opsiyonel) Ana sayfada öne çıkar (true/false)
- **status**: (zorunlu) published/draft/archived
- **seoTitle**: (opsiyonel) Özel SEO başlığı
- **seoDescription**: (opsiyonel) Özel SEO açıklaması
- **ogImage**: (opsiyonel) Özel sosyal medya görseli

## MDX Özellikleri

MDX'de hem Markdown hem de React component kullanabilirsin:

```mdx
# Normal Markdown

Bu bir paragraf.

- Liste item 1
- Liste item 2

\`\`\`typescript
// Kod bloğu
const hello = "world";
\`\`\`

> Blockquote

[Link](https://example.com)
```

## Otomatik Özellikler

- ✅ Reading time otomatik hesaplanır
- ✅ Syntax highlighting (code blocks)
- ✅ Heading slugs & anchor links
- ✅ Related posts (tag'lere göre)
- ✅ SEO metadata
- ✅ Dark theme styled components

## Örnek Post

Örnek için `welcome-to-my-blog.mdx` veya `kubernetes-production-lessons.mdx` dosyalarına bak.

## Deployment

Build sırasında tüm MDX dosyaları otomatik olarak parse edilir:

```bash
bun run build
```

Git'e commit et, Vercel otomatik deploy eder! 🚀

