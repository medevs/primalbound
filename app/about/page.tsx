import { Authors, allAuthors } from 'contentlayer/generated'
// import { MDXLayoutRenderer } from 'pliny/mdx-components'
// import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  // const author = allAuthors.find((p) => p.slug === 'default') as Authors
  // const mainContent = coreContent(author)

  const topics = [
    {
      title: 'Purpose',
      description: 'Explore the meaning and significance of purpose in modern life.',
      imageUrl: '/images/purpose.jpg',
      link: '/tags/purpose',
    },
    {
      title: 'Family',
      description: 'Discover the importance of family and its role in our lives.',
      imageUrl: '/images/family.jpg',
      link: '/tags/family',
    },
    {
      title: 'Relationships',
      description: 'Navigate the complexities of human relationships and connections.',
      imageUrl: '/images/relationships.jpg',
      link: '/tags/relationships',
    },
    {
      title: 'Well-being',
      description: 'Prioritize your well-being and learn how to live a balanced life.',
      imageUrl: '/images/well-being.jpg',
      link: '/tags/well-being',
    },
  ]

  const authors = [
    {
      name: 'Ahmed Amanar',
      bio: 'Founder & Writer',
      imageUrl: '/static/images/avatar.jpg',
    },
    {
      name: 'Marina Garcia',
      bio: 'Contributor & Writer',
      imageUrl: '/static/images/avatar.jpg',
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">About Primal Bound</h1>

        <p className="text-center">
          Primal Bound takes you on a transformative journey, delving into the intricacies of modern
          life while reconnecting with the timeless wisdom of our primal past. We are more than just
          a blog; we are a movement dedicated to empowering the young generation with knowledge,
          inspiration, and practical guidance to navigate the complexities of contemporary life and
          unleash their true potential.
        </p>

        <p className="text-center mt-4">
          Join us as we delve into the depths of purpose, family, relationships, and well-being,
          uncovering the primal instincts that guide us. Through captivating articles, interactive
          discussions, and practical insights, Primal Bound seeks to inspire and ignite the fire
          within. Together, let's embrace our primal nature and create a community that fosters
          fulfillment, authenticity, and growth.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Explore Our Topics</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <Link href={topic.link}>
                  <Image
                    src={topic.imageUrl}
                    alt={topic.title}
                    width={400}
                    height={200}
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{topic.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Authors</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {authors.map((author, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="p-4">
                  <Image
                    src={author.imageUrl}
                    alt={author.name}
                    width={128}
                    height={128}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{author.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
