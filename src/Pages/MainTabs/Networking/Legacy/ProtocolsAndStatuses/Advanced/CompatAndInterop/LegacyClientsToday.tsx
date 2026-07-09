import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LegacyClientsToday = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/CompatAndInterop/LegacyClientsToday';

  return (
    <>
      <PageLayout>
        <PageTitle title="Legacy Clients Today" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LegacyClientsToday;
