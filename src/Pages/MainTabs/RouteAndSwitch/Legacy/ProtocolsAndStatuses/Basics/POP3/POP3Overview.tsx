import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const POP3Overview = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/POP3/POP3Overview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="POP3 Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default POP3Overview;
