import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActiveVsPassive = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS/ActiveVsPassive';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Active vs Passive" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActiveVsPassive;
