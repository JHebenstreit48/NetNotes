import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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