import HomeCard from "./HomeCard";

const BeautifulStories = () => {
  return (
    <HomeCard
      title="Beautiful stories every time"
      paragraph="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      mobileImage="/home/mobile/beautiful-stories.jpg"
      tabletImage="/home/tablet/beautiful-stories.jpg"
      desktopImage="/home/desktop/beautiful-stories.jpg"
      widthMobile={375}
      heightMobile={294}
      widthTablet={273}
      heightTablet={650}
      widthDesktop={830}
      heightDesktop={650}
      linkTitle="Get an invite"
    />
  );
};
export default BeautifulStories;
