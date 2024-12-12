import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import FeaturedBlogs from '@/components/FeaturedBlogs';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage');
  const blogs = await client.getSingle('homepage', {
    graphQuery: `{
      homepage {
        featured_blogs {
          featured_blog {
            ...on blog {
              header
              text
              image
            }
          }
        }
      }
    }`,
  });

  const extractedBlogs = blogs.data.featured_blogs.map((item) => {
    const blog = item.featured_blog.data || {};
    return {
      title: blog.header?.[0]?.text || 'No Title',
      // title: blog.header || 'No Title',
      content: blog.text?.[0]?.text || 'No Content',
      image: blog.image || {},
    };
  });

  return (
    <main className='max-w-screen-lg mx-auto my-8'>
      <FeaturedBlogs featuredBlogs={extractedBlogs} />
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
