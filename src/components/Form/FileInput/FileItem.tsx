import { FC } from "react"
import { tv, VariantProps } from "tailwind-variants"

import { CheckCircle2, Cloud, Trash2 } from "lucide-react"

import { formatBytes } from "@/utils/format-bytes"

import { Button } from "@/components/Buttons/Button"

const fileItem = tv({
	slots: {
		container: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
		icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
		deleteButton: "",
	},

	variants: {
		state: {
			progress: {
				container: "dark:border-zinc-700",
			},
			error: {
				container: "bg-error-25 border-error-300 dark:bg-error-500/5 dark:border-error-500/30",
				icon: "border-error-50 bg-error-100 text-error-600 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400",
				deleteButton: "text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300",
			},
			completed: {
				container: "border-violet-500 dark:border-violet-300/30",
			},
		},
	},

	defaultVariants: {
		state: "progress",
	},
})

interface FileItemProps extends VariantProps<typeof fileItem> {
	name: string
	size: number
}

export const FileItem: FC<FileItemProps> = ({ state, ...file }) => {
	const { container, icon, deleteButton } = fileItem({ state })

	return (
		<div className={container()}>
			<div className={icon()}>
				<Cloud className="h-4 w-4" />
			</div>

			{state === "error" ? (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-error-700 dark:text-error-400">
							Upload failed, please try again.
						</span>
						<span className="text-sm text-error-600 dark:text-error-500">{file.name}</span>
					</div>

					<button
						type="button"
						className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
					>
						Try again
					</button>
				</div>
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">{file.name}</span>
						<span className="text-sm text-zinc-500 dark:text-zinc-400">{formatBytes(file.size)}</span>
					</div>

					<div className="flex w-full items-center gap-3">
						<div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
							<div
								className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400"
								style={{ width: state === "completed" ? "100%" : "80%" }}
							/>
						</div>
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							{state === "completed" ? "100%" : "80%"}
						</span>
					</div>
				</div>
			)}

			{state === "completed" ? (
				<Button variant="ghost" type="button">
					<CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
				</Button>
			) : (
				<Button variant="ghost" type="button" className={deleteButton()}>
					<Trash2 className="h-5 w-5" />
				</Button>
			)}
		</div>
	)
}