# Blog — UI / UX & Design Rapor (Etiketler ve Kullanıcı Profilleri Odaklı)

*Uzun düşünülmüş, profesyonel, uygulamaya hazır. Mimari/DB detaylarına girilmedi — sadece tasarım, etkileşim, içerik düzeni ve editör deneyimi üzerine odaklı.*

Kanka, bu raporu “sadece blog UI/UX” isteğine göre baştan yazdım — her şey kullanıcıyı (okuyucu **ve** editörü) hedef alıyor. Amaç: tasarım o kadar net ve tatbikli olsun ki sayfayı açan kişi *“vah lan bu ne böyle”* diye tepki versin — iyi anlamda. Aşağıda bölüm bölüm, uygulanabilir ve detaylandırılmış direktifler var.

---

# TL;DR — Ne Yapar Bu Rapor?

* Blog sayfasının tüm görsel ve etkileşim kurallarını tanımlar: listeleme, detay sayfası, tag gösterimi, tag keşif UI, editör tag yönetimi (UI akışları), yazar profilleri (statik), tipografi, spacing, responsive davranış, mikro-etkileşimler ve erişilebilirlik.
* Mimari/DB/CI konularına girmeden **tasarım odaklı** kararlar ve kabul kriterleri verir.
* Uygulama için “component spec” olarak doğrudan kullanılabilecek yönergeler içerir.

---

# 1. Temel Tasarım İlkeleri (Yüksek Seviye)

1. **İçeriğe Odaklan:** Tipografi ve boşluklar içerik okunabilirliğini maksimize etmeli. Görseller yardımcı olmalı, dikkat dağıtıcı değil.
2. **Hiyerarşi Açık Olmalı:** Başlık → alt başlık → excerpt → meta → içerik şeklinde net görsel sıralama.
3. **Öngörülebilir Davranış:** Tüm etkileşimler (hover, focus, tap) tutarlı olmalı. Aynı bileşenin farklı yerlerde davranışı aynı olsun.
4. **Editör-Okuyucu Paritesi:** Editör UI’si (tag yönetimi gibi) mümkün olduğunca doğrudan ve hata toleranslı tasarlanmalı. Editör hata yapsa bile geri döndürülebilir olmalı.
5. **Minimal, ama karakterli:** Tasarım sade olmalı; küçük ama karakterli görüntü ögeleri (liquid-glass gibi) marka hissi verir.

---

# 2. Genel Layout ve Grid Sistemi

* **Max width:** `min(1152px, 92vw)` (desktop ana içerik konteyneri).
* **Grid:** 12 sütun / responsive; blog listelerinde 3/2/1 kolon varyantları (desktop/tablet/mobile).

  * Desktop ≥ 1200px: 3 sütun (kartlar) veya 2 sütun (liste + sidebar).
  * Tablet 768–1199px: 2 sütun.
  * Mobile < 768px: tek kolon, full-width içerik.
* **Gutter:** 24px (desktop), 16px (tablet), 12px (mobile).
* **Vertical Rhythm:** base line-height `1.6`. Heading-spacing: H1 margin-bottom 0.4em, H2 0.6em, paragraf margin-bottom 1.1em.

---

# 3. Tipografi & Renk (Okunabilirlik Öncelikli)

* **Font pair:** Serif başlıklar (Playfair/serif) + Sans body (Inter/Roboto).
* **Sizes:**

  * H1: 48–56px (desktop), H2: 32–40px, H3: 20–24px, Body: 18px.
* **Line length:** ideal 45–65 karakter/satır → içerik column max-width ≈ 700–760px.
* **Colors:**

  * Background: `#0F1113` veya mevcut `#1A1A1A`.
  * Body text: `#E6E6E6` (yaklaşık 15% opacity beyaz yerine net).
  * Muted: `#9CA3AF` (zinc-400 tarzı).
  * Accent: turuncu / mavi küçük vurgular (link, tag hover).
* **Contrast:** WCAG AA uyumu zorunlu (body text ≥ 4.5:1).

---

