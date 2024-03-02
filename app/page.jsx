import Header from "./components/Header"
import Banner from "./components/Banner"
import FeatureItem from "./components/FeatureItem"
import CallToAction from "./components/CallToAction"
import ClassesSection from "./components/ClassesSection"
import ScheduleSection from "./components/ScheduleSection"
import TrainersSection from "./components/TrainersSection"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import RegistrationForm from './components/RegistrationForm'
import Script from "next/script"
import "../public/assets/css/bootstrap.min.css"
import "../public/assets/css/font-awesome.css"
import "../public/assets/css/templatemo-training-studio.css" 

const Page = () => {
	return (
		<div>
			<Header />
			<Banner />
			<FeatureItem />
			<RegistrationForm />
			<CallToAction />
			<ClassesSection />
			{/* <ScheduleSection /> */}
			<TrainersSection />
			<ContactForm/>
			<Footer />
		</div>
	)
}

export default Page
