import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.span>
        <div className="social">
          <a href="https://www.facebook.com/Rishi.holmes" target="_blank" rel="noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/rishi__pra/" target="_blank" rel="noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rishi-pramanik/" target="_blank" rel="noreferrer">
            <i className="devicon-linkedin-plain colored"></i>
          </a>
          <a href="https://github.com/rishipramanik/" target="_blank" rel="noreferrer">
            <i className="devicon-github-original"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
