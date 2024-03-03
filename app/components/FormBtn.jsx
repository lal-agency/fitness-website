import React from 'react'
import { IoIosArrowBack } from "react-icons/io"

function FormBtn() {
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