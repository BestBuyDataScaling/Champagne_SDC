module.exports = {
  apps: [{
    name: 'Blom',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-129-15-180.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/tutorial.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/searchbar_service.git',
      path: '/home/ubuntu/blom',
      'post-deploy': 'npm install && cd client && npm install && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js'
    }
  }
}