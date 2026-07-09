import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PacketTracerLabs = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PBQsAndLabs/PacketTracerLabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Packet Tracer Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PacketTracerLabs;
