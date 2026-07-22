import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
