import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GatewaysAndTranslate = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Advanced/InterworkingAndMapping/GatewaysAndTranslate';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Gateways & Translate" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatewaysAndTranslate;
