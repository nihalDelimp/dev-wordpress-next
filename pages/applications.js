import getApplicationsData from "../query/Services/applications";
import Applications from './../components/Services/ApplicationsPage';

const ApplicationsIndustry = ({ applications }) => {
    const resData = applications.data.pageBy.servicesSection.servicesContent;
    const section1 = resData && resData[0] ? resData[0] : ""
    const section2 = resData && resData[1] ? resData[1] : ""
    const section3 = resData && resData[2] ? resData[2] : ""
    const section4 = resData && resData[3] ? resData[3] : ""
    const section5 = resData && resData[4] ? resData[4] : ""
    const section6 = resData && resData[5] ? resData[5] : ""
    const section7 = resData && resData[6] ? resData[6] : ""
    const section8 = resData && resData[7] ? resData[7] : ""


    

    return (
        <Applications 
        section1={section1}
        section2={section2}
        section3={section3}
        section4={section4}
        section5={section5}
        section6={section6}
        section7={section7}
        section8={section8}

         />
    );
};

export async function getStaticProps(context) {
    return {
        props: {
            applications: await getApplicationsData()

        },
    };
}

export default ApplicationsIndustry;
