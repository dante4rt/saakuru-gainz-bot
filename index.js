const colors = require('colors');
const readlineSync = require('readline-sync');
const fs = require('fs');
const { getTasks, claimTask, getProfile } = require('./api');

(async () => {
  try {
    process.stdout.write('\x1Bc');
    console.log(colors.cyan('========================================'));
    console.log(colors.cyan('=          Saakuru Gainz Bot           ='));
    console.log(colors.cyan('=     Created by HappyCuanAirdrop      ='));
    console.log(colors.cyan('=    https://t.me/HappyCuanAirdrop     ='));
    console.log(colors.cyan('========================================'));
    console.log();

    const myTokens = JSON.parse(fs.readFileSync('accounts.json'));

    const choice = readlineSync.question(
      'Enter 1 to check your profile or 2 to claim tasks: '
    );

    if (choice === '1') {
      for (const token of myTokens) {
        try {
          const profile = await getProfile(token);
          console.log();
          console.log(
            colors.yellow('👋 Hello! Here are your profile details 👇')
          );
          console.log();
          console.log(
            colors.yellow(`Your level: ${JSON.stringify(profile.level)}`)
          );
          console.log(
            colors.yellow(`Your points: ${JSON.stringify(profile.totalPoints)}`)
          );
          console.log(colors.cyan('========================================'));
        } catch (error) {
          console.log(
            colors.red('❌ Error in fetching profile:'),
            error.message
          );
          console.log(colors.cyan('========================================'));
        }
      }
    } else if (choice === '2') {
      for (const token of myTokens) {
        try {
          const tasks = await getTasks(token);
          for (const task of tasks) {
            try {
              const totalPoints = await claimTask(token, task.id);
              console.log();
              console.log(
                colors.green(
                  `✅ Quest has been claimed! ${JSON.stringify(
                    totalPoints
                  )} has been added to your account.`
                )
              );
              console.log(
                colors.cyan('========================================')
              );
            } catch (error) {
              console.log();
              console.log(
                colors.red('❌ Error in claiming task:'),
                error.message
              );
              console.log(
                colors.cyan('========================================')
              );
            }
          }
        } catch (error) {
          console.log(colors.red('❌ Error in fetching tasks:'), error.message);
          console.log(colors.cyan('========================================'));
        }
      }
    } else {
      console.log(colors.red('❌ Invalid choice.'));
    }
  } catch (error) {
    console.log(colors.red('❌ Error:'), error);
  }
})();
