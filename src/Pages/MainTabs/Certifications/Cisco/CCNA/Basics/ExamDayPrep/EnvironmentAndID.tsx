import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvironmentAndID = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/ExamDayPrep/EnvironmentAndID';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environment & ID" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentAndID;
