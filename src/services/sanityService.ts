import client from '../sanity/sanityClient';

export const fetchUser = async () => {
  const query = `*[_type == "user"][0]{
    name,
    role,
    bio,
    image,
    socialLinks
  }`;
  
  try {
    const user = await client.fetch(query);
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}; 