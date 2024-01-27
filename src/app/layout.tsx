import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Header } from '@/components/header'

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
				<UserProvider>
					<main className="w-full flex min-h-screen flex-col items-center p-1">
						<Header />
						{children}
					</main>
				</UserProvider>
			</body>
		</html >
	)
}
