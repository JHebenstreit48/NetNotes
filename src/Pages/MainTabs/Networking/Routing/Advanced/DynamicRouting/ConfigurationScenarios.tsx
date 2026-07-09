import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConfigurationScenarios = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/DynamicRouting/ConfigurationScenarios';

  return (
    <>
      <PageLayout>
        <PageTitle title="Configuration Scenarios" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConfigurationScenarios;
