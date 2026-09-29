# 🕯️ انکنتو | Encanto Candle

وب‌سایت شمع‌های دست‌ساز انکنتو + پنل مدیریت Decap — تم نباتی 🩷

## ساختار

| فایل | توضیح |
|------|-------|
| `index.html` | صفحه اصلی — کارت‌ها از `data/store.json` رندر می‌شوند |
| `category.html` | قالب **تکی** همه‌ی دسته‌ها (آدرس: `category.html?c=slug`) |
| `store.js` / `site.js` / `category.js` | لود دیتا + اعمال تم و رندر |
| `data/store.json` | ⭐ **قلب فروشگاه:** تنظیمات، رنگ‌ها، دسته‌ها و همه‌ی محصولات |
| `admin/` | پنل مدیریت (ورود: `yoursite.com/admin`) |
| `images/uploads/` | عکس‌هایی که مدیر از پنل آپلود می‌کند |

## انتشار روی GitHub Pages

**Settings → Pages → Deploy from a branch → main → / (root) → Save**

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
