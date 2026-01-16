import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TP0TP2 = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Advanced/TransportClasses/TP0TP2';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TP0–TP2" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TP0TP2;
