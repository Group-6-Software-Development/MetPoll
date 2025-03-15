## Backend

### Setting Up the Backend

1. Install required packages by running the command:  
   `pip install -r requirements.txt`
   
2. Create a `.env` file using the provided `.env.example` file as a template.
   
3. Run the backend server with either of the following commands:  
   `python main.py`  
   or  
   `python Flask.py`
   
4. The backend will be accessible at: `http://localhost:5000/`.

### Running Backend Tests

For testing, ensure that you have the required test dependencies installed by referencing `test_requirements.txt`.

**Note for Linux Users**:  
If you're on Linux and encounter issues with `mysqlclient`, remove it from `requirements.txt`, then run the following command:  
`sudo apt-get install python3-mysqldb`
