import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ToolsAndEnvironment = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/PrepFoundations/ToolsAndEnvironment';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tools & Environment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ToolsAndEnvironment;
