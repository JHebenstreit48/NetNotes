import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
