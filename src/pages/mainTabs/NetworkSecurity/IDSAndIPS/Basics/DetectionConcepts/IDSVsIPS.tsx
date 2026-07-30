import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IDSVsIPS = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/DetectionConcepts/IDSVsIPS';

  return (
    <>
      <PageLayout>
        <PageTitle title="IDS vs IPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IDSVsIPS;
