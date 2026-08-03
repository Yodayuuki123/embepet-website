# EMBEPET 海外独立站

EMBEPET 宠物营养补充剂 B2B 官网：面向品牌方、经销商、零售渠道和全球卖家的产品比较、私标与 OEM/ODM 项目询盘站。Next.js 全栈自建，含中文管理后台与英文 SEO/GEO 内容体系。

## 本地运行

```bash
cd embepet-website
npm ci
npx prisma db push      # 初始化 SQLite 数据库（prisma/dev.db）
npx prisma db seed      # 写入产品/文章/评价等种子数据
npm run dev             # http://localhost:3000
```

- B2B 前台：http://localhost:3000 （默认进入 `/en`，可切换其他语言）
- 管理后台：http://localhost:3000/admin
  - 管理员：`admin@embepet.com` / `admin123`
  - 演示顾客：`demo@embepet.com` / `demo1234`

## 邮件

默认打印到控制台。配置 `RESEND_API_KEY` 与 `EMAIL_FROM` 后自动经 Resend 发送询盘通知。

## 多语言

- URL 结构 `/{locale}/...`，支持 `en / zh / es / fr / de / ja`
- UI 词典：`lib/i18n/dictionaries/`
- 当前只将英文 `/en` 版本开放搜索索引；其他语言可访问，但统一 canonical 到英文并设为 `noindex`，待独立内容审核后再开放索引

## SEO / GEO

- 核心页、新闻页与全部知识文章均有独立 title、description、关键词清单、英文 canonical、robots、Open Graph 与 Twitter Card（`lib/seo.ts`）
- JSON-LD：Organization、WebSite、WebPage、AboutPage、ContactPage、CollectionPage、Service、BreadcrumbList、FAQPage、Article
- `robots.txt` 显式放行 GPTBot / ClaudeBot / PerplexityBot / Google-Extended 等 AI 爬虫
- `sitemap.xml` 只提交可索引的英文核心页、新闻与数据库文章，使用真实更新时间；账户、后台、结算、筛选参数页与旧重定向页不进入站点地图
- `llms.txt` 与 `llms-full.txt` 提供英文实体事实、产品索引、文章摘要和可追溯来源，供支持这些文件的 AI 服务读取
- 内容规范：直接答案、问题式小标题、FAQ、可见来源、Article Schema citation、清晰作者主体、相关内容内链和非医疗/法律建议声明
- 筛选参数页使用主集合 canonical 并设为 `noindex`，避免重复内容与抓取浪费
- 301 重定向可在后台"SEO 工具"里配置

## 部署（上线时）

1. 数据库换 PostgreSQL：改 `prisma/schema.prisma` 的 `provider = "postgresql"` 与 `DATABASE_URL`，执行 `prisma db push && prisma db seed`
2. 设置环境变量：`NEXT_PUBLIC_SITE_URL`（正式域名）、`SESSION_SECRET`（随机长字符串）、`GOOGLE_SITE_VERIFICATION`、`BING_SITE_VERIFICATION`
3. `npm run build && npm start`，或直接部署到 Vercel
4. 上线后向 Google Search Console 和 Bing Webmaster Tools 提交 `/sitemap.xml`，用真实查询数据监控关键词、展示量、点击率、收录与富媒体结果；代码本身不承诺具体排名

## 品牌资料替换

Logo、品牌名、联系方式、公告条 → 后台"站点设置"；产品实拍图放入 `public/products/` 后在产品编辑页的 images 字段引用。
