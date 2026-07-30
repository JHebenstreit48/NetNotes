import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const BooksAndCourses = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Resources/BooksAndCourses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Books & Courses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BooksAndCourses;
