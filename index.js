const f = require('node-fetch')
const express = require('express')
var colors = require('colors');
const prompts = require('prompts');
const discord = require('discord.js')
const regifetch = require('regifetch')

const fetch = (url = String(), options = JSON) =>
new Promise((resolve, reject) => {
  resolve(f(url, options));
  reject(console.error('Promise was rejected!'))
});

const prompt = (options = JSON) => new Promise((resolve, reject) => {
  resolve(prompts(options))
})

const log = (input) => console.log(input)

const Class = new class { };

const server = express


module.exports = {
  regifetch,
  log,
  colors,
  prompt,
  discord,
  Class,
  server
}