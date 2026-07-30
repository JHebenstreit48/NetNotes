import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
