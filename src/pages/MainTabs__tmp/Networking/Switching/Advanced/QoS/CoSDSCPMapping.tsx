import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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