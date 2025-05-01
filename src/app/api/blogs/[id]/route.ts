import { NextResponse } from 'next/server';
import { blogs } from '../route';

export const GET = (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  const blog = blogs.find((blog) => blog.id === id);

  return NextResponse.json(blog);
};

// PUT, PATCH, DELETE methods can be added similarly to the above code.
