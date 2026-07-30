import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const DataCollectionTypes = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/UserDataAndPrivacy/DataCollectionTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Data Collection Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DataCollectionTypes;
