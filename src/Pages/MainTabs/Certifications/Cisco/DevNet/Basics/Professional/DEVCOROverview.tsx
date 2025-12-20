import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DEVCOROverview = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Professional/DEVCOROverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DEVCOR Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DEVCOROverview;
