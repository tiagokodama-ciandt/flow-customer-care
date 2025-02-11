# flow-customer-care
## Overview

This project is designed to evaluate customer service interactions by analyzing comments and generating a report. The main components of the project include:

- **index.js**: The entry point of the application, orchestrating the workflow.
- **ado-service.js**: Handles interactions with Azure DevOps to fetch work items and comments.
- **flow-service.js**: Communicates with the Flow AI service to analyze comments.
- **prompt.js**: Generates the prompt for the Flow AI service.
- **tools.js**: Utility functions for converting data to CSV and creating files.

## Setup

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd flow-customer-care
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Configure environment variables**:
    Create a `.env` file in the root directory and add the following variables:
    ```properties
    FLOW_TOKEN=<your_flow_token>
    FLOW_URL=<your_flow_url>
    FLOW_TENANT=<your_flow_tenant>
    ADO_BASIC_AUTH=<your_ado_basic_auth>
    ADO_URL=<your_ado_url>
    ```

## Usage

Run the application:
```sh
npm run start
```

The application will fetch work items and comments from Azure DevOps, analyze the comments using Flow AI, and generate a CSV report.
