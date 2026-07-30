import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SAPSDUPCI = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/PDUsAndSAP/SAPSDUPCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="SAP/SDU/PCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SAPSDUPCI;
