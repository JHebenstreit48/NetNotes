import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
