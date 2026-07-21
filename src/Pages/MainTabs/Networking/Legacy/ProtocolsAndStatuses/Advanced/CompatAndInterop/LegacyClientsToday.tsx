import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
