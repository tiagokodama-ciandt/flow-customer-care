import axios from "axios";

const token = `Bearer ${process.env.FLOW_TOKEN}`;

export async function callFlow(prompt) {
  const data = JSON.stringify({
    stream: false,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    max_tokens: 3000,
    model: "gpt-4o",
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: process.env.FLOW_URL,
    headers: {
      FlowTenant: process.env.FLOW_TENANT,
      "Content-Type": "application/json",
      Accept: "application/json",
      FlowAgent: "agent-name",
      Authorization: token,
    },
    data: data,
  };

  const response = await axios.request({
    ...config,
  });
  return response.data?.choices[0].message.content;
}
