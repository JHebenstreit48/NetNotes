import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MailPOP3IMAP = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/DecommissionAndMigration/MailPOP3IMAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Mail: POP3→IMAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MailPOP3IMAP;
