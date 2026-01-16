import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Glossary = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/OSIModel/Basics/GlossaryResources/Glossary';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Glossary" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Glossary;
