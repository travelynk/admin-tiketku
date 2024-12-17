# Admin Dashboard Tiketku

This repository contains the admin dashboard codebase for Team 6's final project, for management resource and data tiketku app. The admin dashboard is built using Node.js, Express.js, Edge.js, and Taileind css following a layered architecture to ensure clean code organization and scalability.

## Feat List

1. Auth
2. Country
3. City
4. Airport
5. Airline
6. Terminal
7. Flight
8. Voucher
9. User

## Setup Tools

To use the admin dashbaord, you need the source code and Node.js. Follow the steps below:

1. [Download the source code.](https://github.com/travelynk/admin-tiketku.git)
    - Or clone: `git clone https://github.com/travelynk/final-project-backend.git`.
2. [Download and install Node.js](https://nodejs.org/download), which is used for dependency management.
3. Navigate to the root directory `/final-project-backend` and run the command `npm install` to install the dependencies listed in the [package.json](/package.json) file.

Once completed, you can run various commands provided from the command line.

## Using NPM Scripts

The [package.json](/package.json) includes the following commands and tasks:

|---------------------------------------------------------------------------------------------------------------|
| Task                       | Description                                                                      |
|---------------------------------------------------------------------------------------------------------------|
| `npm install`              | Untuk menginstal semua dependensi proyek.                                        |
| `npm run start`            | Untuk menjalankan aplikasi dalam mode produksi.                                  |
| `npm run watch`            | Untuk menjalankan aplikasi dalam mode pengembangan.                              |
| `npm run css`              | Untuk render/build style tailwind                                                |
| `npm run dev`              | Untuk menjalankan aplikasi dalam mode pengembangan beserta build style tailwind. |
| `npm run lint`             | Untuk memeriksa kode dengan ESLint.                                              |
| `npm run lint:fix`         | Untuk memperbaiki masalah linting secara otomatis.                               |
-----------------------------------------------------------------------------------------------------------------

## Project Structure

The project is organized into the following directories:

```plaintext
    ───.github                          # GitHub configuration files
    │   └───workflows                   # GitHub Actions workflows
    ├───public  
    │   ├───css                         # Public CSS files
    │   ├───images                      # Public images
    │   │   └───icons                   # Icons used in the project
    │   └───js                          # Public JavaScript files
    └───src 
        ├───configs                     # Configuration files
        ├───middlewares                 # Middleware functions
        ├───modules                     # Application modules
        │   ├───airline                 # Airline module
        │   ├───airport                 # Airport module
        │   ├───auth                    # Authentication module
        │   ├───city                    # City module
        │   ├───dashboard               # Dashboard module
        │   ├───flight                  # Flight module
        │   ├───terminal                # Terminal module
        │   ├───user                    # User module
        │   └───voucher                 # Voucher module
        ├───resources                   # Resource files
        │   ├───css                     # CSS resources
        │   └───views                   # View templates
        │       ├───components          # UI components
        │       │   ├───layout          # Layout components
        │       │   ├───partials        # Partial components
        │       │   └───ui              # UI components
        │       │       ├───airport     # Airport UI components
        │       │       ├───city        # City UI components
        │       │       ├───dashboard   # Dashboard UI components
        │       │       ├───flight      # Flight UI components
        │       │       └───terminal    # Terminal UI components
        │       └───pages               # Page templates
        │           ├───airline         # Airline pages
        │           ├───airport         # Airport pages
        │           ├───auth            # Authentication pages
        │           ├───city            # City pages
        │           ├───dashboard       # Dashboard pages
        │           ├───error           # Error pages
        │           ├───flight          # Flight pages
        │           ├───terminal        # Terminal pages
        │           ├───user            # User pages
        │           └───voucher         # Voucher pages
        └───utils                       # Utility functions
```

### Link to Dashboard Admin
1.  [Travelynk - Admin Dashboard Tiketku](https://admin-tiketku.padek.tech)