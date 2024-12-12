import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { JSX } from 'react';

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

/**
 * Props for `H2Header`.
 */
export type H2HeaderProps = SliceComponentProps<Content.H2HeaderSlice>;

/**
 * Component for "H2Header" Slices.
 */
const H2Header = ({ slice }: H2HeaderProps): JSX.Element => {
  return (
    <section
      className='mt-8'
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText
        field={slice.primary.h2_header}
        components={components}
      />
    </section>
  );
};

export default H2Header;
