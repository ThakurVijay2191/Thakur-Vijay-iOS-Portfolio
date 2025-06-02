import { createClient } from '@sanity/client'

export default createClient({
  projectId: 'e5fwo79y', // ✅ Replace with your actual project ID
  dataset: 'production',     // use a specific API version
  useCdn: false                   // `false` if you want fresh data
})