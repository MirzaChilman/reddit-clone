const { faker } = require("@faker-js/faker");
const fs = require("fs");

// Generate a random date between `start` and `end`
function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// Generate mock users data
function generateMockUsers(count) {
  const users = [];

  for (let i = 1; i <= count; i++) {
    const user = {
      id: i,
      username: faker.internet.userName(),
      email: faker.internet.email(),
      createdAt: getRandomDate(new Date(2010, 0, 1), new Date()),
    };

    users.push(user);
  }

  return users;
}

// Generate specific subreddit data
function generateMockSubreddits() {
  const subreddits = [
    {
      id: 1,
      name: "r/ReactJs",
      description: faker.lorem.sentence(),
      createdAt: getRandomDate(new Date(2010, 0, 1), new Date()),
    },
    {
      id: 2,
      name: "r/Cats",
      description: faker.lorem.sentence(),
      createdAt: getRandomDate(new Date(2010, 0, 1), new Date()),
    },
    {
      id: 3,
      name: "r/Memes",
      description: faker.lorem.sentence(),
      createdAt: getRandomDate(new Date(2010, 0, 1), new Date()),
    },
  ];

  return subreddits;
}

// Generate mock comments data
function generateMockComments(users, depth = 0) {
  const comments = [];

  // Limit the depth of nested comments
  if (depth > 3) {
    return comments;
  }

  const count = Math.floor(Math.random() * 10); // Generate up to 10 comments

  for (let i = 1; i <= count; i++) {
    const user = users[Math.floor(Math.random() * users.length)];

    const comment = {
      id: i,
      content: faker.lorem.sentence(),
      author: user.username,
      createdAt: getRandomDate(new Date(2020, 0, 1), new Date()),
      replies: generateMockComments(users, depth + 1), // Generate nested comments
    };

    comments.push(comment);
  }

  return comments;
}

// Generate mock posts data
function generateMockPosts(users, subreddits, count) {
  const posts = [];
  const types = ["best", "hot", "new", "top"];

  for (let i = 1; i <= count; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const subreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const comments = generateMockComments(
      users,
      Math.floor(Math.random() * 10)
    ); // Generate up to 10 comments per post
    const votes = Math.floor(Math.random() * 1000) - 500; // Generate a number between -500 and 500 for votes

    const post = {
      id: i,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      author: user.username,
      subreddit: subreddit.name,
      type: type,
      comments: comments,
      votes: votes,
      createdAt: getRandomDate(new Date(2020, 0, 1), new Date()),
    };

    posts.push(post);
  }

  return posts;
}

// Generate mock data
const users = generateMockUsers(50); // Generate 50 users
const subreddits = generateMockSubreddits(); // Generate specific subreddits
const posts = generateMockPosts(users, subreddits, 100); // Generate 100 posts

// Combine data into a single object
const redditMockData = {
  users,
  subreddits,
  posts,
};

// Write mock data to a JSON file
fs.writeFileSync("db/db.json", JSON.stringify(redditMockData, null, 2));

console.log(
  "Reddit mock data has been generated and saved to reddit_mock_data.json."
);
