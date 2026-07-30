import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatToCaptureAndWhen = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/TriageWorkflow/WhatToCaptureAndWhen';

  return (
    <>
      <PageLayout>
        <PageTitle title="What to Capture and When" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatToCaptureAndWhen;
