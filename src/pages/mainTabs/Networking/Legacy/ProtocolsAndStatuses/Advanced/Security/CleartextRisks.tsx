import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CleartextRisks = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/Security/CleartextRisks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cleartext Risks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CleartextRisks;
