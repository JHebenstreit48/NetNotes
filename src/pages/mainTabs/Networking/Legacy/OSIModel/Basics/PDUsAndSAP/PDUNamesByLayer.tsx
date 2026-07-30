import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
