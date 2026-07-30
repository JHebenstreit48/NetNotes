import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DEVCOROverview = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Professional/DEVCOROverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="DEVCOR Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DEVCOROverview;
