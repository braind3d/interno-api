<p align="center">
  <h1 align="center">Intero Server</h1>
  <p align="center">
    Server-side code and web application of the Intero home designer project.
  </p>
</p>

<p align="center">
    <a href="https://github.com/fanton-dev/intero-server/fork">
        <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square" alt="Contributions welcome badge" />
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/github/license/fanton-dev/intero-server?style=flat-square" alt="License badge" />
    </a>
</p>

<!-- ## Deployment
The project has been deployed
- To view the application, simply visit: <https://app.intero.fanton.dev>
- For API access, send requests to: <https://api.intero.fanton.dev> -->

## API Reference

**Swagger Documentation** containing information about all the endpoints is available [here](https://api.intero.com/v1/swagger/).


## Setup locally
1. Clone the project repository.
```
git clone https://github.com/fanton-dev/intero-server
cd intero-server
```

2. Install nx and project decencies.
```
npm install -g nx
npm install
```

3. Configure environment variables.

Rename the `.env.template` file to `.env` and fill-in the missing values.

4. Start the applications

To bring up the `intero-server` run.
```
nx serve intero-server
```
To bring up the `intero-web-client` run.
```
nx serve intero-web-client
```

## Setup using Docker
1. Ensure you have Docker and docker-compose installed and running. In case you are having issues, you may refer to the [Docker installation documentation](https://docs.docker.com/get-docker/).

2. Clone the project repository.
```
git clone https://github.com/fanton-dev/intero-server
cd intero-server
```

3. Start development server using Docker.
```
docker-compose up
```

## Contributions
1. Fork it (<https://github.com/fanton-dev/intero-server/fork>)
2. Create your feature branch (`git checkout -b feature-fooBar`)
3. Commit your changes (`git commit -a`)
4. Push to the branch (`git push origin feature-fooBar`)
5. Create a new Pull Request
6. Upon review it will be merged.

## License
Distributed under the BSD-3 Cause license. See [LICENSE](LICENSE) for more information.
