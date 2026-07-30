import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
