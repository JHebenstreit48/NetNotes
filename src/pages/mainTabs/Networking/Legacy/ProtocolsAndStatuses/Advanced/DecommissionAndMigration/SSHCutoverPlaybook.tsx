import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SSHCutoverPlaybook = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/DecommissionAndMigration/SSHCutoverPlaybook';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSH Cutover Playbook" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSHCutoverPlaybook;
