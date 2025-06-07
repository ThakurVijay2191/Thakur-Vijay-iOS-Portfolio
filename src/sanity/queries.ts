export const getAllUsersQuery = `*[_type == "user"]`
export const getAllExperiencesQuery = `*[_type == "experience"] | order(order desc)`
export const getAllProjectsQuery = `*[_type == "project"]`
export const getAllSkillsQuery = `*[_type == "skill"]`
export const getSingleUserQuery = `*[_type == "user"][0]`


// Optional: Single record by slug/id
export const getUserByIdQuery = (id: any) => `*[_type == "user" && _id == "${id}"][0]`
export const getProjectBySlugQuery = (slug: any) => `*[_type == "project" && slug.current == "${slug}"][0]`