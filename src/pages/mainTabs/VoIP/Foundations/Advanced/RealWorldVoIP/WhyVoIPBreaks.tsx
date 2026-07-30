import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
