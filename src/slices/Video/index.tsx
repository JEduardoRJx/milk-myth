import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from '@prismicio/react';
import { EmbedVideo } from '@/components/EmbedVideo';
import { JSX } from 'react';

const components: JSXMapSerializer = {
  paragraph: ({ children }) => (
    <p className='text-2xl font-normal leading-10 text-slate-600 md:my-4'>
      {children}
    </p>
  ),
};

/**
 * Props for `VideoContent`.
 */
export type VideoContentProps = SliceComponentProps<Content.VideoContentSlice>;

/**
 * Component for "VideoContent" Slices.
 */
const VideoContent = ({ slice }: VideoContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}>
      <EmbedVideo html={slice.primary.video.html} />
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
};

export default VideoContent;
