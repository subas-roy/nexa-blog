import BlogForm from '@/components/ui/BlogForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NexaBlog | Create A Blog',
};

const CreateBlogPage = () => {
  return (
    <div>
      <BlogForm />
    </div>
  );
};

export default CreateBlogPage;
