import Flagsmith from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: "ser.5pn8oadMWEhfK9dktuL4uK",
  requestTimeoutSeconds: 60,
});

export default flagsmith;
