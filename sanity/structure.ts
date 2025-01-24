// @ts-ignore
import {type StructureResolver} from 'sanity/structure'
// @ts-ignore
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Platform sections group
      S.listItem()
        .title("Platform")
        .child(
          S.list()
            .title("Platform Sections")
            .items([
              // Hero Section - Single Document
              S.listItem()
                .title("Hero Section")
                .child(
                  S.document()
                    .schemaType("heroSection")
                    .documentId("heroSection")
                ),
              // About Section - Single Document
              S.listItem()
                .title("About Section")
                .child(
                  S.document()
                    .schemaType("aboutSection")
                    .documentId("aboutSection")
                ),
              // Projects Section - Single Document
              S.listItem()
                .title("Projects Section")
                .child(
                  S.document()
                    .schemaType("projectsSection")
                    .documentId("projectsSection")
                ),
              // Skills Section - Single Document
              S.listItem()
                .title("Skills Section")
                .child(
                  S.document()
                    .schemaType("skillsSection")
                    .documentId("skillsSection")
                ),
              // Footer Section - Single Document
              S.listItem()
                .title("Footer Section")
                .child(
                  S.document()
                    .schemaType("footerSection")
                    .documentId("footerSection")
                ),
            ])
        ),
      S.divider(),
      // Blog section group
      S.listItem()
        .title("Blog")
        .child(
          S.list()
            .title("Blog Content")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ])
        ),
    ]);
