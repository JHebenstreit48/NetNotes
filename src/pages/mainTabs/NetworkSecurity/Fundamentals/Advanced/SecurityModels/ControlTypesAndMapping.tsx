import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ControlTypesAndMapping = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Advanced/SecurityModels/ControlTypesAndMapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="Control Types & Mapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ControlTypesAndMapping;
