import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
