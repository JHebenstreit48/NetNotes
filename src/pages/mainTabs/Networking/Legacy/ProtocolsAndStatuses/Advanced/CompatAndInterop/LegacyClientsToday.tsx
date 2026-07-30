import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
