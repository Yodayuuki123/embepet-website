"use client";

import { useActionState } from "react";
import { PawPrint } from "lucide-react";
import { adminLogin, type AuthState } from "@/lib/actions/auth";
import { SubmitButton, inputCls, labelCls } from "@/components/admin/ui";

export default function AdminLoginPage() {
  const [state, action] = useActionState<AuthState, FormData>(adminLogin, null);

  return (
    <div className="grid min-h-screen place-items-center bg-[#f4f4f1] px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#1d3f2f] text-white">
            <PawPrint size={26} />
          </span>
          <div className="text-center">
            <h1 className="text-xl font-bold">EMBEPET 管理后台</h1>
            <p className="mt-1 text-[0.85rem] text-black/45">请使用管理员账号登录</p>
          </div>
        </div>

        <form action={action} className="rounded-2xl border border-black/8 bg-white p-6 shadow-sm">
          <div className="space-y-4">
            <div>
              <label className={labelCls}>邮箱</label>
              <input name="email" type="email" required className={inputCls} placeholder="admin@embepet.com" />
            </div>
            <div>
              <label className={labelCls}>密码</label>
              <input name="password" type="password" required className={inputCls} placeholder="••••••••" />
            </div>
            {state?.error ? (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-[0.85rem] text-red-600">{state.error}</p>
            ) : null}
            <SubmitButton className="w-full">登录</SubmitButton>
          </div>
        </form>

        <p className="mt-4 text-center text-[0.78rem] text-black/40">
          开发环境默认账号：admin@embepet.com / admin123
        </p>
      </div>
    </div>
  );
}
