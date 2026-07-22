import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NSAPStructure = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/CLNSAndAddressing/NSAPStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="NSAP Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NSAPStructure;
