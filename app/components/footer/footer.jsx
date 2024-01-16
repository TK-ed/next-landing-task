import { IoGameController } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-gray-100/2">
      <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <IoGameController size={20} />
          <span className="ml-3 text-xl text-orange-500">Zephyr</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
          © 2024 Zephyr —
          <a
            href="https://www.github.com/TK-ed"
            rel="noopener noreferrer"
            className="ml-1 text-gray-600"
            target="_blank"
          >
            @TK-ed
          </a>
        </p>
        <span className="inline-flex justify-center mt-4 space-x-3 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://www.github.com/TK-ed" target="_blank">
            <FaGithub size={23} />
          </a>
          <a href="https://www.linkedin.com/in/tharunkumarc/" target="_blank">
            <FaLinkedin size={23} />
          </a>
          <a href="https://www.instagram.com/gaming_geek_11" target="_blank">
            <FaInstagram size={23} />
          </a>
        </span>
      </div>
    </div>
  );
}
