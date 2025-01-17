import logo from "../assets/YeeswanthLogo.png";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaGithub} from "@react-icons/all-files/fa/FaGithub";
 
const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV1.pdf"; // Update this path to where your CV is located
    link.download = "Yeeswanth_CV.pdf";
    link.click();
  };
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <a 
    href="https://www.linkedin.com/in/yeeswanth2004/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin title="LinkedIn" />
    </a>
    <a 
    href="https://github.com/YEESWANTH2004" target="_blank" rel="noopener noreferrer">
    <FaGithub title="GitHub" />
    </a>
    <button
      onClick={handleDownload}
      className="bg-violet-500 text-black font-normal text-sm px-4 py-2 rounded-md"
    >
      Download CV
    </button>
    </div>
  </nav>
  
};

export default Navbar
