import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TFTPBasics = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/TFTPBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TFTP Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TFTPBasics;
