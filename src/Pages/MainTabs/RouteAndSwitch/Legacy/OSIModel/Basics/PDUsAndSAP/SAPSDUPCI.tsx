import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SAPSDUPCI = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/PDUsAndSAP/SAPSDUPCI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="SAP/SDU/PCI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SAPSDUPCI;
