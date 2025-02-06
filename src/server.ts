import dotenv from "dotenv"
import {createServer } from "node:https";

dotenv.config()
const sv = createServer()
const PORT = Number(process.env.PORT!) || 7321

Error.stackTraceLimit = Infinity;


process.on('SIGINT', () => process.exit())

process.on('SIGTERM', () => process.exit())

sv.listen(PORT, () => console.log(`Listening on port ${PORT}`))