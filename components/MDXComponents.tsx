import TOCInline from 'pliny/ui/TOCInline'
import CollapsibleTOC from './CollapsibleTOC '
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'

export const components: MDXComponents = {
  Image,
  CollapsibleTOC,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
}
