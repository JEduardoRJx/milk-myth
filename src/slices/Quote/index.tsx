import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { JSX } from 'react';

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <blockquote className='p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800'>
      <p className='text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white'>
        {children}
      </p>
    </blockquote>
  ),
};

/**
 * Props for `Quote`.
 */
export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

/**
 * Component for "Quote" Slices.
 */
const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.quote} components={components} />
    </section>
  );
};

export default Quote;
