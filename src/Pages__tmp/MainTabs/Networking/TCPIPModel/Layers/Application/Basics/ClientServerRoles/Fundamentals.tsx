import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/ClientAndServerRoles/Fundamentals';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client/Server Roles - Fundamentals" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Fundamentals;