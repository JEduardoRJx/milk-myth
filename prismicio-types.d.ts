// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Header field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.header
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  header: prismic.RichTextField;

  /**
   * Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *Blog*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Item in *Homepage → Featured Blogs*
 */
export interface HomepageDocumentDataFeaturedBlogsItem {
  /**
   * featured_blog field in *Homepage → Featured Blogs*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.featured_blogs[].featured_blog
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  featured_blog: prismic.LinkField;
}

type HomepageDocumentDataSlicesSlice =
  | TableSlice
  | VideoSlice
  | TextSlice
  | ImageSlice
  | H2HeaderSlice
  | QuoteSlice
  | HeaderSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Featured Blogs field in *Homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.featured_blogs[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  featured_blogs: prismic.GroupField<
    Simplify<HomepageDocumentDataFeaturedBlogsItem>
  >;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = BlogDocument | HomepageDocument;

/**
 * Primary content in *H2Header → Default → Primary*
 */
export interface H2HeaderSliceDefaultPrimary {
  /**
   * h2 Header field in *H2Header → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: h2_header.default.primary.h2_header
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  h2_header: prismic.TitleField;
}

/**
 * Default variation for H2Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type H2HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<H2HeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *H2Header*
 */
type H2HeaderSliceVariation = H2HeaderSliceDefault;

/**
 * H2Header Shared Slice
 *
 * - **API ID**: `h2_header`
 * - **Description**: H2Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type H2HeaderSlice = prismic.SharedSlice<
  "h2_header",
  H2HeaderSliceVariation
>;

/**
 * Primary content in *Header → Default → Primary*
 */
export interface HeaderSliceDefaultPrimary {
  /**
   * Heading field in *Header → Default → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.TitleField;

  /**
   * Timestamp field in *Header → Default → Primary*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: header.default.primary.timestamp
   * - **Documentation**: https://prismic.io/docs/field#timestamp
   */
  timestamp: prismic.TimestampField;
}

/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Header*
 */
type HeaderSliceVariation = HeaderSliceDefault;

/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: Header
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeaderSlice = prismic.SharedSlice<"header", HeaderSliceVariation>;

/**
 * Primary content in *Image → Default → Primary*
 */
export interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Image*
 */
type ImageSliceVariation = ImageSliceDefault;

/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: Image
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;

/**
 * Primary content in *Quote → Default → Primary*
 */
export interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quote.default.primary.quote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  quote: prismic.RichTextField;
}

/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Quote*
 */
type QuoteSliceVariation = QuoteSliceDefault;

/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: Quote
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;

/**
 * Item in *Table → Default → Primary → Table Column Headings*
 */
export interface TableSliceDefaultPrimaryTableColumnHeadingsItem {
  /**
   * Column 1 field in *Table → Default → Primary → Table Column Headings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_column_headings[].column_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_1: prismic.RichTextField;

  /**
   * Column 2 field in *Table → Default → Primary → Table Column Headings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_column_headings[].column_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_2: prismic.RichTextField;

  /**
   * Column 3 field in *Table → Default → Primary → Table Column Headings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_column_headings[].column_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_3: prismic.RichTextField;

  /**
   * Column 4 field in *Table → Default → Primary → Table Column Headings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_column_headings[].column_4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_4: prismic.RichTextField;
}

/**
 * Item in *Table → Default → Primary → Table Rows*
 */
export interface TableSliceDefaultPrimaryTableRowsItem {
  /**
   * Column 1 field in *Table → Default → Primary → Table Rows*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_rows[].column_1
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_1: prismic.RichTextField;

  /**
   * Column 2 field in *Table → Default → Primary → Table Rows*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_rows[].column_2
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_2: prismic.RichTextField;

  /**
   * Column 3 field in *Table → Default → Primary → Table Rows*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_rows[].column_3
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_3: prismic.RichTextField;

  /**
   * Column 4 field in *Table → Default → Primary → Table Rows*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_rows[].column_4
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  column_4: prismic.RichTextField;
}

/**
 * Primary content in *Table → Default → Primary*
 */
export interface TableSliceDefaultPrimary {
  /**
   * Table Column Headings field in *Table → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_column_headings[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  table_column_headings: prismic.GroupField<
    Simplify<TableSliceDefaultPrimaryTableColumnHeadingsItem>
  >;

  /**
   * Table Rows field in *Table → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: table.default.primary.table_rows[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  table_rows: prismic.GroupField<
    Simplify<TableSliceDefaultPrimaryTableRowsItem>
  >;
}

/**
 * Default variation for Table Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TableSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TableSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Table*
 */
type TableSliceVariation = TableSliceDefault;

/**
 * Table Shared Slice
 *
 * - **API ID**: `table`
 * - **Description**: Table
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TableSlice = prismic.SharedSlice<"table", TableSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Text → Text Image Right → Primary*
 */
export interface TextSliceTextImageRightPrimary {
  /**
   * Text field in *Text → Text Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.textImageRight.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Text → Text Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text.textImageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Text Image Right variation for Text Slice
 *
 * - **API ID**: `textImageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTextImageRight = prismic.SharedSliceVariation<
  "textImageRight",
  Simplify<TextSliceTextImageRightPrimary>,
  never
>;

/**
 * Primary content in *Text → Text Image Left → Primary*
 */
export interface TextSliceTextImageLeftPrimary {
  /**
   * Text field in *Text → Text Image Left → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: text.textImageLeft.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Text → Text Image Left → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: text.textImageLeft.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Text Image Left variation for Text Slice
 *
 * - **API ID**: `textImageLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceTextImageLeft = prismic.SharedSliceVariation<
  "textImageLeft",
  Simplify<TextSliceTextImageLeftPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation =
  | TextSliceDefault
  | TextSliceTextImageRight
  | TextSliceTextImageLeft;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

/**
 * Primary content in *Video → Default → Primary*
 */
export interface VideoSliceDefaultPrimary {
  /**
   * Video field in *Video → Default → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: video.default.primary.video
   * - **Documentation**: https://prismic.io/docs/field#embed
   */
  video: prismic.EmbedField;
}

/**
 * Default variation for Video Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<VideoSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Video*
 */
type VideoSliceVariation = VideoSliceDefault;

/**
 * Video Shared Slice
 *
 * - **API ID**: `video`
 * - **Description**: Video
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type VideoSlice = prismic.SharedSlice<"video", VideoSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataFeaturedBlogsItem,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      H2HeaderSlice,
      H2HeaderSliceDefaultPrimary,
      H2HeaderSliceVariation,
      H2HeaderSliceDefault,
      HeaderSlice,
      HeaderSliceDefaultPrimary,
      HeaderSliceVariation,
      HeaderSliceDefault,
      ImageSlice,
      ImageSliceDefaultPrimary,
      ImageSliceVariation,
      ImageSliceDefault,
      QuoteSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceVariation,
      QuoteSliceDefault,
      TableSlice,
      TableSliceDefaultPrimaryTableColumnHeadingsItem,
      TableSliceDefaultPrimaryTableRowsItem,
      TableSliceDefaultPrimary,
      TableSliceVariation,
      TableSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceTextImageRightPrimary,
      TextSliceTextImageLeftPrimary,
      TextSliceVariation,
      TextSliceDefault,
      TextSliceTextImageRight,
      TextSliceTextImageLeft,
      VideoSlice,
      VideoSliceDefaultPrimary,
      VideoSliceVariation,
      VideoSliceDefault,
    };
  }
}
