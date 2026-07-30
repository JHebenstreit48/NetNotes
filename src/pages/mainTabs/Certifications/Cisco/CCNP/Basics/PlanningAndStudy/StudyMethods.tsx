import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const StudyMethods = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/PlanningAndStudy/StudyMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="Study Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StudyMethods;
