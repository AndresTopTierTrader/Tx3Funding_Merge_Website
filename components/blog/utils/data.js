// data.js
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_PUBLIC_URL
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN

// API Headers
const headers = {
  'Authorization': `Bearer ${STRAPI_TOKEN}`,
  'Content-Type': 'application/json'
};

// Helper function to get the current locale from URL or context
const getCurrentLocale = () => {
  if (typeof window !== 'undefined') {
    // Client-side: extract locale from current URL
    const pathname = window.location.pathname;
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && segments[0] === 'es') {
      return 'es';
    }
  }
  return 'en'; // Default to English
};

// Helper function to get localized field value
const getLocalizedField = (blogData, fieldName, locale = 'en') => {
  if (locale === 'es') {
    const localizedField = blogData[`${fieldName}_es`];
    if (localizedField) return localizedField;
  }
  // Fallback to English version
  return blogData[fieldName];
};

// Helper function to get localized image
const getLocalizedImage = (blogData, locale = 'en') => {
  let imageData;
  
  if (locale === 'es' && blogData.image_es) {
    imageData = blogData.image_es;
  } else {
    imageData = blogData.image;
  }
  
  if (imageData?.data?.attributes?.url) {
    return `${STRAPI_API_URL.replace('/api', '')}${imageData.data.attributes.url}`;
  } else if (imageData?.url) {
    return `${STRAPI_API_URL.replace('/api', '')}${imageData.url}`;
  }
  
  // Default fallback image
  return 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop';
};

// Fetch blogs from Strapi API with locale support
export const fetchBlogData = async (locale = null) => {
  try {
    // Use provided locale or detect from URL
    const currentLocale = locale || getCurrentLocale();
    
    console.log('🚀 Fetching blogs from Strapi API...');
    console.log('🌍 Current locale:', currentLocale);
    console.log('API URL:', `${STRAPI_API_URL}/blogs?populate=*`);
    
    const response = await fetch(`${STRAPI_API_URL}/blogs?populate=*`, {
      method: 'GET',
      headers: headers
    });

    console.log('📡 Response status:', response.status);
    console.log('📡 Response ok:', response.ok);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('📦 Raw Strapi data:', data);
    console.log('📊 Number of blogs found:', data.data?.length || 0);
    
    // Check if data.data exists and is an array
    if (!data.data || !Array.isArray(data.data)) {
      console.warn('⚠️ Unexpected data structure from Strapi:', data);
      return [];
    }
    
    // Transform Strapi data to match your existing structure with locale support
    const blogData = data.data.map((blog, index) => {
      console.log(`🔄 Processing blog ${index + 1}:`, blog);
      
      // Check if data is nested under attributes or flat
      const blogData = blog.attributes || blog;
      console.log(`🔍 Blog data structure:`, blogData);
      
      const transformedBlog = {
        id: blog.id,
        slug: getLocalizedField(blogData, 'slug', currentLocale) || blog.documentId || `blog-${blog.id}`,
        title: getLocalizedField(blogData, 'title', currentLocale) || `Blog ${blog.id}`,
        description: getLocalizedField(blogData, 'description', currentLocale) || '',
        author: getLocalizedField(blogData, 'author', currentLocale) || 'Unknown Author',
        date: blogData.publish_date || blogData.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
        readTime: blogData.minutes_read ? `${blogData.minutes_read} min read` : `${Math.ceil(Math.random() * 8) + 2} min read`,
        tags: getLocalizedField(blogData, 'tag', currentLocale) ? getLocalizedField(blogData, 'tag', currentLocale).split(',').map(tag => tag.trim()) : [],
        category: getLocalizedField(blogData, 'category', currentLocale) || 'Article',
        image: getLocalizedImage(blogData, currentLocale),
        featured: index === 0 || index === 3,
        content: getLocalizedField(blogData, 'content', currentLocale) || 'Full article content here...',
        locale: currentLocale
      };
      
      console.log(`✅ Transformed blog ${index + 1} (${currentLocale}):`, transformedBlog);
      return transformedBlog;
    });

    console.log('🎉 Final blog data array:', blogData);
    return blogData;
  } catch (error) {
    console.error('❌ Error fetching blog data:', error);
    console.log('🔄 Returning empty array instead of fallback data');
    return [];
  }
};

// Get unique authors from blog data with locale support
export const fetchAuthors = async (locale = null) => {
  try {
    const blogs = await fetchBlogData(locale);
    const uniqueAuthors = [...new Set(blogs.map(blog => blog.author))];
    console.log('👥 Unique authors found:', uniqueAuthors);
    return uniqueAuthors.filter(author => author && author !== 'Unknown Author');
  } catch (error) {
    console.error('❌ Error fetching authors:', error);
    return [];
  }
};

// Get unique categories from blog data with locale support
export const fetchCategories = async (locale = null) => {
  try {
    const blogs = await fetchBlogData(locale);
    const uniqueCategories = [...new Set(blogs.map(blog => blog.category))];
    console.log('📂 Unique categories found:', uniqueCategories);
    return uniqueCategories.filter(category => category);
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return [];
  }
};

