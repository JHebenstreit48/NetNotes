import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPv4Addressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/IPv4Addressing';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Glossary - Internet Layer - IPv4 Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4Addressing;