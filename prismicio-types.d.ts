// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Circle Grid Info documents */
interface CircleGridInfoDocumentData {
  /**
   * Text1 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text1: prismicT.KeyTextField;
  /**
   * Text2 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text2: prismicT.KeyTextField;
  /**
   * Text3 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text3: prismicT.KeyTextField;
  /**
   * Text4 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text4
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text4: prismicT.KeyTextField;
  /**
   * Text5 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text5
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text5: prismicT.KeyTextField;
  /**
   * Text6 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text6
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text6: prismicT.KeyTextField;
  /**
   * Text7 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text7
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text7: prismicT.KeyTextField;
  /**
   * Text8 field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text8
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text8: prismicT.KeyTextField;
  /**
   * Text Central field in *Circle Grid Info*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.text_central
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text_central: prismicT.KeyTextField;
  /**
   * Image field in *Circle Grid Info*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: circle_grid_info.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Circle Grid Info document from Prismic
 *
 * - **API ID**: `circle_grid_info`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CircleGridInfoDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<CircleGridInfoDocumentData>,
    "circle_grid_info",
    Lang
  >;
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
/** Content for Footer documents */
interface FooterDocumentData {
  /**
   * Instagram field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  instagram: prismicT.KeyTextField;
  /**
   * Email field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email: prismicT.KeyTextField;
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismicT.ImageField<never>;
  /**
   * Logo2 field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo2: prismicT.ImageField<never>;
  /**
   * Logo3 field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo3: prismicT.ImageField<never>;
  /**
   * Team field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.team
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  team: prismicT.ImageField<never>;
}
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;
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
/** Content for Meet Team documents */
interface MeetTeamDocumentData {
  /**
   * Title field in *Meet Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Subtitle field in *Meet Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismicT.KeyTextField;
  /**
   * Text1 field in *Meet Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.text1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text1: prismicT.KeyTextField;
  /**
   * Text2 field in *Meet Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.text2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text2: prismicT.KeyTextField;
  /**
   * Text3 field in *Meet Team*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.text3
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text3: prismicT.KeyTextField;
  /**
   * Slice Zone field in *Meet Team*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: meet_team.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<MeetTeamDocumentDataSlicesSlice>;
}
/**
 * Slice for *Meet Team → Slice Zone*
 *
 */
type MeetTeamDocumentDataSlicesSlice = never;
/**
 * Meet Team document from Prismic
 *
 * - **API ID**: `meet_team`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MeetTeamDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<MeetTeamDocumentData>,
    "meet_team",
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
/** Content for Sign Up documents */
interface SignUpDocumentData {
  /**
   * Title field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismicT.KeyTextField;
  /**
   * Subtitle field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.subtitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismicT.KeyTextField;
  /**
   * Name field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismicT.KeyTextField;
  /**
   * Lastname field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.lastname
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  lastname: prismicT.KeyTextField;
  /**
   * Email field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email: prismicT.KeyTextField;
  /**
   * Phone field in *Sign Up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  phone: prismicT.KeyTextField;
}
/**
 * Sign Up document from Prismic
 *
 * - **API ID**: `sign_up`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SignUpDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<SignUpDocumentData>,
    "sign_up",
    Lang
  >;
export type AllDocumentTypes =
  | CircleGridInfoDocument
  | ContactDocument
  | FooterDocument
  | GeneralInformationDocument
  | HomepageDocument
  | MeetTeamDocument
  | MemberDocument
  | MenuDocument
  | SeoDocument
  | SignUpDocument;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      CircleGridInfoDocumentData,
      CircleGridInfoDocument,
      ContactDocumentData,
      ContactDocument,
      FooterDocumentData,
      FooterDocument,
      GeneralInformationDocumentData,
      GeneralInformationDocument,
      HomepageDocumentData,
      HomepageDocument,
      MeetTeamDocumentData,
      MeetTeamDocumentDataSlicesSlice,
      MeetTeamDocument,
      MemberDocumentData,
      MemberDocumentDataSlicesSlice,
      MemberDocument,
      MenuDocumentData,
      MenuDocumentDataMenuLinksItem,
      MenuDocument,
      SeoDocumentData,
      SeoDocument,
      SignUpDocumentData,
      SignUpDocument,
      AllDocumentTypes,
    };
  }
}
