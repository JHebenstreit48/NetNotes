import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DevContainers = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/ToolsAndEnvironments/DevContainers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Dev Containers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DevContainers;
