import HomeCard from "@/components/Home/HomeCard";

const FeaturesIntro = () => {
  return (
    <HomeCard
      title="Features"
      paragraph="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
      mobileImage="/features/mobile/hero.jpg"
      tabletImage="/features/tablet/hero.jpg"
      desktopImage="/features/desktop/hero.jpg"
      widthMobile={375}
      heightMobile={294}
      widthTablet={273}
      heightTablet={650}
      widthDesktop={830}
      heightDesktop={650}
      backgroundColor="#000"
      textColor="#fff"
      hrefLink="/stories"
      rowReverse={false}
    />
  );
};
export default FeaturesIntro;
