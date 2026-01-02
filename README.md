# Pinterest Clone Website App ✨

Pinterest Clone is a modern and interactive web application designed to let users discover, share, and save visual content in a seamless way. Instead of browsing through static galleries, users can upload their own images, explore posts shared by others, and organize them into personalized collections. Each post card displays essential information such as the image, title, description, and the creator’s profile.

Upon clicking a post, users are taken to a detailed page where they can view extended information, leave comments, and interact with the content. If a post catches their interest, they can save it to their personal board with a single click. These boards are stored in the database, ensuring they remain available across sessions and devices.

The app features a clean and responsive design built with modern frontend tools, ensuring a smooth experience across all devices. Navigation is handled via React Router, allowing seamless transitions between pages like Home, Post Details, Create Post, and User Profile.

## ⚙️ Features

- User registration and login system (JWT authentication)  
- CRUD operations (create, read, update, delete)  
- Modern frontend with React + Vite  
- MongoDB Atlas or local MongoDB support  
- State management with React Hooks 
- Responsive design for mobile and desktop  

## 🛠️ Technology and Tools

- React.js | Component-based UI development for building reusable and dynamic interfaces
- Vite | Fast development environment with optimized bundling for React
- React Router | Page navigation and dynamic URL handling for smooth transitions
- Node.js & Express.js | Backend server for handling API requests and authentication
- MongoDB & Mongoose | NoSQL database for storing posts, users, and boards efficiently
- JWT (JSON Web Token) | Secure authentication and user session management
- Axios | Simplified HTTP requests between frontend and backend

## 🔮 Future Features

- **Drag Items (Mouse Event)**  
  Users can drag and rearrange items on the board using mouse events, creating a dynamic and interactive experience.  

- **Edit and Upload**  
  Users can edit existing pins or upload new ones, making content creation and customization simple and intuitive.  

- **Like and Save**  
  Users can like pins they enjoy and save them to personal boards for easy access later.  


## 🚦 Running the Project

To run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    https://github.com/sadikahmetaydin/full-stack-pinterest-clone.git
    cd full-stack-pinterest-clone
    ```

2. **Install dependencies**:

    ```bash
    cd backend || cd frontend
    npm install
    ```
    
3. **Create a .env file and add the following variables**:

    ```bash
    MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname
    JWT_SECRET=your_jwt_secret
    ```
    
4. **Start the development server**:

    ```bash
    npm run dev
    ```

5. **Open the app**:
   
     Visit Frontend `http://localhost:5173` || Backend `http://localhost:3000` to see the app in action.
   

## 🎥 Video
