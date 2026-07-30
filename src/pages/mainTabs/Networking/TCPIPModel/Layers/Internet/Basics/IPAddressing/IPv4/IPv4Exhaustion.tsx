import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv4Exhaustion = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/IPv4Exhaustion';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - IPv4 Exhaustion and Transition" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4Exhaustion;