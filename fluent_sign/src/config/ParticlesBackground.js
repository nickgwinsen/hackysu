
import Particles from "react-tsparticles";

const ParticleBackround = () => {


    return(
    
        <div className ="LandingBackround">
        <Particles
        options={{
            background: {
                color: "",
            },
            fpsLimit: 60,
            interactivity: {
                detectsOn: "canvas",
                events: {
                    resize: true
                },
            },
            particles: {
                color: {
                    value: "#289DFF"
                },
                number: {
                    density:{
                        enable: true,
                        area: 1080
                    },
                    limit: 0,
                    value: 400,
                },
                opacity: {
                    anitmation: {
                        enable: true,
                        minmiumValue: 0.05,
                        speed: 1,
                        sync: false,
            
                    },
                    random: {
                        enable: true,
                        minimumValue: 0.05,
                    },
                    value: 1
                },
                shape: {
                    type: "circle",
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 0.5,
                    },
                    value: 1,
                },

            },  
        }}/>
        </div>
    )}
export default ParticleBackround;