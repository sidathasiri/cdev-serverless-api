const handler = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Cluster.dev!'),
  };
  return response;
};

module.exports = { handler };
