#!/usr/bin/env node

// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  align: 'left',
}
// Text + chalk definitions
let data = {
  'name': chalk.white('           高晓晨（宗羽） /'),
  'handle': chalk.cyan('gxcsoccer'),
  'work': chalk.white('Node.js Developer Advocate at Alipay'),
  'twitter': chalk.cyan('https://twitter.com/gxcsoccer'),
  'github': chalk.cyan('https://github.com/gxcsoccer'),
  'weibo': chalk.cyan('https://weibo.com/wcmis143'),
  'wechat': chalk.cyan('gxcsoccer'),
  'npx': chalk.white('npx gxcsoccer'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelTwitter': chalk.white.bold('   Twitter:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelWeibo': chalk.white.bold('     Weibo:'),
  'labelWechat': chalk.white.bold('    Wechat:'),
  'labelCard': chalk.white.bold('      Card:'),
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var weiboing = `${data.labelWeibo}  ${data.weibo}`
var wechating = `${data.labelWechat}  ${data.wechat}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output = heading + newline + newline + working + newline + githubing + newline + twittering + newline + weiboing + newline + wechating + newline + newline + carding

console.log(chalk.green(boxen(output, options)))
