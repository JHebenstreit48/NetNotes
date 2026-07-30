import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
