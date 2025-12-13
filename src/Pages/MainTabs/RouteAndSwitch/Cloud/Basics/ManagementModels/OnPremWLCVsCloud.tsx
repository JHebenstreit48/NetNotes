import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OnPremWLCVsCloud = () => {
  const markdownFilePath =
    'RouteAndSwitch/Cloud/Basics/ManagementModels/OnPremWLCVsCloud';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - On-Prem WLC vs Cloud" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OnPremWLCVsCloud;