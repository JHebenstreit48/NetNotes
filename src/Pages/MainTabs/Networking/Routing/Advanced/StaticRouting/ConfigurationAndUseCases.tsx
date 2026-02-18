import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigurationAndUseCases = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/StaticRouting/ConfigurationAndUseCases';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Configuration & Use Cases" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigurationAndUseCases;
