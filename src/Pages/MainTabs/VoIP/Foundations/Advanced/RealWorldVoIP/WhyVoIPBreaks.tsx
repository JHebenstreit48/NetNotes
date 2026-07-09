import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhyVoIPBreaks = () => {
  const markdownFilePath = 'VoIP/Foundations/Advanced/RealWorldVoIP/WhyVoIPBreaks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Why VoIP Breaks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhyVoIPBreaks;
