import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const IPv6Addressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/IPv6Addressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Internet Layer - IPv6 Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv6Addressing;