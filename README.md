# 🕯️ انکنتو | Encanto Candle

وب‌سایت شمع‌های دست‌ساز انکنتو + پنل مدیریت Decap 🩷

🌐 ریپو: [aviralearnsite2000-rgb/encanto-candle](https://github.com/aviralearnsite2000-rgb/encanto-candle)

> ⚠️ **این پوشه (`site/`) ریشه‌ی ریپوی گیت‌هاب است.**

## ساختار

| فایل | توضیح |
|------|-------|
| `index.html` | صفحه اصلی — کارت‌ها از `data/store.json` رندر می‌شوند |
| `category.html` | قالب **تکی** همه‌ی دسته‌ها (آدرس: `category.html?c=slug`) |
| `store.js` / `site.js` / `category.js` | لود دیتا + اعمال تم و رندر |
| `data/store.json` | ⭐ **قلب فروشگاه:** تنظیمات، رنگ‌ها، دسته‌ها و همه‌ی محصولات |
| `admin/` | پنل مدیریت (ورود: `yoursite.com/admin`) |
| `images/uploads/` | عکس‌هایی که مدیر از پنل آپلود می‌کند |

## تست لوکال (حتماً با سرور)

```bash
cd E:/endanto_candel/site
python -m http.server 8000
```

- خانه: `http://localhost:8000`
- یک دسته: `http://localhost:8000/category.html?c=flower-basket`
- پنل: `http://localhost:8000/admin`

## انتشار روی GitHub Pages

**Settings → Pages → Deploy from a branch → main → / (root) → Save**

بعد از انتشار، در `admin/config.yml` این را با آدرس واقعی OAuth عوض کن:
- `base_url: https://YOUR-OAUTH-HOST` (آدرس decap-oauth روی Cloudflare Workers)

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
