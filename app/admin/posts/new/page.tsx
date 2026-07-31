import PostForm from "@/components/admin/PostForm";

export default function AdminPostNewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">写新文章</h1>
      <p className="mt-1 text-[0.88rem] text-black/45">
        GEO 提示：标题用问题式、开头写答案胶囊、正文引用带来源的数据、结尾配 FAQ
      </p>
      <div className="mt-6">
        <PostForm post={null} />
      </div>
    </div>
  );
}
