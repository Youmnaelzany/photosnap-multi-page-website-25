import HomeCard from "./HomeCard";

const DesignEveryone = () => {
  return (
    <HomeCard
      title="Designed for everyone"
      paragraph="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
      mobileImage="/home/mobile/designed-for-everyone.jpg"
      tabletImage="/home/tablet/designed-for-everyone.jpg"
      desktopImage="/home/desktop/designed-for-everyone.jpg"
      widthMobile={375}
      heightMobile={294}
      widthTablet={273}
      heightTablet={650}
      widthDesktop={830}
      heightDesktop={650}
      hrefLink="/stories"
      rowReverse={false}
    />
  );
};
export default DesignEveryone;
