import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cisco Packet Tracker - Basics - Fundamentals - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;