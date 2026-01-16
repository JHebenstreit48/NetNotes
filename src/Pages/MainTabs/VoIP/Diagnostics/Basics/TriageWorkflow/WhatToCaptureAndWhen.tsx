import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatToCaptureAndWhen = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Basics/TriageWorkflow/WhatToCaptureAndWhen';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What to Capture and When" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatToCaptureAndWhen;
