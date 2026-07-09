import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
