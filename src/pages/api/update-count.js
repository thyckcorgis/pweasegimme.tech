//@ts-check
import { connect } from "../../util/connectDb";

const updateCount = async (req, res) => {
  const client = await connect();
  await client.execute(
    "UPDATE studies.count SET count = count + 1 where id = 1"
  );
  await client.shutdown();
  res.send("ok");
};

export default updateCount;
