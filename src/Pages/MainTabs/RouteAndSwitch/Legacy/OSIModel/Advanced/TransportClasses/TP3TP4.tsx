import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TP3TP4 = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Advanced/TransportClasses/TP3TP4';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TP3–TP4" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TP3TP4;
