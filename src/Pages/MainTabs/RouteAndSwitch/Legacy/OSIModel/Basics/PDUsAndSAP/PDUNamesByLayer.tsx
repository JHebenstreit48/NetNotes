import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PDUNamesByLayer = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/PDUsAndSAP/PDUNamesByLayer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="PDU Names by Layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PDUNamesByLayer;
