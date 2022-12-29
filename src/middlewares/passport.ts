import bcrypt from "bcrypt";
import passport from "passport";
import localStrategy from "passport-local";
import { IUser } from "../models/models";
import UserService, { IUserService } from "../services/user";

const LocalStrategy = localStrategy.Strategy;
const user: IUserService = new UserService()

passport.use(
  "register",
  new LocalStrategy(
    async (username, password, done) => {
      const userInDB: IUser[] = await user.getAllUsers();
      const isUserInDB = userInDB.find((u: IUser) => u.username === username);

      if (isUserInDB) return done("User already exists!");

      try {
        const hash = bcrypt.hashSync(
          password.toString(),
          bcrypt.genSaltSync(10)
        );

        const newUser: IUser = {
          username: username,
          password: hash,

        };

        const saved = await user.register(newUser);

        return done(null, saved);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.use(
  "login",
  new LocalStrategy(async (username, password, done) => {
    const userInDB: IUser[] = await user.getAllUsers();
    const find = userInDB.find((u: IUser) => u.username === username);

    if (!find || !(await bcrypt.compare(password.toString(), find.password)))
      return done("User or password incorrect");

    return done(null, find);
  })
);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser(async (username, done) => {
  const userdb: IUser[] = await user.getAllUsers();
  const find = userdb.find((x: IUser) => x.username === username);
  done(null, find);
});

export default passport;