# Direct Print App

**Direct Print App** is an Electron application designed to send print jobs directly to the default printer without prompting the user with a print dialog. This functionality is ideal for point-of-sale systems, kiosks, and other environments that require silent printing.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Locate the Executable](#locate-the-executable)

## Features
- **Silent Printing**: Directly sends print jobs to the default printer without showing a print dialog.
- **Cross-Platform Support**: Runs on Windows, macOS, and Linux.

## Prerequisites
- **Node.js** (v14 or later) and **npm** (Node Package Manager)
- **Git** (optional, for cloning the repository)

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mutafaf/direct-printing-app.git
   cd direct-print-app
    ```
2. **Generate build for required platform**
    - Windows
    ```bash
   npm run build --win
	```

	- Mac
    ```bash
	npm run build --mac
	```

	- Linux
    ```bash
	npm run build --linux
	```

### Locate the Executable
Generated build will be located inside dist directory. Simply run the executable and enjoy..!!
