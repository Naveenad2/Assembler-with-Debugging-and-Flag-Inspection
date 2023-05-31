 <img width="422" alt="Screenshot 2023-05-31 121434" src="https://github.com/Naveenad2/Assembler/assets/125131354/960e80be-9c0c-46ab-b92d-356e0417ef78">
 
# Assembler with Debugging and Flag Inspection

This project is a web-based assembler that allows you to write and run assembly language code, perform debugging, and inspect various flags. It is built using React, Spring, and MySQL database.

## Features

- **Assembly Language Execution**: Write assembly code using a user-friendly interface and execute it in real-time.

- **Debugging Capabilities**: Step through the assembly code, set breakpoints, and inspect the state of registers and memory at each step.

- **Flag Inspection**: View the current values of important flags such as Carry flag (Cy), Auxiliary carry flag (AC), Sign flag (S), Parity flag (P), and Zero flag (Z) to understand the state of the program.

- **User Authentication**: Users can create accounts and log in to save their assembly code and access it from any device.

- **Persistent Storage**: Assembly code, breakpoints, and user settings are stored in a MySQL database, ensuring data is saved even if the application is restarted.

## Technologies Used

- React: A popular JavaScript library for building user interfaces.

- Spring: A Java framework for building web applications.

- MySQL: A relational database management system.

## Setup Instructions

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/your-repo.git
   
2. Install dependencies for the frontend and backend:


    ```shell
    cd frontend
    npm install

    cd ../backend
    mvn install
           
3.Configure the database connection:

  - Create a MySQL database and update the connection details in backend/src/main/resources/application.properties.
         
4.Start the development servers:

     cd frontend
     npm start

     cd ../backend
     mvn spring-boot:run
            
5.Access the application in your web browser at http://localhost:3000

## Contributing
  - Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License
   - This project is licensed under the MIT License.
## ScreenShots

# CodeEditor

   <img width="422" alt="Screenshot 2023-05-31 121434" src="https://github.com/Naveenad2/Assembler/assets/125131354/960e80be-9c0c-46ab-b92d-356e0417ef78">

2.Flag inspection and run each code

   <img width="444" alt="Screenshot 2023-05-31 121843" src="https://github.com/Naveenad2/Assembler/assets/125131354/4a4b7023-2ff1-4e69-8328-dde3cbec941c">

3.Set input

   <img width="415" alt="Screenshot 2023-05-31 122143" src="https://github.com/Naveenad2/Assembler/assets/125131354/5a5ea4c7-d371-494b-b2ee-ad33d9ff7401">

4.Memmory view

    <img width="422" alt="Screenshot 2023-05-31 122122" src="https://github.com/Naveenad2/Assembler/assets/125131354/5516b4a8-a3a0-4879-b38c-cb4c98190405">






