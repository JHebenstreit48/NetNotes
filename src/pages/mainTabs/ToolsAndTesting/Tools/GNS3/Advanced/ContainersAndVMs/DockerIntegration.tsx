import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
