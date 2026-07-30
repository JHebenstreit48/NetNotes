import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
