import { MdCallToAction } from "react-icons/md";
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Base")
    .items([
      S.divider(),
      S.listItem().title("Categories").child(S.documentTypeList("category")),
      S.listItem().title("Pages").child(S.documentTypeList("page")),
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
