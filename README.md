# Raven's Eye

Raven's Eye is a simple Node.js app that allows you to receive and inspect webhooks for debugging purposes. It is built using Express, Socket.IO, and Bootstrap.

<table border="0">
  <tr>
    <td>
      <img src="https://i.imgur.com/EFQXl3g.png" alt="Image 1" width="50%" />
    </td>
    <td>
      <img src="https://i.imgur.com/64Lg7ge.png" alt="Image 2" width="50%" />
    </td>
  </tr>
</table>

## Features

- Receive webhooks at the `/webhook` endpoint
- List all received requests on the homepage
- View request details, including timestamp, method, headers, and body
- Automatically update the request list without page refresh
- Clear all requests with a single button

## Installation

Follow these steps to set up the project:

1. Clone the repository:

```bash
git clone https://github.com/mrfelipemartins/ravens-eye.git
cd ravens-eye
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the server:

```bash
node app.js
```

The app will be running on http://localhost:3001. Send your webhooks to http://localhost:3001/webhook to see them in the debugger.


# Contributing

If you want to contribute to this project, feel free to create a fork and submit a pull request. We appreciate any help in improving and expanding the functionality of Raven's Eye!

# License

This project is released under the MIT License. See LICENSE file for more details.