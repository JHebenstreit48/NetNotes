import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TP3TP4 = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/TransportClasses/TP3TP4';

  return (
    <>
      <PageLayout>
        <PageTitle title="TP3–TP4" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TP3TP4;
