## Running the Application with Docker

To run the application using Docker, follow these steps:

1. Install Docker on your machine if you haven't already.
2. Navigate to the root directory of the project.
3. Build the Docker image using the following command:
    ```
    docker build -t online_bookstore .
    ```
4. Once the image is built, you can run the container using the following command:
    ```
    docker run -p 3000:3000 online_bookstore
    ```
5. The application should now be accessible at http://localhost:3000 in your web browser.
