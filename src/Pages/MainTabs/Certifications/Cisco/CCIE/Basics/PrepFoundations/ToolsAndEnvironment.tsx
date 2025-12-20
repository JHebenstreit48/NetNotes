import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ToolsAndEnvironment = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/PrepFoundations/ToolsAndEnvironment';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tools & Environment" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ToolsAndEnvironment;
