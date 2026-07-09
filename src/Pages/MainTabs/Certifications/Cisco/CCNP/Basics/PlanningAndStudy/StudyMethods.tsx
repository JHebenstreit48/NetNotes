import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
