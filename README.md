Backend service for the Chatbot project

## Running locally

Start the development server with hot reload:

npm run dev

## Deployment (Google Cloud Run)

Deployment is automated via the main branch:
- Commit and push to `main`
- The Docker build process will execute `npm start`
- Cloud Run will deploy the latest version automatically