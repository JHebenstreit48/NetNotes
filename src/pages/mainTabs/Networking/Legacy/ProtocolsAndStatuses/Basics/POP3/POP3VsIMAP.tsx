import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const POP3VsIMAP = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3VsIMAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="POP3 vs IMAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default POP3VsIMAP;
