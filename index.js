import 'dotenv/config'

import { workItemByUrl, workItems, commentsByUrl } from './ado-service.js'
import { callFlow } from './flow-service.js'
import { convertToCSV, createFile } from './tools.js'
import { getPrompt } from './prompt.js'

async function main () {
    const workItemsRef = await workItems()

    const evaluationsPromise = workItemsRef.map(async (workItemRef) => {
        const workItem = await workItemByUrl(workItemRef.url)

        const commentsUrl = workItem._links.workItemComments.href

        const comments = await commentsByUrl(commentsUrl)

        const flowResponse = await callFlow(getPrompt(JSON.stringify(comments)))

        const jsonString = flowResponse
                            .replaceAll("```", "")
                            .replace("json", "").trim()

        const json = JSON.parse(jsonString)

        json.id = workItemRef.id
        json.url = workItemRef.url

        return json
    })

    const evaluations = await Promise.all(evaluationsPromise)

    const csv = convertToCSV(evaluations)

    await createFile(csv)

    console.log("Finished!")
}

main().then(console.log).catch(console.error)
