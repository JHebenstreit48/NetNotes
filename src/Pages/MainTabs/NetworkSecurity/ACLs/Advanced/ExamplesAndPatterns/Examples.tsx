import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Examples = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/ExamplesAndPatterns/Examples';

  return (
    <>
      <PageLayout>
        <PageTitle title="Examples (Std/Ext/Named)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Examples;
