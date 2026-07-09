import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConnectedDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/ConnectedDevices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Connected Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectedDevices;