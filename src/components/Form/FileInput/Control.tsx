"use client"

import { ChangeEvent, ComponentProps, FC } from "react"

import { useFileInput } from "./Root"

interface ControlProps extends ComponentProps<"input"> {}

export const Control: FC<ControlProps> = ({ multiple = false, ...props }) => {
	const { id, onFilesSelected } = useFileInput()

	const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) {
			return
		}

		const files = Array.from(event.target.files)

		onFilesSelected(files, multiple)
	}

	return (
		<input type="file" className="sr-only" id={id} onChange={handleFilesSelected} multiple={multiple} {...props} />
	)
}
