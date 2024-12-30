import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index'; // Ensure `router` is a named export

// Find the root element in the HTML document
const rootElement = document.getElementById('root');

if (rootElement) {
  // Use ReactDOM.createRoot for React 18+
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error('No root element found');
}
