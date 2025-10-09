import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { calculateReadingTime } from "./blog-utils";

/**
 * Blog Query Utilities & Types (MDX Implementation)
 */

export interface BlogPostMeta {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  status: "draft" | "published" | "archived";
  featured: boolean;
  tags: Array<{ title: string; slug: string; color: string }>;
  primaryTag?: { title: string; slug: string; color: string };
  author: {
    title: string;
    slug: string;
    avatar: string;
    role: string;
    bio?: string;
    website?: string;
    github?: string;
    linkedin?: string;
    twitter?: string;
    featured: boolean;
    postCount?: number;
  };
}

export interface BlogPostFull extends BlogPostMeta {
  body: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
  updatedAt?: string;
  enableToc: boolean;
  enableComments: boolean;
}

export interface TagData {
  title: string;
  slug: string;
  description?: string;
  color: string;
  featured: boolean;
  postCount?: number;
}

export interface AuthorData {
  title: string;
  slug: string;
  avatar: string;
  role: string;
  bio: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
  featured: boolean;
  postCount?: number;
}

const postsDirectory = path.join(process.cwd(), "content/posts");

// Default author
const defaultAuthor: AuthorData = {
  title: "Mustafa Hasırcıoğlu",
  slug: "mustafa-hasircioglu",
  avatar: "/star-logo.jpg",
  role: "Software Engineer & Founder",
  bio: "Full-stack developer specializing in cloud infrastructure, payment systems, and scalable architectures.",
  website: "https://hasirciogli.com",
  github: "hasirciogli",
  linkedin: "hasirciogli",
  twitter: "hasirciogli",
  featured: true,
  postCount: 0,
};

// Tag colors mapping
const tagColors: Record<string, string> = {
  infrastructure: "blue",
  product: "green",
  design: "purple",
  business: "orange",
  career: "pink",
  technology: "cyan",
  // Hsrcpay related tags
  hsrcpay: "rose",
  "payment-infrastructure": "sky",
  "gateway-lifecycle": "emerald",
  fintech: "lime",
  "event-driven": "fuchsia",
  // API and development tags
  api: "zinc",
  "payment-systems": "indigo",
  "developer-experience": "yellow",
  "rest-api": "stone",
  security: "red",
  webhooks: "amber",
  "e-commerce": "green",
  backend: "violet",
  "payment-gateway": "cyan",
  // Philosophy and craftsmanship tags
  philosophy: "teal",
  "clean-code": "slate",
  architecture: "blue",
  craftsmanship: "emerald",
  "software-engineering": "indigo",
};

function getPostFiles() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

function getPostByFilename(filename: string): BlogPostFull | null {
  try {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const tags = (data.tags || []).map((tag: string) => ({
      title: tag.charAt(0).toUpperCase() + tag.slice(1),
      slug: tag.toLowerCase(),
      color: tagColors[tag.toLowerCase()] || "blue",
    }));

    return {
      id: slug,
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      coverImage: data.coverImage || "",
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      readingTime: calculateReadingTime(content),
      status: data.status || "published",
      featured: data.featured || false,
      tags,
      primaryTag: tags[0],
      author: data.author || defaultAuthor,
      body: content,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription || data.excerpt,
      ogImage: data.ogImage || data.coverImage,
      enableToc: data.enableToc !== false,
      enableComments: data.enableComments !== false,
    };
  } catch (error) {
    console.error(`Error reading post ${filename}:`, error);
    return null;
  }
}

/**
 * Get all published blog posts
 */
export async function getAllPosts(options?: {
  limit?: number;
  skip?: number;
  featured?: boolean;
  tag?: string;
  author?: string;
}): Promise<BlogPostMeta[]> {
  const files = getPostFiles();
  let posts = files
    .map(getPostByFilename)
    .filter(
      (post): post is BlogPostFull =>
        post !== null && post.status === "published"
    );

  // Apply filters
  if (options?.featured !== undefined) {
    posts = posts.filter((post) => post.featured === options.featured);
  }
  if (options?.tag) {
    posts = posts.filter((post) =>
      post.tags.some((t) => t.slug === options.tag)
    );
  }
  if (options?.author) {
    posts = posts.filter((post) => post.author.slug === options.author);
  }

  // Sort by date
  posts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Apply pagination
  if (options?.skip) {
    posts = posts.slice(options.skip);
  }
  if (options?.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(
  slug: string
): Promise<BlogPostFull | null> {
  const filename = `${slug}.mdx`;
  return getPostByFilename(filename);
}

/**
 * Get related posts based on tags
 */
export async function getRelatedPosts(
  postId: string,
  limit: number = 3
): Promise<BlogPostMeta[]> {
  const currentPost = await getPostBySlug(postId);
  if (!currentPost) return [];

  const allPosts = await getAllPosts();

  // Find posts with overlapping tags
  const relatedPosts = allPosts
    .filter((post) => post.slug !== postId)
    .map((post) => ({
      post,
      score: post.tags.filter((tag) =>
        currentPost.tags.some((t) => t.slug === tag.slug)
      ).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);

  return relatedPosts;
}

/**
 * Get all tags with post counts
 */
export async function getAllTags(): Promise<TagData[]> {
  const posts = await getAllPosts();
  const tagMap = new Map<string, TagData>();

  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tagMap.has(tag.slug)) {
        const existing = tagMap.get(tag.slug)!;
        existing.postCount = (existing.postCount || 0) + 1;
      } else {
        tagMap.set(tag.slug, {
          ...tag,
          description: "",
          featured: ["infrastructure", "product", "design"].includes(tag.slug),
          postCount: 1,
        });
      }
    });
  });

  return Array.from(tagMap.values()).sort(
    (a, b) => (b.postCount || 0) - (a.postCount || 0)
  );
}

/**
 * Get tag by slug
 */
export async function getTagBySlug(slug: string): Promise<TagData | null> {
  const tags = await getAllTags();
  return tags.find((t) => t.slug === slug) || null;
}

/**
 * Get all authors with post counts
 */
export async function getAllAuthors(): Promise<AuthorData[]> {
  const posts = await getAllPosts();
  return [
    {
      ...defaultAuthor,
      postCount: posts.length,
    },
  ];
}

/**
 * Get author by slug
 */
export async function getAuthorBySlug(
  slug: string
): Promise<AuthorData | null> {
  const posts = await getAllPosts();
  if (slug === defaultAuthor.slug) {
    return {
      ...defaultAuthor,
      postCount: posts.length,
    };
  }
  return null;
}

/**
 * Search posts by title, excerpt, or body
 */
export async function searchPosts(
  query: string,
  limit: number = 10
): Promise<BlogPostMeta[]> {
  const posts = await getAllPosts();
  const lowerQuery = query.toLowerCase();

  return posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.title.toLowerCase().includes(lowerQuery))
    )
    .slice(0, limit);
}

// Re-export utility functions from blog-utils
export { calculateReadingTime, formatDate } from "./blog-utils";
