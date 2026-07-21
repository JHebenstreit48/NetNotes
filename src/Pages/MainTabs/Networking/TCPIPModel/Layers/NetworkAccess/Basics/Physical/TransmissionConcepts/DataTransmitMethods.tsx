import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DataTransmitMethod = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts/TransmissionMethods';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Data Transmission Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataTransmitMethod;