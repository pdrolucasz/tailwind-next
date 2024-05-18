"use client"

import { ComponentProps, FC, createContext, useContext, useId, useState } from "react"

interface RootProps extends ComponentProps<"div"> {}

type FileInputContextProps = {
	id: string
	files: File[]
	onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextProps)

export const Root: FC<RootProps> = (props) => {
	const id = useId()

	const [files, setFiles] = useState<File[]>([])

	const onFilesSelected = (files: File[], multiple: boolean) => {
		if (multiple) {
			setFiles((state) => [...state, ...files])
		} else {
			setFiles(files)
		}
	}

	return (
		<FileInputContext.Provider value={{ id, files, onFilesSelected }}>
			<div {...props} />
		</FileInputContext.Provider>
	)
}

export const useFileInput = () => useContext(FileInputContext)
