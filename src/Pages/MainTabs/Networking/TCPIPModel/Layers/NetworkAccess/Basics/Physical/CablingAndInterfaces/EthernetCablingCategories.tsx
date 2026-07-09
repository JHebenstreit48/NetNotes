import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EthernetCablingCategories = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/CablingAndInterfaces/EthernetCablingCategories';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Ethernet Cabling Categories" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EthernetCablingCategories;