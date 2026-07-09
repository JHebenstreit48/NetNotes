import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ESIS = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/OSIRouting/ESIS';

  return (
    <>
      <PageLayout>
        <PageTitle title="ES-IS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ESIS;
