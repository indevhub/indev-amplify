/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChannel = /* GraphQL */ `
  mutation CreateChannel(
    $input: CreateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    createChannel(input: $input, condition: $condition) {
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
export const updateChannel = /* GraphQL */ `
  mutation UpdateChannel(
    $input: UpdateChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    updateChannel(input: $input, condition: $condition) {
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
export const deleteChannel = /* GraphQL */ `
  mutation DeleteChannel(
    $input: DeleteChannelInput!
    $condition: ModelChannelConditionInput
  ) {
    deleteChannel(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createUpdate = /* GraphQL */ `
  mutation CreateUpdate(
    $input: CreateUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    createUpdate(input: $input, condition: $condition) {
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
export const updateUpdate = /* GraphQL */ `
  mutation UpdateUpdate(
    $input: UpdateUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    updateUpdate(input: $input, condition: $condition) {
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
export const deleteUpdate = /* GraphQL */ `
  mutation DeleteUpdate(
    $input: DeleteUpdateInput!
    $condition: ModelUpdateConditionInput
  ) {
    deleteUpdate(input: $input, condition: $condition) {
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
export const createShowcase = /* GraphQL */ `
  mutation CreateShowcase(
    $input: CreateShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    createShowcase(input: $input, condition: $condition) {
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
export const updateShowcase = /* GraphQL */ `
  mutation UpdateShowcase(
    $input: UpdateShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    updateShowcase(input: $input, condition: $condition) {
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
export const deleteShowcase = /* GraphQL */ `
  mutation DeleteShowcase(
    $input: DeleteShowcaseInput!
    $condition: ModelShowcaseConditionInput
  ) {
    deleteShowcase(input: $input, condition: $condition) {
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
