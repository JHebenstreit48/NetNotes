import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
