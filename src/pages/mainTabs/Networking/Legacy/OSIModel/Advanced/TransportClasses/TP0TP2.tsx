import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TP0TP2 = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/TransportClasses/TP0TP2';

  return (
    <>
      <PageLayout>
        <PageTitle title="TP0–TP2" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TP0TP2;
