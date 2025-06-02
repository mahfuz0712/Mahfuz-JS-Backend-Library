# Mahfuz JS Backend Library 

## Overview
Mahfuz JS is a Backend library that provides various utilities including server setup, database connection, encryption, email sending, and GitHub release checking for backend development.

## Installation
install using npm:

```sh
npm install mahfuz-js
```

## Usage
### Setup Backend Server
inside index.js
```javascript
import 'dotenv/config';
import { Backend  } from 'mahfuz-js';

// Initialize Backend
const FrontendURL = process.env.FRONTEND_URL;
const dbConfig = {
  subdomain: process.env.DB_SUBDOMAIN,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  cluster: process.env.DB_CLUSTER
};

const dbConnected = await Backend.ConnectToDataBase(dbConfig);
if(dbConnected) {
  const frontendConnected = await Backend.ConnectToFrontend(FrontendURL);
  if(frontendConnected) {
    Backend.ConfigureMiddlewares(true);
    Backend.AddSecurityHeaders(true);
    await Backend.StartServer(process.env.BACKEND_PORT)
  }
} else {
  console.log("database connection failed");
}

```


### Utils Class
The `Utils` class provides utility functions for generating random numbers, handling async requests, and encrypting data.

```javascript
import { Utils } from "mahfuz-js";
const Random = Utils.Random(10);
const encryptedString = Utils.Encrypt('your-string');
const isMatch = Utils.Compare('your-string', encryptedString);
```

### ApiResponse 
The `ApiResponse` class is used to standardize API responses.

```javascript
const response = new ApiResponse(200, { key: 'value' }, 'Success message');
```

### ApiError 
The `ApiError` class is used to standardize API error responses.

```javascript
const error = new ApiError(400, 'Error message', ['error1', 'error2']);
```

### MahfuzMailer 
The `MahfuzMailer` class is used to send emails using nodemailer.

```javascript
const mailConfig = {
  Host: 'smtp.example.com', \\ Your SMTP server host address 
  Port: 465, \\ Your SMTP server port
  Username: 'your-username', \\ Your SMTP server username that SMTP server provided
  Password: 'your-password' \\ Your SMTP server password that SMTP server provided
  Name: 'Your Name', \\ Your name or company name
  From: 'your-email@example.com', \\ Your email address that you used to register for the SMTP server
  To: 'reciever-email@example.com',
  Subject: 'Subject',
  Body: 'html-content',
};


const isSent = await MahfuzMailer.SendMail(mailConfig);
if(isSent) {
  console.log("mail sent");
} else {
  console.log("mail could not send");
}
```




## License
This project is licensed under the MIT License.

## Author
 Developed by [Mohammad Mahfuz Rahman](https://github.com/mahfuz0712).

Happy Coding!