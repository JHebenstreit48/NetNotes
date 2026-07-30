import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