# 4. Blog Listesi — Variants & Rules

**Amaç:** hızlı tarama + konu keşfi.

### 4.1 Variants

* **Grid (3-col) — Discover:** görsel ağırlıklı kartlar, görsel üst, başlık, excerpt, tags.
* **List (1-col) — Navegable:** büyük görsel + geniş excerpt + tarih + kategori; ideal "öne çıkan" listesi.
* **Spotlight (Hero + Carousel):** bir öne çıkan içerik büyük, alt sıra küçük kartlar.

### 4.2 Card (BlogCard) — kusursuz detay

* **Dimensions:** card width ~ 320–360px, image ratio 16:9.
* **Card layout:** image (top), tag pill row (over image / or under), title (2-line clamp), excerpt (3-line clamp), meta (date, readTime).
* **Hover:** gentle lift `transform: translateY(-8px)`, shadow increase, image scale 1.03, tag pills slide-in.
* **Accessibility:** keyboard focus outline + same hover state on focus.
* **Performance:** images lazy; LQIP or blur-up for Hero only.

### 4.3 Filtering & Sorting UI

* **Topbar**: Search (left), Tag filter pill-bar (center), Sort dropdown (right: Latest / Popular / Reading time).
* **Tag pill behavior:** clickable pill toggles filter; active pill filled, hover slightly darker. Limit visible pills to first 8 + “More” overflow menu.
* **Clear filters CTA:** persistent “Clear” button near topbar, subtle.

---

# 5. Post Detail Page — içerik sayfası (single article)

**Goal:** okuma deneyimi, referans ve paylaşım.

### 5.1 Hero Area

* **Cover image** full-bleed (or content-width centered), ratio 16:9–3:2.
* **Overlay:** hafif gradient, başlık (H1), subtitle / excerpt, meta (tarih · read time · tags).
* **CTA:** share / bookmark (statik) küçük butonlar hero sağ üstte.

### 5.2 Content Body

* **Width:** content column max ≈ 680px, center aligned.
* **Lead paragraph:** slightly larger font (20–22px) italic optional.
* **Headings:** H2/H3 açık, margin consistent.
* **Paragraph spacing:** 1.5em vertical.
* **Blockquotes:** left accent bar, italic body, grey background subtle.
* **Images:** caption below image, responsive; lightbox on click.
* **Code blocks:** monospace, line numbers optional, copy button top-right.
* **Embeds (YouTube, Tweet):** fluid container with aspect-ratio box.

### 5.3 Meta, Tags & Related

* **Tag row** under hero and bottom of post: tag pills (primary distinct style).
* **Related posts:** horizontal card strip (3 items) based on tag overlap — visual continuity with list cards.
* **Author bio block:** small author card (image, short bio, links). No follow buttons (istediğin gibi).
* **Call to action:** subtle footer CTA (newsletter, case study, contact).

### 5.4 Reading UX Enhancers

* **Progress bar:** slim reading progress at top (thin accent bar filling as user scrolls).
* **TOC (optional):** sticky, collapsible table of contents for long posts.
* **Print styles:** readable print CSS, hide non-content UI.
* **Dark mode:** ensure code blocks & images adapt.

---

# 6. Tag System — Görsel & Etkileşim Tasarımı (Okuyucu tarafı)

Kanka, tag’leri **keşif** ve **sinyal** olarak düşün. Tasarım onları hem arama mıknatısı hem içerik bağlama aracı yapmalı.

### 6.1 Tag Pill Görünümü

* **Default pill:** small rounded rect, `px-3 py-1`, subtle border, text-size 12px.
* **Primary tag (post-level):** filled style (contrastli), diğer tagler outline.
* **Hover / focus:** micro elevation + slight background tint.
* **Count display:** opsiyonel `#` veya `x kullanımlar` küçük suffix (örn: `kubernetes · 23`). Dikkat: fazla rakam dikkat dağıtırsa gizle.
* **Color coding:** kategorik renk (ör. infra tags mavi, product tags yeşil) — dikkatla kullanılmalı; renk erişilebilirliği test et.

