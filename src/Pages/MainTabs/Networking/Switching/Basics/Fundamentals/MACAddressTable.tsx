import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const MACAddressTable = () => {
  const markdownFilePath =
    'Networking/Switching/Basics/Fundamentals/MACAddressTable';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - MAC Address Table" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MACAddressTable;