import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ZonesAndZonePairs = () => {
  const markdownFilePath = 'NetworkSecurity/Firewalls/Basics/ZBFWConcepts/ZonesAndZonePairs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Zones & Zone-Pairs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZonesAndZonePairs;
