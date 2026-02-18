import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const POP3VsIMAP = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3VsIMAP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="POP3 vs IMAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default POP3VsIMAP;
