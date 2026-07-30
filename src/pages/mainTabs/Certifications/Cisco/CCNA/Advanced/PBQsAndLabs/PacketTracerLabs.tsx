import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
