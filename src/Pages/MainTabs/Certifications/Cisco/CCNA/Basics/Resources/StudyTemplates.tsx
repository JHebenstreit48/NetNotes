import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
