export const queryHome = `
query PageInfoQuery {
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
  }
}
`
