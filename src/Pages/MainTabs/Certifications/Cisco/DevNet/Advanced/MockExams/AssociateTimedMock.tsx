import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
