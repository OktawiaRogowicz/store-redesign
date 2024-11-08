import { MdCallToAction } from "react-icons/md";
import {ListItemBuilder, StructureResolver} from 'sanity/structure';
import collections from './collectionStructure'
import colorThemes from './colorThemeStructure'
import home from './homeStructure'
import pages from './pageStructure'
import products from './productStructure'
import settings from './settingStructure'

/**
 * Structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schema types progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'colorTheme',
    'home',
    'media.tag',
    'page',
    'product',
    'productVariant',
    'settings',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
    S.list()
        .title("Base")
        .items([
            S.divider(),
            S.listItem().title("Collections").child(S.documentTypeList("collection")),
            S.listItem().title("Products").child(S.documentTypeList("product")),
            S.listItem()
                .title("Custom pages")
                .child(
                    S.list()
                        .title("Custom pages")
                        .items([
                            S.listItem()
                                .title("Homepage")
                                .icon(MdCallToAction)
                                .child(
                                    S.editor().schemaType("homePage").documentId("homePage"),
                                ),
                            S.listItem()
                                .title("About us")
                                .icon(MdCallToAction)
                                .child(
                                    S.editor()
                                        .schemaType("aboutUsPage")
                                        .documentId("aboutUsPage"),
                                ),
                            S.listItem()
                                .title("Returns")
                                .icon(MdCallToAction)
                                .child(
                                    S.editor()
                                        .schemaType("returnsPage")
                                        .documentId("returnsPage"),
                                ),
                            S.listItem()
                                .title("Regulations")
                                .icon(MdCallToAction)
                                .child(
                                    S.editor()
                                        .schemaType("regulationsPage")
                                        .documentId("regulationsPage"),
                                ),
                        ]),
                ),
            S.divider(),
            S.listItem()
                .title("Settings")
                .child(
                    S.list()
                        .title("Settings Documents")
                        .items([
                            S.listItem()
                                .title("HeaderDesktop Settings")
                                .icon(MdCallToAction)
                                .child(S.editor().schemaType("header").documentId("header")),
                            S.listItem()
                                .title("Footer Settings")
                                .icon(MdCallToAction)
                                .child(S.editor().schemaType("footer").documentId("footer")),
                        ]),
                ),
        ]);
  // S.list()
  //   .title('Content')
  //   .items([
  //     home(S, context),
  //     pages(S, context),
  //     S.divider(),
  //     collections(S, context),
  //     products(S, context),
  //     S.divider(),
  //     colorThemes(S, context),
  //     S.divider(),
  //     settings(S, context),
  //     S.divider(),
  //     ...S.documentTypeListItems().filter(hiddenDocTypes),
  //   ])
