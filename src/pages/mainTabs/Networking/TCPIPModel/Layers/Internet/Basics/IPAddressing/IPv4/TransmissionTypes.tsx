import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TransmissionTypes = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/TransmissionTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - IPv4 - Transmission Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TransmissionTypes;