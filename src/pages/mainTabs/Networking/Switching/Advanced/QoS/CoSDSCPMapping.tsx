import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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