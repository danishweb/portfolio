import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export const urlForImage = (source: Image | undefined): string => {
  return imageBuilder.image(source).auto("format").fit("max").url();
};
