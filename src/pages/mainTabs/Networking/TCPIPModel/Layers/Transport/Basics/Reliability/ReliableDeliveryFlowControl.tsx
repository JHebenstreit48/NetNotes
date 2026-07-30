import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReliableDeliveryFlowControl = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/Reliability/ReliableDeliveryFlowControl';

  return (
    <>
      <PageLayout>
        <PageTitle title="Reliable Delivery/Flow Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReliableDeliveryFlowControl;
