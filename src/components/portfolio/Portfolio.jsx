import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "/React_Commerce.png",
    desc: `An online responsive full stack clothing e-commerce app built on React, Redux and styled-components.
    This Web App uses user authentication and the product data stored in firebase,
    The Payment integration is done with Stripe.`,
    href: "https://courageous-truffle-a71f3a.netlify.app/"
  },
  {
    id: 2,
    title: "Next.js Food App",
    img: "/Food_App.png",
    desc: `An online responsive full stack food ordering app built on NextJs, ReactJs, Tailwind CSS and TypeScript.
    This Web App uses user authentication built in auth.js, lets you navigate to categories and product lists,
    Add/update multiple items to cart and checkout.
    The Payment integration is done with Stripe and the data gets stored in PostgreSQL using Prisma.`,
    href: "https://github.com/rishipramanik/the-food-app"
  },
  {
    id: 3,
    title: "React-Native Fav Places App",
    img: "/fav-places.png",
    desc: `A Cross Platform Mobile App Build using React Native which uses React Navigation to navigation among multiple screens.
    This App lets you save and store your favorite places using your camera and Google Maps in phone storage.`,
    href: "https://github.com/rishipramanik/native-fav-places"
  },
  {
    id: 4,
    title: "Javascript Budget App",
    img: "/budgetapp.png",
    desc: "An Expense Tracker App built in plain Vanilla JavaScript, HTML5 and CSS3",
    href: "https://github.com/rishipramanik/ExpenseTracker"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a
              href={item.href}
              target="_blank" rel="noreferrer"
            >
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
