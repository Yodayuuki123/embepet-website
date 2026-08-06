# EMBEPET 网站全站 SEO & GEO 优化方案

> 基于 Google 搜索运作原理：**Crawl → Index → Rank → Convert**

---

## 一、项目现状诊断

### 网站基本信息
- **技术栈**: Next.js 16 + App Router + TypeScript
- **多语言**: 英文 (en) 和中文 (zh)
- **业务类型**: B2B 宠物营养品工厂（Wholesale / Private Label / OEM / ODM）
- **目标客户**: 海外采购商、品牌商、分销商

### 发现的关键问题

| 问题类别 | 具体问题 | 严重程度 |
|---------|---------|---------|
| **技术SEO** | Canonical 可能指向 localhost | 🔴 严重 |
| **索引策略** | 账户/购物车未设置 noindex | 🔴 高 |
| **Sitemap** | 缺少重要页面（about、contact、产品详情） | 🟡 中 |
| **关键词** | 未系统分配，可能存在页面冲突 | 🟡 中 |
| **Schema** | 缺少 Service、BreadcrumbList | 🟡 中 |
| **内容** | 缺少 Quick Facts 和直接答案段落 | 🟢 低 |

---

## 二、优化策略（按五大维度）

### 维度 1: 关键词调研

#### 主要关键词方向

| 关键词类型 | 关键词示例 | 搜索意图 |
|-----------|-----------|---------|
| **制造商核心** | pet supplement manufacturer | 品牌认知 |
| | pet supplement factory China | 工厂查找 |
| **OEM/ODM** | pet supplement OEM | 定制开发 |
| | custom pet supplement formulation | 配方定制 |
| **Private Label** | private label pet supplements | 白标服务 |
| | private label dog supplements | 细分市场 |
| **Wholesale** | wholesale pet supplements | 批发采购 |
| | bulk pet supplements | 大宗订单 |
| **剂型词** | pet soft chew manufacturer | 具体产品 |
| **认证词** | GMP pet supplement manufacturer | 质量保证 |

#### 页面关键词分配矩阵

| 页面 | 主关键词 | 次关键词 |
|------|---------|---------|
| `/` 首页 | pet supplement manufacturer | wholesale, factory China |
| `/private-label` | private label pet supplements | private label dog supplements |
| `/wholesale` | wholesale pet supplements | bulk pet supplements |
| `/factory` | pet supplement factory China | GMP certified manufacturer |
| `/science` | GMP pet supplement manufacturer | SQF certified |
| `/shop` | pet supplement catalog | wholesale products |
| `/products/[slug]` | [产品名] + manufacturer | 按产品定制 |
| `/about` | about EMBEPET | pet supplement company |
| `/contact` | contact manufacturer | supplier inquiry |

**关键词冲突避免规则**:
- 首页覆盖 "manufacturer" 品牌词
- `/factory` 用 "factory China" 强调地理位置
- `/private-label` 聚焦 "private label"
- `/wholesale` 聚焦 "wholesale" 和 "bulk"

---

### 维度 2: 内容优化

#### 内容质量标准

**每个主要页面必须包含**:
1. ✅ 独立且自然的 H1 标题（包含主关键词）
2. ✅ 引言段落（100-150字，前50字包含主关键词）
3. ✅ 2-3 个 H2 子标题（包含次关键词或 LSI）
4. ✅ Quick Facts 段落（结构化信息，AI 易提取）
5. ✅ FAQ 部分（回答采购商常见问题）
6. ✅ CTA（明确的行动号召）
7. ✅ 内链到相关页面（3-5 个）

#### 首页内容结构

