export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coachData = {
      id: context.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    const response = await fetch(
      `https://coach-finder-51930-default-rtdb.europe-west1.firebasedatabase.app/coaches${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit("registerCoach", {
      ...coachData,
      id: userId,
    });
  },
};
