import { useEffect } from "react";
import "./ParticlesBackground.css";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve("Скрипт загружен");
        script.onerror = () =>
          reject(new Error(`Ошибка загрузки скрипта: ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript("/js/particles.cjs");
        await loadScript("/js/app.cjs");
      } catch (error) {
        console.log(error);
      }
    };

    loadScripts();
    return () => {
      const scripts = document.querySelectorAll(
        'script[src="js/particles.cjs"], script[src="js/app.cjs"]',
      );
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return <div id="particles-js"></div>;
};

export default ParticlesBackground;
