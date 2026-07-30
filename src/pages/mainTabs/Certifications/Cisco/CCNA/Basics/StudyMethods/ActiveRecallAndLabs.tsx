import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ActiveRecallAndLabs = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/StudyMethods/ActiveRecallAndLabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Active Recall & Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActiveRecallAndLabs;
