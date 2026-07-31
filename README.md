# EMBEPET 海外独立站

恩贝宠（深圳）宠物保健品海外独立站：美区 TO C 品牌商城 + 站内 B2B 询盘，Next.js 全栈自建，含中文管理后台，SEO/GEO 全量落地，前台支持 5 种语言。

## 本地运行

```bash
cd web
npm install
npx prisma db push      # 初始化 SQLite 数据库（web/dev.db）
npx prisma db seed      # 写入产品/文章/评价等种子数据
npm run dev             # http://localhost:3000
```

- 前台商城：http://localhost:3000 （自动跳转到 /en，可切 es/fr/de/ja）
- 管理后台：http://localhost:3000/admin
  - 管理员：`admin@embepet.com` / `admin123`
  - 演示顾客：`demo@embepet.com` / `demo1234`

## 支付

`.env` 中 `STRIPE_SECRET_KEY` 留空时，结账走**开发模拟支付**（订单直接标记已支付，完整跑通订单流）。
接入真实 Stripe：

1. 填入 `STRIPE_SECRET_KEY`（sk_test_ 开头的测试密钥即可）
2. 本地转发 webhook：`stripe listen --forward-to localhost:3000/api/webhooks/stripe`，把生成的 `whsec_` 填入 `STRIPE_WEBHOOK_SECRET`

## 邮件

默认打印到控制台。配置 `RESEND_API_KEY` 与 `EMAIL_FROM` 后自动经 Resend 发送（订单确认、询盘通知）。

## 多语言

- URL 结构 `/{locale}/...`，支持 `en / es / fr / de / ja`，中间件按 Cookie 与浏览器语言自动定位
- UI 词典：`lib/i18n/dictionaries/`
- 产品/集合/文章的营销字段翻译存在各自数据表的 `translations` JSON 字段，可在后台编辑

## SEO / GEO

- 每页独立 title/description/canonical/hreflang/OG（`lib/seo.ts`）
- JSON-LD：Organization、WebSite、Product+Offer(+运费/退货政策)、AggregateRating、Review、BreadcrumbList、FAQPage、Article
- `robots.txt` 显式放行 GPTBot / ClaudeBot / PerplexityBot / Google-Extended 等 AI 爬虫
- `sitemap.xml` 动态生成（含全语言 alternates）；`llms.txt` 与 `llms-full.txt` 为 AI 引擎提供精选内容索引
- 内容规范：产品与文章均带"答案胶囊"（40-60 词直接答案）、FAQ 块、来源引用
- 301 重定向可在后台"SEO 工具"里配置

## 部署（上线时）

1. 数据库换 PostgreSQL：改 `prisma/schema.prisma` 的 `provider = "postgresql"` 与 `DATABASE_URL`，执行 `prisma db push && prisma db seed`
2. 设置环境变量：`NEXT_PUBLIC_SITE_URL`（正式域名）、`SESSION_SECRET`（随机长字符串）、Stripe 正式密钥
3. `npm run build && npm start`，或直接部署到 Vercel

## 品牌资料替换

Logo、品牌名、联系方式、公告条 → 后台"站点设置"；产品实拍图放入 `public/products/` 后在产品编辑页的 images 字段引用。
