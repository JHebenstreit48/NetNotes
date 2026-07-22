import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
