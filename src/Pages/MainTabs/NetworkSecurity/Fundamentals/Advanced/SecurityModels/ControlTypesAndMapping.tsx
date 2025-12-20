import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ControlTypesAndMapping = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Advanced/SecurityModels/ControlTypesAndMapping';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Control Types & Mapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlTypesAndMapping;
