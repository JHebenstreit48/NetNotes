import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
