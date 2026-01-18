import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DataTransmitMethod = () => {
  const markdownFilePath =
    'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts/TransmissionMethods';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - Data Transmission Methods" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataTransmitMethod;