import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConceptsAndTypes = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/NATAndPAT/ConceptsAndTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concepts & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConceptsAndTypes;
