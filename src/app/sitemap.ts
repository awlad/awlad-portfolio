import type { MetadataRoute } from 'next'
import { profile } from '../data/resume'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.website, changeFrequency: 'monthly', priority: 1 },
    { url: `${profile.website}/resume`, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
