import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
