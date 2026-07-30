import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IMAP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/IMAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="IMAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IMAP;