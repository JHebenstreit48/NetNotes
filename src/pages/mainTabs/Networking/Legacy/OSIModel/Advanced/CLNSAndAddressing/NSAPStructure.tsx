import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