### 6.2 Tag Landing (Tag Page) — düzen

* **Hero:** tag adı büyük, kısa açıklama, search in tag input.
* **Top metrics (opsiyonel):** “Top articles” list, “Popular subtopics”.
* **Sort controls:** Latest / Top / Curated.
* **Content area:** grid/list similar to main blog, but with tag filter applied.
* **Related tags:** cloud veya small card list — kullanıcı kontekstini genişletir.

### 6.3 Tag cloud / Discovery

* **Minimal tag cloud** (sidebar veya footer) — boyut veya renkle popülerlik vurgusu ama aşırıya kaçma.
* **Typeahead tag search:** typeahead suggestions as-you-type, keyboard accessible, show top 5 suggestions with confidence explanation (ör. “matching title + body”).
* **No follow/unfollow UI** (istediğin gibi) — sadece keşif.

---

# 7. Tag Management (Editör UI — sadece UX, DB yok)

Editörler için hataya toleranslı, geri dönüşümlü ve görsel bir araç sun.

### 7.1 Tag List View

* Columns: Name | Slug | Description (short) | Usage (count) | Status | Actions
* Row actions: Edit, Merge, Deprecate, View Usage (opens modal)

### 7.2 Merge UX (UI-Only Akış)

* **Step 1 — Select Sources:** checkbox birden çok tag seç. Görünür “compare” panel.
* **Step 2 — Choose Target:** type/select target tag (typeahead).
* **Step 3 — Preview:** küçük özet `N posts affected` + örnek updated post preview (show before/after tags).
* **Step 4 — Confirm:** big red confirm button + “This cannot be undone unless revert” microcopy.
* **After action:** success toast + history entry görünür. (Editor rollback için “undo” opsiyonu 5 dakika içinde görünür.)

### 7.3 Rename / Slug Change UX

* Rename inline with preview link changes. Sistem UI: “Preview URLs” modal. “Create redirect” toggle (default açık). *Redirect behavior not covered — only UI toggle.*

### 7.4 Tag Edit Drawer

* Full form: name, slug (editable), description (markdown), synonyms (comma tags), curation level (checkboxes), SEO title/desc, OG image upload (preview).
* Save states: Draft → Publish. Undo / version diff viewer (show git diff-like summary).

---

# 8. Author / Contributor Profiles (Statik Page Design)

* **Author Card:** avatar (circular 72px), name (bold), role, short bio (max 2 lines), links (GitHub, LinkedIn, website).
* **Author page layout:** hero (name + bio), list of posts by author (grid/list), optional “Featured” post.
* **Microcopy:** encourage contact but keep as static links (no messages in-site).
* **Privacy:** public profile info only — no dynamic features.

---

# 9. Rich Content: Kod, Görsel, Media & Embed Tasarımı

* **Code blocks:** high-contrast background, comfortable padding, wrap disable by default, copy button, optional language badge.
* **Image captions:** small, muted text under image; photographer/credit link optional.
* **Galleries:** carousel with thumbnails; keyboard arrows navigation.
* **Tables:** responsive: horizontal scroll on mobile with sticky header.
* **Embeds:** responsive container, lazy-loading, placeholder preview (title + thumbnail).
* **Footnotes & references:** small inline numbers with sticky floating footnote panel when clicked.

---

# 10. Mikro-etkileşimler & Animasyon Politikası

* **Principle:** subtle, purposeful, fast (≤ 320ms), respect `prefers-reduced-motion`.
* **Examples:**

  * Card lift: `transform` + shadow (320ms cubic-bezier).
  * Tag pill hover: background tint + translateY(-2px).
  * Reading progress: linear-smooth 0→100% as user scrolls.
  * Copy-to-clipboard: inline toast + icon morph.
* **Do not do:** over-animated backgrounds, parallax on mobile heavy, autoplay media.

---

# 11. Accessibility (WCAG + Keyboard)

* All interactive elements keyboard reachable (tab order), visible focus states.
* ARIA labels for tag pills, share buttons, and search.
* Color contrast checks automated in CI.
* Skip-to-content link on top for screen readers.
* Headings in logical order (H1 only once), semantic HTML (article, nav, header, footer).

