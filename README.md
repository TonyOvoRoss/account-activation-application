An Express web app

Build & Deploy 
     
   - Retrieve an authentication token and authenticate your Docker client to the AWS ECR registry. 
   - Build your Docker image. 
   - Tag the image. 
   - Push image to AWS ECR.
  
1.  `aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 853495953948.dkr.ecr.us-west-2.amazonaws.com`

2.  `docker build -t account-activation-ecr-repo` .

3.  `docker tag account-activation-ecr-repo:latest 853495953948.dkr.ecr.us-west-2.amazonaws.com/account-activation-ecr-repo:latest`

4.  `docker push 853495953948.dkr.ecr.us-west-2.amazonaws.com/account-activation-ecr-repo:latest`