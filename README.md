### How to run

1. Run `npm install` to install the necessary package
2. Run `npm run server` to run the server we are using [json-sever](https://github.com/typicode/json-server) to mock our server, the port will be available at `http://localhost:8080`
3. Run `npm run dev` to start local development on port `http:/localhost:3000`

Should you need fresh seed you can run `node db/seed.js` to freshly seed your database

### Things to Improve

1. On the thread/post page, we can do a parallel routes on the post content and post comment, so that our waterfall and component rendering is better
2. Adding unit test for better confident to deploy to production
3. Better separation concern on foldering between client and server