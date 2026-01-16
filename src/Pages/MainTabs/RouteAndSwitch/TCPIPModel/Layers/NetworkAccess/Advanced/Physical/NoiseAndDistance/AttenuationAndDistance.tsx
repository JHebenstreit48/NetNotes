import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AttenuationAndDistance = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/Physical/NoiseAndDistance/AttenuationAndDistance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Attenuation & Distance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AttenuationAndDistance;
