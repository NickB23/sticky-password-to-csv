# Sticky Password To CSV Converter
## Import your Sticky Passwords into other Password Managers

### How to export passwords from Sticky Password?
Make sure you have access to your computer as data export from Sticky Password is not possible on mobile devices.

##### The export process for macOS users:

1. Open and login  to your Sticky Password application;
2. Select File → Export → Unencrypted;
3. Chose the file name, location, and click Save. 
4. After you saved the text file, convert it to CSV file format with the instructions below.

##### The export process for Windows users:

1. Open and login to your Sticky Password application;
2. Select Menu → Export;
3. Choose Export all or Export only selected items;
4. Choose file format TXT and click Next;
5. Choose the file name, location, and click Save. After you have saved the text file, convert it to CSV format with the command below.

#### Converting Sticky Password's .txt to .csv

1. Clone this repo.
2. `npm start /directory/to/MainDatabase.txt`
3. Your passwords can now be found in `./passwords.csv`. Keep this file safe as it contains all your passwords!

##### Passwords only
This repo converts only passwords to the .csv file. Other identities, bookmarks or secure memos are not stored in passwords.csv and have to be transferred manually.