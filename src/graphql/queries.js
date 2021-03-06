/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      username
      displayName
      canHire
      email
      supporting {
        id
        name
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        supporters
        description
        category
        operator
        target
        projects {
          nextToken
        }
        featuredImg
        createdAt
        updatedAt
      }
      developing {
        id
        name
        channelID
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        developers {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        description
        category
        featuredImg
        startDate
        endDate
        devStage
        showcase {
          id
          title
          manager
          managerID
          videos
          createdAt
          updatedAt
        }
        updates {
          nextToken
        }
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      role
      membership
      avatar
      createdAt
      updatedAt
      channel {
        id
        name
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        supporters
        description
        category
        operator
        target
        projects {
          nextToken
        }
        featuredImg
        createdAt
        updatedAt
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        username
        displayName
        canHire
        email
        supporting {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
        developing {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        role
        membership
        avatar
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      channelID
      manager {
        id
        firstName
        lastName
        username
        displayName
        canHire
        email
        supporting {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
        developing {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        role
        membership
        avatar
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      developers {
        id
        firstName
        lastName
        username
        displayName
        canHire
        email
        supporting {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
        developing {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        role
        membership
        avatar
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      description
      category
      featuredImg
      startDate
      endDate
      devStage
      showcase {
        id
        title
        manager
        managerID
        videos
        createdAt
        updatedAt
      }
      updates {
        items {
          id
          projectID
          name
          short
          content
          format
          coverImg
          index
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      channel {
        id
        name
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        supporters
        description
        category
        operator
        target
        projects {
          nextToken
        }
        featuredImg
        createdAt
        updatedAt
      }
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        channelID
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        developers {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        description
        category
        featuredImg
        startDate
        endDate
        devStage
        showcase {
          id
          title
          manager
          managerID
          videos
          createdAt
          updatedAt
        }
        updates {
          nextToken
        }
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUpdate = /* GraphQL */ `
  query GetUpdate($id: ID!) {
    getUpdate(id: $id) {
      id
      project {
        id
        name
        channelID
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        developers {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        description
        category
        featuredImg
        startDate
        endDate
        devStage
        showcase {
          id
          title
          manager
          managerID
          videos
          createdAt
          updatedAt
        }
        updates {
          nextToken
        }
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      projectID
      author {
        id
        firstName
        lastName
        username
        displayName
        canHire
        email
        supporting {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
        developing {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        role
        membership
        avatar
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      name
      short
      content
      format
      coverImg
      index
      createdAt
      updatedAt
    }
  }
`;
export const listUpdates = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        project {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        projectID
        author {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        name
        short
        content
        format
        coverImg
        index
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getShowcase = /* GraphQL */ `
  query GetShowcase($id: ID!) {
    getShowcase(id: $id) {
      id
      title
      manager
      managerID
      videos
      createdAt
      updatedAt
    }
  }
`;
export const listShowcases = /* GraphQL */ `
  query ListShowcases(
    $filter: ModelShowcaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShowcases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        manager
        managerID
        videos
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const updatesByProject = /* GraphQL */ `
  query UpdatesByProject(
    $projectID: String
    $sortDirection: ModelSortDirection
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    UpdatesByProject(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        project {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        projectID
        author {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        name
        short
        content
        format
        coverImg
        index
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChannel = /* GraphQL */ `
  query GetChannel($id: ID!) {
    getChannel(id: $id) {
      id
      name
      manager {
        id
        firstName
        lastName
        username
        displayName
        canHire
        email
        supporting {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
        developing {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        role
        membership
        avatar
        createdAt
        updatedAt
        channel {
          id
          name
          supporters
          description
          category
          operator
          target
          featuredImg
          createdAt
          updatedAt
        }
      }
      supporters
      description
      category
      operator
      target
      projects {
        items {
          id
          name
          channelID
          description
          category
          featuredImg
          startDate
          endDate
          devStage
          createdAt
          updatedAt
        }
        nextToken
      }
      featuredImg
      createdAt
      updatedAt
    }
  }
`;
export const listChannels = /* GraphQL */ `
  query ListChannels(
    $filter: ModelChannelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChannels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        manager {
          id
          firstName
          lastName
          username
          displayName
          canHire
          email
          role
          membership
          avatar
          createdAt
          updatedAt
        }
        supporters
        description
        category
        operator
        target
        projects {
          nextToken
        }
        featuredImg
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
