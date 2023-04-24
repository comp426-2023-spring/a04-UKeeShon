#!/usr/bin/env node

import { rps, rpsls } from "./lib/rpsls.js"
import express from "express"
import minimist from "minimist"

const app = express();
const argv = minimist(process.argv.slice(2))
const port = argv.port || 5000;
