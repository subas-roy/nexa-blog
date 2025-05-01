import BlogDetailsCard from '@/components/ui/BlogDetailsCard';

export const generateStaticParams = async () => {
  // SSG (Static Site Generation) is a method of pre-rendering pages at build time. This means that the HTML for the page is generated when you build your application, rather than on each request. This can improve performance and SEO, as the HTML is ready to be served to the client.
  return [
    {
      blogId: '1',
    },
    {
      blogId: '2',
    },
    {
      blogId: '3',
    },
  ];
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
