import { FC, useEffect, useState } from "react";
import styles from "./ScreenSaver.module.css";
import { A, D, E, F, G } from "@src/shared/ui/logo/index";

const steps = ["Functional", "Efficient", "Digital", "Adaptive", "Global"];

export const ScreenSaver: FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (currentStep < steps.length) {
      timer = setTimeout(() => {
        setCurrentStep((prevState) => prevState + 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {currentStep >= 0 && <F />}
        {currentStep >= 1 && <E />}
        {currentStep >= 2 && <D />}
        {currentStep >= 3 && <A />}
        {currentStep >= 4 && <G />}
      </div>
      <div className={styles.caption}>{steps[currentStep]}</div>
    </div>
  );
};
