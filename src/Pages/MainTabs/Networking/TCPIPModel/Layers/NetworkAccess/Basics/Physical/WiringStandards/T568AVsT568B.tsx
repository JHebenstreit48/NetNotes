import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const T568AVsT568B = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/T568AVsT568B';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - T568A vs T568B" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default T568AVsT568B;