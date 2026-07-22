import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
