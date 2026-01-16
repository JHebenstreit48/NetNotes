import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DockerIntegration = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ContainersAndVMs/DockerIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Docker Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DockerIntegration;
