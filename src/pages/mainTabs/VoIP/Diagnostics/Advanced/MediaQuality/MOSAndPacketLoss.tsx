import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
