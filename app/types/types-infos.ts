import { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  name: string
  iconSvg: string
  startDate: string
  color: string
}

export type Social = {
  url: string
  iconSvg: string
}

export type ProjectSection = {
  title: string
  image: {
    url: string
  }
}

export type HighlightProjects = {
  slug: string
  logo: {
    url: string
  }
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: KnownTech[]
  pageThmbnail: {
    url: string
  }
  liveProject?: string
  repository?: string
}

export type IWorkExperiences = {
  companyLogo: {
    url: string
  }
  role: string
  companyName: string
  companyUrl: string
  startDate: string
  endDate: string
  description: {
    raw: RichTextContent
  }
  technologies: KnownTech[]
}

export type HomePageInfo = {
  data: {
    page: {
      introduction: {
        raw: RichTextContent
      }
      introTechnologies: KnownTech[]
      profilePicture: {
        url: string
      }
      socials: Social[]
      knownTechs: KnownTech[]
      highlightProjects: HighlightProjects[]
      description: {
        raw: RichTextContent
      }
      pageThumbnail: {
        url: string
      }
    }
    workExperiences: IWorkExperiences[]
  }
}
