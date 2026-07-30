import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
