# README

Node JS Microservices

### What is this repository for?

- Quick summary
  This repository is created for the sample microservice implementation with internal communications
- Version
  node V 8.0 greater

### How do I get set up?

- Summary of set up
  Setup is configured in `bin` folder

  - Configuration & Dependencies
    To setup development run `setup.sh` file

  - Deployment instructions
    To deploy microservices in server run `service-start.sh` file
    To stop deployed microservices in server run `service-stop.sh` file

### Repo concept

- All service configuration are configured in the root folder `config.json` file.
- If you want to create a new service. Add the configuration in `config.json`.
- Configure internal service routing using `http-proxy` sample code is provided in Gateway `server.js` file.
- Response format is defined in `Response` folder.
- If the service re-routing requires middleware configuration,configure in server file.
- NodeMon service has been configured in the root folder for monitoring changes in the code.

### To Start service individual for development

run command `node server.js`

### To run the Microservices locally

run commands `npm run gateway-start`,`npm run service1-start`,`npm run service2-start`

### Happy Coding !
