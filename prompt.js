export function getPrompt (comments) {
    return `In the customer service context, read the comments and provide
the values for:
Satisfaction, Communication, Support Quality, Engagement,
Feedback, Resolution, Follow-up

fulfill this object with the values as a integer [0-10] from the comments:
{
    "Satisfaction": value,
    "Communication": value,
    "Support Quality": value,
    "Engagement": value,
    "Feedback": value,
    "Resolution": value,
    "Follow-up": value
}

Just return in the json line format

"""
${comments}
"""
`
}
