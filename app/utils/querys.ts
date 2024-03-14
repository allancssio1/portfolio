export const queryHome = `
query Page {
  page(where: {slug: "home"}) {
    introduction {
      raw
    }
    introTechnologies {
      name
    }
    profilePicture {
      url
    }
    socials {
      url
      iconSvg
    }
    knownTechs {
      iconSvg
      name
      startDate
    }
    highlightProjects {
      slug
      logo
      thumbnail {
        url
      }
      title
      shortDescription
      technologies {
        name
      }
    }
  }
}
`
