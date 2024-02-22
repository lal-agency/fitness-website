import React from "react"
import Image from "next/image"
import "../../public/assets/css/bootstrap.min.css"
import "../../public/assets/css/font-awesome.css"
import "../../public/assets/css/templatemo-training-studio.css" 
const TrainersSection = () => {
    return (
        <section
            className="section"
            id="trainers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>
                                Expert <em>Trainers</em>
                            </h2>
                            <Image
                                src="/assets/images/line-dec.png"
                                alt=""
                                width={50}
                                height={25}
                            />
                            <p>
                                Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed
                                viverra ipsum dolor, ultricies fermentum massa consequat eu.
                            </p>
                        </div>
                        </div>
                        <div className="row">
                            {/* Trainer 1 */}
                            <div className="col-lg-4">
                                <div className="trainer-item">
                                    <div className="image-thumb">
                                        <Image
                                            src="/assets/images/first-trainer.jpg"
                                            alt=""
                                            width={250} // Set appropriate width for the image
                                            height={200} // Set appropriate height for the image
                                        />
                                    </div>
                                    <div className="down-content">
                                        <span>Strength Trainer</span>
                                        <h4>Bret D. Bowers</h4>
                                        <p>
                                            Bitters cliche tattooed 8-bit distillery mustache. Keytar
                                            succulents gluten-free vegan church-key pour-over seitan
                                            flannel.
                                        </p>
                                        <ul className="social-icons">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-behance"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Trainer 2 */}
                            <div className="col-lg-4">
                                <div className="trainer-item">
                                    <div className="image-thumb">
                                        <Image
                                            src="/assets/images/second-trainer.jpg"
                                            alt=""
                                            width={250} // Set appropriate width for the image
                                            height={200} // Set appropriate height for the image
                                        />
                                    </div>
                                    <div className="down-content">
                                        <span>Muscle Trainer</span>
                                        <h4>Hector T. Daigl</h4>
                                        <p>
                                            Bitters cliche tattooed 8-bit distillery mustache. Keytar
                                            succulents gluten-free vegan church-key pour-over seitan
                                            flannel.
                                        </p>
                                        <ul className="social-icons">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-behance"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Trainer 3 */}
                            <div className="col-lg-4">
                                <div className="trainer-item">
                            <div className="image-thumb">
                                <Image
                                    src="/assets/images/third-trainer.jpg"
                                    alt=""
                                    width={250} // Set appropriate width for the image
                                    height={200} // Set appropriate height for the image
                                />
                            </div>
                            <div className="down-content">
                                <span>Power Trainer</span>
                                <h4>Paul D. Newman</h4>
                                <p>
                                    Bitters cliche tattooed 8-bit distillery mustache. Keytar
                                    succulents gluten-free vegan church-key pour-over seitan
                                    flannel.
                                </p>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-behance"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </section>
    )
}

export default TrainersSection
