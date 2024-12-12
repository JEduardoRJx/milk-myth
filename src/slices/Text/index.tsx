import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-2xl font-normal leading-10 text-slate-600 md:my-4'>
      {children}
    </p>
  ),
};

/**
 * Props for `Text`.
 */
export type TextProps = SliceComponentProps<Content.TextSlice>;

/**
 * Component for "Text" Slices.
 */
const Text = ({ slice }: TextProps): JSX.Element => {
  if (slice.variation === 'textImageRight') {
    return (
      <section className='mt-8'>
        <div className='grid grid-cols-2 md:grid-cols-2'>
          <PrismicRichText
            field={slice.primary.text}
            components={components}
          />
          <PrismicNextImage
            className='w-full p-8 pr-0'
            field={slice.primary.image}
            alt={''}
          />
        </div>
      </section>
    );
  }

  if (slice.variation === 'textImageLeft') {
    return (
      <section className='mt-8'>
        <div className='grid grid-cols-2 md:grid-cols-2'>
          <PrismicNextImage
            className='w-full p-8 pl-0'
            field={slice.primary.image}
            alt={''}
          />
          <PrismicRichText
            field={slice.primary.text}
            components={components}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.text} components={components} />
    </section>
  );
};

export default Text;
