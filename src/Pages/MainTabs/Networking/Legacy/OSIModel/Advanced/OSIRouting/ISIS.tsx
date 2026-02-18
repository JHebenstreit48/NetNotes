import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ISIS = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/OSIRouting/ISIS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IS-IS (OSI)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ISIS;
