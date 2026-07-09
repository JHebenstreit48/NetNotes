import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
