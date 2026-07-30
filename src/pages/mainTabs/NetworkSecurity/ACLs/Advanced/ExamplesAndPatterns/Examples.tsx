import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
