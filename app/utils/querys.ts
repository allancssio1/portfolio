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
      logo {
        url
      }
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
  workExperiences {
    companyLogo {
      url
    }
    role
    companyName
    companyUrl
    startDate
    endDate
    description {
      raw
    }
    technologies {
      name
    }
  }
}
`

export const queryProjects = `
query ProjectsQuery {
  projects {
    shortDescription
    slug
    title
    thumbnail {
      url
    }
    technologies {
      name
    }
  }
}
`

export const queryProjectDetails = `
query ProjectQuery() {
  project(where: {slug: "[slug]"}) {
    pageThumbnail {
      url
    }
    thumbnail {
      url
    }
    sections {
      title
      image {
        url
      }
    }
    title
    shortDescription
    description {
      raw
      text
    }
    technologies {
      name
    }
    liveProject
    repository
  }
}
`

export const queryProjectSlugs = `
query ProjectsSlugsQuery() {
  projects(first: 10) {
    slug
  }
}
`
