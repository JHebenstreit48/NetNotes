import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpeedAndTimeMgmt = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/LabStrategy/SpeedAndTimeMgmt';

  return (
    <>
      <PageLayout>
        <PageTitle title="Speed & Time Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpeedAndTimeMgmt;
