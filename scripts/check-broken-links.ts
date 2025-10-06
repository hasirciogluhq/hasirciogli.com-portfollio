import fs from 'fs'
import path from 'path'

/**
 * Broken Links Checker
 * 
 * This script finds all href/link references in the codebase and checks
 * if the corresponding pages exist.
 */

interface LinkReference {
  file: string
  line: number
  href: string
  context: string
}

interface CheckResult {
  broken: LinkReference[]
  valid: LinkReference[]
  external: LinkReference[]
}

// Define existing pages
const existingPages = new Set([
  '/',
  '/about',
  '/projects',
  '/contact',
  '/case-studies',
  '/blog',
  '/blog/tags',
  '/mustafa-hasircioglu-kimdir',
  // Dynamic routes (patterns)
  '/blog/[slug]',
  '/blog/tag/[slug]',
  '/blog/author/[slug]',
])

// Directories to search
const searchDirs = [
  'src/components',
  'src/app',
  'content/posts',
]

// File extensions to check
const fileExtensions = ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md']

// External domains (don't check these)
const externalDomains = [
  'http://',
  'https://',
  'mailto:',
  'tel:',
]

function isExternalLink(href: string): boolean {
  return externalDomains.some(domain => href.startsWith(domain))
}

function isAssetFile(href: string): boolean {
  const assetExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.pdf', '.mp4', '.webm']
  return assetExtensions.some(ext => href.toLowerCase().endsWith(ext))
}

function isValidPage(href: string): boolean {
  // Remove query params and hash
  const cleanHref = href.split('?')[0].split('#')[0]
  
  // Check exact match
  if (existingPages.has(cleanHref)) {
    return true
  }
  
  // Check dynamic routes
  if (cleanHref.startsWith('/blog/') && !cleanHref.startsWith('/blog/tag/') && !cleanHref.startsWith('/blog/author/')) {
    return true // Blog post
  }
  
  if (cleanHref.startsWith('/blog/tag/')) {
    return true // Tag page
  }
  
  if (cleanHref.startsWith('/blog/author/')) {
    return true // Author page
  }
  
  return false
}

function extractHrefs(filePath: string, content: string): LinkReference[] {
  const links: LinkReference[] = []
  const lines = content.split('\n')
  
  // Regex patterns for different href formats
  const patterns = [
    /href=["']([^"']+)["']/g,           // href="..."
    /to=["']([^"']+)["']/g,             // to="..." (for Link components)
    /\[.*?\]\(([^)]+)\)/g,              // [text](url) (markdown links)
  ]
  
  lines.forEach((line, index) => {
    patterns.forEach(pattern => {
      let match
      while ((match = pattern.exec(line)) !== null) {
        const href = match[1]
        
        // Skip if empty or just a hash
        if (!href || href === '#' || href.startsWith('#')) {
          continue
        }
        
        links.push({
          file: filePath,
          line: index + 1,
          href,
          context: line.trim().substring(0, 100)
        })
      }
    })
  })
  
  return links
}

function scanDirectory(dir: string, results: LinkReference[] = []): LinkReference[] {
  const fullPath = path.join(process.cwd(), dir)
  
  if (!fs.existsSync(fullPath)) {
    return results
  }
  
  const items = fs.readdirSync(fullPath)
  
  items.forEach(item => {
    const itemPath = path.join(fullPath, item)
    const relativePath = path.relative(process.cwd(), itemPath)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (item !== 'node_modules' && item !== '.next' && item !== 'dist') {
        scanDirectory(relativePath, results)
      }
    } else if (stat.isFile()) {
      // Check if file extension matches
      if (fileExtensions.some(ext => item.endsWith(ext))) {
        const content = fs.readFileSync(itemPath, 'utf-8')
        const links = extractHrefs(relativePath, content)
        results.push(...links)
      }
    }
  })
  
  return results
}

function checkLinks(): CheckResult {
  const result: CheckResult = {
    broken: [],
    valid: [],
    external: []
  }
  
  // Scan all directories
  const allLinks: LinkReference[] = []
  searchDirs.forEach(dir => {
    scanDirectory(dir, allLinks)
  })
  
  // Categorize links
  allLinks.forEach(link => {
    if (isExternalLink(link.href)) {
      result.external.push(link)
    } else if (isAssetFile(link.href)) {
      // Skip asset files (images, videos, etc.)
      result.valid.push(link)
    } else if (isValidPage(link.href)) {
      result.valid.push(link)
    } else {
      result.broken.push(link)
    }
  })
  
  return result
}

// Run the check
console.log('🔍 Checking for broken links...\n')

const result = checkLinks()

console.log(`✅ Valid internal links: ${result.valid.length}`)
console.log(`🌐 External links: ${result.external.length}`)
console.log(`❌ Broken links: ${result.broken.length}`)

if (result.broken.length > 0) {
  console.log('\n❌ BROKEN LINKS FOUND:\n')
  
  // Group by href
  const groupedBroken = new Map<string, LinkReference[]>()
  result.broken.forEach(link => {
    if (!groupedBroken.has(link.href)) {
      groupedBroken.set(link.href, [])
    }
    groupedBroken.get(link.href)!.push(link)
  })
  
  groupedBroken.forEach((links, href) => {
    console.log(`\n🔗 ${href}`)
    console.log(`   Found in ${links.length} location(s):`)
    links.forEach(link => {
      console.log(`   - ${link.file}:${link.line}`)
    })
  })
  
  console.log('\n')
  process.exit(1)
} else {
  console.log('\n✨ No broken links found!')
  process.exit(0)
}

