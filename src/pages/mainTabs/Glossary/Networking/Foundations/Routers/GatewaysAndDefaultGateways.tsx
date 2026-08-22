import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GatewaysAndDefaultGateways = () => {
  const markdownFilePath = 'Glossary/Networking/Foundations/Routers/GatewaysAndDefaultGateways';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Networking - Foundations - Routers - Gateways & Default Gateways" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GatewaysAndDefaultGateways;