# Mahfuz JS MERN Stack Library - For Backend Development

## Overview
Mahfuz JS is a Node.js MERN Stack library that provides various utilities including server setup, database connection, encryption, email sending, and GitHub release checking for backend development.

## Installation
To install the module, use npm:

```sh
npm install mahfuz-js
```
## Usage
### Importing the Module
First, import the required classes from the module:

```javascript
import { Backend, DatabaseConnector, Utils, ApiResponse, ApiError, MahfuzMailer, UpdateChecker } from 'mahfuz-js';
```

## Backend Class
### The Backend class sets up an Express server with necessary middleware.

```javascript
const backend = new Backend();
backend.startServer();
```
## DatabaseConnector Class
### The DatabaseConnector class provides methods to connect to MongoDB and MongoDB Atlas.

### Example Usage:
#### MongoDB
```javascript
const dbConfig = {
  Host: 'localhost',
  Port: 27017,
  Username: 'your-username',
  Password: 'your-password',
  DbName: 'your-db-name'
};

const dbConnector = new DatabaseConnector(dbConfig);
dbConnector.ConnectToMongoDB();
```
#### MongoDB Atlas

```javascript
const dbConfig = {
    SubDomain: 'your-subdomain',
    Username: 'your-username',
    Password: 'your-password',
    Cluster: 'your-cluster-name'
};
const dbConnector = new DatabaseConnector(dbConfig);
dbConnector.ConnectToMongoDBAtlas();
```


### Utils Class
The `Utils` class provides utility functions for generating random numbers, handling async requests, and encrypting data.

```javascript
const utils = new Utils();
const randomNumber = utils.GenerateRandomNumber(10);
const encryptedString = utils.Encrypt('your-string');
const isMatch = utils.Compare('your-string', encryptedString);
```

### ApiResponse Class
The `ApiResponse` class is used to standardize API responses.

```javascript
const response = new ApiResponse(200, { key: 'value' }, 'Success message');
```

### ApiError Class
The `ApiError` class is used to standardize API error responses.

```javascript
const error = new ApiError(400, 'Error message', ['error1', 'error2']);
```

### MahfuzMailer Class
The `MahfuzMailer` class is used to send emails using nodemailer.

```javascript
const mailConfig = {
  Name: 'Your Name', \\ Your name or company name
  From: 'your-email@example.com', \\ Your email address that you used to register for the SMTP server
  Host: 'smtp.example.com', \\ Your SMTP server host address 
  Port: 465, \\ Your SMTP server port
  Username: 'your-username', \\ Your SMTP server username that SMTP server provided
  Password: 'your-password' \\ Your SMTP server password that SMTP server provided
};

const mailer = new MahfuzMailer(mailConfig);
mailer.SendMail('recipient@example.com', 'Subject', '<h1>Email Body</h1>');
```

### UpdateChecker Class

The `UpdateChecker` class is used to check for the latest release of a GitHub repository and retrieve the download URL for a specific operating system.

```javascript
const updateConfig = {
  GithubUsername: 'your-github-username',
  RepoName: 'your-repo-name',
  RepoToken: 'your-github-token' \\ Your GitHub personal access token note: please store your tokens securely inside the dot env file
};

const checker = new UpdateChecker(updateConfig);
checker.CheckLatestVersion('windows')
  .then(result => {
    if (result.success) {
      console.log('Download URL:', result.downloadUrl);
    } else {
      console.log('Error:', result.message);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

## Supported Operating Systems
The `CheckLatestVersion` method supports the following operating systems:
- `windows` (returns `.exe` files)
- `mac` (returns `.dmg` files)
- `linux` (returns `.deb` files)

## Error Handling
The `CheckLatestVersion` method returns an object with a `success` property indicating whether the operation was successful. If `success` is `false`, the `message` property contains an error message.

## License
This project is licensed under the MIT License.

## Author
Mahfuz JS is developed by [Mohammad Mahfuz Rahman](https://github.com/mahfuz0712).

Happy Coding!
```