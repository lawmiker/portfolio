export interface ProjectFeatureSlide {
  name: string;
  description: string;
  images: string[];
}

export interface ProjectData {
  slug: string;
  projectName: string;

  softwareLabels: string[];
  projectIcon: string;

  devsList: string[];
  misc: string;

  featureSlides: ProjectFeatureSlide[];
}