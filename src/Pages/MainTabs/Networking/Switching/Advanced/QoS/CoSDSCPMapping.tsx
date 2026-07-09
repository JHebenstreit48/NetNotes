import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoSDSCPMapping = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/QoS/CoSDSCPMapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="CoS/DSCP Mapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoSDSCPMapping;