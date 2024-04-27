const axios = require('axios');

async function getTasks(token) {
  try {
    const { data } = await axios({
      url: 'https://api-saakuru-gainz.beyondblitz.app/blitz/quest/current-quest',
      method: 'POST',
      headers: {
        Authorization: token,
      },
      data: {
        withQuestTask: true,
        withStatistic: true,
      },
    });

    return data.data.tasks;
  } catch (error) {
    throw new Error(`Error in fetching tasks: ${error.response.data.message}`);
  }
}

async function claimTask(token, id) {
  try {
    const { data } = await axios({
      url: 'https://api-saakuru-gainz.beyondblitz.app/blitz/quest/claim-quest-task',
      method: 'POST',
      headers: {
        Authorization: token,
      },
      data: {
        questId: 'quest_1',
        taskIds: [id],
      },
    });

    return data.data.totalPoints;
  } catch (error) {
    throw new Error(`Error in claiming task: ${error.response.data.message}`);
  }
}

async function getProfile(token) {
  try {
    const { data } = await axios({
      url: 'https://api-saakuru-gainz.beyondblitz.app/blitz/quest/get-user-quest-statistic',
      method: 'POST',
      headers: {
        Authorization: token,
      },
      data: {
        questId: 'quest_1',
      },
    });

    return {
      level: data.data.level,
      totalPoints: data.data.totalPoints,
    };
  } catch (error) {
    throw new Error(
      `Error in fetching profile: ${error.response.data.message}`
    );
  }
}

module.exports = { getTasks, claimTask, getProfile };
