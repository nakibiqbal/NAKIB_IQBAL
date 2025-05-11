import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // Import the custom CSS file
import MagnetButton from './MagnetButton';

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
                        <FaFacebook />
                    </MagnetButton>
                    <MagnetButton>
                        <FaLinkedin />
                    </MagnetButton>
                    <MagnetButton>
                        <FaTwitter />
                    </MagnetButton>
                    <MagnetButton>
                        <FaGithub />
                    </MagnetButton>
                </div>

            </div>

            <div className="islamicQuote">
                <p><b>&ldquo;And whoever fears Allah – He will make for him a way out and provide for him from where he does not expect.&rdquo;</b></p>
                <i>[Surah Al-Mu&apos;min, 40:60]</i>
            </div>

            <div className="background"></div>
            <div className="background x2"></div>

        </section>
    );
}


export default Contact;
