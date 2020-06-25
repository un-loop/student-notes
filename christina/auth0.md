# Auth0 Flow

- After the app's identity is authenticated and the auth grant is validated, the auth server sends the app an access token. The access token proves that the client is allowed to call the app's protected APIs. The resource server is where the APIs are hosted. This could be a server you control or Auth0 itself if you're storing user data there. The access token is included in the request to prove that it's authorized. Now as long as the token is valid, the resource server returns the requested data. Now the flow above is just a general example. The exact flow will depend on the method used by your app to request authorization and the grant types supported by the API. Now OAuth specifies a number of different grants. A grant is a way to receive an access token. And remember, an access token is used to request access to APIs. A grant describes a workflow

- The first question is about whether the party that requires access is a machine. An example of machine to machine communication is a scheduled job. There's no human involved. The scheduled job is the resource owner in such a case. 

- React apps are not typically scheduled jobs, they're utilized by users, so this flow doesn't apply. React apps typically execute on the client, not the server.

- Now since React apps run in the browser, the client can't be trusted with user credentials, so this flow doesn't apply. These final two flows are most likely to apply to your React app. 

- If you're building a React Native app, then the authorization code grant may be the best fit. 

- But most React apps are traditional client-side rendered SPAs, also known as single-page applications. So if you're securing a React app, the Implicit Grant flow is most likely to be the best fit. 

- First, your app directs the browser to the Auth0 sign in page where the user authenticates. Then Auth0 redirects the browser back to the specified redirect URI along with access and ID tokens as hash fragments in the URI. 

- And finally, your app extracts these tokens from the URI and stores the relevant authentication data in local storage.

# JSON web tokens

- JSON Web Tokens are a token standard. They're used to pass important data around using JSON. A JSON Web Token is an access token. It's typically used for authorization and secure information exchange, so it often contains user information. Now JWT stands for JSON Web Token, but people typically just pronounce this as jot. The content inside can be verified and trusted because it's digitally signed. You can trust the data inside because you can trust that it came from the sender and that its content hasn't been tampered with. The content can be encrypted to assure security, but that's less common, so note, don't put secret data in the payload or the header elements unless the JWT is encrypted.

-  Identity token is typically a JWT. OAuth 2 determines what you're allowed to do and it uses an access token. The access token is often a JWT as well, although depending on your settings, it may just be a plain string. 

- JWT become the most popular authentication token approach? Well, because JSON is less verbose than XML, so not surprisingly an encoded JWT is smaller than the equivalent SAML token too. JWTs are easier to digitally sign than a SAML token. And perhaps most importantly, JSON is easy to parse on almost any platform, especially the web browser since it's JavaScript. 

- A JWT has three parts: a header, a body, and a signature. 

- The header specifies the type of the token and the hash algorithm that was used to create the token's content. 

- The body contains the identity claims. A claim is some info about a subject, typically a user. It's called a claim because it's information that the JWT is claiming is true about the user.Example contains the claim that a user is John Doe. 

- Common data in the body includes the user's name and the time that the JWT was issued. 

- Finally, the signature verifies the sender and assures that the JWT's content hasn't been tampered with.

- Note that many of the property names are short abbreviations in order to keep the JWT compact. 

- The header, body, and signature are each Base64 encoded and then they're separated by dots.

- A JWT looks like a bunch of random characters because remember, that's because it's Base64 encoded. 

- An easy way to decode a JWT is to use jwt.io. 

- OAuth and OpenID Connect use two different tokens. OIDC uses an identity token and OAuth 2 uses an access token. 

-Unlike cookies, JWTs can't be revoked. Because they're trusted by the client without a callback to the server. So it's important to set their life span to a relatively short period. This is why Auth0 defaults to about 10 hours.