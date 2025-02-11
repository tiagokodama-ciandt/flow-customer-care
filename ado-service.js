import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Basic ${process.env.ADO_BASIC_AUTH}`,
};

export async function workItems() {
  const data = JSON.stringify({
    query:
      "SELECT [System.Id] FROM WorkItems WHERE [System.Tags] CONTAINS 'winners report' AND [System.CreatedDate] > '2024-09-01'",
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.ADO_URL,
    data: data,
    headers,
  };

  const response = await axios.request({
    ...config,
  });
  return response.data?.workItems;
}

export async function workItemByUrl(workItemUrl) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: workItemUrl,
    headers,
  };

  const response = await axios.request({
    ...config,
  });
  return response.data;
}

export async function commentsByUrl(workItemCommentsUrl) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: workItemCommentsUrl,
    headers,
  };

  const response = await axios.request({
    ...config,
  });
  return response.data?.comments?.map((comment) => comment.text);
}
