import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
