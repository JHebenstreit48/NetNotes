import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ISIS = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/OSIRouting/ISIS';

  return (
    <>
      <PageLayout>
        <PageTitle title="IS-IS (OSI)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ISIS;
