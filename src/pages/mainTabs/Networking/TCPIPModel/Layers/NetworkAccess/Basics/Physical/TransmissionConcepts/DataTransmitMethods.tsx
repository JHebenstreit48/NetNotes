import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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