import { PrismicNextImage } from '@prismicio/next';
import { JSXMapSerializer } from '@prismicio/react';
const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className='text-3xl md:text-5xl font-bold leading-tight tracking-tight text-slate-700 '>
      {children}
    </h2>
  ),
  paragraph: ({ children }) => (
    <p className='text-xl font-normal leading-10 text-slate-600 md:my-4'>
      {children}
    </p>
  ),
};

type FeaturedBlog = {
  title: string;
  content: string;
  image: {
    url: string;
    alt: string;
    dimensions: {
      width: number;
      height: number;
    };
  };
};

type FeaturedBlogsProps = {
  featuredBlogs: FeaturedBlog[];
};

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ featuredBlogs }) => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {featuredBlogs.map((blog, index) => (
        <div key={index} className='p-4 bg-white shadow-md rounded-lg'>
          <h2 className='text-xl font-bold'>{blog.title}</h2>
          {/* <PrismicRichText field={blog.title} components={components} /> */}
          <PrismicNextImage className='my-4' field={blog.image} alt={''} />
          <p className='mt-2'>{blog.content}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturedBlogs;
