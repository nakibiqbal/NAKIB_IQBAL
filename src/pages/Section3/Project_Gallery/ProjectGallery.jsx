import "./ProjectGallery.css"
const ProjectGallery = ({ list, modal }) => {
    const { active, index } = modal;

    return (
        <div className="galleryContainer" >

            <div style={{ top: index * -100 + "%" }} className="gallerySlider">

                {
                    list.map(({ img }, index) => {
                        return <div key={index} className="galleryImages" >
                            <img src={img} alt="PROJECT GALLERY" />
                        </div>
                    })
                }

            </div>

        </div>
    )
}

export default ProjectGallery
