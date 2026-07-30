import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
