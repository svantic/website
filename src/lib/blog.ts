import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  read_time: string;
  featured?: boolean;
  image?: string;
}

export function get_all_posts(): BlogPost[] {
  if (!fs.existsSync(POSTS_PATH)) {
    return [];
  }

  const files = fs.readdirSync(POSTS_PATH).filter((file) => file.endsWith('.mdx'));

  const posts = files.map((file) => {
    const file_path = path.join(POSTS_PATH, file);
    const file_content = fs.readFileSync(file_path, 'utf-8');
    const { data, content } = matter(file_content);

    return {
      slug: file.replace('.mdx', ''),
      title: data.title || '',
      excerpt: data.excerpt || '',
      content,
      author: data.author || '',
      date: data.date || '',
      category: data.category || '',
      read_time: data.read_time || '',
      featured: data.featured || false,
      image: data.image || null,
    } as BlogPost;
  });

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function get_post_by_slug(slug: string): BlogPost | null {
  const file_path = path.join(POSTS_PATH, `${slug}.mdx`);

  if (!fs.existsSync(file_path)) {
    return null;
  }

  const file_content = fs.readFileSync(file_path, 'utf-8');
  const { data, content } = matter(file_content);

  return {
    slug,
    title: data.title || '',
    excerpt: data.excerpt || '',
    content,
    author: data.author || '',
    date: data.date || '',
    category: data.category || '',
    read_time: data.read_time || '',
    featured: data.featured || false,
    image: data.image || null,
  };
}

export function get_posts_by_category(category: string): BlogPost[] {
  return get_all_posts().filter((post) => post.category.toLowerCase() === category.toLowerCase());
}
