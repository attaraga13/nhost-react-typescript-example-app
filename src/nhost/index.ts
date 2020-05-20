import nhost from "nhost-js-sdk";

const config = {
  base_url: "http://localhost:3000",
};

nhost.initializeApp(config);

const auth = nhost.auth();
const storage = nhost.storage();

export { auth, storage };
