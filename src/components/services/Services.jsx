import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiCss3,
  DiMysql,
  DiHtml5,
} from "react-icons/di";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Crafting</motion.b>{" "}
            intuitive, engaging
          </h1>
        </div>
        <div className="title">
          <h1>
            web experiences with{" "}
            <motion.b whileHover={{ color: "orange" }}>precision.</motion.b>
          </h1>
          {/* <button>WHAT WE DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{ color: "orange" }}>My Tech Stacks</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box">
          <div className="tech-icons">
            <DiReact />
          </div>
          <h2>React</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-nextjs-original-wordmark"></i>
          </div>
          <h2>NextJS</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-redux-original"></i>
          </div>
          <h2>Redux</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-typescript-plain"></i>
          </div>
          <h2>TypeScript</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <DiJavascript1 />
          </div>
          <h2>JavaScript</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-tailwindcss-plain"></i>
          </div>
          <h2>Tailwind CSS</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-materialui-plain"></i>
          </div>
          <h2>Material UI</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-sass-original"></i>
          </div>
          <h2>Sass</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <DiCss3 />
          </div>
          <h2>CSS3</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <DiHtml5 />
          </div>
          <h2>HTML5</h2>
        </motion.div>

        <motion.div className="box">
          <div className="tech-icons">
            <DiGit />
          </div>
          <h2>GIT</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-graphql-plain"></i>
          </div>
          <h2>GraphQL</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-postgresql-plain"></i>
          </div>
          <h2>PostGreSQL</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-mysql-plain"></i>
          </div>
          <h2>MySQL</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-microsoftsqlserver-plain"></i>
          </div>
          <h2>MSSql</h2>
        </motion.div>
        <motion.div className="box">
          <div className="tech-icons">
            <i className="devicon-vscode-plain"></i>
          </div>
          <h2>VSCode</h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
