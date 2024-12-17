import { useEffect, useState } from "react";
import { ScreenSaver } from "@src/pages/screenSaver/ScreenSaver";
import Layout from "@src/shared/ui/layout/Layout";
import MainPage from "@src/pages/mainPage";
import "./App.css";

const App = () => {
  const [screenSaver, setScreenSaver] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setScreenSaver(false);
    }, 6000);
  }, [screenSaver]);
  return <Layout>{screenSaver ? <ScreenSaver /> : <MainPage />}</Layout>;
};

export default App;
