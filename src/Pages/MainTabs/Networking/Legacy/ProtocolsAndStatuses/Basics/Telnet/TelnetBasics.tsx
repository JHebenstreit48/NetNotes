import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TelnetBasics = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/Telnet/TelnetBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Telnet Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TelnetBasics;
