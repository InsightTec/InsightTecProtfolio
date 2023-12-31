import { useState } from "react";
import "./main.css";
import { myProjects } from "../../data/myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      // const ZZZ = item.category.find((myItem) => {
      //   return myItem === buttonCategory;
      // });


      // return ZZZ === buttonCategory;
      console.log('buttonCategory',buttonCategory)
      return item.category.includes(buttonCategory);
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("web");
          }}
          className={currentActive === "web" ? "active" : null}
        >
        Web development
        </button>

        <button
          onClick={() => {
            handleClick("machine");
          }}
          className={currentActive === "machine" ? "active" : null}
        >
          Image Processing
        </button>
        <button
          onClick={() => {
            handleClick("mobile");
          }}
          className={currentActive === "mobile" ? "active" : null}
        >
          Mobile Apps
        </button>
        <button
          onClick={() => {
            handleClick("desktop");
          }}
          className={currentActive === "desktop" ? "active" : null}
        >
          Desktop
        </button>
        

      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.id}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">
                  {item.shortDescription}
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>

                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
