import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MACAddressTable = () => {
  const markdownFilePath =
    'Networking/Switching/Basics/Fundamentals/MACAddressTable';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - MAC Address Table" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MACAddressTable;