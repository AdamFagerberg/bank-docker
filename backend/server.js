import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Generera engångslösenord, otp.
function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}

// Din kod här. Skriv dina arrayer

const users = [];
const accounts = [];
const sessions = [];

let count = 1;

function createRandomString() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Din kod här. Skriv dina routes:

app.post("/register", (req, res) => {
  const data = req.body;

  const initialAmount = 0;

  users.push(data);
  accounts.push({ id: count++, userId: data.id, amount: initialAmount });

  res.json(users);
});

app.post("/login", (req, res) => {
  const data = req.body;

  for (let i = 0; i < users.length; i++) {
    if (
      data.username === users[i].username &&
      data.password === users[i].password
    ) {
      const user = users[i];

      const token = createRandomString();

      sessions.push({ userId: user.id, token: token });

      res.json({ token: token });
    }
  }
});

app.post("/me/account", (req, res) => {
  const data = req.body;

  const token = data.token;

  for (let i = 0; i < sessions.length; i++) {
    if (token === sessions[i].token) {
      const currentUser = sessions[i].userId;

      for (let i = 0; i < accounts.length; i++) {
        if (currentUser === accounts[i].userId) {
          res.json(accounts[i]);
        }
      }
    }
  }
});

app.post("/me/name", (req, res) => {
  const data = req.body;

  const token = data.token;

  for (let i = 0; i < sessions.length; i++) {
    if (token === sessions[i].token) {
      const currentUser = sessions[i].userId;

      for (let i = 0; i < users.length; i++) {
        if (currentUser === users[i].id) {
          res.json(users[i].username);
        }
      }
    }
  }
});

app.post("/me/account/transactions", (req, res) => {
  const data = req.body;

  const { amount, token } = data;

  console.log(amount);

  for (let i = 0; i < sessions.length; i++) {
    if (token === sessions[i].token) {
      const currentUser = sessions[i].userId;
      console.log(currentUser);

      for (let i = 0; i < accounts.length; i++) {
        if (currentUser === accounts[i].userId) {
          accounts[i].amount += amount;
          console.log(accounts[i].amount);
          res.json(accounts[i]);
        }
      }
    }
  }
});

/* accounts.push({ id: count++, userId: data.id, amount: 0 }); */

// Starta servern
app.listen(port, () => {
  console.log(`Bankens backend körs på http://localhost:${port}`);
});
