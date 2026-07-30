import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CLNPHeaders = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing/CLNPHeaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="CLNP Headers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CLNPHeaders;
