import React from "react";
import styles from "../styles/style";

import {
  Navbar,
  // Footer,
  // Services,
  Hero,
  // Transactions,
} from "../components";

export default function Home() {
    return (
      // A div to wrap the entire application
    <div className="bg-primary w-full overflow-hidden">
      <section>
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX} `}>
          <div className={`${styles.boxWidth}`}>
            {/* <SkillsAndExperience /> */}

          </div>
        </div>
        {/* <Footer /> */}
      </section>
    </div>

    );
}
