import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ESIS = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/OSIRouting/ESIS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ES-IS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESIS;