// Get unique tags from blog data with locale support
export const fetchTags = async (locale = null) => {
  try {
    const blogs = await fetchBlogData(locale);
    const allTags = blogs.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)];
    console.log('🏷️ Unique tags found:', uniqueTags);
    return uniqueTags.filter(tag => tag);
  } catch (error) {
    console.error('❌ Error fetching tags:', error);
    return [];
  }
};

// Create a single blog post with locale support
export const createBlog = async (blogData, locale = 'en') => {
  try {
    const dataPayload = {
      title: blogData.title,
      description: blogData.description,
      tag: Array.isArray(blogData.tags) ? blogData.tags.join(', ') : blogData.tags,
      publish_date: blogData.date,
      content: blogData.content,
      author: blogData.author,
      minutes_read: blogData.readTime ? parseInt(blogData.readTime.split(' ')[0]) : 5
    };

    // If locale is Spanish, also add Spanish fields
    if (locale === 'es' && blogData.content_es) {
      dataPayload.title_es = blogData.title_es || blogData.title;
      dataPayload.description_es = blogData.description_es || blogData.description;
      dataPayload.tag_es = blogData.tag_es || dataPayload.tag;
      dataPayload.content_es = blogData.content_es;
    }

    const response = await fetch(`${STRAPI_API_URL}/blogs`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ data: dataPayload })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

// Update a blog post with locale support
export const updateBlog = async (id, blogData, locale = 'en') => {
  try {
    const dataPayload = {
      title: blogData.title,
      description: blogData.description,
      tag: Array.isArray(blogData.tags) ? blogData.tags.join(', ') : blogData.tags,
      publish_date: blogData.date,
      content: blogData.content,
      author: blogData.author,
      minutes_read: blogData.readTime ? parseInt(blogData.readTime.split(' ')[0]) : 5
    };

    // If locale is Spanish, also update Spanish fields
    if (locale === 'es' && blogData.content_es) {
      dataPayload.title_es = blogData.title_es || blogData.title;
      dataPayload.description_es = blogData.description_es || blogData.description;
      dataPayload.tag_es = blogData.tag_es || dataPayload.tag;
      dataPayload.content_es = blogData.content_es;
    }

    const response = await fetch(`${STRAPI_API_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ data: dataPayload })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog post
export const deleteBlog = async (id) => {
  try {
    const response = await fetch(`${STRAPI_API_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: headers
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

// For backward compatibility - now returns empty arrays, use fetch functions instead
export const blogData = [];
export const authors = [];
export const categories = [];
export const tags = [];

// Utility function to get blog by slug with locale support
export const getBlogBySlug = async (slug, locale = null) => {
  try {
    const currentLocale = locale || getCurrentLocale();
    
    console.log(`🔍 Fetching blog with slug: ${slug} (locale: ${currentLocale})`);
    
    // Search for blog by slug field first, then fallback to documentId
    const response = await fetch(`${STRAPI_API_URL}/blogs?filters[slug][$eq]=${slug}&populate=*`, {
      method: 'GET',
      headers: headers
    });

    console.log('📡 Single blog by slug response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('📦 Single blog by slug raw data:', data);
    
    if (!data.data || data.data.length === 0) {
      console.warn('⚠️ No blog found with this slug, trying documentId...');
      
      // Fallback: try searching by documentId
      const fallbackResponse = await fetch(`${STRAPI_API_URL}/blogs?filters[documentId][$eq]=${slug}&populate=*`, {
        method: 'GET',
        headers: headers
      });
      
      if (fallbackResponse.ok) {
        const fallbackData = await fallbackResponse.json();
        if (fallbackData.data && fallbackData.data.length > 0) {
          console.log('✅ Found blog by documentId');
          data.data = fallbackData.data;
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    
    const blog = data.data[0]; // Get first match
    
    // Check if data is nested under attributes or flat
    const blogData = blog.attributes || blog;
    console.log(`🔍 Single blog data structure:`, blogData);
    
    const transformedBlog = {
      id: blog.id,
      slug: getLocalizedField(blogData, 'slug', currentLocale) || blog.documentId || `blog-${blog.id}`,
      title: getLocalizedField(blogData, 'title', currentLocale) || `Blog ${blog.id}`,
      description: getLocalizedField(blogData, 'description', currentLocale) || '',
      author: getLocalizedField(blogData, 'author', currentLocale) || 'Unknown Author',
      date: blogData.publish_date || blogData.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
      readTime: blogData.minutes_read ? `${blogData.minutes_read} min read` : '5 min read',
      tags: getLocalizedField(blogData, 'tag', currentLocale) ? getLocalizedField(blogData, 'tag', currentLocale).split(',').map(tag => tag.trim()) : [],
      category: getLocalizedField(blogData, 'category', currentLocale) || 'Article',
      image: getLocalizedImage(blogData, currentLocale),
      featured: false,
      content: getLocalizedField(blogData, 'content', currentLocale) || 'Full article content here...',
      locale: currentLocale
    };
    
    console.log('✅ Transformed single blog by slug:', transformedBlog);
    return transformedBlog;
  } catch (error) {
    console.error('❌ Error fetching blog by slug:', error);
    return null;
  }
};