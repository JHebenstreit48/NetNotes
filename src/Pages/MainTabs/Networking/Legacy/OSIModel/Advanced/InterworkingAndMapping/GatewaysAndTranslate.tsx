import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GatewaysAndTranslate = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/InterworkingAndMapping/GatewaysAndTranslate';

  return (
    <>
      <PageLayout>
        <PageTitle title="Gateways & Translate" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatewaysAndTranslate;
