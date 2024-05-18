import { FC } from "react"

import { LogOut } from "lucide-react"

import { Button } from "../Buttons/Button"

export const Profile: FC = () => {
	return (
		<div className="grid grid-cols-profile items-center gap-3">
			<img src="https://github.com/pdrolucasz.png" className="h-10 w-10 rounded-full" alt="" />
			<div className="flex flex-col truncate">
				<span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">Pedro Lucas</span>
				<span className="truncate text-sm text-zinc-500 dark:text-zinc-400">pedro.lucas4431@gmail.com</span>
			</div>
			<Button variant="ghost" type="button">
				<LogOut className="h-5 w-5 text-zinc-500" />
			</Button>
		</div>
	)
}
