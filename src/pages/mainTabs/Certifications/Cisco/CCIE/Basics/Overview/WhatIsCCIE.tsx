import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsCCIE = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/Overview/WhatIsCCIE';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is CCIE?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsCCIE;
