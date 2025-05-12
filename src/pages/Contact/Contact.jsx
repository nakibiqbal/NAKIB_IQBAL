import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Import the custom CSS file
import MagnetButton from './MagnetButton';
import bg5 from "../../assets/bg5.png"

function Contact() {

    return (
        <section id="ContactSection">

            <h1>Let&apos;s connect.</h1>

            <div className="CLinks">


                <div className="mail">
                    <a href="mailto:nakibiqbal.2006@gmail.com">nakibiqbal.2006@gmail.com</a>
                </div>

                <div className="contactIcons">
                    <MagnetButton>
                        <a href="https://www.facebook.com/nakib.iqbal.98" target='_blink' ><FaFacebook /></a>
                    </MagnetButton>
                    <MagnetButton>
                        <a href="https://www.linkedin.com/in/nakib-iqbal/" target='_blink'><FaLinkedin /></a>
                    </MagnetButton>
                    <MagnetButton>
                        <a href="https://github.com/nakibiqbal" target='_blink'><FaGithub /></a>
                    </MagnetButton>
                </div>

            </div>

            <div className="islamicQuote">
                <p><b>&ldquo;And whoever fears Allah – He will make for him a way out and provide for him from where he does not expect.&rdquo;</b></p>
                <i>[Surah Al-Mu&apos;min, 40:60]</i>
            </div>

            <div
                className="background"
                style={{
                    backgroundImage: `url(${bg5})`, // Import the background image
                }}
            />

        </section>
    );
}


export default Contact;