```
H1: Pet Supplement Manufacturer | Wholesale, OEM & Private Label
  └─ 引言: EMBEPET is a leading pet supplement manufacturer...
     [包含: manufacturer, wholesale, private label, OEM, GMP, China]

H2: Why Choose EMBEPET as Your Manufacturing Partner
  └─ 3-4 个核心优势（认证、产能、定制能力）

H2: Our Manufacturing Capabilities
  └─ 剂型、产能、认证

H2: Services for Global Brands
  └─ Wholesale | Private Label | OEM/ODM
     [每个服务一个卡片，链接到详情页]

H2: Quality Certifications
  └─ GMP, SQF, ISO

H2: Frequently Asked Questions
  └─ 5-8 个采购型问题

CTA: Request a Quote | View Product Catalog
```

#### Private Label 页面内容结构

```
H1: Private Label Pet Supplements | Custom Formulation & Packaging

Quick Facts (结构化段落):
- MOQ: From 500 units per SKU
- Sampling Time: 7-10 business days
- Production Lead Time: 25-35 days
- Packaging Options: Bottles, pouches, jars
- Label Design: Available
- Certifications: GMP, SQF

H2: What is Private Label Pet Supplement Manufacturing?
  └─ 定义和价值

H2: Our Private Label Process (5 Steps)
  └─ 1. Consultation → 2. Formula → 3. Sampling → 4. Production → 5. Delivery

H2: Customization Options
  └─ Formula | Dosage Form | Packaging | Labeling

H2: Why Brands Choose Our Private Label Service
  └─ 低 MOQ、快速打样、全程支持

H2: Case Studies (Optional)
  └─ 成功案例（匿名化）

H2: FAQs
  └─ MOQ? Lead time? Can I use my own formula?

CTA: Start Your Private Label Project | Request Sample
```

---

### 维度 3: On-Page 和结构化优化

#### 3.1 元数据优化

**Title 标签规则**:
- 长度: 50-60 字符
- 格式: `主关键词 | 品牌名`
- 示例: `Private Label Pet Supplements | EMBEPET`

**Meta Description 规则**:
- 长度: 150-160 字符
- 包含: 主关键词、次关键词、CTA
- 示例: `EMBEPET offers private label pet supplements with low MOQ (500 units). GMP & SQF certified. Custom formulation, packaging, and labeling. Request a quote today.`

**URL 结构**:
- ✅ 简短、描述性、包含关键词
- ✅ 使用连字符 `-` 而不是下划线
- 示例:
  - `/private-label` ✅
  - `/privateLabel` ❌
  - `/private_label` ❌

#### 3.2 H1-H6 层级结构

**规则**:
- 每页只有 1 个 H1（页面主标题）
- H2 用于主要章节（2-5 个）
- H3 用于子章节
- 不要跳级（H1 → H3）

**示例**:
```html
<h1>Private Label Pet Supplements</h1>
  <h2>What is Private Label</h2>
  <h2>Our Process</h2>
    <h3>Step 1: Consultation</h3>
    <h3>Step 2: Formula Development</h3>
  <h2>Customization Options</h2>
  <h2>FAQs</h2>
```

#### 3.3 图片优化

**图片 alt 属性规则**:
- 描述性、包含关键词（自然融入）
- 示例:
  ```html
  <img src="factory.jpg" alt="GMP-certified pet supplement manufacturing facility in China">
  <img src="soft-chews.jpg" alt="Private label pet soft chews production line">
  ```

**图片文件名**:
- ✅ `gmp-certified-factory.jpg`
- ❌ `IMG_1234.jpg`

**图片格式**:
- WebP 优先（体积小）
- JPEG 备选
- 压缩优化（TinyPNG）

#### 3.4 内部链接策略

**链接层级**:
- 首页 → 服务页/产品页（1 次点击）
- 服务页 → 产品页/文章页（2 次点击）
- 文章页 → 产品页/服务页（2-3 次点击）

**锚文本规则**:
- ✅ 使用描述性关键词: "our GMP-certified factory"
- ❌ 避免通用词: "click here", "read more"

**内链矩阵**:

