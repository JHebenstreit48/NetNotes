import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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