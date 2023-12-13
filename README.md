
# TypeScript Project

## Prerequisites

Before running the application, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x)
- [npm](https://www.npmjs.com/) (Node Package Manager)



## How to Run Locally

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/reza107-hub/Assaignment-2-on-tsc-rest-api.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Assaignment-2-on-tsc-rest-api
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Configure MongoDB:**

   Set up a MongoDB database and update the `.env` file with the appropriate connection details.

5. **Run the Application:**

   - In Development Mode (with automatic restarts on code changes):

     ```bash
     npm run start:dev
     ```

     The server will be running at `http://localhost:5000`.

   - In Production Mode:

     ```bash
     npm run build
     npm start
     ```

     The server will be running at `http://localhost:5000`.


