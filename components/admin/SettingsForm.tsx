"use client";

import { useActionState } from "react";
import { saveSettings, type AdminFormState } from "@/lib/actions/admin";
import { SubmitButton, FormMsg, Field, inputCls } from "./ui";
import type { SiteSettings } from "@/lib/settings";

export default function SettingsForm({ settings }: { settings: SiteSettings }) {
  const [state, action] = useActionState<AdminFormState, FormData>(saveSettings, null);

  return (
    <form action={action} className="space-y-6">
      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <p className="font-semibold md:col-span-2">品牌信息</p>
        <Field label="品牌名（英文）">
          <input name="brandName" defaultValue={settings.brandName} className={inputCls} />
        </Field>
        <Field label="品牌名（中文）">
          <input name="brandNameCn" defaultValue={settings.brandNameCn} className={inputCls} />
        </Field>
        <Field label="品牌标语">
          <input name="brandTagline" defaultValue={settings.brandTagline} className={inputCls} />
        </Field>
        <Field label="公司法定名称（页脚展示）">
          <input name="companyLegalName" defaultValue={settings.companyLegalName} className={inputCls} />
        </Field>
        <Field label="顶部公告条（留空隐藏）">
          <input name="announcement" defaultValue={settings.announcement} className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <p className="font-semibold md:col-span-2">联系方式</p>
        <Field label="客服邮箱">
          <input name="supportEmail" defaultValue={settings.supportEmail} className={inputCls} />
        </Field>
        <Field label="B2B 商务邮箱">
          <input name="b2bEmail" defaultValue={settings.b2bEmail} className={inputCls} />
        </Field>
        <Field label="电话 / WhatsApp">
          <input name="phone" defaultValue={settings.phone} className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <p className="font-semibold md:col-span-2">社交媒体（Organization schema 的 sameAs 实体信号）</p>
        <Field label="Instagram">
          <input name="instagram" defaultValue={settings.instagram} className={inputCls} />
        </Field>
        <Field label="Facebook">
          <input name="facebook" defaultValue={settings.facebook} className={inputCls} />
        </Field>
        <Field label="TikTok">
          <input name="tiktok" defaultValue={settings.tiktok} className={inputCls} />
        </Field>
        <Field label="YouTube">
          <input name="youtube" defaultValue={settings.youtube} className={inputCls} />
        </Field>
      </div>

      <div className="grid gap-4 rounded-2xl border border-black/8 bg-white p-5 md:grid-cols-2">
        <p className="font-semibold md:col-span-2">物流与 SEO 默认值</p>
        <Field label="免邮门槛（美分，4900 = $49）">
          <input name="freeShippingThresholdCents" type="number" defaultValue={settings.freeShippingThresholdCents} className={inputCls} />
        </Field>
        <Field label="固定运费（美分）">
          <input name="flatShippingCents" type="number" defaultValue={settings.flatShippingCents} className={inputCls} />
        </Field>
        <div className="md:col-span-2">
          <Field label="默认 SEO 标题（首页）">
            <input name="seoDefaultTitle" defaultValue={settings.seoDefaultTitle} className={inputCls} />
          </Field>
        </div>
        <div className="md:col-span-2">
          <Field label="默认 SEO 描述（首页）">
            <textarea name="seoDefaultDescription" defaultValue={settings.seoDefaultDescription} rows={2} className={inputCls} />
          </Field>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <SubmitButton>保存设置</SubmitButton>
        <FormMsg state={state} />
      </div>
    </form>
  );
}
