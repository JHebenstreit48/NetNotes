import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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