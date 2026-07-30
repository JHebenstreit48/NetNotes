import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AttenuationAndDistance = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/AttenuationAndDistance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Attenuation & Distance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AttenuationAndDistance;
