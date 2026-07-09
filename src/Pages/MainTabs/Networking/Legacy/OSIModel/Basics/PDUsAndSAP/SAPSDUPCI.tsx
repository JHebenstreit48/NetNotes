import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
