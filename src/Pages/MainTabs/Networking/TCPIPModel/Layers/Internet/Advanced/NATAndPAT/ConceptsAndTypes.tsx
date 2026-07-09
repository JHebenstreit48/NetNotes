import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
