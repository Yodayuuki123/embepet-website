import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import PostForm from "@/components/admin/PostForm";

export const dynamic = "force-dynamic";

export default async function AdminPostEditPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await db.post.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">编辑文章</h1>
      <p className="mt-1 truncate text-[0.88rem] text-black/45">{post.title}</p>
      <div className="mt-6">
        <PostForm post={post} />
      </div>
    </div>
  );
}
