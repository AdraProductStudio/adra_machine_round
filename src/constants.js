export const LANGUAGE_VERSIONS = {
  Question_1: "18.15.0",
  Question_2: "5.0.3",
  Question_3: "3.10.0",
  Question_4: "15.0.2",
  Question_5: "6.12.0",
  Question_6: "8.2.3",
  Question_7: "8.2.3",

};

export const CODE_SNIPPETS = {
  Question_1: `
  //  Question:
  //           Build a MERN stack login and registration system with bcrypt concept hashed passwords.\n
  //  Backend:
  //          Create a user registration system where users can register with a username, email, and password. 
  //          Check wether the username and email is already in db if exist throw username or email already exist in 404 response or register as a user in 200 response
  //          Hash the password using bcrypt before saving it in the database.
  //          Implement login functionality where the password is compared with the hashed one. 
  //  Frontend:
  //           Create a React UI with forms for registration and login.
  //           Store the User data in localStorage after login 
    `,
  Question_2: `
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
  Question_3: `
  //  Question:
  //           Build a MERN stack login and registration system with hashed passwords.\n
  //  Backend:
  //          Create a user registration system where users can register with a username, email, and password.
  //          Hash the password using bcrypt before saving it in the database.
  //          Implement login functionality where the password is compared with the hashed one.
  //          Use JWT for authentication and return a token upon successful login.
  //  Frontend:
  //           Create a React UI with forms for registration and login.
  //           Store the JWT in localStorage after login and use it for authenticated requests.
  `,
  Question_4: `
  //  Question:
  //           Implement real-time chat functionality using Socket.IO in a MERN stack application.\n
  //  Backend:
  //          Set up Socket.IO on the Node.js server to allow real-time communication.
  //          Create an API to store and retrieve chat messages from MongoDB.
  //  Frontend:
  //          Set up Socket.IO on the React client and allow users to send and receive messages in real-time.
  //          Display the chat history and update it in real-time when new messages arrive.
  `,
  Question_5: `
  //  Question:
  //           Create a to-do list with the ability to mark tasks as complete and filter tasks (complete/incomplete).\n
  //  Backend:
  //          Set up a simple API to create, read, update, and delete tasks.
  //          Implement the ability to mark tasks as complete/incomplete.
  //  Frontend:
  //           Create a React UI to list tasks and provide a checkbox to mark them as complete.
  //           Add filters to view all tasks, only completed tasks, or only incomplete tasks.
  
  `,
  Question_6: `
  //  Question:
  //           Implement JWT-based authentication with role-based access control (RBAC) in a MERN stack.\n
  //  Backend:
  //          Create routes to register and log in users.
  //          Each user should have a role (e.g., admin, user).
  //          Use JWT for authentication and include the user's role in the token.
  //          Create a middleware to restrict access to certain routes based on the user's role.
  //  Frontend:
  //           Create a React application with login functionality.
  //           Once logged in, display different content based on the user's role (e.g., an admin dashboard for admins).
    `,
  Question_7: `
  //  Question:
  //           Implement a file upload system in a MERN stack, with image preview functionality on the frontend.\n
  //  Backend:
  //          Set up an Express server to handle file uploads using multer.
  //          Save the files to the server or cloud storage (e.g., AWS S3) and return the URL of the uploaded file.
  //          Use JWT for authentication and include the user's role in the token.
  //          Create a middleware to restrict access to certain routes based on the user's role.
  //  Frontend:
  //           Create a React form that allows users to upload files.
  //           Display a preview of the selected image before uploading it to the server.
    `,
  Question_8: `
  //  Question:
  //           Build a React Application with a Simple Login and CRUD Functionality. \n
  //            
  //          PART - 1
  //            Create a login form responsively with two fields: Username and Password.
  //            Implement basic validation:
  //            If either field is empty, show an error message.
  //            Use a hardcoded username and password for simplicity (e.g., admin / password123).
  //            When the login is successful, store the user's session (e.g., in localStorage) and navigate to the main CRUD page.\n

  //          PART - 2
  //            Create User , Read Users , Update User , Delete User\n

  //          PART -  3 Session Handling      
  //            If a user is not logged in, the CRUD page should redirect to the login page.
  //            Add a Logout button that clears the session and redirects the user to the login page
    `,
};
