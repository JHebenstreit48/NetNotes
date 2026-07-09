import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
