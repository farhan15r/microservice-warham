#!/bin/bash

printf "Enabling Cloud Build APIs...\n"
gcloud services enable cloudbuild.googleapis.com
printf "Completed.\n\n"

printf "build docker for each directory...\n"
cd ./addresses
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/addresses:latest .
printf "Completed Building addresses Container...\n\n"



printf "Building user Container...\n"
cd ../user
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/user:latest .
printf "Completed Building user...\n\n"

printf "Building contact Container...\n"
cd ../contact
gcloud builds submit --tag gcr.io/${GOOGLE_CLOUD_PROJECT}/contact:latest .
printf "Completed building contact....\n\n"



# printf "Deploying Monolith To GKE Cluster...\n"
# kubectl create deployment monolith --image=gcr.io/${GOOGLE_CLOUD_PROJECT}/monolith:1.0.0
# kubectl expose deployment monolith --type=LoadBalancer --port 80 --target-port 8080
# printf "Completed.\n\n"

printf "Please run the following command to find the IP address for the service: kubectl get service monolith\n\n"

printf "completed successfully!\n"
