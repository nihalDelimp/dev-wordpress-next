import Banner from "../components/Banner/Banner";
import getNewHomeData from "../query/newHome/newHome";


const Index = ({ home }) => {
  const bannerData = home.data.pageBy.bannerSection.banner;
  const videoData = bannerData.filter(item => item.video)
  const singleImageData = bannerData.filter(item => item.singleImage)
  const referencesData = bannerData.filter(item => item.referencesSectionItems)
  const footerSectionData = bannerData.filter(item => item.footerSection)
  return (
    <Banner banner={bannerData} singleImageData={singleImageData} video={videoData} references={referencesData} footerSection={footerSectionData} />
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      home: await getNewHomeData()
    },
  };
}

export default Index;
