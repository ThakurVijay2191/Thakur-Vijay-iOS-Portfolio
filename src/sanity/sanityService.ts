// src/api/sanityService.js

import client from './sanityClient.ts'
import {
  getAllUsersQuery,
  getAllExperiencesQuery,
  getAllProjectsQuery,
  getAllSkillsQuery,
  getUserByIdQuery,
  getProjectBySlugQuery,
  getSingleUserQuery
} from './queries.ts'

export const fetchAllUsers = async () => {
  try {
    return await client.fetch(getAllUsersQuery)
  } catch (err) {
    console.error('Error fetching users:', err)
    return []
  }
}

export const fetchAllExperiences = async () => {
  try {
    return await client.fetch(getAllExperiencesQuery)
  } catch (err) {
    console.error('Error fetching experiences:', err)
    return []
  }
}

export const fetchAllProjects = async () => {
  try {
    return await client.fetch(getAllProjectsQuery)
  } catch (err) {
    console.error('Error fetching projects:', err)
    return []
  }
}

export const fetchAllSkills = async () => {
  try {
    return await client.fetch(getAllSkillsQuery)
  } catch (err) {
    console.error('Error fetching skills:', err)
    return []
  }
}

export const fetchUserById = async (id: any) => {
  try {
    return await client.fetch(getUserByIdQuery(id))
  } catch (err) {
    console.error('Error fetching user by ID:', err)
    return null
  }
}

export const fetchProjectBySlug = async (slug: any) => {
  try {
    return await client.fetch(getProjectBySlugQuery(slug))
  } catch (err) {
    console.error('Error fetching project by slug:', err)
    return null
  }
}

export const fetchSingleUser = async () => {
  try {
    return await client.fetch(getSingleUserQuery)
  } catch (err) {
    console.error('Error fetching single user:', err)
    return null
  }
}