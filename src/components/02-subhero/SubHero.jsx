import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const SubHero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" style={{marginBottom:20}}>
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./icon.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>



       

      </div>

      <div className="right-section animation ">
       
      </div>
    </section>
  );
};

export default SubHero;
