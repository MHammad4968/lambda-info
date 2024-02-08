# Lambda-Info

A simple NodeJS script to display information about the server it's running on.
Built to get insight into how the "serverless" functionality works on AWS Lambda.

## Usage

This index.js listens on port 3000 of the machine. 
Request "/spec" after the URL of the server/machine to display information.

## Information Displayed:

- Total RAM
- Free RAM
- Platform/OS, with version
- Number of CPU Cores, with CPU model
- System uptime
- Number of requests since script instance was started.
