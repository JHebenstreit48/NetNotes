import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AssociateTimedMock = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/MockExams/AssociateTimedMock';

  return (
    <>
      <PageLayout>
        <PageTitle title="Associate Timed Mock" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssociateTimedMock;
