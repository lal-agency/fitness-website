import React from 'react'
import { IoIosArrowBack } from "react-icons/io"
import { useRouter } from "next/navigation"

function FormBtn() {
const router = useRouter()
const handleRedirect = () => {
	router.push("/")
}
  return (
		<div>
			<div
				className="btn"
				onClick={handleRedirect}>
				<IoIosArrowBack />
				MOVE BACK
			</div>
		</div>
	)
}

export default FormBtn