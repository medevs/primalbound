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
        <h1 className="text-2xl font-semibold mb-8">What is Primal Bound?</h1>

        <p>
          In Primal Bound we want to take you on a transformative journey to reconnect with your
          true self . Within each of us, there is a life purpose willing to be followed. In this
          blog, we want to provide inspiration and practical guidance so that you rediscover your
          unique life purpose. As we mentioned, this is a transformative blog for those who are
          ready to endure a transformative journey.
        </p>
        <p>
          By reading our posts, you will understand the power of letting go. There, you will find
          inspiration and practical guidance to unleash your true potential and master your life
          authentically.
        </p>

        <h1 className="text-2xl font-semibold my-8">How can Primal Bound help you?</h1>

        <p className="mt-4">
          Our blog posts will hopefully help you rethink your life purpose, your family, and
          relationship standards linked to your emotional past. We believe that, by understanding
          the origin of our limitations, we will have control over your thoughts and you will create
          a reality that resonates with you. Follow our most recent articles, interactive
          discussions, and practical insights, and embrace your primal nature on your way to
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
