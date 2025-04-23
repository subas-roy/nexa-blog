import LatestBlogs from '@/components/LatestBlogs/LatestBlogs';

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/blogs', {
    next: { revalidate: 30 }, // revalidate every 30 seconds meaning it will fetch the data every 30 seconds called ISR (Incremental Static Regeneration) also called SSG (Static Site Generation). Caching is done by Next.js.
  });
  const blogs = await res.json();
  // console.log(blogs);
  return (
    <div className="my-10">
      <LatestBlogs blogs={blogs} />
    </div>
  );
};

export default HomePage;
