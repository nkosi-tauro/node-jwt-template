
<h1 align="center">Node JWT Template</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/nkosi-tauro/node-jwt-template?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/nkosi-tauro/node-jwt-template?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/nkosi-tauro/node-jwt-template?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/nkosi-tauro/node-jwt-template?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/nkosi-tauro/node-jwt-template?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/nkosi-tauro/node-jwt-template?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/nkosi-tauro/node-jwt-template?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  node-jwt-template 🚀 Under construction...  🚧
</h4> 

<hr> -->

<br>

## :dart: About ##

A NodeJS JWT backend with Register, Login and MongoDB


## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://docs.atlas.mongodb.com/)
- [JSON Web Tokens](https://jwt.io/)

- [Quick MongoDB Tutorial](https://wirescript.now.sh/blog/how-to-setup-mongodb-with-node-js-and-express)
## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/nkosi-tauro/node-jwt-template

# Access
$ cd node-jwt-template

# Install dependencies
$ npm install

#Setup MongoDB
$ See MongoDB Tutorial

#Setup .env
$ set MONGO_PROD_URI and JWT_SECRET in your env file

# Run the project
$ npm  start

# The server will initialize on <http://localhost:8000>

#Use Postman to test Routes
Register Route
POST : http://localhost:8000/api/register
Raw -> JSON
Example 
{
    "name" : "Test",
    "email" : "pizza@test.com",
    "password": "apples"
}

Login Route
POST : http://localhost:8000/api/login
Raw -> JSON
Example 
{
    "email" : "pizza@test.com",
    "password": "apples"
}  

User Route
GET : http://localhost:8000/api/user

Logout Route
POST : http://localhost:8000/api/logout


```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE) file.


Made with :heart: by <a href="https://github.com/nkosi-tauro" target="_blank">Nkosilathi Tauro</a>

Feel free to **Fork** this repo and use it! 😊

&#xa0;

<a href="#top">Back to top</a>
