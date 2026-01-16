import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IMAP = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/Basics/EmailAndCommunication/IMAP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IMAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IMAP;
