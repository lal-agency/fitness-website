import Header from "./components/Header"
import Banner from "./components/Banner"
import FeatureItem from "./components/FeatureItem"
import CallToAction from "./components/CallToAction"
import ClassesSection from "./components/ClassesSection"
import ScheduleSection from "./components/ScheduleSection"
import TrainersSection from "./components/TrainersSection"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"

const Page = () => {
	return (
		<div>
			<Header />
			<Banner />
			<FeatureItem/>
			<CallToAction />
			<ClassesSection />
			<ScheduleSection />
			<TrainersSection />
			<ContactForm />
			<Footer />
		</div>
	)
}

export default Page