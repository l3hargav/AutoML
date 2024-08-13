# AutoML

## DEV INFO

# Ports
The node server runs on port 9000, react frontend runs on port 3000 and the flask server runs on port 8000.
The node server and flask file is located in the `server` folder and the react frontend is located in the `client` folder.

# Project Structure

From the frontend the file is encoded into a buffer and sent to the backend. The backend then decodes the buffer and sends it to the flask server. The flask server then decodes the buffer and makes it into a pandas dataframe. 

#To Run
1) Navigate to the `home` directory where the file is stored and run `npm start` to start the node server.
2) Similarly navigate to `server` directory and run the `server.py` file by `python server.py`.
3) Navigate to the `client` directory and run `npm start` to start the react frontend.

#### Node has a `/test` endpoint to check if the server is running
#### Flask also has a `/test` endpoint

## TODOS *(not in order)
- [x] Implement a way to send file from frontend to both the servers
- [x] Display dataframe in terminal (for checking)
- [ ] Understand the working of the current structure and if necessary make changes
- [ ] Research if the current way of sending files is the best way or not
- [ ] Server side:
    - [ ] (?) Take the data and return the description (`df.describe()`) to the frontend for display.
    - [ ] Take input of various options as json, parse it to see what is to be done to the dataset.
    - [ ] Make models (TBD)
- [ ] Client side:
    - [ ] Figure out how to display the tabular data
    - [ ] Make it look nice *(Add CSS)
    - [ ] Make pages or tabs for different steps in the data science lifecycle.
    - [ ] Figure out the best way to send the params to use while processing data.
    - [ ] (?) Add a signup/login page
    - [ ] (?) Add a way to save the data (maybe in a database / check how exactly `multer` works.) 

