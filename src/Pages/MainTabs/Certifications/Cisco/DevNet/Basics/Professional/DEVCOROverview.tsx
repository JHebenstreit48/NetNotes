import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
