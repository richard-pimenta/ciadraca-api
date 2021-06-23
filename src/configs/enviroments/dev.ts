
import { ConnectionOptions } from 'mongoose'
require('dotenv').config()

export const server = {
  port: 3000
};
export const mongoConnectionOptions : ConnectionOptions = {
  useCreateIndex:true,
  useNewUrlParser: true,
  useUnifiedTopology: true
};