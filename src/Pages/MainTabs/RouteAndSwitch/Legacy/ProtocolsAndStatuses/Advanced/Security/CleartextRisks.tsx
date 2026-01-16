import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CleartextRisks = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/Security/CleartextRisks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cleartext Risks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CleartextRisks;
