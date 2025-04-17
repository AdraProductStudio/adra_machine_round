export const LANGUAGE_VERSIONS = {
  Question_1: "18.15.0",
  Question_2: "5.0.3",
  Question_3: "3.10.0",
  Question_4: "15.0.2",
  Question_5: "6.12.0",
  Question_6: "8.2.3",
  Question_7: "8.2.3",
  Question_8: "8.2.3",
  Question_9: "8.2.3",
  Question_10: "8.2.3",
  Question_11: "8.2.3",

};

export const CODE_SNIPPETS = {
  // Question_1: `
  // //  Question:
  // //           Build a MERN stack login and registration system with bcrypt concept hashed passwords.\n
  // //  Backend:
  // //          Create a user registration system where users can register with a username, email, and password. 
  // //          Check wether the username and email is already in db if exist throw username or email already exist in 404 response or register as a user in 200 response
  // //          Hash the password using bcrypt before saving it in the database.
  // //          Implement login functionality where the password is compared with the hashed one. 
  // //  Frontend:
  // //           Create a React UI with forms for registration and login.
  // //           Store the User data in localStorage after login 
  //   `,
  // Question_2: `
  // //  Question:
  // //           Implement a CRUD application for managing blog posts in a MERN stack.\n
  // //  Backend:
  // //          Create an Express server with routes to:
  // //          Create a new blog post.
  // //          Read all blog posts.
  // //          Read a specific blog post by ID.
  // //          Update a blog post by ID.
  // //          Delete a blog post by ID.
  // //          Use MongoDB to store the blog posts with fields like title, content, author, and created_at.\n
  // //  Frontend:
  // //           Create a simple React UI with a form for creating and updating blog posts.
  // //           Display a list of blog posts and allow users to click on a post to view its details.
  //     `,
  // Question_3: `
  // //  Question:
  // //           Build a MERN stack login and registration system with hashed passwords.\n
  // //  Backend:
  // //          Create a user registration system where users can register with a username, email, and password.
  // //          Hash the password using bcrypt before saving it in the database.
  // //          Implement login functionality where the password is compared with the hashed one.
  // //          Use JWT for authentication and return a token upon successful login.
  // //  Frontend:
  // //           Create a React UI with forms for registration and login.
  // //           Store the JWT in localStorage after login and use it for authenticated requests.
  // `,
  // Question_4: `
  // //  Question:
  // //           Implement real-time chat functionality using Socket.IO in a MERN stack application.\n
  // //  Backend:
  // //          Set up Socket.IO on the Node.js server to allow real-time communication.
  // //          Create an API to store and retrieve chat messages from MongoDB.
  // //  Frontend:
  // //          Set up Socket.IO on the React client and allow users to send and receive messages in real-time.
  // //          Display the chat history and update it in real-time when new messages arrive.
  // `,
  // Question_5: `
  // //  Question:
  // //           Create a to-do list with the ability to mark tasks as complete and filter tasks (complete/incomplete).\n
  // //  Backend:
  // //          Set up a simple API to create, read, update, and delete tasks.
  // //          Implement the ability to mark tasks as complete/incomplete.
  // //  Frontend:
  // //           Create a React UI to list tasks and provide a checkbox to mark them as complete.
  // //           Add filters to view all tasks, only completed tasks, or only incomplete tasks.
  
  // `,
  // Question_6: `
  // //  Question:
  // //           Implement JWT-based authentication with role-based access control (RBAC) in a MERN stack.\n
  // //  Backend:
  // //          Create routes to register and log in users.
  // //          Each user should have a role (e.g., admin, user).
  // //          Use JWT for authentication and include the user's role in the token.
  // //          Create a middleware to restrict access to certain routes based on the user's role.
  // //  Frontend:
  // //           Create a React application with login functionality.
  // //           Once logged in, display different content based on the user's role (e.g., an admin dashboard for admins).
  //   `,
  // Question_7: `
  // //  Question:
  // //           Implement a file upload system in a MERN stack, with image preview functionality on the frontend.\n
  // //  Backend:
  // //          Set up an Express server to handle file uploads using multer.
  // //          Save the files to the server or cloud storage (e.g., AWS S3) and return the URL of the uploaded file.
  // //          Use JWT for authentication and include the user's role in the token.
  // //          Create a middleware to restrict access to certain routes based on the user's role.
  // //  Frontend:
  // //           Create a React form that allows users to upload files.
  // //           Display a preview of the selected image before uploading it to the server.
  //   `,
  // Question_8: `
  // //  Question:
  // //           Build a React Application with a Simple Login and CRUD Functionality. \n
  // //            
  // //          PART - 1
  // //            Create a login form responsively with two fields: Username and Password.
  // //            Implement basic validation:
  // //            If either field is empty, show an error message.
  // //            Use a hardcoded username and password for simplicity (e.g., admin / password123).
  // //            When the login is successful, store the user's session (e.g., in localStorage) and navigate to the main CRUD page.\n

  // //          PART - 2
  // //            Create User , Read Users , Update User , Delete User\n

  // //          PART -  3 Session Handling      
  // //            If a user is not logged in, the CRUD page should redirect to the login page.
  // //            Add a Logout button that clears the session and redirects the user to the login page
  //   `,
  Question_1:`
// Implement a CRUD application for managing blog posts in a MERN stack.
// Backend:
// Create an Express server with routes to:
// Create a new blog post.
// Read all blog posts.
// Read a specific blog post by ID.
// Update a blog post by ID.
// Delete a blog post by ID.
// Use MongoDB to store the blog posts with fields like title, content, author, and created_at.
// Frontend:
// Create a simple React UI with a form for creating and updating blog posts.
// Display a list of blog posts and allow users to click on a post to view its details.`,
Question_2:`
      // Build a real-time chat application using the MERN stack with Socket.io.
// Backend:
      // Set up Express server with Socket.io integration.
      // Create MongoDB models for users and messages.
      // Implement user authentication with JWT.
      // Create WebSocket events for sending and receiving messages.
      // Store chat history in MongoDB.
// Frontend:
      // Implement user registration and login forms.
      // Create a chat interface with message input and message display.
      // Show online/offline status of users.
      // Display real-time notifications for new messages.
      // Allow users to see message history when they open a conversation.`,
Question_3:`
      // Develop an e-commerce product listing with shopping cart functionality.
// Backend:
      // Create product model with fields for name, description, price, and image URL.
      // Implement RESTful API endpoints for listing products and handling cart operations.
      // Add search and filtering capabilities for products.
      // Create user authentication for checkout process.
// Frontend:
      // Display products in a responsive grid layout.
      // Implement product search and filter functionality.
      // Create shopping cart with add/remove/update quantity features.
      // Implement cart persistence using localStorage or user accounts.
      // Design a checkout process with shipping and payment information forms.`,
Question_4:`
      // Create a task management application (like Trello) with drag-and-drop functionality.
// Backend:
      // Design MongoDB schemas for boards, lists, and tasks.
      // Implement CRUD operations for all entities.
      // Create authentication and authorization mechanisms.
      // Add API endpoints for updating task positions and list assignments.
// Frontend:
      // Build a drag-and-drop interface for tasks between lists.
      // Implement board and list creation/editing.
      // Create task cards with title, description, due date, and labels.
      // Add authentication UI for user registration and login.
      // Implement real-time updates when tasks are moved (optional).`,
Question_5:`
    // Develop a social media feed with infinite scroll and post engagement.
// Backend:
    // Create user and post models in MongoDB.
    // Implement authentication with JWT.
    // Design API endpoints for CRUD operations on posts.
    // Add functionality for likes, comments, and sharing.
    // Create paginated API for feed loading.
// Frontend:
    // Build a responsive feed interface with post cards.
    // Implement infinite scroll loading for posts.
    // Create post interaction components (like, comment, share).
    // Design user profile pages showing user posts and information.
    // Add a post creation form with image upload capability.`,
Question_6:`
    // Build a file upload and management system with preview capabilities.
// Backend:
    // Set up Express server with Multer middleware for file uploads.
    // Create MongoDB schema for storing file metadata.
    // Implement secure file storage and retrieval mechanisms.
    // Add user authentication and file access permissions.
// Frontend:
    // Create a drag-and-drop upload interface.
    // Implement file preview for different file types (images, PDFs, etc.).
    // Build a file browser with list and grid views.
    // Add search and filtering capabilities for files.
    // Implement file sharing functionality with access controls.`,
Question_7:`
    // Develop a user dashboard with analytics and data visualization.
// Backend:
    // Create APIs for aggregating and retrieving analytics data.
    // Implement user authentication and authorization.
    // Design data models for storing user activities and metrics.
    // Add filtering capabilities for different time periods.
// Frontend:
    // Build a responsive dashboard layout with widgets.
    // Implement charts and graphs using libraries like Chart.js or Recharts.
    // Create date range pickers for time-based filtering.
    // Design user settings and profile management pages.
    // Add interactive elements for drilling down into data.`,
Question_8:`
    // Create a blog platform with rich text editing and commenting.
// Backend:
    // Design MongoDB schema for blog posts, comments, and user profiles.
    // Implement authentication and authorization for authors and readers.
    // Create API endpoints for CRUD operations on posts and comments.
    // Add search functionality for blog content.
// Frontend:
    // Integrate a rich text editor (like Draft.js or Quill).
    // Implement blog post creation and editing interfaces.
    // Create comment sections with threading capability.
    // Design responsive layouts for both desktop and mobile reading.
    // Add social sharing functionality for posts.`,
Question_9:`
    // Build a multi-step form with validation and persistence.
// Backend:
    // Create API endpoints for saving form progress.
    // Design MongoDB schema for storing form data.
    // Implement validation rules for form submissions.
    // Add user authentication for accessing saved forms.
// Frontend:
    // Create a multi-step form interface with progress indicator.
    // Implement form validation using Formik or React Hook Form.
    // Add ability to save progress and return later.
    // Design responsive layout that works well on mobile devices.
    // Create summary page before final submission.`,
Question_10:`
    // Develop a real-time notification system with WebSockets.
// Backend:
    // Set up Express server with Socket.io for WebSocket communication.
    // Create MongoDB models for storing notifications.
    // Implement event-based architecture for notification generation.
    // Add user authentication and notification preferences.
// Frontend:
    // Create a notification component with unread indicators.
    // Implement real-time notification reception via WebSockets.
    // Design notification detail view with action buttons.
    // Add notification settings page for user preferences.
    // Implement notification badge and sound alerts.`,
    Question_11: `
  //  Question:
  //           Implement a CRUD application for managing blog posts in a MERN stack.\n
  //  Backend:
  //          Create an Express server with routes to:
  //          Create a new blog post.
  //          Read all blog posts.
  //          Read a specific blog post by ID.
  //          Update a blog post by ID.
  //          Delete a blog post by ID.
  //          Use MongoDB to store the blog posts with fields like title, content, author, and created_at.\n
  //  Frontend:
  //           Create a simple React UI with a form for creating and updating blog posts.
  //           Display a list of blog posts and allow users to click on a post to view its details.
      `,
};
