import { Button, Box, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import MenuIcon from "../../assets/img/static/menuIcon.png"
import PurpleComponentMobile from "../../assets/img/static/purpleComponentMobile.png"
import PurpleComponentDesktop from "../../assets/img/static/purpleComponentDesktop.png"
import MedicalComponentMobile from "../../assets/img/static/medicalComponentMobile.png"
import MedicalComponentDesktop from "../../assets/img/static/medicalComponentDesktop.png"
import Logo from "../../assets/img/static/logo.png"
import HeartIcon from "../../assets/img/static/heartIcon.png"
import BrainIcon from "../../assets/img/static/brainIcon.png"
import BoneIcon from "../../assets/img/static/boneIcon.png"
import ToothIcon from "../../assets/img/static/toothIcon.png"
import ClinicIcon from "../../assets/img/static/clinicIcon.png"
import Share from "../../assets/img/static/share.png"
import FeedbackImage from "../../assets/img/static/influencerImg.png"
import ChairIcon from "../../assets/img/static/chairIcon.png"
import MascIcon from "../../assets/img/static/mascIcon.png"
import BandAidIcon from "../../assets/img/static/bandAidIcon.png"
import NurseIcon from "../../assets/img/static/nurseIcon.png"
import Footer from "../../components/Footer/Footer"
import SpecializationCard from "../../components/SpecializationCard/SpacializationCard"
import "./styles.css"

function Home() {

    const navigate = useNavigate()

    return (

        <>
            <div className="home-page">
                <nav>
                    <div className="home-logo-container">
                        <img src={Logo} alt=""
                        />
                    </div>

                    <div className="home-login-container">
                        <Button
                            onClick={() => navigate("/login")}
                            width={{ sm: "115px", md: "120px" }}
                            height="38px"
                            borderRadius="36px"
                            zIndex="2"
                            background="rgba(205, 206, 243, 1)"
                            color="rgba(158, 99, 255, 1)"
                            borderColor="rgba(95, 0, 189, 0.94) rgba(77, 0, 154, 0)"
                            border="1px"
                            cursor="pointer"
                            _hover={{ background: "rgba(205, 206, 243, 1)" }}

                        >
                            LOGIN
                        </Button>

                        <img src={MenuIcon} alt="" />
                    </div>

                    <div className="home-login-container-desktop">
                        <p>Home</p>
                        <p>M??dicos</p>
                        <p>Servi??os</p>

                        <Button
                            onClick={() => navigate('/login')}
                            width={{ sm: "115px", md: "120px" }}
                            height="38px"
                            borderRadius="36px"
                            background="rgba(205, 206, 243, 1)"
                            color="rgba(158, 99, 255, 1)"
                            borderColor="rgba(95, 0, 189, 0.94)
                            rgba(77, 0, 154, 0)"
                            border="1px"
                            cursor="pointer"
                            _hover={{ background: "rgba(205, 206, 243, 1)" }}
                        >
                            LOGIN
                        </Button>
                    </div>
                </nav >

                <div className="home-components-container">
                    <Box
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur={{ sm: "120px", lg: "80px" }}
                        position="absolute"
                        zIndex={1}
                        width={{ sm: "200px", lg: "450px" }}
                        height={{ sm: "200px", lg: "400px" }}
                        top="-20px"
                        right={{ sm: "50px", lg: "200px", xl: "240px" }}
                        borderRadius="500px"
                    />

                    <div className="home-purple-component-mobile">
                        <img src={PurpleComponentMobile} alt="" />
                    </div>

                    <div className="home-purple-component-desktop">
                        <img src={PurpleComponentDesktop} alt="" />
                    </div>

                    <div className="home-frase-container">
                        <p>N??s acreditamos na</p>
                        <h1>PREVEN????O</h1>
                        <span>voc?? tamb??m?</span>
                    </div>

                    <div className="home-medical-component-mobile">
                        <img src={MedicalComponentMobile} alt="" />
                    </div>

                    <div className="home-medical-component-desktop">
                        <img src={MedicalComponentDesktop} alt="" />
                    </div>

                    <Box
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur='80px'
                        position="relative"
                        zIndex={1}
                        width={{ sm: "165px", md: "300px", lg: "400px" }}
                        height={{ sm: "400px", md: "500px" }}
                        bottom={{ sm: "-300px", md: "-570px", lg: "700px" }}
                        transform=" rotate(44.29deg)"
                        borderRadius="500px"
                    />

                    <Box
                        boxSize='250px'
                        background="rgba(194, 157, 255, 0.6)"
                        filter='auto'
                        blur={{ sm: "50px", lg: "80px" }}
                        position="relative"
                        zIndex={-0.5}
                        width={{ sm: "250px", md: "300px", lg: "300px" }}
                        height={{ sm: "400px", md: "470px", lg: "1000px" }}
                        bottom={{ sm: "-170px", md: "-650px", lg: "1260px" }}
                        left={{ sm: "300px", lg: "640px", xl: "1000px" }}
                        transform={{ sm: "rotate(44.29deg)", lg: "rotate(-135.79deg)" }}
                        borderRadius={{ sm: "0", lg: "100px" }}
                    />

                    <Box
                        boxSize='250px'
                        background="rgba(255, 240, 210, 1)"
                        filter='auto'
                        blur='80px'
                        position="relative"
                        zIndex={1}
                        width={{ sm: "170px", md: "300px", lg: "500px" }}
                        height={{ sm: "400px", md: "500px" }}
                        bottom={{ sm: "-170px", md: "-400px", lg: "1250px" }}
                        borderRadius={{ sm: "500px", lg: "200px" }}
                    />

                    <Box
                        display={{ sm: "none", lg: "flex" }}
                        boxSize='250px'
                        background="rgba(173, 230, 255, 1)"
                        filter='auto'
                        blur={{ lg: "80px", xl: "100px" }}
                        position="absolute"
                        zIndex={-0.5}
                        width={{ lg: "200px" }}
                        height={{ lg: "400px" }}
                        bottom={{ lg: "-400px", xl: "-700px" }}
                        right={{ lg: "0px" }}
                        borderRadius="500px"
                    />



                </div>

                <div className="home-schedule-button">

                    <button>
                        AGENDE SUA CONSULTA
                    </button>

                </div>

                <div className="home-text-container">
                    <h2>
                        Algumas de nossas funcinalidades
                    </h2>

                </div>

                <div className="home-specialization-card">

                    <SpecializationCard
                        title="Cardiologia"
                        text="?? a especialidade m??dica que se dedica ao estudo e tratamento do cora????o e dos vasos sangu??neos."
                        src={HeartIcon}
                    />
                </div>

                <div className="home-specialization-card-desktop">
                    <SpecializationCard
                        title="Cardiologia"
                        text="?? a especialidade m??dica que se dedica ao estudo e tratamento do cora????o e dos vasos sangu??neos."
                        src={HeartIcon}
                    />
                    <SpecializationCard
                        style={{ color: "rgba(76, 169, 255, 0.8)" }}
                        title="Neorologia"
                        text="Neurologia
                    Especialidade m??dica que se dedica ao estudo e tratamento do sistema nervoso, incluindo o c??rebro, medula espinhal e nervos perif??ricos."
                        src={BrainIcon}
                    />
                    <SpecializationCard
                        title="Ortopedia"
                        text="Especialidade m??dica que se dedica ao tratamento de les??es e doen??as dos ossos, m??sculos e articula????es."
                        src={BoneIcon}
                    />
                    <SpecializationCard
                        style={{ color: "rgba(76, 169, 255, 0.7)" }}
                        title="Odonotologia"
                        text="Especialidade m??dica que se dedica ao estudo, diagn??stico, preven????o e tratamento de doen??as e problemas dentais."
                        src={ToothIcon}
                    />
                    <SpecializationCard
                        title="Cl??nica Geral"
                        text="Especialidade m??dica que fornece aten????o b??sica e prim??ria ?? sa??de."
                        src={ClinicIcon}
                    />
                </div>


                <div className="home-share">
                    <img src={Share} alt="" />
                </div>

                <div className="home-information-card">
                    <div className="home-information-card-container">

                        <Image src={ChairIcon}
                            width="100px"
                            position="absolute"
                            right={{ sm: "-5px", lg: "450px", xl: "550px" }}
                            zIndex="1"
                            top={{ sm: "-45px", lg: "-20px", xl: "4" }}
                        />

                        <Image src={MascIcon}
                            width="100px"
                            position="absolute"
                            left={{ sm: "0", lg: "-460px" }}
                            top={{ sm: "80px", lg: "230px" }}
                            zIndex="2"
                        />

                        <div className="home-information-card-img"> </div>
                        <div className="home-information-card-img-desktop"></div>

                        <p>A ProMed ?? uma cl??nica m??dica criada por um jovem m??dico, filho de uma fam??lia com uma tradi????o na medicina. Com o objetivo de oferecer atendimento m??dico de alta qualidade e personalizado, ele reuniu uma equipe de m??dicos especialistas. A cl??nica rapidamente se estabeleceu como uma das melhores na regi??o, oferecendo solu????es personalizadas para cada paciente. A ProMed ?? uma extens??o da tradi????o familiar de cuidar da sa??de das pessoas.</p>

                        <span>A ProMed nasceu de uma paix??o e dedica????o de gera????es. A fam??lia por tr??s da cl??nica sempre teve uma tradi????o de cuidar da sa??de e bem-estar das pessoas. Desde a av?? que era parteira at?? o pai que era m??dico cl??nico geral, a dedica????o ?? medicina corria nas veias da fam??lia.
                            <br />
                            <br />
                            Mas foi somente quando o jovem m??dico, filho da tradi????o familiar, decidiu abrir sua pr??pria cl??nica que a ProMed foi fundada. Com um sonho de oferecer um atendimento m??dico de alta qualidade e personalizado para cada paciente, ele reuniu uma equipe de m??dicos dedicados e especialistas em diversas ??reas da medicina.
                            <br />
                            <br />

                            E assim, a ProMed foi criada, com o objetivo de continuar a tradi????o familiar de cuidar da sa??de das pessoas. Com um toque pessoal e uma equipe de m??dicos altamente capacitados, a cl??nica rapidamente se estabeleceu como uma das melhores na regi??o, oferecendo atendimento de qualidade e solu????es personalizadas para cada paciente.
                            <br />
                            <br />
                            A ProMed ?? mais do que uma cl??nica m??dica, ?? uma extens??o da tradi????o familiar de cuidar da sa??de e bem-estar das pessoas.</span>
                    </div>
                </div>
                <div className="home-feedback">

                    <h3>Feedback dos nossos pacientes</h3>
                    <div className="home-feedback-includes">
                        <div className="home-feedback-container">

                            <h4>Ana Clara B. Moniz</h4>

                            <Image src={BandAidIcon}
                                width={{ sm: "70px", md: "80px", lg: "100px" }}
                                position="absolute"
                                bottom={{ sm: "135px", md: "170px" }}
                                right={{ sm: "-5px", lg: "-50px" }}
                                zIndex="2"
                            />

                            <Image src={NurseIcon}
                                width={{ sm: "70px", md: "80px", lg: "90px" }}
                                position="absolute"
                                bottom="-50px"
                                left={{ sm: "-20px", lg: "-20px" }}
                                zIndex="2"
                            />

                            <div className="home-feedback-card">
                                <p>
                                    ???Frequentei a cl??nica ProMed e posso dizer que foi uma experi??ncia incr??vel. Desde o atendimento na recep????o at?? o atendimento m??dico, tudo foi perfeito. A m??dica que me atendeu, foi muito profissional e atenciosa. Ela me deu todas as informa????es que eu precisava e me fez sentir em seguran??a durante todo o processo. A cl??nica possui equipamentos modernos e tecnologia avan??ada, o que tornou meu tratamento ainda mais eficaz.???
                                </p>

                                <img src={FeedbackImage} alt="" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="home-footer">
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Home;