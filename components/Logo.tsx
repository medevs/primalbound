'use client';

import Link, { LinkProps as NextLinkProps } from 'next/link';
import { motion } from 'framer-motion';

interface LogoProps extends NextLinkProps {
	className?: string
}

export default function Logo(props: LogoProps) {
	return (
		<Link aria-label="Primal Bound" href="/">
			<motion.svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 800 600"
				className="text-black dark:text-white h-[50px] md:h-[52px] my-6"
			>
				<motion.g transform="translate(400, 300)">
					<motion.circle
						cx="0"
						cy="-30"
						r="260"
						stroke="#FFA500"
						strokeWidth="10"
						fill="none"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1 }}
					/>
					<motion.text
						x="-110"
						y="0"
						fill="currentColor"
						fontSize="360"
						fontWeight="bold"
						// fontFamily="Bungee, cursive"
						textAnchor="middle"
						dominantBaseline="middle"
						initial={{ opacity: 0, x: -300 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						P
					</motion.text>
					<motion.text
						x="110"
						y="0"
						fill="currentColor"
						fontSize="360"
						fontWeight="bold"
						// fontFamily="Bungee, cursive"
						textAnchor="middle"
						dominantBaseline="middle"
						initial={{ opacity: 0, x: 300 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1 }}
					>
						B
					</motion.text>
				</motion.g>
			</motion.svg>
		</Link>
	)
}