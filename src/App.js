import React from "react";
import { Features, Download, SectionWrapper } from "./components";
import assets from "./assets/assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <div>
      <SectionWrapper
        title="Your own store of NFTs. Start Selling & Growing"
        description="Buy, Store, Collect NFTs, exchange & earn crypto, Join 25+ million 
      people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef id build using Expo which runs natively on all users' devices. You can easily get your app tnto people's hands"
        showBtn
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div
        className={`px-4 py-2 justify-center items-center bg-p
      flex-col text-center banner04`}
      >
        <p className={`${styles.pText}`}>
          Made with love by <span className="bold">Joy</span>
        </p>
      </div>
    </div>
  );
};

export default App;
