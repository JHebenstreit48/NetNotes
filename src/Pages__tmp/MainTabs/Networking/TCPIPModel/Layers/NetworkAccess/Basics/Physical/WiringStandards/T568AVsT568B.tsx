import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const T568AVsT568B = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/T568AVsT568B';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - T568A vs T568B" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default T568AVsT568B;