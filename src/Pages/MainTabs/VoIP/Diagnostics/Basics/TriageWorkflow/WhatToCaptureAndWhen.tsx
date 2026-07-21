import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
