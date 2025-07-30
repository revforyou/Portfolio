import { FaLinkedin, FaGithub, FaInstagram, FaDownload } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-scroll";

const NavBar = () => {
  const sections = ["home", "technologies", "experience", "projects", "education"];

  return (
    <nav className="mb-20 flex flex-wrap items-center justify-between py-6">
      {/* Left: Name or Logo */}
      <div className="flex items-center">
        <h1 className="mx-2 text-[28px] font-semibold">RJ</h1>
      </div>

      {/* Center: Section Links */}
      <div className="hidden md:flex gap-6 text-xl font-medium">
        {sections.map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="cursor-pointer hover:text-purple-400 transition-colors"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/revanth-jyothula-3822601b5/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="hover:text-[#0A66C2]"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/revforyou"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="hover:text-white"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/revanth.jyothula/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="hover:text-[#E4405F]"
        >
          <FaInstagram />
        </a>

        <a
          href="https://leetcode.com/u/revforyou/"
          target="_blank"
          rel="noopener noreferrer"
          title="LeetCode"
          className="hover:text-[#FFA116]"
        >
          <SiLeetcode />
        </a>

        <a
          href="/RevanthResume.pdf"
          download="RevanthResume.pdf"
          title="Download Resume"
          className="flex items-center gap-1 hover:text-blue-400 text-base"
        >
          <FaDownload />
          <span className="text-xl">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
