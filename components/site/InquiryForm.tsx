"use client";

import { useActionState } from "react";
import { Loader2, Send } from "lucide-react";
import { submitInquiry, type FormState } from "@/lib/actions/storefront";

const field =
  "h-12 w-full border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/55 focus:border-forest";

const typeOptionsEn = [
  { value: "private_label", label: "Private label / OEM / ODM" },
  { value: "wholesale", label: "Wholesale supply" },
  { value: "distributor", label: "Distribution partnership" },
  { value: "other", label: "General business inquiry" },
];

const typeOptionsZh = [
  { value: "private_label", label: "贴牌 / OEM / ODM" },
  { value: "wholesale", label: "批发采购" },
  { value: "distributor", label: "分销合作" },
  { value: "other", label: "一般商务咨询" },
];

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-xs font-semibold uppercase tracking-[0.11em] text-ink-soft">
      {children}
    </label>
  );
}

export default function InquiryForm({
  defaultType = "private_label",
  locale = "en",
}: {
  defaultType?: string;
  locale?: string;
}) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitInquiry, null);
  const isZh = locale === "zh";
  const typeOptions = isZh ? typeOptionsZh : typeOptionsEn;

  if (state?.success) {
    return (
      <div className="border border-forest/30 bg-forest/5 p-8">
        <p className="text-2xl font-semibold text-forest">
          {isZh ? "询盘已收到" : "Inquiry received"}
        </p>
        <p className="mt-3 max-w-lg text-sm leading-6 text-ink-soft">{state.success}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="inquiry-type">
            {isZh ? "项目类型" : "Project type"}
          </FieldLabel>
          <select id="inquiry-type" name="type" defaultValue={defaultType} className={field}>
            {typeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="company">
            {isZh ? "公司名称 *" : "Company name *"}
          </FieldLabel>
          <input id="company" className={field} name="company" required autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-name">
            {isZh ? "联系人姓名 *" : "Contact name *"}
          </FieldLabel>
          <input id="contact-name" className={field} name="contactName" required autoComplete="name" />
        </div>
        <div>
          <FieldLabel htmlFor="business-email">
            {isZh ? "企业邮箱 *" : "Business email *"}
          </FieldLabel>
          <input id="business-email" className={field} type="email" name="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="phone">
            {isZh ? "电话 / WhatsApp" : "Phone / WhatsApp"}
          </FieldLabel>
          <input id="phone" className={field} name="phone" autoComplete="tel" />
        </div>
        <div>
          <FieldLabel htmlFor="country">
            {isZh ? "国家 / 地区" : "Country / region"}
          </FieldLabel>
          <input id="country" className={field} name="country" autoComplete="country-name" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="website">
            {isZh ? "公司官网" : "Company website"}
          </FieldLabel>
          <input id="website" className={field} name="website" placeholder="https://" inputMode="url" />
        </div>
        <div>
          <FieldLabel htmlFor="volume">
            {isZh ? "预计订单量" : "Estimated order volume"}
          </FieldLabel>
          <input
            id="volume"
            className={field}
            name="volume"
            placeholder={isZh ? "例如：5,000 件" : "For example: 5,000 units"}
          />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="message">
          {isZh ? "项目简介 *" : "Project brief *"}
        </FieldLabel>
        <textarea
          id="message"
          className={`${field} min-h-36 resize-y py-3`}
          name="message"
          required
          placeholder={
            isZh
              ? "产品、市场、包装、目标数量及上市时间"
              : "Products, market, packaging, target quantity and launch timing"
          }
        />
      </div>

      {state?.error ? <p className="text-sm text-clay">{state.error}</p> : null}
      <button disabled={pending} className="b2b-btn-primary w-fit disabled:opacity-60" type="submit">
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
        {isZh ? "发送询盘" : "Send inquiry"}
      </button>
      <p className="text-xs leading-5 text-ink-soft">
        {isZh
          ? "商务团队将审核项目简介并确认下一步合作方式。"
          : "The business team will review the brief and confirm the appropriate commercial next step."}
      </p>
    </form>
  );
}
