import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ReliableDeliveryFlowControl = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/Reliability/ReliableDeliveryFlowControl';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Reliable Delivery/Flow Control" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReliableDeliveryFlowControl;
