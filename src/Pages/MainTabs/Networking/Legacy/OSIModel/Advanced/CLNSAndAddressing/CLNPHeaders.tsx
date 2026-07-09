import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
