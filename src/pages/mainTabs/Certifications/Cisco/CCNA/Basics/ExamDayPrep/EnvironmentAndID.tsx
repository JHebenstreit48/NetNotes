import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
