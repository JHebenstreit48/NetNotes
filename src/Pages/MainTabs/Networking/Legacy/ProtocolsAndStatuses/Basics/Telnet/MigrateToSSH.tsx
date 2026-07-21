import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
