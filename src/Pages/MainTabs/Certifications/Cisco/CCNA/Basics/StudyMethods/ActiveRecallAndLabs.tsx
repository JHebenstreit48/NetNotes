import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActiveRecallAndLabs = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/StudyMethods/ActiveRecallAndLabs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Active Recall & Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActiveRecallAndLabs;
