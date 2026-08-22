import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PowerOverEthernet = () => {
  const markdownFilePath = 'Glossary/Networking/Switching/PoE';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Networking - Switching - Power Over Ethernet" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PowerOverEthernet;