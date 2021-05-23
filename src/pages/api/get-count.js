//@ts-check
import { connect } from "../../util/connectDb";

const getCount = async (req, res) => {
  const client = await connect();
  const result = await client.execute("SELECT * FROM studies.count");
  const count = result.rows[0].count;
  res.json({ count });
};

export default getCount;
