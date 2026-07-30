import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DockerIntegration = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ContainersAndVMs/DockerIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Docker Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerIntegration;
