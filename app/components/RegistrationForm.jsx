import register from "..//../public/assets/images/register-society.jpg";
import Image from "next/image"
import Link from "next/link"

function RegistrationForm() {
    const styles = {
        paddingLeft: "50px",
        paddingTop: "50px"
    }

    return (
			<Link href="/register/society">
				<div style={styles}>
					<Image
						width={625}
						height={250}
						src={register}
						alt="Register society"
					/>
				</div>
			</Link>
		)
}

export default RegistrationForm