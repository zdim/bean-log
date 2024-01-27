"use client"

import { useUser } from "@auth0/nextjs-auth0/client"
import Link from "next/link"
import { Login } from "./login";
import { Logout } from "./logout";

export const Header = () => {
	const { user, isLoading } = useUser();
	return (
		<header className="bg-gray-200 dark:bg-slate-800 p-4 w-full flex justify-between">
			<h1><Link href="/">bean log</Link></h1>
			{isLoading ? "..." : user ? <Logout /> : <Login />}
		</header>
	)
}
