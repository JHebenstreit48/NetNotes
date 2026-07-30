import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DataVsControlVsMgmt = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/PlanesAndTraffic/DataVsControlVsMgmt';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data vs Control vs Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataVsControlVsMgmt;