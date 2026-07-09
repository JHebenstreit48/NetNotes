import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OnPremWLCVsCloud = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/ManagementModels/OnPremWLCVsCloud';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - On-Prem WLC vs Cloud" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OnPremWLCVsCloud;