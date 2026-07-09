import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
