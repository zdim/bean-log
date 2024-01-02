import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'bean log',
	description: 'a database of beans',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="w-full flex min-h-screen flex-col items-center p-1">
					<header className="bg-gray-200 dark:bg-slate-800 p-4 w-full">
						<h1><Link href="/">bean log</Link></h1>
					</header>
					{children}
				</main>
			</body>
		</html>
	)
}
