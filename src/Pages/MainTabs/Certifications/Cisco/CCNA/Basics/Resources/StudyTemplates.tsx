import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StudyTemplates = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Resources/StudyTemplates';

  return (
    <>
      <PageLayout>
        <PageTitle title="Study Templates" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StudyTemplates;
