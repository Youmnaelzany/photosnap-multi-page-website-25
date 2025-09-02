import HomeCard from "./HomeCard";

const CreateShare = () => {
  return (
    <HomeCard
      title="Create and share your photo Stories"
      paragraph="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      mobileImage="/home/mobile/create-and-share.jpg"
      tabletImage="/home/tablet/create-and-share.jpg"
      desktopImage="/home/desktop/create-and-share.jpg"
      widthMobile={375}
      heightMobile={294}
      widthTablet={273}
      heightTablet={650}
      widthDesktop={830}
      heightDesktop={650}
      backgroundColor="#000"
      hrefLink="/stories"
    />
  );
};
export default CreateShare;
