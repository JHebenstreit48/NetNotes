import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DEVCORTimedMock = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/MockExams/DEVCORTimedMock';

  return (
    <>
      <PageLayout>
        <PageTitle title="DEVCOR Timed Mock" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DEVCORTimedMock;
