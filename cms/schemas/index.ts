import { SchemaTypeDefinition } from "sanity";
import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroSection } from "./heroSection";
import { aboutSection } from "./aboutSection";
import { projectsSection } from "./projectsSection";
import { skillsSection } from "./skillsSection";
import { footerSection } from "./footerSection";
import { techStack } from "./techStack";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroSection,
    aboutSection,
    projectsSection,
    skillsSection,
    footerSection,
    techStack,
    siteSettings,
  ],
};
