import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PDUNamesByLayer = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/PDUsAndSAP/PDUNamesByLayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="PDU Names by Layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PDUNamesByLayer;
