import { User } from '../models/index.js';
import { signToken, AuthenticationError } from '../utils/auth.js';

interface AddUserArgs {
  input:{
    firstname: string;
    email: string;
    password: string;
  }
}

interface LoginUserArgs {
  email: string;
  password: string;
}

interface UserArgs {
  email: string;
}



const resolvers = {
  Query: {
    user: async (_parent: any, { email }: UserArgs) => {
      return User.findOne({ email }).populate('');
    },
    // Query to get the authenticated user's information
    // The 'me' query relies on the context to check if the user is authenticated
    me: async (_parent: any, _args: any, context: any) => {
      // If the user is authenticated, find and return the user's information along with their thoughts
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('');
      }
      // If the user is not authenticated, throw an AuthenticationError
      throw new AuthenticationError('Could not authenticate user.');
    },
  },
  Mutation: {
    addUser: async (_parent: any, { input }: AddUserArgs) => {
      // Create a new user with the provided firstname, email, and password
      const { firstname, email, password } = input;
      const user = await User.create({ firstname, email, password });
      
      // Sign a token with the user's information
      const token = signToken(user.email, user._id);
      // const token = signToken(user.firstname, user.lastname, user.email, user.message);
      console.log({ token, user });
      // Return the token and the user
      return { token, user };
    },
    
    login: async (_parent: any, { email, password }: LoginUserArgs) => {
      // Find a user with the provided email
      console.log(`login1: ${email}`);
      const user = await User.findOne({ email });
    
      // If no user is found, throw an AuthenticationError
      if (!user) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Check if the provided password is correct
      const correctPw = await user.isCorrectPassword(password);
    
      // If the password is incorrect, throw an AuthenticationError
      if (!correctPw) {
        throw new AuthenticationError('Could not authenticate user.');
      }
    
      // Sign a token with the user's information
      const token = signToken(user.email, user._id);
      console.log(`login2: ${user}`);
      
      // Return the token and the user
      return { token, user };
    },
  },
};

export default resolvers;
