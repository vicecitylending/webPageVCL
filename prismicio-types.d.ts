// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Contact documents */
interface ContactDocumentData {
  /**
   * Number Field field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.number_field
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  number_field: prismicT.KeyTextField;
}
/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;
/** Content for General Information documents */
interface GeneralInformationDocumentData {
  /**
   * Small Logo field in *General Information*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  small_logo: prismicT.ImageField<never>;
  /**
   * Small Logo Width field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_width
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  small_logo_width: prismicT.KeyTextField;
  /**
   * Small Logo Height field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_height
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  small_logo_height: prismicT.KeyTextField;
}
/**
 * General Information document from Prismic
 *
 * - **API ID**: `general_information`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GeneralInformationDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<GeneralInformationDocumentData>,
    "general_information",
    Lang
  >;
/** Content for Homepage documents */
type HomepageDocumentData = Record<string, never>;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Member documents */
interface MemberDocumentData {
  /**
   * Name field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Surname field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.surname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  surname: prismicT.KeyTextField;
  /**
   * Position field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.position
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  position: prismicT.KeyTextField;
  /**
   * NMLS field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.nmls
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  nmls: prismicT.KeyTextField;
  /**
   * Email field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email: prismicT.KeyTextField;
  /**
   * Phone field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  phone: prismicT.KeyTextField;
  /**
   * Instagram field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  instagram: prismicT.KeyTextField;
  /**
   * Photo field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.photo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  photo: prismicT.ImageField<never>;
  /**
   * Slice Zone field in *Member*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: member.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<MemberDocumentDataSlicesSlice>;
}
/**
 * Slice for *Member → Slice Zone*
 *
 */
type MemberDocumentDataSlicesSlice = never;
/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<MemberDocumentData>, "member", Lang>;
/** Content for Menú documents */
interface MenuDocumentData {
  /**
   * Menu Links field in *Menú*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  menu_links: prismicT.GroupField<Simplify<MenuDocumentDataMenuLinksItem>>;
}
/**
 * Item in Menú → Menu Links
 *
 */
export interface MenuDocumentDataMenuLinksItem {
  /**
   * Link field in *Menú → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  link: prismicT.KeyTextField;
  /**
   * Label field in *Menú → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismicT.KeyTextField;
}
/**
 * Menú document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;
/** Content for SEO documents */
interface SeoDocumentData {
  /**
   * Title field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Default Description field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  default_description: prismicT.KeyTextField;
  /**
   * Default Keywords field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_keywords
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  default_keywords: prismicT.KeyTextField;
  /**
   * Default URL field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  default_url: prismicT.KeyTextField;
  /**
   * Default Image field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  default_image: prismicT.KeyTextField;
}
/**
 * SEO document from Prismic
 *
 * - **API ID**: `seo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<SeoDocumentData>, "seo", Lang>;
export type AllDocumentTypes =
  | ContactDocument
  | GeneralInformationDocument
  | HomepageDocument
  | MemberDocument
  | MenuDocument
  | SeoDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ContactDocumentData,
      ContactDocument,
      GeneralInformationDocumentData,
      GeneralInformationDocument,
      HomepageDocumentData,
      HomepageDocument,
      MemberDocumentData,
      MemberDocumentDataSlicesSlice,
      MemberDocument,
      MenuDocumentData,
      MenuDocumentDataMenuLinksItem,
      MenuDocument,
      SeoDocumentData,
      SeoDocument,
      AllDocumentTypes,
    };
  }
}
