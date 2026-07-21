import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
