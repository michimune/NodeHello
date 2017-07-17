# Node Hello World app

## Overview

This is an example application to demonstrate how to deploy a node app from github to Azure Web App on Linux using Azure portal.

## Step-by-step Instructions

1. Clone this project to your repository.
1. Log in to Azure Portal at https://portal.azure.com/.
1. Navigate to New, Web+Mobile, Web App.
1. Fill out the blade by choosing subscription, resource group, App Service Plan. Choose **Linux** for the operating system. From the runtime stack list, pick the latest Node.
1. Click **Create** and wait.
1. When created, browse the page. You will see the default landing page.
1. Go to **Deployment options**, choose **GitHub**, your project and branch that you cloned at the step 1. Click **OK**.
1. Go to **Docker Container**, set **process.json** as Startup File. Click **OK**.
1. Refresh the page.
