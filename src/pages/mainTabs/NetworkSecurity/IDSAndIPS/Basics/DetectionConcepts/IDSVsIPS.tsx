import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
