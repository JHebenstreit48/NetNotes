import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