| 源页面 | 链接到 | 锚文本示例 |
|-------|--------|----------|
| 首页 | /private-label | "Start Your Private Label Project" |
| 首页 | /factory | "Tour Our GMP Factory" |
| 首页 | /shop | "Browse Our Product Catalog" |
| Private Label | /factory | "See Our Manufacturing Capabilities" |
| Private Label | /science | "View Our Certifications" |
| 产品页 | /private-label | "Interested in White Label?" |
| 文章页 | /contact | "Contact Our Team" |

#### 3.5 面包屑导航

**所有内页添加面包屑**:
```
Home > Private Label > Custom Formulation
```

**Schema 标记**:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://..."},
    {"@type": "ListItem", "position": 2, "name": "Private Label", "item": "https://..."}
  ]
}
```

---

### 维度 4: 技术 SEO

#### 4.1 Canonical URL

**当前问题**:
```typescript
// lib/seo.ts
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
```
❌ 如果环境变量未设置，canonical 指向 localhost

**修复方案**:
```typescript
export const SITE_URL = 
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
   "https://www.embepet.com"); // 使用实际生产域名
```

**需要提供**: 正式生产域名

#### 4.2 Robots.txt

**当前配置**: ✅ 已正确配置

```typescript
// app/robots.ts
disallow: ["/admin", "/api/", "/*/account", "/*/cart", "/*/checkout"]
```

**需要补充**: 
- `/admin/*` - 后台所有子路径
- `/*/account/*` - 账户所有子路径
- 搜索参数: `Disallow: /*?*q=*`

#### 4.3 Sitemap

**当前缺失页面**:
- `/about`
- `/contact`
- `/wholesale`
- `/products/[slug]` (动态产品页)
- `/collections/[slug]` (产品分类)

**修复方案**: 添加到 `app/sitemap.ts`

#### 4.4 noindex 策略

**需要设置 noindex 的页面**:

| 页面 | 原因 |
|------|------|
| `/account/*` | 私有账户信息 |
| `/cart` | 购物车 |
| `/checkout` | 结账流程 |
| `/checkout/success` | 订单成功页 |
| `/admin/*` | 后台管理 |
| 搜索结果页 | 动态内容 |

**实现方式**:
```typescript
export async function generateMetadata({ params }) {
  return buildMetadata({
    title: "My Account",
    description: "...",
    path: "/account",
    noIndex: true,  // ✅
  });
}
```

#### 4.5 多语言 hreflang

**当前实现**: ✅ 已有 hreflang

**需要确认**:
- 中文页面是否完整翻译？
- 如果未翻译，中文页面应设置 `noindex, follow`

**修复方案**（如果中文未翻译）:
```typescript
noIndex: locale === "zh" && !isFullyTranslated(path)
```

#### 4.6 页面加载速度优化

**Core Web Vitals 优化**:
1. ✅ 图片使用 Next.js `<Image>` 组件（已做）
2. ✅ 字体优化（使用 `@fontsource-variable`）
3. ⚠️ 检查首屏 JavaScript 大小
4. ⚠️ 检查 GSAP 动画是否阻塞首屏

**建议**:
- 首屏图片使用 `priority` 属性
- 非首屏图片使用 `loading="lazy"`
- 视频使用懒加载

---

### 维度 5: 外部链接建设（建议阶段）

> 注：外部链接建设需要长期执行，本文档提供策略建议

#### 5.1 高质量外链来源

**行业目录**:
- Thomasnet.com（B2B 制造商目录）
- Alibaba.com（国际 B2B 平台）
- Made-in-China.com
- Global Sources

**行业协会**:
- NASC (National Animal Supplement Council)
- Pet Industry Federation
- 申请成员资格获得官网链接

**媒体 PR**:
- Pet Product News
- Petfood Industry Magazine
- 发布新闻稿、工厂参观报道

**客户案例**:
- 与客户合作发布案例研究
- 获得客户网站的供应商链接

**内容营销**:
- 在 Medium、LinkedIn 发布行业文章
- Guest Post 到宠物行业博客
- 链接回网站相关页面

#### 5.2 禁止的链接策略

❌ **不要做**:
- 购买链接
- 链接农场
- 低质量目录
- 自动化外链工具
- 过度交换链接

---

## 四、GEO 生成式搜索优化

> 让 ChatGPT、Perplexity、Gemini 能够理解和引用网站内容

### 4.1 llms.txt 优化

**当前实现**: ✅ 已有基础版本

**增强版本**:
```txt
# EMBEPET

> EMBEPET supports global pet supplement brands. Manufacturing by Taizhou Beno Biotech Co., Ltd.

## Company Identity
- Brand: EMBEPET
- Manufacturer: Taizhou Beno Biotech Co., Ltd.
- Location: Taixing City, Jiangsu Province, China
- Founded: 2016
- Services: Wholesale, Private Label, OEM, ODM

## Certifications (Verified)
- Eurofins GMP Audit Recognition ✓
- SQF Food Safety Code: Pet Food Manufacturing, Edition 9 ✓
- Feed Production License (China) ✓
- ISO 9001 (if applicable)

## Buyer Quick Facts
- Private Label MOQ: From 500 units per SKU
- Wholesale MOQ: [需要提供]
- Sampling Lead Time: 7-10 business days
- Production Lead Time: 25-35 days after approval
- Formats: Soft chews, powders, tablets, liquid drops, oils, pastes
- Customization: Formula, dosage form, packaging, labeling
- Main Export Markets: [需要提供: USA, EU, Australia, Japan?]

## Product Categories
- Joint & Mobility (glucosamine, chondroitin)
- Skin & Coat (omega-3, biotin)
- Digestive Health (probiotics, prebiotics)
- Calming & Anxiety (L-theanine, chamomile)
- Multivitamins
- Specialty formulas

## Documents Provided
- Certificate of Analysis (COA)
- Material Safety Data Sheet (MSDS)
- Third-party lab test reports
- Free Sales Certificate
- Health certificates for export

## Key Pages
- [Home](https://www.embepet.com/en)
- [Product Catalog](https://www.embepet.com/en/shop)
- [Private Label Service](https://www.embepet.com/en/private-label)
- [Factory & Manufacturing](https://www.embepet.com/en/factory)
- [Quality & Certifications](https://www.embepet.com/en/science)
- [Contact & Inquiry](https://www.embepet.com/en/contact)

## Contact
- Email: [需要提供]
- Phone: [需要提供]
- WhatsApp: [需要提供]

For complete product list: https://www.embepet.com/llms-full.txt
```

### 4.2 页面直接答案段落

**每个主要页面顶部添加 "Quick Answer" 段落**:

**示例 - Private Label 页面**:
```html
<div className="quick-answer" itemScope itemType="https://schema.org/FAQPage">
  <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
    <h2 itemProp="name">What is EMBEPET's Private Label Service?</h2>
    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
      <p itemProp="text">
        EMBEPET offers private label pet supplement manufacturing with MOQ from 500 units. 
        We provide custom formulation, packaging design, and labeling services. 
        Lead time: 7-10 days for sampling, 25-35 days for production. 
        All products manufactured in our GMP and SQF certified facility in Taizhou, China.
      </p>
    </div>
  </div>
</div>
```

**示例 - Factory 页面**:
```html
<div className="quick-facts">
  <h2>Factory Overview</h2>
  <dl>
    <dt>Location:</dt>
    <dd>Taixing City, Jiangsu Province, China</dd>
    
    <dt>Production Area:</dt>
    <dd>[需要提供真实数据] square meters</dd>
    
    <dt>Certifications:</dt>
    <dd>GMP (Eurofins), SQF Food Safety Level 2</dd>
    
    <dt>Production Lines:</dt>
    <dd>Soft chews, powders, tablets, liquids, pastes</dd>
    
    <dt>Daily Capacity:</dt>
    <dd>[需要提供真实数据]</dd>
    
    <dt>Quality Control:</dt>
    <dd>In-process testing, finished product testing, third-party lab verification</dd>
  </dl>
</div>
```

### 4.3 FAQ 结构化数据

**每个服务页添加 5-8 个采购型问题**:

**Private Label FAQs**:
```typescript
const faqs = [
  {
    q: "What is your minimum order quantity (MOQ) for private label?",
    a: "Our MOQ is 500 units per SKU for private label projects. This allows small and medium brands to start their own product line without huge upfront investment."
  },
  {
    q: "Can I use my own formula?",
    a: "Yes, you can provide your own formula. Our R&D team will review it for feasibility and regulatory compliance. We can also develop a custom formula based on your requirements."
  },
  {
    q: "What packaging options are available?",
    a: "We offer bottles, pouches, jars, and blister packs. Packaging materials include PET, HDPE, aluminum foil pouches, and glass. Custom packaging design and printing available."
  },
  {
    q: "How long does sampling take?",
    a: "Sample production typically takes 7-10 business days after formula confirmation. We provide 3 rounds of sampling adjustments at no extra cost."
  },
  {
    q: "What certifications do you have?",
    a: "Our facility is GMP certified (Eurofins audit) and SQF Level 2 certified for pet food manufacturing. We also hold Feed Production License from China authorities."
  }
];
```

**生成 Schema**:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

---

## 五、界面文案 SEO 化

> 将用户界面上的文字优化为 SEO 友好、转化导向的表达

### 5.1 导航菜单优化

**当前可能的问题**:
- ❌ "Services" → 太泛化
- ❌ "Products" → 没有关键词
- ❌ "Company" → 不够具体

**优化后**:
```
Header Navigation:
├─ Home
├─ Products & Catalog (原: Products)
├─ Private Label (原: Services > Private Label)
├─ Wholesale & OEM (原: Services > Wholesale)
├─ Manufacturing (原: Factory)
├─ Quality & Certifications (原: Quality)
├─ Resources (Dropdown)
│  ├─ Blog & News
│  ├─ Industry Guides
│  └─ FAQs
└─ Contact Us

Footer Navigation:
[产品]
- Product Catalog
- Dog Supplements
- Cat Supplements
- Bulk Ordering

[服务]
- Private Label Service
- OEM/ODM Manufacturing
- Wholesale Partnership
- Custom Formulation

[公司]
- About EMBEPET
- Our Factory
- Quality Control
- Certifications

[资源]
- Blog & News
- Industry Insights
- How to Start a Pet Brand
- Supplier Selection Guide

[联系]
- Contact Us
- Request a Quote
- Request Samples
- Become a Partner
```

### 5.2 按钮 CTA 优化

**原则**: 
- 明确、具体、行动导向
- 包含关键词或价值主张

**优化对比**:

| 位置 | ❌ 原文案 | ✅ 优化后 |
|-----|----------|----------|
| 首页 Hero | "Get Started" | "Request a Free Quote" |
| 首页 Hero | "Learn More" | "Browse Product Catalog" |
| Private Label | "Contact Us" | "Start Your Private Label Project" |
| Product Page | "Inquire" | "Request Product Specifications" |
| Product Page | "Get Sample" | "Ask for a Free Sample" |
| Factory Page | "Contact" | "Schedule a Factory Visit" |
| Quality Page | "Download" | "Download GMP Certificate (PDF)" |
| Blog Post | "Read More" | "Read Complete Guide" |
| Contact Page | "Submit" | "Send Inquiry Now" |

### 5.3 产品卡片文案优化

**当前可能的问题**:
```html
<h3>Joint Support Soft Chews</h3>
<p>For dogs with joint issues</p>
<button>View Details</button>
```

**优化后**:
```html
<h3>Dog Joint Support Soft Chews - Glucosamine & Chondroitin</h3>
<p>
  Wholesale & private label available | 
  MOQ 500 units | 
  GMP certified
</p>
<div className="product-features">
  <span>🏭 OEM/ODM</span>
  <span>📦 Custom Packaging</span>
  <span>✅ GMP Certified</span>
</div>
<button>Request Specifications & Pricing</button>
```

### 5.4 页面标题和引言优化

**首页 Hero**:

❌ **原版**:
```
Your Trusted Pet Supplement Partner
We manufacture high-quality pet supplements for brands worldwide.
```

✅ **优化版**:
```
Pet Supplement Manufacturer | Wholesale, OEM & Private Label

EMBEPET is a GMP-certified pet supplement manufacturer in China, 
supporting global brands with wholesale purchasing, private label development, 
and OEM/ODM manufacturing services. From 500 units MOQ.

[Request a Quote] [View Our Catalog]
```

**Private Label 页面**:

❌ **原版**:
```
Private Label Services
Launch your own pet supplement brand with our help.
```

✅ **优化版**:
```
Private Label Pet Supplements | Custom Formula & Packaging

Start your own pet supplement brand with MOQ from 500 units. 
We handle formula development, GMP manufacturing, packaging design, 
and regulatory support. Sample ready in 7-10 days.

Quick Facts:
✓ MOQ: 500 units per SKU
✓ Sampling: 7-10 business days
✓ Production: 25-35 days
✓ Certifications: GMP, SQF

[Start Your Project] [Request Sample Kit]
```

### 5.5 产品描述优化

**当前可能的问题**:
```
This product supports joint health in dogs.
Contains glucosamine and chondroitin.
```

**优化后**:
```
## Dog Joint Support Soft Chews

### Wholesale & Private Label Available

Our joint support soft chews are manufactured in our GMP-certified facility, 
combining glucosamine HCl (500mg), chondroitin sulfate (400mg), and MSM (300mg) 
per chew. Ideal for brands targeting senior dogs and active breeds.

**Key Features**:
- High palatability (chicken liver flavor)
- No artificial preservatives
- Shelf life: 24 months
- Available formats: Soft chews, tablets, powder

**For Buyers**:
- Wholesale MOQ: [需要提供]
- Private Label MOQ: 500 units
- Custom formulation available
- Packaging: Bottles (30/60/120 ct) or pouches

**Quality Assurance**:
- GMP certified production
- Third-party lab tested
- COA and MSDS provided
- Microbial and heavy metal tested

[Request Specifications] [Ask for Sample] [Discuss Custom Formula]
```

---

## 六、页面优先级执行清单

### 🔴 第一优先级（立即修复）

**技术 SEO 基础**:
- [ ] 修复 Canonical URL（确认生产域名）
- [ ] 设置 noindex: `/account/*`, `/cart`, `/checkout`, `/admin`
- [ ] 完善 Sitemap（添加缺失页面）
- [ ] 确认多语言策略（中文是否 noindex）

**预计时间**: 2-4 小时

---

### 🟡 第二优先级（本周完成）

**主要页面优化**:
- [ ] 首页
  - [ ] 优化 Title/Description
  - [ ] 优化 H1/H2 层级
  - [ ] 添加 Quick Facts
  - [ ] 优化 CTA 文案
  - [ ] 添加 BreadcrumbList Schema
  
- [ ] Private Label 页面
  - [ ] 分配主关键词
  - [ ] 添加 Quick Facts 段落
  - [ ] 添加 FAQ (5-8个)
  - [ ] 添加 Service Schema
  - [ ] 优化 CTA
  
- [ ] Factory 页面
  - [ ] 优化关键词布局
  - [ ] 添加工厂数据段落
  - [ ] 添加认证展示
  - [ ] 链接到 Quality 页面
  
- [ ] Quality/Science 页面
  - [ ] 重点突出 GMP/SQF
  - [ ] 提供证书下载链接
  - [ ] 添加 FAQ
  
- [ ] Shop/Products 页面
  - [ ] 优化产品卡片文案
  - [ ] 添加筛选功能（剂型、功效）
  - [ ] 产品详情页添加采购信息

**预计时间**: 1-2 天

---

### 🟢 第三优先级（下周完成）

**内容增强**:
- [ ] 增强 llms.txt
- [ ] 创建 llms-full.txt（完整产品列表）
- [ ] 为每个主要页面添加 FAQ
- [ ] 优化图片 alt 属性
- [ ] 完善内部链接

**Schema 补充**:
- [ ] 所有页面添加 BreadcrumbList
- [ ] 服务页添加 Service Schema
- [ ] FAQ 页添加 FAQPage Schema
- [ ] 验证 Organization Schema 信息准确性

**预计时间**: 2-3 天

---

## 七、需要提供的真实信息

### 🔴 必需信息（阻碍代码修改）

1. **生产环境域名**
   - 例如: `https://www.embepet.com`

2. **公司主体关系**
   - Embepet Biotech (Shenzhen) Co., Ltd. - 角色？
   - Taizhou Beno Biotech Co., Ltd. - 角色？
   - 两者关系？（品牌与工厂？母子公司？）

3. **联系方式**
   - 官方邮箱（info@/sales@）
   - 电话（+86 xxx）
   - WhatsApp/WeChat

4. **MOQ 和周期**
   - Private Label MOQ: 500 units ✅
   - Wholesale MOQ: ?
   - 打样周期: 7-10 days ✅
   - 生产周期: 25-35 days ✅

5. **多语言翻译状态**
   - 中文页面是否完整翻译？
   - 如未翻译，是否同意 noindex？

### 🟡 重要信息（影响内容质量）

6. **工厂数据**
   - 生产面积（平方米）
   - 日产能
   - 生产线数量

7. **认证证书**
   - GMP 证书 PDF 路径确认
   - SQF 证书 PDF 路径确认
   - 其他证书（ISO/HACCP/FDA）

8. **主要市场**
   - 主要出口国家/地区

9. **可提供文档**
   - COA ✅
   - MSDS ✅
   - Free Sales Certificate
   - 第三方检测报告

---

## 八、验证清单

### 构建前验证

```bash
# 1. TypeScript 检查
npx tsc --noEmit

# 2. ESLint 检查
npm run lint

# 3. 构建验证
npm run build

# 4. 启动检查
npm run start
```

### SEO 验证工具

**在线工具**:
- Google Search Console - 索引状态
- Google PageSpeed Insights - 性能检查
- Screaming Frog - 爬取测试
- Ahrefs Site Audit - 技术SEO
- Schema.org Validator - Schema 验证

**手动检查**:
- [ ] 访问 `/sitemap.xml` - 确认页面完整
- [ ] 访问 `/robots.txt` - 确认规则正确
- [ ] 访问 `/llms.txt` - 确认内容准确
- [ ] 检查主要页面 `<title>` 标签
- [ ] 检查主要页面 canonical URL
- [ ] 检查 JSON-LD Schema（查看源代码）
- [ ] 测试内部链接（无死链）

---

## 九、下一步行动

请告诉我：

**A. 提供必需信息后开始修改**
- 你先提供上述"必需信息"
- 我开始修改代码（技术SEO + 页面优化）

**B. 分阶段执行**
- 第一阶段：技术SEO修复（需要域名信息）
- 第二阶段：内容优化（需要MOQ等信息）
- 第三阶段：Schema和GEO（需要认证信息）

**C. 先做不依赖外部信息的部分**
- Sitemap 补充
- noindex 设置
- 页面结构优化
- CTA 文案优化

---

## 附录：关键词研究工具推荐

- Google Keyword Planner（免费）
- Ahrefs Keywords Explorer（付费）
- SEMrush Keyword Magic Tool（付费）
- Ubersuggest（免费/付费）
- Answer The Public（免费/付费）

## 附录：竞争对手分析建议

建议分析的竞争对手类型：
1. 国内宠物营养品 OEM 工厂
2. 北美 Private Label 宠物supplement供应商
3. 欧洲 GMP 认证宠物supplement制造商

分析维度：
- 他们的主要关键词
- 他们的页面结构
- 他们的内容策略
- 他们的外链来源

