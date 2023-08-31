'use client'

import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { HiOutlineClock } from 'react-icons/hi'
import readingTime from 'reading-time'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
} from 'react-share'
import { SocialIcon } from 'react-social-icons'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { readingTime, filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex justify-center gap-5 py-4">
                <time dateTime={date}>
                  {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                </time>
                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="h-5 w-5" />
                  {readingTime.text}
                </span>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                {/* <Link href="https://twitter.com/Primalbound" rel="nofollow">
                  Discuss on Twitter
                </Link> */}
                {/* {` • `} */}
                {/* <Link href={editUrl(filePath)}>View on GitHub</Link> */}
                <span className="center">share on:</span>
                <div className="grid place-items-center pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center space-x-4">
                    <TwitterShareButton
                      url={postUrl}
                      title={title}
                      via={siteMetadata.socialAccount.twitter}
                      className="flex items-center overflow-hidden rounded-full !bg-[#1da1f2] hover:scale-110"
                    >
                      <SocialIcon
                        network="twitter"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#1da1f2"
                      />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={postUrl}
                      quote={title}
                      className="flex items-center overflow-hidden rounded-full !bg-[#1877f2] hover:scale-110"
                    >
                      <SocialIcon
                        network="facebook"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#1877f2"
                      />
                    </FacebookShareButton>
                    <EmailShareButton
                      body={'Check out this blog'}
                      subject={title}
                      separator=" : "
                      url={postUrl}
                      className="flex items-center overflow-hidden rounded-full !bg-[#B61AC1] hover:scale-110"
                    >
                      <SocialIcon
                        network="email"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#B61AC1"
                      />
                    </EmailShareButton>
                    <LinkedinShareButton
                      summary={'Check out this blog'}
                      title={title}
                      source={siteMetadata.siteUrl}
                      url={postUrl}
                      className="flex items-center overflow-hidden rounded-full !bg-[#0072b1] hover:scale-110"
                    >
                      <SocialIcon
                        network="linkedin"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#0072b1"
                      />
                    </LinkedinShareButton>
                    <RedditShareButton
                      title={title}
                      url={postUrl}
                      className="flex items-center overflow-hidden rounded-full !bg-[#ff4500] hover:scale-110"
                    >
                      <SocialIcon
                        network="reddit"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#ff4500"
                      />
                    </RedditShareButton>
                    <WhatsappShareButton
                      title={title}
                      separator={' : '}
                      url={postUrl}
                      className="flex items-center overflow-hidden rounded-full !bg-[#25D366] hover:scale-110"
                    >
                      <SocialIcon
                        network="whatsapp"
                        style={{ height: 35, width: 35 }}
                        fgColor="#fff"
                        bgColor="#25D366"
                      />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
              {/* {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )} */}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the blog"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
