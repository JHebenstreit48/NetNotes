import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
