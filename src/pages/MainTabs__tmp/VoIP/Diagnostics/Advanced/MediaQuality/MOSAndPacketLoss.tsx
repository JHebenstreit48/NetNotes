import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const MOSAndPacketLoss = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/MediaQuality/MOSAndPacketLoss';

  return (
    <>
      <PageLayout>
        <PageTitle title="MOS & Packet Loss" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MOSAndPacketLoss;
