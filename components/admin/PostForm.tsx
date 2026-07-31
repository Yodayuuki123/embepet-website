"use client";

import { useActionState } from "react";
import Link from "next/link";
import { savePost, deletePost, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, Field, inputCls } from "./ui";

type PostData = {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  answerCapsule: string;
  content: string;
  category: string;
  tags: string;
  species: string;
  authorName: string;
  authorTitle: string;
  authorBio: string;
  reviewedBy: string;
  pillar: boolean;
  published: boolean;
  readMinutes: number;
  faqs: string;
  sources: string;
  coverColorKey: string;
  seoTitle: string | null;
  seoDescription: string | null;
};

const COLOR_KEYS = ["forest", "moss", "amber", "clay", "plum", "teal", "rose", "oat", "charcoal", "sky"];

export default function PostForm({ post }: { post: PostData | null }) {
  const [state, action] = useActionState<AdminFormState, FormData>(savePost, null);

  const pretty = (raw: string | undefined) => {
    try {
      return JSON.stringify(JSON.parse(raw || "[]"), null, 2);
    } catch {
      return raw ?? "[]";
    }
  };

  return (
    <form action={action} className="space-y-6">
      {post?.id ? <input type="hidden" name="id" value={post.id} /> : null}

      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <Field label="标题（英文，建议含目标关键词）">
            <input name="title" defaultValue={post?.title} required className={inputCls} />
          </Field>
        </div>
        <Field label="URL Slug">
          <input name="slug" defaultValue={post?.slug} required className={inputCls} />
        </Field>
        <Field label="分类">
          <select name="category" defaultValue={post?.category ?? "guides"} className={inputCls}>
            <option value="guides">指南 Guides</option>
            <option value="nutrition">营养 Nutrition</option>
            <option value="behavior">行为 Behavior</option>
            <option value="news">资讯 News</option>
          </select>
        </Field>
        <div className="md:col-span-2">
          <Field label="摘要 excerpt（列表页与 SEO 描述展示）">
            <textarea name="excerpt" defaultValue={post?.excerpt} rows={2} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="答案胶囊（GEO：文章开头 40-60 词直接回答标题问题，AI 引擎优先摘录）">
            <textarea name="answerCapsule" defaultValue={post?.answerCapsule} rows={3} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="正文（Markdown，H2 用问题式小标题、段落宜短、多用列表和表格）">
            <textarea name="content" defaultValue={post?.content} rows={18} className={`${inputCls} font-mono text-[0.82rem]`} />
          </Field>
        </div>
        <Field label="标签（逗号分隔）">
          <input name="tags" defaultValue={post?.tags} className={inputCls} />
        </Field>
        <Field label="相关物种">
          <select name="species" defaultValue={post?.species ?? "dog"} className={inputCls}>
            <option value="dog">犬</option>
            <option value="cat">猫</option>
            <option value="dog_cat">犬猫</option>
          </select>
        </Field>
        <Field label="预计阅读分钟">
          <input name="readMinutes" type="number" defaultValue={post?.readMinutes ?? 5} className={inputCls} />
        </Field>
        <Field label="封面主题色">
          <select name="coverColorKey" defaultValue={post?.coverColorKey ?? "forest"} className={inputCls}>
            {COLOR_KEYS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
        <div className="flex items-end gap-6 pb-1 md:col-span-2">
          <label className="flex items-center gap-2 text-[0.88rem]">
            <input type="checkbox" name="pillar" defaultChecked={post?.pillar} className="size-4" />
            支柱长文（完整指南）
          </label>
          <label className="flex items-center gap-2 text-[0.88rem]">
            <input type="checkbox" name="published" defaultChecked={post?.published ?? true} className="size-4" />
            发布（取消则存为草稿）
          </label>
        </div>
      </div>

      {/* E-E-A-T 署名 */}
      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <Field label="作者名（E-E-A-T 信号）">
          <input name="authorName" defaultValue={post?.authorName ?? "EMBEPET Science Team"} className={inputCls} />
        </Field>
        <Field label="作者头衔">
          <input name="authorTitle" defaultValue={post?.authorTitle} className={inputCls} />
        </Field>
        <div className="md:col-span-2">
          <Field label="作者简介">
            <input name="authorBio" defaultValue={post?.authorBio} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="审校署名 reviewedBy（如兽医审校，可留空）">
            <input name="reviewedBy" defaultValue={post?.reviewedBy} className={inputCls} />
          </Field>
        </div>
      </div>

      {/* GEO 结构化字段 */}
      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <Field label="FAQ（JSON）" hint='[{"q":"...","a":"..."}] — 输出 FAQPage 结构化数据，建议 3-7 条'>
          <textarea name="faqs" defaultValue={pretty(post?.faqs)} rows={8} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <Field label="来源引用 sources（JSON）" hint='[{"label":"...","url":"..."}] — GEO 关键：引用权威来源提升 AI 引用率'>
          <textarea name="sources" defaultValue={pretty(post?.sources)} rows={8} className={`${inputCls} font-mono text-[0.78rem]`} />
        </Field>
        <Field label="SEO 标题（留空用文章标题）">
          <input name="seoTitle" defaultValue={post?.seoTitle ?? ""} className={inputCls} />
        </Field>
        <Field label="SEO 描述（留空用摘要）">
          <input name="seoDescription" defaultValue={post?.seoDescription ?? ""} className={inputCls} />
        </Field>
      </div>

      <div className="flex items-center gap-4">
        <SubmitButton>保存文章</SubmitButton>
        <FormMsg state={state} />
        <div className="flex-1" />
        {post?.id ? (
          <button
            type="button"
            onClick={() => {
              if (confirm("确定删除这篇文章？")) deletePost(post.id!);
            }}
            className="text-[0.85rem] text-red-500 hover:underline"
          >
            删除文章
          </button>
        ) : null}
        <Link href="/admin/posts" className="text-[0.85rem] text-black/50 hover:underline">返回列表</Link>
      </div>
    </form>
  );
}
