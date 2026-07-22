import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