---

# 12. SEO & Social Preview (UI responsibilities)

* **Editable fields in editor UI:** meta title, meta desc, canonical URL, OG image (preview).
* **Tag pages** must have editable meta description field in tag edit UI.
* **Structured data UI:** editor can toggle or edit JSON-LD snippet preview for author, article (UI shows generated JSON-LD sample).
* **Share preview** in editor: small modal shows how OG will look on Twitter/LinkedIn.

---

# 13. Content Guidelines & Taxonomy UX Rules (Editörlere)

* **Tag naming rules:** prefer singular nouns (e.g., `payment` instead of `payments`), lowercase, ASCII-friendly.
* **Max tags per post:** recommend 3–5 tags (UI enforcer: soft limit at 5 with warning at 6+).
* **Tag description length:** 40–160 characters (UI hint when editing).
* **Primary tag:** one primary tag allowed — UI enforces selection (used for tag badge prominence).
* **Synonyms:** quick add UI (comma-separated), preview shows how synonyms map.

---

# 14. Edge Cases & Error Handling (UX)

* **Tag collision**: if new tag name equals existing synonym, show conflict modal with options: use existing, create alias, cancel.
* **Draft without tags**: warning prompt on publish — “Are you sure? No tags reduces discoverability.”
* **Rename conflicts**: inline validation; prevent slug duplicates; show alternatives.
* **Large post** (100+ images): UI suggest gallery conversion, lazy-load hint.

---

# 15. QA / Acceptance Criteria (Design-oriented)

* List page: cards consistent across breakpoints; no layout shifts greater than 0.1 CLS.
* Post page: paragraph width ≤ 700px, images not wider than container, H1 visible in first viewport on desktop.
* Tag pills: keyboard accessible, accessible names, contrast ≥ AA.
* Editor UX: merge flow warning + preview, undo available (soft).
* Animations: respect `prefers-reduced-motion`.
* Mobile: no horizontal scroll except approved image galleries.

---

# 16. Görsel & UI Kit Önerileri (Hızlı)

* **Design tokens:** spacing scale (4/8/12/16/24/32/40/64), font scale, color tokens (bg, surface, text, muted, accent).
* **Component set to prepare:** BlogCard, PostHero, TagPill, TagPageHero, AuthorCard, RelatedStrip, FilterBar, EditorTagDrawer.
* **Deliverable önerisi:** Figma file + Tailwind component spec. (Hazır istersen hemen bir veya iki component'in Tailwind-ready CSS'ini yazarım.)

---

# 17. Uygulama Önceliklendirme (Tasarım İşi için)

1. **Core Reading Experience**: Post page typographic rules, image handling, code blocks.
2. **Card System + List Variants**: Grid/Spotlight/List + hover states.
3. **Tag Display & Tag Landing UI**: pills, tag page hero, related tags.
4. **Editor Tag Management UI (MVP)**: list, edit drawer, merge preview.
5. **Polish:** micro-interactions, OG preview in editor, accessibility audit.

---

# Kapanış — Ne İstersen Hemen Üretirim

Hazır mısın? Ben şu an şunları hemen çıkartabilirim (hangisini istersen doğrudan üretirim, beklemeye almayacağım):

* A) **Figma-ready component list** ve her component için props & states (Designer-ready).
* B) **Tailwind-ready component specs**: `BlogCard` + `PostHero` + `TagPill` — HTML + class list + ARIA attributes.
* C) **Editor UI flows**: yüksek detaylı ekran akışları (merge modal, edit drawer) — step-by-step protokol.
* D) **Tam içerik-guideline cheat-sheet** (yazarlar ve editörler için).

Sen tercih et: ben seçmediğini beklemeyeceğim ama doğrudan **B**’yi üretip gönderirim — hemen işe koyulmamı istiyorsan söyle, ben BlogCard + PostHero + TagPill Tailwind speclerini şimdi hazırlarım ve doğrudan veririm.
