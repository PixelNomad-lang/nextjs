import Link from "next/link"
import path from "path";
import { FaGithub, FaLinkedin, FaInstagram, FaExternalLinkAlt ,FaMailchimp} from "react-icons/fa";


const socials = [
  { icons: <FaGithub />, path: 'https://github.com/PixelNomad-lang' },
  { icons: <FaLinkedin />, path: 'https://www.linkedin.com/in/adarsh-shukla-55825b256/' },
  { icons: <FaInstagram />, path: 'https://www.instagram.com/yourprofile/' }, // Replace with your Instagram URL
  { icons: <FaMailchimp />, path: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTghsDHRqHfllvjrFkjxKHjWKWtxCJhPrQMTmplgnspZqwkLfZGClNqwPrZLcntbSzjTdM' }, // Replace with your WhatsApp URL
  { icons: <FaExternalLinkAlt />, path: 'https://adarshshuklavbspu.netlify.app/' } // Added your custom URL
];
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social,index) => {
        return (
        <Link key={index} href={social.path} className={iconStyles}>
          {social.icons}
        </Link>
        );
})}
    </div>
  )
}

export default Socials
