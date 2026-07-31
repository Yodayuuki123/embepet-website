import "server-only";

type Mail = { to: string; subject: string; html: string };

// 开发环境打印到控制台；配置 RESEND_API_KEY 后自动走 Resend 发送。
export async function sendMail({ to, subject, html }: Mail) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`\n[邮件模拟] To: ${to}\nSubject: ${subject}\n${html.replace(/<[^>]+>/g, " ").slice(0, 400)}\n`);
    return { ok: true, simulated: true };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.EMAIL_FROM ?? "EMBEPET <onboarding@resend.dev>",
        to,
        subject,
        html,
      }),
    });
    return { ok: res.ok, simulated: false };
  } catch (err) {
    console.error("[email] send failed", err);
    return { ok: false, simulated: false };
  }
}
