## Serverless Stack
# Create a DynamoDB table
- Amazon DynamoDV os a fully managed NoSQL database that provides the fast and predictable performance with seamless scalability.
- Similar to other databases DynamoDB stores data in tables
- Each table contains multiple items  and each item is composed of one or more attributes
# Create Table
1. Log into AWS console and select DynamoDB from the list of services.
2. Select Create Table 
3. Enter the table name and primary key info. (makebsure that userId and noteID are in camel case)
     - Each DynamoDB table has a primary key which can not be changed once set,
     - The primary key uniquely identifies each item in the table, so that no two items can have the same key.
     - DynamoDB supports two different kinds of primary keys:
    1. Partition Key
    2. Partition key and sort key

4. Next scroll down and deselect Use Default Setting
5. Scroll down further and select On-demand
    - On demand capacity is DynamoDB's pay per request mode. For workloads that are not predictable or if you are new this is a lot cheaper than the Provisioned Capacity
6. Scroll further down and hit Create
- Your DynamoDB table has now been created.
# S3 bucket to handle file uploads
- Amazon S3 (SImple Storage Service) provides storage service through web services interfaces like REST. 
- You can store any object in S3 including images, videos, files
- Objects are organized into buckets, and identified within each bucket by a unique, user assigned key
# Create Bucket
1. From AWS services select S3 from the list of services
2. Select Create bucket
3. Pick a name of the bucket and select a region then select create
    - Bucket names are globally unique which means you can not pick the same name as this tutorial
    - Region is the physical geographical region where the files are stored. 
4. Keep the defaults by clicking next till you can click Create Bucket on the last screen
5. Enable CORS 
CORS- Cross-origin resource sharing
- By default S3 does not allow its resources to be accessed from a different domain but CORS defines a way for client web application that are loaded in one domain to interact with resources in a different domain
    1. Select the bucket you just created
    2. Select the Permissions tabs then select CORS configuration
    3. Add the following CORS configuration in the editor and then hit save
    - **EX:** 
    <CORSConfiguration>
	<CORSRule>
		<AllowedOrigin>*</AllowedOrigin>
		<AllowedMethod>GET</AllowedMethod>
		<AllowedMethod>PUT</AllowedMethod>
		<AllowedMethod>POST</AllowedMethod>
		<AllowedMethod>HEAD</AllowedMethod>
		<AllowedMethod>DELETE</AllowedMethod>
		<MaxAgeSeconds>3000</MaxAgeSeconds>
		<AllowedHeader>*</AllowedHeader>
	</CORSRule>
</CORSConfiguration>

# Create User Pool
1. From AWS console select cognito from the list of services
2. Select Manage your User Pools
3. Select Create a User Pool
4. Enter Pool name and select Review defaults
5. Select Choose username attributes
6. Select Email address or phone numbers and allow email addresses
    - This is telling Cognito User Pool that we want our users to be able to sign up and login with their email as their username
7. Scroll down and select Next step
8. Hit review in the side panel and make sure that the Username attributes is set to email
9. Now hit Create pool at the bottom of the page
    - Take a note of the Pool Id and Pool ARN which will be required later 
    - Note the region that your User Pool is created in
# Create App Client
1. Select App clients from the left panel
2. Select Add an app client
3. Enter App client name
4. Un-select Generate client secret
5. Enable sign-in API for server-based authentication
6. Create app client
    - **Disable client secret generation:** user pool apps with a client secret are not supported by the Javascript SDK. We need to un-select the option
    - **Enable username password auth for admin APIs for authentication:** required by AWS CLI when managing the pool users via command line interface. We will be creating a test user through the command line interface in the next chapter
7. Create app client
    - Take note of the App client id which will be required in the later chapters
8. Finally select Domain name from the left panel
    - Enter your unique domain name and select Save changes
# Create a Cognito Test User
1. Select AWS CLI to sign up a user through the comand line in VS code
put in:
aws cognito-idp sign-up \
  --region us-east-2 \
  --client-id 7q39dpeeqnjncj0cop10tcfu5e \
  --username admin@example.com \
  --password Passw0rd!
2. After the user is created in Cognito User Pool before the user can authenticate with the User Pool the account needs to be verified. To verify enter the information below into the terminal:
    aws cognito-idp admin-confirm-sign-up \
  --region us-east-2 \
  --user-pool-id us-east-2_K36Siuhgu \
  --username admin@example.com





