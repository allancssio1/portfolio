import { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTech = {
  name: string
  iconSvg: string
  startDate: string
}

export type Social = {
  url: string
  iconSvg: string
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
      knownTech: KnownTech[]
    }
  }
}

export type HomePageData = {
  page: HomePageInfo
}
