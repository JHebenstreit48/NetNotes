import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MigrateToSSH = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet/MigrateToSSH';

  return (
    <>
      <PageLayout>
        <PageTitle title="Migrate to SSH" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MigrateToSSH;
