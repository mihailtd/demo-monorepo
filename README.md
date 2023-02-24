# Demo Monorepo

This is is an educational project that accompanies two YouTube videos:

* [TypeScript Monorepo Setup with PNPM Workspaces, Vite, VueJS and TailwindCSS](https://youtu.be/HM03XGVlRXI)

* [DevSpace: The Easiest Way To Develop Kubernetes Apps Locally](https://youtu.be/N_XvAmzXwpA)

The project shows how to set up a monorepo with TypeScript, PNPM, Vite, VueJS and TailwindCSS, and how to use DevSpace to develop Kubernetes apps locally.

Prerequisites
To run this project, you need:

* Node.js 14 or higher

* PNPM 6 or higher

* Docker Desktop (or any other Kubernetes cluster such as Minikube, Kind, etc.)

* DevSpace CLI installed

## Installation:
To install the dependencies, run:

`pnpm install`

To build the ui-lib, run:

`pnpm lib build`

or in whatch mode:

`pnpm lib dev`

## Usage
To start the frontend app, run:

`pnpm client dev`

To start the backend app, run:

`pnpm svr dev`


To deploy the apps to Kubernetes using DevSpace, run:

`kubectl create namespace demo`

`devspace use namespace demo`

`devspace dev`

For more details and explanations, please watch the YouTube videos.