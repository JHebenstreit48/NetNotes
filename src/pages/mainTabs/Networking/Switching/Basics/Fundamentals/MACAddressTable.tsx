import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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