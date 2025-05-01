import BlogDetailsCard from '@/components/ui/BlogDetailsCard';

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`, {
    cache: 'no-store',
  }); // SSR (Server Side Rendering) fetch data on every request. This is useful when you want to fetch data that changes frequently or when you want to ensure that the data is always up to date.
  const blog = await res.json();

  // console.log(blog);

  return (
    <div>
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
