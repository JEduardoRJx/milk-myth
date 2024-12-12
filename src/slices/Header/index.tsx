import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { JSX } from 'react';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 className='text-5xl md:text-7xl font-bold leading-tight tracking-tight text-slate-700 '>
      {children}
    </h1>
  ),
  paragraph: ({ children }) => (
    <p className='text-2xl font-normal leading-10 text-slate-600 md:my-4'>
      {children}
    </p>
  ),
};

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  const date = new Date(slice.primary.timestamp || '');

  const formattedDate = date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Denver',
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} components={components} />
      {formattedDate}
    </section>
  );
};

export default Header;
