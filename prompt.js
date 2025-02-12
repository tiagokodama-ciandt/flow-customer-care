export function getPrompt (comments) {
    return `Analyze the above conversation based on the following criteria:
1. Satisfaction: How satisfied does the user seem with the support they received?
2. Communication: How clear and effective was the communication between the user and the support agent?
3. Support Quality: How would you rate the quality of support provided?
4. Engagement: How engaged did the user appear to be during the conversation?
5. Feedback: Was any feedback provided by the user, either positive or negative?
6. Resolution: Was the user's issue resolved satisfactorily?
7. Follow-up: Was there any mention of follow-up actions or future support?

fulfill this object with the values as a integer [0-10] and the "summary" is the summary of the conversation:
{
    "Satisfaction": value,
    "Communication": value,
    "Support Quality": value,
    "Engagement": value,
    "Feedback": value,
    "Resolution": value,
    "Follow-up": value,
    "General comments": "summary"
}

Just return in the json line format.

If you didn't find any conversation, just fulfill the value 0.

"""
${comments}
"""
`
}
