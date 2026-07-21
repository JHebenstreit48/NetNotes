import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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