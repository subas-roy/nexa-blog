import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';

export const generateStaticParams = async () => {
  // Dynamic Routes
  // Generate static paths for the first 3 blogs for better performance and SEO.
  // This is useful when you have a large number of dynamic routes and you want to pre-render only a subset of them.
  const res = await fetch('http://localhost:5000/blogs');
  const blogs = await res.json();

  return blogs.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

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
