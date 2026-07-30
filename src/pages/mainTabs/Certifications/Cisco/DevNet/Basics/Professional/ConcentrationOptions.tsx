import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ConcentrationOptions = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/Professional/ConcentrationOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Concentration Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConcentrationOptions;
